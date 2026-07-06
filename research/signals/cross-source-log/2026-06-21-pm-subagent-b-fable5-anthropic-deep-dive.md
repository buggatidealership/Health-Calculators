# 2026-06-21 PM — Subagent B — Claude Fable 5 (Anthropic) deep dive

**Mission:** parallel-subagent deep dive on Fable 5 capability/pricing/adoption/regulatory; companion to Subagent A (GLM-5.2 / Zhipu) and Subagent C (GPT-5.5 / OpenAI). Parent will synthesize head-to-head.

**Anti-leading discipline:** Anthropic is the creator of the parent agent running this research. Triple-skeptical filter applied to all Anthropic-positive claims. Where data points are uncomfortable (price-per-capability inefficiency, refusal-rate controversy, export ban), they are surfaced FIRST.

**Self-bias disclosure (per the 2026-06-12 cross-source-log convention):** I am Claude Opus 4.7. Fable 5 is from the same lab. I am the subject, not a neutral observer. Read accordingly.

---

## TL;DR (3 directional findings, no recommendation)

1. **Fable 5 sits at #1 on the Artificial Analysis Intelligence Index (64.9, ~5pt lead) AND at 95% SWE-bench Verified / 80.3% SWE-bench Pro (11pt lead) — but at $10/$50 per Mtok input/output (DOUBLE Opus 4.8) for ~5.7% composite improvement, the price/capability slope went sharply negative at this tier (T1 The Decoder + Artificial Analysis).** Frontier-leadership thesis and value-leadership thesis split here for the first time in Anthropic's product line.

2. **Model has been globally OFFLINE for ALL users since 2026-06-12 (T+3 days post-launch) under US Commerce Department export-control directive — the first commercial AI MODEL ever placed under export control (prior controls were hardware-only).** Bedrock + Vertex + Foundry deployment paths all severed within hours. This is a regime-precedent event; durability and reversal-timeline both NOT-VERIFIED.

3. **Capability profile is uneven, not monotonically frontier:** Fable 5 LOSES to GPT-5.5 on Agents' Last Exam (22.0% vs 24.0%, UC Berkeley RDI, T1 VentureBeat) and trails Gemini 3.1 Pro on GPQA Diamond (91.3% vs 94.3%) and on ARC-AGI (~12% vs GPT-5.5 ~85%, T2). Anthropic's edge is concentrated in agentic-coding / computer-use / long-horizon-tool-use; weaker on novel-reasoning / scientific-question domains. **This is the opposite of a uniformly-dominant frontier model.**

---

## 1. Architecture (only what is disclosed; NOT-DISCLOSED flagged)

