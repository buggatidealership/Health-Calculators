# Bottleneck Map — Held Positions + Active Candidates

**Created:** 2026-05-22
**Trigger:** User asked for bottleneck-layer mapping + agnostic/CPU/agentic scoring across the portfolio
**Source bottleneck framework:** `sector/bottlenecks.md` (last_review 2026-05-20)

## TL;DR

Maps each held name + active candidate against:
- **Bottleneck layer** (0 = at the constraint with pricing power; 3 = consuming the output, demand-driven only)
- **Agnostic-to-top-compute-winner** (1-10) — does this name win regardless of whether NVDA, AMD, or custom ASIC takes the top?
- **CPU-growth tightness** (1-10) — how directly does CPU-socket growth drive the thesis?
- **Agentic-workload tightness** (1-10) — how directly does agentic AI workload growth drive the thesis?

Higher numbers = stronger leverage to that dimension.

## Layer definitions (from `sector/bottlenecks.md`)

| Layer | Meaning | Pricing-power character |
|---|---|---|
| **0** | AT the binding constraint (you own / are the chokepoint) | Maximum — sets the price |
| **1** | One step from the constraint (you feed it or enable it) | High — gated by upstream demand |
| **2** | Two steps from the constraint (you use it / package on top of it) | Medium — passes through pricing |
| **3** | Three steps from the constraint (you consume the output) | Demand-driven, no chokepoint control |

Bottleneck time-bins from `bottlenecks.md`:
- **Today binding (~80% priced):** HBM, CoWoS-L, frontier-node wafer, talent
- **6-12 months (partially priced):** Datacenter power, liquid cooling, power conversion
- **12-24 months (UNPRICED — the edge):** Optical interconnect / CPO, advanced substrate, inference observability, CPU rebalance (agentic), memory bandwidth, hyperscaler-internal training silicon

## Held positions

| Name | Layer | Which bottleneck | Top-compute agnostic (1-10) | CPU tightness (1-10) | Agentic tightness (1-10) | One-line rationale |
|---|---|---|---|---|---|---|
| **SK Hynix** (HYNIX) | **0** | HBM (today binding) | **9** | 3 | 8 | Sells HBM to every accelerator — NVDA, AMD, all custom ASICs |
| **Murata** (MURATA) | **1** | MLCCs feed every accel board | **10** | 5 | 6 | Every board needs them regardless of chip designer |
| **ServiceNow** (NOW) | **3** | Agentic workflow apps (Layer 3 = demand-driven) | **8** | 6 | **10** | Workflow automation IS the agentic enterprise pitch |
| **Corning** (GLW) | **0/1** | Optical interconnect + glass substrate (12-24mo edge) | **10** | 4 | 8 | Fiber/glass into every hyperscaler + every fab |
| **Sandisk** (SNDK) | **1** | NAND for AI storage (not today binding; HBM is) | **9** | 3 | 7 | Storage layer agnostic to compute winner; agentic checkpoints + KV cache |
| **T1 Energy** (TE) | **0** | Power (6-12mo binding), solar/battery specifically | **10** | 2 | 5 | Power is power; chip-agnostic |
| **Datadog** (DDOG) | **0** | Observability (12-24mo binding per `bottlenecks.md`) | **9** | 7 | **10** | Agentic = telemetry explosion = direct ARR |
| **STM** | **1** | Power conversion (SiC) + photonics components | **8** | 4 | 5 | SiC for power conversion serves all DC builds |
| **Hyperliquid** (PURR) | **N/A** | Not in AI thesis — crypto perp DEX | N/A | N/A | N/A | Held as crypto/tokenization satellite, separate framework |
| **Tower Semi** (TSEM) | **1** | Specialty foundry for Si photonics + mixed-signal | **8** | 2 | 7 | Si photonics for east-west interconnect |
| **AXT** (AXTI) | **0/1** | InP substrate at CPO bottleneck (12-24mo edge) | **10** | 1 | **9** | Substrate sells to all photonics players; agentic = more interconnect |

## Active candidates

