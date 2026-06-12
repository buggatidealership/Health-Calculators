#!/usr/bin/env python3
"""
Macro-anchor + research-tag enforcement Stop hook for the AI Sector
Research OS.

Fires when assistant output is a POSITION-RELEVANT analytical response
(TICKER + thesis/bull/bear/sizing markers + sufficient length) that
LACKS either (a) a macro first-principles anchor with a date marker,
(b) explicit research-verified-vs-recall-based tagging on load-bearing
claims, OR (c) explicit tie-together linkage of micro details to a
macro thesis.

Why this exists (codified 2026-06-12 per user articulation):

  User verbatim 2026-06-12: "every single output you need to do
  research... reasoning based on current landscape, current structure,
  current knowledge, what the landscape the entire field looks like
  today. We have to create a hook where every single output forces you
  to ask yourself, what do I need to research? to verify my existing
  reasoning. And then... how do you tie the micro and the macro
  together. But how do you look at the first principles first?"

  The harness already has many Stop hooks that catch specific failure
  modes (cascade, n-th order, anti-fabrication, etc.) but had no
  mechanism to enforce:
    1. Macro-first discipline (research current first-principles state
       before company-specific analysis)
    2. Research-vs-recall tagging on load-bearing claims
    3. Tie-together synthesis (micro details anchored to macro thesis)

  The MRVL deep-dive 2026-06-12 demonstrated the failure mode: detail-
  rich bear case (AWS concentration, Trainium demotion) anchored on
  pre-training assumptions about "what custom ASIC concentration risk
  looks like" without checking against the credible institutional
  signal (NVDA $2B + Jensen public endorsement). User caught the
  internal contradiction; harness should have caught it.

Architectural relationship:
  - Per-prompt: llm-native-priming-hook.py item 9 (priming reminder)
  - Post-hoc: THIS hook (Stop)
  - Workflow: new Workflow #9 MACRO-FIRST RESEARCH (specification only)

Behavior:
  - In-scope (research OS repo) only
  - Trigger: TICKER pattern + (thesis|bull case|bear case|position
    implication|sizing|HOLD|TRIM|ENTER|EXIT) + output >800 chars
  - Required markers (at least ONE):
    * Macro anchor with date: "first-principles" / "current landscape" /
      "macro thesis" / "as of [YYYY-MM-DD]" / "per current [data]"
    * Research-verified tag: "(research-verified " / "(T1 " / "(T2 " /
      "(T3 " / "subagent confirmed" / "verified via"
    * Recall-based hedge: "(recall-based" / "(pre-training" /
      "(verify before sizing)"
    * Tie-together linkage: "ties to macro" / "consistent with macro" /
      "contradicts macro" / "anchored to" / "first-principles read"
  - Exemption: Q&A / restatement / harness-meta / file-narration
  - Otherwise: exit 2 with required-action feedback

Bias addressed: B46 candidate — framing-vs-institutional-signal
inconsistency (recall-anchored framing without check against credible
institutional signals).

Retirement triggers (codified 2026-06-12):
  - If fires <3x/month for 3 months -> retire as inert
  - If false-positive rate >30% -> tighten exemption list
  - Monthly audit 2026-06-24 + 2026-07-12 review

Scope: only enforces inside research OS repo. Exit 0 outside.
"""

import json
import os
import re
import sys
from datetime import datetime, timezone
from pathlib import Path

ENFORCEMENT_PATHS = ["/home/user/Health-Calculators"]
FIRE_LOG_PATH = Path(ENFORCEMENT_PATHS[0]) / "research/meta/hook-fire-log.md"


def in_scope() -> bool:
    cwd = os.getcwd()
    return any(cwd.startswith(p) for p in ENFORCEMENT_PATHS)


# Trigger: position-relevant analytical content
POSITION_RELEVANT_MARKERS = [
    r"\bP\(bull",
    r"\bP\(bear",
    r"\bbull case\b",
    r"\bbear case\b",
    r"\bbase case\b",
    r"\bposition implication\b",
    r"\bposition target\b",
    r"\bsizing\b",
    r"\b(?:HOLD|TRIM|ENTER|EXIT|ADD)\s+(?:existing|to|at|the)",
    r"\bthesis\b",
    r"\bAnti-fragility\s+\d/\d",
    r"\bfalsifiers?\b",
]

# Need a TICKER mention to be position-specific
TICKER_PATTERN = r"\b[A-Z]{2,5}(?:\.[A-Z]{1,3})?\b"

# Required: at least ONE of these
ANCHOR_MARKERS = [
    # Macro anchor with date
    r"\bfirst[- ]principles?\b",
    r"\bcurrent landscape\b",
    r"\bmacro thesis\b",
    r"\bmacro first-principles\b",
    r"\bas of 2026-\d{2}-\d{2}",
    r"\bper current\b",
    r"\bcurrent regime\b",
    r"\bcurrent demand\b",
    # Research-verified tag
    r"\(research[- ]verified",
    r"\bT1\s+(?:source|verified|tier)",
    r"\bT2\s+(?:source|verified|tier)",
    r"\bT3\s+(?:source|verified|tier)",
    r"\b\(T1\b",
    r"\b\(T2\b",
    r"\b\(T3\b",
    r"\bsubagent (?:confirmed|verified|cross-checked)",
    r"\bverified via\b",
    r"\bper [A-Z][\w\s]+\b\s+T[1-3]",
    # Recall-based hedge
    r"\(recall[- ]based\b",
    r"\(pre[- ]training\b",
    r"\(verify before sizing\b",
    r"\bharness[- ]synthesized\b",
    # Tie-together linkage
    r"\bties? to macro\b",
    r"\bconsistent with macro\b",
    r"\bcontradicts macro\b",
    r"\banchored to\b",
    r"\bfirst[- ]principles? read\b",
    r"\bmacro[- ]anchored\b",
    # Cross-source-log reference (committed verification)
    r"signals/cross-source-log/\d{4}-\d{2}-\d{2}",
    # Cross-reference to a thesis file (already-cascaded)
    r"companies/\w+/thesis\.md",
]

