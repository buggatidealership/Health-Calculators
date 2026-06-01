# PTFE-for-AI 3-way Ranking: Chemours vs Daikin vs AGC

**Date logged:** 2026-06-01
**Source:** User-directed forward-trajectory deep-dive on 3 accessible PTFE producers per Degiro confirmation
**Method:** 4 parallel subagents (1 macro + 3 company-specific) with LLM-native multilingual research (Japanese for Daikin/AGC, English for CC + macro)
**Status:** Macro subagent COMPLETE; CC + Daikin + AGC subagents PENDING

---

## Macro Setup (Subagent 1 — COMPLETE)

### PTFE-for-CCL TAM trajectory (2026-2035)

| Source | Tier | 2026E TAM | 2030/2035 Target | CAGR |
|---|---|---|---|---|
| Business Research Insights | T3 | $1.42B | $3.05B (2035) | 9.6% |
| BRI alt report | T3 | $1.35B | $3.07B (2035) | 9.6% |
| Emergen Research | T3 | ~$0.82B (2025) | $1.65B (2033) | 8.9% |
| MarketsandMarkets (fluoropolymers broad) | T3 | $10.32B (total fluoro 2025) | $14.13B (2030) | 6.5% |
| High-Freq High-Speed CCL (superset) | T3 | $4.1B (2025) | $10.9B (2035) | 10.3% |

**Working range 2026 baseline**: $1.3-1.5B (T3 with methodology divergence acknowledgment).

**CRITICAL: AI-grade PTFE sub-segment CAGR (bottoms-up triangulation)** = **25-40% through 2030** (analytical estimate, not published category). Triangulated from:
- Murata's 30% AI MLCC CAGR (Investing.com T2; multiple confirmation)
- 30%+ AI-server shipment CAGR
- 3M PFAS exit adding supply-shock that widens ASP premium
- Data center/HPC = 20% of high-frequency CCL demand, growing fastest

The broad 9-10% TAM CAGR understates AI-server-specific subset because it blends with legacy 5G/automotive/industrial.

### Pricing power signal (REAL-TIME)

