# GF Securities Rubin Ultra PTFE Supply Chain Claim — Verification Research

**Date logged:** 2026-06-01
**Source:** User-shared Twitter post from GF Securities (Guangfa Securities, Chinese investment bank) Overseas Electronics & Communications team claiming NVIDIA Rubin Ultra adopts PTFE as primary orthogonal backplane material
**Method:** 3 parallel research subagents + independent WebSearch verification per Principle #36 AI-native operating frame + new LLM-native-reasoning hook discipline (multilingual search; Chinese/Japanese/Taiwanese sources)
**Source validity:** Verified per subagent reports T1-T2 where available; T3 flagged
**Status:** Subagent 3 (raw material upstream) complete; Subagents 1 (technical claim) + 2 (CCL supply chain) pending

---

## The claims being verified (GF Securities note structure)

1. NVIDIA confirmed PTFE as primary material for Rubin Ultra orthogonal backplane
2. M9 + Q-glass fabric solution failed electrical performance standards
3. PTFE supports 337G+ SerDes signal transmission
4. SiO₂-filler-modified PTFE solves softness/drilling-burr problem
5. PTFE CCL: hydrocarbon resin coated on PTFE + copper foil (no glass fiber)
6. Modified PTFE price RMB 150,000/ton; ~800g per CCL sheet; RMB 2,500/sheet
7. Final design (78-layer or 108-layer hybrid PTFE/M9-Q glass/ABF) by July 2026
8. Shengyi Technology (600183.SH) = primary PTFE CCL supplier
9. Taiflex Scientific (8039.TT) = secondary supplier (in certification)
10. Dongyue Group (0189.HK) = core upstream PTFE raw material supplier
11. Daikin (6367.JP) + Haohua (600378.CH) = potential raw material suppliers
12. 2027 Kyber platform PTFE CCL TAM ~RMB 8 billion
13. Midplane mass production end 2026
14. PCB-value-to-CCL-value ratio rising from 2-2.5x to 3-3.5x

---

## Independent preliminary WebSearch finding (initial nuance)

