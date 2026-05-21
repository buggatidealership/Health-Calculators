# GRADE — NVIDIA Q1 FY27 Prediction (Made 2026-05-20, Resolved 2026-05-20)

**Workflow:** GRADE (per `meta/reasoning-templates.md`)
**Predicted:** 2026-05-20 pre-print
**Resolved:** 2026-05-20 after market close
**Source file:** `research/predictions/2026-05-20-NVDA-Q1FY27.md`
**Verification sources:** [NVIDIA Q1 FY27 8-K via StockTitan](https://www.stocktitan.net/sec-filings/NVDA/8-k-nvidia-corp-reports-material-event-56086a88bbb4.html), [CNBC earnings coverage](https://www.cnbc.com/2026/05/20/nvidia-nvda-earnings-report-q1-2027.html), [Shacknews details](https://www.shacknews.com/article/149226/nvidia-nvda-earnings-results-q1-fy27)

## TL;DR

**Direction: RIGHT.** Beat across all four axes (revenue, EPS, GM in-line with guide, Q2 guide above consensus). Headline numbers were nearly exact (revenue +/- 0.5%, EPS +/- 0.5%). The lesson is in the magnitude of the Q2 guide upside (called $88.5B; actual $91.0B) — I underweighted NVDA management's forward-visibility confidence. Stock fell despite beat; classic beat-and-fade; not a thesis falsifier.

## Predicted vs Actual

| Component | Prediction | Actual | Status |
|---|---|---|---|
| Q1 Revenue | $82.0B | $81.6B (per NVDA 8-K) | HIT — within 0.5% |
| Q1 Non-GAAP EPS | $1.88 | $1.87 (per Shacknews) | HIT — within 0.5% |
| Q1 Non-GAAP GM | 75.4% | 74.9% (per Shacknews) | MISS by ~50bps |
| Q1 Data Center | $81.0B | $75.2B (per NVDA 8-K) | MISS by $5.8B — segment-level mis-model |
| Q2 Guide midpoint | $88.5B | $91.0B ± 2% (per NVDA 8-K) | HIT direction; magnitude UNDER by $2.5B |

## Probability calibration

| Probability claim | Outcome | Calibration result |
|---|---|---|
| P(rev beat consensus $78.8B): 92% | Beat ($81.6B) | Calibrated |
| P(rev ≥ $80B whisper): 65% | Hit | Calibrated |
| P(rev ≥ $82B point): 40% | Borderline miss ($81.6B) | Borderline; consistent |
| P(GM ≥ 75%): 72% | Just under (74.9%) | Slight overcall |
| P(EPS beat): 85% | Beat | Calibrated |
| P(Q2 guide ≥ $87B): 82% | Hit ($91B) | Calibrated |
| **P(Q2 guide ≥ $90B whisper): 30%** | **Hit** | **UNDERWEIGHTED upside** |

## What I got right

1. **Bottoms-up build of total revenue from supply-side capacity × ASP × mix.** Model arrived at $82B from CoWoS-L capacity expansion + GB300 ASP shift. Actual: $81.6B. The unit-economics methodology worked.
2. **Direction on all four headline metrics.** Beat consensus on revenue, EPS, beat on guide vs consensus.
3. **Holding the demand-side narrative:** capacity-constrained, multi-year forward contracts, hyperscaler capex at $725B in 2026 — all of which I cited as supports for a strong Q2 guide.
4. **Calibrated probabilities on the headline axes** (rev beat, EPS beat, guide beat consensus all hit at high assigned probabilities).
5. **Sandbag-vs-actual gap measured correctly:** I said "internal Q2 expectation is probably $92.7B" before applying a 4-5% sandbag haircut to get $88.5B. The actual $91B is within $1.7B of my internal expectation BEFORE applying the sandbag — meaning the underlying internal-expectation model was nearly right; only the sandbag-haircut assumption was wrong.

## What I got wrong (and the most important miss)

### Most important miss: I underweighted Q2 guide UPSIDE

I assigned only 30% probability to Q2 guide ≥ $90B. Actual: $91.0B. My point estimate was $88.5B, $2.5B below actual.

**The reasoning error:** I applied NVDA's historical 4-5% guide-sandbag pattern. But that pattern reflects a demand environment with quarterly visibility. In the current environment — OpenAI Guaranteed Capacity selling forward contracts, hyperscaler 2026 capex re-rated to $725B (per Tom's Hardware aggregation, see `wiki/token-consumption.md`), Anthropic-Broadcom partnership confirmed, multi-year customer commitments visible — management has UNUSUALLY HIGH visibility into Q2 demand. With that visibility, the historical sandbag heuristic over-discounts. Management guides closer to internal expectation because they're confident enough not to need the cushion.

