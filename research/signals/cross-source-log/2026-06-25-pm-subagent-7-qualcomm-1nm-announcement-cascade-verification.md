# Qualcomm "1nm" Announcement Cascade Verification — 2026-06-25 PM

**Subagent:** 7
**Workflow:** B59 v2 / Critical Rule #16 verification + Workflow #2 TRACE + Workflow #9 MACRO-FIRST
**Date:** 2026-06-25
**User assumption being tested:** "Qualcomm announced 1nm chips today"

---

## TL;DR (2 lines)

User's "1nm" recall is FALSE — the announcement is Qualcomm Investor Day 2026-06-23/24 unveiling **Dragonfly C1000 CPU + AI300 accelerator + HBC (High-Bandwidth Compute) memory + Meta multi-gen CPU deal + Microsoft Azure HBC deployment + $4B Modular acquisition**. The cascade is NOT a foundry-node story — it is a **memory-architecture disruption (HBC vs HBM)** plus a **hyperscaler-defection event (Meta + MSFT pulling away from NVDA inference)** with 2027-2028 commercial timing.

---

## PART 1 — ANNOUNCEMENT VERIFICATION (HARD-DATA)

### What was actually announced

| Item | Detail | Source tier |
|---|---|---|
| **Date** | Investor Day 2026-06-23 to 06-24; news cycle 06-24/25 | T1 (Qualcomm IR) |
| **Dragonfly C1000 CPU** | 250+ Oryon cores, >5 GHz, chiplet, PCIe Gen 7, CXL, 2x perf/W vs incumbents | T1 (ServeTheHome, QCOM) |
| **AI300 accelerator** | 3rd-gen rack-scale inference, HBC Gen2 onboard | T1 |
| **HBC memory** | LPDDR DRAM dies 3D-stacked via TSV ON TOP of a near-memory accelerator die, 2D organic substrate (not silicon interposer); 6x bandwidth/W vs HBM, 200x capacity/W vs SRAM; AI250 → 133 TB/s per card (18x over AI200 LPDDR5X); AI300 → 54x AI200 effective BW | T1 (Tom's Hardware, Wccftech, TechNews TW) |
| **Meta deal** | Multi-year, multi-generation CPU supply agreement; Meta server fleet uses C1000 from H2 2028 | T1 (Bloomberg, Zuck confirmed) |
| **Microsoft deal** | Nadella confirmed Azure will deploy HBC | T1 (Constellation Research, Chinese sources) |
| **Humain (Saudi)** | Launch customer for AI200/AI250, 200 MW first deployment, fiscal 2027 revenue (pulled forward from FY28) | T1 (QCOM Nov 2025 release) |
| **Modular acquisition** | ~$4B all-stock (19.2M shares); Mojo language + MAX inference engine; direct anti-CUDA play | T1 (Bloomberg, CNBC) |
| **Revenue target** | FY29 non-handset target ~$15B (datacenter alone); $40B AI revenue framing | T1 (CNBC) |
| **Process node** | NOT disclosed publicly. Industry inference: TSMC N2/N2P most likely given Oryon family and 2028 timing | T2 inference |

### CRITICAL: There is no 1nm announcement

- TSMC's roadmap: N2 (Q4 2025 HVM), N2P (2026), A16/1.6nm (2026-2027), **A14/1.4nm (2028-2029)**, **A10/1nm (~2030)**. Source: T1 TSMC tech symposium, T2 TrendForce.
- Samsung roadmap: SF2 (yields 55-60% Apr 2026), SF2P (now ~70%), SF1.4 (~2027-2028). Source: T1 Etnews/TrendForce.
- Intel: 18A HVM Jan 2026 at 55-65% yield; 14A two customers in PDK access H2 2026.
- **No foundry has 1nm in production or sample stage in 2026**. User's recall is conflating "advanced node" headlines with the AI300 sample timing.

---

## PART 2 — FIRST-PRINCIPLES STATE OF LEADING-EDGE FOUNDRY (Workflow #9)

| Node | Foundry | Status (2026-Q2) | Yield | Key customer | Source |
|---|---|---|---|---|---|
| N2 | TSMC | HVM Q4 2025; ramp 2026 | ~70% pilot, target 80% N2P | Apple A20, QCOM SD8 Elite Gen 6 | T2 TrendForce, T1 TSMC |
| N2P | TSMC | 2026 introduction | Target 80% | QCOM, Apple | T2 TrendForce |
| A16/1.6nm | TSMC | 2026-2027 | n/a | n/a | T1 TSMC |
| SF2 | Samsung | Mass prod underway | 55-60% (April 2026), Qualcomm exited | Exynos 2600 (Galaxy S26) | T1 Etnews |
| SF2P | Samsung | Stabilizing | ~70% milestone | Open for dual-source | T2 BigGo |
| 18A | Intel | HVM Jan 2026 | 55-65% | Panther Lake + Microsoft | T1 Intel CEO, Tom's Hardware |
| 14A | Intel | PDK access to 2 customers | Pre-HVM | TBD | T1 Intel |
| CoWoS-L 2026 | TSMC | Fully sold out | n/a | NVDA 60%, AVGO 15%, AMD 11% | T2 Morgan Stanley/Astute |

**Key inference:** CoWoS allocation explicitly excludes QCOM ("Apple focuses on self-developed cloud ASICs while Qualcomm focuses on Tier 2 AI accelerator card products, and neither of their application scenarios depends on CoWoS packaging" — 36Kr). This is the most important hard fact for the cascade.

---

## PART 3 — LLM-NATIVE CASCADE (parallel-hypothesis, n-th-order)

### Cascade Question 1: Which foundry wins QCOM datacenter?

| Hypothesis | P | Reasoning |
|---|---|---|
| H1: TSMC N2/N2P sole | 65% | Oryon is QCOM IP; QCOM has been TSMC-loyal since Samsung 2nm exit (April 2026 TrendForce); Meta/Microsoft tier-1 require known-good yield. |
| H2: Dual-source TSMC + Samsung SF2P | 25% | SF2P 70% yield gives Samsung credibility; QCOM has political reason to dual-source after Samsung Exynos 2600 reconciliation. |
| H3: Intel 18A-P slice | 10% | Microsoft is Intel 18A customer AND Dragonfly customer; possible MSFT influence. |

**P>80% marker (1st order):** TSMC N2 family captures incremental allocation 2027-2028 from QCOM datacenter SKU.
**P~40% marker (2nd order):** This crowds Apple's M5/M6 timing on N2 — Apple may absorb price increases or push to A16 earlier.

---

### Cascade Question 2: HBC vs HBM — memory-architecture cascade (CRITICAL)

**The real story.** HBC inverts the HBM model:
- HBM: silicon interposer + CoWoS + HBM stack adjacent to compute → bandwidth via parallel I/O
- HBC: LPDDR stack ON TOP of accelerator die via TSV on 2D organic substrate → bandwidth via short vertical path, lower cost, lower power

**Markers:**
- **P>80% (1st order):** LPDDR demand cascades structurally upward 2027-2028 if HBC ships at scale. Samsung and Micron historically lead LPDDR; SK Hynix is HBM-leveraged most. This is **bearish-relative for HYNIX, bullish-relative for Samsung Memory + Micron LPDDR lines**.
- **P~60% (2nd order):** HBM4 / HBM4E TAM growth is NOT destroyed (NVDA Rubin still HBM4), but the 2028+ inference TAM bifurcates. If HBC reaches claimed 6x BW/W, hyperscaler inference racks economically favor HBC for trillion-token workloads.
- **P~40% (3rd order):** TSMC CoWoS-L capacity stress relaxes at the margin (HBC uses 2D organic substrate, not silicon interposer). This is **mildly bearish for the CoWoS-tight-allocation thesis** that has been driving NVDA scarcity premium.
- **P~20% (4th order):** Substrate supplier mix shifts toward FCBGA-organic specialists (Ibiden, Unimicron, Nan Ya PCB, Shinko, AT&S) — net positive demand impulse for them, even if mix differs from CoWoS-L.

**Bias-check (B22):** HBC is QCOM marketing. The 6x BW/W claim is comparison-conditioned (specific workloads, specific power envelope). HBM Gen2 sample only mid-2027 → 18 months for HBM4E/HBM5 to counter-evolve. So "HBC kills HBM" is overreach; "HBC carves a hyperscaler inference niche" is the calibrated take.

---

### Cascade Question 3: Power / cooling cascade

- AI200/AI250 rack TDP: **160 kW** (per QCOM disclosure)
- Direct liquid cooling mandatory
- **P>80%:** Reinforces existing power-grid thesis (GEV, CEG, VST) AND liquid-cooling thesis (VRT, COOL). Not a new datapoint; consistent with prevailing thesis.
- **P~60%:** 160 kW racks are at the high end of disclosed AI rack TDPs (Vera Rubin ~600 kW per Oberon rack but with more compute). HBC efficiency claim partially OFFSETS power demand per token, which is **mildly bearish at margin for grid-load growth rate** even as absolute scales.

---

### Cascade Question 4: Memory bandwidth cascade — unified hierarchy interaction

- Morning verification framework (HBM/DRAM/NAND hierarchy unified alpha) MUST be updated:
  - Tier 1 (HBM): Still NVDA Rubin / AMD MI400 / Apple cloud, SK Hynix-led, structurally tight.
  - **Tier 1.5 NEW (HBC):** Qualcomm-only initially, LPDDR-stacked, organic substrate, lower-cost-per-bit. Samsung + Micron LPDDR lines benefit.
  - Tier 2 (LPDDR5X/LPDDR6): Edge + Snapdragon mobile + automotive — now ALSO a datacenter SKU via HBC.
  - Tier 3 (DDR5): Server CPU, still tight per S&P Global 60-70% server DRAM price hikes Jan 2026.
  - Tier 4 (NAND): Kioxia/SNDK exposure unchanged by HBC announcement.

- **P~60% (2nd order):** LPDDR ASP firms further 2027-2028 as datacenter pull adds to mobile/auto demand. Net positive for Micron and Samsung LPDDR.

---

### Cascade Question 5: Substrate / packaging cascade

- HBC is on **2D organic substrate** (Tom's Hardware, Wccftech confirm). NOT CoWoS, NOT silicon interposer.
- Beneficiary chain: Ibiden, Unimicron, Nan Ya PCB, Shinko, AT&S (FCBGA oligopoly).
- **P>80%:** Marginal incremental demand for advanced FCBGA from 2027-2028 QCOM volume.
- **P~40% (lateral):** If HBC architecture is licensed or imitated (Broadcom, Marvell custom-ASIC clients), the organic substrate beneficiary tail extends.

---

### Cascade Question 6: AI stack implication — edge vs cloud convergence

- The Modular acquisition is the LOAD-BEARING strategic move, not HBC alone. Mojo + MAX = anti-CUDA stack that runs CPU/GPU/NPU/ASIC without re-write.
- **P~60%:** Combined with QCOM's installed Snapdragon edge inference base, this creates the first credible "edge-to-cloud unified inference runtime" outside NVIDIA. Threat to CUDA moat is reputational immediately, operational 2027+.
- **P~40% (3rd order):** Hyperscaler willingness to pay NVDA's GPU premium softens at the margin as alternatives mature. Pricing-power compression for NVDA is a 2028 story, NOT a 2026 story.

---

### Cascade Question 7: Competitive cascade per held-cohort name

| Ticker | Cohort wt | 1st-order impact | 2nd-order | Net dir |
|---|---|---|---|---|
| **NVDA** | (indirect) | Neutral 2026-2027; commentary risk on inference share | CUDA moat narrative weakens 2028+; HBC compresses inference rack TCO | Mild bearish (long-tail) |
| **HYNIX 20.6%** | Core | HBM4 demand unchanged 2026-2027 | HBC bifurcates 2028 inference memory TAM; HYNIX most HBM-concentrated → most exposed | **Mild bearish (2028 cap on HBM upside)** |
| **KIOXIA 14.4%** | Core | No direct impact | NAND demand orthogonal to HBC; Dragonfly racks still need SSDs | **Neutral** |
| **MRVL 5.9%** | Core | Mild negative; QCOM custom-ASIC ambitions encroach on MRVL TAM (per Evercore: "Marvell, Arm, Qualcomm catching up") | If hyperscalers diversify ASIC vendors further, MRVL's Trainium/Inferentia/Maia franchise stable but won't expand share | **Mild bearish** |
| **NBIS** | Compute aggregator | Neutral; NBIS sells compute capacity, agnostic to which silicon | If HBC TCO claims validate, NBIS could deploy QCOM racks to offer lower-cost inference (option value) | **Neutral / mild positive option** |
| **SNDK 5.3%** | Core | No direct impact | Same as KIOXIA — NAND demand uncorrelated to HBC | **Neutral** |
| **MURATA / SUMCO** | (substrate/wafer) | Neutral 2026; wafer demand unchanged | 2027+ FCBGA demand adds modest organic substrate pull (mostly Ibiden/Unimicron, less Murata) | **Neutral** |
| **ARM** | Implicit | Positive — Oryon is Arm ISA, Dragonfly C1000 = 250 cores × multi-gen royalty stream from Meta | If Meta and Microsoft scale, Arm royalties from datacenter compound | **Positive (under-appreciated)** |
| **AAPL** | Implicit | Mild negative — N2/N2P allocation competition intensifies for Apple A20/M5 generation | Cost pressure on Apple Silicon line; potential roadmap push to A16 sooner | **Mild bearish** |
| **INTC (foundry)** | Implicit | Mostly negative — QCOM did not select Intel Foundry; Intel needs marquee external customer | If MSFT influences QCOM toward 14A for second-source, Intel gets lifeline | **Mild bearish** |

---

### Cascade Question 8: What does this NOT impact (per user "what doesn't touch")

- **TSMC N2 base case** — already sold out, QCOM allocation was always coming; no upside surprise here.
- **CoWoS-L bottleneck** — HBC uses organic substrate, but NVDA + AMD + AVGO Google TPU + Meta MTIA still ride CoWoS-L. The 1M wafer CoWoS shortage thesis is INTACT.
- **NAND market** — KIOXIA / SNDK unaffected directly; HBC is a DRAM-stacking architecture.
- **Power grid thesis (GEV/CEG/VST)** — 160 kW racks reinforce; no thesis change.
- **Liquid cooling (VRT/COOL)** — required by AI300; reinforces but not new info.
- **MU LPDDR6** — slight tailwind; not enough to flip 2026 thesis.
- **Mobile Snapdragon SD8 Elite Gen 6** — fully separate decision tree (TSMC N2 mobile).
- **AGENTIC-EDGE thesis (Snapdragon X3/X4 PC chips)** — orthogonal product line.
- **Robotics / Auto Snapdragon Ride** — orthogonal.
- **Medical AI** — orthogonal.

---

### Cascade Question 9: What does this BLOCK / make IMPOSSIBLE? (lateral)

- **Blocks "NVDA inference monopoly forever" tail scenario** — hyperscaler-of-record (Meta) + hyperscaler-of-cloud-share-#1 (Microsoft) both endorsing non-NVDA inference = the 2028+ inference TAM is structurally contested.
- **Blocks "HBM is the only path to >1 TB/s per package" tail** — HBC at 133 TB/s per card via LPDDR-TSV is an existence proof; even if QCOM execution slips, the architecture pattern is now public IP and other ASIC designers can replicate.
- **Blocks "CUDA is unassailable forever"** — Modular MAX engine is a hardware-agnostic runtime backed by $4B and a hyperscaler reference design. Probability mass on the "CUDA moat indefinite" scenario must be reweighted downward.
- **Does NOT block** NVDA training dominance, NVDA scale-out networking (NVLink Fusion), or NVDA's near-term ($2T+ committed) order book.

**Convex hull of plausible 2028 outcomes:** {NVDA inference share 60-80%}, previously {NVDA inference share 80-95%}. That's the calibrated shift.

---

## PART 4 — POSITION IMPLICATIONS PER HELD COHORT

| Ticker | Action | Rationale |
|---|---|---|
| HYNIX 20.6% | **WATCH (lean trim if HBC validates)** | Most HBM-leveraged. HBC bifurcation is 2028 risk; not actionable now but flag for monthly review. |
| KIOXIA 14.4% | **HOLD** | Orthogonal. |
| MRVL 5.9% | **WATCH (mild trim candidate)** | Two adjacent threats (QCOM custom ASIC + ARM royalty competition) now stacked. |
| SNDK 5.3% | **HOLD** | Orthogonal. |
| NBIS | **HOLD (positive option value flag)** | Could deploy QCOM racks if HBC TCO validates. |
| MU (if held) | **WATCH for upgrade** | LPDDR datacenter optionality just got a real customer signal. |
| Other AI cohort | **No action** | Power grid, cooling, robotics, auto unaffected. |

**Net portfolio action this signal alone:** None urgent. Two WATCH flags (HYNIX, MRVL) for monthly review.

---

## PART 5 — ANTI-CONFIRMATION-BIAS BEAR CASE (B22 MANDATORY)

**Steelmanned bear on Qualcomm Dragonfly:**

1. **Third time at bat.** QCOM has failed twice at datacenter (Centriq 2017, Nuvia acqui-hire integration). Track record: <$1B FY25 revenue from adjacent markets (Irrational Analysis substack).
2. **2028 is late.** NVDA Vera Rubin Ultra ships 2027; Rubin Next 2028. AMD MI400. Broadcom 4-chip Meta MTIA cadence. The 2028 window is crowded.
3. **HBC samples mid-2027.** That's 12 months for Samsung/SK Hynix/Micron to counter with HBM4E or HBM5 BW-per-W parity claims.
4. **"6x BW/W vs HBM" is workload-conditioned.** Marketing claim, not architecture-fundamental theorem.
5. **Modular at $4B paid 9 months after $1.6B private round** — 2.5x markup; QCOM may be overpaying for narrative.
6. **HBC requires LPDDR co-development with Samsung/Micron** — supply concentration risk.
7. **Stock pop is FY29 framing dependent** — $15B datacenter target is 3 years out; any execution slip and the $222 after-hours print compresses fast.

**Verdict:** Bear case is REAL but does not invalidate the cascade. It bounds the magnitude. The signal is: NVDA inference moat is no longer monotonically widening. The signal is NOT: NVDA loses datacenter.

---

## PART 6 — REGIME-CORRECTED PRIORS CHECK (B45)

- AI supercycle regime base rate: large-cap AI infra names sustain 10-20% pops on hyperscaler-deal news for weeks before mean-reverting.
- QCOM +13% after-hours on 2026-06-24 is **within normal regime distribution**, NOT exhaustion signal.
- Do not treat QCOM stock action as a contrarian short setup. Base rate suggests follow-through 1-3 weeks.
- Sell-side will upgrade FY29 estimates in next 5 trading days; consensus rerate is the dominant near-term flow.

---

## SOURCES CITED (tier-labeled)

### T1 (Primary / Issuer)
- [Qualcomm Press: AI200/AI250 Unveiled (Oct 2025)](https://www.qualcomm.com/news/releases/2025/10/qualcomm-unveils-ai200-and-ai250-redefining-rack-scale-data-cent)
- [Qualcomm Press: Humain Engineering Center (Nov 2025)](https://www.qualcomm.com/news/releases/2025/11/qualcomm-to-establish-ai-engineering-center-at-humain)
- [Qualcomm Dragonfly C1000 product page](https://www.qualcomm.com/data-center/products/qualcomm-dragonfly-c1000)
- [Bloomberg: Qualcomm Adds Meta as Customer](https://www.bloomberg.com/news/articles/2026-06-24/qualcomm-announces-new-ai-chips-adds-meta-as-customer)
- [Bloomberg: Modular Acquisition Confirmed](https://www.bloomberg.com/news/articles/2026-06-24/qualcomm-confirms-buying-modular-to-help-ai-market-push)
- [CNBC: QCOM Pops 15% on FY29 Doubling](https://www.cnbc.com/2026/06/24/qualcomm-data-center-cpu-meta.html)
- [CNBC: Modular Acquisition](https://www.cnbc.com/2026/06/24/qualcomm-ai-chip-modular-software.html)

### T1 (Trade press / authoritative tech)
- [ServeTheHome: Qualcomm Investor Day 2026 Full Coverage](https://www.servethehome.com/qualcomm-investor-day-2026-data-center-announcements-cpus-ai-accelerators-and-more/)
- [Tom's Hardware: HBC Architecture Deep Dive](https://www.tomshardware.com/tech-industry/artificial-intelligence/qualcomm-reveals-hbc-near-memory-ai-architecture-ai250-and-ai350-accelerators-touts-6x-higher-bandwidth-per-watt-compared-to-hbm-200x-capacity-compared-to-on-chip-sram)
- [DigiTimes: Qualcomm Dragonfly Data Center Push](https://www.digitimes.com/news/a20260625VL201/qualcomm-data-center-nvidia-meta-chips.html)
- [TheElec (Korean): Dragonfly Platform + Meta](https://www.thelec.net/news/articleView.html?idxno=11687)
- [TechNews TW (Taiwanese): HBC Memory Wall Analysis](https://technews.tw/2026/06/25/qualcomm-high-bandwidth-compute-tech/)
- [The Register: QCOM "Not Too Late" Claim](https://www.theregister.com/systems/2026/06/24/qualcomm-claims-its-not-too-late-for-dragonfly-to-land-in-datacenters/5261758)
- [Constellation Research: CPU + AI Roadmap](https://www.constellationr.com/insights/news/qualcomm-outlines-new-cpu-ai-accelerator-roadmap-inks-deal-meta)

### T2 (Synthesizer / Analyst)
- [Wccftech: HBC vs HBM Cascade](https://wccftech.com/qualcomm-hbc-stacks-compute-beneath-dram-to-smash-the-ai-memory-wall/)
- [Silicon Analysts: TSMC Foundry Allocation Q1 2026](https://siliconanalysts.com/analysis/foundry-allocation-status-q1-2026)
- [TrendForce: Samsung 2nm Yield 55-60%](https://www.trendforce.com/news/2026/04/14/news-samsung-2nm-yields-reportedly-at-55-below-mass-production-threshold-qualcomm-may-opt-for-tsmc/)
- [36Kr: CoWoS Capacity Allocation 2026](https://eu.36kr.com/en/p/3580962946874242)
- [Morgan Stanley via Jukan: NVDA 60% CoWoS](https://x.com/Jukanlosreve/status/1950102624164073553)
- [Astute Group: Advanced Packaging Demand](https://www.astutegroup.com/news/industrial/advanced-packaging-demand-soars-nvidia-secures-60-of-cowos-capacity/)
- [DigiTimes: Intel/Samsung GAA Yield Gap](https://www.digitimes.com/news/a20260102PD207/tsmc-2nm-intel-samsung-gaa.html)
- [S&P Global: Memory Shortage 60-70% Server DRAM Price Hikes](https://www.spglobal.com/market-intelligence/en/news-insights/research/2026/01/ai-memory-boom-squeezes-legacy-dram-supply-pushing-prices-higher)
- [Tom's Hardware: Samsung/SK Hynix Memory Shortage to 2027+](https://www.tomshardware.com/tech-industry/artificial-intelligence/samsung-and-sk-hynix-warn-ai-driven-memory-shortages-could-last-until-2027-and-beyond-as-hbm-demand-explodes-customers-already-reserving-supply-years-ahead-while-the-wider-dram-market-begins-to-tighten)
- [Wccftech: Intel 18A 14A Roadmap](https://winbuzzer.com/2026/03/17/intels-18a-14a-roadmap-2026-foundry-panther-lake-xcxwbn/)

### T2 (Chinese / Korean primary)
- [163.com: 高通 HBC 微软 Meta 150亿目标](https://www.163.com/dy/article/L08DLD8C05198NMR.html)
- [163.com: 高通五场战争](https://www.163.com/dy/article/L09KTLC705198NMR.html)
- [Sina Finance: 高通进军数据中心](https://finance.sina.com.cn/tech/shenji/2026-06-25/doc-inieqskx7881402.shtml)
- [TradingKey CN: Qualcomm Computex 2026](https://www.tradingkey.com/zh-hans/analysis/stocks/us-stock/261940714-qcom-computex-2026-dragonfly-nvad-tradingkey)
- [G-Enews KR: Qualcomm 2nm Samsung Variables](https://www.g-enews.com/article/Global-Biz/2026/05/202605100820503930fbbec65dfb_1)
- [Dealsite KR: ByteDance Qualcomm AI Chip](https://dealsitetv.com/articles/170991)

### T3 (Bear / Skeptic)
- [Irrational Analysis: "Qualcomm Is Out Of Time"](https://irrationalanalysis.substack.com/p/qualcomm-is-out-of-time)
- [24/7 Wall St: QCOM/MRVL Custom Silicon Slide](https://247wallst.com/investing/2026/06/09/qualcomm-drops-8-on-bytedance-asic-deal-marvell-falls-10-as-custom-silicon-stocks-slide/)

---

## SUMMARY FOR PARENT AGENT

1. **The "1nm" hook is wrong.** This is an HBC memory-architecture + hyperscaler-defection story, not a foundry-node story.
2. **Largest cascade lever:** HBC vs HBM bifurcation (2028+). Bearish-relative for HYNIX (HBM concentration), mildly bullish for LPDDR-exposed memory and FCBGA-organic substrate names.
3. **Second-largest lever:** Meta + MSFT + Humain as anchor customers = NVDA inference monopoly thesis weakened (NOT broken) on the 2028 horizon.
4. **Third lever:** Modular acquisition = first credible anti-CUDA software stack with hyperscaler reference.
5. **What's NOT impacted:** TSMC N2 base case, CoWoS-L bottleneck, NAND market, power-grid thesis, liquid cooling thesis, edge Snapdragon, auto, medical.
6. **Position actions:** WATCH HYNIX and MRVL for monthly review. No urgent action. Bear-case (B22) bounds magnitude but doesn't invalidate signal.
7. **Regime check (B45):** QCOM +13% AH is regime-normal, NOT exhaustion. Sell-side rerate likely next 5 trading days.
