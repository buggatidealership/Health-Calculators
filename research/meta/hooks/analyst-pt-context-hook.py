#!/usr/bin/env python3
"""
Analyst-PT-Context Stop hook for the AI Sector Research OS.

Enforces explicit application of B28 (cyclical-vs-structural mis-classification)
+ L1 (bottoms-up before outside view) + B23 (sell-side aggregation drift) at
the SPECIFIC manifestation of "above/below analyst PT" framing.

Why this exists:
  User directive 2026-05-28: "this must be fixed with a hook. its ok to surface
  it but its not ok to overweight it."

  Background: 2026-05-28 IBIDEN deep-dive synthesis cited "current ¥15,375 above
  analyst PT ¥11,276" as a CAUTION signal — exactly the pre-training-default
  failure mode that B28 was codified to catch. The principle existed yesterday
  but did NOT fire in today's application. User caught it in real-time. The
  discipline LOOP step 3 (monitor) revealed step 2 (codified fix) was inert
  text without enforcement.

  The structural insight (per B28 + user 2026-05-28): for verified
  binding-constraint structural names in early-to-mid rerating arc, the
  expected pattern is STOCK LEADS, ANALYST CATCHES UP. Analyst PT lags
  structural-evidence accumulation by 2-3 quarters. Therefore "above analyst
  PT" is NOT automatically a caution signal — for true binding-constraint
  structural names it is potentially the OPPOSITE (analysts chasing
  the rerating, bullish setup).

  The user calibration: "ok to surface it but not ok to overweight it." The
  hook does NOT block analyst-PT mentions as data; it requires explicit
  structural-context classification before the mention is used as a valuation
  argument.

What this hook detects:
  TRIGGER (PT-vs-price framing):
    - "above (the )?(average )?(analyst|consensus|street) (price )?(target|PT)"
    - "(analyst|consensus|street) (price )?(target|PT).{0,30}(above|below)"
    - "price .{0,30}(above|below).{0,30}(analyst|consensus).{0,30}(PT|target)"
    - "trading.{0,30}(above|below).{0,30}(analyst|consensus|target)"
    - "stock has run (past|through) (the )?(analyst|consensus) target"
    - "current price .{0,20}is .{0,10}above (consensus|the analyst PT)"
    - "consensus PT of \\$"

  EXEMPTION (explicit structural-context classification):
    - "analyst.{0,30}(lag|behind|chasing|catching up|catch up)"
    - "analysts? behind the curve"
    - "structural rerating"
    - "binding[-\\s]?constraint"
    - "genuine overvaluation"
    - "priced[-\\s]to[-\\s]perfection"
    - "Stage 4(-5)? narrative"
    - "cyclical comp"
    - "B28" (explicit principle reference)
    - "structural[-\\s]vs[-\\s]cyclical"
    - "(analyst PT framing.{0,40}not yet verified)"
    - "(analyst PT framing.{0,40}neutral; not used as valuation argument)"
    - "rerating arc"
    - "principle #28" / "principle #30" / "principle #31"
    - Meta-discussion exemptions: hook, principle #, .py, settings.json

Exit codes:
  0 — pass (no PT framing, or PT framing + explicit structural-context
      classification)
  2 — block (PT framing without classification — user calibration "ok to
      surface, not ok to overweight")

Scope: only enforces inside Health-Calculators repo.
"""

import json
import os
import re
import sys
from pathlib import Path

REPO_ROOT = "/home/user/Health-Calculators"

TRIGGER_PATTERNS = [
    r"\babove\s+(the\s+)?(average\s+)?(analyst|consensus|street)\s+(price\s+)?(target|PT)\b",
    r"\bbelow\s+(the\s+)?(average\s+)?(analyst|consensus|street)\s+(price\s+)?(target|PT)\b",
    r"\b(analyst|consensus|street)\s+(price\s+)?(target|PT).{0,30}(above|below)",
    r"\bprice\s+.{0,30}(above|below).{0,30}(analyst|consensus).{0,30}(PT|target)",
    r"\btrading\s+.{0,30}(above|below).{0,30}(analyst|consensus|target)",
    r"\bstock\s+has\s+run\s+(past|through)\s+(the\s+)?(analyst|consensus)\s+(PT|target)",
    r"\bcurrent\s+price\s+.{0,20}is\s+.{0,10}above\s+(consensus|the\s+analyst\s+PT)",
    r"\bconsensus\s+PT\s+of\s+\$?\d",
    r"\baverage\s+(analyst\s+)?PT\s+(of|is|was)\s+\$?\d",
    r"\bstreet[-\s]high\s+PT\s+(of|is|was)\s+\$?\d",
]

