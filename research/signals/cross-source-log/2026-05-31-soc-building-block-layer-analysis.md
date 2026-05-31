# SoC Building-Block Layer — Companies Supplying the Pieces Inside the AI PC SoC

**Date logged:** 2026-05-31
**Source:** User-directed deeper-layer research 2026-05-31 — drilling into who supplies the IP / tools / test for the SoC architecture I described (CPU + GPU + NPU + memory controller fused on one die)
**Method:** Web search + thesis review of existing harness names
**Source validity:** T2 multi-source on EDA market shares + test equipment shares + recent earnings
**Cross-reference:** `signals/cross-source-log/2026-05-31-nvda-n1x-unbiased-money-flow-analysis.md` (first-pass money flow); this file digs one layer deeper into the SoC supply chain

---

## Why this layer matters

Earlier framing: "SoC = CPU + GPU + NPU + memory controller fused on one die." The first-pass money-flow analysis covered NVDA / ARM / TSMC / memory tri-vendor at the OUTPUT layer. This artifact covers the INPUT layer — the IP blocks, design tools, and test equipment that go INTO designing and manufacturing every SoC.

This layer is more durable than the SoC-vendor layer because:
- Every SoC vendor (NVDA, Apple, Qualcomm, MediaTek, AMD, Intel, Samsung) uses the same EDA tools
- Every SoC needs IP blocks (CPU, GPU, NPU, memory PHY, interconnect)
- Every chip needs test equipment
- Switching costs are very high (design teams build multi-year workflows around specific EDA + IP stacks)
- Recurring revenue model (license + royalty) vs cyclical hardware sales

---

## The SoC stack — building blocks and who supplies each

### Layer A: EDA tools (the software you use to design the SoC)

