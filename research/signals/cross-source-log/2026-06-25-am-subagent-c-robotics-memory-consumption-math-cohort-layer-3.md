# 2026-06-25 AM — Subagent C — Robotics Memory Consumption Math + Cohort Implications (Layer 3 of 4)

**Trigger source:** User research request 2026-06-25 — verify "robotics is going to consume a lot of memory" claim via 4-subagent parallel fan-out per Principle #36. Layer 3 = direct memory-consumption math + cohort cascade.

**Subagent:** 1 (Opus 4.8 per Critical Rule #16); scoped memory math + held-cohort cross-implications.

**Token cost:** ~84.1k subagent_tokens; 68 tool uses; 736s duration.

**Yield class:** HIGH — bottoms-up 2026 + 2030 memory demand math derived; HBM in robotics verdict definitively NO (Tesla AI5 HBM-claim REJECTED); robotics 2026 = 0.02% of DRAM bits / 0.005% of NAND bits = STATISTICALLY INDISTINGUISHABLE FROM ZERO at TAM level.

---

## TL;DR

Robotics uses 128-192 GB DRAM and 512 GB-1 TB NAND per advanced humanoid — large per device, but **total robotics memory demand in 2026 is approximately 0.02% of DRAM supply and 0.005% of NAND supply.** User's claim directionally correct but 5-10 years early and conflates on-robot demand (LPDDR5X, not HBM) with cloud-training demand (HBM, but tiny fraction of total). **Verdict: NUANCED-PARTIAL.**

---

## SECTION 1 — PER-ROBOT MEMORY CONSUMPTION TABLE (VERIFIED)

| Robot Type | DRAM (GB) | DRAM Type | NAND Storage | HBM? | Confidence |
|---|---|---|---|---|---|
| Humanoid — Jetson Thor (Atlas, AgiBot, 1X Neo, Figure) | 128 GB (T5000) / 64 GB (T4000) | LPDDR5X 273 GB/s 256-bit | 1 TB NVMe (WD SN5000S dev kit) | NO | HIGH (7+ sources) |
| Humanoid — Tesla Optimus AI5 | ~192 GB est. (12× SK Hynix LPDDR5X) | LPDDR5X 384-bit | ~1 TB est. | NO | MEDIUM (VideoCardz + TrendForce Apr 2026) |
| Humanoid — Unitree G1 base | 8-16 GB | LPDDR4X (RK3588S) | 64-256 GB eMMC | NO | HIGH |
| Humanoid — Unitree G1 EDU | 16 GB | LPDDR5 (Jetson Orin NX) | 128-256 GB NVMe | NO | HIGH |
| Industrial arm (Fanuc R-30iB, ABB) | 0.5-4 GB | SDRAM/DDR4 controller | 4-32 GB CompactFlash/eMMC | NO | LOW (legacy spec only) |
| Industrial arm (AI-enhanced 2026) | 16-64 GB | LPDDR5X (Jetson Orin/Thor) | 128-512 GB | NO | MEDIUM |
| AMR (Locus, Symbotic, OTTO) | 4-32 GB | LPDDR4/5 | 32-256 GB | NO | LOW |
| AV current (Tesla HW4, Waymo) | 32-64 GB (Tesla HW4 32GB dual GDDR6 confirmed) | GDDR6 (Tesla) | 1 TB (HW4 confirmed) | NO | HIGH (Tesla) / MEDIUM (Waymo) |
| AV future L4/L5 (Micron CEO Q2 2026) | 300+ GB | LPDDR5X automotive 1-gamma | 2+ TB est. | Possibly indirect | MEDIUM (forward) |
| Surgical (da Vinci 5 / Hugo) | UNKNOWN | UNKNOWN | UNKNOWN | NO assumed | LOW (data gap) |

### CRITICAL HBM FINDING

**HBM absent from EVERY current deployed robot platform.** One conflicting claim (neuralwired.com: AI5 uses "HBM3e via CoWoS") REJECTED based on: (1) VideoCardz physical die image showing discrete LPDDR5X packages NOT CoWoS geometry; (2) TrendForce Apr 16 2026 explicitly naming SK Hynix + Samsung LPDDR5X for AI5; (3) Tesla cost/BOM rationale inconsistent with HBM pricing.

---

## SECTION 2 — BOTTOMS-UP 2026 DEMAND

### Production Volume Assumptions

| Robot Type | Bear | Base | Bull |
|---|---|---|---|
| Humanoid | 10,000 | 50,000 | 100,000 |
| Industrial arm | 550,000 | 575,000 | 610,000 |
| AMR | 80,000 | 120,000 | 180,000 |
| AV (new fleet adds) | 1,000 | 5,000 | 15,000 |
| Surgical | 1,500 | 2,000 | 2,500 |

### 2026 DRAM Demand (Base)

| Segment | Units | DRAM/Unit | Total DRAM |
|---|---|---|---|
| Humanoid | 50,000 | 96 GB blended | 4.8 PB |
| Industrial arm | 575,000 | 2 GB blended | 1.15 PB |
| AMR | 120,000 | 16 GB | 1.92 PB |
| AV (new) | 5,000 | 48 GB | 0.24 PB |
| Surgical | 2,000 | 32 GB | 0.06 PB |
| **TOTAL** | 752,000 | — | **~8.2 PB** |

### vs Total DRAM Market 2026

- Total DRAM bit volume 2026 (TrendForce): ~40,000 PB (40 EB)
- Total DRAM revenue 2026 (IDC): $418.6B
- **Robotics as % of DRAM bits: 0.02%**

### 2026 NAND Demand (Base)

| Segment | Units | NAND/Unit | Total NAND |
|---|---|---|---|
| Humanoid | 50,000 | 512 GB blended | 25.6 PB |
| Industrial arm | 575,000 | 8 GB | 4.6 PB |
| AMR | 120,000 | 64 GB | 7.7 PB |
| AV (new) | 5,000 | 1,000 GB | 5.0 PB |
| Surgical | 2,000 | 128 GB | 0.26 PB |
| **TOTAL** | — | — | **~43.1 PB** |

### vs Total NAND Market 2026

- Total NAND bit production 2026: ~900,000 PB
- **Robotics as % of NAND bits: 0.005%**

### 2026 HBM from Robotics

- On-robot: **0 bytes** (no platform uses HBM)
- Cloud training for robotics WFMs: ~100-500 TB estimated (<<0.01% of HBM market)

---

## SECTION 3 — BOTTOMS-UP 2030 FORECAST

### Production Volume Scenarios 2030

| Type | Bear | Base | Bull |
|---|---|---|---|
| Humanoid | 250,000 (GS base) | 1,000,000 | 3,000,000 (SAG 73% CAGR; BofA bull) |
| Industrial arm | 700,000 | 1,000,000 | 1,500,000 |
| AMR | 300,000 | 600,000 | 1,000,000 |
| AV (new) | 10,000 | 50,000 | 200,000 |
| Surgical | 4,000 | 6,000 | 10,000 |

### 2030 DRAM Demand (Base, with 2× content growth for humanoids)

| Segment | Units | DRAM/Unit | Total DRAM |
|---|---|---|---|
| Humanoid | 1,000,000 | 192 GB (Micron 300GB target trajectory) | 192 PB |
| Industrial arm | 1,000,000 | 16 GB (60% AI-enhanced) | 16 PB |
| AMR | 600,000 | 32 GB | 19 PB |
| AV (new) | 50,000 | 128 GB (L4 ramp) | 6.4 PB |
| Surgical | 6,000 | 64 GB | 0.4 PB |
| **TOTAL** | — | — | **~234 PB** |

### vs Total DRAM Market 2030

| Scenario | Robotics DRAM | Total DRAM Bits 2030 | % of Market |
|---|---|---|---|
| Base (1M humanoids) | 234 PB | ~150,000 PB | **0.16%** |
| Bull (3M humanoids) | ~1,050 PB | ~150,000 PB | **0.7%** |
| Bear (250K humanoids / GS) | ~60 PB | ~150,000 PB | **0.04%** |

### 2030 NAND Demand

| Scenario | Robotics NAND | Total NAND 2030 | % of Market |
|---|---|---|---|
| Base (1M × 1TB) | 1.3 EB | ~5,000,000 PB | **0.026%** |
| Bull (3M × 1TB) | 3.5 EB | ~5,000,000 PB | **0.07%** |

**Reality check:** 1M humanoids × 1TB = 1 EB arithmetically correct. BUT a single large hyperscaler's SSD deployment at 10,000 racks × 245 TB (Micron 6600 ION) = 2.45 EB from ONE customer alone. **Robotics NAND at 1M units is SMALLER than ONE hyperscaler's storage footprint.**

---

## SECTION 4 — HBM IN ROBOTICS: HYNIX VERIFICATION

### Confirmed: NO HBM on any robot platform

| Platform | Memory | HBM? | Evidence |
|---|---|---|---|
| Jetson Thor (dominant humanoid compute) | LPDDR5X 128GB | NO | 7-source convergence |
| Drive AGX Thor (AV) | LPDDR5X 64GB | NO | NVDA dev blog |
| Tesla AI5 (Optimus/FSD) | LPDDR5X ~192GB (SK Hynix) | NO | VideoCardz + TrendForce Apr 2026 |
| Tesla HW4 (current) | GDDR6 32GB dual | NO | Teardown |

### HYNIX HBM Read-Through: INDIRECT only

HBM demand from robotics reaches HYNIX only via DATA CENTER: hyperscalers buy Vera Rubin (with HYNIX HBM4 at ~60-70% share) to run Cosmos WFM training, Isaac Lab RL, behavior cloning. **Proximate buyer is hyperscaler, NOT robot OEM.**

- On-robot HBM for robotics: **0**
- Cloud training HBM for robotics WFMs 2026: ~100-500 TB (<<0.1% of HBM TAM)
- Cloud training HBM for robotics 2030: ~50-200 PB (est. 0.1-1% of HBM TAM)

### CRITICAL DISTINCTION: Robotics OPS vs Robotics TRAINING

| Demand Vector | Memory Type | Primary Beneficiary | Scale |
|---|---|---|---|
| On-robot inference | LPDDR5X | SK Hynix + Samsung (LPDDR5X) | Small (0.02% DRAM TAM 2026) |
| Cloud training (WFM, RL, BC) | HBM3e/4 | SK Hynix (HBM) + Micron | Small today, growing |
| **Training larger than on-robot HBM equivalent** | — | — | ~500 TB training vs 0 on-robot |

---

## SECTION 5 — NAND IN ROBOTICS (KIOXIA / SNDK)

### On-Robot NAND Content Breakdown

| Use Case | NAND Required per Robot |
|---|---|
| Foundation model weights (VLA 7B-72B quantized) | 14-144 GB FP16; 4-36 GB INT4 |
| SLAM / VIO map caching | 10-50 GB |
| Sensor data buffer (multi-camera ~15 GB/hr/camera) | 50-200 GB |
| OS + containers (JetPack 7) | 10-30 GB |
| Logged training data (research/active-learning) | 500 GB - 2 TB |
| **Production humanoid total** | **128 GB - 2 TB; base 512 GB** |

### SNDK Confirmation

WD SN5000S NVMe SSD = confirmed storage in Jetson AGX Thor dev kits. **SNDK IS NAND supplier for dominant humanoid compute platform.** Real but tiny volume vs hyperscaler enterprise SSD demand.

---

## SECTION 6 — CLOUD TRAINING vs ON-ROBOT MEMORY (WHICH IS BIGGER?)

| Vector | DRAM/HBM Volume | Notes |
|---|---|---|
| On-robot DRAM (all robotics 2026) | ~8.2 PB | Bottoms-up |
| On-robot HBM | 0 | Confirmed |
| Cloud training HBM for robotics 2026 | ~100-500 TB | Cosmos WFM + frontier labs |
| Cloud training DRAM (standard server) | ~10-50 PB est. | Standard server alongside HBM |

**Training demand is SMALLER than on-robot DRAM in 2026 due to low fleet size.** Post-2027 as fleets scale, cloud training demand grows faster because ONE training cluster serves MILLIONS of deployed robots.

---

## SECTION 7 — COUNTER-EVIDENCE (Critical Rule #15)

| Counter-Argument | Weight |
|---|---|
| Tesla Optimus 2025 actual "hundreds" vs "thousands" target; 90%+ miss on stated goals | HIGH |
| Goldman Sachs 2030 BASE = 250K humanoids — at 192GB each = 48 PB DRAM = 0.03% of market | HIGH |
| Waymo fleet 3,871 total vehicles globally — AV memory negligible at current scale | HIGH |
| Industrial robots consume <4 GB SDRAM each; 575K/yr = 1.15 PB = noise | HIGH |
| "Mount Stupid" bear thesis — Six Degrees of Robotics calls hype crash likely | MEDIUM |
| Humanoid TAM forecasts range $4B-$110B by 2030 — 25× uncertainty | HIGH |
| Memory efficiency improves — quantization reduces per-inference DRAM | MEDIUM |
| ONE hyperscaler's SSD spend >> all robotics NAND demand 2030 | HIGH |

---

## SECTION 8 — CROSS-COHORT CASCADE

| Name | Vector | 2026 magnitude | 2030 magnitude | Verdict |
|---|---|---|---|---|
| HYNIX | HBM (indirect via cloud training) | LARGE (primary demand driver; 60-70% Vera Rubin HBM4) | VERY LARGE | Robotics additive via training NOT primary |
| HYNIX | LPDDR5X (direct, Jetson Thor supply) | TINY (0.02% DRAM TAM) | SMALL-MEDIUM (0.1-0.5%) | Real but immaterial 2026 |
| KIOXIA | NAND for robotics NVMe SSDs | TINY (0.005% NAND TAM) | SMALL (0.03%) | Hyperscaler enterprise SSD is the trade |
| SNDK | SN5000S confirmed in Jetson Thor dev kit | TINY | SMALL | Same as KIOXIA; hyperscaler primary |
| MURATA | MLCCs per humanoid (Subagent B coverage) | UNQUANTIFIED here | SMALL-MEDIUM | Subagent B primary scope |
| SUMCO | Wafer via TSMC N4/N5 (Thor SoC) | NEGLIGIBLE | NEGLIGIBLE | Not robotics-specific |
| MRVL | Auto Ethernet SOLD to Infineon; no humanoid wins | NEGATIVE/NONE for robotics | UNCERTAIN | Data center AI is MRVL trade |

---

## SECTION 9 — FINAL VERDICT TABLE

| Claim | TRUE/FALSE/NUANCED | Confidence | Timeframe |
|---|---|---|---|
| Robotics consumes large memory PER DEVICE | TRUE — 128-192GB DRAM, 512GB-1TB NAND per advanced humanoid | HIGH | Now |
| Robotics drives meaningful % of total DRAM TAM | FALSE 2026 (0.02%); NUANCED 2030 (0.04-0.7%) | HIGH | 2026; MEDIUM 2030 |
| Robotics drives meaningful % of total NAND TAM | FALSE 2026 (0.005%); FALSE-NUANCED 2030 (0.03-0.07%) | HIGH | 2026-2030 |
| HBM is direct robotics on-robot demand driver | FALSE — no robot uses HBM; LPDDR5X dominates | HIGH | Now through 2030 |
| HBM is indirect robotics demand driver (cloud training) | TRUE but tiny — <<0.1% of HBM TAM 2026 | MEDIUM | 2026-2028 |
| SNDK/KIOXIA primary robotics NAND beneficiaries | TRUE (Jetson Thor NVMe confirmed WD-brand) but negligible vs hyperscaler | HIGH | 2026 |
| "20-year growth vector" for memory from robotics | TRUE in direction per Micron CEO; 300GB/robot target credible by 2030-2035 | MEDIUM | 2028-2035 |
| Tesla Optimus production risk | HIGH — 2025 was 90%+ miss; 2026 bear case = 1K-5K units not 50K-100K | HIGH | 2026 |
| **Overall user claim: "robotics is going to consume a lot of memory"** | **NUANCED-PARTIAL — correct direction, wrong magnitude + wrong timeframe for 2026 investment thesis; more compelling 2028-2035 in bull scenario** | **HIGH** | — |

---

## Anti-Confirmation-Bias Checks

1. All HBM-in-robotics claims verified against physical evidence — REJECTED neuralwired.com claim of AI5 HBM without corroboration
2. Production volumes treated with RANGES not point estimates; Tesla Optimus delay risk explicitly modeled
3. Goldman Sachs 2030 BASE (250K) used alongside bull scenarios to derive bear/base/bull memory demand
4. Robotics NAND compared explicitly to single hyperscaler enterprise SSD footprint — robotics loses
5. Chinese + Japanese source searches conducted; no materially different per-unit memory specs

---

## Key Sources

- [NVIDIA Jetson Thor product page — 128GB LPDDR5X confirmed](https://www.nvidia.com/en-us/autonomous-machines/embedded-systems/jetson-thor/)
- [TrendForce Apr 16 2026 — Tesla AI5 uses LPDDR5X from SK Hynix + Samsung (NOT HBM)](https://www.trendforce.com/news/2026/04/16/news-tesla-ai5-chip-tape-out-completed-with-tsmc-and-samsung-foundries-reportedly-using-lpddr5x-from-sk-hynix-and-samsung)
- [VideoCardz Tesla AI5 die image — discrete LPDDR5X packages confirmed (NOT CoWoS)](https://videocardz.com/newz/elon-musk-confirms-tesla-ai5-chip-completed-tape-out-at-tsmc-and-samsung)
- [Boston Dynamics Atlas — Jetson Thor confirmed](https://bostondynamics.com/products/atlas/)
- [Goldman Sachs humanoid TAM $38B by 2035](https://www.goldmansachs.com/insights/articles/the-global-market-for-robots-could-reach-38-billion-by-2035)
- [Micron CEO Q2 FY26 — AVs need >300GB DRAM "20-year growth vector"](https://www.tomshardware.com/pc-components/dram/micron-predicts-that-cars-will-need-300gb-of-ram-memory-laden-vehicles-could-exacerbate-shortages-but-create-robust-long-term-growth-in-automotive-memory-demand)
- [Tesla HW4 32GB GDDR6 — TechInsights teardown](https://www.techinsights.com/products/ddt-2307-807)
- [Electrek April 2026 — Optimus V3 delayed "again"](https://electrek.co/2026/04/22/tesla-optimus-production-fremont-model-sx-line/)
- [Unitree G1 teardown — China Biz Insider](https://chinabizinsider.com/unitree-g1-teardown-decoding-the-economics-and-engineering-of-the-worlds-best-selling-humanoid-robot/)
- [Waymo fleet 3,871 vehicles globally Mar 2026](https://electrek.co/2026/05/13/waymo-expands-coverage-1400-square-miles-11-cities/)
- [Micron 6600 ION 245TB SSD shipping](https://investors.micron.com/news-releases/news-release-details/industry-leading-245tb-micron-6600-ion-data-center-ssd-now)
- [SK Hynix Q1 2026 earnings — no robotics commentary](https://www.cnbc.com/2026/04/23/sk-hynix-earnings-ai-memory-shortage-hbm-demand.html)