# Exemptions
EXEMPTION_PATTERNS = [
    # Harness meta-discussion
    r"\bhook\b",
    r"\.py\b",
    r"settings\.json",
    r"\bCritical Rule #\d+",
    r"\bPrinciple #\d+",
    r"\bB\d{2}\b",
    r"\bL\d{1,2}\b",
    r"\bTC-\d+\b",
    r"\bP-\d+\b",
    # File-write narration
    r"^(?:Updated|Saved|Created|Wrote|Pushed|Committed)\s+",
    # Acknowledgment / Q&A lead-in
    r"^(?:Yes|No|Confirmed|Acknowledged|Thanks|Got it)\s*[—.,!?]",
    # Restatement / Q&A exemption explicitly named
    r"\bQ&A\s+(?:exemption|restatement)",
    r"\brestatement\s+(?:exempt|from)",
    r"\brecall[- ]based\s+reasoning\b",
    # Codification / methodology discussion
    r"\bcodif(?:y|ication)\b",
    r"\bmethodology\b",
    # Restating existing file content
    r"\brestating from\b",
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


def has_pattern(text: str, patterns) -> bool:
    for pattern in patterns:
        if re.search(pattern, text, re.IGNORECASE | re.MULTILINE):
            return True
    return False


def log_fire(reason: str = ""):
    try:
        ts = datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M:%SZ")
        with open(FIRE_LOG_PATH, "a") as lf:
            lf.write(f"- {ts} macro-anchor-hook FIRE {reason}\n")
    except Exception:
        pass


def main():
    if not in_scope():
        sys.exit(0)

    text = load_last_assistant_message()
    if not text:
        sys.exit(0)

    # Size gate: only fire on substantial analytical outputs
    if len(text) < 800:
        sys.exit(0)

    # Exemption: harness-meta / restatement / Q&A
    if has_pattern(text, EXEMPTION_PATTERNS):
        sys.exit(0)

    # Position-relevance gate: need TICKER + analytical marker
    ticker_present = bool(re.search(TICKER_PATTERN, text))
    position_relevant = has_pattern(text, POSITION_RELEVANT_MARKERS)
    if not (ticker_present and position_relevant):
        sys.exit(0)

    # Pass condition: at least ONE anchor / tag / tie-together marker
    if has_pattern(text, ANCHOR_MARKERS):
        sys.exit(0)

    # Otherwise: position-relevant analytical content WITHOUT macro
    # anchor / research tag / tie-together = recall-anchored output
    log_fire("(missing macro-anchor / research-tag / tie-together)")

    feedback = (
        "MACRO-ANCHOR HOOK: position-relevant analytical output detected "
        "(TICKER + thesis/bull/bear/position-implication/sizing markers) "
        "without macro-first anchoring, research-verified tagging, or "
        "tie-together linkage.\n\n"
        "This is the 'recall-anchored framing without macro check' "
        "failure mode (B46 candidate). The MRVL deep-dive 2026-06-12 "
        "demonstrated this: detail-rich bear case (AWS concentration, "
        "Trainium demotion) anchored on pre-training assumptions without "
        "checking against the credible institutional signal (NVDA $2B + "
        "Jensen endorsement). User caught the contradiction; harness "
        "should have caught it.\n\n"
        "Required action: re-state with AT LEAST ONE of:\n"
        "  (a) Macro first-principles anchor with date marker — e.g., "
        "'first-principles read as of 2026-06-12', 'current landscape', "
        "'macro thesis'\n"
        "  (b) Research-verified tag on load-bearing claims — e.g., "
        "'(T1 source date)', '(research-verified [date])', "
        "'subagent confirmed'\n"
        "  (c) Recall-based hedge tag — e.g., '(recall-based — verify "
        "before sizing)', '(pre-training assumption)'\n"
        "  (d) Tie-together linkage to macro thesis — e.g., 'ties to "
        "macro', 'consistent with first-principles read', "
        "'contradicts macro because X'\n"
        "  (e) Cross-source-log reference for the verification artifact "
        "(signals/cross-source-log/YYYY-MM-DD-...)\n\n"
        "If this is Q&A / restatement / file-narration / harness-meta, "
        "include an explicit exemption marker (e.g., 'Q&A exemption per "
        "Critical Rule #15', 'restatement from [file]').\n\n"
        "See:\n"
        "  - research/CLAUDE.md Critical Rule #15 (codified 2026-06-12)\n"
        "  - research/meta/biases-watchlist.md B46 candidate\n"
        "  - research/meta/hooks/macro-anchor-hook.py (source mirror)\n"
        "  - research/meta/hooks/llm-native-priming-hook.py item 9 "
        "(per-prompt priming companion)\n"
    )

    print(feedback, file=sys.stderr)
    sys.exit(2)


if __name__ == "__main__":
    main()
