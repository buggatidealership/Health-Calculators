#!/usr/bin/env python3
"""
Signal-ingest-cascade Stop hook for the AI Sector Research OS.

Enforces CLAUDE.md Critical Rule #10 (ALWAYS CASCADE CROSS-SOURCE SYNTHESIS)
at the INGEST-event tier: when user shares clearly-cascade-worthy signal
content (full AI intelligence briefs, analyst notes with attribution, etc.),
verify that the assistant created a cross-source-log file in the same session.

Detection (TRIGGER on user message containing ANY of):
  1. AI Intelligence Brief header pattern:
     "AI Intelligence Brief" + ("Morning Edition" OR "Evening Edition" OR "sources scanned")
  2. Analyst-note attribution pattern with multi-paragraph quote:
     attribution marker (Citrini, Gerstner, JPM/JPMorgan note, Goldman note, etc.)
     combined with ≥3 newline-separated quoted paragraphs

Verification:
  - Any new file in research/signals/cross-source-log/ in git status (working tree)
  - OR any new file in same path in most-recent commit
  - If neither: signal was ingested but not committed to log

Exemptions (any match → exit 0):
  - Assistant explicitly hedged: "no cascade needed", "discussion only",
    "for context only", "not committing"
  - User explicitly said: "don't cascade", "skip the cascade", "no log needed"
  - Meta-discussion turns about the hook itself: contains "signal-ingest-cascade-hook"
    or "this hook"

Behavior: exit 2 with stderr feedback when triggered without exemption.

Why this exists: user directive 2026-05-30 verbatim:
  "The cascading must be enforced. So whenever your output includes a cascade —
   whenever content I share with you leads for you to cascade and have to update —
   you essentially then have to update the files every single time. So a new session
   never relies on outdated files. That has to be enforced and cannot just be
   instructed with the rule. This has to be either a hook or a script."

Scope: only enforces inside the Health-Calculators repo.

Origin pattern: same architecture as cascade-enforcement-hook.py +
anti-fabrication-hook.py (transcript JSONL reading + git status check).

Bias addressed: B39 (candidate — cascade-skip discipline). Promotes to formal
codification after N=2+ real catches per principle #32 premortem.
"""

import json
import os
import re
import subprocess
import sys
from pathlib import Path

REPO_ROOT = "/home/user/Health-Calculators"
ENFORCEMENT_PATHS = [REPO_ROOT]
CROSS_SOURCE_LOG_DIR = "research/signals/cross-source-log"


def in_scope() -> bool:
    cwd = os.getcwd()
    return any(cwd.startswith(p) for p in ENFORCEMENT_PATHS)


def read_stdin_json():
    try:
        data = sys.stdin.read()
        if not data:
            return {}
        return json.loads(data)
    except Exception:
        return {}


def get_transcript_path(stdin_data: dict) -> str | None:
    """Extract transcript path from Stop hook stdin payload."""
    return stdin_data.get("transcript_path")


def read_recent_user_messages(transcript_path: str, n: int = 5) -> list[str]:
    """Read the last N user messages from the transcript JSONL."""
    if not transcript_path or not Path(transcript_path).exists():
        return []
    user_messages = []
    try:
        with open(transcript_path, "r") as f:
            for line in f:
                try:
                    entry = json.loads(line)
                    if entry.get("type") == "user":
                        msg = entry.get("message", {})
                        content = msg.get("content", "")
                        if isinstance(content, str):
                            user_messages.append(content)
                        elif isinstance(content, list):
                            text_parts = []
                            for block in content:
                                if isinstance(block, dict) and block.get("type") == "text":
                                    text_parts.append(block.get("text", ""))
                            if text_parts:
                                user_messages.append("\n".join(text_parts))
                except (json.JSONDecodeError, KeyError):
                    continue
    except Exception:
        return []
    return user_messages[-n:]


def get_last_assistant_message(transcript_path: str) -> str:
    """Read the most recent assistant message from the transcript JSONL."""
    if not transcript_path or not Path(transcript_path).exists():
        return ""
    last_msg = ""
    try:
        with open(transcript_path, "r") as f:
            for line in f:
                try:
                    entry = json.loads(line)
                    if entry.get("type") == "assistant":
                        msg = entry.get("message", {})
                        content = msg.get("content", "")
                        if isinstance(content, str):
                            last_msg = content
                        elif isinstance(content, list):
                            text_parts = []
                            for block in content:
                                if isinstance(block, dict) and block.get("type") == "text":
                                    text_parts.append(block.get("text", ""))
                            if text_parts:
                                last_msg = "\n".join(text_parts)
                except (json.JSONDecodeError, KeyError):
                    continue
    except Exception:
        return ""
    return last_msg


# Detection patterns
BRIEF_HEADER_PATTERN = re.compile(
    r"AI Intelligence Brief.*?(Morning Edition|Evening Edition|sources scanned)",
    re.IGNORECASE | re.DOTALL,
)

ANALYST_ATTRIBUTION_PATTERN = re.compile(
    r"\b(Citrini|Brad Gerstner|Gerstner|JPM(?:organ)? (?:note|specialist)|"
    r"Goldman (?:Sachs )?note|UBS upgrade|UBS note|Morgan Stanley note|"
    r"Bernstein note|Bank of America note|Citi note|Wells Fargo note|"
    r"Wedbush note|Mizuho note|Daiwa note|Mirae|Nomura note|Jefferies note)\b",
    re.IGNORECASE,
)

