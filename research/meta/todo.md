# To-Do — AI Sector Research OS

**Last updated:** 2026-05-21 (post-DEEP-DIG infrastructure cleanup)
**Optimizes for:** rate at which signals become defensible, falsifiable, investable conviction earlier than consensus (per `meta/methodology.md` §Meta-First-Principle).

**SessionStart hook sort order:** P0 → P1 → P2 → P3, within priority: artifact-producing > process, within ties: tag count desc, then date asc.

**Tags** (from methodology.md): AF anti-fragility | BOT bottleneck-of-tomorrow | POS portfolio coherence | CAL calibration | INDP independence | INFRA harness infrastructure.

**Done item handling:** Items that produced a permanent artifact (thesis file, wiki entry, prediction, hook) get DELETED. Items that are process steps without an artifact get archived in `## Archive` so future Claude doesn't redo them.

**Parallel queue:** `meta/deep-dig-queue.md` tracks BOM-level component drills (Workflow 8 / DEEP-DIG). Not duplicated here — that queue runs on its own ranking criteria.

---

## Open

### P2 — Medium priority

- [ ] **P2 / verification / 2026-05-22** [CAL] — Stock-reaction grade for NVDA Q1 FY27 (T+24h follow-up)
  - Origin: Two-Part GRADE Protocol added 2026-05-21. Same-day stock action (after-hours) is not conclusive. Revisit at T+24h+.
  - Scope: Run the 5 stock-reaction questions (per `meta/methodology.md` §Two-Part GRADE Protocol) against settled stock action 2026-05-21 cash session and pre-market 2026-05-22. Update `predictions/2026-05-20-NVDA-Q1FY27-GRADE.md` with the T+24h section.
  - Linked: `research/predictions/2026-05-20-NVDA-Q1FY27-GRADE.md`

- [ ] **P2 / verification / 2026-05-20** [INDP, CAL] — Source-reliability track-record audit
  - Origin: User input 2026-05-20.
  - Scope: For each of the 8+ sources in the audit queue in `meta/source-reliability.md`, pick 3–5 past specific claims, check what happened, score materialization, annotate the source ledger with track record. Repeat monthly for sources we rely on heavily.
  - Linked: `research/meta/source-reliability.md`

- [ ] **P2 / verification / 2026-05-20** [INDP] — Re-verify VICR 2nd gen VPD technical specs at primary source
  - Origin: VICR thesis cited BeyondSPX (T4) for 5 A/mm² density + 24× current gain — should be verified at Vicor product page or technical paper.
  - Scope: Find Vicor's own technical disclosure. Confirm the specs. Update `companies/VICR/facts.md` with primary source.
  - **Elevated relevance (2026-05-21):** MLCC deep-dig surfaced that the same Rubin TDP-doubling mechanism driving MLCC count expansion (per `companies/MURATA/thesis.md` BOM-level section) also cascades to PMIC count expansion. VICR's WAIT-not-enter framing depends on next-gen design wins — primary-source spec verification becomes more material as Rubin spec sheet matures.
  - Linked: `companies/VICR/facts.md`, `companies/VICR/thesis.md`, `companies/MURATA/thesis.md` §BOM-level deep-dig

### P3 — Lower priority (additional thesis candidates)

- [ ] **P3 / research / 2026-05-21** [POS, AF, BOT] — Power equipment thesis files (GEV, ETN, HUBB, POWL, VRT)
  - Origin: `research/wiki/power-for-ai-primer.md` Tier 2 + Tier 3 names not yet thesis-built
  - Scope: Compact thesis for each (GE Vernova, Eaton, Hubbell, Powell, Vertiv)
  - Priority: lower because power consensus names (VST, CEG) already covered

- [ ] **P3 / research / 2026-05-21** [POS] — Storage/data candidates from cascade walk
  - Origin: `research/watchlist/candidates.md` cascade walk additions
  - Scope: Compact theses for PSTG, NTAP, ESTC, CFLT, TEAM
  - Priority: lower because Sandisk (held) already covers core storage angle

- [ ] **P3 / research / 2026-05-21** [POS, AF, BOT] — Smaller Aschenbrenner-surfaced names
  - Origin: Aschenbrenner Q1 2026 13F includes Bitfarms ($38.8M), HIVE Digital, Bitdeer, Sharon AI Holdings (sizes not disclosed in primary)
  - Scope: Compact theses if user prioritizes (currently CORZ/IREN/APLD/CRWV cover the larger pivots)

### P3 — Foundational wiki entries (planned, not yet built)

**Depth standard:** All wiki entries below must meet `meta/methodology.md` core principle #12 (default BELOW revenue mix). Revenue-mix summaries are insufficient — each wiki must include BOM-level unit counts, current-gen → next-gen deltas where applicable, and supplier capacity-response data. See B15 in `biases-watchlist.md`.

