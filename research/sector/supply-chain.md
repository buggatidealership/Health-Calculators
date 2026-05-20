# AI Supply Chain — Current State

**Last updated:** 2026-05-20

## TL;DR

The AI compute supply chain is supply-constrained at multiple nodes (HBM3E, CoWoS-L, frontier wafers). See `bottlenecks.md` for the forward forecast. This file maps who supplies whom *today*.

## Key relationships

### NVDA's upstream
- TSMC (foundry, ~60% CoWoS-L allocation)
- SK Hynix, Samsung, Micron (HBM3E)
- ASML (via TSMC; EUV equipment)
- ABF substrate suppliers (Ibiden, Unimicron) via OSAT
- Power module suppliers for systems
- OEMs for finished systems: Foxconn, Wiwynn, Quanta (private/intl)

### NVDA's downstream
- 4–5 hyperscalers (MSFT, GOOG, META, AMZN, ORCL) → ~60% of revenue
- Sovereign customers (UAE, Saudi, approved Chinese cos) → growing
- OEM partners (SMCI, DELL, HPE) → enterprise channel
- Networking attach via Spectrum-X, NVLink

### AMD's upstream
- TSMC (foundry, smaller CoWoS allocation than NVDA)
- Samsung (HBM3E secondary supplier)
- Same OSAT / substrate vendors

### Hyperscaler custom Si supply chain
- AVGO → Google TPU (design + foundry partnership)
- MRVL → AWS Trainium + Meta MTIA
- Microsoft Maia → designed in-house, TSMC fab
- All use TSMC and HBM, putting pressure on the same upstream constraints

### Memory supply (HBM3E specifically)
- SK Hynix → primary supplier (sold out 2026)
- Samsung → qualifying with key customers; HBM4 race
- Micron → US-based, ramping HBM3E

### Power supply chain
- IPP (independent power producers): VST, CEG, TLN
- Regulated utilities: NEE
- Turbine + heavy electrical: GEV (turbines), ETN (electrical)
- Cooling: VRT (liquid cooling), legacy vendors
- Construction: Bechtel, EPC firms (private)

### Networking supply chain
- ANET → ethernet switches
- NVDA → Spectrum-X (full-stack)
- MRVL → DPUs, networking ASICs
- COHR / LITE → optical components, lasers
- Cisco (CSCO) → incumbent ethernet

## Critical single-point-of-failure dependencies

- **TSMC for advanced node + CoWoS-L.** Taiwan-concentrated. Geopolitical risk.
- **ASML for EUV.** Netherlands-based. Export controls and Dutch export policy matter.
- **SK Hynix for HBM3E.** Korean political stability, plus single-quality-event risk.
- **NVDA hub-and-spoke.** Half the AI compute industry routes through one company; their execution affects the whole stack.

## Geographic concentration risk

| Layer | Primary geography | Risk |
|---|---|---|
| Advanced foundry | Taiwan (TSMC) | China-Taiwan tensions, natural disaster |
| EUV equipment | Netherlands (ASML) | Export controls |
| HBM | Korea (SK Hynix, Samsung) | Korean geopolitics |
| OSAT | Taiwan + China | Same as foundry + China-specific |
| Power generation | US, regional ISOs | Permitting, regulation |
| Sovereign customers | Gulf states + China | Export controls, geopolitical alignment |

## Update protocol

When a supply-chain event hits (e.g., new fab announcement, supply shock, M&A in the chain):
1. Update this file with the changed relationship
2. Update `bottlenecks.md` if the change shifts a constraint
3. Update affected `companies/{TICKER}/exposures.md`
4. Run TRACE for cross-domain implications
