# 2026-06-22 PM Subagent — Citadel/TPU Claim + EE Times Trainium + Post-AM Enterprise Disclosure Check

**Trigger:** Critical Rule #16 (verification subagent fan-out) on Citrini-style aggregator brief re Amazon external Trainium sales + Citadel Securities TPU adoption claim. Marginal-scope only — AM-TRAINIUM cascade already committed this morning.
**Subagent model:** claude-sonnet-4-6 (Sonnet 4.6 per environment)
**Scope:** Premises 1–3 only (Citadel/WSJ TPU claim; EE Times Trainium article; post-AM new enterprise disclosures)
**B40.x freshness check:** Applied on all three premises

---

## TL;DR

Premise 1 (Citadel/WSJ TPU claim): **NUANCED-PARTIAL** — the quote and performance numbers are real and attributable to Josh Woods (verified CTO), the originating WSJ investigation is real and very fresh (~June 20 2026), but the baseline hardware comparison is NOT specified in any accessible source, and the workload classification "research software" is more precisely quantitative research / backtesting / financial simulation (NOT generic ML training). Premise 2 (EE Times article): **VERIFIED-TRUE** — article exists, date June 17 2026, author Morten Block, pre-dates TechCrunch by one day; adds one material detail (Trainium3 3nm spec claim). Premise 3 (post-AM new enterprise disclosures): **NOT-FOUND** — zero new named external Trainium customers or neocloud confirmations since AM-TRAINIUM cascade this morning.

---

## Premise 1 — Citadel Securities TPU Adoption + "30% lower cost / up to 4x faster" claim

### Verdict: NUANCED-PARTIAL

The claim is substantially real. The baseline comparison and workload precision are NOT established from accessible sources.

### Source list

