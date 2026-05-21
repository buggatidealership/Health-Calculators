# AI Sector Sub-Layer Taxonomy & Coverage Map

**Last updated:** 2026-05-21
**Type:** Navigation + coverage tracker for the entire AI sector stack
**Purpose:** Per user calibration 2026-05-21 + methodology core principle #13, this file maps the AI sector at sub-layer depth, shows where coverage exists, and surfaces the highest-ROI gaps to dig into next. Replaces the prior flat ai-stack-map (which listed 9 layers at company-name level only).
**Companion:** `research/meta/deep-dig-queue.md` lists ranked component-level drills; this file lists ranked SUB-LAYER drills (different granularity).

---

## TL;DR

**13 layers, ~80 named sub-layers identified.** Coverage:
- 9 wiki primers cover 6 layers (memory cycle, HBM, custom Si, optical interconnect, networking, power-for-AI, token consumption, agentic AI, agentic scaling)
- 45 company thesis files cover ~30 sub-layers
- 1 deep-dig done (MLCCs); 9 queued

**Highest-ROI uncovered sub-layers (the "next-dig" priorities):**
1. **EUV pellicles + photoresist supply chain** (Layer 1) — choke point upstream of TSMC; small market cap, structural moat
2. **Substrate / IC carrier supply** (Ibiden, Shinko — Layer 2) — every advanced package needs them
3. **OSAT advanced packaging** (ASE, Amkor — Layer 3) — TSMC overflow capacity
4. **MRAM / emerging memory** (Everspin, Avalanche — Layer 4) — bypass route if HBM remains binding
5. **AI ASIC startups** (Groq, Cerebras, Tenstorrent — Layer 5) — private but tracked as competitive threats
6. **GaN / SiC power semis** (Navitas, Power Integrations — Layer 7) — next-gen power efficiency
7. **Immersion cooling** (Submer, GRC, LiquidStack — Layer 8) — extreme density bypass
8. **Datacenter REITs** (Equinix, Digital Realty, Iron Mountain — Layer 9) — capacity scarcity proxy
9. **SMRs / nuclear new builds** (Nano Nuclear, NuScale — Layer 10) — long-dated power bypass route
10. **AI-native enterprise apps** (private: Glean, Harvey; public: PLTR — Layer 13) — late-cycle adoption proxy

**Cross-layer extrapolation patterns identified at the bottom of this file** — these are where the OS earns its keep at the META-level (patterns connecting layers, not within them).

---

## Coverage legend

- ✅ **Wiki primer** — depth in `research/wiki/`
- 🏢 **Thesis file** — depth in `research/companies/{TICKER}/`
- 🔬 **Deep-dig** — BOM-level in `research/companies/.../thesis.md` §BOM-level deep-dig section
- 📋 **Watchlist only** — surfaced but no thesis yet
- ❌ **No coverage**

---

## Layer 1: Lithography + Semi-cap (the gate to making chips)

| Sub-layer | Coverage | Key names | Note |
|---|---|---|---|
| EUV lithography | ❌ | ASML | Monopoly chokepoint; ASML thesis NOT YET BUILT |
| DUV / ArFi lithography | ❌ | ASML, Nikon, Canon | Workhorse for mature nodes |
| Deposition equipment | ❌ | AMAT, LRCX, TEL | Critical for HBM stack manufacturing |
| Etch equipment | ❌ | LRCX, AMAT | Same |
| CMP equipment | ❌ | AMAT, EBARA | Planarization |
| Inspection / metrology | 🏢 | CAMT, Onto Innovation, RIGAKU, KLA | CAMT + RIGAKU have thesis files |
| Test equipment | ❌ | Advantest, Teradyne, Cohu | Every chip tested |
| Probe cards | ❌ | FormFactor, MJC | Per `meta/deep-dig-queue.md` #10 |
| EUV pellicles | ❌ | Mitsui Chemicals, ASML EUV pellicle JV | **Critical hidden chokepoint** |
| Photoresist | ❌ | Tokyo Ohka, JSR, Shin-Etsu | **Japanese-concentrated; geopolitical exposure** |

**Layer 1 gap density: HIGH.** ASML is the single most important name in the entire stack and we don't have a thesis. Photoresist + pellicles are hidden chokepoints. PRIORITY: ASML thesis + photoresist sub-layer wiki.

---

## Layer 2: Materials / Substrate (the physical inputs)

