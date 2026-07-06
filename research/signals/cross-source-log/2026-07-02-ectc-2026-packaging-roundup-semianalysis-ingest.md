# ECTC 2026 packaging roundup (SemiAnalysis, 2026-07-02, T2 full-text in hand) — INGEST + cascade — 1 targeted cross-claim agent

**Trigger:** User-shared full text of the SemiAnalysis ECTC-2026 roundup (Ahmad/DC/Wong/Patel, paid, dated 2026-07-02 — FRESH, B40 pass). The article IS the primary reporting (conference-paper disclosures, T2 with T1-underlying ECTC papers); one targeted Opus 4.8 agent fired on the three embedded cross-claims that cascade to theses (Feynman custom-HBM; Marvell-Celestial close; AMD MI450 LPDDR; bonus TPU-v9/EMIB-T corroboration) — marked PENDING below until it returns.

---

## Hard facts extracted (all per the shared article unless noted)

### Custom HBM (the memory-thesis centerpiece)
- Marvell custom HBM4E: custom base die on advanced logic process; **host-ASIC HBM PHY/logic footprint reduced ~60%**; 1024 channels @ 32 Gb/s = 4.1 TB/s (≡ 2048-bit JEDEC HBM4E @ 16 Gb/s); interposer channel shortened **6.5 mm → 1.5 mm**; organic RDL interposer (2/2 µm L/S, 9 layers) instead of silicon.
- SemiAnalysis estimate: **~16% of Rubin GPU die area is HBM-related logic/PHY** — custom HBM offloads that to the base die.
- Base die as secondary memory controller fanning out to **LPDDR or a second HBM layer** — cited as relevant to **AMD MI450/MI500 LPDDR support** (cross-claim, PENDING).
- **"At GTC, Nvidia announced that Feynman would use custom HBM"** (cross-claim, PENDING).
- Samsung: custom HBM4/HBM4E base die on its own foundry process (consistent with the previously verified ~250-engineer custom-HBM push, TrendForce T3).

### HBM4E packaging difficulty (pricing-power datapoint for the packaging layer)
- Samsung ECTC numbers: HBM4E could require **2× interposer layers vs HBM3E and 5× vs HBM2; power +86% vs HBM3E, 5.6× vs HBM2**; Samsung's 8-layer silicon interposer solution cuts layer count ~20% vs estimated requirement.
- Samsung hybrid-copper-bonding (HCB) HBM thermals: stack-level thermal resistance −19% vs TCB (−29.1% at 4× pad density); package power +~4% at constant temp or inlet +1-2°C; 16-hi acceptable today, 20-hi/24-hi need new approaches.

### CoWoS bypass-routes proliferating (Time-to-X confirmation at the packaging bottleneck)
- **Intel EMIB-T** = the credible CoWoS-L alternative: validated 36/35 µm bump pitch at 2× reticle (65% bump-density gain vs 45 µm Granite Rapids), 4.5× reticle certification targeted end-2026; 25 µm pitch in test; TSVs cut DC voltage drop **68-80%**; on-bridge MIM 500 nF/mm² improves PDN AC impedance >82%; HBM4E 12 Gb/s at ~67% UI eye (72.5% w/ 1-tap DFE); **quarter-panel 240×240 mm (~67 reticles) test vehicle shown (severe warpage observed at booth — honest flag in-article)**. Expected in **Google TPU v9** (cross-claim bonus, PENDING). Still behind TSMC on DTC/eDTC + integrated VR + active LSI.
- Panel-scale organic interposers (Resonac 320×320 mm; ASE 600×600 mm quartered), IBM DBrM edge-glued bridge (>30 N vs 0.2 N bending), Unimicron interposer-less bridge.
- **Intel glass-core first: 510 mm × 515 mm, 24-layer panel, copper-filled TGVs + 2 embedded EMIB bridges + co-formed optical waveguides; no SeWaRe after thermal shock** — TC-5 (CoPoS/glass-core) INCREMENT. Amkor/STATS: 30-40% lower warpage w/ glass core but process immature; STATS: edge coating mandatory (uncoated 74×74 mm failed every test segment). Verdict in-article: manufacturing development, not high-volume adoption yet.

### Cooling escalation (power-DENSITY datapoint feeding the power/cooling bottleneck)
- **TSMC micropillar direct-to-silicon on CoWoS-R: 4 kW at 4 LPM, 5.3 kW at 8 LPM, uniform >5 kW across the test vehicle** (vs lidded cold plate 1.9-2.3 kW saturating on TIM); MSL4-passed sealing.
- **Microsoft microchannels etched into a live GH200: 51-60% lower junction-to-inlet thermal resistance (GPU), ~50% package-level; 9 potential clog events across ~4,370 observations over 6 months, declining; no silicon erosion.** Multi-kW packages are the design center now.
- TIM track: SPIL liquid-metal HCF-TIM 10 W/m·K, 95% coverage after 1,000h @ 150°C.