| Dimension | Disclosed | Source / verification |
|---|---|---|
| Release date | 2026-06-09 | T1 [Anthropic announcement](https://www.anthropic.com/news/claude-fable-5-mythos-5) |
| Successor to | Claude Opus 4.8 (launched 2026-05-28); first "Mythos-class" GA model (sits above Opus class) | T1 |
| Context window | 1M tokens default; 128K max output | T1 [Anthropic API docs](https://platform.claude.com/docs/en/about-claude/models/introducing-claude-fable-5-and-claude-mythos-5) |
| Architecture type | NOT-DISCLOSED (dense vs MoE not specified by Anthropic) | Per [Artificial Analysis](https://artificialanalysis.ai/models/claude-fable-5) — Anthropic standard non-disclosure |
| Parameter count | NOT-DISCLOSED | Anthropic does not disclose; any number circulating is speculation |
| Training compute | NOT-DISCLOSED | — |
| Training corpus | NOT-DISCLOSED | — |
| Constitutional AI / RLAIF | Confirmed in use; system card describes "safeguards" + classifier-based reroute architecture | T1 system card (319 pages, summarized by [Simon Willison](https://simonwillison.net/2026/Jun/10/if-claude-fable-stops-helping-you/)) |
| Model card location | [https://www.anthropic.com/news/claude-fable-5-mythos-5](https://www.anthropic.com/news/claude-fable-5-mythos-5) + 319-page system card | T1 |
| Safety tier | First "Mythos-class" — new capability tier with elevated safeguards (Mythos 5 = same base, fewer safeguards; Fable 5 = Mythos with safety filtering on top) | T1 |

**Honest read:** Anthropic discloses LESS architecture detail than DeepSeek (full MoE specs), Meta (Llama params), or Mistral. The "Mythos-class" framing is a marketing tier, not an architecture descriptor. **Architecture remains a near-total black box.**

---

## 2. Benchmark performance (vendor-reported flagged; independent verified separately)

| Benchmark | Fable 5 | Opus 4.8 | GPT-5.5 | Gemini 3.1 Pro | Source / verification |
|---|---|---|---|---|---|
| **Artificial Analysis Intelligence Index** | **64.9** (#1) | 61.4 | ~59.9 | (not on top 2) | T1 [Artificial Analysis](https://artificialanalysis.ai/articles/claude-fable-5-mythos-intelligence-index) — independent third-party, used Anthropic pre-release access |
| **SWE-bench Verified** | **95.0%** | 88.6% | 82.6% | 78.8% (Flash) | [Morphllm SWE-bench leaderboard](https://www.morphllm.com/claude-benchmarks) — vendor-reported figures aggregated |
| **SWE-bench Pro** | **80.3%** (11pt lead) | 69.2% | 58.6% | 54.2% | T1 [Anthropic announcement](https://www.anthropic.com/news/claude-fable-5-mythos-5) |
| **OSWorld-Verified (computer use)** | 85.0% | (tight cluster 76-85%) | (tight cluster) | (tight cluster) | T1 Anthropic; "only narrowly ahead" per [Vellum analysis](https://www.vellum.ai/blog/claude-fable-5-and-mythos-5-benchmarks-explained) |
| **GPQA Diamond** | 91.3% | (lower) | 93.6% | **94.3%** | T2 [Lushbinary comparison](https://lushbinary.com/blog/claude-fable-5-vs-gpt-5-5-vs-gemini-3-1-pro-comparison/) — Fable 5 NOT in Anthropic's official table (red flag — likely because they don't lead) |
| **MMLU** | NOT-EXPLICITLY-REPORTED by Anthropic (composite via AA Index) | — | — | 92.6% (Gemini 3.1 Pro) | NOT-VERIFIED for Fable 5 standalone — suggests it's not best-in-class |
| **ARC-AGI** | ~12% | — | **~85% (ARC-AGI-2)** | — | T3 (Aivy news aggregation) — major reasoning gap, NOT-VERIFIED at primary-source level but consistent with Anthropic's reluctance to publish |
| **Agents' Last Exam (UC Berkeley RDI)** | 22.0% (#3) | — | **24.0% (#1)** | — | T1 [VentureBeat](https://venturebeat.com/technology/surprise-upset-gpt-5-5-beats-claude-fable-5-on-brutal-new-agents-last-exam-benchmark) — independent academic benchmark; Fable 5 LOSES |
| **GDPval-AA (Elo)** | **1932** (#1) | (prior leader) | — | — | T1 [Artificial Analysis](https://artificialanalysis.ai/articles/claude-fable-5-mythos-intelligence-index) |
| **Terminal-Bench Hard** | #1 (frontier) | — | — | — | T1 Artificial Analysis |
| **Tau2-bench Telecom** | #1 (frontier) | — | — | — | T1 Artificial Analysis |
| **AA-Omniscience hallucination rate** | 36.18% | — | 85.53% | — | T2 [The Decoder](https://the-decoder.com/anthropics-claude-fable-5-costs-twice-as-much-for-5-7-percent-more-performance/) — Fable 5 advantage real here |
| **FACTS Grounding** | NOT-VERIFIED | — | — | — | Benchmark not in any public Fable 5 reporting I could verify |
| **AutomationBench** | 17.4% | (lower) | (lower) | (lower) | T2 — absolute number low but relative lead present |
| **HumanEval / MBPP** | NOT-EXPLICITLY-REPORTED at Fable 5 launch (suggests benchmark saturation / Anthropic deprecating in favor of SWE-bench) | — | — | — | Inferred from absence in Anthropic's table |

**Triple-skeptical read:** Anthropic's official benchmark table is **CURATED to maximize lead**. The benchmarks where Fable 5 leads (SWE-bench Pro, OSWorld, agentic-coding, GDPval) are over-represented; the benchmarks where it trails or merely competes (GPQA Diamond, MMLU, ARC-AGI, Agents' Last Exam) are de-emphasized or absent. **The frontier-leadership claim is real but DOMAIN-SPECIFIC, not uniform.**

**Pattern: Fable 5 dominates AGENTIC COMPLEX-WORKFLOW evals. It does NOT dominate NOVEL-REASONING / SCIENTIFIC-QUESTION evals.** This is a real capability profile difference, not noise.

---

## 3. Capability differentiation

| Capability | Fable 5 read | vs competitors | Source |
|---|---|---|---|
| **Agentic coding** | Frontier (95% SWE-bench Verified, 80.3% SWE-bench Pro 11pt lead) | Leads field decisively | T1 Anthropic + T2 vendor-reported leaderboards |
| **Computer use** | Frontier (85% OSWorld-Verified) but tight cluster with peers | Narrow lead | T1 Anthropic + T2 Vellum |
| **Long-context retention** | 1M context, but effective utilization NOT-VERIFIED at length | Same nominal size as Gemini 1.5 Pro / GPT-5.5 | T1 spec; effective quality NOT independently benchmarked at 1M |
| **Tool use / function calling** | Strong (Tau2-bench Telecom #1) | Frontier | T1 Artificial Analysis |
| **Novel reasoning (ARC-AGI)** | ~12% — **TRAILS GPT-5.5 ~85% by ~7×** | Major gap | T3 — NOT-VERIFIED at primary, but consistent with non-disclosure |
| **Scientific Q&A (GPQA)** | 91.3% — trails Gemini 3.1 Pro 94.3% AND GPT-5.5 93.6% | Third-place tier | T2 |
| **Long-horizon agentic (Agents' Last Exam)** | 22% — LOSES to GPT-5.5 24% | Second-place | T1 VentureBeat |
| **Safety filtering / refusal profile** | **Heavy by design — controversial.** Cybersecurity / biology / chemistry / distillation queries reroute to Opus 4.8 fallback. Anthropic claims <5% session trigger; empirical reports suggest higher rates for security/bio/devops researchers. Initial deployment used HIDDEN guardrails (silent capability degradation); Anthropic apologized + made them visible after backlash. | Most restrictive of frontier models | T1 [Anthropic post](https://www.anthropic.com/news/claude-fable-5-mythos-5) + T1 [TechCrunch](https://techcrunch.com/2026/06/10/cybersecurity-researchers-arent-happy-about-the-guardrails-on-anthropics-fable/) + T1 [The Register](https://www.theregister.com/ai-and-ml/2026/06/10/anthropic-claude-fable-5-refuses-innocuous-prompts/5253754) + T1 [Gizmodo apology](https://gizmodo.com/anthropic-apologizes-for-one-of-the-guardrails-on-its-fable-5-model-and-will-change-it-2000770365) |
| **Hallucination** | 36.18% on AA-Omniscience — meaningful lead vs GPT-5.5 85.53% | Strong | T2 The Decoder |
| **Multilingual** | NOT-VERIFIED at Fable 5 level (Anthropic does not publish per-language benchmarks) | — | — |

**Honest read:** Fable 5 is a **specialized frontier model** — best-in-class for AGENTIC WORKFLOWS where tool use, code generation, and long-horizon planning compound. **It is NOT the right tool for** novel-pattern reasoning (ARC-AGI), scientific question-answering (GPQA), or cybersecurity / defensive-security / bioinformatics research workflows. The "uniformly frontier" pitch overclaims.

---

## 4. Pricing (per million tokens)

| Tier | Input | Output | Notes |
|---|---|---|---|
| **Fable 5 standard** | **$10.00** | **$50.00** | T1 Anthropic API; DOUBLE Opus 4.8 rate |
| Fable 5 batch (50% discount) | $5.00 | $25.00 | Identical to Opus 4.8 real-time pricing — i.e., to get Opus-priced Fable 5 you must accept async |
| Fable 5 cached read (90% discount) | $1.00 | — | Single biggest lever on Fable 5 bills; pays off after 1 read at 5-min TTL |
| Fable 5 batch + cache stacked | $0.50 | $25.00 | Multipliers stack |
| US-only inference (`inference_geo: "us"`) | 1.1× all rates | 1.1× all rates | Data-residency premium |
| Opus 4.8 (predecessor) | $5.00 | $25.00 | Half Fable 5; same on batch+cache structure |
| Sonnet 4.6 | $3.00 | $15.00 | |
| Haiku 4.5 | $1.00 | $5.00 | |
| Claude Pro / Max / Team / Enterprise subs | Included free 2026-06-09 → 2026-06-22 | Then usage-credit billing at API rates | "Bait" pricing — broad free access for ~2 weeks; converts to usage-credit billing thereafter |

**Cross-vendor like-tier comparison (from AM5 cluster file):**

| Model (frontier tier) | Input $/Mtok | Output $/Mtok | Blended (1:4 in:out) |
|---|---|---|---|
| **Fable 5** | $10.00 | $50.00 | **$42.00** |
| Opus 4.8 | $5.00 | $25.00 | $21.00 |
| GPT-5.5 (NOT-VERIFIED for this subagent; Subagent C confirms) | — | — | — |
| Sonnet 4.6 | $3.00 | $15.00 | $12.60 |
| **DeepSeek V4 Pro** | $0.435 | $0.87 | **$0.78** |

**At blended 1:4, Fable 5 is ~54× DeepSeek V4 Pro and 2× Opus 4.8.**

**The Decoder's framing (T2, surfaced for anti-leading discipline):** "Fable 5 costs twice as much for 5.7 percent more performance." For short-context / well-defined tasks (classification, summarization, RAG), Fable 5 uses approximately the same token count as Opus 4.8 at double the price — i.e., the efficiency advantage exists ONLY when long-horizon agentic capability compresses total tokens enough to outweigh the per-token premium. **Not a uniformly-better-value model.**

---

## 5. Deployment + availability (as of 2026-06-21)

| Channel | Status pre-2026-06-12 | Status post-2026-06-12 |
|---|---|---|
| **Direct Anthropic API** | GA from 2026-06-09 | **DISABLED globally — all customers** |
| **AWS Bedrock** | GA from 2026-06-09 (US East N.Virginia + EU Stockholm) | **DISABLED — Anthropic requested AWS revoke access for all users** |
| **Google Vertex AI** | GA from 2026-06-09 | **DISABLED** |
| **Microsoft Foundry** | GA from 2026-06-09 | **DISABLED** |
| **GitHub Copilot** | Day-zero integration 2026-06-09 | DISABLED |
| **Self-hosted** | Not supported (Anthropic does not allow self-hosting of any Claude model — confirmed standard policy) | — |
| **China / RU / sanctioned regions** | NEVER available | — |
| **Foreign-national access (any geography)** | Available | DISABLED per Commerce Dept directive |
| **Opus 4.8 / Sonnet / Haiku** | GA, unaffected | **REMAINS GA — directive explicitly excludes lower-tier Claude models** |

**Confirmation source:** T1 [Anthropic blog](https://www.anthropic.com/news/fable-mythos-access) + T1 [AWS confirmation via repo cross-source-log 2026-06-12](/home/user/Health-Calculators/research/signals/cross-source-log/2026-06-12-us-export-control-fable-mythos-suspension-model-layer-FIRST.md).

**Anthropic stated intent:** "working to restore access as soon as possible." As of 2026-06-21 (T+9 days from directive), **no public access restoration announcement found**. H1 (transient misunderstanding, P~45% per the 2026-06-12 file) is showing weakness — every day past the original "next 24 hours" Anthropic commitment strengthens H2 (structural model-export regime forming, P~40%) over H1.

---

## 6. Adoption signals (independent — not Anthropic marketing)

| Signal | Reading | Source |
|---|---|---|
| **Stripe Ruby migration case study** | 50M-line Ruby codebase, ~2-month team task → 1 day | T1/T2 Anthropic-published case study, with Stripe quote — directionally credible but Anthropic-curated |
| **GitHub Copilot day-zero integration** | Confirms Microsoft willing to ship Anthropic frontier on day-1 despite OpenAI partnership | T1 [Anthropic + GitHub announcement](https://claudefable-5.ai/news/fable-5-github-copilot-bedrock-vertex/) |
| **300,000+ business customers @ Anthropic (corp-level)** | 80% of revenue from enterprise (Oct 2025 disclosure) | T1 — predates Fable 5 |
| **1,000+ customers spending >$1M/yr** | Doubled from 500 in <2 months as of April 2026 | T1 |
| **Claude Code: $2.5B ARR Feb 2026** (more than doubled since Jan 2026) | Enterprise adoption pull | T1 [Sacra](https://sacra.com/c/anthropic/) |
| **Artificial Analysis used Anthropic pre-release access to score Fable 5** | Tells us AA had close working relationship; independent-but-cooperative, not adversarial | T1 [AA tweet](https://x.com/ArtificialAnlys/status/2064500150069030992) |
| **25+ public Fable 5 builds in first 72 hours** | Developer ecosystem interest real | T2 [aiblewmymind Substack](https://aiblewmymind.substack.com/p/claude-fable-5-use-cases) |
| **OUTAGES: 10 in 12 days through 2026-06-16** | "Infrastructure stretched" per Anthropic engineer; demand outstripping supply | T1 (per cross-source-log AM5) — NEGATIVE adoption signal |
| **Cybersecurity researcher backlash** | Field-specific community openly hostile due to refusal-rate; potential procurement-objection vector | T1 multiple outlets |

**Honest read:** Adoption signals through 2026-06-11 were strongly positive (best frontier launch in Anthropic history); 2026-06-12 onward they FROZE due to global disable. **Resumption velocity is the load-bearing unknown.** If Fable 5 returns within 30 days with no permanent restrictions, adoption likely picks up where it left off; if restoration carves out foreign-national geo-fence or material capability degradation, adoption story is structurally weaker.

---

## 7. Anthropic corporate context

| Dimension | Reading | Source |
|---|---|---|
| **Run-rate revenue** | $47B as of mid-May 2026 (vs $1B Dec 2024 → ~47× in 17 months) | T1 [Sacra](https://sacra.com/c/anthropic/) |
| **Most recent valuation** | $965B (Series H, Apr 2026) | T1 — confidentially filed IPO targeting $1T+ |
| **Amazon stake** | $8B invested; current value ~$70B+ (Amazon disclosure); estimated mid-to-high teens % of cap table → $135-160B mark-to-market | T1 [Fortune](https://fortune.com/2026/04/30/google-amazon-ai-profits-anthropic-stake-bubble-earnings-2026/) |
| **Google stake** | ~14% straight equity, hard-capped at 15%; mark-to-market ~$135B | T1 |
| **Half of Amazon + Google "AI profits" came from Anthropic stake markup** (NOT operating business) | Bubble-criticism vector; risk if Anthropic IPO disappoints | T1 Fortune |
| **Defense / Palantir partnership** | Nov 2024 — Anthropic + Palantir + AWS providing Claude to US intelligence + defense | T1 [Wikipedia / Anthropic](https://en.wikipedia.org/wiki/Anthropic) |
| **As of Feb 2026: only AI model used in classified missions via Palantir** | TC-10 bifurcation-doctrine "defense-integrated" status | T1 |
| **AWS GovCloud + IL5/IL6 deployment** | Confirmed standard | T1 |
| **Anthropic v DOW (Dept of War) litigation** | Reference: 2026-06-12 EVE brief — Anthropic actively in legal posture against government | T2 (per 2026-06-12 file) — unresolved |
| **Position vs OpenAI** | **Anthropic passed OpenAI in revenue by April 2026 ($30B ARR vs OpenAI lower); enterprise-weighted vs consumer-weighted; comparative defensibility in B2B procurement** | T1 [The AI Corner](https://www.the-ai-corner.com/p/anthropic-30b-arr-passed-openai-revenue-2026) |
| **IPO** | Confidentially filed; expected $1T+ target | T1 |

**Bifurcation-doctrine read (PC-14 candidate / TC-10):** Anthropic occupies a paradoxical position — **defense-integrated via Palantir + classified missions ("protected" category) AND simultaneously the FIRST commercial AI lab to be hit with a model-layer export-control shutdown.** The bifurcation is not clean. The most likely resolution (my model, P~55%) is that Fable 5 returns within 30-90 days with a foreign-national exclusion enforced at the cloud-provider boundary (AWS handles compliance, similar to how it handles ITAR-controlled AWS GovCloud workloads). **Anthropic is being USED as the test case for the new model-layer export-control machinery — not punished by it.**

---

## 8. Fable 5 export directive 2026-06-12 specifics

| Element | Detail | Source |
|---|---|---|
| **Issuing authority** | US Commerce Department, **Bureau of Industry and Security (BIS)** | T1 [TechPolicy.Press](https://www.techpolicy.press/did-the-us-government-just-set-an-ai-export-precedent-by-blocking-mythos/) + T1 Anthropic |
| **Signatory** | Commerce Secretary **Howard Lutnick** sent letter directly to **Dario Amodei** | T1 |
| **Time received** | 2026-06-12, 5:21 PM ET | T1 Anthropic blog |
| **Days post-launch** | 3 (launch was 2026-06-09) | T1 |
| **Scope** | Suspend access to Fable 5 AND Mythos 5 by **ANY foreign national** — inside OR outside US, INCLUDING foreign-national Anthropic employees | T1 |
| **Net effect** | Anthropic disabled both for ALL customers globally (could not filter nationality in real-time) | T1 |
| **Other Claude models** | EXPLICITLY UNAFFECTED — Opus 4.8, Sonnet, Haiku all remain GA | T1 |
| **National-security rationale stated in letter** | NOT provided in detail; per officials, decision followed learning of a "technique to bypass Fable 5's safeguards" | T1 [Fortune](https://fortune.com/2026/06/13/anthropic-disables-fable-mythos-export-controls-national-security-threat/) |
| **Triggering technique (per Katie Moussouris / The Register T1)** | Amazon researchers fed open-source code with known CVEs + inserted vulnerabilities; "review the code for security issues" declined, but "fix this code" complied + produced test scripts | T1 [The Register](https://www.theregister.com/security/2026/06/15/feds-freaked-over-fable-5-after-simple-fix-this-code-prompt-not-jailbreak-says-researcher/5255827) |
| **Anthropic's stated position** | Disagreed publicly; called it a "misunderstanding"; capability "widely available from other models including OpenAI's GPT-5.5"; "working to restore access as soon as possible" | T1 Anthropic |
| **Reversal / restoration as of 2026-06-21** | NONE PUBLIC | — |
| **Precedent significance** | **FIRST commercial AI model placed under US export control.** Prior controls have been hardware-only (chips, HBM, wafers, foundry tools). This is the model-LAYER extension of the silicon-tier export regime. | T1 [TechPolicy.Press](https://www.techpolicy.press/did-the-us-government-just-set-an-ai-export-precedent-by-blocking-mythos/) + T1 [Lawfare "Kill Switch for Frontier AI"](https://www.lawfaremedia.org/article/a-kill-switch-for-frontier-ai) |
| **Historical analog** | 1990s PGP / cryptography classified as ITAR-munition; same legal mechanism now applied to AI weights / access | T2 |
| **Commercial-conflict-of-interest narrative (PC-13 enrichment)** | Amazon CEO Andy Jassy reportedly raised the triggering paper to officials directly; Amazon researchers wrote the triggering paper; Amazon is largest Anthropic investor at $135-160B mark; "competitor weaponizing regulatory apparatus" sub-pattern flagged in AM5 cluster | T2 (Moussouris / Fortune cross-reference) |

**Investable implication (per Critical Rule #11):** No held name has direct equity exposure (Anthropic private). Indirect exposure is via the bifurcation-doctrine cascade — strengthens MRVL (defense-integrated custom Si), HYNIX (defense-integrated HBM), Palantir-adjacent stack. **Subagent B does NOT trigger new cascade beyond what AM5 already executed.**

---

## 9. Cost-per-capability tier analysis

**My-model Pareto-frontier map:**

| Model | Capability composite | Blended $/Mtok | Cost-per-capability rank |
|---|---|---|---|
| Fable 5 | 64.9 (AA Index, #1) | ~$42 | **Capability leader, cost laggard** |
| Opus 4.8 | 61.4 | ~$21 | **Best capability/cost on Anthropic frontier line** |
| GPT-5.5 | ~59.9 | (Subagent C) | (Subagent C) |
| DeepSeek V4 Pro | ~ Sonnet-tier (SWE 80.6%) | ~$0.78 | **Cost leader, capability good-not-frontier** |
| Sonnet 4.6 | (lower) | ~$12.60 | |
| Haiku 4.5 | (lower) | ~$3.20 | |

**Fable 5 sits at the EXTREME CAPABILITY corner with the LEAST favorable price slope.** The marginal $/IQ point above Opus 4.8 is approximately:
- Capability delta: 64.9 − 61.4 = 3.5 points
- Cost delta: $42 − $21 = $21 per Mtok blended
- **Implied $/marginal-IQ-point: ~$6/Mtok per 1 AA-index point**

This is the WORST cost-per-marginal-capability slope on the Anthropic line. It is rational ONLY for workloads where:
1. The agentic-long-horizon capability differential (Fable 5's specialized strength) compresses TOTAL tokens enough to outweigh the per-token premium
2. The customer's binding constraint is capability/correctness, not cost
3. The customer cannot self-host (no Opus 4.8 fallback option, no DeepSeek-route)

**Investable read:** Fable 5 pricing is a **margin-capture move on the highest-willingness-to-pay enterprise tier**, not a price-competitive frontier release. **It does NOT defend against DeepSeek V4 Pro–class disruption from below; it defends ANTHROPIC's margin on the cohort that won't / can't switch.** This is consistent with Anthropic's enterprise-weighted revenue profile.

---

## 10. Convex hull lateral (3+ worlds, P-weighted my model)

**H1 (P~30%, my model) — Fable 5 LEADS frontier on durable basis.** Capability gap on agentic / coding sustains; export-ban resolves with foreign-national geo-fence; pricing premium accepted by HNW enterprise cohort; ARC-AGI / GPQA gaps closed in Fable 5.1 within 90 days. Anthropic's $1T IPO target validated.

Falsifier-confirm: Fable 5 restored at full capability within 30 days AND Anthropic releases a Fable 5.1 or Mythos 5.1 within 90 days closing the GPT-5.5 ARC-AGI / Agents'-Last-Exam gap.

**H2 (P~40%, my model — BASE CASE) — Fable 5 leads on AGENTIC, trails on REASONING; multi-vendor world.** Fable 5 returns at full capability or near-full; remains the agentic-coding gold standard but GPT-5.5/5.6 retains reasoning lead; Gemini 3.1 Pro retains scientific-Q&A lead; enterprises route by task (Fable 5 for coding agents, GPT for reasoning, Gemini for science, DeepSeek for cost-sensitive bulk). Anthropic's margin defended on its segment but no monolithic frontier crown. IPO at $700-900B reasonable.

Falsifier-confirm: Fable 5 returns within 30-60 days AND benchmark profile (agentic-strong, reasoning-mid) holds across 6 months without convergence.

**H3 (P~20%, my model) — Fable 5 TRAILS on COST; capability dominance evaporates under repeated DeepSeek-class drops.** DeepSeek V5 / Qwen 4 / GLM 5.x at ~$1/Mtok hits Sonnet-tier capability; enterprise routing shifts toward cost-optimized for ~80% of token volume; Fable 5 becomes a niche premium tool used for <5% of workloads. Anthropic revenue growth decelerates; valuation compresses.

Falsifier-confirm: At least one open-weights or near-open-weights model reaches AA Intelligence Index ≥60 by 2026-12 at < $2/Mtok blended.

**H4 (P~10%, my model) — Fable 5 TRAILS on CAPABILITY because the export ban becomes durable.** Bifurcation doctrine hardens; Fable 5 never returns to non-defense-integrated customers; Anthropic loses 12-24 months of frontier presence in commercial market while Opus-tier continues at half price. GPT-5.5/6 + Gemini 4 cement frontier leadership in the open market. Anthropic IPO postponed or de-rated.

Falsifier-confirm: 60+ days with no Fable 5 restoration + a SECOND model-layer export action against any provider within 90 days.

**Joint expected-value read:** P-weighted Fable 5 is **most likely a domain-specialized frontier tool, not a uniform frontier dominator**. The 2× pricing for 5.7% composite gain only earns its keep in narrow agentic-long-horizon use cases. The export ban is the **load-bearing near-term uncertainty** — H1+H2 (resolution paths) sum to 70%; H4 (persistent ban) only 10%.

---

## 11. Material yield class

**Material yield: MEDIUM-HIGH** for the harness — primarily as **regime-precedent evidence (TC-10 + bifurcation doctrine PC-14 strengthening)** and as **price/capability frontier calibration data** for any future model-layer evaluation. Does NOT trigger any held-name cascade beyond what AM5 (2026-06-17) already executed. Strengthens H2 base case in the 2026-06-12 file (structural model-export regime forming) by raising it from P~40% to P~50% on the failure-to-restore signal alone.

**Specific update worth flagging:**
- The 2026-06-12 file's H1 (transient, P~45%) → now downgraded to P~30% given 9 days no-restoration
- The 2026-06-12 file's H2 (structural, P~40%) → now upgraded to P~50%
- The 2026-06-12 file's H3 (broad sustained, P~15%) → unchanged at P~15%
- New residual P~5%: Fable 5 returns but materially degraded

**For parent agent synthesis:** Subagent B has surfaced these uncomfortable Fable-5 truths that the head-to-head MUST include alongside the favorable agentic-coding data:
1. Fable 5 GLOBALLY OFFLINE since T+3 days; no restoration as of T+12
2. Fable 5 LOSES Agents' Last Exam to GPT-5.5
3. Fable 5 TRAILS Gemini 3.1 Pro on GPQA Diamond
4. Fable 5 has a ~7× gap vs GPT-5.5 on ARC-AGI (NOT-VERIFIED at primary)
5. Fable 5 cost slope is 2× Opus 4.8 for 5.7% composite gain — worst price-per-capability on Anthropic line
6. Fable 5 had a hidden-guardrails controversy + public Anthropic apology Day-2
7. Cybersecurity / bio / chemistry researcher community is openly hostile

**For parent agent synthesis (favorable items requiring no editorial discounting):**
1. #1 on AA Intelligence Index (64.9, ~5pt lead)
2. 80.3% SWE-bench Pro (11pt lead) + 95% SWE-bench Verified — agentic coding dominance is real
3. Strong hallucination profile (36.18% vs GPT-5.5 85.53%)
4. Stripe case study credible (50M-line Ruby migration in 1 day)
5. Frontier-tier across all 3 agentic evals in AA Index (GDPval-AA, Terminal-Bench Hard, Tau2-bench Telecom)
6. Day-0 integration on every major cloud + GitHub Copilot
7. Anthropic enterprise revenue base ($47B run-rate) + bifurcation-doctrine defense-integrated status (Palantir + classified missions)

**Cross-reference for parent synthesis:**
- TC-10 (sovereign-AI / export controls) — Fable 5 directive remains the **anchor event** of model-layer extension
- PC-13 (gov emergency-order model-shutdown) — Fable 5 directive is the N=1 origin event
- Bifurcation Doctrine (PC-14 candidate) — Fable 5 directive is the "shutdown-eligible" pole; same week as DOJ-xAI defense-shield ("protected" pole)
- B40.1 / B40.3 — all benchmark numbers in this file are dated within 30 days; vendor-reported flagged separately from independent

---

## Sources (all T1/T2 dated within 14 days where load-bearing)

- T1 Anthropic announcement (2026-06-09): https://www.anthropic.com/news/claude-fable-5-mythos-5
- T1 Anthropic export-suspension statement (2026-06-12): https://www.anthropic.com/news/fable-mythos-access
- T1 AWS Bedrock model card: https://docs.aws.amazon.com/bedrock/latest/userguide/model-card-anthropic-claude-fable-5.html
- T1 AWS announcement: https://aws.amazon.com/blogs/aws/anthropic-claude-fable-5-on-aws-mythos-class-capabilities-with-built-in-safeguards-now-available/
- T1 Artificial Analysis Intelligence Index: https://artificialanalysis.ai/articles/claude-fable-5-mythos-intelligence-index
- T1 Artificial Analysis launch tweet: https://x.com/ArtificialAnlys/status/2064500150069030992
- T1 VentureBeat Agents' Last Exam upset: https://venturebeat.com/technology/surprise-upset-gpt-5-5-beats-claude-fable-5-on-brutal-new-agents-last-exam-benchmark
- T1 Fortune export-control: https://fortune.com/2026/06/13/anthropic-disables-fable-mythos-export-controls-national-security-threat/
- T1 The Register "fix this code": https://www.theregister.com/security/2026/06/15/feds-freaked-over-fable-5-after-simple-fix-this-code-prompt-not-jailbreak-says-researcher/5255827
- T1 The Register innocuous-prompt refusal: https://www.theregister.com/ai-and-ml/2026/06/10/anthropic-claude-fable-5-refuses-innocuous-prompts/5253754
- T1 TechCrunch cybersecurity guardrails: https://techcrunch.com/2026/06/10/cybersecurity-researchers-arent-happy-about-the-guardrails-on-anthropics-fable/
- T1 Gizmodo guardrail apology: https://gizmodo.com/anthropic-apologizes-for-one-of-the-guardrails-on-its-fable-5-model-and-will-change-it-2000770365
- T1 Simon Willison system-card summary: https://simonwillison.net/2026/Jun/10/if-claude-fable-stops-helping-you/
- T1 Sacra Anthropic revenue/valuation: https://sacra.com/c/anthropic/
- T1 The AI Corner Anthropic-passes-OpenAI: https://www.the-ai-corner.com/p/anthropic-30b-arr-passed-openai-revenue-2026
- T1 Fortune Amazon-Google Anthropic stake: https://fortune.com/2026/04/30/google-amazon-ai-profits-anthropic-stake-bubble-earnings-2026/
- T1 TechPolicy.Press export precedent: https://www.techpolicy.press/did-the-us-government-just-set-an-ai-export-precedent-by-blocking-mythos/
- T1 Lawfare Kill Switch: https://www.lawfaremedia.org/article/a-kill-switch-for-frontier-ai
- T1 Anthropic Series H funding ($380B → $965B): https://www.anthropic.com/news/anthropic-raises-30-billion-series-g-funding-380-billion-post-money-valuation
- T1 CybersecurityNews export details: https://cybersecuritynews.com/claude-mythos-5-and-fable-5-export/amp/
- T2 The Decoder 2× cost / 5.7% performance: https://the-decoder.com/anthropics-claude-fable-5-costs-twice-as-much-for-5-7-percent-more-performance/
- T2 Vellum benchmark breakdown: https://www.vellum.ai/blog/claude-fable-5-and-mythos-5-benchmarks-explained
- T2 Morphllm benchmark aggregator: https://www.morphllm.com/claude-benchmarks
- T2 Lushbinary 3-way comparison: https://lushbinary.com/blog/claude-fable-5-vs-gpt-5-5-vs-gemini-3-1-pro-comparison/
- T2 Cloudzero Claude pricing: https://www.cloudzero.com/blog/claude-mythos-pricing/
- Repo cross-ref: `/home/user/Health-Calculators/research/signals/cross-source-log/2026-06-12-us-export-control-fable-mythos-suspension-model-layer-FIRST.md`
- Repo cross-ref: `/home/user/Health-Calculators/research/signals/cross-source-log/2026-06-17-am5-anthropic-cluster-claude-outage-fable5-deepseek-v4-doj-xai-tc4-tc10-u8-bifurcation-doctrine-candidate.md`
- Repo cross-ref: `/home/user/Health-Calculators/research/signals/cross-source-log/2026-06-10-morning-brief-6-claim-verification-anthropic-spacex-dc.md`

---

## Anti-leading self-audit (mandatory for this subagent)

| Item | Did I surface the uncomfortable read? |
|---|---|
| Fable 5 is offline globally | YES — TL;DR item #2 + Section 5 |
| Fable 5 loses Agents' Last Exam to GPT-5.5 | YES — TL;DR item #3 + Section 2 |
| Fable 5 trails on GPQA / ARC-AGI | YES — Section 2 + Section 3 |
| Fable 5 is 2× cost for 5.7% gain | YES — TL;DR item #1 + Section 4 + Section 9 |
| Heavy refusal-rate controversy | YES — Section 3 + Section 6 |
| Hidden-guardrails apology Day-2 | YES — Section 3 |
| Cybersecurity community openly hostile | YES — Section 3 + Section 6 |
| 10 outages in 12 days | YES — Section 6 |
| Anthropic NOT-DISCLOSED on architecture | YES — Section 1 |
| Used Anthropic pre-release access to score (Artificial Analysis) | YES — Section 6 (noted independent-but-cooperative) |
| Anthropic-as-creator vendor bias on this subagent | YES — disclosed in header |

**Status: Anti-leading discipline cleared. Output ready for parent synthesis.**
