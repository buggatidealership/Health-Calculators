# Where AI Is Going — First-Principle Synthesis (Updated 2026-05-21)

**Type:** Bird's-eye-view synthesis derived from the OS's full substrate.
**Companion to:** `sector/where-we-are.md` (current state). This file is forward-looking.
**Update cadence:** quarterly OR when synthesis materially shifts. Updated 2026-05-21 to reflect 23 thesis files + 7 wiki primers + 14 biases + 4 lessons.
**Purpose:** the single document that captures my forward thesis for AI through ~2028, with conviction levels, derived from first principles using the full OS substrate.

---

## TL;DR — three sentences

We are in the early-middle of the agentic AI era; demand outruns supply through at least 2027 across HBM, advanced packaging, power, optical interconnect, custom silicon. **The investable insight is positioning at the LAYERS where supply is structurally constrained AND at the COMPANIES owning the deepest moats within those layers** (SK Hynix HBM, AXTI InP substrate, AVGO custom Si design, NBIS/CRWV/IREN/APLD inference cloud, BE/VST/CEG power, Murata MLCC, TSEM silicon photonics foundry). The biggest risks are Stage 4-5 multiple compression at named winners (most likely outcome and warrants smaller positions than Stage 1-2), Taiwan/TSMC geopolitical tail risk (low probability, catastrophic), and IRA policy reversal (specific to T1 Energy + clean-power names).

---

## Where AI is, in one paragraph

We are ~6 months into the Agentic AI epoch (started Nov 2025). Per `research/wiki/agentic-workload-scaling.md`: agentic workload ~210T tokens/month today (~2-3% of global token volume), growing ~12× over 12 months and ~70× over 24 months. Capacity-constrained narrative is verified at THREE primary-source legs (Google I/O 3.2 quadrillion tokens/month, OpenAI Guaranteed Capacity multi-year contracts, NBIS Q1 +684% revenue per `research/signals/triangulation.md`). Substrate is binding at every layer: HBM (sold out 2026, SK Hynix 3-yr customer-request backlog), CoWoS packaging (TSMC 92% of advanced AI chips), power (5-7 GW/yr demand vs 2-3 GW/yr supply structural deficit per `wiki/power-for-ai-primer.md`), optical substrates (>70% InP deficit per `wiki/optical-interconnect-primer.md`), custom silicon (44.6% CAGR per `wiki/custom-silicon-primer.md`).

---

## High-conviction views (>70% confidence)

### 1. Token volume continues exploding faster than per-token cost falls
Per `wiki/token-consumption.md` and `wiki/agentic-workload-scaling.md`. Aggregate compute demand grows 5-10× over 24 months while supply grows ~2-3×. Inference cost paradox compounds.

### 2. HBM remains the binding constraint through 2027
Per `wiki/hbm-primer.md`. SK Hynix moat verified (MR-MUF process advantage + NVDA HBM4 qualification while Samsung NOT yet qualified per `companies/HYNIX/thesis.md`). Customer requests exceed 3-year planned capacity. **User's 12.5% SK Hynix position is structurally correct and at appropriate size.**

### 3. Custom silicon takes meaningful inference share from NVDA by 2028
Per `wiki/custom-silicon-primer.md` and `companies/AVGO/thesis.md`. AVGO holds ~60% AI ASIC design partnership share; 4 of 5 frontier model providers (Google TPU, Meta MTIA, Microsoft Maia, OpenAI Titan, Anthropic via Broadcom) route through AVGO. NVIDIA inference share projected to compress from 90%+ to 20-30% by 2028. **AVGO is the most-overlooked compounder in the AI complex; recommended 5-8% new position.**

### 4. Power becomes the binding geographic constraint
Per `wiki/power-for-ai-primer.md`. Structural deficit of 3-5 GW/year. Grid interconnect 36-48 months in PJM/ERCOT. Gas turbine backlogs sold out through 2030. Nuclear deals (MSFT-CEG TMI, Vistra-Meta 2.1+ GW, Meta-multi-partner 6.6 GW) are consensus winners. **Aschenbrenner long-power thesis is structurally correct** (per `signals/events/2026-05-21-aschenbrenner-q1-13f.md`).