EXEMPTION_PATTERNS = [
    # Explicit structural-context classification
    r"\banalysts?\s*.{0,30}(lag|behind|chasing|catching\s+up|catch\s+up)",
    r"\banalysts?\s+behind\s+the\s+curve",
    r"\bstructural\s+rerating",
    r"\bbinding[-\s]?constraint",
    r"\bgenuine\s+overvaluation",
    r"\bpriced[-\s]to[-\s]perfection",
    r"\bStage\s*4(-5)?\s+narrative",
    r"\bcyclical\s+comp",
    r"\bB28\b",
    r"\bstructural[-\s]vs[-\s]cyclical",
    r"\(analyst\s+PT\s+framing.{0,80}not\s+(yet\s+)?verified",
    r"\(analyst\s+PT\s+framing.{0,80}neutral",
    r"\(analyst\s+PT\s+framing.{0,80}not\s+used\s+as\s+valuation\s+argument",
    r"\(analyst\s+PT\s+lag\)",
    r"\brerating\s+arc",
    r"\bprinciple\s+#?(28|30|31)\b",
    r"\bL1\b.{0,40}sell-side",
    # Meta-discussion exemptions (harness/hook talk)
    r"\bhook\b",
    r"\bprinciple\s+#",
    r"\.py\b",
    r"settings\.json",
    r"\bcodif(y|ied|ication)\b",
    r"\bbias.{0,20}entry\b",
    r"B3[0-9]",
    r"biases-watchlist",
    r"methodology\.md",
    # Anti-fragility hook style exemption (in case of valuation-language
    # appearing in a structural-thesis classification block)
    r"\bTIER\s+S\b",
    r"\bTIER\s+A\b",
    # Honest-call exemptions if the analyst PT is being USED bullishly
    r"\banalysts?\s+(are\s+)?chasing",
    r"\banalysts?\s+rerating\s+higher",
    r"\bPT\s+(raises?|increases?|hikes?)\s+",
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
        "ANALYST-PT-CONTEXT HOOK: PT-vs-price framing detected without",
        "explicit structural-context classification.",
        "",
        f"Trigger: '{trigger}'",
        "",
        "User calibration 2026-05-28: 'it's OK to surface it but it's NOT OK",
        "to overweight it.' Analyst PT data can be mentioned, but using it",
        "as a valuation argument requires explicit context.",
        "",
        "Required action (per B28 + L1):",
        "  For binding-constraint structural names in early-to-mid rerating",
        "  arc, the expected pattern is STOCK LEADS, ANALYST CATCHES UP.",
        "  Analysts lag structural-evidence accumulation by 2-3 quarters.",
        "  Therefore 'above analyst PT' is NOT automatically a caution",
        "  signal — for true binding-constraint structural names it's",
        "  potentially the OPPOSITE (analysts chasing the rerating).",
        "",
        "Add explicitly at least ONE of:",
        "  1. Structural-context classification: 'analysts behind the curve'",
        "     / 'analyst lag' / 'structural rerating' / 'binding-constraint'",
        "     designation",
        "  2. Genuine-overvaluation reasoning: 'Stage 4 narrative' /",
        "     'priced-to-perfection' / 'cyclical comp at peak'",
        "  3. Explicit hedge: '(analyst PT framing; structural rerating",
        "     context not yet verified)' / '(analyst PT framing; neutral,",
        "     not used as valuation argument)'",
        "  4. Explicit reference to principle #28 / #30 / #31 or B28",
        "",
        "See:",
        "  - research/meta/biases-watchlist.md B28 (cyclical-vs-structural",
        "    mis-classification — same bias affects sell-side at 2-3 quarter",
        "    lag from structural-evidence accumulation)",
        "  - research/predictions/lessons.md L1 (NEVER start with sell-side",
        "    and adjust)",
        "  - research/meta/methodology.md principle #28, #30, #31",
        "",
        "Exemption: include explicit structural-context classification, or",
        "explicit hedge marker, or principle/bias reference.",
    ]
    print("\n".join(msg), file=sys.stderr)
    sys.exit(2)


if __name__ == "__main__":
    main()
