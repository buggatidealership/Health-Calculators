# Where AI Is Going — First-Principle Synthesis (2026-05-21)

**Type:** Bird's-eye-view synthesis derived from the OS's full substrate.
**Companion to:** `sector/where-we-are.md` (current state). This file is forward-looking.
**Update cadence:** quarterly OR when synthesis materially shifts. Default: annual revisit.
**Purpose:** the single document that captures my forward thesis for AI through ~2028, with conviction levels, derived from first principles using the full OS substrate.

---

## TL;DR — three sentences

We are in the early-middle of the agentic AI era; demand outruns supply through at least 2027 across HBM, advanced packaging, power, optical interconnect. **The investable insight is positioning at the LAYERS where supply is structurally constrained (memory, packaging, power, optical substrates) and at the COMPANIES owning the deepest moats within those layers (SK Hynix in HBM, AXTI in InP substrate, AVGO in custom Si design, VST/CEG in nuclear power, NBIS in inference cloud capacity).** The biggest risks are not S4 (digestion — collapses on capacity-constrained narrative) but Stage 4-5 multiple compression at named winners and a regulatory/geopolitical shock to TSMC-Taiwan dependence.

---

## Where AI is, in one paragraph

We are ~6 months into the Agentic AI epoch (started Nov 2025). The compute pattern has shifted from training-dominant to inference + sustained-loop + tool-calls. Token volume is exploding super-linearly with agentic adoption — my bottoms-up model in `wiki/agentic-workload-scaling.md` puts current agentic workload at ~210T tokens/month (~2-3% of global token volume), growing ~12× over 12 months and ~70× over 24 months. **The capacity-constrained narrative is verified at primary source** — Google I/O disclosure (3.2 quadrillion tokens/month), OpenAI Guaranteed Capacity multi-year contracts, Anthropic Q2 2026 first-profit forecast at $10.9B, NBIS Q1 +684% revenue (per `signals/triangulation.md`). The substrate constraint stack is binding: HBM (sold out 2026, SK Hynix 3-yr customer-request backlog), CoWoS packaging (TSMC 92% of advanced AI chips), power (5-7 GW/yr demand vs 2-3 GW/yr supply per `wiki/power-for-ai-primer.md`), optical substrates (>70% InP supply deficit per `wiki/optical-interconnect-primer.md`).

---

## Where I'm confident it's going (next 12–24 months)

These are my high-conviction (>70%) views, derived from the OS substrate:

### 1. Token volume continues exploding faster than per-token cost falls — the inference cost paradox compounds
Per `wiki/token-consumption.md`: per-token cost down ~280x in 2 years (per Oplexa), enterprise AI bills up +320% (per Indexnine). The math says total token spend grows even as unit prices fall, because agentic workflows compound consumption per task. **My workload model in `wiki/agentic-workload-scaling.md` implies aggregate compute demand grows 5-10× over 24 months while supply grows ~2-3×.** This is the structural underpinning of every chip-stack thesis.

### 2. Memory (HBM specifically) remains the binding constraint through 2027
Per `wiki/hbm-primer.md` and SK Hynix Q1 2026 disclosure: customer requests exceed 3 years of planned capacity. HBM4 transition is happening now (Samsung Q1 2026, Micron Q2 2026, SK Hynix HBM4E samples 2H 2026 → mass production 2027). Bypass routes (CXL via ALAB, MoE architectures, HBM4E) won't materially relieve before 2028. **Per `wiki/custom-silicon-primer.md`**, custom silicon ALSO needs HBM — so even if NVDA share drops, HBM demand sustains. **SK Hynix is the cleanest play; user's 12.5% position is structurally correct.**

### 3. Custom silicon takes meaningful inference share from NVDA by 2028 (S2 scenario plays)
Per `wiki/custom-silicon-primer.md`: AVGO holds ~60% of AI ASIC design partnership share (per Introl) and partners with 4 of 5 frontier-model providers (Google TPU, Meta MTIA, Microsoft Maia, OpenAI Titan, plus newly Anthropic-Broadcom). NVIDIA's inference share projected to compress from 90%+ to 20-30% by 2028 (per Oplexa). **AVGO is the structural S2 play and the most over-looked compounder in the AI complex** — current 30% S2 scenario weight may be too low.

### 4. Power becomes the binding geographic constraint, not just a supplier squeeze
Per `wiki/power-for-ai-primer.md`: structural deficit of 3-5 GW per year. Grid interconnect queues 36-48 months in PJM/ERCOT data center zones. Gas turbine backlogs sold out through 2030. Nuclear restart deals (MSFT-CEG TMI ~800 MW; Vistra-Meta 2.1+ GW; Meta-multi-partner 6.6 GW) are the consensus winners. **Bypass routes (BE fuel cells, ex-crypto-miner pivots, mobile gen) capture the time-to-power premium.** Aschenbrenner's long-power thesis (per `signals/events/2026-05-21-aschenbrenner-q1-13f.md`) is structurally correct — disagreement only on the short-chip-name timing.

