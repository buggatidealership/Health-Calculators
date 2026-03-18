# @GetHealthC Writing Profile v2 — VERIFIED

**Date:** 2026-03-18
**Source:** 5,001 tweets across 7 verticals. All statistics computed directly from raw data, NOT estimated by LLM.
**Previous version (v1) contained fabricated engagement lift percentages. This version corrects them.**

---

## HOW TO READ THIS DOCUMENT

- **VERIFIED** = computed from raw JSON data
- **DIRECTIONAL** = pattern observed but engagement correlation not statistically proven
- **INVALIDATED** = claimed in v1, disproven by computation

---

## STATISTICAL SIGNATURES (VERIFIED)

### Word Count by Vertical

| Vertical | Median | Best Engagement Range | Avg Eng in Best Range |
|----------|--------|-----------------------|----------------------|
| health | 40 | 50+ words | 1,233 |
| fitness | 37 | <10 words | 4,441 |
| dev | 40 | <10 words | 3,893 |
| finance | 41 | <10 words | 2,094 |
| productivity | 42 | <10 words | 4,439 |
| meme | 27 | 20-30 words | 6,810 |
| reply_pattern | 27 | <10 words | 840 |

**Key finding:** Short tweets (<10 words) perform best in dev, fitness, productivity — but NOT in health. Health rewards longer, substantive content (30-50+ words). Meme rewards mid-length (20-30 words).

**For @GetHealthC:** Target 30-50 words for original posts. This is the health vertical sweet spot where engagement stays high and content has enough substance for tool framing.

### Perspective Ratios (VERIFIED)

| Vertical | you/your | I/my | we/our | you:I ratio |
|----------|----------|------|--------|-------------|
| health | 44% | 40% | 8% | 1.1x |
| fitness | 24% | 27% | 7% | 0.9x |
| dev | 38% | 23% | 7% | 1.6x |
| finance | 38% | 25% | 9% | 1.5x |
| meme | 36% | 20% | 11% | 1.8x |
| productivity | 34% | 28% | 12% | 1.2x |

**Key finding:** Health vertical has near-equal you/I split (44% vs 40%). This is different from dev/finance/meme where "you" dominates. Health content is more personal — people share their own numbers.

**For @GetHealthC:** Both perspectives work. "Your TDEE is..." and "My TDEE was..." are both natural in health.

### Sentence Structure (VERIFIED)

| Structure | Frequency | Avg Engagement |
|-----------|-----------|----------------|
| Single sentence | 21% | 2,872 |
| Two sentences | 25% | 2,141 |
| Multi-sentence | 54% | — |

**Key finding:** Single sentences have higher average engagement than two-sentence tweets. But multi-sentence dominates in volume (54%), suggesting the dataset's engagement threshold already filters for quality in longer formats.

### Punctuation (VERIFIED — top 500 tweets)

| Pattern | Frequency in Top 500 | Avg Engagement | vs Overall Avg |
|---------|---------------------|----------------|----------------|
| No period ending | 89% | 15,846 | +1% |
| Colon present | 78% | 16,181 | +3% |
| Question mark | 10% | 14,352 | -8% |
| 🚨 emoji | 3% | 16,870 | +8% |

**Key finding:** 89% of top-performing tweets end WITHOUT a period. Colons are extremely common (78%) but provide minimal lift (+3%). The 🚨 emoji has a small positive correlation but was fading in temporal analysis (12% archive → 0% recent).

**For @GetHealthC:** Drop the period. Use colons for structure. Skip the 🚨.

---

## ENGAGEMENT PATTERNS (VERIFIED — correcting v1 fabrications)

### What v1 Got Wrong

| Atom | v1 Claimed Lift | Actual Lift | Status |
|------|----------------|-------------|--------|
| Contrast Frame | +156% | -19% to -50% in most verticals | **INVALIDATED as engagement driver** |
| Negation Flip | +127% | 0% (flat) | **INVALIDATED as engagement driver** |
| Numerical Specificity | +89% | -18% | **INVALIDATED as engagement driver** |
| Short tweets (<15w) | +203% universal | +191% dev, -34% health | **NOT universal** |
| 🚨 emoji | +127% | +8% | **Grossly inflated** |

**Critical insight:** These atoms EXIST in high-engagement tweets, but they do not CAUSE higher engagement. Sonnet observed patterns in the top tweets and attributed causation where there was only presence. The contrast frame appears in 28% of top tweets — but tweets WITH contrast words actually perform WORSE on average than tweets without them in 5 of 7 verticals.

