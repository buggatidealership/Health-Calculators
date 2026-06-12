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

## How the user actually interacts with this (phone-first reality, 2026-05-21)

User confirmed 2026-05-21 they primarily interact via Claude Code on phone (web/mobile), not desktop. Design solutions for that context. Do NOT propose flows that require leaving the chat session (clicking around GitHub Actions UI, configuring Claude Code Triggers from desktop settings, etc.) unless the user explicitly asks for them.

**The in-session interaction model:**

1. **Automatic notification:** the GitHub Action at `.github/workflows/recurring-audit-reminder.yml` fires every Monday 9am UTC, creates a GitHub issue when items are DUE/OVERDUE. User gets push notification on phone via GitHub.

2. **User starts a Claude Code session in response** (or any other reason — the SessionStart hook also surfaces it). The briefing shows 🚨/⏰/📅 markers at the top.

3. **User says something like "audit it" or "do the recurring stuff"** in chat. I run the audit autonomously within the session, log to this file, commit, push. User sees a summary in chat + can verify via file/commit later.

4. **No external scheduling required** beyond the GitHub Action that's already in place. The audit runs when the user is in a session and gives the OK — not on a true cron schedule. Trade-off: small delay (hours to a day) vs needing zero setup.

**Optional: Claude Code Triggers** (only if user explicitly wants true autonomous-on-schedule execution):
- Requires UI setup that may not be phone-friendly
- Adds: session starts automatically on schedule even with no user interaction
- Trade-off: more autonomous but more setup cost; only worth it if recurring audits happen often enough for the convenience to matter
- Skip by default unless user asks

---

## RECURRING-AUDIT: 2026-06-12 — Two-bracket LLM-native experiment, week-1 check (due 06-08, ran 4 days late)

**Method:** transcript archaeology over `/root/.claude/projects/-home-user-Health-Calculators/*.jsonl` — grep for the fire-feedback string, then dedupe by per-second timestamp (forked/resumed transcript copies multiply-counted single events ~10x) and exclude quote-contamination (44 matches were the hook's own source code being read/discussed in transcripts, incl. 1 self-measurement artifact on 06-12 where the dedupe script itself matched).

**Genuine deduplicated fire events:**

| Date | Fires |
|---|---|
| 2026-06-01 (install day) | 1 |
| 2026-06-03 | 1 |
| 2026-06-04 | 4 |
| 2026-06-05 | 2 |
| **2026-06-06 → 06-12** | **0 (7 consecutive days)** |

Week 1 (06-01→07): 8 fires. Week 2 partial (06-08→12): 0 fires. Session volume during the zero-fire window was HIGH (where-we-are.md logs material sessions 06-06/07/08/10/11), so the zero is not a no-activity artifact.

**Hypothesis update (pre-registered H1 P~70% plateau / H2 P~20% decrease / H3 P~10% increase, my model):** trajectory is DECREASING → consistent with H2, against the H1 prior. Reweight: H2 P~45% / H1 P~35% / H3 P~10% / measurement-confound residual P~10% (my model). NOT yet conclusive because of two confounds:
1. **Exemption breadth** — `\bhook\b`, `Principle #`, `codif*` exemptions auto-pass meta-discussion turns, and 06-08→11 sessions were heavily harness-meta. Some of the zero is exemption swallow, not behavior shift.
2. **Generous pass markers** — `cascade` and any 3-column markdown table count as structural markers; current output habits include both in nearly every analytical response. This is arguably the experiment WORKING (the habit is the point), but it can't be distinguished from marker leniency on fire-rate alone.

**Decision per pre-registered matrix:** KEEP both hooks; continue to week-2 check (2026-06-19) and week-3/4. If weeks 2-4 stay at/near zero on non-meta analytical sessions, promote H2 at the 30-day close (~07-01) and keep the architecture.

**Infrastructure fix shipped same commit:** the hook had NO persistent fire log — measurement only worked because this container happened to retain transcripts. Added append-on-fire logging to `research/meta/hook-fire-log.md` in both `~/.claude/structural-output-hook.py` and the `research/meta/hooks/` mirror. Weeks 2-4 are now measurable by design (git-committed log), not by transcript luck. Self-detection: if week-2 check finds fires in transcripts but not in hook-fire-log.md, the logger is broken.
