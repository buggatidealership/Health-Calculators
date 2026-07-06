# 2026-06-07 PM — SpaceX Revised S1 Anthropic $45B Compute Deal Verification + Unit Economics Pushback

**Trigger:** User-shared X analysis 2026-06-07 PM on SpaceX revised S1 disclosure of $45B Anthropic Cloud Services Agreement; included math derivation on per-GW unit economics. User explicitly invited pushback.

**Workflow:** INGEST + verification per Critical Rule #12 + selective pushback on math. Layered on top of `signals/cross-source-log/2026-06-05-evening-brief-google-spacex-rubin-cpx-dc-moratoriums.md` (Google-SpaceX $33B deal) and `signals/cross-source-log/2026-06-04-anthropic-recursive-self-improvement-T1-verified.md` (Anthropic $47B annualized May 2026).

## Verified facts

Per [SEC SpaceX S-1 T1](https://www.sec.gov/Archives/edgar/data/0001181412/000162828026036936/spaceexplorationtechnologi.htm) + [Relve HQ T2](https://relvehq.com/blog/noise/spacex-ipo-amendment-water-risk-anthropic-compute-deal) + [Tesery T2](https://www.tesery.com/blogs/news/spacex-unveils-landmark-45-billion-ai-compute-deal-with-anthropic-in-ipo-filing) + [US News T2](https://money.usnews.com/investing/news/articles/2026-06-05/spacex-signs-cloud-deal-with-google) + [Tom's Hardware T2](https://www.tomshardware.com/tech-industry/artificial-intelligence/musks-spacex-has-rented-out-access-to-its-supercomputers-220-000-nvidia-gpus-and-300-megawatts-of-ai-compute-power-to-rival-anthropic-musk-says-no-one-set-off-my-evil-detector-antrhropic-also-interested-in-orbital-data-centers) + [DCD T2](https://www.datacenterdynamics.com/en/news/anthropic-to-use-all-of-spacex-xais-colossus-1-data-center-compute/) + [Introl T2](https://introl.com/blog/xai-colossus-2-gigawatt-expansion-555k-gpus-january-2026) + [SemiAnalysis T2](https://newsletter.semianalysis.com/p/xais-colossus-2-first-gigawatt-datacenter):

| Claim | Verified | Notes |
|---|---|---|
| SpaceX revised S1 disclosed Anthropic Cloud Services Agreement (May 2026) | ✓ | Filed pre-IPO June 12 |
| $1.25B/month × through May 2029 = ~$45B aggregate Anthropic deal | ✓ | Per S-1 breakdown |
| Combined Anthropic + Google deals = >$70B aggregate | ✓ | Per US News |
| Colossus 1 = 220K+ NVDA GPUs (H100/H200/GB200 mix) at 300MW | ✓ | Tom's Hardware |
| Colossus 2 expansion total site capacity to ~2GW; 555K GPUs at ~$18B | ✓ | Introl + SemiAnalysis |
| 325K GPU figure (Anthropic-accessible across both Colossus sites) | PLAUSIBLE | Consistent with 220K Colossus 1 + ~105K Colossus 2 portion |
| $29B per GW capex industry standard | ✓ with caveat | Epoch AI says $38B for full TCO |
| Per Elon: "short-term deal" | PLAUSIBLE | Consistent with Anthropic shopping multi-source strategy |
| Temporal freshness | FRESH | June 6-7 disclosure tied to June 12 IPO |

## Pushback on X user's unit-economics math (per invitation)

The "$25B revenue per GW vs $29B capex per GW" framing is directionally correct but materially OVERSTATES net ROIC in three ways:

### 1. TCO ≠ headline capex
Per [Epoch AI T2 TCO breakdown](https://epoch.ai/data-insights/ai-datacenter-cost-breakdown), 1GW AI DC full TCO = ~$38B vs $29B headline capex. Delta: depreciation schedule, power costs over 10-15yr lifespan, financing, maintenance. True ROIC on the 1.16x revenue/capex Year-1 ratio shrinks to **~30-50% per year ROIC** after all costs. Still excellent, but not "1.16x payback in 12 months."

### 2. Anthropic is the early-mover premium contract
$1.25B/mo for dedicated capacity locks in a strategic flagship customer. Future contracts at LOWER rates as more neocloud capacity comes online (CRWV / NBIS / CORZ / IREN ramping). Marginal $/GW revenue likely compresses 2027-2028.

### 3. "Short-term deal" framing matters
Anthropic at $47B annualized May 2026 (per `signals/cross-source-log/2026-06-04-anthropic-recursive-self-improvement-T1-verified.md`); paying $15B/yr to SpaceX = ~32% of Anthropic current revenue to a single compute partner. Not sustainable as static % unless Anthropic compounds to $80-100B+ annualized by 2027. Anthropic is shopping multi-source: parallel AWS Trainium + Anthropic-Google TPU + SpaceX. The "short-term" framing per Elon is Anthropic's leverage, not SpaceX's pricing instability.

### Net: load-bearing investable insight INTACT

IRR-driven AI capex spending is **rational, not bubble**. The supplier-side cohort captures a massive % of the $29-38B/GW capex flow regardless of exact ROIC realization. The bear case requires Anthropic revenue plateau scenarios, not "capex is irrational."

## Parallel hypotheses on the bigger picture (my model)

- **H1 (P=45%)** Unit economics directionally accurate; SpaceX/xAI = 3rd major capex peer (alongside MSFT/GOOG/META/AMZN); IRR math justifies $805B 2026 hyperscaler capex (Morgan Stanley); held supplier-side cohort thesis EXTREMELY confirmed
- **H2 (P=30%)** Unit economics overstated (TCO drag + Anthropic-premium pricing); IRR moderates 2027-2028; capex bends toward consolidation among winning neoclouds; cohort still positive but slower compounding
- **H3 (P=15%)** Anthropic revenue plateaus ($47B annualized today needs to support $15B/yr SpaceX + AWS Trainium + Anthropic-Google TPU + R&D); deals renegotiated 2028; capex bends earlier
- **H4 (P=10%)** Power-binding constraints prevent further $29B/GW expansion; SpaceX IPO valuation compresses on operational disclosure; broader DC capex re-rated DOWN

## Joint-state matrix on held cohort

| Position | SpaceX-Anthropic $45B deal | Net |
|---|---|---|
| HYNIX (8) | 325K NVDA GPUs (mostly GB200/300); ~6× HBM3E per GB200 = ~2M HBM3E stacks just for Anthropic-portion of Colossus 1+2 | + STRONG (overlays 6th convergent tier) |
| SNDK (4) | Exabyte-scale storage = direct NAND pull at hyperscaler tier | + |
| SUMCO (415) | Wafer pull for 325K GB200 GPUs at TSMC 3nm/4nm | + |
| MUR (201) | MLCC content per GB200 system | + |
| AGC (100) | PTFE CCL for high-freq interconnect in 2GW DC site | + MILD |
| ARM (20) | Grace CPU royalty in every GB200 system (Vera Rubin Olympus comes later) | + |
| Hirano (300) | Indirect via MURATA | + MILD |
| NOW/DDOG/MDB | Anthropic compute scaling validates agentic governance + observability + data layer thesis | + adjacent |

## N-th order cascade

- **1st order (P>80%, my model):** $45B Anthropic + $33B Google = $78B+ contracted SpaceX revenue locked in; SpaceX/xAI = 3rd-major capex peer source; supplier-side cohort captures massive % of GPU/HBM/MLCC/wafer flow
- **2nd order (P~60%, my model):** "Short-term deal" framing implies bidding war ramping for next Anthropic compute tranche; neocloud names (CRWV / NBIS / CORZ / IREN / APLD) compete for Anthropic contracts → ASPs supportive for supplier-side
- **3rd order (P~40%, my model):** Unit economics math becomes consensus framework justifying hyperscaler capex through 2027; explains rational basis for $805B 2026 capex (per Morgan Stanley)
- **4th order (P~20%, my model):** Anthropic IPO 2027-2028 emerges as next major liquidity event with similar magnitude implications to SpaceX

## SpaceX IPO June 12 recalibration (5 days away)

$78B+ contracted forward revenue from Anthropic + Google materially STRENGTHENS SpaceX IPO valuation case — compute business alone could justify substantial multiple. Per 2026-06-06 PM cascade (S&P 500 blocked fast-track inclusion), forced index rebalance is OFF; primary IPO absorption is the remaining liquidity-suck concern. **Net read on SpaceX IPO impact on held cohort: softer than initially modeled.** Hold position discipline (no reactive trim) continues to look correct.

## Position implications (Critical Rule #11)

**Held cohort:** ALL HOLD. Critical Rule #8. No change.

**Cash deployment trigger gates pending:** Iran binary / FOMC June 16-17 / SpaceX IPO June 12 / Murata Q1 FY27 print late July. SpaceX IPO specifically becomes a SOFTER catalyst than initially modeled.

**Watch follow-up:**
- Anthropic IPO timing (could be 2027); compute commitments become valuation inputs
- AWS Trainium multi-GW expansion announcements (Anthropic parallel compute source)
- Anthropic-Google TPU multi-gen deal contract details (per 2026-06-04 cascade)
- CRWV / NBIS / CORZ / IREN public neocloud valuations after SpaceX IPO comps

## Cascade actions

1. ✅ This verification artifact created
2. ⏭ HYNIX thesis updated with $45B Anthropic + GB200 HBM pull math
3. ⏭ Commit + push
