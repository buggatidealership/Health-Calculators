# AI Intelligence Brief (June 26 Evening) — 3-Subagent Verification + MRVL Rule #17 Ensemble — 2026-06-27

**Trigger:** User-shared "AI Intelligence Brief, June 26 2026 Evening Edition, 81 sources." Critical Rule #16 → triage (TIER A/B/C/D) → 3 Opus 4.8 verification subagents on TIER A clusters, then Critical Rule #17 ensemble (3 judges) on the MRVL sizing call. Today 2026-06-27.

**Headline:** Two B40.1 staleness catches (MRVL Trainium deal April 20; HBM-cluster items Sept-2025/roadmap-removed), one genuinely-new structural bear vector (Rubin CPX GDDR7-substitution, DEFERRED 2028), one verified TRIM (MRVL, ensemble 3/3 → 5%).

---

## TIER A — verified

### A1. OpenAI "Jalapeño" inference chip w/ Broadcom — REAL (June 24 tape-out)
- 9-month design→tape-out (claimed fastest HP-semi ASIC cycle); engineering samples running GPT-5.3-Codex-Spark; deploy end-2026; 1.3GW chips 2027; 10GW by 2029; gen-2 2028 on TSMC A16. (T0 OpenAI blog + Broadcom IR + Bloomberg/CNBC, June 24 2026.)
- **AVGO role:** OpenAI-designed, Broadcom-implemented (silicon impl + tape-out) + Tomahawk-6 networking (1.6 Tbps, likely higher-margin) + Celestica rack integration. Design-services revenue (not IP-royalty). **$73B AVGO AI backlog now confirmed real**; OpenAI = XPU customer #5/#6 (after Google/Meta/Anthropic + 2 unnamed). Hock Tan: "tens of billions" OpenAI spend.
- **HBM supplier (load-bearing for HYNIX):** **Samsung HBM4 EXCLUSIVE on Jalapeño gen-1 CONFIRMED** (Digitimes Mar 2026 + 4+ Korean outlets; 800M Gb 12-Hi HBM4 H2'26 ≈ 7% Samsung HBM output). **SK Hynix ZERO direct gen-1 allocation.** The H2 bear flag "100% Samsung HBM4" = ACCURATE.
- **Gen-2 (2028) HBM supplier = UNDETERMINED** — multi-source qualification standard; SK Hynix HBM4E samples (June 2026) = path back in. = next load-bearing data point.

### A2. Amazon multi-GW Trainium + Anthropic — REAL but STALE FRAMING (deal April 20 2026, 67 days old)
- B40.1: SemiAnalysis "breaking" framing is a recirculation of the April 20 Amazon-Anthropic deal ($25B Amazon→Anthropic; $100B+ Anthropic→AWS; 5GW Trainium). Already in the market — do NOT re-rate on freshness.
- **Trainium socket (MRVL held 8.0%):** Marvell LOST Trainium 3 AND 4 silicon DIE-DESIGN to **Alchip** (back-end/package) + Annapurna (in-house front-end). Confidence 75% (Benchmark Dec-2025 Buy→Hold downgrade + SemiAnalysis + TrendForce converge). Root cause: MRVL Trainium-2 RDL-interposer execution failure.
- **BUT revenue ≠ die-design:** MRVL retains 5-yr multi-product AWS deal (Dec 2024: optical DSPs, PCIe retimers, Ethernet, DCI, photonic fabric + $3.25B Celestial AI acq Feb 2026). Q1 FY27 rev $2.418B +28% YoY (T1 SEC 8-K); DC ~76%; FY27 guide ~$11B (+30%), FY28 ~$15-16.5B (+40-45%); custom-silicon ~$1.5B FY26 +20%+ guided. Wells Fargo models $5.5-6B Trainium-only rev 2027-29 (PT $195) — may embed die-design content MRVL no longer has.
- **THE UNDISCLOSED SWING VARIABLE:** % of MRVL custom-silicon line that is Trainium die-design fees vs interconnect/photonics — NOT public. Majority die-design → FY2028 air-pocket bear; minority → bull holds.

### A3. HBM-demand cluster — all REAL, STALE FRAMING; net BULL 12-24mo
- **Nvidia Rubin CPX:** REAL (announced Sep 9 2025) but **REMOVED from roadmap at GTC March 2026** (deferred to Feynman ~2028; Groq-3 LPU took decode). **Uses ZERO HBM** — GDDR7 128GB for prefill (compute-bound, not bandwidth-bound), ~5× lower memory cost. The "game changer 2nd-only-to-Blackwell" quote is Oct-2025 SemiAnalysis, 8mo stale; brief omitted the cancellation = selective stale framing.
- **Huawei Ascend HBM-gated:** STRONGLY CONFIRMED (T1 SemiAnalysis + TechPowerUp + ChinaTalk). SMIC die capacity >1M chips/yr but binding constraint = HBM (CXMT ~2M stacks 2026 → 250-300K Ascend-equiv; Samsung-stockpile phase 1; CXMT HBM3/Huawei HiBL phase 2). **Even fully-sovereign Chinese compute is HBM-gated** = strong TC-1 structural confirmation.
- **xAI Colossus 2:** REAL facility, "world's first gigawatt" DISPUTED (Tom's Hardware satellite Jan 2026 = ~350MW cooling; 1GW ~May 2026 per Epoch). ~555K GPUs reported; ~60-80M HBM stacks cluster-level. Scale trajectory (3-5× Colossus 1 in <12mo) intact regardless.

### NEW STRUCTURAL BEAR VECTOR (log as 2028 falsifier-watch, NOT near-term)
**Disaggregated-inference HBM-substitution:** Rubin CPX (prefill→GDDR7) + Groq LPU (decode→SRAM) = a path where BOTH inference phases migrate off HBM, leaving training as the HBM anchor. Prefill grows with context length (fastest-growing inference dim). **DEFERRED to Feynman 2028** (CPX off 2026 roadmap; R200 HBM4-heavy dominates 2026-27). Real long-horizon risk to the memory-intensity-per-inference-chip assumption; monitor for Feynman architecture + disaggregation adoption rate.

## TIER B — framework note (no fire)
- GPT-5.6 "Sol" government user-vetting (first federal control over commercial model access) + Anthropic Mythos 3-week shutdown = **PC-14 Sovereign-AI Bifurcation Doctrine live** (government controlling model *access* = the doctrine's shield-and-shutdown arm). Framework data point, no position implication.

## TIER C/D — discovery only (outside memory-semi mandate, logged not pursued)
Railway $100M (AWS-challenger cloud), Listen Labs $69M, Cowork, Goose, Salesforce Slackbot, ABC-130K robotics dataset, RiVER/REGEN research, NHTSA brake-pedal rule.

---

## CRITICAL RULE #17 ENSEMBLE — MRVL TRIM vs HOLD (FIRST LIVE TEST)
3 independent Opus 4.8 judges, identical verified evidence packet, independent samples:

| Judge | Call | Conviction | Rationale |
|---|---|---|---|
| 1 | TRIM 8%→5% | MEDIUM | trim the uncertainty premium not the name; undisclosed split + 8% = asymmetric |
| 2 | TRIM 8%→5% | MEDIUM | can't size as if you have conviction you don't have; AWS deal locks categories not $ |
| 3 | TRIM 8%→5% | MEDIUM | bull needs 4 things true, bear needs 1; Wells $5.5-6B model is the landmine |

**RESULT: 3/3 TRIM → 5.0%, all MEDIUM. Strong consensus; medium band correctly encodes the undisclosed-variable uncertainty.** Re-add trigger (all 3 converge): MRVL discloses die-design is MINORITY of custom-silicon revenue OR Trainium-4 socket win. Stop: FY2028 guide cut >15% on custom-silicon miss.

**My (main-loop) Rule #18 dissent on the ensemble:** (a) shared-prior risk — all 3 got my evidence framing, so 3/3 partly reflects my pre-loaded "undisclosed split = central tension"; (b) Critical Rule #8 — die-design loss is NOT a written MRVL falsifier, so this must be framed as RIGHT-SIZING-to-conviction, NOT thesis-falsification panic-exit. Reconciliation: trim-to-5% (still meaningful overweight) is legitimate conviction-sizing, survives dissent. **Recommendation: TRIM 8%→5%; actual trade = USER decision (Rule #11 material-sizing gate).**

---

## CASCADE (Critical Rule #10, same commit)
- MRVL thesis: TRIM-WATCH → **TRIM RECOMMENDED 8%→5%** (ensemble 3/3 + re-add trigger + FY2028 stop); trade pending user execution
- HYNIX thesis: Jalapeño Samsung-exclusive CONFIRMED but BOUNDED (B45 share-vs-$); NEW Rubin-CPX-disaggregation 2028 falsifier-watch; Huawei HBM-gated TC-1 reinforcement
- triangulation.md: TC-1 → N=21+ (Huawei HBM-gated even with fab sovereignty); TC-13 → +1 (Colossus 2 gigawatt-class)
- subagent-cost-yield-ledger: 6-subagent fire (3 verify + 3 ensemble)
- AVGO (tracked, not held): $73B backlog confirmed + OpenAI XPU #5/6 — noted here, no thesis file
