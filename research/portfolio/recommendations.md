# Portfolio Recommendations — Pending Actions

**Last updated:** 2026-05-21
**Purpose:** Staging area for pending portfolio rotation decisions. Differs from `changes.md` (which logs executed trades). Recommendations sit here until (a) the holistic view of all portfolio names is complete AND (b) a corresponding entry/double-down candidate is identified.

**Trade-off rule (user 2026-05-21):** Every exit needs a corresponding entry OR doubling-down on existing position. No naked exits. Build the holistic view first, then make the rotation decision.

## How this file is used

1. When analytical work surfaces a recommendation (trim, exit, add), it lands here with status `PENDING`
2. When the holistic view is complete AND a matching destination exists, status moves to `READY`
3. When user executes, the action moves to `changes.md` and the recommendation is deleted (or moved to a brief archive line)

---

## Pending recommendations

### [2026-05-21] TRIM Corning (GLW) from ~10.8% to 5–7% target
**Status:** PENDING — awaiting (a) user entry-price confirmation, (b) holistic view of other positions, (c) destination for freed-up capital.

**Rationale:** Recognition Stage 4, ~100x trailing P/E vs sector median ~44x (per [Seeking Alpha](https://seekingalpha.com/article/4890186-corning-looks-overvalued-until-you-drill-down-and-see-all-thats-here-buy)). Only ~37% of revenue passes Token-Volume Filter. Anti-fragility 3/5 — solid but not Core-tier. Aschenbrenner has puts on GLW per `research/signals/events/2026-05-21-aschenbrenner-q1-13f.md`. Per L2/L3 — fundamentals intact, but Stage 4 + multiple makes asymmetric setup bear-direction at current price.

**Magnitude:** sell ~40–50% of the position. Frees up ~5–6% of portfolio for redeployment.

**Destination candidates:**
- Double-down existing position (SK Hynix already 12.5%, NOW 12.0%, SNDK 10.8% — all candidates)
- New position in a higher-conviction Aschenbrenner-surfaced name (BE, CORZ, CRWV, IREN, APLD)
- New position in a watchlist name passing the Token-Volume Filter cleanly (AVGO, AMZN, NBIS, ALAB)

**Decision deferred until:** (a) holistic view of all 11 portfolio positions complete, AND (b) Q2 2026 GLW earnings (late July 2026) confirms Optical Communications growth sustainment.

**Refinement 2026-05-21:** Per the new Forward Mix Probabilistic Model in `meta/methodology.md`, the static-mix bear case (37% AI today) materially weakens if OC growth sustains. Forward-mix math implies OC reaches ~60% of revenue by year 5 under base-case growth. This makes the trim recommendation MORE CONDITIONAL on OC growth — wait for Q2 2026 print as the trigger. If OC growth holds >30% YoY in Q2, the trim is smaller (maybe to 8% not 5-7%); if OC growth <25%, trim to 5% or further.

**Linked:** `research/companies/GLW/thesis.md`, `research/companies/GLW/interpretations.md` (2026-05-21 later entry)

---

### [2026-05-21] ADD Datadog (DDOG) from ~6.8% to 8–10%
**Status:** PENDING — awaiting user decision + funding source determination.

**Rationale:** Per `companies/DDOG/thesis.md`. Anti-fragility 4/5 (among portfolio highest). Token-Volume Filter passes cleanest. Per `wiki/agentic-ai-enterprise.md`: 64% of failed agentic deployments cite eval/observability as #1 blocker — observability is the mandatory enterprise spend, not discretionary. Per `wiki/agentic-workload-scaling.md`: span volume scales with token workload (50-80× over 24 months). Generalist analysts apply software-typical 30% CAGR; workload-driven reality is materially higher.

**Magnitude:** Add ~1.2-3.2 pp to position (~1-2.5% of portfolio in dollar terms depending on target).

**Funding source candidates:**
- From cash (38% per `holdings.md`)
- From GLW trim (if executed)
- From a combination

**Decision deferred until:** (a) holistic view complete, (b) GLW Q2 print outcome.

**Linked:** `research/companies/DDOG/thesis.md`

### [2026-05-21] ADD Broadcom (AVGO) — new position 5–8%
**Status:** PENDING — high-priority new position.

**Rationale:** Per `companies/AVGO/thesis.md`. The structural S2-scenario play. AVGO holds ~60% AI ASIC design partnership share; partners with 4 of 5 frontier model providers. Q1 FY26 AI revenue $8.4B (+106% YoY); 2027 line-of-sight >$100B. Anti-fragility 3.5/5; Execution Quality 4.75/5 (highest in OS universe). User has ZERO custom-Si-S2-hedge exposure currently.

**Magnitude:** 5-8% new position.

**Funding source candidates:**
- From cash (preferred — clean entry)
- From GLW trim (paired-trade narrative — exit a Stage 4 multiple-compression risk into a similarly-stage but higher-execution-quality name)

**Decision deferred until:** holistic view complete + user decision on rotation philosophy.

**Linked:** `research/companies/AVGO/thesis.md`

### [2026-05-21] ADD Nebius (NBIS) — new position 3–5%
**Status:** PENDING — capacity-constrained pure-play.

**Rationale:** Per `companies/NBIS/thesis.md`. Q1 2026 revenue $399M (+684% YoY) per SEC 6-K. Microsoft $17.4-19.4B + Meta combined ~$46B contracts. 3.5GW power → 4GW year-end target. Forward guidance $7-9B ARR by year-end 2026. Pure-play capacity-constrained beneficiary. Recognition Stage 2-3 — asymmetric setup remains.

**Magnitude:** 3-5% new position (smaller than AVGO due to higher execution risk + customer concentration).

**Funding source candidates:**
- From cash
- From GLW trim

**Decision deferred until:** holistic view + GLW Q2 print outcome.

**Linked:** `research/companies/NBIS/thesis.md`

---

## Archive of completed rotations

(none yet)

---

## Notes on rotation philosophy

Per user direction 2026-05-21:
- Everything is a trade-off
- Smaller-cap names may have more asymmetric setup but more volatility
- Cross-domain pattern recognition that surfaces likely beat-and-raise candidates is high-value
- Early-stage names (less analyst coverage) carry more potential alpha if my thesis is right
- Holistic view first; rotation second
