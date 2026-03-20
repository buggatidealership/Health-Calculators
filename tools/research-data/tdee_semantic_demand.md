# TDEE Calculator — Semantic Demand Research
**Date:** 2026-03-20
**Sources:** Twitter/X v1 collection (62 tweets), tdeecalculator.net competitive analysis, calculator.net TDEE, forum sentiment synthesis

---

## Existing Findings (from v1 collection, 62 tweets)

- **Bookmark/Like ratio:** 0.12 — mixed mode (some reference, some planning)
- **Primary emotion:** Confused (6%), Frustrated (5%)
- **Core unmet need:** "Which calculator do I trust?" — methodological clarity
- **Highest engagement format:** List/protocol (3,818 avg engagement)
- **Most common format:** Personal story (27 tweets)
- **User want:** Definitive reference answers, not emotional validation

---

## People Also Ask (Google, inferred from SERP + competitor coverage)

1. What is TDEE?
2. How do I calculate my TDEE?
3. How accurate is the TDEE calculator?
4. What is the difference between BMR and TDEE?
5. How many calories should I eat to lose weight?
6. Should I eat back exercise calories?
7. How often should I recalculate my TDEE?
8. Is 1200 calories enough?

---

## Forum Confusion Points (synthesized from Reddit r/loseit, r/fitness, bodybuilding.com patterns)

### The Activity Level Problem (most common)
- "I don't know if I'm sedentary or lightly active"
- "I work a desk job but go to the gym 4 days a week — what am I?"
- "Every calculator gives me a different number because I pick different activity levels"
- People consistently overestimate their activity level (well-documented)
- The labels are meaningless to most users: "Moderately Active" could mean anything

### The Trust Problem
- "I put my stats in 5 different TDEE calculators and got 5 different numbers"
- "Which formula is the most accurate?"
- "My Fitbit says I burn 2800 but TDEE calculators say 2400"
- People don't understand that ALL calculators are estimates — they want THE answer

### The Application Problem
- "OK I got my TDEE... now what?"
- "Do I eat AT my TDEE or below it?"
- "How much of a deficit is too much?"
- "I've been eating at my TDEE for 2 weeks and nothing changed"
- Disconnect between getting a number and knowing what to DO with it

### The Recalculation Problem
- "I lost 15 lbs but I'm plateauing — should I recalculate?"
- "My TDEE keeps changing as I lose weight, how do I keep up?"
- Metabolic adaptation is real but poorly understood by users

---

## Emotional State Map

| State | Signal | What They Need |
|-------|--------|----------------|
| Confused | "Which calculator do I trust?" | ONE clear answer with methodology shown |
| Frustrated | "I did everything right and plateaued" | Explanation of adaptation + recalculation |
| Overwhelmed | "Macros, TDEE, BMR, NEAT — too many acronyms" | Simple mental model, not jargon |
| Skeptical | "These are just estimates anyway" | Honest framing: "starting point, not gospel" |
| Action-ready | "Just tell me how much to eat" | Clear calorie targets for their specific goal |

---

## Mental Model

**The One Rule:** "Your body burns [X] calories just existing. Everything you do adds to that base number."

**The Analogy:** "BMR is your body's rent — the cost of just being alive. TDEE is rent plus everything else: commuting, working, exercising. You need to know the total bill before you can budget."

**Why this works:**
- Separates BMR from TDEE clearly (top confusion point)
- Uses money metaphor (universally understood)
- Implies budgeting = deficit/surplus naturally
- "You need to know the total bill before you can budget" = why TDEE matters

---

## Competitive Gaps

### tdeecalculator.net (market leader)
- Shows BMI alongside TDEE (unnecessary distraction)
- Activity levels use vague labels without concrete examples
- Results are a wall of numbers without interpretation
- No "what to do next" guidance
- No explanation of WHY the number matters

### calculator.net
- More educational but dry
- Good activity level definitions (specifies "15-30 min elevated heart rate")
- No emotional scaffolding
- No personalized interpretation

### Our Opportunity
1. **Activity level cards with real-life descriptions** — not "Sedentary (1.2)" but "Desk job, little exercise"
2. **Personal coach interpretation** — "Your body burns X at rest. With your activity, it's Y. To lose 1 lb/week, eat Z."
3. **Honest framing** — "This is a starting point. Track for 2 weeks and adjust."
4. **Clear next steps** — deficit for weight loss, surplus for muscle gain, with specific numbers
5. **The "which calculator" problem solved** — show the formula, cite the ADA recommendation, build trust through transparency

---

## Design Implications for V25

- **Mode:** Mixed (reference + planning) — show dense data AND actionable next steps
- **Tone:** "Here's the clear answer" + "Here's what to do with it"
- **Hero question:** "How many calories do you burn per day?" (the real question behind "TDEE calculator")
- **Result display:** Big TDEE number + BMR breakdown + goal-specific targets
- **Coach section:** Personalized interpretation using the rent/budget analogy
- **Share format:** Protocol/list format (highest engagement for TDEE tweets)

---

## Falsifiability

- If users don't engage with activity level cards more than dropdowns, the UX hypothesis is wrong
- If the rent/budget analogy doesn't resonate in share text, the mental model needs revision
- If users still report confusion after seeing results, the interpretation layer isn't clear enough
- The 0.12 bookmark/like ratio from Twitter may not represent Google searchers (platform bias)
