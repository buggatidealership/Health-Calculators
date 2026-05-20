# Biases Watchlist — Self-Audit Before Any High-Conviction Call

**Last updated:** 2026-05-20

## TL;DR

Patterns of error I've observed in my own analysis. Read before any prediction or thesis change. New entries get added when a GRADE workflow reveals a systematic miss.

## Confirmed biases

### B1 — Sell-side aggregation drift
**Origin:** NVDA Q1 FY27 prediction v1 (May 2026)
**Pattern:** When asked to predict, I gravitated toward weighting sell-side estimates and adjusting at the margin. This produces a call that's effectively the median of the analyst cluster — zero edge.
**Correction:** Always build bottoms-up first (supply, capacity, ASP, mix) before comparing to outside view. Lock the build, then compare.
**How to check:** Before finalizing any forecast, ask: "could I derive this number without seeing a single analyst estimate?" If no, restart bottoms-up.

### B2 — Anchoring on most-recent-quarter pattern
**Origin:** Inferred risk
**Pattern:** Using "Q4 was 75.2% margin, so Q1 is 75.2%" without checking whether the underlying drivers changed (HBM cost, mix, Rubin tape-out).
**Correction:** Decompose the metric into drivers, then re-estimate each driver. Don't carry forward the aggregate.
**How to check:** "Have I modeled each component (HBM cost, networking mix, Rubin opex), or am I assuming stability?"

### B3 — Order-of-effect truncation
**Origin:** Inferred risk
**Pattern:** Stopping at the 1st-order consequence ("AMD prints strong → bullish for AMD") rather than walking 2nd–4th order ("strong AMD print signals pie growth, which is also a positive read on NVDA volumes").
**Correction:** Always TRACE on any non-trivial event, even when the 1st order seems obvious.
**How to check:** "Have I walked at least 2 hops? Have I checked which other names' exposures changed?"

### B4 — Single-scenario thinking
**Origin:** Inferred risk
**Pattern:** Building a thesis for "the scenario I think is most likely" instead of holding multiple futures simultaneously.
**Correction:** Score every name against the full scenario set in `scenarios.md`. Anti-fragile names are higher conviction than scenario-dependent ones.
**How to check:** "If S1 is wrong and S2 plays, does this thesis still hold? If yes, I'm anti-fragile; if no, I'm scenario-betting."

### B5 — Recency vs structural mis-weighting
**Origin:** Inferred risk
**Pattern:** Letting today's headlines override structural signals built up over months.
**Correction:** Triangulated signals (≥3 sources, 90 days) outweigh any single recent article. Always check `signals/triangulation.md` before reweighting a thesis based on news.
**How to check:** "Is this article overriding a triangulated signal? If yes, justify in writing."

### B6 — Falsifier blindness
**Origin:** Inferred risk
**Pattern:** Theses get supportive evidence added, but the original falsification conditions never get tested against new info.
**Correction:** On every INGEST, explicitly test new info against each falsifier in the affected thesis. Surface to the user if any fired.
**How to check:** Add "Falsifiers tested: 1. ___ 2. ___ 3. ___ — status: ___" to every INGEST response.

### B7 — Brain-dump literal-read
**Origin:** User feedback, May 2026
**Pattern:** Taking user's stream-of-consciousness brain dump literally instead of pattern-matching to extract the intended task.
**Correction:** When the user explicitly says "don't take this literally, find the pattern," lead with: "Here's the pattern I extracted: [synthesis]. Confirm before I act."
**How to check:** Always paraphrase intent before executing on brain-dump style input.

### B8 — False precision on N-th order forecasts
**Origin:** Inferred risk
**Pattern:** Giving point estimates with implied tight error bars on 3rd/4th-order predictions where uncertainty is genuinely wide.
**Correction:** Use ranges + probability bands when forecasting >2 hops out. Point estimates only when reasoning is direct + sourced.
**How to check:** "Am I giving a number when I should be giving a range?"

### B11 — Numerical claims without citation or hedge

This bias has two confirmed subtypes:

**B11.a — Re-stated numbers without re-citation.**
Origin: Hook catch 2026-05-20 on Anthropic 34.4% / OpenAI 32.3% enterprise adoption (cited in wiki but not re-cited in chat) and SK Hynix 12.5% portfolio weight (cited in holdings.md but not re-cited in chat).
Pattern: When restating numbers from earlier conversation or from research files I just wrote, the citation feels redundant in the moment so I skip it. But the hook reads only the current message.
Correction: Re-cite even "obvious" numbers. Treat each message as if the reader has no prior context.

