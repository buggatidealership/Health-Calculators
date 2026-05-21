# Elastic (ESTC) — Thesis (Compact)

**Last updated:** 2026-05-21
**Tier:** Active candidate (search + observability + vector DB; agentic workflow play)
**Position target:** 2–4% if entered (user holds 0%)
**Anti-fragility:** 3/5 — wins in S1, S2 cleanly; mixed elsewhere
**Foundation:** `research/wiki/agentic-ai-enterprise.md`, `research/wiki/agentic-workload-scaling.md`

## TL;DR

Elastic is the Elasticsearch + observability + vector database company well-positioned for **agentic AI workflows**. Q3 FY2026: revenue $450M (+18% YoY), subscription revenue $426M (+19% YoY), sales-led subscription $376M (+21% YoY) per [Q3 8-K via SEC](https://www.sec.gov/Archives/edgar/data/0001707753/000170775326000003/a26q3erex991.htm). Current remaining performance obligations $1.055B (+19% YoY).

**Key AI signal:** "Eight quarters ago, the bulk of AI use cases involved vector databases and semantic search... now customers are using agentic workflows around security workflows and observability workflows" per [Yahoo Finance Q3 highlights](https://finance.yahoo.com/news/elastic-nv-estc-q3-2026-050234644.html). 25% AI penetration in 100K+ customer cohort.

**Position recommendation:** 2-4% if entered. **Cleanest agentic-AI infrastructure play** among storage/data candidates. Search + observability + vector DB is the substrate agentic workflows run on. Pairs well with held DDOG (also observability).

## The business

Per [Q3 2026 Motley Fool transcript](https://www.fool.com/earnings/call-transcripts/2026/02/26/elastic-estc-q3-2026-earnings-call-transcript/):
- **Search** — open-source Elasticsearch + Enterprise Search products
- **Observability** — Elastic Observability competes with DDOG, Splunk
- **Security** — SIEM products
- **Vector database** — enabling semantic search + RAG + AI workflows

## Why this matters for AI

Per `research/wiki/agentic-ai-enterprise.md`: agentic workflows are the next breakthrough pattern (12% of pilots succeed). Per `research/wiki/agentic-workload-scaling.md`: workload grows ~70× over 24 months. Elastic's value prop is dual:

1. **Vector database for RAG** — every enterprise AI app needs retrieval; Elastic's strength in search makes vector adjacent
2. **Observability + security workflows benefit from AI agents** — anomaly detection, threat hunting via natural language

The shift from "vector DB + semantic search" (2 years ago) to "agentic security/observability workflows" (now) per their own call is the agentic AI maturity curve in real-time.

## Anti-fragility (per `research/sector/scenarios.md`)

| Scenario | Result | Reasoning |
|---|---|---|
| S1 NVDA dominant | WIN | More AI apps = more search/RAG |
| S2 Custom Si fragments | WIN | Same |
| S3 Power binds | NEUTRAL | Downstream of compute |
| S4 Digestion | LOSS | Enterprise software spending cyclical |
| S5 Regulatory | NEUTRAL | US-listed |

**Anti-fragility: 3/5**

## Token-Volume Filter
Per `meta/methodology.md`: ✓ PASS. RAG requests scale with token volume; vector index sizes grow.

## Falsifiers
1. Agentic AI pilot success rate stays low (most pilots fail per current 88% failure rate)
2. Competition from MongoDB Atlas Vector, Pinecone, Weaviate, Qdrant compresses pricing
3. DDOG bundles observability + vector capabilities, displaces Elastic
4. Open-source Elasticsearch erodes paid-tier growth

## Blind spots
- AI customer mix vs traditional search/observability
- Vector DB performance vs specialists (Pinecone, etc.)
- Open-source vs commercial license trajectory
- Specific agentic-workflow customer stories (named or aggregated?)
- Most important blind spot: the **DDOG overlap** — user holds DDOG; ESTC's observability segment is a peer-competitor

## Cross-references
- `research/wiki/agentic-ai-enterprise.md` — 88% pilot failure / 12% breakthrough patterns
- `research/wiki/agentic-workload-scaling.md` — workload demand math
- `research/companies/DDOG/thesis.md` — held position with overlap on observability
