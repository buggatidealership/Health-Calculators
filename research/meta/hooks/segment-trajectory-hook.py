#!/usr/bin/env python3
"""
Segment-trajectory Stop hook for the AI Sector Research OS.

Enforces principle #22 (Model segment trajectory, not snapshot) and
catches bias B20 (current-segment-% snapshot anchoring) for multi-segment
company evaluations.

Why this exists:
  User correction 2026-05-23 — during Nippon Chemical Industrial (4092.T)
  evaluation, I dismissed the AI-adjacent thesis based on Functional Products
  being "only ~10-15% of revenue today." User pushback:

    "my pushback is that even if its 10/15%, the task is not to identify
    the split today but it is to model what it can become."

  The bias: when a multi-segment company has a small-today but structurally-
  growing AI-adjacent segment, dismissing the thesis based on current segment
  % anchors on snapshot instead of trajectory. The investable thesis often
  lives in the FORWARD trajectory of a currently small segment, not its
  current size.

  Instructions are skippable; hooks are deterministic. The user explicitly
  asked for hook enforcement: "instructions will not always work... if you
  create a hook, then it will guaranteed work because it forces you to do
  something."

What this hook detects:
  TRIGGER (the anti-pattern):
    - Phrasing like "if only X%", "only X% of revenue", "AI exposure is
      too small", "AI-adjacent revenue is too small", "Functional Products
      is only X%" — combined with dismissive verdict ("too small to drive",
      "skip", "Tier 3", "doesn't fit", "not investable", "below the bar")

  EXEMPTION (forward modeling present):
    - Any of: "could grow to", "could become", "trajectory", "SOTP",
      "sum-of-the-parts", "substitution rate", "forward scenario",
      "forward model", "12-24 month", "24-36 month", "principle #22",
      "model what segment", "what the segment could become", "if .* grows
      at", "segment CAGR", "segment growth rate", "growing at X% CAGR"

Exit codes:
  0 — pass (no anti-pattern, or anti-pattern + forward modeling present)
  2 — block (anti-pattern detected without forward modeling)

Scope: only enforces when cwd is inside the Health-Calculators repo.
"""

import json
import os
import re
import sys
from pathlib import Path

REPO_ROOT = "/home/user/Health-Calculators"
ENFORCEMENT_PATHS = [REPO_ROOT]

# Anti-pattern triggers. Each tuple: (anchor_regex, dismissal_regexes_or_None).
# If anchor matches AND any dismissal in the list matches (within the same
# message), the anti-pattern fires. If dismissal list is None, the anchor
# alone is sufficient (used for explicit phrasings of the bias).
TRIGGER_PATTERNS = [
    # Pattern 1: "only X%" or "only X-Y%" near dismissive verdict
    (
        r"\bonly\s*\d+(?:\.\d+)?(?:\s*[-/]\s*\d+(?:\.\d+)?)?\s*%",
        [
            r"too small to drive",
            r"too small to be",
            r"too small for",
            r"too thin",
            r"not enough to drive",
            r"won't drive the thesis",
            r"will not drive the thesis",
            r"isn't enough",
            r"is not enough",
            r"\bskip\b",
            r"\btier\s*3\b",
            r"below the bar",
            r"doesn't fit",
            r"does not fit",
            r"not investable",
            r"not a position",
            r"too small to matter",
        ],
    ),
    # Pattern 2: explicit "AI-adjacent revenue is too small" phrasing
    (
        r"AI[-\s]?adjacent\s+(revenue|exposure|segment)\s+is\s+too\s+small",
        None,
    ),
    # Pattern 3: "AI exposure is too small"
    (
        r"AI\s+exposure\s+is\s+too\s+small",
        None,
    ),
    # Pattern 4: "if only X-Y%" framing
    (
        r"if\s+only\s+\d+(?:\.\d+)?(?:\s*[-/]\s*\d+(?:\.\d+)?)?\s*%",
        None,
    ),
    # Pattern 5: "segment is too small" near dismissive
    (
        r"segment\s+is\s+too\s+small",
        None,
    ),
]

