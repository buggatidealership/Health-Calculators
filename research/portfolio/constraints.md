# Portfolio Constraints — Load-Bearing Framing

**Last updated:** 2026-06-22 PM (user explicit clarification UPDATE 2: total cash target €260k; burn revised to €70k/year; family support factor added; counterintuitive-acknowledged 2027-2028 cycle-peak window)

## 🔴 2026-06-22 PM UPDATE 2 — TOTAL CASH FRAMEWORK + BURN REVISION + FAMILY FACTOR

**User verbatim 2026-06-22 PM (second clarification, ~30 min after first €30k-deployable clarification):** *"I wanna have two hundred and sixty k in cash, and all the rest essentially deployed. The reason why is because, well, I need some money on this side to be able to bridge a potential complete crash... I do know that a three year runway is quite long, especially if the cycle extends into twenty twenty seven and might peak around the end of twenty twenty seven or a twenty twenty eight. it is counterintuitive to keep the amount of cash. Um, but I wanna have sort of two hundred and sixty k in cash to be able to bridge any type of issues that's literally worst case scenario. The portfolio goes to zero, which, again, is a very unlikely scenario. But, again, you never know. I wanna have cash on this side to be able to fund my living expenses, which I'm roughly taking seventy k a year for. And then I wanna have some extra money to be able to sustain My mom, for example. like, help, uh, with paying her taxes."*

| Updated framework | Value | Notes |
|---|---|---|
| **Total cash target (across all accounts)** | **€260k** | UNTOUCHABLE for equity deployment; bridge for worst-case "portfolio goes to zero" tail scenario |
| **Annual burn (REVISED)** | **€70k/year** | UP from €60k June 4 disclosure (+17%); incorporates family support component |
| **Implied runway at zero portfolio income (my model)** | **~3.7 years** | €260k / €70k = 3.71 years |
| **Family support factor (NEW qualitative)** | mom's tax support (per user) | Additional uses beyond personal burn explain buffer above pure 3-yr-runway math |
| **Deployable cash (from prior PM update)** | ~€30k | Subset of €69k Degiro cash; rest of Degiro cash is part of €260k total target |
| **Cycle-peak window self-acknowledged tension** | 2027 → late-2027 / 2028 (per user) | User explicitly aware that holding cash through cycle-peak costs significant opportunity; discipline is conscious not reflexive |

**Sizing-decision rule (refined 2026-06-22 PM UPDATE 2):** every new-position or add recommendation MUST be sized against ~€30k deployable pool, NOT against total Degiro cash or total liquid. **Reductions in total cash below €260k require explicit user re-authorization** — the €260k floor is bridge-buffer + family-support + tail-risk-protection, NOT investable.

**Why this matters for forward sizing:**
- Prior framework treated "deployable cash" as flexible within total Degiro — REVISED: it is a fixed bucket per user explicit floor commitment
- Future deployment opportunities must compete for ~€30k or whatever pool remains after each transaction
- Sales of held positions FREE capital that can re-enter the €30k pool (or boost above it) but trim discipline must respect that this is the only deployable runway

**Counterintuitive-acknowledged framing (load-bearing for re-eval trigger):**
User explicitly weighed: "counterintuitive to keep the amount of cash...especially if the cycle extends into 2027/2028." This is HONEST EPISTEMIC POSTURE — user knows holding cash through cycle-peak costs significant opportunity but accepts the cost for worst-case-bridge optionality. **This means: do NOT push the user toward higher deployment unless a structurally different worst-case-bridge alternative emerges (e.g., income event, family-support resolution, structural-floor confidence increase).** The cash floor is not a calibration miss — it is a values-driven choice.

**Re-eval trigger:**
- If user's income/family-support situation changes materially → re-derive runway from new burn
- If cycle-peak indicators concentrate (Stage 4 narrative across cohort + multiple beat-and-no-rally events + cohort-correlation breaks) → may justify temporary cash-floor reduction; user-call only
- If user updates `portfolio/holdings.md` via new screenshot → re-check deployable pool

