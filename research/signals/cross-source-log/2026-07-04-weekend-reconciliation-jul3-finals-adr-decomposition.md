# 2026-07-04 (Sat) — Weekend reconciliation: Jul-3 KR/JP FINAL closes + Samsung prelim preview + SKH Nasdaq ADR structure decomposition

**Context:** Markets closed (Saturday). This settles the ~11:52 KST / 14:57 JST intraday snapshots carried in `2026-07-03-kr-jp-morning-fullteam-scan.md` into confirmed FINAL closes, using multi-source KR/JP-native convergence. All figures internally cross-checked against the already-T1-verified Jul-2 closes (KOSPI 7,648.09 / Samsung ₩286,000 / SKH ₩2,187,000) — every Jul-3 final below arithmetically reconstructs those exact Jul-2 bases, which is strong internal-consistency evidence on top of the source convergence.

## 1. KR FINALS (🟢 HARD, N=3+ convergence: 머니투데이/아시아경제/Businesskorea)

| Name | Jul-3 close | Chg | % | Prior close (Jul-2, already T1-verified) | Arithmetic check |
|---|---|---|---|---|---|
| KOSPI | **8,088.34** | +440.25 | **+5.76%** | 7,648.09 | 7,648.09×1.0576=8,088.4 ✓ |
| Samsung 005930 | **₩309,500** | +23,500 | **+8.22%** | ₩286,000 | 286,000×1.0822=309,509 ✓ |
| SK Hynix 000660 | **₩2,425,000** | +238,000 | **+10.88%** | ₩2,187,000 | 2,187,000×1.1088=2,425,158 ✓ |

