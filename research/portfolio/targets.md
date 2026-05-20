# Position Targets

**Last updated:** 2026-05-20

## TL;DR

Target position size per name, derived from conviction tier in `companies/{TICKER}/thesis.md`. Sizes adjust as theses evolve, scenarios reweight, or anti-fragility scores change.

## Sizing framework

| Tier | Target size | Conviction requirement |
|---|---|---|
| Core | 8–15% | P(bull) ≥ 60%, anti-fragility ≥ 3/5, bull return ≥ 30% |
| Active | 3–8% | P(bull) 40–60%, OR thesis scenario-dependent but compelling |
| Watchlist | 0% (paper position) | thesis exists, conviction insufficient for capital |
| Avoid | 0% | P(bear) ≥ 40% OR thesis broken |

## Current targets (initial)

| Ticker | Tier | Target size | Anti-fragility | Conviction notes |
|---|---|---|---|---|
| NVDA | Core | 8–12% | 2.5/5 | Highest absolute growth; manage active vs S2 risk |
| AMZN | (TBD when thesis written) | — | 3.5/5 | Most anti-fragile; high candidate for Core |
| MSFT | (TBD) | — | 3/5 | Software moat + hyperscaler optionality |
| GOOG | (TBD) | — | 3/5 | TPU is the S2 hedge |
| META | (TBD) | — | 3/5 | In-house AI ROI proven |
| AVGO | (TBD) | — | 2.5/5 | S2 hedge — pair-trade vs NVDA |
| VST | (TBD) | — | 1.5/5 | Power theme; high beta to S3 |
| CEG | (TBD) | — | 1.5/5 | Pure nuclear, ESG-friendly |
| MU | (TBD) | — | 2.5/5 | Memory bandwidth play |
| TSM | (TBD) | — | 2.5/5 | Highest leverage but Taiwan risk |
| ASML | (TBD) | — | 2.5/5 | Monopoly tech |
| DDOG | (TBD) | — | 2/5 | Inference observability — late cycle |

## Total AI exposure target

[TBD — needs holdings.md filled in to recommend total AI allocation]

A reasonable starting frame: 50–70% of portfolio in AI value chain, given the trading horizon (6–24 months) and the structural growth in the sector. Could be higher or lower based on user's risk tolerance.

## Rebalancing rules

- Theses get reviewed quarterly (or on major events via SCENARIO-UPDATE)
- Position sizes drift with stock prices; trim above target by 50% of overage, add below target by 50% of underage
- Anti-fragility score change → trigger immediate tier review

## When to ADD vs TRIM

ADD when:
- Anti-fragility score improves
- Triangulated signal confirms the bull thesis
- Market moves against the name without a thesis change (asymmetric set-up improves)
- New scenario reweighting increases probability of the name's winning scenarios

TRIM when:
- A falsifier fires
- Anti-fragility score worsens
- Triangulated signal contradicts the bull thesis
- Position drifts >2x target due to stock appreciation (take some off)
