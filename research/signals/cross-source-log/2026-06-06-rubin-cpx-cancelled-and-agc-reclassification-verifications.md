# 2026-06-06 AM — Follow-up Verifications: Rubin CPX Cancelled + AGC Reclassification

**Trigger:** User-flagged follow-up verifications from 2026-06-05 evening brief INGEST
**Workflow:** Verification + thesis reframing
**Cascade impact:** HYNIX thesis REINFORCED; AGC thesis needs reframing

## Verification 1: Rubin CPX — CANCELLED CONFIRMED

Per [Tom's Hardware T2](https://www.tomshardware.com/pc-components/gpus/nvidia-removes-rubin-cpx-accelerators-from-its-roadmap-groq-3-lpus-take-center-stage-as-cpx-is-removed) + [Wccftech T2](https://wccftech.com/nvidia-rubin-cpx-is-off-the-roadmap-but-may-return-with-feynman-in-2028/) + [The Elec Korean T2](https://www.thelec.net/news/articleView.html?idxno=10763) + [Spheron T3](https://www.spheron.network/blog/nvidia-rubin-cpx-long-context-inference/):

- NVDA REMOVED Rubin CPX from roadmap at GTC 2026 (March 2026)
- Replaced with **Groq 3 LPX Rack** — 256-chip SRAM-based inference accelerator
- NVDA-Groq deal: $20B licensing
- Reason per Korean source: memory + substrate orders for Rubin CPX failed to materialize
- May return with Feynman generation (~2028+) per NVDA VP Ian Buck

### Implication for HYNIX HBM thesis

**Architectural threat REMOVED** (GDDR7 substitution for HBM not happening via Rubin CPX). HYNIX HBM thesis FULLY INTACT.

**BUT** — architectural risk SHIFTED to Groq 3 SRAM-based replacement. Magnitude similar (10-20% HBM TAM compression risk 2027-2028) but different actor.

## Verification 2: AGC edge AI classification — PARTIALLY WRONG

Per [Investing.com Q1 2026 earnings transcript T2](https://www.investing.com/news/transcripts/earnings-call-transcript-agc-inc-beats-q1-2026-estimates-stock-rises-93CH-4698859) + [AGC Electronics product pages T1](https://www.agc.com/en/products/electoric/index.html) + [AGC Electronics America EUV blanks T1](https://agcem.com/products/euv-mask-blanks/) + [PitchBook T2](https://pitchbook.com/profiles/company/13460-50):

### AGC business segments (verified)

| Segment | Description | Edge AI exposure (my model) |
|---|---|---|
| Architecture Glass | Float, low-E, fireproof glasses for buildings | NONE |
| Automotive Glass | Vehicle glass + cover glass for in-vehicle displays | LOW |
| Electronics | LCD/OLED display glass + semiconductor materials + PCB | MIXED (display = consumer edge AI; semi materials = mostly DC) |
| Chemicals | Vinyl chloride, caustic soda, urethane, solvents | NONE |
| Life Science | (smaller) | NONE |

### AI-relevant products

| Product | Tilt |
|---|---|
| EUV Mask Blanks (¥40B+ target 2025) | DC-TILTED (leading-node = mostly DC chips) |
| PTFE Composite Materials | MIXED (consumer + DC) |
| Glass substrates for LCDs/OLEDs | EDGE/CONSUMER (smartphone display) |

### Honest AGC AI exposure breakdown (my model)

- Edge AI/consumer electronics: ~10-20%
- DC/leading-node semi materials: ~25-35%
- Non-AI industrial: ~50-60%

**Verdict:** AGC is NOT primarily an edge AI play. Diversified glass/chemicals conglomerate, MORE DC-tilted than edge-AI-tilted.

## Joint-state matrix update on held positions

| Position | Pre-verification view | Post-verification view |
|---|---|---|
| HYNIX (8 shares) | + STRONG with Rubin CPX caveat | + STRONGER (threat removed; Groq risk smaller-magnitude shift) |
| SNDK (4 shares) | + parallel NAND | + (unchanged — NAND not affected) |
| AGC (100 shares) | Edge AI play per user framing | DIVERSIFIED INDUSTRIAL, ~30% DC-tilted, ~15% edge-tilted — reframe needed |
| ARM (20 shares) | Edge AI + Grace DC | Unchanged |
| Other 6 positions | Per prior matrix | Unchanged |

## Parallel hypotheses (my model)

- H1 (P=45%) HYNIX thesis FULLY INTACT; AGC thesis reframed as value-diversifier hold not AI play
- H2 (P=30%) Groq 3 SRAM substitution becomes new HBM architectural risk; magnitude similar to Rubin CPX
- H3 (P=15%) AGC re-evaluated as "value diversifier" hold — position rationale shifts but hold remains
- H4 (P=10%) If user kept AGC SPECIFICALLY as edge AI bet, thesis broken; AGC becomes exit candidate

## Cascade actions executed

1. ✅ HYNIX thesis — Rubin CPX cancellation noted; architectural threat to HBM REMOVED; Groq 3 substitution flagged as new tail risk
2. ✅ AGC thesis — reclassification noted (not pure edge AI; diversified industrial with mixed AI exposure ~15% edge + ~30% DC)
3. ✅ This cross-source-log artifact created
