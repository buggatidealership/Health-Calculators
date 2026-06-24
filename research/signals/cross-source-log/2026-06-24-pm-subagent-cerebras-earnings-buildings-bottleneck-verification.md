# 2026-06-24 PM — Subagent — Cerebras Q1 2026 Earnings + Buildings-Bottleneck Verification (Vik/Citrini share)

**Trigger source:** User-shared Citrini image 2026-06-24 PM on Cerebras Q1 2026 earnings + Andrew Feldman "buildings are the limiting factor" framing + Vikram Sekar 88GB SRAM/rack architectural critique.

**Subagent:** 1 (Opus 4.8 per Critical Rule #16); scoped 9-target verification.

**Token cost:** 78.7k subagent_tokens; 64 tool uses; 613s duration.

**Yield class:** HIGH — (a) Cerebras financials VERIFIED HIGH at T0 SEC 8-K; (b) **CRITICAL TIMING SELF-CORRECTION caught — MU prints TODAY June 24 4:30 PM EDT not tomorrow** per T1 GlobeNewswire May 27 IR announcement (B40.3 cohort-wide self-correction); (c) Andrew Feldman "buildings limiting factor" quote VERIFIED N=4+ T1 sources; (d) stock drop driver = MARGIN MISS not revenue (Q2 GM 36-38% guide vs Q1 actual 46.5% = G42 leaseback drag); (e) Sekar 88GB/rack arithmetic VERIFIED HIGH but framing partial (conflates per-rack-memory-fit with per-MW-floor-space constraints); (f) industry-wide buildings constraint VERIFIED (Sightline Climate 30-50% of 2026 US data center pipeline delayed/cancelled); (g) NBIS = STRONG POSITIVE thesis amplifier (already-built capacity = scarce asset).

---

## 🚨 CRITICAL TIMING SELF-CORRECTION

**MU Q3 FY2026 reports TODAY June 24 at 4:30 PM EDT (22:30 CET), NOT June 25.**

Source: [GlobeNewswire official Micron IR announcement May 27 2026](https://www.globenewswire.com/news-release/2026/05/27/3302360/14450/en/micron-technology-to-report-fiscal-third-quarter-results-on-june-24-2026.html) + multiple analyst preview sources.

Prior session framing of "MU print TOMORROW 2026-06-25" was wrong by 24h. B40.3 cohort-wide self-correction — affects all HYNIX/MRVL/KIOXIA/SNDK/SUMCO thesis cross-refs referencing MU timing this session.

---

## SECTION 1 — Cerebras Q1 2026 Financials Verification

| Claim in Image | Verified Figure | Confidence | Source |
|---|---|---|---|
| Q1 sales $193.4M | $193.4M GAAP / $191.3M core | HIGH | SEC 8-K T0; GlobeNewswire T0; CNBC T1 |
| Growth +94% | +94% GAAP YoY (vs $99.5M Q1 2025) | HIGH | T0 press release; StockTitan; multiple T1 |
| Net loss $14M | $14.0M GAAP ($2.5M core/non-GAAP) | HIGH | SEC 8-K T0; GamesBeat T1 |
| FY2026 guide $855-865M | $855.5M-$865M (core) | HIGH | T0 Cerebras IR; Yahoo/Bloomberg T1 |
| Consensus $824.8M | $824.8M Bloomberg consensus | HIGH | Bloomberg (T1 cited in Yahoo Finance) |
| Beat gap | +3.7% to +4.9% above consensus | HIGH | Arithmetic from verified figures |
| Shares -10% late trading | -10% initial AH → -11-14% extended | HIGH | TradingKey: -11.33% AH; premarket -14.26% |
| Results released | June 23 2026 after market close | HIGH | SEC 8-K filing date; GlobeNewswire |

**Critical finding — why shares dropped:** NOT primarily revenue guidance (which beat). **PRIMARY driver = Q2 2026 GM guide 36-38% vs Q1 actual 46.5%, full-year 38-41% = 6-9pp annual GM compression.** CFO Bob Komin disclosed cause: **G42 leaseback arrangement** — Cerebras renting back hardware previously sold to G42 (UAE anchor investor) to serve $20B/750MW OpenAI obligation while own new data center buildouts under construction. Leaseback drags margins 10-15pp in 2026. Feldman called this "misunderstood" on CNBC Squawk on the Street June 24.

---

## SECTION 2 — Andrew Feldman "Buildings Are the Limiting Factor" — VERIFIED

**Exact quote** (verified across 4+ T1 sources): "The biggest challenge right now is getting enough data center space. It's a grand irony that after all this technology that we've invented, and Nvidia's invented, buildings are the limiting factor."

**Attribution:** Andrew Feldman CEO Cerebras. Bloomberg pre-results interview June 23 2026, before earnings released after close. Confirmed Yahoo Finance + The Next Web + ZeroHedge (citing Bloomberg) + Gurufocus + CNBC.

**Second Feldman quote** (June 24 CNBC post-earnings): "We're trying to move at the speed of AI, and data centers move with the speed of real estate."

**NOT a one-off** — recurring operational theme. Cerebras announced 6 NA+EU data centers January 2026; signed 40MW DigiPower X Alabama deal; June 4 Bloomberg video featured Feldman on data center community opposition. Sustained operational theme not first raised in earnings context.

Confidence HIGH.

---

## SECTION 3 — Vikram Sekar 88GB SRAM/Rack Architectural Critique

### 3.1 Arithmetic (HIGH confidence)

- WSE-3 chip: **44GB on-chip SRAM** (T0 confirmed: Cerebras press + arxiv 2503.11698 March 2025)
- CS-3 system (1 WSE-3): 15U rack form factor, ~23-25kW power
- Standard 42U rack: 2 CS-3 units fit (15U × 2 = 30U + ~12U networking/cooling)
- 2 × 44GB = **88GB SRAM per rack** ✓ Sekar's figure ARITHMETICALLY CORRECT

### 3.2 Per-Rack Memory Comparison vs NVDA

| System | Per-unit memory | Per-rack configuration | Per-rack total |
|---|---|---|---|
| Cerebras CS-3 (WSE-3) | 44GB SRAM | 2 per 42U rack | **88GB SRAM** |
| NVDA DGX H100 | 640GB HBM3 (8×80GB) | 4 DGX per 42U (4U each) | ~2,560GB HBM3 |
| NVDA GB200 NVL72 | 72×141GB HBM3e | 1 NVL72 = full rack | ~10,152GB HBM3e |

Cerebras 88GB vs DGX H100 2,560GB = **~29× less total memory per rack**. vs GB200 NVL72 = ~115× less.

**Architectural trade-off:** Cerebras SRAM bandwidth 21 PB/s dwarfs NVDA HBM 26.8 TB/s (8-GPU DGX) = ~785× faster per-bit access. Cerebras = LATENCY-optimized for single-token generation; NVDA HBM = THROUGHPUT-optimized for parallel multi-user serving.

### 3.3 Is Sekar's Critique Fair?

**Fair elements:** 88GB/rack SRAM ceiling architecturally real + known from day one. Large models (GPT-4 class 400GB+; Llama 3 70B ~35GB FP16) require quantization or partitioning across many CS-3 units. "Need lots of racks" is architecturally inherent.

**Where framing is imprecise:** Feldman's "buildings" constraint is PRIMARILY about MW-scale POWER DENSITY + FLOOR SPACE for 750MW OpenAI deal (750MW / 25kW per CS-3 = 30,000 CS-3 systems = 15,000 racks = enormous floor space), NOT primarily per-rack model memory fit. At 750MW even NVDA H100 would require ~31,250 DGX units = same buildings problem at hyperscale. **Sekar conflates (a) model-memory-per-rack constraint (real, architectural) vs (b) data-center-space-per-MW constraint (real, industry-wide).**

Confidence: Sekar arithmetic HIGH; framing-as-WHY-buildings-bind MEDIUM-LOW.

---

## SECTION 4 — Buildings Constraint: Industry-Wide AND Cerebras-Specific

**VERDICT: BOTH. Industry-wide structural; Cerebras-specific acute.**

**Industry-wide evidence (HIGH confidence):**
- **Sightline Climate 2026 Data Center Outlook (T1):** 16GW planned US data center capacity 2026; only ~5GW under construction; **30-50% of 2026 pipeline expected delayed or cancelled.** Root causes: power grid connection lead times, transformer/switchgear shortages, community opposition.
- **Bloomberg (T1):** Reports same 30-50% delay/cancellation risk on US 2026 pipeline
- **META capex language (T0 earnings call April 29):** Raised FY2026 capex to $125-145B explicitly citing "higher component pricing AND ADDITIONAL DATA CENTER COSTS"
- Hyperscaler buildout pace: $725B 2026 capex includes large real-estate/construction component not just chips

**Cerebras-specific mechanics:**
- Sold hardware to G42 (UAE); now renting it back to serve OpenAI 750MW US obligations
- G42's existing UAE capacity does not satisfy OpenAI's US requirements
- Cerebras' own 6 new data center sites (announced Jan 2026) under construction — 12-18 month builds
- Leaseback is SPECIFIC OPERATIONAL CHOICE other companies (hyperscalers) don't have because they own their own data centers

**Load-bearing conclusion:** "Buildings are the limiting factor" is genuine documented industry-level constraint — not CEO excuse-making. Corroborates today's prior verifications on hyperscaler FCF compression (the $725B capex flowing to real estate AND chips) + NBIS thesis (existing-built capacity = scarce asset in supply-constrained market).

---

## SECTION 5 — Bypass-Route Analysis (Critical Rule #9 + Principle #9)

Per binding-constraint Time-to-X framework — when buildings ARE binding, the bypass routes hyperscalers actually take:

| Bypass route | Mechanism | Beneficiary |
|---|---|---|
| **Power-density-per-rack** | Liquid cooling upgrade existing buildings (35kW → 100-130kW per rack) | Vertiv, nVent, MURATA passives for higher-current rails, HBM density (more memory per rack = same buildings = more compute) |
| **Co-location / leased capacity** | Skip greenfield buildout; lease from existing operators | **NBIS** (already-built EU capacity); CoreWeave; Lambda; sovereign-bloc data center REITs |
| **Brownfield repurpose** | Convert legacy crypto-mining / industrial sites with existing power interconnect | Power-grid-connected real estate |
| **In-region sovereign capacity** | EU/JP/KR-domestic builds bypass US-centric building constraint | **NBIS** (EU sovereign); **KIOXIA + MURATA + SUMCO** (Japan ally-bloc per Pax Silica verified today) |
| **No bypass on power-grid interconnect** | If grid is TRUE binding constraint (not buildings), narrows to BTM gas turbines + nuclear PPA | VST, CEG, GEV, TLN (not held; watchlist relevance) |

**Most thesis-relevant bypass-route winner: NBIS** — already-built EU capacity = direct substitution; reinforces today's PC-14 N=9+ ally-bloc institutionalization + P-5 distribution-is-thesis pattern.

**Secondary bypass winner: HYNIX/Samsung/Micron HBM** — power-density-per-rack solution = MORE HBM per chip → HBM TAM expands within constrained building footprint.

---

## SECTION 6 — L27 Cross-Validation + MU Timing

**Cerebras L27 pattern = HYBRID (not pure L27).** Beat revenue by +4%; shares fell -10 to -14%. Under pure L27 this would be "investors wanted more magnitude of beat." Actual signal is more specific: **investors reacted to MARGIN MISS (full-year 38-41% vs Q1 actual 46.5%), not revenue beat magnitude.** L27-adjacent but distinct pattern: beat-on-revenue, miss-on-margin.

**For MU TONIGHT (June 24 4:30 PM EDT):**

Consensus: Revenue ~$34.5-35.6B; EPS ~$19.72-20.49; GM ~81.6%

**KEY BINARY (per yesterday's AM-MU-BEAT-PROB):** Q4 FY2026 guidance — analysts modeling $38-42B.

If MU beats Q3 + guides Q4 at $38B+: the L27 question is whether stock reacts positively or neutrally given run from $250→$800+ on AI narrative. Cerebras "buildings" context for MU = SUPPLY-CONSTRAINED DEMAND narrative supportive for HBM pricing. If buildings bind, chips (including HBM) are ordered ahead of deployment — HBM demand schedule extends further 2027-2028 = cycle-extension confirmatory.

Cerebras uses ZERO HBM (pure SRAM). No direct MU demand read-through from Cerebras shipments. Buildings signal = MACRO for MU not direct customer relationship.

---

## SECTION 7 — Cohort Cascade Verdicts

| Position | Size | Buildings Signal Verdict | Thesis Impact |
|---|---|---|---|
| HYNIX | 20.6% Core | NEUTRAL-TO-POSITIVE (2nd order: supply-constrained demand extends cycle; 1st order: deployment pace may slow if buildings constrain GPU installation) | INTACT. Monitor MU call TONIGHT for HBM order-vs-deployment distinction |
| MRVL | 8.2% Active | NEUTRAL (no direct linkage; custom ASIC pipeline orthogonal to buildings constraint) | INTACT |
| MURATA | 15.6% Core | MILD POSITIVE (data center construction acceleration = passive component demand) | INTACT; mild tailwind |
| KIOXIA | 14.4% Core | NEUTRAL (NAND secondary in this context; storage demand follows eventual deployment) | INTACT |
| SNDK | 5.3% | NEUTRAL (similar to KIOXIA) | INTACT |
| SUMCO | 9.8% | NEUTRAL (wafer demand driven by fab orders, not deployment timing) | INTACT |
| **NBIS** | 10.8% Active | **STRONG POSITIVE: buildings constraint = NBIS existing capacity is scarce asset. Direct thesis amplifier (P-5 distribution-is-moat).** | **REINFORCED** |

**Single strongest cohort signal: NBIS.** Already-built EU data center capacity is scarce + high-value in a world where new data centers take 18-24 months to build and 30-50% of 2026 US pipeline is at risk of delay.

---

## SECTION 8 — H1/H2/H3: Buildings Bottleneck + HYNIX HBM Cycle-Extension

| Scenario | P-weight | Logic | Key Falsifier |
|---|---|---|---|
| **H1: Buildings transient; HBM cycle extends 2028-2029** | **0.55** | Hyperscalers ordering chips regardless of deployment timing; HBM supply tight through 2026-2027; buildings fill in 2027-2028 triggering second wave of GPU/HBM demand; Sightline data shows pipeline building, just delayed not cancelled | Any hyperscaler guides capex down at Q2 July earnings OR HBM spot prices weaken materially |
| H2: Buildings slow near-term HBM PACE (not level) | 0.30 | If hyperscalers cannot deploy chips, may slow near-term chip ORDERS even while long-term commitment intact; risk of H1 2027 HBM demand air-pocket | MU TONIGHT confirms HBM fully ordered through 2026 with no push-outs → H2 drops to 0.20 |
| H3: Buildings trigger capex rethink; HBM demand revises down | 0.15 | Structural mismatch if GPU inventory accumulates without deployment; capex restraint in 2027 | No current management language supports this; contradicted by all hyperscaler guidance |

**Dominant read (H1 P=0.55):** Buildings constraint = DEMAND NOT DESTROYED, SUPPLY CONSTRAINED ON REAL ESTATE. Fundamentally different from demand destruction. The bottleneck has shifted from chips (2024-2025) to data centers (2026) — chip demand remains strong even as deployment pace partially throttled.

---

## OPEN ITEMS

1. MU Q3 FY2026 actual reported figures not yet indexed (reporting TONIGHT 4:30 PM EDT). Build scenario framework before call completes.
2. Vikram Sekar's precise tweet text — sourced from image only; @vikramskr newsletter on Substack confirmed (T2); his prior Cerebras architectural critique work matches framing.
3. Cerebras 6 NA+EU data centers timing for G42 leaseback unwinding (management called temporary but no specific timeline).
4. Exact WSE configuration for OpenAI 750MW: rack count, floor space, which Cerebras-owned data centers will host. Determines whether buildings constraint resolves 2026 or persists into 2027.

---

## Sources

- [Cerebras Systems Strong Q1 2026 Results June 23 2026](https://investors.cerebras.ai/news-releases/news-release-details/cerebras-systems-announces-strong-first-quarter-2026-results)
- [Cerebras SEC Form 8-K FY2026](https://www.sec.gov/Archives/edgar/data/0002021728/000162828026044941/cbrsannouncesfinancialresu.htm)
- [CNBC Cerebras Q1 earnings 2026](https://www.cnbc.com/2026/06/23/cerebras-cbrs-q1-earnings-report-2026.html)
- [Yahoo Finance: Cerebras 2026 Sales Outlook Disappoints](https://finance.yahoo.com/technology/ai/articles/cerebras-gives-2026-sales-outlook-213238854.html)
- [Bloomberg Cerebras Projects $855M-$865M 2026 Sales](https://www.bloomberg.com/news/articles/2026-06-23/cerebras-projects-2026-sales-that-leave-investors-wanting-more)
- [The Next Web: Cerebras stock falls as building shortage bites](https://thenextweb.com/news/cerebras-earnings-margin-data-centre-shortage)
- [CNBC Cerebras CEO margin forecast misunderstood](https://www.cnbc.com/2026/06/24/cerebras-cbrs-stock-earnings.html)
- [Cerebras Feldman: AI Infrastructure Behind Demand Not Ahead](https://finance.biggo.com/news/4a9d16d70f8e69ae)
- [Digitimes: Cerebras 92% revenue growth compute rentals margin squeeze](https://www.digitimes.com/news/a20260624VL200/cerebras-revenue-growth-capacity-2026.html)
- [TradingKey: First Post-Listing Earnings Disappoint](https://www.tradingkey.com/analysis/stocks/us-stocks/261986948-cerebras-plunges-nearly-11-after-hours-as-debut-earnings-spark-profitability-fears-tradingkey)
- [Vik's Newsletter / Vikram Sekar](https://www.viksnewsletter.com/)
- [Cerebras IPO and Scaling Bottlenecks - Vik's Newsletter](https://www.viksnewsletter.com/p/cerebras-ipo-and-the-scaling-bottlenecks)
- [Sightline Climate 2026 Data Center Outlook](https://www.sightlineclimate.com/research/data-center-outlook)
- [US AI Data Center Delays 7GW Capacity Crisis 2026 - tech-insider.org](https://tech-insider.org/us-ai-data-center-delays-cancellations-7gw-capacity-crisis-2026/)
- [Cerebras 6 Data Centers - Data Center Frontier](https://www.datacenterfrontier.com/hyperscale/article/55273769/cerebras-unveils-six-data-centers-to-meet-accelerating-demand-for-ai-inference-at-scale)
- [Cerebras 40MW DigiPower X Alabama - DCD](https://www.datacenterdynamics.com/en/news/cerebras-signs-on-for-40mw-of-capacity-at-digi-power-x-data-center-in-alabama/)
- [Micron Technology Q3 Results June 24 2026 - GlobeNewswire OFFICIAL IR ANNOUNCEMENT](https://www.globenewswire.com/news-release/2026/05/27/3302360/14450/en/micron-technology-to-report-fiscal-third-quarter-results-on-june-24-2026.html)
- [Micron Q3 FY2026 earnings preview - IG International](https://www.ig.com/en/news-and-trade-ideas/micron-q3-fy2026-earnings-preview-260623)
- [NVIDIA DGX H100 User Guide](https://docs.nvidia.com/dgx/dgxh100-user-guide/introduction-to-dgxh100.html)
- [Cerebras WSE-3 vs NVIDIA - arxiv 2503.11698](https://arxiv.org/html/2503.11698v1)
