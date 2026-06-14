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

### B29 — Label-anchoring at the AI-relevance classification step (surface vs supply-chain-reality)

**Origin:** User correction 2026-05-26 after I flagged T1 Energy (TE held 4.82%) reclassification as a "FLAG FOR USER REVIEW" rather than just updating the file with the corrected classification supported by verified primary-source evidence. User pushback verbatim: *"there's a change and a verifiable change, especially for TE. You update that file. Right? That just means you were wrong. Or... no. You were wrong, but you only did a surface level analysis. You didn't... you did not think about it. And the point of view in which you would have realized it on your own, so that needs to mean then that must be a change to the actual harness or your behavior or principle. Like, there has to be an update done."*

**Pattern:** Classifying a company's AI-relevance based on its MARKETED BUSINESS LABEL (e.g., "solar manufacturer," "industrial chemical maker," "general-purpose foundry") rather than its underlying PHYSICAL SUPPLY CHAIN POSITION. The failure mode operates at the FIRST classification step in the analytical pipeline: if AI-relevance gets scored "zero" because the label says non-AI, all downstream analysis defaults to the zero-AI assumption — even when primary-source evidence (e.g., NVDA's own engineering disclosure) explicitly says the underlying supply chain IS shared with AI infrastructure.

**Manifestation 2026-05-26:**
- Earlier US duration-of-relevance agent (working in good faith) classified TE as "this name should NOT be in an AI-sector investing universe" based on: TE's revenue label = solar/battery, no explicit AI mgmt commentary, direct customer base = utilities + residential installers.
- I accepted this at face value WITHOUT applying principle #14 (question own framings) or a supply-chain-reality check.
- The agent + I both missed: NVDA's May 2025 technical blog explicitly credits 800V DC rack architecture to "the electric vehicle and solar industries." That's primary-source verifiable evidence that the physical supply chain TE participates in OVERLAPS with AI data center infrastructure.
- Citrini Research May 12, 2026 surfaced this connection ("Supply Chain Inheritance" thesis). My response was to flag TE's classification for user review — punting the decision when the evidence already supported reclassification.
- User pushback: "you only did a surface level analysis. You didn't... did not think about it" — the failure was at the classification step, before deeper analysis even started.

**Distinction from related biases:**
- B15 (revenue-mix-anchoring): operates AFTER the company is in the AI universe; tells me to go below revenue mix to BOM-level. B29 operates BEFORE — at the gate where the company gets classified as AI-relevant or not.
- B20 (segment-trajectory): operates on WITHIN-company segment growth modeling. B29 operates on WHETHER-company is AI-adjacent at all.
- B28 (pre-training-anchored cyclical-vs-structural): operates on DEMAND classification (cyclical vs structural). B29 operates on AI-RELEVANCE classification (in-universe vs out-of-universe).
- B7 (brain-dump-literal-read): operates on user-input parsing. B29 operates on COMPANY-INPUT classification — same family of failure (taking the label literally rather than parsing the underlying reality).

