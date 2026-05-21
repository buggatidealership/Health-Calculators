# Hooks — enforcement layer for the AI Sector Research OS

**Purpose:** Hooks ENFORCE behavior. Instructions in CLAUDE.md are choices the model can skip; hooks are deterministic shell-level code that runs regardless of model choice. Anything that matters operationally should be enforced via a hook, not just documented in a rule file.

**Where they live:**
- Production location: `~/.claude/*.py`, `~/.claude/*.sh`, `~/.claude/settings.json`
- Mirror in repo (for backup/reference/version control): `research/meta/hooks/`

**Why mirror them:** The `~/.claude/` directory may not persist across container restarts in remote execution environments. Keeping a copy in the repo means hooks can be re-installed from version control if lost. Update the mirror whenever a hook is changed in `~/.claude/`.

---

## Active hooks (registered in `~/.claude/settings.json`)

### `session-start-hook.py` — SessionStart
Auto-surfaces a briefing at session start: top to-do items from `research/meta/todo.md`, pending grades, stale reviews. Output appears in session-start context.

**Always exits 0** (informational, never blocking).

### `stop-hook-git-check.sh` — Stop
Requires uncommitted changes to be committed + pushed before each turn completes. Forces every meaningful change into version control.

**Exits 2** if uncommitted changes exist; **0** otherwise.

### `anti-fabrication-hook.py` — Stop
Scans the most recent assistant message for numerical claims ($X, X%, X GW, X wafers, etc.) and verifies each has a nearby citation, file reference, or explicit hedge ((estimate), (approximate), ~, etc.). Forces citation discipline.

**Exits 2** with stderr feedback if uncited numerical claims found; **0** otherwise.

**Bias addressed:** B11 in `research/meta/biases-watchlist.md` (numerical claims without citation).

### `cascade-enforcement-hook.py` — Stop (added 2026-05-21)
Enforces **CLAUDE.md Critical Rule #10**: cross-source synthesis artifacts must cascade to each named ticker's thesis file.

**What it checks:**
1. Is there a synthesis artifact in the current changeset (working tree + staged + most-recent-commit)?
   - Patterns: `research/meta/*-comparison.md`, `research/meta/*-thesis-comparison.md`, `research/signals/events/*.md`, `research/signals/triangulation.md`, `research/sector/*-comparison.md`
2. For each artifact, extract named tickers (via `companies/{TICKER}/` references AND bold `**TICKER**` patterns, filtered to actual ticker directories).
3. For each named ticker, verify `research/companies/{TICKER}/thesis.md` contains a reference to the artifact path or its basename.
4. If any ticker is missing the back-reference, exit 2 with feedback listing the missing cascades.

**Exits 2** with stderr feedback if cascade incomplete; **0** otherwise.

**Bias addressed:** B16 in `research/meta/biases-watchlist.md` (synthesis-without-cascade / artifact-isolation bias).

**Test the hook manually:**
```bash
# Pass case (current state, cascade complete):
python3 ~/.claude/cascade-enforcement-hook.py < /dev/null
# Expected: exit 0, no output

# Fail case (deliberately strip a back-reference):
cp research/companies/HYNIX/thesis.md /tmp/backup.md
grep -v "patel-vs-aschenbrenner-thesis-comparison" research/companies/HYNIX/thesis.md > /tmp/stripped.md
cp /tmp/stripped.md research/companies/HYNIX/thesis.md
python3 ~/.claude/cascade-enforcement-hook.py < /dev/null
# Expected: exit 2, stderr lists HYNIX as missing back-reference
cp /tmp/backup.md research/companies/HYNIX/thesis.md  # restore
```

---

## How to add a new hook

1. Write the hook script in `~/.claude/<name>.py` (or `.sh`). Follow the patterns:
   - Check scope first (only enforce inside Health-Calculators repo)
   - Read `stop_hook_active` from stdin JSON to avoid recursion
   - Exit 0 to pass, exit 2 with stderr to block
2. Make executable: `chmod +x ~/.claude/<name>.py`
3. Test manually with `python3 ~/.claude/<name>.py < /dev/null` — verify both pass and fail cases
4. Register in `~/.claude/settings.json` under the appropriate event (Stop, SessionStart, UserPromptSubmit, PreToolUse, PostToolUse)
5. Mirror to `research/meta/hooks/`
6. Document here (this README) + update CLAUDE.md §"Enforcement hooks (live)"
7. Add a bias entry in `research/meta/biases-watchlist.md` if the hook corrects a documented model failure

## Hooks I would add next (deferred)

- **UserPromptSubmit hook**: when user submits a message containing a URL, image attachment, or named-source pattern (e.g., "X said Y", "per the article"), inject context: "INGEST workflow required. Extract facts, source-tier, named tickers. Cascade-enforcement will run on Stop." This auto-orients me to the right workflow on every input.
- **Stop hook — workflow-detection**: when the artifact pattern indicates a deep-dig run, verify the deep-dig-queue.md was updated to mark the item complete. Same logic as cascade enforcement, applied to a different artifact type.
- **Stop hook — decision-prompt**: at end of any meaningful research turn, prompt the user with options: "Continue researching / Debate this read / Cascade to additional companies / Move on." Surfaces decision points the user can accept or redirect.

These get built when needed; cascade-enforcement was the highest-leverage one because B16 had just fired.
