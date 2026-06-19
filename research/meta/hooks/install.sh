#!/usr/bin/env bash
# Hook installation script for the AI Sector Research OS.
#
# Why this exists: Claude Code on Web spins up an ephemeral container per
# session. `~/.claude/` is reset to a base config at session start, wiping
# any hook installs from prior sessions. The mirror in `research/meta/hooks/`
# is committed to the repo so it survives, but it has to be cp'd into
# `~/.claude/` each session for Claude Code to invoke the hooks.
#
# Two activation paths:
#
# 1. Manual per-session activation (typical for ad-hoc sessions):
#       bash research/meta/hooks/install.sh
#
# 2. Durable activation (recommended): configure this script as the
#    environment setup script in the Claude Code on Web environment
#    config UI. It then runs automatically at every container start.
#    Docs: https://code.claude.com/docs/en/claude-code-on-the-web
#
# Idempotent: safe to run multiple times. Overwrites existing files in
# `~/.claude/` with the mirror versions; preserves system-managed files
# (`session-start-git-identity.sh`, `stop-hook-git-check.sh` are intentionally
# co-managed — the install script does NOT touch `launcher-settings.json`,
# `remote-settings.json`, or `policy-limits.json`).
#
# Backup pattern: every overwrite creates `${name}.bak.${YYYY-MM-DD}` (preserved
# per H1-ACTIVATION-RESOLVED 2026-06-19 rollback convention).

set -e

MIRROR_DIR="$(dirname "$(readlink -f "$0")")"
CLAUDE_DIR="${HOME}/.claude"
BACKUP_DATE="$(date +%Y-%m-%d)"

if [ ! -d "${CLAUDE_DIR}" ]; then
    echo "ERROR: ${CLAUDE_DIR} does not exist; refusing to create." >&2
    exit 1
fi

# Hooks to install (every Python hook in the mirror + the settings.json wiring).
# Explicitly list — do not glob — so newly added mirror files don't auto-install
# without review.
HOOK_FILES=(
    "analyst-pt-context-hook.py"
    "anti-fabrication-hook.py"
    "antifragility-mn-hook.py"
    "borrowed-vs-firstprinciples-hook.py"
    "bottoms-up-hook.py"
    "bypass-route-hook.py"
    "cascade-enforcement-hook.py"
    "llm-native-priming-hook.py"
    "llm-native-reasoning-hook.py"
    "macro-anchor-hook.py"
    "nth-order-cascade-hook.py"
    "reasoning-tagging-hook.py"
    "segment-trajectory-hook.py"
    "session-prime-hook.py"
    "session-start-hook.py"
    "signal-ingest-cascade-hook.py"
    "structural-output-hook.py"
)

SETTINGS_FILE="settings.json"

backup_if_exists() {
    local target="$1"
    if [ -f "${target}" ] && [ ! -f "${target}.bak.${BACKUP_DATE}" ]; then
        cp "${target}" "${target}.bak.${BACKUP_DATE}"
    fi
}

install_count=0
for hook in "${HOOK_FILES[@]}"; do
    src="${MIRROR_DIR}/${hook}"
    dst="${CLAUDE_DIR}/${hook}"
    if [ ! -f "${src}" ]; then
        echo "  SKIP ${hook} (not in mirror)"
        continue
    fi
    backup_if_exists "${dst}"
    cp "${src}" "${dst}"
    chmod +x "${dst}"
    install_count=$((install_count + 1))
done

# settings.json — install only if not present, OR if mirror differs.
# Merges with launcher-settings.json system hooks automatically (Claude Code
# reads both; multiple hooks per slot are invoked in sequence).
src="${MIRROR_DIR}/${SETTINGS_FILE}"
dst="${CLAUDE_DIR}/${SETTINGS_FILE}"
if [ -f "${src}" ]; then
    backup_if_exists "${dst}"
    cp "${src}" "${dst}"
    install_count=$((install_count + 1))
fi

echo "✅ Installed ${install_count} hook files into ${CLAUDE_DIR}"
echo "   Backups (if any) at ${CLAUDE_DIR}/*.bak.${BACKUP_DATE}"
echo ""
echo "Smoke test:"
echo "   echo '{}' | python3 ${CLAUDE_DIR}/session-start-hook.py | head -10"
echo ""
echo "Rollback (per file):"
echo "   cp ${CLAUDE_DIR}/{name}.bak.${BACKUP_DATE} ${CLAUDE_DIR}/{name}"
