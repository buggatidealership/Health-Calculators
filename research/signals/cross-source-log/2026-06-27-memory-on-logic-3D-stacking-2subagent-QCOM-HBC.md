# Memory-on-Logic 3D Stacking + Qualcomm HBC — 2-Subagent Verification — 2026-06-27

**Trigger:** User-shared Zephyr (@zephyr_z9, T3 social) tweet over a Semafor/Wall St Engine article. Two stacked claims: (T2) Semafor "Qualcomm plans to bring data-center chip architecture to phones/PCs/cars" (Rachyl Jones, Jun 26 2026); (T3) Zephyr extrapolation "everyone adopting memory-on-logic 3D stacking — Samsung/Huawei/Apple/Qualcomm phones 2027-28; Google/Nvidia/Broadcom AI-XPUs 2028-29." Critical Rule #16 → 2 Opus 4.8 subagents (QCOM-specific + MoL-trend/HYNIX-read), each with Rule #18 dissent. Today 2026-06-27; both fresh.

**Verdict:** Poster directionally right (stacking real) but (a) conflates 4 distinct tracks, (b) overstates the phone timeline, (c) INVERTS the HBM read-through. HYNIX bull decisively stronger 2026-2029; one narrow new 2028+ margin risk (NVIDIA self-design base die). FRAMING-ERROR-CAUGHT.

---

## SUBAGENT 1 — Qualcomm "HBC" (the Semafor architecture)
- **REAL + FRESH** (Qualcomm Investor Day Jun 24 + Semafor Jun 26, T1). The architecture = **HBC (High Bandwidth Compute)**: logic die *beneath* stacked **LPDDR** (LPDDR6X), TSV-bonded. Genuine memory-on-logic stacking — but **LPDDR, NOT HBM.**
- **Explicit HBM ALTERNATIVE** — Qualcomm claims 6× bandwidth/watt vs HBM, avoids HBM packaging/thermals. AI250 (Gen1) sampling mid-2027, commercial 2028; AI300 Gen2.
- Named customers: **Meta** (Dragonfly C1000 Oryon CPU, 2028), **Microsoft Azure** (AI250/AI300 HBC). **Samsung** = named LPDDR6X sample supplier; **SK Hynix NOT named.** QCOM stock +15% on Investor Day.
- **FRAMING-ERROR-CAUGHT:** memory-on-logic stacking IS in the source, but the HBM/SK-Hynix tailwind is POSTER INVENTION — HBC is designed to DISPLACE HBM (lower cost/power LPDDR). Same HBC as earlier-session Round 3, now escalated (named customers + 2028 commercial).

## SUBAGENT 2 — Memory-on-logic trend + HYNIX positioning
- **Trend REAL + accelerating** but poster conflates 4 tracks: A (HBM-on-interposer, now); **B (HBM logic base die = HBM4, SK Hynix+TSMC, PRODUCTION NOW)**; C (full MoL via SoIC/HBC, 2027 niche→2029 scale); D (phone LLW DRAM, HBM-inspired not true MoL, 2H2027).
- **Phone claims SUBSTANTIALLY OVERSTATED:** Samsung phones = no roadmap; Apple = speculative; Huawei LLW = real but not hybrid-bonded MoL; Qualcomm phone NPU (CXMT 3D DRAM) = real but niche China-Android. AI-XPU 2028-29 = more credible (NVIDIA base-die confirmed; Google/Broadcom directional).
- **THE REFRAME:** HBM4 already IS memory-on-logic (Track B — foundry logic base die + DRAM stacked above). SK Hynix produces it NOW (~70% NVIDIA HBM4, UBS). Memory-on-logic does NOT disintermediate SK Hynix — SK Hynix LEADS it. **Moat = no logic foundry (not even TSMC) can fab advanced DRAM cells.**
- **Bull/bear adjudication:** BULL stronger 2026-2029 (TSMC CoWoS roadmap adds MORE HBM — 24 stacks/pkg 2029; base-die transition raises HBM ASP not cuts units; DRAM-cell fab = memory moat). BEAR is 5-10yr structural (full Track-C SoIC substitution — implausible given LLM memory appetite >> SoIC capacity).
- **VALUE ACCRUAL:** TSMC clearest long-run winner (CoWoS + SoIC + base-die foundry). SK Hynix retains DRAM moat + mild base-die margin erosion risk.
- **🚨 GENUINE NEW RISK (both subagents converged):** NVIDIA designing own HBM logic base die — 3nm, trial H2 2027, custom HBM4E 2028. Margin squeeze on the base-die COMPONENT only (SK Hynix still makes DRAM dies above) = 2028+ MARGIN story, NOT TAM. SK Hynix HBM5 hybrid-bonding 2029-2030 (The Elec, T2 Korean).
- **SK Hynix verdict: LEADER, one specific 2028+ vulnerability** (NVIDIA base-die self-design + Samsung HBM4E capacity = pricing-power narrowing on the full stack).

---

## CASCADE (Critical Rule #10, same commit)
- HYNIX thesis: poster-framing corrected (4-track conflation + inverted HBM read); HBM4=Track-B SK-Hynix-LEADS; Qualcomm HBC bounded inference-LPDDR substitution (margin mix-down not TAM); NEW 2028+ watch = NVIDIA base-die self-design. HOLD.
- SUMCO: mild positive (advanced-node wafer demand from SoIC/HBM expansion).
- KIOXIA/SNDK: orthogonal (DRAM-on-logic not NAND) — no update.
- TC-12 link: LPDDR-vs-HBM margin + base-die margin = margin-layer dynamics.
- subagent-cost-yield-ledger: 2-fire.

## NEW FALSIFIER-WATCH (HYNIX, 2028+)
NVIDIA self-designed HBM base die (H2 2027 trial → 2028 custom HBM4E) SUCCEEDS AND Samsung satisfies more HBM4E demand → SK Hynix base-die design value + full-stack pricing power narrows. Margin risk, not TAM. Quarterly monitor alongside Samsung-HBM-share + CXMT-Tier-1 watches. Distinct from the Qualcomm-HBC inference-niche LPDDR-substitution watch (separate, bounded).
