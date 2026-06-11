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
