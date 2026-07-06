# Portfolio Coherence Audit — Pass 1

**Date:** 2026-05-20
**Type:** Fast classification, not deep research. Surfaces what to dig into in Pass 2.
**Source:** Holdings parsed from user screenshot 2026-05-20 (see `holdings.md`).

## TL;DR

11 positions. 3 are clearly **untested** (held without independent thesis) — STM, Tower Semi, T1 Energy. 3 are **defensible-but-need-modeling** — Murata, Corning, Sandisk. 5 have **clear theses** — SK Hynix, NOW, DDOG, AXTI (with timing caveat), Hyperliquid. ~19% of portfolio sits in untested positions. Recognition stages span the full 1–4 range. Cash position (38% per `holdings.md`) is disciplined risk-off ahead of NVDA earnings tonight — not a B9 emotional move.

## The audit table

| # | Position | % | Recognition Stage | Anti-Frag Read | Defendable Thesis? | Pass 2 action |
|---|---|---|---|---|---|---|
| 1 | SK Hynix (GDR) | 12.5% | 3–4 | High — wins in S1, S2, S3 | Yes (HBM3E/4 leader) | Model duration × magnitude × cycle position |
| 2 | Murata Manufacturing | 12.4% | 2–3 | High — MLCC across all electronics | Partial | Model AI-specific MLCC exposure |
| 3 | ServiceNow (NOW) | 12.0% | 3 | Medium-high — vertical SaaS 2nd life | Yes (agentic workflow) | Model agentic revenue contribution |
| 4 | Corning (GLW) | 10.8% | 2–3 | High — optical fiber mandatory at AI scale | Partial | Model fiber segment vs other Corning revenue |
| 5 | Sandisk (SNDK) | 10.8% | 1–2 | Medium — NAND cyclical but AI-storage benefit | Partial | Verify post-spinout structure; AI exposure |
| 6 | T1 Energy (TE) | 7.1% | 1 (per user — Aschenbrenner just bought) | Low-medium — AI-adjacent via clean power | **NO — needs reconstruction** | Full thesis from scratch |
| 7 | Datadog (DDOG) | 6.8% | 3 | High — observability needed across all scenarios | Yes (AI observability) | Model AI-specific revenue contribution |
| 8 | STMicroelectronics (STM) | 6.6% | 3 | ? — AI exposure unclear (autos + industrial + MCU) | **NO — needs reconstruction** | Full thesis from scratch (per user: came from 3rd-party rec) |
| 9 | Hyperliquid Strategies | 5.7% | 1–2 | Low — single-story (tokenization + AI agents on-chain) | Yes (per user rationale: tokenization legislation, Cerebras price discovery) | Model legislative catalyst, regulatory risk |
| 10 | Tower Semiconductor (TSEM) | 5.4% | 2–3 | ? — specialty foundry, AI exposure unclear | **NO — needs reconstruction** | Full thesis from scratch (per user: came from 3rd-party rec) |
| 11 | AXT Inc (AXTI) | 4.8% | 4 (CONFIRMED — see below) | Medium — InP/GaAs substrates for optical, RF | Partial (with timing caveat) | Decompose earnings-growth vs multiple-expansion; assess Stage 5 risk |

## Summary by recognition stage

| Stage | Positions | % of portfolio |
|---|---|---|
| 1 — Primary voices early | T1 Energy, Hyperliquid (lower bound) | ~13% |
| 1–2 | Sandisk, Hyperliquid | ~17% |
| 2–3 | Murata, Corning, Tower Semi | ~29% |
| 3 | NOW, DDOG, STM | ~25% |
| 3–4 | SK Hynix | ~13% |
| 4 | AXTI (per user — needs verification) | ~5% |

**Asymmetric setup remaining:** ~30% of portfolio at Stage 1–2 (where the bypass-route edge lives).
**Multiple compression risk rising:** ~43% at Stage 3+ (NOW, DDOG, STM, SK Hynix).
**Late-stage / stretched:** ~5% (AXTI).

## Summary by defensibility

| Bucket | Positions | % of portfolio | Implication |
|---|---|---|---|
| Defendable | SK Hynix, NOW, DDOG, Hyperliquid, AXTI* | ~42% | Keep, model in Pass 2 |
| Defendable with work | Murata, Corning, Sandisk | ~34% | Model exposure in Pass 2 to confirm |
| **Untested — no defendable thesis** | T1 Energy, STM, Tower Semi | **~19%** | Pass 2: full reconstruction OR sell |

* AXTI defensibility comes with the recognition-stage-4 caveat — thesis can be right but multiple risk is high.

## Cash position read

€51,673 cash (38% of total balance — per holdings.md). User rationale: derisked ahead of NVDA earnings today. Logic — if NVDA misses, better buying opportunities surface; if NVDA prints strong, deploy into strength or rotate within existing.

**Validation:** This is NOT B9 (emotional sell on macro headwind). This is disciplined risk-off ahead of a binary catalyst with explicit deployment logic for each outcome. Different psychological category. Preserves optionality — exactly what cash is for.

Note: the cash being in EUR while many positions are USD-denominated also creates an implicit FX position. Not a concern at current sizing but worth tracking if cash sits long.

## The post-NVDA scenario tree (user's two-scenario thinking, formalized)

This is the SCENARIO-UPDATE workflow primed to fire after earnings. Two branches:

### Branch A — NVDA misses (or guides weak)
Probability per `predictions/2026-05-20-NVDA-Q1FY27.md`: ~8% on revenue miss, but higher on "miss-the-whisper" (~35%).

**If AVGO, AMD, Intel print/trade strong concurrently:** the read is "AI race is not ending, momentum shifting from NVDA to custom Si." This is S2 from scenarios.md becoming the live scenario. Implications:
- Add to AVGO (if/when watchlist promoted to position) — primary S2 beneficiary
- Add to AMD (watchlist) — EPYC + MI inference
- SUMCO + Shin-Etsu become more important (silicon wafer demand isn't reduced; just shifts customer mix)
- Trim NVDA-correlated positions (none direct, but check if SK Hynix gets dragged short-term)

**If everyone trades weak together:** S4 (digestion) read. Implications: tighten universe, less aggressive deployment.

### Branch B — NVDA prints strong + guides strong
Probability: ~50%+ on consensus beat per my model.

Implications:
- Confirms S1 still playing, but doesn't invalidate S2
- Add to existing names that compound the bottleneck thesis: SK Hynix (HBM continues), Corning (optical), Murata (passive components)
- Consider new positions in bypass-route names from watchlist: AVGO (S2 hedge), MRVL, ALAB (HBM bypass via CXL)
- Trim weak positions: STM, Tower Semi if Pass 2 reconstruction fails

## Untested positions — the action question

19% of the portfolio is held without defendable theses. Two options for each:

| Position | % | Option A: Reconstruct thesis (Pass 2) | Option B: Sell |
|---|---|---|---|
| STM | 6.6% | Research from scratch; ignore 3rd-party rec | Free up ~€5.5K |
| Tower Semi | 5.4% | Research from scratch; ignore 3rd-party rec | Free up ~€4.4K |
| T1 Energy | 7.1% | Reconstruct clean-power-for-datacenters thesis; verify Aschenbrenner position | Free up ~€5.9K |

Combined: option B across all three frees up ~€15.8K to deploy into defensible-thesis names. Option A on all three costs me ~1.5 hours of research time. Mixed (e.g., reconstruct T1, sell STM + Tower) is also valid.

Recommendation: don't decide yet. Wait for NVDA outcome tonight. The scenario branch that plays will inform whether those €15.8K are better deployed in S1 winners (existing) or S2 winners (AVGO, AMD).

## AXTI verified data (added 2026-05-20 from user-provided brokerage screenshots)

| Data point | Value | Source |
|---|---|---|
| Current price | $102.87 USD on NASDAQ | per user screenshot 2026-05-20 |
| Today | -$10.01, -8.87% | per user screenshot |
| 1Y return | +$101.40, +6,897.96% (≈70x) | per user screenshot |
| YTD return | +$85.67, +498.08% (≈6x) | per user screenshot |
| Visible headline | "AXTI Surges More Than 650% YTD" dated May 18 2026 | per user screenshot |

**Reads from the verified data:**

1. User's "~75x" claim was directionally correct — actual is ~70x past year per the +6,897.96% figure. Close enough.
2. Recognition Stage 4 is confirmed. The May 18 headline ("What's Driving the Strong Uptrend") is exactly the mainstream-financial-press marker that signals Stage 3→4 transition. Anyone reading a "what's driving the surge" article is not getting in early; they're getting in at consensus.
3. Today's -8.87% is the first single-day pullback of material size. Could be (a) noise, (b) Stage 4→5 transition starting, (c) NVDA earnings derisking spilling over to small-cap AI-correlated names.
4. Position is ~15-20% off recent peak (my read from the YTD chart — approximate, not from a specific data point).

**The critical Pass 2 question (cannot answer without research):**

Of the +6,897.96% past-year move (per screenshot), what fraction is earnings growth vs multiple expansion? Decomposition:
- If mostly earnings: thesis is materially delivering. Stage 4 carries less risk because the next leg requires only "earnings keep growing." Hold or add on pullback is defensible.
- If mostly multiple: the re-rating has happened. Stage 5 risk is real. Multiple compression can take 30-50% off the stock even if the thesis is intact. Trim is defensible.

This decomposition requires:
- Trailing 4-quarter revenue + EPS growth rates
- P/S or P/E multiple trajectory (trough vs current)
- Comparison to peer compound semi names (or LITE, COHR, CRDO as adjacent comps)

**Elevated to highest-priority Pass 2 research item** after NVDA prints.

## What I deliberately did NOT do in Pass 1

- Verify AXTI's ~+75x 2025 claim (need to confirm price action before Stage 4 read is final) — ✓ NOW VERIFIED (see above)
- Verify Bloom Energy's recent earnings + price action
- Verify Aschenbrenner's T1 Energy purchase (plausible but unconfirmed)
- Look up Saxo / "Sotrina" Research's STM and Tower Semi reports
- Model duration × magnitude × pricing-power × recognition stage for any specific name (that's Pass 2)
- Promote SUMCO / Shin-Etsu beyond watchlist (need full research first)

## Pass 2 recommended sequence (after NVDA earnings outcome)

1. GRADE the NVDA Q1 FY27 prediction
2. Run SCENARIO-UPDATE based on actual outcome
3. Branch A (NVDA misses): deep-research AVGO + MRVL + ALAB before any deployment
4. Branch B (NVDA prints strong): deep-research the 3 untested positions (STM, Tower, T1) + Bloom Energy + SUMCO/Shin-Etsu
5. Make consolidation decisions in Pass 3 (Pass 3 = after Pass 2 research is done)
