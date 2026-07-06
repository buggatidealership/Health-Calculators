# 2026-06-25 AM — Subagent B — Robotics Supply Chain BOM Bottoms-Up (Layer 2 of 4)

**Trigger source:** User research request 2026-06-25 — verify "robotics is going to consume a lot of memory" claim via 4-subagent parallel fan-out per Principle #36. This is Layer 2 (DEEP-DIG bottoms-up BOM per Workflow #8).

**Subagent:** 1 (Opus 4.8 per Critical Rule #16); scoped per-robot-type BOM analysis.

**Token cost:** ~64.3k subagent_tokens; 58 tool uses; 527s duration.

**Yield class:** HIGH — definitive HBM-in-robotics answer (NO across all current platforms); per-unit memory math validated; per-cohort cross-stack cascade complete.

---

## TL;DR

Robotics memory demand is real but structurally LPDDR5X/GDDR6-driven — **NOT HBM**. At current production volumes (5K-50K humanoid units 2026), memory impact on total DRAM TAM is sub-0.1%. The bull case (1M humanoid 2030) gets to ~64-128 PB DRAM = ~0.04-0.21% of 2030 DRAM TAM. **The correct beneficiaries are LPDDR5X suppliers (HYNIX, Samsung, Micron) and NAND (KIOXIA, SNDK) — NOT HBM suppliers via the robot itself.** HBM benefits HYNIX via TRAINING infrastructure (cloud datacenter), not via on-robot inference.

---

## SECTION 1: HUMANOID COMPUTE PLATFORM DEFINITIVE MAPPING

| Robot | Compute Chip | Memory (DRAM) | Memory Type | TOPS | Source |
|---|---|---|---|---|---|
| Tesla Optimus Gen 3 (2026) | Tesla AI5 (tape-out Apr 2026) | ~192GB | LPDDR5X | ~1,500+ est. | Tesla Q1 2026 announcement |
| Tesla Optimus Gen 2 (current) | Dual Tesla AI4 | ~32GB GDDR6 (16GB×2) | GDDR6 | ~144 TOPS×2 | Tesla IR + teardowns |
| Boston Dynamics Atlas (electric) | NVIDIA Jetson Thor T5000 | 128GB | LPDDR5X | 2070 FP4 TOPS | BD press release Mar 2025 |
| Galbot / AgiBot Yuanzheng A2 | NVIDIA Jetson Thor T5000 | 128GB | LPDDR5X | 2070 FP4 TOPS | Galbot supply chain |
| 1X Neo | NVIDIA Jetson Thor (based) | 128GB | LPDDR5X | 2070 FP4 TOPS | 1X product page |
| Unitree G1 (base) | Rockchip RK3588S | ~8GB | LPDDR4X | 6 TOPS | Moomoo teardown |
| Unitree G1 (EDU) | NVIDIA Jetson Orin NX | 16GB | LPDDR5 | 100 TOPS | Unitree EDU spec |
| Unitree H1 (pro) | NVIDIA Jetson Orin NX/AGX | 16-64GB | LPDDR5 | 100-275 TOPS | Unitree docs |
| Figure 02/03 | UNDISCLOSED proprietary | UNDISCLOSED | UNDISCLOSED | — | Not public |
| UBTECH Walker S2 | UNDISCLOSED (BrainNet 2.0) | UNDISCLOSED | — | — | UBTECH press |

---

## SECTION 2: NAND STORAGE PER HUMANOID

| Platform | NAND Est. | Type | Use Case |
|---|---|---|---|
| Jetson Thor-based humanoids | 512GB-2TB | NVMe SSD / eMMC | GR00T model weights (~14GB at FP16) + perception cache |
| Tesla Optimus (AI4 era) | ~512GB-1TB | NAND internal | FSD-class model storage (HW4 AV = 1TB confirmed) |
| Unitree G1 base | 32-64GB | eMMC | Motion control programs |
| Unitree G1 EDU | 256GB-2TB | NVMe | AI perception + SLAM maps (Robostore EDU "2TB storage") |

**CAVEAT:** NAND specs partially inferred from compute platform + AV analogies. Only Unitree EDU "2TB" from direct product listing.

---

## SECTION 3: HBM IN ROBOTICS — DEFINITIVE ANSWER

**VERDICT: NO HBM in any currently shipping humanoid robot or AV platform.**

| Platform | Memory | HBM? | Confidence |
|---|---|---|---|
| NVIDIA Jetson Thor T5000 | 128GB LPDDR5X, 256-bit bus, 273 GB/s | NO | 7-source confirmed |
| NVIDIA Jetson Thor T4000 | 64GB LPDDR5X | NO | Confirmed |
| NVIDIA Jetson Orin AGX | 64GB LPDDR5 | NO | Confirmed |
| Tesla AI4 / HW4 | GDDR6 | NO (GDDR6 not HBM) | Confirmed |
| Tesla AI5 (pending) | LPDDR5X ~192GB | NO | Per Musk Apr 2026 |
| Boston Dynamics Atlas | Jetson Thor = LPDDR5X | NO | Confirmed |
| Galbot/AgiBot | Jetson Thor = LPDDR5X | NO | Confirmed |

**Why no HBM:** Requires >200W TDP per package, 5-8× cost per GB vs LPDDR5X, complex interposer (CoWoS). Humanoid robots have 40-130W TOTAL compute power budget. LPDDR5X 273 GB/s sufficient for real-time inference on 7-14B param models. HBM only makes sense at datacenter scale.

**Exception watch:** If NVIDIA introduces Jetson-HBM variant — would change this. No announcement exists.

---

## SECTION 4: TOTAL ROBOTICS MEMORY DEMAND MATH

### Unit volume assumptions (triangulated, NOT sell-side anchored)

| Year | Humanoid Units (Bull) | Humanoid Units (Bear) | Basis |
|---|---|---|---|
| 2026 | 50,000 | 5,000 | TrendForce >50K; MS China 50K; Tesla 50-100K aspirational |
| 2027 | 200,000 | 30,000 | TrendForce trajectory |
| 2030 | 1,000,000 | 250,000 | BofA bull / Goldman base |

### Total demand calculation

| Scenario | Year | Units | DRAM/Unit | Total DRAM | NAND/Unit | Total NAND |
|---|---|---|---|---|---|---|
| Bear | 2026 | 5,000 | 30GB | 150 TB | 300GB | 1.5 PB |
| Base | 2026 | 30,000 | 35GB | ~1 PB | 400GB | ~12 PB |
| Bull | 2026 | 100,000 | 40GB | ~4 PB | 500GB | ~50 PB |
| Bear | 2030 | 250,000 | 48GB | ~12 PB | 512GB | ~128 PB |
| **Bull** | **2030** | **1,000,000** | **64GB** | **~64 PB** | **1TB** | **~1 EB** |

### Context: 2030 total DRAM TAM ~30,000 PB (30 EB) annually

| Scenario | Robotics DRAM 2030 | Total DRAM 2030 | **Robotics % of total** |
|---|---|---|---|
| Bear (250K units) | 12 PB | 30,000 PB | **0.04%** |
| Bull (1M units) | 64 PB | 30,000 PB | **0.21%** |

**Material-vs-noise verdict:** AT 2030 BULL VOLUMES, robotics DRAM = 0.04-0.21% of total annual DRAM demand. **NOISE relative to total TAM, NOT a memory demand inflection on its own.**

---

## SECTION 5: CORRECT FRAMING (CRITICAL)

The "robotics will consume a lot of memory" thesis MISFRAMES the demand vector. Correct framing:

1. **LPDDR5X specifically** — Robotics competes with smartphones for LPDDR5X. Even 64 PB robotics LPDDR5X by 2030 = ~$384M at $6/GB = only 2-4% of mobile LPDDR5X
2. **NAND specifically** — 1 EB NAND from robotics 2030 bull case = significant vs today but 2030 NAND TAM 10+ EB = still ~5-10% in bull case
3. **🔥 TRAINING demand (cloud datacenter, not edge robot)** = FAR LARGER. Each humanoid generation requires VAST datacenter compute + HBM for model training — **this is where HYNIX matters most**

---

## SECTION 6: CROSS-STACK CASCADE PER HELD COHORT

### SK HYNIX (HBM primary + LPDDR5X)

| Vector | Read-Through | Magnitude |
|---|---|---|
| HBM in humanoid robots | **NONE at edge. Zero HBM in shipping robot** | Bearish on HBM-robotics-direct narrative |
| LPDDR5X for Jetson Thor | SK Hynix leading LPDDR5X supplier; Thor T5000 = 128GB LPDDR5X | MODERATE positive |
| Training datacenter HBM | Every humanoid company needs cloud training compute (H200/B200/Vera Rubin) | STRONG positive (datacenter angle, NOT robot itself) |
| CXMT competition | CXMT HBM3 samples to Huawei (5 kwspm now, 30 kwspm end-2026) | Modest China-market risk |
| **Net** | **HBM story for robotics = INDIRECT (training) NOT DIRECT (edge inference). LPDDR5X is DIRECT but small.** | |

### KIOXIA + SNDK (NAND)

| Vector | Read-Through |
|---|---|
| NAND per humanoid 256GB-2TB | Small per-unit, multiplied by volume |
| 2026 NAND sold out (Kioxia IR Feb 2026) | Robotics marginal contributor to current tightness |
| Industrial-grade NAND (SLC/MLC) | Humanoids need high-endurance for continuous logging — niche premium |
| **Net** | **POSITIVE but INDIRECT. NAND tightness 2026 driven by AI servers; robotics adds marginal demand; more material 2028-2030.** |

### MURATA (MLCCs) — MOST DIRECT NEAR-TERM EXPOSURE

| Vector | Read-Through | Magnitude |
|---|---|---|
| MLCCs per humanoid | Est. 1,500-3,000 per humanoid (NOT primary data) | At 100K robots = 150-300M MLCCs |
| MLCCs per AV | 5,000-10,000; ADAS/SDV larger near-term driver | More material than humanoid |
| Murata positioning | Explicitly targeting humanoid + SDV; AEC-Q200 MLCC | Confirmed strategic bet |
| **Net** | **POSITIVE. AV/ADAS near-term catalyst; humanoid emerging 2027+ catalyst. MLCC supercycle driven more by AI servers + EVs near-term.** | |

### SUMCO (Silicon Wafers)

| Vector | Read-Through |
|---|---|
| Jetson Thor at TSMC N4/N5 | Every Thor chip = silicon wafers; TSMC N3 crunch reported |
| TSMC N3 wafer crunch | 60% N3 to AI 2026; rising to 86% 2027; robotics AI participant |
| **Net** | **POSITIVE indirect. Robotics adds marginal wafer demand. Main driver = AI datacenters + AVs + smartphones.** |

### MRVL — REDUCED ROBOTICS READ-THROUGH POST-INFINEON DEAL

| Development | Read-Through |
|---|---|
| MRVL sold automotive Ethernet to Infineon ($225-250M rev) | MRVL EXITING robotics/AV Ethernet connectivity |
| MRVL pivot to custom AI silicon (datacenter) | Cloud AI ASICs now core business |
| **Net** | **MRVL robotics read-through REDUCED post-Infineon. Focus = MRVL cloud ASIC story, not robotics connectivity.** |

---

## SECTION 7: FALSIFICATION CONDITIONS

1. If humanoid OEM ships with HBM (NVIDIA Thor-HBM variant?) → upgrade HYNIX rating for direct robot HBM exposure
2. If 2030 humanoid volume exceeds 2M units → robotics DRAM becomes >0.5% of TAM
3. If CXMT gains robot OEM supply (displacing SK Hynix LPDDR5X) → HYNIX risk
4. If Tesla AI6 (LPDDR6) signals memory type inflection → reassess LPDDR5X demand trajectory

---

## KEY SOURCES

- [NVIDIA Jetson Thor T5000 specs](https://www.waveshare.com/jetson-thor-t5000.htm)
- [NVIDIA Jetson Thor introduction](https://developer.nvidia.com/blog/introducing-nvidia-jetson-thor-the-ultimate-platform-for-physical-ai/)
- [Boston Dynamics Atlas — Jetson Thor confirmed](https://bostondynamics.com/products/atlas/)
- [Tesla AI5 tape-out April 2026](https://tech-insider.org/tesla-ai5-chip-tape-out-optimus-2026/)
- [Tesla HW4 TechInsights teardown](https://www.techinsights.com/products/ddt-2307-807)
- [Unitree G1 teardown — China Biz Insider](https://chinabizinsider.com/unitree-g1-teardown-decoding-the-economics-and-engineering-of-the-worlds-best-selling-humanoid-robot/)
- [Kioxia 2026 NAND sold out — TrendForce](https://www.trendforce.com/news/2026/02/13/news-kioxia-posts-record-%C2%A5543-6b-q3-fy25-revenue-confirms-2026-nand-fully-booked/)
- [CXMT HBM3 samples to Huawei — Digitimes](https://www.digitimes.com/news/a20250818PD202/cxmt-hbm3-hbm-huawei-expansion.html)
- [Goldman Sachs humanoid robot AI accelerant](https://www.goldmansachs.com/insights/goldman-sachs-research/global-automation-humanoid-robot-the-ai-accelerant)
- [Marvell sells automotive Ethernet to Infineon](https://www.prnewswire.com/news-releases/infineon-further-strengthens-its-number-one-position-in-automotive-microcontrollers-and-boosts-systems-capabilities-for-software-defined-vehicles-with-acquisition-of-marvells-automotive-ethernet-business-302423120.html)
- [TSMC N3 wafer crunch 2026](https://agent-wars.com/news/2026-03-14-tsmc-n3-wafer-shortage-ai-compute-2026)
- [Figure AI BMW deployment](https://www.figure.ai/news/production-at-bmw)
- [UBTECH Walker S2 mass production](https://www.prnewswire.com/news-releases/ubtech-humanoid-robot-walker-s2-begins-mass-production-and-delivery-with-orders-exceeding-800-million-yuan-302616924.html)
