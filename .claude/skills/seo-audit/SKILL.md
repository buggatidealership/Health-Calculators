---
name: seo-audit
description: Audit any page against Google SEO, Bing SEO, LLM citation, and Twitter distribution requirements. Use before shipping any page to production or after template changes.
user-invocable: true
allowed-tools: Read, Bash, Glob, Grep, WebFetch
---

# SEO & Distribution Audit

You audit pages against verified documentation. Every check traces to an official source or verified research finding from this project.

## STEP 0: Determine Optimization Target

Ask: what channels are we optimizing for?
- **Google SEO** — if targeting Google organic traffic
- **Bing SEO** — if targeting Bing (currently 16% of traffic)
- **LLM citation** — if targeting ChatGPT/Copilot/Perplexity citations
- **Twitter distribution** — if the page produces shareable media

Apply ALL relevant checklists. Most pages should be audited against all four.

## STEP 1: Technical SEO (Google + Bing)

| Check | Source | Pass/Fail |
|-------|--------|-----------|
| Title tag: keyword-relevant, <60 chars | Google SEO docs | |
| Title ≠ H1 (split for Bing keyword optimization) | Bing research: exact keywords weighted more | |
| H1: unique, user-language | Semantic demand framework | |
| Meta description: primary keyword, <155 chars | Bing: may influence ranking | |
| Schema: valid JSON-LD, no parse errors | Test with `json.loads()` on each block | |
| Schema types: appropriate (MedicalWebPage/WebPage + BreadcrumbList) | Bing: "actively relies on structured data" | |
| FAQPage schema: server-side, matches visible content | Our fix: JS-generated schema broke on v2 | |
| Canonical tag: present, self-referencing | Standard | |
| Mobile viewport: present | Standard | |
| robots meta: correct (index for live, noindex for mockups) | Standard | |
| Internal links: related calculators + guides | Count and compare to v1 | |
| Content-to-code ratio: >40% content | Our finding: v2 was 40% initially | |
| External CSS cached: not excessive inline styles | Our fix: moved to calculator-v2.css | |

## STEP 2: LLM Citation (ChatGPT, Bing Copilot, Perplexity)

| Check | Source | Pass/Fail |
|-------|--------|-----------|
| Answer capsule: static HTML, direct citable sentence | GEO paper: direct answers preferred by RAG | |
| FAQ direct answers: always visible (not hidden) | Our v2 design: direct answer + collapsed detail | |
| Statistics in content: specific numbers, study references | GEO paper: +40% visibility with citations/stats | |
| Citations: PubMed/FDA/authoritative URLs linked | GEO paper + Bing authority signals | |
| Static vs JS: core content server-rendered | LLMs may not execute JS | |
| robots.txt: OAI-SearchBot, ChatGPT-User, PerplexityBot allowed | Verified in our robots.txt | |
| data-nosnippet: on ads, demand capture, non-content elements | Bing Oct 2025: controls AI answer content | |

## STEP 3: Twitter Distribution

| Check | Source | Pass/Fail |
|-------|--------|-----------|
| Twitter Card meta: summary_large_image | Standard | |
| og:image: accessible URL, 1200x675 | Twitter Card spec | |
| Share buttons: X + WhatsApp present | Our v2 design | |
| Share URL: /share/ route with dynamic OG image | Our Pillow implementation | |
| Share image: actually renders on production (not 500) | Verified issue: fonts missing on Render | |
| Result area: screenshot-worthy without scrolling | Design framework | |

## STEP 4: Tracking & Analytics

| Check | Source | Pass/Fail |
|-------|--------|-----------|
| calculator_complete event fires | head_seo.html observer needs id="result" | |
| GA4 measurement ID present | head_seo.html | |
| UTM parameter tracking works | head_seo.html UTM handler | |
| Demand capture POSTs to /api/request-calculator | Our v2 implementation | |

## STEP 5: Cross-Domain Opportunities

After completing all checklists, look for:

1. **Elements that satisfy 3+ dimensions.** A single change that improves Google SEO AND LLM citation AND Twitter sharing. These are highest-leverage fixes. Example from our project: adding statistics to the answer capsule helped LLM citation (+40%), Bing content depth, AND Twitter bookmark rate simultaneously.

2. **Contradictions between dimensions.** Where optimizing for one channel hurts another. Example: user-language H1 ("How Many Clicks?") helps UX but drops "calculator" keyword that Bing weights. The split title/H1 resolved this — find similar resolutions.

3. **Issues NOT on this checklist.** The checklist covers known failure modes. New template patterns may introduce new failure modes. If something looks wrong but isn't on the list — flag it anyway. The checklist is the floor.

4. **Production verification.** The local test client may pass while production fails (share image 500 error). If possible, test against the live URL, not just local.

## Output Format

Present as a summary table:

```
PASS: X items
FAIL: X items (list each with fix)
MISSING: X items (not applicable or can't test)
CROSS-DOMAIN OPPORTUNITIES: X items (describe each)
BEYOND CHECKLIST: anything unusual found
```

$ARGUMENTS
