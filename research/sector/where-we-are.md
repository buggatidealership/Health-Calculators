# Where AI Is — Living Synthesis

**Last material update:** 2026-05-20 (Google I/O + OpenAI Guaranteed Capacity + Anthropic profit + SemiAnalysis workflow ROI)
**Purpose:** The single document that holds the CURRENT BEST holistic view. Read this every session before reacting to specific events. If a new event doesn't change the synthesis here, don't restructure the entire OS for it — just log the signal and move on.

**Self-evolution rule:** Update this file only when new evidence MATERIALLY shifts the prior view. Most events are reinforcing, not new — note them but don't restate. Track view changes in §"What I changed my mind about" with date + trigger. The file should grow slowly; not every news cycle is a paradigm shift.

---

## TL;DR — five things we currently know with high confidence

1. **We are in the Agentic AI epoch** (started Nov 2025). Compute demand pattern has shifted from training-dominant to inference + sustained loops + tool calls. Workload per user has stepped up ~100x for agentic vs chat use cases.

2. **AI compute demand is structurally outrunning supply through at least 2027.** Three independent T1/T2 confirmations on the same day (2026-05-20): Google's 3.2 quadrillion tokens/month, OpenAI's Guaranteed Capacity multi-year contracts, NBIS +684% Q1 print. Sam Altman direct quote: "world will be capacity-constrained for some time."

3. **Frontier model providers are reaching profitability earlier than guided.** Anthropic Q2 2026 forecast $10.9B revenue + first operating profit (per WSJ, T1 underlying). Profit weakens the S4 (digestion) bear case materially.

4. **HBM is THE binding constraint through 2027.** All three suppliers sold out 2026; SK Hynix customer requests exceed 3-year planned capacity. Bypass routes (CXL via ALAB, MoE architectures, HBM4E) won't materially relieve before 2028. See `wiki/hbm-primer.md`.

5. **Enterprise adoption of agentic AI is EARLY — function-by-function, not all-at-once.** Banks/law/consulting/biotech largely NOT adopted yet. Research/analyst/devtools functions are the leaders (Cursor coding, SemiAnalysis-style workflows, Harvey legal). Customer-facing deployments struggle (Klarna lesson). The big enterprise wave is the next 24 months.

---

## The current epoch

| Era | Started | Compute pattern | Dominant constraint |
|---|---|---|---|
| ChatGPT moment | Nov 2022 | Training >> inference, one-shot Q&A | Training cluster scale |
| Scaling laws era | 2023-mid 2025 | Bigger models, RLHF | Training compute + memory |
| Reasoning bridge | mid 2025–Nov 2025 | Chain-of-thought; inference compute starts mattering | Memory bandwidth |
| **Agentic AI (current)** | **Nov 2025–** | **Tool calls, sustained loops, multi-step workflows** | **HBM + CoWoS + power** |
| Embodied / Tier-1 deployments | speculative (2027+?) | Autonomous execution with real consequences | TBD |

## The current binding constraints (in order of urgency / pricing power)

1. **HBM3E/HBM4 supply** — through 2027 minimum. SK Hynix / Samsung / Micron all sold out 2026. Per `wiki/hbm-primer.md`.
2. **CoWoS-L advanced packaging** — coupled to HBM; TSMC ramping ~55K → ~130K wpm exit-2026.
3. **Firm power for AI datacenters** — partially priced. NBIS contracted 3.5GW raising to 4GW — multiply across industry.
4. **Networking bandwidth at cluster scale** — 12-24 months out; CPO transition (MRVL, ANET, COHR, LITE).
5. **Compute capacity at hyperscalers** — multi-year contracts now being sold (OpenAI Guaranteed Capacity).

## The current narrative consensus (T1/T2 verified)

- **Agentic adoption is real and accelerating.** Multi-confirmed across model providers, hyperscalers, enterprise software, infrastructure cos.
- **Inference cost per token down ~100x in 12 months** (per [Dylan @demian_ai T3 analysis cross-checked with industry consensus]) but total spend up because demand exploded.
- **Custom Si is scaling** as second leg of demand: Google TPU + AWS Trainium + Meta MTIA + Microsoft Maia + Anthropic-Broadcom = S2 scenario from `sector/scenarios.md` materializing.
- **Power is the geographic constraint** that determines where AI gets deployed (sovereign AI in Gulf states, US Sun Belt with firm power).

