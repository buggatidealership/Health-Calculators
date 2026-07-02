# WORKFLOW #11 — AUTONOMOUS INVESTOR-DAY LOOP (codified 2026-07-02, user "go")

**User authorization (2026-07-02):** the six-condition design ("what must be true to mimic an investor's day, LLM-natively") approved verbatim with "go". Rule #11d framework gate cleared.

**Design principle:** NOT a mimicry of a human's serialized day — an **event mesh**: few scheduled wakes (cache/cost-aware) + catalyst checks inside each wake + massive parallelism within a wake when warranted. Decision authority NEVER crosses the order ticket (Rule #11: sizing user-gated, holdings.md canonical-on-screenshot only).

## Wake slots (armed via session cron; times local CET/CEST)

| Slot | Local time | Covers | Per-wake protocol |
|---|---|---|---|
| KR/JP OPEN | ~02:22 daily | KST 09:20 / JST 09:20 | Read `day-state.md` → Workflow #10 KR/JP two-leg scan (≤2 Opus agents baseline) → catalyst-clock check (e.g., Samsung prelim ~Jul-7 lands HERE) → cascade+commit → decision package + push-notify ONLY if materiality gate passes |
| EU OPEN | ~08:23 daily | EU open, overnight US digestion | Light wake: overnight delta vs day-state; EU-listed names (BESI/LPKF/Karnov watch); escalate to agents only on tripwire |
| US PRE-MARKET | ~14:52 daily | 08:52 ET | US two-leg scan; held-ADR/US watchlist deltas; prediction-board resolutions due that day |
| EOD SYNTHESIS | ~22:17 daily | After US close | Write `day-state.md` for tomorrow (catalyst clock 72h, open threads, pending packages); grade anything resolved; ledger/todo hygiene; commit |
| WEEKEND DEEP-WORK | Sat ~10:03 | — | One P1 framework item per week (current queue: AI-funding-shock node w/ rates-driver; end-demand-durability model) |

## Per-wake budget envelope (governor)
Baseline ≤2 Opus verification agents per routine wake; escalation to fan-out ONLY on: tripwire/falsifier fire, prediction resolution day, or user-shared input. EOD + EU wakes default to agent-zero (read/synthesize/commit only). This keeps the autonomous baseline ~order-of-magnitude below today's program-day burn.

## Decision-package protocol (the async Rule #11 inbox)
When a wake hits an entry/exit/trim condition: write `portfolio/decision-packages/YYYY-MM-DD-{name}.md` — proposed action + size + rationale + falsifier + expiry date — commit, and push-notify ONE line. User approves by replying; silence = no action; expiry = package lapses (logged). NEVER executed by the loop itself.

## Notification materiality gate
Push-notify ONLY for: (a) falsifier/tripwire fired on a held name; (b) decision package created; (c) prediction resolved with a grade surprising vs pre-registration; (d) system failure (wake couldn't complete). Everything else lands in files + the EOD state, silently.

## HONEST INFRASTRUCTURE LIMIT (do not overstate durability)
Cron jobs are SESSION-SCOPED (in-memory; die with the session/container) and recurring jobs AUTO-EXPIRE after 7 days (fire once more, then delete). Therefore:
- **Re-arm protocol:** `day-state.md` header carries the armed-schedule block + arm date. ANY new/resumed session that reads day-state and finds the schedule stale (>6 days old or jobs absent per CronList) MUST re-arm the 5 jobs and update the header. The session-start hook surfaces day-state existence.
- Current arming covers 2026-07-03 → ~2026-07-09 — which spans the Samsung prelim (~Jul-7), the keystone catalyst.
- If the platform later exposes durable scheduling, migrate; until then the loop is durable-by-protocol, not durable-by-infrastructure.

## 30-day falsifier (pre-registered 2026-07-02; audit 2026-08-02)
POSITIVE: ledger yield distribution of autonomous wakes matches user-triggered mode (HIGH-dominant) AND ≥1 autonomous wake catches something time-sensitive the user-triggered mode would have missed. NEGATIVE/RETIRE: wakes produce digests with no cascades/decisions consumed, OR ≥3 ZERO-yield wake entries — cut daily cadence, keep catalyst one-shots only. The loop must NOT manufacture signal to justify its wakes.

## Status log
- 2026-07-02: Codified; day-state.md created; 5 jobs armed (see day-state header).

## WAKE-AUDIT PROTOCOL (codified 2026-07-02 PM; user command: "wake audit")
On the phrase "wake audit" (or any morning check-in after an autonomous window), execute deterministically:
1. `git fetch origin` + read remote branch log since the last user-attended commit — overnight wake commits are identified by TIMESTAMP (02:22/08:23/14:52/22:17 CEST ±jitter). Remote history = ground truth (survives container swaps; user-verifiable on GitHub independently).
2. `CronList` — empty ⇒ container swapped since arming ⇒ jobs dead (CronCreate state is PROCESS-memory, not session-transcript; a container change kills the scheduler even though the session "never closes" — user-confirmed operating reality 2026-07-02).
3. GRADE the wake window vs the WAKE-1 pre-registration in `day-state.md` (PASS / PARTIAL / FAIL-infrastructure) → ledger entry.
4. RECOVER: re-arm all 5 jobs if absent (update day-state armed-header); run catch-up scan for any missed slot whose market window already closed.
5. REPORT: one table — slot | fired? (commit SHA/time) | produced | verdict — plus, on FAIL-infrastructure, restate the standing conclusion: perpetuity requires a platform-level scheduled trigger (user-side one-time setup; docs: code.claude.com Claude Code on the web — triggers), not longer-lived containers.
