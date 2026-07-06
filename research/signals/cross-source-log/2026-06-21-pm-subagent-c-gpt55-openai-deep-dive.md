# 2026-06-21 PM Subagent C — GPT-5.5 (OpenAI) Deep Dive + ArrowTS Hallucination Claim Verification

**Source tier:** T1/T2 mix (Anthropic Artificial Analysis benchmark data T1; OpenAI Newsroom + CNBC + Fortune + Azure Blog T1; secondary trade press T2; ArrowTS blog T3)
**Fire:** 1 Opus 4.8 subagent, 98.8k subagent_tokens
**Trigger:** User-requested deep dive on GLM-5.2 / Fable 5 / GPT-5.5 head-to-head; this artifact is the GPT-5.5 side
**Companion deliverables:** `2026-06-21-pm-subagent-a-glm52-zhipu-deep-dive-multilingual.md` (Subagent A — pending) + `2026-06-21-pm-subagent-b-fable5-anthropic-deep-dive.md` (Subagent B — complete)
**Anti-leading discipline:** Applied — no OpenAI-positive or OpenAI-negative bias; rigorous verification of ArrowTS hallucination claim

---

## TL;DR (3 directional findings)

1. **"GPT-5.5" IS the correct identifier.** Released 2026-04-23 (T1 OpenAI + CNBC + Fortune); current OpenAI flagship; first fully retrained base model since GPT-4.5; native omnimodal (text+image+audio+video unified architecture); 1M API context / 400K Codex context.

2. **ArrowTS "3x hallucination" claim verdict: PARTIAL-VERIFIED but METHODOLOGICALLY MISLEADING.** The 86% vs 28% numbers are reproducible from Artificial Analysis's AA-Omniscience benchmark (T1 credible org) BUT "86%" is NOT a raw hallucination rate — it is the CONDITIONAL CONFABULATION rate (of the 43% of questions GPT-5.5 gets wrong, 86% are confabulated rather than abstained). GPT-5.5 simultaneously holds the highest accuracy ever recorded on the benchmark (57%, vs GLM-5.2's 25.1%). ArrowTS is a single advocacy blog (`arrowtsx.dev`) with contrarian framing.

