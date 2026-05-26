# 2026-05-26 — Positional Strength + Duration Per Position (15 holdings)

**Purpose:** Per user instruction 2026-05-26: take each holding's STRONGEST narrative → assess positional strength within that specific layer → compute duration based on latest fresh trends (AI chip architecture + supply chain + agentic adoption + workload patterns).

**Input research (all conducted 2026-05-26, sequential agents):**
- Agent 1: AI chip architecture roadmap (Rubin/Rubin Ultra/Feynman + custom-Si + HBM + CoWoS + CPO + ARM AGI)
- Agent 2: Substrate dynamics (InP for AXTI + BaTiO3 for Murata/4092)
- Agent 3: Humanoid + cobot + industrial robot deployment (HDS + Nabtesco)
- Agent 4: Agentic enterprise + workload patterns (NOW + DDOG + SNDK + STM)

## Methodology

Per position, score:
- **Strongest narrative**: dominant value-driver (NOT multi-narrative breadth)
- **Layer position**: where in value chain (substrate / equipment / component / system / software / end-customer)
- **Positional relevance**: market share + moat type
- **Duration of relevance** (years): until substitute / tech transition / capacity normalization / cycle peak weakens position
- **Falsifier for the duration estimate**: what fires the downgrade

## Position-by-position scoring

### Tier-A: Universal multi-narrative champions

**1. Murata (held 12.35%) — strongest narrative: MLCC for AI server boards**

- Layer position: COMPONENT (one step above PCB; below board-assembly)
- Positional relevance: 40% global MLCC share; AI-grade high-capacitance (≥10μF, low-ESR, X8R/X9R dielectric at sub-100nm BaTiO3) is concentrated in Murata + Samsung EM + TDK + Taiyo Yuden duopoly-plus
- BOM math: Rubin (VR200) rack MLCC value **~$4,320 vs GB300 ~$1,530 = +182%** per Morgan Stanley (cited Bitget). 40-60K MLCCs per next-gen GPU rack. AI servers consume ~7.5% of MLCC capacity vs only 1.1% of units (concentration ahead of unit-share).
- Pricing power confirmed: April 2026 Murata 15-35% hike + Samsung EM 5-10% + Taiyo Yuden 6-13% = **3-of-3 tier-1 MLCC makers raising prices simultaneously per TrendForce + Digitimes** (TRIANGULATED industry-wide)
- **Duration: 3-5 years (Long)**. Falsifier: Chinese MLCC suppliers (Yageo, Walsin) qualify for AI-grade at hyperscaler OEMs OR ASP correction >10% within 6 months OR Murata announces capacity-doubling capex reversing Post-Traumatic Supply Disorder

**2. STM (held 7.33%) — strongest narrative: power semi (SiC) + MEMS for Physical AI**

