# To-Do — AI Sector Research OS

**Last updated:** 2026-05-21 (post-DEEP-DIG infrastructure cleanup)
**Optimizes for:** rate at which signals become defensible, falsifiable, investable conviction earlier than consensus (per `meta/methodology.md` §Meta-First-Principle).

**SessionStart hook sort order:** P0 → P1 → P2 → P3, within priority: artifact-producing > process, within ties: tag count desc, then date asc.

**Tags** (from methodology.md): AF anti-fragility | BOT bottleneck-of-tomorrow | POS portfolio coherence | CAL calibration | INDP independence | INFRA harness infrastructure.

**Done item handling:** Items that produced a permanent artifact (thesis file, wiki entry, prediction, hook) get DELETED. Items that are process steps without an artifact get archived in `## Archive` so future Claude doesn't redo them.

**Parallel queue:** `meta/deep-dig-queue.md` tracks BOM-level component drills (Workflow 8 / DEEP-DIG). Not duplicated here — that queue runs on its own ranking criteria.

---

## Open

### P0 — Critical (next session)

- [ ] **P0 / verification / 2026-05-28** [CAL, INDP] — GRADE Marvell (MRVL) Q1 FY27 earnings prediction (FIRST APPLICATION of Supply-Chain-Cohort Calibration framework)
  - Origin: PREDICT workflow executed 2026-05-27 ahead of MRVL Q1 FY27 print (after market close 2026-05-27). 5 prediction targets logged with cohort-calibrated hedge bands: revenue $2,470M point (vs $2,410M consensus); EPS $0.82 (vs $0.79-0.80 consensus); datacenter +42-47% YoY (vs ~40% target); 60% probability custom Si FY27 floor RAISED above >20%; 65-70% probability Q2 FY27 guide raise to $2.65B+ midpoint.
  - **Methodology validation**: this was the FIRST application of Supply-Chain-Cohort Calibration framework (user-articulated 2026-05-27). Cohort signals collected from AMZN/ANET/CSCO/ALAB/NVDA/AVGO/SK Hynix and hyperscaler capex aggregate. If predictions land within cohort-calibrated bands → codify as principle #32 in methodology.md. If not → keep as cross-source-log methodology candidate pending 2nd application.
  - Scope: Pull Q1 FY27 actuals + earnings call. Run 3-layer GRADE template (INPUT / COMPUTATION / REASONING per CLAUDE.md updated 2026-05-27). For each of 5 targets: actual vs predicted, which layer failed if any. Reflect specifically on whether cohort signals were predictive vs confirmatory. Two-Part GRADE protocol: fundamental grade T+0 (May 28); stock-reaction grade T+24h (May 29 — narrative-Stage 3-4 modifier means muted/negative reaction possible even on beat per NVDA May 2026 parallel).
  - Linked: `research/predictions/2026-05-27-MRVL-Q1FY27.md`, `research/predictions/grading-log.md`, `research/companies/MRVL/thesis.md` (updated with cohort calibration 2026-05-27)
  - Specific watch items: (a) revenue vs $2,470M base / $2,400M guide; (b) datacenter Q1 trajectory vs ~$1.815B (my model); (c) whether mgmt RAISES custom Si FY27 floor above ">20% YoY" language (the key non-consensus call); (d) Q2 FY27 guide direction; (e) Trainium3 ramp commentary (cohort-key signal); (f) Stage 3-4 stock reaction separately T+24h.

### P1 — High priority (next session)

- [ ] **P1 / research / 2026-05-27** [INDP, AF] — LG Innotek (KRX: 011070) deeper dig + Ibiden comparison
  - Origin: User request 2026-05-26 to "look into LG Innotek." Initial deep-dive completed today; supply-chain-reality test PASSED — verified as genuine FC-BGA substrate producer (not label-anchored Apple camera supplier). Stock at new ATH +200% YTD; WATCHLIST verdict given the re-rating already substantially run. User said "add to watchlist for now, dig into it tomorrow."
  - Scope: (a) Direct Ibiden (4062.T) comparison as the dominant 60% ABF substrate competitor — same supply-chain-reality test + valuation gap analysis; (b) International analyst coverage (Goldman, MS, JPMorgan) — gap from today's research; (c) Specific named AI accelerator design wins for LGI (today's research found general "GPU server" + "Intel + cloud giants" but no named chip); (d) Apple-pullback entry-point analysis — if Apple-driven quarterly weakness creates entry window, what trigger; (e) Sizing-matrix vs other Active-tier candidates (Sony I&SS, Sumco, BESI, ASMPT, Nabtesco, Infineon, Renesas, Yaskawa, Nidec) — where does LGI fit in the prioritization
  - Linked: `companies/LGINNOTEK/thesis.md` (candidate stub), `watchlist/candidates.md` (FC-BGA section)

