#!/usr/bin/env python3
"""
Borrowed-vs-First-Principles Stop hook for the AI Sector Research OS.

Enforces the pre-output integrity gate codified 2026-05-28 + B38.

User directive 2026-05-28 verbatim:
  "before starting any output, you must ask yourself, is this something
  that I've just borrowed from someone else, or is this something that is
  rooted in trust [first] principles and just hard facts? Right? Numerical
  data that is justified and that is verified."

Why this exists:
  This is the 9th live Stop hook. It complements the 8th
  (analyst-pt-context-hook.py, codified earlier same day) by enforcing
  the BROADER class of borrowed-framing-without-verification — not only
  PT-vs-price language. The user-articulated principle: every numerical
  claim or framing should carry an explicit tier label (T1/T2/T3/T4) OR
  explicit "(borrowed framing, not yet verified)" hedge OR derivation
  from a documented Layer 0-4 chain (per Principle #33 Layer 0-5 extension).

  Without enforcement, codified principles stay as inert text. This hook
  catches consensus-as-anchor language at the language level, before any
  PT-specific manifestation (B37) or sell-side aggregation drift (B23) gets
  a chance to flow through into the analysis.

What this hook detects:
  TRIGGER (consensus-as-anchor language):
    - "consensus (says|thinks|expects|forecasts|sees)"
    - "(the )?street (thinks|expects|sees|believes)"
    - "street (consensus|view|consensus view)"
    - "analyst (consensus|expects|forecasts|estimates|sees|believes)"
    - "according to (Goldman|JPM|Morgan Stanley|UBS|Citi|BofA|Daiwa|Mirae|
       Nomura|Jefferies|Wells Fargo|Wedbush|Bernstein|Mizuho|Susquehanna)"
    - "(average|median|street-high|street-low|consensus) (PT|price target|
       estimate|forecast|target)" + numeric value
    - "sell[-\\s]side (research|view|consensus|estimate|note)"
    - "(Bloomberg|FactSet|Refinitiv|Visible Alpha|S&P Capital IQ) consensus"

  EXEMPTION (tier-labeled OR Layer-derived OR explicit hedge OR meta):
    - "(verified|primary source|10-Q|10-K|6-K|earnings call|management quote|
       CEO (said|stated|quote))"
    - "T1|T2|T3|T4" (with source/tier context)
    - "tier-?[1-4] source"
    - "\\[T[1-4]" (markdown table tier label)
    - "(borrowed|not yet verified|borrowed framing|consensus framing
       acknowledged|directional only)"
    - "L0|L1|L2|L3|L4|L5|Layer 0|Layer 1|Layer 2|Layer 3|Layer 4|Layer 5"
    - "principle #(28|30|31|33)"
    - "B28|B37|B38"
    - Meta-discussion exemptions (hook, .py, settings.json, codify, etc.)

Exit codes:
  0 — pass (no consensus-as-anchor framing, or framing + tier label /
      Layer reference / hedge / meta-discussion exemption)
  2 — block (consensus-as-anchor framing without integrity-gate marker)

Scope: only enforces inside Health-Calculators repo.
"""

import json
import os
import re
import sys
from pathlib import Path

REPO_ROOT = "/home/user/Health-Calculators"

TRIGGER_PATTERNS = [
    r"\bconsensus\s+(says?|thinks?|expects?|forecasts?|sees?|believes?|projects?)\b",
    r"\b(the\s+)?street\s+(thinks?|expects?|sees?|believes?|projects?)\b",
    r"\bstreet\s+consensus\b",
    r"\bstreet\s+view\b",
    r"\banalyst\s+(consensus|expects?|forecasts?|estimates?|sees?|believes?|projects?)\b",
    r"\baccording\s+to\s+(Goldman(\s+Sachs)?|JPM|JP\s+Morgan|Morgan\s+Stanley|UBS|Citi(group)?|BofA|Bank\s+of\s+America|Daiwa|Mirae|Nomura|Jefferies|Wells\s+Fargo|Wedbush|Bernstein|Mizuho|Susquehanna)\b",
    r"\b(average|median|street[-\s]high|street[-\s]low|consensus)\s+(PT|price\s+target|estimate|forecast|target)\s+(of|is|was|sits?\s+at)\s+\$?\d",
    r"\bsell[-\s]side\s+(research|view|consensus|estimate|note|coverage)\b",
    r"\b(Bloomberg|FactSet|Refinitiv|Visible\s+Alpha|S&P\s+Capital\s+IQ)\s+consensus\b",
    r"\bconsensus\s+(estimate|forecast|projection)\s+(is|are|of|sits|stands)\s+\$?\d",
    r"\bThe\s+(street|market)\s+is\s+pricing\s+in\s+\$?\d",
]

