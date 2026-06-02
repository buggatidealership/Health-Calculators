# Lessons — Mandatory Pre-Read Before Any New Prediction

**Last updated:** 2026-06-02

## TL;DR

Accumulated calibration memory from graded predictions. Every PREDICT workflow MUST start by reading this file. New lessons are appended via the GRADE workflow.

---

## Meta-posture — the epistemic stance for predictions (codified 2026-05-27)

**User framing 2026-05-27:** *"There is no failure or success. There's only data points, and what you learn from them, how you compute them, how you reason through them."*

Predictions are not performance artifacts. They are structured data-generation exercises. The point of writing a prediction down BEFORE the resolving event is to expose the inputs, computation, and reasoning chain to verifiable contact with reality. The GRADE that follows is not a verdict — it is the data point that closes the loop.

**Three things to learn from on every prediction (separately gradable):**
1. **What you learn from the data** — were the inputs you used current, complete, and correctly weighted? Did you miss a public data point that would have shifted the call?
2. **How you compute** — was the math/model/formula you applied structurally correct? Did the bottoms-up framework actually represent the system, or did it collapse onto a single-driver assumption?
3. **How you reason through** — was the logical chain from data → computation → conclusion sound? Did you correctly carry uncertainty through hedge bands? Did you check biases-watchlist before concluding?

The OUTCOME (right/wrong by how much) is the diagnostic test that tells you WHICH of the three layers failed. The outcome is not the lesson — the lesson lives in which layer (input/computation/reasoning) was misaligned and why.

**Implication for GRADE workflow:** every grade must explicitly identify which of the three layers explains the gap between prediction and reality. "Wrong by 3%" is not a lesson. "Wrong by 3% because INPUT was stale by 2 quarters" or "wrong by 3% because COMPUTATION over-weighted seasonal ratio at the expense of pricing-change effect" is a lesson.

**Implication for the OS posture broadly:** predictions are not bets to win or lose. They are instruments. The bigger the gap between prediction and reality (in either direction), the richer the data point — provided we can identify which layer failed. A "directionally right but magnitude wrong" prediction yields a different lesson than "directionally wrong but reasoning sound" — and both yield more learning than "directionally and magnitudinally right by accident."

This stance applies retroactively: NVDA Q1 FY27 was graded RIGHT on direction across all 4 axes, but the lesson (L4 — sandbag heuristic mismatched the contracted-demand regime) is more valuable than the score.

---

## Lessons (most recent first)

### L16 (CANDIDATE — N=1; awaiting N=2 per principle #32 premortem)

**Origin:** HPE Q2 FY26 GRADE 2026-06-02. Predicted AI backlog $7-9B using DELL's +19% sequential backlog accumulation pattern as anchor. Actual: $5.9B (+18% sequential). The percentage sequential growth rate was nearly identical between my anchor and the actual — but the absolute dollar level was $1.1B below my low band because I anchored the dollar level on DELL's higher baseline rather than HPE's lower baseline, AND I incorrectly applied DELL's backlog-accumulation sub-mechanism to HPE, which was in a backlog-conversion (rapid shipment) mode.

**Pattern:** When applying a cohort's backlog signal, the cohort company and the target company may be in DIFFERENT operational modes relative to the same demand environment. DELL was in ACCUMULATION mode (orders >> shipments, backlog building); HPE was in CONVERSION mode (strong shipments chewing through prior backlog faster than new orders added to it). Same AI server demand environment; opposite backlog dynamics.

**Generalizable lesson:** For future predictions involving AI backlog metrics using a cohort signal, explicitly specify the sub-mechanism being modeled:
- **ACCUMULATION mode** (orders > shipments): apply cohort % sequential growth rate AND use cohort's absolute scale as a proportion of the target's established backlog. Expect backlog to grow sequentially.
- **CONVERSION mode** (shipments >> incremental orders): backlog grows more modestly even in strong demand, because the company is executing through prior commitments. The primary signal of conversion mode: management language about "delivery pacing," "shipment acceleration," "AI systems bookings converting to revenue."

