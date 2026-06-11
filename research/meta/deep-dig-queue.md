# Deep-Dig Queue — BOM-level Component Theses

**Last updated:** 2026-05-21
**Workflow:** see CLAUDE.md §8 (DEEP-DIG)
**Bias addressed:** B15 (revenue-mix-anchoring) in `biases-watchlist.md`

## TL;DR

When the user says "deep dig" (with or without target), Claude self-selects the highest-ranked un-completed item below and runs Workflow 8 (DEEP-DIG). Output is mandatory BOM-level depth with cross-stack cascade — NOT revenue-mix analysis.

## Ranking criteria (in order)

1. **Binding-constraint proximity** — is this what's about to bind in 6-18mo per `sector/bottlenecks.md`?
2. **Thesis depth gap** — does an existing held-name thesis lack BOM-level data?
3. **Cross-correlation reach** — does drilling into this update ≥3 other theses?
4. **Source availability** — is there at least one published bottoms-up unit-count number that can seed the analysis?

## Queue (ranked, un-completed)

### 1. ~~MLCC count per board / GB200 → Rubin~~ ✅ COMPLETED 2026-05-21
(See "## Completed deep-digs" below)

### 2. HBM stack-height ASP / HBM3E 12-Hi → HBM4 16-Hi
- **Status:** queued
- **Seed source needed:** Per-stack ASP delta data from HBM4 16-Hi vs HBM3E 12-Hi; MR-MUF vs TC-NCF process yield differential
- **Affected names:** HYNIX (largest held position per `research/portfolio/holdings.md`), Samsung Memory, Micron
- **Cross-correlation:** Camtek (CAMT — packaging metrology), AIXTRON (compound semi adjacency), substrate makers Ibiden/Shinko
- **Why prioritized:** HYNIX is the largest single position; current thesis is at revenue-mix level (HBM% of revenue), not BOM economics

### 3. InP wafer per 800G → 1.6T transceiver
- **Status:** queued
- **Seed source needed:** InP wafer area per transceiver, EML laser yield per wafer, CPO transition wafer-content delta
- **Affected names:** AXTI (held, recently trimmed candidate), AIXTRON (candidate, MOCVD equipment layer), Lumentum, Coherent
- **Cross-correlation:** GLW (specialty fiber + hollow-core MCF), NVDA Spectrum-X, AVGO optical, MRVL optical
- **Why prioritized:** AXTI/AIXTRON pair-trade analysis needs the wafer-content multiplier to be precise

### 4. PMIC count per AI server board / GB200 → Rubin
- **Status:** queued
- **Seed source needed:** Power-delivery stage count per Rubin board (likely 2x given TDP doubling per the MLCC image)
- **Affected names:** VICR (held), MPS (rival), Renesas, ROHM, Texas Instruments analog
- **Cross-correlation:** This is the same Rubin TDP causal mechanism as MLCCs — solving #1 partially solves #4

### 5. Fiber-km per hyperscaler campus + specialty fiber spool capacity
- **Status:** queued
- **Seed source needed:** Specialty single-mode fiber pulls per AI campus, hollow-core fiber adoption pace, Corning capacity utilization data
- **Affected names:** GLW (large held position per `research/portfolio/holdings.md`)
- **Cross-correlation:** Lumentum/Coherent (transceivers), Ciena (DCI equipment)
- **Why important:** GLW thesis is currently at revenue-mix forward model — under-grounded at meters/campus level

### 6. CoWoS substrate layer count / current → CoWoS-L next gen
- **Status:** queued
- **Seed source needed:** Substrate layer count per CoWoS package; Ibiden vs Shinko vs Korea Circuit market shares
- **Affected names:** Ibiden (5938.T — no position), Shinko Electric (6967.T — no position), AT&S
- **Cross-correlation:** All HBM4 thesis names; TSM CoWoS capacity
- **Why important:** Currently no held position — could surface a new active candidate

### 7. Liquid-cooling capacity per Rubin rack
- **Status:** queued
- **Seed source needed:** kW per rack cooling requirement Rubin vs GB200, CDU adoption rates, fluid-volume per rack
- **Affected names:** VRT (watchlist), Modine, Boyd, Asetek, CoolIT (private)
- **Cross-correlation:** Power scenario S3 alignment; BE (on-site power deployment angle)

### 8. EUV layer count per AI logic die / current node → next node
- **Status:** queued
- **Seed source needed:** EUV layer count delta from N3 → N2 → A16 for hyperscaler logic
- **Affected names:** ASML (no position), Tokyo Electron, KLA, Applied Materials
- **Cross-correlation:** All advanced-node names; HBM4 logic die context

