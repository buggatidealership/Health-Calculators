# Semtech (SMTC) — Thesis (Compact)

**Last updated:** 2026-05-21
**Tier:** Active candidate (signal integrity + Active Copper Cables hyperscaler design wins)
**Position target:** 2–3% if entered (user holds 0%)
**Anti-fragility:** 3/5 — wins in S1, S2, S3 (cluster networking persists)
**Foundation:** `research/wiki/optical-interconnect-primer.md`, `research/wiki/agentic-workload-scaling.md`

## TL;DR

Semtech (NASDAQ: SMTC) is a signal integrity + IoT semi company with **growing AI data center exposure**. FY 2026 revenue **$1.05B (+15.47% YoY)** per [Stock Analysis](https://stockanalysis.com/stocks/smtc/). **Signal Integrity segment Q3 2026 record $56.2M (+30% YoY) at 65.1% gross margin** per [Globe and Mail](https://www.theglobeandmail.com/investing/markets/stocks/AVGO-Q/pressreleases/36369250/how-semtechs-data-center-chips-are-powering-the-ai-boom/).

**Key products for AI:**
- **FiberEdge TIAs** (Transimpedance Amplifiers) — convert light to electrical data inside optical modules; critical for 800G/1.6T transition
- **CopperEdge for Active Copper Cables (ACCs)** — 90% power savings vs alternatives. **Major hyperscaler design win ramping in 2026** per Globe and Mail

Q1 2026 guidance: 52.8% adj GM, 18.6% adj op margin per same source.

## Where Semtech sits in the AI stack

Per `research/wiki/optical-interconnect-primer.md` — two angles:

**1. Optical transceiver components (TIAs):** every optical module needs TIAs to convert light → electrical. Semtech is a leader. Downstream of LITE/COHR/AXTI.

**2. Active Copper Cables (ACCs):** for short-distance, in-rack connections. CopperEdge's 90% power savings is structural at scale.

Competes with: Marvell (MRVL post-Inphi acquisition), MaxLinear (MXL), specialty optical vendors.

## Anti-fragility (per `research/sector/scenarios.md`)

| Scenario | Result |
|---|---|
| S1 NVDA dominant | WIN — clusters need signal integrity |
| S2 Custom Si fragments | WIN — same |
| S3 Power binds | WIN — ACC 90% power savings is competitive advantage |
| S4 Digestion | LOSS — semi cycle |
| S5 Regulatory | NEUTRAL |

**Anti-fragility: 3/5**

## Token-Volume Filter
Per `research/meta/methodology.md`: ✓ PASS. Cluster scale grows with workload; signal integrity components scale.

## Position recommendation

2-3% entry candidate. Differentiated by **CopperEdge ACC story** — power-savings angle aligns with S3 (power binds).

**Why Semtech:** Smaller cap = more upside leverage if AI scales; ACC ramp at hyperscaler is a 2026 catalyst.

**Why not vs MRVL/AVGO:** Smaller scale; ACC adoption uncertain at scale vs fiber; IoT segment creates mix complexity.

## Blind spots

1. IoT/LoRa segment trajectory (separate from AI)
2. ACC adoption pace specifics
3. Inphi competition via MRVL
4. Current valuation/multiple (not pulled)
5. Named customer in "major hyperscaler design win" (concentration risk)
6. Margin trajectory as ACC vs fiber mix shifts

**Most important blind spot:** named hyperscaler for ACC design win. If MSFT/META/AMZN/GOOG, material; if smaller, less so.

## Cross-references
- `research/wiki/optical-interconnect-primer.md`
- `research/wiki/power-for-ai-primer.md` — CopperEdge power savings
- `research/companies/MRVL/thesis.md` — competitor
- `research/companies/AIXTRON/thesis.md` — upstream equipment