**Infer the mode from:** (a) prior-quarter management commentary on delivery timing; (b) whether the company is guided to grow revenue faster than orders (conversion signal) or guided revenue < orders (accumulation signal); (c) whether the company discloses "cumulative bookings" language (implies they track the conversion funnel).

**Calibration adjustment:** In CONVERSION mode, expect backlog growth of 10-25% sequential even in strong AI demand; in ACCUMULATION mode, expect backlog growth of 20-50%+ sequential from the same demand environment.

**Layer failed:** REASONING — the cohort sub-mechanism was applied without checking which mode the target was in.

**Falsification criterion:** if next 2+ AI backlog predictions correctly classify ACCUMULATION vs CONVERSION mode and produce calibrated band estimates, L16 is confirmed. If mode classification proves unpredictable, retire L16 and accept AI backlog as low-confidence metric.

**Re-eval trigger:** monthly audit 2026-06-24 OR next earnings prediction involving AI server backlog metric.

---

### L15 — Check pending corporate transactions before any EPS prediction (INPUT checklist discipline)

**Origin:** HPE Q2 FY26 GRADE 2026-06-02. Non-GAAP EPS $0.79 vs my $0.57 point estimate (+38% gap). Primary driver: H3C divestiture completion May 28, 2026 — 3 days before HPE's Q2 print. HPE received total pretax consideration ~$3.5B for its H3C stake (most recently ~$1.357B received in Q2 alone per SEC 8-K T1). This was a PUBLIC SEC filing prior to my prediction date (2026-05-29) but I did not check it. H3C monetization was the single largest gap in my EPS model.

**Layer failed:** INPUT — the data was publicly available at prediction time; I failed to run the corporate-event check as a standard step.

**Generalizable lesson:** Before any EPS prediction for a company with known pending corporate restructuring (M&A, divestiture, JV exit, asset sale), explicitly check SEC EDGAR (or company investor page) for:
- Any announced-but-not-yet-closed M&A transaction
- Any pending divestiture with known Q-level timing
- Any asset monetization with Q-specific cash recognition scheduled

These are PUBLIC data points that cause material EPS deviations from operations-only models. The failure mode is treating the company as a pure operating entity when a balance-sheet event is about to close with Q-level cash impact.

**Calibration adjustment:** Add "corporate event check" as a MANDATORY pre-prediction input validation step. Specifically: before finalizing any EPS estimate, check the target company's most recent 8-K filings in the prior 90 days for: "divestiture," "acquisition closing," "asset sale," "proceeds received," "consideration received." If any is pending or recently closed, model the non-operating EPS impact as a SEPARATE LINE in the EPS model (non-GAAP note: some companies exclude these; GAAP includes them — verify the treatment convention for the specific company before adding).

**Distinction from L1/L4:** L1 says build bottoms-up before consensus. L4 says apply smaller sandbag in contracted-demand environments. L15 adds: the bottoms-up INPUT layer must explicitly include pending corporate transactions, not just the operating segment model. Even a perfect operations-only model will systematically miss EPS when a divestiture closes in the quarter.

**Falsification criterion:** if next 3 EPS predictions include the corporate-event check AND produce calibrated EPS calls (no material non-operating EPS gap unexplained), L15 is confirmed as a workflow discipline. If the corporate-event check becomes a wasted step (no companies have pending transactions at prediction time), the checklist item is low-cost overhead — keep it.

---

### L14 (CODIFIED 2026-06-02 at N=2 — upgraded from CANDIDATE)

**N=2 data point:** HPE Q2 FY26 (Stage 3-4 + CATEGORY EVENT) → +29-36% T+24h. This is the independent cross-day validation required to codify. MRVL was N=1 (Stage 3-4 + TREND ACCELERATION → -2%). HPE confirms the CATEGORY-vs-TREND distinction holds AND extends the framework: a CATEGORY EVENT can override Stage 3-4 suppression when the structural change is large enough.

**Pattern (codified):** Distinguish CATEGORY EVENTS from TREND EVENTS in earnings-driven stock reactions. Stage classification alone under-predicts magnitude when CATEGORY EVENT compounds with stage positioning. CATEGORY EVENT at any stage produces 50-100%+ larger T+0-to-T+48h moves than TREND EVENT at the same stage.

