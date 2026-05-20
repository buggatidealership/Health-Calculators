# Research Queue — Pass 2 Items

**Last updated:** 2026-05-20

Backlog of named research items surfaced through conversation that should be addressed in Pass 2 (post-NVDA earnings).

## Format

```
[date surfaced] PRIORITY TITLE
Origin: [where this came from]
Scope: [what success looks like]
Linked files: [where the work will land]
```

---

## High priority

### [2026-05-20] Pull Leopold Aschenbrenner's 13F filings; build T1 Energy + Bloom Energy + Tower Semi thesis basis
**Origin:** User input 2026-05-20. Leopold focuses on AI infra layer (not memory). Holdings include or have included T1 Energy, Bloom Energy, Tower Semiconductor. User holds T1 Energy and Tower Semi as untested positions per `research/portfolio/coherence-audit.md`.
**Scope:** Fetch the most recent 13F filing from Situational Awareness LLC (Leopold's fund) via SEC EDGAR. Extract current holdings. For each held position in our universe, build the bull thesis using his thesis as primary-tier signal, then reconstruct independently.
**Linked files:** `companies/T1/thesis.md`, `companies/TSEM/thesis.md`, `companies/BE/thesis.md` (all new)

### [2026-05-20] Verify SK Hynix technical moat claim independently
**Origin:** User input 2026-05-20. Prior Claude session asserted SK Hynix has materially larger technical moat than Samsung/Micron. User trusts the claim but admits it was trusted blindly.
**Scope:** Validate from primary sources (technical conference papers, supplier briefings, patent disclosures, qualification status data). Not a quick task; requires real technical depth.
**Linked files:** `companies/HYNIX/thesis.md` (new), `wiki/hbm-primer.md` (§9.6 update)

### [2026-05-20] Source-cite Dylan Patel's "2-3x more memory pricing" claim
**Origin:** User reported hearing Dylan Patel make this claim in a podcast.
**Scope:** Find the specific SemiAnalysis newsletter / podcast episode where this claim was made. Cite formally. Use it as a high-confidence primary-tier signal to triangulate with other HBM pricing forecasts.
**Linked files:** `wiki/hbm-primer.md` (§11 currently has user-reported placeholder)

## Medium priority

### [2026-05-20] AXTI earnings-growth vs multiple-expansion decomposition
**Origin:** Verified user portfolio position; Stage 4 recognition confirmed; today -8.87% pullback per user screenshot.
**Scope:** Decompose the +6,897.96% past-year return into earnings growth vs multiple expansion. If mostly earnings → thesis is delivering, multiple defensible. If mostly multiple → Stage 5 risk material. Determines hold/trim/exit recommendation.
**Linked files:** `companies/AXTI/thesis.md` (new)

### [2026-05-20] Bloom Energy thesis reconstruction (user re-evaluation candidate)
**Origin:** User sold BE at ~+30%, regrets exit, considering re-entry. BE is canonical bypass-route name in `meta/time-to-x-framework.md` (time-to-power).
**Scope:** Build full thesis with Time-to-X applied to power layer + Duration × Magnitude × Pricing-Power model. Specific recommendation: re-enter at current price, wait for pullback, or stay out.
**Linked files:** `companies/BE/thesis.md` (new)

### [2026-05-20] STM thesis reconstruction (or sell decision)
**Origin:** User portfolio coherence audit flagged as untested (~6.6% per `research/portfolio/holdings.md`). Came from third-party research user no longer remembers the rationale for.
**Scope:** Research from scratch — STM is broad-line semi (autos, MCU, power, industrial). What is the AI-sector thesis if any? If none defendable, recommend sell.
**Linked files:** `companies/STM/thesis.md` (new)

### [2026-05-20] Tower Semiconductor thesis reconstruction (or sell)
**Origin:** Same as STM. Untested ~5.4% position.
**Scope:** Same as STM. TSEM is specialty analog/RF/power foundry — assess AI exposure.
**Linked files:** `companies/TSEM/thesis.md` (new)

### [2026-05-20] Astera Labs (ALAB) full thesis — bypass-route gap in portfolio
**Origin:** HBM primer identified ALAB as the most credible near-term CXL bypass play; user has zero exposure.
**Scope:** Full thesis with Duration × Magnitude × Pricing-Power × Recognition Stage. Sizing recommendation.
**Linked files:** `companies/ALAB/thesis.md` (new)

### [2026-05-20] SUMCO + Shin-Etsu thesis — silicon wafer substrate layer
**Origin:** User-surfaced via "agnostic to who wins at the top." HBM primer confirms substrate-layer importance.
**Scope:** Build joint or separate theses. Use the wafer-demand vs HBM-demand tension to frame the bull case.
**Linked files:** `companies/SUMCO/thesis.md`, `companies/SHINETSU/thesis.md` (new)

## Lower priority / wiki entries

### [2026-05-20] Power-for-AI primer
**Origin:** Was in original wiki plan; deferred to focus on HBM first.
**Scope:** Pure supply-demand-bypass analysis of firm power for AI datacenters. Time-to-power framework formalized. Names: VST, CEG, GEV, ETN, TLN, Bloom Energy, Solaris.
**Linked files:** `wiki/power-for-ai-primer.md`

### [2026-05-20] Other planned wiki entries
Per `research/wiki/README.md` planned list: chip-stack primer, hyperscaler-capex primer, custom-silicon primer, optical-interconnect primer, model-economics primer, memory-cycle primer, geopolitical-AI primer, networking primer. Each is a future work unit.

## How to use this queue

When a session starts after NVDA earnings:
1. Run GRADE on `research/predictions/2026-05-20-NVDA-Q1FY27.md`
2. Run SCENARIO-UPDATE based on the actual print
3. Then pick highest-priority queue item that matches the scenario outcome
4. Mark items completed when their linked files land

When new conversational inputs surface, add to this queue rather than getting distracted from current task.
