# 2026-06-30 — Connectivity for AI INFERENCE: magnitude + where the rent accrues (MACRO-FIRST / Workflow #9)

**Type:** Macro-first research pass (Step 0-3) on the connectivity/interconnect layer for inference specifically. Verification of 6 sub-claims. Date-anchored, T1/T2/T3 tagged, default-skeptical.
**Origin:** User research+verification task 2026-06-30. Re-opens the MRVL exit question from the connectivity (not custom-ASIC) angle; read-through to held memory book.
**Relation to prior harness state:** complements `wiki/networking-primer.md` + `wiki/optical-interconnect-primer.md` (both 2026-05-21, now partially STALE — refreshed here). MRVL fully exited 2026-06-27 on Trainium die-design-loss bear (`signals/cross-source-log/2026-06-27-ai-brief-3subagent-verification-MRVL-trim-ensemble.md`).

---

## STEP 1 — FIRST-PRINCIPLES (research-derived, not pre-training)

The inference shift ELEVATED interconnect relative to the training era because three structural mechanisms are all communication-heavy and are all NEW or amplified at inference scale:

1. **Frontier models are MoE** → token routing is all-to-all across experts. All-to-all comm can exceed half of total inference time; measured **up to 79.2% as batch size rises** (T2 arXiv 2404.05019 Shortcut-connected EP). 🟢-leaning T2.
2. **Disaggregated prefill/decode** (NVIDIA Dynamo, DeepSeek-style) physically SEPARATES the two phases onto different node pools → the **KV cache must transfer across the fabric** between pools. KV transfer cost = KV_size / interconnect_bandwidth — fabric bandwidth is literally the denominator (T2 Red Hat Developer 2026-06-22; T2 hedgehog.cloud "Why the AI Network Is the Product"). 🟡
3. **Long-context / reasoning** workloads blow up KV-cache size → both a memory AND an interconnect problem (see Step-3 memory read-through).

**The three-wall framing is CONFIRMED and quantified** (T2 TrendForce "Memory Wall" + Spheron 2026): over two years, **compute +3×, memory bandwidth +1.6×, interconnect bandwidth +1.4×.** Interconnect is the SLOWEST-growing of the three walls → it is becoming the binding one. Decode phase is memory-bandwidth-bound; cross-pool KV movement is interconnect-bound; MoE routing is interconnect-bound. Inference at scale is bounded by compute (FLOPs) + memory (HBM cap/BW) + interconnect (fabric), and the disaggregation/MoE/long-context shift raised interconnect's weight vs the dense-training era. **Sub-claims #1 and #2: CORROBORATED.**

---

## STEP 2 — METRIC TABLE (current readings, dated)

| Metric | Reading | Source (tier, date) |
|---|---|---|
| All-to-all comm share of MoE inference time | up to 79.2% at high batch | arXiv 2404.05019 (T2) |
| 2yr growth: compute / mem-BW / interconnect-BW | 3× / 1.6× / 1.4× | TrendForce Memory Wall, Spheron 2026 (T2) |
| KV-transfer cost formula | KV_size ÷ interconnect_BW | Red Hat Dev 2026-06-22 (T2) |
| Marvell optical/interconnect rev FY25 | ~$1.2B (Alaska C + Spearfish PAM4) | matrixbcg / dataintelo (T3) |
| Marvell optical DSP share | ~70% (PAM4 DSP); #2 behind AVGO overall, duopoly + Credo challenger | bepresearch, dataintelo (T2/T3) |
| Ethernet AI scale-out revenue 2030 | >$100B; Ethernet = majority of future growth | 650 Group (T2) |
| Tomahawk 6 | 102.4 Tbps, 64×1.6T, native UEC 1.0 | Broadcom IR (T1) |
| UEC spec status | 1.0 Jun-2025, 1.0.1 Sep-2025; broad adoption 2027-28 | ultraethernet.org, Network World (T1/T2) |
| UALink | spec 1.0 May-2025; first commercial products ~end-2026/Q4-2026 (Upscale AI); Broadcom walked away | epium, Futuriom (T2) |
| NVLink Fusion | only C2C (slower) IP licensed; NVLink 5 (1.8 TB/s) NOT licensed, Fusion-chiplet-only, must pair w/ NVIDIA GPU or CPU | epium, fabricatedknowledge (T2) |
| AMD MI455X scale-up BW | ~3.6 TB/s (CES Jan-2026) > NVLink 5 1.8 TB/s | enertuition/CES (T2) |
| CPO deployment | TH5-Bailly CPO tens-of-thousands shipped 2025; Quantum-X CPO avail early-2026; Spectrum-X CPO H2-2026 | NVIDIA Newsroom, IDTechEx (T1/T2) |
| SemiAnalysis CPO timing reassessment | 2026-06-09: mass/scale-up adoption slips toward 2028-29 | SemiAnalysis via KAD/Futurum (T2) |
| LPO physics limit | works at 100G/lane; fails at 200G/lane (DSP needed) | LightCounting, chipstrat (T2) |

