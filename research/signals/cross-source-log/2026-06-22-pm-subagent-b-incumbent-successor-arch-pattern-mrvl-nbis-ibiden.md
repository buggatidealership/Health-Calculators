# Incumbent-Investing-in-Successor-Architecture Pattern — MRVL / NBIS / IBIDEN

**Date:** 2026-06-22 PM
**Workflow:** MACRO-FIRST RESEARCH (Step 0 Research Pass + Triangulate) — Critical Rule #16 Fan-out
**Triggered by:** Cross-ref from `companies/HYNIX/thesis.md` 2026-06-22 PM identifying HYNIX (FMC FeFET investor) + KIOXIA (independent FeFET R&D) exhibiting "incumbent-investing-in-successor-architecture" structure. User scope: scan MRVL, NBIS, IBIDEN for same pattern.
**Source-tier tagging:** T1 (filing, IR, company-direct) / T2 (institutional analyst, trade press) / T3 (specialist commentary)
**Anti-fabrication status:** All numbers inline-cited; uncited claims hedged per Critical Rule #7
**Multilingual:** Japanese for IBIDEN (mandatory); Korean for adjacent context; Taiwanese for CoPoS ecosystem
**Scope:** ~80-100K token verification

---

## TL;DR

MRVL exhibits the pattern STRONGLY — three active M&A deals (Celestial AI $3.25B, XConn $540M, Polariton Technologies undisclosed) place it squarely inside the successor-architecture it would lose to if it stood still. NBIS does NOT exhibit the pattern — the company is deliberately doubling down on NVIDIA-pure-play and the successor-architecture risk (XPU diversification, edge, on-prem displacement) has ZERO disclosed hedge. IBIDEN exhibits a WEAK-TO-MODERATE version — the CoPoS glass-core co-development with TSMC/Innolux is structurally inside the next packaging generation, but no distinct WLP or 3D chiplet successor-architecture R&D bet was found; the glass-core partnership is better characterized as "participating in the evolution of their own product" than a classic successor hedge.

---

## PREMISE 1 — MRVL Successor-Architecture Investments / R&D

### Successor architectures identified (10-15yr horizon)

| Architecture | How it disrupts MRVL connectivity layer | Horizon estimate |
|---|---|---|
| CPO (Co-Packaged Optics) | Pluggable optic + electrical SerDes replaced by photonics co-packaged on processor; eliminates external retimer/DSP market | 5-10yr for broad adoption |
| Silicon photonics integrated into SoC | DSP/retimer/optical-DSP becomes on-die; eliminates standalone chip market | 7-12yr |
| CXL fabric replacing PCIe/Ethernet at rack level | New interconnect protocol potentially commoditizes PCIe switch/retimer layer | 4-8yr (CXL 3.x already sampling) |
| Open NVLink-alternatives (UALink) | Proprietary scale-up interconnect replaced by open standard; could commoditize NVLink-Fusion ecosystem where MRVL participates | 4-6yr |
| Custom-silicon vendor consolidation | Alchip + GUC + Broadcom winning ASIC sockets MRVL also pursues | Ongoing |

### Investment / R&D / M&A evidence (T1/T2/T3)

