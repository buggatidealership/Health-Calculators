# 2026-06-11 PM — Hynix vs Micron deep verification (3-subagent parallel): share-split corrected, Falsifier #1 FIRED partially, MU new candidate

**Workflow:** Triggered by user question on Hynix-vs-Micron HBM4 qualification status; harness had stale Feb-2026 SemiAnalysis "Micron-zero Rubin" anchor.
**Method:** 3 parallel Fable-5 subagents on (A) share-split + Samsung qualification + Falsifier #1; (B) Micron LTA + capex + valuation; (C) packaging tech moat + Rubin trim. Native-kr + native-zh mandatory throughout.

## 1. Corrected share split (T1/T2 verified)

| Dataset | Hynix | Samsung | Micron | Source |
|---|---|---|---|---|
| Counterpoint total HBM Q1'26 | ~58% | ~21% | ~21% | T1 [Counterpoint quarterly](https://korea.counterpointresearch.com/global-dram-and-hbm-market-share-quarterly/) |
| NVDA Rubin HBM4 initial allocation Dec-2025 | **mid-50% (~55%)** | **mid-20% (~25%)** | **~20%** | T2 [Hankyung Feb-9](https://www.hankyung.com/article/202602092346i) |
| 2026 HBM4 forecast (NVDA+AMD+Google) | 54-55% | 28-29% | 17-18% | T2 Samsung Corporate Value Plan Mar-23 + Counterpoint |
| Hynix Q1 print guide | ">60% HBM4 share" | — | — | T1 [컨콜 전문](https://www.thelec.kr/news/articleView.html?idxno=55559) |

**Correction:** harness's prior "Hynix ~70% Rubin allocation per SemiCone" was either UBS-prior or HBM-total-prior-quarter. Adopt **~55% NVDA Rubin / >60% HBM4 segment-wide** as the corrected anchor.

**Hynix nuance (load-bearing):** Hynix is itself trimming NVDA-bound HBM4 **20-30% to shift mix to higher-margin HBM3E/DRAM** (T2 [ZDNet KR](https://zdnet.co.kr/view/?no=20260414110036)). So Samsung's gain is partly Hynix-voluntary-mix-shift, NOT pure competitive displacement.

## 2. HYNIX Falsifier #1 explicit status: FIRED-PARTIALLY

Per `companies/HYNIX/thesis.md:462` Falsifier #1 = "Samsung qualifies at NVDA for HBM4 with material share allocation":

- **Qualification (a):** T1 Huang June 5 statement "all three qualified" → **FIRED**
- **Material share allocation (b):** Samsung mid-20% Rubin = **AT THE THRESHOLD** (~25% material). 5-10pt of Samsung gain = Hynix voluntary mix-shift, not displacement
- **Samsung wins major share at HBM4E/post-Rubin (sub-clause c):** **NEW SIGNAL TRENDING ADVERSE** — Samsung first commercial HBM4 shipper Feb 12 + first HBM4E samples May 29, 2026 (T1 [Samsung Newsroom](https://news.samsung.com/global/samsung-electronics-begins-shipment-of-industry-first-hbm4e-samples)) + AMD primary-supplier status (T2 [Dealsite](https://dealsite.co.kr/articles/159434)). NVDA year-end decision on top-bin HBM4 is the watch event.

**Falsifier #1 status: FIRED at sub-clauses (a) and (b)-borderline. Sub-clause (c) is the new load-bearing watch.**

**Samsung overcame the yield issue HYNIX thesis carried as anchor:** 4nm logic-die yield now **>90%** (was 40% per prior TechStock anchor); 1c DRAM ~50% (T2 [DigiTimes Apr 17](https://www.digitimes.com/news/a20260417PD222/samsung-hbm4-nvidia-4nm-hbm.html)). This anchor in HYNIX thesis is now STALE and must be updated.

## 3. MR-MUF moat: PARTIALLY ERODED (not broken)

- Hynix MR-MUF extends through 16-Hi HBM4; hybrid bonding "premature" per Hynix (T1 native-kr [전자신문](https://www.etnews.com/20240903000242))
- **Samsung MP-first HBM4 Feb 12, 2026 + Nvidia qual passed** (T1 native-kr [머니투데이](https://www.mt.co.kr/industry/2026/06/05/2026060515111684507)) → TC-NCF cleared the qual bar; moat is no longer binary qualification, it's process-economics + yield curve
- Samsung moving to hybrid bonding for 16-Hi (T2 [Tom's Hardware](https://www.tomshardware.com/pc-components/dram/samsung-to-adopt-hybrid-bonding-for-hbm4-memory))
- **Micron HBM4 packaging = TC-NCF** (not MR-MUF, not hybrid bonding yet); 180+ Micron hybrid bonding patent filings for HBM4E/HBM5 (T2/T3)
- **Verdict:** Hynix retains ~70% market share concentration + 16-Hi cost/yield lead. Moat = MARGIN, not ACCESS

## 4. HBM4E architectural alignment — TSMC-coupled NEW pattern

| | Base die HBM4 | Logic die HBM4E |
|---|---|---|
| Hynix | TSMC N12 | TSMC 3nm under evaluation |
| Samsung | Internal SF4 (higher cost) | Internal SF4 |
| **Micron** | In-house CMOS | **TSMC, confirmed (custom HBM4E up to N3P 3nm)** |

**This is a NEW alignment:** Micron joins Hynix on the TSMC architecture rail for HBM4E; Samsung stays on internal SF4 = cost disadvantage. **TSMC-coupled architectures should win the custom-HBM4E generation** at higher margin.

## 5. Rubin trim April 2026 — TRUE, partially resolved

- KeyBank cut 2M → 1.5M units (-25%) due to HBM4 bottleneck (T2 [The Register Apr 8](https://www.theregister.com/2026/04/08/nvidia_supply_chain/), T3 native-kr [G-Enews](https://www.g-enews.com/article/Global-Biz/2026/04/202604071425032210fbbec65dfb_1))
- TrendForce cut Rubin 2026 AI-server share 29%→22% (T2)
- Mechanism: HBM4 qualification/verification lag + 22TB/s spec miss + cooling/networking (NOT CoWoS)
- Hynix trimmed 2026 NVDA HBM4 shipments 20-30% in response (overlap with the voluntary margin-mix-shift above)
- **Resolution:** Huang June 5 statement "all qualified, all in production" + DigiTimes May schedule = supply-side de-bottlenecked. **Volume target restoration to 2M NOT YET CONFIRMED.**

## 6. Micron HBM4 5-year LTA structure — P-4 register instance NEW (subagent B)

- Q2 FY26 (Mar 18, 2026): revenue **$23.86B (+196% YoY), EPS $12.07, ~75% GM**; Q3 guide **$33.5B at ~81% GM** (T1* via [CNBC](https://www.cnbc.com/2026/03/18/micron-mu-q2-earnings-report-2026.html), [Investing.com transcript](https://www.investing.com/news/transcripts/earnings-call-transcript-micron-technology-q2-2026-beats-forecasts-with-strong-growth-93CH-4569498))
- **First-ever 5-yr strategic agreement completed with one customer** (unnamed but almost certainly NVDA) + **broader 3-5yr agreements with fixed volume commitments and "in some cases" locked pricing** + **~30% of DRAM volumes under such contracts**
- **Entire CY26 HBM supply (incl. HBM4) sold out on price + volume**
- **vs Hynix:** Micron has *formally deeper* contract architecture (5-yr signed vs Hynix's annual de-facto NVDA negotiations + TrendForce Feb-2026 noted big-tech deals shifting to short-term/post-settlement, T2)
- **P-4 register instance:** the NVDA qualification gate IS the chokepoint-code; Micron's 5-yr LTA converts gate-grant into contracted rent — but **only partially durable at equity line** because pricing locked only "in some cases"; downturn-renegotiability is the falsifier sub-clause

## 7. Micron capex + capacity (B)

- FY26 capex raised $20B → **>$25B**; FY27 construction capex guided **+>$10B YoY**
- **Idaho ID1:** first DRAM wafers 2H CY27, 600k sq ft cleanroom
- **NY Clay** (CHIPS-subsidized, ~$100B megafab, 4 fabs): construction start Q2 CY26; first fab online ~Q3 2030; buildout to 2041
- **Taiwan: $1.8B PSMC Tongluo P5 acquisition Jan 2026** (~300k sq ft, volume FY28) — brownfield accelerant
- + Hiroshima/India HBM expansion

**P-27 (Post-Traumatic Supply Disorder) check:** Micron is **NOT in T7 PTSD behavior** — capex +25% intra-year, fab acquisition, 3 US fabs = EXPANSION MODE. Mitigants: Micron serves only ~50-66% of core-customer demand; new wafers arrive 2H27+. **2028 bit-supply collision watch** (MU greenfield + Hynix Yongin + Samsung).

## 8. Micron valuation + recognition stage (B)

- **Price ~$891.88** (6/11 close, T2 [stockanalysis](https://stockanalysis.com/stocks/mu/statistics/), [macrotrends](https://www.macrotrends.net/stocks/charts/MU/micron-technology/stock-price-history))
- 52-wk range **$103.38–$1,089.29**; ATH close **$1,079.57 on June 3, 2026**; now ~18% off ATH
- Mkt cap ~$1.095T; trailing P/E ~46; **fwd P/E ~9 (8.6-9.7)**; trailing EV/EBITDA ~28.5
- Short interest 35.2M / ~3.1%
- Stock up **~8x in 12 months**; both MU and Hynix crossed $1T

**Recognition stage: 3, edging 3.5** (per harness Principle #16/#31) — fully recognized, NOT multiple-priced-to-perfection (fwd P/E 9 is undemanding), but the 8x run + $1T cap mean perfection is embedded in ESTIMATES, not the multiple. Stage 3.5 watch.

## 9. HBM3E share trajectory (B)

- ~5% (2024 entry) → **21% peak Q2'25** → ~20-21% Q1'26 vs Hynix 58%, Samsung ~21%
- **Share HOLDING, not rolling off** — HBM3E (Blackwell B200/GB300) sustains while HBM4 ramps

## 10. Updated joint state (post-3-subagent)

| Dimension | HYNIX (held core) | Samsung (KRX ✗) | Micron MU (US ✓) |
|---|---|---|---|
| Rubin HBM4 allocation Dec-25 | ~55% (revised down from 70% framing) | ~25% (qualification + yield cleared) | ~20% (was zero per Feb-26, now shipping) |
| 2026 HBM4 forecast | 54-55% | 28-29% | 17-18% |
| HBM Q1'26 total | 58% | 21% | 21% (tied Samsung) |
| Falsifier #1 (Samsung material share) | FIRED at (a)+(b)-borderline; (c) HBM4E watch live | wins | n/a |
| Packaging | MR-MUF (margin lead remains) | TC-NCF + hybrid bonding for 16-Hi | TC-NCF + hybrid bonding patents HBM4E/HBM5 |
| HBM4E architecture | TSMC N12/3nm | Internal SF4 (cost disadvantage) | TSMC-coupled (joins Hynix rail) |
| HBM4 first commercial shipper | — | Samsung Feb 12 | — |
| HBM4E first samples | — | Samsung May 29 | — |
| LTA architecture | Annual de-facto NVDA negotiations | n/a | First-ever 5-yr LTA + 3-5yr fixed-volume coverage ~30% of DRAM |
| Capex stance | Demand-following 13-14% wafer CAGR to 2034 (Chey today) | n/a | EXPANSION ($25B+ FY26, +$10B FY27 construction) — NOT P-27 |
| Recognition stage | 3 advanced | n/a | 3.5 watch (8x in 12mo; fwd P/E 9 undemanding but estimates embed perfection) |
| Voluntary margin mix | Trimming NVDA HBM4 20-30% to HBM3E/DRAM margin capture | n/a | n/a |
| Sold-out CY26 | yes | yes | yes |

## 11. Updated parallel hypotheses

- **H1 (P~45%, my model):** HYNIX thesis is mild-trim not break — concentration premium compresses from "70% Rubin" framing to "~55% Rubin / >60% HBM4 segment + MR-MUF margin lead + HBM4E TSMC-3nm path + voluntary HBM3E margin mix-shift = thesis intact at slightly lower concentration premium." Stage-3-recognized.
- **H2 (P~35%, my model):** HBM4E generation watch is the NEW load-bearing event. Samsung HBM4E samples May 29 + AMD primary-supplier status = real watch-item. NVDA year-end decision on top-bin HBM4 is sub-clause (c) trigger. P~25% (my model) of further Hynix concentration compression within 6 months.
- **H3 (P~20%, my model):** Hynix margin-mix-shift IS the actual moat evolution — choosing WHICH customer segment to allocate to (HBM3E/DRAM > NVDA HBM4 at margin level) = principle #27 in motion at a level above raw capacity discipline.

## 12. Bypass-route map for HBM4 customer-side (Critical Rule #9)

| Bypass route | Non-consensus beneficiary | TTQ | Direction for held cohort |
|---|---|---|---|
| Customer substitution to qualified 2nd source | Samsung now-qualified Rubin | 0 (qual passed Feb 12) | NEUTRAL HYNIX (concentration premium compresses); SAMSUNG-positive (KRX ✗ — not investable) |
| Customer substitution to qualified 3rd source | **MICRON** with 5-yr LTA structure | 0 (volume shipping since CQ1'26) | **MU-positive; mildly NEUTRAL HYNIX** |
| Hynix voluntary mix-shift to higher-margin HBM3E/DRAM | Hynix itself captures margin > concentration | continuous | HYNIX-positive (moat evolution) |
| HBM4E architectural alignment with TSMC | Hynix + Micron joint beneficiaries; Samsung loses on cost | 2027 | HYNIX + MU positive; Samsung relatively casualty |
| Workaround — bit-density gains, smaller models | Same actors but compresses absolute bit-demand | continuous | NEUTRAL — Jevons treadmill holds per prior analyses |
| Chinese CXMT domestic absorption | CXMT (NOT investable, A-share) | years out at premium tier | NEUTRAL — tightens global balance at margin |

**No new bypass-route casualty surfaces for held HYNIX from the verification.** The Samsung-qualification falsifier (#1) firing was PRICED into the harness's standing falsifier framework — the actual update is moat-from-binary-qualification → moat-from-margin/yield/architectural alignment.

## 13. Cascades executed (same commit)

- `companies/HYNIX/thesis.md` — revise allocation language; Falsifier #1 status update; Samsung yield-anchor staleness fix; HBM4E sub-falsifier added; voluntary-margin-mix-shift note
- `companies/MU/thesis.md` — NEW STUB with full 4-leg thesis (LTA + sold-out + HBM4E TSMC + US capacity arriving 2027+); P-4 register instance noted; Stage 3.5 recognition flag
- `signals/triangulation.md` TC-1 — refresh from two-supplier to three-supplier framing; Rubin trim datapoint added; instance N+1
- `meta/cross-domain-pattern-register.md` P-4 — Micron 5-yr LTA new instance with partial-durability nuance

## 14. Watch calendar

- **NVDA year-end top-bin HBM4 decision** — sub-clause (c) trigger for HYNIX Falsifier #1
- **Samsung HBM4E volume win at NVDA** — accelerator for #1 sub-clause (c)
- **Rubin volume target restoration** (currently 1.5M, watch for 2M restore) — total HBM4 demand math driver
- **Micron Q3 FY26 print** (~June 2026 timing) — HBM4 ramp pace + capex update
- **2028 bit-supply collision watch** (MU greenfield + Yongin + Samsung)
- **MU LTA contract-liability disclosure in next 10-Q** — pricing-clause durability test
