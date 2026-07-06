#!/usr/bin/env python3
"""
Detect recurring todo items that are DUE/OVERDUE.

Mirrors the logic of ~/.claude/session-start-hook.py (research/meta/hooks/
session-start-hook.py) so behavior is consistent between local session
briefings and GitHub Actions notifications.

Outputs JSON lines to stdout — one per item that needs attention. Each line:
    {"title": str, "date": "YYYY-MM-DD", "status": "OVERDUE|DUE_TODAY|DUE_SOON",
     "days": int, "priority": str, "category": str}

The consuming workflow step uses `gh` CLI to create or update GitHub issues.

Exit codes:
    0 — script ran successfully (regardless of whether items found)
    1 — todo.md not found or unreadable
"""

import json
import re
import sys
from datetime import date, datetime
from pathlib import Path

TODO_PATH = Path("research/meta/todo.md")

RECURRING_KEYWORDS = ["monthly", "weekly", "audit cycle", "recurring", "next cycle"]


def parse_todo_items(text):
    items = []
    header_re = re.compile(
        r"^- \[ \] \*\*(P[0-3])\s*/\s*(\w+)\s*/\s*(\d{4}-\d{2}-\d{2})\*\*"
        r"(?:\s*\[([^\]]*)\])?"
        r"\s*—\s*(.+)$",
        re.MULTILINE,
    )
    for m in header_re.finditer(text):
        priority, category, date_str, tags_raw, title = m.groups()
        items.append({
            "priority": priority,
            "category": category.lower(),
            "date": date_str,
            "title": title.strip(),
        })
    return items


def is_recurring(item):
    title = item["title"].lower()
    return any(kw in title for kw in RECURRING_KEYWORDS)


def due_status(item):
    try:
        due = datetime.strptime(item["date"], "%Y-%m-%d").date()
    except ValueError:
        return ("UNKNOWN", 999)
    days = (due - date.today()).days
    if days < 0:
        return ("OVERDUE", days)
    if days == 0:
        return ("DUE_TODAY", 0)
    if days <= 7:
        return ("DUE_SOON", days)
    return ("FUTURE", days)


def main():
    if not TODO_PATH.exists():
        print(f"ERROR: {TODO_PATH} not found", file=sys.stderr)
        sys.exit(1)

    text = TODO_PATH.read_text()
    items = parse_todo_items(text)

    for item in items:
        if not is_recurring(item):
            continue
        status, days = due_status(item)
        if status in ("OVERDUE", "DUE_TODAY", "DUE_SOON"):
            print(json.dumps({
                **item,
                "status": status,
                "days": days,
            }))

    sys.exit(0)


if __name__ == "__main__":
    main()
