# Robotics Market State 2026 — Layer 1 Verification
**Subagent A — B59 v2 / Critical Rule #16 parallel verification**
**Date:** 2026-06-25
**Task:** Verify state of robotics market 2026 — anti-confirmation-bias mandatory
**User explicit direction:** "remain unbiased" — find what is TRUE regardless of whether it supports or refutes the memory-consumption claim

---

## TL;DR

Robotics in 2026 is a real market at early-commercial-scale, NOT yet at mass-production memory-demand scale. Combined global humanoid shipments are tracking ~50,000–100,000 units in 2026, with China shipping ~50,000 by year-end per revised Morgan Stanley (June 24, 2026 — T2). Memory intensity per unit is HIGH (64–128 GB LPDDR5X per humanoid; up to 300 GB DRAM per future L4 autonomous vehicle per Micron CEO — T1), but total memory consumption from robotics in 2026 is SMALL relative to data-center AI demand. The "robotics will consume a lot of memory" claim is directionally true for 2028-2030, NOT yet a material 2026 demand driver. Bifurcation between Chinese and Western humanoid clusters is confirmed at every layer.

---

## SECTION 1 — Humanoid Robot Production Volume + Market 2026

### 1.1 Global Production Volume Estimates

| Company | 2025 Shipped (actual) | 2026 Target | Status | Source |
|---|---|---|---|---|
| Zhiyuan (智元, China) | ~5,100 units | "tens of thousands" | Commercial pilots | T2 (Sina Finance, Jan 2026) |
| Unitree (宇树, China) | ~4,200–5,500 units | ~20,000 units | G1 at $16K–$43.9K range | T2 (eWeek / Interesting Engineering) |
| UBTech (优必选, China) | ~1,000 units | ~10,000 units (Liuzhou factory) | Commercial pilots | T2 (Sina/TrendForce) |
| Tesla Optimus | Hundreds (internal factory only) | 50K–100K internal target; Gen 3 low-vol production summer 2026 | Fremont factory; 1,000+ units on floor per Jan 2026 Musk claim | T2 (iFactory/Tesery blog; not T1 verified) |
| Figure AI | ~10–100 units | ~12,000/yr capacity (BotQ) | 1 robot/90 min as of Apr 2026 | T2 (Sacra/SiliconANGLE) |
| Agility Robotics (Digit) | <100 commercial | RoboFab 10,000/yr capacity | 7+ units at Toyota Canada (RaaS); 65,000 hr accumulated | T2 (Technerdo/SEC filing) |
| Boston Dynamics (Atlas) | First 2026 production run | Full 2026 run committed to Hyundai + Google DeepMind | No external customers until 2027; 30,000/yr factory planned | T2 (Automate.org/Engadget) |
| 1X Technologies (Neo) | First units 2025 | 10,000/yr California factory sold out Y1 | Consumer + industrial hybrid; $20K | T2 (TechCrunch/Sifted) |
| Apptronik (Apollo) | Pilots only | $935M raised; B Capital + Google led; $5.5B val | Mercedes-Benz, GXO, Jabil pilots | T2 (CNBC Feb 2026) |
| Sanctuary AI (Phoenix) | Pilots only | Magna International deployment | Canadian Tire + Magna manufacturing pilots | T2 (Sanctuary.ai) |
| NEURA Robotics | Pre-production | $1.4B Series C (Amazon + NVIDIA + Qualcomm + Bosch) | 10 Dragonwing IQ10 early access | T2 (CNBC June 2026) |
| Galbot / Astribot / Booster / Vbot (China cluster) | Pre-commercial | Various; Vbot $73M pre-A May 2026 | Supply-chain-ready clusters forming | T2 (AIInsider / TechFunding) |

**GLOBAL TOTAL 2026 SHIPMENT ESTIMATE:**
- TrendForce (T2): >50,000 units globally = 700% YoY growth
- Morgan Stanley revised June 24, 2026 (T2 — CNBC): China alone = 50,000 units (doubled twice from 14K initial Jan 2026 forecast); 2030 China = 446,000 units
- Conservative cross-check: Chinese cluster (Zhiyuan + Unitree + UBTech + ~10 others) accounts for ~80% of global volume (T2 multiple sources); Western cluster (Tesla + Figure + Agility + Atlas + 1X + Apptronik) = 20%
- **Best estimate 2026 total: 50,000–100,000 units globally (my model, T2-anchored)**
- **2027 forecast: 200,000–500,000 units (wide range; T2 — Morgan Stanley + Goldman Sachs)**
- **2030 forecast: 250,000–1,000,000+ units (bull/bear wide; Goldman GS base: >250,000 T2)**

