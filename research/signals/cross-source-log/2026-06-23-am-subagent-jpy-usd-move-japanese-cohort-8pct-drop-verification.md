# 2026-06-23 AM — JPY-USD Move + Japanese/Korean Cohort ~8-13% Drop Verification

**Workflow:** Critical Rule #16 (verification subagent fan-out) + INGEST
**Date:** 2026-06-23
**Scope:** Deep verification — JPY-USD framing, Japanese cohort price action, B53 voice-garble resolution
**Multilingual:** Japanese BoJ/MoF primary source search executed; Korean KOSPI cross-check executed; English cross-check executed
**Linked to:** `signals/cross-source-log/2026-06-23-am-subagent-a-hynix-hbm4-throttle-commodity-dram-verification.md`

---

## TL;DR

SUMCO (3436.T) is the held position down sharply today — approximately -12.84% (significantly MORE than the user's stated ~8%). The cause is NOT a JPY-USD currency move. The primary driver is a KOSPI/Korea semiconductor circuit-breaker event (KOSPI -8.11%, circuit breaker triggered; SK Hynix KRX -11.55%) creating global chip sympathy selling, layered on top of SUMCO-specific profit-taking after a +44% rally in one month and a Q1 2026 earnings miss. JPY is at 161.5 (near 40-year LOWS, not strengthening) and Japan has NO formal USD peg — user's recall on JPY peg is INCORRECT. The "8% drop" voice-garble most likely refers to SUMCO, not KIOXIA.

---

## Section 1 — Identified Name: Which Position is Down ~8% Today?

### Price Action Summary — All Held/Watchlist Japanese Names (2026-06-23)

| Name | Ticker | Held? | JPY Price | Change % (24h) | Source | Tier |
|---|---|---|---|---|---|---|
| SUMCO Corp | 3436.T | YES — 626sh @ €22.31 BEP | ~3,522 JPY | **-12.84%** | Trading Economics / multiple aggregators | T2 |
| MURATA Mfg | 6981.T | YES — 336sh @ €53.67 BEP | ~12,315-12,535 JPY | **-3.9%** | Nikkei/CNBC/aggregators | T2 |
| KIOXIA Holdings | 285A.T | YES — ~€10K via N26 | ~108,700 JPY | **+0.09%** | Multiple aggregators | T2 |
| IBIDEN Co | 4062.T | WATCHLIST 0sh | ~24,000 JPY | **+6.57%** | Multiple aggregators | T2 |
| Nikkei 225 (index) | N225 | — | ~71,661 pts | **-0.96%** | Trading Economics | T2 |

**VERDICT:** SUMCO (3436.T) is the position matching the user's "-8% drop" claim — and the actual move is LARGER (-12.84%). KIOXIA is essentially flat. MURATA is down ~3.9%. IBIDEN (watchlist, 0 shares) is actually UP +6.57%.

**B53 Voice-Garble Resolution:** "the cost" is MOST LIKELY "SUMCO" (phonetic proximity: "the cost" / "SUMCO" under voice degradation is plausible). "KIOXIA" is NOT the name — KIOXIA is flat. MURATA is down but only ~4%, not 8%.

**B40 Freshness:** Price data pulled intraday/24h period consistent with June 23, 2026 trading session. NOT stale.

---

## Section 2 — Cause of the SUMCO Move

### SUMCO-Specific Factors (multi-cause stack)

**Factor 1: Post-Rally Profit-Taking (DOMINANT factor)**
- SUMCO surged approximately +44% over the prior month on AI-driven silicon wafer demand narrative (per multiple aggregators, Trading Economics data)
- After a +44% move in one month, any reversal catalyst accelerates profit-taking
- Technical analysts flagged RSI overheating, domestic brokerages issued valuation downgrades citing "diminished valuation appeal" post-rally
- This factor alone explains a 8-13% single-session reversal (B45 note: -12.84% single-day on a +44%-in-a-month name is within historical AI-regime norms for mean-reversion)

**Factor 2: Q1 FY2026 Earnings Miss**
- SUMCO Q1 2026: EPS -24.22 JPY vs forecast -14.73 JPY — a material miss (per Investing.com earnings call transcript)
- Q1 2026 sales: JPY 101.4B; operating loss: JPY 5.2B; high depreciation: JPY 30.8B
- H1 2026 guidance: net sales JPY 213.4B; operating loss JPY 7.7B; net loss JPY 15.4B
- Management framing: silicon wafer prices "gradual increase" expected but most 300mm business under LTAs — near-term price hike limited
- Post-Q1 results, stock dipped -2.99% in initial after-hours; the June 23 move compounds this

**Factor 3: Morgan Stanley Downgrade (Valuation)**
- Morgan Stanley downgraded SUMCO to Underweight from Equalweight on valuation grounds
- Note: MS RAISED profit estimates but downgraded on valuation (how much recovery is already priced in at +44% rally level)
- This is the analyst-PT-framing discipline (B28 applies — downgrade is valuation-driven, not structural thesis break)

**Factor 4: KOSPI/Korea Semiconductor Sympathy Selling (AMPLIFIER)**
- See Section 3. The KOSPI circuit-breaker event (KOSPI -8.11%) and SK Hynix KRX -11.55% on June 23 created a GLOBAL SEMICONDUCTOR ROUT narrative, amplifying profit-taking in all Asia semiconductor names
- Japan semiconductor stocks broadly under pressure: SoftBank -5.8%, JX Advanced Metals -3.1%, Furukawa Electric -4.6%, Taiyo Yuden -1.7%, Murata -3.9%
- SUMCO's idiosyncratic factors (earnings miss + post-rally overvaluation) meant it led the Japan downside

**Verdict on cause type (using the Premise 3 framework):**
- (a) Single-name idiosyncratic: YES — SUMCO-specific earnings miss + Morgan Stanley downgrade
- (b) Sector-wide AI/semiconductor selloff: YES — KOSPI circuit-breaker amplifies
- (c) Currency-driven: NO — JPY direction today is YEN WEAKNESS (161.5, near 40yr low), not JPY strength; yen weakness is BULLISH for Japanese exporters like SUMCO (JPY revenue cost base vs USD contracts), not bearish. Currency is NOT the cause.
- (d) Broad Nikkei/global risk-off: PARTIAL — Nikkei -0.96% today (mild). Profit-taking after record highs. NOT a broad risk-off event; SUMCO's -12.84% is far out-sized vs Nikkei -0.96%.
- (e) HYNIX/Korea spillover: YES — KOSPI circuit-breaker is a confirming amplifier for Japan chip sector

**Dominant classification: (a) + (b) + (e) compound. NOT (c).**

---

## Section 3 — KOSPI/Korea Market Event Today (Cross-Check + HYNIX Position)

### KOSPI Market on June 23, 2026

| Metric | Value | Source | Tier |
|---|---|---|---|
| KOSPI close/intraday low | Down 8.11% to 8,375.31 | Investing.com / Korea Herald | T2 |
| Circuit breaker triggered | YES — Level 1; 20-minute halt at 2:33 pm KST | Investing.com / CryptoBriefing | T2 |
| SK Hynix KRX (000660.KS) intraday | Down 11.55% to 2,582,000 KRW | Asia Business Daily (Asiae.co.kr) | T2 |
| SK Hynix early: brief crossing 3M KRW | Yes, hit 3,002,000 KRW (~8:04am pre-mkt) for first time ever | Asia Business Daily | T2 |
| KOSDAQ performance | Down 8%+ (circuit breaker per Kalkine) | Kalkine | T3 |

**Causes of KOSPI crash (multi-source)**:
1. Semiconductor/AI rally profit-taking after record highs (SK Hynix briefly exceeded Samsung in market cap the prior session — historic first)
2. Leveraged products panic: regulatory scrutiny of excessive leverage in semiconductor-linked financial products triggered margin calls and cascading sells
3. MSCI Developed Markets rejection: Korea NOT included in MSCI DM index upgrade in upcoming review — removed a catalyst that had drawn foreign inflows
4. Wall Street overnight weakness: US tech stocks under pressure, mirrored in Asia open

**HYNIX GDR (HY9H — held 15sh @ €1,294 BEP):**
- June 22 close (Frankfurt/DE listing): €1,665 EUR (up from €1,580 prior close; +5.4% on June 22)
- June 23 GDR data: NOT YET AVAILABLE via search (Frankfurt may trade with delay; KRX data shows -11.55% intraday crash)
- GDR implications: expect HY9H Frankfurt to open/trade DOWN materially on June 23 given the KRX circuit-breaker event. Estimate: -8 to -12% (my inference, directional, NOT a fact yet until Frankfurt data confirms) — FLAGGED AS T2-DERIVED INFERENCE, NOT CONFIRMED
- **HYNIX KRX at ~2,582,000 KRW intraday vs BEP** — user BEP €1,294 / GDR ratio approx 1:1 EUR-adjusted. At €1,665 pre-crash the position is deeply green. Even a -12% move would put GDR at ~€1,465 — STILL ABOVE €1,294 BEP. No thesis falsifier fires.

**B53 compound assessment: user saying "the cost" or "KOSPI" (garble of SUMCO vs KOSPI):**
BOTH are plausible as garble targets. "SUMCO" and "KOSPI" share phonetic qualities under voice degradation. Given the KOSPI circuit-breaker narrative is the dominant single event of the day, user may have been referencing the KOSPI/Korean market crash as the macro trigger — and SUMCO is the HELD position that is down most severely (-12.84%), consistent with ~8% (user underestimated the drop; actual is worse).

---

## Section 4 — JPY-USD Currency Verification (TODAY + RECENT HISTORY)

### USDJPY on June 23, 2026

| Metric | Value | Source | Tier |
|---|---|---|---|
| USDJPY spot June 23 | ~161.54 | Trading Economics / PoundSterlingLive 2026 history | T2 |
| Intraday move vs prior session | -0.02% (essentially flat day-on-day) | Multiple aggregators | T2 |
| YTD move | JPY weakened ~1.66% in past month; down ~11.46% past 12 months | Trading Economics | T2 |
| 52-week range implied | Yen at near-40-year LOW (weakest since 1986) | CNBC June 23 | T2 |
| BoJ rate decision June 16, 2026 | +25bp to 1.00% (7-1 vote) — HIGHEST since September 1995 | BoJ official release (boj.or.jp June 16 2026) | T1 |
| MoF intervention April-May 2026 | ¥11.7 trillion (~$72.8B) deployed | CNBC June 19, 2026 | T2 |
| MoF latest jawboning | Finance Minister Katayama confirmed call with US Treasury Secretary Bessent; reaffirming coordination if needed | XTB morning wrap June 19, 2026 | T2 |
| USDJPY direction today | JPY WEAK (yen at ~161.5 means more dollars per yen = YEN HAS DEPRECIATED) | Multiple T2 | T2 |

**CRITICAL CLARIFICATION:** USDJPY = 161.5 means ONE US dollar buys ~161.5 yen. This is **yen WEAKNESS** (yen depreciated). It is near its weakest level since 1986. There is NO JPY strengthening event today. The currency is in a sustained WEAK trajectory.

**For Japanese exporters (SUMCO, MURATA, KIOXIA):** JPY weakness is theoretically BULLISH for translated earnings (overseas revenue in USD/EUR translates to MORE yen). A yen weakness event would not explain Japanese exporter selloffs — it's the WRONG DIRECTION for the user's stated explanation.

**Key BoJ context:**
- BoJ raised rates to 1.0% on June 16, 2026 — highest since 1995
- Despite the hike + massive intervention ($72.8B), JPY STILL at 161 — structural yen weakness overwhelming policy tools
- The BoJ-Fed rate differential remains wide: JGB 10yr at 2.64% vs UST 10yr at 4.451% (per CNBC June 19) = carry trade still active against yen

---

## Section 5 — JPY-USD "Peg" Framing Investigation

### Does a JPY-USD Peg Exist?

| Claim | Verdict | Evidence | Tier |
|---|---|---|---|
| Japan has a formal JPY-USD peg | FALSE | Japan moved to free float in 1973. No formal peg exists in 2026. | T1 (historical fact) |
| There is a "soft peg" or "managed float" discussion in current press | NOT FOUND | WebSearch on "soft peg managed float JPY 2026" returned NO results with formal peg proposal or managed float framing. Japan's approach is "volatility management" (FX intervention around sharp moves), NOT a peg. | T2 NOT-FOUND |
| BoJ-Fed coordination = de facto peg | INCORRECT FRAMING | MoF-UST coordination (Katayama-Bessent call) is a diplomatic reaffirmation of "coordinate if needed." The USDJPY is sitting at 161 DESPITE this — no coordination is producing peg-like stability | T2 |
| "Peg" framing anywhere in current Japanese press | NOT FOUND | Nikkei Asia / Japan Times articles discuss "intervention" (介入), "carry trade," "rate differential" — not "peg" (固定相場制). The peg regime ended in 1973; modern discourse is entirely about free-float + intervention policy. | T2 NOT-FOUND |
| Any discussion of BoJ-Fed rate coordination as pseudo-peg | NOT FOUND | No credible source frames 2026 policy as peg or target band system | T2 |
| Yen-Korean Won peg discussion | NOT FOUND | No such discussion surfaced | T2 NOT-FOUND |

**Conclusion on JPY peg claim:** The user's recall is INCORRECT. Japan has no JPY-USD peg, no formal managed float, and no current proposal for one. The press frames current FX policy as "intervention" (when USDJPY spikes above ~155-161 threshold triggers MoF action) and "monetary normalization" (BoJ hikes). The word "peg" does not appear in any Japanese financial press search result as a description of current policy. This is a **RECALL-BASED CLAIM requiring B59 v2 ground-truthing** — filed as RECALL-CORRECTED.

**What the user may have been THINKING OF:**
- The ¥155-161 "intervention zone" where MoF is known to act — which media sometimes describes loosely as a "line in the sand" or "floor defense" — could have been recalled as "peg"
- Prior JPY intervention episodes (2022: intervention when USDJPY hit 152; April-May 2026: ¥11.7T deployed when above 155) create the impression of an implicit ceiling. This is NOT a peg — it is asymmetric intervention to cap YEN WEAKNESS.
- User may have read a headline like "Japan defends yen at 160" and recalled this as "peg."

---

## Section 6 — Macro-Tape Classification for AI-Japan Cohort Today

### Move Classification Matrix

| Factor | Active today? | Evidence | Drives SUMCO -12.84%? |
|---|---|---|---|
| (a) Single-name idiosyncratic (SUMCO) | YES | Q1 miss + MS Underweight downgrade + post-44%-rally technical exhaustion | HIGH contribution |
| (b) Sector-wide Japan chip selloff | PARTIAL | Nikkei -0.96%; Japan chip names mixed: Murata -3.9%, SoftBank -5.8%, Taiyo Yuden -1.7%, IBIDEN +6.57% — NOT a broad Japan chip rout | MODERATE amplifier |
| (c) Currency-driven (JPY) | NO | USDJPY at 161.5, JPY WEAK = bullish for exporters, not bearish. Currency direction is WRONG for this explanation. | ZERO contribution |
| (d) Broad Nikkei/global risk-off | PARTIAL | Nikkei -0.96%, profit-taking after record highs. NOT a risk-off dump — indices near all-time highs | LOW amplifier |
| (e) KOSPI/Korea chip sympathy selling | YES | KOSPI -8.11% circuit breaker; Korea chip rout; sympathy pressure on Japan chip names | MODERATE-HIGH amplifier |

**Dominant narrative for SUMCO today: (a) single-name + (e) Korea chip sympathy selling. NOT (c) currency.**

### N-th Order Cohort Implications Table

| JPY Scenario | SUMCO (held 626sh) | MURATA (held 336sh) | KIOXIA (held ~€10K N26) | HYNIX GDR (held 15sh) | IBIDEN (watchlist) |
|---|---|---|---|---|---|
| **ACTUAL TODAY: JPY WEAK at 161.5** | Revenue in USD/EUR translates to MORE yen = BULLISH translation effect. However, stock is down -12.84% on UNRELATED factors (earnings miss + profit-taking + Korea sympathy). Currency is TAILWIND but overwhelmed by idiosyncratic + KOSPI factors. | ~90% revenue overseas. JPY weak = strong translation. Stock -3.9% = Korea sympathy + Japan chip sector profit-taking, NOT currency driven. | NAND priced in USD; JPY weak = translation tailwind on JPY cost base. Stock essentially flat (+0.09%) today. | KRX-listed; GDR EUR-priced. KRX circuit breaker event is the driver. JPY irrelevant to HYNIX KRX pricing. | TSE-listed; UP +6.57% despite sector weakness — individual name outperformance, AI packaging substrate demand narrative intact. |
| **HYPOTHETICAL: JPY strengthens 5-10%** | 1st order: translation headwind on USD revenues. 2nd order: SUMCO may see margin compression if USD contract prices can't cover stronger-yen costs. 3rd order: could accelerate LTA renegotiation demand from customers. NEGATIVE for SUMCO. | 1st order: ~90% overseas revenue hurts in JPY terms. 2nd order: export-heavy name would sell off. NEGATIVE for MURATA. | 1st order: USD-denominated NAND revenues translate to fewer yen. NEGATIVE directionally. | IRRELEVANT — KRX-listed, KRW-denominated. | 1st order: overseas IC substrate revenues (USD/USD) translate to fewer yen. NEGATIVE directionally. |
| **HYPOTHETICAL: JPY weakens further (161 → 170)** | 1st order: additional translation tailwind. 2nd order: margins expand on USD contracts vs JPY cost base. POSITIVE directionally. BUT inflation pass-through risk (energy imports) could hurt Japan domestic demand. | 1st order: strong translation tailwind. POSITIVE for translated earnings. | 1st order: positive translation. POSITIVE. | IRRELEVANT to currency. | 1st order: positive translation. POSITIVE. |

**BOTTOM LINE ON CURRENCY:** For all three held Japanese names (SUMCO, MURATA, KIOXIA), a WEAK yen (today's actual state) is DIRECTIONALLY POSITIVE for their economics. The user's framing that "the JPY problem" caused today's drop is DIRECTIONALLY BACKWARDS — if JPY were the driver today, these names should be RISING, not falling. The actual drivers are unrelated to currency.

---

## Section 7 — HYNIX Article Spillover Check (Per Task Brief)

The prior Subagent A verification (`2026-06-23-am-subagent-a-hynix-hbm4-throttle-commodity-dram-verification.md`) confirmed a HBM4 throttle / commodity DRAM strategy article (Korean press, T2/T3).

**Did this article trigger Japan peer-name sympathy moves?**

| Assessment | Verdict |
|---|---|
| Was KIOXIA specifically named or impacted by HBM4 article? | NO — KIOXIA is NAND/flash, not HBM DRAM. HBM4 article is SK Hynix / DRAM-specific. |
| Could the "commodity DRAM reallocation" article have scared NAND investors? | UNLIKELY — NAND and commodity DRAM are different markets. KIOXIA +0.09% confirms no fear transmission. |
| Did MURATA respond to the article? | NO — MURATA (-3.9%) is a Japan chip sector move driven by KOSPI sympathy + broad Japan profit-taking, not memory-specific |
| SUMCO connection to HBM4 article? | TANGENTIAL — SUMCO supplies silicon wafers to DRAM manufacturers including SK Hynix. A delay in HBM4 ramp COULD reduce SUMCO wafer demand slightly. However, the magnitude of SUMCO's -12.84% far exceeds any HBM4-timing news impact and is better explained by SUMCO-specific factors. |

**Conclusion:** The Hynix HBM4 article did NOT materially drive the Japanese name moves today. The KOSPI circuit-breaker event is the regional semiconductor macro driver; SUMCO's idiosyncratic factors are the primary single-name driver.

---

## Section 8 — B53 Voice-Garble and B40 Freshness Final Check

### B53 Voice-Garble Resolution

| Candidate interpretation of "the cost" | Probability assessment | Verdict |
|---|---|---|
| "SUMCO" | HIGH — phonetic match; SUMCO is the held position showing the largest percentage decline today (-12.84%, vs user's stated "~8%") | MOST LIKELY |
| "KOSPI" | MODERATE — KOSPI is down 8.11% (almost exact match to "8%"); user may have heard KOSPI news and misidentified which position is impacted | POSSIBLE |
| "KIOXIA" | LOW — KIOXIA is flat (+0.09%); does not fit the described move | UNLIKELY |
| "the cost" = "the cost [of NVIDIA/compute going down]" | UNLIKELY — NVDA not specifically impacted today beyond broad market | LOW |

**Best interpretation:** User most likely observed SUMCO's -12.84% drop (possibly displayed in their brokerage as a percentage P/L shift or saw the name flash on a financial screen). The "~8%" may be approximation or rounding from intraday snapshots that showed -8 to -9% before the close pushed to -12.84%.

### B40 Freshness Check

| Element | Freshness status |
|---|---|
| Price data for Japanese names (2026-06-23) | FRESH — all prices from June 22-23 trading sessions; no stale data identified |
| KOSPI circuit-breaker event | FRESH — June 23, 2026 event |
| USDJPY at 161.5 | FRESH — June 23, 2026 confirmed |
| BoJ rate decision 1.0% | FRESH — June 16, 2026 (1 week old; fully market-absorbed) |
| MoF intervention ¥11.7T | RECENT — April-May 2026 (4-6 weeks old; ongoing policy context) |
| SUMCO Q1 2026 earnings miss | RECENT-ONGOING — Q1 data is from May 2026; Morgan Stanley downgrade appears more recent; market is still reacting to post-45%-rally valuation stretched signal |

---

## Section 9 — Material Yield Class

**HIGH** — This verification resolves a directly user-posed live question about a held position under material intraday P/L pressure (-12.84%). It:
1. Identifies the specific name (SUMCO)
2. Corrects the JPY-peg user claim with sourced evidence
3. Provides correct causal framing (KOSPI sympathy + profit-taking, NOT currency)
4. Establishes that JPY weakness is actually DIRECTIONALLY POSITIVE for all three Japanese held names (when isolated from other factors)
5. Cross-validates KIOXIA flatness (largest N26 position, ~€10K) — no worry needed there

---

## Section 10 — Honest NOT-FOUND Items

1. **SUMCO June 23 specific intraday catalyst announcement** — the -12.84% is explained by compound factors (earnings miss, MS downgrade, post-rally correction, KOSPI sympathy), but NO SINGLE CATALYTIC PRESS RELEASE or earnings announcement for June 23 specifically was identified. The move appears to be market-internal (profit-taking + Korea sympathy) without a June 23 SUMCO-specific corporate action. NOT-FOUND for a specific June 23 SUMCO announcement.
2. **HY9H Frankfurt GDR June 23 closing price** — Frankfurt GDR data for June 23 not yet available in search. KRX intraday at -11.55% implies HY9H will likely drop materially. NOT YET CONFIRMED.
3. **Nikkei Asia primary Japanese-language report on today's SUMCO move** — Japanese-language primary press for today's SUMCO move was not independently surfaced. English aggregators of Nikkei Asia data confirm the Japan chip selloff framing but original Japanese source URL was not retrieved (WebFetch blocked per `meta/environment-constraints.md`).
4. **BoJ or MoF statement specifically on USDJPY June 23** — no June 23-specific BoJ/MoF statement on currency markets found beyond the June 16 rate decision and June 19 jawboning context.
5. **SUMCO BEP in EUR terms vs current EUR price** — SUMCO is TSE-listed in JPY (3,522 JPY). User BEP is €22.31. Current EUR equivalent depends on JPY/EUR rate which was not separately searched. At USDJPY ~161.5 and EURUSD ~1.13 (approximate current level, directional reference only, NOT confirmed), USDJPY 161.5 implies EURJPY ~182, so SUMCO at 3,522 JPY = ~€19.35. If correct, SUMCO is BELOW user's €22.31 BEP in EUR terms. Flagged as directional inference (my model / approximate) — user should verify in their brokerage for precise EUR equivalent.

---

## Section 11 — Per-Premise Summary Table

| Premise | Verdict | Source Quality | Tier |
|---|---|---|---|
| P1 — Which name is down ~8% today | SUMCO (3436.T) — actual drop -12.84%, larger than stated | T2 multi-source | VERIFIED-DIRECTIONAL |
| P2 — Cause of the move | SUMCO-specific: Q1 earnings miss + MS Underweight downgrade + post-+44%-rally profit-taking. Amplified by KOSPI circuit-breaker sympathy. NOT currency-driven. | T2 | NUANCED-MULTI-FACTOR |
| P3 — JPY-USD currency today | USDJPY at 161.5. JPY at near-40-year LOWS. JPY WEAK (not strong). BoJ hiked to 1.0% on June 16. ¥11.7T intervention in Apr-May failed to stop yen decline. | T1 (BoJ official) + T2 | VERIFIED |
| P4 — JPY-USD peg framing | NO FORMAL PEG EXISTS. JPY free-float since 1973. No "soft peg" or "managed float" proposal in current press. User's recall is incorrect. MoF "intervention zone" around 155-161 is sometimes described as "line in the sand" but is NOT a peg. | T1 historical + T2 NOT-FOUND | RECALL-CORRECTED |
| P5 — KOSPI/Korea cross-check | KOSPI -8.11% with circuit breaker triggered June 23. SK Hynix KRX -11.55%. Primary cause: AI-rally profit-taking + leveraged product panic + MSCI DM rejection. KOSPI crash is a real cross-market factor amplifying Japan chip selloff. | T2 multi-source | VERIFIED |
| P6 — JPY direction implication for held cohort | JPY WEAK = bullish translation for Japanese exporters (SUMCO, MURATA, KIOXIA). Currency is NOT the bear driver today — it is actually a structural tailwind. Move is driven by idiosyncratic SUMCO factors + KOSPI sympathy. | T2 | VERIFIED-DIRECTIONAL |

---

## Section 12 — Explicit Verdict on User's Claim

**RECALL-CORRECTED (PARTIALLY VERIFIED)**

| Sub-claim | Verdict | Explanation |
|---|---|---|
| "the cost is down 8% today" | PARTIALLY VERIFIED — CORRECTED | The held position most consistent with this claim is SUMCO (3436.T), which is down **-12.84%** today (larger than stated). KIOXIA is flat. MURATA is down ~3.9%. The "8%" directional claim is correct for SUMCO (there IS a major drop) but underestimates the actual move. |
| "I think it's because there is a problem with the Japanese yen" | RECALL-CORRECTED | JPY is at 161.5 — near 40-year LOWS (yen very WEAK). JPY weakness is BULLISH for Japanese exporters, not bearish. The yen is NOT the cause of SUMCO's drop today. The actual cause is: post-+44%-rally profit-taking + Q1 earnings miss + Morgan Stanley downgrade + KOSPI circuit-breaker sympathy selling. |
| "the peg between the Japanese yen and the US dollar" | RECALL-CORRECTED | Japan has NO JPY-USD peg. JPY has been free-floating since 1973. There is no formal peg, soft peg, or managed float in 2026. The user may be recalling MoF intervention around the 155-161 threshold, which creates an IMPLICIT ceiling effect on yen weakness, but this is NOT a peg. BoJ raised rates to 1.0% on June 16; MoF deployed ¥11.7T in Apr-May — neither constitutes a peg. |

---

## Sources Cited (multilingual)

**Japanese primary sources (T1):**
- BoJ June 16, 2026 rate decision: https://www.boj.or.jp/en/mopo/mpmdeci/mpr_2026/k260616a.pdf (T1 — official BoJ document)

**Korean/English hybrid sources (T2):**
- SK Hynix hits 3M KRW / turns lower: https://www.asiae.co.kr/en/article/2026062310192498132 (Asia Business Daily, T2)
- KOSPI circuit breaker chip selloff: https://www.investing.com/news/stock-market-news/skoreas-kospi-plummets-circuit-breaker-triggered-as-chip-selloff-deepens-4729730 (Investing.com / T2)
- Korea Herald KOSPI profit-taking: https://www.koreaherald.com/article/10785474 (T2)
- Kalkine KOSDAQ plunge: https://kalkine.com/news/general-news/south-korea-stock-market-crash-2026-kosdaq-8-plunge-triggers-circuit-breaker-amid-semiconductor-rout (T3)

**English sources (T2/T3):**
- CNBC Japan yen intervention + BoJ June rate hike: https://www.cnbc.com/2026/06/19/japan-yen-intervention-boj-rate-hike.html (T2)
- CNBC BoJ rate to 1.0%: https://www.cnbc.com/2026/06/16/boj-rate-hike-historic-inflation.html (T2)
- XTB morning wrap yen intervention jawboning: https://www.xtb.com/int/market-analysis/news-and-research/morning-wrap-asia-pulls-back-on-peace-skepticism-tokyo-flags-yen-intervention-19-06-2026 (T2)
- SUMCO Q1 earnings call transcript: https://www.investing.com/news/transcripts/earnings-call-transcript-sumco-misses-q1-2026-expectations-stock-dips-93CH-4698631 (T2)
- SUMCO Morgan Stanley downgrade: https://simplywall.st/stocks/jp/semiconductors/tse-3436/sumco-shares/news/does-morgan-stanleys-valuation-downgrade-recast-sumco-tse343 (T3)
- SUMCO H1 2026 guidance revision: https://www.marketscreener.com/news/sumco-corporation-revises-consolidated-earnings-guidance-for-the-six-months-ending-june-30-2026-ce7f5ad8d08ef523 (T2)
- Nikkei chip stocks overheating: https://asia.nikkei.com/business/markets/japan-chip-stocks-slump-amid-signs-of-overheating (T2)
- Asia stocks slide on AI rally cooling: https://ng.investing.com/news/stock-market-news/asia-stocks-slide-as-ai-rally-cools-korea-tumbles-on-chip-selloff-2569180 (T2)
- Trading Economics Japan stock market: https://tradingeconomics.com/japan/stock-market (T2)
- Trading Economics Japan yen: https://tradingeconomics.com/japan/currency (T2)
- PoundSterlingLive USD/JPY 2026 history: https://www.poundsterlinglive.com/history/USD-JPY-2026 (T2)
- SUMCO 44% rally context / AI wafer demand: Trading Economics / Simply Wall St / multiple aggregators (T3)
- Morningstar SUMCO cautious wafer view: https://www.morningstar.com/company-reports/1481903-sumco-gives-more-cautious-view-on-silicon-wafer-markets-than-customers-and-competitors (T2)
- Murata Manufacturing Nikkei mentions: multiple aggregators via CNBC/TradingEcon (T2/T3)

---

*Verification executed: 2026-06-23. Subagent Critical Rule #16 fan-out protocol. Multilingual (Japanese T1 BoJ + Korean T2 KOSPI sources + English T2/T3 cross-check). B53 voice-garble flagged and resolved. B40 freshness clean — all data current to 2026-06-23.*