---

## STEP 3 — VALUE-CAPTURE MAP + READ-THROUGHS

### Layer → rent-capturer → merchant-investable

| Layer | Rent-capturer | Merchant-investable? | Ticker(s) |
|---|---|---|---|
| Scale-up fabric (intra-rack, highest BW) | NVIDIA (NVLink 5, proprietary) | **NO** — NVLink5 not licensed; Fusion only opens slow C2C | NVDA only (not merchant) |
| Scale-up open challenger | UALink consortium | Partial/early (Q4-2026 first silicon; Broadcom de-emphasized) | AMD, AVGO(?), niche |
| Scale-out switch silicon (Ethernet) | Broadcom (Tomahawk/Jericho) | **YES** | AVGO |
| Scale-out systems | Arista | **YES** | ANET |
| Scale-out InfiniBand | NVIDIA/Mellanox | NO (proprietary, share ceding to Ethernet) | NVDA |
| Optical DSP / retimers / AECs (pluggable) | Marvell + Broadcom duopoly; Credo challenger | **YES** | MRVL, AVGO, CRDO |
| Lasers/EML (CPO + pluggable) | Lumentum, Coherent (NVDA $2B invested) | YES | LITE, COHR |
| InP substrate (under all optics) | AXT | YES | AXTI |

**The "important-but-not-investable" tension:** the SINGLE highest-bandwidth, most-moaty interconnect layer (scale-up NVLink, where inference rack-scale value concentrates) is **NVIDIA-proprietary and NOT merchant-investable.** Merchant rent lives one tier down/out: scale-out Ethernet silicon (AVGO/ANET) + optical DSP/laser/substrate (MRVL/CRDO/LITE/COHR/AXTI). So connectivity is 1st-order IMPORTANT but the merchant-capturable slice is narrower than the importance implies. NVDA captures the premium; merchants split the scale-out + optical tail.

### MRVL connectivity-moat verdict (re-entry question)
- Connectivity IS Marvell's most durable franchise: ~70% optical DSP share + merchant-of-choice status (does NOT sell lasers, so module vendors Innolight/Eoptolink prefer it) + Inphi PAM4 + Celestial AI (CPO/optical-domain) acquisition filling the scale-up gap. This is ORTHOGONAL to the custom-ASIC/Trainium-die-loss logic we exited on (sub-claim #4: connectivity is genuinely a separate, more durable moat than its sub-scale custom-ASIC compute position).
- BUT two-sided threat: (a) Broadcom DSP launches intensify the duopoly fight; (b) CPO + LPO compress the pluggable-DSP TAM over 3-5yr. SemiAnalysis 2026-06-09 "Marvell's DSP Dilemma" is the bear.
- **Net:** the connectivity franchise is a DIFFERENT, stronger thesis than the compute thesis we exited — it does re-open MRVL as a connectivity play, but NOT as a reversal of the custom-ASIC exit. A re-entry would be a NEW thesis (optical-DSP/connectivity rent), not a reinstatement.

