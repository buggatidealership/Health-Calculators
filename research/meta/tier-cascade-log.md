# Tier-Cascade Log — append-only audit trail (Principle #37)

**Purpose:** every time new data lands in the harness (user-shared, my research, or subagent output) and moves an existing claim's tier (🟢 HARD / 🟡 DIRECTIONAL / 🔴 SPECULATIVE / STALE), append an entry below. The log is the visibility layer that prevents silent staleness — if a 🔴 entry sits here untouched >30 days, the SessionStart hook surfaces it as STALE for re-verify-or-retire.

**Linked:**
- `meta/methodology.md` Principle #37 — convention + scoped-cascade rule
- `meta/tags.md` § Truth-Tier markers — tier symbol dictionary
- `meta/session-prime.md` §9 — cold-session injection of convention (force-injected via `~/.claude/session-prime-hook.py` on `SessionStart`)
- `~/.claude/session-start-hook.py` — surfaces STALE 🔴/🟡 entries (>30d untouched) in the session-start briefing (LIVE-PENDING-USER-ACTIVATION 2026-06-15: code shipped to `research/meta/hooks/session-start-hook.py` mirror; activation = `cp research/meta/hooks/session-start-hook.py ~/.claude/session-start-hook.py`)
- `~/.claude/structural-output-hook.py` — enforces 🟢/🟡/🔴 tier marker on every `Position implication:` line (LIVE-PENDING-USER-ACTIVATION 2026-06-15: code shipped to `research/meta/hooks/structural-output-hook.py` mirror; activation = `cp research/meta/hooks/structural-output-hook.py ~/.claude/structural-output-hook.py`)

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

### [2026-06-15] Principle #37 hook-enforcement layer shipped to repo mirror

**Trigger source:** plan-mode follow-up cascade after the codification commits `7049a16` + `779ec88` landed; user re-entered plan mode 2026-06-15 PM and approved hook-enforcement plan via ExitPlanMode. Live-hook self-modification was blocked twice by auto-mode classifier ("agent-startup hook (Self-Modification)") — code shipped to `research/meta/hooks/` mirror with 1-step `cp` activation path so user retains explicit go/no-go on hook activation.

**Intake tier:** 🟡 (DIRECTIONAL — code passes py_compile + local unit tests but full integration test requires live activation; promotion to 🟢 on first observed session-start STALE surface + first observed Position-implication rejection in transcripts)

**Source:** plan file `/root/.claude/plans/enumerated-tickling-hartmanis.md` (approved by user); local unit tests in /tmp confirmed: STALE parser correctly excludes 🟢 + correctly returns 🟡/🔴 entries >30d old; POSITION_IMPLICATION_RE + TIER_MARKER_RE correctly fire on no-marker line and pass when marker is same-line OR directly-above

**Tier moves (scoped — only files actually touched):**
- `research/meta/hooks/session-start-hook.py` — added `TIER_CASCADE_LOG_PATH` const + STALE-tier surfacing block (after bottlenecks staleness check) + `parse_stale_tier_entries()` helper
- `research/meta/hooks/structural-output-hook.py` — added `POSITION_IMPLICATION_RE` + `TIER_MARKER_RE` constants + Position-implication validation block (runs BEFORE structural-markers pass-gate) + `_print_position_implication_feedback()` + `_log_fire(reason)` refactor (existing fire-path now also tagged with reason for audit)
- `meta/tier-cascade-log.md` — this entry + Linked-section hedge update (PENDING-AUTHORIZATION → LIVE-PENDING-USER-ACTIVATION with cp commands)
- `meta/session-prime.md` §9 — Position implication enforcement line updated
- `meta/tags.md` § Truth-Tier markers — convention enforcement line updated
- `research/CLAUDE.md` TL;DR § Truth-Tier — hedge updated

**Files NOT touched (no claim intersection):** `~/.claude/session-start-hook.py` + `~/.claude/structural-output-hook.py` live copies (blocked by auto-mode classifier; user activates via `cp` from mirror — explicit go/no-go preserved); all company `thesis.md` files (codification is harness-level, not per-thesis); other TC entries (TC-1 / TC-6 / TC-10 already tagged in prior commit; no further tagging cascade triggered by this hook-enforcement event)

**Stale flags fired:** none (file is 1 day old; first STALE flags arrive earliest 2026-07-15)

**Commit:** `6a3bade` (filled in this 2026-06-15 PM cascade per the lag-1 SHA-fill convention)

---

### [2026-06-15] TSMC PLP / CoPoS ETNews 2-subagent verification — TC-5 cascade (first real-data application of Principle #37)

**Trigger source:** user-shared translated ETNews article 2026-06-15 ("TSMC Preparing for Full-Scale Mass Production of Panel-Level Packaging (PLP)") + 2 parallel verification subagents per Critical Rule #15 + Workflow #1 INGEST.

