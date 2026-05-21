# NVDA — Thesis

**Last updated:** 2026-05-20
**Tier:** Core (with reservation — see scenario exposure)
**Position target:** 8–12% of portfolio
**Anti-fragility:** 2.5/5 — wins in S1, partial S3, loses in S2 and S4

## TL;DR

NVDA is the dominant AI compute name today and the highest-quality way to express bullish 12–18 month views on AI infrastructure spend. The risk is that the stock is priced for S1 (continued dominance) while the optionality on S2 (custom silicon fragmenting inference) is real and growing. Highest-conviction trade is sizing around the supply ramp + Rubin transition, with active risk management as anti-fragility weakens.

## Bull case (P = 50%)
- Hyperscaler capex re-rated +77% to $725B in 2026; NVDA captures the majority of the compute layer
- CoWoS-L expansion through 2026 unblocks volume; revenue grows another 50%+ YoY in FY27
- Rubin samples shipping H2 FY27; production H1 FY28 — extends performance leadership another generation
- Networking attach (Spectrum-X, NVLink) keeps full-stack moat intact even as custom Si scales
- Sovereign AI demand becomes material contributor (UAE, Saudi, China H200)
- **Expected return: +30 to +50% over 12–18 months**

## Bear case (P = 25%)
- S2 plays — custom Si takes 30%+ of inference, NVDA gross margin compresses to ~70%
- Hyperscaler capex pauses for digestion in late 2026 / 2027 H1
- Major regulatory shock (Taiwan, China export controls) → 1–2 quarter air pocket
- Stock multiple compresses from ~30x to ~22x as the "dominant" narrative weakens
- **Expected loss: -20 to -35%**

## Base case (P = 25%)
- NVDA grows 30–40% in FY27 (deceleration from FY26's +65%)
- Multiple stays roughly flat
- Returns +15–25% over 12–18 months

## Falsifiers (mandatory — what would prove the bull case wrong)

1. **Gross margin breaks below 73% in any quarter.** Signals custom Si or hyperscaler bargaining power is starting to bite. Current 75%+ is the conviction-supporting metric.

2. **Hyperscaler capex grows <30% YoY in CY2027 guides.** Signals S4 (digestion) is playing. Watch the 2026 Q4 / FY27 capex guides at MSFT/GOOG/META/AMZN.

3. **Custom Si revenue line items disclosed by hyperscalers exceed ~$15B annualized within 12 months.** Signals S2 is materially playing — NVDA is still big, but the "everyone needs NVDA" narrative weakens.

## Exposure to scenarios
- S1 (NVDA dominant) — WINS — primary beneficiary
- S2 (custom Si fragments) — LOSES — margin compression visible
- S3 (power binds) — MIXED — efficiency premium helps; volume ceiling hurts
- S4 (digestion) — LOSES — high-multiple name; air pocket on capex pause
- S5 (regulatory shock) — LOSES — Taiwan-concentrated, single-customer-concentrated

## Exposure to causal chains
- `agentic-scales.md`: 1st order (W) + 3rd order (compress) → mixed
- `inference-takes-over.md`: 1st order (W) + 3rd order (compress) → mixed
- `power-becomes-binding.md`: 2nd + 3rd order (mixed → W on efficiency)
- `sovereign-ai-scales.md`: 1st + 2nd order (W) → bull

## Exposure to themes
- T1 Agentic rebalance — partial beneficiary (loses GPU:CPU ratio battle marginally)
- T2 Power binds — mixed (efficiency story helps)
- T3 Networking — Win (Spectrum-X full-stack)
- T4 Custom Si fragments — **Loss** — the key risk
- T5 Observability — Neutral
- T6 Sovereign AI — Win

## Position sizing logic

Core (8–12%) is justified because:
- Highest absolute earnings growth in the universe
- Lowest fundamental risk in a 12-month horizon
- Best liquidity for actively managing sizing as scenarios reweight

NOT larger (15%+) because:
- Anti-fragility only 2.5/5 — loses meaningfully in S2 and S4
- Already a 30x P/E name; multiple compression risk if growth decelerates
- Concentration risk from Taiwan/TSMC dependence

## Sources
See `predictions/2026-05-20-NVDA-Q1FY27.md` for current quarter forecast.
See `facts.md` for the underlying financials.
See `interpretations.md` for evolving reads on management commentary.

## Cross-source synthesis — Patel + Aschenbrenner (added 2026-05-21)

Per `research/meta/patel-vs-aschenbrenner-thesis-comparison.md`:

- **Patel: SHORT-TERM IMPLICIT BULLISH, LONG-TERM BEARISH ON SHARE.** Capacity-constrained for years (his bottleneck-evolution model puts fabs binding 2026+ per [Latent Space Feb 2026](https://www.latent.space/p/dylanpatel-cooking)); Grace Blackwell improvement over Hopper 50x per Patel's estimate vs Jensen's public 35x figure (triangulated across multiple interviews). LONG-TERM: NVDA inference market share 90%+ → 20-30% by 2028 per [Benzinga Aug 2025](https://www.benzinga.com/markets/equities/25/08/47202594/nvidias-reign-at-risk-dylan-patel-says-googles-tpu-amazons-trainium-could-outshine-gpus-if-sold-to-public).
- **Aschenbrenner: BEARISH** — $1.57B notional NVDA puts (largest single individual short in his book) per `research/signals/events/2026-05-21-aschenbrenner-q1-13f.md`. Multiple compression call.
- **Implication:** **STRONGEST direct disagreement between the two voices in our universe.** Reconciliation: both views can be right on different timelines — fundamentals continue to beat (Patel near-term) AND multiples compress (Aschenbrenner) in classic Stage 4-5 dynamic per `meta/methodology.md` Recognition Stage spectrum. Long-term, custom-Si fragmentation favors AVGO over NVDA. **Position implication:** NVDA is for fundamental-exposure trades, not multiple-expansion. User's lack of NVDA position is defensible given Stage 4 + bidirectional risk surfaced here. Pair-trade construction (long custom-Si beneficiary like AVGO + short NVDA via puts) would mirror Aschenbrenner but require active management; not currently in plan.
