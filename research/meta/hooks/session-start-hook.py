#!/usr/bin/env python3
"""
SessionStart hook for the AI Sector Research OS.

At session start, surfaces:
- Top 5 open to-do items by priority + artifact-producing + tag count + age
- Always surfaces P0 items even if not in top 5
- Pending grades (predictions past resolution date)
- Stale reviews (bottlenecks.md last_review > 30 days)
- **DUE/OVERDUE recurring items** (added 2026-05-21): items whose title
  contains "monthly", "weekly", "audit cycle", "recurring" — treat the
  date field as DUE date and surface prominently with status marker:
    🚨 OVERDUE — date has passed; needs immediate attention
    ⏰ DUE TODAY — date == today
    📅 DUE SOON — within 7 days
  Non-recurring items use the date as create-date for sort only.

Output goes to stdout, which Claude Code injects into the new session's
context. Always exits 0 (informational, never blocking).

Scope: only enforces when in /home/user/Health-Calculators.
"""

import json
import os
import re
import sys
from datetime import date, datetime, timedelta
from pathlib import Path

ENFORCEMENT_PATHS = ["/home/user/Health-Calculators"]
TODO_PATH = Path("/home/user/Health-Calculators/research/meta/todo.md")
PREDICTIONS_LOG_PATH = Path("/home/user/Health-Calculators/research/predictions/grading-log.md")
BOTTLENECKS_PATH = Path("/home/user/Health-Calculators/research/sector/bottlenecks.md")
TIER_CASCADE_LOG_PATH = Path("/home/user/Health-Calculators/research/meta/tier-cascade-log.md")
SUBAGENT_LEDGER_PATH = Path("/home/user/Health-Calculators/research/meta/subagent-cost-yield-ledger.md")

REPO_PATH = Path("/home/user/Health-Calculators")

# Priority sort: lower = higher priority
PRIORITY_RANK = {"P0": 0, "P1": 1, "P2": 2, "P3": 3}

# Artifact-producing categories rank higher than process categories
ARTIFACT_CATEGORIES = {"prediction", "research", "wiki", "verification"}
PROCESS_CATEGORIES = {"harness", "infra"}


def in_scope() -> bool:
    cwd = os.getcwd()
    return any(cwd.startswith(p) for p in ENFORCEMENT_PATHS)


def parse_todo_items(text: str) -> list[dict]:
    """
    Parse open to-do items from todo.md.

    Each item starts with `- [ ] **P0 / category / 2026-05-20** [TAGS] — Title`
    followed by 1+ indented bullet sub-lines.
    """
    items = []
    # Match the header line, capturing priority, category, date, tags (optional), and title
    header_re = re.compile(
        r"^- \[ \] \*\*(P[0-3])\s*/\s*(\w+)\s*/\s*(\d{4}-\d{2}-\d{2})\*\*"
        r"(?:\s*\[([^\]]*)\])?"
        r"\s*—\s*(.+)$",
        re.MULTILINE,
    )
    for m in header_re.finditer(text):
        priority, category, date_str, tags_raw, title = m.groups()
        tags = []
        if tags_raw:
            tags = [t.strip() for t in tags_raw.split(",") if t.strip()]
        items.append({
            "priority": priority,
            "category": category.lower(),
            "date": date_str,
            "tags": tags,
            "title": title.strip(),
        })
    return items


def sort_key(item: dict) -> tuple:
    """
    Sort: priority asc, artifact-producing first, tag count desc, date asc.
    """
    p_rank = PRIORITY_RANK.get(item["priority"], 99)
    is_artifact = 0 if item["category"] in ARTIFACT_CATEGORIES else 1
    tag_count_neg = -len(item["tags"])  # negative for descending sort
    return (p_rank, is_artifact, tag_count_neg, item["date"])


# Recurring-item keywords — for these, the date in the header is a DUE date,
# not a create date. Surface aggressively when due/overdue.
RECURRING_KEYWORDS = ["monthly", "weekly", "audit cycle", "recurring", "next cycle"]


def is_recurring(item: dict) -> bool:
    title = item["title"].lower()
    return any(kw in title for kw in RECURRING_KEYWORDS)


