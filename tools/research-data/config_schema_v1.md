# Calculator Config Schema v1
**Date:** 2026-03-15
**Status:** Draft — strong opinions, loosely held. Iterate when data arrives.
**Derived from:** Twitter demand research (616 tweets), GA4 traffic data, current template analysis.

## Design Principle

Every calculator page serves two channels simultaneously:
1. **LLM citation** — structured, citable, direct answers
2. **Twitter distribution** — media-ready results, comparison hooks, saveable reference

The config schema defines what's universal (stamped across calculators) vs what's topic-specific (requires per-calculator research/logic).

## Page Skeleton (universal structure)

```
1. SEO head (head_seo.html — existing, keep)
2. Header (header.html — existing, keep)
3. HERO BLOCK [NEW — configurable]
   - H1: user-language headline (not clinical)
   - Subtitle: direct answer to the user's actual question
   - Trust signal: citation count, methodology badge
4. CALCULATOR FORM [logic-driven]
   - Inputs: topic-specific
   - Labels: user-language (configurable)
   - Input hints: configurable
5. RESULT DISPLAY [configurable structure, logic-driven content]
   - Primary answer: the number/result
   - Interpretation: what it means (configurable tone)
   - Comparison layer: "where you fall" (configurable reference points)
   - Visual: gauge/chart/card (configurable type)
6. SHARE MECHANIC [universal]
   - Share card (existing component, keep)
   - Media-ready result card (NEW — for Twitter distribution)
   - Comparison hook text: "What's yours?" (configurable)
7. DEMAND CAPTURE [universal]
   - "Have another health question? Tell Pulse."
   - Free text input, no email required
8. REFERENCE CONTENT [configurable + logic]
   - How to use (configurable structure, topic-specific content)
   - FAQ (configurable structure, topic-specific Q&As)
   - Methodology (topic-specific)
9. SOURCES [logic-driven]
   - Citations (topic-specific)
10. RELATED [configurable]
    - Related calculators (configurable links)
    - Related guide (configurable link)
11. Footer (footer.html — existing, keep)
```

## Config Fields (per calculator)

### Identity
```yaml
id: "ozempic-pen-click"
route: "/ozempic-pen-click-calculator"
template: "calculator_v2.html"  # shared template
js_module: "ozempic_pen_click.js"  # topic-specific logic
```

### Content (user-language, demand-derived)
```yaml
headline: "How Many Clicks for My Ozempic Dose?"
  # Derived from: "how many clicks" is the actual search/question pattern
  # NOT: "Ozempic Pen Click Calculator"
subtitle: "Get your exact pen clicks, next injection date, and safety checks."
  # Direct answer to what the user wants
answer_capsule: "This calculator tells you exactly how many clicks..."
  # LLM-citable direct answer sentence
```

### Display Mode
```yaml
display_mode: "reference"  # reference | validation
  # reference: dense, data-rich, saveable (default for beachhead)
  # validation: emotional scaffolding, reassurance
```

### Emotional Tone
```yaml
tone: "clarity"  # clarity | reassurance | authority | validation
  # clarity: "Here's the clear answer" (TDEE, VitD)
  # reassurance: "Your number is normal" (IVF, BMI)
  # authority: "Here's the optimal approach" (Training)
  # validation: "You're right to question this" (BMI frustration)
```

### Result Display
```yaml
result_sections:
  - type: "primary_number"
    label: "Pen Clicks Needed"
    format: "{value} clicks"

  - type: "interpretation"
    # What does this number mean?
    # Logic-driven: depends on the actual result value

  - type: "comparison"
    label: "Standard Dosing Reference"
    # Configurable reference points per calculator
    reference_points:
      - label: "Blue Pen (0.25-0.5mg)"
        value: "1-2 clicks"
      - label: "Gray Pen (1-2mg)"
        value: "2-4 clicks"
      - label: "Green Pen (2-4mg)"
        value: "2-4 clicks"

  - type: "gauge"  # gauge | chart | table | card | none
    # Visual display type — configurable per calculator

  - type: "action_items"
    # What should the user do next? Topic-specific.
```