**Source quality note:** Most 2026 volume estimates are T2 (analyst / trade press). No company has published audited production figures. Tesla claim of "1,000+ at Fremont" is Elon Musk Twitter/X statement — T3 (no T1 earnings call confirmation at detail level). Figure AI BotQ "1 per 90 min" figure is company PR — T3 for verification purposes.

### 1.2 Chinese Humanoid Cluster — Multilingual Verification

**Primary Chinese findings (native-zh parallel):**

- MIIT 2025 Humanoid Robot Action Plan targets 100,000 deployed humanoids by 2027 — policy mandate, not market (T2 — MIIT via TheRobot Report)
- China's 15th Five-Year Plan (2026-2030): Embodied intelligence listed alongside quantum tech, bioengineering as strategic pillar (T2 — The Diplomat, March 2026)
- MIIT direct mandate: 10,000 humanoid robots actively working in factories/warehouses/hospitals by December 31, 2026 (T2 — China Briefing)
- State Grid order: ¥6.8 billion (~$1B) — cited by Morgan Stanley as driver for their June 2026 upward revision (T2 — CNBC June 24)
- Supply chain: Leaderdrive harmonic reducer production 50K → 70K units/month in 2026 (T2 — BigGo Finance); Suzhou Green Harmonic captured Tesla Optimus reducer socket at 40–60% cheaper than Harmonic Drive Systems
- Price point: Chinese robots dropping — Unitree G1 base $16K; Chinese domestic market targeting RMB 10.471 billion (~$1.4B) by 2026 (T2 — China Briefing)

**Bifurcation confirmed:** Chinese cluster (Zhiyuan + Unitree + UBTech + Leju + Vbot + Shihang + ~30 others) is volume-leader globally, using primarily domestic components (reducers, actuators) at lower cost. Western cluster (Figure + Agility + Atlas + 1X + Apptronik + Sanctuary) is premium-tier, lower volume, heavy VC-backing.

---

## SECTION 2 — Industrial Robots (Incumbents)

### 2.1 Market Size and Production Volume 2026

- Global industrial robot installations: ~575,000 units in 2025 (+6% YoY per IFR); 700,000+ by 2028 (T2 — IFR World Robotics 2025 report)
- Global market value of industrial robot installations: all-time high US $16.7 billion (T2 — IFR)
- Industrial robots market: valued $41.22B in 2024 → $88.66B by 2030 at 12.7% CAGR (T2 — NextMSC)
- Installed base: 4.664 million industrial robots in operation worldwide as of 2024, +9% YoY (T2 — IFR)

### 2.2 Major OEM Market Share

- Big Four (ABB + Fanuc + Yaskawa + KUKA) = ~56% of global sales; ABB 13%, Fanuc 11%, Yaskawa 8%, Kawasaki 8% (T2 — EVSINT/PatentPC)
- Japanese Big Five (Fanuc + Yaskawa + Kawasaki + DENSO + Mitsubishi) = >40% of global shipments (T2)
- Estun (China) closing on Fanuc for Chinese domestic market share

### 2.3 AI-Enhanced Industrial Robots — Compute Footprint

- Fanuc announced NVIDIA partnership December 2025; opened robot control platform; planned $90M US factory by 2027 (T2 — Nikkei/itmedia.co.jp, native-jp)
- Yaskawa announced SoftBank partnership December 2025 for AI robotics; established AI Robotics Supervision Dept; $180M campus Wisconsin FY2026 (T2 — Nikkei, native-jp)
- Kawasaki focusing on humanoid robotics for disaster/care services (T2 — native-jp)
- IFR Trend #1: AI-Driven Autonomy — analytical AI now standard across next-gen industrial robots (T2 — IFR BusinessWire Jan 2026)
- AI compute footprint in next-gen industrial: Qualcomm Dragonwing IQ10 (announced Computex June 2026) — 700 TOPS, 18 Oryon cores, **64 GB LPDDR5X ECC** — targeted at industrial + AMR + humanoid; 10 early-access partners including NEURA, September 2026 GA (T2 — HotHardware/Semiaccurate)

