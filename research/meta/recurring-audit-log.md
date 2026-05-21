# Recurring Audit Log

**Purpose:** Human-readable trail of recurring audits / monthly cycles. When work happens autonomously (e.g., I run the source-reliability audit at a scheduled session start while the user is away), the completion is logged here in addition to the git commit history. This file is the single place to look for "what got done while I wasn't watching."

**Linked:** `research/meta/todo.md` (recurring items), `research/meta/source-reliability.md` (audit target), `~/.claude/session-start-hook.py` (date-aware elevation)

---

## Format per entry

```
### [YYYY-MM-DD] {audit name} — {COMPLETED | DEFERRED | PARTIAL}

**Trigger:** {scheduled / manual / autonomous after SessionStart elevation}
**Session attended:** {user present | user away (autonomous)}
**Effort:** {minutes / hours spent}

**What was done:**
- Bullet list of concrete actions

**Key findings:** (only the material updates, not exhaustive)
- ...

**Files changed:**
- path/to/file.md

**Next cycle due:** YYYY-MM-DD

**Commit:** {git SHA short form}
```

---

## Entries (most recent first)

(empty — populated as recurring audits complete)

---

## How autonomous completion works

When the SessionStart hook surfaces a recurring item as 🚨 OVERDUE or ⏰ DUE TODAY, my default behavior depends on whether the work requires user input:

| Audit type | Autonomous-eligible? | Notes |
|---|---|---|
| Source-reliability audit | ✓ YES | Self-contained: web searches + ledger updates |
| Bottleneck-forecast review | ✓ YES (if `bottlenecks.md` exists with structure) | Reads/updates existing file |
| Portfolio coherence audit | ✗ NO | Requires user portfolio data + decisions |
| Position sizing review | ✗ NO | Requires user buy/sell decisions |
| Predictions grading | ✓ partial | Fundamental grade autonomous; stock-reaction grade T+24h+ autonomous after market data settles |

For autonomous-eligible audits, when I see one is OVERDUE at SessionStart:
1. Run the audit per its scope in `todo.md`
2. Commit results with prefix `RECURRING-AUDIT:` for easy grep
3. Append entry to THIS file with summary
4. Update the recurring item's due date in `todo.md` to next cycle
5. Push everything

User can then catch up by reading this file's most recent entries.

## How to disable autonomous completion

If user wants me to ASK rather than auto-run, add to `meta/methodology.md`:
> "User must approve before any RECURRING-AUDIT runs autonomously."

I check methodology.md at session start per existing protocol.

## External scheduler (Claude Code Triggers — user setup required)

The SessionStart hook only fires when a session is started. For TRUE scheduled execution (session fires on its own at, say, 1st of each month), set up a Claude Code Trigger:

1. Go to Claude Code on the web → Settings → Triggers
2. Create new trigger:
   - **Schedule:** cron expression (e.g., `0 9 1 * *` = 9am 1st of each month)
   - **Repository:** buggatidealership/health-calculators
   - **Branch:** the active dev branch
   - **Initial prompt:** "Check for OVERDUE recurring items per SessionStart briefing. Complete any autonomous-eligible audits. Append results to `research/meta/recurring-audit-log.md` and push."
3. Save. The trigger will start a new Claude Code session on schedule.

When the trigger fires:
- SessionStart hook surfaces OVERDUE items
- I see the prompt instructing autonomous completion
- I run the audit, log to this file, commit, push
- User checks this file or commit history next time they log in

Docs: https://code.claude.com/docs/en/claude-code-on-the-web (search "Triggers")
