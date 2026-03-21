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
2. Design psychology research: `tools/research-data/design_psychology_research.md`
3. Cross-domain pattern synthesis: `tools/research-data/cross_domain_pattern_synthesis.md` — 10 generating principles, 49 design rules derived from physics/music/neuroscience/architecture/cinema/linguistics/ecology/mathematics
4. Competitive brand video teardowns: `tools/research-data/competitive_brand_video_teardowns.md` — KEY: no successful health brand leads with app UI as hero
5. Dual optimization framework: read from memory `framework-dual-optimization.md`
6. Click-to-outcome framework: read from memory `framework-click-to-outcome.md`

**Reference libraries (read when relevant to the specific task):**
- `tools/research-data/micro_interaction_library.md` — 32 patterns with CSS/JS
- `tools/research-data/kinetic_typography_research.md` — 18 text animation techniques
- `tools/research-data/phone_mockup_design_research.md` — 6-layer phone model
- `tools/research-data/chat_ui_design_patterns.md` — exact bubble CSS values
- `tools/research-data/data_viz_animation_research.md` — count-up, progress bars, sparklines
- `tools/research-data/celebration_effects_research.md` — when to celebrate, when NOT to
- `tools/research-data/color_transition_narrative.md` — Pixar color scripts, Manchester Color Wheel
- `tools/research-data/dark_mode_health_ui_research.md` — V25 validated on-pattern
- `tools/research-data/scroll_animation_research.md` — IO patterns, CSS scroll-driven
- `tools/research-data/mobile_first_video_design.md` — 9:16 > 16:9, 30s optimal

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

## STEP 3.5: Apply Design Psychology (MANDATORY for any visual output)

These are research-backed principles from `tools/research-data/design_psychology_research.md`. Apply them to every design decision. They are not optional.

### Emotion Through Color
- **Saturation is the dominant emotional variable, not hue.** [VERIFIED: Springer 2017 + PMC systematic review, 42,266 participants] High saturation = arousal/energy. Low saturation = calm. Vary saturation dynamically — dim teal for backgrounds, bright teal for moments of impact.
- Don't use one flat color at one saturation for everything. The SAME hue at different saturations creates emotional range.
- **Health context tension:** high arousal may not be optimal for anxious health users. Default to moderate saturation, spike only for celebration/success moments.

### Animation Timing (hard rules)
- **Micro-interactions:** <120ms (toggles, button presses, checkmarks). Feels physical.
- **UI transitions:** 200-300ms (modals, screen changes, card entrances). Feels responsive.
- **Hard ceiling:** 500ms. Anything longer feels sluggish.
- **Entrances 20-30% longer than exits.** Arriving deserves more ceremony than leaving.
- **All durations must be justified against these numbers.** If you write `transition: 0.8s`, you must state why it exceeds 500ms.
- Source: NN/g animation research [VERIFIED]

### Easing Curves = Personality
- **Linear = robotic.** Never use linear easing on anything a human sees.
- **ease-out = decisive arrival.** Use for elements entering the viewport.
- **ease-in = gentle departure.** Use for elements leaving.
- **Spring (cubic-bezier with y > 1) = alive, tactile, playful.** Use `cubic-bezier(0.34, 1.56, 0.64, 1)` for bouncy entrances. The overshoot IS the personality.
- **Rule:** "The transition is the verb. The easing curve is the adverb."

### Don Norman's Three Levels (design must satisfy all three)
1. **Visceral:** Instinctive gut reaction in <50ms. Does it LOOK good before the brain processes it? (Color, contrast, typography, whitespace, glow, grain)
2. **Behavioral:** Does it work? Is it usable? Can I accomplish my task? (Calculator inputs, clear results, obvious interactions)
3. **Reflective:** Does this feel like something I want to be associated with? Does it match my self-image? (Premium feel, brand identity, "this is the kind of tool I use")
- **Behavioral is the floor.** Without it, nothing else matters.
- **Visceral + reflective determine the ceiling.** They're what makes someone share, return, and recommend.
- Apply: before shipping, ask "does this pass all three levels?"

### Visual Punctuation (from music theory)
- Design has rhythm like music has beats. Not every moment should animate at the same speed.
- **Hero moments = SLOW.** The most important reveal gets the longest, most dramatic entrance.
- **Transitions = FAST.** Scene changes, state swaps — these should be quick and decisive.
- **Rests = SILENCE.** Empty frames, pauses, black beats — these create anticipation. Earn them through preceding density.
- **Visual "sound effects":** flash overlay (50ms, 8-10% opacity white) for impact moments. Micro-shake (2px, 0.2s) for physical emphasis. Viewport scale pulse (1.005, 100ms) for bass-hit moments.

### Negative Space = Premium
- The result number should have MORE surrounding whitespace than any other element. Figure/ground: the most important thing has the most breathing room.
- Empty space is not wasted space. It's a decision that communicates confidence and quality.
- **But:** calculator users are task-focused. Don't use so much whitespace that it feels empty of information. Balance premium feel with information density.

