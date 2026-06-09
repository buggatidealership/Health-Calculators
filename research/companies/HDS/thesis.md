# HDS (Harmonic Drive Systems Inc, 6324.T) — Thesis

**Last updated:** 2026-06-09 (6-subagent per-criterion verification + 2 self-confirmations; humanoid bypass-route FAIL surfaced; HELD-status reconciliation flag)
**Tier:** HELD (on N26, ~€10K entry 2026-05-25; ~5-6% of N26 sleeve) — NOT in canonical Degiro holdings.md (Degiro-only file); reconciliation needed
**Position target:** 3-5% of consolidated portfolio (currently above-target if N26 position intact)
**Anti-fragility:** 3/5 scenarios — REVISED DOWN from 4/5 (industrial-robot + semi-cap-equip moat durable; humanoid-vs-China now BASE case loss not tail; wins Western/non-Chinese humanoid + industrial + semi; loses China-dominated humanoid)

---

## ⚠️ 2026-06-09 — MAJOR VERIFICATION + DUAL SELF-CORRECTION (Critical Rule #11)

**Trigger:** User directed 6-subagent per-criterion verification (one subagent per structural-winner criterion). All 6 returned; I self-confirmed the 2 thesis-breaking claims via direct English + Japanese search.

### Self-correction #1 — PORTFOLIO-TRACKING ERROR (harness amnesia)

On 2026-06-08 I scored Harmonic Drive in `meta/structural-winners-cohort.md` as **"NOT held / NOT watchlisted — TOP NEW"** and upgraded it to Tier 2 (20/22), then on 2026-06-09 added it to the robotics watchlist (commit 6dbd4ca). **Both were wrong: HDS is a HELD position** (€10K entry 2026-05-25 per this file lines 59-74 + `portfolio/changes.md`; "~5% on N26" per line 129). It does not appear in `portfolio/holdings.md` because that canonical file is **Degiro-only** (€187,619.80 Degiro balance); HDS is held on **N26**. The June 5-6 rotation trimmed DEGIRO names — whether it touched the N26 HDS position is **UNCONFIRMED**. RECONCILIATION REQUIRED: user to confirm whether HDS is still held on N26.
Root cause: I did not read this existing HDS thesis before classifying it as "new" yesterday — same harness-amnesia failure mode flagged in `signals/cross-source-log/2026-05-30-overlooked-candidates-deep-dive.md` (LSCC).

### Self-correction #2 — HUMANOID BYPASS-ROUTE: I claimed "PASSES", verification says CONTESTED/FAILS

On 2026-06-09 I called HDS "the single closest Sandisk/Micron of robotics... PASSES bypass-route test, 9/9 criteria." **The flagship humanoid socket is already lost to Chinese competition.** This is the same bypass-route mis-assessment I made on Nidec 24h earlier — a recurring failure mode (asserting bypass-route-PASS for robotics names from memory without verifying Chinese competitive status). See meta-pattern note in `structural-winners-cohort.md`.

### Verified findings (6 subagents + 2 self-confirmations)

