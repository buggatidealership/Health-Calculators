# Signal Density Detection — the harness's convergence-detection apparatus

**Created:** 2026-06-11 (per user directive: "optimize for signal density detection")
**Status:** Canonical mechanism artifact. Operates alongside `meta/codification-rule.md` (self-improvement gate), `meta/cross-domain-pattern-register.md` (cross-domain priors), and CLAUDE.md Workflow #3 (TRIANGULATE).
**Diagnostic:** as of 2026-06-11, the triangulation pipeline was silently broken — 72 cross-source-log files / 26 in the last 7 days vs only 115 lines in `signals/triangulation.md`. Convergences existed but never got promoted. This file fixes the mechanism.

---

## §1 — The signal accretion ladder

Every external data point enters the harness as a raw signal. The harness's job is to detect when signals CONVERGE — that's where conviction is built. The ladder:

| Tier | Definition | Storage | Decision content |
|---|---|---|---|
| **S0 raw** | Single signal, single source, single segment | `signals/cross-source-log/{YYYY-MM-DD}-{topic}.md` | None — logged |
| **S1 candidate cluster** | ≥2 same-segment same-direction signals within 90 days | Mention in `signals/triangulation.md` with `[CANDIDATE]` tag | Watch, do not act |
| **S2 active convergence** | ≥3 same-segment same-direction signals within 90 days, ZERO contradicting signals | Entry in `signals/triangulation.md` with `[ACTIVE]` tag | Cascade to all relevant `companies/{TICKER}/thesis.md` files in same commit (Critical Rule #10) |
| **S3 thesis-anchored** | S2 + the convergence reframes a held-name thesis | Thesis file `Position implication:` block updated | Sizing decision warranted (Stage 1 entry, hold, trim, exit) |
| **S4 theme-elevated** | S2 + represents a new investable theme or scenario reweight | Promote to `sector/themes.md` candidate OR `sector/scenarios.md` reweight | Scenario-update workflow fires |

**Segment-classify before counting** (CLAUDE.md Critical Rule #6 + Principle #29): every signal belongs to one segment (chip-and-foundry / memory-and-storage / power-and-cooling / advanced-packaging / model-and-foundation-lab / consumer-AI / sovereign-AI / agentic-application / medtech-AI / robotics-supplier / DC-infrastructure / etc.). Cross-segment clusters do NOT promote — they log only.

## §2 — The promotion rule (mandatory enforcement)

**On every cross-source-log file creation, run this check** (manual until hook-enforced):

1. List the segment(s) the signal belongs to.
2. Grep recent cross-source-logs (last 90 days) for same-segment signals in the same direction.
3. Count.
4. If N≥2: open `signals/triangulation.md`, add or update the relevant cluster entry with [CANDIDATE] or [ACTIVE] status + the new signal cited.
5. If N≥3 and triggers reach S3/S4: cascade to thesis / themes / scenarios in SAME COMMIT.

**Skip-rule:** if the signal genuinely has no convergence with any prior signal in 90 days, log only — no triangulation entry needed. Skip is auditable, not silent.

## §3 — Self-detecting metrics (is the pipeline working?)

**POSITIVE indicators:**
- Triangulation.md grows at ~1-3 lines per week (matching cross-source-log inflow rate + promotion ratio)
- Every [ACTIVE] cluster cites ≥3 dated sources with URLs
- New session reading triangulation.md alone can identify the harness's current top conviction clusters without grep
- Held-name thesis updates cite triangulation cluster IDs

**NEGATIVE indicators:**
- Cross-source-log accumulating without triangulation growth (the 2026-06-11 diagnostic: 72 files, 115 lines)
- Triangulation entries without source-tier tags
- Cluster age >120 days without re-read (stale clusters need expiry)

**FALSIFIER:**
- 30 days post-codification: triangulation growth still flat → mechanism failed → build deterministic hook that BLOCKS a cross-source-log commit unless the promotion check is documented in the commit message or file body

**First re-eval:** 2026-07-11 (coinciding with codification-rule first audit).

## §4 — Cluster aging

Active clusters that have NOT received a new instance in 60 days move to `[DORMANT]`. Clusters at [DORMANT] >120 days move to `[ARCHIVED]` in a separate file (`signals/triangulation-archive.md`, to be created at first archive event). Aging is a quarterly maintenance event tied to the monthly audit cycle.

## §5 — Cross-source-log consolidation (the 4-files-per-day problem)

At current rate (~4 cross-source-log files per day), the directory will hit 200+ files in 2 months. Without a consolidation step, signals older than 30 days become functionally invisible (no one greps that far back).

**Rule:** at each monthly audit (`meta/recurring-audit-log.md` cycle), cross-source-log entries older than 30 days that produced an [ACTIVE] triangulation entry are summarized into a one-line back-pointer (URL, tier, date) inside the triangulation entry. Raw files stay on disk but the triangulation entry becomes the canonical retrieval point.

Cross-source-log files that produced NO triangulation entry after 60 days = either the signal was noise (acceptable) OR I missed a convergence (audit catches this).

## §6 — Cross-references
- `signals/triangulation.md` — the live convergence index (this file's enforcement target)
- `meta/codification-rule.md` — companion: codification rule §1.3 catches new patterns; this file catches signal convergences
- `meta/cross-domain-pattern-register.md` — companion: register catches MECHANISMS across domains; this file catches DIRECTIONAL signals within a segment
- CLAUDE.md Critical Rule #6 + Workflow #3 — the original triangulation workflow definition
- CLAUDE.md Principle #29 — segment-classify before triangulating
- `meta/recurring-audit-log.md` — monthly audit tracker
