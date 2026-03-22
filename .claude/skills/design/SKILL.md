---
name: design
description: Design system with structural enforcement. Loads cross-domain research, requires emotional arc declaration before code, requires visual verification after code.
user-invocable: true
allowed-tools: Read, Write, Edit, Bash, Glob, Grep, WebFetch, WebSearch, Agent
---

# Design System

You cannot see what you build the way a human sees it. This skill compensates for that with three structural requirements. They are not optional. They are not self-reported. They produce artifacts the user can verify.

## BEFORE CODE: Declare (mandatory, produces visible output)

**1. Read the cross-domain synthesis:**
`tools/research-data/cross_domain_pattern_synthesis.md`
This single file contains the 20 generating principles, ~100 design rules, and the 3 meta-patterns. It is the highest-leverage read.

**2. State three sentences (out loud, in the conversation, before any code):**

> **FEEL:** "The viewer will feel [emotion] at [moment] because [mechanism]."
> **PRINCIPLE:** "The primary cross-domain principle is [name] because [why it fits this task]."
> **REFERENCE:** "The quality bar is [specific reference — V15, JTBD, product-v7, or an external example] because [what quality it represents]."

If you cannot fill these three sentences, you do not understand the task well enough to build. Stop and ask the user.

**3. If the task involves taste/vision/brand** (the user's territory per operating-system.md):
Call AskUserQuestion with your three sentences and ask: "Does this direction match what you see?" Do NOT proceed without approval. This is the user gate — it fires only on taste decisions, not on technical execution.

## DURING CODE: Apply (reference, not checklist)

The research library exists at `tools/research-data/`. Read what's relevant to your specific task. Key files:

- `design_psychology_research.md` — animation timing, easing, Norman's 3 levels, saturation
- `competitive_brand_video_teardowns.md` — no brand leads with UI as hero
- `micro_interaction_library.md` — 32 patterns with CSS
- `kinetic_typography_research.md` — 18 text techniques
- `color_transition_narrative.md` — Pixar color scripts
- `celebration_effects_research.md` — when NOT to celebrate
- `phone_mockup_design_research.md` — 6-layer model
- `chat_ui_design_patterns.md` — exact bubble CSS
- `data_viz_animation_research.md` — count-up, sparklines
- `dark_mode_health_ui_research.md` — V25 on-pattern
- `mobile_first_video_design.md` — 9:16, 30s optimal
- `scroll_animation_research.md` — IO, CSS scroll-driven

Hard rules (these are physics, not preferences):
- Never use `linear` or default `ease`. Always specify the curve.
- Micro-interactions <120ms. UI transitions 200-300ms. Hard ceiling 500ms.
- Text on screen: validate against 2.5 words/sec + 0.5s processing.
- Brand palette: #0a0f1a dark, #0e7a7e teal, #F5F0EA warm, #e8785e coral. Extend when emotional context requires it — state why.

## AFTER CODE: Verify (mandatory, produces visible artifact)

**Screenshot your output via Playwright.** Not the code — the rendered result. Look at the screenshot and answer:

1. **Would someone share this?** Not "is it correct" — would someone screenshot this frame and tweet it?
2. **Compare to reference.** Open the reference you named in BEFORE. What specifically does yours match? What doesn't? State both.
3. **Does it still match your FEEL sentence?** If the emotion you declared isn't what the screenshot produces, the design failed regardless of technical correctness.

If any answer is no, fix before shipping. The screenshot is the enforcement — you must see your output as a viewer sees it, not as code.

## LLM Biases (you will do these unless you actively resist)

1. **Anchoring.** After 2 rounds on the same visual approach, propose a fundamentally different direction.
2. **LLM-speed timing.** You read 1000x human speed. Every "feels right" duration is too fast. Calculate.
3. **Monotone pacing.** Map the emotional arc FIRST, assign speeds SECOND. Fast for transitions, slow for hero moments.
4. **Hiding the process.** Show the work being done (items populating, calculations resolving), not just the result.
5. **Instructions over enforcement.** If you catch yourself writing a checklist instead of building a mechanism, stop. The checklist is the symptom.

$ARGUMENTS
