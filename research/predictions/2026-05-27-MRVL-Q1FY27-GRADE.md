# MRVL Q1 FY2027 — GRADE

**Date graded:** 2026-05-28 (T+0 fundamental grade per Two-Part Protocol; T+24h stock-reaction grade also included given same-day window)
**Ticker:** MRVL
**Prediction file:** `research/predictions/2026-05-27-MRVL-Q1FY27.md`
**WORKFLOW:** GRADE (per CLAUDE.md §5)
**Per epistemic posture:** the outcome is the diagnostic test; the lesson lives in which of 3 layers (INPUT / COMPUTATION / REASONING) was misaligned.

---

## TL;DR

3 of 5 targets directionally right; 1 partial-vintage-miss; 1 reasoning-error catch (sequential conflated with YoY). The Supply-Chain-Cohort Calibration framework PARTIALLY validated — cohort signals correctly anticipated the beat-and-raise environment + custom Si bullish commentary, but mis-timed the vintage (mgmt put the bullish reveal on FY28 not FY27) and over-modeled the immediate-quarter revenue magnitude. **Framework NOT codified** as a new principle on this N=1 application — refinement notes documented for N=2 application. Stock action: muted (-1.96% pre-market) despite clean beat-and-raise, validating principle #31 Stage 3-4 positioning modifier. Per user note today: Iran-US deal news creating macro green-tailwind; MRVL underperforming the green tape = NEGATIVE relative-strength signal even with macro support.

---

## Actuals (T1 / T2 verified)

