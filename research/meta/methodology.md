# Methodology

**Last updated:** 2026-05-20

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

1. **Bottoms-up before outside view.** Build a unit model from supply, capacity, ASP, mix. Then compare to consensus. NEVER start with sell-side and adjust.
2. **N-th order > 1st order.** The investable insight is usually 2nd or 3rd order, not the obvious direct effect. Always TRACE before concluding.
3. **Multiple futures simultaneously.** Hold ≥3 scenarios at once. Names that win in many are higher-conviction than names that win in the most-likely one.
4. **Bottleneck of tomorrow > consensus pinch of today.** Trade on the constraint becoming binding in 12–24 months, not the one already in the news.
5. **Anti-fragility > optimization.** Prefer picks-and-shovels that win across futures over names that need a specific future to be right.
6. **Triangulate weak signals.** A single source is noise. Three sources within 90 days is signal.
7. **Falsifiable theses only.** Every thesis has written invalidation conditions. If a condition fires, the thesis changes.
8. **Grade everything.** Every forward call gets logged + graded. Lessons accumulate.
9. **Bypass-route thinking.** For any binding constraint, the consensus solution rarely contains the edge. Ask: "What do consumers do when the consensus solution fails their actual sensitivity?" The answer surfaces non-consensus names. See the **Time-to-X framework** below.
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