**The structural fix (principle #28 — supply-chain-reality test):** Before classifying a company as "non-AI" or out-of-AI-universe, run the supply-chain-reality test: what is the physical supply chain this company participates in, and does ANY layer of that chain overlap with AI infrastructure? Verifiable evidence to check: hyperscaler procurement disclosures, chip-vendor engineering blogs, supply-chain-tier press releases, industry-trade-press mentions of shared infrastructure.

**Correction (mandatory per principle #28):**
1. For any company at the AI-relevance classification step, identify the underlying PHYSICAL SUPPLY CHAIN it participates in
2. Map that supply chain to AI infrastructure: power conversion, magnetics, capacitors, inductors, manufacturing equipment, materials, etc.
3. Check primary-source evidence (chip-vendor blogs, hyperscaler disclosures) for explicit attribution
4. If ANY layer overlaps with AI infrastructure, classification ≠ "NOT AI" — at minimum it's "AI-adjacent via [specific layer]"
5. When verified evidence supports reclassification, UPDATE THE FILE — don't ask user for permission to update something the evidence already supports

**Retroactive application (TE):**
- Prior framing: "this name should NOT be in an AI-sector investing universe" (per US duration agent + my acceptance)
- Supply-chain-reality test: TE = US solar cell manufacturing + battery infrastructure. Per NVDA's May 2025 technical blog, 800V DC rack architecture is INHERITED from EV/solar industries. The physical supply chain (power conversion, magnetics, capacitors, manufacturing equipment) is SHARED.
- Verdict: AI-adjacent via Supply Chain Inheritance (theme T7 in `research/sector/themes.md`)
- Reclassification: from "NOT AI" to "AI-adjacent via Supply Chain Inheritance — indirect"
- Falsifier for reclassification: absence of direct customer-base overlap (TE sells to utilities + residential, not hyperscalers); if no further primary evidence emerges of direct procurement flow, downgrade back to "weakly AI-adjacent" rather than "NOT AI" or stronger

**How to check:** Before completing ANY company-level analysis that produces an AI-relevance classification, ask: "Did I check the underlying physical supply chain, or did I anchor on the company's marketed label?" If only the label was checked, B29 has fired — go back and run the supply-chain-reality test.

**Hook enforcement:** deferred. Mechanical detection of "label-anchoring" requires semantic reasoning about supply-chain mapping — too judgment-heavy for current hook implementation. Discipline enforced via principle #28 codification + the supply-chain-reality test as a mandatory gate before "non-AI" classification.

**Meta-lesson about my own learning:** When I receive an agent classification or accept a verdict, the discipline is to apply principle #14 (question own framings) and verify by primary source. The TE miss happened because I accepted the agent's "NOT AI" classification at face value without independent supply-chain verification. The corrective action (per user's framing 2026-05-26): mistakes are fine; encoding them as principle + bias updates is mandatory.

---

### B30 — Customer-share-shift anchoring (treating one customer's strategic choice as company-wide thesis change)

**Origin:** User correction 2026-05-26 after I framed HDS's Tesla situation as a "duration downgrade" because Tesla dual-sourced strain-wave actuators with Green Harmonic (China). User pushback verbatim: *"having the Tesla downgrade does not materially change or might potentially not change the thesis downstream that much as in if the component that is required that Harmonic Drive system is built or whatever they servicing... If the robotics segment that they cater towards or the physical AI segment they cater towards is growing and is gonna become a binding constraint or potentially a binding constraint... then the Tesla is not a downgrade per se. It's an adjustment, sure, on something maybe to note. But if there's still the chance that what... how many cloud systems deliver is in massive need because of the growth in robotic or if you see double digit growth in robotics, then it makes sense. Does it not have any other tangential AI specific narrative? Just as, for example, you initially missed the t one energy correlation to to the AI infra. Maybe you missed one here as well."*

**Pattern:** Treating a single customer's strategic share-shift (e.g., Tesla dual-sourcing component supply) as if it were equivalent to market-wide market-share erosion. The failure mode shows up at the duration-scoring step where one customer's decision gets read as the company's thesis-runway compression. Misses: (a) the customer's % of total revenue, (b) the broader market trajectory the supplier serves, (c) tangential AI narratives the supplier participates in beyond the headline customer.

**Distinction from related biases:**
- B15 (revenue-mix-anchoring): operates AFTER the company is in the AI universe; goes below revenue mix to BOM-level. B30 operates at the duration-scoring step — one customer's decision being mistaken for the whole story.
- B29 (label-anchoring at AI-relevance classification): operates at the AI-relevance gate (in/out of universe). B30 operates at the duration-scoring step (how long does the position's strength last).
- Both B29 and B30 share the same meta-failure: anchoring on a surface signal (marketed label / single customer decision) rather than the underlying supply-chain / market positioning. Both are operational extensions of principle #28's supply-chain-reality test discipline.

**Manifestation 2026-05-26:**
- Earlier I framed "Tesla DUAL-SOURCED with Green Harmonic" as eroding HDS positional strength at the Tesla account: "1-2 years eroding at Tesla specifically" sub-narrative downgrade
- I failed to ask: Tesla is what % of HDS revenue? (Likely small — Tesla Optimus is at <1,000 units pilot scale Q1 2026)
- I failed to ask: what's the broader market trajectory? (Industrial robots +56.7% CAGR, surgical robotics durable, humanoid market $52M → $580M 2032 per OS robotics primer)
- I failed to identify HDS's tangential AI narrative — **semi cap-equipment (35-40% of harmonic-drive usage globally per `companies/HDS/thesis.md` line 9)** which directly benefits from AI capex (TSMC CoWoS expansion + BESI hybrid bonding ramp + DISCO dicing + ASMPT TCB + ASML/AMAT/LRCX tool production)
- I failed to enumerate broader humanoid OEM optionality (Agility Digit RaaS at GXO, Figure 02 BMW, Apptronik Apollo Mercedes — HDS supplier status not publicly confirmed at any, meaning OPTION VALUE exists)

**The structural fix (extension of principle #28):**
For any per-position duration scoring, before treating a single customer's decision as a thesis-compressing signal, run the customer-share-shift discipline:
1. Quantify the customer's % of total revenue (or % of total relevant segment revenue)
2. Identify the broader market trajectory the supplier serves
3. Enumerate tangential AI narratives the supplier participates in beyond the headline customer
4. Distinguish CUSTOMER-SHIFT (single-customer share movement) from MARKET-WIDE SHARE EROSION (industry-wide share movement)
5. If the company has multi-customer + multi-segment + multi-narrative optionality, a single customer's decision is an ADJUSTMENT to note, not a duration downgrade

**Correction (mandatory per principle #28 extension):**
1. For any per-position duration scoring where a single-customer disclosure has emerged (positive or negative), apply the customer-share-shift discipline
2. Map the customer to its % of supplier revenue (estimate if not disclosed)
3. Map the broader market trajectory the supplier serves
4. Enumerate at least 2 tangential AI narratives the supplier participates in beyond the headline customer
5. If the broader market is growing toward binding-constraint AND the supplier has multi-customer optionality, the customer-share-shift is an adjustment, not a duration compression

**Retroactive application (HDS):**
- Prior framing: "Tesla account share eroding to Green Harmonic = 1-2 year sub-narrative downgrade"
- Customer-share-shift discipline: Tesla is one customer of many; <1,000 units pilot scale Q1 2026
- Broader market trajectory: humanoid robotics growing 46.3% CAGR ($52M 2025 → $580M 2032 per OS robotics primer); industrial robots growing; surgical robotics ISRG da Vinci 5 ramp +58% YoY placements
- Tangential AI narratives: **SEMI CAP-EQUIPMENT (~35-40% of HDS revenue per `companies/HDS/thesis.md` line 9)** = direct AI-binding-constraint exposure via TSMC CoWoS / BESI hybrid bonding / DISCO dicing / ASMPT TCB / ASML EUV tools; **surgical robotics** (~30%+ HDS share per IntelMarketResearch); **broader humanoid OEM optionality** (Figure / Apptronik / Agility public actuator supplier disclosure absent — option value)
- Verdict: Tesla share-shift is an ADJUSTMENT to note, NOT a duration compression. HDS broader thesis runway 3-5 years (Long) intact.

**How to check:** Before any duration-scoring downgrade triggered by a single-customer disclosure, force the question — "did I run the customer-share-shift discipline (4 steps above), or did I anchor on one customer's decision as if it were market-wide?" If only the customer-specific decision was assessed, B30 has fired — go back and run the broader discipline.

**Hook enforcement:** deferred. Mechanical detection of "customer-share-shift anchoring" requires semantic reasoning about supplier-customer mapping + market segmentation. Best enforced as principle #28 extension + the 4-step customer-share-shift discipline as a mandatory gate before duration-downgrade triggered by single-customer disclosures.

---

### B31 — Cross-segment aggregation masquerading as triangulation

**Origin:** Near-miss during May 26 daily AI brief INGEST (codified 2026-05-27). Three sources within the 90-day window pointed the same direction on "AI ROI is broken": (a) Uber COO Macdonald on Claude Code / Cursor cost ROI gap, (b) Microsoft internal data showing AI agents cost more than human employees, (c) KPMG quarterly survey reporting only 24% of organizations scaling AI with ROI. The current triangulation rule (Critical Rule #6 / Workflow 3 — "≥3 independent sources within 90 days pointing the same direction") would have passed and promoted the cluster to `triangulation.md`. But the research agent caught the failure: Uber + Microsoft both observed **developer-tooling segment** (engineering Copilot/coding-agent cost); KPMG was a **cross-segment survey**. Meanwhile the held names at risk of action (NOW, PLTR, DDOG, SNOW) sit at the **workflow-software / data-platform segment** where T1 SEC evidence showed the OPPOSITE signal. Aggregating across segments as if same-population would have committed B20 (segment-trajectory anchor) and potentially triggered unjustified workflow-software trim.

**Pattern:** Promoting a cluster of signals to triangulation status without first classifying which segment of the AI value chain each source observes. The failure mode is invisible when the rule is applied mechanically ("3 sources, 90 days, same direction") but visible the moment you ask "are these 3 sources observing the same population the action would target?" If no, the cluster is cross-cutting (interesting hypothesis-fodder) — not triangulation (actionable high-conviction read).

**Distinction from related biases:**
- B20 (current-segment-% snapshot anchoring): operates WITHIN a single name at the snapshot-vs-trajectory step. B31 operates ACROSS names at the multi-source triangulation step. Both share the same root: treating segment-incompatible data as same-population.
- B16 (synthesis without cascade): operates AFTER the synthesis is correctly drawn — the failure is not following through to per-name cascade. B31 operates BEFORE the synthesis is drawn — the failure is misclassifying the synthesis input itself.
- B23 (sell-side aggregation drift): operates on a single forecast at the input-aggregation step (paraphrasing Street consensus). B31 operates on a multi-source signal at the cluster-promotion step (cross-segment aggregation).

**Manifestation 2026-05-27 (the near-miss):**
- Initial framing: "Uber + Microsoft + KPMG = 3 sources, 90 days, same direction → promote to `triangulation.md` as 'enterprise AI ROI failure'"
- I failed to ask: which segment is each source observing?
- I failed to ask: do those segments overlap with the segments where my potential actions would land?
- The agent caught: Uber/MSFT = developer-tooling segment; KPMG = cross-segment; held names being potentially acted on = workflow-software / data-platform segment
- T1 SEC evidence at the workflow-software segment (PLTR 150% NDR, NOW 97% renewal, DDOG +51% RPO, SNOW $100M AI run rate ahead of guide) contradicted the "broad ROI failure" thesis
- Correct verdict: log Uber + MSFT to `cross-source-log.md` as **segmented signal for developer-tooling segment**. Do NOT promote to triangulation. KPMG is cross-segment by construction and cannot fill the third slot for any specific segment.

**The structural fix (codified as principle #29):**

Before promoting any signal cluster to `triangulation.md`, classify each source by the AI-value-chain segment it observes. Approved segments: developer-tooling / workflow-software / data-platform / infrastructure-IaaS / chip-and-foundry / memory-and-storage / power-and-cooling / advanced-packaging / model-and-foundation-lab / consumer-AI / sovereign-AI / agentic-application.

1. **Same-segment cluster (≥3 sources):** promote as "segmented triangulation" — actionable for that segment only.
2. **Cross-segment cluster (sources span ≥2 segments):** log to `cross-source-log.md` as "cross-cutting signal" — requires separate per-segment validation before thesis impact.
3. **Never aggregate cross-segment as if same population.**

**Correction (mandatory per principle #29):**
1. For any triangulation candidate, enumerate: "source 1 segment = X, source 2 segment = Y, source 3 segment = Z"
2. If X = Y = Z → segmented triangulation. Note the segment explicitly in the `triangulation.md` entry.
3. If any of {X, Y, Z} diverge → cross-cutting signal. Log to `cross-source-log.md` only.
4. Before any portfolio action, verify the segment of the cluster matches the segment of the position(s) being acted on. Mismatch = no action.

**Retroactive application (May 26 brief):**
- Cluster: Uber (May 25) + Microsoft (May 22) + KPMG (Q1 2026) → "AI ROI is broken"
- Source 1 segment (Uber): developer-tooling
- Source 2 segment (Microsoft): developer-tooling
- Source 3 segment (KPMG): cross-segment (general AI survey)
- Action target: workflow-software / data-platform (NOW, PLTR, DDOG, SNOW)
- Verdict: cross-cutting signal, log to `cross-source-log.md` as **segmented signal for developer-tooling**. Do NOT promote to triangulation. Do NOT trigger workflow-software-segment portfolio action.

**How to check:** Before any `triangulation.md` write, force the question — "did I classify each source by AI-value-chain segment, or did I aggregate on direction-of-signal alone?" If only direction was checked, B31 may have fired — go back and enumerate segments.

**Hook enforcement:** moderate-feasibility. A Stop hook could scan for `triangulation.md` edits and require explicit "segment: [approved-value]" tag in each new entry. Alternatively, a session-start surface that flags triangulation candidates forming in recent assistant messages. Deferred — pending second observation of B31 or B20-via-triangulation drift to confirm hook value.

---

### B32 — Comp-set anchoring at the valuation step (pre-training stale-reference-class bias)

**Origin:** Self-caught 2026-05-27 during LSCC valuation discussion. User meta-question: *"Are you undermodeling the valuation because of your pre-training data?"* Honest answer: yes. I had called "26-27x forward EV/Sales is elevated" for LSCC without enumerating WHICH comp set "elevated" was relative to. The implicit comp set was historical FPGA cyclical semis (10-20x range from 2010-2020 data — the era my training data is heaviest on). But LSCC has structurally re-rated from FPGA-cyclical to chokepoint + AMI-firmware-platform per the chokepoint analysis from the prior turn. The right comp set is "chokepoint + software-adjacent" (ASML, TSMC, ARM, ALAB at 25-40x EV/Sales). Under the correct comp set, 26x is at the LOWER end of fair value, not elevated.

**Pattern:** Stating "elevated / cheap / fair / overvalued / undervalued / asymmetric" without enumerating the comp set the call rests on. Pre-training defaults to the historical comp set (the one with the most training data); structural reframes that change which comp set applies are not automatically carried through to the valuation step. The reframe is done at the classification step (per principle #28) but the valuation language reverts to old anchors.

**Distinction from related biases:**
- B23 (sell-side aggregation drift): operates on a single forecast at the input-aggregation step. B32 operates on a valuation call at the comp-set selection step.
- B25 (source-tracking over claim-verification): operates on a single claim's epistemic status. B32 operates on the comp set itself being mis-selected.
- B26 (pre-training as primary source): the parent bias. B32 is a SPECIFIC manifestation of B26 at the valuation step.
- B28 (cyclical-vs-structural mis-classification): operates at the classification step. B32 operates AFTER classification is correct but the valuation reverts to pre-classification comp set. The two compound: structural reframe at classification + stale comp set at valuation = double-undermodeling.

**Manifestation 2026-05-27 (the LSCC self-catch):**
- Step 1 (correctly done): classified LSCC as chokepoint + AMI-firmware platform per principle #28
- Step 2 (failed): said "26-27x forward EV/Sales is elevated" — anchored on FPGA cyclical comp 10-20x
- Step 3 (user surfaced): "are you undermodeling because of pre-training data?"
- Step 4 (corrected): built 3-layer valuation with chokepoint comp set (Layer 2: 25x chokepoint multiple → $130-145 fair value) + AMI optionality (Layer 3: 30-35x blended → $160-190 fair value). Current ~$140 in Layer 2 fair value, BELOW Layer 3 midpoint.
- Magnitude of undermodeling: ~15-30% understatement of fair value under chokepoint framing

**The structural fix (codified as principle #30):**
Before any valuation call, explicitly enumerate (1) which comp set the call rests on, (2) does the comp set match the company's current structural position per principle #28, (3) if structural re-rating has occurred, the right comp set has changed — pre-training defaults to the old one.

**Correction (mandatory per principle #30):**
1. For any "elevated / cheap / fair / asymmetric" language, name the comp set being used
2. Test the comp set against the current structural position (cyclical / chokepoint / platform / commodity)
3. If mismatch: rebuild valuation using the 3-layer template (cyclical floor + chokepoint premium + platform optionality + displacement haircut)
4. Compare the structurally-correct fair value to current price — that's the actual valuation call

**Retroactive application:** the LSCC "elevated" framing has been corrected. Other recent valuation calls worth re-auditing: any "rich multiple" / "expensive" / "asymmetric / not asymmetric" call where the underlying name has structurally re-rated in the past 24 months. Candidates for re-audit: SNDK, HYNIX, ALAB, MU, AVGO, MRVL — all underwent cyclical → structural transitions and may carry stale-comp anchors in their thesis files.

**How to check:** Before any valuation-language output, force the question — "did I name the comp set, and does that comp set match the company's CURRENT structural position?" If only the multiple was stated without comp-set enumeration, B32 may have fired — go back and rebuild via 3-layer template.

**Hook enforcement:** moderate-high feasibility. A Stop hook could scan for valuation-language tokens AND require either (a) explicit comp-set reference in the same message + structural classifier OR (b) explicit hedge "(snap valuation, not structurally-checked)". Deferred — pending second observation of drift to confirm hook value over the codification-instruction baseline.

---

### B33 — Narrative-stage-blind sizing (treating valuation-based sizing as stage-independent)

**Origin:** Codified 2026-05-27 alongside principle #31 after user-articulated hypothesis verification. User claimed valuations matter less in narrative-driven era; empirical agent verification confirmed PARTIAL truth but surfaced stage dependency the user's framing missed. Position-sizing recommendations historically applied D1-D5 scoring uniformly across Recognition Stages — but Stage 4-5 names systematically face surprise-capacity exhaustion that makes the same D-score over-state appropriate sizing by 25-50%.

**Pattern:** Recommending position size based on D1-D5 scoring (Duration / Magnitude / Pricing Power / Recognition Stage / Execution Quality) without applying an explicit stage-dependent sizing modifier. The Recognition Stage variable is INPUT to the D-score, but it does NOT separately modify the resulting size recommendation. Result: Stage 4 names get sized as if they were Stage 2 names of comparable D-score, leading to overweight positions in priced-to-perfection territory where beats produce muted/negative reactions (NVDA May 2026 muted reaction; PLTR Q1 2026 -8% post-beat).

**Distinction from related biases:**
- B26 (pre-training as primary source): operates at the data-input step. B33 operates at the sizing-output step after data is correct.
- B32 (comp-set anchoring at valuation step): operates on the multiple-judgment step. B33 operates on the resulting position-size step.
- B13 (recency-anchored synthesis): operates on the synthesis-update step. B33 operates on sizing decisions independent of synthesis updates.

**Manifestation 2026-05-27 (the verification trigger):**
- Multiple Stage 4 names in current portfolio (NVDA, ALAB, NOW) sized near max per D-score
- Agent verified Stage 4-5 names systematically face surprise-capacity exhaustion (NVDA May 2026 slipped on $91B vs $86.84B guide; PLTR -8% on +85% revenue growth)
- Under principle #31, these positions should carry 25-50% sizing discount vs current
- The over-sizing wasn't caught because Recognition Stage was an INPUT to D-score, not a separate sizing modifier

**The structural fix (codified as principle #31):**
Apply stage-dependent sizing modifier on top of D-score:
- Stage 1: standard + up to +25% premium if clean asymmetry
- Stage 2-3: standard sizing
- Stage 4: 25-50% discount
- Stage 5: reduce or exit
- Pure-narrative (no improving fundamentals): max 2%, 6-18 month hold, hard exit trigger after 2 quarters without fundamental improvement

**Correction (mandatory per principle #31):**
1. For any sizing recommendation, name the Recognition Stage
2. Apply the modifier table
3. State the modifier applied (e.g., "Standard sizing 4% × Stage 4 modifier 0.65 = 2.6% actual recommendation")
4. If no modifier explicitly applied, B33 has fired

**Retroactive application:**
- NVDA at Stage 4 → suggest sizing discount (Stage 4 muted reaction confirmed May 2026)
- ALAB at Stage 3-4 → near-max sizing already, do not add, consider partial trim trigger if Q2 muted
- LSCC (Active candidate, Stage 2-3) → standard sizing, no modifier needed
- HYNIX / SNDK / DDOG (Stage 3) → standard sizing
- NOW (Stage 3-4) → modest discount on incremental adds
- PLTR (Stage 4-5, not held) → no entry until stage refreshes

**How to check:** Before any sizing recommendation, force the question — "what Recognition Stage is this name at, did I apply the explicit modifier, and what is the residual surprise capacity?" If no Stage tag + no modifier visible in the recommendation, B33 has fired.

**Hook enforcement:** moderate feasibility. A Stop hook could scan for sizing-recommendation language ("X% position", "Tier: Core/Active", "size at Y%", "recommend Z% sizing") and require "Stage: [1/2/3/4/5]" + "modifier: [+/-X%]" tags in the same message. Deferred — pending second observation of stage-blind sizing recommendation to confirm hook value over codification-instruction baseline.

---

### B34 — Action without verification or premortem (file-anchored confidence + commit-blind execution)

**Origin:** Codified 2026-05-27 alongside principle #32. Triggered by twin user directives within 2 days articulating two complementary failure modes: (a) "never just formulate an output without doing some research, even if it's already in the files" (output-side: file-anchored confidence trap) and (b) "always ask yourself what could go wrong and what you might have missed before acting" (action-side: commit-blind execution trap). Same-turn operational validation: the AM 2026-05-27 brief triage caught 3 corrections + 1 correct drop using the discipline.

**Pattern (two manifestations):**

**Manifestation A (file-anchored confidence):** Using existing OS files as the source of truth without fresh verification. Files have a `last_updated` field that drifts; narratives shift between updates; the gap between the file's snapshot and current reality may invalidate the conclusion being drawn. Specific failure mode: re-using a stale stub or stale facts.md entry to support a current-turn output without checking whether the data has changed.

**Manifestation B (commit-blind execution):** Executing actions (file commits, agent launches, signal logs, thesis updates) without explicitly enumerating "what could go wrong" + "what might I have missed." Specific failure mode: shipping output with framing borrowed from source headlines that turn out to be misleading; propagating unverified claims; adding marginal signals to thesis files (degrading file quality); over-aggregating cross-segment signals as triangulation (B31 manifestation at the commit step).

**Distinction from related biases:**
- B11 (numerical claims without citation or hedge): operates at the claim level. B34 operates at the workflow level — checks BEFORE producing the claim.
- B17 (user-deference bias): operates on user inputs being uncritically accepted. B34 operates on FILE inputs being uncritically accepted.
- B25 (source-tracking-over-claim-verification): operates on relying on source reputation. B34 operates on relying on FILE STATE without verification.
- B26 (pre-training-as-primary-source): operates on data layer. B34 operates on the OUTPUT-GENERATION step.

**Manifestation 2026-05-27 (the codification trigger):**

Pre-codification, the AM brief triage would have:
- Logged DDG +30% as "single-day spike" (wrong — it's a 6-day sustained pattern; framing matters for thesis impact)
- Logged xAI as "abandoned solar" (wrong — minimal-not-abandoned + bigger story is Anthropic→xAI $1.25B/month contract that wasn't in the brief at all)
- Added LSCC Vivado note (wrong — would have diluted thesis file with marginal noise)
- Claimed "near-triangulation threshold" for power-pivot data points (unverified — only 1 prior reference in bottlenecks.md)

Post-codification (premortem applied), all four were caught and corrected before commit.

**The structural fix (codified as principle #32):**
Two-component discipline:
1. Fresh-verify before user-facing output on a name/topic (web search / primary-source check)
2. Premortem before commit or irreversible action (explicitly enumerate what could go wrong + what might be missed)

Scope explicit to prevent rigidity: fires on thesis/prediction/sizing/triangulation outputs + file commits + agent launches; does NOT fire on routine reads or simple status updates.

**Correction (mandatory per principle #32):**
1. Before any high-blast-radius output: ask "do I have a recent enough fresh-verify on this name?" If no, run fast verification.
2. Before commit: enumerate at least 2 "what could go wrong" + 1 "what might I have missed."
3. Log the application in `research/meta/principle-applications-log.md` with classification (REAL CATCH / FALSE POSITIVE / WASTED OVERHEAD) for monthly audit.

**How to check:** Before any commit OR thesis-impact statement, force the question — "did I fresh-verify the underlying claims AND run the premortem?" If either is missing, B34 has fired — go back through the discipline before completing.

**Hook enforcement:** moderate complexity. A Stop hook could scan for high-blast-radius output patterns + require evidence of recent verification tool calls OR explicit hedge. Deferred — pending application log accumulating 30 days of sample data to confirm hook would catch real misses (per principle #32 hook enforceability note).

**Detectability of bias firing (per user constraint 2026-05-27):**
Counts as the bias firing: any commit where post-hoc the user OR a subsequent agent identifies that the output (a) contained an unverified claim that turned out wrong, (b) propagated source-headline framing that was misleading, or (c) was committed without acknowledging clear risks. Monthly audit at recurring cycle checks application log + samples actual commits for B34 instances.

---

### B35 — Within-category aggregation when bifurcation applies at the same analytical level as the parent-category bifurcation

**Origin:** User correction 2026-05-28 during MU/SNDK rotation discussion. After I correctly bifurcated DRAM into HBM (structural) + commodity DDR5 (transitional), I failed to apply the SAME bifurcation discipline to NAND. I aggregated all NAND as "more cyclical than DRAM" when in fact NAND itself bifurcates into AI-tier enterprise SSD (structural — KV cache offload, model storage, vector DB, agentic persistent state — same binding-constraint test passes as HBM) + consumer NAND (cyclical — phone, PC, gaming, replacement-driven). User verbatim 2026-05-28: *"NAND is becoming a structural integral part to how good an AI can reason."* They were right.

**Pattern:** Aggregating a category as one classification when the SAME bifurcation that applies to a parent category (e.g., "memory" → "DRAM structural-HBM-vs-cyclical-commodity-DRAM") also applies INSIDE the sibling sub-category at the same analytical level. The failure isn't "missing the bifurcation entirely" — it's "applying bifurcation to one branch but not the other." The blind spot operates one level deeper than B20 catches.

**Distinction from related biases:**
- **B20** (current-segment-% snapshot anchoring — forward-trajectory blindness): operates at the snapshot vs trajectory step within a single segment. B35 operates at the WITHIN-CATEGORY-BIFURCATION step — failing to apply bifurcation symmetrically when the same logic applies to a sibling category.
- **B26** (pre-training as primary source): operates on data input. B35 operates on framework application — accepting a category as homogeneous because pre-training data treated it as homogeneous (e.g., "NAND was cyclical 2018-2022" pre-training → "NAND is cyclical" present-tense).
- **B28** (cyclical-vs-structural mis-classification): operates at the binary classification step for a single name/category. B35 operates at the within-category bifurcation step — accepting a binary classification when a within-category split is warranted.
- **B14** (default vs non-default first reading): operates at the first-pass interpretation. B35 is a SPECIFIC manifestation of B14 at the within-category level — the default reading is "category X = classification Y" without bifurcating.

**Manifestation 2026-05-28 (the user catch):**
- I correctly bifurcated DRAM into HBM-structural + commodity-cyclical
- I correctly identified MU NAND as "21% cyclical drag"
- BUT I aggregated all NAND under cyclical without applying the within-NAND bifurcation that the same AI-binding-constraint test would have produced
- User pushed back: NAND is becoming structural for AI reasoning depth (KV cache offload, model storage, vector DBs, agentic state) — same binding-constraint logic that makes HBM structural
- Correction: NAND bifurcates into AI-tier enterprise SSD (STRUCTURAL — passes binding-constraint test) + consumer NAND (CYCLICAL — replacement-driven)
- Magnitude of mis-framing: SNDK was framed as "cyclical-with-structural-tailwind 18-24mo"; correct framing is "structural-permanent within AI-tier-SSD subsegment with supply-elasticity asymmetry vs HBM"

**The structural fix:**

For any category bifurcation applied at one level, force the question — "does the SAME bifurcation logic apply at the sibling-category level too?" Specifically:

1. When bifurcating any category (e.g., DRAM → HBM + commodity), ALSO check sibling categories (e.g., NAND, optical, networking) for the same bifurcation logic at the same analytical level
2. The binding-constraint test (principle #26) should be applied to sub-segments INSIDE the sibling category, not just to the parent category
3. If the same test produces "structural" verdict in sibling sub-segment, the framework correction is: bifurcate the sibling too, don't aggregate

**Correction (mandatory):**
1. For any cyclical-vs-structural classification of a CATEGORY, enumerate at least 2 sub-segments
2. Apply binding-constraint test (principle #26) to EACH sub-segment independently
3. Output the category classification as bifurcated (e.g., "NAND = AI-tier-SSD structural + consumer-NAND cyclical"), NOT as a single label
4. Map portfolio exposure to the specific sub-segment, not the parent category

**Retroactive application (the SNDK reframe 2026-05-28):**
- Prior framing: "NAND is more cyclical than DRAM; SNDK structural-with-supply-wall 18-24mo"
- Corrected framing: "NAND bifurcates structurally just like DRAM does; SNDK is structural via AI-tier enterprise SSD with supply-elasticity asymmetry vs HBM (NAND supply ramps faster than HBM supply due to less complex bottleneck); structural-vs-cyclical classification was wrong, supply-elasticity differentiation is right"
- Files updated: `wiki/memory-cycle-primer.md` (section 3.5 within-NAND bifurcation), `companies/SNDK/thesis.md` (reframing section), `companies/HYNIX/thesis.md` (HBM structural-advantage source clarification)

**How to check:** Before any cyclical-vs-structural classification of a parent category, force the question — "did I apply the bifurcation test inside the category? Did I check sibling categories for the same bifurcation?" If only the parent classification was made, B35 may have fired — go back through the sub-segments.

**Hook enforcement:** moderate complexity. A Stop hook could scan for cyclical-vs-structural classification statements and require that the same message includes either (a) explicit sub-segment bifurcation OR (b) explicit hedge "(category-level classification; sub-segment bifurcation deferred)". Deferred pending second observation of drift.

**Detectability**: monthly audit via principle-applications-log.md sampling can check for B35 instances. If 3+ instances in 30 days where post-hoc bifurcation revealed the wrong classification, codify a hook.

---

### B36 — Visible-user-adoption anchoring when adoption is embedded/invisible (wrong-measurement bias for emerging-technology TAM)

**Origin:** User correction 2026-05-28 during Robinhood Agentic Trading top-down decomposition discussion. After I argued "agentic MAU ~35M / social media 5.79B = 0.6% penetration → agentic is behind social media's curve," user pushed back: *"end users won't even know they're using agents — they'll just expect 'if I need X done, I expect this tool to make it work'."* Fresh-verify per principle #32 confirmed: 79% of organizations have deployed agentic AI in some form per Gartner April 2026 — meaning the "visible agentic MAU" measurement was severely understating actual adoption. Most users of enterprise tools with embedded agents don't self-identify as "agentic AI users."

**Pattern:** Using VISIBLE/EXPLICIT user-adoption metrics (e.g., "ChatGPT MAU," "Claude MAU," "agents-with-API-keys") as the TAM proxy when the actual adoption pattern is EMBEDDED — i.e., agents running under the hood of tools users already use (Google AI Mode embedded in search, GitHub Copilot embedded in IDEs, customer service tools that escalate to agents invisibly, brokerage platforms with bring-your-own-agent like Robinhood). The visible-MAU undercount understates demand and leads to wrong conclusions about adoption curves, binding-constraint duration, and infrastructure demand magnitude.

**Distinction from related biases:**
- **B17** (user-deference): operates at the input-credulity step. B36 operates at the MEASUREMENT-PROXY-SELECTION step.
- **B23** (sell-side aggregation drift): operates on forecast inputs. B36 operates on what to MEASURE.
- **B26** (pre-training as primary source): operates on data freshness. B36 operates on choice of metric.
- **B14** (default-first-reading): operates on initial interpretation. B36 is a SPECIFIC manifestation of B14 at the TAM-quantification step — defaulting to the visible/explicit measurement when embedded/implicit is the right frame.
- **B35** (within-category aggregation): operates on classification bifurcation. B36 operates on adoption-metric selection. Both share the "wrong-level-of-abstraction" failure mode.

**Manifestation 2026-05-28 (the user catch):**
- I framed agentic adoption: ~35M visible MAU vs 5.79B social media users → 0.6% penetration → "agentic is BEHIND social media's 1.5% 2008 baseline curve"
- User counter: "end users won't even know they're using agents"
- Fresh-verify caught: 79% of organizations have deployed agentic AI; ~10-20% reaching production scaling. The TRUE measurement should include embedded-agent users (people whose tools have agents under the hood), not just explicit agent users.
- Correct metric per `wiki/token-consumption.md`: compute consumed per user across all tools touched — NOT visible MAU
- The "0.6% penetration → slow ramp" framing was directionally wrong; the actual ramp is faster because adoption is hidden inside tool refresh cycles, not gated by user willingness to adopt new tool category

**The structural fix:**

For any TAM measurement of an emerging-tech category:
1. Distinguish VISIBLE adoption (users who self-identify as users of category X) from EMBEDDED adoption (users whose tools have category X embedded)
2. The right measurement is OUTCOME-PROXY — what does the category CONSUME (tokens, compute, storage, bandwidth) per user? — not user-count of those who self-identify
3. Token-intensity multiplier (10-100x agentic vs chat per `wiki/token-consumption.md`) is the correct mechanism for translating embedded-adoption into infrastructure demand
4. Social-media-style adoption-curve analogies only work for FRICTIONLESS-CONSUMER-DECISION adoption (download an app); they break down for EMBEDDED adoption (tool refreshes happen at vendor pace)

**Correction (mandatory):**
1. When estimating TAM for an emerging-tech category, explicitly name both VISIBLE and EMBEDDED adoption pathways
2. Use compute/token/storage CONSUMPTION as the proxy, not user-count
3. If using user-count as proxy, multiply by token-intensity ratio vs prior reference category (chat → agentic = 10-100x per OS wiki)
4. Apply social-media-curve analogies only when adoption is frictionless-consumer-decision driven; flag explicitly when category is embedded

**Retroactive application (2026-05-28):**
- Prior framing: "agentic MAU 35M / social media 5.79B = 0.6% penetration → ramp is behind social media"
- Corrected framing: "VISIBLE agentic MAU 35M is severe undercount of TRUE adoption (79% organizational adoption per Gartner Apr 2026); EMBEDDED adoption is happening at vendor-tool-refresh pace inside enterprise software; correct measurement is compute consumed per user, not visible MAU; token-intensity multiplier (10-100x vs chat) means even 'low' visible adoption produces structural infrastructure demand at scale"

**Investable implication of the correction**:
- HYNIX (held HBM): visible-MAU framing UNDERSTATES HBM demand because embedded adoption is fueling concurrent inference workloads invisibly
- SNDK (held NAND): both KV-cache offload AND compliance audit-trail compounding NAND demand grow with EMBEDDED adoption, not visible adoption — therefore growth pace is faster than visible-MAU implies
- DDOG (held observability): regulatory-binding observability demand for AI agents grows with REGULATED INDUSTRY adoption (finance, healthcare, legal) — embedded inside compliance procurement decisions, not visible adoption

**How to check:** Before any TAM estimate for an emerging-tech category, force the question — "is adoption visible-user-driven OR embedded-tool-refresh-driven? Did I use the right proxy?" If visible-MAU was used as proxy when adoption is embedded, B36 has fired — restate using consumption proxy + token-intensity multiplier.

**Hook enforcement:** moderate complexity. A Stop hook could scan for TAM-estimation language ("MAU," "adoption," "penetration," "user count") combined with category names ("agentic," "AI agents," "embedded AI") and require either consumption-proxy framing OR explicit "(visible MAU; embedded adoption excluded)" hedge. Deferred — first observation 2026-05-28; await second drift instance before hook investment.

**Detectability**: monthly audit via principle-applications-log.md can check for B36 instances. The signature is "TAM estimate using user-count proxy without consumption-multiplier adjustment."

---

### B37 — Analyst-PT framing as default-bearish for binding-constraint structural names (the "above analyst PT = caution" pre-training reversion)

**Origin:** User catch 2026-05-28 in real-time during IBIDEN deep-dive synthesis. Agent surfaced "Ibiden current ¥15,375 above average analyst PT ¥11,276" and I treated it as a CAUTION signal — exactly the pre-training-default investing-wisdom failure mode that B28 had been codified to catch 24 hours earlier. User catch verbatim 2026-05-28: *"that is exactly the false reasoning that the initial Claude session I did this in December and January with what it did not say to buy because it was saying that everything is above analyst consensus. PNE is too elevated, but it missed the fact that, well, if it... if you can just confirm or find patterns that whatever layer they are in within the AI value chain is a crucial component for models to be better at reasoning... then the average analyst PT doesn't matter."*

User directive on enforcement: *"this must be fixed with a hook. its ok to surface it but its not ok to overweight it."*

**Pattern:** Citing "above (analyst | consensus | street) PT" — or any inverse "below PT" or "trading above target" or "stock has run past consensus" — as a CAUTION or BEARISH framing without explicit structural-context classification. For verified binding-constraint structural names in early-to-mid rerating arc, the expected sequence is STOCK LEADS, ANALYST CATCHES UP. Analyst PT lags structural-evidence accumulation by 2-3 quarters per B28. Therefore "above analyst PT" is NOT automatically caution-relevant — it's potentially the OPPOSITE signal (analysts chasing the rerating, bullish setup).

User's empirical observation: "the price back then [BE / SNDK early-mid 2025] was above every analyst's price target... they started chasing the stock instead of rerating it higher when it was lower, which again shows they chased the stock. That's actually the setup you want."

**Distinction from related biases:**
- **B23** (sell-side aggregation drift): operates at forecast-aggregation step. B37 operates at the price-target-comparison step.
- **B26** (pre-training as primary source): default sell-side anchoring is one manifestation. B37 is specifically the PT-vs-price framing manifestation.
- **B28** (cyclical-vs-structural mis-classification): parent bias. B37 is the specific manifestation at the analyst-PT level. B28 already said: "Same bias affects sell-side analyst frameworks at 2-3 quarter lag from structural-evidence accumulation. The mis-classification creates a multi-quarter mispricing spread between cyclical multiples (5-10x forward) and structural-growth multiples (15-30x forward) — alpha source for those who correctly identify the transition early." B37 enforces that codified principle at the specific PT-language application step.
- **B32** (comp-set anchoring at valuation step): operates on multiple selection. B37 operates on analyst-PT interpretation.

**The meta-failure pattern (worth flagging separately):**

B37 codification triggered by re-committing B28 24 hours after codification. The codified principle was inert text in the specific application. The user's discipline LOOP step 3 (monitor) revealed step 2 (codify the fix) was insufficient — required hook-based deterministic enforcement. This is the OS canonical pattern: "instructions are choices; hooks are enforced."

**Manifestation 2026-05-28 (the codification trigger):**
- IBIDEN synthesis cited "current ¥15,375 above analyst PT ¥11,276" as caution
- B28 codified 2026-05-27 explicitly said analyst lag is structural for binding-constraint names
- B28 did NOT fire in my application — codification was inert
- User caught real-time + directed hook-based enforcement

**The structural fix (now enforced via hook):**

`~/.claude/analyst-pt-context-hook.py` (added 2026-05-28). Triggers on PT-vs-price framing patterns; requires explicit structural-context classification (analyst lag, structural rerating, binding-constraint designation) OR genuine-overvaluation reasoning (Stage 4 narrative, priced-to-perfection, cyclical comp at peak) OR explicit hedge ("analyst PT framing; neutral, not used as valuation argument") OR principle/bias reference (B28, #28, #30, #31). Missing classification → hook exits 2 with required-action feedback.

**Correction (mandatory per hook enforcement):**
1. Before using any analyst-PT mention as a valuation argument, force the question: "is this a binding-constraint structural rerating where analyst lag is expected?"
2. If YES: "above PT" reframes as bullish signal (analysts chasing the rerating)
3. If NO: cyclical / overvaluation framing applies but must be reasoned explicitly
4. If unverified: hedge explicitly "(analyst PT framing; structural rerating context not yet verified)"

**Retroactive application 2026-05-28:**
- IBIDEN analysis: "current ¥15,375 above analyst PT ¥11,276" reframed — Ibiden IS a binding-constraint structural rerating per Principle #33 + EMIB-T cluster triangulation; therefore "above PT" is potentially BULLISH (analysts behind the curve), not bearish. Backtest agent launched to verify the empirical pattern on BE + SNDK + 2-3 additional binding-constraint structural names.

**How to check:** Before any analyst-PT comparison output, force the question — "did I classify this name as binding-constraint structural rerating OR genuine overvaluation OR neutral?" If no classification, B37 has fired — the hook will catch it; restate with explicit context.

**Hook enforcement:** ACTIVE (this is the codification that ships WITH a hook, unlike most prior bias entries where hook enforcement was deferred). Tested with BAD fixture (above-PT without context → exit 2) and GOOD fixture (above-PT with explicit "analyst lag" + "structural rerating" + "B28" context → exit 0) on 2026-05-28.

**Detectability**: hook fires deterministically on triggers; applications logged to principle-applications-log.md; monthly audit reviews false-positive vs real-catch ratios. If the hook fires consistently on legitimate Stage 4-5 overvaluation cases (false positives), tighten exemption patterns. Currently exemption list errs on the side of false positives (B17 risk that hook over-fires) — calibrated for first 30 days of use, refine at first monthly audit.

---

### B38 — Demand-side decomposition blind-spot for supplier-side cross-layer moats (CANDIDATE — awaiting N=2+ validation)

**Status:** CANDIDATE (per principle #32 premortem discipline — N=1 insufficient). Re-eval trigger: next monthly audit cycle 2026-06-24. If a 2nd case surfaces where a supplier-side cross-layer moat is hiding behind a demand-side-only decomposition, promote to codified bias. If 30 days pass with no second case, leave as candidate or retire.

**Origin:** SEMCO candidate thesis 2026-05-28. Applied Principle #33 (top-down capability decomposition — demand-side framework). Framework completed analysis but failed to surface the dominant structural insight: SEMCO is the only MERCHANT vendor offering both Layer 0 substrate AND Layer 1 silicon caps externally (turnkey-integrated supplier moat). The insight was surfaced only when user shared T3 borrowed analyst framing.

**Pattern:** Principle #33 traces END-TASK → CAPABILITIES → LAYERS → VENDORS (top-down demand). It naturally produces a per-layer competitive map but does NOT naturally produce a cross-vendor coverage MATRIX or surface unique-intersection moats activated by customer procurement preference. When a candidate company touches 2+ adjacent binding-constraint layers AND a buyer-side procurement-architecture variable activates the cross-layer position, #33 systematically under-surfaces the structural moat.

**Specific manifestations to watch:**
- Multi-layer-participating candidate companies where the structural moat lives in the COVERAGE pattern, not the per-layer position
- Customer procurement preference (integrated bundle vs best-of-breed) as a buyer-side moat-activating variable
- Vertical-integration plays where a vendor spans adjacent binding-constraint layers and a customer rewards the integration

**Correction (candidate — pending validation):**
When applying Principle #33 to a candidate touching 2+ adjacent binding-constraint layers:
1. Construct an explicit CROSS-VENDOR COVERAGE MATRIX — every named competitor as rows; every named binding-constraint layer as columns; cell = does this vendor have merchant presence at this layer
2. Identify unique-intersection cells (vendor X is unique in spanning layers A + B at merchant tier)
3. Examine the dominant customer's procurement architecture — do they prefer integrated bundles or best-of-breed per layer?
4. Map vendors to customer-procurement-preference axis; identify which sub-segment of the addressable market each vendor structurally captures

**Distinction from related biases:**
- **B15** (revenue-mix-anchoring): operates at single-company segment analysis. B38 operates at cross-company competitive-map level.
- **B16** (synthesis without cascade): operates at artifact-completion step. B38 operates at the FRAMEWORK-COMPLETENESS step within a single analysis.
- **B20** / **B31** (cross-segment aggregation): operate at signal-triangulation step. B38 operates at competitive-map-construction step.

**Detectability (per principle #32):**
- Track applications where a candidate touches 2+ binding-constraint layers. Question 1: did the analyst construct a cross-vendor coverage matrix? Question 2: did they examine customer procurement preference? If NO to both AND a non-consensus structural moat emerged from orthogonal source, B38 has fired retroactively.
- N=2+ confirmation pattern would justify codification. Until then: CANDIDATE.

**Codification origin** (the meta-pattern): the SEMCO insight was surfaced by borrowed analyst framing, NOT by my own framework. Hook discipline (anti-fab + borrowed-vs-firstprinciples) caught the propagation failure mode in real time. The user's meta-question 2026-05-28 verbatim: *"What input must I have given you for you to surface this in your own personal deep dive research?"* — surfaced the framework gap.

**Companion candidate methodology entry**: Principle #34 candidate (Supplier-Side Cross-Layer Moat Decomposition) — see methodology.md principle metadata table.

---

### B39 — Post-rally complacency bias (treating price-rally history as proof of asymmetry exhaustion) [CANDIDATE — N=1, awaiting N=2+ validation]

**Origin:** 2026-05-31 AIP deep-dive. After 3-subagent research returned data showing AIP at $36.28 vs 52-week low $7.14 (5× rerated), I concluded "no asymmetry left." User pushed back: *"how do you verify that there's no more asymmetry left?"* — exposing that I had anchored on RALLY HISTORY rather than running a proper bottoms-up upside-vs-current-price test. When I actually ran Stream 2's bottoms-up bull case 2028 ($175M × 15-20x = $2.6-3.5B) vs current $1.75B, the conclusion shifted: not "no asymmetry" but "moderately asymmetric, +50-100% bull / +20-50% base / -50% bear, expected value ~+16.5% over 2-3 years."

**Pattern:** Conflating "stock has rallied substantially" with "no asymmetric upside remains." The truth is that price-rally history and forward-asymmetry are INDEPENDENT — a stock can be at ATH AND still have unincorporated information; a stock at 52-week low can have NO asymmetry if the floor is structural. The correct test is bottoms-up upside vs current price, NOT rally history.

**Specific manifestations to watch:**
- "Stock has X-bagged from low" framing used as primary evidence against entry
- "Market has surfaced the catalyst" as a hand-wave without testing whether SPECIFIC catalysts in next 6-12 months are priced in
- Skipping bottoms-up bull/base/bear → multiple range → expected-value calc when stock is at ATH
- Using "Stage 3-4 narrative" framing (principle #31) as a binary EXIT signal rather than as a SIZING modifier

**Correction (candidate — pending validation):**
For any candidate where rally history is being cited as evidence against entry, mandatorily run the 5-test asymmetry verification framework BEFORE concluding:
1. **Bottoms-up bull case implied return**: build bull/base/bear revenue × multiple range → compare to current. Asymmetric = bull ≥ +200% AND base ≥ +50%; symmetric/exhausted = bull ≤ +50% and base ≈ flat
2. **Multiple sustainability**: is upside driven by multiple expansion OR revenue compounding at constant multiple? Multiple-dependent = narrative risk
3. **Catalyst density × probability**: count specific catalysts in next 6-12 months × P each × magnitude
4. **Consensus delta**: compare bottoms-up to sell-side consensus (gauge informational edge, NOT anchor)
5. **Downside floor distance**: bear-case revenue × low multiple = floor. Asymmetric requires upside >>> distance to floor (3-5:1 = asymmetric; 1-2:1 = moderate; <1:1 = exhausted)

The verdict is GRADIENT not binary: SCREAMING ASYMMETRIC vs MODERATELY ASYMMETRIC vs SYMMETRIC vs NEGATIVE EV.

**Distinction from related biases:**
- **B33** (narrative-stage-blind sizing): operates at Stage 3-4 priced-to-perfection at the sizing step. B39 operates at the asymmetry-verification step BEFORE sizing.
- **B23** (sell-side aggregation drift): operates at forecast step. B39 operates at the upside-vs-price step.
- **B28** (cyclical-vs-structural mis-classification): operates at the analyst-PT framing step. B39 operates at the "stock has rallied" framing step.
- **B37** (analyst-PT framing as default-bearish): operates at the analyst-PT step. B39 operates at the rally-history step. Both are price-history-anchoring failure modes but at different steps in the workflow.

**Detectability (per principle #32):**
- Track applications where rally history (e.g., "stock has X-bagged", "Stage 3-4 priced-in", "market has surfaced") is cited as evidence against entry. Question 1: did the analyst run the 5-test framework? Question 2: did they compute expected value across bull/base/bear with explicit probabilities and multiples? If NO to both AND a moderately-asymmetric structural thesis was wrongly dismissed, B39 has fired retroactively.
- N=2+ confirmation pattern would justify codification. Until then: CANDIDATE.

**Codification origin meta-pattern**: this is the SECOND time in 96 hours that user push-back surfaced a price-history anchoring failure mode in me (the first being the B37/analyst-PT-context-hook codification 2026-05-28 on IBIDEN). The pattern is recurring. If a third instance surfaces within 30 days, this should be promoted from CANDIDATE to permanent + paired with a Stop hook.

---

Every GRADE that reveals a new systematic error → add a row here with the same structure (origin, pattern, correction, how to check).

Every 6 months: review all entries, retire ones that have stopped showing up in grades, deepen ones that recur.

---

### B40 — Temporal-freshness blind-spot (PROMOTED to VERIFIED-HIGH-CONFIDENCE 2026-06-03 PM on N=6 within 48h of codification)

**Promotion rationale (per user directive 2026-06-03 PM):** "Data freshness should be an operating rule instead of a candidate." User explicitly elevated B40 from CANDIDATE to operating-rule status. Empirical N=6 confirmation cluster within 48 hours of original codification:
1. 2026-06-02 PM — SemiAnalysis recycled June 12 2025 Meta-Scale AI deal as "fresh" June 2026 signal
2. 2026-06-03 AM — Trump AI EO recycled (same June 2 signing rendered as "revised")
3. 2026-06-03 AM — Surface RTX Spark Dev Box recycled from prior day's evening brief
4. 2026-06-03 PM — English press repackaging Day 1-2 Computex announcements as Day 3 (per English subagent self-flag in `signals/cross-source-log/2026-06-03-computex-multilingual-24h-deepdive.md`)
5. 2026-06-03 PM — Marvell T100 Day 3 Taiwan press = amplification of June 1-2 announcement (per Traditional Chinese subagent)
6. 2026-06-03 PM — AVGO Tomahawk 6 Davisson CPO repackaged at Computex; original March 2026 announcement (per Traditional Chinese subagent)

**Per tiered framework in `meta/methodology.md` (codified 2026-06-03):** N=2+ INDEPENDENT confirmation cases → promote to VERIFIED-HIGH-CONFIDENCE. N=6 within 48h vastly exceeds the threshold. Critical Rule #12 (codified same day) is the enforcement mechanism for B40 as an operating rule.

### B40 POST-PROMOTION N+ catches (audit trail, enforcement working):

7. **2026-06-06 AM** — June 6 morning AI brief #2 included "Meta acquires 49% of Scale AI at ~$30B valuation" as headline alongside genuinely-new items. **Caught DURING verification (pre-cascade)** — recognized as recycled June 2025 deal; dropped from brief synthesis. Detail: `signals/cross-source-log/2026-06-06-morning-brief-memory-shortage-coalition-airtrunk-india-sp500-block.md`. Enforcement layer working.

8. **2026-06-06 PM** — User-shared viral tweet claiming "Google has published a paper that might end the transformer era" / "until today" / "Google just proved" framing. Paper "Memory Caching: RNNs with Growing Memory" was **published Feb 27, 2026 — 3+ months stale**. **Caught DURING verification (pre-cascade)** — recognized as temporally distorted framing on real-but-old paper. Detail: `signals/cross-source-log/2026-06-06-memory-caching-rnn-paper-tweet-verification-b40-catch.md`. Enforcement layer working — verification surfaced staleness BEFORE any cascade artifact written or thesis update propagated.

**Post-promotion empirical pattern:** 2 of 2 post-promotion catches were intercepted PRE-CASCADE (not, as B40 origin case was, AFTER cascade through 5 thesis candidates). Critical Rule #12 verification protocol is operating as designed. No status change required; B40 remains VERIFIED-HIGH-CONFIDENCE; appended to monthly audit trail 2026-06-24.

### B40 ORIGINAL ENTRY (preserved for audit trail):

**Origin:** 2026-06-03 SemiAnalysis brief recycled the June 12, 2025 Meta-Scale AI deal as if it were a fresh signal in a June 2, 2026 brief. Directionally correct (deal happened) but temporally stale by ~12 months. I propagated the framing through 5 emergent thesis candidates + per-name cascades before verification surfaced the staleness. **Cascade-impact: medium** — multiple thesis files referenced "Meta paid $30B for Scale AI" without checking the underlying timestamp.

**Pattern:** Secondary aggregator sources (SemiAnalysis, weekly briefs, Reddit summaries, Substack posts) frequently recycle older news without explicit recap framing. The signal LOOKS fresh because it's being curated alongside genuinely-new items. Without temporal verification, the harness treats it as a new signal — cascade propagates, position implications get derived, thesis files get updated based on stale evidence.

**Correction (candidate — pending validation):**
For any secondary-source signal, MANDATORILY verify temporal freshness BEFORE cascade:
1. **Publication date check** — when was the underlying primary claim published?
2. **Repackaging check** — is this newly-surfaced fact or recap of older news?
3. **Market-absorption check** — has the signal already been absorbed by markets (priced in)?
4. **Aggregator-bias check** — secondary sources that aggregate (SemiAnalysis, Citrini, weekly briefs) MORE likely to recycle older context vs primary sources (10-K, IR releases, earnings transcripts)

**Hook enforcement candidate:** Critical Rule #12 codified 2026-06-03 to enforce this discipline; future Stop hook could deterministically catch "fresh signal" claims without explicit date verification.

**Distinction from related biases:**
- B11 (uncited numerical claims): operates at the citation step. B40 operates at the temporal-currency step EVEN IF citation is provided
- B23 (sell-side aggregation drift): operates at the forecast step. B40 operates at the signal-recency step
- B25 (source-tracking-over-claim-verification): tracks source quality. B40 tracks WHEN the source's claim was made

**Detectability (per principle #32):**
- Track GRADE cycles where cascade was triggered by stale signal. If retroactive review shows cascade direction was wrong because signal was 6+ months old at time of ingest, B40 has fired.
- N=2+ confirmation pattern would justify codification. Until then: CANDIDATE.

**Codification origin meta-pattern:** This is the SECOND time in 96 hours that user push-back surfaced a signal-verification failure mode in me (the first being NOW Microsoft Scout over-statement same session — I anchored on TechCrunch "make people addicted" framing without verifying May 2026 Knowledge governance partnership context). The pattern is recurring. If a third instance surfaces within 30 days, this should be promoted from CANDIDATE to permanent + paired with a Stop hook.

---

### B41 — Measurement-frame bias (CANDIDATE — N=1 origin 2026-06-03 PM)

**Origin:** User 2026-06-03 PM articulated, in response to my E7 candidate elevation proposal on productivity plateau: *"the productivity of AI is directly dependent on the operators behind it... in user adoption is very fast, but in terms of productive adoption, it's very different... with AI given that the entire AI community is trying to figure out how to best use AI and how to best leverage AI and how to best work in tandem with them, there is no blueprint that you can easily follow yet... if Mythos is finding all these critical issues in banks and software companies, that is value that we don't have models to quantify yet numerically. This intangible value, but you know the value is tremendous. A non-AI company doing the same would have insanely high evaluation."*

**Pattern:** AI productivity/ROI studies measure WHAT IS EASILY MEASURABLE (PR throughput, time saved, year-1 EBIT impact) and miss WHAT IS HIGH-VALUE BUT INTANGIBLE (security findings, capability-floor-shifts, novel discovery, user-learning-curve-pending future productivity). The measurement frame is BIASED LOW.

**Correction (candidate — pending validation):**
For any "AI productivity plateau" / "AI ROI bounded" / "AI capex peaks" thesis, MANDATORILY audit:
1. Does the measurement frame capture intangible value (security/safety findings; capability ceiling shifts; novel discovery)?
2. Does the measurement frame include operator-learning-curve adjustment (humans figuring out how to use AI optimally — different from SaaS plug-and-play adoption)?
3. Does the measurement frame compare to comparable non-AI baseline appropriately (a non-AI vulnerability-finder would be valued similarly to Mythos)?
4. Are intangible-value users (security, compliance, R&D) under-represented in engineering-PR-throughput metrics?

**Distinction from related biases:**
- B23 (sell-side aggregation drift): operates at forecast step. B41 operates at measurement-frame step
- B26 (pretraining-as-primary-source): operates at evidence-selection step. B41 operates at value-quantification step
- B40 (temporal freshness): operates at signal-currency step. B41 operates at signal-completeness step
- B36 (visible-user-adoption anchoring): related — both about hidden/embedded value, but B36 is about adoption that's invisible; B41 is about VALUE that's invisible

**Hook enforcement candidate:** Future Stop hook could fire on "productivity plateau" / "AI ROI bounded" / "AI capex peaks" language WITHOUT explicit measurement-frame audit (intangible value + operator curve + non-AI baseline).

**Detectability (per principle #32):** N=2+ confirmation pattern would justify promotion. Currently N=1 origin from user 2026-06-03 PM input on E7 candidate.

**Meta-pattern note:** This is the FOURTH bias added in 7 days (B38 candidate 2026-05-28 → B39 candidate 2026-06-01 → B40 candidate 2026-06-03 AM → B41 candidate 2026-06-03 PM). Codification velocity is high. Monthly audit 2026-06-24 should review whether these are catching real failure modes or becoming inert text.

---

### B42 — Expectations-exhaustion bias (CANDIDATE — N=1 origin 2026-06-04 from AVGO Q2 FY26 GRADE)

**Origin:** AVGO Q2 FY26 GRADE 2026-06-04. Predicted T+24h +11-13% weighted on BEAT + CATEGORY EVENT (Stage 4 narrative). Actual T+24h: -3 to -13.78% AH. Diagnostic: pre-print rally was +13.6% / $270B added market cap in the 5 trading days INTO the print. The positive surprise was already priced; confirmation = no upside left = "buy the rumor sell the news."

**Pattern:** Pre-print rally >10% in 5 days creates expectations-exhaustion: even a genuine BEAT + CATEGORY EVENT can produce NEGATIVE T+24h reaction because the positive surprise was already priced. Distinct from "priced to perfection" (which is chronic, structural — multiple expanded over months); expectations exhaustion is ACUTE and quarter-specific (pre-print 5-day window).

**Correction (candidate — pending validation):**
For any BEAT + CATEGORY EVENT prediction with Stage 3-4 narrative status, MANDATORILY model the pre-print rally:
1. Calculate 5-day pre-print stock return
2. If 5-day return >10%: weight T+24h reaction expectation DOWN by 50% AND consider negative-reaction scenario as 20-40% probability
3. If 5-day return >15%: weight DOWN by 75% AND consider negative-reaction as 35-55% probability
4. If 5-day return <5%: standard L14 framework applies

**Distinction from related biases:**
- B23 (sell-side aggregation drift): operates at forecast step. B42 operates at expectations-baseline step (stock price vs forecast)
- B25 (analyst lag for structural names): operates at forecast-vs-fundamentals gap. B42 operates at price-vs-expected-fundamentals gap
- B40 (temporal freshness): operates at signal-currency step. B42 operates at expectations-already-priced step
- B41 (measurement-frame bias): operates at value-quantification step. B42 operates at expectations-aggregation step

**Hook enforcement candidate:** Future Stop hook could fire on Stage 3-4 + CATEGORY EVENT prediction WITHOUT pre-print 5-day rally check.

**Detectability (per principle #32):** N=2+ confirmation pattern would justify promotion. AVGO Q2 FY26 is N=1; HPE Q2 FY26 was COUNTER-example (large positive reaction despite some pre-print rally — but only +5-7% pre-print not >10%, so consistent with refinement). Awaiting next BEAT+CATEGORY prediction with >10% pre-print rally for N=2.

**Falsification trigger:** If next 2 cases with >10% pre-print rally AND BEAT+CATEGORY produce POSITIVE T+24h reaction, B42 is wrong.

**Meta-pattern note:** This is the FIFTH bias added in 8 days (B38 → B39 → B40 → B41 → B42). Codification velocity continues high. Monthly audit 2026-06-24 critical.

---

### B43 — Regime-blindness bias (CANDIDATE — N=1 origin 2026-06-04 PM)

**Origin:** AVGO Q2 FY26 GRADE 2026-06-04 + user-articulated regime read same day + same-day broader AI semi selloff confirmation (April CPI 3.8% hot, QCOM -10%, Micron -5%+, MRVL -4% per Investing.com + Seeking Alpha).

**Pattern:** Cohort calibration framework treats individual earnings prints as INDEPENDENT events. This misses that SECTOR REGIME can flip the BASE rate of reaction direction. The 2026 AI sector has been in "expectations overshoot" mode for months per Motley Fool "Saaspocalypse" + Investing.com valuation reset analysis. Default base rate of positive reaction on BEAT+CATEGORY for Stage 4 names has shifted from ~70-80% (historical) to ~40-50% (my model).

**Anti-pattern manifestation:** Applying L14 (Stage 3-4 + CATEGORY EVENT → +25-40%) at its codified base rate when the regime has already shifted the base rate. L14 was codified N=2 on NVDA Q1 FY27 (May 20) + HPE Q2 FY26 (June 1) — both during macro-relatively-neutral periods. AVGO Q2 (June 3) hit during macro risk-off + hot CPI environment = first regime-shifted application.

**Correction (candidate — pending validation):**
For any PREDICT workflow on a Stage 3-4 AI name, FIRST check sector-regime state:
1. Sector ETF (SOXX, SMH, IGV) intraday trend over preceding 5 days
2. VIX level + 5-day delta
3. Recent macro releases (CPI, Fed minutes, employment, geopolitical)
4. Recent T+24h reactions of cohort names to BEAT prints

If regime = expectations-overshoot/risk-off → discount L14 base rate by 30-50%.
If regime = re-rating/risk-on → L14 applies at codified rate.

**Distinction from related biases:**
- B23 (sell-side aggregation drift): operates at forecast STEP. B43 operates at REGIME STEP — separately from how forecasts aggregate
- B42 (expectations-exhaustion): operates at PRE-PRINT RALLY level. B43 operates at SECTOR-WIDE BASE RATE level
- B28 (cyclical-vs-structural at sell-side): operates at SELL-SIDE classification. B43 operates at MARKET CLASSIFICATION
- B40 (temporal freshness): operates at SIGNAL CURRENCY. B43 operates at REGIME PHASE

**Hook enforcement candidate:** Future Stop hook could fire on Stage 3-4 PREDICT WITHOUT sector-regime check.

**Detectability (per principle #32):** N=2+ confirmation pattern would justify promotion. AVGO Q2 FY26 is N=1; awaiting next BEAT+CATEGORY in macro risk-off period for N=2 validation. NVDA Q2 FY27 (August 2026) is the load-bearing test.

**Falsification trigger:** If NVDA Q2 FY27 + 1 more Stage 4 BEAT+CATEGORY both produce POSITIVE reactions despite macro risk-off, B43 is wrong / regime hypothesis falsified.

**Meta-pattern note:** This is the SIXTH bias added in 8 days (B38 → B39 → B40 → B41 → B42 → B43). Codification velocity at extreme high. Monthly audit 2026-06-24 critical — if velocity sustains, may indicate genuine regime transition rather than over-codification.

### B40 EXPANSION — Garble taxonomy (3 types, codified 2026-06-11)

Per `meta/codification-rule.md` §6 retroactive audit: B40 was originally "temporal-freshness blind-spot" (stale-recycle). Across June 2026 sessions, two additional garble types surfaced repeatedly in chat but were never codified. Expanding B40 into a 3-type taxonomy:

**B40.1 — Stale-recycle (original):** secondary aggregators recycle older news as fresh. **N=11+ catches** (Meta-Scale ×3, HBM4 piece, Google-Intel TPU 2-day recycle, etc., + 2026-06-12 EVE Rubin CPX: SemiAnalysis Sept 10, 2025 article curated alongside fresh June 2026 items in evening brief, made-fresh by adjacency; resolved via subagent verification same-session — Workflow #9 macro-first ordering caught the contradiction at Step 0 BEFORE thesis cascade per `signals/cross-source-log/2026-06-12-evening-brief-22-item-triage-workflow9-applied.md` §5 + 2026-06-13 AM brief: SK Hynix Chey 3× by 2034 republished from June 11 harness anchor + Amazon 2.5B gal water republished from June 12 — both caught at Workflow #9 Step 0 before cascade). VERIFIED-HIGH-CONFIDENCE. **Workflow #9 caught 3 stale-recycles in <48h (2026-06-12 EVE Rubin CPX + 2026-06-13 AM SK Hynix Chey 3× + 2026-06-13 EVE Musk-$1T 3rd-appearance + KPMG 3rd) — strongest empirical validation since codification; N=12+.**

**B40.2 — Magnitude-inflation by rewording:** brief summarizers convert qualitative claims to quantitative-sounding statements. Examples this session: "prepares" → "announces"; rate-vs-stock garble in SpaceX Gigasat ("1 GW deployed" vs actual "1 GW/year production rate target"); opt-in → mandate (AWS Bedrock data-share). Pattern: load-bearing word (rate/stock, opt-in/mandate, draft/passed) silently swapped. CANDIDATE — N=3 instances logged June 2026; promotion threshold N=2+ met → CONFIRMED.

**B40.3 — Attribution-garbling:** secondary sources credit third-party research papers to the model vendor / large lab. Canonical: DeepSeek "FlashMemory" feature in June 10 evening brief = actually arXiv 2606.09079, Tencent AI Lab + Tsinghua authors, no DeepSeek affiliation; community GitHub repo name caused Reddit conflation. CANDIDATE — N=1 in 30 days; watch for second instance; if N=2+ in 60 days → CONFIRMED.

**Composite enforcement:** subagent verification protocol expanded to include all three checks at first step: temporal-freshness + magnitude-precision + attribution-accuracy. Future Stop hook candidate (per `meta/codification-rule.md` §4) if any sub-type recurs after 5 skipped catches in 30 days.

### B44 — Chat-summary discipline drift from file-level discipline (CANDIDATE — N=3 origin 2026-06-11)

**Pattern:** I produce file-level work that correctly applies a discipline (T1/T2/T3 tagging, N-th order cascade, native-language anchor, conglomerate-dilution caveat, Bayesian P-update hedge) and then produce a CHAT SUMMARY of the same content that violates the discipline. Hook-driven correction follows; the chat correction is then logged but the underlying drift pattern is uncodified.

**N=3 origin instances this session (2026-06-09 → 2026-06-11), per `meta/codification-rule.md` §6:**
1. N-th order cascade — file (cross-source log §7) had explicit P-tier markers; chat summary collapsed to linear prose; hook caught
2. Native-language tagging — file (Olympus 7733.T thesis) had T1 native-jp citations; chat summary referenced 7733.T without restating the native anchor; hook caught
3. Probability hedge-label — file (HTFL thesis) carried `(my model)` tags on every P-claim; chat summary dropped the labels; hook caught

**Why it matters:** the hooks catch the chat-level miss, but the META-pattern (chat-summary discipline drift = the discipline only lives in files, not in chat) is the codifiable insight. Without a codification, the same miss recurs across sessions because each catch reads as a one-off rather than as instance N of a pattern.

**Mitigation hypothesis (my model, to test):** add a pre-generation reminder in chat-summary contexts that all file-level disciplines (T-tags / N-th-order / native-language / hedge labels) must mirror in the summary. If this doesn't drop the hook-fire rate within 30 days, build a deterministic chat-summary-mirror-check hook (sibling of structural-output-hook.py).

**Status:** CANDIDATE — N=3 in 1 session is intra-session not multi-session; promotion threshold = N=2+ multi-session instances within 30 days post-codification. Re-eval 2026-07-11.
**Cross-ref:** `meta/codification-rule.md` §6 retroactive audit; companion to B40 expansion.

### B40.3 PROMOTION — Attribution-garbling CONFIRMED at N=2 (2026-06-11 PM)

Per the B40.3 entry's own threshold ("if N=2+ in 60 days → CONFIRMED"):
1. **N=1 (2026-06-11 AM):** "DeepSeek-V4 FlashMemory" — third-party Tencent/Tsinghua paper (arXiv 2606.09079) credited to DeepSeek by Reddit conflation
2. **N=2 (2026-06-11 PM):** "Murata managing order intake on restricted basis" — Twitter/trade-press summary attributed competitor behavior (Fenghua suspension T2-confirmed, Samsung EM quote-pause T3-rumor) to the marquee name Murata; T1 Murata statement does NOT exist; JP procurement report explicitly states Murata manages via price/lead-time, not formal 受注制限. Per `signals/cross-source-log/2026-06-11-mlcc-tightness-wave-refresh-tier-bifurcation-b40-3-n2.md`
3. Related earlier instance (pre-taxonomy, retroactively consistent): 双环-supplies-Optimus-6-RVs stock-promotion claim rejected in Nabtesco dissection 2026-06-09 — smaller-entity action inflated onto bigger narrative

**Mechanism:** summarizers gravitate attribution toward the most-recognizable entity in the category (DeepSeek > Tencent-paper; Murata > Fenghua). The bigger the name, the higher the prior that a category-level behavior gets pinned on it specifically.
**Enforcement:** subagent verification protocol step expanded — for any company-specific behavioral claim (restriction, suspension, price action, design win), demand the T1 entity-specific statement; if absent, check whether the behavior belongs to a DIFFERENT entity in the same category.
**Status: CONFIRMED.** Composite B40 taxonomy now: B40.1 stale-recycle (VERIFIED-HIGH-CONFIDENCE, N=9+), B40.2 magnitude-inflation (CONFIRMED, N=3), B40.3 attribution-garbling (CONFIRMED, N=2 + 1 retroactive).

### B40.3 potential N=3 instance (2026-06-14 PM) — Walsin Q1 2026 "Japanese vendor" attribution ambiguity

Per `signals/cross-source-log/2026-06-14-pm-mlcc-equipment-materials-deepdig-3subagent.md` subagent B finding:

The user-shared trade-press brief (2026-06-14 AM) framed Walsin Technology Q1 2026 法說會 commentary as "Japanese equipment vendor lead times 6-12 months." However, the underlying T1 source ([BigGo Finance Q1 2026 earnings call summary](https://finance.biggo.com/news/TW_2492.TW_2026-05-27)) cites Walsin's "Japanese vendors" specifically for **palladium / silver / petroleum-derived materials** = electrode/termination MATERIAL suppliers, NOT manufacturing equipment vendors.

Possible interpretations:
- (a) The trade-press brief was correct and Walsin separately discussed equipment lead times in another call segment not captured in the BigGo summary — would NOT be a B40.3 instance
- (b) The trade-press brief mis-attributed material-vendor commentary as equipment-vendor commentary — would be a B40.3 instance (material-supplier behavior credited to equipment-vendor layer in the summarized brief)

**Status: AMBIGUOUS, pending T1 Walsin transcript verification.** If a full T1 Walsin Q1 2026 法說會 transcript confirms no separate equipment-lead-time commentary at the 6-12mo specificity, this promotes B40.3 to N=3 (validating the codification's predictive power: the catch worked).

Independent corroboration: Holy Stone Enterprise 1-1.5yr "high-end MLCC equipment lead time" claim (T2 [DigiTimes 2026-05-26](https://www.digitimes.com/news/a20260526PD211/holy-stone-mlcc-demand-high-end-2027.html), explicitly equipment-specific) STANDS regardless of the Walsin interpretation. The equipment-lead-time binding thesis is structurally supported by Holy Stone alone; the Walsin number is a corroborating-but-attribution-fragile data point.

**Action:** flag in 2026-06-14 AM cross-source-log + MURATA thesis (already executed in PM cascade commit). Re-test at monthly audit 2026-06-24: if any Walsin Q2 2026 投資者說明会 disclosure explicitly addresses equipment lead times, that resolves the ambiguity.

### B45 — Pre-training magnitude conservatism in structural-demand regimes (CANDIDATE — N=1 origin 2026-06-12)

**Pattern:** My naive pre-training prior treats +100-200% as the "extreme winner" band and +200%+ as the "rare outlier" tail for 18-month equity returns. In a confirmed structural AI-supercycle regime — where named bottleneck companies are supply-constrained on hardware delivering exponentially scaling demand — this prior is empirically wrong at the tail by roughly **5-8×**. The actual base rate (15-name AI-infrastructure basket, Jan 2025 → June 12, 2026, subagent-verified, full data in `signals/cross-source-log/2026-06-12-pre-training-magnitude-conservatism-calibration.md`):

- Naive prior expected ~1-2 category outliers + 0-1 extreme outliers in 15 names
- Actual: **6 category outliers + 6 extreme outliers**
- Tail names: MU +1,044%, NBIS +1,528%, SK Hynix +799%, ALAB +323%, Kioxia +5,480% (all structural supply-constraint bottleneck names)
- In-line vs prior (ANET +43%, ONTO +52%) = equipment-adjacent names, NOT bottleneck-direct → real regime differentiation, not vindication of prior

**Single-day move base rate (2026-06-10-12 window):** 7-8 of 15 cohort names with single-day moves +5-12% within 48-72h; ≥3 names with single-day moves >+8% (MU +11.66%, SK Hynix +9.38%, ARM +8.32%). **The pre-training heuristic "+7-10% single-day move = extreme expectations exhaustion signal" is mis-calibrated for this regime.**

**Origin case:** Kioxia VLSI Symposium 2026-06-12 pre-event registration (`predictions/2026-06-12-KIOXIA-VLSI-symposium-pre-registration.md`). H2 (L14-v2 expectations exhaustion) weight initially raised to P~45% on +12.08% pre-event rally. B45 calibration corrected the read: +12% over 12 days for a Stage 3 AI-infrastructure bottleneck name is **within-regime pattern**, not exhaustion-specific. H2 reweighted back to P~30%; H1 (L14 original holds) restored to modal at P~40%. Recommendation flipped from Option B (reactive) to Option C (50/50 split). The exhaustion-misread WAS caught — but only because the user articulated the meta-bias and forced empirical verification. Without B45 codified, the same misread will recur on the next pre-event registration.

**Correction rule:** In any session where the structural-demand AI-supercycle regime is confirmed per `sector/where-we-are.md`, BEFORE flagging any cumulative return or single-day move as "extreme," replace naive pre-training prior with the cohort empirical distribution:
- 18-month bottleneck-name return: median +160%, P90 +800%+
- Single-day move in AI-infra cohort: +5-12% routine (multiple times per week across cohort)

**Direct downstream effects on existing frameworks:**
1. **L14 / L14-v2 threshold recalibration needed.** The L14-v2 modifier (pre-print rally >10% over 5 days → 0 to -15% T+24h) was codified at AVGO N=1 in a regime where 10% in 5 days WAS unusual. In the current cohort, 10% in 5 days is sometimes a SINGLE-DAY move. Threshold candidate: 20-25% in 5 days to be diagnostic. Test at next L14 application.
2. **Stage 3-4 modifier (Principle #31) may be too compressive.** "Stage 3 melt-up" framing assumes magnitude exhaustion that doesn't bind in supercycle regime. The principle's magnitude-compression effect may need to be reduced or stage-thresholds re-anchored.
3. **Bear-case adversarial framework (P1 due 2026-06-27)** should use B45-corrected base rates, not pre-training base rates.

**Falsifier:** If the cohort's median 18-month return drops below +60% in the next measurement period (re-run subagent calibration at 2026-09-12 quarterly cadence), revert toward standard prior. Intermediate audit 2026-06-24 monthly cycle: confirm B45 still binding on any new prediction registered between codification and audit.

**Status:** CANDIDATE — N=1 origin 2026-06-12. Promotion to CONFIRMED requires:
- N=2+ instances where B45 catch CHANGED a thesis output between 2026-06-12 and 2026-09-12 (forward applications)
- OR a downstream L14/L14-v2 grade that proves the pre-training-anchored read was wrong by ≥10pp magnitude

**Companion biases (the structural-anchoring family):**
- B23 — Sell-side aggregation drift (forecast-step anchoring)
- B26 — Pre-training as primary source
- B28 — Cyclical-vs-structural mis-classification (sell-side LAG; classification-layer error)
- **B45 — Pre-training magnitude conservatism (magnitude-layer error in structural regimes; B45 is the magnitude-layer companion to B28's classification-layer error)**

**Cross-ref:**
- `signals/cross-source-log/2026-06-12-pre-training-magnitude-conservatism-calibration.md` — full empirical basket + classification table
- `predictions/2026-06-12-KIOXIA-VLSI-symposium-pre-registration.md` — origin case (reweight from PM to PM-2)
- `meta/codification-rule.md` §1 — triggered codification (introduces new bias + methodological insight)

### B46 — Framing-vs-institutional-signal inconsistency (CANDIDATE — N=1 origin 2026-06-12)

**Pattern:** I produce a detail-rich analytical framing (bear case, concentration risk, kill scenarios) that logically CONTRADICTS a credible institutional signal (CEO public endorsement, multi-billion strategic investment, multi-year contract, public design-win disclosure) without surfacing the contradiction. The micro details look rigorous but float as noise because they are not anchored to the macro thesis that institutional behavior implies.

**Origin (2026-06-12):** MRVL 3-subagent deep-dive produced a coherent bear case anchored on "AWS concentration risk + Trainium3/4 content demotion + Google TPU v8 to AVGO/MediaTek." User caught the logical contradiction: if MRVL is essentially AWS-anchored with content demoting, why would NVDA put $2B in MRVL AND why would Jensen publicly endorse MRVL as "next $1T company" at Computex June 2, 2026? Either (a) my framing is incomplete — the bull case is broader than AWS, OR (b) Jensen's endorsement is hype-not-substance. Default assumption SHOULD be (a) absent strong evidence for (b); I anchored on the bear framing without checking against the institutional signal.

**Mechanism:** Pre-training anchors on "concentration risk = bearish" narrative shape; my analytical generation amplifies the bear framing because details (Trainium content demotion confirmed by Benchmark; Google TPU v8 to AVGO) are concrete and citable, while the bull alternative (NVLink Fusion ecosystem connectivity backbone, Inphi per-bit DSP royalty across all accelerators, strategic asymmetry NVDA→MRVL vs NVDA→AVGO) requires inferring NVDA's strategic logic from the investment structure. Concrete details outweigh inferred strategy in the generation distribution. This is the bias.

**Distinction from related biases:**
- B23 (sell-side aggregation drift): forecast-step anchoring on consensus
- B26 (pre-training as primary source): general pre-training reliance
- B28 (cyclical-vs-structural mis-classification): timing/regime error at sell-side
- B45 (pre-training magnitude conservatism): magnitude-layer error
- **B46: FRAMING-LAYER error — analytical narrative shape contradicts institutional signal; companion to B26/B28/B45 but at framing-coherence layer**

**Correction rule:** Before stating analytical conclusions, check whether the framing is consistent with credible institutional signals on the name. If contradiction exists: (a) surface it explicitly, (b) reframe to integrate both, (c) only conclude AFTER reconciliation. Codified via Critical Rule #15 + `~/.claude/macro-anchor-hook.py` (Stop hook, activation pending) + `llm-native-priming-hook.py` item 9 (LIVE).

**Falsifier:** If the Jensen-reframe subagent fired 2026-06-12 returns "Jensen's framing IS partly hype-not-substance" — i.e., MRVL bull case really IS AWS-anchored and NVDA's $2B is structural insurance with limited spillover — then my original framing was correct and B46 is a false positive. In that case, retire B46. Currently expecting the reframe to confirm broader bull case (P~65%, my model) based on first-principles strategic logic (NVDA needs hyperscalers in NVLink ecosystem; MRVL is the cleanest co-design partner that's NOT a direct competitor).

**Status:** **CANDIDATE → N=2 (promotion threshold MET).** N=1 origin 2026-06-12 (MRVL Jensen-reframe — concentration-risk framing contradicted NVDA $2B + Jensen $1T endorsement). **N=2 confirmation 2026-06-14 (GEV near-zero-TTQ framing contradicted GEV CEO T1 SEC filing "reservations sold out through 2030").** Both catches changed thesis output BEFORE cascade (Workflow #9 Step 0 / user pre-emption). Pattern: pre-training-recall framing CONTRADICTS load-bearing institutional signal; should have surfaced contradiction before stating conclusions. Promotion to CONFIRMED at monthly audit 2026-06-24 review.

**Cross-ref:**
- `CLAUDE.md` Critical Rule #15 (codified same day)
- `meta/hooks/macro-anchor-hook.py` (Stop hook source)
- `meta/hooks/llm-native-priming-hook.py` item 9 (priming reminder, LIVE)
- `signals/cross-source-log/2026-06-13-MRVL-deep-dive-3subagent.md` (origin artifact where bias manifested)
- Companion bias family: B23 / B26 / B28 / B45

### B47 — Efficiency-driven demand destruction blind spot in supply-constrained thesis (CANDIDATE — N=1 origin 2026-06-14 PM4)

**Pattern:** When modeling structural-supply-constraint regimes (memory shortage, MLCC supercycle, CoWoS binding), my naive prior assumes demand growth at the end-use layer dominates efficiency-gain compression at the component layer. The telecom historical record (Ericsson SEK 273B → 248B 2000-2024 flat while mobile data traffic +1500-2000×; Cisco $48-52B FLAT for 6 consecutive years FY2015-FY2021 while internet traffic +5-6×; RAN market -22% 2022-2024 while 5G subs grew) shows this assumption can be EMPIRICALLY WRONG even in clearly structural-demand environments. Component vendors get compressed when application-layer efficiency reduces per-unit hardware demand faster than aggregate demand expands.

**Origin (2026-06-14 PM4):** User-articulated U8 candidate universal falsifier for HBM structural-regime thesis surfaced this blind spot. The harness had codified F1-F7 supply-side cycle-peak falsifiers (2026-06-14 PM3) without a corresponding demand-side universal that captures the elasticity-ratio mechanism. The Benedict Evans framework + telecom historical analog + AI efficiency frontier subagent research (per `signals/cross-source-log/2026-06-14-pm4-token-cost-elasticity-U8-evans-telecom-3subagent.md`) confirmed the gap. The first U8-adjacent empirical signal IDENTIFIED: DDR5 RDIMM surpassed HBM in per-wafer profitability Q1 2026 per T2 TrendForce/Digitimes — inference-vs-training mix shift in early form.

**Mechanism:** my analytical generation amplifies supply-side cycle-peak vocabulary because it's well-anchored in the prior cycle (2017-18 DRAM peak) + the codified Principle #27 (Post-Traumatic Supply Disorder). Demand-side compression-via-efficiency requires inferring from the elasticity ratio between cost compression and demand expansion — less concrete in the priors. Concrete supply-side falsifiers (capex break, ASP rollover) outweigh inferred demand-side compression in the generation distribution. This is the bias.

**Mitigation rule:** for any held supplier-side thesis in a structural-supply-constraint regime, explicitly model the elasticity ratio (component revenue per unit of end-use) AND require a U8-class falsifier (demand-side universal) with named discriminating test. The L26 framework now has 3 layers (universal supply-side + universal demand-side + cycle-specific); use all three when constructing or auditing falsifier sets.

**Distinction from related biases:**
- B22 (consensus-solution anchoring): supply-side substitution thinking
- B23 (sell-side aggregation drift): forecast-step anchoring on consensus
- B28 (cyclical-vs-structural mis-classification): timing/regime error at sell-side
- B45 (pre-training magnitude conservatism): magnitude-layer error in supercycle regime
- **B47: DEMAND-SIDE BLIND SPOT — focus on supply-side compression mechanisms blinds me to demand-side compression via efficiency at application layer; companion to B22/B23/B28/B45 at the demand-elasticity-modeling layer**

**Falsifier:** if held cohort thesis is correctly invalidated FUTURE by F1-F12 supply-side signals alone WITHOUT F13 (U8) firing, B47 was overstated. If F13 DOES fire before F1-F12 and held-cohort gets caught flat-footed, B47 is empirically validated.

**Status:** CANDIDATE — N=1 origin 2026-06-14 PM4. Watch for N=2 in: NVDA HBM-content-per-AI-query, CoWoS pricing per AI inference dollar, MLCC pricing per AI server unit. If any of those show component-revenue-per-end-use ratio compression while end-use grows, B47 promotes to CONFIRMED.

**Companion biases (the demand-side family):**
- B22 — Consensus-solution anchoring (supply-side substitution)
- B23 — Sell-side aggregation drift
- B26 — Pre-training as primary source
- B28 — Cyclical-vs-structural mis-classification (sell-side LAG)
- B45 — Pre-training magnitude conservatism (magnitude-layer)
- **B47 — Efficiency-driven demand destruction blind spot (demand-elasticity-modeling layer)**

**Cross-ref:**
- `signals/cross-source-log/2026-06-14-pm4-token-cost-elasticity-U8-evans-telecom-3subagent.md` — origin artifact
- `predictions/lessons.md` L26 — universal supply-side + demand-side + cycle-specific framework
- `sector/where-we-are.md` non-default read #9 — U8 elasticity-driven compression risk
- `signals/triangulation.md` TC-8 — paired counterfactual on token consumption compounding
