# 2026-06-17 AM2 — TDK 6762.T (TDKコーポレーション) deep-dig L26+L27+L28 (PM26 deferred) → L28 FAIL; SIDECAR DEMOTE; MLCC ~10% of total revenue (ATL battery 40.9% dominates)

**Trigger:** PM26 (2026-06-16 `0e74e78`) deferred TDK 6762.T pre-WL-ADD verification due to API rate-limit on first attempt (a2cda09af292c867e). Per Critical Rule #16, retried with new Opus subagent (a46836dd556919e41, SEVENTEENTH operational) parallel with MRVL + Innolux.

**Workflow:** Workflow #8 DEEP-DIG + L26+L27+L28 ordering triplet + Critical Rule #9 bypass-route + B45 regime-corrected priors

## L27 — Listed-status verification ✅ PASS

- **TSE Prime 6762.T** — actively traded, no halt/delisting
- ADR: **TTDKY** sponsored ADR, OTC Pink, USD 24.66 (T1 [OTC Markets 2026-06-04](https://www.otcmarkets.com/stock/TTDKY))
- IR: https://www.tdk.com/en/ir/index.html
- Market cap: ~¥7.1T JPY (T1 [Investing.com 2026-06-10](https://www.investing.com/equities/tdk-corp.))
- Degiro accessibility: likely YES (Japan TSE Prime large-cap)

## L26 — Segment revenue % at parent-co (FY2026 full year ended March 2026) ❌ FAIL pure-play

Total FY26 net sales: **¥2,504.8B** (+13.6% YoY) (T1 [BigGo Finance 2026-04-28](https://finance.biggo.com/news/JP_6762.T_2026-04-28); confirmed [Investing.com](https://www.investing.com/news/company-news/tdk-fy-2026-slides-record-profits-ai-pivot-amid-muted-stock-reaction-93CH-4640689))

| Segment | Revenue ¥B | % of total |
|---|---|---|
| **Energy Application (ATL batteries)** | **¥1,025.2B** | **~40.9%** |
| **Passive Components** | **¥593.2B** | **~23.7%** |
| Sensor Application Products | ¥224.6B | ~9.0% |
| Magnetic Application Products (HDD heads) | ¥186.8B | ~7.5% |
| Other / Eliminations | ~¥474.8B | ~19.0% |

**CRITICAL L26 NOTE:** TDK does **NOT separately disclose MLCC revenue** within Passive Components. The segment includes ceramic capacitors (MLCCs), aluminum electrolytic, film, inductors, high-frequency, piezoelectric, circuit protection (T1 [TDK IR](https://www.tdk.com/en/ir/ir_events/conference/2025/4q_qa.html)). The "industry share" figure (TDK ~8-15% MLCC industry share) is **NOT segment revenue** — this is the L26 failure mode the methodology was built to catch.

**MLCC-specific revenue estimate (my model, NOT disclosed):** If MLCC is ~40-50% of Passive Components bucket → MLCC ≈ ¥237-297B out of ¥2,504.8B total = **~9-12% of total TDK revenue**.

## L28 — Pure-play test ❌ FAIL

- Passive Components entire segment **= 23.7%** of FY26 revenue (below 30% L28 threshold)
- MLCC alone **≈ 9-12% of total** (estimated)
- **L28 VERDICT: FAIL** — SIDECAR at best, likely closer to REFERENCE-ONLY for MLCC thesis
- **vs Taiyo Yuden 71% pure-play benchmark (PM20):** TDK materially inferior, ~10% MLCC exposure vs 71%. Not comparable as MLCC equity vehicle.
- **Sizing ratio:** TDK ≈ 0.14× Taiyo Yuden on same thesis (10%/71% revenue-exposure ratio)

**Energy Application (ATL batteries) at 40.9% = TDK is structurally a BATTERY name**, secondarily MLCC-adjacent.

## Critical Rule #9 — Bypass-route framing

**AI-server MLCC exposure: INFERRED, confirmed by mgmt but NOT revenue-material yet**
- CEO Noboru Saito target: "increase passive component sales for AI data centers by ~10×" by FY2031 (T1 [Investing.com Q4 FY26 transcript 2026-04-28](https://www.investing.com/news/transcripts/earnings-call-transcript-tdk-q4-2026-sees-record-profits-amid-mixed-market-reaction-93CH-4640615))
- AI/data center target: 15% of total sales by FY27 (T1 [mreport.co.th aggregate](https://www.mreport.co.th/en/news/industry-movement/110-japan-electronic-components-ai-outlook-2026))
- AI-related rev FY25: ~10% of total (T1 [TDK AI Ecosystem](https://www.tdk.com/en/featured_stories/entry_082-AI-Ecosystem.html)) — includes all AI products, NOT just MLCC
- NVIDIA GB300: ~30,000 MLCCs/unit; TDK supplies into stack (T1 [note.com/junwatanabe72](https://note.com/junwatanabe72/n/n8849f1d8b921))
- Goldman Sachs Buy ratings on Murata, Taiyo Yuden, AND TDK for MLCC cycle (T1 [BigGo Finance](https://finance.biggo.com/news/H4utfZ4BrAZSr0oSILec))

**HDD-MLCC nearline shortage thesis relevance: PARTIAL.** TDK's Magnetic Application Products (HDD heads/suspensions, ¥186.8B / 7.5%) benefits separately from nearline HDD demand. The two themes (HDD heads + MLCC) are present in TDK but across different segments — **TDK is a proxy for BOTH themes DILUTED**, not a pure expression of either.

**Bypass-route assessment:** TDK is primarily ATL battery (40.9%) that incidentally produces MLCCs and HDD heads. The TC-6 bypass-route framing is structurally weaker than Murata or Taiyo Yuden because the MLCC thesis is revenue-diluted by conglomerate structure. The "10× AI data center passive components" ambition is a **FY2031 TARGET**, not a current revenue reality.

## B45 regime-corrected priors check

| Metric | TDK 6762.T | Murata 6981 | Taiyo Yuden 6976 |
|---|---|---|---|
| Spot (~2026-06-10) | ¥3,741 | ¥10,505 | ¥14,975 |
| 52w low | ¥1,486.5 (2026-06-13) | ¥2,018.5 | ¥2,257 |
| 52w high | ¥4,315 | ¥11,125 | ¥17,350 |
| 1y from trough | **~+152%** | **~+420%** | **~+563%** |
| Single-day rally beta (recent MLCC move) | +8.22% | +12.36% | +11.87% |

**Verdict:** TDK has re-rated +152% but is **LAGGING vs Murata (+270-320%) and Taiyo Yuden (+400-560%)** in the same MLCC rally. Consistent with TDK being a conglomerate — the MLCC re-rating is muted by battery/HDD-heads weight. **The gap may reflect the market correctly pricing MLCC exposure at ~10% of total.** Stock already up 2.5× from trough; "unpriced" window has partially closed.

(T1 [Investing.com TDK](https://www.investing.com/equities/tdk-corp.), [Investing.com Murata](https://www.investing.com/equities/murata-mfg-co), [Investing.com Taiyo Yuden](https://www.investing.com/equities/taiyo-yuden-co.,-ltd.), [Motley Fool 2026-06-06](https://www.fool.com/investing/2026/06/06/two-of-the-hottest-japanese-stocks-should-you/))

## Native-JP signals

- 14 analyst Buy vs 1 Sell consensus on TDK (T1 [Investing.com](https://www.investing.com/equities/tdk-corp.))
- Goldman Sachs Buy explicitly for MLCC cycle (T1 [BigGo Finance](https://finance.biggo.com/news/H4utfZ4BrAZSr0oSILec))
- **note.com analyst community direct quote:** "it is not appropriate to view TDK as a simple MLCC stock in the same sense as Murata Manufacturing or Taiyo Yuden" — energy application products at ¥1.37T dwarf passive components (T1 [note.com/suu2](https://note.com/suu2/n/nf09f6402296f); [note.com/kabuya66](https://note.com/kabuya66/n/n0648e99906ad))
- Taiyo Yuden "26-year high" is the JP retail MLCC protagonist; TDK not featured

## Verdict

**L28 VERDICT: FAIL → SIDECAR — DEMOTE from WL-ADD candidate (PM26 framing) to P3 SIDECAR / reference-only**

| Criterion | Finding | Implication |
|---|---|---|
| Listed (L27) | ✅ TSE 6762.T + TTDKY ADR | Investability confirmed |
| Passive Components segment | 23.7% (<30% L28 threshold) | FAIL pure-play |
| MLCC subset estimate | ~9-12% of total | SIDECAR best case |
| vs Taiyo Yuden benchmark | 0.14× exposure ratio | Material inferior |
| Largest segment | ATL battery 40.9% | TDK = battery name first |
| 1y price beta vs pure-plays | +152% vs +270-563% | LAGGING in MLCC rally (correctly priced for ~10% exposure) |
| Already re-rated | YES, +152% from trough | Not stranded-value situation |

**Tier candidate: P3 SIDECAR**

**Sizing (if entered as sidecar diversification, NOT thesis-primary):**
- Starter: ≤€500 (~0.14× Taiyo Yuden sizing per exposure ratio)
- Max: €1,500-2,000 (sidecar diversification only)
- **Do NOT size TDK as equivalent to Taiyo Yuden 6976 in MLCC thesis** — that would overweight a ~10% exposure name vs a 71% exposure name

**Falsifier:** TDK passive component segment crosses 35%+ of group revenue in 2 consecutive quarters via AI data center MLCC growth AND mgmt discloses MLCC-specific AI revenue >¥150B annually (would imply ~6% of current total) → revisit tier upgrade. Alternative: TDK divests/spins ATL battery (not signaled).

## Critical Rule #11 — Position implication

**Position implication: 🔴 MONITOR — no new position — €0 — TDK fails L28 pure-play test (~10% MLCC vs Taiyo Yuden 71%); ATL battery 40.9% dominates revenue; price has lagged pure-plays in MLCC rally (correctly so); Taiyo Yuden 6976 and Murata 6981 remain the primary MLCC vehicles; revisit TDK only if passive component segment shifts materially in FY27 disclosures OR battery divest signaled.**

## Critical Rule #16 seventeenth operational validation: POSITIVE (N=17 cumulative). Rate-limit retry recovery successful (a2cda09 → a46836dd).

## Meta-pattern this week (4-of-5 sidecar/pre-revenue catches via L26+L27+L28 discipline)

| Week's verifications | Verdict | Pure-play % | Status |
|---|---|---|---|
| PM19 Sakai 4078.T | FAIL L26 (12% MLCC) | 12% | Downsize/skip |
| PM19b Shoei Chemical | FAIL L27 (PRIVATE) | N/A | REMOVED |
| PM20 SMM 5713.T | FAIL L26 (sidecar) | ~5-8% MLCC | Skip-as-MLCC |
| PM20 **Taiyo Yuden 6976** | **✅ PASS pure-play** | **71%** | **PM20 #1 ENTER** |
| PM23 IBIDEN 4062.T | ✅ PASS L26/L27/L28 | substrate pure-play | VALUATION EXTENDED — wait pullback |
| AM2 (today) **TDK 6762.T** | **❌ FAIL L28** | ~10% MLCC | SIDECAR P3 demote |

**Conclusion:** L26+L27+L28 triplet discipline has now caught 4 sidecar/pre-revenue + 1 private + 1 valuation-extended pure-play, with only **Taiyo Yuden** clearing all gates as a pure-play with reasonable valuation. PM26 initial framing of TDK as bypass-route candidate was directionally correct (TDK does benefit) but **revenue-magnitude was wrong** — sidecar tier at 0.14× Taiyo Yuden sizing, not equivalent.

**Commit:** {to-be-filled-in-next-cascade}