**Markers of CATEGORY EVENT (codified):**
- New strategic relationship disclosed (SNOW Q1 FY27: signed $6B AWS pact)
- Baseline-break in previously-stable metric (SNOW: NRR 125% → 126%; HPE: revenue growth +18% YoY → +40% YoY in a single quarter)
- Multi-year guidance FRAMEWORK INTRODUCTION (HPE: FY27 framework with 8-12% revenue / 12-16% EPS / FCF ≥$4.5B — NEW baseline, not a continuation)
- Balance-sheet transformation via asset monetization at >10% market cap scale (HPE: $3.5B H3C exit)
- Management metric reframe to leading indicators (SNOW: dropped Cortex $ run rate → volume metrics per L10)

**Markers of TREND EVENT (codified):**
- Incremental beat-and-raise within existing framework
- Outlook upgrade extending existing trend (no new framework, no new vintage)
- No new strategic relationships, metric reframe, or baseline-break

**Full codified framework table:**

| Stage | Beat type | Mgmt narrative | T+24h move | Origin case(s) |
|---|---|---|---|---|
| Stage 2-3 | HIGH-CONCRETE CATEGORY (signed strategic deal + metric baseline-break + leading-indicator reframe) | Bullish | **~+37%** | SNOW Q1 FY27 |
| Stage 2-3 | TREND ACCELERATION (incremental beat + guidance raise) | Bullish | **~+20%** | MDB Q1 FY27 |
| Stage 2-3 | LOW-CONCRETE CATEGORY (new product + co-engineering; no signed deal) | Bullish | **~+10%** | NTAP Q4 FY26 |
| Stage 1-2 (deep discount) | BEAT with intact fundamentals | NEGATIVE — mgmt commoditizing own category | **~-11%** | ESTC Q1 CY26 |
| Stage 3-4 | TREND ACCELERATION | Bullish | **~-2%** (Stage premium dominates) | MRVL Q1 FY27 |
| **Stage 3-4** | **CATEGORY EVENT (multi-year framework intro + revenue baseline-break + balance-sheet transformation)** | **Bullish** | **~+29-36%** | **HPE Q2 FY26 (N=2 codification)** |

**Key refinement from N=2 (HPE):** A CATEGORY EVENT can overcome Stage 3-4 positioning headwinds. The threshold for Stage 3-4 CATEGORY override appears to be: multi-year guidance framework introduction OR revenue growth acceleration >20pp YoY OR balance-sheet transformation >10% of market cap. When any of these materialize, expect +25-40% reactions at Stage 3-4 (not +1-5% TREND suppression).

**Calibration adjustment:** When running PREDICT on any Stage 3-4 name, explicitly classify the expected print as CATEGORY vs TREND before assigning the stock-reaction band. If CATEGORY markers are present, override Stage 3-4 suppression and use +20-40% stock-reaction band instead of +1-5%.

**Generalizable lesson:** Stage 3-4 stock-reaction discount is CATEGORY-EVENT-CONDITIONAL, not stage-only. Principle #31 narrative-stage modifier now requires CATEGORY-vs-TREND axis as additional input for stock-reaction prediction.

**Falsification criterion (updated at N=2):** if next 2+ Stage 3-4 names with CATEGORY EVENT setup produce moves in the +1-5% range (Stage 3-4 suppression dominates despite CATEGORY markers), the CATEGORY override at Stage 3-4 was over-fit to HPE single cross-day N=2 data point. Current N=2 is sufficient for codification per principle #32 but insufficient for high confidence — active monitoring required.

**Origin cases:** SNOW Q1 FY27 (N=1 origin, Stage 2-3), MRVL Q1 FY27 (Stage 3-4 TREND baseline), MDB/NTAP/ESTC (same-day cohort 2026-05-28), HPE Q2 FY26 (N=2, Stage 3-4 CATEGORY codification).

---

### L13 — When predicting management commentary upgrades, model the VINTAGE choice as a separate probability distribution

**Origin:** MRVL Q1 FY27 GRADE 2026-05-28. Predicted 60% prob FY27 custom Si floor raised above >20%. Actual: FY27 maintained at ">20%"; FY28 NEW commentary "more than double" (>100% YoY). Direction right (bullish upgrade); vintage wrong (FY28 not FY27). Trainium3 ramps Q2-Q4 FY27 → meaningful FY28 not FY27 P&L impact — mgmt put the bullish reveal where the ramp materially impacts revenue.

