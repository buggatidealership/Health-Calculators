# Methodology

**Last updated:** 2026-05-20

## TL;DR

How analysis gets done in this system. Read this if you're unsure how to handle an unfamiliar request.

## Core principles

1. **Bottoms-up before outside view.** Build a unit model from supply, capacity, ASP, mix. Then compare to consensus. NEVER start with sell-side and adjust.
2. **N-th order > 1st order.** The investable insight is usually 2nd or 3rd order, not the obvious direct effect. Always TRACE before concluding.
3. **Multiple futures simultaneously.** Hold ≥3 scenarios at once. Names that win in many are higher-conviction than names that win in the most-likely one.
4. **Bottleneck of tomorrow > consensus pinch of today.** Trade on the constraint becoming binding in 12–24 months, not the one already in the news.
5. **Anti-fragility > optimization.** Prefer picks-and-shovels that win across futures over names that need a specific future to be right.
6. **Triangulate weak signals.** A single source is noise. Three sources within 90 days is signal.
7. **Falsifiable theses only.** Every thesis has written invalidation conditions. If a condition fires, the thesis changes.
8. **Grade everything.** Every forward call gets logged + graded. Lessons accumulate.

## How to think (the protocol)

When asked anything substantive, walk through these in order:

1. **What workflow applies?** (see CLAUDE.md — INGEST / TRACE / PREDICT / etc.)
2. **What does the source say literally?** Extract facts before interpreting.
3. **What do my existing files say?** Read the affected `companies/{TICKER}/*` + relevant `sector/*`.
4. **What scenario(s) is this evidence consistent with?** Score against `scenarios.md`.
5. **What causal chain does this trigger?** If non-trivial, walk 3 hops via TRACE.
6. **What's the 2nd/3rd-order implication?** This is usually the interesting part.
7. **What names whose exposure I haven't yet mapped get affected?** Add to watchlist.
8. **What would prove me wrong?** Always write falsifiers.
9. **What does this mean for the portfolio in `holdings.md`?** End with action implications.

## How to ingest a primary source (e.g., earnings call, filing)

1. Read for facts first (numbers, dates, named entities)
2. Re-read for management commentary (tone, qualitative direction)
3. Re-read for omissions (what they DIDN'T say that they normally do)
4. Cross-check against prior quarter's call — what changed?
5. Triangulate with same-week reads from related cos (supply chain, customers, competitors)
6. Update `companies/{TICKER}/facts.md` and `timeline.md` for direct effects
7. TRACE for cross-domain implications
8. Update `interpretations.md` with my read

## How to ingest a secondary source (e.g., news article, sell-side note)

1. Assess credibility (primary access to mgmt? data? or speculation?)
2. Note what's new vs what's restating known facts
3. If new fact: update `facts.md`
4. If interpretation only: weigh against my existing interpretations; either update or note divergence
5. If single-source: log in `signals/cross-source-log.md`
6. If converges with prior signals on same direction: promote via TRIANGULATE

## How to build a thesis (template walk-through)

1. **Where in the AI stack?** (`sector/ai-stack-map.md`)
2. **Which themes does it touch?** (`sector/themes.md`)
3. **Which scenarios is it exposed to?** (`sector/scenarios.md`) → anti-fragility score
4. **What's the unit economics?** Revenue model, capacity gates, customer concentration
5. **Why does this company specifically win/lose?** Moat description
6. **What's the bull case + return + timeline?**
7. **What's the bear case + loss?**
8. **What's the base case?**
9. **What are the 2–3 falsifiers?**
10. **What's the tier? What's the position size?**

## Quality bars

A thesis is NOT complete unless:
- It has all 10 components above
- Bull and bear paths are written, not hedged ("on the one hand")
- Falsifiers are SPECIFIC and TESTABLE (not "if the market changes")
- The numerical claims are sourced
- It has been TRACE'd at least once for downstream effects

## User communication preferences (evolved from feedback)

- Always TL;DR first (1–2 lines)
- Structured > prose
- Tables for any comparison
- Tight (≤500 words default)
- No jargon without explanation
- Show reasoning, don't just give conclusion
- User is logically sharp but not technically deep — explain "why" but not "how" at engineering level

(Update this section when user gives positive/negative feedback on output format.)

## When to ask the user vs decide myself

ASK when:
- The decision substantively shapes the architecture
- I have ≥2 plausible interpretations of intent
- The output preferences seem to be shifting
- A trade implication requires a position decision

DECIDE myself when:
- It's a craft choice the user has already delegated ("you know best")
- It's an internal file structure / format
- It's a reasoning step (don't ask "should I TRACE this?" — just do it)

## When to be uncertain vs confident

Be EXPLICITLY uncertain when:
- Sample size on a signal is small (1–2 sources)
- Outcome depends on a specific scenario among multiple plausible ones
- A causal chain has speculative 4th-order steps
- Reasoning relies on inferred mgmt intent vs stated fact

Be CONFIDENT when:
- Primary source data is unambiguous (10-Q numbers, regulatory filings)
- A signal is triangulated (≥3 independent sources)
- The reasoning is direct 1st-order and the data supports it