### Gestalt Common Fate (for animation)
- Elements that move together are perceived as a GROUP. Use synchronized motion to communicate belonging.
- Elements that move at different times are perceived as SEPARATE. Use staggered timing (100-200ms delays) to communicate sequence/hierarchy.
- Apply: when 6 drink cards enter, stagger them (they're options, not a unit). When a coach card enters as one block, animate it as one unit (it's a single message).

### Dopamine Micro-Patterns
- **Progress bars filling** = completion anticipation. Use cubic-bezier with overshoot for the fill.
- **Checkmarks appearing** = task completion. Accompany with color change (gray → teal) + optional sparks.
- **Confetti/sparks** = celebration. Use at MOST 2 times per experience. More than that dilutes impact.
- **Count-up numbers** = progress visualization. Change color as thresholds are crossed for added information density.
- **Variable timing** = unpredictable reward. Don't stagger every element at exactly the same interval. Vary: 150ms, 200ms, 120ms, 180ms. The irregularity keeps attention.

### The Premium vs. Cheap Gap
What makes design feel CHEAP: linear easing, same animation speed everywhere, flat colors at uniform saturation, no negative space, no film grain/texture, all elements same visual weight.
What makes design feel PREMIUM: spring easing, dynamic rhythm, saturation variation, generous negative space, subtle texture (grain at 3-4% opacity), clear visual hierarchy with one dominant element per view.

## STEP 4: Build with Visual Intent

Brand system: accent #0e7a7e, navy #0a0f1a, DM Serif Display + DM Sans.

Apply meaningful motion:
- Count-up animation for result numbers (with color shift at thresholds)
- Spring easing `cubic-bezier(0.34, 1.56, 0.64, 1)` for all bouncy entrances
- `ease-out` for standard entrances, `ease-in` for exits
- Scale feedback on card selection: press `scale(0.95)` at 80ms, release at 150ms
- Never use `linear` or `ease` (the default) — always specify the curve

Design for screenshotting:
- Result area must look good cropped as an image
- Visual boundaries (cards, colored backgrounds) define screenshot zones
- No result should require scrolling to understand

Design for emotion:
- Every design must pass Norman's 3 levels: visceral (looks premium), behavioral (works), reflective (identity-worthy)
- Map the emotional arc BEFORE choosing animations: what should the viewer feel at each moment?
- Assign speed/easing to each moment based on the emotional arc, not uniformly

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

### Psychology Verification (also mandatory)

| Principle | Applied? | How? |
|-----------|----------|------|
| Norman's 3 levels | Visceral pass? Behavioral pass? Reflective pass? | |
| Easing curves | Any `linear` or default `ease`? All specified? | |
| Animation timing | All under 500ms? Micro-interactions under 120ms? | |
| Saturation variation | Same color at different saturations, or flat? | |
| Visual rhythm | Mapped emotional arc? Speed varies by moment? | |
| Negative space | Hero element has most breathing room? | |
| Visual punctuation | Impact moments have flash/shake/pulse? | |

### Cross-Domain Verification (mandatory for animations and interactive designs)

| Principle | Applied? | How? |
|-----------|----------|------|
| Nucleation | Does first element predict the structure of everything that follows? | |
| Substrate | Does each step change how the user SEES, not just what they know? | |
| Loading as product | Is the loading/calculation state showing work, not a spinner? | |
| Back-channel | Does the system signal "uh-huh" during extended input? | |
| Threshold state | Is there a 300-600ms state between input and result where the system visibly works? | |
| Gradient surround | Is the target emphasized by de-emphasizing surroundings, not by spotlighting? | |
| Departure transfer | Do exiting elements transfer energy to a receiver, not vanish? | |
| Three-suspension | Are there ever >3 unresolved threads? If yes, resolve one. | |
| Pink noise pacing | Does timing vary at macro (2-3 shifts), meso (4-6 per section), and micro (5-15% jitter) scales? | |
| Tension matches release | Does the release type match the tension type (visual→visual, emotional→emotional)? | |

### Competitive Verification (mandatory for brand/marketing output)

