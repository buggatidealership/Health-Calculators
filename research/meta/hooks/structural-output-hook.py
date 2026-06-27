#!/usr/bin/env python3
"""
Structural output Stop hook for the AI Sector Research OS.

Companion to llm-native-priming-hook.py (UserPromptSubmit). Where the
priming hook biases sampling toward multi-dimensional structure
PRE-generation, this hook enforces it POST-generation. Two-bracket
architecture: priming + pruning.

Fires when assistant output is a LARGE ANALYTICAL RESPONSE (size +
content markers) but lacks any of the structural-LLM-native markers:
  - Parallel hypothesis enumeration (H1/H2/H3 with P weights)
  - N-th order cascade markers (P>80%/P~60%/P~40%/P~20%)
  - Joint-state matrix/cross-correlation table
  - Multi-criteria evaluation table with named columns

Why this exists (codified 2026-06-01):
  - 12 existing Stop hooks catch SPECIFIC failure patterns (4-digit
    ticker without JP, if/then framing, missing cascade, etc.)
  - But the GENERAL revert-to-linear-prose pattern can slip through
    every specific hook if the output happens to avoid every banned
    pattern while still being human-analyst linear.
  - This hook catches the GENERAL failure: large analytical output
    without ANY multi-dimensional structure marker.

Trigger conditions (ALL must be true):
  1. Output length > 800 chars (small responses exempt)
  2. Output contains analytical markers (TICKER pattern, "thesis",
     "position", "P=", "probability", "scenario", etc.)
  3. Output contains NONE of the LLM-native structural markers

Exemptions:
  - Short responses
  - Meta-discussion of harness internals (hooks, principles)
  - Pure file-write narration (e.g., "Updated holdings.md")
  - Single-question replies
  - The output passes ANY structural marker check

Behavior: exit 2 with stderr feedback on detection.

Retirement triggers (codified 2026-06-01):
  - If fires <5x/month for 3 consecutive months -> retire as inert
  - If false-positive rate >30% (output was legitimately exempt) ->
    refine exemption + trigger thresholds
  - Monthly audit 2026-06-24 reviews activation log

Scope: only enforces inside the research OS repo. Exit 0 outside.
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


# Analytical content markers (must have >=1 for hook to consider firing)
ANALYTICAL_MARKERS = [
    r"\b[A-Z]{2,5}\.[A-Z]{1,3}\b",      # non-US ticker (e.g., 5201.T)
    r"\b[A-Z]{2,5}\b\s+thesis",          # TICKER thesis
    r"\bthesis\b",
    r"\bposition\s+implication",
    r"\bP\s*=\s*\d+%",                   # P=X% probability
    r"\bP\(\w",                          # P(event)
    r"\b\d+%\s*[±\+\-]\s*\d+%",          # X% ± Y% uncertainty band
    r"\bportfolio\s+sizing",
    r"\b(?:bull|base|bear)\s+case",
    r"\bRight-?Side-of-Belka",
    r"\bcascade\b",
    r"\bscenario\b",
    r"\banti-?fragility\s+\d/\d",
    r"\bEV\s+(?:contribution|of|=)",
    r"\bKelly\s+(?:fraction|math)",
]


# Multi-dimensional structural markers (presence of ANY = pass)
STRUCTURAL_MARKERS = [
    # Parallel hypothesis enumeration
    r"\bH1\b.*\bH2\b.*\bH3\b",          # H1...H2...H3 (parallel hypothesis pattern)
    r"hypothes(?:is|es).{0,80}P\s*[≈~=]\s*\d+%",  # hypothesis with P weight
    r"##\s*Parallel\s+hypothes",        # explicit Parallel hypotheses heading
    r"##\s*Parallel\s+\w",              # any "Parallel X" heading
    # N-th order cascade markers
    r"\bP\s*>\s*80%",
    r"\bP\s*~\s*60%",
    r"\bP\s*~\s*40%",
    r"\bP\s*~\s*20%",
    r"\b1st\s+order\b",
    r"\b2nd\s+order\b",
    r"\b3rd\s+order\b",
    r"\b4th\s+order\b",
    r"\bknock-?on\b",
    r"\bripple\b",
    r"\bcascade\b",
    r"\bdownstream\s+(?:beneficiary|effect|casualty)",
    # Joint-state / cross-correlation table indicators
    r"\bjoint\s+(?:state|matrix|distribution)",
    r"\bcross-?correlation",
    r"\bcross-?evaluat",
    r"\bmulti-?criteria",
    # Markdown table headers strongly suggest joint comparison
    r"\|\s*[A-Z][\w\s]+\s*\|\s*[A-Z][\w\s]+\s*\|\s*[A-Z][\w\s]+\s*\|",  # 3+ column table header
    # Bayesian / probability-update language
    r"\bBayesian\s+update",
    r"\bbase\s+rate\b.*\bsignal\s+adjustment",
    r"\balt-?data\s+signal",
    # Multi-vector AI exposure check
    r"\bmulti-?vector\b",
    r"\bdual[\s-]vector\b",
    # Explicit parallel evaluation language
    r"\bin\s+parallel\b",
    r"\bsimultaneous(?:ly)?",
    r"\b≥\s*3\s+(?:hypotheses|candidates|options|scenarios)",
    r"\bat\s+least\s+3\s+(?:hypotheses|candidates|options|scenarios)",
]


# Meta-discussion / file-narration exemptions
EXEMPTION_PATTERNS = [
    r"\bhook\b",
    r"\.py\b",
    r"settings\.json",
    r"\bPrinciple\s*#\d+",
    r"\bCritical Rule #\d+",
    r"\bsession-start-hook",
    r"\banti-fabrication-hook",
    r"\bstructural-output-hook",
    r"\bllm-native-priming-hook",
    r"\bcodify",
    r"\bcodification",
    r"^(?:Updated|Saved|Created|Wrote|Pushed|Committed)\s+",  # file-write narration
    r"^(?:Yes|No|Confirmed|Acknowledged)\s*[—-]",             # acknowledgment lead-in
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

# Position-implication tier enforcement (Principle #37, added 2026-06-15).
# Every `Position implication:` line MUST carry a 🟢 / 🟡 / 🔴 tier
# marker on the same line or the line directly above. The check runs
# BEFORE the general STRUCTURAL_MARKERS pass-gate so other structural
# markers do NOT excuse a missing tier on a sizing recommendation.
POSITION_IMPLICATION_RE = re.compile(r"^.*Position implication:.*$", re.MULTILINE)
TIER_MARKER_RE = re.compile(r"[🟢🟡🔴]")


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


def has_pattern(text: str, patterns) -> bool:
    for pattern in patterns:
        if re.search(pattern, text, re.IGNORECASE | re.MULTILINE):
            return True
    return False


def _log_fire(reason: str) -> None:
    """
    Append a fire event to `meta/hook-fire-log.md` with the rejection
    reason so different fire-paths are distinguishable in audits.
    Transcript archaeology is fragile in ephemeral cloud containers;
    the committed log is the only fire record that survives container
    reclamation.
    """
    try:
        from datetime import datetime, timezone
        log_path = Path(ENFORCEMENT_PATHS[0]) / "research/meta/hook-fire-log.md"
        ts = datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M:%SZ")
        with open(log_path, "a") as lf:
            lf.write(f"- {ts} structural-output-hook FIRE ({reason})\n")
    except Exception:
        pass


def _print_position_implication_feedback(implication_line: str) -> None:
    feedback = (
        "STRUCTURAL-OUTPUT HOOK (Principle #37 enforcement): the output "
        "contains a `Position implication:` line without a 🟢/🟡/🔴 tier "
        "marker on the same line or the line directly above.\n\n"
        f"  Offending line: {implication_line.strip()[:200]}\n\n"
        "Every sizing recommendation must declare its confidence tier. "
        "Restate with one of:\n"
        "  🟢 HARD — T1 receipt (filing, IR, gov data, contract). "
        "Citation URL required.\n"
        "  🟡 DIRECTIONAL — T2 source-tier OR my-model with explicit "
        "(my model) + Bayesian P.\n"
        "  🔴 SPECULATIVE / IN-FEAR — hypothesis, candidate, "
        "pre-registered H1-H4.\n\n"
        "Convention: meta/tags.md § Truth-Tier markers + "
        "meta/methodology.md Principle #37.\n"
        "Cascade log: meta/tier-cascade-log.md.\n"
    )
    print(feedback, file=sys.stderr)


def main():
    if not in_scope():
        sys.exit(0)

    text = load_last_assistant_message()
    if not text:
        sys.exit(0)

    # Size gate: only fire on substantial analytical outputs
    if len(text) < 800:
        sys.exit(0)

    # Position-implication tier enforcement (Principle #37, added 2026-06-15).
    # Runs BEFORE the exemption + structural-markers gates (moved 2026-06-27):
    # a real sizing recommendation MUST declare its confidence tier even if the
    # message also contains a harness-meta/scan-design exemption token. The
    # exemption only suppresses the general structural-markers gate, NOT the
    # hard tier requirement on an actual Position implication line.
    for m in POSITION_IMPLICATION_RE.finditer(text):
        line = m.group(0)
        # Find the line directly above for the "above" tier-marker variant
        line_start = m.start()
        above_start = text.rfind("\n", 0, line_start - 1) + 1
        above_line = text[above_start:line_start]
        if TIER_MARKER_RE.search(line) or TIER_MARKER_RE.search(above_line):
            continue  # tier marker present on this line or directly above — OK
        # No tier marker — reject + ask to restate
        _log_fire("position-implication-tier-missing")
        _print_position_implication_feedback(line)
        sys.exit(2)

    # Exemption: meta-discussion / file-narration / acknowledgment / scan-design
    if has_pattern(text, EXEMPTION_PATTERNS):
        sys.exit(0)

    # Trigger gate: must contain analytical markers
    if not has_pattern(text, ANALYTICAL_MARKERS):
        sys.exit(0)

    # Pass condition: contains AT LEAST ONE multi-dimensional structural marker
    if has_pattern(text, STRUCTURAL_MARKERS):
        sys.exit(0)

    # Otherwise: analytical content + NO structural marker = revert pattern detected
    _log_fire("structural-markers-missing")

    feedback = (
        "STRUCTURAL-OUTPUT HOOK: large analytical response (>800 chars) "
        "with analytical markers (thesis/position/probability/scenario) "
        "but NO multi-dimensional structural markers detected.\n\n"
        "This is the general 'revert to linear human-analyst prose' "
        "failure mode. Specific Stop hooks catch specific patterns; "
        "this hook catches the structural absence of LLM-native form.\n\n"
        "Required action: re-state with AT LEAST ONE of:\n"
        "  (a) Parallel hypothesis enumeration — explicit H1, H2, H3 with "
        "P=X% probability weights\n"
        "  (b) N-th order cascade — 1st order (P>80%) / 2nd order (P~60%) "
        "/ 3rd order (P~40%) / 4th order (P~20%) markers\n"
        "  (c) Joint-state matrix / cross-correlation table (3+ column "
        "markdown table comparing names or scenarios jointly)\n"
        "  (d) Multi-criteria evaluation table with named columns\n"
        "  (e) Explicit 'in parallel' or 'simultaneously' framing with "
        "≥3 hypotheses/candidates/scenarios enumerated\n\n"
        "Why this exists: 2026-06-01 user observation that I revert to "
        "linear human-analyst prose despite 12 live Stop hooks catching "
        "specific patterns. This hook + its companion priming hook "
        "(UserPromptSubmit) implement the two-bracket architecture:\n"
        "  UserPromptSubmit (llm-native-priming-hook.py) primes generation\n"
        "  Stop (this hook + structural-output-hook.py) enforces post-hoc\n\n"
        "See:\n"
        "  - research/meta/alt-data-probabilistic-prediction-framework.md\n"
        "  - research/meta/methodology.md Principle #36 candidate (AI-native)\n"
        "  - research/meta/biases-watchlist.md B40 candidate (multi-discipline\n"
        "    simultaneous failure under pretraining-pull)\n"
        "  - research/meta/hooks/structural-output-hook.py (source mirror)\n"
    )

    print(feedback, file=sys.stderr)
    sys.exit(2)


if __name__ == "__main__":
    main()