- [ ] **P3 / wiki / 2026-05-21** [INFRA] — Hyperscaler capex primer
  - Scope: How to read MSFT/GOOG/META/AMZN/ORCL capex disclosures; segment definitions; ROIC implications. **BOM-depth requirement:** include dollars-per-GW deployed at current vs next-gen rack densities, not just headline capex numbers.

- [ ] **P3 / wiki / 2026-05-21** [INFRA] — Networking primer
  - Scope: Ethernet vs InfiniBand vs NVLink vs proprietary fabrics; ANET / MRVL / NVDA Spectrum-X. **BOM-depth requirement:** optical engines per switch SKU at current vs next-gen Tomahawk / Spectrum tiers; per-port content delta. Aligns with deep-dig queue item #9.

- [ ] **P3 / wiki / 2026-05-21** [INFRA] — Geopolitical AI primer
  - Scope: US-China tech war, export controls, allowed/restricted lists, Taiwan dependence. **BOM-depth requirement:** wafer-volume by node × geography; specific HSCD-controlled items; substitution paths.

- [ ] **P3 / wiki / 2026-05-21** [INFRA] — Model economics primer
  - Scope: Training vs inference cost structures, scaling laws state of art, MoE adoption math. **BOM-depth requirement:** GPU-hours per token at current vs next-gen architectures; KV cache memory footprint deltas; inference unit-cost trajectory.

---

## Archive (completed process items without permanent artifact)

(Items that DID produce a permanent artifact are deleted — the artifact replaces the to-do. The artifact location is noted in case future Claude needs to find it.)

- [x] **2026-05-20** [INFRA] — Build anti-fabrication Stop hook
  - Completed: 2026-05-20
  - Artifact: `~/.claude/anti-fabrication-hook.py` + `~/.claude/settings.json` registration

- [x] **2026-05-20** [INFRA] — Build the AI sector research operating system
  - Completed: 2026-05-20
  - Artifact: entire `research/` folder with CLAUDE.md harness, sector files, causal maps, predictions, meta files

- [x] **2026-05-20** [INDP] — Migrate NVDA prediction v1 (aggregation) to v2 (bottoms-up)
  - Completed: 2026-05-20
  - Artifact: `research/predictions/2026-05-20-NVDA-Q1FY27.md` + lesson L1 in `lessons.md`

- [x] **2026-05-20** [POS] — Pass 1 portfolio coherence audit from user screenshot
  - Completed: 2026-05-20
  - Artifact: `research/portfolio/coherence-audit.md` + `holdings.md`

- [x] **2026-05-20** [BOT, INFRA] — Build Time-to-X framework (genericized from time-to-power)
  - Completed: 2026-05-20
  - Artifact: `research/meta/time-to-x-framework.md`

- [x] **2026-05-20** [INFRA, BOT] — HBM primer
  - Artifact: `research/wiki/hbm-primer.md`

- [x] **2026-05-20** [INFRA] — Token consumption wiki primer
  - Artifact: `research/wiki/token-consumption.md`

- [x] **2026-05-20** [INFRA, POS] — Agentic AI enterprise wiki primer
  - Artifact: `research/wiki/agentic-ai-enterprise.md`

- [x] **2026-05-21** [INFRA, BOT, AF] — Agentic workload scaling wiki
  - Artifact: `research/wiki/agentic-workload-scaling.md`

- [x] **2026-05-21** [INFRA, BOT] — Power-for-AI primer
  - Artifact: `research/wiki/power-for-ai-primer.md`

- [x] **2026-05-21** [INFRA, BOT] — Optical interconnect primer
  - Artifact: `research/wiki/optical-interconnect-primer.md`

- [x] **2026-05-21** [INFRA, BOT] — Custom silicon primer
  - Artifact: `research/wiki/custom-silicon-primer.md`

- [x] **2026-05-21** [INFRA] — Forward synthesis (where-im-going.md)
  - Artifact: `research/sector/where-im-going.md`

- [x] **2026-05-21** [POS] — T1 Energy vs Bloom Energy comparison
  - Artifact: `research/sector/t1-energy-vs-bloom-energy-comparison.md`

- [x] **2026-05-20** [CAL] — NVDA Q1 FY27 fundamental GRADE
  - Artifact: `research/predictions/2026-05-20-NVDA-Q1FY27-GRADE.md` + L4 in lessons.md

- [x] **2026-05-21** [POS] — All 11 user-held position thesis files built
  - Artifacts: `companies/{HYNIX, MURATA, NOW, GLW, SNDK, TE, DDOG, STM, PURR, TSEM, AXTI}/thesis.md`