### P2 — Medium priority

- [ ] **P3 / verification / 2026-06-24** [CAL, INDP] — Monitor for N=2+ confirmation of candidate Principle #34 (Supplier-Side Cross-Layer Moat Decomposition) + candidate B38 (demand-side decomposition blind-spot for cross-layer moats)
  - Origin: SEMCO thesis 2026-05-28 — Principle #33 demand-side decomposition completed analysis but failed to surface integrated-turnkey moat (SEMCO is only merchant vendor at Layer 0 substrate + Layer 1 silicon caps); surfaced only via T3 borrowed analyst framing. User meta-question caught the framework gap. N=1 insufficient to codify per principle #32 premortem.
  - Scope: at next monthly audit cycle, check if any analyses 2026-05-29 to 2026-06-24 surfaced a structural moat that lives in cross-vendor coverage pattern + customer procurement preference (rather than per-layer position). If N=2+ confirmed → codify Principle #34 + B38. If 30 days pass with no second case → retain as candidate or retire.
  - Heuristic for detection: any analysis where (a) candidate touches 2+ adjacent binding-constraint layers, (b) demand-side decomposition completed normally, (c) a non-consensus structural moat was surfaced by orthogonal source (analyst note, user framing, external research). If all 3 conditions met → B38 fired retroactively, count toward N=2+.
  - Linked: `research/companies/SEMCO/thesis.md` (origin case + meta-observation), `research/meta/biases-watchlist.md` B38 (candidate), `research/meta/methodology.md` Principle #34 (candidate row in metadata table), `research/meta/principle-applications-log.md` (3rd application of #33 logged)


