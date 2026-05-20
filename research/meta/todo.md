# To-Do — AI Sector Research OS

**Last updated:** 2026-05-20
**Optimizes for:** rate at which signals become defensible, falsifiable, investable conviction earlier than consensus (per `meta/methodology.md` §Meta-First-Principle).

**SessionStart hook sort order:** P0 → P1 → P2 → P3, within priority: artifact-producing > process, within ties: tag count desc, then date asc.

**Tags** (from methodology.md): AF anti-fragility | BOT bottleneck-of-tomorrow | POS portfolio coherence | CAL calibration | INDP independence | INFRA harness infrastructure.

**Done item handling:** Items that produced a permanent artifact (thesis file, wiki entry, prediction, hook) get DELETED. Items that are process steps without an artifact get archived in `## Archive` so future Claude doesn't redo them.

---

## Open

### P0 — Blocking / urgent

- [ ] **P0 / prediction / 2026-05-20** [CAL] — GRADE NVDA Q1 FY27 prediction
  - Origin: scheduled (event resolution today after market close)
  - Scope: compare prediction to actual print; write lesson if new pattern; trigger SCENARIO-UPDATE workflow
  - Linked: `research/predictions/2026-05-20-NVDA-Q1FY27.md`, `research/predictions/lessons.md`, `research/sector/scenarios.md`

### P1 — High priority

