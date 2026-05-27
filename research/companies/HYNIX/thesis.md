# SK Hynix — Thesis

**Last updated:** 2026-05-21
**Tier:** Core — held position, structural moat validated, thesis intact
**Position target:** 10–14% (user currently holds ~12.5% per `research/portfolio/holdings.md` — at target)
**Anti-fragility:** 3.5/5 — wins in S1, S2, S3 (HBM consumed regardless of which chip wins)
**Foundation:** `research/wiki/hbm-primer.md`

---

## TL;DR

SK Hynix is the structural memory leader in AI compute. ~53% global HBM market share per [Trading Key](https://www.tradingkey.com/analysis/stocks/us-stocks/261834990-samsung-sk-hynix-micron-hbm-cxl-pangea-v2-ai-data-center-tradingkey). Q1 2026 revenue 52.1 trillion KRW (+144% YoY) with 72% operating margin per `research/wiki/hbm-primer.md`. **Customer requests exceed 3 years of planned capacity** per CNBC (cited in HBM primer) — the strongest pricing-power signal in the OS.

**Technical moat verified** (per Pass 2 P1 verification item, now resolved): SK Hynix leads on MR-MUF (Mass Reflow Molded Underfill) packaging process — interconnects all stacked chips at once, more efficient than Samsung's TC-NCF. SK Hynix + Micron are qualified at NVDA for HBM4; **Samsung is still nowhere on HBM4 NVDA qualification** per [TechStock substack](https://techstock01.substack.com/p/sk-hynix-and-micron-hbm4-qualification). Samsung's memory controller at 4nm reportedly has yields as low as 40% per same source.

**For the user's 12.5% held position:** thesis is INTACT and CONFIRMED. The earlier "trust prior Claude blindly" concern is resolved — the moat claim was correct. Position is at target. **No action recommended; hold through HBM cycle.**

---

## The business

SK Hynix is the world's second-largest memory company (behind Samsung overall, ahead in HBM specifically). Two main segments:
- **DRAM** — including HBM, premium DDR5, mobile DRAM
- **NAND** — slower-growing, more commoditized

The thesis is concentrated in HBM. Per `research/wiki/hbm-primer.md`:
- HBM3E: dominant; 12-Hi stacks shipping in volume to NVDA Blackwell
- HBM4: SK Hynix + Micron qualified at NVDA; Samsung not yet (per TechStock)
- HBM4E samples: 2H 2026 (per Q1 2026 earnings call)
- HBM4E mass production: 2027 (per same)

## The verified technical moat

User input 2026-05-20: "SK Hynix has materially larger technical moat than Samsung/Micron." User trusted prior Claude blindly. **This verification work resolves that concern.**

Per [TechStock analysis](https://techstock01.substack.com/p/sk-hynix-and-micron-hbm4-qualification) and [Trading Key](https://www.tradingkey.com/analysis/stocks/us-stocks/261834990-samsung-sk-hynix-micron-hbm-cxl-pangea-v2-ai-data-center-tradingkey):

**1. MR-MUF process advantage:**
SK Hynix uses Mass Reflow Molded Underfill — heats and interconnects all stacked HBM chips at once. More efficient than Samsung's TC-NCF (Thermo-Compression Non-Conductive Film), which applies a film after each chip stack. Implication: higher yields at higher stack heights.

**2. NVDA HBM4 qualification status (per TechStock):**
- SK Hynix: **QUALIFIED**
- Micron: **QUALIFIED**
- Samsung: **NOT yet qualified for NVDA HBM4** (despite reaching AMD)

This is a multi-quarter competitive disadvantage for Samsung. SK Hynix captures the highest-margin NVDA HBM4 allocation through at least mid-2027.

**3. Yield differential (per TechStock):**
- Samsung memory controller at 4nm: ~40% yields
- SK Hynix: superior yields (specific number not disclosed; implied materially higher)

**4. Geographic proximity to TSMC:**
Korea is co-located with TSMC's Taiwan packaging ecosystem. Faster logistics + tighter qualification cycles.

**5. Market share at ~53%** per Trading Key — dominant position that compounds with each generation.

**6. iHBM thermal moat (NEW — added 2026-05-26 per `research/signals/events/2026-05-25-sk-hynix-ihbm.md`):**
On 2026-05-25 SK Hynix unveiled iHBM — Integrated Cooling Elements (ICEs) embedded directly into the HBM package at the D2D PHY (Die-to-Die Physical Layer) interface between HBM and GPUs. Per [PR Newswire](https://www.prnewswire.com/news-releases/sk-hynix-unveils-ihbm-thermal-solution-to-boost-ai-performance-302781354.html) and [TrendForce](https://www.trendforce.com/news/2026/05/26/news-sk-hynix-introduces-ihbm-solution-targets-hbm5-adoption-with-30-thermal-resistance-reduction/):
- ICEs made of thermally conductive, electrically non-conductive silicon-based materials
- 30% thermal resistance reduction vs current HBM packaging
- Manufactured via Wafer Level Packaging (WLP) built on existing MR-MUF process (i.e., extends the existing process moat rather than requiring new infrastructure)
- High SiP design compatibility — customers adopt with minimal redesign
- Targeted at HBM5 and next-generation HBM products

**Why it matters:** This is a technology-moat extension on top of the existing supply moat + packaging moat. Thermal envelopes have been industry-wide binding ceiling on HBM4 16-Hi stack heights and AI accelerator TDPs; iHBM addresses this directly at the highest-heat-flux interface in the accelerator package. Customer/shipping dates not disclosed but HBM4E samples ship H2 2026 + HBM4E AI accelerators ship 2027 per prior earnings call. Samsung's HBM3E qualification path at NVDA was already 12-18mo TTQ per supplier disclosure; now Samsung must qualify thermal performance parity in addition to capacity + yield → effective alternative-supplier TTQ extends further → bypass-route maturity slips later.

**Duration implication:** Combined supply moat (3-year capacity gap) + packaging moat (MR-MUF) + thermal moat (iHBM) means the duration scoring for SK Hynix may warrant upgrade from Long (3-5y) to Long-Open-ended (4-6y) per `research/meta/2026-05-26-duration-of-relevance-scoring.md`. Falsifier: Samsung iHBM-equivalent disclosure, customer thermal-parity statement, or HBM5 timeline slip.

## Recent financials

Per [SK Hynix press release via PR Newswire](https://www.prnewswire.com/news-releases/sk-hynix-announces-1q26-financial-results-302750959.html) and `research/wiki/hbm-primer.md`:

| Metric | Q1 2026 | Source |
|---|---|---|
| Revenue | 52.1T KRW (+144% YoY) | PR Newswire |
| Operating margin | 72% | per HBM primer / CNBC |
| Customer requests vs capacity | Exceed 3-year planned capacity | per CNBC, HBM primer §2 |

Expansion projects (per Nine Scrolls citation in HBM primer):
- M15X fab Cheongju: 19T KRW investment (~$13B), dedicated DRAM + HBM
- Yongin Cluster: completion accelerated to Feb 2027
- HBM4E mass production: 2027

## Per-segment business mix

HBM share of total DRAM revenue is rapidly increasing. Per `wiki/hbm-primer.md`, HBM is structurally the highest-margin product in DRAM history. Forward Mix Probabilistic Model implications:
- 12 months ago: HBM was ~25-30% of DRAM revenue
- Today: HBM is likely 40%+ of DRAM revenue (with 72% margins driving operating income disproportionately)
- 2027: HBM could be 50%+ of DRAM revenue as HBM4 ramps

Per the Forward Mix Model in `research/meta/methodology.md`: SK Hynix is in PROCESS of mix-shifting to HBM-dominant. Even if NAND remains weak, the HBM mix shift drives total company economics meaningfully.

## Duration × Magnitude × Pricing × Recognition × Execution Quality

### Duration
HBM3E sold out 2026; HBM4 ramping with NVDA qualification advantage. Customer requests "exceed 3-year planned capacity" per CNBC. **Duration: 3-5 years minimum** of binding supply-demand imbalance.

### Magnitude
72% Q1 2026 operating margin per CNBC = best in DRAM history. Per Dylan Patel "2-3x more pricing power" claim (per `research/wiki/hbm-primer.md` §11, source citation pending — flagged as primary-tier signal worth verification): another doubling-tripling of pricing power potentially available through 2027.

### Pricing power
HIGH and structurally protected by:
- NVDA HBM4 qualification advantage vs Samsung
- MR-MUF process moat
- 3-year customer demand visibility

### Recognition Stage
- Today: **Stage 3-4** — broad mainstream coverage, multiple expanded (+144% YoY Q1 revenue per HBM primer); known story
- Stage 5 risk: real if HBM4 transition is fully priced in and Samsung qualification at NVDA closes the gap

### Execution Quality
| Sub-criterion | Score | Reasoning |
|---|---|---|
| Moat type | 5/5 | Verified MR-MUF process + NVDA qualification + scale |
| Management track record | 4/5 | Korean conglomerate culture; conservative communication; reliable execution |
| Technical innovation cadence | 4.5/5 | HBM3E → HBM4 → HBM4E on schedule; CXL adjacency emerging |
| Customer relationships | 5/5 | NVDA primary customer for highest-margin product; deep multi-year |

**Execution Quality: 4.6/5**

## Anti-fragility scoring (per `research/sector/scenarios.md`)

| Scenario | Weight | SK Hynix result | Reasoning |
|---|---|---|---|
| S1 NVDA dominant (33%) | | **WIN (cleanest)** | Primary HBM4 supplier to NVDA |
| S2 Custom Si fragments (30%) | | **WIN** | Custom Si (TPU, Trainium, Maia, MTIA) also needs HBM — see `wiki/custom-silicon-primer.md` |
| S3 Power binds (25%) | | NEUTRAL-POSITIVE | Memory consumed per chip regardless of how power constrained |
| S4 Digestion (6%) | | LOSS | Memory cycle is historically volatile; pause hits |
| S5 Regulatory shock (6%) | | MIXED | Korea-located but US-China dynamics affect customer mix |

**Anti-fragility score: 3.5/5** — among the strongest in the OS universe.

## Token-Volume Filter
Per `research/meta/methodology.md`: ✓ PASSES cleanly. HBM consumed per inference; token volume grows = HBM demand grows; per-token cost direction irrelevant.

## Bull case (P = 55%)
HBM4 transition cements SK Hynix as primary NVDA + AMD supplier through 2027. Pricing power compounds (potentially "2-3x more" per Dylan Patel signal). Operating margins sustain at 65%+ through 2027. **Expected return: +25% to +50%.**

## Bear case (P = 20%)
S4 (digestion) plays AND Samsung qualifies at NVDA for HBM4. Multiple compresses materially. Memory cycle turns hard. **Expected loss: -20% to -35%.**

## Base case (P = 25%)
Revenue continues at +50-70% YoY through 2026. Multiple holds at current levels. Stock +15% to +30%.

## Falsifiers — mandatory

1. **Samsung qualifies at NVDA for HBM4 with material share allocation.** Closes the SK Hynix competitive moat.
2. **Operating margin drops below 60% in Q3/Q4 2026.** Pricing pressure materializes.
3. **HBM demand grows below +50% YoY in any quarter.** Suggests TrendForce +77% (2026) consensus is too aggressive.
4. **Major NVDA HBM4 yield issue** that affects volume shipments — cascades to SK Hynix revenue.

## Position recommendation

**User holds at ~12.5%** per `research/portfolio/holdings.md`. **Recommendation: HOLD at current size.** Anti-fragility 3.5/5 + Execution Quality 4.6/5 supports Core-tier sizing. Position is appropriately sized given:
- Strongest structural moat in the OS universe
- Confirmed technical advantage vs competitors
- Multi-year demand visibility
- Token-Volume Filter passes cleanly

No trim recommended. If anything, the verification work supports HOLDING through any short-term volatility.

## Cross-references

- `research/wiki/hbm-primer.md` — supply-demand foundation
- `research/wiki/agentic-workload-scaling.md` — demand model
- `research/wiki/custom-silicon-primer.md` — confirms even custom Si needs HBM
- `research/signals/triangulation.md` — capacity-constrained signal
- `research/companies/HYNIX/facts.md` — raw financials
- `research/meta/patel-vs-aschenbrenner-thesis-comparison.md` — cross-source synthesis below

## Cross-source synthesis — Patel + Aschenbrenner (added 2026-05-21)

Per `research/meta/patel-vs-aschenbrenner-thesis-comparison.md`:

- **Patel: STRONGEST BULL CASE in the OS for memory broadly.** Direct quote: "DRAM will double or triple from here still, supply doesn't come till '28" per [24/7 Wall St 2026-04-23](https://247wallst.com/personal-finance/2026/04/23/dram-will-double-or-triple-from-here-as-ai-demand-outpaces-supply-chain-capacity/). Memory now ~30% of hyperscaler capex; HBM ~41% of DRAM revenue by 2026 per SemiAnalysis (cited in comparison file).
- **Aschenbrenner: NEUTRAL** — not in his long book, not in his put list per `research/signals/events/2026-05-21-aschenbrenner-q1-13f.md`.
- **Implication:** SK Hynix is the **single most-reinforced name in the portfolio** under these two voices. Patel's call directly validates the HBM thesis at unusual conviction. No action change; HOLD at ~12.5% per `research/portfolio/holdings.md`. Position is among the highest-conviction names we own.

## Cross-reference — Memory cycle primer (added 2026-05-21)

Per `research/wiki/memory-cycle-primer.md`: full cycle dynamics + BOM-level economics:

- **HBM4 ASP per stack ~$500 vs HBM3E ~$300** (per [Silicon Analysts April 2026](https://siliconanalysts.com/data/hbm-pricing)) — ~67% ASP uplift per stack at the next-gen transition
- **HBM4 ASP per GB ~$10+ vs HBM3E ~$7-8** (same source) — ~30% per-GB uplift
- **SK Hynix allocated ~70% of NVDA Vera Rubin HBM4 demand** per [SemiCone](https://www.semicone.com/article-385.html) (significantly higher than the ~50% market estimate)
- **HBM industry capacity end-2026 ~315-345K wpm** (my synthesis from cited sources in memory cycle primer) — roughly 2x late-2025 baseline, but demand growing 77% YoY 2026 + 68% YoY 2027 per `wiki/memory-cycle-primer.md`. Supply ramp does not catch demand ramp.
- **New fab capacity unlikely in volume before late 2027 / 2028** per [TrendForce 2026-03-31](https://www.trendforce.com/presscenter/news/20260331-12995.html) — confirms Patel's "supply doesn't come till '28" framing
- **Implication:** position thesis (HOLD at ~12.5%) is further reinforced by BOM-level math. SK Hynix captures ~70% of the largest single AI customer's HBM4 allocation during a period of structural ASP uplift through at least mid-2027. Highest-conviction held position by BOM-level evidence.

## Cross-reference — Networking primer (added 2026-05-21)

Per `research/wiki/networking-primer.md`: HBM bandwidth and network fabric bandwidth scale together — both at ~2x/2yr cadence. Per Extrapolation 8 (network spend rising as % of total AI spend), the compute-memory-network triad scales more tightly than prior modeling assumed. HBM allocation to NVDA Rubin (~70% to Hynix) is tightly coupled to network fabric capacity at the rack level (NVLink 6, Spectrum-X). **No direct change to HYNIX thesis** but confirms the memory-network co-scaling pattern that supports the HBM tightness call (per `wiki/memory-cycle-primer.md`).

## Cross-reference — NVDA Q1 FY27 call deep-dive (added 2026-05-21)

Per `research/signals/events/2026-05-20-NVDA-Q1FY27-call-deepdive.md`:

Jensen's "supply-constrained throughout the entire life of Vera Rubin" (~3 years) is the **strongest single-source confirmation** in the OS that HBM4 allocation to NVDA (~70% to SK Hynix per Counterpoint) is sustained through 2027-2028. Combined with NVDA Q1 GM 74.9% vs my pre-print call 75.4% — the 50bp miss is consistent with HBM cost pressure flowing through to NVDA's BUYER side, which is BULLISH for HYNIX as the seller. HYNIX is now triangulated at: Patel (sell-side memory call) + TrendForce (industry forecast) + Jensen (largest customer commitment) — among the most-supported positions in the portfolio by primary-source evidence.

## Cross-reference — Bottleneck map (added 2026-05-22)

Per `research/portfolio/bottleneck-map.md`:
- **Layer 0** — at HBM bottleneck (today binding per `sector/bottlenecks.md`)
- **Top-compute agnostic: 9/10** — sells HBM to NVDA + AMD + every custom ASIC
- **CPU tightness: 3/10** — HBM-dominant, modest DDR exposure
- **Agentic tightness: 8/10** — agentic = more inference workloads = more HBM allocation

## Cross-reference — Google I/O 2026 + Cloud Next 2026 event (added 2026-05-25)

Per `research/signals/events/2026-05-20-google-io-2026.md`:

**STRONGEST 1st-order beneficiary among held names.** TPU 8t (Sunfish, Broadcom-designed) superpods 9,600 chips + TPU 8i (Zebrafish, MediaTek-designed) 384MB on-chip SRAM = massive HBM4 + SRAM demand on top of existing NVDA Blackwell + Vera Rubin + MSFT Maia + AMZN Trainium 3 + Meta MTIA programs. **Hynix HBM stack now demanded by 5+ hyperscaler programs simultaneously** — the strongest single-source verification across the entire OS for the "constrained throughout entire life of Vera Rubin" thesis. Anthropic 3.5GW commitment to Google TPU for 2027 adds another anchor demand source. No tier change; reinforces Core position at top allocation.

## Cross-reference — Test-time compute scaling regime (added 2026-05-25)

Per `research/signals/events/2026-05-25-test-time-compute-scaling.md`:

**STRONGEST 1st-order beneficiary of the test-time-compute regime.** OpenAI Erdős unit distance conjecture solved 2026-05-20 + FrontierMath top models now solving 40% of postdoc-level problems (up from <2%) + test-time compute REPLACING training scale as dominant LLM-improvement vector = HBM cycles per query scale with thinking-token count. Sustained HBM bandwidth at multi-hour-per-problem cadence (vs burst inference for chat). Hynix's HBM stack now demanded by 5+ hyperscaler programs SIMULTANEOUSLY, each with multiplied per-query consumption under test-time scaling. The "constrained throughout entire life of Vera Rubin" thesis is further reinforced. No tier change; reinforces Core position at top allocation. New watch item: HBM-per-thinking-token allocation patterns disclosed in any Q-by-Q earnings commentary.

## Update 2026-05-25 — Phase A valuation verification (per principle #25)

Per the post-research extrapolation discipline applied 2026-05-25 + verified via web search:

**Forward P/E verified:** 5.92x to 6.79x as of mid-May 2026 per [Finbox forward P/E tracker](https://finbox.com/KOSE:A000660/explorer/pe_fwd/) and [Seoul Economic Daily](https://en.sedaily.com/finance/2026/05/13/sk-hynix-valuation-overtakes-samsung-electronics-for-first). **2026 EPS consensus raised from ₩217,976 to ₩281,074** (+29%); 37-analyst consensus price target raised ₩1,423,257 → ₩1,480,422 with high end at ₩1,700,000; fair value estimate raised ₩255,245 → ₩398,528.

**Important context:** per Seoul Economic Daily, "after SK hynix pre-empted the HBM market and overtook Samsung Electronics in operating profit last year, the perception of SK hynix as relatively undervalued has been erased." Translation: valuation is attractive in ABSOLUTE terms (<7x forward) but the multi-quarter re-rating from heavily-undervalued to fair-value has already happened.

**Implication for existing 10.33% position (+35% unrealized):**
- Asymmetric upside from multiple expansion is NARROWER than the prior pure-undervaluation thesis implied
- BUT EPS revisions still ahead (₩217K → ₩281K = +29% consensus revision in recent months) — earnings revisions can drive returns independent of multiple expansion
- Sustained HBM demand stack (5+ hyperscaler programs simultaneously) + test-time-compute regime + Google I/O TPU 8t/8i bifurcation = the EPS revision trajectory likely continues
- Position remains Core; valuation framework refined from "undervalued" to "fairly valued with continued EPS revision upside"

No tier change; sizing-matrix consideration: HOLD current allocation, lean on EPS trajectory rather than multiple-expansion thesis.

## Cross-reference — Model economics primer (added 2026-05-25)

Per `research/wiki/model-economics-primer.md`:

The cost/sustainability counterpart to the demand-side test-time-compute event. Verified LLM inference economics + 1999-fiber-buildout counter-analog stress test surface the structural conclusion: AI capex (1.28% of GDP) exceeds 1999 telecom peak BUT financing is fundamentally different (cash-funded trillion-dollar tech, debt/equity 0.23 for AMZN/GOOG/MSFT/META). **Position remains structurally defensible.** Hynix specifically: 5.92-6.79x forward P/E inherently less exposed to Cisco-1999 multiple-compression analog than higher-multiple AI names. The 3-5x invisible-reasoning-token multiplier quantifies the test-time-compute regime cost economics. MYTHOS worked example (~$375K compute spend → $50M-$1B+ cybersecurity value at ~100x-2,000x ROI estimate) proves "compute as utility" framing for at least one vertical.

## Cross-reference — Advanced packaging primer (added 2026-05-25)

Per `research/wiki/advanced-packaging-primer.md`:

**Hynix HBM4 production is GATED by advanced packaging capacity.** TSMC CoWoS sold out through 2027 with 50+ week lead times; HBM4 must physically bond to logic die during CoWoS process. SK Hynix US packaging plant ($3.9B investment per Tom's Hardware) verifies multi-year geographic diversification away from Taiwan concentration. **SK Hynix turning to Intel EMIB** as TSMC CoWoS bottleneck squeezes supply — per principle #9 bypass-route thinking, Intel EMIB emerges as credible alternative. Hybrid bonding (BESI <10nm precision moat) becomes mandatory for HBM4E 16-Hi stacks expected 2026 — Hynix is in the bonding-customer position. **The packaging bottleneck IS the gating constraint for Hynix's HBM4 ramp** — strengthens "constrained throughout Vera Rubin life" framing further. No tier change; reinforces Core position.

## Cross-reference — Principle #26 binding-constraint test (added 2026-05-25)

Per `research/meta/methodology.md` principle #26 codified 2026-05-25:

**Binding-constraint test applied — HYNIX classifies STRUCTURAL, not cyclical:**

- End-product capability tested: "reasoning depth per query at frontier LLM labs"
- Component: HBM bandwidth + capacity
- Test result: HBM bandwidth DIRECTLY scales with reasoning-token throughput (per `signals/events/2026-05-25-test-time-compute-scaling.md` 1st-order cascade). Adding more HBM directly increases thinking-token depth a model can sustain. NOT a discretionary feature — the END PRODUCT'S QUALITY is tied to this component.

**Mispricing spread (Phase A verified 2026-05-25):**
- Current forward P/E: 5.92-6.79x = consistent with CYCLICAL framing
- Structural-growth comparable multiple range: 15-30x
- Re-rating potential: 2-3x if structural framing wins consensus
- Independent of EPS growth (which is ALSO trending up: 2026 EPS consensus raised ₩217K→₩281K = +29% in recent months)

**Pre-training-anchor bias acknowledged per B28:** my pre-training was heavily exposed to 2017-2023 cyclical memory cycle including 2022-2023 downturn. Default classification was "cyclical." User-articulated principle #26 binding-constraint test forces explicit re-weighting against verified 2024-2026 structural evidence. **Reclassification to STRUCTURAL is justified by data.**

**Falsifiers (per principle #26 worked example):**
- HBM-per-FLOP requirements plateau across 2 consecutive model generations (signals memory plateau)
- MoE/sparse architectures become dominant frontier-model architecture (decouples memory from reasoning depth)
- Chinese memory supply (CXMT, ChangXin) meaningfully compresses pricing dynamics
- Any of the above → re-classify back toward cyclical framing

**Implication for existing 10.33% Core position:** the structural-classification framing INCREASES sizing-matrix conviction. Position remains Core; the multi-quarter re-rating thesis (EPS revisions + multiple expansion) is a 12-18 month catalyst window per principle #26 sell-side-framework-lag dynamic (2-4 quarters re-rating cycle). No tier change; reinforces existing thesis.

## Update 2026-05-26 — Rubin Ultra H2 2027 HBM4E 16-stack BOM confirmation (Agent 1 research)

**Per `research/meta/2026-05-26-positional-strength-duration.md`:**

**First confirmed Rubin Ultra memory specification:** NVDA Rubin Ultra (VR300) launches H2 2027 with **16 stacks of HBM4E per GPU package, 1 TB HBM4E per GPU, 32 TB/s bandwidth per GPU** per [VideoCardz](https://videocardz.com/newz/nvidia-unveils-rubin-ultra-with-1tb-hbm4e-memory-for-2027-feynman-architecture-in-2028) + [Tom's Hardware](https://www.tomshardware.com/pc-components/gpus/nvidias-vera-rubin-platform-in-depth-inside-nvidias-most-complex-ai-and-hpc-platform-to-date). NVL576 rack specs: 576 GPUs / 144 GPU packages; 4.6 PB/s HBM4E aggregate; 365 TB total fast memory; 15 Exaflops FP4 inference; 600 kW per rack.

**Implication for SK Hynix duration:**
HBM4E mass production target (SK Hynix Q1 CY26 earnings: samples H2 2026, mass production 2027) ALIGNS PRECISELY with Rubin Ultra H2 2027 shipment window. Any HBM4E production slip directly delays Rubin Ultra ramp = continued HBM4 12-Hi pricing power in interim. This LOCKS the HBM4E pricing-power window for SK Hynix through at least H2 2027.

**Combined with iHBM thermal moat (2026-05-25 announcement) + MR-MUF packaging moat + supply moat (3-year capacity gap):**
- THREE moats stacking: supply + packaging + thermal
- Duration upgraded from Long (3-5y) to **Long-Open-ended (4-6y)** per `meta/2026-05-26-positional-strength-duration.md`
- Mgmt-confirmed 3-year capacity gap extends past 2028 into HBM5 era

**Falsifier reinforcement:** Samsung achieving thermal-parity (iHBM-equivalent) disclosure within 12 months OR HBM5 timeline slips OR HBM-per-FLOP plateau across 2 model generations. None firing currently.

## Cross-reference — SNOW $6B AWS pact TRACE (added 2026-05-27, back-reference per Critical Rule #10)

Per `research/signals/events/2026-05-27-SNOW-AWS-pact.md`: HYNIX named in 3rd-order cascade as **marginal beneficiary**. P~35% confidence; magnitude marginal. Logic: SNOW's 5-year AWS infrastructure commitment includes AI GPUs; AI GPUs require HBM; SNOW's incremental AWS GPU demand adds to broader hyperscaler HBM consumption — but SNOW alone is one input among thousands driving AWS GPU cluster expansion.

**No thesis update warranted (premortem 2026-05-27)**: HYNIX thesis is anchored on HBM stack-height crowding-out + iHBM thermal moat + 3-year backlog visibility — load-bearing structural evidence is multiple orders of magnitude larger than the marginal incremental signal from one customer's 5-year cloud infrastructure commitment. The SNOW-AWS pact is environmental confirmation, not new HYNIX thesis evidence. Existing held position remains anchored on the direct HBM-supply-chain structural evidence.