def due_status(item: dict) -> tuple[str, int]:
    """Return (status_label, days_until_due) for a recurring item.

    Statuses:
      OVERDUE   — date < today (days_until_due negative)
      DUE_TODAY — date == today
      DUE_SOON  — within 7 days
      FUTURE    — more than 7 days out
      UNKNOWN   — date couldn't be parsed
    """
    try:
        due = datetime.strptime(item["date"], "%Y-%m-%d").date()
    except (ValueError, KeyError):
        return ("UNKNOWN", 999)
    days = (due - date.today()).days
    if days < 0:
        return ("OVERDUE", days)
    if days == 0:
        return ("DUE_TODAY", 0)
    if days <= 7:
        return ("DUE_SOON", days)
    return ("FUTURE", days)


STATUS_PREFIX = {
    "OVERDUE": "🚨 OVERDUE",
    "DUE_TODAY": "⏰ DUE TODAY",
    "DUE_SOON": "📅 DUE SOON",
}


def format_recurring_item(item: dict, status: str, days: int) -> str:
    """Format a recurring item with prominent status marker."""
    prefix = STATUS_PREFIX.get(status, status)
    tags = ", ".join(item["tags"]) if item["tags"] else "—"
    if status == "OVERDUE":
        suffix = f"by {-days} day(s)"
    elif status == "DUE_TODAY":
        suffix = "today"
    elif status == "DUE_SOON":
        suffix = f"in {days} day(s)"
    else:
        suffix = item["date"]
    return f"  {prefix} ({suffix}) — {item['priority']} / {item['category']} [{tags}] — {item['title']}"


def parse_pending_predictions(text: str) -> list[dict]:
    """
    Pending predictions: items in the `## Pending` section of grading-log.md
    with a resolution date <= today.
    """
    today = date.today()
    pending = []
    # Find the Pending section
    pending_section_re = re.compile(
        r"##\s*Pending\s*\n(.*?)(?=\n##|\Z)", re.DOTALL | re.IGNORECASE
    )
    m = pending_section_re.search(text)
    if not m:
        return pending
    section = m.group(1)
    # Table rows look like: | YYYY-MM-DD | YYYY-MM-DD | TICKER | EVENT | FILE | DIRECTION |
    row_re = re.compile(
        r"^\|\s*(\d{4}-\d{2}-\d{2})\s*\|\s*(\d{4}-\d{2}-\d{2})[^|]*\|\s*([A-Z]+)\s*\|\s*([^|]+)\s*\|",
        re.MULTILINE,
    )
    for row in row_re.finditer(section):
        made, resolution, ticker, event = row.groups()
        try:
            res_date = datetime.strptime(resolution, "%Y-%m-%d").date()
        except ValueError:
            continue
        if res_date <= today:
            pending.append({
                "made": made,
                "resolution": resolution,
                "ticker": ticker.strip(),
                "event": event.strip(),
            })
    return pending


def parse_bottlenecks_last_review(text: str) -> date | None:
    """Find `last_review: YYYY-MM-DD` field in bottlenecks.md."""
    m = re.search(r"last_review[:\s]+(\d{4}-\d{2}-\d{2})", text, re.IGNORECASE)
    if not m:
        return None
    try:
        return datetime.strptime(m.group(1), "%Y-%m-%d").date()
    except ValueError:
        return None


def format_item(item: dict) -> str:
    tags = ", ".join(item["tags"]) if item["tags"] else "—"
    return f"  {item['priority']} / {item['category']} / {item['date']} [{tags}] — {item['title']}"