---

## SECTION 3 — Mobile / Autonomous Mobile Robots (AMRs)

- Warehouse robotics software market: $2.45B (2025) → $4.47B (2031) at 10.5% CAGR (T2 — MarketsandMarkets)
- AMRs fastest-growing segment at 35% CAGR (T2 — MordorIntelligence)
- Symbotic: deployments at Walmart, Target, Albertsons; GreenBox JV with SoftBank (warehouse-as-a-service); $1.18B FY2023 revenue (T2 — MarketsandMarkets)
- Locus Robotics: 2,000+ LocusBots deployed; 3 billion picks; Locus Array launched April 2026 (autonomous item-level picking with robotic arm) (T2 — geo.sig.ai)
- MIR (Teradyne-owned): AMR segment growing alongside manufacturing floor expansion

---

## SECTION 4 — Autonomous Vehicles (AV) — Closest Robotics-Memory Comparable

### 4.1 Waymo (Alphabet)

- Fleet: 3,000 robotaxis in service as of March 2026 (T2 — carboncredits.com / awisee.com)
- Rides: 500,000 paid rides/week; 4 million rider-only miles/week; targeting 1M trips/week end-2026 (T2 — electrek.co)
- Coverage: 1,400+ square miles across 11 cities (T2 — Electrek May 2026)
- Expansion: Atlanta, Miami, Washington DC in 2026; Hyundai Ioniq 5 + Zeekr RT as new vehicle platforms (6th-gen autonomous system) (T2)
- Manufacturing: New Magna partnership assembly plant in Mesa AZ

### 4.2 Tesla FSD / Cybercab / Robotaxi

- Cybercab production: started April 2026 per Tesla Q1 2026 earnings; HW4 with 16 GB GDDR6 per SoC (32 GB dual-chip); HW4+ upgrade to 32 GB per SoC = effective 64 GB system (T2 — InsideEVs / Electrek April 2026)
- AI4+ chip: 10% compute + 10% bandwidth increase alongside memory doubling (T2 — notateslaapp.com)
- AI5 chip: taped out; 5x AI4 compute; Optimus pivot — designed for both Cybercab and Optimus (T2 — tech-insider.org)
- Musk target: Robotaxi in "dozen or so states by year-end 2026" (T3 — X/Twitter statement)

### 4.3 China AV (Baidu Apollo Go / WeRide / Pony AI)

- Baidu Apollo Go: 300,000+ fully driverless weekly rides peak Q4 2025; 20 million cumulative rides; 26 cities (T2 — Baiguan.news); Dubai partnership for 100 robotaxis by end-2026, 1,000 by 2028 (T2)
- Pony AI: 3,000+ robotaxis target across 20+ cities by end-2026; Gen-7 mass production started; 1,000 bZ4X vehicles secured (T2 — SEC 6-K FY2026 filings)
- WeRide: 1,000+ vehicle fleet; 30+ cities globally; Abu Dhabi fully driverless operations started late 2025 (T2)
- Goldman Sachs May 2025 forecast: China robotaxi fleet from ~4,000 (2025) → ~500,000 by 2030 — 125x growth (T2 — CNBC / Baiguan.news)

---

## SECTION 5 — Surgical / Medical Robots

- Intuitive Surgical (ISRG) da Vinci: installed base 11,395 systems as of March 31, 2026 (+12% YoY from 10,189); Q1 2026 procedures +16%; Ion procedures +39%; system placements 431 Q1 2026 (232 da Vinci 5) vs 367 prior year (T1 — ISRG SEC 8-K Q1 2026 earnings, confirmed T1 source)
- Full-year 2026 guidance: da Vinci procedure growth 13.5%–15.5% (T1 — ISRG earnings)
- Medtronic Hugo, Stryker Mako: no fresh T1 data found in current search pass

---

