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
| 1 | 2026-05-30 | DDOG | OpenAI Codex Windows → enterprise need agent supervision → DDOG positioned to benefit at agent-fleet-observability layer | LOGICAL EXTRAPOLATION | ~60% | DDOG Q2 CY26 print (~2026-08-05) | PENDING |

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
