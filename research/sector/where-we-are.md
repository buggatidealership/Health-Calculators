# Where AI Is Today

**Last updated:** 2026-05-20
**Read this every session before any major analysis.**

## TL;DR

We are roughly 6 months into the **Agentic AI epoch** (started Nov 2025). The dominant compute pattern is shifting from one-shot inference to sustained loops with tool calls. This rebalances which companies win. The bottleneck is no longer training compute alone — it's the full stack required to run continuous, tool-using AI: inference silicon + CPUs + networking + memory bandwidth + power.

## Epoch map

| Epoch | Started | Dominant pattern | Compute shape | Winners then |
|---|---|---|---|---|
| **Pre-LLM** | <2022 | Narrow models, vision, recsys | Training-heavy, sporadic inference | Cloud GPUs as commodity |
| **ChatGPT moment** | Nov 2022 | Conversational AI | Training-dominant, one-shot inference | NVDA H100, hyperscaler training clusters |
| **Scaling laws era** | 2023–H1 2025 | Bigger frontier models, RLHF | Training >> inference | NVDA H100/H200, TSMC CoWoS, HBM3 |
| **Agentic AI** | Nov 2025–now | AI that *does things* | Inference + tool calls + sustained loops | TBD — re-pricing in progress |
| **(Next) Embodied / sovereign / inference-at-edge** | speculative | TBD | TBD | TBD |

## What changed in Nov 2025 (the agentic transition)

The "brain with a body" shift. Before: AI generates content when asked. After: AI executes multi-step workflows, calls APIs, manages state across long horizons.

Concrete shifts:
- **Token consumption per task explodes.** A single agent task may make 50–500 tool calls vs. 1 chat completion before.
- **Sustained workloads replace bursty ones.** Datacenters run hotter and longer for the same headcount-equivalent productivity.
- **Memory + state becomes a first-class compute primitive.** Long context, persistent files, retrieval are no longer optional.
- **Reliability matters as much as capability.** A 95% accurate agent that fails 1-in-20 calls is unusable in a 100-call workflow. Inference quality, eval infra, and observability become core spend.

## Cascading compute implications (the 2nd–4th order to watch)

These are the bets:

| Order | Implication | Who benefits | Who hurts |
|---|---|---|---|
| 1st | Inference volume grows much faster than training | Inference-tuned silicon (Blackwell GB300, MI series, custom ASICs), tokens-as-a-service | Pure-training narratives |
| 2nd | GPU:CPU ratio shifts (training was ~1:8 GPU-heavy, agentic could be 1:4 or 1:2) | x86/ARM CPUs (AMD EPYC, Graviton), CPU-side memory (DRAM) | GPU-only narratives |
| 3rd | Networking becomes binding (more east-west traffic from tool calls + retrieval) | Networking silicon (ANET, Marvell), optical interconnect, CPO | "GPU = everything" narratives |
| 4th | Power siting & cooling become 12–24 month bottlenecks | VST, CEG, GEV, ETN, liquid cooling vendors | Locations without firm power |
| 4th | Inference observability + eval infra becomes mandatory spend | DDOG, custom eval providers, security (CRWD) | Naive "wrap an API" plays |

## Where we are in the agentic adoption curve

Stage: **early enterprise pilots → first production deployments**

Signals supporting this read:
- OpenAI / Anthropic deploying on-prem agentic offerings to enterprise (consortium reporting Mar–May 2026)
- Hyperscaler capex re-rated +77% to $725B in 2026 (signals the spend is anticipatory of agentic, not just training)
- Agent-related SaaS revenue still small but growing q/q (PLTR, NOW, MDB seeing it in calls)

Signals that would mark the NEXT epoch transition:
- A major enterprise reports >5% of headcount-equivalent productivity from agents
- Agentic-revenue line items appear separately in hyperscaler reporting
- A regulatory event (EU AI Act enforcement, US executive action) reshapes deployment economics
- The first "model-agnostic agent" platform reaches scale (which would commoditize models, lift infrastructure)

## What this means for the portfolio (high-level)

1. **Lean toward the broader stack, not just GPUs.** The GPU trade is 2/3 played out as the obvious move; the full-stack trade is where the next 18 months sit.
2. **Bet on anti-fragile names.** Picks-and-shovels that win whether NVDA / Google TPU / custom ASIC dominates.
3. **Stalk the next bottleneck.** Power siting and networking are leading candidates for the 2026 H2 — 2027 H1 pinch.
4. **Watch for the agentic-adoption signal** — when it appears in enterprise software KPIs (PLTR, SNOW, NOW, MDB), the SaaS-via-AI trade gets re-priced.

## Sources for the epoch read

- NVIDIA Q4 FY26 CFO commentary (datacenter mix shift signals)
- Hyperscaler Q1 2026 capex prints (MSFT, GOOG, META, AMZN)
- Anthropic / OpenAI enterprise consortium reporting
- AMD Q1 2026 print (CPU strength in datacenter as agent enabler)