- Layer position: COMPONENT (silicon-content per board)
- Positional relevance: Multi-narrative 6+/5; sits on 2 of 3 investable robotics universals (power electronics top 5 = 62.9%; IMU/MEMS top 5 = 55%); NXP MEMS acquisition Feb 2026 strengthens MEMS position
- Mgmt-disclosed: DC revenue >$500M FY26, >$1B FY27 (+100% YoY)
- **CRITICAL competitive intensity update (Agent 4):** Wolfspeed exited Ch11 Sept 29, 2025 with $4.6B debt eliminated — **restructured solvent competitor**, NOT eliminated from market per [Wolfspeed press release](https://www.wolfspeed.com/company/news-events/news/wolfspeed-successfully-completes-financial-restructuring-emerges-as-financially-stronger-company-well-positioned-in-silicon-carbide-market/). Plus onsemi $250M+ AI-DC revenue + JFET acquisition; Navitas explicit AI-DC focus.
- Sustained inference 85-95% TDP confirms duty-cycle mechanism for STM thesis (700W H100, 1,000W B200, 10-10.5 kW per 8-GPU server) per [Spheron](https://www.spheron.network/blog/ai-inference-power-electricity-cost-2026/)
- **Duration: 2-3 years (Medium) on SiC-specific narrative** — competitive intensity > prior framing implied; **Long (3-4 years) on overall multi-narrative thesis** (MEMS + power + auto ADAS + industrial + AI-RAN + edge breadth is the moat). Falsifier: Wolfspeed restructured cost structure becomes pricing-disruptor; NXP MEMS integration milestones slip; AI-DC SiC ASP correction >15% by FY27

**3. ARM (held 6.45%, NEW today) — strongest narrative: CPU IP licensing + AGI CPU**

- Layer position: IP LICENSOR (royalty-toll-road model)
- Positional relevance: ~90%+ mobile CPU share; ~50% hyperscaler CPU share (per DCD); EVERY ARM-architecture chip pays royalties
- AGI CPU FY27-FY28 backlog: **$2B+ confirmed and growing** per Q4 FY26 earnings; named ecosystem: Meta (lead) + OpenAI + Cloudflare + SAP + SK Telecom + Cerebras + Lenovo + MS Azure + NVDA + TSMC
- $90M+ to ship before FY27 per analyst; $15B chip revenue target + $10B IP = $25B by FY31 per ARM long-term targets
- RISC-V is the ONLY structural bypass; SiFive/Rivos still pre-production at scale; meaningful DC-scale RISC-V adoption 4-6 years away
- **Duration: 4-5+ years (Long-Open-ended)**. Falsifier: RISC-V hyperscaler design-win at scale within 18 months OR Meta/lead-customer reverses on AGI CPU commitment OR DC-CPU socket count compression (unlikely — agentic workloads expand CPU demand)

### Tier-B: Strong multi-narrative

**4. SK Hynix (held 10.53%) — strongest narrative: HBM + iHBM thermal moat**

- Layer position: COMPONENT (memory die + package)
- Positional relevance: ~53% HBM market share; MR-MUF packaging moat; iHBM 30% thermal resistance reduction (announced 2026-05-25) targeted at HBM5
- Mgmt-disclosed: HBM demand exceeds 3-year planned capacity per Q1 CY26 earnings call per [Korea Herald](https://www.koreaherald.com/article/10723564)
- **CRITICAL new disclosure (Agent 1):** Rubin Ultra H2 2027 requires **16 stacks HBM4E per GPU (1 TB, 32 TB/s)** per [VideoCardz](https://videocardz.com/newz/nvidia-unveils-rubin-ultra-with-1tb-hbm4e-memory-for-2027-feynman-architecture-in-2028) + [Tom's Hardware](https://www.tomshardware.com/pc-components/gpus/nvidias-vera-rubin-platform-in-depth-inside-nvidias-most-complex-ai-and-hpc-platform-to-date). First confirmed Rubin Ultra memory spec — locks HBM4E pricing-power window through H2 2027
- Bypass routes: Samsung HBM3E qualification path now requires thermal-parity in addition to capacity (TTQ extended); CXL via ALAB (system-level substitute, 2027-28 ETA); LPDDR5X alternative-topology for some workloads
- HBM4 → HBM4E (samples H2 2026, mass production 2027) → HBM5 (2029-2031; possible 2029 acceleration per BigGo Finance — secondary source)
- **Duration: 4-6 years (Long-Open-ended)**. Triple moat stacking (supply 3-year + packaging MR-MUF + thermal iHBM). Falsifier: Samsung achieves thermal-parity disclosure within 12 months OR HBM5 timeline slips OR HBM-per-FLOP plateau across 2 model generations

**5. HDS (held 6.43%, executed on N26 today) — strongest narrative: precision strain-wave actuators for joint-level robotics**

- Layer position: COMPONENT (gear reducer at joint level)
- Positional relevance: ~60-70% global strain-wave / harmonic drive share (market research figure conflicts with new "HDSI + Leaderdrive >63% combined" — flagged); joint-payload <20kg + zero-backlash precision niche
- **CRITICAL new disclosure (Agent 3):** FY27 guidance: **operating profit +141.5% YoY to ¥6,200M** per [BigGo Finance TDNET](https://finance.biggo.com/news/jpx_tdnet_140120260511521357). Mgmt: humanoid orders "could double or triple" FY27 on US client visibility. Earnings inflection ahead, not behind.
- **CRITICAL competitive risk (Agent 3):** Tesla is **DUAL-SOURCED with Green Harmonic (China)** per [Tesla Optimus Suppliers](https://optimusk.blog/blog/tesla-optimus-suppliers/). Chinese strain-wave bypass already LIVE at one Western OEM. Plus Tesla Gen 2/3 shift to lower gear ratios (<20:1 quasi-direct-drive direction) reduces HDS content density per Tesla unit.
- ISRG surgical-robot HDS demand durable: 431 systems Q1 2026; 232 da Vinci 5 = 5+ years runway
- Other Western humanoid OEMs (Figure, Apptronik, Agility) — public actuator topology disclosure absent; HDS supplier status not publicly confirmed
- Bypass routes: Green Harmonic (LIVE at Tesla), Leaderdrive (no Western confirmation), Zhejiang Laifual (no Western confirmation), Nabtesco RV (different topology), planetary gearbox stack (loses precision), C-QDD (used by Unitree — Chinese humanoids)
- **Duration: 3-5 years (Long) at Western non-Tesla OEMs; 1-2 years at Tesla specifically eroding**. Falsifier: Figure / Apptronik / Agility publicly commits to alternative-topology actuator OR Tesla replaces HDS entirely with Green Harmonic OR humanoid OEMs collapse content-per-robot below threshold

**6. ALAB (held 6.48%, NEW today) — strongest narrative: AI fabric silicon (CPU-GPU + GPU-GPU connectivity)**

- Layer position: SILICON (in-package connectivity ICs)
- Positional relevance: Aries PCIe Gen5/6 retimers (CPU-GPU host-to-device) + Taurus Ethernet Smart Cable (scale-out) + Scorpio fabric switches (scale-up GPU-GPU) + aiXscale Photonics (CPO 2028+)
- **CRITICAL new disclosure (Agent 1):** Feynman 2028 = **CPO MANDATORY** for NVLink switches per [Tom's Hardware](https://www.tomshardware.com/tech-industry/semiconductors/nvidia-enterprise-roadmap-rubin-rubin-ultra-feynman-and-silicon-photonics) — NVDA's own framing "five years ahead of schedule." Locks the optical-transition window where ALAB's aiXscale acquisition (Nov 2025) becomes strategic.
- aiXscale integration fully integrated by Q1 2026 per ALAB earnings; optical fiber coupler qualification at major AI platform; volume shipments 2027
- $20B merchant scale-up switching TAM by 2030 per ALAB mgmt
- Bypass routes: Marvell Teralynx fabric switch silicon (development; 2028+ at earliest competitive); Broadcom scale-up Ethernet (architectural alternative); Lightmatter Passage photonic interposer (different topology); hyperscaler internal designs
- **Duration: 4-5+ years (Long-Open-ended)**. Falsifier: 2027 NPO volume shipment milestone misses; aiXscale founder retention failure (Witzens + Merget); ESUN open-source architecture (Meta + AMD + Broadcom + Marvell) excludes ALAB

**7. GLW (held 6.72%) — strongest narrative: optical fiber for AI DC + glass substrate**

- Layer position: MATERIAL (glass substrate / drawn fiber)
- Positional relevance: dominant in optical fiber for hyperscale AI DC; tariff-protected US manufacturing position; Springboard plan $11B incremental annualized sales by 2028
- Multi-year contracts: $6B Meta multi-year through 2030; $3.2B NVDA partnership + 10x US optical capacity + 3 new factories
- 3+/6 Physical AI sub-domains coverage (optical + AV LIDAR + display + life sciences + solar specialty + AI-RAN backhaul)
- Bypass routes: Sterlite (India), Prysmian (Italy), Sumitomo (Japan) — alternative-supplier exists at scale; US tariff is GLW's primary moat
- **CRITICAL note (Agent 1):** CPO transition 2028 (Feynman) may eventually compress fiber-meter demand at intra-rack distances; longer fiber runs (rack-to-rack, datacenter-to-datacenter) remain unaffected. The fiber TAM compression is more 2030+ than 2028.
- **Duration: 3-4 years (Long)**. Multi-year contract anchors through 2028-2030. Falsifier: US tariff policy reversal; Springboard plan execution slips; CPO pull-forward beyond Feynman timing (compression of rack-level fiber demand earlier than 2028)

**8. TSEM (held 3.24%) — strongest narrative: silicon photonics specialty foundry**

- Layer position: FOUNDRY (specialty process manufacturing)
- Positional relevance: $1.3B signed SiPho contracts 2027 + $290M customer prepayments + 2028 model $2.8B revenue / $750M net profit per [Tower IR May 13 2026](https://towersemi.com/2026/05/13/05132026/); ~50+ active SiPho customers
- 3+/6 Physical AI: SiPho for AI networking + RF/5G + CIS foundry (Sony) + SiGe + specialty analog auto
- Bypass routes: Intel Foundry SiPho + GlobalFoundries SiPho (capacity-constrained); imec/TSMC research-stage; ETA 3-4 years for production-scale alternative
- **Duration: 4-6 years (Long-Open-ended)**. Highest-quality forward visibility in universe (binding contracts + prepayments + 2028 model disclosed). Falsifier: customer prepayment refunds; major SiPho customer exits; TSMC/Intel SiPho production-scale entry within 2027

### Tier-C: Workload/duty-cycle specialists with software lock-in

**9. NOW (held 6.90%) — strongest narrative: agentic enterprise workflow software**

- Layer position: SOFTWARE (enterprise application layer)
- Positional relevance: dominant ITSM + workflow automation; Now Assist tracking **$1.5B 2026 ACV** (raised from $1B per Agent 4 — McDermott confirmed on Q1 FY26 call); 16 deals >$5M Q1 FY26 net new ACV; Moveworks/EmployeeWorks 5x YoY
- cRPO +22.5% YoY; total RPO $28B (+23.5% YoY) = 20+ months forward revenue visibility
- **CRITICAL competitive risk (Agent 4):** Salesforce Agentforce now **$800M ARR + 169% YoY + 29,000 deals (+50% QoQ)** per [Salesforce Q4 FY26 8-K](https://www.sec.gov/Archives/edgar/data/0001108524/000110852426000056/crm-q4fy26xexhibit991.htm). Aggressive at CSM/CRM layer (NOW Customer Workflows segment). Microsoft Copilot remains complementary at ITSM core.
- **Federal exposure: 12% of revenues, 19% of receivables Q1 FY26 per [SEC 10-Q](https://www.sec.gov/Archives/edgar/data/0001373715/000137371526000056/now-20260331.htm)** — DOGE/federal-spending-compression risk material; not previously in falsifiers
- Pre-ATH gap (per `meta/2026-05-26-ath-refresh-and-4092-prediction.md`): 42.6% of $239.62 post-split Jan 2025 ATH — largest current-business gap in universe
- **Duration: 2-3 years (Medium)**. Pilot-to-production conversion rate improved from ~11% to ~31% per Q1 2026 data — enterprise adoption accelerant. Falsifier: Salesforce Agentforce displaces NOW at major CRM-adjacent customer; federal channel partner concentration triggers DOGE-driven revenue compression; Microsoft Copilot Studio extends to ITSM core

**10. DDOG (held 7.46%) — strongest narrative: agentic AI observability**

- Layer position: SOFTWARE (observability infrastructure)
- Positional relevance: AI customers ~20% of base, ~80% of new ARR; LLM observability span volume tripled QoQ; MCP server calls quadrupled sequentially; SRE agent investigations more than doubled (per Q1 FY26 transcript)
- **CRITICAL new data (Agent 4):** **Total RPO +51% YoY vs revenue +32% — strongest contractual demand signal in DDOG's public history**. cRPO mid-40s% YoY = 12-13pp gap to revenue, widening from Q4 2025
- 4,550 customers at $100K+ ARR (vs ~3,770 prior); 603 customers at $1M+ ARR
- **Bypass route discovered (Agent 4):** Langfuse (open-source LLM observability) + Arize Phoenix combination is the leading alternative stack for AI-native startups. Enterprise moat holds (Datadog's APM/infra integration is the lock-in); AI-native startup cohort (which is ~80% of new ARR) has functional open-source bypass.
- **Duration: 3-4 years (Medium-Long)**. Falsifier: Langfuse/Arize feature-parity with DDOG at enterprise scale; AI-native customer churn to open-source self-hosted observability; AI customer growth deceleration (workload-volume signal)

**11. SNDK (held 7.09%) — strongest narrative: NAND for AI inference KV-cache + agentic storage**

- Layer position: COMPONENT (NAND flash silicon + SSD assembly)
- Positional relevance: third-largest NAND supplier; AI-storage growth dominant (Q3 FY26 datacenter revenue **$1.47B = +645% YoY, +233% sequential**); QLC Stargate entering volume Q4 FY26
- **CRITICAL new disclosure (Agent 4):** **$42B minimum contractual revenue backlog + $11B enforceable financial guarantees + 5 NBM multi-year supply agreements covering >1/3 of FY27 bit supply** per [Sandisk investor relations](https://investor.sandisk.com/news-releases/news-release-details/sandisk-reports-fiscal-third-quarter-2026-financial-results). Goeckeler: "structural and durable shift" framing
- Datacenter sector growth guidance RAISED to **"mid-70s%"** (from prior "60s%") per [Alphastreet transcript](https://news.alphastreet.com/sandisk-corporation-sndk-q3-2026-earnings-call-transcript/)
- Vera Rubin BOM: **~1,152 TB SSD per accelerator (10× Blackwell)** — primary new demand multiplier
- Bypass routes: Samsung + SK Hynix enterprise NAND competitors at hyperscalers (full-capability alternative supplier; NAND market is structurally multi-supplier — bypass exists, but NBM contracts lock SNDK supply)
- Supply wall: new NAND fab capacity not arriving before late 2027/2028 per [Tom's Hardware](https://www.tomshardware.com/pc-components/storage/perfect-storm-of-demand-and-supply-driving-up-storage-costs)
- **Duration: 18-24 months (Medium-Short — bounded by NBM contract structure + supply wall)**. The cycle-normalization risk returns post-2028 when new fab capacity arrives. Falsifier: AI inference KV-cache architectures shift away from persistent NAND (e.g., HBM-based KV-cache, CXL-pooled memory replaces); Samsung/SK Hynix signs competing NBM agreements at scale; new NAND fab capacity arrives faster than expected (pre-2028)

**12. SMTC (held 4.56%) — strongest narrative: Active Copper Cables for sub-1m AI server interconnect**

- Layer position: COMPONENT (signal integrity ICs in copper cable)
- Positional relevance: 1.6T ACC live at 224G/lane (CopperEdge GN8234); 3.2T preview at 448G/lane at OFC 2026 (GN8304); 4 hyperscaler design wins; DC revenue $223M FY26 (+58% YoY); >50% DC growth guided FY27
- **CRITICAL new disclosure (Agent 1):** Feynman 2028 = CPO MANDATORY for NVLink switches **but does NOT eliminate copper ACC for shorter intra-rack distances**. 448G ACC business has 2026-2028+ runway per Semtech OFC 2026 demos.
- Bypass routes: NVDA Spectrum-X CPO + Marvell 3D SiPho CPO + Broadcom direct optical (2028+); LPO optical (alternative topology); Astera Labs Aries retimers at PCIe layer (different stack but adjacent)
- **Duration: 2-3 years (Medium)**. Copper ACC runway 2027-2028 before optical displacement at scale-up interconnect. Falsifier: CPO pull-forward into 2027 (Spectrum-X earlier than expected); hyperscaler design-win loss; 448G transition slips past 2027

### Tier-D: Concentrated single-narrative

**13. TE (held 4.28%) — strongest narrative: US solar manufacturing + Supply Chain Inheritance (reclassified 2026-05-26)**

- Layer position: MATERIAL/SYSTEM (solar cell + module manufacturing)
- Positional relevance: G2 Austin 5GW cell factory H2 2026; FY26 revenue guide $907M; 45X tariff credit dependence
- **Reclassification 2026-05-26 (per principle #28 + B29):** From "NOT AI universe" to "AI-adjacent via Supply Chain Inheritance — indirect" — NVDA May 2025 technical blog credits 800V DC rack architecture to "the electric vehicle and solar industries" (cited in `signals/events/2026-05-12-citrini-supply-chain-inheritance.md`)
- 2/5 anti-fragility (per `companies/TE/thesis.md`); potential upgrade to 3/5 under T7 theme pending direct procurement evidence
- Bypass routes: Chinese solar module imports (existing bypass — US tariff is the only moat); IRA 45X PTC rollback risk
- **Duration: 2-3 years (Medium)**. NOT an AI-direct duration — anchored on policy support (45X credits run through 2032; subject to administration changes) + Supply Chain Inheritance indirect benefit. Falsifier: IRA 45X PTC rollback or modification; G2 Austin ramp slip below 3 GW pace; direct evidence of NO hyperscaler procurement flow through TE supply chain

**14. AXTI (held 3.42%) — strongest narrative: InP substrates for AI optical interconnect**

- Layer position: SUBSTRATE (raw wafer)
- Positional relevance: capacity-doubling 2026 + planned double again 2027; record $100M backlog Q1 CY26; Tongmei $632.5M capital raise (per Agent 2 — treat as approximate) to fund 2027 expansion
- Global InP supply-demand gap ~70% per `semiconductorinsight.com`
- **CRITICAL new dynamic (Agent 2):** Coherent **$154M, 6-inch InP wafer fab Sherman TX**, doubling internal capacity by Q4 2026 (TSIF grant $14M) — partial AXT bypass for Coherent's own demand. Net effect: LENGTHENS AXT duration for non-Coherent customers (removes one demand source from open market) but SHORTENS Coherent-specific revenue potential.
- Bypass routes: Sumitomo (alternative-supplier; capacity expansion not announced); Mitsubishi Chemical; Chinese suppliers (Sanan 10K/month 6-inch qualified at Huawei; NOT qualified at Western tier-1 — qualification cycle 18-36 months); silicon photonics monolithic substitution (pre-production; 2029+ tier-1 ETA)
- China export-permit risk: bilateral complexity (US Commerce + China MOFCOM) — Q4 CY25 miss; Q1 CY26 partial recovery
- **Duration: 3-4 years (Long for non-Coherent customers; Medium for Coherent-specific revenue)**. Falsifier: Chinese InP qualification at Western tier-1 customer (e.g., Lumentum, Marvell); Coherent fully self-supplies + materially reduces AXT volume; silicon photonics monolithic light-source breakthrough pre-2028

### Tier-E: Off-AI thesis

**15. Hyperliquid (held 6.61%) — off-AI thesis**

- Layer position: TOKEN/PROTOCOL (crypto perp DEX treasury)
- Positional relevance: not part of AI multi-narrative framework
- **Duration: N/A** for AI thesis; user discretionary position outside the framework

## Synthesis observations

### Longest-runway positions (Long-Open-ended 4-6+ years)
- **SK Hynix** (HBM4E + HBM5 with iHBM moat through 2027+; mgmt 3-year capacity gap)
- **ARM** (RISC-V bypass 4-6 years away)
- **ALAB** (Feynman 2028 CPO mandatory anchors aiXscale 2027-2028+ window)
- **TSEM** ($1.3B signed 2027 SiPho + 2028 model $2.8B disclosed)
- **Murata** (3-of-3 tier-1 MLCC makers raising prices triangulated; Chinese AI-grade qualification 4-5 years)

### Medium-runway positions (2-4 years)
- **HDS** (Western non-Tesla: 3-5y Long; Tesla-specific: 1-2y eroding)
- **STM** (overall Long via multi-narrative; SiC-specific: Medium 2-3y due to Wolfspeed Ch11 exit + onsemi + Navitas competitive intensity)
- **GLW** (3-4y; multi-year Meta + NVDA contracts; CPO 2028 watch item)
- **NOW** (2-3y; Salesforce Agentforce competitive intensity at CSM + federal DOGE risk)
- **DDOG** (3-4y; total RPO +51% strongest contractual signal but Langfuse/Arize bypass for AI-native startup cohort)
- **TE** (2-3y; policy-dependent + Supply Chain Inheritance indirect)
- **AXTI** (3-4y for non-Coherent customers; Coherent self-supply doubles by Q4 2026)

### Shorter-runway / bounded positions (18-24 months)
- **SNDK** (NBM contracts lock 18-24 months; supply wall ends late 2027/2028 when new fab capacity arrives)
- **SMTC** (2-3y; copper ACC runway before CPO displacement at scale-up)

### Off-thesis
- **Hyperliquid** — N/A

## Cross-cutting fresh-trend signals affecting all duration estimates

1. **Pilot-to-production conversion improved from ~11% to ~31%** per Q1 2026 enterprise data (Agent 4) — single biggest accelerant for NOW + DDOG + the broader enterprise software stack
2. **Feynman 2028 = CPO MANDATORY (NVDA "five years ahead of schedule")** — hardens optical-interconnect transition timing for SMTC + ALAB + GLW + TSEM
3. **Rubin Ultra H2 2027 requires 16 stacks HBM4E (1 TB, 32 TB/s)** — locks SK Hynix HBM4E pricing-power window
4. **Three-of-three tier-1 MLCC makers raising prices** — Post-Traumatic Supply Disorder (principle #27) confirmed via triangulation
5. **Wolfspeed exit from Ch11 (Sept 2025) with $4.6B debt eliminated** — restructured SiC competitor for STM; previously implied bypass-route is now strengthened
6. **Tesla DUAL-SOURCED with Green Harmonic at Optimus** — Chinese strain-wave bypass LIVE at one Western OEM; HDS Tesla-account share eroding
7. **SNDK $42B minimum contractual backlog + mid-70s% datacenter growth guidance raise** — strongest forward-visibility disclosure in the universe
8. **ASMPT TCB is leading HBM4 16-Hi qualification (not BESI hybrid bonding)** — BESI mandatory-for-volume threshold shifts from HBM4 (2026-2027) to HBM5 (2028-2029)

## Key thesis-file updates pending (deferred per user instruction on candidate stubs)

- HDS thesis: falsifier #1 (Chinese qualification at Western OEM) is PARTIALLY FIRING at Tesla; downgrade Tesla framing
- STM thesis: Wolfspeed Ch11 exit + onsemi $250M AI-DC + JFET acquisition + Navitas AI-DC focus = competitive intensity update; SiC-specific narrative narrower than overall multi-narrative
- NOW thesis: Now Assist $1.5B ACV target (raised from $1B); Salesforce Agentforce $800M ARR competitive intensity update; federal/DOGE exposure 12% revenue / 19% receivables
- DDOG thesis: Total RPO +51% YoY new strongest signal; Langfuse + Arize bypass route at AI-native startup cohort
- SNDK thesis: $42B backlog + $11B financial guarantees + mid-70s% growth guidance raise + Vera Rubin 10× SSD content
- HYNIX thesis: Rubin Ultra H2 2027 HBM4E 16-stack BOM-level confirmation
- ALAB thesis: Feynman 2028 CPO MANDATORY anchors aiXscale 2027-2028+ window
- BESI thesis: TCB is leading HBM4 16-Hi qualification (ASMPT); BESI mandatory-for-volume shifts to HBM5 (2028-2029)
- GLW thesis: Feynman 2028 CPO mandatory creates rack-level fiber demand compression risk 2028+ (but multi-year contracts through 2030 buffer)
- AXTI thesis: Coherent $154M 6-inch InP fab doubling internal capacity Q4 2026 — partial bypass for Coherent-specific revenue
- TE thesis: already updated 2026-05-26 with principle #28 + B29 reclassification

## Cross-references
- `research/meta/earnings-streak-stratification-2026-05-25.md` — 4-axis matrix (Streak + Binding + Rerating + Continuation)
- `research/meta/2026-05-26-duration-of-relevance-scoring.md` — 22-name runway matrix
- `research/meta/2026-05-26-ath-refresh-and-4092-prediction.md` — ATH verification + 4092 capacity-gap probability
- `research/meta/2026-05-26-three-thread-research.md` — ALAB reclass + robotics universals + 4092 first-pass
- `research/signals/events/2026-05-25-sk-hynix-ihbm.md` — iHBM thermal moat event
- `research/signals/events/2026-05-12-citrini-supply-chain-inheritance.md` — Supply Chain Inheritance + Post-Traumatic Supply Disorder
- `research/portfolio/holdings.md` — 15-position consolidated Degiro + N26