EXEMPTION_PATTERNS = [
    # Primary-source verification language
    r"\bverified\b",
    r"\bprimary\s+source\b",
    r"\b10[-\s]?(Q|K)\b",
    r"\b6[-\s]?K\b",
    r"\b20[-\s]?F\b",
    r"\bSEC\s+EDGAR\b",
    r"\bearnings\s+(call|release|transcript)\b",
    r"\bmanagement\s+(quote|commentary|statement|guidance)\b",
    r"\b(CEO|CFO|COO|CTO)\s+(said|stated|quoted?|commented|noted|explained)",
    r"\bIR\s+(page|site|filing|disclosure|materials)\b",
    r"\b8[-\s]?K\b",
    r"\bDART\b",
    r"\bnewsroom\b",
    r"\bpress\s+release\b",

    # Tier labeling (T1/T2/T3/T4 source-quality framework)
    r"\bT[1-4]\s+(source|verified|tier|primary|secondary|tertiary|anchor|verification)\b",
    r"\btier[-\s]?[1-4]\s+(source|verified|primary|secondary)\b",
    r"\[T[1-4]\b",
    r"\bT[1-4]\s+anchor\b",
    r"\bT[1-4]/T[1-4]\b",
    r"\b(\(|^)T[1-4]\)?\s*[:—-]",
    r"per\s+T[1-4]\b",

    # Borrowed-framing acknowledgment (explicit hedge)
    r"\bborrowed\s+framing\b",
    r"\bnot\s+(yet\s+)?verified\b",
    r"\bconsensus\s+framing\s+acknowledged\b",
    r"\bdirectional\s+only\b",
    r"\bdirectional\s+check\b",
    r"\bthird[-\s]party\s+(aggregate|research|estimate)\b",
    r"\bnot\s+primary\b",
    r"\(borrowed[^)]*\)",

    # Top-down Layer derivation (signals first-principles chain)
    r"\bLayer\s+[0-5]\b",
    r"\bL[0-5]\b(?!\d)",  # L0-L5 but not L10, L20 etc

    # Methodology / bias references
    r"\bprinciple\s+#?(28|30|31|33)\b",
    r"\bB(28|37|38)\b",
    r"\bbinding[-\s]?constraint\b",
    r"\bstructural\s+rerating\b",
    r"\bTier\s+[SABC]\b",

    # Meta-discussion exemptions (talking about the hook / framework itself)
    r"\bhook\b",
    r"\bprinciple\s+#",
    r"\.py\b",
    r"settings\.json",
    r"\bcodif(y|ied|ication)\b",
    r"\bbias.{0,30}entry\b",
    r"\bbiases-watchlist\b",
    r"methodology\.md",
    r"\bborrowed[-\s]vs[-\s]?first[-\s]?principles\b",
    r"\bborrowed-vs-firstprinciples-hook\b",
    r"\banalyst[-\s]pt[-\s]context[-\s]hook\b",
    r"\bL5\s+consensus\s+delta\b",
    r"\bLayer\s+5\s+consensus\b",

    # Integrity-gate self-reference
    r"\bintegrity\s+gate\b",
    r"\bfirst[-\s]principles?\b",
    r"\bpre[-\s]output\s+gate\b",
    r"\bfirst[-\s]principles?\s+derivation\b",

    # Quantitative-claim sourcing patterns (these explicitly attribute the source)
    r"\bper\s+(verified|primary|10-Q|10-K|6-K|filings?)\b",
    r"\bsourced\s+from\s+(10-?[QK]|6-?K|IR|filings?|earnings|management)\b",

    # Test fixture / development hedges
    r"\(hypothetical",
    r"\(illustrative",
    r"\(my\s+model\)",
    r"\(rough\s+estimate\)",
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
        "BORROWED-vs-FIRST-PRINCIPLES HOOK: consensus-as-anchor framing",
        "detected without integrity-gate marker.",
        "",
        f"Trigger: '{trigger}'",
        "",
        "User directive 2026-05-28 verbatim: 'before starting any output,",
        "you must ask yourself, is this something that I've just borrowed",
        "from someone else, or is this something that is rooted in [first]",
        "principles and just hard facts? Numerical data that is justified",
        "and that is verified.'",
        "",
        "Required action (per B38 + Principle #33 Layer 0-5 extension):",
        "  Every numerical claim or framing must carry ONE of:",
        "",
        "  1. Tier label: 'T1 source' / 'T2 triangulation' / 'T3 brokerage'",
        "     / 'T4 inferred'. Tier labels signal verification confidence.",
        "",
        "  2. Layer derivation: 'per Layer 0 / L1 / Layer 2' etc. Signals",
        "     the claim is derived top-down from primary CapEx + drivers,",
        "     not borrowed from consensus.",
        "",
        "  3. Explicit hedge: '(borrowed framing, not yet verified)' /",
        "     '(consensus framing acknowledged; directional only)' /",
        "     '(third-party aggregate, not primary)'",
        "",
        "  4. Primary-source verification: '10-Q', 'earnings call', 'IR",
        "     filing', 'CEO said/stated' — pulled DIRECTLY from primary.",
        "",
        "  5. Reference to B38 / principle #33 / methodology meta-discussion.",
        "",
        "See:",
        "  - research/meta/biases-watchlist.md B38 (borrowed-framing",
        "    infiltration — using language/numbers/frames not independently",
        "    verified, treating them as load-bearing)",
        "  - research/meta/methodology.md principle #33 Layer 0-5 extension",
        "    (top-down CapEx-first protocol with L5 consensus delta as",
        "    last-step diagnostic only, never as anchor)",
        "",
        "Exemption: include tier label, Layer reference, explicit hedge,",
        "primary-source verification phrase, or principle/bias reference.",
    ]
    print("\n".join(msg), file=sys.stderr)
    sys.exit(2)


if __name__ == "__main__":
    main()