### 5. Optical interconnect transitions toward CPO; InP substrate remains binding
Per `wiki/optical-interconnect-primer.md`: 2026-2027 initial CPO deployments; 2030+ dominant. InP substrate supply deficit >70% (600-700K wafers vs 1.5-2M demand). **AXTI controls 60-70% of global InP — user's 4.8% position is structurally sound (Stage 4 caveat applies).** NVDA $2B investment in LITE + COHR confirms strategic importance of the entire optical stack.

### 6. Enterprise agentic adoption goes function-by-function, banks/law/consulting next
Per `wiki/agentic-ai-enterprise.md`: 88% pilot failure rate but 12% breakthroughs return 171% ROI globally. **Successful adoption is concentrated in research/analyst/devtools (Cursor archetype) and slowly extending into legal (Harvey).** Banks/law/consulting/biotech mass adoption is the next 24-month wave. Per `wiki/agentic-workload-scaling.md` MAU model: this wave alone could add 5-10× to total token volume.

### 7. Hyperscalers are NOT competing zero-sum with neoclouds — they are BOTH customers AND competitors
Per `sector/where-we-are.md` non-default read #5 (corrected per user pushback): NBIS-MSFT $17.4-19.4B contract + Meta-CoreWeave $21B + Meta-NBIS $3B prove the non-zero-sum dynamic. Market is mispricing this. **NBIS thesis structurally sound; valuation at ~47x trailing sales is rich but supported by $46B+ contracted backlog.**

### 8. The frontier model providers are reaching profitability earlier than guided
Per `signals/triangulation.md`: Anthropic Q2 2026 first operating profit ($559M, 2 years ahead of prior guidance). This collapses the S4 (capex pause) bear case materially. **Hyperscaler capex sustainability is no longer the question** — it's about WHERE the capex flows.

---

## What I'm uncertain about (mid-conviction, 40-70%)

### MoE architecture diffusion rate
The biggest demand-side wildcard. Per `wiki/hbm-primer.md`: 20-40% per-inference HBM reduction is my modeled assumption. If MoE diffuses >50% efficiency at scale, HBM demand grows slower than modeled. If MoE diffusion is slower than expected, supply gap widens.

### Custom silicon share trajectory
20-30% inference share by 2028 (per Oplexa) is one forecast; could be 10-15% (slower) or 35-45% (faster). Determines whether AVGO is "high conviction" or "extreme conviction."

### CPO deployment timing
Cignal AI says "inevitable but not imminent." Could be 2027 mass deployment or 2030. Critical for GLW long-term thesis (fiber TAM compression risk).

### Timing of bank/law/consulting/biotech mass adoption
12 months or 36 months — defines the slope of the next demand wave.

### Sovereign AI scaling pace
Per `sector/causal-maps/sovereign-ai-scales.md`: UAE Stargate, Saudi HUMAIN, Singapore, India all building. Combined could add $200B+ to the AI compute pie outside the hyperscaler channel. Pace uncertain.

### NVDA Rubin / next-gen efficiency advantage
If Rubin delivers another big efficiency leap, custom Si TCO arbitrage compresses; hyperscalers continue preferring NVDA. Affects S1 vs S2 weights.

---

## The biggest risks I'm watching

### Risk 1: Stage 4-5 multiple compression at named winners (likely, not bear-case)
Most AI names are now at Recognition Stage 4 per `meta/methodology.md`. GLW ~100x trailing P/E; AVGO ~$1.2T market cap; NVDA ~30x+ forward; SK Hynix Q1 +144% revenue with multiple expanded. **Multiple compression can take 20-40% off any of these even with intact fundamentals.** This is a sizing question, not an exit question — but it warrants smaller positions than at Stage 1-2.

### Risk 2: Taiwan / TSMC geopolitical event (low probability, catastrophic)
TSMC = 92% of advanced AI chips. Any material disruption to TSMC operations invalidates the entire AI supply chain near-term. **Cannot be hedged via diversification within the AI stack** — only via cash + non-AI assets.

### Risk 3: US-China export control escalation
Affects NVDA China revenue (~10-15% over time), Korean memory exports, optical components. Trump-admin policy direction generally restrictive but unpredictable.

### Risk 4: Enterprise agentic adoption stalls below the 12% breakthrough rate
If the 88% pilot failure rate doesn't compress to ~50% within 18 months, enterprise penetration stalls and the 24-month demand wave thesis breaks. Per `wiki/agentic-ai-enterprise.md`.

### Risk 5: A specific technical disruption I haven't modeled
The most honest risk: there's something I don't know. Examples could include: a new model architecture that reduces compute by 10×; a quantum computing breakthrough; a regulatory framework that mandates specific safety infrastructure. **Intellectual humility per `meta/biases-watchlist.md` B14 — keep watching for the non-default reads.**

---

## What this means for the user's portfolio (specific implications)

### Holdings analysis (per `research/portfolio/holdings.md` + thesis files)

