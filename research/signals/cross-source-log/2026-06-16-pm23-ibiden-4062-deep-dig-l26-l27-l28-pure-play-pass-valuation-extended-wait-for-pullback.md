# 2026-06-16 PM23 — IBIDEN 4062.T (イビデン株式会社) Workflow #8 BOM-level deep-dig with L26+L27+L28 ordering — 1 Opus subagent multilingual EN+native-JP+native-zh-TW → THESIS L26/L27/L28 PASS (first pure-play this week after 3-of-3 sidecar falsifications); valuation EXTENDED (spot ¥19,250 above analyst avg target ¥16,218; 8.1× 12mo move; fwd P/E 70.4); verdict WAIT FOR PULLBACK + 0.5% STARTER MAX

**Workflow:** PREDICT + DEEP-DIG (Workflow #8 BOM-level component thesis with cross-stack cascade)
**Source-tier:** primary-source T1 native-JP IR (Kabutan + SMBC Nikko Froggy + Ibiden IR + Investing.com guidance + Minkabu) + T1 native-zh-TW (Digitimes 電子時報) + T2 EN aggregators
**Triage verdict:** **FIRST PURE-PLAY PASS THIS WEEK** after PM19 Sakai (12% MLCC) + PM19b Shoei (PRIVATE) + PM20 SMM/Sumitomo Electric/Ishihara (3 sidecars) verification cycle; **BUT valuation extension dominant constraint** (spot above analyst avg target; 8.1× 12mo move; CoPoS payoff deferred to 2028-2029 mass prod); recommended action: WAIT for ¥15,000-15,500 pullback OR 0.5% starter anchor max

---

## §0 Trigger + scope

Per PM22 commit `a738844` (today 2026-06-16), IBIDEN was elevated from PM5/PM6 deep-dig-queue (TIER S+) to PM22 #2 watchlist candidate after TSMC + Ibiden + Innolux CoPoS Glass Substrate Development Project verified via Digitimes 2026-06-16 T1. Per Critical Rule #16 + Workflow #8 PREDICT discipline, fired 1 Opus subagent (afe93f467e342ea25, 36 tool uses / 284s) with native-JP IR primary mandate + L26+L27+L28 ordering verification (ELEVENTH operational Rule #16 application).

User context: portfolio €192,316.61 (per holdings.md PM17c); ~€73K cash; memory/MLCC/AI-packaging cluster ~77% of invested. Existing MURATA +73.57% unrealized = substantial AI-packaging beta capture already.

3-of-3 sidecar falsification pattern this week made the IBIDEN dig high-stakes — apply same L26+L27+L28 discipline rigorously.

---

## §1 L27 LISTED-STATUS + TICKER DISAMBIGUATION — PASS

- **4062.T = Ibiden Co Ltd (イビデン株式会社), TSE Prime, Electric Equipment sector, Nikkei 225 constituent** per [Kabutan T1](https://kabutan.jp/stock/?code=4062) + [Matsui Securities T1](https://finance.matsui.co.jp/stock/4062/index) + [TradingView TSE:4062 T1](https://www.tradingview.com/symbols/TSE-4062/)
- **Degiro accessibility:** confirmed (Degiro supports TSE Prime; Ibiden is Nikkei 225 large-cap) per [BrokerChooser T2](https://brokerchooser.com/invest-long-term/diversification/japanese-stocks-at-degiro)
- No ticker conflict. **L27 PASS.**

---

## §2 L26 PARENT-CO SEGMENT-REVENUE % — PASS (CRITICAL LOAD-BEARING FALSIFIER)

| Segment | FY26 (Mar-2026) | FY27 Guide (Mar-2027) | Trajectory |
|---|---|---|---|
| Electronics (FCBGA / ABF / SLP / future glass substrate CoPoS) | **~53% (¥220.7B; +23.4% YoY)** | **~66% (¥330B guide)** | RISING |
| Ceramics (DPF / automotive specialty) | ~22% (¥90.7B; +3.8% YoY but OP -37%) | declining mix | FADING |
| Other | ~25% | residual | flat |
| **Total revenue** | **¥416.2B (+12.7% YoY)** | **¥500B guide (+20%)** | strong |
| **Op profit** | ¥62.0B (+30.3%) | ¥90B guide (+45%) | strong |
| **FY28 OP target** | — | **¥150B (raised from prior ¥90B)** | hockey-stick |

Primary sources native-JP T1:
- [Ibiden IR EN T1](https://www.ibiden.com/ir/)
- [Ibiden IR Library JP T1](https://www.ibiden.co.jp/ir/library/securities/)
- [BigGo FY26 results T1](https://finance.biggo.jp/news/jpx_tdnet_140120260505517290)
- [Quartr Q4 2026 T1](https://quartr.com/events/ibiden-co-ltd-4062-q4-2026_F9Xvd7IW)
- [SMBC Nikko Froggy T1](https://froggy.smbcnikko.co.jp/70149/)
- [Investing.com FY27 guidance T1](https://www.investing.com/news/stock-market-news/ibiden-shares-surge-on-strong-annual-earnings-guidance-4678950)
- [Ibiden Ceramic segment FY26 JP T1](https://www.ibiden.co.jp/ir/stock/info/169soukai/content-2-3.html)

**L26 FALSIFIER VERDICT:** Electronics ~53% FY26 → ~66% FY27 guide. AI-server-attributable share is dominant slice of Electronics (FCBGA for NVDA/AMD AI accelerators). **AI-packaging mix is >50% → IBIDEN qualifies as PURE-PLAY per L26 codification.** Contrast with PM19 Sakai 12% MLCC sidecar + PM19b Shoei PRIVATE non-investable + PM20 SMM 3% / Sumitomo Electric 1-2% / Ishihara 2% sidecar trio — IBIDEN does NOT fall into the sidecar trap. **L26 PASS.**

**L28 industry-share vs parent-co revenue verification:** Ibiden's 70-80% global FCBGA AI-server share per [Globe and Mail T2](https://www.theglobeandmail.com/investing/markets/stocks/IBIDF/pressreleases/10864/ibiden-to-invest-500-billion-in-expanding-ic-package-substrate-capacity-for-ai-and-high-performance-servers/) + [Digitimes T1](https://www.digitimes.com/news/a20260204PD227/ibiden-expansion-capacity-production-plant.html) + [Wonderful PCB T2](https://www.wonderfulpcb.com/blog/top-abf-substrate-manufacturers-and-market-leaders/) aligns with parent-co Electronics segment mix at >50% revenue level — no industry-share-vs-equity-revenue gap (unlike PM20 SMM "18% global Ni-powder share" vs <3% parent-co MLCC mix gap). **L28 PASS.**

---

## §3 BOM-LEVEL ANALYSIS (Workflow #8)

| Item | Blackwell (GB200/GB300) | Vera Rubin (VR200) | Δ |
|---|---|---|---|
| ABF substrate unit cost | ~$100 | **~$200** | +100% |
| ABF rack content value | $11,200 | **$20,300** | +82% |
| Substrate size | Within JEDEC 120mm | **Beyond JEDEC — split package, 2 interposers per substrate** | larger |
| NVLink/ConnectX substrate count | 1× | **2×** | doubled |

Sources: [Morgan Stanley Vera Rubin BOM via LeoinAI T2](https://leoinai.substack.com/p/nvidia-vera-rubin-bill-of-materials-morgan-stanley) + [Bitget Rubin BOM T2](https://www.bitget.com/news/detail/12560605422208) + [Futunn T2](https://news.futunn.com/en/post/73505759/memory-pcb-abf-a-comprehensive-guide-nvidia-didn-t-rally).

**Ibiden share of FCBGA AI-server substrate: 70-80%** verified at industry-share level + parent-co revenue level (L28 consistency).

---

## §4 CoPoS CAUSAL MECHANISM — Validation data VERIFIED per PM22 T2 claims

TSMC + Ibiden + Innolux 3-party validation results per [TradingKey T2](https://www.tradingkey.com/analysis/stocks/us-stocks/261969147-tsm-ibiden-abf-copos-tradingkey) + [Digitimes 2026-06-16 T1](https://www.digitimes.com/news/a20260616PD217/tsmc-innolux-ibiden-packaging-cowos.html):

| Property | Improvement | Verification |
|---|---|---|
| Warpage | **-16%** | ✓ T2 verified |
| CTE | **-19%** | ✓ T2 verified |
| Elastic modulus | **+31%** | ✓ T2 verified |
| Resistance | **-27%** | ✓ T2 verified |
| Inductance | **-42%** | ✓ T2 verified |

Sample spec: 0.8mm glass core, 5× reticle CoW, 85×110mm — large-scale AI GPU class.

**Roadmap:** 310×310mm panel 2025 → VisEra mini-line 2026 → trial 2027 → **mass production 2028-2029** (C.C. Wei "no shortcuts") per [BigGo T2](https://finance.biggo.com/news/kLg0kp4BrX5PFN7BKrXD).

**Critical implication:** CoPoS payoff is 2028-2029 = **2-3 year deferred TAM** = capex-drag window before revenue recognition.

---

## §5 SUPPLY RESPONSE

- **¥500B capex commitment FY26-FY28**: Gama ¥220B + Ono (Gifu) ¥280B per [Ibiden announcement T1](https://www.ibiden.com/company/2026/02/notice-regarding-capital-investment-plan-for-high-performance-ic-package-substrates.html) + [I-Connect007 T2](https://iconnect007.com/article/148977/ibiden-approves-500-billion-electronics-investment-expands-ic-substrate-capacity-at-ono-plant/148974/milaero)
- **2.5× capacity by FY28** vs FY24 baseline
- **Phoenix AZ fab**: $1.2B; 30,000 panels/month by late-2027; $320M CHIPS Act grant = geographic diversification
- Capex history escalating: FY24 ¥190.7B → FY25 ~¥220B → FY26 ~¥270B = sharp escalation

---

## §6 CROSS-STACK CASCADE TABLE (Workflow #8 mandatory)

| Implication | Affected tickers | Direction | Order | Magnitude |
|---|---|---|---|---|
| ABF FCBGA Vera Rubin BOM doubles ($100→$200) | IBIDEN + Unimicron + Shinko | beneficiary | 1st | HIGH |
| CoPoS glass ramp 2028-2029 | IBIDEN + Innolux + AGC + Corning | beneficiary | 2nd | HIGH (deferred) |
| Korean ABF (SEMCO) excluded from frontier | SEMCO (KRX-locked) | casualty | 2nd | MED |
| 2.5× capacity expansion → margin operating leverage | IBIDEN OP ¥62B→¥150B by FY28 | beneficiary | 1st | HIGH |
| Ceramics/DPF cyclical drag (EV displacement) | IBIDEN segment internal mix | casualty | 1st | LOW (mix dilution offsets growth) |
| User-held **MURATA** +73.57% (MLCC) | unchanged — orthogonal stack layer (MLCC ≠ substrate) | n/a | n/a | n/a |
| User-held memory cluster (HYNIX / SNDK / KIOXIA / SUMCO) | uncorrelated — substrate ≠ memory cell-physics | n/a | n/a | n/a |

**Cluster overlap note:** Adding IBIDEN to MURATA-anchored AI-packaging-component exposure adds SECOND vertical (substrate alongside MLCC), not same factor — modest diversification benefit. But MURATA already +73.57% means "AI-packaging-component" thesis is fairly priced into user's existing book; IBIDEN adds substrate-specific exposure that's complementary not redundant.

---

## §7 VALUATION SNAPSHOT — EXTENDED (the binding constraint)

| Metric | IBIDEN 4062.T | Notes |
|---|---|---|
| Spot 2026-06-16 | **¥19,250 (+7.69% on CoPoS news)** | T1 Kabutan |
| Market cap | ~¥5.1T (~$32B) | T2 |
| Trailing P/E | **88.9** | T2 GuruFocus |
| Forward P/E FY27 | **70.4** | T2 |
| P/B | **9.7** | T2 |
| EV/EBITDA | **33.0** | T2 |
| Dividend yield | 0.16% | T2 |
| ROE | 12.2% | T2 |
| **52-week range** | **¥2,853 → ¥23,145 = 8.1× in 12 months** | T1 extreme reflexivity |
| **Analyst avg target** | **¥16,218 — BELOW spot ¥19,250** | T1 Minkabu |
| ATH | ¥23,145 (June 1, 2026) | T1 |
| FY27 sales guide | ¥500B (+20%) | T1 |
| FY28 OP target | **¥150B (raised from ¥90B)** | T1 |

**Q1 FY27 earnings:** ~Aug 2026 (Japanese fiscal Q1 cadence; FYE March).

**B45 regime-binding caution:** stocks that 8.1× in 12 months and trade ABOVE all analyst consensus PT typically have 15-30% drawdowns before resuming. NOT exhaustion-signal per B45 codification (multiple AI-infra names returned >200% in 12mo); BUT this specific configuration (trailing P/E 88.9 + spot above analyst avg target + ATH-pullback dynamic at ¥23,145 → ¥17,400 → ¥19,250) warrants entry discipline.

---

## §8 TECHNICAL SETUP + ENTRY-TRIGGER LEVEL

- ATH ¥23,145 (June 1, 2026); pulled back ~25% to ¥17,400 on June 10
- Today ¥19,250 +7.69% on CoPoS Digitimes news
- 52-week base move: 2,853 → 23,145 = **8.1× in 12 months** (extreme reflexivity)

**Entry-trigger zones:**
- **Aggressive:** spot ¥19,250 (chasing post-CoPoS gap; not recommended)
- **Disciplined:** pullback to **¥15,000-15,500** (re-test of recent consolidation base)
- **Deep-value:** ¥12,000-13,000 (full mean-revert toward analyst target)

---

## §9 ENTRY VERDICT + ACTIONABLE FRAMEWORK

### **Verdict: 🟡 WAIT FOR PULLBACK or 0.5% STARTER MAX (Sub#1's recommendation)**

**Reasoning:**
1. **Thesis L26/L27/L28 PASS** — pure-play AI-packaging, dominant share, real CoPoS optionality
2. **Price is the problem, NOT the thesis** — fwd P/E 70.4, P/B 9.7, EV/EBITDA 33, 8.1× in 12mo, ABOVE analyst avg target
3. **CoPoS payoff deferred 2028-2029** — 2-3 year capex-drag window before mass production revenue
4. **Cluster discipline binding:** existing book already 77% memory/MLCC AI-packaging-adjacent per holdings.md PM17c; MURATA +73.57% means user has captured substantial "AI-packaging-component" beta already
5. **Better R/R:** starter 0.5% (€960) now to anchor, scale to 1.5-2% (€2,900-3,840) on pullback to ¥15,000 OR after Aug 2026 Q1 earnings beat-and-raise

### **Sizing tranches per €73K cash (Sub#1's recommendation):**

| Tranche | Size | Trigger |
|---|---|---|
| Starter (anchor; OPTIONAL) | 0.5% = **€960** | TODAY at spot ¥19,250 |
| Tranche 1 | +1% = **€1,920** | Pullback to **¥15,500** (re-test of recent consolidation base) |
| Tranche 2 | +0.5% = **€960** | Aug 2026 Q1 FY27 earnings beat-and-raise |
| **Max position** | **2% = €3,840** | DO NOT exceed given valuation extension + MURATA +73.57% overlap |

**Cluster concentration impact:** Adding IBIDEN at 2% lifts AI-packaging cluster from ~77% to ~79% — WITHIN concentration discipline IF memory/MLCC independently trimmed; otherwise raises concentration risk (my model derived from holdings.md PM17c cluster math).

### **Top 3 invalidation risks:**
1. **CoPoS pushed beyond 2029** (C.C. Wei "no shortcuts") — defers TAM
2. **Korean SEMCO breaks into Western frontier AI FCBGA** — share erosion at 70-80% AI FCBGA dominance
3. **Vera Rubin demand miss / NVDA platform delay** — direct revenue hit on BOM doubling thesis

### **Top 3 catalysts to monitor:**
1. **Aug 2026 Q1 FY27 earnings** (guide upgrade likely given FY27 guidance ¥500B + FY28 OP target raised to ¥150B)
2. **CoPoS Innolux pilot line at VisEra (H2-2026)** — first-silicon milestone
3. **Phoenix AZ fab milestone (late-2027)** — 30,000 panels/month capacity online

---

## §10 H1/H2/H3 reweighted post-deep-dig

| Hypothesis | Pre-dig P (my model) | Post-dig P (my model) | Move rationale |
|---|---|---|---|
| H1 PURE-PLAY ENTER candidate | ~35% | **~25%** | ↓10pp — thesis PASSES L26 but valuation-extension means simple "ENTER" verdict too permissive |
| H2 MIXED EXPOSURE speculative size | ~40% | **~10%** | ↓30pp — falsified: NOT mixed, IS pure-play; pivots to "valuation-extended pure-play" subset |
| H3 SIDECAR FALSIFY thesis | ~25% | **0%** | ↓25pp — L26 falsifier did NOT fire; thesis intact |
| **H-NEW: VALUATION-EXTENDED PURE-PLAY (wait for pullback)** | n/a | **~65%** | NEW DOMINANT — Sub#1's actual verdict; thesis real but price is the constraint |

---

## §11 Loop-validation note (TWENTY-FIFTH real-data application of Principle #37; ELEVENTH Rule #16 operational application)

Clean PREDICT-workflow application:
- 1 subagent fired per Rule #16 without permission-asking (ELEVENTH operational)
- Sub#1 returned strong T1 native-JP IR primary-source verification (Kabutan + SMBC Nikko Froggy + Ibiden IR + Investing.com + Minkabu + Quartr) + T1 native-zh-TW (Digitimes 電子時報) + T2 EN aggregators
- L26+L27+L28 ordering executed cleanly: (1) listed-status verified TSE Prime; (2) ticker disambiguated no conflict; (3) parent-co segment-revenue % VERIFIED at 53%→66% Electronics dominance
- **FIRST PURE-PLAY PASS THIS WEEK** after PM19 + PM19b + PM20 3-of-3 sidecar/private/falsification pattern — discipline working as designed
- BOM-level Workflow #8 verification: ABF unit cost $100→$200 + rack value $11,200→$20,300 + 2-interposer split package = +82% rack content value Vera Rubin
- CoPoS validation data 100% verified against PM22 T2 claims (warpage / CTE / modulus / resistance / inductance)
- Valuation extension flagged as binding constraint (NOT thesis); sizing tranches with explicit pullback triggers
- Cluster concentration discipline preserved (max 2% / cluster ceiling 77%→79%)
- Held cohort cascade: MURATA orthogonal stack layer (MLCC ≠ substrate); memory cluster uncorrelated; SUMCO unchanged
- Portfolio unchanged (limit-order conditional; no active buy)

**B46 candidate** (micro details contradicting macro framing): N/A this dig — Sub#1's micro verification CONFIRMED macro PM22 framing (CoPoS partnership real + ABF doubling real). NOT a B46 instance.

**Critical Rule #16 eleventh operational validation: POSITIVE (N=11 cumulative).**

**Cascade-fatigue check:** 26 cascades in tier-cascade-log + PM23 = 27 + Kioxia pre-prep + INDEX refresh = **29 events in ~42 hours**. P#37 N=20 promotion gate EXCEEDED.

---

## Sources (full reference stack)

**Native-JP T1:**
- [Kabutan 4062](https://kabutan.jp/stock/?code=4062)
- [Matsui Securities 4062](https://finance.matsui.co.jp/stock/4062/index)
- [Ibiden IR Library JP](https://www.ibiden.co.jp/ir/library/securities/)
- [Ibiden IR EN](https://www.ibiden.com/ir/)
- [Ibiden 500B yen capex announcement Feb 2026](https://www.ibiden.com/company/2026/02/notice-regarding-capital-investment-plan-for-high-performance-ic-package-substrates.html)
- [Ibiden Ceramic segment FY26 JP](https://www.ibiden.co.jp/ir/stock/info/169soukai/content-2-3.html)
- [BigGo FY26 results JP](https://finance.biggo.jp/news/jpx_tdnet_140120260505517290)
- [SMBC Nikko Froggy Ibiden analysis](https://froggy.smbcnikko.co.jp/70149/)
- [Minkabu 4062 analyst targets](https://minkabu.jp/stock/4062/analyst_consensus)

**T1 EN / native-zh-TW:**
- [TradingView TSE:4062](https://www.tradingview.com/symbols/TSE-4062/)
- [Yahoo Finance 4062.T](https://finance.yahoo.com/quote/4062.T/)
- [Digitimes EN TSMC Innolux Ibiden CoPoS 2026-06-16](https://www.digitimes.com/news/a20260616PD217/tsmc-innolux-ibiden-packaging-cowos.html)
- [Digitimes US$3.3bn capex](https://www.digitimes.com/news/a20260204PD227/ibiden-expansion-capacity-production-plant.html)
- [Quartr Q4 2026](https://quartr.com/events/ibiden-co-ltd-4062-q4-2026_F9Xvd7IW)
- [Investing.com FY27 guide](https://www.investing.com/news/stock-market-news/ibiden-shares-surge-on-strong-annual-earnings-guidance-4678950)
- [Globe and Mail 500B capex](https://www.theglobeandmail.com/investing/markets/stocks/IBIDF/pressreleases/10864/ibiden-to-invest-500-billion-in-expanding-ic-package-substrate-capacity-for-ai-and-high-performance-servers/)

**T2:**
- [TradingKey CoPoS validation data](https://www.tradingkey.com/analysis/stocks/us-stocks/261969147-tsm-ibiden-abf-copos-tradingkey)
- [BigGo TSMC CoPoS timeline Wei](https://finance.biggo.com/news/kLg0kp4BrX5PFN7BKrXD)
- [Morgan Stanley Vera Rubin BOM via LeoinAI](https://leoinai.substack.com/p/nvidia-vera-rubin-bill-of-materials-morgan-stanley)
- [Bitget Rubin BOM analysis](https://www.bitget.com/news/detail/12560605422208)
- [Futunn Memory PCB ABF guide](https://news.futunn.com/en/post/73505759/memory-pcb-abf-a-comprehensive-guide-nvidia-didn-t-rally)
- [I-Connect007 Ono Plant](https://iconnect007.com/article/148977/ibiden-approves-500-billion-electronics-investment-expands-ic-substrate-capacity-at-ono-plant/148974/milaero)
- [Wonderful PCB ABF market share](https://www.wonderfulpcb.com/blog/top-abf-substrate-manufacturers-and-market-leaders/)
- [GuruFocus 4062 valuation](https://www.gurufocus.com/stock/TSE%3A4062/summary)
- [CompaniesMarketCap Ibiden](https://companiesmarketcap.com/ibiden/marketcap/)
- [BrokerChooser Degiro Japan](https://brokerchooser.com/invest-long-term/diversification/japanese-stocks-at-degiro)
