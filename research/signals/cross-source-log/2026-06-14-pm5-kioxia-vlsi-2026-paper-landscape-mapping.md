# 2026-06-14 PM5 — Kioxia VLSI Symposium 2026 paper landscape mapping (Step 0 of approved Kioxia plan); T1.4 MSA-CBA joint Kioxia+Sandisk paper CONFIRMED as load-bearing event; Samsung TFS1.3 900L CMB June 16 = comparison bar threat; 3 undisclosed Kioxia papers = H3 wildcards

**Workflow:** Workflow #5 GRADE preparation (Step 0 of approved plan in `/root/.claude/plans/enumerated-tickling-hartmanis.md`); single research subagent fan-out with native-jp source mandate.

**Trigger:** User authorization 2026-06-14 22:25 UTC verbatim *"lets do kioxia. you have full authority"* + approved plan execution.

**Linked:** `research/predictions/2026-06-12-KIOXIA-VLSI-symposium-pre-registration.md` (pre-registered H1-H4 with B45 correction); `research/predictions/grading-log.md` (status PENDING; T+24h resolution ~2026-06-19).

## 1. Kioxia paper inventory at VLSI Symposium 2026 (research-verified 2026-06-14 PM5 T1/T2)

| Session | Paper | Authors | Source-tier | Status |
|---|---|---|---|---|
| **T1.4** | "A Multi-Stacked Cell Array Architecture with Wafer-to-Wafer Cu Direct Bonding for Ultra-High-Density 3D Flash Memory beyond 1,000 Word Lines" | **M. Noda et al, Kioxia + Sandisk joint** | T1 ([VLSI 2026 Technical Tipsheet](https://www.vlsisymposium.org/wp-content/uploads/2026/04/2026-VLSI-Technical-Tipsheet-REVISED-FINAL-4.25.26-1-1.pdf)) | **CONFIRMED — load-bearing event** |
| TFS1 (sub-session TBD) | Kioxia paper(s) in 3D Memory (Flash/HBM) track | Unknown | T2 [EE Times Japan](https://eetimes.itmedia.co.jp/ee/articles/2605/08/news043.html) | Titles NOT publicly disclosed |
| SC2 Short Course | "Advanced VLSI Technologies for Next Generation Computing" — S. Fujii (Kioxia) + Y. Liang (NVIDIA) co-organizers | Organizer role, not research paper | T1 vlsisymposium.org | CONFIRMED |
| Friday Forum | Organizer role | S. Fujii, Kioxia | T1 vlsisymposium.org | CONFIRMED |

**Paper count context:** [EE Times Japan 2026-05-08](https://eetimes.itmedia.co.jp/ee/articles/2605/08/news043.html) + [Mynavi VLSI 2026 Preview Part 3](https://news.mynavi.jp/techplus/article/vlsi2026-3/) report Kioxia had MOST accepted papers among Japanese companies in Technology track — approximately 4 papers total. Only T1.4 has a publicly disclosed title; the remaining 3 titles are behind the program paywall — this is the **H3 wildcard source** for the post-event grade.

**B40.1 temporal-freshness check:** T1.4 title confirmed via tipsheet published 2026-04-25 + T2 trade press 2026-04-30 to 2026-05-04. Current as of 2026-06-14 — NOT stale-recycle.

## 2. Joint MSA-CBA paper status — VERIFIED (pre-registration correct)

T1.4 IS the joint Kioxia + Sandisk Yokkaichi-JV paper the pre-registration flagged. Technical substance per T1 tipsheet + T2 confirms:

- **Architecture:** Two 218-word-line array wafers bonded via Cu wafer-to-wafer direct bonding → effective 436+ WL structure
- **Challenges solved (claimed):** cell current degradation across bonded stack; wafer warpage during bonding; large block size constraints
- **Achievement:** stable threshold voltage characteristics; reliable QLC (4 bits/cell) operation demonstrated on MSA-CBA — WORLD-FIRST
- **Path claimed:** roadmap to 1,000+ word lines + 100 Gbit/mm² die density by ~2027
- **Current density benchmark:** 37.6 Gb/mm² claimed at BiCS10 (332-layer) — highest reported NAND bit density per SemiAnalysis ISSCC 2026 coverage (per [TrendForce 2026-05-04 T2](https://www.trendforce.com/news/2026/05/04/news-kioxia-sandisk-to-demonstrate-qlc-nand-using-multi-stacked-cell-architecture-targeting-1000-layers/))

## 3. HBF (High Bandwidth Flash) status at VLSI 2026 — NOT IN PUBLIC PROGRAM

**No confirmed HBF-specific Kioxia paper in public VLSI 2026 program as of 2026-06-14.** This is a NEGATIVE FINDING and important for H3 calibration.

What's separately confirmed (NOT at VLSI 2026):
- Kioxia HBF prototype 5TB/64GB/s announced 2025-08-20 (NEDO-funded, PCIe 6.0 daisy-chain, 128 Gbps PAM4 per link) per [Tom's Hardware T2](https://www.tomshardware.com/pc-components/gpus/kioxias-new-5tb-64-gb-s-flash-module-puts-nand-toward-the-memory-bus-for-ai-gpus-hbf-prototype-adopts-familiar-ssd-form-factor)
- Kioxia GP Series SSD: 10M IOPS Q3 2026 / 100M IOPS 2027 target for NVIDIA Storage-Next, announced 2026-03-16 per [Kioxia IR T1](https://americas.kioxia.com/en-us/business/news/2026/ssd-20260316-1.html)

**Implication:** HBF AI-training-tier qualification is a live PRODUCT-track event but does NOT appear in VLSI 2026 paper title disclosed. The 3 undisclosed Kioxia papers COULD include HBF-adjacent circuit work but unverified pre-presentation. H3 trigger probability not increased on HBF specifically until Day 1-2 reveals.

## 4. 3D NAND layer count progression — cross-vendor joint state

| Vendor | Current Gen | Layers | Interface | Bonding | Notes |
|---|---|---|---|---|---|
| **Kioxia** | BiCS10 | 332L | 4.8 Gbps | CBA (cell-on-array bonding) | 59% density gain vs BiCS8; 37.6 Gb/mm² (highest reported) |
| **Kioxia MSA-CBA demo** | VLSI 2026 paper | 2×218L bonded (436+ effective) | — | MSA-CBA | World-first QLC on stacked; path to 1,000+ WL |
| Samsung | V9 | 286L (2-deck) | — | Peripheral Under Cell | V10 targeting 400+L |
| **Samsung CMB demo** | TFS1.3 June 16 | **2×450L = 900L prototype** | — | CMB / hybrid bonding | THE COMPARISON BAR — see §6 |
| SK Hynix | Gen 9 / V9 | 321L (3-plug) | — | Hybrid bonding planned V10 | V10 = 375L (revised from 400L), tungsten→molybdenum, mass prod end-2026 |
| Micron | G9 | 276L (2-deck) | — | — | Highest bit density per deck; lowest cost structure |

Sources: [EE Times Japan BiCS10 article 2026-06-04 T1-adjacent](https://eetimes.itmedia.co.jp/ee/articles/2606/04/news061.html); [TrendForce 400L race 2026-06-12 T2](https://www.trendforce.com/news/2026/06/12/news-the-race-to-400-layer-nand-roadmaps-and-key-technologies-driving-samsung-sk-hynix-and-kioxia/); [TrendForce SK Hynix 375L 2026-06-11 T2](https://www.trendforce.com/news/2026/06/11/news-sk-hynix-advances-dram-and-nand-roadmap-targets-3x-wafer-output-by-2034-375-layer-nand-at-year-end/).

**Critical positioning read:** Kioxia 332L sits between SK Hynix 321L and Samsung V9 286L in raw production count, but CBA architecture decouples peripheral CMOS from cell array enabling higher EFFECTIVE density. The MSA-CBA demo paper shows the PATH BEYOND current production — not a claim of current leadership.

## 5. Samsung TFS1.3 CMB 900L paper — the comparison-bar threat (June 16, 3:25-5:30 PM)

Per [VLSI 2026 MapYourShow TFS1.3 T1](https://vlsi26.mapyourshow.com/8_0/sessions/session-details.cfm?ScheduleID=331) + [Samsung CMB TechPowerUp T2](https://www.techpowerup.com/349347/samsung-stacks-two-450-layer-nand-chips-into-a-900-layer-v-nand):

- "Demonstration of Cell Multi-Bonding (CMB) Technology for Future Vertical NAND over 1k-Layer" — Jeehoon Han et al
- Two 450-layer V-NAND wafers bonded → 900-layer prototype via CMB/hybrid bonding
- **Same TFS1 session as undisclosed Kioxia papers** — direct head-to-head visibility

**Narrative risk for Kioxia:** media may frame as "Samsung 900 vs Kioxia 436" — missing that Kioxia's differentiator is QLC OPERATION RELIABILITY on stacked array (world-first), not raw layer count maximalism. This is the **PRIMARY H2/H4 channel** — not actual technical failure but framing-loss to a bigger Samsung number.

## 6. H1-H4 trigger map (operational signals to watch Day 1-2)

| Hypothesis | Prior (B45-corrected) | Trigger pattern | Specific signal to watch |
|---|---|---|---|
| **H1** L14 holds; T+24h muted | 40% | T1.4 matches tipsheet preview exactly; no incremental disclosure; HBF not mentioned; no new roadmap dates | Q&A reveals nothing beyond pre-published tipsheet; no specific hyperscaler customer names |
| **H2** Expectations exhausted; T+24h 0 to -15% | 30% | Samsung CMB 900L dominates press coverage; "Samsung > Kioxia layers" narrative; no production timeline acceleration from Kioxia Q&A | Tech press headlines lead with Samsung 900L; Kioxia coverage secondary; SK Hynix 375L roadmap competes for attention |
| **H3** Catalyst surprise; T+24h +5 to +15% | 20% | One of 3 undisclosed Kioxia papers covers HBF AI-training qualification, AI-direct memory I/O, CXL/PCIe6 interface, OR Q&A reveals MSA-CBA production timeline EARLIER than 2027 | Watch for: (a) HBF mentions in any Kioxia session; (b) hyperscaler customer names in Q&A; (c) MSA-CBA production date earlier than 2027 |
| **H4** Catalyst disappointment; T+24h -5 to -10% | 10% | T1.4 Q&A reveals severe yield or warpage issues; block size remains too large for practical use; 3 undisclosed papers unrelated to AI memory | Red flag: M. Noda Q&A cannot specify block size reduction OR wafer yield data is not disclosed |

**Load-bearing event:** T1.4 is primary; 3 undisclosed papers are H3 wildcards — uncertainty in their titles is dominant source of forecast variance.

## 7. N-th order cascade implications

- **1st order (P>85%):** Kioxia T+24h price reaction at 285A.T directly observable June 17-19; magnitude per H1-H4 trigger map
- **2nd order (P~65%):** SNDK (held) correlated price-reaction within 24-48h via joint-state Yokkaichi-JV; SNDK thesis update if material new data (especially if HBF qualification or production timeline acceleration); downstream beneficiary if H3 fires = HBF-adjacent architecture suppliers
- **3rd order (P~45%):** If H3 catalyst surprise fires and Kioxia announces HBF AI-training qualification, ripples to TC-1 memory-tightness cluster (N+1 confirmation that supply-tightness mechanism extends to NAND tier via HBF) + provides FIRST credible 18-month bypass route for HBM-tier scarcity that 2026-06-14 PM2 deep-dig confirmed didn't exist; downstream casualty = pure-HBM premium pricing power if HBF substitutes at training tier
- **4th order (P~25%):** If HBF demonstrates training-tier qualification, partially compresses U8 forward-trajectory because alternative-architecture demand absorbs some efficiency-gain-driven HBM compression; cross-correlates to SNDK upside via HBF revenue ramp; downstream beneficiary = SNDK held position; downstream casualty = HYNIX HBM-tier rent dilution risk modestly elevated (offset by HYNIX DDR5 half-hedge per 2026-06-14 PM4 cascade)

## 8. Day 1-2 monitoring protocol (June 14-15 JST + ongoing)

**Day 1 (Sunday June 14) — Pre-symposium:**
- Watch: Kioxia/Sandisk press release confirming T1.4 presentation
- Sources: [americas.kioxia.com news](https://americas.kioxia.com/en-us/business/news/) + [sandisk.com newsroom](https://www.sandisk.com/company/newsroom/)
- Watch: SC2 short course disclosure of BiCS10 production status or HBF detail

**Day 1-2 (June 14-15) — T1 Technology sessions:**
- Signal A (H3): Q&A reveals hyperscaler customer engagement for MSA-CBA product; production timeline earlier than 2027
- Signal B (H4): Q&A reveals block size problem not resolved; yield data absent
- Signal C (H1): Presentation matches tipsheet preview exactly; no new data

**Day 2 (June 15-16) — TFS1 joint session (Samsung TFS1.3 lands June 16 3:25-5:30 PM):**
- Watch press framing: "Samsung 900L vs Kioxia 436L" (H2 risk) or "Kioxia QLC operation first achieved" (H3-leaning)
- Monitor: EE Times Japan live coverage; Mynavi Techplus; TechPowerUp; AnandTech/Tom's Hardware

**Undisclosed Kioxia papers — listen for:**
- XL-Flash / SLC NAND for AI inference
- CXL / PCIe Gen6 interface circuits
- HBF module architecture
- These would be H3 wildcards

**Grade resolution trigger (June 19):** primary input = T1.4 full presentation + Q&A disclosure + Samsung TFS1.3 press framing + 285A.T opening price 2026-06-19 vs 2026-06-13 close.

## 9. Cross-cohort joint-state matrix (per priming item 2)

| Held name | VLSI exposure | If H1 (40%) | If H2 (30%) | If H3 (20%) | If H4 (10%) |
|---|---|---|---|---|---|
| **SNDK (held)** | Co-author T1.4; joint-state partner | Neutral; thesis unchanged | Mildly negative correlation; -2-5% | Strong positive if HBF qualification disclosed; +5-10% | Mild negative correlation; -2-5% |
| **HYNIX (held)** | Indirect — competing NAND tier reads | Neutral | Neutral | Mild negative if HBF-tier substitutes HBM at training; -1-3% | Neutral |
| **KIOXIA (watchlist)** | Direct subject | Muted T+24h | -5 to -15% | +5 to +15% | -5 to -10% |
| MURATA / SUMCO / MRVL / DDOG / NOW | Indirect | Neutral | Neutral | Neutral | Neutral |

## 10. Source gaps + confidence assessment

| Claim | Confidence | Source gap |
|---|---|---|
| T1.4 paper confirmed | HIGH | Official tipsheet + multiple T2 |
| 3 additional undisclosed Kioxia papers exist | MEDIUM | EE Times JP + Mynavi; exact number 2-5 papers depending on source |
| Titles of 3 undisclosed papers | NOT KNOWN | Behind VLSI program paywall — DOMINANT H3 uncertainty source |
| HBF paper at VLSI 2026 | NOT CONFIRMED | No T1/T2 source mentions HBF VLSI 2026 paper specifically — H3 wildcard primary unknown |
| Samsung TFS1.3 = June 16 3:25-5:30 PM | HIGH | MapYourShow T1 |
| SK Hynix flash paper at VLSI 2026 | NOT FOUND | SK Hynix VLSI focus appears to be DRAM/HBM not flash |

**Overall confidence in paper landscape: 65-70%.** T1.4 solid; 3 undisclosed papers are dominant forecast variance source.

## 11. Cascade executed (same commit)

- This cross-source-log: `2026-06-14-pm5-kioxia-vlsi-2026-paper-landscape-mapping.md`
- `companies/SNDK/thesis.md` — back-reference + position implication (Yokkaichi-JV partner; HBF JV optionality watch)
- `companies/KIOXIA/thesis.md` — back-reference + position implication; pre-T+24h state
- `predictions/grading-log.md` — paper-landscape status note; T+24h resolution pending June 19

Full subagent transcript (ephemeral): `/tmp/claude-0/-home-user-Health-Calculators/ba793459-a1d5-5925-b849-49e303cf10e0/tasks/a4e8e044e08337022.output`
