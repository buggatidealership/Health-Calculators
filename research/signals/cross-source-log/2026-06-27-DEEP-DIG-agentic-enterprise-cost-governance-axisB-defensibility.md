# DEEP-DIG — Agentic-Enterprise Cost-Governance + Axis B Defensibility — 2026-06-27

**Trigger:** User deep-dive request (3 questions: how does Microsoft do cost-governance natively; how does Claude/Anthropic; what is the agentic-enterprise usage distribution). 3 Opus 4.8 subagents, strict anti-fabrication mandate (user emphasized numerical accuracy). Resolves the T5 Axis B (efficiency/cost) defensibility question for any DDOG/NOW re-entry. Today 2026-06-27.

**Verdict: the cost-governance market TRIFURCATES; provider-native is structurally own-stack-only (durable conflict-of-interest moat for the neutral layer); but DDOG owns only the OBSERVABILITY slice (Layer 2), NOT the high-value ENFORCEMENT/ROUTING (Layer 3), which is consolidating into SECURITY platforms (Portkey→Palo Alto Apr 2026). Axis B is real + provider-proof but only PARTIALLY captured by DDOG/NOW.**

---

## THE TRIFURCATION
| Layer | Function | Owner | Defensibility |
|---|---|---|---|
| 1. Provider-native | own-stack metering/caps + prompt-cache/batch | Anthropic/OpenAI/MSFT | table stakes; blind cross-vendor |
| 2. Cross-vendor OBSERVABILITY | one-pane cost visibility (800+ models) | **DDOG LLM Obs**, FinOps tools | YES (providers can't — conflict of interest) |
| 3. Cross-vendor ENFORCEMENT/ROUTING | route-to-cheapest + semantic caching + hard caps (50-80% savings) | LiteLLM/Portkey/Kong/TrueFoundry (gateways) | YES but consolidating to SECURITY (Portkey→PANW) |

## Q1 — MICROSOFT NATIVE (research-verified, T1 MSFT docs)
GA + shipping fast: Copilot Control System (GA); Cost Management tenant/group spending limits (GA ~Jun'26; user-level caps still "planned"); GitHub Copilot usage-based billing (Jun 1); Copilot Cowork metered (Jun 16, $0.01/credit); Azure AI Foundry per-agent token tracking (GA Apr'26) + Model Router (routes to cheapest IN-CATALOG). **STRUCTURAL WALL: governs ONLY the Azure/M365 perimeter.** Gemini-Pro NOT in Foundry; OpenAI-direct NOT; Anthropic-direct NOT; self-hosted (AWS/GCP/on-prem) invisible. NO native hard kill-switch at Azure OpenAI level (documented) = consistent with token-seller incentive.

## Q2 — ANTHROPIC / OPENAI NATIVE (research-verified, T1 provider docs)
- Anthropic: Usage/Cost Admin API (1-min granularity, GA); Enterprise Analytics API (per-user attribution, GA Mar'26); **per-user monthly spend caps in Claude Code workspace (GA)**; prompt caching (cache reads 0.1x = 90% off) + Batch API (50% off). Claude-tokens-only; Bedrock-routed Claude blind to Anthropic's own Analytics API.
- OpenAI: ChatGPT Enterprise spend controls (group+individual hard caps, GA Jun-18'26); API platform = SOFT caps only (removed hard caps); prompt cache + batch.
- NEITHER routes to a cheaper competitor; NO cross-vendor view. Providers help you spend responsibly ON THEIR platform only.

## Q3 — AGENTIC-ENTERPRISE USAGE DISTRIBUTION (anti-fab; gaps flagged)
- **McKinsey T1:** 88% orgs use AI ≥1 function; 23% scaling agentic ≥1 function; <10% scaled in any single function; 39% report measurable EBIT effect.
- **Engineering/coding = dominant token consumer** (all documented blowouts: Uber $1,500/mo cap, MSFT E+D org ~$2k/eng/mo → off Claude Code by Jun 30). Qualitative consensus; **NO HARD % split by function (genuine data gap, subagent flagged not invented).**
- **Power-law (LayerX T2):** 18% weekly-active; top-5% = 144+ conversations vs median ≤12; 9:1 prompts ratio; 47% on unmanaged personal accounts (shadow AI); seat shelfware ~20-36% activation.
- **Abandonment (Gartner T1):** predicted 30% PoC abandonment → actual ~50%; **>40% agentic projects canceled by end-2027**; <1% report >20% ROI; only ~130 "real" agentic vendors (not agent-washing).
- **Token-depth (T3 flagged):** agentic 10-100x chat; agentic-coding overnight ~5,000x single chat (illustrative only).
- **Waste:** 40-60% of production-LLM token budgets = "pure waste" (redundant calls/no caching) → the optimization rent that Layer 3 captures.

## CONFLICT OF INTEREST (the crux — confirmed structural)
Blended AI cost −67% YoY ($18.40→$6.07/M tokens) yet 73% enterprises over budget; FinOps "calling in April 3x over full-year token budgets." MSFT removed Azure OpenAI hard kill-switch; OpenAI removed API hard caps. Providers offer cost tools that retain you on-platform; never route to competitors. = durable moat for the NEUTRAL layer (gateways + observability).

## INDEPENDENT LAYER ADOPTION (real)
LLM-gateway market 49.6% CAGR; ~42% enterprises on middleware (estimate); Gartner 70% of multi-model eng teams on AI gateways by 2028. Players: LiteLLM (OSS, 100+ providers; Mar'26 supply-chain attack), **Portkey (ACQUIRED by Palo Alto Networks Apr-30 2026 → Prisma AIRS)**, Cloudflare AI Gateway (NET), Kong, TrueFoundry, **Datadog LLM Observability (800+ models, $8/10k requests, Q1'26 "first quarter materially contributing to billings")**. Datadog = OBSERVABILITY not enforcement.

## RE-RATED HYPOTHESES (my model)
- H1 SPLIT (native=single-vendor, independent=cross-vendor): 40%→**55%** (confirmed).
- H2 platform-native commoditizes independent: 35%→**20%** (can't — conflict + perimeter wall).
- H3 independent wins outright: **25%** (cross-vendor moat real but native owns single-vendor majority).

## REFINED AXIS B VERDICT (B46 self-refinement of "less-defensible")
Axis B is REAL + PROVIDER-PROOF (conflict of interest = durable moat) — BUT for DDOG/NOW specifically it is PARTIAL capture: DDOG owns Layer-2 visibility (smaller slice); Layer-3 enforcement/optimization (the 50-80%-savings rent) accrues to gateways + increasingly SECURITY platforms (Portkey→PANW). NOW barely in Layer 2/3 (strength = Axis A workflow governance). **Earlier "less-defensible" take was directionally right but the mechanism is "the richest part of Axis B isn't DDOG/NOW's to own," NOT "MSFT eats it."**

## NEW COMPETITIVE-THREAT FLAG
AI-cost-governance + AI-SECURITY are MERGING (Portkey→Palo Alto/Prisma AIRS) — validating the T5 two-axis convergence BUT suggesting the consolidation may accrue to SECURITY incumbents (PANW, CRWD) more than observability (DDOG) or workflow (NOW). Watch PANW/CRWD AI-gateway positioning as a competitive vector to the DDOG/NOW Axis-B re-entry.

## CASCADE
- T5: Axis B refined (trifurcation; DDOG=Layer-2-only; security-platform consolidation threat).
- DDOG thesis (watchlist-ref): Axis B = observability-slice-only; Q1'26 LLM Obs contributing (re-entry positive) BUT enforcement rent accrues elsewhere.
- NOW thesis (watchlist-ref): Axis B minimal; re-entry case rests on Axis A.
- watchlist: PANW (Portkey/Prisma AIRS — AI-gateway-via-security consolidator), NET (Cloudflare AI Gateway) — NEW competitive/investable surface; gateways mostly private.
- ledger: 3-fire DEEP-DIG.

## TOP DATA GAPS (anti-fab honesty)
(1) No published % token-spend split by function; (2) no verified coding-share-of-total-agentic-spend; (3) "$500M accidental bill" + "88% never reach production" + "171% ROI" all uncorroborated/vendor-sourced — flagged not used; (4) gateway-adoption % = estimates not T1.
