# Wiki — Foundational Context for AI-Sector Reasoning

**Last updated:** 2026-05-20
**Purpose:** Reference primers that build holistic context for investment analysis. Not company-specific, not state-of-current-market — durable knowledge that future analyses pull from.

## How to use this wiki

Read the relevant entry BEFORE building a thesis on a name in that part of the value chain. The wiki gives you (and future Claude sessions) the substrate to recognize patterns, name common failure modes, and ground reasoning in evidence rather than narrative.

Every claim cited inline. Anti-fabrication hook applies.

## Current entries

| File | Topic | Status |
|---|---|---|
| `token-consumption.md` | Where token volume is growing, why, and the inference cost paradox | Complete (2026-05-20) |
| `agentic-ai-enterprise.md` | What's working, what's failing in enterprise agentic AI; patterns of 88% failures vs 12% breakthroughs | Complete (2026-05-20) |
| `hbm-primer.md` | HBM supply-demand-bypass analysis. Three suppliers sold out 2026, demand +77% YoY, bypass routes (CXL/ALAB, MoE, HBM4E) won't materially relieve before 2027 | Complete (2026-05-20) |
| `agentic-workload-scaling.md` | Bottoms-up demand-side anchor: MAU × tasks/user × tokens/task. Central estimate ~210T tokens/month from agentic workloads today, growing ~12× over 12mo and ~70× over 24mo. Identifies gap vs TrendForce HBM consensus | Complete (2026-05-21) |
| `power-for-ai-primer.md` | Power supply-demand-bypass analysis. Demand 75.8 GW (2026) → 134 GW (2030); supply 2-3 GW/yr vs demand 5-7 GW/yr = structural deficit. Interconnect queues 36-48mo. Transformer + gas turbine backlogs multi-year. Validates Aschenbrenner long-power thesis | Complete (2026-05-21) |
| `optical-interconnect-primer.md` | Fiber/pluggable → CPO transition (2026-2030). InP substrate supply deficit >70% (600-700K wafers shipped vs 1.5-2M demand). AXTI controls 60-70% global InP. NVDA invested $2B in LITE+COHR. Resolves GLW-Aschenbrenner conflict more deeply (CPO is medium-term risk to fiber TAM) | Complete (2026-05-21) |
| `custom-silicon-primer.md` | TPU + Trainium + Maia + MTIA + OpenAI Titan. $185B 2026 capex absorbed by custom Si (~28% of DC capex). AVGO holds ~60% AI ASIC design partnership share; partners 4 of 5 major hyperscaler/frontier-model programs. NVDA inference share projected to compress 90%+→20-30% by 2028 | Complete (2026-05-21) |
| `robotics-primer.md` | Robotics + AI worldview: 12-layer stack, deployment-by-sector framework, cross-sector picks-and-shovels (Harmonic Drive 6324.T, Nidec 6594.T, NVDA, STM, Murata, AXT), 10 extrapolations (E1-E10) including reshuffle thesis on industrial-robotics incumbents (FANUY/ABB/KUKA/YASKY), 12 blind spots beyond user-flagged focus areas. Phase 1 seed — empirical numbers marked `[primary-source verification required]` for Phase 2 fill-in | Phase 1 complete (2026-05-24); empirical data ingest pending |

## Planned / candidate entries (in rough priority order)

| File | Topic | Why it matters |
|---|---|---|
| `hbm-primer.md` | What HBM is, how it's made, who makes it, supply dynamics | Directly supports SK Hynix position (12.5% of portfolio) and the memory thesis |
| `power-for-ai-primer.md` | How AI datacenters get power, lead times, the time-to-power constraint | Bypass-route thesis (Bloom, Solaris), validates T1 Energy position |
| `chip-stack-primer.md` | How silicon → packaging → memory → networking actually fits together | Foundational — applies to NVDA, AMD, AVGO, TSM, ASML, multiple positions |
| `hyperscaler-capex-primer.md` | How to read MSFT/GOOG/META/AMZN capex disclosures, what segments mean | Recurring quarterly catalyst, drives the entire AI demand model |
| `custom-silicon-primer.md` | TPU, Trainium, Maia, MTIA — what each does, who builds, economics | S2 scenario depends on this; AVGO + MRVL theses sit here |
| `optical-interconnect-primer.md` | What CPO is, why it matters, what changes when copper hits SerDes limits | Bottleneck-of-tomorrow; AXTI / AIXTRON / Corning theses sit here |
| `model-economics-primer.md` | Training vs inference cost structures, scaling laws state-of-art | Frames every "AI compute demand" debate |
| `memory-cycle-primer.md` | HBM, DRAM, NAND cycle dynamics, history of memory cycles | Sandisk + SK Hynix exposure require understanding cyclicality |
| `geopolitical-ai-primer.md` | US-China tech war, export controls, allowed/restricted lists | Recurring catalyst for NVDA, TSM, sovereign AI names |
| `networking-primer.md` | Ethernet vs InfiniBand vs NVLink vs proprietary fabrics | Networking thesis (ANET, MRVL) sits here |

## Update protocol

Add a new entry when:
1. A name in the portfolio (or watchlist) requires foundational context the wiki doesn't have
2. A theme repeatedly comes up in analyses (sovereign AI, power, optical) and deserves consolidated reference
3. A user request explicitly asks for context-building (like this one)

Each entry follows the same template:
- TL;DR (the most important takeaway)
- Headline data points (numerical, cited)
- The key insights / patterns
- What it means for the portfolio / value chain
- Open questions to watch
- Sources

When a wiki entry is referenced in a thesis or causal-map, link directly. The wiki is the foundation — everything else builds on it.

## Conventions

- Every numerical claim cited inline with a clickable source
- Use direct quotes when possible
- Entries should be ~1500–3000 words — substantial enough to be useful, not so long they become noise
- Last-updated date at top
- When a stat is older than 12 months and the topic is fast-moving, flag for refresh
