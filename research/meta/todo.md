# To-Do — AI Sector Research OS

**Last updated:** 2026-05-29 (cleanup: SUPERSEDED Principle #32 audit removed; closed NVDA stock-reaction item archived; Schwab item formatting fixed)
**Optimizes for:** rate at which signals become defensible, falsifiable, investable conviction earlier than consensus (per `meta/methodology.md` §Meta-First-Principle).

**SessionStart hook sort order:** P0 → P1 → P2 → P3, within priority: artifact-producing > process, within ties: tag count desc, then date asc.

**Tags** (from methodology.md): AF anti-fragility | BOT bottleneck-of-tomorrow | POS portfolio coherence | CAL calibration | INDP independence | INFRA harness infrastructure.

**Done item handling:** Items that produced a permanent artifact (thesis file, wiki entry, prediction, hook) get DELETED. Items that are process steps without an artifact get archived in `## Archive` so future Claude doesn't redo them.

**Parallel queue:** `meta/deep-dig-queue.md` tracks BOM-level component drills (Workflow 8 / DEEP-DIG). Not duplicated here — that queue runs on its own ranking criteria.

---

## Open

### P1 — High priority (next session — added 2026-05-28 end of session)

(none currently — ESTC and 4092 closed/archived 2026-05-29 per audit)

### P2 — Medium priority

- [ ] **P2 / verification / 2026-05-28** [CAL, INDP] — L14 candidate N=2 validation watch (next eligible Stage 2-3 + CATEGORY EVENT case)
  - Origin: 2026-05-28 4-data-point same-day cohort (SNOW +37.65%, MDB +20%, NTAP +10%, ESTC -10.9%, MRVL -1.96% prior) produced refined framework distinguishing HIGH-CONCRETE / LOW-CONCRETE / TREND / REVERSE-CATEGORY events. But same-day cohort = mostly coincident (possible common-cause AI rerating wave); needs independent N=2+ across different days/events.
  - **Update 2026-05-29**: NTAP Q4 FY26 print added as N=3 application (LOW-CONCRETE + Stage 3-4 + 10% reaction = framework match). HPE Q2 FY26 prediction (resolution 2026-06-01) is the next independent cross-day validation point.
  - Scope: monitor next earnings cycle for Stage 2-3 names with potential CATEGORY EVENT markers (signed strategic deal, metric baseline-break, mgmt narrative shift to leading indicators). When found, run PREDICT with explicit L14 application; resolve at GRADE to validate or falsify magnitude calibration. If 2+ independent cases validate framework → codify L14 at next monthly audit 2026-06-24. If 2+ falsify → retire to candidate-archive.
  - Linked: `predictions/lessons.md` L14 candidate; `predictions/2026-05-29-HPE-Q2FY26.md` (next test point); `companies/NTAP/thesis.md` (N=3 application logged)

### P2 — Existing items

- [ ] **P3 / verification / 2026-06-24** [CAL, INDP, AF] — CONSOLIDATED Monthly Audit Cycle (FIRST CYCLE — merged 3 audits per user 2026-05-29)
  - **CONSOLIDATION NOTE 2026-05-29**: Previously 3 separate June 24 items (codification audit + claim-verification audit + Principle #34/B38 monitoring). User-directed merge into single audit per "doesn't make sense to have it three times."
  - **PART A — Codification audit** (expanded scope per 2026-05-28): each gets the 3-question test:
    - Principles: #29 (segmented triangulation), #30 (comp-set verification), #31 (narrative-stage modifier), #32 (pre-action checkpoints), #33 (top-down capability decomposition + 2026-05-28 competition-intensity refinement), candidate #34 (Supplier-Side Cross-Layer Moat Decomposition — check for N=2+ validation)
    - Biases: B31 (cross-segment aggregation), B32 (comp-set anchoring at valuation), B33 (narrative-stage-blind sizing), B34 (action without verification or premortem), B35 (within-category aggregation), B36 (visible-user-adoption anchoring when embedded), candidate B38 (demand-side decomposition blind-spot — check for N=2+ validation; promote OR retain candidate OR retire)
    - **3 questions per codification**: (1) APPLIED since codification? (check `principle-applications-log.md` + grep recent commits); (2) if applied → REAL CATCH / FALSE POSITIVE / WASTED OVERHEAD; (3) if NOT applied in 30 days → INERT → retire OR promote to hook
    - **Metrics**: Real-catch rate ≥40%; false-positive <30%; wasted-overhead <30%; net-positive (REAL_CATCHES > WASTED_OVERHEADS over 30 days)
  - **PART B — Claim-verification audit** (per principle #23, codified 2026-05-24 after TrendForce HBF debacle):
    - Sample 15 recent claims from thesis files + signals + wiki entries committed 2026-05-24 to 2026-06-24
    - For each, verify: (a) first-order assertion stripped of interpretation, (b) ≥1 orthogonal corroboration at ingest, (c) single-source claims correctly went to `cross-source-log.md` not thesis files
    - Re-audit 6 sources in legacy reliability queue (MLQ.ai, Sacra, Fortune, Photoncap, TweakTown, The Razor's Edge) using claim-verification framing (sample 3 claims/source; check orthogonal corroboration at citation)
    - Flag failures in `sector/where-we-are.md` harness observations log
  - **PART C — Critical Rule #11 detectability check** (added 2026-05-28):
    - Grep `Position implication:` across thesis files committed 30 days prior
    - Verify VARIED implications (mix of ENTER / HOLD / TRIM / EXIT / NO ACTION); if 5+ identical "HOLD — no size change" → rule decorative; retire or refine
  - **Failure mode the audit protects against**: rapid codification cadence producing ossified text that's never actually applied = the most likely OS-degradation pathway given the recent codification velocity (Principles #29 → #34 + B31 → B38 in <40 days)
  - **Where to document outcome**: `research/meta/principle-applications-log.md` "Monthly audit log" section
  - **Automation verification** (per user request 2026-05-29): 2 mechanisms confirm this will surface on 2026-06-24:
    1. `~/.claude/session-start-hook.py` is date-aware — surfaces with 🚨 OVERDUE / ⏰ DUE TODAY / 📅 DUE SOON markers at top of session briefing if user starts a session that day or after
    2. `.github/workflows/recurring-audit-reminder.yml` runs weekly Monday 9am UTC; creates a GitHub issue when DUE_SOON / DUE_TODAY / OVERDUE fires
  - **Linked**: `meta/methodology.md` (Principles #29-#34), `meta/biases-watchlist.md` (B31-B38), `meta/principle-applications-log.md`, `meta/recurring-audit-log.md`, recent commit log

- [ ] **P2 / verification / 2026-06-15** [INDP, AF] — Schwab June 2026 AI agent launch — triangulation 3rd-data-point candidate
  - Origin: Robinhood + eToro + Moomoo agentic-trading launches Apr-May 2026 (per `signals/events/2026-05-27-robinhood-agentic-trading.md`). Schwab targeting June 2026 per [WealthManagement.com T3](https://www.wealthmanagement.com/ria-news/schwab-makes-ai-push-with-client-facing-agents-to-roll-out-in-june). If 3rd same-segment data point lands, agentic-brokerage promotes to triangulation per principle #29.
  - Scope: verify Schwab launch date + scope + tech stack; if launched, promote agentic-brokerage cluster to triangulation.md; cascade to DDOG (regulatory observability mandate validation) + SNDK (compliance NAND demand validation). Also: apply Principle #33 top-down capability decomposition to Schwab as 2nd application of the framework — validation criterion for the principle.
  - Linked: `signals/events/2026-05-27-robinhood-agentic-trading.md`, `companies/DDOG/thesis.md`, `companies/SNDK/thesis.md`, `meta/methodology.md` principle #33

- [ ] **P2 / research / 2026-06-05** [INDP] — Back-fill China sovereignty cluster TRACE event (verification catch 2026-05-28)
  - Origin: 2026-05-28 verification step caught that `signals/events/2026-05-26-china-ai-sovereignty-cluster.md` does NOT exist despite my session-memory claim. The cluster's prior signals (Huawei LogicFolding May 25 + China talent restrictions May 26 + DeepSeek V4 State AI Fund May 16) exist only as scattered cross-references across ARM thesis + Google I/O event + 13F analysis. Today's "China 9 chips certified" (May 28) signal would be 3rd-4th data point if cluster were properly documented.
  - Scope: (a) Read prior signals from ARM thesis cross-refs, Google I/O event file, 13F analysis to extract verified facts; (b) cross-verify Huawei LogicFolding announcement details + China talent restriction scope via independent T1/T2 sources; (c) consolidate into proper TRACE event file at `signals/events/2026-05-26-china-ai-sovereignty-cluster.md`; (d) IF cluster has 3+ verified same-segment data points within 90 days, promote to `signals/triangulation.md` as 2nd segmented-triangulation entry (advanced-packaging EMIB-T was 1st).
  - **Discipline catch this represents**: per principle #32 + the user's discipline LOOP (spot/fix/monitor), this is a "fix" step that was incomplete on 2026-05-27 — I referenced a TRACE event without committing it. The verification step today caught the gap.
  - Linked: `companies/ARM/thesis.md` (existing cross-refs), `signals/events/2026-05-20-google-io-2026.md`, `meta/2026-05-26-positional-strength-duration.md`, `signals/cross-source-log.md` (today's China 9 chips entry)


### P3 — Foundational wiki entries (planned, not yet built)

**Depth standard:** All wiki entries below must meet `meta/methodology.md` core principle #12 (default BELOW revenue mix). Revenue-mix summaries are insufficient — each wiki must include BOM-level unit counts, current-gen → next-gen deltas where applicable, and supplier capacity-response data. See B15 in `biases-watchlist.md`.

- [ ] **P3 / wiki / 2026-05-21** [INFRA] — Hyperscaler capex primer
  - Scope: How to read MSFT/GOOG/META/AMZN/ORCL capex disclosures; segment definitions; ROIC implications. **BOM-depth requirement:** include dollars-per-GW deployed at current vs next-gen rack densities, not just headline capex numbers.


- [ ] **P3 / wiki / 2026-05-21** [INFRA] — Geopolitical AI primer
  - Scope: US-China tech war, export controls, allowed/restricted lists, Taiwan dependence. **BOM-depth requirement:** wafer-volume by node × geography; specific HSCD-controlled items; substitution paths.

---

## Archive (completed process items without permanent artifact)

(Items that DID produce a permanent artifact are deleted — the artifact replaces the to-do. The artifact location is noted in case future Claude needs to find it.)

- [x] **2026-05-29** [INDP, AF] — ESTC contrarian-asymmetric-opportunity check — CLOSED per artifact production
  - Reason: substantial analysis produced + committed to `companies/ESTC/thesis.md` (Q4 FY26 actuals + temporal anchoring correction on "feature not a business" Aug 2025 quote + L14 framework NEAR-TERM-MISS/LONG-TERM-STRONG-GUIDE classification + position implication CONSIDER ENTER 2-3% pending Q4 FY26 transcript verification). Remaining transcript-pull step is conditional on user decision to act on entry; no longer requires a P1 task slot.
  - Artifact retained: `companies/ESTC/thesis.md` (updated 2026-05-29)

- [x] **2026-05-29** [INDP, AF] — 4092 (Nippon Chemical Industrial) entry-trigger watch — ARCHIVED per investability constraint
  - Reason: Degiro + N26 both lack access to NCI 4092 (user confirmed 2026-05-29). Same pattern as LGI archive 2026-05-28 (KRX inaccessibility). Small/mid-cap Japanese specialty ticker outside platform universe.
  - Artifact retained: `meta/2026-05-26-ath-refresh-and-4092-prediction.md` as reference for BaTiO3 supply chain analysis (status banner added). Alternative investable BaTiO3 candidates: Sakai 4078 + TDK 6762 + Shoei 4953 (Shoei confirmed inaccessible; Sakai/TDK access verification pending).

- [x] **2026-05-29** [INDP, AF, BOT] — Continuous-agent infrastructure category thesis build candidate — CLOSED per artifact production
  - Reason: Substantial sector-level analysis lives in `signals/events/2026-05-28-anthropic-mythos-continuous-agent-infrastructure.md` (continuous-agent infrastructure cascade + fluid-software-mesh thesis + named plays at each layer + falsifiers). 2026-05-29 AWS+Cloudflare infrastructure-rebuild signal (per `signals/cross-source-log/2026-05-29-ai-intelligence-brief-morning.md`) validated the category at hyperscaler-primary level. Decision: TRACE event file serves the analytical purpose; standalone dedicated category-thesis file deferred as redundant.
  - Artifact retained: `signals/events/2026-05-28-anthropic-mythos-continuous-agent-infrastructure.md` + cross-source-log validation

- [x] **2026-05-28** [INDP, AF] — LG Innotek (KRX: 011070) deeper dig — ARCHIVED NOT COMPLETED
  - Reason: User confirmed 2026-05-28 that LGI is not directly investable on either of the platforms they use (KRX direct access not supported; no sponsored ADR available — only unsponsored pink-sheet listings most platforms block). Investability-first discipline: no point completing deeper research on uninvestable name.
  - Artifact retained: `companies/LGINNOTEK/thesis.md` remains as reference for substrate-supplier cross-comparisons (Ibiden / SEMCO / Murata). Status banner added to thesis file.
  - Same investability constraint applies to SEMCO (009150.KS) — flagged in `companies/SEMCO/thesis.md` investability section. SEMCO retained as N=1 origin case for candidate Principle #34 / B38 + as reference artifact for substrate-supplier comparisons.
  - Substrate-supplier exposure now anchored on: Ibiden (4062.T, Japan — accessible via Japan TSE direct or IBDSF/IBDSY pink-sheet ADR depending on platform) + Murata (held, 12.4-16.77%).

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
