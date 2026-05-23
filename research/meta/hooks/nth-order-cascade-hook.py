#!/usr/bin/env python3
"""
N-th order causal cascade Stop hook for the AI Sector Research OS.

Enforces methodology principle #2 (N-th order > 1st order) and catches
bias B21 (first-order anchoring) on any analytical output.

Why this exists:
  User directive 2026-05-23 — elevate four currently-instruction-only rules
  to deterministic hook enforcement. N-th order reasoning was one of them.
  Rationale: "instructions will not always work; if you create a hook, then
  it will guaranteed work because it forces you to do something."

  The bias: when reasoning about events with cross-domain reach, I stop at
  1st-order (the obvious direct effect) instead of walking out 2nd / 3rd /
  4th order consequences where the investable insight usually lives.

What this hook detects:
  TRIGGER:
    - Causal-reasoning verb present (causes, drives, leads to, results in,
      implies, means that, triggers, produces)
    - AND at least one analytical-context anchor present in the same
      message (TICKER pattern, thesis, portfolio, scenario, investable,
      beneficiary, casualty, Tier, Core/Active/Watchlist/Avoid)
    - OR a WORKFLOW label (TRACE / INGEST / SCENARIO-UPDATE / DEEP-DIG /
      BOTTLENECK-FORECAST)

  EXEMPTION:
    - Any N-th order marker present (1st/2nd/3rd/4th/N-th order, knock-on,
      cascade, ripple, downstream effect, secondary effect, tertiary effect)
    - Probability decay markers (P>80%, P~60%, P~40%, P~20%)
    - TRACE table marker ("Names whose exposure changed")
    - Meta-discussion markers (hook, enforcement, principle #, .py file
      references) — exempts harness-discussion turns.

Exit codes:
  0 — pass (no trigger, or trigger + exemption present)
  2 — block (analytical conclusion without N-th order tracing)

Scope: only enforces inside Health-Calculators repo.
"""

import json
import os
import re
import sys
from pathlib import Path

REPO_ROOT = "/home/user/Health-Calculators"

CAUSAL_VERBS = [
    r"\bcauses?\b",
    r"\bdrives?\b",
    r"\bleads?\s+to\b",
    r"\bresults?\s+in\b",
    r"\bimplies?\b",
    r"\bmeans?\s+that\b",
    r"\btriggers?\b",
    r"\bproduces?\b",
]

ANALYTICAL_ANCHORS = [
    r"\bthesis\b",
    r"\bportfolio\b",
    r"\bscenario\b",
    r"\binvestable\b",
    r"\bbeneficiar(y|ies)\b",
    r"\bcasualt(y|ies)\b",
    r"\bTier\s+[1-3]\b",
    r"\b(Core|Active|Watchlist|Avoid)\b",
    r"\b[A-Z]{2,5}\s+(thesis|stock|name|position|holding)",
    r"\bexposure\s+(changed|increased|decreased|shifted)",
]

WORKFLOW_LABELS = [
    r"WORKFLOW:\s*TRACE",
    r"WORKFLOW:\s*INGEST",
    r"WORKFLOW:\s*SCENARIO-UPDATE",
    r"WORKFLOW:\s*DEEP-DIG",
    r"WORKFLOW:\s*BOTTLENECK-FORECAST",
    r"WORKFLOW:\s*PREDICT",
]

EXEMPTION_PATTERNS = [
    # N-th order markers
    r"\b(1st|2nd|3rd|4th|5th)\s+order\b",
    r"\bN-?th\s+order\b",
    r"\bfirst[-\s]order\b.*\bsecond[-\s]order\b",
    r"\bknock-on\b",
    r"\bcascade\b",
    r"\bripple\s+effect\b",
    r"\b(downstream|secondary|tertiary|2nd[-\s]order|3rd[-\s]order)\s+(effect|consequence|implication|impact)\b",
    r"\border\s+effect\b",
    # Probability decay markers (TRACE format)
    r"P\s*>\s*80\s*%",
    r"P\s*~\s*[246]0\s*%",
    r"P\s*<\s*[234]0\s*%",
    # TRACE structural markers
    r"Names\s+whose\s+exposure\s+changed",
    r"Trigger:\s*\[",
    # Meta-discussion exemptions (harness, hooks, principles, biases)
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


def detect_trigger(text: str):
    """Returns (causal_verb_match, anchor_match) or (None, None)."""
    if has_any(text, WORKFLOW_LABELS):
        return (find_first_match(text, WORKFLOW_LABELS), "WORKFLOW")
    causal = find_first_match(text, CAUSAL_VERBS)
    if not causal:
        return (None, None)
    anchor = find_first_match(text, ANALYTICAL_ANCHORS)
    if not anchor:
        return (None, None)
    return (causal, anchor)


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

    causal, anchor = detect_trigger(text)
    if not causal:
        sys.exit(0)

    if has_any(text, EXEMPTION_PATTERNS):
        sys.exit(0)

    msg = [
        "N-TH ORDER CASCADE HOOK: analytical reasoning detected without",
        "N-th order tracing.",
        "",
        f"Trigger: causal verb '{causal}' + analytical anchor '{anchor}'",
        "",
        "Required action: do NOT stop at 1st-order. The investable insight",
        "usually lives in 2nd or 3rd order, not the obvious direct effect.",
        "",
        "Add explicitly at least ONE of:",
        "  1. '2nd order:' / '3rd order:' / '4th order:' markers with",
        "     decaying P (P>80% / P~60% / P~40% / P~20%)",
        "  2. Knock-on / cascade / ripple-effect language naming the",
        "     downstream beneficiary or casualty",
        "  3. A TRACE-format consequence table",
        "",
        "See:",
        "  - research/meta/methodology.md principle #2 (N-th order > 1st)",
        "  - research/meta/biases-watchlist.md B21 (first-order anchoring)",
        "  - CLAUDE.md workflow #2 (TRACE)",
        "",
        "Exemption: include any N-th order marker (1st/2nd/3rd/4th order,",
        "knock-on, cascade, ripple, downstream effect) in the analysis.",
    ]
    print("\n".join(msg), file=sys.stderr)
    sys.exit(2)


if __name__ == "__main__":
    main()
