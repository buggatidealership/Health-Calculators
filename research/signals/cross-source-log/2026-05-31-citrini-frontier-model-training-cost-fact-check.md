# Citrini Research Frontier Model Training Cost Table — Fact-Check + Ripple Effects

**Date logged:** 2026-05-31
**Source:** User-shared Citrini Research table 2026-05-31 evening — "Pre-training cost of a frontier model" (GB300 GPU-hours required × training rental cost at $4-6/GB300 GPU-h)
**Method:** Verify load-bearing assumptions + math + extrapolate top-down structural ripple per Principle #35 candidate
**Source validity:** T2 for Citrini's table; verified independently against T1 NVIDIA specs + T2 GPU rental pricing aggregators + T2 model parameter disclosures
**Cross-reference:** `signals/cross-source-log/2026-05-31-soc-building-block-layer-analysis.md` (where the GPU compute lands); `wiki/agentic-workload-scaling.md` (token-flow context)

---

## Part 1: Fact-check verdict — INTERNALLY CONSISTENT + EMPIRICALLY GROUNDED

### Assumption 1: GB300 dense FP8 = 5 PFLOP/s per GPU ✓ VERIFIED

- Per [Spheron T2](https://www.spheron.network/blog/nvidia-b300-blackwell-ultra-guide/): "B300 (GB300) has FP8 dense performance of 5 PFLOPS per GPU, representing an 11.1% improvement over B200's 4.5 PFLOPS"
- Per [Tom's Hardware T2](https://www.tomshardware.com/pc-components/gpus/nvidia-announces-blackwell-ultra-b300-1-5x-faster-than-b200-with-288gb-hbm3e-and-15-pflops-dense-fp4): "Blackwell Ultra B300 — 1.5X faster than B200 with 288GB HBM3e and 15 PFLOPS dense FP4"
- Citrini's 5 PFLOPS dense FP8 = CORRECT per NVIDIA spec sheet

### Assumption 2: Training compute = 6 × active params × tokens ✓ STANDARD

- This is the canonical Hoffmann/Chinchilla formula: C = 6 × N × D (2 forward + 4 backward FLOPs per param per token)
- For MoE models: convention uses ACTIVE params (not total), which Citrini correctly applies
- VERIFIED against widespread frontier model convention

### Assumption 3: Blackwell rental price $4-6 per GPU-hour ✓ CONSERVATIVE-TO-MID

- Average B200 rental ~$5.17/hr (range $2.65-$14.24/hr) per [Spheron T2](https://www.spheron.network/gpu-rental/b200/)
- GB200 superchip ~$20.14/hr ≈ $10/hr per GPU per [getdeploying T2](https://getdeploying.com/gpus/nvidia-gb200)
- [Tech-Insider T2](https://tech-insider.org/nvidia-blackwell-gpu-rental-price-surge-ornn-index-2026/) reports Blackwell GPU rental hitting $4.08/hr — confirms lower-bound
- GB300 = Blackwell Ultra would command 10-20% premium over B200 → ~$5-7/hr realistic
- Citrini's $4-6/hr = CONSERVATIVE-TO-MID for current spot, plausible-to-low for forward 2026

### Math check (worked example for 200B active × 200T tokens)

- Total compute = 6 × 2×10^11 × 2×10^14 = 2.4 × 10^26 FLOPs ✓ matches table
- GPU-hours at 15% MFU = 2.4e26 / (5e15 × 3600 × 0.15) = 88.9M GPU-h ✓ matches table
- Cost at $4/hr × 88.9M = $355.6M ✓ matches "$356M-$533M" range

**Math is internally consistent and tracks to verified inputs.**

### Realism of the model configs

- **200-300B active params**: realistic for 2026 frontier MoE. Llama 4 Behemoth = 288B active on 2T total per [explainx.ai T2](https://explainx.ai/blog/llm-model-parameters-billions-explained); DeepSeek V3 = 37B active on 671B total. Citrini's range = top-tier frontier.
- **200-400T tokens**: AGGRESSIVE forward scenario. Current frontier: Qwen 3 = 36T tokens; Llama 4 Behemoth = 30T multimodal per [LearnCSDesign T2](https://www.learncsdesign.com/day-5-the-frontier-model-landscape-gpt-claude-gemini-and-beyond/). 200T+ implies massive synthetic + multimodal expansion. Realistic for 2027-2028 frontier, not 2026 baseline.
- **15-30% MFU**: realistic frontier training range. 15% is low (debugging/network stalls); 30% is mature mid-run; best-case can hit 40-50%.

### What the table EXCLUDES (these are the caveats)

1. **Test-time / RL post-training compute** — for reasoning models (o1/Claude Opus reasoning tier), post-training RL is **10-100× pre-training cost**. Citrini's $200M-$1.6B per run is a FLOOR, not total.
2. **Data infrastructure** — generating + storing 200-400T tokens of training data
3. **Research + labor + experimentation** — the failed-run + ablation cost is often 3-10× the successful production run
4. **Energy markup** — rental price includes power but data-center power costs scale with TDP separately
5. **Networking + storage I/O** — embedded in rental cost but not isolated

**Net verdict on Citrini's table: rigorous WITHIN its stated scope. The headline ~$200M-$1.6B per run is a defensible FLOOR for pre-training cost only; full cost of producing a deployed frontier model is materially higher.**

---

## Part 2: Top-down structural meaning (per Principle #35)

The table's load-bearing insight is NOT the per-run cost — it's what the per-run cost tells you about the structure of frontier AI scaling:

### Structural insight #1: Pre-training cost is DOWN per FLOP but UP in aggregate

- GPT-4 era (2022-2023): ~$100-200M per training run; ~1 run/year per major lab
- 2026 frontier: $200M-$1.6B per run; **~6 runs/year per major lab** (one frontier model every ~2 months per [LearnCSDesign T2](https://www.learncsdesign.com/day-5-the-frontier-model-landscape-gpt-claude-gemini-and-beyond/))
- 5-10 frontier labs globally × 4-6 runs/year × $500M-$1.5B/run = **$10-90B/year aggregate pre-training spend**
- This is consistent with hyperscaler $400-900B capex framing: pre-training is a small slice of total AI capex

### Structural insight #2: Over-training is the new normal

- Chinchilla-optimal token:param ratio = 20:1. For 200B active params, that = 4T tokens
- Citrini's table assumes 200-400T tokens = **50-100× Chinchilla-optimal**
- This is rational: training compute is amortized over inference lifetime; over-training reduces per-token inference cost
- Implication: **data supply becomes the new binding constraint**. Internet has ~50T tokens; 200-400T requires synthetic data + multimodal expansion at industrial scale.

### Structural insight #3: MoE architecture changes the BOM

- Total params (e.g., 2T Llama 4 Behemoth) require MEMORY capacity
- Active params (e.g., 288B per forward pass) require MEMORY BANDWIDTH
- MoE shifts the binding constraint from compute → memory capacity AND bandwidth simultaneously
- **HBM4/HBM4E demand scales with TOTAL params; LPDDR/storage demand scales with corpus size**

---

## Part 3: Ripple effects — N-th order cascade

### 1st order (P>80%) — direct compute supply chain

| Layer | Beneficiary | Magnitude |
|---|---|---|
| GPU silicon | NVDA (GB300/Blackwell Ultra) | Direct revenue at each frontier-tier accelerator sold |
| HBM memory | SK Hynix + Micron + Samsung | 288GB HBM3E per B300; structurally tied to GPU shipments |
| Foundry | TSMC | 3nm wafer demand for Blackwell + successors |
| Power | TE (Supply Chain Inheritance) + CEG + GEV + ETN + VST | Each frontier run = ~3.4-13.4 TWh/yr aggregate at scale (estimate); confirms power thesis |
| Neoclouds (rental capacity) | CRWV + CORZ + APLD (held names) | Frontier labs rent rather than own at the margin; rental cost = direct revenue capture |
| Networking scale-up | ALAB (PCIe Gen6 + Scorpio) + AVGO (Tomahawk) | 100K-200K GPU clusters need 800Gbps+ scale-up fabric |

### 2nd order (P~60%) — adjacent infrastructure

| Layer | Beneficiary | Mechanism |
|---|---|---|
| NAND storage (training corpora) | SNDK + Kioxia (per `companies/SNDK/thesis.md`) | 200-400T tokens × multimodal = 100-1000 PB per training corpus; checkpoint storage adds layers |
| MLCC density | Murata + TDK + SEMCO + Yageo | 100K+ GPU cluster = MLCC content density rises with compute density |
| Substrate (advanced ABF) | IBIDEN + Unimicron + AT&S + SEMCO | Each GB300 package + accelerator card needs ABF substrate |
| Thermal solutions | Auras + AVC + CoolerMaster | 700W+ GPU TDP requires liquid cooling at scale |
| Optical interconnect | GLW (held) + Coherent + CIEN | Scale-out fabric across multiple racks |
| Test equipment | Advantest + Teradyne | GB300 test = direct revenue at silicon validation tier |

### 3rd order (P~40%) — software + observability

| Layer | Beneficiary | Mechanism |
|---|---|---|
| Model fleet observability | DDOG (held) | Post-training, every deployed model needs fleet observability; agent stickiness compounds |
| Vector DB / RAG | MDB Atlas Vector (Monday entry) | Over-trained models + agentic inference = RAG layer becomes binding for long context |
| Synthetic data generation | Private — Scale AI (private), Surge (private), Snorkel (private), no clean public play |
| EDA tools (for accelerator design) | SNPS + CDNS (watchlist) | More frequent silicon refresh = more EDA license revenue |

### 4th order (P~20%) — speculative tail

| Pattern | Implication |
|---|---|
| Sovereign AI | Nations build $50B+ training facilities (France Stargate + UAE G42 + Saudi HUMAIN + Korea Samsung) — confirmed via 2026-05-31 morning brief SoftBank €75B / 5GW France commitment per `signals/cross-source-log/2026-05-31-morning-brief.md` |
| AGI-race tail | Top 2-3 labs spend $5-10B per run at frontier by 2028 |
| Token economics flip | Pre-training cost $1B but token-revenue $10B+ over model lifetime if inference quality justifies premium pricing |
| Training compute compression | If algorithmic efficiency improves 2-3× per year (consistent with historical), 2028 frontier could need LESS aggregate compute than 2026 — bear risk to NVDA/CRWV/CORZ at the margin |

---

## Part 4: Right-side-of-Belka plays validated by this table

Per Principle #35 candidate framework — companies that look like one thing by surface but are structurally infrastructure for the new compute paradigm:

| Name | Surface | Structural reality |
|---|---|---|
| **SNDK** | Commodity NAND | Persistent storage layer for 200-400T token training corpora + checkpoint state — directly validated by Citrini's token regime |
| **Hynix** | DRAM cycle | HBM4/HBM4E binding constraint for MoE total-param scaling — directly validated by Citrini's 200-300B active param regime |
| **TE** | Solar manufacturing | Power supply for 3-13 TWh/yr frontier training aggregate — Supply Chain Inheritance per principle #28 |
| **ARM** | Mobile IP licensor | Substrate at CPU layer of training cluster + AGI CPU + N1X royalty stack |
| **DDOG** | Cloud APM | Observability category for post-training fleet deployment of every frontier model |
| **Murata** | Passive components | MLCC universal across 100K+ GPU cluster builds |

All are HELD positions in the portfolio. Citrini's table doesn't surface NEW names — it CONFIRMS the structural theses already built into the held position mix.

---

## Part 5: Where I'm cautious (failure modes worth flagging)

1. **Token-flow capex compression risk**: if algorithmic efficiency improves >2×/year (e.g., DeepSeek-style sparse activation, MoE routing improvements), aggregate training compute could decelerate — Inference Entry #4 falsifier per `predictions/inference-log.md`
2. **The 200-400T token regime might not materialize**: Citrini's high-end case is forward-looking. Current models train on 30-40T tokens. If frontier models plateau at 50-100T (data supply binding), aggregate compute = half of Citrini's high case
3. **Post-training shift**: if RL post-training compute dominates pre-training by 10-100×, the cost structure shifts and the BOM shifts (more inference-class chips, less training-class) — different beneficiaries
4. **GPU rental price compression**: forward Blackwell rental likely compresses to $2.50-3.00/hr by Q4 2026 per [Spheron T2](https://www.spheron.network/gpu-rental/b200/) — would reduce neocloud rental revenue per unit even as volume rises
5. **Citrini is selling research**: the table is intellectually rigorous but framed for narrative impact (headline $1.6B per run = ammunition for "capex must continue compounding" thesis). I trust the math; I'm cautious about treating any one piece of sell-side research as validation of an existing thesis (B26 risk)

---

## Position implication (per Critical Rule #11)

**Position implication:** NO IMMEDIATE SIZING TRIGGER. Citrini's table CONFIRMS rather than CHALLENGES the existing portfolio's right-side-of-Belka structural compounder bias (SNDK + HYNIX + TE + ARM + DDOG + Murata all directly validated). Per Principle #35 candidate, top-down structural thesis from this table = unchanged (frontier compute is compounding, not decelerating). No new entry candidate surfaced from this artifact alone. Monday MDB + DDOG + NOW execution unchanged. Next checkpoint: Computex 2026-06-01 keynote + post-event brief 2026-06-06 per `meta/todo.md`.

---

## Cross-references

- `signals/cross-source-log/2026-05-31-morning-brief.md` — SoftBank €75B / 5GW France = sovereign AI training infra at the gigawatt tier
- `signals/cross-source-log/2026-05-31-nvda-n1x-n1-laptop-chip-dissection.md` — Blackwell silicon at consumer PC tier (different segment but same architecture)
- `companies/SNDK/thesis.md` — NAND for inference/training state thesis
- `companies/HYNIX/thesis.md` — HBM binding constraint thesis
- `companies/TE/thesis.md` — Supply Chain Inheritance / power thesis
- `companies/ARM/thesis.md` — CPU substrate at every tier
- `companies/DDOG/thesis.md` — fleet observability
- `companies/MURATA/thesis.md` — MLCC universal
- `wiki/agentic-workload-scaling.md` — token-flow context
- `predictions/inference-log.md` Entry #4 — software resilience to capex compression
- `meta/methodology.md` Principle #35 candidate — top-down structural theme first (this fact-check is N=1 prospective application)
