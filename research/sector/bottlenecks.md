# Bottleneck Forecast — Current, Next, Next-Next

**last_review: 2026-05-20**
**Next review due: 2026-06-20** (monthly cadence — check at session start)

## TL;DR

Today's binding: **HBM3E + CoWoS-L + Taiwan packaging**. Mostly consensus, mostly priced.
6–12 months out: **Power siting + grid interconnect + advanced cooling**. Partially priced.
12–24 months out: **Networking silicon (CPO, optical interconnect) + advanced substrate**. Largely unpriced — this is where the edge is.

## Today's binding constraint (priced ~80%)

**Update 2026-05-26 (per `research/signals/events/2026-05-25-sk-hynix-ihbm.md`):** SK Hynix announced iHBM (Integrated Cooling Elements at the D2D PHY layer; 30% thermal resistance reduction; HBM5-targeted). This reinforces the HBM bottleneck duration: Samsung HBM3E qualification path (the consensus alternative supplier) now needs to qualify thermal performance parity in addition to capacity + yield — effective TTQ extends. CXL via ALAB remains a substitute topology at the system level (not HBM die level); LPDDR5X alternative topology unchanged. The thermal moat compounds with existing supply moat (3-year capacity gap) + packaging moat (MR-MUF).

| Constraint | Detail | Beneficiaries | Status |
|---|---|---|---|
| HBM3E supply | SK Hynix sold out 2026; Samsung qualification in progress; Micron HBM3E ramping | MU, SK Hynix (.KS), Samsung | Mostly priced |
| CoWoS-L packaging | TSMC ramping from ~55K → ~130K wpm exit-2026; NVDA gets ~60% | TSMC, NVDA, OSAT subset | Mostly priced |
| Frontier-node wafer | TSMC N3/N3P; ASML EUV systems | TSMC, ASML, AMAT, LRCX | Mostly priced |
| Skilled silicon talent | Esp. RTL, packaging engineers — affects competitor ramps | Incumbents (NVDA, TSM), barrier to AMD/custom | Soft constraint, hard to invest in |

## 6–12 month forecast (next-binding — partially priced)

| Constraint | Detail | Beneficiaries | Status | Signals to watch |
|---|---|---|---|---|
| Datacenter power siting | New AI sites need 100MW+ firm power. Grid interconnect queues are 2–7 years in many ISO regions. | VST, CEG, TLN, GEV (turbines), NEE | Partial pricing — VST/CEG already up, but more leg if S3 plays | Hyperscaler PPAs > $50/MWh, new nuclear restart announcements |
| Liquid cooling | GB300 NVL72 needs ~$50K cooling per rack. Air cooling no longer viable at density. | Vertiv (VRT), Dell/HPE/SMCI on system side, specialized cooling cos | Partially priced (VRT up materially) | Hyperscaler RFPs explicitly liquid-cooled |
| Power conversion / electrical | Higher density = more switchgear, transformers, busbars | ETN, GEV, Schneider | Partial pricing | Lead times on transformers extending beyond 24mo |

## 12–24 month forecast (next-next — UNPRICED, this is the edge)

These are the bets where consensus is not yet positioned. Each has a probability of becoming binding.

| Constraint | Detail | P(binding by end 2027) | Beneficiaries | Status |
|---|---|---|---|---|
| **Optical interconnect / CPO** | As compute density rises, copper hits SerDes limits. Co-packaged optics (CPO) becomes mandatory for >800G fabrics. | 55% | MRVL, ANET, COHR, LITE, possibly NVDA (Spectrum-X CPO roadmap), TSM CoWoS-L photonics | Largely unpriced — names like MRVL trade as commodity semi |
| **Advanced substrate (ABF, glass)** | Substrate shortage was 2022's pinch; could return with Blackwell Ultra + Rubin scale. Glass substrate is the next-gen play. | 40% | Ibiden (Japan), Unimicron (Taiwan), AMAT (glass substrate equipment), Intel (glass research) | Unpriced — niche |
| **Inference eval / observability** | As agents scale, the eval/observability/safety stack becomes mandatory enterprise spend. | 65% | DDOG, BSY, custom eval providers, possibly CRWD | Partial — DDOG repricing but more leg |
| **CPU rebalance (agentic)** | If GPU:CPU shifts to 1:4 or tighter, datacenter CPU socket count grows. AMD EPYC + Graviton + ARM benefit. | 50% | AMD (EPYC), ARM, possibly Intel if Xeon recovers | Partially priced via AMD but specific to CPU SKU |
| **Memory bandwidth (DDR + custom DRAM)** | Agentic workloads with large context = memory bandwidth strain. May force HBM4 + premium DDR. | 60% | MU, SK Hynix, Samsung | Priced in HBM; DDR side under-priced |
| **Hyperscaler-internal training silicon scale** | If TPU/Trainium/Maia scale beyond ~30% of inference, AVGO/MRVL/TSM benefit more than NVDA. | 35% | AVGO (custom Si for GOOG), MRVL (AWS/META), TSM | Partial — AVGO up materially but if S2 plays out, more leg |

## How to use this file

- **At INGEST:** when an article mentions any of the constraints above, update the relevant row + the signals column. If a signal fires that confirms a "next-next" constraint becoming "next", promote it and re-evaluate.
- **At BOTTLENECK-FORECAST (monthly):** re-examine each row. Has lead time shortened? Has a new candidate emerged? Has the probability shifted?
- **For each row, ask:** is a name in our universe positioned to benefit when this binds? If not, surface to `watchlist/candidates.md`.

## Historical lessons

- The CoWoS bottleneck of 2023–2024 was visible 18 months before consensus priced it (NVDA earnings call mentions of "supply constraints" in late 2023). Names tied to advanced packaging (specifically TSMC's CoWoS expansion winners) outperformed when consensus caught up.
- HBM was a similar pattern — SK Hynix's pricing power was visible in their margin trajectory before sell-side fully modeled it.
- The lesson: the edge is in the 12–24 month forecast, not the 0–6 month consensus pinch.
