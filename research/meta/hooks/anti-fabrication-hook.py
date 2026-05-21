#!/usr/bin/env python3
"""
Anti-fabrication Stop hook for the AI Sector Research OS.

Scans the most recent assistant message for numerical claims and verifies
each one is grounded — either:
  (a) cited inline (URL, file path, "per [source]", etc.), OR
  (b) explicitly hedged ("(estimate)", "(my inference)", etc.), OR
  (c) NEW (added 2026-05-21 per user calibration): grounded by exact-string
      match in any file under research/. Rationale: if I've already written
      a properly-cited file containing this number, the chat summary
      re-stating it doesn't need to re-cite — the file IS the source of
      truth. The hook still catches FABRICATION (number nowhere in repo).

Exits 2 with stderr if uncited+ungrounded numerical claims are found, which
surfaces the violations back to Claude as feedback for the next turn.

Scope: only enforces when the cwd is the Health-Calculators repo (the
research OS). For all other repos / contexts, exits 0 (no enforcement).

Citation patterns accepted as valid:
  - URL anywhere in message
  - File reference (research/..., companies/..., etc.)
  - "per X" or "(X)" naming a source (SEC, Bloomberg, NVDA filing, etc.)
  - "[source: X]" or "[X]" bracket cite
  - Explicit hedges: "(estimate)", "(approximate)", "(unsourced)",
    "(my inference)", "(rough)", "~", "≈", "roughly", "approximately"

Repo grounding (added 2026-05-21):
  - For each number that fails inline-citation check, exact-string-search
    the entire research/ folder. If the number string appears in ANY file,
    it's considered grounded (file = source of truth).
  - This catches fabrication (number nowhere in repo) while allowing chat
    summaries of previously-committed properly-cited work.

Hook is intentionally lenient (favor false negatives over false positives)
since it's a guardrail not an oracle.
"""

import json
import os
import re
import subprocess
import sys
from pathlib import Path

# Only enforce inside the research OS repo. Avoid imposing on unrelated work.
ENFORCEMENT_PATHS = ["/home/user/Health-Calculators"]
RESEARCH_DIR = os.path.join(ENFORCEMENT_PATHS[0], "research")


def in_scope() -> bool:
    cwd = os.getcwd()
    return any(cwd.startswith(p) for p in ENFORCEMENT_PATHS)


# Numerical claim patterns (case-insensitive)
NUMERICAL_PATTERNS = [
    # Currency: $78B, $725 billion, $1.2T, €10.3B
    (r"[\$€£¥]\s*\d+(?:[.,]\d+)*\s*(?:billion|million|trillion|[kKmMbBtT])\b", "currency"),
    # Percentages with claim context: 75.2%, 92%
    (r"\b\d+(?:\.\d+)?\s*%", "percentage"),
    # Energy units
    (r"\b\d+(?:\.\d+)?\s*(?:GW|MW|kW|TWh|MWh|kWh)\b", "energy"),
    # Wafer/chip counts: 130K wpm, 2M units, 60K wafers
    (r"\b\d+(?:\.\d+)?\s*[kKmMbB]?\s*(?:wpm|wafer|GPU|chip|unit)s?\b", "compute_capacity"),
    # Quarterly numbers near $: Q1 FY27 $78B (looser, catches table cells)
    (r"\b(?:Q[1-4]|FY\d{2,4})\b.{0,40}[\$€£]\s*\d", "quarterly_financial"),
]

# Patterns that count as a valid citation/hedge near a number
CITATION_PATTERNS = [
    r"https?://\S+",                       # URLs
    r"research/[\w/-]+\.md",               # file references inside the OS
    r"companies/[A-Z]+/\w+\.md",           # company file references
    r"sector/[\w/-]+\.md",
    r"predictions/[\w/-]+\.md",
    r"\(per [^)]+\)",                      # (per SEC filing)
    r"\(source:[^)]+\)",                    # (source: ...)
    r"\bper\s+(?:SEC|EDGAR|Bloomberg|NVDA|TSMC|TSM|company|management|CFO|filing|press release|10-K|10-Q|8-K|earnings call)",
    r"\[source[^\]]*\]",
    r"\bfrom\s+(?:SEC|EDGAR|Bloomberg|NVDA|TSMC|TSM|company|CFO|10-K|10-Q|8-K|filing|press release|earnings call)",
    # Explicit hedges
    r"\(estimate\)",
    r"\(estimated\)",
    r"\(approximate\)",
    r"\(approximately\)",
    r"\(rough\)",
    r"\(roughly\)",
    r"\(unsourced\)",
    r"\(unsourced\s+inference\)",
    r"\(my inference\)",
    r"\(inferred\)",
    r"\(my estimate\)",
    r"\(my read\)",
    r"\(my view\)",
    r"\(my model\)",
    r"\(point estimate\)",
    r"\(speculation\)",
    r"\(speculative\)",
    r"\(hypothetical\)",
    r"\(hypothetical [^)]*\)",
    r"\(illustrative\)",
    r"\(illustrative [^)]*\)",
    r"\(scenario\)",
    r"\(modeled\)",
    r"\(if [^)]+\)",
    r"\(TBD\)",
    r"\(placeholder\)",
    r"\(industry estimate\)",
    r"\(consensus\)",
    r"\bapproximately\b",
    r"\broughly\b",
    r"~\s*\d",                             # ~$78B
    r"≈\s*\d",
    # Q4 FY26 actual / actuals = treated as cited (anchor data the user can verify)
    r"\b(?:Q[1-4]|FY)\d{0,4}\s*(?:actual|actuals|reported|filed|reported|guide|guided|guidance)\b",
]

