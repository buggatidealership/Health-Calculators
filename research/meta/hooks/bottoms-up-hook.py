#!/usr/bin/env python3
"""
Bottoms-up reasoning Stop hook for the AI Sector Research OS.

Enforces methodology principle #1 (Bottoms-up before outside view) and
catches bias B23 (sell-side aggregation drift) on any predictive output.

Why this exists:
  User directive 2026-05-23 — elevate four currently-instruction-only rules
  to deterministic hook enforcement. Bottoms-up reasoning was one of them.

  The bias (lesson #1 in predictions/lessons.md): when making forward
  projections, paraphrasing or weighted-averaging Street consensus instead
  of building from supply/capacity/unit-economics. The methodology principle
  is explicit: "NEVER start with sell-side and adjust."

  User clarification 2026-05-23: optimise toward shared goal. Interpretation:
  catch the dominant failure mode (sell-side aggregation drift). Bottoms-up
  indicators MUST be present on predictive output; top-down comparison is
  allowed but not gated.

What this hook detects:
  TRIGGER (concrete predictive surface):
    - WORKFLOW: PREDICT label
    - "I (predict|forecast)" / "my (prediction|forecast|estimate)"
    - Concrete projection: "will reach $X" / "could grow to X" /
      "will hit X" / "could exceed X"
    - Forward time horizon: "by YYYY" / "H1/H2 YYYY" / "FYXX"
    - Growth rate: "X% CAGR" / "X% growth"
    - "projected (revenue|growth|capacity|capex|TAM)"

  EXEMPTION (bottoms-up indicators):
    - "bottoms-up" / "bottom-up"
    - Capacity language: capacity gate, capacity disclosure, capacity
      reallocation, capacity response, capacity expansion, capex disclosure
    - Unit-level math: "unit economics", "per-board", "per-server",
      "per-wafer", "per-die", "per-module", "per-stack", "per-node"
    - BOM math: "BOM count", "BOM math", "BOM expansion", "BOM-level"
    - Explicit math: "X units per", "X * Y =", "X / Y ="
    - Supply-side framing: "supply-side math", "built from supply",
      "built from capacity", "built from unit"
    - Explicit hedges: "(hypothetical", "(illustrative", "(my model)",
      "(rough estimate)"
    - Meta-discussion exemptions (hook, principle #, .py, settings.json)

Exit codes:
  0 — pass (no predictive surface, or prediction + bottoms-up indicator)
  2 — block (forward projection without bottoms-up math)

Scope: only enforces inside Health-Calculators repo.
"""

import json
import os
import re
import sys
from pathlib import Path

REPO_ROOT = "/home/user/Health-Calculators"

TRIGGER_PATTERNS = [
    r"WORKFLOW:\s*PREDICT",
    r"\bI\s+(predict|forecast)\b",
    r"\bmy\s+(prediction|forecast|estimate)\b",
    r"\b(will|could|should|may)\s+(reach|grow\s+to|hit|exceed|surpass)\s+\$?\d",
    r"\bby\s+(20[2-4]\d|H[12]\s+20[2-4]\d|FY\s*2[2-9]|Q[1-4]\s+FY?\s*2[2-9])",
    r"\b\d+(?:\.\d+)?\s*%?\s+CAGR\b",
    r"\b\d+(?:\.\d+)?\s*%\s+(annual\s+)?growth\b",
    r"\bprojected\s+(revenue|growth|capacity|capex|TAM)\b",
    r"\bprojection:\s*\$?\d",
    r"\bforecast:\s*\$?\d",
]

EXEMPTION_PATTERNS = [
    # Bottoms-up markers
    r"\bbottoms?[-\s]up\b",
    r"\bcapacity\s+(gate|disclosure|reallocation|response|expansion)\b",
    r"\bunit\s+economics\b",
    r"\bper[-\s](board|server|rack|wafer|die|module|stack|node|chip|GPU)\b",
    r"\bBOM\s+(count|math|expansion|level)\b",
    r"\bBOM-level\b",
    r"\b\d+(?:\,\d+)?\s+units?\s+per\b",
    r"\b\d+\s*[xX×\*]\s*\d+\s*=",  # explicit multiplication math
    r"\b\d+\s*/\s*\d+\s*=",  # explicit division math
    r"\bsupply[-\s]side\s+math\b",
    r"\bbuilt\s+(up\s+)?from\s+(supply|capacity|unit|the\s+supply)\b",
    r"\bcapex\s+disclosure\b",
    r"\bcapacity\s+gate\b",
    r"\bfrom\s+capacity\b",
    r"\bfab\s+capacity\b",
    r"\bwafer\s+capacity\b",
    r"\bASP\s*[×\*x]",
    r"\bunits?\s*[×\*x]\s*ASP",
    # Explicit hedges
    r"\(hypothetical",
    r"\(illustrative",
    r"\(my\s+model\)",
    r"\(rough\s+estimate\)",
    r"\(estimate\)",
    r"\(my\s+inference\)",
    r"\(approximate\)",
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
        "BOTTOMS-UP HOOK: forward projection detected without bottoms-up",
        "unit-economics / capacity math.",
        "",
        f"Trigger: '{trigger}'",
        "",
        "Required action (methodology principle #1):",
        "  'Bottoms-up before outside view. Build a unit model from supply,",
        "   capacity, ASP, mix. Then compare to consensus.",
        "   NEVER start with sell-side and adjust.'",
        "",
        "Add explicitly at least ONE of:",
        "  1. Capacity-gate reasoning (fab capacity, wafer capacity, capex",
        "     disclosure, capacity reallocation)",
        "  2. BOM-level math (units per board/server/rack, BOM count)",
        "  3. Unit-economics buildup (X units * Y ASP = Z revenue floor)",
        "  4. Or explicit hedge: '(my model)', '(rough estimate)',",
        "     '(hypothetical)'",
        "",
        "See:",
        "  - research/meta/methodology.md principle #1 (Bottoms-up before",
        "    outside view)",
        "  - research/predictions/lessons.md lesson #1 (sell-side",
        "    aggregation drift)",
        "  - research/meta/biases-watchlist.md B23",
        "",
        "Exemption: include bottoms-up math language (capacity gate, BOM",
        "count, units per X, * = math) or explicit hedge marker.",
    ]
    print("\n".join(msg), file=sys.stderr)
    sys.exit(2)


if __name__ == "__main__":
    main()
