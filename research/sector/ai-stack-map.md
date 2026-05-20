# AI Value Chain Map

**Last updated:** 2026-05-20

## TL;DR

The AI value chain has 8 layers. Most edge is at the layers where supply is constrained, switching costs are high, or one player has a monopoly. Names are listed in approximate descending order of strategic position within each layer.

## The 8 layers (compute → application)

### 1. Lithography & semi-cap (the gate to making any chip)
- **ASML** — EUV monopoly. The choke point of the whole AI value chain.
- **AMAT, LRCX, KLAC** — adjacent semi-cap (deposition, etch, metrology). Cyclical but structural.
- **TEL (Tokyo Electron)** — Japanese semi-cap, not in our US-listed universe directly but tracked via TSM/SK Hynix.

### 2. Foundry (turning designs into chips)
- **TSMC (TSM)** — the only foundry running advanced-node AI silicon at scale. Single point of failure for Taiwan, multi-fab risk.
- **Samsung Foundry** — distant second on leading node, mainly memory.
- **Intel Foundry** — strategic option but execution unproven.

### 3. Memory (especially HBM — currently binding)
- **SK Hynix (005930.KS)** — HBM3E leader, allocated to NVDA + others.
- **Samsung** — HBM3E qualification ramping; HBM4 race ahead.
- **Micron (MU)** — US-listed HBM3E ramping; balance-sheet positive vs Korean rivals on volatility.

### 4. Compute silicon (the AI processors)
- **NVIDIA (NVDA)** — dominant, ~80% data-center AI compute, full-stack (GPU + NVLink + Spectrum-X + CUDA).
- **AMD** — MI300/MI350 climbing; EPYC CPU strength (agentic-relevant).
- **Custom silicon via AVGO** — Google TPU (Broadcom partner), Meta MTIA.
- **Custom silicon via MRVL** — AWS Trainium/Inferentia, others.
- **ARM** — IP licensor (Graviton, future custom chips).
- **Intel** — Gaudi unproven; Xeon CPU side has agentic optionality.

### 5. Networking (gating cluster scale)
- **Arista (ANET)** — ethernet leader in AI back-end fabrics.
- **NVDA Spectrum-X** — vertically integrated networking; part of NVDA's full-stack moat.
- **MRVL** — custom networking silicon (DPUs, switches).
- **CIEN, COHR, LITE** — optical interconnect, CPO-adjacent.
- **CSCO** — incumbent ethernet, less AI-relevant.

### 6. Power, cooling, electrical (the becoming-binding constraint)
- **VST, CEG, TLN** — independent power producers with nuclear (best matching demand profile).
- **NEE** — utility, regulated, but large renewable + storage exposure.
- **GE Vernova (GEV)** — gas turbines (firm power), transformers.
- **Eaton (ETN)** — electrical equipment, switchgear, datacenter exposure.
- **Vertiv (VRT)** — liquid cooling, power distribution.

### 7. Hyperscalers / cloud (the buyers, plus the custom-silicon builders)
- **MSFT, GOOG, AMZN, META, ORCL** — all material AI infrastructure spenders.
- Note: hyperscalers play DUAL role — they buy NVDA chips AND build custom silicon. The mix between these is the S1-vs-S2 scenario question.

### 8. OEM / system integration
- **Supermicro (SMCI), Dell (DELL), HPE** — server OEMs assembling NVDA + AMD systems for hyperscalers and enterprise.
- **Lenovo, Wiwynn (private/intl)** — large but not US-listed.

### 9. Software / application layer (downstream of infra)

#### 9a. AI-native software (where AI is the product)
- **OpenAI, Anthropic, xAI** (private)
- **Perplexity, Mistral** (private)

#### 9b. AI-adjacent enterprise software (where AI re-prices existing software)
- **Palantir (PLTR)** — agentic-AI native architecture, government + enterprise.
- **Snowflake (SNOW)** — data platform with AI primitives.
- **MongoDB (MDB)** — vector + operational DB, agent state.
- **Datadog (DDOG)** — observability + inference monitoring.
- **ServiceNow (NOW)** — workflow automation, agentic-adjacent.
- **CrowdStrike (CRWD)** — security, mandatory AI-era spend.

## Cross-layer dependencies (who supplies whom)

These are the relationships to watch. When something breaks at one node, the cascade hits multiple names.

```
ASML  ──→  TSMC  ──→  NVDA / AMD / AVGO custom  ──→  SMCI/DELL/HPE  ──→  Hyperscalers  ──→  enterprise + AI-native cos
                  ↘                                  ↘
                    SK Hynix / Samsung / MU (HBM)      ANET / MRVL (networking)
                  
Power: VST / CEG / GEV / TLN / NEE ─→ direct contracts to hyperscalers
Cooling/electrical: VRT / ETN ─→ direct to OEMs and hyperscalers
```

## Critical observations

1. **TSMC and ASML are the highest-leverage names in the entire stack** — everything else assumes their supply. They're also the most Taiwan/Netherlands geopolitically concentrated.
2. **Networking is structurally under-valued vs compute** — for every dollar of GPU spent there's $0.15–0.20 of networking, but networking has fewer credible incumbents.
3. **Power is genuinely undersupplied** for the planned hyperscaler buildout — this is where the next non-consensus trade sits.
4. **Hyperscaler dual-role** makes them harder to read: bull on AI compute = mixed for hyperscalers (capex headwind), but if their AI revenue scales they win. Need separate models for capex burden vs AI revenue capture.
5. **Software adjacencies are LATE-cycle** — they win when the agentic-adoption signal fires in enterprise KPIs. Currently early.

## What's NOT on this map yet (track in watchlist)

- Robotics + embodied AI (Figure, Tesla, Boston Dynamics) — too early
- AI training data services — too fragmented
- Specialized inference clouds (CoreWeave, Lambda) — public via different vehicles
- Defense / sovereign AI integrators — emerging; tracked in private-tracker.md
