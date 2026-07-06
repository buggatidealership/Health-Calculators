# Synaptics (SYNA) — Thesis (DEEP-DIG v1, most advanced)

**Last updated:** 2026-06-04 PM (initial full thesis build — first-principles framing + full MVCRC application)
**Tier:** Active candidate — pre-entry research
**Position target:** 2-4% if entered (~€8-16K from €414K total liquid base per `portfolio/constraints.md`)
**Anti-fragility:** 3.5/5 — wins in S1, S2 cleanly; partial S3; loses S4 (edge cycle weakness)
**Foundation:** First-principles edge inference + Coral NPU + LPDDR5X bypass route + L23 mid-cap asymmetry

## Section 0 — First-principles framing (user's specific request)

The thesis rests on 6 first-principles claims, each independently verifiable:

| # | First principle | Verification status | Implication for SYNA |
|---|---|---|---|
| 1 | **Compute moves to where data is** — sensor data is generated at edge devices (phones, wearables, AR, robots, cars); compute must follow | Cloudflare 57.5% bot share crossover (June 4 2026) is bottoms-up confirmation at server side; edge proliferation is downstream | SYNA sits at the edge sensor-compute interface — directly positioned |
| 2 | **Power-constrained compute requires specialized silicon (NPU)** — batteries are limited; NPUs are 10-100× more efficient than CPU/GPU for inference | NPU TOPS-per-watt trajectory in Snapdragon 8 Elite Gen 5 (100 TOPS) + Apple A19 Pro (16-core NE) + Qualcomm Hexagon | SYNA Torq NPU + Astra SL2610 is bet on specialization at the device-side |
| 3 | **Cost-of-token at scale forces local inference for non-latency-critical workloads** — cloud inference is per-token cost; local is fixed-cost amortized; agentic AI multiplies tokens 1000-5000× per task | Cloudflare data + Matthew Prince quote: "agent doing shopping hits thousands of sites vs human 5" | Local inference TAM expands; SYNA Astra is positioned at this layer |
| 4 | **Industry-standard NPU IP gets adopted at scale (bet on standards-setter)** — open-source NPU IP becomes industry default | Google Coral NPU integrated as open IP across multiple SoC vendors; SYNA is named integration partner | SYNA bets on Google as edge NPU standards-setter — leverage Google's ecosystem |
| 5 | **Customer concentration risk INVERTS with platform consolidation** — touch controllers = many concentrated handset OEMs; Astra SoC platform = many OEMs across robotics/wearables/medical | Astra SL2610 + SR-series semi-custom design spans consumer + industrial + medical (35+ robotics customers per Q3 call) | SYNA structurally shifts customer base from few-big to many-mid → lower concentration risk over 24-36mo |
| 6 | **Specialized AI silicon eats general-purpose silicon at the edge** — historical MCU evolution pattern | STM32-NPU MCUs, Apple ANE, Qualcomm Hexagon all gaining share; SYNA SR-series MCU is semi-custom AI-native | SYNA SR-series is bet on this specialization wave |