**Cross-link to today's decision:** Per 2026-06-22 PM joint-state H3 selected by user verbatim "I'm not gonna deploy anything today. I'm happy to wait for more info" — €0 deployed today; standing by for additional user-shared data points for cross-domain pattern-matching synthesis.

---

## 🔴 2026-06-22 PM USER CONSTRAINT CLARIFICATION — DEPLOYABLE-CASH BINDING

**User verbatim 2026-06-22 PM:** *"I wanted to keep some cash on the sideline. So I wanna keep a three year runway and have the rest invested. Right? So in that regard, I don't have sixty nine left to deploy. I have roughly thirty left to deploy. So thirty k cache left to deploy."*

| Cash bucket | Amount | Usage discipline |
|---|---|---|
| Degiro total cash (per `portfolio/holdings.md` 2026-06-18 PM33 canonical) | €69,423.90 | — |
| **Runway-reserved (3-year)** | **~€39k** | UNTOUCHABLE for equity deployment; covers sequence-of-returns risk per indefinite-investor-as-career horizon |
| **DEPLOYABLE cash** | **~€30k** | Available for new positions / adds; this is the BINDING POOL for all watchlist/sizing decisions |

**Sizing-decision rule (added 2026-06-22 PM):** every new-position or add recommendation MUST be sized against ~€30k deployable pool, NOT against total €69k Degiro cash. A 1.5-2.5% Degiro RESERVE for a single watchlist name = €2,650-€4,400 = **9-15% of deployable pool** — material allocation that competes with all other future opportunities (held-position adds on dips; other watchlist entries; post-print dip-buys).

**Why this matters:** prior sizing analyses (PM-IBIDEN-BEAT-PROB bimodal framework; PM-ROTATION-EMPIRICAL joint-state) treated total Degiro cash as deployable. With €30k binding, the rotation-vs-fund-from-cash arithmetic shifts: TRIMMING bifurcation-loser names (e.g., NOW per PM-ROTATION-EMPIRICAL Q1-print bifurcation finding) becomes MORE attractive because it frees capital without consuming runway-reserved cash.

**Cascade implication for active sizing recommendations:**
- IBIDEN STARTER 0.5% (~€880) + RESERVE 1.5-2.5% (~€2,650-€4,400) = 12-18% of deployable pool from cash-only path
- Combined alternative: TRIM NOW 50% (~€2,320 freed) + smaller cash draw (~€1,180-€2,980) = MORE CASH-PRESERVING joint outcome
- Modal H2 from PM-ROTATION-EMPIRICAL (TRIM NOW + HOLD DDOG + IBIDEN STARTER decoupled) GAINS P-WEIGHT under this constraint (was P~40% in 7-day-old €69k framing; now P~40-45% under €30k constraint as cash-preservation argument strengthens)

**Re-eval trigger:** when user updates `portfolio/holdings.md` via new screenshot, re-check whether deployable-cash pool has changed (runway-reserved bucket may shift with monthly burn realization or income events).

**Decision-discipline propagation:** future SessionStart briefings should surface deployable-cash pool prominently; recommendation: extend `~/.claude/session-start-hook.py` to surface this when watchlist/sizing decisions are imminent (DEFERRED to next session-start-hook enhancement).

---

## User profile (disclosed 2026-06-04 PM; current as of 2026-06-22)

| Constraint | Value | Implication |
|---|---|---|
| Monthly burn | €5K | €60K/year baseline expense floor |
| Time horizon | **INDEFINITE — pursuing investor-as-career** | Sequence-of-returns risk dominates; cannot recover from early major drawdown via salary |
| Tax jurisdiction | Germany | Abgeltungsteuer 25% + Soli 5.5% = 26.375% flat on capital gains AND interest income; €1,000 Sparer-Pauschbetrag annual tax-free allowance (max via Freistellungsauftrag at each broker) |
| Cash venue | None — idle at 0% | **Highest-priority no-regret action: move to 3-3.5% income product** |
| Total liquid | ~€414K (~€214K invested + ~€200K cash) | Per `portfolio/holdings.md` |