| Holding | % | OS recommendation | Reasoning |
|---|---|---|---|
| SK Hynix | 12.5% | **HOLD — Core** | Moat verified; structural HBM beneficiary; anti-fragility 3.5/5 + Execution Quality 4.6/5 |
| Murata Manufacturing | 12.4% | Pass 2 thesis needed | MLCC for datacenter; Token-Volume Filter passes; thesis file pending |
| ServiceNow (NOW) | 12.0% | Pass 2 thesis needed | Agentic workflow; per `wiki/agentic-ai-enterprise.md` is a confirmed winner; thesis pending |
| Corning (GLW) | 10.8% | **TRIM to 5-7%, conditional on Q2 print** | Stage 4 + multiple at 100x + Aschenbrenner conflict; per `companies/GLW/thesis.md`; refined per Forward Mix Model |
| Sandisk (SNDK) | 10.8% | HOLD — Aschenbrenner validates | Pass 2 thesis needed; NAND-for-inference thesis sound |
| T1 Energy (TE) | 7.1% | Pass 2 thesis needed | Validated by Aschenbrenner $43.9M position; thesis file pending |
| Datadog (DDOG) | 6.8% | **ADD candidate per workload model** | Per `wiki/agentic-workload-scaling.md`: observability under-modeled; structurally bid harder than software-typical |
| STM | 6.6% | Pass 2 reconstruction or sell | Untested per coherence audit; thesis pending |
| Hyperliquid Strategies | 5.7% | Hold — off-AI-thesis | Separate framework (tokenization + AI x finance); user-explained rationale sound |
| Tower Semi (TSEM) | 5.4% | Pass 2 reconstruction or sell | Untested per coherence audit; thesis pending |
| AXTI | 4.8% | **HOLD — structurally validated** | 60-70% InP substrate share; Stage 4 caveat; earnings-vs-multiple decomposition pending P2 |

### Cash position (~38% per `holdings.md`)

User's discipline (per the cash explanation 2026-05-20): risk-off ahead of NVDA earnings. Per the GRADE outcome and updated synthesis, deployment candidates include:

1. **AVGO 5-8%** — biggest gap in user's portfolio (zero S2 exposure)
2. **NBIS 3-5%** — capacity-constrained pure-play; cleaner balance sheet than CRWV
3. **DDOG add** — already held; workload model implies under-sized
4. **Power names** — VST or CEG 3-5%; per `wiki/power-for-ai-primer.md` structural thesis
5. **Bloom Energy (BE) re-entry** — Aschenbrenner-validated; user sold too early (L3 lesson)

### Recommended pending action sequence

1. **Pre-act:** Wait for Q2 2026 GLW print (late July 2026) before executing the GLW trim per refinement in `portfolio/recommendations.md`
2. **Now:** Consider entering AVGO position (5-8%) from cash — independent of GLW decision
3. **Now:** Consider entering NBIS position (3-5%) from cash — independent
4. **Now:** Verify Pass 2 theses for the 6 portfolio positions without thesis files (Murata, NOW, SNDK, DDOG, STM, TSEM, Hyperliquid)
5. **Next 30 days:** Build BE and T1 Energy thesis files; consider BE re-entry on pullback

---

## The investment philosophy this implies

If I had to articulate the AI-investing philosophy that emerges from this OS in one paragraph:

**Buy the layers where supply is structurally constrained AND that benefit regardless of which specific architecture wins at the top. Pay attention to recognition stage — name names at Stage 1-2 carry asymmetric setup; Stage 3-4 names carry multiple compression risk that requires fundamentals to keep accelerating. Apply the Token-Volume Filter as a binary gate. Use Forward Mix Probabilistic Model for multi-segment companies. Triangulate signals across primary-tier sources before committing. Calibrate predictions explicitly and grade them. Sell ONLY on falsifier firings, not on macro noise or partial profits. Build for compounding context — every new analysis plugs into the substrate and gets richer over time.**

---

## What I'd want next from the user (one open question)

**On the cash deployment timing:** is the strategy to (a) deploy a portion now given confirmed signal cascade (Anthropic profit + Google/OpenAI capacity + NVDA Q1 FY27 beat + Aschenbrenner positioning), or (b) wait for a broader pullback before deploying given Stage 4 risks across most candidates? Either is defensible. Defaults to (a) for the highest-conviction Anti-fragility 3.5+/5 names (SK Hynix add or AVGO new), defaults to (b) for the marginal-conviction names.

---

## Cross-references

- `sector/where-we-are.md` — current state synthesis
- `wiki/` — all 7 foundational primers
- `companies/` — built theses (NVDA, GLW, VICR, AVGO, NBIS, HYNIX)
- `meta/methodology.md` — the analytical principles
- `meta/biases-watchlist.md` — known failure modes (now 14 documented)
- `predictions/lessons.md` — 4 lessons (L1-L4) accumulated
- `signals/triangulation.md` — high-confidence signal log
- `portfolio/recommendations.md` — pending actions