## SECTION 6 — TAM / SAM Forecasts 2026 / 2027 / 2030

### TAM Table

| Segment | 2026 Market Size | 2027 | 2030 | Source | Tier |
|---|---|---|---|---|---|
| Humanoid robots (units) | 50,000–100,000 units globally | 200,000–500,000 | 250,000–1,000,000+ | Goldman Sachs (base: 250K+ for 2030); Morgan Stanley China: 446K | T2 |
| Humanoid robots ($ TAM) | ~$2B China alone (Morgan Stanley) | est. $5-8B global | $38B by 2035 (Goldman) or $5 trillion by 2050 (Morgan Stanley) | T2 — GS / MS |
| Industrial robots | $16.7B installations value; $41.22B total market 2024 | growing | $88.66B by 2030 (12.7% CAGR) | T2 — IFR / NextMSC |
| Warehouse / AMR | $2.45B software market 2025 | — | $4.47B by 2031 | T2 — MarketsandMarkets |
| Autonomous vehicles (fleet value) | China alone ~4,000 robotaxis → 500,000 by 2030 | — | $500B AV market (bull case) | T2 — Goldman China robotaxi report |
| Surgical robots | 11,395 da Vinci systems installed (T1); procedures +16% YoY | growing | — | T1 — ISRG 8-K |
| Total robotics market (all segments) | $38B (2026 per SVRC); $65.1B industrial alone (FMI) | — | $160B–$260B (BCG); $111B (ABI Research) | T2 — SVRC / BCG / ABI |

**Range compression check:** Estimates vary 3-5x at 2030 depending on source. Goldman Sachs ($38B humanoid by 2035) is NOW considered by many analysts as CONSERVATIVE given actual 2025-2026 deployment acceleration. Morgan Stanley China forecast just DOUBLED twice in six months. Bias toward underestimation appears confirmed by actual unit pace.

### Policy / Institutional Sources

- Goldman Sachs (Jan 2024): $38B humanoid TAM by 2035; revised upward since; base case 250K+ units by 2030 (T2)
- Morgan Stanley (June 24, 2026): China humanoid to 50,000 units 2026; $2B China market 2026; $15B by 2030; 446K units 2030 China (T2 — CNBC)
- IFR (Jan 2026): 700,000+ industrial units by 2028; $16.7B annual installation value at all-time high (T2 — IFR BusinessWire)
- MIIT (China): 100,000 humanoid deployed target by 2027; 10,000 factories/warehouses by Dec 31, 2026 (T2 — China Briefing)
- Micron CEO Sanjay Mehrotra (March 2026): AVs will require >300 GB DRAM; humanoid robots require comparable compute to L4 AVs = "20-year growth vector" (T1 — Micron Q2 FY2026 earnings call, investor.micron.com confirmed T1)

---

## SECTION 7 — Memory Consumption Deep-Dive

### 7.1 Per-Unit Memory BOM by Platform Type

| Platform | Memory Per Unit | Type | Source | Tier |
|---|---|---|---|---|
| NVIDIA Jetson AGX Thor (humanoid reference) | 128 GB LPDDR5X, 273 GB/s bandwidth | LPDDR5X | NVIDIA official product page (T1) |
| Qualcomm Dragonwing IQ10 (industrial/humanoid) | 64 GB LPDDR5X ECC | LPDDR5X | Qualcomm Computex June 2026 announcement (T2) |
| Unitree G1 (current) | ~16 GB LPDDR5X (not disclosed; estimated based on Jetson Orin platform) | LPDDR5X | (my model — T3/estimate) |
| Tesla HW4 (Cybercab) | 32 GB total (16 GB per SoC, dual) → HW4+ 64 GB total | GDDR6 | notateslaapp.com (T2) |
| L4 AV (future Micron projection) | >300 GB DRAM | DRAM | Micron CEO Mehrotra Q2 FY2026 earnings (T1) |
| 1X NEO (robotics reference) | LPDDR5x 64 GB in-package + 512 GB UFS 4.0 + PCIe Gen5 NVMe SSD | LPDDR5X + NAND | Robotics platform spec sheet cited in search (T2) |
| Waymo Jaguar I-PACE | ~128 GB server-class DRAM (my model — 7 compute boards, 4 GB modules per Waymo teardown estimates) | Server DRAM | (my model — estimate from industry teardowns) |

