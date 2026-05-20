# Token Consumption — Where, Why, and What It Means for the Stack

**Last updated:** 2026-05-20
**Type:** Reference primer. Read for context before reasoning about inference-layer or AI-infrastructure investments.

## TL;DR

Per-token prices have collapsed (~280x cheaper in 2 years per Oplexa) but enterprise AI bills are up 320% (per Indexnine) — the **inference cost paradox**. Two reasons: agentic workflows consume 10–20x more tokens per task vs chat, and coding has emerged as the dominant use case (>50% of all LLM tokens per OpenRouter data per Iternal). The combined effect: aggregate token volume growing massively faster than per-unit price decline. This is bullish for memory bandwidth, networking, observability, and inference-tuned silicon — and explains why hyperscaler capex re-rated +77% in 2026.

---

## Headline volume + growth numbers

- **OpenAI API: >15B tokens/minute, >21T tokens/day** ([CNBC](https://www.cnbc.com/2026/04/17/ai-tokens-anthropic-openai-nvidia.html))
- **OpenAI dominates consumer; Anthropic dominates enterprise** — Anthropic adoption rose to 34.4% of businesses (April 2026) vs OpenAI 32.3% (per Barclays, [Seeking Alpha](https://seekingalpha.com/news/4505254-openai-dominating-consumer-ai-token-consumption-anthropic-wins-enterprise-barclays))
- **AI spending on Ramp's customer base grew 13x past year** ([CNBC, same article](https://www.cnbc.com/2026/04/17/ai-tokens-anthropic-openai-nvidia.html))
- **Anthropic $1M+ Claude customers**: doubled from 500+ to 1000+ in under 2 months as of April 2026 (per CNBC, same article)
- **Average enterprise AI budget**: $1.2M (2024) → $7M (2026) — a ~5.8x increase ([Indexnine](https://indexnine.com/insights/blogs/the-token-cost-illusion-why-your-ai-bill-is-growing-while-the-price-is-falling))

## The inference cost paradox (the key insight)

**Per-token prices have collapsed:**
- AI token costs dropped 280x in two years ([Oplexa](https://oplexa.com/ai-inference-cost-crisis-2026/))
- GPT-4-equivalent performance now costs $0.40/M tokens vs $20 in late 2022 (Oplexa, same)
- DeepInfra reduced cost from 20¢/M tokens (Hopper) to 10¢/M (Blackwell) to 5¢/M (Blackwell NVFP4 format) ([NVIDIA blog](https://blogs.nvidia.com/blog/inference-open-source-models-blackwell-reduce-cost-per-token/))
- Gartner forecasts further 90% cost reduction by 2030 (per Indexnine, cited above)

**But aggregate spend is rising:**
- Enterprise AI bills up 320% despite per-token price collapse (Indexnine)
- Why: agentic workflows make 10–20 LLM calls per user task (Indexnine)
- A single SWE-bench-style agentic coding task: 1–3.5M tokens including retries ([OpenReview paper](https://openreview.net/forum?id=1bUeVB3fov))
- Customer support agent: 4,000–6,000 tokens per interaction before any response generated (system prompt + retrieved context per [Redis](https://redis.io/blog/llm-token-optimization-speed-up-apps/))

**The math:** if per-token cost falls 5x but tokens-per-task grow 15x, total cost rises 3x. That's where we are.

## Where token consumption is happening — by use case

Per [Iternal](https://iternal.ai/token-usage-guide) and [Morph](https://www.morphllm.com/ai-coding-costs):

| Use case | Share of LLM tokens | Notes |
|---|---|---|
| **Coding agents** | >50% (up from 11% in mid-2025) | OpenRouter data per Iternal; dominant use case |
| **Customer service / RAG agents** | Growing but smaller share | 4–6K tokens per interaction |
| **Search / RAG knowledge bases** | Mid-share | Quality degrades beyond ~2,500 tokens of context per Jan 2026 analysis |
| **Content generation** | Declining share relative | Was majority of GPT-3 era; now smaller portion |
| **Scientific / research workflows** | Small but specialized | Long-context, high-value per token |

**Coding is the killer use case.** One developer's 8 months of daily Claude Code consumed 10B tokens ≈ $15K at Sonnet API rates (per Morph). At enterprise scale: Cursor (the leading coding agent) went from $100M ARR (Jan 2025) → $2B ARR (Feb 2026), forecast $6B by end-2026 ([tech-insider](https://tech-insider.org/cursor-60-billion-valuation-anysphere-ai-coding-2026/)). That's not anomalous — that's *typical* of where token consumption is moving.

## Why coding is consuming so much

1. **Agentic loops compound tokens.** A single feature request triggers: plan → read N files (context) → write code → run tests → debug → iterate. Each cycle is ~50K–200K tokens, and complex tasks run 10–20 cycles.
2. **Code requires precision.** Hallucination tolerance is low; agents re-verify, fact-check, retest. Each verification step is more tokens.
3. **Enterprise rollout is happening NOW.** 70% of Fortune 1000 use Cursor as of April 2026 ([per Panto AI](https://www.getpanto.ai/blog/cursor-ai-statistics)). That's enterprise software's fastest adoption curve in recent memory.
4. **Coding has measurable ROI.** Time saved is directly priced. Other agentic use cases struggle to attribute ROI; coding doesn't.

## Why the volume keeps growing despite price decline (4 structural drivers)

1. **Agentic shift** — chat = 1 LLM call; agent = 10–20 calls per task
2. **Quality requirement** — production deployments need redundant verification, evaluation, observability calls
3. **Context window inflation** — system prompts grow, RAG context grows, longer documents
4. **New use cases unlocked by lower price** — applications that weren't economically viable at $20/M tokens become viable at $0.40/M

These four are independent multipliers. Composed, they explain the +320% bill growth.

## What this means for the portfolio / value chain

### Direct beneficiaries of token volume growth
- **Memory bandwidth providers (SK Hynix, MU, Samsung)** — every inference call needs HBM. More tokens = more HBM consumption. Held position confirmed.
- **Inference-tuned silicon (NVDA Blackwell/Rubin, AMD MI series, AVGO custom)** — units demand grows with token volume
- **Observability (DDOG, Arize, others)** — every agentic call is a span to monitor. Held position confirmed.
- **Networking (ANET, MRVL)** — east-west traffic from tool calls scales with token volume

### Beneficiaries of agentic SPECIFICALLY (vs just chat)
- **State / memory infrastructure (MDB, Redis, vector DB)** — agents need persistent state
- **Workflow software (NOW, possibly PLTR, SAP)** — agents need workflows to operate within
- **CPU + DRAM (AMD EPYC, ARM)** — orchestration overhead is host-side

### Names to question if token deflation accelerates
- **Model providers (OpenAI, Anthropic)** — if commodity pricing wins, gross margin compresses. Their answer: serve enterprise (Anthropic's strategy), build agent platforms (OpenAI's strategy)

## Open questions to watch

1. **Does coding adoption saturate?** Once 70% of Fortune 1000 use Cursor or equivalent, growth comes from intensity (more tasks per developer) and new categories. Both are real but might decelerate.
2. **Does enterprise agentic adoption follow the coding curve, or stall like Klarna?** See `wiki/agentic-ai-enterprise.md`.
3. **Is the 88% pilot-failure rate going to compress aggregate enterprise spend?** Or does the 12% success rate compound enough to keep the curve up-and-to-the-right?
4. **Does open-source closing the capability gap commoditize the model layer?** This would accelerate price decline but might also accelerate volume.
5. **Does inference-at-the-edge (Apple Silicon, on-device LLM) re-route token volume off the cloud?** Watch Apple's M-series, Qualcomm Cobalt, NVDA's Jetson roadmap.

## Sources

- [Per-token economics — CNBC](https://www.cnbc.com/2026/04/17/ai-tokens-anthropic-openai-nvidia.html)
- [Token usage guide — Iternal](https://iternal.ai/token-usage-guide)
- [Token cost illusion — Indexnine](https://indexnine.com/insights/blogs/the-token-cost-illusion-why-your-ai-bill-is-growing-while-the-price-is-falling)
- [Inference cost crisis — Oplexa](https://oplexa.com/ai-inference-cost-crisis-2026/)
- [NVIDIA inference cost reduction blog](https://blogs.nvidia.com/blog/inference-open-source-models-blackwell-reduce-cost-per-token/)
- [Coding token economics — OpenReview](https://openreview.net/forum?id=1bUeVB3fov)
- [LLM token optimization — Redis](https://redis.io/blog/llm-token-optimization-speed-up-apps/)
- [AI coding cost — Morph](https://www.morphllm.com/ai-coding-costs)
- [OpenAI vs Anthropic enterprise — Seeking Alpha](https://seekingalpha.com/news/4505254-openai-dominating-consumer-ai-token-consumption-anthropic-wins-enterprise-barclays)
- [Cursor enterprise adoption — tech-insider](https://tech-insider.org/cursor-60-billion-valuation-anysphere-ai-coding-2026/)
- [Cursor statistics — Panto AI](https://www.getpanto.ai/blog/cursor-ai-statistics)
