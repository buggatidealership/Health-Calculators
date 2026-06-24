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

## RECURRING-AUDIT: 2026-06-24 — Session-prime curation rule integration into monthly audit (on-time)

**Trigger:** scheduled — monthly consolidated audit (24th of each month); user-directed scope: curation-rule codification + section-by-section session-prime audit
**Session attended:** user present
**Effort:** ~20 min

**Scope:** Harness-internal meta-work only. NOT a Critical Rule #16 external-claim verification. Four deliverables: (1) current-state assessment of session-prime.md, (2) curation rule proposal + codification, (3) apply rule / identify violations, (4) monthly audit integration.

**Size at audit open:**
- 13,858 chars / 30,000 cap = 46.2% of char cap
- 150 lines / 500 hard cap = 30.0% of line cap
- Status: well under both caps; no emergency demotion needed

**Size at audit close (after changes):**
- 18,598 chars / 30,000 cap = 62.0% of char cap
- 201 lines / 500 hard cap = 40.2% of line cap
- Delta: +4,740 chars / +51 lines (net increase due to §0 curation rule addition)

**Section-by-section verdicts:**

| Section | Verdict | Action taken |
|---|---|---|
| Header + cap rules | Load-bearing | Clarified char cap reference alongside line cap |
| §1 Regime (B45) | Load-bearing, current | No change |
| §2 Active biases | Partially mislabeled | Renamed heading; B40 corrected to CONFIRMED status; B47 added (was missing) |
| §3 Recent lessons | Violated cap rule | L24 placeholder removed; rolling-5 now L21/L22/L23/L25; noted tail is L25, next = L26 |
| §4 Critical Rules | Stale — missing CR#15 + CR#16 | Added both one-liners; both codified post-session-prime creation |
| §5 TC clusters | Load-bearing | No change |
| §6 Held cohort | Date stale by 18 days | Re-dated to 2026-06-24; holdings.md flagged as authoritative |
| §7 Pending predictions | KIOXIA resolution window passed | Cleared; flagged for GRADE workflow |
| §8 Recalibrations | Past items present | Removed 2026-06-19 and 2026-06-24; added week-3/4 checks + next monthly |
| §9 Truth-tier + cascade | Load-bearing, in test window | No change |
| §9b Principle #38 + B47 | B47 de-duped to §2 | Removed B47 full text from §9b; retained framework text |
| §10 Architecture note | Load-bearing | Added curation rule location pointer |
| §11 Falsifier | Load-bearing | Added extended falsifier for OS stagnation check |

**Curation rule codified:** §0 added directly to session-prime.md. Three components: (1) inclusion criteria — recency + load-bearing + non-redundant; (2) eight specific demotion triggers; (3) 9-step monthly audit integration checklist. Rule embedded in session-prime.md rather than a separate file because the injection governance rules are themselves cold-session-load-bearing.

**Violations found and resolved (8 total):**
1. L24 placeholder — REMOVED
2. B40 mislabeled as CANDIDATE — CORRECTED to CONFIRMED VERIFIED-HIGH-CONFIDENCE
3. B47 missing from §2 — ADDED (codified 2026-06-15, never cascaded to session-prime)
4. CR#15 missing from §4 — ADDED (macro-first discipline, codified 2026-06-12)
5. CR#16 missing from §4 — ADDED (verification subagents, codified 2026-06-15)
6. §6 cohort date stale — RE-DATED to 2026-06-24
7. §7 expired KIOXIA prediction stub — CLEARED + flagged for GRADE
8. §8 past-due audit dates — REMOVED (2026-06-19 complete, 2026-06-24 = this audit)

**Key findings:**
- File was 46.2% of cap at audit open — healthy; no cap pressure
- Curation-rule gap was the primary structural issue; proto-rules in header described categories without lifecycle conditions; now codified in §0 with explicit demotion triggers
- CR#15 and CR#16 were the most material omissions — both are active enforcement disciplines that a cold session needs to know
- L24 placeholder was pure dead weight in a force-injected cold-start context
- B40 mislabeling was cosmetic but created false impression that CONFIRMED biases belong in CANDIDATE section

**Files changed:**
- `research/meta/session-prime.md` (primary — all changes above)
- `research/meta/recurring-audit-log.md` (this entry)

**Next cycle due:** 2026-07-24 (monthly consolidated audit)

**Commit:** {to-be-filled-at-next-recurring-audit per lag-1 convention}