| Vendor | 2024 share | 2026 metric | Source |
|---|---|---|---|
| **Synopsys (SNPS)** | 31% (~46% post-Ansys acquisition) | Largest EDA + Ansys multiphysics merged | [MarketsandMarkets T2](https://www.marketsandmarkets.com/ResearchInsight/ai-eda-companies.asp) |
| **Cadence (CDNS)** | 30% | Core EDA +18% YoY; IP business +22% YoY per Q1 2026 results | [Cadence 8-K Q1 2026 T1](https://www.sec.gov/Archives/edgar/data/0000813672/000081367226000044/cdns04272026ex9901.htm) |
| Siemens EDA | ~13% | Private/Siemens subsidiary | Same |
| Keysight Technologies | smaller | Public US (KEYS) | Same |
| Zuken | smaller | Japan TSE | Same |

Top 5 = 70-85% of total AI EDA market per [MarketsandMarkets T2](https://www.marketsandmarkets.com/Market-Reports/ai-eda-market-212473295.html). AI EDA market: USD 4.27B in 2026 → USD 15.85B by 2032 (24.4% CAGR) per same.

### Layer B: IP block licensors (the pieces that get fused into the SoC)

**CPU IP:**
- ARM Holdings — Cortex (mobile + PC) + Neoverse (datacenter); 95%+ mobile share
- Synopsys (ARC processors — lower tier)
- Cadence (Tensilica — DSP + AI)

**GPU IP:**
- ARM (Mali — mobile + embedded)
- Imagination Technologies (PowerVR — private, UK)
- NVDA + Qualcomm Adreno (in-house only; not licensed externally)

**NPU IP:**
- ARM (Ethos NPU)
- Synopsys (ARC NPX series)
- Cadence (Tensilica AI)
- Imagination NNA (private)
- Ceva (DSP + AI)

**Memory PHY + controller IP:**
- Rambus (RMBS) — LPDDR5X SOCAMM2 + HBM4E memory controller IP per [Rambus 8-K T1](https://www.sec.gov/Archives/edgar/data/0000917273/000119312526182076/rmbs-ex99_1.htm)
- Synopsys (DDR5/LPDDR5X PHY)
- Cadence

**Network-on-chip (NoC) interconnect IP:**
- Arteris IP (AIP) — FlexNoC interconnect; customers include Samsung, AMD, TI, Rambus, Renesas, LG, Rockchip per [Arteris Wikipedia T3](https://en.wikipedia.org/wiki/Arteris); acquired Cycuity 2026 for hardware security
- Synopsys, Cadence

**High-speed SerDes IP (PCIe 5.0, USB4):**
- Alphawave Semi (AWE.L — UK-listed)
- Synopsys, Cadence

**Foundation IP (standard cells, SRAM):**
- ARM Artisan
- Synopsys DesignWare
- Cadence Library Characterization

### Layer C: Test equipment (every chip is tested)

| Vendor | 2025/2026 metric | Source |
|---|---|---|
| **Advantest (6857.T)** | SoC tester share rose to 66% (from 56%) in CY25; FY25 op margin 29.3% → 44.2% (1,490bp expansion); revenue $7.5B (+47% YoY) | [Data Gravity T2](https://www.datagravity.dev/p/the-chip-testing-bottleneck) |
| **Teradyne (TER)** | Q1 2026 revenue +87% YoY to $1.282B; AI = 70% of Q1 sales (up from 60% Q4 2025); first multisystem GPU orders this Q; full-year revenue growth 22-31% projected | [Phemex News T3 + Futurum T2](https://phemex.com/news/article/teradyne-q1-2026-revenue-soars-87-on-ai-chip-testing-demand-80628) + [Futurum Q1 2026 analysis T2](https://futurumgroup.com/insights/teradyne-q1-fy-2026-earnings-credit-revenue-growth-to-ai-test-demand/) |
| Cohu (COHU) | Test handler — smaller; already-known per `meta/todo.md` |
| FormFactor (FORM) | Probe cards |
| Onto Innovation (ONTO) | Metrology — already-known per `meta/todo.md` |

### Layer D: Foundry + advanced packaging (already covered)

- TSMC (3nm, CoWoS for chiplets) — covered in prior analysis
- Substrate: AT&S, Unimicron, IBIDEN, Kinsus, SEMCO, Nan Ya PCB — covered

---

## Filter back through your strict criteria (fast money + moat + low displacement + multi-quarter beat probability)

### Tier 1: highest-conviction at this layer

**1. Synopsys (SNPS)**
- Fast money flow: YES — every SoC tape-out uses SNPS; AI chip explosion = direct license revenue uplift
- Moat: VERY STRONG — ~46% market share post-Ansys; switching costs are years of workflow build-up
- Displacement risk: VERY LOW — open-source EDA exists but not at advanced node tape-out quality; oligopoly is structural
- Beat probability: HIGH — recurring license model; AI EDA market 24.4% CAGR
- Caveat: Ansys integration execution risk; valuation already premium for the moat
- **Convergence (edge + datacenter)**: FULLY CONVERGENT — every SoC at every device tier uses SNPS

**2. Cadence Design Systems (CDNS)**
- Fast money flow: YES — Q1 2026 IP business +22% YoY per [Cadence 8-K T1](https://www.sec.gov/Archives/edgar/data/0000813672/000081367226000044/cdns04272026ex9901.htm); core EDA +18%
- Moat: VERY STRONG — ~30% market share; same oligopoly logic
- Displacement risk: VERY LOW
- Beat probability: HIGH — IP segment growth materially faster than core EDA
- **Convergence**: FULLY CONVERGENT — same as SNPS

**3. Advantest (6857.T — Japan TSE, accessible per `CLAUDE.md` investability filter)**
- Fast money flow: YES — 66% SoC tester share already capturing it
- Moat: STRONG — test equipment switching costs are extreme (millions per system + workflow integration)
- Displacement risk: VERY LOW — Teradyne is the only meaningful competitor at SoC test
- Beat probability: EXTREME — operating margin expanded 1,490bp YoY to 44.2% per [Data Gravity T2](https://www.datagravity.dev/p/the-chip-testing-bottleneck); ramping to 10,000 SoC test systems/yr (up from 7,500 target); Blackwell Ultra + AMD MI400 in 2026 = known pipeline
- Caveat: cyclical to chip volume; if chip cycle peaks, test cycle peaks 1-2 quarters later
- **Convergence**: FULLY CONVERGENT — tests AI accelerators (datacenter) + N1X (laptop edge) + mobile SoCs

**4. Teradyne (TER)**
- Fast money flow: YES — Q1 2026 revenue +87% YoY; AI = 70% of revenue
- Moat: STRONG — duopoly partner to Advantest at SoC test
- Displacement risk: VERY LOW
- Beat probability: HIGH — first multisystem GPU orders this Q for production in Q2; AI-revenue mix shifting up
- Caveat: stock fell 19% after record Q1 (expectations bar very high) per [TIKR T2](https://www.tikr.com/blog/teradyne-falls-19-after-record-q1-2026-earnings-was-that-a-buying-opportunity) — beat-and-stock-react may diverge
- **Convergence**: FULLY CONVERGENT — same as Advantest

### Tier 2: secondary candidates at this layer

**5. Rambus (RMBS)** — already Watchlist in harness per `companies/RMBS/thesis.md` (1-2% target if entered). Memory PHY IP at the LPDDR5X SOCAMM2 + HBM4E controller layer. Smaller cap; thinner moat than EDA but real IP licensing model. Per-chip royalty mechanism.

**6. Arteris IP (AIP)** — NoC IP at the SoC interconnect layer. Smaller cap, specialized. As SoCs get more complex (more IP blocks per die), on-chip interconnect IP becomes structurally important. Customers include Samsung, AMD, TI, Rambus, Renesas. Less consensus coverage = potentially mispriced.

**7. Alphawave Semi (AWE.L — UK-listed)** — SerDes IP for PCIe 5.0 / USB4. Smaller cap. UK exchange accessibility check needed.

**8. Ceva (CEVA)** — DSP + AI IP. Smaller. Niche.

---

## The convergence test (compared to my prior shortlist)

Earlier shortlist: TSMC + ARM + NVDA + MSFT + ALAB

How do the deeper-layer names rank on edge-AI + datacenter-AI convergence?

| Layer | Name | Edge AI exposure | Datacenter AI exposure | Convergent? |
|---|---|---|---|---|
| EDA | **SNPS** | YES (every mobile SoC uses) | YES (every datacenter accelerator) | **FULLY CONVERGENT** |
| EDA | **CDNS** | YES | YES | **FULLY CONVERGENT** |
| Test | **Advantest** | YES (mobile + PC SoC test) | YES (Blackwell + MI400) | **FULLY CONVERGENT** |
| Test | **Teradyne** | YES | YES (first merchant GPU test orders) | **FULLY CONVERGENT** |
| Memory IP | **RMBS** | PARTIAL (LPDDR) | YES (HBM4E controller) | Partial |
| NoC IP | **Arteris** | YES | YES | FULLY CONVERGENT (smaller scale) |
| SerDes IP | Alphawave | PARTIAL | YES | Partial |

**The EDA + test names are AS convergent as TSMC + ARM** — both edge + datacenter AI chips need EDA tools and test. And they're structurally less crowded than the consensus NVDA/ARM trade.

---

## Position implication (per Critical Rule #11)

**Position implication:** NO IMMEDIATE SIZING TRIGGER but **adds 4 NEW candidates to watchlist** (SNPS + CDNS + Advantest + Teradyne) at the SoC building-block layer that satisfy:
- Fast money flow (revenue already accelerating)
- Strong moat (EDA oligopoly + test duopoly)
- Low displacement risk (structural)
- Multi-quarter earnings momentum (verified Q1 2026 metrics)
- Edge + datacenter convergence (FULLY CONVERGENT at both)

**Prerequisite to consideration:** valuation check + bottoms-up earnings build per principle #1 + investability check (SNPS/CDNS/TER US-listed; Advantest 6857.T = Japan TSE per `CLAUDE.md` investability filter).

**Watchlist surface candidates:** SNPS + CDNS + Advantest (6857.T) + Teradyne (TER) — added to `watchlist/candidates.md` for proper deep-dive evaluation per principle #18 phase-by-phase framework. Computex 2026 (June 1-5) may surface additional information that affects timing.

---

## Cross-references

- `signals/cross-source-log/2026-05-31-nvda-n1x-unbiased-money-flow-analysis.md` — first-pass money flow that this artifact extends one layer deeper
- `companies/RMBS/thesis.md` — existing Watchlist thesis at the memory IP layer
- `companies/ARM/thesis.md` — CPU IP layer cleanest convergent play (separate IP licensor)
- `watchlist/candidates.md` — 4 new candidates added (SNPS, CDNS, Advantest, Teradyne)
- `meta/todo.md` — Computex 2026 brief 2026-06-06 may surface additional EDA / test data points
- `wiki/custom-silicon-primer.md` — foundation for SoC architecture understanding
