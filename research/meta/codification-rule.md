# Codification Rule — what triggers persisting chat-only content to harness files

**Created:** 2026-06-11 (per user directive: "codify the gap that decides which chat-only corrections / new patterns / new methodological insights must be persisted to files")
**Status:** CANDIDATE Critical Rule #13 / Methodology Principle #35 candidate (N=1 origin = this rule itself; N=2+ promotion at first monthly audit 2026-06-24 if rule fires materially)
**Function:** the harness's self-improvement gate. Without this, valuable chat-derived insights die at session end; over-applied, every chat turn generates file noise.

---

## §1 — The rule (the load-bearing test)

A chat-only output MUST be persisted to a harness file when ANY ONE of these is true:

| # | Trigger | Target file |
|---|---|---|
| 1 | **Contradicts an existing file claim** (file becomes wrong without correction → future sessions propagate error) | The contradicted file directly |
| 2 | **Changes a position-relevant variable** for a held / watchlist P1-P2 / candidate name: tier, target, falsifier, P-weight on a thesis hypothesis, register pattern N counter | `companies/{TICKER}/thesis.md` + relevant facts/timeline/exposures |
| 3 | **Introduces a new pattern, bias, principle, hook candidate, OR methodological insight** | `meta/cross-domain-pattern-register.md` (patterns) / `biases-watchlist.md` (biases) / `methodology.md` (principles) / `meta/hooks/` (hook candidates) |
| 4 | **User-corrected reasoning** that lands on a generalizable lesson — not a one-time fact correction | `predictions/lessons.md` (3-layer GRADE structure: input / computation / reasoning) |
| 5 | **Surfaces a recurring chat-only pattern** (≥N=2 in 30 days of the same correction type happening without prior codification) | New entry in `biases-watchlist.md` as candidate bias |

**Transient chat color (explicit EXEMPTION — do NOT codify):**
- Typo / number-restate corrections that don't change file state
- Hook-driven discipline restates of content already in files (e.g., re-stating N-th order in chat when the cascade is already in the source log)
- Question-answers that don't change file state
- Restatements of existing principles for user-readability without new content
- Format / structure-output adjustments

## §2 — The retroactive-application instruction (the "this session" leg)

Before committing the codification rule itself, **audit the current session for content that meets §1 but wasn't codified, then codify it in the same commit.** The rule has zero credibility unless it's applied to its own origin session.

See §6 below for the audit log.

## §3 — Self-detecting metrics (the "is this rule earning its keep?" leg)

Per user directive: the rule must prove net-positive or get retired.

**POSITIVE indicators (rule earning its keep):**
- Session frequency of "chat-only → codified" promotions ≥1/week (catches real misses)
- New patterns / biases / principles trickle to `meta/` files at ~1-3/month (continuous improvement)
- Future-session reads of updated files surface the codified content (no orphaned codifications)
- Monthly audit finds ≥1 instance where a codified item PREVENTED a subsequent error

**NEGATIVE indicators (rule decoratory, needs refinement or retirement):**
- Codifications never get cited / read / cross-referenced in subsequent sessions → inert codification, retire
- Codifications produce file noise without portfolio / methodology / accuracy benefit → tighten triggers
- 5+ consecutive sessions trigger §1 but skip codification anyway → rule is being skipped, build a hook

**FALSIFIER:**
- 30 days post-codification with ZERO codifications fired under §1 → rule is too tight, retire or relax
- 30 days post-codification with ≥10 codifications fired but none read/cited later → rule produces noise not improvement, refine

**RE-EVAL TRIGGER:**
- First check at monthly codification audit **2026-07-11**
- Each monthly audit thereafter via `meta/recurring-audit-log.md`

## §4 — Hook candidate (deterministic enforcement layer)

