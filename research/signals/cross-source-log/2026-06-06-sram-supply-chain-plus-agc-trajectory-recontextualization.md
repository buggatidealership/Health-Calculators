# 2026-06-06 AM — SRAM Supply Chain + AGC Trajectory Re-Contextualization

**Trigger:** User-articulated systems-thinking question 2026-06-06 AM — push past static analysis to (a) SRAM supply chain understanding and (b) AGC PTFE growth trajectory not just static %.

## TOPIC 1: SRAM technology + supply chain (layman terms)

### What is SRAM

| Property | SRAM | DRAM/HBM | NAND |
|---|---|---|---|
| Speed | VERY FAST | medium | slow |
| Density | LOW (MB scale) | HIGH (GB scale) | HIGHEST (TB scale) |
| Cost per bit | HIGHEST | medium | lowest |
| Refresh required | NO | YES | NO |
| Volatility | volatile | volatile | non-volatile |
| Traditional role | On-chip cache | Main memory + accelerator | Storage |
| Groq's twist | 230MB on-chip as PRIMARY storage, not cache | n/a | n/a |

### Groq LPU architecture (the named replacement for Rubin CPX)

Per [Groq T1 architecture page](https://groq.com/lpu-architecture) + [Awesome Agents T3](https://awesomeagents.ai/hardware/groq-lpu/) + [TSP Substack T3](https://tspasemiconductor.substack.com/p/sram-as-the-new-compute-fabric-a):

- 230MB on-chip SRAM as primary weight storage (not cache)
- 80 TB/s SRAM bandwidth (vs HBM ~5 TB/s)
- Fabbed at TSMC 14nm — mature node (high-yield, low manufacturing defects)
- Doesn't compete with NVDA/AMD/Apple for advanced-node TSMC capacity
- Alchip = back-end ASIC design partner

### Supply chain by tier (my model)

**1st order (direct SRAM-chip designers):**
| Company | Investable? | Notes |
|---|---|---|
| Groq | NO (private) | LPU; 230MB SRAM |
| Cerebras (WSE) | NO (private; IPO pulled) | Wafer-scale engine; all-SRAM |
| Tenstorrent | NO (private) | SRAM-heavy ASICs |
| Google TPU | Indirect via GOOGL | Hybrid SRAM/HBM |

**2nd order (fabricators + design partners):**
| Company | Investable? | Why |
|---|---|---|
| TSMC (TSM) | YES NYSE | Fabs Groq + Cerebras at mature 14nm; structural beneficiary |
| Alchip | Taiwan TWSE — likely NOT accessible per Co-Tech precedent | Groq back-end ASIC design |
| ASML, AMAT, LRCX, KLA | YES NASDAQ | Equipment for SRAM-heavy fabs |

**3rd order (adjacent infrastructure):**
| Company | Investable? | Why |
|---|---|---|
| SUMCO (HELD 415 shares) | YES | Wafers at mature 14nm node — DUAL BENEFIT (HBM + SRAM both win) |
| Shin-Etsu | YES Japan TSE | Wafer competitor; same dual benefit |
| Murata (HELD 201 shares) | YES | MLCC in SRAM-based servers |
| ANET, Cisco | YES NASDAQ | Networking for multi-chip Groq racks |
| Vertiv (VRT) | YES | Cooling for high-density SRAM compute |
| AGC (HELD 100 shares) | YES | PTFE CCL for high-frequency SRAM-server interconnect |
| Mitsui (5706) | Japan TSE (accessible) | HVLP4 for AI server PCBs (SRAM or HBM both) |

### Critical insight for HELD portfolio

SUMCO + AGC + Murata are ALL hedged plays for SRAM vs HBM architectural shift. They win EITHER way. This is under-recognized in my prior thesis framing.

## TOPIC 2: AGC trajectory analysis (user's systems-thinking push)

### Verified TRAJECTORY data

| Segment / Product | Growth rate | Source |
|---|---|---|
| AGC overall Q1 2026 revenue | +7.7% YoY (¥538B) | [Investing.com Q1 transcript T2](https://www.investing.com/news/transcripts/earnings-call-transcript-agc-inc-beats-q1-2026-estimates-stock-rises-93CH-4698859) |
| AGC AI server / high-speed comms guidance | "Very strong demand will continue" — mgmt explicit | Same transcript |
| PTFE CCL market 2026 | +9.6% CAGR through 2035 | [Business Research Insights T2](https://www.businessresearchinsights.com/market-reports/ptfe-ccl-market-100051); $1.42B market 2026 |
| High-speed CCL market 2026 | $8B size; AI server driver explicit | [openPR T3](https://www.openpr.com/news/4473439/pcb-ccl-market-2026-2032-high-frequency-high-tg) — NVDA GB300 explicitly using PTFE CCL |
| Global CCL market 2025-2026 | $16B → $21.5B = +34% growth | [futuremarketinsights T3](https://www.futuremarketinsights.com/reports/high-frequency-high-speed-copper-clad-laminate-ccl-market) |
| AGC architectural glass | ~3-5% YoY (cyclical) | derived |

### Re-contextualization

| AGC segment | Static % (today) | Growth rate trajectory | Implied future weight (my model, 2028) |
|---|---|---|---|
| AI-exposed (PTFE CCL + EUV blanks + display glass) | ~25-35% | +10-15% YoY (faster than 7.7% overall) | ~35-45% |
| Non-AI industrial (architecture + chemicals + automotive) | ~50-60% | ~3-5% YoY (slower) | ~45-50% |

**User insight verified:** PTFE IS growing faster than AGC's overall business. AI-exposed segment is the growth engine.

### Honest re-classification (my model)

**Updated AGC framing:**
- NOT "pure edge AI play"
- IS "diversified industrial with AI-exposed growth engine in PTFE CCL + EUV blanks"
- Position size 2.12% appropriate for diversifier role
- Trajectory thesis-positive (AI segment growing 2-3x faster than non-AI segment)

## Parallel hypotheses on portfolio implications (my model)

**H1 (P=45%) SUMCO is hedge against architectural shift** — wins on SRAM AND HBM both
**H2 (P=35%) AGC trajectory validates hold despite static % not being pure edge AI**
**H3 (P=15%) Both insights compound to support current portfolio diversification**
**H4 (P=5%) Add direct SRAM supply chain exposure (TSMC, equipment names) for future deployment**

## N-th order cascade if Groq-SRAM scales (architectural tail you articulated)

- 1st order (P>80%): Groq scales LPU; NVDA validates via $20B licensing; SRAM-based inference TAM grows
- 2nd order (P~60%): TSMC mature-node 14nm capacity tightens; SUMCO + Shin-Etsu wafer demand on BOTH advanced AND mature nodes
- 3rd order (P~40%): PTFE CCL for high-frequency SRAM-server interconnect → AGC PTFE segment benefits; Mitsui HVLP4 benefits
- 4th order (P~20%): Memory ASP cycle peaks earlier as HBM TAM compresses 10-20%; HYNIX margin normalization 2027; SNDK NAND less affected (different memory tier)

## Joint-state matrix on held positions vs SRAM + PTFE findings (my model)

| Position | SRAM/Groq risk | PTFE/AI material growth | Net read |
|---|---|---|---|
| HYNIX (8) | RISK (HBM tail) | NEUTRAL | Hold with tail acknowledged |
| SNDK (4) | NEUTRAL (NAND different tier) | NEUTRAL | Hold |
| SUMCO (415) | + HEDGE (wins both ways) | NEUTRAL | Better hedge than I framed |
| AGC (100) | NEUTRAL | + (PTFE for SRAM-server CCL too) | Better trajectory than I framed |
| MURATA (201) | NEUTRAL (MLCC both ways) | + adjacent | Hold |
| Hirano, ARM, NOW, DDOG, MDB | NEUTRAL | NEUTRAL | Hold |

## Cascade actions executed

1. ✅ SUMCO thesis — flag as architectural-shift hedge (SRAM mature node + HBM advanced node both)
2. ✅ AGC thesis — reframe with trajectory analysis (PTFE growing faster than overall)
3. ✅ Cross-source-log artifact (this file) created
4. ✅ Open question logged: should TSMC or equipment names be added as direct SRAM-chain candidates?
