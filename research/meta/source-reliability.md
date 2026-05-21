# Source Reliability Ledger

**Last updated:** 2026-05-21 (audit expansion per user calibration)
**Purpose:** Track which sources have proven reliable over time. Per `meta/methodology.md` §Source Reliability Framework + 2026-05-21 user calibration: source reliability is a **reasoning-layer signal**, not just a citation-quality filter. Both reliable AND unreliable sources are useful when calibrated — reliable = amplifier (green flag), unreliable = discount factor (red flag) OR potentially contrarian signal if systematically wrong in known direction.

---

## Framework (expanded 2026-05-21)

Each source gets evaluated on FIVE dimensions:

1. **Tier** (T1-T5): Source-origin quality (filing → primary-tier analyst → trade press → aggregator → unverified)
2. **Track record sample**: 3-5 specific past claims with materialization assessment
3. **Bias direction** (if observed): systematic over/under-shoot, bull/bear tilt, lag vs lead
4. **Signal use classification**:
   - 🟢 **GREEN FLAG** (amplifier) — high reliability, weight high in synthesis
   - 🟡 **YELLOW FLAG** (directional, triangulate) — useful but verify via second source
   - 🔴 **RED FLAG** (discount) — low weight, ground-truth via T1-T2 source first
   - 🟣 **CONTRARIAN** (reverse-signal) — if systematically wrong in known direction, the OPPOSITE of their take becomes the signal
5. **Best use case / worst use case**: where to lean on them, where to ignore them

T1 sources (SEC filings, earnings calls, official press releases) are not tracked here — tautologically reliable as primary documents.

---

## T2 — Primary-tier (high reliability)