**Generalizable lesson:** Management commentary upgrades come at a SPECIFIC vintage. The vintage is a function of (a) when the underlying ramp materially impacts revenue, (b) mgmt's preference to give themselves room not to under-deliver near-term. Both factors typically favor the later-vintage reveal.

**Calibration adjustment:** When predicting management commentary upgrades, replace binary "will they upgrade or not" with vintage-distribution: P(current FY raise), P(next FY raise), P(both), P(neither). Sum to 100%. Apply ramp-timing logic to weight vintages — if structural driver impacts year N+1 P&L > year N P&L, weight P(next FY raise) higher than P(current FY raise).

**Validation criterion:** Apply to next 2+ predictions involving management multi-year commentary. If vintage-distribution framing produces calibrated calls, L13 confirmed.

**HPE Q2 FY26 validation note (2026-06-02):** L13 vintage-distribution was applied to HPE Target 5. Predicted FY26 raise (45% probability) AND positive FY27 commentary (50% probability). Both materialized, and at the most concrete form (specific FY27 growth framework). L13 validation criteria met across both MRVL (N=1) and HPE (N=2) applications. L13 confirmed as codified.

---

### L12 — When stating YoY growth %, ALWAYS verify the year-ago base independently

**Origin:** MRVL Q1 FY27 GRADE 2026-05-28. Predicted datacenter +42-47% YoY based on sequential math (Q4 FY26 $1.65B + 10% sequential = $1.815B). Actual +27% YoY ($1.833B). The DOLLAR forecast was right within 1%; the YoY % framing was wrong because I never checked the Q1 FY26 base (~$1.443B implied) — I implicitly conflated sequential math with YoY math.

**Generalizable lesson:** Sequential growth and YoY growth are structurally DIFFERENT metrics. When stating a YoY %, pull the year-ago base from the company 10-Q/10-K and compute YoY = (current - year_ago) / year_ago. NEVER infer YoY from sequential without the year-ago anchor.

**Calibration adjustment:** Any future prediction containing a YoY % must cite the year-ago base inline. This is a REASONING-layer discipline.

**Falsification:** if next 3+ predictions stating YoY % do so with explicit year-ago citation AND remain calibrated, L12 has become habit.

---

### L11 — When revenue beat is small (<1% above consensus), EPS magnification flow-through is muted, not amplified

**Origin:** MRVL Q1 FY27 GRADE 2026-05-28. L6 said apply MORE sandbag-reduction at EPS line than revenue in contracted-demand. Predicted $0.82 EPS; actual $0.80 (in line with consensus high end). L6 over-applied because revenue beat itself was small (~0.3% above consensus) → multi-layer flow-through (revenue × margin × tax × shares) did NOT compound the way L6 assumed.

**Generalizable lesson:** L6's EPS-amplification calibration applies when revenue beat is >1-2% above consensus. When revenue beat is small (<1%), apply NO EPS-line amplification beyond bottoms-up — let the EPS forecast track the revenue forecast 1-to-1.

**Calibration adjustment:** L6 is now CONDITIONAL — apply only when revenue forecast itself exceeds consensus by >1%. Otherwise revert to bottoms-up EPS without amplification overlay.

**Falsification:** if next 2+ EPS predictions in contracted-demand environments show consistent EPS magnification beyond revenue magnitude regardless of revenue beat size, L11 was over-fit to MRVL single data point.

---

### L10 — When management RE-FRAMES metrics, infer from the TYPE of metric chosen

**Origin:** SNOW Q1 FY27 GRADE 2026-05-27. Mgmt did NOT re-quantify Cortex AI dollar run rate (Q4 FY26 disclosed $100M; pricing cut April 2026 created optics dilemma per my prediction). I predicted 30% probability of "bear scenario — mgmt avoids dollar number due to weakness." MECHANISM matched (no $ disclosed) but IMPLICATION was opposite — mgmt confidently shifted to volume metrics: 13,600+ AI accounts (+49% QoQ from ~9,100), Snowflake Intelligence doubled QoQ, Cortex Code 7,100+ accounts. This was a BULLISH reframe, not defensive.

