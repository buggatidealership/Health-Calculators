# Hook fire log (persistent, git-committed)

**Created:** 2026-06-12 (two-bracket experiment week-1 check — transcript archaeology proved fragile in ephemeral cloud containers; fires must be logged to a committed file to be measurable across container lifetimes).

Format: `- YYYY-MM-DD HH:MM:SSZ {hook-name} FIRE`
Appended automatically by the hook itself at fire time. Currently instrumented: `structural-output-hook.py`. Other Stop hooks can adopt the same pattern if their fire rates become audit-relevant.

Baseline before instrumentation (from transcript archaeology, deduped — see `recurring-audit-log.md` 2026-06-12 entry): 06-01: 1, 06-03: 1, 06-04: 4, 06-05: 2, 06-06→12: 0.

---
- 2026-06-12 06:20:05Z structural-output-hook FIRE (smoke-test against fake transcript — NOT a genuine fire; do not count in week-2 check)
- 2026-06-12 12:13:02Z session-prime-hook event=startup injected=True (10089 chars)
- 2026-06-12 12:13:02Z session-prime-hook event=resume injected=False (skipped non-startup)
- 2026-06-12 19:09:37Z macro-anchor-hook FIRE (missing macro-anchor / research-tag / tie-together)
- 2026-06-13 06:42:10Z structural-output-hook FIRE
- 2026-06-13 19:58:22Z structural-output-hook FIRE
- 2026-06-14 07:48:18Z structural-output-hook FIRE
- 2026-06-14 15:20:38Z structural-output-hook FIRE
- 2026-06-17 14:01:09Z structural-output-hook FIRE
- 2026-06-18 16:33:37Z structural-output-hook FIRE
- 2026-06-21 22:45:44Z structural-output-hook FIRE (structural-markers-missing)
- 2026-06-21 22:57:55Z structural-output-hook FIRE (structural-markers-missing)
- 2026-06-22 19:18:30Z structural-output-hook FIRE (structural-markers-missing)
- 2026-06-23 11:37:54Z structural-output-hook FIRE (position-implication-tier-missing)
- 2026-06-23 14:56:20Z structural-output-hook FIRE (structural-markers-missing)
- 2026-06-24 07:35:30Z structural-output-hook FIRE (structural-markers-missing)
- 2026-06-25 21:07:01Z structural-output-hook FIRE (structural-markers-missing)
- 2026-06-26 13:23:33Z session-prime-hook event=startup injected=True (18825 chars)
