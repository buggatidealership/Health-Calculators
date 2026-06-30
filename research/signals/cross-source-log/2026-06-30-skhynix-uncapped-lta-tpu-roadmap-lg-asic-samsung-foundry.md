# Four user-shared items — SK Hynix uncapped-LTA / Google TPU roadmap / LG ASIC / Samsung foundry — 3-subagent Opus 4.8 verification — 2026-06-30

**Trigger:** User shared 4 data points (3 images + 2 text): (1) "[단독] SK하이닉스, LTA 가격 상단 제한 없다 … 주가 420만원 '가시권'" — SK Hynix HBM LTAs floor-only / no-ceiling vs Samsung/Micron banded; (2) Google TPU roadmap table — Broadcom-primary design service, MRVL marginal ("BRCM or MRVL" at v10ax 3Q28), memory HBM3e→HBM4e→HBM5; (3) "LG Electronics Begins ASIC Design Service Based on TSMC Processes"; (4) Samsung 2nm yield + Tesla AI-chip win + 1.4nm/High-NA EUV at NRD-K. Critical Rule #16: 3 Opus 4.8 subagents (A: SK Hynix LTA KO+EN; B: TPU roadmap; C: LG ASIC + Samsung foundry). Rule #18 standing-dissent run on each.

---

## VERDICT: HOLD all, no falsifier fired. The two held-name reads both REINFORCE (HYNIX primary): (1) uncapped-LTA = mild anti-fragility reinforce (real but sell-side-inferred + likely overstated; does NOT move the volume-sensitive falsifier); (2) TPU roadmap = HBM additive-demand CONFIRMED + MRVL-exit REINFORCED + Broadcom-rent-capturer CONFIRMED. The other two items are non-events for the book: LG "merchant ASIC" UNCONFIRMED at claimed scope (likely captive SIC/SoC Center mischaracterized); Samsung Tesla "win" is a RECYCLED Jul-2025 deal (B40), 2nm yield contested, foundry-vs-memory stays DECOUPLED (Principle #41) — net neutral-to-slightly-favorable for SK Hynix. Mild ASML/High-NA read-through (SUMCO slow-burn 2027-29).

---

## ITEM 1 — SK Hynix uncapped-LTA (Subagent A) — PARTIAL-CONFIRMED → REINFORCE, 70%
- **Source trace:** the "상단 제한 없다 / 420만원 가시권" headline does NOT resolve to a single discrete exclusive — it reconstructs from a **Mirae Asset (미래에셋증권) target-price raise 380만→420만, ~2026-06-22**, recirculated 06-29/30 (Herald/MT/Insight/이투데이/Newsway). **🟡 B40 mild-staleness: the "단독 scoop" is repackaged broker coverage, ~7-8d stale by the 06-30 read, not a fresh primary.** Korean primaries 403-blocked (org egress) — Mirae note not read directly.
- **Corroboration of the floor-only-vs-range structure:**
  - SK Hynix floor-only = **single analytical source (Mirae)**, derived inference of confidential contracts — NOT independently reported. All outlets repeat the same note.
  - Micron ceiling = **CORROBORATED from Micron itself** (FQ earnings call ~2026-06-25 via ZDNet KR/Seoul Economic): spot-as-ceiling (상한선) + duration floor (하한가), $100B min-guaranteed-revenue across 14/16 SCAs. Solid.
  - **Samsung "banded/ceiling" = NOT corroborated** (coverage says Samsung is only *reviewing* volatility-cushioned pricing). The clean "SK Hynix-vs-(Samsung+Micron)" trichotomy is **partly reporter synthesis** — treat the Samsung leg as unconfirmed.
- **₩4.2M target:** Mirae's number (Hanwha 430만 higher; Samsung Sec 350만; street avg ~₩3.27M across ~39 analysts). Off ₩2,628,000 (06-29) = ~60% upside. Driven by the **ASP stack** (DRAM ASP +184% '26 / +19% '27; NAND +45% / +231%; 2027 HBM price growth revised 25.3%→43.7%), NOT the LTA structure per se — LTA framing is the *de-rating-removal* narrative, not the EPS engine. Relayed "2027 OP 449조" = garbled T3 figure, discounted.
- **🔴 Rule #18 standing-dissent (load-bearing, kept):**
  1. **"No upper cap" is likely OVERSTATED.** Mirae's own wording ("계약가를 최종가로 설정, 이후 추가 상승 가능") reads as *floor set at the elevated current ASP, spot can drift higher* — NOT a literal open-ended escalator. Hyperscaler buyers normally demand ceilings for budget certainty; a literally-uncapped escalator is counterparty-implausible. "상단 제한 없다" is punchy framing.
  2. **Floor-only protects PRICE, not VOLUME.** Micron's SCAs bind minimum *volume* ($100B); SK Hynix's thinner volume-binding means our bit-demand falsifier (contract-price rollover + utilization <85%) is **NOT immunized** by this structure. In a flat/down AI-capex regime, Micron's locked floor can win on risk-adjusted basis. The uncapped-upside only pays in the rising-price regime (which we believe holds through 2027, but the structure does not de-risk the down-scenario).
