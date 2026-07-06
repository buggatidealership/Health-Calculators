#!/usr/bin/env python3
"""
Anti-fragility M/N scoring Stop hook for the AI Sector Research OS.

Enforces methodology principle #5 (Anti-fragility > optimization) and the
Conviction Format mandate in CLAUDE.md (every thesis carries M/N scoring).
Catches bias B24 (tier-without-M/N).

Why this exists:
  User directive 2026-05-23 — elevate four currently-instruction-only rules
  to deterministic hook enforcement. Anti-fragility M/N was one of them.

  The bias: writing full Conviction Format blocks (P(bull), P(bear), tier
  classification) without naming how many of N scenarios the name wins.
  Without M/N the tier is just a vibe — the methodology mandates explicit
  multi-scenario robustness scoring.

  User clarification 2026-05-23: only fire on full thesis blocks (not on
  short tier mentions). This minimises false positives — the hook fires
  ONLY when all three of P(bull), P(bear), and tier classification are
  present in the same message.

What this hook detects:
  TRIGGER (full thesis block — all three markers present):
    - P(bull ...) marker (probability of bull case)
    - P(bear ...) marker (probability of bear case)
    - Tier classification OR Position target

  EXEMPTION (M/N score present):
    - Anti-fragility: M/N pattern
    - "wins in M of N scenarios" / "wins in M out of N scenarios"
    - "M/N: digits/digits"
    - "AF: digits/digits"
    - "digits/digits scenarios"
    - Meta-discussion exemptions (hook, principle #, .py, settings.json)

Exit codes:
  0 — pass (no full thesis block, or thesis block + M/N score present)
  2 — block (full thesis block without anti-fragility M/N)

Scope: only enforces inside Health-Calculators repo.
"""

import json
import os
import re
import sys
from pathlib import Path

REPO_ROOT = "/home/user/Health-Calculators"

P_BULL_PATTERN = r"P\(bull"
P_BEAR_PATTERN = r"P\(bear"
TIER_OR_POSITION_PATTERNS = [
    r"\bTier:\s*(Core|Active|Watchlist|Avoid)",
    r"\bTier:\s*\*\*\s*(Core|Active|Watchlist|Avoid)",
    r"\*\*Tier:?\*\*\s*(Core|Active|Watchlist|Avoid)",
    r"\bPosition\s+target:\s*\d",
    r"\bConviction\s+Format\b",
]

EXEMPTION_PATTERNS = [
    r"[Aa]nti-?fragility:\s*\d+\s*/\s*\d+",
    r"\*\*\s*[Aa]nti-?fragility\s*:?\s*\*\*\s*\d+\s*/\s*\d+",
    r"\bwins\s+in\s+\d+\s+(out\s+)?of\s+\d+\s+scenarios?\b",
    r"\bM/N:\s*\d+/\d+",
    r"\bAF:\s*\d+/\d+",
    r"\b\d+/\d+\s+scenarios\b",
    r"\bAnti-?fragility\s+score:\s*\d+/\d+",
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


def detect_full_thesis_block(text: str) -> bool:
    """All three required: P(bull, P(bear, AND Tier/Position marker."""
    has_bull = re.search(P_BULL_PATTERN, text, re.IGNORECASE) is not None
    has_bear = re.search(P_BEAR_PATTERN, text, re.IGNORECASE) is not None
    has_tier_or_pos = has_any(text, TIER_OR_POSITION_PATTERNS)
    return has_bull and has_bear and has_tier_or_pos


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

    if not detect_full_thesis_block(text):
        sys.exit(0)

    if has_any(text, EXEMPTION_PATTERNS):
        sys.exit(0)

    msg = [
        "ANTI-FRAGILITY HOOK: full Conviction Format thesis detected",
        "(P(bull) + P(bear) + Tier/Position present) without",
        "anti-fragility M/N scoring.",
        "",
        "Required action (methodology principle #5 + Conviction Format):",
        "  Every thesis carries BOTH layers — probabilistic AND tier —",
        "  and the tier is derived from anti-fragility (wins in M of N",
        "  scenarios).",
        "",
        "Add explicitly one of:",
        "  - 'Anti-fragility: M/N' (e.g., 'Anti-fragility: 4/5')",
        "  - 'wins in M of N scenarios' (e.g., 'wins in 4 of 5 scenarios')",
        "  - 'M/N: 4/5'",
        "",
        "See:",
        "  - research/meta/methodology.md principle #5 (Anti-fragility >",
        "    optimization)",
        "  - research/CLAUDE.md Conviction Format section",
        "  - research/meta/biases-watchlist.md B24 (tier-without-M/N)",
        "",
        "Exemption: include M/N anti-fragility score in the thesis block.",
    ]
    print("\n".join(msg), file=sys.stderr)
    sys.exit(2)


if __name__ == "__main__":
    main()
