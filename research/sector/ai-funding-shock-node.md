# AI-FUNDING-SHOCK NODE — capital-markets/credit-channel framework (BUILT 2026-07-04, weekend deep-work #1)

**Origin:** BIS Annual Report gap (06-28) → upgraded with rates-driver (07-02) → affordability leg triangulated N≥3 (07-03). Data layer refreshed 2026-07-04 (agent, 46.6k; URLs in output; deltas flagged below). Companion pattern: PD-8 (financialization of the AI stack). This file = the standing framework; monitoring lives in day-state/wakes.

## The node in one sentence
**Financing capacity — not supply, not demand — becomes the binding constraint of the AI buildout when three legs tighten together: vendor financing unwinds, the rates regime raises the cost of capital, and buyer affordability forces capital-markets dependence.** Bypass routes exist per leg (below) — the node fires only when routes close simultaneously.

## The three legs (all triangulated, dated artifacts on file)
1. **VENDOR FINANCING / CIRCULARITY:** Nvidia revenue-share + BUYBACK GUARANTEE on unsold GPU capacity (SharonAI 8-K T1; Lucent-mechanic per Tunguz T2); equity-for-compute structures; deployment subsidiaries. Lucent calibration: $15B vendor financing vs ~$300M OCF at peak. **Tell #1 (cleanest): Nvidia 10-Q ~Aug-2026 buyback-liability footnote.**
2. **RATES DRIVER (refreshed 07-04):** YE-2026 cumulative Fed-hike odds ~two-thirds (UP from carried 54-60%); Warsh hawkish-hold (dot plot 9-hike/8-hold/1-cut, Jun-17) + "inflation too high" but AI-as-disinflationary openness (Jul-1 ECB Forum) — the disinflation door is the dovish escape hatch; 10Y 4.485%/30Y 4.985% (Jul-2; carried 5.19% = series mismatch, RECONCILE); BOK Jul-16 hike odds 69% (hawkish Gov. Shin); 30Y JGB CONFLICT (carried 2.810% vs refresher 4.04% — LOW-CONFIDENCE, primary-source check assigned before use).
3. **AFFORDABILITY:** AI-linked debt $236B through May (~4x YoY, Morgan Stanley — exact match to carried) → ~$570B FY26 run-rate; memory → ~48% of hyperscaler capex by 2027 (CLSA/SemiAnalysis relay); capex ~94-100% of hyperscaler OCF with the SEQUENCING TABLE now on file: **Amazon crossing capex>OCF NOW; Alphabet ~2027Q1; Meta ~2027Q3; Microsoft ~2028Q3** (refresher T2/T3) — the affordability constraint arrives name-by-name, not all at once. Alphabet FCF projected −~90% to $8.2B; Amazon FCF projected −$17-28B (T3, projections).
   **+1 evidence unit (2026-07-05, consumer/OEM tier — distinct from the hyperscaler tier above):** Tom's Hardware relay of the TrendForce Q3 survey (T2 relay of T1; SAME survey as the 2026-07-03 ingest — numbers +13-18% DRAM / +10-15% NAND NOT double-counted, B40 dedup positive) adds concrete price-resistance mechanics: PC OEMs built client-SSD inventory in H1-26 and are refusing hikes, suppliers now offering "more flexible contract negotiations" (first supplier-concession language of the cycle), and retail memory (USB/cards) pass-through is failing. Read: the affordability cap is now visible at the CONSUMER tier while the AI tier still pays — consistent with the node's leg-3 mechanism (demand narrows to capital-markets-funded buyers). Per `signals/cross-source-log/2026-07-05-morning-brief-ingest-2leg.md`.

## Leverage dashboard (refreshed 2026-07-04; deltas vs carried)
| Metric | Reading | Delta |
|---|---|---|
| FINRA margin debt | **$1.42T May-2026 (+8.5% MoM, +53.7% YoY)** | REVISED UP from carried $1.28T — leverage cushion LARGER than modeled; %GDP recalc assigned |
| AI SPV structured debt | ~$120B (narrow measure) | unchanged — **keep separate from** the ~$1.8T broad forward-commitment overhang (SPV + ~$1T purchase commitments + ~$800B uncommenced leases + ~$110B AP financing, BigGo T3) — different denominators, different questions |
| GPU-loan terms | 50-70% LTV of FMV; SOFR+400-700bp (8-12% all-in); loan-doc depreciation 20-30%/yr | new baseline |
| H100 rentals | cohort median ~$2.99/GPU-hr vs >$7 early-2024 (carried −70-90% directionally consistent); on-demand ticked UP ~4% since Jun-25 on some indices | mixed at the margin |
| Private credit | FSB flags first full-cycle test (May-2026 report T1); life insurers ~$1T private credit broadly (NOT AI-specific — nuance held) | new |

