# Custom Silicon Primer — TPU, Trainium, Maia, MTIA, and the AVGO/MRVL Ecosystem

**Last updated:** 2026-05-21
**Type:** Reference primer. The hyperscaler-in-house silicon race is the S2 scenario from `sector/scenarios.md` (30% weight, latest reweight 2026-05-20). Read before reasoning about AVGO, MRVL, NVDA pricing power, or any hyperscaler-related thesis.
**Methodology:** Bottoms-up build from primary sources before consensus comparison (per L1).

---

## TL;DR

Hyperscaler custom silicon is in inflection in 2026. Per [Introl](https://introl.com/blog/custom-silicon-inflection-2026-hyperscaler-asics-nvidia-gpu) and [Hashrate Index](https://hashrateindex.com/blog/hyperscaler-ai-asic-market-report-part-1/): custom ASICs (Google TPU v7, AWS Trainium 3, Microsoft Maia 200, Meta MTIA) grow at ~44.6% CAGR; $185B in 2026 hyperscaler capex absorbed by custom silicon (~28% of total DC capex). NVIDIA share at 80-85% in 2026 (down from ~92% in 2023 per same sources), with inference share projected to compress to 20-30% by 2028 per Oplexa.

**The most-overlooked detail in the entire AI value chain:** **Broadcom (AVGO) holds approximately 60% of AI server compute ASIC design partnership market share** per [Introl](https://introl.com/blog/custom-silicon-inflection-2026-hyperscaler-asics-nvidia-gpu). AVGO is the design partner for Google TPU, Meta MTIA, Microsoft Maia, and OpenAI's Titan program. **Three of the top four frontier model providers (Google, Meta, OpenAI) plus Microsoft route their custom silicon through AVGO.**

This validates the S2 (custom Si fragments) scenario decisively. The Aschenbrenner positioning (long power infra, short chip names — per `signals/events/2026-05-21-aschenbrenner-q1-13f.md`) is partially based on this dynamic: if custom silicon takes 20-30% of inference, NVDA pricing power compresses even with continued revenue growth.

**For OS implications:** AVGO P1 thesis (already queued) becomes the highest-leverage S2-scenario play. MRVL emerges as the secondary play (Google in talks with MRVL alongside AVGO TPU per [The Next Web](https://thenextweb.com/news/google-marvell-ai-chips-inference-tpu-broadcom)). TSMC remains the deepest beneficiary (~92% of advanced AI chips per Introl) regardless of which hyperscaler's design wins.

---

## Why this matters

Custom silicon is the S2 scenario from `sector/scenarios.md` (30% weight). The S2 question is no longer "will hyperscalers build their own?" — they ARE building their own at scale. The question is now: "how fast does custom silicon take share from NVDA, and which downstream partners benefit?"

Cross-references this primer informs:
- AVGO thesis (P1 — Anthropic-Broadcom partnership confirmed; custom Si is the broader pattern)
- MRVL thesis (watchlist — multi-theme custom Si + networking + memory)
- AMZN thesis (P1 — Trainium economics)
- GOOG thesis (P2 — TPU)
- NVDA pricing-power risk (existing thesis at `companies/NVDA/`)
- `wiki/hbm-primer.md` — custom Si chips all consume HBM
- `wiki/optical-interconnect-primer.md` — custom Si chips drive CPO adoption
- `sector/causal-maps/inference-takes-over.md` — S2 mechanism
- `sector/themes.md` T4 (custom Si fragments)

---

## Definitions

**ASIC** = Application-Specific Integrated Circuit. Designed for a specific workload (e.g., transformer inference) rather than general-purpose computing.

**Custom silicon** = ASIC designed by or for a specific end-user (hyperscaler), typically via partnership with a design house (AVGO, MRVL).

**TPU** = Tensor Processing Unit. Google's custom AI chip family. Latest: Ironwood (TPU v7), with v8t (training) + v8i (inference) variants per Google Cloud Next 2026 (per `wiki/agentic-ai-enterprise.md`).

**Trainium** = AWS custom AI training/inference chip. Latest: Trainium 3 (12-Hi HBM3E, 144 GB per chip, 4.9 TB/s per `wiki/hbm-primer.md`).

**Maia** = Microsoft's custom AI chip family. Latest: Maia 200.

**MTIA** = Meta Training and Inference Accelerator. Meta's custom ASIC for in-house workloads (ranking, ads, recommendation).

**OpenAI Titan** = OpenAI's announced custom silicon program. AVGO design partner per Introl.

**TCO (Total Cost of Ownership)** = full cost per inference / training-token over chip lifetime, including hardware + power + cooling + maintenance.

---

## The market — sizing the custom silicon shift

### Headline numbers

Per [Introl](https://introl.com/blog/custom-silicon-inflection-2026-hyperscaler-asics-nvidia-gpu):
- $185B in 2026 hyperscaler capex absorbed by custom silicon
- ~28% of total data center capex
- Custom ASIC market growing at 44.6% CAGR
- 44.6% CAGR implies ~3.5× growth over 5 years from current base

Per [Hashrate Index](https://hashrateindex.com/blog/hyperscaler-ai-asic-market-report-part-1/):
- $604B total market shift implied across TPU + Trainium + Maia + MTIA over the analyzed window

Per [Oplexa](https://oplexa.com/custom-asic-market-2026-hyperscalers-ditching-nvidia/):
- NVIDIA's inference market share projected to fall from 90%+ to 20-30% by 2028
- Custom silicon to capture 15-25% market share, primarily internal hyperscaler inference workloads

Per [CNBC](https://www.cnbc.com/2025/11/21/nvidia-gpus-google-tpus-aws-trainium-comparing-the-top-ai-chips.html):
- NVIDIA share 80-85% of data center AI accelerators by revenue 2026
- Down from ~92% in 2023

### The TCO advantage driving adoption

Per Introl: hyperscalers building custom chips that "offer 40-65% TCO advantages over GPUs" for specific workloads.

This is the economic engine of the S2 scenario. Even if a custom chip is "only" 60% as performant as NVDA for general workloads, if it's 50% cheaper for the hyperscaler's SPECIFIC workload (ranking inference, embedding generation, etc.), the unit economics flip in favor of custom Si.

### Why hyperscalers ARE NOT exiting NVDA entirely

Per CNBC + Introl analysis:
- NVDA still dominant on TRAINING (most flexible, broadest software ecosystem)
- NVDA still dominant on the most-demanding inference (frontier model serving)
- Custom Si captures the "long tail" of internal workloads where the cost arbitrage works

Hyperscalers are RUNNING BOTH simultaneously. NVDA's absolute revenue grows even as share declines.

---

## The four hyperscaler programs — bottoms-up

### Google TPU (v7 Ironwood, v8t/v8i variants per Google Cloud Next 2026)

Per [tech-insider analysis](https://tech-insider.org/google-tpu-8t-8i-broadcom-mediatek-nvidia-2026/):
- TPU v7 Ironwood: launched 2025-2026 series
- TPU 8t: training-optimized
- TPU 8i: inference-optimized (NEW for 2026 — first bifurcation in TPU line)
- Per [Introl](https://introl.com/blog/custom-silicon-inflection-2026-hyperscaler-asics-nvidia-gpu): "Google leads on every dimension that matters — maturity, software stack, deployment scale, external customer count"

Google's TPU is the most mature custom silicon program. Used internally for Search + Gemini + ads. Also sold as TPU rentals to Anthropic + external customers via Google Cloud.

**Design partner:** AVGO (Broadcom). Recent: also exploring MRVL for inference per [The Next Web](https://thenextweb.com/news/google-marvell-ai-chips-inference-tpu-broadcom).

### AWS Trainium / Inferentia (Trainium 3 current)

Per `wiki/hbm-primer.md`:
- Trainium 3: 144 GB HBM3E per chip, 4.9 TB/s
- AWS custom silicon business: $20B+ annualized revenue, growing triple digits YoY (per `wiki/hbm-primer.md` citing Introl)
- OpenAI committed to ~2 GW of Trainium capacity (ramping 2027)

**Design partner:** MRVL (Marvell) primarily, AVGO partial.

Per [Introl](https://introl.com/blog/custom-silicon-inflection-2026-hyperscaler-asics-nvidia-gpu): "AWS leads on raw deployment volume of commercial chips" — Trainium has the broadest external customer count among custom Si.

### Microsoft Maia (Maia 200 current)

Per [Hashrate Index](https://hashrateindex.com/blog/hyperscaler-ai-asic-market-report-part-1/) and [Introl](https://introl.com/blog/custom-silicon-inflection-2026-hyperscaler-asics-nvidia-gpu):
- Maia 100 launched 2023; Maia 200 currently shipping
- Primarily for Azure internal inference workloads + Copilot infrastructure
- Less external availability than TPU / Trainium

**Design partner:** AVGO.

### Meta MTIA

Per Introl: deployed for Meta's internal ranking + ads + recommendation workloads. Less detail on external deployment plans.

**Design partner:** AVGO + MRVL.

### OpenAI Titan (new entry — 2026)

Per Introl: AVGO is design partner for OpenAI's "Titan program" custom chip — first OpenAI in-house silicon. Adds OpenAI to the AVGO custom silicon customer list.

This is significant because it means 5 of the top 5 most-important AI model providers / hyperscalers (Google, AWS, Microsoft, Meta, OpenAI) are all building custom silicon, and 4 of those 5 are AVGO partners.

---

## The supply chain — who benefits when custom silicon wins

```
TSMC (92% of advanced AI chips per Introl)
  ↓
AVGO / MRVL (custom design + IP + advanced packaging coordination)
  ↓
HBM suppliers (SK Hynix, Samsung, Micron — every custom chip needs HBM)
  ↓
CoWoS-L packaging (TSMC's capacity)
  ↓
Networking (custom Si chips need networking too — ANET, MRVL, CPO)
  ↓
Power + cooling (custom Si racks have similar power requirements)
```

### Tier 1 — Design partners (most direct beneficiaries)

| Name | Profile | Customer relationships |
|---|---|---|
| **AVGO (Broadcom)** | ~60% AI ASIC design partnership share per Introl | Google TPU + Meta MTIA + Microsoft Maia + OpenAI Titan |
| **MRVL (Marvell)** | Smaller share but growing | AWS Trainium + Meta MTIA + (Google inference talks) |

### Tier 2 — Foundry (deepest beneficiary)

| Name | Profile | Why |
|---|---|---|
| **TSMC (TSM)** | 92% of advanced AI chips at 7nm and below per Introl | Every chip routes through them |

### Tier 3 — HBM suppliers (uniformly bid)

Per `wiki/hbm-primer.md`:
- **SK Hynix** (held position): primary supplier, all 2026 sold out
- **Micron (MU)**: secondary, 2026 sold out
- **Samsung**: catching up on HBM4

### Tier 4 — Networking / interconnect (rises with chip count)

Per `wiki/optical-interconnect-primer.md`:
- **MRVL** (also Tier 1 — multi-theme)
- **AXTI** (InP substrate, held position)
- **Lumentum (LITE), Coherent (COHR)** (NVDA $2B investment)
- **Arista (ANET)** (cluster-scale fabric)

### Tier 5 — Power + cooling (same as NVDA buildout)

Per `wiki/power-for-ai-primer.md`: VST, CEG, GEV, ETN, VRT all benefit from custom Si racks the same as NVDA racks.

### Hyperscalers themselves (mixed)

- **Google (GOOG)**: gains from TCO arbitrage on internal workloads + sells TPU to external customers
- **AWS (AMZN)**: gains from Trainium TCO + external Trainium revenue (OpenAI 2 GW commit per `wiki/hbm-primer.md`)
- **Microsoft (MSFT)**: gains from internal Maia TCO; less external monetization
- **Meta (META)**: gains from MTIA internal TCO for ranking workloads
- **OpenAI**: gains long-term from Titan but is also a major NVDA customer

---

## The S2 scenario implications in detail

Per `sector/scenarios.md` S2 (Custom Si fragments, 30% weight):

### What S2 looks like at end-2027

- NVDA share: ~70-75% (down from ~85% today)
- Custom Si: ~20-25% (from ~10-15% today)
- Specialized inference chips (Groq, Cerebras, SambaNova — mostly private): ~5%
- NVDA absolute revenue still grows ~20-30% YoY, but multiple compresses

### Names that win in S2

1. **AVGO** — biggest direct beneficiary. 4 of 5 major custom Si programs are AVGO partners.
2. **MRVL** — secondary. Multi-theme (custom Si + networking + memory).
3. **TSM** — wins regardless because all chips go through them.
4. **SK Hynix / MU** — same reason (HBM for all chips).
5. **Hyperscalers (GOOG, AMZN, MSFT, META)** — capture TCO arbitrage.

### Names that lose pricing power in S2

1. **NVDA** — absolute revenue grows but margin compresses; multiple compresses faster.
2. **AMD MI series** — directly displaced by hyperscaler in-house silicon at the cost-sensitive end.

### Names with mixed exposure

1. **AXTI, LITE, COHR** — neutral; optical layer benefits regardless of which chip wins.
2. **VST, CEG, etc.** — neutral; power is consumed regardless.
3. **DDOG** — neutral; observability needed regardless.

---

## What this primer DISAGREES with consensus on

**Consensus position:** Custom silicon is real but NVDA dominance persists. AVGO is "an AI play" but secondary to NVDA. Hyperscaler in-house silicon serves internal workloads only.

**My read after this build:**

1. **AVGO is structurally MORE important than consensus implies.** ~60% AI ASIC design share + 4 of 5 major frontier-model-provider partnerships means AVGO is the second-most-important name in the AI chip stack after NVDA itself. Consensus treats AVGO as "an AI play"; the data says AVGO is "THE custom Si play."

2. **OpenAI Titan is the most under-reported development.** OpenAI building custom silicon (with AVGO) means EVEN the company that defined the modern AI era is moving to custom Si. This breaks the "NVDA is the only choice for frontier" framing.

3. **Custom Si penetration may happen FASTER than consensus.** TCO advantages of 40-65% per Introl + hyperscaler urgency (capacity-constrained narrative per `signals/triangulation.md`) = strong incentives to scale custom Si quickly. The 20-30% NVDA inference share by 2028 (Oplexa forecast) might be too conservative.

4. **The "GOOG TPU leadership" matters more than typical sell-side recognizes.** Per Introl, Google leads on "maturity, software stack, deployment scale, external customer count." If TPU becomes the de-facto second source (after NVDA) for external AI infrastructure, GOOG monetizes the TPU program directly — adds material upside to GOOG thesis.

---

## Falsifiers — what would break the custom silicon thesis

1. **NVDA Rubin / GB300 efficiency advantage proves to be larger than expected.** If Rubin delivers another generational efficiency leap, custom Si TCO advantage compresses; hyperscalers continue preferring NVDA.
2. **CUDA software lock-in re-asserts.** If new model architectures only run well on NVDA (rare but possible), custom Si is held back.
3. **Hyperscaler custom Si programs hit execution issues.** Yield, software stack, customer adoption — any of these could slow ramp. Microsoft Maia has had reported challenges.
4. **AI capex pause / S4 scenario plays.** Custom Si programs are sustainable but slow if total capex declines.
5. **TSMC packaging constraint affects custom Si MORE than NVDA.** If CoWoS allocations favor NVDA (higher willingness to pay), custom Si supply lags demand.

---

## Open questions

1. **Custom Si share trajectory** — 20-30% inference by 2028 is one forecast; could be 10-15% (slower) or 35-45% (faster). Determines S2 scenario weight.
2. **AVGO custom Si revenue mix** — what's the breakout by customer (Google vs Meta vs Microsoft vs OpenAI)?
3. **MRVL execution at Google** — if MRVL takes meaningful share of Google inference TPU, that's MRVL upside.
4. **OpenAI Titan timeline** — when does first commercial deployment happen?
5. **Anthropic-Broadcom specifics** — what chip is Anthropic using (per `signals/events/2026-05-21-aschenbrenner-q1-13f.md`)?

---

## How this primer connects to OS state

| Name | Connection | Position in OS |
|---|---|---|
| **AVGO** | The custom Si play; 4 of 5 hyperscaler partnerships | P1 thesis queued (next item) |
| **MRVL** | Multi-theme custom Si + networking + memory | Watchlist; thesis candidate |
| **GOOG** | TPU leader; expanding partnership with Anthropic | P2 thesis queued |
| **AMZN** | Trainium economics + AWS scale | P1 thesis queued |
| **MSFT, META** | Custom Si users; less direct (no held position user-side) | Watchlist |
| **NVDA** | Pricing power compresses but volume grows | Existing thesis at `companies/NVDA/`; GRADED |
| **TSMC** | Wins regardless | Watchlist; central to multiple chains |
| **SK Hynix** (held) | HBM for all custom Si | P1 thesis queued |

---

## Sources

### Market structure + share
- [Introl — Custom Silicon Inflection 2026](https://introl.com/blog/custom-silicon-inflection-2026-hyperscaler-asics-nvidia-gpu)
- [Hashrate Index — Hyperscaler AI ASIC Market](https://hashrateindex.com/blog/hyperscaler-ai-asic-market-report-part-1/)
- [Oplexa — Custom ASIC Market 2026](https://oplexa.com/custom-asic-market-2026-hyperscalers-ditching-nvidia/)
- [Presenc AI — AI Chip Market Share 2026](https://presenc.ai/research/ai-chip-market-share-2026)
- [MLQ.ai AI chips research](https://mlq.ai/research/ai-chips/)
- [Silicon Analysts — AI Data Center Value Chain](https://siliconanalysts.com/research/ai-data-center-value-chain)

### Individual programs
- [Google TPU 8t/8i — tech-insider](https://tech-insider.org/google-tpu-8t-8i-broadcom-mediatek-nvidia-2026/)
- [Google + Marvell inference talks — The Next Web](https://thenextweb.com/news/google-marvell-ai-chips-inference-tpu-broadcom)
- [CNBC — comparing top AI chips](https://www.cnbc.com/2025/11/21/nvidia-gpus-google-tpus-aws-trainium-comparing-the-top-ai-chips.html)
- [Hashrate Index — what is an AI ASIC](https://hashrateindex.com/blog/what-is-an-ai-asic-guide-ai-chips/)

### Cross-references in OS
- `research/wiki/hbm-primer.md` — every custom chip needs HBM
- `research/wiki/optical-interconnect-primer.md` — custom chips drive CPO
- `research/wiki/power-for-ai-primer.md` — power consumed regardless of chip choice
- `research/wiki/agentic-workload-scaling.md` — demand-side anchor
- `research/signals/events/2026-05-21-aschenbrenner-q1-13f.md` — Aschenbrenner short-chip / long-power thesis
- `research/sector/scenarios.md` — S2 currently 30% weight
- `research/sector/themes.md` — T4 (custom Si fragments)