# Exemption markers
ASSISTANT_EXEMPTION_PATTERNS = [
    r"\bno cascade needed\b",
    r"\bdiscussion only\b",
    r"\bfor context only\b",
    r"\bnot committing\b",
    r"\bsignal-ingest-cascade-hook\b",
    r"\bthis hook\b",
]

USER_EXEMPTION_PATTERNS = [
    r"\bdon'?t cascade\b",
    r"\bskip (the )?cascade\b",
    r"\bno log needed\b",
    r"\bdiscussion only\b",
]


def detect_brief_in_user_messages(messages: list[str]) -> bool:
    """Returns True if any recent user message contains a full AI Intelligence Brief."""
    for msg in messages:
        if BRIEF_HEADER_PATTERN.search(msg):
            return True
    return False


def detect_analyst_note_with_quote(messages: list[str]) -> bool:
    """
    Returns True if recent user message contains analyst attribution
    combined with substantial quoted content (≥3 paragraphs).
    """
    for msg in messages:
        if ANALYST_ATTRIBUTION_PATTERN.search(msg):
            paragraph_count = len([p for p in msg.split("\n\n") if p.strip()])
            if paragraph_count >= 3:
                return True
    return False


def has_user_exemption(messages: list[str]) -> bool:
    for msg in messages:
        msg_lower = msg.lower()
        for pattern in USER_EXEMPTION_PATTERNS:
            if re.search(pattern, msg_lower):
                return True
    return False


def has_assistant_exemption(last_assistant_msg: str) -> bool:
    msg_lower = last_assistant_msg.lower()
    for pattern in ASSISTANT_EXEMPTION_PATTERNS:
        if re.search(pattern, msg_lower):
            return True
    return False


def cross_source_log_file_created_or_modified() -> bool:
    """
    Check if any file in research/signals/cross-source-log/ was created/modified
    in working tree, staged area, or most recent commit.
    """
    files = set()
    try:
        r = subprocess.run(
            ["git", "-C", REPO_ROOT, "status", "--porcelain"],
            capture_output=True, text=True, check=True
        )
        for line in r.stdout.splitlines():
            if len(line) > 3:
                files.add(line[3:].strip())
    except Exception:
        pass
    try:
        r = subprocess.run(
            ["git", "-C", REPO_ROOT, "diff-tree", "--no-commit-id", "--name-only", "-r", "HEAD"],
            capture_output=True, text=True, check=True
        )
        for line in r.stdout.splitlines():
            line = line.strip()
            if line:
                files.add(line)
    except Exception:
        pass
    for f in files:
        if f.startswith(CROSS_SOURCE_LOG_DIR + "/") and f.endswith(".md"):
            return True
    return False


def main():
    if not in_scope():
        sys.exit(0)

    stdin_data = read_stdin_json()
    transcript_path = get_transcript_path(stdin_data)
    if not transcript_path:
        sys.exit(0)

    user_messages = read_recent_user_messages(transcript_path, n=5)
    if not user_messages:
        sys.exit(0)

    # Detect trigger conditions
    brief_detected = detect_brief_in_user_messages(user_messages)
    analyst_note_detected = detect_analyst_note_with_quote(user_messages)

    if not (brief_detected or analyst_note_detected):
        sys.exit(0)

    # Check exemptions
    if has_user_exemption(user_messages):
        sys.exit(0)

    last_assistant_msg = get_last_assistant_message(transcript_path)
    if has_assistant_exemption(last_assistant_msg):
        sys.exit(0)

    # Check if cross-source-log file was created/modified
    if cross_source_log_file_created_or_modified():
        sys.exit(0)

    # Trigger fired without satisfaction
    trigger_type = []
    if brief_detected:
        trigger_type.append("AI Intelligence Brief shared")
    if analyst_note_detected:
        trigger_type.append("Analyst note with multi-paragraph quote shared")

    feedback = f"""SIGNAL-INGEST-CASCADE HOOK: Cascade-worthy signal content detected
in recent user messages but no cross-source-log file was created/modified
in research/signals/cross-source-log/ during this session.

Trigger(s) detected: {', '.join(trigger_type)}

Required action (per CLAUDE.md Critical Rule #10):
  1. Create a dated file at research/signals/cross-source-log/{{YYYY-MM-DD}}-{{name}}.md
     extracting verified facts from the user-shared content
  2. Cascade back-references to any held / candidate tickers named in the
     synthesis to their companies/{{TICKER}}/thesis.md files
  3. Commit + push so future sessions see updated state

Why this hook exists (user directive 2026-05-30 verbatim):
  "The cascading must be enforced. So whenever your output includes a cascade —
   whenever content I share with you leads for you to cascade and have to update —
   you essentially then have to update the files every single time. So a new session
   never relies on outdated files."

Exemption: if this is genuinely discussion-only (no signal to log), respond with
explicit hedge like 'discussion only - no cascade needed' or 'for context only -
not committing to file' before Stop.

See:
  - research/meta/methodology.md (Critical Rule #10)
  - research/meta/biases-watchlist.md B39 (candidate — cascade-skip discipline)
  - research/meta/hooks/signal-ingest-cascade-hook.py (source mirror)
"""
    print(feedback, file=sys.stderr)
    sys.exit(2)


if __name__ == "__main__":
    main()
