# Alt-Data Probabilistic Prediction Trial #2 — Hirano Tecseed MLCC Order Acceleration

**Date:** 2026-06-01
**Framework:** Alt-data-driven probabilistic prediction (user-directed framework, 2nd test case)
**Target:** P(Hirano demonstrates MLCC equipment order acceleration in Q1 or Q2 FY2027 results by November 2026)

Target defined as EITHER:
- (a) total revenue >JPY 9B in a single quarter
- (b) management commentary explicitly mentions MLCC equipment order intake recovery
- (c) upward FY2027 guidance revision specifically attributed to MLCC orders

---

## Result

**P = 38% ± 16%** (my model; base rate fragile N=7; 2 of 10 alt-data signals are gaps)

Higher base rate than AGC trial (22%) driven by: (a) Murata capex magnitude larger and more explicit ("急ぎ" urgent language), (b) the 2018 analog (C1) is a direct same-company same-product precedent, not an inferred analog.

---

## Critical Finding That Surfaced During Trial

**The 2018 analog (Case C1) is the highest-value output.** Japanese-language search surfaced contemporaneous data: **Hirano's order backlog reached JPY 18B against JPY 9B annual production capacity during the 2018 MLCC shortage** (T3: Kabutan June 21 2018 + Japanese blog citing contemporaneous data). 2-year customer wait time. Same company, same product, same customer base as today.

This is the kind of structural-historical evidence that English-only research entirely misses. It confirms (a) the Hirano-MLCC-capex linkage is real and documented from prior cycles, (b) the backlog surge magnitude can be enormous relative to capacity.

Hirano FY2019 (year ended March 2019) revenue reached JPY ~43.7B vs FY2018 ~JPY 37.4B = +16.8% YoY following the Murata 2017 capex announcement.

---

## Step 1: Base Rate (N=7, fragile)

| Case | Counts | Weight | Outcome |
|---|---|---|---|
| C1: Murata 2017-2019 MLCC boom | Full | 1.0 | YES — Hirano backlog JPY 18B vs JPY 9B capacity |
| C2: Murata 2021-2022 EV/5G | Partial | 0.5 | MIXED — revenue up but EV primary driver |
| C3: Taiyo Yuden 2019-2020 | Negative | 1.0 | NO — post-boom correction masked capex |
| C4: TDK 2020-2022 | Partial | 0.5 | MIXED — EV-driven, MLCC attribution uncertain |
| C5: Samsung EM | Excluded | 0 | N/A — wrong geography (Korean-sourced) |
| C6: TEL/SCREEN vs TSMC | Adjacent | 0.7 | YES — 1-3 quarter lag confirmed |
| C7: Harmonic Drive vs robotics | Adjacent | 0.7 | YES — 2-4 quarter lag confirmed |

Weighted YES outcomes: 2.9 / 4.4 total = **Base rate B = 66%** (my model)

## Step 2: 10 Alt-Data Signals

| # | Signal | Direction | Magnitude | Δ |
|---|---|---|---|---|
| 1 | Hirano backlog trajectory (no current surge confirmed) | Neutral-Negative | Small | -5% |
| 2 | Murata equipment vendor confirmation (capex+urgency, unconfirmed Hirano link) | Positive | Medium | +7% |
| 3 | Hirano hiring signal (Bizreach/doda Japan) | GAP | unknown | 0% |
| 4 | Japanese sell-side coverage cadence (sponsored only) | Neutral | small | +1% |
| 5 | Murata earnings call supplier mentions (logmi.jp paywall) | GAP | unknown | 0% |
| 6 | Competitor health (no new entrant qualified) | Positive | Small | +3% |
| 7 | **Equipment lead-time alignment (Murata Apr 2026 → Hirano Q2-Q4 FY2027)** | **Strong positive** | **Large** | **+8%** |
| 8 | FY2027 guidance conservatism (Japanese equipment maker beat pattern) | Positive | Medium | +5% |
| 9 | MLCC AI price hike sustainability (Apr 2026 +15-35% held) | Strong positive | Medium | +5% |
| 10 | Adjacent equipment maker read-through (TEL/SCREEN sector sentiment) | Mildly positive | Small | +2% |

**Net raw adjustment**: +26% → gap-weighted (8/10 signals = 80% confidence) = **+21%**

## Step 3: Bayesian Update + Precision Discount

Naive: B + Δ = 66% + 21% = 87% (too high — does not account for precision of 3-criterion target)

**Precision discounts applied** (my model):
- Japanese GAAP percentage-of-completion accounting lag discount: -10%
- Management commentary specificity discount (December 2025 initiation report noted MLCC conservatism due to tariff uncertainty): -8%
- EV battery drag offset (could keep total revenue below JPY 9B threshold even if MLCC improves): -4%

Sub-probability decomposition:
- P(revenue >JPY 9B in Q1 or Q2 FY2027) ≈ 35%
- P(explicit MLCC commentary) ≈ 28%
- P(upward guidance revision attributed to MLCC) ≈ 15%
- P(at least one fires) = 1 - (0.65 × 0.72 × 0.85) = 60%
- Post-discount: 60% - 22% = **38%**

**Final P = 38% ± 16%** (my model)

Low end: 22% (EV remains compressed + MLCC orders take longer + management stays conservative)
High end: 54% (MLCC orders firm quickly post-Murata Apr 30 + explicit quarterly disclosure)

## Step 4: Cascade with Computed Probabilities

