# Principle Applications Log

**Last updated:** 2026-05-27 (file created alongside principle #32 codification)

## Purpose

Per principle #32 (Pre-Action Checkpoints) + user constraint 2026-05-27: *"as long as the changes, if turned out to be rigid or are working against the expected net positive improvement, are detectable if they do not work, then yes [codify]"*.

This log records every meaningful application of principle #32 with classification, enabling monthly audit per the detectability mechanism.

## Format

One line per application:

```
[YYYY-MM-DD] {PRINCIPLE-ID} | {context} | {what was checked} | {what was caught} | {classification: REAL CATCH / FALSE POSITIVE / WASTED OVERHEAD / CORRECT DROP}
```

## Audit metrics (computed monthly at recurring cycle)

- **Real-catch rate** = REAL_CATCHES / TOTAL_APPLICATIONS. Target ≥40%. Below 20% → over-applying, raise threshold.
- **False-positive rate** = FALSE_POSITIVES / TOTAL. Target <30%.
- **Wasted-overhead rate** = WASTED_OVERHEADS / TOTAL. Target <30%.
- **Net-positive check**: REAL_CATCHES > WASTED_OVERHEADS over 30-day window. If not → principle requires revision.

If 3+ consecutive months fail any metric → escalate to retire-or-revise per principle #32 falsifiers.

## Applications (most recent first)

### 2026-05-27 (codification day — seed entries from the AM brief triage that triggered the codification)

| Date | Principle | Context | Checked | Caught | Classification |
|---|---|---|---|---|---|
| 2026-05-27 | #32-A (fresh-verify) | AM brief DDG +30% framing | Fresh WebSearch for DDG install surge details | Brief framing was "30% surge" implying single-day spike; verified data is 30.5% PEAK on May 25 + 18.1% WoW US average sustained 6 days + iOS +33% WoW peaking 69.9% + noai.duckduckgo.com +22.7% | REAL CATCH — stronger evidence + more nuanced pattern than initial framing |
| 2026-05-27 | #32-A (fresh-verify) | AM brief xAI gas pivot framing | Fresh WebSearch for xAI Colossus natural gas + solar | Brief framing was "abandons solar for gas"; actual is 62 UNPERMITTED methane turbines + $2.8B more purchased + solar NOT fully abandoned (88-acre = ~10% power) + EPA/NAACP regulatory action. PLUS hidden bigger signal: Anthropic→xAI $1.25B/month for Colossus = $40B+ through 2029 NOT in brief | REAL CATCH — found bigger signal not in source brief + corrected mis-framing |
| 2026-05-27 | #32-B (premortem) | Proposed claim "near-triangulation threshold (4+ data points)" for power-pivot | Grep cross-source-log.md + bottlenecks.md for prior power-pivot references | Only ONE prior reference in bottlenecks.md, not "4+" as casually claimed | REAL CATCH — vibes-estimate corrected to actual count |
| 2026-05-27 | #32-B (premortem) | Proposed LSCC thesis update on AMD Vivado Linux restriction | Premortem: "what could go wrong if I add this?" | Vivado restriction affects developer workflow not enterprise BMC socket; adding marginal signal would dilute thesis file quality | CORRECT DROP — no update made; thesis file kept clean |

**Seed run totals (1 turn, 4 applications):**
- Real catches: 3
- Correct drops: 1
- False positives: 0
- Wasted overheads: 0
- Real-catch rate: 75%
- Net-positive check: PASSES (3 real catches + 1 correct drop > 0 wasted overheads)

**Caveat:** This is N=4 across one turn. Statistically meaningless. Real audit value emerges at N=30+ over 30 days.

## Monthly audit log (entries added at recurring cycles)

(none yet — first audit scheduled for next recurring cycle 2026-06-24 per todo.md)
