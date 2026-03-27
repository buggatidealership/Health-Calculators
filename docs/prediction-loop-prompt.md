# Prediction Feedback Loop — Build Prompt

Feed this document as input to build the autonomous prediction feedback loop system.

## What You Are Building

A closed-loop system where:
1. Predictions are logged before acting (already exists — `prediction-log.md` format)
2. A session-start hook automatically checks due predictions, collects outcome data, and outputs decision-formatted results into the session context
3. The output format triggers action — every resolved prediction maps to a decision, not a summary
4. You act on the decisions without being asked

## What Exists Already

- `~/.claude/projects/-root/memory/prediction-log.md` — 4 active predictions with structured format (ID, claim, evidence, metric, check date, outcome)
- `~/.claude/settings.json` — hook configuration, including existing `session-start-patterns.sh`
- `tools/twitter_engagement.py` — healthcalc-specific data collector (reference implementation, not the only collector)

## What You Are Building Now

### 1. Generalized prediction-check hook script

Location: `~/.claude/hooks/prediction-check.sh`

Behavior:
- Runs at session start (alongside existing hooks)
- Reads `prediction-log.md` (path from project memory directory)
- Finds predictions where check date ≤ today AND outcome = PENDING
- For each due prediction:
  - Identifies the data source from the prediction's metric field
  - Runs the appropriate data collector (e.g., `twitter_engagement.py` for Twitter metrics, or other collectors as registered)
  - Compares collected data against the prediction's claim
  - Classifies: CONFIRMED / FAILED / INCONCLUSIVE (insufficient data)
- Outputs structured block to stdout (this lands in session context)

### 2. Output format (decision-relevant, not informational)

```
=== PREDICTIONS DUE ===
[P001] CONFIRMED — {one-line result with numbers}
  → Decision: {what this means for the next action}
[P002] FAILED — {one-line result with numbers}
  → Decision: {what this changes about current strategy}
[P003] INCONCLUSIVE — {why}
  → Decision: extend check to {new date} / abandon prediction
=== END PREDICTIONS ===
```

If no predictions are due:
```
=== PREDICTIONS: none due ===
```

### 3. Data collector registry

The hook needs to know which collector to run for which metric type. Create a simple registry:

Location: `~/.claude/hooks/prediction-collectors.json`

```json
{
  "twitter_engagement": {
    "command": "python3 tools/twitter_engagement.py",
    "cwd": "/root/healthcalculators-full",
    "parses": "likes, replies, impressions, bookmarks per tweet"
  }
}
```

New collectors are added to this file as new prediction types emerge. The hook reads this registry to know what to run.

### 4. Hook registration in settings.json

Add `prediction-check.sh` to the `SessionStart` hook array in `~/.claude/settings.json`, alongside existing hooks.

### 5. Decision-line generation

The `→ Decision:` line is the critical piece. The hook cannot reason — it's a shell script. So it uses templates:

- CONFIRMED: `→ Decision: prediction validated. Continue current approach for {domain}.`
- FAILED: `→ Decision: prediction invalidated. Re-evaluate {domain} strategy before next action.`
- INCONCLUSIVE: `→ Decision: insufficient data. Extend check window to {date + 7 days} or mark as untestable.`

These are starter templates. The agent (you, reading the output) does the real reasoning — the template just ensures the output is framed as a decision, not a report.

## Constraints

- The hook must not modify `prediction-log.md` — only the agent does that after reasoning about the results
- The hook must complete in under 30 seconds (API calls have timeouts)
- If a collector fails (API error, missing credentials), output: `[P00X] ERROR — {collector} failed: {error}. Manual check required.`
- The system is project-agnostic. The prediction log format and collector registry work for any project, not just healthcalculators.

## After Building

1. Resolve the 4 active predictions (P001-P004) manually this session — they're already overdue
2. Update `prediction-log.md` with outcomes and analysis
3. Verify the hook fires correctly by checking output format
4. Update `operating-system.md` §1 to register prediction-check as a binary hook
5. Update `MEMORY.md` if a new memory file is created

## Success Criteria

- Next session: predictions due are surfaced automatically with decision lines
- You act on them without being prompted
- The prediction log becomes a live feedback loop, not a dormant document