- **Net:** mild REINFORCE of HYNIX anti-fragility (uncapped upside in up-scenario; a confirmed competitor gave up its ceiling) — but **falsifier UNMOVED** (it fires on volume utilization, which floor-only does not protect). No sizing change.

## ITEM 2 — Google TPU roadmap (Subagent B) — CONFIRMED, core reads hold
| Read-through | Verdict | Conf |
|---|---|---|
| (a) MRVL exit (frontier-ASIC-rent compression) | **REINFORCED** | 80% |
| (b) HBM / SK Hynix demand | **CONFIRMED + ADDITIVE** | 85% |
| (c) Broadcom rent-capturer framing | **CONFIRMED** (multi-sourcing margin caveat) | 80% |
- **Provenance:** table schema matches SemiAnalysis's paywalled TPU roadmap (per-gen design partner + HBM column, "BRCM or MRVL", "v10ax", "3Q28"). **FRESH** (aligns Google Cloud Next Apr-2026 + May-Jun reporting). 🟡 deep-future rows (v10ax/3Q28/HBM5) = **analyst-modeled, NOT Google-confirmed**; the "v10ax" label breaks the public codename pattern (v7 Ironwood→v8 Sunfish/Zebrafish→v9 Humufish/Triggerfish) — plausible-but-unverified placeholder.
- **MRVL role (the key test):** ≥3 independent sources converge — Marvell covers **networking/connectivity** that *surrounds* the TPUs, NOT the accelerators; the compute seat is **contingent/in-talks** ("Google in talks with Marvell" for an MPU + inference TPU, Apr-2026, unsigned, late, inference-tier = lower rent). Share ~15-25% vs Broadcom ~55-60%. Headline: *"Marvell's Moat Is Connectivity, Not Custom Silicon."* The table is NOT understating MRVL — "BRCM or MRVL at v10ax" is *generous* (hedge option at a deep-future inference node). **Exit reinforced.**
- **HBM-per-TPU (additive math):** ~6-8 HBM stacks/TPU scaling HBM3e (Ironwood 192GB) → HBM3e-12hi (Sunfish) → HBM4 (Humufish) → HBM4e (Triggerfish, late-2027) → HBM5 (modeled). × Google's projected 4.3M (2026) → 10M (2027) → 35M+ (2028) TPUs ≈ **tens of millions of HBM stacks/yr by 2028 from Google alone**, before Meta/Anthropic/Trainium/MTIA. Genuinely **additive** to merchant-GPU HBM, not substitutive. **SK Hynix also testing Intel EMIB packaging for TPU HBM = direct ASIC-channel touchpoint.** Supports the #1-HBM thesis.
- **🔴 Rule #18 re-examination trigger (logged):** a **SIGNED MRVL volume TPU compute deal** (vs continued "talks") = the MRVL-exit-reversal trigger. Watch. Broadcom rent-rate (not volume) may compress at the inference tier via MediaTek "e" variants (20-30% cheaper) + the Marvell hedge.

## ITEM 3 — LG Electronics "ASIC design service" (Subagent C) — UNCONFIRMED at claimed scope, 60% mischaracterized
- **No source** confirms an LG *merchant* (external-customer turnkey, Broadcom/Marvell-model) ASIC business. All corroboration describes LG's long-standing **captive System IC / SoC Center** (fabless for LG's own products — home-appliance AI chips, OLED TV SoCs, automotive, humanoid), fabbed at TSMC. Likely a press characterization of the captive center being "opened up"/rebranded as a design *service*, OR journalist conflation of captive design centers with the "ASIC design-house" category. Adjacent-fresh: LG–Tenstorrent partnership; LG humanoid-semi.
- **Competitive threat vs Broadcom/Marvell: NONE near-term.** Even if formalized, sub-scale/regional/late, no hyperscaler-accelerator track record, no SerDes/IP at Broadcom's level. We EXITED Marvell → moot for the book regardless. No memory read-through.

