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

## [2026-07-02 PM] BUY-LIST RECOMMENDATION (user asked "names you would buy rn" — codified per Rule #13; sizing user-gated per Rule #11)

Macro anchor (2026-07-02): selloff = positioning not demand (`signals/cross-source-log/2026-07-02-kr-jp-selloff-TIER2-verification-addendum.md`); enabling-layer migration verified but partly discovered (`2026-07-02-enabling-layer-company-map-4agent.md`); PD-7 efficient-discovery N=2; rates-regime backdrop argues staged tranches (`2026-07-02-morning-feed-us-legB-discovery-rates-regime.md`).

| Rank | Name | Recommended action | Grounding |
|---|---|---|---|
| 1 | BE | Execute earmarked ~€7-8k initial tranche | 4/4 beat-and-raise + Brookfield non-dilutive + Jul-30 modal-RAISE prediction P~70-75% (5-judge) per `companies/BE/thesis.md` + `predictions/2026-07-01-BE-Q2-FY26-guide-prediction.md` |
| 2 | ALAB | Execute earmarked ~€6-7k initial tranche | Entry STRENGTHENED today: CPO delay to 2028-2029 (SemiAnalysis, 2-agent secondhand T2, per oblivious-layer + enabling-layer artifacts) extends retimer socket life vs the dated optical bear-watch in `companies/ALAB/thesis.md`; Q2 pre-registered `predictions/2026-07-02-ALAB-Q2-earnings-prediction.md` (post-print dip = tranche-2 window) |
| 3 | ONTO | NEW starter with residual DeGiro cash (~€5-6k) | Only public dual panel-litho + warpage/overlay metrology play; $240M+ HBM VPA through 2027; record Q1 $292M; P/E ~72 vs Camtek ~156; warpage = proven binding constraint (Rubin Ultra 4-die cancellation, TrendForce 2026-04-01 T2). Per `2026-07-02-enabling-layer-company-map-4agent.md` (agent C). Next print 2026-08-06 — starter before, add on confirmation. Falsifier: loses CoPoS panel tool selection |
| 4 | AVGO | First claim on next new money | Cleanest base-die-migration winner: OpenAI Jalapeño deploy end-2026, fwd P/E ~32× = cheapest multiple on largest custom-ASIC book (agent D, same artifact); diversifies memory concentration. Falsifier: custom-ASIC consolidation back to Nvidia merchant |
| 5 | Sumitomo Bakelite 4203.T | Small starter ONLY after the queued dig closes the semi-exposure % + mcap conflict (¥435B vs ¥590B, agent B flags) | FY25 OP ¥35.5B +43% YoY, #1 molding compound, least extended of the JP chemistry cluster — per agent B (JP-native sourced: Sumibe IR / BigGo / Nikkei URLs in `2026-07-02-enabling-layer-company-map-4agent.md`). Native-source re-verification is PART of the gating dig — do not size before |

NOT-buy despite today's work (Rule #18): Camtek/BESI/Resonac/Ajinomoto/TOK/Ibiden (re-rated to ATHs — staged-entry conditions only); Mistras/Sims SLS (watch-tier, thin); Kyocera (0.9×-book premise failed — actual P/B 1.38-1.48x per R3); Genpact/Cognizant (outside mandate, clawback risk); more SKH/memory (cluster ~57,7% — steps 1-4 ARE the de-concentration).

Timing: reassess Monday with Samsung prelim (~Jul-7 keystone, `predictions/2026-07-02-SAMSUNG-Q2-prelim-prediction.md`); staged tranches given rates backdrop. All execution user-gated.
