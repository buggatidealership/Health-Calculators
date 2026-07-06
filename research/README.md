# AI Sector Research — Navigation

Personal AI-sector investing operating system. Built for a non-technical, logically-sharp user with a 6–24 month position horizon.

---

## Overarching goal (read first)

Build durable, asymmetric conviction in AI-sector positions BEFORE consensus catches up — by running a **fluid, self-evolving research harness** that:

1. **Builds theses bottoms-up** (unit economics, supply chain, BOM math) — not by aggregating analyst views.
2. **Holds 3-5 futures simultaneously** and scores each name on anti-fragility (wins in M of N scenarios).
3. **Predicts → grades → learns** on a closed feedback loop. Predictions are not performance artifacts; they are structured data-generation exercises. Each grade closes the loop by identifying which of 3 layers (INPUT / COMPUTATION / REASONING) was misaligned.
4. **Codifies recurring errors** as lessons (`predictions/lessons.md`) → biases (`meta/biases-watchlist.md`) → principles (`meta/methodology.md`).
5. **Promotes operationally-critical principles to hooks** (deterministic Python Stop hooks at `~/.claude/`) — because "instructions are choices; hooks are enforced."
6. **Treats codifications as fluid** — every principle/bias has metadata (codified date, last review, re-eval trigger, falsifier, status). N=1 insights flag as CANDIDATE; codify only at N=2+ per principle #32 premortem discipline.
7. **Monitors the harness monthly** via `meta/principle-applications-log.md` real-catch / false-positive / wasted-overhead metrics. Codifications that go inert get retired or promoted to hooks.

This is a feedback loop on external memory. Not a neural network. Effective, but bounded.

---

## Start here (Session Start Protocol)

The SessionStart hook auto-surfaces a briefing (top todos + pending grades + DUE recurring audits). Then in order:

1. **`CLAUDE.md`** — the harness (workflows, conventions, output rules, critical rules)
2. **`sector/where-we-are.md`** — current AI epoch + binding constraints + non-default reads + mind-changes log
3. **`meta/methodology.md`** — first principles + principle metadata table (#1 through #33 + candidate #34)
4. **`predictions/lessons.md`** — calibration memory (L1 through L13) — MANDATORY pre-read before any PREDICT
5. **`meta/biases-watchlist.md`** — known failure modes (B1 through B37 + candidate B38)
6. **`portfolio/holdings.md`** — what's at stake
7. **`meta/todo.md`** — full backlog (briefing surfaces top items)

---

## Folder map

| Folder | What's in it |
|---|---|
| `CLAUDE.md` | The harness — workflows, conventions, output rules, critical rules |
| `portfolio/` | Current holdings, position targets, change log |
| `companies/{TICKER}/` | Per-company files: thesis, facts, timeline, interpretations, exposures |
| `sector/` | Holistic views: epoch, value chain, scenarios, bottlenecks, themes, supply chain, competitive map, causal maps |
| `signals/` | Cross-source log of weak signals; triangulated high-conviction reads; dated TRACE event files |
| `watchlist/` | Names surfaced by signals, pre-thesis |
| `predictions/` | Forward calls, grading log, lessons learned |
| `meta/` | Methodology, biases watchlist, hooks mirror, principle-applications-log, todo, recurring-audit-log |
| `wiki/` | Foundational primers (BOM-level depth; first-principles + layered + extrapolation discipline per principle #13) |

---

## The 8 named workflows (announce mode in every response)

| User input | Workflow |
|---|---|
| "Here's an article..." | INGEST |
| "What if [event] happens?" | TRACE (N-th order cascade) |
| "Will X beat earnings?" | PREDICT (mandatory: read lessons.md) |
| "X just reported — actual was Y" | GRADE (3-layer: INPUT / COMPUTATION / REASONING) |
| (≥3 same-segment sources) | TRIANGULATE (per principle #29) |
| "What's the next bottleneck?" | BOTTLENECK-FORECAST |
| (scenario probability shifts materially) | SCENARIO-UPDATE |
| "deep dig" / "deep dig: X" | DEEP-DIG (BOM-level cross-stack cascade) |

---

## Live enforcement hooks (10 total)

**SessionStart (informational, exit 0):**
- `session-start-hook.py` — surfaces todo + pending grades + DUE recurring audits

**Stop hooks (block message on violation, exit 2):**
- `anti-fabrication-hook.py` — uncited numerical claims
- `stop-hook-git-check.sh` — uncommitted changes
- `cascade-enforcement-hook.py` — Critical Rule #10 cross-source synthesis cascade
- `segment-trajectory-hook.py` — principle #22 (segment trajectory, not snapshot)
- `nth-order-cascade-hook.py` — principle #2 (N-th order > 1st)
- `bypass-route-hook.py` — principle #9 + Critical Rule #9 (bypass-route thinking)
- `bottoms-up-hook.py` — principle #1 (bottoms-up before outside view)
- `antifragility-mn-hook.py` — principle #5 + Conviction Format M/N requirement
- `analyst-pt-context-hook.py` — B37 (analyst-PT-as-default-bearish for structural names)

Source code mirror at `meta/hooks/` for version control + re-install.

---

## Current state (2026-05-28)

**Portfolio anchors:** MURATA (12.4-16.77%, Core), HYNIX, NOW, GLW, SNDK, TE, DDOG (10.38%, Core agentic), STM, PURR, TSEM, AXTI, SMTC (6.09%), Hyperliquid (8.24%). See `portfolio/holdings.md`.

**Active research focus:** SEMCO (009150.KS — reference artifact + N=1 origin case for candidate Principle #34; user's brokerages don't support direct KRX access so investability constraint dominates).

**Predictions graded (4):** NVDA Q1 FY27 (L4 added) → MOD Q4 FY26 (L6/L7/L8) → SNOW Q1 FY27 (L9/L10) → MRVL Q1 FY27 (L11/L12/L13). Zero pending.

**Codifications outstanding:**
- Principle #34 (Supplier-Side Cross-Layer Moat Decomposition) — CANDIDATE, awaiting N=2+ at next monthly audit 2026-06-24
- Bias B38 (demand-side decomposition blind-spot for supplier-side cross-layer moats) — CANDIDATE, awaiting N=2+
- Supply-Chain-Cohort Calibration framework — PARTIAL VALIDATION at N=1 (MRVL); refinement criteria documented for Schwab N=2 (June 2026)

**Investability filter:** user's brokerage platforms do not support direct KRX (Korean) access; no sponsored ADRs for LGI or SEMCO. KRX names are reference artifacts only. Japan TSE (Ibiden, Murata) accessible via direct or pink-sheet ADRs (IBDSF / IBDSY / MRAAY).

**Open todos (8):** see `meta/todo.md`. P0 + P1 currently empty (post-MRVL grade + LGI archive). All P2/P3 items dated for monthly audit 2026-06-24 or specific verification triggers (Schwab June 2026, China sovereignty cluster back-fill).

**Next monthly audit cycle (2026-06-24):** codification audit (principles #29-33 + B31-B36 + candidate #34 + candidate B38); claim-verification audit; N=2+ confirmation for candidate Principle #34 / B38.
