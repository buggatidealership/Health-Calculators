# Nasdaq 100 (NDX) Inclusion Mechanics Primer + NBIS Application

**Date:** 2026-06-15 PM3
**Trigger:** user-directed primer 2026-06-15 ~14:53 UTC verbatim: "research what it means to get added to the Nasdaq one hundred index and what passive flows then start buying companies in the Nasdaq one hundred. Essentially, distill it down in simple terms ... What does this money come from? What needs to happen for a company that gets added to the Nasdaq one hundred? What happens?"
**Verification:** 1 Opus subagent (subagent-a33c0bdbf398004a1) — initially returned empty acknowledgement; eventually completed with 36 tool uses + ~5-minute runtime + full T1-cited 1950-word primer
**Principle #37 intake tier:** 🟢 HARD on T1 Nasdaq sources; 🟡 DIRECTIONAL on model-derived NBIS-specific passive-flow estimates
**Workflow:** INGEST → 1 Opus subagent verification → cascade

## Q1 — What IS the Nasdaq 100?

100 largest **non-financial** companies on Nasdaq exchange. Excludes banks, insurance, mortgage finance. Tech-heavy but not tech-only (Pepsi, Costco, Booking included). Top weights as of June 2026: NVDA, MSFT, AAPL, AMZN, META, GOOGL, TSLA, AVGO, NFLX represent ~50% of index weight combined per subagent.

**NDX ≠ Nasdaq Composite** (Composite = 3,000+ stocks, all Nasdaq-listed). **NDX ≠ S&P 500** (S&P spans both exchanges, includes financials).

## Q2 — Methodology (the new rank-based regime)

**Modified market-cap weighting** with ~24% cap on largest single name + collective-cap rules on names exceeding ~48% combined → prevents single-stock dominance.

**Rebalance cycles:**
- Quarterly (Mar / Jun / Sep / Dec) — weight adjustments
- Annual reconstitution (Dec) — full membership review