### 9. Optical engines per switch / Tomahawk 5 → Tomahawk 6 / Spectrum-X
- **Status:** queued
- **Seed source needed:** Per-switch optical engine count delta as CPO replaces pluggable
- **Affected names:** AVGO, NVDA, MRVL, AXTI (substrate), AIXTRON (equipment), Lumentum, Coherent
- **Cross-correlation:** Same cascade as #3

### 10. Probe-card count per AI tape-out
- **Status:** queued
- **Seed source needed:** Probe-card refresh cycle per fab capacity unit; FormFactor + MJC market shares
- **Affected names:** FormFactor (FORM — no position), MJC (Japanese)
- **Cross-correlation:** Test capacity adjacency to Camtek, Onto Innovation, Rigaku

## Completed deep-digs

### #1 — MLCC count per board / GB200 → Rubin
- **Completed:** 2026-05-21
- **Output:** `companies/MURATA/thesis.md` §"BOM-level deep-dig — MLCCs / GB200 → Rubin"
- **Key finding:** ~1.85x MLCC count expansion per Rubin board vs GB200 (~6,500 → ~12,000 MLCCs per the user-shared image 2026-05-21)
- **Cross-cascade names updated/affected:** MURATA (held — thesis enriched), VICR (held — same TDP-doubling mechanism cascades to PMIC count; cross-reference noted in MURATA deep-dig)
- **New candidates surfaced for queue:** Samsung Electro-Mechanics (009150.KS), TDK (6762.T), Vishay (VSH) as secondary AI-MLCC beneficiaries; KEMET/Yageo polymer-cap angle; AVX/Kyocera substitution risk
- **Source-tier:** seed image (T2-equivalent SemiAnalysis-style content) + triangulating WebSearch confirmation + Digitimes (T3) supply-response data + TrendForce (T3) pricing data = adequate for thesis-level conviction
- **Quality bar met:** ✓ ≥2 sources for BOM counts (image + WebSearch); ✓ supplier capacity response triangulated (Murata + Samsung EM separately); ✓ ≥3 tickers in cascade (MURATA, VICR, plus secondaries TDK/Samsung EM/VSH); ✓ named LOSERS (consumer OEMs, lower-end MLCC vendors); ✓ specific falsifiers

## How to use this queue

**User says "deep dig":**
- I pick rank #1 un-completed item from above
- Run Workflow 8 (DEEP-DIG) per CLAUDE.md §8
- Move completed item to "## Completed" section with output file links
- Add new candidates surfaced during research

**User says "deep dig: X" (target hint):**
- I find the matching queue item (or add it if missing)
- Run Workflow 8 on the named target
- Same housekeeping

**Adding new candidates:**
- New surface-able components get added to queue with seed-source requirements
- Tagged with affected held names + cross-correlation reach
- Priority assigned by criteria above

## Source-availability notes (open-web reality)

The hardest part of DEEP-DIG is finding bottoms-up unit-count numbers in the open web. Best primary sources I've found accessible:

- **Component teardown reports** — sometimes re-cited in trade press
- **Supplier earnings calls** — Murata, TDK, Samsung Electro-Mechanics IR materials
- **Trade press triangulation** — DigiTimes, TrendForce, Semiconductor Today, Globe and Mail
- **Sell-side notes via paid press** — Mirae Asset Securities, Daiwa, Korean broker reports often re-cited
- **Korean/Japanese sources** — DealSite, ETNews, Nikkei Asia, Nikkei Electronics (English available)
- **Image-shared seed numbers from user** — most reliable for SemiAnalysis-tier paid content (e.g., the MLCC image 2026-05-21)

Source gaps to flag: when WebFetch returns 403 on key sources (passive-components.eu PDFs, intuitionlabs.ai, digitimes paywalled), state explicitly in the deep-dig output — don't fabricate to fill.


## 2026-06-11 queue updates (CoPoS verification)
- IBIDEN dissection (existing queue item): priority RAISED — ABF bear-case inverted at T1 (glass core carries ABF build-up both sides; film area per package rises). Largest structural objection to TIER S removed.
- NEW candidate: CoPoS glass-core supply chain BOM-level dig (glass panel $/package, TGV cost/via, ABF area multiplier organic-core vs glass-core) — trigger: TSMC glass-core commit signal OR Absolics MP confirmation end-2026.