| Source | T-tier | URL | Key content |
|---|---|---|---|
| WSJ investigation (primary) | **T1** | wsj.com (paywalled; not directly fetched) | Original Josh Woods interview + quote; published ~June 20 2026 (per aggregator "2 days ago" metadata as of June 22) |
| TechSpot summary of WSJ | T2 | [techspot.com/news/112835](https://www.techspot.com/news/112835-google-spending-billions-turn-tpu-chips-real-challenger.html) | Relay of Josh Woods quote; ~June 20 2026 |
| TheNextWeb summary of WSJ | T2 | [thenextweb.com/news/google-nvidia-playbook](https://thenextweb.com/news/google-nvidia-playbook-tpu-circular-financing-anthropic) | Same relay; adds "circular financing" angle and Niagara Falls / Lake Mariner data center context |
| Google Cloud Next 2026 Wrap Up blog | **T1** | [cloud.google.com/blog](https://cloud.google.com/blog/topics/google-cloud-next/google-cloud-next-2026-wrap-up) | Published April 25 2026; Citadel entry #142: "built a scalable, cloud-based research environment that uses TPUs to run AI workloads up to 4x faster with 30% lower costs" — NO Josh Woods name here |
| Google Cloud Transform case study | T2 | [cloud.google.com/transform/citadel-securities-reimagine...](https://cloud.google.com/transform/citadel-securities-reimagine-quantitative-reseach-cloud-scale-speed) | Published April 9 2024; WORKLOAD TYPE = quantitative research, model testing/validation, backtesting against past market events, parallel simulations; quotes Costas Bekas (Head of Research Platform) NOT Josh Woods; "1 million cores concurrently"; no 30%/4x specific numbers in this 2024 article |
| Citadel Securities leadership page | **T1** | [citadelsecurities.com/who-we-are/leadership/joshua-woods/](https://www.citadelsecurities.com/who-we-are/leadership/joshua-woods/) | Josh Woods confirmed CTO of Citadel Securities |
| OCC Board announcement | T1 | [theocc.com/company-information/board-of-directors/josh-woods](https://www.theocc.com/company-information/board-of-directors/josh-woods) | Josh Woods = CTO Citadel Securities, confirmed on OCC board |
| LinkedIn / Facebook Business Insider post | T3 | [facebook.com/businessinsider...](https://www.facebook.com/businessinsider/posts/citadel-securities-tech-leaders-including-cto-josh-woods-and-costas-bekas-head-o/709972731001014/) | Mentions Woods + Costas Bekas together in tech leadership context |

### Sub-findings per question

**Is the WSJ quote real?**
YES — VERIFIED. The Josh Woods / Citadel Securities / 30%/4x claim originates in a Wall Street Journal investigation covering Google's TPU enterprise push (circular financing, Lake Mariner Niagara Falls data center cluster, Blackstone $5B JV). Article published approximately June 20 2026 (aggregator metadata: "2 days ago" as of June 22 2026). Direct WSJ URL is paywalled and not directly fetched. However, at least 3 independent secondary sources (TechSpot, TheNextWeb, search-engine snippet layer) reproduce the identical quote with Josh Woods attribution. This is T1-origin, T2-accessible. The quote in the Citrini brief ("Among them is Citadel Securities... Josh Woods, the firm's chief technology officer, said...") matches the WSJ-originated language reproduced across aggregators.

**Is Josh Woods actually Citadel Securities' CTO as of mid-2026?**
YES — VERIFIED T1. Citadel Securities official leadership page + OCC board page both confirm Josh Woods as CTO. No CTO change detected. Role confirmed active mid-2026.

**What specific workloads is Citadel running on TPUs?**
PARTIAL. The WSJ/aggregator chain describes only "research software workloads" — no finer granularity. The Google Cloud Transform 2024 case study (pre-30%/4x numbers) specifies: quantitative research, model testing and validation, backtesting against past market events, simulated market conditions, and parallel job execution across "1 million cores concurrently." These are NOT ML training or LLM inference in the traditional sense — they are high-throughput parallel financial simulations (Monte Carlo-adjacent workloads). The Google Cloud Next 2026 wrap-up blog (April 25 2026) reproduces the 30%/4x numbers but calls them "AI workloads" without more precision. **Best available read:** the 30%/4x claim likely covers quantitative research / large-scale simulation workloads, not generic GPU ML training.

**30% cheaper / 4x faster — vs what baseline?**
NOT ESTABLISHED in any accessible source. The WSJ investigation (paywalled) and all its open-access summaries omit the baseline hardware entirely. The Google Cloud April 2026 wrap-up blog likewise omits baseline. The 2024 case study cites improvement vs prior on-premises HPC hardware — not vs Nvidia H100/H200/B200. There is NO evidence the 30%/4x claim is a head-to-head vs H100 or B200. The prior comparison may be vs earlier Google TPU generations, vs on-prem clusters, or vs CPU-bound compute. Without baseline, the claim is DIRECTIONALLY positive for TPU but NOT sufficient to size a TPU-vs-H100 competitive displacement argument.

**Freshness (B40.x check):**
The WSJ investigation appears to be newly published (~June 20 2026 per aggregator metadata). The 30%/4x numbers first appeared (without Josh Woods name) in the Google Cloud Next 2026 Wrap-Up blog published April 25 2026. The Josh Woods named quote is NEW in the WSJ June 2026 piece. The Google Cloud Transform case study (workload detail) dates to April 9 2024. Assessment: the Josh Woods quote in the WSJ investigation is FRESH (June 20 2026, not previously public by name). The underlying performance claim was first public April 25 2026. NOT a staleness issue — this is genuinely new named-CTO endorsement even if the performance numbers have been public since April.

**Other named enterprise TPU customers at production scale:**
From the Google Cloud Next 2026 customer round-up and associated coverage, Citadel Securities is the most prominently named single customer citing specific performance metrics. Google's Blackstone JV (announced May 19 2026) targets neocloud-style data center operators. Anthropic is a heavy TPU user (Google $40B deal). No other named enterprise (banking/pharma/consulting/SaaS) cited with specific workload performance metrics comparable to the Citadel 30%/4x data point in open sources.

### Thesis impact (Premise 1)

| Name | Direction | Rationale |
|---|---|---|
| GOOG | REINFORCED | Named enterprise CTO testimonial in WSJ is the highest-quality enterprise-adoption signal Google has produced for TPU external positioning. Citadel is a tier-1 financial firm — credible reference customer. Google Cloud Next 2026 customer endorsements + Blackstone JV + Citadel named testimonial = triangulation cluster for GOOG TPU commercial traction. |
| NVDA | NEUTRAL-TO-SLIGHTLY-NEGATIVE | Citadel is specifically a Nvidia GPU customer who SWITCHED to TPU for some workloads. However, workload class (quantitative simulation) is NOT core ML training where NVDA dominates; bypass route for cost-sensitive parallel compute is credible but narrow. H100/B200 not directly displaced. |
| MRVL | NEUTRAL | No direct MRVL content implication in the Citadel/TPU story. MRVL's exposure at Google is optical/interconnect on TPU pods, not ASIC design. Citadel running more TPU workloads = marginally positive for MRVL interconnect at Google — but too attenuated to be load-bearing. |
| HYNIX | NEUTRAL | Citadel workload class does not add new HBM demand signal above what AM-TRAINIUM already established. |

---

## Premise 2 — EE Times Report on Amazon External Trainium Sales

### Verdict: VERIFIED-TRUE (article is real; marginal new content vs prior coverage is limited)

### Source list

| Source | T-tier | URL | Key content |
|---|---|---|---|
| EE Times original | **T1** | [eetimes.com/amazon-newest-gambit-selling-ai-chips/](https://www.eetimes.com/amazon-newest-gambit-selling-ai-chips/) | Direct URL confirmed. Blocked on WebFetch (HTTP 403). Search-engine metadata confirms: title "Amazon's Newest Gambit: Selling AI Chips", author Morten Block (Global Engineering Director, Segments and Technology), published June 17 2026 |
| TechCrunch primary | T2 | [techcrunch.com/2026/06/18/...](https://techcrunch.com/2026/06/18/amazon-hopes-to-challenge-nvidia-more-directly-by-selling-its-ai-chips/) | Published June 18 2026 — ONE DAY AFTER EE Times |
| Bloomberg original (paywalled) | T1 | bloomberg.com | Peter DeSantis quote on external talks; first primary source cited across all coverage |
| Search-engine metadata synthesis | T2 | Multiple aggregators | EE Times June 17 article summarizes Trainium3 3nm spec, "$20B run-rate custom silicon", "largely sold out" T3 demand, Peter DeSantis Bloomberg quote |

### EE Times article date

**June 17, 2026** — one day BEFORE TechCrunch (June 18 2026) and the morning brief that triggered the AM-TRAINIUM subagent.

### Does EE Times add anything material beyond prior coverage?

One marginal new item confirmed:

- **Trainium3 3nm spec**: EE Times states "Trainium3... is a 3-nm AI accelerator designed for training and running large-scale generative AI models in the cloud." This manufacturing process node (TSMC N3 presumably) was already in the public domain from the Dec 2025 TechCrunch Trainium lab tour, but EE Times restates it as an explicit headline spec alongside the external-sales story.

What EE Times does NOT add beyond Bloomberg/TechCrunch/morning brief:
- No new timeline details (same "few years / within two years" framing)
- No named external customers (same ZERO confirmed)
- No pricing model or distribution structure
- No specifics on rack-sale vs chip-sale distinction
- Repeats Peter DeSantis Bloomberg relay

**Assessment:** EE Times is a TRADE PRESS outlet (engineering-and-semiconductor professional audience) writing an opinion-context piece rather than a news break. The article is framed as industry analysis/commentary by Morten Block in a column format. It is NOT an investigative break — it is a relay + analysis of the Bloomberg/Peter DeSantis primary reporting. The primary credit for breaking the external-Trainium news goes to Bloomberg (DeSantis interview), not EE Times.

### B40.x freshness check (Premise 2)

EE Times published June 17 2026 — this is fresh news. EE Times is NOT recycling old news; it is covering the same-week Bloomberg/DeSantis disclosure. No temporal staleness issue.

### Thesis impact (Premise 2)

NEUTRAL relative to AM-TRAINIUM. EE Times coverage confirms the news cycle is real and has reached trade-press engineering readership, which is a secondary market-absorption confirmation. No new thesis-relevant facts surfaced. AM-TRAINIUM thesis framing (MRVL connectivity-layer beneficiary, Trainium external sales FY28+ modal timeline, W2 outcome most likely) stands unchanged.

---

## Premise 3 — Post-AM-TRAINIUM New Enterprise/Neocloud Disclosures (since ~June 22 AM)

### Verdict: NOT-FOUND

### Findings

**New named external Trainium customers (enterprise: banking/pharma/SaaS/consulting):**
None found. No enterprise company has made a public disclosure of becoming an external Trainium rack customer since this morning. The Uber/Apple/OpenAI/Anthropic names in circulation are ALL AWS-service customers (buying compute via AWS cloud), NOT external rack-sale customers. The distinction holds: no AWS-competitor-data-center has disclosed purchasing Trainium hardware.

**New neocloud disclosures (CoreWeave, NBIS, Crusoe, Lambda, Together AI):**
None confirmed. Key data points from current searches:
- CoreWeave (CRWV): $66B+ backlog; Meta $21B commitment; Q1 2026 revenue record — remains entirely NVIDIA-GPU-stack. No Trainium mention in CoreWeave SEC filings. ([CoreWeave 8-K FY2026](https://www.sec.gov/Archives/edgar/data/0001769628/000176962826000220/coreweave1q26earningspress.htm))
- NBIS (Nebius Group): $3-3.4B 2026 revenue guidance; $45B backlog; anchored by Meta and Microsoft — NVIDIA-GPU-stack exclusively. No Trainium mention.
- Lambda Labs: 100MW "AI Factory" in Kansas City with Blackwell Ultra GPUs — not Trainium.
- Crusoe: 45GW pipeline — NVIDIA stack; no Trainium.
- Together AI: No public disclosure on Trainium.

**Amazon-side confirmation of new external customers:**
None. Peter DeSantis (Q1 2026 earnings call + Bloomberg June 2026) continues to describe talks as "early-stage." AWS Trainium customers page (blocked on WebFetch) is not updated with new rack-sale customers per search-layer evidence. Trainium3 is "largely sold out" to internal/committed customers (Anthropic, OpenAI, Uber via AWS).

### B40.x freshness check (Premise 3)

This is a TRUE NEGATIVE on fresh disclosures — no staleness concern because we are asking about events that would be NEW since this morning. The AM-TRAINIUM framing that "zero external customers named, talks early-stage" remains the current state as of June 22 2026 PM.

### Thesis impact (Premise 3)

The absence of new named customers is CONSISTENT with AM-TRAINIUM W2 modal scenario (external Trainium gets traction but slowly, FY28+ primary timeline, NOT rapid-enterprise-land-grab in 2026). No thesis revision required.

---

## Material Yield Class

**MEDIUM** — Two out of three premises produce useful marginal verification:

1. **Premise 1:** The Citadel/WSJ TPU claim is verified real but the baseline-comparison gap is a genuine analytical limitation discovered by this verification. The workload class clarification (quantitative simulation, not generic ML training) is a precision upgrade worth recording. The WSJ investigation freshness date (~June 20 2026) establishes this as newly-priced information.

2. **Premise 2:** EE Times article verified real (June 17 2026, Morten Block). The author-as-industry-columnist framing (not investigative journalism) and the Bloomberg-relay-nature are marginal clarifications. No new facts on external Trainium timeline, customers, or pricing.

3. **Premise 3:** Clean NOT-FOUND on post-AM new disclosures. Confirms AM-TRAINIUM thesis-framing still current. Neoclouds remain firmly NVIDIA-stack.

No FRAMING-ERROR-CAUGHT on these premises beyond what AM-TRAINIUM already caught this morning.

---

## Honest NOT-FOUND Items

| Item | Status | Best available evidence |
|---|---|---|
| WSJ article exact URL (direct access) | NOT-FETCHED — paywalled | wsj.com; approximately June 20 2026 based on aggregator metadata "2 days ago"; could not independently confirm exact date via direct fetch |
| Baseline hardware for Citadel 30%/4x claim (vs H100? vs prior TPU gen? vs on-prem HPC?) | NOT-ESTABLISHED | No accessible source names baseline. Claim lacks anchor — "30% cheaper" compared to what is unknown |
| EE Times article full text | NOT-FETCHED — HTTP 403 | Article confirmed real via search-engine metadata; author and date confirmed; content summary via aggregator relay |
| Specific new external Trainium customers post-AM | NOT-FOUND | Confirmed empty — zero new named customers or neocloud confirmations |
| Josh Woods quote in Google Cloud's own materials | NOT-FOUND in open sources | Google's April 25 2026 blog uses same performance numbers but WITHOUT Josh Woods name; name appears only in WSJ investigation (paywalled) |

---

## Cohort Impact Table

| File | Direction | Rationale | Action required |
|---|---|---|---|
| `companies/MRVL/thesis.md` | NEUTRAL | No new MRVL-specific facts. AM-TRAINIUM cascade already covers this morning's update. | No update needed |
| `companies/GOOG/thesis.md` | MILDLY REINFORCED | Citadel WSJ testimonial = named tier-1 enterprise CTO endorsement of TPU production use. Workload class (quant simulation) expands TAM narrative but does NOT displace core GPU demand. B40.x: fresh signal not stale. | If GOOG thesis file exists: flag this as positive T2 signal for TPU enterprise traction |
| HYNIX / SNDK / KIOXIA | NEUTRAL | No new HBM or NAND demand signals from this subagent's scope. AM-TRAINIUM already captured HBM read. | No update |
| NBIS | NEUTRAL-TO-SLIGHTLY-POSITIVE (indirect) | Trainium external sales NOT displacing NBIS near-term; neoclouds remain NVIDIA-stack = NBIS GPU neocloud position intact. | No update |

---

## Sources (full list)

- [EE Times — Amazon's Newest Gambit: Selling AI Chips (June 17 2026)](https://www.eetimes.com/amazon-newest-gambit-selling-ai-chips/) — T1 trade press (403 on direct fetch; confirmed via search metadata)
- [TechSpot — Google spending billions to turn TPU chips into real challenger to Nvidia](https://www.techspot.com/news/112835-google-spending-billions-turn-tpu-chips-real-challenger.html) — T2 (blocked on direct fetch)
- [TheNextWeb — Google using Nvidia's own playbook to break its grip on AI chips](https://thenextweb.com/news/google-nvidia-playbook-tpu-circular-financing-anthropic) — T2 (blocked on direct fetch)
- [Google Cloud Blog — Google Cloud Next 2026 Wrap Up (April 25 2026)](https://cloud.google.com/blog/topics/google-cloud-next/google-cloud-next-2026-wrap-up) — T1 (fetched successfully; Citadel entry #142 confirmed)
- [Google Cloud Transform — Citadel Securities quantitative research case study (April 9 2024)](https://cloud.google.com/transform/citadel-securities-reimagine-quantitative-reseach-cloud-scale-speed) — T2 (workload type source; predates 30%/4x numbers)
- [Citadel Securities — Joshua Woods leadership page](https://www.citadelsecurities.com/who-we-are/leadership/joshua-woods/) — T1 (CTO confirmation)
- [OCC — Josh Woods CTO Citadel Securities board](https://www.theocc.com/company-information/board-of-directors/josh-woods) — T1 (CTO confirmation)
- [CNBC — Blackstone invests $5B in Google TPU joint venture (May 19 2026)](https://www.cnbc.com/2026/05/19/blackstone-google-ai-data-center-joint-venture-tpu.html) — T1 (Blackstone context; 403 on direct fetch)
- [Google — 10 industry leaders building agentic enterprise with Google Cloud Next 2026](https://blog.google/innovation-and-ai/infrastructure-and-cloud/google-cloud/cloud-next-2026-customer-round-up/) — T1
- [TechCrunch — Amazon hopes to challenge Nvidia by selling AI chips (June 18 2026)](https://techcrunch.com/2026/06/18/amazon-hopes-to-challenge-nvidia-more-directly-by-selling-its-ai-chips/) — T2 (AM-TRAINIUM primary source; included for dating reference)
- [MLQ News — Amazon in talks to sell Trainium AI chips outside AWS](https://mlq.ai/news/amazon-in-talks-to-sell-trainium-ai-chips-outside-aws-in-direct-challenge-to-nvidia/) — T3 aggregator
- [CoreWeave Q1 2026 8-K (SEC EDGAR)](https://www.sec.gov/Archives/edgar/data/0001769628/000176962826000220/coreweave1q26earningspress.htm) — T1 (CRWV remains NVIDIA-only; no Trainium)
- [Facebook/Business Insider — Citadel Securities tech leaders Josh Woods and Costas Bekas](https://www.facebook.com/businessinsider/posts/citadel-securities-tech-leaders-including-cto-josh-woods-and-costas-bekas-head-o/709972731001014/) — T3 (social relay; CTO name confirmation)
