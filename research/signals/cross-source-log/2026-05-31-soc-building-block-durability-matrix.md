# SoC Building-Block Layer — Durability Matrix for the Four ATH Names + Asymmetric Setup on AIP + AWE.L

**Date logged:** 2026-05-31
**Source:** User-directed durability matrix exercise 2026-05-31 evening following SoC building-block layer analysis (`2026-05-31-soc-building-block-layer-analysis.md`)
**Method:** Identify the variable that drives continued above-average return for stocks at ATH; research that variable for SNPS + CDNS + Advantest + Teradyne; compute relative probability; separately flag AIP + AWE.L as asymmetric setups requiring deep-dive
**Source validity:** T1 SEC filings (SNPS 10-Q, CDNS 8-K, Arteris S-1) + T2 financial press
**Cross-reference:** `2026-05-31-soc-building-block-layer-analysis.md` (parent artifact)

---

## User directive (verbatim framing)

User 2026-05-31 evening: *"the next... so... an identified player given that's already reached a new all time high and keeps reaching new ones. That is confirmed. Now the question becomes the duration and how do the variables necessary for that to be continuous share price increase with a high level of magnitude than the average have to be identified, and then you compute which one has the highest chance."*

Translation: ATH status is binary (already true for all 4). The question is the PROBABILITY of CONTINUED above-average return given the current ATH position. Identify the variable. Rank.

---

## The variable identified

**Locked-in forward revenue visibility** = % of next-12-month revenue already contracted in RPO / backlog as of latest filing.

Why this variable:
1. Stocks at ATH continue going up when forward EPS estimates keep getting RAISED (revision velocity)
2. Stocks at ATH stop going up when estimates flatten or get cut
3. Locked-in RPO directly underpins the revision-up trajectory because contracted backlog converts to revenue ON SCHEDULE — the more locked-in, the higher the floor on next-12mo EPS
4. For software-license businesses (EDA), RPO is contractually binding multi-year obligations
5. For hardware-order businesses (test equipment), "visibility" is quarter-to-quarter at best
6. This single variable cleanly explains why SaaS-like businesses trade at higher multiples than hardware businesses despite similar growth rates: the floor is more visible

---

## The matrix — verified data

