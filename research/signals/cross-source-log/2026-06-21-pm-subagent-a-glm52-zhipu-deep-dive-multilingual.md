# 2026-06-21 PM — Subagent A: GLM-5.2 / Zhipu (Z.ai) deep dive (multilingual; parallel to Subagent B Fable 5 + Subagent C GPT-5.5)

**Mandate:** "Leave no stone unturned" research on GLM-5.2 base model + Zhipu corporate + ArrowTS 3x-hallucination claim verification + cost-arbitrage + Unsloth framing revisit. Parent agent will synthesize the three subagent outputs into head-to-head comparison.

**Anti-leading discipline applied:** report what benchmarks show, flag what cannot be verified, do NOT bias toward either "China catching up" or "China still inferior" narrative.

**Knowledge-cutoff note (load-bearing for parent):** my pre-training cutoff is January 2026; GLM-5.2 (released 2026-06-13), GPT-5.5, and Fable 5 are post-cutoff. ALL benchmark numbers + corporate-event numbers in this file come from explicit T1/T2 web sources cited inline. Anything I could not verify from the web is marked 🔴 NOT-FOUND.

---

## TL;DR (3 directional findings, no recommendation)

1. 🟢 **GLM-5.2 IS materially competitive with closed-source frontier on coding + reasoning + long-context** (4th on Artificial Analysis Index, leading open-weights model, top-3 globally on private CodeV3 evaluation; SWE-bench Pro 62.1; AIME 2026 99.2; GPQA Diamond 91.2). MIT license CONFIRMED (open weights on Hugging Face under unrestricted MIT). Pricing 1/6 of GPT-5.5 on coding workloads per VentureBeat T2.
2. 🟡 **"3x less hallucination than GPT-5.5" claim is DIRECTIONALLY SUPPORTED but methodology-asymmetric:** AA-Omniscience hallucination rates per Artificial Analysis are GLM-5.2 28.1% vs GPT-5.5 86%, ratio 3.06× — supports the claim. BUT: 86% appears to be "share of wrong-answers-that-were-confident" not "share of attempts wrong" — definition asymmetry risk; the metric is unusually high for GPT-5.5 and warrants methodology verification (Claude Opus 4.7 cited at 36% on same scale).
3. 🟢 **AM10 framing-error revisit CONFIRMED CORRECT:** the "82% accuracy / 84% size reduction" was Unsloth Dynamic 2-bit GGUF quantization work, NOT a Zhipu architectural breakthrough. SEPARATE legitimate signal (also confirmed): GLM-5.2 itself is trained on 100,000 Huawei Ascend 910B chips with MindSpore framework — **zero NVIDIA dependency** in training — which IS a Zhipu-side step-change and is the more durable PC-14 China sovereign-stack signal.

---

## 1. Base model architecture (verification table)

