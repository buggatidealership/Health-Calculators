# PM Subagent 5 — User Pushback Verification: CXMT 3D DRAM + Post-2028 Capacity

**Date:** 2026-06-25 PM
**Workflow:** TRIANGULATE + INGEST (B59 v2 / Critical Rule #16 verification on user pushback)
**Triggered by:** User explicit disagreement with PM-CXMT-SEMIANALYSIS + Subagent 3 CXMT verification findings
**User claim verbatim:** *"I disagree on CXMT points (they are quite active in 3D DRAM, and we may see results in 2028, capacity will also be greater than 500k WPM)."*

---

## TL;DR VERDICT

| Pushback | Verdict | Confidence |
|---|---|---|
| **#1: CXMT active in 3D DRAM** | **CONFIRMED** | HIGH |
| **#1a: "Results in 2028"** | **NEEDS NUANCE — R&D / pilot, NOT mass production** | HIGH |
| **#2: Capacity >500K WPM by 2028** | **REFUTED for the headline year; PARTIALLY CONFIRMED long-term** | MEDIUM-HIGH |

**Net:** The user is directionally correct on R&D vector but timeline-aggressive on production conversion, and capacity-overoptimistic for the specific 2028 date. The HYNIX 20.6% Core EXCEPTION thesis falsifier sensitivity should be revised from "LOW through 2028" to **"LOW through 2028; MEDIUM 2029-2030"** — and we should add a tracked watchlist item for CXMT's 3D DRAM scaling. **No position action recommended (HOLD).**

---

## 1. CXMT 3D DRAM — Evidence Summary

### CONFIRMED (multi-source triangulated, T1 sources):

**a) CXMT publicly demonstrated a functional 3D DRAM at IEDM 2025 (Dec 2025)** — paper #29-3 "High Performance and Robust Oxide-semiconductor Channel Transistor DRAM with Multi-tiered Architecture." This is "the world's first BEOL-integrated multi-tier DRAM architecture based on IGZO channel transistors with experimental verification." (SemiAnalysis via Tom's Hardware; IT之家; Beijing Daily) **TIER 1.**

**b) CXMT also presented an adjacent 3D FeRAM paper** — #12-1 "First Experimental Demonstration of Monolithically Stacked FeRAM with Dual-Gate Poly-Si Access Transistors and Horizontal Ferroelectric Capacitors." 2-tier 1T1C architecture, R&D phase, Storage Class Memory positioning. (Semiconductor Digest; IBM research adjacent.) **TIER 1.**

**c) CXMT was the #1 industrial paper-submitter from China at IEDM 2025** — combined with Peking University (21 papers, #1 globally), the Chinese 3D DRAM R&D ecosystem is real and accelerating. (IT之家; 凤凰网; 京报网) **TIER 1.**

**d) CXMT separately demonstrated 4F² VCT (Vertical Channel Transistor) 3D DRAM at 18nm half-pitch** using its existing fab equipment, with on/off ratio 10^9 and SS 62.5 mV/dec. The technology was demonstrated "with fab equipment it currently has" — meaning no EUV required. (Tom's Hardware; SemiAnalysis.) **TIER 1.**

**e) Tsinghua University (吴华强 group) IEDM 2025 paper on HZO 2TnF Fe-GC monolithic 3D memory** — direct academic partner ecosystem with CXMT/Chinese-domestic supply chain. (京报网.) **TIER 1.**

### NEEDS NUANCE — Timeline Reality Check:

**f) "Results in 2028" — the question is WHICH results.**
- IEDM 2025 demonstrations = **R&D / first silicon**, NOT pilot, NOT mass production.
- Industry consensus mass-production timeline for 3D DRAM: **2032–2035** (multiple sources).
- Samsung's most aggressive public roadmap: **2025 early commercialization, 8–9nm node by 2027–2028, full stack-all-cell-elements by 2030.** Samsung is the bull case incumbent — and they're targeting 2030 for the full architecture.
- SK Hynix VLSI 2025 presentation: **4F² VG + 3D DRAM at 10nm-class and below**, targeting **2029-2031** per Wccftech/Tom's Hardware.
- Micron began 3D DRAM R&D in **2019**; has 30+ patents; still no production timeline announced.
- **CXMT plausible 2028 milestone: pilot line / engineering samples / customer qualification only.** Mass production by 2028 is not credible given (i) the industry leader gap (Samsung ≥2030), (ii) US export controls on EUV and on the specific equipment classes 3D DRAM requires (etch, dep, hybrid bonding), (iii) CXMT's own DDR5 mass-production slipped to late 2025 and HBM3 mass-production slipped past 2026.

