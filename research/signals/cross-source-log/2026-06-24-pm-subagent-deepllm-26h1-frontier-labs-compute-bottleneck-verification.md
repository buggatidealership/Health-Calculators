# Cross-Source Verification Log
# Deep|LLM 26H1 Part 2 — Frontier Labs, Chinese Model Vendors & Compute Bottleneck
# Session: 2026-06-24 PM (T-65 min to MU print)
# Workflow: INGEST + TRIANGULATE

verification_date: 2026-06-24
source_report: fundaai.substack.com/p/deepllm-26h1-update-part-2-frontier
report_published: 2026-06-24 (same-day; ~4 hours before verification)
temporal_freshness: SAME-DAY — B40.x PASS

---

## ITEM 1 — NBIS H100 PAYG Pricing: $2.95 → $3.85/hr (June 1 2026)

CLAIM: Nebius raised PAYG H100 from $2.95/hr to $3.85/hr effective June 1 2026 (~+30%)

VERDICT: HIGH CONFIDENCE — CONFIRMED ON RECORD

ARITHMETIC NOTE: $3.85 / $2.95 = +30.5% on-demand; preemptible +51%
REPORT SAYS "~30%" — accurate for on-demand; slight understatement vs preemptible

PRIMARY SOURCES:
- Nebius official pricing page: nebius.com/prices (reflects $3.85 post-June 1)
- Nebius docs pricing page confirms update effective June 1 2026
- Barchart: "Nebius raising prices for its cloud effective June 1 — on-demand H100 to $3.85/hr from $2.95 (+29%); preemptible GPU capacity jumped steeper 51%"
- Hike does NOT apply to existing locked-in customers

SAME-SEGMENT TRIANGULATION (other neoclouds same period):
- Lambda Labs: H100 at $2.99/hr — did NOT raise prices; positioned as low-cost alternative
- CoreWeave: H100 HGX node ~$6.16/GPU-hr — was already higher-end enterprise pricing
- Broader market (PAYG on-demand across platforms): avg moved from ~$3.46 to ~$3.58/hr (~3% market-wide since June 2025)
- CONCLUSION: Nebius increase was UNILATERAL and aggressive vs peers — demand-confidence signal, not market-wide repricing

NBIS THESIS IMPLICATION:
- PAYG +30% is a direct pricing-power validation
- Preemptible +51% signals Nebius is repositioning away from spot-market discounting
- Not applying increase to existing customers = retention play; new-customer margin expansion
- Strongest near-term thesis-amplifying data point for NBIS 10.8% Active: CONFIRMED

---

## ITEM 2 — H100 One-Year Lease Rate Rebound +40% Since October 2025

CLAIM: H100 1-year lease rates rebounded 40% from October 2025 baseline

VERDICT: HIGH CONFIDENCE — CONFIRMED; SOURCE IS SEMIANALYSIS (primary industry tracker)

DATA POINTS:
- October 2025 trough: $1.70/hr/GPU (1-year contract)
- March 2026 level: $2.35/hr/GPU
- Arithmetic: ($2.35 - $1.70) / $1.70 = +38.2% — report rounds to "nearly 40%" — ACCURATE

PRIMARY SOURCES:
- SemiAnalysis H100 1-Year Rental Price Index (newsletter.semianalysis.com/p/the-great-gpu-shortage-rental-capacity)
- Seeking Alpha citing SemiAnalysis: "H100 GPU rental prices surge nearly 40% in 6 months"
- iTiger citing same SemiAnalysis data
- Intellectia.ai: "Nvidia H100 GPU Rental Prices Surge 40% Amid Strong Demand"
- Kavout market lens: "Why are NVIDIA H100 GPU rental prices surging by 40%"

CONTEXT:
- H100 1-yr rates had collapsed from ~$8/hr peak (2023) to $1.70/hr trough (Oct 2025)
- Rebound driven by: open-weight model inference demand; agentic compute; media generation
- Blackwell ramp did NOT suppress H100 demand — contra prior consensus
- Nvidia CFO confirmed H100 rental prices up ~20% YTD (broader on-demand category)

