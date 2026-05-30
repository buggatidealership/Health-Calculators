# Inference Log — Directional Calls Made From Reasoning Chains (Not Earnings Predictions)

**Last updated:** 2026-05-30
**Purpose:** Track directional inferences I make where the conclusion is derived from a REASONING CHAIN extrapolated from a signal, not from the signal itself. Separate from `grading-log.md` (which tracks earnings/event predictions) because the resolution mechanism is different: inferences resolve via subsequent prints, customer-win disclosures, competitor moves, or category emergence — not a specific event date.

## Why this file exists

User-articulated framing 2026-05-30 verbatim: *"tagging what is inference and what is facts, like hard truth, is something that that categorization might be helpful as any new session can see. Okay. What was inference? What was facts? But then it also has to resolve as in... does the inference work. Right? Both have to be analyzed. Right? Even if it's right or wrong."*

Captures the harness gap that:
- Facts vs interpretations are tagged at the FILE level (`facts.md` vs `interpretations.md`)
- Inferences within synthesis artifacts (cross-source-log, thesis cascade back-refs, etc.) are NOT tagged — they get treated as load-bearing claims without explicit "this is my chain" marker
- And — critically — they DON'T RESOLVE. They sit forever, never graded RIGHT/WRONG/MIXED. The harness can't learn calibration on the inference-tier reasoning.

This log fixes both: explicit inference tag + explicit resolution criterion + resolution date.

## Field schema

| Field | Description |
|---|---|
| **#** | Sequential ID |
| **Date made** | When the inference was logged |
| **Ticker(s)** | Held or candidate name(s) the inference reads on |
| **Source signal** | What single signal or pattern triggered the inference |
| **Inference chain** | The reasoning steps from signal → directional conclusion (each step labeled fact/extrapolation) |
| **Type** | LOGICAL EXTRAPOLATION (chain of plausible steps) / PATTERN INFERENCE (cross-data-point synthesis) / DOMAIN INFERENCE (applying general knowledge) |
| **Confidence** | Rough probability the inference is directionally correct (%) |
| **Resolution criterion** | What specific data point will resolve this (next print? competitor move? category disclosure?) |
| **Resolution date** | When the criterion should crystallize |
| **Could be WRONG if** | 2-4 specific failure modes that would falsify the inference |
| **Outcome** | PENDING / RIGHT / WRONG / MIXED / RETIRED |
| **Grade date** | When grading was actually run |
| **Lesson** | If RIGHT/WRONG/MIXED, what generalizable insight emerged |

## Process

**When to log:** any time I write "reinforces" / "tailwind" / "implies for [TICKER]" / "directional call" / "positions [TICKER] to benefit" from a single signal + inference chain (not from corroborating data).

**When to grade:** when the resolution date hits or the resolution criterion crystallizes (e.g., the next print for that ticker drops). Run RIGHT / WRONG / MIXED classification + append lesson to `predictions/lessons.md` if generalizable.

**Calibration check:** if inferences as a category run 70%+ RIGHT over 10+ data points, my reasoning chains are well-calibrated. If <40% RIGHT, the harness over-extrapolates from single signals.

## Open inferences