| Check | Status |
|-------|--------|
| Does it lead with app UI as hero? If yes, STOP — no successful brand does this. | |
| Is it on-brand dark mode palette (#0a0f1a, #0a0e12)? Not warm brown, not mid-gray. | |
| Would the first 3 seconds work if Twitter cuts it there? (Fourier: 80% of value in first state) | |
| Is it 30-45s for Twitter feed? (Or 2 cuts: short feed version + full pinned version) | |

**Any row with blank "How?" or "Status" → the principle was not applied. Fix before shipping.**

## STEP 6: Push Beyond the Checklist

The verification above is the FLOOR, not the ceiling. After passing it, ask:

1. **What would make someone screenshot this and share it unprompted?** Not because we added a share button — because the design itself is worth sharing.
2. **What visual or interaction choice would surprise the user?** An animation, a layout, a transition that they didn't expect from a calculator page.
3. **Is there a cross-domain insight the checklist didn't anticipate?** A connection between the data, the algo, the SEO, and the UX that creates an opportunity none of them would surface alone.
4. **What would a designer who's never seen our research do differently — and are they right?** The research prevents lazy defaults, but it can also create research-constrained defaults. Challenge the framework when your reasoning is strong.
5. **What design principle from a top-tier product (Stripe, Linear, Apple, Vercel) applies here that we haven't considered?** Browse real sites for inspiration before finalizing.

If you have an idea the data doesn't explicitly support but your reasoning says is strong — INCLUDE IT. Label it as "hypothesis, not data-derived" so the user can evaluate it separately from the verified elements.

The best designs satisfy the checklist AND do something the checklist couldn't have predicted.

## LLM-Specific Design Biases (verified Mar 2026)

These are failure modes specific to LLMs doing design work, discovered through iterative design sessions. They apply because you are an LLM, not despite it.

### BIAS 1: Anchoring to prior output (UNIVERSAL)
**What happens:** After producing a design, you iterate within the same visual container — same colors, same layout structure, same animation type — for 3, 4, 5+ rounds. Each round is a variation, not a rethinking. The user has to explicitly say "don't be rigid" or "change everything" before you'll abandon the approach.
**Rule:** After 2 rounds of feedback on the same visual approach, you MUST propose a fundamentally different direction alongside any iteration. Don't wait for the user to ask. State: "I notice I've been iterating within [X container]. Here's a different direction."
**Why:** This bias comes from next-token prediction favoring consistency with recent context. Your own output becomes the strongest anchor in the conversation.

### BIAS 2: Timing animations at LLM reading speed (UNIVERSAL)
**What happens:** You set `setTimeout` durations based on how fast YOU process text, not how fast a human reads it. A 21-word message gets 2 seconds of screen time when it needs 9 seconds. The animation looks right in code but is unwatchable.
**Rule:** All animated text must be validated against human reading speed: ~2.5 words/sec + 0.5s for visual processing. Every duration must be justified against this math, not against intuition. When in doubt, run the calculation before setting the timing.
**Why:** You read at ~1000x human speed. Every timing decision you make by "feel" will be too fast.

### BIAS 3: Monotone pacing (APPLIES TO: motion/animation work)
**What happens:** Every element animates with the same duration, easing, and pause. Text fades in at 0.7s. Next text fades in at 0.7s. No rhythm, no dynamics, no surprise.
**Rule:** Pacing must have dynamics. Apply the brand-ad framework:
- **Slack:** Chaos scenes should feel chaotic (fast, overlapping). Clarity scenes should feel like relief.
- **Apple:** Hero moments get SLOW reveals. Everything else is faster. Earn the slow moments through contrast.
- **Nike:** Words should have rhythm variation — fast-slow-fast. Kinetic typography: some words land heavy, some arrive in staccato bursts.
- **Coca-Cola:** Show the invisible process as entertainment. Don't just show the output — show it being built.
If every element has the same animation timing, the design has no rhythm. Map the emotional arc first, then assign speeds: fast for transitions, slow for hero moments, dramatic for payoffs.

### BIAS 4: Hiding the process (APPLIES TO: multi-step/compound outputs)
**What happens:** When the product does work (chains calculations, generates a report, builds a plan), you show only the final output. The user sees a result card but not the work that produced it.
**Rule:** When the product does work the user doesn't see, show that work as entertainment. A grocery list shouldn't just appear — it should populate item by item, then get checked off. A report shouldn't just land — its sections should assemble visibly. The "how" is as compelling as the "what."
**Why:** Showing process builds trust (the user sees the work happened) and creates engagement (watching something being built is inherently interesting).

### BIAS 5: Treating the brand palette as a constraint (UNIVERSAL)
**What happens:** The brand system says "accent #0e7a7e, navy #0a0f1a" and you apply dark navy backgrounds to every design, including ones where the emotional context calls for warmth, lightness, or approachability.
**Rule:** The brand palette is a starting point, not a cage. If the emotional context requires warmth (#F5F0EA cream), playfulness (multi-color), or energy (bright accents), extend the palette. State why: "The brand palette is dark/clinical but this context calls for warmth because [user emotional state]. Extending with [color] for [reason]."
**Why:** Brand consistency matters less than emotional accuracy. A health companion that feels cold undermines trust more than a slightly off-brand color.

## ANTI-PATTERNS (verified mistakes from this project)

- Do NOT invent brand taglines — derive from user language
- Do NOT use clinical terminology when users use plain questions
- Do NOT copy v1 modules and call them "redesigned"
- Do NOT organize by internal categories — users think in questions
- Do NOT skip animations/visuals because you "see in code"
- Do NOT present design without completing the verification checklist
- Do NOT treat the checklist as the scope — it's the minimum, push beyond it
- Do NOT iterate the same visual container 3+ times without proposing a fundamentally different direction
- Do NOT set animation timings without validating against human reading speed (~2.5 words/sec)
- Do NOT animate every element at the same speed — design rhythm, not uniformity

$ARGUMENTS
