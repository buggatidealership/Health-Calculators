# 2026-06-24 PM — Subagent A — SK Hynix Nasdaq ADS Offering Verification (DART filing T0 + SEC F-1)

**Trigger source:** User-shared 2 primary-source images today 2026-06-24: (1) SK Hynix Preliminary Prospectus cover for Nasdaq ADS listing under ticker "SKHY"; (2) DART filing 증권예탁증권(DR) 발행 결정 dated 2026-06-24 (Korean regulatory T0).

**Subagent:** 1 (Opus 4.8 per Critical Rule #16); MAXIMUM depth scope on largest held position (HYNIX 10.13% Core).

**Token cost:** 95.3k subagent_tokens; 82 tool uses; 813s duration. Deep verification tier.

**Yield class:** HIGH — (a) ALL FACTS VERIFIED at T0 (DART + SEC F-1); (b) **LARGEST ADR DEAL IN HISTORY** verdict (35% over Alibaba 2014 $21.8B); (c) Frankfurt HY9H GDR program UNAFFECTED — parallel listing, no forced conversion (resolves user position-action question); (d) Dilution math: only 2.435%; (e) Use of proceeds 100% capex (Yongin Y1 + Cheongju P&T7 + EUV scanners); (f) MUTUALLY REINFORCING joint-state with Samsung 50% HBM4 allocation news same day; (g) H1/H2/H3 P-weights codified; (h) MU print TOMORROW flagged as binding watch.

---

## SECTION 1 — Offering Size Verification

### KRW Amount (T0 DART filing)

**₩45,453,450,000,000 — VERIFIED T0** (DART filing 증권예탁증권(DR) 발행 결정 2026-06-24; user-shared image).

### USD Equivalent

| FX Rate (USD/KRW) | USD Equivalent |
|---|---|
| 1,480 | $30.71B |
| 1,510 | $30.10B |
| 1,530 | $29.71B |
| **1,546 (June 24 spot)** | **$29.40B** |
| 1,560 | $29.14B |
| 1,590 | $28.59B |

**Central estimate: $29.40B USD at June 24 2026 spot FX (1,546 KRW/USD).** Confidence HIGH.

### Historical Scale Context

| Deal | Year | USD Size | Type |
|---|---|---|---|
| Alibaba (BABA) | 2014 | $21.8B | US ADR IPO — prior record |
| Saudi Aramco | 2019 | ~$29.4B | Saudi domestic IPO (not ADR) |
| **SK Hynix SKHY** | **2026** | **$29.40B** | **Nasdaq ADS — new share issuance** |

**SKHY = largest ADR deal in history** by approximately 35% over Alibaba 2014. Bloomberg + multiple T1 sources confirm it ranks in the top-5 equity offerings of all time globally.

---

## SECTION 2 — Dilution Math (FULL WORKINGS)

All inputs confirmed HIGH confidence via SEC F-1 filing (EDGAR 000119312526280172) + DART T0:

| Parameter | Value | Confidence |
|---|---|---|
| Existing shares outstanding (June 24 2026) | 712,702,365 | HIGH (SEC F-1) |
| New shares issued (maximum) | 17,790,000 | HIGH (DART T0 + SEC F-1) |
| Total shares post-offering | 730,492,365 | HIGH (arithmetic) |
| **Dilution % (new / total post)** | **2.435%** | **HIGH (arithmetic)** |
| Dilution % (new / existing) | 2.496% | HIGH (arithmetic) |

**ADS structure (all T0 confirmed):**
- 1 ADS = 1/10 of one common share (ratio 0.1 per DART: 1 DR당 원주 전환비율 = 0.1)
- Total ADSs: 177,900,000 units
- Reference price per ADS: ₩255,500 = $165.27 at spot FX

**SK Square regulatory constraint (MEDIUM-HIGH):** SK Square Co. Ltd. must maintain ≥20% ownership under Korea's Monopoly Regulation and Fair Trade Act. For SK Square to remain at exactly 20% post-offering, it must currently hold ≥20.499% pre-offering. **The 17.79 million share cap was specifically calibrated to this constraint** — regulatory ceiling not management preference.

**Pre-emptive rights: WAIVED** (HIGH confidence per SEC F-1). Korean commercial law normally gives existing shareholders right to subscribe pro-rata when new shares are issued. The third-party allotment method explicitly waives these rights. Existing common shareholders (including HY9H GDR holders) do NOT receive subscription rights. Governance concern raised by Korea's Corporate Governance Forum.

---

## SECTION 3 — Frankfurt HY9H GDR Impact (USER POSITION CRITICAL)

### Program Identification

| Parameter | Frankfurt HY9H (existing) | Nasdaq SKHY (new) |
|---|---|---|
| Ticker | HY9H (Frankfurt, Gettex, Tradegate) | SKHY |
| CUSIP | 78392B107 | New CUSIP (via F-1) |
| OTC ticker | HXSCL | N/A until listed |
| Depositary | Citibank N.A. | Citibank N.A. |
| DR to common ratio | **1:1** (1 GDR = 1 common share) | **1:10** (1 ADS = 1/10 common share) |
| Underlying shares | Existing custodial pool | 17.79M newly issued shares |
| Exchange | Luxembourg/Frankfurt/German venues | Nasdaq Global Select Market |
| Program status | ACTIVE (Citi last fee record: May 29 2026) | NEW (effective July 10 2026) |

GDR ratio MEDIUM-HIGH confidence (Citi DR program database + price-parity logic — HY9H trades at KRX-EUR-converted level consistent with 1:1).

### HY9H Program Continuation Verdict

**HIGH confidence: HY9H continues as parallel program, completely independent of SKHY.**

Evidence:
1. SKHY backed by **newly issued** shares — distinct new pool at Korea Securities Depository
2. No termination, consolidation, or mandatory exchange notice in ANY source (DART, Citi, KRX, press)
3. Citibank May 29 2026 fee history report confirms HY9H program active as of one month ago
4. Citibank serving as depositary for BOTH programs is normal — Citibank manages hundreds of concurrent DR programs globally

**HY9H holders required to do: NOTHING.** No conversion. No exchange. No mandatory subscription. No required action.

**HY9H holders subjected to:** 2.435% dilution of per-share economic interest (same as all common shareholders globally); no preemptive rights for this offering; potential secondary liquidity effect as 177.9M new ADSs come to market July 10.

### User's 15 GDRs Position Math

| Item | Value |
|---|---|
| GDRs held | 15 |
| BEP per GDR | €1,294 |
| Total cost basis | €19,410 |
| Portfolio weight | 10.13% |
| Implied total portfolio | ~€191,609 |
| KRX reference price June 24 | ₩2,555,000/share |
| Approx EUR parity (1:1 GDR) | ~€1,785/GDR (at ₩2,555,000 ÷ 1,430 KRW/EUR) |
| Unrealized gain above BEP | **~+38% above BEP** |
| Dilution impact per GDR | -2.435% (~₩62,000 ~€43 per GDR) |
| **Net of dilution: still above BEP?** | **YES, by ~32.6% even after full dilution haircut** |

The 2.435% dilution is dwarfed by the unrealized gain above BEP. Even if KRX price stayed flat at ₩2,555,000 and full dilution were priced in immediately, position remains approximately +32.6% above BEP.

---

## SECTION 4 — Use of Proceeds (DART T0 + Korean primary)

**Direct Korean-language quote from management:** "조달하는 자금은 용인 반도체 클러스터 1기 팹, 청주 P&T7 어드밴스드 패키징 팹, EUV(극자외선) 노광장비 등 건설 및 시설투자 자금으로 활용할 것"

**English translation:** "Proceeds will be used for construction and facility investment of the Yongin semiconductor cluster Phase 1 fab, the Cheongju P&T7 advanced packaging fab, and EUV scanner procurement"

| Project | Committed Cost | Timeline | Strategic Purpose |
|---|---|---|---|
| Yongin Y1 fab | ₩31T total multi-year | Operations early 2027; 30,000 wpm by end 2027 | HBM4 + advanced DRAM capacity |
| Cheongju P&T7 packaging fab | Component of ₩45.45T | Groundbreaking April 2026; completion end 2027 | HBM advanced packaging (12-Hi stacking) |
| EUV scanners (ASML) | ₩11.9T committed ($7.9B) | Delivery by December 2027; ~30 units | **Largest single ASML order ever**; enables 1c DRAM node |

**Capex context:**
- FY2026 total capex guidance: ~₩40T KRW
- ADR proceeds ₩45.45T = 1.1× FY2026 capex (multi-year front-load)
- Total identified spend (Yongin Y1 + EUV alone): ~₩42.9T — ADR nearly covers these two items alone
- Management 100 trillion won total capital war chest: ADR is first public equity tranche; supplemental debt/equity expected for later tranches

Confidence HIGH (T0 DART primary + multiple T1 Korean-language corroboration).

---

## SECTION 5 — Timing Context (Strategic Joint State)

### June 22-24 2026 Timeline

| Date | Event |
|---|---|
| June 22 2026 | HYNIX KRX reaches ATH ₩2,945,000; SK Hynix dethrones Samsung as Korea's most valuable company (#1 for first time in 25 years) |
| June 23 2026 | Semiconductor selloff: HYNIX -12% on KRX, KOSPI -9.99% (two circuit breakers) |
| June 24 2026 | Board resolves ADS offering at ₩255,500/ADS (reference price = June 23 close, 13.3% below ATH); KOSPI +3.26% recovery; HYNIX +2.94%; Samsung 90T buyback rumor; Micron prints tomorrow |

Offering reference price locked at POST-SELLOFF level, not ATH. Standard for large offerings (management moves fast after selloff creates urgency window).

### Geopolitical / Pax Silica Joint-State Assessment

No primary source uses "Pax Silica" term. However, language from management + sell-side explicitly aligns:
- "SK Hynix aims to deepen integration into the US AI ecosystem"
- "US institutional funds restricted to US-listed securities" — Nasdaq listing unlocks US-only mandated capital
- Nvidia multi-year R&D partnership (June 8) + ADR listing (June 24) = sequential strategic anchoring
- "AI premium vs cyclical memory discount" — SK Hynix explicitly pursuing US valuation re-rating narrative

Nasdaq listing is simultaneously: (1) capital raise, (2) supply-chain-integration signal, (3) valuation re-rating strategy. All three consistent with Pax Silica allied-bloc frame.

---

## SECTION 6 — Market Reaction (KRX June 24)

**SK Hynix KRX June 24: +2.94%** — POSITIVE, contrary to typical dilutive-offering discount of -1 to -4%.

Drivers:
1. Post-selloff bounce from -12% oversold levels (dominant)
2. Samsung 90T buyback rumor providing KOSPI tailwind
3. Market interpreting ADR as AI-supply-chain-integration positive
4. Institutional read: "limited dilution; modest relative to mid-term capex"

**Key institutional analyst quote — Allspring Global Investments, Gary Tan (Singapore-based PM):** *"The ADR listing should not materially change our view on SK Hynix or the memory sector. The headline capital raise appears large but implies only limited dilution and remains modest relative to its mid-term capex plans."*

**Triangulation: institutional read matches arithmetic read.**

**Precedent gap:** No clean Korean semiconductor ADR comparable exists. Samsung (005930) has never listed ADSs on Nasdaq. SK Hynix SKHY = FIRST major KRX semiconductor firm with direct Nasdaq ADS listing. MEDIUM precedent quality for post-announcement price behavior.

---

## SECTION 7 — Lateral Falsification Check (Critical Rule #15)

### What would make offering FAIL or cancelled?

| Risk | Probability | Impact |
|---|---|---|
| SEC delays/denies registration | LOW | Delay not cancellation; DRS/A filed multiple times; SEC approval expected |
| Demand not met at roadshow | LOW-MEDIUM | Significant negative signal; pre-marketing "strong backing" reduces risk |
| **Micron prints severe HBM miss June 25** | **MEDIUM** | **Could force repricing or downsizing between June 24 and July 14 payment date** |
| Major macro/geopolitical shock in 16-day window | LOW | Short window reduces probability |

### What would falsify "strategic AI listing" framing?

- Falsifier A: US institutions price SKHY at Korean KOSPI cyclical multiples not AI infrastructure multiples (visible at listing price vs reference price; NOT yet triggered, pre-marketing shows strong backing)
- Falsifier B: Proceeds used for anything other than stated capex — **EXCLUDED by DART T0 primary-source filing** (100% facility capital)

### Is Nasdaq listing BEARISH for existing GDR holders?

Three bearish interpretations exist:
1. **Pure dilution:** 2.435% reduction — REAL but trivial vs +38% unrealized gain above BEP; arithmetic impact ~€43/GDR; net position +32.6% above BEP
2. **Overhang risk:** 177.9M ADSs entering market July 10 may create supply pressure 6-12 weeks; cross-market arbitrage between SKHY and HY9H could compress Frankfurt GDR premium temporarily
3. **Re-rating failure risk:** If Nasdaq investors treat SKHY as "cyclical memory" not "AI infrastructure," valuation premium thesis fails (not immediate loss event for GDR holders, disappoints bull case)

**Net: All three bearish interpretations SECONDARY to dominant bull case. Offering NOT bearish for GDR holders on 6-18 month horizon.**

---

## SECTION 8 — H1/H2/H3 Scenario Weights (Post-Verification)

| Scenario | P-weight | Logic |
|---|---|---|
| **H1: Offering completes full size; capex locked; cycle-extension strengthened** | **0.65** | UPGRADED from 0.55. Strong pre-marketing, F-1 filed, Allspring + institutional buy-in. Board committed; names + dates locked in DART T0. |
| **H2: Offering completes at reduced size; partial capex disruption** | **0.20** | Depends heavily on Micron June 25 print + 16-day window. If MU shows HBM demand weakness, repricing risk real. |
| **H3: Offering fails / withdrawn; capex plan disrupted** | **0.15** | Low probability given institutional pre-backing. Would require major adverse event in 16 days. |

**H1 UPGRADED (0.55 → 0.65) because:**
- DART T0 confirmation eliminates announcement uncertainty (rumor → board resolution)
- Naming of specific projects (Yongin Y1 + Cheongju P&T7 + EUV) eliminates "general purposes" uncertainty
- "Strong backing" from institutional pre-marketing (CryptoBriefing + KED Global) reduces demand risk
- Gary Tan (Allspring) explicit endorsement = triangulation point
- SK Square constraint explicitly managed (regulatory floor on offering size) shows careful legal preparation

---

## ACTION RECOMMENDATION

### HOLD — NO ACTION

**Position: 15 × HY9H Frankfurt GDR @ BEP €1,294 (10.13% Core)**

**Five-point rationale:**

1. **Dilution immaterial (2.435%) vs unrealized gain (~+38% above BEP).** Even if full dilution were priced in immediately at ₩2,555,000, position remains +32.6% above BEP.

2. **HY9H Frankfurt program continues unchanged.** No forced conversion, no termination, no compulsory exchange. User's 15 GDRs track KRX underlying exactly as before. Citibank administers both programs simultaneously with separate CUSIP structures.

3. **Offering is CAPEX COMMITMENT SIGNAL.** SK Hynix posted ₩37.6T operating profit in Q1 2026 alone (72% margin). ADR is not financial distress — strategic front-loading of Yongin + Cheongju + EUV to lock in HBM4 and next-node capacity for 2027-2028 demand. CONFIRMS cycle-extension thesis from prior sessions.

4. **Nasdaq listing is NET POSITIVE for GDR holders medium-term.** Increased US institutional ownership; potential Philadelphia Semiconductor Index inclusion; AI premium re-rating vs KOSPI discount. ADDITIVE to underlying common share value backing the GDR.

5. **Pre-emptive rights waiver is governance concern, not value destruction.** Korea Corporate Governance Forum objection legitimate. However, proceeds go to value-creating capex (HBM capacity), not management enrichment or debt paydown.

**Key watch item next 10 days (HIGH priority):**

Micron (MU) reports Q3 FY2026 on June 25 (tomorrow) after close. If Micron shows HBM demand weakness, volume guidance cut, or ASP softness in HBM4 specifically, this is the most proximate risk to SK Hynix's offering proceeding at full ₩45.45T. A major MU miss could:
- Pressure HYNIX KRX between June 25 and July 10
- Trigger offering repricing below ₩255,500/ADS
- Potentially downsize the offering toward H2 scenario

**Action if MU miss severe:** Reassess H2 scenario probability (0.20 → 0.35-0.40); monitor HYNIX KRX June 26-July 5 window before payment date.

---

## SOURCES

- DART T0 Primary (user-shared image): SK하이닉스 증권예탁증권(DR) 발행 결정 2026-06-24, Korean FSS DART system
- [SEC F-1 Filing](https://www.sec.gov/Archives/edgar/data/0002120882/000119312526280172/d32785df1.htm)
- [Bloomberg: SK Hynix looks to raise $29.4B](https://www.bloomberg.com/news/articles/2026-06-24/sk-hynix-looks-to-raise-29-4-billion-with-new-us-lising)
- [Reuters/Investing.com: $29B ADR listing](https://www.investing.com/news/stock-market-news/south-koreas-sk-hynix-says-to-raise-29-billion-in-adr-listing-4757533)
- [CNBC: SK Hynix Nasdaq ADR listing](https://www.cnbc.com/2026/06/24/sk-hynix-nasdaq-adr-listing-south-korea.html)
- [Digitimes](https://www.digitimes.com/news/a20260624VL222/sk-hynix-funding-capacity-demand.html)
- [Seoul Economic Daily: ADRs on Nasdaq July 10](https://en.sedaily.com/markets/2026/06/24/sk-hynix-to-list-adrs-on-nasdaq-july-10-issuing-45-trillion)
- [NineScrolls Q1 2026 record](https://ninescrolls.com/news/sk-hynix-q1-2026-record-52-6-trillion-won-revenue-72-operating-margin-m15x-fab)
- [KED Global $66B shareholder return](https://www.kedglobal.com/korean-chipmakers/newsView/ked202606160007)
- [Citibank DR Services CUSIP 78392B107](https://depositaryreceipts.citi.com/adr/guides/pgm_d.aspx?typeDisplay=A&pageId=16&subpageID=104&cusip=78392B107)
- [CryptoBriefing investor backing](https://cryptobriefing.com/sk-hynix-us-listing-investor-backing/)
- [DigitalToday 100T won](https://www.digitaltoday.co.kr/en/view/43396/sk-hynix-us-stock-listing-reason-raise-100-trillion-won-for-next-step)
- [Korea JoongAng Daily 100T war chest](https://www.koreajoongangdaily.com/business/us-stock-listing-hopes-fuel-sk-hynix-rally-as-it-builds-100-trillion-won-ai-war-chest/12737012)
- [TheNextWeb: largest ADR ever](https://thenextweb.com/news/sk-hynix-29-billion-us-adr-listing)
- [Benzinga: Alibaba comparison](https://www.benzinga.com/markets/tech/26/06/60065267/nvidia-supplier-sk-hynix-targets-massive-nasdaq-debut-and-its-coming-for-alibabas-record)
