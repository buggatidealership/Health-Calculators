# Principle Applications Log

**Last updated:** 2026-05-27 (file created alongside principle #32 codification)

## Purpose

Per principle #32 (Pre-Action Checkpoints) + user constraint 2026-05-27: *"as long as the changes, if turned out to be rigid or are working against the expected net positive improvement, are detectable if they do not work, then yes [codify]"*.

This log records every meaningful application of principle #32 with classification, enabling monthly audit per the detectability mechanism.

## Format

One line per application:

```
[YYYY-MM-DD] {PRINCIPLE-ID} | {context} | {what was checked} | {what was caught} | {classification: REAL CATCH / FALSE POSITIVE / WASTED OVERHEAD / CORRECT DROP}
```

## Audit metrics (computed monthly at recurring cycle)

- **Real-catch rate** = REAL_CATCHES / TOTAL_APPLICATIONS. Target ≥40%. Below 20% → over-applying, raise threshold.
- **False-positive rate** = FALSE_POSITIVES / TOTAL. Target <30%.
- **Wasted-overhead rate** = WASTED_OVERHEADS / TOTAL. Target <30%.
- **Net-positive check**: REAL_CATCHES > WASTED_OVERHEADS over 30-day window. If not → principle requires revision.

If 3+ consecutive months fail any metric → escalate to retire-or-revise per principle #32 falsifiers.

## Applications (most recent first)

### 2026-05-27 (SNOW GRADE — third application day)

| Date | Principle | Context | Checked | Caught | Classification |
|---|---|---|---|---|---|
| 2026-05-27 | #32-A (fresh-verify) | SNOW Q1 FY27 GRADE — pulling actual numbers + cascade implications | Fresh research agent for Q1 actuals + DDOG/NOW cascade extraction | Agent flagged 8 data gaps (exact AH price, specific AI run rate $$, $10M+ customer count Q1 FY27, GAAP EPS, exact Q2 op margin, post-print analyst PTs, Iceberg/Polaris metrics, Databricks commentary). Hedged all in GRADE artifact. | REAL CATCH — prevented 8 over-confident citations |
| 2026-05-27 | #32-B (premortem) | Before writing SNOW GRADE artifact | Enumerated risks: (a) over-attributing cross-segment signal to DDOG/NOW (B20 risk per principle #29); (b) misreading mgmt's no-$ reframe as defensive when actually confident; (c) confusing fundamental vs stock-reaction grade per Two-Part Protocol | Premortem caught: cascade language needed explicit "DIFFERENT segments, SAME-MACRO not SAME-SEGMENT" framing; "DDOG already self-validated Q1 FY26 INDEPENDENTLY" guardrail against over-attribution; L10 lesson generation about leading-vs-lagging indicator inference | REAL CATCH — prevented 3 framing errors in cascade |

### 2026-05-27 (MOD GRADE — second application day)

| Date | Principle | Context | Checked | Caught | Classification |
|---|---|---|---|---|---|
| 2026-05-27 | #32-A (fresh-verify) | MOD Q4 FY26 GRADE — pulling actual numbers | Fresh research agent for Q4 actuals + earnings call + analyst reactions before grading my prediction | Agent flagged that CS adj EBITDA margin 18.7% was CALCULATED from disclosed $$ not directly printed by mgmt; consensus EPS was $1.57 not $1.55 (small input drift in my prediction); DC dollar revenue not disclosed standalone | REAL CATCH — three hedge flags that would have hardened a number without verification |
| 2026-05-27 | #32-B (premortem) | Before writing MOD GRADE artifact | Enumerated what could go wrong: (a) propagating uncited agent claims, (b) confusing fundamental vs stock-reaction grade per Two-Part Protocol, (c) missing macro context (NASDAQ sell-off today) implications | Premortem caught the need to keep stock action separate (Two-Part Protocol) and to note the NASDAQ-sell-off-relative-strength signal explicitly | REAL CATCH — kept fundamental + reaction grades cleanly separated |

### 2026-05-27 (codification day — seed entries from the AM brief triage that triggered the codification)

| Date | Principle | Context | Checked | Caught | Classification |
|---|---|---|---|---|---|
| 2026-05-27 | #32-A (fresh-verify) | AM brief DDG +30% framing | Fresh WebSearch for DDG install surge details | Brief framing was "30% surge" implying single-day spike; verified data is 30.5% PEAK on May 25 + 18.1% WoW US average sustained 6 days + iOS +33% WoW peaking 69.9% + noai.duckduckgo.com +22.7% | REAL CATCH — stronger evidence + more nuanced pattern than initial framing |
| 2026-05-27 | #32-A (fresh-verify) | AM brief xAI gas pivot framing | Fresh WebSearch for xAI Colossus natural gas + solar | Brief framing was "abandons solar for gas"; actual is 62 UNPERMITTED methane turbines + $2.8B more purchased + solar NOT fully abandoned (88-acre = ~10% power) + EPA/NAACP regulatory action. PLUS hidden bigger signal: Anthropic→xAI $1.25B/month for Colossus = $40B+ through 2029 NOT in brief | REAL CATCH — found bigger signal not in source brief + corrected mis-framing |
| 2026-05-27 | #32-B (premortem) | Proposed claim "near-triangulation threshold (4+ data points)" for power-pivot | Grep cross-source-log.md + bottlenecks.md for prior power-pivot references | Only ONE prior reference in bottlenecks.md, not "4+" as casually claimed | REAL CATCH — vibes-estimate corrected to actual count |
| 2026-05-27 | #32-B (premortem) | Proposed LSCC thesis update on AMD Vivado Linux restriction | Premortem: "what could go wrong if I add this?" | Vivado restriction affects developer workflow not enterprise BMC socket; adding marginal signal would dilute thesis file quality | CORRECT DROP — no update made; thesis file kept clean |

**Seed run totals (1 turn, 4 applications):**
- Real catches: 3
- Correct drops: 1
- False positives: 0
- Wasted overheads: 0
- Real-catch rate: 75%
- Net-positive check: PASSES (3 real catches + 1 correct drop > 0 wasted overheads)

**Caveat:** This is N=4 across one turn. Statistically meaningless. Real audit value emerges at N=30+ over 30 days.

## Monthly audit log (entries added at recurring cycles)

(none yet — first audit scheduled for next recurring cycle 2026-06-24 per todo.md)