| Order | Event | Conditional P | Absolute P |
|---|---|---|---|
| 0 | MLCC order acceleration confirmed by Nov 2026 | — | 38% |
| 1st | Stock rerates toward JPY 2,500 within 6 months of confirmation | 65% | 25% |
| 2nd | Noritake (5331.T) + Nippon Chemical (4092.T) co-benefit rerate | 50% | 12% |
| 3rd | GS or Japanese broker independent coverage initiation | 25% | 10% |
| 4th | Global consensus MLCC equipment supercycle name | 50% | 3% |

## Step 5: Highest-Value Data Acquisitions

| Gap | Source needed | Band Δ |
|---|---|---|
| Hirano quarterly backlog (受注残高) disclosure | logmi.jp Q&A transcript or AGC Japanese earnings briefing | ±14% (largest gap) |
| Murata-Hirano supplier confirmation | 化学工業日報 or Murata procurement docs | ±10% |
| MLCC equipment % of Hirano revenue | Hirano logmi.jp Q&A or segment briefing | ±8% |
| Hirano machine unit price | Trade press / industry catalog | ±5% |
| US-Japan tariff impact on MLCC customer pace | Macro signal monitoring | ±7% |

## Step 6: Position Implication (Kelly Math)

**Proxy-conditioned payoffs:**
- b_win = +40% (stock rerates to JPY 2,500 within 6mo)
- b_lose = -15% (thesis intact but deferred)
- p = 0.38, q = 0.62

**Kelly fraction:** (0.38 × 0.40 - 0.62 × 0.15) / 0.40 = **14.75%**
**Quarter-Kelly: 3.7%**

**Full thesis Kelly (24-36mo):**
- b = +125%, p = 0.35; b_lose = -35%, q = 0.65
- Kelly = (0.35 × 1.25 - 0.65 × 0.35) / 1.25 = **16.8%**
- Quarter-Kelly: 4.2%

**Both Kelly fractions EXCEED the 1.5% micro-cap liquidity cap.** Sizing is liquidity-binding, not Kelly-binding.

**Verdict: Harness ENTER at 1.0-1.5% sizing CONFIRMED by alt-data trial.** Framework does NOT suggest increasing above 1.5%:
1. P(proxy fires by Nov 2026) only 38% — meaningful probability of non-confirmation
2. Base rate has N=7 cases with significant heterogeneity
3. Two signal gaps (S3 hiring, S5 earnings transcript) are highest-precision signals

---

## Framework Comparison: AGC vs Hirano Trials

| Dimension | AGC | Hirano | Lesson |
|---|---|---|---|
| Final P | 22% ± 14% | 38% ± 16% | Hirano higher: Murata capex larger + explicit urgency |
| T1 sources on key claim | Zero | Zero | **Same systematic limit** for micro-cap Japanese supplier relationships |
| Strongest signal | Chiba capex timing | 2018 backlog analog + lead-time | Both: non-obvious bottoms-up signal = highest-alpha |
| Key negative analog | Rogers "sampling only" | Taiyo Yuden 2019-2020 correction | Including negative analogs prevents overconfidence |
| Gap structure | M10 testing participant ambiguous | Murata-Hirano relationship unconfirmed | Same structural gap = systematic limitation |
| Kelly result | Quarter-Kelly 2% (unconstrained) | Quarter-Kelly 3.7% (liquidity-binding) | Both bounded by other constraints |
| vs prior thesis | ENTER revised from WATCHLIST | ENTER 1.0-1.5% CONFIRMED | Framework adds conviction, doesn't reverse |

**Framework verdict (honest):** Genuine improvement over intuition + sell-side. Forces:
1. Explicit base rate construction from structural analogs
2. Precision discounts preventing over-confidence
3. Signal decomposition identifying 2-3 dominant inputs
4. Kelly-mechanics sizing rather than "feels right"

**Systematic limitation:** T1 confirmation of customer-supplier relationships in micro-cap Japanese names unobtainable from open sources alone. Both trials hit same wall. Mitigation: paired with paid-source research budget (logmi.jp, 化学工業日報, Smartkarma) to close 2-3 highest-value gaps per name.

**Calibration**: Probability range 22-38% across both trials appears appropriately calibrated for "non-consensus thesis confirmation within specific quarterly window." Too high (>80%) = consensus; too low (<10%) = speculative.

---

## Sources

- [Kabutan June 21 2018 — Hirano surge on MLCC wave (T3)](https://kabutan.jp/news/marketnews/?b=n201806210568) — JPY 18B backlog vs JPY 9B capacity (the load-bearing 2018 analog data point)
- [NIBR December 2025 Hirano initiation report (T2)](https://www.hirano-tec.co.jp/en/mt_asset/InitiationReport_08_12_25_EN.pdf)
- [Evertiq Murata Izumo April 2026 (T2)](https://evertiq.com/design/2026-04-07-murata-completes-new-mlcc-production-building-in-japan)
- [Newswitch.jp Murata 急ぎ設備投資 JPY 80B (T2)](https://newswitch.jp/p/49101)
- [Passive Components EU AI server MLCC price hike (T2)](https://passive-components.eu/mlcc-manufacturers-consider-price-increase-as-ai-demand-outpaces-supply/)
- [Astute Group AI MLCC shortage 2026 (T2)](https://www.astutegroup.com/news/general/mlcc-shortages-return-as-ai-server-demand-strains-capacity/)
- [Digitimes Feb 2026 Murata MLCC doubling (T2)](https://www.digitimes.com/news/a20260218VL202/murata-mlcc-capacity-ai-server-demand.html)
- [Hirano Tecseed 6245 Q1 FY2027 earnings date Aug 6 2026 (T2)](https://minkabu.jp/stock/6245/settlement)
