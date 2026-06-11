# 2026-06-11 — June 10 evening brief triage (B40 N=9: Google-Intel TPU recycle) — verifications IN FLIGHT

**Workflow:** INGEST. Brief shared by user 2026-06-11 (June 10 evening edition). 3 verification subagents launched; this file logs the triage state and will be UPDATED with verified findings before cascade.

## Instant staleness catches (no compute spent)

1. **"Google books Intel for 3M+ TPU packaging in 2028" (Tom's Hardware) — STALE, B40 N=9.** Identical signal verified at T1 on June 8 (`2026-06-08-google-intel-tpu-6m-verification.md`) and already cascaded to HYNIX thesis (~36M HBM stacks pull math). Tom's Hardware re-reporting a 2-day-old signal. The "SK hynix conducting testing" detail matches the original coverage. NO new cascade.
2. **Fable 5 guardrails — THIRD consecutive brief carrying this story.** Tonight's "refuses basic biology and cybersecurity queries" framing CONTRADICTS the T1-verified mechanism (2026-06-10 log: system card — flagged requests reroute to Opus 4.8, interventions invisible at runtime, ~0.03% of traffic). ONE genuinely new claim inside: "Microsoft has restricted internal employee access due to new data retention requirements" — under verification (subagent C).

## Brief claims under verification (3 subagents, results pending)

| Claim (brief wording, unverified) | Source tier as given | Verification focus |
|---|---|---|
| "China announces $295B AI infrastructure buildout" (brief's figure, unverified) | Bloomberg (T1 if real) | NEW central commitment vs re-aggregation of 东数西算/provincial programs; native-zh; memory-balance direction (CXMT/YMTC absorption) |
| "DeepSeek-V4 FlashMemory / Lookahead Sparse Attention / Neural Memory Indexer" | Reddit (T3) | Real V4 feature vs recycled NSA-paper (Feb 2025) coverage; KV offload destination (DRAM/NVMe = SNDK-positive tiering vs footprint reduction = HBM-softening); falsifier-adjacent for memory cohort |
| "Microsoft restricted internal employee access [to Mythos-class] due to data retention requirements" | TechCrunch/Verge (T2) | Competitor-positioning vs enterprise-customer-balking; evidence for H2 enterprise-trust-tax (P~30% prior per `2026-06-10-morning-brief-6-claim-verification-anthropic-spacex-dc.md`, my model) |
| "Ramp AI Index: most aggressive adopters approaching $7,500/month per employee" (brief's figure, unverified) | TechCrunch (T2) | Definition of cohort; median vs tail; feeds T8 AI-FinOps theme |
| "Amazon borrows $17.5B from banks following bond sale" (brief's figure, unverified) | TechCrunch (T2) | Term/purpose; stacks on Mag7 debt-funded-capex thread (June 6 verification: FCF lowest since 2014) |
| "AMD 256-core Zen 6 Venice 3.3x rack-level vs NVDA Vera" (brief's figure, unverified) | Tom's Hardware (T2) | Vendor benchmark — metric + basis; minor ARM-adjacent relevance |

## Logged without verification (watch-tier)

- **Samsung Heavy Industries + Supermicro 50MW floating DCs (LNG fuel cells) + Japan MOL 73MW floating DC scheduled 2027** (brief figures, T2 Tom's Hardware unverified) — NEW bypass-route instance for the DC-ceiling narrative: siting friction → ocean platforms. Joins GM V2G + EM-migration (Reliance/AirTrunk) in the hyperscaler-workaround family. The DC-ceiling bypass-route inventory now spans: EM-siting, densification, behind-the-meter power, V2G, orbital (SpaceX Gigasat, IPO-marketing discount applied), and floating. Non-consensus beneficiaries if floating scales: shipbuilders (Samsung Heavy, MOL ecosystem) + fuel-cell makers (Bloom-class) — watch-only, no cohort entry.
- Skipped (no thesis hook): DiffusionGemma, Cohere North Mini Code (2nd appearance), Stack Overflow for Agents, Claude Desktop VM bug, Brad Smith essay, Lyria lawsuit, research items. The memory-sycophancy paper noted as harness-design color only.

## Pre-registered joint-state hypothesis (to test when verifications land)

**"AI capex outrunning internally-generated cash, globally"** — if BOTH the China state-financed buildout AND the Amazon bank loan verify, tonight extends the compound macro thread from both ends: Mag7 debt-funding (June 6 verification, FCF lowest since 2014) + SoftBank collateral stall (June 10) + sovereign-scale state financing (China) + fresh bank debt (AMZN). Implication for held memory cohort: demand durability increasingly depends on CREDIT conditions and STATE budgets, not just hyperscaler P&Ls — a regime note for where-we-are.md if confirmed. (my model, pre-registered before verification — grade against subagent results.)

## VERIFIED FINDING 1/3 — China buildout: VERIFIED-WITH-CAVEATS (subagent returned 2026-06-11)

**"Announces" overstates — it's a DRAFT NDRC blueprint, and partially a formalization of existing programs.**
- **Fresh: PASS.** Bloomberg primary June 9, 2026 (T1): ["China Prepares $295 Billion Plan to Fund Nationwide AI Buildout"](https://www.bloomberg.com/news/articles/2026-06-09/china-prepares-295-billion-plan-to-fund-nationwide-ai-buildout) — verb is *prepares*; NDRC drafting, "early discussions, details could change."
- **Decomposition:** ~¥2T over FIVE years (T2 Yahoo/Bloomberg syndication); execution via SOE capex (China Mobile/Telecom operate most DCs); grid integration could lift total to ≥¥5T. Native-zh shows the ¥2T matches the 全国一体化算力网 line in the 十五五 109 major projects (T1 [nda.gov.cn](https://www.nda.gov.cn/sjj/swdt/mtsy/0430/20260430114558848516126_pc.html); T3 [eastmoney: 一体化算力网 ¥2T + 东数西算扩容 ¥1.2T + 算电协同 ¥2.25T](https://caifuhao.eastmoney.com/news/20260416192132118314310)). **Evolution of 东数西算 / March NPC 超大规模智算集群 language** (T1 [ndrc.gov.cn](https://www.ndrc.gov.cn/wsdwhfz/202603/t20260313_1404128.html)) — NOT incremental-on-top of prior figures.
- **Hardware framing: explicitly domestic** — Huawei Ascend/Cambricon compute → CXMT/YMTC memory absorption → **direction: TIGHTENS global memory balance** (supportive for held HYNIX/SNDK; hedged: 5-yr phasing, draft-stage).
- **Pincer confirmation:** with the June 9 Taiwan export-criminalization item (also draft-stage), the pattern reads as Beijing pre-funding domestic compute as smuggling channels close — confirms the gray-market-pressure thesis from the June 10 triage.
- **Pre-registered joint-state hypothesis: leg 1 CONFIRMS** (state-financed, SOE-executed = capex moving off corporate P&Ls). Awaiting AMZN-loan leg.

## VERIFIED FINDING 2/3 — Anthropic-trust + capex cluster: ALL THREE VERIFIED (subagent returned 2026-06-11)

**MSFT-Claude restriction — VERIFIED, the meaningful version (customer-balking):**
- Scope: **Fable 5 only**, removed from internal GitHub Copilot model picker; other Claude models remain under ZDR agreements — **which the Mythos-class policy explicitly OVERRIDES** (T1 [Anthropic Help Center](https://support.claude.com/en/articles/15425996-data-retention-practices-for-mythos-class-models): 30-day retention every platform, **up to 2 years if classifier-flagged**). Reason stated = retention requirement; MSFT legal "evaluating" (T2 [Verge via Reuters/USNews](https://money.usnews.com/investing/news/articles/2026-06-10/microsoft-limits-employee-use-of-anthropics-claude-fable-5-over-data-retention-concerns-the-verge-reports)).
- The tell: MSFT simultaneously SELLS Fable 5 to customers via Foundry (T1 [Azure blog](https://azure.microsoft.com/en-us/blog/claude-fable-5-available-today-in-microsoft-foundry-powering-the-next-era-of-autonomous-agents/)) — customer-balking, not Copilot-first positioning.
- Refusal reports: credible-not-amplification — named researchers (immunologist Derya Unutmaz/Jackson Lab "cancer"-flagged; Guillaume Verdon) + **Anthropic ACKNOWLEDGED safeguards too stringent** (T2 [The Register](https://www.theregister.com/ai-and-ml/2026/06/10/anthropic-claude-fable-5-refuses-innocuous-prompts/5253754)). Mechanism remains reroute-to-Opus-4.8, but false-positive rate is a real product issue.
- **H2 (enterprise-trust-tax) updated: P~30% → P~45% (my model, Bayesian: 2nd-hyperscaler institutional reaction + acknowledged false positives + ZDR-override detail).** Next threshold: 3rd named enterprise → H2 dominant (P~60%+, my model, directional). Cascaded to private-tracker.

**Ramp AI Index — VERIFIED with the definition that changes the story (T1 [Ramp](https://ramp.com/data/ai-index), card-spend May 2026):** top 1% "AI-pilled" = $7,500/employee/mo (+14.1% MoM); **top 10% = $611; MEDIAN = $11.38**. Brief quoted the 1% tail as representative. The ~660x tail-to-median spread (derived) IS the T8 datapoint: enterprise AI spend extraordinarily concentrated → FinOps-exhaustion thesis applies to a narrow cohort today, long diffusion runway behind it. Cascaded to themes.md T8.

**Amazon $17.5B — VERIFIED, thread extends (T2 [Bloomberg](https://www.bloomberg.com/news/articles/2026-06-10/amazon-inks-17-5-billion-loan-in-financing-led-by-citigroup)):** unsecured delayed-draw term loan, Citi-led, SOFR+62.5–87.5bp, drawable through end-September, 3-yr tenor per draw. Stack: C$14B record Canadian bond (June 8) + $15B US bond (Nov 2025) → **~$42–43B fresh debt in ~7 months vs ~$200B 2026 capex**. Confirms June 6 Mag7 debt-funded-capex verification. **Joint hypothesis leg 2 CONFIRMS.**

## VERIFIED FINDING 3/3 — DeepSeek "FlashMemory" + AMD Venice (subagent returned 2026-06-11)

**DeepSeek item: REAL but Reddit-GARBLED attribution — and NOT a memory-thesis falsifier:**
- **FlashMemory is NOT a DeepSeek-V4 feature.** It's a June 2026 **third-party paper** ([arXiv 2606.09079](https://arxiv.org/abs/2606.09079)) — Tencent AI Lab (Haitao Mi/Dong Yu) + Tsinghua authors, no DeepSeek affiliation; community GitHub repo name caused the conflation. V4 itself is real (preview Apr 24, 2026: Pro 1.6T/49B-active, Flash 284B/13B-active, 1M context — T1 [DeepSeek API docs](https://api-docs.deepseek.com/news/news260424)).
- **Mechanism = KV TIERING, not footprint reduction:** Neural Memory Indexer keeps ~10-15% of KV resident on GPU (~13% of baseline GPU memory at matching quality), swap engine offloads the rest to **host DRAM**. No NVMe/storage tier in the public release; swap engine itself unreleased "internal infrastructure."
- **Memory-cohort direction:** HYNIX-MIXED (less HBM working set per session, MORE commodity DRAM — and Hynix sells both); SNDK-NEUTRAL today (no storage tier) with a defined upgrade trigger: **if the swap engine ships with an NVMe tier → SNDK-additive** (watch item).
- **Falsifier test: treadmill pattern HOLDS** — MLA(2024)→DSA→CSA each cut KV ~10x while context grew 128K→1M (8x) and agent session counts multiplied; per-token savings swallowed by longer-context serving (the paper's explicit goal is ENABLING ultra-long-context serving — classic Jevons). Native-zh: V4 already cut KV to ~10% of V3.2 at 1M context via CSA+HCA (T2 [知乎技术报告解读](https://zhuanlan.zhihu.com/p/2031132960632599659), [华尔街见闻](https://wallstreetcn.com/articles/3770782)). **NOT a thesis-breaker for HYNIX/SNDK.**

**AMD Venice "3.3x vs Vera": VERIFIED but doubly-modeled vendor estimate** — 6 general-purpose workloads per 100kW rack, marketed as "agentic AI" but it's general compute; AMD never tested Vera (Grace × 1.63 scaling) and Venice itself is estimated (Turin × 1.7); AMD's own term: "directional comparison" (T2 [Tom's](https://www.tomshardware.com/pc-components/cpus/amd-fires-back-at-nvidia-claiming-256-core-zen-6-venice-cpu-beats-vera-by-3-3x-in-rack-level-performance-company-shares-first-estimated-epyc-venice-benchmarks), [AMD blog](https://www.amd.com/en/blogs/2026/agentic-ai-needs-rack-scale-cpu-performance-amd-epyc.html)). Venice 2nm ramp underway, 2026 launch on track. Full vendor discount; minor ARM-adjacent datapoint only — no cascade.

## FINAL CASCADE (executed this commit)
- `companies/HYNIX/thesis.md` — back-ref: DeepSeek tiering = mixed (HBM working-set softening vs commodity-DRAM lift, Hynix sells both); China draft buildout tightens balance via CXMT absorption; treadmill holds. HOLD.
- `companies/SNDK/thesis.md` — back-ref: no storage tier in FlashMemory release; defined watch trigger (NVMe tier ships = additive); China NAND absorption supportive. HOLD.
- `meta/private-tracker.md` Anthropic — MSFT restriction verified; H2 30→45% (my model); retention details (ZDR override, 2-yr flagged).
- `sector/themes.md` T8 — Ramp datapoint with median-vs-tail definitions.
- `sector/where-we-are.md` — NEW non-default read #6: AI-capex-credit regime (both joint-hypothesis legs confirmed).
- B40 N=9 stands (Google-Intel recycle). New garble-type noted: ATTRIBUTION-garbling (Reddit conflating third-party paper with model vendor) — distinct from staleness; 2026-06-24 audit item.
