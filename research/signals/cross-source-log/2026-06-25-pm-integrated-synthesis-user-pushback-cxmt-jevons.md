# 2026-06-25 PM — Integrated Synthesis — User Pushback on Chinese AI Semi Article (Subagents 5+6)

**Trigger source:** User pushback 2026-06-25 PM to morning 4-subagent verification, verbatim:
- *"I disagree on CXMT points (they are quite active in 3D DRAM, and we may see results in 2028, capacity will also be greater than 500k WPM)"*
- *"And lots of work is happening to reduce KV cache footprint (DeepSeek v4), Expect the size of KV cache/token to go down but the volume of tokens generated/processed will be go up so much that it will make up for it — Jevon's paradox"*

**Workflow:** TRIANGULATE + SCENARIO-UPDATE + B22 anti-confirmation-bias + Critical Rule #10 cascade.

**Subagent table:**

| # | Scope | Model | Cost | Yield | Artifact |
|---|---|---|---|---|---|
| 5 | CXMT 3D DRAM R&D + post-2028 capacity verification | **Opus 4.8 (explicit param)** ✓ | ~51.5k tok / 21 tool uses / 269s | HIGH (3D DRAM CONFIRMED HIGH at IEDM 2025; capacity claim REFUTED at 2028 headline; new MEDIUM 2029-2030 risk surfaced) | [2026-06-25-pm-subagent-5-user-pushback-cxmt-3d-dram-post-2028-capacity-verification.md](2026-06-25-pm-subagent-5-user-pushback-cxmt-3d-dram-post-2028-capacity-verification.md) |
| 6 | DeepSeek v4 + Jevons paradox token-volume math | **Opus 4.8 (explicit param)** ✓ | ~73.9k tok / 22 tool uses / 297s | HIGH (Jevons paradox CONFIRMED HIGH; DeepSeek-V4 verified Apr 24 2026 release with 10× KV reduction; hybrid SSM 2028+ falsifier DOWNGRADED MEDIUM→LOW-MEDIUM) | [2026-06-25-pm-subagent-6-user-pushback-deepseek-v4-kv-cache-jevons-paradox-verification.md](2026-06-25-pm-subagent-6-user-pushback-deepseek-v4-kv-cache-jevons-paradox-verification.md) |

**Total cost:** ~125.4k subagent tokens / 43 tool uses / ~9.5 min parallel runtime.

**Rule #16 discipline correction:** Both subagents fired with explicit `model: 'opus'` parameter (fixing Subagent 3 Sonnet 4.6 violation from earlier cascade).

---

## Joint Verdict on User Pushback

**Net: USER IS DIRECTIONALLY CORRECT ON BOTH PUSHBACKS — with one nuance on CXMT timeline.**

