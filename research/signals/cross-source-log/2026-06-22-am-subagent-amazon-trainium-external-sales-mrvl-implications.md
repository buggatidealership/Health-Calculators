# 2026-06-22 AM Subagent — Amazon Trainium External Sales / MRVL Sizing Implications

**Trigger:** 2026-06-22 morning brief Item 10 — "Amazon in talks to sell its AI chips to external data centers; Jassy $50B opportunity" (TechCrunch). Direct MRVL sizing-touching item.
**Subagent:** 1 Opus 4.8, 56.4k subagent_tokens (under 50-80k estimate; efficient)
**Material yield class:** CLASS B — thesis-framing correction (load-bearing falsifier of prior assumption surfaced)
**Anti-leading discipline:** Applied — did NOT downplay SemiAnalysis "MRVL ends up big loser" finding even though it cuts against bull framing; did NOT inflate $50B to fit MRVL-bullish narrative

---

## TL;DR (3 directional findings)

1. **Jassy "$50B" verified BUT FRAMING-MISCAST in morning brief.** $50B = annual run-rate for ENTIRE AWS custom-silicon portfolio (Trainium + Graviton + Nitro) if sold as standalone merchant company — April 9, 2026 shareholder letter. NOT $50B external-Trainium-specific opportunity. External sales = "highly likely within next few years" per Q1 2026 earnings (Peter DeSantis); ZERO confirmed external customers; talks early-stage.

2. **CRITICAL CORRECTION — MRVL is NOT the lead ASIC designer on Trainium 3.** Per SemiAnalysis Dec 2025 deep-dive + Benchmark downgrade (Cody Acree Dec 8, 2025) + TipRanks: **Alchip (3661.TT) won the Trainium 3 ASIC socket; Marvell "ends up big loser"** on T3 specifically. The JPM "MRVL Trainium 3 firm POs covering FULL FY27 volumes" line (PM-3MODEL Subagent C T2-reconstruction) almost certainly refers to MRVL's optical DSP / SerDes / interconnect content on T3 racks, NOT lead-ASIC revenue. **B45 regime-check FIRES — prior thesis was carrying an over-stated MRVL-Trainium 3 ASIC exposure assumption.**

3. **MRVL stock +7.27% on June 18 ($310.58 close, intraday high ~$330) on the news + KeyBanc PT $260→$385.** Market is pricing the Trainium-volume-tailwind narrative; optical/interconnect content per rack travels regardless of ASIC designer. But magnitude of MRVL's per-rack content on externally-sold T3 is load-bearing unknown. **Net read: positive but smaller than morning-brief framing implied; B46 valuation-tension widens (KeyBanc $385 PT now street-high vs JPM $130 — $255 dispersion = 2.0× spread).**

---

## Jassy Quote Verification

