# Alt-Data Probabilistic Prediction Framework

**Codified:** 2026-06-01 (user-directed framework, validated on N=2 trials: AGC 5201.T + Hirano Tecseed 6245.T)
**Status:** ACTIVE (re-eval trigger: monthly codification audit 2026-06-24)
**Type:** Reusable prediction harness — applicable to any AI-sector position decision where the harness produces an "if X happens then Y" trigger-conditional thesis

---

## Purpose

Replace "if/then" trigger-conditional theses with **computed probabilities + Bayesian-updated cascade reasoning**. The framework forces:
1. Explicit base rate construction from structural analogs (not narrative conviction)
2. Bottoms-up alt-data signal decomposition (not sell-side weighted-average)
3. Precision discounts (not over-confidence)
4. Kelly-mechanics sizing (not "feels right")
5. Honest gap acknowledgment (not fabrication)

---

## When to Invoke

**USE this framework when:**
- The harness produces a thesis structured as "ENTER IF X triggers" — replace with "ENTER at N% sizing given P(X) = Y% within Z window"
- Decision is binary (qualified/not, named/not, contract awarded/not) with quarterly resolution
- Target is a **physical chokepoint** name (MLCC, HBM, wafer, fluoropolymer, optical, etc.) where alt-data signals (capex timing, backlog disclosure, trade press) exist
- Native-language alt-data is accessible (Japanese for TSE 銘柄, Korean for KOSPI 종목, Chinese for Shanghai/Shenzhen 股票)

**DO NOT use when:**
- IP licensing / software / contractual moats (different moat type — physical scarcity framework not applicable; e.g., SNPS, CDNS, ARM IP-only)
- Macro/policy outcomes (different probability structure — election outcomes, regulatory rulings)
- Multi-year compounding theses where the trigger event timing is loosely defined (>24 months)

---

## The Six-Step Prompt

Use as input prompt to a research subagent (or direct execution):