Per [UGPCB T2 technical analysis](https://www.ugpcb.com/news/pcb-tech/orthogonal-backplane-pcb/) + [Tiger Brokers T2](https://www.itiger.com/news/1159132876) + [TSPA Semiconductor T2](https://tspasemiconductor.substack.com/p/the-material-code-of-highspeed-serdes):

**CONFIRMED**:
- Rubin Ultra uses orthogonal backplanes (not copper cables)
- M9 materials with Q-glass (high-end quartz fiber) ARE used; dielectric constant ~3.0; dissipation factor 0.0007
- PTFE IS being adopted but as HYBRIDIZED layers, not full replacement
- 78-layer structure: 3 × 26-layer boards combined
- PTFE has high CTE issue (~30× mismatch); managed via specialized bonding films

**APPEARS OVERSTATED IN GF NOTE**:
- "M9 + Q-glass failed electrical performance" → contradicted by UGPCB describing M9+Q-glass as primary structural material outperforming E-glass M8
- "PTFE selected as core material" → reality appears PTFE-in-selected-layers within hybrid stack (which GF's own note acknowledges in paragraph 2)
- "337G SerDes" claim NOT surfaced in initial search; M9 supports 56G-112G PAM4 up to 448G per industry sources

**Honest read so far**: GF Securities frames PTFE as primary replacement when supply chain reality is PTFE-as-hybrid-component-within-M9-dominant-stack. The DIRECTIONAL signal (PTFE share of CCL value rising) is likely correct; the MAGNITUDE framing appears exaggerated.

---

## Subagent 3 results — PTFE raw material upstream (COMPLETE)

### Dongyue Group (0189.HK) — VERDICT: CLEANEST ACCESSIBLE PROXY, BUT NOT PURE-PLAY AI

**Business + capacity (verified T1+T2)**:
- China's largest integrated fluorochemical and silicon materials group; Zibo, Shandong-headquartered
- 5 segments: fluoropolymers (PTFE, FEP, PVDF), refrigerants, organic silicon, functional membranes, chlor-alkali
- **PTFE capacity: 55,000 tonnes/year** — China's largest single producer; cited domestic share over 50%
- Investing RMB 89.56 million in semiconductor-grade PTFE high-purity quality upgrade

**2024 financials (T1 HKEx)**:
- Revenue: RMB 14,181 million (-2.15% YoY)
- Net profit attributable: RMB 811 million (vs RMB 708M 2023)
- Gross margin: 21.62% (vs 16.81% 2023)
- **Fluoropolymer segment external sales: ~RMB 3,825M (26.97% of group)**; segment profit RMB 508M (+51% YoY)

**Analyst forecasts (T2 Guosen Securities April 2025)**:
- 2025E net profit RMB 2,177M
- 2026E net profit RMB 2,953M
- **CRITICAL: ~169% YoY 2025 jump driven mainly by REFRIGERANT CYCLE (R22/R32/R1234yf), NOT PTFE**
- PTFE is SECONDARY to refrigerant story in current analyst consensus

**Market data**:
- ~HK$17.75/share; market cap ~HK$30.7B (~USD 3.9B)
- 12-month analyst consensus target: HK$17.97 (essentially at target)

**GF claim verification**: Dongyue as "core PTFE supplier to Shengyi" = **DIRECTIONALLY PLAUSIBLE, UNCONFIRMED at T1**. Evidence: (a) Dongyue largest PTFE producer in China, (b) Shengyi is NVIDIA's only mainland-China-certified M9/PTFE CCL supplier, (c) Dongyue investing in semiconductor-grade PTFE purity. **Inference is reasonable; not "confirmed."**

**Investability**: ✓ Degiro accessible (HKEX €10 + 0.068%/trade per [BrokerChooser T2](https://brokerchooser.com/invest-long-term/diversification/hong-kong-stocks-at-degiro))

**Right-Side-of-Belka: 6/10**. Modified PTFE for low-loss high-frequency substrates IS a non-trivial bottleneck. But: (a) refrigerant cycle drives near-term earnings; (b) Dongyue-to-Shengyi supply link inferred not confirmed; (c) national PTFE overcapacity (~230k t/y at 80% util) limits raw material pricing power.

### Daikin Industries (6367.T) — VERDICT: NOT AN AI/PTFE PLAY AT GROUP LEVEL

**Business**:
- Japanese industrial conglomerate; Nikkei 225 constituent; one of top 3 global fluoropolymer producers
- Air Conditioning + Refrigeration: ~90% of revenue
- Chemicals: ~10% of revenue (PTFE under "Polyflon" brand; melt-processable fluoropolymers under "Neoflon")

**Financials (FY ended March 2025)**:
- Chemicals segment revenue: JPY 263,028M (~USD 1.73B), -0.3% YoY
- Chemicals operating profit: JPY 46,119M, -10.4% YoY (weak demand LAN cable + semi equipment)
- FY2025 chemicals revenue +107% YoY (recovery), profits still pressured
- Group revenue FY2025: ~JPY 4.92 trillion (~USD 32B)
- Chemicals ~5.7-5.9% of total

**Market**:
- ~JPY 23,845/share
- Market cap ~JPY 6.48 trillion (~USD 43B) — mega-cap
- Degiro accessible

**GF claim**: "potential raw material supplier" = PLAUSIBLE but VAGUE. Daikin Chemicals sells specialty fluoropolymers + modified PTFE grades, but no confirmed Shengyi relationship; Daikin tends to serve Japanese/Western customers directly, China supply chains typically use domestic PTFE producers.

**Right-Side-of-Belka: 3/10**. Globally a real fluoropolymer innovator BUT at group scale PTFE is immaterial. **De facto irrelevant as AI/PTFE play**; this is an A/C company.

### Haohua Chemical Science & Technology (600378.SH) — VERDICT: INACCESSIBLE FOR DEGIRO RETAIL

**Business**:
- SOE subsidiary of ChemChina (中化集团); subsidiary 中昊晨光 is core PTFE/fluoropolymer unit
- Segments: high-end fluorine materials, electronic chemicals, high-end manufacturing chemicals, carbon reduction

**Capacity**:
- PTFE: 25,000-48,000 tonnes/year (variance reflects suspension vs total dispersion)
- Compares to Dongyue 55,000 tonnes
- National PTFE capacity ~230,000 t/y; industry utilization ~80%

**Financials**:
- 2024 revenue RMB 13,966M; net profit RMB 1,105M
- 2025 full-year net profit guidance: **RMB 1,380-1,480M (+31-40% YoY)** pre-announced Jan 2026
- H1 2025: revenue RMB 7,760M (+19.45%); net profit RMB 725M (+29.68%)
- Q1-Q3 2025: revenue RMB 12,301M (+20.50%); net profit RMB 1,232M (+44.57%)
- **Q2 2025: new 26,000 t/y high-performance organic fluorine materials project (FEP/PFA) started feed; expected +RMB 1.7B revenue + RMB 0.3B profit annually**

**Market**:
- RMB 27.96/share; market cap RMB 35.93B (~USD 5B)

**GF claim**: "potential PTFE supplier" = PARTIALLY SUPPORTED — 中昊晨光 publicly confirmed via investor Q&A as supplying PTFE for PCB substrate applications. No named Shengyi/CCL specific contract identified at T1.

**Investability CRITICAL FLAG**: ✗ **NOT accessible via Degiro retail** — Chinese A-share, no Northbound Stock Connect for Degiro retail. Exposure only via China-focused ETFs. **REFERENCE ARTIFACT ONLY.**

**Right-Side-of-Belka: 7/10 on business merits / 0/10 on investability**. Most PTFE-focused of the three on business; structurally inaccessible.

### Critical pricing claim verification (GF: RMB 150,000/ton modified PTFE)

- Standard PTFE China: **RMB 43,000-45,000/ton (~USD 6,000/MT)** as of Dec 2025
- Modified specialty grades: 3-5× premium possible
- GF's RMB 150,000/ton (~USD 20,800/ton) = **high end; niche semiconductor-grade or modified-dispersion product, NOT bulk resin**
- Likely refers specifically to certified Rubin-grade modified PTFE, not commodity PTFE
- **Unverifiable without primary GF note access**

### Critical supply tightness verification

- National PTFE capacity ~230,000 t/y; utilization ~80% = **no imminent raw material shortage**
- **REAL bottleneck = CCL fabricator tier (Shengyi M9 certification moat), NOT raw PTFE resin tier**
- Upstream resin suppliers face commodity pricing risk as multiple Chinese producers can supply standard PTFE
- The pricing power is at certified-semiconductor-grade material tier (narrow), not bulk PTFE

### Investability summary (raw material tier)

| Name | Accessibility | Business AI/PTFE purity | Verdict |
|---|---|---|---|
| Dongyue (0189.HK) | ✓ Degiro accessible | Moderate (PTFE secondary to refrigerants) | Cleanest accessible proxy BUT NOT pure-play AI |
| Daikin (6367.T) | ✓ Degiro accessible | Very low (~5.7% chemicals; PTFE sub-fraction) | Not meaningfully AI/PTFE play |
| Haohua (600378.SH) | ✗ NOT accessible | High (PTFE is core segment) | Reference artifact only |

### Subagent 3 conclusion

GF Securities' supplier chain claim is **directionally plausible but unconfirmed at T1**. Real supply chain bottleneck is at CCL fabricator (Shengyi M9 cert), not raw PTFE resin. **No upstream raw material supplier emerges as a clean accessible pure-play for European retail.** Dongyue is closest BUT refrigerants drive earnings, PTFE is option-value only.

---

## Subagent 1 (Rubin Ultra PTFE technical claim) — COMPLETE

**Workflow: claim-by-claim verification per source-tier hierarchy (T1 NVIDIA primary > T2 trade press / named supply-chain checks > T3 retail aggregator / unattributed social)**

### Verdict scorecard

| GF Claim | Verdict | Evidence |
|---|---|---|
| NVIDIA "CONFIRMED" PTFE primary for Rubin Ultra orthogonal backplane | **UNVERIFIED at T1** | NVIDIA disclosure (developer.nvidia.com blog) shows zero PCB material spec; "confirmed" framing is Chinese T3 retail aggregation |
| M9+Q-glass "FAILED" electrical standards | **CONTESTED** | One T2 supply-chain note ([JY Industry Insights Substack T2](https://substack.com/@jyresearch/note/c-181946991)) states **PTFE is the one that failed testing** — inverts GF thesis. Other T2 (CITIC, Dongwu, UGPCB) describe M9+Q-glass as primary with PTFE as hybrid upgrade |
| PTFE supports "337G+ SerDes" | **SPECULATIVE — invented precision** | NVLink 6 (Rubin H2 2026) = 224G PAM4; NVLink 7 (Rubin Ultra H2 2027) = 224-448G estimates; 337G in ZERO T1/T2 source |
| SiO₂-filler-modified PTFE solves drilling-burr | **DIRECTIONAL — materials science real, application speculative** | SiO₂-filled PTFE composites established approach (ScienceDirect); specific Rubin Ultra application not T1-confirmed |
| Hydrocarbon resin coating + direct copper foil lamination, no glass fiber | **SPECULATIVE structural claim** | Hydrocarbon resin CCL is real material class (MDPI polymer journal); specific structure for Rubin Ultra not T1/T2 confirmed |
| "July 2026" design freeze | **SPECULATIVE** | No T1/T2 source corroborates specific July date |
| "End 2026" midplane mass production | **LIKELY WRONG by 9-12 months** | NVIDIA + ServeTheHome + SemiAnalysis consensus: Q3 2027 mass production |
| Modified PTFE RMB 150k/ton; RMB 2,500/sheet | **UNVERIFIED specifics** | Standard PTFE China RMB 43-45k/ton; specialty 3-5× premium; specific GF figures unverifiable without primary note |
| 2027 Kyber PTFE CCL TAM ~RMB 8B | **SPECULATIVE single-source** | Dongwu cites RMB 9.9B for ALL Rubin quartz cloth; CITIC cites RMB 8-20B broader backplane; GF's PTFE-specific RMB 8B unverifiable |
| PCB-to-CCL value ratio 2-2.5x → 3-3.5x | **DIRECTIONAL sound, specifics unsourced** | Structurally plausible given layer count; specific ratios unverified |
| **78-layer PCB combining 3 × 26-layer boards (Kyber/Rubin Ultra)** | **✓ T2-CONFIRMED multi-source** | CITIC, Dongwu, ServeTheHome, SemiAnalysis all corroborate |

### Net verdict

GF Securities thesis is DIRECTIONALLY supported (PTFE share of CCL rising at Rubin Ultra tier) but contains SYSTEMATIC INVENTED PRECISION across specifics. Fails harness's "3 converging sources" threshold for SPECULATIVE → DIRECTIONAL promotion. One T2 source actively contradicts the M9-failed-PTFE-replaces framing.

## Subagent 2 (Shengyi + Taiflex CCL supply chain) — COMPLETE

### Shengyi Technology (600183.SH / 生益科技)

**Business**: World's #2 rigid CCL manufacturer (~13.7% global share 2024); Dongguan-headquartered; product of relevance = **S9G PTFE high-frequency CCL confirmed as supplier material for NVIDIA GB300** (Rubin gen) per multiple T2 Chinese sources (Eastmoney, Sina Finance, CITIC, Tianfeng). One of NVIDIA's 3 CCL certified suppliers globally; only mainland China name on that list.

**NVIDIA position**: M9 yield 90%, certification passed; M10 testing Q1 2026 active engagement (preliminary results Q2 2026; mass production H2 2027 if passed). Target: Kyber Rack housing Rubin Ultra NVL576 (576 GPUs, 600kW).

**Financials (FY2025)** per [STCN T2](https://www.stcn.com/article/detail/3809201.html) + [Sina Finance T2](https://finance.sina.com.cn/wm/2026-03-24/doc-inhscaes7380351.shtml):
- Revenue RMB 28.43 billion (FY2025)
- Net profit RMB 3.334 billion (+91.76% YoY)
- Q1 2026 revenue RMB 8.14 billion; net profit RMB 1.158 billion (+105.5% YoY)
- Market cap ~RMB 170 billion mid-May 2026
- Share price ~RMB 90 (52w range RMB 25.09-100.50)
- 1-year return ~+215%
- QFII holdings RMB 21.07 billion (highest in PCB sector)

**Investability**: ✗ **NOT accessible via Degiro** — Shanghai A-share; no HK H-share equivalent; Degiro doesn't offer Stock Connect for retail. **Reference artifact only.**

### Taiflex Scientific (8039.TW / 台虹科技)

**Business**: World's largest FCCL manufacturer (~11.3% market share value); Taipei-headquartered; TPEx-listed. Core: FCCL, coverlay, bonding sheet for FPC applications. **Strategic pivot to rigid CCL for AI server via "fabric-free" PTFE filler-type CCL** — fundamentally different architecture from Shengyi's quartz-cloth-reinforced M9/M10.

**NVIDIA position**: GF's "secondary supplier in certification" claim **could not be verified at T1 or clean T2**. What's verifiable: Taiflex's PTFE filler-type CCL achieves Df ~0.0007 (technically competitive); direct sampling/verification with "server end-customers" (NVIDIA not named explicitly); original engineering verification end-2025 NOW DELAYED; mass production target 2027 (not end-2026).

**CRITICAL DISAMBIGUATION RISK**: GF says "Taiflex Scientific (8039 TT)" but English-language M10 supply-chain coverage names **Taiwan Union Technology (台光電 6269.TW)** — different company. The Chinese names are 台虹 (Taiflex) vs 台光電 (Taiwan Union). User should verify which name appears in original GF note.

**Financials (FY2025)** per [Stockanalysis T2](https://stockanalysis.com/quote/tpe/8039/) + [Investing.com T2]:
- Revenue TWD 10.61 billion (+6.75% YoY) — modest growth, very unlike Shengyi's surge
- Market cap ~TWD 16.3 billion (~USD 495 million)
- Share price ~TWD 156 early June 2026

**Investability**: ⚠ **UNCERTAIN / LIKELY NOT ACCESSIBLE** — Taiwan TPEx not confirmed in Degiro published exchange list; even Taiwan TWSE main board access not confirmed for Degiro 2026. Verify directly on Degiro products-and-markets before assuming.

---

## SYNTHESIS — Full picture across all 3 subagents

### Net verdict on GF Securities thesis

1. **Directional truth**: PTFE share of CCL rising at Rubin Ultra tier — supported by multiple T2 Chinese sell-side (CITIC, Dongwu, Tianfeng) + at least one independent supply-chain note
2. **Systematic invented precision**: 337G SerDes, July 2026 design freeze, RMB 8B TAM, 2-2.5x → 3-3.5x ratios = unsourced or single-source specifics; appear to be analyst extrapolation dressed as confirmed
3. **Active contradicting signal**: JY Industry Insights T2 source states PTFE FAILED orthogonal backplane testing — situation is in flux, not resolved
4. **Timeline overstatement**: End-2026 mass production misrepresents consensus 2027 timeline by 9-12 months
5. **Highest-confidence element**: 78-layer Kyber PCB design is T2 multi-source confirmed

### Investability filter — SEVERELY narrows cohort for European retail (Degiro)

| Name | Ticker | Accessible? | AI/PTFE purity | Verdict |
|---|---|---|---|---|
| Shengyi Technology | 600183.SH | ✗ NO | High (primary CCL supplier candidate) | Reference only |
| Taiflex Scientific | 8039.TW | ⚠ Likely no | Lower (FCCL primary; AI CCL speculative); identity risk vs 6269.TW | Verify before action |
| **Dongyue Group** | **0189.HK** | **✓ YES** (HKEX €10 + 0.068%/trade) | Moderate (PTFE ~27%; **refrigerants drive 2025-26 earnings**, not PTFE) | Cleanest accessible BUT NOT pure-play AI; refrigerant story dominant |
| **Daikin Industries** | **6367.T** | **✓ YES** | Very low (Chemicals ~5.7%; PTFE sub-fraction; A/C dominates ~90%) | Not meaningful AI/PTFE play |
| Haohua Chemical | 600378.SH | ✗ NO | Highest (PTFE core) | Reference only |

**No clean pure-play accessible to European retail emerges from this cohort.**

### Right-Side-of-Belka scoring (only investable names)

| Name | Surface | Structural pivot | Moat | Binding constraint | Consensus lag | Score |
|---|---|---|---|---|---|---|
| Dongyue (0189.HK) | Refrigerant + fluoropolymer producer | Partial (PTFE option value on top of refrigerant cycle) | Real (largest PTFE producer China) | Partial (PTFE bottleneck contested; refrigerants binding) | Partial | 3/5 |
| Daikin (6367.T) | A/C conglomerate | Very partial (chemicals 5.7%) | Real but PTFE sub-fraction | Partial | None — Nikkei 225 mega-cap | 1.5/5 |

Neither passes the right-side-of-Belka filter strongly enough to compete with Hirano (5/5).

### Comparison to Hirano (the alternative entry)

| Vector | PTFE cohort (Dongyue best accessible) | Hirano Tecseed (6245.T) |
|---|---|---|
| Thesis verification | Directional T2, specifics overstated, contested by 1 T2 source | Verified Murata 30% MLCC CAGR through 2030; AI servers 10-15x MLCCs; April 2026 price hike 15-35% sticking |
| ATH framing | Dongyue near 12mo analyst target (HK$17.97 vs HK$17.75 spot) — limited consensus runway | Hirano ~50% below 2022 ATH (JPY 3,435) — structural rerating not started |
| Investability | Yes (Dongyue) | Yes |
| AI exposure purity | Moderate (PTFE secondary to refrigerants) | High (MLCC equipment tape-casting chokepoint) |
| Right-Side-of-Belka | 3/5 | 5/5 |
| Asymmetry EV (my model) | Modest (refrigerant cycle + PTFE option) | ~+110% over 24-36mo |

### Position implication (Critical Rule #11)

**Position implication:** GF Securities thesis does NOT shift the portfolio decision. Verification reveals:
1. Specific claims systematically overstated
2. Active contradicting signal in supply chain (PTFE may have failed orthogonal backplane test per JY Industry Insights)
3. Investability filter eliminates named cohort for European retail (Shengyi + Haohua inaccessible; Taiflex uncertain identity + accessibility; Dongyue refrigerant-driven; Daikin too diluted)
4. **Hirano Tecseed remains the verified MLCC equipment structural inflection play**

**NO additions to PTFE cohort** for European retail portfolio. Hirano case unchanged.

### Methodology note

This verification successfully applied:
- LLM-native multilingual capability (Chinese sources surfaced contested signal; Japanese verified Daikin scale)
- Principle #36 AI-native operating frame (3 parallel subagents ~15-20 min wall-clock)
- LLM-native-reasoning hook codified earlier today (no pretraining-default patterns fired in this synthesis)
- Anti-fabrication discipline (subagent findings committed to file before chat reference)
- B37 / analyst-PT-context discipline (treated GF as borrowed framing, verified independently)