| Sub-layer | Coverage | Key names | Note |
|---|---|---|---|
| Silicon wafers | ❌ | Shin-Etsu, SUMCO, GlobalWafers | The deepest physical layer |
| Compound semi — InP | 🏢 🔬 | **AXTI (held)** | 60-70% global share; AIXTRON equipment upstream |
| Compound semi — GaAs | 🏢 | **AXTI (held)**, IQE | Same supplier |
| Compound semi — GaN | ❌ | Wolfspeed, Navitas | Power semi adjacency |
| Photoresist | ❌ | (same as Layer 1) | Cross-layer |
| CMP slurries / specialty chemicals | ❌ | Cabot Microelectronics (acquired by Entegris), DuPont, Versum | Tiny mention only |
| Specialty gases | ❌ | Linde, Air Products, Air Liquide, Mitsui High-tec | Fab feed |
| Rare earths | ❌ | Lynas, MP Materials, China-dominated | Geopolitical |
| **Substrate (IC carrier / ABF) for advanced packaging** | ❌ | Ibiden, Shinko, AT&S, Unimicron | **Critical for CoWoS; major gap** |
| MLCC raw materials | 🔬 | Murata + Samsung EM (downstream) | Silver, palladium, BaTiO3 |
| Lead frames + bonding wire | ❌ | (smaller suppliers) | Cu/Au tradeoff |
| Wafer carriers / FOUPs | ❌ | Entegris | Logistics in fab |

**Layer 2 gap density: VERY HIGH.** Silicon wafers (Shin-Etsu, SUMCO) and IC substrate carriers (Ibiden, Shinko) are EVERY-chip dependencies. PRIORITY: silicon wafer wiki + Ibiden/Shinko thesis.

---

## Layer 3: Foundry

| Sub-layer | Coverage | Key names | Note |
|---|---|---|---|
| Leading-edge logic foundry | 🏢 | TSMC, Samsung Foundry, Intel Foundry | TSM thesis NOT YET BUILT (but cross-referenced everywhere) |
| Mature-node logic | ❌ | UMC, GlobalFoundries, SMIC | Used for power, RF, sensors |
| **Advanced packaging — CoWoS** | ✅ partial | TSMC | Covered in HBM primer; not own wiki |
| **Advanced packaging — 2.5D / 3D** | ❌ | Samsung, Intel | Adjacent to CoWoS |
| OSAT (outsourced assembly + test) | ❌ | ASE, Amkor, JCET, Powertech | Critical overflow capacity for TSMC |
| Specialty foundries | 🏢 | **TSEM (held)** | Analog/RF/power, silicon photonics |
| HBM die manufacturing | ✅ | (Hynix/Samsung/Micron — also memory) | Cross-layer with Layer 4 |
| HBM logic base die | ❌ | TSMC | The bottom-of-stack die in HBM |

**Layer 3 gap density: HIGH.** TSM thesis (the single most important foundry) is missing despite being cross-referenced everywhere. OSAT names absent.

---

## Layer 4: Memory

| Sub-layer | Coverage | Key names | Note |
|---|---|---|---|
| **HBM (current HBM3E / next HBM4)** | ✅ 🏢 | **HYNIX (held)**, Samsung, Micron | Memory cycle + HBM primer cover deeply |
| **Conventional DRAM / DDR5** | ✅ | Same trio | Memory cycle primer |
| **LPDDR (system memory)** | ✅ | Same trio | Recent cross-source-log rumor about Rubin reduction (T5 unverified) |
| GDDR (graphics DRAM) | ❌ | Same trio | Smaller end market |
| **NAND / Enterprise SSD** | 🏢 | **SNDK (held)**, Kioxia, Samsung NAND, Hynix Solidigm | Sandisk thesis covers |
| **SRAM cache** | ❌ | (mostly on-chip; Atomera does IP) | Increasingly important for KV cache |
| **MRAM / emerging memory** | ❌ | Everspin, Avalanche Technology | Bypass route if HBM remains binding |
| **CXL / memory pooling** | ✅ | ALAB, MRVL | Astera Labs is the pure-play; thesis file exists |
| HBM packaging — MR-MUF vs TC-NCF | ✅ | Covered in HBM primer | SK Hynix moat |
| HBM logic die | ❌ | TSMC | Cross-layer L3 |

**Layer 4 gap density: LOW.** Best-covered layer in the OS. Gaps: emerging-memory (MRAM, etc.) as bypass route candidates.

---

## Layer 5: Compute silicon

