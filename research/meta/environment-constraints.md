# Environment Constraints — Claude Code on Web (Remote-Execution)

**Created:** 2026-06-20 (post WebFetch-blocking experiment finding)
**Purpose:** Capture environment-specific behaviors that affect tool usage so future sessions don't waste calls discovering known-blocked patterns. Lives in the repo so it persists across container restarts.

---

## WebFetch — systematically blocked on external sites (2026-06-20)

**Finding:** WebFetch returns HTTP 403 Forbidden on every external content site tested in this remote-execution environment.

**Test record (2026-06-20, extended 2026-06-22):**

| Domain | Result | Test date |
|---|---|---|
| x.com | 403 | 2026-06-20 |
| benzinga.com | 403 | 2026-06-20 |
| finance.yahoo.com | 403 | 2026-06-20 |
| tomshardware.com | 403 | 2026-06-20 |
| heygotrade.com | 403 | 2026-06-20 |
| hashrateindex.com | 403 | 2026-06-20 |
| am.jpmorgan.com (JPM's OWN domain) | 403 | 2026-06-20 |
| **zdnet.co.kr (Korean primary tech press)** | **403** | **2026-06-22** |

**Pattern:** 8 of 8 fetches blocked across financial press, FinTwit, publisher's own domain, AND Korean primary tech press. The block is not a paywall/auth issue (JPM AM is publicly accessible; ZDNet Korea is publicly accessible); it's an environment-wide outbound-request filter affecting WebFetch user-agent or network policy. The 2026-06-22 zdnet.co.kr addition extends the documented coverage to Korean primary press (previously assumed possibly-accessible given non-Western press is sometimes less aggressively bot-filtered).

**Implication for tool selection:**

| Task pattern | Recommended approach |
|---|---|
| "Source content from public web article" | WebSearch ONLY (snippets); skip WebFetch |
| "Fetch specific URL the user shared" | Try WebFetch once; if 403, ask user to paste the content directly |
| "Source paywalled research report" | (a) WebSearch press coverage for 30-50% headline yield (b) user uploads PDF for 95-100% yield; do NOT plan WebFetch as part of the path |
| "Verify a single fact via URL" | WebSearch with quoted query terms typically faster + works |

**What changed in the path-1 recommendation framework:**

Original recommendation (pre-finding): "WebFetch press coverage → 30-60% yield."
Corrected recommendation (post-finding): "WebSearch press coverage → 30-50% yield; WebFetch returns ~0% in this env."

**Re-verification protocol:** if environment is reconfigured or moved off Claude Code on Web, re-test the 7 domains above. If WebFetch starts succeeding, update this file with the new pattern.

**Linked:**
- `signals/cross-source-log/2026-06-20-jpm-asic-note-websearch-reconstruction.md` — the experiment that surfaced this
- `meta/tier-cascade-log.md` — `[2026-06-20]` entry documenting the cascade

---

## WebSearch — works as expected (2026-06-20)

**Finding:** WebSearch returns snippet-level content from financial press without restriction. Yields 20-50% of an original article's content depending on query specificity + sub-topic targeting.

**Optimization:** for paywalled-report reconstruction, run 4-6 targeted WebSearches on sub-topics (author, market sizing, named customers, PT, specific products) rather than 1-2 broad queries. Multi-query targeted approach reached ~40-50% yield in the JPM ASIC test vs ~20-30% for the initial broad query.

---

## ~/.claude/ ephemerality (documented 2026-06-19)

Container resets `~/.claude/` to system-managed base at every session start. Hook installs from prior sessions don't persist. See `meta/hooks/DURABLE-ACTIVATION.md` + commit `ce008ea6` for full diagnosis + install.sh remediation.

---

## Git remote behavior

- git push retries handle transient network failures up to 4× with exponential backoff per `CLAUDE.md` Critical Rule # / harness convention
- gh CLI NOT available; use mcp__github__* tools instead
- Repo scope restricted to `buggatidealership/health-calculators` (other repos denied)

---

## Classifier (auto-mode) self-modification restrictions

Modifications to `~/.claude/*.py` or `~/.claude/settings.json` from the agent require user-typed-direct-command authorization (verbatim command in chat satisfies). Bundled cps in a single Bash call are blocked if user only typed one verbatim — discrete user-typed-per-file authorization required. See H1-CONTAINER-EPHEMERALITY-FIX `ce008ea6` for the canonical pattern.

---

## How to use this file

1. New environment-specific finding discovered → add a section here
2. Reference this file at session start when planning a multi-tool path
3. If a finding becomes a Critical Rule candidate, escalate to `CLAUDE.md`; if it's just an operational quirk, it lives here
4. Re-verify findings periodically (env behavior can change); falsifier protocol per section