EXEMPTION_PATTERNS = [
    r"could grow to",
    r"could become",
    r"\btrajectory\b",
    r"\bSOTP\b",
    r"sum[-\s]?of[-\s]?the[-\s]?parts",
    r"substitution rate",
    r"forward scenario",
    r"forward model",
    r"forward-looking",
    r"forward trajectory",
    r"if .{1,40} grows at",
    r"if .{1,40} grows to",
    r"if .{1,40} growing",
    r"segment CAGR",
    r"segment growth rate",
    r"12[-\s]24\s+month",
    r"24[-\s]36\s+month",
    r"12[-\s]36\s+month",
    r"6[-\s]24\s+month",
    r"model what segment can become",
    r"what the segment could become",
    r"what segments? can become",
    r"principle\s*#?\s*22",
    r"if Functional Products grows",
    r"if .{1,40} segment grows",
    r"growing at \d+(?:\.\d+)?%",
    r"forward[-\s]segment",
    r"model segment trajectory",
    r"segment trajectory",
    r"could go from",
    r"could move from",
]

REPO_GUARD = REPO_ROOT


def in_scope() -> bool:
    return os.getcwd().startswith(REPO_GUARD)


def get_last_assistant_message(transcript_path: str) -> str:
    try:
        with open(transcript_path) as f:
            lines = f.readlines()
    except (FileNotFoundError, PermissionError):
        return ""
    for line in reversed(lines):
        try:
            entry = json.loads(line)
        except json.JSONDecodeError:
            continue
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


def has_any(text: str, patterns) -> bool:
    return any(re.search(p, text, re.IGNORECASE | re.DOTALL) for p in patterns)


def detect_anti_pattern(text: str) -> list:
    """Returns list of (anchor_match, dismissal_match_or_None) for fired triggers."""
    fired = []
    for anchor_re, dismissal_list in TRIGGER_PATTERNS:
        anchor_match = re.search(anchor_re, text, re.IGNORECASE)
        if not anchor_match:
            continue
        if dismissal_list is None:
            fired.append((anchor_match.group(0), None))
        else:
            for d_re in dismissal_list:
                d_match = re.search(d_re, text, re.IGNORECASE)
                if d_match:
                    fired.append((anchor_match.group(0), d_match.group(0)))
                    break
    return fired


def main():
    if not in_scope():
        sys.exit(0)

    try:
        input_data = json.load(sys.stdin)
    except (json.JSONDecodeError, ValueError):
        sys.exit(0)

    if input_data.get("stop_hook_active") is True:
        sys.exit(0)

    transcript_path = input_data.get("transcript_path", "")
    if not transcript_path or not Path(transcript_path).exists():
        sys.exit(0)

    text = get_last_assistant_message(transcript_path)
    if not text:
        sys.exit(0)

    fired = detect_anti_pattern(text)
    if not fired:
        sys.exit(0)

    has_exemption = has_any(text, EXEMPTION_PATTERNS)
    if has_exemption:
        sys.exit(0)

    # Anti-pattern detected without forward modeling — block
    msg_parts = [
        "SEGMENT-TRAJECTORY HOOK: current-segment-% snapshot anchoring",
        "detected without forward-trajectory modeling.",
        "",
        "Anti-pattern matches:",
    ]
    for anchor, dismissal in fired[:3]:
        if dismissal:
            msg_parts.append(f"  - '{anchor}' near '{dismissal}'")
        else:
            msg_parts.append(f"  - '{anchor}' (standalone bias phrasing)")
    msg_parts.extend(
        [
            "",
            "Required action: do NOT dismiss a multi-segment company based on",
            "current segment %. The investable thesis often lives in the",
            "FORWARD trajectory of a currently small segment.",
            "",
            "Add explicitly:",
            "  1. Forward trajectory for the AI-adjacent segment(s) at 12-24",
            "     and 24-36 month horizons",
            "  2. Substitution rate vs. declining segment(s)",
            "  3. SOTP re-rating implication if segment mix shifts",
            "",
            "See:",
            "  - research/meta/methodology.md principle #22",
            "  - research/meta/biases-watchlist.md B20",
            "",
            "Exemption: include forward-modeling language (trajectory, SOTP,",
            "substitution rate, 12-24 month, 24-36 month, could grow to, etc.)",
            "in the analysis. Then this hook will pass.",
        ]
    )
    print("\n".join(msg_parts), file=sys.stderr)
    sys.exit(2)


if __name__ == "__main__":
    main()
