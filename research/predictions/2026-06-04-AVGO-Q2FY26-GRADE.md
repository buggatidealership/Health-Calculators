# AVGO Q2 FY26 — GRADE (2026-06-04)

**Workflow:** GRADE (Workflow #5 per `CLAUDE.md`)
**Predicted on:** 2026-06-03 PM per `predictions/2026-06-03-AVGO-Q2FY26.md`
**Resolved:** 2026-06-03 AMC earnings release
**Macro context flagged by user:** Iran-US war ongoing (Operation Epic Fury Feb 28 2026); Israel-Hezbollah war resumed; Brent oil rising on Netanyahu/CNBC Iran remarks same day; Strait of Hormuz crisis active.

## TL;DR

**Fundamental: PARTIAL HIT** — AI semi BULLSEYE ($10.8B vs $10.5-11.0B predicted), revenue + EPS in-range (within 0.5%), but Q3 guide $29.4B was 24% above my $23.0-23.8B band — major upside MISS. Anthropic 5GW disclosure not in prediction.

**Stock-reaction: MAJOR MISS — WRONG DIRECTION** — predicted weighted T+24h ~+11-13%; actual AH -3% to -13.78% across sources. **L14 framework (Stage 3-4 + CATEGORY EVENT → +25-40%) has its first major falsification.**

Layer that failed:
- COMPUTATION (forward-quarter magnitude under-extrapolation)
- REASONING (framing assumption: FY26 raise vs actual multi-year FY27 framing)
- Plus macro confounder (Iran-Israel oil-spike risk-off compressing reaction)

---

## Actuals vs prediction

Per [Stocktitan / Broadcom 8-K](https://www.stocktitan.net/news/AVGO/broadcom-inc-announces-second-quarter-fiscal-year-2026-financial-if4yrbje8hq6.html), [GuruFocus call highlights](https://ca.investing.com/news/company-news/broadcom-inc-avgo-q2-2026-earnings-call-highlights-record-revenue-driven-by-ai-semiconductor--4675065), [TradingKey post-earnings](https://www.tradingkey.com/analysis/stocks/us-stocks/261944759-avgo-q2-earnings-broadcom-outlook-investors-ai-stock-after-tradingkey):

| Metric | My prediction | Actual | Hit/Miss |
|---|---|---|---|
| Total revenue | $22.3-22.7B | $22.187B | CLOSE — $113M below low end |
| AI semi revenue | $10.5-11.0B | $10.8B (+143% YoY) | **BULLSEYE** |
| Non-GAAP EPS | $2.45-2.55 | $2.44 | $0.01 below low end |
| GAAP net income | not modeled | $9.31B | — |
| Adj EBITDA | not modeled | $15.244B (69% margin) | — |
| FCF | not modeled | $10.262B (46% of rev) | — |
| Q3 revenue guide | $23.0-23.8B | **$29.4B (+84% YoY)** | **MISS — under by 24%** |
| Q3 AI semi guide | not explicitly modeled | **$16.0B (+200% YoY)** | MISS |
| FY26 AI raise | $32-35B (from implied $30B) | NOT raised; multi-year framing **FY27 >$100B** | FRAMING MISS |
| Anthropic disclosure | not modeled | **>1 GW in 2026 + 5 GW from 2027** | NOT PREDICTED |
| Google TPU long-term agreement | partially modeled (April deal known) | Multi-generation supply confirmed | MODELED |

## Stock-reaction

| Source | AH price action |
|---|---|
| TradingKey | -8% AH "buy the rumor sell the news" |
| Shacknews | EPS missed whisper $2.32 expectation context |
| Yahoo Finance | "rocketing higher" framing — likely first-minute spike before reversal |
| Indmoney | "AVGO Stock Falling After Q2 FY2026 Results" |
| Chartmill | "Stock Drops on Q2 Earnings After Disappointing Revenue Miss and Outlook" |
| Heygotrade | Software miss flagged |

Range: **-3% to -13.78% AH** depending on source. Pre-print rally was **+13.6% / +$270B in 5 trading days** per TradingKey.

## 3-layer GRADE diagnostic

### INPUT layer — RIGHT
- Cohort signals correctly weighted: SCREEN +13.6% earnings surprise + MRVL guide + Computex multilingual photonics rankings + Alphabet $190B capex (verified morning-of)
- All inputs were current, complete, correctly tiered

### COMPUTATION layer — PARTIAL FAIL
- Q3 guide under-predicted by 24%. My forward-quarter extrapolation anchored too closely to Q2 magnitude ($22.5B) rather than modeling the Anthropic 5GW + Google TPU multi-gen as an INFLECTION
- Q3 AI semi $16B (+200% YoY) was the headline number I should have built bottoms-up
- Anthropic 5GW disclosure was a primary-source forward-loadable number I missed — the [Anthropic-Broadcom relationship](https://news.alphastreet.com/broadcom-inc-avgo-q2-2026-earnings-call-transcript/) was disclosable from Q1 print but I didn't extrapolate to GW-scale

### REASONING layer — FRAMING FAIL
- I assumed the CATEGORY EVENT signal would be an explicit FY26 raise. Actual category event was MULTI-YEAR framing (FY27 >$100B)
- Magnitude of total upside was actually larger than I projected (FY27 >$100B is 2.5-3x my FY26 $32-35B estimate spread over 12 more months), but framing as multi-year was read by market as "no Q4 raise" → seen as disappointment
- **L14 framework first falsification:** Stage 4 + CATEGORY EVENT → predicted +25-40% T+24h; actual was -3 to -13.78%. The framework needs refinement.

## Self-correction: L14 framework refinement candidates

### L14-v2 candidate (refinement)
"Stage 3-4 + CATEGORY EVENT + pre-print rally <10% over 5 days → +25-40% T+24h. **If pre-print rally >10%, the BEAT+CATEGORY signal is OFFSET by expectations exhaustion → reaction can be NEGATIVE despite genuine category event.**"

Anchor: AVGO +13.6% pre-print rally + BEAT + CATEGORY EVENT → -3 to -14% T+24h.

### L19 (NEW candidate) — Multi-year framing vs FY-print raise
"When management uses multi-year (FY+1, FY+2) revenue framing INSTEAD of explicit current-FY raise, traders interpret as management 'not playing into narrative' → negative T+24h reaction even if multi-year magnitude is larger. Conservative multi-year framing reads as ambiguity, not bullishness."

Anchor: AVGO FY27 >$100B framing vs market wanting FY26 raise.

### L20 (NEW candidate) — Macro-confounder T+24h interpretation discount
"T+24h stock-reaction grades during major geopolitical risk-off events (oil spike + war headlines same day) should be interpretation-discounted by ~50%. Fundamental grade unaffected; stock-reaction signal-to-noise compressed materially."

Anchor: Iran-Israel + Brent $100+ + Strait of Hormuz crisis on June 3 print day.

### B42 (NEW candidate) — Expectations-exhaustion bias
"Pre-print rally >10% in 5 days creates expectations-exhaustion: even a genuine BEAT + CATEGORY EVENT can produce NEGATIVE T+24h reaction because the positive surprise was already priced. Distinguish from 'priced to perfection' (which is more chronic) — expectations exhaustion is acute and quarter-specific."

Anchor: AVGO +13.6% in 5 days into print = $270B added market cap absorbing the BEAT signal pre-fact.

## Fundamental grade for the data points

| Component | Direction | Magnitude | Layer that failed |
|---|---|---|---|
| AI semi $10.8B | RIGHT | EXACT | none |
| Revenue $22.187B | RIGHT | -0.5% low | none |
| EPS $2.44 | RIGHT | -$0.01 low | none |
| Q3 guide $29.4B | RIGHT direction (beat my band) | -24% low | COMPUTATION (under-extrapolation) |
| FY framing | WRONG framing | magnitude OK in different shape | REASONING (assumed FY26 raise) |
| Anthropic 5GW | NOT MODELED | massive upside missed | INPUT (could have inferred from prior Anthropic deals) |

## Stock-reaction grade

**Wrong direction:** predicted +11-13% weighted; actual -3 to -13.78% AH. Macro-confounder-adjusted (per L20 candidate): the IDIOSYNCRATIC reaction was probably -5% (estimate), with -3 to -8% from H1 (buy-the-rumor) + H2 (multi-year framing) + 0 to -5% from H3 macro beta.

## Cascade actions

1. ✅ Append L19 + L20 to `predictions/lessons.md`
2. ✅ Add L14-v2 refinement note to `predictions/lessons.md`
3. ✅ Add B42 candidate to `meta/biases-watchlist.md`
4. ✅ Update `predictions/grading-log.md` status: graded
5. ✅ Cascade BULLISH fundamental signal to HYNIX / MURATA / SUMCO / SNDK / ALAB theses (Anthropic 5GW + Q3 AI semi $16B = direct HBM/MLCC/wafer/NAND/retimer pull)
6. ✅ Add macro context (Iran/Israel) to `sector/where-we-are.md` as confounder for future T+24h grades
7. ✅ Update `companies/AVGO/thesis.md` with Q2 print actuals + Q3 guide $29.4B + Anthropic 5GW

## Position implication

**No held position in AVGO.** Cohort impact: BULLISH fundamental for HYNIX (HBM in TPU), MURATA (MLCC), SUMCO (wafers), ALAB (PCIe retimers in TPU rack-scale), SNDK (NAND parallel). Existing 2026-06-04 thesis updates already cascaded Alphabet $190B capex anchor; AVGO Q3 $16B AI semi guide REINFORCES same thesis. No sizing changes.
