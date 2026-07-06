# Cross-Source Signal Log

**Last updated:** 2026-05-27

Weak/single-source signals. When ≥3 independent sources converge on the same direction within 90 days, promote to `triangulation.md` (per principle #29: segment-classify each source before promoting).

---

## ENTRIES 2026-05-28 AM Brief

### [2026-05-28] China 9 domestic AI chips certified for government procurement — China-sovereignty segment

**Source:** Per Tom's Hardware (T2 via AI Intelligence Brief 2026-05-28 morning edition): China certified nine domestic AI chips for government procurement "secure and reliable" list; three-year certifications; first time homegrown AI chips added.

**Direction:** bull for Chinese domestic AI chip ecosystem (Huawei, Cambricon, MetaX); bear for NVDA China revenue (already structurally zero) + AMD China + ARM China royalty stream long-term

**Segment classification (per principle #29):** China-sovereignty / sovereign-AI

**Cluster pre-existence check (per principle #32 fresh-verify 2026-05-28):**
- Prior signals exist in OS files but NOT documented as a coherent TRACE event:
  - Huawei LogicFolding + Tau Scaling Law (May 25 2026) — scattered references in ARM thesis + 13F analysis
  - China AI talent travel restrictions (May 26 2026) — scattered references same as above
  - DeepSeek V4 + State AI Fund $4B round (May 16 2026) — references in test-time-compute-scaling event
- Today's signal would be 3rd-4th same-segment data point IF prior signals were properly documented
- **HOWEVER**: per principle #29 + fresh-verify discipline 2026-05-28, the prior signals lack a dedicated TRACE event documenting the same-segment cluster. Cannot promote to triangulation without documentation back-fill.

**Action**: log as cross-source signal today; back-fill TRACE event for the China sovereignty cluster as new P2 todo item; promotion to triangulation.md deferred until back-fill completes.

**Cascade implications** (when promoted):
- NVDA China revenue stays structurally zero (already in thesis)
- ARM China royalty migration to RISC-V accelerating (already in thesis blind-spots)
- TSMC mature-node China revenue trajectory 5-7 year horizon

### [2026-05-28] AI hitting power grid capacity limits — power-and-cooling segment

**Source:** NY Post via Hacker News (T3 via AI Intelligence Brief 2026-05-28 morning edition): data centers facing operational constraints as electricity demand outpaces infrastructure; political implications for midterm elections.

**Direction:** bull for power producers + power-equipment beneficiaries with bypass-routes to grid constraint (CEG nuclear baseload, GEV gas turbines, BE distributed fuel cells, VST/TLN merchant power)

**Segment classification (per principle #29):** power-and-cooling

**Cluster pre-existence check:**
- 2026-05-27: xAI 62 gas turbines unpermitted + $2.8B more turbines + Anthropic $1.25B/month Colossus deal (per existing entry above)
- 2026-05-28: today's AI grid capacity limits + Erin Brockovich DC tracking project (Tom's Hardware via brief; 2,700+ submissions on water/power/environmental concerns)
- Count: 2 prior entries + 2 today = 4 same-segment signals in 48 hours

**Power-cluster status**: still building. Today's grid-capacity-limits signal is the strongest framing-level signal but the cluster needs ≥3 properly-documented independent sources (not just headline aggregation). Per principle #29 segmented-triangulation discipline, NOT yet promoted to triangulation pending verification of independent sources beyond AI brief aggregation. **Watch trigger**: if 1-2 more independent same-segment signals land in next 30 days (utility earnings, hyperscaler power-PPA announcements, regulatory siting events), promote to triangulation.

### [2026-05-28] Arm accelerates cloud infrastructure adoption — CPU-orchestration segment confirmation

**Source:** The Register (T3 via brief): "Multi-architecture cloud deployments increasing as hyperscaler adoption and AI workloads drive Arm into core cloud stack, with cost and availability advantages over traditional on-prem hardware."

**Direction:** confirmatory bull for ARM thesis (held 6.45%)

**Segment classification:** CPU/DRAM orchestration (per Robinhood top-down analysis 2026-05-27 + Principle #33)

**This is direct empirical confirmation** of the Robinhood top-down framework's non-consensus CPU/DRAM orchestration binding-constraint insight — surfaced 2026-05-27 as one of 2 non-consensus insights from Principle #33 first application. Per the framework: every embedded agent tool call requires host-side CPU work; at millions of concurrent agents = real co-binding constraint.

ARM thesis benefits but no triangulation promotion (single confirmatory signal). Brief cross-ref added to companies/ARM/thesis.md same commit batch.

### [2026-05-28] Mistral exploring custom chip design — custom Si bifurcation confirmation

**Source:** CNBC (T2 via brief): Mistral CEO Arthur Mensch confirmed considering designing own chips.

**Direction:** confirmatory for custom-Si bifurcation thesis (one more frontier-lab joining the OpenAI Titan / Anthropic-AVGO / Google TPU / MSFT Maia / Meta MTIA pattern)

**Segment classification:** custom-silicon-design

**No triangulation promotion**: custom-Si bifurcation is already well-covered in OS (custom-silicon-primer.md + multiple thesis files). Mistral adds to ecosystem confirmation but doesn't shift positioning.

### [2026-05-28] SpaceX TeraFab IPO disclosure — META-VALIDATION of prior principle #32 fresh-verify catch

**Source:** Tom's Hardware (T2 via brief): SpaceX IPO risk factor disclosure admits TeraFab project "may not succeed" + cannot secure enough AI chips for orbital computing ambitions.

**Significance**: empirically confirms the principle #32 fresh-verify catch from 2026-05-28 where agent rejected the JPM Specialist Sales note's attribution of "tera-fab" to TSMC. The agent correctly identified "tera-fab" as Tesla/Musk terminology not TSMC. Today's SpaceX IPO disclosure confirms it's SpaceX's orbital-AI compute project all along.

**This is a high-confidence validation** of the discipline working as designed — fresh-verify caught a misattribution that propagation would have been incorrect, and the empirical confirmation arrived within 24 hours.

**Logged as application entry in principle-applications-log.md.** No thesis impact (SpaceX is private; orbital AI compute is not material to OS holdings).

---

## ENTRIES (2026-05-27 AM brief triage, premortem-verified)

### [2026-05-27] DuckDuckGo install surge — consumer-AI segment

**Source(s):** [TechCrunch May 26 2026 (T2)](https://techcrunch.com/2026/05/26/duckduckgo-installs-are-up-30-as-users-reject-being-force-fed-googles-ai-search/) citing DuckDuckGo primary disclosure (T1 underlying). Multiple corroborating outlets (Engadget, Tom's Guide, ASOWorld, AI Weekly).

**Verified numbers (per premortem fresh-verification 2026-05-27):**
- US installs week-over-week average +18.1% during May 20-25, 2026
- Peak +30.5% on May 25 (not a single-day spike; sustained 6 consecutive days)
- iOS specifically: +33% WoW average, peak +69.9%
- `noai.duckduckgo.com` (DDG's AI-free search page): +22.7% WoW average, peak +27.7% on May 24 — separate signal of explicit AI-rejection

**Trigger**: Google I/O 2026 May 19 AI Mode redesign — the migration started immediately after.

**Direction:** bear for GOOG consumer-AI thesis; bull for "open-web survives" narrative

**Segment classification (per principle #29):** consumer-AI

**Cross-cut vs prior GOOG data points:**
- Google AI Mode 1B MAU (yesterday's TRACE entry) — Google's own consumption metric, AI-Mode segment
- Publisher traffic -33% globally; HubSpot -70-80% (in GOOG thesis) — publisher segment
- THIS signal: consumer-AI segment, DIFFERENT segment from above two
- **Cross-cutting, NOT triangulation** (per principle #29 — three sources spanning three different segments).

**Thesis impact:** does NOT fire GOOG falsifier #4 (Network revenue -5% for 3+ quarters) or #5 (Search growth <10% for 2+ quarters). DDG growth off a small base is not yet a Google Search revenue threat. **Watch item, not falsifier trigger.**

**Premortem flags / hedges:**
- Single-source-cluster (DDG self-disclosure + journalists covering it) — DDG has interest in publicizing growth
- 6-day window is meaningful but not multi-month; could revert
- Absolute base sizing not disclosed (a 30% gain on a small base ≠ 30% gain on a large base)
- Promote to triangulation if: 2-3 more consumer-AI segment data points emerge over next 90 days (Bing/Perplexity/ChatGPT search install surges OR Google AI Mode user retention disclosures)

---

### [2026-05-27] xAI gas-heavy power deployment + Anthropic $1.25B/month Colossus deal — power-and-cooling + AI-infrastructure segments

**Source(s) (premortem-verified):**
- [TechCrunch May 13 2026 (T2)](https://techcrunch.com/2026/05/13/musks-xai-is-running-nearly-50-gas-turbines-unchecked-at-its-mississippi-data-center/) — 62 unpermitted methane gas turbines at Memphis + Southaven
- [TechCrunch May 20 2026 (T2)](https://techcrunch.com/2026/05/20/musks-xai-is-being-sued-over-its-data-center-generators-now-its-buying-2-8b-more/) — $2.8B additional gas turbine purchase
- [TechCrunch May 23 2026 (T2)](https://techcrunch.com/2026/05/23/elon-musk-has-given-up-on-solar-power-on-earth/) — Musk solar pivot framing
- Anthropic-SpaceX/xAI compute deal — $1.25B/month for Colossus compute = $40B+ contract through 2029 (per Anthropic disclosure)

**Verified facts:**
- xAI operating 62 methane gas turbines (unpermitted)
- Combined Memphis + Southaven facilities estimated >6 million tons GHG/year + >1,300 tons air pollutants/year (per xAI's own permit applications)
- Solar plans NOT fully abandoned but minimal — 88-acre array proposed produces only ~10% of data center power
- $697M spent on Tesla Megapacks vs minimal solar panel purchases per SpaceX S-1
- $2.8B additional gas turbines purchased May 2026
- **Anthropic paying xAI $1.25B/MONTH for Colossus compute** — $40B+ commitment through 2029
- EPA closed regulatory loophole January 2026; NAACP + Earthjustice seeking emergency court action

**Direction:** bull for power-and-cooling beneficiaries (gas turbine OEMs, gas peaker producers); bull for neocloud compute value (Anthropic-xAI deal validates magnitude); bear for "AI runs on renewables" narrative

**Segment classification (per principle #29):**
- Power-and-cooling signal: gas turbine deployment + solar de-prioritization
- AI-infrastructure signal: Anthropic→xAI compute deal (separate segment)

**Thesis implications:**
- **GEV (Active candidate)**: gas turbines + electrical equipment — DIRECT beneficiary if hyperscaler gas-pivot pattern broadens beyond xAI
- **BE (held, per Aschenbrenner cluster)**: natural gas fuel cells — DIRECT
- **ETN, VST, CEG, TLN, NEE**: indirect via power equipment + producers
- **Neocloud commercial value (CRWV / IREN / APLD / CORZ thesis files)**: Anthropic→xAI $1.25B/month is a structurally important commercial-value data point for the GW-scale compute-host business model

**Premortem flags / hedges:**
- xAI is a single private company (sample size of 1). Generalizing "hyperscaler shift to gas" requires 2-3 more data points.
- Musk-driven decision-making is idiosyncratic — could be partly personal-narrative-driven (per TSLA Stage 4-5 analogy), not purely technical-economic
- Regulatory tail risk: EPA / court action could force xAI to scale back gas turbines (CAUTIONARY for direct xAI exposure, NEUTRAL for gas-turbine vendors who already booked sale)
- Anthropic→xAI deal: $1.25B/month verified from SpaceX/Anthropic disclosure, but how Anthropic recognizes/allocates that cost vs CoreWeave/AWS Trainium is not yet clear

**Promotion criteria:** Promote power-and-cooling signal to triangulation if 2-3 more hyperscaler gas/nuclear-pivot disclosures land in next 90 days. Promote AI-infrastructure-commercial-value signal to triangulation if more neocloud deals at $1B+/month scale emerge.

---

## HYPOTHESIS PENDING VERIFICATION

### [2026-05-27] User-articulated hypothesis — "Narrative-driven investment era reduces weight of traditional valuation"

**Source:** User input 2026-05-27 (verbatim): *"There are certain signals where evaluations don't matter as much anymore. They still hold weight for sure. But what matters more is just the earnings — do they beat the guidance, the profit margins. Valuations, P/Es, all of these are less relevant today because we're more in a narrative driven investment era. One good example is Tesla — Elon Musk driven narrative. Any news headline where an LLM achieves a breakthrough reinforces the entire stack even if the numbers themselves don't change."*

**Decomposed claims:**
1. Valuation multiples (P/E, EV/Sales) carry less explanatory weight today vs pre-2018
2. Earnings BEAT + guide RAISE + margin EXPANSION matter MORE than absolute multiple level
3. Narrative momentum drives multi-quarter price moves independent of fundamental change
4. Pure-narrative names (no/weak fundamentals) can sustain extreme multiples via narrative reinforcement
5. Tesla is canonical example (Elon-driven narrative)

**Direction:** structural (if confirmed) — shifts OS valuation methodology
**Linked theme:** methodology principle candidate
**Status:** Verification agent launched 2026-05-27. Will return with empirical data on:
- Forward multiple at entry vs 12mo return correlation across AI-era basket
- LLM-breakthrough event-study (NVDA/AVGO/HYNIX/ALAB/SNOW reaction to GPT-5/Claude/Gemini/DeepSeek releases)
- Tesla EPS YoY vs stock price YoY 2022-2026
- Pure-narrative names cohort 12mo and 24mo returns
- 2022 NASDAQ correction: did pure-narrative names de-rate faster than fundamentals-supported names

**Promotion decision pending:** if agent verifies, codify as principle #31 (narrative-stage as explicit valuation modifier). If agent invalidates or partially refutes, log as user-articulated hypothesis with empirical counter-evidence and move on.

**OS-relevance:** the answer changes how valuation enters the Conviction Format (CLAUDE.md) and how the Recognition Stage framework is operationalized.

**RESOLUTION 2026-05-27:** Verification agent returned. Verdict: PARTIALLY CORRECT but critically overstated. Hypothesis is true at Recognition Stages 1-3; INVERTS at Stages 4-5 where surprise-capacity exhaustion makes beats produce muted/negative reactions (NVDA May 2026 / PLTR Q1 2026 confirmation cases). Pure-narrative names sustain extreme multiples 12-18 months MAX (C3.AI -57% with AI narrative intact). Beat-beat-raise IS the narrative engine for fundamentals-backed names — not separate. **Codified as principle #31 + B33 (narrative-stage modifier on sizing) 2026-05-27.** Entry moved to resolved.

---

## Format

```
[YYYY-MM-DD] {THEME or TICKER}
Source: [primary/secondary/tertiary] - [name, URL or reference]
Signal: [what was said]
Direction: [bull/bear/mixed]
Linked theme: T1/T2/T3/T4/T5/T6 (if applicable)
```

## Entries (most recent first)

### [2026-05-21] NVDA / Vera Rubin LPDDR reduction rumor
**Source:** T5 — anonymous Weibo account "手机晶片达人" (Mobile Chip Expert), 462K followers, claims "25 years IC design experience". Per `meta/source-reliability.md`: T5 = 🔴 RED FLAG, single-source rumor, requires triangulation before treating as evidence.
**Original post:** Weibo, 2026/05/20 22:57 (Chinese; user shared English-translated screenshot 2026-05-21)
**Signal:** NVIDIA is "internally discussing" reducing system LPDDR memory in some Vera Rubin configurations to lower BOM cost, while keeping HBM capacity unchanged.
**Direction:** Mixed
  - Bearish for LPDDR-specific demand from Rubin (small magnitude)
  - Neutral for HBM (unchanged per claim)
  - Net-positive read for memory cycle thesis (NVIDIA cost pressure CONFIRMS the memory tightness narrative — they're considering unusual measures)
**Underlying context (verified):**
  - Vera Rubin NVL72 spec: 54 TB LPDDR5X per rack (per [Tom's Hardware](https://www.tomshardware.com/pc-components/gpus/nvidias-vera-rubin-platform-in-depth-inside-nvidias-most-complex-ai-and-hpc-platform-to-date))
  - Memory cost in Rubin surged ~435% vs Grace Blackwell — from ~$373,939 to over $2M per rack per [WCCFTech](https://wccftech.com/nvidia-vera-rubin-rack-hit-with-memory-price-surge-pushing-hbm4-lpddr5x-bill-to-2m-of-7-8m-total/) (citing SemiAnalysis-derived figures). Memory now ~26% of $7.8M total BOM.
  - NVIDIA has structural incentive to optimize memory cost — the cost pressure is real even if the specific rumor is unverified
**What would confirm:** SemiAnalysis (T2) commentary, Reuters/Bloomberg/WSJ reporting, NVIDIA partner channel checks. None of these have surfaced as of 2026-05-21.
**What would falsify:** NVDA earnings call confirmation that Rubin spec is fixed; supplier (Hynix/Samsung/Micron) LPDDR order books unchanged.
**Linked theme:** Memory cycle (`wiki/memory-cycle-primer.md`), HYNIX position
**Action:** Monitor for triangulation. Do NOT update HYNIX or memory-cycle-primer based on this single source per CLAUDE.md Critical Rule #6. Net read: even if true, memory thesis stands because HBM unchanged + macro tightness intact.

## Triage rules

- If a signal converges with 2 existing signals on the same theme → promote via TRIANGULATE workflow
- If a signal has no echo within 90 days → archive (it was probably noise)
- If a signal contradicts a triangulated signal → flag for thesis review (don't auto-flip)
- Source quality matters: 1 primary (filing, mgmt) > 2 secondaries (analyst notes)
