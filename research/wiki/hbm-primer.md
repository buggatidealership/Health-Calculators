# HBM Primer — High Bandwidth Memory as the Binding Constraint on AI Compute

**Last updated:** 2026-05-20
**Type:** Reference primer (pure supply-demand-bypass analysis, no price targets per scoping decision)
**Question being answered:** Through end-2027, will HBM3E + HBM4 supply at acceptable per-stack cost bind the deployment rate of AI inference clusters? If yes, for how long? If bypassed, by which substitution route, and on what timeline?

---

## TL;DR

HBM is structurally undersupplied through end-2027. All three suppliers (SK Hynix, Samsung, Micron) report 2026 capacity sold out ([Micron via TrendForce](https://www.trendforce.com/news/2025/12/18/news-micron-hikes-capex-to-20b-with-2026-hbm-supply-fully-booked-hbm4-ramps-2q26/), [SK Hynix via Tom's Hardware reporting](https://www.tomshardware.com/pc-components/ram/hbm-is-eating-your-ram), [SK Hynix Q1 2026 earnings via CNBC](https://www.cnbc.com/2026/04/23/sk-hynix-earnings-ai-memory-shortage-hbm-demand.html)). Demand grows ~77% YoY in 2026 and ~68% YoY in 2027 per [TrendForce](https://www.trendforce.com/news/2025/11/13/news-hbm4e-seen-hitting-40-of-2027-market-samsung-sk-hynix-reportedly-aim-for-1h26-completion/). The HBM4 transition (Samsung qualified at NVDA Q1 2026, Micron ramps Q2 2026, SK Hynix HBM4E samples 2H 2026 / mass production 2027) adds capacity but is consumed by demand growth — supply remains tight.

**The binding constraint mechanism:** HBM consumes ~3–4× the wafer area per gigabyte vs standard DRAM (per [SemiAnalysis-derived analysis via Tom's Hardware](https://www.tomshardware.com/pc-components/ram/hbm-is-eating-your-ram)). Memory suppliers cannot expand DRAM wafer capacity fast enough — fab construction takes ~18–24 months. AI is on track to consume ~20% of global DRAM wafer capacity in 2026 ([TrendForce](https://www.trendforce.com/news/2025/12/26/news-ai-reportedly-to-consume-20-of-global-dram-wafer-capacity-in-2026-hbm-gddr7-lead-demand/)) — crowding out commodity DRAM and creating an across-the-stack memory squeeze.

**Bypass routes exist but won't materially relieve before 2027:** CXL memory pooling (Astera Labs / ALAB shipping into Microsoft Azure M-series, Q1 2026 revenue $308.4M +93% YoY per [Astera IR](https://ir.asteralabs.com/news-releases/news-release-details/astera-labs-reports-first-quarter-2026-financial-results)), MoE architectures reducing per-inference memory (architectural, slower diffusion), HBM4E generation (more capacity per stack but supply-constrained itself).

**Investable conclusion (no price targets):** HBM thesis remains intact through at least end-2027 across all three memory suppliers. The bypass routes (ALAB specifically) are an under-priced second-derivative play that the held SK Hynix position does not capture. Silicon wafer producers (Shin-Etsu, SUMCO) sit beneath all of this as the substrate constraint — the deepest layer of the supply chain.

---

## 1. What HBM Is, Physically

HBM (High Bandwidth Memory) is DRAM dies stacked vertically, connected with through-silicon vias (TSVs), and placed directly adjacent to the GPU on a silicon interposer via advanced packaging (TSMC CoWoS-L for the highest-end). The architectural distinction from commodity DDR DRAM is *radically* wider memory buses — 1024-bit for HBM3E, 2048-bit for HBM4 — which deliver bandwidth orders of magnitude above DDR at the cost of much higher manufacturing complexity.

### HBM3E specifications (per [Siemens design guide](https://blogs.sw.siemens.com/semiconductor-packaging/2026/04/24/hbm3e-hbm4-ic-design-guide/), [Kynix](https://www.kynix.com/Blog/hbm3e-vs-hbm4-2026-specs-performance--supply-guide.html), [Mozelectronics](https://mozelectronics.com/tutorials/hbm3e-vs-hbm4-comparison/))

| Spec | Value |
|---|---|
| Stack height | Up to 12-Hi (12 DRAM layers per stack) |
| Capacity per stack | 36 GB (at 12-Hi configuration) |
| Bandwidth per stack | 1.2–1.28 TB/s |
| Pin speed | 9.2–9.8 Gbps |
| Interface width | 1024-bit |
| Voltage | 1.1V |

### HBM4 specifications (per [Siemens design guide](https://blogs.sw.siemens.com/semiconductor-packaging/2026/04/24/hbm3e-hbm4-ic-design-guide/), [Blocks and Files](https://www.blocksandfiles.com/hci/2026/01/28/high-bandwidth-memory-v4-supply-takes-shape/4090314))

| Spec | Value |
|---|---|
| Stack height | Up to 16-Hi normalized |
| Capacity per stack | Up to 64 GB (16-Hi with 32Gb layers) |
| Bandwidth per stack | >2.0 TB/s (up to 3.3 TB/s in advanced configs); Rubin reportedly >3.0 TB/s per stack at >11 Gbps per pin per [VideoCardz](https://videocardz.com/newz/nvidia-vera-rubin-nvl72-detailed-72-gpus-36-cpus-260-tb-s-scale-up-bandwidth) |
| Pin speed | Up to 12.8 Gbps (Samsung demonstrated 13 Gbps per Mozelectronics) |
| Interface width | 2048-bit (2× HBM3E) |
| Channels | 32 independent / 64 pseudo-channels |
| Voltage | 1.05V (60% efficiency improvement vs HBM2/2E per Mozelectronics) |
| JEDEC standard | JESD270-4, published April 2025 (per Siemens) |

**The key bandwidth math (my model, derived from cited specs):** an HBM4 stack at ~3.0 TB/s is roughly 2.5× the bandwidth of an HBM3E stack at ~1.2 TB/s. For a fixed number of stacks per GPU (typically 8), this means HBM4 enables a similar 2.5× total bandwidth uplift per GPU — which is exactly what Rubin's 22+ TB/s aggregate vs Blackwell's 8 TB/s reflects.

---

## 2. The Supply Side — Three Producers

The HBM market has only three suppliers globally with the technology to produce at scale. All three report 2026 sold out.

### SK Hynix (the dominant supplier)

**Q1 2026 disclosures** (per [SK Hynix press release](https://www.prnewswire.com/news-releases/sk-hynix-announces-1q26-financial-results-302750959.html), [BigGo Finance](https://finance.biggo.com/news/KR_000660.KS_2026-04-23), [CNBC](https://www.cnbc.com/2026/04/23/sk-hynix-earnings-ai-memory-shortage-hbm-demand.html)):
- Q1 2026 revenue: 52.1 trillion won (+144% YoY)
- Operating margin: 72%
- **Critical signal:** "customer requests for high-bandwidth memory already exceed [SK Hynix's] planned production capacity for the next three years" (per CNBC quoting earnings call)

**Capacity expansion** (per [NineScrolls](https://ninescrolls.com/news/sk-hynix-q1-2026-record-52-6-trillion-won-revenue-72-operating-margin-m15x-fab)):
- M15X fab in Cheongju: 19 trillion won investment, dedicated to advanced DRAM + HBM output
- Yongin Cluster fab: completion accelerated to February 2027
- HBM4E samples: 2H 2026
- HBM4E mass production: 2027 (core die using 1c-nanometer technology)

**My read:** SK Hynix's "customer requests exceed 3 years of planned capacity" disclosure is the single most important signal in the HBM market. It explicitly says supply will not catch demand at current expansion pace through at least 2028. This is the structural read backing the bottleneck thesis.

### Samsung (the catching-up challenger)

**HBM4 qualification status** (per [Bloomberg](https://www.bloomberg.com/news/articles/2026-01-26/samsung-nears-nvidia-s-approval-for-key-hbm4-ai-memory-chips), [SamMobile](https://www.sammobile.com/news/samsungs-hbm4-chips-have-reportedly-passed-nvidias-tests-with-flying-colors/), [TrendForce](https://www.trendforce.com/news/2026/01/26/news-samsung-reportedly-set-to-begin-official-hbm4-shipments-to-nvidia-and-amd-in-february/)):
- Samsung HBM4 passed both NVDA and AMD final qualification tests (Q1 2026)
- Official HBM4 shipments to NVDA and AMD began February 2026
- HBM4 delivered immediately to NVDA for Rubin demo at GTC 2026 (March)

**Capacity allocation** (per [Semicone](https://www.semicone.com/article-345.html)):
- Samsung allocating up to 150,000 wafers per month of 1c DRAM capacity to HBM4 by end-2026
- Breakdown: ~80,000 wpm of fresh 1c capacity + conversion of portions of older DRAM lines

**My read:** Samsung is the swing factor in the supply equation. Their HBM4 qualification was a real risk going into 2026 (they had failed multiple HBM3E qualifications earlier). Passing both NVDA and AMD qualifications + starting shipments matters because it adds the meaningful third source of HBM4 supply. But even at 150K wpm by end-2026, this is a fraction of total demand — not a supply unlock.

### Micron (the US-based growing share)

**Capacity + supply status** (per [TrendForce](https://www.trendforce.com/news/2025/12/18/news-micron-hikes-capex-to-20b-with-2026-hbm-supply-fully-booked-hbm4-ramps-2q26/), [Tweaktown](https://www.tweaktown.com/news/103333/micron-to-begin-mass-production-of-12-Hi-hbm3e-next-gen-hbm4-ships-in-2026-ready-for-nvidia/index.html), [Digitimes](https://www.digitimes.com/news/a20260115PD227/micron-2026-shipments-hbm-hbm4.html)):
- Micron 2026 HBM supply: fully booked (HBM3E + HBM4 combined)
- HBM4 ramps in volume Q2 2026
- 12-Hi HBM3E mass production underway (~20% less power, 50% more capacity vs prior gen per Tweaktown)
- Q2 2025 HBM share: ~21% (second largest, behind SK Hynix per Tweaktown / Motley Fool reporting)
- FY 2026 capex: hiked to $20B

**My read:** Micron is the "geopolitically clean" memory play — US-listed, US fabs (Idaho expansion), structurally underweighted in most AI memory baskets. Their HBM4 ramp in Q2 2026 + a 2026 fully-booked book matters for total industry supply but doesn't change the binding nature of the constraint at the system level.

### Combined supply picture (my synthesis from above)

All three suppliers are running at maximum capacity through 2026. The HBM4 transition is happening NOW (Q1–Q2 2026). New capacity (SK Hynix Yongin, Samsung 150K wpm, Micron's capex hike) starts contributing meaningfully from late 2026 / early 2027. This new capacity is **already pre-committed** — Micron's entire 2026 HBM supply is booked, SK Hynix has customer requests beyond 3 years of planned capacity.

The structural read: HBM supply through 2027 grows fast but **not faster than demand**. The constraint persists.

---

## 3. The Demand Side — Per-GPU HBM Consumption

To verify the constraint is binding, I need to model demand from the customer side. Below: HBM consumption per GPU/chip across the major AI accelerators.

### NVIDIA Blackwell + Rubin (per [VideoCardz](https://videocardz.com/newz/nvidia-blackwell-ultra-gb30-features-20480-cuda-cores-288gb-hb3e-memory-and-pcie-gen6), [Introl](https://introl.com/blog/nvidia-blackwell-ultra-b300-infrastructure-requirements-2025), [Tom's Hardware](https://www.tomshardware.com/pc-components/gpus/nvidia-launches-vera-rubin-nvl72-ai-supercomputer-at-ces-promises-up-to-5x-greater-inference-performance-and-10x-lower-cost-per-token-than-blackwell-coming-2h-2026))

| Chip | HBM type | Stacks | Per-stack capacity | Total HBM | Total bandwidth |
|---|---|---|---|---|---|
| GB200 | HBM3E | 8 | 24 GB (8-Hi) | 192 GB | 8 TB/s |
| GB300 | HBM3E | 8 | 36 GB (12-Hi) | 288 GB | 8 TB/s |
| Rubin R200 | HBM4 | 8 | 36 GB | 288 GB | >22 TB/s (per Tom's Hardware) |

### AMD MI Series (per [AMD product page](https://www.amd.com/en/products/accelerators/instinct/mi350.html), [Tom's Hardware on MI350P](https://www.tomshardware.com/pc-components/gpus/amd-announces-mi350p-pcie-ai-accelerator-card-with-144gb-of-hbm3e-roughly-40-percent-faster-in-fp16-and-fp8-theoretical-compute-compared-to-nvidias-h200-nvl-competitor), [StorageReview](https://www.storagereview.com/news/from-mi350-to-mi500-amds-bold-ai-accelerator-roadmap-through-2027))

| Chip | HBM type | Stacks | Per-stack | Total HBM | Bandwidth |
|---|---|---|---|---|---|
| MI350X/MI355X | HBM3E | 8 | 36 GB (12-Hi) | 288 GB | 8 TB/s |
| MI350P (PCIe) | HBM3E | — | — | 144 GB | 4 TB/s |
| MI400 (in dev) | HBM4 | — | — | up to 432 GB | (not disclosed) |

### Hyperscaler custom silicon (per [Uncover Alpha on Trainium](https://www.uncoveralpha.com/p/amazon-trainium-scaling-ai-without-breaking-the-bank), [Hyperframe Research on TPU](https://hyperframeresearch.com/2026/04/22/google-cloud-next-2026-google-cloud-bifurcates-the-ai-future-specialized-tpu-8t-and-8i-architectures-signal-the-end-of-general-purpose-silicon/), [Introl on custom silicon](https://introl.com/blog/custom-silicon-inflection-2026-hyperscaler-asics-nvidia-gpu))

| Chip | HBM | Status |
|---|---|---|
| AWS Trainium 3 | 144 GB HBM3E (12-Hi), 4.9 TB/s | Shipping |
| Google TPU 8t / 8i (Ironwood) | HBM (capacity not disclosed publicly) | Shipping at Google Cloud Next 2026 |
| Microsoft Maia 200 | HBM | Shipping |
| Meta MTIA | HBM | Shipping |
| Total AWS custom Si business | >$20B annualized, growing triple-digits YoY | Per Amazon disclosure (per Introl) |

**Key second-derivative point:** OpenAI has committed to ~2 GW of Trainium capacity through AWS (per Introl), ramping 2027. That's a NON-NVDA HBM demand stream that has been under-modeled. Custom Si ASICs as a category grow at ~44.6% CAGR (per Introl/Hyperframe Research), and ALL of these chips consume HBM.

### Demand growth — the aggregate picture

From [TrendForce](https://www.trendforce.com/news/2025/11/13/news-hbm4e-seen-hitting-40-of-2027-market-samsung-sk-hynix-reportedly-aim-for-1h26-completion/) and [TrendForce on DRAM share](https://www.trendforce.com/news/2025/12/26/news-ai-reportedly-to-consume-20-of-global-dram-wafer-capacity-in-2026-hbm-gddr7-lead-demand/):
- HBM demand growth: +77% YoY in 2026, +68% YoY in 2027
- HBM + GDDR7 combined will consume ~20% of global DRAM wafer capacity in 2026
- HBM4E expected to be ~40% of total 2027 HBM market

**My read on the demand-supply balance:** All three suppliers reporting sold-out, plus +77%/+68% demand growth, plus custom-Si demand (Trainium 3 alone needs significant HBM allocation) — these three signals triangulate cleanly. Supply is not catching demand at any point through 2027.

---

## 4. The Wafer-Cost Dynamic — Why Supply Can't Expand Fast Enough

This is the deepest structural piece of the bottleneck. Adding capacity to one type of memory comes at the cost of another.

### The wafer arithmetic

HBM consumes ~3–4× more wafer area per gigabyte than standard DDR DRAM (per [Tom's Hardware analysis](https://www.tomshardware.com/pc-components/ram/hbm-is-eating-your-ram), drawing on industry data from SemiAnalysis and others). The mechanism:
- HBM uses larger die size per GB due to TSV channels and stacking overhead
- Yield drops with stack height (12-Hi has lower yield than 8-Hi; 16-Hi lower still)
- Significant capacity consumed by test, assembly, and packaging overhead

**Implication:** Every wafer that producers allocate to HBM is 3–4 wafers' worth of "standard DRAM equivalent." Producers WILL allocate to HBM because per-GB pricing is much higher and operating margin is ~3–4× that of commodity DRAM. But there's an upper limit on how fast total DRAM wafer capacity can grow — fab construction takes 18–24 months minimum (per industry knowledge — not from a specific source, my inference based on standard semiconductor fab construction timelines).

### The crowding-out effect

[IDC](https://www.idc.com/resource-center/blog/global-memory-shortage-crisis-market-analysis-and-the-potential-impact-on-the-smartphone-and-pc-markets-in-2026/) reports 2026 DRAM supply growth at ~16% YoY and NAND at ~17% YoY — below historical norms. This is because suppliers are pivoting wafer capacity to HBM. The downstream effect: smartphone and PC DRAM prices rise materially, smartphone shipments potentially face supply constraint.

[SemiAnalysis analysis (via Futunn)](https://news.futunn.com/en/post/70104367/the-hottest-chip-research-institute-semianalysis-founder-computational-power-bottleneck): 30% of hyperscaler capital expenditure in 2026 will be absorbed by memory-related costs. That's a massive share — confirms HBM's role as a primary capex line item.

### The silicon wafer substrate layer

Beneath HBM sits the silicon wafer supply itself. Per [Tom's Hardware](https://www.tomshardware.com/pc-components/ram/hbm-is-eating-your-ram), the wafer market is dominated by:
- Shin-Etsu Chemical (largest)
- SUMCO
- GlobalWafers
- SK Siltron
- Siltronic AG

These five producers supply the silicon wafers from which all DRAM (including HBM) is fabricated. SUMCO announced ceasing wafer production at its Miyazaki plant by end-2026 (per [Digitimes](https://www.digitimes.com/news/a20250210PD236/sumco-silicon-wafer-production-plant-demand.html)) as part of product-mix optimization. The silicon wafer layer is itself supply-constrained as memory production demands climb.

**Implication:** The HBM bottleneck has a wafer-level layer beneath it. If wafer supply tightens, ALL DRAM (HBM and commodity) supply tightens together. This is why SUMCO + Shin-Etsu are interesting picks-and-shovels names (already in watchlist).

---

## 5. The HBM4 Transition — The Key Next-12-Month Dynamic

The HBM3E → HBM4 transition is happening RIGHT NOW. It matters because:
1. HBM4 doubles per-stack bandwidth, partially relieving system-level bandwidth pressure
2. HBM4 introduces new yield/qualification dynamics that disrupt the supplier ranking
3. The transition pace affects supply-demand balance for next 12–18 months

### Timeline (aggregated from cited sources above)

| Date | Event |
|---|---|
| Feb 2026 | Samsung HBM4 official shipments begin to NVDA + AMD |
| Mar 2026 | NVDA Rubin demo at GTC 2026 using Samsung HBM4 |
| Q2 2026 | Micron HBM4 ramps in volume |
| 2H 2026 | SK Hynix HBM4E samples to customers |
| End 2026 | Samsung 1c DRAM HBM4 allocation reaches 150K wpm |
| 2027 | SK Hynix HBM4E mass production starts |
| 2027 | HBM4E reaches ~40% of total HBM market (per TrendForce) |

### What the transition means for the constraint

HBM4 adds capacity to the market — but it ADDS capacity, doesn't replace HBM3E (HBM3E continues shipping into Blackwell GB300 and AMD MI350 series). The transition is additive, not substitutive, through at least 2027.

The supply equation: HBM3E baseline (sold out) + HBM4 incremental capacity (already pre-committed to Rubin + AMD MI400 + new hyperscaler designs). The "newly-available" capacity from HBM4 is mostly *promised* — it doesn't relieve the existing constraint.

---

## 6. Bypass Routes — Time-to-X Analysis

Per the Time-to-X framework (`meta/time-to-x-framework.md`), the consumer's TRUE sensitivity is **time-to-bandwidth-per-dollar at production scale**. Five bypass routes exist:

### Bypass 1 — CXL memory pooling (the most credible near-term bypass)

CXL (Compute Express Link) allows memory to be POOLED across systems and dynamically allocated to compute. Instead of each GPU needing maximum HBM on its package, a smaller HBM per GPU + CXL pool can deliver equivalent effective bandwidth at the cluster level.

**Status:** mass deployment beginning 2026, per [Astera Labs Q1 2026 earnings call](https://www.fool.com/earnings/call-transcripts/2026/05/05/astera-labs-alab-q1-2026-earnings-transcript/).

**Investable plays:**
- **Astera Labs (ALAB)** — Leo memory controller ramping into Microsoft Azure M-series VMs. Q1 2026 revenue $308.4M (+93% YoY), beat consensus $292.2M. Non-GAAP gross margin 76.4% (per [Astera Labs IR](https://ir.asteralabs.com/news-releases/news-release-details/astera-labs-reports-first-quarter-2026-financial-results)). Q2 2026 guide $355–365M vs consensus $310.3M. New customer design for KV cache offload (specifically an agentic-AI use case).
- **Marvell (MRVL)** — CXL devices, custom networking, memory-controller portfolio. Multi-theme exposure.

**Time-to-relief assessment:** CXL adoption is real and scaling NOW. But it's a software-architecture transition — enterprises move slowly. My estimate: meaningful relief to HBM demand from CXL is a 2027–2028 story, not 2026 (my inference based on adoption curve seen at ALAB Azure ramp + typical enterprise infrastructure migration timelines).

### Bypass 2 — MoE (Mixture-of-Experts) architectures

Modern frontier models increasingly use MoE: only a fraction of parameters are activated per inference token. This reduces per-inference memory footprint without reducing model capability.

**Status:** Already adopted in many frontier models (Claude, Gemini, DeepSeek, others). Diffusion across all model providers is in progress.

**Time-to-relief assessment:** Architectural. Diffusion already happening but hard to quantify the per-inference memory reduction in aggregate (my estimate: ~20–40% reduction in active-parameter memory, but TOTAL model memory still needed for routing; (hypothetical scenario) net memory consumption reduction in the 10–25% range over 2026–2027). Affects demand-side meaningfully but doesn't fully bypass.

### Bypass 3 — Larger on-die SRAM (Cerebras-style WSE, Groq-style LPU)

Some specialized AI silicon uses massive SRAM caches instead of HBM. Cerebras WSE-3 has 44 GB of SRAM on a single wafer-scale chip; Groq LPUs use SRAM-heavy architectures.

**Status:** Niche but real. Mostly private companies; limited public investable exposure.

**Time-to-relief assessment:** Niche workloads only. Cerebras + Groq + SambaNova combined represent perhaps low single-digit percent of inference compute (my estimate — not from a specific source, hypothetical). Not a material bypass for the bulk of AI compute.

### Bypass 4 — HBM4E generation (the next-gen relief)

HBM4E (8th generation, samples from SK Hynix 2H 2026, mass production 2027) offers more capacity per stack and improved efficiency. Each HBM4E stack delivers more total memory than HBM4 at the same package real estate.

**Status:** SK Hynix samples 2H 2026. ~40% of 2027 HBM market per TrendForce.

**Time-to-relief assessment:** Late 2027 / 2028. By the time HBM4E ramps meaningfully, demand will have grown another +68% YoY (per TrendForce 2027 estimate). Adds capacity but does not change the constraint mechanism.

### Bypass 5 — Custom HBM stacks (the hyperscaler in-house approach)

Hyperscalers are reportedly working on customized HBM stack architectures (per [FinancialContent](https://markets.financialcontent.com/wral/article/tokenring-2026-1-16-the-death-of-commodity-memory-how-custom-hbm4-stacks-are-powering-nvidias-rubin-revolution)) — bespoke memory subsystems for their custom Si. NVDA's Rubin uses such a custom HBM4 configuration.

**Status:** Emerging. Specific to NVDA + a few hyperscaler designs.

**Time-to-relief assessment:** Doesn't relieve overall HBM constraint — it just changes WHO gets allocation. The hyperscalers with custom HBM relationships (via AVGO, MRVL) get preferential supply; others compete for what's left.

---

## 7. Investable Names, Mapped to the Supply Chain

Ranked by directness of HBM exposure.

### Tier 1 — Direct HBM suppliers (the obvious play)

| Name | Position in stack | Anti-fragility note |
|---|---|---|
| **SK Hynix** (held position, ~12.5% of portfolio per `research/portfolio/holdings.md`) | Primary supplier, ~50%+ share | Wins in S1 (NVDA dominant), S2 (custom Si fragments — they still supply everyone), S3 (power binds — memory becomes premium). Loses meaningfully only in S4 (digestion) where the cycle turns. The "you don't escape HBM" name. |
| **Micron (MU)** | US-based, ~21% share growing | Cleanest geopolitically. 2026 fully booked. HBM4 ramps Q2. Watchlist candidate per `research/watchlist/candidates.md`. |
| **Samsung Electronics** | ~30% share, HBM4 newly qualified | Broader business — memory is one segment. Less HBM-pure than SK Hynix or MU. |

### Tier 2 — Coupled packaging (HBM is meaningless without packaging)

| Name | Position in stack |
|---|---|
| **TSMC (TSM)** | CoWoS-L packaging is the only path for highest-end HBM-coupled GPUs. HBM and CoWoS are inseparable bottlenecks. |
| **ASE Tech (ASX), Amkor (AMKR)** | OSAT alternatives, can absorb some volume that doesn't fit at TSMC. Watchlist for the bypass-route framing. |

### Tier 3 — Bypass routes (the under-priced angle)

| Name | Bypass route |
|---|---|
| **Astera Labs (ALAB)** | CXL memory pooling — Q1 2026 revenue $308.4M (+93% YoY) per Astera IR. Microsoft Azure M-series ramp. Watchlist promote candidate. |
| **Marvell (MRVL)** | CXL devices, custom networking, custom Si partner for hyperscalers. Multi-route exposure. |

### Tier 4 — Substrate layer (the deepest pick-and-shovels)

| Name | Position in stack |
|---|---|
| **Shin-Etsu Chemical** | Largest silicon wafer producer globally. Every HBM stack uses Shin-Etsu wafers. Watchlist per `research/watchlist/candidates.md`. |
| **SUMCO** | Second-largest wafer producer. Same exposure. Watchlist. |

### Tier 5 — HBM consumers (indirect / not pure plays)

| Name | Exposure |
|---|---|
| **NVDA, AMD** | Buyers of HBM. Their GPU economics include HBM cost pass-through. Not a pure HBM play. |
| **AVGO** | Custom Si partner for Google TPU; participates in custom HBM relationships. Watchlist. |
| **Sandisk (held position)** | NAND not HBM, but adjacent memory dynamics. Different cycle, may move in sympathy on the broader memory squeeze (my read). |

---

## 8. Falsifiers — What Would Prove the HBM Constraint Thesis Wrong

Three specific, testable conditions:

### F1 — Samsung HBM4 allocation accelerates faster than modeled
If Samsung captures >40% of NVDA's HBM4 allocation by Q3 2026 (well above their current shipment ramp), supply tightness eases faster than the bottoms-up supply model implies. This would compress the per-stack pricing power that supports the SK Hynix bull case.

### F2 — Major MoE architecture diffusion reduces per-inference HBM demand
If the published frontier-model technical reports show ≥40% reduction in average HBM consumption per inference token over the next 6 months (vs current MoE state), the demand curve flattens enough that the +77% 2026 / +68% 2027 growth estimates become aggressive.

### F3 — AI capex pause / S4 scenario plays
If Microsoft, Google, Meta, Amazon collectively guide 2027 capex at <20% YoY growth (vs the ~+77% 2026 implied by current capex trajectory), the demand growth assumption breaks. This is the S4 scenario in `research/sector/scenarios.md` — a digestion year.

---

## 9. Open Questions (What I Couldn't Verify, What's Genuinely Opaque)

1. **Private supplier-customer HBM allocations.** SK Hynix's specific NVDA / AMD / hyperscaler split is not public. Same for Samsung and Micron. The aggregate "all sold out" signal is public; the per-customer detail is not.

2. **Yield rates on 12-Hi and 16-Hi HBM stacks.** Higher stack heights have lower yields. The actual yield trajectory at each supplier is proprietary. My supply model assumes yields are at "industry standard" but the truth may deviate materially in either direction.

3. **HBM4E pricing dynamics in 2027.** SemiAnalysis suggests customers may need to pay significantly higher prices than current contracted levels to secure incremental HBM supply (per Futunn). The actual 2027 pricing reset is a binary event that materially affects supplier economics.

4. **Custom HBM stacks at hyperscalers.** AVGO's role in custom HBM relationships with hyperscalers is reported but not fully disclosed. The economics of custom HBM (margin to AVGO vs to memory supplier) is opaque.

5. **Silicon wafer supply tightness pass-through to HBM.** Whether Shin-Etsu / SUMCO can keep up with combined HBM + DRAM + foundry wafer demand is genuinely uncertain. The substrate layer beneath HBM may itself become binding before HBM4E ramps.

---

## 10. Implications for the Portfolio (Connection Points)

Direct implications for held positions and watchlist names:

- **SK Hynix (held, ~12.5%)** — thesis intact. The "customer requests exceed 3-year capacity" signal from Q1 2026 earnings call is the strongest confirmation I've seen. Multiple already expanded (per Q1 2026 +144% revenue), so this is a Stage 3–4 recognition name. The bull case requires HBM4E pricing power to come through in 2027.
- **Bypass route gap** — your portfolio does not have ALAB (CXL play). At Q1 2026 revenue +93% YoY and Q2 guide well above consensus, this is a name that should sit at minimum on watchlist with active research. Promote to deep-research candidate.
- **Wafer substrate gap** — Shin-Etsu and SUMCO already in watchlist per the user's earlier surfacing. The HBM primer confirms their importance — they sit beneath every HBM stack regardless of which memory supplier wins the customer.
- **Sandisk adjacency** — NAND is different from HBM, different cycle, but operates in the broader memory squeeze. Demand for inference-tier persistent storage benefits from same agentic-AI thesis. Worth modeling separately in Pass 2.

---

## Sources

### SK Hynix
- [Q1 2026 press release — PR Newswire](https://www.prnewswire.com/news-releases/sk-hynix-announces-1q26-financial-results-302750959.html)
- [Q1 2026 results coverage — CNBC](https://www.cnbc.com/2026/04/23/sk-hynix-earnings-ai-memory-shortage-hbm-demand.html)
- [Q1 2026 detail — BigGo Finance](https://finance.biggo.com/news/KR_000660.KS_2026-04-23)
- [M15X fab + Yongin Cluster — NineScrolls](https://ninescrolls.com/news/sk-hynix-q1-2026-record-52-6-trillion-won-revenue-72-operating-margin-m15x-fab)

### Samsung HBM4
- [HBM4 qualification — Bloomberg](https://www.bloomberg.com/news/articles/2026-01-26/samsung-nears-nvidia-s-approval-for-key-hbm4-ai-memory-chips)
- [HBM4 shipments to NVDA + AMD — TrendForce](https://www.trendforce.com/news/2026/01/26/news-samsung-reportedly-set-to-begin-official-hbm4-shipments-to-nvidia-and-amd-in-february/)
- [Samsung HBM4 NVDA tests passed — SamMobile](https://www.sammobile.com/news/samsungs-hbm4-chips-have-reportedly-passed-nvidias-tests-with-flying-colors/)
- [Samsung 1c DRAM capacity allocation — Semicone](https://www.semicone.com/article-345.html)

### Micron
- [Micron 2026 supply booked + HBM4 ramp — TrendForce](https://www.trendforce.com/news/2025/12/18/news-micron-hikes-capex-to-20b-with-2026-hbm-supply-fully-booked-hbm4-ramps-2q26/)
- [Micron 12-Hi HBM3E mass production — Tweaktown](https://www.tweaktown.com/news/103333/micron-to-begin-mass-production-of-12-Hi-hbm3e-next-gen-hbm4-ships-in-2026-ready-for-nvidia/index.html)
- [Micron 2026 shipments mainstream node — Digitimes](https://www.digitimes.com/news/a20260115PD227/micron-2026-shipments-hbm-hbm4.html)

### HBM technical specs
- [HBM3E vs HBM4 design guide — Siemens](https://blogs.sw.siemens.com/semiconductor-packaging/2026/04/24/hbm3e-hbm4-ic-design-guide/)
- [HBM3E vs HBM4 specs — Kynix](https://www.kynix.com/Blog/hbm3e-vs-hbm4-2026-specs-performance--supply-guide.html)
- [HBM4 specs — Mozelectronics](https://mozelectronics.com/tutorials/hbm3e-vs-hbm4-comparison/)
- [HBM4 supply taking shape — Blocks and Files](https://www.blocksandfiles.com/hci/2026/01/28/high-bandwidth-memory-v4-supply-takes-shape/4090314)

### Customer side
- [GB300 specs — VideoCardz](https://videocardz.com/newz/nvidia-blackwell-ultra-gb30-features-20480-cuda-cores-288gb-hb3e-memory-and-pcie-gen6)
- [Blackwell Ultra infrastructure — Introl](https://introl.com/blog/nvidia-blackwell-ultra-b300-infrastructure-requirements-2025)
- [Rubin NVL72 detailed — VideoCardz](https://videocardz.com/newz/nvidia-vera-rubin-nvl72-detailed-72-gpus-36-cpus-260-tb-s-scale-up-bandwidth)
- [Rubin launch — Tom's Hardware](https://www.tomshardware.com/pc-components/gpus/nvidia-launches-vera-rubin-nvl72-ai-supercomputer-at-ces-promises-up-to-5x-greater-inference-performance-and-10x-lower-cost-per-token-than-blackwell-coming-2h-2026)
- [AMD MI350 product page — AMD](https://www.amd.com/en/products/accelerators/instinct/mi350.html)
- [AMD MI350P PCIe — Tom's Hardware](https://www.tomshardware.com/pc-components/gpus/amd-announces-mi350p-pcie-ai-accelerator-card-with-144gb-of-hbm3e-roughly-40-percent-faster-in-fp16-and-fp8-theoretical-compute-compared-to-nvidias-h200-nvl-competitor)
- [AMD roadmap MI350→MI500 — StorageReview](https://www.storagereview.com/news/from-mi350-to-mi500-amds-bold-ai-accelerator-roadmap-through-2027)
- [AWS Trainium economics — Uncover Alpha](https://www.uncoveralpha.com/p/amazon-trainium-scaling-ai-without-breaking-the-bank)
- [Google TPU 8t/8i — Hyperframe Research](https://hyperframeresearch.com/2026/04/22/google-cloud-next-2026-google-cloud-bifurcates-the-ai-future-specialized-tpu-8t-and-8i-architectures-signal-the-end-of-general-purpose-silicon/)
- [Custom silicon inflection — Introl](https://introl.com/blog/custom-silicon-inflection-2026-hyperscaler-asics-nvidia-gpu)

### Market sizing / wafer dynamics
- [HBM4E market share + supply consolidation — TrendForce](https://www.trendforce.com/news/2025/11/13/news-hbm4e-seen-hitting-40-of-2027-market-samsung-sk-hynix-reportedly-aim-for-1h26-completion/)
- [AI consuming 20% DRAM wafer capacity — TrendForce](https://www.trendforce.com/news/2025/12/26/news-ai-reportedly-to-consume-20-of-global-dram-wafer-capacity-in-2026-hbm-gddr7-lead-demand/)
- [HBM eating PC RAM — Tom's Hardware](https://www.tomshardware.com/pc-components/ram/hbm-is-eating-your-ram)
- [Global memory shortage — IDC](https://www.idc.com/resource-center/blog/global-memory-shortage-crisis-market-analysis-and-the-potential-impact-on-the-smartphone-and-pc-markets-in-2026/)
- [SemiAnalysis bottleneck analysis — Futunn](https://news.futunn.com/en/post/70104367/the-hottest-chip-research-institute-semianalysis-founder-computational-power-bottleneck)
- [SUMCO Miyazaki closure — Digitimes](https://www.digitimes.com/news/a20250210PD236/sumco-silicon-wafer-production-plant-demand.html)

### Bypass routes
- [Astera Labs Q1 2026 results — Astera IR](https://ir.asteralabs.com/news-releases/news-release-details/astera-labs-reports-first-quarter-2026-financial-results)
- [Astera Labs Q1 2026 Futurum coverage](https://futurumgroup.com/insights/astera-labs-q1-fy-2026-earnings-highlight-scale-up-switching-ramp/)
- [Astera Labs Q1 2026 transcript — Motley Fool](https://www.fool.com/earnings/call-transcripts/2026/05/05/astera-labs-alab-q1-2026-earnings-transcript/)
- [Custom HBM stacks for Rubin — FinancialContent](https://markets.financialcontent.com/wral/article/tokenring-2026-1-16-the-death-of-commodity-memory-how-custom-hbm4-stacks-are-powering-nvidias-rubin-revolution)