## The current scenario weights (per `sector/scenarios.md`, last reweight 2026-05-20)

| Scenario | Weight | Direction trend |
|---|---|---|
| S1 NVDA dominant | 33% | Slightly down (multi-year contracts diversify) |
| S2 Custom Si fragments | 30% | Up (Anthropic-Broadcom + scaling) |
| S3 Power binds | 25% | Up (NBIS 3.5GW for ONE cloud) |
| S4 Digestion | 6% | Down (multi-year contracts + frontier profitability) |
| S5 Regulatory shock | 6% | Down |

## Non-default reads — what most people are missing right now

(This section forces me NOT to default to consensus framing. Updated when new evidence surfaces a pattern most analysts haven't priced.)

### 1. Enterprise adoption is function-by-function, not all-at-once
The agentic AI wave has hit research/analyst/devtools functions (Cursor coding agents, SemiAnalysis-style workflows, Harvey legal). Customer-facing AI has STALLED (Klarna lesson, broader 88% pilot failure rate). The big enterprise wave (banks/law/consulting/biotech) hasn't started. **Implication:** total compute demand has 5-10× left to run as enterprise penetrates, not just the obvious 2-3× from existing customers scaling usage.

### 2. The "unit of work" is changing, not just costs
Per SemiAnalysis workflow data (10-93x ROI per task), this isn't a productivity boost — it's a category collapse for human-labor-moated businesses. **Implication:** existential repricing for consulting/BPO/staffing-heavy services (long-term short candidates); winner-take-most for AI-augmented vertical software (long candidates).

### 3. Per-token margins for model providers may peak as enterprise scales
Anthropic Q2 profit is the high-water mark for current per-token economics. Big enterprise customers negotiate volume discounts. Total token volume goes up; revenue per token compresses. **Implication:** model provider equity (OpenAI IPO, Anthropic) may price the inflection vs the durable margin profile.

### 4. The capacity-constrained narrative is asymmetric for SUPPLY-SIDE names, not model providers
Altman's "capacity-constrained for some time" implies pricing power flows to whoever owns the constraint: TSMC, SK Hynix, NBIS, hyperscaler cloud capacity, power producers. Model providers are themselves capacity-buyers — they benefit from selling forward contracts but face their own input cost pressure.

### 5. Inference cloud (NBIS, CoreWeave) is mis-priced as zero-sum competition (CORRECTED 2026-05-20 from user pushback)
My initial framing said this layer was "overlooked." User pushed back correctly: NBIS rallied massively on its +684% Q1 print per [SEC 6-K](https://www.sec.gov/Archives/edgar/data/0001513845/000110465926059872/tm2614392d1_ex99-2.htm), then dropped 7.5% to $184.84 (per [Investing.com](https://www.investing.com/news/stock-market-news/coreweave-nebius-shares-drop-as-blackstone-and-google-launch-5b-ai-cloud-venture-4698388)) on the Google + Blackstone $5B AI cloud venture announcement. Market HAS priced these names AND priced in competition risk.

**The actual non-default read:** market is treating hyperscaler vs neocloud as zero-sum. Structural reality is non-zero-sum — hyperscalers cannot build capacity fast enough, so they BUY from neoclouds while ALSO competing. Evidence: NBIS-Microsoft contract $17.4–19.4B over 5 years (per [TradingView/Zacks](https://www.tradingview.com/news/zacks:349d920dc094b:0-nebius-vs-coreweave-which-ai-cloud-stock-is-the-better-bet/)); NBIS-Meta $3B/5yr; CoreWeave-Meta $21B (per [Brandergroup](https://brandergroup.net/2026/04/coreweaves-21b-meta-deal-ignites-the-ai-battleground/)) + multi-year Anthropic. Hyperscalers are both customers AND competitors. Market is pricing only the competition vector.

**Critical caveat — Token-Volume Filter:** Inference clouds fall in the MIXED bucket (per `meta/methodology.md` §Token-Volume Filter). Volume up = revenue up, but per-token margin may compress as enterprise customers negotiate volume pricing. Contract structure matters. NBIS thesis (P1 todo) must address this directly.

## What I changed my mind about (and when)

- **2026-05-20:** S4 (digestion) probability cut from 15% → 10% → 6% over the day as evidence cascaded. Initially I weighted digestion as a real tail risk; multi-year compute contracts + frontier profitability + capacity-constrained CEO statements collapse the bear case.
- **2026-05-20:** Vicor reframed from "guaranteed downstream beneficiary" to "binary on next-gen design wins" after bottoms-up customer research surfaced design-out at NVIDIA H100. Captured in B12.
- **2026-05-20:** Time-to-recognition refined into Recognition Stage 0-5 spectrum after user critique. AXTI verified Stage 4 from user screenshot.
- **2026-05-20:** Added Execution Quality as 5th component of valuation model after user input. Vicor would have scored 2/5 — methodology now self-consistent.
- **2026-05-20:** Corrected non-default read #5 (inference cloud) after user pushback. "Overlooked" framing was wrong — NBIS had run and then dropped on competition concerns. Real non-default read: zero-sum vs non-zero-sum dynamic between hyperscalers and neoclouds.
- **2026-05-20:** Codified Token-Volume Filter as hard portfolio selection rule per user input — names must benefit from volume regardless of per-token cost direction. Model providers fail this filter; memory/foundry/networking/test/power/EDA pass cleanly; inference clouds are MIXED (contract-dependent).
- **2026-05-20:** NVDA Q1 FY27 GRADED. Direction RIGHT (beat all four axes). Q2 guide came in at $91.0B vs my $88.5B call. L4 added: in multi-year-contracted-demand environments, historical guide-sandbag heuristics over-discount management confidence — apply ~2% haircut instead of 4-5%. Stock fell despite beat (beat-and-fade); not a thesis falsifier. The capacity-constrained narrative is now triangulated at a third primary source.
- **2026-05-21:** Built `wiki/agentic-workload-scaling.md` — bottoms-up demand model. Central estimate ~210T tokens/month from agentic workloads today; 12m projection ~12× growth; 24m projection ~70× growth. Identifies gap vs TrendForce HBM consensus (consensus appears conservative by ~2-3× over 24mo).
- **2026-05-21:** Aschenbrenner Q1 2026 13F analyzed (`signals/events/2026-05-21-aschenbrenner-q1-13f.md`). Contrarian thesis: short AI chips, long power/infrastructure. AGREE with long-infra leg (validates S3 power-binds scenario + time-to-power framework). DISAGREE with short-chip leg on timing (capacity-constrained beats can sustain multiples for several quarters). Direct conflict surfaced: Aschenbrenner has puts on Corning, user holds 10.8% — elevated to P1 deep research.

## What's still ambiguous (intellectual humility)

- **MoE diffusion rate** — could reduce per-inference HBM demand 10-40% over 18 months. Hard to model precisely.
- **Custom Si actual share trajectory** — S2 directional confirmed; exact share trajectory (15%? 30%? 50%?) determines pricing power for NVDA vs AVGO vs MRVL.
- **Timing of bank/law/consulting/biotech mass adoption** — could be 12 months or 36 months. Defines the slope of the next demand wave.
- **Vicor's 2nd gen VPD lead customer identity** — single data point that flips the VICR thesis.
- **SK Hynix vs Samsung HBM4 share at NVDA** — material for SK Hynix pricing power magnitude.
- **Power infrastructure deployment pace** — can grid + nuclear restart fast enough to relieve S3, or does power bind harder than modeled?

## Latest material updates

### 2026-05-20 — Google I/O + OpenAI Guaranteed Capacity + Anthropic profit + SemiAnalysis ROI table
Capacity-constrained narrative triangulated at T1 primary. S4 cut materially. NBIS elevated to P1 thesis. AVGO + AMZN + GOOG queued for theses. SemiAnalysis ROI data reinforces "function-by-function adoption" thesis.

### 2026-05-20 — NVDA Q1 FY27 earnings (pending tonight)
Will fire GRADE workflow + further SCENARIO-UPDATE on resolution.

---

## How this file is maintained

- **Read at session start** (per Session Start Protocol in `CLAUDE.md`)
- **Updated when synthesis shifts** — not on every event. If event reinforces existing synthesis, log signal + move on.
- **Track view changes** in "What I changed my mind about" with date + trigger event
- **Force the non-default read** — every major event should produce at least one "what most analysts are missing" entry in §Non-default reads
- **Cross-reference** all assertions to source files (`wiki/`, `sector/`, `signals/`)

The file is the closest thing the OS has to a "memory palace" — themed rooms (constraints, narratives, scenarios, non-default reads, mind-changes, ambiguity) rather than chronology. Future me reads this first.
