# VICR — Exposures (reverse-index)

**Last updated:** 2026-05-20

How VICR is positioned relative to every sector-level construct.

## Scenario exposures (from `research/sector/scenarios.md`)

| Scenario | Weight | VICR result | Reasoning |
|---|---|---|---|
| S1 NVDA dominant (35%) | | NEUTRAL | Lost H100; uncertain on Rubin |
| S2 Custom Si fragments (25%) | | POTENTIAL WIN | Depends on whether next-gen ASICs adopt VPD |
| S3 Power binds (22%) | | WIN | Efficient power delivery directly relevant |
| S4 Digestion (10%) | | LOSS | Capex pause hurts; high-multiple name |
| S5 Regulatory shock (8%) | | NEUTRAL | US-based fab, possibly relative beneficiary |

**Anti-fragility score: 2/5**

## Causal chain exposures (from `research/sector/causal-maps/`)

| Causal chain | VICR exposure order | Direction |
|---|---|---|
| `agentic-scales.md` | 3rd order | Indirect — more ASIC racks = more power delivery, but VPD wins only at the high-density end |
| `inference-takes-over.md` | 3rd order | Indirect — same logic |
| `power-becomes-binding.md` | 2nd order | Direct — efficiency wins under power constraints |
| `sovereign-ai-scales.md` | 3rd order | Indirect — sovereign datacenters need power delivery |

## Theme exposures (from `research/sector/themes.md`)

| Theme | VICR exposure |
|---|---|
| T1 Agentic compute rebalance | Neutral |
| T2 Power becomes binding | Partial win |
| T3 Networking displaces compute | Neutral |
| T4 Custom Si fragments | Conditional — depends on whether custom Si uses VPD |
| T5 Inference observability | Neutral |
| T6 Sovereign AI | Indirect positive |

## Bottleneck exposures (from `research/sector/bottlenecks.md`)

| Bottleneck | VICR position |
|---|---|
| HBM | None |
| CoWoS-L packaging | None |
| Power siting (current bottleneck) | Indirect benefit (efficiency narrative) |
| Liquid cooling | Adjacent (rack power + cooling are coupled) |
| Power conversion / electrical (the 12-24-month next bottleneck) | **Direct beneficiary** for highest-density needs |
| CPO / optical | None |

## Competitive position

VICR's primary competition is Monolithic Power Systems (MPWR). MPS has structurally won the current generation (H100, top-2 hyperscaler 48V-12V DCM). VICR's bet is the next generation (2nd gen VPD at >3 A/mm² density requirement).

Pair-trade consideration: long VICR / short MPWR has theoretical merit IF the next-gen design wins go VICR's way. But MPS is a larger, more diversified business — the pair trade is asymmetric in the wrong direction unless the binary outcome is high-confidence.

## Supply chain dependencies

VICR's upstream:
- US-based ChiP fab (Andover, MA) — no foundry dependency
- Materials suppliers (relatively undifferentiated)
- Lower foundry / packaging dependence than most chip names

VICR's downstream:
- AI accelerator customers (NVDA, AMD, Google, AMZN, others)
- Defense / aerospace (lumpy but durable)
- Industrial / ATE (steady)
- IP licensees (recurring revenue base)

## Watch-for-cross-impacts

When the following events happen, update VICR's interpretation:
- MPWR earnings call commentary on AI design wins
- NVDA Rubin power architecture disclosure
- AMD MI400 power architecture disclosure
- Any hyperscaler custom Si project that discloses power supplier
- Vicor management public disclosure of 2nd gen VPD lead customer
- VPD competitor announcements (especially MPS density roadmap)
- ADI integration of Empower Semiconductor (new competitor strengthening)
