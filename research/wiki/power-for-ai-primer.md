# Power for AI — Why It's the Binding Constraint Through 2028

**Last updated:** 2026-05-21
**Type:** Reference primer. Power is the most under-modeled bottleneck in the AI value chain. Read before reasoning about VST, CEG, TLN, NRG, GEV, ETN, HUBB, POWL, VRT, BE, NEE, T1 Energy, or any ex-crypto-miner thesis.
**Methodology:** Bottoms-up supply vs demand model built from primary sources before consensus comparison (per L1 lesson).

---

## TL;DR

US datacenter power demand projected to grow from ~75.8 GW (2026) to ~92 GW (2027) to ~134 GW (2030) per [451 Research](https://avidsolutionsinc.com/13-data-center-growth-projections-that-will-shape-2026-2030/) and [Goldman Sachs](https://www.goldmansachs.com/insights/articles/ai-to-drive-165-increase-in-data-center-power-demand-by-2030). Grid interconnect queues stretch **36–48 months in PJM/ERCOT data center zones** per [Camus Energy](https://www.camus.energy/blog/why-does-it-take-so-long-to-connect-a-data-center-to-the-grid). **New supply delivers ~2–3 GW/yr while demand adds 5–7 GW/yr** per same source — a structural deficit of 3-5 GW/year. GE Vernova gas turbine backlog hit 100 GW in Q1 2026 with slots reserved through 2030 per [Utility Dive](https://www.utilitydive.com/news/ge-vernova-gas-turbine-backlog-hits-100-gw-as-prices-rise/818332/). Eaton electrical sector backlog +48% YoY per [Eaton 8-K via SEC](https://www.sec.gov/Archives/edgar/data/0001551182/000155118226000010/etn03312026exhibit99.htm).

**This is the binding constraint Aschenbrenner is positioned for** ($5.52B in power-infrastructure equity longs per `research/signals/events/2026-05-21-aschenbrenner-q1-13f.md`). The structural read is sound: AI compute demand outruns grid expansion + new generation through at least 2028. **The investable insight is in the BYPASS ROUTES (Bloom Energy, mobile power, ex-crypto-miners with existing interconnect) and in the concentrated IPP names with existing nuclear capacity that hyperscalers cannot replicate.**

---

## Why this matters

Power is the layer beneath ALL chip-stack theses. Every chip needs MW of grid-or-behind-the-meter power to operate. Per `wiki/agentic-workload-scaling.md`: if workload grows ~10× over 24 months and per-chip efficiency improves ~2×, gross power demand grows ~5× over 24 months. **No chip-stack thesis works if the chips can't be powered.**

Cross-references this primer informs:
- T1 Energy, Bloom Energy, CORZ, IREN, APLD, RIOT, CLSK, SEI, Bitfarms, HIVE Digital theses (all queued P2)
- VST, CEG, TLN, NRG, GEV, ETN, HUBB, POWL, VRT, NEE (watchlist per `research/watchlist/candidates.md`)
- S3 scenario (power binds — 25% weight per `sector/scenarios.md`)
- T2 theme (per `sector/themes.md`)
- `meta/time-to-x-framework.md` worked example

---

## Definitions

**Datacenter power demand** = MW of electrical capacity required to operate datacenter compute + cooling + lighting + supporting infrastructure.

**IT power** ≈ 50–60% of total datacenter power (the chips themselves). Cooling 30–40%. Lighting + other 5–10%.

**Power Usage Effectiveness (PUE)** = total facility power / IT power. Modern hyperscaler: ~1.1–1.3. Older facilities: 1.5–2.0.

**Interconnect queue** = regulatory + engineering process to connect new generation OR new large load to transmission grid. Managed by ISOs/RTOs (PJM, ERCOT, MISO, CAISO).

**Behind-the-meter (BTM)** = on-site generation bypassing grid interconnect. Fuel cells, gas turbines, eventually SMRs.

**Power Purchase Agreement (PPA)** = long-term contract (typically 10–20 years) between producer and end-user at agreed pricing.

---

## The current state — supply vs demand

### Demand side

| Year | US datacenter power demand | Source |
|---|---|---|
| 2026 | 75.8 GW (IT + cooling + lighting + other) | per [451 Research via Avid Solutions](https://avidsolutionsinc.com/13-data-center-growth-projections-that-will-shape-2026-2030/) |
| 2027 | ~92 GW (Goldman Sachs forecast) | per [Goldman Sachs](https://www.goldmansachs.com/insights/articles/ai-to-drive-165-increase-in-data-center-power-demand-by-2030) |
| 2028 | 108 GW | per 451 Research/Avid Solutions |
| 2030 | 134.4 GW (or 156 GW AI-specific per McKinsey) | per 451 Research; alternative McKinsey via Avid Solutions |

Growth slope: ~+10-15 GW/year baseline; +15-20 GW/year in Goldman's aggressive forecast.

Annual electricity consumption (TWh, different metric):
- 2023: 176 TWh (LBNL baseline)
- 2028 forecast: 325–580 TWh range (per [LBNL via S&P Global](https://www.spglobal.com/energy/en/news-research/latest-news/electric-power/101425-data-center-grid-power-demand-to-rise-22-in-2025-nearly-triple-by-2030))
- 2030 forecast: 400–600 TWh

### Supply side — the binding constraint

**Grid interconnect queue lengths** per [Camus Energy](https://www.camus.energy/blog/why-does-it-take-so-long-to-connect-a-data-center-to-the-grid):
- US national average: 25 months
- ERCOT baseline: 20 months; **36-48 months in data center load growth zones**
- PJM baseline: 40 months; **36-48 months in data center load growth zones**
- 1,216 active projects in PJM + ERCOT alone, 111.6 GW generation + 64.3 GW storage capacity in queue

**ERCOT large load requests:** "rocketing to more than 230 gigawatts in 2025, with more than 70% from data center developers" per same source.

**The supply-demand gap:** "Data centers now add 5-7 GW annually while new supply delivers only 2-3 GW" per same source. **Structural deficit of 3-5 GW per year.**

**Transformer + electrical equipment shortages:**
- "Two new data centers in Silicon Valley have been built but cannot operate: the transformers needed to supply electricity remain unavailable, with manufacturers holding multi-year, billion-dollar backlogs" per [Camus Energy](https://www.camus.energy/blog/why-does-it-take-so-long-to-connect-a-data-center-to-the-grid)
- Eaton Q1 2026: electrical sector backlog +48% YoY; twelve-month rolling order acceleration in Electrical Americas +42% per [Eaton 8-K via SEC](https://www.sec.gov/Archives/edgar/data/0001551182/000155118226000010/etn03312026exhibit99.htm)
- GE Vernova Electrification segment booked $2.4B in datacenter equipment orders Q1 2026 — "more than all of last year" per [Power Engineering](https://www.power-eng.com/gas/turbines/data-centers-drive-record-surge-in-ge-vernova-power-equipment-orders-as-turbine-slots-tighten-through-2030/)

**Gas turbine lead times:**
- GE Vernova backlog: 100 GW Q1 2026, up from 83 GW end-2025 per [Utility Dive](https://www.utilitydive.com/news/ge-vernova-gas-turbine-backlog-hits-100-gw-as-prices-rise/818332/)
- CEO Strazik expects gas turbine reservations "sold out through 2030 by end-2026" per same source
- GE, Siemens, Mitsubishi backlogs "stretch roughly five years, with many delivery slots already sold into the next decade" per same source

### The bottom line

Supply is structurally constrained at every layer: generation, interconnect queues, transformers + electrical equipment, permitting, manufacturing capacity. Demand is structurally accelerating per `wiki/agentic-workload-scaling.md`. **Time-to-power is the binding metric.** Names that deliver power FAST or own EXISTING dispatchable capacity command premium pricing.

---

## The consensus solution — nuclear restart + new gas + IPPs with existing capacity

### Nuclear restart deals

**Microsoft + Constellation (Three Mile Island)** per [Data Center Frontier](https://www.datacenterfrontier.com/energy/article/55142561/microsoft-nuclear-ppa-to-restart-three-mile-island-shows-hyperscalers-urgency-for-clean-energy):
- 20-year PPA
- ~800 MW carbon-free
- Renamed Crane Clean Energy Center
- Target online: 2028
- DOE loan ~$1B of ~$1.6B project cost per [DCD](https://www.datacenterdynamics.com/en/news/constellation-secures-1bn-loan-from-us-doe-to-support-restart-of-three-mile-island-nuclear-plant-report/)

**Vistra + Meta (January 2026)** per [Vistra analysis](https://www.financialcontent.com/article/finterra-2026-2-26-vistra-corp-vst-the-nuclear-powered-engine-of-the-ai-revolution):
- 20-year PPA
- 2.1+ GW nuclear (Perry, Davis-Besse, Beaver Valley)

**Constellation + Meta (2025):** 20-year PPA, 1.1 GW per [Lambda Finance](https://www.lambdafin.com/articles/vistra-vs-constellation-vs-talen)

**Meta + Vistra/Oklo/TerraPower** per [Latitude Media](https://www.latitudemedia.com/news/meta-strikes-6-6-gw-nuclear-deal-to-fuel-its-ai-supercluster/): Up to 6.6 GW of clean energy by 2035

**Constellation acquired Calpine on Jan 7, 2026** — "creating the nation's largest producer of electricity" per [Constellation 8-K via SEC](https://www.sec.gov/Archives/edgar/data/0001868275/000186827526000063/ceg-20260511991.htm).

### IPP fleet rankings

Per [Lambda Finance](https://www.lambdafin.com/articles/vistra-vs-constellation-vs-talen):
- **Constellation (CEG):** 21 reactors, ~19,400 MW (largest US fleet)
- **Vistra (VST):** 6 reactors, ~6,400 MW + gas + retail in ERCOT
- **Talen Energy (TLN):** smaller; Susquehanna plant + Amazon PPA dynamics
- **NextEra (NEE):** largest regulated utility + renewables + nuclear
- **NRG Energy (NRG):** merchant power; smaller AI exposure

### Geographic concentration

| Region | Note |
|---|---|
| **ERCOT (Texas)** | Fastest interconnect (20mo baseline); preferred data center geography; merchant pricing — VST advantage |
| **PJM** | CEG nuclear concentrated here; longer queues (40mo); Three Mile Island restart |
| **MISO** | Renewable-heavy; mixed for AI |
| **CAISO** | Power-expensive + water-constrained |
| **Gulf states / Sovereign** | New build-outs with packaged power deals |

---

## The bypass routes — where the asymmetric setup lives

Per `meta/time-to-x-framework.md` — when consensus solution has multi-year lead times, bypass routes capture the time-sensitive premium.

### Bypass 1 — Behind-the-meter fuel cells (Bloom Energy)

**Bloom Energy (BE)** — Aschenbrenner's biggest long at $878.7M per `research/signals/events/2026-05-21-aschenbrenner-q1-13f.md`.

Thesis: solid-oxide fuel cells deploy in MONTHS not years. Run on natural gas. BTM means no grid interconnect wait. Hyperscalers buy BE for marginal capacity they can't otherwise add quickly.

**Critical assessment:** Fuel cell unit economics depend on (a) natural gas price, (b) capex per kW, (c) maintenance / fuel reliability. BE has been a story stock — execution discipline is the question, not the structural thesis. Recognition Stage 3-4.

**My read:** Bull thesis intact. User sold at ~+30% per `predictions/lessons.md` L3 — should not have done so. Aschenbrenner validates. Re-entry justified on pullback (Pass 2 BE thesis queued).

### Bypass 2 — Mobile / modular power generation

**Solaris Energy Infrastructure (SEI)** — Aschenbrenner's $62.5M long.

Mobile power generation skids deployed at oilfields originally; pivoting to datacenters. Deploy in weeks. Less efficient per MW than utility-scale but the time premium dominates.

### Bypass 3 — Ex-crypto-miner repurposed power assets

Aschenbrenner has $1.4B+ in ex-crypto-miner names (CORZ, IREN, APLD, RIOT, CLSK, Bitfarms, HIVE).

Thesis: existing GW-scale grid interconnect + PPAs + land took 3-7 years to assemble. Repurposing for AI hosting captures spread between BTC mining (~$0.04/kWh return) and AI hosting (~$0.20-0.50/kWh).

**Critical assessment:** name selection matters. CORZ + CoreWeave-Microsoft archetype proven; others optionality. Each has different geography (ERCOT vs Northeast) and execution quality.

### Bypass 4 — Modular nuclear (SMR) — 2027+ story

**GE Vernova BWRX-300** SMR; Oklo, Westinghouse, TerraPower racing. Meta deals include SMR component. 5-10 year solution, not near-term. Investable today as optionality on existing names (GEV especially).

### Bypass 5 — Clean / renewable + battery (T1 Energy archetype)

**T1 Energy (TE)** — Aschenbrenner's $43.9M; user holds 7.1%.

Thesis: US-domestic solar manufacturing + battery storage = strategic capacity not dependent on grid interconnect. IRA tax credits supportive (Trump policy risk).

**Critical assessment:** Solar/battery for AI works as supplemental power; cannot fully replace dispatchable generation due to intermittency. T1 specifically is manufacturing, not power production. Different economic profile from IPPs.

---

## Investable names — by tier

### Tier 1 — Independent Power Producers (existing dispatchable capacity)

| Name | Profile | Key advantage |
|---|---|---|
| **Vistra (VST)** | Largest ERCOT gas + nuclear merchant | Texas concentration + Meta 2.1+ GW deal |
| **Constellation (CEG)** | Largest US nuclear (19.4 GW + Calpine) | Most nuclear MW; TMI restart; pure-play nuclear narrative |
| **Talen Energy (TLN)** | Smaller IPP + Susquehanna | Amazon PPA; higher leverage |
| **NRG Energy (NRG)** | Merchant power | Less AI exposure than VST/CEG; potential under-rated |
| **NextEra (NEE)** | Regulated utility + renewables + nuclear | Larger but regulated upside cap |

### Tier 2 — Power equipment + electrical

| Name | Profile | Key advantage |
|---|---|---|
| **GE Vernova (GEV)** | Turbines (100 GW backlog) + electrification | Most direct exposure to gas turbine + transformer shortage |
| **Eaton (ETN)** | Electrical equipment (+48% YoY backlog) | Datacenter switchgear, transformers |
| **Hubbell (HUBB)** | Electrical components for datacenters | Less covered; watchlist candidate |
| **Powell Industries (POWL)** | Switchgear; mid-cap | High beta to electrical cycle |

### Tier 3 — Cooling (coupled to power layer)

| Name | Profile | Key advantage |
|---|---|---|
| **Vertiv (VRT)** | Liquid cooling + power distribution | Mandatory at GB300+ rack density |

### Tier 4 — Behind-the-meter / bypass

| Name | Profile | Key advantage |
|---|---|---|
| **Bloom Energy (BE)** | Solid oxide fuel cells | Time-to-power leader; Aschenbrenner's biggest long |
| **Solaris Energy (SEI)** | Mobile gas power | Weeks not years deployment |
| **T1 Energy (TE)** | US solar + battery mfg | Clean power supply chain; IRA exposure |

### Tier 5 — Ex-crypto-miner power-asset plays

| Name | Profile | Aschenbrenner position |
|---|---|---|
| **Core Scientific (CORZ)** | CoreWeave + Microsoft archetype | $389M |
| **IREN Limited (IREN)** | Pure GW-scale power assets | $401M |
| **Applied Digital (APLD)** | HPC datacenter operator | $320M |
| **Riot Platforms (RIOT)** | Crypto + AI pivot | $142M |
| **CleanSpark (CLSK)** | Crypto + AI pivot | $104M |
| **Bitfarms** | Crypto + AI pivot | $38.8M |
| **HIVE Digital, Bitdeer** | Smaller positions | Sizes not in primary disclosure |

### Tier 6 — Long-term / SMR (optionality)

| Name | Profile | Status |
|---|---|---|
| **GE Vernova BWRX-300 program** | Small modular reactor | Optionality in GEV stock |
| **Oklo (OKLO)** | Microreactor | Meta partner; early-stage |
| **Westinghouse (private)** | Conventional nuclear | Private |

---

## The Token-Volume Filter applied to power names

Per `meta/methodology.md`:

| Name | Token-Volume Filter | Reasoning |
|---|---|---|
| VST, CEG, TLN, NRG | ✓ PASS (clean) | MW consumed scales with AI workloads regardless of per-token cost |
| GEV, ETN, HUBB, POWL | ✓ PASS (clean) | Equipment demand scales with capacity buildout |
| VRT | ✓ PASS | Cooling load scales with compute density |
| BE, SEI | ✓ PASS | Time-to-power demand scales with deployment urgency |
| T1 Energy | ✓ PARTIAL | Solar mfg cyclical; IRA policy-dependent |
| Crypto miners (CORZ, IREN, APLD, RIOT, CLSK, Bitfarms) | ✓ PASS (with execution risk) | Power-asset value scales; pivot execution determines capture |
| NEE | ✓ PASS but slower | Regulated structure caps upside |

**Power category as a whole passes the filter cleanly.** Structurally one of the strongest investable categories per OS framework.

---

## Falsifiers — what would break the power-binding thesis

1. **Major grid reform / permitting fast-track** — federal action accelerating interconnect timelines from years to months. Would compress time-to-power premium.
2. **AI capex pause / S4 scenario** — would reduce datacenter load growth and let supply catch up.
3. **MoE / model efficiency improvements >50%** — reduces per-inference power need.
4. **Rapid SMR deployment** — first commercial SMR in 18-24 months (currently optimistic). Would add BTM dispatchable capacity faster.
5. **Geographic concentration in existing-capacity regions** — Texas + parts of Asia already have power; concentration there reduces the binding constraint at system level.

---

## Where this primer disagrees with consensus

**Consensus position:** Power is a "real but manageable" constraint. Supply ramp + nuclear restarts + renewables eventually catch up. Hyperscaler capex sustains demand without crisis.

**My read after this build:** Power is a MORE binding constraint than consensus implies, for three reasons:

1. **The supply-demand gap (5-7 GW demand vs 2-3 GW supply per year) is STRUCTURAL.** Not a temporary squeeze — a multi-year deficit that compounds. Time-to-power premium PERSISTS, not narrows.

2. **Multi-year transformer/equipment backlogs are not solvable by capex alone.** Manufacturing capacity for utility-scale transformers + switchgear has a 24-month buildout itself. Supply curve is inelastic in the relevant horizon.

3. **Hyperscaler capex isn't reducing — it's accelerating.** Per `wiki/agentic-workload-scaling.md`, demand is plausibly under-modeled by ~2-3× over 24 months. If demand surprises upside while supply remains inelastic, the binding constraint TIGHTENS.

**Implication:** IPP names with existing nuclear (CEG, VST, TLN) have pricing power that compounds. Bypass-route names (BE, SEI, ex-miner pivots) capture the time-premium spread. Equipment names (GEV, ETN, HUBB, POWL, VRT) benefit from the backlog cycle.

This validates Aschenbrenner's structural read on power. The disagreement (per `signals/events/2026-05-21-aschenbrenner-q1-13f.md`) is on the SHORT-CHIP timing, not the LONG-POWER thesis.

---

## Open questions

1. **Will federal permitting reform pass?** Bipartisan support exists but timing uncertain. Could compress time-to-power premium materially.
2. **SMR commercialization timeline** — Oklo, GEV BWRX-300, Westinghouse racing. 18-month range of uncertainty on first commercial deployment.
3. **Crypto miner AI-pivot execution rate** — what % of CLSK/RIOT/Bitfarms/HIVE actually convert vs stay primarily in BTC mining?
4. **Geographic shift of AI demand** — if datacenters increasingly land in ERCOT or Gulf states, it compresses the PJM-specific bottleneck.
5. **Hyperscaler vertical integration** — if MSFT/GOOG/AMZN/META directly buy more power generation (vs PPA), it changes the IPP business mix.

---

## How this primer connects to specific names already in OS

| Name | Connection | Position |
|---|---|---|
| **T1 Energy** | User holds 7.1%; Aschenbrenner $43.9M | P2 thesis queued |
| **Bloom Energy** | Aschenbrenner's biggest long; user sold too early (L3) | P2 thesis queued |
| **CORZ / IREN / APLD / RIOT / CLSK** | Aschenbrenner Tier 5 power-asset plays | All P2 thesis queued |
| **VST, CEG** | Watchlist; consensus-tier IPPs | Watchlist; thesis-build candidates |
| **GEV, ETN, HUBB, POWL** | Watchlist; equipment-tier | Watchlist (cascade-walk added) |
| **VRT** | Watchlist; cooling-tier | Watchlist |

---

## Sources

### Demand-side forecasts
- [Goldman Sachs — 165% growth by 2030](https://www.goldmansachs.com/insights/articles/ai-to-drive-165-increase-in-data-center-power-demand-by-2030)
- [451 Research forecast via Avid Solutions](https://avidsolutionsinc.com/13-data-center-growth-projections-that-will-shape-2026-2030/)
- [S&P Global — global data center demand to nearly double](https://www.spglobal.com/energy/en/news-research/latest-news/electric-power/110525-global-data-center-power-demand-expected-to-almost-double-by-2030)
- [S&P Global — datacenter grid power 22% in 2025](https://www.spglobal.com/energy/en/news-research/latest-news/electric-power/101425-data-center-grid-power-demand-to-rise-22-in-2025-nearly-triple-by-2030)
- [Belfer Center analysis](https://www.belfercenter.org/research-analysis/ai-data-centers-us-electric-grid)
- [World Resources Institute](https://www.wri.org/insights/us-data-centers-electricity-demand)
- [DOE clean energy resources](https://www.energy.gov/oe/clean-energy-resources-meet-data-center-electricity-demand)

### Interconnect + supply side
- [Camus Energy — interconnect queue analysis](https://www.camus.energy/blog/why-does-it-take-so-long-to-connect-a-data-center-to-the-grid)
- [Carbon Direct — PJM/ERCOT interconnect](https://www.carbon-direct.com/press/carbon-direct-releases-new-analysis-of-power-grid-interconnection-queues-pjm-ercot)
- [Introl — PJM 6GW shortfall](https://introl.com/blog/pjm-grid-crisis-6gw-shortfall-data-center-power-2027)
- [LBNL Queued Up report](https://emp.lbl.gov/queues)
- [Wood Mackenzie — ISO interconnection](https://www.woodmac.com/news/opinion/the-iso-interconnection-game/)

### Nuclear deals
- [Microsoft-Constellation TMI — Data Center Frontier](https://www.datacenterfrontier.com/energy/article/55142561/microsoft-nuclear-ppa-to-restart-three-mile-island-shows-hyperscalers-urgency-for-clean-energy)
- [DOE loan — DCD](https://www.datacenterdynamics.com/en/news/constellation-secures-1bn-loan-from-us-doe-to-support-restart-of-three-mile-island-nuclear-plant-report/)
- [Meta 6.6 GW nuclear — Latitude Media](https://www.latitudemedia.com/news/meta-strikes-6-6-gw-nuclear-deal-to-fuel-its-ai-supercluster/)
- [Data Center Nuclear Update — Data Center Frontier](https://www.datacenterfrontier.com/energy/article/55239739/data-center-nuclear-power-update-microsoft-constellation-aws-talen-meta)
- [Vistra thesis — FinancialContent](https://www.financialcontent.com/article/finterra-2026-2-26-vistra-corp-vst-the-nuclear-powered-engine-of-the-ai-revolution)
- [VST/CEG/TLN comparison — Lambda Finance](https://www.lambdafin.com/articles/vistra-vs-constellation-vs-talen)
- [CEG Calpine acquisition — SEC 8-K](https://www.sec.gov/Archives/edgar/data/0001868275/000186827526000063/ceg-20260511991.htm)

### Power equipment
- [GE Vernova 100 GW backlog — Utility Dive](https://www.utilitydive.com/news/ge-vernova-gas-turbine-backlog-hits-100-gw-as-prices-rise/818332/)
- [GEV data center equipment surge — Power Engineering](https://www.power-eng.com/gas/turbines/data-centers-drive-record-surge-in-ge-vernova-power-equipment-orders-as-turbine-slots-tighten-through-2030/)
- [Eaton Q1 2026 8-K — SEC](https://www.sec.gov/Archives/edgar/data/0001551182/000155118226000010/etn03312026exhibit99.htm)
- [GE Vernova Q1 2026 8-K — SEC](https://www.sec.gov/Archives/edgar/data/0001996810/000199681026000063/gevpressrelease1q26.htm)
- [Primary VC — gas turbine bottleneck](https://www.primary.vc/articles/the-gas-turbine-bottleneck-reshaping-energy-infrastructure-ex8qe)

### Cross-references in OS
- `research/wiki/agentic-workload-scaling.md` — demand-side anchor
- `research/wiki/hbm-primer.md` — coupled supply-chain analysis
- `research/meta/time-to-x-framework.md` — methodology framework
- `research/signals/events/2026-05-21-aschenbrenner-q1-13f.md` — Aschenbrenner long-power thesis
- `research/sector/scenarios.md` — S3 (power binds) currently 25%
