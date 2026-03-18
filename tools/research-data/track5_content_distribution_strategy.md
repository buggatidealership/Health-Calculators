# Track 5: Content & Distribution Strategy for @GetHealthC

**Date:** 2026-03-18
**Inputs cross-referenced:**
- `gethealthc.md` — 10 validated atoms across 3 tiers (universal, health, reply)
- `atoms_validation.md` — holdout validation (3 confirmed, 2 failed, 3 missed atoms added)
- `atoms_temporal.md` — durable vs emerging vs fading patterns
- `twitter-algo-research.md` — verified algorithm signals from code
- `twitter-reply-research.md` — spam detection, warm-up cadence
- `atoms_health.md` + `atoms_fitness.md` — vertical-specific analysis
- `atoms_reply_patterns.md` — reply-specific decomposition

---

## PART 1: CONTENT STRATEGY

### Account Identity

**Voice positioning:** Health TOOL account, not health ADVICE account.
- "Your TDEE is 2,450 calories" = tool (safe)
- "You should eat 2,450 calories" = advice (risky — Community Notes territory)
- Present numbers. Let users interpret. Never claim to treat/cure/diagnose.

**SimCluster target:** Quantified-self / health data community.
- Follow: data-driven health accounts, fitness science accounts, quantified-self creators
- Avoid: wellness influencers, alt-medicine, diet culture accounts
- The follow graph determines cluster assignment, not content keywords (verified from SimClusters code)

---

### Content Formats — Prioritized by Algorithm + Atom Fit

| Priority | Format | Algo Advantage | Best Atom Fit | When to Use |
|----------|--------|----------------|---------------|-------------|
| 1 | **Native video 10-30s** | Earlybird + 4 Heavy Ranker heads + dual pipeline | Pulse animation screen-records, calculator walkthroughs | Pinned post, 1x/week flagship |
| 2 | **Native image (share card)** | Earlybird boost | Numerical Specificity, result cards, comparison infographics | Daily staple, 1-2x/day |
| 3 | **Text + image** | Earlybird boost + dwell time | Contrast Frame + share card visual | Daily, high engagement |
| 4 | **Text-only** | No media boost | Single Declarative Punch, hot takes, questions | Reply hooks, community engagement |
| 5 | **Multi-image (4)** | Earlybird + swipe dwell | Supplement timing schedules, comparison grids | Weekly deep content |

**Never use:**
- GIF uploads (classified as image, no video scoring — use MP4 instead)
- Videos under 10 seconds (excluded from video signal fetchers)
- Links in main posts (near-zero distribution for non-Premium)

---

### Content Templates — Built from Validated Atoms

Each template maps a proven atom to a health-specific application with an engagement hook that drives replies (75x algorithm signal).

