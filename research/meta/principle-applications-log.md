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

### 2026-05-28 (Principle #33 refinement — competition-intensity as secondary filter)

| Date | Principle | Context | Checked | Caught | Classification |
|---|---|---|---|---|---|
| 2026-05-28 | #33 refinement | User asked "where does SNOW fall" + raised competition-intensity-vs-structural-constraint framing | Applied refined criteria to SNOW: bifurcated structural test + 4+ competitors + no regulatory anti-bypass = TIER A not TIER S | Without refinement, SNOW could have been mis-classified TIER S. The framework needed explicit competition-handling requirement to differentiate "structural but contested" (TIER A) from "structural + competition-neutralized" (TIER S) | REAL CATCH — sharpened tier framework, prevented mis-classification |
| 2026-05-28 | #33 refinement | Retroactive review of held TIER S positions under refined criteria | Re-checked HYNIX/SNDK/DDOG/ALAB/AXTI/TSEM against "competition must be limited OR neutralized" criterion | AXTI flagged as BORDERLINE — Coherent partial-bypass named in AXTI thesis means competition is NEITHER limited NOR neutralized; should reclassify TIER S → TIER A (or TIER S-borderline with hedge). Other 5 positions confirmed TIER S. | REAL CATCH — surfaced one mis-classification (AXTI) that prior placement missed |

### 2026-05-28 (Robinhood top-down + B36 + Principle #33 codification day — fifth application day)

| Date | Principle | Context | Checked | Caught | Classification |
|---|---|---|---|---|---|
| 2026-05-28 | #32-A (fresh-verify) | User flagged "88% enterprise failure rate is unverified, recheck" | WebSearch for current 2026 enterprise AI failure-rate data | Verified 88% was from a single Q4 2025/Q1 2026 study; current 2026 data: Gartner 40%+ cancellation by 2027 / RAND 80.3% all-AI fail / Gartner 79% adoption / 60% data-readiness blocker. Old single-number framing replaced with triangulated 4-source view. | REAL CATCH — prevented stale-data propagation; updated wiki/agentic-ai-enterprise.md with corrected framings |
| 2026-05-28 | #32-B (premortem) | Before codifying Principle #33 | Enumerated risks: codifying based on N=1 application; framework might be redundant with bottoms-up; embedded-agent insight from user might invalidate framework if not incorporated | Premortem caught: incorporate embedded-agent dimension INTO Principle #33 before codification; add explicit "N=1 validation; reassess at next application" fluidity caveat | REAL CATCH — prevented incomplete codification; B36 also surfaced as needed before P#33 ships |
| 2026-05-28 | #32-B (premortem) | Filtering recommended file updates from agent | Enumerated: HYNIX (marginal), MDB (no thesis file), HOOD (fails Token-Volume Filter), themes.md (single data point, principle #29 requires 3+) | Filtered 8+ proposed updates → 6 commits: dropped HYNIX (marginal), MDB (premature), HOOD (filter fails), themes (single data point) | REAL CATCH — prevented 4 speculative/premature file updates |
| 2026-05-28 | #32-A (fresh-verify) | B36 codification verification | Verified embedded-agent adoption pattern: 79% organizational adoption per Gartner Apr 2026; Robinhood / eToro / Moomoo / Schwab June pattern of embedded brokerage agents | Strong empirical support for embedded-agent reframing → B36 ships with concrete retroactive application | REAL CATCH — bias entry has fresh-verified empirical anchor, not just framework reasoning |

### 2026-05-27 (SNOW $6B AWS pact deep-dive — fourth application day; MAJOR CATCH)

| Date | Principle | Context | Checked | Caught | Classification |
|---|---|---|---|---|---|
| 2026-05-27 | #32-A (fresh-verify) | $6B AWS pact end-to-end deep dive | Launched dedicated research agent with explicit "verify direction of payment first" instruction; agent confirmed via BusinessWire T1 + CNBC T2 | **SNOW pays AWS, NOT vice versa.** My prior framing (parallel to MOD $4B Airedale customer payment) was WRONG — opposite direction of payment. Would have propagated across 5+ thesis files if not caught. | **REAL CATCH (MAJOR)** — direction-of-payment correction prevented systematic mis-framing |
| 2026-05-27 | #32-B (premortem) | Filtering agent's 10 recommended file updates | Enumerated for each: blast radius, signal-to-noise, principle #29 segmented-triangulation discipline, B23 sell-side aggregation risk | Filtered 10 → 5: dropped MRVL (Trainium3 unconfirmed), HYNIX (3rd-order marginal), ALAB (4th-order speculative), themes.md (single data point, not triangulation yet), where-we-are.md (premature) | **REAL CATCH** — prevented 5 speculative/premature file updates |
| 2026-05-27 | #32-B (premortem) | User hypothesis test: "$6B AWS pact might be biggest signal" | Agent decomposition of +25-30% AH move attribution | Found honest decomposition: NRR inflection + FY27 dual raise = ~50-60% of move; $6B pact = only ~15-20%. User's hypothesis was directionally right (pact matters) but magnitude wrong (not the biggest single driver). | **REAL CATCH** — prevented confirmation-bias on user-articulated hypothesis; delivered honest stock-move decomposition |

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