### 5. Optical interconnect transitions to CPO 2026-2030; InP substrate remains binding
Per `wiki/optical-interconnect-primer.md`. AXTI controls 60-70% global InP share; supply deficit >70%. NVDA $2B investment in LITE + COHR confirms strategic importance. CPO transition adds InP consumption per system. **User's AXTI position is structurally correct but Stage 4-5 multiple compression risk warrants TRIM** per `companies/AXTI/thesis.md` Pass 2 decomposition.

### 6. Enterprise agentic adoption goes function-by-function
Per `wiki/agentic-ai-enterprise.md`. 88% pilot failure rate; 12% breakthroughs return 171% ROI. Research/devtools first (Cursor), then legal (Harvey), banks/law/consulting/biotech is the next 24-month wave. **DDOG is under-modeled per workload model — ADD recommendation.**

### 7. Hyperscalers + neoclouds are non-zero-sum
Per `sector/where-we-are.md` non-default read #5. MSFT-NBIS $17.4-19.4B + Meta-CoreWeave $21B + Microsoft-IREN $9.7B prove the relationship. **NBIS, CRWV, IREN, APLD all structurally validated; AMZN AWS at $150B ARR (+28% YoY) is the cloud-scale winner.**

### 8. Frontier model providers reach profitability earlier than guided
Per `signals/triangulation.md`. Anthropic Q2 2026 first operating profit ($559M). Collapses S4 (digestion) bear case materially.

### 9. Bloom Energy validates time-to-power thesis at scale
Per `companies/BE/thesis.md`. Q1 2026 revenue $751M; product revenue +208% YoY. Oracle 2.8 GW expanded agreement. $20B total backlog. **User sold this at +30% earlier — L3 lesson re-applied; re-entry at 4-6% recommended.**

### 10. Crypto-miner-to-AI-host pivot is real but execution-variable
Per `companies/CORZ/thesis.md`, `companies/IREN/thesis.md`, `companies/APLD/thesis.md`. Combined Aschenbrenner positions >$1.4B. APLD has cleanest contract book ($23.5B+); IREN largest Texas grid connections (2,750 MW); CORZ canonical CoreWeave archetype. Each is a valid 2-4% entry candidate.

---

## Mid-conviction uncertainties (40-70%)

- **MoE architecture diffusion rate** — could change HBM gap by ±50% over 24 months
- **Custom silicon share trajectory** — 20-30% inference share by 2028 (Oplexa); could be 10-15% (slower) or 35-45% (faster)
- **CPO deployment timing** — Cignal AI "inevitable but not imminent"; affects GLW long-term
- **Bank/law/consulting/biotech mass adoption timing** — 12 months or 36 months
- **Sovereign AI scaling pace** — UAE, Saudi, Singapore, India; combined could add $200B+ to TAM
- **NVDA Rubin efficiency advantage** — affects S1 vs S2 weighting
- **Trump-admin IRA policy** — direct risk to T1 Energy thesis

---

## Biggest risks I'm watching

1. **Stage 4-5 multiple compression at named winners.** Likely outcome at GLW (~100x P/E), AXTI (~340x forward), AVGO (~$1.2T cap), NVDA (~30x forward). Warrants smaller positions than Stage 1-2 names.
2. **Taiwan/TSMC catastrophic tail risk.** TSMC = 92% of advanced AI chips. Cannot be hedged within AI stack.
3. **US-China export control escalation.** Affects NVDA China revenue, Korean memory, optical components.
4. **IRA policy rollback under Trump admin.** Existential for T1 Energy specifically; affects BE marginally.
5. **Enterprise agentic adoption stalls** below 12% breakthrough rate.
6. **Unknown technical disruption** — intellectual humility per B14.

---

## Portfolio-level recommendations (complete coverage)

User has 11 holdings; all now have thesis files. Plus 12 watchlist candidates with thesis files. Complete coverage.

### HOLDINGS — recommendations by position

