# AI Intelligence Brief (2026-06-30 morning, 81 sources) — triage + Rubin-CPX verification fired

**Trigger:** User-shared AI brief. Critical Rule #16 triage. Most items confirming/noise → logged; ONE genuinely-new technical item (Rubin CPX) fired for verification (the rest = no spend, per restatement-penalty + cost discipline). All figures below per the user-shared brief (T2/T3) unless noted.

## Triage (held-book relevance)
- 🟢 **S. Korea ~$1T "3S+1F" AI/semi plan** (~1 quadrillion won; memory + humanoid robotics; Ars Technica) — state-backed memory/semi demand floor → mild REINFORCE (SK Hynix domestic support; the "state-directed demand" theme from 2026-06-30 KJ Leg B). Confirming, known direction. No fire.
- 🟢 **xAI Colossus 2 = first gigawatt datacenter** (~200k H100/H200 + ~30k GB200 NVL72; SemiAnalysis T1) — reinforces memory-demand (HBM) AND the power-bottleneck / power-infra diversification leg (gigawatt = the constraint). Confirming. No fire.
- 🟡 **NVIDIA Rubin CPX — prefill accelerator, "compute over memory bandwidth"** (SemiAnalysis) — THE one to verify: could change HBM-per-system intensity (intersects the just-validated memory thesis). **Verification FIRED.**
- 🟡 DRAM price-fixing lawsuit (Samsung/SKH/Micron, N.California; HBM shift = cover to curtail DDR3/DDR4) — legal tail for SK Hynix (held); low near-term, TRACK (noted 2026-06-29 too).
- 🟡 GPU-bubble/overcapacity (Moondream T3) + AI-jobs report +10.2% headcount/+12% entry-level (TechCrunch) — feed the 2028-oversupply / demand-durability debate (already tracked + the end-demand-durability todo). Thematic, no fire.
- ⚪ NOISE: GPT-5.6 (Sol/Terra) release, Railway $100M, Listen Labs $69M, Ollama MLX, Open Memory Protocol, Anthropic Cowork, Base44, Salesforce Slackbot, all Research items, Imec 0.3nm-by-2038, jailbreaks, TIDAL, OWASP.

## Rubin CPX — why it earned the one fire (priors, my model)
A prefill-optimized accelerator emphasizing FLOPS over memory bandwidth could move the HBM-per-system math (load-bearing for the SK Hynix #1 thesis just reinforced 2026-06-30):
- H1 (~50%) ADDITIVE/EXPANSIONARY — disaggregated prefill+decode = more total accelerators; CPX on GDDR7 = incremental memory while decode stays HBM-heavy → net MORE total memory TAM (HBM+GDDR; SK Hynix makes both). Bullish/neutral.
- H2 (~30%) mild HBM HEADWIND — prefill compute moving off HBM to GDDR → HBM bit-demand grows slightly slower than the all-HBM model.
- H3 (~20%) noise — niche prefill SKU; decode+training dominate HBM demand.

## ✅ RUBIN-CPX VERIFICATION RESULT (Opus 4.8) — 🟡 B40 STALENESS CAUGHT + mild-REINFORCE/NEUTRAL for SK Hynix; the *architecture* (prefill-off-HBM) survives as a 12-24mo second-derivative watch
**The brief's premise is ~3 months STALE (B40):** Rubin CPX (128GB **GDDR7** prefill chip, announced 2025-09-09 T1) was **REMOVED from NVIDIA's roadmap at GTC 2026 (March 2026)** — reportedly *because GDDR7 sourcing was too hard / memory makers reluctant to ramp a low-visibility GDDR7 line* (they prefer HBM economics). **Replaced by Groq 3 LPX (SRAM-based) via a ~$20B Groq licensing deal**; may return with Feynman (~2028). 3+ sources converged on the removal (Tom's/wccftech/TheElec, T2); permanence vs deferral NOT CONFIRMED (NVIDIA VP hedged).
- **Immediate HBM-headwind (H2) DID NOT HAPPEN** — the GDDR7-prefill dilution vector was cancelled. Decode stays HBM4-heavy (R200 288GB). **SK Hynix ~60-70% of NVIDIA Rubin HBM4 intact** (TrendForce T2); GDDR7 = commodity-margin anyway (vs HBM ~71.8% OM Q1'26) so the lost CPX-GDDR7 socket costs SK Hynix little. The supply chain effectively *rejected* the headwind — mildly POSITIVE read (HBM remains the indispensable, margin-rich layer).
- **🔭 THE REAL SIGNAL (lateral, survives the cancellation):** the *architectural thesis* — "prefill doesn't need HBM bandwidth" — is **validated and shipping via Groq SRAM LPUs.** Over a 12-24mo horizon, ANY successful prefill-offload (CPX/Groq/Feynman) is a genuine **MILD dampener on the HBM bit-demand GROWTH RATE (second derivative), NOT absolute demand** (decode + training keep expanding). B45: dampens the rate, not the level — do NOT call it "extreme." **= a bottleneck-of-tomorrow / next-bottleneck flag** for the 2027+ HBM-growth-durability watch (co-located with the end-demand-durability gap + the 2028 rebalance).
- **Net SK Hynix: mild-REINFORCE / NEUTRAL** — CPX cancellation removes a small HBM-dilution risk + preserves HBM4-decode TAM; the prefill-off-HBM architecture is a 12-24mo growth-RATE watch, not a today-trade.

## CASCADE
- No held-name change from the brief itself (confirming/noise). DRAM-lawsuit = TRACK (low). 
- Rubin CPX verdict → cascade to HYNIX on return.
- ledger: 1 Opus fire (Rubin CPX) pending; no fire on the rest (auditable skip).
