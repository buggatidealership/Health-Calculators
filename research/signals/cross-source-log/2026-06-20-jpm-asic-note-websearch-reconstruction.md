# 2026-06-20 — JPM ASIC Note (Harlan Sur) WebSearch Reconstruction

**Source tier:** 🟡 T2 ENTIRELY — reconstructed from WebSearch snippets across multiple secondary outlets. **NOT T1.** User confirmed no access to actual JPM PDF. WebFetch on all primary sources (incl. JPM's own am.jpmorgan.com domain) returned 403 Forbidden in this remote-execution environment — see `meta/environment-constraints.md`.

**Reconstruction method:** Main-loop WebSearch only (no Critical Rule #16 Opus 4.8 subagent fan-out; this was a meta-experiment on path-1 yield, then content extraction). Cost: ~6 WebSearch calls + 7 failed WebFetch (all 403). Yield estimate: ~40-50% of original PDF content.

**Note metadata:**
- Title: "AI Drives Resurgence in Custom Chips (ASICs): ASIC Market Overview/Update"
- Author: Harlan Sur, JPM Executive Director Equity Research
- Original publish: 2025-06-15 per FinTwit (Jukan); current title is "Overview/Update" = refresh
- Type: Thematic industry-overview note (not single-name)

---

## Market sizing claims (JPM-attributed via T2 snippets)

| Metric | Value | T-tier of attribution |
|---|---|---|
| Custom ASIC market 2025 | $20-30B (high-end $30B in direct Jukan quote attributed to JPM) | T2 |
| CAGR | 30%+ | T2 |
| Custom ASIC + XPU designs in development at 3nm + 2nm nodes | 100+ | T2 |
| ASIC share of AI server shipments 2026 | 27.8% (highest since 2023) | T2 |
| Custom ASIC shipment YoY growth 2026 | 44.6% (vs merchant GPU 16.1%) | T2 |
| AVGO + MRVL combined co-design share | ~95% | T2 |

**Data-integrity caveat:** number-divergence across sources — one snippet cites $70B as forecast figure (year unspecified); another references the $20-30B 2025 baseline. The PDF likely has a year-by-year forecast table that resolves this; we don't have it.

---

## Broadcom (AVGO) — JPM coverage (T2)

| Field | Value |
|---|---|
| Rating | Overweight |
| Price target | $580 |
| AI revenue forecast (next fiscal year) | $31B (~60% YoY) |
| Company-stated AI backlog | $73B |
| Company 2027 target | $100B annual AI chip revenue |
| Confirmed XPU customers (6) | Google, Meta, ByteDance, Fujitsu + 2 unnamed; Apple + ARM/SoftBank flagged as potential future |
| Customer-program wins | Google TPU v6/v7/v8, Meta MTIA, OpenAI + ARM/SoftBank 2nm |
| OpenAI deal | 10 GW custom accelerators; 3nm + 2nm; H2 2026 first deployment; ~$18B (The Information) |
| Google partnership tenure | 7 TPU generations since 2014 |

---

## Marvell (MRVL) — JPM coverage (T2)

| Field | Value |
|---|---|
| Rating | Overweight |
| Price target | $130 (raised from $120) |
| JPM FY27 revenue forecast | ~$10B → approaching $11B (most recent) |
| Company-guided FY27 | ~$11.5B (~40% YoY) |
| Custom silicon FY26 actual | $1.5B (doubled YoY) |
| AI ASIC revenue projection 2026 | up to $11B |
| Trainium 3 (AWS) | 3nm process; high-volume ramp 2026; firm POs covering FULL FY27 volumes |
| MAIA Gen 2 (Microsoft) | Ramps 2026 |
| MAIA Gen 3 (Microsoft) | 2nm/3nm chiplets; design activities started; 2027-2028 production |
| **JPM mgmt-meeting affirmation** | **"Microsoft and Amazon custom chip business is on track, contradicting other reports"** (per Sherwood News surface — may be a follow-up note rather than this specific ASIC note; flag for direct citation pending PDF) |

**Load-bearing finding for MRVL thesis:** the "on track" line directly rebuts the Trainium-demotion bear narrative that's been the F-5 falsifier-watch. Whether this came from THIS note or a follow-up JPM note is unclear from WebSearch — flagged as MEDIUM-confidence pending PDF cross-check.

**Valuation tension surfaced:** JPM PT $130 vs spot ~$287 = ~55% downside implied. Consensus PT $221.93 per other sources → JPM is ~$92 below consensus. Either (a) JPM PT is stale / not updated since prior price levels, (b) JPM has a valuation-discipline bear-anchor while remaining fundamentally bullish, or (c) PT methodology applies a 12-month-window discount that consensus does not. Without the PDF, can't disambiguate; flag for direct verification if needed.

---

## Other beneficiaries (ecosystem mentions, NOT JPM-specific commentary)

- **Alchip (3661.TW)** — Alchip themselves project AI ASIC revenue $13B 2024 → $150B by 2030 (~50% CAGR). JPM commentary not surfaced in WebSearch.
- **Socionext (Japan)** — co-design partner on Meta MTIA. JPM commentary not surfaced.
- **GUC (Taiwan)** — co-design partner on Meta MTIA. JPM commentary not surfaced.
- **TSMC** — fabs for all 5 hyperscalers AND for AVGO; the silicon-supply chokepoint.

---

## Cross-cohort joint state

| Name | Held? | Note relevance | Read | Source-confidence |
|---|---|---|---|---|
| **MRVL** | 5.9% Active | DIRECT — $130 PT + Trainium 3 firm POs + MAIA Gen 2/3 + "on track" mgmt-meeting | **REINFORCING** existing bull thesis; rebuts F-5 Trainium-demotion bear; valuation-tension question opened | T2 |
| **HYNIX** | 10.13% Core | INDIRECT — separate JPM HBM-shortage-to-2027 call (NOT this note) | Mild reinforce only; do not cascade from this note | T2 |
| **KIOXIA / SNDK / MURATA / NBIS / BESI** | YES / watchlist | NONE in this note | NEUTRAL | — |
| **AVGO** | NOT held | Strong bull case from JPM | Watchlist visibility only; not investable per existing scope | T2 |

---

## What I do NOT have (PDF would resolve)

- JPM's year-by-year ASIC TAM forecast table (2026/2027/2028/2029 specifics)
- Per-hyperscaler share-of-wallet breakdown
- ASP / volume / mix assumptions
- Bear case + risks AS JPM FRAMES THEM
- Whether JPM explicitly addresses NVIDIA-vs-ASIC dynamic (take-share vs grow-alongside)
- JPM-specific commentary on Alchip / Socionext / GUC / Achronix beyond Broadcom + Marvell
- Note's executive summary structure
- Direct citation that the "on track" line is from THIS note vs a follow-up
- JPM PT $130 methodology explanation (vs consensus $221.93)

---

## Cascade actions executed this commit

1. `companies/MRVL/thesis.md` — 2026-06-20 cross-ref appended; "on track" rebuts F-5 bear; valuation-tension surfaced; T2-tagged
2. `meta/tier-cascade-log.md` — cascade entry + lag-1 SHA fill on AM11 (5c093280)
3. `meta/environment-constraints.md` — NEW; WebFetch 403 finding documented for future-session survival

## NOT cascaded (discipline holds)

- HYNIX/thesis.md (HBM-2027 was separate JPM call)
- watchlist/candidates.md (no new investability surface)
- deep-dig-queue.md (AVGO out of scope)
- subagent-cost-yield-ledger.md (main-loop WebSearch, not Critical Rule #16 fire)
- CLAUDE.md (env finding doesn't rise to Critical Rule level)

---

## Key WebSearch sources (T2)

- [Jukan tweet (JPM ASIC direct synopsis 2025-06-15)](https://x.com/Jukanlosreve/status/1934943220842283082)
- [Sherwood News - JPM Marvell "on track" mgmt-meeting](https://sherwood.news/markets/jpmorgan-said-marvells-management-told-them-their-microsoft-and-amazon-custom-chip-business-on-track-reports/)
- [Investing.com - JPM Marvell Overweight $130 PT raise](https://www.investing.com/news/analyst-ratings/marvell-stock-price-target-raised-to-130-from-120-at-jpmorgan-on-ai-growth-93CH-4388313)
- [OpenAI - Broadcom 10 GW announcement](https://openai.com/index/openai-and-broadcom-announce-strategic-collaboration/)
- [Tom's Hardware - Custom AI ASIC state of play May 2026](https://www.tomshardware.com/tech-industry/semiconductors/custom-ai-asics-examined-from-broadcom-to-mtia)
- [Futunn - JPM HBM shortage to 2027 (separate call)](https://news.futunn.com/en/post/58854990/jpmorgan-shortage-of-hbm-is-expected-to-continue-until-2027)
- [LinkedIn - Harlan Sur JPM bio](https://www.linkedin.com/in/harlan-sur-8684a78/)

---

## Falsifier for this artifact

If user later obtains the actual JPM PDF and any LOAD-BEARING claim in this reconstruction is contradicted (especially the "on track" attribution, the $130 PT, or the Trainium 3 firm-POs-FY27 specific), this artifact gets a CORRECTION header and the MRVL thesis update gets re-evaluated. Document is reconstruction-confidence, not source-of-truth.