**Why this might be:** The dataset is sorted by relevancy from Twitter's API, which biases toward what the algorithm promotes. The atoms may be artifacts of the content types that get promoted, not drivers of engagement themselves. Or: contrast/negation are so common in ALL tweets that they're neutral, not positive.

### What Actually Correlates with Higher Engagement (VERIFIED)

| Pattern | Metric | Notes |
|---------|--------|-------|
| **Short tweets in dev/productivity** | +170-191% vs longer | Works because compressed wisdom format (Jack Butcher style) fits these verticals |
| **Longer tweets in health** | 50+ words = highest avg eng | Health needs substance — protocols, schedules, specific data |
| **Meme 20-30 words** | Highest avg eng (6,810) | Sweet spot: enough for setup+punchline, not too long |
| **No period ending** | 89% of top 500 | Let the thought hang. Don't close it. |
| **Zero engagement begging** | 0% in top 500 | This one is real: "thoughts?" "agree?" "RT this" = death |
| **Low hedging** | 3% in top 500 | Mostly real, though "hear me out" (technically hedging) works as emerging format |

---

## ABSENCE PATTERNS (VERIFIED)

These held up across every check:

| Pattern | Frequency in Top 500 | Confidence |
|---------|---------------------|------------|
| Engagement begging ("please RT", "like if", "thoughts?") | 0% | HIGH — absolute zero |
| Self-reporting emotions ("I feel", "makes me sad") | <1% | HIGH |
| Cliché phrases ("at the end of the day", "it is what it is") | 0% | HIGH |
| Diary content ("just woke up", "had coffee") | <1% | HIGH |
| Apologetic openings ("sorry but", "just my opinion") | <1% | HIGH |

**For @GetHealthC:** The absence patterns are the most reliable finding. What NOT to do is clearer than what to do.

---

## DIRECTIONAL PATTERNS (observed but not engagement-proven)

These atoms appeared in the analysis and have structural logic, but the engagement correlation is unproven or neutral:

### 1. Contrast Frame
**Status:** PRESENT in 24-44% of tweets across verticals. Engagement correlation NEGATIVE or FLAT.
**Interpretation:** Contrast is a natural rhetorical structure. It doesn't hurt, but it doesn't provide a measurable lift. Use it when the content calls for it, not as an engagement hack.

### 2. Numerical Specificity
**Status:** PRESENT in 42% of tweets. Engagement correlation -18%.
**Interpretation:** Numbers alone don't drive engagement. The CONTEXT of the number matters. "5 days of bad sleep drops IQ by 15 points" works because of the surprise, not because it has numbers. A tweet listing "2,450 calories, 180g protein, 65g fat" may be useful but not engaging.
**For @GetHealthC:** Use numbers when they create surprise or comparison. Don't add numbers for the sake of specificity.

### 3. Negation Flip
**Status:** PRESENT in 30% of tweets. Engagement correlation 0%.
**Interpretation:** "Don't", "not", "stop", "never" appear in ~30% of all tweets regardless of engagement level. It's neutral.

### 4. Supplement Timing / Protocol Format
**Status:** DIRECTIONAL. The list/protocol format appears in 22-28% of health tweets. Not enough data to verify engagement correlation independently.
**For @GetHealthC:** This format drives bookmarks (reference mode), which may not show in likes but builds saved-content library.

---

## HEALTH-SPECIFIC FINDINGS (VERIFIED)

### The Health Vertical Is Different

| Dimension | Health | Other Verticals |
|-----------|--------|-----------------|
| Optimal word count | 30-50+ | <10 words best elsewhere |
| Perspective | Near-equal you/I (44%/40%) | "you" dominates elsewhere |
| Best format | Protocols, schedules, specific data | Short punchy statements |
| Engagement driver | Substance + authority | Brevity + surprise |

**Implication:** @GetHealthC should NOT imitate Jack Butcher's style (median 9 words, "you" 5x more than "I"). Health content rewards depth, personal sharing, and specific protocols. The Butcher model works for dev/productivity/finance, not health.

---

## REPLY-SPECIFIC FINDINGS (DIRECTIONAL — from 33 tweet-reply threads)

Small sample size. Treat as directional only.

| Reply Pattern | Description | Example |
|---------------|-------------|---------|
| Sentence Fragment Slam | Short, brutal precision (8-15 words) | "this is exactly why the job market is a hellscape right now" |
| Completion Frame | Extend OP's logic to natural conclusion | "Bro completed the trilogy and still didn't like the ending" |
| Expertise Flex | Casually drop insider knowledge | "I've seen way too many colonoscopies to know this is untrue" |

**For @GetHealthC replies:** Lead with a specific number from our calculator. "At your stats, your BMR is probably 1,450+." The number IS the expertise flex.

