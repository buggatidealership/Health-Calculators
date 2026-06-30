# Time-to-X Framework — Bypass-Route Mapping for Binding Constraints

**Last updated:** 2026-05-20
**Origin:** Extracted from the user's Dec 2025 / Jan 2026 "time-to-power" thesis. Abstracted to apply to any binding constraint in the AI value chain.

## TL;DR

For any binding constraint in the AI value chain, the **consensus solution** rarely contains the edge — it's already priced. The edge is in the **bypass route**: the alternative that consumers default to when the consensus solution fails their TRUE sensitivity metric. This framework systematizes the bypass-route discovery process. Worked example: HBM (below). Apply to: CoWoS, networking, cooling, inference, storage, anything that bottlenecks.

## The framework (6 steps)

### Step 1 — Identify the binding constraint
Pick a node in the AI value chain where supply genuinely lags demand. Use `sector/bottlenecks.md` as the source.

### Step 2 — Determine the consumer's TRUE sensitivity
This is the critical step. The consumer (hyperscaler, AI infrastructure builder) is rarely sensitive to *total capacity*. They're usually sensitive to a more specific metric:

| Constraint | Consumer's TRUE sensitivity |
|---|---|
| Firm power | **Time-to-power**: months from contract to operational MW |
| HBM | **Time-to-bandwidth-per-dollar**: when can I get enough memory bandwidth at acceptable cost? |
| CoWoS-L | **Time-to-package**: when does my custom Si reach volume packaging? |
| Networking | **Time-to-bandwidth-per-rack**: when can I get 800G+ fabric at scale? |
| Cooling | **Time-to-density**: when can I run >100kW per rack? |
| Storage | **Time-to-IOPS-at-scale**: when can I get inference-tier persistent storage at scale? |
| Inference compute | **Time-to-tokens-per-dollar**: when do my tokens/sec match my cost budget? |

The TRUE sensitivity is rarely "more units." It's almost always "units available WHEN I need them at the cost I can absorb."

### Step 3 — Map consensus solutions by the metric
List the obvious incumbents. Score each by the sensitivity metric (not by aggregate market share or revenue).

### Step 4 — Identify what consumers DO when consensus solutions fail the metric
This is the N-whys step. When the incumbent says "12 month lead time" or "we're sold out through 2027" — what does the consumer do? They don't wait. They:
- Find an alternative supplier with shorter lead time (even if more expensive)
- Use a different technology that solves the same need differently
- Re-architect their system to need less of the constrained resource
- Build the capability in-house

Each of these is a bypass route.

### Step 5 — Map bypass-route names
Identify investable names at each bypass route. These are usually:
- Smaller, less-followed names
- Different industry classification from incumbents
- Technologies considered "alternative" or "second-best" — but available

### Step 6 — Position
The trade is at the bypass route, not the consensus solution. The consensus name is usually already priced; the bypass route is where the asymmetry lives.

---

## Worked example: HBM (the constraint in your portfolio)

### Step 1 — Constraint
HBM3E (and incoming HBM4) supply for AI compute. Currently binding through end-2026 per `sector/bottlenecks.md`.

### Step 2 — Consumer's TRUE sensitivity
Hyperscalers and chip vendors are not sensitive to total HBM capacity. They're sensitive to **time-to-bandwidth-per-dollar** — when can they get enough memory bandwidth to feed their compute, at a cost that keeps their inference TCO competitive.

This is a key insight: even if HBM3E supply doubled tomorrow but cost rose 50%, the consumer would still be looking for bypass routes. The metric is bandwidth/$, not bandwidth/wafer.