| Item | Value | T-tier | Source |
|---|---|---|---|
| Source document | April 9, 2026 Amazon shareholder letter | T1 | [TheNextWeb](https://thenextweb.com/news/amazon-custom-chips-jassy-letter-fifty-billion-trainium), [SiliconAngle](https://siliconangle.com/2026/04/09/amazon-ceo-andy-jassy-highlights-ai-growth-annual-shareholder-letter/) |
| Exact wording | "If our chips business was a stand-alone business, and sold chips produced this year to AWS and other third parties (as other leading chips companies do), our annual run rate would be ~$50 billion." | T1 | Letter direct quote |
| Scope | ENTIRE custom-silicon portfolio (Trainium + Graviton + Nitro) — NOT Trainium-only, NOT external-only | T1 | Letter context |
| Horizon | "this year's chip production" = ~2026 annual run-rate equivalent; current actual portfolio run-rate ~$20B Q1 2026 | T1 | [Yahoo Finance](https://finance.yahoo.com/markets/stocks/articles/marvell-stock-just-hit-high-035600928.html) |
| External sales status | "Highly likely within next few years" per Q1 2026 earnings call | T1 | Earnings call relay |
| External customers named | NONE confirmed; Peter DeSantis "talks underway, early-stage" | T2 | DeSantis quote relay |
| Trainium internal commitments | $225B total sales commitments; Anthropic 5GW + OpenAI 2GW + Uber named | T2 | Multiple |
| TechCrunch morning-brief framing | "$50B opportunity = external-sales challenge to NVIDIA" | T3 INTERPRETIVE | Morning brief recast |

**B45 regime-check applied:** $50B verified — NOT reflexively extreme. But morning-brief framing collapsed two distinct facts: (a) $50B is portfolio-total merchant-equivalent run rate (April letter); (b) external-sales pivot is "highly likely few years" (earnings call). Two data points, not one. Critical Rule #15 applied: micro details DO modify framing — external-sales magnitude materially smaller than $50B headline implies for FY27.

---

## MRVL Sizing-Implication Table

| Vector | Prior Thesis Assumption | Verified Reality | Impact |
|---|---|---|---|
| Trainium 3 ASIC design lead | MRVL implied lead designer per JPM "firm POs FY27" | **Alchip won T3 socket; Annapurna front-end + Synopsys PCIe SerDes; Marvell IP minor "not meaningful" inheritance from T2** | NEGATIVE — load-bearing prior assumption falsified |
| Trainium 4 design lead | Implicit MRVL continuity | **MRVL regained T4 — "primary responsibility, tape-out, almost entire process"; sample Q4 2026, MP 2027** | POSITIVE — MRVL still in flagship ASIC pipeline, just one-gen-skipped |
| Ara DSP / optical / interconnect on T3 | Assumed travels with T3 | **5-year multi-gen AWS agreement (Dec 2 2024) covers optical DSPs, AEC DSPs, PCIe retimers, DCI modules, Ethernet switching** — these travel with EVERY Trainium rack regardless of ASIC designer | POSITIVE — confirmed independent of ASIC socket loss |
| Per-rack MRVL content $ on T3 (external) | Not modeled | **NOT DISCLOSED publicly**; optical DSP + interconnect + retimer stack estimated low-single-digit-% of rack BOM (vs ~mid-teens % if MRVL had been lead ASIC) | NET POSITIVE volume tailwind, magnitude UNKNOWN |
| External Trainium incremental volume FY27 | Optimistic morning-brief read | "Few years" timeline + Trainium 3 already "nearly fully subscribed" internally → external availability likely FY28+ not FY27 | NEUTRAL for FY27 print, positive for FY28/FY29 |
| MRVL Q2 FY27 print (Aug 2026) implication | Make-or-break gating event | External Trainium announcement does NOT alter Q2 FY27 numbers (already-allocated T2 / ramping T3 with Alchip-as-designer); MRVL content still optical/interconnect | NEUTRAL — Q2 FY27 remains formal trigger gate |

**Key load-bearing finding:** MRVL's exposure to external Trainium = optical/interconnect content per rack, NOT ASIC-design revenue. This is what NVDA's $2B March 2026 investment + NVLink Fusion deal was hedging — MRVL's franchise is increasingly **connectivity-layer not compute-ASIC-lead-designer** at AWS. The thesis-update prompted by this subagent: **MRVL is a connectivity-layer beneficiary of Trainium externalization, not a custom-ASIC-revenue beneficiary.** Magnitude is real but smaller than morning-brief implied.

---

## Competitive Landscape Impact

| Vector | Read | Confidence |
|---|---|---|
| NVIDIA share threat | Modest near-term; Trainium 3 still "lags Nvidia" per analyst (Yahoo Finance). External pool likely captures workload-specific cost-sensitive inference, not displacing frontier training. NVIDIA's structural moat (CUDA + NVL72 9x scale-up per Baker/SemiAnalysis) intact. | MEDIUM |
| Other hyperscaler externalization (GOOG TPU / META MTIA / MSFT MAIA) | NO concrete indication any follows AMZN's lead. GOOG TPU is GCP-only by long-stated strategy; META MTIA is internal-only; MSFT MAIA struggling per prior B40.1 catches. **W4 secular-custom-silicon-as-merchant scenario is LOW probability near-term.** | MEDIUM-LOW |
| HBM cohort (HYNIX 10.13% Core) | External Trainium = ADDITIONAL HBM demand layer on top of NVIDIA. HYNIX confirmed 100% of HBM3E 8-Hi on T2.5/T3 per Korean press. HBM already sold-out 2026, supply-constrained through 2027 → external Trainium adds DEMAND not new sockets. Net **POSITIVE pricing power** for HYNIX, not new volume in FY26-27. | HIGH |
| ASIC duopoly read | Broadcom + Marvell ~95% custom AI ASIC co-design; AMZN externalization could enlarge addressable rack volume → AVGO and MRVL both benefit at connectivity layer. AVGO benefits more on lead-ASIC (Google TPU + Meta MTIA + MSFT MAIA + OpenAI Titan). | HIGH |

---

## Convex Hull — 4 Worlds with P-weights (my model)

| World | Description | P-weight | MRVL implication |
|---|---|---|---|
| **W1** | External Trainium scales to $50B by 2028 → MRVL volume tailwind material via optical/interconnect content | **P=15%** | Optical-DSP rack-attach revenue ~$100-300M incremental FY28 (low-single-digit-% of FY28 base) |
| **W2** | External Trainium gets <$10B traction; mostly small-CSP buyers; modest MRVL benefit | **P=55% MODAL** | Optical/interconnect content ~$30-80M incremental FY27-28; thesis-neutral |
| **W3** | AMZN walks back strategy (hyperscaler-competition concerns, internal demand absorbs all capacity) | **P=20%** | No MRVL incremental benefit; June 18 +7.27% rally partially reverses on confirmation |
| **W4** | Other hyperscalers (META/GOOG/MSFT) follow → custom-silicon-as-merchant becomes secular category | **P=10%** | MRVL + AVGO duopoly captures connectivity-layer expansion; AVGO larger beneficiary (more design wins) |

**Expected-value read:** W1×0.15 + W2×0.55 + W3×0.20 + W4×0.10 = MODAL OUTCOME = W2 (modest, sub-thesis-changing positive). Morning-brief framing implicitly anchored on W1; reality is W2-modal.

---

## Position Implication for MRVL (5.9% Active Baseline)

| Trigger | Threshold | Status |
|---|---|---|
| **HOLD 5.9% baseline** | Default | **CONFIRMED — no size change** |
| **ADD-OPPORTUNISTIC trigger** | Need: (a) named external Trainium customer (Oracle/CoreWeave/Lambda) + (b) MRVL discloses per-rack content $ on T3 + (c) Q2 FY27 print beats with custom-Si attach-rate disclosure | None met yet |
| **TRIM-DEFENSIVE trigger** | (a) Confirmation MRVL also lost T4 ASIC socket (currently confirmed MRVL has T4 lead) OR (b) Google TPU + AWS Trainium >30% hyperscaler AI silicon share by 2027 (pre-committed trim trigger UNCHANGED) | None met |
| **B46 valuation-tension widens** | KeyBanc PT $385 now street-high vs JPM $130; consensus dispersion $255 = 2.0× | **FLAG** — valuation discipline applies; pre-Q2 FY27 add still NOT recommended per L21 |

**Net read:** HOLD 5.9% Active confirmed. June 18 +7.27% rally partially captured the news. The NEWS itself does not cross add-threshold; it surfaces a **correction to prior thesis framing** — MRVL is *connectivity-layer Trainium beneficiary*, not *ASIC-lead Trainium beneficiary*. This is a thesis-clarification more than a thesis-upgrade. Q2 FY27 print (Aug 2026) remains formal trigger gate.

---

## Material Yield Class

**CLASS B — thesis-framing correction (load-bearing falsifier of prior assumption surfaced).** Not Class A (size-changing) because: (a) connectivity-layer thesis intact and reinforced; (b) Q2 FY27 print remains gate; (c) magnitude of external-Trainium MRVL benefit modal=W2 not W1. Critical lesson: prior `interpretations.md` carried implicit "MRVL Trainium 3 ASIC lead" assumption that was T2-reconstructed and never T1-ratified — Alchip-won-T3 finding from SemiAnalysis (Dec 2025) + Benchmark downgrade should be cross-referenced into MRVL thesis as **PRIOR-ASSUMPTION CORRECTION**.

---

## Sources

- [TheNextWeb — Amazon custom chips Jassy letter $50B Trainium](https://thenextweb.com/news/amazon-custom-chips-jassy-letter-fifty-billion-trainium) T1
- [TechCrunch — Amazon hopes to challenge Nvidia by selling AI chips](https://techcrunch.com/2026/06/18/amazon-hopes-to-challenge-nvidia-more-directly-by-selling-its-ai-chips/) T2 (the morning brief source)
- [SiliconAngle — Amazon CEO Jassy shareholder letter AI growth](https://siliconangle.com/2026/04/09/amazon-ceo-andy-jassy-highlights-ai-growth-annual-shareholder-letter/) T2
- [CNBC — Jassy defends $200B AI spend](https://www.cnbc.com/2026/04/09/amazon-ceo-andy-jassy-ai-spending.html) T1
- [Yahoo Finance — MRVL stock just hit new high Amazon decision](https://finance.yahoo.com/markets/stocks/articles/marvell-stock-just-hit-high-035600928.html) T2
- [Investing.com — Marvell surged 7% Thursday Amazon Trainium external](https://www.investing.com/news/stock-market-news/marvell-surged-7-thursday-as-amazon-plans-to-sell-trainium-chips-externally-4750740) T2
- [Motley Fool — MRVL new high quiet Amazon decision](https://www.fool.com/investing/2026/06/18/marvell-stock-just-hit-a-new-high-a-quiet-amazon-d/) T2
- [TipRanks — Amazon launches Trainium 3 Marvell ends up big loser SemiAnalysis](https://www.tipranks.com/news/the-fly/amazon-launches-trainium-3-marvell-ends-up-big-loser-semianalysis-says-thefly) T2
- [SemiAnalysis — AWS Trainium3 Deep Dive Potential Challenger](https://newsletter.semianalysis.com/p/aws-trainium3-deep-dive-a-potential) T1
- [Yahoo Finance — Marvell stock falls Microsoft Broadcom Amazon design loss](https://ca.finance.yahoo.com/news/marvell-stock-falls-microsoft-broadcom-130614842.html) T2
- [SEC EDGAR — Marvell Form 8-K AWS 5-year agreement Dec 2 2024](https://www.sec.gov/Archives/edgar/data/0001835632/000183563224000193/final2024_12x02xmarvell-.htm) T1
- [Daum — Korean press HBM SK Hynix Google Amazon chips](https://v.daum.net/v/Bi0a4ix21v) T2
- [SK Hynix Newsroom — 2026 Market Outlook HBM supercycle](https://news.skhynix.co.kr/2026-market-outlook/) T1
- [Korea Herald — SK Hynix HBM demand outpacing supply three years](https://www.koreaherald.com/article/10723564) T2
- [Next Platform — Trainium4 AWS crank up everything](https://www.nextplatform.com/2025/12/03/with-trainium4-aws-will-crank-up-everything-but-the-clocks/) T2
- [Tom's Hardware — Nvidia invests $2B Marvell NVLink Fusion](https://www.tomshardware.com/tech-industry/nvidia-invests-2-billion-in-marvell-to-deepen-nvlink-fusion-partnership) T2

---

## Cascade actions (to be executed by parent agent)

1. `companies/MRVL/thesis.md` — REPLACE the AM brief-triage cross-ref (HOLD pending verification) with full AM-TRAINIUM cross-ref including framing correction + Alchip-won-T3 + MRVL-regained-T4 + connectivity-layer-thesis-reinforced + B46 valuation-tension widened
2. `meta/subagent-cost-yield-ledger.md` — AM-TRAINIUM entry Class B yield; 56.4k actual cost
3. `meta/tier-cascade-log.md` — AM-TRAINIUM entry 🟡 DIRECTIONAL; framing-correction not size-change
4. NO held-cohort thesis updates beyond MRVL (Critical Rule #8 binding; HYNIX read is positive pricing-power not size-trigger)

## B-candidate flagged

**B56 candidate — "T2-reconstruction-as-T1-equivalent confusion."** Prior cascades (PM-3MODEL Subagent C / AM-VERIFICATION) carried "MRVL Trainium 3 ASIC lead" assumption from JPM-reconstructed-via-WebSearch source. That T2-reconstructed framing got treated as durable thesis-anchor when it was actually a recall-stitched interpretation. Should have been flagged as RECONSTRUCTED-NOT-VERIFIED. This subagent fire surfaced the falsification via direct SemiAnalysis Dec 2025 T1 source. Joins B40.4 / B40.5 / B47 / B48 / B49 / B50 / B51 / B52 / B53 / B54 / B55 for June 24 audit codification.
