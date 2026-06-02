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
- `research/wiki/networking-primer.md` — cross-source synthesis below

## Cross-reference — Networking primer (added 2026-05-21)

Per `research/wiki/networking-primer.md` Extrapolation 6: Active Copper Cables (ACC) adoption is a structural transition as power constraints bind harder. SMTC CopperEdge delivers 90% power savings vs alternatives for short-distance — directly relevant to the per-rack short-haul links inside AI clusters where pluggable optics would be over-engineered. **SMTC is the named small-cap leveraged exposure for this transition.** The 2-3% Active candidate tier from prior thesis stands; networking primer reinforces the structural pull but doesn't quantify adoption pace (still the key uncertainty).

## Deep dive (added 2026-05-22, full framework applied per principles #17, #19, D2.5)

Triggered by user request 2026-05-22 to apply the full framework (not surface analyst summary) to SMTC. Several material findings beyond the existing thesis:

### Critical findings the existing thesis missed

**1. Multiple hyperscaler LPO design wins confirmed** (resolves existing thesis's biggest blind spot).

Per [MatrixBCG competitive landscape](https://matrixbcg.com/blogs/competitors/semtech): "Semtech has already secured LPO design wins with several top U.S. hyperscalers, successfully competing against industry heavyweights like Broadcom and Marvell." Plus per [FinancialContent SMTC deep-dive](http://markets.chroniclejournal.com/chroniclejournal/article/finterra-2026-3-16-the-camarillo-comeback-a-deep-dive-into-semtech-corporations-smtc-ai-driven-transformation): multi-customer LPO traction at top US hyperscalers. **NOT a single-customer concentration story.** Existing thesis blind spot ("named hyperscaler for ACC design win") is partially resolved by multi-hyperscaler LPO confirmation.

**2. 1.6T ACC hyperscaler deployment shipping Q1 FY27 (THIS QUARTER)**.

Per [Investing.com Q4 FY26 transcript](https://www.investing.com/news/transcripts/earnings-call-transcript-semtechs-q4-2026-earnings-beat-expectations-93CH-4564222) + [Motley Fool transcript](https://www.fool.com/earnings/call-transcripts/2026/03/16/semtech-smtc-q4-2026-earnings-call-transcript/): Semtech expects to start shipping CopperEdge for a 1.6T ACC hyperscaler deployment this quarter (Q1 FY27 = May-July 2026), with demand accelerating throughout the year. ACC shipments to cable manufacturers begin this quarter to support mid-year volume ramps. **Catalyst is happening NOW, not a forward expectation.**

**3. Data center segment is the dominant growth driver and accelerating**.

Per [Motley Fool transcript](https://www.fool.com/earnings/call-transcripts/2026/03/16/semtech-smtc-q4-2026-earnings-call-transcript/) + [Yahoo Finance Q4 highlights](https://finance.yahoo.com/news/semtech-q4-earnings-call-highlights-225350089.html):
- Q4 FY26 data center revenue $63M (+26% YoY, +12% QoQ) — record
- FY26 data center revenue $223M (+58% YoY)
- **FY27 data center growth expected >50% YoY** per management
- Driven by 800G + 1.6T + future 3.2T solutions across CopperEdge (ACC), LPO, NPO

**4. Strategic positioning: power-efficiency vs DSP-heavy** is the structural differentiation.

Per [FinancialContent deep-dive](http://markets.chroniclejournal.com/chroniclejournal/article/finterra-2026-3-16-the-camarillo-comeback-a-deep-dive-into-semtech-corporations-smtc-ai-driven-transformation): "Broadcom and Marvell dominate the high-end DSP market... Semtech has carved out a leadership position in the LPO and ACC markets by focusing on power efficiency rather than raw processing power. Semtech's FiberEdge platform allows for optical transceivers that dispense with power-hungry Digital Signal Processors (DSPs), reducing power consumption by up to 50% per link."

This is the **non-consensus structural insight**: SMTC isn't competing head-on with AVGO/MRVL in DSP. They've carved a parallel path (LPO + ACC) that aligns with S3 (power binds) scenario. Different product, different positioning, different competitive dynamic.

**5. Q1 FY27 guide $283M ± $5M (+13% YoY) per [Motley Fool transcript](https://www.fool.com/earnings/call-transcripts/2026/03/16/semtech-smtc-q4-2026-earnings-call-transcript/)**. Adjusted GM ~52.8%. Adjusted EPS $0.45 ± $0.03.

### 10-vector cross-reference

**1. Layer-above (customers):** Multi-hyperscaler LPO wins (top US hyperscalers — not single-customer); 1.6T ACC hyperscaler deployment; cable manufacturers; module makers (Lumentum, Coherent, Innolight). Customer concentration LOWER than existing thesis assumed.

**2. Layer-below (suppliers):** TSMC foundry; no critical supply constraints; fabless model.

**3. Same-layer competitors:**
- **Marvell (MRVL)** — DSP-heavy transceivers (different product positioning)
- **Broadcom (AVGO)** — DSP-heavy transceivers (different product positioning)
- **MACOM** — competing in specialty roles
- **MaxLinear (MXL)** — adjacent
- The competitive frame is **DSP-heavy (AVGO/MRVL/MACOM) vs power-efficient (SMTC LPO+ACC)** — DIFFERENT product categories, not direct head-to-head at the same product layer

**4. End-market cycle:** AI datacenter cycle accelerating; 800G → 1.6T → 3.2T transition pulling SMTC products into mainstream; IoT/LoRa segment separate slower cycle.

**5. Geographic / FX:** US-listed, US-designed, TSMC-manufactured; lower geopolitical exposure than AXTI (China) or TSEM (Israel).

**6. Materials:** N/A (fabless).

**7. Customer's customer (2nd-order):** Hyperscalers → enterprise AI + AI labs. Agentic-AI workload growth → more racks → more interconnects → more SMTC content. Same workload-amplifier pattern as DDOG/MURATA but at interconnect specialty silicon layer.

**8. Substitute technology trajectory:** LPO vs DSP — SMTC's power-efficiency positioning competes structurally against DSP-heavy incumbents. ACC vs traditional copper — 90% power savings. Long-term: silicon photonics integration may compress some FiberEdge use cases but ACC stays relevant.

**9. Regulatory:** US-domestic content advantage; no material China exposure.

**10. Cross-portfolio overlap (if added):**
- NEW sub-layer in user's portfolio: power-efficient interconnect specialty silicon
- Adjacent to ALAB (candidate, interconnect protocol) — both at interconnect but DIFFERENT sub-layers (SMTC at physical-signal, ALAB at protocol/switching)
- Different from optical-stack proper (AXTI/TSEM/STM/GLW are at substrate/foundry/photonic IC/fiber)
- Different from all other held positions
- **Cleanest small-cap leveraged specialty silicon at interconnect layer**

### D1-D5 scoring

**D1. Structural relevance & displacement risk: MEDIUM-HIGH**
- LPO and ACC are physics-based power-efficiency alternatives to DSP-heavy approaches
- Multi-product portfolio (LPO + ACC + LoRa IoT) gives diversification
- Displacement risk MEDIUM long-term: silicon photonics integration could compress some FiberEdge use cases, but SMTC is evolving with the wave (1.6T → 3.2T roadmap)
- ACC particularly durable for in-rack short-haul (no near-term substitute at the 90% power-savings level)

**D2. Chokepoint severity: MEDIUM at power-efficient interconnect layer**
- Not monopolistic but DIFFERENTIATED positioning vs DSP-heavy competitors
- ACC = power-savings monopoly for short-haul (no DSP alternative matches)
- LPO = competitive but with 50% power advantage per link
- Pricing power: medium (Q4 adj GM 52.8%) — not premium tier like ALAB's 76%; solid for specialty silicon

**D2.5 Proximity to bottleneck (per new dimension):**
- **Layer 0 at power-efficient interconnect bottleneck** — LPO + ACC differentiated positioning
- **Layer 1 at AI cluster networking bottleneck** (TIAs within optical modules)
- **Layer 1-2 at 1.6T / 3.2T port-speed transition bottleneck**
- Multi-bottleneck but lower-magnitude than ALAB (Layer 0 at multiple critical bottlenecks with 76% GM)
- **Net proximity: HIGH but lower-magnitude than the top-tier Layer-0 names like ALAB**

**D3. Competitive position: STRONG NICHE LEADER in LPO + ACC**
- Multiple hyperscaler design wins confirmed (LPO + ACC)
- Differentiated power-efficiency positioning vs DSP-heavy AVGO/MRVL
- Smaller cap = more leveraged upside per design win
- Multi-product portfolio with execution across LPO + ACC + future 3.2T
- The non-consensus structural insight: parallel category, not head-on competition with DSP incumbents

**D4. Mismodeling + rerating-arc position: MID-ARC**
- Data center +58% FY26, expected >50% FY27 = inflecting
- 1.6T ACC hyperscaler shipping THIS QUARTER = catalyst happening
- Stock has had meaningful run; recognition Stage 3
- Forward P/E ~33-63x range per [GuruFocus](https://www.gurufocus.com/term/forward-pe-ratio/SMTC) vs semi industry median 28.75x = moderate premium (NOT extreme like ALAB at 132x or ARM at 132x)
- Analyst PT average $104.62 (high $115, low $89) per [Public.com](https://public.com/stocks/smtc/forecast-price-target)
- **Mismodeling pattern:** consensus may UNDER-model the multi-hyperscaler LPO traction + power-efficiency moat structural durability

**D5. Independent view (the divergences):**

| Divergence | Direction | Falsifiable test |
|---|---|---|
| **Multi-hyperscaler LPO design wins** = not single-customer concentration story (resolves existing thesis blind spot) | Bull vs existing-thesis framing | Customer disclosure in Q1-Q2 FY27 |
| **LPO vs DSP is parallel categories, not head-to-head competition** | Bull (frame shift) | AVGO/MRVL LPO product roadmap response |
| **1.6T ACC ramp is NOW** (Q1 FY27 shipping) — catalyst is current, not forward | Bull (timing) | Q1 + Q2 FY27 data center revenue trajectory |
| **Forward P/E moderate** (~45x mid) is REASONABLE vs ALAB (132x) and ARM (132x) — better risk-reward at the specialty silicon layer | Bull (relative valuation) | Q1 FY27 print + multiple compression dynamics across peers |
| **Smaller cap = leveraged upside if design wins compound** (vs MRVL/AVGO larger-cap dilution) | Bull (asymmetric) | Q3-Q4 FY27 customer expansion |
| **IoT/LoRa segment creates mix complexity** | Bear (cleanliness) | IoT segment % of revenue trajectory |

### Portfolio A/B category assignment (per principle #19)

**Primary: Portfolio B (Asymmetric Upside satellite)**
- Smaller cap with leveraged upside per design win outcome
- 1.6T ACC ramp is the near-term catalyst (Q1 FY27 = NOW)
- 2-3% sizing range appropriate
- 6-12 month horizon for catalyst inflection

**Secondary: Portfolio A characteristics emerging**
- Multi-hyperscaler customer base reduces concentration risk
- Multi-product portfolio (LPO + ACC + LoRa) gives diversification
- Power-efficiency moat aligns with structural S3 (power binds) scenario
- **NOT pure Portfolio A** — too small-cap + multi-segment for primary structural safety positioning

**Compared to other candidates:**
- vs ALAB: lower per-unit pricing power (52.8% vs 76% GM) but cheaper valuation; lower customer concentration risk
- vs ARM: smaller revenue base + simpler thesis; less multi-bottleneck positioning
- vs AVGO (candidate): direct competitor in some layers but differentiated; AVGO bigger / SMTC more leveraged
- **The cleanest small-cap leveraged interconnect-specialty-silicon exposure in user's universe**

### Two-handed view

| | Bull case | Bear case |
|---|---|---|
| 1.6T ACC | Shipping THIS QUARTER; mid-year volume ramp; hyperscaler deployment | Hyperscaler could delay or shift architecture |
| LPO design wins | Multiple top US hyperscalers confirmed | AVGO/MRVL respond with their own LPO offerings |
| Power-efficiency moat | 50% per-link power savings vs DSP = structural advantage at S3 scenario | DSP cost compression could match LPO's price/perf |
| Multi-product | LPO + ACC + LoRa diversification | IoT segment creates mix complexity vs pure-play AI peers |
| Valuation | Forward P/E ~45x mid is reasonable vs ALAB 132x and ARM 132x | Stock has run; mid-arc means less rerating arc left than anchor names |
| Geographic | US-listed, US-designed = low geo risk | No geographic diversifier benefit for user's portfolio (already US-heavy) |

### Falsifier hierarchy

1. **CRITICAL: 1.6T ACC hyperscaler deployment delays past Q1 FY27** — would invalidate the most immediate catalyst
2. **HIGH: LPO adoption stalls — DSP retains dominance** — would invalidate the power-efficiency moat thesis
3. **HIGH: AVGO/MRVL launch competitive LPO offerings** displacing SMTC
4. **MEDIUM: FY27 data center growth comes in <30% YoY** (vs >50% management guide)
5. **MEDIUM: Hyperscaler customer concentration emerges** (currently appears multi-customer per MatrixBCG)
6. **MEDIUM: Margin compression below 50% adj GM** — would suggest pricing pressure
7. **LOW: IoT/LoRa segment drag worsens** — secondary concern

### Cross-portfolio implications

- **Adds power-efficient interconnect specialty silicon sub-layer** — not currently held
- Adjacent to ALAB candidate (different sub-layer at same broader interconnect category)
- Different from optical-stack proper (AXTI/TSEM/STM/GLW)
- **Geographic: adds to US weight** (not a diversifier — already US-heavy)
- **Customer base overlap:** likely shares some hyperscaler customers with AXTI/TSEM/GLW/AVGO via the broader optical/interconnect supply chain — but at different sub-layers
- **The cleanest small-cap leveraged interconnect exposure** in user's universe

### Net independent view

SMTC is structurally better than the existing compact thesis surfaced. Three findings reframe it:

1. **Multi-hyperscaler LPO design wins** = not concentration-risk story
2. **1.6T ACC ramp is NOW** (Q1 FY27 shipping) = near-term catalyst is current
3. **Power-efficiency parallel category positioning** vs DSP-heavy incumbents = structural moat differentiated from MRVL/AVGO

**For Portfolio B (Asymmetric Upside satellite):** SMTC is the cleanest small-cap leveraged interconnect-specialty-silicon exposure with confirmed multi-hyperscaler traction + 1.6T ACC catalyst happening NOW + reasonable relative valuation.

**For Portfolio A (Structural Safety core):** secondary positioning given multi-product portfolio + multi-hyperscaler base; not a pure structural safety like HYNIX/MURATA.

**Sizing: 2-3% appropriate per existing thesis; cross-vertical confirms this range.**

**Compared to ALAB and ARM (other Portfolio B/A candidates):**
- Better risk-reward at moderate forward P/E (~45x mid vs 132x for both ALAB and ARM)
- Lower per-unit pricing power but lower valuation also
- Less multi-bottleneck Layer-0 positioning but lower customer concentration
- **Different shape of asymmetric bet** — leveraged to specific catalyst (1.6T ACC + LPO) rather than multi-protocol moat

### Specifically addressing the existing thesis blind spots (resolved)

| Existing blind spot | Resolution status |
|---|---|
| IoT/LoRa segment trajectory | Still uncertain — flagged as residual risk |
| ACC adoption pace specifics | Partially resolved — Q1 FY27 ramp shipping NOW, mid-year volume |
| Inphi competition via MRVL | Partially resolved — MRVL is DSP-heavy, different product category from LPO+ACC |
| Current valuation/multiple | Resolved — Forward P/E ~45x mid; analyst PT $104.62 avg |
| Named customer in hyperscaler design win | Partially resolved — multiple top US hyperscalers (LPO) + named 1.6T ACC deployment |
| Margin trajectory as ACC vs fiber mix shifts | Watch — Q1 FY27 adj GM ~52.8% guide |

Per principle #18, formal sizing decision deferred to Phase 4 after worldview synthesis.

## Cross-reference — Bottleneck map (added 2026-05-22)

Per `research/portfolio/bottleneck-map.md`:
- **Layer 0/1** — LPO/CopperEdge at CPO bottleneck (12-24mo unpriced edge)
- **Top-compute agnostic: 9/10** — sells to all hyperscalers
- **CPU tightness: 2/10**
- **Agentic tightness: 9/10** — agentic = direct interconnect demand

## Update 2026-05-25 — NOW HELD (entered above candidate target)

User entered Semtech at **50 shares × $156.67 = ~$7,834 ($6,728 EUR equiv) = 6.09% of portfolio** per `portfolio/holdings.md` 2026-05-25 update. BEP $154.68. This is MATERIALLY ABOVE the 2-3% candidate target stated in this thesis (entered at ~2x the original target weight).

**Tier status:** upgraded from "Active candidate" to **HELD (Active tier)** — sizing-matrix tomorrow should review whether 6.09% is the right target weight or whether to trim toward original 2-3% range.

**Trigger for higher-than-target entry (open question):** the user's independent thesis layer led to a heavier entry. Plausible drivers from this OS's surfaced narratives:
- Google I/O 2026 + Cloud Next 2026 event (per `signals/events/2026-05-20-google-io-2026.md`): TPU 8i 19.2 Tb/s inter-chip bandwidth + Ironwood 9,216-chip superpods = MASSIVE signal integrity demand at scale. Active Copper Cables (CopperEdge) + FiberEdge TIAs are direct beneficiaries.
- Hyperscaler capex 2026 $175-185B doubling = step-function in optical / copper interconnect demand
- Combined with existing thesis (Active Copper Cables hyperscaler ramp 2026), the news flow may have justified a higher entry weight

**Watch items for next review:**
- Q1 2026 results (Active Copper Cables ramp specifics)
- Signal Integrity segment YoY growth rate (Q3 2026 was +30% YoY at 65.1% GM per prior thesis citation)
- Competitive position vs MRVL post-Inphi for ACC design wins

## Cross-reference — Test-time compute scaling regime (added 2026-05-25)

Per `research/signals/events/2026-05-25-test-time-compute-scaling.md`:

**2nd-order strengthened — signal integrity demand at sustained-load hyperscaler scale.** Test-time-compute regime requires sustained inter-chip data flow at TPU-8i-class bandwidth (19.2 Tb/s). Active Copper Cables (CopperEdge) + FiberEdge TIAs are direct beneficiaries — every accelerator-to-accelerator hop in a deep-reasoning compute campaign uses signal-integrity components. Reinforces user's existing 6.09% entry (which was above 2-3% candidate target — entry weight is increasingly defensible under multi-event cascade: Google I/O + test-time-compute). The user's "front-running the multi-custom-Si-bifurcation cascade" framing from prior session is incrementally validated by today's analysis.

## Cross-reference — Model economics primer (added 2026-05-25)

Per `research/wiki/model-economics-primer.md`:

The cost/sustainability counterpart to the demand-side test-time-compute event. Verified LLM inference economics + 1999-fiber-buildout counter-analog stress test surface the structural conclusion: AI capex (1.28% of GDP) exceeds 1999 telecom peak BUT financing is fundamentally different (cash-funded trillion-dollar tech, debt/equity 0.23 for AMZN/GOOG/MSFT/META). **Position remains structurally defensible.** Hynix specifically: 5.92-6.79x forward P/E inherently less exposed to Cisco-1999 multiple-compression analog than higher-multiple AI names. The 3-5x invisible-reasoning-token multiplier quantifies the test-time-compute regime cost economics. MYTHOS worked example (~$375K compute spend → $50M-$1B+ cybersecurity value at ~100x-2,000x ROI estimate) proves "compute as utility" framing for at least one vertical.

## Cross-source synthesis — Portfolio matrix tagging (added 2026-05-29, per Critical Rule #10)

Per `research/meta/2026-05-29-portfolio-snapshot-agentic-ai-robotics-matrix.md`: SMTC tagged **Agentic AI CRUCIAL — YES** (signal integrity + ACC Active Copper Cables for AI fabric scale-out; agent fleet networking density compounds) + **Robotics INDIRECT** (distributed robotics bandwidth). Recent cascade: REINFORCED via AWS+Cloudflare infrastructure rebuild for AI agents = more agent-fleet networking demand. No sizing change beyond existing position.

## Cross-source synthesis — AWS RNG architecture May 29-30 (added 2026-05-30, per Critical Rule #10)

Per `signals/cross-source-log/2026-05-30-evening-may29-morning-may30-briefs.md`: AWS Resilient Network Graphs (May 30) + xAI Colossus 2 gigawatt cluster signals = AI fabric architecture rebuilds compound; signal integrity + Active Copper Cable demand at high-density tier benefits even as total device count decreases. Less devices + more bandwidth per device = each fabric link does MORE.

**Position implication:** HOLD at 4.08% — pending AWS RNG architecture verification on which layer captures the value shift. No sizing change.

## Cross-source synthesis — Optical-attached LPDDR memory pools signal (added 2026-06-01, per Critical Rule #10)

Per `signals/cross-source-log/2026-06-01-optical-memory-disaggregation-signal.md`: T3 architectural prediction reinforces SMTC as 1st-order beneficiary (P>80%) — FiberEdge TIAs needed in every optical module connecting compute to memory pool; CopperEdge ACCs for short-distance pool tier. Double-counted beneficiary status at the optical-electrical conversion boundary which is non-bypassable in the predicted architecture.

**Position implication:** HOLD — architectural signal reinforces existing thesis. User considering "free-up" review: this signal explicitly removes SMTC from "free-up" candidate set.

## Cross-source synthesis — Computex 2026 Day 1 (added 2026-06-02, per Critical Rule #10)

Per `signals/cross-source-log/2026-06-02-computex-2026-day1-synthesis.md`: Spectrum-X CPO confirmed at TSMC 3nm with Lumentum lasers + Coherent silicon photonics (T2). 1.6T optical transceiver transition is the structural thesis SMTC participates in. SMTC's AGC silicon photonics at 1.6T serves long-reach scale-out optical interconnect; CPO scale-up (Wiwynn demo + NVDA Spectrum-X) is additive, not competitive. 800G+ optical transceivers projected >60% of total transceiver shipments in 2026 per [EETaiwan T2](https://www.eettaiwan.com/20260327nt21-2026-percentage-of-800g-optical-transceiver-module/). **Position implication:** HOLD at 3.18% — CPO transition validates SMTC's optical signal integrity thesis; SMTC not directly named at Computex but cascade is positive 2nd order.