| Sub-layer | Coverage | Key names | Note |
|---|---|---|---|
| **NVIDIA GPUs** | 🏢 | **NVDA** | Thesis built |
| **AMD GPUs** | ❌ | AMD MI300/MI350 | Adjacent to NVDA; thesis NOT YET BUILT |
| **Custom AI ASICs — design partners** | ✅ 🏢 | **AVGO**, **MRVL** | Custom silicon primer + thesis files |
| Custom AI ASICs — hyperscaler internal | ✅ | Google TPU, AWS Trainium, MS Maia, Meta MTIA | Covered in custom Si primer |
| **CPUs — server x86** | ❌ | AMD EPYC, Intel Xeon | Not portfolio-relevant currently |
| **CPUs — ARM-based** | ❌ | NVDA Vera (in Rubin), AmpereComputing, AWS Graviton | Vera spec covered in networking primer |
| **DPUs / IPUs** | ✅ | NVDA BlueField, AMD Pensando, MRVL OCTEON, Intel IPU | Networking primer Extrapolation 5 |
| FPGAs | ❌ | AMD Xilinx, Intel Altera, Lattice | Smaller AI share |
| **AI ASIC startups** | 📋 | Groq, Cerebras, SambaNova, Tenstorrent, Etched, MatX | Cerebras now confirmed Vicor 2nd gen VPD lead customer |
| ARM IP | ❌ | ARM Holdings | Licensor; royalty stream |
| RISC-V IP | ❌ | SiFive (private), Tenstorrent | Long-tail bet |
| Edge inference silicon | ❌ | NVDA Jetson, Hailo, Mythic | Smaller TAM |

**Layer 5 gap density: MEDIUM.** AMD thesis missing (AMD is the second-largest AI chip name). AI ASIC startups under-tracked (Cerebras now material per VICR thesis).

---

## Layer 6: Networking (recently deep-dug)

(Full sub-layer decomposition in `research/wiki/networking-primer.md`)

| Sub-layer | Coverage | Key names |
|---|---|---|
| Switch ASIC | ✅ 🏢 | AVGO, NVDA, MRVL |
| Optical engines (CPO) | ✅ 🏢 | LITE, COHR (no theses yet), AVGO, NVDA |
| Pluggable transceivers | ✅ | LITE, COHR, Innolight |
| Fiber + cables | ✅ 🏢 | **GLW (held)** |
| Retimers / SerDes | ✅ | ALAB, Credo, MRVL |
| DPUs / SmartNICs | ✅ | (same as Layer 5) |
| Active Copper Cables (ACC) | ✅ 🏢 | **SMTC** |
| Network IP / silicon | ✅ | (cadenced with switch ASIC) |

**Gaps:** Lumentum (LITE) and Coherent (COHR) thesis files — both named in optical-interconnect-primer + networking-primer but no individual thesis.

---

## Layer 7: Power delivery (board-level)

| Sub-layer | Coverage | Key names | Note |
|---|---|---|---|
| **PMICs (Power Management ICs)** | 🏢 | **VICR (held)**, MPS, Renesas, ROHM, TI | Vicor verified Q1 2026 specs; WAIT framing |
| Vertical Power Delivery (VPD) | 🏢 | VICR, MPS | Vicor 2nd gen verified |
| **MLCCs (multi-layer ceramic caps)** | 🔬 🏢 | **MURATA (held)**, Samsung EM, TDK, Taiyo Yuden, Yageo, Walsin | First deep-dig completed (GB200→Rubin) |
| Tantalum caps | ❌ | KEMET (via Yageo), AVX | Smaller bypass |
| Polymer / film caps | ❌ | Panasonic, AVX/Kyocera, Vishay | Substitution risk per MLCC deep-dig |
| Inductors | ❌ | Murata, TDK, Vishay | Smaller component count |
| **GaN / SiC power semis** | ❌ | Navitas, Power Integrations, ON Semi, Wolfspeed | **Next-gen power efficiency; not yet covered** |
| Power module packaging | ❌ | (specialty) | Adjacent to layer 2 |

**Layer 7 gap density: MEDIUM.** Wider component-coverage exists; GaN/SiC + polymer caps gaps.

---

## Layer 8: Cooling

| Sub-layer | Coverage | Key names | Note |
|---|---|---|---|
| **Liquid cooling — direct-to-chip** | 🏢 | **VRT**, Asetek, CoolIT | VRT thesis built |
| Liquid cooling — immersion | ❌ | Submer (private), GRC, LiquidStack | Extreme-density bypass |
| Rear-door heat exchangers | ❌ | VRT, Modine | Air-to-liquid transition step |
| CRAC / CRAH (air cooling) | 🏢 partial | VRT (one of) | Mature; less AI-leveraged |
| CDUs (cooling distribution units) | ❌ | VRT, Boyd | Sub-component of liquid cooling |
| Cold plates + pumps + tubing | ❌ | Boyd, Cooler Master, smaller | Mechanical sub-supply |