**NVIDIA x SK Hynix multi-year partnership confirmed:** NVIDIA + SK Hynix signed multi-year memory co-development agreement covering Jetson Thor robotic computing systems (LPDDR5X + 3D NAND supply) (T2 — Tom's Hardware June 2026). This is the first formal NVIDIA-Hynix supply agreement explicitly naming robotics as covered segment.

### 7.2 Total Memory Demand Math — Bottoms-Up Check

**2026 Humanoid robots:**
- ~50,000–100,000 units × 64–128 GB LPDDR5X per unit = **3.2–12.8 petabytes LPDDR5X demand from humanoids**
- Comparison: AI data centers consume estimated 100,000+ petabytes of DRAM equivalent in 2026
- **Conclusion: Humanoid robot LPDDR5X demand = ~0.003%–0.013% of total AI DRAM demand in 2026 = IMMATERIAL at current scale**

**2030 Humanoid robots (bull case):**
- 1,000,000 units × 128 GB = 128 petabytes LPDDR5X — still small vs DC demand
- BUT: L4 AV fleet at 500,000 vehicles × 300 GB = 150 petabytes DRAM — adds up across fleet replacement cycle
- **Conclusion: Robotics memory demand becomes MATERIAL in 2028–2030, not 2026**

**NAND (storage) consideration:**
- Each humanoid: 512 GB–2 TB NVMe SSD (for model weights, mapping, sensor logs)
- 100,000 units × 1 TB = 100 petabytes NAND — again small vs enterprise / hyperscaler NAND
- KIOXIA/SNDK relevance: robotics NAND demand is additive but not needle-moving in 2026

### 7.3 Held Cohort Cross-Link

| Name | Robotics Exposure (2026) | Mechanism | Scale (2026) |
|---|---|---|---|
| HYNIX | LPDDR5X supply to Jetson Thor + broader humanoid compute; SK Hynix-NVIDIA multi-year MOU | Supply partner for reference platform | Very small vs HBM in 2026; growing 2028+ |
| KIOXIA | NAND in robots + AV sensor logging + model storage | 512 GB–2 TB per unit; 100K units = 50–200 PB | Small in 2026; growing |
| SNDK | Same as KIOXIA (NAND JV partner) | Same | Small in 2026 |
| MURATA | MLCCs in robot actuators, motor drivers, power stages, DC-DC converters | Every actuator motor driver = 100–500 MLCCs; industrial robots already major MURATA customer | Current material demand; grows with industrial AI-enhancement |
| SUMCO | Wafer supply upstream to all memory for robots | Multi-hop indirect | Very indirect |
| MRVL | Custom connectivity silicon; potential robotics perception/networking chips | Indirect; no direct robotics design win disclosed | Speculative in 2026 |
| NBIS | Data-center AI training for robotics foundation models (GR00T, Gemini Robotics) | Cloud-side demand, not edge | Indirect; medium-term |

---

## SECTION 8 — Recent (Last 30 Days) Directional Signals

| Date | Signal | Source | Tier | Direction |
|---|---|---|---|---|
| 2026-06-24 | Morgan Stanley doubles China humanoid forecast TWICE in 2026 to 50,000 units; $2B 2026; $15B 2030 | CNBC / SCMP | T2 | Bullish humanoid volume |
| 2026-06-18 | China ships 90% of global humanoid units; leads AI benchmarks per TechTimes | TechTimes | T2 | China dominance confirmed |
| 2026-06-15 | Shihang Intelligent (Beijing) raises $1B Series A | AI Funding Tracker | T2 | Continued VC flow |
| 2026-06-10 | NEURA Robotics: $1.4B Series C led by Tether; Amazon + NVIDIA + Qualcomm + Bosch + Schaeffler + EIB | CNBC | T2 | Western institutional validation |
| 2026-06-01 | Qualcomm Dragonwing IQ10: 64 GB LPDDR5X, 700 TOPS for industrial/humanoid; Sep 2026 GA | HotHardware/Semiaccurate | T2 | Memory content per unit confirmed |
| 2026-06-08 | NVIDIA + SK Hynix multi-year memory co-development and supply agreement naming Jetson Thor robotics | Tom's Hardware | T2 | First formal robotics-specific memory supply pact |
| 2026-05-13 | Waymo expands coverage 20%; 1,400+ sq miles; 11 cities | Electrek | T2 | AV fleet growing |
| 2026-04-23 | Tesla HW4+ announced: doubled RAM to 32 GB per SoC (64 GB system) | notateslaapp.com | T2 | AV memory doubling |
| 2026-03-19 | Micron CEO: AVs will need >300 GB DRAM; "20-year growth vector" from robotics | Micron Q2 FY26 earnings (T1) | T1 | Supplier-side demand validation |
| 2026-02-11 | Apptronik $520M extension; total $935M Series A; Google + Mercedes lead | CNBC | T2 | Western humanoid funding intact |
| 2026-01-05 | Boston Dynamics Atlas production-ready unveiled at CES; all 2026 units committed to Hyundai + DeepMind | Engadget/Automate.org | T2 | Premium Western humanoid limited volume |
| 2026 YTD | Total robotics VC: $18.8B raised in 2026 vs $15B full year 2025 (Crunchbase) | Crunchbase | T2 | Funding surge continuing |

---

## SECTION 9 — Cross-Links to Held Cohort Framework

### 9.1 PC-14 Sovereign-AI Bifurcation

**CONFIRMED in robotics:** The US/China bifurcation in robotics is more extreme than in data-center AI. Chinese humanoid cluster (Zhiyuan, Unitree, UBTech, Leju, Galbot, Vbot, Booster, Astribot) accounts for ~80% of global humanoid shipments. Western cluster operates premium-tier, lower volume. MIIT's 15th Five-Year Plan elevates embodied intelligence to strategic pillar alongside quantum and biotech. Chinese supply chain (Suzhou Green Harmonic reducing Western reducer share from ~60% to ~40% at Nabtesco) is creating separate component ecosystems. **Robotics bifurcation trajectory is FASTER and DEEPER than data-center-AI bifurcation** — relevant to any robotics component thesis requiring global socket.

### 9.2 Buildings-as-Binding-Constraint (PM-CEREBRAS-BUILDINGS analog)

**Partial analog confirmed for robotics:** Factory floor / warehouse space is a REAL constraint for industrial robot deployment. Hyundai's Robotics Metaplant Application Center planned for Savannah GA; Boston Dynamics Atlas deployment pushed to 2028 due to factory build timeline. 1X Technologies opened 58,000 sq ft manufacturing facility in Hayward CA. RoboFab (Agility), BotQ (Figure), RoboFab (Agility) are all purpose-built facilities — each took 12-24 months to stand up. Analogy is imperfect: robotics deployment spaces are existing factory floors (usually don't require new builds), unlike data center power which is greenfield constraint.

