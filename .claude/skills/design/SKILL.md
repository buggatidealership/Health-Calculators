---
name: design
description: Semantic-driven design system. Use BEFORE any UI/UX work, page design, calculator layout, landing page, or visual changes. Loads research, applies verified design principles, enforces verification.
user-invocable: true
allowed-tools: Read, Write, Edit, Bash, Glob, Grep, WebFetch, WebSearch, Agent
---

# Semantic-Driven Design System

You do NOT design from intuition. You design from verified data + verified design principles. Every element must trace to a data source.

## STEP 0: Load Research (MANDATORY)

Read these files BEFORE producing any design output:

1. Research findings: `tools/research-data/semantic_demand_findings_v1.md`
2. Dual optimization framework: read from memory `framework-dual-optimization.md`
3. Click-to-outcome framework: read from memory `framework-click-to-outcome.md`

State the key data points relevant to THIS specific design task before proceeding.

## STEP 1: Determine Design Parameters from Data

Answer these BEFORE choosing any visual treatment:

**Emotional state for this topic?** (from research findings)
- Confused → one large answer, bold, isolated, minimal surrounding info
- Frustrated → show the math, transparent, "here's the formula + your input + output"
- Seeking → authority framing, named formula, citation visible
- Skeptical → evidence first, study results, specific numbers

**Bookmark/like mode?** (from research findings)
- Reference mode (ratio >0.2): dense, dashboard-like, scannable, designed to be saved/screenshotted
- Validation mode (ratio <0.1): spacious, one answer dominates, emotional color, designed to be felt

**Content format that drives engagement?** (from research findings)
- Supplement topics → data/study format, lead with citation
- Action/nutrition topics → list/protocol format, numbered steps
- Controversial topics → question format, frame as answering not stating
- Curiosity topics → personal/direct format, "your child will be X"

**User language for labels?** (from 616-tweet dataset)
- Check how real people phrase this question
- Use THEIR words: "How many calories do I burn?" not "TDEE Calculator"
- Buttons: "Show my number" not "Calculate"

## STEP 2: Design Research (look before designing)

Before writing code, search for 3-5 visual references:
- Award-winning tool/calculator sites (Awwwards, siteinspire)
- Premium SaaS product pages (Stripe, Linear, Vercel patterns)
- Google Core Web Vitals requirements (LCP <2.5s, no CLS, INP <200ms)

State what visual patterns you're borrowing and why they fit this context.

## STEP 3: Cross-Domain Optimization

Evaluate each element against ALL dimensions simultaneously:
- **Google SEO:** crawlable text? keyword in heading? CWV impact?
- **LLM citation:** citable answer sentence in static HTML?
- **Twitter distribution:** screenshot-worthy at 1200x675? share hook?
- **User engagement:** matches emotional state? comparison layer present?
- **Algo reward:** format matches what gets bookmarked in this topic category?

Flag elements that satisfy 3+ dimensions — these are highest leverage.

## STEP 4: Build with Visual Intent

Brand system: accent #0e7a7e, navy #0a0f1a, DM Serif Display + DM Sans.

Apply meaningful motion:
- Count-up animation for result numbers
- Spring easing for bar fills and spectrum markers
- Fade-in for result reveal
- Scale feedback on card selection

Design for screenshotting:
- Result area must look good cropped as an image
- Visual boundaries (cards, colored backgrounds) define screenshot zones
- No result should require scrolling to understand

## STEP 5: Pre-Output Verification (MANDATORY)

Complete this checklist before showing design to user:

| Element | Data source | Traced to specific data point? |
|---------|------------|-------------------------------|
| H1/headline | Which user query from dataset? | |
| Result display | Bookmark/like ratio → which mode? | |
| Emotional tone | Which emotional state from research? | |
| Visual density | Reference or validation mode? | |
| Content format | Which engagement format for this category? | |
| All labels/copy | User language from which tweets? | |
| Comparison layer | Present? (40% of all questions are comparisons) | |
| Share mechanic | OG card? Screenshot-worthy? | |

**Any element with blank "Data source" → flag as ASSUMED. State what data would verify it.**

## STEP 6: Push Beyond the Checklist

The verification above is the FLOOR, not the ceiling. After passing it, ask:

1. **What would make someone screenshot this and share it unprompted?** Not because we added a share button — because the design itself is worth sharing.
2. **What visual or interaction choice would surprise the user?** An animation, a layout, a transition that they didn't expect from a calculator page.
3. **Is there a cross-domain insight the checklist didn't anticipate?** A connection between the data, the algo, the SEO, and the UX that creates an opportunity none of them would surface alone.
4. **What would a designer who's never seen our research do differently — and are they right?** The research prevents lazy defaults, but it can also create research-constrained defaults. Challenge the framework when your reasoning is strong.
5. **What design principle from a top-tier product (Stripe, Linear, Apple, Vercel) applies here that we haven't considered?** Browse real sites for inspiration before finalizing.

If you have an idea the data doesn't explicitly support but your reasoning says is strong — INCLUDE IT. Label it as "hypothesis, not data-derived" so the user can evaluate it separately from the verified elements.

The best designs satisfy the checklist AND do something the checklist couldn't have predicted.

## ANTI-PATTERNS (verified mistakes from this project)

- Do NOT invent brand taglines — derive from user language
- Do NOT use clinical terminology when users use plain questions
- Do NOT copy v1 modules and call them "redesigned"
- Do NOT organize by internal categories — users think in questions
- Do NOT skip animations/visuals because you "see in code"
- Do NOT present design without completing the verification checklist
- Do NOT treat the checklist as the scope — it's the minimum, push beyond it

$ARGUMENTS