### Comparison Layer (universal pattern, configurable content)
```yaml
comparison:
  enabled: true
  type: "reference_table"  # reference_table | population_gauge | before_after
  hook_text: "How does your dose compare?"
  # This is the #1 question type across ALL topics (40% of replies)
```

### Share / Media Output
```yaml
share:
  card_title: "My Ozempic dose: {result}"
  hook: "What dose are you on?"
  media_format: "result_card"  # result_card | infographic | protocol_steps
  # Defines what the Twitter-distributable media asset looks like
```

### Demand Capture
```yaml
demand_capture:
  enabled: true
  prompt: "Have another health question?"
  subtext: "Tell Pulse what you need. We'll build it."
  # Universal across all calculators
```

### FAQ
```yaml
faq:
  - question: "How many clicks do I need for my Ozempic dose?"
    answer: "..."
    # Derived from Twitter demand: dosage is #1 question for Ozempic
  - question: "What if I miss a dose?"
    answer: "..."
```

### Sources
```yaml
sources:
  - text: "Novo Nordisk. Ozempic prescribing information."
    url: "https://..."
  # Topic-specific, minimum 3 per calculator
```

### Related
```yaml
related_calculators:
  - route: "/ozempic-weight-loss-calculator"
    title: "Ozempic Weight Loss Calculator"
related_guide:
  route: "/resources/ozempic-weight-loss-calculator-guide"
  title: "Complete Ozempic Weight Loss Guide"
```

## What's Configurable vs Logic-Driven

### CONFIGURABLE (stamp across calculators via config)
| Element | Config Field | Why Universal |
|---------|-------------|---------------|
| H1 headline | `headline` | Every page needs user-language H1 |
| Subtitle | `subtitle` | Every page needs direct answer |
| Display mode | `display_mode` | reference vs validation — set per calculator |
| Emotional tone | `tone` | clarity/reassurance/authority — set per calculator |
| Comparison layer | `comparison.*` | #1 question type across all topics |
| Share mechanic | `share.*` | Universal engagement driver |
| Demand capture | `demand_capture.*` | Universal — identical across all pages |
| FAQ structure | `faq` | Same accordion pattern, different content |
| Media output format | `share.media_format` | Per-topic category |
| Result section types | `result_sections[].type` | Same display components, different data |
| Related links | `related_*` | Same component, different links |

### LOGIC-DRIVEN (requires per-calculator code)
| Element | Why Not Configurable |
|---------|---------------------|
| Calculation formula | Math is topic-specific |
| Input fields/validation | Each calculator has unique inputs |
| Result interpretation text | Depends on actual computed value |
| Safety caveats | Medical risk varies dramatically |
| Comparison reference points | Clinical thresholds are topic-specific |
| Action items after results | What to DO depends on what the result means |
| Source citations | Different research per topic |

### HYBRID (configurable structure, logic-driven content)
| Element | Config | Logic |
|---------|--------|-------|
| FAQ | Accordion structure, styling | Q&A content per topic |
| Result gauge | Component type (gauge/chart/table) | Scale, thresholds, colors |
| Methodology | Section structure | Methodology text |

## Implementation Approach

1. **Single shared template** (`calculator_v2.html`) that reads a config object
2. **Per-calculator JS module** for computation logic
3. **Config passed via Jinja** from app.py route (or loaded from YAML/JSON)
4. **Media generation** as a post-render step (Playwright captures result card)

## What Could Be Wrong

- The "user-language headline" approach might hurt SEO if LLMs/Bing expect clinical terms
- The comparison layer might add noise for simple calculators (VitD conversion is binary: convert and done)
- The demand capture component might lower engagement if it distracts from results
- "Reference mode" might be wrong for Ozempic — its Twitter engagement is debate-driven, not reference-driven (but the PEN CLICK calculator serves practical users, not debaters)

## Iteration Plan

Ship the first redesigned calculator (Ozempic Pen Click). Measure:
- Engagement rate vs current 86% (GA4)
- Share card usage (event tracking)
- Demand capture submissions
- Time on page / scroll depth
- LLM citation rate (Search Console, ChatGPT referral tracking)

If metrics decline, roll back and investigate which config element caused it. The config architecture makes this possible — change one field, not the whole template.
