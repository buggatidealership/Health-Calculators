#!/usr/bin/env python3
"""
Cascade-enforcement Stop hook for the AI Sector Research OS.

Enforces CLAUDE.md Critical Rule #10 (ALWAYS CASCADE CROSS-SOURCE SYNTHESIS).

When a cross-source synthesis artifact (thesis comparison, 13F event,
triangulation update, source-reliability update, sector comparison) has
been modified in the current changeset — working tree, staged, or most
recent commit — verify that every named ticker referenced in that artifact
has a back-reference to the artifact in its companies/{TICKER}/thesis.md
file. If any ticker is missing the back-reference, exit 2 with stderr
feedback so Claude is forced to complete the cascade.

Scope: only enforces inside the Health-Calculators repo.

Why this exists (B16 in meta/biases-watchlist.md): instructions in
CLAUDE.md are choices the model can skip. Hooks are deterministic
enforcement. The cascade discipline is too important to leave optional —
synthesis artifacts that don't reach the per-company thesis files where
portfolio decisions get made are operationally useless.

Testing:
  - Run directly: `python3 ~/.claude/cascade-enforcement-hook.py`
  - Pass case (cascade complete): exit code 0, no output
  - Fail case (back-reference missing): exit code 2, stderr lists missing
"""

import json
import os
import re
import subprocess
import sys

REPO_ROOT = "/home/user/Health-Calculators"
ENFORCEMENT_PATHS = [REPO_ROOT]


def in_scope() -> bool:
    cwd = os.getcwd()
    return any(cwd.startswith(p) for p in ENFORCEMENT_PATHS)


def read_stdin_json():
    try:
        data = sys.stdin.read()
        if not data:
            return {}
        return json.loads(data)
    except Exception:
        return {}


def files_in_current_changeset() -> set:
    """Working tree + staged + most-recent-commit files (paths relative to REPO_ROOT)."""
    files = set()
    try:
        r = subprocess.run(
            ["git", "-C", REPO_ROOT, "status", "--porcelain"],
            capture_output=True, text=True, check=True
        )
        for line in r.stdout.splitlines():
            # porcelain format: XY <path>
            if len(line) > 3:
                files.add(line[3:].strip())
    except Exception:
        pass
    try:
        r = subprocess.run(
            ["git", "-C", REPO_ROOT, "diff-tree", "--no-commit-id", "--name-only", "-r", "HEAD"],
            capture_output=True, text=True, check=True
        )
        for line in r.stdout.splitlines():
            line = line.strip()
            if line:
                files.add(line)
    except Exception:
        pass
    return files


SYNTHESIS_ARTIFACT_PATTERNS = [
    r"^research/meta/.*-comparison\.md$",
    r"^research/meta/.*-thesis-comparison\.md$",
    r"^research/signals/events/.*\.md$",
    r"^research/signals/triangulation\.md$",
    r"^research/sector/.*-comparison\.md$",
    # Wiki primers reference multiple companies and should cascade too
    # (added 2026-05-21 after memory-cycle-primer.md gap)
    r"^research/wiki/.*-primer\.md$",
    r"^research/wiki/.*-scaling\.md$",
]


def is_synthesis_artifact(filepath: str) -> bool:
    return any(re.search(p, filepath) for p in SYNTHESIS_ARTIFACT_PATTERNS)


def get_valid_tickers() -> set:
    d = os.path.join(REPO_ROOT, "research/companies")
    if not os.path.isdir(d):
        return set()
    return {
        name for name in os.listdir(d)
        if os.path.isdir(os.path.join(d, name))
    }


def extract_named_tickers(artifact_relpath: str, valid_tickers: set) -> set:
    abs_path = os.path.join(REPO_ROOT, artifact_relpath)
    if not os.path.exists(abs_path):
        return set()
    try:
        with open(abs_path) as f:
            content = f.read()
    except Exception:
        return set()
    # Pattern 1: companies/{TICKER}/ references
    t1 = set(re.findall(r"companies/([A-Z][A-Z0-9_]+)/", content))
    # Pattern 2: bold **TICKER** in tables / headers
    t2 = set(re.findall(r"\*\*([A-Z]{2,8})\*\*", content))
    return (t1 | t2) & valid_tickers


def thesis_has_backreference(ticker: str, artifact_relpath: str) -> bool:
    thesis_path = os.path.join(REPO_ROOT, "research/companies", ticker, "thesis.md")
    if not os.path.exists(thesis_path):
        return False
    try:
        with open(thesis_path) as f:
            content = f.read()
    except Exception:
        return False
    artifact_basename = os.path.basename(artifact_relpath)
    # Accept either full path or basename reference in the thesis
    return (artifact_relpath in content) or (artifact_basename in content)


def main():
    if not in_scope():
        sys.exit(0)

    # Avoid recursive triggering if a previous hook invocation already fired
    data = read_stdin_json()
    if data.get("stop_hook_active"):
        sys.exit(0)

    files = files_in_current_changeset()
    artifacts = sorted(f for f in files if is_synthesis_artifact(f))
    if not artifacts:
        sys.exit(0)

    valid_tickers = get_valid_tickers()
    if not valid_tickers:
        sys.exit(0)

    violations = []  # list of (artifact, ticker) pairs
    for artifact in artifacts:
        named = extract_named_tickers(artifact, valid_tickers)
        for ticker in sorted(named):
            if not thesis_has_backreference(ticker, artifact):
                violations.append((artifact, ticker))

    if not violations:
        sys.exit(0)

    # Block with feedback
    print(
        "CASCADE-ENFORCEMENT HOOK: cross-source synthesis artifact(s) "
        "modified, but the following per-company thesis files are missing "
        "back-references to the artifact (per CLAUDE.md Critical Rule #10 "
        "/ B16 in meta/biases-watchlist.md):",
        file=sys.stderr,
    )

    by_artifact = {}
    for artifact, ticker in violations:
        by_artifact.setdefault(artifact, []).append(ticker)

    for artifact, tickers in by_artifact.items():
        print("", file=sys.stderr)
        print(f"  Artifact: {artifact}", file=sys.stderr)
        print(f"  Missing back-references in:", file=sys.stderr)
        for t in tickers:
            print(f"    - research/companies/{t}/thesis.md", file=sys.stderr)

    print("", file=sys.stderr)
    print(
        "Required action: append a '## Cross-source synthesis' (or "
        "equivalent) section to each missing thesis file with: (a) a "
        "reference to the artifact path, (b) a 1-3 sentence implication "
        "for that name's thesis, (c) any tier/sizing/falsifier change if "
        "material. The discipline is symmetric — artifact references the "
        "theses AND each thesis back-references the artifact.",
        file=sys.stderr,
    )

    sys.exit(2)


if __name__ == "__main__":
    main()
