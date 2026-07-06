# NBIS vs CRWV Comparative Deep-Dive + Aschenbrenner Reasoning Inference

**Date logged:** 2026-06-02
**Sources:** 3 parallel LLM-native subagents (A1 CRWV / A2 NBIS / A3 Aschenbrenner reasoning inference)
**Workflow:** INGEST + TRACE + Bayesian synthetic data inference
**Origin:** User question — "where do CoreWeave and Nebius fall into the stack? I think Leopold recently added a big, big position into Nebius. Drill into Nebius and CoreWeave, how they're different and why he chose [Nebius] or try to compute synthetic data as to why you would infer why he chose [Nebius] over [CoreWeave]"

---

## TL;DR (5 lines)

1. **Aschenbrenner NBIS position VERIFIED T1**: Schedule 13G filed 2026-05-27 disclosing 12,410,060 Class A shares = 5.6% stake; ~$2.6B value (my model derived from 12.41M × ~$208/share at disclosure date). Co-filed with Carl Shulman per [SEC 13G via Stocktitan](https://www.stocktitan.net/sec-filings/NBIS/schedule-13g-nebius-group-n-v-passive-investment-disclosure-5-9efcbda66f9c.html).
2. **REFRAME**: Aschenbrenner holds BOTH neocloud names — CRWV $556.1M (Q1 13F) + NBIS ~$2.6B (Q2 add via 13G). NBIS sized **~4.6× larger** than CRWV. This is COMPLEMENTARY ADDITION + portfolio construction, NOT rotation.
3. **Top 3 inferred reasons (my model, Bayesian-weighted)**: H3 Capital Structure 35% (NBIS D/E 2.1x vs CRWV D/E 10.7x — only hypothesis that addresses internal coherence with his $8.7B chip-puts portfolio) + H6 Subsidiary Optionality 25% (ClickHouse $4.2B + Avride $2.2-2.3B + Toloka $400-500M = ~$6.5-7B embedded options) + H5 Geographic/Sovereign AI 20% (EU Finland + France + Netherlands HQ + EU AI Act compliance demand).
4. **Stock states at decision time**: NBIS AT ATH ($244.05 June 1, 2026 per [Investing.com](https://www.investing.com/news/company-news/nebius-group-nv-stock-reaches-alltime-high-at-24405-usd-93CH-4719516)); CRWV -34% from ATH ~$187 per [MacroTrends](https://www.macrotrends.net/stocks/charts/CRWV/coreweave/stock-price-history).
5. **Position implication for user**: Neither name cheap today. CRWV cheaper (-34% from ATH) but levered (10.7x D/E). NBIS at peak recognition but cleaner. Most asymmetric entry awaits a 15%+ pullback on NBIS to ~$205-210. Aschenbrenner's pair-trade construction has merit but at his $13.7B AUM scale, single-position sizing math differs from a ~€200K portfolio.

---

## A1 + A2 Joint State Matrix — CRWV vs NBIS (verified facts)

| Dimension | CRWV | NBIS | Source |
|---|---|---|---|
| Q1 2026 revenue | $2.078B (+112% YoY) | $399.0M (+684% YoY) | T1 [CRWV SEC 8-K](https://www.sec.gov/Archives/edgar/data/0001769628/000176962826000220/coreweave1q26earningspress.htm) + T1 [NBIS SEC 6-K](https://www.sec.gov/Archives/edgar/data/0001513845/000110465926059872/tm2614392d1_ex99-2.htm) |
| FY2026 revenue guide | $12-13B | $3.0-3.4B | T1 same |
| Q1 Adj EBITDA | $1.157B (56% margin) | $129.5M (~32% margin) | T1 same |
| FY2026 EBITDA margin guide | Not explicit | ~40% | T1 NBIS guidance |
| Q1 GAAP net loss | -$740M | +$621.2M GAAP (includes $780.6M equity revaluation gain); adjusted -$100.3M | T1 same |
| Q1 capex | $7.695B | $2,472.9M | T1 same |
| FY2026 capex guide | $31-35B | $20-25B | T1/T2 |
| Q1 FCF | -$4.71B | (significantly negative; not isolated) | T1 SEC 10-Q (CRWV) |
| Long-term debt | $21.627B (D/E ratio 10.7x per T2 financial aggregators) | ~$8.4B non-current + $4.3B convertibles March 2026 (D/E ~2.1x per T2) | T3 StockAnalysis + T2 aggregators |
| Cash position | Net negative | $3.7B end-2025 + $6.3B capital raise = ~$867M net cash (post March 2026 convertibles) | T1 + T2 |
| Revenue backlog | $99.4B | ~$50B | T1 CRWV 8-K + T2 NBIS aggregators |
| Power contracted | 3.5 GW (8 GW 2030 target) | 3.5 GW (raising to 4 GW) | T1/T2 |
| GPU fleet | 250K+ (likely understated mid-2026) | Not disclosed; implied ~100K+ at blended ASP | T3 + my model |
| Microsoft customer concentration | ~67% FY2025 → <35% Q1 2026 | One of two top customers (~$19.4B commitment) | T1 + T2 |
| Other top customers | OpenAI $22.4B + Meta $35.2B + Anthropic + Jane Street + 10 customers $1B+ | Meta $27B + MSFT $19.4B + Brave + Recraft + CentML + ~$550M spot ARR | T1 + T2 |
| Geographic mix | US-centric | EU (Finland Mäntsälä + France Lille + Pennsylvania + Missouri) + Netherlands HQ | T1 |
| Software stack | Bare-metal GPU rental | AI dev tools + managed platform + GPU IaaS | T1 + T2 |
| Subsidiary optionality | None disclosed | ClickHouse 28% (~$4.2B implied) + Avride 83% (~$2.2-2.3B) + Toloka (Bezos lead, ~$400-500M) + TripleTen | T1 + T2 |
| NVIDIA equity relationship | No disclosed NVDA equity stake in CRWV | NVDA equity investor (part of $6.3B raise) | T2 |
| Governance | US-incorporated, standard | Dual-class; Volozh 52% voting / 11% economic; Dutch law | T1 20-F per TipRanks |
| Stock price (June 2, 2026) | ~$123 | $244.05 (June 1, 2026) | T3 StockAnalysis + T2 Investing.com |
| Market cap | ~$67B | ~$58B | T3 + T2 |
| Enterprise value | ~$89.9B | Net cash neutral; EV ≈ market cap | T3 GuruFocus + derived |
| EV/2026 Revenue (my model) | ~7.2x | ~17-19x (rough estimate) | derived |
| ATH-distance | -34% from ATH ~$187 | AT ATH | T3 MacroTrends + T2 Investing.com |
| 1-year return | (post-IPO March 2025, less applicable) | ~+529% | T4 WallStreetZen |
| **Aschenbrenner position** | **$556.1M Q1 13F** | **12,410,060 shares = 5.6% stake; ~$2.6B value (my model)** | T1 SEC 13G + `signals/events/2026-05-21-aschenbrenner-q1-13f.md` |
| Aschenbrenner 13G date | (Q1 13F filed May 15) | Event May 19, 2026; filed May 27, 2026 | T1 SEC |
| Aschenbrenner 13G co-filer | n/a | Carl Shulman (AI safety researcher; Aschenbrenner collaborator) | T1 SEC 13G |
| Right-Side-of-Belka score | 3/5 (3 PASS + 2 conditional) | 4/5 (FAILS valuation discount only) | A1 + A2 my model |

---

## Bayesian Synthesis — 8 hypotheses on why Aschenbrenner added NBIS at 4.6× CRWV size

(A3 reasoning inference, my model)

| H | Hypothesis | P weight (my model) | Key reasoning |
|---|---|---|---|
| **H3** | **Capital structure — NBIS 2.1x D/E vs CRWV 10.7x D/E** | **35%** | **ONLY hypothesis that addresses internal coherence with his $8.7B chip-puts portfolio. CRWV at extreme leverage = S4 (digestion) scenario vulnerability that overlaps with his puts; NBIS at lower leverage de-risks the long book without exiting neocloud thesis.** |
| **H6** | **Subsidiary optionality** | **25%** | **NBIS holds ClickHouse 28% (~$4.2B implied of ~$15B valuation) + Avride 83% (~$2.2-2.3B post-money) + Toloka (Bezos lead investor, ~$400-500M) + TripleTen = ~$6.5-7B embedded options. Aschenbrenner's AGI-race framework values Physical AI (Avride) and analytics (ClickHouse) at higher conviction than market.** |
| **H5** | **Geographic / EU sovereign AI** | **20%** | **NBIS has Finland Lappeenranta 310MW + Mäntsälä 75MW + France Lille 240MW + Netherlands HQ. EU AI Act compliance creates demand source CRWV structurally cannot serve. Aschenbrenner's "Situational Awareness" thesis has explicit geopolitical AGI-race dimensions.** |
| H1 | Microsoft de-risking | 20% | Partially real (NBIS less MSFT-concentrated at current revenue scale) but both names are MSFT-exposed; not dominant |
| H2 | Software stack value-add | 15% | NBIS managed AI platform vs CRWV bare-metal; relevant but Aschenbrenner's disclosed framework is infra-focused not software-focused |
| H8 | Biographical / Yandex tech heritage | 10% | Carl Shulman co-filing (T1) implies AGI-race-aware co-decision; Yandex 25-year ML/infra DNA; but no T1/T2 verbatim statement from Aschenbrenner confirms |
| H4 | Valuation discount | 10% | FAILS on standard metrics — NBIS trades at higher EV/Revenue than CRWV. Only survives as SOTP argument (merged into H6) |
| H7 | Customer base quality | 5% | Both MSFT + Meta dominated; weakest differentiation |

**Most internally consistent single-sentence synthesis (my model)**: Aschenbrenner bought NBIS at scale because it is the only public neocloud that simultaneously (a) addresses his leverage concern about CRWV via 5x lower D/E ratio [H3], (b) gives him optionality on Physical AI via Avride and real-time analytics via ClickHouse for effectively free within the neocloud wrapper [H6], and (c) adds a geographically uncorrelated EU sovereign demand source CRWV structurally cannot offer [H5] — all while his core infrastructure arbitrage thesis (capacity-constrained GPU cloud wins as power binds) applies equally to both names.

**Joint-state observation**: H3 + H6 + H5 are NOT mutually exclusive — all three can be true simultaneously. The dominant driver is leverage asymmetry [H3] because it directly resolves the internal-consistency problem of his book (short chips + long highly-levered neocloud creates correlated S4 exposure).

---

## N-th order cascade — what NBIS becoming consensus does to held portfolio

(my model)

- **1st order (P>80%)**: NBIS 13G disclosure + Q1 2026 +684% YoY revenue + Q2 customer wins (Meta $27B + MSFT $19.4B) = NBIS becomes consensus neocloud Tier 1 with CRWV. Stock at ATH ~$244 already prices this.
- **2nd order (P~60%)**: Cascade to TSEM (silicon photonics foundry for hyperscaler CPO transition — NBIS expanding capacity = more optical interconnect demand) + GLW (NVDA-Corning optical partnership covers both CRWV + NBIS supply chains) + ALAB (CXL memory expansion for both neocloud GPU clusters) — held positions benefit indirectly
- **3rd order (P~40%)**: If NBIS subsidiary monetization fires (ClickHouse IPO 2027 target per T2 search results), neocloud category re-rates upward as SOTP framework becomes mainstream; CRWV (no subsidiaries) compresses relative to NBIS; cascade lifts other holding-co structures
- **4th order (P~20%)**: Aschenbrenner's "infrastructure arbitrage" thesis becomes consensus investment framework → short chips + long power/datacenter infra spreads to more institutional allocators → puts pressure on NVDA/AMD/AVGO multiples while lifting CRWV/NBIS/IREN/CORZ/APLD; this is the second-derivative trade

---

## Position implication for user

| Option | Action | Rationale (my model) |
|---|---|---|
| **Option A: ENTER NBIS at 2-3% on 15% pullback to ~$205-210** | Conditional entry | Per A2 — stock AT ATH; asymmetric entry requires discount that doesn't exist today; 15% pullback restores partial asymmetry for 2-3% sizing |
| **Option B: ENTER CRWV at 2-3% NOW** | Immediate entry | -34% from ATH offers more entry-price asymmetry but 10.7x D/E + -$4.71B Q1 FCF + Microsoft renewal risk = thesis depends on backlog conversion; Active tier not Core |
| **Option C: Pair-trade NBIS + CRWV at small (1.5% each)** | Mirror Aschenbrenner's portfolio construction | His H3 + H6 + H5 logic = NBIS as cleaner / CRWV as larger; both can win in capacity-constrained regime |
| **Option D: NEITHER — keep capital for held-name size-ups** (GLW + SNDK + ALAB + STM + TSEM per Computex Day 1 synthesis) | Conservative | Held names have cleaner cascade reasoning + no new-position learning curve |

**My lean (my model)**: **Option D + watchlist NBIS for 15%+ pullback** — Computex Day 1 already surfaced 5 cleaner size-up candidates (GLW + SNDK + ALAB + STM + TSEM) with triple-validated reasoning. Adding a 6th new position when 5 existing held positions warrant size-up creates rotation drag. NBIS thesis is strong but stock at ATH = no entry-price asymmetry. Wait for pullback or wait for Aschenbrenner Q2 13F (mid-August 2026) to see if he TRIMS CRWV alongside the NBIS add — that would confirm rotation hypothesis vs complementary addition.

**Counter-argument for entering NBIS now (Option A modified)**: User explicitly stated desire to "have one position that Leopold also has." Aschenbrenner's $2.6B NBIS position is a stronger conviction signal than his $556.1M CRWV (4.6× larger). Even at ATH, 13G-disclosed positions historically have cushioning from the disclosure-day re-rate. Small starter position (1.5%) with phased scale-up on any pullback is defensible.

---

## Honest gap acknowledgment

1. **Position entry price and timing unknown** for Aschenbrenner NBIS buy. 13G discloses ownership state, not transaction cadence. Stock ranged materially in Q2 — actual cost basis is uncertain.
2. **No verbatim Aschenbrenner statement on NBIS** found in any T1/T2 source. All reasoning is reverse-engineered from 13G filing + portfolio structure + his "Situational Awareness" essay framework.
3. **NBIS balance sheet changed materially in March 2026** ($4.3B convertibles + NVDA equity). If he bought before March, the balance sheet thesis [H3] was stronger; if after, the advantage over CRWV narrowed.
4. **Aschenbrenner Q2 13F (due ~mid-August 2026)** will be first official quarterly disclosure of book changes. If he TRIMMED CRWV alongside the NBIS add = rotation; if maintained both = complementary addition (current evidence favors complementary).
5. **CRWV exact current GPU fleet count** not disclosed quarterly; revenue trajectory implies meaningful growth beyond 250K early-2025 figure.

---

## Files affected

- `signals/cross-source-log/2026-06-02-nbis-crwv-aschenbrenner-comparative-deep-dive.md` — this file
- `companies/CRWV/thesis.md` — needs material refresh from A1 verified facts
- `companies/NBIS/thesis.md` — needs material refresh from A2 verified facts (existing file stale on market cap, revenue, capex, Aschenbrenner position)
- `signals/events/2026-05-21-aschenbrenner-q1-13f.md` — should reference this file for Q2 13G evolution

---

## Sources

- [Schedule 13G NBIS Situational Awareness (T1)](https://www.stocktitan.net/sec-filings/NBIS/schedule-13g-nebius-group-n-v-passive-investment-disclosure-5-9efcbda66f9c.html)
- [CRWV Q1 2026 SEC 8-K (T1)](https://www.sec.gov/Archives/edgar/data/0001769628/000176962826000220/coreweave1q26earningspress.htm)
- [NBIS Q1 2026 SEC 6-K (T1)](https://www.sec.gov/Archives/edgar/data/0001513845/000110465926059872/tm2614392d1_ex99-2.htm)
- [CNBC NBIS Aschenbrenner stake (T2)](https://www.cnbc.com/2026/05/28/nebius-situational-awareness-ai-stock-ex-openai-stake.html)
- [Benzinga NBIS stake (T2)](https://www.benzinga.com/trading-ideas/movers/26/05/52827719/nebius-stock-jumps-after-situational-awareness-hedge-fund-reveals-stake)
- [Motley Fool — Aschenbrenner Situational Awareness buys NBIS](https://www.fool.com/investing/2026/05/28/leopold-aschenbrenner-s-situational-awareness-fund-just-bought-this-nvidia-backed-neocloud-stock/)
- [Motley Fool — Beyond Hyperscalers Aschenbrenner NBIS](https://www.fool.com/investing/2026/06/01/hyperscalers-why-leopold-aschenbrenner-nebius/)
- [Investing.com NBIS ATH $244.05](https://www.investing.com/news/company-news/nebius-group-nv-stock-reaches-alltime-high-at-24405-usd-93CH-4719516)
- [Nebius Toloka Bezos investment (T1)](https://nebius.com/newsroom/nebius-welcomes-bezos-expeditions-as-lead-investor-in-ai-data-business-toloka)
- [TipRanks NBIS risk analysis / Volozh voting](https://www.tipranks.com/stocks/nbis/risk-factors)
- [Nasdaq NBIS Toloka/ClickHouse/Avride](https://www.nasdaq.com/articles/can-nebius-monetize-its-bets-clickhouse-avride-and-toloka)
- [24/7 Wall St CRWV bear case / FCF](https://247wallst.com/investing/2026/05/29/coreweave-lost-740-million-in-90-days-then-meta-handed-it-21-billion-welcome-to-the-ai-economy/)
- [Motley Fool CRWV vs NBIS comparison](https://www.fool.com/coverage/better-buy/2026/05/22/coreweave-vs-nebius-which-artificial-intelligence-ai-infrastructure-stock-is-a-better-buy-in-2026/)
- [Blockonomi CRWV vs NBIS 2026](https://blockonomi.com/coreweave-vs-nebius-comparing-two-ai-cloud-infrastructure-stocks-in-2026/)
