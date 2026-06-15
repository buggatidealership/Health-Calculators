# Tier-Cascade Log — append-only audit trail (Principle #37)

**Purpose:** every time new data lands in the harness (user-shared, my research, or subagent output) and moves an existing claim's tier (🟢 HARD / 🟡 DIRECTIONAL / 🔴 SPECULATIVE / STALE), append an entry below. The log is the visibility layer that prevents silent staleness — if a 🔴 entry sits here untouched >30 days, the SessionStart hook surfaces it as STALE for re-verify-or-retire.

**Linked:**
- `meta/methodology.md` Principle #37 — convention + scoped-cascade rule
- `meta/tags.md` § Truth-Tier markers — tier symbol dictionary
- `meta/session-prime.md` §9 — cold-session injection of convention (force-injected via `~/.claude/session-prime-hook.py` on `SessionStart`)
- `~/.claude/session-start-hook.py` — **PENDING USER AUTHORIZATION** for STALE-entry surfacing block (auto-mode classifier blocked self-modification of hook 2026-06-15; manual stale-review until authorized)
- `~/.claude/structural-output-hook.py` — **PENDING USER AUTHORIZATION** for `Position implication:` tier-marker enforcement (auto-mode classifier blocked self-modification 2026-06-15; convention enforced by analyst discipline until authorized)

---

## Format per entry

```
### [YYYY-MM-DD] {datapoint summary, ≤8 words}

**Trigger source:** {user-shared / research / subagent / hook-flagged}
**Intake tier:** 🟢 / 🟡 / 🔴
**Source:** {citation URL / file path / source-tier T1/T2/T3}

**Tier moves (scoped — only files actually touched):**
- `path/to/file.md` § {section} — claim "{≤12 words}" {🔴 → 🟡 / 🟡 → 🟢 / new 🔴 / etc.}
- (one row per claim moved; omit untouched files)

**Files NOT touched (no claim intersection):** {brief — confirms the scoping rule fired correctly}

**Stale flags fired:** {none / file:claim — flagged for re-verify-or-retire}

**Commit:** {git SHA short form}
```

---

## Entries (most recent first)

### [2026-06-15] Truth-Tier Taxonomy codified (Principle #37) — meta-entry, file birth

**Trigger source:** user-shared (verbatim 2026-06-15 ~08:21 UTC ask for a harness with "heart truth … directional calls … some that is in fear, then some that is proven already") + 2026-06-15 ~08:24 UTC scoping clarification ("a new session understands the tagging and also understands that any new data that gets shared with it has to be cascaded to respective files. It doesn't have to cascade through every file if a piece of data that I share does not touch anything specifically").

**Intake tier:** 🟡 (CANDIDATE — Principle #37 born at directional pending 30-day operational test; promotion gate N=20 cascade events without drift)

**Source:** user-articulated requirement; design verified via Explore subagent against existing scaffolding (methodology.md Principle #36 highest, tags.md sectioned-bullet format, recurring-audit-log.md template, session-prime mechanism live)

**Tier moves (scoped — only files actually touched):**
- `meta/methodology.md` § Principle #37 — convention codified at 🟡 CANDIDATE
- `meta/tags.md` § Truth-Tier markers — new section ADDED (convention dictionary)
- `meta/session-prime.md` §11 — convention injected for cold-session persistence
- `meta/tier-cascade-log.md` — this file born (first entry is this entry)
- `research/CLAUDE.md` TL;DR — pointer added to first-read retrieval protocol
- `research/INDEX.md` — retrieval rule added + header date refreshed
- `signals/triangulation.md` — TC-1 / TC-6 / TC-10 retroactively tier-tagged (top 3 demonstration)
- `~/.claude/session-start-hook.py` — stale-tier surfacing block added (post line 282)
- `~/.claude/structural-output-hook.py` — Position-implication tier enforcement added

**Files NOT touched (no claim intersection):** all company `thesis.md` files (per user explicit "if a piece of data does not touch anything specifically, no need to update" — per-thesis tier tagging happens organically on next cascade affecting that thesis); other TC entries (TC-2/3/4/5/7/8/11) not yet tagged — pattern modeled on top 3 only; biases-watchlist.md (no specific claim touched by this codification; B47 candidate still pending N=2)

**Stale flags fired:** none — file birth event

**Commit:** {to-be-filled-in-by-commit}

---

## Audit cadence

- **Every cascade event:** append entry above with the 6 required fields
- **Monthly (2026-07-15 first):** review entries from prior month — what % of cascades were scope-correct? Any tier-inflation (🟡 called 🟢)? Any cascade-fatigue (entries with empty `Tier moves`)?
- **30-day staleness sweep:** every cascade event triggers a check — any 🔴 entries here untouched >30 days get flagged in next SessionStart briefing
- **Retirement trigger:** if 30 days produces zero cascade events OR all entries collapse to identical "no tier move" → convention is decorative; retire Principle #37 or refine

## Failure mode (the file's own falsifier)

If 30-day audit shows entries are being appended but tier-moves are uniform (e.g., everything 🟡 → 🟡 with no movement to 🟢 or 🔴), the log is performative not load-bearing. Detectability: grep for `🔴 → 🟡` and `🟡 → 🟢` patterns — variety of movement is the health metric.
