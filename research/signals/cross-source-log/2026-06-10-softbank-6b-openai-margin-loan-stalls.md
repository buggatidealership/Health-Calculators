# 2026-06-10 SoftBank $6B OpenAI margin loan stalls — verified 3rd installment of tracked arc

**Source:** Bloomberg user-shared screenshot 2026-06-10 11:25:25 BN.
**Verification status:** AUTHENTIC and FRESH (~95%, T1 multi-corroborated).
**Workflow:** INGEST + bypass-route mapping.

## Verification (T1/T2 multi-source)

- **Bloomberg JP native-jp twin same day:** [ソフトバンクG、OpenAI株担保の60億ドル融資計画の協議停滞](https://www.bloomberg.com/jp/news/articles/2026-06-10/TG3RLCT9NJLS00) — T1 native-jp
- **Yahoo JP syndication:** [news.yahoo.co.jp/articles/8e7fee55c3f0c3fe2ef66a310fd17e89cf0a7ef3](https://news.yahoo.co.jp/articles/8e7fee55c3f0c3fe2ef66a310fd17e89cf0a7ef3) — T2
- **Reuters pickup** "Bloomberg reports" — [TradingView/Reuters](https://www.tradingview.com/news/reuters.com,2026:newsml_L6N42I048:0-softbank-s-attempt-to-get-6-billion-openai-margin-loan-stalls-bloomberg-news-reports/) — T2
- **Yahoo Finance:** [Yahoo Finance article](https://finance.yahoo.com/markets/stocks/articles/softbanks-attempt-6-billion-openai-015639259.html) — T2

**3rd installment of a tracked Bloomberg arc:**
1. **Apr 23, 2026** — $10B initial target ([Bloomberg JP](https://www.bloomberg.com/jp/news/articles/2026-04-23/TDWDGLT9NJM100), [Nikkei](https://www.nikkei.com/article/DGXZQOUC2322I0T20C26A4000000/))
2. **May 8, 2026** — Cut 40% to ~$6B ([Bloomberg JP](https://www.bloomberg.com/jp/news/articles/2026-05-08/TENDP9T9NJLS00))
3. **Jun 10, 2026** — $6B stalled. New detail: ~$5B had been lined up pre-stall; margin loan may still proceed later.

## Why the stall (T2, hedged):
- **~60%:** lender difficulty valuing unlisted OpenAI collateral (explicitly cited in May 8 JP piece)
- **~30%:** SoftBank-specific leverage stress (CDS ~360bps near 1-yr high — T2 [Benzinga](https://www.benzinga.com/Opinion/26/06/53013188/softbank-is-using-openai-shares-to-fund-stargate-heres-why-lenders-are-concerned))
- **~10%:** Other (broader credit-market, regulatory, legal structure)

**Native-jp load-bearing nuance:** Anthropic's technical wins are now a *named* collateral-risk factor — lenders citing the contested moat as a reason to discount OpenAI's mark. Directly links to `2026-06-07-spacex-revised-s1-anthropic-45b-verification.md`: the Anthropic compute commitment is now load-bearing not just for Anthropic's compute story but for OpenAI's *valuation* story (competitor strength = collateral discount).

## SoftBank OpenAI exposure context (T1/T2/T3)
- Cumulative OpenAI commitment ~$64.6B (~13% stake) — T3
- $45B unrealized gain — T3
- Separate unsecured [$40B bridge loan](https://www.bloomberg.com/news/articles/2026-03-27/softbank-secures-record-40-billion-bridge-loan-for-openai-stake) — 8 banks, repayment due ~March 2027 — funded the $30B follow-on
- The "$40B pledge" headline was the round size; SoftBank's portion was $30B

## Parallel hypotheses (Bayesian-updated post-subagent)

- **H1 (P~60%, T2 confirmed):** Lender valuation problem with unlisted OpenAI collateral — confirmed primary driver
- **H2 (P~30%, T2 CDS data):** SoftBank-specific leverage stress
- **H3 (P~10%):** Other (credit-market tightening, regulatory, legal structure)

## N-th order cascade

- **1st order (P>80%):** Constrains Stargate equity funding pace + March-2027 bridge takeout. Pressure increases on SoftBank to find alternative financing within ~9 months.
- **2nd order (P~60%):** Raises odds SoftBank presses for **OpenAI IPO** (Q4-2026 chatter, T3) OR **asset sales** (ARM/T-Mobile-style collateral pivot — prior SoftBank playbook). Subagent: probability of material AI-capex impact <25%.
- **3rd order (P~40%):** "AI private valuations too illiquid to lend against" becomes a credit narrative → secondary-market OpenAI/Anthropic/xAI marks gap wider → next private round harder to price → AI-capex deceleration becomes Q3/Q4 2026 sell-side narrative. **Bypass routes (see below) keep our held memory cohort insulated unless ALL hyperscaler capex cools simultaneously.**
- **4th order (P~20%):** **ARM overhang risk re-emerges** as a real watch item — SoftBank's prior playbook when squeezed has been to monetize ARM. ARM is held at 3.17% Degiro (post-71% trim). **Our bypass on this risk: the position is already trimmed; most asymmetric upside is harvested; overhang risk is sized down by virtue of the post-trim weight. NO ACTION required.**

## Bypass-route mapping (Critical Rule #9): why held memory cohort is insulated

If OpenAI cadence slows, the customer-side substitution is multi-layered and TTQ ≈ 0 (all already qualified):

| Customer bypass route | Non-consensus beneficiary keeping HBM/NAND/wafer demand intact |
|---|---|
| Anthropic via AWS Trainium / Project Rainier | AMZN capex (T1-disclosed) — HYNIX/SNDK demand same |
| Google internal TPU workload (3M Intel + 3M TSMC = 6M units 2027-28, MS estimate) | Direct GOOG HBM pull — HYNIX thesis already anchored on this |
| Meta $145B 2026 capex / Llama / agent serving | META direct NVDA + MTIA orders |
| Apple Intelligence inference (Apple-Blackwell verified 2026-06-04) | AAPL → NVDA → HBM pull, OpenAI-independent |
| xAI Colossus 2 / Memphis | xAI Saudi PIF / sovereign funding, SoftBank-independent |
| Sovereign AI (G42, FR/UK, Korean) | Geographic substitution — Stargate compete → regional buildouts |

**Where the bypass DOES NOT exist (the genuine risk to watch):** systemic AI private-funding freeze where all hyperscaler capex cools simultaneously — the H3 tail (P~10%). That's the failure mode worth monitoring at the credit-market signal level, not the OpenAI-specific level.

## Cross-references
- `signals/cross-source-log/2026-06-07-spacex-revised-s1-anthropic-45b-verification.md` — Anthropic compute commitment now also load-bearing as OpenAI-collateral-risk factor (cross-link)
- `companies/ARM/thesis.md` — overhang risk note added (4th-order, NO ACTION)
- `companies/HYNIX/thesis.md` + `companies/SNDK/thesis.md` — no thesis cascade; bypass-route insulation holds

## Cascade executed (same commit)
- This file (new)
- `companies/ARM/thesis.md` — SoftBank overhang watch addition

## What to watch
- Independent SoftBank IR commentary on financing alternatives (expect at next quarterly cycle)
- ARM SoftBank-overhang signals (sell-down disclosures, lock-up expiries)
- Any OpenAI valuation mark revision in private secondaries
- AI-capex print cadence at hyperscalers (the systemic-cooling falsifier signal)
