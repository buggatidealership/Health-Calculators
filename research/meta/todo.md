# To-Do — AI Sector Research OS

**Last updated:** 2026-06-02 PM (post Citrini-Lotte ingest + Mitsui 4-subagent deep-dive; added Co-Tech 8358.TW investability check P1 + Mitsui entry trigger watch P2; HPE Q2 FY26 GRADE completed earlier today)
**Optimizes for:** rate at which signals become defensible, falsifiable, investable conviction earlier than consensus (per `meta/methodology.md` §Meta-First-Principle).

**SessionStart hook sort order:** P0 → P1 → P2 → P3, within priority: artifact-producing > process, within ties: tag count desc, then date asc.

**Tags** (from methodology.md): AF anti-fragility | BOT bottleneck-of-tomorrow | POS portfolio coherence | CAL calibration | INDP independence | INFRA harness infrastructure.

**Done item handling:** Items that produced a permanent artifact (thesis file, wiki entry, prediction, hook) get DELETED. Items that are process steps without an artifact get archived in `## Archive` so future Claude doesn't redo them.

**Parallel queue:** `meta/deep-dig-queue.md` tracks BOM-level component drills (Workflow 8 / DEEP-DIG). Not duplicated here — that queue runs on its own ranking criteria.

---

- [ ] **P1 / USER-ACTION / 2026-06-27** [POS] — DeGiro/M26 availability check on REIA-surfaced investable names (do tonight when time allows)
  - Origin: 2026-06-27 REIA Batch #2-4 (power / CPU-server / CXMT) per `signals/cross-source-log/2026-06-27-REIA-batch-power-cpuserver-cxmt-investable-list.md`. All are watchlist-level / PRE-THESIS — availability check gates whether they're worth a Workflow #9 thesis build.
  - ⭐ PRIORITY (EU-accessible + fills Layer-3 power + EU-sovereign-AI gaps) — check these first:
    - [ ] Siemens Energy — ENR (Xetra/Frankfurt)
    - [ ] Schneider Electric — SU (Euronext Paris)
    - [ ] ABB — ABBN (SIX Swiss)
    - [ ] Prysmian — PRY (Borsa Italiana / Milan)
    - [ ] Nexans — NEX (Euronext Paris)
    - [ ] Legrand — LR (Euronext Paris)
    - [ ] Infineon — IFX (Xetra)
    - [ ] ASML — ASML (Euronext Amsterdam) [likely already accessible]
  - Secondary (check access — may be restricted):
    - [ ] Lenovo — 0992 (HKEX)
    - [ ] Wiwynn — 6669 (TWSE) / Tokyo Electron — 8035 (TSE)
  - US (likely accessible, lower priority to verify): GEV / ETN / VRT / CEG / VST / TLN / BE / CLF / AMD / ARM / ALAB / MU / LRCX / AMAT / KLAC / ACMR
  - NOT accessible (don't bother): CXMT (Shanghai STAR), Naura/AMEC/Piotech (China A/STAR), SK Hynix/Samsung direct KRX (Nasdaq ADR ~July 10 = workaround)
  - NEXT STEP after check: tell Claude which are available → rank accessible subset by conviction + sizing fit → Workflow #9 thesis build on the ones to pursue.
  - Linked: `signals/cross-source-log/2026-06-27-REIA-batch-power-cpuserver-cxmt-investable-list.md`, `watchlist/candidates.md`

---

## Open

- [ ] **P1 / research / 2026-06-29** [INDP, AF, POS, BOT] — Codify "AI-funding-shock" scenario + capital-markets/credit-channel NODE — **2026-07-02 EVE new datapoints: Nvidia revenue-share vendor-financing instrument (SharonAI 8-K T1, ~210k GPUs seeded into credit-constrained neoclouds) + Meta Compute excess-capacity monetization (Bloomberg T1) = circularity + overbuild-monetization both live; fold into node build; **NVIDIA BUYBACK GUARANTEE (Leg B 07-02 EVE): instrument reportedly includes buying back unsold GPU capacity at agreed price = demand-guarantee/Lucent-mechanic (Tunguz comparison T2); PRE-REGISTERED TELL: Nvidia 10-Q ~Aug-2026 buyback-liability footnote — calendar it** — (harness framework gap surfaced by BIS Annual Report 2026-06-28) — **UPGRADED 2026-07-02: add the RATES-DRIVER module** (US Leg B absence-question hit the same gap: market pricing ~54-60% Fed HIKE by YE, Warsh hawkish, 30yr 5.19%; the node has the leverage SYMPTOM but no rates DRIVER). Hard-data layer now available: FINRA margin debt record $1.28T/4.1% GDP + ~$120B off-balance-sheet AI SPV debt + H100 rentals −70-90% + CoreWeave $4.2B 2026 maturity (= the system canary). Also fold in PD-6 candidate (cost-of-capital as next bottleneck → self-funded vs debt-funded capex screen). Per `signals/cross-source-log/2026-07-02-morning-feed-us-legB-discovery-rates-regime.md`.
  - Origin: EU Leg B discovery → BIS Tier-2 verification (`signals/cross-source-log/2026-06-29-morning-feed-eu-2leg-bis-ai-credit-channel.md`). Harness models AI only from the physical supply side (HBM/NAND/wafers/MLCC/power) — NO node for the credit/funding transmission channel. If the next AI drawdown comes via credit (not chip oversupply), the framework is blind.
  - Scope: add an "AI-funding-shock" scenario to `sector/scenarios.md` (capex freezes via credit event → memory demand falls even with pristine memory balance sheets); recompute held-name anti-fragility under it (NBIS = HIGH exposure / leveraged buildout; memory names = self-funding-insulated but demand-exposed); install the **5-signal monitored set** as a standing watch: (1) neocloud HY spreads / GPU-backed-debt ratings + NBIS converts vs par; (2) neocloud raises failing/downsizing; (3) hyperscaler capex GUIDE cuts; (4) private-credit redemption/markdown; (5) GPU rental <~$1.50/hr.
  - Linked: `sector/scenarios.md`, `companies/NBIS/thesis.md`, `companies/HYNIX/thesis.md`, `sector/themes.md`

- [ ] **P2 / research / 2026-07-01** [INDP, POS, BOT] — Add a lightweight FX-SENSITIVITY line per JP/KR held name (harness framework gap, KJ Leg B 2026-07-01 absence-question). Yen ~162-163 (~40-yr low, fiscal-driven/Honebuto ¥370T) + won >1,500 (16+ sessions, possible +50bp BOK hike July-16 MPC) are BOTH live simultaneously and now first-order for reported earnings + multiple across MURATA/KIOXIA/SUMCO (weak-yen translation tailwind) + HYNIX (weak-won export aid vs BOK-hike multiple headwind). Harness has NO per-name FX translation/hedge line — currently ad-hoc. Scope: one-line FX-exposure tag per JP/KR thesis + July-16 BOK MPC as a scheduled binary on the calendar. Per `signals/cross-source-log/2026-07-01-morning-feed-korea-japan-2leg-scan.md`.
- [ ] **P1 / research / 2026-06-30** [INDP, AF, POS, BOT] — Build the END-DEMAND-DURABILITY / monetization model — **2026-07-02 EVE input: THREE-LAYER agent-adoption framing (bounded-task agents work / enterprise needs embedded humans, evidenced by the 4-company deployment-subsidiary cluster = demand-side subsidy / frontier agentic gains plateauing per Zuckerberg town hall) + surplus-leakage map from hidden-AI-apps run = the model now has both its adoption-structure and its capture-structure evidence layers** — (harness framework gap, KJ Leg B 2026-06-30 absence-question). The harness has a SUPPLY model + a FUNDING model (BIS credit node) but NO model for whether AI end-demand is *durable* — the OpenAI-leak ($1.6/$1 burn) reframes the risk as supercycle DURATION, not existence. Co-locate with the AI-funding-shock scenario. **2026-07-01 counter-evidence: BOJ Tankan 8-yr high (large-mfg DI +22, capex +6.8%) explicitly credits AI/semi demand + pricing pass-through = mild DISCONFIRM of U8/F13 near-term (no demand-destruction reaching component/capex layer yet).** **2026-07-01 PM positive-evidence: pharma-vertical monetization pattern TRIANGULATED N≥3 (Claude Science 06-30 + OpenAI GPT-Rosalind/Novo + Merck-Google $1B + Cohere North-for-Pharma; per `signals/cross-source-log/2026-07-01-evening-brief-terafab-colossus-agentic-demand-2agent.md`) — labs building sticky high-WTP enterprise verticals pre-IPO = durable-end-demand evidence on the other side of the OpenAI-burn counterweight.**
  - Scope: define the demand-durability watch — flagship-customer unit-economics, hyperscaler-capex-guide trajectory, circular-financing share, the OpenAI-share-of-memory-demand-vs-self-funding-hyperscalers crux; tie to the bit-demand falsifier (which only fires on CONTRACT rollover). Pair with the FX-regime tripwire (yen 1986-low / KRW ~1,540) + Japan state-directed demand (¥370tn) as a non-hyperscaler floor.
  - Linked: `companies/HYNIX/thesis.md`, `companies/NBIS/thesis.md`, `sector/scenarios.md`, `signals/cross-source-log/2026-06-30-morning-feed-korea-japan-2leg-sentiment-vs-physical.md`
  - DATA POINT (2026-06-30): agentic SCIENTIFIC DISCOVERY (frontier reasoning — gluon physics, Erdős #397/#1196) = a genuine, durable, NON-SATURATING test-time-compute demand driver (each harder problem wants MORE reasoning; near-infinite economic value → immune to enterprise-agent-ROI fragility) → 🟡 POSITIVE for supercycle DURATION; concentrates value at NVLink/TPU-ICI + MEMORY. B40.1/B45 caution: real but modest (Tao "speed not difficulty"; Erdős "10 problems" was retrieval, debunked) — durable driver YES, AGI-imminence NO. Per `signals/cross-source-log/2026-06-30-agentic-discovery-test-time-compute-ALAB-criticality-demand-durability.md`. This is the DURABLE-TOP-END counterweight to the OpenAI-burn duration-risk; the model needs BOTH poles.
- [ ] **P2 / research / 2026-06-29** [INDP, POS, BOT] — Add 2 MACRO TRIPWIRES the harness has no framework for (KJ Leg B absence-question): (a) **Japan fiscal/rates** (JGB 10Y→3%, Takaichi ¥370tn) → yen-reversal risk that flips the JPY-translation tailwind for Murata/Kioxia/Sumco; (b) **naphtha/energy-security** (Hormuz; ~70% JP naphtha ME-sourced, spot ~doubled) → non-AI bottleneck hitting ~30% of JP mfg. Both can move the JP/KR book regardless of the memory cycle.
  - Origin: `signals/cross-source-log/2026-06-29-morning-feed-korea-japan-2leg-proper.md` §absence-question.
  - Scope: add a JGB-yield/yen tripwire + a naphtha/Brent tripwire to a macro-watch note; flag if either crosses a level that would re-rate the JP exporters.
  - Linked: `sector/where-we-are.md`, `companies/MURATA|KIOXIA|SUMCO/thesis.md`
- [ ] **P2 / research / 2026-07-01** [INDP, AF, POS, CAL] — US memory-tariff WATCH: read the **2026-07-01 Commerce data-center semiconductor market report** — the Phase-2 gate. (Memory-tariff verification 2026-06-29 RESOLVED the precursor → NEUTRAL/NON-EVENT: memory NOT in Phase-1, data-center exempt, pass-through-to-buyer; residual = ~15% HBM "second-wave" tail. Re-rate ONLY if Phase-2 closes the data-center exemption or a Korea-punitive tier emerges.)
  - Origin: `signals/cross-source-log/2026-06-29-us-memory-tariff-verification-NEUTRAL-nonevent.md`.
  - Linked: `companies/HYNIX/thesis.md` (carries the cohort tail-risk).

### HBF trajectory monitor — catalyst checkpoints (added 2026-06-28; the open hinge in the SNDK-keep / KIOXIA-trim verdict)

- [ ] **P1 / research / 2026-08-10** [CAL, BOT, POS, AF] — HBF Gate-2 read #1: FMS + Hot Chips (~Aug 2026) silicon/sample signal + SanDisk Q4 FY26 call + SK Hynix Q2-26 call — confirm HBF samples ship ON SCHEDULE (H2-2026)
  - Origin: `watchlist/HBF-trajectory-monitor.md` — sample-on-schedule is the explicit reversal trigger for the trim-KIOXIA verdict (3/3 ensemble ~71%). Slip past H2-2026 → reconsider.
  - Scope: read FMS/Hot Chips HBF demos + SanDisk/SK Hynix call transcripts; update H1/H2/H3 weights in the monitor; cascade to SNDK + KIOXIA theses if material.
  - Linked: `watchlist/HBF-trajectory-monitor.md`, `companies/SNDK/thesis.md`, `companies/KIOXIA/thesis.md`
- [ ] **P1 / research / 2026-10-15** [CAL, BOT, POS] — HBF Gate-1 read: OCP Global Summit (~Oct 2026) — spec ratification status + new signatories; WATCH for Samsung-own-HBF fork (biggest fragmentation signal) + SanDisk Q1 FY27 / SK Hynix Q3-26 calls
  - Origin: `watchlist/HBF-trajectory-monitor.md` Gate 1 — single-standard-wins + SanDisk-inside-it is load-bearing for the moat. Fork → H2 (revert to valuation → KIOXIA).
  - Scope: read OCP proceedings + JEDEC + Samsung/Kioxia IR (JP/KO native parallel); update monitor weights; cascade if material.
  - Linked: `watchlist/HBF-trajectory-monitor.md`
- [ ] **P2 / research / 2027-02-15** [CAL, BOT, POS] — HBF Gate-2 durability read: ISSCC 2027 (Feb) — write-endurance / latency / thermal-in-HBM-form-factor papers
  - Origin: `watchlist/HBF-trajectory-monitor.md` Gate 2 — technical-durability is the silent failure mode for NAND in a memory role.
  - Linked: `watchlist/HBF-trajectory-monitor.md`
- [ ] **P1 / research / 2027-03-15** [CAL, BOT, POS, AF] — HBF Gate-3 demand read: NVIDIA GTC 2027 (~Mar) — does NVIDIA name HBF (not just NVMe SSD) as a memory tier in the Rubin-successor reference architecture? (highest-information single event — would move H1 ~45%→~70%)
  - Origin: `watchlist/HBF-trajectory-monitor.md` Gate 3 — NVIDIA reference-arch inclusion forces the standardization + hyperscaler gates to follow.
  - Linked: `watchlist/HBF-trajectory-monitor.md`

---

### P2 — High priority new (added 2026-06-04 PM — bypass-route + architecture-of-tomorrow research)

- [ ] **P2 / research / 2026-06-05** [INDP, AF, POS, BOT] — Deep dive: BE Semiconductor Industries (BESI) — hybrid bonding equipment for 3D-stacked DRAM bypass route
  - Origin: 2026-06-04 PM BOTTLENECK-FORECAST surfaced BESI as bypass-route beneficiary when LPDDR5X bottleneck binds. Hybrid bonding is the TTQ-18-30mo qualification path for 3D DRAM stacking (HBM-style for consumer DRAM). Less crowded than KLA/Onto in inspection layer.
  - Investability: Euronext Amsterdam BESI ticker — Degiro accessible (confirmed)
  - Scope: full thesis build — hybrid bonding moat vs ASMPT competitor; HBM4 + HBM5 production wins; consumer DRAM 3D-stacking opportunity timing; analyst consensus; post-2026 guidance accelerators; FY27 framework
  - Key bypass-route question: when LPDDR5X bottleneck forces 3D-stacking workaround at memory mfg level, does BESI capture the equipment spend?
  - Linked: `signals/cross-source-log/2026-06-04-next-bottleneck-lpddr5x-mobile-dram-forecast.md` bypass-route section; `wiki/advanced-packaging-primer.md`

- [ ] **P2 / research / 2026-06-30** [INDP, AF, POS] — NVDA entry-trigger watch (post Apple-Blackwell + Rubin BOM optimization)
  - Origin: 2026-06-04 PM Apple-Blackwell cascade surfaced NVDA as REINFORCED thesis (marquee customer Apple confirms inference dominance). Currently 0% held per holdings.md. Need entry framework given L21 sector regime + €200K cash deployment cadence.
  - Scope: define entry triggers + sizing (recommended 4-6% if entered, per portfolio target band); monitor for L21 regime break OR macro pullback >10% from current
  - Falsifiers: NVDA Q2 FY27 (August) negative reaction despite BEAT + macro-neutral environment = L21 regime more severe; do not enter
  - Linked: `companies/NVDA/thesis.md` (updated 2026-06-04 PM with Apple-Blackwell signal); `portfolio/constraints.md` (FIRE math + cash deployment); `predictions/lessons.md` L21

- [ ] **P2 / research / 2026-06-05** [INDP, AF, POS] — Deep dive: Nova Measuring (NVMI) — Israeli twin to Camtek
  - Origin: 2026-06-04 PM Camtek DEEP-DIG v2.1 surfaced NVMI as adjacent Israeli metrology pure-play; $880M FY26 revenue, 57.6% gross margin, $1.6B war chest per Koalagains T3 (already cited in `companies/CAMT/thesis.md`)
  - Scope: full thesis build — competitive positioning vs CAMT (dimensional metrology vs packaging inspection), GAA + advanced DRAM Nova Metrion platform, FY26 financials, analyst consensus, post-guidance accelerators, Israeli geo tail risk overlap (NOT a hedge)
  - Key question: is NVMI a BETTER architecture-of-tomorrow bet than CAMT?
  - Linked: `companies/CAMT/thesis.md` competitive section; `predictions/lessons.md` L22

- [ ] **P2 / research / 2026-06-05** [INDP, AF, POS] — Deep dive: Onto Innovation (ONTO) — architecture-of-tomorrow CAMT competitor
  - Origin: 2026-06-04 PM user articulation — "where's the best chance to win the architecture of tomorrow. Right? Today's winner might lose tomorrow because they're not gonna qualify for the next cycle." Applied to CAMT vs ONTO: P(ONTO wins HBM5)=40% vs P(CAMT extends)=35% (my model)
  - Scope: full thesis build — Dragonfly G5 + 3Di moat vs Hawk; HBM5 + 1000-layer NAND positioning; FY26 raised guide >$1.3B; 30%+ OP margin EOY 2026 target; investability NYSE
  - Key question: should portfolio enter ONTO instead of CAMT as architecture-of-tomorrow play?
  - Linked: `companies/CAMT/thesis.md` competitive section; Onto IR T1

### P1 — High priority (next session — added 2026-05-28 end of session)

- [ ] **P1 / research / 2026-06-09** [INDP, AF, POS] — Structural Winners Cohort dissection — name-by-name deep-dive
  - Origin: 2026-06-08 PM user-articulated 4-way structural winner + 12-architecture resilience synthesis; user directive: "save that entire list, and we can talk about this list tomorrow... maybe dissect them a little bit more"
  - Scope: Read `research/meta/structural-winners-cohort.md` — go through the 27 ranked names tier-by-tier. Priority dissection order: TIER 1 NEW (Shin-Etsu Chemical 4063.T + Nidec 6594.T), then TIER 2 cluster (TEL + AMAT + LRCX + KLA + ASML + APH + Hirose + TXN + ADI), then TIER 3 single-dependency names. Per Principle #36 multilingual parallel for Japan TSE names (Japanese press for Shin-Etsu + Nidec + TEL + Hirose + Daikin + Lasertec + HOYA + Harmonic Drive + Nabtesco).
  - Linked: `meta/structural-winners-cohort.md` (THE list); `signals/cross-source-log/2026-06-08-*` (all today's cascades supporting the synthesis)
  - Detectability: dissection produces (a) investability confirmation per name, (b) updated tier ranking if new data emerges, (c) 1-2 thesis-promotion candidates ready for deep-dive

- [x] **P1 / research / 2026-06-25** [INDP, AF, POS, BOT] — Monthly recurring: Supply chain graph reconstruction (H1 capability application)
  - Origin: 2026-06-06 PM user conversation re: Opus 4.8 capability mapping to investing (analog: Hornby+Claude Zcash audit). H1 of 5 candidate applications scored highest leverage. Codifies as monthly subagent-driven workflow.
  - Scope: subagent fans out across the AI hardware capex chain (compute → memory → substrate → CCL → power → cooling → optics → consumer-AI add-on). Reads 10-K/6-K/earnings transcripts + Japanese/Korean/Chinese trade press in parallel per Critical Rule #6 + Principle #36. Reconstructs Tier-3/Tier-4 supplier graph with revenue concentration + named customers. Surfaces 5-10 non-consensus names per cycle that meet (a) investability filter (no KRX-only, no Taiwan-only without ADR), (b) revenue concentration to AI cohort >25%, (c) market cap <$50B (under-followed).
  - Output: cross-source-log artifact + candidates added to watchlist + flag for next deep-dig queue.
  - Linked: `watchlist/candidates.md` (Consumer hardware swap section added 2026-06-06 PM as N=1 manual instance of this workflow), `signals/cross-source-log/2026-06-06-mag7-capex-burn-vs-net-cash-correction.md` (capex sizing inputs), Principle #29 (segment-classify), Critical Rule #6 (multilingual parallel).
  - Detectability: POSITIVE = each cycle surfaces ≥3 names not already in watchlist; NEGATIVE = 2 consecutive cycles produce only known names → retire or refine.
  - Recurring cadence: monthly. Next cycle: 2026-07-25.

- [x] **P1 / research / 2026-06-27** [INDP, AF, POS, CAL] — Monthly recurring: Adversarial bear-case stress-test on held cohort (H2 capability application)
  - Origin: 2026-06-06 PM user conversation re: Opus 4.8 capability mapping. H2 of 5 candidate applications — analog to Hornby's exploit construction VERIFYING the Zcash flaw. Per-held-name "kill the thesis" exercise.
  - Scope: for each of 10 held positions (per `portfolio/holdings.md`), subagent constructs the STRONGEST possible bear thesis — looks for the constraint-system flaw in current bull thesis. Stress-tests against: (a) named falsifier conditions (do any currently apply?), (b) hidden assumptions in segment-trajectory model, (c) competitive displacement risk overlooked, (d) macro regime modifier compounding, (e) valuation expansion vs fundamentals gap. Output: per-name bear-case stress-test note appended to `companies/{TICKER}/thesis.md` with explicit "what specifically would need to happen to invalidate" — different from existing Falsifiers section because it's adversarial-construction not threshold-listing.
  - Output: per-held-name bear-case section added; if bear case scores ≥6/10 strength, flag for SCENARIO-UPDATE or sizing reconsideration with explicit Position implication (Critical Rule #11).
  - Linked: all 10 thesis files in `companies/`, `predictions/lessons.md` L21-L23, `meta/biases-watchlist.md` B42-B43, Critical Rule #8 (no reactive trim but DO act on falsified thesis).
  - Detectability: POSITIVE = each cycle either surfaces new structural risk OR reinforces conviction with documented stress-test (varied outcomes); NEGATIVE = 3 consecutive cycles produce identical "no material concern" → exercise became decorative.
  - Recurring cadence: monthly. Next cycle: 2026-07-27.

- [x] **2026-06-03 — RESOLVED NOT INVESTABLE** Co-Tech Development (8358.TW) investability check
  - Resolution: Per user direct check 2026-06-03 — Taiwan TWSE 8358 NOT supported by Degiro OR N26 brokerages. Co-Tech moved to REFERENCE ARTIFACT only (similar to KRX names per `CLAUDE.md` investability filter). Thesis analysis remains valid for harness (HVLP4 only qualified 2nd source per Goldman; projected 5%→53% share 2025-2028) but cannot be acted on. Mitsui (5706.T Japan TSE) + Furukawa (5801.T Japan TSE) remain the investable bypass-route names per `companies/MITSUI/thesis.md`.

- [ ] ~~**P1 / research / 2026-06-02** [INDP, AF, POS] — Co-Tech Development (8358.TW) investability check + bypass-route deep-dive~~ — RESOLVED 2026-06-03 (see above)
  - Origin: Mitsui Mining 4-subagent deep-dive 2026-06-02 surfaced Co-Tech as ONLY qualified HVLP4 2nd source globally per Goldman; HVLP3+ share projected 5%(2025)→53%(2028); gross profit mix 8%→77%; capacity 200→400 t/mo HVLP3/4 by YE2026. Goldman initiated Buy NT$900.
  - Scope: (a) Confirm Taiwan TWSE 8358 investability on user's Degiro + N26 brokerages; (b) if investable, run full thesis with Workflow 8 DEEP-DIG quality bar (≥2 indep sources for capacity, ≥1 supply response, ≥3 tickers cross-stack, ≥1 LOSER, specific falsifier); (c) compare against Mitsui Stage 3-4 entry penalty — Co-Tech at Stage 1-2 likely better Kelly bet
  - Linked: `companies/MITSUI/thesis.md`, `signals/cross-source-log/2026-06-02-citrini-lotte-hvlp-mitsui-deepdive.md`, `watchlist/candidates.md`

- [ ] **P2 / research / 2026-06-02** [INDP, AF, POS] — Mitsui Mining (5706.T) entry-trigger watch
  - Origin: Mitsui 4-subagent deep-dive 2026-06-02 → WATCHLIST status; Stage 3-4 priced-to-perfection at JPY 54,220 (+10.8× over 12mo); trading +35% above consensus PT JPY 40,178
  - Scope: Monitor for entry triggers: (a) pullback to JPY 43,000-46,000 (~-15-20%), (b) HVLP5 customer disclosure naming hyperscaler, (c) FY27 H1 mid-year proof point Oct 2026 that strips non-recurring metals roll-off cleanly + shows Functional Materials segment OP +15%+ YoY. If trigger fires, enter 1-2% Quarter-Kelly.
  - Falsifiers (per `companies/MITSUI/thesis.md`): Co-Tech achieves >40% HVLP3+ share by 2027; Functional Materials OP <15% YoY at FY27 H1; pricing power breaks (rollback of +12% MicroThin hike); HVLP5 has no named customer wins by Q4 FY27
  - Linked: `companies/MITSUI/thesis.md`, `signals/cross-source-log/2026-06-02-citrini-lotte-hvlp-mitsui-deepdive.md`

- [ ] **P2 / research / 2026-06-02** [INDP, AF, POS] — Furukawa Electric (5801.T) HVLP4 thesis
  - Origin: Mitsui deep-dive surfaced Furukawa as HVLP4-class incumbent (HA-V2S, HST-HA), Japan TSE investable, less crowded valuation than Mitsui
  - Scope: Establish dedicated thesis if HVLP4 exposure is desired without Mitsui Stage 3-4 entry penalty. Check FY26 actuals + FY27 guidance + HVLP segment contribution + capacity disclosures + analyst PTs
  - Linked: `watchlist/candidates.md`

- [x] **P1 / research / 2026-06-19** [INDP, AF, POS, CAL] — KIOXIA T+24h GRADE WINDOW OPEN — execute grade per `predictions/grading-log.md` KIOXIA prep checklist (8 steps); requires market data subagent (285A.T + SNDK + HYNIX + MU price action Jun 16-19) + MSA-CBA paper verification subagent; T+72h grade follow-up ~2026-06-22

- [ ] **P1 / research / 2026-06-22** [INDP, AF, POS, CAL] — NBIS Nasdaq-100 inclusion T+0 INCLUSION DAY — capture inclusion-day open price + first-day reaction per `predictions/2026-06-19-NBIS-nasdaq-100-inclusion-pre-registration.md`; T+5 grade ~2026-06-27 / T+15 ~2026-07-07 / T+30 PRIMARY ADJUDICATOR ~2026-07-22 (B48 candidate + R2 user-hypothesis empirical-verification test)

- [x] **P1 / research / 2026-06-14** [INDP, AF, POS, CAL] — Kioxia (285A.T) VLSI Symposium June 14-18 watch + L17 candidate test N=1 application (**PRE-REGISTRATION COMPLETE 2026-06-12** at `predictions/2026-06-12-KIOXIA-VLSI-symposium-pre-registration.md`; pending Pending in `grading-log.md`; T+24h resolution ~June 19-22, T+72h ~June 22-25)
  - Origin: Kioxia 3-subagent deep-dive 2026-06-02 surfaced Stage 3 mid-melt-up with imminent CATEGORY EVENT catalyst (joint Kioxia/SanDisk MSA-CBA paper at VLSI Symposium Hawaii Jun 14-18). Forward P/E 6.24×; FY27 Q1 guide NP ¥869B = 48× YoY profit jump per [Nikkei Asia T1](https://asia.nikkei.com/business/tech/semiconductors/japan-s-kioxia-forecasts-48-fold-quarterly-profit-jump-on-ai-demand). User considering ~€4-5K initial entry parallel to SNDK SIZE UP.
  - Scope: (a) Monitor VLSI Symposium June 14-18 for joint MSA-CBA paper + 332-layer BiCS10 validation + 1000-layer roadmap commentary; (b) Track stock reaction T+24h to T+72h to validate L14 framework forward-application (L17 candidate); (c) If entry occurs, document as N=1 forward-application of L14 framework — pre-entry estimate +20-30% per Stage 3 + CATEGORY EVENT; if actual reaction +20-40%, L17 codified at N=1
  - Falsifier: If Kioxia drops >10% pre-VLSI Symposium OR if VLSI presentation doesn't materially validate MSA-CBA architecture, entry timing was wrong
  - Linked: `companies/KIOXIA/thesis.md`, `signals/cross-source-log/2026-06-02-kioxia-nand-volume-shock-verification.md`

- [ ] **P1 / research / 2026-07-31** [INDP, AF, POS, CAL] — SNDK **Q4 FY2026** print (label corrected 2026-07-02; date unconfirmed late-Jul→Aug-13) + L17 candidate test N=1 application (parallel to Kioxia)
  - Origin: SNDK 5.2% under-sized vs 8-12% Active-Core target; Stage 2-3 + HIGH-CONCRETE CATEGORY EVENT markers ($42B backlog + Vera Rubin 1,152 TB SSD + MSA-CBA validation imminent + Vera BlueField-4 STX GIDS mandate). User considering ~€5-6K SIZE UP parallel to Kioxia initial entry.
  - Scope: (a) Track SNDK Q2 FY27 print (~late July 2026) — does revenue exceed Q4 FY26 $7.75-8.25B guide? Does backlog grow beyond $42B + 5 contracts? Does NCNR enforceability framework hold under audit?; (b) Stock reaction T+24h validates L14 framework forward-application; (c) If actual reaction +25-40% per Stage 2-3 + CATEGORY framework, L17 codified at N=2 (joint with Kioxia VLSI test)
  - Falsifier: If SNDK Q2 FY27 only +5-10% despite CATEGORY markers, L17 forward-application falsified — L14 only applies backward
  - Linked: `companies/SNDK/thesis.md`, `signals/cross-source-log/2026-06-02-kioxia-nand-volume-shock-verification.md`, `predictions/lessons.md` L14 codification + L17 candidate

- [ ] **P2 / research / 2026-07-02** [INDP, AF, DISC] — HIDDEN-AI-APPS post-run-#1 standing items (run COMPLETE, falsifier FIRED — see `signals/cross-source-log/2026-07-02-hidden-ai-apps-program-FINAL-adjudication.md`): (a) fold surplus-leakage map into END-DEMAND-DURABILITY model build (the P1 framework item — this is its first hard evidence layer; distinguish token-volume durability [supported] from application-equity capture [weak]); (b) triggers: Karnov Q2 2026-08-20 / Cognizant Leap-savings split 2026-07-29 / Enova peer-spread x2 quarters / Mistras GM gate; (c) run #2 semi-annual or next major model release. SUPERSEDES the original run item — original text follows for audit: — HIDDEN-AI-APPLICATIONS PROGRAM run #1 (demand-side sibling; user-authorized "plan and build it") — wave 1 IN FLIGHT: F1 insurance/specialty-finance, F2 pharma-services/legal/info, F3 sign-error trade, F4 Japan-native, F5 Europe, F6 alt-data/absence channel. On return: lead synthesis -> wave 2 (G1 materiality scorer + S1 discovery / S2 attribution / S3 commoditization attackers, kill >=2 of 3) -> wave 3 cascade. Spec + five design gates + program falsifier: `meta/hidden-ai-applications-program.md`. Doubles as evidence layer for the END-DEMAND-DURABILITY model gap (P1 2026-06-30).
  - Linked: `meta/hidden-ai-applications-program.md`, `wiki/agentic-ai-enterprise.md`
- [ ] **P2 / research / 2026-07-02** [INDP, AF, BOT, DISC] — OBLIVIOUS-LAYER PROGRAM standing items post-run-#1 (run COMPLETE 2026-07-02, 10 agents): (a) backside-power thermal ILD vehicle dig (Entegris/Merck-KGaA/JP-chemistry exposure map — the one all-refuters-survived layer, no listed vehicle yet); (b) trigger-watch monitoring: ADI AI-power disaggregation H2-26 / TDK muPOL breakout / Sims SLS split signal at FY26 results ~Aug / NGK Nomi AI-framing datapoint / Daifuku first PLP order; (c) Hot Chips 2026 agenda re-run late-July (B1 rec); (d) run #2 2026-10-02 with retail/listicle-inclusive coverage dimension (rubric refinement adopted). Adjudication: `signals/cross-source-log/2026-07-02-oblivious-layer-program-wave2-3-final-adjudication.md`.
  - Origin: user directive 2026-07-02 ("plan the research with full autonomy and authority... build a plan and a team") following the enabling-layer map finding that discovery now happens at the orders stage.
  - Scope: ranked oblivious-layer map with measured obliviousness scores (>=15/25 threshold) + investable expressions; feeds watchlist only (sizing user-gated).
  - Linked: `meta/oblivious-layer-discovery-program.md`, `signals/cross-source-log/2026-07-02-enabling-layer-company-map-4agent.md`
- [ ] **P1 / prediction / 2026-07-02** [INDP, AF, POS, CAL] — AI SUPPLY-CHAIN EARNINGS PREDICTION PROGRAM — pre-register all wave-1 names before their prints; resolve each at print
  - Origin: user directive 2026-07-02 (consensus → hard data → LLM-native prediction: revenue + EPS + guidance; log + resolve; spawn as many agents as needed). Program spec: `predictions/2026-07-02-AI-supplychain-earnings-program.md`.
  - Scope: per-name prediction files pre-registered BEFORE each print (Samsung prelim ~Jul-7-8 → TSMC ~Jul-16 → ASML ~Jul-15/16 → Samsung full + Murata + SKH late-Jul → BE Jul-30 [done] → SNDK Jul-31 → Sumco early-Aug → ALAB Aug-11 → Kioxia mid-Aug); grading-log stubs; GRADE each at resolution (rev/EPS/guidance + reaction, 3-layer).
  - Linked: `predictions/2026-07-02-AI-supplychain-earnings-program.md`, `predictions/grading-log.md`

- [ ] **P1 / research / 2026-07-08** [INDP, AF, POS, CAL] — Samsung Q2 PRELIMINARY results (~Jul-7-8) — first hard demand read post-07-02 selloff
  - Origin: 2026-07-02 KR/JP selloff Tier-2 verification (`signals/cross-source-log/2026-07-02-kr-jp-selloff-TIER2-verification-addendum.md`). The 07-02 drawdown was verified sentiment/valuation, NOT demand; Samsung's preliminary (revenue/OP guidance-level) is the first hard test of whether HBM/memory demand is cracking or the drawdown was pure positioning.
  - Scope: (a) capture prelim numbers + HBM commentary; (b) test vs the falsifier gate — TRIPWIRE: primary-sourced Nvidia BASE-Rubin HBM order-volume cut OR hyperscaler capex cut = the real demand signal (neither exists as of 07-02); (c) cohort reaction read-through to HYNIX (#1 position) + KIOXIA + SNDK.
  - Linked: `companies/HYNIX/thesis.md`, `signals/cross-source-log/2026-07-02-kr-jp-selloff-TIER2-verification-addendum.md`

- [ ] **P2 / research / 2026-09-15** [INDP, CAL] — Cloudflare AI-crawler enforcement deadline (PD-3 data-enclosure catalyst)
  - Origin: 2026-07-01 evening-brief Leg B discovery pass (`signals/cross-source-log/2026-07-01-evening-brief-LEGB-discovery-pass-5-patterns.md`). Cloudflare forces AI companies to separate search vs training/agent crawlers by 2026-09-15 or face default blocking on publisher sites.
  - Scope: (a) at the deadline, verify enforcement actually happened + which labs complied vs got blocked; (b) does agent-crawler blocking create paid-rails demand for agentic browsing (new surface)?; (c) accrue PD-3 data-enclosure N-count (arXiv patronage exit = N=2 candidate).
  - Linked: `signals/cross-source-log/2026-07-01-evening-brief-LEGB-discovery-pass-5-patterns.md`

- [ ] **P2 / research / 2026-07-15** [INDP, POS, BOT] — Agent-security investable-surface scan (PD-4 watchlist GAP)
  - Origin: same Leg B pass. Agents gaining OS/terminal access (Gemini Spark, ZCode) while being weaponized (Claude Desktop double-agent, DeepSeek ransomware) = CrowdStrike-shaped nascent category; NO public pure-play identified.
  - Scope: map the emerging agent-security/identity/sandboxing landscape (startups, incumbent bolt-ons, funding rounds); identify any investable expression (public adjacents included); trigger-watch = first enterprise agent-breach headline.
  - Linked: `signals/cross-source-log/2026-07-01-evening-brief-LEGB-discovery-pass-5-patterns.md`, `watchlist/candidates.md`

- [ ] **P1 / research / 2026-Q4** [INDP, AF, POS, CAL] — BE (Bloom Energy) gas-supply TRIPWIRE — time-to-power falsifier checkpoint (REFRAMED 2026-07-01 PM after 2-agent verify)
  - Origin: 2026-07-01 BE+ALAB deep-dives + a 2-agent pipeline-vs-turbine verify (`signals/cross-source-log/2026-07-01-gas-pipeline-vs-turbine-time-to-power-2agent.md`). **CORRECTION: the original "~24-inch pipeline live ~2026-08-15" spec was UNVERIFIED — struck.** The real marquee gas-gated build is Oracle/BorderPlex "Project Jupiter" (NM, 2.45GW Bloom fuel cells) fed by the ~16-18mi "Green Chile" lateral off an EXISTING El Paso Natural Gas trunk. The lateral itself is fast (14-day BLM emergency review); the gate is permitting/legal.
  - Scope: (a) Track Project Jupiter's gas-connection gating items — Transwestern's Jan-2026 FERC application, the NM State Land Office denial on state trust land, the environmental protest; (b) if these BLOCK or materially delay the gas connection OR any marquee DC customer cites gas-supply as the binding constraint → "weeks not years" weakened → re-examine BE bull + hold/trim; (c) if the gas connection clears → speed-edge CONFIRMED → clears the staged remainder of the BE entry
  - Falsifier (revised, per BE thesis falsifier #1 + #5): gas connection blocked/materially delayed by the FERC/State-Land/protest items = thesis weakened; OR heavy-duty turbine lead times compress <~2.5yr before 2028 / PJM queue reform <2yr at scale = Bloom's time-to-power window closes structurally
  - REINFORCING context (do not lose): the verified turbine backlog (~4-6+yr time-to-power; GEV ~100GW backlog sold out into 2029-30) VALIDATES the core BE bull — the turbine queue is what creates Bloom's ~90-day window. The gas-supply risk is a permitting/legal + upstream-compression conditional, NOT a dated pipeline binary.
  - Also-watch: BE Q2 2026 print (~Jul-30) — GM trajectory (~30% Q1 base) + backlog firm-vs-framework split; ALAB Q2 FY2026 (~Aug-11) — Scorpio ramp toward #1-product-line guide
  - Linked: `companies/BE/thesis.md` (INITIATION DEEP-DIVE 2026-07-01 + PM reframe), `signals/cross-source-log/2026-07-01-gas-pipeline-vs-turbine-time-to-power-2agent.md`, `signals/cross-source-log/2026-07-01-BE-ALAB-initiation-deepdives-4agent.md`, `portfolio/changes.md`


- [x] **P1 / harness / 2026-06-26** [INFRA, CAL] — Two-bracket LLM-native enforcement experiment WEEK-3 check (week-1 DONE 2026-06-12; week-2 DONE 2026-06-19 — see `meta/recurring-audit-log.md` 2026-06-19 entry: 6 logged fires 06-12→19 (rebounded from 0 in 06-06→12 zero-window; vs 8 in week-1 baseline 06-01→07); logger verified working; week-2 read = "no signal — fire rate dominated by analytical-content-volume not priming bias effect" H4 candidate P~20%; H1 plateau P~50% / H2 decrease P~20% (down from 45%) / H3 increase P~10% / H4 noise P~20% (my model). Week-3 scope: same protocol — count 06-19→26 from hook-fire-log.md, sanity-check against analytical-content-volume confound, reweight. 30-day close ~07-01.)
  - Original item (week-1, for reference): Two-bracket LLM-native enforcement experiment week-1 check
  - Origin: 2026-06-01 user authorized live install of `llm-native-priming-hook.py` (UserPromptSubmit) + `structural-output-hook.py` (Stop). Two-bracket architecture: priming biases sampling distribution pre-generation; Stop hook companion enforces structural-output requirements post-generation.
  - **30-day experiment framing**: Track structural-output-hook fire rate week-by-week to distinguish:
    - **H1 (P~70% my model)**: pretraining gravity dominates → fires plateau or stay flat → retire both hooks
    - **H2 (P~20% my model)**: priming materially shifts default mode → fires DECREASE over 4 weeks → keep
    - **H3 (P~10% my model)**: architecture wrong; behavioral discipline higher leverage → fires INCREASE or stay flat AND user reports no qualitative shift → conclude H3, retire hooks
  - Week-1 check 2026-06-08: count structural-output-hook fires in past 7 days, log to `meta/recurring-audit-log.md`. Initial baseline expected ~30%+ fire rate; target trajectory toward <10% by end of 4 weeks.
  - Falsifier (immediate rollback): if priming-hook injection appears to produce WORSE outputs (rigid formulaic responses, naturalness collapse) on first 1-2 sessions, roll back same-day rather than wait 30 days.
  - Linked: `meta/alt-data-probabilistic-prediction-framework.md`, `meta/hooks/llm-native-priming-hook.py`, `meta/hooks/structural-output-hook.py`, `CLAUDE.md` Enforcement hooks section



### P2 — Medium priority

- [ ] **P2 / research / 2026-05-31** [INDP, AF, POS] — Deep dive: Synaptics (SYNA) edge AI candidate — Astra SR80 + Google Coral NPU
  - Origin: 2026-05-30 evening session subagent surfaced as best fit for Meta AI pendant + Google Gemini Spark signals tonight. Direct match: Astra SR80 NPU targets always-on wearable/AR-glasses far-edge market.
  - **Personal-computing + mobile-phone filter (user criteria added 2026-05-30)**: SYNA also major touch controller for AI PCs + Android smartphones = fits PC + mobile replacement-cycle filter
  - Scope: latest Q3 FY26 earnings + AI PC/wearable design wins + sell-side coverage thinness + investability check; **use ONLY data from past 30 days (no staler than April 30 2026 articles per user discipline catch 2026-05-30)**
  - Linked: `signals/cross-source-log/2026-05-30-overlooked-candidates-deep-dive.md` (to be created)

- [ ] **P2 / research / 2026-05-31** [INDP, AF, POS] — Deep dive: Camtek (CAMT) HBM + advanced packaging inspection candidate
  - Origin: 2026-05-30 evening session — CAMT surfaced INDEPENDENTLY in 2 of 3 parallel subagents (inference infrastructure + memory bottleneck) = highest cross-confirmation signal of the night. User flagged "Camtek might also benefit outside of just edge AI, and it's still a relatively small company."
  - Scope: HBM inspection Hawk platform + Eagle G5; 2026-2027 HBM bookings detail; broader AI chip volume exposure (beyond just edge AI); competitive position vs Onto Innovation + KLA; investability; **most-recent-quarter data only**
  - Linked: `signals/cross-source-log/2026-05-30-overlooked-candidates-deep-dive.md`

- [ ] **P2 / research / 2026-05-31** [INDP, AF, POS] — Deep dive: Lattice Semiconductor (LSCC) REFRESH from May 27 thesis
  - Origin: 2026-05-30 evening session — subagent re-surfaced LSCC as "overlooked." User flagged LSCC already in harness per `companies/LSCC/thesis.md` (created 2026-05-27 as Active-candidate). Need REFRESH not new build.
  - Scope: update LSCC thesis with last 3 days of news (any new design wins for edge AI / NVIDIA Halos Lab Holoscan Sensor Bridge); test personal-computing + mobile-phone filter (LSCC FPGAs serve broader edge incl. PC + mobile AI co-processors); reconcile new evening-brief Edge AI cluster with existing thesis; check AMI close timing
  - Linked: `companies/LSCC/thesis.md` + `signals/cross-source-log/2026-05-30-overlooked-candidates-deep-dive.md`

- [ ] **P2 / verification / 2026-05-30** [AF, POS] — DISCO 6146.T ENTRY decision pending capital allocation post-Monday execution
  - Origin: Surfaced via Citrini MLCC discussion 2026-05-30 → pivoted to Sumco-bypass-route thesis per `signals/cross-source-log/2026-05-30-citrini-mlcc-tier-rotation.md` discussion. User-confirmed investability 2026-05-30 (DISCO accessible alongside TEL 8035.T + Screen Holdings 7735.T also accessible).
  - Existing thesis: `companies/DISCO/thesis.md` (May 25 build; anti-fragility 5/5; 70-80% global market share dicing/grinding; near-monopoly moat) + 2026-05-30 Sumco-bypass cross-source synthesis appended.
  - Scope: After Monday 2026-06-01 MDB/DDOG/NOW execution settles, confirm remaining capital + decide DISCO entry sizing (recommended 3-5% = €5-10K). Resolve via Monday post-execution capital check.
  - Tracked separately in `predictions/inference-log.md` Entry #3 (~65% confidence, highest of 3 open inferences).
  - Linked: `companies/DISCO/thesis.md`, `companies/SUMCO/thesis.md`, `predictions/inference-log.md`

- [ ] **P2 / research / 2026-06-06** [INDP, POS, AF] — Computex 2026 post-event INGEST brief (Computex June 2-5; NVIDIA GTC Taipei keynote June 1)
  - Origin: User commitment 2026-05-30 to deliver brief after Computex ends, synthesizing keynote announcements + cross-portfolio cascade
  - Scope: (a) Verify NVDA N1/N1X PC processor specs + ARM partnership terms post-keynote; (b) Confirm Microsoft local AI agent software details; (c) Catch other portfolio-relevant announcements; (d) Update ARM AGI CPU thesis with Computex confirmation/falsification; (e) Cascade to held theses per Critical Rule #10
  - Linked: `signals/cross-source-log/2026-05-30-nvda-msft-arm-coordinated-ai-pc-tease.md`, `signals/cross-source-log/2026-05-30-arm-agi-cpu-deep-dive.md`, `companies/ARM/thesis.md`

- [ ] **P2 / verification / 2026-08-15** [CAL, AF, POS] — ARM Q2/Q3 FY27 earnings verification — AGI CPU revenue contribution + blended margin trajectory + FTC probe direction
  - Origin: 2026-05-30 ARM AGI CPU deep dive surfaced 3 risks under-weighted in prior coverage: (1) margin dilution (50% AGI CPU GM vs 98% IP licensing GM per CFO Jason Child to CNBC), (2) FTC antitrust probe opened May 2026 investigating ARM degrading/denying architecture licenses to competing licensees, (3) Stage 4 priced-to-perfection (+84% YTD)
  - Scope: At ARM Q2 FY27 print (~Aug 2026), evaluate (a) AGI CPU revenue contribution % of total, (b) blended GM trajectory, (c) FTC probe status update, (d) any additional named customer wins (AWS / Google / Microsoft transition from "supportive" to actual customers). If all 4 favorable → SIZE UP to Core tier (12-13%) actionable. If any unfavorable → maintain HOLD at 11.36% or reassess.
  - Linked: `signals/cross-source-log/2026-05-30-arm-agi-cpu-deep-dive.md`, `companies/ARM/thesis.md` AGI CPU section

### P2 — SoC building-block layer deep-dives (added 2026-05-31)

- [x] **DROPPED 2026-06-01** — Deep-dive: Synopsys (SNPS) + Cadence (CDNS) — EDA oligopoly at SoC building-block layer
  - **Reason dropped (user-directed 2026-06-01)**: IP licensing business cannot achieve same physical-scarcity moat as physical chokepoints (Murata MLCC, Sandisk NAND, Micron HBM, Hirano tape-casters). Moat type is contractual/legal/switching-cost, not capacity-constrained. Different moat type → outside scope of alt-data probabilistic prediction framework (which is built for physical chokepoint identification). User unverified hypothesis: "IP licensing from unit economics, they can never achieve that type of scarcity that a Sandisk or a Micron or a Murata can." Hypothesis acknowledged as unverified but structurally consistent with Right-Side-of-Belka physical-scarcity principle. Revisit if hypothesis later falsified.
  - Original origin: 2026-05-31 NVDA N1X SoC architecture analysis surfaced these as fully-convergent (edge + datacenter) beneficiaries with strong moat + low displacement + multi-quarter beat probability per `signals/cross-source-log/2026-05-31-soc-building-block-layer-analysis.md`
  - Linked: `signals/cross-source-log/2026-05-31-soc-building-block-layer-analysis.md`

- [ ] **P2 / research / 2026-06-02** [INDP, AF, POS] — Deep-dive: Advantest (6857.T) + Teradyne (TER) — SoC test duopoly
  - Origin: 2026-05-31 SoC architecture analysis — Advantest 66% share (+10pp YoY), op margin expanded 1,490bp to 44.2%; Teradyne Q1 2026 +87% YoY, AI = 70% of revenue per `signals/cross-source-log/2026-05-31-soc-building-block-layer-analysis.md`
  - Scope: full thesis build — duopoly moat mechanics, cyclical vs structural test demand, Blackwell Ultra + AMD MI400 + Apple + NVDA N1X pipeline, Advantest 10K systems/yr ramp, Teradyne stock-reaction-vs-fundamentals gap (Q1 2026 stock fell 19% on print), valuation check, investability confirm (6857.T = Japan TSE, accessible per `CLAUDE.md`)
  - **Refinement 2026-05-31 (user-directed)**: both already at ATH but hardware order book gives quarter-to-quarter visibility ONLY ("limited visibility" per Teradyne 10-Q); deep-dive must address whether AI test cycle extends into 2027 OR peaks 2026; Advantest 44.2% op margin is near structural ceiling = MARGIN RUNWAY SHRINKING question is central
  - Linked: `watchlist/candidates.md` § SoC building-block; `signals/cross-source-log/2026-05-31-soc-building-block-layer-analysis.md`; `signals/cross-source-log/2026-05-31-soc-building-block-durability-matrix.md`

- [ ] **P2 / research / 2026-06-02** [INDP, AF, POS] — Deep-dive: Alphawave Semi (AWE.L) — SerDes IP at high-speed interconnect layer + M&A status verification

- [ ] **P2 / research / 2026-06-04** [INDP, AF, POS] — Deep-dive: Seagate (STX) + Western Digital (WDC) — NAND-supply-constraint bypass plays at HDD cold-compliance tier
  - Origin: V2 NAND demand model 2026-05-31 (`signals/cross-source-log/2026-05-31-nand-demand-model-v2-verified.md`) — IDC NAND supply growth ~17% YoY 2026 below historical norms; EU AI Act 10yr retention enforcement Aug 2026 creates compliance pressure; HDD = cold-tier bypass beneficiary
  - Scope: full thesis build — HDD cold-compliance demand growth model, vs SSD substitution risk, AI-driven HDD demand vectors (training corpora cold storage, compliance retention), valuation, bottoms-up earnings, falsifiers, anti-fragility scoring
  - Linked: `watchlist/candidates.md` § NAND supply-constraint bypass plays

- [ ] **P2 / research / 2026-06-04** [INDP, AF, POS] — Deep-dive: Pure Storage (PSTG) — AI-storage software bypass play
  - Origin: V2 NAND demand model 2026-05-31 — NAND tightness creates value capture for flash-tier optimization + AI-native storage software
  - Scope: full thesis build — flash array competitive position vs Dell + NetApp + VAST Data, AI-storage product roadmap, valuation
  - Linked: `watchlist/candidates.md` § NAND supply-constraint bypass plays
  - Origin: 2026-05-31 SoC architecture analysis surfaced Alphawave at SerDes IP layer (PCIe 5.0 / USB4). User-flagged 2026-05-31 as potentially asymmetric (no parabolic move yet)
  - **CRITICAL FIRST STEP**: verify current status of Qualcomm £1.8B acquisition announced June 2025 (per [BusinessCloud T2](https://businesscloud.co.uk/news/qualcomm-to-acquire-alphawave-in-1-8bn-mega-deal/)) — if PENDING then this is M&A arbitrage, not structural thesis; if APPROVED/CLOSED then no longer trades as independent equity. User's "no parabolic move yet" observation may simply reflect the takeover-price pin
  - Scope: M&A status FIRST; only if Alphawave remains independent or arb-spread is wide enough → full thesis build (SerDes IP moat, customer wins, revenue trajectory, comp set vs Synopsys + Cadence SerDes IP)
  - Investability: UK-listed (LSE main market under "AWE"); confirm Degiro access
  - Linked: `watchlist/candidates.md` § SoC building-block; `signals/cross-source-log/2026-05-31-soc-building-block-layer-analysis.md`

### P2 — Existing items

- [x] **P3 / verification / 2026-06-24** [CAL, INDP, AF] — CONSOLIDATED Monthly Audit Cycle (FIRST CYCLE — merged 3 audits per user 2026-05-29)
  - **PREP CHECKLIST COMPLETE 2026-06-19** at `meta/monthly-audit-prep-2026-06-24.md` — 10 batched candidates + Sections 2-10 (Critical Rule #11 detectability / AUTO-EXECUTE STRENGTHENING / source-reliability / bottleneck-forecast / portfolio-coherence / cross-domain-pattern-register / session-prime / INDEX-tags refresh / Critical Rule #16 detectability) + autonomous-completion authorization status pre-loaded + pre-batched grep commands ready
  - **CONSOLIDATION NOTE 2026-05-29**: Previously 3 separate June 24 items (codification audit + claim-verification audit + Principle #34/B38 monitoring). User-directed merge into single audit per "doesn't make sense to have it three times."
  - **PART A — Codification audit** (expanded scope per 2026-05-28): each gets the 3-question test:
    - Principles: #29 (segmented triangulation), #30 (comp-set verification), #31 (narrative-stage modifier), #32 (pre-action checkpoints), #33 (top-down capability decomposition + 2026-05-28 competition-intensity refinement), candidate #34 (Supplier-Side Cross-Layer Moat Decomposition — check for N=2+ validation)
    - Biases: B31 (cross-segment aggregation), B32 (comp-set anchoring at valuation), B33 (narrative-stage-blind sizing), B34 (action without verification or premortem), B35 (within-category aggregation), B36 (visible-user-adoption anchoring when embedded), candidate B38 (demand-side decomposition blind-spot — check for N=2+ validation; promote OR retain candidate OR retire)
    - L14 (CODIFIED 2026-06-02): verify 2+ applications post-codification; confirm Stage 3-4 CATEGORY override is correctly applied in new PRO predictions
    - L15 (NEW 2026-06-02): verify corporate-event check discipline has been applied to any EPS prediction in first 30 days; confirm checklist is not wasted overhead
    - L16 (CANDIDATE 2026-06-02): check if N=2 accumulation-vs-conversion case has surfaced; promote or retain candidate
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
  - **Failure mode the audit protects against**: rapid codification cadence producing ossified text that's never actually applied = the most likely OS-degradation pathway given the recent codification velocity (Principles #29 → #34 + B31 → B38 + L14-L16 in <45 days)
  - **Where to document outcome**: `research/meta/principle-applications-log.md` "Monthly audit log" section
  - **Automation verification** (per user request 2026-05-29): 2 mechanisms confirm this will surface on 2026-06-24:
    1. `~/.claude/session-start-hook.py` is date-aware — surfaces with OVERDUE / DUE TODAY / DUE SOON markers at top of session briefing if user starts a session that day or after
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

- [ ] **P2 / harness / 2026-07-24** [INFRA, recurring] — PRUNING DISCIPLINE monthly pass (LLM-native context-hygiene, codified 2026-06-27 audit item #3)
  - Origin: 2026-06-27 LLM-native audit — harness is engineered to ACCRETE (every cascade appends) but my attention budget per context degrades with length ("lost in the middle"); a bloated harness dilutes retrieval MORE for an LLM than it slows a human. There is an accrete cadence but no matching PRUNE cadence.
  - Scope (monthly, 24th, alongside consolidated audit): identify what can be archived/compressed without losing load-bearing state — oversized thesis files (rounds 1-N → compress resolved rounds to a 1-line ledger + link), tier-cascade-log + subagent-cost-yield-ledger rotation (archive >30-day entries to a dated archive file, keep audit-summary head), stale cross-source-log consolidation, session-prime cap enforcement (≤500 lines). Treat pruning with the SAME seriousness as the audits — bloat is a silent cognition tax.
  - Metric: total harness char-count growth rate; per-file size flags (thesis.md >X KB → compress-resolved-rounds candidate); was anything load-bearing lost? (must be NO)
  - Linked: `meta/methodology.md`, `meta/session-prime.md` cap rules, `companies/*/thesis.md`, `meta/tier-cascade-log.md`, `meta/subagent-cost-yield-ledger.md`

- [ ] **P1 / harness / 2026-07-27** [INFRA, CAL] — Critical Rules #17 (ensembling) + #18 (dissent mandate) 30-day detectability re-eval
  - Origin: 2026-06-27 LLM-native audit codification (CLAUDE.md Rules #17/#18)
  - Scope #17: grep for ensembled high-stakes calls; did spread vary meaningfully (some 5/5, some 3/5)? did 3/5-flagged calls correlate with later-graded misses? POSITIVE = spread predicted uncertainty; NEGATIVE = always 5/5 (decorative) OR spread never correlates → retire
  - Scope #18: did thesis/sizing outputs reliably contain a falsifying-case section AND did it occasionally flip/temper a conclusion? POSITIVE = load-bearing; NEGATIVE = rote "bear case dismissed" boilerplate never changing a conclusion → refine or build falsifier-section Stop hook
  - Linked: `CLAUDE.md` Critical Rules #17/#18; `predictions/inference-log.md`; `meta/subagent-cost-yield-ledger.md`

---

## Archive (completed process items without permanent artifact)

(Items that DID produce a permanent artifact are deleted — the artifact replaces the to-do. The artifact location is noted in case future Claude needs to find it.)

- [x] **2026-06-02** [CAL, INDP] — HPE Q2 FY26 GRADE + L14 N=2 validation — COMPLETED per artifact production
  - Reason: Grade completed; L14 CODIFIED at N=2 (Stage 3-4 CATEGORY EVENT override validated by HPE +29-36% T+24h); L15 NEW (corporate event INPUT checklist); L16 CANDIDATE (accumulation vs conversion cohort sub-mechanism). Supply-Chain-Cohort Calibration framework: REFINE verdict (direction correct; magnitude under-predicted due to H3C INPUT gap + DELL sub-mechanism mismatch). Pending grade item removed from Pending table in grading-log.md.
  - Artifacts: `predictions/2026-06-01-HPE-Q2FY26-GRADE.md` (GRADED), `predictions/lessons.md` (L14 codified + L15 + L16 added), `predictions/grading-log.md` (HPE moved to Graded), `meta/todo.md` (this archive entry)

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
  - Artifact: `research/meta/source-reliability.md` rewritten with 5-dimensional framework (tier + track record + bias direction + signal-use + best/worst use case)
  - Sources audited: SemiAnalysis, Aschenbrenner, WSJ/Bloomberg, Sherwood News (COI flag), TrendForce (memory-specific), Digitimes, Tom's Hardware, Benzinga, TradingKey, 24/7 Wall St, Motley Fool (transcripts only), BeyondSPX, WCCFTech
  - Monthly cadence item created for remaining 6 sources

- [x] **2026-05-21** [INFRA, INDP] — Date-aware SessionStart hook + recurring-audit-log + GitHub Action reminder
  - Origin: User request 2026-05-21 — "ensure the source-reliability monthly audit happens; remind me; update me if done while I'm away"
  - Artifacts: `~/.claude/session-start-hook.py` (date-aware elevation with markers) + `research/meta/recurring-audit-log.md` + `.github/workflows/recurring-audit-reminder.yml` + `.github/scripts/check-recurring-todos.py` + `research/meta/hooks/` mirror

- [x] **2026-05-21** [INFRA, BOT, INDP] — Networking primer with first-principles + extrapolation framework
  - Artifact: `research/wiki/networking-primer.md`
  - Cascade: 8 thesis files updated with back-references per Rule #10; cascade hook verified exit 0
  - Side-effect: `meta/methodology.md` core principle #13 added

- [x] **2026-05-21** [INDP] — Re-verify VICR 2nd gen VPD specs at primary source
  - Finding: BeyondSPX numbers DISPROVEN per Vicor CEO Q1 2026 call. Corrected to 3 A/mm2 + 40x current multiplication.
  - Artifacts updated: `companies/VICR/facts.md`, `companies/VICR/thesis.md`, `meta/source-reliability.md`

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

- [ ] **P3 / research / 2026-07-15** [INDP, AF] — PARKED: Medtech-AI × Edge-AI/Physical-AI/AI-chip cross-theme overlap mapping
  - Origin: user brain dump 2026-06-10 PM ("there might be some overlap within the edge AI, robotics AI, physical AI and AI chip architecture... that's for later")
  - Scope: map ISRG da Vinci 5 (NVIDIA Blackwell/Clara), medical-edge inference SoCs (AMBA/SYNA adjacency), NVIDIA IGX/Holoscan medical-edge cohort against T8 + medtech-biotech-ai-thesis.md branches
  - Linked: sector/medtech-biotech-ai-thesis.md (PARKED section), sector/themes.md T8 + T10

- [x] **P2 / process / 2026-06-24** [OPT] — Monthly audit add-on: cross-domain-pattern-register first review
  - Origin: register created 2026-06-10 per user combinatorial-harness directive
  - Scope: verify register was load-bearing in any dissection since creation (cited in prompts? new instances appended?); promote/demote PC-9/10/11 candidates; apply net-positive test (subagent compute per dissection trending down?)
  - Linked: meta/cross-domain-pattern-register.md

- [ ] **P1 / process / 2026-07-11** [OPT, AF] — Codification rule first 30-day net-positive check
  - Origin: `meta/codification-rule.md` §3 self-detecting metrics; user 2026-06-11 directive
  - Scope: grep sessions 2026-06-11 → 2026-07-11 for (a) §1-triggered codifications (POSITIVE = ≥4 in 30 days); (b) read-rate of newly codified items in subsequent sessions; (c) FALSIFIER firing (zero codifications OR ≥10 codifications with zero subsequent reads); (d) B40 expansion garble taxonomy fire-rate per sub-type; (e) B44 chat-summary discipline drift recurrence; (f) L25 explicit-Bayesian-update pattern recurrence
  - Decision matrix: positive → promote codification rule to Critical Rule #13 in CLAUDE.md + B40/B44/L25 to confirmed; flat → refine triggers; negative → retire + build deterministic chat-summary-mirror hook
  - Linked: `meta/codification-rule.md`, `meta/biases-watchlist.md` B40/B44, `predictions/lessons.md` L25, `meta/principle-applications-log.md`

- [ ] **P2 / process / 2026-07-11** [OPT] — Signal-density-detection first 30-day net-positive check
  - Origin: `meta/signal-density-detection.md` §3 self-detecting metrics; built same day as codification rule first-check
  - Scope: (a) triangulation.md growth ≥1-3 lines/wk (was 0/wk during the 72-cross-source-log gap); (b) every [ACTIVE] cluster cites ≥3 dated sources; (c) cross-source-log files that produced NO triangulation entry after 60 days reviewed for missed convergence; (d) FALSIFIER firing → build deterministic promotion-check hook
  - Decision matrix: positive → keep manual; flat → tighten promotion rule; negative → deterministic hook required
  - Linked: `meta/signal-density-detection.md`, `signals/triangulation.md`, `meta/codification-rule.md` (parallel first check)

- [x] **P3 / process / 2026-06-24** [OPT] — INDEX.md + tags.md refresh + monthly audit consolidation
  - Origin: `INDEX.md` monthly refresh cadence; tags.md sync with newly added principles/biases/lessons
  - Scope: regenerate INDEX held-positions section against `portfolio/holdings.md`; sync tags.md against actual file state; cross-source-log >30 days summarized into triangulation entries OR explicitly flagged as noise

- [ ] **P1 / harness / 2026-07-12** [INFRA, CAL] — B45 priming-bracket effectiveness check (30-day audit)
  - Origin: 2026-06-12 user-articulated cross-session-anchoring concern; H1+H3 priming-hook addition + CLAUDE.md banner shipped same day to counter pre-training magnitude conservatism
  - Scope: grep session transcripts 2026-06-12 to 2026-07-12 for magnitude-categorizing language ("extreme", "elevated", "exhaustion-signaling", "above expectation", "stretched", "priced-to-perfection") combined with %-magnitude language. Cross-check: did each instance reference B45 / regime base rate / cohort empirical data? If yes → priming works. If no → priming failed; escalate to H2 (build deterministic magnitude-claim Stop hook)
  - Metrics: POSITIVE = ≥80% of magnitude flags reference B45/regime; NEGATIVE = <50% reference (instructions not enforced); FALSIFIER = 3+ magnitude-categorizing instances with NO B45 reference → build Stop hook same day
  - Linked: `meta/biases-watchlist.md` B45, `meta/hooks/llm-native-priming-hook.py`, `CLAUDE.md` regime-corrected-priors banner

- [ ] **P1 / research / 2026-09-12** [CAL, INDP] — B45 cohort base-rate quarterly recalibration
  - Origin: B45 codification 2026-06-12 — empirical regime base rates need quarterly re-verification; falsifier in B45 specifies "if cohort median 18-month return drops below +60% in next measurement period, revert toward standard prior"
  - Scope: re-run the 15-name AI-infrastructure basket subagent calibration (same names + Kioxia reference) for Jan/Feb 2026 → Sep 2026 window. Compute new band counts. If extreme-outlier count drops below 2 of 15 (vs current 6 of 15), regime priors weakened — update CLAUDE.md banner + priming hook item 8 to reflect new base rate. If extreme-outlier count stays ≥4 of 15, regime priors confirmed — B45 promoted from CANDIDATE to CONFIRMED.
  - Cascade: principle-applications-log.md entry + biases-watchlist.md B45 status update + CLAUDE.md banner refresh if needed
  - Linked: `meta/biases-watchlist.md` B45, `signals/cross-source-log/2026-06-12-pre-training-magnitude-conservatism-calibration.md`

- [x] **DONE 2026-06-26** — DURABLE HOOK ACTIVATION resolved via Architecture A (project-level `.claude/settings.json`), NOT laptop env-setup-script as originally planned. H1 test 2026-06-26 14:52:32Z confirmed Claude Code on Web reads `<repo-root>/.claude/settings.json` (diagnostic hook fired). Migration: all 16 research-OS hooks moved to `<repo>/.claude/settings.json` with absolute paths to `/home/user/Health-Calculators/research/meta/hooks/*.py`; `~/.claude/settings.json` emptied (backup at `~/.claude/settings.json.bak.pre-arch-a-2026-06-26`) to prevent merge duplication. Result: zero laptop dependency, zero install.sh dependency, zero ~/.claude/ dependency for hook persistence — settings ride with the repo via git clone. install.sh deprecated as primary activation; remains as emergency fallback. Full architecture rationale + verification protocol + migration history at `meta/hooks/DURABLE-ACTIVATION.md`. Falsifier: 2026-07-19 30-day audit checks `hook-fire-log.md` for fires on fresh-container sessions; if no fires, Architecture A failed and we fall back to install.sh + the original laptop-env-script approach.

- [x] **DONE 2026-06-26** — Activate session-prime-hook + macro-anchor-hook in mirror `research/meta/hooks/settings.json` (USER AUTHORIZED 2026-06-26 via "yes try it and test it"). Both hooks now wired in mirror + installed to `~/.claude/settings.json` via `install.sh`. Smoke-tested: session-prime-hook returns full `session-prime.md` as `additionalContext` on SessionStart events (exit 0); macro-anchor-hook fail-open on empty input (exit 0). DURABILITY caveat: persistence across container restarts still depends on P0 item directly above (install.sh as Web UI env setup script) — laptop required for that piece. Until then, run `bash research/meta/hooks/install.sh` at start of every fresh cloud container (or trigger via keyword pattern TBD). 2026-07-12 effectiveness audit unchanged.

- [ ] **P1 / harness / 2026-07-12** [INFRA, CAL] — Session-prime + B45 priming effectiveness joint audit (30-day check)
  - Origin: 2026-06-12 cross-session-anchoring defense stack (CLAUDE.md banner + priming hook item 8 + session-prime force-load)
  - Scope: grep transcripts 2026-06-12 → 2026-07-12 for (a) magnitude-categorizing language without B45 reference; (b) revert to pre-training base rates on AI-infra names; (c) session-prime.md staleness — was it updated when codifications happened?
  - Metrics: POSITIVE = <2 magnitude-flag instances without B45 reference + session-prime updated within 7 days of every codification commit; NEGATIVE = ≥3 magnitude reverts OR ≥2 codifications without session-prime update → escalate to magnitude-claim Stop hook + session-prime-cascade-hook
  - Linked: `meta/session-prime.md`, `meta/biases-watchlist.md` B45, `meta/hooks/llm-native-priming-hook.py`, `meta/hook-fire-log.md`

- [x] **P2 / harness / 2026-06-24** [INFRA] — Session-prime curation rule integration into monthly audit
  - Origin: 2026-06-12 session-prime.md created with explicit cap rules (500-line hard / 250-400 target) — needs first monthly audit verification
  - Scope: at monthly codification audit (2026-06-24), verify session-prime.md (a) is ≤500 lines, (b) all listed CANDIDATE biases are still active (not gone INERT >30 days), (c) listed recent lessons are within rolling-5 window, (d) regime base rate not stale, (e) any codification commits since session-prime creation also updated session-prime
  - Action: prune INERT items; promote/demote per the file's own cap rules; add to consolidated monthly audit checklist

- [ ] **P2 / verification / 2026-06-24** [INDP, AF, POS] — TC-9 candidate promotion decision (agentic-observability mandate)
  - Origin: 2026-06-12 morning brief surfaced 4-signal stack over 2 days on agentic-deployment-without-observability failing (DN42 agent bankruptcy + KPMG hallucinations report + DeepMind multi-agent safety funding + botsitting 6+hrs/wk). Segment: agentic-application. Direct tailwind for DDOG + NOW (both held). Per Critical Rule #14, N≥3 same-segment same-direction → promotable.
  - Scope: at 2026-06-24 monthly audit, verify the 4 source items remain T2/T3-tier; check for additional same-segment signals between 2026-06-12 and 2026-06-24; if N≥5 with same direction → promote TC-9 to ACTIVE and cascade sizing-implication review for DDOG + NOW; if signals drift to different sub-segments → keep CANDIDATE and re-examine at next monthly audit
  - Linked: `signals/cross-source-log/2026-06-12-morning-brief-21-item-triage.md` §5; `companies/DDOG/thesis.md` 2026-06-12 cross-ref; `companies/NOW/thesis.md` 2026-06-12 cross-ref

- [ ] **P2 / verification / 2026-09-30** [INDP, AF, POS] — ALAB Trainium3 Scorpio fabric award watch (Q3 2026 expected per RBC T2)
  - Origin: 2026-06-12 connectivity-layer re-evaluation (`signals/cross-source-log/2026-06-12-connectivity-layer-alab-reevaluation-2subagent.md`) — single most informative upcoming datapoint for the ALAB H1/H3 split
  - Scope: confirm whether AWS Trainium3 scale-up fabric socket goes to ALAB Scorpio or MRVL; if ALAB → entry trigger (a) fires, enter 2-3% per re-evaluation; if MRVL → demote ALAB watchlist P2→P3 + H3 (absorption squeeze) reweights up materially
  - Secondary triggers tracked same item: 2nd CXL hyperscaler disclosure (CATEGORY EVENT, run L14-v2 pre-rally check before entry); ALAB Q2-26 print ~Aug 11 (estimate)
  - Linked: `companies/ALAB/thesis.md` 2026-06-12 re-evaluation

- [ ] **P1 / research / 2026-06-15** [INDP, AF, POS] — Build MRVL thesis on equal footing with ALAB re-eval (NEW HELD POSITION ~5.9%)
  - Origin: 2026-06-12 PM portfolio rotation introduced MRVL as new ~5.9% holding (44 sh @ $287); no existing thesis file in harness. User asked "should we own both to hedge ALAB" — the question is mal-formed without an MRVL thesis on the connectivity-layer evaluation matrix used for ALAB (`signals/cross-source-log/2026-06-12-connectivity-layer-alab-reevaluation-2subagent.md`).
  - Scope: full thesis build — apply the same 6-axis connectivity matrix (content-per-accelerator / standard-rail / commercial-revealed-preference / breadth / moat depth / valuation vs B45) to MRVL; XConn integration milestones; 51.2T CPO traction; NVLink Fusion design wins (named); Structera CXL pipeline; AEC competitive position vs Credo; FY27/FY28 framework
  - Cross-reference: connectivity re-eval cross-source-log + ALAB thesis 2026-06-12 entry; joint-state with ALAB rivalry
  - Output: `companies/MRVL/thesis.md` + joint MRVL-vs-ALAB comparator section in connectivity log

- [ ] **P2 / research / 2026-06-20** [INDP, POS] — Document why DDOG + NOW were trimmed -33%/-35% in 2026-06-12 rotation
  - Origin: 2026-06-12 PM rotation cut software-cluster exposure materially; thesis files don't yet reflect rationale; rotation reduces TC-9 (candidate agentic-observability mandate) cascade beneficiaries' weight before TC-9 promotion audit 2026-06-24
  - Scope: confirm with user whether trim reflects: (a) valuation discipline, (b) thesis conviction softening, (c) capital reallocation to MRVL/SNDK, (d) all of the above; cascade to DDOG + NOW thesis files

- [ ] **P1 / verification / 2026-08-25** [INDP, AF, POS, CAL] — MRVL Q2 FY27 print + L14/L19/B42 watch (HELD ~5.9%)
  - Origin: 2026-06-12 3-subagent MRVL deep-dive (`signals/cross-source-log/2026-06-13-MRVL-deep-dive-3subagent.md`); falsifier #1 of MRVL thesis fires/falsifies at this print
  - Scope: (a) Was FY28 custom Si guide RAISED with named NEW XPU customer (Google MPU, new hyperscaler)? → confirms H1 bull; (b) Was guide reaffirmed with no new named customer? → base case dominant; (c) Was guide trimmed? → bear K2 fires → trim trigger; (d) Stock T+24h reaction vs L14/L14-v2 framework — calibration data point
  - Linked: `companies/MRVL/thesis.md` falsifier #1; `predictions/lessons.md` L11/L12/L13; `signals/cross-source-log/2026-06-13-MRVL-deep-dive-3subagent.md`

- [ ] **P2 / verification / 2026-07-22** [POS, CAL] — MRVL post-S&P inclusion drag watch (falsifier #5)
  - Origin: 2026-06-12 MRVL deep-dive K5 imminent risk (S&P inclusion Jun-22; 30-day post-inclusion drag pattern); falsifier #5 from `companies/MRVL/thesis.md`
  - Scope: at Jul-22 (30d post-inclusion), check MRVL stock action: down >15% AND no fundamental bear-news → L14 give-back pattern worse than expected → reweight Stage 3-4 modifier + trim trigger. Down <10% → K5 risk dissipated. Anywhere in between → monitoring
  - Linked: `companies/MRVL/thesis.md` falsifier #5

- [ ] **P3 / research / 2026-09-30** [INDP, AF] — Retrieve NVDA Securities Purchase Agreement full exhibit (currently SEC 403)
  - Origin: 2026-06-12 MRVL bear subagent — SPA exhibit not retrievable at T1; lock-up + standstill + exclusivity terms unverified; this drives MRVL falsifier #4
  - Scope: attempt EDGAR retrieval via alternate paths (10-Q/10-K reference exhibits, FOIA equivalents, redacted version in proxy materials); failing that, monitor for 13D/G or 8-K amendment exposing terms

- [x] **DONE 2026-06-12 PM** — Activate macro-anchor-hook in ~/.claude/settings.json — USER AUTHORIZED verbally ("I would activate it") 2026-06-12 20:11 UTC; registered as 14th Stop hook; verified via settings.json parse + sanity run exit 0. NOTE: session-prime-hook activation REMAINS PENDING (separate P0 item) — user's authorization was singular ("it") in macro-anchor context
  - Origin: 2026-06-12 user-articulated cross-session anchoring concern (every output should be macro-first research-anchored); Critical Rule #15 + B46 candidate codified same day; hook built + smoke-tested (fires on position-relevant without anchor; passes with macro/T1/tie-together marker)
  - Action: add `{"type":"command","command":"~/.claude/macro-anchor-hook.py"}` to Stop hooks array in ~/.claude/settings.json
  - Trade-off: more output friction (analytical responses must explicitly anchor to macro / tag claims / tie micro-to-macro); user explicitly accepted "slower replies, more accuracy" trade
  - Falsifier already in place per Critical Rule #15: 30-day fire-rate audit; retire if <3x/month OR false-positive >30%
  - Linked: `CLAUDE.md` Critical Rule #15; `meta/biases-watchlist.md` B46; `meta/hooks/macro-anchor-hook.py`

- [ ] **P1 / harness / 2026-07-12** [INFRA, CAL] — Macro-anchor hook + B46 effectiveness audit (30-day check)
  - Origin: 2026-06-12 codification of Critical Rule #15 + B46
  - Scope: grep `meta/hook-fire-log.md` for macro-anchor-hook entries 2026-06-12→2026-07-12; cross-check transcripts for analytical outputs that PASSED the hook's pattern check but still exhibited B46 (framing-vs-institutional contradiction); if pattern persists despite tagging discipline → escalate to Workflow #9 mandatory pre-research subagent
  - Metrics: POSITIVE = ≥3 fires AND each caught a genuine recall-anchored output AND user reports framing improvements; NEGATIVE = <3 fires (inert) OR ≥30% false-positive rate
  - Linked: `meta/hooks/macro-anchor-hook.py`; `meta/biases-watchlist.md` B46; `CLAUDE.md` Critical Rule #15; `meta/hook-fire-log.md`

- [x] **DONE 2026-06-12 PM** — Workflow #9 MACRO-FIRST RESEARCH full specification — completed early (was due 2026-06-20); written into CLAUDE.md Core Workflows section as Workflow #9 incorporating user's 5-step pipeline articulation verbatim (research pass → first-principles articulation → metric evaluation → future inference via triangulation + pattern-matching against P-register/TC-clusters → company tie-in). Quality bar + #8 relationship + origin failure + falsifier all specified. Artifact: CLAUDE.md §Workflow 9.

- [x] **DONE 2026-06-12 EVE same-session** — Rubin CPX B40 contradiction RESOLVED via verification subagent: Scenario (c) — June 12 brief recycled Sept 10, 2025 SemiAnalysis article as fresh news (URL confirmed `semianalysis.com/2025/09/10/...`). June 4 cancellation anchor was CORRECT. HYNIX HBM thesis INTACT. B40.1 increment to N=10+. Closed in cross-source-log verification register. Discovery D2 (inference architecture bifurcation) ALSO COLLAPSES — no Rubin CPX = no prefill/decode chip-class split from NVDA side.

- [ ] **P2 / verification / 2026-06-20** [INDP] — Fable 5 / Mythos 5 access-restore check (H1 transient vs H2 structural resolver)
  - Origin: 2026-06-12 US export-control directive disabled Fable 5 + Mythos 5 globally (`signals/cross-source-log/2026-06-12-us-export-control-fable-mythos-suspension-model-layer-FIRST.md`). H1 transient (P~45% my model) confirms if access restored allied-tier by ~June 20; if still disabled or a 2nd model-layer action appears, H2 structural-regime weight rises.
  - Scope: check Anthropic status + news for Fable/Mythos restoration; check for any SECOND model-layer export action (any provider); update TC-10 candidate cluster N-count + status
  - Linked: TC-10 in `signals/triangulation.md`; the export-control cross-source-log

- [ ] **P1 / research / 2026-06-25** [INDP, AF, POS, BOT] — EU-sovereign-AI infra investable-expression RESEARCH GAP (add to supply-chain graph reconstruction)
  - Origin: 2026-06-12 model-layer export-control signal (TC-10) — IF H2/H3 plays out, cleanest investable expression is EU-sovereign-AI serving infra; currently NO held or watchlist name captures it. Mistral is private (€3B raise 2026-06-12). Need investable proxies.
  - Scope: during the monthly supply-chain graph reconstruction cycle, fan out specifically on EU-sovereign-AI infra investable names (sovereign cloud, EU-compliant model serving, EU data-residency infra) that pass the investability filter (Degiro/N26 accessible). Surface 2-3 candidates if they exist.
  - Linked: TC-10; `signals/cross-source-log/2026-06-12-us-export-control-fable-mythos-suspension-model-layer-FIRST.md`; existing supply-chain graph reconstruction P1 (2026-06-25)

- [ ] **P2 / verification / 2026-09-13** [INDP] — TC-11 ITC Section 337 petition watch (UMC vs TSMC patent enforcement)
  - Origin: 2026-06-13 AM brief item #15 — Republican congresspersons petition ITC to block TSMC chip imports via UMC patents (T2 Tom's Hardware). N=1 candidate cluster TC-11 (hardware-IP/patent enforcement at chip-import layer; distinct from TC-7 export-side).
  - Scope: 90-day watch for (a) ITC formal acceptance of Section 337 investigation (procedural milestone); (b) N=2 instance — any other hardware-IP enforcement action targeting AI chip flow; (c) hyperscaler/foundry public commentary
  - Outcome decision tree: ITC accepts + N=2 emerges → promote TC-11 CANDIDATE → ACTIVE → cascade to MRVL/NVDA watchlist + held MRVL thesis update; ITC declines OR no N=2 → keep candidate; close at 2026-09-13 monthly review
  - Linked: TC-11 in `signals/triangulation.md`; `signals/cross-source-log/2026-06-13-morning-brief-15-item-triage-tc10-promoted.md`

- [ ] **P3 / verification / 2026-06-25** [INDP] — Contrail Compute AIX RISC-V AI execution platform T1 verification
  - Origin: 2026-06-13 AM brief item #12 — Epic Semi PR claims first RISC-V AI execution platform. Single source (T2 vendor PR); ARM-alternative thesis watch (ARM held 3.2%).
  - Scope: verify whether AIX is shipping product OR pre-product PR; if real, what customers / volume / when does it reach commercial scale; does it materially threaten ARM royalty model in next 24-36 months
  - Linked: `companies/ARM/thesis.md`; `signals/cross-source-log/2026-06-13-morning-brief-15-item-triage-tc10-promoted.md`

- [ ] **P1 / research / 2026-06-15** [INDP, AF, POS] — Sizing-decision threads if user proceeds with TC-10 + Layer-3 candidates
  - Origin: 2026-06-14 AM 2-subagent parallel research (`signals/cross-source-log/2026-06-14-eu-sovereign-AI-and-corrected-layer-3-bypass-2subagent.md`) surfaced 4 candidates closing 2 harness gaps:
    - **TC-10 (EU-sovereign-AI):** Capgemini (CAP.PA) + Deutsche Telekom (DTE.DE) as cleanest pair, both ~12x fwd P/E, both Degiro-accessible
    - **Layer-3 power-bypass (Time-to-Power):** Bloom Energy (BE) as ONLY empirical near-zero-TTQ name (55-day Oracle deployment); Vertiv (VRT) for density-bypass
  - Scope IF user gives go: build full thesis files for top 2 (likely BE + one EU sovereign-AI name) with Bull/Bear/Base + falsifiers; verify current pricing T2 pre-sizing; size at 2-3% Active-band each on entry; integrate with existing held cohort joint state
  - Falsifier of going forward: user prefers to wait for monthly audit 2026-06-24 cycle to fold into supply-chain reconstruction first

---

- [ ] **P1 / harness / 2026-07-01** [INFRA, CAL, OPT] — Two-bracket hook retirement decision (30-day close)
  - Origin: WEEK-3 audit 2026-06-26 confirms 8→6→7 fire pattern = PLATEAU; H1 plateau P~55% / H2 priming-effective P~10% (my model)
  - Scope: per pre-authorized retirement framework, decide RETIRE both hooks (llm-native-priming + structural-output) OR override + extend experiment based on qualitative review
  - Cost impact: priming-hook injects ~10-15k tokens per UserPromptSubmit = significant aggregate cost saving on retire
  - User-authorization required to `rm ~/.claude/llm-native-priming-hook.py` + `rm ~/.claude/structural-output-hook.py`
  - Linked: `meta/harness-optimization-audit-2026-06-26.md` TIER 2 item A

- [ ] **P1 / harness / 2026-07-15** [INFRA, OPT] — Build temporal-attribution-hook + input-data-tier-hook + cohort-decoupling-hook (3 new Stop hooks)
  - Origin: harness-optimization audit 2026-06-26 TIER 2 item B; failure modes H2 + H1 + H3 surfaced as N=2+ pattern in 7 days
  - Scope: build 3 deterministic enforcement hooks per Principles #39 / #40 / #41 candidates (added today to methodology.md)
  - Cost: ~30min build each; minimal runtime; requires user `cp` to `~/.claude/` for activation
  - Linked: `meta/harness-optimization-audit-2026-06-26.md` TIER 2 item B

- [ ] **P2 / process / 2026-07-15** [INFRA, OPT] — Weekly competitive-product surveillance subagent (add to recurring schedule)
  - Origin: harness-optimization audit 2026-06-26 TIER 3; MRVL Trainium 3 loss + SNDK MU 245TB ION both surfaced POST-HOC via monthly H2 bear-case workflow (should surface earlier)
  - Scope: per held name, scan competitor-product announcements weekly (1-2 hops to direct substitutes); output per-name competitive displacement risk Δ vs prior week
  - Cost: ~50-80k tokens/week for 7-name cohort = ~200-320k/month vs current monthly H2 bear-case (~280k); 4× cost vs monthly catches displacement 3-4 weeks earlier
  - User-decision required: add weekly cadence OR keep monthly H2-only
  - Linked: `meta/harness-optimization-audit-2026-06-26.md` TIER 3

---

- [x] **P1 / harness / 2026-06-26** [INFRA, OPT] — Workflow #10 MORNING-FEED-SCAN cron activation (USER GREENLIGHT REQUIRED)
  - Origin: user-articulated 2026-06-26 morning autonomous newsfeed design + design-lock confirmation
  - Scope: schedule 4 daily Opus 4.8 subagent fires via CronCreate tool — pre-Korea 01:30 CET / pre-Japan 01:45 CET / pre-Europe 08:30 CET / pre-US 15:00 CET
  - Pre-requisites: full spec codified in `meta/methodology.md` Workflow #10 + `meta/morning-feed-sources.md` + `meta/morning-feed-prompts.md`
  - Token budget: ~1.6-2.4M/week additive
  - User action: GREENLIGHT activation OR adjust spec first

- [ ] **P1 / process / 2026-07-03** [INFRA, OPT, CAL] — Workflow #10 first-week review + prompt optimization
  - Origin: Workflow #10 codified 2026-06-26 with explicit first-week review window
  - Scope: 5 trading days Mon 2026-06-30 → Fri 2026-07-04; audit (a) sources signal/noise; (b) prompts effective vs false-positive; (c) convergence rate vs user Twitter shares; (d) cost vs benefit; (e) prompt-template optimization; (f) source-list curation; (g) Tier 2 trigger calibration
  - Output: append to `meta/recurring-audit-log.md` + update `meta/morning-feed-sources.md` + `meta/morning-feed-prompts.md` per learnings
  - Detectability falsifier: <30% convergence with user shares OR cost >2.5M/week = retire/refine
  - Linked: `meta/methodology.md` Workflow #10 + `meta/harness-optimization-audit-2026-06-26.md`

---

- [x] **P1 / harness / 2026-07-03** [INFRA, CAL] — Workflow #10 cron re-activation (7-day auto-expiry hit)
  - Origin: CronCreate 2026-06-26 activated 4 schedules (IDs: 1ee4b492 Pre-Korea / 43ed7043 Pre-Japan / 9e9a36bc Pre-Europe / cc3b327d Pre-US) — auto-expire after 7 days per tool spec
  - Action: re-fire CronCreate × 4 with same spec on 2026-07-03 to extend recurring schedule another 7 days
  - WEEKLY recurring cadence going forward (every Friday)
  - Linked: Workflow #10 in `methodology.md`; first-week review 2026-07-03

- [x] **P1 / harness / 2026-06-26** [INFRA, CAL] — SESSION-PERSISTENCE CONSTRAINT — Workflow #10 crons die when Claude session exits
  - Origin: CronCreate 2026-06-26 outputs flagged "Session-only (not written to disk, dies when Claude exits)" DESPITE durable=true setting
  - Operational constraint: morning scans only fire if Claude session active when cron time hits
  - User-facing: ensure Claude session remains open Mon-Fri 01:30 / 01:45 / 08:30 / 15:00 CET for scans to fire
  - Mitigation candidates: (a) keep session alive via web/CLI; (b) investigate tool-side durable persistence override; (c) flag at next harness audit for resolution

---

- [x] **P1 / harness / 2026-06-26** [INFRA, OPT] — Workflow #10 keyword-trigger pattern codified (replaces failed cron)
  - Origin: 2026-06-26 PM user-directed simple keyword pattern after cron session-only constraint surfaced
  - Triggers: "good morning Korea and Japan" + "good morning EU" + "good morning US"
  - Spec: `meta/methodology.md` Workflow #10 KEYWORD-TRIGGER REPLACEMENT section
  - Status: LIVE; first fire on next user trigger message