def build_briefing() -> str | None:
    lines = []
    lines.append("=== SESSION START BRIEFING (auto-generated by session-start-hook.py) ===")
    lines.append("")
    lines.append(f"Working directory: {os.getcwd()}")
    lines.append(f"Today: {date.today().isoformat()}")
    lines.append("")

    # To-do items
    if TODO_PATH.exists():
        text = TODO_PATH.read_text()
        items = parse_todo_items(text)
        if items:
            items.sort(key=sort_key)
            p0_items = [i for i in items if i["priority"] == "P0"]
            top5 = items[:5]

            # Recurring items with due-status checks
            recurring_due = []  # (item, status, days) for OVERDUE/DUE_TODAY/DUE_SOON
            for it in items:
                if is_recurring(it):
                    status, days = due_status(it)
                    if status in ("OVERDUE", "DUE_TODAY", "DUE_SOON"):
                        recurring_due.append((it, status, days))
            # Sort by status urgency then days
            status_order = {"OVERDUE": 0, "DUE_TODAY": 1, "DUE_SOON": 2}
            recurring_due.sort(key=lambda x: (status_order.get(x[1], 99), x[2]))

            lines.append(f"TO-DO STATUS: {len(items)} open items")
            lines.append("")

            # Surface due/overdue recurring items FIRST (most urgent)
            if recurring_due:
                lines.append("⚠️ RECURRING ITEMS DUE/OVERDUE (auto-detected from title keywords):")
                for it, status, days in recurring_due:
                    lines.append(format_recurring_item(it, status, days))
                lines.append("")
                lines.append("Action: complete each item OR update the due date in todo.md if intentionally deferring.")
                lines.append("Autonomous-completion guidance: if user has authorized auto-handling of recurring items,")
                lines.append("complete the audit + append entry to `research/meta/recurring-audit-log.md` with summary.")
                lines.append("")

            if p0_items:
                lines.append("P0 ITEMS (always surfaced):")
                for it in p0_items:
                    lines.append(format_item(it))
                lines.append("")

            # Top 5 (de-duplicate from P0 items already shown)
            top5_non_p0 = [i for i in top5 if i["priority"] != "P0"]
            if top5_non_p0:
                lines.append("TOP OPEN ITEMS (after P0):")
                for it in top5_non_p0:
                    lines.append(format_item(it))
                lines.append("")
        else:
            lines.append("TO-DO STATUS: no open items found in todo.md")
            lines.append("")
    else:
        lines.append(f"TO-DO STATUS: todo.md not found at {TODO_PATH}")
        lines.append("")

    # Pending predictions
    if PREDICTIONS_LOG_PATH.exists():
        text = PREDICTIONS_LOG_PATH.read_text()
        pending = parse_pending_predictions(text)
        if pending:
            lines.append("PENDING GRADES (predictions past resolution date):")
            for p in pending:
                lines.append(f"  {p['ticker']} {p['event']} — predicted {p['made']}, resolved {p['resolution']}")
            lines.append("")

    # Bottlenecks last review
    if BOTTLENECKS_PATH.exists():
        text = BOTTLENECKS_PATH.read_text()
        last_review = parse_bottlenecks_last_review(text)
        if last_review:
            days_since = (date.today() - last_review).days
            if days_since > 30:
                lines.append(
                    f"STALE REVIEW: bottlenecks.md last_review {last_review.isoformat()} "
                    f"({days_since} days ago — run BOTTLENECK-FORECAST workflow)"
                )
                lines.append("")

    # Tier-cascade-log staleness surfacing (Principle #37, added 2026-06-15).
    # Surface entries in `meta/tier-cascade-log.md` whose entry-date is
    # >30 days old AND whose Intake tier is 🟡 or 🔴. (🟢 HARD entries
    # excluded — T1 receipts don't go stale the same way.) Forces explicit
    # re-verify-or-retire decisions on aging speculative / directional
    # claims so the cascade audit trail stays current.
    if TIER_CASCADE_LOG_PATH.exists():
        stale_tier_entries = parse_stale_tier_entries(TIER_CASCADE_LOG_PATH, threshold_days=30)
        if stale_tier_entries:
            lines.append("⚠️ STALE TIER ENTRIES — RE-VERIFY OR RETIRE (>30 days untouched, Principle #37):")
            for entry_date, summary, tier in stale_tier_entries[:5]:
                days_old = (date.today() - entry_date).days
                lines.append(f"  {tier} {entry_date.isoformat()} ({days_old}d) — {summary}")
            if len(stale_tier_entries) > 5:
                lines.append(
                    f"  ... + {len(stale_tier_entries) - 5} more stale entries — "
                    f"see meta/tier-cascade-log.md"
                )
            lines.append("")

    # Subagent cost-yield ledger surfacing (Critical Rule #16 instrumentation,
    # added 2026-06-19 H2). Surface past-7-day entry count + yield distribution;
    # flag if ≥2 ZERO entries in past 7 days (early warning for Rule #16
    # falsifier proximity) or cumulative 30-day cost > 1M tokens (budget signal).
    # Feeds the 2026-07-15 Rule #16 detectability re-eval at file head.
    if SUBAGENT_LEDGER_PATH.exists():
        ledger_summary = parse_ledger_recent(SUBAGENT_LEDGER_PATH, window_days=7)
        if ledger_summary["fires"] > 0:
            lines.append("🔍 SUBAGENT COST-YIELD (past 7 days, Critical Rule #16):")
            lines.append(
                f"  {ledger_summary['fires']} fires | "
                f"HIGH {ledger_summary['high']} / MEDIUM {ledger_summary['medium']} / "
                f"LOW {ledger_summary['low']} / FRAMING-ERROR-CAUGHT {ledger_summary['fec']} / "
                f"ZERO {ledger_summary['zero']}"
            )
            if ledger_summary["zero"] >= 2:
                lines.append(
                    f"  🚨 RULE #16 YIELD WARNING — {ledger_summary['zero']} ZERO entries "
                    f"in past 7 days; falsifier threshold ≥3 over 30 days (re-eval 2026-07-15)"
                )
            if ledger_summary["cost_30d_estimate"] > 1_000_000:
                lines.append(
                    f"  💰 COST-BUDGET WARNING — 30-day estimated cost "
                    f"~{ledger_summary['cost_30d_estimate'] // 1000}k tokens; "
                    f"audit yield/cost ratio before next fan-out"
                )
            lines.append("")

    lines.append("Read /home/user/Health-Calculators/research/meta/todo.md for full backlog.")
    lines.append("=== END BRIEFING ===")
    return "\n".join(lines)


