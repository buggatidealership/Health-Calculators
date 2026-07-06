# 2026-07-03 — WAKE-1 AUDIT: FAIL-infrastructure (process death), graded per pre-registration

**Verdict: FAIL-infrastructure — the pre-registered most-likely failure mode.** Evidence (wake-audit protocol executed 2026-07-03 ~10:04 UTC): zero commits on origin after 919e479e (07-02 23:53); no `w11-heartbeat-log.md`; CronList EMPTY. Neither the 00:25 heartbeat (harness ScheduleWakeup) nor any cron slot fired.

**Model revision (the audit's real yield):** the sentinel `~/.w11-armed-sentinel` SURVIVED while all scheduler state died ⇒ the unit of death is the **REPL PROCESS, not the container** — filesystem persisted, process state didn't. Consequences:
1. **A/B answered on night one: BOTH schedulers (process cron + harness wakeup) are process-scoped.** Neither survives an idle process restart. The Change-2 hypothesis (harness-level survival) is REFUTED.
2. The sentinel detects container swaps but NOT process restarts — the definitive in-session test is CronList-empty, which the wake-audit already uses. Hook banner stays useful for true container swaps only.
3. **Perpetuity conclusion now FINAL, not conditional: a platform-level scheduled trigger (user-side, one-time; docs: code.claude.com — Claude Code on the web, triggers/sources) is the ONLY mechanism that survives. All in-session scheduling is best-effort intraday coverage while a process happens to live.**
4. Timezone catch: container local time = UTC, so the 07-02 arming ("02:22 local") actually targeted 04:22 CEST — mistimed 2h late for KR open. Re-arm 2026-07-03 uses UTC-explicit slots: KR/JP 00:22 UTC, EOD 20:17 UTC (minimal two-slot re-arm pending process-survival evidence; EU/US slots restored only if today's process survives to EOD).

**3-layer GRADE:** INPUT — correct (pre-registration named this exact mode most-likely). COMPUTATION — flawed: container-swap model conflated container with process; sentinel design tested the wrong boundary. REASONING — sound: pre-registering FAIL-infrastructure as expected + building the audit protocol made the failure fully diagnostic in one cycle. Lesson candidate: in managed environments, enumerate WHICH state layer each mechanism lives in (process/filesystem/platform/remote) BEFORE building on it — filesystem-persistence evidence does not imply process persistence.

**Recovery executed same turn:** KR/JP + EOD slots re-armed (UTC-correct); catch-up = the user-triggered full-team morning scan (4 agents in flight) covers the missed KR/JP window; day-state updated.
