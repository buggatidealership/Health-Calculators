# Durable Hook Activation — Claude Code on Web

**Status:** PENDING USER ACTION (configure environment setup script via web UI)
**Created:** 2026-06-19 (post H1-CONTAINER-EPHEMERALITY-FIX `ce008ea6`)
**Last verified per-session activation works:** 2026-06-19 12:22 UTC (smoke tests 5/5 PASS after `bash research/meta/hooks/install.sh`)

## TL;DR

Configure `bash research/meta/hooks/install.sh` as the **environment setup script** in the Claude Code on Web environment config UI for this repo. One-time setup. After that, every fresh container automatically installs all 17 hooks + `settings.json` wiring before the session starts.

## Why this exists

Claude Code on Web spins up an ephemeral container per session. `~/.claude/` is reset to a base config (system files only: `launcher-settings.json`, `session-start-git-identity.sh`, `stop-hook-git-check.sh`, `stop-hook-reply-gate.py`) at every container start. Any hooks installed in prior sessions are wiped.

Without durable activation:
- Every new session starts with NO research-OS hooks active
- Position-implication tier marker enforcement: NOT firing
- Session-start briefing (todo + P0 + grades + STALE + cost-yield): NOT producing
- Anti-fabrication, cascade-enforcement, structural-output, 10+ other Stop hooks: NOT firing
- Hook-fire-log instrumentation: NOT logging
- All discipline reverts to LLM-native-only (no enforcement layer)

This is the structural environment behavior, not a one-off. Was the root cause of the 2026-06-19 12:00 UTC fresh-container hook-absence finding.

## The fix (when you have laptop access)

### Step 1 — Open Claude Code on Web environment config UI

The environment is associated with the `buggatidealership/Health-Calculators` repo. Find the environment config for this repo in the Claude Code on Web settings.

Docs: https://code.claude.com/docs/en/claude-code-on-the-web

### Step 2 — Configure the setup script

Locate the "Setup script" or "Environment setup" field. Enter exactly:

```bash
bash research/meta/hooks/install.sh
```

The setup script runs as part of container provisioning, AFTER repo clone completes and BEFORE the Claude Code session starts. The script's working directory is the repo root, so the relative path `research/meta/hooks/install.sh` resolves correctly.

### Step 3 — Save

That's it. Configuration persists across all future containers because it lives in the web UI, not in the container filesystem.

## Verification protocol (after setup-script config)

End the current session, start a fresh session, then in the new session run:

```bash
ls -la ~/.claude/session-start-hook.py ~/.claude/structural-output-hook.py ~/.claude/settings.json
```

**Expected output:**
- `session-start-hook.py` — 18692 bytes, mode `-rwxr-xr-x`
- `structural-output-hook.py` — 12476 bytes, mode `-rwxr-xr-x`
- `settings.json` — 2996 bytes

If any file is missing, the setup script didn't run. Likely causes:
- Typo in setup script path (UI may have whitespace issues)
- Repo not cloned to expected path `/home/user/Health-Calculators`
- install.sh permission error (re-check `chmod +x`)
- `~/.claude/` doesn't exist (install.sh exits 1 with error)

**Second verification** — produce an analytical response containing a `Position implication:` line WITHOUT a 🟢/🟡/🔴 tier marker. The `structural-output-hook` should fire and append a line to `research/meta/hook-fire-log.md` like:

```
- 2026-06-XX HH:MM:SSZ structural-output-hook FIRE
```

If fires appear in the log on fresh sessions, durable activation is confirmed working end-to-end.

## Fallback if setup script doesn't work

If the Claude Code on Web environment config doesn't support setup scripts in your tier, or you can't get them to run, fall back to per-session manual:

```bash
bash research/meta/hooks/install.sh
```

Run that one command at the start of every session. Less convenient but functionally equivalent for the session it's run in.

## What install.sh does

Idempotent. Per execution:
1. Verifies `~/.claude/` exists (exits 1 if not — refuses to create)
2. For each of 17 explicitly-listed mirror hooks: backup existing (dated) → cp from mirror → chmod +x
3. For `settings.json` mirror: backup existing (dated) → cp from mirror
4. Reports count + smoke-test command + rollback path

Does NOT touch:
- `~/.claude/launcher-settings.json` (system-managed)
- `~/.claude/remote-settings.json` (system-managed)
- `~/.claude/policy-limits.json` (system-managed)
- `~/.claude/session-start-git-identity.sh` (system-managed git identity)
- `~/.claude/stop-hook-git-check.sh` (system-managed git-check)
- `~/.claude/stop-hook-reply-gate.py` (system-managed Slack reply gate)

Claude Code merges `launcher-settings.json` (system) + `~/.claude/settings.json` (installed) — multiple hooks per slot run in sequence, so the system hooks + research-OS hooks all fire.

## Linked

- `research/meta/hooks/install.sh` — the installer
- `research/meta/hooks/settings.json` — hook wiring config that gets installed
- `research/meta/hooks/README.md` — Activation section + hook docs
- `research/meta/tier-cascade-log.md` — `[2026-06-19 H1-CONTAINER-EPHEMERALITY-FIX]` entry documenting the structural finding
- `research/meta/subagent-cost-yield-ledger.md` — H2 instrumentation that surfaces in session-start briefing once hooks are durably active
- Commit `ce008ea6` — install.sh ship
- Commit `34b436c6` — H2 ledger ship
- Commit `cecc13fc` — H1-ACTIVATION-RESOLVED (this was the "live ~12 hours then evaporated" precedent that triggered the diagnosis)
