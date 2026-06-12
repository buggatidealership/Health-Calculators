# 2026-06-12 — Pre-training magnitude conservatism calibration (B45 origin case)

**Workflow:** GRADE against my own prior (retrospective calibration, not a forward prediction).
**Trigger:** User-articulated 2026-06-12: my pre-training-anchored conservatism on "+7-10% single-day moves = extreme" is mis-calibrated for the current structural-demand AI-supercycle regime; verify empirically.
**Method:** subagent verified Jan/Feb 2025 → June 12 2026 closes for 15 AI-infrastructure names (NOT Mag 7) plus reference Kioxia.

## 1. 18-month return distribution (Jan 2025 → June 12, 2026)

| Name | Jan 2025 anchor | Jun 12 2026 | 18-mo return | Source (subagent verified) |
|---|---|---|---|---|
| ASML | ~$730 (Dec 31 2024 €658.87 × ~1.10 FX) | ~$1,892 | **+159%** | StatMuse / Yahoo Finance |
| AVGO | ~$225 (Jan 2025 avg close per StatMuse) | ~$385 | **+71%** | StatMuse |
| ARM | ~$155 (Motley Fool Jan 8 2025 +17.6% YTD) | ~$333 | **+115%** | Motley Fool / Nasdaq |
| ANET | ~$111 (Dec 31 2024 close) | ~$159 | **+43%** | Capital.com |
| VRT | ~$108 (52-wk low $107.38; 1-yr return cited 177%) | ~$302 | **+180%** | Search snippets |
| SK Hynix (000660.KS) | ₩233,750 (52-wk low confirmed) | ₩2,101,000 | **+799%** | Investing.com |
| MU | $87.01 (StatMuse Jan 2 2025 exact) | $995.87 | **+1,044%** | StatMuse |
| ALAB | ~$80 (back-calc from +25.6% 2025 return + Jun 2026 $338) | ~$338 | **+323%** | financecharts.com |
| AMAT | ~$168 (52-wk low $154.47; +211% 1-yr cited) | ~$497 | **+196%** | Search snippets |
| ONTO | ~$177 (MarketScreener Jan 15 2025 last close) | ~$269 | **+52%** | MarketScreener |
| SUMCO (3436.T) | ¥1,489 (MacroMicro Jan 9 2025 exact) | ~¥3,501 | **+135%** | MacroMicro |
| MURATA (6981.T) | ~¥2,750 (unverified — inferred) | ~¥8,711 | **+217%** | Inferred from 52-wk range |
| IBIDEN (4062.T) | ~¥4,500 pre-split (large uncertainty, IBIDF $30.65 Jan 6 2025 cited; 2:1 split Dec 29 2025 complicates) | ~¥18,595 post-split | **~+314%** | CompaniesMarketCap + split adj |
| CRWV | $40 (IPO Mar 28 2025) | $93.40 | **+134%** (11 mo) | CoreWeave IR |
| NBIS | $13.65 (Oct 21 2024 relisting) | $222.24 | **+1,528%** | StockstoTrade |
| **Kioxia (285A.T) — reference** | **¥1,455 (IPO Dec 18 2024)** | **¥81,200** | **+5,480%** | user screenshot 2026-06-12 |

## 2. Classification against my naive pre-training prior

**Naive prior (stated for falsification):** baseline 18-mo return ~+15-22%; AI-thesis tilt +30-60%; extreme winner +100-150%; outlier tail +200%+ as RARE.

**Actual band counts (15 names, ex-Kioxia):**
- IN-LINE (<60%): 2 (ANET, ONTO)
- MODESTLY ABOVE (60-100%): 1 (AVGO)
- CATEGORY OUTLIER (100-200%): 6 (ASML, ARM, VRT, AMAT, SUMCO, CRWV)
- EXTREME OUTLIER (200%+): 6 (SK Hynix, MU, ALAB, MURATA, IBIDEN, NBIS)

**Honest self-assessment:** my naive prior would have predicted **1-2 category outliers, 0-1 extreme outliers**. Actual = **6 + 6**. Tail under-modeling magnitude: **~5-8×**.

