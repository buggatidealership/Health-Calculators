# TSMC PLP / CoPoS ETNews 2026-06-15 — 2-subagent verification + TC-5 cascade

**Date:** 2026-06-15 PM
**Trigger:** user-shared translated ETNews article 2026-06-15 ("TSMC Preparing for Full-Scale Mass Production of Panel-Level Packaging (PLP)")
**Source originating:** ETNews (전자신문) 2026-06-15 — [etnews.com/20260615000239](https://www.etnews.com/20260615000239); English aggregator same-day [Sammy Fans](https://www.sammyfans.com/2026/06/15/tsmc-panel-level-packaging-ai-chips/)
**Workflow:** INGEST → verification (2 parallel subagents per Critical Rule #15 + Principle #37) → scoped cascade
**Principle #37 intake tier (final, post-verification):** 🟡 DIRECTIONAL — signal-amplifying restatement of existing TC-5 cluster; B40.1 partial-stale + B40.2 timeline-inflation flags binding; Subagent B independently verified NEW T1 substrate / equipment / customer datapoints that DO qualify for TC-5 N+1 promotion

## Pre-verification hypothesis set (my model, parallel)

- **H1 (P~55%)** TSMC PLP = TSMC CoPoS (TC-5 N+1)
- **H2 (P~30%)** TSMC PLP ≠ CoPoS (distinct workflow / new cluster)
- **H3 (P~15%)** Korean source signal-amplifying / B40.x risk

## Post-verification reweighting (per L25 explicit Bayesian update)

| Hypothesis | Post-A+B P | Verification evidence |
|---|---|---|
| H1 confirmed | 95% | CoPoS = "Chip-on-Panel-on-Substrate" is TSMC's brand name; PLP = industry-generic descriptor. Same VisEra pilot completing June 2026; same AP7 Chiayi volume fab |
| H2 rejected | 5% | No architectural distinction between PLP and CoPoS in the article context |
| H3 partial-confirmed | 75% | B40.2 timeline-inflation: ETNews "as early as 2027" mass production contradicted by C.C. Wei June 4 2026 T1-adjacent ("2-3 more years" → 2028-29 ramp); B40.1 partial-stale: "Samsung holds the upper hand" valid for 2019-2024 mobile/consumer PLP, stale for AI-chip segment |
| H4 (NEW post-B) Subagent B surfaces NEW T1 datapoints | 95% | See "TC-5 N+1 datapoints" below |

## Claim-by-claim tier reassessment (intake refinement per Principle #37)

| Claim in article | Verified tier | TC-5 impact |
|---|---|---|
| TSMC PLP = CoPoS | 🟢 HARD | Naming reconciled |
| 600×600mm panel | 🟡 DIRECTIONAL | Future-gen spec; current TSMC pilot is 310×310mm per TechPowerUp T2; scales to 515×510 then 750×620 in later generations |
| 5-6× output vs 300mm wafer | 🟡 DIRECTIONAL | Consistent across all T2 sources; throughput thesis intact |
| Mass production "as early as 2027" | 🔴 SPECULATIVE / B40.2 | **Contradicted by C.C. Wei T1-adjacent June 4 2026.** Consensus: 2027 trial/early-commercial, 2028-29 volume ramp |
| "Global AI chip customer secured" | 🔴 SPECULATIVE | NVIDIA attribution single-source TrendForce T2 June 2025 ("reportedly tapping NVIDIA"); no T1 TSMC disclosure; Kuo names NVIDIA Feynman analyst-T3 |
| MCE supply-chain negotiations underway | 🟡 DIRECTIONAL | Confirmed via Digitimes Aug 2025 T2; not new vs prior cluster state |
| Samsung "holds upper hand" | 🟡 DIRECTIONAL / B40.1 partial | Stale for AI-chip segment (~2yr lag); current for mobile/consumer |

## TC-5 N+1 datapoints surfaced by Subagent B (the actual reason this article triggers a cascade — independent of the article's own framing)

These are T1 / T1-adjacent items Subagent B verified that update the TC-5 cluster state:

1. **🟢 Camtek (CAMT) Golden Eagle inspection system explicitly rated 600-650mm for FO-PLP** ([Camtek panel solutions page T1](https://www.camtek.com/solution/panel/)) — directly named equipment beneficiary at 600mm panel format; first-call in PLP inspection layer
2. **🟢 NEG TGV (through-glass-via) laser processing release 2025-05-22 for the large-format glass-core** ([NEG native-jp T1](https://www.neg.co.jp/en/news/20250522-1.html)) — follow-on to the 515×510mm GC Core release; NEG remains the only disclosed producer of large-format glass-ceramic substrate at T1
3. **🟢 BESI Q1 2026 orders doubled YoY; die-attach 80% of FY25 EUR 591M revenue; hybrid bonding EUR 476M projected FY26** ([BESI Q4-25 results T1](https://www.globenewswire.com/news-release/2026/02/19/3240803/0/en/BE-Semiconductor-Industries-N-V-Announces-Q4-25-and-Full-Year-2025-Results.html); [3D InCites Mar 2026 T2](https://www.3dincites.com/2026/03/besi-at-the-center-of-the-packaging-power-shift/)) — format-agnostic die-attach = PLP ramp adds volume without new tool architecture
4. **🟢 Absolics/SKC raised 1.2T won May 2026 with 589.6B won earmarked for Absolics end-2026 MP; AMD + AWS named customers in pre-qual** ([TrendForce May 2026 T2](https://www.trendforce.com/news/2026/05/08/news-skc-said-to-speed-glass-substrate-mass-production-by-year-end-advances-new-non-embedding-tech-for-u-s-client/); [Seoul Economic Daily May 2026 T2](https://en.sedaily.com/finance/2026/05/12/skc-raises-12-trillion-won-to-fund-glass-substrate-push)) — AMD + AWS being explicit Absolics customers is NEW for TC-5 cluster state
5. **🟢 ASE 3711.TW signed TSMC June 2025 co-development agreement for 310mm panel flow; ASE PLP automated line MP H1 2027** ([Digitimes Feb 2026 T2](https://www.digitimes.com/news/a20260225PD204/packaging-ase-2026-demand-panel.html)) — ASE = explicit TSMC overflow handler for lower-end CoWoS migration into PLP; first-named OSAT in roadmap hand-off
6. **🟢 IBIDEN ¥500B FY2026-2028 capex; ¥280B Ono Plant; 2.5× AI server substrate capacity by FY2028; sequential MP from FY2027** ([Globe and Mail T1 IR relay](https://www.theglobeandmail.com/investing/markets/stocks/IBIDF/pressreleases/10864/ibiden-to-invest-yen500-billion-in-expanding-ic-package-substrate-capacity-for-ai-and-high-performance-servers/)) — already in IBIDEN thesis; reinforced; flag = FC-BGA organic, NOT glass-core (medium-term displacement risk)
7. **🟢 SEMCO glass substrate sample-shipped to Apple + Broadcom April 2026; MP target 2027** ([Digitimes June 2025 T2](https://www.digitimes.com/news/a20250602VL201/semco-glass-substrate-packaging-tsmc-production.html)) — Samsung-side PLP / glass-core capability has named customer engagement; investability filter blocks (KRX-only), reference only
8. **🟢 Nepes Laweh (Korean OSAT, KRX-only reference) already operates world's first 600×600mm PLP volume production at Cheongan ~96,000 panels/yr** ([BusinessWire 2021 T1](https://www.businesswire.com/news/home/20211223005121/en/Nepes-Laweh-to-Set-New-Industry-Benchmark-With-600mm-Large-Panel-M-Series-Fan-Out-Volume-Production)) — corrects the article's framing that 600mm production is forward-looking
9. **🟢 NVIDIA Feynman named first CoPoS adopter per Ming-Chi Kuo analyst note** ([WCCFTech T2 relay of Kuo T3](https://wccftech.com/nvidias-feynman-ai-chip-poised-to-break-the-cowos-size-barrier-as-tsmc-rushes-copos-to-2028-production-analyst/)) — customer identity at analyst-tier; insufficient for T1 attribution but raises NVIDIA-Feynman probability materially
10. **🟢 ABF bear-case inversion REINFORCED**: hybrid glass-core + ABF build-up architecture; ABF TAM EXPANDS with glass-core adoption (more sophisticated build-up dielectric on glass core). ABF market USD 11.56B 2026, ~27.5% CAGR to 2032 — independent T2 verification of the inversion already logged at TC-5

## Bypass-route check (Critical Rule #9)

| Route | Use case | TSMC PLP impact 2027 |
|---|---|---|
| CoWoS-L/S (TSMC) | Top-end training GPUs (Blackwell, Rubin Ultra, max HBM stacks) | NOT displaced; persists for 9.5× reticle by 2027 |
| **CoPoS / PLP (TSMC + ASE)** | Next-gen large-die AI training (Feynman+), HPC ASICs | **Target market** — TSMC primary, ASE overflow handler |
| Intel EMIB / FOCoS-Bridge / FO-PLP (OSATs) | Inference, network ASICs, hyperscaler customs | Bypass route — AMD / Google / Amazon workloads |
| Samsung PLP (via SEMCO + Samsung Foundry) | Second-source for top-end PLP | 12-18mo lag vs TSMC; meaningful bypass with execution risk |

## Net cluster impact (TC-5 update)

TC-5 N=5 → **N=7** (NOT promoted off the article itself — promoted off the NEW T1 datapoints Subagent B independently verified). Updated cluster state per TC-5 cell.

## Cascade scope (per Principle #37 scoped-cascade — files actually intersecting)

**Files UPDATED in same commit:**
- `signals/triangulation.md` TC-5 — N=5 → N=7 with new instances (Camtek Golden Eagle 600mm; BESI Q1 2026 orders doubled; ASE-TSMC PLP co-dev; Absolics AMD+AWS named; NEG TGV; NVDA Feynman per Kuo)
- `companies/IBIDEN/thesis.md` — ASE-TSMC PLP co-dev + glass-core medium-term displacement risk surfaced (NEW context)
- `companies/CAMT/thesis.md` — Golden Eagle 600-650mm PLP-rated T1 (NEW)
- `companies/BESI/thesis.md` — Q1 2026 orders doubled YoY + die-attach 80% revenue (NEW)
- `watchlist/candidates.md` — CAMT promote framing; BESI promote framing; ASE 3711.TW REFERENCE candidate; SEMCO reference; Nepes reference (investability-blocked)
- `meta/deep-dig-queue.md` — IBIDEN priority RAISED again (glass-core medium-term displacement risk = additional dissection vector); CoPoS BOM-level item resolved at supplier-mapping layer
- `meta/biases-watchlist.md` — B40.1 N+1 instance (Samsung incumbent partial-stale); B40.2 N+1 instance (ETNews 2027 timeline-inflation)
- `meta/tier-cascade-log.md` — new cascade entry + prior-entry SHA fill (6a3bade)

**Files NOT touched (per scoping rule — no genuine intersection):**
- HYNIX, SNDK, SUMCO, MURATA, MRVL, DDOG, NOW theses (orthogonal — packaging is downstream of memory + chip layers but doesn't update those theses)
- AGC thesis (exit was 2026-06-14; this datapoint reinforces but doesn't change historical-artifact framing)
- `portfolio/holdings.md`, `portfolio/targets.md`, `portfolio/changes.md` (no position changes triggered — CAMT/BESI/IBIDEN are P1 watchlist candidates, not held)
- `meta/methodology.md`, `research/CLAUDE.md`, `meta/session-prime.md`, `meta/tags.md`, `INDEX.md` (no new principle / convention / retrieval rule triggered)
- `sector/themes.md`, `sector/where-we-are.md` (no new theme; TC-5 is already in the synthesis ledger)
- `predictions/lessons.md` (ABF bear-case inversion already logged elsewhere; this is reinforce)

## Sources

- ETNews 2026-06-15 [native-kr](https://www.etnews.com/20260615000239)
- Sammy Fans 2026-06-15 [English](https://www.sammyfans.com/2026/06/15/tsmc-panel-level-packaging-ai-chips/)
- TrendForce 2026-04-13 [CoPoS pilot 2028-29 ramp T2](https://www.trendforce.com/news/2026/04/13/news-tsmc-advances-panel-level-packaging-copos-pilot-line-reportedly-set-for-june-completion-2028-29-ramp-eyed/)
- TrendForce 2025-06-11 [NVIDIA first client T2](https://www.trendforce.com/news/2025/06/11/news-tsmc-reportedly-gears-up-for-copos-mass-production-by-2029-tapping-nvidia-as-first-client/)
- TechPowerUp [CoPoS 310mm T2](https://www.techpowerup.com/337960/tsmc-prepares-copos-next-gen-310-x-310-mm-packages); [750x620mm T2](https://www.techpowerup.com/339963/tsmc-prepares-cowos-to-copos-shift-with-750-x-620-mm-panels)
- TrendForce 2024-06-25 [Samsung PLP early entry T2](https://www.trendforce.com/news/2024/06/25/news-samsung-gains-early-market-entry-advantage-in-the-panel-level-packaging-sector-ahead-of-tsmc/)
- Camtek [panel solutions T1](https://www.camtek.com/solution/panel/)
- BESI [Q4-25 + FY25 results T1](https://www.globenewswire.com/news-release/2026/02/19/3240803/0/en/BE-Semiconductor-Industries-N-V-Announces-Q4-25-and-Full-Year-2025-Results.html); [3D InCites Mar 2026 T2](https://www.3dincites.com/2026/03/besi-at-the-center-of-the-packaging-power-shift/)
- NEG [GC Core 515×510 native-jp T1](https://www.neg.co.jp/en/news/20250115.html); [TGV laser native-jp T1](https://www.neg.co.jp/en/news/20250522-1.html)
- Absolics/SKC [TrendForce May 2026 T2](https://www.trendforce.com/news/2026/05/08/news-skc-said-to-speed-glass-substrate-mass-production-by-year-end-advances-new-non-embedding-tech-for-u-s-client/); [Seoul Economic Daily T2](https://en.sedaily.com/finance/2026/05/12/skc-raises-12-trillion-won-to-fund-glass-substrate-push)
- ASE [Digitimes 310mm PLP Feb 2026 T2](https://www.digitimes.com/news/a20260225PD204/packaging-ase-2026-demand-panel.html); [OSAT NT$370B T2](https://www.trendforce.com/news/2026/05/05/news-ase-powertech-kyec-capex-may-hit-nt370b-this-year-as-ai-drives-record-osat-investment/)
- IBIDEN [¥500B capex T1 IR relay](https://www.theglobeandmail.com/investing/markets/stocks/IBIDF/pressreleases/10864/ibiden-to-invest-yen500-billion-in-expanding-ic-package-substrate-capacity-for-ai-and-high-performance-servers/); [Ono Plant ¥280B T2](https://www.theglobeandmail.com/investing/markets/markets-news/Tipranks/461272/ibiden-to-pour-yen280-billion-into-ono-plant-in-ongoing-high-performance-ic-substrate-expansion/)
- NVDA Feynman [WCCFTech T2 of Kuo T3](https://wccftech.com/nvidias-feynman-ai-chip-poised-to-break-the-cowos-size-barrier-as-tsmc-rushes-copos-to-2028-production-analyst/)
- SEMCO [Digitimes glass substrate T2](https://www.digitimes.com/news/a20250602VL201/semco-glass-substrate-packaging-tsmc-production.html); [Digitimes 2027 MP T2](https://www.digitimes.com/news/a20250120PD208/semco-glass-substrate-production-2027-materials.html)
- Nepes Laweh [BusinessWire 600mm T1](https://www.businesswire.com/news/home/20211223005121/en/Nepes-Laweh-to-Set-New-Industry-Benchmark-With-600mm-Large-Panel-M-Series-Fan-Out-Volume-Production)
- ABF inversion [Substack T2](https://nikhs.substack.com/p/abf-the-material-beneath-the-model)