| Holding | % | Tier | Recommendation | Source thesis |
|---|---|---|---|---|
| SK Hynix | 12.5% | Core | **HOLD** at target | `companies/HYNIX/thesis.md` |
| Murata | 12.4% | Core | **HOLD** at target | `companies/MURATA/thesis.md` |
| ServiceNow (NOW) | 12.0% | Core | **HOLD** at target | `companies/NOW/thesis.md` |
| Corning (GLW) | 10.8% | Active | **TRIM to 5-7%** conditional on Q2 print + CPO news | `companies/GLW/thesis.md` |
| Sandisk (SNDK) | 10.8% | Active-Core | **HOLD** at target (Aschenbrenner-validated) | `companies/SNDK/thesis.md` |
| T1 Energy (TE) | 7.1% | Active | **HOLD** but DO NOT ADD; trim if IRA rollback | `companies/TE/thesis.md` |
| Datadog (DDOG) | 6.8% | Active | **ADD to 8-10%** (UNDER-weighted per OS workload model) | `companies/DDOG/thesis.md` |
| STM | 6.6% | Active | **HOLD** at target (upgraded from "untested" per reconstruction) | `companies/STM/thesis.md` |
| Hyperliquid (PURR) | 5.7% | Off-thesis special case | **HOLD**; do NOT add (separate framework) | `companies/PURR/thesis.md` |
| Tower Semi (TSEM) | 5.4% | Active | **HOLD** at target (upgraded; could add on Q2 confirmation) | `companies/TSEM/thesis.md` |
| AXTI | 4.8% | Active | **TRIM to 2-3%** — Pass 2 decomposition shows multiple compression risk | `companies/AXTI/thesis.md` |

### NEW POSITION CANDIDATES (cash deployment priorities)

| Name | Recommended size | Tier | Rationale | Source thesis |
|---|---|---|---|---|
| **AVGO** | 5-8% | Active-Core | Biggest gap (S2 hedge); ~60% AI ASIC design share | `companies/AVGO/thesis.md` |
| **AMZN** | 4-7% | Active-Core | Highest anti-fragility 3.5/5; AWS + Trainium + Anthropic stake | `companies/AMZN/thesis.md` |
| **BE** | 4-6% | Active-Core | RE-ENTRY — Aschenbrenner's biggest; L3 lesson applied | `companies/BE/thesis.md` |
| **NBIS** | 3-5% | Active | Capacity-constrained pure-play | `companies/NBIS/thesis.md` |
| **GOOG** | 4-6% | Active | TPU + Anthropic + hyperscaler scale | `companies/GOOG/thesis.md` |

### SECONDARY CANDIDATES (smaller / specific theses)

| Name | Size | Rationale |
|---|---|---|
| APLD | 2-4% | Highest-quality crypto-pivot contract book ($23.5B+) |
| IREN | 2-4% | Largest Texas grid (2,750 MW); Microsoft $9.7B |
| CORZ | 2-4% | CoreWeave archetype; $8.7B contract |
| CRWV | 2-4% | Pair-trade alternative to NBIS |
| CAMT | 2-3% | Advanced packaging inspection |
| RMBS | 1-2% | Memory IP licensor |

### Trade-off analysis (the rotation question)

User cash position ~38%. Recommended GLW trim ~5% + AXTI trim ~2% = ~7% incremental cash. Total available capital: ~45% of portfolio.

**Suggested deployment if maximally aggressive (rough framework):**
- AVGO 6% new = 6%
- AMZN 5% new = 5%
- BE 5% re-entry = 5%
- NBIS 4% new = 4%
- DDOG add (~2.5% from 6.8% to 9.3%) = 2.5%
- Power name (VST or CEG) 3% = 3%
- **Total deployment ≈ 25.5%** — leaves ~20% cash for opportunistic adds

**Suggested deployment if balanced:**
- AVGO 5% new
- AMZN 4% new
- BE 4% re-entry
- DDOG add 2%
- **Total ≈ 15%** — leaves ~30% cash

**Suggested deployment if defensive:**
- AVGO 4% new (the structural S2 gap)
- DDOG add 1.5%
- Hold rest in cash
- **Total ≈ 5.5%** — leaves significant cash

---

## What I changed my mind about (cumulative log)