## FIRE math (my model)

| Calculation | Value | Math |
|---|---|---|
| Annual burn | €60K | €5K × 12 |
| Standard 4% SWR portfolio needed | €1.5M | €60K / 4% |
| Current portfolio as % of FIRE target | 27.6% | €414K / €1.5M |
| Required real return to fund burn from current | 14.5%/year | €60K / €414K (aggressive — S&P long-term ~7-8% real) |
| Years to FIRE at 14.5% real annual return | ~9 years | rule of 72 derived, my model |
| Years to FIRE at 7-8% real annual return | ~15-20 years | more realistic per long-term historical baseline |
| Cash at 0% opportunity cost | €5-7K/yr forgone | €200K × ~3% German risk-free, my model estimate |
| Forgone cash income as % of annual burn | ~10% | derived |

## Honest framing (push-back to user)

**14.5% real annual return target is exceptional.** Most professional fund managers don't sustain it over 5+ year periods. AI-cohort tailwind makes this potentially achievable 2026-2028 but NOT durable through full cycle. If indefinite-horizon FIRE is the goal, three levers exist:
1. **Accept longer timeline** (15-20 years at 7-8% real is realistic baseline)
2. **Reduce burn** (€2.5K/mo → €750K FIRE target = 55% of current portfolio; much closer)
3. **Add income during accumulation** (consulting/freelance €30-40K/yr halves the math difficulty)

Concentration is feature AND bug: to hit 14.5% may require staying concentrated in AI cluster, but sequence-of-returns risk from no income means single bad year is permanent damage to FIRE timeline.

## German cash venue options (my model — verify yourself)

| Venue | Indicative yield | Notes |
|---|---|---|
| Trade Republic | ~3-3.5% on first tranche | tiered rate; promotional periods common |
| iShares €0-1y Govt Bond ETF | ~3-3.5% | T-bill basket; distributing preferred for German Vorabpauschale tax efficiency |
| Xtrackers Eurozone Govt Bond 0-1y | ~3-3.5% | similar T-bill ETF |
| DWS Geldmarktfonds | ~3.4-3.6% net | German MMF |
| Scalable Capital | variable, often promotional | check current rate |

**Recommended structure (my model):**
- €60K (1y burn buffer) in MMF — instant liquidity
- €80-100K laddered in T-bills 3-12 months — slight yield premium
- €40-60K available for equity deployment over 6-12 months on regime-confirmation triggers

## Deployment cadence triggers (per current L21/L22 framework + cash deployment context)

1. **Iran deal binary** (next 2-6 weeks) — if signed, deploy ~€15-20K into existing AI cohort on macro lift
2. **Murata Q1 FY27 print** (late July / early August 2026) — if beats consensus + holds = add €10-15K Murata; if beats + drops = L21 regime confirmed, redirect to non-AI defensives
3. **NVDA Q2 FY27** (August 2026) — load-bearing L21 regime test; if beats + rallies = aggressive deployment window
4. **AI cohort -10% drawdown event** — any time macro shock provides discount entry on high-conviction names; deploy €15-20K

## Open questions for refinement

- Burn breakdown (rent + food + healthcare + insurance + discretionary) — affects elasticity of burn reduction
- Other safety nets (German Bürgergeld eligibility if portfolio runs out? Family backstop?)
- Healthcare coverage (private vs statutory in Germany matters for indefinite no-income period)
- Any tax-advantaged vehicles already used (Riester/Rürup Rente, betriebliche Altersvorsorge)?

## Cross-references

- `portfolio/holdings.md` — current positions + cash position
- `portfolio/targets.md` — target sizing (needs revision given €414K denominator vs prior €214K)
- `sector/where-we-are.md` — current AI sector synthesis + L21 regime context
- `predictions/lessons.md` L21, L22 — regime + beat-analyst-consensus frameworks
- CLAUDE.md Critical Rule #11 — Position implication discipline (now sensitive to sequence-of-returns risk)
