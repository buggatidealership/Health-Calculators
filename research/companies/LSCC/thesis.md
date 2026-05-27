# LSCC — Lattice Semiconductor — Thesis (candidate stub)

**Last updated:** 2026-05-27 (created from fresh-verification agent + chokepoint analysis + valuation self-audit per principle #30)
**Tier:** Active-candidate (not Core) — 1.5-3% position target if entered; sizing depends on AMI close
**Position target:** 1.5-3% (0% currently held)
**Anti-fragility:** **4/5** (revised UP from agent's initial 3.5/5 after chokepoint-breadth re-evaluation 2026-05-27 per principle #29 segmented-triangulation + principle #28 supply-chain-reality test)
**Foundation:** Fresh-verification agent 2026-05-27 + chokepoint analysis + LSCC valuation self-audit (principle #30 codified same day)
**Methodology note:** valuation framing in this thesis uses the 3-layer build-up template per principle #30 (NOT pre-training FPGA-cyclical comp set)

---

## TL;DR

Lattice Semiconductor (NASDAQ: LSCC) is the dominant supplier of low-power small-form-factor FPGAs that sit at the **control plane** of every modern compute system — server BMC, security root-of-trust, power sequencing, thermal management. The chokepoint is BROADER than AI: every modern server, networking switch, industrial system, automotive platform, and telecom box needs these chips to boot. AI is the demand AMPLIFIER, not the source of the chokepoint. Q1 2026 +42% YoY (per [Q1 2026 transcript T1](https://www.fool.com/earnings/call-transcripts/2026/05/04/lattice-lscc-q1-2026-earnings-transcript/)); Q2 guide $185M (+~50% YoY). The $1.65B AMI acquisition (per [EE Times T2](https://www.eetimes.com/fpga-makers-strategic-pivot-into-firmware-world/)) is a transformational firmware-platform pivot — closes Q3 2026, doubles SAM. Two consecutive high-quality CEOs (Jim Anderson 2018-2024 grew revenue $398M → $737M peak; Ford Tamer 2024-onwards executing recovery + AMI bet) = top-decile execution track record.

---

## Business

**Product families:**
- **Nexus**: small/mid FPGAs, core franchise for server platform control (BMC, power sequencing, root-of-trust). Mgmt label: "year of Nexus" 2026
- **Avant**: mid/large FPGAs for industrial/automotive/edge AI inference. Mgmt label: "year of Avant" 2027
- **Software stack**: sensAI (edge AI inference), Propel (design tools), platform security stack — drives Nexus attach rate

**Q1 FY2026 actuals (T1 per [SEC 8-K via StockTitan](https://www.stocktitan.net/sec-filings/LSCC/10-q-lattice-semiconductor-corp-quarterly-earnings-report-b9f007b94486.html) + [IR press release T1](https://ir.latticesemi.com/news-releases/news-release-details/lattice-semiconductor-reports-42-yoy-first-quarter-2026-revenue)):**
- Revenue: $170.9M (+42% YoY, +17% QoQ)
- GAAP gross margin: 68.8%; non-GAAP: 70.0%
- Non-GAAP EPS: $0.41
- Adjusted EBITDA: $67.8M (~39.6% margin)
- Compute & Communications segment: ~62% of Q1 total
- Q2 2026 guide midpoint: $185M (+~50% YoY implied); non-GAAP GM ~70% ±1%; non-GAAP EPS ~$0.44

**Revenue mix Q4 FY25 (T1 per SEC 8-K):**
- Communications & Computing: $92.6M (~63.5%)
- Industrial & Automotive: $44.1M (~30.3%)
- Consumer/Other: ~$9.1M (~6.2%)
- Total Q4 FY25: $145.8M (+24.2% YoY)

**Multi-year revenue history (T4 per [MacroTrends](https://www.macrotrends.net/stocks/charts/LSCC/lattice-semiconductor/revenue) + [Zippia compilation](https://www.zippia.com/lattice-semiconductor-careers-6691/revenue/)):**
- 2018: $398.8M (Anderson joined Sept 2018)
- 2019: $404.1M
- 2020: ~$408M
- 2021: $515.3M (+26.3%)
- 2022: $660.4M (+28.1%)
- 2023: $737.2M (+11.6%) — peak
- 2024: $509.4M (-31% inventory correction; Anderson exited June 2024)
- 2025: ~$523M (recovery under Ford Tamer)
- 2026E: ~$720-730M (analyst consensus implied from Q1 + Q2 guide trajectory)

**AMI acquisition (T2 per [EE Times](https://www.eetimes.com/fpga-makers-strategic-pivot-into-firmware-world/)):**
- $1.65B deal announced May 2026; expected close Q3 2026
- Adds ~$200M revenue at >70% GM
- Doubles SAM from ~$6B → ~$12B per mgmt
- Strategic logic: BMC firmware is required for every custom accelerator + chiplet design + AI rack. Combining FPGA hardware + firmware = integrated platform competitors cannot easily replicate

**CEO Ford Tamer:**
- Joined mid-2024 from Inphi (high-speed connectivity semi co acquired by Marvell 2021)
- Inphi domain expertise directly applicable to data-center TAM expansion
- Track record at Lattice: (a) managed inventory correction without cutting R&D; (b) pivoted messaging to AI-server content; (c) drove server revenue +85% YoY FY2025 per [Futurum T2](https://futurumgroup.com/insights/lattice-semiconductor-q4-fy-2025-record-comms-compute-ai-servers-85/); (d) announced transformational AMI deal

**Predecessor — Jim Anderson (Sept 2018 - June 2024):**
- Drove revenue $398M → $737M peak (~85% growth across tenure)
- Gross margin mid-50s% → ~70%
- 86% GAAP net income growth FY2022, 64% non-GAAP per earnings commentary
- Top-decile semi-CEO execution track record (comparable to Lisa Su at AMD pre-2020 or Hock Tan at Broadcom)

---

## The chokepoint position (the central thesis claim)

**Lattice's products sit at functions every modern compute system requires to boot.** The chokepoint is BROADER than AI:

| Function | AI-specific? | Universal to chip value chain? |
|---|---|---|
| Server BMC (boot, power-on, hot-plug, fan control) | NO | YES — every server, AI or not |
| Root-of-trust / boot security | NO | YES — every modern compute system; NIST + procurement specs |
| Power sequencing (multi-rail) | NO | YES — every multi-chip system |
| Thermal management firmware | NO | YES — every active-cooled system |
| Post-quantum crypto IP | Partial | Expanding to all infrastructure |
| Edge AI inference (Avant) | YES | AI-specific |
| AI workload coordination | YES | AI-specific |
| Industrial automation control | NO | YES — factory automation base layer |
| Automotive ADAS platform control | NO | YES — every modern car |

The **function** is a hard chokepoint (no bypass at system level — every server needs platform control). **Lattice the company** is the dominant supplier with REAL but degraded bypass routes (Microchip, Efinix, Achronix per [PCBInsider T3](https://pcbinsider.com/top-fpga-manufacturers)). Switching cost: 12-18 month customer re-qualification + lower software-stack maturity for alternatives.

**Why the chokepoint framing matters for thesis durability:** unlike ALAB (AI-server-data-path-specific demand) or HYNIX (HBM-cycle-specific demand), LSCC's demand source spans the entire modern compute infrastructure. AI is amplification, not creation. If AI digestion happens (S4 scenario), LSCC is hit less than AI-pure-play names because industrial / auto / non-AI server demand continues.

---

## Valuation — 3-layer build-up (per principle #30, NOT pre-training cyclical anchor)

**Methodology note:** The instinctive call ("26-27x forward EV/Sales is elevated") anchors on FPGA cyclical historical comp set (10-20x range 2010-2020). LSCC has structurally re-rated to chokepoint + AMI-firmware platform. The correct comp set is "chokepoint + software-adjacent." Per principle #30 + B32 self-catch, the 3-layer template:

**Layer 1 — Cyclical floor** (what LSCC trades at if the structural reframe is wrong):
- FPGA cyclical comp 15x mid-range × ~$725M FY27E revenue = ~$10.9B EV → roughly $80/share equivalent (my model, rough)
- This is the BEAR floor — bear case multiple

**Layer 2 — Chokepoint premium** (function critical + 12-18mo switching cost + demand breadth not AI-dependent):
- Comparable chokepoint names: ASML ~35x fwd earnings, TSMC ~25x, ARM ~80x+, ALAB ~35x EV/Sales (per agent prior research T4)
- Apply 25x chokepoint multiple to FY27E revenue → ~$18B EV → ~$130-145/share (my model)
- Current ~$140 sits in Layer 2 fair value

**Layer 3 — AMI firmware optionality** (recurring-revenue platform pivot, not yet fully priced):
- If AMI integrates and delivers ~$200M revenue at >70% GM with SaaS-like characteristics, software-adjacent multiple applies to that portion
- 30-35x blended multiple → ~$22-26B EV → ~$160-190/share range (my model, hedge band wide for integration risk)

**Displacement-risk haircut** (per principle #9 bypass-route framework):
- Microchip + Efinix exist as alternative suppliers with growing software maturity
- TSMC fab dependency = tail risk
- AMI integration risk
- Apply 15-25% haircut to Layer 2/3 fair value

**Net fair-value range** (with displacement haircut applied):
- Lower (Layer 2 with full haircut): $105-115
- Middle (Layer 2 chokepoint): $130-145
- Upper (Layer 2 + AMI optionality): $160-190

**Current ~$140 is in the upper-middle of this range** — roughly fair-to-modestly-optimistic, NOT elevated under chokepoint framing.

---

## Bull case (P=40%)

- **AI server platform-control socket expansion** continues at the per-server ASP trajectory ($1 → $3-4 range per [BeyondSPX T4](https://beyondspx.com/quote/LSCC/analysis) — directional)
- **AMI integration delivers** ~$200M added revenue + firmware lock-in layered on hardware lock-in. Re-rates LSCC from hardware to hardware+firmware platform
- **Server revenue % grows** from ~38% of 2026 → ~50%+ of 2027 (per agent forward model)
- **PQC mandates accelerate** — new socket forming at higher ASP
- **Multiple expansion to Layer 3 fair value** ~$160-190 over 18-24 months
- Expected return: +15-35% over 18-24 months

## Bear case (P=20%)

- **AMI acquisition stalls** (regulatory block, integration cost overrun) — removes platform thesis
- **Server revenue growth decelerates** below 20% YoY signaling AI socket plateau
- **Microchip or Efinix gains material share** at hyperscaler accounts
- **Industrial/auto digestion** continues longer than modeled
- Multiple compresses to Layer 1 floor ~$80
- Expected loss: -30-45% over 12-18 months

## Base case (P=40%)

- Modest server revenue growth (~30-40% YoY)
- AMI closes Q3 2026 and integrates without surprise
- Multiple stays at Layer 2 chokepoint comp (~25x) around $130-145
- Expected return: -5 to +5% over 12 months

**Expected value across cases:** ~$140 ± 15% near term, with positive skew toward $160-190 range over 18-24 months if AMI executes.

---

## Falsifiers (mandatory)

1. **AMI acquisition fails to close** (regulatory block, material adverse change) — removes platform thesis + TAM-doubling story. Tier should drop to Watchlist.
2. **Non-GAAP product gross margin falls below 66% for 2+ consecutive quarters** — signals pricing pressure or mix deterioration breaking the chokepoint pricing-power assumption.
3. **Server revenue growth decelerates below 20% YoY in any quarter through Q4 2026** — signals AI server penetration is plateauing earlier than expected.
4. **Microchip or Efinix wins a major hyperscaler BMC socket** (named customer disclosure) — signals switching-cost moat is weakening faster than 12-18mo assumption suggests.
5. **TSMC Taiwan supply disruption materially affecting Nexus wafer availability** — geopolitical tail risk firing.

---

## Anti-fragility — M/N across 5 active scenarios

Reference `research/sector/scenarios.md`. Score: **4/5** (revised UP from agent's initial 3.5/5 after chokepoint-breadth analysis).

| Scenario | LSCC outcome | Reasoning |
|---|---|---|
| **S1** — NVDA dominant / agentic scales | **WIN** | More AI servers = more BMC + platform control FPGAs |
| **S2** — Custom silicon fragments | **WIN** | Custom ASIC servers still need platform management FPGAs — BMC socket is hardware-agnostic |
| **S3** — Power becomes binding | **WIN (asymmetric positive)** | Low-power FPGAs benefit from power-efficiency focus; thermal management socket grows |
| **S4** — AI spend digestion | **MIXED (less-bad than AI-pure-play names)** | Non-AI server build + industrial/auto + telecom demand continues independent of AI capex sentiment. Demand source breadth is the anti-fragility |
| **S5** — Regulatory shock / geopolitical | **MIXED** | Sovereign-AI domestic server programs net positive; TSMC fab dependency net negative |

**The breadth-of-demand argument** is what pushes anti-fragility to 4/5: unlike ALAB or HYNIX (AI-server-specific demand), LSCC's revenue stream spans modern compute infrastructure broadly. AI is amplification not creation.

---

## Recognition Stage

**Stage 2-3 transition.** The first re-rating (inventory recovery + AI-server narrative) is priced. The second re-rating (AMI firmware platform → software-adjacent multiple) is partially priced but not complete. Stage 4 would require AMI integration delivering proven recurring-revenue characteristics + multi-quarter margin expansion above 70% non-GAAP GM.

---

## Position fit vs existing portfolio

| Comparison | ALAB (held ~9.6%) | LSCC |
|---|---|---|
| Socket | Data path (PCIe/CXL retimers, switch ASIC) | Control path (BMC, security, power/thermal) |
| Architecture | ASIC (fixed-function) | FPGA (programmable) |
| Moat | Protocol expertise + first-to-PCIe-6 | Customization lock-in + AMI firmware adds 2nd layer |
| Demand source | AI-server-specific data path | All modern compute (AI is amplifier) |
| Anti-fragility | ~3/5 (AI-server-pure-play) | 4/5 (broader demand base) |
| Forward EV/Sales | ~35x | ~26-27x |

**Differentiated, not overlapping** — ALAB and LSCC occupy different sockets with different demand sources. Both AI-tailwind beneficiaries. LSCC offers partial diversification of the connectivity/control-plane exposure if ALAB concentration is a concern.

---

## Entry recommendation

- **Active candidate**, 1.5-3% initial sizing if entered
- DO NOT chase the post-Q1 gap up; better entry would be on AMI-integration noise OR general AI-software pullback that drags semis
- If AMI closes cleanly Q3 2026 + Q3 guidance maintained → thesis strengthens; sizing can grow to 3-4%
- If AMI deal falls apart → drop to Watchlist, do not enter
- Stage 2-3 transition means the first re-rating is mostly captured; asymmetric upside is concentrated in Layer 3 AMI optionality

---

## Cross-references

- `research/companies/ALAB/thesis.md` — held; different socket; complementary, not substitute
- `research/companies/RMBS/thesis.md` — Watchlist; memory IP licensor; adjacent connectivity/IP cohort
- `research/companies/MRVL/thesis.md` — Active candidate; custom Si + connectivity
- `research/meta/methodology.md` — principle #28 (supply-chain-reality test), #29 (segmented triangulation), **#30 (comp-set verification — this thesis is the codification trigger)**
- `research/meta/biases-watchlist.md` — B28 (cyclical-vs-structural), B31 (cross-segment aggregation), **B32 (comp-set anchoring at valuation step — this thesis is the catch trigger)**
- `research/sector/scenarios.md` — 5-scenario anti-fragility framework
- `research/sector/ai-stack-map.md` — LSCC currently listed in FPGA category with "smaller AI share" tag; update needed to add Layer 5/6 server-control-plane FPGA sub-layer (deferred)

## Status notes

- 2026-05-27: thesis stub created from fresh-verification agent + chokepoint analysis + valuation self-audit
- 2026-05-27: Valuation framing explicitly uses 3-layer build-up per principle #30 (not pre-training FPGA cyclical anchor)
- 2026-05-27: Anti-fragility revised UP from 3.5/5 to 4/5 after chokepoint-breadth re-evaluation (demand source spans modern compute, not just AI)
- **Position not yet entered.** Decision deferred pending: (a) MOD + SNOW GRADE outcomes today (calibration check), (b) potential pullback to $115-125 range for better entry asymmetry, (c) AMI deal close confirmation Q3 2026
- Pending hypothesis verification: user's narrative-driven-investment-era hypothesis (agent launched 2026-05-27) may revise the valuation framing further if confirmed
