#!/usr/bin/env python3
"""
Reasoning-tagging Stop hook for the AI Sector Research OS.

Catches probability claims (P~X%, ~X-Y%, P(bull)=X%, P>Y%) that lack
an explicit source-tier label OR hedge marker. This complements the
anti-fabrication hook by enforcing SOURCE-QUALITY visibility on
load-bearing probability claims specifically.

Why this exists (codified 2026-05-31 evening per user calibration):
  User verbatim: "the tagging, right, of having either inferred or, like,
  derived or just pulled from, like, statistics, like, the labeling of
  your reasoning is therefore, I think, important."

  As the AI agent's parallel-execution capability scales (Principle #36),
  the per-claim source-quality labeling discipline must scale WITH it,
  not lag behind. Probability claims are the most load-bearing form
  output because they translate to portfolio decisions.

Trigger:
  - "P~X%" / "P=X%" / "P(bull)=X%" / "P>Y%" / "P~X-Y%"
  - "~X% (up|down|side|case|probability|chance)"
  - "X-Y% (probability|chance|likelihood)"

Exemptions (any of these in the same message = pass):
  - Source-tier labels: T1, T2, T3, T4 (with source name nearby)
  - Verified-source pattern: "per [source]", URL, file reference
  - Explicit hedges: (model), (my model), (estimate), (my inference),
    (inferred), (derived from), (rough), (approximate), (borrowed framing)
  - Cross-reference to inference-log.md (the resolution-tracking artifact)
  - Meta-discussion: hook, .py, settings.json, Principle #, B##

Exit 2 with stderr feedback when triggered without exemption. Required
action: re-state the probability claim with explicit tier label OR
explicit hedge OR Layer 0-5 derivation reference.

Retirement triggers (codified 2026-05-31):
  - If hook fires <5x/month over 3 consecutive months → inert, retire
  - If false-positive rate (Claude legitimately can't tag the claim) >30%
    → refine exemptions or retire
  - Monthly audit (next 2026-06-24) reviews activation log

Scope: only enforces inside the research OS repo. Exit 0 outside.

Bias addressed: extends Critical Rule #7 (no fabrication) discipline
to source-quality tagging at probability-claim tier.
Principle reinforced: Principle #36 candidate (AI-native operating
frame at capability scale).
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


# Probability-claim trigger patterns (narrow scope — only fires on probability claims)
PROBABILITY_PATTERNS = [
    # P~65%, P=65%, P>80%, P<20%
    r"\bP\s*[~=<>]\s*\d+(?:\.\d+)?\s*%",
    # P(bull)=X%, P(case)=X%
    r"\bP\s*\([^)]+\)\s*[~=]\s*\d+(?:\.\d+)?\s*%",
    # P~30-40%, P~X-Y%
    r"\bP\s*~\s*\d+\s*-\s*\d+\s*%",
    # X-Y% probability/chance/likelihood
    r"\b\d+\s*-\s*\d+\s*%\s+(?:probability|chance|likelihood|odds)",
    # ~X% upside/downside/return/case (not just any %)
    r"~\s*\d+(?:\.\d+)?\s*%\s+(?:upside|downside|case|return|probability|chance)",
]

# Exemption patterns (any one = entire message passes)
EXEMPTION_PATTERNS = [
    # Source-tier labels with nearby probability
    r"\bT[1-4]\b.{0,200}P\s*[~=]",
    r"P\s*[~=].{0,200}\bT[1-4]\b",
    # Verified source attribution
    r"per\s+(?:SEC|EDGAR|Bloomberg|company|management|CFO|filing|press release|10-K|10-Q|8-K|earnings call|9F)\b",
    r"https?://\S+",
    r"research/[\w/-]+\.md",
    r"companies/[A-Z]+/\w+\.md",
    # Explicit hedges (existing anti-fab vocabulary + new ones)
    r"\(my model\)",
    r"\(model\)",
    r"\(estimate\)",
    r"\(my inference\)",
    r"\(inferred\)",
    r"\(inference\)",
    r"\(derived(?:\s+from)?\)",
    r"\(rough(?:\s+estimate)?\)",
    r"\(approximate\)",
    r"\(borrowed framing\)",
    r"\(calibration\)",
    r"\(directional\)",
    # Cross-reference to inference log (the resolution artifact)
    r"inference-log\.md",
    # Meta-discussion exemptions (harness work)
    r"\bhook\b",
    r"\.py\b",
    r"settings\.json",
    r"Principle #\d+",
    r"\bB\d{2}\b",  # Bias references like B37, B39
    r"Critical Rule #\d+",
    r"reasoning-tagging",
    # User-explicit "borrowed framing not load-bearing" hedge
    r"borrowed framing",
    r"not load-bearing",
    r"directionally indicative",
    # P-value bands as part of N-th order language (existing convention)
    r"P>\s*80%",
    r"P~60%",
    r"P~40%",
    r"P~20%",
]


def load_last_assistant_message() -> str:
    """Read the last assistant message from the transcript JSONL via stdin."""
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


def find_probability_claims(text: str) -> list:
    matches = []
    for pattern in PROBABILITY_PATTERNS:
        for m in re.finditer(pattern, text, re.IGNORECASE):
            start = max(0, m.start() - 80)
            end = min(len(text), m.end() + 80)
            context = text[start:end].strip()
            matches.append({
                "match": m.group(0),
                "context": context,
            })
    return matches


def main():
    if not in_scope():
        sys.exit(0)

    text = load_last_assistant_message()
    if not text:
        sys.exit(0)

    # Generous exemption — if ANY exemption pattern is in the message, pass.
    # This avoids over-firing on meta-discussion + harness work + properly-
    # tagged claims.
    if has_exemption(text):
        sys.exit(0)

    claims = find_probability_claims(text)
    if not claims:
        sys.exit(0)

    # Show up to 3 claims
    msg = (
        "REASONING-TAGGING HOOK: probability claims detected without "
        "source-tier label OR explicit hedge.\n\n"
        f"Found {len(claims)} probability claim(s). Showing first 3:\n\n"
    )
    for i, c in enumerate(claims[:3], 1):
        msg += f"{i}. '{c['match']}'\n   Context: ...{c['context']}...\n\n"

    msg += (
        "Required action: re-state each probability claim with ONE of:\n"
        "  (a) source-tier label: T1/T2/T3/T4 with source (e.g., 'per [SEC 10-Q T1] P~65%')\n"
        "  (b) explicit hedge tag: '(my model)', '(estimate)', '(inferred)', "
        "'(borrowed framing)', '(directional)'\n"
        "  (c) reference to inference-log.md entry (where resolution is tracked)\n\n"
        "Why this exists: as parallel-execution capability scales (Principle #36),\n"
        "the per-claim source-quality labeling discipline must scale WITH it.\n"
        "User-articulated 2026-05-31: 'the labeling of your reasoning is important.'\n\n"
        "See:\n"
        "  - research/meta/methodology.md Critical Rule #7 + Principle #36 candidate\n"
        "  - research/meta/hooks/reasoning-tagging-hook.py (source mirror)\n"
        "  - research/predictions/inference-log.md (where probability claims get tracked)\n"
    )

    print(msg, file=sys.stderr)
    sys.exit(2)


if __name__ == "__main__":
    main()
