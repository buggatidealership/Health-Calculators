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
| `robotics-primer.md` | Robotics + AI worldview: 12-layer stack, deployment-by-sector framework, cross-sector picks-and-shovels (Harmonic Drive 6324.T, Nidec 6594.T, NVDA, STM, Murata, AXT), 10 extrapolations (E1-E10) including reshuffle thesis on industrial-robotics incumbents (FANUY/ABB/KUKA/YASKY), 12 blind spots beyond user-flagged focus areas. Phase 1 seed → Phase 2 verified → Phase 3+ holistic. Empirical numbers across 27+ web searches (IFR primary, market research aggregators, supplier company announcements, ISRG SEC 8-K, NVIDIA developer + IR, etc.) | Phase 3+ holistic (2026-05-24); becomes ONE sub-domain within Physical AI umbrella per `physical-ai-primer.md` |
| `physical-ai-primer.md` | Physical AI umbrella per Jensen NVDA framing — subsumes robotics + autonomous vehicles + industrial automation + digital twins + AI-RAN + edge devices. L1-L4 verified across ~15 web searches. **Universal cross-sub-domain suppliers identified**: Sony Semiconductor (CIS 43-64% global share = vision), Murata (40% MLCC + auto 30% revenue), STM (NXP MEMS acquisition Feb 2026), NVDA (6/6 universal champion), TE Connectivity ($17.3B FY25) + Amphenol ($6.19B Q3 +53.4% YoY) = connectors, Bentley Systems (digital twin). Validates user's Murata+STM multi-vector intuition with hard data. Sub-domain growth ranking: industrial robots within Physical AI 56.7% CAGR; healthcare 39.4%; total Physical AI 32-47%; AVs 25% CAGR ($203B 2025 → $2,208B 2036) largest absolute pool | Phase 1+2 verified (2026-05-25) |
| `model-economics-primer.md` | LLM inference economics under the test-time-compute scaling regime. **Verified token pricing rates** (o3 $15/$60, Claude Opus 4.7 $5/$25, Gemini 3.1 Pro $2/$12 per M tokens) + **critical 3-5x invisible reasoning-token multiplier**. **Per-segment cost ranking**: chat $0.001-0.05/query → agentic coder $0.25-25/task → agentic enterprise $0.50-100/workflow → deep reasoning $1K-1M+ per problem. **MYTHOS economics worked example**: ~$375K compute spend generated $50M-$1B+ cybersecurity value (~100x-2,000x ROI estimate). **L4 1999-fiber-buildout counter-analog stress-tested**: 2026 AI capex 1.28% of GDP EXCEEDS 1999 telecom peak BUT financing is fundamentally different (cash-funded by trillion-dollar tech vs leveraged-debt telcos that bankrupted; debt/equity 0.23 for AMZN/GOOG/MSFT/META). Cisco-1999 analog warns of MULTIPLE COMPRESSION risk for suppliers (separate from bankruptcy risk). HYNIX <7x forward P/E inherently less exposed to Cisco-analog scenario | Phase 1+2 verified (2026-05-25) |
| `advanced-packaging-primer.md` | Advanced packaging layer = the AI bottleneck through 2027. **TSMC CoWoS sold out through 2027** with 50+ week lead times; quadrupling 33K → 130K wpm by late 2026. **BESI (hybrid bonding leader)** <10nm precision moat, €476M projected hybrid bonding revenue 2026 (~1/3 total), Q4 backlog +105% YoY, AMAT partnership on Kynex. **ASMPT (TCB market leader)** 35-40% share target, 2025 TCB revenue +146% YoY, 500+ deployed systems, 12-Hi HBM4 orders + 16-Hi HBM4 dev. **ASML entering hybrid bonding** (March 2026) — disruptive 5-7yr threat. **Intel EMIB bypass route** verified — SK Hynix turning to it. SK Hynix US packaging plant $3.9B for sovereign diversification. 10 extrapolation patterns surfaced. BESI + ASMPT candidate stubs created — complementary positioning (BESI = next-gen hybrid bonding, ASMPT = current-gen TCB), not directly competing | Phase 1+2 verified (2026-05-25) |

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
