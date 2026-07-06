# Morning Feed Sources — per-market curated list

**Created:** 2026-06-26 (Workflow #10 MORNING-FEED-SCAN codification)
**Refresh cadence:** monthly during audit cycle; ad-hoc as new sources surface
**Purpose:** per-market source priority for autonomous morning scans (4 daily fires per Workflow #10)

---

## Pre-Korea scan (01:30 CET, Korea opens 02:00 CET)

**Focus:** held HYNIX 22.3% Core EX + cohort context (Samsung 005930.KS + SK Group + KOSPI move)

### T1 primary
- **SK Hynix IR / 뉴스룸** — news.skhynix.com / news.skhynix.co.kr (English + Korean)
- **Samsung Semiconductor newsroom** — news.samsung.com/semiconductor
- **SK Group official** — sk.com
- **DART filings** — dart.fss.or.kr (Korean regulatory primary)
- **KRX bulletins** — krx.co.kr

### T2 Korean trade press (native-language priority per Principle #36)
- **Etnews** — etnews.com (semi-focused)
- **Newspim** — newspim.com (memory cohort coverage)
- **Hankyung** — hankyung.com (Korea Economic Daily)
- **MK Economy** — mk.co.kr
- **Chosun Biz** — biz.chosun.com
- **Dealsite** — dealsite.co.kr (M&A + capital markets)
- **The Elec** — thelec.net / thelec.kr (Korean semi specialist, both EN + KR editions)
- **ZDNet Korea** — zdnet.co.kr
- **ITWorld Korea** — itworld.co.kr

### T2 English-mirror Korean coverage
- **Reuters Korea** — reuters.com/world/asia-pacific/south-korea
- **Bloomberg Korea desk** — bloomberg.com/markets/asia
- **KED Global** — kedglobal.com
- **Korea Times Business** — koreatimes.co.kr/business
- **Pulse News by Maeil** — pulsenews.co.kr

---

## Pre-Japan scan (01:45 CET, TSE opens 02:00 CET — staggered 15min from Korea scan)

**Focus:** held MURATA 15.7% Core + KIOXIA 14.0% Core (separate broker) + SUMCO 9.5% + Japan semi/passive/wafer cohort

### T1 primary
- **MURATA IR** — corporate.murata.com/en-global/ir
- **KIOXIA Holdings IR** — kioxia-holdings.com/en-jp/ir
- **SUMCO IR** — sumcosi.com/english/ir
- **Shin-Etsu Chemical IR** — shinetsu.co.jp/e/ir
- **Advantest IR** — advantest.com/en/investors
- **TDC filings** — DART JP equivalent: TDnet (Tokyo Stock Exchange disclosure system) — tdnet-search.appspot.com

### T2 Japanese trade press (native-language priority)
- **Nikkei xTECH** — xtech.nikkei.com (technical Japan semi specialist)
- **Nikkei Asia** — asia.nikkei.com (English-mirror)
- **ITmedia** — itmedia.co.jp (semi/AI coverage)
- **EE Times Japan** — eetimes.itmedia.co.jp
- **MONOist** — monoist.itmedia.co.jp (manufacturing-tech)
- **Reuters Japan** — jp.reuters.com
- **NHK Business** — nhk.or.jp/business

### T2 English-mirror Japanese coverage
- **Bloomberg Japan desk** — bloomberg.com/markets/asia
- **Reuters Tech Tokyo** — reuters.com/technology
- **The Japan Times** — japantimes.co.jp/business

---

## Pre-Europe scan (08:30 CET, Frankfurt opens 09:00 CET)

**Focus:** HY9H Frankfurt + MUR1 Frankfurt + S3X Frankfurt + Asia EOD summary + overnight news synthesis

### T1 primary
- **SEC EDGAR overnight filings** (Asia-listed F-1/F-6/F-3 for cross-listed names)
- **DART overnight Korean filings**
- **TDnet overnight Japanese disclosures**
- **Boerse Frankfurt opening calls** — boerse-frankfurt.de

### T2 European + global trade press
- **Reuters Europe** — reuters.com/markets/europe
- **Bloomberg Europe** — bloomberg.com/europe
- **Financial Times Tech** — ft.com/technology
- **Handelsblatt** — handelsblatt.com (German semi coverage)
- **L'Agefi** — agefi.fr (French markets)

### T2 Asia EOD aggregation (overnight = Asia day session ended)
- **TrendForce** — trendforce.com (Taiwan semi research, EN + ZH-TW)
- **DigiTimes TW** — digitimes.com (EN + ZH-TW)
- **Commercial Times Taiwan (CTEE)** — ctee.com.tw
- **UDN 經濟日報** — money.udn.com
- **Liberty Times 自由時報** — ltn.com.tw/business
- **TechNews Taiwan** — technews.tw
- **MoneyDJ Taiwan** — moneydj.com

---

## Pre-US scan (15:00 CET, NYSE opens 15:30 CET)

**Focus:** SNDK 13.1% CORE + NBIS 9.8% Active + MRVL 8.0% Active + US semi/AI cohort pre-market + Europe EOD

### T1 primary
- **SEC EDGAR US filings** (intraday recent)
- **NVDA IR / press** — nvidianews.nvidia.com
- **AMD IR** — ir.amd.com
- **AVGO IR** — investors.broadcom.com
- **MSFT/GOOG/META/AMZN IR**

### T2 US/global trade press
- **SemiAnalysis** — semianalysis.com (Dylan Patel + Doug O'Laughlin)
- **The Information** — theinformation.com (paywalled but headline-readable)
- **Stratechery** — stratechery.com
- **Bloomberg Tech US** — bloomberg.com/technology
- **Reuters Tech US** — reuters.com/technology
- **Tom's Hardware** — tomshardware.com
- **DataCenter Dynamics** — datacenterdynamics.com
- **The Register** — theregister.com
- **Wccftech** — wccftech.com (Taiwan/AI semi specialist)
- **VideoCardz** — videocardz.com (GPU/HBM specialist)

### T2 hyperscaler-specific
- **CoreWeave / Lambda / Crusoe** newsrooms
- **OpenAI / Anthropic / xAI** announcements
- **Counterpoint Research** — counterpointresearch.com

### T2 Europe EOD context
- **Reuters Europe markets** EOD wrap
- **Bloomberg Europe wrap**

---

## Cross-cutting sources (used across all 4 scans)

- **TrendForce English + Chinese + Korean editions**
- **CounterPoint Research** — counterpointresearch.com
- **Yole Group** — yolegroup.com
- **SemiAnalysis weekly digest**
- **VLSI / IEDM / IMW / ISSCC** conference proceedings during conference windows
- **TSMC tech symposium** archives
- **Samsung Foundry Forum** archives

---

## EXPLICITLY DEPRIORITIZED (per L1 + L29)

- **Twitter/X** — user's track per 2026-06-26 design decision (parallel-track architecture); morning scan does NOT scrape Twitter (paywall + reliability + user-coverage redundancy)
- **Reddit r/stocks / r/Hardware** — noise-to-signal too high for autonomous scan
- **Substack hot-takes** without primary citation — defer to T2 only if T1/T2 corroborates
- **YouTube analyst videos** — out-of-scope for text-scan

---

## Source maintenance discipline

- **Monthly audit:** verify every T1 + T2 source still active + accessible
- **Quarterly recalibration:** signal/noise ratio per source; deprioritize low-signal; promote consistent-high-signal
- **Ad-hoc add:** any new source surfaced by user-shared verified item; flag for next monthly review
- **Removal:** any source that hits 90-day inactivity OR paywall-block OR consistent-false-positive

**First review:** 2026-07-26 monthly audit cycle (will be reviewed alongside 2026-06-26 Workflow #10 first-week review)