3. **GPT-5.5 sits at frontier on capability (#3 Artificial Analysis Index at 55; #1 SWE-bench Verified at 88.7%) but is the WORST flagship on calibration discipline.** Pareto bifurcation: enterprise workloads where confident-wrong is catastrophic (legal, medical, citations) will route to Claude / GLM tier; agentic + coding workloads where capability ceiling dominates stay with GPT-5.5. Mirrors PC-14 bifurcation pattern at the model layer.

---

## 1. Model identity confirmation

| Item | Detail | Source-tier |
|---|---|---|
| Release date | 2026-04-23 | T1 OpenAI Newsroom + CNBC |
| API availability | 2026-04-24 (GPT-5.5 + GPT-5.5 Pro) | T1 OpenAI |
| Variants | Instant (default) / Thinking (reasoning) / Pro (research-grade isolated context); xhigh-high-medium reasoning effort tiers | T1 OpenAI Help Center + Knightli |
| Family position | Successor to GPT-5.4 (xhigh); first fully retrained base since GPT-4.5 | T2 TokenMix + Vellum |

---

## 2. Architecture (much NOT-DISCLOSED, flagged honestly)

| Spec | Value | Disclosure tier |
|---|---|---|
| Parameter count | NOT DISCLOSED (community estimates 1.5-2T total, no confirmation) | T3 inference |
| MoE vs dense | NOT DISCLOSED — community assumption MoE based on inference economics | T3 inference |
| Context window | 1M tokens API / 400K Codex | T1 OpenAI |
| Output max | ~128K | T2 |
| Training cutoff | Not publicly disclosed (likely late 2025) | T3 |
| Multimodal | Native unified text + image + audio + video in single architecture (Sora 2 integrated) | T1 OpenAI + Azure |
| Reasoning mode | Yes — Instant / Thinking (standard/extended) / Pro (light/heavy effort) | T1 OpenAI |

**HONEST FLAG:** OpenAI continues policy of zero parameter disclosure. ArrowTS's "1.5-2x bigger than GLM-5.2 ~750B" claim is informed guess, NOT verified.

---

## 3. Benchmark performance table

| Benchmark | GPT-5.5 score | Tier comparison | Source-tier |
|---|---|---|---|
| Artificial Analysis Intelligence Index v4.1 | 55 (xhigh) / 53 (high) / 47 (medium) | #3 globally; Fable 5 = 60-64.9; Claude Opus 4.8 = 56; GLM-5.2 = 51 (open-weights #1) | T1 AA |
| MMLU | 92.4% | Frontier-tier | T2 TokenMix |
| GPQA Diamond | 93.6% | Frontier-tier | T2 TokenMix |
| HumanEval | 94.2% | Slightly behind GPT-5.2 Pro 95% | T2 multi |
| SWE-bench Verified | 88.7% — #1 | Leads cohort | T1 OpenAI + T2 marc0.dev |
| SWE-bench Pro | 58.6% | SOTA single-pass | T1 OpenAI |
| Terminal-Bench 2.0 | 82.7% | SOTA agentic CLI | T1 OpenAI |
| AA-Omniscience accuracy | 57% — HIGHEST EVER RECORDED | GLM-5.2 = 25.1%; Claude Opus 4.7 = ~64% | T1 AA |
| AA-Omniscience hallucination (conditional) | 86% | GLM-5.2 = 28.1%; Claude Opus 4.7 = 36%; Gemini 3.1 Pro = 50%; Fable 5 = 48% | T1 AA + T2 multi |
| LMSYS Chatbot Arena | GPT-5.5 Pro ~1551 ELO (#1 some reports); standard top-5 cluster | Top tier | T2 SWFTE |
| ARC-AGI | NOT FOUND for GPT-5.5 specifically | — | Source gap |

---

## 4. ArrowTS "3x hallucination vs GLM-5.2" claim — VERIFICATION VERDICT

### Verdict: PARTIAL-VERIFIED with material methodological caveat

| Sub-claim | Verdict | Notes |
|---|---|---|
| "GPT-5.5 hallucinates 3x more than GLM-5.2" | NUMERICALLY VERIFIED at conditional-confabulation layer: 86% / 28% ≈ 3.07× | T1 AA-Omniscience |
| Source = ArrowTS as primary research | FALSIFIED — ArrowTS is single-author advocacy blog at `arrowtsx.dev`; underlying numbers from AA | T1 arrowtsx.dev + HN thread 48600167 |
| Methodology = direct hallucination measurement | FALSIFIED — AA-Omniscience "hallucination rate" is CONDITIONAL: of questions wrong, what % does model confidently confabulate vs abstain | T1 AA + T2 critical commentary |
| Independent replication | PARTIAL — Multiple secondary outlets cite same AA numbers; no INDEPENDENT methodology replicates | T2 |

### Methodology critique (Critical Rule #15 anti-leading)

- GPT-5.5: 57% raw accuracy; 43% wrong; 86% of wrong confabulated → net confident-wrong rate ≈ 37%
- GLM-5.2: 25.1% raw accuracy; 74.9% wrong; 28% of wrong confabulated → net confident-wrong rate ≈ 21%
- **GPT-5.5 IS more dangerous on confident-wrong axis (~1.8× absolute, NOT 3×) BUT vastly more capable on knows-the-answer axis (~2.3× more raw correct answers)**

This is a calibration tradeoff, not a "GLM is better" outcome. ArrowTS framing cherry-picks the calibration axis.

**B40.4 sub-type candidate flagged:** "conditional-rate-as-absolute-rate framing" (methodology garble; not stale-recycle).

---

## 5. Capability differentiation

| Capability | GPT-5.5 position | Comment |
|---|---|---|
| Agentic coding (SWE-bench Pro / Terminal-Bench) | #1 frontier (88.7% / 82.7%) | Leads cohort |
| Long-context (1M API) | Frontier-tier; pricing breaks above 272K | Parity with GLM-5.2 and Gemini 3 |
| Native multimodal | Class-leading (text+image+audio+video unified) | Differentiator vs Anthropic (text+vision) |
| Computer-use / agentic execution | Strongest gains over GPT-5 generation | Per OpenAI release notes |
| Raw factual knowledge (AA-Omniscience accuracy) | #1 ever recorded (57%) | Knowledge ceiling highest |
| Calibration discipline | WORST among flagships (86% confabulate rate when wrong) | Pareto-frontier inverse of Anthropic |
| Citation reliability | Worst flagship for citations (per Karo Zieminski substack) | Avoid for legal/academic citations |
| Reasoning depth (Thinking / Pro modes) | Competitive but Fable 5 + Opus 4.8 lead on AA Index composite | 55 vs 60-64.9 / 56 |

---

## 6. Pricing table

| Tier | Input $/Mtok | Output $/Mtok | Cached input | Notes |
|---|---|---|---|---|
| GPT-5.5 standard | $5.00 | $30.00 | $0.50 | Up to 272K context |
| GPT-5.5 long-context (>272K) | $10.00 | $45.00 | n/a | Punitive on long context |
| GPT-5.5 Pro | $30.00 | $180.00 | n/a | 6× standard input, 6× output |
| Batch API | ~50% discount | ~50% discount | n/a | Standard OpenAI Batch policy |

**Cross-source comparison:**
- GLM-5.2 reportedly ~1/6 of GPT-5.5 cost on coding workloads (VentureBeat T2, ratified in AM10 — U8 N=4 promotion candidate)
- Fable 5 reportedly $10/$50 per Subagent B (2× Opus 4.8)

---

## 7. Deployment + availability

| Channel | Status |
|---|---|
| OpenAI Direct API | GA 2026-04-24 — all variants |
| Microsoft Azure OpenAI (Foundry) | GA |
| GitHub Copilot | Integrated |
| ChatGPT Plus / Pro / Business / Enterprise | Rolling 2026-04-23+; default model |
| Codex | GA — 400K context |
| Geographic restrictions | Standard OpenAI policy; China-bypass via Azure-China limited |

---

## 8. OpenAI corporate context

| Item | Detail | Source-tier |
|---|---|---|
| Latest funding | $122B raised at $852B valuation completed March 2026 | T1 Bloomberg |
| Key investors | SoftBank ($30B), Nvidia ($30B), Amazon ($50B compute credits) | T1 Bloomberg + SoftBank IR |
| For-profit conversion | Completed 2025-10-28 — OpenAI Group PBC under OpenAI Foundation nonprofit | T1 OpenAI + Wikipedia |
| Department of War / DoD contract | Announced 2026-02-28; estimated $500M-$2B over 5 years; deployed in classified networks | T1 OpenAI + TechCrunch + CNBC |
| AM5 DOJ xAI cross-ref | DOJ memo named Grok as "1 of only 4 proprietary state-of-the-art AI models" supporting Pentagon — implies GPT-5.5 is in that set | T1 cascade from AM5 |

---

## 9. Convex hull lateral — 3 forward worlds (P-weighted, my model)

| World | P | Mechanism | Investable implication |
|---|---|---|---|
| W1: GPT-5.5 leads frontier 12+ mo | 35% | Microsoft + DoD lock-in + ChatGPT consumer dominance + agentic moat compounds | MSFT / NVDA inference compounder; capex tailwind continues |
| W2: GPT-5.5 trails on cost — open-weights/GLM-5.2/DeepSeek erode margins by H2 2026 | 30% | U8 token-cost-elasticity proven (already N=4 candidate); enterprise default shifts to MIT-licensed; OpenAI loses pricing power | U8 cascade through chip stack; HBM demand resilient |
| W3: GPT-5.5 trails on hallucination — enterprise compliance-driven bifurcation | 25% | AA-Omniscience confabulation gap weaponized by Anthropic sales; regulatory disclosure requirements emerge | TC-4 cascade — enterprise-trust drift |
| W4: Hybrid — multi-model routing wins | 10% | Enterprise adopts router layer; each query goes to best-tier model | Bullish for routing/orchestration layer |

**Weights sum 100%. W2 + W3 + W4 = 65% — majority weight on GPT-5.5 facing structural margin pressure within 12 mo.** B45 regime-corrected priors check: OpenAI capability moat may be more durable than contrarian narrative suggests; bias check passed but flagged.

---

## 10. Material yield: TIER 2 — directional reframe, not portfolio-trigger

No held name has direct exposure (OpenAI is private). Indirect implications:
- MSFT (watchlist): AA Index #3 finish vs Fable 5 #1 weakens "Microsoft's frontier model is the leader" narrative marginally; Foundry multi-model strategy is the hedge
- NVDA: continued capability frontier validates training capex; W2 (cost-pressure) would drive inference rack capex via volume substitution
- HBM cohort (HYNIX held): Training stays consolidated to top 3-4 labs regardless of GPT-5.5 calibration story → HBM demand unaffected
- Inference-layer cohort (NBIS): W2/W4 is mild positive for inference rental layer

---

## 11. Recommended cascade actions

1. TC-4 N+0.5 increment on AA-Omniscience calibration vector (separate from prior reliability vectors)
2. U8 N=3 → N=4 PROMOTE on GLM-5.2 vs GPT-5.5 1/6 cost ratio (already AM10 candidate; this verification provides ratification)
3. B40.4 candidate codification — conditional-rate-as-absolute-rate framing (methodology garble); ArrowTS case is N=1
4. PC-14 N=3 → N=4 candidate — model-layer bifurcation (calibration tier vs capability tier vs cost tier)
5. No held-cohort thesis updates required — all impacts are indirect via NBIS (already Core) and MSFT (watchlist)

---

## Sources (T1/T2/T3 tagged)

- [Introducing GPT-5.5 | OpenAI](https://openai.com/index/introducing-gpt-5-5/) T1
- [GPT-5.5 - Wikipedia](https://en.wikipedia.org/wiki/GPT-5.5) T2
- [OpenAI announces GPT-5.5 | CNBC](https://www.cnbc.com/2026/04/23/openai-announces-latest-artificial-intelligence-model.html) T1
- [GPT-5.5 is here | Fortune](https://fortune.com/2026/04/23/openai-releases-gpt-5-5/) T1
- [OpenAI's GPT-5.5 in Microsoft Foundry | Azure Blog](https://azure.microsoft.com/en-us/blog/openais-gpt-5-5-in-microsoft-foundry-frontier-intelligence-on-an-enterprise-ready-platform/) T1
- [GPT-5.5 is the new leading AI model | Artificial Analysis](https://artificialanalysis.ai/articles/openai-gpt5-5-is-the-new-leading-AI-model) T1
- [GPT-5.5 (xhigh) | Artificial Analysis](https://artificialanalysis.ai/models/gpt-5-5) T1
- [AA-Omniscience: Knowledge and Hallucination Benchmark | AA](https://artificialanalysis.ai/evaluations/omniscience) T1
- [AA-Omniscience paper | arXiv 2511.13029](https://arxiv.org/pdf/2511.13029) T1
- [Bigger models are not the way | arrowtsx.dev](https://arrowtsx.dev/bigger-models/) T3
- [GPT-5.5 hallucinates 3x more than MIT-licensed GLM-5.2 | Hacker News](https://news.ycombinator.com/item?id=48600167) T2
- [OpenAI Valued at $852 Billion | Bloomberg](https://www.bloomberg.com/news/articles/2026-03-31/openai-valued-at-852-billion-after-completing-122-billion-round) T1
- [Our agreement with the Department of War | OpenAI](https://openai.com/index/our-agreement-with-the-department-of-war/) T1
- [GPT-5.5 - API Pricing & Benchmarks | OpenRouter](https://openrouter.ai/openai/gpt-5.5) T1
