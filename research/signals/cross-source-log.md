# Cross-Source Signal Log

**Last updated:** 2026-05-27

Weak/single-source signals. When ≥3 independent sources converge on the same direction within 90 days, promote to `triangulation.md` (per principle #29: segment-classify each source before promoting).

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
