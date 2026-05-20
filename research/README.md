# AI Sector Research — Navigation

This folder contains a personal AI-sector investing operating system. Built for non-technical, logically-sharp user with a 6–24 month horizon.

## Start here

1. **`CLAUDE.md`** — the operating system. Read first if you're a Claude session picking this up.
2. **`sector/where-we-are.md`** — current AI epoch and what's changing. Read every session.
3. **`predictions/lessons.md`** — calibration memory. Read before any new prediction.

## Folder map

| Folder | What's in it |
|---|---|
| `CLAUDE.md` | The harness — workflows, conventions, output rules |
| `portfolio/` | Current holdings, position targets, change log |
| `companies/{TICKER}/` | Per-company files: thesis, facts, timeline, interpretations, exposures |
| `sector/` | Holistic views: epoch, value chain, scenarios, bottlenecks, themes, supply chain, competitive map, causal maps |
| `sector/causal-maps/` | N-th order cause→consequence trees for major triggers |
| `signals/` | Cross-source log of weak signals; triangulated high-conviction reads |
| `watchlist/` | Names surfaced by signals, pre-thesis |
| `predictions/` | Forward calls, grading log, lessons learned |
| `meta/` | Methodology, biases watchlist, reasoning templates, private cos tracker |

## Quick reference — when user says X, do Y

| User input | Workflow |
|---|---|
| "Here's an article..." | INGEST (see CLAUDE.md §1) |
| "What do you think about X?" | Read `companies/X/`, summarize |
| "What if [event] happens?" | TRACE (see CLAUDE.md §2) |
| "Will X beat earnings?" | PREDICT — MUST read lessons.md first |
| "X just reported, actual was Y" | GRADE |
| "I bought/sold X" | Update `portfolio/changes.md` + `holdings.md` |
| "What's the next bottleneck?" | BOTTLENECK-FORECAST |
| "What should I do?" | Read holdings + theses + scenarios, recommend |

## Status as of 2026-05-20 (initial seed)

- Architecture seeded with sector files, causal maps, methodology
- NVDA: fully populated company folder (template + real data)
- One prediction logged + pending (NVDA Q1 FY27, resolves today after market close)
- One lesson seeded (bottoms-up before outside view)
- Eight biases identified
- Holdings file awaiting user input