**Layer 8 gap density: MEDIUM.** VRT covers most; immersion cooling completely uncovered (could be bypass-route for extreme TDP scenarios).

---

## Layer 9: Datacenter — facility

| Sub-layer | Coverage | Key names | Note |
|---|---|---|---|
| Construction / EPC | ❌ | Aecom, Fluor, MasTec | The buildout phase |
| **Datacenter REITs** | ❌ | Equinix, Digital Realty, Iron Mountain | **Major gap — capacity scarcity proxy** |
| **Neoclouds (pure GPUaaS)** | 🏢 | **CRWV**, NBIS, **SHAZ**, Lambda (private) | Recently thesis-built |
| **Crypto-pivot AI hosts** | 🏢 | **CORZ**, **IREN**, **APLD**, **BITF**, **HIVE**, **BTDR**, RIOT, CLSK | Aschenbrenner names; thesis files built |
| Hyperscaler-owned datacenters | 🏢 indirect | MSFT, GOOG, META, AMZN, ORCL | Tracked via hyperscaler theses |
| Sovereign datacenters | ❌ | G42 UAE, Stargate, others | Emerging; private |

**Layer 9 gap density: MEDIUM.** Datacenter REITs (Equinix etc.) are the structural "scarcity beneficiaries" — major gap.

---

## Layer 10: Power generation + electrical infrastructure

| Sub-layer | Coverage | Key names | Note |
|---|---|---|---|
| Independent power producers / nuclear | 🏢 | **VST**, **CEG**, TLN, NEE | VST + CEG thesis built |
| **Gas turbines** | 🏢 | **GEV**, Siemens Energy, Mitsubishi Heavy | GEV thesis built |
| **Fuel cells** | 🏢 | **BE** | Aschenbrenner #1 long |
| **Solar manufacturing** | 🏢 | **TE (held)**, FSLR | TE thesis built |
| Battery storage | ❌ | TSLA Energy, NEE, EOSE, Fluence | Smaller layer for AI specifically |
| **SMRs / nuclear new builds** | ❌ | Nano Nuclear, NuScale, X-Energy (private), Oklo | **Long-dated bypass route — major gap** |
| **Electrical T&D — transformers** | 🏢 partial | GEV (via Electrification segment), HUBB | HUBB thesis built |
| **Switchgear** | 🏢 | **POWL**, ETN, ABB, Schneider | POWL + ETN thesis built |
| UPS systems | 🏢 partial | VRT, Schneider, Eaton | Cross-covered |
| Busways + PDUs | 🏢 partial | ETN, VRT | Cross-covered |
| Mobile power | ❌ | SEI (Solaris Energy), Capstone | Aschenbrenner has $62.5M SEI position |

**Layer 10 gap density: MEDIUM.** Generation + electrical broadly covered. SMR + mobile power gaps.

---

## Layer 11: Hyperscalers / Cloud (the customers)

| Sub-layer | Coverage | Key names | Note |
|---|---|---|---|
| Compute-buyers + custom-Si-builders | 🏢 | **AMZN**, **GOOG**, MSFT, META, ORCL | AMZN + GOOG theses built; MSFT/META/ORCL not yet |
| Sovereign AI buyers | ❌ | UAE G42, Saudi, etc. | Geopolitical AI wiki TBD |
| Enterprise direct buyers | 🏢 partial | PLTR (via tracked) | Mostly via software layer |
| Frontier model providers | ✅ tracked | OpenAI, Anthropic, xAI (private — in `meta/private-tracker.md`) | Token-consumption wiki covers economics |

**Layer 11 gap density: LOW-MEDIUM.** MSFT / META / ORCL thesis files would close the major-hyperscaler set.

---

## Layer 12: System / OEM

| Sub-layer | Coverage | Key names | Note |
|---|---|---|---|
| Server OEMs | ❌ | SMCI, DELL, HPE, Lenovo, Wiwynn | Standard layer; less AI-differentiated |
| Rack-scale system integrators | ❌ | Same names | Cross-layer |
| Custom-built hyperscaler systems | ❌ | (in-house) | Not a public investment surface |

**Layer 12 gap density: HIGH but priority LOW** — OEMs are commoditizing; less alpha here.

