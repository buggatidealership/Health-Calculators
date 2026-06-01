# Portfolio Changes Log

**Last updated:** 2026-06-01

Append-only log of buys, sells, sizing changes. Format:

```
[YYYY-MM-DD] ACTION {TICKER} — size change, reasoning, linked-thesis-version
```

## Log

[2026-06-01] BUY MDB (MongoDB) — NEW POSITION entered at ~€10,000 (user-confirmed verbal report). Aligned with `companies/MDB/thesis.md` (2026-05-29 build): integrated embedding-to-retrieval moat post-Voyage AI acquisition; cRPO +69% YoY Q1 FY27 leading indicator (per [MDB 8-K T1 SEC](https://www.sec.gov/Archives/edgar/data/0001441816/000162828026013199/mdb-13126xex991xrelease.htm)); vector customers "nearly doubled YoY" per CEO; least overlap with held NOW + DDOG of 3 vector-DB candidates evaluated. **Sizing note**: original recommendation was 3-4% (€5-6K initial) per thesis file with SIZE UP gated to 5-7% on Q2 FY27 print (Sept 2026); €10K execution = ~5.7% of consolidated portfolio = above initial recommendation, within SIZE UP band. User decision to upweight at entry vs gated post-Q2 raise. BEP / share count pending Degiro confirmation.

[2026-05-25] PORTFOLIO REBALANCE (per user screenshot @5c01b086-23484.jpg)

Cash deployed: ~€21,800 (cash €51,673 → €29,867). Total portfolio value €82,544 → €110,396. Total P/L improved +€15,396 → +€21,441 (driven by both new deployment + position appreciation).

Position changes vs prior 2026-05-20 holdings:

[2026-05-25] BUY MURATA (6981.T) — increased from ~€10,247 → €18,509 position (~+€8,262 cash deployed; 12.4% → 16.77% of portfolio). Aligned with Physical AI primer multi-narrative overweight recommendation (`wiki/physical-ai-primer.md` 2026-05-25: 40% global MLCC share + auto 30% revenue + BEV 3-5K MLCCs structural tailwind). BEP €32.71. Position now LARGEST in portfolio.

[2026-05-25] BUY DDOG — increased from ~€5,611 → €11,460.96 position (~+€5,400 cash deployed; 6.8% → 10.38% of portfolio). Aligned with agentic-AI observability thesis + Google I/O 2026 Antigravity 2.0 multi-agent default UX validation. BEP $203.37. Position roughly doubled.

[2026-05-25] BUY SMTC (NEW POSITION) — entered at €6,728 (6.09% of portfolio). Active Copper Cables hyperscaler design wins + signal integrity AI datacenter thesis per `companies/SMTC/thesis.md` (2026-05-21). User's independent thesis layer — entered above the 2-3% candidate target stated in thesis file. BEP $154.68. Worth reviewing whether the higher entry weight reflects updated conviction.

[2026-05-25] BUY HYPERLIQUID — increased from ~$5,119 → $9,092 position (~+€3,300 deployed; 5.7% → 8.24% of portfolio). User's active position decision; off-AI-thesis per `portfolio/holdings.md` framing. Currently at -7.9% unrealized (only losing position). BEP $8.32 vs current $7.66.

[2026-05-25] SELL T1 ENERGY (TE) — small reduction from €5,890 → €5,320 (~€570 trimmed; 7.1% → 4.82% of portfolio). Reason not stated in screenshot; likely either tax-loss harvesting (T1 was +18.6% unrealized though, so not loss harvest) OR rebalance toward higher-conviction names. BEP €5.90 vs current €7.00.

Other positions (HYNIX, NOW, GLW, SNDK, STM, AXT, TSEM): largely flat in absolute terms; % shifts driven by other positions growing relative to portfolio.

Verifications:
- Murata overweight executed ✓ (per `wiki/physical-ai-primer.md` recommendation)
- DDOG overweight executed ✓ (per `signals/events/2026-05-20-google-io-2026.md` 1st-order strengthened)
- STM overweight NOT executed — STM relative weight actually slightly down (5.51% vs 6.6% prior). Question for user: intentional hold OR pending review?
- ISRG / HDS / Nabtesco / Sony / AVGO additions NOT executed — these remain watchlist candidates with ~€29,867 cash dry powder for next sizing matrix.

---

## PLANNED — pending US market open 2026-05-26

[2026-05-25 PLANNED] BUY HDS (Harmonic Drive Systems, 6324.T or ADR HSCMY) — **€10,000 planned entry** at next US market open. New position. At current portfolio size ~€110,396, this would be a ~€10K / ~€125K post-trade portfolio ≈ ~roughly 8% of portfolio (computed). Aligned with revised recommendation post-salience-bias catch (`sector/where-we-are.md` 2026-05-24 harness observation: HDS as first-pick over Nabtesco — 60% global harmonic drive share, semi cap-equip dual-narrative, pricing-power preservation via no announced capacity expansion). Above prior 3-5% rough robotics-primer target; user signaling higher conviction on the choke-point thesis. Linked: `companies/HDS/thesis.md` 2026-05-24 Phase 3+ stub.

[2026-05-25 PLANNED] BUY STM (ADR) — **€5,000 additional add** at next US market open. Increases position from current €6,086 → ~€11,086, taking STM from 5.51% → ~roughly 9% of portfolio (computed). Directly aligned with Physical AI primer recommendation (`wiki/physical-ai-primer.md` 2026-05-25: STM 6+/5 multi-narrative score under Physical AI lens + NXP MEMS acquisition $950M closing Feb 2026 material new positive). Closes the previously-flagged STM execution gap from 2026-05-25 portfolio update.

Combined planned cash deployment: **€15,000** (~half of current ~€29,867 cash dry powder). Remaining post-execution: ~€14,867 cash.

Framework discipline check: both trades execute against verified recommendations from this OS rather than independent thesis layer. HDS sized larger than my originally-suggested 3-5% range (~8% target) — user judgment overrides my modest sizing; defensible given Phase 3+ HDS ranking #3 + first-pick after rigorous head-to-head.

Update post-execution: rewrite holdings.md with actual fills + log COMPLETED trades.

[2026-05-26 PLANNED — ADDED to prior plan] BUY ALAB (Astera Labs) — **€10,000 planned entry as NEW POSITION** at next US market open. Decision triggered by ALAB aiXscale Photonics acquisition reclassification per `research/meta/2026-05-26-three-thread-research.md` (Thread 1). User rationale: "if it's really something that allows communication between GPU and CPU, which is becoming more crucial, adding €10K to ALAB would make sense." Logic verified: ALAB Aries PCIe Gen5/6 retimers cover CPU-to-GPU (host-to-device) + Scorpio fabric switches cover GPU-to-GPU scale-up + aiXscale acquisition (Nov 2025) extends to optical CPO 2027-2028. Margin contraction was reclassified from "yellow flag" to "investment cycle — OPEX step-up for intentional 2027-2028 optical roadmap, NOT operational deterioration; Q1 2026 GM actually +70bps to 76.4%." Position would be approximately ~€10K / ~€135K post-trade portfolio ≈ ~roughly 7% of portfolio (computed). Linked: `companies/ALAB/thesis.md` + `research/meta/2026-05-26-three-thread-research.md`.

Revised combined planned cash deployment 2026-05-26: **€25,000 total** (HDS €10K + STM €5K + ALAB €10K). Remaining residual cash post-execution: ~€4,867 (computed: €29,867 - €25,000).

Framework discipline check on ALAB add: validates Tier-A-new category in the 4-axis matrix (`research/meta/earnings-streak-stratification-2026-05-25.md` extension 2026-05-25) — ALAB is MID-streak + investment-cycle + critical-bottleneck (GPU-CPU + GPU-GPU + CPU-CPU connectivity); the 3rd-order upside if 2027 NPO milestone hits = vertically integrated copper+optical AI fabric platform addressing $20B merchant scale-up TAM by 2030 per mgmt.

Update post-execution: rewrite holdings.md with actual fills + log all 3 COMPLETED trades.

[2026-05-26 PLANNED — ADDED to revised plan, fresh capital] BUY ARM (Arm Holdings) — **€10,000 planned entry as NEW POSITION** at next US market open. Decision triggered by user request for ARM due diligence + portfolio CPU-exposure-gap recognition + Long-Open-ended runway scoring per `research/meta/2026-05-26-duration-of-relevance-scoring.md`. Key inputs: ARM at-ATH (making new ATH 2026-05-26 per `research/meta/2026-05-26-ath-refresh-and-4092-prediction.md`); $2B AGI CPU FY27-28 backlog (doubled in 6 weeks per Q4 FY26 earnings); non-GAAP operating margin expanded from 39.1% (Q1 FY26) to 49.0% (Q4 FY26); ~50% hyperscaler CPU share per DCD; RISC-V is the only structural bypass and is 4-6 years from DC-scale viability. Alpha mechanism here is NOT pre-ATH rerating (ARM is at fresh ATH) — it is duration + AGI CPU catalyst (already triggered, not priced) + portfolio CPU-layer-exposure-gap closure. Position approximately ~€10K / ~€145K post-trade portfolio ≈ ~roughly 7% of portfolio (computed). Linked: `companies/ARM/thesis.md` + duration-of-relevance scoring file.

[2026-05-26 PLANNED — fresh capital injection] User confirmed bringing in additional fresh capital (~€5,133 estimate to cover the gap, computed: €35,000 trade total - €29,867 current cash = ~€5,133 fresh-capital need; user may bring in more for ongoing dry powder). The STM €5K leg from yesterday's plan is RETAINED via this fresh capital. Final revised combined deployment 2026-05-26: **€35,000 total** (HDS €10K + STM €5K + ALAB €10K + ARM €10K).

Updated post-execution residual cash (computed): close to €0 from existing dry powder + whatever surplus fresh capital the user brings in beyond €5,133 stays as new dry powder for next sizing matrix.

Framework discipline check on ARM add: validates Tier-B-LATE-with-strong-continuation-anchor category from `research/meta/earnings-streak-stratification-2026-05-25.md` Axis-3+4 extension (2026-05-25). Combined with the HDS, STM, ALAB legs, the €35K deployment covers FOUR distinct AI-stack layers simultaneously: precision actuators (HDS), power-electronics + IMU/MEMS universals (STM, sits on 2 of 3 investable robotics universals per `research/meta/2026-05-26-three-thread-research.md`), CPU-to-GPU + GPU-to-GPU connectivity (ALAB), and CPU IP + AGI CPU architecture (ARM). Closes portfolio CPU-exposure gap noted in prior bottleneck-map.md (ARM was previously the only direct CPU play and was unheld).

Update post-execution: rewrite holdings.md with actual fills for all FOUR trades + log all 4 COMPLETED trades + log the fresh-capital deposit amount.

[2026-05-26 EXECUTED — HDS leg COMPLETED via non-Degiro platform] User confirmed HDS €10,000 has been EXECUTED via a different brokerage platform (not Degiro, which is the user's usual platform from which holdings screenshots are taken). Funded from fresh capital. **Multi-platform tracking implication:** Degiro screenshots will NOT show this HDS position; total portfolio AUM is now distributed across at least 2 platforms (Degiro + the other-platform). Need from user: (a) name of the other platform, (b) fill price + share count for HDS, (c) any other positions held on the non-Degiro platform that should be reflected in `holdings.md` consolidated view. Without these, the consolidated portfolio picture is incomplete.

[2026-05-26 PLATFORM CONFIRMED — N26] User confirmed the secondary brokerage platform is N26 (N26 neo-bank with stock-trading offering, available in EU; equity execution typically routed via Upvest). Portfolio is now tracked across TWO platforms going forward: Degiro (primary, screenshots) + N26 (secondary; HDS €10K executed 2026-05-26 via fresh capital). Still pending from user: HDS fill price + share count + date, plus any other positions held on N26 that should be reflected in the consolidated `holdings.md`.

Remaining planned trades from the €35K plan (3 of 4 outstanding):
- STM €5K (Degiro) — pending US market open today 2026-05-26
- ALAB €10K (Degiro) — pending US market open today 2026-05-26
- ARM €10K (Degiro) — pending US market open today 2026-05-26
- Total remaining: €25K from existing Degiro cash €29,867 → ~€4,867 Degiro residual post-execution (computed)

Updated post-execution residual cash (computed): ~€4,867 Degiro residual + any fresh-capital surplus beyond the €10K already deployed for HDS. The €5K fresh-capital-for-STM injection mentioned earlier is NOT needed since the existing Degiro cash covers STM/ALAB/ARM cleanly.



---

## EXECUTED 2026-05-26 — 4 trades filled (Degiro + N26)

[2026-05-26 EXECUTED — Degiro] BUY ARM Holdings ADR — **37 shares @ BEP $309.83** = €10,030.67 position (6.45% of consolidated portfolio per holdings.md 2026-05-26 update). NEW POSITION. Closes CPU-exposure gap previously flagged in `research/portfolio/bottleneck-map.md`. Source: Degiro screenshot 2026-05-26 16:55.

[2026-05-26 EXECUTED — Degiro] BUY Astera Labs — **38 shares @ BEP $306.80** = €10,078.53 position (6.48% of consolidated portfolio). NEW POSITION. Captures AI fabric silicon thesis post-aiXscale reclassification. Source: Degiro screenshot 2026-05-26 16:55.

[2026-05-26 EXECUTED — Degiro] BUY STMicroelectronics ADR — **+82 shares; total now 188 @ BEP $64.08** = €11,398.69 position (7.33% of consolidated portfolio). Added ~€5K. Closes previously-flagged STM execution gap. Source: Degiro screenshot 2026-05-26 16:55.

[2026-05-26 EXECUTED — N26 (separate platform, fresh capital)] BUY Harmonic Drive Systems — **€10,000 position** (6.43% of consolidated portfolio). User confirmed via voice 2026-05-26: HDS executed via N26 from fresh capital. Fill price + share count + exact local currency TBD pending user confirmation. NEW POSITION on N26 platform.

## EXECUTED 2026-05-26 — Unexpected additions detected from screenshot (pending user confirmation)

[2026-05-26 EXECUTED — Degiro, unplanned] BUY Murata Manufacturing — **+22 shares; total now 437 @ BEP €33.29** (BEP shifted €32.71 → €33.29 confirms incremental adds at higher price). Estimated ~€967 deployed. NOT IN PRIOR TRADE PLAN — flagged as discrepancy in `holdings.md` 2026-05-26 update for user confirmation. Possible: dividend reinvestment, intentional add not communicated, or BEP/data revision. Source: Degiro screenshot 2026-05-26 16:55.

[2026-05-26 EXECUTED — Degiro, unplanned] BUY SK Hynix GDR — **+3 shares; total now 13 @ BEP €931.92** (BEP shifted €844.00 → €931.92 — large upward shift confirming significant add at higher price). Estimated ~€3,780 deployed. NOT IN PRIOR TRADE PLAN — flagged as discrepancy in `holdings.md` 2026-05-26 update for user confirmation. Source: Degiro screenshot 2026-05-26 16:55.

## 2026-05-26 — Verified rationale for Murata + SK Hynix adds (no longer "unplanned")

User clarification 2026-05-26: the Murata + SK Hynix adds today were intentional, acting on the Physical AI primer multi-narrative recommendation that surfaced during the cross-AI-sector analysis (physical AI + robotics + AI data centers + AI chip design).

**Murata add justification (framework-verified):**
- Highest multi-narrative score in universe: **7+/5** per `research/wiki/physical-ai-primer.md` line 22 + `research/companies/MURATA/thesis.md` line 378
- Coverage: mobile + auto (BEV 3K-5K MLCCs vs ICE 1.2K-1.5K) + industrial + medical + AR/VR + security + AI-RAN + robotics PCBs + AI compute boards
- Physical AI primer (2026-05-25) explicit recommendation: *"Both [Murata + STM] deserve sizing-up consideration under Physical-AI-multi-narrative lens"*
- Citrini Research 2026-05-12 reinforces independently: 10x MLCCs per AI server vs crypto miner; share price doubled in 2019-21 crypto-mining MLCC shortage
- Add of +22 shares (~€967 deployed) takes position from 16.77% → 12.35% (% denominator shifted due to total portfolio growth from €110K → €155K)

**SK Hynix add justification (framework-verified via different multi-narrative axis):**
- Different multi-narrative axis: AI workload types (training + inference + custom-Si + sovereign) × structural-moat stacking (supply + packaging + thermal)
- Three moats stacking: mgmt-confirmed 3-year capacity gap (supply) + MR-MUF process advantage (packaging) + iHBM 30% thermal resistance reduction (thermal — 2026-05-25 event)
- 5+ hyperscaler programs simultaneously (NVDA Blackwell + Google TPU + AWS Trainium + Meta MTIA + MS Maia)
- HBM4 → HBM4E → HBM5 generational compounding
- Citrini Research 2026-05-12 "Korea Unlocked" theme reinforces (full body not yet ingested)
- Add of +3 shares (~€3,780 deployed) takes position from 10.33% → 10.53%

**Reclassification of these adds:** From "unplanned discrepancy" to **"FRAMEWORK-ALIGNED but pre-execution announcement missing."** User acted on recommendations from existing research files; communication gap was on user-to-OS direction, not on framework discipline. No corrective action needed beyond logging the verified rationale.

Combined intentional deployment 2026-05-26 (across both platforms): €35K planned (HDS €10K + STM €5K + ALAB €10K + ARM €10K) + ~€4,747 in framework-aligned Murata + SK Hynix adds = **~€39,747 total deployment**, of which ~€10K was N26 fresh capital and ~€29,747 was Degiro existing cash + STM €5K fresh capital. Degiro residual cash post-execution: low single digits / near zero.

## Net consolidated change summary

- Pre-deployment (2026-05-25): €110,395.80 Degiro shares + €29,867.21 Degiro cash = €140,263.01 total
- Post-deployment (2026-05-26): €145,537.51 Degiro shares + (cash TBD) + €10,000 N26 HDS = €155,537.51+ consolidated
- Net change: +€15,275 attributable to (a) day P/L +€4,510, (b) fresh capital injection (~€10-15K), (c) market action on existing positions
- 4 planned trades EXECUTED: HDS (N26) + STM (Degiro) + ALAB (Degiro) + ARM (Degiro)
- 2 unplanned adds detected: Murata + SK Hynix on Degiro — pending user confirmation

---

## 2026-05-29 Trade activity

### SUMCO entry — €9,000
- **Direction:** BUY
- **Amount:** €9,000 deployed
- **Ticker:** 3436.T (Sumco Corporation, Tokyo Stock Exchange)
- **Platform:** Degiro
- **Rationale:** Per `signals/cross-source-log/2026-05-29-twitter-cohort-wafer-test-equipment-kioxia.md` Sumco UBS upgrade SELL→NEUTRAL PT raise JPY 1,050→3,100 + equipment shortage cascade thesis extending production-capacity binding through 2028-2030
- **Thesis:** `companies/SUMCO/thesis.md` (existed since 2026-05-25; updated 2026-05-29 with position-acquisition)
- **Approximate % of portfolio post-buy:** ~5.1%
- **Cascade applied:** Layer 0 substrate gap (per `meta/2026-05-29-portfolio-snapshot-agentic-ai-robotics-matrix.md`) now filled

### ALSEM (SEMCOTECH) entry — €5,142.90
- **Direction:** BUY
- **Amount:** €5,142.90 deployed (per Degiro snapshot)
- **Ticker:** ALSEM.PA (Semco Technologies SAS, Euronext Growth Paris)
- **Platform:** Degiro
- **BEP:** €53.85/share
- **Rationale:** French eChuck specialist; Layer 5 semi-equipment sub-component; thesis built 2026-05-29 at `companies/SEMCOTECH/thesis.md`; customer-funnel triangulation done same day (17 serial + 6 prototyping + 10 qualification per `companies/SEMCOTECH/facts.md`)
- **Approximate % of portfolio:** ~2.94%

### AXTI exit — €4,573.85 freed
- **Direction:** SELL (FULL position closure)
- **Amount:** €4,573.85 cash proceeds
- **Ticker:** AXTI (AXT Inc)
- **Platform:** Degiro
- **BEP:** $126.59
- **Rationale:** Per session conviction analysis 2026-05-29:
  - Bear case P=40% > Bull case P=30% per `companies/AXTI/thesis.md:107-116`
  - Base case has negative expected return
  - Forward FY26 P/E ~340x structurally extreme per thesis lines 62-68
  - ~70x already realized per thesis lines 46-50
  - 2.61% position too small to compound meaningfully even in 30% bull case
- **Thesis updated:** `companies/AXTI/thesis.md` — tier changed to EXITED; Position implication EXIT

## Net 2026-05-29 activity

- **Cash deployed:** €9,000 (SUMCO) + €5,143 (ALSEM) = €14,143 net new positions
- **Cash freed:** €4,574 (AXTI exit)
- **Net cash deployed:** ~€9,569 net
- **Remaining for Monday 2026-06-01 deployment:** AXTI €4,574 + fresh capital ~€11K (€20K originally - €9K SUMCO) = **~€15.5K available for MDB/NOW/DDOG**

## Planned Monday 2026-06-01 execution

| Action | Ticker | Amount | New % | Rationale |
|---|---|---|---|---|
| BUY (new entry) | MDB | €6,000 | ~3.3% | Active tier initial; thesis at `companies/MDB/thesis.md`; Q1 FY27 cRPO +69% leading indicator |
| BUY (SIZE UP) | DDOG | €5,000 | 6.64% → ~9.0% | Closes "UNDER-WEIGHTED" gap per `companies/DDOG/thesis.md:5`; toward 8-12% target |
| BUY (SIZE UP) | NOW | €4,500 | 6.57% → ~8.7% | Toward 10-13% target per `companies/NOW/thesis.md:5`; AI Control Tower August 2026 GA catalyst |
| **Total** | | **€15,500** | | |
