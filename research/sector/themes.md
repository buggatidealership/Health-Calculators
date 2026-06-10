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

### T4 — Custom silicon fragments inference
**Status:** Mid
**Thesis:** TPU + Trainium + Maia + MTIA take 25–35% of inference by 2027; NVDA margin compresses; AVGO/MRVL benefit
**Names:** AVGO, MRVL, GOOG (TPU), AMZN (Trainium), META (MTIA)
**Catalyst:** Custom-silicon revenue line-items growing >50% YoY at hyperscalers; AVGO custom Si revenue

### T5 — Inference observability + safety becomes core spend
**Status:** Early
**Thesis:** As agents scale, eval / observability / security become non-discretionary
**Names:** DDOG, CRWD, possibly PLTR (gov-side)
**Catalyst:** enterprise reporting agent-related incidents → spend shifts to observability; explicit AI line-item in earnings

### T8 — Edge Hardware AI (PROMOTED 2026-06-03 from CANDIDATE → VERIFIED-HIGH-CONFIDENCE on N=2+ Microsoft full edge stack within 24 hours of Build 2026)
**Status:** Verified-high-confidence (N=2+ confirmed within 24h of codification)
**Thesis:** AI agents move to the endpoint (PCs, mobile, M365-tier devices) in PARALLEL with datacenter deployment. Microsoft is building a FULL edge AI stack on ARM: **Project Solara** (MDEP-based agent OS per [GeekWire T2](https://www.geekwire.com/2026/inside-microsofts-project-solara-a-new-platform-for-devices-that-run-ai-agents-instead-of-apps/) Build 2026) + **Aion 1.0 Instruct + Plan SLMs** (on-device, Windows OS) + **Surface RTX Spark Dev Box** (NVDA Arm-based RTX Spark chips) + **Microsoft Scout** (always-on M365 agent) + **NVDA N1X PC tier**. Distinct from T1 (datacenter agentic compute) — T8 is ENDPOINT hardware. Distinct from Physical AI/robotics — T8 is consumer/enterprise endpoint NOT humanoid robotics.
**Names (held in bold):** **ARM** (CPU IP — MDEP is Android-on-ARM), **AMBA** (edge SoC), **LSCC** (PC tier control), SYNA (watchlist Astra SR80 + Coral NPU), NVDA N1X PC tier (Fall 2026 OEM ramp); reference: AMD AI PC chips, Qualcomm Snapdragon X, Apple Silicon, MediaTek Kompanio Ultra, Hcompany Holo3.1 (mobile-class VLMs).
**Catalyst:** Project Solara concept device pilots (AccuWeather + Best Buy + CVS + Levi's + Target — already named); RTX Spark Fall 2026 OEM units sold; Microsoft Scout adoption M365-wide; SYNA Astra SR80 design wins; any PC-tier inference workload benchmark surfacing as competitive differentiator.

### T7 — Supply Chain Inheritance (existing theme, not modified here)

### T6 — Sovereign AI (UAE / Saudi / Stargate)
**Status:** Mid
**Thesis:** Nation-state AI builds create demand outside the hyperscaler-4 (MSFT/GOOG/AMZN/META) channel
**Names:** NVDA (direct), TSM (foundry), GEV/ETN (electrical), ORCL (Stargate)
**Catalyst:** new sovereign deals; existing deals moving from announcement to delivery

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

**Cross-references:**
- `signals/cross-source-log/2026-06-06-mag7-capex-burn-vs-net-cash-correction.md` — DC capex burn dynamic that motivates consumer-swap pivot
- `signals/cross-source-log/2026-06-06-sram-supply-chain-plus-agc-trajectory-recontextualization.md` — joint-regime fit framework
- `watchlist/candidates.md` — Consumer hardware swap section
- `meta/todo.md` — H1 (supply chain graph reconstruction) monthly workflow that extends this theme