### Step 3 — Consensus solutions ranked by the metric
| Supplier | Time-to-bandwidth-per-$ | Notes (cited / hedged) |
|---|---|---|
| SK Hynix (HBM3E) | Long (sold out 2026 per CNBC reporting on Q1 2026 earnings, https://www.cnbc.com/2026/04/23/sk-hynix-earnings-ai-memory-shortage-hbm-demand.html) | Allocated to NVDA, capacity expansion ongoing |
| Samsung (HBM3E) | Medium-Long (qualification still in progress with major customers — per industry reporting) | Catching up; HBM4 race active |
| Micron (HBM3E, MU) | Medium (ramping in 2026; smaller share — per industry reporting) | US-based, geopolitically simpler |

All three are at "capacity-expanding-but-still-tight" status. None solve the metric cleanly in the next 12 months (my read, not cited).

### Step 4 — What consumers DO when HBM is tight
The N-whys step:
1. **Pay more, accept longer lead time.** (Consensus response — limited investable angle since incumbents already capture this.)
2. **Re-architect to need less HBM per compute unit.** Use larger SRAM on-die (Cerebras WSE approach), use compute-in-memory architectures, use sparse / mixture-of-experts models that activate fewer parameters per token.
3. **Pool memory across systems via CXL.** Use memory pooling so cluster-level memory bandwidth substitutes for per-chip HBM.
4. **Use custom DRAM packaging.** Hyperscaler-designed memory subsystems (e.g., LPDDR5X on AI accelerators where latency is less critical).
5. **Algorithmic substitution.** Better serving software (vLLM, TensorRT-LLM optimizations) extracts more tokens-per-watt from the same HBM. This SUBSTITUTES for additional HBM capacity.

### Step 5 — Bypass-route names (the investable angle)

| Bypass route | Public-market exposure | Status |
|---|---|---|
| CXL ecosystem (memory pooling) | **Astera Labs (ALAB)** — CXL controller leader; **MRVL** — CXL devices and DPUs | ALAB needs full thesis; MRVL needs full thesis |
| Custom DRAM / memory IP | **MRVL** (custom memory subsystems for hyperscalers); **Rambus (RMBS)** (memory IP) | RMBS deserves a watchlist add |
| Alternative architectures (SRAM-heavy, compute-in-memory) | **Cerebras** (private, IPO process); **Groq** (private); **SambaNova** (private) | Track via private-tracker.md; public exposure limited |
| Serving software optimization | Mostly private / open-source; benefits NVDA (TensorRT-LLM), AMD (ROCm). No clean public pure-play. | Indirect — read as accelerator for consensus names |
| Hyperscaler in-house silicon with custom memory | **AVGO** (Google TPU memory subsystem partner), **GOOG** / **AMZN** / **META** | AVGO is the primary public bet |

### Step 6 — Position implication
- Your **SK Hynix** position is already at the consensus solution — that's a high-quality bet but it's the "incumbent answer" not the bypass route. Anti-fragile because HBM demand grows under most scenarios, but priced in.
- The bypass-route adds you DON'T have: **ALAB** (Astera Labs — CXL pure-play), **MRVL** (memory + CXL + custom Si triple-exposure), **RMBS** (memory IP). All three deserve at least watchlist entries.
- The AVGO gap I flagged earlier shows up here AGAIN — it's not just an S2-hedge, it's also a bypass-route play for HBM constraint via custom-memory subsystems.

---

## Other layers to apply this framework to

Each of these is a 1-day work-unit. Building them adds named investable opportunities to the watchlist.

### CoWoS-L packaging
- Constraint: TSMC CoWoS-L sold out, hyperscalers can't get enough advanced packaging slots
- TRUE sensitivity: **time-to-package** for custom Si projects
- Bypass routes: Samsung packaging, Intel Foveros, Amkor (AMKR) advanced packaging, ASE Tech (ASX), CoWoS-S as a downgrade

### Networking (cluster-scale bandwidth)
- Constraint: standard ethernet hits SerDes/copper limits at AI cluster scale
- TRUE sensitivity: **time-to-800G-fabric** at scale
- Bypass routes: CPO (co-packaged optics), photonic switches, custom NICs, new fabric architectures (Tesla Dojo-style)

### Cooling (density-per-rack)
- Constraint: air cooling fails at >50kW/rack; liquid cooling adoption lagging
- TRUE sensitivity: **time-to-100kW-per-rack** deployable
- Bypass routes: immersion cooling, 2-phase liquid, rear-door HX, in-row CDU vendors

### Inference compute
- Constraint: tokens-per-second-per-dollar for production inference workloads
- TRUE sensitivity: **time-to-inference-at-target-cost** for specific workloads
- Bypass routes: specialized inference silicon (Groq, Cerebras, SambaNova), custom Si (TPU, Trainium, MTIA), algorithmic (speculative decoding, distillation, MoE), edge inference

### Storage (AI-specific)
- Constraint: petabyte-scale data + retrieval for RAG and agent state
- TRUE sensitivity: **time-to-IOPS-at-cost** for inference-tier storage
- Bypass routes: NAND specialists (Sandisk, Kioxia private but public via partner), object storage at scale (PSTG, NTAP), DPUs offloading storage (MRVL)

### Power (already done — your worked example)
- Constraint: firm power for AI datacenters; grid interconnect 5–10 year queues
- TRUE sensitivity: **time-to-power** from contract to operational MW
- Bypass routes: Bloom Energy (fuel cells, weeks not years), Solaris Energy Infrastructure (mobile power generation), behind-the-meter co-located generation, modular nuclear (SMRs, longer-term but emerging)

**🟢 2026-06-30 RESEARCH-VERIFIED UPDATE (per `signals/cross-source-log/2026-06-30-ALAB-vs-MRVL-connectivity-innovation-and-time-to-power-reframe.md`, 1 Opus 4.8):** User re-affirmed the reframe — "the framework for power is NOT how much power, it is TIME-TO-POWER." Verified, and the constraint is WORSE + DOUBLE:
- **Lead-times (T1/T2):** grid interconnection ~7-8yr in PJM (~3yr ISA + ~4yr energize; national median 4.5yr per LBNL *Queued Up 2025*; ERCOT <2yr = why DC load flees to Texas); gas turbines sold out **through 2029, orders into 2031** (GE Vernova, pricing +300%/3yr) — "no new slots until 2029-31," worse than the 4-6yr prior.
- **SECOND binding constraint (NEW):** electrical gear — transformers 3-5yr (was 24-30mo pre-2020), **>50% of planned 2026 US DC builds delayed/cancelled** for lack of transformers + switchgear; only ~1/3 of 2026 planned capacity under construction. The gear that converts MW→energized racks is as binding as generation. Validates the RESILIENCE leg.
- **Bypass-route name map (expanded, by what each COMPRESSES):**
  - Bridge / fast-deploy (purest time-to-power): **Solaris (SEI)** mobile turbines power-as-a-service (PUREST, but fragile small-cap neg-FCF-to-2028); **Bloom (BE)** SOFC queue-skip (deploys in weeks; Oracle 2.8GW + $20B backlog); GE Vernova (GEV, diluted — also IS the bottleneck); CAT/CMI gensets (diluted, sold out through 2027).
  - Resilience (gear): **Vertiv (VRT)** + **Powell (POWL)** switchgear pure-play; Eaton (ETN, diluted); Siemens Energy (ENR, transformers — also EU-sovereign).
  - **NOT bypass (firm-but-compress-nothing):** Constellation (CEG)/Vistra (VST)/Talen (TLN) sell EXISTING power; Oklo/NuScale (OKLO/SMR) firm but SLOWEST (2027-2032) — separate "firm-baseload-later" bucket, not time-to-power.
- **Key discipline:** do NOT conflate "owns/sells power" (VST/CEG) with "compresses time-to-power" (SEI/BE/GEV). The bypass edge is energization-latency compression, not MW ownership.

---

## How to use this framework systematically

When INGEST surfaces a supply-chain event:
1. Identify which constraint the event is about
2. Open the relevant section above (or create one if it's a new constraint)
3. Re-evaluate: did the event change the time-to-X for any solution?
4. If yes: which names move on the implication?
5. Update `sector/bottlenecks.md`, affected `companies/{TICKER}/exposures.md`, and `watchlist/candidates.md`

When BOTTLENECK-FORECAST runs monthly:
1. Walk each section above
2. Check if any bypass routes have become more or less viable
3. Surface to user with: "the metric on constraint X is shifting because of Y; name Z is becoming more attractive at the bypass route"

## What this framework does NOT do

- It does not pick which scenario plays out (use `sector/scenarios.md`)
- It does not handle non-constraint-driven theses (e.g., share gains in a non-bottlenecked market)
- It does not capture demand-side timing (use causal maps for that)

It's a SUPPLY-SIDE bypass-route mapper. It complements but doesn't replace the rest of the OS.
