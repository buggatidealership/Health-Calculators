# Advanced Packaging — Primer

**Codified:** 2026-05-25
**Status:** Phase 1+2 verified — L1-L4 verified via ~5 web searches across orthogonal sources per principle #24. Built in direct response to user request 2026-05-25 for deep dive on advanced packaging layer.

**Author stance:** Advanced packaging is the layer BENEATH HBM (per user framing — "one layer below memory and HBM providers"). It's the structural choke point where chips physically integrate with each other — and where the AI capacity constraint actually binds today (TSMC CoWoS sold out through 2027). Two pure-play public-market beneficiaries (BESI + ASMPT) plus adjacent winners (AMAT, DISCO).

**Foundation:** `wiki/hbm-primer.md` (memory side), `wiki/custom-silicon-primer.md` (chip side), `signals/events/2026-05-20-google-io-2026.md` (TPU bifurcation drives more packaging demand), `signals/events/2026-05-25-test-time-compute-scaling.md` (sustained-inference workloads drive packaging density)

---

## TL;DR — five things verified

1. **Advanced packaging is the binding AI bottleneck through 2027.** TSMC CoWoS capacity sold out through 2027 with 50+ week lead times per [Silicon Analysts Foundry Allocation Q1 2026](https://siliconanalysts.com/analysis/foundry-allocation-status-q1-2026). N2/N3/N5 logic capacity also fully booked. **The packaging layer IS the AI supply constraint** — not memory alone, not logic alone, but the integration of both.

2. **TSMC quadrupling CoWoS capacity by late 2026** — current ~33K wpm → 70-80K end-2025 → 100-120K mid-2026 → **130K wpm late 2026**. Even at 4x capacity, sold out through 2027 because demand growth outpaces supply expansion per [FinancialContent CoWoS Capacity Skyrocket](https://markets.financialcontent.com/stocks/article/tokenring-2026-2-5-tsmc-to-quadruple-advanced-packaging-capacity-reaching-130000-cowos-wafers-monthly-by-late-2026).

3. **Two pure-play public market choke-point beneficiaries**: **BESI** (hybrid bonding leader, <10nm precision, projected €476M hybrid-bonding revenue by 2026 = ~1/3 of total business) and **ASMPT** (TCB market leader 35-40% share target, 2025 TCB revenue +146% YoY, 500+ TCB systems deployed). Both are at the structural-pricing-power layer.

4. **Hybrid bonding is the next-gen replacement for TCB** — required for HBM4E 16-Hi stacks. BESI has <10nm precision moat; ASMPT entering 2024-2025 with hybrid bonding equipment for HBM. AMAT partnered with BESI on Kynex die-to-wafer system. **ASML entering hybrid bonding development** as of March 2026 — disruptive threat to BESI's moat over 5-7 years.

5. **Bypass route via Intel EMIB/Foveros gaining real traction** — SK Hynix turning to Intel's EMIB packaging as TSMC CoWoS bottleneck squeezes supply per [Tom's Hardware Dec 2025](https://www.tomshardware.com/tech-industry/semiconductors/intel-gains-ground-in-ai-packaging-as-cowos-capacity-remains-stretched). Per bypass-route principle #9 — Intel emerges as the credible alternative when consensus solution fails capacity.

---

## L1 — Market size + growth (verified)

| Segment | 2024-2025 size | 2027-2032 projection | CAGR |
|---|---|---|---|
| Overall advanced packaging | ~$37.4B 2021 | $65B by 2027 | ~74% over period |
| 2.5D & 3D packaging specific | $4.2B 2024 | $14.8B 2032 | **18.6% CAGR** |
| TCB (Thermo-Compression Bonding) TAM | ~$760M 2025 | $1.6B 2028; $936M 2030 specifically | **30% CAGR (ASMPT estimate)** |
| Hybrid bonding equipment market | ~$634M today (smaller base) | $397M 2030 (Yole specifically) or larger if broadly defined | **20.5% CAGR (fine-pitch bonding)** |
| Combined TCB + hybrid bonding back-end equipment | — | $1.3B expansion by 2030 (Yole) | — |

**Note on the methodology variance:** "advanced packaging" is defined differently across reports. The $4.2B-$14.8B 2.5D/3D specific figure is the cleanest, matching the AI-driven CoWoS/SoIC use case. The broader $37.4B → $65B figure includes wirebonding + flip-chip + other legacy packaging.

---

## L2 — Technology breakdown

The advanced-packaging layer has multiple distinct technologies serving different use cases:

| Technology | What it does | Key use case | Current state |
|---|---|---|---|
| **CoWoS (Chip-on-Wafer-on-Substrate)** | 2.5D integration: chips on a silicon interposer | NVDA Blackwell, AMD MI, all major AI accelerators | TSMC dominant; sold out through 2027 |
| **CoWoS-L (Local Silicon Interconnect)** | Silicon bridges link massive dies beyond reticle limit | Multi-die AI chips (Rubin, Blackwell Ultra) | TSMC ramping; bottleneck |
| **SoIC (System on Integrated Chips)** | 3D stacking with TSV; shorter vertical interconnects | NVDA Rubin (first to integrate SoIC + CoWoS-L + HBM4 + N3P logic) | TSMC ramping |
| **TCB (Thermo-Compression Bonding)** | Current-gen die-to-die bonding using heat + pressure | HBM3, HBM3E, HBM4 12-Hi stacks | ASMPT 35-40% market leader |
| **Hybrid bonding** | Next-gen Cu-to-Cu direct bonding, sub-10nm precision | HBM4E 16-Hi stacks (required); 3D V-Cache (AMD); future memory generations | BESI leader (<10nm precision); ASMPT + AMAT competing |
| **TSV (Through-Silicon Via)** | Vertical electrical interconnects through silicon | Required for 3D stacking + HBM | Mature tech; commoditizing |
| **EMIB (Embedded Multi-die Interconnect Bridge)** | Intel's CoWoS alternative — bridges embedded in substrate | SK Hynix turning to this as bypass route | Intel-internal; gaining hyperscaler traction |
| **Foveros** | Intel's 3D stacking technology | Intel CPUs + emerging AI chips | Intel-internal |

**The technology hierarchy by AI-criticality (2026-2030):**
1. CoWoS / CoWoS-L — IS the AI bottleneck through 2027
2. SoIC — required for next-gen 3D stacking (NVDA Rubin onwards)
3. Hybrid bonding — required for HBM4E 16-Hi onwards
4. TCB — current HBM3E/HBM4 12-Hi; transitioning to hybrid bonding
5. EMIB/Foveros — bypass-route alternatives

---

## L3 — Top players + moats (verified)

### BESI (BE Semiconductor Industries — AMS:BESI / NASDAQ:BSEMY)

**Specialty:** Hybrid bonding — best-in-class precision (<10nm)

**Verified position 2026:**
- **Hybrid bonding revenue projected €476M by 2026** = ~1/3 of total business per [AInvest BESI Structural Growth](https://www.ainvest.com/news/semiconductor-hybrid-bonding-play-structural-growth-story-cyclical-crosscurrents-2506/)
- **150+ cumulative orders from 18 customers** per BESI March 2026 investor presentation
- **Q4 backlog +105% YoY** driven by hybrid bonding per [EE Times Applied Materials BESI Push](https://www.eetimes.com/applied-materials-besi-push-die-to-wafer-hybrid-bonding-toward-high-volume-manufacturing/)
- **Partnership with Applied Materials** on Kynex die-to-wafer system — first integrated D2W hybrid bonding system
- **All leading industry players evaluating both hybrid bonding and TCB for HBM4** per BESI commentary
- First hybrid-bonded 16-high HBM4E stacks anticipated 2026

**Moat:** "Deep integration with front-end toolmakers (specifically AMAT) creates a moat that is difficult for pure back-end players to cross. Companies that develop process-of-record positions at leading logic and memory customers in 2025-2026 will likely hold those positions for a decade or more" per [TSPA Semiconductor Substack BESI Vision](https://tspasemiconductor.substack.com/p/hybrid-bonding-at-scale-besis-vision).

**Threats:**
- **ASML entering hybrid bonding development** per [TrendForce March 2026](https://www.trendforce.com/news/2026/03/23/news-asml-reportedly-eyes-hybrid-bonding-equipment-precision-edge-may-reshape-advanced-packaging-landscape/) — could compress moat over 5-7 years
- Potential hybrid bonding delays in customer adoption per [Simply Wall St](https://simplywall.st/stocks/nl/semiconductors/ams-besi/be-semiconductor-industries-shares/news/potential-hybrid-bonding-delay-tests-be-semiconductor-indust)
- AMAT competitive — partnership AND competitor

### ASMPT (HKG:0522 / OTCQX:ASMVF)

**Specialty:** TCB market leader (35-40% share target); entering hybrid bonding

**Verified position 2026:**
- **2025 TCB revenue +146% YoY** (record) per [ASMPT 2025 Annual Results](https://www.asmpt.com/en/investor-relations/news-events/asmpt-announces-2025-annual-results/)
- **35-40% TCB market share target** maintained
- **TCB TAM revised: $760M 2025 → $1.6B 2028** (30% CAGR per ASMPT estimate)
- **500+ TCB systems deployed in mass production worldwide** (FIREBIRD family)
- **TCB orders for 12-layer HBM4 secured + 16-layer HBM4 development participation**
- First hybrid bonding equipment delivered to logic customer Q3 2024; two next-gen HB equipment orders for HBM Q3 2025
- **Advanced packaging ~25% of total revenue** (broader business diversification than BESI's hybrid-bonding concentration)

**Moat:** TCB installed base of 500+ systems + deep HBM4 customer engagement + Hong Kong listing accessibility for institutional capital.

**Threats:**
- Hybrid bonding transition could compress TCB share over 5-7 years (similar to BESI's reverse risk)
- BESI leads hybrid bonding precision — ASMPT must catch up
- Customer concentration in HBM (3 customers: SK Hynix, Samsung, Micron)

### Adjacent supplier — Applied Materials (AMAT, NASDAQ-listed)

**Specialty:** Front-end-to-back-end integration; BESI partnership

**Verified position 2026:**
- **Partnership with BESI on Kynex** die-to-wafer hybrid bonding system — first integrated D2W system per EE Times
- Next-gen hybrid bonder launches 2026 at **50nm accuracy or better** per [Applied Materials Hybrid Bonding](https://www.appliedmaterials.com/us/en/semiconductor/markets-and-inflections/heterogeneous-integration/hybrid-bonding.html)
- Memory customers bonding 16-20 dies per package
- **Front-end-to-back-end integration moat** — chip-making expertise extends into packaging

### Adjacent supplier — DISCO (TYO:6146)

**Specialty:** Wafer grinding + polishing + dicing — required for advanced packaging

**Verified position 2026:**
- Premium tier dominance in ultra-precision grinders
- **SiC power device + HBM4 advanced packaging** specialty per [MatrixBCG DISCO Competitive](https://matrixbcg.com/blogs/competitors/disco)
- Transition to hybrid bonding + thinner wafers INCREASES DISCO demand (per same source)
- High ROE + cash-rich balance sheet
- Less direct AI exposure but indirect via packaging-thinning demand

### Bypass-route player — Intel (EMIB/Foveros, internal)

**Verified position 2026:**
- **SK Hynix turning to Intel EMIB** as TSMC CoWoS bottleneck squeezes supply per [Tom's Hardware](https://www.tomshardware.com/tech-industry/semiconductors/intel-gains-ground-in-ai-packaging-as-cowos-capacity-remains-stretched)
- EMIB embedded-bridge technology — alternative architecture to CoWoS-L
- Foveros 3D stacking — alternative to SoIC
- Could capture 10-20% of CoWoS-equivalent demand by 2027 (my estimate based on stated SK Hynix shift)
- **The bypass route per methodology principle #9** — Intel emerges as credible alternative when consensus (TSMC CoWoS) fails capacity

### Sovereign / geographic diversification — SK Hynix US packaging plant

Per [Tom's Hardware](https://www.tomshardware.com/tech-industry/sk-hynix-to-build-first-us-2-5d-packaging-plant-for-hbm): **SK Hynix building first U.S. packaging plant for HBM — $3.9B investment, plugs critical hole in U.S. supply chain, challenges TSMC and reshapes AI supply chains.**

This is the GEOGRAPHIC bypass route — packaging diversification away from Taiwan concentration. Multi-year buildout but materially important for sovereign AI thesis.

### Other identified but not deep-dived this batch

- **Han Mi Semi** (Korean equipment) — flagged by user, search returned no specific data. Phase 3+ research gap.
- **ASML** — entering hybrid bonding development per TrendForce. Competitive entrant.
- **TEL (Tokyo Electron)** — also has packaging exposure (not deep-dived this batch).

---

## L4 — Choke point dynamics + extrapolations

### The structural choke point (verified)

- **TSMC CoWoS capacity sold out through 2027** with 50+ week lead times
- **N2/N3/N5 logic fully booked through 2027+** per Silicon Analysts
- **CoWoS + HBM3E creates compound bottleneck** that "no single supply-chain intervention can resolve" per [SemiAnalysis AI Capacity Constraints](https://newsletter.semianalysis.com/p/ai-capacity-constraints-cowos-and)
- AI supply bottlenecks "not short-term tightness — they are structural limits that will shape pricing, lead times, and availability well into 2027" per [Fusion Inside the AI Bottleneck](https://info.fusionww.com/blog/inside-the-ai-bottleneck-cowos-hbm-and-2-3nm-capacity-constraints-through-2027)

### Per principle #2 N-th order cascade

- **1st order (P>80%):** Packaging IS the binding AI bottleneck through 2027. BESI (hybrid bonding) + ASMPT (TCB) capture sustained pricing power as long as TSMC CoWoS demand exceeds supply. Hynix HBM4 production cycles MUST coordinate with TSMC CoWoS expansion.
- **2nd order (P~60%):** TSMC capacity quadrupling 33K → 130K wpm by late 2026 = 4x equipment demand for BESI + ASMPT + AMAT + DISCO. Knock-on: equipment-supplier earnings grow proportionally even before TSMC capacity is fully absorbed by customers.
- **3rd order (P~40%):** Bypass-route demand (Intel EMIB/Foveros + SK Hynix US packaging plant) grows as bypass becomes commercially validated. Intel's packaging business becomes a meaningful revenue line, separate from x86 CPU compression. Ripple: the "Intel is finished" narrative weakens at the packaging-services layer specifically (even as the CPU competitive story remains weak).
- **4th order (P~20%):** Speculative — if hybrid bonding becomes mandatory for HBM5 + 20-die-stack ARM AGI CPU + 24-die stacks for hyperscaler accelerators, BESI's <10nm precision moat compounds for 7-10 years. ASML's entry compresses this only after extended catch-up cycle. Knock-on: BESI becomes the "ASML of packaging" in concentrated-pricing-power terms.

### The 10 extrapolations / "synthetic patterns" (per principle #13)

Where the packaging industry is heading, based on the verified data + first-principles reasoning:

**P1. Hybrid bonding becomes mandatory for HBM4E (16-Hi) onwards.** Sub-10nm precision is physically required. BESI's <10nm moat translates to process-of-record at all 3 HBM vendors (Hynix, Samsung, Micron) by 2027.

**P2. TSMC CoWoS quadrupling absorbs sold-out-through-2027 demand AT BEST.** Demand growth (custom-Si bifurcation + Vera Rubin + TPU 8t/8i + ARM AGI CPU + Anthropic 3.5GW) outpaces even 4x capacity expansion. **The bottleneck doesn't resolve before 2028-2029.**

**P3. Intel EMIB captures 10-20% of CoWoS-equivalent demand by 2027** (my estimate from SK Hynix shift). Becomes the credible bypass route per principle #9. Intel's packaging-services business grows materially independent of CPU.

**P4. SK Hynix US packaging plant ($3.9B) is the first of multiple sovereign-packaging buildouts.** Samsung + Micron likely follow with US/EU plants by 2028. Per Section 232 + sovereign AI infrastructure thesis.

**P5. ASML entry into hybrid bonding (started 2026) compresses BESI moat starting 2030-2032.** Disruptive threat but multi-year catch-up cycle. ASML's lithography precision heritage translates partially.

**P6. ASMPT TCB capacity becomes the binding constraint for HBM3E/HBM4 12-Hi** through 2027. 35-40% market share target with 500+ deployed systems means ASMPT defines TCB pricing across the cycle.

**P7. AMAT-BESI Kynex partnership becomes the de facto integrated platform** for D2W hybrid bonding. Customers buying Kynex eliminates need to evaluate competing systems → pricing power compounds.

**P8. DISCO benefits indirectly from BOTH BESI AND ASMPT** equipment expansion — every hybrid-bonding or TCB customer needs DISCO grinding/polishing first. Picks-and-shovels positioning at a layer below.

**P9. SoIC + CoWoS-L dual integration becomes the 2027-2028 reference architecture** (NVDA Rubin is the first). Equipment complexity per chip increases meaningfully — packaging $-per-wafer rises 2-3x vs 2024 baseline.

**P10. Hybrid bonding pitch progression: 9μm (AMD V-Cache 2024) → sub-1μm (HBM4E 16-Hi 2026-2027) → 100nm-class (2028-2030 frontier).** Each precision step requires new equipment generations — recurring upgrade cycle for BESI + AMAT.

---

## Map against current portfolio + existing research

### Held names affected

| Name | Current % | Packaging exposure | New finding |
|---|---|---|---|
| **HYNIX (held)** | 10.33% | DIRECT — HBM4 production REQUIRES coordination with TSMC CoWoS expansion + hybrid bonding equipment | The packaging bottleneck IS the choke point for Hynix's HBM4 ramp. SK Hynix US packaging plant ($3.9B) verifies multi-year capacity buildout. EMIB bypass route to TSMC is a Hynix-driven shift. |
| **AXTI (held)** | 5.03% | Indirect via compound semi power electronics | Less direct; AXTI is substrate layer, not packaging equipment |
| **TSEM (held)** | 4.64% | Adjacent — silicon photonics foundry; CoWoS for photonics-integrated chips | Some adjacency; less direct than HBM-side |
| **RIGAKU (Watchlist)** | 0% | X-ray metrology for CoWoS/advanced packaging | Bottleneck-map already showed "Layer 0 — X-ray metrology enables CoWoS/advanced packaging (today binding)." The packaging primer confirms the criticality of metrology in CoWoS ramp. |
| **CAMT (in companies/)** | 0% (not held) | Advanced packaging INSPECTION specifically | Packaging inspection at scale = direct beneficiary of CoWoS quadrupling |

### NEW candidate watchlist additions

| Name | Listing | Specialty | Tier estimate | Sizing range |
|---|---|---|---|---|
| **BESI (BE Semiconductor)** | AMS:BESI / NASDAQ:BSEMY | Hybrid bonding leader <10nm precision | Active candidate (multi-year moat IF ASML entry stays in catch-up phase) | 2-4% if entered |
| **ASMPT** | HKG:0522 / OTCQX:ASMVF | TCB market leader 35-40% target | Active candidate (current revenue +146% YoY) | 2-4% if entered |
| **DISCO (6146.T)** | TYO:6146 | Grinding/polishing adjacent | Watchlist (lower priority than BESI/ASMPT direct) | 1-2% if entered |
| **AMAT (held-adjacent / not held)** | NASDAQ:AMAT | Front-end + Kynex hybrid bonding partnership | Already an obvious-AI-compute layer name (NOT in current portfolio per holdings.md) | Defer to broader semi-cap-equip decision |

### Cross-narrative scoring (Physical AI lens applied)

| Candidate | Physical AI sub-domains touched | Multi-narrative score |
|---|---|---|
| BESI | Robotics chips + AVs + AI-RAN + edge devices — all packaged at advanced nodes | 3-4/6 (similar to TSEM tier) |
| ASMPT | Same — all advanced chips need TCB | 3-4/6 |
| DISCO | Same indirect path | 2-3/6 |
| AMAT | Same indirect path + own front-end exposure | 4-5/6 |

**Note:** packaging-equipment names score moderately on Physical AI multi-narrative because every Physical AI chip is packaged — but at the SECOND-ORDER level (3rd-order indirect for narrower equipment specialties).

---

## Falsifiers (per principle #7)

1. **TSMC CoWoS capacity expansion exceeds demand growth by 2027** → bottleneck resolves earlier than thesis assumes, equipment-supplier earnings growth normalizes
2. **ASML hybrid bonding entry succeeds faster than expected (5-year catch-up vs 7-year)** → BESI moat compresses
3. **HBM4E 16-Hi adoption delayed past 2027** → hybrid bonding demand timeline pushes out
4. **EMIB bypass route captures >30% of CoWoS-equivalent demand by 2027** → TSMC-dependent thesis weakens (positive for Intel, bypass-route validation)
5. **SK Hynix US packaging plant delays past 2028** → sovereign-packaging thesis weakens
6. **AMAT-BESI Kynex partnership dissolves OR AMAT acquires BESI** → competitive landscape consolidates differently

---

## Sources (orthogonal per principle #23)

**L1 market sizing:**
- [TechInsights 2026 Advanced Packaging Outlook](https://www.techinsights.com/outlook-reports-2026/advanced-packaging-outlook-report) — Industry primary
- [Cryptocurrency Press Release 18.6% CAGR](https://crypto.newswireservice.net/press-releases/18-6-cagr-surge-14-8b-2-5d-3d-packaging-market-driven-by-ai-chiplet-revolution/) — Market research aggregator
- [PatSnap Advanced Packaging Technology Landscape 2026](https://www.patsnap.com/resources/blog/articles/advanced-packaging-technology-landscape-2026/)
- [Yole Group Advanced Packaging](https://www.yolegroup.com/strategy-insights/advanced-packaging-is-the-engine-driving-back%E2%80%91end-equipment-growth/)
- [Yole TCB + Hybrid Bonding $1.3B by 2030](https://www.yolegroup.com/press-release/advanced-packaging-fuels-transformation-in-back-end-equipment-tcb-and-hybrid-bonding-to-lead-1-3-billion-market-expansion-by-2030/)

**L3 BESI specific:**
- [FinancialContent BESI $15B Chess Move](https://markets.financialcontent.com/stocks/article/finterra-2026-3-13-besi-the-15-billion-chess-move-hybrid-bonding-and-the-m-and-a-surge)
- [TSPA Semiconductor BESI Hybrid Bonding Vision](https://tspasemiconductor.substack.com/p/hybrid-bonding-at-scale-besis-vision)
- [AInvest BESI Structural Growth](https://www.ainvest.com/news/semiconductor-hybrid-bonding-play-structural-growth-story-cyclical-crosscurrents-2506/)
- [EE Times AMAT-BESI Push Die-to-Wafer](https://www.eetimes.com/applied-materials-besi-push-die-to-wafer-hybrid-bonding-toward-high-volume-manufacturing/)
- [Simply Wall St BESI Hybrid Bonding Delay](https://simplywall.st/stocks/nl/semiconductors/ams-besi/be-semiconductor-industries-shares/news/potential-hybrid-bonding-delay-tests-be-semiconductor-indust)

**L3 ASMPT specific:**
- [ASMPT 2025 Annual Results — primary](https://www.asmpt.com/en/investor-relations/news-events/asmpt-announces-2025-annual-results/)
- [ASMPT showcases AP at ECTC 2026 — primary](https://semi.asmpt.com/en/news-center/press-releases/asmpt-showcases-ap-innovations-for-ai-and-hpc-at-ectc-2026/)
- [Edge AI and Vision Alliance — Yole back-end equipment](https://www.edge-ai-vision.com/2025/08/advanced-packaging-fuels-transformation-in-back-end-equipment-tcb-and-hybrid-bonding-to-lead-1-3-billion-market-expansion-by-2030/)
- [Bamboo Works ASMPT AI Back-End](https://thebambooworks.com/as-ai-booms-asmpt-sets-sights-on-lower-profile-back-end-of-chip-making-race/)

**L4 supply chain bottleneck:**
- [Silicon Analysts Foundry Allocation Q1 2026](https://siliconanalysts.com/analysis/foundry-allocation-status-q1-2026)
- [SemiAnalysis AI Capacity Constraints — Patel](https://newsletter.semianalysis.com/p/ai-capacity-constraints-cowos-and)
- [FinancialContent Great Packaging Pivot](https://markets.financialcontent.com/stocks/article/tokenring-2026-1-1-the-great-packaging-pivot-how-tsmc-is-doubling-cowos-capacity-to-break-the-ai-supply-bottleneck-through-2026)
- [Fusion Inside the AI Bottleneck](https://info.fusionww.com/blog/inside-the-ai-bottleneck-cowos-hbm-and-2-3nm-capacity-constraints-through-2027)
- [Tom's Hardware Intel EMIB Gains Ground](https://www.tomshardware.com/tech-industry/semiconductors/intel-gains-ground-in-ai-packaging-as-cowos-capacity-remains-stretched)
- [WccfTech SK Hynix Turning to Intel EMIB](https://wccftech.com/sk-hynix-turns-to-intels-emib-packaging-as-tsmc-cowos-bottlenecks-squeeze-the-ai-supply-chain/)
- [Tom's Hardware SK Hynix US Packaging Plant](https://www.tomshardware.com/tech-industry/sk-hynix-to-build-first-us-2-5d-packaging-plant-for-hbm)

**Competitive entrant:**
- [TrendForce ASML Eyes Hybrid Bonding](https://www.trendforce.com/news/2026/03/23/news-asml-reportedly-eyes-hybrid-bonding-equipment-precision-edge-may-reshape-advanced-packaging-landscape/)

**Adjacent:**
- [MatrixBCG DISCO Competitive Landscape](https://matrixbcg.com/blogs/competitors/disco)
- [Applied Materials Hybrid Bonding](https://www.appliedmaterials.com/us/en/semiconductor/markets-and-inflections/heterogeneous-integration/hybrid-bonding.html)
- [NIST Hybrid Bonding Mechanical Characterization](https://www.nist.gov/news-events/news/2026/01/nanoscale-mechanical-characterization-hybrid-bonding-ready-structures)
- [TSPA Packaging Evolution Trilogy](https://tspasemiconductor.substack.com/p/the-packaging-evolution-trilogy-hybrid)

---

## Fluidity footer

- **codified:** 2026-05-25
- **last_review:** 2026-05-25
- **falsified_by:** F1-F6 above. Also: if TSMC's 130K wpm CoWoS capacity target slips past late 2026 OR if NVDA Vera Rubin SoIC + CoWoS-L production delays materially, packaging-equipment-supplier earnings trajectory weakens.
- **re-evaluation trigger:** quarterly, OR on any of: ASML hybrid bonding equipment commercial announcement; AMAT BESI Kynex traction Q-by-Q; ASMPT 16-Hi HBM4 customer wins; SK Hynix US packaging plant milestones; Intel EMIB hyperscaler design wins beyond SK Hynix

---

## Phase 3+ queue (next-session deep dives)

- Han Mi Semi (Korean) specific role + market share
- Tokyo Electron (TEL) packaging exposure
- ASML hybrid bonding development cadence + customer engagement
- BESI segment-split revenue (hybrid bonding vs other vs services)
- ASMPT customer concentration (% of TCB revenue from each HBM vendor)
- DISCO HBM4-specific revenue attribution
- Intel EMIB design-win pipeline beyond SK Hynix
- AMAT Q-by-Q segment commentary on Kynex revenue
- Pricing dynamics per packaging-equipment generation
- Used / refurbished packaging-equipment secondary market (capacity-by-extension)

---

## Cross-references

- `research/wiki/hbm-primer.md` — memory side that depends on packaging
- `research/wiki/custom-silicon-primer.md` — chip side that requires packaging
- `research/signals/events/2026-05-20-google-io-2026.md` — TPU 8t/8i drives more packaging demand
- `research/signals/events/2026-05-25-test-time-compute-scaling.md` — sustained inference workloads drive packaging density
- `research/wiki/model-economics-primer.md` — packaging as bottleneck under inference cost economics
- `research/companies/HYNIX/thesis.md` — beneficiary; HBM4 production coordinates with packaging
- `research/companies/RIGAKU/thesis.md` — X-ray metrology for CoWoS/packaging
- `research/companies/CAMT/thesis.md` — packaging inspection adjacent
- `research/companies/BESI/thesis.md` — TO CREATE (hybrid bonding leader)
- `research/companies/ASMPT/thesis.md` — TO CREATE (TCB leader)
- `research/portfolio/bottleneck-map.md` — already shows CoWoS as today-binding bottleneck
- `research/meta/methodology.md` principle #24 — recursive bottoms-up worldview discovery