### SemiAnalysis (Dylan Patel)
- **Tier:** T2
- **Type:** Specialized AI semiconductor analyst, newsletter + paid research
- **Useful for:** Supply chain, packaging, networking, chip-level economics, design-win commentary
- **Track record sample (verified 2026-05-21):**
  - "HBM is the bottleneck" — repeatedly correct through 2024-2026 ✓
  - "CoWoS capacity will quadruple by end-2026" — TSMC tracking this ✓
  - "Vicor designed out at NVIDIA H100" — confirmed by industry behavior ✓
  - "DRAM will double or triple from here, supply doesn't come till '28" per [24/7 Wall St 2026-04-23](https://247wallst.com/personal-finance/2026/04/23/dram-will-double-or-triple-from-here-as-ai-demand-outpaces-supply-chain-capacity/) — IN PROGRESS, Q1-Q2 2026 prints consistent ⏳
  - "Bottleneck evolution: CoWoS (2023) → power (2024-25) → fabs (2026+)" per [Latent Space Feb 2026](https://www.latent.space/p/dylanpatel-cooking) — partial confirmation in TSMC N3 reports ⏳
  - "NVIDIA inference share 90%+ → 20-30% by 2028" per [Benzinga Aug 2025](https://www.benzinga.com/markets/equities/25/08/47202594/nvidias-reign-at-risk-dylan-patel-says-googles-tpu-amazons-trainium-could-outshine-gpus-if-sold-to-public) — ungradable yet (multi-year forward)
- **Bias direction:** Aggressive on demand/scaling trajectories; tends to be more bullish than NVDA itself (e.g., 50x Grace Blackwell vs Jensen's public 35x). Better at bottleneck identification than timing precision.
- **Signal use:** 🟢 **GREEN FLAG amplifier.** One of the strongest single sources in our universe.
- **Best use case:** Supply chain bottleneck identification, advanced packaging dynamics, customer-level design win commentary
- **Worst use case:** Stock-level entry/exit timing (not his function)
- **Citation tier baseline:** T2. Counts as one leg in triangulation.

### Leopold Aschenbrenner (Situational Awareness LP)
- **Tier:** T2 for analysis; T1 for the 13F filing itself
- **Type:** AGI/compute scaling analyst; runs $5.52B+ equity hedge fund (per Q1 2026 13F in `signals/events/2026-05-21-aschenbrenner-q1-13f.md`)
- **Useful for:** AGI scaling-laws framing, infrastructure-arbitrage positioning, sovereign-AI dynamics
- **Track record sample:**
  - Pre-fund Situational Awareness essays mid-2024 on compute capex magnitudes — broadly directionally correct as capex has ramped
  - First major 13F filed 2026-05-15; positioning track record builds from here. The CALL (short chips, long power infra) is unambiguous — grades over coming 4-8 quarters
- **Bias direction:** Aggressive on AGI timing (2027 framing). Macro-strategic > stock-level. Contrarian on chip-stack timing (shorts via puts when fundamentals still beating).
- **Signal use:** 🟢 **GREEN FLAG amplifier** for macro/scenario weighting; 🟡 **YELLOW FLAG** for specific stock-level entry/exit on his shorts (timing risk)
- **Best use case:** Scenario weighting (S3 power binds), bypass-route name identification, layer-allocation conviction
- **Worst use case:** Single-name long/short timing on chip stack (Stage 4-5 multiple compression timing is hard)
- **Citation tier baseline:** T2 for analysis; T1 for the filing. Full synthesis in `meta/patel-vs-aschenbrenner-thesis-comparison.md`

### WSJ / Bloomberg / Reuters / FT
- **Tier:** T2
- **Type:** Major financial press
- **Useful for:** Breaking news, exclusive reporting, corporate disclosures
- **Track record sample:**
  - WSJ Anthropic Q2 2026 revenue forecast (2026-05-20) — pending Q2 actual
  - Generally reliable on company financials when sourcing investor documents
- **Bias direction:** Conservative on revolutionary claims; lean toward verified facts. Slight US-establishment editorial tilt.
- **Signal use:** 🟢 **GREEN FLAG** for factual reporting; 🟡 **YELLOW FLAG** for opinion columns
- **Best use case:** Exclusive corporate disclosures, regulatory filings interpretation, macro context
- **Worst use case:** Speculative analyst-style stock calls

### Sherwood News (audited 2026-05-21)
- **Tier:** T2-T3 (Robinhood-owned subsidiary; potential COI on markets coverage)
- **Type:** Financial news; tech + markets focus
- **Useful for:** Tech industry coverage, market context
- **Track record sample:**
  - HIGH credibility rating from [Media Bias/Fact Check](https://mediabiasfactcheck.com/sherwood-news-bias-and-credibility/)
  - "Mostly Factual" factual reporting per same
  - Disclosures: Sherwood writers disclose beneficial interests in covered stocks per [editorial standards page](https://sherwood.news/editorial-standards/)
- **Bias direction:** Left-Center editorial tilt. One-sided/opinion-driven sometimes. COI risk on coverage that affects Robinhood's business.
- **Signal use:** 🟢 **GREEN FLAG** for factual tech reporting; 🟡 **YELLOW FLAG** for any market coverage that touches Robinhood-adjacent topics (retail trading, app-based investing, crypto)
- **Best use case:** Tech industry features, market commentary on areas Robinhood doesn't profit from directly
- **Worst use case:** Retail-investing coverage where parent-co interests apply

---

## T3 — Specialist trade press

### TrendForce (audited 2026-05-21)
- **Tier:** T3
- **Type:** Asian market research firm; memory + display + components
- **Useful for:** Memory market data, capacity forecasts, supply-side analytics
- **Track record sample:**
  - HBM "200% demand growth in 2024, doubling in 2025" forecast — directionally correct, tracking
  - "HBM 30%+ of DRAM market value by 2025" — tracking; per [Astute Group](https://www.astutegroup.com/news/general/sk-hynix-holds-62-of-hbm-micron-overtakes-samsung-2026-battle-pivots-to-hbm4/) reporting Counterpoint at ~41% for 2026
  - "DRAM contract +90-95% QoQ Q1 2026 record" per [Tom's Hardware citing TrendForce](https://www.tomshardware.com/pc-components/dram/dram-and-nand-contract-prices-to-climb-again-in-q2) — confirmed
  - "HBM4E ~40% of 2027 market" — pending
- **Bias direction:** Strong on directional calls + memory-specific data. Specific numerical forecasts roughly correct over 12-18 month windows.
- **Signal use:** 🟢 **GREEN FLAG amplifier specifically for memory/display/components**. Among the most reliable T3 sources for memory cycle data.
- **Best use case:** HBM/DRAM/NAND forecasts, memory cycle calls, Asian supply chain data
- **Worst use case:** Stock-level recommendations (not their function)

### Digitimes (audited 2026-05-21)
- **Tier:** T3 for current factual reporting; T4 for predictive claims
- **Type:** Asian semiconductor trade press
- **Useful for:** Taiwan/Korea supply chain reporting, capacity data, customer signals
- **Track record sample:**
  - Apple-related predictions: **5 of 25 stories correct or mostly correct, 16 largely bogus, 4 future-pending** per [TIME 2013 fact-check](https://techland.time.com/2013/06/03/lets-fact-check-digitimes-apple-reporting-once-again/) — ~20% accuracy on predictions
  - Self-acknowledged accuracy issues with Apple stories per [Cult of Mac 2012 — Digitimes apology](https://www.cultofmac.com/168965/digitimes-we-know-we-get-apple-rumors-wrong-and-well-try-to-be-better-from-now-on/)
  - TSMC publicly corrected a Digitimes report claiming TSMC would become SMIC's largest shareholder per [TIME](https://techland.time.com/2013/06/03/lets-fact-check-digitimes-apple-reporting-once-again/)
  - Rated "Least biased" with "High factual reporting" by [Media Bias/Fact Check](https://mediabiasfactcheck.com/digitimes-asia-bias/)
- **Bias direction:** Better on current/factual supply chain reporting than predictions. Tends toward speculative claims on consumer (Apple) coverage; more reliable on enterprise/semi supply chain.
- **Signal use:** 🟡 **YELLOW FLAG.** Factual current state reasonable; predictive claims need triangulation.
- **Best use case:** Current Taiwan/Korea supply chain data (capacity, order patterns), supplier capacity expansions
- **Worst use case:** Apple-related rumors, future-quarter predictions, single-source predictive claims

### Tom's Hardware (audited 2026-05-21)
- **Tier:** T3
- **Type:** Consumer + enterprise tech press
- **Useful for:** Technical specs, product launches, infrastructure cost data, memory pricing reporting
- **Track record sample:**
  - Testing data "usually solid" per multiple [HardForum](https://hardforum.com/threads/toms-hardware-confirms-it-still-has-no-credibility.1993426/) discussions
  - Documented Intel bias historically per [Tom's Hardware Forum threads](https://forums.tomshardware.com/threads/toms-sites-obvious-intel-bias.307510/)
  - HBM wafer arithmetic (3-4x DRAM equivalent) — accurate per SemiAnalysis cross-check
  - Hyperscaler capex aggregations (+77% to $725B 2026) — multi-sourced, accurate
  - Memory pricing reporting (e.g., +90-95% Q1 2026 DRAM) — accurate, cites TrendForce as primary
- **Bias direction:** Historical Intel-favorable; testing data solid; news can drift toward clickbait. Better as transmission channel for TrendForce/SemiAnalysis content than original analysis.
- **Signal use:** 🟢 **GREEN FLAG for testing data + transmission of T2/T3 content**; 🟡 **YELLOW FLAG for original news/predictions**
- **Best use case:** Technical specs, benchmarking data, memory pricing reports sourced to TrendForce
- **Worst use case:** Speculative news, AMD-vs-Intel competitive commentary

### EE Times
- **Tier:** T3
- **Type:** Engineering trade press
- **Useful for:** Technical depth on chip design, power, networking
- **Track record sample:** *(audit pending — limited specific past predictions surfaced in this OS yet)*
- **Bias direction:** Engineering-conservative; technical claims well-grounded.
- **Signal use:** 🟢 **GREEN FLAG provisional** for technical specs and engineering claims
- **Citation tier baseline:** T3

### Benzinga (audited 2026-05-21)
- **Tier:** T3
- **Type:** Financial news; analyst commentary aggregator
- **Useful for:** Analyst commentary republication, breaking financial news, source aggregation
- **Track record sample:**
  - HIGH factual reporting per [Media Bias/Fact Check](https://mediabiasfactcheck.com/benzinga/)
  - "Very High" factuality per Ground News
  - Articles properly sourced to Reuters, WSJ
  - Cited by CNBC, Bloomberg, Forbes per [Benzinga.news](https://benzinga.news/is-benzinga-reputable/)
  - Provided the Dylan Patel "NVDA inference 90% → 20-30% by 2028" cite — verified accurate quote per other Patel interviews
- **Bias direction:** Least biased per MBFC. Minimal editorializing.
- **Signal use:** 🟢 **GREEN FLAG** for factual reporting + analyst commentary attribution
- **Best use case:** Analyst commentary cites, breaking financial news, source for primary-tier quotes (Patel, etc.)
- **Worst use case:** Their own internal analyst stock ratings (less independently verified)

---

## T4 — Aggregators / SEO content

### TradingKey (audited 2026-05-21)
- **Tier:** T4 for analysis; T3 for data points (LSEG-backed)
- **Type:** Stock analysis aggregator + scoring platform
- **Useful for:** Data aggregation (LSEG-sourced), thesis-style synthesis articles
- **Track record sample:**
  - Partners with LSEG (institution-grade data) per [TradingKey methodology](https://www.tradingkey.com/tools/stock-score)
  - Uses 34 indicators / 100+ metrics for stock scoring
  - Explicit disclaimers: "TradingKey cannot guarantee the accuracy of the article's content"
  - In our OS: MURATA AI server MLCC share data (45% vs 70% discrepancy noted in `companies/MURATA/thesis.md`) — they provided one of the two conflicting figures; thesis cites them but cross-references the discrepancy
- **Bias direction:** Synthesized analysis articles are interpretive — opinion-style writing on data they aggregate. Data accuracy generally OK; interpretive conclusions vary.
- **Signal use:** 🟡 **YELLOW FLAG.** Data points OK (LSEG-backed); interpretive synthesis articles weight lower.
- **Best use case:** Data points + market share aggregation
- **Worst use case:** Conviction-level thesis claims; their numerical specifics where they're the only source

### 24/7 Wall St (audited 2026-05-21)
- **Tier:** T3-T4
- **Type:** Equity commentary and analysis aggregator
- **Useful for:** Surfacing analyst quotes (provided the Patel "DRAM double or triple" cite), basic news roundups
- **Track record sample:**
  - "Least Biased" + "High factual reporting" per [Media Bias/Fact Check](https://mediabiasfactcheck.com/24-7-wall-st/)
  - **Prediction accuracy problematic: brand-disappearance predictions had ~16% accuracy (84% wrong)** per [Daner Wealth analysis](https://www.danerwealth.com/blog/the-terrible-track-record-of-wall-street-forecasts)
  - Provided the Patel "DRAM double or triple from here" cite (2026-04-23) — quote verified accurate
- **Bias direction:** Factual reporting OK; predictive specificity unreliable. Tends toward sensationalist framing on predictions ("brand will disappear", "stock will crash").
- **Signal use:** 🟡 **YELLOW FLAG** for factual reporting + quote attribution; 🔴 **RED FLAG** for their own predictive claims
- **Best use case:** Quote attribution, current-event reporting
- **Worst use case:** Original predictions (brand disappearance, stock crashes, etc.)

### Motley Fool (audited 2026-05-21)
- **Tier:** T4 by default; T1 when transmitting an earnings call transcript verbatim
- **Type:** Financial content + earnings transcripts
- **Useful for:** Earnings call transcripts (high-quality republication)
- **Track record sample (as stock picker, NOT what we use them for):**
  - Stock Advisor cumulative returns: **+993% vs S&P 500 +208% since 2002** per [Wall Street Survivor independent review](https://www.wallstreetsurvivor.com/motley-fool-performance/)
  - 48% of picks outperform S&P 500 per same
  - 35% of picks lose money per [Liberated Stock Trader audit](https://www.liberatedstocktrader.com/motley-fool-review/)
  - 60% win rate for positions held <1 year; 92% win rate for 10+ year holds
- **Bias direction:** Survivorship bias risk in marketing; aggressive upselling. Long-term holds required to capture advertised returns.
- **Signal use:** 🟢 **GREEN FLAG** for earnings call transcripts (T1 quality content via T4 channel); 🟡 **YELLOW FLAG** for their own stock picks (positive long-term bias; weaker in down markets); 🔴 **RED FLAG** for their marketing/promotional content
- **Best use case:** Earnings transcript republication
- **Worst use case:** Their own original stock recommendations (we don't use these); their marketing language

### StockTitan
- **Tier:** T4 for summaries, T1 for the actual SEC filing they're hosting
- **Type:** SEC filing rehosting + headline summaries
- **Useful for:** Direct access to 8-K, 10-Q, 10-K filings
- **Track record:** Filings themselves are T1; their summaries occasionally lose context
- **Signal use:** 🟢 **GREEN FLAG** for filings they host; 🟡 **YELLOW FLAG** for their summaries
- **Best practice:** When citing via StockTitan, link to the SEC filing they host

### Investing.com
- **Tier:** T4
- **Type:** News aggregator
- **Useful for:** Breaking news re-reported
- **Track record:** Mixed. Used in our OS for earnings press release reposts.
- **Signal use:** 🟡 **YELLOW FLAG.** Use as transmission channel; ground-truth specific numbers via primary source.

### Yahoo Finance
- **Tier:** T4
- **Type:** Financial news aggregator
- **Useful for:** Wire-story republishing, market data
- **Signal use:** 🟡 **YELLOW FLAG.** Aggregator; verify specific numbers via primary source.

### IBTimes
- **Tier:** T4
- **Type:** Mass-market aggregator
- **Useful for:** Price action stories, basic news
- **Signal use:** 🔴 **RED FLAG for analysis**; 🟡 **YELLOW FLAG for price quotes** (exchange data is T1 underlying)

### BeyondSPX / EveryTicker (audited 2026-05-21, re-evaluated post-VICR verify 2026-05-21)
- **Tier:** T4 → **T4-T5 (downgraded after VICR specs disproven)**
- **Type:** Stock analysis aggregator (renamed to EveryTicker)
- **Useful for:** Surfacing thesis points to verify; provides a rating system
- **Track record sample:**
  - "A+" rated stocks have **0.7% dividend cut rate vs 19.3% for 'C' or below rated** per [Find My Moat review](https://www.findmymoat.com/tools/beyondspx) — internal scoring has some empirical validity
  - **VICR "5 A/mm² density + 24× current gain" claim: DISPROVEN at primary source 2026-05-21.** Vicor CEO Vinciarelli on Q1 2026 earnings call disclosed 3 A/mm² + 40× current multiplication — NOT 5 A/mm² + 24× current gain as BeyondSPX claimed. See `companies/VICR/facts.md` for primary-source verification.
  - Broader prediction track record NOT independently documented
- **Bias direction:** Confirmed-inaccurate on at least one specific technical claim. Pattern suggests they may conflate or mis-report specific numerical values from earnings transcripts.
- **Signal use:** 🔴 **RED FLAG for specific numerical/technical claims** — must re-verify at primary source every time. 🟡 YELLOW for directional thesis ideas.
- **Best use case:** Idea surfacing only; never cite for specific numbers
- **Worst use case:** Specific technical specification claims (proven wrong on VICR 2nd gen VPD)

### WCCFTech (audited 2026-05-21)
- **Tier:** T4-T5
- **Type:** Tech rumor + speculation publication
- **Useful for:** Surfacing rumors before they materialize (sometimes); aggregating leaks
- **Track record sample:**
  - "Almost exclusively reports rumors rather than verified news; many of their top trending articles contain the word 'rumor' in the title" per [Forum Level1Techs](https://forum.level1techs.com/t/wccftech-or-how-to-start-a-fake-news-rumor/120332)
  - PS5 sales mis-prediction (claimed PS5 wasn't keeping up with PS4) — proven false
  - "Average" reliability per Biasly
  - Has internal rumor rating system (acknowledges speculative nature)
- **Bias direction:** Rumor-first; sensationalist. Tends toward dramatic claims.
- **Signal use:** 🔴 **RED FLAG.** Useful only as signal-candidate surface; verify everything via T1-T3.
- **In our OS:** Cited once in `memory-cycle-primer.md` for HBM capacity per stack — that specific data point is consistent with other T3 sources, so the data itself stood, but WCCFTech alone is not adequate evidence.
- **Best use case:** Surfacing leaked specs to investigate further
- **Worst use case:** Anything where they're the only source

### Simply Wall St / TipRanks / WallStreetZen / GuruFocus
- **Tier:** T4
- **Type:** Stock data aggregators
- **Useful for:** Quick stats (with verification)
- **Track record:** Variable; data accuracy issues observed
- **Signal use:** 🟡 **YELLOW FLAG.** Verify any specific number at the source.

### Seeking Alpha
- **Tier:** T4 by default; can be T2 for specific established authors
- **Type:** Author-contributed analysis platform
- **Track record:** Depends entirely on the author
- **Signal use:** 🟡 **YELLOW FLAG.** Variable; track specific authors separately if they prove reliable.

---

## T5 — Unverified

- **Twitter/X** — High signal-to-noise variance. 🔴 RED FLAG. Use only as signal-candidate; never as evidence.
- **Reddit** — Worse signal-to-noise. 🔴 RED FLAG. Sentiment-only.
- **Anonymous Substacks / Ghost blogs** — Track record unknown. 🔴 RED FLAG. Counter-thesis surfaces only.

---

## Audit queue (still to be audited)

These sources have been cited in our OS but haven't yet received the 5-dimensional audit:

- **Sherwood News** — ✓ AUDITED 2026-05-21
- **MLQ.ai** (Anthropic coverage) — AI-investor focused; unaudited
- **Sacra** (private company tracking) — unique data source; audit needed
- **Fortune** (Anthropic Q1 2026 contribution to Google/Amazon profits) — established press, likely T2 candidate
- **Photoncap** (Vicor analysis) — unknown author; likely T4-T5; verify any quantitative claim independently
- **TweakTown** (HBM technical specs) — trade press but unaudited
- **The Razor's Edge** (VICR short thesis) — Ghost-hosted, anonymous; T5; counter-thesis surface only
- **Astera Labs IR (ir.asteralabs.com)** — official company IR — T1, no audit needed
- **Various Medium and Substack pieces** cited in wikis — unaudited; need verification on quantitative claims

---

## Process going forward

1. **Before citing a T4 source for a quantitative claim:** 30-second check that the underlying primary source exists and matches the quote. If primary source is a filing/call, the T4 channel is fine as conduit. If primary source is opinion, trace to the original analyst.

2. **When citing repeatedly from one source:** check if there's a T1 alternative (the SEC filing or company press release). If yes, prefer T1.

3. **Monthly audit cycle:** review one or two audit-queue sources by checking 3-5 past specific claims against what happened. Update their tier + signal-use classification.

4. **For high-leverage claims** (e.g., "design-out at NVIDIA H100" — affects position): require triangulation. ≥1 T1 or T2 confirming + ≥1 independent confirmation.

5. **Differential weighting in synthesis:** when sources conflict, weight by signal-use classification:
   - 🟢 GREEN > 🟡 YELLOW > 🔴 RED
   - When 🔴 RED disagrees with 🟢 GREEN, lean GREEN
   - When 🟣 CONTRARIAN sources align, that's information about consensus narrative limits

6. **Multi-source convergence rule** (unchanged): triangulated signal (≥3 independent sources within 90 days) beats any single primary source.

## How this ledger gets used

- Cited in `meta/methodology.md` §Source Reliability Framework
- Referenced in every INGEST workflow for source-quality check
- Surfaces source quality concerns to user when high-leverage claims rely on YELLOW/RED sources
- Updated whenever a GRADE workflow reveals a source called something correctly/incorrectly