- [x] **P2 / verification / 2026-05-22** [CAL] — Stock-reaction grade for NVDA Q1 FY27 (T+24h follow-up) — CLOSED 2026-05-25 per user framing: "resolve purely on numbers, not stock movements because price depends on macro." Numerical grade stands at HIT direction on all 5 axes (revenue/EPS within 0.5%; biggest miss UNDERCALLED Q2 guide by $2.5B because of historical sandbag heuristic that doesn't fit multi-year-contracted-demand environments, per lesson L4). See `predictions/2026-05-20-NVDA-Q1FY27-GRADE.md` final section.

- [ ] **P3 / verification / 2026-06-24** [INDP, CAL] — Claim-verification audit cycle (replaces source-reliability audit per principle #23, codified 2026-05-24)
  - Origin: User correction 2026-05-24 after TrendForce HBF debacle. Bias B25 (source-tracking-over-claim-verification) identified. Source-reliability tracking is sample-size dependent; claim-level orthogonal verification is the actual epistemic discipline.
  - Scope: Sample N recent claims (target: 15) across thesis files + signals + wiki entries committed in the prior 30 days. For each, verify: (a) the claim's first-order assertion is stripped of interpretation, (b) at least one orthogonal corroboration was logged at ingest (different data-generation process), (c) single-source claims correctly went to `cross-source-log.md` not to thesis files. Flag failures in `harness observations` log (`sector/where-we-are.md`).
  - Also: re-audit the 6 sources still in the source-reliability queue (MLQ.ai, Sacra, Fortune, Photoncap, TweakTown, The Razor's Edge) — BUT use the claim-verification framing, not source-track-record framing. Output: for each source, sample 3 representative claims and check whether each had orthogonal corroboration at time of citation.
  - Linked: `research/meta/methodology.md` principle #23, `research/meta/biases-watchlist.md` B25, `research/meta/source-reliability.md` (legacy tracker; keep for cross-reference but no longer primary)

- [ ] **P3 / verification / 2026-06-24** [INDP, CAL] — Codification audit cycle (EXPANDED scope per user 2026-05-28) — FIRST CYCLE
  - **Scope expansion (added 2026-05-28)**: originally scoped to Principle #32 monthly audit only. User discipline LOOP articulation 2026-05-28 — "spot reasoning inconsistencies → apply fixes → monitor the fixes — see if they actually work" — surfaced that the rapid codification cadence (5 principles + 6 biases in 72 hours since 2026-05-21) created a monitoring gap: only #32 has explicit detectability; #29/#30/#31/#33 + B31-B36 have declarative falsifiers but NO scheduled monitoring. Expanded audit covers ALL recent codifications.
  - **Audit scope (expanded)** — each of these gets the 3-question test:
    - Principles: #29 (segmented triangulation), #30 (comp-set verification), #31 (narrative-stage modifier), #32 (pre-action checkpoints), #33 (top-down capability decomposition + 2026-05-28 competition-intensity refinement)
    - Biases: B31 (cross-segment aggregation triangulation), B32 (comp-set anchoring at valuation), B33 (narrative-stage-blind sizing), B34 (action without verification or premortem), B35 (within-category aggregation), B36 (visible-user-adoption anchoring when embedded)
  - **3 questions per codification**:
    1. Has it been APPLIED in any analysis since codification? (Check `principle-applications-log.md` + grep recent commits)
    2. If applied: classify REAL CATCH / FALSE POSITIVE / WASTED OVERHEAD (per principle #32 detectability framework)
    3. If NOT applied in 30 days: codification is INERT. Two options — RETIRE per fluidity-footer falsifier OR PROMOTE TO HOOK (deterministic enforcement per "instructions are choices; hooks are enforced")
  - **Metrics (per codification)**:
    - Real-catch rate ≥40% (below 20% over 3+ months → over-applying, retire)
    - False-positive rate <30%
    - Wasted-overhead rate <30%
    - Net-positive check (REAL_CATCHES > WASTED_OVERHEADS over 30 days)
  - **Action items by outcome**:
    - Metrics pass + applied ≥3 times: confirmed active; continue monitoring
    - Applied <3 times in 30 days: codification is inert; flag for retirement OR hook promotion
    - Metrics fail: revise trigger threshold OR retire per fluidity-footer falsifier
    - New pattern surfaces during audit: codify per standard process
  - **Failure mode the audit protects against (the user's stated concern)**: rapid codification cadence producing ossified text that's never actually applied = step 1+2 of the loop without step 3 = the most likely OS-degradation pathway given the recent codification velocity
  - Document audit outcome in `research/meta/principle-applications-log.md` "Monthly audit log" section. Recurring monthly thereafter; this is the FIRST audit.
  - Linked: `research/meta/methodology.md` (all principles), `research/meta/biases-watchlist.md` (all B-entries), `research/meta/principle-applications-log.md`, recent commit log

- [ ] **P2 / verification / 2026-06-15** [INDP, AF] — Schwab June 2026 AI agent launch — triangulation 3rd-data-point candidate

- [ ] **P2 / research / 2026-06-05** [INDP] — Back-fill China sovereignty cluster TRACE event (verification catch 2026-05-28)
  - Origin: 2026-05-28 verification step caught that `signals/events/2026-05-26-china-ai-sovereignty-cluster.md` does NOT exist despite my session-memory claim. The cluster's prior signals (Huawei LogicFolding May 25 + China talent restrictions May 26 + DeepSeek V4 State AI Fund May 16) exist only as scattered cross-references across ARM thesis + Google I/O event + 13F analysis. Today's "China 9 chips certified" (May 28) signal would be 3rd-4th data point if cluster were properly documented.
  - Scope: (a) Read prior signals from ARM thesis cross-refs, Google I/O event file, 13F analysis to extract verified facts; (b) cross-verify Huawei LogicFolding announcement details + China talent restriction scope via independent T1/T2 sources; (c) consolidate into proper TRACE event file at `signals/events/2026-05-26-china-ai-sovereignty-cluster.md`; (d) IF cluster has 3+ verified same-segment data points within 90 days, promote to `signals/triangulation.md` as 2nd segmented-triangulation entry (advanced-packaging EMIB-T was 1st).
  - **Discipline catch this represents**: per principle #32 + the user's discipline LOOP (spot/fix/monitor), this is a "fix" step that was incomplete on 2026-05-27 — I referenced a TRACE event without committing it. The verification step today caught the gap.
  - Linked: `companies/ARM/thesis.md` (existing cross-refs), `signals/events/2026-05-20-google-io-2026.md`, `meta/2026-05-26-positional-strength-duration.md`, `signals/cross-source-log.md` (today's China 9 chips entry)
  - Origin: Robinhood + eToro + Moomoo agentic-trading launches Apr-May 2026 (per `signals/events/2026-05-27-robinhood-agentic-trading.md`). Schwab targeting June 2026 per [WealthManagement.com T3](https://www.wealthmanagement.com/ria-news/schwab-makes-ai-push-with-client-facing-agents-to-roll-out-in-june). If 3rd same-segment data point lands, agentic-brokerage promotes to triangulation per principle #29.
  - Scope: verify Schwab launch date + scope + tech stack; if launched, promote agentic-brokerage cluster to triangulation.md; cascade to DDOG (regulatory observability mandate validation) + SNDK (compliance NAND demand validation). Also: apply Principle #33 top-down capability decomposition to Schwab as 2nd application of the framework — validation criterion for the principle.
  - Linked: `signals/events/2026-05-27-robinhood-agentic-trading.md`, `companies/DDOG/thesis.md`, `companies/SNDK/thesis.md`, `meta/methodology.md` principle #33

- [ ] **[SUPERSEDED by expanded audit above]** ~~P3 / verification / 2026-06-24 — Principle #32 monthly audit~~ — see expanded codification audit cycle above (now covers principles #29-33 + B31-B36)
  - Origin: User constraint 2026-05-27 on codifying principle #32 — "as long as changes, if turned out to be rigid or working against expected net positive improvement, are detectable if they do not work, then yes [codify]." Audit is the detectability mechanism.
  - Scope: Read `research/meta/principle-applications-log.md`. Compute three metrics over the prior 30 days:
    (a) Real-catch rate = REAL_CATCHES / TOTAL_APPLICATIONS. Target ≥40%. If <20% → over-applying, raise threshold.
    (b) False-positive rate = FALSE_POSITIVES / TOTAL. Target <30%.
    (c) Wasted-overhead rate = WASTED_OVERHEADS / TOTAL. Target <30%.
    Plus: net-positive check (REAL_CATCHES > WASTED_OVERHEADS over 30 days).
  - Action if any metric fails: revise principle #32 trigger threshold OR raise threshold OR retire per fluidity-footer falsifiers. Document audit outcome in principle-applications-log.md "Monthly audit log" section.
  - Recurring item: re-evaluate monthly thereafter; this is the FIRST audit. SessionStart hook surfaces via "audit cycle" pattern matching.
  - Linked: `research/meta/methodology.md` principle #32, `research/meta/biases-watchlist.md` B34, `research/meta/principle-applications-log.md`


### P3 — Foundational wiki entries (planned, not yet built)

**Depth standard:** All wiki entries below must meet `meta/methodology.md` core principle #12 (default BELOW revenue mix). Revenue-mix summaries are insufficient — each wiki must include BOM-level unit counts, current-gen → next-gen deltas where applicable, and supplier capacity-response data. See B15 in `biases-watchlist.md`.

- [ ] **P3 / wiki / 2026-05-21** [INFRA] — Hyperscaler capex primer
  - Scope: How to read MSFT/GOOG/META/AMZN/ORCL capex disclosures; segment definitions; ROIC implications. **BOM-depth requirement:** include dollars-per-GW deployed at current vs next-gen rack densities, not just headline capex numbers.


- [ ] **P3 / wiki / 2026-05-21** [INFRA] — Geopolitical AI primer
  - Scope: US-China tech war, export controls, allowed/restricted lists, Taiwan dependence. **BOM-depth requirement:** wafer-volume by node × geography; specific HSCD-controlled items; substitution paths.

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
