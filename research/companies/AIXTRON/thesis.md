# AIXTRON SE (AIXA / AIXG) — Thesis (Compact)

**Last updated:** 2026-05-21
**Tier:** Active candidate (MOCVD equipment monopoly + AI optical inflection)
**Position target:** 2–4% if entered (user holds 0%)
**Anti-fragility:** 3.5/5 — wins in S1, S2, S3 strongly
**Foundation:** `research/wiki/optical-interconnect-primer.md`

## TL;DR

AIXTRON is the **dominant MOCVD equipment maker** with **70-90% market share across most of its product portfolio** per [Kerrisdale Capital report](https://www.kerrisdalecap.com/wp-content/uploads/2025/11/AIXA-Kerrisdale.pdf). They make the deposition equipment used to manufacture compound semiconductor chips (GaN, SiC, **InP** for optical, plus power semis).

**The AI inflection:** MOCVD equipment for optoelectronics (telecoms/datacom + 3D sensing lasers) jumped from **10% of equipment revenue a year ago to 52% in Q1 2026** per [Semiconductor Today](https://www.semiconductor-today.com/news_items/2026/may/aixtron-040526.shtml). **Lumentum placed multiple G10-AsP MOCVD orders for InP-based lasers/detectors for AI data center networks** per [WebDisclosure](https://www.webdisclosure.com/press-release/aixtron-se-etr-aixa-aixtron-receives-multiple-orders-for-g10-asp-mocvd-systems-from-lumentum-to-support-expansion-of-high-speed-optical-solutions-for-ai-networks-ulMINnIZxwb).

**2026 revenue guidance RAISED to €560M ± €30M** (from €520M ± €30M) per Semiconductor Today.

## Where AIXTRON sits in the AI stack

Per `research/wiki/optical-interconnect-primer.md` supply chain:
```
InP substrate (AXTI 60-70% share)
  ↓
[AIXTRON MOCVD equipment used to deposit InP epitaxial layers]
  ↓
Epitaxy + Laser/Modulator chips (Lumentum, Coherent)
  ↓
Transceiver modules + CPO assembly
  ↓
Switch/GPU integration (NVDA Spectrum-X, AVGO, MRVL)
```

**AIXTRON is the EQUIPMENT layer** between AXTI's substrate and Lumentum/Coherent's lasers. Every InP-based optical chip requires MOCVD-deposited epitaxial layers — and AIXTRON's G10-AsP platform is the dominant tool. This is the "picks and shovels" play for the optical interconnect transition.

## Anti-fragility (per `research/sector/scenarios.md`)

| Scenario | Weight | AIXTRON result |
|---|---|---|
| S1 NVDA dominant (33%) | | WIN — Spectrum-X CPO uses InP-based optical |
| S2 Custom Si fragments (30%) | | WIN — custom Si also uses optical interconnect |
| S3 Power binds (25%) | | NEUTRAL-WIN — efficient optical = lower power per bit |
| S4 Digestion (6%) | | LOSS — equipment cycle hits hard |
| S5 Regulatory shock (6%) | | NEUTRAL — European; less US-China exposure |

**Anti-fragility: 3.5/5**

## Token-Volume Filter
Per `research/meta/methodology.md`: ✓ PASS. More AI → more optical interconnect → more InP chips → more MOCVD equipment.

## Position recommendation

2-4% entry candidate. **Deeper-stack alternative to AXTI** with similar exposure but at the equipment layer (less recognized than substrate layer). MOCVD market share of 70-90% is one of the strongest moats in the AI supply chain.

**Why AIXTRON over AXTI for new entry:** AXTI has run +6,898% past year (per user screenshot); recognition Stage 4-5. AIXTRON is earlier in recognition cycle — Q1 2026 was the inflection (52% AI optical revenue from 10% prior year). Stage 2-3 recognition with raised guidance.

## Blind spots

1. **Stock recent action context** — I haven't pulled current valuation multiple
2. **Q1 revenue down 47% YoY** (per Semiconductor Today) but ORDERS +30%; the disconnect needs explanation
3. **Cyclicality of equipment business** historically severe
4. **Competition from German + Japanese MOCVD makers** (Veeco AOS, Taiyo Nippon Sanso)
5. **Kerrisdale was historically a SHORT-thesis publisher on some names** — the Kerrisdale report cited needs interpretation (could be long or short thesis)
6. **Power semi exposure** (GaN, SiC) — important but separate from AI optical thesis

**Most important blind spot:** the Q1 2026 revenue drop -47% YoY despite +30% order growth. Suggests revenue recognition cycle creates lumpy quarterlies; orders are the leading indicator. Worth verifying.

## Cross-references
- `research/wiki/optical-interconnect-primer.md` — AIXTRON is the equipment layer
- `research/companies/AXTI/thesis.md` — substrate layer; pair-trade
- `research/companies/LITE/thesis.md` (not yet built) — laser maker downstream
- `research/companies/COHR/thesis.md` (not yet built) — laser maker downstream