**Net first-principles read:** All 6 principles point structurally favorable for SYNA. The investable question is NOT "is the edge thesis right" (it's verifiably right at operating-condition level) — it's "is SYNA the asymmetric play vs LSCC, AMBA, QCOM, MTK, Apple internal."

## Section 1 — MVCRC application (Principle #37 candidate)

### Step 1: Macro / world vision
- AI epoch: inference compute scarcity verified at OPERATING level (Cloudflare 57.5% bot crossover); AGI capability frontier compounding (Gemma 4 12B edge-deployable; Apple A19 Pro Foundation Model 3B on-device)
- Current bottleneck: HBM4 + CoWoS-L (priced ~80%); next bottleneck LPDDR5X / mobile DRAM (6-18mo, my model P=70%)
- Scenarios: S1 NVDA dominant ~33%; S2 Custom Si fragments ~30%; S3 power binds ~25%; S4 Digestion ~6%; S5 Regulatory ~6%

### Step 2: Company position
- Layer in stack: **Edge / device-side compute** (consumer + industrial + medical) — specifically sensor-to-NPU interface
- Segment mix Q2 FY26: Enterprise & Auto 53% ($161M), Core IoT 31% ($93M), Mobile 16% ($48M) per [Investing.com T2](https://www.investing.com/news/company-news/synaptics-q2-2026-slides-core-iot-drives-13-revenue-growth-stock-dips-93CH-4489272)
- Core IoT trajectory: 19% of revenue FY24 → 32% projected FY26 per Investing.com Q3 commentary
- Total TTM revenue: $1.17B; operating margin currently -4.1% (turnaround in progress per Mark Vena T3)
- Market cap: $5.31B (May 29 2026) per [Stockanalysis.com T2](https://stockanalysis.com/stocks/syna/market-cap/)

### Step 3: Competitive landscape

| Competitor | Layer | SYNA win/loss vs |
|---|---|---|
| **LSCC (Lattice)** | Edge FPGA / glue logic / orchestration | LSCC broader vertical reach; SYNA more focused NPU pure-play; differentiated layers (SYNA wins on integrated NPU, LSCC wins on programmability) |
| **AMBA (Ambarella)** | Vision SoC (encoder-based) | SYNA at structural advantage IF encoder-free trend (Gemma 4 12B architecture) extends; AMBA at risk from encoder-free displacement |
| **QCOM Hexagon** | Mobile NPU pure-play | QCOM dominates phones; SYNA targets sub-phone (wearables, IoT, industrial) — adjacent not direct |
| **Apple ANE** | Apple Silicon (vertical-integrated) | Walled garden; SYNA targets non-Apple ecosystem (Android + IoT + medical) |
| **MediaTek Kompanio** | Edge SoC + laptop (Kompanio Ultra 910 = 50 TOPS) | MTK at higher tier; SYNA at sub-MTK price point + Coral integration moat |
| **STM (STM32-NPU)** | MCU + edge NPU | STM has industrial/auto incumbency; SYNA targets newer wearable/robotics tier |

**Key competitive differentiator:** SYNA + Google Coral NPU integration. Coral NPU is Google's open-source standard NPU IP being adopted across multiple SoC vendors. SYNA's Astra SL2610 powers Coral Dev Board (the reference platform). This positions SYNA as a primary distribution channel for Google's edge NPU IP.

### Step 4: Event delta since Q3 print (May 8 2026)

Verified material events since May 8 that ARE NOT YET in analyst consensus estimates:

| Event | Date | SYNA-relevance | Source |
|---|---|---|---|
| Cloudflare agentic crossover 57.5% bot share | June 4 today | Bottoms-up empirical confirmation of edge AI TAM | T1 CloudFlare Radar dashboard |
| Gemma 4 12B released (Coral deployment target) | June 3 | DIRECTLY supports SYNA Coral integration thesis | Google T1 |
| Apple-Blackwell + Google Cloud for Siri | June 4 | Blackwell adoption drives NVDA Grace ARM royalty (knock-on); reinforces inference demand frontier | Multiple T2 |
| Anthropic 5GW from 2027 + Google TPU multi-gen | June 3 (AVGO Q2 print) | Inference compute scarcity validated | AVGO 8-K T1 |
| Alphabet $84.75B equity raise + $190B 2026 capex | June 1-2 | Hyperscaler CapEx accelerating not decelerating | Alphabet 8-K T1 |
| LPDDR5X bottleneck migration (segmented triangulation N=4) | June 4 today | Edge AI BYPASS ROUTE thesis validated; SYNA at the layer | Tom's Hardware T2 + IntuitionLabs + Edge AI Vision + IDC |
| Snapdragon 8 Elite Gen 5 launched Nov 2025 (100 TOPS) | Pre-Q3 | Mobile AI inflection already happening; SYNA Coral story confirmed | Android Central T2 |
| Trump narrower AI EO (30-day WH review for "powerful" open-weight US models) | June 4 today | Marginal benefit Chinese open-weight; mild boost to US edge NPU as bypass route | TechCrunch T2 |
| Iran-deal binary in-flight (60-day MOU pending Trump approval) | ongoing | Macro confounder for Aug 2026 print reaction | Axios + Al Jazeera T2 |

**Critical insight:** Analyst consensus for SYNA Q4 FY26 + FY27 was anchored at Q3 print (May 8). These 9 post-Q3 events are NOT YET in consensus. Per L1 + L22, this is exactly where the edge lives.

### Step 5: AI trajectory mapping
- Where the puck is going: edge AI inflection 2026-2028 (Gemma 4 12B + Snapdragon 8 Elite Gen 5 + Apple A19 Pro + NVDA N1X all confirmed inflection-already-happened)
- LPDDR5X bottleneck migration to mobile DRAM means hyperscaler-vs-consumer memory contention; edge inference is the bypass route
- 2027+: Vera CPU ramps; agentic web traffic compounds; on-device AI assistant proliferates

### Step 6: Beneficiary classification
- **PRIMARY** for: edge AI inflection (Coral + Astra), LPDDR5X bypass route (local inference reduces cloud LPDDR pull), AI-MCU specialization wave (SR-series)
- **SECONDARY** for: agentic web traffic ecosystem (every agent eventually has on-device counterpart), Gemma 4 12B deployment (Coral is named deployment target)
- **NEUTRAL** for: HBM thesis (not in HBM supply chain), CoWoS-L (not packaging-exposed)
- **LOSS** for: pure-cloud-inference scenario (low P given Cloudflare data)

### Step 7: Obviousness check

**Is consensus already there?** Per analyst data:
- 13 analysts, avg PT $126.45, median $123, range $95-180
- Current stock ~$123 (median PT range) per [Tickernerd T2](https://tickernerd.com/stock/syna-forecast/)
- Market cap $5.31B → +83.79% YoY, +32.96% past 30 days

**Stage classification (per Principle #31):** Stage 2-3 — narrative emerging, less crowded than mega-caps; analyst PT range $95-180 wide ($85% spread) indicates UNCERTAIN consensus → asymmetric room
- **NOT a crowded trade like AVGO ($2T mcap, Stage 4)** — consensus still uncertain
- **Pre-print rally caveat:** +32.96% past 30 days is meaningful — L14-v2 / B42 risk applies; expectations may have moved closer to "good print priced in"

### Step 8: Expectations overlay (LAST input per MVCRC + L1)

| Layer | Number | Source |
|---|---|---|
| SYNA Q3 FY26 actual | $294.2M revenue / $1.09 EPS | SYNA 8-K T1 |
| Q4 FY26 guidance midpoint | ~$304M / ~$1.16 EPS | per Q3 call |
| Analyst consensus Q4 FY26 | ~$1.01 EPS (consensus beat by $0.08) | derived from Q3 beat data per Investing.com |
| FY27 consensus implied | ~$1.25B revenue (my model derived from trajectory) | not in T1 sources |
| 12-month avg PT | $126.45 | Tickernerd T2 |
| PT range | $95-180 ($85% spread) | Public.com T2 |
| Implied FY27 EPS embedded | ~$4.80-5.20 (my model — derived from PT / forward multiple ~25x) | derived |

**Beat-analyst-consensus test (L22):** Are post-Q3 accelerators in consensus?
- Coral Dev Board ramp: NO (announced post-Q3)
- Gemma 4 12B deployment to Coral: NO (June 3 release)
- Anthropic 5GW + agentic crossover: NO
- LPDDR5X bottleneck driving edge inference TAM: NO

**Consensus gap = HIGH** — analysts haven't updated. Post-Q3 accelerators add meaningful upside above $1.16 EPS Q4 guide AND above FY27 implied $1.25B.

### Step 9: Probabilistic conclusion (output)

| Hypothesis | Q4 FY26 print outcome | Stock reaction (my model) | P (my model) |
|---|---|---|---|
| **H1 Solid beat + AI-revenue % disclosure** | $310-315M rev, $1.20-1.25 EPS, explicit FY27 AI revenue target | +15 to +25% (L23 mid-cap asymmetry) | 35% |
| **H2 Big beat + multi-year framing** | $315-325M rev, $1.25-1.35 EPS, FY27 trajectory disclosed | +20 to +35% (L19 inversion at mid-cap) | 25% |
| **H3 In-line print + cautious guide** | $300-305M / $1.15-1.18 / cautious FY27 | -5 to +5% | 25% |
| **H4 Miss** | $290-298M / $1.10-1.13 / weak FY27 | -10 to -20% | 10% |
| **H5 Massive surprise (named customer + FY27 % target + margin path)** | All three qualitative disclosures | +25 to +40% | 5% |

**Weighted expected T+24h reaction (my model):**
(35% × +20%) + (25% × +27.5%) + (25% × 0%) + (10% × -15%) + (5% × +32.5%) = +7.0% + 6.875% + 0% - 1.5% + 1.625% = **+13.875% expected return (my model)**

**Adjusted for macro regime (L20 — risk-off 50% discount if Aug 2026 still risk-off):** ~+7% expected. If Iran deal signs by then = ~+13.875%.

**Adjusted for pre-print rally exhaustion (B42):** -2 to -5pp if rally continues; current +32.96% over 30d but Q4 print is ~2 months away, so 5-day window may not be inflated by August

## Section 2 — Bottoms-up unit economics (per user's request)

### Revenue stack model (my model — verifiable post Q4 print)

```
SYNA Q4 FY26 bottoms-up build (my model):
================================================
Core IoT segment (~32% of revenue):
  Astra SL2610 SoC ASP × volume + Coral Dev Board ramp + SR-series sampling
  Approx: $93M Q2 → $95-100M Q3 (per Q3 31% YoY commentary) → $100-110M Q4 (my model)

Enterprise & Auto segment (~50%):
  Touch controllers + sensor fusion + auto edge MCUs
  Approx: $161M Q2 (stable per market commentary) → $160-170M Q4 (my model)

Mobile segment (~16%):
  Touch + display drivers (mature)
  Approx: $48M Q2 (declining slightly) → $40-48M Q4 (my model)

Total Q4 FY26 (my model):
  Low end: $100 + $160 + $40 = $300M
  Mid: $105 + $165 + $44 = $314M
  High: $110 + $170 + $48 = $328M
  
  → guide midpoint $304M is at low-mid end of my model
```

### ASP tier framework (my model — estimates)

| Product tier | ASP per unit (my model) | Volume sensitivity | Margin (my model) |
|---|---|---|---|
| Touch controllers (legacy) | $1-3 | 100s of millions handsets/yr | 25-35% |
| Audio codec / display drivers | $3-8 | 10s of millions/yr | 35-45% |
| **Astra SL2610 NPU SoC (Coral Dev Board)** | **$15-30 (my model)** | 100K-1M/yr (ramping) | **45-55% (my model)** |
| **SR-series AI MCU (semi-custom)** | $5-15 (my model) | H1 2027 wearable platform | 40-50% (my model) |
| Coral NPU bridge silicon | $30-80 (my model) | low-volume halo | 50-60% (my model) |

**Critical insight on operating leverage:** SYNA currently runs at -4.1% TTM operating margin. As mix shifts from 25-35% GM touch toward 45-55% GM Astra/Coral, the OPERATING MARGIN PIVOT is the asymmetric upside. At 50% Core IoT mix (vs 32% today), blended GM = ~45% (vs ~35% today), which on $1.3B FY27 revenue = ~$130M incremental operating profit = EPS doubles.

## Section 3 — Bear case (full mechanism)

| Bear case | Mechanism | P (my model) | Loss |
|---|---|---|---|
| **Astra ramp slips** | SL2610 yield/timing issues; Coral Dev Board ramp <expected | 15% | -10 to -20% |
| **SR-series wearable customer delays** | H1 2027 deployment slips to H2 2027+; named customer cancels | 10% | -15 to -25% |
| **Coral integration becomes non-exclusive** | Google opens Coral NPU IP to all SoC vendors; SYNA loses moat | 10% | -10 to -20% |
| **L21 sector regime persists** | Stage 2-3 mid-cap still gets de-rated despite BEAT | 15% | -5 to -15% |
| **L14-v2 pre-print rally exhaustion** | If SYNA rallies >10% in 5 days into Aug print, BEAT gets absorbed | 20% | -5 to -15% |
| **Operating margin turnaround stalls** | -4.1% TTM doesn't improve; cost structure remains heavy | 10% | -10 to -20% |

**Combined bear-case probability (not mutually exclusive):** ~30-35% (my model) for >10% stock loss

## Section 4 — Cross-stack cascade (Workflow #8 mandatory)

| Implication | Tickers affected | Direction | Order | Magnitude |
|---|---|---|---|---|
| Edge AI inflection demand pull | SYNA (0% held), LSCC (0%), AMBA (encoder risk) | beneficiary | 1st | high |
| Google Coral NPU adoption | SYNA, GOOG indirect | beneficiary | 1st | high (SYNA primary distribution channel) |
| LPDDR5X bypass route | SYNA + STM + ARM | beneficiary | 2nd | medium |
| SR-series wearable platform H1 2027 | SYNA, Hirano (display tape-casting), MURATA (MLCC) | beneficiary | 2nd | medium |
| **Apple ANE expansion (named LOSER)** | SYNA (Apple is competitor at ecosystem level — walled garden) | casualty | 1st | medium |
| **AMBA encoder-based vision SoC (named LOSER)** | AMBA — encoder-free Gemma 4 12B architecture displaces vision encoders | casualty | 2nd | medium |
| Touch controller commoditization | SYNA legacy mobile segment | casualty | 1st | low |

**Bypass-route LOSERS named:** Apple internal (walled garden alternative), AMBA encoder-based vision SoCs.

## Section 5 — Position implication (Critical Rule #11)

**Position implication: ENTER 2-3% on trigger only — NO ENTRY at spot ~$123 without one of:**

1. **Q4 FY26 print (Aug 2026) confirmation**: BEAT + ≥2 qualitative call disclosures (FY27 AI % target, named wearable customer, Coral run-rate, margin path)
2. **Pullback to $100-110 (-10 to -18%)** — first-tranche entry €5-8K
3. **NVDA Q2 FY27 print (Aug 2026) confirms L21 regime broken + macro turns risk-on** — then SYNA enters as deployment pillar
4. **Iran deal signs + L21 regime breaks** — broad AI cohort pullback bottoms; SYNA enters

**Falsifiers (immediate thesis rejection):**

1. Q4 FY26 revenue <$295M (missing guide)
2. Coral Dev Board ramp commentary downgraded by mgmt
3. SR-series H1 2027 wearable customer cancels or delays >1 quarter
4. Google opens Coral NPU IP to ALL SoC vendors at zero cost (moat collapse)
5. Operating margin -4.1% doesn't improve in next 2 prints
6. AMBA / LSCC report disproportionately-strong design wins in Q4 prints (relative weakness)

## Section 6 — Lateral check (LLM-native priming)

- **What world-state makes SYNA NOT work?** Apple ANE expands into non-Apple ecosystem via M&A (unlikely); Google deprecates Coral NPU IP (deeply unlikely given current commitment); LPDDR5X bottleneck reverses (unlikely per N=4 triangulation)
- **What world-state makes SYNA explode?** Major wearable platform = Meta Ray-Ban / Garmin / Whoop H1 2027; FY27 AI revenue % target announcement on Aug call; Coral Dev Board run-rate >10K/quarter disclosed
- **Convex hull:** P(SYNA materially rerates over 12-18mo) ≈ 65% (my model); P(thesis fails) ≈ 30%; tail 5%
- **Falsification trigger windowing:** Q4 FY26 print (~Aug 2026) is 8-week binary

## Section 7 — Cross-references

- `predictions/lessons.md` L1, L14, L19, L20, L21, L22, **L23 (mid-cap asymmetry)** — applied to SYNA reaction band
- `predictions/lessons.md` **Principle #37 candidate (MVCRC)** — applied as worked example
- `signals/cross-source-log/2026-06-04-cloudflare-agentic-traffic-crossover-verified.md` — edge inference TAM bottoms-up
- `signals/cross-source-log/2026-06-04-next-bottleneck-lpddr5x-mobile-dram-forecast.md` — bypass-route thesis
- `signals/cross-source-log/2026-06-04-apple-blackwell-siri-rubin-lpddr-cut-verification.md` — broader signal cluster
- `wiki/edge-hardware-ai-primer.md` — foundation
- `sector/themes.md` T8 Edge Hardware AI — STRUCTURAL CONFIRMED
- `companies/ARM/thesis.md` — ARM IP underlying SYNA NPU
- `portfolio/constraints.md` — €200K cash + no-income + FIRE math + L21 regime context

## Section 8 — Anti-fragility (Conviction Format)

**Probabilistic layer:**
- P(bull case) = 50% (my model): +25 to +40% over 12-18mo
- Bull return: +30% median (my model)
- P(bear case) = 25% (my model): -15 to -30%
- Bear loss: -20% median (my model)
- P(base case) = 25% (my model): +5 to +15%

**Anti-fragility: 3.5/5** — wins in S1 (NVDA dominant), S2 (Custom Si fragments), partial S3 (power binds); loses S4 (digestion cycle); mixed S5 (regulatory tailwind from US AI EO open-weight gating).

**Tier:** Active candidate (target 2-4% if entered) — would qualify Core if entry triggered post-Q4-FY26-BEAT confirmation + macro tailwind.

## Section 9 — What I'm honest about NOT knowing yet

1. **SR-series wearable customer name** — major wearable platform H1 2027 deployment is disclosed but customer not named. Could be Meta (Ray-Ban smart glasses), Garmin, Whoop, Samsung, or other. The NAME at Q4 call disclosure is the L23 trigger variable.
2. **Coral Dev Board exact run-rate** — disclosed as "rapid adoption" but no specific number; Q4 call expected to provide quantification.
3. **Astra SL2610 production volume** — derived ASP $15-30 is my model estimate; actual ASP may be higher (more semi-custom premium) or lower (commodity slip).
4. **Operating margin pivot timing** — turnaround from -4.1% to positive is path-dependent on mix shift; could take 4-6 quarters.

These uncertainties are EXACTLY what makes the Q4 print informational. The asymmetric trade depends on the qualitative call commentary, not the headline beat magnitude.

---

**Position implication:** ENTER 2-3% on trigger only — NO ENTRY at spot $123 — wait for Q4 FY26 print confirmation OR -10-18% pullback. Falsifiers monitored quarterly. **Asymmetric long candidate at mid-cap stage 2-3 with primary-beneficiary exposure to verified inference-compute-scarcity macro thesis.**
