# Lipid Panel Semantic Demand Research

## Date: 2026-03-20

## Mental Model: ONE RULE
**"Your lipid panel is a report card with 4 grades. Each number has a clear pass/fail line."**

Users arrive with a lab printout, confused by multiple numbers. They want a single framework to decode all four markers at once. Not a medical textbook — a translation layer.

## User Emotional State
- **Just got bloodwork**: anxious, scanning for "am I okay?"
- **Confused by numbers**: "my total is 220 but my doctor said it's fine?"
- **Ratio confusion**: "is my ratio good?" (don't know which ratio)
- **LDL vs HDL confusion**: "which one is the bad one again?"
- **Statin anxiety**: "do I need medication?"
- **Desire for control**: "what can I do to fix this?"

## Exact User Language (from forums, PAA, search queries)
1. "what do my cholesterol numbers mean"
2. "is 220 cholesterol high"
3. "what is a good LDL level"
4. "what should my HDL be"
5. "my triglycerides are 200 is that bad"
6. "cholesterol ratio calculator"
7. "lipid panel results explained"
8. "what is non-HDL cholesterol"
9. "LDL 130 is that high"
10. "do I need statins"
11. "how to lower LDL naturally"
12. "what does borderline high cholesterol mean"
13. "difference between LDL and HDL"
14. "total cholesterol to HDL ratio"
15. "my doctor said my cholesterol is high"
16. "normal cholesterol levels by age"
17. "why is my HDL low"
18. "triglycerides vs cholesterol"
19. "ApoB what is it"
20. "fasting lipid panel"

## People Also Ask (verified from search)
- What is a normal lipid panel result?
- What are the 5 components of a lipid panel?
- What should my cholesterol numbers be?
- What is the difference between LDL and HDL?
- What is a dangerously high cholesterol level?
- How often should you get a lipid panel?
- What does non-HDL cholesterol mean?
- Can you lower cholesterol without medication?

## Reference Ranges (AHA/ACC/NCEP ATP III consensus)
### Total Cholesterol (mg/dL)
- Desirable: < 200
- Borderline High: 200-239
- High: >= 240

### LDL Cholesterol (mg/dL)
- Optimal: < 100
- Near Optimal: 100-129
- Borderline High: 130-159
- High: 160-189
- Very High: >= 190

### HDL Cholesterol (mg/dL)
- Low (risk factor): < 40 (men), < 50 (women)
- Good: 40-59
- Optimal (protective): >= 60

### Triglycerides (mg/dL)
- Normal: < 150
- Borderline High: 150-199
- High: 200-499
- Very High: >= 500

### Non-HDL Cholesterol (mg/dL)
- Calculated: Total Cholesterol - HDL
- Optimal: < 130
- Above Optimal: 130-159
- High: >= 160

### TC:HDL Ratio
- Optimal: < 3.5
- Good: 3.5-5.0
- High risk: > 5.0

## NHS Ranges (mmol/L for international users)
- Total cholesterol: below 5 mmol/L
- HDL: above 1.0 mmol/L (men), 1.2 mmol/L (women)
- Non-HDL: below 4 mmol/L

## Key Design Insights
1. **177s avg duration** = users are studying this like a report card. Make results DENSE and scannable.
2. **Color-code everything**: instant visual triage (green/yellow/red per marker)
3. **Per-marker interpretation**: don't just show ranges, explain what each means for THIS user
4. **Non-HDL is the sleeper**: most users don't know about it, but it's a better predictor than LDL alone
5. **Ratio calculation**: compute TC:HDL ratio automatically — users search for this separately
6. **No height/weight needed**: simplify. The core value is interpreting 4 blood test numbers. BMI-based risk stratification adds complexity without proportional value for the primary use case.
7. **"What can I do?" section**: users want actionable next steps, not just numbers

## Competitive Landscape
- calculator.net: basic input/output, no interpretation
- Most medical sites: text-heavy education, no calculator
- Gap: **visual, color-coded interpretation dashboard with actionable coaching**

## Sources
- AHA/ACC 2018 Multisociety Guideline (Circulation 2019;139:e1082-e1143)
- NCEP ATP III (JAMA 2001;285:2486-2497)
- ESC/EAS 2019 Guidelines (Eur Heart J 2020;41:111-188)
- NHS Cholesterol Levels guidance
- CDC: Getting Your Cholesterol Checked
