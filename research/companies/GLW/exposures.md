# Corning (GLW) — Exposures (reverse-index)

**Last updated:** 2026-05-21

How GLW is positioned relative to every sector-level construct.

## Scenario exposures (per `research/sector/scenarios.md`, latest reweight 2026-05-20)

| Scenario | Weight | GLW result | Reasoning |
|---|---|---|---|
| S1 NVDA dominant (33%) | | **WIN** | AI fiber demand sustains regardless of chip mix |
| S2 Custom Si fragments (30%) | | **WIN** | Fiber needed for any inference deployment |
| S3 Power binds (25%) | | MIXED | If power caps deployment, fiber demand growth slows |
| S4 Digestion (6%) | | LOSS | Customer concentration hurts in pause; high-multiple name |
| S5 Regulatory shock (6%) | | NEUTRAL | US-based manufacturing actually a relative beneficiary; CHIPS Act exposure |

**Anti-fragility score: 3/5** (wins in S1, S2; mixed in S3; loses in S4; neutral in S5).

## Causal chain exposures (per `research/sector/causal-maps/`)

| Causal chain | GLW exposure order | Direction |
|---|---|---|
| `agentic-scales.md` | 2nd order | Direct beneficiary (fiber driven by token volume + cluster scaling) |
| `inference-takes-over.md` | 2nd order | More inference deployments = more fiber |
| `power-becomes-binding.md` | 3rd order | Indirect — if power caps deployment, fiber demand growth slows |
| `sovereign-ai-scales.md` | 2nd order | Sovereign datacenters need fiber |

## Theme exposures (per `research/sector/themes.md`)

| Theme | GLW exposure |
|---|---|
| T1 Agentic compute rebalance | Positive (more east-west traffic = more fiber per cluster) |
| T2 Power becomes binding | Mixed |
| T3 Networking displaces compute | **WIN — this is the core thesis** |
| T4 Custom Si fragments | Positive (more chips → more clusters → more fiber) |
| T5 Inference observability | Neutral |
| T6 Sovereign AI | Positive |

## Bottleneck exposures (per `research/sector/bottlenecks.md`)

| Bottleneck | GLW position |
|---|---|
| HBM3E supply | Not exposed |
| CoWoS packaging | Not exposed |
| Firm power | Not exposed |
| Networking bandwidth at cluster scale | **DIRECT BENEFICIARY** — fiber is part of the solution |
| Liquid cooling | Not exposed |
| **CPO / optical interconnect transition** | **MIXED** — CPO at scale would compress fiber TAM growth; Corning ALSO researching hollow-core fiber as next-gen response |

## Token-Volume Filter exposure (per `research/meta/methodology.md`)

| Filter dimension | Result |
|---|---|
| Per-token volume up → revenue up? | YES for Optical Communications segment (37% of revenue); NO for the remaining 63% |
| Per-token cost direction agnostic? | YES — fiber sold per linear foot or per port, not per token |
| Operating leverage on incremental volume? | Modest — fiber manufacturing has scale economies but not extreme |
| Customer concentration? | Real risk — Meta $6B + 3 hyperscaler deals concentrated |

**Net filter result: PASSES with caveat that only ~37% of revenue passes cleanly.**

## Cross-name conflicts

### Direct competitive substitutes
- **Marvell (MRVL) silicon photonics** — could displace some Corning fiber if CPO scales
- **Coherent (COHR), Lumentum (LITE)** — optical components, complement fiber at the transceiver layer (not direct substitution)

### Pair-trade candidates
- Long GLW / Short COHR or LITE: if Corning's fiber + hyperscaler integration outperforms component-only competitors
- Long GLW + Long MRVL: covers both fiber AND silicon photonics ends of the optical transition

### Direct institutional opposition
- **Aschenbrenner (Situational Awareness LP) has puts on GLW** per `research/signals/events/2026-05-21-aschenbrenner-q1-13f.md`. Bull case (Corning) vs Bear case (Aschenbrenner) tension is on the multiple, not on AI fiber demand directly.

## Watch-for-cross-impacts

When the following events happen, update GLW's interpretation:
- Any hyperscaler announces CPO deployment at scale → fiber TAM compression risk
- Meta or other large customer renegotiates fiber contract → direct revenue exposure
- Springboard quarterly run-rate updates (target $40B by 2030)
- Insider transactions (45-0 ratio; another batch of sales matters)
- Q2 2026 Optical Communications growth print (<25% = falsifier #1 fires)
- COHR / LITE / MRVL earnings commentary on CPO-vs-fiber transition pace
- Aschenbrenner Q2 2026 13F (does he add to puts? close puts? signals timing)