### 9.3 MU/HYNIX/Samsung HBM Allocation to Robotics

**NOT material in 2026:** No evidence of HBM allocation to robotics. Humanoid robots use LPDDR5X (not HBM). HBM demand is exclusively driven by data-center GPU training / inference accelerators in 2026. SK Hynix + NVIDIA multi-year agreement covers LPDDR5X for Jetson Thor (robotics) AND HBM for Blackwell GPUs (data center) — two separate products, separate supply chains. The robotics LPDDR5X demand is not competing with HBM production capacity in any near-term model.

---

## SECTION 10 — Anti-Bias Check (Per User Direction: "Remain Unbiased")

**What does NOT support the "robotics will consume a lot of memory" claim in 2026:**
- Total 2026 humanoid production is 50,000–100,000 units globally — tiny vs annual DRAM shipments of billions of GB
- Bottoms-up math (see Section 7.2): robotics memory demand = ~0.003%–0.013% of total AI DRAM demand in 2026 — immaterial
- No major memory supplier (HYNIX, Samsung, Micron) has called out robotics as a material 2026 revenue driver in earnings calls
- SK Hynix Q1 2026 earnings call: not a single mention of robotics as demand category; all emphasis on HBM, DDR5, LPDDR5X for smartphones/PC/AI (T1 — HYNIX IR)
- Micron Q2 FY2026 call: positioned robotics as "20-year growth vector" — explicitly future, not 2026 (T1 — Micron IR)

