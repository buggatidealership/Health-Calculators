# VICR — Facts (raw, sourced, no interpretation)

**Last updated:** 2026-05-20

## Identity
- Ticker: VICR
- Exchange: NASDAQ
- Sector: Capital goods / Electronic components / Power conversion semiconductors
- HQ: Andover, Massachusetts (USA)
- US-based manufacturing (ChiP fab in Andover)

## Recent financials

| Quarter | Total revenue | Gross margin | Source |
|---|---|---|---|
| Q1 2026 | $113.0M (+20.2% YoY) | 55.2% (vs 47.2% Q1 2025) | per [Q1 2026 8-K via StockTitan](https://www.stocktitan.net/sec-filings/VICR/8-k-vicor-corp-reports-material-event-bc270211458b.html) |
| Q4 2025 | (full-year data below) | | |
| FY 2025 product revenue | $350.3M (+12.1% YoY) | 57.3% (vs 51.2% in 2024) | per [Q4 2025 earnings via The Motley Fool](https://www.fool.com/earnings/call-transcripts/2026/02/19/vicor-vicr-q4-2025-earnings-call-transcript/) |

## Segment breakdown

- **Advanced Products Q1 2026: 57.5% of total revenue** (per StockTitan)
- **Brick Products Q1 2026: 42.5% of total revenue** (per StockTitan)
- FY 2025 Advanced Products: $248.6M (+26% YoY)
- FY 2025 IP licensing: $57.4M (+23.2% YoY)

## Capacity

- ChiP fab in Andover, Massachusetts
- Capacity mapped to ~$1B/year revenue per [Photoncap analysis](https://photoncap.net/p/the-last-15mm-of-ai-power-three-numbers)
- Q1 2026 run-rate at ~$113M/Q implies ~$452M annualized → significant capacity headroom
- Second fab planned (per [Q1 2026 earnings call](https://www.fool.com/earnings/call-transcripts/2026/05/03/vicor-vicr-q1-2026-earnings-transcript/))
- 2026 management projection: $1B+ product revenue (per Q4 2025 earnings call)

## Backlog

- $301M as of Q4 2025 (+75% YoY) (per [Q4 2025 earnings call](https://www.fool.com/earnings/call-transcripts/2026/02/19/vicor-vicr-q4-2025-earnings-call-transcript/))

## Product portfolio

### Brick Products (legacy / commodity)
- Industrial, defense, aerospace, automatic test equipment
- Stable revenue base

### Advanced Products (proprietary)
- 48V Factorized Power Architecture (FPA)
- 1st gen Vertical Power Delivery (VPD)
- **2nd gen Vertical Power Delivery (VPD)** — launched Q1 2026 (lead customer not publicly named per [BeyondSPX](https://beyondspx.com/quote/VICR/analysis/vicor-s-power-revolution-ip-dominance-and-next-gen-vpd-propel-record-outlook-nasdaq-vicr))
- 1200A ChiP-set "Hydra II" for AI accelerator cards (per Vicor product page)

## 2nd gen VPD technical specs (verified at primary source 2026-05-21)

**Primary source:** Vicor Q1 2026 earnings call held 2026-04-21 — CEO Patrizio Vinciarelli's direct disclosure. SEC 8-K filed [via SEC EDGAR](https://www.sec.gov/Archives/edgar/data/0000751978/000119312526165105/d139425dex991.htm). Earnings call commentary triangulated across [Investing.com transcript](https://www.investing.com/news/transcripts/earnings-call-transcript-vicors-q1-2026-earnings-beat-drives-stock-surge-93CH-4635846), [Insider Monkey transcript](https://www.insidermonkey.com/blog/vicor-corporation-nasdaqvicr-q1-2026-earnings-call-transcript-1743830/), and [Photoncap synthesis of the call](https://photoncap.net/p/the-last-15mm-of-ai-power-three-numbers).

**Verified specs** (Vinciarelli direct quote on Q1 2026 call):
- **Current density: 3 A/mm²** (NOT 5 A/mm² as previously cited from BeyondSPX)
- **Current multiplication: up to 40×** (NOT 24× as previously cited from BeyondSPX)
- **Package thickness: 1.5mm** ✓ (consistent across sources)
- Lead customer (unnamed by Vicor): "wafer-scale-engine-based AI accelerator" — almost certainly Cerebras (only public wafer-scale-engine maker)
- Lead customer Gen4→Gen5 transition: enabled H2 2026; ramp begins before year-end

**Vinciarelli direct quote (per Photoncap synthesis of Q1 2026 call):**
> "The thinness is combined with a solution that provides 40x current multiplication and does all that with 3 amps per square millimeter current density. To assess the figure of merit of the technology, you need to look at these three elements in combination."
>
> "40x multiplication completely changes the arithmetic. 2000A to the processor needs only a 50A feed. This is in contrast to traditional integrated voltage regulators (IVRs), which can be even thinner than 1.5 millimeters, but they do not provide any meaningful current multiplication. They only step up the current by 2x, which is practically useless in terms of efficient power delivery to the point of load."

**BeyondSPX correction (T4 source was inaccurate on these specific specs):**
The previously-cited BeyondSPX numbers (5 A/mm² + 24× current gain) do not match Vinciarelli's own disclosure. The correct figures are 3 A/mm² + 40× current multiplication. Possible explanations:
- BeyondSPX may have confused "current gain vs traditional VRs" with "current multiplication factor"
- BeyondSPX may have used a different operating point (peak vs nominal) for current density
Either way: the primary-source disclosure is now the authoritative reference. BeyondSPX flagged in `meta/source-reliability.md` for inaccuracy on this specific claim.

## Historical customer base

Per [Vicor product disclosures and industry reporting](https://newsletter.semianalysis.com/p/energizing-ai-power-delivery-competition):
- NVIDIA: supplied A100, **lost H100 to MPS**
- Google
- AMD
- Cerebras
- Tesla
- Intel
- "Lead customer" for 2nd gen VPD: unnamed publicly

## Competitive position (verified)

- **Designed out of NVIDIA H100** by Monolithic Power Systems (MPWR) (per [SemiAnalysis](https://newsletter.semianalysis.com/p/energizing-ai-power-delivery-competition))
- **Replaced by MPS at one of top-2 hyperscalers** on mainstay 48V-12V DCM (per SemiAnalysis)
- Position expected to persist "at least 2 years" per industry analysis

## Competitors

- **Monolithic Power Systems (MPWR)** — primary structural competitor
- **Renesas** — broad portfolio
- **Infineon** — discrete components
- **Delta Electronics** — hyperscaler rack power
- **ADI** — acquired Empower Semiconductor for $1.5B (per [IndexBox](https://www.indexbox.io/blog/adi-in-advanced-talks-to-acquire-empower-semiconductor-for-15-billion/)) — building competitive position

## Stock-related context (per multiple sources — caveat data variability)

- Recent move: +18.6% to $304 on AI data center power demand (per [IBTimes](https://www.ibtimes.com.au/vicor-vicr-stock-explodes-186-304-massive-ai-data-center-power-demand-1868594))
- Analyst price target range varies materially by source: $212.93 (one aggregator) to $282.5 (another) (per [WallStreetZen](https://www.wallstreetzen.com/stocks/us/nasdaq/vicr/stock-forecast))
- TTM operating margin: ~17.06% (per WallStreetZen)
- Note: one analyst aggregator showed 2026 revenue forecast of $26B — almost certainly a data error given $350M actual 2025 revenue. Disregarded.

## Sources

See `thesis.md` for full source list.