- **2026-05-20:** S4 cut from 15% → 10% → 6% across the day as evidence cascaded
- **2026-05-20:** Vicor reframed from "guaranteed downstream beneficiary" to "binary on next-gen design wins" (B12 added)
- **2026-05-20:** Recognition Stage refined into 0-5 spectrum (user critique)
- **2026-05-20:** Execution Quality added as 5th component (user input)
- **2026-05-20:** Corrected inference cloud non-default read (user pushback — market HAS priced)
- **2026-05-20:** Codified Token-Volume Filter as hard portfolio gate
- **2026-05-20:** NVDA Q1 FY27 GRADED — direction RIGHT; L4 added (sandbag heuristic)
- **2026-05-21:** Built workload model — agentic ~210T tokens/month, projecting 70× over 24mo
- **2026-05-21:** Codified Forward Mix Probabilistic Model (user insight)
- **2026-05-21:** Aschenbrenner 13F analyzed — long-power thesis confirmed; short-chip thesis disagreed on timing
- **2026-05-21:** STM + TSEM UPGRADED from "untested → pending" to "Active hold" per reconstruction
- **2026-05-21:** AXTI Pass 2 decomposition — TRIM recommended
- **2026-05-21:** BE re-entry recommended (Aschenbrenner $878.7M validates L3 lesson)
- **2026-05-21:** Full coverage achieved — 23 thesis files

---

## What's still ambiguous

- MoE diffusion rate (biggest single uncertainty)
- Custom Si actual share trajectory (20-30% range)
- Bank/law/consulting/biotech timing
- VICR's 2nd gen VPD lead customer identity
- SK Hynix vs Samsung HBM4 NVDA allocation
- Power infrastructure deployment pace
- Trump-admin IRA policy
- Specific Anthropic equity stake values at GOOG + AMZN
- Stock entry timing for any cash deployment

---

## Investment philosophy that emerges

**Buy the layers where supply is structurally constrained AND that benefit regardless of which specific architecture wins at the top.** Pay attention to recognition stage — Stage 1-2 names carry asymmetric setup; Stage 3-4 names carry multiple compression risk requiring fundamentals to keep accelerating. Apply Token-Volume Filter as binary gate. Use Forward Mix Probabilistic Model for multi-segment companies. Triangulate signals across primary-tier sources before committing. Sell ONLY on falsifier firings, not macro noise or partial profits. Build for compounding context — every new analysis plugs into the substrate and gets richer over time.

---

## Open questions for the user

1. **Cash deployment philosophy** — aggressive (~25% deployment), balanced (~15%), or defensive (~5%)?
2. **GLW trim timing** — execute now or wait for Q2 print (late July 2026)?
3. **AXTI trim timing** — execute now given Stage 4-5 risk or wait for Q2 print?
4. **BE re-entry size** — full 4-6% recommendation or staged entry?
5. **AVGO vs AMZN priority** — both are top recommendations; preference?
6. **Watchlist promotion order** — CORZ/IREN/APLD/CRWV — any preference based on user knowledge?

---

## Cross-references

- `sector/where-we-are.md` — current state synthesis (updated periodically)
- `wiki/` — 7 foundational primers (token-consumption, agentic-ai-enterprise, hbm-primer, agentic-workload-scaling, power-for-ai-primer, optical-interconnect-primer, custom-silicon-primer)
- `companies/` — 23 thesis files (NVDA, GLW, VICR, AVGO, NBIS, HYNIX, NOW, SNDK, DDOG, MURATA, TE, STM, TSEM, PURR, AMZN, AXTI, BE, CORZ, IREN, APLD, CRWV, GOOG, CAMT, RMBS)
- `meta/methodology.md` — analytical principles (Meta-First-Principle, Token-Volume Filter, Forward Mix Probabilistic Model, Recognition Stage spectrum, Two-Part GRADE Protocol, Source Reliability Framework, Downstream-Supplier-Asymmetry, Co-Adaptation Principle, Division of Labor)
- `meta/biases-watchlist.md` — 14 documented biases (B1-B14)
- `predictions/lessons.md` — 4 accumulated lessons (L1-L4)
- `signals/triangulation.md` — high-confidence signal log
- `portfolio/recommendations.md` — pending actions (GLW trim, AXTI trim, DDOG add, AVGO add, AMZN add, NBIS add, BE re-entry)
- `portfolio/coherence-audit.md` — Pass 1 audit