## CANARY BASKET (design change 07-04: basket, not single name — the stress ROTATES)
| Name | Current signal |
|---|---|
| CoreWeave (original canary) | **IMPROVING**: 5Y CDS 8.81pp→4.52pp; first investment-grade GPU-ABS (DDTL 4.0 $8.5B, Moody's A3); $4.2B 2026 maturity stands within $21B total LT debt, FCF deeply negative |
| **Nebius** (current flasher) | −17% Jul-1; liabilities $15B (+1,040% YoY); FY26 capex $16-20B vs similar ARR; Q1 capex > OCF. (Book note: NBIS position EXITED 07-03 on its own falsifier — node-relevant, no exposure) |
| Applied Digital | Improving: $1.59B JV junk priced 7% vs 10% six months prior |
| Maturity wall | 2026 cluster → bigger 2027 → 2028 tail, GPU-collateralized, concentrated borrowers+lenders; NO reliable aggregate $ (gap — rating-agency schedule wanted; one unidentified issuer ~$8.7B debt/$7.5B due 2026 — identify) |

## Telecom 1999-2002 calibration (transmission precedent)
Peak capex ~$120B (2000$, ~$213B today); >$500B US telecom bonds 1996-2001; HY default rate 9.80% (2001) / 12.80% (2002); telecom = 55%/52% of ALL HY defaults those years; IT spending −$30B YoY in the bust. The AI cycle's narrow SPV measure (~$120B) is comparable-scale to telecom's vendor-financing era; the broad commitment overhang (~$1.8T) is unprecedented — which denominator matters is exactly what the tells decide.

## Scenarios (my model, 12-month horizon; reweight on tells)
- **S-A Smooth refinancing / AI-disinflation escape (P~45%):** deflationary-AI framing lets Warsh avoid hikes; issuance absorbed; canaries keep improving (CoreWeave path generalizes). Book: held memory/self-funded suppliers fine; watch-list entries safe to stage.
- **S-B Localized failures, no systemic spread (P~35-40%):** 1-3 weak neoclouds fail/restructure (Nebius-profile names); GPU collateral marks down; hyperscalers absorb capacity cheaply (Meta-Compute-style resale accelerates); memory demand largely intact (LTA floors hold — Micron's 16 SCAs the template). Book: volatility, no falsifiers; rental-layer avoidance (already exited) is the protection.
- **S-C Broad funding shock (P~15-20%):** hike(s) land + a marquee default + private-credit gates → issuance window closes; capex cuts cascade INTO component orders; LTA floors tested for the first time. Book falsifiers that fire: L-series memory falsifiers via order cuts; BE watch benefits (third-party infra capital = the bypass that stays open — Brookfield-style project finance).
**Bypass routes (Rule #9, per leg):** vendor financing→more Nvidia-style backstops (transfers risk to the vendor — watch NVDA balance sheet); rates→AI-disinflation narrative + non-bank capital (infra funds, sovereigns — the OpenAI-5%-state-equity precedent class); affordability→usage-based procurement/resale markets + self-funded capex names (PD-6 screen: the HELD memory book funds from cash flow — the screen's point). **Affordability bypass now OBSERVED at the consumer tier (2026-07-05): OEMs qualifying Chinese NAND (first Western-brand YMTC pre-install, Lenovo/US retail; TC-14 N=3 per `signals/cross-source-log/2026-07-05-ymtc-lenovo-global-ssd-verification.md`) — priced-out buyers don't just defer, they substitute; caps consumer-tier pricing power without loosening the AI tier.**

## Standing tells (pre-registered; wakes monitor)
1. Nvidia 10-Q buyback-liability footnote (~Aug) — the vendor-financing tell.
2. Second vendor (AMD/Google) matching the buyback structure — industry-standard confirmation.
3. Amazon capex-vs-OCF crossing behavior in Q2 print (late Jul) — the affordability sequencing's first live test.
4. Neocloud maturity-wall events: any 2026 refinancing failure or GPU-collateral haircut widening (basket above).
5. Rates: Jul-29 FOMC language; BOK Jul-16; JGB 30Y primary-source reconciliation (assigned).
6. FSB/regulator follow-ups on private-credit AI concentration.
**Node-retirement falsifier:** if by 2027Q1 the S-A path has held through ≥2 hikes AND the maturity wall refinanced without a single failure, demote the node to quarterly review — do not let it become a permanent bear ornament.

**Position implication: NO ACTION — 🟡 — the node validates existing construction (self-funded-supplier book, rental-layer exited, BE watch as bypass beneficiary, cash buffer); it adds monitoring structure, not trades. Sizing changes only via its tells firing, user-gated.**

**GEOGRAPHIC SCOPE NOTE (added 2026-07-04 PM, per the EU-financing probe in `signals/cross-source-log/2026-07-04-all-regions-weekend-consolidation.md`):** EU exposure = "same private lenders, smaller book" — transmission channel is the sponsor linkage (KKR/Blue Owl/EQT run both the US SPV playbook and the nascent €3-5bn 2026 EU DC-ABS market), NOT a distinct EU sovereign-debt channel (InvestAI is small + grant-heavy). Contagion = narrower but NOT walled off; canary-basket watch extends to EU DC-ABS pricing as issuance grows.

**RATES-LEG REFRESH (2026-07-06):** JGB 10Y hit 2.830% — highest since Oct-1996 (Nikkei T1, +4.5bp, explicitly Takaichi-fiscal-risk framed) — fresh T1 for the Japanese long-end leg (the 30Y-JGB series conflict noted above REMAINS open; this is the 10Y). Yen ~162 w/ record ¥11.7T Apr-May intervention spent and ineffective vs the Fed gap (CNBC T1). BOK Jul-16 hawkish tilt (Meritz: 2.75% Jul, ~3.0% YE, T2). Per `signals/cross-source-log/2026-07-06-kr-jp-morning-scan-prelim-eve.md`.