| Name | Layer | Which bottleneck | Agnostic | CPU | Agentic | One-line rationale |
|---|---|---|---|---|---|---|
| **ARM** | **1/2** | CPU IP + AGI CPU (CPU rebalance is 12-24mo binding) | **5** | **10** | 8 | AGI CPU competes w/ NVDA/AMD; IP into NVDA Grace + many others |
| **SMTC** | **0/1** | LPO/CopperEdge at CPO bottleneck (12-24mo unpriced) | **9** | 2 | **9** | Multi-hyperscaler LPO design wins; agentic = direct interconnect demand |
| **Rigaku** (RIGAKU) | **0** | X-ray metrology enables CoWoS/adv packaging (today binding) | **9** | 3 | 5 | All fabs need metrology; agentic effect indirect via fab utilization |

## What the scores reveal

### Sweet-spot names (high agnostic + high agentic, durable across compute-winner scenarios)
| Name | Agnostic | Agentic | Notes |
|---|---|---|---|
| Datadog | 9 | 10 | Layer-0 observability + agentic-direct |
| AXT | 10 | 9 | Layer-0/1 InP at the unpriced CPO bottleneck |
| SMTC | 9 | 9 | Layer-0/1 at CPO bottleneck |
| ServiceNow | 8 | 10 | Layer-3 but most directly agentic-tied app in portfolio |
| Corning | 10 | 8 | Layer-0/1 photonics + glass |

### Highest CPU-leverage
Only **ARM** scores 10 on CPU. The portfolio is otherwise CPU-light. If the agentic CPU-rebalance scenario binds (P=50% per `bottlenecks.md`), ARM is the only direct beneficiary in the universe.

### Layer-0 names (max pricing power, at the constraint)
SK Hynix, Corning (partial), T1 Energy, Datadog, AXT (partial), Rigaku, SMTC (partial) — **seven of fourteen** held + candidates own a piece of an actual binding constraint.

### Layer-3 exposure (demand-driven, no chokepoint control)
Only **ServiceNow**. Needs agentic adoption to validate; scenario-dependent. The portfolio is structurally Layer-0/1 heavy — bottleneck-control oriented.

### Notable gaps
- **No direct power-generation Layer 0** (CEG/VST/GEV absent — only T1 Energy as solar/battery proxy)
- **No direct compute Layer 2** (NVDA/AMD absent — by design per user's "behind-the-front-line" thesis)
- **ARM is the only direct CPU play** — concentration risk on a single name for the CPU-rebalance scenario
- **Strong photonics/interconnect concentration**: AXT + Corning + SMTC + Tower Semi all play this same 12-24mo edge. Effective optical-stack exposure is ~25-30% of portfolio if SMTC is added.

## Cross-portfolio dependency notes

Names that share scenario dependencies:
- **AXT + Corning + SMTC + Tower Semi** — all win in the CPO/optical-interconnect 12-24mo scenario; all lose if copper SerDes engineering breakthroughs delay CPO inflection
- **ARM standalone** — only CPU-rebalance play, no portfolio diversification on this dimension
- **NOW + DDOG** — both Layer-3-or-observability agentic plays; both rely on agentic enterprise adoption (88% pilot failure rate per `wiki/agentic-ai-enterprise.md` is the shared falsifier)
- **HYNIX + SNDK** — both memory; correlated to memory-cycle inflection

## How to use this file

- **Position-sizing reference:** when considering a new name, score it against these three dimensions + identify which layer it sits in
- **Scenario stress-test:** if scenario X plays out per `sector/scenarios.md`, which scored names are exposed?
- **Concentration audit:** sum exposure across names sharing the same bottleneck dependency
- **Update cadence:** review when `sector/bottlenecks.md` changes (monthly + on-event); rescore any name whose thesis has materially shifted

## Cross-references

- `sector/bottlenecks.md` — the underlying bottleneck framework
- `sector/scenarios.md` — multi-future framework these scores inform
- `portfolio/holdings.md` — current position values
- `meta/methodology.md` principle #20 (segment-decomposition) — relevant for multi-segment names like MURATA/STM/GLW
- Each held name's `companies/{TICKER}/thesis.md` has a back-reference to this artifact (cascade per Critical Rule #10)
