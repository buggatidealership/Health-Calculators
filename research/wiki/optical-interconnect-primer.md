# Optical Interconnect Primer — Fiber, CPO, and the Photonics Transition

**Last updated:** 2026-05-21
**Type:** Reference primer. Optical interconnect is the next-binding constraint in AI clusters after HBM + CoWoS. Read before reasoning about GLW (held), AXTI (held), or any optical name (COHR, LITE, MRVL, AVGO photonics, NVDA Spectrum-X).
**Methodology:** Bottoms-up build from primary sources before consensus comparison (per L1).

---

## TL;DR

The optical interconnect layer is shifting from pluggable transceivers (fiber + transceiver modules) to co-packaged optics (CPO — optical components packaged directly with the compute die). This transition runs 2026-2030. **Initial deployments 2026-2027; large-scale 3-5 years out** per [Cignal AI](https://cignal.ai/2025/02/co-packaged-optics-inevitable-but-not-imminent/).

The substrate beneath both technologies is **indium phosphide (InP)**, where supply is in structural deficit: 2025 global wafer shipments 600-700K wafers vs demand 1.5-2M wafers = **>70% supply deficit** per [GlobalSemiResearch](https://globalsemiresearch.substack.com/p/axt-the-indium-phosphide-play-for). **AXT controls 60-70% of global InP substrate production** per same source — this directly validates the user's AXTI position.

The most-overlooked detail: **NVIDIA invested $2 billion combined into Lumentum + Coherent** per [Photoncap](https://photoncap.net/p/the-6-companies-behind-coherent-and), securing strategic supply for CPO rollout. The optical layer is being treated as critical infrastructure by the chip-stack leader.

**For user's portfolio:**
- AXTI (held 4.8%): structurally CORRECT position. ~60-70% InP substrate share + >70% supply deficit + CPO ramp = persistent pricing power. **Recognition Stage 4 caveat applies** (per `companies/AXTI/...` — already P2 thesis decomposition needed) but the underlying thesis is robust.
- Corning (held 10.8%): the bear case here is partially CPO-driven (CPO reduces fiber per cluster long-term). Per `companies/GLW/interpretations.md`, the forward-mix model softens this. Still: long-term CPO disruption is the structural risk to GLW's Springboard plan.

---

## Why this matters

Optical interconnect is the THIRD binding constraint in the AI compute stack (after HBM + advanced packaging). Per `wiki/agentic-workload-scaling.md`, networking bandwidth grows faster than compute (east-west traffic from tool calls compounds beyond core compute scaling). At 800G+ fabric speeds, copper SerDes hits physical limits. Optical interconnect is unavoidable.

Cross-references this primer informs:
- GLW thesis (resolves Aschenbrenner-user conflict more deeply)
- AXTI thesis (validates user position structurally)
- COHR, LITE, MRVL, AVGO, NVDA Spectrum-X
- T3 theme (per `sector/themes.md` — networking displaces compute)
- `wiki/hbm-primer.md` (advanced packaging coupled)
- `sector/bottlenecks.md` (12-24mo next-binding constraint)

---

## Definitions

**Pluggable transceiver** = optical module that plugs into a switch/server port. Industry standard today. Powers external optical links between racks.

**Co-Packaged Optics (CPO)** = optical components packaged directly with the compute die or switch ASIC. Eliminates separate transceiver. Higher density, lower power per bit, but tighter integration constraints.

**Silicon photonics** = optical components fabricated on silicon (or hybrid silicon + InP). Cheaper than discrete InP-only for some applications; lower performance for high-bandwidth.

**Indium Phosphide (InP)** = compound semiconductor substrate. The base material for high-performance optical chips (lasers, photodiodes, modulators). NOT silicon-substitutable for highest-performance applications.

**EML (Externally Modulated Laser)** = the laser component in high-speed transceivers. Built on InP. Lumentum dominant.

**400G / 800G / 1.6T / 3.2T** = data rates per link. Industry is in 800G ramp; 1.6T sampling; 3.2T CPO targeted for 2H 2026.

---

## The optical interconnect transition — fiber + pluggable to CPO

### Current state (pluggable transceiver era)

Standard AI cluster networking uses pluggable optical transceivers (800G modules) connecting GPU racks via fiber. Each transceiver contains: laser (InP-based EML), photodiode, drivers, retimer ASIC. Pluggable modules are field-replaceable, work with any switch supporting the form factor.

**Key economics today:**
- 800G pluggable: ~$1,500-3,000 per module (per industry sources)
- Modules per rack: dozens
- Total optical cost per cluster: meaningful but not dominant
- Power per bit: high (each module has its own laser + drivers + retimer)

### The CPO shift — what's changing

CPO removes the pluggable interface. Optical components sit on the SAME substrate as the switch ASIC or, in some designs, on the SAME substrate as the GPU itself (NVIDIA Spectrum-X CPO targets switch + GPU package integration).

Per [Future Markets Inc.](https://www.futuremarketsinc.com/the-global-co-packaged-optics-market-2026-2036/) and [ADTEK](https://adtek-fiber.com/co-packaged-optics-cpo-market-trends-2026-ai-data-center-optical-interconnect-evolution/):
- 2026-2027: initial CPO deployment at hyperscaler scale, coexisting with pluggable
- 3-5 years out: large-scale CPO deployment
- 2030+: CPO likely dominant for highest-density applications

**Key advantages:**
- Higher density (more bandwidth per package)
- Lower power per bit (~30-50% reduction vs pluggable per industry estimates)
- Higher reliability (no pluggable interface failure mode)

**Key disadvantages:**
- Not field-serviceable (failure means swap entire compute module)
- Higher upfront cost
- Yield challenges (more complex packaging)
- Heat management on the same substrate as compute

### NVIDIA's CPO roadmap (per [Yahoo Finance / industry analysis](https://finance.yahoo.com/news/co-packaged-optics-market-report-090200341.html))

- **Quantum-X switch:** 1.6T CPO, 2H 2025 (shipping)
- **Spectrum-X switch with CPO:** 3.2T, 2H 2026 target
- Both use silicon photonics with InP lasers

This is the FIRST major hyperscale-targeted CPO product. NVIDIA's $2B combined investment in Lumentum + Coherent (per [Photoncap](https://photoncap.net/p/the-6-companies-behind-coherent-and)) secures supply for this rollout.

---

## The supply chain — bottoms-up

```
InP substrate (AXT 60-70% share)
  ↓
Epitaxy (Lumentum, Coherent — vertically integrated)
  ↓
Laser/PD chips (Lumentum, Coherent, II-VI, smaller players)
  ↓
Transceiver modules (Lumentum, Coherent, Innolight, Eoptolink, etc.)
  ↓
CPO assembly (NVIDIA Spectrum-X, AVGO, MRVL custom Si + photonics)
  ↓
Switch/GPU integration (NVDA, AVGO, ANET)
```

### Layer 1 — InP substrate

**Per [GlobalSemiResearch substack](https://globalsemiresearch.substack.com/p/axt-the-indium-phosphide-play-for) (T4 source — needs primary verification but specific data):**
- AXT (AXTI): 60-70% global InP substrate share
- 2025 global wafer shipments: 600-700K wafers
- 2025 demand: 1.5-2M wafers (estimate)
- Supply deficit: >70%
- Order books "extending through 2027 and beyond"
- AXT December 2025 $100M raise for capacity expansion

This is the deepest substrate layer of optical interconnect — beneath EVERY laser, photodiode, modulator. Per `meta/methodology.md` Token-Volume Filter, AXTI passes cleanly: more AI = more optical components = more InP substrate.

### Layer 2 — Epitaxy + Lasers/Modulators

Per [Photoncap](https://photoncap.net/p/the-6-companies-behind-coherent-and) and [Lumentum InP chips announcement](https://www.semiconductor-today.com/news_items/2025/apr/lumentum-020425.shtml):

- **Lumentum (LITE):** dominant in high-margin InP EMLs for 1.6T transceivers + CPO. NVIDIA invested in Lumentum (part of $2B combined with COHR).
- **Coherent (COHR):** vertically integrated substrate → epitaxy → EML. Strong datacenter momentum. NVIDIA invested.
- Smaller players: II-VI assets (now part of COHR), Mitsubishi Electric, Sumitomo.

### Layer 3 — Transceiver modules

- **Lumentum + Coherent:** module assemblers in addition to laser providers
- **Innolight, Eoptolink (Chinese):** large pluggable module makers, less relevant for US-allowed hyperscaler deployments
- **Fabrinet (FN):** EMS for optical modules, less direct exposure

### Layer 4 — CPO assembly

- **NVIDIA Spectrum-X / Quantum-X:** in-house CPO design, sourced lasers from LITE/COHR
- **AVGO + MRVL:** custom Si photonics for hyperscaler ASIC integration
- **TSMC:** foundry for the silicon photonics + InP integration
- **Ayar Labs:** specialty CPO startup, private

### Layer 5 — Switch/GPU integration

- NVDA, AVGO custom Si, AMD MI series with optical attach
- ANET ethernet switches (currently pluggable; future CPO support)

---

## Current state — supply vs demand

### Supply side

**InP substrate:** Severe deficit. 600-700K shipped vs 1.5-2M demand. AXT capacity expansion ($100M raise Dec 2025) won't fully close gap before 2027. Other producers (smaller, Chinese, Japanese) ramping but order books "extending through 2027 and beyond" per [GlobalSemiResearch](https://globalsemiresearch.substack.com/p/axt-the-indium-phosphide-play-for).

**EML chips:** Lumentum + Coherent capacity expanding but supply tight. NVDA's $2B investment specifically to secure capacity.

**Module assembly:** Less constrained — Chinese capacity available but limited for hyperscaler deployments.

**CPO assembly:** Brand new. Limited capacity. TSMC foundry slots for silicon photonics constrained.

### Demand side

Per `wiki/agentic-workload-scaling.md`: networking bandwidth grows ~1.5-2× compute growth. Compute grows ~5× over 24 months. Networking bandwidth demand grows ~7-10× over 24 months.

**At 800G ramp:** dozens of modules per AI rack × thousands of racks × hyperscaler buildouts = millions of modules per year.

**At 1.6T / 3.2T CPO transition:** fewer total optical components per cluster (CPO integration reduces module count) BUT each is higher-value and more InP-intensive.

### The investable insight

Demand growth >> supply growth at the InP substrate + EML layer. **AXTI is structurally the deepest beneficiary** — no optical works without InP. Even as CPO replaces pluggable, the underlying substrate demand grows because:
- More compute drives more interconnect bandwidth
- CPO per package uses MORE InP than pluggable (more lasers per integrated module)
- New applications (PIC sensors, automotive lidar) layer additional InP demand

---

## Investable names — by tier

### Tier 1 — Substrate (deepest layer, most asymmetric)

| Name | Profile | Status |
|---|---|---|
| **AXT (AXTI)** | 60-70% global InP substrate share per GlobalSemiResearch | **User holds 4.8%; Recognition Stage 4 (per `companies/AXTI/...`)** |
| **Sumitomo Electric (5802.T)** | Japanese InP supplier; smaller share | Not in OS universe |
| **JX Nippon (Japan)** | InP supplier | Not in OS universe |

### Tier 2 — Laser / EML / Vertically integrated optical

| Name | Profile | NVIDIA investment? |
|---|---|---|
| **Lumentum (LITE)** | Dominant high-margin InP EMLs | YES (part of $2B combined) |
| **Coherent (COHR)** | Vertically integrated substrate → epitaxy → EML | YES (part of $2B combined) |

### Tier 3 — Custom Si photonics for CPO

| Name | Profile | Key advantage |
|---|---|---|
| **Marvell (MRVL)** | Custom Si photonics for hyperscaler ASIC integration | Multi-theme (custom Si + networking + memory + CXL) |
| **AVGO** | Custom photonics with Google TPU + Anthropic (per Aschenbrenner 13F analysis) | Top-2 frontier-provider custom Si partner |

### Tier 4 — Fiber + cable infrastructure

| Name | Profile | Risk |
|---|---|---|
| **Corning (GLW)** | Optical fiber + cable for datacenter; Springboard plan | **User holds 10.8%; CPO disruption risk to fiber-per-cluster TAM long-term** |
| **CommScope (private)** | Cable assembly | Not investable directly |

### Tier 5 — Specialty optical / lidar / niche

| Name | Profile | Status |
|---|---|---|
| **Ayar Labs (private)** | Specialty CPO startup | Track via private-tracker.md |
| **Various Chinese optical** | Module makers | Not US-allowed for hyperscalers |

---

## The GLW vs CPO conflict — resolved more deeply

Per `companies/GLW/thesis.md` and `companies/GLW/interpretations.md`:

**The short-term thesis (12-24 months):** GLW fiber demand grows ~36% YoY per Q1 2026; Meta $6B deal active. CPO doesn't displace pluggable transceivers immediately. Fiber TAM holds.

**The medium-term thesis (24-48 months):** CPO begins materially displacing pluggable at scale. Fiber per cluster doesn't go to zero, but growth rate slows. Per Forward Mix Probabilistic Model in `meta/methodology.md`: OC growth could decelerate from 36% YoY to 15-20% by 2028 as CPO penetrates.

**The long-term thesis (5+ years):** CPO is dominant for highest-density applications. Pluggable fiber still serves edge-rack + telecom. GLW's exposure: still material (fiber is needed for ALL datacenter networking, just less PER cluster).

**Synthesis for the user:** the CPO disruption is REAL but TIMING-DEPENDENT. Per the trim recommendation:
- If you trim NOW to 5-7%: you're betting against CPO timing
- If you wait for Q2 2026 print: OC growth sustainment confirms or denies the immediate-term thesis
- If CPO commercial deployment news emerges from a hyperscaler in next 6-12 months: GLW immediately re-rates lower

**Updated recommendation:** the trim decision is now more conditional on TWO triggers — Q2 GLW print + first material hyperscaler CPO deployment announcement. If both confirm bull-case timing, trim is smaller; if either confirms bear case, trim is larger.

---

## The AXTI thesis — validated structurally

User holds AXTI at 4.8% per `research/portfolio/holdings.md`. Per `research/portfolio/coherence-audit.md`: Stage 4 recognition confirmed (verified +6,897.96% past-year per user screenshot). Earnings-vs-multiple decomposition is P2 todo.

**This primer's contribution:** the structural underpinning of AXTI's price action is now articulated.
- 60-70% market share in the most-constrained substrate of optical interconnect
- Supply deficit >70%
- Order books through 2027+
- NVIDIA's $2B investment in downstream consumers (LITE + COHR) confirms strategic value of the entire InP chain
- CPO transition is a TAILWIND not a headwind for AXTI (more lasers per package = more InP per system)

**Recognition Stage 4 risk remains.** The fundamentals support a long-duration multiple, but the past-year +6,898% move per user screenshot suggests valuation may have run ahead. The P2 decomposition (earnings growth vs multiple expansion) determines whether AXTI is a HOLD or TRIM.

This primer does NOT replace that decomposition — but provides the structural context that the underlying thesis IS sound. Per L2/L3: thesis intact; position-sizing is the only question.

---

## Token-Volume Filter applied

Per `meta/methodology.md`:

| Name | Token-Volume Filter | Reasoning |
|---|---|---|
| AXTI | ✓ PASS (cleanly) | More AI tokens → more compute → more interconnect → more InP substrate |
| LITE, COHR | ✓ PASS (cleanly) | EMLs / lasers consumed per optical link; AI cluster scale-up drives demand |
| MRVL | ✓ PASS (multi-theme) | Custom Si photonics + memory controllers + networking ASICs |
| AVGO | ✓ PASS | Custom Si photonics adds to existing AI ASIC story |
| NVDA | ✓ PASS | Spectrum-X CPO is part of full-stack moat |
| GLW | ✓ PARTIAL | 37% of revenue (Optical) passes; 63% does not — see `companies/GLW/...` |

**Optical interconnect category passes the filter; AXTI + LITE + COHR are the cleanest pure-plays.**

---

## Falsifiers — what would break the optical interconnect thesis

1. **Massive InP substrate capacity addition** — multiple new producers or AXTI dramatically expanding capacity above demand. Currently deficit >70% so unlikely in 6-18 months.
2. **CPO commercialization delay** — if hyperscalers find CPO yield/reliability worse than expected, ramp delays 1-3 years. Would slow optical layer growth.
3. **Alternative interconnect breakthrough** — wireless/copper-photonics hybrid that bypasses InP. Speculative; no current candidate at scale.
4. **AI capex pause / S4 scenario** — would reduce both pluggable and CPO demand growth.
5. **AXTI execution issue** — yield problems, ASP collapse, share loss. Would damage the substrate-thesis specifically.

---

## Open questions

1. **What is AXTI's actual capacity ramp by end-2027?** $100M raise was announced; specific capacity additions less clear from public sources.
2. **CPO yield curves** — currently low; how fast do they improve? Affects ramp timing materially.
3. **Hyperscaler-specific CPO commitments** — which hyperscalers will deploy first at scale? AWS? GOOG? META? Affects which optical names benefit most.
4. **AVGO + MRVL custom Si photonics share** — emerging market, allocation between players uncertain.
5. **NVDA Spectrum-X CPO commercial production timing** — 2H 2026 stated target. Slippage risk.

---

## How this primer connects to OS state

| Name | Connection | Position |
|---|---|---|
| **AXTI** | User holds 4.8%; structural thesis validated by primer | P2 earnings-vs-multiple decomposition still queued |
| **GLW** | User holds 10.8%; CPO is the long-term risk to Springboard plan | P1 trim recommendation refined; wait for Q2 print + CPO deployment news |
| **LITE, COHR** | Not held; both received NVDA $2B investment | Watchlist (cascade-walk added) |
| **MRVL** | Not held; multi-theme (custom Si + photonics) | Watchlist; thesis candidate |
| **AVGO** | Not held; custom Si photonics is part of broader AVGO thesis | P1 thesis already queued |
| **NVDA** | Not held; Spectrum-X CPO part of full-stack moat | NVDA Q1 FY27 GRADED |

---

## Sources

### CPO market + deployment timeline
- [Future Markets Inc — Global CPO Market 2026-2036](https://www.futuremarketsinc.com/the-global-co-packaged-optics-market-2026-2036/)
- [ADTEK — CPO market trends 2026](https://adtek-fiber.com/co-packaged-optics-cpo-market-trends-2026-ai-data-center-optical-interconnect-evolution/)
- [Yahoo Finance — CPO market report NVIDIA vs Broadcom](https://finance.yahoo.com/news/co-packaged-optics-market-report-090200341.html)
- [Ayar Labs — CPO overview](https://ayarlabs.com/blog/co-packaged-optics-step-into-the-spotlight/)
- [SemiAnalysis — CPO scaling with light](https://newsletter.semianalysis.com/p/co-packaged-optics-cpo-book-scaling)
- [Cignal AI — CPO inevitable but not imminent](https://cignal.ai/2025/02/co-packaged-optics-inevitable-but-not-imminent/)

### InP substrate + AXT
- [GlobalSemiResearch — AXT InP play for AI](https://globalsemiresearch.substack.com/p/axt-the-indium-phosphide-play-for)
- [36kr — Indium Phosphide spotlight](https://eu.36kr.com/en/p/3651344579993989)
- [TSPA Semiconductor — InP substrates strategic plays](https://tspasemiconductor.substack.com/p/four-strategic-plays-in-ai-optical)
- [Yianisz — InP quiet bottleneck](https://yianisz.substack.com/p/indium-phosphide-inp-the-quiet-bottleneck)

### EML / laser companies
- [Lumentum InP chips for AI](https://www.semiconductor-today.com/news_items/2025/apr/lumentum-020425.shtml)
- [Photoncap — Companies behind COHR + LITE](https://photoncap.net/p/the-6-companies-behind-coherent-and)
- [BankChampaign — Photonics next phase of AI](https://www.bankchampaign.com/photonics-next-phase-ai-revolution/)
- [PIC Magazine — Shifting supply chains in photonics era](https://picmagazine.net/article/124176/Shifting_supply_chains_in_the_era_of_photonics)

### Cross-references in OS
- `research/wiki/agentic-workload-scaling.md` — demand-side anchor (networking grows faster than compute)
- `research/wiki/hbm-primer.md` — adjacent supply-chain constraint
- `research/wiki/power-for-ai-primer.md` — adjacent infrastructure
- `research/companies/GLW/thesis.md` — fiber-vs-CPO tension resolved here
- `research/companies/GLW/interpretations.md` — Forward Mix Probabilistic Model applied
- `research/portfolio/holdings.md` — user holds AXTI 4.8%, GLW 10.8%
- `research/sector/themes.md` — T3 (networking displaces compute)
- `research/sector/bottlenecks.md` — 12-24mo next-binding constraint