# Proximity window in characters
WINDOW = 350


def get_last_assistant_message(transcript_path: str) -> str:
    """Read JSONL transcript, return text of last assistant message."""
    try:
        with open(transcript_path) as f:
            lines = f.readlines()
    except FileNotFoundError:
        return ""
    # Walk backwards for the latest assistant message
    for line in reversed(lines):
        try:
            entry = json.loads(line)
        except json.JSONDecodeError:
            continue
        # Format varies; try common shapes
        msg = entry.get("message") or entry
        role = msg.get("role") or entry.get("role")
        if role != "assistant":
            continue
        content = msg.get("content")
        if isinstance(content, str):
            return content
        if isinstance(content, list):
            parts = []
            for c in content:
                if isinstance(c, dict) and c.get("type") == "text":
                    parts.append(c.get("text", ""))
            if parts:
                return "\n".join(parts)
    return ""


def find_violations(text: str) -> list[tuple[str, str, str]]:
    """Return list of (matched_number, category, surrounding_window)."""
    violations = []
    for pattern, category in NUMERICAL_PATTERNS:
        for m in re.finditer(pattern, text, re.IGNORECASE):
            start = max(0, m.start() - WINDOW)
            end = min(len(text), m.end() + WINDOW)
            window = text[start:end]
            cited = any(
                re.search(cp, window, re.IGNORECASE) for cp in CITATION_PATTERNS
            )
            if not cited:
                violations.append((m.group(0), category, window[:200] + "..."))
    return violations


def is_grounded_in_repo(number_str: str) -> bool:
    """Check if the exact number string appears in any file under research/.

    Rationale: if a number is already in a properly-cited file, then chat
    summaries that restate it don't need to re-cite — the file IS the
    source of truth. This catches fabrication (number nowhere in repo)
    while eliminating false positives on legitimate restatement.

    Uses grep -F (fixed string) for speed and to avoid regex escaping
    issues with special characters like $.
    """
    if not os.path.isdir(RESEARCH_DIR):
        return False
    # Normalize: grep would otherwise need the exact form
    needle = number_str.strip()
    if not needle:
        return False
    try:
        # -r recursive, -F fixed string, -q quiet (just exit code), -l list files
        result = subprocess.run(
            ["grep", "-r", "-F", "-l", "--include=*.md", needle, RESEARCH_DIR],
            capture_output=True,
            text=True,
            timeout=10,
        )
        # grep exits 0 if at least one match found
        return result.returncode == 0 and bool(result.stdout.strip())
    except (subprocess.TimeoutExpired, FileNotFoundError, Exception):
        # If grep not available or times out, fall back to NOT grounding
        # (conservative — keeps the violation as a violation)
        return False


def filter_grounded_violations(violations: list[tuple[str, str, str]]) -> list[tuple[str, str, str]]:
    """Remove violations whose number string is grounded by repo existence."""
    return [v for v in violations if not is_grounded_in_repo(v[0])]


def main():
    try:
        input_data = json.load(sys.stdin)
    except (json.JSONDecodeError, ValueError):
        # If we can't parse input, don't block — just pass through
        sys.exit(0)

    # Recursion prevention
    if input_data.get("stop_hook_active") is True:
        sys.exit(0)

    # Only run inside the research OS
    if not in_scope():
        sys.exit(0)

    transcript_path = input_data.get("transcript_path", "")
    if not transcript_path or not Path(transcript_path).exists():
        sys.exit(0)

    text = get_last_assistant_message(transcript_path)
    if not text:
        sys.exit(0)

    # Skip if the message is tiny (probably a status update / acknowledgment)
    if len(text) < 200:
        sys.exit(0)

    violations = find_violations(text)
    if not violations:
        sys.exit(0)

    # Filter out violations grounded by exact-string existence in research/.
    # Per user calibration 2026-05-21: chat summaries of properly-cited file
    # content do not need re-citation; the file IS the source of truth.
    violations = filter_grounded_violations(violations)
    if not violations:
        sys.exit(0)

    # Build feedback message — show first 5 violations
    msg_lines = [
        "ANTI-FABRICATION HOOK: numerical claims found without nearby citation, file reference, OR repo grounding.",
        "",
        f"Found {len(violations)} potentially fabricated numerical claim(s) — number is NOT present in any research/ file. Showing first 5:",
        "",
    ]
    for i, (matched, category, context) in enumerate(violations[:5], 1):
        msg_lines.append(f"{i}. [{category}] '{matched}'")
        msg_lines.append(f"   Context: ...{context.strip()}")
        msg_lines.append("")

    msg_lines += [
        "Required action: in your next message, for each numerical claim either",
        "  (a) cite the source inline (URL, file path, 'per [source]', etc.), OR",
        "  (b) flag it explicitly as '(estimate)', '(my inference)', '(unsourced)', etc., OR",
        "  (c) commit the number to a properly-cited research/ file FIRST, then restate.",
        "",
        "Repo-grounding is checked via exact-string match in research/*.md files.",
        "If the number truly exists in a file but the hook missed it, the string",
        "form may differ ($163B vs '163 billion') — restate using the exact form",
        "from the file.",
    ]
    print("\n".join(msg_lines), file=sys.stderr)
    sys.exit(2)


if __name__ == "__main__":
    main()