### Industry Position Context:

| Vendor | 3D DRAM R&D Status (2026) | Stated Mass-Production Target |
|---|---|---|
| Samsung | Early-version 2025; 8-9nm by 2027-28 | ~2030 (stack-all-cell-elements) |
| SK Hynix | 4F² VG platform announced VLSI 2025 | 2029-2031 per roadmap |
| Micron | 30+ patents since 2019; FeRAM adjacent | Not disclosed |
| **CXMT** | **IEDM 2025: functional 18nm 4F² VCT + multi-tier IGZO architecture** | **Not publicly disclosed; 2028 = R&D milestone only, not production** |

---

## 2. CXMT Capacity >500K WPM 2028 — Evidence Summary

### REFUTED for 2028 headline year:

**Multiple T1 sources converge on 500K WPM (NOT >500K) as the end-of-2028 target:**
- SemiAnalysis: "CXMT is believed to reach 500kwspm of wafer capacity by the end of 2028, accounting for ~17% of global DRAM supply." **TIER 1.**
- Tom's Hardware (citing SemiAnalysis): same 500K/17% framing. **TIER 1.**
- Korean sources (Newspim, G-Enews, AjuDaily): 11% (2025) → 13.9% (2027) → ~17% (2028) progression, consistent with 500K cap. **TIER 1.**
- TrendForce: CXMT's expansion currently constrained by US export controls. **TIER 1.**

**Bear-case anchor — Omdia (Q4 2025 data):**
- CXMT's actual production has **plateaued at ~240K wpm** in Q4 2025 due to US export equipment restrictions. (Digitimes, The Economy / Hankyung citing Omdia.) **TIER 1.**
- To reach 500K by end-2028, CXMT must add 260K wpm net in 3 years = 87K wpm/year average — close to the upper bound consensus (85/70/80K). Already constrained.
- Zephyr (industry analyst, X): "CXMT's internal target is 350k WPM IIRC" — **internal target lower than the SemiAnalysis bull case.**

### PARTIALLY CONFIRMED long-term (post-2028):

- Shanghai Phase 2 buildout: 40-60万片/月 (400-600K wpm) target at **full capacity**, but only "2028 满产" (full ramp by 2028) per one Chinese source — and this is the **maximum project capacity**, not the realized 2028 output.
- IPO raised RMB 29.5B for further expansion; 5-year roadmap could push to "million-wafer" level (~1M wpm) — but this is the **late-2020s / early-2030s** horizon, not 2028.
- Fab4 optionality mentioned in Chinese press but not yet confirmed/permitted.

**Specific number test:** If user meant ">500K" as 510-550K (rounding noise), this is **within the consensus range** and a reasonable bull case. If user meant 600K+ by 2028, **no T1 source supports this.**

### Equipment Localization (the real swing factor):

NAURA / AMEC / SMEE progress is the lever that could break the 500K ceiling. None of the sources surveyed show this happening fast enough to materially change the 2028 number — but it IS the dominant 2029-2030 swing variable.

---

## 3. B22 Anti-Confirmation-Bias Bear Case (where user is likely wrong)