| # | Date made | Ticker(s) | Inference (1-line) | Type | Confidence | Resolution date | Outcome |
|---|---|---|---|---|---|---|---|
| 1 | 2026-05-30 | DDOG | OpenAI Codex Windows → enterprise need agent supervision → DDOG positioned to benefit at agent-fleet-observability layer | LOGICAL EXTRAPOLATION | ~60% (UPDATED 2026-05-30: bump to ~65% IF Reddit $500M Claude mystery enterprise orthogonally verified within 2 weeks — per `signals/cross-source-log/2026-05-30-evening-may29-morning-may30-briefs.md` Pattern 4) | DDOG Q2 CY26 print (~2026-08-05) + interim signals (competitor launches, customer wins, $500M-class enterprise governance failures surfaced publicly) | PENDING |
| 2 | 2026-05-30 | MURATA (held) vs MLCC equipment/raw material universe (TDK, Komatsu, Sakai, others TBD) | Citrini directional call: MLCC equipment + raw material suppliers outperform MLCC producers from here on asymmetric basis (producers rerated; bypass-route via capex tailwind for suppliers-to-producers) | PATTERN INFERENCE (propagating Citrini's analyst call + my own bypass-route logic per Critical Rule #9) | ~55% | 3-6mo relative performance check (track Sakai 4078.T relative to Murata even though inaccessible — source-reliability data) + Murata Q2 + Q3 prints | PENDING — INVESTABILITY-BLOCKED for portfolio action (Sakai not accessible; TDK/Komatsu reject per thesis-clarity); resolution still tracked for Citrini source-reliability calibration |
| 3 | 2026-05-30 | DISCO (candidate; user-investability-confirmed) vs Komatsu parent (rejected vehicle) | Sumco-bypass-route thesis: AI wafer demand outpaces Sumco/Shin-Etsu capacity → wafer makers MUST order dicing/grinding equipment → DISCO 70-80% share captures most → market reraces (Stage 1-2 narrative on equipment side currently) | LOGICAL EXTRAPOLATION (UBS Sumco upgrade single signal + bypass-route logic per Critical Rule #9) | ~65% (HIGHER than Entry #1 + #2 because: DISCO market share is verified data; investability confirmed; existing DISCO thesis already 5/5 anti-fragility) | DISCO Q1-Q2 FY27 backlog vs FY26 (next print) + UBS-equivalent Sumco capex disclosure within 6mo | PENDING |

---

## Entry #1 — DDOG agent-fleet-observability call

**Date made:** 2026-05-30
**Ticker(s):** DDOG (held 6.64%; Monday SIZE UP planned to ~9.0%)
**Source signal:** OpenAI Codex Windows computer-use launch 2026-05-29 per `signals/cross-source-log/2026-05-30-openai-codex-windows-computer-use.md`
**Type:** LOGICAL EXTRAPOLATION (single signal + chain, not pattern triangulation)

**Inference chain (each step labeled):**
1. **FACT** (from announcement): Codex computer-use agents click buttons + type on Windows endpoints; mobile app supervises desktop work
2. **EXTRAPOLATION** (assumption): IF enterprises adopt at scale, every employee has agents on their Windows machine
3. **EXTRAPOLATION** (assumption): Enterprises will require supervision (security, performance, compliance, audit trail) for those agents
4. **EXTRAPOLATION** (assumption): That supervision capability = the agent-observability category
5. **DOMAIN KNOWLEDGE**: DDOG is dominant cross-cloud unified observability player per `companies/DDOG/thesis.md`
6. **CONCLUSION**: DDOG positioned to capture agent-supervision spend at the enterprise tier

**Confidence:** ~60% directional (MEDIUM). Reasoning chain has 4 assumption steps; each ~85-90% probable individually = compound ~55-65%.

**Resolution criteria:**
- **PRIMARY**: DDOG Q2 CY26 earnings print (estimated ~2026-08-05). Does management mention any of: "agent supervision", "Codex", "Computer Use", "Windows agent observability", "mobile-supervises-desktop" in prepared remarks, customer wins, OR product roadmap?
- **SECONDARY**: Does a competitor (Splunk, New Relic, Dynatrace) launch a direct agent-supervision product targeting Windows-resident agents between 2026-05-30 and 2026-08-05?
- **TERTIARY**: Does an enterprise customer publicly name DDOG as their agent-supervision vendor in a case study or press release before 2026-08-05?

**Could be WRONG if:**
1. Microsoft bundles agent supervision into Defender/Sentinel = category-bypass (DDOG misses)
2. Cloudflare bundles supervision into 6-layer stack at zero marginal cost = low-end commoditization (DDOG enterprise moat intact but TAM compresses)
3. OpenAI builds first-party supervision tools native to Codex = DDOG cut out of OpenAI-deployed agents specifically
4. Enterprises don't adopt Codex Windows at scale within 6mo → no agent-supervision demand emerges → inference falsifies on premise, not conclusion

**Outcome:** PENDING (resolution ~2026-08-05)

**Notes:**
- Original framing in `signals/cross-source-log/2026-05-30-openai-codex-windows-computer-use.md` claimed "+5% directional reinforced" for DDOG cascade back-ref. Per 2026-05-30 self-correction (acknowledged user catch), this is INFERENCE not signal corroboration. Marker added.
- Cross-reference: DDOG thesis cascade back-ref currently states "+5% directional reinforced" — should be edited to flag as INFERENCE per this log entry. **Action item for next thesis update: replace overstated cascade language.**

---

## Future entries

When I write any directional "reinforces X" claim that isn't grounded in (a) inline source citation, (b) corroborating data from another signal, or (c) explicit thesis-falsifier check — append a new row above + structured entry below.

---

## Entry #2 — Citrini MLCC tier-rotation call (equipment/raw materials > producers from here)

**Date made:** 2026-05-30
**Ticker(s):** MURATA (held 13.06% — incumbent producer) vs MLCC equipment/raw material candidates (TDK 6762.T, Komatsu 6301.T, Sakai Chemical 4078.T TBD, BaTiO3 / Nickel / Silver exposure names)
**Source signal:** Citrini Research note shared 2026-05-30 via user; full extraction at `signals/cross-source-log/2026-05-30-citrini-mlcc-tier-rotation.md`
**Type:** PATTERN INFERENCE — propagating Citrini's analyst-tier call + applying Critical Rule #9 bypass-route logic

**Inference chain (each step labeled):**
1. **FACT (Citrini-cited)**: AI server MLCC market $600M (2025), growing 80%+ CAGR; high-end MLCC lead times >20 weeks; book-to-bill >1; Tier 1 (Murata + Taiyo Yuden + SEMCO) all building AI server capacity
2. **FACT (observation)**: MLCC producer stocks have already rerated (Murata +X% over prior period — needs valuation context to verify magnitude)
3. **EXTRAPOLATION (Citrini's directional call)**: Equipment + raw material suppliers benefit MORE than producers from here because they sell to EVERY producer simultaneously (capex tailwind concentrates on a smaller supplier base)
4. **EXTRAPOLATION (bypass-route logic per Critical Rule #9)**: When consensus is "buy producers", the bypass-route is to ask "what do the producers DEMAND to expand?" = equipment + raw materials. This is the same pattern as Time-to-X framework applied to capacity expansion (vs supply tightness)
5. **CONCLUSION**: MLCC equipment + raw material suppliers should outperform MLCC producers over the next 3-12 months on asymmetric basis

**Confidence:** ~55% directional (MEDIUM-LOW). Lower than Entry #1 because: (a) Citrini's track record on supply-chain tier-rotation calls is partially verified but not fully calibrated; (b) producer rerating may continue if AI server demand outpaces expectations; (c) raw material exposure is commodity-tier (nickel/silver) and harder to isolate as MLCC-driven; (d) equipment maker stocks may have already partially captured this signal — need valuation context.

**Resolution criteria:**
- **PRIMARY (3-6mo)**: Do MLCC equipment-maker stocks (Komatsu 6301.T, TDK 6762.T equipment-segment growth, ASM Pacific Technology if relevant) outperform Murata 6981.T total return over the next 3-6 months?
- **SECONDARY (6mo)**: Do raw material names with MLCC exposure (Sakai Chemical 4078.T if accessible; Vale nickel exposure; silver miners) outperform Murata over 6mo?
- **TERTIARY (3-6mo)**: Do Murata Q2 + Q3 FY26 prints show ASP compression that producers struggle to pass through (validates the implicit "producer margin squeeze" framing in Citrini's call)?
- **QUATERNARY (interim cross-source)**: Do new sell-side notes / analyst upgrades start appearing on the equipment + raw material tier (signal of consensus catching up)?

**Resolution date:** 2026-11-30 (~6mo) for primary check; Murata Q2 print (~2026-08-05) for tertiary; rolling for quaternary

**Could be WRONG if:**
1. Murata's price-hike pass-through to OEMs in 2026-2027 catches up = producer margin tailwind retained > equipment/raw material tailwind
2. Equipment makers face capex compression in 2027 if hyperscaler/auto demand digests (MLCC capacity lead time = 18-24mo to bring on; if demand softens by 2027, equipment orders dry up first)
3. China Tier 2/3 commoditizes equipment market (Chinese MLCC equipment makers replace Japanese suppliers at the mid-low end)
4. Citrini's track record on tier-rotation calls turns out to be 50/50 over a longer window (need source-reliability audit)
5. Producer-vs-equipment relative performance gap closes via Murata appreciation rather than equipment outperformance (sideways equipment, up Murata)

**Outcome:** PENDING (resolution rolling 3-6mo)

**Cross-references:**
- `signals/cross-source-log/2026-05-30-citrini-mlcc-tier-rotation.md` — source signal extraction
- `companies/MURATA/thesis.md` — cascade back-ref added same commit
- `meta/methodology.md` Critical Rule #9 (bypass-route thinking) — framework applied
- `meta/source-reliability.md` Citrini track-record entry — to update post-resolution

**Notes:**
- This inference resolves a different way than Entry #1: Entry #1 = "DDOG benefits" (single-direction call); Entry #2 = "X outperforms Y" (relative-performance call). Resolution mechanism is comparable returns over a window, not a binary outcome.
- Per user 2026-05-30 discipline catch ("don't default to print as resolution"): primary resolution is 3-6mo relative performance, not the Murata Q2 print specifically.

---

## Entry #2 INVESTABILITY-BLOCKED UPDATE (2026-05-30)

**User investability confirmation 2026-05-30:** Sakai Chemical 4078.T NOT accessible on user's platforms (Degiro / N26). TDK 6762.T + Komatsu 6301.T + Modec 6269.T are accessible.

**Resolution path update:**
- TDK rejected: parallel producer exposure recreates user's earlier "too similar to Murata" concern (flagged 2026-05-29)
- Komatsu rejected: MLCC equipment exposure too diluted by mining + construction revenue dominance
- Modec disqualified: ticker identification error (FPSO offshore oil, not MLCC equipment)
- Sakai 4078.T archived as reference artifact per LGI / NCI 4092 / Shoei 4953 investability-blocked pattern

**Portfolio action: NONE — HOLD MURATA at 13.06% as the producer-tier exposure capturing the structural growth Citrini's note validates.** Citrini's own note flags "OEM contracts have not seen large price hikes YET" — producer margin tailwind still coming.

**Inference resolution tracking continues** despite no portfolio action: track relative performance of Sakai 4078.T vs Murata over 3-6mo as a source-reliability calibration data point for Citrini. If Citrini's call materializes (equipment + raw materials outperform), it adds to Citrini's track record even though we can't act on it from this platform; if it doesn't materialize, downgrades Citrini's tier-rotation-call track record. Either way the inference grades for FUTURE Citrini-call calibration.

**Lesson candidate (provisional):** an inference can be RIGHT (analytically valid) and yet NON-ACTIONABLE (no investable expression on the user's platform). The harness should still track these for source-reliability + future-accessibility re-evaluation, not discard them. Add to `predictions/lessons.md` if pattern repeats N=2+.

---

## Entry #3 — DISCO Sumco-bypass-route thesis (cleaner alternative to Komatsu rejected vehicle)

**Date made:** 2026-05-30
**Ticker(s):** DISCO 6146.T (new ENTRY candidate, user-investability-confirmed) vs Komatsu 6301.T (REJECTED as MLCC tier-rotation vehicle due to 91% mining/construction dilution per `companies/SUMCO/thesis.md` adjacent analysis)
**Source signal:** Multi-source convergence — UBS Sumco upgrade SELL→NEUTRAL PT JPY 1,050→3,100 2026-05-29 (per `signals/cross-source-log/2026-05-29-twitter-cohort-wafer-test-equipment-kioxia.md`) + Citrini MLCC discussion 2026-05-30 (per `signals/cross-source-log/2026-05-30-citrini-mlcc-tier-rotation.md`) + DISCO existing 70-80% market share verified per existing `companies/DISCO/thesis.md` (May 25 build)
**Type:** LOGICAL EXTRAPOLATION (bypass-route logic per Critical Rule #9 + single UBS signal converging with existing thesis)

**Inference chain (each step labeled):**
1. **FACT** (UBS T2 + Sumco UBS upgrade): "Wafer shortages now a possibility" + capacity expansion catalyst
2. **EXTRAPOLATION** (assumption): IF wafer demand outpaces Sumco + Shin-Etsu capacity, those wafer makers MUST expand capacity within 12-24mo
3. **EXTRAPOLATION** (assumption): Capacity expansion REQUIRES dicing/grinding/polishing equipment orders
4. **FACT** (per `companies/DISCO/thesis.md` Goldman/JPM verified): DISCO holds 70-80% global market share in that equipment with 4x lead over closest competitor
5. **EXTRAPOLATION** (assumption): DISCO captures most of the order surge → backlog grows, pricing power tightens
6. **CONCLUSION**: DISCO benefits from a NEW tailwind (Sumco-bypass) on TOP of existing 5/5 anti-fragility (advanced packaging + SiC power semi + chip fab back-end)

**Confidence:** ~65% directional (MEDIUM-HIGH). HIGHER than Entries #1 and #2 because: (a) DISCO market share is hard data not extrapolation, (b) investability confirmed, (c) existing DISCO thesis already 5/5 anti-fragility (new tailwind compounds existing thesis vs being load-bearing alone), (d) UBS signal converges with bypass-route framework I would have arrived at anyway via Critical Rule #9.

**Resolution criteria:**
- **PRIMARY (3-6mo)**: DISCO Q1-Q2 FY27 backlog vs FY26 baseline — does wafer-maker order surge appear in backlog disclosure?
- **SECONDARY (6mo)**: Sumco + Shin-Etsu capex disclosure in Q2 FY26 print (~July-Aug 2026) — do they announce specific capacity expansion budgets that would flow to DISCO?
- **TERTIARY (3-6mo)**: Equipment lead time disclosures (DISCO + competitors) — do lead times extend, confirming tight equipment supply?
- **QUATERNARY (3-6mo)**: Stage 4 narrative shift — sell-side notes/upgrades on DISCO specifically tied to Sumco capacity expansion (signal of consensus catching up)?

**Resolution date:** 2026-08-30 to 2026-11-30 (rolling 3-6mo)

**Could be WRONG if:**
1. Sumco + Shin-Etsu capacity expansion is smaller than UBS framing implies (modest capacity adds vs major build-out) → DISCO order surge muted
2. Chinese competitors (Naura, GL Tech) scale faster than expected → DISCO market share erosion accelerates
3. Plasma dicing displacement (existing thesis bear case) hits major design wins in this window → DISCO mechanical-dicing moat compresses
4. AI capex digests in 2027 → wafer-maker expansion paused
5. Stage 3-4 mid-recognition already partially priced — Sumco-bypass tailwind doesn't drive material re-rating; multiple stays flat

**Outcome:** PENDING (resolution rolling 3-6mo)

**Cross-references:**
- `companies/DISCO/thesis.md` — full thesis (May 25 build + 2026-05-30 cross-source synthesis appended)
- `companies/SUMCO/thesis.md` — held position; complementary upstream layer
- `signals/cross-source-log/2026-05-29-twitter-cohort-wafer-test-equipment-kioxia.md` — UBS Sumco upgrade source
- `signals/cross-source-log/2026-05-30-citrini-mlcc-tier-rotation.md` — discussion thread that surfaced DISCO pivot

**Notes:**
- This inference SUPERSEDES Entry #2 for portfolio action purposes: Entry #2 (Citrini MLCC tier-rotation) is investability-blocked; Entry #3 (DISCO Sumco-bypass) is investability-confirmed AND structurally stronger thesis.
- Entry #3 confidence ~65% > Entry #2 ~55% > Entry #1 ~60% — DISCO is the highest-conviction inference of the three because the supporting data is hardest + the moat is verified.
- Per user 2026-05-30 discipline catch ("don't default to print as resolution"): primary resolution is DISCO backlog disclosure + Sumco capex disclosure; secondary/tertiary are interim signal markers; not gated on a single print event.