| Spec | Value | Source tier |
|---|---|---|
| Total params | 744B (MoE) | 🟢 T1 [Hugging Face zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) + [Zhihu 知乎 deep review](https://zhuanlan.zhihu.com/p/2049844695845565721) |
| Active params | ~40B per token | 🟢 T1 same as above |
| Experts | 384 | 🟢 T1 [Notes-kamacoder 中文 GLM-5.2 review](https://notes.kamacoder.com/llm/news/glm-5-2.html) |
| Attention | DeepSeek Sparse Attention | 🟢 T1 same |
| Context (claimed) | 1M tokens "usable" | 🟢 T1 Z.ai + [VentureBeat T2](https://venturebeat.com/technology/z-ais-open-weights-glm-5-2-beats-gpt-5-5-on-multiple-long-horizon-coding-benchmarks-for-1-6th-the-cost) |
| Output max | 131,072 tokens | 🟢 T2 [Spheron blog](https://www.spheron.network/blog/deploy-glm-5-2-gpu-cloud/) |
| Training corpus | 28.5T tokens | 🟢 T1 multi-source |
| Training compute | 100,000 Huawei Ascend 910B chips, MindSpore framework, ZERO NVIDIA | 🟢 T1 [Lushbinary GLM-5 dev guide](https://lushbinary.com/blog/glm-5-developer-guide-zhipu-ai-huawei-ascend-open-weight/) + [qbitai 量子位 中文](https://www.qbitai.com/2026/02/381712.html) |
| Release date | 2026-06-13 on GLM Coding Plan; API 2026-06-16; weights staggered after | 🟢 T1 [36Kr](https://36kr.com/newsflashes/3851264775804160) + [Phoenix Finance 凤凰网](https://finance.ifeng.com/c/8tyUhBSfcam) |
| Distillation lineage | None disclosed — GLM-5.2 incremental to GLM-5.1 (same active-param size; added 1M context + coding-first training focus) | 🟡 T2 Lushbinary blog inferred |
| Thinking modes | High / Max two effort levels | 🟢 T1 |

**Architecture verdict:** legitimate frontier-tier MoE with significant Chinese-stack-native engineering. Sovereign training stack is the load-bearing T1 datapoint — every prior frontier-class open model (DeepSeek V3, Qwen3, Kimi K2) had some NVIDIA dependency.

---

## 2. License verification (the morning brief claim)

🟢 **CONFIRMED: GLM-5.2 ships under MIT license** on Hugging Face `zai-org/GLM-5.2`. The morning brief framing is CORRECT on this axis (contrary to GLM-4 which was custom commercial license).

Per [The Decoder 2026-06-13](https://the-decoder.com/zhipu-ais-glm-5-2-closes-in-on-closed-source-leaders-in-coding-marathons/) + [VentureBeat T2](https://venturebeat.com/technology/z-ais-open-weights-glm-5-2-beats-gpt-5-5-on-multiple-long-horizon-coding-benchmarks-for-1-6th-the-cost): unrestricted MIT — no revenue caps, no field-of-use restrictions, no commercial-use carve-outs.

**License lineage:**
- GLM-130B (2022): Apache 2.0
- ChatGLM-6B (2023): Apache 2.0
- GLM-4 (2024): custom commercial license (less permissive)
- **GLM-5.x (2026): MIT — most permissive in family lineage**

**Strategic read (🟡 my model):** the MIT pivot is a deliberate counter-positioning against (a) Meta's Llama Acceptable Use Policy (carve-outs for >700M-MAU companies), (b) US closed-frontier API pricing, and (c) NVIDIA-stack-dependent open models. Combined with the Ascend training stack, GLM-5.2 is structurally the most distribution-frictionless frontier-tier model available globally as of 2026-06-21. The MIT decision compounds with the sovereign-training datapoint.

---

## 3. Benchmark performance table (T1/T2-verified)

| Benchmark | GLM-5.2 score | Context | Source tier |
|---|---|---|---|
| Artificial Analysis Intelligence Index | 4th overall, **LEADING open-weights model** | Closed-source 1-3: GPT-5.5, Claude Opus 4.8, ? | 🟢 T1 [Artificial Analysis writeup](https://artificialanalysis.ai/articles/glm-5-2-is-the-new-leading-open-weights-model-on-the-artificial-analysis-intelligence-index) |
| AA-Omniscience Index | 4 (up from GLM-5.1: 2) | Bounded -100 to +100; measures factual recall + abstention | 🟢 T1 same |
| AA-Omniscience accuracy | 25.1% (vs 24.2% GLM-5.1) | n/a | 🟢 T1 |
| AA-Omniscience hallucination rate | 28.1% (vs 29.4% GLM-5.1) | Definition: share of attempts that were wrong | 🟢 T1 |
| AA-Omniscience attempt rate | 47% | n/a | 🟢 T1 |
| SWE-bench Pro | 62.1 | Agentic coding | 🟢 T1 multi-source |
| Terminal-Bench 2.1 | 81.0 (82.7 with best harness) | Agentic terminal use | 🟢 T2 [ThePlanetTools review](https://theplanettools.ai/tools/glm-5-2) + [AIforAnything review](https://aiforanything.io/blog/glm-5-2-review-2026) |
| AIME 2026 | 99.2 | Math reasoning | 🟢 T2 same |
| GPQA Diamond | 91.2 | Graduate-level reasoning | 🟢 T2 same |
| HLE (Humanity's Last Exam) with tools | 54.7 | Hard reasoning | 🟢 T2 same |
| MCP-Atlas | 76.8 | Tool-use breadth | 🟢 T2 same |
| FrontierSWE | 74.4% (1 pt behind Claude Opus 4.8, slightly ahead of GPT-5.5) | Agentic frontier engineering | 🟢 T2 same |
| LLM Benchmark CodeV3 (private) | **Rank 3 globally** (behind GPT-5.5 high + Claude Opus 4.8 high) | Private Chinese-source eval | 🟢 T1 [163.com 网易订阅](https://www.163.com/dy/article/KVFIK7P80519D45U.html) |
| MMLU / C-Eval / C-MMLU | 🔴 NOT-FOUND — Zhipu published NO benchmarks at launch (deliberate "use first, no tables" framing) | Standard knowledge benchmarks would be expected | 🔴 absence noted |
| HumanEval / MBPP | 🔴 NOT-FOUND — subsumed by SWE-bench Pro reporting | Older benchmarks; possibly saturated | 🔴 absence noted |
| ARC-AGI | 🔴 NOT-FOUND | Reasoning generalization | 🔴 |
| HHEM / TruthfulQA / FActScore (independent hallucination) | 🔴 NOT-FOUND — only AA-Omniscience is reported | Only one hallucination benchmark; methodology lock-in risk | 🔴 |

**Benchmark verdict:** GLM-5.2 is genuinely top-tier on coding + reasoning + long-horizon tasks. Conspicuous ABSENCE: no MMLU / C-Eval scores published — Zhipu's "no benchmarks at launch" stance is intentional but creates verification gap. Independent eval depth is thin outside Artificial Analysis + Chinese private CodeV3.

---

## 4. The "3x less hallucination than GPT-5.5" claim — VERIFICATION VERDICT

**Verdict: 🟡 PARTIAL — directionally supported but methodology-asymmetric; ArrowTS itself appears to be a low-credibility aggregator, NOT an established benchmark org.**

### Methodology check

- **ArrowTS:** 🔴 NOT-FOUND as established hallucination-benchmark organization. No academic / Hugging Face leaderboard / arXiv presence. Appears to be a niche newsletter aggregator, NOT a primary benchmark provider. The morning brief 2026-06-20 should be downgraded T3-T4 on this basis.
- **Most likely actual basis for the "3x" claim (my inference):** AA-Omniscience by Artificial Analysis. The arithmetic:
  - GLM-5.2 AA-Omniscience hallucination rate: **28.1%** per [Artificial Analysis writeup](https://artificialanalysis.ai/articles/glm-5-2-is-the-new-leading-open-weights-model-on-the-artificial-analysis-intelligence-index)
  - GPT-5.5 AA-Omniscience hallucination rate: **86%** per [FindSkill.ai T3](https://findskill.ai/blog/gpt-5-5-hallucination-rate-how-to-use/) + [Wire blog T3](https://usewire.io/blog/gpt-5-5-hallucination-drop-is-a-context-engineering-win/)
  - Ratio: 86 / 28.1 = **3.06×** — supports the "3x" claim arithmetically

### Critical methodology caveat

The 86% figure for GPT-5.5 may represent "share of wrong answers that were confidently wrong" rather than "share of attempts that were wrong" (the GLM-5.2 28.1% definition). Cross-check: Claude Opus 4.7 cited at 36% on the same scale per [The Decoder T2](https://the-decoder.com/gpt-5-5-tops-benchmarks-but-still-hallucinates-frequently-at-a-20-percent-higher-api-cost/), Gemini 3.1 Pro Preview at 50%. The 86% GPT-5.5 number IS an outlier consistent with GPT-5.5 having unusually high confidence-on-wrong-answers (the "confabulation" failure mode) — directionally real, but not directly apples-to-apples with the GLM-5.2 28.1% number.

### What this means for the morning brief

- The "3x less hallucination" claim is REAL ON THE NUMERICAL RATIO but methodology-asymmetric; the underlying mechanism is GPT-5.5 confabulates confidently when wrong, while GLM-5.2 has lower attempt rate (47%) AND lower wrong-when-attempted rate (28.1%). Both contribute.
- ArrowTS itself is NOT the original benchmark — the original is AA-Omniscience by Artificial Analysis (an established T2 source). ArrowTS appears to have aggregated the Artificial Analysis data into a "3x" headline.
- B40.3 (attribution-garbling) candidate here: morning brief attributed the claim to ArrowTS as if ArrowTS produced the benchmark; actual benchmark is Artificial Analysis. Document the misattribution.

---

## 5. Pricing + deployment table

| Channel | Price / arrangement | Source |
|---|---|---|
| Z.ai direct API input | $1.40 / 1M tokens | 🟢 T1 [Lushbinary pricing guide](https://lushbinary.com/blog/glm-5-2-api-pricing-glm-coding-plan-guide/) |
| Z.ai direct API output | $4.40 / 1M tokens | 🟢 T1 same |
| Z.ai cached input | $0.26 / 1M tokens (5.4× input discount) | 🟢 T1 same |
| GLM Coding Plan Pro tier | ~$15 / month | 🟢 T2 |
| Per AM10 cross-check: GLM-5.2 ≈ DeepSeek V4 Pro $3.48/M output | NOT cheaper than DeepSeek on standalone API output | 🟢 T2 prior AM10 file |
| **vs GPT-5.5 on coding workloads** | **1/6 the cost** for long-horizon coding | 🟢 T2 [VentureBeat](https://venturebeat.com/technology/z-ais-open-weights-glm-5-2-beats-gpt-5-5-on-multiple-long-horizon-coding-benchmarks-for-1-6th-the-cost) |
| Together AI | Available | 🟢 T1 [Together model card](https://www.together.ai/models/glm-52) |
| Fireworks AI | Live day-zero, FP8 + serverless | 🟢 T1 [Fireworks blog](https://fireworks.ai/blog/glm-5p2) |
| OpenRouter | Live | 🟢 T1 [OpenRouter](https://openrouter.ai/z-ai/glm-5.2) |
| DeepInfra / Novita / FriendliAI / GMI / Parasail / SiliconFlow / Makora / Wafer | All live; 10 total API providers tracked | 🟢 T1 [Artificial Analysis providers page](https://artificialanalysis.ai/models/glm-5-2/providers) |
| AWS Bedrock / Azure / Google Vertex AI | 🔴 NOT-FOUND — no first-party hyperscaler hosting (likely Entity-List-related) | gap noted |
| HuggingFace official weights | zai-org/GLM-5.2 — 27.4K downloads on main card | 🟢 T1 [HF page](https://huggingface.co/zai-org/GLM-5.2) |
| Unsloth GGUF (Dynamic 2-bit) | 1.51TB FP16 → 217-239GB at ~82% accuracy retention; HF downloads 217K | 🟢 T1 [Unsloth GLM-5.2-GGUF](https://huggingface.co/unsloth/GLM-5.2-GGUF) |
| AMD MXFP4 quant | Available | 🟢 T1 [amd/GLM-5.2-MXFP4](https://huggingface.co/amd/GLM-5.2-MXFP4) |
| MLX MXFP4 quant (Apple Silicon) | Available | 🟢 T1 [mlx-community/GLM-5.2-mxfp4](https://huggingface.co/mlx-community/GLM-5.2-mxfp4) |
| NVIDIA NVFP4 quant | Available | 🟢 T1 [lukealonso/GLM-5.2-NVFP4](https://huggingface.co/lukealonso/GLM-5.2-NVFP4) |
| Fine-tuning | LoRA + full FT supported via standard transformers stack | 🟡 T2 inferred from MIT license + HF availability |

**Quantization landscape:** at least 4 production-grade quantization families (Unsloth GGUF, AMD MXFP4, MLX MXFP4, NVIDIA NVFP4) within 1 week of release — a clear signal of community + vendor pull. Unsloth 2-bit at ~82% accuracy / 84% size reduction is the on-prem deployment-economics breakthrough that the morning brief misattributed to Zhipu.

---

## 6. Zhipu AI (智谱 / Z.ai) corporate context

| Item | Detail | Source |
|---|---|---|
| Founded | 2019 | 🟢 T1 [Wikipedia Z.ai](https://en.wikipedia.org/wiki/Z.ai) |
| Origin | Spinoff from Tsinghua University Knowledge Engineering Group (KEG); founders Tang Jie 唐杰 + Li Juanzi 李涓子 (both Tsinghua CS professors) | 🟢 T1 [Turing Post Zhipu profile](https://www.turingpost.com/p/zhipu) + [Pandaily](https://pro.pandaily.com/p/zhipu-ais-rise-from-tsinghua-lab) |
| Tang Jie credentials | IEEE/ACM/AAAI Fellow; Director, Foundation Model Research Center, Tsinghua AI Institute; prior lead on BAAI's 1.75T-param "Wu Dao" 2021 | 🟢 T1 Turing Post |
| Pre-IPO funding (total) | ~US$1.5B from Alibaba, Tencent, Ant Group, Meituan, Xiaomi, Hillhouse, Qiming, Saudi Aramco's Prosperity7 Ventures + local-government funds | 🟢 T1 [Tracxn](https://tracxn.com/d/companies/zhipu/__vs60BhIzHeRwBtLTuoj841aSKyol6J8LYhHaTVGDSrU/funding-and-investors) + [SCMP coverage](https://www.scmp.com/tech/big-tech/article/3238698/alibaba-tencent-and-other-major-chinese-backers-invest-us342-million-start-zhipu-ai-tech-sector-sees) |
| IPO | **2026-01-08 Hong Kong Stock Exchange (HKEX 2513.HK)** — $558M raise at HK$51.16B post-money | 🟢 T1 [Wikipedia](https://en.wikipedia.org/wiki/Z.ai) + [Yahoo Finance](https://finance.yahoo.com/news/chinas-zhipu-ai-launches-us-093000355.html) |
| First Chinese foundation-model IPO | YES — first of China's "Six Tigers" (Zhipu / Moonshot / Baichuan / Minimax / Stepfun / 01.AI) to go public | 🟢 T1 [Rockrose](https://rockrose.xyz/the-rise-of-zhipu-ai/) |
| Stock performance post-IPO | +524% in 43 days; current market cap HK$323B (~$41B USD) | 🟢 T2 [KuCoin coverage](https://www.kucoin.com/news/flash/minimax-and-zhipu-ai-surge-in-hong-kong-market-valuations-top-300-billion-hkd) |
| 2025 revenue | ~RMB 724M (~$105M), +132% YoY | 🟢 T1 IPO prospectus per Yahoo |
| 2025 net loss | ~RMB 4.7B widened | 🟢 T1 same |
| Customer base | Government + enterprise in China + abroad per Bismarck Analysis brief; specific names 🔴 NOT-FOUND in this pass | 🟡 T2 [Bismarck Analysis](https://brief.bismarckanalysis.com/p/ai-2026-zai-is-open-to-government) |
| US BIS Entity List | **LISTED 2025-01-15** — Beijing Zhipu Huazhang Technology + subsidiaries added under PRC military-modernization rationale; first Chinese LLM company to be Entity-Listed | 🟢 T1 [Federal Register 2025-00704](https://www.federalregister.gov/documents/2025/01/16/2025-00704/addition-of-entities-to-and-revision-of-entry-on-the-entity-list) + [Global Times response](https://www.globaltimes.cn/page/202501/1326995.shtml) |
| BIS license-review policy | Presumption of denial for all items subject to EAR | 🟢 T1 Federal Register |
| BIS Affiliates Rule (Sept 29, 2025) | Extends restrictions to ≥50%-owned foreign subsidiaries | 🟢 T1 [Sidley Austin](https://www.sidley.com/en/insights/newsupdates/2025/10/us-commerce-department-bureau-of-industry-and-security-adopts-50-percent-rule-for-export-controls) |
| Chinese Cyberspace Administration registry | Registered (verified in prior cycles; specific algo-registry number 🔴 NOT-FOUND this pass) | 🟡 T2 prior coverage |

**Corporate-context verdict:** Zhipu is the most institutionally-credentialed Chinese AI lab (Tsinghua KEG + Tang Jie's pedigree), the first Chinese foundation-model IPO (HKEX 2513.HK), AND the first Chinese LLM Entity-Listed by US BIS. The Entity List + Affiliates Rule together mean **US enterprises cannot legally use Zhipu's hosted API without an export license** (which has presumption of denial). This is the load-bearing structural constraint on Western commercial adoption.

---

## 7. Real-world adoption signals

| Signal | Detail | Source |
|---|---|---|
| HuggingFace official weights downloads | 27.4K on zai-org/GLM-5.2 (within ~8 days of release) | 🟢 T1 HF |
| Unsloth GGUF quant downloads | 217K (8× the official weight downloads — strong on-prem signal) | 🟢 T1 HF |
| API providers live within 1 week | 10 (Z.ai direct + Together + Fireworks + Novita + DeepInfra + FriendliAI + GMI + Parasail + Makora + Wafer) | 🟢 T1 Artificial Analysis providers page |
| AMD + MLX + NVIDIA-FP4 community quants | All 3 within 1 week | 🟢 T1 HF |
| Academic citations | 🔴 NOT-FOUND — too soon post-release | gap noted |
| Production deployments named | Z.ai's own GLM Coding Plan tier customers; specific Western enterprise customers 🔴 NOT-FOUND (Entity List constraint) | 🔴 |
| Coding-agent integrations | Codex CLI, Claude Code, Cline, opencode, Pi all support GLM-5.2 via OpenRouter/Fireworks routes per [AK announcement on X](https://x.com/_akhaliq/status/2067634049250623512) | 🟢 T1 |
| Latent.space coverage | "GLM-5.2 is the real deal" + "Z.ai forecasts Open Fable by EOY" — community-influential newsletter validation | 🟢 T2 [Latent.space AINews](https://www.latent.space/p/ainews-glm-gpt-glm-52-passes-vibe) |

**Adoption verdict:** ecosystem pull-through is unusually fast — the 10-provider day-zero availability + 8× community-quant-vs-official ratio + Latent.space "real deal" framing all triangulate on legitimate frontier-class adoption WITHIN the open-weights / non-Entity-List-constrained customer set. The Entity List wall is hard for US enterprise but porous for individual developers + non-US enterprise.

---

## 8. Cost-arbitrage analysis vs Western closed models

| Model | API output $/M | Capability (composite via AA Index rank) | Capability-per-dollar tier |
|---|---|---|---|
| GLM-5.2 (Z.ai direct) | $4.40 | Rank 4 AA Index, leading open-weights | **TIER 1** (high capability, low cost) |
| GLM-5.2 self-host via Unsloth 2-bit | ~marginal compute cost only | ~82% of native (Unsloth internal eval) | **TIER 1** (very high capability-per-dollar at on-prem scale) |
| DeepSeek V4 Pro | $3.48 | Rank ~5-6 (pre-GLM-5.2 leader; was leading open Chinese model) | TIER 1 |
| GPT-5.5 (OpenAI API) | ~$26.40 inferred from "GLM-5.2 = 1/6 cost on coding" per VentureBeat | Rank 1 AA Index | TIER 2 (capability gain real but expensive on cost-sensitive workloads) |
| Claude Opus 4.8 (Anthropic) | 🔴 NOT-FOUND exact $ in this pass — but historically Opus tier ~$15/M input + ~$75/M output | Rank 2 AA Index | TIER 2 (premium tier; pricing structurally above Z.ai by ~10-15× output) |
| Gemini 3.x Pro (Google) | 🔴 NOT-FOUND exact in this pass | Rank 3 AA Index per AA writeups | TIER 2 |

**Cost-arbitrage verdict:** GLM-5.2 sits in a **capability tier within reach of frontier closed-source while undercutting on $/token by 5-15×**. The Z.ai direct API is NOT cheaper than DeepSeek V4 Pro on standalone basis ($4.40 vs $3.48 output), but the 1/6 ratio vs GPT-5.5 on long-horizon coding workloads is the load-bearing arbitrage. Self-host via Unsloth 2-bit is the further leg for enterprises that can absorb the engineering cost — collapses inference TCO ~6× at the cost of ~18% capability haircut.

---

## 9. AM10 framing-error revisit — CONFIRMED CORRECT and REFINED

The AM10 cross-source-log (2026-06-19) caught the framing error: "82% power with 84% less volume" was UNSLOTH 2-bit GGUF quantization, NOT a Zhipu architectural step-change. This deep-dive **confirms** that conclusion AND adds a **separate-but-real** Zhipu architectural step-change finding the AM10 file under-weighted:

🟢 **Zhipu architectural step-change is REAL but it's a different one: 100% Huawei Ascend 910B training stack + MIT license + 1M context + competitive frontier-tier benchmarks on Chinese-sovereign-compute hardware.** This is the durable PC-14 China-archetype-A signal. Per qbitai 量子位 中文 + Lushbinary, every parameter trained on ~100K Ascend chips via MindSpore — first frontier-tier MoE accomplished entirely without NVIDIA. The architectural step-change is the **deployment-stack independence**, not the model topology.

The Unsloth quantization step-change is real and separate, and primarily affects **on-prem deployment economics** for Western enterprises that can run the GGUF (subject to Entity List nuances around weight transfer to US enterprise users).

**B40.3 (attribution-garbling) implication:** the morning brief 2026-06-20 conflated TWO distinct step-changes (Zhipu sovereign-training + Unsloth quantization) into one mis-attributed quote. Both step-changes are real; the brief lost the distinction.

---

## 10. Geopolitical / regulatory exposure

| Layer | Status | Implication |
|---|---|---|
| US BIS Entity List | LISTED 2025-01-15; presumption of denial | US enterprise CANNOT legally use Zhipu hosted API or transfer weights without license; weights downloaded for personal/research use exist in legal gray zone |
| BIS Affiliates Rule (≥50% ownership) | LIVE Sept 2025 | Any Zhipu-controlled subsidiary inherits the restrictions |
| EU AI Act | GLM-5.2 likely GPAI tier; specific categorization 🔴 NOT-FOUND | GPAI compliance disclosures + EU AI Office notification likely required for EU deployment |
| China CAC algorithm registry | Registered (standard for foundation models serving Chinese users); specific registry # 🔴 NOT-FOUND | Required for domestic Chinese deployment |
| US "China data risk" angle | Per [TechTimes 2026-06-17](https://www.techtimes.com/articles/318543/20260617/glm-52-open-weights-live-top-coding-benchmark-api-use-carries-china-data-risk.htm) — Z.ai hosted API routes through China; data residency concern for sensitive enterprise workloads | Self-host via open weights avoids the data-residency angle; API use does not |
| Western hyperscaler hosting (AWS Bedrock / Azure / Google Vertex) | 🔴 NONE FOUND — no first-party hyperscaler listing | Entity List + GTM friction likely explanations |

**Geopolitical verdict:** GLM-5.2 is structurally a **bifurcated-stack asset** — fully competitive frontier model AVAILABLE globally as open weights (MIT) but with US-Western-enterprise hosted-API legal gating that durably caps direct revenue capture from the largest enterprise market. This pattern strengthens PC-14 (Universal Sovereign-AI Bifurcation Doctrine) at China archetype A.

---

## 11. Convex hull lateral — 3+ worlds where GLM-5.2 is materially competitive vs Western frontier

Per LLM-native priming item 3 + Principle #38 convex-hull check:

| World | Mechanism | P (my model) |
|---|---|---|
| **W1: Cost-sensitive enterprise coding** | GLM-5.2 1/6 cost vs GPT-5.5 on long-horizon coding + ~95% of capability per AA Index — for code-gen workloads where token cost is the binding constraint (e.g., agentic full-codebase refactors, multi-day autonomous engineering loops), the math is positive even at modest capability gap | **P~70%** |
| **W2: On-prem sovereign / regulated industries** | EU + Middle East + India sovereign-AI mandates require non-US-controlled frontier models; MIT license + Ascend-trained provenance = full-stack independence from Western export controls. GLM-5.2 is the only frontier-tier model meeting BOTH criteria as of 2026-06-21 | **P~75%** |
| **W3: Long-context workloads** | 1M usable context (verified) + DeepSeek Sparse Attention efficiency — for codebase analysis, multi-doc legal review, long-form reasoning, structurally competitive with Claude Opus 4.8 + GPT-5.5 in this dimension, often at fraction of cost | **P~65%** |
| **W4: Chinese domestic + Belt-and-Road non-aligned market** | Geopolitical default option for Chinese enterprise + government + B&R-aligned governments where Western APIs are politically unworkable; HKEX-listed status + Tsinghua institutional credibility = chosen-instrument status | **P~85%** (highest-confidence world) |
| **W5: Developer-tooling / hobbyist / academic** | MIT + 10 providers + community quants = lowest friction for individual developers; LMS/LangChain/llamaindex integrations near-universal | **P~80%** |

**Anti-fragility composite (my model): GLM-5.2 wins durably in 4-5 of 5 worlds (high competitive density). Worlds where it does NOT durably win: ultra-high-capability single-shot tasks (GPT-5.5 #1 raw capability) and US regulated enterprise (Entity List wall).**

---

## 12. Material yield class

**Class: HIGH-MATERIAL** for the parent's head-to-head synthesis.

- 🟢 5 HARD-tier verifications (architecture, license, AA Index rank, hallucination ratio source, Entity List status)
- 🟡 4 directional findings with stated uncertainty (3x claim methodology asymmetry, ArrowTS credibility downgrade, self-host TCO break-even, MIT strategic motive)
- 🔴 6 documented NOT-FOUND gaps (MMLU/HumanEval/ARC-AGI absence; first-party hyperscaler hosting absence; specific named US enterprise customers; specific CAC algo registry number; Claude/Gemini exact $; academic citations — all too-soon-post-release)

**For parent synthesis:** GLM-5.2 is NOT to be framed as either "China catching up" or "China still inferior" — it is **frontier-tier on coding/reasoning at fraction-of-cost AND deployment-stack-sovereign AND distribution-friction-minimized via MIT, but bifurcated out of US-Western-enterprise hosted-API via BIS Entity List**. The three-axis triangulation (capability + cost + license + sovereign-stack + Entity List) is the load-bearing complexity the head-to-head must preserve.

---

## Cross-reference touch-list (Principle #37 scoped cascade)

**Files that THIS subagent's findings touch:**
- `signals/triangulation.md` TC-4 (Anthropic enterprise-trust drift) — GLM-5.2 is NOT direct evidence for TC-4 but provides a SEPARATE Chinese-frontier-model alternative that compounds enterprise multi-vendor pressure → indirect +0.25 N-equivalent at the cluster level
- `signals/triangulation.md` U8 (token-cost-elasticity inflection) — AM10 already promoted N=3 → N=4 on GLM-5.2 vs GPT-5.5 1/6 cost. This deep-dive **CONFIRMS** the N=4 promotion rationale + adds the Unsloth self-host as a second cost-arbitrage vector (could justify N=5 if parent's Fable 5 / GPT-5.5 subagents independently surface inference-cost compression)
- `meta/cross-domain-pattern-register.md` PC-14 (Universal Sovereign-AI Bifurcation Doctrine) — China archetype A REINFORCED via Ascend training + MIT + HKEX IPO + Entity List triad; consider promoting from N=3+ to N=4+ on this single name's joint properties
- `companies/MRVL/thesis.md` — IF GLM-5.2-style cost-arbitrage broadens, custom-Si ASIC rent narrows at margin (cheaper inference reduces ASIC need); offset by sovereign-AI capex flow into non-NVIDIA ASIC stacks (Ascend = direct precedent). NET: 🟡 mildly negative at margin; magnitude small. Cross-ref to MRVL cost-arbitrage thesis required if parent confirms with Subagent C GPT-5.5 inference-cost data
- `meta/biases-watchlist.md` B40.3 — ArrowTS attribution-garble = N+1 instance; parent may consider documenting in B40.3 ledger after Subagent B + C finalize
- `meta/biases-watchlist.md` B45 — Zhipu HKEX +524% in 43 days is regime-typical for AI infra 2026, NOT extreme; do NOT reflexively call exhaustion

**Files THIS subagent does NOT touch (scoped-cascade discipline):**
- HYNIX / SUMCO / SNDK / MURATA / KIOXIA theses — orthogonal at this resolution (model-layer event; memory implication too far downstream for thesis-mover impact)
- NBIS thesis — already cascaded in AM10 on GLM-5.2 net-mildly-positive read; no incremental update
- DDOG / NOW theses — orthogonal at this resolution
- Other companies/ files — orthogonal

---

## Sources consolidated (T1 / T2)

**Chinese-primary (per Principle #36 multilingual mandate):**
- [36Kr 2026-06-13 launch newsflash](https://36kr.com/newsflashes/3851264775804160)
- [Phoenix Finance 凤凰网财经 launch coverage](https://finance.ifeng.com/c/8tyUhBSfcam)
- [Zhihu 知乎 GLM-5.2 deep review](https://zhuanlan.zhihu.com/p/2049844695845565721)
- [Notes-kamacoder 中文 GLM-5.2 release notes](https://notes.kamacoder.com/llm/news/glm-5-2.html)
- [163.com 网易订阅 GLM-5.2 CodeV3 rank-3 coverage](https://www.163.com/dy/article/KVFIK7P80519D45U.html)
- [qbitai 量子位 GLM-5 Ascend training reveal](https://www.qbitai.com/2026/02/381712.html)
- [ai-bot.cn GLM-5.2 model card](https://ai-bot.cn/glm-5-2/)
- [DataLearnerAI GLM-5.2 evaluation page](https://www.datalearner.com/ai-models/pretrained-models/glm-5-2)
- [V2EX GLM-5 open source discussion](https://www.v2ex.com/t/1192496)
- [Zhihu 知乎 — Zhipu's developer-first GLM-5.2 launch strategy](https://zhuanlan.zhihu.com/p/2050158905360135402)

**English-secondary (T1/T2):**
- [Hugging Face zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)
- [Hugging Face unsloth/GLM-5.2-GGUF](https://huggingface.co/unsloth/GLM-5.2-GGUF)
- [Hugging Face amd/GLM-5.2-MXFP4](https://huggingface.co/amd/GLM-5.2-MXFP4)
- [Hugging Face mlx-community/GLM-5.2-mxfp4](https://huggingface.co/mlx-community/GLM-5.2-mxfp4)
- [Hugging Face GLM-5.2 long-horizon blog](https://huggingface.co/blog/zai-org/glm-52-blog)
- [Artificial Analysis GLM-5.2 leading open-weights article](https://artificialanalysis.ai/articles/glm-5-2-is-the-new-leading-open-weights-model-on-the-artificial-analysis-intelligence-index)
- [Artificial Analysis AA-Omniscience writeup](https://artificialanalysis.ai/articles/aa-omniscience-knowledge-hallucination-benchmark)
- [Artificial Analysis GLM-5.2 providers page](https://artificialanalysis.ai/models/glm-5-2/providers)
- [VentureBeat — GLM-5.2 beats GPT-5.5 1/6 cost coding](https://venturebeat.com/technology/z-ais-open-weights-glm-5-2-beats-gpt-5-5-on-multiple-long-horizon-coding-benchmarks-for-1-6th-the-cost)
- [The Decoder — Zhipu GLM-5.2 closes in on closed-source](https://the-decoder.com/zhipu-ais-glm-5-2-closes-in-on-closed-source-leaders-in-coding-marathons/)
- [The Decoder — GPT-5.5 tops benchmarks but hallucinates](https://the-decoder.com/gpt-5-5-tops-benchmarks-but-still-hallucinates-frequently-at-a-20-percent-higher-api-cost/)
- [Crypto Briefing — Z.AI GLM-5.2 outperforms GPT-5.5 coding](https://cryptobriefing.com/z-ai-glm-5-2-outperforms-gpt-5-5-coding/)
- [DeepLearning.AI The Batch — Zhipu top open model](https://www.deeplearning.ai/the-batch/zhipus-glm-5-2-is-the-new-top-open-model)
- [DeepLearning.AI The Batch issue 351 — GPT-5.5 + Kimi K2.6 + GLM-5.2](https://www.deeplearning.ai/the-batch/issue-351)
- [TechTimes — China data risk for hosted API](https://www.techtimes.com/articles/318543/20260617/glm-52-open-weights-live-top-coding-benchmark-api-use-carries-china-data-risk.htm)
- [Lushbinary GLM-5.2 developer guide (1M context + MoE)](https://lushbinary.com/blog/glm-5-2-developer-guide-1m-context-coding-plan/)
- [Lushbinary GLM-5 dev guide (744B Ascend)](https://lushbinary.com/blog/glm-5-developer-guide-zhipu-ai-huawei-ascend-open-weight/)
- [Lushbinary GLM-5.2 pricing guide](https://lushbinary.com/blog/glm-5-2-api-pricing-glm-coding-plan-guide/)
- [Spheron blog — GLM-5.2 self-host on GPU cloud](https://www.spheron.network/blog/deploy-glm-5-2-gpu-cloud/)
- [GMI Cloud — GLM-5 inference cloud options](https://www.gmicloud.ai/en/blog/where-to-run-glm-5-inference-in-the-cloud-gpu-requirements-deployment-options-and-scaling-considerations)
- [Fireworks AI GLM-5.2 day-zero blog](https://fireworks.ai/blog/glm-5p2)
- [OpenRouter GLM-5.2 page](https://openrouter.ai/z-ai/glm-5.2)
- [Together AI GLM-5.2 model card](https://www.together.ai/models/glm-52)
- [Requesty GLM-5.2 pricing analysis](https://www.requesty.ai/models/zai/glm-5.2)
- [Latent.space — GLM-5.2 the real deal + Open Fable forecast](https://www.latent.space/p/ainews-glm-gpt-glm-52-passes-vibe)
- [Hacker News thread on the 3x hallucination claim](https://news.ycombinator.com/item?id=48600167) (403 on fetch — referenced for trail)
- [Wire blog — GPT-5.5 hallucination context-engineering analysis](https://usewire.io/blog/gpt-5-5-hallucination-drop-is-a-context-engineering-win/)
- [FindSkill.ai — GPT-5.5 86% hallucination metric](https://findskill.ai/blog/gpt-5-5-hallucination-rate-how-to-use/)
- [Karo Zieminski Substack — GPT-5.5 citation reliability critique](https://karozieminski.substack.com/p/gpt-5-5-citations-hallucination-rate)
- [danilchenko.dev GLM-5.2 review](https://www.danilchenko.dev/posts/glm-5-2-review/)
- [BenchLM.ai GLM-5 vs GPT-5.2 comparison](https://benchlm.ai/compare/glm-5-vs-gpt-5-2)
- [BenchLM.ai AA-Omniscience hallucination 113-model averages](https://benchlm.ai/benchmarks/omniscienceHallucinationRate)
- [Codersera GLM-5.2 day-one brief](https://codersera.com/blog/glm-5-2-release-1m-context-coding-2026/)
- [Codersera GLM-5.2 complete guide](https://codersera.com/blog/glm-5-2-complete-guide-2026/)
- [SuperCareer GLM-5.2 review](https://www.supercareer.co/blog/glm-5-2-review-2026)
- [ThePlanetTools GLM-5.2 review](https://theplanettools.ai/tools/glm-5-2)
- [AIforAnything GLM-5.2 review](https://aiforanything.io/blog/glm-5-2-review-2026)
- [RITS Shanghai NYU GLM-5.2 1/6 cost coverage](https://rits.shanghai.nyu.edu/ai/glm-5-2-z-ais-open-weights-coder-beats-gpt-5-5-at-1-6-the-cost/)
- [NxCode — GLM-5 744B complete guide](https://www.nxcode.io/resources/news/glm-5-open-source-744b-model-complete-guide-2026)
- [Memeburn — Z AI startup profile](https://memeburn.com/what-is-z-ai-the-chinese-startup-shaking-up-the-ai-race-with-glm-5-2/)
- [AK on X — GLM-5.2 free across HF providers](https://x.com/_akhaliq/status/2067634049250623512)
- [KuCoin — GLM-5.2 HF launch + Zhipu/Minimax HK$300B coverage](https://www.kucoin.com/news/flash/z-ai-launches-glm-5-2-with-1m-token-context-window-on-hugging-face)
- [pricepertoken GLM-4.5 pricing](https://pricepertoken.com/pricing-page/model/z-ai-glm-4.5)
- [WaveSpeed GLM-5.2 API + routing blog](https://wavespeed.ai/blog/posts/glm-5-2-api/)

**Corporate / regulatory:**
- [Wikipedia Z.ai](https://en.wikipedia.org/wiki/Z.ai)
- [Federal Register 2025-00704 BIS Entity List addition](https://www.federalregister.gov/documents/2025/01/16/2025-00704/addition-of-entities-to-and-revision-of-entry-on-the-entity-list)
- [Global Times — Zhipu opposes Entity List](https://www.globaltimes.cn/page/202501/1326995.shtml)
- [Sidley Austin — BIS Affiliates Rule (50% rule)](https://www.sidley.com/en/insights/newsupdates/2025/10/us-commerce-department-bureau-of-industry-and-security-adopts-50-percent-rule-for-export-controls)
- [Covington & Burling — US export-control framework Jan 2025](https://www.cov.com/en/news-and-insights/insights/2025/01/us-department-of-commerce-establishes-export-control-framework-limiting-the-diffusion-of-advanced-artificial-intelligence-and-expands-and-clarifies-advanced-computing-controls)
- [Just Security — China AI distillation costs](https://www.justsecurity.org/134124/costs-china-ai-distillation/)
- [Medium / Meng Li — Zhipu AI Entity List first AI export ban](https://medium.com/ai-disruption/zhipu-ai-chinas-leading-large-model-added-to-u-s-entity-list-following-first-ai-export-ban-1e107828ca7e)
- [Geopolitechs — Zhipu undeterred by Entity List](https://www.geopolitechs.org/p/zhipu-ai-not-relying-on-us-large)
- [Kharon — BIS-listed Chinese tech subsidiaries unrestricted spin-up](https://www.kharon.com/brief/bis-50-percent-rule-commerce-department-china-tech)
- [Turing Post — Zhipu profile](https://www.turingpost.com/p/zhipu)
- [Pandaily — Zhipu rise from Tsinghua lab](https://pro.pandaily.com/p/zhipu-ais-rise-from-tsinghua-lab)
- [Rockrose — Zhipu first of Six Tigers IPO](https://rockrose.xyz/the-rise-of-zhipu-ai/)
- [The AI Rankings — Zhipu 2026 profile](https://theairankings.com/zhipu/)
- [Tracxn — Zhipu funding rounds + investors](https://tracxn.com/d/companies/zhipu/__vs60BhIzHeRwBtLTuoj841aSKyol6J8LYhHaTVGDSrU/funding-and-investors)
- [Data Center Knowledge — Alibaba/Tencent $340M Zhipu funding](https://www.datacenterknowledge.com/ai-data-centers/alibaba-tencent-join-340-million-funding-for-ai-startup-zhipu)
- [SCMP — Alibaba Tencent invest $342M in Zhipu](https://www.scmp.com/tech/big-tech/article/3238698/alibaba-tencent-and-other-major-chinese-backers-invest-us342-million-start-zhipu-ai-tech-sector-sees)
- [Yahoo Finance — Zhipu $560M share sale HKEX](https://finance.yahoo.com/news/chinas-zhipu-ai-launches-us-093000355.html)
- [CB Insights — Zhipu financials profile](https://www.cbinsights.com/company/zhipuai/financials)
- [KuCoin — MiniMax + Zhipu HK$300B valuations](https://www.kucoin.com/news/flash/minimax-and-zhipu-ai-surge-in-hong-kong-market-valuations-top-300-billion-hkd)
- [Data Innovation 2024 Zhipu generative trailblazer profile](https://datainnovation.org/2024/12/zhipu-ai-chinas-generative-trailblazer-grappling-with-rising-competition/)
- [Bismarck Analysis brief — Z.ai open to government](https://brief.bismarckanalysis.com/p/ai-2026-zai-is-open-to-government)
- [Tore Says Substack — Tsinghua Corridor Part VI spinoffs](https://toresays.substack.com/p/the-tsinghua-corridor-part-vi-the)
- [36Kr EU — First Price Hike Year of Horse AI stocks](https://eu.36kr.com/en/p/3693876116844424)
- [36Kr EU — Zhipu battle for digital world interpretation](https://eu.36kr.com/en/p/3848005423797509)

**Adjacent / context (T2):**
- [The Information — OpenAI names Zoph for enterprise push](https://www.theinformation.com/articles/openai-names-former-tml-staffer-zoph-oversee-enterprise-push) (TC-4 prior context)
- [Officechai — GLM-5.2 4th on AA Index most capable open model](https://officechai.com/ai/glm-5-2-places-4th-on-artificial-analysis-intelligence-index-becomes-most-capable-open-model/)
- [MangoMind blog — GLM-5 preview vs GPT-5.2 + Kimi k2.5](https://www.mangomindbd.com/blog/glm-5-vs-gpt-5-2-benchmark-showdown)
- [Suprmind — June 2026 AI hallucination rates data](https://suprmind.ai/hub/ai-hallucination-rates-and-benchmarks/)
- [Hugging Face Hallucinations Leaderboard blog](https://huggingface.co/blog/leaderboard-hallucinations)
- [Awesome Agents GLM-5.2 model entry](https://awesomeagents.ai/models/glm-5-2/)
- [Let's Data Science — China trained frontier AI without NVIDIA](https://letsdatascience.com/blog/china-trained-frontier-ai-model-glm-5-without-nvidia)
- [Hugging Face GLM-5.2 collection](https://huggingface.co/collections/zai-org/glm-52)
- [Hugging Face GLM-5.2 discussions](https://huggingface.co/zai-org/GLM-5.2/discussions)
- [Lukealonso NVFP4 quant](https://huggingface.co/lukealonso/GLM-5.2-NVFP4)
- [Unsloth GLM-5.2 main card](https://huggingface.co/unsloth/GLM-5.2)
- [Unsloth GLM-5.2 docs](https://unsloth.ai/docs/models/glm-5.2)
- [Developers Digest — GLM-5.2 free + cheap providers](https://www.developersdigest.tech/blog/glm-5-2-free-and-cheap-access-2026)
- [DeepInfra GLM-5.1 pricing guide](https://deepinfra.com/blog/glm-5-1-pricing-guide-provider-comparison)
- [Cline GitHub issue #11640 GLM-5.2 + Kimi K2.6 + DeepSeek V4 Flash](https://github.com/cline/cline/issues/11640)
- [HW Computing — GLM-5.1 SWE-Bench Pro 58.4% global rank-1](https://hwcomputing.csdn.net/69e81da10a2f6a37c5a168e0.html)
- [AA-Omniscience arXiv 2511.13029](https://arxiv.org/html/2511.13029v1)

---

**End of Subagent A deliverable. Parent: ready for synthesis with Subagent B (Fable 5) + Subagent C (GPT-5.5).**