**Generalizable lesson:** When mgmt drops a previously-cited dollar metric and shifts to a new metric type, infer from the TYPE:
- **Leading indicators** (account counts, usage growth, engagement, accounts using feature X) = signal of CONFIDENCE; mgmt is showing fast adoption ahead of revenue translation
- **Lagging indicators** (efficiency ratios, utilization, retention plateaus) = signal of HEDGING; mgmt highlighting stability rather than growth
- **Engagement-quality indicators** (paid users, active users, conversion) = signal of QUALITY confidence; mgmt showing user base is sticky

**Calibration adjustment:** Flip the default. When mgmt SHIFTS to leading indicators after dropping a $ metric, treat as MORE bullish than the missing dollar number suggests, not less. My SNOW base-case predicted "optics dilemma" framing was systematically too bearish on this dimension.

**Validation criterion:** Apply to next 3 earnings predictions where mgmt drops a dollar metric. If pattern holds (leading-indicator reframes = bullish; lagging-indicator reframes = bearish), L10 is confirmed.

---

### L9 — Elastic demand response to pricing cuts can outpace ASP compression WITHIN the same quarter for AI/SaaS products with PMF

**Origin:** SNOW Q1 FY27 GRADE 2026-05-27. NRR inflected UP to 126% from stable 125% 4-quarter baseline DESPITE the 70% Cortex AI pricing cut in April 2026. My model predicted slight dip to 124% based on 2-3 quarter elasticity lag assumption. **Actual: volume compensation happened WITHIN the same quarter.** Cohort evidence: 13,600+ AI accounts (+49% QoQ), Intelligence doubled QoQ, Cortex Code 7,100+ accounts.

**Mechanism:** When pricing cuts trigger elastic demand response in a product with strong PMF (queued demand previously capacity-constrained at higher ASP), the volume tailwind can compensate ASP compression IMMEDIATELY. Traditional cyclical-product elasticity-lag models (MU/SNDK NAND-cycle analog: 2-4 quarter response) DO NOT generalize to AI/SaaS PMF products which can respond in 1 quarter.

**Generalizable lesson:** For future predictions involving pricing cuts on AI/SaaS products with PMF signals, assume volume response in 1-2 quarters not 2-3. Apply specifically when:
- Product was previously CAPACITY-CONSTRAINED at higher ASP (queued demand)
- Pricing cut UNBLOCKS that queued demand
- Existing customers can IMMEDIATELY consume more (consumption-based pricing, not seat-licensed)

**Calibration adjustment:** Does NOT apply to commodity-elastic markets (NAND/DRAM/memory cycles) where traditional 2-4 quarter lag holds.

**Falsification criterion:** If next 2+ AI/SaaS pricing-cut events show volume response taking 2-3 quarters per traditional model, L9 was over-applied to this single SNOW case.

---

### L8 — Structural-acceleration thesis on AI cooling CONFIRMED (positive lesson)

**Origin:** MOD Q4 FY26 GRADE 2026-05-27. DC sub-segment +158% YoY at Modine validates the bypass-route framework — from chip-cooling (Vertiv/Asetek/LiquidStack territory) to facility-cooling (Modine + Vertiv) per the original thesis. The $4B Airedale deal disclosed 2026-05-26 is now PROVEN as forward-bookings visibility, not just announcement noise. Multi-quarter beat-and-raise streak confirms cyclical-to-structural transition per principle #26.

**Reasoning success (not error):** The original MOD PREDICT correctly identified: (a) supply-chain-reality test passed for MOD's actual position in AI DC cooling supply chain (facility-layer, not chip-layer); (b) $4B Airedale deal as multi-quarter forward-bookings visibility (per L4); (c) FY27 DC guide >$1.5B inference. All landed.

**Generalizable lesson:** Cyclical-to-structural transitions per principle #26 produce DC-style sub-segment growth rates (>100% YoY) when the structural-rerating moment arrives. Watch for analogous patterns: SNDK datacenter SSD +233% pattern; HYNIX HBM stack-height crowding-out; LSCC server platform control +85% YoY FY2025; MRVL custom Si Trainium ramp. The signature of structural transition: sub-segment growth materially exceeds total-company growth + accelerates over multiple quarters.