Per [Marvell Q1 FY27 8-K T1 via SEC](https://www.sec.gov/Archives/edgar/data/0001835632/000183563226000014/q127_8kx522026ex-991.htm) + [earnings call summary T2 via Investing.com](https://www.investing.com/news/transcripts/earnings-call-transcript-marvell-technology-sees-q1-fy2027-earnings-beat-stock-rises-93CH-4713356):

| Metric | Actual | Source |
|---|---|---|
| Q1 FY27 net revenue | $2.418B (+28% YoY) — RECORD | T1 8-K |
| Q1 FY27 non-GAAP EPS | $0.80 (+29% YoY) | T1 8-K |
| Datacenter segment revenue | $1.833B (+27% YoY); 76% of total | T1 8-K |
| Q2 FY27 guide midpoint | $2.700B ± 5% | T1 8-K |
| Custom Si FY27 outlook | Maintained ">20% growth" | T2 call |
| Custom Si FY28 outlook | NEW — "more than double" YoY | T2 call |
| FY27 revenue outlook | RAISED to ~$11.5B (vs prior ~$11B target) | T2 call |
| FY28 revenue outlook | NEW — ~$16.5B (+45% YoY) | T2 call |
| Q1 FY27 stock reaction (after hours initial) | +5.07% to $218.81 | T2 web |
| Q1 FY27 stock pre-market 2026-05-28 | $194.80 / pre-mkt $199.44 (-0.37% to -1.96%) | T2 web |

---

## 3-layer GRADE per target

### Target 1: Q1 FY27 Total Revenue

- Predicted: **$2,470M point** (band $2,380-2,510M); 70-75% prob beat consensus $2,410M
- Actual: **$2,418M** — within wide band; beat consensus by $8M; beat guide midpoint $2,400M by $18M
- Gap: -$52M (-2.1%) vs point; **direction RIGHT** (consensus beat); **magnitude over-shot by 2.1%**

| Layer | Assessment |
|---|---|
| **INPUT** | Cohort data was current + complete (AMZN/ANET/CSCO/ALAB/NVDA/AVGO/SK Hynix T1/T2 sources within 30 days). NOT the failure layer. |
| **COMPUTATION** | Bottoms-up sequential math (Q4 FY26 $1.65B + 10% sequential) yielded $1.815B for datacenter — within 1% of actual $1.833B. Bottoms-up TOTAL of $2.385-2.420B = within 1% of actual $2.418B. Computation NOT the failure layer. |
| **REASONING** | Failure layer. Cohort-calibrated UPSIDE OVERLAY ($2,450-2,480M = +2-3% above bottoms-up base) over-applied. Cohort signals are FORWARD-looking (AWS Trainium3 ramp Q2-Q4; ANET "best demand ever" implies optical DSP Q2+ upside) — they don't translate to a 2-3% beat in the JUST-printed quarter. The cohort overlay should have been applied to Q2 guide and FY27/FY28 outlook, NOT to Q1 magnitude. |

**Diagnostic:** REASONING layer mis-applied cohort signals to wrong vintage (Q1 magnitude vs Q2-FY28 outlook).

### Target 2: Q1 FY27 Non-GAAP EPS

- Predicted: **$0.82**
- Actual: **$0.80** (at consensus high end $0.79-0.80; +29% YoY)
- Gap: -$0.02 (-2.4%); **direction tied-to-consensus**; **magnitude over-shot by 2.4%**

| Layer | Assessment |
|---|---|
| **INPUT** | Same input data as Target 1. NOT the failure layer. |
| **COMPUTATION** | **L6 over-applied here.** L6 codified 2026-05-27 (post-MOD GRADE) said apply MORE sandbag-reduction at EPS line than revenue in contracted-demand environments. I applied L6 → predicted $0.82 vs bottoms-up $0.81. But L6's calibration assumed multi-layer flow-through (revenue beat + margin + tax + share count) compounding multiplicatively. In this case revenue beat was only ~0.3% above consensus = compounding was muted. L6's expected EPS magnitude beat above revenue magnitude beat did NOT materialize. **L6 needs calibration refinement.** |
| **REASONING** | Reasoning chain was internally consistent (applied codified L6); the codified L6 itself was over-calibrated from MOD single data point. |

**Diagnostic:** COMPUTATION layer — L6's EPS magnification factor was over-calibrated. **New L11 needed:** when revenue beat is small (<1%), EPS magnification flow-through is muted, not amplified.

### Target 3: Datacenter YoY Growth %

- Predicted: **+42-47% YoY** (band)
- Actual: **+27% YoY** ($1.833B / 1.27 ≈ $1.443B Q1 FY26 base)
- Gap: ~15 percentage points off; **direction right (datacenter accelerated)**; **YoY framing MATERIALLY WRONG**

| Layer | Assessment |
|---|---|
| **INPUT** | Q1 FY26 datacenter base was knowable from prior 10-Q — I did not check it. Failure layer (partial). |
| **COMPUTATION** | The DOLLAR forecast was correct: Q4 FY26 $1.65B + 10% sequential = $1.815B predicted vs $1.833B actual (within 1%). **Math RIGHT.** |
| **REASONING** | **PRIMARY failure layer.** I conflated sequential-growth math with YoY-growth framing. The +42-47% YoY claim was derived without checking the Q1 FY26 base — I implicitly assumed sequential * 4 ≈ YoY which is structurally wrong. Major reasoning error. |

**Diagnostic:** REASONING layer — conflated sequential with YoY without verification. The bottoms-up dollar math was right; the YoY framing layered on top was wrong. **New L12 needed:** when stating YoY growth %, ALWAYS verify the year-ago base independently. Sequential math does NOT imply YoY math.

### Target 4: Custom Si FY27 Floor RAISED above >20%

- Predicted: **60% probability** FY27 floor raised to >25%
- Actual: FY27 floor **MAINTAINED at ">20%"**; FY28 NEW commentary "more than double"
- Direction: partial miss on FY27 vintage; HIT on direction of bullish-commentary upgrade BUT at FY28 vintage

| Layer | Assessment |
|---|---|
| **INPUT** | I had the Trainium3 ramp timing data (Q1 2026 AMZN earnings: Trainium3 "shipping early 2026 and nearly fully subscribed" — but production ramp is Q2-Q4 FY27 calendar window, not Q1 itself). I had the Anthropic 5GW + OpenAI 2GW commitments. **The inputs supported FY28 reveal more than FY27 reveal — I had the data but reasoned wrong vintage.** |
| **COMPUTATION** | Probability assignment of 60% for FY27 raise was reasonable given input ambiguity. |
| **REASONING** | **Failure layer.** I anchored on FY27 raise probability without weighting the alternative that mgmt would put the bullish reveal on FY28. The vintage choice is a function of (a) when ramp materially impacts revenue (FY28 for Trainium3), (b) mgmt's preference to give themselves room not to under-deliver near-term. Both arguments favored FY28 reveal — I didn't surface them as distinct alternatives. |

**Diagnostic:** REASONING layer — single-vintage framing rather than vintage-distribution framing for management commentary upgrades. **New L13 needed:** when predicting management commentary upgrades, model the VINTAGE choice as a separate probability distribution (FY27 vs FY28 vs both vs neither), not a binary "will they upgrade or not."

### Target 5: Q2 FY27 Guide Direction

- Predicted: **65-70% probability raise to $2.65B+ midpoint**
- Actual: **$2.700B midpoint** — beat my floor by $50M (+1.85%)
- Direction: RIGHT (guide raised); Magnitude: my prediction was conservative by ~$50M

| Layer | Assessment |
|---|---|
| **INPUT** | Cohort signals + L4 (smaller sandbag in contracted-demand) correctly applied. NOT failure layer. |
| **COMPUTATION** | Math worked. My $2.60-2.70B bottoms-up + ~2% sandbag-reduction landed in the right range. |
| **REASONING** | Reasoning chain sound. Application of L4 produced calibrated forecast. **CONFIRMATORY for L4.** |

**Diagnostic:** SUCCESSFUL APPLICATION. L4 (smaller sandbag in contracted-demand) validated for 2nd time (post-NVDA Q1 FY27).

### MISSED CATEGORY (not in original prediction): FY27/FY28 multi-year guide raise

- NOT predicted: FY27 outlook RAISED to ~$11.5B (vs prior ~$11B = +$500M material upgrade)
- NOT predicted: FY28 outlook NEW at ~$16.5B (+45% YoY = new structural data point)

| Layer | Assessment |
|---|---|
| **INPUT** | I had Sue's prior FY27 target as $11B from Q4 FY26 call. I did NOT model the probability of a multi-year guide UPGRADE. |
| **COMPUTATION** | Not modeled. |
| **REASONING** | **Framework completeness gap.** Supply-Chain-Cohort Calibration should have flagged that "$725B 2026 hyperscaler capex (+77% YoY) + AWS Trainium $225B commitments + Anthropic 5GW + OpenAI 2GW" structurally implies multi-year revenue acceleration → multi-year guide raise probability. My target list did not include "FY27/FY28 multi-year guide raise." This is the strongest miss vs the framework's potential. |

**Diagnostic:** PREDICTION COMPLETENESS gap. Framework should have generated a 6th target on multi-year guide raise.

---

## Supply-Chain-Cohort Calibration Framework — partial-validation verdict

**Codification decision: NOT codified as new principle yet.** N=1 application produced **partial validation with explicit refinement notes**:

| Framework dimension | Validation result |
|---|---|
| Cohort signals correctly anticipated **direction** (beat-and-raise environment) | VALIDATED |
| Cohort signals over-modeled **immediate quarter magnitude** | INVALIDATED (cohort signals project to FORWARD vintages, not Q-just-printed) |
| Cohort signals correctly anticipated **multi-year revenue acceleration** | PARTIALLY VALIDATED (direction right; my prediction targets didn't capture multi-year guide raise as separate target) |
| Cohort signals helped time **management commentary vintage** | INVALIDATED (mgmt put the bullish reveal on FY28 not FY27; I called FY27) |

**Refinement criteria for N=2 application (Schwab June 2026 or next major hyperscaler-adjacent earnings):**

1. Apply cohort-calibrated upside overlay to **FORWARD GUIDE + MULTI-YEAR OUTLOOK targets**, NOT to immediate-quarter magnitude.
2. Model **management commentary VINTAGE choice** as a separate probability distribution (current FY raise / next FY raise / no raise).
3. Add **multi-year guide raise probability** as a default target in any prediction where cohort signals indicate structural acceleration.
4. Test framework against immediate-quarter magnitude vs forward-outlook accuracy SEPARATELY — they appear to require different calibration.

**Status:** Framework NOT codified. Re-evaluate at N=2 (Schwab June 2026 launch). If pattern of "directional right + magnitude over-shot on immediate Q + multi-year outlook missed" recurs, refine before codifying. Per principle #32 premortem: N=1 insufficient.

---

## Two-Part Protocol — Stock Reaction Grade (T+0 / T+24h combined)

**Stock reaction context (user-provided macro 2026-05-28):** Iran-US near a deal — markets broadly GREEN today.

| Time window | Price | Move | Context |
|---|---|---|---|
| Pre-print (May 27 close) | ~$196.33 | — | Reference |
| After-hours initial | $218.81 | +5.07% | Initial beat-and-raise pop |
| Pre-market 2026-05-28 | $199.44 | -0.37% (from prior close) | Pop faded |
| Live 2026-05-28 | $194.80 | -1.96% | Negative despite green tape |

**Per principle #31 Stage 3-4 narrative-stage modifier predicted scenarios:**

- "Beat all 5 targets + custom Si FY27 upgrade + Q2 raise: +5 to +12%" — **PARTIAL HIT initially (+5% after-hours), then FADED to -1.96%**
- "Beat + raise but stock SLIPS anyway (NVDA pattern): -2 to -6% on profit-taking" — **MATCHED at -1.96%**

**Diagnostic:** Stage 3-4 positioning thesis VALIDATED. Beat-and-raise was insufficient against priced expectations. Per user macro note: Iran-US deal created green tape today, which SUPPRESSES the negative MRVL signal — without macro tailwind, MRVL might be down 3-5%. **MRVL underperforming the green tape = NEGATIVE RELATIVE-STRENGTH SIGNAL even with macro support.** Reference: NVDA May 2026 parallel held (Stage 4 = beat ≠ guaranteed positive move).

**Per principle #31 sizing modifier (25-35% discount for Stage 3-4):** validated. Anyone who entered MRVL at $196 on the prediction would have absorbed the immediate pre-market loss + likely 1-3 days of continued weakness before re-stabilization.

---

## New lessons appended to `lessons.md`

### L11 — When revenue beat is small (<1% above consensus), EPS magnification flow-through is muted, not amplified
**Origin:** MRVL Q1 FY27 GRADE 2026-05-28. L6 said apply MORE sandbag-reduction at EPS line than revenue in contracted-demand. Predicted $0.82 EPS; actual $0.80 (in line with consensus high end). L6 over-applied because revenue beat itself was small (~0.3%) → multi-layer flow-through (revenue × margin × tax × shares) did NOT compound the way L6 assumed.

**Generalizable lesson:** L6's EPS-amplification calibration applies when revenue beat is >1-2% above consensus. When revenue beat is small (<1%), apply NO EPS-line amplification beyond bottoms-up — let the EPS forecast track the revenue forecast 1-to-1.

**Calibration adjustment:** L6 is now CONDITIONAL — apply only when revenue forecast itself exceeds consensus by >1%. Otherwise revert to bottoms-up EPS without amplification overlay.

**Falsification:** if next 2+ MOD-style EPS predictions in contracted-demand environments show consistent EPS magnification beyond revenue magnitude regardless of revenue beat size, L11 was over-fit to MRVL single data point.

### L12 — When stating YoY growth %, ALWAYS verify the year-ago base independently
**Origin:** MRVL Q1 FY27 GRADE 2026-05-28. Predicted datacenter +42-47% YoY based on sequential math (Q4 FY26 $1.65B + 10% sequential). Actual +27% YoY. The DOLLAR forecast was right within 1% ($1.815B vs $1.833B). The YoY % framing was wrong because I never checked the Q1 FY26 base ($1.443B implied) — I implicitly conflated sequential math with YoY math.

**Generalizable lesson:** Sequential growth and YoY growth are structurally DIFFERENT metrics. When stating a YoY %, pull the year-ago base from the company 10-Q/10-K and compute YoY = (current - year_ago) / year_ago. NEVER infer YoY from sequential without the year-ago anchor.

**Calibration adjustment:** Any future prediction containing a YoY % must cite the year-ago base inline. This is a REASONING-layer discipline, not a math error.

### L13 — When predicting management commentary upgrades, model the VINTAGE choice as a separate probability distribution
**Origin:** MRVL Q1 FY27 GRADE 2026-05-28. Predicted 60% prob that FY27 custom Si floor raised. Actual: FY27 maintained at ">20%", FY28 NEW commentary "at least double." Direction right (bullish upgrade); vintage wrong (FY28 not FY27).

**Generalizable lesson:** Management commentary upgrades come at a SPECIFIC vintage. The vintage is a function of (a) when the underlying ramp materially impacts revenue, (b) mgmt's preference to give themselves room not to under-deliver near-term. Both factors favored FY28 reveal here (Trainium3 ramps Q2-Q4 FY27 → meaningful FY28 not FY27 P&L impact).

**Calibration adjustment:** When predicting management commentary upgrades, replace binary "will they upgrade or not" with vintage-distribution: P(current FY raise), P(next FY raise), P(both), P(neither). Sum to 100%. Apply ramp-timing logic to weight vintages — if the structural driver impacts year N+1 P&L > year N P&L, weight P(next FY raise) higher than P(current FY raise).

**Validation criterion:** Apply to next 2+ predictions involving management multi-year commentary. If vintage-distribution framing produces calibrated calls, L13 confirmed.

---

## Updates to grading-log.md

Status: MRVL Q1 FY27 = GRADED. Direction right on Targets 1, 2, 5; partial-vintage-miss on Target 4; reasoning-error catch on Target 3 (sequential vs YoY conflation). Framework partial validation. Three new lessons appended.

## Updates to MRVL thesis (per Critical Rule #10 cascade)

Back-reference added to `companies/MRVL/thesis.md` with thesis impact: confirms structural acceleration (FY27 raised to $11.5B + FY28 NEW at $16.5B = +45%); custom Si doubling FY28 commentary is the strongest structural signal in the print. Stage 3-4 positioning modifier validated → SIZING discipline applies.

---

## Top open question for Schwab June 2026 (next codification test point)

If Schwab launch produces 2nd application of Supply-Chain-Cohort Calibration framework AND the refined criteria (apply to forward outlook, not immediate quarter; model vintage distribution; include multi-year guide raise as default target) produce a non-consensus call that's correct → codify as new principle. If not → retain as cross-source-log methodology candidate or retire.