HBM CYCLE-EXTENSION READ FOR MU TONIGHT:
- H100 lease rebound = supply-demand tightening at compute-customer layer
- Customer unwilling to return on-demand instances signals utilization commitment
- LOAD-BEARING POSITIVE for MU HBM commentary: sold-out 2026 narrative supported
- Leading indicator strength: HIGH — SemiAnalysis is cited primary tracker, not secondary aggregator

---

## ITEM 3 — Anthropic ARR: $1B end-2024 → $47B+ by May 2026

CLAIM: Anthropic ARR $1B end-2024 rising to $47B+ by May 2026

VERDICT: HIGH CONFIDENCE — $47B figure CONFIRMED via Anthropic official statement; $1B end-2024 baseline NOT directly verified (report states "end-2024" but evidence shows ~$9B end-2025)

NOTE ON BASELINE DISCREPANCY:
- Report: "$1B at end-2024" — this appears to be the earlier 2024 run-rate
- All sources confirm $9B end-2025 (not $47B start / $1B end-2024 → $47B May 2026)
- Probable interpretation: $1B was early-2024 or mid-2024 ARR; $9B was December 2025; $47B is May 2026
- The 47x multiple as stated in report requires the $1B = early-to-mid-2024 baseline — PLAUSIBLE but unverified at that precision
- The $47B itself is CONFIRMED PRIMARY SOURCE: Anthropic's own Series H announcement and X post

TRAJECTORY (confirmed):
- ~$1B: estimated mid-2024 (implied, not directly sourced)
- $9B: December 2025 (multiple sources)
- $14B: February 2026 (multiple sources)
- $19B: March 2026 (MindStudio)
- $30B: April 2026 (multiple sources including Anthropic Series G announcement)
- $44B: early May 2026 (MindStudio)
- $47B+: mid-May 2026 — CONFIRMED: Anthropic official X post + Series H announcement May 28

PRIMARY SOURCES:
- Anthropic official X: "our run-rate revenue crossed $47 billion"
- Anthropic Series H press release (anthropic.com/news/series-h)
- TechCrunch, VentureBeat, Simon Willison blog aggregating primary source

---

## ITEM 3a — Anthropic Enterprise Metrics

CLAIM: 300,000 enterprise customers; 1,000+ paying >$1M/yr; NDR >500%

VERDICT:
- 300,000 enterprise/business customers: HIGH CONFIDENCE — confirmed multiple sources (as of Oct 2025; no update in May 2026 announcement found)
- 1,000+ paying >$1M/yr: HIGH CONFIDENCE — confirmed via Series H announcement; doubled from 500 since February Series G
- NDR >500%: HIGH CONFIDENCE — confirmed: "net dollar retention runs above 500 percent on annualized basis" per enterprise DNA / Trefis citing Series H materials

SOURCES:
- Anthropic Series H (May 28 2026): 1,000+ customers at $1M+ annually
- 70%+ of Fortune 100 using Claude confirmed
- 300K figure: getpanto.ai citing Oct 2025 data; not refreshed in May 2026 press release

---

## ITEM 4 — OpenAI ARR ~$33B

CLAIM: OpenAI at roughly $33B ARR (The Information / public basis)

VERDICT: MEDIUM CONFIDENCE — figure is plausible but not directly sourced from a single authoritative anchor

WHAT SOURCES SAY:
- "More than $25B annualized by March 2026" (multiple aggregators)
- "$20B by mid-2026" (ValueAddVC) — appears low relative to trajectory
- "$29.4B projected for full-year 2026 total revenue" (FutureSearch)
- No primary source confirms exactly "$33B" at time of report writing

PROBABLE RECONCILIATION: $33B likely represents a late-May / June 2026 run-rate estimate, after GPT-5.5 and Codex acceleration. Consistent with trajectory from $25B (March) toward $33B+ (May-June). PLAUSIBLE but treat as analyst estimate, not confirmed primary print.