**Calibration adjustment:** Continue applying principle #26's binding-constraint test to all candidates surfacing >100% YoY sub-segment growth signals. When confirmed, the multiple deserves chokepoint comp-set treatment per principle #30, not cyclical comp-set treatment.

---

### L7 — Management margin-recovery guides are HOPES, not contracts

**Origin:** MOD Q4 FY26 GRADE 2026-05-27. Modine's Climate Solutions adj EBITDA margin guide of "+200bps recovery from Q3's 17.9%" delivered only +80bps (to 18.7%). Driver: capacity-ramp friction + tariffs + weather-related labor/overtime costs suppressed CS gross margin -510bps YoY even as $$ adj EBITDA grew +63% YoY. These friction factors were FORESEEABLE — they were already happening in Q3 — but the recovery framework didn't model them.

**Reasoning error:** Accepted mgmt's "+200bps recovery" guide at face value. Same pattern as B17 (user-deference bias) but applied to management commentary rather than user input. Mgmt's margin-execution guides are systematically biased toward their plan, not the friction reality. The capacity-expansion phase introduces costs that mgmt's recovery narrative under-models.

**Generalizable lesson:** When mgmt gives a margin-recovery guide that depends on internal execution (capacity absorption, tariff pass-through, mix shift, supply-chain normalization), apply a 30-50% haircut to the guided recovery MAGNITUDE. Direction is usually right; magnitude is usually optimistic. Apply principle #14 (question framings) to mgmt guides, not just own framings.

**Distinction from L4:** L4 says mgmt UNDER-promises on top-line in contracted-demand environments. L7 says mgmt OVER-promises on margin-execution recovery. Both can be true simultaneously — under-promise on demand visibility AND over-promise on execution friction recovery.

**Calibration adjustment:** For future predictions involving mgmt margin-recovery guides, apply 30-50% haircut to the guided magnitude. Verify by tracking next 3 predictions where mgmt gives a specific bps recovery guide — if pattern holds, L7 is confirmed.

---

### L6 — L4's smaller-sandbag-adjustment applies MORE aggressively at the EPS/margin line than at the revenue line

**Origin:** Same pattern recurring across two graded predictions:
- NVDA Q1 FY27 GRADE 2026-05-20: Q2 guide undercalled by $2.5B (predicted $88.5B vs actual $91.0B). L4 codified: smaller sandbag in contracted-demand environments.
- MOD Q4 FY26 GRADE 2026-05-27: adj EPS undercalled by $0.13-0.19 (predicted $1.52-1.58 vs actual $1.71). Revenue magnitude undercalled by ~70bps vs consensus. EPS magnitude undercalled by ~590bps vs consensus.

**Reasoning error:** Applied L4 sandbag-adjustment to revenue but failed to apply consistently to EPS. Revenue line is constrained by guide framework + bottoms-up unit economics; EPS has compounding flow-through from revenue beat + margin expansion + tax/interest mix. The standard sandbag heuristic discounts EPS magnitude even more aggressively than revenue magnitude — because each layer of conservatism (revenue + margin + tax + share count) stacks multiplicatively, not additively.

**Generalizable lesson:** In contracted-demand environments (currently: NVDA, AVGO, TSM, NBIS, HYNIX, MU, MRVL custom Si, MOD, possibly LSCC, SNDK), apply L4 smaller-sandbag-haircut MORE aggressively at the EPS line than at the revenue line. Specifically: ~2% sandbag haircut on revenue, ~3-5% reduced sandbag haircut on EPS (i.e., expect more EPS upside surprise relative to consensus than revenue upside surprise).

**Validation criterion:** if next 3+ predictions in contracted-demand environments show direction-right + magnitude-undercall on EPS, L6 is confirmed. If EPS predictions become consistently too aggressive after applying L6, L6 needs revision.

**Important interaction with L15 (added 2026-06-02):** L6 EPS amplification applies to OPERATING EPS upside. When a non-operating EPS event (divestiture proceeds, acquisition gain) is present, it must be modeled SEPARATELY per L15. Do not attempt to amplify non-operating EPS using L6 — the mechanism is different (balance sheet, not income statement leverage).