- [ ] **P1 / research / 2026-05-20** [POS, AF, BOT] — Nebius (NBIS) thesis — public inference cloud, direct beneficiary of capacity-constrained narrative
  - Origin: User-surfaced via Dylan @demian_ai tweet 2026-05-20 (verified). NBIS Q1 2026 revenue $399.0M (+684% YoY) per [SEC 6-K](https://www.sec.gov/Archives/edgar/data/0001513845/000110465926059872/tm2614392d1_ex99-2.htm). Contracted power 3.5GW, raised target to 4GW by year-end. Missouri gigawatt + 1.2GW Pennsylvania expansion.
  - Scope: Full thesis with D × M × P × R × E model. Caveat: author of surfacing tweet works at NBIS. But Q1 print is independent confirmation. Compare to CoreWeave (private competitor) economics. Recognition stage assessment (recent listing, +684% probably moved stock but story still under-covered in mainstream).
  - Linked: `research/companies/NBIS/thesis.md` (new)

- [ ] **P1 / research / 2026-05-20** [POS, AF, BOT] — AVGO (Broadcom) thesis — newly elevated by Anthropic-Broadcom custom Si partnership
  - Origin: Anthropic WSJ reveal 2026-05-20 (per [Sherwood](https://sherwood.news/markets/anthropic-revenue-run-rate-30-billion-google-broadcom-partnership/)) confirms second top-3 frontier provider on Broadcom custom Si (Google TPU = first). S2 scenario structurally validated.
  - Scope: Full thesis with Duration × Magnitude × Pricing-Power × Recognition Stage. Custom Si TAM model. Compare to NVDA exposure. Why this is the structural S2-hedge.
  - Caveat per user 2026-05-20: AVGO is already ~$1.2T megacap. Asymmetric setup may live downstream not at AVGO directly. See P1 Vicor / Camtek items below.
  - Linked: `research/companies/AVGO/thesis.md` (new)

- [ ] **P1 / research / 2026-05-20** [POS, BOT] — Camtek (CAMT) thesis — advanced packaging inspection direct beneficiary
  - Origin: Q1 2026 OSAT orders >$90M for "CoWoS-like packaging for AI" per [StockTitan](https://www.stocktitan.net/sec-filings/CAMT/6-k-camtek-ltd-current-report-foreign-issuer-e53ec04f8240.html). H2 2026 expected >25% growth vs H1 per [TipRanks](https://www.tipranks.com/news/company-announcements/camtek-posts-q1-2026-results-and-projects-strong-second-half-revenue-surge).
  - Scope: Full thesis. Recognition stage assessment (still Stage 2–3 — partially moved on $31M order). Model demand pull-through from custom Si packaging volume growth.
  - Linked: `research/companies/CAMT/thesis.md` (new)

- [ ] **P1 / research / 2026-05-20** [POS, AF] — AMZN (Amazon) thesis — Anthropic primary cloud partner + Trainium consumption ramping
  - Origin: Anthropic WSJ reveal 2026-05-20. $30B run-rate compute footprint primarily on AWS. Trainium 3 ramp directly tied. Plus Amazon equity stake in Anthropic (per Fortune 2026-04-30).
  - Scope: Full thesis. Three legs: (a) AWS share gains from Anthropic exclusivity, (b) Trainium economics + custom Si margin, (c) Anthropic stake P&L contribution. Anti-fragility highest in universe per scenarios.md (was already 3.5/5).
  - Linked: `research/companies/AMZN/thesis.md` (new)

- [ ] **P1 / research / 2026-05-20** [INDP, POS, AF] — Pull Leopold Aschenbrenner's 13F filings; build T1 / BE / TSEM thesis basis
  - Origin: User input 2026-05-20. Leopold focuses on AI infra layer (not memory). Holdings include or have included T1 Energy, Bloom Energy, Tower Semi.
  - Scope: Fetch most recent 13F from SEC EDGAR (Situational Awareness LLC). Extract current holdings. For each held position in our universe, build the bull thesis using his thesis as primary-tier signal, then reconstruct independently.
  - Linked: `companies/T1/thesis.md`, `companies/TSEM/thesis.md`, `companies/BE/thesis.md` (all new)

- [ ] **P1 / verification / 2026-05-20** [INDP, POS] — Verify SK Hynix technical moat claim independently
  - Origin: User input 2026-05-20. Prior Claude session asserted SK Hynix has materially larger technical moat than Samsung/Micron. User trusts the claim but admits it was trusted blindly.
  - Scope: Validate from primary sources (technical conference papers, supplier briefings, patent disclosures, qualification status data). Real technical depth required.
  - Linked: `research/companies/HYNIX/thesis.md` (new), `research/wiki/hbm-primer.md` (§9.6 update)

- [ ] **P1 / verification / 2026-05-20** [INDP, BOT] — Source-cite Dylan Patel's "2-3x more memory pricing" claim
  - Origin: User reported hearing Dylan Patel make this claim in a podcast.
  - Scope: Find the specific SemiAnalysis newsletter / podcast episode where this claim was made. Cite formally. Triangulate with other primary-tier memory-pricing signals.
  - Linked: `research/wiki/hbm-primer.md` §11

### P2 — Medium priority

- [ ] **P2 / research / 2026-05-20** [POS, CAL] — AXTI earnings-growth vs multiple-expansion decomposition
  - Origin: Verified user portfolio position; Stage 4 recognition confirmed; today -8.87% pullback per user screenshot.
  - Scope: Decompose the verified +6,897.96% past-year return into earnings growth vs multiple expansion. If mostly earnings → thesis is delivering, multiple defensible. If mostly multiple → Stage 5 risk material. Determines hold/trim/exit recommendation.
  - Linked: `research/companies/AXTI/thesis.md` (new)

- [ ] **P2 / research / 2026-05-20** [POS, AF, BOT] — Bloom Energy thesis reconstruction (user re-evaluation candidate)
  - Origin: User sold BE at ~+30%, regrets exit, considering re-entry. BE is canonical bypass-route name in `meta/time-to-x-framework.md` (time-to-power).
  - Scope: Build full thesis with Time-to-X applied to power layer + Duration × Magnitude × Pricing-Power × Recognition Stage model. Specific recommendation: re-enter at current price, wait for pullback, or stay out.
  - Linked: `research/companies/BE/thesis.md` (new)

- [ ] **P2 / research / 2026-05-20** [POS] — STM thesis reconstruction OR sell decision
  - Origin: User portfolio coherence audit flagged as untested (~6.6% per `research/portfolio/holdings.md`). Came from third-party research user no longer remembers the rationale for.
  - Scope: Research from scratch — STM is broad-line semi (autos, MCU, power, industrial). What is the AI-sector thesis if any? If none defendable, recommend sell.
  - Linked: `research/companies/STM/thesis.md` (new)

- [ ] **P2 / research / 2026-05-20** [POS] — Tower Semiconductor thesis reconstruction OR sell decision
  - Origin: Same as STM. Untested ~5.4% position.
  - Scope: TSEM is specialty analog/RF/power foundry — assess AI exposure. If none defendable, recommend sell.
  - Linked: `research/companies/TSEM/thesis.md` (new)

- [ ] **P2 / research / 2026-05-20** [POS, AF, BOT] — Astera Labs (ALAB) full thesis — bypass-route gap in portfolio
  - Origin: HBM primer identified ALAB as the most credible near-term CXL bypass play; user has zero exposure.
  - Scope: Full thesis with Duration × Magnitude × Pricing-Power × Recognition Stage. Sizing recommendation.
  - Linked: `research/companies/ALAB/thesis.md` (new)

- [ ] **P2 / research / 2026-05-20** [AF, BOT] — SUMCO + Shin-Etsu thesis — silicon wafer substrate layer
  - Origin: User-surfaced via "agnostic to who wins at the top." HBM primer confirms substrate-layer importance.
  - Scope: Build joint or separate theses. Use the wafer-demand vs HBM-demand tension to frame the bull case.
  - Linked: `research/companies/SUMCO/thesis.md`, `research/companies/SHINETSU/thesis.md` (new)

- [ ] **P2 / research / 2026-05-20** [POS, AF] — GOOG (Alphabet) thesis — expanded Anthropic partnership + TPU scaling + Anthropic stake
  - Origin: Anthropic WSJ reveal 2026-05-20 (per Sherwood). Expanded Google partnership confirmed alongside Broadcom.
  - Scope: Full thesis. Three legs: (a) TPU as S2 winner (already AVGO partner), (b) Anthropic exclusivity/preference economics, (c) Gemini standalone trajectory. Anti-fragility 3/5 per scenarios.md.
  - Linked: `research/companies/GOOG/thesis.md` (new)

- [ ] **P1 / wiki / 2026-05-20** [INFRA, BOT, AF] — Agentic workload scaling model — quantitative wiki entry
  - Origin: User input 2026-05-20 — workload grows super-linearly with MAU because tool_calls_per_session and sessions_per_user also compound.
  - Scope: New `wiki/agentic-workload-scaling.md`. Define agentic MAU precisely. Estimate current numbers across major providers (Cursor, ChatGPT Operator, Claude with computer use, enterprise deployments). Model tool_calls_per_session × sessions_per_user × MAU. Project 12–24mo trajectory. Map to specific compute demand (HBM, inference compute, networking, observability). All numbers cited or hedged.
  - Linked: `research/wiki/agentic-workload-scaling.md` (new), update `research/wiki/token-consumption.md`

- [ ] **P1 / research / 2026-05-20** [POS, INFRA] — Update existing theses with new 5th component (Execution Quality)
  - Origin: Methodology updated 2026-05-20 to add Execution Quality as 5th component of D×M×P×R model.
  - Scope: Add Execution Quality scoring + rationale to `companies/VICR/thesis.md` and `companies/NVDA/thesis.md` and any future thesis files going forward.
  - Linked: All current and future `companies/{TICKER}/thesis.md`

- [ ] **P2 / verification / 2026-05-20** [INDP, CAL] — Source-reliability track-record audit (per user input 2026-05-20)
  - Origin: User input — "look at their previous track record, how often they write about things that materialized." We've been citing T4 aggregators (Motley Fool, StockTitan, BeyondSPX, IBTimes, Sherwood) without empirical reliability scores.
  - Scope: For each of the 8 sources in the audit queue in `meta/source-reliability.md`, pick 3–5 past specific claims, check what happened, score materialization, annotate the source ledger with track record. Repeat monthly for sources we rely on heavily.
  - Linked: `research/meta/source-reliability.md`

- [ ] **P2 / verification / 2026-05-20** [INDP] — Re-verify VICR 2nd gen VPD technical specs at primary source
  - Origin: VICR thesis cited BeyondSPX (T4) for 5 A/mm² density + 24× current gain — should be verified at Vicor product page or technical paper.
  - Scope: Find Vicor's own technical disclosure. Confirm the specs. Update `companies/VICR/facts.md` with primary source.
  - Linked: `companies/VICR/facts.md`, `companies/VICR/thesis.md`

- [ ] **P2 / research / 2026-05-20** [BOT, INDP] — Rambus (RMBS) thesis — memory IP licensor, HBM bypass-route candidate
  - Origin: User mentioned 2026-05-20 as example of "give me your thesis on X" interaction pattern. Already surfaced as a memory IP play in `wiki/hbm-primer.md` §7 Tier 3.
  - Scope: Full thesis with Duration × Magnitude × Pricing-Power × Recognition Stage. Memory IP licensing model + HBM4/HBM4E royalty stream + AI memory cycle exposure. Compare to ALAB as bypass-route alternative.
  - Linked: `research/companies/RMBS/thesis.md` (new)

### P3 — Wiki entries (lower priority, foundational context)

- [ ] **P3 / wiki / 2026-05-20** [INFRA, BOT] — Power-for-AI primer
  - Origin: Was in original wiki plan; deferred to focus on HBM first.
  - Scope: Pure supply-demand-bypass analysis of firm power for AI datacenters. Time-to-power framework formalized. Names: VST, CEG, GEV, ETN, TLN, Bloom Energy, Solaris.
  - Linked: `research/wiki/power-for-ai-primer.md` (new)

- [ ] **P3 / wiki / 2026-05-20** [INFRA] — Other planned wiki entries
  - Per `research/wiki/README.md` planned list: chip-stack primer, hyperscaler-capex primer, custom-silicon primer, optical-interconnect primer, model-economics primer, memory-cycle primer, geopolitical-AI primer, networking primer.
  - Scope: Each is a future work unit. Build as needed when a position decision requires the context.

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

- [x] **2026-05-20** [INFRA, BOT] — HBM primer (pure supply-demand-bypass)
  - Completed: 2026-05-20
  - Artifact: `research/wiki/hbm-primer.md`

- [x] **2026-05-20** [INFRA] — Token consumption wiki primer
  - Completed: 2026-05-20
  - Artifact: `research/wiki/token-consumption.md`

- [x] **2026-05-20** [INFRA, POS] — Agentic AI enterprise wiki primer
  - Completed: 2026-05-20
  - Artifact: `research/wiki/agentic-ai-enterprise.md`

- [x] **2026-05-20** [CAL] — Add L3 (don't sell on partial profit) + B10 (P/E anchoring) + B11 (re-stated numbers)
  - Completed: 2026-05-20
  - Artifact: `research/predictions/lessons.md` + `research/meta/biases-watchlist.md`

- [x] **2026-05-20** [INFRA] — Recognition stage spectrum (replaces "time-to-recognition")
  - Completed: 2026-05-20
  - Artifact: `research/meta/methodology.md` §Recognition Stage

- [x] **2026-05-20** [INFRA] — Capture meta-first-principle + co-adaptation principle in methodology
  - Completed: 2026-05-20
  - Artifact: `research/meta/methodology.md` top sections

- [x] **2026-05-20** [POS] — Vicor (VICR) thesis (full company folder)
  - Completed: 2026-05-20
  - Artifact: `research/companies/VICR/` (thesis.md + facts.md + timeline.md + interpretations.md + exposures.md)
  - Outcome: Recommendation WAIT (do not enter pre-confirmation). Initial "downstream beneficiary" framing was wrong; bottoms-up surfaced design-out at NVIDIA H100 + replacement at top-2 hyperscaler by MPS. Reframed as binary on 2nd gen VPD adoption at next-gen designs. Anti-fragility 2/5. Tier: Active (not Core), wait for catalyst.
  - Surfaced bias: B12 (catalyst-narrative anchoring before customer-level bottoms-up)

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