CODEX WAU CLAIM: "1M (Feb 5) → 5M (May 31)"
- Feb 5 figure: consistent with "over 2M WAU by March" — 1M in February is plausible starting point
- 5M WAU by May 31 / June: HIGH CONFIDENCE — OpenAI confirmed Codex crossed 5M WAU in June 2026 per search results; knowledge workers 20% of users growing 3x faster than developers
- 5x growth in ~4 months: CONFIRMED ORDER OF MAGNITUDE

---

## ITEM 5 — Anthropic SpaceX Colossus 1: 220K+ GPUs, 300MW+

CLAIM: Anthropic secured incremental capacity from SpaceX Colossus 1 with 220K+ NVIDIA GPUs and 300MW+

VERDICT: HIGH CONFIDENCE — CONFIRMED MULTIPLE TIER-1 SOURCES

DETAILS:
- Deal announced: May 6 2026
- Facility: Memphis, Tennessee (xAI Colossus 1 data center)
- GPU count: 220,000+ NVIDIA GPUs (includes H100, H200, GB200 accelerators)
- Power: 300 MW+
- Term: Anthropic rents ALL compute capacity at Colossus 1
- Rate: reportedly $1.25B/month (ActuIA citing French-language sources)
- Immediate effect: Anthropic doubled Claude Code 5-hour rate limits for Pro/Max/Team/Enterprise; removed peak-hour caps; raised API rate limits 2-16x for Claude Opus

PRIMARY SOURCES:
- Tom's Hardware: "Musk's SpaceX has rented out access to its supercomputer's 220,000 Nvidia GPUs and 300 megawatts of AI compute power to rival Anthropic"
- Data Center Dynamics: "Anthropic to use all of SpaceX-xAI's Colossus 1 data center compute"
- CNBC: "Anthropic, SpaceX announce compute deal"
- xAI official news: "New Compute Partnership with Anthropic"
- Anthropic official: anthropic.com/news/higher-limits-spacex

DISTINCTION COLOSSUS 1 vs COLOSSUS 2:
- Colossus 1 = THIS DEAL = existing Memphis facility = 220K+ GPUs, 300MW+ = CONFIRMED
- Colossus 2 / Reflection deal = separate future GB300 HBM3E deployment = previously verified as SpaceX $6.3B anchor

HYNIX IMPLICATION: H100/H200/GB200 at Colossus 1 = HBM2e/HBM3/HBM3e attached; Anthropic concentration at SK Hynix-supplied clusters = HYNIX demand-stickiness amplifier

---

## ITEM 6 — Chinese Model Vendors

### ByteDance Seedance 2.0

CLAIM: Global SOTA in video generation; RMB 15-20bn annualized revenue

VERDICT: MIXED

SOTA claim: HIGH CONFIDENCE
- Topped Artificial Analysis Video Arena leaderboard (Elo 1269)
- Surpassed Google Veo 3 and OpenAI Sora 2 on multiple benchmarks per vendor-reported data
- Second globally in market share behind Google Veo (market share claim tempers "global SOTA" absolute)
- 95% penetration rate in Chinese short-drama industry

REVENUE CLAIM (RMB 15-20bn annualized): MEDIUM CONFIDENCE — requires careful reading
- Seedance 2.0 monthly revenue: >RMB 1 billion (confirmed 36Kr, June 3 2026 — primary Chinese source)
- RMB 1B/month annualized = RMB 12B/year
- Volcano Engine MaaS full-year target raised to RMB 15B (from RMB 10B end-2025)
- The RMB 15-20bn figure in the report appears to be the Volcano Engine TOTAL MaaS target (not Seedance 2.0 alone)
- Seedance 2.0 = major contributor to MaaS; not the entirety of it
- "RMB 15-20bn annualized" as applied specifically to Seedance = SLIGHT OVERSTATEMENT; properly applied to Volcano Engine MaaS total = CONFIRMED

CHINESE PRIMARY SOURCE (36Kr, 2026-06-03):
36氪独家: 火山引擎提升MaaS营收目标至全年150亿元，Seedance 2.0单月营收已超10亿元
Translation: "Volcano Engine raises MaaS annual revenue target to RMB 15 billion; Seedance 2.0 monthly revenue exceeds RMB 1 billion"
Source: 36kr.com/p/3836973710423429 (confirmed by Sina Finance, QQ News, multiple aggregators)

