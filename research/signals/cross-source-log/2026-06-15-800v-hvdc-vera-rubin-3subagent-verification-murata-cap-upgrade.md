# 2026-06-15 — 800V HVDC + NVIDIA Vera Rubin DSX 3-subagent verification: MURATA thesis MATERIALLY REINFORCED (CAGR 18%→30% + 1.25kV C0G monopoly + TC-6 N+1 confirmation via Walsin AGM T1 "past 2027"); Schneider Electric (SU.PA) UPGRADE to direct NVIDIA partner; Eaton (ETN) + Vertiv (VRT) named partners promotion; B40.3 N+1 candidate (Songchuan ticker garble) + B40.1 (Songchuan Q3'26 staleness inflation)

**Workflow:** Workflow #9 step 0-4 executed via 3 parallel research subagents per user directive *"another data point... run your own verification check and extrapolation against."*

**Trigger:** User-shared 工商時報 article 2026-06-15 03:00 ("輝達、Google率先導入 800V HVDC提前上陣 不只台達電 這2台廠商機發酵") claiming NVIDIA Vera Rubin + Google AI data centers adopting 800V HVDC, Q3 2026 shipments, Taiwan suppliers Delta/Songchuan/Actron + global Schneider/Eaton/Siemens/Vertiv integration.

## 1. Pre-verification hypothesis set (my model, B45-corrected)

| H | Pre-verification |
|---|---|
| H1 Signal REAL + material; Schneider role T1 | 60% |
| H2 Partially real, suppliers overstated | 25% |
| H3 Real + small-cap stock-promo inflation | 10% |
| H4 Stale Computex recycle | 5% |

## 2. Subagent A (NVIDIA + Schneider/Eaton/Siemens/Vertiv) verdict