def parse_ledger_recent(path: Path, window_days: int = 7) -> dict:
    """
    Parse `meta/subagent-cost-yield-ledger.md` for entries dated within the past
    `window_days`. Returns a dict with:
        - fires: total count of entries in window
        - high / medium / low / fec / zero: yield-class counts
        - cost_30d_estimate: extrapolated 30-day cost estimate (tokens)

    Entry format (per H2 file-birth specification):
        ### [YYYY-MM-DD {AM/PM-slot}] {summary}
        ...
        **Material yield class:** HIGH / MEDIUM / LOW / FRAMING-ERROR-CAUGHT / ZERO
        **Estimated token cost:** ~{X-Y}k

    Failures are silent — never break the session-start briefing on parse errors.
    """
    summary = {
        "fires": 0,
        "high": 0,
        "medium": 0,
        "low": 0,
        "fec": 0,
        "zero": 0,
        "cost_30d_estimate": 0,
    }

    try:
        text = path.read_text()
    except Exception:
        return summary

    entry_re = re.compile(r"^###\s*\[(\d{4}-\d{2}-\d{2})[^\]]*\]\s*(.+?)$", re.MULTILINE)
    matches = list(entry_re.finditer(text))
    if not matches:
        return summary

    today = date.today()
    window_cutoff = today - timedelta(days=window_days)
    window_cost_total = 0
    window_fire_total = 0

    for i, m in enumerate(matches):
        try:
            entry_date = datetime.strptime(m.group(1), "%Y-%m-%d").date()
        except ValueError:
            continue
        if entry_date < window_cutoff:
            continue

        start = m.end()
        end = matches[i + 1].start() if i + 1 < len(matches) else len(text)
        body = text[start:end]

        yield_match = re.search(
            r"\*\*Material yield class:\*\*\s*([A-Z\-]+)", body
        )
        if yield_match:
            yc = yield_match.group(1).strip()
            summary["fires"] += 1
            window_fire_total += 1
            if yc == "HIGH":
                summary["high"] += 1
            elif yc == "MEDIUM":
                summary["medium"] += 1
            elif yc == "LOW":
                summary["low"] += 1
            elif yc.startswith("FRAMING"):
                summary["fec"] += 1
            elif yc == "ZERO":
                summary["zero"] += 1

        cost_match = re.search(r"\*\*Estimated token cost:\*\*\s*~?(\d+)(?:-(\d+))?k", body)
        if cost_match:
            low_k = int(cost_match.group(1))
            high_k = int(cost_match.group(2)) if cost_match.group(2) else low_k
            window_cost_total += ((low_k + high_k) // 2) * 1000

    if window_fire_total > 0:
        days_in_window = min(window_days, max((today - window_cutoff).days, 1))
        per_day_cost = window_cost_total / days_in_window
        summary["cost_30d_estimate"] = int(per_day_cost * 30)

    return summary


def parse_stale_tier_entries(path: Path, threshold_days: int = 30) -> list:
    """
    Parse `meta/tier-cascade-log.md` for entries dated >threshold_days ago
    whose Intake tier is 🟡 or 🔴. Returns list of (date, summary, tier)
    tuples, most-stale (oldest) first.

    Entry format (per Principle #37 codification):
        ### [YYYY-MM-DD] {summary}
        ...
        **Intake tier:** 🟢 / 🟡 / 🔴

    Skips 🟢 entries — HARD T1 receipts don't go stale the same way.
    Failures are silent — never break the session-start briefing on
    parse errors.
    """
    try:
        text = path.read_text()
    except Exception:
        return []

    entry_re = re.compile(r"^###\s*\[(\d{4}-\d{2}-\d{2})\]\s*(.+?)$", re.MULTILINE)
    matches = list(entry_re.finditer(text))
    if not matches:
        return []

    today = date.today()
    stale = []
    for i, m in enumerate(matches):
        try:
            entry_date = datetime.strptime(m.group(1), "%Y-%m-%d").date()
        except ValueError:
            continue
        if (today - entry_date).days <= threshold_days:
            continue

        # Slice the entry body to find the Intake tier line
        start = m.end()
        end = matches[i + 1].start() if i + 1 < len(matches) else len(text)
        body = text[start:end]

        tier_match = re.search(r"\*\*Intake tier:\*\*\s*([🟢🟡🔴])", body)
        if not tier_match:
            continue
        tier = tier_match.group(1)
        if tier == "🟢":
            continue  # HARD receipts don't go stale

        summary = m.group(2).strip()[:80]
        stale.append((entry_date, summary, tier))

    stale.sort(key=lambda x: x[0])  # oldest first
    return stale


def main():
    # Read and discard stdin (we don't need session metadata for v1)
    try:
        sys.stdin.read()
    except Exception:
        pass

    if not in_scope():
        sys.exit(0)

    try:
        briefing = build_briefing()
        if briefing:
            print(briefing)
    except Exception as e:
        # Never break a session because of the hook. Log to stderr and pass.
        print(f"session-start-hook error: {e}", file=sys.stderr)

    # W11 container-swap detection (applied 2026-07-02 under specific user
    # authorization: "I give you full authority to implement the patch after
    # review" — given after review of hooks/PROPOSED-w11-sentinel-patch.md).
    # Cron wakes are process-memory and die on container swap; a fresh
    # container lacks the arm-time sentinel -> surface a RE-ARM banner.
    # Detector only: informs the next turn; never re-arms or executes itself.
    try:
        import os as _os
        _sentinel = _os.path.expanduser("~/.w11-armed-sentinel")
        _dstate = _os.path.join(_os.path.dirname(_os.path.dirname(_os.path.abspath(__file__))), "day-state.md")
        if _os.path.exists(_dstate) and not _os.path.exists(_sentinel):
            print("\n🚨 W11 CONTAINER-SWAP DETECTED: cron wakes are DEAD (fresh container). Run the WAKE-AUDIT PROTOCOL (research/meta/workflow-11-autonomous-day-loop.md): fetch remote log, grade missed wakes, RE-ARM all 5 jobs, touch ~/.w11-armed-sentinel, catch-up closed market windows.")
    except Exception as _e:
        print(f"w11-sentinel check error: {_e}", file=sys.stderr)

    sys.exit(0)


if __name__ == "__main__":
    main()