Note: A Seedance 2.5 appears to have launched in late June 2026 for early-July release (BigGo Finance), suggesting product cadence accelerating — PC-14 N-counter reinforcement candidate.

### DeepSeek V4

CLAIM: Reset cache-hit pricing

VERDICT: HIGH CONFIDENCE — CONFIRMED with precision

- Cache-hit pricing reduced to one-tenth of launch price effective 2026-04-26 12:15 UTC
- V4 Flash cache-hit input: $0.0028/M tokens (vs $0.14 cache-miss = 98% discount)
- V4-Pro permanent price cut: 75% off made permanent on May 22 2026 (was temporary promo originally set to expire May 31)
- V4-Pro cache-miss: $0.435/M tokens; cache-hit: $0.003625/M tokens; output: $0.87/M tokens

INTERPRETATION: "reset cache-hit pricing" in report = accurate but compressed. The reset is specifically a 10x cache-hit reduction plus permanentization of the 75% V4-Pro discount. This is aggressive competition aimed at agent workflows (which heavily reuse stable prompts = high cache utilization). Commoditization of mid-tier inference = confirmed.

### GLM-5.2

CLAIM: Pushed open-source coding models closer to closed-source leaders

VERDICT: HIGH CONFIDENCE — CONFIRMED

- Released June 13 2026 by Zhipu AI (Z.ai international brand)
- MoE: ~753B total parameters; ~40B active per token
- 1M token context window; MIT license
- SWE-bench Pro: 62.1 (vendor-reported)
- AIME 2026: 99.2%
- Weights published on Hugging Face and ModelScope
- Pricing: $1.40 in / $4.40 out per MTok (API)
- Decoder: "GLM-5.2 closes in on closed-source leaders in coding marathons"
- 11 days before this verification session — fresh

PC-14 N=9+ REINFORCEMENT: GLM-5.2 release + Seedance 2.0 SOTA + DeepSeek V4 permanent discount = three simultaneous Chinese frontier deployments in May-June window = PC-14 bilateral sovereign-AI bifurcation N-counter increment confirmed.

---

## ITEM 7 — B40.x Temporal Freshness

VERDICT: PASS — all key data points are fresh

| Data Point | Lag | Freshness |
|---|---|---|
| Report published | Same-day (2026-06-24 ~4hr ago) | FRESH |
| NBIS pricing change | June 1 2026 (23-day lag) | ACCEPTABLE |
| H100 lease +40% | March 2026 data (SemiAnalysis) | ACCEPTABLE (structural trend) |
| Anthropic $47B ARR | May 28 2026 (27-day lag) | ACCEPTABLE |
| Codex 5M WAU | May 31 2026 (24-day lag) | ACCEPTABLE |
| GLM-5.2 release | June 13 2026 (11-day lag) | FRESH |
| Seedance 2.0 RMB 1B/month | June 3 2026 (21-day lag) | ACCEPTABLE |
| DeepSeek V4 permanent discount | May 22 2026 (33-day lag) | ACCEPTABLE |
| Colossus 1 deal | May 6 2026 (49-day lag) | STRUCTURAL ANCHOR |

---

## ITEM 8 — N-th Order Cohort Cascade Pre-MU

### HYNIX 20.6% Core
H100 lease +38-40% (SemiAnalysis confirmed) = customers unwilling to relinquish capacity = HBM order backlog intact = MU likely confirms HBM sold-out narrative tonight. Anthropic Colossus 1 (H100/H200/GB200) + SpaceX Reflection GB300 = two large Hynix-weighted clusters committed. HYNIX thesis: AMPLIFIED.

### NBIS 10.8% Active
PAYG +30% (on-demand) / +51% (preemptible) confirmed June 1 2026. Unilateral vs peers (Lambda not raising). Direct margin-expansion signal. Utilization tight enough to raise spot price without losing customers. LOAD-BEARING THESIS AMPLIFIER: YES.

