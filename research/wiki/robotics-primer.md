# Robotics + AI — Primer

**Codified:** 2026-05-24
**Status:** **HYPOTHESIS WORLDVIEW** (downgraded from Phase 1 seed 2026-05-24 same day) — built top-down from pre-training categories + bottom-up from pre-training company memory, WITHOUT orthogonal source verification of structural claims. Empirical numbers marked `[primary-source verification required]`; structural claims (who's dominant, FM lab roster, actuator counts, supply concentration) ALSO need orthogonal corroboration before this primer can be cited as primary evidence in thesis files. Per principle #23 / B25. Phase 2 = orthogonal-source ingest before promotion to "verified worldview."

**First stress-test result (2026-05-24 same day):** user probed HDS data-center cooling exposure → orthogonal web verification revealed a terminology collision (HDS the company ≠ "ultra-low harmonic drives" the VFD class used in DC cooling). HDS has NO cooling exposure; the cooling VFD class is made by ABB / Mitsubishi Electric / Yaskawa / Schneider / Danfoss. The discipline worked — pre-training conflated similar-named entities; orthogonal sources disambiguated. Updated below.

**Author stance:** I am building a worldview here, not summarizing consensus. The "extrapolations" section is where the actual edge sits (per principle #13). But until Phase 2 verification, treat all claims as hypotheses.

---

## TL;DR — five things I currently believe with high confidence

1. **Robotics is in its foundation-model moment**, structurally analogous to what LLMs did to software 2022-2024. Generalist policies (π0 from Physical Intelligence, RT-2 family from DeepMind, NVIDIA GR00T, Skild AI's models) are starting to collapse the task-specific-programming moat that industrial robotics incumbents (Fanuc, ABB, KUKA, Yaskawa) have monetized for 30+ years. The reshuffle is early but real.

2. **The binding constraint for humanoid is not compute — it's actuators.** High-precision actuators (harmonic drives, brushless servos with sufficient torque density) currently bottleneck humanoid at scale. Each humanoid needs ~28-40 actuators at high precision. Current global capacity (dominated by Harmonic Drive Systems 6324.T + Nidec 6594.T + a handful of others) cannot scale to millions of units near-term without major capex. This is the HBM of robotics.

3. **Industrial manufacturing is where deployment density is today; logistics/warehouse is fastest-growing; humanoid is the highest-narrative-with-lowest-deployment.** Most robotics units shipped today are still industrial arms in factory cells — the structured-environment 1% of the long-run TAM. The unstructured-environment 99% (home, hospital, outdoor, general human spaces) is what the foundation-model push is trying to unlock.

4. **Picks-and-shovels (actuators, edge compute, simulation, compound-semi power electronics) win across multiple scenarios; form-factor-specific bets are scenario-dependent.** Per principle #5 anti-fragility: a Harmonic Drive or Nidec wins whether Figure or 1X or Tesla Optimus dominates humanoid, and whether humanoid wins at all versus form-factor diversity. A single humanoid manufacturer bet requires humanoid winning AND that specific manufacturer winning.

5. **Software/foundation-model layer is where margin is moving, but it's NOT yet clear whether generalist models beat vertical-specialist data moats.** Generalist labs (Physical Intelligence, Skild) compete against vertical players with proprietary data (Tesla teleop fleet for Optimus, AMZN/Covariant for warehouse, ISRG for surgical). This is the most important open question — the resolution determines who captures value in the software layer.

---

## First principles — what's invariant across all robotics

**Robotics = intelligence + physical instantiation.** Every robot consists of:
- A controller (intelligence: perception + planning + action)
- A body (physical: actuators + sensors + structure + power)
- An interface to the world (environment: structured / unstructured)

The economic gate is **cost-per-unit-of-physical-work delivered**, not robot price. A $200K humanoid that does 8 hours of warehouse picking at 60% human productivity has a different value than a $40K industrial arm doing one task at 200% human productivity. The unit-economics frame is bottoms-up (per principle #1): hours worked × productivity × replacement cost of human labor minus capex amortization minus operating cost.

**Why robotics now (not 5 years ago, not 5 years from now):**
- Foundation-model capability crossed the threshold for visual-language-action (VLA) generalist policies (~2023-2024)
- Battery energy density crossed the threshold for ~6-8 hour humanoid operation (~2023-2024)
- Actuator cost-per-Nm declined enough for prototype humanoid economics (still NOT enough for million-unit deployment — this is the next bottleneck)
- Sim-to-real transfer became viable for training (NVIDIA Isaac, MuJoCo, Genesis, Cosmos)
- Labor cost crossover in specific regions (Japan, Korea aging workforce; selective US sectors)

**Why the cycle is structural, not cyclical:** robotics is the *physical instantiation layer of the industrialization-of-intelligence phase*. Same revolution as compute → AI; this is the next layer. Per user framing 2026-05-24: revolutions reshuffle which companies are the biggest ones on the other side.

---

## The 12-layer stack

| Layer | Sub-layers | Key suppliers (incumbent / challenger) | Status |
|---|---|---|---|
| 1. Foundation models for robotics (VLA, generalist policies) | π0, RT-2/X, GR00T, Skild policies, Octo, OpenVLA | Physical Intelligence (Pi), Skild AI, DeepMind, NVIDIA, OpenAI, Toyota Research, academic labs | Active reshuffle; pre-revenue; outcome unclear |
| 2. Simulation + synthetic data | Physics sim, photoreal rendering, sim-to-real | NVIDIA Isaac + Cosmos, MuJoCo (Google DM), Genesis (academic), Gazebo, Unity Robotics Hub | NVIDIA leading; significant data-velocity moat |
| 3. Teleop + data ops | Teleop hardware, fleet ops, gesture capture | Tesla (Optimus teleop), Figure, 1X, Apptronik, academic | Data moat layer; vertical-specific |
| 4. Edge compute substrate | SoC, accelerators, sensor fusion ASICs | NVIDIA Jetson, Ambarella, Qualcomm Robotics RB-series, Tesla FSD-derivative, custom ASICs | NVIDIA dominant; some custom efforts |
| 5. Sensors — vision / LIDAR / depth | RGB-D cameras, solid-state LIDAR, event cameras | Intel RealSense, Luminar, Innoviz, Hesai, Sony imaging, Omnivision | Maturing; commoditizing |
| 6. Sensors — tactile / force / IMU | Tactile arrays, F/T sensors, MEMS IMU | SynTouch, Contactile, ATI, OptoForce, STM MEMS (STM 6.6% portfolio), Bosch Sensortec | Tactile is the BOTTLENECK at humanoid manipulation density |
| 7. Actuators | Harmonic drives, brushless servos, hydraulics, soft actuators | Harmonic Drive Systems 6324.T (dominant), Nidec 6594.T, Maxon, Faulhaber, Mabuchi, Moog, Apptronik in-house | BINDING CONSTRAINT for humanoid at scale |
| 8. Power | Batteries, BMS, thermal mgmt, motor drives | CATL, BYD, LG ES, Samsung SDI, Panasonic, Tesla (in-house) | Battery: 8-hour humanoid OK; 24-hour gap |
| 9. Power electronics (motor drives) | GaN / SiC drives, inverters | Wolfspeed, STM (STM 6.6%), Infineon, ON Semi, AXT (4.8% — InP/GaAs substrates, indirect) | Compound-semi tailwind; overlaps AI sector map |
| 10. Mechanical platforms | Humanoid frames, AMR chassis, arm geometries | Custom per manufacturer; THK (linear motion), IGUS (cable management), Misumi (parts) | Generally not gating |
| 11. Control software + middleware | ROS 2, motion planning, perception stacks | Open Robotics, NVIDIA Isaac ROS, vendor-specific stacks (Fanuc, ABB) | Foundation-model layer is colonizing this from above |
| 12. System integration + deployment | Workcell design, brownfield retrofit, ops | Local SIs, specialized firms (ATS Automation, Rockwell, Honeywell), in-house teams | Where industrial-robotics margin actually sits today |

**Cross-cutting:** workforce + regulatory + sovereign-policy layers — see Blind Spots section below.

---

## Deployment by sector — current state

**Per user focus: where is most robotic deployment today, and at what growth pace.**

Framework first (the rate-limiting factors); empirical numbers explicitly marked.

| Sector | Deployment density today | Growth rate | Rate-limiting factor | Key public/private names |
|---|---|---|---|---|
| **Industrial manufacturing (automotive, electronics, metals)** | HIGHEST density; ~70%+ of installed base by units `[primary-source verification — IFR 2024/2025 World Robotics Report]` | Moderate (single-digit %) `[verification needed]` | Capex cycle of installed base; saturated in autos | Fanuc (FANUY), ABB, KUKA, Yaskawa (YASKY), Mitsubishi Electric, Universal Robots (Teradyne TER) |
| **Logistics + warehouse (AMR, sortation, picking)** | Lower density but FASTEST-growing major sector `[verification needed for unit growth rate]` | High (double-digit %) `[verification needed]` | Brownfield integration cost; per-pick economics; labor cost crossover | Symbotic (SYM), Amazon Robotics (private — acquired Kiva + Covariant), Locus Robotics, Geek+, AutoStore, Berkshire Grey (acquired by SoftBank) |
| **Surgical** | Concentrated in high-margin specialties (urology, gynecology, general surgery, increasingly orthopedics) | Moderate but constrained by regulatory cycle | FDA approval (Class II/III, 5-10 year cycles), surgeon training, hospital capex | Intuitive Surgical (ISRG — dominant), Stryker (Mako), Medtronic (Hugo), Johnson & Johnson (Ottava), Asensus (private) |
| **Defense / autonomous systems** | Significant in select programs (drones, EOD); growth opaque due to classification | High but uneven (program-dependent) | Procurement cycle, export control, ethics regulation | Anduril (private), Shield AI (private), Skydio, AeroVironment (AVAV), Kratos (KTOS), Northrop / Lockheed integrators |
| **Agricultural** | Under-mapped; meaningful in specific crops (dairy, greenhouse, harvesting) | High in specific segments (autonomous tractors, dairy milking) | Capital intensity for small farms, seasonal economics | Deere (DE), AGCO, Lely (private — dairy), Carbon Robotics, John Deere autonomy, Trimble |
| **Consumer (vacuum, lawn, pool, security)** | High by units shipped, low by capability | Moderate; growth flattening on vacuum | Differentiation; commodity competition | iRobot (IRBT — Amazon acquisition deal fell through), Ecovacs, Roborock, Husqvarna (lawn) |
| **Humanoid (general-purpose, emerging)** | LOWEST deployment density; highest narrative | Pre-revenue at scale; capacity-building phase | Actuator supply, foundation-model maturity, deployment economics unproven | Figure (private), 1X (private), Apptronik (private), Tesla Optimus, Sanctuary AI (private), Unitree (China), Agility Robotics (private), Boston Dynamics (Hyundai-owned, private) |
| **Service / hospitality / cleaning (commercial)** | Emerging | High in specific verticals (cleaning, food prep) | Per-hour economics, customer education | SoftBank Pepper (defunct), Bear Robotics (Servi), Avidbots (cleaning), Miso Robotics (food) |
| **Mobility (self-driving)** | High R&D investment, low commercial deployment | High in robotaxi (Waymo) | Regulatory, safety validation, deployment economics | Waymo (Alphabet), Cruise (GM — wound down), Zoox (Amazon), Mobileye (MBLY), Tesla FSD |

**Honest gap:** the unit-numbers + growth rates per row require primary-source verification before citation. IFR World Robotics Report, ABI Research, MarketsAndMarkets, company earnings, IDC are the orthogonal-source set I'd cross-reference. This is Phase 2 work.

---

## Cross-sector critical components — the picks-and-shovels layer

**Per user explicit focus: which components are needed regardless of sector vertical.**

Components present in essentially EVERY robotics form factor (humanoid, industrial arm, AMR, surgical, drone, consumer, agricultural):

| Component | Why universal | Concentration / supplier map | Bottleneck rank |
|---|---|---|---|
| **Actuators (servos + harmonic drives)** | Every robot needs motion. Precision robotics needs precision actuators. | Harmonic drive: Harmonic Drive Systems 6324.T dominant globally; Leaderdrive (China) emerging. Servos: Nidec 6594.T, Maxon, Faulhaber, ABB, Yaskawa, Mitsubishi | #1 binding for humanoid scale; less binding for industrial-arm refresh |
| **Edge compute SoC / accelerator** | Every robot needs onboard inference + control. Cloud RTT too slow. | NVIDIA Jetson dominant in non-automotive robotics; Ambarella, Qualcomm RB-series; custom in autonomous-vehicle subset | #2 — picks-and-shovels with high concentration |
| **Motor drives (power electronics)** | Every actuator needs a drive. GaN/SiC efficiency gates battery life. | Wolfspeed (SiC wafers), STM (compound semi + ICs), Infineon, ON Semi, AXT (InP/GaAs substrates indirect) | Cross-cuts with AI sector — power-electronics overlap |
| **IMU + MEMS** | Every mobile robot needs orientation/motion sensing. | STM (in user portfolio 6.6%), Bosch Sensortec, InvenSense (TDK), Murata (in user portfolio 12.4% — also MLCC) | Commoditized but volume-leveraged |
| **Connectivity (Wi-Fi 6/7, 5G, BLE)** | Fleet ops require coordination; some workloads cloud-offload | Qualcomm, MediaTek, Broadcom (AVGO), edge-radio specialists | Moderate; not deeply gating |
| **Simulation environments** | Training data and validation, cross-sector reusable | NVIDIA Isaac+Cosmos, MuJoCo (Google), Genesis, vendor-specific | Software moat layer |
| **Foundation models / control policies** | Increasingly cross-cutting; same policy network adapts across form factors | Physical Intelligence, Skild, DeepMind, NVIDIA GR00T, OpenAI | Active reshuffle; outcome uncertain |
| **MLCC (passive components)** | Every PCB needs them. Each robot has hundreds-to-thousands of MLCCs. | Murata (12.4% portfolio), Samsung Electro-Mechanics, TDK, Taiyo Yuden | Already mapped in AI sector — direct overlap |
| **Connectors + cabling** | Every actuated joint, every sensor, every signal path | Amphenol (APH), TE Connectivity, Molex (Koch private), JAE | Commoditized; volume-leveraged |
| **Bearings + precision mechanics** | Every rotating joint | NSK, SKF, Schaeffler, NTN, THK (linear motion) | Mature industry; volume-leveraged with humanoid scale |

**The cross-sector anti-fragile picks-and-shovels insight:** Harmonic Drive Systems (6324.T), Nidec (6594.T), NVIDIA (Jetson + Isaac + GR00T), STM (already held), Murata (already held), and AXT (already held via compound-semi substrates) form a picks-and-shovels basket that wins across multiple robotics scenarios — humanoid AND industrial AND warehouse AND surgical. This is the anti-fragility (principle #5) layer for the robotics worldview.

---

## Growth-rate framework by sector

Growth rate per sector is driven by THREE factors (not just "is robotics getting better"):

**Growth_rate = (labor-cost-crossover) × (regulatory-pathway-speed) × (capital-availability)**

| Sector | Labor crossover | Regulatory speed | Capital availability | Net rate-limit |
|---|---|---|---|---|
| Industrial manufacturing | Saturated in autos; selective in others | None for inside-facility | Cyclical with capex | Capex cycle |
| Warehouse/logistics | High in US/EU labor markets, accelerating | None | High (Amazon + competitors) | Brownfield integration cost |
| Surgical | Reimbursement-anchored, not labor | 5-10 year FDA Class II/III | Hospital capex | Regulatory clock |
| Defense | N/A (program-driven) | Slow (export control, ethics) | Public budget | Procurement cycle |
| Humanoid | Pre-deployment; theoretical labor TAM huge | Unprecedented (consumer-home safety) | High (VC + Tesla) | Actuator supply + foundation-model maturity |
| Agricultural | High in dairy/specific crops | Light | Farm capital availability | Per-acre economics |
| Consumer (home) | Time-savings utility, not labor cost | Light for vacuum-class | Consumer wallet | Differentiation |

**Implication:** sector growth-rate forecasts can't be summed naively. Each sector has a different rate-limiting factor. The investable insight is identifying when a rate-limit RELEASES — e.g., when surgical regulatory approval clears for a new specialty, or when actuator capacity expands enough for humanoid scale-out.

---

## Extrapolations — the non-consensus edge (per principle #13)

Where I think the worldview produces investable insight not yet priced:

**E1. Harmonic-drive capacity binding becomes the most-mentioned robotics-supply-chain story in trade press by mid-2027.** Currently underweighted because most coverage focuses on humanoid software/funding. Harmonic Drive Systems (6324.T) earnings disclosures over the next 2-4 quarters will surface the constraint. Picks-and-shovels re-rating event.

**E2. Foundation-model robotics generalists (Physical Intelligence, Skild) capture less value than expected because vertical-data players (TSLA Optimus, AMZN Covariant, ISRG) ship working systems on proprietary data while generalists are still scaling.** Hypothesis-falsifier set: π0 / Skild policy benchmarks vs Tesla Optimus deployment cadence + AMZN warehouse pick-rate.

**E3. NVIDIA Robotics becomes a meaningful segment line on NVDA earnings within 6-8 quarters.** Isaac + Cosmos + GR00T + Jetson together. Not at NVDA-DC scale, but enough to re-rate NVDA's robotics exposure framing. Current consensus doesn't price NVDA robotics distinctively from datacenter.

**E4. China's humanoid commoditization at $20K-$50K (Unitree pricing trajectory) creates a bifurcation: cheap-Chinese vs premium-Western humanoid, NOT a single global market.** Sovereign / trade-policy dimension matters more than humanoid-tech competition.

**E5. RaaS (robotics-as-a-service) economics flip the unit-of-sale model.** Companies stop buying robots; they rent capacity per pick / per hour. Symbotic and Locus already do this; humanoid will follow. The right metric for sizing isn't units shipped — it's RoP (robot-operations payback). This changes which companies "look big" — operators look like utilities, manufacturers look like infrastructure.

**E6. The compound-semi power-electronics tailwind (GaN/SiC in motor drives) compounds with the existing AI-datacenter compound-semi tailwind.** STM, Wolfspeed, Infineon get a second growth vector. AXT (substrate) gets indirect pull. The user already holds STM (6.6%) and AXT (4.8%) — these are already partial-robotics-exposure plays even though they were thesised as AI-compute names.

**E7. Tactile sensor density at humanoid manipulation grade is the unsolved component bottleneck NOT priced by consensus.** The HBM-stack-height analog. Whoever cracks high-density, low-cost tactile arrays at scale captures a structural moat. Currently fragmented (SynTouch, Contactile, academic labs); no public play yet. Watch for IPO or acquisition.

**E8. Industrial-robotics incumbent moats compress sooner than incumbent management projects.** Fanuc + ABB + KUKA + Yaskawa earnings calls 2026-2027 will show pricing pressure from foundation-model-equipped challengers. Not a binary collapse — a multi-year margin compression. Short-side / size-reduction signal for industrial-robotics-only names.

**E9. Surgical robotics IS the most defensible vertical** because regulatory moat + surgeon training + data ownership + reimbursement coding compound. ISRG's moat is structurally deeper than Fanuc's. Surgical doesn't get reshuffled by foundation-models in the same way industrial does — too high stakes for unverified generalist policies.

**E10. The reshuffle dynamic plays out 4-7 years, not 12-18 months.** Foundation-model robotics is real but slow. The hype-vs-deployment gap stays wide through 2027. Sizing should reflect this — overweight picks-and-shovels (paid by deployment regardless of which form factor wins), underweight form-factor-specific bets until deployment data confirms the form factor wins.

---

## Blind spots flagged for user (beyond initial framing)

The user asked me to surface what they may not have considered. Here's what I think matters that wasn't in the initial focus areas:

**B1. Brownfield integration cost is the dominant deployment gate, not robot capability.** Most warehouses / factories have existing layouts, existing workforce, existing IT. Retrofitting robotics requires downtime, training, integration services — often 2-5x the robot capex. System integrators (a fragmented layer of regional firms) capture much of the actual deployment economics. The investable insight may be in the integration/services layer, not the hardware.

**B2. Labor cost crossover by region is the non-obvious adoption driver.** Japan's robotics density is highest because aging workforce + chronic labor shortage. China is fastest-growing because manufacturing scale. US lags in industrial robotics partly because cheap labor still exists in many sectors. The adoption curve is NOT primarily about robot price-performance — it's about local labor economics crossing the robotics breakeven.

**B3. Software/firmware layer is where margin is moving.** Hardware commoditizes (Chinese OEM pressure on humanoid, industrial-arm price compression). Whoever owns the OS + foundation model + simulation environment compounds value. NVIDIA Isaac, ROS 2, GR00T, Skild's policy networks accumulate value; the robot itself becomes commoditized commodity over time.

**B4. RaaS unit economics flip the entire sizing/investing frame.** Already in E5 above — emphasizing because it's not in user focus.

**B5. Foundation model data moats by domain — generalists vs verticals.** Pi/Skild build generalist policies; TSLA/AMZN/ISRG build vertical-specialist data moats. Who wins determines who captures software-layer value. The answer is NOT predetermined.

**B6. Regulatory clock per sector is wildly different.** Surgical: 5-10 year FDA cycles. Industrial: none. Consumer-home: unprecedented overhang for humanoid. Defense: export control. Sector growth curves are gated by regulatory clock, not robot capability. This is non-obvious if you think of robotics as one industry.

**B7. Reshoring + sovereign manufacturing tailwind PULLS robotics demand.** US CHIPS Act, EU Chips Act, Japan precision-industrial reshoring, India PLI schemes. Robotics demand is being pulled by policy, not just industry economics. A separate growth vector.

**B8. Energy / power infrastructure dependency.** Large-scale manufacturing-floor robotics needs grid + power infrastructure (same constraint as AI datacenter rollout). Power-constrained sectors will see slower adoption regardless of robot price-performance. Already mapped in `power-for-ai-primer.md` — directly transfers.

**B9. Compound semi (GaN/SiC) in motor drives** — already in E6. Cross-cutting tailwind with AI sector.

**B10. Sim-to-real progress is the binding constraint on generalist policies — NOT compute or model size.** The reality gap between simulated training environments and physical deployment is the limit, not chip count. Whoever wins simulation wins data velocity. Genesis, Cosmos, Mujoco-XLA, Isaac Sim — software-layer competition that doesn't show up in semi-stack analysis.

**B11. Tactile sensing density per actuator** — already in E7.

**B12. Structured vs unstructured environment deployment** — the 1% vs 99% framing in TL;DR #3. Most "robotics deployment today" headlines reference structured-environment density. Unstructured is where the foundation-model push is trying to unlock the 99%.

---

## Reshuffling dynamics — who gets displaced, who absorbs

Per the user's 2026-05-23 framing (industrialization-of-intelligence reshuffles winners):

**Likely displaced or compressed:**
- Industrial-robotics incumbents (Fanuc, ABB, KUKA, Yaskawa) — pricing pressure as foundation-model-equipped challengers offer task-flexibility their installed base doesn't have
- Single-task ROS-stack integrators — generalist policies erode their per-task programming margin
- LIDAR-only sensor specialists — commoditizing
- Pure consumer robot vacuum makers — race to the bottom (iRobot situation is the canary)

**Likely beneficiaries (anti-fragile, win across multiple scenarios):**
- Actuator suppliers (Harmonic Drive Systems 6324.T, Nidec 6594.T)
- Edge compute (NVIDIA — already a holding-adjacent name, not in current portfolio)
- Simulation/software (NVIDIA Isaac, but private players too)
- Compound-semi power electronics (STM held, Wolfspeed, Infineon)
- MLCC + passive (Murata held)
- Compound-semi substrates (AXT held)
- Surgical robotics incumbents with regulatory moats (ISRG)
- Logistics RaaS operators (Symbotic)
- Foundation-model robotics labs (Pi, Skild — currently private; watch for IPO)

**Cascade trace** (per principle #2, N-th order):
- 1st order (P>80%): humanoid + foundation-model robotics narrative pulls capital into the sector through 2026-2027
- 2nd order (P~60%): actuator + edge-compute + simulation suppliers see capacity-constrained growth before any humanoid company books significant revenue
- 3rd order (P~40%): industrial-robotics incumbents start showing margin compression in earnings (2026-2027), triggering re-rating
- 4th order (P~20%): consumer/home humanoid hits regulatory friction, capital reallocates to industrial/warehouse/surgical verticals

---

## Falsifiers (per principle #7) — when this worldview breaks

- **F1.** If foundation-model robotics generalists demonstrate >70% of human dexterity on unstructured tasks in benchmark deployments by end-2026, the reshuffle accelerates 2x and the picks-and-shovels thesis weakens (everyone scales actuators simultaneously, compressing supplier margins).
- **F2.** If Harmonic Drive Systems (6324.T) capex disclosure shows 5x capacity expansion in 12-18 months, the supply-constraint thesis weakens; picks-and-shovels re-rating gets capped.
- **F3.** If Chinese humanoid (Unitree-class) hits sub-$15K with credible spec at scale, the bifurcation thesis (E4) accelerates and Western humanoid economics compress sooner.
- **F4.** If ISRG loses meaningful surgical share to Stryker/Medtronic/J&J robotic platforms, the "surgical-is-most-defensible" thesis (E9) weakens.
- **F5.** If RaaS economics fail to prove out (Symbotic margin compression, Locus stagnation), the per-pick model thesis is wrong and the unit-sale model returns.
- **F6.** If AI foundation models hit a wall (LLM scaling plateau) that propagates to robotics foundation models, the whole reshuffle thesis decays.

---

## Investable angles surfaced (anti-fragile bias)

**Tier-style ranking is deferred to the sizing matrix work tomorrow.** These are candidate names that emerge from the worldview, to be processed through the multi-horizon (6/12/18 month) matrix per yesterday's framing.

**Strong picks-and-shovels candidates (anti-fragile across multiple scenarios):**
- Harmonic Drive Systems (6324.T) — actuator picks-and-shovels, current
- Nidec (6594.T) — motor + actuator picks-and-shovels
- NVIDIA (NVDA) — edge compute (Jetson) + simulation (Isaac/Cosmos) + foundation model (GR00T) cross-cutting
- STMicroelectronics (STM — held 6.6%) — already partial-robotics-exposure via MEMS + power semis
- Murata (held 12.4%) — MLCC volume leverage through robotics-PCB density
- AXT (held 4.8%) — compound-semi substrate indirect via power-electronics

**Form-factor-specific candidates (scenario-dependent, lower anti-fragility):**
- Intuitive Surgical (ISRG) — surgical regulatory moat
- Symbotic (SYM) — warehouse RaaS
- Universal Robots / Teradyne (TER) — cobot exposure
- Fanuc (FANUY) / ABB / Yaskawa (YASKY) — incumbent risk-side; potentially short or size-reduce
- Tesla (TSLA) — Optimus optionality embedded in larger thesis
- Anduril / Shield AI / Skydio — defense/autonomous (mostly private)
- Figure / 1X / Apptronik / Physical Intelligence / Skild — humanoid + foundation model pure-plays (mostly private)

**Cross-overlap with existing AI sector map** (these names are ALREADY in scope, robotics adds an additional growth vector):
- NVDA (compute substrate + Isaac + GR00T)
- STM (held)
- Murata (held)
- AXT (held)
- AVGO (connectivity for fleet ops)

**Important pure-play exposure I'd add to watchlist** for further drill:
- Harmonic Drive Systems (6324.T) — most concentrated actuator-supply exposure. **CORRECTED 2026-05-24 same day after user probe + orthogonal verification:** ~35-40% of harmonic-drive usage globally goes to semi cap-equip per industry sources — so HDS is robotics + semi cap-equip, NOT single-narrative. NO data center cooling exposure (terminology collision with VFD class).
- Nidec (6594.T) — broader motor + actuator
- Symbotic (SYM) — public RaaS exemplar
- ISRG — surgical regulatory moat
- Teradyne (TER) — Universal Robots exposure + semi-test cross-cut
- **Yaskawa Electric (6506.T) — added 2026-05-24** after user surfaced multi-narrative thinking. Industrial robotics (incumbent risk per E8) AND VFDs for data center cooling (separate growth vector). The cooling-VFD leg may offset robotics-incumbent margin compression. Worth verifying segment-split.
- **Mitsubishi Electric (6503.T) — added 2026-05-24** same logic — VFDs for DC cooling + industrial robotics + factory automation. Multi-narrative.
- **ABB — added 2026-05-24** same logic — VFDs + robotics + electrification. Multi-narrative incumbent.

---

## What needs primary-source verification before publication

Per principle #23 (claim-level verification via orthogonal data) — these are claims in this primer that need orthogonal corroboration before citation in any thesis file:

1. **Deployment numbers by sector** — IFR World Robotics Report 2024/2025 + ABI Research + IDC + company earnings as orthogonal sources. NOT a single trade-press article.
2. **Growth rates by sector** — same orthogonal set.
3. **Harmonic drive global capacity** — Harmonic Drive Systems 6324.T capex disclosures + Leaderdrive (China) supply data + customer-side disclosure (Tesla, Figure, 1X) as orthogonal.
4. **Humanoid deployment unit numbers** — Tesla Optimus production cadence (earnings calls) + Figure/1X funding rounds + Unitree commercial pricing as orthogonal.
5. **Foundation model robotics benchmarks** — π0, RT-2/X, Octo, OpenVLA papers + independent deployment evidence.
6. **Actuator count per humanoid** — manufacturer specs + independent teardowns as orthogonal.

**Discipline:** until orthogonal verification is logged, specific numbers stay marked `[primary-source verification required]` or get hedged with `~`, `(estimate)`, `(my model)`. Per the anti-fab discipline.

---

## Fluidity footer

- **codified:** 2026-05-24
- **last_review:** 2026-05-24
- **falsified_by:** if foundation-model robotics fails the F1 benchmark by end-2026, the reshuffle thesis weakens; if Harmonic Drive capacity expands per F2, the picks-and-shovels concentration thesis caps; if multiple of E1-E10 invert within 12 months, the worldview needs a structural rebuild rather than refinement.
- **re-evaluation trigger:** quarterly (next: 2026-08-24), OR on any of: humanoid manufacturer announces commercial deployment at 1000+ units/year, Harmonic Drive capex announcement, NVDA discloses robotics segment line on earnings, regulatory event in surgical or consumer-home humanoid, China-US trade policy shift on advanced robotics.

---

## Phase plan (multi-session build)

This primer is Phase 1. The remaining build:

- **Phase 2** — Primary-source data ingestion: IFR World Robotics, Harmonic Drive capex, NVDA GTC robotics slides, ISRG / SYM / Teradyne earnings, IFR density-by-country data. Fill in the `[verification required]` markers. Orthogonal-source discipline per principle #23.
- **Phase 3** — `sector/robotics-stack-map.md` (the value chain layout with current pricing dynamics per layer)
- **Phase 4** — `sector/robotics-bottlenecks.md` (current / next / next-next binding constraints)
- **Phase 5** — `sector/robotics-scenarios.md` (3-5 plausible futures with probabilities)
- **Phase 6** — `sector/robotics-supply-chain.md` (Japanese precision-industrial concentration, Chinese commoditization, sovereign dynamics)
- **Phase 7** — `sector/robotics-competitive-map.md` + `sector/causal-maps/foundation-models-meet-robotics.md`
- **Phase 8** — Per-company thesis stubs for the new candidates (Harmonic Drive 6324.T, Nidec 6594.T, SYM, ISRG, TER, FANUY, ABB, YASKY)
- **Phase 9** — Integration into existing portfolio sizing matrix (rebalance held names with robotics exposure: NVDA-adjacent, STM, Murata, AXT)

Phases 2-9 are queued for sessions after Tuesday's allocation. This primer is the structural anchor everything else hangs from.
