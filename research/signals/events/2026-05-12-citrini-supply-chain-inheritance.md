# 2026-05-12 — Citrini Research "Semis Memo: Supply Chain Inheritance"

**Source:** Citrini Research paid newsletter, May 12, 2026 (excerpt provided by user 2026-05-26). Analysts: Zephyr + Jukan. Document title: "Semis Memo: Supply Chain Inheritance — Power & Analog Semis, CPUs in the Agentic Era, Neoclouds, Material Bottlenecks, Korea Unlocked"

**Source validity:** SECONDARY — HIGH credibility. Paid institutional research; analysts named with track record (Dec 2024 MLCC thesis surfaced ahead of consensus); cross-checks NVDA's May 2025 technical blog on 800V DC rack architecture; uses primary chart data on TXN/NXPI capex intensity.

**Excerpt scope:** Only section 1 (Analog and Power Semis: Supply Chain Inheritance) + intro. Remaining sections (CPUs in the Agentic Era / Neoclouds / AI Materials Bottlenecks / Korea Unlocked / Updates) referenced but not provided.

**Workflow:** INGEST + TRACE — produces 2 new methodology frameworks worth codifying

---

## Verified facts (from excerpt)

- "AI server boards use more than 10x as many MLCCs than crypto miners" [Citrini]
- "the last time GPUs were in high demand because of crypto mining in '19-21" and "the associated severe shortage of MLCCs that doubled Murata's share price" [Citrini]
- TXN (Texas Instruments) capex intensity (capex/revenue) DECLINING despite AI demand acceleration [Citrini chart in note]
- NXPI (NXP Semiconductors) peer behavior matches — also not ramping capacity, raising ASPs instead [Citrini]
- NVDA's May 2025 technical blog credits 800V DC rack architecture to "the electric vehicle and solar industries" [Citrini citing NVDA]
- Citrini's "Post-Traumatic Supply Disorder" framework: companies dealing with power semis had to contend with COVID supply glut + Chinese analog competition + anemic EV/automotive cycle — "they're not rushing to add capacity, having been burnt one too many times"
- Citrini's "Supply Chain Inheritance" thesis: AI capex IS inheriting the EV/solar buildout supply chain
- Companies named: Murata (6981.T, held), Vishay Intertechnology (VSH), Samsung Electro-Mechanics (009150.KS), TXN, NXPI

---

## New methodology frameworks introduced

### Framework A: "Post-Traumatic Supply Disorder"
Cycle-burned analog/power semi companies deliberately NOT expanding capacity despite demand acceleration; let ASPs rise instead. This is the psychological compound to principle #26 (cyclical-to-structural transition). The structural transition is happening AND capacity isn't responding the way prior cycles would predict, because mgmt is scarred from the COVID glut + EV slowdown + Chinese analog competition. Margin expansion compounds revenue expansion.

**Codified as methodology principle #27** in `research/meta/methodology.md` (added 2026-05-26).

### Framework B: "Supply Chain Inheritance"
AI's 800V DC rack architecture is literally inheriting the EV/solar manufacturing infrastructure per NVDA's own May 2025 technical blog. The physical supply base is shared. Implications:

- T1 Energy (held 4.82%) — prior agent classification "NOT AI" may need reconsideration; G2 Austin solar cell factory + battery infrastructure is part of the same supply base that powers AI server rack architecture
- Eaton (ETN), Vertiv (VRT), Schneider Electric — power-conversion infrastructure that previously sat outside AI universe gets re-rated
- The supply chain inheritance crosses sectors: EV→AI flows through power conversion, DC architecture, magnetics, capacitors, inductors

Added as active theme in `research/sector/themes.md` (2026-05-26).

---

## N-th order cascade

**1st order (P>80%):** Murata thesis materially REINFORCED. Citrini explicitly names Murata as "first and highest-conviction" beneficiary. 10x-MLCC-per-AI-server-vs-crypto-miner bottoms-up math anchors the demand multiplier. The 2019-2021 doubled-share-price historical analog is a direct chart precedent for what this cycle could repeat.

**2nd order (P~60%):** Post-Traumatic Supply Disorder extends pricing power BEYOND typical cycle-supply-response timeframe. ASPs rise instead of units. Murata FY27 OP guide +34.8% already reflects this; the 15-35% April 2026 price hike + 8→24 week lead times are the operational fingerprints. Reinforces the 4092 (Nippon Chemical Industrial) capacity-gap-statement-probability prediction at 55-65% per `research/meta/2026-05-26-ath-refresh-and-4092-prediction.md` — if MLCC tier doesn't ramp, BaTiO3 powder upstream gets bid harder.

**3rd order (P~40%):** Supply Chain Inheritance reframes T1 Energy — held position with prior "NOT AI" classification gets partial-AI-thesis-rehabilitation under the new framing. Also reframes the entire EV/solar-to-AI value chain — opens new candidate names (Eaton ETN, Vertiv VRT, Schneider, Hubbell) previously outside the AI universe. STM (planned €5K add) benefits from same supply-chain-inheritance thesis but subject to SiC commoditization caveat retained from duration scoring.

