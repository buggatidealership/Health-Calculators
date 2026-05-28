# Triangulated Signals (High-Conviction)

**Last updated:** 2026-05-28

Signals confirmed by ≥3 independent sources within 90 days. These outweigh single-article reads. Cited in theses.

**Per principle #29 (added 2026-05-27)**: each source MUST be segment-classified before promotion. SAME-SEGMENT clusters promote here; CROSS-SEGMENT clusters log to `cross-source-log.md` only.

## Format

```
[YYYY-MM-DD promoted] {THEME or DIRECTION}
Segment classification (per principle #29): [single segment OR cross-segment]
Sources:
  1. [primary] - [name, date, what was said] [SEGMENT: X]
  2. [secondary] - [name, date, what was said] [SEGMENT: X]
  3. [tertiary or another primary] - [name, date, what was said] [SEGMENT: X]
Convergent read: [what the signal collectively says]
Names affected: [tickers]
Falsifier: [what would suggest this convergence is coincidence not pattern]
```

## Entries (most recent first)

### [2026-05-28 promoted] Advanced-Packaging substrate supply chain at binding-constraint chokepoint

**Segment classification (per principle #29)**: SINGLE-SEGMENT — all sources are advanced-packaging segment. First triangulation hit of principle #29 threshold (3+ same-segment data points within 90 days).

**Sources** (all advanced-packaging segment):
1. **[T1 primary]** Ibiden ¥500B capex plan, ¥220B first phase at Gama Plant Cell6 for EMIB-T mass production, FY26-28 timeline (per [Globe and Mail relay of Ibiden IR T1](https://www.theglobeandmail.com/investing/markets/stocks/IBIDF/pressreleases/10864/ibiden-to-invest-yen500-billion-in-expanding-ic-package-substrate-capacity-for-ai-and-high-performance-servers/), May 2026)
2. **[T1 primary]** Samsung Electro-Mechanics $1B (1.55T KRW) silicon capacitor contract signed May 20, 2026 for delivery Jan 2027-Dec 2028 (per [Samsung EM newsroom T1](https://samsungsem.com/global/newsroom/news/view.do?id=10310))
3. **[T2 secondary]** Intel CEO Lip-Bu Tan on-record: substrate supply "extremely tight"; customers willing to prepay billions; "Intel/AMD/NVDA collectively co-funded roughly 50% of capex at top 4 substrate suppliers" (per [Tom's Hardware T2](https://www.tomshardware.com/tech-industry/semiconductors/intel-reportedly-in-talks-with-google-and-amazon-over-advanced-packaging) + [TrendForce T3](https://www.trendforce.com/news/2026/05/20/news-intel-says-emib-customers-back-substrate-prepayments-4-taiwan-and-2-japan-suppliers-reportedly-seek-commitments/), May 2026)
4. **[T3 trade]** Google v8e ("Humufish") H2 2027 launch confirmed using Intel EMIB-T packaging + TSMC chip + MediaTek design (per [SemiWiki/Kuo T3](https://semiwiki.com/forum/threads/ming-chi-kuo-on-intels-emib-t-packaging-for-google-tpu-v8e-humufish.25038/), May 2026)

**Convergent read**: EMIB-T substrate is a binding constraint at the advanced-packaging layer. Customer co-funded capex pattern (Intel/AMD/NVDA collectively ~50% of top-4 substrate-supplier capex per TrendForce) is the strongest possible demand-pull signal — analogous to how TSMC CoWoS customers pre-funded capacity in 2022-2023. The constraint persists through 2027-2028. Intel EMIB-T (with embedded silicon capacitors via Samsung EM contract) emerges as the genuine TSMC-CoWoS-bypass for non-NVDA AI ASICs.

**Names affected** (per Critical Rule #10 cascade — all have back-references):
- IBIDEN (primary beneficiary; substrate capacity at chokepoint; new candidate thesis stub created)
- MURATA (additive silicon-cap content per AI server; MLCC business unaffected per fresh-verified PDN architecture analysis — bear-signal framing in original sources was MISFRAMED)
- HYNIX (HBM independent of EMIB vs CoWoS choice; supports any packaging format)
- LGINNOTEK (FC-BGA substrate but different product mix vs EMIB-T)

**Falsifier**: Intel EMIB-T yield fails to reach 95%+ by H2 2026 → Google v8e delays or shifts back to TSMC CoWoS; Ibiden Gama Plant ramp slips; substrate suppliers reverse course on capex commitments (signaling customer demand softening).

**Investable conclusion**: TIER S candidate (per refined principle #33 criteria — limited oligopoly competition + customer-funded capex moat) at the EMIB-T substrate layer. Ibiden is the named beneficiary. Full TRACE event detail in `research/signals/events/2026-05-28-emib-t-substrate-cluster.md`.

**Methodology validation**: this is the FIRST triangulation entry promoted under principle #29 segmented-triangulation criteria. Three of four sources are T1/T2 primary (Ibiden IR, Samsung EM newsroom, Tom's Hardware citing Intel CEO on-record). Promotion is well-supported.

---



### [2026-05-20] AI compute demand outrunning supply — capacity-constrained narrative goes mainstream

**Convergent read:** Two of the largest AI players (Google + OpenAI) explicitly told the market on the same day that compute demand is outrunning supply and capacity constraints will persist. This is the strongest demand-side triangulated signal of 2026. S4 (digestion) bear case materially weakens; S3 (power binds) strengthens further.

**Sources:**
1. **T1 PRIMARY — Google I/O 2026 keynote (Sundar Pichai)**: 9.7T tokens/month (2024) → 480T (2025) → 3.2 quadrillion today. ~330× in 2 years per Google's [own blog post](https://blog.google/innovation-and-ai/sundar-pichai-io-2026/). Also [Shacknews coverage](https://www.shacknews.com/article/149205/google-3-2-quadrillion-monthly-ai-tokens).
2. **T1 PRIMARY — Sam Altman X post 2026-05-19**: "customers are increasingly asking us for certainty on capacity. as models get better, we expect that the world will be capacity-constrained for some time. we are offering discounted tokens for 1-3 year commits." ([X primary source](https://x.com/sama/status/2056827105401614656))
3. **T2 — CNBC reporting** on OpenAI "Guaranteed Capacity" product launch ([CNBC 2026-05-19](https://www.cnbc.com/2026/05/19/openai-announces-new-guaranteed-capacity-offering-for-customers-to-secure-compute.html))
4. **T1 — NBIS Q1 2026 SEC 6-K filing**: revenue $399.0M (+684% YoY), contracted power >3.5GW raised to 4GW year-end target ([SEC 6-K](https://www.sec.gov/Archives/edgar/data/0001513845/000110465926059872/tm2614392d1_ex99-2.htm)) — independent confirmation from the supply side that capacity is selling at premium prices

**Cross-references with prior triangulations:**
- Anthropic Q2 2026 $10.9B revenue + first profit (2026-05-20 entry above) — same demand-side dynamic, frontier provider reaching profit confirms demand pulls through to revenue
- HBM constraint analysis in `wiki/hbm-primer.md` — the supply side of this story; capacity-constrained narrative validates the binding nature

**Names affected:**
- NBIS — direct beneficiary; +684% Q1 print confirms; **P1 thesis candidate**
- NVDA, AMD, AVGO — all sell capacity that is now multi-year-contracted
- HBM (SK Hynix, Samsung, Micron) — every contracted compute hour needs HBM
- Power (VST, CEG, GEV, TLN, NBIS direct power purchases) — capacity is what they sell; pricing power confirmed
- Networking (ANET, MRVL) — cluster scale-up continues
- Test/inspection downstream (Camtek, FormFactor, Advantest) — more chips = more test

**Falsifier:** OpenAI capacity offering goes unsold (suggesting demand was overstated), OR major hyperscaler reports Q3 2026 capex deceleration to <30% YoY growth, OR token-volume growth visibly slows.

---


### [2026-05-20] Frontier model providers reaching operating profit at scale → AI capex sustainability bear case (S4) weakens materially

**Convergent read:** Model providers can be profitable at frontier compute spend levels. The "AI is unprofitable / capex sustainability is the bear case" narrative weakens.

**Sources:**
1. **PRIMARY** — WSJ reporting (via [Investing.com](https://za.investing.com/news/economy-news/anthropic-revenue-set-to-more-than-double-to-109-billion-in-q2-4293058)) 2026-05-20: Anthropic Q2 forecast $10.9B revenue + $559M first operating profit (excludes SBC, includes training costs)
2. **SECONDARY** — [Sherwood News](https://sherwood.news/markets/anthropic-revenue-run-rate-30-billion-google-broadcom-partnership/): Anthropic $30B annual run-rate confirmed; expanded Google + Broadcom partnerships
3. **TRIANGULATING** — Earlier per Barclays (via [Seeking Alpha](https://seekingalpha.com/news/4505254-openai-dominating-consumer-ai-token-consumption-anthropic-wins-enterprise-barclays)): Anthropic 34.4% enterprise share by April 2026, ahead of OpenAI's 32.3%. The enterprise dominance was already triangulated; profitability is the new leg.
4. **TRIANGULATING** — [Fortune](https://fortune.com/2026/04/30/google-amazon-ai-profits-anthropic-stake-bubble-earnings-2026/): Anthropic stake materially contributed to Google + Amazon Q1 2026 reported earnings

**Names affected (TRACE elsewhere):**
- AMZN — primary cloud partner, Trainium consumption ramping
- AVGO — newly named custom Si partner; previously Google TPU partner — now two of top-3 frontier providers
- GOOG — expanded partnership, TPU benefit, Anthropic stake P&L
- NVDA — mixed (Anthropic still buys NVDA at scale, but custom Si scaling = S2 pressure)
- SK Hynix, MU — every chip Anthropic uses needs HBM
- DDOG — agentic at $30B run-rate validates observability spend
- NOW — agentic enterprise integration thesis confirmed at scale

**Falsifier:** Anthropic Q2 2026 actuals materially below the $10.9B forecast (>15% miss) OR Q3 2026 reverts to losses, suggesting the Q2 profit was non-recurring.

### Promotion criteria reminder — single new article CAN trigger a triangulation if it converges with already-triangulated prior signals. This entry triangulates because Anthropic enterprise dominance was already triangulated (Barclays + multi-source) — the WSJ revenue/profit numbers ADD a new leg (profitability + Broadcom partnership) to an existing high-confidence pattern.

---

## Initial candidate triangulations (need 3rd source to confirm)

## Initial candidate triangulations (need 3rd source to confirm)

These have 2 sources already and could trigger on next confirming signal:

1. **Hyperscaler capex re-rate is anticipatory, not retrospective** — supported by 2 separate Q1 2026 earnings cycles (MSFT + GOOG capex raises). Need one more enterprise-side signal to triangulate.

2. **Custom silicon revenue at hyperscalers growing >50% YoY** — partial signal from AVGO commentary + Trainium/Maia mentions. Need an explicit hyperscaler disclosure.

3. **Power becomes binding within 18 months** — VST/CEG re-rate + transformer lead time extensions reported. Need a specific hyperscaler announcing "delayed deployment due to power" to triangulate.
