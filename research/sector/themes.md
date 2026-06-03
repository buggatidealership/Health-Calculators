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
