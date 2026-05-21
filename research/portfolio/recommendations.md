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
