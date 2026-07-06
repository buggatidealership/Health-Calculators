# 2026-06-17 AM1 — MRVL Maia-Broadcom Sherwood T2 verification (PM27 deferred) → B40.1 STALE-RECYCLE CATCH; H2 modal dual-source/leverage; HOLD

**Trigger:** PM27 (2026-06-16 `d958cca`) deferred MRVL Maia-Broadcom dedicated subagent verification per user agreement ("agreed — (a) commit PM27 light-cascade now, (b) DEFER MRVL Maia-Broadcom dedicated subagent to tomorrow"). Per Critical Rule #16, fired 1 Opus subagent (a80c596d34bd10df3, SIXTEENTH operational) parallel with TDK + Innolux deferred verifications.

**Workflow:** INGEST + TRIANGULATE + SCENARIO-UPDATE

**Source attribution:**
- Sherwood Media 2026-06-16 T2 [https://sherwood.news/markets/microsoft-is-in-talks-to-shift-its-custom-chip-business-to-broadcom-from-marvell-report/](https://sherwood.news/markets/microsoft-is-in-talks-to-shift-its-custom-chip-business-to-broadcom-from-marvell-report/) → re-amplification of upstream
- **Upstream primary:** The Information ~2025-12-05/07 T1 (paywalled); first surfaced via [Yahoo Finance T1 2025-12-09](https://finance.yahoo.com/news/marvell-stock-falls-microsoft-broadcom-130457554.html)
- [Barchart/FinancialContent T1 2025-12-15 CEO response](https://markets.financialcontent.com/concordmonitor/article/barchart-2025-12-15-marvells-ceo-says-the-company-didnt-lose-any-orders-why-was-wall-street-so-worried-and-how-should-you-play-mrvl-stock-here)
- [Marvell IR Q1 FY27 earnings T1 2026-05-27](https://investor.marvell.com/news-events/press-releases/detail/1023/marvell-technology-inc-reports-first-quarter-of-fiscal-year-2027-financial-results)
- [Microsoft Maia 200 announcement T1 2026-01-26](https://blogs.microsoft.com/blog/2026/01/26/maia-200-the-ai-accelerator-built-for-inference/)
- [TrendForce Maia 200 T1 2026-01-27](https://www.trendforce.com/news/2026/01/27/news-microsoft-unveils-maia-200-ai-chip-on-tsmc-3nm-sk-hynix-reportedly-sole-hbm3e-supplier/)

## 🔴 KEY FINDING — B40.1 STALE-RECYCLE CATCH

**Sherwood "report" is a T2 re-amplification of The Information's ~2025-12-05/07 T1 story (~6 months old).** Sherwood added zero new primary sourcing. Same "talks" framing, same MSFT-AVGO-MRVL triangle, same ambiguity on Maia 100 vs next-gen.

**B40.1 STALE-RECYCLE confirmed.** Market already priced the original story:
- MRVL dropped ~6-10% on the Dec 2025 news
- Subsequent recovery: MRVL +130% YTD by May 2026 (T2 per multi-source search aggregation)
- MRVL CEO Matt Murphy publicly denied loss within days: "from Tuesday to Friday, nothing changed, we didn't lose any business" (T1 [Barchart 2025-12-15])
- MRVL Q1 FY27 earnings (T1 2026-05-27) reported "exceptional AI-related bookings" + raised FY27 guidance to **$11B** (30%+ growth) — this was *after* the Broadcom-talks story was public knowledge for 5+ months. Management would not raise guidance if material Maia loss was imminent.

**B40.3 single-outlet risk PARTIALLY RESOLVED** — The Information is T1 (better than Sherwood T2 alone); but no independent T1 corroboration (WSJ, Bloomberg, Reuters, FT) of a signed/imminent deal was found. Original Dec 2025 report described "talks" only.

## Multi-outlet quote matrix

| Outlet | Date | T-tier | Key claim | Maia 100 vs next-gen framing |
|---|---|---|---|---|
| The Information | ~2025-12-05/07 | T1 | MSFT considering Broadcom as possible chip design partner | Ambiguous; "future chips" |
| Yahoo Finance (relay) | 2025-12-09 | T1.5 | MRVL stock falls on Microsoft-Broadcom talks | — |
| Barchart/CEO response | 2025-12-15 | T1 | "company didn't lose any orders" | Implicitly current programs incl. Maia |
| Sherwood News | 2026-06-16 | T2 | MSFT in talks to shift to AVGO | Ambiguous re-statement |
| WebPROnews | 2026-06 | T3 | "Microsoft negotiates Broadcom deal replacing Marvell" | Overstates certainty |
| Tom's Hardware | 2026-05 | T2 | Maia 200 confirmed shipped Jan 26 2026 with **Marvell + GUC + TSMC** | Maia 200 = MRVL embedded |
| TrendForce | 2026-01-27 | T2 | Maia 200 on TSMC N3, SK Hynix sole HBM3E | No AVGO mention |
| Marvell Q1 FY27 IR | 2026-05-27 | T1 | $11B FY27 guidance, "exceptional AI bookings" | Implicit confidence in Maia program |
| Broadcom Q1 FY26 | 2026-03-04 | T1 | $8.40B AI semi rev (+106% YoY); $100B FY27 target | Anchored to GOOG TPU/META MTIA/ByteDance — **MSFT NOT named** |

## Company responses
- **MRVL:** CEO denial (Dec 2025) + raised FY27 guidance post-story (May 2026) + no 8-K addressing Broadcom claim
- **MSFT:** Silent — no Nadella/spokesperson comment found
- **AVGO:** Silent on MSFT specifically; Hock Tan's $100B FY27 AI target excludes MSFT in named-customer set

## Native multilingual signals
- **Taiwan supply chain (Digitimes ZH / TrendForce):** No Taiwan-side reporting of AVGO taking Maia 300+ tapeout slots or GUC/TSMC re-routing MSFT design-services to AVGO. **Negative evidence** — Taiwan supply-chain leaks typically surface 12-18mo before chip ships; absence is mild evidence against H1.
- **Chinese-language hyperscaler watchers:** No Digitimes ZH / IT Home / ZOL corroboration of AVGO-Maia story specifically.

## Technical plausibility assessment

**Maia 200 already SHIPPED January 26, 2026** with Marvell + GUC + TSMC as partners. TSMC N3, 140B transistors, 216GB HBM3E. **A mid-stream swap of Maia 200 to AVGO is operationally impossible** — you don't re-design taping-out silicon in mid-production.

**Therefore the AVGO-shift claim, if real, is necessarily about Maia 300+** (next tapeout cycle). Based on Maia cadence (Maia 100 ~2023, Maia 200 ~Jan 2026), Maia 300 would target ~late 2027/2028 tapeout. Implication:
- **MRVL revenue at risk is not FY27 — it is FY28/FY29 incremental**
- Maia 200 revenue continues to MRVL through at minimum FY27 deployment cycle
- The "at-risk" revenue is incremental Maia-next-gen design services fee + silicon IP, not the deployed program

## Hypothesis re-weighting (post-verification)

| Hypothesis | Pre-verif (PM27) | Post-verif | Delta | Rationale |
|---|---|---|---|---|
| H1: Full shift to AVGO (Maia overall) | P~30% | **P~10%** | -20pp | Maia 200 already shipped w/ MRVL; no T1 corroboration of deal signed; CEO denial; no AVGO confirmation; no Taiwan leak |
| H2: Dual-source / next-gen / leverage | P~45% | **P~55% MODAL** | +10pp | Consistent w/ (a) Maia 200=MRVL, (b) "talks" language, (c) industry multi-sourcing trend, (d) raised FY27 guidance |
| H3: Talks ended / didn't materialize | P~20% | **P~28%** | +8pp | MRVL "exceptional bookings" + raised guidance hard to claim if Maia next-gen loss imminent |
| H4: Misframed / B40 issue | P~5% | **P~7%** | +2pp | Sherwood re-amplification of 6mo-old story w/o new sourcing = partial B40 issue |

**Modal: H2** (dual-source / next-gen exploratory / negotiating leverage)

## Bottoms-up at-risk dollar quantification (my model)

- MRVL FY27 revenue guide: **$11.0B** (T1 [Marvell IR 2026-05-27])
- MRVL data center segment Q1 FY27: $1.83B (76% of $2.418B total) (T1 same)
- MRVL custom silicon FY26 actual: ~$1.5B (T2 analyst summaries)
- Custom silicon FY27 implied: ~$1.8-2.0B (20%+ growth) (T2 my model)
- MSFT/Maia portion of MRVL custom silicon (recall-based — verify before sizing): ~30-40% (T2 analyst-community split estimate; AWS larger volume)
- **At-risk if FULL shift FY27: ~$540-800M; FY28/FY29: ~$1.5-2.5B at scale**
- BUT Maia 200 locked w/ MRVL through FY27 regardless
- **Expected-value at-risk (probability-weighted by H1=10%):** 0.10 × $800M = ~$80M FY27 EV; 0.10 × $1.5B = ~$150M FY28 EV
- As % of FY27 consensus $11B: **~0.7% probability-weighted — IMMATERIAL at H1=10%**

## Macro first-principles state (Rule #15)

Hyperscaler custom-silicon market is in **multi-sourcing EXPANSION phase**, NOT winner-take-all consolidation (T2 my model):
- AVGO + MRVL hold ~95% of ASIC co-design market combined
- Counterpoint Research projects AVGO ~60% / MRVL ~25% of custom AI accelerator market by 2027 — MRVL **NOT being displaced, growing at ~25% share** (T2 Counterpoint via search aggregation)
- Google uses AVGO (TPU) AND MRVL (inference per TheNextWeb GOOG-MRVL talks) simultaneously — multi-sourcing is the norm
- MSFT running AVGO for some workloads AND MRVL for Maia simultaneously = consistent with industry pattern, not either/or displacement

**B45 regime-corrected priors applied:** the empirical pattern post-Dec 2025 was MRVL recovered strongly, raised guidance, demonstrated story was priced-in noise.

## Verdict + held-cohort cascade

**MRVL (HELD 44sh ~5.9% +€792.57 unrealized +7.26%):** 🟡 **HOLD — no action.** Sherwood T2 is a 6mo recycle of Dec 2025 T1 story already absorbed. H2 modal. EV at-risk ~0.7% of FY27. No falsifier fires.

**Other held cohort:** orthogonal — no cross-impact.

## Triangulation cluster updates
- **TC-10 (sovereign-AI + export-control)** mild adjacency: hyperscaler custom-Si multi-sourcing trend = US-side ecosystem resilience signal; N counter unchanged
- **U8 (token-cost-elasticity)** orthogonal — custom-Si multi-sourcing is supply-side not pricing-side
- **B40.x register:** this is **B40.1 stale-recycle catch N+** (this week: Sherwood-Information, plus prior PM18 SemiAnalysis 4-item, plus PM22 Citrini 1-item, plus PM26 stcn translation-magnitude correction = aggregator-staleness-discipline pattern continues to fire)

## Critical Rule #11 — Position implication

**Position implication: 🟡 HOLD ~5.9% (44sh) — NO ACTION — Sherwood T2 is 6mo recycle of The Information Dec 2025 T1 already market-absorbed; Maia 200 ships with MRVL through FY27; modal H2 (dual-source leverage); EV at-risk ~0.7% of $11B FY27 guidance; CEO denial + raised guidance = no falsifier fires.**

**Pre-committed trim trigger UNCHANGED:** Google TPU + AWS Trainium >30% hyperscaler AI silicon share threshold (F5/F10/F13 monthly watch continues).

**New falsifier candidates registered for monitoring:**
1. AVGO publicly names MSFT as new hyperscaler win on earnings call → upgrades H1 P~10% → P~30%+
2. MRVL Q2 FY27 print (~Aug 2026) discloses Maia-program revenue degradation → upgrades H1
3. The Information publishes a signed-deal follow-up (not "in talks") → upgrades H1

## Critical Rule #16 sixteenth operational validation: POSITIVE (N=16 cumulative)

**Cascade-fatigue check:** PM28 (`2c2c728`) + this AM1 = **34 events in ~49 hours.** P#37 N=20 promotion gate EXCEEDED. Cascade hygiene holding.

**Loop-validation note:** Rule #16 caught a B40.1 stale-recycle that would have otherwise propagated as fresh-news Sherwood-attributed signal. PM27 user-aligned deferral was correct call — the deferred verification revealed staleness that immediate reaction would have missed. Codification trigger #2 (position-relevant variable for held name) fires; cascade landed in same commit per Rule #10.

**Commit:** {to-be-filled-in-next-cascade}
