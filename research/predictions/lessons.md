# Lessons — Mandatory Pre-Read Before Any New Prediction

**Last updated:** 2026-05-20

## TL;DR

Accumulated calibration memory from graded predictions. Every PREDICT workflow MUST start by reading this file. New lessons are appended via the GRADE workflow.

---

## Lessons (most recent first)

### L3 — Don't take partial profits on an intact bottleneck thesis
**Origin:** User feedback, 2026-05-20. User identified Bloom Energy (BE) early as a bypass-route name for the power constraint (time-to-power thesis). Bought, took ~+30% profit, exited. Stock then continued running and just reported earnings — user reports it was up double digits two trading days in a row. The thesis (Bloom solves the time-to-power problem for hyperscalers needing power in months not years) was never falsified — they sold on the emotional resolution of position uncertainty, not on analysis. Same root cause as L2 (emotional exit on intact thesis), different trigger (partial profit rather than macro fear).

**Generalizable lesson:** When the thesis is "this company is solving a binding constraint that consensus has not yet recognized," the re-rating runway is the full move from "ignored" to "consensus-priced." Selling at +30% on a name in the first inning of that re-rating is leaving the asymmetric leg on the table. The decision to sell must be falsifier-based, not magnitude-of-gain-based.

**Calibration adjustment:** For any name held on a bypass-route thesis, the rebalance rule is: trim to target sizing if the position drifts >2× target due to appreciation. Do NOT exit because of percentage gain alone. Exit only when (a) a written falsifier fires, OR (b) the bottleneck has clearly resolved and the bypass-route is no longer the edge.

**The harder rule:** Profit isn't the signal. Falsification is the signal. If a name has +30% on you and the thesis is intact, that's evidence the thesis is WORKING, not evidence to leave.

**Linked bias:** B9 (emotional sell) and B10 (P/E anchoring on emerging-demand stories).

---

### L2 — Operate ONLY on thesis falsification, never on macro noise
**Origin:** User feedback, 2026-05-20. User held a storage thesis (Sandisk, Kioxia, Seagate) built Dec 2025/Jan 2026 on inference-demand grounds. Sold during a short-term S&P pullback driven by Venezuela macro headwind. Thesis was intact. No falsifier had fired. The sell was emotional risk-management, not analytical discipline.

**Generalizable lesson:** A thesis lives until a written falsifier fires. Wars, geopolitical events, market dumps, recession fears — none of these are sell signals unless the thesis was built on the absence of those events. Macro headwinds compress prices; they don't invalidate theses. The two are different signals and must be treated differently.

**Calibration adjustment:** Before any sell recommendation, the FIRST question is: "Which specific written falsifier has fired?" If the answer is "none," the recommendation is no-action. Volatility tolerance and position-sizing handle macro stress; selling does not.

**The harder rule:** Don't validate emotional decisions retroactively. If a sell happens and the stock later goes up or down, that doesn't make the decision right or wrong — only whether a falsifier actually fired does.

**Linked bias:** B9 in `meta/biases-watchlist.md`.

---

### L1 — Bottoms-up before outside view
**Origin:** NVDA Q1 FY27 prediction process, 2026-05-20 (pre-grading)
**Context:** Two predictions were drafted for NVDA Q1 FY27 — V1 anchored on the cluster of bullish sell-side estimates (MS $79.26B, GS $80.05B) and split the difference at $80.6B. V2 was rebuilt bottoms-up using CoWoS-L capacity × unit yield × ASP mix and arrived at $82B. The V1 process added ~zero edge over consensus because the inputs WERE the consensus.

**Generalizable lesson:** When making a prediction, build the model from supply-side / unit economics first. ONLY then compare to sell-side. If you can't derive the number without seeing analyst estimates, you don't have edge — you have an opinion of opinions.

**Calibration adjustment:** Every PREDICT entry must include a "bottoms-up build" section that precedes any consensus comparison. The arithmetic must be visible — no skipping to the punchline.

**Linked bias:** B1 in `meta/biases-watchlist.md`

---

## How to use this file

1. Read all entries before starting a PREDICT workflow.
2. Identify which lessons apply to the specific prediction at hand.
3. In your prediction document, explicitly note: "Lessons applied: L1, Lx" — this forces conscious recall.
4. After the event resolves, run GRADE and append new lesson if the analysis taught something generalizable.

## Lesson quality bar

A lesson is worth adding if:
- It identifies a SPECIFIC reasoning step that went wrong
- The fix is ACTIONABLE (something to do/not do, not "be smarter")
- The lesson is GENERALIZABLE (will apply to future predictions, not just this one)
- It's not already covered by an existing lesson

If a lesson is just a restatement of "I should have predicted X instead of Y" without a process insight → don't add it. The lesson must be about HOW to think, not WHAT to think.