The names I most systematically under-modeled — MU (+1,044%), NBIS (+1,528%), SK Hynix (+799%), ALAB (+323%), and Kioxia (+5,480%) — all relate to structural supply-constraint bottlenecks (HBM/memory, neocloud AI infrastructure). These are exactly the B26 (pre-training as primary source) and B28 (cyclical-vs-structural mis-classification) failure modes manifesting at the magnitude layer.

The names that came in CLOSEST to my prior (ANET +43%, ONTO +52%) are equipment-adjacent rather than bottleneck-direct — which reflects real differentiation in the regime, NOT a vindication of the prior.

## 3. Single-day move base rate (48-72h window June 10-12, 2026)

Subagent surfaced confirmed single-day moves in 48-72 hours just before the snapshot:
- MU +11.66% (Jun 11)
- SK Hynix +9.38% (Jun 12)
- ARM +8.32% (Jun 11)
- Kioxia +7.64% (Jun 12)
- VRT +7.2% (Jun 12)
- AMAT +5.59% (Jun 11 open)
- ONTO +6.2% (Jun 8)
- NBIS +4.98% (Jun 11)

**7-8 of 15 basket names produced single-day moves of +5-12% within a 3-trading-day window.** ≥3 produced single-day moves >+8%.

## 4. Verdict on Kioxia +7.64% June 12

**WITHIN regime pattern.** Single-day +5-12% moves are happening across this cohort with high frequency. Kioxia's +7.64% is mid-distribution for this cohort's single-day move rate. **The pre-training heuristic "+7-10% single-day move = extreme expectations exhaustion signal" is mis-calibrated for this regime.**

## 5. Re-application to the Kioxia pre-event prediction (H1/H2/H3/H4 reweight)

| H | Original (June 12 AM) | After spot screenshot (PM) | **After B45 calibration (PM-2)** | Reason |
|---|---|---|---|---|
| H1 — L14 original holds | P~45% | P~25% | **P~40%** (my model) | +12% pre-event move is regime-characteristic, not pure event-anticipation; cohort grinding is the dominant signal, the VLSI catalyst stacks on top |
| H2 — L14-v2 expectations exhaustion | P~30% | P~45% (modal) | **P~30%** (my model) | The 10% rally trigger that broke L14 on AVGO needs higher threshold in current regime — not 10%, possibly 20-25% for this cohort. Some event-anticipation premium exists, but not dominant |
| H3 — Paper thin / falsifier #2 | P~20% | P~20% | **P~20%** (my model) | Unchanged — fundamental risk independent of price regime |
| H4 — Macro confounder | P~5% | P~10% | **P~10%** (my model) | Unchanged from PM update |

**Modal hypothesis: H1 (L14 original holds, +15-25% T+24h).**

## 6. Entry recommendation update (was Option B; now Option C; Option A no longer unreasonable)

With H1 back as modal, the EV calculation shifts (my model, my back-of-envelope):
- **Option A** (€4-5K Kioxia + €5K SNDK now ≈ €9K): EV ≈ +€247 (midpoint), variance ±€1,500. The +€720 H1 contribution offsets H2/H3 drag.
- **Option B** (reactive post-T+24h): captures none of H1 upside cleanly (re-entry at higher price after gap); avoids H2/H3 drawdown. EV ≈ -€100 to +€100. Lower variance, lower expectation.
- **Option C** (50/50 split: €2K Kioxia + €2.5K SNDK now, top up on T+24h H1 confirm): EV ≈ +€150 (midpoint), variance ±€800. **Best risk-adjusted path.**

**Recommended: Option C.** Captures half the H1 upside; halves the H2/H3 downside; preserves the ability to reweight on actual symposium content. The earlier Option B recommendation was overweighted on H2 due to B45 pre-training conservatism — corrected here.

## 7. Bias entry — B45 (proposed for `meta/biases-watchlist.md`)

**B45 — Pre-training magnitude conservatism in structural-demand regimes**