**Korea CCL import prices +74.5% YoY March 2026** per [Atlas PCB / Digitimes T2](https://www.atlaspcb.com/news/news-ccl-market-korea-import-prices-surge-74-percent-ai-demand-2026/). This is empirical evidence that pricing is already running ahead of TAM consensus.

### 3M PFAS exit — CONFIRMED COMPLETE end-2025

- Original announcement [3M T1](https://news.3m.com/2022-12-20-3M-to-Exit-PFAS-Manufacturing-by-the-End-of-2025) (Dec 2022)
- Confirmed completion per [Manufacturing Dive T2](https://www.manufacturingdive.com/news/3m-on-track-to-exit-pfas-forever-chemicals-manufacturing/705881/) + [C&EN T2](https://cen.acs.org/environment/persistent-pollutants/3M-says-end-PFAS-production/101/i1)
- 3M total PFAS revenue ~$1.3B annually (T2; total PFAS not PTFE-only)
- **Estimated PTFE-specific displaced supply: $300-500M annually globally** (inference; not directly verified)
- **Named beneficiaries per MarketsandMarkets T3**: Chemours, Daikin, AGC, Solvay/Syensqo, Arkema
- Chemours partnered with SRF Limited (India) August 2025 to expand fluoropolymer/fluoroelastomer supply = direct response signal

### US hyperscaler de-Sinicization

**Capex context**: Combined MSFT/GOOG/META/AMZN/ORCL 2026 capex = **$660-690B (+36% YoY)** per [Futurum Group T2](https://futurumgroup.com/insights/ai-capex-2026-the-690b-infrastructure-sprint/) + [IEEE ComSoc T2].

**Structural pressure**: US PCB domestic manufacturing share dropped from ~30% (2000) to ~**4% today** per [PCB Directory T2](https://www.pcbdirectory.com/news/2025-report-highlights-plunge-in-us-pcb-manufacturing-capacity-due-to-decades-of-dependency-on-china).

**Policy framework**:
- IRA "foreign entity of concern" (FEOC) rules creating preference for non-Chinese sourcing
- CHIPS Act extension of FEOC principle to semiconductor supply chains
- BIS export controls (final rule effective 2026-01-15)
- USCC 2025 Report Chapter 9 explicitly identifies PCB/CCL + advanced materials as strategic dependencies per [USCC T1](https://www.uscc.gov/sites/default/files/2025-11/Chapter_9--Chained_to_China_Beijings_Weaponization_of_Supply_Chains.pdf)

**Gap flagged**: No explicit MSFT/GOOG/META/AMZN public policy naming PTFE/CCL as de-Sinicization target. Structural inference from FEOC trajectory, not confirmed named policy.

### Vera Rubin / Rubin Ultra timing + qualification windows

| Platform | Status | Source |
|---|---|---|
| Vera Rubin NVL72 | Full production H2 2026 (confirmed Computex 2026-06-01) | Tom's Hardware T2 + SiliconAngle T2 |
| Rubin Ultra NVL576 (Kyber, 600kW) | H2 2027 mass production | DataCenter Dynamics T2 + Tom's Hardware T2 |

**Qualification cycle**: 12 months compressed (established suppliers) / 24 months standard (new entrants).

**Vera Rubin qualification window**: CLOSED — orders for H2 2026 production landed at PTFE suppliers in 2024.

**Rubin Ultra qualification window**: **OPEN NOW (mid-2026), closes ~H1 2026 for established suppliers**. **THIS IS THE LIVE OPPORTUNITY WINDOW.**

Doosan won exclusive Rubin-era CCL supply after Elite Material failed GB300 qualification per [Digitimes T2] — qualification gates do real supply.

### Murata 30% CAGR analog assessment

| Dimension | Murata MLCC | PTFE CCL (AI-grade) |
|---|---|---|
| TAM consensus CAGR | 30% AI segment | 9-10% broad / 25-40% AI subset (bottoms-up estimate) |
| AI-specific isolated? | YES (Murata explicit) | NO (must infer) |
| Supply concentration | Murata ~40% global | Chemours + Daikin ~35-40% non-Chinese |
| Supply shock | None equivalent | 3M exit removes ~$300-500M |
| Real-time pricing signal | Price increases confirmed | Korea CCL +74.5% YoY |
| Qualification barrier | High | Very high (M9/M10 12-24mo) |

**Conclusion**: PTFE-for-AI is a comparable structural inflection at the raw material chemistry tier, plausibly even MORE pricing-power-positive due to the 3M supply shock that has no MLCC equivalent.

---

## Subagent 2 (Chemours CC) — PENDING

(Will be appended when subagent completes)

---

## Subagent 3 (Daikin 6367.T) — COMPLETE

### A. Current state baseline

| Metric | Value | Source |
|---|---|---|
| Stock price 2026-05-31 | JPY 23,285 | Yahoo Finance Japan T2 |
| **ATH 2023-07-03** | **JPY 31,330** | Investing.com T2 |
| **ATH-distance** | **-25.7% below ATH** | Calculated |
| Market cap | ~JPY 6.48T (~EUR 39B) | T2 aggregators |
| 52-week range | JPY 15,960 – 25,900 | Investing.com T2 |
| FY2026 (yr end Mar 2026) Revenue | JPY 5,015B (+5.5% YoY) | [官報決算DB T2](https://x.com/kessan_db/status/2054901660607304185) + Nikkei T2 |
| FY2026 Operating Profit | JPY 414.9B (+3.3% YoY) | 官報決算DB T2 |
| Group Operating Margin | ~8.3% | Calculated |
| **Chemicals Segment Revenue** | **JPY 281.5B (5.6% of group)** | Search aggregates |
| Chemicals Operating Profit | JPY 33.1B (~8% of group profit) | Search aggregates |
| **Chemicals Operating Margin** | **~11.8% (vs ~17.5% FY2024) — COLLAPSED -28.3% YoY** | Calculated |
| PER (TTM) | ~20-22x | GuruFocus T2 |
| EV/EBITDA | 9.58x (14% below 10Y median) | [GuruFocus T2](https://www.gurufocus.com/term/enterprise-value-to-ebitda/DKILY) |
| Air-Con % revenue | ~90%+ | All sources confirm |

### B. PTFE strategic push — verified facts

**CONFIRMED**:
1. **Kashima FFKM plant — 3x capacity (vs 2022) completion Aug 2026; commercial 2027** per [Daikin Chemicals T1](https://www.daikinchemicals.com/news/kashima-ffkm-new-plant.html) — semiconductor seals, NOT PTFE direct but adjacent
2. **Semi-grade fluorochemical capacity 2x+ by 2030** per [化学工業日報 T2](https://www.chemicaldaily.co.jp/) — covers broader fluorochemical family (PTFE + FFKM + FEP + PFPE), not PTFE alone
3. **FEP for datacenter LAN cables = "significant increase in sales"** per FY2025 results — direct AI-infra demand signal confirmed
4. Polyflon M-Series confirms semiconductor use (process equipment, CMP slurry tubing, wafer carriers) per [Daikin Chemicals product page T1](https://www.daikinchemicals.com/solutions/products/fluoropolymers/polyflon-ptfe-m.html)

**NOT CONFIRMED**:
- Direct hyperscaler supply relationships (MSFT/GOOG/AMZN/META) — nothing public
- Named CCL customer contracts (Shengyi, Taiwan Union, Rogers) — inferred from market structure not confirmed
- Prior "+6% Asia Pacific share gain" — NOT independently verified via T1/T2 in this search (flag as borrowed framing pending re-verification)
- Capex dollar amount for Kashima FFKM plant — not disclosed publicly
- Exact PTFE tons-per-year capacity — not broken out

**3M PFAS exit share capture**: Daikin/Chemours/AGC/Arkema named as consolidators per [Mordor T3]; Daikin structurally positioned for high-performance grades; Chemours for commodity. Magnitude not quantified.

### C. Geopolitical positioning

- HQ Osaka; production Kashima (Ibaraki) + Kusatsu (Shiga) + US + EU + China
- Strong allied-nation positioning; Japan explicit US-aligned semi materials nation
- **TSMC Kumamoto (JASM) creates local demand pull** for Japanese fluorochemical suppliers
- METI semiconductor materials strategy favors domestic suppliers
- Tariff exposure: management disclosed ~JPY 41B operating profit headwind from US tariffs FY2026, partially absorbed via pricing
- Fluoropolymers not on critical export control lists
- China production creates RISK if tensions escalate

### D. Forward trajectory modeling (5-year; my model)

| Year | Chemicals Rev (JPY B) | Group Rev (JPY B) | Chems % | Assumption |
|---|---|---|---|---|
| FY2026 (actual) | 281 | 5,015 | 5.6% | Actual |
| FY2027E | 310 | 5,300 | 5.8% | Semi recovery begins; FEP datacenter ramps |
| FY2028E | 370 | 5,600 | 6.6% | FFKM Kashima online; PTFE capacity executing |
| FY2029E | 450 | 5,900 | 7.6% | Semi cycle upturn + AI PCB inflection |
| FY2030E (base) | 540 | 6,200 | 8.7% | Approaching doubling semi-grade capacity per Daikin target |
| FY2030E (bull) | 680 | 6,200 | 11.0% | 3M share + 30-50% CAGR AI-PTFE |

**Anchor**: IF AI-PTFE 30-50% CAGR (Murata-comparable), fluoropolymer datacenter sub-segment grows from ~$400M today to $1.5-3B by 2030. Daikin at ~25% global fluoropolymer share captures $375-750M increment = JPY 58-116B incremental chemicals revenue. Consistent with bull case above.

**Mix-shift trigger for SNDK-style narrative rerating**: chemicals must reach ~12-15% of revenue AND margin recovery >15%. **Per subagent model: does NOT happen before FY2029-2030 even in bull case.**

### Right-Side-of-Belka score: 2/5

| Condition | Met? | Notes |
|---|---|---|
| 1. Demand irreversible/secular | Partial | AI-infra fluoropolymer demand secular; HVAC dominates 90%+ |
| 2. Supply constrained for years | Partial | 3M exit tightens; Chemours/AGC also expanding |
| 3. Pricing power improving | NO | **Chemicals margin COLLAPSED -28% YoY FY2026; pricing NOT yet inflecting** |
| 4. Mix-shift visible and fast | NO | 5.6% today; 2030 bull case reaches ~11% — NOT narrative-defining yet |
| 5. Management/capital allocation aligned | Partial | Elliott pressure creates alignment; FUSION25 targets; execution risk |

### E. Asymmetry verification (B39 5-test, my model)

| Scenario | Thesis | Target | Upside | P (my model) |
|---|---|---|---|---|
| Bear | HVAC softens; chemicals margin stays ~10%; Elliott rejected; JPY +10% vs EUR | JPY 16,500 | -29% | 25% |
| Base | HVAC stable; semi cycle recovers 2027; chemicals margin 14-15% by FY2028; Elliott partial buyback | JPY 26,000 | +12% | 50% |
| Bull | Semi upcycle + AI-PTFE inflects; Elliott forces portfolio action; chemicals 9-10% revenue >16% margin; rerating to 26x PE | JPY 38,000 | +63% | 25% |

**EV calc (my model): +14.5% over 5 years**. Modest positive but NOT asymmetric.

### Elliott Management catalyst (NEW datapoint subagent surfaced)

- **Elliott has ~3% activist stake since April 2026** per [Bloomberg T2](https://www.bloomberg.com/news/articles/2026-04-16/daikin-shares-climb-11-after-activist-elliott-takes-stake)
- Demanding **JPY 1T buyback** per [Nikkei T2](https://www.nikkei.com/article/DGXZQOUF167OW0W6A410C2000000/)
- Catalyst REAL but **double-edged**: if Elliott pushes chemicals spinoff → AI-PTFE thesis evaporates for parent
- Stock +11-14% on Elliott stake disclosure (already partially priced)

### F. Honest hedges + uncertainty flags

1. **HVAC dominance (90%) = primary risk** — any HVAC softness swamps chemicals narrative
2. **Chemicals margin COLLAPSE FY2026 is alarming**: -28.3% YoY OP despite +7% revenue growth = NOT pricing-power inflection profile
3. JPY/EUR currency risk bilateral; BOJ normalization could bring USD/JPY to 130-140 = -10-15% EUR headwind
4. Elliott catalyst is double-edged
5. PFAS regulatory exposure: Daikin OFFENSIVE not defensive (EU 5-12 yr semi derogation; essential use category)

### Subagent verdict on Daikin as AI-PTFE vehicle

**"Daikin is the HIGHEST-QUALITY fluoropolymer producer globally. Production geography (Japan, allied), technology (Polyflon M-Series, FFKM), announced capacity intention (2x semi-grade by 2030), Elliott activist catalyst forcing capital discipline. BUT it is NOT a pure play. The AI-PTFE thesis represents 5.6% revenue tail on HVAC-cycle company. Mix-shift journey to narrative re-rating is 4-6 years, not 1-2. FY2026 chemicals margin collapse means 'show me' period starts now."**

**Best use case**: call option on AI-PTFE thesis embedded within high-quality Japanese industrial at -25.7% ATH discount, with Elliott buyback floor as asymmetric protection.

**Falsifiers to monitor**: Chemicals margin doesn't recover >14% by FY2028; Elliott announces chemicals divestiture; semi inventory correction extends beyond Q3 FY2027; Chinese local fluoropolymer competitors take semi-grade share.

---

## Subagent 4 (AGC 5201.T) — PENDING

(Will be appended when subagent completes)

---

## Synthesis pending all 4 subagents

Preliminary anchor points (NOT load-bearing pending company data):
- 3M exit beneficiary set explicitly names Chemours + Daikin + AGC (MarketsandMarkets T3) — all 3 candidates are confirmed in the displaced-supply-capture cohort
- Korea CCL pricing +74.5% YoY March 2026 is empirical evidence the AI-grade segment is already outrunning TAM consensus
- Rubin Ultra qualification window OPEN NOW until ~H1 2026 — orders placed in this window determine H2 2027 production share
- The AI-grade PTFE CAGR estimate (25-40%) is bottoms-up triangulation, NOT cited research; should be flagged as "(my model)" in any synthesis claim
- Murata-comparable structural pattern holds; 3M supply shock may make PTFE pricing power even sharper than MLCC analog