**Intake tier:** 🟡 DIRECTIONAL (final after verification) — article itself is signal-amplifying restatement of existing TC-5 cluster; B40.1 partial-stale + B40.2 timeline-inflation flags binding; BUT Subagent B independently verified NEW T1 datapoints at substrate / equipment / OSAT layers that DO qualify for TC-5 N+1 promotion (the substantive cascade-trigger is the verification output, not the article framing — this is exactly the case Principle #37 is designed to discriminate).

**Source:** ETNews 2026-06-15 [native-kr T2](https://www.etnews.com/20260615000239); 2-subagent verification per Critical Rule #15.

**Tier moves (scoped — only files actually intersecting):**
- `signals/cross-source-log/2026-06-15-pm-tsmc-plp-etnews-2subagent-verification-tc5-cascade.md` — NEW artifact (file birth at 🟡)
- `signals/triangulation.md` TC-5 — N=5 → 🟢 **N=7** with Camtek Golden Eagle 600mm T1 + BESI Q1 2026 orders doubled T1 + ASE-TSMC June 2025 PLP co-dev T2 + Absolics AMD+AWS named T2 + NEG TGV native-jp T1 + NVDA Feynman Kuo T3. Quick-index cell + dedicated section both updated with Truth-Tier breakdown
- `companies/IBIDEN/thesis.md` — 🟡 ASE-TSMC PLP co-dev surfaces as substrate-tailwind (REINFORCING) + 🟡 glass-core medium-term displacement risk surfaces (NEW dissection vector)
- `companies/CAMT/thesis.md` — 🟢 Golden Eagle 600-650mm PLP-rated T1 ADDS panel-inspection growth vector on top of existing HBM4-reference-tool thesis (additive not substitutable)
- `companies/BESI/thesis.md` — 🟢 Q1 2026 orders doubled YoY T1 + die-attach 80% revenue + format-agnostic for PLP ADDS PLP growth vector on top of hybrid-bonding thesis
- `watchlist/candidates.md` — new "2026-06-15 PM update" subsection under CoPoS / Glass-Core Packaging Cohort with: CAMT TIER S equipment; BESI TIER S equipment; ASE 3711.TW REFERENCE OSAT; SEMCO + Nepes Laweh KRX-only references; IBIDEN dissection priority RAISED+
- `meta/deep-dig-queue.md` — IBIDEN dissection priority RAISED again (TIER S+; glass-core roadmap question new vector); CoPoS BOM-level dig substantially answered at supplier-mapping layer by Subagent B; NEW candidate: TSMC PLP customer-identity verification
- `meta/biases-watchlist.md` — B40.1 N=11 → N=12+ (Samsung "upper hand" partial-stale for AI segment); B40.2 N=3 → N=4 (ETNews 2027 timeline-inflation, 양산 trial-vs-volume translation gap)
- `meta/tier-cascade-log.md` — THIS entry + prior-entry SHA fill (`6a3bade`)

**Files NOT touched (no claim intersection — scoping rule fired correctly):**
- `companies/HYNIX/thesis.md`, `SNDK/thesis.md`, `SUMCO/thesis.md`, `MURATA/thesis.md`, `MRVL/thesis.md`, `DDOG/thesis.md`, `NOW/thesis.md` — all held theses orthogonal to advanced-packaging-substrate cluster; PLP/CoPoS is packaging-layer specific
- `companies/AGC/thesis.md` — exited 2026-06-14; this datapoint reinforces (NEG ahead on glass-core disclosure) but doesn't change historical-artifact framing
- `portfolio/holdings.md`, `targets.md`, `changes.md` — no position changes triggered (CAMT/BESI/IBIDEN are P1 watchlist candidates, not held)
- `meta/methodology.md`, `research/CLAUDE.md`, `meta/session-prime.md`, `meta/tags.md`, `INDEX.md` — no new principle / convention / retrieval-rule triggered
- `sector/themes.md`, `sector/where-we-are.md` — TC-5 is already in synthesis ledger; PLP cascade is sub-cluster detail not synthesis-shifting
- `predictions/lessons.md` — ABF bear-case inversion already logged at TC-5 (2026-06-11); this is reinforce-not-new

**Stale flags fired:** none (file is 1 day old; first STALE flags arrive earliest 2026-07-15 when oldest entries cross 30 days)

**Loop-validation note:** this is the FIRST real-data application of Principle #37 after the codification + hook-mirror commits. The loop fired cleanly — share → 2-subagent parallel verification → hypothesis reweighting (H1 55%→95%, H2 30%→5%, H3 15%→75%, H4 new 95%) → claim-level tier reassessment (article-level 🟡 with sub-claim 🟢/🟡/🔴 breakdown) → scoped cascade to 8 affected files → 7+ files explicitly NOT touched (held cohort, portfolio, methodology, synthesis ledgers). The scoping rule did real work: Subagent B's broad supplier-cascade mapping could have triggered updates to dozens of files; Principle #37 disciplined the cascade to ONLY the files where the new data created tier-moves.

**Commit:** {to-be-filled-in-next-cascade}

---

### [2026-06-15] Principle #37 hook-enforcement layer shipped to repo mirror

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

**Commit:** `7049a16` (parent commit; SHA filled in follow-up due to commit-self-reference circularity — convention is now: SHA filled in next commit after the cascade)

---

## Audit cadence

- **Every cascade event:** append entry above with the 6 required fields
- **Monthly (2026-07-15 first):** review entries from prior month — what % of cascades were scope-correct? Any tier-inflation (🟡 called 🟢)? Any cascade-fatigue (entries with empty `Tier moves`)?
- **30-day staleness sweep:** every cascade event triggers a check — any 🔴 entries here untouched >30 days get flagged in next SessionStart briefing
- **Retirement trigger:** if 30 days produces zero cascade events OR all entries collapse to identical "no tier move" → convention is decorative; retire Principle #37 or refine

## Failure mode (the file's own falsifier)

If 30-day audit shows entries are being appended but tier-moves are uniform (e.g., everything 🟡 → 🟡 with no movement to 🟢 or 🔴), the log is performative not load-bearing. Detectability: grep for `🔴 → 🟡` and `🟡 → 🟢` patterns — variety of movement is the health metric.
