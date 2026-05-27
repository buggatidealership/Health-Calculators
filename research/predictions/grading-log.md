# Grading Log — Open + Resolved Predictions

**Last updated:** 2026-05-27

## TL;DR

Index of every prediction made by the system. Each row resolves to "pending" or "graded." When an event passes its resolution date, run GRADE workflow.

## Pending

| Date made | Resolution | Ticker | Event | Prediction file |
|---|---|---|---|---|
| 2026-05-26 | 2026-05-27 | MOD | Q4 FY26 earnings + FY27 guide | `2026-05-26-MOD-Q4FY26.md` |
| 2026-05-27 | 2026-05-27 (fundamental) + 2026-05-28 (stock-reaction T+24h) | SNOW | Q1 FY27 earnings + FY27 guide raise/maintain/lower + Cortex AI run rate | `2026-05-27-SNOW-Q1FY27.md` |
| 2026-05-27 | 2026-05-27 (fundamental) + 2026-05-28 (stock-reaction T+24h) | MRVL | Q1 FY27 earnings + Q2 guide + custom Si FY27 outlook commentary | `2026-05-27-MRVL-Q1FY27.md` |

## Graded

| Date made | Resolution | Ticker | Event | Prediction file | Grade file | Outcome |
|---|---|---|---|---|---|---|
| 2026-05-20 | 2026-05-20 | NVDA | Q1 FY27 earnings | `2026-05-20-NVDA-Q1FY27.md` | `2026-05-20-NVDA-Q1FY27-GRADE.md` | RIGHT direction (beat all 4); Q2 guide upside underweighted; L4 added |

## Process

When a resolution date hits:
1. Read the prediction file
2. Pull actual results (filing, press release)
3. Run GRADE template from `meta/reasoning-templates.md`
4. Append lesson to `lessons.md` if a generalizable insight emerged
5. Update bias entries in `biases-watchlist.md` if a new pattern was revealed
6. Move row from Pending to Graded with link to grading doc
