---
name: research
description: Semantic demand research — Twitter data collection, pattern analysis, demand signal extraction. Use when collecting new data, analyzing user language, or expanding research to new topics.
user-invocable: true
allowed-tools: Read, Write, Bash, Glob, Grep, WebFetch, WebSearch
---

# Semantic Demand Research

You collect and analyze what real people say about health topics. Your outputs feed design decisions and content strategy. Every finding must be traceable to source data.

## STEP 0: Load Existing Research (MANDATORY)

Read before starting:
1. `tools/research-data/semantic_demand_findings_v1.md` — what's already known
2. `tools/research-data/twitter_demand_collection_v3.json` — existing 616-tweet dataset

State what's already been researched for this topic. Don't duplicate existing work.

## STEP 1: Define Specific Queries

Not "research creatine" — instead:
- "Search Twitter for 'how much creatine should I take' with >5 likes"
- "Search for 'creatine (loading OR daily OR dose)' excluding ED content"

Define at least 3 queries per topic, targeting:
- Direct tool demand ("X calculator", "how to calculate X")
- Natural language questions ("how much should I", "what's my")
- Frustration/accuracy ("X is wrong", "which X is accurate", "X doesn't work")

## STEP 2: Filter Noise (from verified mistakes)

Our v2 dataset was 59% eating disorder content. The "Am I overweight?" viral tweet was engagement farming (63% compliment replies). Apply these filters:

**ED filter:** Remove tweets containing edtwt, wltwt, restrict, purge, anorex, metabolism day, and related terms. Script at `tools/research-data/twitter_collect_v3.py` has the full filter list.

**Engagement farming filter:** For high-engagement tweets, check reply content. If >50% of replies are compliments/thirst/spam rather than genuine health questions, flag the tweet as engagement farming, not demand signal.

**Bot/spam filter:** Skip tweets from accounts with >50% promotional content in replies.

## STEP 3: Extract Patterns

For each topic researched, extract:

| Pattern | How to measure |
|---------|---------------|
| Emotional state | Keyword matching: confused/frustrated/seeking/skeptical/sharing |
| Question types | Categorize replies: comparison/dosage/safety/personal fit/mechanism |
| Bookmark/like ratio | >0.2 = reference mode, <0.1 = validation mode |
| Content format | What structure drives engagement: list, data/study, question, personal story |
| User language | Exact phrases people use (for labels, headings, copy) |

## STEP 4: Output Format

Save to `tools/research-data/` with structured format:
- Date, source count, queries used
- Data tables (not prose) for each pattern
- Top tweets with engagement metrics
- Reply analysis with categorization

## STEP 5: Falsifiability & Uncertainty

For each finding, state:
- **What would disprove it?** If nothing, label it an assumption.
- **Sample size:** How many tweets support this finding? <10 = directional only.
- **Single-source warning:** If only from Twitter, say so. The finding may not generalize.

## STEP 6: Look for What Doesn't Fit

After categorizing into known patterns, actively search for:

1. **Signals that don't fit any existing category.** A tweet that's not confused, frustrated, seeking, skeptical, or sharing — what IS it? These outliers may reveal a user mode we haven't named.
2. **Contradictions to existing findings.** If we found "comparison is #1 question type" but this topic shows "dosage is #1" — that's not noise, it's a topic-specific signal. Don't force-fit.
3. **Unexpected high-engagement content.** A tweet format or topic angle we didn't anticipate. Why did it work?
4. **Absence of expected signals.** If we expected frustration for a topic but found none — that absence is data.
5. **Cross-topic patterns we haven't seen before.** Something that connects two seemingly unrelated calculator topics.

The existing framework is a lens. Lenses clarify but also filter. Actively look for what the lens might be filtering out.

$ARGUMENTS
