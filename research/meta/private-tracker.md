# Private AI Companies Tracker

**Last updated:** 2026-05-20

Names that matter to public-market thinking but don't have tickers. Track their actions because they shape demand and competitive dynamics for our universe.

## Frontier model providers

### OpenAI
- Status: Largest AI model provider; targeting Q4 2026 IPO at $800B–$1T valuation
- Public-market relevance: Compute customer (NVDA, MSFT Azure); Stargate consortium
- Latest signals: Going on-prem with enterprise consortium (Anthropic partnership)
- Watch: IPO progression; on-prem deal scale; partner shifts

### Anthropic
- Status: Strong #2 to OpenAI in scale, but passed OpenAI in enterprise share by April 2026
- Public-market relevance: Compute customer (AMZN AWS, GOOG); Anthropic-Amazon partnership deep; Anthropic-AVGO custom Si partnership announced May 2026
- **2026-06-10 update (per `signals/cross-source-log/2026-06-10-morning-brief-6-claim-verification-anthropic-spacex-dc.md`):**
  - **Fable 5 + Mythos 5 launched June 9** (first public Mythos-class). System card (T1, 319pp) discloses **silent capability-degradation interventions** on frontier-LLM-development tasks (~0.03% traffic, <0.1% orgs; prompt modification/steering/PEFT, invisible at runtime). "Sabotage" claims UNSUPPORTED; cyber/bio/chem/distillation requests reroute to Opus 4.8, not refused. Enterprise-trust impact: H1 negligible P~60% / H2 slow-burn trust-tax P~30% / H3 escalation P~10% (my model).
  - **Bedrock first-breach:** Mythos-class invocation requires opt-in `provider_data_share` (prompts/completions to Anthropic, ≤30-day trust-safety retention, not training — T1 AWS docs). First crack in Bedrock's no-provider-sharing norm; narrow but precedent-setting.
  - **Comparative position vs OpenAI strengthening:** Anthropic technical wins now a NAMED OpenAI-collateral-risk factor (Bloomberg native-jp, SoftBank $6B margin-loan stall 2026-06-10); Google's $4.99 consumer price cut pressures OpenAI's consumer line while Anthropic stays enterprise-weighted. P~60% (my model) OpenAI-funding-stress hardens into Q3 narrative with Anthropic as relative beneficiary.
  - SpaceX $45B compute deal = GROUND (xAI Colossus, 220K NVDA GPUs, 300MW per 2026-06-07 verification file); orbital = "interest" only (T2). SpaceX IPO June 12.
- Latest signals (2026-05-20, per [WSJ via Investing.com](https://za.investing.com/news/economy-news/anthropic-revenue-set-to-more-than-double-to-109-billion-in-q2-4293058) and [Sherwood News](https://sherwood.news/markets/anthropic-revenue-run-rate-30-billion-google-broadcom-partnership/)):
  - Q1 2026 revenue: $4.8B
  - Q2 2026 forecast revenue: $10.9B (~+127% q/q, ≈ "130% surge" per headline)
  - Q2 2026 forecast operating profit: **$559M — first ever** (includes training costs, excludes SBC)
  - Annual run rate: $30B (per Sherwood News)
  - Prior guidance had been: no profitability until 2028 at earliest
  - Caveat: may not stay profitable full year due to compute + training capex
  - Expanded partnerships announced: **Google + Broadcom** (the AVGO custom Si angle is the under-noticed detail)
- Watch: IPO progression (some sources hint at IPO timing acceleration); sovereign capital deal (likely Gulf state); Broadcom custom Si ramp; AWS Trainium volume consumption

### xAI
- Status: Musk-backed; large compute build (Colossus)
- Public-market relevance: NVDA customer; sovereign capital backing
- Watch: Compute scale; integration with X platform

### Mistral
- Status: French frontier provider; smaller scale
- Public-market relevance: EU sovereign AI vehicle; potential customer for European cloud
- Watch: EU government deals; partnership with French state

### Perplexity
- Status: AI-search vertical; smaller scale
- Public-market relevance: Customer for inference; potential acquirer or acquirer-target

## AI infrastructure / inference clouds

### CoreWeave
- Status: Largest specialized NVDA-rental cloud
- Public-market relevance: IPO candidate; NVDA dependency
- Watch: Revenue scale; hyperscaler competition reaction

### Lambda Labs, Crusoe Energy, similar
- Status: Smaller specialized infra
- Watch: M&A consolidation

## Defense / sovereign AI integrators

### Anduril
- Status: Defense AI/autonomy leader
- Public-market relevance: PLTR competitor/complement; defense AI spend grows

### Shield AI
- Status: Autonomous systems for defense
- Watch: Government contract progress

## Agent / AI-native infrastructure

### Various agent-platform startups (Hugging Face, LangChain, etc.)
- Status: Tooling for agentic builds
- Public-market relevance: TAM creation for compute and observability

## How to use this file

When a private co does something material (raises, partners, launches, gets acquired), it changes public-market dynamics:
- OpenAI IPO → re-prices the AI sector multiple
- Anthropic sovereign deal → confirms T6 (sovereign AI scaling)
- Custom Si partnership announcement at a hyperscaler → S2 evidence
- M&A in private inference clouds → consolidation theme

Update affected `companies/{TICKER}/interpretations.md` and run TRACE if material.

---

## OpenAI exclusivity premium compression (E5 candidate added 2026-06-03)

**Signal cluster:**
- OpenAI frontier models + Codex now available on AWS (beyond Azure exclusivity) per 2026-06-02 morning brief T1
- Microsoft launched MAI-Thinking-1 + MAI-Code-1-Flash own-frontier models at Build 2026 (June 2, 2026) per T2 Microsoft AI — hedging OpenAI partnership
- Combined signal: BOTH Microsoft AND OpenAI hedging the exclusive partnership simultaneously

**Implication:**
- OpenAI distribution moat (Azure exclusivity premium) compressing in real time
- ORCL Stargate positioning is one-step-removed-affected — Stargate buildout still happens but OpenAI exclusivity less load-bearing
- AVGO custom Si partnership with OpenAI (Titan) remains material but less unique vs MSFT-MAI alternative
- Anthropic positioning STRENGTHENS by comparison (Anthropic kept compute commitments + Surge AI for RLHF; less hyperscaler-dependent for distribution)

**E5 promotion criterion:** Any further hyperscaler-OpenAI relationship dilution within 90 days (e.g., Google adding OpenAI to GCP, OpenAI multi-cloud expansion to Oracle, OpenAI hardware diversification beyond NVDA).

**Affected public-market positioning (per Critical Rule #10):**
- ORCL Stargate thesis: marginally weakened (Stargate buildout intact but OpenAI exclusivity premium reduced)
- AVGO custom Si: TITAN program less differentiated vs MSFT in-house alternatives
- MSFT: strengthened (own-frontier optionality reduces OpenAI dependency)
