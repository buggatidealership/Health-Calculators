# 2026-06-17 AM3 — Innolux 3481.TW (群創) CoPoS pre-entry verification (PM22 deferred 2×) → L28 FAIL pre-revenue; +410% from trough already; 2.9× analyst HIGH target; SKIP at NT$56

**Trigger:** PM22 (2026-06-16 `a738844`) Innolux 3481.TW surfaced as NEW WL-ADD candidate via Citrini Flash Point + TSMC/Ibiden/Innolux CoPoS Digitimes; subagent rate-limited 2× yesterday (a2a431476720c6f67 + a2892ffe56a531c4d). Per Critical Rule #16, retried with new Opus subagent (aaf850c57cff87cac, EIGHTEENTH operational) parallel with MRVL + TDK.

**Workflow:** INGEST + L26+L27+L28 + Workflow #9 MACRO-FIRST + B45

## L27 — Listed-status verification ✅ PASS (with accessibility caveat)

- **TWSE 3481.TW** actively trading (T1 [Investing.com](https://www.investing.com/equities/innolux), [Yahoo Finance](https://finance.yahoo.com/quote/3481.TW/))
- ADR: **NO confirmed liquid US ADR.** "INLIF Ltd" appears in SEC EDGAR but is the SEC reporting holding entity for Form 6-K filings, NOT a traded ADR (T2 [SEC EDGAR INLIF 6-K](https://www.sec.gov/Archives/edgar/data/0001991592/000121390025093083/ea025825201ex99-2_inlif.htm))
- **Foreign-investor accessibility:**
  - **Interactive Brokers: CONFIRMED** TWSE access (T1 [IB TWSE announcement 2023-07-21](https://www.interactivebrokers.com/en/general/about/mediaRelations/7-21-23.php))
  - **Degiro: NOT confirmed for Taiwan.** Degiro historically restricted Taiwan access for European retail. **Treat as UNCERTAIN / likely NO** — flag for investability check before any sizing.
- Min lot size: 1,000 shares TWSE board lot; at NT$56 = NT$56,000 ≈ €1,650/lot

## L26 — Segment revenue % at parent-co (FY2025 + Q4 2025 breakdown) ❌ FAIL pre-revenue

Total FY2025: NT$226.7B (T1 [BigGo Finance FY25 Q4 report](https://finance.biggo.com/news/twse_major_3481_1150310_152204); [companiesmarketcap revenue](https://companiesmarketcap.com/innolux/revenue/))

| Segment | Revenue NT$B (FY2025) | % of total |
|---|---|---|
| **Display panels (TV/Monitor/Auto/Mobile)** | ~NT$147B (est.) | ~65% |
| **Non-display (automotive solutions, industrial)** | ~NT$79B (est.) | ~35% (Q4 mix; FY full-year was ~51% per separate disclosure — likely auto-driven, NOT packaging) |
| **FOPLP / Advanced semiconductor packaging** | **~NT$0.1B** | **<0.1%** |
| **CoPoS glass-substrate** | **NT$0** | **0% — PRE-REVENUE (validation/NRE stage)** |

**CRITICAL L26 FINDING:** CoPoS-specific revenue = **NT$0 (PRE-REVENUE)**. FOPLP (a different, lower-tier packaging tech) = NT$100M against NT$226,700M total = **0.044% of revenue (rounding error)** (T1 [Taipei Times 2025-08-02](https://www.taipeitimes.com/News/biz/archives/2025/08/02/2003841326)).

Non-display 35-51% is **OVERWHELMINGLY automotive cockpit/HMI + industrial panels**, NOT packaging. "Non-display revenue surpassed 51% in 2025 mainly driven by automotive applications."

## L28 — Pure-play test ❌ FAIL: OPTION-pre-revenue

- CoPoS revenue: NT$0
- FOPLP revenue: <0.1% of sales
- **L28 VERDICT: OPTION-pre-revenue** (not pure-play, not sidecar; venture-tier optionality only)

**vs IBIDEN 4062 benchmark (PM23 pure-play PASS but valuation-extended):**

| Metric | Innolux 3481.TW | Ibiden 4062.T |
|---|---|---|
| CoPoS revenue today | NT$0 (pre-revenue) | Pre-revenue on CoPoS-glass; HAS existing ABF substrate revenue base |
| TSMC partnership | Named validation partner (2026-06-16) | Named validation partner |
| Existing advanced packaging revenue | FOPLP NT$100M (<0.1%) | Meaningful ABF IC substrate base |
| Business model | 99%+ LCD display panels | IC substrate + electronic components |
| L28 classification | **OPTION-pre-revenue** | MIXED: existing packaging rev + CoPoS pre-HVM |

Innolux is **lower-conviction than Ibiden** on packaging pure-play axis because Ibiden's EXISTING ABF substrate business gives it genuine CoWoS/HBM substrate revenue base. Innolux's packaging revenue is negligible.

## Macro CoPoS layer state (Workflow #9 step 1 first-principles)

**TSMC public commitment:**
- TSMC Chairman C.C. Wei (Jun 2026 shareholder meeting): CoPoS pilot line established; "no shortcuts" to mass production — **"at least 2-3 years away"** (T1 [BigGo Finance CC Wei](https://finance.biggo.com/news/kLg0kp4BrX5PFN7BKrXD))
- Digitimes 2026-06-16: TSMC teams with Ibiden AND Innolux to push CoPoS glass substrates (T1 [Digitimes](https://www.digitimes.com/news/a20260616PD217/tsmc-innolux-ibiden-packaging-cowos.html)) — PM22 trigger article

**HVM target year:**
- TrendForce 2026-04-13: CoPoS pilot June 2026 completion; **2028-2029 mass production ramp** (T1 [TrendForce](https://www.trendforce.com/news/2026/04/13/news-tsmc-advances-panel-level-packaging-copos-pilot-line-reportedly-set-for-june-completion-2028-29-ramp-eyed/))
- WCCFTech: "TSMC rushes CoPoS to 2028 production" — NVIDIA Feynman (post-Rubin Ultra) target customer (T1 [WCCFTech](https://wccftech.com/nvidias-feynman-ai-chip-poised-to-break-the-cowos-size-barrier-as-tsmc-rushes-copos-to-2028-production-analyst/))
- **Consensus HVM: 2028-2029.** Small-volume trial: 2027.

**Panel size trajectory:** CoPoS Gen 1: 515×510mm; Gen 2: 750×620mm (vs current CoWoS ~300mm wafer) (T1 [TechPowerUp](https://www.techpowerup.com/339963/tsmc-prepares-cowos-to-copos-shift-with-750-x-620-mm-panels/))

**Qualified/named suppliers (2026-06-17):**
| Supplier | Role | Status |
|---|---|---|
| Ibiden (4062.T) | ABF substrate for CoPoS organic layer | Named validation partner |
| **Innolux (3481.TW)** | Glass panel substrate / TGV / RDL | **Named validation partner (2026-06-16) — NOT qualified production supplier** |
| Absolics (SKC subsidiary, US) | Glass core substrate | $780M invest; HVM target end-2026 |
| TSMC VisEra | In-house pilot line | Pilot complete Jun 2026 |

**B40.x check on PM22 trigger article:** Digitimes 2026-06-16 is genuinely fresh (NOT B40.1 stale). However the CoPoS roadmap content has cycled since late 2025 (TrendForce Apr 2026, Feb 2026 Ibiden investment pieces). What's NEW in the Jun 16 Digitimes piece is Innolux being named as glass-substrate validation partner for FIRST time in English press. **Validation partner ≠ qualified production supplier of record for HVM** — distinction matters.

## Critical Rule #9 — Bypass-route framing (vs IBIDEN consensus #1)

**Consensus #1 Ibiden 4062.T (PM23 valuation extended further):** spot ¥18,595 (Jun 9) vs Morgan Stanley target ¥13,000 (Equal Weight) and analyst consensus avg ¥13,588; trading +37% above average sell-side target. Surged +19% on Jun 15 CoPoS announcement. YTD +533%. **PM23 valuation-extended verdict CONFIRMED and DETERIORATED.** (T1 [Simply Wall St Ibiden](https://simplywall.st/stocks/jp/tech/tse-4062/ibidenltd-shares/news/ibiden-coltd-tse4062-released-earnings-last-week-and-analyst))

**Innolux as non-consensus bypass — split verdict:**

**FOR genuine optionality:**
1. Panel makers have structural advantage in large-glass processing (TFT-LCD lines purpose-built for handling large glass at scale) — real manufacturing proximity to CoPoS
2. FOPLP monthly output exceeded 40M units (T2 ZH CMoney/UDN) — real capability
3. RDL interposer samples targeted H2 2026; TGV qualification with Tier-1 IDMs ongoing (T1 [Digitimes 2026-04-24](https://www.digitimes.com/news/a20260424PD201/innolux-packaging-foplp-technology-chips.html))
4. "More than Panel" strategic pivot confirmed Mar 2026 earnings call (T1 [Fugle.tw 2026-03-27](https://blog.fugle.tw/post/earnings-call-3481-2026-03-27))

**AGAINST (hope-narrative risk):**
1. **2024 Tainan plant SALE to TSMC for NT$17B** = NEGATIVE signal for Innolux's own packaging capacity (T1 [Taipei Times 2024-08-16](https://www.taipeitimes.com/News/biz/archives/2024/08/16/2003822291)). Asset-light framing is mgmt spin; they liquidated a major fab. TSMC's CoWoS capacity expanded on former Innolux land.
2. CoPoS glass-substrate revenue = zero. FOPLP = NT$100M / NT$226.7B
3. At NT$56 (Jun 2): trailing P/E 788×, forward P/E 62.5× — already priced for substantial optionality
4. **Analyst consensus avg = NT$19.47; HIGH = NT$27. Current NT$56 is 2.9× consensus HIGH.** Extreme dislocation.
5. ZH sources (CMoney/UDN): H2 2026 glass interposer **SAMPLE submission** — still NRE/sampling stage, not revenue
6. AUO (TWSE peer) is equally positioned with same TFT-LCD glass-processing heritage
7. SKC/Absolics (US-based) pursuing glass substrate w/ $780M investment, end-2026 HVM target — more focused pure-play on glass core

**Non-consensus alternatives ranked by specificity:**
1. SKC/Absolics (most specific but Absolics is private/unlisted)
2. Corning (glass material supplier, commodity-adjacent)
3. AUO (TWSE peer, same heritage as Innolux)
4. Innolux

## B45 — Regime-corrected priors

- Spot NT$56.10 (T1 2026-06-02 [Investing.com](https://www.investing.com/equities/innolux))
- 52w range: NT$11 to NT$60.50
- **1y from trough: +410% (NT$11 → NT$56)**
- **vs analyst consensus avg NT$19.47: -65% downside to consensus**
- **vs analyst HIGH NT$27: -52% downside to HIGH**

**Conclusion:** CoPoS narrative has **ALREADY fully (arguably excessively) rerated this stock.** Textbook "narrative ahead of fundamentals." Sequential catalyst stack: FOPLP mass production (Aug 2025) → Fugle earnings call (Mar 2026) → Digitimes RDL/TGV (Apr 2026) → Digitimes TSMC-Innolux-Ibiden (Jun 16 2026). Each catalyst added incremental repricing. **Entering at NT$56 with NT$19-27 analyst targets is buying narrative at 2-3× fundamental-anchored value.**

## Native-ZH signals

- CMoney forum: foreign investors (外資) bought 73,000+ lots in 5 days late May 2026 (T1 [CMoney 群創](https://cmnews.com.tw/article/newsyoudeservetoknow-e6800e2a-58a9-11f1-80ce-2942cda1230b)) — momentum buying, not fundamental accumulation
- UDN Money 經濟日報: "轉型正開始？群創、友達攻 CoPoS 玻璃基板" — frames Innolux AND AUO together as CoPoS plays = SECTOR-BASKET trade, not Innolux-specific alpha (T1 [UDN Money](https://money.udn.com/money/story/5607/9519853))
- ABMedia 鏈新聞: "TSMC-群創-Ibiden CoPoS" framed as material-stage NOT production-stage (T1 [ABMedia](https://abmedia.io/tsmc-partners-with-ibiden-and-innolux-in-copos-plp-glass-substrate))
- Fugle Mar 2026 earnings: "More than Panel" strategy confirmed; **no specific CoPoS revenue guidance given**
- Sell-side coverage (元大/富邦/凱基): ZH search did NOT surface named institutional buy ratings w/ packaging revenue models. CMoney/UDN frames Innolux as **概念股 (concept stock)** — standard Taiwan retail speculative thematic framing. Absence of institutional research models = negative signal.

## Verdict

**L28 VERDICT: FAIL — OPTION-pre-revenue**

| Criterion | Finding | Implication |
|---|---|---|
| Listed (L27) | ✅ TWSE 3481 | IB confirmed; Degiro UNCERTAIN |
| ADR | ❌ NOT confirmed | TWSE-only access |
| CoPoS revenue (L26) | 0.0% — pre-revenue | L28 FAIL for pure-play |
| FOPLP revenue | <0.1% of sales | Negligible |
| HVM year | 2028-2029 per TSMC C.C. Wei | 2+ years from revenue inflection |
| Stock rerate | +410% from trough; 2.9× analyst HIGH | Narrative FULLY priced — arguably OVER-priced |
| TSMC partnership | Named validation partner (NOT qualified) | Earlier-stage than narrative implies |
| Ibiden comparison | Has existing ABF revenue; YTD +533% | Both extended; Ibiden better-positioned |
| Sell-side | NT$19.47 avg, NT$27 HIGH | 52% downside to highest target |

**Tier candidate: VENTURE-OPTION-only — NOT WL-ADD at current price**

- **Sizing if entered:** ≤1% portfolio (venture-tier only); no starter or full position warranted
- **Entry condition:** Only revisit if (a) price corrects to NT$25-30 range (closer to fundamental anchor), AND (b) H2 2026 glass interposer sample PASSES TSMC validation (binary)
- **Skip condition:** At NT$56+, risk/reward deeply negative. SKIP until either (a) 40-50% correction OR (b) TSMC formal CoPoS supplier qualification (not "reportedly teams with")
- **Falsifier:** Innolux announces binding CoPoS supply agreement w/ TSMC + revenue guidance, OR packaging revenue exceeds 5% of total in any quarterly filing → revisit L28

## Critical Rule #11 — Position implication

**Position implication: 🔴 SKIP — NO ACTION — €0 — Narrative fully priced at NT$56 (2.9× analyst HIGH target NT$27); CoPoS revenue = NT$0 pre-revenue; HVM 2028-2029 per TSMC C.C. Wei "no shortcuts" + TrendForce + WCCFTech triangulation; Degiro Taiwan access UNCERTAIN; AUO is equally-positioned TWSE peer. Revisit only if correction to NT$25-30 AND glass interposer sample validation passes H2 2026.**

## Critical Rule #16 eighteenth operational validation: POSITIVE (N=18 cumulative). Rate-limit retry recovery successful (a2a4314 + a2892ff → aaf850c5).

## Meta-pattern integration: 4-of-5 sidecar/pre-revenue catches via L26+L27+L28 discipline this week

Combined with AM2 TDK results, the week's verifications now show:

| Date | Name | Verdict | Mechanism |
|---|---|---|---|
| PM19 | Sakai 4078.T | FAIL L26 (12% MLCC) | Industry-share ≠ segment-revenue |
| PM19b | Shoei Chemical | FAIL L27 (PRIVATE) | Verify-listed FIRST |
| PM20 | SMM 5713.T | FAIL L26 (sidecar) | Multi-segment dilution |
| PM20 | **Taiyo Yuden 6976** | **✅ PASS pure-play 71%** | Only clean pure-play this week |
| PM23 | IBIDEN 4062.T | ✅ PASS pure-play BUT valuation extended | Wait-for-pullback |
| AM2 | TDK 6762.T | FAIL L28 (~10% MLCC) | Battery conglomerate dominant |
| **AM3** | **Innolux 3481.TW** | **FAIL L28 (pre-revenue)** | **Narrative ahead of fundamentals** |

**Discipline working as designed.** L26+L27+L28 triplet has prevented 6 sidecar/pre-revenue/private/extended entries; preserved Taiyo Yuden as primary MLCC vehicle + Ibiden as packaging primary (post-pullback).

**Commit:** {to-be-filled-in-next-cascade}