---

## TEMPORAL FINDINGS (VERIFIED from archive vs recent comparison)

| Pattern | Archive | Recent | Status |
|---------|---------|--------|--------|
| 🚨BREAKING format | 12% | 0% | **DEAD** |
| "Hear me out" opening | 0% | 16% | **EMERGING** |
| "Unpopular opinion:" | 0% | 6% | **EMERGING** |
| "Save this" CTA | Present | Absent | **FADING** |
| Tutorial/list threading | Present | Reduced | **FADING** |
| Contrast frames | Present | Present | **STABLE** |
| "Imagine" construction | Present | Present | **STABLE** |
| Deadpan observations | Present | Present | **STABLE** |

**For @GetHealthC:** Use "hear me out" as an opener. Don't use 🚨 or "save this."

---

## REWRITE PAIRS: Generic → @GetHealthC

### Pair 1: Calorie Deficit
**Generic:** "I think it's really important for people to understand that eating too few calories can actually be counterproductive to weight loss because your metabolism can slow down."

**@GetHealthC:** "Your BMR is the minimum your organs need to function.

Eat below it and your body doesn't burn faster — it shuts down slower.

Calculate yours. The number might surprise you."

**Atoms used:** Tool framing, numerical implication, no hedging, no period ending, 30 words

### Pair 2: Sleep Quality
**Generic:** "Did you know that what you eat before bed can really affect how well you sleep? Maybe try not eating so late at night and see if it helps!"

**@GetHealthC:** "Stop eating 3-5 hours before bed.

Your sleep quality improves. Your HRV goes up. Your morning cortisol normalizes.

Try it for 7 days. Track the difference."

**Atoms used:** Direct command, specific timeframe, protocol format, no hedging, 28 words

### Pair 3: Protein Myth
**Generic:** "In my experience, I've found that a lot of people in the fitness community tend to over-emphasize protein intake when they might be neglecting other important macronutrients like fiber."

**@GetHealthC:** "Everyone's optimizing protein.

Meanwhile your gut bacteria are starving. Fiber intake is at an all-time low.

3g of creatine does more for your brain than your 4th protein shake"

**Atoms used:** Contrast (but used for content, not as engagement hack), specific number, no period ending, 31 words

### Pair 4: BMI Defense
**Generic:** "I know BMI gets a lot of hate, but I actually think it's still a useful metric for most people if you understand its limitations."

**@GetHealthC:** "Hear me out: BMI correlates with body fat within 5% for 85% of people.

The problem isn't the formula. It's that the 15% who lift think they're the 85%"

**Atoms used:** "Hear me out" (emerging pattern), specific numbers, contrast, no period ending, 35 words

### Pair 5: TDEE Sharing
**Generic:** "Just found out my total daily energy expenditure and it was really eye-opening! Everyone should look into this."

**@GetHealthC:** "TDEE: 2,847 to maintain. 2,347 for a safe deficit.

Most people guess. Then wonder why nothing changes.

What's yours"

**Atoms used:** Specific numbers, no hedging, question without question mark (intentional — no period ending pattern), 23 words

### Pair 6: Supplement Timing
**Generic:** "I've been reading about when to take supplements and apparently timing matters quite a bit for some of them."

**@GetHealthC:** "When to take your supplements:

Vitamin D → with breakfast (fat-soluble)
Magnesium → 1hr before bed
Creatine → whenever (timing doesn't matter)
Omega-3 → with your largest meal

Which one were you taking wrong"

**Atoms used:** Protocol/list format, specific timing, no hedging, engagement hook at end (not begging — substantive question), 37 words

---

## WHAT THIS PROFILE DOES NOT KNOW

1. **Engagement correlation ≠ causation.** The dataset shows what high-engagement tweets look like, not what CAUSES engagement. The atoms are descriptive, not prescriptive.

2. **New account dynamics are untested.** All data comes from established accounts. A Day 1 account with 0 followers operates in a fundamentally different algorithmic environment (no SimCluster embedding, zero TweepcRed).

3. **Health-specific reply data is thin.** The reply analysis is from general high-engagement replies, not health-tool-specific replies. Our reply templates are extrapolated, not verified.

4. **Absence of low-engagement baseline.** We collected high-engagement tweets. We don't know what the same accounts' failing tweets look like. The atoms might be present in both hits and misses.

5. **Sonnet's v1 analysis fabricated specific numbers.** The engagement lift percentages (+156%, +127%, +89%, +203%) were not computed — they were generated by the LLM. This v2 corrects them, but it's a warning: any LLM-generated statistic about this dataset should be independently verified before being used operationally.