```
TARGET DECISION: [Single sentence — company + specific testable
outcome + resolution window]

Examples:
- "P(AGC named qualified M10/Rubin Ultra PTFE CCL supplier publicly
  within 12 months)"
- "P(Hirano Tecseed demonstrates MLCC equipment order acceleration in
  Q1 or Q2 FY2027 results published by November 2026)"
- "P(SK Hynix announces 16-Hi HBM4E qualification with NVIDIA by H1
  2027)"

DO NOT use 'if/then' framing. COMPUTE the probability:

## STEP 1: ANALOGOUS HISTORICAL CASES (base rate)

Find ≥5 historical situations structurally analogous. For each:
- Starting conditions
- Evidence visible at the analogous decision point
- Eventual outcome
- T1/T2 source

Compute weighted base rate (full / partial / negative / excluded
weighting). FLAG fragile if N<5.

CRITICAL: include ≥1 negative analog (case that did NOT resolve
favorably). This prevents over-confidence.

CRITICAL: check whether the demand environment has materially shifted
since the analogous period. If yes, apply qualitative demand-shift
adjustment with explicit hedge. Example: 2018 MLCC cycle base rate
under-models 2026 agentic-AI demand environment.

## STEP 2: 10 ALT-DATA SIGNALS

Adapt the signal list to the target. Standard 10:

1. Patent filings rate at target vs competitors (USPTO/JPO/CNIPA/Espacenet)
2. Trade press mention cadence (Digitimes, PCB007, EE Times Asia,
   Japanese 日経エレクトロニクス, 化学工業日報, Korean Naver press)
3. Conference / trade show participation pattern (HKPCA, TPCA,
   SEMICON, MLCC Forum)
4. Native-language analyst reports cadence (kabuyoho.jp, minkabu,
   Naver Finance, 雪球)
5. Customer-side hiring signals (LinkedIn, native job boards —
   Bizreach, JobKorea, 51job)
6. Supply chain shipping data (Panjiva / ImportGenius / Japanese
   customs disclosure — paid sources)
7. **Capex execution timing alignment (bottoms-up)** — typically the
   highest-alpha signal; work backward from customer capex
   announcement using equipment/material lead-time conventions
8. Press release language pattern shift (generic → AI-specific →
   spec-specific over time)
9. Competitor failure signals (Q&A of incumbent's earnings — "sampling
   only" framing, qualification delays)
10. Sell-side initiation timing (major banks initiating coverage
    typically lags confirmed customer wins by 3-6 months)

For each signal: SIGNAL DIRECTION + MAGNITUDE relative to base rate.
Flag gaps honestly. Adapt the list to the specific name (e.g., for
equipment makers add "backlog disclosure" — 受注残高; for material
suppliers add "raw material capacity").

## STEP 3: BAYESIAN UPDATE

Base rate B + Net signal adjustment Δ (gap-weighted)

Naive: B + Δ. THEN apply PRECISION DISCOUNT if target has multiple
sub-criteria (e.g., "revenue >$X OR commentary OR guidance raise" —
each sub-criterion has its own probability; compound them).

State as SINGLE NUMBER with uncertainty band (e.g., "38% ± 16%"),
NOT a range. Wide bands honest if gaps numerous.

## STEP 4: CASCADE WITH COMPUTED PROBABILITIES (no 'if')

- 1st order: P(target event) × P(immediate price/business impact |
  event)
- 2nd order: × P(knock-on beneficiary cascade)
- 3rd order: × P(narrative rerating)
- 4th order: × P(consensus name in global discourse)

Each conditional rate base-rate-derived (cite historical analog) OR
explicitly flagged (my model).

## STEP 5: GAPS + WHAT WOULD NARROW THE BAND

List 3-5 unobtainable alt-data sources. Estimate band-narrowing
potential of each (±X%).

Highest-value gap closure typically: (a) confirmation of
customer-supplier relationship for micro-cap Japanese names, (b)
native-language Q&A transcript access (logmi.jp, paywalled), (c)
paid supply chain data (Panjiva, 化学工業日報).

## STEP 6: POSITION IMPLICATION (Kelly math)

Inputs:
- p = P(win) from Step 3
- b_win = upside if win
- b_lose = downside if lose
- q = 1 - p

Full Kelly = (p × b_win - q × b_lose) / b_win
Quarter-Kelly = Full × 0.25

Map Quarter-Kelly to % of portfolio. Apply liquidity caps for
micro-cap names. State whether sizing is Kelly-bound or
liquidity-bound — this MATTERS:
- Kelly-bound = conviction is the constraint → wait for catalyst
- Liquidity-bound = entry is the constraint → phased entry over
  4-8 weeks via limit orders

DO NOT use "enter IF X" — use "enter at N% NOW given P=Y%, scale
to M% on confirmation."

DISCIPLINE RULES:
- NO 'if X then Y' framing
- Every probability: base-rate-derived OR Bayesian-update OR (my model)
- Bottoms-up unit math for $ projections
- Native-language sources for non-Western companies
- T1/T2/T3 tier labels on every citation
- ATH-distance framing, not rally-history
- Honest gap acknowledgment

OUTPUT FORMAT:
- TL;DR (3-5 lines): computed probability + uncertainty band + position
- Steps 1-6 above
- Honest framework critique (where it worked, where it fell short)
```

---

## Validated Lessons from N=2 Trials (AGC + Hirano)

### What the framework reliably produces

1. **Non-obvious bottoms-up timing alignment** is consistently the highest-alpha output. Both trials surfaced timing alignment that sell-side analysts do not publish:
   - AGC: Chiba JPY 35B capex Mar 2023 → 18-24mo lead time → Q2 2025 commission → Q1 2026 M10 testing initiation (alignment non-coincidental)
   - Hirano: Murata Apr 2026 JPY 80B "urgent" capex → equipment orders Q1-Q2 FY2027 → revenue recognition Q2-Q4 FY2027 (Japanese GAAP percentage-of-completion) → Hirano Q1 FY2027 results Aug 6, 2026 + Q2 results Nov 2026

