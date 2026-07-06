# IBM Sub-1nm "NanoStack" Announcement — Cascade Verification

**Date:** 2026-06-25 PM
**Workflows:** TRACE + MACRO-FIRST RESEARCH + B59 v2 verification + Critical Rule #16
**Sub-agent:** #8
**User correction acknowledged:** "It was IBM, not Qualcomm" — re: "1nm" reference. CONFIRMED — IBM did debut the sub-1nm announcement today.

---

## TL;DR (1-2 lines)

IBM debuted a real, technically-substantive sub-1nm transistor architecture today (NanoStack at 0.7nm / 7 angstrom node, VLSI 2026 paper, 100B transistors, 50% perf / 70% power vs 2nm) — but it is a research-stage architecture, not a production node. Cascade is moderate-but-real for Rapidus / KIOXIA / NBIS / LRCX (held cohort positive) and neutral-to-slight-negative for Samsung Foundry / Intel Foundry. NVDA / AMD / TSMC are unaffected near-term.

---

## PART 1 — HARD-DATA VERIFICATION

### What was actually announced (T1 — IBM Newsroom)
- **Date:** 2026-06-25 (today)
- **Venue:** VLSI 2026 Symposium (Hawaii, June 14-18, 2026 — paper just being publicized today via IBM Newsroom release)
- **Name:** "NanoStack" architecture
- **Node:** 0.7nm / 7 angstrom (sub-1nm class)
- **Transistor count:** ~100 billion on fingernail-sized die (~2x IBM 2nm 2021 chip)
- **Performance:** +50% iso-power perf OR -70% iso-perf power vs IBM 2nm
- **SRAM scaling:** 40% area scaling (significant — SRAM is the #1 scaling laggard)
- **Architecture:** 3D sequential integration — two transistors bonded together per unit, 5nm-thick nanosheets, 9nm gap, dual-channel engineering capability
- **Validation:** CMOS inverter functional operation experimentally demonstrated
- **Commercialization horizon:** "next five years" per IBM (i.e., ~2031 commercial production at earliest)
- **Source:** [IBM Newsroom 2026-06-25](https://newsroom.ibm.com/2026-06-25-ibm-debuts-worlds-first-sub-1-nanometer-chip-technology) [T1]

### What is the PARTNER situation
- **No specific commercialization partner named today** [T1, IBM did not disclose]
- **Existing IBM partnership map:**
  - **Rapidus (Japan)** — 2nm joint dev since Dec 2022; expanded to 1.4nm in June 2024; "sub-1nm" intent stated but aspirational [T1 Nikkei xTECH]
  - **Lam Research** — March 2026 5-year collab for sub-1nm using Aether dry resist + High-NA EUV at Albany NanoTech [T1 Lam Research newsroom]
  - **Samsung Foundry** — historical partnership (IBM 2nm 2021 with Samsung) — not the named commercialization partner anymore [T2 — implied displacement]
- **Korean press (Hankook Ilbo, ZDNet Korea, FN News):** noted Samsung has its own competing 3D Stacked FET demo (won VLSI 2026 Best Paper), but Samsung is NOT confirmed as the IBM commercialization partner [T1 ZDNet Korea 2026-06-25]

### Stock reaction (T1)
- IBM +4-5% pre-market to ~$273-279 [T1 Investing.com]
- Concurrent catalysts: JPMorgan upgrade to Overweight (PT $291, Brian Essex, June 23) + Palo Alto Networks security partnership
- LRCX implied positive read-through from March 2026 collab (Lam confirmed as the High-NA EUV / dry-resist enabler) [T2 Yahoo Finance]

### What this is NOT
- **NOT** a production node
- **NOT** a foundry partner announcement (no Rapidus/Samsung/TSMC commercialization commitment today)
- **NOT** an AI accelerator product (Spyre/Telum III not on this node)
- **NOT** related to IBM's own enterprise chip roadmap (Telum II + Spyre are on 5nm Samsung Foundry; Power11 on Samsung 7nm)

---

## PART 2 — FIRST-PRINCIPLES FOUNDRY STATE 2026 Q2

| Foundry | Leading node status | Sub-1nm path |
|---|---|---|
| **TSMC** | N2 volume production Q4'25, ramping 2026 [T1]; N2P H2'26; A16 ready 2026 but customer ramp 2027; A14 production 2028 [T1 Tom's Hardware] | Owns the curve. Sub-1nm via A14 → A12/A13 (2029+). No IBM dependency. |
| **Samsung Foundry** | SF2 mass production Q4'25; SF2P hit 70% yield early 2026 [T1 TrendForce]; QCOM + AMD in final talks to shift 2nm portions to SS [T1] | Own 3D Stacked FET demo won VLSI 2026 Best Paper (independent of IBM). |
| **Intel Foundry** | 18A in production Fab 52 Arizona; Panther Lake ramping but yields reportedly weak [T1 TechPowerUp]; Clearwater Forest H1'26; 14A D0 ~0.5 (early ramp) [T1 KAD] | 14A High-NA EUV deployment 2026-2027. No IBM dependency. |
| **Rapidus** | IIM-1 Hokkaido pilot since April 2025 [T1 Rapidus.inc]; 2nm GAA functional July 2025; mass production target 2027; 1.4nm dev started 2026, MP target 2029 [T1 Nikkei xTECH] | 1nm explicit roadmap, post-2030. IBM is THE core IP partner. |

**Rapidus capital backing (T1 multilingual Nikkei/TrendForce):**
- Original 2022: Denso, Kioxia, MUFG, NEC, NTT, SoftBank, Sony, Toyota (~¥73B)
- Feb 2026: 32 companies, ¥167.6B private (added Canon, Fujitsu, JX Adv Metals, Kyocera, Seiko Epson, DNP, Ushio, Argo Graphics)
- June 2026: Additional ¥150B government direct ownership stake; total METI subsidies cumulative ~¥1.7T+; government holds "golden share" + ~10% voting + convertible non-voting

---

## PART 3 — LLM-NATIVE CASCADE (parallel hypothesis)

### Q1: What does the announcement MEAN? (3 hypotheses)

| H | Description | P | Cascade weight |
|---|---|---|---|
| **H1** | Pure research demonstration. Functional inverter only. Production-grade yield/cost economics unproven. ~2031 best case via Rapidus, 2032+ via TSMC. | **65%** | LOW near-term |
| **H2** | Production-relevant inflection. SRAM 40% scaling is the headline (SRAM has been the main scaling brake for 3 nodes). If real, IBM has effectively pulled-in the post-2nm density curve by ~12 months. | **25%** | MEDIUM-HIGH |
| **H3** | Marketing/PR vehicle. "0.7nm" naming aggressive (similar to how 2nm class is really ~20nm CPP). True dimensional scaling smaller than headline implies. | **10%** | LOW |

**My read:** Most weight on H1 with H2 tail. The 9nm gap between transistors + 5nm nanosheet stack is genuinely novel 3D sequential integration, not relabeled gate-all-around. SRAM 40% is real if reproducible. But "5 years to commercial" implies no near-term P&L impact.

### Q2: Foundry winner cascade

| Winner | P | Why |
|---|---|---|
| **Rapidus** | **55%** | Most direct beneficiary. IBM has explicitly stated multi-generation partnership through 1.4nm and "sub-1nm intent." IBM IP transfer is Rapidus's core moat vs TSMC. NanoStack proof point validates Rapidus's claim to be sub-2nm credible. |
| **Samsung Foundry** | **20%** | Historical IBM 2nm partner. Has own competing 3D Stacked FET (VLSI Best Paper 2026). Could license NanoStack but no announcement. Possibly partial dual-source. |
| **TSMC** | **10%** | TSMC has own A14 roadmap (2028) and CFET IP. No incentive to license IBM. Risk: if Rapidus + IBM execute, TSMC loses density crown by 2030. |
| **Intel Foundry** | **10%** | Already strained on 18A yield. 14A is their priority. IBM partnership extremely unlikely. |
| **Other (RBTX-style)** | **5%** | Unlikely. |

### Q3: Memory ecosystem cascade

**N+1 order (P>80%):** If sub-1nm logic delivers 50% perf at iso-power, **compute throughput per watt rises** → **memory bandwidth demand rises proportionally** → **HBM5+ / HBM4E TAM expansion**. This is a 2029-2032 phenomenon.

**N+2 order (P~60%):** SK Hynix is the structural HBM leader. Samsung HBM4 catching up (per Counterpoint). **HYNIX held position (20.6% L3 Core EX) gets positive long-tail read-through** — sub-1nm logic is a demand-side validator for the unified HBM/DRAM/NAND alpha thesis.

**N+3 order (P~40%):** If Rapidus actually produces sub-1nm in Japan, Japanese memory ecosystem (Kioxia, Micron Hiroshima fab) gains supply-chain proximity advantage for Japanese AI sovereign-compute customers. **KIOXIA (14.4% Core) gets dual read-through:** (1) Rapidus JV member shareholder; (2) supply-chain proximity for Japan AI demand.

### Q4: IBM AI accelerator cascade

- **NanoStack is NOT in IBM's near-term product roadmap.** Spyre = 5nm; Telum II = Samsung 5nm; Telum III likely 3nm or 2nm class (2027-2028); IBM AIU on similar nodes.
- IBM's own AI silicon plans don't change today.
- **P>80%:** IBM is NOT going to challenge NVDA/AMD with NanoStack-based AI chips in the trading horizon.
- **P~40% N+2:** IBM uses NanoStack license fees + Rapidus royalty stream as a Software-2.0 high-margin annuity by 2030+. This is a re-rating story, not a 2026-2027 P&L story.

### Q5: Japan policy cascade

**P>80% N+1:** METI uses today's announcement as validation for additional Rapidus subsidies (already topped up ¥150B in June 2026). Japan sovereign-AI narrative reinforced.

**P~70% N+2:** Fujitsu's planned 1.4nm AI chip via Rapidus (per SemiWiki) gets credibility boost. Toyota / SoftBank (Rapidus shareholders) gain implicit chip-supply hedge value.

**P~50% N+3:** Korean press (ZDNet Korea, Hankook Ilbo) framed today's announcement as a competitive moment for Samsung Foundry — Korea may accelerate SF2P → SF1.4 timeline. **Net positive for ASML / Lam / KLA / Applied Materials** (more leading-edge capex from a 4th competitor pushing Samsung).

### Q6: US-Japan sovereign-AI supply chain cascade (PC-14 Sovereign-AI Bifurcation)

**P>80%:** This announcement is a textbook PC-14 data point. IBM Research US + Rapidus JP + Lam Research US = a **fully-Western, non-China sub-1nm logic path**. This is what sovereign-AI bifurcation looks like in practice.

**Cascade to NBIS (Western non-China compute aggregator):**
- NBIS thesis is about Western sovereign-AI compute. A US-Japan sub-1nm logic path is structurally upside to that thesis (more high-end Western silicon supply, longer-term).
- Near-term price impact: minimal. Long-term thesis support: meaningful.
- **Action: HOLD with positive narrative reinforcement.**

### Q7: Per-name competitive cascade

(Held cohort joint-state matrix — Part 4)

### Q8: What this does NOT impact

- **NVDA 2026-2027 demand cycle:** zero impact. NVDA roadmap (Blackwell Ultra → Rubin → Rubin Ultra) is on TSMC N3/N2.
- **AMD MI series roadmap:** zero impact. MI400/MI450 on TSMC N2 / N3P.
- **Current HBM cycle:** zero impact. HBM3E / HBM4 demand drivers are existing-node compute deployment.
- **Power monetization 2026:** zero impact.
- **NAND pricing 2026:** zero impact.

### Q9: What this BLOCKS / makes impossible

- **Intel Foundry's "sole leading-edge US foundry" narrative:** weakened. IBM-Rapidus-Lam path is an alternative Western sub-1nm route that does NOT require Intel.
- **TSMC's "we are the only entity scaling logic" narrative:** dented. IBM has now publicly shown competitive transistor architecture from a non-TSMC source.
- **Samsung Foundry's "we have our own 3D Stacked FET" claim:** muted. Samsung won VLSI Best Paper but IBM's marketing-and-PR machine just took the spotlight.

---

## PART 4 — HELD COHORT JOINT-STATE MATRIX

| Ticker | Direction | Magnitude | Action | Reasoning |
|---|---|---|---|---|
| **NVDA** | NEUTRAL | 0 | **HOLD** | Zero impact on 2026-2027 roadmap. Long-term: more leading-edge Western silicon supply = more compute = more NVDA. Mild positive in 2030+ window. |
| **AMD** | NEUTRAL | 0 | **HOLD** | Same as NVDA. Zero near-term. |
| **TSM** | NEUTRAL-NEG | -1 | **HOLD** | Long-term competitive risk from Rapidus + IBM if executed. Not investable on this announcement. TSMC remains dominant 2026-2029. |
| **INTC** | NEG | -1 | **HOLD/AVOID** | Intel Foundry narrative dented. Confirms IBM did NOT pick Intel Foundry as commercialization partner. Adds to existing Intel Foundry execution risk. |
| **HYNIX (20.6% L3 Core EX)** | POSITIVE | +1 | **HOLD with conviction** | N+2 cascade: sub-1nm logic → more compute throughput → more HBM bandwidth demand. Unified HBM/DRAM/NAND alpha intact. |
| **KIOXIA (14.4% Core)** | POSITIVE | +2 | **HOLD with positive reinforcement** | Dual read-through: (1) Rapidus JV shareholder; (2) Japan supply-chain proximity to sub-1nm logic. NAND TAM unaffected near-term. Sovereign-AI narrative reinforced. |
| **MRVL (5.9% Active)** | NEUTRAL | 0 | **HOLD** | Custom AI ASIC competition with IBM AIU not affected — IBM AIU not on NanoStack. |
| **NBIS** | POSITIVE | +1 | **HOLD** | Western sovereign-AI compute thesis structurally reinforced by US-Japan sub-1nm path. Long-tail positive. |
| **SNDK (5.3%)** | NEUTRAL | 0 | **HOLD** | NAND cycle unaffected. |
| **LRCX** | POSITIVE | +1 | **WATCH (not held?)** | Direct beneficiary via March 2026 collab. Aether dry resist + High-NA EUV is the enabling tooling. If sub-1nm goes to volume, LRCX is leveraged. |
| **MURATA / SUMCO (Japan substrates)** | POSITIVE | +1 | **WATCH** | Rapidus 1.4nm/1nm production demand for advanced wafer/substrate. Sumco 300mm SOI / SiGe demand upside. |

---

## PART 5 — ANTI-CONFIRMATION-BIAS BEAR CASE (B22)

### Bear case 1: "0.7nm" is marketing
- Modern node names have NO physical meaning. TSMC N2 ≠ 2nm anywhere on the chip. "0.7nm" is a successor name on the ITRS-style roadmap, not a dimension.
- IBM has historically used aggressive naming (5nm in 2017, 2nm in 2021 — both research demos not in production for years).
- **Counter:** 9nm transistor gap + 5nm nanosheet thickness are real dimensions and ARE smaller than current production.

### Bear case 2: Functional inverter ≠ functional chip
- IBM demonstrated CMOS inverter operation. An inverter is the simplest possible circuit. Going from inverter to billion-transistor functional chip is a 5-10 year gap historically.
- **Counter:** Acknowledged by IBM ("5 years to commercial"). Not a 2026-2027 trade.

### Bear case 3: SRAM scaling claim unverified by third parties
- 40% SRAM scaling would be the biggest single-step in 10 years. Skepticism warranted until reproduced.
- **Counter:** VLSI 2026 paper is peer-reviewed. Will get scrutinized in coming months.

### Bear case 4: Rapidus execution risk
- Rapidus has never produced a chip at any node. Going from zero to sub-1nm in 5 years is unprecedented.
- TSMC has 30+ years of process expertise + customer ecosystem. IBM IP transfer cannot substitute for production know-how.
- **Counter:** Acknowledged. Rapidus 2nm 2027 has to work first. If it slips, sub-1nm path stretches to 2033+.

### Bear case 5: Samsung competitor advantage
- Samsung won VLSI 2026 Best Paper with their own 3D Stacked FET. They have foundry + IP integration that IBM lacks.
- **Counter:** Possibly, but Samsung Foundry has yield/customer credibility issues. Best paper ≠ commercial winner.

### Net bear case weighting
- Near-term (2026-2027): bear case is correct. This is NOT a trade-able catalyst for any held name in the trading horizon.
- Medium-term (2028-2030): bear case partial. Validates Rapidus path; modest cascade to Japan ecosystem (KIOXIA).
- Long-term (2030+): bull case dominates. PC-14 sovereign-AI bifurcation is real, and today is a milestone.

---

## PART 6 — REGIME-CORRECTED PRIORS CHECK (B45)

**AI-supercycle regime prior:** do NOT default to "this is hype / exhaustion / stretched."

**Regime base rate applied:**
- In an AI-supercycle regime, every leading-edge logic announcement compounds demand for HBM, advanced packaging, and Western-aligned sovereign-AI supply chains.
- Default skepticism (B22) is still mandatory — bear case above is real — BUT do not over-weight skepticism in regime context.
- Net regime-adjusted read: today is a **mild-positive structural data point**, not an "overhype-and-fade" event. The IBM stock +5% is sustainable IF JPMorgan upgrade thesis holds and Palo Alto deal is real (concurrent catalysts).

**Lesson candidate (L29):** "When user provides correction or claims, treat as unverified assumption. Use hard data (filings, primary sources, multilingual primary press) and LLM-native inference. Sell-side aggregation is calibration only, not analytical anchor."

---

## PART 7 — SOURCES (with T1/T2/T3 tiers)

### T1 (primary)
- [IBM Newsroom — IBM Debuts World's First Sub-1 Nanometer Chip Technology — 2026-06-25](https://newsroom.ibm.com/2026-06-25-ibm-debuts-worlds-first-sub-1-nanometer-chip-technology)
- [IBM Research blog — Introducing the first sub-1 nanometer node chip](https://research.ibm.com/blog/sub-1nm-node-chips)
- [IBM Research — What is IBM's nanostack chip architecture?](https://research.ibm.com/blog/what-is-a-nanostack)
- [IBM Research publication — NanoStack Transistor Architecture for CMOS 7A Node and Beyond, VLSI 2025/2026](https://research.ibm.com/publications/nanostack-transistor-architecture-for-cmos-7a-node-and-beyond)
- [Lam Research Newsroom — IBM and Lam Drive Sub-1nm Logic Scaling with Aether Dry Resist, March 2026](https://newsroom.lamresearch.com/ibm-lam-sub-1nm-logic-aether-dry-resist?blog=true)
- [Rapidus Corporation — IIM Hub overview](https://www.rapidus.inc/en/iim/)
- [Rapidus Corporation — 2nm semiconductor challenges](https://www.rapidus.inc/en/tech/te0006/)
- [Rapidus / NEDO — FY2026 Plan and Budget for 2nm Semiconductor Projects](https://www.rapidus.inc/en/news_topics/information/nedo-approves-rapidus-fy2026-plan-and-budget-for-2nm-semiconductor-projects/)
- [IBM Newsroom — IBM and Rapidus Strategic Partnership, December 2022](https://newsroom.ibm.com/2022-12-12-IBM-and-Rapidus-Form-Strategic-Partnership-to-Build-Advanced-Semiconductor-Technology-and-Ecosystem-in-Japan)
- [IBM Newsroom JP — Rapidus and IBM Move Closer to Scaling Out 2nm Chip Production, 2024-12-11](https://jp.newsroom.ibm.com/2024-12-11-blog-rapidus-ibm-move-closer-to-scaling-out-2-nm-chip-production)
- [Intel Newsroom — Panther Lake Architecture: First AI PC Platform on 18A](https://newsroom.intel.com/client-computing/intel-unveils-panther-lake-architecture-first-ai-pc-platform-built-on-18a)
- [TSMC official — 2nm Technology](https://www.tsmc.com/english/dedicatedFoundry/technology/logic/l_2nm)

### T1 — Japanese primary press
- [日本経済新聞 — IBMが「1ナノ未満」半導体技術 ラピダス世代から性能5割向上](https://www.nikkei.com/article/DGXZQOGN193WI0Z10C26A6000000/)
- [日経xTECH — ラピダス、1.4ナノもIBMと開発 NY州の駐在技術者「半数残す」](https://xtech.nikkei.com/atcl/nxt/column/18/00001/11424/)
- [日本経済新聞 — ラピダス・IBM、2ナノ半導体を性能通りに動かす技術開発](https://www.nikkei.com/article/DGXZQOUC104F10Q4A211C2000000/)

### T1 — Korean primary press
- [ZDNet Korea — 반도체 미세화 한계, '3D 적층'으로 뚫었다…IBM, 0.7나노 시대 개막 (2026-06-25)](https://zdnet.co.kr/view/?no=20260625160455)
- [한국일보 — IBM, 1나노 벽 돌파 '나노스택' 아키텍처 공개](https://www.hankookilbo.com/news/article/A2026062508440001094)
- [파이낸셜뉴스 — '더 작게' 아닌 '더 높게'…IBM, 0.7나노 시대 열었다](https://www.fnnews.com/news/202606250919540014)

### T2 (industry / specialist)
- [MIT Technology Review — IBM has unveiled chip technology that could help extend Moore's Law another decade, 2026-06-25](https://www.technologyreview.com/2026/06/25/1139696/ibm-unveils-sub1nm-chip/)
- [EE Times — IBM, Lam Research Focus High-NA EUV on Sub-1-nm Nodes](https://www.eetimes.com/ibm-lam-research-focus-high-na-euv-on-sub-1-nm-nodes/)
- [Tom's Hardware — IBM and Lam's new partnership paves the way toward sub-1nm logic](https://www.tomshardware.com/tech-industry/semiconductors/ibm-and-lam-team-up-on-high-na-euv)
- [Tom's Hardware — TSMC unveils process technology roadmap through 2029](https://www.tomshardware.com/tech-industry/semiconductors/tsmc-unveils-process-technology-roadmap-through-2029-a12-a13-n2u-announced-a16-slips-to-2027)
- [SemiEngineering — TSMC Tech Symposium 2026 By The Numbers](https://semiengineering.com/tsmc-tech-symposium-2026-by-the-numbers/)
- [More Than Moore — IBM's Announces 0.7nm Process Node, Introduces NanoStack](https://morethanmoore.substack.com/p/ibms-announces-07nm-process-node)
- [TrendForce — Japan's Chip Push in Spotlight: IBM Backs Rapidus, Feb 2026](https://www.trendforce.com/news/2026/02/18/news-japans-chip-push-in-spotlight-ibm-backs-rapidus-as-funding-momentum-builds/)
- [TrendForce — Samsung Reportedly Hits 55-60% 2nm Yields, Nov 2025](https://www.trendforce.com/news/2025/11/25/news-samsung-reportedly-hits-55-60-2nm-yields-eyeing-an-edge-through-early-gaa-deployment/)
- [TrendForce — Rapidus Secures ¥167.6B Private Funding, Mar 2026](https://www.trendforce.com/news/2026/03/02/news-rapidus-reportedly-secures-%C2%A5167-6b-private-funding-60-customers-in-talks-10-receive-preliminary-quotes/)
- [Digitimes — IBM eyes deeper partnership with Rapidus for sub-1nm chip development](https://www.digitimes.com/news/a20250630VL209/ibm-rapidus-partnership-2nm-production.html)
- [Constellation Research — IBM Research details first sub-1 nm chip, unveils nanostack architecture](https://www.constellationr.com/insights/news/ibm-research-details-first-sub-1-nm-chip-unveils-nanostack-architecture)
- [SemiWiki — Fujitsu plans 1.4nm AI chip with Rapidus](https://semiwiki.com/forum/threads/fujitsu-plans-1-4nm-ai-chip-japan-based-production-with-rapidus-japan-targets-fivefold-rise-in-domestically-made-chip-sales-by-2040.24867/)
- [Asia Times — Japan's Rapidus set to rival TSMC and Samsung, Dec 2025](https://asiatimes.com/2025/12/japans-rapidus-set-to-rival-tsmc-and-samsung-for-chip-supremacy/)
- [Counterpoint Research — The Key Process of Samsung Foundry's Future](https://counterpointresearch.com/en/reports/The_Key_Process_of_Samsung_Foundry_Future)
- [TechTimes — Samsung Builds Industry's Smallest 3D-Stacked Transistor, Wins VLSI Best Paper, 2026-06-21](https://www.techtimes.com/articles/318572/20260621/samsung-builds-industrys-smallest-3d-stacked-transistor-wins-vlsi-best-paper.htm)

### T2 — Market reaction
- [Investing.com — IBM surges on unveiling sub-1nm chip technology breakthrough](https://www.investing.com/news/stock-market-news/ibm-surges-on-unveiling-sub1nm-chip-technology-breakthrough-4760044)
- [Fast Company — IBM debuts world's first sub-1 nm chip technology](https://www.fastcompany.com/91564027/ibm-debuts-worlds-first-sub-1-nanometer-chip-technology)
- [Yahoo Finance — Lam Research IBM Alliance Targets Sub 1nm Logic And AI Chip Demand](https://finance.yahoo.com/news/lam-research-ibm-alliance-targets-211911599.html)

### T3 (general / aggregated)
- [Tech Digest — IBM develops 'nanostack' chip architecture](https://www.techdigest.tv/2026/06/ibm-develops-nanostack-chip-architecture.html)
- [Simply Wall St — IBM Unveils Sub 1 Nanometer Nanostack Chip With 100 Billion Transistors](https://simplywall.st/stocks/us/software/nyse-ibm/international-business-machines/news/ibm-ibm-unveils-sub-1-nanometer-nanostack-chip-with-100-bill)

---

## L29 LESSON CANDIDATE (codification for /research/predictions/lessons.md)

**Trigger:** User said "Everything I say is always an unverified assumption... I would much rather you extrapolate using your own inference."

**Lesson:** Sub-agents must (1) verify user's factual claims via hard primary data BEFORE acting on them, (2) treat user opinions as one data point — not the anchor, (3) reason from raw primary data using LLM-native inference, (4) use sell-side opinion as calibration check only after own analysis is formed.

**Application to today:** User's "Qualcomm 1nm" claim was wrong (corrected to IBM). User then asked sub-agent to verify the IBM version. Both required hard-data verification — same protocol regardless of user confidence level.

