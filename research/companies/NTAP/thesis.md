# NetApp (NTAP) — Thesis (Compact)

**Last updated:** 2026-05-21
**Tier:** Watchlist (slower-growing storage incumbent; some AI traction)
**Position target:** 1–2% if entered (user holds 0%)
**Anti-fragility:** 2.5/5 — modest wins in S1, S2
**Foundation:** `research/wiki/memory-cycle-primer.md`

## TL;DR

NetApp is the storage incumbent with hybrid (on-prem + cloud) ONTAP architecture, building AI traction more slowly than PSTG. Q3 FY2026: revenue $1.71B (+4% YoY), all-flash array revenue $1.0B record (+11% YoY), Public Cloud $174M (cloud services +27% YoY) per [Q3 8-K cited via Stocktitan](https://www.stocktitan.net/news/NTAP/net-app-reports-record-results-for-fourth-quarter-and-fiscal-year-e66r0b9ix7ja.html).

**AI signal:** ~300 customers selected NetApp for AI data prep/storage in Q3 (up from ~200 prior quarter). AFX (disaggregated storage for AI) shipped first quarter. AI Data Engine (AIDE) GA in Q4. FY2026 guide: $6.772-6.922B revenue (~4% growth) per [Seeking Alpha](https://seekingalpha.com/news/4558430-netapp-outlines-8-percent-q4-revenue-growth-target-as-ai-and-cloud-momentum-accelerates).

**Note:** Q4 FY2026 results scheduled for 2026-05-28 per [Barchart](https://www.barchart.com/story/news/1496010/netapps-q4-2026-earnings-what-to-expect) — this thesis uses Q3 actuals + Q4 guide.

**Position recommendation:** 1-2% if entered. **Lower priority than PSTG** — slower growth (4% vs PSTG 12% YoY), less AI-specific product traction. Watchlist only; PSTG is the cleaner enterprise-storage AI play.

## The business

Per [Q1 FY2026 press release](https://www.netapp.com/newsroom/press-releases/news-rel-20250827-results-962960/):
- **Hybrid Cloud segment** — on-prem all-flash arrays + ONTAP software
- **Public Cloud segment** — Azure NetApp Files, AWS FSx ONTAP, Google Cloud NetApp Volumes

Hybrid Cloud is ~90% of revenue; Public Cloud is the high-growth (27% YoY) but small segment.

## Why this matters for AI

NetApp's Public Cloud segment is first-party storage inside hyperscaler datacenters — sells through Azure, AWS, GCP marketplaces. The 27% growth + AIDE GA + AFX disaggregated AI storage is the structural AI play.

But the headline number is 4% total revenue growth — modest by any standard. The AI segment is small enough that it doesn't move the company aggregate yet.

## Anti-fragility (per `research/sector/scenarios.md`)

| Scenario | Result | Reasoning |
|---|---|---|
| S1 NVDA dominant | MILD WIN | More AI clusters need ONTAP attach |
| S2 Custom Si fragments | MILD WIN | Same |
| S3 Power binds | NEUTRAL | Downstream of power |
| S4 Digestion | LOSS | Enterprise IT cyclical |
| S5 Regulatory | NEUTRAL | US-listed |

**Anti-fragility: 2.5/5**

## Token-Volume Filter
Per `meta/methodology.md`: ✓ PASS (modest). Inference state scales with tokens but NetApp captures small share of marginal storage spend.

## Falsifiers
1. Public Cloud growth decelerates below 20% YoY
2. AFX/AIDE adoption slower than expected
3. Pure Storage captures AI-specific share
4. Hyperscaler in-house alternatives compress NetApp's first-party economics

## Blind spots
- Q4 FY26 results coming 2026-05-28 — fresh data point pending
- Specific AI customer wins (named hyperscalers vs enterprises)
- Public Cloud margin profile vs Hybrid Cloud
- ONTAP differentiation vs cloud-native storage
- Multiple compression risk on slow growth

## Cross-references
- `research/wiki/memory-cycle-primer.md`
- `research/companies/PSTG/thesis.md` — primary peer with stronger AI positioning
- `research/companies/SNDK/thesis.md` — component layer exposure user already has