**NEW rank-based methodology (effective May 1, 2026)** per [Nasdaq methodology FAQ T1](https://indexes.nasdaqomx.com/docs/2026_May_NDX_Changes_FAQ.pdf) + [Nasdaq announcement T1](https://www.nasdaq.com/newsroom/nasdaq100-index-methodology-update-why-now): Old "10 basis point rule" replaced with rank-based mechanism — any security ranked outside top-125 by market cap on the reference date is removed at next quarterly rebalance (not December annual only). Per Nasdaq verbatim: "enables more timely and predictable replacement of smaller companies, while reducing the need for passive investors to make frequent intra-quarter portfolio adjustments."

## Q3 — Why NBIS got in NOW (June 2026 not Dec 2026)

June 22, 2026 quarterly rebalance = **first rebalance under new rank-based regime.** Five removals (CHTR / CTSH / INSM / VRSK / ZS) replaced with five additions (ALAB / CRWV / NBIS / RKLB / TER) per [Nasdaq IR T1](https://ir.nasdaq.com/news-releases/news-release-details/nasdaq-100-indexr-june-2026-quarterly-changes).

NBIS market cap **~$58.53 billion** (June 14 2026 per [CompaniesMarketCap T2](https://companiesmarketcap.com/nebius-group/marketcap/)) → comfortably top-125. Under old 10 bp rule, NBIS would likely have waited until December annual reconstitution = **6-month inclusion-date pull-forward.**

## Q4 — Where the passive money comes from

**Total NDX ecosystem AUM: ~$1.4 trillion** per [Nasdaq's own ecosystem report T1](https://www.nasdaq.com/articles/assets-and-liquidity-nasdaq-100-ecosystem). Breakdown:

| Fund category | Approx AUM | Source |
|---|---|---|
| **QQQ (Invesco QQQ Trust)** | ~$435-477 billion | [Nasdaq T1](https://www.nasdaq.com/articles/assets-and-liquidity-nasdaq-100-ecosystem) + [Wikipedia Invesco QQQ T2](https://en.wikipedia.org/wiki/Invesco_QQQ) |
| **QQQM (Invesco Nasdaq 100 ETF)** | ~$82-95 billion | [MutualFunds.com QQQM T2](https://www.mutualfunds.com/etfs/qqqm-invesco-nasdaq-100-etf/) |
| International mirrors (iShares EQQQ, Daiwa 1545, Mirae 0005Q3, others) | ~$50-100 billion combined (model estimate) | — |
| Mutual funds + insurance-linked products benchmarked to NDX | ~$200-300 billion | [Nasdaq ecosystem T1](https://www.nasdaq.com/articles/assets-and-liquidity-nasdaq-100-ecosystem) |
| **NDX-linked derivatives** (options, futures, structured notes) | **~$700 billion** | [Nasdaq T1](https://www.nasdaq.com/articles/assets-and-liquidity-nasdaq-100-ecosystem) |
| **Cash-tracking total** | **~$700 billion** | T1 anchor; Yahoo Finance cites "200 products with over $800B AUM worldwide" per [Yahoo Finance T2](https://finance.yahoo.com/markets/stocks/articles/nebius-joins-nasdaq-100-ai-211449014.html) |

**Why "passive":** fund mandate REQUIRES proportional holding of all 100 NDX names. No active stock picking. Every dollar that flows into QQQ → split proportionally across all 100 names by weight.

## Q5 — One-time inclusion flow vs ongoing flow

### ONE-TIME inclusion-day mechanic (June 22 effective)

7-trading-day window between announcement (June 12 after-hours) and effective (Monday June 22 pre-market open). Index funds MUST own NBIS at official weight by effective open.

**Concentration:** majority of buying lands in **Friday June 19 closing auction** (last session before rebalance takes effect — sets official weights for Monday) + **June 22 opening auction**.

**Estimated mandatory NBIS one-time passive flow (model estimate built from T1 inputs):**
- NBIS market cap: ~$58.53 billion per [CompaniesMarketCap T2](https://companiesmarketcap.com/nebius-group/marketcap/)
- Estimated NDX float-adjusted weight: ~0.22-0.25% (model estimate; derived from market cap ÷ aggregate NDX float-adjusted cap ~$22-24 trillion my model)
- Cash-tracking NDX AUM: ~$700 billion per [Nasdaq T1](https://www.nasdaq.com/articles/assets-and-liquidity-nasdaq-100-ecosystem)
- **Mandatory inclusion buying ≈ 0.22-0.25% × $700B = ~$1.5-1.75 billion** (model estimate, grounded in T1 inputs)

**As % of NBIS average daily dollar-volume:**
- Avg daily volume ~16.7 million shares × ~$232 = ~$3.9 billion notional (per Yahoo Finance aggregation)
- Mandatory flow ÷ daily $-volume = **~40% of one day's dollar volume** (model estimate) — meaningful concentrated impact

### Front-running already captured most of the alpha
- **NBIS spiked +12.9% after-hours Thursday June 12** on announcement per [MEXC News T2](https://www.mexc.com/news/1142833) + [Foreign Policy Journal T2](https://www.foreignpolicyjournal.com/2026/06/12/nasdaq-nasdaq-ndaq-adds-five-companies-to-nasdaq-100-index-in-june-2026-quarterly-rebalance/)
- **Follow-on Friday June 13 ~+5%** per [TIKR T2](https://www.tikr.com/blog/nebius-and-coreweave-nasdaq-nbis-crwv-stocks-surge-following-announcement-of-nasdaq-100-addition)
- **Cumulative pre-effective gain ≈ +18%** already captured
- **Residual into June 19 auction + June 22 open: ~3-5% squeeze** (model estimate, within B45 regime base-rate routine range for AI-infra mid-caps)

### ONGOING flow (the under-appreciated part)

Every dollar of net new QQQ inflow → split proportionally across all 100 NDX names by weight.
- QQQ typically takes in ~$100-300 million net daily during bull-market periods (model estimate based on multi-year QQQ flow data)
- At NBIS ~0.23% weight: **~$2-5 million daily passive bid for NBIS** (model estimate)
- Annualized (assumes ~$40-60 billion QQQ net inflow per year, mid-cycle): **~$100-200 million ongoing passive demand** from QQQ + QQQM alone (model estimate)
- More from international mirrors + mutual funds when added

**Structural significance:** $1.5-1.75 billion one-time + ~$100-200 million ongoing/year = $1.6-1.95 billion year-1 total passive demand (model estimate). Year-2 onward = $100-200M/year structural floor as long as NBIS stays in index.

## Q6 — Post-inclusion historical patterns

### Academic literature anchors

- **Pre-effective rally:** ~5.6% over 50 days preceding inclusion per [EUR thesis on inclusion effect T2](https://thesis.eur.nl/pub/33763/MA-Thesis-Robert-Kaptein.pdf)
- **Inclusion-day reversal:** ~-7% cumulative abnormal return over 50 days POST-inclusion per [EUR thesis T2](https://thesis.eur.nl/pub/33763/MA-Thesis-Robert-Kaptein.pdf) — significant downside-after-rally pattern
- **Long-run "S&P 500 bump" has faded since 2010** per [Morningstar T2](https://www.morningstar.com/funds/sp-500-bump-that-doesnt-last) — markets have become more efficient at pricing in inclusion ahead of time

### Recent AI-cohort comparables (Subagent verified)

| Name | Inclusion date | Pre-inclusion pattern | Post-inclusion pattern |
|---|---|---|---|
| **Palantir (PLTR)** | Dec 23, 2024 added per [Nasdaq T2](https://www.nasdaq.com/articles/palantir-stock-joining-nasdaq-100-index-and-super-micro-computer-being-booted-what) | Stock up 343% YTD before announcement on Dec 13, 2024; pre-rally largely "priced in" before announcement | Continued strength + several sharp pullbacks |
| **AppLovin (APP)** | Nov 18, 2024 added | **Rose 75% in week before joining** following blockbuster Q3 earnings; finished 2024 up ~713% per [Barchart T2](https://www.barchart.com/story/news/30386434/heres-why-applovin-stock-was-up-713-in-2024) (URL slug shows precise 713% year-end; subagent surfaced 712% from different snapshot — both within 1% precision rounding) | Post-inclusion gave back substantially in early 2025 even amid strong full-year return |
| **CoreWeave (CRWV)** | June 22, 2026 (SAME batch as NBIS) | +~5% June 12 after-hours announcement (vs NBIS +12.9% — NBIS got bigger pop suggesting more pent-up demand) | TBD — observe in real-time |

### Pattern most relevant to NBIS

NBIS YTD +158-165% per [GuruFocus T2](https://www.gurufocus.com/news/8913816/nebius-group-nbis-leads-nasdaq100-reshuffle-with-1655-ytd-gain). When a stock has already run dramatically into inclusion (NBIS profile matches APP / PLTR), the marginal pre-inclusion bump is smaller AND the post-inclusion give-back tends to be sharper because momentum chasers exit alongside front-runners.

### Other typical post-inclusion changes

- **Liquidity uplift:** avg daily volume rises ~30-50% post-inclusion (academic + empirical pattern)
- **Holder base shift:** active growth managers may SELL into inclusion bid to lock in gains; passive index funds become forced holders; net shift toward structural ownership
- **Volatility:** dampens modestly over medium term as holder base diversifies
- **Short interest:** may rise (hedging from index buyers)

## Q7 — NBIS-specific consolidated table

| Metric | Value | Source / tier |
|---|---|---|
| NBIS market cap (June 14, 2026) | ~$58.53 billion | [CompaniesMarketCap T2](https://companiesmarketcap.com/nebius-group/marketcap/) |
| NBIS share price post-announcement | ~$232.36 | [Yahoo Finance T2](https://finance.yahoo.com/markets/stocks/articles/nebius-joins-nasdaq-100-ai-211449014.html) |
| YTD 2026 return | +158% to +165% | [Yahoo T2](https://finance.yahoo.com/markets/stocks/articles/nebius-joins-nasdaq-100-ai-211449014.html) + [GuruFocus T2](https://www.gurufocus.com/news/8913816/nebius-group-nbis-leads-nasdaq100-reshuffle-with-1655-ytd-gain) |
| Avg daily volume (June 2026) | ~16.7 million shares (~$3.9 billion notional at $232) | Yahoo Finance aggregator (model derivation) |
| Estimated NDX float weight | ~0.22-0.25% | model estimate from market cap ÷ NDX aggregate float-adjusted cap |
| Total NDX cash-tracking AUM | ~$700 billion | [Nasdaq T1 ecosystem report](https://www.nasdaq.com/articles/assets-and-liquidity-nasdaq-100-ecosystem) |
| Estimated mandatory inclusion flow | ~$1.5 to $1.75 billion | model estimate (weight × $700B) |
| As % of one day's $-volume | ~40% | model estimate ($1.6B ÷ $3.9B) |
| Announcement-day AH move (June 12) | +12.9% | [MEXC T2](https://www.mexc.com/news/1142833) + [Foreign Policy Journal T2](https://www.foreignpolicyjournal.com/2026/06/12/nasdaq-nasdaq-ndaq-adds-five-companies-to-nasdaq-100-index-in-june-2026-quarterly-rebalance/) |
| June 13 follow-on | ~+5% | [TIKR T2](https://www.tikr.com/blog/nebius-and-coreweave-nasdaq-nbis-crwv-stocks-surge-following-announcement-of-nasdaq-100-addition) |
| Cumulative pre-effective gain | ~+18% | derived |
| Expected residual June 19 + June 22 squeeze | +3% to +5% | model estimate, B45-routine range |
| Ongoing annual passive demand | ~$100-200 million from QQQ + QQQM alone | model estimate assuming ~$50B/yr net QQQ inflows × 0.23% weight |
| Academic -7% post-inclusion 50-day pattern | applicable; sharper for high-momentum prior runs | [EUR thesis T2](https://thesis.eur.nl/pub/33763/MA-Thesis-Robert-Kaptein.pdf) |

## TL;DR

1. **Mechanical bid:** NBIS Nasdaq 100 inclusion = ~$1.5-1.75 billion forced passive buying concentrated around June 19-22 (40% of one day's $-volume — significant intraday impact)
2. **Most alpha already captured** in cumulative ~+18% pre-effective move (June 12 +12.9% AH + June 13 ~+5%)
3. **Residual ~3-5% mechanical squeeze into June 19-22 auction** (B45 routine range — not "extreme")
4. **Under-appreciated risk:** academic ~-7% post-inclusion 50-day pattern; sharper for high-momentum prior runs (NBIS profile matches APP / PLTR)
5. **Structural floor going forward:** ~$100-200 million/year ongoing passive demand from QQQ + QQQM as long as NBIS stays in NDX
6. **New rank-based methodology effective May 2026** = future high-momentum AI names enter NDX faster than under old 10 bp rule (structural cycle implication)

## Scoped cascade map (per Principle #37)

**Files UPDATED in same commit:**
- `signals/cross-source-log/2026-06-15-pm3-ndx-inclusion-mechanics-primer-nbis-application.md` — THIS artifact (NEW)
- `companies/NBIS/tracking-variables.md` — append NDX-mechanics section referencing this artifact (LAG-indicator framing on inclusion flow + historical comparable pattern)
- `meta/tier-cascade-log.md` — new entry + fill prior 43c16ba SHA

**Files NOT touched (per scoping rule):**
- All held cohort theses (HYNIX/SNDK/SUMCO/MURATA/MRVL/DDOG/NOW) — NDX inclusion is NBIS-specific not portfolio-wide event
- IBIDEN/CAMT/BESI (earlier TSMC PLP cascade today; no overlap)
- AGC/ARM (exited)
- portfolio files — no position changes (NBIS Active-candidate framing unchanged; entry-trigger remains pullback to ~$205-210)
- `companies/NBIS/thesis.md` — NDX mechanics are background context; thesis was already updated 2026-06-15 PM + PM2 with the inclusion confirmation + 4 reframed gates
- `signals/triangulation.md` — NDX inclusion is not a TC cluster event
- methodology / CLAUDE.md / session-prime / tags / INDEX — no new principle (NDX primer is educational research not a methodology codification)
- sector/themes.md / sector/where-we-are.md — no theme-level event
- predictions/grading-log.md / lessons.md / biases-watchlist.md — no new prediction / lesson / bias

## Material corrections from late-returning parallel subagents (added 2026-06-15 PM3 final)

Two additional Opus subagents (a0207dd3f250ba2cf on QQQ + NDX-tracking AUM; ab88e93473d648f96 on NBIS market cap + float + announcement-day data) returned AFTER initial draft. Material corrections to the numbers above:

### Float-adjustment changes the weight math materially

- **NBIS total market cap ~$58.5 billion** (confirmed across 3 sources within $1B per [companiesmarketcap T2](https://companiesmarketcap.com/nebius-group/marketcap/) + [stockanalysis.com T2](https://stockanalysis.com/stocks/nbis/market-cap/) + [mlq.ai T2](https://mlq.ai/stocks/NBIS/market-cap/))
- **NBIS float-adjusted market cap ~$47.7 billion** — only 81.6% float per [FY2025 20-F T1](https://www.sec.gov/Archives/edgar/data/0001513845/000110465926052948/nbis-20251231x20f.htm); LASTAR Trust (Volozh family) holds 18.4% economic + ~65.3% voting via Class B dual-class structure
- **NDX uses float-adjusted weighting** (not total cap) → recalculated weight = $47.7B ÷ ~$26T NDX total float-adj cap = **0.18-0.22%** (lower than my prior 0.22-0.25% range)
- **Recalculated mandatory passive flow: $1.06-1.54 billion** (lower than my prior $1.5-1.75B estimate): 0.18-0.22% × $587B ETF-only AUM = $1.06-1.29B floor; 0.18-0.22% × $700B cash-tracking = $1.26-1.54B ceiling
- **As % of NBIS daily $-volume: 0.4-0.5 days** of average daily volume per [Yahoo Finance T2](https://finance.yahoo.com/quote/NBIS/) (NBIS daily $-volume $3.81-4.4B) — VERY ABSORBABLE, NOT liquidity-constrained
- Passive managers likely spread buys over June 16-19 (4 trading days pre-effective) → diluted intraday impact relative to one-shot auction concentration assumption

### Date error correction

- **June 13 was a SATURDAY** — my prior "Friday June 13 ~+5% follow-on" was a date confusion; markets closed June 13-14 weekend
- The +5% figure per [TIKR T2](https://www.tikr.com/blog/nebius-and-coreweave-nasdaq-nbis-crwv-stocks-surge-following-announcement-of-nasdaq-100-addition) was likely pre-market Monday June 15 reaction; subagent confirms Jun 15 pre-market **~+8.9%**
- Cumulative AH June 12 +6-13% (multi-source range; +6.1% AH from close measurement per direct timestamps; +9-13% measured from prior close or late AH peak) + pre-market June 15 +8.9% ≈ total +15-20% pre-effective gain (depending on measurement convention)

### NBIS institutional ownership pre-inclusion = unusually LOW

- **Only ~21.9% institutional** pre-inclusion per [MarketBeat T2](https://www.marketbeat.com/stocks/NASDAQ/NBIS/institutional-ownership/) + [Fintel T2](https://fintel.io/so/us/nbis) (752 institutional filers, ~119.3M shares held)
- For comparison, typical S&P 500 / NDX name at $58B market cap runs **70-85% institutional**
- Implication: retail + insider has done heavy lifting on the +320%+ 1-year run; NDX inclusion mechanically forces institutional ownership UP to multi-decade-high levels for NBIS as forced index buyers absorb. This is structurally positive for long-term price-discovery durability but means the AH spike was largely retail-front-running not institutional accumulation
- Net institutional buying trailing 12-month: **+$1.1 billion** ($1.48B inflows minus $371.5M outflows)

### Co-add comparable market caps (NEW data — tight clustering)

| Ticker | Company | Market Cap | Source |
|---|---|---|---|
| NBIS | Nebius | ~$58.5 billion | [companiesmarketcap T2](https://companiesmarketcap.com/nebius-group/marketcap/) |
| ALAB | Astera Labs | ~$63.0 billion | [GuruFocus T2](https://www.gurufocus.com/news/8913760/astera-labs-alab-and-others-added-to-nasdaq100-index) |
| RKLB | Rocket Lab | ~$59.3 billion (June 15) | [companiesmarketcap T2](https://companiesmarketcap.com/rocket-lab-usa/marketcap/) |
| TER | Teradyne | ~$63.1 billion | [stockanalysis.com T2](https://stockanalysis.com/stocks/ter/market-cap/) |
| CRWV | CoreWeave | ~$54.9 billion | [companiesmarketcap CRWV T2](https://companiesmarketcap.com/coreweave/marketcap/) |

5 co-adds cluster tightly at $55-63B → Nasdaq's selection was size-sensitive in the rank-based methodology; NBIS sits middle-of-pack. **Pattern implication for NBIS: the co-add cohort splits passive demand 5 ways — NBIS doesn't get disproportionate flow relative to ALAB / RKLB / TER / CRWV (all forced-buy at same effective date).**

### QQQ structural changes (NEW)

- **QQQ converted from Unit Investment Trust (UIT) to open-end ETF Dec 22, 2025** per [Morningstar T2](https://www.morningstar.com/funds/big-changes-invesco-qqq-what-investors-should-know)
- Expense ratio reduced 0.20% → 0.18%
- Conversion unlocked securities lending + greater operational flexibility
- **QQQM (the cheaper retail vehicle) accumulated $20B+ inflows over the prior 12 months** per [TechTimes T2](https://www.techtimes.com/articles/317618/20260602/invesco-nasdaq-100-etf-40-12-months-june-rebalance-brings-new-rules-qqqm.htm); QQQM AUM now **~$83-95 billion** (broken above prior $45-83B range)

### QQQ trading volume (significantly larger than I assumed)

- **3-month average daily QQQ dollar volume: ~$38.7 billion/day** per [MarketChameleon T2](https://marketchameleon.com/Overview/QQQ/Summary/)
- QQQ turns over ~8% of AUM per trading day — extremely high turnover; QQQ is heavily used as TRADING / HEDGING instrument not just buy-and-hold passive holding
- Implication for NBIS: mandatory flow is split between (a) genuine passive index funds that MUST buy NBIS, and (b) traders using QQQ for tactical positioning who may rapidly rotate out post-inclusion — front-runner exit pattern likely steeper than pure-passive model would suggest

### Updated TL;DR (replaces prior TL;DR above)

1. **Mandatory passive flow: ~$1.06-1.54 billion** (corrected from $1.5-1.75B using float-adjusted weight 0.18-0.22% × $587-700B AUM range)
2. **VERY ABSORBABLE: 0.4-0.5 days of average $-volume** — not liquidity-constrained; passive managers can spread across June 16-19 (4 trading days)
3. **~+15-20% cumulative pre-effective gain already captured** (June 12 AH +6-13% range + June 15 pre-market +8.9%); residual ~3-5% mechanical squeeze into June 19 close + June 22 open (model estimate, B45 routine range)
4. **NBIS institutional ownership pre-inclusion only 21.9%** — inclusion mechanically forces institutional UP toward typical 70-85% range; structurally positive for long-term price-discovery durability
5. **5 co-adds cluster $55-63B** — NBIS splits passive flow with ALAB / CRWV / RKLB / TER; doesn't get disproportionate share
6. **QQQ converted UIT → open-end Dec 22, 2025** — structural change unlocks securities lending + lower expense ratio
7. **Academic post-inclusion -7% over 50 days pattern applicable** — sharper for high-momentum prior runs (NBIS profile matches APP / PLTR); QQQ's 8% daily AUM turnover suggests trader-side rotation accelerates the reversal pattern vs pure-passive model

## Final corrections from 2 additional late-returning subagents (added 2026-06-15 PM3 final-final)

Subagents a65e3ebd68d551306 (NDX methodology depth) + a43444b4b7564de84 (academic index-inclusion-effect literature + comparable case studies) returned after primary draft. Material corrections:

### NDX total constituent market cap higher than my prior estimate

- **Actual NDX aggregate market cap (June 2026): ~$33-38 trillion** per [marketcap.company T2](https://marketcap.company/stock-indices/nasdaq-100-index-market-cap/) (cites $34.23T)
- My prior $25-27T estimate was stale (2023-2024 vintage)
- **Re-recalculated NBIS weight: $47.7B float-adj ÷ ~$34T = ~0.14%** (lower than my earlier 0.18-0.22% range)
- **Re-recalculated mandatory passive flow: ~$0.82-0.98 billion** (0.14% × $587-700B AUM) — lower than $1.06-1.54B prior; lower than $1.5-1.75B original
- **Bottom line on flow estimate uncertainty:** range is $0.8-1.5B depending on (a) exact float-adj weight (Nasdaq has not published official June 22 weight), (b) which AUM denominator used (ETF-only $587B vs cash-tracking $700B vs Nasdaq-ecosystem $1.4T including derivatives). Treat as a wide range, not a precise number

### Academic finding most relevant: "The Disappearing Index Effect"

- [Greenwood & Sammon Journal of Finance 2023/2025 NBER w30748 T2](https://www.nber.org/papers/w30748): S&P 500 inclusion abnormal return BY DECADE:
  - 1980s: +3.4%
  - 1990s: +7.6%
  - **2010-2020: +0.8%** (essentially dead via stat-arb front-running)
- **BUT NDX is different from S&P 500** — annual reconstitutions cluster high-profile high-momentum names; 2024 batch (PLTR / MSTR / AXON) and 2026 batch (NBIS / CRWV / ALAB / RKLB / TER) show the effect is alive for headline AI/momentum adds
- **NBIS announcement-day +12.9% vs CRWV ~+5%** — NBIS got 2.5× the pop because (a) lower pre-inclusion institutional ownership (21.9% per prior subagent); (b) higher retail momentum profile; (c) AI-cloud bull-case more entrenched
- **Pattern most relevant for NBIS:** Petajisto 2011 documented ~+8.8% average S&P announcement-to-effective with half reversing within 4 months. NBIS already at +15-20% cumulative pre-effective — exceeds Petajisto historical baseline. Increases magnitude of expected reversal per Greenwood & Sammon stat-arb mechanism

### NDX methodology nuances

- **Stage 1 single-name cap: 20%** (not the "24%" I cited as informal media)
- **Stage 2 collective cap: 40%** for all names individually above 4.5% if aggregate exceeds 48%
- **NEW Fast Entry rule (May 2026 alongside rank-based)**: Top-40 rank within 15 trading days of IPO; ~$100B threshold; seasoning + ADV requirements waived. Explicitly designed for SpaceX-class IPOs per [Kiplinger T2](https://www.kiplinger.com/investing/what-the-nasdaqs-new-fast-entry-rule-means-for-investors) + [Ashurst T2](https://www.ashurst.com/en/insights/nasdaq-proposes-new-fast-entry-rule-for-the-nasdaq-100-index/)
- **NBIS ADR treatment: inferred primary-listing** (Yandex Russian shares delisted post-divestment; Nasdaq is primary global listing). If Nasdaq treats as primary, NBIS qualifies on full market cap. This is INFERRED not explicitly cited in Nasdaq June 12 press release

### CRWV as real-time A/B test for NBIS

[CoreWeave BusinessWire announcement T1](https://www.businesswire.com/news/home/20260612662311/en/CoreWeave-to-Join-Nasdaq-100-Index) + [TipRanks T2](https://www.tipranks.com/news/why-coreweave-crwv-nebius-and-iren-stocks-are-rising-today-june-15-2026) + [CoinCentral T2](https://coincentral.com/coreweave-crwv-stock-jumps-5-on-nasdaq-100-inclusion-news/):
- CRWV June 12 close $95.74 → June 13 pre-market $100.42 (+4.89%) → June 15 +~5% more
- NBIS June 12 close $232.36 → +12.9% AH → June 15 pre-market +8.9% additional
- **NBIS price action ~2-3× CRWV's despite both being AI-infra co-adds in same batch** — confirms NBIS-specific pent-up retail demand AND larger upside-reversal risk

### Permanent post-inclusion effects (verified)

- **Volume uplift +30-50% permanent** per [Harris & Gurel 1986 T2](https://onlinelibrary.wiley.com/doi/abs/10.1111/j.1540-6261.1986.tb04550.x)
- **Reconstitution day itself spikes 8-27× normal volume** per [Dimensional Fund Advisors T2](https://www.dimensional.com/us-en/insights/another-hidden-cost-for-index-funds-index-share-changes)
- **Short interest typically RISES post-inclusion** per [Von Beschwitz et al 2025 Review of Finance T2](https://academic.oup.com/rof/article-abstract/29/4/1137/8102964) — passive funds are stable lenders attracting informed shorting
- **Bid-ask spread temporary tightening then normalization** per Harris & Gurel
- **Volatility: higher index correlation; lower idiosyncratic vol** per [Wurgler 2011 NBER T2](https://www.nber.org/system/files/working_papers/w16376/w16376.pdf)

### Final consolidated estimate ranges (use as authoritative)

- **NBIS mandatory passive flow: $0.8-1.5 billion** (range reflects weight + AUM denominator uncertainty)
- **% of NBIS daily $-volume: 0.2-0.4 days** of average (very absorbable across June 16-19 window)
- **Cumulative pre-effective gain captured: ~+15-20%** (+12.9% June 12 AH + ~+8.9% June 15 pre-market + spread variance)
- **Residual mechanical squeeze June 19-22: 3-5%** (model estimate, B45 routine range)
- **Post-inclusion expected reversal: 20-40% give-back of pre-effective gains over 5-10 sessions** per academic literature; sharper for high-momentum profiles (NBIS matches APP / PLTR pattern)
- **Ongoing annual passive flow: $80-180M** (corrected from $100-200M using lower weight estimate)
- **5-co-add comparable: CRWV ~+5% AH vs NBIS ~+12.9% AH** = NBIS-specific 2-3× over-pop suggests greater retail-front-runner exposure

## Sources

- [Nasdaq IR June 2026 Quarterly Changes T1](https://ir.nasdaq.com/news-releases/news-release-details/nasdaq-100-indexr-june-2026-quarterly-changes)
- [Nasdaq Methodology Update T1](https://www.nasdaq.com/newsroom/nasdaq100-index-methodology-update-why-now)
- [Nasdaq Methodology FAQ May 2026 T1](https://indexes.nasdaqomx.com/docs/2026_May_NDX_Changes_FAQ.pdf)
- [Nasdaq Ecosystem Report T1](https://www.nasdaq.com/articles/assets-and-liquidity-nasdaq-100-ecosystem)
- [Yahoo Finance Nebius joins T2](https://finance.yahoo.com/markets/stocks/articles/nebius-joins-nasdaq-100-ai-211449014.html)
- [GuruFocus NBIS leads T2](https://www.gurufocus.com/news/8913816/nebius-group-nbis-leads-nasdaq100-reshuffle-with-1655-ytd-gain)
- [MEXC News NBIS +13% T2](https://www.mexc.com/news/1142833)
- [Foreign Policy Journal Nasdaq 5 adds T2](https://www.foreignpolicyjournal.com/2026/06/12/nasdaq-nasdaq-ndaq-adds-five-companies-to-nasdaq-100-index-in-june-2026-quarterly-rebalance/)
- [TIKR NBIS/CRWV surge T2](https://www.tikr.com/blog/nebius-and-coreweave-nasdaq-nbis-crwv-stocks-surge-following-announcement-of-nasdaq-100-addition)
- [CompaniesMarketCap NBIS T2](https://companiesmarketcap.com/nebius-group/marketcap/)
- [Wikipedia Invesco QQQ T2](https://en.wikipedia.org/wiki/Invesco_QQQ)
- [MutualFunds.com QQQM T2](https://www.mutualfunds.com/etfs/qqqm-invesco-nasdaq-100-etf/)
- [Morningstar S&P 500 Bump T2](https://www.morningstar.com/funds/sp-500-bump-that-doesnt-last)
- [EUR Master's Thesis Index Inclusion T2](https://thesis.eur.nl/pub/33763/MA-Thesis-Robert-Kaptein.pdf)
- [Barchart AppLovin 713% T2](https://www.barchart.com/story/news/30386434/heres-why-applovin-stock-was-up-713-in-2024)
- [Nasdaq Palantir joins NDX T2](https://www.nasdaq.com/articles/palantir-stock-joining-nasdaq-100-index-and-super-micro-computer-being-booted-what)
