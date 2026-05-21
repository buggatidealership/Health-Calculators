# Dylan Patel (SemiAnalysis) vs Leopold Aschenbrenner (Situational Awareness LP) — Thesis Comparison

**Last updated:** 2026-05-21
**Purpose:** User request 2026-05-21 — "do a deep dive into Dylan Patel... see how his thesis is compared to Leopold's, which I know they're both different... but I assume overarching, they probably complement each other."
**Type:** Source synthesis + thesis comparison
**Source-tier:** Both T2 (per `meta/source-reliability.md`)
**Resolves P1 todo:** Dylan Patel "2-3x more memory pricing" claim source-citation

---

## TL;DR

Patel and Aschenbrenner are looking at the same AI infrastructure transformation from **opposite ends of the value chain**, and the user's intuition is correct — they complement each other rather than conflict on the big picture.

- **Patel = SUPPLY-SIDE analyst.** Reads silicon supply chain, component-level, near-term, technical-deep. Tells you WHICH suppliers benefit and WHERE bottlenecks bind.
- **Aschenbrenner = DEMAND-SIDE / scaling-laws analyst.** Reads compute scaling trajectories and AGI economics. Macro-strategic, longer-term, geopolitical. Tells you WHY the demand exists and HOW MUCH infrastructure spend is coming.

They **agree on** infrastructure being the most under-modeled investable layer, memory/storage being structurally tight, and the AI capex cycle being multi-year. They **diverge on** NVDA-and-chip-stack exposure (Patel: still benefits short-term from supply tightness; Aschenbrenner: short via puts on Stage 4-5 multiple compression).

**For our OS, the right read is to use both:** Patel's component-level signals inform individual-name theses (especially HBM, memory, packaging). Aschenbrenner's macro-strategic positioning informs scenario weights and validates the "infrastructure arbitrage" framing already in `research/sector/where-we-are.md`.

---

## Dylan Patel — current thesis (2026 verified)

### Most-recent verified claims (with sources)

