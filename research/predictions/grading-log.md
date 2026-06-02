# Grading Log — Open + Resolved Predictions

**Last updated:** 2026-06-02

## TL;DR

Index of every prediction made by the system. Each row resolves to "pending" or "graded." When an event passes its resolution date, run GRADE workflow.

## Pending

*(none — all resolved as of 2026-06-02)*

## Graded

| Date made | Resolution | Ticker | Event | Prediction file | Grade file | Outcome |
|---|---|---|---|---|---|---|
| 2026-05-20 | 2026-05-20 | NVDA | Q1 FY27 earnings | `2026-05-20-NVDA-Q1FY27.md` | `2026-05-20-NVDA-Q1FY27-GRADE.md` | RIGHT direction (beat all 4); Q2 guide upside underweighted; L4 added |
| 2026-05-26 | 2026-05-27 | MOD | Q4 FY26 earnings + FY27 guide | `2026-05-26-MOD-Q4FY26.md` | `2026-05-26-MOD-Q4FY26-GRADE.md` | RIGHT direction all 4 targets; EPS magnitude undercalled ($1.71 vs $1.52-1.58 range); CS margin recovery only +80bps not +200bps. 0 falsifiers fired. L6, L7, L8 added |
| 2026-05-27 | 2026-05-27 | SNOW | Q1 FY27 earnings + FY27 guide + Cortex AI run rate | `2026-05-27-SNOW-Q1FY27.md` | `2026-05-27-SNOW-Q1FY27-GRADE.md` | Beat-and-raise across all 4. Revenue $1.33B vs $1.275B predicted ($55M above point). FY27 raise $5.84B = CLEAN HIT within band. NRR 126% — WRONG DIRECTION (predicted 124% dip; actual UP). Cortex run rate not re-quantified but mgmt confidently reframed to volume metrics. 0 falsifiers fired. $6B AWS pact bonus signal. L9 + L10 added. Stock +25% AH |
| 2026-05-27 | 2026-05-27 (fundamental) + 2026-05-28 (stock-reaction) | MRVL | Q1 FY27 earnings + Q2 guide + custom Si FY27 outlook commentary | `2026-05-27-MRVL-Q1FY27.md` | `2026-05-27-MRVL-Q1FY27-GRADE.md` | Direction RIGHT on Targets 1, 2 (partial — at consensus), 5; partial-vintage-miss on Target 4 (FY28 reveal not FY27); reasoning-error catch on Target 3 (sequential conflated with YoY). Revenue $2,418M (vs $2,470 predicted = -2.1% over-shoot). Q2 guide $2,700M (predicted $2.65B+ = HIT). FY27 raised to $11.5B + FY28 NEW $16.5B (+45% YoY) — MISSED CATEGORY (multi-year guide raise not in original prediction targets). Supply-Chain-Cohort Calibration framework PARTIALLY validated; NOT codified yet (N=1). Stock -1.96% pre-market despite green tape (Iran-US deal macro) = Stage 3-4 validated. L11 + L12 + L13 added |
| 2026-05-29 | 2026-06-01 (fundamental) + 2026-06-02 (stock-reaction T+24h) | HPE | Q2 FY26 earnings + Q3 guide + FY26 outlook (2ND application Supply-Chain-Cohort Calibration framework) | `2026-05-29-HPE-Q2FY26.md` | `2026-06-01-HPE-Q2FY26-GRADE.md` | **MASSIVE BEAT — CATEGORY EVENT**. Revenue $10.7B vs $9.95B predicted (+7.5%); EPS $0.79 vs $0.57 predicted (+38% gap — H3C divestiture not in model = L15 INPUT failure). AI backlog $5.9B vs $7-9B predicted (CONVERSION not ACCUMULATION mode = L16 REASONING failure). FY26 raised materially + FY27 framework INTRODUCED (both per Target 5 L13 vintage-distribution — directional HIT). Stock +29-36% T+24h = CATEGORY EVENT override of Stage 3-4 suppression. L14 CODIFIED at N=2. L15 NEW (corporate event INPUT checklist). L16 CANDIDATE (cohort sub-mechanism: accumulation vs conversion). Supply-Chain-Cohort Calibration: REFINE (correct direction; magnitude under-predicted due to H3C INPUT gap + DELL sub-mechanism mismatch). |

## Process

When a resolution date hits:
1. Read the prediction file
2. Pull actual results (filing, press release)
3. Run GRADE template from `meta/reasoning-templates.md`
4. Append lesson to `lessons.md` if a generalizable insight emerged
5. Update bias entries in `biases-watchlist.md` if a new pattern was revealed
6. Move row from Pending to Graded with link to grading doc
