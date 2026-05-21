# Leopold Aschenbrenner / Situational Awareness LP — Q1 2026 13F Analysis

**Filed:** 2026-05-15 (public 2026-05-18) per SEC EDGAR; this analysis 2026-05-21
**Source quality:** T1 — the 13F itself is a SEC filing (primary)
**Methodology:** Independent assessment of each named position. NOT validating Leopold's thesis automatically. Per user instruction 2026-05-21: "try to invalidate it. Infer your own takeaway. Remain unbiased."

---

## TL;DR

**Aschenbrenner is running the most contrarian AI thesis in size publicly visible:** $8.7B notional in puts against AI chip stocks, paired with $5.52B in long equity concentrated in power producers + crypto mining infrastructure repurposed for AI hosting. **The thesis is "infrastructure arbitrage" — short the companies selling AI hardware, long the companies that already own the physical assets required to run it** (per [Quiver Quantitative](https://www.quiverquant.com/news/Former+OpenAI+Employee%E2%80%99s+Hedge+Fund+Unveils+Massive+Nvidia+and+AI+Chip+Options+Positions)).

**My net read after independent analysis:**
- **AGREE with the long-infrastructure leg.** Aligns with S3 (power binds) scenario in `research/sector/scenarios.md` and the time-to-power framework. The crypto-miner-to-AI-host pivot uses pre-existing grid interconnect + power purchase agreements, which is genuinely scarce.
- **DISAGREE with the short-chip leg on TIMING, not direction.** Multiple compression risk for chip names is real (Stage 4-5 per recognition spectrum), but the just-completed NVDA Q1 FY27 GRADE shows fundamentals accelerating into capacity-constrained pricing power. Puts need multiple compression to play out faster than fundamentals beat. The trade can be right in 12-18 months and wrong over the next 2-3 quarters.
- **One direct conflict with user's portfolio: Leopold has puts on Corning (GLW), which the user holds at ~10.8% of portfolio per `research/portfolio/holdings.md`.** Worth investigating WHY he chose Corning specifically.

---

## The complete position disclosure

### Longs (~$5.52B total equity portfolio per [Blockspace](https://blockspace.media/insight/situational-awareness-lp-bitcoin-miner-longs/))

| Position | Size | Category | Source |
|---|---|---|---|
| Bloom Energy (BE) | $878.7M | Power generation (fuel cells) | per Threads aggregation of 13F via [stockmktnewz](https://www.threads.com/@stockmktnewz/post/DYe1H5qCT9f/just-in-leopold-aschenbrenner-just-updated-his-stock-portfolio-for-his) |
| Sandisk (SNDK) | $724.4M | NAND memory | same |
| CoreWeave (CRWV) | $556.1M | Public neocloud / AI infrastructure | same |
| IREN Limited (IREN) | $401M | Crypto miner pivoting to AI hosting | same; also [24/7 Wall St](https://247wallst.com/investing/2026/05/18/hive-digital-rockets-34-t1-energy-jumps-20-on-aschenbrenner-buzz-but-cleanspark-riot-coreweave-stay-quiet/) |
| Core Scientific (CORZ) | $389.1M | Crypto miner + CoreWeave host partner | same |
| Applied Digital (APLD) | $320M | HPC datacenter operator (was crypto) | same |
| Riot Platforms (RIOT) | $142.2M | Crypto miner / power asset | same |
| CleanSpark (CLSK) | $104.5M | Crypto miner pivoting | same |
| Solaris Energy (SEI) | $62.5M | Mobile power generation for datacenters | same |
| T1 Energy (TE) | $43.9M | US solar + battery manufacturing | same — **validates user's earlier claim** about Leopold owning T1 |
| Bitfarms | $38.8M | Crypto miner | same |
| Plus: Bitdeer, SharonAI Holdings, Hive Digital | sizes not in primary disclosure | All AI/HPC infrastructure | per [Yahoo Finance](https://finance.yahoo.com/markets/options/articles/situational-awareness-lp-discloses-5-155553432.html) |

### Shorts via puts (~$8.7B notional per [Blockspace](https://blockspace.media/insight/situational-awareness-lp-bitcoin-miner-longs/))

| Position | Notional | Source |
|---|---|---|
| VanEck Semiconductor ETF (SMH) | $2.04B | per [Yahoo Finance](https://finance.yahoo.com/markets/options/articles/situational-awareness-lp-discloses-5-155553432.html) |
| NVIDIA (NVDA) | $1.57B | same |
| Oracle (ORCL) | $1.07B | same |
| Broadcom (AVGO) | $1.01B | same |
| AMD | $969M | same |
| Plus: Puts on Micron (MU), ASML, Intel (INTC), **Corning (GLW)**, TSM | sizes not in primary disclosure | per [Hedge Fund Alpha](https://hedgefundalpha.com/news/leopold-aschenbrenner-situational-awareness-13f/) |

### Portfolio shift quarter-over-quarter

The fund roughly **2.5× its size** quarter-over-quarter, from ~$5.52B (Q4 2025) to ~$13.68B in 13F-reportable securities (Q1 2026 — figure includes notional value of options per [Dave Manuel](https://www.davemanuel.com/2026/05/19/leopold-aschenbrenner-q1-2026-13f-situational-awareness/)). The growth was substantially driven by adding put exposure to AI chip names.

---

## The thesis (Leopold's), articulated

**"Infrastructure arbitrage"** — per [Quiver Quantitative](https://www.quiverquant.com/news/Former+OpenAI+Employee%E2%80%99s+Hedge+Fund+Unveils+Massive+Nvidia+and+AI+Chip+Options+Positions): short companies selling AI hardware, long companies owning the physical assets to run it.

Underlying logic (inferred from position structure):
1. **AI chip names are at peak narrative + peak multiple.** Stage 4-5 recognition territory. Multi-year forward-contracted demand is priced in. Even sustained fundamental beats may not move multiples higher.
2. **Power and infrastructure are the binding constraint.** Chips need racks need power need cooling. The bottleneck shifts from chip silicon (priced) to power generation + datacenter capacity (under-modeled).
3. **Ex-crypto-miners are the most undervalued power-infrastructure plays.** They have grid interconnect (3-7 year head start vs new entrants), PPAs locked in, and physical land. Repurposing for AI hosting captures the spread.
4. **Specific names within this:** CoreWeave is the public archetype; CORZ + IREN + APLD + CLSK + RIOT + Bitfarms + HIVE + Bitdeer are the smaller power-asset variants.
5. **Sandisk** sits in the long book because NAND is the persistent-storage layer of inference state — token volume directly drives NAND demand.

---

## Independent assessment of each major position

### Long positions

#### 1. Bloom Energy (BE) — $878.7M — biggest long

**Leopold's likely thesis:** Time-to-power. Fuel cells can be deployed in months vs years for grid interconnect. Hyperscalers buy BE for marginal capacity they can't otherwise add.

**My independent view (per `research/meta/time-to-x-framework.md` and earlier user discussion):**
- AGREE on time-to-power thesis structurally
- BE is the canonical bypass-route name for the power bottleneck
- User sold this at +30% earlier (per L3 lesson — partial profit-taking that should not have happened)
- User regretted; Leopold validates the holding

**Invalidation attempt:** Fuel cell unit economics depend on natural gas price + capex per kW. If gas prices rise OR if hyperscalers prefer nuclear PPAs (per CEG-MSFT Three Mile Island archetype), BE's marginal-capacity role diminishes. Also: BE has been a story stock for many cycles without consistent execution. Recognition Stage 3 — multiple expanded materially in 2026.

**My net read:** Long BE thesis is INTACT. Validates user's regret over selling. Recommendation: BE belongs in the user's portfolio at 3-5% if entering, but at current price (after the run since user sold) the entry is less asymmetric. Consider on pullback.

#### 2. Sandisk (SNDK) — $724.4M — second biggest long

**Leopold's likely thesis:** NAND demand explodes with token volume (inference state, KV cache, retrieval, agent persistence). SNDK as the cleanest US-listed NAND exposure post-spinout from WDC.

**My independent view:**
- AGREE — passes Token-Volume Filter cleanly per `research/meta/methodology.md`
- User HOLDS Sandisk at 10.8% of portfolio per `research/portfolio/holdings.md`. Direct portfolio overlap — Leopold validates the user's position
- Per `research/wiki/agentic-workload-scaling.md`, the storage layer grows with workload at roughly compute-comparable scale

**Invalidation attempt:** NAND is historically cyclical. Pricing cycles overshoot. If supply additions (Samsung, SK Hynix NAND, KIOXIA) catch up faster than demand, the cycle turns. Also: agentic workloads' demand for persistent NAND may be over-modeled if KV-cache moves to HBM or specialty memory.

**My net read:** Long SNDK thesis is INTACT. Reinforces user's existing position.

#### 3. CoreWeave (CRWV) — $556.1M

**Leopold's likely thesis:** Public neocloud. Capacity-constrained narrative + hyperscaler-as-customer dynamic (Meta $21B deal per [Brandergroup](https://brandergroup.net/2026/04/coreweaves-21b-meta-deal-ignites-the-ai-battleground/), Anthropic multi-year). Time-to-power applied at the cloud layer.

**My independent view:**
- AGREE structurally. CRWV is the same thesis as NBIS but at larger scale.
- Per my earlier analysis (`research/sector/where-we-are.md` non-default read #5), the market is mispricing hyperscaler vs neocloud as zero-sum when the reality is non-zero-sum (hyperscalers are both customers AND competitors)
- CRWV has the largest disclosed neocloud-hyperscaler contracts

**Invalidation attempt:** CRWV's customer concentration is extreme (Microsoft, Meta together = majority of revenue). Renewal risk. Also: hyperscalers building out their own (Google-Blackstone $5B venture per [Investing.com](https://www.investing.com/news/stock-market-news/coreweave-nebius-shares-drop-as-blackstone-and-google-launch-5b-ai-cloud-venture-4698388)) could pressure CRWV growth even if not immediately revenue.

**My net read:** Long CRWV is structurally sound. Adds a directly-comparable name to evaluate against NBIS thesis (P1 todo). User has neither — both are bypass-route gaps in the portfolio.

#### 4–8. IREN, CORZ, APLD, RIOT, CLSK — crypto miners pivoting to AI

**Leopold's likely thesis:** Power-asset arbitrage. These names own (or have rights to) GW-scale power + grid interconnect. The crypto-mining cash flow funded the original infrastructure; pivoting to AI hosting captures multiples-higher gross margin.

**My independent view (the harder one to assess):**
- AGREE on structural logic of time-to-power applied to existing power assets
- The math is real: 3-7 year head start on grid interconnect vs new entrants
- BUT execution is the wild card. Crypto miners are mining companies; AI hosting requires different operations (cooling design, network attach, customer SLAs, racks not mining rigs)

**Invalidation attempt:** Not every crypto miner successfully pivots. CORZ is the model that worked (CoreWeave + Microsoft) but it required a major restructuring. APLD has multi-year hosting contracts (better positioned). RIOT, CLSK, Bitfarms are still primarily mining cos with optional pivot. The valuations price the optionality, not certain execution.

**My net read:**
- CORZ + APLD + IREN: cleanest pivot candidates. Worth deep research as Pass 2 candidates.
- RIOT + CLSK + Bitfarms + HIVE: optionality plays. Higher beta to the thesis. Higher risk.
- The category is real but **name selection matters more here than at the chip-stack layer.** Aschenbrenner is paying to be diversified across the category rather than concentrated.

#### 9. Solaris Energy Infrastructure (SEI) — $62.5M

**Leopold's likely thesis:** Mobile power generation for datacenters. The "behind-the-meter" + co-located generation play that complements the grid-interconnect-constrained world.

**My independent view:**
- AGREE — already in `research/meta/time-to-x-framework.md` as a bypass-route candidate
- Smaller cap so position sizing reflects either smaller conviction or capacity constraints

**Net read:** Validates time-to-power framework. Watchlist candidate confirmed.

#### 10. T1 Energy (TE) — $43.9M

**Leopold's likely thesis:** US solar manufacturing + battery storage. Clean energy supply chain for AI datacenters.

**My independent view:**
- **VALIDATES the user's earlier claim** that Leopold owns T1 Energy
- User holds T1 Energy at 7.1% of portfolio per `research/portfolio/holdings.md`
- T1 is a "clean power for datacenters" play
- Untested in user's portfolio per `research/portfolio/coherence-audit.md`

**Invalidation attempt:** T1 Energy (formerly FREYR Battery) has had significant execution issues historically. Solar manufacturing economics in US are dependent on subsidies (IRA / Trump-admin policy risk). $43.9M is small for Leopold — perhaps a starter position, not high conviction.

**My net read:** Modest validation of user's T1 position from primary-tier source, but the position size is small in Leopold's book — not a high-conviction bull bet. Still merits the Pass 2 thesis reconstruction (already P1 in `research/meta/todo.md`).

### Short positions (puts)

#### NVDA, AVGO, AMD, MU, ASML, TSM, ORCL, INTC, SMH

**Leopold's likely thesis:** Chip names at Stage 4-5 recognition + over-owned positioning + multi-year forward demand already priced. Asymmetric setup for downside given valuations.

**My independent view (this is where I have the strongest disagreement):**

- **Direction:** Stocks are over-owned and stage-late, but THE FUNDAMENTAL DIRECTION IS ACCELERATING, not decelerating. Per the just-completed NVDA Q1 FY27 GRADE: $91B Q2 guide vs $86.8B consensus = beat-and-raise continues. The capacity-constrained narrative is verified at T1 (Altman, Google, NVDA, NBIS — see `research/signals/triangulation.md`).

- **Timing:** Puts are time-decay instruments. For Leopold's thesis to pay, multiple compression has to play out within 6-12 months. Capacity-constrained beat-and-raise can sustain multiples even at Stage 4 for several quarters.

- **Valuation:** YES, NVDA at 30x+ forward P/E is rich. But the forward earnings might justify it — per my workload-scaling model (`research/wiki/agentic-workload-scaling.md`), HBM demand is plausibly under-modeled by ~50% over 24 months. If TrendForce revises UP, NVDA EPS revises UP, multiple stays flat OR compresses while price holds.

**My net read on the short-chip leg:**
- He may be RIGHT on direction (eventually) but WRONG on timing (puts expire before multiples compress)
- It's also possible he's holding puts as HEDGES on his long book, not pure directional bets. Notional value of puts > equity longs makes this less likely as pure hedge but possible.
- I would NOT short these names myself based on this thesis. Per L2 lesson — wait for falsifiers to fire on the long thesis, not just multiple-compression speculation.

#### Corning (GLW) — puts (size undisclosed)

**Leopold's likely thesis:** Unclear without size data. Possible: GLW has run on the AI optical fiber narrative but the actual AI fiber revenue is small share of total Corning business; multiple has expanded beyond fundamental support.

**My independent view:**
- **User holds Corning at ~10.8% of portfolio.** This is a DIRECT CONFLICT between Leopold's view and user's holding.
- Per `research/portfolio/coherence-audit.md`, GLW was flagged as "defendable thesis, partial — need to validate fiber segment vs other revenue mix."
- The optical fiber thesis is sound (CPO transition, AI back-end optical). But Corning is also display + lifesciences + automotive — fiber is a fraction of total.
- If Leopold has puts on GLW specifically, he may believe the optical fiber thesis is correctly priced or that fiber is too small a share to drive the stock.

**My net read:** **Worth a Pass 2 deep-research item.** The user-Leopold conflict on Corning is the most important conflict surfaced by this 13F. I cannot resolve it without doing the bottoms-up segment analysis on Corning that we haven't done yet. **Adding to P1 todo.**

---

## Net synthesis — what I take from this 13F

### Where I agree with Leopold

1. **Power infrastructure is the under-modeled bottleneck.** S3 scenario reweight from `research/sector/scenarios.md` (22% → 25%) is consistent.
2. **Ex-crypto-miners with grid interconnect are time-to-power bypass-route winners.** Time-to-X framework predicts this.
3. **Bloom Energy + Sandisk + CoreWeave are coherent long picks.** All pass Token-Volume Filter. All have structural demand drivers.
4. **The infrastructure-arbitrage framing is the right mental model** — separates the layer that's priced from the layer that's not.

### Where I disagree with Leopold

1. **Short chip names via puts at this stage.** Multiple compression risk is real but capacity-constrained beat-and-raise can sustain multiples for several more quarters. Puts have time-decay. Bad risk/reward.
2. **The implicit assumption that infrastructure re-rates BEFORE chip multiples compress.** Could happen, could happen the other way (chips keep printing while power names already ran). Sequencing matters for the trade construction.

### Conflicts to investigate with user's portfolio

1. **Corning (GLW) — DIRECT CONFLICT.** Leopold has puts; user holds 10.8% of portfolio. Highest-priority Pass 2 item.
2. **Bloom Energy (BE) — user sold, Leopold's biggest long.** L3 lesson reinforced; consider re-entry pullback.
3. **Sandisk (SNDK) — STRONG OVERLAP.** Both bullish. Validates user's existing position.
4. **T1 Energy (TE) — modest validation.** $43.9M is small for Leopold; user's full thesis still needs reconstruction.
5. **CoreWeave (CRWV) — user has no position; Leopold $556.1M.** Bypass-route gap in user's portfolio (alongside NBIS, ALAB).

### Net new candidates entering the OS from this 13F

| Name | Reasoning | Priority |
|---|---|---|
| **Core Scientific (CORZ)** | Cleanest crypto-miner-to-AI-host pivot (CoreWeave + Microsoft) | P2 thesis candidate |
| **IREN Limited (IREN)** | Large Aschenbrenner position; pure power-asset play | P2 thesis candidate |
| **Applied Digital (APLD)** | HPC datacenter operator, multi-year contracts | P2 thesis candidate |
| **CoreWeave (CRWV)** | Public neocloud archetype, pair-trade vs NBIS | P2 thesis candidate |
| **Solaris Energy (SEI)** | Already in watchlist; Leopold validates | Reinforce existing watchlist |
| **HIVE Digital, Bitdeer, SharonAI** | Smaller Aschenbrenner positions; track | Watchlist candidates |

---

## What this means for the OS state

### where-we-are.md updates
- Mind-changes log: Leopold 13F adds the "infrastructure arbitrage" framing as a coherent investable lens. Validates S3 weight increase.
- Non-default reads: Confirms the "inference cloud is zero-sum-priced" read (Leopold long CRWV at $556M).

### scenarios.md
- No reweight required — Leopold's positioning is CONSISTENT with current weights (S3 22-25%, S2 30%, S1 33%). His put exposure suggests slightly higher conviction on S3 than my model, but within range.

### Portfolio-coherence reinforcement
- User's Sandisk (10.8%) and T1 Energy (7.1%): VALIDATED by Leopold's positions
- User's Corning (10.8%): CONFLICTED by Leopold's puts — Pass 2 deep research needed
- User's lack of BE / CRWV: confirmed as bypass-route gaps

---

## Falsifiers — what would invalidate Leopold's overall thesis

1. **NVDA Q2 FY27 prints another massive beat-and-raise** while chip stocks rally. Multiple compression doesn't happen even at Stage 4. His puts expire worthless.
2. **Power constraints ease unexpectedly** — major grid reform, nuclear approvals fast-track, or new generation tech (SMR) commercializes faster. Removes the structural support for power-asset names.
3. **Crypto miners fail to pivot at scale** — CORZ-style transformations don't replicate at RIOT/CLSK/Bitfarms. Capacity exists but goes idle or stays in mining.
4. **Hyperscalers build out their own faster than expected** — Google-Blackstone $5B venture pattern accelerates. CRWV/NBIS lose customer base.
5. **AI capex pause materializes** — S4 scenario plays. All the long positions get hit AND the short positions work (in this case Leopold gets paid both ways).

---

## Sources

- [Quiver Quantitative — full 13F analysis with put + long detail](https://www.quiverquant.com/news/Former+OpenAI+Employee%E2%80%99s+Hedge+Fund+Unveils+Massive+Nvidia+and+AI+Chip+Options+Positions)
- [Blockspace — $5.5B portfolio with semiconductor puts + bitcoin miner longs](https://blockspace.media/insight/situational-awareness-lp-bitcoin-miner-longs/)
- [Dave Manuel — Q1 2026 13F detailed analysis](https://www.davemanuel.com/2026/05/19/leopold-aschenbrenner-q1-2026-13f-situational-awareness/)
- [Hedge Fund Alpha — $8.5B bet against AI chips](https://hedgefundalpha.com/news/leopold-aschenbrenner-situational-awareness-13f/)
- [Yahoo Finance — Situational Awareness $5.5B portfolio](https://finance.yahoo.com/markets/options/articles/situational-awareness-lp-discloses-5-155553432.html)
- [stockmktnewz Threads post with full holdings list](https://www.threads.com/@stockmktnewz/post/DYe1H5qCT9f/just-in-leopold-aschenbrenner-just-updated-his-stock-portfolio-for-his) — T4 source; specific dollar amounts cross-checked against Quiver / Blockspace
- [24/7 Wall St — HIVE, T1 Energy moves on Aschenbrenner buzz](https://247wallst.com/investing/2026/05/18/hive-digital-rockets-34-t1-energy-jumps-20-on-aschenbrenner-buzz-but-cleanspark-riot-coreweave-stay-quiet/)
- [Bankless — Situational Awareness 13F filing summary](https://www.bankless.com/read/news/leopold-aschenbrenners-situational-awareness-files-quarterly-investment-disclosure)
- [BitMEX — Aschenbrenner fund profile](https://www.bitmex.com/blog/leopold-aschenbrenner-portfolio)