| Variable | SNPS | CDNS | Advantest (6857.T) | Teradyne (TER) |
|---|---|---|---|---|
| Backlog/RPO absolute | **$11.3B** | **$8.0B (record)** | Not publicly disclosed for hardware orders | "Limited visibility" |
| Backlog source | [SNPS 10-Q Q1 2026 T1](https://www.sec.gov/Archives/edgar/data/0000883241/000088324126000014/snps-20260131.htm) | [CDNS 8-K Q1 2026 T1](https://www.sec.gov/Archives/edgar/data/0000813672/000081367226000044/cdns04272026ex9901.htm) | n/a | [ts2.tech 10-Q analysis T2](https://ts2.tech/en/teradyne-stock-faces-fresh-ai-test-as-10-q-shows-record-revenue-limited-visibility/) |
| Forward 12-month locked | ~47% of backlog ex-FSA = ~$5.3B | $4.0B (per 8-K) | Quarter-to-quarter only | Quarter-to-quarter only |
| Revenue model | Multi-year SaaS-like license + IP royalty | Multi-year license + IP royalty | Hardware order book | Hardware order book |
| Recent revenue growth | +42% YoY Q2 post-Ansys (per [Stock Titan T2](https://www.stocktitan.net/sec-filings/SNPS/10-q-synopsys-inc-quarterly-earnings-report-7ceeee1568d4.html)) | Core EDA +18% YoY; IP segment +22% YoY (Q1 2026) | +47% YoY USD FY25 (per `2026-05-31-soc-building-block-layer-analysis.md`) | +87% YoY Q1 2026; Semi Test segment $1.1B (doubled YoY); AI = 70% of revenue |
| Operating margin level | ~35-40% est (with Ansys integration runway) | ~40%+ steady-state | **44.2% FY25** (already very high; +1,490bp YoY = less runway) | Lower than peers — has runway |
| Op margin source | SNPS 10-Q | CDNS 8-K | Per `2026-05-31-soc-building-block-layer-analysis.md` Advantest line | [Futurum Q1 2026 T2](https://futurumgroup.com/insights/teradyne-q1-fy-2026-earnings-credit-revenue-growth-to-ai-test-demand/) |
| Share gain trajectory | +Ansys gives ~46% combined; gained share | Holding ~30% | **+10pp YoY (56% → 66%)** | Holding ~50% custom-ASIC (per [Nasdaq T2](https://www.nasdaq.com/articles/ter-gains-strong-semiconductor-test-segment-more-upside-ahead)) |
| AI exposure | High (universal SoC use) | High (universal SoC use) | ~Universal at AI accelerator tier | 70% of Q1 revenue |
| Customer concentration | Diversified across silicon vendors | Diversified | Concentrated at hyperscaler accelerator buyers | Concentrated at hyperscaler accelerator buyers |
| Stock react risk on print | Lower (RPO floor cushions) | Lower (RPO floor cushions) | Higher (hardware cycle risk) | **Highest — fell 19% on Q1 2026 record beat** per [TIKR T2](https://www.tikr.com/blog/teradyne-falls-19-after-record-q1-2026-earnings-was-that-a-buying-opportunity) |
| YTD 2025 stock | n/a here | n/a here | n/a here | Up 242% per [TIKR T2](https://www.tikr.com/blog/teradyne-stock-analysts-see-more-upside-in-2026-after-soaring-242-last-year) |

---

## Probability ranking — "highest chance of continued above-average return from ATH"

All P-values are (my model) calibration of relative ranking based on the locked-in forward visibility variable. NOT bottoms-up earnings builds per principle #1 — those are queued for 2026-06-02 in `meta/todo.md`.

### 1. Synopsys (SNPS) — P(continued above-average return) ~50-55%

- Highest locked-in forward revenue visibility ($11.3B backlog, ~$5.3B in next 12mo per 10-Q)
- Multi-year SaaS-like license model = lowest beat-and-stock-react divergence risk
- Ansys integration adds new visibility layer at multiphysics simulation tier
- AI EDA market 24.4% CAGR 2026-2032 per `2026-05-31-soc-building-block-layer-analysis.md` = secular tailwind
- Above-average upside BOUNDED by software multiple compression risk; downside BOUNDED by RPO floor

### 2. Cadence (CDNS) — P ~45-50%

- Second-highest visibility ($8.0B record backlog, $4.0B in next 12mo per 8-K)
- Q1 2026 IP segment +22% YoY is the fastest-growing of all four names at this visibility tier
- Slightly smaller cap than SNPS = potentially bigger magnitude moves per same fundamental delta
- Same risk-bounded profile as SNPS but slightly thinner moat (~30% share vs ~46% post-Ansys)

### 3. Advantest (6857.T) — P ~35-45%

- Strongest absolute momentum metrics: share +10pp YoY, op margin +1,490bp, revenue +47% YoY
- BUT visibility is hardware-quarter-to-quarter, NOT contracted RPO
- 44.2% op margin is structurally close to peak for any equipment maker → MARGIN RUNWAY SHRINKING
- Magnitude potential is highest if AI test cycle extends into 2027 but risk-asymmetric on the downside
- Investability: Japan TSE accessible per `CLAUDE.md` filter

### 4. Teradyne (TER) — P ~30-40%

- Highest absolute growth (+87% Q1 YoY)
- BUT "limited visibility" per 10-Q
- BUT fell 19% on Q1 record beat = expectations-vs-fundamentals gap is structurally real
- Stock already up 242% in 2025 = sentiment + positioning is the binding constraint, not fundamentals
- WIDEST distribution of all four: biggest upside if AI test cycle compounds + biggest drawdown on any disappointing print

---

## The asymmetric setups — AIP + AWE.L

### Arteris IP (AIP)

**Fact corrections (user assumed founded 2024):**
- Founded **2003** (NOT 2024) per [SEC S-1 T1](https://www.sec.gov/Archives/edgar/data/0001667011/000119312521289866/d52087ds1.htm)
- IPO'd **2021** — public ~5 years
- User's underlying intuition (under-followed, asymmetry not priced in) is still RIGHT — but it's NOT because of recency. It's because of low cap + low analyst coverage despite a 5-year public history.

**Why this might be a genuinely asymmetric setup:**
- NoC (network-on-chip) interconnect IP becomes structurally more important as SoCs grow more complex (more IP blocks per die in N1X-class SoCs)
- Customers include Samsung, AMD, TI, Rambus, Renesas (per Wikipedia T3) — diversified but small
- Royalty-per-chip-licensed revenue model = scales with shipping volume of customer chips
- Acquired Cycuity 2026 = added hardware security IP, broadens product
- Smaller cap + lower coverage = potential mispricing window narrows as more analysts initiate
- N1X-class SoC integration complexity = direct demand vector that may not yet be in the revenue model consensus

**Status:** queued for full deep-dive 2026-06-02 per updated `meta/todo.md`. Need: investability confirm (US-listed NASDAQ AIP — accessible from Degiro per existing held US names); revenue model bottoms-up; customer wins disclosed/undisclosed; comp set vs Synopsys + Cadence NoC IP.

### Alphawave Semi (AWE.L)

**Fact corrections (user assumed Taiwanese):**
- **UK-listed** on LSE Main Market under ticker **AWE.L** per [LSE welcome T1](https://www.londonstockexchange.com/discover/news-and-insights/london-stock-exchange-welcomes-alphawave-ip-group-plc-main-market) + [Alphawave IPO page T1](https://awavesemi.com/investors/ipo/)
- HQ: Toronto + London + Cambridge UK (NOT Taiwan)
- IPO May 2021 at £3.1B valuation

**CRITICAL CAVEAT — this changes the framing fundamentally:**
- **Qualcomm announced an agreement to acquire Alphawave for ~£1.8B in June 2025** per [BusinessCloud T2](https://businesscloud.co.uk/news/qualcomm-to-acquire-alphawave-in-1-8bn-mega-deal/) + [Euronews T2](https://www.euronews.com/business/2025/06/09/chip-designer-alphawave-sees-stock-soar-on-qualcomm-takeover-agreement)
- User's "no parabolic move + hasn't reached ATH" observation likely reflects the **takeover-price pin** — stock is pinned to the £1.8B deal price, not free-floating on fundamentals
- If deal still PENDING → this is M&A arbitrage, not structural thesis (arb spread = upside; deal break = downside)
- If deal APPROVED/CLOSED → no longer trades as independent equity
- Need to verify CURRENT STATUS before any further analysis

**Status:** queued for deep-dive 2026-06-02 per updated `meta/todo.md`. **First step is M&A status verification, NOT thesis build.**

---

## Net read

For the four ATH names where the question is DURATION of continued outperformance, the locked-in forward visibility variable yields: **SNPS > CDNS > Advantest > Teradyne** in probability of CONTINUED above-average return.

For the two asymmetric setups: **AIP is the genuinely interesting under-followed structural play**; **AWE.L is materially different from what user assumed** (UK not Taiwan; M&A deal pending) and requires M&A status verification before any thesis work.

---

## Position implication (per Critical Rule #11)

**Position implication:** NO IMMEDIATE SIZING TRIGGER. 4 ATH names + 2 asymmetric setups all queued for deep-dive 2026-06-02 per updated `meta/todo.md`. Computex 2026 keynote (2026-06-01 11am Taipei) is the next event likely to surface additional data points on EDA + test demand trajectory. Honest framing: the probability ranking surfaced here is a CALIBRATION ranking, not a sizing input — actual sizing requires bottoms-up earnings build per principle #1 + valuation check + falsifier list, none of which are done in this artifact.

---

## Cross-references

- `signals/cross-source-log/2026-05-31-soc-building-block-layer-analysis.md` — parent artifact (the deeper-layer surface)
- `signals/cross-source-log/2026-05-31-nvda-n1x-unbiased-money-flow-analysis.md` — first-pass unbiased money flow
- `watchlist/candidates.md` § SoC building-block — 6 candidates (SNPS, CDNS, Advantest, Teradyne, AIP, AWE.L) flagged ACTIVE / WATCHLIST
- `meta/todo.md` — 4 deep-dive items (SNPS+CDNS; Advantest+Teradyne; AIP; AWE.L) queued for 2026-06-02
- `companies/RMBS/thesis.md` — existing Watchlist at memory IP layer
- `companies/ARM/thesis.md` — CPU IP layer cleanest convergent play (separate)
