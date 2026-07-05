# PLATFORM TRIGGER SETUP — the one-time step that makes the autonomous loop survive (user-side; written 2026-07-05)

**Why this exists:** in-session scheduling dies whenever the cloud machine recycles (WAKE-1/WAKE-2 audits, on file). "Routines" run on Anthropic's cloud scheduler instead — they survive recycles. This is the Workflow #11 perpetuity fix. Docs verified 2026-07-05 via claude-code-guide agent: https://code.claude.com/docs/en/routines.md + https://code.claude.com/docs/en/claude-code-on-the-web

**⚠️ The one catch:** routines CANNOT be created from the mobile app (monitoring runs there works fine). You need a desktop/laptop web browser once: **claude.ai/code/routines**.

## Routine 1 — "KR-JP morning wake" (the important one)

1. On a computer, open **claude.ai/code/routines** → click **New routine**.
2. **Name:** `KR-JP morning wake`
3. **Prompt** — paste exactly this:
   > Check out the branch claude/add-test-coverage-0g0QF (git fetch origin claude/add-test-coverage-0g0QF && git checkout claude/add-test-coverage-0g0QF). Then read research/meta/day-state.md and research/meta/workflow-11-autonomous-day-loop.md, and execute the KR/JP morning wake exactly per Workflow #11 and the day-state docket: two-leg scan with the named source roster (TrendForce by name), catalyst-clock check, cascade + commit + push to the same branch. Respect the per-wake budget (≤2 agents baseline; escalate only per the escalation conditions in day-state). Decision packages and notifications only per the materiality gate. Never touch portfolio/holdings.md.
4. **Repositories:** add `buggatidealership/Health-Calculators`.
5. **Environment:** your existing/default one.
6. **Trigger → Schedule → Daily**, time = **02:22** your local German time (CEST) — the system converts to ~00:22 UTC, which is 09:22 in Seoul/Tokyo, right after those markets open. (After winter time change, adjust to keep it 09:22 KST if you care about precision.)
7. Click **Create**, then click **Run now** once to test — open the run and check it produced a commit on the branch.

## Routine 2 — "EOD synthesis" (optional, recommended)

Same steps; name `EOD synthesis`; schedule **Daily 22:17** German time (~20:17 UTC, after US close); prompt:
> Check out the branch claude/add-test-coverage-0g0QF (git fetch origin claude/add-test-coverage-0g0QF && git checkout claude/add-test-coverage-0g0QF). Read research/meta/day-state.md and execute the Workflow #11 EOD SYNTHESIS wake: write tomorrow's day-state (catalyst clock 72h, open threads, pending packages), grade anything that resolved today, ledger/todo hygiene, commit + push. Agent-zero by default (no subagents unless a resolution requires verification).

## Notes (verified against docs, 2026-07-05)
- Runs land as fresh cloud sessions; each is independent — that's fine, the repo + day-state.md ARE the memory (by design).
- Pushing to `claude/`-prefixed branches is allowed by default — our branch qualifies; no extra permission needed.
- Green status on a run = it started/exited cleanly, NOT that the work succeeded — spot-check by opening a run, or just glance at the GitHub commit list (commits ~02:22/22:17 German time = wakes fired).
- Minimum interval 1 hour; daily runs count against a per-account routine cap (visible on the routines page).
- Once created, you can monitor runs from the mobile app.
- **After setup:** tell me "routines are live" — I'll retire the fragile in-session cron arming, note the change in Workflow #11, and the "wake audit" command becomes your independent check that mornings actually ran.

## Status
- 2026-07-05: guide written; user committed to doing the setup this week. PENDING user execution.
