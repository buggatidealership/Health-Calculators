# Vitamin D Intake Calculator — Semantic Demand Findings
**Date:** 2026-03-20
**Analyst:** Research Agent
**Sources:** vitamin_d_conversion_semantic_demand.md (reused), NHS, Harvard Health, Endocrine Society 2024, NIH ODS, Twitter/X v3 dataset (84 vitamin D tweets)

---

## 1. The Core Question (what users actually ask)

The dominant question is NOT "how many IU should I take" — it is:

> **"My level is [X]. Is that good? What should I do?"**

The intake calculator exists downstream of a blood test result OR upstream of a supplement purchase decision. Two distinct user modes:

| Mode | Trigger | What They Want |
|------|---------|---------------|
| **Post-lab** | Got bloodwork back showing a number | "Is my level good? Do I need supplements? How much?" |
| **Pre-purchase** | Heard they should take vitamin D | "How much should I take? Is 2000 IU enough or too much?" |

---

## 2. The ONE RULE (mental model users can carry)

> **"Most adults need 600-2000 IU daily. If your blood level is below 30 ng/mL, you likely need more."**

This is the simplification. The details:
- NIH RDA: 600 IU (ages 1-70), 800 IU (71+)
- Endocrine Society 2024: supplements beyond RDA only for specific at-risk groups
- Common clinical practice: 1000-2000 IU for general supplementation
- Deficiency correction: 3000-5000 IU temporarily under medical supervision
- Upper safe limit: 4000 IU/day (IOM)

The gap between RDA (600 IU) and what influencers recommend (2000-5000 IU) is the primary source of user confusion.

---

## 3. Exact Phrases People Use (sourced from conversion research)

**Describing their level:**
- "My Vitamin D level: 30 ng/mL — just entering the 'sufficient' range" [tweet BK:108]
- "mine was 28 for the longest time" [reply]
- "I'm taking supplements still it is consistently below 30" [reply]
- "my level is 18 ng/mL" [tweet BK:209, LK:2350]

**Asking about dosage:**
- "Please suggest one vitamin D supplement" [reply]
- "Is 8mg safe enough?" [reply]
- "I started taking 200,000 IU D3+K2 every two weeks" [reply — extreme self-dosing]
- "I had low Vitamin D around 12, so took 60k weekly capsule for 8 weeks" [reply]

**Expressing optimal-range confusion:**
- "vitamin D optimal level is 50-80 ng/mL" (stated as fact) [reply BK:16]
- "maintaining vitamin D blood levels of 40-60 ng/ml reduces your risk of diabetes" [tweet series]
- "the 25-50 ng/mL range needed for immune function" [tweet BK:1]
- "if your level is over 50 ng/dL — zero deaths" [tweet BK:504] — uses wrong unit

---

## 4. Factors That Affect Vitamin D Needs (verified across sources)

| Factor | Effect | Source |
|--------|--------|--------|
| **Age** | Skin produces 1/4 as much vitamin D at 65+ vs 20s | Harvard Health |
| **Skin color** | Darker skin = less UVB synthesis. African Americans have ~50% lower blood levels | Harvard Health |
| **Weight/BMI** | BMI >30: vitamin D sequestered in fat tissue, lower blood availability | Harvard Health |
| **Sun exposure** | 10-30 min midday sun, several times/week, can produce sufficient D in summer | NIH ODS |
| **Latitude** | Above 37°N: insufficient UVB Oct-Mar | Multiple sources |
| **Current blood level** | Below 20 ng/mL = deficient, 20-29 = insufficient, 30+ = sufficient | NIH/IOM |
| **Pregnancy** | Increased needs (some guidelines recommend 1000-2000 IU) | Endocrine Society |
| **Absorption conditions** | IBD, celiac, liver disease impair absorption | Harvard Health |

---

## 5. Reference Ranges (clinical consensus)

| Classification | ng/mL | nmol/L | Action |
|---------------|-------|--------|--------|
| Deficient | < 20 | < 50 | Supplement aggressively (under supervision) |
| Insufficient | 20-29 | 50-72 | Increase intake |
| Sufficient | 30-50 | 75-125 | Maintain current intake |
| Optimal (influencer range) | 40-60 | 100-150 | Where supplement-optimizers aim |
| High/Excess | 50-100 | 125-250 | Monitor, may reduce |
| Toxic | > 100 | > 250 | Medical attention needed |

**Discrepancy note:** The "optimal" range (40-60) promoted in health-optimization communities is higher than the clinical "sufficient" threshold (30). This gap creates anxiety.

---

## 6. Questions Asked AFTER Getting a Recommendation

From tweet reply threads:
1. "Should I take D2 or D3?" — D3 is 2-3x more effective at raising levels
2. "Should I take K2 with it?" — appears in multiple high-engagement threads
3. "Do I need magnesium too?" — cofactor question
4. "How long until my levels come up?" — timing (typically 6-8 weeks)
5. "Can I take too much?" — toxicity concern
6. "Morning or night?" — timing question

---

## 7. Emotional State

| Emotion | Evidence |
|---------|----------|
| **Confused** | Conflicting numbers: RDA says 600, doctor says 1000, internet says 5000 |
| **Anxious about toxicity** | "what level of toxicity?" — genuine panic |
| **Frustrated** | "taking supplements still below 30" — effort without result |
| **Motivated by optimization** | "My level is consistently at 90. I swear by it." |

---

## 8. What Would Make Them Share

| Format | Save Signal |
|--------|------------|
| Personalized IU recommendation with blood level context | HIGH |
| "Your level is X, you need Y IU to reach Z in ~8 weeks" | HIGH |
| Just a generic IU number | LOW |
| Cofactor reminder (K2 + magnesium) | MEDIUM-HIGH |

---

## 9. Calculator Design Implications

1. **Inputs needed:** Age, weight (for BMI proxy), current blood level (optional), target level, sun exposure
2. **Primary output:** Recommended daily IU
3. **Secondary outputs:** Time to reach target, cofactor reminders, safety ceiling
4. **The rule to teach:** "Most adults need 600-2000 IU. Below 30 ng/mL = increase. Above 50 = you're likely fine."
5. **Anticipate next questions:** D2 vs D3, K2 pairing, morning vs night, how long to retest

---

## Falsifiability

| Finding | What Would Disprove It |
|---------|----------------------|
| Post-lab mode is dominant user | If survey shows >60% never had bloodwork, pre-purchase mode dominates |
| 600-2000 IU range satisfies most users | If bounce rate high on results showing <2000 IU (users expected higher) |
| Cofactor reminders drive saves | If share/bookmark data shows no engagement on K2/magnesium section |
| Toxicity concern is secondary | If >20% of users enter levels >80 ng/mL, toxicity is primary |

## Shared Assumptions
1. Users have or will get bloodwork. If they never test, the "current level" input is useless.
2. The Endocrine Society 2024 guidelines represent current medical consensus. If contested, recommendations may shift.
3. IU is the unit users understand. Some may think in mcg (1 IU = 0.025 mcg).