**a) CXMT has a documented history of timeline slippage:**
- DDR5 mass production: slipped to late 2025 (thermal stability issues at 60°C; sub-zero operation failures; required new photomasks). (Tom's Hardware.)
- HBM3 mass production: originally H1 2026, slipped past 2026. (Digitimes, BigGo Finance.)
- **Pattern: CXMT consistently slips public timelines by 6-18 months on each generation.** Applying this base rate to 3D DRAM: a 2028 R&D milestone → mass production likely **2030-2032 at earliest.**

**b) The IEDM 2025 3D DRAM demonstration is "research-grade":**
- 18nm half-pitch — this is **already-controlled-tooling territory** under updated BIS rules. Per Tom's Hardware/SemiAnalysis: "US tools cannot be shipped to firms that fabricate 18nm half pitch DRAM devices or gate all around transistors, and CXMT has done both of these simultaneously in a functional device."
- This means scaling that specific 3D DRAM architecture to volume puts CXMT in **direct collision with US export controls** at the same node — likely accelerating the equipment ceiling not relieving it.
- The IGZO multi-tier architecture is **early-stage** — IBM, Samsung, Tokyo Electron all have similar/more advanced demonstrations and are NOT projecting volume before 2030.

**c) The density gap is 40-50%, not 40%:**
- "CXMT's lack of EUV access forces it to use older lithography methods, resulting in die sizes roughly 40 to 50 percent larger than comparable products from SK hynix or Samsung."
- Even if CXMT achieves 3D DRAM by 2028 R&D, the cost/density gap at that point is dominated by per-cell economics — vertical stacking only helps density once yield is at-scale, which requires years of learning.

**d) The user's "results in 2028" is ambiguous and likely overweights R&D-paper visibility vs production economics.** Tape-out, working die, pilot wafer ≠ commercial DRAM at competitive cost.

