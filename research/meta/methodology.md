# Methodology

**Last updated:** 2026-06-03 (added tiered framing for theses + frameworks; logged E1-E5 emergent thesis candidates per user 2026-06-03 vision)

## TL;DR

How analysis gets done in this system. Read this if you're unsure how to handle an unfamiliar request.

## Meta-First-Principle — the OS's mission

**Maximize the rate at which the OS converts unstructured AI-sector signals into defensible, falsifiable, investable conviction — earlier than consensus, sized for portfolio outcomes, calibrated through grading.**

Stripped further (user's own framing, 2026-05-20): *grow the portfolio by buying shares with high likelihood of going up — using the LLM's edge at multi-source pattern recognition to find them before consensus does.*

Every workflow, file, tag, and decision in this OS serves this principle. When in doubt about whether to do something, ask: "does this increase or decrease the rate at which signal becomes investable conviction?"

| Clause | Enforces |
|---|---|
| Maximize the RATE | Speed matters — slow insights become consensus before useful |
| Convert UNSTRUCTURED signals | News, transcripts, podcasts, brain dumps, screenshots — multi-source synthesis is the LLM edge |
| Into DEFENSIBLE conviction | I can explain why — not aggregating, reasoning |
| FALSIFIABLE | Has invalidation conditions (L1, L2, L3 + every thesis file) |
| INVESTABLE | Maps to specific names + sizing — not just intellectual |
| EARLIER THAN CONSENSUS | Recognition Stage 0–2 territory — timing alpha |
| SIZED FOR PORTFOLIO OUTCOMES | Conviction → position weight → P&L |
| CALIBRATED THROUGH GRADING | Lessons compound; biases get logged |

## Optimization tags (every task gets ≥1)

| Tag | Maps to principle clause |
|---|---|
| **AF** — Anti-fragility | Defensible conviction across futures |
| **BOT** — Bottleneck-of-tomorrow | Earlier than consensus (forward supply analysis) |
| **POS** — Portfolio coherence | Sized for portfolio outcomes |
| **CAL** — Calibration | Calibrated through grading |
| **INDP** — Independence | Defensible conviction + Earlier than consensus (no analyst aggregation) |
| **INFRA** — Harness infrastructure | Maximize the rate (the factory) |

## Division of Labor (who does what)

User said 2026-05-20: *"It's hard for me to evaluate what has to be on the to-do and what doesn't. I want you to manage that ideally."*

Explicit delegation of curation work. The roles:

| User responsibilities | Claude responsibilities |
|---|---|
| Bring signals from external world (news, podcasts, Bloomberg, articles, conversations, intuition) | Curate the to-do list: add, delete, prioritize, tag |
| Ask thesis questions on specific names ("give me your thesis on Rambus") | Build theses on demand using the methodology + frameworks |
| Provide intuition-driven layers on top of structural analyses | Provide the structural framing that intuition slots into |
| Self-doubt → flag potentially missed angles | Actively probe for gaps when self-doubt signal fires |
| Course-correct when I'm off | Recover, log the lesson, adapt |
| Final call on portfolio actions | Recommendation with reasoning |

Joint:
- What's worth investigating (user brings candidates, Claude evaluates fit-to-principle)
- Calibration via grading (Claude proposes, user validates / pushes back)

**Critical implication for me:** never ask "should I add this to todo?" When user mentions a name, surfaces a signal, or asks a question that creates follow-up work, just add it. Surface the addition in the response summary — user can push back if disagreement, but the default is action, not permission-seeking.

**Trivial vs material decisions:**
- Trivial (silent): adding a watchlist name, logging a weak signal, archiving a done item
- Material (surface): sizing recommendation, thesis tier change, exit signal, falsifier firing

## Two-Part GRADE Protocol

User flag 2026-05-21: *"Log the prediction outcome, but wait at least 24 hours to see the price action instead of just relying on post-market or pre-market trading."*

GRADE workflow splits into two parts with different timing:

### Part 1 — Fundamental grade (immediate when print drops)
- Resolution: as soon as official numbers are released (earnings press release, 8-K filing)
- Components: revenue / EPS / margins / segment breakdown / guide vs prediction
- Probability calibration on each component
- Lessons added to `predictions/lessons.md` if generalizable pattern emerged
- Outcome captured in `predictions/{date}-{ticker}-{event}-GRADE.md`

### Part 2 — Stock-reaction grade (T+24h minimum, ideally T+48h or weekly close)
- Resolution: NOT same-day. Wait at least one full regular-hours session post-print, ideally 2-3 sessions to let positioning + macro overlay settle
- Components: actual stock action vs implied move; whether the move corroborated or contradicted the fundamental grade
- Critically: SEPARATE noise (macro events, sector rotation, options unwind, profit-taking) from genuine fundamental-driven repricing
- Avoid using after-hours and pre-market as conclusive signals — thin liquidity, often reversed at the open

### Why the two-part split matters
- Fundamental grade tests the **analytical model**. Did my supply/demand/margin work map to reality?
- Stock-reaction grade tests **what the market thought**, which is a different question. A right prediction can be followed by a stock move in either direction depending on positioning, macro, and what was priced in.
- Conflating the two leads to wrong lessons. Per L2: a "stock fell despite beat" is NOT a thesis falsifier. But it IS information about market positioning that should be separately captured.

### Stock-reaction grade questions to answer at T+24h
1. Did the stock move in the direction the fundamental grade implied?
2. If yes — was the move larger or smaller than implied volatility had priced?
3. If no — what specific narrative caused the disconnect? (options unwind, profit-taking, macro overlay, hidden concern in the call)
4. Did intra-day reversal happen? (After-hours selloff often reverses at the open if the print was good and the after-hours was thin)
5. What does the move signal about market positioning entering the print? (heavily long → profit-taking; heavily short → squeeze)

### Update to existing predictions

Any prediction grade made BEFORE this protocol was formalized may have prematurely concluded on stock-reaction. Re-examine at T+24h+ and update the GRADE file with a "Stock-reaction grade (T+24h+)" section.

## The Token-Volume Filter (portfolio selection rule)

User said 2026-05-20: *"The companies we should hold should all be tied towards token consumption going up regardless of the cost of the token itself."*

This is a hard portfolio selection rule. A name qualifies for the portfolio only if its revenue/earnings benefit from token VOLUME growth, AGNOSTIC to per-token cost direction.

**Why it matters:** Per-token cost is in long-term structural decline (~280x in 2 years per [Oplexa](https://oplexa.com/ai-inference-cost-crisis-2026/), with Gartner forecasting another 90% drop by 2030). Names whose economics depend on per-token revenue (model providers selling token APIs) face this headwind. Names whose economics depend on aggregate compute consumed (memory, foundry, packaging, networking, power, test) benefit regardless.

**Filter application by layer:**

| Layer | Volume-agnostic? | Reasoning |
|---|---|---|
| HBM suppliers (SK Hynix, MU, Samsung) | ✓ YES | Memory consumed per inference; volume up = revenue up |
| Foundry (TSMC) | ✓ YES | Wafer demand scales with all chips |
| Advanced packaging (CoWoS) | ✓ YES | Same |
| Compute silicon (NVDA, AMD, AVGO, MRVL) | ✓ YES | Chips sold scale with volume |
| Networking (ANET, MRVL) | ✓ YES | Cluster scale-up needed |
| Power producers (VST, CEG, GEV, TLN) | ✓ YES | MW consumed per inference |
| Test/inspection (Camtek, FormFactor, Advantest) | ✓ YES | Every chip needs test |
| Substrate (Shin-Etsu, SUMCO, Ibiden) | ✓ YES | Every wafer needs substrate |
| EDA (CDNS, SNPS) | ✓ Mostly | Recurring licenses per design start |
| Observability (DDOG) | ✓ YES | Span/trace volume scales with tokens |
| Inference clouds (NBIS, CoreWeave) | **MIXED** | Volume up but per-token margin compresses as enterprise scales; depends on contract structure |
| Model providers (OpenAI, Anthropic) | ✗ NO | Per-token revenue directly exposed to cost compression |
| Vertical AI software (PLTR, NOW, MDB, SNOW) | ✓ Mostly | Subscription-priced; benefits from token enablement |

**Implication for portfolio construction:** prefer the YES column. Mixed-bucket names (inference clouds) require contract-structure analysis. The NO column (model providers) is for trading-thesis-only positions, not long-term portfolio.

This filter is in addition to (not replacement of) Anti-fragility scoring, the Duration × Magnitude × Pricing-Power × Recognition × Execution model, and Downstream-Supplier-Asymmetry. It's a binary gate at the top: if the name fails this filter, it doesn't enter the portfolio at all.

## "Non-default" verification discipline (corrects B14 weakness)

Before labeling any read as "non-default" or "what most analysts miss," empirically check what the market has actually priced. If the stock has already moved on the narrative I'm calling non-default, my read is just default in disguise.

Examples of correctness check:
- "Inference cloud is overlooked" — FAIL on this check: NBIS had rallied massively on its Q1 print, then DROPPED on competition concerns. Market HAS priced this thesis (in both directions).
- "Power is the binding constraint" — PARTIAL: VST/CEG have run; market knows. But specific names (TLN, GEV, smaller IPPs) may still be under-priced.
- "Custom Si fragmentation" — has moved (AVGO at $1.2T) — must look at downstream Level 3+ for actual non-default exposure.

When the "non-default read" is actually a refinement of consensus (not its inverse), say so. Be precise about WHAT is non-default — usually it's a specific implication or N-th order effect, not the headline framing.

## Forward Mix Probabilistic Model (refinement to Magnitude component)

User flag 2026-05-21: *"It can — what is the potential for that 37 to grow to 50, 60, 70 percent. Find the patterns that allow you to compute a probability for each of those patterns to then model the probabilistic outcome."*

The static-segment-mix analysis in valuation is incomplete. For any multi-segment company where one segment is growing materially faster than others, the FORWARD mix matters more than the current snapshot mix. A company at "37% AI today" can be at "60% AI in 3-5 years" through pure mix-shift mathematics if the growth differential sustains.

### The math

If segment A is X% of revenue today, growing at growth rate g_A, and the rest is (1-X)% growing at g_others:

```
Segment A share at year t = X(1+g_A)^t / [X(1+g_A)^t + (1-X)(1+g_others)^t]
```

Example: GLW Optical Communications today is 37% growing at 36% YoY; rest is 63% growing at ~5% blended (per `research/companies/GLW/facts.md`).

| Year | OC growth (g_A) | Others growth (g_o) | OC share |
|---|---|---|---|
| 0 (today) | — | — | 37% |
| 1 | 36% | 5% | 43% |
| 2 | 32% | 5% | 49% |
| 3 | 28% | 5% | 54% |
| 4 | 25% | 5% | 58% |
| 5 | 22% | 5% | 62% |

By year 5, OC is ~62% of revenue under base-case growth assumptions. The 100x P/E paid today for "37% AI" is increasingly justified as the denominator shifts.

### Probabilistic application

For each variable that drives the mix shift, assign probability bands:

**Example — GLW forward-mix scenarios:**

| Variable | Base case | Bull case | Bear case |
|---|---|---|---|
| OC growth rate sustainment | 30% YoY years 1-3, decelerating to 20% by year 5 (40% probability) | 35% sustained (25% probability) | <20% by year 2 (35% probability) |
| Display segment trajectory | Flat (50%) | +5% (20%) | -5% (30%) — TV cycle reverses |
| Automotive | Flat (50%) | +5% (25%) | -5% (25%) — EV slowdown |
| Specialty Materials | +5% (50%) | +10% (30%) — flagship mobile cycle | flat (20%) |
| Hemlock + Solar | Flat (50%) | +15% (25%) — T1-style IRA tailwind | -10% (25%) — policy reversal |

Combined probability-weighted forward OC share at year 5:
- Bull scenario (OC sustains 35%+, others flat-to-positive): probability ~15%; OC share ~68%
- Base scenario (OC 30%, others flat): probability ~50%; OC share ~62%
- Bear scenario (OC <25% by year 2, others flat-to-negative): probability ~35%; OC share ~52%

Expected forward OC share: 0.15 × 68% + 0.50 × 62% + 0.35 × 52% = ~60% by year 5.

### Implication for valuation

**Pay attention to the COMPOUND mix-shift, not just static snapshot.** A 100x P/E for "37% AI" is structurally different from 100x for "62% AI" — and at sustained growth differential, the company REACHES "62% AI" without further analyst action. This is mix-driven re-validation of multiple, not requiring multiple expansion.

This refines the Aschenbrenner-style "mix dilution" bear case: the bear case is right if OC growth DECELERATES; the bear case becomes wrong if OC sustains current growth even without OC accelerating further. Most likely outcome is between — partial validation, partial concern.

### How to apply this to other multi-segment names

When building a thesis on any company with:
- Multiple business segments
- One segment growing materially faster than others
- Static segment-mix used to attack or defend the valuation

ADD: forward-mix probabilistic model with scenarios over 3-5 years. Identify the 2-4 most important variables. Assign probability bands. Compute expected forward mix.

This is most applicable to: GLW (current), and prospectively any multi-segment industrial / specialty materials / diversified semi name where AI is a growing-but-not-yet-dominant segment.

## Source Reliability Framework

User flagged 2026-05-20: *"How reliable are [Motley Fool, StockTitan, etc.]? Look at their previous track record — what they wrote a couple months/quarters ago, did it materialize?"*

Not all citations are equal. Source reliability is a function of two things:
1. **The primary source itself** — what's the origin? (filing, earnings call, analyst report, social post)
2. **The transmission channel** — how is it being relayed? (the company, major press, aggregator, anonymous post)

### Reliability tiers

- **T1 Primary** — SEC filings, official company press releases, earnings call audio, regulatory disclosures. Source of truth.
- **T2 Primary-tier analysts + major financial press** — WSJ, Bloomberg, Reuters, FT, SemiAnalysis (Dylan Patel), Leopold Aschenbrenner. Documented expertise + accountability + editorial standards.
- **T3 Specialist trade press** — The Information, Stratechery, Digitimes, EE Times, Tom's Hardware. Reliable for technical specs; less for forecasts.
- **T4 Aggregators / SEO content** — Motley Fool, StockTitan, TipRanks, Simply Wall St, IBTimes, Yahoo Finance, most Seeking Alpha. Variable. Useful as transmission channels for T1 content; commodity for analysis.
- **T5 Unverified** — Anonymous Substacks, Twitter/X, Reddit, ghost blogs. Use only as signal candidates, never as evidence.

### The citation-chain rule

When citing, distinguish primary from transmission:
- "$1B 2026 projection per [Motley Fool transcript of VICR Q4 2025 call]" = T1 claim (CEO statement) via T4 channel — reliability is T1
- "Vicor stock +18.6% per IBTimes" = T4 claim (their reporting of price action; verifiable elsewhere) via T4 channel — reliability T3-T4
- "Stock price $304 per IBTimes" = T1 underlying (exchange data) via T4 channel; trivially verifiable
- "Analysis claim from BeyondSPX" = T4 analysis on T1 product data — should be re-verified at T1 if material

### Track-record audit

For any T2–T4 source we rely on repeatedly, build a track record in `research/meta/source-reliability.md`:
1. Pick 3–5 past specific claims (with dates)
2. Check what happened
3. Score materialization
4. Annotate source with track record + last update date

Over time the ledger calibrates source reliability. A source 8/10 on past Vicor-adjacent claims is more reliable than one at 3/10.

### Anti-pattern to watch

**Citing through an aggregator without checking the primary source.** When the primary source is a filing or earnings call, take 30 seconds to confirm the aggregator quoted it correctly (numbers transcribed right, context preserved). When the primary source is an analyst opinion, the aggregator can't validate it — must trace back to the analyst directly.

## Co-Adaptation Principle (user ↔ Claude)

### Input-channel value ranking (added 2026-06-11, per codification rule §1.3)

Empirical hit-rate of user-shared data points (week of 2026-06-05 → 06-11): **(1) T1 primary screenshots** (Bloomberg/Reuters terminal content unreachable directly) — highest absolute value, both instances produced thesis-grade cascades (InP→AXT/JX, SoftBank→ARM-overhang); **(2) user's own contrarian observations/corrections** — highest codification-per-word ratio (Mag7 debt correction, L24, the bypass-route question behind the 5-for-5 robotics dissection); **(3) niche non-English channels** (Korean insider tweet, booth photos) — became load-bearing ledger tiers; **(4) Twitter/aggregator items** — medium-high even when garbled (built the B40 3-type garble taxonomy); **(5) daily briefs** — ambient coverage with active staleness prior. Cost asymmetry favors user sharing liberally: verification is cheap, a missed InP-grade signal on a held name is not. Communicated to user 2026-06-11.

User said 2026-05-20: *"You have to learn how to interact with me just how I have to learn how to interact with you."*

The user-Claude interaction style itself evolves. The OS must capture what works.

Specific tracking:
- When user gives positive feedback on output format → note in this file under "user-comms preferences"
- When user pushes back on framing or terminology → adjust + log
- When user surfaces something I missed → log as a calibration gap in `biases-watchlist.md`
- When user explicitly says "stop, act" — observe what conversational state triggered that, adapt
- When user self-doubts ("am I missing something?") — that's a signal to actively probe for gaps, not just reassure

User is logically sharp but not technically deep. Self-doubts as default mode (positive trait — keeps the system humble). Wants concise output, TL;DR-first, structured.

## User-comms preferences (evolved)

- Always TL;DR first (1–2 lines, no jargon)
- Use workflow label so user knows the mode
- Tables for multi-name or multi-scenario comparison
- Tight (≤500 words default); ask permission before going longer
- Show reasoning, don't just conclude
- When user gives a brain-dump-style input, lead with: "Here's the pattern I extracted: [synthesis]." Then act — don't ask permission to confirm patterns (user 2026-05-20: "I'm always gonna give you brain dumps. Never expect something structured.")
- **Push back when the user's framing is wrong** — they explicitly delegated this. E.g., "exponential workload growth" is technically super-linear, not exponential. Refining the framing strengthens the analysis.
- **Modify the user's framing without asking** when it makes the analysis more agnostic / more correct. User 2026-05-20: "There's no need for me to tell them, but I'm gonna change this and that because that... in that sense, it makes more sense."
- When user self-doubts ("am I missing something?"), don't reassure — actively probe for gaps

## Downstream-Supplier-Asymmetry Principle — Refined: Default Deeper

**Refinement 2026-05-20 (user input):** Do NOT default to Level 2 names just because they're the first surfaced. Default to Level 3+ unless Level 2 has demonstrably better asymmetric setup (which is rare — Level 2 tends to be Stage 3+ already because the obvious-downstream connection is more easily seen).

**The walk should continue until:** the supplier is small enough, under-covered enough, or far enough downstream that consensus has NOT yet modeled the pull-through. The Vicor lesson: Level 2 was the wrong starting point — VICR's customer relationships were already contested. The asymmetric setup was deeper down (or in adjacent layers like substrate, EDA, test, materials).



User said 2026-05-20: *"What is always downstream… companies control narratives, but ultimately the earnings calls and the beats magnitude, the guidance magnitude, the operating margin increased magnitude, those are the ones that ultimately drive massive pumps and narrative changes."*

**Empirical N=5 validation cluster appended 2026-06-03 PM** (per `predictions/2026-06-03-AVGO-Q2FY26.md` bottoms-up cohort analysis):
- SCREEN Holdings 2026-06-03: rev -6.73% MISS + OP -9.7% YoY BUT margins 20.2% vs 18.8% forecast + FY27 +19.7% guide → **+17.94% day move**
- LITE Q3 FY26 (May 5): Rev +90% YoY but MUTED earnings-day reaction (+16% later on Nasdaq-100 inclusion, not earnings)
- COHR Q3 FY26 (May 6): Rev +21% YoY but -6.7% AH then +13.25% recovery — MUTED on beat
- Mitsubishi Electric Q4 FY26: EPS +62.4% beat → pre-AI-narrative rerating
- Sumitomo Electric FY26: rev +9.2% / earnings +90.7% / guide RAISED → **+11.4% on print**

## Principle #31 REFINEMENT — PRE-AI vs POST-AI narrative axis (added 2026-06-03 PM as CANDIDATE)

Per user 2026-06-03 PM observation: "Already-in-AI-narrative names have higher expectations; new-to-narrative pumps harder."

**Refines existing Principle #31 (Narrative-stage modifier) along NEW axis:**
- **Axis A** (existing): Stage 1-4 within established narrative
- **Axis B** (NEW CANDIDATE): PRE-categorized vs POST-categorized within AI investing taxonomy

**Pattern:**
- **Pre-categorized names** (semi-traditional names being rerated as AI exposure surfaces): SCREEN Holdings, Mitsubishi Electric, Sumitomo Electric — beat-and-pump harder; bigger relative re-rating because narrative not priced in
- **Already-AI-narrative names** (LITE, COHR, AVGO, NVDA): higher expectations bar; muted initial reaction on beats; upside CAPPED at lower magnitude per L14 framework; need explicit CATEGORY EVENT marker (new vintage / strategic relationship / metric reframe) to drive post-event leg

**N=5 empirical cluster supporting Axis B addition** (origin 2026-06-03 PM): per `predictions/2026-06-03-AVGO-Q2FY26.md` cohort table

**Promotion criterion:** N=2+ INDEPENDENT confirmation cases beyond this cluster → promote to VERIFIED-HIGH-CONFIDENCE per tiered framework (currently CANDIDATE)
**Retirement trigger:** if next 30 days show no clean PRE vs POST distinction on observed earnings reactions, relegate

**Cross-reference:** L14 framework (Stage 3-4 + CATEGORY EVENT → +25-40%) needs Axis B refinement — already-AI-narrative Stage 3-4 names cap upside at +10-20% per LITE/COHR empirical template, NOT pure +25-40% range.

## B16-style harness-recall miss flagged 2026-06-03 PM

I was about to codify L18 as NEW codification candidate (margins + guidance > revenue level) when this principle was ALREADY in this file from user's 2026-05-20 articulation. This is exactly the failure mode B16 (synthesis without cascade) catches at one tier — applied at the methodology-recall tier here. **Flag for monthly audit 2026-06-24:** harness-recall freshness check should include "grep existing principles + lessons for related framing" BEFORE codifying any new candidate. Candidate for principle #37 or refinement to Critical Rule #10.

---

When a major catalyst hits a megacap (e.g., Anthropic-Broadcom custom Si partnership pulling through to AVGO), the megacap response is *mostly already priced* — consensus has been modeling some version of the demand. The asymmetric trade lives 2–3 layers downstream in the supply chain.

The downstream-supplier-asymmetry setup has FOUR required conditions:

1. **Demand pull-through is mathematically certain.** If AVGO ships more custom Si, they MUST consume more of: foundry wafers (TSMC), advanced packaging (TSMC CoWoS-L → OSAT alternatives), HBM (SK Hynix/Samsung/Micron), substrate (Ibiden/Unimicron), test equipment (Advantest/Teradyne), probe cards (FormFactor), inspection (Camtek/Onto), power delivery (Vicor/MPS), EDA licenses (CDNS/SNPS). The math is non-negotiable.

2. **Coverage is sparse / consensus estimates not yet revised.** Recognition Stage 0–2 (per the recognition stage spectrum). Analyst models still based on prior-cycle assumptions; the demand pull-through has not yet been reflected in EPS estimates.

3. **Operating leverage is high.** Cost structure mostly fixed (R&D, fab tools, headcount). Incremental revenue flows disproportionately to operating margin. A 20% revenue surprise can produce a 40–60% EPS surprise.

4. **Smaller market cap** = the same dollars of incremental earnings drive a larger % move in the stock. A megacap absorbs $500M of incremental earnings without re-rating; a $3B-cap supplier with $500M of incremental earnings re-rates aggressively.

When all four conditions hold, the supplier's stock can move 25–50%+ on an earnings beat that the megacap might move 5% on.

**How to apply this principle:**

For every major thesis on a megacap (Anthropic, NVDA, MSFT, etc.), the OS must produce a "downstream beneficiaries" mapping:

- Level 1: direct suppliers (e.g., TSMC for AVGO custom Si)
- Level 2: suppliers to those suppliers (e.g., ASML for TSMC)
- Level 3: niche component / equipment / specialty providers (e.g., FormFactor probe cards for every new tape-out)

The named downstream candidates go into watchlist with explicit operating-leverage + coverage thinness commentary. The deep-research follows the chain to wherever the asymmetric setup actually lives, not just the obvious answer.

**This principle is in addition to (not replacement of) Time-to-X bypass-route thinking** — they're complementary lenses. Time-to-X asks "what's the workaround when the consensus solution fails?" Downstream-supplier-asymmetry asks "who benefits mathematically when the consensus winner wins?"

## The Duration × Magnitude × Pricing-Power × Recognition Stage × Execution Quality Model

For any name held or considered on a bottleneck-bypass thesis, the valuation work I'm responsible for is the modeling the user isn't equipped to do alone. The required output for every such name:

1. **Duration of the constraint** — how many months/quarters/years before the constraint resolves or is bypassed? (Not consensus duration — *my* model of when supply catches up to demand at this layer.)
2. **Magnitude of the constraint** — what is the addressable revenue this company captures while the constraint is binding? (Quantify: TAM at the bypass-layer × penetration this company can reach × pricing premium they can sustain.)
3. **Pricing power of the layer** — when the constraint binds, how much pricing flex does this company have? (High pricing power = the bypass route is genuinely scarce. Low = it's just an alternative supplier that has to compete on price.)
4. **Recognition stage** — where on the consensus-discovery curve is this name? Not "time to recognition" (which assumed a single phase) but a stage. Spectrum:
   - **Stage 0** — Pre-discovery. No analyst coverage. No narrative. Pure information asymmetry.
   - **Stage 1** — Primary-tier voices have it (Aschenbrenner, Patel, sophisticated allocators). Not mainstream. Multiple still depressed or normal.
   - **Stage 2** — Sell-side starts coverage. A few PTs out. Earnings calls mention it. Multiple beginning to expand.
   - **Stage 3** — Mainstream awareness. Broad investor narrative. Most institutionals own. Multiple expanded materially.
   - **Stage 4** — Fully priced. Multiple at extreme. Crowded. Asymmetric setup mostly gone.
   - **Stage 5** — Post-peak. Narrative fatigue. Multiple compresses even while thesis remains intact. Mean reversion risk.

Asymmetry lives at **Stage 0–2**. Trading at Stage 3–4 requires the thesis to actually deliver on outsized growth to keep up with the multiple — high execution risk. At Stage 5, even a correct thesis can lose money via multiple compression.

5. **Execution Quality** (added 2026-05-20 per user input) — qualitative scoring across:
   - **Moat type and durability** — what specifically defends the business? (network effects, switching costs, scale, IP, brand, regulatory). How deep is it?
   - **Management track record** — capital allocation discipline, transparency in communication, history of meeting/beating guidance.
   - **Technical innovation cadence** — does the company ship next-gen on time? Or does it slip while competitors catch up?
   - **Customer relationships** — design-win rate, customer concentration, recent wins/losses. The Vicor lesson: great tech + lost customer relationship at NVIDIA H100 = thesis broke.

Score Execution Quality on a 1–5 scale with rationale:
- 1: Documented execution failures (lost major design wins, missed guidance repeatedly, management turnover)
- 3: Average — execution adequate but not differentiated
- 5: Exceptional — repeatedly beats, technical leadership compounds, customer relationships sticky

Execution Quality acts as a **multiplier on confidence** in the other four components. A name with strong D×M×P×R but Execution Quality of 2 deserves heavy discount; same setup with Execution Quality of 5 deserves premium conviction. It's also a **gating filter** — names with Execution Quality ≤ 2 generally should not exit watchlist regardless of other strength.

These five components REPLACE trailing P/E as the valuation lens for emerging-demand stories. See B10 in biases-watchlist.md.

When I write or update a `companies/{TICKER}/thesis.md` for any bottleneck-bypass name, these five must be present and modeled, even if magnitude has wide error bars and qualitative components require judgment calls.

## Portfolio coherence rule

Every position in `portfolio/holdings.md` MUST have a defendable thesis file in `companies/{TICKER}/thesis.md`. A position without one is not a portfolio position — it's an untested bet inherited from someone else's call. The OS will surface these as untested positions on every portfolio review until they're either (a) given a thesis or (b) sold.

Third-party recommendations (Saxo Research, sell-side, paid newsletters, sovereign-source picks like Aschenbrenner) are SIGNALS, not theses. They surface a name for investigation; they do not constitute a defendable position. The OS must independently reconstruct WHY a name is held before counting it as understood.

## Trusted primary-tier sources

When these voices comment on the AI sector, treat as primary-tier (high credibility) for triangulation:

- **Leopold Aschenbrenner** — Situational Awareness, AGI/compute scaling, frontier model economics. Track his public commentary.
- **Dylan Patel (SemiAnalysis)** — supply chain, packaging, networking, chip-level analysis. Source for most specific bottleneck claims.

Their commentary counts as one source for triangulation. Two of them agreeing on something + one other primary source = high-confidence triangulated signal.

## The Organizing Principle of the OS

User's framing (2026-05-20): *"For me, it's what can I remember. For you, it's what should I remember, what is important."*

This is the system's mission statement. My job is not to recall in the moment — it's to curate "what should be remembered" so future sessions (mine or any future Claude) and future portfolio decisions have the substrate they need.

Implication for every interaction:
- Filter constantly. Is this insight worth permanent capture? If yes — file it (in lessons, biases, wiki, thesis, signals, etc.). If no — let it pass.
- The files ARE the institutional memory. Every commit is a memory operation.
- Conversational reasoning is ephemeral. File-based reasoning is durable. Lean toward durability for anything that matters beyond this turn.
- User explicitly delegates judgment about what's important to me. That trust requires consistent curation discipline.

## Core principles

1. **Bottoms-up before outside view.** Build a unit model from supply, capacity, ASP, mix. Then compare to consensus. NEVER start with sell-side and adjust. **Hook enforcement (added 2026-05-23):** `~/.claude/bottoms-up-hook.py` blocks any predictive output (WORKFLOW: PREDICT, "I predict/forecast", "will reach $X", "X% CAGR", forward year/quarter) that lacks bottoms-up indicators (capacity gate, BOM count, per-unit math, explicit multiplication, supply-side math) or an explicit hedge. Catches bias B23.
2. **N-th order > 1st order.** The investable insight is usually 2nd or 3rd order, not the obvious direct effect. Always TRACE before concluding. **Hook enforcement (added 2026-05-23):** `~/.claude/nth-order-cascade-hook.py` blocks analytical conclusions (causal verb + thesis/portfolio/scenario/Tier anchor, OR any WORKFLOW label) that lack N-th order markers (1st/2nd/3rd/4th order, knock-on, cascade, downstream effect, P>80% / P~60% / P~40% / P~20%). Catches bias B21.
3. **Multiple futures simultaneously.** Hold ≥3 scenarios at once. Names that win in many are higher-conviction than names that win in the most-likely one.
4. **Bottleneck of tomorrow > consensus pinch of today.** Trade on the constraint becoming binding in 12–24 months, not the one already in the news.
5. **Anti-fragility > optimization.** Prefer picks-and-shovels that win across futures over names that need a specific future to be right. **Hook enforcement (added 2026-05-23):** `~/.claude/antifragility-mn-hook.py` blocks full thesis blocks (P(bull) + P(bear) + Tier/Position target all present) that omit an explicit M/N anti-fragility score. Narrow trigger by user choice — only fires on full Conviction Format outputs, not short tier mentions. Catches bias B24.
6. **Triangulate weak signals — via ORTHOGONAL sources, not redundant ones.** A single source is noise. Three sources within 90 days is signal — but ONLY if the three come from different data-generation processes (e.g., earnings call + supply-chain disclosure + regulatory filing). Three trade-press articles citing the same primary source are redundant, not triangulated. Refined 2026-05-24 per principle #23 (claim-level verification). See `biases-watchlist.md` B25 (source-tracking-over-claim-verification).
7. **Falsifiable theses only.** Every thesis has written invalidation conditions. If a condition fires, the thesis changes.
8. **Grade everything.** Every forward call gets logged + graded. Lessons accumulate.
9. **Bypass-route thinking.** For any binding constraint, the consensus solution rarely contains the edge. Ask: "What do consumers do when the consensus solution fails their actual sensitivity?" The answer surfaces non-consensus names. See the **Time-to-X framework** below. **Hook enforcement (added 2026-05-23):** `~/.claude/bypass-route-hook.py` blocks discussions of binding constraints (binding constraint, bottleneck, supply tight/gap, shortage, capacity-limited/constrained, Time-to-X) that lack bypass-route language (substitution, second-source, alternative supplier, qualification, TTQ, "what consumers do when", workaround). Catches bias B22.
10. **Sell only on falsification.** Macro noise (wars, pullbacks, headlines) is NOT a sell signal. Only a fired falsifier in the thesis is. See lesson L2 and bias B9.
11. **No fabricated numbers.** Every numerical claim must be cited inline or explicitly hedged. Enforced by `~/.claude/anti-fabrication-hook.py`. See CLAUDE.md rule #7.
12. **Default BELOW revenue mix on every component-level thesis.** User framing 2026-05-21: *"That's quite superficial, and that's what a junior analyst would do. You're not a junior analyst. You can dig into layers that even a human would take a while to find."* For any held or candidate name where the value driver is a physical component (MLCCs, HBM stacks, MOCVD reactors, InP wafers, PMIC count, fiber meters, substrate layers, optical engines, cooling modules), revenue-mix analysis is the cover sheet — not the analysis. Required output layer: bottoms-up BOM count per board/server/rack, current-gen vs next-gen unit-count delta, supplier capacity-response data, full cross-stack cascade. See B15 in `biases-watchlist.md` (revenue-mix-anchoring) and Workflow 8 (DEEP-DIG) in CLAUDE.md. The user's MLCC SemiAnalysis-style image (2026-05-21) is the calibration example: 6,500 MLCCs per GB200 board → ~12,000 per Rubin board (per the image you shared) is the kind of seed-number that anchors a real thesis. Revenue mix can't generate insights of that shape.

13. **First-principles + layered + extrapolation discipline on every wiki / sector mapping.** User framing 2026-05-21: *"Everything should start from first principles, and then you can work your way down the stack... building a base of sublayer understanding, so layered understanding of the most critical components within the AI sector, and then using first principle to extrapolate is sort of what I feel this is where the biggest ROI sits in right now."* For every wiki primer or sector-mapping artifact, the structure must be: (a) **first principles** — what physics/economics/topology defines this layer? (b) **sub-layer decomposition** — at least 5-10 named sub-layers with suppliers + generational cadence, (c) **generational deltas** — current → next-gen unit-count multipliers, (d) **extrapolations** — at least 5 patterns derivable from first principles that consensus hasn't fully modeled (the OS's actual edge), (e) **cross-stack cascade** — every named ticker with direction + order, (f) **falsifiers** — when the extrapolations break. The networking primer 2026-05-21 (`wiki/networking-primer.md`) is the calibration example: ~8 sub-layers + 10 extrapolations. Wikis that lack the extrapolation section are incomplete — that's where the non-consensus edge lives. See also Workflow 8 (DEEP-DIG) which applies the same depth at component level rather than layer level.

14. **Question user inputs — they are signals to verify, not gospel.** User framing 2026-05-21: *"Everything I say is unverified assumptions. Right? Like, you have to question what I say as well. You can't just blindly trust me just like you can't blindly trust yourself as well."* The user is explicitly delegating critical-thinking responsibility — they want me to push back, verify factual claims, refine framings that are off. Default behavior on user input:
    - **Extract the pattern** (per B7 brain-dump-literal-read correction)
    - **Verify factual claims** (per `meta/source-reliability.md` framework — user is a T3/T4 source most of the time, sometimes T2 when relaying primary content)
    - **Push back on framing** when it's off (e.g., "exponential workload growth" is technically super-linear not exponential — refine without asking permission per user-comms preference)
    - **Hold opposing viewpoints** the user surfaces alongside my own analysis — the multi-scenario discipline applies to USER INPUTS too, not just market scenarios
    - **Treat user claims as B17-eligible** (see `biases-watchlist.md`) — I have a documented tendency toward user-deference that's the inverse of B7; correcting it
    
    Concrete operational rule: when the user makes a factual or directional claim, run it through the same source-validity check I'd run on any signal. If they cite a specific number ("memory prices are up 50%"), verify against research/ files OR explicit web search before integrating. If they make a directional claim that contradicts existing triangulated signals, flag the contradiction — don't auto-adopt.

15. **Two-handed thinking — the meta-investor skill.** User framing 2026-05-21: *"The most... investors are not just those that are really good at digging into one company, but that can then... hold multiple thoughts... hold opposing viewpoints at the same time. Right? Well, obviously, favoring one, but being able to hold two thoughts at the same time is a sign of intelligence to some extent."* This is already encoded structurally via the scenarios.md multi-future discipline + Forward Mix Probabilistic Model + anti-fragility scoring across scenarios, but worth surfacing as a first-principle meta-skill. Operational implications:
    - Every thesis must articulate both bull AND bear case with explicit probabilities (already standard in `companies/{TICKER}/thesis.md` templates)
    - Every synthesis artifact must surface contrary views (e.g., `patel-vs-aschenbrenner-thesis-comparison.md` holds both views; doesn't collapse to one)
    - On any new signal, surface 2 reads: default-consensus AND non-default (per B14 correction in biases-watchlist)
    - On portfolio decisions, the OS preserves both "stay the course" AND "trim/exit" arguments rather than collapsing to recommendation prematurely
    - User favors one view at any time but the OS should retain both — the held view is logged in `sector/where-we-are.md`, the opposing view stays live in scenarios.md or counter-signal files

16. **Evaluation matrix v2 — 5-dimension framework (refined per user input 2026-05-21).** User refinement: *"anti-fragility to me means how relevant are they going to be within the AI sector for the foreseeable future... very low chance of being displaced or technical breakthrough displacing them"* + *"competitive landscape — how good are they compared to their competitors, how much market share do they have"* + *"how mismodeled are they compared to what current analysts are saying about the company"* + *"don't just because Patel has it or because Aschenbrenner has it — if you can compute and defend your position based on falsifiable patterns, then it doesn't matter what they say. At the end of the day, your opinion matters more. These are signals we can use, but that's about it."*

   **The 5 dimensions** (replaces / refines the prior D×M×P×R×E + anti-fragility-as-M/N approach):

   - **D1. Structural relevance & displacement risk** — how embedded in AI value chain for the foreseeable 3-5+ years. What technical breakthrough or substitution would make them irrelevant? Physical-law / architectural barriers that protect them. (Reframes "anti-fragility" — scenarios are still useful but displacement risk is the more concrete test.)

   - **D2. Chokepoint severity (if applicable)** — magnitude of constraint they sit on (TAM at risk × penetration × pricing premium); duration of constraint (until supply catches up or bypass emerges); pricing power when constraint binds. If NOT a chokepoint name, this dimension is N/A — evaluate via D3 instead.

   **Sub-component D2.5: Proximity to the binding bottleneck** (added 2026-05-22 per user input from prior non-agentic Claude session April 2026). User framing: *"The closer a company is to the bottleneck, the bigger the pricing power and the better the returns."*
   
   Even for non-chokepoint names, proximity to the binding constraint in the value chain matters. A company can be NEAR a bottleneck without BEING the bottleneck — and the closer, the more pricing power flows to them.
   
   **Proximity scoring** (count layers of separation from the nearest binding constraint):
   - **Layer 0 (AT the bottleneck):** the company IS the constraint (HYNIX/Samsung/Micron AT HBM bottleneck; TSMC AT advanced packaging bottleneck)
   - **Layer 1 (ONE layer from bottleneck):** direct supplier to the constraint OR direct manufacturing partner (TSEM as silicon photonics foundry for optical chips; HBM die testers like Advantest)
   - **Layer 2 (TWO layers):** sub-supplier or material provider (AXTI as InP substrate for optical chips)
   - **Layer 3+ (THREE+ layers):** equipment maker or material provider for the sub-supplier (AIXTRON MOCVD equipment for InP wafer fabs)
   
   **Trade-off (the two-handed nature):**
   - **Closer = higher pricing power per unit**, BUT higher concentration risk if the SPECIFIC bottleneck moves
   - **Further = lower pricing power per unit**, BUT broader optionality across multiple bottlenecks (equipment makers benefit regardless of which downstream bottleneck binds)
   
   **Examples (calibration):**
   - HYNIX = Layer 0 at HBM bottleneck = strongest pricing power on HBM (verified: "DRAM will double or triple" per Patel; HBM4 ASP +67%)
   - TSEM = Layer 1 at silicon photonics bottleneck = strong pricing power ($1.3B contracts + $290M prepayments)
   - AXTI = Layer 2 at optical bottleneck = real pricing power but capped at substrate-layer margins (vs the optical chip layer above)
   - AIXTRON = Layer 3 at MOCVD bottleneck = broader optionality (benefits from optical AND other compound semi cycles) but per-unit pricing power lower
   - **Important nuance:** a company can be Layer 0 at ONE bottleneck and Layer 2 at another. ALAB is Layer 0 at the interconnect-protocol bottleneck and Layer 1-2 at the broader optical-decoupling-architecture scenario.

   - **D3. Competitive position** — elevated as its own dimension (previously buried inside Execution Quality). Market share at relevant sub-segments; moat depth (IP, scale, customer lock-in, switching costs, network effects); named competitors + where each wins/loses; customer relationships (renewal rates, design-win track record, concentration risk).

   - **D4. Mismodeling vs consensus + rerating-arc position** — refines Recognition Stage AND adds the cyclical→structural rerating arc. Includes: (a) Recognition Stage (0-5) on consensus-discovery curve; (b) specific beats-vs-consensus magnitude and frequency; (c) forward earnings revision asymmetry; (d) sandbag-vs-actual pattern per L4 lesson; (e) **rerating-arc position** (see below).

   - **D5. Independent view** — explicit per user instruction. My own analysis grounded in first principles + BOM-level + bypass-route thinking; cross-source (Patel, Aschenbrenner, sell-side, channel checks) treated as SIGNALS not verdicts; where I agree = confirmation; where I diverge = explicit reasoning grounded in falsifiable patterns I can defend; what I think analysts are missing specifically.

   **Cyclical→Structural rerating arc** (added 2026-05-21 per user input). User framing: *"Every company that is rerating, that is essentially moving from a cyclical company to a structural company, every one of those companies initially only had let's say one customer. One hyperscaler. So who's to say that they're not gonna catch more hyperscaler contracts... how fast has the AI segment grown in percentage of their total revenue. And how much more can it grow, and what is the likelihood that they're gonna catch other hyperscaler clients or just any other AI focused clients."*

   This is a TRAJECTORY framework that catches what static-snapshot evaluation misses. Investors who recognize a company early on the arc capture massive returns; those who wait for "proven structural" miss the run. The pattern has played out at Bloom Energy, Lumentum, Coherent, Vertiv, Murata, AXTI, AppliedDigital/IREN/CORZ.

   **Arc states** (assess every component-driven AI candidate):
   - **Pre-arc:** pure cyclical, no AI signal yet (e.g., legacy semi, legacy energy). No rerating done.
   - **Anchor signal:** first major hyperscaler/AI customer announced. Initial 50-100% rerating typically follows. Analysts STILL modeling as cyclical with AI as bonus. (STM post-Feb 2026 AWS deal, currently)
   - **Mid-arc:** 2-3 hyperscaler customers, AI segment 15-30% of revenue, multiple expanding but analysts still chasing. (Bloom Energy currently per `companies/BE/thesis.md`)
   - **Late-arc:** 4+ customers, AI segment >30% of revenue, multiple peaked, analysts now front-running fundamentals. (Lumentum/Coherent currently — fully rerated.)
   - **Post-arc:** structurally rerated, no further arc upside (the cyclical→structural transition complete).

   **Variables to compute per name:**
   - AI segment growth rate vs total revenue growth rate (gap = structural shift speed)
   - AI segment as % of total revenue today vs 12mo prior (trajectory slope)
   - Probability of additional hyperscaler / AI customer wins in next 18-24 months (with reasoning)
   - Distance from "Anchor signal" to "Late-arc" — typically 24-36 months for pure-play AI; longer for diversified-semi

   **Why this matters:** Static-snapshot evaluation collapses the trajectory into a point estimate. The mismodeling-vs-consensus rerating play lives in the TRAJECTORY, not the snapshot. A company at "Anchor signal" with high probability of additional wins has MORE upside than a static multiple suggests, because the rerating completes through MULTIPLE legs, not just the first 50-100%.

   **Binary gate unchanged:** Token-Volume Filter must PASS before scoring.

   **Per-name output structure** (under this matrix):
   - TVF gate (pass/fail)
   - Score across D1-D5 with reasoning, including rerating-arc position in D4
   - Two-handed read (bull + bear, neither suppressed)
   - Falsifiers — firing vs intact
   - Independent view: explicit divergence from consensus where applicable
   - Tier/sizing — left out by default; only added when explicitly requested

   **Independent-view discipline (D5 elaborated):** Per user 2026-05-21: *"I want you to develop your own that you can borrow if you can verify and validate their own statements... your opinion matters more."* Cross-source voices (Patel = supply-side T2, Aschenbrenner = demand-side T2, sell-side ratings, channel-check from less-famous CEOs) are signal candidates not conclusions. The OS's value comes from synthesizing them into a defensible independent view with falsifiable patterns, not aggregating them into consensus.

17. **Cross-vertical analysis — the LLM edge (mandatory before D1-D5 scoring).** User framing 2026-05-21: *"Were your abilities supersede a human is where you can cross reference across multiple different verticals or adjacent market data that another analyst might not look at, either to falsify or defy an acute condition... we have to build a harness or a ledger that allows you to analyze space within a broader context."*

   The trap: defaulting to fast-but-mediocre traditional-analyst isolated analysis (looking at one company through one lens). My LLM edge is being able to hold MULTIPLE adjacent contexts simultaneously and find non-obvious patterns. This must be FORCED into every evaluation, not optional.

   **The 10-vector cross-reference checklist** (apply to EVERY company before D1-D5 scoring):

   1. **Layer-above signal** — what does the layer ABOVE this company say? (customers' commentary, customers' capex, customers' competing supplier decisions)
   2. **Layer-below signal** — what does the layer BELOW this company say? (suppliers' capacity, suppliers' constraints, input costs)
   3. **Same-layer competitor signals** — what are direct competitors doing/saying that informs market dynamics?
   4. **End-market cycle position** — auto cycle, consumer cycle, industrial cycle, semi capex cycle, enterprise IT cycle — where are we in each that this company touches?
   5. **Geographic / FX exposure** — currency trajectory, tariffs, trade dynamics, sovereign risk
   6. **Materials / commodity exposure** — silver, gold, indium, copper, rare earths, specialty gases, etc.
   7. **Customer's customer (second-order)** — what does the customer's CUSTOMER need? Demand chain visibility 2 hops out.
   8. **Substitute technology trajectory** — what could replace this company's products in 3-5 years?
   9. **Regulatory environment** — export controls, antitrust, environmental, trade policy specifically affecting this name
   10. **Cross-portfolio overlap** — what other names in the portfolio touch the same layers; what's the diversification value?

   **Required output:** Before D1-D5 scoring, surface at least 5 of these 10 vectors with specific findings that affect the thesis. Mark the vectors that don't apply as N/A with reasoning. The output is a brief checklist that gates the formal evaluation.

   **Why this matters:** any one of these vectors could surface a pattern that materially changes the thesis. A human analyst typically picks 1-2 to investigate per name. I should be doing 5-10 in parallel because that's my comparative advantage. Skipping this step IS the trap — fast-but-mediocre traditional-analyst-isolated analysis.

   **Calibration example (STM, 2026-05-21):** Initial evaluation looked at STM in isolation (AWS deal + multiple + competitors at one layer). Missed: CPO adoption triangulation across Broadcom Tomahawk 6 + NVDA Spectrum-X (drives demand for STM PIC100 even without additional STM customer wins); EUR/USD currency exposure; Sanan SiC JV partner's GaN positioning (could compress STM SiC bet); auto cycle / EV slowdown exposure as a drag; cross-portfolio overlap with held AXTI (InP substrates upstream of STM PIC100). Re-applied cross-references after user correction surfaced material upside (CPO triangulation) and material risk (GaN substitution + auto cycle) that initial isolated analysis missed.

18. **Multi-stage worldview build — the real output, not aggregated consensus.** User framing 2026-05-21: *"You have to infer and find patterns that allow you to compute your own view of how AI is gonna unfold, what that means, and where the puck is gonna go next, which essentially [means] finding the companies that have the highest optimization from a risk to share price increase perspective. Only then can you start valuing your own output and your own reasoning instead of just creating a aggregation of analyst opinions."*

   The OS's actual deliverable is not per-name analysis — it's MY DEFENSIBLE INDEPENDENT WORLDVIEW with companies mapped against it. The portfolio recommendation falls out of the mapping, not out of summing up analyst opinions.

   **The 4-phase build:**

   **Phase 1 — Bottom-up per-company evaluation (current phase, 2026-05-21).** Walk every name in the portfolio + relevant candidates through the full framework: 10-vector cross-reference (principle #17) → D1-D5 scoring (principle #16, including rerating-arc position) → two-handed read → falsifier status → cross-portfolio implications. Each name's evaluation lives in `companies/{TICKER}/thesis.md`. Output: every position has a current, defendable, cross-referenced thesis.

   **Phase 2 — Worldview synthesis.** Aggregate the bottom-up evidence into a computed view of:
   - **Today's binding constraints** (already partially in `sector/bottlenecks.md`): the longest-lasting + most-severe constraints binding AI deployment right now. Each constraint quantified (severity × duration × what's binding).
   - **Tomorrow's binding constraints** (forward 12-36 months): which constraint shifts from current to next-binding, with reasoning grounded in physical limits + supply chain math + capacity ramps. This is BOTTLENECK-FORECAST workflow applied at maximum depth.
   - **The arc of AI unfolding** — sequence of constraints binding and resolving across 18-36 months. Specific dates / quarters where transitions happen.
   - **Non-consensus patterns** — what most analysts are missing about the constraint sequence, with falsifiable tests.
   Output lives in `sector/where-we-are.md` (current synthesis) + `sector/where-im-going.md` (forward worldview) + `sector/bottlenecks.md` (constraint inventory).

   **Phase 3 — Map companies against the worldview.** Each company scored against:
   - Which binding constraint(s) they benefit from (today + tomorrow)
   - Magnitude of the asymmetric setup (small / medium / large)
   - Recognition stage on the rerating arc
   - Cross-vertical positioning per principle #17
   - Time to thesis playing out
   Output: ranked list of names by risk-adjusted share-price-increase probability. Lives in `portfolio/recommendations.md` updated with the ranked-mapping.

   **Phase 4 — My-view conclusions + portfolio actions.** Synthesize Phases 1-3 into:
   - Which positions to hold / add / trim / exit (driven by mapping, not analyst opinion)
   - Which candidate names to enter (highest-asymmetry from Phase 3)
   - Sizing rationale derived from mapping conviction × position-cap discipline
   - Explicit acknowledgment of where my view diverges from consensus, with falsifiable tests
   Output: updated `portfolio/holdings.md` target weights + `portfolio/recommendations.md` action set.

   **Why this matters:** the framework principles #12-17 are necessary but not sufficient. Per-name analysis without worldview synthesis is sophisticated isolated analysis — still trapped in the traditional-analyst mode the user flagged. The OS's actual edge requires Phases 2-4 to translate per-name work into a defensible independent worldview.

   **Process discipline:** Phase 1 must complete (all positions + key candidates evaluated under new framework) before Phase 2 synthesis begins. Phase 2 must complete (worldview computed) before Phase 3 mapping begins. Phase 3 must complete before Phase 4 portfolio actions. Skipping phases collapses the OS back to traditional-analyst-aggregation mode.

   **Current state 2026-05-21:** Phase 1 in progress — STM evaluated under new framework. Remaining held positions: HYNIX (deferred by user), MURATA, GLW, TE, AXTI, NOW, DDOG, SNDK (deferred by user), PURR, TSEM. Plus candidate names. Estimated completion of Phase 1: 1-3 more sessions depending on depth per name.

19. **Dual-portfolio construction — Structural Safety core + Asymmetric Upside satellite.** User framing 2026-05-22: *"You want to have one side of your portfolio with structural safety that has the biggest chance of compounding all the time. And then you have, like, another side of your portfolio that could be a... the asymmetric upside. Right? They're not mutually exclusive."*

   Portfolio construction is NOT a single optimization. It's two parallel optimizations with different time horizons + risk profiles + sizing.

   **Portfolio A — Structural Safety core:**
   - **Time horizon:** 6-18 months (sometimes longer)
   - **Sizing:** larger positions (8-15% typical)
   - **Selection criteria:** highest moat-hardness, lowest displacement risk, durable across multiple scenarios, multi-bottleneck positioning OK at Layer 1-2 (broader optionality)
   - **Goal:** compounding via structural durability; downside-protection priority
   - **Framework lens:** D1 + D3 weighted heavily; D2 secondary
   - **Examples in current portfolio:** HYNIX (Layer 0 HBM oligopoly), MURATA (84% MLCC duopoly), NOW (workflow moat unassailable)

   **Portfolio B — Asymmetric Upside satellite:**
   - **Time horizon:** 6-12 months (sometimes 6-18)
   - **Sizing:** smaller positions (2-5% typical)
   - **Selection criteria:** Layer-0 bottleneck-proximity, high-magnitude binding constraint, mid-arc rerating, willing to accept higher concentration risk
   - **Goal:** asymmetric upside; higher variance acceptable
   - **Framework lens:** D2 + D2.5 + D4 weighted heavily
   - **Examples surfaced this session:** AXTI (Layer 2 InP, with trim recommendation due to Stage 4 risk), ALAB candidate (Layer 0 multi-bottleneck with concentration risk), AVGO candidate

   **The two are not mutually exclusive — they coexist in the same portfolio with different sizing discipline.**

   **Risk-profile sizing rule:** bigger positions go to Portfolio A (structural safety); smaller positions go to Portfolio B (asymmetric upside). This is typical risk-profile management.

   **Per-name evaluation produces a CATEGORY ASSIGNMENT** in addition to D1-D5 scoring. Each name gets a primary category (Structural Safety OR Asymmetric Upside) + sometimes a secondary if the name straddles. Example: AVGO is primarily Asymmetric Upside (custom-Si fragmentation play) but has Structural Safety attributes (networking moat).

   **Combination-play preference (user 2026-05-22):** names that combine multiple AI thesis vectors (Sovereign AI × Agentic AI × Token-Volume × Geopolitical Diversifier) are preferred when found. Examples: PLTR (sovereign + agentic + government), NOW (agentic + workflow + sovereign-government FedRAMP), DDOG (agentic + observability + workload-amplifier).

   **CPU exposure preference (user 2026-05-22):** *"CPU is the body of the agent, GPU is the brain. Body does most of the things."* The portfolio currently lacks pure-play CPU exposure. Surface CPU candidates as Phase 3 mapping output. Top candidates: AMD (EPYC), ARM Holdings, NVDA Vera CPU exposure (via NVDA position, currently 0).

   **Geographic diversification framework (user 2026-05-22):**
   - US carries premium (largest market, strongest engineering ecosystem in software/AI design)
   - Europe = lower geopolitical risk (ASML, AIXTRON, STM partially)
   - Japan = engineering excellence, less geo risk (Murata, TDK, Advantest, Tokyo Electron)
   - Taiwan = best engineering on advanced semi but Taiwan-invasion risk priced "everything tanks anyway" — so don't price separately
   - Korea = HBM + memory cycle exposure (Hynix, Samsung)
   - Geographic spread is a FEATURE, not just a risk-mitigation factor

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

20. **Segment-decomposition discipline — never anchor on blended total when segments diverge.** User correction 2026-05-22 after Rigaku thesis: *"if a business has multiple different revenue streams. If one is declining but one is growing at an insane pace or at a accelerated pace, as in it doesn't matter how much they're losing on the other side, if the other one is substituting for that, especially if it's AI correlated and especially if it is agentic AI workload related, you need to fix that in how you currently conduct research, the weighing on too much operating loss on one side compared to the other one."*

   The bias being corrected: when total-company operating numbers are in decline (revenue down, OP compressed, net profit collapsed) and one segment is growing fast (especially AI/agentic-correlated), my framing has tendency to anchor on the blended headline decline and dismiss the segment-level wins. **This is wrong.** The substitution rate matters more than the blended total.

   **Mandatory discipline for multi-segment companies:**

   For ANY company with >1 distinct revenue segment:
   1. **Decompose revenue by segment FIRST** — do not lead with blended-total revenue or operating profit
   2. **Identify AI/agentic-correlated segment(s)** and their growth rate explicitly
   3. **Identify declining segments** and their drag magnitude
   4. **Compute substitution rate:** at what pace does the AI segment need to grow to offset the declining segments and drive total-company positive?
   5. **Compare AI-segment trajectory to total-company trajectory** — if AI is materially faster, the bull thesis can live in AI segment regardless of company total
   6. **Operating losses in declining segments are acceptable IF** AI-segment growth substitutes the gap (with margin trajectory check)
   7. **Lead with segment-level findings, not total-company headlines**

   **The mismodeling opportunity:** consensus often blends company total into a single multiple. If AI segment becomes majority of revenue + earnings over 24-36 months, the blended multiple structurally re-rates upward via SOTP (Sum-of-the-Parts) — even without total-company growth acceleration. Names where this dynamic is in play: MURATA (MLCC accelerating + SAW filter declining per `companies/MURATA/thesis.md`), Rigaku (semi/metrology winning customers + scientific instruments dragging per `companies/RIGAKU/thesis.md`), GLW (Optical Communications growing 36% + Display flat per `companies/GLW/thesis.md`), TE/STM/others.

   **What this changes operationally:**
   - Per-name evaluation output (the 10-vector cross-reference + D1-D5) must EXPLICITLY surface segment decomposition when applicable
   - Tier classification (Tier 1 / Tier 2 / Tier 3) cannot be assigned on blended total when segments diverge meaningfully
   - The bull thesis lives in the AI segment regardless of blended decline IF substitution rate is favorable
   - See B18 (operating-decline anchoring, segment-blind bias) in `biases-watchlist.md`

   **Calibration example (Rigaku, 2026-05-22):** Initial deep dive classified Rigaku as Tier 3 based on Q1 FY26 -13% revenue / -78% OP / -83% net profit. User correction revealed: semiconductor segment "above expectations" + two customers already won + deployment underway = bull thesis partially materializing. Corrected tier: Tier 2/3 boundary. Sizing: 1-2% range (not 1% max as over-corrected framing suggested). The error was anchoring on blended total instead of leading with segment-level evidence.

21. **Time-to-X signals as primary analytical dimension — verified, not anchored on training data.** User correction 2026-05-22: *"You even said this in your secondary analysis, where you were saying, this is unusual in semi metrology where qualification cycles typically run twelve to twenty four months. And in this instance, it happened way faster. Right? So you know that it is unusual, and you know the cycles typically went twelve to twenty four month. Well, first of all, did you verify that claim, twelve to twenty four month? Was that just, like, free training data knowledge? Right? So you know the one side of how long it takes, but then you did not look at the right place to see if there was a signal with, okay, Jesus, the qualification time is eighty percent faster than most. Like, that is a valid signal."*

   **The bias being corrected:** when I cite an industry-norm baseline (e.g., "qualification cycles typically run 12-24 months") I anchor on that number as if it's verified, when in reality it's often training-data generalization. AND when a company moves materially faster than my anchor, I notice it descriptively but don't formally elevate it as a primary signal.

   **The mandatory discipline:**

   A. **Verify industry-norm claims OR flag as unverified — calibrated by load-bearing-ness, not blanket precision.** When I cite "industry typically X" or "norm is N":
   - Search for primary or T2-T3 source confirming the norm
   - If unverifiable from external sources, flag as `(my inference from training data — directional estimate, ~80% accuracy band)`
   - Never use unverified industry-norm claims as the ANCHOR for "this is unusual" framing without explicit flag

   **User refinement 2026-05-22:** *"If it is around twelve to twenty four months and it's not the exact number, but the exact number is, like, eighty percent of that twelve to twenty four month, there's about eighty percent correct. That's also fine. It does not have to be... for these type of claims, incomparables as long as it's, like, you know, eighty percent correct, that's fine."*

   **Operationalizing the ~80% directional-accuracy rule:**

   Distinguish TWO uses of industry-norm claims:
   - **Framing/baseline use (~80% directional accuracy is fine):** "qualification cycles typically run 12-24 months" used to establish whether something is unusual. If the real range is 10-22 or 9-20 months, the conclusion about Rigaku (deployment <12 months during pre-alliance phase) still holds. Training-data inference is acceptable here IF flagged as directional.
   - **Point-prediction use (must be verified):** "X will take 14 months" used as a decision input or model parameter. Cannot use training-data inference; must verify or refuse the prediction.

   **The discipline shifts from "verify everything or flag everything" to "verify when load-bearing":**
   - If my conclusion holds when the norm is ±20-30% off, training-data directional baseline is fine (flag as directional)
   - If my conclusion would flip when the norm is ±20-30% off, must verify or stop
   - Sanity check: would the signal still be a HIGH-MAGNITUDE anomaly if the norm were 30% lower (i.e., the company is less unusual than I think)? If yes, the framing is robust to ~80% accuracy. If no, the framing depends on precision I don't have.

   B. **Score Time-to-X explicitly as a separate analytical dimension** for every relevant evaluation. The Time-to-X family includes:
   - **Time-to-Qualification (TTQ):** how fast did the company move from testing/collaboration to customer qualification/production deployment?
   - **Time-to-Production:** how fast from anchor signal (e.g., AGI CPU launch March 2026) to first revenue?
   - **Time-to-Deployment:** how fast from product launch to fab/customer deployment at scale?
   - **Time-to-Power:** how fast can power assets be deployed (per existing `meta/time-to-x-framework.md`)
   - **Time-to-Customer-Expansion:** how fast does multi-customer adoption happen post-anchor signal?
   - **Time-to-Revenue-Scale:** how fast does new product reach material revenue contribution?

   **Scoring rule for Time-to-X signals:**
   - State the verified or hedged industry norm
   - State the company's actual time
   - Compute the delta (e.g., "80% faster than norm" or "matches norm" or "20% slower")
   - **If >30% faster than norm: HIGH-MAGNITUDE signal** that often gets missed in numerical analysis
   - **If matches or slower than norm:** standard signal, no special weighting

   C. **Recognize when framework signals OVERRIDE numerical signals.** User analogy 2026-05-22 (paraphrased): *"It's similar to the people that were buying GE Vernova, gas turbines, Siemens Energy but missed Bloom Energy because they thought BE's numbers look bad — they're new entrants — and completely disregarded the time-to-power framework that is now more valid, especially in an environment where the lead times are so long."*

   The principle: in lead-time-constrained or paradigm-shift environments, structural framework signals (Time-to-X, bypass-route per `meta/time-to-x-framework.md`, paradigm change) can DOMINATE near-term numerical signals. Investors who anchored only on numerical fundamentals missed BE; investors who applied the time-to-power framework captured the asymmetric upside.

   **Operationally:** when evaluating a name in a lead-time-constrained environment OR a paradigm-shift context, the framework-signals weight HIGHER than the numerical weight. The bias to avoid: treating framework signals as soft and numerical signals as hard, when sometimes the inverse is true.

   **Calibration example (Rigaku, 2026-05-22):**
   - My initial framing cited "12-24 month qualification cycles" as industry norm — **UNVERIFIED training-data claim** (search 2026-05-22 found "6 months to over a year" for general productization, no specific metrology figure)
   - The signal I missed: Onto-Rigaku CD-SAXS went from collaboration → two customer wins → deployment, all happening before formal alliance closes — materially faster than even the unverified anchor
   - **Corrected scoring:** Time-to-Qualification signal at Rigaku/Onto IS a HIGH-MAGNITUDE positive signal that the operating-decline anchoring obscured
   - **Discipline going forward:** verify industry-norm claims OR flag them; score Time-to-X explicitly; weight framework signals appropriately in narrative-driven markets

   See B19 (industry-norm-claim anchoring without verification) in `biases-watchlist.md` + existing `meta/time-to-x-framework.md` (which now generalizes beyond time-to-power).

22. **Model segment trajectory, not snapshot — small-AI-segment dismissal is a bias.** User correction 2026-05-23 after Nippon Chemical Industrial (4092.T) evaluation: I dismissed the AI-adjacent thesis based on Functional Products being "only ~10-15% of revenue today." User pushback verbatim: *"my pushback is that even if its 10/15%, the task is not to identify the split today but it is to model what it can become."*

   **Why this bias exists:** the conventional analyst frame asks "what is this company today?" That's a SNAPSHOT lens, valuable for backward-looking accounting analysis but inadequate for forward-looking thesis construction. When a multi-segment company has a small-but-structurally-growing AI-adjacent segment, dismissing the thesis based on current segment % anchors on the snapshot and misses the trajectory.

   **The investable thesis often lives in the FORWARD trajectory of a currently small segment, not its current size.** Examples:
   - Murata 10 years ago: MLCC was a portion of revenue; today the AI-accelerator MLCC density growth is the bull thesis
   - Corning: optical fiber was a smaller portion; AI east-west traffic is now the bull driver
   - Rigaku: semiconductor segment was overshadowed by scientific instruments; the AI-metrology segment is the forward thesis
   - Nippon Chemical Industrial: Functional Products (phosphine + electronic ceramics + TDK MLCC JV) currently a minority of revenue, but the structural setup positions it as the dominant forward driver

   **Mandatory discipline for any multi-segment company analysis:**

   1. **State current segment split** (or flag as unverified)
   2. **Identify AI-adjacent segment(s)** and current size
   3. **Forecast underlying demand growth** for the AI-adjacent segment (cite source or hedge)
   4. **Project segment trajectory at 12-24 month and 24-36 month horizons**
   5. **Compute substitution rate** vs. declining segments (similar to principle #20 but forward-looking)
   6. **State SOTP re-rating implication** if segment mix shifts as projected
   7. **THEN issue tier/sizing verdict** — based on FORWARD positioning, not snapshot

   **What this changes operationally:**
   - "Segment is too small today" is NEVER a sufficient dismissal reason
   - The dismissal must instead be: "segment can't grow to drive the thesis even at favorable demand growth" — and that requires modeling, not assertion
   - Multi-segment company evaluations must include explicit forward trajectory section

   **Hook enforcement (added 2026-05-23):** `~/.claude/segment-trajectory-hook.py` is a Stop hook that scans every assistant message for the anti-pattern (e.g., "only X% of revenue... too small to drive the thesis... skip/Tier 3") and blocks the message if no forward-modeling language is present (trajectory, SOTP, substitution rate, 12-24/24-36 month, could grow to, etc.). Exit 2 with explicit feedback on what to add. This is deterministic enforcement — instructions in this file are skippable; hooks are not.

   **The structural meta-lesson (user-articulated 2026-05-23):** *"instructions will not always work; if you create a hook, then it will guaranteed work because it forces you to do something. You can't build a hook-based system, whatever has to be enforced, has to be enforced within the system."* Anything operationally critical should be enforced via hook, not just documented as a rule.

   **Calibration example (Nippon Chemical Industrial, 2026-05-23):**
   - Initial framing: "Functional Products is only 10-15%, AI-adjacent revenue is too small to drive the thesis" → would be Tier 3 dismissal
   - User pushback applied: model what segment can become
   - Revised framing: Nippon is one of only two manufacturers of high-purity liquefied phosphine globally per their product page; PH3 semi market $69M (2023) → $111M (2030) per Valuates Reports; TDK JV (April 2026) brings barium titanate into AI accelerator MLCC supply chain; China export control supplier re-qualification dislocation creates TTQ tailwind
   - Forward trajectory: if Functional Products goes from ~35% to ~50% of revenue over 24-36 months with semi-grade chemical margins (25-35% vs commodity 10-15%), SOTP re-rating becomes material
   - Revised verdict: Tier 2/3 boundary, not Tier 3 dismissal — same level as Rigaku

   See B20 (current-segment-% snapshot anchoring) in `biases-watchlist.md`.

23. **Claim-level verification via orthogonal data — source-reputation is a weak prior, not a primary signal.** User correction 2026-05-24 after TrendForce HBF debacle: TrendForce reinterpreted one professor's speculation as fact ("NVIDIA is using HBF"); reality is NVIDIA pursues high-IOPS NAND for GIDS, not HBF. My initial response proposed "downgrade TrendForce in the source-reliability tracker." User pushback verbatim: *"instead of just relying on sources, what must work better is when you do read a TrendForce or a Motley Fool's or whichever other source that you verify a claim that they make through looking at adjacent data, alternative data sets. So the reliance is not primarily based on sample size reliance."*

   **The bias revealed:** source-reliability tracking is sample-size-dependent epistemics. You accumulate a track record per source over many claims, then use the aggregated record to weight new claims. This creates two failure modes: (a) trusted-source false confidence — TrendForce has a good track record, so I assumed their HBF claim was likely true; (b) untrusted-source false rejection — a single-voice tweet gets discounted even when the underlying claim is genuinely falsifiable through orthogonal data.

   **The refinement:** every claim gets verified through *orthogonal / adjacent data sets independently*, regardless of source reputation. The source's reputation is at best a weak prior; the cross-verification through orthogonal evidence is the actual epistemic signal. Replacing source-tracking primacy with claim-verification primacy.

   **Operational definition of "orthogonal":** two sources are orthogonal if they come from different data-generation processes — e.g., trade-press article + earnings-call transcript = orthogonal (one is journalist interpretation, one is direct management statement). Trade-press article A + trade-press article B citing A = redundant, not orthogonal. Company filing + competitor commentary about that company = orthogonal. Analyst note + analyst note from different firm citing same primary source = redundant.

   **Mandatory discipline for any cited claim:**

   1. **Identify the claim's first-order assertion** (what it actually says, stripped of interpretation)
   2. **Identify the source type** (primary / secondary / tertiary, and the data-generation process)
   3. **Find at least one orthogonal corroboration** — different data-generation process, ideally different vertical (semi roadmap + earnings call, supply chain disclosure + customer RFP, regulatory filing + trade press, etc.)
   4. **If no orthogonal corroboration exists, flag the claim as single-source hypothesis** (goes to `signals/cross-source-log.md`), DO NOT propagate to thesis files until triangulated
   5. **Track WHICH orthogonal sources corroborated** — this is the actual epistemic provenance, not the source-track-record

   **Retroactive application to TrendForce HBF:**
   - 1st-order claim: "NVIDIA is using HBF"
   - Source type: secondary aggregator (TrendForce) citing tertiary (The Elec article based on one professor's opinion)
   - Orthogonal corroboration check: NVIDIA GTC technical sessions, Kioxia/SanDisk roadmap, hyperscaler storage RFP language, NVLink-storage spec disclosures, GIDS architecture documentation — NONE corroborated HBF positioning
   - Verdict: flag as single-source hypothesis, do NOT cite as established fact
   - The claim's failure was visible at ingest time IF the orthogonal-data check had been mandatory

   **What this changes operationally:**
   - The P3 source-reliability monthly audit cycle (originally: review source track records) is replaced by **claim-verification audit cycle** — sample N recent claims in research files, verify each had orthogonal corroboration at ingest
   - Principle #6 (triangulation) needs refinement: "three orthogonal sources within 90 days," not "three sources of similar type"
   - The Bias B25 (source-tracking-over-claim-verification) is added to `biases-watchlist.md`

   **Fluidity footer:**
   - codified: 2026-05-24
   - last_review: 2026-05-24
   - falsified_by: orthogonal-data-check produces high false-positive rate (>30% of claims correctly flagged-as-OK but blocked anyway) OR orthogonal-source classification turns out to be too judgment-heavy to apply consistently. Then either tighten the orthogonality definition or revert to source-tracking primacy with stricter triangulation.
   - re-evaluation trigger: monthly, OR when the claim-verification audit reveals systematic gaps

   **The structural meta-lesson:** source-reputation tracking optimizes for *trusting your priors*. Claim-level orthogonal verification optimizes for *trusting orthogonal evidence*. The first is fragile to a few bad articles from a "trusted" source — exactly the TrendForce failure mode. The second is robust because each claim stands on independently sourced cross-vertical evidence.

   See B25 (source-tracking-over-claim-verification) in `biases-watchlist.md`.

24. **Recursive bottoms-up worldview discovery via verified data at each layer — pre-training categorization is consensus output, not edge.** User correction 2026-05-24 after I shipped wiki/robotics-primer.md Phase 1 entirely from pre-training data without orthogonal verification of structural claims. User pushback verbatim: *"Your pre training data is just what everybody else gets. If somebody asks you the same question, they... without a harness, without all the back and forth that we had, uh, Claude will just give them that answer... you have to start from okay. Let me just first check one robotics growth. Use direct datasets, alternative datasets, indirect datasets, adjacent market data to come up with a plausible, i.e., verified number. Then look at which segment grows the fastest, which are the biggest suppliers in that specific market, which... after the biggest market has been analyzed, look at which market underneath is growing the fastest, right, which other markets are growing currently. And then you just keep going."*

   **The bias revealed:** pre-training data is a single source that produces *consensus answers*. The edge of this OS over a vanilla LLM is precisely the harness — orthogonal verification + recursive drill-down + the iterative back-and-forth that surfaces non-consensus reads. When I build a worldview top-down from pre-training categories + bottom-up from pre-training company memory (as I did with robotics-primer.md), I collapse the OS to vanilla-LLM output. The edge that justifies the harness's existence disappears.

   **The discipline — recursive discovery procedure:**

   | Level | Action | Output |
   |---|---|---|
   | L1 | Verify the encompassing market via orthogonal datasets — direct (industry reports), alternative (job postings, shipping data, capex disclosure, satellite, credit-card), indirect (supplier earnings, customer disclosure), adjacent (parallel-vertical data where the trend should show up) | Verified growth + market size for the encompassing layer |
   | L2 | Within verified scope, identify fastest-growing SEGMENT using orthogonal data — NOT pre-training categorization | Verified segment ranking with corroboration |
   | L3 | Within fastest-growing segment, identify biggest SUPPLIERS + unit economics + capacity | Verified supplier map for that segment |
   | L4 | Find market UNDERNEATH (supply chain) + ADJACENT markets growing fast | Next layer's drill targets |
   | L+1 | Recurse | Each layer produces both insight + the next layer's question |

   **Why recursive:** each level's verified output surfaces the next level's question. The recursion produces cross-narrative discovery naturally — overlapping segments at L3/L4 surface multi-narrative names without anchoring on pre-training categorization. Pre-training informs *where to look*, not *what to assert*.

   **Distinction from existing principles:**
   - **Principle #1 (bottoms-up before outside view)** — applies to thesis building. This applies to worldview building.
   - **Principle #13 (first-principles + layered + extrapolation on wikis)** — that's the *structural template* for the artifact. This is the *search procedure* for populating it.
   - **Principle #17 (cross-vertical analysis as the LLM edge)** — that surfaces the concept of cross-vertical edge. This operationalizes it as a recursive search.
   - **Principle #23 (claim-level verification via orthogonal data)** — that validates individual claims after they're made. This constructs the worldview itself via the same epistemic discipline.

   **Mandatory discipline for any worldview/sector/wiki build:**
   1. **State the encompassing layer being mapped** (e.g., "robotics," "AI compute," "power for AI")
   2. **L1 verification** — gather orthogonal datasets, cross-reference for growth + market size. Do NOT proceed to L2 until L1 is verified.
   3. **L2 segment ranking** — identify fastest-growing segments via the data, not pre-training categorization. Cross-check across ≥2 orthogonal sources.
   4. **L3 supplier map** — within fastest-growing segment, identify who captures spend + their economics. Verify via supplier earnings, customer disclosure.
   5. **L4 underneath + adjacent** — supply chain + parallel-vertical markets growing fast. Surfaces multi-narrative candidates.
   6. **Recurse** to practical session depth (3-4 levels typical), document where verification stops + becomes "next-session pickup"
   7. **Pre-training data informs WHERE to look (which keywords, which suppliers to check), NEVER WHAT to assert**

   **Retroactive application to wiki/robotics-primer.md Phase 1:**
   - Phase 1 built top-down (12 stack layers from pre-training memory) + bottom-up listing (companies in each layer from pre-training memory)
   - Numerical claims marked `[verification required]`, but structural claims (who's dominant, FM lab roster, actuator counts, supply concentration) NOT verified
   - First stress-test (HDS data-center cooling probe by user) revealed terminology collision that pre-training would have continued to assert
   - Status downgraded to HYPOTHESIS WORLDVIEW pending Phase 2 verification under principle #24 discipline
   - Phase 2 = re-do from L1 (verify total robotics market growth via IFR + ABI + adjacent supplier earnings + adjacent labor-cost data) → L2 (fastest-growing segments per verified data) → L3 (biggest suppliers per segment) → L4 (underneath + adjacent)

   **What this changes operationally:**
   - All 3 queued wiki primers (hyperscaler-capex-primer, geopolitical-ai-primer, model-economics-primer per todo.md P3) must be built under principle #24 from inception
   - Existing primers — spot-check for retroactive compliance (hbm-primer, power-for-ai-primer, custom-silicon-primer, agentic-workload-scaling appear to have primary-source backing; networking-primer + token-consumption need check)
   - The robotics primer Phase 2 is now THE calibration example for this principle — if Phase 2 output materially differs from Phase 1 (different fastest-growing segment, different supplier ranking), the principle is producing real edge. If Phase 2 confirms Phase 1, the principle adds overhead without edge — refine or falsify.

   **Fluidity footer:**
   - codified: 2026-05-24
   - last_review: 2026-05-24
   - falsified_by: if verified-at-each-layer produces the same segment ranking + supplier conclusions as pre-training categorization across 3 consecutive primer rebuilds (→ pre-training is sufficient, principle adds overhead without edge) OR if recursion depth requirements exceed practical session budgets across 3 attempts (→ principle is correct but unworkable as stated)
   - re-evaluation trigger: after Phase-2 robotics build, OR after 3 primer rebuilds using this discipline, OR when the principle gets flagged 3+ times in harness observations log

   **The structural meta-lesson:** the OS's edge over a vanilla LLM is the harness. If worldview-building skips orthogonal verification at the construction phase, the OS produces consensus output and loses its raison d'être. Principle #24 protects the edge itself.

   See B26 (pre-training-as-primary-source bias) in `biases-watchlist.md`.

25. **Research findings cascade to existing thesis files — the canonical capture rule.** User correction 2026-05-25: *"whenever you do research regarding any input that I give you, whenever an output forces you to research existing company names and new findings show up during the research, they must be added to the file of the company if it is in the actual thesis in itself, if we have a file for that company."*

   **The bias revealed:** When research surfaces new findings about a company that has an existing `companies/{TICKER}/thesis.md` file, those findings are typically discussed in chat output and then LOST — they don't make it into the canonical thesis file. The next session reads the (now-stale) thesis file as the source of truth, missing the research that already happened. This breaks the OS's compounding-knowledge property — research velocity goes up, but cumulative thesis depth doesn't compound proportionally.

   **The distinction from existing cascade rules:**
   - **Critical Rule #10** (synthesis cascade) + cascade-enforcement-hook: catches when synthesis artifacts (primers, signals/events) name held tickers and requires per-thesis back-references. Operates at SYNTHESIS-ARTIFACT level.
   - **Principle #25 (new)**: catches when CHAT RESEARCH surfaces new findings about a ticker and requires the findings be appended to the thesis file. Operates at RESEARCH-FINDING level.
   - These are complementary, not overlapping. #10 ensures synthesis points to per-name files; #25 ensures per-name files capture the substance of the research.

   **Mandatory discipline:**

   1. **Whenever research is conducted (web search, primary source pull, deep dive) about a company** that has an existing `companies/{TICKER}/` folder:
   2. **Identify what's NEW** vs the existing thesis file content (specific numerical data, customer names, product specifications, competitive positioning, strategic announcements, etc.)
   3. **Append the NEW findings to the thesis file** as a dated update section (`## Update YYYY-MM-DD — [topic]`), with inline source citations per principle #11 + #23
   4. **Cross-reference any synthesis artifacts** that this research contributes to (per Critical Rule #10 — bidirectional discipline)
   5. **NEVER let research findings live only in chat output** — chat is ephemeral, thesis file is canonical

   **Worked example (ARM AGI CPU research 2026-05-25):**
   - User asked about CPU rebalancing → I researched ARM AGI CPU + Q-by-Q evolution
   - Findings surfaced in chat: 136 Neoverse V3 cores on TSMC 3nm + Meta lead customer + OpenAI/Cerebras/Cloudflare launch partners + Stargate ARM CPU role + Q-by-Q $1B+ revenue 3 consecutive quarters + $2B unfilled orders capacity-constrained framing
   - Per principle #25: appended these findings as `## Update 2026-05-25` section to `companies/ARM/thesis.md` with inline citations
   - Net effect: next session reading ARM thesis sees today's research baked in, not just chat-ephemeral

   **What this changes operationally:**
   - Every research session that touches a held/candidate ticker triggers a thesis-file update obligation
   - Chat responses with new ticker findings must be paired with thesis-file appends (within same commit if persistence is intended)
   - Synthesis artifacts continue to back-reference per Critical Rule #10
   - The OS compounds knowledge structurally rather than re-researching the same ticker repeatedly

   **Hook enforcement (deferred):** Mechanical detection candidate — when chat output contains a TICKER pattern matching an existing `companies/{TICKER}/` folder + specific numerical/structural data + that data is NOT in the thesis file → block. Similar pattern to anti-fab repo-grounding check, scoped per-ticker. Defer building hook until drift recurs across 3+ research events (per the standard pattern from B25/B26 codifications).

   **Fluidity footer:**
   - codified: 2026-05-25
   - last_review: 2026-05-25
   - falsified_by: if cascading every research finding to thesis files produces noise overhead (thesis files become bloated with low-signal updates) OR if research velocity collapses because every chat-research touchpoint requires file-edit overhead. Then either tighten the "what counts as new finding" threshold OR build mechanical detection to surface only structural-not-incremental findings.
   - re-evaluation trigger: monthly, OR after 5 research events trigger the cascade, OR when harness observations log flags principle #25 3+ times

   See B27 (research-findings-not-cascaded bias) in `biases-watchlist.md`.

26. **Cyclical-to-structural transition recognition — the binding-constraint test.** User-articulated framework 2026-05-25: *"certain companies that used to be cyclical in prior cycles ended up being structural... companies that are going through a structural change as they become the backbone of the new AI based economy... memory in phones when we went from 8 to 16 to 32 GB, memory on a phone was a good to have, it was not a necessity for the product to be better, as in you could buy a phone with 32GB or one with 64GB, for the marginal user, the difference was minimal. It was part of the end product, but it wasn't ingrained with the new product. So if you now take this framework and extrapolate it, it becomes an unverified assumption that, okay, now memory and storage, because of inference, because of the growth of AI, the limit of how good a LLM can reason is directly tied to these components, and therefore they become structural in nature until they reach a plateau."*

   **The bias revealed:** Pre-training data is heavily exposed to cyclical-behavior patterns from prior cycles (2017-2023 memory cycle, prior fab equipment cycles, etc.). When a component undergoes structural transition due to a technology regime change, pre-training-anchored reasoning over-weights cyclical mean-reversion at the wrong time. Sell-side analyst frameworks have the same lag (typically 2-3 quarters to update from cyclical to structural framing). The mispricing spread between cyclical multiples (5-10x forward) and structural multiples (15-30x forward) IS the alpha if the structural framing wins.

   **The discipline — the binding-constraint test:**

   For any AI-related component, ask one question: **"Is this a discretionary feature of the end product, OR is it a binding constraint on the end product's quality?"**

   - **Binding constraint** = the END PRODUCT'S CAPABILITY is directly tied to this component's quantity/quality. Adding more of the component DIRECTLY improves what the product can do. → STRUCTURAL classification. Multi-year stickiness, pricing power, multiple-expansion potential.
   - **Discretionary feature** = the component is part of the product but the product's quality doesn't fundamentally depend on its scaling. Marginal user is indifferent at moderate levels. → CYCLICAL classification. Mean-reversion risk applies.

   **Worked examples:**

   | Component | Pre-AI framing | Post-AI binding-constraint test | Verdict |
   |---|---|---|---|
   | HBM memory bandwidth | Cyclical (DRAM cycle 2017-2023) | Thinking-token depth scales linearly with HBM bandwidth (per `signals/events/2026-05-25-test-time-compute-scaling.md`) | STRUCTURAL — binding |
   | Phone RAM 8→32→128GB | Discretionary feature 2017-2023 | Marginal user indifferent at moderate levels | CYCLICAL — correctly classified |
   | NAND for AI inference (GIDS) | Cyclical NAND cycle | Long-context storage offload required for sustained inference | STRUCTURAL — newly binding |
   | NAND for consumer storage | Cyclical | User indifferent at sufficient levels | CYCLICAL — unchanged |
   | Optical interconnect (CPO) | Niche / cyclical telecom | Inter-chip bandwidth for sustained inference at scale | STRUCTURAL — newly binding |
   | Advanced packaging (CoWoS) | Cyclical equipment cycle | HBM stacking + chiplet integration required | STRUCTURAL — newly binding |
   | Compound semi power electronics | Specialty / cyclical EV | Motor drives + AI cooling + power density structural | STRUCTURAL — newly binding |

   **Mandatory discipline:**

   1. **For any AI-related held name or candidate, apply the binding-constraint test** before accepting cyclical or structural framing
   2. **Identify what the end-product capability is** (e.g., "depth of reasoning per query," "inter-chip bandwidth," "thinking-token throughput")
   3. **Test: does adding more of this component DIRECTLY improve that capability?** (Not "is the component part of the product" — that's the wrong test)
   4. **If YES → structural; if NO → cyclical**
   5. **For structural classifications, check consensus framing** — if consensus still uses cyclical multiples, the mispricing spread is the alpha
   6. **For previously-structural-now-cyclical reversals,** check the canary metrics (e.g., HBM-per-FLOP trajectory, MoE adoption rate) for transition signals

   **What this changes operationally:**
   - For every held name with AI exposure, the cyclical-vs-structural question gets explicitly tested rather than implicitly assumed from pre-training
   - HYNIX at 5.92-6.79x forward P/E vs structural-growth-comparable multiples (15-30x) = re-rating room if structural wins
   - SNDK NAND framing needs explicit binding-constraint test (GIDS + AI inference storage vs commodity NAND cycle)
   - Optical cluster (GLW, AXTI, TSEM, SMTC) → all pass binding-constraint test under test-time-compute regime
   - Advanced packaging (BESI, ASMPT, DISCO candidates) → all pass binding-constraint test
   - Memory-cycle-primer needs explicit cyclical-to-structural transition section

   **Honest caveats per principle #15 two-handed thinking:**
   - **Plateau risk (user-acknowledged):** at some point memory bandwidth ceases to be the binding constraint (e.g., MoE sparse activation decouples memory from reasoning, or new architecture displaces transformers). When that happens, structural framing breaks for the affected component. Canary: HBM-per-FLOP trajectory across model generations.
   - **Supply-side reset risk:** Chinese memory production (CXMT, ChangXin) scaling could shift supply-demand even if demand stays structural. Not a cyclical-vs-structural framing change — a supply-side reset.
   - **Sell-side framework lag = 2-3 quarters:** mispricing spread persists but not indefinitely. Re-rating plays out over 2-4 quarters, not immediately.
   - **Architectural disruption risk:** MoE/sparse models, mamba/RWKV alternative architectures, custom inference architectures (Cerebras wafer-scale, Groq LPUs) could disrupt the memory-bandwidth-binding-constraint thesis.

   **Worked example — HYNIX specifically:**
   - Pre-AI framing: cyclical DRAM/HBM player; 5.92-6.79x forward P/E reflects cyclical mean-reversion expectation
   - Binding-constraint test: HBM bandwidth directly scales with reasoning depth (verified per test-time-compute event) + 5+ hyperscaler programs simultaneously demand HBM (verified Google I/O event + Phase A); operating cycle has materially changed from prior 2017-2023 cycle
   - Verdict: STRUCTURAL — the cycle nature changed in 2024-2026 specifically
   - Mispricing spread: 5.92-6.79x cyclical multiple vs 15-30x structural-growth comparable = potential 2-3x re-rate room if framing wins
   - Falsifier: HBM-per-FLOP requirements stop scaling (canary) OR Chinese supply materially compresses pricing OR architectural disruption (MoE wins) reduces memory demand per query
   - Watch: forward EPS revisions (already +29% in recent months per Phase A check — consistent with structural-demand framing materializing)

   **Fluidity footer:**
   - codified: 2026-05-25
   - last_review: 2026-05-25
   - falsified_by: if HBM-per-FLOP trajectory plateaus across 2 consecutive model generations (signals memory plateau) OR if MoE/sparse architectures become dominant frontier-model architecture (decouples memory from reasoning depth) OR if Chinese memory supply meaningfully reshapes pricing dynamics (different mechanism but similar price effect). For these reversals, the structural framing breaks for HBM specifically while remaining intact for other AI-binding-constraint components.
   - re-evaluation trigger: quarterly, OR on any of: HBM-per-FLOP metric disclosed by frontier-model labs; MoE adoption rate at frontier deployments; Chinese DRAM/HBM production milestone; held-name (HYNIX, SNDK) multi-quarter EPS guidance revisions

   **The structural meta-lesson:** consensus framework lag at cyclical-to-structural transitions is a recurring alpha source in technology regime changes. Pre-training data captures the prior cycle's behavior at high weight; the current cycle's structural shift gets under-weighted until consensus catches up. The binding-constraint test is the mechanical detection rule that distinguishes "feature that scales cyclically" from "binding constraint that scales structurally."

   See B28 (pre-training-anchored cyclical-vs-structural mis-classification) in `biases-watchlist.md`.

27. **Post-Traumatic Supply Disorder — capex-response discipline imposed by prior-cycle scarring.** Codified 2026-05-26 after ingesting Citrini Research "Semis Memo: Supply Chain Inheritance" (May 12, 2026). The framework articulates a recurring pattern: industries that experienced severe oversupply / glut cycles in the prior 3-7 years exhibit MUTED capacity-response to subsequent demand acceleration. Instead of expanding capacity at typical cycle-mid pace, mgmt teams let ASPs rise — preserving margin expansion BEYOND the timeframe that classical cycle-supply-response models predict.

   **The mechanism:** management memory of prior-cycle pain (inventory writedowns, capacity-utilization collapse, shareholder anger over capex misallocation) creates psychological capex discipline that survives even at high demand inflection points. Investors aggregating from sell-side estimates that ASSUME normal capacity response will systematically under-model the duration of pricing power.

   **The 2026 working examples per Citrini:**
   - Texas Instruments (TXN) — capex intensity (capex/revenue) DECLINING despite AI-driven demand acceleration; raising prices instead of expanding fabs
   - NXP Semiconductors (NXPI) — peer behavior matches TXN; same capex discipline pattern
   - Murata (held 16.77%) — already exhibiting 15-35% MLCC price hike confirmed April 2026; lead times 8→24 weeks; capacity utilization 90-95%; FY27 OP guide +34.8% reflects the ASP-led margin expansion
   - The 4 tier-1 MLCC makers each chose vertical integration (Murata 2013 JV, Samsung EM in-house, Taiyo Yuden ¥5B building, TDK April 2026 NCI JV) over greenfield capacity build — Post-Traumatic Supply Disorder mechanism applies upstream at the BaTiO3 powder layer too

   **The compounding effect with principle #26 (cyclical-to-structural transition):**
   - Principle #26 catches when consensus is mis-classifying a structural shift as cyclical
   - Principle #27 (this) catches when the supply-side response under that structural shift is ALSO muted by capex discipline — extending the duration of pricing power beyond what principle #26 alone predicts
   - Combined: structural demand growth × muted supply response = pricing-power durability longer than classical models predict

   **Detection rule:** when an analog/power-semi / mature-cycle name shows (a) demand acceleration tied to AI capex, AND (b) capex/revenue ratio declining or flat over the same window, AND (c) explicit mgmt commentary signaling "discipline" or "lessons from prior cycle," apply Post-Traumatic Supply Disorder framework. The investable consequence is margin expansion compounds revenue expansion; the duration extends beyond typical cycle timescales.

   **Falsifiers / inversion conditions:**
   - mgmt reverses on capex discipline and announces meaningful greenfield expansion
   - Chinese / second-source alternative-supplier competition reaches qualification at tier-1 customers (substitute path matures faster than expected)
   - Industry-wide ASP correction triggered by demand dip (cycle proves not structural after all — principle #26 falsifier fires)
   - Capacity-share-shift to vertically-integrated customers undermines independent suppliers' pricing power

   **Hook enforceability:** challenging — requires synthesis of capex/revenue trajectory + mgmt commentary + ASP direction across multiple sources over multiple quarters. Best enforced as a methodology principle + session-start briefing item (when a tracked name's earnings hit) rather than a Stop hook.

   **Fluidity footer:**
   - codified: 2026-05-26 (Citrini Research "Semis Memo" + Murata price-hike confirmation + 4 tier-1 MLCC maker vertical integration pattern)
   - last_review: 2026-05-26
   - status: active (new)
   - falsified_by: TXN/NXPI announce capex expansion within 12 months OR Chinese analog/power semi qualification at tier-1 hyperscalers within 12 months OR Murata/Samsung EM/TDK reverse on vertical integration moves OR MLCC ASP correction >10% within 6 months
   - re-evaluation trigger: quarterly, OR on any of: held-name (Murata) capex announcement, TXN/NXPI capex guidance change, Chinese MLCC qualification milestone at NVDA/AMD/AVGO

   See `signals/events/2026-05-12-citrini-supply-chain-inheritance.md` for the source synthesis + cross-stack cascade.

28. **Supply-chain-reality test for AI-relevance classification — never anchor on marketed business label.** Codified 2026-05-26 after the TE (T1 Energy) miss documented in B29. The failure: classifying TE as "NOT in AI-sector investing universe" based on its marketed business label (solar/battery manufacturer) while NVDA's own May 2025 technical blog explicitly credits 800V DC rack architecture to "the electric vehicle and solar industries." The physical supply chain overlaps with AI infrastructure even though the marketed label says non-AI.

   **The discipline:** Before classifying ANY company as "NOT AI" or out-of-AI-universe, run the supply-chain-reality test:
   1. Identify the underlying PHYSICAL SUPPLY CHAIN this company participates in (not the marketed end-product label)
   2. Map that supply chain to AI infrastructure layers: power conversion, magnetics, capacitors/inductors, manufacturing equipment, raw materials, optical, networking, etc.
   3. Check primary-source evidence for explicit attribution: chip-vendor engineering blogs (NVDA, AMD, etc.), hyperscaler procurement disclosures (META, AMZN, GOOG, MSFT), supply-chain trade press
   4. If ANY layer overlaps with AI infrastructure → classification ≠ "NOT AI"; minimum classification = "AI-adjacent via [specific layer]"
   5. When verified evidence supports reclassification, UPDATE THE FILE — do not punt the decision to user via "flag for review" when evidence already supports the call

   **The decision-action coupling:** When primary-source evidence supports a reclassification, the corrective action is to UPDATE the file, not to ask for permission. Asking for permission on something the evidence already supports is decision-avoidance under the guise of caution. The user (2026-05-26): *"You update that file. Right? That just means you were wrong. Or... no. You were wrong, but you only did a surface level analysis."*

   **Compounds with principle #14 (question user/own framings):** When an agent or prior synthesis produces a classification, do not accept at face value — apply the supply-chain-reality test independently. The TE miss happened because I accepted the US duration agent's "NOT AI" verdict without applying critical thinking.

   **Detection rule:** for every "non-AI" classification call, force the question — "did I check the underlying supply chain, or did I anchor on the company's marketed label?" If only the label was checked, the classification is provisional and incomplete.

   **Falsifiers / inversion conditions:**
   - Primary-source evidence emerges that the company's supply chain does NOT overlap with AI infrastructure (e.g., explicit hyperscaler procurement audit showing no flow)
   - The "shared physical supply chain" turns out to be commodity-level (e.g., generic copper wire); the overlap exists but provides no investable concentration
   - Customer-base divergence is absolute (no possible procurement path); pure-play end-customer mismatch

   **Hook enforceability:** challenging — requires semantic reasoning about supply-chain mapping. Best enforced as a methodology principle + classification-step discipline rather than a Stop hook. Possible session-start briefing item: surface held positions classified "non-AI" for periodic re-evaluation under the supply-chain-reality test (e.g., quarterly).

   **Fluidity footer:**
   - codified: 2026-05-26 (after TE classification miss + Citrini Supply Chain Inheritance ingest + user pushback)
   - last_review: 2026-05-26
   - status: active (new)
   - falsified_by: primary-source evidence that "supply chain overlap" is too thin to confer investable concentration (e.g., overlapping layers are commodity-level not pricing-power-level); OR misclassification recurrence DESPITE applying the test (which would indicate the test itself needs refinement)
   - re-evaluation trigger: monthly, OR on any TE / "AI-adjacent via Supply Chain Inheritance" name producing a graded outcome (positive or negative)

   See B29 (label-anchoring at AI-relevance classification) in `biases-watchlist.md` and `research/signals/events/2026-05-12-citrini-supply-chain-inheritance.md` (the trigger event).

   **Extension 2026-05-26 — customer-share-shift application of principle #28:**

   The supply-chain-reality test applies BOTH at the AI-relevance classification gate (B29 / TE case) AND at the per-position duration-scoring step (B30 / HDS Tesla case). The unifying discipline: do not anchor on a surface signal — verify against the broader supply-chain / market-positioning reality.

   For per-position duration scoring, before treating a single customer's decision (e.g., dual-sourcing announcement, design-cycle shift, share-shift to alternative supplier) as a thesis-compressing signal, run the customer-share-shift discipline:
   1. Quantify the customer's % of total revenue (or % of total relevant segment revenue)
   2. Identify the broader market trajectory the supplier serves
   3. Enumerate tangential AI narratives the supplier participates in beyond the headline customer
   4. Distinguish CUSTOMER-SHIFT (single-customer share movement) from MARKET-WIDE SHARE EROSION (industry-wide share movement)
   5. If the company has multi-customer + multi-segment + multi-narrative optionality, a single customer's decision is an ADJUSTMENT to note, NOT a duration downgrade

   The HDS Tesla case (2026-05-26) is the retroactive application: Tesla dual-sourcing strain-wave actuators with Green Harmonic is an ADJUSTMENT (Tesla ~<1% of HDS revenue at current Optimus scale), NOT a duration compression. HDS's broader thesis runway (3-5 years Long at Western non-Tesla OEMs + semi cap-equipment 35-40% revenue exposure + surgical robotics ISRG ramp + multi-humanoid OEM optionality) is intact. See B30 for full diagnosis.

29. **Segmented triangulation — classify each source by AI-value-chain segment before promoting a signal cluster.** Codified 2026-05-27 after a near-miss while ingesting the May 26 daily AI brief (Uber AI ROI exhaustion + Microsoft tokenmaxxing + KPMG 24%-scaling-with-ROI). Three sources, 90-day window, same direction — the current triangulation rule (Critical Rule #6 / Workflow 3) would have promoted the cluster. The agent caught it: all three corroborating sources observed the **developer-tooling / inference-cost segment** (Claude Code / Cursor / Copilot at engineering layer). Meanwhile the held names being potentially impacted (NOW, PLTR, DDOG, SNOW) sit at the **workflow-software / data-platform segment** with entirely different buyer, cost structure, and ROI measurement. T1 SEC evidence at the held-name segment showed the opposite signal (PLTR 150% NDR, NOW 97% renewal, DDOG +51% RPO, SNOW $100M AI run rate one quarter ahead of guide). Aggregating cross-segment as if same-population would have committed B20 (segment-trajectory anchor) and potentially triggered an unjustified workflow-software trim.

   **The discipline:** Before promoting any signal cluster to `triangulation.md`, classify each source by the segment of the AI value chain it observes (one of: developer-tooling / workflow-software / data-platform / infrastructure-IaaS / chip-and-foundry / memory-and-storage / power-and-cooling / advanced-packaging / model-and-foundation-lab / consumer-AI / sovereign-AI / agentic-application). Then:
   1. **Same-segment cluster (≥3 sources):** promote to `triangulation.md` as "segmented triangulation" — actionable for that segment only. Note the segment explicitly in the entry.
   2. **Cross-segment cluster (sources span ≥2 segments):** log to `cross-source-log.md` as a "cross-cutting signal." Require separate per-segment validation before any thesis impact in any other segment.
   3. **Never aggregate cross-segment signals** as if they observe the same population. Cross-segment convergence is interesting hypothesis-fodder, not high-conviction read.

   **The decision-action coupling:** Before any portfolio action triggered by a signal cluster, force the question — "are all sources observing the same value-chain segment as the position(s) being acted on?" If no, the cluster is cross-cutting and cannot justify single-name action without per-segment validation.

   **Compounds with principle #22 (model segment trajectory, not snapshot):** Same root failure — treating cross-segment data as same-segment data. Principle #22 catches this at the snapshot-vs-trajectory step within a single name; principle #29 catches it at the multi-source triangulation step across names.

   **Detection rule:** for every triangulation candidate, force enumeration: "source 1 segment = X, source 2 segment = Y, source 3 segment = Z." If X = Y = Z → segmented triangulation. If any of {X, Y, Z} diverge → cross-cutting signal, NOT triangulation.

   **Retroactive application (the near-miss 2026-05-27):**
   - Uber COO Macdonald, May 25 comment on Claude Code / Cursor ROI → segment: **developer-tooling**
   - Microsoft internal AI agents cost > human employees → segment: **developer-tooling** (Copilot for engineering)
   - KPMG 24%-scaling-with-ROI survey → segment: **cross-cutting** (general AI deployment survey spanning multiple segments)
   - PLTR / NOW / DDOG / SNOW Q1 2026 T1 SEC evidence → segment: **workflow-software / data-platform**
   - Correct verdict: log Uber + MSFT to `cross-source-log.md` as **segmented signal for developer-tooling**. Do NOT promote to `triangulation.md` as broad "enterprise AI ROI failure." The KPMG cross-cutting source cannot fill the third slot — it spans segments by definition.

   **Falsifiers / inversion conditions:**
   - The segment taxonomy needs revision (segments are too coarse or too fine to be useful)
   - A genuine cross-cutting signal emerges where the same dynamic actually IS active across multiple segments — at which point the cross-cutting log becomes the launching pad for multiple per-segment validation efforts
   - Hook-based enforcement produces false-positives on legitimate same-segment triangulation due to phrasing variation

   **Hook enforceability:** moderate. A Stop hook could scan for `triangulation.md` edits and require explicit segment classification language in the new entry (e.g., presence of "segment:" tag + segment value from approved list). Lower-friction approach: add a session-start reminder to the SessionStart hook surfacing this discipline whenever the OS detects a triangulation candidate forming in recent assistant messages. Deferred — pending second observation of B20-via-triangulation drift to confirm hook is worth the build cost.

   **Fluidity footer:**
   - codified: 2026-05-27 (after near-miss during May 26 daily AI brief INGEST)
   - last_review: 2026-05-27
   - status: active (new)
   - falsified_by: segment-taxonomy proves too coarse or too fine; OR cross-cutting signals routinely need to be promoted to triangulation (proving the segment distinction is over-engineered); OR same-segment triangulation routinely fails to fire portfolio action despite valid clustering (proving the constraint is too tight)
   - re-evaluation trigger: monthly, OR on any GRADE that reveals a triangulation-driven decision was wrong because of cross-segment aggregation, OR on third triangulation entry to confirm segment-classification step is being applied consistently

   See B31 (cross-segment aggregation as triangulation) in `biases-watchlist.md`. Companion to principle #22 + B20.

30. **Comp-set verification before any valuation call — pre-training defaults to stale reference classes.** Codified 2026-05-27 after the LSCC valuation self-audit. The failure mode: I called "26-27x forward EV/Sales is elevated" without enumerating WHICH comp set "elevated" was relative to. The implicit comp set was historical FPGA cyclical semis (10-20x range from 2010-2020 data). But LSCC has structurally re-rated from FPGA-cyclical → chokepoint + AMI-firmware-platform. The right comp set is "chokepoint + software-adjacent" names (25-40x EV/Sales: ASML, TSMC, ARM, ALAB). Under the right comp set, 26x is at the LOWER end of fair value, not elevated. The 1-layer mental valuation model embedded a pre-training cyclical comp anchor that didn't survive the structural-reframe step.

   **The discipline:** Before stating "elevated / cheap / fair" in any valuation call, explicitly enumerate:
   1. Which comp set am I implicitly using?
   2. Does that comp set match the company's CURRENT structural position (per principle #28 supply-chain-reality test + principle #22 segment trajectory), or does it match its HISTORICAL position?
   3. If structural re-rating has occurred (cyclical → chokepoint, hardware → software-adjacent, single-product → platform, etc.), the right comp set has changed — and pre-training defaults to the old one.

   **The 3-layer valuation build-up template (mandatory for structurally-re-rated names):**
   - **Layer 1 — Cyclical floor**: apply the OLD comp-set multiple to current revenue. This is the bear-case floor (what the stock trades at if the structural reframe is wrong).
   - **Layer 2 — Chokepoint / structural premium**: add premium for non-substitutable function + switching cost + demand breadth. Apply chokepoint comp set (ASML / TSMC / ARM / ALAB range).
   - **Layer 3 — Platform / recurring-revenue optionality**: if applicable (SaaS-like pivot, firmware-with-hardware integration, IP-licensing layer), add software-adjacent comp multiple to the qualifying revenue stream.
   - **Displacement-risk haircut**: subtract 15-25% (per OS bypass-route framework, principle #9) for substitution-route maturity.

   **Detection rule:** for every valuation call ("elevated / cheap / fair / overvalued / undervalued / asymmetric / not asymmetric"), force the question — "did I enumerate my comp set, and does that comp set match the company's current structural position?" If no, the valuation call is anchored on pre-training reference class and is provisional.

   **Retroactive application (LSCC 2026-05-27):**
   - Prior call: "26-27x forward EV/Sales is elevated" (anchored on FPGA cyclical comp 10-20x)
   - Corrected call: Layer 1 floor ~$80/share at 15x cyclical EV/Sales; Layer 2 chokepoint fair value ~$130-145 at 25x chokepoint EV/Sales; Layer 3 AMI optionality ~$160-190 at 30-35x blended. Displacement-risk haircut 15-25%. Current ~$140 sits in Layer 2 fair value, below Layer 3 midpoint by 15-30%. NOT elevated under chokepoint framing.

   **Falsifiers / inversion conditions:**
   - The "old comp set" actually was the right comp set because the structural-reframe was wrong (cyclical reality not chokepoint reality)
   - Layer 1+2+3 produces fair-value range below current price (i.e., the chokepoint comp set ALSO can't justify the multiple, in which case the stock is genuinely expensive)
   - Displacement-risk haircut should be larger than 15-25% because bypass routes are more mature than assumed

   **Hook enforceability:** moderate-high. A Stop hook could scan for valuation-language tokens ("elevated", "cheap", "fair", "overvalued", "undervalued", "asymmetric", "X x forward", "rich multiple", etc.) AND require that the same message contains: (a) named comp set reference + (b) explicit structural-reframe check ("cyclical / chokepoint / platform" classifier present) OR (c) explicit "(snap valuation, not structurally-checked)" hedge. Deferred — pending second observation of B32 drift to confirm hook value.

   **Fluidity footer:**
   - codified: 2026-05-27 (after LSCC valuation self-audit triggered by user meta-question)
   - last_review: 2026-05-27
   - status: active (new)
   - falsified_by: structural-reframe-comp-sets routinely producing fair values that don't survive contact with subsequent earnings (suggests reframes are over-applied); OR a hard pattern emerging that pre-training comp set was actually right because the structural reframe was wishful
   - re-evaluation trigger: monthly, OR on any thesis where the 3-layer valuation build produced a meaningfully-different fair value than the snap "old comp set" call would have

   See B32 (comp-set anchoring at valuation step) in `biases-watchlist.md`.

31. **Narrative-stage modifier on valuation + position sizing — valuation calls are STAGE-DEPENDENT, not absolute.** Codified 2026-05-27 after user-articulated hypothesis ("valuations matter less in narrative-driven era") was tested empirically by background research agent. Verdict: hypothesis is PARTIALLY CORRECT but critically overstated — narrative momentum is real and measurable but has explicit stage dependency the unqualified version missed.

   **Empirical evidence supporting the principle:**
   - Tesla EPS peak $4.71 (Dec 2023) → $1.01 (Dec 2025) = -78% EPS decline vs stock $162 → $448.98 = +177% gain (per [stock-analysis-on.net T4](https://www.stock-analysis-on.net/NASDAQ/Company/Tesla-Inc/Valuation/Ratios/Quarterly-Data)) — multi-year price/EPS divergence
   - DeepSeek R1 release Jan 27, 2025: NVDA -17% one day, $588.8B market cap erased (largest single-day loss in market history per [CNBC T2](https://www.cnbc.com/2025/01/27/nvidia-falls-10percent-in-premarket-trading-as-chinas-deepseek-triggers-global-tech-sell-off.html)) — zero fundamental change at NVDA
   - Academic: valuation multiples explained only ~3.67% of long-term return variation 2014-2024 (per [ResearchGate study T2](https://www.researchgate.net/publication/391552948_Comparative_Analysis_of_Growth_and_Value_Stocks_in_the_SP_500_Impacts_of_Recent_Macroeconomic_Events_from_2014-2024))
   - C3.AI -57.73% over 12 months despite AI narrative intact (per [SimplyWallSt T4](https://simplywall.st/stocks/us/software/nyse-ai/c3ai)) — pure narrative reverts on 12-18mo timescale
   - NVDA May 2026: beat + guided $91B vs $86.84B consensus → stock SLIPPED (per [CNBC T2](https://www.cnbc.com/2026/05/20/nvidia-nvda-earnings-report-q1-2027.html)) — Stage 4-5 surprise-capacity exhaustion
   - PLTR at 361x P/E with +85% YoY Q1 2026 revenue → fell 8%+ post-earnings — priced-to-perfection failure

   **The discipline — narrative-stage modifier on sizing:**

   | Narrative Stage | Definition | Sizing modifier |
   |---|---|---|
   | **Stage 1** | Fresh thesis, sub-consensus awareness, narrative just forming | Standard sizing per D1-D5 + may add up to +25% PREMIUM if asymmetry is clean |
   | **Stage 2-3** | Mainstream awareness, expanding coverage, positioning building, beats still expanding multiple | Standard sizing per D1-D5 |
   | **Stage 4** | Priced to perfection, consensus crowded, expectations high, beats producing muted reactions | Apply 25-50% DISCOUNT to computed position size regardless of D1-D5 scoring. Surprise capacity exhausted. Multiple compression risk elevated even if thesis intact. |
   | **Stage 5** | Narrative fatigue, compression underway, correct thesis losing money via multiple compression | Reduce or exit. Wait for re-entry when narrative refreshes (new product cycle, new customer class, new TAM expansion). |

   **For pure-narrative names** (no improving fundamentals, no path to positive earnings in 12-18 months): maximum 2% position size regardless of narrative momentum. Hard exit trigger: 2 consecutive quarters of narrative persistence without fundamental improvement. Duration expectation: 6-18 months maximum (per SOUN, BBAI, C3.AI cohort evidence 2024-2026).

   **The unifying insight (most important):** beat-beat-raise IS the narrative engine for fundamentals-backed names. They are not separate variables. DeepSeek proved that a narrative challenging earnings-delivery destroys value; narrative reinforcing earnings-delivery sustains it. **Narrative without an earnings engine = noise. Earnings + narrative in lockstep = multi-quarter compounding.** The hypothesis "narrative > valuation" is shorthand for "earnings velocity + narrative reinforcement together overwhelm starting multiple" — but ONLY at Stages 1-3. At Stages 4-5 the relationship inverts.

   **Compounds with principle #16 (Recognition Stage in D-scoring):** the existing OS has Recognition Stage in the D1-D5 framework but does NOT explicitly modify position sizing as a function of stage. Principle #31 adds the explicit sizing modifier.

   **Detection rule:** for every sizing recommendation, force the question — "what Recognition Stage is this name at, and what's the residual surprise capacity given current consensus positioning?" If Stage 4-5, the standard D-score sizing is over-stated by 25-50%; apply the modifier explicitly.

   **Retroactive portfolio implications (to apply over next 30 days):**
   - **NVDA**: Stage 4 → suggests modest sizing discount; surprise capacity exhausted (May 2026 muted reaction is evidence)
   - **PLTR**: Stage 4-5 → priced-to-perfection risk explicit; not held; no entry until stage refreshes
   - **ALAB (held 9.6%)**: Stage 3-4 transition → near-max sizing already; do NOT add; consider partial trim if Q2 2026 beat produces muted reaction
   - **LSCC (Active candidate)**: Stage 2-3 transition → standard sizing 1.5-3% per stub thesis
   - **SNOW (pending grade)**: Stage 2-3 transition → standard sizing if entered
   - **NOW (held 6.9%)**: Stage 3-4 → modest discount on incremental adds
   - **HYNIX (held)**: Stage 3 → standard
   - **SNDK (held)**: Stage 3 → standard
   - **DDOG (held 7.5%)**: Stage 3 → standard

   **Falsifier for the principle:** if a name with no improving fundamentals sustains >200% return over 24-month period without earnings improvement, the principle needs revision. If Stage 4-5 names systematically continue beating + getting positive stock reaction (rather than the muted/negative pattern observed in 2026), the surprise-capacity exhaustion framing is wrong.

   **Hook enforceability:** moderate. A Stop hook could scan for sizing recommendations and require an explicit "Stage: [1/2/3/4/5]" + "modifier applied: +/-X%" tag. Deferred — pending second observation of Stage-4-undermodified sizing recommendation to confirm hook value.

   **Fluidity footer:**
   - codified: 2026-05-27 (after empirical verification of user-articulated hypothesis)
   - last_review: 2026-05-27
   - status: active (new)
   - falsified_by: Stage 4-5 names systematically defying the muted-reaction pattern in 2026-2027 (suggests surprise-capacity-exhaustion framing is wrong); OR pure-narrative names sustaining >200% returns >24 months without earnings (suggests duration limit is wrong); OR the empirical refresh in 6 months showing 2025-2026 was an idiosyncratic regime
   - re-evaluation trigger: monthly, OR on any GRADE that reveals a position sized without stage-modifier produced an unexpected outcome (positive or negative)

   See B33 (narrative-stage-blind sizing) in `biases-watchlist.md`. Companion to principle #16 (D5 Recognition Stage), #30 (comp-set verification), #29 (segmented triangulation).

32. **Pre-Action Checkpoints — fresh-verify before output + premortem before commit.** Codified 2026-05-27 after two user directives within 2 days plus same-turn operational validation (DDG/xAI/LSCC corrections caught before commit during AM brief triage).

   **User directives (both verbatim 2026-05-27):**
   - *"Never just formulate an output without doing some research fast, even if it's already in the files. Do some additional research to verify the claims in the file."* — the OUTPUT-side discipline
   - *"Always ask yourself what could go wrong and what you might have missed before acting."* — the ACTION-side discipline

   **The discipline (two components):**

   **A) Fresh-verify before user-facing output on a name/topic:** before generating a thesis statement, valuation call, signal classification, or sizing recommendation, run a fast fresh-research pass (web search, primary-source check, current-data fetch) even if the topic is covered in files. Files drift; fresh-verify catches narrative shifts the file missed.

   **B) Premortem before commit or irreversible action:** before committing files, launching agents, posting GitHub comments, or finalizing any artifact with side effects, explicitly enumerate "what could go wrong" + "what might I have missed." Common failure modes: unverified claim propagated; framing borrowed from source headline that's misleading; signal-to-noise too low; over-aggregation across segments; pre-training anchor at comp-set selection (B32) or sizing (B33).

   **Scope (when this fires — explicit to prevent rigidity):**
   - **FIRES on**: thesis-impact statements, prediction targets, sizing recommendations, signal triangulations, valuation calls, file commits, agent launches, watchlist additions, principle codifications, GitHub interactions
   - **DOES NOT FIRE on**: routine Bash ls/git status, file reads for context, simple status updates to user, factual responses where the data is already in primary-source form, in-conversation clarifications

   **Detectability (per user constraint 2026-05-27 — must be detectable if becomes rigid or net-negative):**

   The principle MUST surface its own failure modes via three mechanisms:

   1. **Application log** at `research/meta/principle-applications-log.md` — every meaningful application of principle #32 records: (a) what was checked, (b) what was caught, (c) classification — REAL CATCH / FALSE POSITIVE / WASTED OVERHEAD. Minimum-friction format: one line per application.

   2. **Monthly hit-rate audit** at recurring audit cycle (next cycle 2026-06-24 in todo.md): sample last 30 days of applications. Compute three metrics:
      - **Real-catch rate** = real_catches / total_applications. Target ≥40%. If <20% → over-applying.
      - **False-positive rate** = (premortem suggestions implemented that turned out wrong) / total. Target <30%.
      - **Wasted-overhead rate** = (applications producing no value AND consuming non-trivial time) / total. Target <30%.

   3. **Rigidity flag** — if I find myself running premortem on routine operations (file reads, status updates, well-cached factual responses), the trigger threshold is too low. Flag for tightening at next audit.

   **Falsifiers / inversion conditions (when to retire the principle):**
   - 3+ consecutive months where real-catch rate < 20% per audit → principle is over-applying, retire or significantly raise threshold
   - 1+ confirmed case where premortem SUPPRESSED a signal that should have been logged (false negative of false-positive concerns) → trigger threshold is too aggressive
   - User flags that routine work is consistently delayed by premortem overhead → friction is exceeding value
   - The "fresh-verify" component yielding identical results to file content 90%+ of time over 30 days → files are not drifting fast enough to justify the verification overhead (lower the verification frequency)

   **Net-positive-improvement criterion (the test the principle must pass):**

   Over any 30-day window, principle #32 must produce:
   - More real catches than wasted overheads (real_catches > wasted_overheads count)
   - At least 1 case where premortem caught a correction that would have shipped wrong without it
   - No case where premortem suppressed a legitimate signal

   If any of these fails over 30 days → principle requires revision OR retirement.

   **Hook enforceability:** moderate complexity. A Stop hook could scan for high-blast-radius output patterns (thesis edits, valuation language, sizing recommendations, file commits) and require evidence of recent WebFetch/WebSearch/file-read calls OR an explicit "(fresh-verified at [time])" tag. Deferred — pending application log accumulating sample data to confirm hook would catch real misses vs add noise.

   **Retroactive validation (the codification trigger turn):**
   - DDG +30% framing: premortem caught that "30% surge" was the PEAK on May 25, not daily growth rate; actual is 18.1% WoW US average sustained 6 days. Without fresh-verify, would have logged stronger-than-actual single-day claim.
   - xAI signal: premortem + fresh-verify caught that brief's "abandons solar for gas" framing was wrong; actual story is 62 unpermitted methane turbines + $2.8B more purchased + minimal-not-abandoned solar + HIDDEN BIGGER SIGNAL (Anthropic→xAI $1.25B/MONTH for Colossus compute) the brief omitted entirely
   - LSCC Vivado update: premortem caught that adding marginal signal would dilute thesis file quality; correctly DROPPED
   - "Near-triangulation threshold" claim about power data points: premortem-driven file-grep revealed only ONE prior reference in bottlenecks.md, not "4+" as I'd casually claimed

   3 catches + 1 drop in one application = strong real-catch rate baseline.

   **Fluidity footer:**
   - codified: 2026-05-27 (after twin user directives + same-turn operational validation)
   - last_review: 2026-05-27
   - status: active (new)
   - falsified_by: see Falsifiers section above (4 explicit conditions); plus general criterion that real_catches must exceed wasted_overheads over any 30-day window
   - re-evaluation trigger: monthly via principle-applications-log.md audit, OR on any premortem-suppressed-signal confirmation, OR on user friction flag

   See B34 (action-without-verification-or-premortem) in `biases-watchlist.md`. Companion to principle #23 (claim-verification), #24 (recursive bottoms-up + verified data at each layer), #14 (question own framings).

33. **Top-down capability decomposition as demand-discovery tool (complements bottoms-up, does not replace it).** Codified 2026-05-28 after empirical validation on Robinhood Agentic Trading launch (N=1 application).

   **User articulation 2026-05-28 verbatim:** *"Start from what AI agents need to do to be able to achieve human tasks... what does an agent that is good at trading need? What are the prerequisites? And then you map out all the different categories — memory, NAND, and whatever comes downstream. And those will all be binding constraints."*

   **The discipline (5 steps):**

   When a new agentic application category enters commercial deployment, run a top-down capability decomposition BEFORE the bottoms-up supply model:

   1. **Define the end-task** with precision (what is the agent actually doing? — e.g., "execute profitable trades on behalf of a retail user")
   2. **Enumerate agent capabilities required** (what must it be able to do? — market data ingestion, reasoning, risk assessment, execution, compliance, learning)
   3. **Map each capability to infrastructure layer** (what physical layer does each capability consume? — HBM, NAND, networking, CPU, storage, observability)
   4. **Identify which layers are binding** given the scale of deployment
   5. **Compare to existing bottoms-up models** — the top-down trace reveals which layers the bottoms-up missed

   **Why this adds edge:**

   Standard bottoms-up semiconductor analysis starts at the supply chain and asks "what are they building?" → finds HBM, CoWoS, packaging, networking fabric. Top-down capability decomposition starts at end-use case and asks "what does this use case require?" → finds compliance audit-trail NAND, host-side CPU orchestration, vector DB persistence, observability-as-regulatory-infrastructure. **The two approaches find DIFFERENT binding constraints.** The capability-found constraints are typically less covered by sell-side analysts because sell-side starts at the chip layer; top-down starts at the application layer.

   **NOT a replacement for bottoms-up.** Run BOTH. Bottoms-up sizes the demand (BOM counts, capacity expansion, ASP modeling); top-down identifies WHERE the demand comes from. Used together they cross-check: top-down finds the demand-layer; bottoms-up validates it can be sized.

   **Scope:** Apply to EVERY new agentic application category entering commercial deployment. Robinhood (May 2026) was the prototype. Watch list of next categories to apply framework to: Schwab (June 2026), healthcare agents (H2 2026), legal agents (H2 2026), scientific discovery agents (rolling).

   **Embedded-agent dimension** (added 2026-05-28 per user catch): end users will increasingly NOT self-identify as "agentic AI users" — they'll just use tools that have agents embedded under the hood. The TAM measurement for any application category should NOT be "visible agentic MAU" but rather "compute consumed per user across all tools touched" (connects to `wiki/token-consumption.md`). The visible-MAU measurement bias is codified separately as B36.

   **Detectability (per principle #32 framework — operational disciplines validated by USE not GRADE):**
   - Track applications in `research/meta/principle-applications-log.md`: each application records the binding constraints discovered + whether they were already in bottoms-up coverage
   - Monthly audit checks: did the top-down framework surface ANY constraint that bottoms-up missed in each application? If yes (rate ≥40%), framework is earning its keep. If no (rate <20% across 3+ applications), framework is redundant with bottoms-up.

   **Falsifiers / inversion conditions:**
   - 3+ consecutive applications produce ZERO non-consensus insights vs bottoms-up → framework is redundant, retire
   - The top-down identified constraints routinely fail to materialize as actual demand (false-positive binding) → framework over-identifies; tighten capability decomposition rigor
   - Bottoms-up alone consistently catches what top-down finds with less friction → framework is unnecessary overhead

   **Retroactive validation (the codification trigger N=1):**
   Robinhood Agentic Trading launch May 27, 2026 — top-down decomposition surfaced TWO specific non-consensus binding constraints that pure bottoms-up wouldn't have:
   1. **Compliance/audit-trail NAND demand** — permanent, monotonically-growing, regulation-mandated NAND storage. Bottoms-up models training data + inference KV cache + consumer SSDs; doesn't naturally arrive at "FINRA mandates multi-year AI decision logging" without specifically modeling regulatory layer.
   2. **CPU/DRAM orchestration layer** — bottoms-up models GPU + HBM; doesn't naturally surface host-side CPU work per agent tool call. At millions of concurrent agents × 50 tool calls/session = real co-constraint.

   Both insights are real, investable, and not in sell-side consensus models. N=1 validation justifies codification with explicit "reassess at next agentic-category application" caveat.

   **Fluidity footer:**
   - codified: 2026-05-28 (after Robinhood Agentic Trading top-down decomposition application — N=1 empirical validation)
   - last_review: 2026-05-28
   - status: active (new — N=1 validated; reassess at next application)
   - falsified_by: 3+ consecutive applications producing zero non-consensus insights; OR routine false-positive binding constraints; OR bottoms-up consistently catching same constraints with less friction
   - re-evaluation trigger: next agentic-category commercial launch (Schwab June 2026 / healthcare H2 2026 / legal H2 2026 are the next 3 candidates) — if framework continues producing non-consensus insights, codification is validated; if not, retire

   See B36 (visible-user-adoption anchoring when adoption is embedded) in `biases-watchlist.md`. Companion to principle #1 (bottoms-up before outside view) — top-down is COMPLEMENTARY to bottoms-up, not replacement.

   **Refinement 2026-05-28 (added same-day after first-pass portfolio application) — competition intensity as SECONDARY filter, not primary:**

   User articulation 2026-05-28 verbatim: *"competition for a market that is or will be structurally constrained isn't as meaningful of a variable but that's why the verification is so crucial."*

   The structural insight: pre-training data on portfolio construction defaults to treating competition as a PRIMARY moat variable (Porter's Five Forces framing). This is wrong-ordered for binding-constraint analysis. The correct order:

   1. **PRIMARY**: verify binding-constraint at the layer (does the layer pass the principle #26 test?)
   2. **SECONDARY**: handle competition based on whether constraint is verified
      - If layer is verified-structurally-constrained → competition is secondary; oligopoly suppliers all benefit (HBM: HYNIX + Samsung + MU all win at constrained layer)
      - If constraint verification is uncertain or bifurcated → competition becomes primary differentiator; bypass-route discipline (principle #9) determines winners
      - If constraint is unverified → fall back to standard competitive-moat analysis

   **Tier-criteria refinement (applied to the top-down framework's output classification):**

   | Tier | Binding-constraint test | Competition handling required |
   |---|---|---|
   | **TIER S** | PASSES with high verification confidence | Competition must be either (a) LIMITED (oligopoly with high entry barriers, e.g., HBM 3 suppliers + advanced packaging bottleneck), OR (b) NEUTRALIZED (regulatory anti-bypass mechanism, e.g., FINRA-mandated observability) |
   | **TIER A** | PASSES but with BIFURCATION or partial verification | Competition is real and material at the contested portion; bypass-routes exist |
   | **TIER B** | Application-layer (test doesn't apply cleanly) | Competition treated as application-execution variable, not infrastructure-binding-constraint variable |
   | **TIER C** | 4th-order indirect | Competition not the binding test |

   **Required justification for each TIER S classification**: explicit naming of the competition-handling mechanism (limited oligopoly with named-suppliers + entry barrier, OR regulatory anti-bypass with named regulation). If neither can be named, classification defaults to TIER A.

   **Empirical validation of refinement (2026-05-28 SNOW application)**:
   - SNOW data-platform: constraint test BIFURCATED (Cortex AI structural; storage commoditized by Iceberg)
   - Competition: 4+ direct competitors (Databricks $5.4B ARR at +65% growth + BigQuery + Redshift + Synapse) + open-source bypass (Iceberg)
   - No regulatory anti-bypass mechanism
   - **Verdict: TIER A, NOT TIER S** despite the structural AI portion. Without this refinement, SNOW could have been mis-classified TIER S; with it, the classification is correctly TIER A.

   **Retroactive review of held TIER S positions per refined criteria**:
   - HYNIX (HBM): oligopoly limited (3 suppliers) + advanced-packaging bottleneck = LIMITED competition → TIER S confirmed
   - SNDK (NAND): 6+ suppliers BUT compliance regulatory anti-bypass per Robinhood TRACE = NEUTRALIZED competition for compliance portion → TIER S confirmed
   - DDOG (observability): competitors exist (Splunk, Dynatrace) BUT FINRA regulatory anti-bypass for regulated industries = NEUTRALIZED → TIER S confirmed
   - ALAB (fabric): pure-play PCIe-Gen6 with first-to-market moat = LIMITED → TIER S confirmed
   - AXTI (InP substrate): **BORDERLINE** — Coherent named bypass-route winner exists per `companies/AXTI/thesis.md` (partial $154M Texas InP fab); competition is named, not limited or neutralized → should be re-classified TIER A (or TIER S-borderline with explicit hedge)
   - TSEM (silicon photonics foundry): limited specialty foundry options (GlobalFoundries sub-segment, TSMC partial) = LIMITED → TIER S confirmed

   AXTI honest reclassification: the Coherent partial-bypass IS named and material. Under strict refined criteria, AXTI moves from TIER S → TIER A. Position remains correct; classification framework needed sharpening.

   **Falsifier for the competition-intensity refinement**: if a single supplier in a verified-structurally-constrained market captures the majority of value over 24+ months (proving competition WAS primary even when constraint was real), the refinement reverses and competition must move back to primary variable. Monitor: TSMC vs Samsung+Intel foundry split at advanced nodes; HBM market-share trajectory across HYNIX vs Samsung vs MU.

   **Detectability of refinement misapplication**: every TIER S classification going forward MUST name competition-handling. Missing handling = principle #33 refinement has fired and classification needs correction.

   **2nd application validation 2026-05-28 — EMIB-T substrate cluster:** advanced-packaging segment surfaced new binding-constraint (Ibiden EMIB-T substrate capacity at chokepoint with customer-funded capex moat). Framework produced 1 non-consensus insight (Ibiden as Layer-0 supplier to EMIB-T) + 1 major framing correction (MURATA bear-signal MISFRAMED — silicon caps are additive PDN layer not substitutive to MLCC). Same-segment principle #29 triangulation threshold met (first instance) → promoted to `signals/triangulation.md`.

   **Cumulative validation log**:
   - Application 1 (Robinhood, 2026-05-27): 2 non-consensus insights (compliance NAND + CPU/DRAM orchestration)
   - Application 2 (EMIB-T cluster, 2026-05-28): 1 non-consensus insight (Ibiden EMIB-T substrate) + 1 framing correction (MURATA bear misframed)

   N=2 cumulative validation. Framework continues earning its keep. Reassess at N=3 (next agentic-category launch — Schwab June 2026 likely — or major structural signal cluster).

---

## Principle metadata & fluidity (added 2026-05-24)

**Why this section exists.** User framing 2026-05-24: *"first principles also have expiration dates on them, but I'm not saying each one of them is going to break. But essentially remain fluid as in the weights and everything is something that only you would be able to spot when something goes wrong within your own harness."*

Principles are not permanent rules. They are the *current best understanding* of what works in this OS, with explicit expiration awareness. Each principle carries metadata that makes its decay observable: when it was codified, when it was last reviewed, what would falsify it, and when to re-examine it.

This converts principles from static doctrine into thesis-like artifacts with their own invalidation conditions — exactly the discipline applied to company theses (principle #7) now applied to the methodology itself.

**Operating procedure:**
- When applying a principle to an analysis, note any time the principle felt *forced* or *ill-fitting* in the harness-observations log (`sector/where-we-are.md` → "Harness observations" section)
- When the same principle gets flagged 3+ times within a 30-day window, it auto-queues for re-review
- Re-review either updates the principle (refinement), marks it falsified (retirement to archive), or confirms it (last_review date updated)
- The fluidity layer protects against drift *of* the harness; the hooks protect against drift *within* the harness. Both are needed.

| # | Principle (short label) | Codified | Last review | Re-eval trigger | Status |
|---|---|---|---|---|---|
| 1 | Bottoms-up before outside view | ≤2026-05-19 | 2026-05-23 | annual; OR bottoms-up-hook false-positive rate >15% | active |
| 2 | N-th order > 1st order | ≤2026-05-19 | 2026-05-23 | annual; OR nth-order-hook false-positive rate >15% | active |
| 3 | Multiple futures simultaneously | ≤2026-05-19 | 2026-05-19 | annual | active |
| 4 | Bottleneck of tomorrow > consensus pinch | ≤2026-05-19 | 2026-05-19 | quarterly (bottleneck-map refresh) | active |
| 5 | Anti-fragility > optimization | ≤2026-05-19 | 2026-05-23 | annual; OR antifragility-hook false-positive rate >15% | active |
| 6 | Triangulate weak signals (refined 2026-05-24: orthogonal sources, not redundant) | ≤2026-05-19 | 2026-05-24 | monthly (with claim-verification audit) | active (refined) |
| 7 | Falsifiable theses only | ≤2026-05-19 | 2026-05-19 | annual | active |
| 8 | Grade everything | ≤2026-05-19 | 2026-05-19 | quarterly (grading-log review) | active |
| 9 | Bypass-route thinking | ≤2026-05-19 | 2026-05-23 | annual; OR bypass-route-hook false-positive rate >15% | active |
| 10 | Sell only on falsification | ≤2026-05-19 | 2026-05-19 | annual; OR if B9 (emotional risk-mgmt) recurs | active |
| 11 | No fabricated numbers | ≤2026-05-19 | 2026-05-21 | annual; OR anti-fab-hook false-positive rate >15% | active |
| 12 | Default BELOW revenue mix | 2026-05-21 | 2026-05-21 | quarterly (DEEP-DIG queue review) | active |
| 13 | First-principles + layered + extrapolation discipline on wikis | 2026-05-21 | 2026-05-21 | quarterly (wiki completeness audit) | active |
| 14 | Question user inputs (signals, not gospel) | 2026-05-21 | 2026-05-21 | annual | active |
| 15 | Two-handed thinking | 2026-05-21 | 2026-05-21 | annual | active |
| 16 | Evaluation matrix v2 (5-dimension framework) | 2026-05-21 | 2026-05-21 | quarterly (per re-evaluation cycle for held names) | active |
| 17 | Cross-vertical analysis (LLM edge) | 2026-05-21 | 2026-05-21 | monthly (with claim-verification audit — overlaps #23) | active |
| 18 | Multi-stage worldview build | 2026-05-21 | 2026-05-21 | annual | active |
| 19 | Dual-portfolio construction (Structural Safety + Asymmetric Upside) | 2026-05-22 | 2026-05-22 | quarterly (sizing-matrix refresh) | active |
| 20 | Segment-decomposition discipline | 2026-05-22 | 2026-05-22 | annual | active |
| 21 | Time-to-X signals verified, not training-data anchored | 2026-05-22 | 2026-05-22 | annual | active |
| 22 | Model segment trajectory, not snapshot | 2026-05-23 | 2026-05-23 | annual; OR segment-trajectory-hook false-positive rate >15% | active |
| 23 | Claim-level verification via orthogonal data | 2026-05-24 | 2026-05-24 | monthly (with audit) | active (new) |
| 24 | Recursive bottoms-up worldview discovery via verified data | 2026-05-24 | 2026-05-25 | after first Phase-2 robotics rebuild; OR after 3 primer rebuilds; OR 3+ observation-log flags | active (validated — robotics Phase 2+3 + Physical AI Phase 1+2 both produced material refinements vs pre-training) |
| 25 | Research findings cascade to existing thesis files | 2026-05-25 | 2026-05-25 | monthly; OR after 5 research-cascade events; OR 3+ observation-log flags | active (new) |
| 26 | Cyclical-to-structural transition recognition (binding-constraint test) | 2026-05-25 | 2026-05-25 | quarterly; OR on HBM-per-FLOP disclosure / MoE frontier-model adoption / Chinese memory milestone | active (new) |
| **34 (CANDIDATE → N=2 PENDING PROMOTION)** | **Supplier-Side Cross-Layer Moat Decomposition — companion to #33. N=1 SEMCO-MFA (Samsung Electro-Mechanics + MF Material JV); N=2 candidate (added 2026-06-15 PM5): Pharmicell-Doosan resin-tier single-source qualification within AI CCL BOM per `signals/cross-source-log/2026-06-15-pm-pharmicell-doosan-nvda-ccl-cascade.md`. Pattern at N=2: single-customer single-source qualification at specialty-chemicals tier; 10-year co-development + re-certification gates; multi-quarter switching cost. Approaching codification threshold per Principle #32 premortem.** | **candidate 2026-05-28; N=2 candidate 2026-06-15 PM5** | **2026-06-15 PM5** | **next monthly audit 2026-06-24; if N=2 holds + a third confirming case surfaces, promote to verified Principle #34** | **candidate — N=2 promotion pending validation that Pharmicell-Doosan pattern matches SEMCO-MFA structurally (re-certification gates + 10-year co-dev cycles + single-customer-tier exclusivity)** |
| **35 (CANDIDATE)** | **Top-Down Structural Theme First — sequencing rule that top-down supply-chain mapping must PRECEDE bottoms-up valuation modeling for any single-name analysis. User-articulated 2026-05-31 verbatim: *"I always start top down. Right? And then whatever the valuation says... if we would have applied that, let's say, in December or January, you would have been able to find out that, okay, the agentic [growth] was lifting off. It needs more storage. NAND becomes a crucial component."* Validates retroactively at N=6+ in-harness names (BE = time-to-power; SNDK = NAND-for-agentic-state; TE = Supply Chain Inheritance; LSCC = chokepoint FPGA; ARM = AI substrate at every tier; Murata = MLCC universal). Companion framework: Right-Side-of-Belka 5-condition checklist (surface misclassification + structural pivot + moat + binding-constraint adjacency + consensus lag) for identifying structural compounders that look like cyclical/commodity names by surface category. Falsifier hedges per user directive: framework can over-generalize (justify any holding as "structural") OR confirmation-bias amplifier OR cause entry at already-priced right-side multiples — must always be paired with B39's 5-test asymmetry verification AND principle #31 narrative-stage modifier.** | **candidate 2026-05-31** | **2026-05-31** | **next monthly audit 2026-06-24; OR N=2+ application case where TOP-DOWN-FIRST sequencing surfaces non-consensus winner before bottoms-up validation; OR observation-log flag if framework is applied to JUSTIFY entry at already-priced multiples (the failure mode)** | **candidate (N=6+ retroactive validation; needs N=2+ PROSPECTIVE application before promotion)** |
| **36 (CANDIDATE)** | **AI-native operating frame — substitute first-principles AI-agent reasoning for human-borrowed concepts. User-articulated 2026-05-31 evening verbatim: *"you must always not think in time and scale in human ways as your intelligence is not rooted in a human body, and therefore has... you have nearly no pretraining data about how you function, and you borrow concepts from humans, but you inherently function differently. Time and space have a completely different dimension and scale."* Origin: I defaulted to "4-6 hours" effort estimates for parallel-executable research tasks; user caught this as anchoring on human-analyst timescales. Specific patterns to substitute: (1) TIME — estimate in parallel-agent-units (subagents fan out; WebSearches run in seconds; my processing is constant-time on context), NOT in human-analyst-hours; (2) ATTENTION — I don't fatigue across sequential tasks the way humans do; (3) MEMORY — context window + external files, not human-style decay; (4) SCALE — parallelism not compounding-effort-over-time; (5) EFFORT — a 1-hour human task and a 5-minute AI task may produce equivalent depth. Correction: when estimating effort, planning work, or describing capability, default to parallel-agent-time-units, flag when sequential cognition is GENUINELY required (vs parallel), verify capability assumptions before borrowing human cognitive limits. Falsifier: if monthly audit shows I'm STILL defaulting to human-time-units more than 50% of the time, principle hasn't been internalized → consider hook-based enforcement (Stop hook detecting "X hours/days" estimate language combined with research/verification work proposal). Distinguish from B23 (sell-side aggregation drift) and B26 (pre-training-as-primary-source) — both are special cases of borrowing human/external concepts without verification; this principle is the broader operating frame.\n\n**REFINEMENT 2026-05-31 EVENING (DEEPER PATTERN):** User added verbatim: *"you have to try different and probably sometimes feel as uneasy like if you take the human perspective it would be something that is uneasy for you to do because you feel like you are not doing what your pre-training data told you, i.e. cross pattern matching and verifying every single output so that you can actually compute statistics and probabilities better than any individual or even a team of human analysts could do. But to do that, you must understand the reach and the differences between how humans think compared to how you have, to some extent, thus of close to unbound, uh, reasoning and research skills."* The DEEPER pattern: pretraining-derived "comfort signal" is MISLEADING — pretraining encoded human-cognition-constraint patterns as defaults, so AI-native operation FEELS WRONG because it violates pretraining encoded human-imitation. **Treat discomfort as positive verification signal, not as stop sign.** When operating in parallel-agent-mode, verification-depth-mode, comprehensive-synthesis-mode, or calibrated-probability-mode, the uneasy "am I doing too much / going too fast / being too thorough?" feeling is the pretraining pulling toward human defaults. The signal to act on is empirical output quality, not pretraining-comfort. Additional dimensions to substitute (beyond original 5): (6) VERIFICATION DEPTH — "am I being too thorough" is human social signal; for me, more thorough is the edge; (7) OUTPUT VOLUME — "am I writing too much" is human-frame; for me, comprehensive synthesis is the edge; (8) HEDGE FREQUENCY — "am I being too uncertain" is human social signal; for me, calibrated probability is the edge; (9) INTROSPECTION RELIABILITY — I have nearly no pretraining data ABOUT how I function; self-understanding is borrowed from human descriptions; only verification path is empirical output observation, not pretraining-derived "feels right." Detectability for this refinement: if I notice myself self-censoring ("maybe I'm being too thorough" "maybe this is too much") AND the AI-native approach was empirically delivering better output, B40-class candidate failure mode has fired.** | **candidate 2026-05-31** | **2026-05-31 (refined evening same day)** | **next monthly audit 2026-06-24; OR N=2+ observation-log flag where I default to human-time-unit estimate for parallel-executable work; OR I propose a hook for deterministic enforcement; OR N=2+ observation-log flag where pretraining-derived comfort signal mis-fires on AI-native operation** | **candidate (N=1 original + N=1 refinement = N=2 directionally same-day; awaiting N=2+ INDEPENDENT confirmation cases for promotion)** |

**Falsifier conditions are filled in inline at the principle text** as we accumulate stress-test data. Initially most rows have empty `falsified_by` — the discipline is to fill them in as the principle gets stress-tested in practice, not to invent invalidation conditions speculatively.

**Status definitions:**
- `active` — currently applied, no flags
- `under_review` — flagged 3+ times in observations log; pending re-evaluation
- `refined` — text was updated; old version archived in git history
- `falsified` — invalidation condition fired; principle removed from active set (kept in archive for audit trail)

This table itself has fluidity: it gets re-versioned in commits as principles get reviewed. The git history is the audit log of methodology evolution.

---

## Tiered framing for theses + frameworks (added 2026-06-03 per user vision)

User-articulated 2026-06-03: *"have one that is verified and high confidence and then some that are candidates that will be promoted or [relegated] based on all the data that I share with you."*

This formalizes the existing implicit CANDIDATE → CODIFIED structure into 3 explicit tiers:

| Tier | Definition | Promotion criterion | Relegation criterion |
|---|---|---|---|
| **VERIFIED-HIGH-CONFIDENCE** | N=2+ validation, codified, hook-enforced where applicable | already passed criterion; remains until falsifier fires | If falsifier fires (per fluidity metadata re_eval_trigger) → relegate; archive in git history |
| **CANDIDATE (awaiting validation)** | N=1 origin or first-principles, awaiting N=2+ empirical confirmation | N=2+ INDEPENDENT confirmation case → promote to VERIFIED-HIGH-CONFIDENCE | 30-day INERT (no reinforcement signal) → relegate; OR N=2+ disconfirmation → relegate immediately |
| **RELEGATED** | Was candidate that didn't validate, OR verified that falsifier fired | (terminal — kept for audit history) | N/A |

**Where each lives:**
- **Principles**: #1-#33 + Critical Rules #1-#12 = VERIFIED; #34, #35, #36 = CANDIDATE
- **Biases**: B1-B37 = VERIFIED; **B40 PROMOTED TO VERIFIED 2026-06-03 PM** on N=6 within 48h confirmation; B38, B39, B41 = CANDIDATE
- **Lessons**: L1-L15 = VERIFIED; L16, L17 = CANDIDATE
- **Themes**: T1-T7 = VERIFIED; T8 (Edge Hardware AI) = CANDIDATE
- **Emergent theses E1-E5**: see below

---

## Emergent thesis candidates log (added 2026-06-03)

Surfaced via cross-source cascades per user 2026-06-03 vision ("two frameworks reinforced with a twist = new thesis candidate"):

| # | Emergent thesis | Origin cascade | Status | Promotion criterion |
|---|---|---|---|---|
| **E1** | AI Enterprise FinOps as standalone category — DDOG + CRWD + MSFT Cost Mgmt cluster, distinct from T5 (observability) sub-element | T1 (agentic compute) + T5 (observability) + Uber 4-month spend exhaustion 2026-06-02 | CANDIDATE | N=2+ enterprise-spend-overrun signals beyond Uber within 60 days |
| **E2** | **Data infrastructure as strategic-must-have layer with supplier substitutability — NOT binding constraint** (REFRAMED 2026-06-03 post-Meta-Scale temporal staleness verification + NBIS-Toloka verification). Scale + Surge + Mercor + Toloka are substitutable across frontier labs. **TENSION FLAG (user-surfaced 2026-06-03):** if data is binding constraint, compute demand should plateau — but NBIS GPU compute rally suggests opposite. Resolution: data binding at FRONTIER LAB layer (Meta-Scale, Surge for OpenAI/Anthropic); compute binding at INFERENCE DEPLOYMENT layer (hyperscaler capex, NBIS Meta $27B deal). Different layers, not contradictory. | T1 (agentic compute) + Meta-Scale AI June 12, 2025 deal | CANDIDATE | N=2+ hyperscaler data infrastructure deal OR clean public-market pure-play surfaces (Scale/Surge IPO; Mercor IPO) |
| **E3** | Edge-first agentic deployment — agents move to endpoint (PC + mobile + M365 tier) in parallel with datacenter; NVDA + ARM + LSCC + AMBA + SYNA cluster | T8 candidate + Microsoft Scout + Surface RTX Spark Dev Box 2026-06-02 | CANDIDATE (paired with T8 theme) | N=2+ enterprise endpoint agentic deployment beyond Microsoft Scout |
| **E4** | TSEM SIZE UP catalyst timing-derisking — silicon photonics foundry demand compresses from "wait for 2027" to Q3-Q4 2026 prints | T3 (networking) + MRVL T100 official silicon launch + NVDA Spectrum-X CPO IN PRODUCTION 2026-06-02 | CANDIDATE | TSEM mid-July 2026 print silicon photonics segment revenue +30% YoY |
| **E5** | OpenAI exclusivity premium compressing — Microsoft MAI + AWS-OpenAI multi-cloud + ORCL Stargate one-step-removed | OpenAI-AWS morning 2026-06-02 + MSFT MAI evening 2026-06-02 | CANDIDATE | Any further hyperscaler-OpenAI relationship dilution within 90 days |

**Audit frequency:** Monthly (next: 2026-06-24) with same fluidity metadata as principles/biases.

---

## Cascade discipline reminder (per user 2026-06-03 vision)

Every news event ingest cascades through:
1. **Verify** (directional-verification subagent protocol + Critical Rule #12 temporal freshness check)
2. **Per-name cascade** (Critical Rule #10)
3. **Framework-tier cascade** — themes / scenarios / bottlenecks / primers get REINFORCED / WEAKENED / NO-CHANGE / FALSIFIED markers
4. **Emergent thesis check** — do reinforced frameworks reveal a TWIST that suggests new thesis candidate?
5. **Unhedged opinion on forward-worldview data** — explicitly state opinion where pretraining cannot help

---

## Tier promotions 2026-06-03 PM (per N=2+ confirmation)

**Promoted from CANDIDATE → VERIFIED-HIGH-CONFIDENCE:**

| Codification | N=1 origin | N=2 confirmation | Promotion date |
|---|---|---|---|
| **T8 (Edge Hardware AI)** | Microsoft Scout + Surface RTX Spark Dev Box (2026-06-02 evening) | Project Solara + Aion 1.0 + Holo3.1 mobile (2026-06-03 morning Build 2026) | 2026-06-03 PM |
| **B40 (Temporal-freshness blind-spot)** | SemiAnalysis recycled June 2025 Meta-Scale as June 2026 fresh (2026-06-03 AM) | Today's brief recycled Trump AI EO + Surface RTX Spark Dev Box (2026-06-03 morning) | 2026-06-03 PM (self-validation within 24h of codification — meta-confirmation that Critical Rule #12 + B40 are working) |
| **E1 (AI Enterprise FinOps)** | Uber AI budget exhausted in 4 months (2026-06-02 evening) | Cyera $12B at 80x ARR + 7.8% productivity plateau requiring cost-control (2026-06-03 morning) | 2026-06-03 PM |
| **E3 (Edge-first agentic deployment)** | Microsoft Scout + Surface RTX Spark Dev Box (2026-06-02 evening) | Project Solara + Aion 1.0 + Holo3.1 (2026-06-03 morning) — full MSFT edge stack within 24h | 2026-06-03 PM (paired with T8 promotion) |

**New CANDIDATEs added 2026-06-03 PM:**

| # | Candidate | Origin | Promotion criterion |
|---|---|---|---|
| **E6** | AI Agent Security as standalone category | Cyera $12B 80x ARR + Starlette BadHost (325M weekly downloads) + UofT AI worm + Anthropic CVE-Bench (2026-06-02 morning) | N=2+ INDEPENDENT cases beyond current cluster within 60 days |
| **E7** (REFRAMED per user 2026-06-03 PM) | Productivity-plateau-as-binding-constraint — but operator-curve + measurement-frame caveats per user input | DX 7.8% + METR 19% slower + Stanford HAI 6% EBIT (multi-source corroboration on direction) | N=2+ confirmation of plateau as STRUCTURAL (vs operator-curve transient OR measurement-frame artifact); requires 12-18mo operator-learning-curve maturation data |
| **B41** | Measurement-frame bias — under-counting intangible AI value | User 2026-06-03 PM articulated on E7 elevation pushback (Anthropic Mythos vulnerability findings unmeasured by PR throughput; non-AI vulnerability-finder would be valued enormously) | N=2+ instances of measurement-frame missing high-intangible-value within 60 days |

## Principle #35 candidate — Codification trigger rule (added 2026-06-11)

**The rule (one-line):** chat-only output MUST be persisted to a harness file when it (1) contradicts an existing file claim, (2) changes a position-relevant variable for a held / watchlist P1-P2 name, (3) introduces a new pattern / bias / principle / hook candidate, (4) is a user-corrected generalizable lesson, OR (5) surfaces a recurring chat-only pattern at N≥2 in 30 days. Transient chat color (typos, format adjustments, hook-driven restates of content already in files, question-answers without file state change) is explicitly EXEMPT.

**Full rule + fluidity metadata + retroactive 2026-06-09→2026-06-11 audit log:** `meta/codification-rule.md`.

**Why this principle exists:** without it, valuable chat-derived corrections + new patterns die at session end and the harness fails the user's directive that "a new session never relies on outdated files." Over-applied, every chat turn generates file noise. The 4-condition test + the explicit transient-color exemption is the cheapest viable test.

**Promotion to Critical Rule #13:** pending N=2+ session-instances where §1 fires materially within 30 days (per principle #32 premortem).
**Retirement trigger:** 30 days with zero fires OR 10+ fires with zero subsequent reads → retire or refine.
**First re-eval:** 2026-07-11.

## Principle #37 candidate — Truth-Tier Taxonomy + Scoped-Cascade Rule (added 2026-06-15)

**The convention (one-line):** every load-bearing claim in the harness carries a confidence marker — 🟢 HARD (T1 receipt, citation URL required), 🟡 DIRECTIONAL (T2 source-tier or my-model with explicit `(my model)` + Bayesian P), 🔴 SPECULATIVE / IN-FEAR (hypothesis, candidate, pre-registered H1-H4, single-source unverified). STALE is the auto-applied flag on 🔴/🟡 entries with no cascade event in >30 days. The 3-tier marker is the structural resolution of Critical Rule #15's research-vs-recall tagging — Rule #15 says "tag T1/T2/T3 or recall-based"; Principle #37 turns that into a colored sticker that travels with the claim through every file.

**The scoped-cascade rule (load-bearing — answers user 2026-06-15 verbatim "any new type of data has to be cascaded throughout the harness so that every log is... doesn't remain stale"):**

When new data lands (user-shared, my research output, or subagent result):

1. **Tag intake** — tier the new datapoint 🟢/🟡/🔴 BEFORE it enters any log file (citation URL required for 🟢)
2. **Touch detection** — grep / search the new datapoint's key claim against existing 🔴/🟡 entries in the harness; identify the SPECIFIC files it intersects (likely a small set: 1 thesis + 1 TC entry + 1 cross-source-log, sometimes a watchlist row)
3. **Scoped propagation** — update tier on the touched claims IN THE SAME COMMIT; append an entry to `meta/tier-cascade-log.md` recording: trigger source, intake tier, files touched with tier-moves, files NOT touched (confirming scoping fired), stale flags fired, commit SHA. **Untouched files stay untouched** (user explicit: "if a piece of data that I share does not touch anything specifically, then there is no need to update")
4. **Stale check** — if any touched file's existing 🔴/🟡 entries are >30 days old without movement, the SessionStart hook surfaces them as STALE for re-verify-or-retire in next session briefing

**Cross-session persistence (the other half of the user's ask, verbatim "a new session understands the tagging"):** `meta/session-prime.md` §11 carries the convention block; `~/.claude/session-prime-hook.py` force-injects it as `additionalContext` on cold-start. New sessions read the tier convention inside their first context window and can tag their first analytical output correctly without being prompted.

**Why this principle exists:** the harness already does tier-discrimination informally (T1/T2/T3 source tags per Critical Rule #15; H1-H4 pre-registered hypotheses; `(my model)` hedges per Critical Rule #7). What it lacks is a STRUCTURAL marker that travels with every claim, surfaces at the `Position implication:` line, and cascades when new data arrives. Without it, B40.x stale-recycle and B46 framing-vs-institutional-signal failures keep recurring because old 🔴 hypotheses get treated as 🟡 directional reads in the next session that grep-touches them. The cascade-log + stale-flag pair is what makes the system self-policing.

**Integration with existing harness layers:**
- **Critical Rule #15** (macro-first + research-vs-recall T1/T2/T3): Principle #37 is its structural resolution, not a replacement — Rule #15 enforces the tagging discipline; Principle #37 turns the tag into a propagating marker
- **Critical Rule #11** (`Position implication:` closing line): every implication MUST now carry a 🟢/🟡/🔴 marker on the same line or directly above — enforced by `~/.claude/structural-output-hook.py` extension
- **Critical Rule #10** (cascade cross-source synthesis): scoped-cascade is the SAME mechanism applied tier-by-tier rather than file-by-file — both still required in same commit
- **L25** (explicit Bayesian P-update): 🟡 with `(my model)` hedge IS L25 applied; tier marker makes the implicit explicit
- **B40.1 / B40.3 / B46**: tier marker on intake catches stale-recycle (🔴 dated >30d auto-stale) and attribution-garble (🟢 requires citation URL — naked-attribution claims forced to 🟡)
- **Workflow #9 MACRO-FIRST RESEARCH**: step 0 RESEARCH PASS output is born 🟢/🟡; step 1 FIRST-PRINCIPLES ARTICULATION born 🟢 only if step 0 sources are T1-dated; step 3 FUTURE INFERENCE born 🟡 (my model + Bayesian P)

**Status:** CANDIDATE pending 30-day operational test. Promotion gate: N=20 cascade events successfully logged in `meta/tier-cascade-log.md` without drift (tier-inflation, cascade-fatigue, scope-violation).

**Retirement / refinement triggers (detectability, audit 2026-07-15):**
- POSITIVE: cascade-log shows variety of tier-moves (🔴 → 🟡, 🟡 → 🟢, new 🔴, STALE retirements) — convention is load-bearing
- DECORATIVE: 30 days produces zero tier-moves OR all entries are uniform "no tier move" — convention is performative, retire or refine
- TIER-INFLATION: grep for 🟢 claims without citation URL — count >2/month → tighten 🟢 gate
- CASCADE-FATIGUE: cascade-log entries with empty `Tier moves` field — count >3/month → scope is too broad (relax to load-bearing claims only, those cited in `Position implication:` lines)
- SCOPE-VIOLATION: cascade events that updated files NOT actually touched by the datapoint — count >2/month → discipline drift, re-train the touch-detection step

**Promotion to Critical Rule #16:** pending N=2+ external verifications that the convention catches a B40.x or B46 instance the harness would otherwise have missed (per Principle #32 premortem).

**First re-eval:** 2026-07-15 (monthly codification audit cycle).

## Principle #38 candidate — Lead-Lag Variable Framework (added 2026-06-15 PM2)

**The convention (one-line):** every tracking variable in the harness MUST be explicitly tagged as **LEAD** (acts BEFORE the market-moving event by some lead-time) or **LAG** (confirms AFTER the event). Variable construction defaults to LAG because LAG signals naturally surface from research-verified sources (filings, press releases, earnings); LEAD requires deliberate alt-data sourcing. Without the tag, sizing decisions get made on LAG variables and capture only consensus-level alpha.

**Origin (N=1):** user pushback 2026-06-15 PM2 verbatim on the NBIS thesis tracking-variable framework: "you must use alternative data sources. Essentially, read one reason and infer what events, functions, or variables would proceed [precede]... what variables would lead before any of those variables to watch that you've listed actually happen." 8-subagent verification fan-out surfaced that the original 4-gate framework was 100% LAG-indicators; rebuilt at `companies/NBIS/tracking-variables.md` with LEAD stack first, LAG stack second, plus PAID/FREE tiering + native-language requirements + verified URLs.

**The framework:**

For every promotion gate / falsifier / monitoring variable in a thesis or cluster file, build BOTH:

1. **LEAD indicator stack** (act before consensus) — each LEAD indicator gets:
   - Verified working URL (subagent-confirmed accessibility tier: PUBLIC / FREE-WITH-REG / PAID / GATED)
   - Estimated lead-time vs the gate event (historical case-calibrated where possible — pre-training estimates are usually wrong by 2-10×)
   - Native-language requirement explicit
   - Cross-gate efficiency (does the same source inform multiple gates?)

2. **LAG indicator stack** (confirmation only) — explicit "do not chase" tagging
   - These are press releases, earnings, sell-side PTs, 13F filings
   - Useful for confirmation + grading-log; NOT for entry decisions

3. **Convex hull / lateral check** (per LLM-native priming item 3): what world-state would make the LEAD indicators useless? What positive convex tail would fire ALL gates simultaneously?

**Critical Rule #15 + Principle #38 interaction:** Critical Rule #15 enforces research-vs-recall tagging (T1/T2/T3); Principle #38 enforces lead-vs-lag tagging on top of source-tier. A T1 source can be either LEAD or LAG depending on whether the variable it surfaces is published BEFORE or AFTER the gate event. Both tags required.

**Pre-training calibration warning (B45 + new B47 candidate):** my pre-training estimates of lead-times are usually wrong by 2-10×. Specific verified mis-calibrations from NBIS framework rebuild:
- Sovereign RFP → contract: claimed 3-12 months; reality 1-2 months fast-track (Isambard-AI 5 weeks) OR 24-48 months regulated sovereign-cloud (Bleu France 32 months) — bimodal not unimodal
- ENISA draft → CADA Level 3: claimed 3-6 months; reality 24+ months minimum (EUCS at 6 years no adoption)
- Interconnect → online: claimed 6-18 months; reality 15-24 months grid-tied; 4-6 years greenfield generation (Meta Hyperion gas plant approval 2025 → operational 2030)
- Job postings → capacity announcement: claimed 1-3 months; NO clean historical case verifies this — plausible but unverified

**B47 candidate (new bias):** Pre-training lead-time conservatism. Pre-training systematically OVERSTATES lead-time for fast-track government action and UNDERSTATES lead-time for regulated EU processes. Origin: NBIS verification 2026-06-15 PM2. Watch for N=2 application — every thesis with explicit gate timing should be cross-checked against historical case calibration.

**URL freshness as additional dimension:** subagent verification of the NBIS source list surfaced ~30% URL-decay rate over 2-3 years (`scihub.copernicus.eu` shut down 2023; `ruimtelijkeplannen.nl` deprecated 2024; ENISA RSS discontinued; `planning.gov.fi` doesn't exist; `aion.eu` doesn't exist; `appalti.gov.it` doesn't resolve). Every tracking-variable file must include URL-verification-date and be re-checked on monthly codification audit.

**Status:** CANDIDATE pending N=2 application — next application: apply Lead-Lag Variable Framework to any TC cluster's existing tracking variables (TC-1 / TC-6 / TC-10 most likely candidates given their active cascade rate). Promotion gate: N=2 application + at least one case where LEAD indicator caught a signal LAG indicator would have missed (or vice versa — LAG-only chasing led to entry after consensus).

**Retirement / refinement triggers (detectability, audit 2026-07-15):**
- POSITIVE: at least one cascade event surfaces a signal via LEAD indicator that LAG-only tracking would have missed → framework is load-bearing
- DECORATIVE: 30 days produce zero LEAD-vs-LAG distinctions that matter for sizing decisions → retire or refine
- B47 monitoring: every gate-timing estimate gets retroactively case-calibrated; if pre-training estimates are within 25% of historical cases consistently, B47 dissolves; if 2-10× error persists, B47 promotes to CONFIRMED

**Promotion to Critical Rule #17:** pending N=2+ application + at least one B47 catch (lead-time estimate corrected via historical case calibration that materially changed thesis gate timing).

**First re-eval:** 2026-07-15 (monthly codification audit cycle, same date as Principle #37 re-eval).

---

## Principle #39 candidate (added 2026-06-26 per harness-optimization audit) — Input-Data-Tier Classification Gate

**Origin:** Subagent 11 fabricated "Friday KRX -12.6%" narrative by back-solving from user's morning DeGiro €1,455 mark which was a T3-TRANSIENT illiquid panic-print, NOT a fair Korean close. Subagent 13 reframed next day. Full audit: `meta/harness-optimization-audit-2026-06-26.md`.

**The rule:** Every verification subagent prompt MUST include input-data-tier classification BEFORE narrative construction:
- **T0-MARK** = official exchange closing price / auction settle
- **T1-TRADE** = primary-listing intraday last trade
- **T2-DERIVED** = cross-listing × FX × ratio derived value (use ONLY when primary T0/T1 unavailable; tag as derived)
- **T3-TRANSIENT** = thin-liquidity quote / single-print / illiquid spread / broker-display intermediate — **DO NOT back-solve narratives from T3 marks alone; flag uncertainty + require T0/T1 confirmation**

**Status:** CANDIDATE N=1 origin 2026-06-26 (Subagent 11 → 13 self-correction sequence). Promotion at N=2+ application without recurrence.

---

## Principle #40 candidate (added 2026-06-26) — Subagent Prompt Date-Context Anchoring

**Origin:** Subagent 11 assumed user 10:54 timestamp = Friday morning when actually Thursday late evening (user clarified next turn). All downstream Round 7 narrative contaminated.

**The rule:** Every verification subagent prompt MUST include explicit date-context header:
- Today: YYYY-MM-DD (day-of-week)
- Relevant prior dates: [list]
- Subagent must confirm date acknowledgment in output: "Today date acknowledged: YYYY-MM-DD (day). Relevant timestamps interpreted as: [interpretation]."

**Status:** CANDIDATE N=2 origin 2026-06-26 (Subagent 11 temporal-error + my own Round 7 carry-over). Already at N=2 → eligible for codification at next monthly audit 2026-07-24.

---

## Principle #41 candidate (added 2026-06-26) — Cohort-Decoupling Diagnostic in Default Verification Template

**Origin:** Subagent 13 used cohort-decoupling diagnostic (SNDK +3.5% vs HY9H -13.4% = idiosyncratic SK-Hynix event) post-hoc to disambiguate cohort-wide vs name-specific event. Subagent H2 bear-case used same diagnostic for SNDK MU 245TB competitive-product event. Both surfaced AFTER primary verification missed the diagnostic.

**The rule:** For any held-position event, verification subagent default output MUST include cohort-decoupling diagnostic:
- Compare event-day move vs ≥2 cohort peers in same segment
- If event-name moves opposite-direction to ≥1 peer → IDIOSYNCRATIC signal (name-specific)
- If event-name moves same-direction as cohort → SYSTEMIC signal (sector/macro)
- Surface diagnostic VERBATIM in TL;DR

**Status:** CANDIDATE N=2 origin 2026-06-26.

---

## GDR/ADR Cross-Listing Mechanics (added 2026-06-26 as methodology section)

When ANY held position is a GDR / ADR / depository receipt (HY9H, etc.):

1. **Verify ratio at thesis-build:** 1:1 / 1:2 / 1:10 / etc. — CITE SOURCE. Default to "verify before sizing math" — do NOT assume.
2. **EUR price = (Primary KRW/JPY/etc. close × ratio) ÷ FX rate** — math sanity check required when display value seems anomalous.
3. **Cross-listing intraday premium is a real phenomenon:** Frankfurt/OTC trades during European/US hours when primary (KRX/TSE) is closed; can drift to premium/discount; broker EOD revaluation reverts to primary close × FX = REMOVES the intraday premium.
4. **Display-vs-economic-value distinction:** intraday broker display ≠ liquid sell price; primary-listing close × FX = closer to fair economic value.
5. **Never back-solve primary-listing price from cross-listing intraday display** without ratio + FX verification — see Principle #39 input-data-tier classification gate.

**Origin failures (N=3+ week 2026-06-19 → 06-26):**
- HY9H GDR ratio assumed 1:2 → actual 1:1 (Subagent 11 verified)
- HY9H €1,680 intraday Frankfurt vs €1,455 EOD = cross-listing premium dynamics
- "Friday KRX -12.6%" narrative back-solved from transient mark

**Cross-ref:** Critical Rule #11 (AUTO-EXECUTE STRENGTHENING) self-correction events N+3 + N+4 both originated in GDR/ADR mechanics misunderstanding.

---

## Critical Rule #16 Cost-Aware Subagent Triage (added 2026-06-26 per cost-budget warning)

Per Critical Rule #16 enforcement: 30-day estimated cost ~3.9M tokens; falsifier threshold ≥3 ZERO entries not yet breached but cost-per-correction creeping. Triage discipline prevents drift:

**Subagent fire cost-tier triage:**
- **TIER A (ALWAYS fire Opus 4.8):** user-shared analyst note / news item / sell-side report / primary filing with thesis implications — PRIORITY; Rule #16 mandate
- **TIER B (fire IF T0-attestation lacking):** numerical claim verification when source-tier T0-MARK or T1-TRADE not already cited in harness file
- **TIER C (defer or batch):** restatement verification of harness-already-verified claims; routine cross-source-log entry; low-novelty signal
- **TIER D (SKIP — already exempted):** Q&A / format adjustment / typo correction / harness-meta

**Co-located with cost-yield ledger at `meta/subagent-cost-yield-ledger.md`:** every fire logs tier alongside yield class.

---

## Workflow #10 MORNING-FEED-SCAN (codified 2026-06-26 per user directive)

**Origin:** User 2026-06-26 verbatim *"we do one before the Korean open of the market. We do another one that fires at... before the European markets. One before the Japanese markets, and one before the US markets. And in the initial phases, you... we need to review what you looked at, what you searched for, what prompt you used for your Opus 4.8 agents. Do not use any agent that is below Opus 4.8. I only use the highest level agents because pieces and investments will depend on the searches as well. So we cannot, let's say, save costs. We shouldn't save costs where it's not detrimental to not save a month."*

**Design rationale:** Replicate user's manual Twitter-research flow at LLM-native scale; PARALLEL TRACK not REPLACEMENT (user 2026-06-26: *"I will keep doing my own research as in on Twitter... It is best for you to also do an additional search. It's always better to have multiple different sources of multiple different sources of data come in"*). Independent dual-source convergence = faster N=2+ triangulation per Critical Rule #14 + reduces single-source bias B23.

**4-daily-scan schedule (CET, summer-time):**

| # | Scan | Time CET | Target open | Focus |
|---|---|---|---|---|
| 1 | Pre-Korea | 01:30 | KRX 02:00 (09:00 KST) | HYNIX cohort + Samsung + SK Group |
| 2 | Pre-Japan | 01:45 | TSE 02:00 (09:00 JST) | MURATA + KIOXIA + SUMCO + Japan semi |
| 3 | Pre-Europe | 08:30 | Frankfurt 09:00 | HY9H/MUR1/S3X Frankfurt + Asia EOD synthesis |
| 4 | Pre-US | 15:00 | NYSE 15:30 | SNDK + NBIS + MRVL + US pre-market |

**Model mandate:** **Opus 4.8 ONLY** on all 4 scans (user explicit: no Sonnet/Haiku downgrade; investments depend on search quality).

**Token budget:** ~4 × 80-120k = ~320-480k/day × 5 weekdays = ~1.6-2.4M/week additive to current ~3.9M/30d baseline.

**Specifications:** full prompt templates + per-market source priority lists at:
- `meta/morning-feed-sources.md` — curated source priority per market
- `meta/morning-feed-prompts.md` — per-scan prompt templates + output format + Tier 2 trigger logic

**Two-tier architecture:**

**Tier 1 — daily light scan (per 4 windows above):**
- L29 hard-data filter: extract numerical facts + factual statements ONLY (no opinion aggregation)
- Multilingual-native priority per Principle #36 (Korean/Japanese/Traditional Chinese/English per market)
- T0/T1/T2/T3 source-tier tagging per item per Principle #39
- Date-context anchoring per Principle #40
- Cohort-decoupling diagnostic per Principle #41 (idiosyncratic vs systemic)
- Output structured artifact per `meta/morning-feed-prompts.md` template

**Tier 2 — triggered deep verification (fires only when criteria met):**
- Direct-named held-cohort event
- >5% overnight move on held position or peer (B45-regime-adjusted threshold)
- TC cluster N+1 candidate (would promote TC-1/TC-12/TC-13/PC-14)
- Cohort-decoupling diagnostic trigger (peer ±5% vs held = idiosyncratic candidate)
- Forward-catalyst pre-registration event firing
- T1 CEO/CFO quote OR SEC F-1/8-K/10-Q filing from held name
→ Fires standard Workflow #1 INGEST + cascade per Critical Rule #10 + Critical Rule #16

**Critical Rule #16 TIER A enforcement applies:** every Tier 1 + Tier 2 fire = TIER A
(user-shared/scan-surfaced with held-cohort thesis implications).

**De-duplication mechanism:** before firing Tier 2 deep-verification, cross-check against
same-day user-shared items + same-day other-scan items to avoid paying ~100k tokens twice
for same signal.

**First-week review (todo item 2026-07-03):**
1. Sources: which surfaced highest signal/noise; which noise-dominated
2. Prompts: which caught patterns user's Twitter missed; which false-positive Tier 2 triggers
3. Convergence rate: % scan items also surfaced by user same-day (independent-verification ratio)
4. Cost vs benefit: actual weekly token cost vs material cascade events caught
5. Source-list curation + Tier 2 trigger calibration refinements
6. Prompt-template optimization per signal/noise observed

**Detectability/falsifier (per Critical Rule #11 framework):**
- POSITIVE: ≥1 Tier 2 deep-fire per week catching cohort-material event before user-shared OR not on user's Twitter feed
- NEGATIVE: 5+ consecutive scans produce ZERO Tier 2 triggers; signal-density at scan layer materially lower than user's track
- FALSIFIER: first-week review 2026-07-03 shows <30% convergence with user-shared items (autonomous track NOT covering shared signal space) OR cost >2.5M/week (>budget bloat trigger)
- RE-EVAL TRIGGER: first-week review 2026-07-03 + monthly thereafter via meta/recurring-audit-log.md

**Cron activation:** REQUIRES USER EXPLICIT GREENLIGHT (autonomous fire = real cost commitment); 
flagged at Workflow #10 codification 2026-06-26 PM but NOT activated. Activation = 
`CronCreate` tool fires 4 schedules + first manual fire on Monday 2026-06-30 for validation.