**4th order (P~20%):** New candidate stubs surfaced — TXN, NXPI, VSH — all in analog/power-semi space showing capex discipline + AI demand acceleration. Samsung Electro-Mechanics is the vertically-integrated MLCC competitor to Murata; not investable individually for our user (Samsung Group conglomerate) but reinforces the industry-wide pattern.

---

## Cross-stack cascade

| Implication | Tickers affected | Direction | Order | Magnitude |
|---|---|---|---|---|
| MLCC pricing power maintained for 24+ months | Murata (held) | Beneficiary | 1st | High |
| Margin expansion compounds revenue expansion | Murata (held), TXN, NXPI, VSH (candidates) | Beneficiary | 1st | High |
| BaTiO3 powder upstream demand intensifies | 4092 / Nippon Chemical Industrial (candidate WAIT) | Beneficiary | 2nd | Medium-High |
| EV/solar manufacturing infrastructure re-rated | T1 Energy (held), Eaton (not in universe), Vertiv (not in universe) | Beneficiary | 2nd | Medium |
| Power semi pricing power | STM (held, planned add), TXN, NXPI (candidates) | Beneficiary | 2nd | Medium (STM caveat: SiC commoditization risk per duration matrix) |
| Crypto-mining 2019-21 chart precedent for Murata | Murata (held) | Beneficiary | 1st | Medium (historical analog, not deterministic) |

---

## Bypass-route landscape

**MLCC bottleneck:**
- Substitute / alternative-supplier: Yageo, Walsin (Chinese — not qualified for AI-grade); TDK (vertically integrated via Nov 2025 TDK-NCI JV); Samsung EM (in-house vertical integration)
- Workaround: redesign boards with more lower-spec MLCCs at higher BOM count (reinforces volume demand)
- Post-Traumatic Supply Disorder makes even consensus suppliers slow to expand → bypass routes are weaker than typical cycle predicts

**Power semi bottleneck:**
- Alternative supplier: Wolfspeed (SiC), Infineon, onsemi, Rohm — all qualified for AI-DC SiC per prior duration scoring
- TXN/NXPI capex discipline IS the thesis — they let bypass-supplier capacity build instead of competing for share; second-source qualification can absorb without breaking structural pricing-power story for disciplined incumbents

---

## Updates to existing thesis files (cascade per principle #25 + Critical Rule #10)

- `research/companies/MURATA/thesis.md` — Citrini direct-validation cascade + crypto-cycle historical analog + 10x MLCC-per-AI-server math + Post-Traumatic Supply Disorder framework reference
- `research/companies/TE/thesis.md` — Supply Chain Inheritance reframing; partial-AI-thesis-rehabilitation flag for user review (note: prior agent said "NOT AI universe" — this is a meaningful reclassification candidate)
- `research/companies/STM/thesis.md` — Supply Chain Inheritance + Post-Traumatic Supply Disorder back-reference; SiC commoditization caveat still applies
- `research/meta/methodology.md` — principle #27 codified (Post-Traumatic Supply Disorder)
- `research/sector/themes.md` — "Supply Chain Inheritance" added as new active theme

## Updates to candidate file (deferred per user instruction)

- TXN, NXPI, VSH candidate stubs DEFERRED — user requested go through one-by-one after existing-file updates

## Patterns most analysts will miss

- **Post-Traumatic Supply Disorder is a meta-level pattern** that explains WHY this cycle's analog/power-semi behavior differs from prior cycles, and WHY the structural transition can persist despite "obvious" capacity ramps that would normally arrive. Codification-worthy.
- **Supply Chain Inheritance reframes T1 Energy.** Prior agent classification ("this name should NOT be in an AI-sector investing universe") may have anchored too literally on the SOLAR label vs the underlying SUPPLY CHAIN. The physical infrastructure is shared.
- **Murata's "doubled in crypto cycle" historical analog gives a CHART PRECEDENT** — matching the convergence pattern the user articulated ("if a narrative and the chart both tell the same story, that is usually a good setup"). For Murata: narrative + chart precedent + bottoms-up math (10x MLCCs per AI server vs crypto miner) all converge.

## Larger-context placement

This event compounds with:
- `research/meta/2026-05-26-ath-refresh-and-4092-prediction.md` — the 4092 capacity-gap probability gets reinforced by the Post-Traumatic Supply Disorder framework (same psychology applies upstream at BaTiO3 powder tier)
- `research/signals/events/2026-05-25-sk-hynix-ihbm.md` — different layer (memory packaging) but same structural pricing-power compounding pattern
- `research/wiki/physical-ai-primer.md` — Murata's universal-Physical-AI-supplier classification gets further reinforced
- `research/sector/where-we-are.md` — the binding-constraint synthesis stays intact; pricing-power durability extends
