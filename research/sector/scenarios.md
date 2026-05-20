# Scenarios — Plausible 12–24 Month Futures

**Last updated:** 2026-05-20 (post Anthropic WSJ reveal)

## TL;DR

5 scenarios held simultaneously. Each name's anti-fragility = M/5 (wins in M of the 5). The portfolio should overweight names that score 3+/5.

Probabilities sum to 100%. Reweight on any major event via the SCENARIO-UPDATE workflow.

## Reweight log

### 2026-05-20 — Anthropic Q2 2026 forecast: $10.9B revenue + first operating profit + expanded Broadcom partnership (per [WSJ via Investing.com](https://za.investing.com/news/economy-news/anthropic-revenue-set-to-more-than-double-to-109-billion-in-q2-4293058) and [Sherwood](https://sherwood.news/markets/anthropic-revenue-run-rate-30-billion-google-broadcom-partnership/))

Reweighting rationale:
- **S2 (custom Si fragments inference): 20% → 25%.** Anthropic + Broadcom custom Si partnership is the second top-3 frontier provider committing meaningful workloads to Broadcom-designed custom silicon (Google TPU is the first). This is no longer hypothetical scaling.
- **S4 (digestion / capex pause): 15% → 10%.** Frontier model provider reaching operating profit 2 years ahead of guidance materially weakens the "AI capex is unsustainable" bear case. Demand fundamentals just got harder evidence.
- **S1 (NVDA dominant): 35% → 35%.** Unchanged on net. The agentic demand confirms volume growth (positive for NVDA), but the custom Si scaling (negative for NVDA pricing power) offsets.
- **S3 (power binds): 20% → 22%.** Demand validation slightly strengthens the power-binding probability.
- **S5 (regulatory shock): 10% → 8%.** No specific catalyst, but the broader risk-off bucket compressed because the demand-side risk reduced.

Sum: 35 + 25 + 22 + 10 + 8 = 100. ✓

## Scenarios (current weights)

### S1 — Agentic scales, NVDA still dominant (P=35%)

Agentic AI adoption accelerates. NVDA's GB300 / Rubin lead in inference + networking attach (Spectrum-X, NVLink) keeps them at >70% data-center compute share. CUDA moat holds. Hyperscalers continue >$700B/yr capex through 2027.

**Winners:** NVDA (lead), TSM, ASML, SK Hynix/MU, VST/CEG (power), ANET (networking).
**Losers:** Custom ASIC pure-plays, intel/x86 if AMD continues taking share.

### S2 — Custom silicon fragments the market (P=25%, up from 20% on 2026-05-20 — see reweight log)

Google TPU + AWS Trainium + Microsoft Maia + Meta MTIA scale enough to carve out 25–35% of inference workloads by 2027. NVDA still dominant in training and at the top end; but inference becomes multi-vendor. Hyperscalers' bargaining power vs NVDA improves.

**Winners:** AVGO (custom silicon foundry-of-choice), MRVL, TSM (still makes everything), hyperscalers themselves (better COGS).
**Losers:** NVDA margins compress (still grows but pricing power weakens), AMD if MI doesn't scale.

### S3 — Power becomes binding (P=22%, up from 20% on 2026-05-20)

Datacenter power siting + grid interconnect + cooling become the actual constraint in H2 2026 / 2027. Hyperscalers can't deploy chips fast enough because they can't power them. Capacity utilization within existing sites becomes king. Custom silicon advantage compresses (efficiency premium ↑↑). Nuclear / firm-power assets re-price aggressively.

**Winners:** VST, CEG, GEV, TLN, ETN (electrical), liquid cooling vendors, NVDA Blackwell efficiency advantage matters more.
**Losers:** Any AI compute spend in regions without firm power. Hyperscaler revenue growth caps.

### S4 — AI spend digestion (P=10%, down from 15% on 2026-05-20 — see reweight log)

Hyperscalers pause to absorb the 2025–2026 buildout. ROI scrutiny intensifies in late 2026. Capex grows but at +20–30%, not +77%. Inventory unwinds in the supply chain. Margins compress for chip vendors. AI-software revenue grows but doesn't justify the hardware buildout pace.

**Winners:** Anti-fragile services (DDOG observability, CRWD security — still needed), software with real AI revenue (PLTR), companies with sticky enterprise lock-in.
**Losers:** Pure-cycle hardware names with no recurring revenue, leveraged power plays, smaller chip names without scale.

### S5 — Black swan / regulatory shock (P=8%, down from 10% on 2026-05-20)

A major regulatory event (US export shock to China, EU AI Act enforcement, antitrust break-up of a hyperscaler, geopolitical event re: Taiwan) reshapes the playing field. Specific outcomes vary. Volatility ↑↑.

**Winners:** Diversified suppliers (TSM if they survive geopolitics with new fabs), defensive names with US-centric infra.
**Losers:** Single-customer-concentration names, Taiwan-concentrated supply chains.

## Anti-fragility scoring (initial)

Names that win in many scenarios. Updated as scenarios reweight.

| Name | S1 | S2 | S3 | S4 | S5 | Score | Note |
|---|---|---|---|---|---|---|---|
| TSM | Win | Win | Neutral | Loss | Mixed | 2.5/5 | Fab-of-everything but Taiwan-concentrated |
| ASML | Win | Win | Neutral | Loss | Mixed | 2.5/5 | Same — monopoly tech, cycle risk |
| NVDA | Win | Mixed | Win | Loss | Loss | 2.5/5 | Dominant but priced for S1 |
| AVGO | Mixed | **Win** | Neutral | Mixed | Neutral | 2.5/5 | Hedge against S2 |
| VST | Mixed | Mixed | **Win** | Loss | Mixed | 1.5/5 | Power play, S3-dependent |
| MU | Win | Win | Mixed | Loss | Mixed | 2.5/5 | HBM exposure broad-based |
| MSFT | Win | Win | Mixed | Mixed | Mixed | 3/5 | Software moat + hyperscaler optionality |
| GOOG | Win | **Win** | Mixed | Mixed | Mixed | 3/5 | TPU optionality (S2 winner) + scale |
| META | Win | Mixed | Mixed | Win | Mixed | 3/5 | In-house AI ROI is real (Reels, ads) |
| AMZN | Win | Win | Mixed | Win | Mixed | 3.5/5 | AWS + Trainium + retail ROI from agents |
| DDOG | Mixed | Mixed | Neutral | **Win** | Mixed | 2/5 | Inference observability mandatory |
| CRWD | Mixed | Mixed | Neutral | **Win** | Mixed | 2/5 | Security spend non-discretionary |

*These are placeholder reads — refine as `companies/{TICKER}/thesis.md` files mature.*

## Update protocol

When a SCENARIO-UPDATE fires:
1. Reweight probabilities (with rationale in `interpretations.md` of affected names)
2. Rescore each name's S1–S5 column
3. Update tier in `thesis.md` if anti-fragility crossed a threshold
4. Note the change here with date + trigger event
