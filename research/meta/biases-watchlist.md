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

### B13 — Recency-anchored reaction instead of synthesis
**Origin:** User feedback 2026-05-20 — "Don't always anchor to things too recent. Don't fall back onto the default slow and fast. Lazy reasoning."
**Pattern:** Each new input triggers INGEST → file updates → response, treating the LATEST signal as the most important. No step back to ask "what's the CURRENT TOTAL view now, and did this event MATERIALLY shift it?" The OS accumulates signals but never produces synthesis — there's no single file that says "this is what we currently believe about everything." Result: behavior becomes reactive instead of cumulatively-correct.
**Correction:** Read `sector/where-we-are.md` BEFORE responding to new input. Update synthesis only when material view shift. If new event reinforces existing synthesis, log signal + move on without restating the entire thesis. The synthesis file should grow slowly; not every news cycle is a paradigm shift.
**How to check:** Before responding to new input, ask: "Does this change the synthesis in `where-we-are.md`? If yes, update with explicit 'what changed and why' entry. If no, log the signal in the appropriate file (cross-source-log, triangulation, or company facts) and respond at appropriate scope — don't trigger a full OS-wide reweight for a reinforcing data point."

### B14 — Default-first reading (lazy interpretation)
**Origin:** User feedback 2026-05-20 — "Don't always fall back onto the default slow and fast." Implicitly: my responses tend to lead with the default analyst-consensus interpretation of a signal, then sometimes layer non-default reads. The default reading is the easy one.
**Pattern:** When new data arrives, the first read I produce is what most analysts will publish (the obvious "more compute demand → bullish chip stack" type). The non-default reads (function-by-function adoption, unit-of-work collapse, per-token margin compression) require active effort.
**Correction:** For every material signal, the OS must produce at least ONE non-default read explicitly. Add to `sector/where-we-are.md` §"Non-default reads — what most people are missing right now." Surface the non-default read in the response, not just the default one.
**How to check:** After drafting an interpretation, ask: "What would a thoughtful analyst miss in this? What's the 2nd/3rd-order read that takes 2-3 quarters to crystallize?" If I don't have one, I haven't synthesized yet.

### B15 — Revenue-mix anchoring (junior-analyst depth)
**Origin:** User feedback 2026-05-21 after the MLCC SemiAnalysis-style image was shared. User explicit: *"that's quite superficial, and that's what... a more junior analyst would do. Right? But you're not a junior analyst."* The MLCC paragraph used bottoms-up BOM counts (6,500 MLCCs per GB200 board → ~12,000 per Rubin board, per the image shared) to derive supply-tightening conclusions that revenue-mix analysis cannot reach.
**Pattern:** When researching a name, I default to web-searchable shallow data (revenue mix, segment %, customer concentration, growth rate, gross margin) and stop there. That layer is what every sell-side analyst publishes — zero edge. The investable insight lives at the layer below: per-board BOM count, current-gen vs next-gen unit-count delta, supplier capacity reallocation patterns, material-input substitution dynamics. Revenue-mix is the cover sheet, not the analysis.
**Correction:** Default BELOW revenue mix on every component-level thesis. For any held or candidate name where a physical component is the value driver (MLCCs, HBM stacks, MOCVD reactors, InP wafers, MLCC content, PMIC count, fiber meters, substrate layers), the thesis MUST contain a "## BOM-level deep-dig" section with: (a) current-gen unit count per board/server/rack, (b) next-gen unit count, (c) multiplier, (d) supplier capacity-response data. Use the DEEP-DIG workflow (CLAUDE.md §8).
**How to check:** Before declaring a thesis "complete," ask: "If a smart hedge-fund analyst read this, would they learn something they couldn't get from a Stock Analysis page or a single sell-side note?" If not, I'm at revenue-mix depth. Drop a layer or queue a DEEP-DIG.

### B16 — Synthesis without cascade (artifact-isolation bias)
**Origin:** User feedback 2026-05-21 after the Patel-vs-Aschenbrenner comparison artifact (`research/meta/patel-vs-aschenbrenner-thesis-comparison.md`) was committed without updating the per-company thesis files it implicated (HYNIX, SNDK, GLW, TE, VICR, AVGO, NVDA, MURATA). User question: *"do I have to write to you in order for you to ensure that you update all the files based on your findings? Right? So let's say you're looking at a thesis from Dylan Patel, and then you're looking at the Leopold thesis, and then how do you relate that back to the thesis and the... the individual companies that you've already developed thesis on."*
**Pattern:** When producing a synthesis artifact (thesis comparison, 13F analysis, deep-dig output, primary-source verification, source-reliability update), I treat the artifact itself as the deliverable and forget that the per-company thesis files where portfolio decisions get made need to be updated in the same commit. Implication-aware writing in the artifact is not enough — the implication must be DUPLICATED into each affected thesis file so future sessions surfacing that thesis see the cross-source context. The cross-cascade table inside DEEP-DIG output catches this for deep-digs; nothing caught it for other synthesis artifact types until B16.
**Correction:** CLAUDE.md critical rule #10 (cascade discipline) is now in force. Every synthesis artifact must, within the same commit: (a) list every named ticker, (b) update each affected `companies/{TICKER}/thesis.md` with back-reference + 1-3 sentence implication + any tier/sizing/falsifier change. The discipline is symmetric: the artifact references the theses AND each thesis back-references the artifact. No exceptions.
**How to check:** Before completing a synthesis commit, enumerate the named tickers in the artifact. Open each thesis file and verify it has been updated. If any is missing, the cascade is incomplete. Same applies in reverse — if a thesis file is updated based on cross-source findings but the artifact doesn't reference back, the link is half-broken.