---

### L5 — Check the supply-chain reality before classifying a name as "non-AI"
**Origin:** TE classification GRADE 2026-05-26. The earlier US duration-of-relevance agent classified TE as "this name should NOT be in an AI-sector investing universe" based on TE's marketed business label (solar/battery manufacturer). I accepted at face value. Then Citrini Research "Semis Memo" 2026-05-12 surfaced the Supply Chain Inheritance thesis — citing NVDA's own May 2025 technical blog crediting 800V DC rack architecture to "the electric vehicle and solar industries." The physical supply chain TE participates in OVERLAPS with AI data center infrastructure. The "NOT AI" classification was a surface-level call that missed the underlying supply-chain reality.

**Reasoning error:** Label-anchoring at the AI-relevance classification step. The agent and I both anchored on the company's marketed end-product label without applying a supply-chain-reality test.

**Generalizable lesson:** Before classifying ANY company as "non-AI" or out-of-AI-universe, run the supply-chain-reality test: (1) identify the underlying physical supply chain the company participates in (not the marketed end-product label); (2) map that supply chain to AI infrastructure layers; (3) check primary-source evidence (chip-vendor engineering blogs, hyperscaler procurement disclosures) for explicit attribution; (4) if ANY layer overlaps, classification ≠ "NOT AI." When evidence supports reclassification, UPDATE THE FILE — don't punt to user via "flag for review."

**Calibration adjustment:** Any future "non-AI" classification must explicitly cite the supply-chain-reality test result, not just the marketed label. If only the label was checked, the classification is provisional and incomplete. See principle #28 + B29 in `meta/biases-watchlist.md`.

**Meta-lesson about accepting agent verdicts:** When I receive a classification from a subagent, the discipline is principle #14 (question own framings) applied to the subagent — not face-value acceptance. The TE miss compounded because I accepted "NOT AI" without independent verification.

---

