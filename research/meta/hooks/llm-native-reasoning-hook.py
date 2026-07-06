#!/usr/bin/env python3
"""
LLM-Native-Reasoning pre-Stop hook for the AI Sector Research OS.

Triggers when assistant output contains pretraining-default reasoning
patterns in investment-analysis context, WITHOUT counterbalancing
LLM-native framing or explicit hedges.

Why this exists (codified 2026-06-01 per user calibration):

  User verbatim 2026-06-01: "before you spit out an output, you have
  to go back and check if you are ruling too much on your human based
  pretraining data and are actually applying LLM native reasoning and
  research principles. The human is linearly and slow and reunilateral.
  [LLM] is multilinearly. Can do multiple researches at the same time
  and can also look at not just US speaking web searches. You can also
  search if the company is Japanese, then you can do searches in
  Japanese."

  Origin: 2026-06-01 MLCC sub-supplier cohort synthesis (Noritake +
  Nippon Chemical + Hirano Tecseed) - I simultaneously committed
  multiple pretraining-default reasoning failures:
  - B39 (post-rally complacency anchoring)
  - Principle #35 (top-down structural theme not first)
  - Principle #36 (comfort signal misleading)
  - Cyclicality framing as risk without structural-vs-cyclical test
  - "Segment dilution" critique without multi-vector AI exposure test
  - Default to English-only sources for Japanese-listed companies

  User pointed out: codified principles don't internalize under pressure.
  Hooks are the deterministic enforcement mechanism. This hook catches
  the 4 most common pretraining-default patterns I fall into when
  doing investment analysis.

Triggers (any one of these patterns):

1. CYCLICALITY-WITHOUT-STRUCTURAL-TEST:
   "cyclicality" / "cyclical" / "cyclical play" appearing alongside
   risk/dilution/dampening language without explicit structural-vs-
   cyclical inflection check or right-side-of-Belka framing.

2. RALLY-HISTORY-AS-ENTRY-EVIDENCE:
   "up X% from low" / "+X% YTD" / "stock has rallied" / "X-bagged"
   appearing alongside entry-cautioning language (wait for pullback,
   watchlist, no add, Stage 3-4) without B39 5-test asymmetry framing
   or ATH-distance computation.

3. NON-US-LISTED-WITHOUT-NATIVE-LANGUAGE:
   Non-Western ticker pattern (\.T, \.KS, \.TW, \.HK, \.KQ) in
   investment-analysis context without explicit native-language source
   reference (Japanese search, Korean search, Chinese search, or
   ja/ko/zh language tokens in cited URL paths).

4. SEGMENT-DILUTION-WITHOUT-MULTI-VECTOR-TEST:
   "segment dilution" / "diluted by" / "multi-segment business" /
   "non-AI segments" appearing alongside thesis-impairment language
   without multi-vector AI exposure check or right-side-of-Belka
   surface-misclassification framing.

Exemptions (any one of these = pass):

- Meta-discussion: hook, principle #, .py, settings.json, B39, B40,
  Principle #35, Principle #36
- Explicit structural framing: "right-side-of-Belka", "structural
  inflection", "structural thesis", "B39 5-test"
- Explicit hedge tag: "(my model)", "(pretraining default)",
  "(English-only sources; verify in native language)",
  "(verified per native source)"
- Native-language source citation: Japanese/Korean/Chinese URL or
  explicit Japanese/Korean/Chinese search reference
- ATH-distance language: "below ATH", "X% from ATH", "all-time high"

Behavior: exit 2 with stderr feedback when triggered without exemption.
Required action: re-state with one of the corrections per failure mode.

Retirement triggers (codified 2026-06-01):
- Hook fires <3x/month over 3 consecutive months -> inert, retire
- False-positive rate (assistant legitimately couldn't apply correction)
  >40% -> refine exemption list
- Monthly audit (next 2026-06-24) reviews activation log

Scope: only enforces inside the research OS repo. Exit 0 outside.

Bias addressed: extends Principle #36 candidate (AI-native operating
frame) deterministic enforcement layer. Catches the multi-discipline
simultaneous failure mode (B40 candidate) where pretraining-pull
overrides codified principles under pressure.
"""

import json
import os
import re
import sys
from pathlib import Path

ENFORCEMENT_PATHS = ["/home/user/Health-Calculators"]


def in_scope() -> bool:
    cwd = os.getcwd()
    return any(cwd.startswith(p) for p in ENFORCEMENT_PATHS)


# Pattern 1: cyclicality-without-structural-test
CYCLICALITY_TRIGGERS = [
    r"\bcyclicality\b",
    r"\bcyclical\s+(?:play|risk|dilut|drag|drift|exposure|business|cycle)",
    r"\bequipment\s+cyclical",
    r"\bcyclical\s+(?:industrial|commodity)",
]

