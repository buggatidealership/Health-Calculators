# Networking Primer — Fabrics, Switches, Optics, Sub-Layers, Extrapolations

**Last updated:** 2026-05-21
**Type:** Reference primer with first-principles + BOM-level decomposition + non-consensus extrapolations
**Depth standard:** Per `meta/methodology.md` core principle #12 (default below revenue mix) + 2026-05-21 first-principles framework. Covers physics, sub-layer suppliers, generational deltas, and 10 extrapolations consensus hasn't fully modeled.
**Complements:** `research/wiki/optical-interconnect-primer.md` (covers the InP/GaAs substrate + laser layer below); together they map the full networking stack from substrate to fabric protocol.
**Question being answered:** What's the physics + economics + sub-layer decomposition of AI networking, who supplies each sub-layer, and what extrapolations from first principles haven't crystallized in consensus yet?

---

## TL;DR

AI networking is decomposed into ~8 sub-layers (switch silicon, optical engines, pluggable transceivers, fiber, retimers, DPUs, ACCs, NIC IP). Each sub-layer has different suppliers, different generational cadences, and different exposure to the next-gen transition.

**Key first-principles insights:**
- **Bandwidth-per-port doubles every ~2 years** — faster than Moore's Law cadence for compute silicon
- **Optical engines per switch roughly double per generation** (8 → 16 for Bailly → Davisson per [Broadcom](https://investors.broadcom.com/news-releases/news-release-details/broadcom-announces-tomahawkr-6-davisson-industrys-first-1024))
- **Power-per-bit gets WORSE with rising bandwidth past 1.6T** — copper hits density limits → optical mandatory
- **Scale-up fabric (NVLink) is structurally separate from scale-out fabric (Ethernet/InfiniBand)** — different competitive dynamics

**Non-consensus extrapolations (§5 below):** 10 patterns including liquid-cooling-for-switches, DPU-as-competitive-layer, Ultra Ethernet threat to NVIDIA InfiniBand moat, optical-engine BOM cycle independent from bandwidth cycle.

---

## 1. First principles — the physics that constrain networking

**Three fundamental constraints:**

### Constraint 1 — Bandwidth-distance-power product
Moving bits requires energy. The energy cost scales with:
- **Distance** (longer = more attenuation = more power to overcome it)
- **Bandwidth** (higher Gb/s = more power for serdes, equalization, error correction)
- **Channel medium** (copper attenuates ~quadratically with frequency; optical fiber linearly with distance)

Practical implication: **above some bandwidth-distance threshold, copper becomes physically impossible**. AI clusters cross this threshold because they need 800G+ over rack-scale distances. That's why optical interconnect is mandatory at the leaf layer in modern AI fabrics.

### Constraint 2 — Latency floor (speed of light + serdes)
Light in fiber: ~5 ns/meter. Serdes add ~20-100 ns per hop. For trillion-parameter training, latency budget matters — and is bounded by physics, not engineering. AI fabric topologies are designed around this floor (fat-tree, rail-optimized, dragonfly).

### Constraint 3 — Network growth scales SUPER-LINEARLY with cluster size
For all-to-all training communication, bandwidth requirement scales as N² (number of GPUs) divided by topology bisection. Doubling cluster size more than doubles aggregate network bandwidth requirement. **This is why networking spend is rising as a % of total compute spend**, not staying flat.

---

## 2. The 8 sub-layers — BOM-level decomposition

Per `research/wiki/optical-interconnect-primer.md` for the substrate/laser layer below; this primer covers the fabric/switch layer above.

| Sub-layer | What it is | Suppliers (held in bold) | Generational cadence |
|---|---|---|---|
| **Switch ASIC** | The packet-forwarding silicon | Broadcom (Tomahawk), NVIDIA (Spectrum, Quantum), Marvell (Teralynx), Cisco | ~2yr doubling: 25.6T → 51.2T (2023) → 102.4T (2026) |
| **Optical engine** | Silicon photonics module integrated into CPO switch | Broadcom (Davisson DR), NVIDIA (Spectrum-X Photonics), Lumentum, Coherent | 2x/gen: 8 engines per Bailly → 16 per Davisson per [Broadcom](https://investors.broadcom.com/news-releases/news-release-details/broadcom-announces-tomahawkr-6-davisson-industrys-first-1024) |
| **Pluggable transceiver** | Discrete optical module in QSFP-DD / OSFP form factor | Lumentum, Coherent, Innolight, II-VI (now Coherent post-merge) | 2yr: 400G → 800G → 1.6T |
| **Fiber + cables** | Physical medium for optical signals | **GLW (held)**, Belden specialty, OFS, AFL | Capacity utilization driven by km/campus |
| **Retimer / SerDes IP** | Boosts signal integrity for high-speed links | Astera Labs (ALAB), Credo, Marvell | Doubles per gen as port speed rises |
| **DPU / SmartNIC** | Compute offload + RDMA at the NIC | NVIDIA (BlueField), AMD (Pensando), Marvell (OCTEON), Intel (IPU) | New layer 2020+; $500-2K per server now |
| **Active Copper Cable (ACC)** | Short-distance copper alternative with active equalization, 90% lower power than alternatives | Semtech (CopperEdge), Marvell, Astera | Adoption rising 2025+ at hyperscalers |
| **Network IP / silicon** | NIC core IP, MAC, PHY | NVIDIA, Marvell, Broadcom, Synopsys (CDNS), Cadence | Cadenced with switch ASIC |

---

## 3. Generational delta — current → next-gen

### Switch ASIC race (the headline-grabbing layer)

| Vendor | Current (51.2T) | Next-gen (102.4T) | Status |
|---|---|---|---|
| **Broadcom** | Tomahawk 5 / Bailly (CPO version with 8 optical engines per [Broadcom 51.2T release](https://investors.broadcom.com/news-releases/news-release-details/broadcom-delivers-industrys-first-512-tbps-co-packaged-optics)) | **Tomahawk 6 / Davisson — 16 optical engines @ 6.4T each — SHIPPING NOW** per [Broadcom](https://investors.broadcom.com/news-releases/news-release-details/broadcom-ships-tomahawk-6-worlds-first-1024-tbps-switch) | LEAD |
| **NVIDIA** | Spectrum-4 (51.2T) + Quantum-X800 (InfiniBand) | Spectrum SN6810 (102.4T, 128×800G) + SN6800 (409.6T, 512×800G) per [Network World](https://www.networkworld.com/article/4050881/nvidia-networking-roadmap-ethernet-infiniband-co-packaged-optics-will-shape-data-center-of-the-future.html) — CPO variants H2 2026 | TRAILING ~2 quarters |
| **Marvell** | Teralynx 10 (51.2T) | Next-gen in development | TRAILING ~1 generation |

### Optical engine count per switch (the under-discussed layer)

| Generation | Switch | Optical engines per switch | Engine speed |
|---|---|---|---|
| 2024 (Bailly) | Tomahawk 5 CPO | 8 | 3.2 Tbps each |
| 2026 (Davisson) | Tomahawk 6 CPO | **16** | 6.4 Tbps each |
| 2028 projected (extrapolation, my model) | Tomahawk 7 CPO | ~32 (estimate per pattern) | ~12.8 Tbps each (estimate) |

**The doubling is consistent.** This is a separate BOM cycle from bandwidth-per-port doubling, because each engine ALSO doubles in capacity. Net: **4× optical content per high-end switch every 2 years.**

### Per-port speed cadence

- 2022-2023: 400G (Tomahawk 4, Spectrum-2)
- 2024-2025: 800G (Tomahawk 5, Spectrum-X800)
- 2026-2027: 1.6T (Tomahawk 6, Spectrum-X-Photonics, Quantum-X800 twin-port = 2×800G aggregate)
- 2028-2029 (extrapolation): 3.2T per port

This is **2x/2yr** — faster than Moore's Law's 2x/2yr transistor count cadence (which is itself slowing).

---

## 4. Fabric protocol race — Ethernet vs InfiniBand vs NVLink

Three distinct fabrics with different purposes and competitive dynamics:

### NVLink (scale-up, intra-rack)
- NVIDIA proprietary
- Connects GPUs within a rack (NVL72 = 72 GPUs with 260 TB/s scale-up bandwidth per `companies/HYNIX/thesis.md` cross-references to VideoCardz Vera Rubin article)
- NVLink 6 is the Rubin generation per [Converge Digest](https://convergedigest.com/nvlink-6-becomes-the-backbone-of-rubin-rack-scale-ai-architecture/)
- **No serious competition** at this layer (proprietary, full-stack moat)
- Custom Si vendors (AVGO, MRVL) cannot match — they don't have the GPU side

### InfiniBand (scale-out, between racks)
- NVIDIA Quantum platform (acquired Mellanox 2019)
- Historically dominant for HPC and large AI clusters
- **Under structural threat** from Ultra Ethernet Consortium

### Ethernet (scale-out, between racks)
- Open standard
- **Now leading AI back-end networks per [Lightwave Online](https://www.lightwaveonline.com/home/article/55315256/ethernet-maintains-a-lead-over-infiniband-in-the-ai-race)** — went from <20% market share to majority in ~2 years
- NVIDIA's response: Spectrum-X (ports InfiniBand features to Ethernet per [DEV Community](https://dev.to/firstpasslab/how-nvidia-spectrum-x-ports-infiniband-tricks-to-ethernet-for-ai-fabrics-3h24))
- Ultra Ethernet Consortium 1.0 spec released June 2025 with InfiniBand-class features (RDMA, congestion awareness, low latency) per [STORDIS](https://stordis.com/ultra-ethernet-consortium/)
- UEC members: AMD, Arista, Broadcom, Cisco, Intel, Meta, Microsoft — i.e., explicitly anti-NVIDIA-lock-in
- Per Arista CEO: "Ethernet is the eventual winner"

**Investable read:** ARISTA (ANET — not currently held), BROADCOM (AVGO — candidate), MARVELL (MRVL — held) all positioned for Ethernet-wins outcome. NVIDIA InfiniBand moat under pressure but Spectrum-X is the bridge.

---

## 5. Extrapolations — non-consensus reads

This is where the OS earns its keep. 10 patterns derivable from first principles + sub-layer math that consensus hasn't fully modeled:

### Extrapolation 1: Optical-engine BOM cycle is INDEPENDENT from bandwidth cycle
Consensus tracks $/port for bandwidth. The hidden cycle: **optical engines per switch doubles each gen** (8 → 16 documented, 32 projected). For Lumentum/Coherent, the unit-count growth comes from BOTH more switches AND more engines per switch. **Compound 4x BOM growth per switch generation that consensus misses.**

### Extrapolation 2: NVLink scale-up moat is structurally durable vs custom Si
Custom Si vendors win scale-out competition (Ethernet land). But **scale-up — connecting GPUs in a rack — requires NVLink-equivalent fabric, which no one else has**. As cluster designs concentrate more compute into rack-scale units (NVL72, Rubin NVL576), NVLink share of total network spend rises. **Consensus underweights how much "compute" is actually "scale-up fabric" in next-gen racks.**

### Extrapolation 3: Power-per-bit rises past 1.6T port speeds → liquid cooling for SWITCHES
Most cooling discussion focuses on GPUs. But switch silicon doubles in TDP roughly with each generation (Tomahawk 5 ~600W → Tomahawk 6 estimated >1kW per chip — my inference, awaiting Broadcom confirmation). **Liquid cooling moves from GPU-only to GPU+switch.** Beneficiaries: VRT (held thesis candidate per `companies/VRT/thesis.md`), Modine, CoolIT.

### Extrapolation 4: Ultra Ethernet maturity could compress NVIDIA's InfiniBand-based revenue by 2027-2028
UEC 1.0 specs InfiniBand-class features. As implementations mature in 2026-2027 (per UEC roadmap), enterprise + sovereign-AI customers default to Ethernet. NVIDIA InfiniBand revenue contracts unless Spectrum-X CPO captures the loss. **The InfiniBand portion of NVDA's networking revenue (estimated $5-8B range, my inference — needs verification) becomes contested.**

### Extrapolation 5: DPU-as-mandatory layer creates new $20-50B TAM
Pre-2020, NIC was free (motherboard component). Post-2024, BlueField-3 at $500-2K per server is becoming standard at hyperscalers. **Every AI server gets a DPU** = TAM = server volume × DPU ASP. At ~10M AI servers projected by 2027 (my estimate, range $500-2K → TAM $5-20B/yr). **NVIDIA BlueField has ~70% share but is the contested layer custom DPUs (Pensando/AMD, OCTEON/MRVL) can attack.**

### Extrapolation 6: ACC adoption as a structural transition
Active Copper Cables (Semtech CopperEdge, per `companies/SMTC/thesis.md`) save 90% power vs alternatives for short-distance. As power constraints bind harder, ACC replaces both pluggable optics (for short hops) and passive copper. **Adoption pace TBD but the structural pull is verified.** Beneficiary: SMTC (small cap, leveraged exposure).

### Extrapolation 7: Retimer count per port doubles each gen — Astera/Credo exposure under-modeled
At 800G, signal integrity requires retimers between switch ASIC and optical transceiver. At 1.6T, retimers required at more points in the link. ALAB Aries product line + Credo's retimer business scales with port count × retimers-per-port × generational cadence. **Same compound 4x dynamic as optical engines, applied to retimers.**

### Extrapolation 8: Networking-as-%-of-total-AI-spend is RISING, not flat
The "$0.15-0.20 of networking per $1 of compute" consensus framing (per existing `sector/ai-stack-map.md` observation #2) was true for prior-gen clusters. In Rubin NVL72/NVL576, scale-up bandwidth scales worse-than-linearly with cluster size. **Network spend per GPU is rising.** New estimate (my inference, hedged): $0.25-0.35 of network per $1 of compute in next-gen designs. Confirmation needed via Rubin BOM data.

### Extrapolation 9: CPO transition creates 12-18mo window of unstable supplier economics
As switches migrate from pluggable transceivers (Lumentum/Coherent's traditional business) to CPO (integrated into switch ASIC), the BUYER changes. Switch ASIC vendors (AVGO, NVDA) buy optical engines DIRECTLY rather than transceivers being separately specified by the network operator. **Lumentum/Coherent revenue mix shifts from end-customer to chip-vendor — different sales motion, different margin profile, lumpier.** This creates valuation noise that could be a buying opportunity in the trough.

### Extrapolation 10: Sovereign AI accelerates Ethernet adoption + ALAB-style independent silicon TAM
European, Middle Eastern, Asian sovereign AI buildouts explicitly avoid NVIDIA-lock-in via UEC Ethernet. This favors AVGO (Tomahawk), MRVL (Teralynx), ARISTA (switching systems). **Sovereign AI is a discount factor on NVIDIA InfiniBand and a multiplier on the Ethernet ecosystem.** Consensus models often treat sovereign AI as additive to NVIDIA TAM — it's not, for the networking layer specifically.

---

## 6. Cross-stack cascade — named tickers per sub-layer

Per CLAUDE.md Rule #10 (cascade discipline):

| Sub-layer | Tickers affected | Direction | Order |
|---|---|---|---|
| Switch ASIC (102.4T transition) | **AVGO (candidate)**, NVDA, MRVL (held) | beneficiary | 1st |
| Optical engines per switch (4× compound growth) | Lumentum (LITE), Coherent (COHR), AXTI (substrate per `companies/AXTI/thesis.md`), AIXTRON (equipment per `companies/AIXTRON/thesis.md`) | beneficiary | 1st |
| Fiber km per campus | **GLW (held 10.8%)** | beneficiary | 1st |
| Retimers / SerDes | Astera Labs (ALAB), Credo, MRVL (held) | beneficiary | 2nd (per Extrapolation 7) |
| DPU / SmartNIC | NVIDIA, AMD Pensando, MRVL (held), Intel IPU | beneficiary | 2nd (per Extrapolation 5) |
| ACC adoption | Semtech (SMTC — thesis built per `companies/SMTC/thesis.md`), MRVL (held) | beneficiary | 2nd |
| Switch liquid cooling | VRT (per `companies/VRT/thesis.md`), Modine, CoolIT, Boyd | beneficiary | 2nd (per Extrapolation 3) |
| InfiniBand revenue contraction (Ultra Ethernet threat) | NVIDIA | mild casualty | 2nd (per Extrapolation 4) |
| Scale-up fabric (NVLink) moat | NVIDIA | beneficiary | 1st (per Extrapolation 2) |

---

## 7. Falsifiers — when the extrapolations break

1. **AI capex cycle pause (S4 scenario)** — bandwidth-per-port doubling cadence breaks; switch upgrade cycle stalls
2. **Photonic or optical leap that compresses optical-engine count growth** — would invalidate Extrapolation 1
3. **NVIDIA CPO ramp execution issue** — would shift more share to AVGO/Marvell faster than modeled
4. **UEC standardization stalls or fragments** — would preserve InfiniBand share longer than Extrapolation 4 implies
5. **Custom Si vendors crack scale-up fabric** — would invalidate Extrapolation 2; structural NVIDIA moat compresses

---

## 8. Cross-references

- `research/wiki/optical-interconnect-primer.md` — substrate + laser layer below the switch
- `research/wiki/memory-cycle-primer.md` — adjacent layer (memory bandwidth scales with network bandwidth)
- `research/wiki/power-for-ai-primer.md` — Extrapolation 3 cooling cascade
- `research/sector/ai-stack-map.md` — high-level stack view (this primer is the deep-dig of layer 5)
- `research/meta/deep-dig-queue.md` item #9 — Optical engines per switch (this primer partially services that deep-dig)
- `research/companies/AVGO/thesis.md` — Tomahawk 6 102.4T ship
- `research/companies/MRVL/thesis.md` — Teralynx + DPU exposure
- `research/companies/AXTI/thesis.md` — InP substrate beneficiary of optical engine 4x growth
- `research/companies/AIXTRON/thesis.md` — MOCVD equipment for InP chip making
- `research/companies/GLW/thesis.md` — fiber km exposure
- `research/companies/SMTC/thesis.md` — ACC exposure
- `research/companies/VRT/thesis.md` — switch liquid cooling extrapolation

## Sources

- [Broadcom Tomahawk 6 / Davisson 102.4T ship](https://investors.broadcom.com/news-releases/news-release-details/broadcom-ships-tomahawk-6-worlds-first-1024-tbps-switch)
- [Broadcom 51.2T CPO Bailly](https://investors.broadcom.com/news-releases/news-release-details/broadcom-delivers-industrys-first-512-tbps-co-packaged-optics)
- [NVIDIA Spectrum-X Photonics CPO announcement](https://nvidianews.nvidia.com/news/nvidia-spectrum-x-co-packaged-optics-networking-switches-ai-factories)
- [Network World — NVIDIA networking roadmap](https://www.networkworld.com/article/4050881/nvidia-networking-roadmap-ethernet-infiniband-co-packaged-optics-will-shape-data-center-of-the-future.html)
- [TrendForce — InfiniBand vs Ethernet](https://www.trendforce.com/insights/infiniband-vs-ethernet)
- [STORDIS — Ultra Ethernet Consortium 1.0](https://stordis.com/ultra-ethernet-consortium/)
- [Lightwave Online — Ethernet leading AI race](https://www.lightwaveonline.com/home/article/55315256/ethernet-maintains-a-lead-over-infiniband-in-the-ai-race)
- [Converge Digest — NVLink 6 Rubin](https://convergedigest.com/nvlink-6-becomes-the-backbone-of-rubin-rack-scale-ai-architecture/)
- [Fierce Network — Arista Ullal "Ethernet eventual winner"](https://www.fierce-network.com/cloud/aristas-ullal-ethernet-eventual-winner-and-equalizer-ai-networking)