If 5+ skips of §1 happen in a 30-day window (i.e., §1 triggers fire but codification doesn't follow in the same session), build `~/.claude/codification-trigger-hook.py` as the deterministic enforcement. Modeled on the existing 13 Stop hooks. Hook would detect:
- Probability-update / Bayesian language in chat (e.g., "P~50% → P~65%") referencing a held/watchlist name → require thesis.md update reference
- Self-correction language ("correcting", "actually", "I was wrong") → require lessons.md / biases-watchlist.md entry reference
- New pattern / bias / principle introduction → require cross-domain-pattern-register / biases / methodology cross-reference

Pre-build: track misses for 30 days, then decide.

## §5 — Fluidity metadata

| Field | Value |
|---|---|
| Codified date | 2026-06-11 |
| Status | CANDIDATE (N=1 origin — this rule itself; mirror the principle #32 premortem N=2+ codification threshold) |
| Promotion trigger | N=2+ session-instances where §1 fires materially within 30 days |
| Retirement trigger | 30 days with zero fires OR 10+ fires with zero subsequent reads |
| First re-eval | 2026-07-11 monthly audit |
| Owner artifact | this file |
| Cross-reference | `methodology.md` Principle #35 candidate; `CLAUDE.md` Critical Rule #13 candidate (promote on N=2+); `biases-watchlist.md` B-new candidate (codification-skip pattern) |

## §6 — Retroactive audit of this session (2026-06-09 → 2026-06-11)

Applying §1 to the current session before commit. Items that met the test but weren't codified at the time, codified NOW in the same commit:

| Item | §1 trigger | Codification action this commit |
|---|---|---|
| **Garble taxonomy** — 3 distinct types (stale recycle / magnitude-inflation / attribution-garbling) surfaced across recent briefs; only stale-recycle (B40) was codified, the others mentioned only in chat | §1.3 (new pattern) + §1.5 (recurring chat-only) | Expand B40 in `biases-watchlist.md` with 3-type taxonomy; preserve the original B40 entry for audit trail |
| **Bayesian P-update as evidence arrives** — explicit probability-update pattern demonstrated this session (AXT lateral H1: P~50% chat → P~65% post-subagent-1 → P~80% post-subagent-2, with the update mechanism visible). This is a positive methodology lesson, not a failure | §1.3 (methodological insight) + §1.4 (generalizable reasoning lesson) | New L-entry in `predictions/lessons.md` documenting the explicit-P-update-as-evidence-arrives pattern with AXT as the canonical positive instance |
| **Chat-summary discipline drift from file-level discipline** — hooks caught this 3x this session (N-th order, native-language tagging, probability hedge-labels) where file-level had the correct discipline but chat summary didn't mirror it | §1.5 (recurring chat-only pattern N≥3) | New candidate bias entry in `biases-watchlist.md`: B-new "Chat-summary discipline drift" |
| **Two-phase deep-dive pattern** — Phase 1 (framework codification, no subagents) + Phase 2 (parallel fan-out using framework) demonstrated for medical-AI dissection 2026-06-10 with measurable improvement vs ad-hoc subagent-fan-out | §1.3 (workflow methodological insight) | Note in DEEP-DIG workflow extension in `methodology.md`; reference Phase 1 / Phase 2 split |
| **The codification rule itself** | §1.3 (introduces new methodology) | THIS FILE + Principle #35 candidate + commit |

Items that did NOT meet §1 (correctly transient — auditable as non-codifications):
- N-th order restate at user-hook catch (content already in cross-source log §7 — file-level discipline correct, chat-restate didn't add value beyond format)
- Native-language re-anchor of Olympus 7733.T at hook catch (file-level T1 native-jp citations already in OLYMPUS thesis + facts)
- Probability hedge-label restates (file-level cascades carry the labels; chat restate is format-only)

## §7 — Cross-references
- `meta/methodology.md` — Principle #35 candidate entry + reference to this file
- `meta/biases-watchlist.md` — B40 expansion (3-type garble taxonomy) + B-new "Chat-summary discipline drift"
- `predictions/lessons.md` — Bayesian-P-update lesson entry
- `meta/todo.md` — first 30-day net-positive check 2026-07-11
- `meta/principle-applications-log.md` — codification entry
- `CLAUDE.md` Critical Rule #13 — pending N=2+ confirmation per principle #32 premortem
