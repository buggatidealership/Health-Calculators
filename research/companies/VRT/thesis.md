# Vertiv (VRT) — Thesis (Compact)

**Last updated:** 2026-05-21
**Tier:** Active candidate (pure-play datacenter power + cooling)
**Position target:** 2–4% if entered (user holds 0%)
**Anti-fragility:** 3.5/5 — wins in S1, S2, S3 strongly
**Foundation:** `research/wiki/power-for-ai-primer.md`

## TL;DR

Vertiv is the **purest-play datacenter power + cooling exposure** in the public market. Q1 2026: revenue $2.65B (+30%, +23% organic), Americas +44% organic, adjusted operating margin 20.8% (+430 bps) per [Q1 2026 8-K](https://www.sec.gov/Archives/edgar/data/0001674101/000162828026026379/q12026exhibit991vrt04222026.htm). **Backlog $12.45B (+80.8% YoY); project backlog >$15B = 12-18 months forward revenue** per [TechjackSolutions](https://techjacksolutions.com/ai-brief/vertiv-raises-2026-guidance-to-14b-as-ai-data-center-backlog/).

FY2026 guide raised to $13.5-14.0B revenue + ~50-52% EPS growth. Liquid cooling thesis intact via thermal-chain acquisitions per `research/wiki/power-for-ai-primer.md`.

**Position recommendation:** 2-4% if entered. Highest AI-direct exposure among power equipment names. Trade-off: most consensus-aware (recognition Stage 3-4); less asymmetric than POWL but more durable than POWL.

## The business

Per [Q1 2026 8-K](https://www.sec.gov/Archives/edgar/data/0001674101/000162828026026379/q12026exhibit991vrt04222026.htm) and [Heygotrade](https://www.heygotrade.com/en/blog/vertiv-vrt-data-center-cooling-ai-2026/):
- **Critical Infrastructure** (UPS, switchgear, busways) — datacenter power distribution
- **Thermal Management** (CRAH, liquid cooling, rear-door heat exchangers) — datacenter cooling
- **Services** — installation, maintenance, monitoring

~90% datacenter exposed — the highest pure-play in the sector. Recent acquisitions extending into server-side liquid cooling (the highest-density AI workload requirement).

## Why this matters for AI

Per `research/wiki/power-for-ai-primer.md`: Rubin TDP doubling per [user-shared MLCC image 2026-05-21](research/companies/MURATA/thesis.md) drives liquid cooling adoption (air cooling insufficient at >100 kW per rack). VRT is the dominant liquid cooling integrator.

The 80.8% YoY backlog growth (per TechjackSolutions) is the cleanest direct AI signal — pure-play backlog is essentially all AI datacenter at this point. Q1 2026 +44% Americas organic growth (per 8-K) is the second confirmation.

## Anti-fragility (per `research/sector/scenarios.md`)

| Scenario | Result | Reasoning |
|---|---|---|
| S1 NVDA dominant | WIN | Liquid cooling for Blackwell/Rubin |
| S2 Custom Si fragments | WIN | Custom Si also needs cooling |
| S3 Power binds | WIN — strongest | Power infrastructure inside the datacenter |
| S4 Digestion | LOSS — pure-play hits hardest | Backlog cushion is ~12-18 months only |
| S5 Regulatory | NEUTRAL | US-listed; global revenue |

**Anti-fragility: 3.5/5**

## Token-Volume Filter
Per `meta/methodology.md`: ✓ PASS. Cooling demand scales directly with compute deployed.

## Falsifiers
1. Major hyperscaler shifts to in-house cooling or alternative vendor (would surface in backlog deceleration)
2. Air cooling adequacy reasserts at lower TDPs (unlikely given Rubin TDP doubling per MURATA deep-dig)
3. Backlog quality deterioration — many cancellations vs firm orders
4. AI capex pause (S4 scenario) hits hardest given pure-play status

## Blind spots
- Specific customer concentration in backlog
- Liquid cooling vs air cooling backlog mix
- Multiple — VRT has run materially on the cooling narrative; Stage 3-4 recognition
- Competitive moat depth vs Schneider Electric (APC), Eaton thermal management
- Service segment growth (recurring revenue stability)

## Cross-references
- `research/wiki/power-for-ai-primer.md` — Tier 1 datacenter infrastructure candidate
- `research/companies/MURATA/thesis.md` §BOM-level deep-dig — Rubin TDP doubling drives cooling demand
- `research/companies/ETN/thesis.md`, `research/companies/GEV/thesis.md`, `research/companies/HUBB/thesis.md`, `research/companies/POWL/thesis.md` — peer power-equipment names
- `research/meta/deep-dig-queue.md` item #7 — Liquid-cooling capacity per Rubin rack (deep-dig candidate)
