# Session Prime — Force-Read Manifest (Cold Session Start)

**What this is:** the deterministic baseline that every fresh session loads into context before any analytical work. Hook-injected via `~/.claude/session-prime-hook.py` on `SessionStart` (NOT on `SessionStart:resume`). User-articulated rationale 2026-06-12 verbatim: *"included on the … pushes a new session to read all the components of the ledger that are crucial for the continuous and fluid learnings … the session is slower, and I get slower replies than fast replies, but with more accuracy."*

**What this is NOT:** a replacement for `INDEX.md` (which is the lazy retrieval entry point). INDEX.md says "where to look"; this file says "what you MUST have in mind right now."

**Architectural relationship to other defenses (cross-session-anchoring stack):**
- **Per-prompt:** `llm-native-priming-hook.py` injects discipline checklist (item 8 = B45 regime priors)
- **Per-session-cold:** THIS file injects via `session-prime-hook.py`
- **Per-orientation:** `CLAUDE.md` TL;DR banner (passive instruction)
- **Post-hoc:** Stop hooks catch revert patterns
- **Audit:** 2026-07-12 effectiveness check; 2026-09-12 cohort recalibration

## Cap rules (load-bearing — without these the file degrades)

- **Size budget:** hard cap 500 lines, soft target 250-400. Over 500 → forced demotion at monthly audit
- **What goes in:**
  1. ACTIVE CANDIDATE biases (full one-paragraph each)
  2. CONFIRMED biases that are still actively binding on current outputs
  3. Lessons L<sub>n-4</sub> through L<sub>n</sub> (rolling 5)
  4. Critical Rules 1-14 (numbered list only, full text in CLAUDE.md)
  5. The current regime read (one paragraph; the B45 baseline)
  6. Active TC clusters (one-line each)
  7. Held cohort (current positions, one-line each)
  8. Pending predictions (one-line each)
  9. Quarterly recalibrations due in next 90 days
