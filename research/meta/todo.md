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

- [x] **P2 / verification / 2026-05-22** [CAL] — Stock-reaction grade for NVDA Q1 FY27 (T+24h follow-up) — CLOSED 2026-05-25 per user framing: "resolve purely on numbers, not stock movements because price depends on macro." Numerical grade stands at HIT direction on all 5 axes (revenue/EPS within 0.5%; biggest miss UNDERCALLED Q2 guide by $2.5B because of historical sandbag heuristic that doesn't fit multi-year-contracted-demand environments, per lesson L4). See `predictions/2026-05-20-NVDA-Q1FY27-GRADE.md` final section.

- [ ] **P3 / verification / 2026-06-24** [INDP, CAL] — Claim-verification audit cycle (replaces source-reliability audit per principle #23, codified 2026-05-24)
  - Origin: User correction 2026-05-24 after TrendForce HBF debacle. Bias B25 (source-tracking-over-claim-verification) identified. Source-reliability tracking is sample-size dependent; claim-level orthogonal verification is the actual epistemic discipline.
  - Scope: Sample N recent claims (target: 15) across thesis files + signals + wiki entries committed in the prior 30 days. For each, verify: (a) the claim's first-order assertion is stripped of interpretation, (b) at least one orthogonal corroboration was logged at ingest (different data-generation process), (c) single-source claims correctly went to `cross-source-log.md` not to thesis files. Flag failures in `harness observations` log (`sector/where-we-are.md`).
  - Also: re-audit the 6 sources still in the source-reliability queue (MLQ.ai, Sacra, Fortune, Photoncap, TweakTown, The Razor's Edge) — BUT use the claim-verification framing, not source-track-record framing. Output: for each source, sample 3 representative claims and check whether each had orthogonal corroboration at time of citation.
  - Linked: `research/meta/methodology.md` principle #23, `research/meta/biases-watchlist.md` B25, `research/meta/source-reliability.md` (legacy tracker; keep for cross-reference but no longer primary)


### P3 — Foundational wiki entries (planned, not yet built)

**Depth standard:** All wiki entries below must meet `meta/methodology.md` core principle #12 (default BELOW revenue mix). Revenue-mix summaries are insufficient — each wiki must include BOM-level unit counts, current-gen → next-gen deltas where applicable, and supplier capacity-response data. See B15 in `biases-watchlist.md`.

- [ ] **P3 / wiki / 2026-05-21** [INFRA] — Hyperscaler capex primer
  - Scope: How to read MSFT/GOOG/META/AMZN/ORCL capex disclosures; segment definitions; ROIC implications. **BOM-depth requirement:** include dollars-per-GW deployed at current vs next-gen rack densities, not just headline capex numbers.


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

- [x] **2026-05-21** [POS, AF, BOT] — All P3 research thesis files built (14 names across 3 groups)
  - **Power equipment (5):** `companies/{GEV, ETN, HUBB, POWL, VRT}/thesis.md` — Tier 2+3 power names from `wiki/power-for-ai-primer.md`
  - **Storage/data candidates (5):** `companies/{PSTG, NTAP, ESTC, CFLT, TEAM}/thesis.md` — cascade-walk additions. CFLT flagged as IBM merger-arb only ($31/share takeout pending mid-2026)
  - **Smaller Aschenbrenner-surfaced (4):** `companies/{BITF, HIVE, BTDR, SHAZ}/thesis.md` — Bitfarms, HIVE Digital, Bitdeer, SharonAI from Q1 2026 13F. BTDR highest conviction (Tydal 180 MW for Rubin co-lo); SHAZ highest asymmetry (newly public Feb 2026)

- [x] **2026-05-21** [INFRA, INDP] — Anti-fabrication hook calibration (repo-grounding check)
  - Origin: User insight 2026-05-21 — chat summaries of properly-cited file content shouldn't burn turns on hook violations. Files = source of truth.
  - Artifact: `~/.claude/anti-fabrication-hook.py` updated + `research/meta/hooks/anti-fabrication-hook.py` mirror + CLAUDE.md Critical Rule #7 expanded + biases-watchlist.md B11.a calibration documented
  - Test cases: 5 passing (grounded numbers pass silently; fabrications still blocked)

- [x] **2026-05-21** [INDP, CAL] — Source-reliability framework expansion + first-pass audit (10 sources)
  - Origin: User calibration 2026-05-21 — "source reliability has reasoning impact, not just portfolio decision impact. Reliable = green flag amplifier, unreliable = red flag discount or potentially contrarian signal."
  - Artifact: `research/meta/source-reliability.md` rewritten with 5-dimensional framework (tier + track record + bias direction + signal-use 🟢/🟡/🔴/🟣 + best/worst use case)
  - Sources audited: SemiAnalysis 🟢, Aschenbrenner 🟢, WSJ/Bloomberg 🟢, Sherwood News 🟢 (with COI flag), TrendForce 🟢 (memory-specific), Digitimes 🟡 (predictive vs factual), Tom's Hardware 🟢/🟡, Benzinga 🟢, TradingKey 🟡, 24/7 Wall St 🟡/🔴, Motley Fool 🟢 (transcripts only), BeyondSPX 🟡, WCCFTech 🔴
  - Monthly cadence item created for remaining 6 sources

- [x] **2026-05-21** [INFRA, INDP] — Date-aware SessionStart hook + recurring-audit-log + GitHub Action reminder
  - Origin: User request 2026-05-21 — "ensure the source-reliability monthly audit happens; remind me; update me if done while I'm away"
  - Artifacts: `~/.claude/session-start-hook.py` (date-aware elevation with 🚨/⏰/📅 markers) + `research/meta/recurring-audit-log.md` (autonomous-completion trail) + `.github/workflows/recurring-audit-reminder.yml` + `.github/scripts/check-recurring-todos.py` (weekly cron, creates GitHub issue when items DUE/OVERDUE) + `research/meta/hooks/` mirror
  - Tested with mocked dates: all three states (DUE_TODAY, OVERDUE, DUE_SOON) elevate correctly

- [x] **2026-05-21** [INFRA, BOT, INDP] — Networking primer with first-principles + extrapolation framework
  - Origin: P3 wiki entry + user calibration 2026-05-21 — "everything should start from first principles, build a layered understanding of the most critical components, then use first principles to extrapolate patterns humans haven't found"
  - Artifact: `research/wiki/networking-primer.md` — 8 sub-layers decomposed, generational deltas (51.2T→102.4T switch + 8→16 optical engines per switch), 10 non-consensus extrapolations including DPU-as-mandatory layer, NVLink scale-up moat structural durability, Ultra Ethernet threat to NVDA InfiniBand revenue, switch liquid cooling cascade, network spend as % of compute rising not flat
  - Cascade: 8 thesis files updated with back-references (AIXTRON, AVGO, AXTI, GLW, HYNIX, MRVL, SMTC, VRT) per Rule #10; cascade hook verified exit 0
  - Side-effect: `meta/methodology.md` core principle #13 added — "First-principles + layered + extrapolation discipline on every wiki" with explicit structure requirement (first principles → sub-layer decomposition → generational deltas → ≥5 extrapolations → cross-stack cascade → falsifiers)

- [x] **2026-05-21** [INDP] — Re-verify VICR 2nd gen VPD specs at primary source
  - Origin: BeyondSPX (T4) had previously been the only source for "5 A/mm² + 24× current gain" claim
  - Finding: BeyondSPX numbers DISPROVEN. Vicor CEO Vinciarelli on Q1 2026 earnings call (2026-04-21) disclosed 3 A/mm² + 40× current multiplication (NOT 5 A/mm² + 24× current gain). Triangulated across Investing.com transcript, Insider Monkey transcript, Photoncap synthesis of call.
  - Artifacts updated: `companies/VICR/facts.md` (primary-source section added), `companies/VICR/thesis.md` (bull case section corrected with verified numbers), `meta/source-reliability.md` (BeyondSPX downgraded to 🔴 RED FLAG for specific technical claims after confirmed inaccuracy)
  - Lead customer identified as Cerebras (wafer-scale-engine framing from call); narrows hyperscaler/NVDA design-win argument

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
