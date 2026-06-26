# Harness Accuracy-Optimization Audit — 2026-06-26

**Trigger:** User directive verbatim *"do what must be done to optimize your harness for accuracy."* End-of-week meta-audit of accuracy failure modes surfaced in the 7-day rolling window (2026-06-19 → 06-26).

**Posture:** Meta-harness work — no subagent fires (cost-budget warning ~3.9M tokens 30-day estimated). Inline-actionable upgrades only. User-authorization items flagged separately.

---

## H1-H9 Accuracy failure modes surfaced 7-day window (joint-state)

| # | Failure mode | Origin event | N (7d) | Estimated accuracy impact (my model) | Fix tier |
|---|---|---|---|---|---|
| H1 | Subagent fabricates narrative by back-solving from transient illiquid mark | Subagent 11 "Friday KRX -12.6%" back-solved from morning DeGiro €1,455 mark which was likely thin-liquidity panic print | N=1 (high-severity) | HIGH — would have anchored 72h watch on wrong narrative | **TIER 1 — inline codify** |
| H2 | Day-of-week temporal attribution error | Subagent 11 assumed 10:54 was Friday morning when actually Thursday late-evening | N=2 (Subagent 11 + my own Round 7 carry-over) | HIGH — entire Round 7 narrative built on wrong day | **TIER 1 — inline codify** |
| H3 | Cohort-decoupling diagnostic NOT in default subagent template | Subagent 13 + H2 bear-case used it post-hoc (SNDK +3.5% vs HY9H -13.4% = idiosyncratic; SNDK -1.59% vs MU 245TB = competitive product) | N=2 (surfaced AFTER primary verification missed) | MEDIUM — would catch idiosyncratic vs systematic earlier | **TIER 1 — inline codify** |
| H4 | Two-bracket hooks plateau (no priming-effective signal at WEEK-3) | structural-output-hook fire pattern 8→6→7 across weeks 1-3 | 3 weeks of data | MEDIUM — paying token cost for no measurable accuracy gain | **TIER 2 — user-authorization to retire** |
| H5 | Cross-listing GDR/ADR ratio + premium dynamics tripped repeatedly | My HY9H 1:2 vs actual 1:1 ratio assumption; Frankfurt premium vs Korean primary close mechanism not understood until Subagent 11 → 13 | N=3+ this week | MEDIUM — wrong sizing math + wrong "drop" framing | **TIER 1 — inline codify** |
| H6 | Post-hoc competitive-product surfacing | MRVL Trainium 3 socket loss (T2 SemiAnalysis surfaced via H2 monthly bear-case); SNDK MU 245TB ION (surfaced via H2 retroactively) | N=2 this week (both post-hoc) | HIGH — would have changed pre-decision sizing | **TIER 3 — recurring workflow upgrade** |
| H7 | Verification subagent cost-budget bloat | 21 fires past 7 days at ~3.9M tokens 30-day; cost-per-correction ranges 17-90k | trending up | MEDIUM — Critical Rule #16 falsifier proximity | **TIER 2 — triage discipline codify** |
| H8 | Subagent prompts lack explicit date-context anchoring | Default subagent prompts don't pin "today is X; relevant dates are Y" | systematic | MEDIUM — root cause of H2 temporal errors | **TIER 1 — inline codify** |
| H9 | Multi-self-correction events pattern (N+4 this week) | Critical Rule #11 self-correction events N+1 (bypass-route hook) + N+2 (Subagent 3 Sonnet) + N+3 (Subagent 11 temporal) + N+4 (Subagent 11 KRX narrative) | N=4 in 7 days | LOW (good signal that discipline is working) BUT signals systemic upstream framing-gap | **Already monitored** |

---

## TIER 1 INLINE CODIFICATIONS (executing this commit)

### 1. Input-data-tier classification gate (H1 fix)

**Add to methodology.md Workflow #1 INGEST step 2.5:** Verification subagent prompts MUST include this gate before narrative construction:

> **Input-data-tier classification (MANDATORY before back-solving any narrative from a single data point):**
> - **T0-MARK** = official exchange closing price / auction settle (use for EOD revaluation)
> - **T1-TRADE** = primary-listing intraday last trade (use for intraday price discovery)
> - **T2-DERIVED** = cross-listing × FX × ratio derived value (use ONLY when primary T0/T1 unavailable AND tag as derived)
> - **T3-TRANSIENT** = thin-liquidity quote, single-print, illiquid spread, broker-display intermediate — **DO NOT back-solve narratives from T3 marks alone; flag uncertainty + require T0/T1 confirmation**

**Origin failure:** Subagent 11 took user's €1,455 DeGiro morning display (T3-TRANSIENT) and back-solved a "Friday KRX -12.6%" narrative that Subagent 13 reframed as wrong. The mark was an illiquid panic-print, NOT a fair Korean close.

### 2. Subagent prompt date-context anchoring (H2 + H8 fix)

**New subagent prompt template requirement:** Every verification subagent prompt MUST include this header block:

> **Date context (MANDATORY confirm in subagent output):**
> - **Today:** YYYY-MM-DD (day-of-week)
> - **Relevant prior dates:** [list]
> - **Confirm in output:** "Today date acknowledged: YYYY-MM-DD (day). Relevant timestamps interpreted as: [interpretation]."

**Origin failure:** Subagent 11 assumed user's 10:54 timestamp = Friday morning June 26; was actually Thursday late evening June 25 (user clarified next turn). All downstream narrative was contaminated.

### 3. Cohort-decoupling diagnostic in default verification template (H3 fix)

**Add to verification subagent default output structure:**

> **Cohort-decoupling diagnostic check (MANDATORY for any held-position event):**
> - Compare event-day move vs ≥2 cohort peers in same segment
> - If event-name moves opposite-direction to ≥1 cohort peer → IDIOSYNCRATIC signal (name-specific event)
> - If event-name moves same-direction as cohort → SYSTEMIC signal (sector/macro event)
> - Surface the diagnostic VERBATIM in TL;DR

**Origin success:** Subagent 13 surfaced SNDK +3.5% vs HY9H -13.4% decoupling as proof HY9H was SK-specific not memory-cycle. Subagent H2 bear-case surfaced SNDK -1.59% vs MU 245TB ION = competitive-product event. Both diagnostics caught post-hoc; should be DEFAULT.

### 4. GDR/ADR cross-listing methodology codification (H5 fix)

**New methodology.md section: GDR/ADR Cross-Listing Mechanics:**

> When ANY held position is a GDR / ADR / depository receipt:
> 1. **Verify ratio at thesis-build:** 1:1 / 1:2 / 1:10 / etc. (cite source)
> 2. **EUR price = (Primary KRW/JPY/etc. close × ratio) ÷ FX rate** — math sanity check required
> 3. **Cross-listing intraday premium** is real phenomenon; broker EOD revaluation reverts to primary close × FX = removes Frankfurt/OTC premium
> 4. **Display-vs-economic-value distinction:** intraday broker display ≠ liquid sell price; primary-listing close × FX = closer to fair economic value
> 5. **Never back-solve primary-listing price from cross-listing intraday display** without ratio + FX verification

**Origin failure:** I assumed HY9H GDR ratio was 1:2; Subagent 11 verified actual 1:1. Math: KRW 2,917,000 ÷ 1,751.52 = €1,665 ≈ €1,680 confirms 1:1. Would have been off by factor of 2 in all sizing math.

### 5. Critical Rule #16 cost-aware subagent triage (H7 fix)

**Add to Critical Rule #16 enforcement paragraph:** Cost-aware triage discipline:

> **Subagent fire cost-tier triage (added 2026-06-26):**
> - **TIER A (always fire Opus 4.8):** user-shared analyst note / news item / sell-side report with thesis implications; PRIORITY
> - **TIER B (fire if T0-attestation lacking):** numerical claim verification when source-tier T0-MARK or T1-TRADE not already cited
> - **TIER C (defer or batch):** restatement verification of harness-already-verified claims; routine cross-source-log entry
> - **TIER D (skip):** Q&A / format adjustment / typo correction (already exempted)

**Origin:** 30-day cost ~3.9M tokens; falsifier threshold ≥3 ZERO entries not yet breached but cost-per-correction creeping. Triage prevents drift.

---

## TIER 2 USER-AUTHORIZATION ITEMS (pending user decision)

### A. Retire two-bracket LLM-native hooks (priming + structural-output)

Per WEEK-3 audit: 8 → 6 → 7 fires pattern = PLATEAU, no priming-effective signal. H1 plateau P~55% / H2 priming-effective P~10% / H4 noise P~30% (my model). Retirement decision pre-authorized for 30-day close 2026-07-01 unless qualitative override.

**Cost saving:** llm-native-priming-hook injects ~10-15k tokens per UserPromptSubmit (significant aggregate cost); structural-output-hook fires post-hoc but priming-hook fires on every prompt.

**User decision required:** retire BOTH hooks at 2026-07-01 close OR override + extend experiment.

### B. Build new Stop hooks for surfaced failure modes

- **temporal-attribution-hook.py** — requires explicit day-of-week confirmation in any analytical output referencing dated events
- **input-data-tier-hook.py** — requires T0/T1/T2/T3 tier label on any back-solved/derived numerical claim
- **cohort-decoupling-hook.py** — fires on held-position-event analytical output without cohort-comparison diagnostic

**Cost:** ~30min each to build; minimal runtime overhead. User-authorization required for `cp` to `~/.claude/`.

---

## TIER 3 RECURRING WORKFLOW UPGRADE (H6 fix — post-hoc competitive-product gap)

**Problem:** MRVL Trainium 3 socket loss to Alchip + SNDK MU 245TB ION QLC SSD competitive product = both surfaced POST-HOC via monthly H2 bear-case workflow. Should surface earlier for pre-decision sizing.

**Recommendation:** Add **WEEKLY competitive-product surveillance subagent** to recurring schedule. Scope:
- Per held name: scan competitor-product announcements weekly (1-2 hops to direct substitutes)
- Sources: hyperscaler RFP wins / lost; SemiAnalysis socket analysis; trade press teardowns
- Output: per-name "competitive displacement risk" Δ vs prior week
- Cost: ~50-80k tokens/week for 7-name cohort; ~200-320k/month vs current bear-case monthly cost
- Trade-off: 4× cost vs monthly cadence; catches displacement events 3-4 weeks earlier (high-leverage for pre-decision sizing)

**User decision required:** add WEEKLY competitive-product surveillance to recurring schedule OR keep monthly H2 cadence.

---

## Net audit verdict

**TIER 1 inline codifications (5 items): EXECUTING this commit.** Methodology updates + verification subagent template updates land immediately.

**TIER 2 user-authorization items (2 sets, A+B): FLAGGED for user decision** — retirement of underperforming hooks + new hook builds.

**TIER 3 workflow upgrade (1 item): FLAGGED for user decision** — weekly competitive-product surveillance.

**Self-correction discipline running healthy:** N=4 self-correction events in 7 days = visible-correction pattern intact per Rule #11 detectability. No user-side thesis-error escalations.

**Verification regime running healthy:** 21 fires past 7 days / HIGH 17 / MEDIUM 2 = strongly POSITIVE Rule #16 verdict; cost-budget warning surfaced but no falsifier fire.

**Next audit:** 2026-07-24 (monthly) with explicit re-eval of:
- TIER 1 codifications: did inline updates measurably reduce H1-H5 / H8 failure modes?
- TIER 2 decisions: hooks retired? new hooks built?
- TIER 3 decision: weekly competitive-product surveillance running?