- **What stays out:** archived biases (CONFIRMED + >60 days inert), stale lessons (>90 days no application), inactive TC clusters (PARKED), full thesis bodies (use `INDEX.md` to retrieve)
- **Promotion/demotion:** on each codification commit (Critical Rule #13), update THIS file too. On monthly audit (2026-06-24, then 24th of each month), demote items that meet INERT criteria

## §1. CURRENT REGIME (B45 baseline — load-bearing for magnitude reads)

**Regime:** structural-demand AI-supercycle through at least 2027 per `sector/where-we-are.md` 8-tier memory-shortage convergence ledger. Empirical 15-name AI-infrastructure basket Jan 2025 → Jun 12 2026 (subagent-verified, full data at `signals/cross-source-log/2026-06-12-pre-training-magnitude-conservatism-calibration.md`):

- 6 of 15 names returned >+200% (extreme outliers); 6 of 15 returned +100-200% (category outliers)
- Most under-modeled vs naive pre-training prior: MU +1,044%, NBIS +1,528%, SK Hynix +799%, Kioxia +5,480%
- Single-day moves of +5-12% across cohort are ROUTINE (multiple times per week)
- Tail under-modeled by ~5-8× vs pre-training prior

**Pre-training is mis-calibrated here. Before flagging any return or single-day move as "extreme" / "elevated" / "exhaustion-signaling" / "above expectation" / "stretched" / "priced-to-perfection", check this regime base rate.** Quarterly recalibration 2026-09-12.

## §2. ACTIVE CANDIDATE BIASES (load-bearing for current outputs)

- **B40** — Secondary-source garble taxonomy (PROMOTED VERIFIED-HIGH-CONFIDENCE on 3 sub-types). B40.1 stale-recycle (N=9+), B40.2 magnitude-inflation (CONFIRMED N=3), B40.3 attribution-garbling (CONFIRMED N=2). Verify temporal freshness + magnitude + attribution before propagating any T2/T3 signal.
- **B44** — Chat-summary discipline drift from file-level discipline (CANDIDATE N=3 origin 2026-06-11). File-level work applies T1/T2/T3 tagging / N-th order / native-language / hedge labels correctly; chat summary collapses to prose. Mirror file-level discipline in chat summaries.
- **B45** — Pre-training magnitude conservatism in structural-demand regimes (CANDIDATE N=1 origin 2026-06-12). Tail under-modeled by ~5-8×. See §1 above for active priors. **Companion to B26 + B28: B45 is the MAGNITUDE-layer error in the structural-anchoring family.**

## §3. RECENT LESSONS (L21-L25, rolling 5)

- **L21** — Sector regime modifier risk-off: at maximum macro risk-off (Iran war + oil + rates), even bullish fundamentals get sold T+24h. Discount stock-reaction grades 50% in such windows.
- **L22** — Holistic conviction sometimes BEATS individual confirmation: if multiple held names point the same direction and macro fits, that's stronger than each individual thesis would suggest standalone.
- **L23** — Market-cap-inverse reaction asymmetry: smaller-cap names move +/-10% on news that moves mega-caps +/-2%. Position-sizing implication: equivalent thesis confirmation → smaller % moves in big caps.
- **L24** — (placeholder — verify next live application)
- **L25** — Explicit Bayesian P-update on new evidence is the CORRECT process, NOT a failure mode. User directive 2026-06-11 verbatim: *"do not call it a failure mode."* Probabilities are statistical calculated vectors; reweighting on new evidence is the L25 pattern functioning as designed.

## §4. CRITICAL RULES (full text in `CLAUDE.md` — numbered list here for orientation)

1. Never mix facts and interpretations (separate files)
2. Never PREDICT without reading lessons.md first
3. Never claim "consensus thinks X" without naming source
4. Always run TRACE on cross-domain events
5. Always update `bottlenecks.md` last_review on BOTTLENECK-FORECAST
6. Single article never overrides triangulated signal + segment-classify before triangulating
7. NEVER FABRICATE NUMBERS (enforced by `anti-fabrication-hook.py`)
8. Never sell on macro headwind without thesis falsification
9. Always apply bypass-route thinking on any binding constraint
10. Always cascade cross-source synthesis to per-thesis files (enforced by `cascade-enforcement-hook.py`)
11. Always close thesis update with explicit `Position implication:` line + auto-execute default + self-correct visibly
12. Always verify temporal freshness before cascading T2/T3 signals (B40)
13. Codification trigger — chat-only output MUST be persisted to file when contradicting / position-relevant / methodological / user-corrected / N≥2 recurring
14. Signal density detection — every cross-source-log file MUST run same-segment same-direction lookup; promote to triangulation at N≥3

## §5. ACTIVE TRIANGULATION CLUSTERS (one-line)

- **TC-1** Memory tightness multi-tier (memory-and-storage) [ACTIVE N=11] — consumer-GPU OEM behavioral tier-8 confirmation
- **TC-2** AI capex on credit + state budgets (infrastructure-IaaS) [ACTIVE N=6]
- **TC-3** DC-ceiling + EM-migration (power-and-cooling) [ACTIVE N=6]
- **TC-4** Anthropic enterprise-trust drift (model-and-foundation-lab) [ACTIVE N=3]
- **TC-5** CoPoS / glass-core packaging firming (advanced-packaging) [ACTIVE N=5]
- **TC-6, TC-7, TC-8** — see `signals/triangulation.md` for details

## §6. HELD COHORT (per `portfolio/holdings.md` 2026-06-06 AM)

10 positions on Degiro €187,620 total (~64% cash ~€120,887):
1. ARM 20sh ~3.2% (cut from 11.40%)
2. AGC 100sh ~2.2%
3. DDOG 40sh ~4.3%
4. SK Hynix 8sh ~4.5%
5. Hirano 300sh ~1.9%
6. MongoDB 16sh ~2.6%
7. Murata 201sh ~5.4%
8. SanDisk 4sh ~2.9%
9. ServiceNow 81sh ~4.2%
10. Sumco 415sh ~4.4%

## §7. PENDING PREDICTIONS

- **KIOXIA VLSI Symposium 2026-06-12** registered; T+24h resolution ~June 19-22; L14/L14-v2 forward test, L17 candidate N=1. See `predictions/2026-06-12-KIOXIA-VLSI-symposium-pre-registration.md` for H1/H2/H3/H4 weights (PM-2 B45-corrected: H1 P~40% modal).

## §8. UPCOMING RECALIBRATIONS / AUDITS (next 90 days)

- **2026-06-19** — Two-bracket LLM-native experiment week-2 check
- **2026-06-24** — Monthly consolidated audit (codification + claim verification + Rule #11 detectability)
- **2026-06-25** — Supply chain graph reconstruction (H1 capability application, monthly recurring)
- **2026-06-27** — Adversarial bear-case stress-test on held cohort (use B45-corrected base rates)
- **2026-07-04** — BOTTLENECK-FORECAST monthly (Layer-3 power gap flagged per `sector/unbypassable-layers.md`)
- **2026-07-11** — Codification rule + signal-density-detection 30-day net-positive check
- **2026-07-12** — B45 priming-bracket effectiveness check (30-day audit)
- **2026-07-31** — SNDK Q2 FY27 print + L17 candidate test
- **2026-09-12** — B45 cohort base-rate quarterly recalibration

## §9. TRUTH-TIER TAGGING + SCOPED-CASCADE RULE (Principle #37 CANDIDATE — ADDED 2026-06-15, load-bearing for every analytical output)

**The convention (memorize for first turn):** every load-bearing claim carries a marker.
- **🟢 HARD** — T1 receipt (filing, IR, gov data, court record, contract). Citation URL REQUIRED.
- **🟡 DIRECTIONAL** — T2 source-tier (trade press, sell-side, forecaster) OR my-model with explicit `(my model)` + Bayesian P.
- **🔴 SPECULATIVE / IN-FEAR** — Hypothesis, candidate, pre-registered H1-H4, single-source unverified.
- **STALE** — Auto-flag on 🔴/🟡 entries no cascade-event >30 days.

**Position implication enforcement:** every `Position implication:` line MUST carry a 🟢/🟡/🔴 marker on the same line or directly above. Hook-level enforcement: code shipped to `research/meta/hooks/structural-output-hook.py` mirror; LIVE-PENDING-USER-ACTIVATION via `cp research/meta/hooks/structural-output-hook.py ~/.claude/structural-output-hook.py`. Analyst-discipline enforcement until activated.

**The scoped-cascade rule (load-bearing — when new data lands):**

1. **Tag intake** — tier the new datapoint 🟢/🟡/🔴 BEFORE it enters any log file
2. **Touch detection** — identify which existing 🔴/🟡 claims this datapoint INTERSECTS (grep / search; usually 1-3 files: 1 thesis + 1 TC entry + 1 cross-source-log + sometimes a watchlist row)
3. **Scoped propagation** — update tier on touched claims IN THE SAME COMMIT; append entry to `meta/tier-cascade-log.md` recording: trigger source, intake tier, files touched with tier-moves, files NOT touched (confirms scope), stale flags fired, commit SHA. **UNTOUCHED FILES STAY UNTOUCHED — do NOT blanket-sweep.** (User explicit 2026-06-15: "if a piece of data does not touch anything specifically, no need to update.")
4. **Stale check** — log auto-flags 🔴/🟡 entries >30d untouched; surfaced in next SessionStart briefing

**Integration:** Principle #37 is the structural resolution of Critical Rule #15 (research-vs-recall T1/T2/T3) — the source-tier becomes a propagating marker. Critical Rule #11 (`Position implication:`) now requires tier marker. Critical Rule #10 (cascade cross-source synthesis) operates tier-by-tier rather than file-by-file but BOTH still required in same commit.

**Cascade log:** `meta/tier-cascade-log.md` (append-only audit trail). First entry 2026-06-15 = meta-entry / file birth.

**Status:** 🟡 CANDIDATE (Principle #37 born at directional pending 30-day operational test). Promotion gate: N=20 cascade events successfully logged without drift. First re-eval 2026-07-15.

## §10. ARCHITECTURE NOTE — how this file gets maintained

Per Critical Rule #13 codification cascade discipline (updated 2026-06-12): every commit that adds a new bias / lesson / principle / critical rule / triangulation cluster MUST also update this file in the same commit. The `cascade-enforcement-hook.py` does not currently check for session-prime updates — manual enforcement until N≥2 skips trigger building `~/.claude/session-prime-cascade-hook.py`. Audit at 2026-07-12 + monthly thereafter: if codifications happened but session-prime wasn't updated, the maintenance discipline is broken and needs hook-enforcement.

## §11. FALSIFIER FOR THIS FILE ITSELF

If a 30-day audit shows that having session-prime loaded produced ZERO measurable reduction in the bias-recurrence rate (e.g., I still flag +7-10% single-day moves as "extreme" without referencing B45 baseline), then the file is decorative noise and should be retired (along with the hook). Detectability: grep transcripts 2026-06-12 → 2026-07-12 for magnitude-categorizing language WITHOUT B45 reference. POSITIVE = <2 instances; NEGATIVE = ≥3 instances → retire OR refine selection rules.