### CPO disruption timing (sub-claim #5)
- CPO is shipping in 2026 (TH5-Bailly CPO tens-of-thousands in 2025; Quantum-X CPO early-2026; Spectrum-X CPO H2-2026) BUT **every CPO switch still pairs with PLUGGABLE optics on the host side** → near-term EXPANSION not disintermediation of the pluggable rent.
- LPO (the real DSP-killer) **fails physics at 200G/lane** → DSP survives the 1.6T/3.2T transition. Marvell's DSP-Lite / Transmit-Only (Spica Gen2-T) + Celestial AI hedge both vectors.
- SemiAnalysis 2026-06-09: scale-up CPO mass adoption slips to **2028-29**. So the pluggable-DSP/retimer rent has a longer runway than the bear implies; disintermediation is a 3-5yr TAIL risk, not a 2026-27 event. Threatens MRVL/CRDO eventually, but timing is benign through ~2027.

### Memory read-through (sub-claim #6 — COMPLEMENT, not compete)
Decisive finding (T2 Samsung CMM-D white-paper Jun-2026 + arXiv 2509.03377 / 2511.00321 / 2512.11920): KV-cache offload to CXL/fabric memory tiers ADDS CAPACITY but **PCIe link + device DDR bandwidth are FAR below HBM → decode STALLS once traffic shifts off-HBM.** You cannot trade interconnect/CXL bandwidth FOR HBM at the margin without paying a decode-latency tax. → rising connectivity importance and HBM demand **SCALE TOGETHER (complements):** disaggregation moves MORE KV-cache across MORE fabric AND requires MORE HBM as the only bandwidth-adequate tier. **Positive read-through for held HYNIX/SNDK/SUMCO/KIOXIA book** — connectivity build-out does not cannibalize HBM; it co-grows. The earlier U8/F13 efficiency-compression tail is unaffected by this (independent question).

---

## MAGNITUDE VERDICT
Connectivity for inference = **CO-1ST-ORDER WITH MEMORY** (confidence ~70%). Quantified basis: it is one of the three explicit walls; it is the SLOWEST-growing wall (1.4× vs compute 3×) = fastest-tightening; MoE all-to-all up to 79.2% of inference time; disaggregation makes fabric the literal denominator of KV-transfer cost. Not pure-1st-order-alone because the decode bottleneck is still memory-bandwidth-bound (HBM) and the two are coupled — hence CO-1st-order.

## 3 LEAST-CONFIDENT POINTS
1. The 79.2% all-to-all figure is workload/batch-specific (one arXiv paper); production frontier-MoE serving with overlap optimizations (Dynamo, comm/compute overlap) likely lands materially lower — true production interconnect-bound % is UNquantified at T1.
2. Marvell's exact CURRENT (mid-2026) optical/connectivity revenue + share — the ~$1.2B/~70% figures are FY25 and T3-ish; not T1-verified for the period post-Broadcom DSP launch + Credo design wins.
3. CPO disintermediation timing — the 2028-29 SemiAnalysis slip vs NVIDIA's H2-2026 Spectrum-X CPO is a wide band; whether host-side pluggable persists or collapses faster is the swing factor for the MRVL/CRDO 3-5yr tail.

## SOURCES
- arXiv 2404.05019 (MoE all-to-all 79.2%); 2504.19720 survey; SPAD; LMSYS InferenceMAX 2025-10-14
- TrendForce Memory Wall; Spheron 2026 memory-wall guide; Red Hat Dev 2026-06-22; hedgehog.cloud disaggregated-inference
- epium / fabricatedknowledge / Futuriom (NVLink Fusion, UALink); enertuition (scale-up/out); spheron UALink-vs-NVLink 2026
- bepresearch "Quiet Architect"; matrixbcg; dataintelo PAM4; SemiAnalysis "Marvell's DSP Dilemma" + CPO scaling; Futurum (Broadcom DSP launch 2026); KAD (SemiAnalysis CPO 2026-06-09 slip); LightCounting/chipstrat (LPO physics)
- NVIDIA Newsroom Spectrum-X CPO; IDTechEx CPO race; Broadcom IR Tomahawk 6 / Thor Ultra; 650 Group ($100B Ethernet 2030); ultraethernet.org / Network World (UEC)
- Samsung CMM-D KV-offload white-paper Jun-2026; arXiv 2509.03377, 2511.00321, 2512.11920 (CXL KV-cache); Astera Labs CXL/RAG