---

## Layer 13: Software / Application

| Sub-layer | Coverage | Key names | Note |
|---|---|---|---|
| Model providers (frontier) | ✅ tracked | OpenAI, Anthropic, xAI, Mistral | Private; tracked in `meta/private-tracker.md` |
| Vector databases | 🏢 | **ESTC**, MongoDB MDB, Pinecone (private) | ESTC thesis built |
| Data streaming | 🏢 | **CFLT (IBM takeout pending)**, AWS Kinesis | Thesis built |
| ML platforms | ❌ | DBRX (Databricks private), SNOW, Hugging Face | SNOW not yet thesised |
| **Observability + agentic** | 🏢 | **DDOG (held)**, Splunk (Cisco-owned), **ESTC** | DDOG + ESTC covered |
| **Workflow / agentic** | 🏢 | **NOW (held)**, **TEAM (Atlassian)**, Salesforce | NOW + TEAM built |
| AI-native enterprise apps | 🏢 partial | **PLTR (tracked)** | PLTR thesis NOT YET BUILT despite reference |
| AI-coding tools | ❌ | GitHub Copilot (MSFT), Cursor (private), Codeium | Mostly private |
| AI-vertical SaaS | 🏢 partial | **PURR (held — legal AI)** | PURR thesis exists |
| Cybersecurity AI | ❌ | CRWD, Palo Alto | Cross-cutting layer |
| Edge AI / robotics | ❌ | TSLA Optimus, Figure (private), Boston Dynamics | Long-dated bypass route |

**Layer 13 gap density: MEDIUM.** PLTR thesis is the most material gap given user awareness; MSFT/AI-coding sub-layer also under-covered.

---

## Coverage gaps — prioritized "where to dig next"

Per methodology core principle #13 (first-principles + extrapolation framework), the gaps below are ranked by:
1. Cross-layer leverage (does drilling here unlock multiple thesis updates?)
2. Held-position relevance (does it affect a current portfolio name?)
3. Asymmetric setup potential (under-followed / structural / non-consensus)

### Tier 1 — Highest ROI

1. **ASML thesis** (Layer 1) — single most important name in the entire stack; cross-referenced everywhere but no thesis file. Hub for whole-stack analysis.
2. **TSM thesis** (Layer 3) — same: foundational, cross-referenced, no thesis.
3. **PLTR thesis** (Layer 13) — user-aware name, AI-native architecture, no thesis built. Surfaces in agentic-AI-enterprise primer.
4. **AMD thesis** (Layer 5) — second-largest AI chip name; competitive context for NVDA + AVGO.
5. **Equinix / Digital Realty REITs thesis** (Layer 9) — capacity-scarcity beneficiaries; under-tracked vs hyperscalers.

### Tier 2 — Hidden chokepoints (structural moats consensus underweights)

6. **EUV pellicles + photoresist sub-layer wiki** (Layer 1/2) — Japanese-concentrated; geopolitical chokepoint upstream of ASML.
7. **IC substrate carrier (Ibiden, Shinko)** (Layer 2) — every advanced package needs ABF substrate.
8. **OSAT advanced packaging (ASE, Amkor)** (Layer 3) — TSMC overflow.
9. **Silicon wafer suppliers (Shin-Etsu, SUMCO)** (Layer 2) — deepest physical layer; consensus underweights.
10. **GaN / SiC power semis** (Layer 7) — efficiency bypass route as TDP rises (cross-cascade from MURATA deep-dig).

### Tier 3 — Long-dated / forward-looking bypass routes

11. **SMR / nuclear new builds** (Layer 10) — multi-year but potentially large.
12. **MRAM / emerging memory** (Layer 4) — HBM bypass-route if memory bottleneck doesn't ease.
13. **Immersion cooling** (Layer 8) — extreme-density bypass.
14. **Edge AI / robotics** (Layer 13) — TSLA Optimus, Figure trajectory.
15. **AI ASIC startups (Groq, Cerebras, Tenstorrent)** (Layer 5) — Cerebras now confirmed VICR customer; private but worth tracking.

### Tier 4 — Complete the wiki framework

16. **Hyperscaler capex primer** (P3 wiki) — meta-layer on AI demand
17. **Geopolitical AI primer** (P3 wiki) — Layer 1/2 export controls
18. **Model economics primer** (P3 wiki) — Layer 13 unit economics

---

## Cross-layer extrapolation patterns (the meta-edge)

These are patterns that connect MULTIPLE layers — not findings within one layer. They're where the OS earns its biggest edge because consensus tends to analyze layers in isolation.