### MRVL 8.2% Active
Codex 5M WAU confirmed (5x in ~4 months). Inference compute explosion = custom-ASIC TAM expanding. MRVL's position in custom inference silicon for hyperscalers = indirect positive. Not a direct MRVL-specific data point but demand-environment confirmation.

### MURATA / KIOXIA / SNDK / SUMCO
Indirect positive from H100 lease tightness + Chinese model vendor compute demand. DeepSeek + ByteDance driving GPU cluster buildout in China = NAND/DRAM/passive component demand (KIOXIA, SNDK, MURATA, SUMCO benefit via supply chain). No direct data points in this report for these names.

---

## CONFIDENCE SUMMARY TABLE

| Item | Claim | Confidence | Primary Source |
|---|---|---|---|
| NBIS PAYG $2.95→$3.85 June 1 | CONFIRMED | HIGH | Nebius pricing page; Barchart |
| NBIS preemptible +51% | CONFIRMED | HIGH | Nebius pricing page |
| H100 1-yr lease +40% since Oct 2025 | CONFIRMED | HIGH | SemiAnalysis via Seeking Alpha |
| Oct 2025 baseline $1.70/hr | CONFIRMED | HIGH | SemiAnalysis |
| Mar 2026 level $2.35/hr | CONFIRMED | HIGH | SemiAnalysis |
| Anthropic $47B ARR May 2026 | CONFIRMED | HIGH | Anthropic official X + Series H |
| Anthropic 1B end-2024 baseline | PLAUSIBLE / UNVERIFIED at exact date | MEDIUM | Implied trajectory only |
| Anthropic 300K enterprise customers | CONFIRMED (Oct 2025 data) | HIGH | Multiple sources |
| Anthropic 1,000+ at $1M+/yr | CONFIRMED (doubled Feb→Apr) | HIGH | Series H press release |
| Anthropic NDR >500% | CONFIRMED | HIGH | Trefis / Enterprise DNA citing Series H |
| OpenAI ARR ~$33B | PLAUSIBLE / NOT EXACTLY SOURCED | MEDIUM | Trajectory consistent; no single primary print |
| Codex 5M WAU by May-June 2026 | CONFIRMED | HIGH | OpenAI confirmed June 2026 |
| Colossus 1: 220K+ GPUs, 300MW+ | CONFIRMED | HIGH | Tom's Hardware, CNBC, xAI official |
| Colossus 1 deal date May 6 | CONFIRMED | HIGH | Multiple tier-1 |
| Seedance 2.0 SOTA video gen | CONFIRMED (per AI Arena leaderboard) | HIGH | Artificial Analysis Video Arena |
| Seedance 2.0 RMB 15-20bn | PARTIAL — applies to Volcano Engine MaaS total, not Seedance alone | MEDIUM | 36Kr (primary Chinese source) June 3 |
| Seedance 2.0 >RMB 1B/month | CONFIRMED | HIGH | 36Kr June 3 2026 |
| DeepSeek V4 cache-hit pricing reset | CONFIRMED | HIGH | DeepSeek API docs; TokenMix |
| GLM-5.2 closing on closed-source | CONFIRMED | HIGH | The Decoder; TechTimes; release June 13 |

---

## LOAD-BEARING ITEMS FOR MU PRINT TONIGHT

Priority 1 (DIRECT HBM read-through):
- H100 1-yr lease +40% (SemiAnalysis) = demand-side tightness confirmation = POSITIVE for MU HBM sold-out narrative
- Anthropic $47B ARR + Colossus 1 compute commitment = structural demand anchor for HBM through 2026-2027

Priority 2 (NBIS Active position):
- NBIS PAYG +30% / preemptible +51% = direct pricing-power validation = STRONGEST near-term thesis amplifier

Priority 3 (Chinese model vendor risk / MRVL read):
- DeepSeek V4 permanent 75% discount = commoditization of mid-tier inference = margin headwind for commodity API providers but demand-volume amplifier overall
- GLM-5.2 + Seedance 2.0 = Chinese frontier model acceleration = PC-14 N-counter amplified

---

session_end: 2026-06-24
next_action: Monitor MU print (22:30 CET) for HBM commentary; grade vs H100 lease-rate leading indicator