#### TEMPLATE 1: The Contrast Reveal
**Atom:** Contrast Frame (#1 universal, +156%)
**Structure:** "[Common health assumption]. [Surprising opposite truth with specific number]."
**Health application:**
```
Most people think eating more protein = more muscle.

Your body can only synthesize ~25-40g per meal. The rest? Your kidneys process it as waste.

What's your daily intake?
```
**Format:** Text + result card image showing protein synthesis curve
**Reply hook:** "What's your daily intake?" — triggers personal sharing (75x signal)
**Word count target:** 25-40 words
**Risk check:** Tool framing (presents numbers), not advice framing

#### TEMPLATE 2: The Specific Number Drop
**Atom:** Numerical Specificity (#2, +89%) + Bedtime Optimization (#5, +145%)
**Structure:** "[Specific statistic with source]. [One-line implication]."
**Health application:**
```
5 days of bad sleep drops your effective IQ by 15 points.

That's the difference between "sharp" and "struggling to focus in a meeting."

Calculate yours: [link in reply]
```
**Format:** Text + dark-themed result card (1200x675)
**Reply hook:** Implied comparison to reader's experience
**Word count target:** 20-30 words
**Risk check:** Cites a finding, doesn't prescribe

#### TEMPLATE 3: The Supplement Schedule
**Atom:** Supplement Timing Specificity (#6, +189%)
**Structure:** Numbered list with exact timing
**Health application:**
```
When to take your supplements:

1. Vitamin D → with breakfast (fat-soluble, needs food)
2. Magnesium → 1hr before bed (relaxation effect)
3. Creatine → any time (timing doesn't matter)
4. Omega-3 → with your largest meal

Save this.
```
**Format:** Text + infographic card with timing visualization
**Reply hook:** "Save this" is fading per temporal analysis — use "Which one were you taking wrong?" instead
**Word count target:** 30-50 words
**Risk check:** Tool framing (timing information, not dosage advice)

#### TEMPLATE 4: The Orthodoxy Challenge
**Atom:** Protein Overload Paradox (#7, +234%) + Contrast Frame
**Structure:** "[Widely accepted practice]. [Counterintuitive data]. [Question]."
**Health application:**
```
Everyone's obsessed with protein.

Meanwhile: fiber intake is at an all-time low, and your gut bacteria are starving.

3g of creatine does more for your brain than your 4th protein shake.

Agree or disagree?
```
**Format:** Text-only (controversial opinion format, drives replies)
**Reply hook:** "Agree or disagree?" — direct engagement request (but NOT engagement begging because it's after a substantive claim)
**Word count target:** 25-40 words
**Risk check:** Frames as data/observation, not advice. May attract disagreement — that's the point (replies = 75x)

#### TEMPLATE 5: The Calculator Result Share
**Atom:** Numerical Specificity + tool framing
**Structure:** "[Screen capture or result card]. [One-line observation]. [What's yours?]"
**Health application:**
```
Just ran the TDEE calculator.

2,847 calories to maintain. 2,347 for a safe deficit.

Most people have no idea what their number is.

What's yours? → [link in reply]
```
**Format:** Native image (share card from Pillow pipeline, 1200x675)
**Reply hook:** "What's yours?" — community response hook (validated as cross-temporal winner)
**Word count target:** 15-25 words
**Risk check:** Pure tool output, no advice

#### TEMPLATE 6: The "Hear Me Out" Hot Take
**Atom:** Emerging pattern (16% of recent, 0% archive — temporal analysis)
**Structure:** "Hear me out: [counterintuitive health claim with data]"
**Health application:**
```
Hear me out: BMI is not useless.

For 85% of people it correlates with body fat within 5%.

The problem isn't the formula. It's that the 15% who lift think they're the 85%.
```
**Format:** Text + comparison card (BMI vs body fat correlation)
**Reply hook:** Built into the structure — challenges both BMI critics AND defenders
**Word count target:** 25-40 words
**Risk check:** Tool framing (presents correlation data)

#### TEMPLATE 7: The Before/After Data Story
**Atom:** Before/After Structure (fitness-specific, +18,672 avg engagement in combo)
**Structure:** "[Starting state with number]. [Action taken]. [Result with number]."
**Health application:**
```
January: TDEE of 1,850 (sedentary, 155 lbs)

Added 3x/week walking + 2x lifting.

March: TDEE of 2,340 (lightly active, 148 lbs)

Same person. Different equation.
```
**Format:** Native image (before/after result cards side by side)
**Reply hook:** "Same person. Different equation." — invites personal stories
**Word count target:** 25-35 words

#### TEMPLATE 8: The Reply Weapon
**Atom:** Expertise Flex (#10, +267%) + Sentence Fragment Slam (#8)
**Structure:** Find a viral health tweet → reply with specific number from our calculators
**Health application:**
```
Original: "I've been eating 1200 calories and not losing weight"

Reply: "At your stats, your BMR alone is probably 1,450+.

You're eating below your organs' minimum operating cost. That's not a deficit, that's a shutdown.

Run the numbers: [link]"
```
**Format:** Text reply (no media in early days — avoid spam classifier)
**Reply hook:** The reply IS the hook — provides value + link to calculator
**Risk check:** Tool framing ("run the numbers"), but walks close to advice ("that's a shutdown") — soften to "your body may be adapting"

---

## PART 2: REPLY ENGAGEMENT PLAYBOOK

### Who to Reply To

**High-value targets (reply to these):**
1. **Viral health questions** (>1K likes, asking "how much", "what should I") — our calculators directly answer these
2. **Health number sharing** ("my TDEE is", "my BMI is") — extend with comparison data
3. **Health frustration** ("every calculator gives different results") — our accuracy angle
4. **Fitness transformations** with numbers — calculate their metrics, share back

**Avoid replying to:**
- Flagged/controversial health threads (guilt-by-association)
- Political health debates (Community Notes risk)
- ED community content (ethical + spam risk)
- Advice-framing threads ("you should eat X") — association with advice framing

### Reply Format Rules

| Rule | Source | Rationale |
|------|--------|-----------|
| 8-25 words per reply | gethealthc.md statistical patterns | Reply sweet spot |
| Zero hedging | Reply absence patterns | "Maybe try" → "Your BMR is 1,450" |
| One emoji max | Reply absence patterns | High-engagement replies use 0-1 |
| No links in Days 1-20 | Spam cadence research | Links = spam signal for new accounts |
| Media in replies after Day 8 | Spam cadence research | Media ≠ spam, may reduce spam risk |
| Complete the thought, don't repeat it | Completion Frame atom | Don't restate what OP said — extend it |
| Tool framing always | Health risk mitigation | "Calculate yours" not "You should eat" |

### Reply Cadence (Spam-Safe)

| Phase | Original Posts | Replies | Engagements | Links | Media |
|-------|---------------|---------|-------------|-------|-------|
| Days 1-7 | 1-2/day | 2-4/day | 5-10/day | NONE | After Day 3 |
| Days 8-20 | 2-3/day | 5-10/day | 10-20/day | NONE in posts | Images in replies OK |
| Days 21+ | 2-3/day | 10-15/day | 15-30/day | In first reply only | Full media |

**Critical constraints:**
- Author diversity decay: 1st post = 1.0x, 2nd = 0.625x, 3rd = 0.44x → quality over quantity
- Post from mobile app when possible (+50% reputation signal vs API)
- Never mass-follow (penalty at ratio > 0.6 when followings > 2,500)

---

## PART 3: DISTRIBUTION CALENDAR (Days 0-30)

### Day 0: Setup
- [ ] Profile photo set (no photo = spam signal)
- [ ] Bio: tool framing, link to healthcalculators.xyz
- [ ] Header image: share card style (1500x500)
- [ ] Follow 15-20 coherent health/fitness data accounts
- [ ] Pin tweet: Pulse animation as native MP4 (10-30 seconds)
- [ ] Enable Premium (if not already — TweepcRed 0→100, link penalty exemption)

### Days 1-3: Seed Phase
**Goal:** Establish account as non-spam, build initial engagement pattern

| Day | Posts | Format | Template | Reply Target |
|-----|-------|--------|----------|-------------|
| 1 | 1 | Video pin (10-30s) | Pulse animation screen record | 2 replies to viral health tweets |
| 2 | 1 | Text + image | Template 2 (Number Drop) | 3 replies to health questions |
| 3 | 2 | Text + image, Text-only | Template 5 (Calculator Share), Template 4 (Orthodoxy) | 4 replies, introduce media in replies |

**Seeding:** User (human) engages from personal account on all posts in first 30-60 minutes.

### Days 4-7: Pattern Phase
**Goal:** Build SimCluster embedding through consistent engagement pattern

| Day | Posts | Mix | Key Action |
|-----|-------|-----|------------|
| 4 | 2 | Image + text-only | Quote-tweet a viral fitness stat with calculator validation |
| 5 | 2 | Image + text-only | Template 3 (Supplement Schedule) — high bookmark potential |
| 6 | 1 | Multi-image (4) | Comparison grid: TDEE across 4 body types |
| 7 | 2 | Text + image, text-only | Template 6 ("Hear Me Out" hot take) — engagement driver |

**Daily:** 3-4 replies to health threads using Completion Frame or Expertise Flex atoms.

### Days 8-14: Amplify Phase
**Goal:** First content that might break out of follower circle

| Day | Posts | Key Content |
|-----|-------|-------------|
| 8 | 2 | Template 1 (Contrast Reveal) — protein myth |
| 9 | 3 | Template 7 (Before/After), 2 text replies with media |
| 10 | 2 | Template 2 (Number Drop) — sleep stat |
| 11 | 2 | Template 4 (Orthodoxy Challenge) — fiber vs protein |
| 12 | 2 | Template 5 (Calculator Share) + video walkthrough |
| 13 | 3 | Template 6 (Hear Me Out) + Template 3 (Schedule) |
| 14 | 2 | Weekly recap: "This week's most-calculated number on HealthCalc:" |

**Daily:** 5-10 replies. Start including calculator links in replies (after Day 8 threshold).
**Introduce media in replies:** Share cards showing the calculation result relevant to the thread.

### Days 15-21: Reply Offensive Phase
**Goal:** Use reply strategy as primary growth mechanism

| Focus | Detail |
|-------|--------|
| Morning scan | Find 3-5 health tweets >500 likes from last 12 hours |
| Reply with data | Template 8 (Reply Weapon) — specific numbers from our calculators |
| Follow-up | If OP responds (75x signal), continue thread with deeper calculation |
| Original posts | 2-3/day, rotate through all templates |
| Track engagement | Note which templates get most replies vs most likes vs most bookmarks |

### Days 22-30: Optimize Phase
**Goal:** Double down on what works, cut what doesn't

| Action | Detail |
|--------|--------|
| Audit Days 1-21 | Which templates got highest engagement? Which reply patterns provoked responses? |
| Increase cadence | 3 posts/day + 10-15 replies/day |
| Introduce links | Calculator links in first reply to own posts (not in main post) |
| Series launch | Pick the highest-performing template → make it a recurring series |
| First thread | 3-5 tweet thread using Template 7 (Before/After) + Template 2 (Number Drop) |

---

## PART 4: CONTENT PRODUCTION PIPELINE

### Assets Ready Now
1. **90+ calculators** — each can generate a result card via Pillow share pipeline
2. **Pulse animation mockups (V2-V20)** — screen-recordable as 10-30s native video
3. **Share card template** — 1200x675 dark-themed, programmatically generated
4. **Calculator comparison data** — TDEE vs BMR, Ozempic vs Mounjaro timelines

### Content Production Workflow
```
1. Pick template (1-8)
2. Select calculator/topic
3. Generate share card (Pillow) or screen-record (Pulse animation)
4. Write tweet text using atom constraints:
   - 25-40 words (health), 8-25 words (reply)
   - Zero hedging, tool framing
   - Reply hook at end
5. Schedule: post from mobile app if possible
6. First reply: calculator link + "Calculate yours"
7. Monitor first 30-60 min, seed engagement
```

### Batch Production
**Weekly batch:** Produce 14-21 tweets (2-3/day for a week)
- 5 share cards (Template 2, 5)
- 3 comparison grids (Template 1, 6)
- 2 supplement schedules (Template 3)
- 2 hot takes (Template 4, 6)
- 2 before/after data stories (Template 7)
- 1 video (Pulse animation)

---

## PART 5: MEASUREMENT & ITERATION

### Key Metrics (Days 1-30)

| Metric | Target | Why |
|--------|--------|-----|
| Followers | 50-100 | Minimum to escape spam classifier threshold |
| Avg likes/post | 10-50 | Early traction signal |
| Reply rate | >5% of impressions | Replies = 75x algo signal |
| Bookmark rate | >2% (reference content) | Validates reference mode strategy |
| Reply-back rate | >10% of our replies get response | The 75x signal we're optimizing for |
| Profile clicks | Track via analytics | Validates "curiosity" funnel |
| Calculator clicks | Track via UTM | Validates content→tool pipeline |

### Atom Performance Tracking

After 30 days, validate each template against actual performance:

| Template | Expected Performance | Actual | Validated? |
|----------|---------------------|--------|-----------|
| 1. Contrast Reveal | High replies | | |
| 2. Number Drop | High bookmarks | | |
| 3. Supplement Schedule | High bookmarks | | |
| 4. Orthodoxy Challenge | High replies + disagreement | | |
| 5. Calculator Share | Medium, consistent | | |
| 6. Hear Me Out | High engagement variance | | |
| 7. Before/After | High likes | | |
| 8. Reply Weapon | High reply-back rate | | |

### Iteration Rules
1. After 14 days: cut any template with <50% of average engagement
2. After 21 days: create 2 new templates based on what's working
3. After 30 days: update gethealthc.md with empirical data from our own account
4. Monthly: re-run atomic decomposition on new high-performing tweets from our vertical

---

## PART 6: RISK REGISTRY

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Community Notes on health claim | Medium | -60-80% reach | Tool framing only. Present numbers, never prescribe. |
| Spam classifier during warm-up | High (Days 1-7) | Hidden replies | Follow cadence strictly. No links. Post from mobile. |
| SimCluster misalignment | Medium | Poor reach | Follow coherent health/data accounts only. No scatter. |
| Content stale (same templates) | Low (first 30 days) | Declining engagement | 8 templates + rotation. Iterate after Day 21. |
| API posting penalty | Unknown | -50% reputation | Prefer mobile posting. API for scheduling only. |
| Report/block from disagreement | Low-Medium | -369x per report | Never punch down. Tool framing. Avoid controversy spirals. |
| Pivot away from healthcalculators | High (if sitemap not indexed by Mar 20) | Strategy needs new home | Framework is portable. Templates work on any health tool domain. |

---

## FALSIFIABILITY

This strategy rests on these assumptions. If any prove false, the corresponding section needs revision:

1. **Contrast frames drive engagement in health vertical** — Disproven if our contrast tweets consistently underperform our non-contrast tweets after 30 days
2. **Reply-back is achievable for a new tool account** — Disproven if <5% of our first 100 replies receive any response
3. **Tool framing protects from Community Notes** — Disproven if we receive a CN flag despite pure tool framing
4. **Mobile posting matters** — Disproven if API-posted content performs equally to mobile-posted
5. **The warm-up cadence prevents spam classification** — Disproven if our replies are hidden despite following the schedule
6. **"Hear me out" is an emerging pattern worth using** — Disproven if it underperforms other openers. It could also fade quickly (temporal volatility).

## WHAT I MIGHT BE MISSING

1. **We have zero empirical data from our own account.** Every recommendation is derived from other accounts' patterns. Our specific combination (tool account + health niche + new account + specific voice) has no direct precedent in the dataset.
2. **The reply atoms came from general high-engagement replies, not health-specific replies.** The reply patterns that work in political/meme contexts may not transfer to health tool replies.
3. **We're assuming the algo research from March 2023 code still holds.** The Jan 2026 Grok system may have changed scoring fundamentally.
4. **Absence of negative data.** We know what high-engagement tweets look like. We don't know what the same accounts' LOW-engagement tweets look like. The atoms might be necessary but not sufficient.
