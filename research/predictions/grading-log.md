# Grading Log — Open + Resolved Predictions

**Last updated:** 2026-05-20

## TL;DR

Index of every prediction made by the system. Each row resolves to "pending" or "graded." When an event passes its resolution date, run GRADE workflow.

## Pending

(none currently)

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