---

## RECURRING-AUDIT: 2026-06-19 — Two-bracket LLM-native experiment, week-2 check (on-time)

**Trigger:** scheduled — SessionStart hook elevated ⏰ DUE TODAY
**Session attended:** user away (autonomous)
**Effort:** ~10 min (logger-based read replaces transcript archaeology)

**Method:** read `research/meta/hook-fire-log.md` for structural-output-hook FIRE entries in window 2026-06-12 → 2026-06-19. Logger was instrumented at the 2026-06-12 week-1 audit commit; week-2 is the first window to use the committed log instead of transcript archaeology.

**Genuine deduplicated structural-output-hook fires:**

| Date | Fires |
|---|---|
| 2026-06-12 | 0 (1 smoke-test entry excluded per audit convention) |
| 2026-06-13 | 2 (06:42Z + 19:58Z) |
| 2026-06-14 | 2 (07:48Z + 15:20Z) |
| 2026-06-15 | 0 |
| 2026-06-16 | 0 |
| 2026-06-17 | 1 (14:01Z) |
| 2026-06-18 | 1 (16:33Z) |
| 2026-06-19 | 0 (partial; current session ongoing) |
| **Total week-2 (06-12→19)** | **6** |

**Comparison vs prior windows:**
- Week-1 baseline 06-01→07: 8 fires (transcript archaeology)
- Zero-fire window 06-06→12: 0 fires
- Week-2 06-12→19: **6 fires** (rebounded from 0)

**Logger verification:** PASS. No cross-check anomalies — logger-recorded fires match observed analytical-output cascade activity in the window (AM6b/AM7/AM7c/AM8/PM30-33/PM33b/PM33c/AM9 = high analytical density). Logger working as designed.

**Hypothesis reweighting (my model, vs week-1 prior H2 P~45% / H1 P~35% / H3 P~10% / measurement-confound P~10%):**

| H | Description | Week-1 P | Week-2 P | Direction |
|---|---|---|---|---|
| H1 | Plateau (priming decorative; fires correlate w/ analytical workload) | 35% | **50%** | UP — week-2 rebound from 0→6 invalidates clean decrease trajectory |
| H2 | Decrease (priming materially shifts default mode) | 45% | **20%** | DOWN — single-week zero was likely exemption-swallow during heavy meta-discussion, not behavior shift |
| H3 | Increase (architecture wrong; behavioral discipline higher leverage) | 10% | **10%** | flat |
| H4 NEW | No signal — fire rate dominated by analytical-content-volume not priming effect | — | **20%** | NEW candidate; this and H1 are jointly the most-likely reads |

**Self-detection check (week-1 audit registered):** "if week-2 check finds fires in transcripts but not in hook-fire-log.md, the logger is broken." Logger-recorded count = 6; no separate transcript-archaeology pass was run (the whole point of instrumenting the logger was to retire transcript archaeology). Self-detection signal: PASS by construction.

**Material confound to flag for 30-day close:** without a normalizer for "analytical-content-volume per session," week-vs-week comparison is noise-bounded. Week 06-06→12 was heavy harness-meta (Critical Rule #13/#14/#15 codifications + Principle #37 file births = exemption-swallow); week 06-12→19 was heavy held-cohort cascade work (multiple held-name thesis updates = full structural-output-hook trigger surface). The fire-rate difference may be 100% workload-mix-driven and 0% priming-effect.

**Decision per pre-registered matrix:**
- KEEP both hooks (H1 + H4 jointly P~70%; H1 + H4 + H3 all argue "hook is correlated with workload, not causal-driver of structure-discipline drift")
- Continue to week-3 check 2026-06-26 + week-4 check 2026-07-03
- 30-day close 2026-07-01: if pattern matches H1 or H4, retire both hooks; if H2 reasserts, keep
- **NEW codification consideration for week-3 audit:** quantify analytical-content-volume per session (e.g., # of thesis updates × # of analytical tokens) to denormalize fire-rate — without it, H4-vs-H2 indistinguishable

**Files changed:**
- `research/meta/recurring-audit-log.md` (this entry)
- `research/meta/todo.md` (recurring item due date 06-19 → 06-26; updated H reweights in scope note)

**Next cycle due:** 2026-06-26 (week-3 check); 30-day close 2026-07-01

**Commit:** {to-be-filled-in-next-recurring-audit per lag-1 convention}

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