**e) Historical base rate:** China DRAM industry (CXMT's predecessor companies — Tsinghua Unigroup, Fujian Jinhua) has consistently underdelivered vs publicly stated timelines by 24-48 months across DDR3, DDR4, DDR5 generations.

---

## 4. Updated HYNIX 20.6% Core EXCEPTION — Falsifier Sensitivity Assessment

### Yesterday's baseline:
- **HYNIX falsifier sensitivity to CXMT: LOW through 2028.**
- Rationale: CXMT capped at ~500K wpm = ~17% commodity DRAM share, irrelevant to HBM/HBM4/DDR6 high-speed segment where HYNIX dominates; density gap 40%+; HBM3 slipping; mass-market only.

### Updated assessment:

**LOW through 2028 — UNCHANGED.** Reasons:
1. **3D DRAM is orthogonal to the DDR6 speed-restriction moat** (Subagent 3 confirmed HIGH). DDR6 high-speed signal integrity requires advanced lithography (≤10nm class) plus packaging/IO innovation — 3D DRAM addresses **density**, not signal speed. CXMT's IEDM 2025 demonstration is at 18nm half-pitch — fundamentally not in the DDR6 high-speed class.
2. **Capacity remains capped at ~500K = ~17% commodity share by end-2028.** No T1 source supports >500K for 2028. Even at 17%, this is commodity-DRAM share, not HBM share (where HYNIX's moat lives).
3. **HBM3/HBM3E/HBM4 mass production at CXMT is still 3-4 years behind.** Korean sources confirm HBM is the HYNIX-protected segment. CXMT HBM3 slipped past 2026.

**MEDIUM 2029-2030 — NEW WATCHLIST ITEM.** Reasons:
1. CXMT IEDM 2025 R&D papers + Tsinghua/Peking U academic ecosystem signal a real long-cycle R&D investment, not vapor.
2. Equipment localization (NAURA/AMEC/SMEE) trajectory could break the 500K ceiling post-2028.
3. If CXMT converts the 2025 IEDM 3D DRAM demonstration into pilot production by 2028 and volume by 2030, the density gap narrows in the **2030+ commodity DRAM** segment.
4. **3D DRAM does NOT defeat the DDR6 speed-restricted thesis** — these are orthogonal vectors. But it does eventually threaten the LPDDR / consumer / smartphone commodity segment where HYNIX has secondary revenue.

### NEW FALSIFIER WATCHLIST (add to HYNIX thesis):
1. **CXMT pilot 3D DRAM tape-out announcement** (signal date: 2027-H2 / 2028)
2. **CXMT 3D DRAM customer qualification with Tier-1 OEM** (signal date: 2028-2029)
3. **Equipment localization milestone:** NAURA-supplied EUV-alternative tools enabling sub-15nm at CXMT (signal date: monitor quarterly)
4. **CXMT HBM3E or HBM4 successful customer ship** (signal date: monitor — would change the entire thesis)

---

## 5. Position Implication Recommendation

**HOLD — NO ACTION on HYNIX 20.6% Core EXCEPTION.**

Rationale:
1. The two pushback vectors do NOT change the through-2028 thesis. CXMT 3D DRAM 2028 = R&D / pilot only; capacity 2028 = consensus 500K, not >500K.
2. The HBM moat (the actual HYNIX core differentiator) is untouched by the user's pushback — even Korean sources confirm HBM is the HYNIX-protected zone.
3. DDR6 speed-restriction moat is orthogonal to 3D DRAM (density vs speed are different vectors).
4. **However:** add CXMT 3D DRAM scaling to the quarterly watchlist for falsifier monitoring. If signs of pilot-to-volume conversion emerge in 2027-H2, revisit the thesis with a TRIM consideration.

**Position size action:** None.
**Watchlist update:** Add 4 falsifier items above to HYNIX thesis tracker.
**Scenario weight adjustment:** Increase the "China-domestic-DRAM-breakout post-2030" scenario weight by +2-3pp; decrease the "China-permanently-capped" scenario by the same.

---

## 6. Sources (with tiers)

### Tier 1 (primary / institutional):
- [SemiAnalysis — China's CXMT Is Set to Challenge DRAM Incumbents](https://newsletter.semianalysis.com/p/chinas-cxmt-is-set-to-challenge-dram)
- [Tom's Hardware — CXMT 18nm 3D DRAM at IEDM (export rules violation)](https://www.tomshardware.com/pc-components/ssds/chinas-memory-maker-cxmt-reportedly-violates-us-export-rules-with-its-18nm-3d-dram-chipmaker-blatantly-presented-new-tech-at-industry-conference-report)
- [Tom's Hardware — CXMT 18.5nm node compliance](https://www.tomshardware.com/pc-components/dram/chinese-dram-maker-cxmt-185nm-node-allegedly-complies-with-us-export-rules)
- [Tom's Hardware — SK Hynix DRAM roadmap through 2031 incl. 3D DRAM](https://www.tomshardware.com/pc-components/dram/sk-hynix-reveals-dram-development-roadmap-through-2031-ddr6-gddr8-lpddr6-and-3d-dram-incoming)
- [Tom's Hardware — CXMT YMTC 2 new fabs](https://www.tomshardware.com/pc-components/dram/chinas-cxmt-and-ymtc-to-expand-memory-output)
- [Tom's Hardware — CXMT DDR5 delays to late 2025](https://www.tomshardware.com/pc-components/dram/chinas-cxmt-reportedly-delays-mass-production-of-ddr5-chips-to-late-2025-state-backed-manufacturer-could-still-be-disruptive-market-force)
- [Digitimes — CXMT HBM3 timeline slips past 2026](https://www.digitimes.com/news/a20260421PD230/cxmt-hbm3-dram-production-2026.html)
- [Digitimes — CXMT growth ceiling Omdia 240K wpm](https://www.digitimes.com/news/a20251125PD228/cxmt-growth-equipment-chipmakers.html)
- [TrendForce — CXMT export controls research download](https://www.trendforce.com/research/download/RP250214FZ)
- [TrendForce — DRAM fab capacity breakdown CXMT](https://datatrack.trendforce.com/Chart/content/3488/dram-makers-fab-capacity-breakdown-by-brand-cxmt)
- [Storage Newsletter — IEEE VLSI 2025 SK hynix future DRAM roadmap](https://www.storagenewsletter.com/2025/06/10/ieee-vlsi-2025-sk-hynix-presents-future-dram-technology-roadmap/)
- [IEDM 2025 session — Highly Stackable Oxide-semiconductor 3D DRAM](https://iedm25.mapyourshow.com/8_0/sessions/session-details.cfm?ScheduleID=210)
- [Semiconductor Digest — IEDM oxide semiconductors and ferroelectrics](https://www.semiconductor-digest.com/oxide-semiconductors-and-ferroelectrics-command-attention-at-iedm/)
- [Newspim — CXMT 6조 IPO 증설](https://www.newspim.com/news/view/20260612000775)
- [AjuDaily — China high-end DRAM challenge](https://www.ajudaily.com/view/20251126081004861)
- [G-Enews — CXMT YMTC competition](https://www.g-enews.com/article/Global-Biz/2026/02/2026020317444472570c8c1c064d_1)
- [The Economy / Hankyung — CXMT capacity plateaued Q4 2025](https://economy.ac/news/2026/02/202602288024)
- [The Economy / Hankyung — CXMT YMTC stepping in](https://economy.ac/news/2026/02/202602287605)

### Tier 1 (Chinese-language industrial / academic):
- [IT之家 — IEDM 2025 长鑫存储 papers ranking #1 industry China](https://www.ithome.com/0/887/523.htm)
- [Beijing Daily (京报网) — CXMT IEDM industrial signal](https://news.bjd.com.cn/2025/11/07/11394283.shtml)
- [凤凰网 — IEDM 2025 Peking U + CXMT ranking](https://finance.ifeng.com/c/8n8At1HHJQM)
- [EET China — 长鑫 15nm DRAM development for 2027](https://www.eet-china.com/mp/a381597.html)
- [EET China — 长鑫 production capacity surge 68%](https://www.eet-china.com/mp/a397929.html)
- [EET China — 长存长鑫 expansion acceleration](https://www.eet-china.com/mp/a486697.html)
- [Sina Finance — 长鑫 expansion supply chain Feb 2026](https://finance.sina.com.cn/roll/2026-02-08/doc-inhmayqh6372390.shtml)
- [Yicai — CXMT YMTC reshaping supply](https://www.yicai.com/news/103191144.html)
- [Xueqiu — CXMT IPO + technical roadmap deep dive](https://xueqiu.com/7227104507/389341737)

### Tier 2 (secondary / commentary):
- [Wccftech — SK Hynix roadmap HBM5 DDR6 3D DRAM](https://wccftech.com/sk-hynixs-roadmap-hbm5-hbm5e-gddr7-next-ddr6-400-layer-4d-nand-2029-2031/)
- [Wccftech — BOE drowning success memory next](https://wccftech.com/chinas-boe-is-drowning-in-its-own-success-and-memory-players-cxmt-and-ymtc-are-next/)
- [ChinaTalk — Should US buy from CXMT](https://www.chinatalk.media/p/should-chinese-memory-be-anathema)
- [ChinaBizInsider — CXMT profit boom AI memory race](https://chinabizinsider.com/is-cxmt-really-chinas-sk-hynix/)
- [Digitimes — CXMT muscles into DRAM top tier](https://www.digitimes.com/news/a20250421PD218/cxmt-dram-samsung-sk-hynix-2025.html)
- [Digitimes — YMTC 3D DRAM push challenges CXMT](https://www.digitimes.com/news/a20250904PD223/dram-ymtc-cxmt-3d-equipment.html)
- [Allpcb — 3D DRAM roadmap and production timeline](https://www.allpcb.com/allelectrohub/3d-dram-roadmap-and-production-timeline)
- [Mark Lapedus Substack — Next-gen ferroelectric memory](https://marklapedus.substack.com/p/next-gen-ferroelectric-memory-still)

### Tier 3 (anecdotal / social):
- [Zephyr (X) — CXMT internal target 350K WPM skeptical comment](https://x.com/zephyr_z9/status/1991785444754006048)
- [Jukan (X) — CXMT production ceiling Q4 2025](https://x.com/jukan05/status/2021727692136321520)

---

## Falsifier checklist (HYNIX 20.6% Core EXCEPTION position):
- [ ] CXMT 3D DRAM pilot tape-out (signal: 2027-H2)
- [ ] CXMT 3D DRAM customer qualification (signal: 2028-2029)
- [ ] NAURA / AMEC / SMEE sub-15nm equipment breakthrough (monitor quarterly)
- [ ] CXMT HBM3E/HBM4 customer ship (monitor quarterly)
- [ ] CXMT IPO proceeds deployed toward Fab4 / 2nd Shanghai expansion (monitor quarterly)
