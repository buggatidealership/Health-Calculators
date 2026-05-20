# Source Reliability Ledger

**Last updated:** 2026-05-20
**Purpose:** Track which sources have proven reliable over time, with explicit track records. Per the Source Reliability Framework in `meta/methodology.md`.

## How this ledger works

For each non-T1 source we rely on repeatedly, log:
- **Tier** (T2–T5)
- **Type** (analyst, press, aggregator, etc.)
- **What they're useful for** (transcripts, analysis, breaking news, specs)
- **Track record sample** (3–5 past specific claims and whether they materialized)
- **Last updated**

T1 sources (SEC filings, official press releases, earnings calls) are not tracked here — they're tautologically reliable as primary documents.

---

## T2 — Primary-tier (high reliability)

### SemiAnalysis (Dylan Patel)
- **Type:** Specialized AI semiconductor analyst, newsletter + paid research
- **Useful for:** Supply chain analysis, packaging, networking, chip-level economics, design-win commentary
- **Track record sample:**
  - "HBM is the bottleneck" — repeatedly correct through 2024–2026
  - "CoWoS capacity will quadruple by end-2026" — TSMC is tracking this
  - "Vicor designed out at NVIDIA H100" — confirmed by industry behavior
  - Memory pricing 2-3x further (per user-reported podcast 2026-05-20) — not yet materialized, pending
- **Status:** High confidence. Counted as one leg in triangulation.
- **Citation tier baseline:** T2

### Leopold Aschenbrenner (Situational Awareness LLC)
- **Type:** AI/compute scaling analyst, AGI-pilled investor
- **Useful for:** AGI scaling laws, infrastructure direction, sovereign AI dynamics
- **Track record sample:** *(to be populated when 13F is pulled per todo P1 item)*
- **Status:** Pending track record build
- **Citation tier baseline:** T2

### WSJ / Bloomberg / Reuters / FT
- **Type:** Major financial press
- **Useful for:** Breaking news, exclusive reporting, corporate disclosures
- **Track record sample:**
  - WSJ Anthropic Q2 2026 revenue forecast (2026-05-20) — pending Q2 actual
  - WSJ generally reliable on company financials when sourcing investor documents
- **Status:** High confidence on factual reporting; lower on opinion columns
- **Citation tier baseline:** T2

---

## T3 — Specialist trade press

### Tom's Hardware
- **Type:** Consumer + enterprise tech press
- **Useful for:** Technical specs, product launches, infrastructure cost data
- **Track record sample:**
  - HBM wafer arithmetic (3-4x DRAM equivalent) — accurate per SemiAnalysis cross-check
  - Hyperscaler capex aggregations (+77% to $725B 2026) — multi-sourced
- **Status:** Solid for specs; analysis pieces vary
- **Citation tier baseline:** T3

### Digitimes
- **Type:** Asian semiconductor trade press
- **Useful for:** Supply chain reporting (esp. Taiwan/Korea), capacity data, Asian customer signals
- **Track record sample:** *(needs audit — has been hit-or-miss historically per industry consensus)*
- **Status:** Use as one signal, prefer to triangulate
- **Citation tier baseline:** T3

### EE Times
- **Type:** Engineering trade press
- **Useful for:** Technical depth on chip design, power, networking
- **Track record sample:** *(needs audit)*
- **Citation tier baseline:** T3

### TrendForce
- **Type:** Asian-based market research firm
- **Useful for:** Memory market data, capacity forecasts
- **Track record sample:**
  - HBM +77% 2026 demand growth forecast — directionally aligned with supply data
  - HBM4E to be ~40% of 2027 market — pending verification
- **Citation tier baseline:** T3

---

## T4 — Aggregators / SEO content

### Motley Fool
- **Type:** Financial content + earnings transcripts
- **Useful for:** Earnings call transcripts (they republish, generally accurate)
- **NOT useful for:** Original analysis, stock picking advice
- **Track record sample:** Their stock picks are commodity content; track record on specific calls is poor by reputation
- **Status:** Cite ONLY when they're the transcript channel for a primary earnings call. Never as analysis.
- **Citation tier baseline:** T4 (but T1 when transmitting a T1 source verbatim)

