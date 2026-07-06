# Causal Map — Agentic AI Scales

**Last updated:** 2026-05-20
**Trigger event:** Enterprise adoption of agentic AI moves from pilot to production scale (started Nov 2025)

## TL;DR

If agentic AI continues to scale through 2026–2027, the entire compute stack rebalances. The investable insight is not "buy NVDA more" but "find which 3rd-and-4th-order names get re-priced as the implications cascade." This map walks 4 hops out.

## 1st order — direct consequences (P > 80%)

- **Token consumption per user-task grows 50–500×** as agents make many tool calls per workflow
- **Inference workloads dominate over training** in compute mix (was ~30/70 inference/training; trending toward 70/30 or higher)
- **Sustained workloads replace bursty ones** — datacenters run hotter, longer, at higher avg utilization
- **Long-context + persistent state becomes mandatory** — memory bandwidth and capacity demands rise
- **Reliability and observability requirements explode** — a 95% accurate model fails 1-in-20 calls, unacceptable in a 100-call agent workflow

**Direct beneficiaries (P>80%):** NVDA (inference silicon still leader), AMD (MI series inference), token-priced infra (hyperscalers)

## 2nd order — knock-on effects (P ~60%)

### CPU rebalance
- Agentic workloads have heavy host-side work: tool dispatch, state management, orchestration
- GPU:CPU ratio shifts from training-era ~1:8 toward ~1:4 or ~1:2 for agent-heavy clusters
- AMD EPYC + ARM (Graviton, Cobalt, future custom) socket counts grow
- **Beneficiaries:** AMD (EPYC), ARM, Graviton-equivalents at hyperscalers

### Memory bandwidth strain
- Long-context inference requires more HBM per GPU + more host DRAM
- HBM4 ramp accelerated; HBM3E pricing power persists
- Premium DDR5 + custom DRAM get demand lift
- **Beneficiaries:** MU, SK Hynix, Samsung memory

### Networking burden rises (east-west traffic from tool calls)
- Tool calls hit external APIs + internal microservices
- Cluster-internal RAG retrieval + state syncing grows
- Ethernet bandwidth per GPU rises; CPO becomes near-mandatory at scale
- **Beneficiaries:** ANET, MRVL, NVDA Spectrum-X attach rate

### Observability / eval becomes mandatory enterprise spend
- Can't deploy agents without tracking what they do, why they failed, how to improve
- A whole new layer of "AI observability" tooling becomes a budget line
- **Beneficiaries:** DDOG, custom eval providers, BSY, possibly CRWD

## 3rd order — plausible further effects (P ~40%)

### Power siting becomes the binding constraint
- Sustained high-utilization datacenters need firm power, not just capacity
- Existing grid interconnect queues are 2–7 years; new datacenter sites without firm power can't deploy
- Nuclear + gas-firm-power assets re-price up
- **Beneficiaries:** VST, CEG, TLN, GEV, ETN
- **Casualties:** AI plays in regions without firm power (parts of EU, water-constrained regions)

### Hyperscaler dependence on NVDA partially offset by custom silicon scaling
- Inference (which is more cost-sensitive than training) becomes the natural home for TPU/Trainium/Maia/MTIA
- These custom chips were small. They scale specifically because agentic inference is the workload they target.
- **Beneficiaries:** AVGO (custom Si partner), MRVL, GOOG (TPU)
- **Casualties:** NVDA margin compression if mix shifts (but volume still grows)

### Enterprise software re-prices on AI revenue capture
- Companies that can layer agentic capabilities on top of sticky workflows win
- Pure "wrap an API" plays get commoditized; sticky-data-platform plays win
- **Beneficiaries:** PLTR, MSFT (Copilot), GOOG (Workspace AI), MDB, SNOW
- **Casualties:** generic SaaS without data moat

### Specialized inference clouds get squeezed or thrive
- If NVDA-rental model holds, CoreWeave-type plays do well
- If custom silicon scales, NVDA-only clouds get commoditized
- **Mixed:** CoreWeave-equivalents

## 4th order — speculative tail consequences (P ~20%)

### Optical interconnect / CPO becomes mandatory
- At cluster scale + east-west traffic + agentic workloads, copper SerDes can't keep up
- CPO adoption accelerates from "future tech" to "shipping product" by 2027
- **Beneficiaries:** MRVL, COHR, LITE, ANET, possibly NVDA via Spectrum-X CPO

### Edge inference becomes a thing
- Latency-sensitive agentic workloads (robotics, AR, real-time control) push inference toward edge
- Specialized edge silicon (Apple Silicon, ARM-based, custom NPUs) gain
- **Beneficiaries:** ARM, possibly QCOM, NXP for industrial

### Agentic capability commoditizes; the moat shifts to integration + workflow
- Model providers compete to zero; agent platforms with workflow integrations win
- Vertical AI plays (PLTR for gov, Veeva for pharma, etc.) get re-rated
- **Beneficiaries:** vertical SaaS with sticky data + workflows

### Regulatory backlash on agentic deployments
- Agents making real decisions = real liability
- Regulations on agentic AI deployments in finance, healthcare, public sector
- **Casualties:** unregulated AI-native plays; **beneficiaries:** compliance + audit infra

## Names whose exposure changed because of this cascade

Updated reverse-index to `companies/{TICKER}/exposures.md`:

| Ticker | Order | Direction | Reasoning |
|---|---|---|---|
| NVDA | 1st (W) + 3rd (mixed) | Mixed | Wins on volume, may lose pricing power |
| AMD | 2nd (W) | Bull | EPYC CPU + MI inference both benefit |
| AVGO | 3rd (W) | Bull | Custom silicon scaling for hyperscalers |
| MRVL | 2nd + 4th (W) | Bull | Networking + CPO + custom Si all benefit |
| ANET | 2nd + 4th (W) | Bull | Networking-of-AI thesis core |
| MU | 2nd (W) | Bull | Memory bandwidth strain → HBM + premium DDR |
| VST/CEG/TLN | 3rd (W) | Bull | Power binds as sustained workloads grow |
| DDOG | 2nd (W) | Bull | Observability is mandatory in agentic era |
| CRWD | 2nd (W) | Mixed | Security spend non-discretionary but not specific to agent |
| GEV/ETN | 3rd (W) | Bull | Electrical + firm power infra |
| GOOG | 3rd (W) | Bull | TPU optionality for inference cost advantage |
| AMZN | 3rd (W) | Bull | Trainium + AWS scale + retail-side ROI from agents |
| MSFT | 3rd (W) | Bull | Copilot + Azure agentic |
| PLTR | 3rd (W) | Bull | Vertical-native AI architecture |
| SMCI/DELL/HPE | 1st (W) | Bull | More systems sold |

## Signals to watch (this map is correct if these fire)

1. Enterprise earnings citing agentic productivity gains >5%
2. AMD EPYC datacenter share gains (already happening — confirms T1)
3. ANET reported AI back-end revenue >$2B/quarter
4. New nuclear restarts (CEG-style Three Mile Island repeats)
5. CPO product GA at major networking vendor
6. Hyperscaler custom-silicon revenue >$10B annualized

## Signals that would invalidate this map

1. Hyperscaler capex pauses (S4 plays) — see `scenarios.md` for S4 trigger conditions
2. Agentic AI hits a quality ceiling — adoption stalls, deployments unwind
3. Major regulatory event makes agent deployment infeasible in core enterprise markets