- [x] **2026-05-21** [POS, AF, BOT] — All major watchlist thesis files built
  - Artifacts: `companies/{AVGO, AMZN, BE, MRVL, NBIS, ALAB, GOOG, CORZ, IREN, APLD, CRWV, VST, CEG, CAMT, RMBS, VICR, NVDA, AIXTRON, RIGAKU, SMTC}/thesis.md`

- [x] **2026-05-21** [INFRA, BOT, INDP] — Build DEEP-DIG workflow (default below revenue mix)
  - Origin: User feedback 2026-05-21 after MLCC SemiAnalysis-style image — "stop focusing on a high level that most analysts do, which is look at the revenue mix. Like, that's quite superficial."
  - Artifacts: `research/CLAUDE.md` §Workflow 8 (DEEP-DIG); `research/meta/biases-watchlist.md` B15 (revenue-mix-anchoring); `research/meta/methodology.md` core principle #12 (default below revenue mix); `research/meta/deep-dig-queue.md` (NEW — 10-item ranked queue of BOM-level component drills)

- [x] **2026-05-21** [INFRA, BOT] — Run first DEEP-DIG worked example: MLCCs / GB200 → Rubin
  - Origin: First execution of Workflow 8; seeded by user-shared image with 6,500 → ~12,000 MLCCs per board.
  - Artifact: `research/companies/MURATA/thesis.md` §BOM-level deep-dig — full cross-stack cascade table, supplier capacity-response triangulation (Murata + Samsung EM + price hikes), named bypass-route losers (consumer OEMs Apple/Samsung Mobile/Xiaomi; lower-end MLCC vendors Yageo/Walsin), cross-cascade to VICR via shared Rubin TDP-doubling mechanism, specific falsifiers
  - Queue status: item #1 marked complete in `meta/deep-dig-queue.md`; items #2-#10 remain

- [x] **2026-05-21** [INDP, BOT] — Dylan Patel "2-3x more memory pricing" source-citation + thesis deep dive + Aschenbrenner comparison
  - Origin: User-reported podcast claim 2026-05-20 (was P1 open item); user requested 2026-05-21 deep dive + Aschenbrenner comparison
  - Artifact: `research/meta/patel-vs-aschenbrenner-thesis-comparison.md` — full thesis comparison + verified Patel claim sourcing (DRAM "double or triple" per [24/7 Wall St 2026-04-23](https://247wallst.com/personal-finance/2026/04/23/dram-will-double-or-triple-from-here-as-ai-demand-outpaces-supply-chain-capacity/))
  - Side-effect: `research/meta/source-reliability.md` updated with verified Patel track record including resolved memory-pricing claim and 4 additional triangulated claims

- [x] **2026-05-21** [INFRA, BOT, INDP] — Build cascade-enforcement Stop hook (B16 → hook)
  - Origin: User insight 2026-05-21 — "instructions are choices; hooks are enforced." After B16 (synthesis-without-cascade) was caught, the cascade discipline needed deterministic enforcement.
  - Artifact: `~/.claude/cascade-enforcement-hook.py` + `~/.claude/settings.json` registration + `research/meta/hooks/` repo mirror + `research/meta/hooks/README.md`
  - Testing: 5 test cases passed (baseline, deliberate violation, restore, JSON stdin, recursion guard)

- [x] **2026-05-21** [INFRA, BOT] — Memory cycle wiki primer with BOM-level depth
  - Origin: P3 wiki entry per `meta/methodology.md` core principle #12 (default below revenue mix)
  - Artifact: `research/wiki/memory-cycle-primer.md` — DRAM/HBM/NAND cycle dynamics + per-stack ASP/GB economics + crowding-out math + supplier capacity timeline through 2028
  - Cascade: HYNIX, SNDK, MURATA thesis files updated with cross-references per CLAUDE.md Rule #10 (cascade-enforcement hook verified exit 0)
  - Side-effect: cascade-enforcement hook updated to include `research/wiki/*-primer.md` + `research/wiki/*-scaling.md` patterns

## How to use this file

**Adding items:**
- New work that surfaces during conversation → add to appropriate priority bucket
- Tag with ≥1 optimization tag (AF / BOT / POS / CAL / INDP / INFRA)
- Specify origin, scope, linked target file(s)

**Completing items:**
- If the work produced a permanent artifact (file): DELETE the to-do (the file is the record)
- If the work was a process step without a clear artifact: MOVE to `## Archive` with `[x]` and completion date
- Update in the same commit that produces the artifact

**Reading items:**
- SessionStart hook auto-surfaces top 5 + any P0 at every session start
- User can ask "what's on the to-do list" anytime; I read this file