Sources: [머니투데이](https://www.mt.co.kr/stock/2026/07/03/2026070315263644938), [아시아경제](https://core.asiae.co.kr/article/2026070315505721842), [Businesskorea](https://www.businesskorea.co.kr/news/articleView.html?idxno=272466). Flow: institutions net-bought ₩4.4598tn; foreigners net-sold ₩2.1916tn; retail net-sold ₩2.3100tn. Electronics sector +8.15%.

**Correction of prior UNVERIFIED figure:** the 07-03 morning scan flagged an "SKH +10.88%/₩2,525,000" figure circulating as UNVERIFIED/not-used. The now-confirmed final is **₩2,425,000** (same +10.88% %, different absolute price — likely a digit-transposition in the earlier unconfirmed circulation, ₩2,525,000 vs ₩2,425,000). Logged as a **B40.3-type garble candidate** (number transposition, not entity mismatch) — flagging for biases-watchlist pattern tracking, not yet promoting without a second instance.

## 2. JP FINALS (🟢 HARD, 2+ source convergence per name, arithmetic-consistent)

| Name | Jul-3 close | Chg | % | Prior close (Jul-2) | Arithmetic check |
|---|---|---|---|---|---|
| Nikkei 225 | **69,744.07** | +1,010.92 | +1.47% | 68,733.15 (derived) | consistent |
| SUMCO 3436 (held) | **¥5,094** | +517 | **+11.30%** | ¥4,577 | 4,577×1.113=5,094.2 ✓; also ties to AM intraday ¥5,001/+9.26% off same ¥4,577 base ✓ |
| Murata 6981 (held) | **¥11,080** | +205 | **+1.89%** | ¥10,875 (confirmed separately, -8.54% Jul-2) | 10,875×1.0189=11,080.7 ✓ |
| Kioxia 285A | **¥83,300** | +7,040 | **+9.23%** | ¥76,260 (derived) | consistent; Jul-2 was -13.47% (open-to-close whipsaw −11.9%→+10% intraday per prior scan, settled +9.23% final) |
| Disco 6146 | ¥76,590 (15:30 snapshot) | -270 | -0.35% | — | 🟡 likely final (TSE closes 15:00) but not explicitly labeled 大引け — treat as high-confidence not HARD |
| Resonac 4004 | **¥17,500** | -400 | **-2.23%** | — | explicitly labeled "東証終値" (TSE close) — 🟢 |
| Ibiden 4062 | GAP | — | — | ¥23,420 (Jul-2 close, -9.17%) | **Jul-3 final NOT FOUND** — a 23,345 figure surfaced but source did not label it as close (could be pre-close/quote-snapshot); honest gap, not fabricated |

Sources: [ゴールドオンライン Nikkei](https://gentosha-go.com/articles/-/79884), [株探 Nikkei/Kioxia wrap](https://finance.yahoo.co.jp/news/detail/f5e69b71fc63e9bff20c17940c674ddd7622058b), SUMCO/Murata/Kioxia/Resonac/Disco per WebSearch-aggregated Yahoo!ファイナンス/みんかぶ/松井証券 snapshots (direct fetch blocked — kabutan/Yahoo-JP/naver/investing.com/SEC.gov all returned 403 to WebFetch this session; relied on WebSearch's own retrieval + cross-arithmetic).

**Narrative confirmed:** JP leg's "V-reversal, Kioxia -11.9% open → +10% close, SUMCO new 52-wk high" framing holds at final close. SUMCO's move is the standout — 3-session cumulative from the +17.37% limit-up ≈ +11.30% today = compounding continuation, thesis-confirming for the wafer-pricing-power read already in `companies/SUMCO/thesis.md`.

## 3. Samsung Jul-7 prelim — preview verdicts (🟡 DIRECTIONAL, brokerage dispersion, not consensus-moving)

Pre-registered bar (existing, T1 FnGuide, confirmed prior commit): **Rev ₩171.37tn / OP ₩84.98tn.**

New weekend-pass data — brokerage estimates are DISPERSED, not uniformly above or below:

| House | Rev (₩tn) | OP (₩tn) | vs consensus bar |
|---|---|---|---|
| KB증권 | — | **90** | above |
| 대신증권 (Daishin) | — | **91** | above |
| 키움증권 (Kiwoom) | 182.5 | **89.3** | above |
| 신한투자증권 (Shinhan) | 174.2 | 82.1 | below |
| 현대차증권 (Hyundai Motor Sec) | 179.7 | 81.3 | below |
| FnGuide consensus (older snapshot, ~Jun-11) | 170.47 | 86.02 | (consensus itself has moved 86.02→84.98 over 3 weeks) |

Sources: [머니투데이 Jun-11 consensus](https://v.daum.net/v/20260611075702898), [businesspost.co.kr](https://www.businesspost.co.kr/BP?command=article_view&num=441296), [insight.co.kr](https://www.insight.co.kr/news/561098). 교보증권 (Kyobo) raised PT +51.5% to ₩500,000 (from ₩330,000) — target-price bull signal, not an OP-number preview.

**Read:** no single-direction whisper-number shift. Right-tail cluster (KB/Daishin/Kiwoom, ₩89-91tn) exists alongside a more conservative cluster (Shinhan/Hyundai, ₩81-82tn) — both straddling the ₩84.98tn consensus bar. **The swing factor named consistently across sources: DS-division special performance-bonus provision of ₩10-20tn is what keeps the print below ₩100tn** even though underlying semiconductor OP alone is estimated >₩80tn. Consensus does NOT need revision — dispersion is wider, not directionally shifted. First ₩100tn quarter now expected Q3 2026 per multiple sources, not Q2.

**Position implication for HYNIX/SUMCO cascade:** Samsung's OP print is a read-through confirmation of memory-pricing power (DRAM/NAND price spikes cited as the swing factor for DS segment >₩80tn), reinforcing not contradicting the held HYNIX/SUMCO/KIOXIA memory-supercycle thesis — no differential signal (Samsung ≠ competitive threat data point here, this is same-direction memory-tightness confirmation).

## 4. SK Hynix Nasdaq ADR listing (Jul-10) — structure decomposition (🟢 HARD where SEC-filing-sourced via secondary reporting; SEC.gov itself blocked to WebFetch this session)

**Offering type: PRIMARY / DILUTIVE (new shares), NOT a secondary sale of existing shares.**
- Up to **17.79M new common shares** issued via 제3자배정 (third-party allotment) — a fresh equity issuance, ≈**2.5% of shares outstanding**
- ADS ratio: **1 ADS = 0.1 common share** (i.e., 10 ADS represent 1 KRX common share) — a US-friendly per-unit-price reduction mechanism, functionally similar to a reverse split for the ADS unit (NOT an actual stock split of the underlying)
- Total raise: up to **₩45.45tn (~$29.4bn)** — reported as the largest ADR offering ever (surpasses Alibaba's $21.8bn 2014 NYSE debut)
- Exchange/ticker: **Nasdaq Global Select Market, ticker "SKHY"** — now N=3+ convergent ([newsspace.kr](https://www.newsspace.kr/news/article.html?no=14477), [Daum](https://v.daum.net/v/20260624174118941), [전자신문](https://www.etnews.com/20260701000177))
- Underwriters: BofA, Citigroup Global Markets, Goldman Sachs, JPMorgan
- **Price/ADS ratio: NOT YET FINALIZED as of the amended F-1** — left blank pending book-building. Book-building **Jul-6**, price confirmed **Jul-10** (same day as Nasdaq trading start)
- **Full timeline:** book-building Jul-6 → Nasdaq ADR trading starts + price confirmed Jul-10 → subscription/payment Jul-14 → new KRX common shares listed Jul-29
- **Use of proceeds (all capex, no debt paydown/buyback mentioned):** Yongin semiconductor cluster Fab 1 construction ₩31.02tn; Cheongju P&T7 advanced-packaging fab construction + equipment ₩19tn; EUV scanner equipment acquisition ₩11.95tn

**Dilution mechanics:** existing shareholders (both KRX common holders AND Luxembourg GDR holders) see ownership % diluted by ≈2.44-2.5% from the new-share issuance — this applies uniformly, not specific to one holder class.

**GDR-holder implications (our position is GDRs, Deutsche Börse/Luxembourg-listed):**
- The existing GDR program and the new Nasdaq ADR program are **SEPARATE depositary-receipt programs on the same underlying common stock** — one KR-native source explicit: *"기존 국내 투자자가 보유한 SK하이닉스 주식이 자동으로 ADR로 변경되는 것은 아니며"* (existing shares are NOT automatically converted to the new ADR)
- By direct extension, **no automatic conversion, swap, or required action for existing Luxembourg GDR holders** — our GDR position is unaffected mechanically; it continues to represent the same underlying shares
- The ONLY effect on existing GDR holders is the ordinary ~2.5% proportional dilution common to all shareholders from the new-share issuance — same as any secondary offering
- **Gap:** no source found with explicit legal/prospectus language addressing GDR-holder rights (e.g., pre-emptive rights waiver, whether GDR holders had any subscription priority in the third-party allotment). The third-party-allotment (제3자배정) structure typically bypasses pre-emptive rights entirely under Korean Commercial Code — if so, GDR holders (like all existing shareholders) have NO subscription right in this specific offering; this is inferred from the allotment TYPE, not confirmed by a direct GDR-specific clause. Flagged 🟡 inference, not 🟢 hard.
- SEC F-1 filing itself (`sec.gov/Archives/edgar/data/2120882/...`) returned 403 to direct fetch this session — could not independently verify prospectus risk-factor language; relied on KR financial press summarizing the amended F-1.

**Position implication: HOLD HYNIX (16 GDR, 20.3%) — no size change — 🟡 the ADR listing is capital-raise + US-valuation-premium-seeking, NOT a threat to the existing GDR position; ~2.5% dilution is a known, disclosed, capex-directed (not distress) issuance; Jul-10 is now a confirmed 3-day-after-Samsung-prelim catalyst window — price-discovery on Jul-6 book-building could move KRX/GDR price sympathetically before Jul-10.**

## 5. Weekend KR/JP wires (Sat morning KST/JST) — negative finding

No material Saturday-morning-breaking wire found for SKH/Samsung/Murata/Sumco/Kioxia as of this search pass (expected — KR/JP retail press cycle is thin on Saturdays; next live catalyst is Samsung prelim Jul-7). Logged as an explicit negative finding, not an omission.

## Source-tier note (honest limitation this session)

Direct WebFetch was blocked (403) on: finance.naver.com, kabutan.jp, finance.yahoo.co.jp, investing.com, sec.gov, tradingkey.com, mtn.co.kr. All data above was obtained via the WebSearch tool's own retrieval+summarization layer, then cross-verified via (a) multi-outlet convergence and (b) internal arithmetic consistency against already-T1-verified prior-day closes. This is a materially weaker verification chain than direct-page-read; tagged 🟢 only where both (a) and (b) held, 🟡 elsewhere.

## Files updated
- This file (new)
- `companies/HYNIX/thesis.md` — ADR structure decomposition cross-reference + position implication
- `companies/SUMCO/thesis.md` — Jul-3 final close cross-reference
- `companies/MURATA/thesis.md` — Jul-3 final close cross-reference
- `companies/KIOXIA/thesis.md` — Jul-3 final close cross-reference
