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

## 2026-06-15 PM queue updates (TSMC PLP / CoPoS ETNews 2-subagent verification)

Per `signals/cross-source-log/2026-06-15-pm-tsmc-plp-etnews-2subagent-verification-tc5-cascade.md`:

- **IBIDEN dissection priority RAISED AGAIN (TIER S+).** TC-5 cluster expansion REINFORCES the cluster-level thesis BUT Subagent B independently surfaced a NEW dissection vector: IBIDEN's disclosed ¥500B FY26-28 capex is FC-BGA ORGANIC, not glass-core. As Absolics/SKC (end-2026 MP, AMD+AWS named), NEG 5214.T (515×510mm GC Core), and SEMCO (2027 MP Apple+Broadcom samples) commercialize glass-core substrate at scale, the organic-to-glass transition is a medium-term moat risk to IBIDEN's substrate franchise. Dissection now needs explicit treatment: does IBIDEN have a glass-core substrate roadmap, or is the ¥500B all organic-BT FC-BGA? This is the question that gates entry-decision quality.
- **CoPoS glass-core BOM-level supply-chain dig — substantially answered at supplier-mapping layer by Subagent B 2026-06-15 PM** (Camtek Golden Eagle 600-650mm inspection; BESI format-agnostic die-attach; NEG 515×510mm GC Core + TGV; Absolics 1.2T won raise with AMD+AWS pre-qual; ASE-TSMC PLP co-dev). What remains for the formal DEEP-DIG: glass-panel $/package vs organic-substrate $/package, TGV cost-per-via, ABF area multiplier organic-core vs glass-core. Trigger for full DEEP-DIG: TSMC T1 disclosure naming first PLP customer OR Absolics MP confirmation end-2026.
- **NEW candidate: TSMC PLP customer-identity verification** — currently NVDA Feynman per Kuo analyst-T3 single-source. Trigger to formal investigation: any T1 TSMC disclosure naming a CoPoS / PLP customer (could come at TSMC AGM, technical conference, or supplier disclosures); could materially shift IBIDEN, CAMT, BESI, NEG sizing reads.

## 2026-06-17 AM7 queue updates (Sovereign-AI cohort deep-dig promotion)

Per `signals/cross-source-log/2026-06-17-am7-nbis-uk-deal-deep-verification-sovereign-ai-stack-9layer-5archetype-pc14-n3-asia-promotion.md` + user explicit request 2026-06-17 PM to deep-dive each new sovereign-AI watchlist name:

### NEW DEEP-DIG QUEUE ENTRIES — Sovereign-AI cohort (PC-14 N=3+ thematic)

Rank order per binding-constraint proximity + thesis-depth-gap + cross-correlation reach + source availability:

1. **NBIS (Nebius Group) — RANK #1 — WL-ADD P2 promoted 2026-06-17 AM7**
   - Trigger: NBIS WL-ADD P2 sizing decision needs BOM-level unit economics + per-MW $/GPU cost build + competitive Δ vs CoreWeave/AWS/Azure/GCP
   - Source seed: NBIS Q1 2026 6-K SEC filing + Q2 2026 print (Aug 2026 expected)
   - Cross-correlation: NVDA (~8.3% NBIS stake), MRVL (custom-Si for sovereign neoclouds), HYNIX (HBM for NBIS GPU clusters)
   - Specific dig vectors: (a) £1.7B CapEx breakdown per UK site; (b) revenue per MW utilization assumptions; (c) Nasdaq-100 inclusion mechanical-buy quantification; (d) DSIT AIRR tender NBIS-winning probability mapping (see PART 3 below)

2. **OVHcloud (Euronext OVH) — RANK #2 — French sovereign cloud + Mistral distribution**
   - Trigger: Archetype C N+1 thesis (France civilian gov IT migration) makes OVH a candidate for €700K Mistral contract distribution + future scale-out
   - Source seed: OVHcloud H1 FY26 results + Mistral integration disclosure
   - Cross-correlation: NBIS (competitor in EU sovereign cloud), DDOG (observability complement), NOW (US-domicile risk class contrast)
   - Specific dig vectors: (a) France public sector revenue concentration; (b) data-center utilization vs CapEx capacity; (c) AI-specific GPU cloud revenue trajectory; (d) Mistral distribution exclusivity vs Scaleway/STACKIT competition