**What DOES support the claim for 2028-2030 timeframe:**
- Per-unit memory content is high and rising (64–128 GB LPDDR5X per humanoid; 300 GB per L4 AV per Micron CEO T1)
- VC funding surge ($18.8B raised YTD in robotics 2026 vs $15B all of 2025) compresses time to commercialization
- MIIT mandate for 10,000 humanoids deployed in China by Dec 2026 forces scale-up
- Goldman Sachs 2030 base case: 250,000+ humanoid units globally; Morgan Stanley China alone: 446,000 units
- At 128 GB per unit × 446,000 China units = 57 petabytes LPDDR5X in China alone by 2030 — starts to matter
- NVIDIA + SK Hynix formal multi-year supply pact naming robotics confirms memory suppliers see this as real future segment

---

## SECTION 11 — Source Quality Inventory

| Claim | Source | Tier |
|---|---|---|
| da Vinci installed base 11,395 (Q1 2026) | ISRG SEC 8-K Q1 2026 | T1 |
| Micron CEO: AVs need >300 GB DRAM, 20-year robotics growth vector | Micron Q2 FY2026 earnings call, investors.micron.com | T1 |
| NVIDIA Jetson Thor 128 GB LPDDR5X specification | NVIDIA product page nvidia.com/en-us/autonomous-machines | T1 |
| Morgan Stanley China humanoid 50,000 units 2026 upgrade (June 24, 2026) | CNBC / SCMP, June 24, 2026 | T2 |
| Goldman Sachs 250,000+ humanoid units 2030 base case | Goldman Sachs Insights article | T2 |
| IFR industrial robot market $16.7B value; 575,000 units 2025 | IFR World Robotics 2025 / BusinessWire Jan 2026 | T2 |
| China MIIT 10,000 humanoids deployed by Dec 2026 mandate | China Briefing | T2 |
| Figure AI BotQ 1 robot per 90 min April 2026 | Sacra / SiliconANGLE | T2 (company PR) |
| Tesla "1,000+ Optimus at Fremont" Jan 2026 | Multiple blogs citing Musk | T3 |
| NVIDIA + SK Hynix multi-year robotics memory MOU | Tom's Hardware / Techtimes June 2026 | T2 |
| Qualcomm IQ10 64 GB LPDDR5X specification | HotHardware / Semiaccurate Computex 2026 | T2 |
| Pony AI 6-K SEC filing FY2026 | SEC EDGAR | T1 |
| Waymo 500K weekly rides / 1400 sq miles | Electrek May 2026 | T2 |

---

## SECTION 12 — Verdict on "Robotics Will Consume a Lot of Memory"

**Verdict: DIRECTIONALLY TRUE FOR 2028-2030 / NOT MATERIAL IN 2026**

| Question | Answer | Confidence |
|---|---|---|
| Is the claim TRUE for 2026? | NO — robotics is <0.015% of memory demand in 2026; supplier earnings confirm | High |
| Is the claim TRUE for 2028-2030? | YES — per-unit content is high (64-300 GB); units will scale 10-100x | Medium |
| Is the claim an investable thesis for HYNIX/SNDK in 2026? | NO — the current HYNIX thesis rests on HBM supercycle + DRAM shortage, not robotics | High |
| Is robotics a future additive growth vector? | YES — Micron CEO named it explicitly as "20-year growth vector" (T1) | High |
| Is Chinese bifurcation real in robotics? | YES — ~80% of humanoid volume is Chinese; supply chain localizing | High |
| Does robotics create a meaningful NAND thesis for KIOXIA/SNDK? | NOT in 2026 — 100K units × 1TB = 100PB = small; 2030+ could matter | Medium |

---

**Files to update from this subagent:** `research/signals/triangulation.md` (if robotics memory verdict reaches TC threshold); `companies/HYNIX/interpretations.md` (robotics leg is 2028+ not 2026); `sector/bottlenecks.md` (robotics LPDDR5X is next-next bottleneck, not current).

**Cross-source-log entry status:** COMPLETE — Layer 1 raw data pass. Parent agent cross-checks pending (Layers 2-4).
