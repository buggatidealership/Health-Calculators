#!/usr/bin/env python3
"""
Session-prime SessionStart hook for the AI Sector Research OS.

Fires on fresh SessionStart events (NOT on SessionStart:resume).
Injects the curated session-prime.md content into context as
additionalContext, so every fresh session begins with the load-bearing
ledger items (active biases, recent lessons, regime priors, etc.)
already loaded — not gated on the model choosing to read them.

Why this exists (codified 2026-06-12 per user articulation verbatim):

  "included on the … pushes a new session to read all the components of
  the ledger that are crucial for the continuous and fluid learnings,
  as in it refers to, hey. Good. You understand the basic principles.
  Now you're forced to read this and to force to read this and this,
  which would take longer for each session to get started, but,
  therefore, the session would have more context from the get go,
  therefore, potentially prevent the common shortcomings that we are
  experiencing."

Architectural relationship to other defenses (cross-session-anchoring stack):
  - Per-prompt:        llm-native-priming-hook.py (UserPromptSubmit)
  - Per-session-cold:  THIS hook (SessionStart only, NOT resume)
  - Per-orientation:   CLAUDE.md TL;DR banner (passive instruction)
  - Post-hoc:          Stop hooks catch revert patterns

Behavior:
  - In-scope (research OS repo) only
  - Reads research/meta/session-prime.md and emits its contents as
    hookSpecificOutput.additionalContext
  - Skips on SessionStart:resume events to avoid polluting resumed
    context with redundant prime injection (resume already has context)
  - Skips silently if session-prime.md is missing (fail-open)
  - Logs each fire to meta/hook-fire-log.md (same pattern as
    structural-output-hook.py instrumentation 2026-06-12)

Trade-off (user-accepted 2026-06-12):
  Slower session start (additional ~10-15K tokens injected upfront)
  in exchange for higher baseline calibration accuracy from the
  first turn.

Falsifier (codified 2026-06-12, audit 2026-07-12):
  If 30 days of usage show no measurable reduction in bias-recurrence
  rate (e.g., magnitude-categorizing language without B45 reference),
  the file + hook are decorative. Retire both.

Scope: only enforces inside the research OS repo. Exit 0 outside.
"""

import json
import os
import sys
from datetime import datetime, timezone
from pathlib import Path

ENFORCEMENT_PATHS = ["/home/user/Health-Calculators"]
SESSION_PRIME_PATH = Path(ENFORCEMENT_PATHS[0]) / "research/meta/session-prime.md"
FIRE_LOG_PATH = Path(ENFORCEMENT_PATHS[0]) / "research/meta/hook-fire-log.md"

# Hard cap to avoid token blow-up if the file grows unmaintained.
# Session-prime.md cap rules state 500-line hard limit; if file exceeds
# this size the hook truncates and flags. This protects the context
# window even if the maintenance discipline lapses.
MAX_INJECT_CHARS = 30000  # ~7-8K tokens hard ceiling


def in_scope() -> bool:
    cwd = os.getcwd()
    return any(cwd.startswith(p) for p in ENFORCEMENT_PATHS)


def log_fire(event_source: str, injected: bool, reason: str = ""):
    try:
        ts = datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M:%SZ")
        with open(FIRE_LOG_PATH, "a") as lf:
            lf.write(
                f"- {ts} session-prime-hook event={event_source} "
                f"injected={injected} {reason}\n"
            )
    except Exception:
        pass


def main():
    if not in_scope():
        sys.exit(0)

    try:
        data = json.load(sys.stdin)
    except Exception:
        sys.exit(0)

    # SessionStart events arrive as event source "startup" (fresh) or
    # "resume" / "clear" / "compact". We inject only on truly fresh
    # cold starts. Resume sessions already have context; injecting
    # would pollute with redundancy.
    source = data.get("source", "")
    if source != "startup":
        log_fire(source, injected=False, reason="(skipped non-startup)")
        sys.exit(0)

    if not SESSION_PRIME_PATH.exists():
        log_fire(source, injected=False, reason="(file missing)")
        sys.exit(0)

    try:
        content = SESSION_PRIME_PATH.read_text(encoding="utf-8")
    except Exception:
        log_fire(source, injected=False, reason="(read failed)")
        sys.exit(0)

    truncation_note = ""
    if len(content) > MAX_INJECT_CHARS:
        content = content[:MAX_INJECT_CHARS]
        truncation_note = (
            "\n\n=== TRUNCATED: session-prime.md exceeded MAX_INJECT_CHARS "
            f"({MAX_INJECT_CHARS}). Audit at monthly cycle and prune. ===\n"
        )

    injection = (
        "=== SESSION PRIME (force-loaded by session-prime-hook on cold start) ===\n"
        "Per user directive 2026-06-12: load the load-bearing ledger items "
        "before any analytical work, so the session does not re-anchor "
        "purely on pre-training. Read this fully before responding to "
        "the first user prompt. Then continue with the standard Session "
        "Start Protocol (where-we-are.md, todo.md, lessons.md, holdings.md).\n"
        "=== BEGIN SESSION PRIME CONTENT ===\n\n"
        + content
        + truncation_note
        + "\n\n=== END SESSION PRIME ==="
    )

    log_fire(source, injected=True, reason=f"({len(injection)} chars)")

    output = {
        "hookSpecificOutput": {
            "hookEventName": "SessionStart",
            "additionalContext": injection,
        }
    }
    print(json.dumps(output))
    sys.exit(0)


if __name__ == "__main__":
    main()