**The generalizable lesson:** **In a multi-year-contracted-demand environment, the historical sandbag-the-guide heuristic over-discounts.** Forward-contracted visibility shifts the guide-vs-actual gap.

### Secondary miss: Data Center segment mis-model

My breakdown had DC at $81B + non-DC at $5B = $86B (vs $82B total). Actual: DC $75.2B + non-DC $6.4B = $81.6B. Total was right; segment breakdown was off. Possible reasons:
- NVDA may have reclassified parts of DC into "Networking" or other categories (segment reporting changes happen at NVIDIA)
- My estimate of networking-within-DC was too high (I had $11.5B; might be different in actual reporting)
- Gaming or other segments came in higher than I modeled

This is a precision issue at the segment level, not a directional issue at the total level. Lower stakes lesson.

### Tertiary: GM 74.9% vs my 75.4%

50bps below my call. Within company guide of 75% ± 50bps. Possible drivers: HBM3E cost pressure from SK Hynix pricing, Rubin sampling cost flow-through, GB300 mix at lower margin than I assumed. Worth tracking forward — if Q2 GM also comes in below 75%, the margin-pressure thesis (Dylan Patel "2-3x more pricing" claim) may need re-examination from the BUYER side.

## Stock reaction analysis (separated from thesis correctness)

Per the user's explicit point: prediction correctness ≠ stock action.

**The stock fell** despite the beat. Per [CNBC](https://www.cnbc.com/2026/05/20/nvidia-nvda-earnings-report-q1-2027.html): "report is strong but stock slides." Per searches, no Iran-specific catalyst surfaced. Most likely drivers:
1. Beat-and-fade pattern (priced for perfection ahead of print)
2. Profit-taking at high P/E multiple
3. The $91B Q2 guide vs $90B whisper was only marginally above the most-bullish expectation — not the "blowout" some traders wanted
4. Options-positioning unwind (12.9% implied move per pre-print analysis)
5. China DC was explicitly excluded from guide — bulls hoping for that upside disappointed

**Per L2 (don't sell on macro noise) and L3 (don't sell on partial profit):** the thesis lives until a falsifier fires. Stock-down-despite-beat is NOT a falsifier. The demand-side thesis is intact and arguably STRENGTHENED by the print (Q2 guide reflects capacity-constrained reality).

## Implications for OS state

### Scenario weights: no material change required

The print confirms the current weights in `sector/scenarios.md` (latest reweight 2026-05-20). S1 (NVDA dominant) and S2 (custom Si) both consistent with the print. S3 (power binds) reinforced by NVDA's continued growth requiring more power. S4 (digestion) further weakened by the $91B Q2 guide. No reweight needed.

### `where-we-are.md` update

The print is REINFORCING, not paradigm-shifting. Per the "self-evolution rule" — log the signal but don't restructure the synthesis. The "capacity-constrained" narrative is now triangulated at a third primary source (NVDA Q2 guide of $91B + 25x dividend increase shows confidence). Adding one-line update to the synthesis file.

### Portfolio implications

- **NVDA thesis intact.** Held position (no current position for user; user does not hold NVDA per `portfolio/holdings.md`). Recognition Stage 3-4. Multiple compression risk real but offset by absolute earnings growth.
- **The capacity-constrained downstream thesis is reinforced.** Names benefiting: HBM (SK Hynix held), CoWoS-coupled (TSMC watchlist), networking (ANET watchlist), power (VST/CEG/TLN watchlist), substrate (Shin-Etsu/SUMCO watchlist).
- **Anthropic-AVGO custom Si validation continues.** AVGO thesis (P1 todo) increasingly important.

## New lesson to add to lessons.md

**L4 — In a multi-year-contracted-demand environment, historical guide-sandbag heuristics over-discount management confidence.** When the company has forward-contracted visibility (multi-year customer commits, capacity-constrained backlog), guides come in closer to internal expectation rather than the historical 4-5% below. The investable implication: in this environment, calibrate forecasts CLOSER to the company's internal expectation, with smaller sandbag haircut.

## Action

1. Mark NVDA Q1 FY27 prediction as GRADED in `predictions/grading-log.md`
2. Add L4 to `predictions/lessons.md`
3. Update `where-we-are.md` mind-changes log with the L4 lesson
4. Update `sector/scenarios.md` reweight log with "confirmed by NVDA Q1/Q2"
5. Delete the P0 NVDA grade item from `meta/todo.md` (artifact = this GRADE file)