### StockTitan
- **Type:** SEC filing rehosting + headline summaries
- **Useful for:** Direct access to 8-K, 10-Q, 10-K filings
- **NOT useful for:** Their headlines / summaries can be misleading
- **Track record:** Filings themselves are T1; their summaries occasionally lose context
- **Citation tier baseline:** T4 for summaries, T1 for the actual filing they're hosting
- **Best practice:** When citing via StockTitan, link to the SEC filing they host

### Investing.com
- **Type:** News aggregator
- **Useful for:** Breaking news re-reported
- **Track record:** Mixed
- **Citation tier baseline:** T4

### IBTimes
- **Type:** Mass-market news aggregator
- **Useful for:** Price action stories, basic news
- **Track record:** Not domain experts; aggregating other sources
- **Citation tier baseline:** T4

### BeyondSPX
- **Type:** Stock analysis content (appears to be SEO/aggregator)
- **Useful for:** Surfacing thesis points to verify
- **Track record:** Unknown
- **Citation tier baseline:** T4 — **must re-verify any technical claims at primary source**

### Simply Wall St / TipRanks / WallStreetZen / GuruFocus
- **Type:** Stock data aggregators
- **Useful for:** Quick stats (with verification)
- **NOT useful for:** Original analysis, price targets (often outdated or scraped without context)
- **Track record:** Variable; data accuracy issues observed (e.g., $26B VICR revenue forecast on one aggregator)
- **Citation tier baseline:** T4 — verify any specific number at the source

### Seeking Alpha
- **Type:** Author-contributed analysis platform
- **Useful for:** *Depends entirely on the author*
- **Track record:** Some authors are excellent (track separately if you find them); most are commodity
- **Citation tier baseline:** T4 by default; can be T2 for specific established authors

### Yahoo Finance
- **Type:** Financial news aggregator
- **Useful for:** Republishing wire stories, basic market data
- **Citation tier baseline:** T4

---

## T5 — Unverified

- **Twitter/X** — High signal-to-noise variance. Treat as signal-candidates only, never as evidence. Cross-reference any actionable claim with T1–T3.
- **Reddit** — Even worse signal-to-noise; useful for sentiment but not facts.
- **Anonymous Substacks / Ghost blogs / Razor's Edge / other anonymous analyst sites** — Track record unknown. Use as counter-thesis surfaces only; never cite as authoritative.

---

## Audit queue (sources I've used but haven't yet tier-tracked)

These are sources I've cited in recent work that need formal track-record assessment:

- **Sherwood News** (cited for Anthropic $30B run-rate + Broadcom partnership) — track record unknown, looks like a newer publication. Audit needed.
- **MLQ.ai** (Anthropic coverage) — appears to be AI-investor focused; unaudited.
- **Sacra** (private company tracking) — unique data source, audit needed.
- **Fortune** (Anthropic Q1 2026 contribution to Google/Amazon profits) — established press, T2 candidate.
- **Photoncap** (Vicor analysis) — unknown author, appears to be a Substack-style analysis. T4-T5 — verify any quantitative claim independently.
- **Astera Labs IR (ir.asteralabs.com)** — official company IR — T1
- **TweakTown** (HBM technical specs) — trade press but unaudited reliability
- **The Razor's Edge** (VICR short thesis) — Ghost-hosted, anonymous; T5; counter-thesis surface only
- **Various Medium and Substack pieces** cited in wikis — unaudited, need verification on quantitative claims

## Process going forward

1. **Before citing a T4 source** for a quantitative claim, take 30 seconds to verify the underlying primary source exists and matches the quote. If primary source is a filing/call, the T4 channel is fine as a conduit. If primary source is an opinion, trace to the original analyst.

2. **When a name appears repeatedly in citations** (e.g., we've cited Motley Fool 5 times), check if there's a T1 alternative (the actual SEC filing or company press release). If yes, prefer T1.

3. **Periodically** (monthly or on bottleneck-forecast review): audit one or two of the audit-queue sources by checking 3-5 of their past specific claims against what actually happened. Update their tier.

4. **For high-leverage claims** (e.g., "design-out at NVIDIA H100" — affects a position recommendation), require triangulation: at least one T1 or T2 source confirming, plus one independent confirmation, before treating as evidence-based.