### Pattern A — TDP doubling cascade through 5+ layers

Rubin TDP doubles vs Blackwell. This single fact cascades through:
- Layer 7 (MLCC count doubles per board — verified deep-dig)
- Layer 7 (PMIC count expansion — cross-cascade noted in VICR thesis)
- Layer 8 (liquid cooling required at higher TDPs — VRT extrapolation)
- Layer 6 (switch silicon TDP doubles too — networking primer Extrapolation 3)
- Layer 10 (datacenter power draw rises 1.5-2× per rack)
- Layer 10 (electrical infrastructure inside datacenter must upgrade)

**Single physical fact → 6 layer impacts.** This is the kind of multi-layer cascade that BOM-level analysis surfaces.

### Pattern B — Crowding-out math operates at multiple component levels

The "AI demand reallocates supplier capacity → consumer markets pay" pattern documented in:
- HBM wafer-area crowding out commodity DRAM (memory cycle primer)
- High-end MLCC capacity reallocated from consumer to AI (MURATA deep-dig)
- NAND production shifted to enterprise SSD (memory cycle primer)
- TSMC CoWoS capacity preventing custom-Si overflow (custom Si primer)

**Same structural mechanism, different components.** Generalize: any supply-chain with concentrated suppliers + AI premium pricing + finite wafer/capacity = crowding-out → consumer-market price spike. Could apply to: power semis, RF components, photoresist (Japanese supply going to NVIDIA first), specialty gases.

### Pattern C — 4× compound BOM growth per generation in concentrated component categories

Documented:
- Optical engines per switch: 8 → 16 + engine capacity 3.2T → 6.4T = 4×
- MLCC per board: GB200 → Rubin = ~2× per board × volume growth = >2x compound
- Could project: PMIC content per board (if same TDP-doubling mechanism applies)
- Could project: HBM stack count × stack capacity (HBM3E 12-Hi 36GB → HBM4 16-Hi 64GB = 1.8x at constant stack count; actual stack count may also rise per GPU)

**Pattern: every generational chip transition expands BOM in concentrated component categories at >2x.** Layer-7 + Layer-6 cycles compound faster than Moore's Law transistor count.

### Pattern D — Recognition-stage cascade across the stack

Consensus first prices the top of the stack (compute), then the middle (memory, networking), then the deeper layers (substrate, materials, equipment). By the time consensus reaches Layer 1-2 (deepest), Layer 5-6 (compute, networking) is already at Stage 4-5.

**Implication:** the asymmetric setups (Stage 0-2) live in DEEPER layers. AXTI surfaced from Layer 2 substrate is the example. Photoresist + pellicles likely next.

### Pattern E — Geopolitical concentration is non-uniform by layer

- Layer 1 (lithography): Netherlands monopoly (ASML)
- Layer 2 (specialty materials): Japan-heavy (Shin-Etsu, JSR, Tokyo Ohka)
- Layer 3 (foundry): Taiwan-heavy (TSMC)
- Layer 4 (memory): Korea-heavy (Hynix, Samsung) + US (Micron)
- Layer 5 (compute): US-heavy (NVDA, AMD, AVGO)
- Layer 10 (power generation): more US-domestic
- Layer 13 (software): US-heavy

**Implication:** sovereign AI buildouts (Geopolitical AI primer P3 wiki) reweight risk per layer differently. NVDA-lock-in risk (Layer 5) ≠ TSMC-Taiwan risk (Layer 3) ≠ photoresist-Japan risk (Layer 2). Each has different bypass routes.

---

## How to use this taxonomy

- **Planning the next wiki / thesis / deep-dig:** scan Tier 1-3 gaps; pick by ROI heuristic
- **Reading the gap list as a queue:** like `meta/deep-dig-queue.md` but at sub-layer rather than component granularity
- **Cross-layer pattern recognition:** when a new signal hits, scan Patterns A-E to ask "does this signal trigger a cross-layer cascade?"
- **Coverage maintenance:** when a new thesis or wiki ships, update this file's coverage markers. The file is the single-page navigation for the whole OS.

## Cross-references

- `research/CLAUDE.md` §Universe — original universe spec
- `research/meta/methodology.md` core principle #13 — first-principles + extrapolation framework
- `research/meta/deep-dig-queue.md` — component-level queue (different granularity)
- `research/wiki/` — 9 primers covering 6 layers
- `research/companies/` — 45 thesis files covering ~30 sub-layers
- All wikis listed in coverage tables above