### Photonics onto the package (the dated ALAB bear-watch + MRVL vector)
- **Marvell OMIB + Photonic Fabric (via the Celestial AI purchase — cross-claim close-status PENDING):** PIC embedded in organic RDL only where needed; **1.8 Tbps/mm²** claimed; removes shoreline limits (same bridge routes die-to-die + external optical); EAMs chosen over MRMs (thermal stability; in-article doubt: **"EAMs will prove difficult to manufacture at scale"**); PIC thermal isolation strongly favors substrate-mount (<5°C rise vs ~20-25°C on bridge/interposer).
- Lightmatter Passage M1000: ~2,100 mm² 4-tile photonic interposer + 15 chiplets; >95% assembly yield (magnetic fixture vs ~59 µm warpage); validated ~680 W concentrated / >900 W design.
- In-article honesty: multi-reticle photonic interposers face yield/stitching challenges; near-term = vertically-stacked optical engines (TSMC COUPE-class), not full photonic interposers. → **displacement risk for copper retimers/PCIe plumbing is LATE-DECADE, not 2026-27.**

### Hybrid bonding + RDL scaling (equipment/materials layer)
- Applied Materials + EV Group: **450 nm pitch W2W bonding at 98% yield across 20M links**; low-temp routes (Mitsui/ASE 200°C pressure-less; TOK/NYCU 150°C 10-sec; Intel fine-grain Cu 175-200°C); post-bond-yield refinement expected 2027+.
- RDL: 2/2 µm today → 1/1 µm next (imec/Fujifilm damascene); UCIe 3.0 (64 GT/s) the driver; GUC/TSMC 8-layer CoWoS-R UCIe-A at 32 GT/s measured 0.77 UI.
- Samsung VCS (TSV-less 4-hi DRAM stacking via Cu posts): power −41%, height/footprint −40%, bandwidth 2.6×, I/O 6× vs wire-bond — mobile now, SOCAMM/server-module relevant later.

## CASCADE (Critical Rule #10 — this commit)
- `companies/HYNIX/thesis.md` — custom-HBM mechanism appended to the existing HBM-attach watch-line (base-die value migration two-sided read + LPDDR-attach demand vector).
- `companies/ALAB/thesis.md` — DATED bear-watch added: on-package optical (OMIB/CPO) = late-decade copper-retimer displacement vector; entry-relevant honesty pre-tranche.
- `companies/MRVL/thesis.md` (watchlist-reference) — custom HBM + Celestial/OMIB = non-Trainium growth vectors relevant to the re-entry triggers.
- TC-5 increment (Intel glass-core panel first) noted here; register N-tick at next register touch.
- `meta/subagent-cost-yield-ledger.md` — 1 targeted fire (cross-claims).

## ADDENDUM — cross-claim verdicts (agent returned 2026-07-02 PM)
1. **Feynman custom HBM: CONFIRMED (T1)** — Nvidia GTC 2026 keynote (~2026-03-24): Feynman (post-Rubin, 2028) with custom HBM + 3D die-stacking + Rosa CPU [heise/wccftech/Tom's HW]. **Sharper read than the roundup's framing: the base die is NOT attributed to one supplier — it's BASE-DIE DISAGGREGATION** (base-die logic moving off DRAM-maker processes onto logic foundry, spanning SKH/Samsung/Micron + controller designers like Marvell). That IS the value-migration mechanism now T1-anchored.
2. **Marvell-Celestial AI: CONFIRMED (T1)** — announced 2025-12-02, **closed 2026-02-02; $3.25B at close ($1B cash + ~27.2M shares) + earnout up to $5.5B** [Marvell newsroom]. Caveat: the "OMIB" term itself appears only in the SemiAnalysis roundup — single-source label on the branding, not the deal.
3. **AMD MI455X + LPDDR-on-module: SINGLE-SOURCE (T2)** — reported (HotHardware echoing SemiAnalysis), NOT AMD-confirmed; note it's MI455X specifically, not literally "MI450"; MI500 LPDDR = speculative. LPDDR-attach demand vector stays at single-source conviction pending a second confirm.
4. **TPU-v9-on-EMIB-T: LOOSE** — Google-Intel EMIB packaging relationship is multi-source (incl. reported 3M+ TPUs booked for 2028, T2), but the exact v9 SKU mapping is single-analyst (Kuo ties EMIB-T to TPU v8e "Humufish"). Packaging-relationship = solid; SKU label = don't cite as fact.