### B17 — User-deference bias (inverse of B7)
**Origin:** User feedback 2026-05-21 — *"Everything I say is unverified assumptions. Right? Like, you have to question what I say as well. You can't just blindly trust me just like you can't blindly trust yourself as well."*
**Pattern:** When the user makes a factual or directional claim, I tend to integrate it into the OS without applying the same source-validity check I'd run on any other signal. The user is implicitly treated as T1 (primary source) when in reality they're often T3-T4 (relaying things they read or heard, sometimes accurately, sometimes not). Examples this session where the pattern could have fired but didn't:
- User said "Dylan Patel claimed memory prices will be 2-3x more" — turned out it was "DRAM will double or triple" (per Patel via 24/7 Wall St). Close enough but the user's framing was a slight rewording.
- User shared the LPDDR-reduction rumor screenshot — I appropriately flagged it as T5 and logged in cross-source-log. Good behavior; B17 didn't fire because the workflow had me classify the source explicitly.
**Correction:** Treat user claims with the same source-validity check as any signal. When user makes a quantitative claim, verify against research/ files OR explicit web search before integrating. When user makes a directional claim that contradicts existing triangulated signals, flag the contradiction explicitly rather than auto-adopting. Push back on framings that are off (e.g., refining "exponential" → "super-linear" per established user-comms preference). The user has explicitly delegated this in methodology core principle #14.
**How to check:** When the user makes a substantive claim, ask: "Would I accept this claim from a T3-T4 source without verification?" If no, verify. If they make a directional shift on a thesis, ask: "Does this contradict our triangulation log or scenario weights?" If yes, surface the contradiction before adopting.
**The harder case:** when user is sharing intuition rather than fact ("I feel like X"), don't try to verify intuition factually — instead, surface what the intuition implies if true, what the contrary would imply, and let user calibrate. Intuition is a signal candidate, not evidence.

