# 2026-06-14 PM4 — U8 candidate universal falsifier verification: token-cost-elasticity demand-destruction risk for HBM; 3-subagent synthesis (Evans framework + telecom historical analog + AI efficiency frontier + Meta capping verification); H_U8 posterior reweighted; DDR5-over-HBM profitability flip Q1 2026 identified as first empirical U8-adjacent signal

**Workflow:** Workflow #9 step 0-4 executed via 3 parallel research subagents per plan approved 2026-06-14 21:28 UTC.

**Trigger:** User input 2026-06-14 19:13 UTC proposing telecom data analog as candidate UNIVERSAL falsifier for HBM structural-regime thesis. Hypothesis: if model-efficiency gains compress bits-per-token faster than demand elasticity expands token volume, HBM demand could compress even while overall AI adoption grows.

**Plan reference:** `/root/.claude/plans/enumerated-tickling-hartmanis.md` (token-cost-elasticity research approved 2026-06-14 21:28 UTC).

## 1. Subagent A — Benedict Evans framework (research-verified 2026-06-14 PM4 T1)

### Evans's verbatim framework

Per Evans 2026-05-24 essay [Predicting AI Job Exposure](https://www.ben-evans.com/benedictevans/2026/5/24/ai-job-exposure) (T1):

> *"The Jevons Paradox is really applied price elasticity: if you make it cheaper to do something, do you do the same for less money (or resources, or employees), or more for the same money, or does a new ROI mean you do more for more money?"*

Per Evans 2019-01-16 essay [5G: If You Build It, We Will Fill It](https://www.ben-evans.com/benedictevans/2019/1/16/5g-if-you-build-it-we-will-fill-it) (T1) + extensive 2026 reframing:

> *"Mobile operators carry exponentially more data than they did a decade ago, spend roughly $200 billion annually on capital investment, and have delivered miserable returns to shareholders."*

Mobile data traffic grew roughly **1,500-2,000× between 2010 and 2025**; telecom stocks went nowhere for 25 years (T1).

### Evans's Lenny's Podcast 2026-05-31 (T2 reconstructed from 3 independent secondary sources):

> *"Sam Altman said we're going to be selling AI intelligence on a meter like water or electricity. And you look at this and think, my dear sweet child, you need me to explain the marginal structure of the utility industry to you."*

Per [AI Eats the World May 2026 deck](https://www.slideshare.net/slideshow/ai-eats-the-world-benedict-evans-may-2026/287592833) (T1):
- "LLMs: capital-intensive, no network effects — commodities with low margins"
- "Software: capital-light, network effects — monopolies with high margins"

### Evans's layer-map (the load-bearing structural framing)

| Evans's telecom layer | AI equivalent | Evans's published prediction |
|---|---|---|
| Mobile operators (carriers) | LLM model providers (OpenAI, Anthropic) | Miserable returns despite volume growth — COMMODITIZED |
| Telecom equipment suppliers (Ericsson, Nokia) | GPU/compute suppliers (NVIDIA, AMD) | **NOT analyzed by Evans** |
| Component suppliers (radio chips, memory) | HBM/DRAM suppliers (SK Hynix, Micron) | **NOT analyzed by Evans** |
| Application layer (Google, Facebook) | AI application layer (TBD winners) | Value concentration here |

### Negative findings on Evans

- Evans has NO published essays on HBM, DRAM, or component-level memory economics (confirmed exhaustive search)
- Evans has NO formal taxonomy distinguishing "elastic → component revenue grows" from "inelastic → component revenue compresses"
- Evans has NO published dedicated analysis of inference cost trajectories or implications of algorithmic efficiency gains (e.g., DeepSeek-class compression) for infrastructure demand
- Evans has NOT published a leading-indicator checklist for predicting which regime applies in any given technology transition

**Evans's framework predicts LLM-provider commoditization (carriers analogy), NOT HBM commoditization.** The cascade-mechanism by which carrier-layer compression flows down to component layer is consistent with his framework but NOT explicitly published by him.

## 2. Subagent B — Telecom historical analog (research-verified 2026-06-14 PM4 T1/T2)

### Data-cost-per-MB trajectory

| Generation | Cost-per-MB (end-user) | Compression vs prior |
|---|---|---|
| 2G GPRS ~2001 | $5-18/MB | Baseline |
| 3G ~2003-2007 | $0.50-2.00/MB decline to $0.10/MB | ~10-50× reduction |
| 4G ~2010-2013 | $0.005-0.01/MB | **~1000× reduction vs 3G** per arxiv.org/2004.00853 |
| 5G ~2019-2022 | $0.05-0.10/GB at launch | Modest reduction (priced at/below 4G parity) |
| India/Jio 2016-2018 | Rs 184/GB → Rs 11-15/GB | **~95% in 24 months** while data consumption +56× |

**Long-run price elasticity of mobile data demand: -0.52 to -0.53** for OECD per ScienceDirect panel study (2005-2015) — **sub-unit elasticity** means operator ARPU compresses unless volume growth exceeds price decline (T2).

### Component-vendor revenue trajectories — the load-bearing data

**Ericsson (T1 IR):**
- 2000 peak: SEK 273.6B → 2003 trough: ~SEK 145B = **-45% peak-to-trough** (telecom bust)
- 2015 peak: SEK 246.9B → 2017 trough: SEK 201.3B = **-18.5% in 2 years** (4G saturation)
- 2022 peak: SEK 271.5B → 2024: SEK 247.9B = **-8.7% post-5G**

**Nokia (T1 IR):**
- 2022 peak: EUR 24.9B → 2024: EUR 19.2B = **-22.9% in 2 years** post-5G; India contribution -7 ppts of 2024 -9% YoY

**Nortel (T1 SEC):** $30.3B (2000) → $10.9B (2001) = **-64% in one year**; Chapter 11 January 2009

**Lucent (T1 SEC):** ~$28-29B (FY2000) → 41% of FY2001 level by 2006 (sustained multi-year compression); eventually extinct

**Cisco (T1 SEC):**
- FY2000 peak: $18.9B → FY2002 trough: $18.9B (-15% intermediate); recovered FY2004
- **FY2015-FY2021: $48-52B FLAT FOR 6 CONSECUTIVE YEARS while internet traffic grew ~5-6×**
- Mechanism: hyperscaler white-box switching + Broadcom Tomahawk merchant silicon captured rent that would have accrued to Cisco; by 2023 Cisco held only ~10% of hyperscale switching segment vs ODMs 51% + Arista 30%

**Global RAN market (Dell'Oro T2):** $45.2B (2022) → $35B (2024) = **-22% in 2 years**. Dell'Oro 5-year forecast: 0% CAGR through 2029; total decline 21% peak-to-2029.

### The 3 mechanisms that compressed component vendor revenue (subagent B synthesis):

| Mechanism | Historical instance | Magnitude | HBM analog quality |
|---|---|---|---|
| **M1 Capex cycle peak/bust** | 2001-2003 telecom bust | Ericsson -45%; Nortel -64% in 1yr; Cisco -15% | MODERATE — applicable if AI training capex peaks before inference fully absorbs; hyperscaler balance sheets stronger than operators 2001 |
| **M2 Efficiency-absorbs-volume (saturation)** | 4G saturation 2015-2018; Post-5G 2022-2024 | RAN -22% while subs grew | **STRONGEST ANALOG** — spectral-efficiency gains reduced per-bit hardware need exactly as KV-cache + MoE + speculative decoding reduce per-token bit need |
| **M3 Merchant-silicon displacement** | Cisco cloud era 2015-2021 | 6 years flat revenue while traffic +5-6× | STRONG STRUCTURAL ANALOG — Google TPU, Amazon Trainium, Microsoft Maia substituting GPU/HBM; rent migrating from component to chip-design layer |
| M4 ARPU destruction → capex cut | India/Jio 2016-2018 | Ericsson India revenue collapse | WEAK ANALOG — hyperscaler inference ARPU not compressing same way as Indian operators |

### Key telecom finding: ARPU vs equipment economics can move OPPOSITELY

In India 2016-2018: operator ARPU fell 42% AND equipment capex fell. In 2001 bust: operator ARPU held reasonably but equipment vendor revenue collapsed because capex froze. In 4G saturation 2015-2018: operator ARPU gradually declined AND equipment vendor revenue compressed. **All three mechanisms operate independently — the U8 risk for HBM doesn't require all of them, just one.**

## 3. Subagent C — Current AI efficiency frontier (research-verified 2026-06-14 PM4 T1/T2)

### Meta token-capping claim — CONFIRMED with critical nuance

Per T1 The Information (Jyoti Mann ~2026-06-12), confirmed by [The Decoder](https://the-decoder.com/meta-shifts-from-tokenmaxxing-to-token-managing-as-internal-ai-costs-reportedly-hit-billions/), [MLQ News](https://mlq.ai/news/meta-caps-internal-ai-token-spending-after-costs-approach-billions-in-2026/):

- "Claudeonomics" leaderboard built April 2026 → Meta employees consumed **73.7 trillion tokens in ~30 days**
- "Tokenmaxxing" gamed behavior — employees designed longer prompts, ran parallel agents, deployed meeting bots to boost ranking
- Meta CTO Andrew Bosworth: *"All motion is not progress and token usage alone is not a measure of impact of any kind."*
- Response: dismantle Claudeonomics, build "AI Gateway" centralized tracking, steer to internal MetaCode assistant, formal token budgets early 2027; memo to ~6,000 employees

**CRITICAL NUANCE:** the capping is **INTERNAL employee tool spend cost-control**, NOT customer-facing rationing of AI products due to HBM scarcity pricing. Same pattern at Amazon (shut down internal AI token leaderboard May 2026 per T2 Yahoo Finance), Uber (exhausted full-year 2026 token budget in first 4 months per T2 Fortune), Microsoft (reduced/restricted internal AI access early 2026 per T2 TheStreet).

**Implication for the user's hypothesis:** the direction (capping happening) is verified, but the mechanism is internal-cost discipline not external HBM-rationing. The user's intuition about cost-pressure-driven capping is correct; the cause-chain runs through internal tool spend rather than HBM-supply pricing.

### Efficiency compression — quantified (T1/T2)

| Technique | Compression | Source |
|---|---|---|
| Google TurboQuant (Mar 2026, ICLR 2026) | 6× KV memory reduction; 8× faster attention at 4-bit on H100 | T1 arXiv |
| DeepSeek V3 MLA architecture | 70KB KV/token vs 516KB LLaMA-3.1 405B = **~57× reduction**; 250 vs 2,448 GFLOPS/token | T1 arXiv 2412.19437 |
| EAGLE-3 speculative decoding | 2-3× speedup, 80% draft acceptance; standard in vLLM/SGLang/TensorRT-LLM | T2 premai.io |
| LLM API prices last 12 months | **~80% compression** at product layer | T2 IntuitionLabs |
| Frontier-class cost-per-1M-tokens 18mo | GPT-4 $30/$60 → GPT-4o $2.50/$10 = **12× input compression** | T2 IntuitionLabs |
| Economy-class floor 18mo | GPT-4o mini $0.15/$0.60 → DeepSeek V4 Flash $0.14/$0.28 = **~2× further compression** | T2 finout.io |

### The Jevons-paradox-style early evidence

Per T2 NavyaAI report: **token prices fell ~80% in 12 months ending mid-2026; enterprise AI bills rose ~3× over the same period.** Volume elasticity is currently OUTRUNNING price compression at the dollar level. Reasons (T2):
- Agentic workflows multiply tokens consumed per task by 50-500× (artefact.com)
- 72% of production AI cost sits OUTSIDE the model invoice (orchestration, retries, observability) — per-token price isn't the elastic unit (cloudzero.com)
- Enterprise consumption driven by deployment mandates, not willingness-to-pay (price-inelastic at margin)

Provider revenue (with explicit hedges per anti-fabrication-hook):
- OpenAI ~$5.7B Q1 2026 revenue ~$25B annualized (subagent C T2 estimate via search summary; not yet repo-grounded; directional pending primary verification)
- Anthropic ~$45B annualized (subagent C flagged T3 anomalously high pending primary disclosure)

### CRITICAL EARLY-WARNING SIGNAL — first empirical U8-adjacent firing

**DDR5 RDIMM surpassed HBM in per-wafer profitability for the FIRST time in Q1 2026** per T2 [TrendForce/Digitimes Apr 2026](https://www.digitimes.com/news/a20260413PD211/ddr5-demand-hbm-profit-hbm4.html) + [KAD8](https://www.kad8.com/hardware/ddr5-surpasses-hbm-in-profitability-as-ai-inference-reshapes-memory-demand/). Driver: CSPs expanding general INFERENCE server deployments (which use DDR5, not HBM). This is the first concrete market evidence that **memory-intensity-per-dollar of AI workloads is declining at the margin** as the mix shifts from training (HBM-heavy) to inference (DDR5-heavy). This is exactly the U8 mechanism in early form.

### Structural methodology gap in HBM forecasts

**HBM forecasters (TrendForce, Yole, IDC) do NOT model bits-per-token efficiency.** They model hardware shipments + capacity expansion + AI server unit growth. No bits-per-token efficiency assumption flows through their bandwidth-demand models. Their HBM forecasts carry a **structural blind spot** to efficiency-gain compression — exactly the gap the user surfaced.

## 4. Joint synthesis (across A + B + C)

### The verdict on U8

**U8 is PROMOTED from "candidate" to "credible falsifier worth tracking with named indicators."**

Combined evidence:
- **A (Evans framework):** predicts LLM-provider commoditization (carriers analogy); doesn't extend to HBM but cascade mechanism is consistent
- **B (Telecom historical):** EMPIRICALLY confirms component vendors DO get compressed when efficiency gains absorb volume growth (RAN 4G saturation -18% in 2 years; Cisco 6 years flat; -22% post-5G 2022-24). Compression magnitude at COMPONENT layer typically 10-25% peak-to-trough vs 64% (Nortel) at carrier layer.
- **C (AI efficiency):** Efficiency IS compressing hard (6×-57× per various dimensions); volume currently OUTRUNNING compression (3× bills vs -80% prices); BUT DDR5-over-HBM profitability flip Q1 2026 is first early-warning signal; HBM forecasters don't model efficiency

### Updated parallel hypotheses on U8 firing (Bayesian update per L25 discipline)

| H | Interpretation | Prior (post-C) | Post-A | Post-B | Posterior |
|---|---|---|---|---|---|
| **HU8a** U8 NOT firing — Jevons saves HBM via token-volume expansion outrunning per-bit compression | 55% | 45% | **35%** | 35% |
| **HU8b** U8 PARTIAL firing — cascade from LLM-provider commoditization pressures HBM ASP downward over 18-36mo; DDR5-over-HBM profitability flip + RAN-saturation analog + Ericsson/Nokia historical empirical pattern converge | 30% | 35% | **45%** | 45% |
| **HU8c** U8 IMMINENT firing — tokenmaxxing correction + efficiency compounding + LLM-provider margin cascade compress HBM in 12-24 months | 15% | 15% | **15%** | 15% |
| **HU8d** U8 ALREADY firing fully | <5% | <5% | **<5%** | <5% |

**HU8b is now the largest weight (45%).** The telecom historical empirical analog is the decisive Bayesian update — it shows component vendors DO get compressed at the 4G saturation / post-5G analog (-22% in 2 years for RAN market) even when end-user demand keeps growing.

### Does H1 (structural-regime read 75%) need reweighting?

**NO — H1 and U8 are independent questions:**
- H1 is about whether the 60-year DRAM trend-line break is structural or cyclical (verified structural via 2026-06-14 PM2 work)
- U8 is about whether the structural break's economic surplus is captured by HBM-makers vs absorbed by efficiency
- H1 can be TRUE (structural break is real) AND U8 can be TRUE simultaneously (efficiency absorbs the surplus before HBM-makers capture it)

H1 holds at 75% posterior. U8 reweighting affects the SIZING and TIMING of the held cohort thesis, not its structural premise.

### The DISCRIMINATING TEST (load-bearing operational signal — subagent B surfaced)

**Track HBM revenue per AI query served.** If falling faster than query volume growth → demand inelastic → U8 risk is real. If rising or flat → demand is absorbing efficiency gains → structural regime thesis intact.

Proxy if direct metric unavailable:
- TrendForce HBM revenue / hyperscaler aggregate inference query estimates (T2 cross-construction)
- DDR5-vs-HBM profitability ratio trajectory (already firing Q1 2026)
- HBM ASP per Gb / model API cost per 1M tokens ratio

## 5. F1-F13 updated falsifier set (replaces F1-F12 from 2026-06-14 PM3)

### UNIVERSAL FALSIFIERS — supply-side (physics-of-cycles)

- F1 Supplier capex discipline break (root cause; 6-8 quarters lead)
- F2 ASP rollover at HYNIX (canonical confirmation)
- F8 Spot price falls below contract at HBM tier (analog to L2 in 2017-18; earliest universal supply/demand signal)
- F9 Revenue composition shifts ASP→volume at HYNIX (analog to L6; pricing-power exhaustion)
- F11 Supplier guidance shifts "sold out"→"balanced market" (analog to coincident peak signal)

### UNIVERSAL FALSIFIERS — demand-side (NEW from U8)

- **F13 NEW Token-cost-elasticity inflection (U8):** HBM revenue per AI query served falling faster than query volume growth; specifically the discriminating test from subagent B
  - **Sub-signals:** DDR5-vs-HBM profitability ratio trajectory (FIRING Q1 2026 — early state); HBM ASP per Gb / model API cost per 1M tokens ratio; published hyperscaler revenue-per-bit metrics
  - **First firing instance:** DDR5 RDIMM surpassed HBM in per-wafer profitability Q1 2026 per TrendForce/Digitimes T2 (the inference-vs-training mix shift confirming U8 mechanism in early form)

### CYCLE-SPECIFIC TO 2024-26

- F5 Hyperscaler capex guide step-down
- F7 Hyperscaler inventory pre-buying pattern shift
- F10 First AI-infrastructure segment demand pause (custom-ASIC layer softness / edge-AI cohort revenue miss / sovereign-AI infra delays)
- F12 HBM equipment-vendor lead-time sharply normalizes

## 6. N-th order cascade implications

- **1st order (P>85%):** the bull case for HBM stands for 2026-2027 (volume outrunning compression per current data; tokenmaxxing-inflated demand)
- **2nd order (P~65%):** Inference-vs-training mix shift (DDR5 profitability surpassing HBM Q1 2026) is the EARLIEST empirical U8 signal — first knock-on effect from efficiency gains compounding; held HYNIX rides BOTH HBM + DDR5 tiers so less U8-exposed than pure-HBM
- **3rd order (P~45%):** Per telecom 4G saturation analog (RAN -22% in 2 years), HBM-maker revenue compression of 10-25% peak-to-trough is plausible by 2027-2028 if U8 fires fully; downstream cascade to held cohort proportional to HBM-direct exposure (HYNIX > MRVL > SNDK > SUMCO > MURATA)
- **4th order (P~25%):** Vertical integration (Google TPU + Amazon Trainium + Microsoft Maia + OpenAI ASICs) accelerates rent migration from merchant HBM to custom-design layer; Cisco/Broadcom analog (Cisco 6 years flat while Broadcom captured cloud-switching rent) applies asymmetrically

## 7. Bypass-route check (Critical Rule #9)

The bypass-route question for U8 differs from F1-F12 because U8 operates on DEMAND-side compression, not supply-side substitution:
- **Direct substitution:** HBM has no premium-tier substitute within 18 months (per 2026-06-14 PM2 deep-dig); but efficiency gains via algorithmic compression IS the bypass at the DEMAND layer
- **Architectural substitution at customer:** custom ASICs with HBM4E baked in still consume HBM but compress merchant HBM pricing power via negotiation leverage
- **Memory hierarchy shift:** workload migration from training (HBM-heavy) to inference (DDR5-heavy + HBF-emerging) is exactly U8's mechanism; no merchant-supplier bypass blocks this

**The U8 bypass is via DEMAND-shape change, not supply substitution.** This is structurally different from F1-F12 supply-side falsifiers.

## 8. Held cohort joint-state implication

| Held name | HBM-direct exposure | U8 vulnerability | F13 monitoring |
|---|---|---|---|
| HYNIX | HIGH (HBM market leader ~55% Rubin) | HIGH — direct HBM rent capture is the bull case; U8 compression most direct here | F13 + DDR5-vs-HBM ratio (mitigant: HYNIX also DDR5 leader so half-hedged) |
| SUMCO | INDIRECT (wafers to all memory) | LOW — wafer supply tight regardless of HBM/DDR5 mix; U8-shift FROM HBM TO DDR5 still consumes wafers | Less F13-relevant |
| SNDK | INDIRECT (NAND + HBF JV) | LOW-MED — HBF optionality is the BENEFICIARY of U8 if HBM-tier compresses and demand reroutes to alternative architecture | HBF qualification at AI-training tier = U8-hedge upgrade |
| MURATA | INDIRECT (MLCC on AI servers) | LOW — MLCC content per AI server is BOM-driven, not HBM-revenue-driven; U8 mostly orthogonal | Less F13-relevant |
| MRVL | INDIRECT (custom Si demand) | MED-HIGH — custom Si benefits if hyperscalers route around merchant HBM, but specific ASIC programs (Google TPU especially) potentially compete with MRVL ASIC | F5 + F10 + F13 all relevant |
| DDOG, NOW | INDIRECT (software) | LOW — software cohort benefits from BOTH efficiency gains (cheaper inference enables agentic expansion) and structural-regime read | Token-volume compounding (TC-8) is the bullish counter-anchor |

**Position implications (Critical Rule #11):**

- **HYNIX (HELD)** — HOLD; F13 sub-signals (DDR5-vs-HBM profitability ratio) escalate to monthly-watch intensity; pre-committed trim sequence adds F13 as a new trigger alongside F2 (HYNIX trims FIRST on F2 ASP rollover OR F13 acceleration of DDR5-vs-HBM ratio widening for 2 consecutive quarters)
- **SUMCO (HELD)** — HOLD; less U8-exposed because supplier-capacity-constraint operates independent of memory-type-mix
- **SNDK (HELD)** — HOLD; HBF JV gains optionality value if U8 fires (alternative-architecture beneficiary)
- **MURATA (HELD)** — HOLD; thesis-orthogonal to U8 (MLCC content per AI server is BOM-driven)
- **MRVL (HELD)** — HOLD with elevated watch on Google TPU + AWS Trainium roadmap progression; if those programs accelerate beyond 30% of hyperscaler AI silicon by 2027, MRVL custom-Si rent partially compresses
- **DDOG, NOW (HELD)** — HOLD; structural beneficiaries of efficiency gains via token-volume compounding

**No falsifier triggered today.** U8 promoted to credible-watch status but not yet firing at the magnitude that would invalidate the structural regime read.

## 9. L26 candidate update

**L26 (CANDIDATE) updated 2026-06-14 PM4:**

> Multi-decade trend-line break of 5+× magnitude over 8+ quarters = highest-tier structural-regime-confirmation signal. When cycle reversion eventually comes, distinguish UNIVERSAL SUPPLY-SIDE signals (U1-U7: spot<contract, segment failure, revenue composition shift, stock-leads-ASP-3-4mo, first analyst downgrade, supplier guidance shift, capex break) from UNIVERSAL DEMAND-SIDE signals (U8: token-cost-elasticity inflection — efficiency gains compressing bits-per-token faster than demand elasticity expands token volume) from CYCLE-SPECIFIC signals (artifacts of particular market structure). The supply-side universals always fire; the demand-side universal (U8) requires its own discriminating test (component revenue per unit of end-use); the cycle-specifics map differently because underlying demand-side structure differs across cycles. Build the falsifier set with ALL THREE layers.

**N=2 promotion criteria unchanged.** Now-tracking: NAND ASP trend-break + MLCC ASP trend-break + CoWoS trend-break for L26 + DDR5-vs-HBM profitability ratio + HBM revenue per AI query proxy for U8.

## 10. B47 candidate codification (efficiency-driven demand destruction blind spot)

**B47 (CANDIDATE) — Efficiency-driven demand destruction blind spot in supply-constrained thesis:** when modeling structural-supply-constraint regimes, my naive prior assumes demand growth dominates efficiency-gain compression. The telecom historical record (RAN -22% 2022-24 while subs grew; Cisco 6 years flat while traffic +5-6×) shows this assumption can be EMPIRICALLY WRONG even in clearly structural-demand environments. Mitigation: explicitly model the elasticity ratio (component revenue per unit of end-use) for any held supplier-side thesis; require U8-class falsifier with named discriminating test.

**N=1 origin from this codification.** Watch for N=2 in: NVDA HBM-content-per-AI-query, CoWoS pricing per AI inference dollar, MLCC pricing per AI server unit.

## 11. Cascade executed (same commit)

- This cross-source-log artifact: `2026-06-14-pm4-token-cost-elasticity-U8-evans-telecom-3subagent.md`
- `predictions/lessons.md` L26 — universal supply-side + demand-side + cycle-specific distinction added
- `sector/where-we-are.md` — non-default read #9 added (efficiency-gain demand-destruction risk); F1-F12 → F1-F13 with U8 added; DDR5-over-HBM profitability flip Q1 2026 surfaced
- `signals/triangulation.md` TC-8 — paired-counterfactual note: U8 is the bear-side hedge to watch alongside the bull TC-8 anchor
- `companies/HYNIX/thesis.md` — back-reference + position implication (5th HYNIX update today; Critical Rule #11 detectability monitor confirms VARIED position implications across multiple updates rather than rote HOLD — discipline working as designed)
- `companies/MRVL/thesis.md` — back-reference + position implication (custom-Si rent exposure to U8)
- `meta/biases-watchlist.md` B47 candidate codified
- Commit + push

## 12. Source gaps + uncertainty flags

1. Evans hasn't published on HBM specifically — the cascade-mechanism mapping is my model based on his framework
2. The telecom historical compression analog is empirically strong at the equipment layer (Ericsson, Nokia, Cisco) but the HBM market is more concentrated (3-supplier oligopoly vs telecom's more fragmented vendor base) — pricing-power dynamics may differ
3. The "track HBM revenue per AI query served" discriminating test is not yet measurable from public data — needs proxy via TrendForce HBM revenue / hyperscaler inference query estimates
4. OpenAI ($25B annualized) + Anthropic ($45B annualized) revenue numbers from subagent C are T2 / T3 and need primary-source verification

Full subagent transcripts (ephemeral in-session):
- A (Evans): `/tmp/claude-0/-home-user-Health-Calculators/ba793459-a1d5-5925-b849-49e303cf10e0/tasks/ad9f41293d1288a72.output`
- B (Telecom): `/tmp/claude-0/-home-user-Health-Calculators/ba793459-a1d5-5925-b849-49e303cf10e0/tasks/a35129d67891cbec1.output`
- C (AI efficiency): `/tmp/claude-0/-home-user-Health-Calculators/ba793459-a1d5-5925-b849-49e303cf10e0/tasks/a528e72e8ab0aaa76.output`