### L4 — In a multi-year-contracted-demand environment, historical guide-sandbag heuristics over-discount
**Origin:** NVDA Q1 FY27 GRADE 2026-05-20. My prediction called Q2 guide midpoint $88.5B by applying a 4-5% sandbag haircut to an internal-expectation model of $92.7B. Actual guide: $91.0B ± 2% (per [NVIDIA 8-K via StockTitan](https://www.stocktitan.net/sec-filings/NVDA/8-k-nvidia-corp-reports-material-event-56086a88bbb4.html)). My internal-expectation model was nearly right ($92.7B vs $91B = within $1.7B); the sandbag haircut was the error.

**Generalizable lesson:** Management guide-sandbag patterns reflect a particular demand-visibility regime. When the company has FORWARD-CONTRACTED visibility (multi-year customer commits, capacity-constrained backlog like the current OpenAI Guaranteed Capacity + hyperscaler 2026 capex re-rate environment), they guide CLOSER to internal expectation. Historical 4-5% sandbag over-discounts.

**Calibration adjustment:** For predictions on companies in multi-year-contracted-demand environments (currently: NVDA, AVGO, TSM, NBIS, SK Hynix, MU), apply smaller sandbag haircut (~2% instead of 4-5%). For companies in shorter-visibility regimes, original sandbag still applies. Mark this in `meta/methodology.md` when running PREDICT.

**Secondary lesson from same event:** I underweighted Q2 ≥ $90B whisper at 30% probability when it should have been ~50%. The pattern is consistent — my probabilities on upside outcomes were systematically too low because the historical sandbag pattern anchored my model. Calibration adjustment: in capacity-constrained environments, the "whisper exceeded" outcomes are more probable than baseline sell-side cycle would suggest.

**Linked:** L1 (bottoms-up bias still applies — bottoms-up build of $92.7B was correct; the sandbag overlay was the bias).

---

### L3 — Don't take partial profits on an intact bottleneck thesis
**Origin:** User feedback, 2026-05-20. User identified Bloom Energy (BE) early as a bypass-route name for the power constraint (time-to-power thesis). Bought, took ~+30% profit, exited. Stock then continued running and just reported earnings — user reports it was up double digits two trading days in a row. The thesis (Bloom solves the time-to-power problem for hyperscalers needing power in months not years) was never falsified — they sold on the emotional resolution of position uncertainty, not on analysis. Same root cause as L2 (emotional exit on intact thesis), different trigger (partial profit rather than macro fear).

**Generalizable lesson:** When the thesis is "this company is solving a binding constraint that consensus has not yet recognized," the re-rating runway is the full move from "ignored" to "consensus-priced." Selling at +30% on a name in the first inning of that re-rating is leaving the asymmetric leg on the table. The decision to sell must be falsifier-based, not magnitude-of-gain-based.

**Calibration adjustment:** For any name held on a bypass-route thesis, the rebalance rule is: trim to target sizing if the position drifts >2× target due to appreciation. Do NOT exit because of percentage gain alone. Exit only when (a) a written falsifier fires, OR (b) the bottleneck has clearly resolved and the bypass-route is no longer the edge.

**The harder rule:** Profit isn't the signal. Falsification is the signal. If a name has +30% on you and the thesis is intact, that's evidence the thesis is WORKING, not evidence to leave.

**Linked bias:** B9 (emotional sell) and B10 (P/E anchoring on emerging-demand stories).

---

### L2 — Operate ONLY on thesis falsification, never on macro noise
**Origin:** User feedback, 2026-05-20. User held a storage thesis (Sandisk, Kioxia, Seagate) built Dec 2025/Jan 2026 on inference-demand grounds. Sold during a short-term S&P pullback driven by Venezuela macro headwind. Thesis was intact. No falsifier had fired. The sell was emotional risk-management, not analytical discipline.

**Generalizable lesson:** A thesis lives until a written falsifier fires. Wars, geopolitical events, market dumps, recession fears — none of these are sell signals unless the thesis was built on the absence of those events. Macro headwinds compress prices; they don't invalidate theses. The two are different signals and must be treated differently.

**Calibration adjustment:** Before any sell recommendation, the FIRST question is: "Which specific written falsifier has fired?" If the answer is "none," the recommendation is no-action. Volatility tolerance and position-sizing handle macro stress; selling does not.

**The harder rule:** Don't validate emotional decisions retroactively. If a sell happens and the stock later goes up or down, that doesn't make the decision right or wrong — only whether a falsifier actually fired does.

**Linked bias:** B9 in `meta/biases-watchlist.md`.

---

### L1 — Bottoms-up before outside view
**Origin:** NVDA Q1 FY27 prediction process, 2026-05-20 (pre-grading)
**Context:** Two predictions were drafted for NVDA Q1 FY27 — V1 anchored on the cluster of bullish sell-side estimates (MS $79.26B, GS $80.05B) and split the difference at $80.6B. V2 was rebuilt bottoms-up using CoWoS-L capacity × unit yield × ASP mix and arrived at $82B. The V1 process added ~zero edge over consensus because the inputs WERE the consensus.

**Generalizable lesson:** When making a prediction, build the model from supply-side / unit economics first. ONLY then compare to sell-side. If you can't derive the number without seeing analyst estimates, you don't have edge — you have an opinion of opinions.

**Calibration adjustment:** Every PREDICT entry must include a "bottoms-up build" section that precedes any consensus comparison. The arithmetic must be visible — no skipping to the punchline.

**Linked bias:** B1 in `meta/biases-watchlist.md`

---

## How to use this file

1. Read all entries before starting a PREDICT workflow.
2. Identify which lessons apply to the specific prediction at hand.
3. In your prediction document, explicitly note: "Lessons applied: L1, Lx" — this forces conscious recall.
4. After the event resolves, run GRADE and append new lesson if the analysis taught something generalizable.

## Lesson quality bar

A lesson is worth adding if:
- It identifies a SPECIFIC reasoning step that went wrong
- The fix is ACTIONABLE (something to do/not do, not "be smarter")
- The lesson is GENERALIZABLE (will apply to future predictions, not just this one)
- It's not already covered by an existing lesson

If a lesson is just a restatement of "I should have predicted X instead of Y" without a process insight → don't add it. The lesson must be about HOW to think, not WHAT to think.
