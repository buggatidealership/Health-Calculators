#!/usr/bin/env python3
"""
Bypass-route Stop hook for the AI Sector Research OS.

Enforces methodology principle #9 + Critical Rule #9 (Bypass-route thinking)
and catches bias B22 (consensus-solution anchoring) on any analytical
output that discusses a binding constraint.

Why this exists:
  User directive 2026-05-23 — elevate four currently-instruction-only rules
  to deterministic hook enforcement. Bypass-route thinking was one of them.

  The bias: when a binding constraint is discussed, naming the consensus
  supplier/incumbent without asking "what do consumers do when the consensus
  solution fails their actual sensitivity?" The bypass-route names are
  usually where the edge is (see Time-to-X framework in methodology.md).

What this hook detects:
  TRIGGER:
    - Constraint vocabulary: 'binding constraint', 'bottleneck',
      'supply tight', 'supply gap', 'shortage', 'capacity-limited',
      'supply-constrained', 'capacity-constrained', '<noun>-constrained'
    - Time-to-X framework usage
    - WORKFLOW: BOTTLENECK-FORECAST

  EXEMPTION:
    - Any bypass-route concept present: bypass route, substitution,
      second-source, alternative supplier, qualification cycle, TTQ,
      time-to-qualify, "what consumers do when", non-consensus name,
      workaround, consumer response, end-customer adaptation
    - Meta-discussion exemptions (hook, principle #, .py, settings.json)

Exit codes:
  0 — pass (no constraint discussed, or constraint + bypass route)
  2 — block (constraint named without bypass-route thinking)

Scope: only enforces inside Health-Calculators repo.
"""

import json
import os
import re
import sys
from pathlib import Path

REPO_ROOT = "/home/user/Health-Calculators"

TRIGGER_PATTERNS = [
    r"\bbinding\s+constraint\b",
    r"\bbottleneck\b",
    r"\bsupply\s+tight\b",
    r"\bsupply\s+gap\b",
    r"\bshortage\b",
    r"\bcapacity[-\s]limited\b",
    r"\bsupply[-\s]constrained\b",
    r"\bcapacity[-\s]constrained\b",
    r"\b\w+[-\s]constrained\b",
    r"\bTime-to-[A-Z]\w*",
    r"WORKFLOW:\s*BOTTLENECK-FORECAST",
    r"\bsupply\s+pinch\b",
    r"\bcapacity\s+pinch\b",
]

EXEMPTION_PATTERNS = [
    # Bypass-route concepts
    r"\bbypass[-\s]route\b",
    r"\bbypass\s+(the\s+)?constraint\b",
    r"\bsubstitut(e|ion|ing|ed)\b",
    r"\bsecond[-\s]?source(d|ing)?\b",
    r"\balternative\s+supplier\b",
    r"\bqualif(y|ied|ication|ying)\b",
    r"\bTTQ\b",
    r"\btime-to-qualif",
    r"\bwhat\s+consumers?\s+do\s+when",
    r"\bnon-consensus\s+name",
    r"\bworkaround\b",
    r"\bconsumer\s+response\b",
    r"\bend[-\s]customer\s+adaptation\b",
    r"\b(re-?)?qualification\s+(lead\s+time|cycle|delay)\b",
    r"\balternat(e|ive)\s+(topology|architecture|supplier|route|chemistry)\b",
    r"\bdrop[-\s]in\s+replacement\b",
    r"\bdual[-\s]source(d|ing)?\b",
    # Meta-discussion exemptions
    r"\bhook(s)?\b",
    r"\benforcement\b",
    r"principle\s*#?\s*\d+",
    r"\brule\s*#?\s*\d+",
    r"\bB\d{1,2}\b",
    r"\.py\b",
    r"settings\.json",
    r"biases-watchlist",
    r"methodology\.md",
    r"~/\.claude/",
    r"research/meta/",
    r"stop\s+hook",
    # Scan-design / harness-meta discussion (added 2026-06-27, Option B — user "not too strict";
    # narrow design-doc tokens used when DISCUSSING the morning-scan machinery, NOT real scan
    # OUTPUT — a genuine scan digest reports findings, it does not say "Leg B"/"newspaper")
    r"\bLeg\s+[AB]\b",
    r"\btwo-leg\b",
    r"\bscan\s+(design|spec|machinery|prompt|template|window)\b",
    r"\bdiscovery\s+(leg|scan)\b",
    r"\bnewspaper\b",
    r"\banti-confirmation\b",
    r"\bconfirmation\s+bias\b",
    r"\bmorning[- ]feed\b",
    r"\bfirst-week\s+review\b",
    r"\bharness[- ](meta|design)\b",
    r"\b(harness-meta|scan-design)\s+exemption\b",
]


def in_scope() -> bool:
    return os.getcwd().startswith(REPO_ROOT)


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


def find_first_match(text: str, patterns) -> str:
    for p in patterns:
        m = re.search(p, text, re.IGNORECASE)
        if m:
            return m.group(0)
    return ""


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

    trigger = find_first_match(text, TRIGGER_PATTERNS)
    if not trigger:
        sys.exit(0)

    if has_any(text, EXEMPTION_PATTERNS):
        sys.exit(0)

    msg = [
        "BYPASS-ROUTE HOOK: binding-constraint language detected without",
        "bypass-route thinking.",
        "",
        f"Trigger: '{trigger}'",
        "",
        "Required action: do NOT stop at naming the consensus supplier.",
        "For any binding constraint, ask: 'What do consumers do when the",
        "consensus solution fails their actual sensitivity?' The bypass-",
        "route names are usually where the edge is (Time-to-X framework).",
        "",
        "Add explicitly:",
        "  1. The bypass route: substitution, second-source, alternative",
        "     topology, qualification path, workaround",
        "  2. Or explicitly state: 'no bypass route exists' + why",
        "  3. Name the non-consensus beneficiary of the bypass",
        "",
        "See:",
        "  - research/meta/methodology.md principle #9 + Time-to-X framework",
        "  - research/meta/biases-watchlist.md B22 (consensus-solution",
        "    anchoring)",
        "  - CLAUDE.md Critical Rule #9",
        "",
        "Exemption: include bypass-route language (substitution, second-",
        "source, TTQ, alternative supplier, workaround) in the analysis.",
    ]
    print("\n".join(msg), file=sys.stderr)
    sys.exit(2)


if __name__ == "__main__":
    main()