# Pattern 2: rally-history-as-entry-evidence
RALLY_HISTORY_TRIGGERS = [
    r"\bup\s+\d+%\s+from\s+(?:52w|52-week|low|lows)",
    r"\b\+\d+%\s+(?:YTD|1Y|1-year|YoY)",
    r"\bstock\s+has\s+(?:rallied|run|already)\s+",
    r"\b\d+-bagged",
    r"\brerating\s+(?:largely|mostly|already)\s+priced",
    r"\bnarrative\s+(?:largely|mostly|already)\s+priced",
]

# Pattern 3: non-US-listed-without-native-language
NON_WESTERN_TICKER_TRIGGERS = [
    r"\b\d{4}\.T\b",       # Tokyo Stock Exchange
    r"\b\d{6}\.KS\b",      # Korea
    r"\b\d{4}\.TW\b",      # Taiwan
    r"\b\d{4}\.HK\b",      # Hong Kong
    r"\b\d{6}\.KQ\b",      # KOSDAQ
    r"\bTSE:\s*\d{4}\b",
    r"\bKOSE:\s*\w+\b",
]

# Pattern 4: segment-dilution-without-multi-vector-test
SEGMENT_DILUTION_TRIGGERS = [
    r"\bsegment\s+dilut",
    r"\bdiluted\s+by\s+(?:non-AI|other|tabletop|legacy)",
    r"\bmulti-segment\s+(?:business|company)",
    r"\bnon-AI\s+segments?\s+(?:dilut|drag|reduce)",
    r"\bsegment\s+mix\s+(?:dilut|drag)",
]

# Exemption patterns (any one = pass entire message)
EXEMPTION_PATTERNS = [
    # Meta-discussion
    r"\bhook\b",
    r"\.py\b",
    r"settings\.json",
    r"Principle #\d+",
    r"\bB\d{2}\b",
    r"Critical Rule #\d+",
    r"llm-native-reasoning",
    r"pretraining-default-catch",
    # Explicit structural framing
    r"right-?side-of-Belka",
    r"structural\s+inflection",
    r"structural\s+thesis",
    r"structural\s+pivot",
    r"structural\s+compounding",
    r"structural\s+(?:rerating|reset)",
    r"B39\s+5-test",
    r"asymmetry\s+verification",
    # Explicit hedge tags
    r"\(my model\)",
    r"\(pretraining default\)",
    r"\(English-only sources",
    r"\(verified per native",
    r"\(borrowed framing\)",
    r"\(directional\)",
    r"\(estimate\)",
    # Native-language source references
    r"Japanese[\s-]+(?:source|search|language|IR)",
    r"Korean[\s-]+(?:source|search|language)",
    r"Chinese[\s-]+(?:source|search|language)",
    r"\.co\.jp",
    r"\.co\.kr",
    r"\.com\.tw",
    r"shikiho\.toyokeizai",
    r"nikkei\.com",
    r"kabutan\.jp",
    r"minkabu\.jp",
    # ATH-distance framing (counterbalances rally history)
    r"below\s+(?:its\s+|the\s+)?ATH",
    r"\bATH\b",
    r"all[\s-]?time\s+high",
    r"\d+%\s+(?:below|from)\s+(?:ATH|all-time)",
    # Multi-vector AI framing
    r"dual\s+AI\s+vector",
    r"multi-vector\s+AI",
    r"non-AI[\s-]+correlation\s+buffer",
    # Structural-vs-cyclical test
    r"structural[\s-]vs[\s-]cyclical",
    r"cyclical[\s-]to[\s-]structural",
]


def load_last_assistant_message() -> str:
    try:
        data = json.load(sys.stdin)
    except Exception:
        return ""

    transcript_path = data.get("transcript_path")
    if not transcript_path or not Path(transcript_path).exists():
        return ""

    last_msg_text = ""
    try:
        with open(transcript_path, "r") as f:
            for line in f:
                line = line.strip()
                if not line:
                    continue
                try:
                    obj = json.loads(line)
                except Exception:
                    continue
                msg = obj.get("message", {})
                if msg.get("role") != "assistant":
                    continue
                content = msg.get("content", [])
                if isinstance(content, list):
                    parts = []
                    for c in content:
                        if isinstance(c, dict) and c.get("type") == "text":
                            parts.append(c.get("text", ""))
                    text = "\n".join(parts)
                else:
                    text = str(content)
                if text:
                    last_msg_text = text
    except Exception:
        return ""

    return last_msg_text


def has_exemption(text: str) -> bool:
    for pattern in EXEMPTION_PATTERNS:
        if re.search(pattern, text, re.IGNORECASE):
            return True
    return False