## ITEM 4 — Samsung foundry cluster (Subagent C)
| Sub-claim | Verdict | Conf |
|---|---|---|
| 2nm (SF2) yield improving | **PARTIAL / contested** | 55% |
| Tesla AI-chip foundry win | **CONFIRMED but STALE/recycled** (Jul-2025 $16.5B deal) | 90% |
| SF1.4 + High-NA EUV at NRD-K | **CONFIRMED** (rumor-grade specifics) | 75% |
- **🟡 B40 misattribution caught:** the "Samsung won Tesla" item dated 06-29/30 is almost certainly the **$16.5B Jul-2025 deal** (AI5 split Samsung/TSMC, AI6 at Taylor SF2, runs to 2033) recycled — NOT a new award. ~11 months old.
- **2nm yield:** spans 70% (Jan-2026 headline) → 55% below-MP (Apr-2026 TrendForce) → foundry chief sets 2028 for profit (Jun-14, tempering 2026-rebound). "Improving" is directionally true vs late-2025 (~20%) but latest Q2 data is *cooler* than the headline. Rumor-tier.
- **SF1.4:** Sammy Fans 06-29 — "back on track" but **MP slipped 2027→2029** (resources diverted to stabilize SF2/SF2P).
- **🔭 Foundry-vs-memory DECOUPLING (Principle #41) verdict:** ~85% orthogonal. A 2nm bump / Tesla order does NOTHING direct for Samsung's HBM4 process, packaging (TC-NCF vs SK Hynix MR-MUF/hybrid-bonding), or NVIDIA qual. **Indirect channel cuts FAVORABLE for SK Hynix right now:** a still-loss-making (profit not until 2028), resource-constrained foundry (SF1.4 slipped *because* resources pulled to SF2) is a **competitor for** Samsung's internal capital, NOT a liberator of HBM4-catch-up capex. Near-term = mild relief for SK Hynix, not a headwind. HYNIX falsifier untouched.
- **ASML/High-NA read-through:** Samsung SF1.4 + 2 confirmed High-NA EXE-class tool purchases (1H26) + tool at NRD-K, joining Intel 14A + TSMC A14 as the three lead High-NA nodes = mild **ASML-positive**. **SUMCO:** leading-edge logic ramps (2nm/1.4nm across Samsung+TSMC+Intel) support premium 300mm polished/epi wafer mix + tighter litho-grade flatness — directionally supportive, but SF1.4 MP at **2029** = a 2027-2029 slow-burn confirm, NOT a 2026 catalyst.

## CASCADE
- **HYNIX:** REINFORCE-on-net — (1) uncapped-LTA = mild anti-fragility reinforce (sell-side-inferred + likely overstated; volume-falsifier UNMOVED); (2) TPU-roadmap HBM = additive-demand CONFIRMED (tens of M stacks/yr from Google alone by 2028) + EMIB ASIC-channel touchpoint; (3) Samsung foundry-recovery DECOUPLED + near-term capital-competition relief. HOLD, no sizing change.
- **SUMCO:** mild slow-burn confirm — High-NA/SF1.4/2nm logic ramp supports advanced-wafer mix, but 2027-2029 timing, not a 2026 catalyst. HOLD.
- **MRVL (exited):** exit REINFORCED (networking-only + contingent late inference seat); re-examination trigger = a SIGNED volume TPU compute deal. No position.
- **AVGO (not held):** rent-capturer framing CONFIRMED through 2031; rent-rate compression risk at inference tier. Watchlist-texture only.
- biases-watchlist: B40 ×2 (Mirae LTA repackaging + Samsung-Tesla recycled-deal); B40.1 (LG captive-center-as-merchant-service mischaracterization); reporter-synthesis flag (SK-vs-Samsung+Micron trichotomy).
- ledger: 3 Opus fires (A 25.1k + B 25.6k + C 30.0k subagent_tokens = ~80.7k visible; ~250-350k true per the AM11 deep-fire cost model).

## LEAST-CONFIDENT
1. Whether SK Hynix LTAs are *literally* uncapped vs "floor = elevated final price, spot drifts higher" — Mirae wording leans softer; Korean primaries 403-blocked.
2. The "v10ax / 3Q28 / HBM5" TPU specifics — unverified outside the paywalled SemiAnalysis model; could be analyst placeholder naming.
3. LG merchant-ASIC scope — could not locate the originating English article; 60% lean it's a captive-center mischaracterization. Source URL would resolve it.
