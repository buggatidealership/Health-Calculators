# BMI Calculator — Semantic Demand Research
**Date:** 2026-03-20
**Source:** Twitter/X API (v1 collection, 69 tweets) + Google PAA + SERP analysis
**Mode:** Validation (bookmark/like ratio 0.05 — lowest of all topics)

## Key Findings

### 1. User Mode: Validation, Not Reference
- BMI has the lowest bookmark/like ratio (0.05) of all 8 topics studied
- People engage emotionally but do NOT save BMI content for later
- They are not seeking a reference number — they are seeking reassurance
- The core question is "am I okay?" not "what is my BMI?"

### 2. Emotional State: Frustrated + Confused
- Primary emotion: **Frustrated** (10% of tweets) — frustrated AT the metric itself
- Secondary emotion: **Confused** (7%) — "what does this number even mean?"
- What they want: "Tell me BMI is wrong / my body is fine"
- This is the ONLY topic where users actively resist the tool's output

### 3. Content Format: Personal Stories Dominate, Questions Drive Engagement
- Most common format: Personal story (44 of 69 tweets)
- Highest engagement format: Question (622 avg engagement)
- Questions about BMI are polarizing — "BMI says I'm overweight but I'm muscular" drives replies
- Data/study format performs poorly for BMI — people don't want more data, they want validation

### 4. People Also Ask (Google SERP)
Top questions appearing in Google PAA for "BMI calculator":
1. What is a healthy BMI?
2. How do I calculate my BMI?
3. What is a good BMI for my age?
4. Is BMI accurate?
5. What BMI is considered obese?
6. How much should I weigh for my height?
7. What are the limitations of BMI?
8. Is BMI different for men and women?

### 5. User Language Patterns
From Twitter data, people say:
- "BMI is bullshit" / "BMI doesn't account for muscle"
- "According to BMI I'm obese but I'm an athlete"
- "My doctor said my BMI is fine but I don't feel fine"
- "Is [number] a good BMI?"
- "BMI says I'm overweight but I look normal"

The universal pattern: people use BMI as a mirror for self-worth, not as a health metric.

## Design Implications

### Result Framing
- Lead with HUMAN language: "Your BMI is 24.8 — right in the healthy range" not "Normal weight (18.5-24.9)"
- For overweight/obese: use warm, non-judgmental language. "Your BMI is 31.2 — above the healthy range" not "Obese Class I"
- Acknowledge limitations PROMINENTLY — not buried in a disclaimer

### Color Coding
- Do NOT use aggressive red for obese category
- Underweight: cool blue (#60a5fa)
- Healthy: teal/green (--teal)
- Overweight: warm amber (#f59e0b)
- Obese: warm coral (#f97316) — NOT red

### Mental Model / Coach Section
- BMI has no clean "one rule" like caffeine's "every 5 hours, half"
- The mental model: "BMI is a screening tool, not a diagnosis. It tells you where to look, not what's wrong."
- Address the elephant in the room: muscle mass, body composition, waist circumference as better metrics

### Share Behavior
- Low save intent (0.05 bk/lk) means share cards should be comparison-inviting, not reference-saving
- "What's your BMI?" framing for social sharing
- Sensitive handling: obese range results should have privacy-conscious sharing

## Falsifiability
- If users on our site DO bookmark/save BMI results at high rates, the "validation only" conclusion is wrong
- If engagement data shows users want dense reference tables (like creatine), the emotional framing may be too soft
- The "frustrated at the metric" finding may be a Twitter-vocal-minority artifact — silent users may trust BMI more