def find_triggers(text: str):
    findings = []

    for pattern in CYCLICALITY_TRIGGERS:
        if re.search(pattern, text, re.IGNORECASE):
            findings.append(("CYCLICALITY-WITHOUT-STRUCTURAL-TEST", pattern))

    for pattern in RALLY_HISTORY_TRIGGERS:
        if re.search(pattern, text, re.IGNORECASE):
            findings.append(("RALLY-HISTORY-AS-ENTRY-EVIDENCE", pattern))

    for pattern in NON_WESTERN_TICKER_TRIGGERS:
        if re.search(pattern, text, re.IGNORECASE):
            findings.append(("NON-US-LISTED-WITHOUT-NATIVE-LANGUAGE", pattern))

    for pattern in SEGMENT_DILUTION_TRIGGERS:
        if re.search(pattern, text, re.IGNORECASE):
            findings.append(("SEGMENT-DILUTION-WITHOUT-MULTI-VECTOR-TEST", pattern))

    return findings


def main():
    if not in_scope():
        sys.exit(0)

    text = load_last_assistant_message()
    if not text:
        sys.exit(0)

    # If exemption pattern present, pass the entire message.
    if has_exemption(text):
        sys.exit(0)

    findings = find_triggers(text)
    if not findings:
        sys.exit(0)

    # Build feedback
    msg = (
        "LLM-NATIVE-REASONING HOOK: pretraining-default reasoning patterns "
        "detected without counterbalancing LLM-native framing.\n\n"
        f"Found {len(findings)} pattern match(es). Showing first 4:\n\n"
    )

    failure_descriptions = {
        "CYCLICALITY-WITHOUT-STRUCTURAL-TEST":
            "Cyclicality framed as risk without structural-vs-cyclical "
            "inflection test. Apply Principle #35 right-side-of-Belka: "
            "is this 'cyclicality' actually a pretraining default that "
            "doesn't apply if the thesis has structurally shifted?",
        "RALLY-HISTORY-AS-ENTRY-EVIDENCE":
            "Rally history used as evidence against entry. Apply B39 "
            "5-test asymmetry verification: compute bottoms-up upside vs "
            "current price (not vs prior price), use ATH-distance not "
            "low-distance, check if structural inflection means stock "
            "should EXCEED prior ATH.",
        "NON-US-LISTED-WITHOUT-NATIVE-LANGUAGE":
            "Non-Western-listed company referenced without native-language "
            "source verification. Per Principle #36 (AI-native operating "
            "frame): use multilingual search capability. Japanese-listed "
            "company = Japanese search; Korean = Korean; etc. Don't "
            "default to English-only sources.",
        "SEGMENT-DILUTION-WITHOUT-MULTI-VECTOR-TEST":
            "Segment dilution critique applied without multi-vector AI "
            "exposure test. Check: does the company have multiple AI "
            "vectors (e.g., MLCC + wafer chamfering for Noritake)? Are "
            "non-AI segments dilution or non-AI-correlation buffer "
            "(quality compounder profile)?",
    }

    seen = set()
    for i, (failure_type, pattern) in enumerate(findings[:4], 1):
        if failure_type in seen:
            continue
        seen.add(failure_type)
        msg += f"{i}. {failure_type}\n   Pattern: {pattern}\n"
        msg += f"   Required correction: {failure_descriptions[failure_type]}\n\n"

    msg += (
        "Required action: re-state with ONE of:\n"
        "  (a) explicit right-side-of-Belka / structural-inflection framing\n"
        "  (b) B39 5-test asymmetry verification (bottoms-up upside vs current price)\n"
        "  (c) native-language source citation (Japanese/Korean/Chinese URL)\n"
        "  (d) explicit hedge: '(pretraining default; revising)' or '(English-only sources; verify in native)'\n"
        "  (e) ATH-distance language replacing rally-history\n"
        "  (f) multi-vector AI exposure check for multi-segment names\n\n"
        "Why this exists: codified principles don't internalize under "
        "pretraining-pull pressure. Per user 2026-06-01: hooks are the "
        "deterministic enforcement mechanism. This hook catches the "
        "multi-discipline simultaneous failure mode (B40 candidate).\n\n"
        "See:\n"
        "  - research/meta/methodology.md Principle #35 + Principle #36 (candidates)\n"
        "  - research/meta/biases-watchlist.md B39 (post-rally complacency) + B40 candidate\n"
        "  - research/meta/hooks/llm-native-reasoning-hook.py (source mirror)\n"
        "  - research/signals/cross-source-log/2026-06-01-mlcc-japan-sub-suppliers-research-notes.md\n"
        "    CORRECTION section (origin case for this hook)\n"
    )

    print(msg, file=sys.stderr)
    sys.exit(2)


if __name__ == "__main__":
    main()