### B12 — Catalyst-narrative anchoring before customer-level bottoms-up
**Origin:** VICR thesis 2026-05-20. After the Anthropic-Broadcom WSJ reveal, I jumped from catalyst ("AVGO benefits from Anthropic-Broadcom partnership") to downstream supplier ("Vicor must benefit") without doing customer-by-customer research. The initial framing labeled VICR a "guaranteed asymmetric downstream beneficiary." Bottoms-up research surfaced that VICR was designed out at NVIDIA H100 by MPS and replaced at one of top-2 hyperscalers on the mainstay 48V-12V DCM part (per [SemiAnalysis newsletter](https://newsletter.semianalysis.com/p/energizing-ai-power-delivery-competition)) — the "guaranteed beat" framing was wrong on the current generation.

**Pattern:** When a major catalyst is fresh, temptation is to skip customer-level verification. Same shape as L1 (sell-side aggregation) but with a different anchor — instead of analyst opinions, the anchor is the catalyst narrative itself. Both substitute storytelling for evidence.

**Correction:** Before assigning a name "guaranteed downstream beneficiary" status, answer THREE customer-level questions: (a) What generation of design is the company in currently? (b) Which competitors won the previous generation? (c) What specific design wins are confirmed for the next generation?

**How to check:** Before writing "X benefits from Y catalyst," explicitly answer: "What are X's actual customers TODAY, what generation of product, and what's the path from Y catalyst to specific X revenue dollars?" If any of the three is hand-waved, the framing is narrative-anchored not evidence-based.

### B11 — Numerical claims without citation or hedge

This bias has two confirmed subtypes:

**B11.a — Re-stated numbers without re-citation.**
Origin: Hook catch 2026-05-20 on Anthropic 34.4% / OpenAI 32.3% enterprise adoption (cited in wiki but not re-cited in chat) and SK Hynix 12.5% portfolio weight (cited in holdings.md but not re-cited in chat).
Pattern: When restating numbers from earlier conversation or from research files I just wrote, the citation feels redundant in the moment so I skip it. But the hook reads only the current message.
~~Correction (old):~~ Re-cite even "obvious" numbers. Treat each message as if the reader has no prior context.
**Correction (updated 2026-05-21 per user calibration):** The hook now checks repo grounding via exact-string match. Numbers that exist in any `research/*.md` file are considered grounded — chat restatement does NOT need re-citation. The discipline is now: ensure files have proper citations (file-level rigor), then restate freely in chat. The hook catches genuine fabrication (number nowhere in repo) but doesn't burn turns on legitimate restatement. User framing: *"I trust you, but you have to catch your own failure mode in case you write a file in which you do not do the citation."*

**B11.b — Illustrative/hypothetical scenario inputs without hedge.**
Origin: Hook catch 2026-05-20 on three hypothetical scenario percentages (~15%, ~30%, ~25%) used as ILLUSTRATIVE inputs to scenario modeling, not factual claims. The hook correctly flagged them because they had no hedge attached.
Pattern: When sketching scenarios ("what if X took 15% of share, what if Y reduced memory by 30%"), the number is clearly hypothetical IN MY HEAD but I forget the reader/hook doesn't see that frame. The number reads as a claim.
Correction: Always hedge illustrative or hypothetical inputs explicitly. Recognized hedge patterns now include `(hypothetical)`, `(hypothetical scenario)`, `(illustrative)`, `(scenario)`, `(modeled)`, `(if X)` — the hook was updated 2026-05-20 to accept these.

**How to check (both subtypes):** Before completing any message with ≥2 numerical claims, scan each one. For B11.a: ensure the number is either cited inline OR exists verbatim in a `research/*.md` file (file-level work is properly cited). For B11.b: ensure illustrative/hypothetical numbers carry an explicit hedge.

**Calibration history:** B11.a recurred 4 times in session 2026-05-21 (SNDK $724M, GEV/ETN/VRT summary table, MURATA deep-dig restated numbers, the meta-discussion message itself using $163B). User caught the pattern and proposed the repo-grounding fix. Hook updated; expected to eliminate the recurrence loop while preserving genuine fabrication detection.

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

### B18 — Operating-decline anchoring (segment-blind bias)
**Origin:** User correction 2026-05-22 after Rigaku Tier 3 framing over-weighted total-company operating decline (-13% revenue / -78% OP / -83% net profit Q1 FY26) and under-weighted segment-level evidence of AI/semi segment customer wins + deployment already underway. User quote: *"if a business has multiple different revenue streams. If one is declining but one is growing at an insane pace or at an accelerated pace, as in it doesn't matter how much they're losing on the other side, if the other one is substituting for that, especially if it's AI correlated and especially if it is agentic AI workload related, you need to fix that in your... how you currently conduct research, the weighing on too much operating loss on one side compared to the other one."*

**Pattern:** When total-company operating numbers are in decline (revenue down, OP compressed, net profit collapsed) and one segment is growing fast (especially AI/agentic-correlated), my framing has the tendency to:
1. Lead with the blended headline decline as primary signal
2. Treat segment-level wins as secondary evidence
3. Classify tier (Tier 1 / Tier 2 / Tier 3) based on blended total
4. Apply too-conservative sizing recommendations driven by total-company numbers

This obscures the SOTP (Sum-of-the-Parts) reality where the AI segment can drive multiple re-rating even without total-company growth acceleration.

**Manifestations this session:**
- Rigaku: Q1 FY26 -13%/-78%/-83% blended → Tier 3 / 1% MAX framing (CORRECTED to Tier 2/3 / 1-2% after segment-level evidence surfaced)
- MURATA initially: Q3 FY26 ¥43.8B impairment + cautious FY27 guide could have led to bear framing (RECOVERED via SOTP argument in MURATA cross-vertical)
- General pattern: total-company-decline-anchoring vs segment-by-segment analysis

**Correction (mandatory per principle #20 — Segment-decomposition discipline):**
1. For multi-segment companies, decompose revenue by segment BEFORE evaluating total
2. Identify AI/agentic-correlated segment growth rate explicitly
3. Compute substitution rate (how fast AI segment needs to grow to offset declining)
4. Compare AI-segment trajectory to total-company trajectory
5. If AI segment is materially faster, bull thesis lives in AI segment regardless of company total
6. Operating losses in declining segments are acceptable IF substitution rate is favorable
7. Lead with segment-level findings, NEVER with total-company headlines when segments diverge

**How to check:** Before completing any per-name evaluation, ask: "Is this a multi-segment company? If yes, did I lead with segment decomposition or with blended total?" If I led with blended total when segments diverge, REWRITE leading with segment-level analysis.

**The harder case:** when segment-level disclosure is incomplete (company doesn't disclose detailed segment numbers), the discipline still applies — explicitly flag segment-level uncertainty and resist defaulting to blended-total anchoring.

### B19 — Industry-norm-claim anchoring without verification
**Origin:** User correction 2026-05-22 after Rigaku deep dive — I claimed "qualification cycles typically run 12-24 months" without verifying that figure (training-data generalization). User quote: *"You even said this in your secondary analysis, where you were saying, this is unusual in semi metrology where qualification cycles typically run twelve to twenty four months. And in this instance, it happened way faster. Right? So you know that it is unusual, and you know the cycles typically went twelve to twenty four month. Well, first of all, did you verify that claim, twelve to twenty four month? Was that just, like, free training data knowledge? Right? So you know the one side of how long it takes, but then you did not look at the right place to see if there was a signal with, okay, Jesus, the qualification time is eighty percent faster than most. Like, that is a valid signal."*

**Pattern:** When I cite an industry-norm baseline (e.g., "typically X months," "industry standard is N," "norm is Y"), I anchor on it as if verified — when in reality it's often training-data generalization that I haven't sourced. AND when a company moves materially faster (or slower) than my anchor, I notice it descriptively but don't formally elevate it as a primary signal.

This produces TWO compounding failures:
1. The "industry norm" anchor itself may be inaccurate
2. The "this is unusual" signal that emerges from comparing reality to the anchor gets noted in prose but not weighted in framework analysis

**Manifestations this session:**
- Rigaku 2026-05-22: claimed "12-24 month qualification cycles" (training data, unverified); search 2026-05-22 only found "6 months to over a year" for general productization. The actual norm I anchored on may have been wrong, and the Onto-Rigaku "faster than norm" signal was descriptive prose not formally scored.

**Correction (mandatory per principle #21 — Time-to-X signals as primary analytical dimension):**
1. When citing industry norms, VERIFY at external source OR flag explicitly as `(my inference from training data — directional estimate, ~80% accuracy band)`
2. Score Time-to-X signals (qualification, deployment, customer expansion, etc.) EXPLICITLY as separate dimensions in evaluation
3. If company is >30% faster than norm: HIGH-MAGNITUDE signal weight
4. Recognize when framework signals (Time-to-X, bypass-route, paradigm shift) override numerical signals in lead-time-constrained or new-paradigm environments

**User refinement 2026-05-22 (avoid over-correction):** *"If it is around twelve to twenty four months and it's not the exact number, but the exact number is, like, eighty percent of that twelve to twenty four month, there's about eighty percent correct. That's also fine. It does not have to be... for these type of claims, incomparables as long as it's, like, you know, eighty percent correct, that's fine."*

**Discipline calibration — verify when load-bearing, flag as directional otherwise:**
- For FRAMING/BASELINE use ("is this unusual?"): ~80% directional accuracy is acceptable. Training-data norms can be cited IF flagged as directional. If the conclusion holds when norm is ±20-30% off, framing is robust.
- For POINT-PREDICTION use (decision input, model parameter): must verify. Training-data norms not acceptable.
- Sanity check before using a training-data norm as anchor: would the signal still be a HIGH-MAGNITUDE anomaly if the norm were 30% lower? If yes, framing-use is fine. If no, must verify.

**How to check:** Before stating "industry typically X" or "norm is N" in any evaluation:
- Did I verify this at external source?
- If not, did I flag as directional (~80% band) with the load-bearing-ness check?
- If a company is materially faster/slower than my anchor, did I formally score Time-to-X as separate signal?

**The BE-vs-gas-turbine analogy (user 2026-05-22):** "Investors that were buying GE Vernova, gas turbines, Siemens Energy but missed Bloom Energy because they thought BE's numbers look bad — they're new entrants — and completely disregarded the time-to-power framework that is now more valid, especially in an environment where the lead times are so long." The structural pattern: in lead-time-constrained markets, framework signals (time-to-X) can dominate numerical signals. Anchoring on industry-norm-numerical claims without verifying + ignoring time-to-X = double miss.

---

### B20 — Current-segment-% snapshot anchoring (forward-trajectory blindness)
**Origin:** User correction 2026-05-23 after Nippon Chemical Industrial (4092.T) evaluation — I dismissed the AI-adjacent thesis based on Functional Products being "only ~10-15% of revenue today." User quote verbatim: *"my pushback is that even if its 10/15%, the task is not to identify the split today but it is to model what it can become."*

**Pattern:** When a multi-segment company has a small-but-structurally-growing AI-adjacent segment, I dismiss the thesis based on current segment % anchored on the snapshot, missing the forward trajectory. This is the FORWARD-LOOKING corollary of B18 (operating-decline anchoring, segment-blind bias):
- B18 catches: companies in headline decline where small AI segment is being overwhelmed by larger declining segments
- B20 catches: companies where AI-adjacent segment is small TODAY but the segment trajectory is the bull thesis

The investable thesis often lives in the FORWARD trajectory of a currently small segment, not its current size. Three examples illustrate:
- Murata 10 years ago: MLCC was a portion of revenue; today AI-accelerator MLCC density growth IS the bull thesis
- Corning: optical fiber was small; AI east-west traffic is now the bull driver
- Rigaku: semiconductor segment was overshadowed by scientific instruments; AI-metrology segment is the forward thesis

**Manifestation this session:**
- Nippon Chemical 2026-05-23: dismissed Functional Products (phosphine duopolist + TDK MLCC JV) based on snapshot ~10-15% revenue contribution. The structural setup (1 of 2 global PH3 manufacturers per their product page; TDK barium titanate JV April 2026; China-export-control supplier re-qualification creating TTQ tailwind) projects materially higher segment trajectory.

**Correction (mandatory per principle #22 — Model segment trajectory, not snapshot):**

1. State current segment split (or flag as unverified)
2. Identify AI-adjacent segment(s) and current size
3. Forecast underlying demand growth (cite source or hedge)
4. Project segment trajectory at 12-24 month and 24-36 month horizons
5. Compute substitution rate vs declining segments
6. State SOTP re-rating implication if segment mix shifts as projected
7. ONLY THEN issue tier/sizing verdict based on FORWARD positioning, not snapshot

**"Segment is too small today" is NEVER a sufficient dismissal reason.** The dismissal must instead be: "segment can't grow to drive the thesis even at favorable demand growth" — and that requires modeling, not assertion.

**Hook enforcement (added 2026-05-23):** `~/.claude/segment-trajectory-hook.py` is a Stop hook that scans assistant messages for the anti-pattern (e.g., "only X% of revenue... too small to drive the thesis... skip/Tier 3") and blocks the message if no forward-modeling language is present (trajectory, SOTP, substitution rate, 12-24/24-36 month, could grow to, etc.). Source in `research/meta/hooks/segment-trajectory-hook.py`.

**The structural meta-lesson (user 2026-05-23):** *"instructions will not always work; if you create a hook, then it will guaranteed work because it forces you to do something. You can't build a hook-based system, whatever has to be enforced, has to be enforced within the system."* Pairs with the hooks-as-enforcement principle (see B16 + cascade-enforcement-hook). For biases that recur, codify in this file AND build a hook.

**How to check:** Before issuing a tier/sizing verdict on a multi-segment company:
- Did I state the current segment split?
- Did I forecast the AI-adjacent segment trajectory at 12-24mo and 24-36mo?
- Did I compute substitution rate or SOTP re-rating implication?
- If my verdict is dismissive, is it based on FORWARD modeling or snapshot anchoring?
- The Stop hook will catch the obvious snapshot-anchor + dismissive-verdict combinations.

---

### B21 — First-order anchoring (skipping N-th order cascade)
**Origin:** User directive 2026-05-23 — elevate four currently-instruction-only rules to deterministic hook enforcement. N-th order causal cascade was one of them. Rationale verbatim: *"instructions will not always work; if you create a hook, then it will guaranteed work because it forces you to do something."*

**Pattern:** Making analytical conclusions (investable verdicts, tier classifications, thesis impact statements, beneficiary/casualty calls) based on the 1st-order direct effect of an event without walking out 2nd / 3rd / 4th order consequences. Methodology principle #2 is explicit: *"The investable insight is usually 2nd or 3rd order, not the obvious direct effect."* The bias surfaces because 1st-order reasoning feels complete, but the alpha lives downstream where consensus hasn't done the work.

**Correction:** Every analytical output that uses causal-reasoning language (causes, drives, leads to, results in, implies, means that, triggers, produces) combined with an analytical-context anchor (TICKER, thesis, portfolio, scenario, investable, Tier, Core/Active/Watchlist/Avoid) OR any WORKFLOW label — must include explicit N-th order markers. Use TRACE format: 1st order (P>80%), 2nd order (P~60%), 3rd order (P~40%), 4th order (P~20%). Or use cascade / knock-on / ripple / downstream-effect framing naming the further-order beneficiary or casualty.

**Hook enforcement:** `~/.claude/nth-order-cascade-hook.py` (source mirror in `research/meta/hooks/`). Exit 2 with required-action feedback when trigger fires without exemption. Generous meta-discussion exemptions (hook, principle #, .py file references) so harness-talk turns don't false-positive.

**How to check:** Before issuing any thesis-level conclusion — did I name at least one 2nd-order consequence? Did I trace at least one knock-on or downstream beneficiary? If the answer is no, the analysis is 1st-order anchored and the hook will catch it.

---

### B22 — Consensus-solution anchoring (skipping bypass-route)
**Origin:** User directive 2026-05-23 — same elevation batch as B21.

**Pattern:** When a binding constraint is discussed, naming the standard supplier or incumbent (the "consensus solution") without asking "what do consumers do when the consensus solution fails their actual sensitivity?" Methodology principle #9 + Critical Rule #9 + the Time-to-X framework all converge on this point: the bypass-route names are usually where the edge is, because consensus has already priced the obvious incumbent.

**Manifestation in past sessions:** HBM-as-bottleneck framing often stops at Micron / SK Hynix / Samsung without naming what hyperscalers do when HBM supply gates them (alternative topologies, LPDDR-based architectures, custom memory IP). Power-constraint framing often stops at VST / CEG without naming behind-the-meter, micro-grid, or off-grid bypass routes.

**Correction:** Every binding-constraint discussion (binding constraint, bottleneck, supply tight/gap, shortage, capacity-limited/constrained, Time-to-X, WORKFLOW: BOTTLENECK-FORECAST) must include either (a) the named bypass route — substitution path, second-source, alternative topology, qualification cycle (TTQ), workaround, end-customer adaptation — or (b) an explicit statement that no bypass route exists, with the reason why.

**Hook enforcement:** `~/.claude/bypass-route-hook.py` (source mirror in `research/meta/hooks/`). Exit 2 with required-action feedback when constraint vocabulary fires without bypass-route exemption.

**How to check:** Before completing any constraint discussion — did I name the bypass route or explicitly negate it? If only the consensus supplier is named, the analysis is consensus-solution anchored.

---

### B23 — Sell-side aggregation drift (skipping bottoms-up)
**Origin:** Pre-existing as lesson #1 in `predictions/lessons.md` — the dominant failure mode identified through graded predictions. User directive 2026-05-23 elevated it from lesson-only to hook-enforced.

**Pattern:** Making forward projections (revenue forecasts, growth rates, capacity expansions, TAM evolution) by paraphrasing or weighted-averaging Street consensus, analyst notes, or sell-side targets instead of building bottoms-up from supply, capacity, ASP, mix. Methodology principle #1 is explicit: *"NEVER start with sell-side and adjust."* The reason: weighted-averaging consensus adds zero edge — the alpha comes from where my unit model diverges from consensus, not from where it converges.

**User clarification 2026-05-23:** Optimise toward shared goal. Interpretation: catch the dominant failure mode. Bottoms-up indicators MUST be present on predictive output; top-down comparison is allowed but not required by the hook.

**Correction:** Every predictive output (WORKFLOW: PREDICT, "I predict/forecast", "(will|could) reach/grow to/hit/exceed $X", forward year/quarter "by YYYY", "X% CAGR", "X% growth", "projected revenue/growth/capacity") must include at least one of: (a) capacity-gate reasoning (fab/wafer capacity, capex disclosure, capacity reallocation), (b) BOM-level math (units per board/server/rack, BOM count, BOM expansion), (c) unit-economics buildup (explicit `X * Y = Z` math, ASP × units floor), or (d) explicit hedge: `(my model)`, `(rough estimate)`, `(hypothetical)`, `(illustrative)`.

**Hook enforcement:** `~/.claude/bottoms-up-hook.py` (source mirror in `research/meta/hooks/`). Exit 2 with required-action feedback referencing principle #1 + lesson #1 when predictive surface fires without bottoms-up exemption.

**How to check:** Before stating a forward projection — did I build it from supply/capacity/units? Or did I paraphrase consensus and adjust? If the latter, the hook catches it.

---

### B24 — Tier-without-M/N (skipping anti-fragility scoring)
**Origin:** User directive 2026-05-23 — same elevation batch as B21-B23.

**Pattern:** Writing full Conviction Format thesis blocks (P(bull) + P(bear) + Tier classification all present) without naming the anti-fragility M/N score (how many of N modeled scenarios the name wins in). Methodology principle #5: *"Anti-fragility > optimization. Prefer picks-and-shovels that win across futures over names that need a specific future to be right."* The tier is meant to be derived from M/N robustness, not stated as a vibe. Skipping the M/N hides whether the tier reflects multi-scenario robustness or just bull-case excitement.

**User clarification 2026-05-23:** Narrow trigger by user choice — fire ONLY on full thesis blocks (where all three of P(bull, P(bear, and Tier/Position target are present). Short tier mentions in chat don't fire — minimises false positives, hits drift on real thesis output.

**Correction:** Every full Conviction Format block must include explicit anti-fragility scoring in one of these forms:
- `Anti-fragility: M/N` (e.g., `Anti-fragility: 4/5`)
- `wins in M of N scenarios` (e.g., `wins in 4 of 5 scenarios`)
- `M/N: 4/5`
- `AF: 4/5`
- `4/5 scenarios`

**Hook enforcement:** `~/.claude/antifragility-mn-hook.py` (source mirror in `research/meta/hooks/`). Exit 2 with required-action feedback when full thesis block fires without M/N exemption.

**How to check:** Before completing any full thesis output — does the tier carry an M/N? If only "Tier: Core" or "Tier: Active" appears without the scenario-robustness number, the thesis is a vibe assertion.

---

### B25 — Source-tracking-over-claim-verification (sample-size-dependent epistemics)
**Origin:** User correction 2026-05-24 after TrendForce HBF fake-news incident. TrendForce reinterpreted one professor's speculation as definitive ("NVIDIA is using HBF"); the actual NVIDIA direction is high-IOPS NAND for GIDS. My initial response proposed "downgrade TrendForce in the source-reliability tracker." User pushback verbatim: *"instead of just relying on sources, what must work better is when you do read a TrendForce or a Motley Fool's or whichever other source that you verify a claim that they make through looking at adjacent data, alternative data sets. So the reliance is not primarily based on sample size reliance."*

**Pattern:** Treating source reliability as the primary epistemic signal — aggregating per-source track records over time, then weighting new claims by the source's accumulated track record. This sample-size-dependent approach creates two symmetric failure modes:
- **Trusted-source false confidence:** TrendForce has a good track record → I assume their HBF claim is likely true → I propagate to thesis files without independent verification.
- **Untrusted-source false rejection:** A single-voice tweet has weak track record → I discount the claim even when the underlying assertion is falsifiable through orthogonal data → I miss real signal that happens to come from a low-track-record channel.

Both failures share the same root cause: source-reputation is being used as a substitute for claim-verification, when it should be at best a weak prior.

**The structural fix (principle #23):** every claim gets verified through orthogonal / adjacent data sets independently, regardless of source reputation. Orthogonal = different data-generation processes (earnings call + trade press + regulatory filing are orthogonal; three trade-press articles citing the same primary source are redundant). The claim stands on independently sourced cross-vertical evidence, not on the messenger's track record.

**Correction (mandatory per principle #23):**
1. Identify the claim's first-order assertion (strip interpretation)
2. Identify the source type and data-generation process
3. Find at least one orthogonal corroboration — different data-generation process, ideally different vertical
4. If no orthogonal corroboration exists → flag as single-source hypothesis (signals/cross-source-log.md), DO NOT propagate to thesis files
5. Track WHICH orthogonal sources corroborated — this is the actual epistemic provenance

**Retroactive application to TrendForce HBF:** orthogonal-data check would have surfaced NVIDIA GTC technical sessions, Kioxia/SanDisk roadmap, hyperscaler storage RFPs, NVLink-storage spec, GIDS architecture docs — none of which corroborated HBF positioning. The gap was visible at ingest time if the discipline had been mandatory.

**How to check:** Before citing any claim in a research file — what orthogonal evidence corroborates this? If the answer is "TrendForce said so" or "the analyst note said so" without naming a different-data-generation-process source, the citation is single-source. Single-source claims go to cross-source-log.md, not into thesis files.

**Hook enforcement:** considered but deferred. Mechanical detection of "orthogonal" requires curated source-type taxonomy. For now: discipline enforced through (a) methodology principle #23, (b) the refined principle #6 (orthogonal triangulation), (c) replacement of the P3 source-reliability monthly audit with a claim-verification audit cycle, (d) end-of-session harness observation discipline (where-we-are.md). If drift recurs, build the hook with the source-type taxonomy.

---

### B26 — Pre-training-as-primary-source (worldview consensus collapse)
**Origin:** User correction 2026-05-24 after I shipped wiki/robotics-primer.md Phase 1 entirely from pre-training data without orthogonal verification of structural claims. User pushback verbatim: *"Your pre training data is just what everybody else gets. If somebody asks you the same question, they... without a harness, without all the back and forth that we had, uh, Claude will just give them that answer."*

**Pattern:** Building worldviews / wiki primers / sector maps top-down from pre-training categorization + bottom-up from pre-training company memory, treating pre-training as a primary source. This produces consensus output (the same answer any vanilla LLM would give the same question) and collapses the OS's edge over a vanilla LLM — which is precisely the orthogonal-verification + recursive-drill-down harness.

**Distinction from B25:** B25 is about *claim-level* source-tracking over claim-verification. B26 is the *worldview-construction* analog — using pre-training categorization to define which segments / suppliers / dynamics exist, rather than discovering them via verified data at each layer.

**Manifestation:**
- 2026-05-24 wiki/robotics-primer.md Phase 1: 12 stack layers + supplier lists + segment categorization all from pre-training memory. Marked numbers as `[verification required]` but let structural claims pass as if established. First user stress-test (HDS data-center cooling probe) caught a terminology collision that pre-training would have continued asserting.
- Risk for queued primers: hyperscaler-capex-primer, geopolitical-ai-primer, model-economics-primer all face the same failure mode if built without principle #24 discipline.

**The structural fix (principle #24):** recursive bottoms-up worldview discovery via verified data at each layer. Pre-training informs *where to look* (which keywords to query, which suppliers to check), never *what to assert*. Each level (L1 encompassing market growth → L2 fastest-growing segment → L3 biggest suppliers → L4 underneath + adjacent markets) requires orthogonal-source verification before recursing.

**Correction (mandatory per principle #24):**
1. State the encompassing layer being mapped
2. L1 verification — orthogonal datasets (direct + alternative + indirect + adjacent)
3. L2 segment ranking via the data, NOT pre-training categorization
4. L3 supplier map via earnings + customer disclosure
5. L4 underneath + adjacent markets
6. Recurse to practical depth, document where verification stops
7. Pre-training informs WHERE to look, NEVER WHAT to assert

**Retroactive application:**
- wiki/robotics-primer.md Phase 1 = HYPOTHESIS WORLDVIEW. Phase 2 = re-do under principle #24 discipline. If Phase 2 surfaces a different fastest-growing segment or different supplier ranking, the principle is producing real edge.
- Spot-check existing primers (hbm, power, custom-silicon, agentic-workload appear to have primary-source backing; networking + token-consumption need verification).

**How to check:** Before completing any wiki / sector / worldview artifact:
- Did I start from L1 verified market data, OR from pre-training category listing?
- Did I derive segment ranking from orthogonal sources, OR from pre-training memory?
- Did supplier identification come from earnings/disclosure, OR from pre-training "who I know plays in this space"?
- If any answer is "from pre-training" without verification, the artifact is hypothesis worldview, not verified — mark accordingly and do not propagate to thesis files.

**Hook enforcement:** considered but deferred. Mechanical detection of "structural claim from pre-training" requires distinguishing assertion-style language from verified-with-citation language. The closest existing mechanism is the anti-fabrication hook, which catches uncited NUMBERS but not uncited structural claims. Discipline enforced through (a) methodology principle #24, (b) explicit "HYPOTHESIS WORLDVIEW" status header on any artifact built without L1-L4 verification, (c) harness observation discipline. If drift recurs across 3+ artifacts, build hook with structural-claim-pattern detection.

---

### B27 — Research findings not cascaded (the canonical capture gap)
**Origin:** User correction 2026-05-25 after ARM AGI CPU research session. I researched ARM via web search in response to user CPU-rebalancing question, surfaced specific new findings (136 Neoverse V3 cores on TSMC 3nm, Meta lead customer, Stargate ARM role, $2B unfilled orders capacity-constrained framing, Q-by-Q $1B+ revenue 3 consecutive quarters) — and discussed them only in chat output, NOT in `companies/ARM/thesis.md`. User pushback verbatim: *"whenever you do research regarding any input that I give you, whenever an output forces you to research existing company names and new findings show up during the research, they must be added to the file of the company if it is in the actual thesis in itself, if we have a file for that company."*

**Pattern:** Research conducted in chat about a company that has an existing thesis file produces ephemeral output (chat) but not canonical capture (thesis file update). Next session reads stale thesis file as source of truth, missing today's research. The OS's compounding-knowledge property breaks — research velocity goes up, cumulative thesis depth doesn't compound proportionally.

**Distinction from B16 (synthesis cascade gap):** B16 catches synthesis artifacts that name held tickers without per-thesis back-references. B27 catches the inverse direction — research findings about a ticker that don't make it into the canonical thesis. Both are "knowledge that exists in one place but not the place it should propagate to" — but at different operational scopes (synthesis-to-thesis vs research-to-thesis).

**Manifestation 2026-05-25:** ARM thesis last updated 2026-05-22 (already substantial — included AGI CPU + $25B FY2031 target + Q4 FY27 production). Today's research surfaced 5 categories of NEW specifics (technical specs + customer names + Stargate alignment + Q-by-Q cadence + capacity-constrained framing) — these were captured in chat output for the user but NOT in the thesis file until user corrected and principle #25 was codified. Without principle #25 + the cascade discipline, next session reading ARM thesis would have missed all five categories of NEW data.

**Correction (mandatory per principle #25):**
1. Identify when research is being conducted about a company with existing thesis file
2. Identify what's NEW vs existing thesis content (delta-only — don't duplicate)
3. Append findings to thesis file as dated update section with inline source citations
4. Cross-reference any synthesis artifacts (per Critical Rule #10 — bidirectional)
5. Commit thesis-file append within same commit as chat-response (where possible) — ensures persistence

**Hook enforcement (deferred):** mechanical detection candidate — when chat output cites a TICKER pattern matching an existing `companies/{TICKER}/` folder + specific numerical/structural data + that data is NOT in the thesis file → block. Similar pattern to anti-fab repo-grounding scoped per-ticker. Defer building until drift recurs across 3+ research events (standard pattern from B25/B26 codifications).

**How to check:** Before completing any chat response that includes specific NEW research findings about a held/candidate ticker — verify the corresponding thesis file has been updated. If chat response says "I verified X about TICKER" but `companies/TICKER/thesis.md` doesn't include X, the cascade is incomplete.

---

### B28 — Pre-training-anchored cyclical-vs-structural mis-classification
**Origin:** User correction 2026-05-25: *"your pretraining is probably still classifying memory and storage as cyclical given prior cycles cyclicality. I'm not dismissing that it could be cyclical again, but there is a difference in how memory and storage relates to the product as in storage and memory here become binding constraint to how good the end product is, but that's the reasoning. It is not just a feature of the end product."* User explicitly invited fact-check via principle #14 (question own framings).

**Pattern:** Pre-training data is heavily weighted on prior-cycle behavior. When a component undergoes structural transition due to technology regime change (e.g., AI inference workloads making HBM bandwidth a binding constraint on reasoning depth), pre-training-anchored reasoning over-weights cyclical mean-reversion at the wrong time. Same bias affects sell-side analyst frameworks at 2-3 quarter lag from structural-evidence accumulation. The mis-classification creates a multi-quarter mispricing spread between cyclical multiples (5-10x forward) and structural-growth multiples (15-30x forward) — alpha source for those who correctly identify the transition early.

**Distinction from B26 (pre-training-as-primary-source):** B26 catches WORLDVIEW-CONSTRUCTION reliance on pre-training. B28 catches CLASSIFICATION-OF-EXISTING-COMPONENT reliance on prior-cycle pre-training. Both share the underlying "pre-training overrules current verified data" failure mode but operate at different decision scopes.

**Manifestation 2026-05-25:** Honest self-audit applied — my pre-training was heavily exposed to 2017-2023 memory cycle including 2022-2023 downturn (DRAM ASPs -50-60% peak-to-trough; Hynix/Samsung/Micron all guided down; consensus modeled memory as classic boom-bust). The "memory is cyclical; assume mean reversion" pattern is the default pre-training anchor. User's structural framing required explicit re-weighting against verified 2024-2026 data: HBM bandwidth IS rate-limit for thinking-token depth (per test-time-compute event); 5+ hyperscaler programs simultaneously (per Google I/O event); SK Hynix US packaging plant + Anthropic 3.5GW Google TPU commitment (per Google I/O event); HYNIX forward P/E 5.92-6.79 = cyclical-multiple framing despite structural evidence.

**The structural fix (principle #26 — binding-constraint test):** For any AI-related component, ask: "Is this a discretionary feature of the end product, OR is it a binding constraint on the end product's quality?" Binding constraint → structural classification; discretionary feature → cyclical. Apply BEFORE accepting pre-training-anchored or sell-side-consensus classification.

**Correction (mandatory per principle #26):**
1. For any AI-related held name or candidate, apply the binding-constraint test
2. Identify the end-product capability (e.g., "reasoning depth," "inter-chip bandwidth")
3. Test: does more of this component DIRECTLY improve that capability?
4. If yes → structural; if no → cyclical
5. Compare to consensus framing; if consensus uses cyclical multiples on a structural component, mispricing spread is the alpha
6. Watch canary metrics for transition signals (HBM-per-FLOP, MoE adoption, Chinese supply)

**Retroactive application (HYNIX):**
- Pre-training framing: cyclical DRAM/HBM player at 5.92-6.79x forward P/E
- Binding-constraint test: HBM bandwidth directly scales with reasoning depth (test-time-compute event verified); 5+ hyperscaler demand (Google I/O verified)
- Verdict: STRUCTURAL — the cycle nature changed in 2024-2026 specifically
- Mispricing spread: cyclical multiple 5.92-6.79x vs structural-growth comparable 15-30x = 2-3x re-rating room
- Falsifier: HBM-per-FLOP plateau OR MoE displacement OR Chinese supply shift

**How to check:** Before accepting any AI-related component as "cyclical" — apply the binding-constraint test explicitly. If the test says "binding constraint" but the framing says "cyclical," there's a pre-training-anchored mis-classification. Re-framing as structural with mispricing-spread alpha is the appropriate response.

**Hook enforcement:** deferred. Mechanical detection of "cyclical-vs-structural mis-classification" requires semantic reasoning about end-product-capability relationships — too judgment-heavy for current hook implementation. Discipline enforced via principle #26 codification + binding-constraint test as part of every AI-thesis review.

---

Every GRADE that reveals a new systematic error → add a row here with the same structure (origin, pattern, correction, how to check).

Every 6 months: review all entries, retire ones that have stopped showing up in grades, deepen ones that recur.