2. **Native-language historical analogs surface in Japanese/Korean searches but not English** (e.g., Hirano's JPY 18B backlog vs JPY 9B capacity in 2018 cycle — sourced from Japanese Kabutan and blog; English-only search misses entirely)

3. **Negative analogs prevent overconfidence** (Rogers "sampling only" in AGC trial; Taiyo Yuden 2019-2020 correction in Hirano trial)

4. **Precision discounts catch the multi-criteria gotcha** (target "X OR Y OR Z" needs sub-probability compounding, not naive single probability)

### Systematic limitations (both trials hit these)

1. **T1 confirmation of customer-supplier relationships in micro-cap Japanese/Korean names is unobtainable from open sources.** Both trials wall-hit at "is AGC really in M10 testing?" and "does Murata really buy from Hirano?" Mitigation: pair with paid-source research budget (logmi.jp, 化学工業日報, Smartkarma) to close 2-3 highest-value gaps per name.

2. **Base rate N is small (5-7) with high heterogeneity** for niche supplier-customer qualification cycles. Adjacent analogs help (semi-equipment vs TSMC capex; Harmonic Drive vs robotics) but reduce precision.

3. **Demand-environment shifts can break backward-looking analogs** (2018 MLCC cycle base rate under-models 2026 agentic-AI demand environment per user critique 2026-06-01). Adjustment required: explicit qualitative shift adjustment (e.g., +5-10% uplift) with (my model) hedge.

4. **Probability range across both trials: 22-38%** for 6-12 month proxy events. This appears appropriately calibrated for "non-consensus thesis confirmation within specific quarterly window" — too high (>80%) = consensus thesis, no asymmetry; too low (<10%) = too speculative.

### Calibration check (monthly audit)

Track resolution of trial predictions:
- AGC M10 qualification trial (resolved by H2 2026) — graded against actual public M10 supplier announcements
- Hirano Q1 FY2027 results (Aug 6, 2026) — graded against revenue / MLCC commentary / guidance criteria

If 0/2 trials resolve favorably → recalibrate base rate downward + interrogate framework. If 2/2 → framework promoted to standard rotation. If 1/2 → maintain with watchful audit.

---

## Comparison to Existing Harness Tools

| Tool | Use case | Output |
|---|---|---|
| B39 5-test | General asymmetry check | Bull/Base/Bear EV |
| Right-Side-of-Belka 5/5 | Structural-inflection check | 0-5 score |
| Principle #33 Layer 0-5 | Top-down CapEx → constraint → name | Tier S/A/B/C name selection |
| **Alt-data probabilistic prediction (this framework)** | **Replace "if/then" trigger conditionals with computed P + cascade** | **Probability + uncertainty band + position implication with Kelly math** |

The frameworks are complementary, not redundant. B39 / RSoB / #33 handle "should this be in my universe?" Alt-data probabilistic prediction handles "given the harness produces a trigger-conditional thesis, what's the actual probability and what's the sizing?"

---

## Worked Examples (canonical reference)

1. **AGC (5201.T) M10/Rubin Ultra trial 2026-06-01**: P = 22% ± 14%. Position revised from 0% WATCHLIST → 2% ENTER. Surfaced critical finding: AGC's "M10 testing participant" framing in facts.md was overstated (authoritative analyst sources name Shengyi + Taiwan Union, not AGC). File: `signals/cross-source-log/2026-06-01-agc-m10-alt-data-probability-trial.md`

2. **Hirano Tecseed (6245.T) MLCC order acceleration trial 2026-06-01**: P = 38% ± 16%. Position CONFIRMED at 1.0-1.5% initial → 2.5-3% phased target (liquidity-binding). Surfaced critical finding via Japanese-language search: 2018 backlog JPY 18B vs JPY 9B capacity = 2-year wait time (direct structural analog). File: `signals/cross-source-log/2026-06-01-hirano-mlcc-alt-data-probability-trial.md`

---

## Re-evaluation Trigger

- **Next audit**: 2026-06-24 monthly codification audit
- **Falsifier**: if 30 days pass with zero framework invocations on actionable decisions, mark as INERT and retire
- **Promotion criteria**: if 3+ trials run successfully (predictions resolved with INPUT/COMPUTATION/REASONING layer grading) → promote to standard rotation alongside B39 5-test
- **Refinement criteria**: incorporate user critique 2026-06-01 — demand-environment qualitative adjustment factor (e.g., agentic-AI premium vs pre-LLM cycles) needs codified rule-of-thumb