**1. Three bottlenecks: logic, memory, power** — per [Dwarkesh Podcast 2026-03](https://www.dwarkesh.com/p/dylan-patel) (also surfaced via [Techmeme tweet aggregation](https://x.com/Techmeme/status/2032751521612575093) and [Luminix report summary](https://www.useluminix.com/reports/industry-analysis/understanding-dylan-patel-of-semianalyis-deep-dive-on-ai-compute-scaling-bottlenecks))

**2. "DRAM will double or triple from here still, because that's how much capacity is required."** — per Dylan Patel direct quote in [24/7 Wall St 2026-04-23](https://247wallst.com/personal-finance/2026/04/23/dram-will-double-or-triple-from-here-as-ai-demand-outpaces-supply-chain-capacity/). Critical addendum: "the true incremental supply doesn't come till '28" (same source). **This is the source citation that resolves the P1 todo item** (user-reported "2-3x more memory pricing" claim).

**3. Memory now ~30% of hyperscaler capex; HBM ~41% of DRAM revenue by 2026** — per SemiAnalysis newsletter content surfaced in [Memory Mania piece](https://newsletter.semianalysis.com/p/memory-mania-how-a-once-in-four-decades) and [Scaling the Memory Wall](https://newsletter.semianalysis.com/p/scaling-the-memory-wall-the-rise-and-roadmap-of-hbm) (paywalled but referenced in multiple search snippets).

**4. Bottleneck evolution over time** — per [Latent Space podcast 2026-02](https://www.latent.space/p/dylanpatel-cooking) (per WebSearch snippet, not fetchable directly):
   - 2023: CoWoS shortages
   - 2024-25: datacenters and power
   - 2026+: BACK to semiconductor fabs

**5. "Power is not a constraint... but you can't get a 3 nanometer fab"** — per [TBPN podcast Feb 2026](https://pod.wave.co/podcast/tbpn/full-interview-dylan-patel-says-were-still-underestimating-ai). This is a near-term framing (per his bottleneck-evolution model) — power was binding in 2024-25, fabs are binding 2026+. Aschenbrenner's positioning suggests he still views power as binding; reconcilable if Patel is right that power has been added quickly and fabs haven't.

**6. NVIDIA inference market share dropping from 90%+ to 20-30% by 2028** — per Dylan Patel projection cited in [Benzinga August 2025](https://www.benzinga.com/markets/equities/25/08/47202594/nvidias-reign-at-risk-dylan-patel-says-googles-tpu-amazons-trainium-could-outshine-gpus-if-sold-to-public). Driver: hyperscaler custom silicon (TPU, Trainium, Maia, MTIA).

**7. Custom ASIC growth at ~44.6% CAGR** — Google TPU v7 Ironwood, Microsoft Maia 200, Amazon Trainium 3, Meta MTIA, per [TokenRing / FinancialContent analysis](https://markets.financialcontent.com/wral/article/tokenring-2026-1-1-the-great-decoupling-how-hyperscaler-custom-silicon-is-ending-nvidias-ai-monopoly) (T4 source, but the CAGR figure is consistent with Patel commentary across multiple interviews).

**8. Hyperscaler custom silicon offers 40-65% TCO benefit and 30-40% better price/performance vs merchant GPU** — per same TokenRing source + [Introl blog](https://introl.com/blog/custom-silicon-inflection-2026-hyperscaler-asics-nvidia-gpu). Consistent with SemiAnalysis [AWS Trainium3 Deep Dive](https://newsletter.semianalysis.com/p/aws-trainium3-deep-dive-a-potential).

**9. Grace Blackwell vs Hopper H200: Dylan said 50x improvement; Jensen public figure was 35x** — per Patel's commentary triangulated through multiple interviews. Suggests Patel often more bullish on NVDA's own products than NVDA itself publicly states.

### Patel's investment-relevant patterns

| Pattern | What it says |
|---|---|
| **Memory is the new battleground** | HBM crowds out commodity DRAM; DDR prices spike; HBM contracted prices need to RISE further to clear next round of demand |
| **Fab capacity is binding 2026+** | TSMC 3nm allocation is the rate limiter; can't be added in <2-3 year cycle. NVDA's early N3 allocation strategic |
| **Hyperscaler custom silicon trajectory is real** | When AI workloads concentrate, custom silicon advantage grows. NVDA inference share compresses materially by 2028 |
| **Power moved from constraint to "added"** | Implies the 2024-25 power scare drove enough buildout that constraint shifted elsewhere. Aschenbrenner positions counter to this |

### Patel's track record (per `meta/source-reliability.md`)

- "HBM is the bottleneck" — correct through 2024-2026 ✓
- "CoWoS capacity will quadruple by end-2026" — TSMC tracking this ✓
- "Vicor designed out at NVIDIA H100" — confirmed by industry behavior ✓
- "DRAM will double or triple from here" — IN PROGRESS, supply tightening visible across multiple Q1 2026 prints ⏳
- "Inference 20-30% NVDA share by 2028" — multi-year forward, ungradable yet ⏳

---

## Leopold Aschenbrenner — current thesis (per Q1 2026 13F + Situational Awareness essays)

### Most-recent verified positioning (per `research/signals/events/2026-05-21-aschenbrenner-q1-13f.md`)

**Q1 2026 13F filed 2026-05-15 per SEC:**

| Leg | Notional | Detail |
|---|---|---|
| **Longs (~$5.52B equity)** | Concentrated in power assets + crypto-miner-to-AI-host pivots | Bloom Energy $878.7M, Sandisk $724.4M, CoreWeave $556.1M, IREN $401M, CORZ $389.1M, APLD $320M, RIOT $142.2M, CLSK $104.5M, SEI $62.5M, T1 Energy $43.9M, Bitfarms $38.8M + HIVE/Bitdeer/SharonAI |
| **Shorts (~$8.7B notional puts)** | AI chip stack | NVDA $1.57B, ORCL $1.07B, AVGO $1.01B, AMD $969M, SMH $2.04B, plus puts on MU, ASML, INTC, TSM, GLW (sizes undisclosed) |

**Net thesis ("infrastructure arbitrage"):** Short the companies selling AI hardware, long the companies that own the physical assets to run it.

### Situational Awareness essays (the macro foundation)

Per [Situational Awareness essay collection](https://situational-awareness.ai/):

- **AGI by 2027 is "strikingly plausible"** — based on tracing GPT-2 → GPT-4 progression (preschooler → smart high-schooler in 4 years)
- **Compute scaling: ~0.5 OOMs/year**
- **Algorithmic efficiency: ~0.5 OOMs/year**
- **Unhobbling gains** stack on top of the above
- **Trillion-dollar cluster by ~2028** — gigawatt-scale, equivalent to Hoover Dam power, ~1M H100-equivalents, $10s of billions
- **CCP espionage at AI labs** is a real and present security concern — basis for his policy/national security framing
- **2026 compute clusters reach gigawatt scale** — large nuclear reactor equivalent, per [Daniel Scrivner essay summary](https://www.danielscrivner.com/situational-awareness-essays-by-leopold-aschenbrenner/)

### Aschenbrenner's track record (per `meta/source-reliability.md`)

- First major 13F just filed 2026-05-15; track record builds from here
- Pre-fund commentary (Situational Awareness essays mid-2024) on compute scaling has been roughly correct directionally — capex magnitudes ramping as predicted
- The CALL (short chips, long power infra) is unambiguous — will grade over coming 4-8 quarters

### Aschenbrenner's investment-relevant patterns

| Pattern | What it says |
|---|---|
| **Compute scaling continues exponential** | Demand for compute persists through 2027-2028 regardless of any near-term hiccup |
| **Power and physical assets are THE binding constraint** | His biggest long (BE) and full crypto-miner-pivot book reflects this |
| **AI chip multiples are at peak** | Stage 4-5 recognition; $8.7B in puts is the largest single conviction expression |
| **National security / China race** | Sovereign AI is a real driver — pushes spend even if commercial economics question |

---

## Side-by-side comparison

### Where they AGREE (the overarching consensus the user intuited)

| Topic | Patel position | Aschenbrenner position | Overlap |
|---|---|---|---|
| AI infrastructure spend is structurally large + multi-year | "$200B AI CapEx" per [Latent Space framing](https://www.latent.space/p/dylanpatel-cooking) | $5.52B long power infra | BOTH BULLISH |
| Memory is tight and getting tighter | "DRAM double or triple, supply doesn't come till '28" | $724.4M long Sandisk (NAND adjacency) | BOTH BULLISH ON MEMORY/STORAGE |
| Hyperscaler infrastructure capex doesn't slow down soon | 30% of hyperscaler capex going to memory | Long CoreWeave + neocloud / pivot names | BOTH BULLISH |
| Power has been a binding constraint | "Power was binding 2024-25" (now resolved per his model) | $878.7M long Bloom Energy fuel cells | BOTH AGREE POWER WAS BINDING; differ on whether resolved (see disagreement) |
| Recognize the supply-chain time-mismatch | "Incremental supply doesn't come till '28" | Long power-asset names because their 3-7yr head start matters | SHARED MENTAL MODEL — time-to-X / lag-of-supply |

### Where they DISAGREE (and what to make of it)

| Topic | Patel position | Aschenbrenner position | My read |
|---|---|---|---|
| **Is power still the binding constraint?** | NO — "power is not a constraint" 2026; fabs are now | YES — biggest single long is Bloom Energy, $878.7M | **Both partially right.** Power is no longer the front-page bottleneck (Patel right) BUT the time-to-deploy advantage for ex-crypto-miners and BE is structural and persists (Aschenbrenner right) |
| **Is the AI chip stack a SHORT here?** | NO (implicit) — Patel still framing NVDA roadmap (50x Grace-Blackwell vs Hopper) positively | YES — $8.7B notional puts | **Disagree on TIMING.** Multiples are stretched (Aschenbrenner right) but capacity-constrained fundamentals can sustain multiples for several quarters (Patel implicit) |
| **Custom silicon trajectory** | Bullish — 20-30% NVDA inference share by 2028; 44.6% CAGR | Implicit by short stack — doesn't single out custom Si winners | **Aschenbrenner's short stack is consistent with Patel's view BUT his puts are blunt instruments — short NVDA AND AVGO (the custom-Si winner). Inconsistent if he believed Patel's view fully** |
| **What's the actionable AI thesis right now?** | Position in supply-chain bottleneck names that benefit from tightness | Position OUT of chips, INTO power assets and storage | **Patel's framework gives more specific company names; Aschenbrenner's gives directional positioning** |
| **NVIDIA fundamentals 2026** | Implicit bullish — capacity-constrained for years | $1.57B in NVDA puts | **Direct contradiction — Patel's bottom-up suggests beats continue; Aschenbrenner's bet says multiple compression imminent** |

### The complementarity (what the user intuited)

They map cleanly to TWO orthogonal axes of the AI investment thesis:

```
                    DEMAND (Aschenbrenner)
                          |
                     Bullish AGI
                     trillion cluster
                     $$$ flows
                          |
                          |
SUPPLY (Patel) ----------+-----------> 
HBM, fabs, packaging      Companies
custom silicon            owning physical
who benefits              power assets
                          (BE, CRWV, miners)
                          |
                          |
                     Short AI chip
                     stack (peak narrative)
```

- **Patel tells you which suppliers benefit** when the demand arrives — HBM names (Hynix, Samsung, Micron), packaging names (TSMC CoWoS, Camtek, Onto), memory makers (Sandisk for storage layer), MOCVD equipment (AIXTRON), substrate (Ibiden, Shinko)
- **Aschenbrenner tells you the demand is real and the physical-asset owners get paid most** — power generators (BE, VST, CEG), neoclouds with capacity (CRWV, NBIS), ex-crypto-miners with grid interconnect (CORZ, IREN, APLD), fiber and physical-infrastructure plays

Use Patel for component-level conviction inside a name; use Aschenbrenner for portfolio-level allocation between layers.

---

## Implications for our OS

### Where this comparison reinforces existing positions

| Held position (per `research/portfolio/holdings.md`) | Patel signal | Aschenbrenner signal | Combined read |
|---|---|---|---|
| HYNIX (largest position) | STRONG — "DRAM double or triple, '28 supply" + HBM 41% of DRAM rev | NEUTRAL (not in his book; not shorted) | **Patel's view validates the position strongly** |
| MURATA | NEUTRAL (no direct Patel commentary on passives) | NEUTRAL (not in book) | Independent thesis stands |
| GLW (Corning) | NEUTRAL (no direct Patel coverage) | **PUTS** (size undisclosed) | **Aschenbrenner is opposed; needs the deep-research item in todo** |
| SNDK (Sandisk) | Implicit — memory/storage tight | **$724.4M LONG (his #2)** | **Both bullish; reinforces position** |
| TE (T1 Energy) | NEUTRAL | **$43.9M LONG (small but symbolic)** | **Aschenbrenner validates** |
| VICR | NEUTRAL on near-term (Patel said designed out at H100) | NEUTRAL | **WAIT framing stands** |
| NOW, DDOG, PURR, STM, TSEM, AXTI | Not direct subjects | Not in book | Independent theses stand |

### Where this comparison surfaces new tension to resolve

1. **The "is power binding NOW" question.** Patel says no; Aschenbrenner is positioned as if yes. The reconciliation: power was binding 2024-25, has been substantially added through new generation + reactivations + crypto-pivots, but the **time-to-deploy** premium for already-built generation is real and persistent. This means BE / VST / CEG / CORZ / IREN / APLD remain attractive even if marginal new power supply is no longer hardest constraint.

2. **The "short the chips" question.** Patel's bottoms-up (memory tight, fabs constrained, capacity sold out for years) implies chips continue beating. Aschenbrenner's puts ($1.57B NVDA, $1.01B AVGO, $969M AMD) bet on multiple compression. **My net read:** Aschenbrenner may be hedging his long book or playing multi-quarter multiple compression on a different timeline than fundamental beats. The two views aren't mutually exclusive — fundamentals can beat AND multiples can compress simultaneously (this is the Stage 4-5 phenomenon documented in `meta/methodology.md` recognition spectrum).

3. **Custom silicon timing — both bullish but Aschenbrenner is shorting both NVDA AND AVGO.** If you believe Patel's custom-Si-takes-share thesis fully, AVGO is the winner (custom Si beneficiary), not a short. The fact that Aschenbrenner shorts both suggests his thesis is about chip stack multiple compression broadly, not picking custom Si winners. This is informationally important: **Patel's framework is more useful for individual stock-picking; Aschenbrenner's for portfolio allocation between layers.**

### What this comparison adds to `where-we-are.md`

**Non-default read to potentially add:**

"Two of the most-credentialed primary-tier voices in the sector — Patel (supply-side) and Aschenbrenner (demand-side) — are NOT in tension at the macro level. Both bullish on multi-year AI capex cycle, both identifying memory + power + infrastructure as the under-modeled layers. They diverge on **whether to short the chip stack** — Patel implicitly long via component theses, Aschenbrenner explicitly short via puts. The divergence is on TIMING/multiple-compression, not on the underlying demand trajectory. The portfolio implication is to OWN the components Patel identifies as constrained (HBM, memory, packaging) while NOT necessarily owning the chip-stack names that are Stage 4-5 priced."

### Implication for the deep-dig queue (`meta/deep-dig-queue.md`)

Patel's specific claims surface 3 new candidate deep-digs not yet in queue:

- **DRAM commodity vs HBM displacement math** — per Patel claim, conventional DDR margins now competing with HBM. Numerical model needed.
- **TSMC N3 allocation by customer for 2026-2027** — Patel says NVDA's early allocation strategic. Bottoms-up wafer count per hyperscaler.
- **Hyperscaler custom-silicon ramp economics** — the 44.6% CAGR figure needs bottoms-up unit math.

These get added to `deep-dig-queue.md` in next update.

---

## Verdict on the comparison (the user's question, directly answered)

**Yes — Patel and Aschenbrenner complement each other, as you intuited.**

They're solving for **different parts of the same puzzle**:
- Patel: "Which suppliers benefit from this multi-year capex cycle?" (bottom-up, supply-side)
- Aschenbrenner: "Which asset class owners benefit from this multi-year capex cycle?" (top-down, demand-side + asset-owner)

The **overarching agreement**: AI infrastructure capex is structurally large, multi-year, and the layers most under-modeled are memory, power, and physical infrastructure. Components and assets both win.

The **important divergence**: Aschenbrenner explicitly bets against the chip-stack names that ARE most directly modeling the demand he believes in. Patel doesn't go that far — his supply-side view actually validates continued chip-stack fundamental strength even if multiple compression is a separate risk.

**Our OS should:**
1. Treat Patel as the primary source for component-level theses (HBM, memory, packaging, custom silicon trajectory) — most actionable for stock-picking within layers
2. Treat Aschenbrenner as the primary source for layer-allocation conviction (long infrastructure/power-assets; how aggressively to be exposed to chip stack) — most actionable for portfolio-level construction
3. Triangulate when they agree (memory/storage tightness is the cleanest example — both bullish, reinforces SNDK and HYNIX positions)
4. Flag when they diverge (chip-stack short vs supply-chain long; needs separate Recognition Stage analysis per name)

---

## Cross-references

- `research/signals/events/2026-05-21-aschenbrenner-q1-13f.md` — full independent analysis of Aschenbrenner's positions
- `research/meta/source-reliability.md` — tier rankings for both sources
- `research/sector/where-we-are.md` — synthesis layer; should be updated with the comparison output
- `research/sector/scenarios.md` — scenario weights, both Patel and Aschenbrenner partially inform
- `research/portfolio/holdings.md` — user's positions for cross-reference
- `research/meta/deep-dig-queue.md` — items #2 (HBM stack-height) and forthcoming additions on DRAM/HBM displacement + TSMC N3 allocation derived from Patel claims
- `research/companies/HYNIX/thesis.md` — directly benefits from Patel's "DRAM double or triple" call
- `research/companies/MURATA/thesis.md` §BOM-level deep-dig — adjacent (MLCC capacity tightening parallels memory tightening)