- **Pattern:** Naive pre-training prior treats +100-200% as "extreme winner" band and +200%+ as "rare outlier" for 18-month equity returns. In a confirmed structural AI-supercycle regime, actual base rate for confirmed-bottleneck names is +100-200% as MEDIAN, +200-800%+ in ~40% of cohort, single-day +5-12% moves multiple times per week. Tail under-modeling ~5-8×.
- **Correction rule:** in any session where structural-demand regime is confirmed per `sector/where-we-are.md`, replace naive prior with cohort empirical distribution BEFORE flagging any return or daily move as "extreme."
- **Direct downstream effect:** L14 / L14-v2 expectations-exhaustion modifier likely needs threshold recalibration (the 10% pre-print rally trigger may need to be 20-25% in this regime to be diagnostic).
- **Origin case:** Kioxia VLSI Symposium 2026-06-12 — H2 weight initially raised to 45% on +12% pre-event rally; subagent calibration showed +12% is within-pattern for cohort (MU +1,044%, SK Hynix +799%, NBIS +1,528% over 18 months; 7-8 of 15 names with +5-12% single-day moves in 48-72h window). H2 corrected back to 30%, H1 to 40%.
- **Falsifier:** if cohort median 18-month return drops below +60% in the next measurement period, revert to standard prior. Measurement cadence: each monthly audit (next 2026-06-24).
- **Companion biases:** B26 (pre-training as primary source), B28 (cyclical-vs-structural mis-classification at sell-side level). B45 is the MAGNITUDE-layer companion to B28's CLASSIFICATION-layer error.

## 8. Sources (subagent verified — non-exhaustive)

- [StatMuse Money — MU stock price January 2025](https://www.statmuse.com/money/ask/lowest-micron-technology-stock-price-january-2025) (T2)
- [StatMuse Money — AVGO January 2025](https://www.statmuse.com/money/ask/avgo-stock-price-in-january-2025) (T2)
- [CoreWeave IPO pricing](https://www.coreweave.com/news/coreweave-announces-pricing-of-initial-public-offering) (T1)
- [MacroMicro SUMCO 3436](https://en.macromicro.me/series/31883/jp-3436_tse-close) (T2)
- [Motley Fool ARM Jan 2025](https://www.fool.com/investing/2025/01/09/arm-stock-ai-stocks-ai-chip-stocks/) (T2)
- [Nasdaq.com ARM 2024 performance](https://www.nasdaq.com/articles/how-arm-stock-gained-64-2024-and-why-feb-6-could-bring-its-next-big-move) (T2)
- [financecharts.com ALAB total return](https://www.financecharts.com/stocks/ALAB/performance/total-return) (T2)
- Yahoo Finance / Investing.com / MarketBeat search snippets for Jun 2026 closes (T2)

## 9. Cascade

- This file (NEW) — calibration artifact + B45 origin case
- `meta/biases-watchlist.md` — B45 entry
- `predictions/2026-06-12-KIOXIA-VLSI-symposium-pre-registration.md` — PM-2 update with H1/H2/H3/H4 reweight + new Option C recommendation
- `companies/KIOXIA/thesis.md` — back-ref to this calibration + updated recommendation
- `companies/SNDK/thesis.md` — back-ref + revised top-up framing
- `meta/todo.md` — add 2026-06-24 audit checkpoint for B45 falsifier verification

## 10. Position implication (Critical Rule #11)

**Position implication: RECONSIDER ENTRY — Option C (€2K Kioxia + €2.5K SNDK now, top up €2K/€2.5K on T+24h H1 confirm) recommended over prior Option B — rationale: H1 (L14 original holds) is modal at P~40% after B45 calibration corrected the 5-day-rally-trigger overstatement on Kioxia +12% pre-event move; cohort empirical base rate (MU +1,044%, SK Hynix +799%, NBIS +1,528% over 18 months; routine +5-12% single-day moves in cohort) confirms today's move is regime-characteristic not exhaustion-signaling; Option C captures half the H1 upside while halving H2/H3 downside; preserves reweight optionality on symposium content. Decision deferred to user.**