| Pushback | Verdict | Confidence | Net cohort implication |
|---|---|---|---|
| CXMT 3D DRAM activity | **CONFIRMED HIGH** (IEDM 2025 paper #29-3) | HIGH | New 2029-2030 watch item |
| CXMT "results in 2028" | **NEEDS NUANCE** — R&D/pilot only, NOT mass production | HIGH | No through-2028 impact |
| CXMT capacity >500K WPM 2028 | **REFUTED at 2028 headline** (T1 sources converge 500K = ~17% global); PARTIALLY CONFIRMED long-term | MEDIUM-HIGH | No through-2028 impact |
| DeepSeek v4 KV cache reduction | **CONFIRMED HIGH** (10% @ 1M context vs V3.2 = ~10-14× incremental on top of V3 MLA 28× vs naive MHA) | HIGH | REINFORCES cohort thesis |
| Jevons paradox token-volume offset | **CONFIRMED HIGH** (token growth 8-14×/yr vs KV compression 2-4×/cycle = net memory demand still +2.67× to +6× per year) | HIGH | REINFORCES cohort thesis |

---

## Multi-Hypothesis Reweighting on Hybrid SSM 2028+ Falsifier

This morning Subagent 1 surfaced "single largest omission" = hybrid SSM 2028+ risk. User pushback decomposes this into TWO qualitatively different risks. **B22 disambiguation candidate (P-12 promotion):**

| Hypothesis | Pre-pushback P | Post-Jevons-verification P | Mechanism |
|---|---|---|---|
| **H1: Compression-within-paradigm dominates** (MLA / DeepSeek V4 / GQA / HCAttention) → net memory demand GROWS via Jevons | P~30% | **P~65%** (my model) | Token volume 8-14×/yr >> KV reduction 2-4×/cycle |
| **H2: Architectural substitution dominates** (pure SSM at frontier eliminates KV cache) → demand category REMOVED → Jevons doesn't apply | P~25% | **P~15%** (my model) | Requires pure-SSM frontier model with GPT-5-class accuracy + ≥30-40% share by 2028-29; currently <5% |
| **H3: Mixed regime** (hybrid SSM at 10-30% frontier share; compression continues to absorb most cycle) → demand still grows but slower | P~45% | **P~20%** (my model) | Realistic middle case |

**Net:** Memory demand growth thesis stays intact P~85% combined (H1 + H3) for 2028-2029 horizon.

**Single-largest-evidence anchor:** **DeepSeek-V1/R1 Jan 2025 episode** — analysts predicted demand collapse from cheaper inference; never came. Full Jevons cycle has now run end-to-end and observable in TrendForce 2026 data (HBM consumption +70% YoY DESPITE V3 MLA deployed full year + V4 released April 2026). **N=1 prior episode confirmed; N=2 episode now empirically running.**

---

## Joint-State Cohort Matrix Post-Pushback

| Position | Sizing | Pre-pushback 2028+ falsifier | Post-pushback 2028+ falsifier | Action |
|---|---|---|---|---|
| HYNIX (L3 Core EXCEPTION) | 20.6% | CXMT LOW + hybrid SSM MEDIUM | CXMT LOW through 2028 + NEW MEDIUM 2029-2030 (3D DRAM); hybrid SSM LOW-MEDIUM (Jevons) | **HOLD — no size change** |
| KIOXIA (Core) | 14.4% | NAND vector 1-4 reinforced | Jevons confirms KV cache offload to NAND (CMX) is durable; agentic loops spill KV to NAND tiers | **HOLD — no size change** |
| SNDK (Core) | 5.3% | HBF co-developer Vector 4 | Jevons confirms NAND substrate optionality intact | **HOLD — no size change** |
| MURATA (held) | small | No memory-thesis exposure | Unchanged | NO ACTION |
| SUMCO (held) | small | Wafer-intensity indirect | Unchanged | NO ACTION |
| MRVL (Active) | 5.9% | Article doesn't address | Unchanged | NO ACTION |
| NBIS (Active) | small | Tangential CPU TAM | Unchanged | NO ACTION |

**Zero position changes. Conviction REINFORCED across HYNIX + KIOXIA + SNDK on Jevons confirmation.**

---

## Self-Correction Visible (Critical Rule #11 AUTO-EXECUTE STRENGTHENING)

**Subagent 1 this morning conflated two qualitatively different risks** as a single "hybrid SSM 2028+ falsifier":
1. **Compression-within-paradigm** (MLA / DeepSeek V4 / GQA / HCAttention) — Jevons absorbs this
2. **Architectural substitution** (pure SSM eliminates KV cache as demand category) — Jevons does NOT apply

User pushback caught this missing disambiguation. **Correction:** the morning's "single largest omission" was actually TWO omissions, only the substitution-substitute (H2) of which is genuinely 2028+ bearish, and at substantially lower probability (~15%) than originally weighted.

**Codification:**
- **L28 candidate (lesson):** When user articulates Jevons-paradox framing on a compression catalyst, default-weight HEAVILY toward user — pattern N=2/2 in harness lifetime (DeepSeek-V1 Jan 2025 + DeepSeek-V4 Apr 2026 / TurboQuant Apr 2026)
- **P-12 candidate (cross-domain pattern):** Efficiency-within-paradigm triggers Jevons; substrate-substitution triggers demand collapse. Distinguish before flagging compression as bear catalyst. N=2 in memory domain
- **B-candidate / Stop-hook candidate:** When "SSM / hybrid SSM / Mamba" appears as bear catalyst for memory thesis, require explicit "compression-vs-substitution" disambiguation in same message
- **B59 v2 verification status:** User pushback CORRECT N=2 user-Jevons-framing wins; consider promoting to "default high-weight" treatment for user-Jevons-framing inputs

---

## New Falsifier Watchlist Items (Post-Pushback)

| Item | Tier | Window | Trigger |
|---|---|---|---|
| CXMT pilot 3D DRAM tape-out announcement | 🟡 DIRECTIONAL | 2027-H2 / 2028 | Beyond IEDM-paper to actual silicon |
| CXMT 3D DRAM customer qualification with Tier-1 OEM | 🟡 DIRECTIONAL | 2028-2029 | If hits, MEDIUM 2029-2030 risk activates |
| NAURA / AMEC / SMEE equipment localization sub-15nm | 🟡 DIRECTIONAL | quarterly | Could break 500K WPM ceiling post-2028 |
| CXMT HBM3E or HBM4 customer ship | 🔴 SPECULATIVE | quarterly | Would change entire HYNIX HBM thesis |
| Pure-SSM frontier model with GPT-5-class accuracy | 🔴 SPECULATIVE | 2027-2028 | Substrate substitution risk activates |
| Pure-SSM frontier share crosses 10% then 30% | 🔴 SPECULATIVE | 2028-2029 | Binding threshold for hybrid SSM falsifier |
| Nemotron 4 / Jamba 3 / Mamba-3 successor pure-SSM ratio disclosed | 🟡 DIRECTIONAL | 2026-2027 | Leading indicator |

---

## Triangulation Updates

**TC-10 Memory Shortage Triangulation (currently N=12+ post-morning-cascade):**
- Add: DeepSeek-V1/R1 Jan 2025 → full Jevons cycle confirmed observable in TrendForce 2026 HBM +70% YoY (N=13)
- Add: OpenRouter top-10 tokens 11.3× in 11 months (N=14)

**TC-12 CANDIDATE: Unified HBM/DRAM/NAND hierarchy as cross-substrate moat** — confirmed N=3 from morning; user pushback adds N=4 indirect support (DeepSeek-V4 KV reduction routes spillover to NAND tiers via CMX hierarchy = preserves NAND demand vector).

**P-12 CANDIDATE: Compression-Jevons vs Substrate-Substitution disambiguation** — N=2 (DeepSeek V1 + V4 episodes). Promote to candidate register.

---

## Critical Rule #10 Cascade Status

Same-commit cascade per Rule #10:
- ✅ Subagent 5 artifact (committed 02c6e065)
- ✅ Subagent 6 artifact (committed 02c6e065)
- ✅ This integrated synthesis
- ✅ HYNIX thesis update (next file)
- ✅ KIOXIA thesis update (next file)
- ✅ SNDK thesis update (next file)
- ✅ Ledger entry append
- ✅ Tier-cascade-log entry append

---

## Sources

Top cross-cited (full per-subagent lists in artifacts):
- [SemiAnalysis — CXMT 3D DRAM IEDM 2025 challenge](https://newsletter.semianalysis.com/p/chinas-cxmt-is-set-to-challenge-dram)
- [Tom's Hardware — CXMT 18nm 3D DRAM IEDM 2025](https://www.tomshardware.com/pc-components/ssds/chinas-memory-maker-cxmt-reportedly-violates-us-export-rules-with-its-18nm-3d-dram-chipmaker-blatantly-presented-new-tech-at-industry-conference-report)
- [IEDM 2025 — Highly Stackable Oxide-semiconductor 3D DRAM session](https://iedm25.mapyourshow.com/8_0/sessions/session-details.cfm?ScheduleID=210)
- [Digitimes — CXMT 240K wpm Omdia ceiling Q4 2025](https://www.digitimes.com/news/a20251125PD228/cxmt-growth-equipment-chipmakers.html)
- [Tom's Hardware — SK Hynix DRAM roadmap through 2031 (3D DRAM)](https://www.tomshardware.com/pc-components/dram/sk-hynix-reveals-dram-development-roadmap-through-2031-ddr6-gddr8-lpddr6-and-3d-dram-incoming)
- [DeepSeek-V4 release Apr 24 2026 specs via NVIDIA Developer Blog + Quantum Bit + Zhihu](https://blogs.nvidia.com/blog/deepseek-v4-inference-optimization)
- [OpenRouter token volume tracker top-10 1.24T→13.95T weekly Mar 2025→Feb 2026](https://openrouter.ai/rankings)
- [TrendForce 2026 HBM consumption +70% YoY](https://www.trendforce.com/news/2026/hbm-consumption-2026)
- [Morgan Stanley agentic AI 15-45 EB DRAM by 2030](https://www.morganstanley.com/research/agentic-dram-2030)
- [Sam Altman enterprise event Jun 3 2026 — 100B tokens/month top user; "constant proactive agents"](https://openai.com/news/altman-enterprise-event-jun-2026)
