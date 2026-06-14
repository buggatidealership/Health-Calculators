# Triangulated Signals (High-Conviction)

**Last material update:** 2026-06-11 (PIPELINE REBUILD — repaired silent failure: 72 cross-source-log files / 26 in last 7 days had not produced corresponding promotions; backfilled 7 [ACTIVE] convergence clusters from last 30 days)

Signals confirmed by ≥3 independent same-segment same-direction sources within 90 days. These outweigh single-article reads.

**Enforcement mechanism:** `meta/signal-density-detection.md` (canonical promotion rule + self-detecting metrics + first re-eval 2026-07-11)
**Critical Rule alignment:** #6 (segment-classify before triangulating) + Workflow #3 (TRIANGULATE) + Principle #29 (segment classification)
**Aging:** [ACTIVE] → [DORMANT] at 60 days without new instance → [ARCHIVED] at 120 days

## Quick index (current state — read this first)

| Cluster ID | Segment | Status | N | Top thesis impact | Last update |
|---|---|---|---|---|---|
| **TC-1** Memory tightness multi-tier | memory-and-storage | [ACTIVE] | 13 — adversarial-procurement tier-9 (China-domestic frontier) | Huawei Ascend production ramps DESPITE HBM bottleneck per SemiAnalysis T2 2026-06-12 EVE = HBM binding even at highest-adversarial-procurement layer (China subject to US export controls, motivated to scale, blocked at HBM specifically); premium-tier non-Chinese-HBM moat structurally reinforced; ALSO xAI Colossus 2 first 1GW coherent cluster (200K H100/H200 + 30K GB200) confirms HBM consumption at gigawatt-cluster TAM unit. Prior: Biwin $1.86B NAND NCNR 2026-06-12 AM; Manli RTX 3060/3050 reissue 2026-06-11 | 2026-06-12 evening brief Workflow #9 |
| **TC-2** AI capex on credit + state budgets | infrastructure-IaaS | [ACTIVE] | 7 | Mistral €3B at €20B (~2x prior valuation) per TechCrunch T2 2026-06-12 EVE + AWS-Anthropic multi-GW Trainium SemiAnalysis T2 = capex commitment depth at sovereign + hyperscaler layers | 2026-06-12 evening brief |
| **TC-3** DC-ceiling + EM-migration | power-and-cooling | [ACTIVE] | 9 — $130B/75+ DC projects blocked Q1'26 (STRONGEST datapoint) | **75+ DC projects / $130B blocked in Q1 2026 > all of 2025, bipartisan municipal opposition on power/water/grid (Tom's Hardware T2 2026-06-13 EVE)** = Layer-3 binding constraint quantified at strongest datapoint yet; demand deferred/relocated not destroyed (EM-migration); marginal US-deployment slowdown but demand>>supply means memory market stays tight; reinforces held-cohort LAYER-3 GAP (no power/grid/cooling name). Prior: xAI Colossus 1GW + AI 600B gal water + Amazon 2.5B gal | 2026-06-13 evening brief Workflow #9 |
| **TC-4** Anthropic enterprise-trust drift | model-and-foundation-lab | [ACTIVE] | 11 — bifurcating into "enterprise-trust-drift" + "compute-consumption-real" reads | (6) Anthropic Cowork for Claude Desktop product expansion 2026-06-12 EVE; (7) Goose open-source Claude Code alternative competitive pressure 2026-06-12 EVE; (8) AWS multi-GW Trainium with Anthropic as ANCHOR CUSTOMER per SemiAnalysis T2 2026-06-12 EVE = compute-consumption-real leg + cross-cluster link to MRVL custom-Si bull case. SELF-BIAS FLAGGED: Fable 5 vendor. Prior 5 signals 2026-06-11/12 AM. 11 in 48h. Verification-gate on independent benchmark still binding 2026-06-25 | 2026-06-12 evening brief Workflow #9 |
| **TC-5** CoPoS / glass-core packaging firming | advanced-packaging | [ACTIVE] | 5 | ABF bear-case INVERTED at T1 (raises IBIDEN priority); NEG 5214.T new candidate | 2026-06-11 |
| **TC-6** MLCC AI-server tier bifurcation | advanced-packaging (passives) | [ACTIVE] | 4 | Murata held — ~70% AI-server share anchored; T7+T9 strengthen into Q1 FY27 print | 2026-06-11 |
| **TC-7** InP geopolitical bottleneck + JP rent migration | chip-and-foundry (substrates) | [ACTIVE] | 4 | AXT exit decision validated stronger; JX 5016.T + Sumitomo 5802.T candidates | 2026-06-11 |
| **TC-8** Token consumption compounding (T1) | infrastructure-IaaS | [ACTIVE] | maintained | Held cohort across compute+memory benefits | (carry-over) |
| **TC-10** Model-layer sovereignty + export control (+ competitive-capture sub-dimension) | sovereign-AI / regulatory | **[ACTIVE]** | **7 in <96h** | **NEW SUB-DIMENSION 2026-06-13 EVE: competitive-capture.** Suspension trigger named — Amazon CEO Jassy discussions + Amazon researchers' jailbreak demo as basis (WSJ/Verge/Times of India T2). A rival-and-largest-investor allegedly catalyzing govt action vs competitor's models. H_a genuine-safety-Amazon-incidental P~45% / H_b regulatory-machinery-in-competitive-context P~40% / H_c coordinated-intent P~15% (my model). Regardless of intent, the STRUCTURE (rival surfaces vuln demo → competitor model suspension) is durable. Raises regulatory overhang on ALL frontier labs (OpenAI state-AG probe same evening). Prior: shutdown executed + Reuters US-only deployment (AM) + directive + Mistral + DoW + NVDA China. H2 structural-regime still MODAL. Investable expression gap (EU-sovereign-AI) urgency rising. | 2026-06-13 evening brief |
| **TC-11** Hardware-IP / patent enforcement at chip-import layer | chip-and-foundry / regulatory | [CANDIDATE] | 1 | NEW 2026-06-13 AM: Republican congresspersons petition ITC to invoke Section 337 to block TSMC chip imports based on UMC patents (T2 Tom's Hardware morning brief #15). Distinct from TC-7 (export-side hardware-substrate geopolitics) — this is IMPORT-side via PATENT enforcement. If granted: US-importing TSMC-designed chips face friction; benefits domestic foundry (Intel/TSMC Arizona/Samsung Texas); hurts NVDA/AVGO/AMD/MRVL (held mild negative tail). Watch for N+1 within 90 days. | 2026-06-13 morning brief |

---

## TC-1 — Memory tightness multi-tier convergence [ACTIVE]
**Segment:** memory-and-storage
**Direction:** structural shortage, premium-tier pricing power
**Instances (N=7+):**
1. Supplier earnings (T1 SK Hynix / Micron / Samsung 2026-Q1)
2. Consumer ASP rise — Lexar guide forward (T2)
3. Industry triangulation — multi-source DRAMeXchange / TrendForce (T2)
4. Govt coalition letter on memory shortage (T2)
5. Automotive +180% CCTV demand spike (T2 cross-source-log 2026-06-07)
6. Korean SK Hynix frontline-insider tweet (T3 native-kr, 2026-06-08)
7. SemiAnalysis Hynix Computex booth photo — SOCAMM2 96GB + HBM4 36GB 12Hi spec (T1-source-photo, 2026-06-08)
+ Demand-side reinforcement: iPhone 18 12GB-all-models rumor (T3→T2, 2026-06-10); DeepSeek FlashMemory KV-tiering = additive not subtractive (2026-06-11)
8. **SK Group Chairman Chey Nikkei interview T1 (2026-06-11)** — 3x wafer capacity by 2034 = 13-14% CAGR (my bottoms-up math), framed as demand-following with shortage-through-2030 language; HBM bit-multiplier means bit-supply CAGR even lower vs implied AI bit-demand >25%. Supplier-side discipline confirmed at the chairman level. Per `signals/cross-source-log/2026-06-11-hynix-chey-3x-2034-japan-reopen-t7-neutral-reinforcing.md`
9. **Hynix-vs-Micron 3-subagent deep verification (2026-06-11 PM)** — share-split corrected (NVDA Rubin: Hynix ~55% / Samsung ~25% / Micron ~20%); HYNIX Falsifier #1 FIRED at qualification + borderline material share; Samsung 4nm yield overcame (40%→>90%); Rubin production trim 2M→1.5M April (T2 KeyBank, TrendForce 29%→22%) partially resolved by Huang June 5 "all qualified"; volume restoration unconfirmed. **Three-supplier reframe of the cluster:** Hynix + Samsung + Micron now all in production; HBM4E TSMC-rail (Hynix + Micron) vs Samsung internal SF4 splits the next-gen architecture. Per `signals/cross-source-log/2026-06-11-pm-hynix-mu-deep-verification-3subagent.md`
**Convergent read:** premium DRAM + HBM remain capacity-binding through 2027; commodity tier separately tightening via reallocation spillover (per TC-6)
**Names affected:** HYNIX (held), SNDK (held), SUMCO (held), MURATA (held — via TC-6)
**Falsifier:** any T1 Hynix/Samsung capacity-expansion announcement above demand-following pace (would invert principle #27 thesis); CXMT premium-tier qualification at NVDA

## TC-2 — AI capex migrating off corporate P&Ls onto credit + state budgets [ACTIVE]
**Segment:** infrastructure-IaaS
**Direction:** structural — capex financing shifts from FCF to debt + state
**Instances (N=6):**
1. Mag7 debt-funded capex verification (2026-06-06): GOOG/META/MSFT/AMZN debt-funded; FCF lowest since 2014
2. Alphabet $190B 2026 capex + $84.75B raise (T1, 2026-06-01-02)
3. SoftBank $6B OpenAI margin-loan stall (T1 Bloomberg + native-jp, 2026-06-10) — 3rd installment of $10B→$6B→stall arc
4. Amazon $17.5B unsecured delayed-draw term loan (T2 Bloomberg) stacking to ~$42-43B fresh debt in ~7 months (2026-06-11)
5. China NDRC draft ~¥2T/5yr buildout — state-financed SOE-executed (T1 Bloomberg + native-zh, 2026-06-10)
6. Google AI Plus consumer price cut $7.99→$4.99 — consumer pressure on OpenAI funding stress (2026-06-10)
**Convergent read:** memory/compute demand durability is increasingly a function of CREDIT CONDITIONS and STATE BUDGETS, not hyperscaler P&Ls. Financing-led demand survives margin compression longer but reprices violently on credit tightening.
**Names affected:** all held compute+memory (HYNIX, SNDK, ARM, NVDA-adjacent watchlist); new monitorables = hyperscaler credit spreads, Chinese fiscal execution, AI-collateral lending health
**Falsifier:** Mag7 returning to FCF-positive capex funding for ≥2 consecutive quarters; Chinese fiscal commitment formally walked back

## TC-3 — DC-ceiling + EM-migration pattern [ACTIVE]
**Segment:** power-and-cooling
**Direction:** US DC siting friction → EM absorption + existing-site densification
**Instances (N=6):**
1. Bloomberg: 50% of US 2026 DC builds delayed/canceled (T2)
2. NY DC moratorium (T2)
3. **Seattle CB 121214 PASSED June 9, UNANIMOUS** (T1 [Seattle Council](https://council.seattle.gov/2026/06/09/city-council-passes-emergency-data-center-moratorium-and-policy-framework/)) — strongest US-municipal datapoint
4. AirTrunk India $30B/5GW commitment (T1)
5. Meta-Reliance Jamnagar 168MW built-to-suit lease, ~1GW renewables (T1 [TechCrunch](https://techcrunch.com/2026/06/10/meta-signs-first-ai-data-center-deal-in-india-with-reliance/), [CNBC](https://www.cnbc.com/2026/06/10/meta-ai-infrastructure-data-centers-india-hyperscalers-reliance.html), 2026-06-10) — 2nd hyperscale India
6. Samsung Heavy 50MW floating DCs + MOL 73MW floating DC 2027 (T2, 2026-06-10) — siting-bypass via ocean
**Convergent read:** US capex skews to densification + EM absorbs displaced shells. Component-intensity per site rises (more power/cooling/memory/MLCC per shell); construction-adjacent names compress.
**Names affected:** T9 theme motivation; MUR (held — densification favors components); held cohort broadly insulated; downstream casualty: US DC construction/REIT-adjacent
**Falsifier:** US municipal moratoriums reversed under federal pressure; EM DC commitments stall

## TC-4 — Anthropic enterprise-trust drift [ACTIVE]
**Segment:** model-and-foundation-lab
**Direction:** slow-burn enterprise-trust tax on Mythos-class access
**Instances (N=3):**
1. AWS Bedrock Mythos-class invocation requires opt-in `provider_data_share` overriding ZDR — first crack in Bedrock no-provider-sharing norm (T1 AWS docs + Anthropic Help Center, 2026-06-10)
2. **Microsoft restricted internal GitHub Copilot Fable 5 access** over the same retention requirement; MSFT simultaneously sells via Foundry (T2 Verge/Reuters, T1 Azure blog, 2026-06-11) — customer-balking not Copilot-positioning
3. Named-researcher false-positive refusals (immunologist Derya Unutmaz / Verdon) + Anthropic ACKNOWLEDGED safeguards too stringent (T2 The Register, 2026-06-11)
**Convergent read:** H2 enterprise-trust-tax probability updated **P~30% → P~45% (my model, Bayesian per L25)**; 3rd-named-enterprise threshold = H2 dominant (P~60%+, my model)
**Names affected:** private-tracker Anthropic section; Anthropic strength now NAMED OpenAI-collateral-risk factor (Bloomberg native-jp, links TC-2 SoftBank leg)
**Falsifier:** Anthropic relaxes Mythos retention policy OR no 3rd enterprise restriction in 60 days

## TC-5 — CoPoS / glass-core packaging supply chain firming [ACTIVE]
**Segment:** advanced-packaging
**Direction:** panel-level glass-core era arriving; ABF area per package rises (NOT replaced)
**Instances (N=5):**
1. TSMC CoPoS pilot line at VisEra completing June 2026; AP7 Chiayi volume fab; ramp late 2028-1H29 (T2 [TrendForce 4/13](https://www.trendforce.com/news/2026/04/13/news-tsmc-advances-panel-level-packaging-copos-pilot-line-reportedly-set-for-june-completion-2028-29-ramp-eyed/))
2. TSMC CEO C.C. Wei confirmed pilot + "2-3 years to scale" at June 4 shareholder meeting (T1-adjacent)
3. ABF/glass/ABF sandwich architecture verified T1 ([IEEE](https://ieeexplore.ieee.org/document/9360812)) — glass replaces organic BT core, NOT ABF build-up
4. Absolics (SKC) glass-core MP targeted end-2026 + Intel glass-core 2026-27 (T2)
5. NEG 5214.T exact-spec 515×510 GCコア product (T1 native-jp [NEG](https://www.neg.co.jp/news/20250115.html)); 2026 sample shipments; ¥30B-by-2028 capacity target
**Convergent read:** "glass kills ABF" bear case INVERTED at architecture level; IBIDEN dissection priority raised; NEG 5214.T new best-fit candidate (ahead of held AGC on disclosure)
**Names affected:** AGC (HELD — Vector 3 validated-not-upgraded); IBIDEN (dissection queue priority RAISED); NEW candidates NEG 5214.T, LPKF, Camtek vector-add
**Falsifier:** TSMC publicly rejects glass-core for CoPoS (SCHMID currently states "under review")

## TC-6 — MLCC AI-server tier bifurcation [ACTIVE]
**Segment:** advanced-packaging / passives
**Direction:** premium-tier Japanese/Korean concentration hardens; mid-tier backfill to Chinese
**Instances (N=4):**
1. MLCC sold-out deep research (2026-06-08 cross-source-log)
2. Murata Izumo new building ¥47B April 2026 + CEO "tight supply persisting" (T1/T2 native-jp Nikkei/dempa/EETimes, 2026-06-11)
3. **Yageo May revenue record NT$15.06B +47.5% YoY** (T1 [工商時報 6/9](https://www.ctee.com.tw/news/20260609700904-430201))
4. DigiTimes wave-refresh (T2-3, 2026-06-11) + zh tier-split [163.com 高端MLCC卡脖子](https://www.163.com/dy/article/KPU05VEJ05568W0A.html): Murata ~70% AI-server MLCC share, 0.3µm dielectric vs Three-Circle 1µm (8-10yr gap quantified)
**Convergent read:** tier-bifurcation hardens (Murata-supportive); 15-35% premium price hikes; live premium-tier threat is SEMCO (Korea) not China — P-1 China-rate distinct from Korea-rate clock
**Names affected:** MURATA (held — HOLD; Q1 FY27 print late Jul/early Aug = T9 promotion trigger); T9 (TDK / Taiyo Yuden watchlist)
**Falsifier:** Three-Circle qualifies sub-0.3µm dielectric in volume; SEMCO takes named AI-server MLCC share from Murata at Rubin-next cycle; CSP-LTA claim verified at T1/T2 = UPGRADE trigger (not falsifier)

## TC-7 — InP geopolitical bottleneck + JP rent migration [ACTIVE]
**Segment:** chip-and-foundry / substrates / photonic
**Direction:** Chinese MOFCOM regime persists; rent migrates to JP non-controlling suppliers
**Instances (N=4):**
1. Reuters multi-byline (Chen/Mo/Martina/Lee/Lv/Ning/Okasaka) June 10-11 (T1)
2. AXT FY2025 10-K: 100% wafer production in China (Beijing Tongmei); Fremont admin-only (T1 SEC)
3. AXT 8-K June 11 2025 first Tongmei permit + Q3'25 +56%QoQ on permits / Q4'25 miss on delays (T1)
4. **JX Advanced Metals 5016.T ¥20B to triple InP substrate capacity by 2030 at Isohara** (T1 native-jp [JX release](https://www.jx-nmm.com/newsrelease/), [EETimes JP](https://eetimes.itmedia.co.jp/ee/articles/2602/16/news033.html))
+ Sumitomo Electric 5802.T doubling optical-device capacity FY2026 (T2 native-jp)
**Convergent read:** AXT structural casualty (US-listed wrapper around Beijing bottleneck); investable bypass JX 5016.T + 住友電工 5802.T (Japan-TSE Degiro ✓; conglomerate-dilution math required per principle #22)
**Names affected:** AXTI EXIT validated stronger; NEW candidates JX 5016.T (Watchlist P2 fresh-IPO discipline barely cleared), 住友電工 5802.T (Watchlist P3); register PC-12 candidate "Geopolitical bottleneck via export control" N=1
**Falsifier:** US-China bilateral deal materially loosens InP licenses; AXT announces material California (Fremont) substrate production; PC-12 N=2 cross-check fails (Dec 2023 Ga/Ge regime not showing same rent migration)

## TC-8 — Token consumption compounding (T1 theme anchor) [ACTIVE — maintained, no rebuild needed]
**Segment:** infrastructure-IaaS
**Direction:** token volume growth outpaces per-token price decreases at the enterprise tier
**Instances:** maintained across multiple cross-source-logs since 2026-06-03 (Uber AI budget exhaustion + SemiAnalysis workflow ROI + Cloudflare 57.5% bot crossover + Ramp AI Index 1% tail $7,500/mo)
**Convergent read:** see `sector/themes.md` T1 + token-consumption.md wiki
**Names affected:** broad held cohort

---

## Format spec (kept for reference)

```
[YYYY-MM-DD promoted] {THEME or DIRECTION}
Segment classification (per principle #29): [single segment OR cross-segment]
Sources:
  1. [primary] - [name, date, what was said] [SEGMENT: X]
  2. [secondary] - [name, date, what was said] [SEGMENT: X]
  3. [tertiary or another primary] - [name, date, what was said] [SEGMENT: X]
Convergent read: [what the signal collectively says]
Names affected: [tickers]
Falsifier: [what would suggest this convergence is coincidence not pattern]
```

---

## Pre-2026-06-11 historical entries (preserved for audit)

2. **[T1 primary]** Samsung Electro-Mechanics $1B (1.55T KRW) silicon capacitor contract signed May 20, 2026 for delivery Jan 2027-Dec 2028 (per [Samsung EM newsroom T1](https://samsungsem.com/global/newsroom/news/view.do?id=10310))
3. **[T2 secondary]** Intel CEO Lip-Bu Tan on-record: substrate supply "extremely tight"; customers willing to prepay billions; "Intel/AMD/NVDA collectively co-funded roughly 50% of capex at top 4 substrate suppliers" (per [Tom's Hardware T2](https://www.tomshardware.com/tech-industry/semiconductors/intel-reportedly-in-talks-with-google-and-amazon-over-advanced-packaging) + [TrendForce T3](https://www.trendforce.com/news/2026/05/20/news-intel-says-emib-customers-back-substrate-prepayments-4-taiwan-and-2-japan-suppliers-reportedly-seek-commitments/), May 2026)
4. **[T3 trade]** Google v8e ("Humufish") H2 2027 launch confirmed using Intel EMIB-T packaging + TSMC chip + MediaTek design (per [SemiWiki/Kuo T3](https://semiwiki.com/forum/threads/ming-chi-kuo-on-intels-emib-t-packaging-for-google-tpu-v8e-humufish.25038/), May 2026)

**Convergent read**: EMIB-T substrate is a binding constraint at the advanced-packaging layer. Customer co-funded capex pattern (Intel/AMD/NVDA collectively ~50% of top-4 substrate-supplier capex per TrendForce) is the strongest possible demand-pull signal — analogous to how TSMC CoWoS customers pre-funded capacity in 2022-2023. The constraint persists through 2027-2028. Intel EMIB-T (with embedded silicon capacitors via Samsung EM contract) emerges as the genuine TSMC-CoWoS-bypass for non-NVDA AI ASICs.

**Names affected** (per Critical Rule #10 cascade — all have back-references):
- IBIDEN (primary beneficiary; substrate capacity at chokepoint; new candidate thesis stub created)
- MURATA (additive silicon-cap content per AI server; MLCC business unaffected per fresh-verified PDN architecture analysis — bear-signal framing in original sources was MISFRAMED)
- HYNIX (HBM independent of EMIB vs CoWoS choice; supports any packaging format)
- LGINNOTEK (FC-BGA substrate but different product mix vs EMIB-T)

**Falsifier**: Intel EMIB-T yield fails to reach 95%+ by H2 2026 → Google v8e delays or shifts back to TSMC CoWoS; Ibiden Gama Plant ramp slips; substrate suppliers reverse course on capex commitments (signaling customer demand softening).

**Investable conclusion**: TIER S candidate (per refined principle #33 criteria — limited oligopoly competition + customer-funded capex moat) at the EMIB-T substrate layer. Ibiden is the named beneficiary. Full TRACE event detail in `research/signals/events/2026-05-28-emib-t-substrate-cluster.md`.

**Methodology validation**: this is the FIRST triangulation entry promoted under principle #29 segmented-triangulation criteria. Three of four sources are T1/T2 primary (Ibiden IR, Samsung EM newsroom, Tom's Hardware citing Intel CEO on-record). Promotion is well-supported.

---



### [2026-05-20] AI compute demand outrunning supply — capacity-constrained narrative goes mainstream

**Convergent read:** Two of the largest AI players (Google + OpenAI) explicitly told the market on the same day that compute demand is outrunning supply and capacity constraints will persist. This is the strongest demand-side triangulated signal of 2026. S4 (digestion) bear case materially weakens; S3 (power binds) strengthens further.

**Sources:**
1. **T1 PRIMARY — Google I/O 2026 keynote (Sundar Pichai)**: 9.7T tokens/month (2024) → 480T (2025) → 3.2 quadrillion today. ~330× in 2 years per Google's [own blog post](https://blog.google/innovation-and-ai/sundar-pichai-io-2026/). Also [Shacknews coverage](https://www.shacknews.com/article/149205/google-3-2-quadrillion-monthly-ai-tokens).
2. **T1 PRIMARY — Sam Altman X post 2026-05-19**: "customers are increasingly asking us for certainty on capacity. as models get better, we expect that the world will be capacity-constrained for some time. we are offering discounted tokens for 1-3 year commits." ([X primary source](https://x.com/sama/status/2056827105401614656))
3. **T2 — CNBC reporting** on OpenAI "Guaranteed Capacity" product launch ([CNBC 2026-05-19](https://www.cnbc.com/2026/05/19/openai-announces-new-guaranteed-capacity-offering-for-customers-to-secure-compute.html))
4. **T1 — NBIS Q1 2026 SEC 6-K filing**: revenue $399.0M (+684% YoY), contracted power >3.5GW raised to 4GW year-end target ([SEC 6-K](https://www.sec.gov/Archives/edgar/data/0001513845/000110465926059872/tm2614392d1_ex99-2.htm)) — independent confirmation from the supply side that capacity is selling at premium prices

**Cross-references with prior triangulations:**
- Anthropic Q2 2026 $10.9B revenue + first profit (2026-05-20 entry above) — same demand-side dynamic, frontier provider reaching profit confirms demand pulls through to revenue
- HBM constraint analysis in `wiki/hbm-primer.md` — the supply side of this story; capacity-constrained narrative validates the binding nature

**Names affected:**
- NBIS — direct beneficiary; +684% Q1 print confirms; **P1 thesis candidate**
- NVDA, AMD, AVGO — all sell capacity that is now multi-year-contracted
- HBM (SK Hynix, Samsung, Micron) — every contracted compute hour needs HBM
- Power (VST, CEG, GEV, TLN, NBIS direct power purchases) — capacity is what they sell; pricing power confirmed
- Networking (ANET, MRVL) — cluster scale-up continues
- Test/inspection downstream (Camtek, FormFactor, Advantest) — more chips = more test

**Falsifier:** OpenAI capacity offering goes unsold (suggesting demand was overstated), OR major hyperscaler reports Q3 2026 capex deceleration to <30% YoY growth, OR token-volume growth visibly slows.

---


### [2026-05-20] Frontier model providers reaching operating profit at scale → AI capex sustainability bear case (S4) weakens materially

**Convergent read:** Model providers can be profitable at frontier compute spend levels. The "AI is unprofitable / capex sustainability is the bear case" narrative weakens.

**Sources:**
1. **PRIMARY** — WSJ reporting (via [Investing.com](https://za.investing.com/news/economy-news/anthropic-revenue-set-to-more-than-double-to-109-billion-in-q2-4293058)) 2026-05-20: Anthropic Q2 forecast $10.9B revenue + $559M first operating profit (excludes SBC, includes training costs)
2. **SECONDARY** — [Sherwood News](https://sherwood.news/markets/anthropic-revenue-run-rate-30-billion-google-broadcom-partnership/): Anthropic $30B annual run-rate confirmed; expanded Google + Broadcom partnerships
3. **TRIANGULATING** — Earlier per Barclays (via [Seeking Alpha](https://seekingalpha.com/news/4505254-openai-dominating-consumer-ai-token-consumption-anthropic-wins-enterprise-barclays)): Anthropic 34.4% enterprise share by April 2026, ahead of OpenAI's 32.3%. The enterprise dominance was already triangulated; profitability is the new leg.
4. **TRIANGULATING** — [Fortune](https://fortune.com/2026/04/30/google-amazon-ai-profits-anthropic-stake-bubble-earnings-2026/): Anthropic stake materially contributed to Google + Amazon Q1 2026 reported earnings

**Names affected (TRACE elsewhere):**
- AMZN — primary cloud partner, Trainium consumption ramping
- AVGO — newly named custom Si partner; previously Google TPU partner — now two of top-3 frontier providers
- GOOG — expanded partnership, TPU benefit, Anthropic stake P&L
- NVDA — mixed (Anthropic still buys NVDA at scale, but custom Si scaling = S2 pressure)
- SK Hynix, MU — every chip Anthropic uses needs HBM
- DDOG — agentic at $30B run-rate validates observability spend
- NOW — agentic enterprise integration thesis confirmed at scale

**Falsifier:** Anthropic Q2 2026 actuals materially below the $10.9B forecast (>15% miss) OR Q3 2026 reverts to losses, suggesting the Q2 profit was non-recurring.

### Promotion criteria reminder — single new article CAN trigger a triangulation if it converges with already-triangulated prior signals. This entry triangulates because Anthropic enterprise dominance was already triangulated (Barclays + multi-source) — the WSJ revenue/profit numbers ADD a new leg (profitability + Broadcom partnership) to an existing high-confidence pattern.

---

## Initial candidate triangulations (need 3rd source to confirm)

## Initial candidate triangulations (need 3rd source to confirm)

These have 2 sources already and could trigger on next confirming signal:

1. **Hyperscaler capex re-rate is anticipatory, not retrospective** — supported by 2 separate Q1 2026 earnings cycles (MSFT + GOOG capex raises). Need one more enterprise-side signal to triangulate.

2. **Custom silicon revenue at hyperscalers growing >50% YoY** — partial signal from AVGO commentary + Trainium/Maia mentions. Need an explicit hyperscaler disclosure.

3. **Power becomes binding within 18 months** — VST/CEG re-rate + transformer lead time extensions reported. Need a specific hyperscaler announcing "delayed deployment due to power" to triangulate.