3. **Capgemini (Euronext CAP) — RANK #3 — EU sovereign AI system integrator**
   - Trigger: Archetype C N+1 implementation channel for France 1M civil servant Mistral rollout + Aleph Alpha PhariaAI Germany federal ministry deployment
   - Source seed: Capgemini FY25 + Q1 FY26 results; AI services revenue disclosure
   - Cross-correlation: NOW (US-domicile risk class), DDOG (governance observability complement)
   - Specific dig vectors: (a) gov + EU institutional services revenue breakdown; (b) AI services backlog vs total; (c) Mistral / Cohere-Aleph Alpha / Sakana integration partnership disclosures; (d) EU AI Act compliance consulting recurring-revenue trajectory

4. **SK Telecom ADR (NYSE SKM) — RANK #4 — Korean sovereign AI cornerstone**
   - Trigger: Korea AI Basic Act IN FORCE Jan 2026 (BINDING) + $735B sovereign AI initiative; SKT designated GPU infra provider + A.X K1 519B-param model owner
   - Source seed: SKT Q1 2026 print + Korea Ministry of Science and ICT procurement announcements
   - Cross-correlation: HYNIX (Korean HBM supply chain), MRVL (custom-Si)
   - Specific dig vectors: (a) Korea gov GPU infra contract value; (b) A.X K1 commercial deployment scope; (c) sovereign AI initiative $735B SKT attribution; (d) "AI for Everyone" consortium status (5→4→2 by 2027); (e) dividend yield + AI growth combined return profile

5. **🔴 NTT Inc. (TSE: 9432) — RANK #5 — CORRECTED 2026-06-17 AM7c** (per `signals/cross-source-log/2026-06-17-am7c-...md` Subagent verification — was NTT Data 9613.T which DELISTED 2025-09-26; 3850.T = NTT Data Intramart BPM subsidiary, wrong instrument; user-flagged catch)
   - Trigger: Japan 2026 AI Basic Plan + ABCI 3.0 + Sakana AI ecosystem; NTT Data government IT contracts now wholly within NTT Inc. private subsidiary; 9432.T = listed proxy with Japanese gov 34.25% ownership
   - **🔴 Critical pre-entry diligence:** 9432 is CONGLOMERATE (telecom + NTT Data + IOWN + Docomo); sovereign-AI exposure DILUTED within ¥14.41 trillion FY2026 total revenue — multi-segment dilution check MANDATORY per Principle #22; analogous to TDK 6762 SIDECAR DEMOTE pattern (AM2 verification) — risk that NTT 9432 fails L26 pure-play test
   - Source seed: NTT Inc. Q1 FY27 IR (post-acquisition consolidated results); Japan METI procurement disclosures; NTT IOWN strategy disclosures
   - Cross-correlation: KIOXIA (Japan sovereign storage), SUMCO (Japan wafer), MURATA (Japan electronics adjacent), Sakana AI (Japan foundation model)
   - Specific dig vectors: (a) sovereign-AI / NTT Data subsidiary contribution to consolidated revenue (L26 % at parent-co); (b) IOWN photonics network sovereign-AI infra exposure; (c) Japan government revenue concentration; (d) Sakana AI / GENIAC partnership status; (e) Japanese gov 34.25% ownership as bull-case sovereign-protected status anchor
   - **L27 enrichment candidate flagged for June 24 audit:** AM7 watchlist added 9613.T without applying live-listing verification at watchlist-add granularity; rule should extend verify-listed-status discipline from sizing-decision-time to watchlist-add-time; user catch via ticker-disambiguation surfaced this gap

### Pre-IPO watch deep-dive queue (no listed shares; track for IPO event)

6. **Mistral AI (private, France)** — IPO pathway watch; 1M French civil servant deployment; $830M Bruyères-le-Châtel DC debt; would be Archetype C foundation-model pure-play if listed
7. **Cohere-Aleph Alpha (private, post-merger $20B April 2026)** — first publicly-listed transatlantic sovereign AI pure-play if IPO; serves DE/CA + potentially UK/AU
8. **Sakana AI (private, Japan; $135M Series B / $2.65B val Nov 2025)** — METI/NEDO backed; Physical AI focus

### Trigger for full DEEP-DIG (Workflow #8) execution on these names

User says "deep dig: NBIS" or "deep dig: OVH" or any specific name → execute Workflow #8 with the source seeds + cross-correlation map + specific dig vectors above. NBIS is highest-priority given pending position decision; OVH/CAP/SKM/NTT Data are research-only at watchlist stage (no pending sizing decisions).
