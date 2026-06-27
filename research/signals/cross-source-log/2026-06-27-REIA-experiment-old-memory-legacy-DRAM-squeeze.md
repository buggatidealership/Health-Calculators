# REIA Experiment #1 — "Old Memory" (legacy DRAM/NAND squeeze) — Independent Analysis — 2026-06-27

**Method:** Reverse-Engineered Independent Analysis (REIA) — user-proposed 2026-06-27. Title-as-pointer ("Morgan Stanley — Old Memory: Better to Buy More") → decompose to variables → fetch variables blind to the note → synthesize independently → author as check. Author's note NEVER read. 1 Opus 4.8 variable-fetch subagent; main-loop synthesis.

**Verdict: legacy memory tightness is REAL and largely durable (H1 P~55%, my model). Direction agrees with MS title; independent analysis SHARPENS it — the trade is legacy PURE-PLAYS (Nanya/Winbond/Macronix), not the exited majors; TC-12 margin-inversion now extends to legacy-DRAM-beats-HBM; B28 analyst-lag caveat (Nanya already +583%).**

---

## VARIABLE DECOMPOSITION (the "research guide", LLM-native from title)
Question: is legacy/old memory (DDR4/DDR3, older NAND) entering its own tightness cycle = a buy?
Function: `legacy ASP = f(supply-exit-rate, residual-demand-inelasticity, China-substitution)`
- V1 legacy price trend; V2 supply-exit rate; V3 residual-demand inelasticity; V4 supply-demand gap; V5 who captures the ASP kicker + CXMT-cap; V6 legacy-NAND parallel.

## VARIABLES FETCHED (subagent, T1/T2, 2026-06-27 — full sourcing in subagent transcript)
- **V1:** DDR4 spot +2,200% YoY peak (Digitimes T2); DDR4 $/Gb $2.10 > HBM3e $1.70 (Accio T3); 16GB DDR4 kit $60-90→$150-180 Oct'25→Jan'26 (Tom's T1); shortage cascading DDR4→DDR3→DDR2 (+60%) (TrendForce/TPU T1, Jun-22); Gartner DRAM +130% YoY 2026. Spot peaked ~Apr'26, "historically elevated."
- **V2:** SK Hynix 1z DDR4 EOL final-ship Apr'26 (Digitimes T1); Micron mainstream Q1'26 (Astute T2); Samsung delayed via NCNR server-earmarked (Tom's T1); **DDR4 capacity end-2026 ~20-25% of 2024** (Sourceability T2); Micron retains 1α DDR4 auto/defense/industrial low-vol tail.
- **V3:** auto AEC-Q100 multi-year qual / "2028 cliff"; industrial board-redesign barrier (panic-buying confirmed); legacy-server installed base; telecom/defense (Micron retention list). Structurally inelastic.
- **V4:** DDR4 lead times 20-30wk; DDR3L 39+wk; allocation-only "new norm"; Nanya Q3'26 capacity fully allocated (Digitimes T1).
- **V5 (load-bearing):** **Nanya 2408.TW ~90% DDR4/LPDDR4 — Q1'26 rev +582.9% YoY, ASP +70% QoQ/+200% YoY, GM 67.9%, net 53.1%** (TechPowerUp/Nanya IR T1); **TrendForce May'26: "GM across ALL DRAM segments now top HBM"** (T1) = TC-12 extension; Winbond sold out through 2027 + new 16nm 8Gb DDR4 MP 2026; SK Hynix Wuxi DDR4 (~200k/550k wafer starts, US-export-capped node). **CXMT cap = PARTIAL/tier-specific:** ~40% capacity LPDDR4X refills Samsung's mobile-exit gap (China-captive Qualcomm/MediaTek; ~350k wspm, US-export-capped) but does NOT fill DDR4 server/industrial.
- **V6:** MLC NAND capacity -42% YoY 2026 (TrendForce T1); Samsung MLC EOL Jun'26; Macronix +382% YoY rev, monthly pricing (T1); SLC/MLC +300-500%; same exit-squeeze pattern.

## INDEPENDENT SYNTHESIS (main-loop, my LLM-native analysis — NOT the author)
**Mechanism = bypass-route supply-exit squeeze (Critical Rule #9):** majors vacate legacy → inelastic residual demand → price spike → rent accrues to who STAYED (pure-plays), not the exiting majors.
- **H1 (P~55% my model):** durable 18-24mo legacy squeeze (structural exits + 2028-locked demand + partial CXMT backfill).
- **H2 (P~30% my model):** sharp-but-transient; CXMT + restarts (Winbond 16nm, Macronix capex, Nanya NT$52B fab) backfill 12-18mo; spot already rolling over (peaked Apr).
- **H3 (P~15% my model):** demand destruction — DDR4>HBM3e prices force-migrate to DDR5 / delay purchases.
- **Beneficiary insight (the title misses this):** cleanest expression = legacy pure-plays (Nanya/Winbond/Macronix), NOT "buy more [majors]." Majors capture spike on declining volume.
- **CXMT-cap falsifier (resolved):** partial/tier-specific — caps mobile LPDDR4X, not DDR4 server/industrial → supports H1.

## AUTHOR-CHECK (Step 4 — compare to MS implied claim)
MS "Better to Buy More" = bullish legacy. Independent read AGREES on direction, SHARPENS expression (pure-plays + TC-12 extension), adds **B28 analyst-lag caveat** (Nanya already +583% = consensus is LATE on the pure-plays; "buy more" partly chasing in-price move). Method validated: reached + sharpened the conclusion without reading the note.

## CASCADE (Critical Rule #10, same commit)
- HYNIX: mild-positive residual-DDR4 ASP kicker (Wuxi, spike-on-declining-volume); confirms TC-1 regime; extends TC-12 (legacy-DRAM-margins-top-HBM). HOLD.
- triangulation TC-12: margin-inversion EXTENDS to legacy (Nanya GM 67.9% > HBM; "all DRAM segments top HBM"); TC-1: DDR2/DDR3 cascade N+1.
- watchlist/candidates.md: Nanya (2408.TW), Winbond, Macronix — legacy-memory pure-plays, INVESTABILITY-CHECK-REQUIRED (Taiwan TWSE — likely outside Degiro per KRX-style filter).
- subagent-cost-yield-ledger: 1-fire (variable-acquisition) + REIA method N=1.

## METHOD CODIFICATION
REIA worked N=1 → codify Workflow #11 candidate (see methodology.md). Falsifier: if future REIA runs just reproduce what reading the note gives (no sharpening/divergence) → method is elegant but not additive, retire.