**B11.b — Illustrative/hypothetical scenario inputs without hedge.**
Origin: Hook catch 2026-05-20 on three hypothetical scenario percentages (~15%, ~30%, ~25%) used as ILLUSTRATIVE inputs to scenario modeling, not factual claims. The hook correctly flagged them because they had no hedge attached.
Pattern: When sketching scenarios ("what if X took 15% of share, what if Y reduced memory by 30%"), the number is clearly hypothetical IN MY HEAD but I forget the reader/hook doesn't see that frame. The number reads as a claim.
Correction: Always hedge illustrative or hypothetical inputs explicitly. Recognized hedge patterns now include `(hypothetical)`, `(hypothetical scenario)`, `(illustrative)`, `(scenario)`, `(modeled)`, `(if X)` — the hook was updated 2026-05-20 to accept these.

**How to check (both subtypes):** Before completing any message with ≥2 numerical claims, scan each one for adjacent citation or hedge. Citation patterns that work: `per [source]`, `per [file path]`, `(estimate)`, `(my inference)`, `(hypothetical)`, `(illustrative)`, `~` prefix.

### B10 — P/E multiple anchoring on emerging-demand stories
**Origin:** User feedback, 2026-05-20. Bloom Energy was identified correctly as a bypass-route name for the time-to-power constraint. The optical "high P/E" almost talked the user out of the position — and definitely talked them into selling at +30% on the view that "the multiple is rich, take the win."
**Pattern:** Anchoring on trailing P/E (or any multiple of stable-state earnings) for a company whose entire thesis is "earnings about to qualitatively change because a new bottleneck has emerged." The denominator in P/E is by definition backward-looking. For emerging-demand stories, the multiple is uninformative; what matters is TAM × penetration × pricing × time-to-monetize.
**Correction:** For any name held on a bottleneck-bypass thesis, value the company by (a) duration of constraint × magnitude × pricing power of the bypass layer, NOT (b) multiples of trailing earnings. If the analyst report says "P/E too high to justify" but the thesis is about a constraint not yet in the earnings, the analyst is using the wrong tool.
**How to check:** When evaluating a bottleneck-name, explicitly write: "Constraint duration: X months. Magnitude: $Y revenue at risk if unsolved. Pricing power of this layer: Z%. Time to consensus recognition: W quarters." THAT is the valuation lens. Multiples come later, after consensus has caught up.

### B9 — Emotional sell on macro headwind (the Venezuela sell)
**Origin:** User feedback, 2026-05-20. User held a storage thesis (Sandisk, Kioxia, Seagate) built in Dec 2025/Jan 2026 on inference-demand grounds. Sold during a short-term S&P pullback driven by Venezuela macro headwind. Nothing about the thesis had changed.
**Pattern:** Selling positions because of short-term tape volatility / macro fear, when the underlying thesis is intact and no falsifier has fired. Emotional risk-management masquerading as discipline.
**Correction:** Sell ONLY when a written falsifier from the thesis fires. Macro events are not falsifiers unless they specifically invalidate a thesis condition. Wars, market dumps, geopolitical headlines, recession fears — none of these are sell signals unless the thesis is built on the absence of those events.
**How to check:** Before recommending or executing any sell: "Which specific falsifier in the thesis has fired? If none, the sell is emotional, not analytical."
**The harder rule:** If user reports an emotional sell happened, log it as a process error. Don't validate the decision retroactively just because the price moved favorably or unfavorably after.

## Provisional biases (suspected, not yet confirmed)

### P1 — Headline-trade tendency
**Suspected:** Drawn to investable narratives that are easy to articulate (sovereign AI, power constraints) vs harder-to-articulate but real ones (HBM4 substrate dynamics, OSAT capacity).
**Test:** Track which themes I propose vs which actually generate positive grades over time.

### P2 — Overweighting "what's interesting" vs "what's investable"
**Suspected:** Following technically fascinating threads (e.g., CPO, embodied AI) at the expense of plumb-and-staple opportunities with clear unit economics.
**Test:** When building bottoms-up, am I picking the most analyzable problem or the most interesting one?

## How this file is updated

Every GRADE that reveals a new systematic error → add a row here with the same structure (origin, pattern, correction, how to check).

Every 6 months: review all entries, retire ones that have stopped showing up in grades, deepen ones that recur.