**Celestial AI — $3.25B acquisition, CLOSED February 2, 2026:**
- Technology: Photonic Fabric platform for optical scale-up interconnect within and across AI racks
- Consideration: $1B cash + $2.25B stock upfront; up to $2.25B additional earnout through FY2029 revenue milestones (T1 [Marvell IR press release](https://investor.marvell.com/news-events/press-releases/detail/1000/marvell-to-acquire-celestial-ai-accelerating-scale-up-connectivity-for-next-generation-data-centers))
- Revenue projection: $500M annualized run rate Q4 FY2028; doubling to $1B by Q4 FY2029 (T1 Marvell IR above)
- Why successor relevance: Celestial AI's Photonic Fabric is explicitly the architecture that could REPLACE copper-based electrical interconnects (the core of MRVL's SerDes/retimer franchise). MRVL is acquiring the disruptor before the disruption scales.
- Counterpoint Research framing (T2 [counterpointresearch.com](https://counterpointresearch.com/en/insights/Celestial-AI-Acquisition-Perfectly-Positions-Marvell-For-Upcoming-Multi-Rack-Scale-Up-Boom)): "Celestial AI Acquisition Perfectly Positions Marvell For Upcoming Multi-Rack Scale-Up Boom"

**XConn Technologies — ~$540M acquisition, January 6, 2026 (announced):**
- Technology: PCIe and CXL switching silicon — PCIe 5/6.0 switches in production; CXL 2.0/3.1 switches sampling (T1 [Marvell newsroom](https://www.marvell.com/company/newsroom/marvell-to-acquire-xconn-technologies-expanding-leadership-in-ai-data-center-connectivity))
- Consideration: ~60% cash / 40% stock (T1 Marvell IR); ~$540M (T1 Wilson Sonsini legal disclosure)
- Revenue projection: contribution ramp H2 FY2027; ~$100M in FY2028 (T1 Marvell IR)
- Strategic framing per Futurum Research T2: "Marvell's XConn Buy Yields a Two-Pronged Open Fabric Play Against NVLink" — CXL 4.0 enables 100+ terabyte memory pools; UALink 1.0 provides open NVLink alternative (T2 [futurumgroup.com](https://futurumgroup.com/insights/marvells-xconn-buy-yields-a-two-pronged-open-fabric-play-against-nvlink/))
- OFC 2026 product announcement: two 260-lane switches (PCIe 6.0 and CXL 3.0) from XConn platform (T2 ServeTheHome)
- Why successor relevance: CXL 3.x is the protocol-level successor to PCIe that enables memory disaggregation and pooling. By owning XConn, MRVL inserts itself into the architecture that could partially displace its PCIe switch franchise with a more capable standard.

**Polariton Technologies — Acquisition announced April 22, 2026 (consideration undisclosed in sources found):**
- Technology: high-speed, low-power plasmonics-based silicon photonics devices (T1 [Marvell newsroom](https://www.marvell.com/company/newsroom/marvell-acquires-polariton-advancing-future-of-optical-connectivity.html))
- Application: enables optical performance scaling to 3.2T and beyond; addresses next-gen coherent and DCI optical interconnects (T1 Marvell newsroom; confirmed by T2 [photonics.com](https://www.photonics.com/Articles/Marvell-Acquires-Polariton-Technologies/p5/a72171) + [datacenterdynamics.com](https://www.datacenterdynamics.com/en/news/marvell-acquires-silicon-photonics-device-startup-polariton-technologies-to-advance-optical-scaling/))
- Why successor relevance: plasmonics-based modulation is the next generation of silicon photonics modulation, enabling higher density and lower energy-per-bit than traditional silicon. MRVL is buying deep into the 3.2T+ photonics future while selling 800G/1.6T products today.
- Consideration: NOT FOUND in searches — price not disclosed in accessible sources. Flag as NOT-FOUND.

**MRVL Inphi heritage (pre-existing, $10B acquisition 2021):**
- Inphi was the optical DSP and silicon photonics backbone that seeded MRVL's coherent DSP franchise (Ara DSP 3nm, COLORZ 1600, Libra platform)
- The entire optical-DSP franchise is simultaneously MRVL's current revenue driver AND the intellectual heritage for the CPO/photonic integration successor bets above

**UALink participation:**
- MRVL is a member of the UALink Consortium (open NVLink alternative) per market coverage; XConn acquisition explicitly framed as augmenting MRVL's UALink scale-up switch team (T2 Futurum above)
- This places MRVL inside both the PROPRIETARY (NVLink Fusion) and OPEN (UALink) scale-up ecosystems simultaneously — true two-sided hedge

**NOT FOUND in searches:**
- Specific MRVL venture arm investments in CPO startups (Lightmatter / Ayar Labs / POET Technologies) — no direct MRVL financial stake confirmed; Celestial AI was the acquired vehicle for CPO successor bet
- Hot Chips 2026 MRVL presentation details on successor architectures
- OCP-specific MRVL successor-architecture roadmap disclosure

### Pattern verdict: STRONG

MRVL has made NAMED M&A investments ($3.25B + $540M in 6 months) into the exact architectures that would compete against or replace its current connectivity-layer franchise (copper SerDes → optical fabric via Celestial AI; PCIe switching → CXL memory pooling via XConn; existing photonics → plasmonics via Polariton). The Inphi $10B 2021 precedent established this as the organizational DNA — MRVL consistently acquires into successor architectures before those architectures scale. This is textbook incumbent-investing-in-successor.

### Implication for MRVL thesis

The STRONG pattern presence is INCREMENTALLY POSITIVE for the existing ACTIVE thesis. It:
1. **Reduces the "architecture obsolescence" risk** that F-5 (hyperscaler-custom-Si concentration) and U8 (token-cost-elasticity) carry — MRVL is buying into the successor, not standing pat on current-gen
2. **Extends the TAM** beyond 2027 into the 5-10yr window where CPO and CXL become dominant
3. **Creates execution risk** — three concurrent large integrations (Celestial $3.25B, XConn $540M, Polariton) are complex; if any integration disappoints the $500M FY2028 Celestial revenue target, that is a NEW falsifier candidate

NEW falsifier candidate (for thesis file): Celestial AI Photonic Fabric fails to reach $250M annualized revenue run rate by Q4 FY2028 (50% of stated target) = MRVL overpaid for successor-architecture optionality and the CPO/photonic-fabric transition timeline is longer than modeled → trim consideration.

Position implication: 🟡 HOLD 5.9% Active (44sh) — successor-architecture pattern confirmation is thesis-reinforcing at the structural level; does NOT change the Q2 FY27 print (Aug-26) as the formal add-trigger gate. The three concurrent acquisitions ADD to thesis durability, not near-term revenue.

---

## PREMISE 2 — NBIS Successor-Architecture Investments / R&D

### Successor architectures identified (10-15yr horizon)

| Architecture | How it disrupts NBIS neocloud franchise | Horizon estimate |
|---|---|---|
| XPU diversification (TPU/Trainium/Inferentia) | Neoclouds forced to carry non-NVIDIA hardware at lower margins; NBIS's NVIDIA-specialization moat erodes | 3-7yr if hyperscalers push external XPU |
| Sovereign on-prem AI | Governments install their own AI clusters instead of renting; reduces sovereign-AI rental TAM | 5-10yr for significant displacement |
| Edge AI inference reducing centralized cloud demand | Sub-100B param models run on device/edge; reduces large-cluster demand | 7-15yr for meaningful displacement |
| Hyperscaler-internal custom silicon | AWS/GCP/Azure workloads route around NVIDIA-based neoclouds onto proprietary chips | 4-8yr (AWS Trainium FY28+ per AM-TRAINIUM) |
| Competing neoclouds at NVIDIA parity (CoreWeave, Lambda) | Pure price competition if NVIDIA supply loosens | 2-5yr |

### Investment / R&D / XPU evidence (T1/T2/T3)

**NVIDIA lock-in — affirmative evidence:**
- NVIDIA $2B strategic investment in NBIS (March 2026, T1 [CNBC](https://www.cnbc.com/2026/03/11/nebius-nvidia-ai-cloud.html))
- NBIS $45B backlog: Meta + Microsoft anchored, ALL NVIDIA per PM-CITADEL-TRAINIUM-FOLLOWUP verification
- Q1 2026 earnings: NBIS framed as "full-stack, AI-native hyperscaler" reinforcing NVIDIA co-design partnership (T1 NBIS 6-K FY2026 earnings release)
- Q1 2026 CEO framing: "several customers vying for each available GPU across all chip generations" — NVIDIA GPU framing throughout (T2 Globe and Mail Q1 2026 earnings transcript summary)

**XPU rack capacity:**
- NO XPU rack capacity disclosed or hinted at in Q1 2026 earnings call (T1 6-K reviewed; no non-NVIDIA hardware referenced)
- PM-CITADEL-TRAINIUM-FOLLOWUP verification found ZERO neocloud Trainium commitments as of 2026-06-22 PM across all major neoclouds; aggregate ~$100B+ neocloud backlog is 100% NVIDIA-locked
- NBIS Compute page lists: HGX H100, HGX H200, HGX B200, L40S with Intel CPUs (from $1.55/hr), L40S with AMD CPUs (from $1.82/hr) — the L40S/AMD CPU pairing is CPU context, NOT GPU compute diversification; the GPU remains NVIDIA L40S (T2 [Spheron blog summary of Nebius compute page])

**Edge AI strategy:**
- NOT FOUND in any NBIS filing, earnings call, or press release
- Q1 2026 earnings and prior 6-K filings focus exclusively on centralized large-cluster AI infrastructure
- Eigen AI acquisition (Token Factory inference optimization) is CENTRALIZED inference on NBIS GPU fleet — NOT edge

**Open-source AI investment:**
- Hugging Face partnership: Hugging Face has integrated with Nebius Token Factory as an inference provider (T2 [huggingface.co docs](https://huggingface.co/docs/inference-providers/providers/nebius)); Nebius runs open-source models (Llama, DeepSeek, GLM, Kimi, Qwen, MiniMax — 40+ models per Token Factory)
- This is a DISTRIBUTION/PLATFORM partnership, NOT a financial investment in Hugging Face; NBIS benefits from open-source model availability as inference rental demand, not an investment in the open-source ecosystem as successor architecture
- No Hugging Face equity stake, AVR Labs investment, or open-source AI equity investments found in any NBIS filing

**Sovereign-AI strategy:**
- NBIS IS engaged in sovereign AI (UK deal, EU data center footprint per AM7 + AM7c verification) — but this is selling sovereign AI compute RENTAL from centralized clusters, NOT investing in on-premise sovereign AI alternatives that would displace the rental model
- No NBIS investment in sovereign on-premise AI infrastructure startup found

**Summary of NOT-FOUND items:**
- AMD MI300X or Intel Gaudi rack capacity at NBIS — NOT FOUND
- XPU rack commitments or roadmap — NOT FOUND
- Edge inference strategy or partnership — NOT FOUND
- Non-NVIDIA silicon investment (financial stake in AMD, Intel, Trainium ecosystem) — NOT FOUND
- Hugging Face equity stake or open-source AI equity investment — NOT FOUND
- AVR Labs or any inference-chip-alternative investment — NOT FOUND
- On-premise sovereign AI product or partnership — NOT FOUND

### Pattern verdict: PATTERN ABSENT

NBIS exhibits zero evidence of investing in or building toward successor architectures. The opposite is true: NVIDIA invested $2B in NBIS (March 2026) as a strategic deepening of the NVIDIA-pure-play, reinforcing rather than hedging the incumbent architecture dependency. The Eigen AI acquisition is inference software optimization ON top of NVIDIA hardware — it is efficiency extraction from the existing architecture, not a hedge against it. NBIS is a single-architecture bet: if NVIDIA dominance persists (base case, per PM-CITADEL-TRAINIUM-FOLLOWUP), NBIS wins; if XPU diversification materializes in the neocloud segment (low-P as of 2026-06-22 PM), NBIS has no hedge.

### Implication for NBIS thesis

PATTERN ABSENT is a NEUTRAL-TO-MILDLY-NEGATIVE structural observation for the 10-15yr frame, but a NEUTRAL-TO-MILDLY-POSITIVE observation for the 2026-2028 trading horizon (no organizational distraction from successor-arch bets means full focus on NVIDIA ecosystem execution).

The observation strengthens the existing falsifier framework: the thesis holds exactly as long as NVIDIA-pure-play is the winning neocloud strategy. If the industry bifurcates toward multi-XPU neoclouds (e.g., CoreWeave stands up Trainium capacity, Lambda stands up Gaudi) while NBIS remains NVIDIA-only, NBIS could lose bid opportunities requiring XPU optionality. This is currently LOW-P (per PM-CITADEL-TRAINIUM-FOLLOWUP) but is the structural falsifier.

Position implication: 🟢 HOLD 58sh Active — PATTERN ABSENT observation does not change the near-term thesis; reinforces F-5 falsifier framing (XPU diversification >20% of neocloud backlog = trim consideration); no size change.

---

## PREMISE 3 — IBIDEN Successor-Architecture Investments / R&D

### Successor architectures identified (10-15yr horizon)

| Architecture | How it disrupts IBIDEN ABF substrate | Horizon estimate |
|---|---|---|
| Pure glass core substrate (ABF-free) | Glass replaces ABF organic build-up layers entirely; eliminates IBIDEN's core material | 2030+ for commercial scale |
| Wafer-level packaging (WLP/FOWLP) replacing substrate | High-end compute packaged at wafer level without separate substrate; reduces substrate TAM | 7-15yr for high-end displacement |
| 3D chiplet stacking eliminating substrate at high-end | Chiplets bonded directly without substrate intermediary via hybrid bonding | 5-10yr (HBM/TSMC SoIC early signal) |
| Silicon interposer replacing organic substrate | Silicon interposer (CoWoS-S) displaces FC-BGA at highest-end | Ongoing (TSMC CoWoS-S ~10% of market) |

### Investment / R&D evidence (T1/T2/T3)

**Glass-core R&D — CoPoS co-development (the primary successor hedge):**
- TSMC formally announced IBIDEN + Innolux as co-development partners for CoPoS (Chip-on-Panel-on-Substrate) glass-core substrate (June 2026, T1 [DigiTimes June 2026](https://www.digitimes.com/news/a20260616PD217/tsmc-innolux-ibiden-packaging-cowos.html) + T1 [TradingKey analysis](https://www.tradingkey.com/analysis/stocks/us-stocks/261969147-tsm-ibiden-abf-copos-tradingkey))
- Architecture: 3-layer structure — ABF / glass-core / ABF. IBIDEN supplies ABF layers; Innolux supplies glass core; TSMC assembles.
- Validation results: warpage -16%, CTE -19%, modulus +31%, power supply resistance -27%, inductance -42% (T1 TSMC disclosure per BigGo, June 2026)
- TSMC Chairman C.C. Wei (June 2026 shareholder meeting, T1): "We already have a pilot line. I guess it will take another two to three years before the volume becomes very large" — mass production timeline 2028-2029; glass-core at full scale 2030+ (T2 TrendForce + T2 BigGo)
- IBIDEN IR language (English, T1 [IBIDEN IR 2025 Integrated Report](https://www.ibiden.com/ir/items/IntegratedReport2025_en.pdf)): "development fields include next-generation 3D packages and glass core substrates for optical devices" — confirms internal R&D investment in glass-core and 3D packages as separate initiatives
- IBIDEN IR language (Japanese, T1 [ibiden.co.jp ESG CEO message](https://www.ibiden.co.jp/esg/message/)): 社外との連携により外の知見も活用していく方針 ("policy of utilizing external knowledge through collaboration") — referenced in context of next-generation development
- Key structural observation: because CoPoS uses ABF as the build-up layer on TOP of the glass core, IBIDEN's ABF expertise remains essential in the successor architecture. This is a "hybrid glass-core + ABF" not "pure glass-core" — ABF demand does NOT fall in the CoPoS scenario; it may rise slightly (two ABF layers per package vs one).

**Wafer-level packaging / 3D chiplet programs:**
- IBIDEN noted in T2 analysis as having FOWLP (Fan-out Wafer Level Packaging) interposer leadership in Japan per Japan FOWLP market data (T2 WLP market research aggregator)
- IBIDEN 2023-2027 capex plan EXPLICITLY INCLUDES "glass core substrate" R&D (T1 [ibiden.co.jp 2026 capex press release](https://www.ibiden.co.jp/company/2026/02/post-83.html) + T1 English version [ibiden.com](https://www.ibiden.com/company/2026/02/notice-regarding-capital-investment-plan-for-high-performance-ic-package-substrates.html))
- IBIDEN CEO top message (T1 [ibiden.com ESG](https://www.ibiden.com/esg/message/)): R&D development fields explicitly include "3D packages" and "glass core substrates for optical devices" — two distinct successor-architecture R&D mentions

**Venture arm / M&A activity:**
- NO IBIDEN venture arm investment or M&A activity in successor-architecture companies found in searches
- The Japanese-language search (イビデン ベンチャー 投資) returned only capex and operational news — no startup investment or venture activity
- Nuance: IBIDEN is a Japanese industrial manufacturer; structural venture investing is not typical for this archetype (compare: SK Hynix had FMC startup investment; IBIDEN appears to operate via JV/co-development partnerships rather than startup financial stakes)

**Korean substrate ecosystem context (adjacent):**
- SEMCO (Samsung Electro-Mechanics): pilot glass-substrate program at Sejong; mass production targeted 2027 (T1 per T2 DigiTimes [June 2025](https://www.digitimes.com/news/a20250604PD200/semco-glass-substrate-samsung-production-semiconductors.html)); SEMCO is pursuing a PURE glass-substrate play (not hybrid ABF+glass), which IS the architecture that would displace IBIDEN's ABF moat if it scales — important contrast
- Absolics (SKC subsidiary): entered AMD certification at Georgia Covington fab (T2)
- Samsung: shifted glass substrate to business unit; 2027 ramp target (T1 per T2 TrendForce)
- Korean players are advancing FASTER toward pure-glass; IBIDEN's hedge (hybrid glass+ABF) vs Korean competition (pure glass) is a key structural watch

**Taiwanese CoPoS ecosystem context:**
- Innolux (3481.TW): direct TSMC CoPoS co-development partner for the glass core layer — glass panel expert (display panel maker transitioning to substrate supply); IBIDEN's counterpart in the ABF+glass hybrid
- Unimicron (3037.TW): ABF substrate competitor; pivoting Yangmei fab toward CoWoS panel-level (T2 DigiTimes); NOT in the CoPoS TSMC co-development group as of known disclosures

**Japanese-language source note:**
TSMCはガラス基板パッケージング技術の進展に向けてイビデンおよびイノラックスと提携；CoPoS先端パッケージング検証データを初公開 — ("TSMC partners with Ibiden and Innolux for glass substrate packaging technology advancement; CoPoS advanced packaging validation data disclosed for the first time") (T1 via TradingKey Japanese [tradingkey.com/jp](https://www.tradingkey.com/jp/analysis/stocks/us-stocks/261969153-tsm-ibiden-abf-copos-tradingkey)). Confirms the co-development announcement extends to Japanese-language investor communications.

次世代半導体に照準、ICパッケージトップメーカー・イビデンの成長戦略 — ("Targeting next-generation semiconductors: growth strategy of top IC package maker Ibiden") from ニュースイッチ (日刊工業新聞) (T2) — confirms Japanese industrial press frames IBIDEN as explicitly pursuing next-generation semiconductor packaging leadership, not just defending current.

### Pattern verdict: WEAK

The pattern is present but in a specific, structurally embedded form rather than a classic "venture bet on disruptor":

- IBIDEN is inside the CoPoS glass-core co-development — but because the CoPoS architecture REQUIRES ABF layers, IBIDEN is in the successor architecture as a continuation-player, not as a threat-hedger. The SEMCO PURE-GLASS contrast is the cleaner incumbent-vs-successor hedge; IBIDEN's ABF-in-glass-core position is more like "ABF evolves with the architecture" than "IBIDEN bets on its own replacement."
- IBIDEN's IR and ESG materials explicitly call out 3D packages and optical-device glass-core substrates as R&D development fields — this is named internal R&D investment in the successor, but no startup investment vehicle or M&A in successor-architecture companies found.
- The distinction from MRVL (STRONG) and HYNIX (investing in FMC startup that would disrupt DRAM): IBIDEN is co-developing with TSMC (a customer/partner relationship) rather than investing in a disruptor startup independently.

Classification: WEAK — general glass-core R&D + TSMC co-development partnership, but NOT a named independent investment in the ABF-displacing architecture via external vehicle. The CoPoS co-development is arguably a "self-preservation in the next generation" play rather than a true "hedging against your own displacement."

### Implication for IBIDEN thesis (watchlist)

WEAK pattern is NET POSITIVE for the IBIDEN watchlist thesis — it confirms that IBIDEN is NOT standing still on ABF-only and has positioned itself into the hybrid glass-core architecture via TSMC partnership. The PATTERN ABSENT bear case (IBIDEN fails to participate in glass-core transition and loses premium-tier share to SEMCO or Absolics) is neutralized by the co-development confirmation.

The relevant watch going forward: does TSMC's 2028-2029 CoPoS ramp include a NON-ABF glass variant that excludes IBIDEN? If yes (SEMCO pure-glass wins the majority of CoPoS at TSMC without IBIDEN ABF involvement), the WEAK pattern becomes PATTERN ABSENT with thesis-falsifier implications. Until that confirmation, IBIDEN remains a watchlist entry candidate with the glass-core falsifier materially weakened (per PM-IBIDEN-VERIFY 2026-06-22 verification).

Position implication: 🔴 WATCHLIST (0sh) — WEAK pattern does not trigger entry alone; combined with PM-IBIDEN-VERIFY findings (glass-core bear case neutralized, margin recovery confirmed, AI mix >60% electronics) it reinforces the starter-entry candidacy. Entry gate remains user's timing decision on pullback-vs-now per PM-IBIDEN-BEAT-PROB 2026-06-22 analysis.

---

## PREMISE 4 — Pattern Verdict Summary

| Name | Successor Architecture Named | Independent Investment Vehicle | Internal Named R&D | JV/Partnership with TSMC/foundry | Pattern Verdict |
|---|---|---|---|---|---|
| **MRVL** | CPO (Celestial AI), CXL/UALink (XConn), Plasmonics (Polariton) | YES — 3 acquisitions ($3.25B + $540M + undisclosed) | Inphi heritage + 3D SiPho Engine | Participates in ecosystem (TSMC CoPoS, UALink Consortium) | **STRONG** |
| **NBIS** | None identified | NONE | None (Eigen AI = optimization ON existing arch) | NVIDIA deepening ($2B investment), not new arch | **ABSENT** |
| **IBIDEN** | Hybrid glass-core CoPoS (ABF+glass), 3D packages, optical glass substrates | NONE found | YES — 3D packages + glass-core substrates in R&D fields per IR | YES — TSMC CoPoS co-development partner (co-development, not venture) | **WEAK** |

---

## N-th Order Implications by Name

### MRVL — STRONG pattern

1st order (P>80%): Three successor-arch acquisitions give MRVL proprietary IP in the exact technologies threatening its existing SerDes/retimer franchise.

2nd order (P~60%): If CPO and CXL scale as expected 2028-2032, MRVL captures TAM expansion rather than suffering displacement — the classic "buy the disruptor before it disrupts you" outcome. Revenue mix shifts from legacy SerDes/retimer toward photonics and CXL, maintaining aggregate TAM.

3rd order (P~40%): If MRVL is the dominant silicon photonics player AND the dominant CXL switch player by 2030, it is structurally MORE defensible than today's SerDes-concentrated position — the pattern creates anti-fragility, not just defense.

Thesis implication: STRONG pattern is the single most important structural positive for the 10-15yr MRVL thesis. Near-term (2026-2028) investors need the FY27 print; long-term investors need the Celestial AI revenue ramp ($500M by Q4 FY2028). Both gates remain.

### NBIS — ABSENT pattern

1st order (P>80%): NBIS remains 100% NVIDIA-stack; growth fully correlated to NVIDIA GPU availability and NVIDIA ecosystem health.

2nd order (P~60%): If NVIDIA maintains >80% AI accelerator market share through 2028 (base case per multiple sources), NBIS PATTERN ABSENT is a non-issue — being NVIDIA-only is the optimal position.

3rd order (P~40%): If by 2028 a major hyperscaler (AWS, Google) publicly shifts neocloud workloads to XPU-capable providers, NBIS faces a genuine TAM headwind without hedge. The $45B Microsoft + Meta backlog provides 3-4yr runway regardless, but post-2028 TAM renewal would require hardware diversification that has NOT been set up.

3rd-order watch signal: any NBIS disclosure of non-NVIDIA GPU capacity OR any neocloud competitor (CoreWeave, Lambda) publicly announcing XPU rack wins = early warning of neocloud bifurcation; PATTERN ABSENT becomes active risk.

### IBIDEN — WEAK pattern

1st order (P>80%): IBIDEN's ABF franchise participates in CoPoS via the hybrid ABF+glass architecture; short-to-medium term (2026-2029) thesis intact with glass-core as co-monetization, not displacement.

2nd order (P~60%): TSMC 2028-2029 CoPoS ramp includes IBIDEN ABF layers → IBIDEN captures revenue from BOTH current FC-BGA and next-gen CoPoS — dual-architecture revenue per the PM-IBIDEN-VERIFY analysis.

3rd order (P~40%): SEMCO pure-glass wins a meaningful share of the 2030+ glass-core substrate market WITHOUT IBIDEN ABF involvement — a gradual ASP/volume erosion at the premium tier, not an immediate shock.

3rd-order watch signal: TSMC or AMD/NVIDIA publicly confirming a CoPoS-derivative product that specifies NON-ABF glass interposer only → IBIDEN WEAK pattern becomes ABSENT + thesis-falsifier enters watch state.

---

## Material Yield Class

**MRVL: HIGH** — STRONG pattern confirmation adds to long-term thesis durability; new falsifier candidate added (Celestial AI <$250M annualized by Q4 FY2028); no near-term position action.

**NBIS: MEDIUM** — ABSENT pattern is expected given the Nvidia-pure-play thesis design; confirms existing F-5 falsifier framing (XPU diversification = trim trigger); no position action.

**IBIDEN: MEDIUM** — WEAK pattern is net positive for watchlist candidacy (glass-core bear case weakened); no position action; entry timing per PM-IBIDEN-BEAT-PROB.

---

## Honest NOT-FOUND Items

1. **Polariton Technologies acquisition consideration** — price not disclosed in any accessible source (T1 Marvell newsroom did not include price; no SEC 8-K found with financial terms)
2. **MRVL direct financial stake in Lightmatter or Ayar Labs** — no investment found; Celestial AI was the M&A vehicle for CPO
3. **MRVL Hot Chips 2026 / OCP presentation details** — not surfaced in searches
4. **IBIDEN venture arm or startup investment in successor-arch companies** — NOT FOUND (consistent with Japanese industrial archetype; IBIDEN operates via JV/co-development not startup financial stakes)
5. **IBIDEN FOWLP-specific program details** — general FOWLP market presence confirmed but no specific IBIDEN WLP R&D program named in accessible sources
6. **NBIS AMD GPU / Intel Gaudi capacity** — NOT FOUND; confirmed absent from known disclosures
7. **NBIS edge AI strategy** — NOT FOUND in any earnings call, filing, or press release
8. **Sell-side equity research specifically covering MRVL successor-architecture investments as a re-rating thesis** — not specifically found (covered in general Celestial AI M&A; no dedicated "successor-arch portfolio" framing found)
9. **Dutch-language Innolux investor communications on CoPoS** — not found (Innolux is Taiwanese-listed; Taiwanese investor materials not accessible in searches)

---

## Multilingual Sources Cited

**Japanese (mandatory — IBIDEN primary):**
- [イビデン 5000億円設備投資 大垣市 — ibiden.co.jp](https://www.ibiden.co.jp/company/2026/02/post-83.html) (T1)
- [イビデン 27年3月期 営業益45%増 — Nikkei](https://www.nikkei.com/article/DGXZQOFD114UU0R10C26A5000000/) (T1)
- [イビデン 生成AI用半導体基板の生産量2.5倍へ — Nikkei](https://www.nikkei.com/article/DGXZQOFD0545D0V00C25A9000000/) (T1)
- [TSMCはガラス基板パッケージング技術の進展に向けてイビデンおよびイノラックスと提携 — TradingKey 日本語](https://www.tradingkey.com/jp/analysis/stocks/us-stocks/261969153-tsm-ibiden-abf-copos-tradingkey) (T2)
- [次世代半導体に照準、ICパッケージトップメーカー・イビデンの成長戦略 — ニュースイッチ](https://newswitch.jp/p/40179) (T2)
- [EE Times Japan — イビデン 5000億円 2026-2028年度](https://eetimes.itmedia.co.jp/ee/articles/2602/05/news037.html) (T2)
- [IBIDEN 中間決算説明会 2025年10月31日 (PDF)](https://www.ibiden.co.jp/ir/items/QY20251st.pdf) (T1)

**Taiwanese/English for CoPoS ecosystem:**
- [DigiTimes — TSMC teams with IBIDEN, Innolux on CoPoS](https://www.digitimes.com/news/a20260616PD217/tsmc-innolux-ibiden-packaging-cowos.html) (T2)
- [TradingKey — TSMC + IBIDEN + Innolux glass collaboration](https://www.tradingkey.com/analysis/stocks/us-stocks/261969147-tsm-ibiden-abf-copos-tradingkey) (T2)
- [wccftech — TSMC CoPoS replace CoWoS](https://wccftech.com/tsmc-accelerates-copos-packaging-replace-cowos-as-glass-core-substrates-cut-costs-boost-wafer-utilizatio/) (T3)
- [TrendForce — TSMC CoPoS pilot line timeline](https://www.trendforce.com/news/2026/04/13/news-tsmc-advances-panel-level-packaging-copos-pilot-line-reportedly-set-for-june-completion-2028-29-ramp-eyed/) (T2)
- Ming-Chi Kuo T2 [X/Twitter TSMC-Innolux-IBIDEN announcement](https://x.com/mingchikuo/status/2067438598836965616)

**Korean for adjacent substrate context:**
- [DigiTimes — SEMCO glass substrate ecosystem (English)](https://www.digitimes.com/news/a20250604PD200/semco-glass-substrate-samsung-production-semiconductors.html) (T2)
- [DigiTimes — South Korean 2026 glass substrate race](https://www.digitimes.com/news/a20251226PD200/demand-2026-glass-substrate-semiconductors-production.html) (T2)
- FMC investment context: 마일뉴스/더구루 T2 Korean coverage on SK하이닉스 F램 investment (previously verified in `signals/cross-source-log/2026-06-22-pm-subagent-imec-fefet-vlsi-symposium-memory-disruption-verification.md`)

**T1 sources — MRVL acquisitions:**
- [Marvell IR — Celestial AI acquisition press release](https://investor.marvell.com/news-events/press-releases/detail/1000/marvell-to-acquire-celestial-ai-accelerating-scale-up-connectivity-for-next-generation-data-centers) (T1)
- [Marvell IR — XConn Technologies acquisition press release](https://investor.marvell.com/news-events/press-releases/detail/1004/marvell-to-acquire-xconn-technologies-expanding-leadership-in-ai-data-center-connectivity) (T1)
- [Marvell newsroom — Polariton Technologies acquisition](https://www.marvell.com/company/newsroom/marvell-acquires-polariton-advancing-future-of-optical-connectivity.html) (T1)
- [SEC 8-K FY2025 — Celestial AI deal terms](https://www.sec.gov/Archives/edgar/data/0001835632/000119312525305289/d34367dex991.htm) (T1)

**T1 sources — NBIS filings:**
- [Nebius 6-K FY2026 Q1 results](https://www.sec.gov/Archives/edgar/data/0001513845/000110465926064092/nbis-20260331xex99d1.htm) (T1)
- [CNBC — NVIDIA $2B NBIS investment](https://www.cnbc.com/2026/03/11/nebius-nvidia-ai-cloud.html) (T1)

**Prior harness artifacts (cross-referenced):**
- `signals/cross-source-log/2026-06-22-pm-subagent-imec-fefet-vlsi-symposium-memory-disruption-verification.md` — HYNIX + KIOXIA predecessor pattern origin
- `signals/cross-source-log/2026-06-22-pm-subagent-ibiden-margin-ai-mix-glass-core-verification.md` — IBIDEN glass-core CoPoS primary verification
- `signals/cross-source-log/2026-06-22-pm-subagent-citadel-tpu-claim-citrini-trainium-followup.md` — NBIS all-NVIDIA lock-in industry-data confirmation
- `companies/MRVL/thesis.md` — Celestial AI / XConn cited in PM-INFEREX-U8 and prior CPO cross-refs
- `companies/NBIS/thesis.md` — NVIDIA $2B investment + AM7c framework + PM33 entry context