**NVIDIA Vera Rubin 800V HVDC VERIFIED at T1:**
- [NVIDIA 800 VDC Architecture Page](https://www.nvidia.com/en-us/data-center/technologies/800-vdc-architecture/) + [NVIDIA Technical Blog](https://developer.nvidia.com/blog/nvidia-800-v-hvdc-architecture-will-power-the-next-generation-of-ai-factories/)
- Vera Rubin DSX AI Factory Reference Design announced 2026-03-16 GTC per [NVIDIA Newsroom](https://nvidianews.nvidia.com/news/nvidia-releases-vera-rubin-dsx-ai-factory-reference-design-and-omniverse-dsx-digital-twin-blueprint-with-broad-industry-support)
- **Quantified:** 85% more power through same copper vs 480 VAC; 5% end-to-end efficiency gain; 70% maintenance cost reduction
- VR NVL72 in full production confirmed Computex 2026-06-01

**Schneider Electric (SU.PA) DIRECT PARTNER T1-VERIFIED** per [Schneider global newsroom 2026-03-17](https://www.se.com/ww/en/about-us/newsroom/news/press-releases/Schneider-Electric-teams-with-NVIDIA-to-develop-validated-blueprints-to-design-simulate-build-operate-and-maintain-gigawattscale-AI-Factories-69b82397e7fa28870e0cd5a3/):
- **ETAP** for electrical system design simulation + power distribution optimization
- **ITD CFD** models for thermal/airflow analysis
- **AVEVA lifecycle digital twin EMBEDDED in NVIDIA Omniverse DSX Blueprint**
- **AVEVA Process Simulation** for liquid-cooling network simulation
- This is software-layer lock-in (recurring engagement), not just hardware supply

**Eaton (ETN) T1-VERIFIED** per [Eaton BusinessWire 2026-03-16](https://www.businesswire.com/news/home/20260316466878/en/Eaton-collaborates-with-NVIDIA-to-unveil-the-Eaton-Beam-Rubin-DSX-platform-to-address-the-nearly-%247-trillion-data-center-buildout-market-from-grid-to-chip):
- "Eaton Beam Rubin DSX platform" — branded grid-to-chip AI factory architecture
- 800 VDC explicit; VP/Chief Architect at GTC 2026 booth

**Vertiv (VRT) T1-VERIFIED:** 2 PRNewswire releases; OneCore Rubin DSX validated in Omniverse DSX Blueprint; 800 VDC portfolio H2 2026

**Siemens T1-VERIFIED** in NVIDIA GTC official PR; framework + Siemens Energy Noedra digital twin using NVIDIA RAPIDS/Metropolis/Isaac Sim

**Google 800V HVDC NOT directly verified at T1** — but Google co-authored OCP Mt Diablo spec (May 2025) which COVERS 800V as viable option. Direct Google 800V commitment not announced.

## 3. Subagent C (MLCC BOM-intensity at 800V) verdict — LOAD-BEARING for held MURATA

**800V HVDC architecture STRUCTURALLY INCREASES MLCC content per rack:**

| PDN Stage | Legacy 48V/54V | 800V HVDC |
|---|---|---|
| AC-to-rack conversion | Yes (facility) | Eliminated |
| **800V → 50V IBC stage (LLC resonant)** | **None** | **ADDED — per-rack new** |
| 50V → GPU point-of-load | Yes | Yes (unchanged) |
| High-voltage resonant MLCCs | None | Added (1kV-class) |
| Decoupling stages | 1 | 2 (IBC + PoL) |
| Rack-level total MLCC count | Baseline | **HIGHER (net additive)** |

**Quantitative anchor:** 100V MLCC 1210 = 1-10µF capacitance; 1.25kV MLCC 1210 = ~15nF = **~100× capacitance-per-unit reduction** at resonant stage → many more units in parallel for equivalent capacitance.

**Murata-specific T1 evidence (LOAD-BEARING):**

- **Feb 2026 Murata "Power Delivery Guide for AI Servers" T1** ([murata.com news 2026-02-04](https://www.murata.com/news/other/other/2026/0204)) — explicitly addresses 12V → 54V → ±400V/800V migration; covers VPD + iPaS substrate + multi-stage DC-DC
- **Dec 2025 Murata 1.25kV C0G MLCC mass production T1** ([BusinessWire 2025-12-01](https://www.businesswire.com/news/home/20251201104421/en/Murata-Unveils-Worlds-First-15nF1.25kV-C0G-MLCC-in-1210-inch-Size)) — **WORLD-FIRST 15nF/1.25kV in 1210, explicitly targeting 800V bus architectures + SiC MOSFET resonant/snubber**
- **Murata CEO Norio Nakajima T1:** 15,000-25,000 MLCCs per AI server; GB200 NVL72 rack ~440,000 MLCCs
- **CAGR guidance revised 18% → 30% through FY2030** (revised late 2025 AFTER 800V became architecture direction)
- **AI server MLCC orders "doubled capacity"** per [Digitimes Feb 2026 T2](https://www.digitimes.com/news/a20260218VL202/murata-mlcc-capacity-ai-server-demand.html)
- **¥50B power module revenue target FY2027** per [TrendForce T2](https://www.trendforce.com/news/2025/12/17/news-murata-reportedly-to-mass-produce-ai-server-power-modules-in-2026-targets-%C2%A550b-by-fy27/)

**Cross-vendor positioning:**

| Vendor | 1kV+ MLCC status |
|---|---|
| **Murata** | 1.25kV C0G 1210 mass production Dec 2025 — **ONLY confirmed vendor for AI-server 800V tier as of Jun 2026** |
| Samsung Electro-Mechanics (SEMCO) | 1000V C0G 1210; AI MLCC revenue 3%→9%→10%+ 2023-25; lagging Murata |
| TDK / Taiyo Yuden / Yageo | No specific AI-server 800V SKU |

**Murata is the SOLE confirmed vendor for AI-server 800V MLCC tier as of Jun 2026.**

## 4. Subagent B (Taiwan suppliers + Walsin) verdict — TC-6 N+1 CONFIRMATION

### Delta 2308.TW — T1 CONFIRMED

- [Delta GTC 2026 press release T1](https://www.prnewswire.com/news-releases/delta-exhibits-energy-saving-solutions-for-800-vdc-in-next-gen-ai-factories-and-digital-twin-applications-built-on-omniverse-at-nvidia-gtc-2026-302715850.html) — 800V HVDC In-Row 660kW Power Rack with BBU
- COO Simon Chang at Computex 2026-06-02 explicitly presented Vera Rubin + 800V HVDC rack
- [Taipei Times 2026-06-04 T2](https://www.taipeitimes.com/News/biz/archives/2026/06/04/2003858476): "small-volume shipments to NVIDIA Q3 2026"
- Q1 2026: gross margin 37% record; EPS NT$7.91, +101% YoY
- Critical nuance: "small-volume shipments" not mass production; NVIDIA hasn't publicly designated Delta as sole-source
- **Investability:** DLELY OTC ADR exists but Degiro OTC Pink Sheet access restricted; direct 2308.TW not Degiro-accessible; **REFERENCE ARTIFACT**

### Songchuan Precision — CRITICAL TICKER ERROR + B40.1 STALENESS

- **Article said 6202.TW; actual is 7788.TW (TPEX)** — Taiwan trade press ticker garble
- **B40.3 N+1 candidate** — Songchuan ticker garble joins prior B40.3 confirmed taxonomy (DeepSeek FlashMemory + Murata order-restriction). If counted, B40.3 advances to N=3 + 1 retroactive = N=4 strong VERIFIED-HIGH-CONFIDENCE
- **B40.1 staleness:** Jan 2026 investor-conference forward-looking statement ("bear fruit 2026 year-end or 2027") reported in June as "Q3 2026 beneficiary" = 5-month staleness inflation
- Real underlying: HVDC relay certification ongoing with Delta + Lite-On (NOT directly NVIDIA); 2nd production line activated Jan 2026; 2026 end / 2027 timeline per management
- **Investability:** 7788.TW TPEX; no ADR; REFERENCE ARTIFACT

### Actron Technology 8255.TWO — PARTIAL + STOCK-PROMO INFLATION

- Real products: 4 HVDC module types limited production; 1700V SiC modules sample stage
- **Management own timeline: large-scale HVDC after 2027** — Q3 2026 beneficiary framing PREMATURE
- Stock hit limit-up NT$187 on news — stock-promo inflation flag
- NVIDIA NOT directly named — inference via Delta supply chain
- **Investability:** 8255.TWO TPEX; no ADR; REFERENCE ARTIFACT

### Walsin Technology 2492.TW — T1 CONFIRMED "past 2027" (the critical claim)

- **AGM 2026-06-12 T1 — GM Tseng Ming-tsan: shortage "extends to 2027 or beyond 2028"** per [TVBS T1.5 citing AGM](https://news.tvbs.com.tw/money/3230612)
- B/B ratio 1.3-1.4 (above Murata's 1.25)
- Capex raised NT$0.5-1B → **NT$3B+ (3× increase)**
- MLCC utilization 80-85%
- **AI server MLCC usage: 2× by 2026, 4× by 2027 vs 2025 base** (Q1 2026 earnings call T1 per [BigGo Finance 2026-05-27](https://finance.biggo.com/news/TW_2492.TW_2026-05-27)) — **bottoms-up demand anchor**
- MLCC revenue share 46.4% Q1 2026
- Price hike on resistors + selected MLCCs from June 1, 2026

**B40.3 partial resolution on yesterday's Walsin attribution flag:** June 12 AGM clarifies Walsin's main quote was about END-MARKET DEMAND (not equipment vs materials). Equipment-vs-materials disambiguation gap remains open at the prior 2026-06-14 cascade level, but Walsin's general framework is clearer.

**B40.1 freshness:** June 12 AGM → June 14 article = 2-day lag = FRESH primary source.

### MLCC "四巨頭" clarification (CRITICAL — different from global big 4)

The Taiwan-listed 4 (NOT Murata/Samsung/TDK/Yageo):
1. **Yageo 2327.TW** — B/B above Murata at 1.3+
2. **Walsin Technology 2492.TW** — "past 2027/beyond 2028"; capex 3× to NT$3B+
3. **Heshintang 3026.TW** — Chairman Tang Jing-rong: high-end passive component equipment lead times 1-1.5 years; supply-demand gap to widen further
4. **Shin Chang Electronics 4739.TW** — High-voltage MLCC orders surge

## 5. Posterior reweighting (combined all 3 subagents, my model)

| H | Prior | Post-A | Post-C | Post-B | **Final** |
|---|---|---|---|---|---|
| H1 Article real + material | 60% | 88% | 92% | 80% | **80%** |
| H2 Partially overstated | 25% | 10% | 5% | 15% | **15%** |
| H3 Stock-promo inflation | 10% | <1% | <1% | 3% | **3%** |
| H4 Stale recycle | 5% | 2% | 2% | 2% | **2%** |

H2 stayed at 15% because B caught real overstatement: Songchuan + Actron Q3 2026 beneficiary framing PREMATURE per their own management timelines. Core thesis (Delta + Walsin + MLCC cluster + Schneider role + 800V transition) is REAL but article inflated small-cap supplier-specificity.

## 6. N-th order cascade

- **1st order (P>85%):** MURATA held thesis MATERIALLY REINFORCED — CAGR 18%→30%; 1.25kV C0G monopoly; TC-6 N+1 confirmation via Walsin AGM T1; 800V IBC stage adds rack-level MLCC structurally
- **2nd order (P~65%):** Schneider Electric (SU.PA) UPGRADE — RANK 5 (2nd-order) → direct NVIDIA partner via AVEVA software-layer lock-in in Omniverse DSX Blueprint; recurring engagement not one-time hardware sale
- **3rd order (P~45%):** Eaton (ETN, NYSE) + Vertiv (VRT, NYSE) named NVIDIA partners — promotion candidates from harness universe stub / existing watchlist to active prioritization
- **4th order (P~25%):** OCP ±400V Mt Diablo vs NVIDIA 800V architectural split — hyperscaler-internal builds may route around 800V via Mount Diablo; ±400V vendor ecosystem becomes bypass-route winner if hyperscaler-internal dominates over NVIDIA AI Factories

## 7. Bypass-route check (Critical Rule #9)

The **NVIDIA 800V vs OCP ±400V Mt Diablo split is the bypass route.** Hyperscaler-internal builds (Google/Meta/Microsoft) MAY route around 800V via ±400V Mount Diablo for AI factories they build themselves. ±400V vendor ecosystem (different supply chain — Google/Meta/Microsoft co-authored Diablo spec May 2025) becomes the bypass-route winner if hyperscaler-internal builds dominate over NVIDIA-branded AI Factories. Watch 2027-2028 for the architectural divergence to play out.

**Falsification monitor:** **Navitas direct 800V → 6V single-stage GaN board** demonstrated at GTC 2026 per Semiconductor Today T2. If this topology scales to >50% of server trays, would compress tray-level MLCC count uplift. Track Navitas production ramp + NVIDIA Rubin Ultra Kyber (H2 2027) tray design specs.

## 8. U8 framework refinement (L26 update)

**800V HVDC PARTIAL OFFSET to U8 (token-cost-elasticity inflection candidate falsifier):**

| U8 prong | 800V HVDC offset? |
|---|---|
| Efficiency-prong (bits-per-token compression) | **PARTIAL OFFSET** — rack power scales with deployment regardless of token efficiency |
| Demand-destruction prong (fewer racks deployed in macro capex reversal) | **NO OFFSET** — provides zero protection if hyperscalers stop ordering racks |

**U8 net verdict:** 800V HVDC defends MURATA against U8's efficiency-prong but NOT against macro-capex-reversal. F13 monitoring still operational; F13 effect on MURATA specifically is muted by 800V mechanism but not eliminated. L26 framework refinement: PARTIAL anti-U8 mechanisms exist at technology-transition layer that decouple component demand from per-token efficiency.

## 9. Joint-state held cohort matrix

| Held | Impact | Cascade required? |
|---|---|---|
| **MURATA (held ~4.9%)** | **MATERIALLY REINFORCED** — Murata IR T1 CAGR 18%→30%; 1.25kV C0G monopoly; Walsin AGM T1 "past 2027" + AI server MLCC 4× by 2027 = TC-6 N+1; 800V IBC stage structural BOM uplift | **YES — major thesis update** |
| HYNIX | NEUTRAL — power layer orthogonal | No |
| SUMCO | NEUTRAL | No |
| SNDK | NEUTRAL | No |
| MRVL | NEUTRAL — custom Si demand intact regardless of 800V vendor stack | No |
| DDOG / NOW | NEUTRAL | No |

## 10. Watchlist promotion / re-rank table

| Name | Verdict | Action |
|---|---|---|
| **SU.PA Schneider Electric** (current RANK 5 EU watchlist 2nd-order) | T1 direct NVIDIA partner via ETAP + AVEVA + Omniverse DSX | **UPGRADE RANK 5 → RANK 2** (software-layer lock-in = recurring revenue model) |
| **ETN Eaton** (CLAUDE.md universe stub) | T1 Beam Rubin DSX platform; 800 VDC explicit | **PROMOTE to active watchlist** |
| **VRT Vertiv** (existing watchlist) | T1 OneCore Rubin DSX validated; H2 2026 portfolio | **PROMOTE to active prioritization** within existing watchlist |
| SIE.DE Siemens | T1 framework role; less differentiated than Schneider AVEVA | Log only |
| Delta 2308.TW | T1 confirmed but small-volume Q3'26; DLELY OTC ADR Degiro-restricted | Reference artifact |
| Songchuan 7788.TW / Actron 8255.TWO / Walsin 2492.TW | TPEX/TWSE not Degiro-accessible | Reference artifacts |

## 11. Cascade execution (same commit)

- This cross-source-log: `2026-06-15-800v-hvdc-vera-rubin-3subagent-verification-murata-cap-upgrade.md`
- `companies/MURATA/thesis.md` — MAJOR UPDATE (6th today): CAGR 30% + 1.25kV C0G monopoly + Walsin AGM T1 N+1 + 800V IBC structural BOM uplift + U8 partial-offset
- `watchlist/candidates.md` — Schneider RANK 5 → RANK 2 upgrade; Eaton promotion entry; Vertiv promotion note
- `signals/triangulation.md` TC-6 — N=5→N=6 with Walsin AGM T1 "past 2027" confirmation; AI server MLCC 4× by 2027 demand anchor
- `signals/triangulation.md` TC-3 — vendor-stack-lock-in note (Schneider AVEVA + Eaton Beam + Vertiv OneCore embedded in NVIDIA Blueprint)
- `meta/biases-watchlist.md` B40 — Songchuan ticker garble = B40.3 N+1 candidate (advances B40.3 to strong verified-high-confidence at N=4); B40.1 Songchuan staleness inflation
- `sector/where-we-are.md` — non-default read #10 (800V HVDC vendor-stack lock-in = recurring-revenue-model thesis, structurally different from one-time hardware sale)
- `predictions/lessons.md` L26 — partial-offset prong-specific framework refinement

## 12. Source citations consolidated

All citations inline above. Key T1 anchors:
- NVIDIA Newsroom 2026-03-16 GTC announcement
- Schneider global newsroom 2026-03-17
- Eaton BusinessWire 2026-03-16
- Vertiv PRNewswire (2 releases)
- Murata BusinessWire 2025-12-01 (1.25kV C0G mass production)
- Murata corporate.murata.com Feb 2026 PDN Guide
- Walsin AGM 2026-06-12 (TVBS T1.5)
- Walsin Q1 2026 earnings call (BigGo Finance T1.5)
- Delta GTC 2026 PR Newswire
- Taipei Times 2026-06-04 Delta interview

Full subagent transcripts (ephemeral): A `/tmp/.../a6c561114b204431c.output`; B `/tmp/.../af27894e4bf74bd07.output`; C `/tmp/.../adeaf0cc37f5748ad.output`
