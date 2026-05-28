# Lessons — Mandatory Pre-Read Before Any New Prediction

**Last updated:** 2026-05-27

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

### L14 (CANDIDATE — NOT codified at N=1; awaiting N=2 per principle #32 premortem)

**Pattern:** Distinguish CATEGORY EVENTS from TREND EVENTS in earnings-driven stock reactions. Expect 50-100% larger T+0-to-T+48h moves on CATEGORY events vs TREND events at the same narrative stage.

**Markers of CATEGORY EVENT:**
- New strategic relationship disclosed (SNOW Q1 FY27: $6B AWS pact)
- Baseline-break in previously-stable metric (SNOW: NRR baseline 125% stable for 4 quarters → 126% break)
- Management metric reframe (SNOW: dropped Cortex $ run rate → shifted to volume metrics per L10)
- New customer-category disclosure or TAM expansion

**Markers of TREND EVENT:**
- Incremental beat-and-raise within existing framework
- Outlook upgrade (extending existing trend)
- No new strategic relationships, metric reframe, or baseline-break

**Origin data (N=1, plus same-day cohort 2026-05-28):**
- SNOW Q1 FY27 (Stage 2-3 + HIGH-CONCRETE CATEGORY EVENT: signed $6B AWS pact + NRR baseline-break + L10 reframe) → +37.65% T+24h per `2026-05-27-SNOW-Q1FY27-GRADE.md` Stock-Reaction section
- MRVL Q1 FY27 (Stage 3-4 + TREND ACCELERATION) → -1.96% pre-market faded from +5.07% AH per `2026-05-27-MRVL-Q1FY27-GRADE.md`
- **MDB Q1 FY27 (Stage 2-3 + TREND ACCELERATION with some category elements)** → ~+20% post-print per [Gurufocus T3](https://www.gurufocus.com/news/8889811/mongodb-mdb-reports-strong-q1-results-shares-surge-over-20). Revenue $687.6M (+25% YoY) per [SEC 8-K T1](https://www.sec.gov/Archives/edgar/data/0001441816/000162828026038798/mdb-043026xex991xrelease.htm); EPS $1.32 vs $1.18 consensus; FY27 raised to $2.86B-$2.90B (16-18% YoY); Atlas +29% YoY. Vector search story prominent + Voyage AI integration ongoing — but no NEW high-concrete category event (no new strategic deal of $6B AWS pact magnitude).
- **NTAP Q4 FY26 (Stage 2-3 + LOW-CONCRETE CATEGORY EVENT)** → ~+10% per [Gurufocus T3](https://www.gurufocus.com/news/8889514/netapp-ntap-surges-10-following-strong-q4-earnings-report). Revenue $1.95B (+12% YoY) per [SEC 8-K T1](https://www.sec.gov/Archives/edgar/data/0001002047/000119312526245196/ntap-ex99_1.htm); All-flash array $1.2B (+18% YoY). NEW: NVIDIA co-engineered AI Data Engine + EF50/EF80 AI-focused hardware launches — CATEGORY markers but press-release-grade not signed-contract-grade.
- **ESTC Q1 CY26 (Stage 1-2 deeply discounted + BEAT + MGMT-NARRATIVE-SUPPRESSION)** → -10.9% per [FinancialContent T3](https://markets.financialcontent.com/stocks/article/stockstory-2026-5-28-elastics-nyseestc-q1-cy2026-sales-beat-estimates-but-stock-drops-109). Revenue $450.7M (+16% YoY) beat expectations. Stock down 71% from Nov-2021 ATH $186.78. CEO publicly framed vector DB as "a feature, never a business" — REVERSE-CATEGORY mgmt signal commoditizing own AI story.

**Refined framework (post 4-data-point cohort 2026-05-28):**

| Stage | Beat type | Mgmt narrative | T+24h move | Origin case |
|---|---|---|---|---|
| Stage 2-3 | HIGH-CONCRETE CATEGORY (signed strategic deal + metric baseline-break + leading-indicator reframe) | Bullish, embraces story | **~+37%** | SNOW |
| Stage 2-3 | TREND ACCELERATION (incremental beat + guidance raise + no new strategic relationship) | Bullish, embraces story | **~+20%** | MDB |
| Stage 2-3 | LOW-CONCRETE CATEGORY (new product launch + co-engineering partnership announcement; no signed multi-year deal) | Bullish, embraces story | **~+10%** | NTAP |
| Stage 1-2 (deep discount) | BEAT with intact fundamentals | **NEGATIVE — mgmt commoditizing own category** | **~-11%** (stock drops on beat) | ESTC |
| Stage 3-4 | TREND ACCELERATION | Bullish | **~-2%** (Stage premium dominates) | MRVL |

**Generalizable lesson (if codified at N=2):** principle #31 narrative-stage modifier needs CATEGORY-vs-TREND axis as additional input. Stage classification alone under-predicts magnitude when CATEGORY EVENT compounds with stage positioning.

**Calibration adjustment:** when running PREDICT on Stage 2-3 names with multi-layered positive setup (e.g., MDB tonight if mgmt discloses new strategic deal + metric reframe + customer-category expansion), apply L14 candidate to expect explosive T+0-to-T+48h move; size sandbag-haircut lower than standard Stage 2-3 calibration.

**Falsification criterion:** if next 2+ Stage 2-3 names with CATEGORY EVENT setup produce moves within the standard Stage 2-3 expected range (NOT 50-100% larger), L14 was over-fit to SNOW single data point — retire.

**Re-eval trigger:** next monthly audit cycle 2026-06-24 OR first eligible Stage 2-3 + CATEGORY EVENT case for N=2 validation.

### L13 — When predicting management commentary upgrades, model the VINTAGE choice as a separate probability distribution

**Origin:** MRVL Q1 FY27 GRADE 2026-05-28. Predicted 60% prob FY27 custom Si floor raised above >20%. Actual: FY27 maintained at ">20%"; FY28 NEW commentary "more than double" (>100% YoY). Direction right (bullish upgrade); vintage wrong (FY28 not FY27). Trainium3 ramps Q2-Q4 FY27 → meaningful FY28 not FY27 P&L impact — mgmt put the bullish reveal where the ramp materially impacts revenue.

**Generalizable lesson:** Management commentary upgrades come at a SPECIFIC vintage. The vintage is a function of (a) when the underlying ramp materially impacts revenue, (b) mgmt's preference to give themselves room not to under-deliver near-term. Both factors typically favor the later-vintage reveal.

**Calibration adjustment:** When predicting management commentary upgrades, replace binary "will they upgrade or not" with vintage-distribution: P(current FY raise), P(next FY raise), P(both), P(neither). Sum to 100%. Apply ramp-timing logic to weight vintages — if structural driver impacts year N+1 P&L > year N P&L, weight P(next FY raise) higher than P(current FY raise).

**Validation criterion:** Apply to next 2+ predictions involving management multi-year commentary. If vintage-distribution framing produces calibrated calls, L13 confirmed.

### L12 — When stating YoY growth %, ALWAYS verify the year-ago base independently

**Origin:** MRVL Q1 FY27 GRADE 2026-05-28. Predicted datacenter +42-47% YoY based on sequential math (Q4 FY26 $1.65B + 10% sequential = $1.815B). Actual +27% YoY ($1.833B). The DOLLAR forecast was right within 1%; the YoY % framing was wrong because I never checked the Q1 FY26 base (~$1.443B implied) — I implicitly conflated sequential math with YoY math.

**Generalizable lesson:** Sequential growth and YoY growth are structurally DIFFERENT metrics. When stating a YoY %, pull the year-ago base from the company 10-Q/10-K and compute YoY = (current - year_ago) / year_ago. NEVER infer YoY from sequential without the year-ago anchor.

**Calibration adjustment:** Any future prediction containing a YoY % must cite the year-ago base inline. This is a REASONING-layer discipline.

**Falsification:** if next 3+ predictions stating YoY % do so with explicit year-ago citation AND remain calibrated, L12 has become habit.

### L11 — When revenue beat is small (<1% above consensus), EPS magnification flow-through is muted, not amplified

**Origin:** MRVL Q1 FY27 GRADE 2026-05-28. L6 said apply MORE sandbag-reduction at EPS line than revenue in contracted-demand. Predicted $0.82 EPS; actual $0.80 (in line with consensus high end). L6 over-applied because revenue beat itself was small (~0.3% above consensus) → multi-layer flow-through (revenue × margin × tax × shares) did NOT compound the way L6 assumed.

**Generalizable lesson:** L6's EPS-amplification calibration applies when revenue beat is >1-2% above consensus. When revenue beat is small (<1%), apply NO EPS-line amplification beyond bottoms-up — let the EPS forecast track the revenue forecast 1-to-1.

**Calibration adjustment:** L6 is now CONDITIONAL — apply only when revenue forecast itself exceeds consensus by >1%. Otherwise revert to bottoms-up EPS without amplification overlay.

**Falsification:** if next 2+ EPS predictions in contracted-demand environments show consistent EPS magnification beyond revenue magnitude regardless of revenue beat size, L11 was over-fit to MRVL single data point.

### L10 — When management RE-FRAMES metrics, infer from the TYPE of metric chosen

**Origin:** SNOW Q1 FY27 GRADE 2026-05-27. Mgmt did NOT re-quantify Cortex AI dollar run rate (Q4 FY26 disclosed $100M; pricing cut April 2026 created optics dilemma per my prediction). I predicted 30% probability of "bear scenario — mgmt avoids dollar number due to weakness." MECHANISM matched (no $ disclosed) but IMPLICATION was opposite — mgmt confidently shifted to volume metrics: 13,600+ AI accounts (+49% QoQ from ~9,100), Snowflake Intelligence doubled QoQ, Cortex Code 7,100+ accounts. This was a BULLISH reframe, not defensive.

**Generalizable lesson:** When mgmt drops a previously-cited dollar metric and shifts to a new metric type, infer from the TYPE:
- **Leading indicators** (account counts, usage growth, engagement, accounts using feature X) = signal of CONFIDENCE; mgmt is showing fast adoption ahead of revenue translation
- **Lagging indicators** (efficiency ratios, utilization, retention plateaus) = signal of HEDGING; mgmt highlighting stability rather than growth
- **Engagement-quality indicators** (paid users, active users, conversion) = signal of QUALITY confidence; mgmt showing user base is sticky

**Calibration adjustment:** Flip the default. When mgmt SHIFTS to leading indicators after dropping a $ metric, treat as MORE bullish than the missing dollar number suggests, not less. My SNOW base-case predicted "optics dilemma" framing was systematically too bearish on this dimension.

**Validation criterion:** Apply to next 3 earnings predictions where mgmt drops a dollar metric. If pattern holds (leading-indicator reframes = bullish; lagging-indicator reframes = bearish), L10 is confirmed.

### L9 — Elastic demand response to pricing cuts can outpace ASP compression WITHIN the same quarter for AI/SaaS products with PMF

**Origin:** SNOW Q1 FY27 GRADE 2026-05-27. NRR inflected UP to 126% from stable 125% 4-quarter baseline DESPITE the 70% Cortex AI pricing cut in April 2026. My model predicted slight dip to 124% based on 2-3 quarter elasticity lag assumption. **Actual: volume compensation happened WITHIN the same quarter.** Cohort evidence: 13,600+ AI accounts (+49% QoQ), Intelligence doubled QoQ, Cortex Code 7,100+ accounts.

**Mechanism:** When pricing cuts trigger elastic demand response in a product with strong PMF (queued demand previously capacity-constrained at higher ASP), the volume tailwind can compensate ASP compression IMMEDIATELY. Traditional cyclical-product elasticity-lag models (MU/SNDK NAND-cycle analog: 2-4 quarter response) DO NOT generalize to AI/SaaS PMF products which can respond in 1 quarter.

**Generalizable lesson:** For future predictions involving pricing cuts on AI/SaaS products with PMF signals, assume volume response in 1-2 quarters not 2-3. Apply specifically when:
- Product was previously CAPACITY-CONSTRAINED at higher ASP (queued demand)
- Pricing cut UNBLOCKS that queued demand
- Existing customers can IMMEDIATELY consume more (consumption-based pricing, not seat-licensed)

**Calibration adjustment:** Does NOT apply to commodity-elastic markets (NAND/DRAM/memory cycles) where traditional 2-4 quarter lag holds.

**Falsification criterion:** If next 2+ AI/SaaS pricing-cut events show volume response taking 2-3 quarters per traditional model, L9 was over-applied to this single SNOW case.

### L8 — Structural-acceleration thesis on AI cooling CONFIRMED (positive lesson)

**Origin:** MOD Q4 FY26 GRADE 2026-05-27. DC sub-segment +158% YoY at Modine validates the bypass-route framework — from chip-cooling (Vertiv/Asetek/LiquidStack territory) to facility-cooling (Modine + Vertiv) per the original thesis. The $4B Airedale deal disclosed 2026-05-26 is now PROVEN as forward-bookings visibility, not just announcement noise. Multi-quarter beat-and-raise streak confirms cyclical-to-structural transition per principle #26.

**Reasoning success (not error):** The original MOD PREDICT correctly identified: (a) supply-chain-reality test passed for MOD's actual position in AI DC cooling supply chain (facility-layer, not chip-layer); (b) $4B Airedale deal as multi-quarter forward-bookings visibility (per L4); (c) FY27 DC guide >$1.5B inference. All landed.

**Generalizable lesson:** Cyclical-to-structural transitions per principle #26 produce DC-style sub-segment growth rates (>100% YoY) when the structural-rerating moment arrives. Watch for analogous patterns: SNDK datacenter SSD +233% pattern; HYNIX HBM stack-height crowding-out; LSCC server platform control +85% YoY FY2025; MRVL custom Si Trainium ramp. The signature of structural transition: sub-segment growth materially exceeds total-company growth + accelerates over multiple quarters.

**Calibration adjustment:** Continue applying principle #26's binding-constraint test to all candidates surfacing >100% YoY sub-segment growth signals. When confirmed, the multiple deserves chokepoint comp-set treatment per principle #30, not cyclical comp-set treatment.

### L7 — Management margin-recovery guides are HOPES, not contracts

**Origin:** MOD Q4 FY26 GRADE 2026-05-27. Modine's Climate Solutions adj EBITDA margin guide of "+200bps recovery from Q3's 17.9%" delivered only +80bps (to 18.7%). Driver: capacity-ramp friction + tariffs + weather-related labor/overtime costs suppressed CS gross margin -510bps YoY even as $$ adj EBITDA grew +63% YoY. These friction factors were FORESEEABLE — they were already happening in Q3 — but the recovery framework didn't model them.

**Reasoning error:** Accepted mgmt's "+200bps recovery" guide at face value. Same pattern as B17 (user-deference bias) but applied to management commentary rather than user input. Mgmt's margin-execution guides are systematically biased toward their plan, not the friction reality. The capacity-expansion phase introduces costs that mgmt's recovery narrative under-models.

**Generalizable lesson:** When mgmt gives a margin-recovery guide that depends on internal execution (capacity absorption, tariff pass-through, mix shift, supply-chain normalization), apply a 30-50% haircut to the guided recovery MAGNITUDE. Direction is usually right; magnitude is usually optimistic. Apply principle #14 (question framings) to mgmt guides, not just own framings.

**Distinction from L4:** L4 says mgmt UNDER-promises on top-line in contracted-demand environments. L7 says mgmt OVER-promises on margin-execution recovery. Both can be true simultaneously — under-promise on demand visibility AND over-promise on execution friction recovery.

**Calibration adjustment:** For future predictions involving mgmt margin-recovery guides, apply 30-50% haircut to the guided magnitude. Verify by tracking next 3 predictions where mgmt gives a specific bps recovery guide — if pattern holds, L7 is confirmed.

### L6 — L4's smaller-sandbag-adjustment applies MORE aggressively at the EPS/margin line than at the revenue line

**Origin:** Same pattern recurring across two graded predictions:
- NVDA Q1 FY27 GRADE 2026-05-20: Q2 guide undercalled by $2.5B (predicted $88.5B vs actual $91.0B). L4 codified: smaller sandbag in contracted-demand environments.
- MOD Q4 FY26 GRADE 2026-05-27: adj EPS undercalled by $0.13-0.19 (predicted $1.52-1.58 vs actual $1.71). Revenue magnitude undercalled by ~70bps vs consensus. EPS magnitude undercalled by ~590bps vs consensus.

**Reasoning error:** Applied L4 sandbag-adjustment to revenue but failed to apply consistently to EPS. Revenue line is constrained by guide framework + bottoms-up unit economics; EPS has compounding flow-through from revenue beat + margin expansion + tax/interest mix. The standard sandbag heuristic discounts EPS magnitude even more aggressively than revenue magnitude — because each layer of conservatism (revenue + margin + tax + share count) stacks multiplicatively, not additively.

**Generalizable lesson:** In contracted-demand environments (currently: NVDA, AVGO, TSM, NBIS, HYNIX, MU, MRVL custom Si, MOD, possibly LSCC, SNDK), apply L4 smaller-sandbag-haircut MORE aggressively at the EPS line than at the revenue line. Specifically: ~2% sandbag haircut on revenue, ~3-5% reduced sandbag haircut on EPS (i.e., expect more EPS upside surprise relative to consensus than revenue upside surprise).

**Validation criterion:** if next 3+ predictions in contracted-demand environments show direction-right + magnitude-undercall on EPS, L6 is confirmed. If EPS predictions become consistently too aggressive after applying L6, L6 needs revision.

### L5 — Check the supply-chain reality before classifying a name as "non-AI"
**Origin:** TE classification GRADE 2026-05-26. The earlier US duration-of-relevance agent classified TE as "this name should NOT be in an AI-sector investing universe" based on TE's marketed business label (solar/battery manufacturer). I accepted at face value. Then Citrini Research "Semis Memo" 2026-05-12 surfaced the Supply Chain Inheritance thesis — citing NVDA's own May 2025 technical blog crediting 800V DC rack architecture to "the electric vehicle and solar industries." The physical supply chain TE participates in OVERLAPS with AI data center infrastructure. The "NOT AI" classification was a surface-level call that missed the underlying supply-chain reality.

**Reasoning error:** Label-anchoring at the AI-relevance classification step. The agent and I both anchored on the company's marketed end-product label without applying a supply-chain-reality test.

**Generalizable lesson:** Before classifying ANY company as "non-AI" or out-of-AI-universe, run the supply-chain-reality test: (1) identify the underlying physical supply chain the company participates in (not the marketed end-product label); (2) map that supply chain to AI infrastructure layers; (3) check primary-source evidence (chip-vendor engineering blogs, hyperscaler procurement disclosures) for explicit attribution; (4) if ANY layer overlaps, classification ≠ "NOT AI." When evidence supports reclassification, UPDATE THE FILE — don't punt to user via "flag for review."

**Calibration adjustment:** Any future "non-AI" classification must explicitly cite the supply-chain-reality test result, not just the marketed label. If only the label was checked, the classification is provisional and incomplete. See principle #28 + B29 in `meta/biases-watchlist.md`.

**Meta-lesson about accepting agent verdicts:** When I receive a classification from a subagent, the discipline is principle #14 (question own framings) applied to the subagent — not face-value acceptance. The TE miss compounded because I accepted "NOT AI" without independent verification.

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
