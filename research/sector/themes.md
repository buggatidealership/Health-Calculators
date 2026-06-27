# Active Investable Themes

**Last updated:** 2026-05-20

## TL;DR

Six themes currently active. Each maps to specific names and a specific catalyst path. Themes are NOT the same as scenarios — multiple themes can play simultaneously across different scenarios.

## Theme list

### T1 — Agentic compute rebalance + token consumption compounding (refined 2026-06-03)
**Status:** Early-to-mid
**Thesis:** GPU:CPU ratio shifts; inference > training; sustained workloads > bursty. **CORE MECHANISM (added 2026-06-03):** token consumption compounds faster than per-token price decreases — every agent step generates N more tokens; volume growth overwhelms cost-cuts. Uber AI budget exhausted in 4 months despite unlimited push per [TechCrunch T2](https://techcrunch.com) = N=1 origin signal that consensus is materially under-modeling the volume curve.
**Names:** AMD (EPYC), ARM, AMZN (Graviton via AWS), MSFT (custom on Cobalt). **Token-consumption beneficiaries (added 2026-06-03):** NVDA + HYNIX (HBM bandwidth) + SNDK (storage for context) + DDOG + NOW (observability + workflow scaling with workload) + ALAB + MRVL (fabric scaling).
**Catalyst:** any enterprise reporting >5% agentic productivity uplift; AMD EPYC share gains in DC; **enterprise FinOps budget exhaustion stories (Uber-style)**; explicit AI budget over-run line-items in earnings.

### T2 — Power becomes binding
**Status:** Mid (partially priced)
**Thesis:** Firm power + grid interconnect become the binding constraint by 2027
**Names:** VST, CEG, TLN, GEV, ETN, NEE
**Catalyst:** new hyperscaler PPAs >$70/MWh; new nuclear restart announcements; ISO interconnect queue extensions

### T3 — Networking displaces compute as marginal bottleneck
**Status:** Early
**Thesis:** As clusters scale, east-west traffic grows; CPO and optical become mandatory
**Names:** ANET, MRVL, COHR, LITE, possibly NVDA via Spectrum-X
**Catalyst:** CPO product launches at scale; ANET share gains in AI back-ends

**2026-06-11 InP-substrate-bottleneck note (per `signals/cross-source-log/2026-06-11-reuters-inp-export-controls-axt-lateral-confirmed.md`):** Reuters T1 + 2-subagent verification surface the InP substrate as a tightening sub-bottleneck under CPO. China imposed export controls Feb 4, 2025 (per-shipment licenses, ~60 business-day processing); 6" wafer prices +250% to $5,000 (T2). Standard sell-side "AXT = Western supplier" framing is WRONG — AXT 100% China-produced per FY2025 10-K (T1), caught by both 70% US tariffs + Chinese permit regime. **Investable bypass-route is JP-side: JX Advanced Metals 5016.T (¥20B to 3x capacity by 2030, Isohara — T1 native-jp) + Sumitomo Electric 5802.T (doubling optical-device capacity FY2026 — T2)**, with mandatory conglomerate-dilution math per principle #22. COHR (AXT-dependent) > LITE (Japan-sourced) is the sell-side pair-trade narrative — NOT actionable for our harness without dedicated COHR/LITE thesis files. Added InP regime to monitoring dashboard.

### T4 — Custom silicon fragments inference
**Status:** Mid
**Thesis:** TPU + Trainium + Maia + MTIA take 25–35% of inference by 2027; NVDA margin compresses; AVGO/MRVL benefit
**Names:** AVGO, MRVL, GOOG (TPU), AMZN (Trainium), META (MTIA)
**Catalyst:** Custom-silicon revenue line-items growing >50% YoY at hyperscalers; AVGO custom Si revenue

### T5 — AGENT OVERSIGHT LAYER (consolidated 2026-06-27; was "Inference observability + safety becomes core spend")
**Status:** Early-but-firming (two-axis consolidation 2026-06-27 per user framing)
**Thesis (unified two-axis frame):** as agents proliferate, enterprises must OBSERVE + GOVERN them on TWO orthogonal axes — both non-discretionary. Same telemetry/data-plane feeds both → favors observability+workflow incumbents over point solutions.
- **AXIS A — CORRECTNESS / SECURITY ("does the agent do the RIGHT thing?")** [the original T5]: guardrails, prompt-injection defense, non-human identity, audit, "doesn't go rogue." Evidence: DDOG **AI Guard** (blocks prompt-injection + agent poisoning); NOW **Veza** (non-human identity for agents) + **Armis**. **DEFENSIBLE axis — DDOG observability moat + NOW workflow control plane.**
- **AXIS B — EFFICIENCY / COST ("does it do it EFFICIENTLY?")** [NEW sub-thesis 2026-06-27, folded from the standalone AI-FinOps theme per user consolidation]: token-governance, FinOps-for-AI, cost-observability. Evidence: enterprise rate-limiting (Uber $1,500/mo cap; Meta/MSFT/Amazon); FinOps-X AI-cost-mgmt 63%→98% of mandates; **Tokenomics Foundation** (NOW = founding member); DDOG = AI-spend observability. **CAVEAT (Rule #18): CONTESTED axis — hyperscalers/model-providers want it native (MSFT embeds in M365 Admin Center + is ALSO a Tokenomics Foundation member; OpenAI/Anthropic can ship native dashboards). Axis B strengthens the TAM/narrative more than the moat.**
**2nd-order (P~55%, my model):** a platform observing BOTH correctness AND cost has a data moat point-solutions can't match → consolidation accrues to incumbents with the execution-telemetry (DDOG) + control plane (NOW).
**Names:** DDOG (🔴 watchlist-reference — SOLD 2026-06-22, re-entry candidacy), NOW (🔴 watchlist-reference — SOLD 2026-06-22, re-entry candidacy), CRWD, possibly PLTR (gov-side), MSFT (axis-B native incumbent, tracked).
**Catalyst:** enterprise agent-incident reports → axis-A spend; AI-cost-discipline announcements → axis-B spend; explicit AI line-item in earnings; DDOG Q2 (Aug 6) / NOW Q2 (Jul 29) = re-entry-evidence catalysts.
**L28-Jevons framing:** axis B is NOT bearish for compute/memory (rate-limiting culls waste not aggregate volume, Jevons N=3); BULLISH for the oversight-software layer.

### T8 — Edge Hardware AI (PROMOTED 2026-06-03 from CANDIDATE → VERIFIED-HIGH-CONFIDENCE on N=2+ Microsoft full edge stack within 24 hours of Build 2026)
**Status:** Verified-high-confidence (N=2+ confirmed within 24h of codification)
**Thesis:** AI agents move to the endpoint (PCs, mobile, M365-tier devices) in PARALLEL with datacenter deployment. Microsoft is building a FULL edge AI stack on ARM: **Project Solara** (MDEP-based agent OS per [GeekWire T2](https://www.geekwire.com/2026/inside-microsofts-project-solara-a-new-platform-for-devices-that-run-ai-agents-instead-of-apps/) Build 2026) + **Aion 1.0 Instruct + Plan SLMs** (on-device, Windows OS) + **Surface RTX Spark Dev Box** (NVDA Arm-based RTX Spark chips) + **Microsoft Scout** (always-on M365 agent) + **NVDA N1X PC tier**. Distinct from T1 (datacenter agentic compute) — T8 is ENDPOINT hardware. Distinct from Physical AI/robotics — T8 is consumer/enterprise endpoint NOT humanoid robotics.
**Names (held in bold):** **ARM** (CPU IP — MDEP is Android-on-ARM), **AMBA** (edge SoC), **LSCC** (PC tier control), SYNA (watchlist Astra SR80 + Coral NPU), NVDA N1X PC tier (Fall 2026 OEM ramp); reference: AMD AI PC chips, Qualcomm Snapdragon X, Apple Silicon, MediaTek Kompanio Ultra, Hcompany Holo3.1 (mobile-class VLMs).
**Catalyst:** Project Solara concept device pilots (AccuWeather + Best Buy + CVS + Levi's + Target — already named); RTX Spark Fall 2026 OEM units sold; Microsoft Scout adoption M365-wide; SYNA Astra SR80 design wins; any PC-tier inference workload benchmark surfacing as competitive differentiator.

### T7 — Supply Chain Inheritance (existing theme, not modified here)

### T6 — Sovereign AI (UAE / Saudi / Stargate + EU-investable-expression cluster)
**Status:** Mid (T6-original) + ACCELERATING (T6-EU branch per 2026-06-15 cascade)
**Thesis:** Nation-state AI builds create demand outside the hyperscaler-4 (MSFT/GOOG/AMZN/META) channel
**Names:** NVDA (direct), TSM (foundry), GEV/ETN (electrical), ORCL (Stargate) + EU cluster: CAP.PA Capgemini / DTE.DE Deutsche Telekom / OVH.PA OVHcloud / REY.MI Reply / SU.PA Schneider Electric (per `watchlist/candidates.md` EU-sovereign-AI cluster)
**Catalyst:** new sovereign deals; existing deals moving from announcement to delivery
**2026-06-15 cascade reinforce:** EU sovereignty push (Brussels advancing cloud autonomy + open source mandates despite US opposition per The Register T2) + Mythos China-access disclosure (Semafor T2) adding H_d security-incident vector to TC-10 = exogenous accelerant to EU-investable-expression urgency. Per `signals/cross-source-log/2026-06-15-evening-brief-2026-06-14-cascade-tc10-tc4-eu-sovereignty-b40-verifications.md`.

**2026-06-15 PM bypass-route proof case at NATIONAL-government tier:** Nebius (NBIS) UK £1.7 billion commitment June 8 + 65 MW by 2027 + explicit alignment with UK AI Opportunities Action Plan per [Nebius newsroom T1](https://nebius.com/newsroom/nebius-expands-in-uk-with-more-nvidia-powered-infrastructure-more-customers-and-more-cloud-capabilities-for-agentic-and-enterprise-ai) = FIRST sovereign-AI bypass-route deal materializing at national-government tier post-Anthropic 90-min global Fable 5 + Mythos 5 shutdown precedent (Commerce Department order June 13). **Critical tier-split:** at EU-Commission tier, OVHcloud / Scaleway / StackIT / Proximus won the €180M tender April 2026 per [DCD T2](https://www.datacenterdynamics.com/en/news/eu-commission-selects-four-cloud-providers-under-180m-sovereign-cloud-tender/) — Nebius LOST. At NATIONAL-government tier, Nebius captured UK (£1.7B) + Israel Innovation Authority national supercomputer (~1,000 NVDA B200). **T6 expansion: cluster now has TWO tiers** — (a) EU-institutional tier (OVH / Scaleway / StackIT / Capgemini / DTE / Reply / SU.PA + sovereign-SI Atos/Eviden + AION Gigafactory consortium of Bull/Capgemini/Orange/EDF/Ardian/Artefact/Iliad/Scaleway), (b) national-government / neutral-NVDA-cloud tier (NBIS + speculative CoreWeave-EU + speculative Equinix/Digital Realty EU). 2026-06-25 EU sovereign-AI investable-expression supply-chain reconstruction (monthly recurring) now has empirical anchor at national-tier. Per `signals/cross-source-log/2026-06-15-pm-nebius-2subagent-verification-eu-sovereign-bypass-thesis.md`.

## Theme × Scenario matrix

How themes perform in each scenario (W=win, L=lose, N=neutral):

| Theme | S1 (NVDA dom) | S2 (custom Si) | S3 (power binds) | S4 (digestion) | S5 (shock) |
|---|---|---|---|---|---|
| T1 Agentic rebalance | W | W | N | W | N |
| T2 Power binds | N | N | **W** | L | N |
| T3 Networking | W | W | N | N | N |
| T4 Custom Si | L | **W** | N | N | N |
| T5 Observability | W | W | N | **W** | W |
| T6 Sovereign AI | W | W | W | L | L |

Anti-fragile themes (win in ≥3 scenarios): T1, T5, T6.

## Theme conflict notes

- T4 (custom Si winning) is somewhat in tension with S1 (NVDA dominance). Holding both implies hedging.
- T2 (power binds) doesn't help if S4 (digestion) plays — hyperscalers slow builds, power demand softens.
- T6 (sovereign) wins under most scenarios but is fragile to S5 (export controls, geopolitical shocks).

## T7 Supply Chain Inheritance (added 2026-05-26)

**Source:** Citrini Research "Semis Memo" 2026-05-12 (see `research/signals/events/2026-05-12-citrini-supply-chain-inheritance.md`).

**Thesis:** AI's 800V DC rack architecture inherits the EV/solar manufacturing supply chain per NVDA's own May 2025 technical blog. The physical infrastructure — power conversion, magnetics, capacitors, inductors, manufacturing equipment — is SHARED between EV/solar and AI data center.

**Compounded with T7-companion mechanism — "Post-Traumatic Supply Disorder" (methodology principle #27):** cycle-burned analog/power semi companies (TXN, NXPI, Murata, etc.) deliberately NOT expanding capacity. Let ASPs rise instead. Margin expansion compounds revenue expansion.

**Names that play this theme:**
- Murata (held 16.77%) — primary; Citrini's "first and highest-conviction" beneficiary
- STM (held + planned €5K add) — power semi + MEMS + Physical AI universal (caveat: SiC commoditization per duration scoring)
- T1 Energy (held 4.82%) — possible reclassification candidate; G2 Austin solar cell factory part of shared supply base
- TXN, NXPI, VSH (not yet in universe — candidate stubs deferred per user)
- Eaton (ETN), Vertiv (VRT), Schneider Electric, Hubbell — power-conversion infrastructure that previously sat outside AI universe; deferred

**Anti-fragility:** likely wins in S1, S2, S3 (the AI capex story stays intact across compute-winner permutations); neutral in S4 (digestion); loses in S5 (geopolitical shock to global supply chains).

**Falsifier:** TXN / NXPI / Murata announce greenfield capacity expansion (reverses Post-Traumatic Supply Disorder); Chinese analog/power semi qualifies at tier-1 hyperscalers (substitute-path matures); ASP correction >10% within 6 months (cycle proves not structural).

## T8 AI FinOps + Agentic Governance (candidate, added 2026-06-04 PM)

**Source:** 2026-06-04 PM user articulation of token-waste-ratio + alt-data verification cluster:
- AI spend management at 98% enterprise adoption (up from 31% two years ago) per State of FinOps 2026 [T2](https://data.finops.org/)
- IDC FutureScape 2026: G1000 organizations face 30% AI cost overrun by 2027
- Some enterprises now seeing monthly AI bills "in the tens of millions" with agentic workflows running 24/7
- Token leaderboards + token budgets becoming standard enterprise management tools
- Only 6% of Microsoft Copilot pilots reach production deployment per Gartner — production-grade agentic governance is HARD
- Kion June 4 launch of Anthropic Token Spend Management — agentic FinOps is a category not a feature
- ServiceNow hiring demand exceeds supply through 2026; shift from administrators → "design, govern, run enterprise-scale workflows"
- **2026-06-11 Ramp AI Index datapoint (T1 card-spend, May 2026, per `signals/cross-source-log/2026-06-11-june10-evening-brief-triage-b40-n9.md`):** top 1% "AI-pilled" firms = $7,500/employee/month (+14.1% MoM); top 10% = $611; **MEDIAN = $11.38**. The ~660x tail-to-median spread (derived) is the load-bearing structure: spend is extraordinarily concentrated → FinOps-exhaustion dynamics hit the tail cohort NOW while the diffusion runway behind the median is enormous. Both legs of T8 (governance urgency at the tail + adoption headroom at the median) in one dataset.

**Thesis:** As tokens become scarce/expensive (Cloudflare 57.5% bot crossover, Uber capping at $1,500/employee, hyperscaler capex compounding), the load-bearing enterprise variable shifts from "is AI growing" to "is AI spend governed efficiently?" Token-waste-ratio is the new optimization metric. Companies that provide production-grade agentic workflow governance + AI FinOps tooling capture the optimization mandate.

**Names that play this theme:**
- **ServiceNow (NOW)** — held 6.24% (under-weighted vs 10-13% Core target); production-grade agentic workflow governance; 98% renewal rate; Knowledge 2026 governance partnership thesis; 6% Copilot Studio production-conversion rate validates NOW's structural moat
- **Datadog (DDOG)** — held 6.16% (under-weighted vs 8-12% target); agentic observability TAM expansion confirmed via Cloudflare crossover
- **MongoDB (MDB)** — held 4.67%; vector DB for agentic memory/RAG queries; mild signal
- **Coralogix (private, $200M raise June 4 morning brief)** — observability competitor in AI agent monitoring infrastructure
- **Kion (private, June 4 Anthropic Token Spend Management partnership)** — AI FinOps tooling layer
- **Wiz / CrowdStrike (CRWD)** — agentic security tooling adjacent

**Anti-fragility:** wins in S1, S2, S3 (token consumption scales with inference; governance demand compounds); neutral S4 (digestion); mixed S5 (regulatory may help via mandatory governance).

**Falsifier:** AI cost overrun crisis resolves via cheap inference (token costs collapse 90%+ faster than agentic workflow proliferation); production-grade Microsoft Copilot Studio displaces NOW at scale (Gartner 6% rate climbs to >40% by 2027); enterprise abandons agentic governance category for in-house solutions.

**Token-waste-ratio as measurable variable (my model):**
- Industry-level: total token spend / productive-task completion (proxy: Gartner enterprise AI ROI surveys; State of FinOps adoption)
- Company-level: per-employee AI tool spend cap (Uber $1,500/mo data point)
- Workflow-level: tokens-per-completed-task ratios (internal LangSmith / Helicone data)
- Optimization spend layer: $ allocated to AI FinOps tools (Coralogix, DDOG, Kion, Anthropic)

**Independent alt-data validation (run 2026-06-04 PM):**
- LinkedIn: 31,000+ NOW jobs worldwide; demand > supply
- Gartner: only 6% Copilot Studio pilots reach production
- FinOps: 98% AI spend management adoption
- IDC: 30% AI cost overrun forecast G1000 by 2027
- Hiring shift toward "design, govern, run enterprise-scale workflows"

**Status: CANDIDATE → expected promotion on N=2+ further empirical validation (token-waste-ratio metrics from NOW Q2 print, DDOG print, or independent enterprise surveys).**

---

## T9 — Consumer Hardware AI Swap (candidate, added 2026-06-06 PM)

**User-articulated framework 2026-06-06 PM:** *"DC buildout 50% cancellation = ceiling on existing cohort demand. The next non-consensus leg is consumer-side hardware swap (laptop, PCs, mobile phones). Silicon SoC layer already priced (QCOM/AMD/AAPL/MTK parabolic); 2nd-3rd order BOM intensity + sensing-adjacent components are under-covered."*

**Thesis:** As DC capex hits physical-cap ceiling (Bloomberg 50% of US 2026 DC builds delayed/canceled; NY + Seattle moratoriums; AirTrunk India $30B/5GW migration evidence of EM displacement), the next growth vector for AI hardware demand shifts to **consumer device refresh cycles** (AI PC, AI smartphone, on-device LLM inference). The investable edge sits NOT with the obvious silicon names (already priced parabolic) but with the **BOM intensity upgrade + sensing-adjacent components** that benefit per-device regardless of unit shipment growth.

**Per-device BOM intensity drivers:**
- NPU-bearing SoC replacing non-NPU SoC → MORE silicon area, MORE substrate complexity
- LPDDR5X capacity rising (16GB → 32GB+ per AI PC; LPDDR5X ASP +60% per H2 2026 forecasts)
- UFS NAND rising (on-device LLM weights = 5-20GB persistent storage per device)
- MLCC count rising (NPU TDP variability = more decoupling capacitors)
- Power delivery (PMIC) precision rising
- Thermal solutions (heat pipes, vapor chambers for AI PC)
- Audio always-on (AI assistant ambient listening)
- Camera arrays (multi-cam AI vision)
- Hardware secure enclave (on-device LLM privacy)

**Names that play this theme:**

*Already held (consumer-AI angle reinforcing):*
- **MURATA (MUR1, held 5.36%)** — MLCC density rise per AI device; HIGHEST exposure to consumer-AI BOM intensity
- **SUMCO (S3X, held 4.42%)** — wafer pull for consumer-AI SoCs (mobile + AI PC)
- **SNDK (SNDK, held 2.88%)** — UFS NAND for on-device LLM weights; agentic-shift validates per user thesis
- **ARM (ARM, held 3.17%)** — IP royalty receiver for consumer AI silicon SoC architecture

*New watchlist (added 2026-06-06 PM):*
- **CRUS (Cirrus Logic)** — always-on AI audio codec; Apple-tier mixed-signal
- **MPWR (Monolithic Power)** — PMIC for AI PC variable NPU power profile
- **Taiyo Yuden (6976.T)** — second-tier MLCC bypass to Murata
- **MCHP (Microchip Technology)** — on-device AI secure enclave for IoT
- **Panasonic (6752.T)** — denser batteries for AI PC + AI smartphone
- **KN (Knowles)** — MEMS microphones for ambient AI audio
- **TDK (6762.T)** — InvenSense motion sensors + MLCC + battery 4-way exposure

*Existing watchlist with consumer-swap angle:*
- **KIOXIA (285A.T)** — UFS NAND on-device LLM weights + HBF JV
- **SONY (6758.T)** — image sensors for AI multi-cam arrays
- **Furukawa Electric (5801.T)** — heat pipes for AI PC thermal

**Anti-fragility:** wins in S1, S2, S3 (consumer-AI compounds regardless of which silicon vendor wins); neutral S4 (digestion may delay refresh cycle); mixed S5 (regulatory mostly neutral, privacy-AI angle slightly positive).

**Falsifier:** AI PC remains <10% of laptop sales 2026-2028 per IDC tracking; iPhone Apple Intelligence v3 fails to drive accelerated upgrade cycle; edge AI permanently routes to cloud (would falsify partial); Microsoft Copilot+ becomes optional/de-emphasized.

**Convex hull:** Even if AI PC penetration is only 30% by 2028, BOM intensity uplift per AI-PC device (3-5x more MLCCs, 2-3x more LPDDR5X, NPU silicon, better thermal, advanced packaging) means component winners can grow at 15-25% YoY in dollar terms even on flat unit volume. The thesis does not require explosive AI PC penetration — only modest penetration + structural BOM intensity.

**Status: CANDIDATE → promotion trigger: N=2+ empirical validation via (a) consumer-AI MLCC pull in Murata Q1 FY27 print (late July/early Aug 2026), AND (b) one of the watchlist names showing first AI-specific revenue disclosure in next quarterly cycle.**

**2026-06-10 evidence accrual (strongest since codification — Apple WWDC26 verified T1):** Per `signals/cross-source-log/2026-06-10-june9-evening-brief-triage-b40-third-recycle.md`: (1) Apple Core AI (T1 session 324) ships explicit on-device KV-cache management — the LPDDR + UFS NAND BOM-intensity drivers above get a first-party platform anchor; (2) iOS 27 **two-tier Apple Intelligence** (full features need 12GB) + **macOS 27 drops Intel Macs** = functional-obsolescence accelerant for <12GB devices (~75%, T2); (3) iPhone 18 rumored 12GB across ALL models (~65%, T3→T2 single-Weibo origin) = +50% DRAM on base models if real. This is platform-level confirmation of the obsolescence mechanism the theme depends on — but NOT yet the N=2 empirical validation (that still requires the Murata print + an AI-specific revenue disclosure; rumor + framework ≠ revenue).

**2026-06-10 PM — DC-ceiling motivation STRENGTHENED (P~80% pattern, not anecdote):** Per `signals/cross-source-log/2026-06-10-morning-brief-6-claim-verification-anthropic-spacex-dc.md`: (1) **Seattle moratorium PASSED June 9, UNANIMOUS** (CB 121214: 1-yr pause on DCs >20 MVA, immediate effect; 50+ testified zero pro-DC) — strongest US-municipal datapoint yet for the siting-friction leg; (2) **Meta-Reliance Jamnagar 168MW** built-to-suit lease = 2nd hyperscale India commitment (after AirTrunk $30B/5GW) — EM-migration confirmed as pattern. 3rd-order (P~40%): US capex skews to existing-site densification → component intensity (power/cooling/memory per site) over new-shell construction — same direction as the T9 component-intensity thesis at the DC layer.

**2026-06-14 — Walsin institutional commentary = T9 promotion-trigger evidence (NEW TAM datapoint, sub-leg validation):** Per `signals/cross-source-log/2026-06-14-mlcc-longest-shortage-cycle-taiwan-tier2-tc6-reinforce.md`, Taiwan MLCC tier-2 maker Walsin verbatim: **"AI PCs and AI edge devices markets are LARGER than AI servers."** Source-quality is T1-equivalent — Walsin's CFO/CEO sees this from orderbook composition, not market forecast. This is the **first institutional supply-side acknowledgment that AI-edge/AI-PC TAM exceeds AI-server TAM** — the structural premise of T9 verified from the component-supplier side. Combined with companion datapoints (Yageo B:B >1.3×, Holy Stone equipment lead times 1-1.5yr + 2027 intensification warning), this counts as **part-(b) of the T9 promotion-trigger** (the AI-specific TAM disclosure from a component supplier). Promotion remains gated on part-(a): consumer-AI MLCC pull confirmation in Murata Q1 FY27 print (late July/early August 2026). On Murata print + Walsin commentary together → T9 promotes from CANDIDATE to ACTIVE.

**2026-06-15 AM — T9 CONFIRMED-DIRECTION at N=2 via Microsoft Build 2026 strategic pivot:** Per `signals/cross-source-log/2026-06-15-am-morning-brief-verification-cascade.md`: Microsoft dropped Copilot+ NPU-only requirement at Build 2026; Phi Silica APIs now run on RTX 30-series+ dGPUs with 6GB+ VRAM via Windows App SDK 2.2.2 ([Tom's Hardware T2](https://www.tomshardware.com/software/windows/microsoft-is-reportedly-testing-copilot-ai-features-with-discrete-gpus-instead-of-npus-a-feature-available-on-windows-app-sdk-with-a-windows-insider-experimental-channel-build-and-developer-mode-turned-on); [Windows News T2](https://windowsnews.ai/article/build-2026-microsoft-drops-copilot-npu-only-focus-for-gpu-and-on-device-ai.423596); [Microsoft Learn T1](https://learn.microsoft.com/en-us/windows/ai/apis/phi-silica)). IDC: 40%+ active Windows 11 systems have DirectX 12 dGPU 8GB+ VRAM = deliberate edge-AI market expansion well beyond initial NPU-gated Copilot+ universe. **N=1 → N=2 CONFIRMED-DIRECTION** (Walsin component-supplier observation at MLCC layer + Microsoft platform-vendor strategic action at OS layer = two independent supply-side/platform-side data points converging on same direction). **Promotion math:** N=3+ per principle #29 still pending; watch for Apple CoreAI dGPU/Mac-base expansion, Snapdragon-alternative routing, AMD Ryzen AI dGPU integration as N=3 triggers. **Scope precision (B40.2):** only Phi Silica APIs unlocked on dGPU; Recall + Studio Effects + Live Captions remain NPU-only. **Sub-signal:** Qualcomm NPU moat erosion (Snapdragon X Elite exclusivity-based Windows AI positioning since 2024 now weakened) — distinct tracking warranted but ARM EXITED so no direct portfolio impact.

**Cross-references:**
- `signals/cross-source-log/2026-06-06-mag7-capex-burn-vs-net-cash-correction.md` — DC capex burn dynamic that motivates consumer-swap pivot
- `signals/cross-source-log/2026-06-06-sram-supply-chain-plus-agc-trajectory-recontextualization.md` — joint-regime fit framework
- `watchlist/candidates.md` — Consumer hardware swap section
- `meta/todo.md` — H1 (supply chain graph reconstruction) monthly workflow that extends this theme

## T10 — Medical AI Execution Pocket (candidate, added 2026-06-10 PM)

**Premise:** While attention saturates on AI-infra/semi names + SpaceX IPO, AI × biotech/medical execution is structurally under-looked. After 7-subagent dissection across all 8 value-chain layers (per `meta/medical-ai-evaluation-framework.md` + `signals/cross-source-log/2026-06-10-medical-ai-phase3-synthesis-3-GREEN-2-AMBER.md`), **5 of ~40 evaluated names clear the gate-stack with AI as the actual moat, 3 of those 5 are Degiro-accessible**. The pocket is REAL but THIN — not a deep cohort like memory or robotics-bottleneck.

**Type-A AI-Execution anchors (3 GREEN, all investable):**
- **Heartflow (HTFL)** — L5 diagnostics; FDA + CPT 75580 + PRECISE/PROMISE + deep CCTA workflow; CFD physics moat resists foundation-model commoditization
- **Waystar (WAY)** — L8 RCM/admin; 4/4 + 110.5% NRR + cross-payer claims data spine; anti-Olive structurally; Epic Penny Nov 2026 is the named falsifier
- **Olympus (7733.T)** — non-Western L5; EndoBRAIN +60点 reimbursement code (Japan canonical); ~70% global endoscopy install base

**Strong AMBER worth watchlist tracking:** Schrödinger SDGR (picks-and-shovels archetype, not AI-drug execution); Fujifilm 4901.T (Type-B distribution-moat); Tempus AI TEM (diagnostics co. with trial-services rider); Canon Medical 7751.T; IQVIA IQV; Veeva VEEV; Doximity DOCS

**Reference-only (would change ranking if accessible):** United Imaging 联影 (688271.SH; 17 NMPA III + 15 FDA — benchmark Western names against); Lunit 328130.KQ; Insilico (HK Stock Connect uncertain)

**Anti-fragility:** unclear — pocket is thin enough that scenario-resilience math is premature; needs Phase 4 per-name work first

**Falsifiers:**
1. ≥1 of the 3 GREEN names loses its reimbursement code in next CMS/厚労省 review cycle → execution-gate prior breaks
2. Epic Penny (Nov 2026) takes Epic-shop hospitals from Waystar at material scale 2027 → WAY moat thesis breaks → cohort thins to 2
3. Foundation-model CFD-FFR equivalent emerges at <30% of HTFL cost → HTFL moat compresses

**Promotion trigger (CANDIDATE → ACTIVE):** ≥1 GREEN name passes Phase 4 deep-dive with entry-price discipline cleared AND another T1 reimbursement-code event happens (replicating the HTFL/Olympus mechanism in another geography or another procedure)

**Cross-references:**
- `meta/medical-ai-evaluation-framework.md` — Phase 1 + Phase 3 framework refinements (Type A vs B distinction, layer-conditional gates, reimbursement-code-ownership as cleanest single screening metric)
- `signals/cross-source-log/2026-06-10-medical-ai-phase3-synthesis-3-GREEN-2-AMBER.md` — full Phase 3 dissection
- `companies/HTFL/`, `companies/WAY/`, `companies/OLYMPUS/`, `companies/SDGR/`, `companies/FUJIFILM/` — new stub theses
- `watchlist/candidates.md` — Medical AI Execution Pocket section

**Status: CANDIDATE.** Pocket exists but thin. Track via watchlist; don't size without Phase 4 work.

---

## CANDIDATE theme (2026-06-27, Leg B discovery) — Memory Crisis Goes Consumer / HBM-DDR5 Divergence

Per `signals/cross-source-log/2026-06-27-korea-japan-two-leg-scan-FIRST-DISCOVERY-RUN.md`. Apple/Microsoft +15-20% consumer hardware price hikes citing memory shortage; Micron publicly blames Apple (Bloomberg T1, 2026-06-25/26). First time this cycle memory scarcity is CONSUMER-VISIBLE (70% high-end DRAM → AI datacenters).

**Mechanism:** AI-DC DRAM demand → OEM inventory cost spike → consumer +15-20% ASP → demand-elasticity response → DDR5 may loosen while HBM stays tight → **intra-cohort pricing divergence** (high-HBM-mix HYNIX/MU benefit; commodity-DRAM exposure weakens). Refines TC-12 (DRAM>HBM margin inversion). **Status: CANDIDATE** — route through Tier 2 verification before any sizing; watch DDR5 vs HBM contract-price spread for confirmation/refutation.

## CANDIDATE theme (2026-06-27, Leg B) — Korea Leveraged-ETF Structural Volatility Overhang

Korea single-stock leveraged ETFs (launched May 27 2026) grew to $9B by June 23 = 31-38% of Samsung/SK Hynix daily volume, 92% retail, ~200% turnover (Seoul Economic Daily / Bloomberg T2). Reflexive amplifier: rally→inflows→rally→larger rebalancing dumps on declines. Explains part of Friday's −8/−11% cohort move as forced leverage-unwind, NOT fundamental. **Status: market-structure RISK FLAG for all Korea-listed cohort names** (HYNIX). FSS weighing curbs; any tightening would REMOVE the amplifier (stabilizing). Monitor FSS action.

---

## AI FinOps / Token-Cost-Governance → FOLDED INTO T5 AXIS B (consolidated 2026-06-27 per user framing)

**CONSOLIDATION NOTE (2026-06-27):** this was briefly a standalone candidate theme; per user framing it is NOT a separate theme — it is **Axis B (efficiency/cost) of the unified T5 Agent Oversight Layer.** See T5 above. Two axes of one meta-thesis: Axis A = correctness/security ("agent doesn't go rogue"); Axis B = efficiency/cost ("agent does it efficiently"). Same telemetry, same buyer, same agent-proliferation driver.

**Underlying data (retained, T1/T2):** Per `signals/cross-source-log/2026-06-27-ai-cost-governance-jevons-N3-ddog-now-rate-limiting.md`. Enterprise AI spend exploding (token usage +1,001% Jan'25→Apr'26) but 95% of gen-AI pilots no measurable ROI + AI-agent cost sometimes > the labor it replaces (NVDA exec, Fortune Apr'26). FinOps-X AI-cost-mgmt 63%→98% of mandates; **Tokenomics Foundation** (Oracle/Google/Microsoft/Accenture/IBM/JPMorgan/KPMG/SAP/**ServiceNow**/Salesforce); rate-limiting at Uber ($1,500/mo cap)/Meta/Amazon/Walmart/AT&T.

**Expressions (CORRECTED — NOT held; both SOLD 2026-06-22, re-entry candidacy):**
- **DDOG** (🔴 watchlist-reference, sold 2026-06-22) — AI-spend observability; analyst re-rate "new AI infra layer" 2026-06-27. Axis-B exposure.
- **NOW** (🔴 watchlist-reference, sold 2026-06-22) — workflow governance; Tokenomics Foundation founding member. Axis-B exposure.
- MSFT (tracked) — embeds cost governance natively (M365 Admin Center, Copilot metered) = the CONTESTING incumbent on axis B.
- Private governance-tooling (Portal26/Elvex/Odin/nOps) = NOT investable.

**Critical framing (L28 Jevons N=3):** Axis B is NOT bearish for compute/memory (rate-limiting culls waste not aggregate volume). BULLISH for the oversight-software layer; bear is narrow (Anthropic/OpenAI dev-tools-revenue margin). **Defensibility caveat (Rule #18): axis B is the LESS-defensible half for DDOG/NOW — contested by hyperscalers/model-providers natively. Axis A (security/correctness) is their actual moat.**

**Watch:** does AI-cost-discipline become the dominant H2'26 SENTIMENT narrative (semi-SENTIMENT headwind distinct from thesis risk)?

**🔬 2026-06-27 DEEP-DIG — Axis B defensibility REFINED (trifurcation + security-consolidation threat):** Per `signals/cross-source-log/2026-06-27-DEEP-DIG-agentic-enterprise-cost-governance-axisB-defensibility.md` (3 Opus 4.8 subagents). The cost-governance market TRIFURCATES: (L1) provider-native = own-stack-only, structurally blind cross-vendor (durable conflict-of-interest moat — MSFT/OpenAI both REMOVED hard kill-switches, consistent with token-seller incentive); (L2) cross-vendor OBSERVABILITY = DDOG LLM Obs (800+ models, Q1'26 materially contributing) — defensible, providers can't fill it; (L3) cross-vendor ENFORCEMENT/ROUTING (route-to-cheapest + semantic caching, 50-80% savings) = gateways (LiteLLM/Portkey/Kong/TrueFoundry), CONSOLIDATING into SECURITY (Portkey→Palo Alto Apr'26). **Refined verdict: Axis B is REAL + provider-proof but for DDOG/NOW only PARTIAL — DDOG owns L2 visibility (smaller slice); the L3 optimization rent accrues to gateways/security platforms; NOW barely in L2/L3 (its strength is Axis A).** Earlier "less-defensible" take refined: it's not "MSFT eats it," it's "the richest part of Axis B isn't DDOG/NOW's to own." **NEW competitive-threat: AI-cost-governance + AI-security MERGING (Portkey→Prisma AIRS) → consolidation may accrue to PANW/CRWD more than DDOG/NOW.** TAM caveat: >40% agentic projects canceled by 2027 (Gartner T1) caps the agent-oversight TAM below hype.
