# Reasoning Templates

**Last updated:** 2026-05-20

Concrete templates for the analytical operations the system performs. Copy these when running a workflow — they enforce consistency and prevent skipped steps.

## Template 1 — N-th Order Trace

For TRACE workflow. Save to `signals/events/{date}-{event}.md` when significant.

```markdown
# Trace: {Event}

**Date:** YYYY-MM-DD
**Trigger source:** [primary/secondary] + URL/reference

## TL;DR
[1 line — the most actionable insight from this trace]

## 1st order consequences (P > 80%)
- [Consequence] → [direct beneficiary/casualty]
- [Consequence] → [direct beneficiary/casualty]

## 2nd order (P ~60%)
- [Knock-on] → [name]
- [Knock-on] → [name]

## 3rd order (P ~40%)
- [Further effect] → [name]
- [Further effect] → [name]

## 4th order (P ~20%, speculative)
- [Tail effect] → [name]

## Names whose exposure changed
| Ticker | Order | Direction | Reasoning |
|---|---|---|---|
| ... | ... | bull/bear/mixed | ... |

## Confirmation signals (this trace is right if these fire)
1. ...
2. ...

## Invalidation signals (this trace is wrong if these fire)
1. ...
2. ...

## Files updated
- companies/{TICKER}/interpretations.md
- companies/{TICKER}/exposures.md
- watchlist/candidates.md (if new names)
```

## Template 2 — Bottoms-Up Prediction

For PREDICT workflow. MANDATORY pre-read: `predictions/lessons.md` + `meta/biases-watchlist.md`.

```markdown
# Prediction: {TICKER} {Event}

**Made:** YYYY-MM-DD
**Resolution date:** YYYY-MM-DD
**Workflow:** PREDICT
**Lessons read:** [confirm yes]
**Biases reviewed:** [confirm yes]

## TL;DR
[The call in 1 line]

## What I'm predicting (specific, measurable)
- Metric 1: point estimate + unit
- Metric 2: ...

## Bottoms-up build (do this BEFORE looking at consensus)

### Drivers
- Driver 1: [supply/capacity/ASP/mix component] → contribution to outcome
- Driver 2: ...

### Build
[Step-by-step arithmetic showing how the drivers compose into the point estimate]

### Sensitivity
- Low case: [point - x%] if [driver assumption breaks low]
- High case: [point + x%] if [driver assumption breaks high]

## Comparison to outside view
| Metric | My estimate | Consensus | Buy-side whisper | Difference |
|---|---|---|---|---|
| ... | ... | ... | ... | ... |

[Why I'm different from consensus — what drivers am I weighting differently?]

## Calibrated probabilities
- P(beat consensus): X%
- P(beat whisper): X%
- P(at my point ±5%): X%

## Falsification conditions (mandatory)
1. Specific testable condition that would prove me wrong
2. ...
3. ...

## What input am I weighting heavily (so I can grade it later)
- ...
- ...

## Position implication (if any)
[Should we trade on this? Already positioned? Adjust?]
```

## Template 3 — Anti-Fragility Scoring

For any company. Score across all scenarios in `sector/scenarios.md`.

```markdown
## Anti-fragility — {TICKER}

| Scenario | Probability | This name | Reasoning |
|---|---|---|---|
| S1 — [name] | X% | Win/Loss/Neutral/Mixed | ... |
| S2 — [name] | X% | Win/Loss/Neutral/Mixed | ... |
| S3 — [name] | X% | Win/Loss/Neutral/Mixed | ... |
| S4 — [name] | X% | Win/Loss/Neutral/Mixed | ... |
| S5 — [name] | X% | Win/Loss/Neutral/Mixed | ... |

**Score: M/5** (wins in M scenarios outright; "mixed" counts as 0.5)

**Implication for conviction:**
- ≥4/5 → Core candidate
- 3/5 → Active candidate
- ≤2/5 → Scenario-dependent; Watchlist only unless one scenario is very high probability
```

## Template 4 — Signal Triangulation

For TRIANGULATE workflow.

```markdown
# Triangulated signal: {Theme}

**Promoted from:** signals/cross-source-log.md
**Date promoted:** YYYY-MM-DD
**Confidence:** High (3+ independent sources within 90 days)

## TL;DR
[1 line — what's the directional read]

## Source convergence
1. [Source 1, date, what was said]
2. [Source 2, date, what was said]
3. [Source 3, date, what was said]
[Note independence — these must NOT all cite the same primary source]

## What the signal says (directional)
[The convergent thesis]

## Names affected (run TRACE)
[Link to trace doc or inline list]

## What would break this signal
[Reverse: what evidence would suggest the convergence is coincidence not pattern]
```

## Template 5 — Ingest Response

For INGEST workflow. This is what the user sees when they share something.

```markdown
TL;DR: [1 line, no jargon]

WORKFLOW: INGEST

## Source validity
[Primary/secondary/tertiary | high/medium/low credibility | rationale in 1 line]

## What's new (facts only)
- ...
- ...

## My interpretation
[2–4 lines — what this actually means, my inferred read]

## Patterns most humans miss
[Cross-domain connections, 2nd-order effects, weak-signal convergence I noticed]

## Larger-context placement
[Where on the value chain / which epoch / which causal chain / which theme]

## Files updated
- ...

## Thesis impact
- {TICKER}: [none / minor / major — direction]

## Portfolio action implied
[None / monitor / consider sizing change in {TICKER}]
```

## Template 6 — Grading a Resolved Prediction

For GRADE workflow. Append summary to `predictions/lessons.md`.

```markdown
# Grade: {original prediction filename}

**Prediction date:** YYYY-MM-DD
**Resolution date:** YYYY-MM-DD
**Workflow:** GRADE

## TL;DR
[Were we right? Within what error?]

## Predicted vs actual
| Component | Predicted | Actual | Hit/Miss | Magnitude |
|---|---|---|---|---|
| ... | ... | ... | hit/miss | ... |

## What I got right
[Specific reasoning that held up]

## What I got wrong
[Specific reasoning that didn't]

## The single most important miss
[Which input did I over- or under-weight? Be specific.]

## Generalizable lesson
[1 sentence — what changes about my approach next time]

## Bias added to biases-watchlist
[If a new pattern emerged → add to biases-watchlist.md and reference here]

## Append to lessons.md
[Copy the lesson block here for the user to see]
```

## Template 7 — Bottleneck Forecast (monthly)

For BOTTLENECK-FORECAST workflow.

```markdown
# Bottleneck Forecast — YYYY-MM-DD

## TL;DR
[What's changed since last review]

## Current binding constraints (status update)
[For each row in bottlenecks.md current section: still binding? eased? worsened?]

## Next-6-12-month forecast (changes)
[Which candidates strengthened/weakened. New candidates surfaced.]

## Next-12-24-month forecast (changes)
[Big-picture. The investable edge.]

## New position recommendations
[If any constraint has materially shifted, which names warrant action]

## bottlenecks.md updated with new last_review: YYYY-MM-DD
```