**1. Market share — "60% global" is segment-dependent and eroding.**
- Goldman Sachs 2026 (via [Nikkei/Japanese press](https://www.investing.com/news/stock-market-news/this-japanese-stock-is-surging-on-positive-outlook-for-humanoid-robot-orders-4367329)): HDS ~70% of HIGH-PERFORMANCE robot reducer market TODAY, but **→ "50/50" with Chinese by 2030+** as humanoid scales. (T2)
- China market: HDS ~35.5% vs Leaderdrive (绿的谐波) rising ~35%+; Leaderdrive >60% China / >35% global per [BigGo/36Kr](https://eu.36kr.com/en/p/3780414717129481). (T2)
- HDS retains durable moat in INDUSTRIAL robot wrist axes (Fanuc/ABB locked) + ultra-precision (<1 arcsec). My flat "60% global" was overstated for the blended/humanoid figure. (T2)

**2. Humanoid design wins — Tesla Optimus uses CHINESE, not HDS (thesis-breaking).** Per [36Kr](https://eu.36kr.com/en/p/3780414717129481) + [optimusk.blog T3](https://optimusk.blog/blog/tesla-optimus-suppliers/) + [Bloomberg T2 — Leaderdrive humanoid profit](https://www.bloomberg.com/news/articles/2026-04-23/leaderdrive-sees-profit-climb-on-boom-in-chinese-humanoid-robots):
| Humanoid OEM | Reducer source | HDS? |
|---|---|---|
| **Tesla Optimus** | Suzhou Green Harmonic (Chinese ~25%→targeting 60% by 2026); Tesla in-house 2026 target | **NO** |
| Figure 02/03 | Custom in-house | NO |
| Boston Dynamics Atlas | Hyundai Mobis custom + cycloidal | NO |
| Apptronik Apollo | Custom; explicitly avoids harmonic (cost) | NO |
| 1X NEO | Tendon-drive | NO |
| Unitree | QDD in-house (~80% cheaper) | NO |
| Fourier GR | Proprietary FSA | NO |
| XPeng IRON | Harmonic in HANDS only | partial |
- HDS has **NO confirmed Western humanoid flagship design win.** Its ¥2.5B FY26 humanoid orders are non-exclusive; OEMs opaque. China 70% of Optimus Gen-3 components.

**3. Bypass-route test — PARTIAL/FAILS for humanoid.** Direct-drive FAILS as bypass (cost/size). Cycloidal/RV PARTIAL (legs). **Chinese strain-wave QUALIFIED at Tesla at scale (48 reducers/robot, Leaderdrive +210% YoY orders) at 40-60% below HDS price, backlash parity at standard tier.** HDS moat durable only at ultra-precision (<1 arcsec). The Sandisk/Micron parallel BREAKS: memory has no Chinese parity at HBM tier; harmonic reducers already have Chinese parity at standard tier + Chinese winning the flagship OEM.

**4. Financials (VERIFIED T1/T2) — FY26 badly missed its own mid-term plan.**
- FY2026 (ended Mar 2026, reported May 13): revenue ¥59,557M (+7.0%), OP ¥2,567M, NP ¥1,608M (**-53.7% YoY**), OPM 4.3%. (T1)
- vs the FY26 mid-term-plan TARGET of ¥90B revenue / 16.7% OPM — **massive miss** (¥59.5B actual vs ¥90B target). (T1/T2)
- FY2027 guidance: revenue ¥68B (+14.2%), OP ¥6.2B (+141.5%), NP ¥4.5B (+179.7%) — big rebound off depressed base; dividend ¥20→¥42.1. Equity ratio 72.2%, OCF ¥6.4B (strong balance sheet). (T1)

**5. Humanoid TAM math (VERIFIED capacity-constraint, contested-share).** ~14-30 harmonic reducers per humanoid; humanoid reducer TAM 42-46% CAGR ($276M 2024 → ~$3B 2031). If humanoid hits 500k-1M units/yr 2027-28, demand 7-20M reducers vs ~1.2-1.5M industry capacity = SEVERE constraint — but Chinese (Green Harmonic 500k/yr 2026) taking the flagship sockets. Constraint real; HDS share of it contested.

**6. Valuation (VERIFIED) — rich, already re-rated.** Current ~¥7,160 (June 8); ATH ¥9,510 (Dec 2020), **-24.7% below ATH**; +129% TTM off ¥2,316 2024 low; +44% YTD. Forward P/E ~139x, P/S ~11x, P/B ~8x, EV/EBITDA ~66x vs Nabtesco ~28x P/E. NOT a depressed entry — mid-rebound, premium multiple, parabolic-adjacent. L24 read: it has NOT broken the 2020 ATH; it's recovered most of the way on humanoid narrative + margin-reset rebound.

### Honest revised verdict

HDS is **a high-quality industrial-automation precision-reducer incumbent** — durable moat in industrial-robot wrist axes (Fanuc/ABB) + semiconductor cap-equipment (~35-40% of harmonic usage; direct AI-capex beneficiary via CoWoS/BESI/ASMPT/DISCO) + ultra-precision niche. It is **NOT the "Sandisk/Micron of robotics"** — the humanoid upside that drove that label is CONTESTED, with the flagship socket (Tesla) already on Chinese suppliers 40-60% cheaper. The semi-cap-equipment + industrial + surgical-robotics narratives are the durable core; humanoid is contested optionality, not a bottleneck monopoly.

**Position implication:** HOLD — no add — RECONCILE held status first (N26 position post-June-rotation unconfirmed). At 139x forward P/E with a contested humanoid thesis + a badly-missed FY26 mid-term plan, this is NOT an add candidate. If the N26 position is intact, hold on the durable industrial/semi-cap-equip core; do NOT size up on the humanoid narrative. If exited in the rotation, do NOT re-enter at current valuation on the humanoid story. Remove from robotics watchlist (it is a held/owned name, not a candidate). Anti-fragility revised 4/5 → 3/5.

---

## (PRIOR STUB BELOW — superseded by 2026-06-09 verification above; retained for audit trail)

**Last updated:** 2026-05-24
**Tier:** Watchlist (Phase 3 surfaced; pre-position-sizing)
**Position target:** TBD — sizing-matrix tomorrow
**Anti-fragility:** 4/5 scenarios (wins on Western humanoid + non-Chinese industrial + semi cap-equip; loses on Chinese-dominated scenarios)

## TL;DR
Choke-point picks-and-shovels supplier for precision robotics — controls ~60% of global harmonic drive market per industry sources. Multi-narrative: robotics + semi cap-equip (~35-40% of harmonic-drive usage). Phase 3 verification refined down conviction slightly — Chinese localized supply takes domestic Chinese market (largest by units), and Tesla Optimus 90%+ 2025 miss delays Western humanoid demand pull-through 2-3 years.

## Bull case
- 60% global harmonic drive market share verified (Honpine + industry market research)
- Structural constraint: <12 facilities globally for precision gearbox; 6+ month lead times
- >80% of critical actuator components from 3 countries (Japan dominant) per Yrules supply-chain analysis
- Multi-narrative: robotics + semi cap-equip + aerospace + medical equipment + new-energy equipment per market research
- Humanoid reducer market 46.3% CAGR ($52M 2025 → $580M 2032) — multiple-re-rate setup as humanoid narrative matures
- Expected return: TBD until sizing matrix

## Bear case
- Chinese localization (Leaderdrive, others) takes domestic Chinese market — largest robotics market by units (300K industrial installations 2024)
- Tesla Optimus missed 2025 by >90% (delivered hundreds vs 5,000 planned) — Western humanoid demand pull-through delayed
- Schaeffler entering humanoid actuators CES 2026 — new entrant pressure on premium pricing
- Section 232 / US-China tariff bifurcation could constrain Japan-China cross-flows (uncertain direction)
- Semi market weakness drags 35-40% of revenue (Yaskawa data point shows semi-equipment recovery weak)

## Base case
- Multiple-re-rate from "industrial robot reducer maker" to "humanoid actuator critical-path supplier" plays out 18-36mo (not 6-12mo as Phase 1 might have implied)
- Earnings growth muted near-term as humanoid scale-up delayed; pricing-power story strong on Western/non-Chinese demand

## Falsifiers
1. **Chinese localized harmonic drive suppliers (Leaderdrive et al) reach Western OEM qualification** within 18 months → bypass-route weakens premium pricing thesis
2. **HDS announces 3x+ capacity expansion** like Nabtesco's 2x announcement → demand-supply gap closes, pricing power compresses
3. **Tesla Optimus or Figure achieves 100K+ units/year deployment** within 12 months → demand-pull stronger than verified expectations, thesis intact but timeline accelerates (positive falsifier)

## Exposure to causal chains
- Humanoid actuator bottleneck (per `wiki/robotics-primer.md` Phase 3+) — beneficiary, 2nd order
- Semi cap-equip demand (~35-40% of usage) — beneficiary, 1st order direct
- Multi-narrative anti-fragility (per principle #5 + 2026-05-24 multi-narrative refinement candidate) — winner

## Cross-reference
- `research/wiki/robotics-primer.md` Phase 3+ holistic ranking #3
- Multi-narrative concept introduced 2026-05-24 user framing
- Schaeffler competitive entry tracked in primer R4

## Open questions / Phase 4 verification needed
- Exact 2024/2025 revenue + segment-split (need company IR direct fetch)
- Margin trend by segment (humanoid premium vs industrial commodity)
- Order book / lead-time evolution (capacity discipline signal)
- Chinese customer concentration (exposure to Section 232 / tariff cross-flows)
- Direct customer list for humanoid orders (Tesla? Figure? Apptronik?)

## Sources (Phase 3 orthogonal per principle #23)
- [Harmonic Drive Precision Strain Wave Reducer Gearboxes Market — Strategic Revenue Insights](https://www.strategicrevenueinsights.com/industry/harmonic-drive-precision-strain-wave-reducer-gearboxes-market)
- [Harmonic Drive Precision Gear Reducers Market — Intel Market Research](https://www.intelmarketresearch.com/harmonic-drive-precision-gear-reducers-market-11928)
- [Top 7 Harmonic Drive Reducer Manufacturers — Honpine](https://www.honpine.com/news/Harmonic-Drive-Reducers-News/Top-7-Harmonic-Drive-Reducer-Manufacturers.html)
- [Humanoid Robotics Supply Chain Analysis — yrules](https://news.yrules.com/en/archives/4984)
- [Humanoid Robot Rotary Actuator Market Outlook — Intel Market Research](https://www.intelmarketresearch.com/humanoid-robot-rotary-actuator-market-7922)

## Update 2026-05-25 — PLANNED ENTRY (pending US market open 2026-05-26)

User announced planned new position of **€10,000** at next US market open per `portfolio/changes.md` 2026-05-25 PLANNED log. Will execute via ADR (HSCMY) or directly accessing 6324.T.

Sizing context:
- €10K entry on a portfolio worth ~€110,396 (current) + €15K deployment from cash = ~€125,396 post-trade
- HDS would become ~roughly 8% of post-trade portfolio (computed)
- This is MATERIALLY ABOVE the 3-5% rough range I'd suggested in `wiki/robotics-primer.md` Phase 3+ candidate ranking
- User judgment is for higher conviction on the actuator choke-point thesis

Framework alignment:
- Aligned with revised recommendation from 2026-05-24 salience-bias catch (HDS first-pick over Nabtesco after rigorous head-to-head: 60% global harmonic drive share + semi cap-equip dual-narrative + pricing-power preservation via no announced capacity expansion)
- Phase 3+ ranking #3 in robotics primer
- User chose HDS-only execution (no Nabtesco parallel position) — clean alignment with revised recommendation

Tier status: upgrades from "Watchlist" to **HELD (pending execution)**. Post-fill: update tier to HELD, update holdings.md, log fill in changes.md.

## Update 2026-05-26 — CORRECTED Tesla framing + missed semi cap-equipment AI narrative (per B30 + principle #28 extension)

**Prior framing miss (per B30 codified 2026-05-26):** I framed "Tesla DUAL-SOURCED with Green Harmonic" as eroding HDS positional strength ("1-2 years eroding at Tesla specifically" sub-narrative downgrade). This was customer-share-shift anchoring — treating ONE customer's decision as if it were market-wide share erosion.

**Corrected framing per principle #28 customer-share-shift discipline:**

1. **Tesla as % of HDS revenue:** Tesla Optimus production at <1,000 units pilot scale Q1 2026 — material contribution to HDS revenue likely <few % at current scale. Tesla is one customer of many, not a dominant share.

2. **Broader market trajectory:**
   - Humanoid robotics: $52M 2025 → $580M 2032 at 46.3% CAGR (per `research/wiki/robotics-primer.md` Phase 2 verified data)
   - Industrial robots: Japan Robot Association Q1 2025 orders +32.2% YoY (per Agent 3 research 2026-05-26)
   - Surgical robotics: ISRG da Vinci 5 +58% YoY placements (232 of 431 Q1 2026 placements per ISRG Q1 CY26 8-K)
   - All three segments growing double-digit toward binding-constraint scale

3. **Tangential AI narratives BEYOND humanoid (the critical miss):**
   - **SEMI CAP-EQUIPMENT (~35-40% of harmonic-drive usage globally per this thesis file line 9) — DIRECT AI exposure via:**
     - TSMC CoWoS-L expansion (130-150K wpm exit-2026 → 170K wpm exit-2027 per Agent 1 research) — more wafer-handling robotics tools
     - BESI hybrid bonding ramp (customer base 18→20 single quarter; record Q1 CY26 orders €269.7M) — more BESI tools = more strain-wave gear content
     - ASMPT TCB for HBM4 16-Hi qualification (record bookings $727M Q1 CY26)
     - DISCO 6 consecutive record years for wafer dicing
     - ASML EUV systems + AMAT/LRCX deposition/etch + Rigaku metrology = strain-wave gear content per tool
   - **Surgical robotics (~30%+ HDS share per IntelMarketResearch)** — durable 5+ year duration; ISRG da Vinci 5 ramp validates
   - **Broader humanoid OEM optionality:**
     - Agility Digit at GXO (industry-first commercial humanoid RaaS, 100K totes processed) — actuator supplier NOT publicly confirmed
     - Figure 02 BMW Spartanburg (90K+ components, 30K BMW X3 assist) — supplier NOT confirmed
     - Apptronik Apollo (Mercedes + GXO + Jabil pilots) — supplier NOT confirmed
     - HDS has OPTION VALUE across multiple Western humanoid OEMs even if Tesla shifts toward Chinese supply

4. **Customer-shift vs market-wide-erosion distinction:**
   - Tesla dual-sourcing = CUSTOMER-SHIFT (one customer's decision)
   - Market-wide share erosion would require Chinese suppliers qualifying at multiple tier-1 Western OEMs simultaneously — NOT confirmed at Figure / Apptronik / Agility / ISRG / semi cap-equipment customers

5. **Verdict:** Tesla share-shift is an ADJUSTMENT to note, NOT a duration compression. HDS broader thesis runway 3-5 years (Long) intact. Tangential AI exposure via semi cap-equipment (35-40% of revenue) was UNDERWEIGHTED in prior framing — this is a direct AI-capex beneficiary narrative that I missed.

**Revised duration scoring:**
- Prior: "3-5 years Western non-Tesla; 1-2 years eroding at Tesla specifically"
- **CORRECTED: 3-5 years (Long) overall — diversified revenue base + semi cap-equipment AI exposure + surgical durable + multi-humanoid optionality.** Tesla-specific subnarrative is a watch item (note), not a duration anchor.

**FY27 guidance reinforces the corrected framing:**
Operating profit +141.5% YoY to ¥6,200M; management humanoid orders "could double or triple in FY27" (per BigGo Finance TDNET FY26 results). This guidance is broad-based recovery + humanoid pull-through, NOT Tesla-specific.

**Falsifier updates:**
- Falsifier #1 (Chinese suppliers reach Western OEM qualification): PARTIALLY firing at Tesla via Green Harmonic; NOT firing at Figure / Apptronik / Agility / ISRG (no public disclosure). Watch list: Figure or Apptronik disclosing Chinese strain-wave supplier qualification.
- NEW Falsifier added: Semi cap-equipment AI-capex slowdown (e.g., TSMC CoWoS expansion pause OR BESI hybrid bonding order decline) — would compress the 35-40% revenue exposure narrative.

**Meta-lesson per user 2026-05-26:** mistakes are fine if encoded. The corrective action is: (a) B30 codified (customer-share-shift anchoring); (b) principle #28 extended; (c) this thesis update with the corrected framing; (d) HDS sizing unchanged from 6.43% (the corrected framing reinforces, not erodes, the position).

## Cross-source synthesis — Portfolio matrix tagging (added 2026-05-29, per Critical Rule #10)

Per `research/meta/2026-05-29-portfolio-snapshot-agentic-ai-robotics-matrix.md`: HDS tagged **Agentic AI NO direct tie** (robotics precision actuators only; not in agentic compute supply chain) + **Robotics YES DIRECT PRIMARY** (precision actuators are critical for humanoid + cobot deployment; THE pure physical AI play in user portfolio). Recent cascade: NEUTRAL — physical AI thesis not directly affected by today's agentic-AI-specific signals; thesis remains intact per existing 6.43% position. Physical AI inevitability + early-innings positioning = structural patience required.

## Cross-source synthesis — Computex 2026 Day 1 (added 2026-06-02, per Critical Rule #10)

Per `signals/cross-source-log/2026-06-02-computex-2026-day1-synthesis.md`: NVDA Isaac GR00T Reference Humanoid announced at Computex — Unitree H2+ chassis, 31 degrees of freedom, Sharpa 5-finger hands, Jetson AGX Thor T5000 (Blackwell GPU + 128GB unified memory), late 2026 availability via Unitree (T1 NVDA Newsroom). 9 named humanoid robot partners: 1X Technologies, Agility Robotics, Apptronik, Boston Dynamics, Figure AI, Fourier Intelligence, Sanctuary AI, Unitree, XPENG Robotics. Foxconn Nurabot nursing robot co-developed with Taichung Veterans General Hospital + Kawasaki Heavy Industries; Foxconn Houston humanoid plant Q1 2026 target. NVDA's "useful AI has arrived" framing + agentic systems = embodied AI thesis underpinning HDS is on schedule. **Position implication:** HOLD at ~5% on N26 (Harmonic Drive Systems 6324.T); precision actuator demand thesis 1st-order validated by 9-partner humanoid ecosystem + Isaac GR00T reference platform.

## Cross-source synthesis — Morning Brief 2026-06-02 (added 2026-06-02, per Critical Rule #10)

Per `signals/cross-source-log/2026-06-02-morning-brief-ingest.md`: positive — NVDA Cosmos 3 omnimodal world models (T2 HuggingFace) reinforces physical AI / humanoid platform demand; Cosmos 3 + Isaac GR00T cascade validates humanoid actuator demand floor.
