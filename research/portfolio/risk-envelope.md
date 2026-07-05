# RISK ENVELOPE — the binding sizing input (born 2026-07-05; missing-inputs #1 CLOSED)

**Source:** user answers 2026-07-05 (drawdown / tax / Kioxia confirmation) + 2026-07-05 DeGiro screenshots (T1) + the revealed-preference event of 2026-07-01/02. Every future decision package MUST size against this file (Rule #11 instrumentation). Benchmark section pending (missing-inputs #2 — next intake).

## 1. Scale & deployability (T1, screenshot + user statement 2026-07-05)
- Envelope = DeGiro account total **€95.406,73** (canonical per `holdings.md` 2026-07-05). User: *"willing to play with all the money that is currently in the account."*
- N26 = bank only; Kioxia-sale proceeds sitting there are OUTSIDE the envelope unless user says otherwise.
- No recurring contribution schedule stated — treat new cash as episodic (update on user statement).

## 2. Drawdown tolerance (user-stated 2026-07-05, verbatim-adjacent)
- *"Thirty to fifty percent drawdown I can stomach. Thirty percent is not too hard to stomach. Fifty percent is getting harder, but if the conviction is there and if we manage our books properly, then I wouldn't be concerned."*
- User's own framing: tolerance is a FUNCTION OF CONFIDENCE in the picks at the given time (resilience/longevity of the theses) — i.e., conviction-conditional, not a fixed number.

### ⚠️ The reconciliation this file exists for (honest, load-bearing)
- **Stated:** 30% comfortable / 50% hard ceiling.
- **Revealed (2026-07-01/02):** full liquidation of SKH + SNDK (+ the agreed Kioxia derisk executed in full) during a portfolio-level drawdown far BELOW the stated band — roughly −8-12% at book level over the two days (my estimate from the on-file moves: SKH −14.57% day at ~20% weight + correlated cohort legs; exact fills pending).
- **Reconciliation (my model, adopted as design basis):** the stated 30-50% is real but CONDITIONAL — it holds only when (a) conviction is actively maintained at the moment of pain (the conversion-layer lesson, `predictions/lessons.md` 2026-07-05), and (b) the pain arrives at a VELOCITY the holder can process. What broke tolerance was not −30% slowly; it was −14%-class single-day moves on the largest, most correlated cluster. Therefore the envelope regulates CLUSTER CORRELATION and SINGLE-DAY VELOCITY exposure, not just total drawdown.

### Derived sizing rules (PROPOSED, my model — user approval turns these binding)
| Rule | Phase 1 (now → first drawdown episode survived without intervention) | Phase 2 (earned) |
|---|---|---|
| Design-target max book drawdown (bad-case, all theses' bear cases firing correlated) | ~25-30% | ~35-40% (approaching stated band) |
| Single position cap | ≤15% of book | ≤20% |
| Correlated-cluster cap (names that move together on one factor, e.g. the memory complex) | ≤35% of book | ≤45-50% |
| Cash floor while rebuilding | ≥20% | none |
| Deployment style | staged tranches only (no single-day full deployment) | staged, catalyst-aware |
| Red-day protocol | **Drawdown card:** on any −5%+ book day, I produce (unprompted if a wake fires, on request otherwise): falsifier state per held name + the pre-registered do-nothing rule + what would ACTUALLY change the thesis. Selling decision waits for that card. (Candidate; needs user adoption to mean anything.) | same |
- Phase-2 promotion condition: one genuine drawdown episode (book −10%+ or largest name −15%+ in ≤3 sessions) passed with decisions made via package, not via broker app at the moment of pain.
- Rationale for Phase 1 caps (my model): at a 35% cluster cap, a −15% cohort day costs ~5% of book — painful but processable; the 2026-07-01/02 configuration (~57.7% memory cluster per prior holdings.md) made the same cohort day cost ~8%+ and broke the seat.

## 3. Tax regime (user-stated 2026-07-05 — Germany)
- User: based in **Germany**; investing is his ONLY income source; states gains are **taxed as income**.
- Planning implication (binding regardless of exact rate): **every realized gain has a real tax cost → rotations and trims are NOT free** (unlike a wealth-tax regime). Higher bar for churn; trim proposals must state the tax drag; loss/gain offsetting within the same year matters for exit timing.
- ⚠️ Flag (recall-based — NOT tax advice, verify with a German tax advisor): the standard German private-investor regime is a flat capital-gains withholding (Abgeltungsteuer ~25% + solidarity surcharge) rather than personal income rates; income-rate treatment applies in specific classifications (e.g., commercial securities trading). The user's statement is recorded as authoritative for his situation; the effective rate should be confirmed with his advisor before it's used in any trim/hold math with precision. Until then, packages carry a generic "realized-gain tax cost" line, no rate arithmetic.
- Germany has no long-term holding discount for listed shares (recall-based) — holding period does not change the tax bar, conviction does.

## 4. Kioxia classification correction (user 2026-07-05)
- User: Kioxia was closed in the same Wed/Thu window, **but it was the already-agreed sale** ("a sell that was already agreed upon between both of us") — consistent with the standing derisk mandate carried in prior holdings.md ("further derisk parked on N26 access"). Recorded as: **agreed-derisk executed in full within the emotional window** — pre-authorized in direction, unpackaged in magnitude. Distinct classification from the SKH/SNDK exits (pure emotional override, N=1 of the conversion-layer lesson).

## 5. Benchmark & success definition (user answers 2026-07-05; missing-inputs #2 CLOSED)

**User's words (condensed, faithful):** 100%/yr "would be amazing" but acknowledged as requiring more risk; "we might live in a world where fifty percent is actually achievable... if done right"; "I definitely wanna beat the Nasdaq, the S&P — the best performing indexes"; "I definitely want to beat the obvious trade"; holistically: "I just wanna find undervalued companies, and I'm happy to hold them for a couple of months before they actually move. I know it's all probabilities."

### The benchmark ladder (codified)
| Tier | Bar | Type | Judged |
|---|---|---|---|
| 1 — PRIMARY (hard pass/fail) | Beat the better of Nasdaq-100 TR and S&P 500 TR | Relative | Rolling 12-mo checkpoints; primary verdict at 24 months |
| 2 — SECONDARY (hard) | Beat the "obvious trade": buy-and-hold NVDA, and an equal-weight mega-AI basket (NVDA/AMD/AVGO/TSM, my model definition — user may amend), both frozen at the same baseline date | Relative | Same cadence |
| 3 — ASPIRATION (soft, design input not pass/fail) | ~50%/yr; 100%/yr acknowledged stretch | Absolute | Informs sizing philosophy (justifies concentration WITHIN the envelope), never justifies breaking Phase caps |

**Baseline anchor:** 2026-07-05, account €95.406,73 (screenshot T1, `holdings.md` canonical). Later deposits/withdrawals adjust the base (money-weighted). **Baseline index/benchmark closes (Nasdaq-100, S&P 500, NVDA, basket legs as of the Jul-3 close) are NOT yet on file — capture task assigned to the next wake/scan with T1 sourcing; no baseline levels are to be invented retroactively.**

### ⚠️ The tension this creates (Rule #18, stated at codification)
A 50-100%/yr aspiration and the Phase-1 envelope (≤35% cluster, ≥20% cash floor, staged tranches) pull in opposite directions: with a large cash floor, the deployed book must dramatically outperform for the account to hit tier-3 numbers (arithmetic, my model). Resolution adopted: **the return unlock IS the phase ladder** — Phase-1 exists because last week showed the binding constraint on returns was never pick quality (the regime base rate B45 is on file: 6 of 15 basket names >+200% Jan-25→Jun-26), it was SEAT-TIME: the exits realized taxes and missed the on-file Jul-3 rebound. Beat-the-index compounds through staying seated at survivable sizes, then earning Phase 2. If after 2 rolling checkpoints the envelope itself (not picks) is demonstrably the reason tier-1 is missed, the envelope gets re-negotiated with the user — explicitly, not by drift.

**Success definition (one line):** tier-1 and tier-2 beaten at the 24-month verdict, with zero envelope-breaking interventions along the way — that last clause is part of winning, not decoration.

## 6. Change log
- 2026-07-05: file born; sections 1-4 filled from user answers; derived rules PROPOSED pending user approval.
- 2026-07-05 EVE: §5 benchmark ladder codified from user answers; baseline-close capture assigned to next wake; missing-inputs #2 CLOSED.
