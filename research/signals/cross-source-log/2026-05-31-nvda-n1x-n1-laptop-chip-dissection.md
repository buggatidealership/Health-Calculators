# NVDA N1X / N1 Laptop Chip — Spec Dissection + Short/Long-Term Implications

**Date logged:** 2026-05-31
**Source:** User-directed dissection 2026-05-31; primary source [VideoCardz spec leak T2](https://videocardz.com/newz/nvidia-n1x-n1-laptop-chip-specifications); cross-verified against [OC3D T2](https://overclock3d.net/news/cpu_mainboard/nvidia-n1-and-n1x-laptop-chip-specifications-leak/), [Notebookcheck T2](https://www.notebookcheck.net/Nvidia-s-N1X-and-N1-processors-leak-in-full-ahead-of-launch.1311497.0.html), [Tom's Guide T2](https://www.tomsguide.com/computing/cpus/nvidia-n1x-cpu-everything-we-know-so-far), [TechTimes T2](https://www.techtimes.com/articles/317428/20260530/nvidia-arm-laptop-chip-n1x-confirmed-computex-cuda-rtx-5070-gpu-onboard.htm), [ChatForest preview T2](https://chatforest.com/reviews/nvidia-n1x-computex-2026-blackwell-laptop-ai-pc-preview/)
**Source validity:** T2 multi-source convergence on specs; T1 official reveal pending Jensen Computex keynote 2026-06-01 11am Taipei
**Segment classification per principle #29:** consumer-AI + chip-and-foundry segment (same-segment cluster — promotion candidate post-Computex confirmation)
**Cross-reference:** prior `2026-05-30-nvda-msft-arm-coordinated-ai-pc-tease.md` (the tease), `2026-05-31-morning-brief.md` (Dell XPS ship confirmation)

---

## Part 1: Verified spec sheet (4-source convergence)

### N1X (full / high-end variant)

| Spec | Value | Notes |
|---|---|---|
| CPU cores | 20 (10 Cortex-X925 perf + 10 Cortex-A725 efficiency) | ARM-designed reference cores, Armv9.2-A; NOT custom NVDA cores |
| CPU clocks | X925 @ 4.0 GHz, A725 @ 2.8 GHz | Per DGX Spark hardware overview |
| L3 cache | 32 MB | Shared |
| GPU | Blackwell, 48 SMs = 6,144 CUDA cores | Same shader count as desktop RTX 5070 |
| Tensor / RT | 192 5th-gen Tensor (NVFP4) + 48 4th-gen RT cores | Per DGX Spark |
| AI compute | ~1 PFLOP FP4 (sparse) | Per [NVIDIA DGX Spark product page T1](https://www.nvidia.com/en-us/products/workstations/dgx-spark/) |
| Memory | Up to 128 GB LPDDR5X unified | 8,533 MT/s; coherent CPU+GPU pool |
| Process | TSMC 3nm | Per spec leak |
| Power | 45–80W package envelope | Whole CPU+GPU package, NOT CPU-only |
| PCIe | 12 lanes PCIe 5.0 + 5 lanes PCIe 4.0 | Up to 3 M.2 drives supported |

### N1X (cut-down variant)

- 18 CPU cores (9+9), 40 SMs / 5,120 CUDA cores, same 45–80W envelope

### N1 (mainstream variant)

| Spec | Value |
|---|---|
| CPU cores | 12 (8+4) OR 10 (7+3) |
| GPU | 20 SMs (2,560 CUDA) OR 16 SMs (2,048 CUDA) |
| Power | 18–45W |

### Launch context

- Reveal: NVIDIA CEO Jensen Huang Computex keynote 2026-06-01 11am Taipei time
- Dell XPS embargoed launch 2026-05-31 (per `2026-05-31-morning-brief.md`)
- OEM partners confirmed/teased: Dell XPS, Lenovo (multiple), Asus ProArt, Microsoft Surface, MSI (per [Tom's Guide T2](https://www.tomsguide.com/computing/cpus/nvidia-n1x-cpu-everything-we-know-so-far))
- One source slide dated 2024 — NVDA has been working on this 18+ months

---

## Part 2: The KEY non-consensus insight

**N1X full config = GB10 silicon = DGX Spark silicon.** Same 20-core ARM CPU. Same 48-SM Blackwell GPU. Same 128GB LPDDR5X @ 8,533 MT/s. Same 1 PFLOP FP4. Per [VideoCardz T2](https://videocardz.com/newz/nvidia-n1x-n1-laptop-chip-specifications): *"the full N1X uses the same configuration as GB10 in DGX Spark."*

**Implication 1: Zero new silicon risk.** N1X is a derivative repackaging of a chip already shipping in DGX Spark (Q4 2025). Yield, validation, software stack already proven. Time-to-market = packaging + thermal engineering + Windows-on-ARM driver work, not silicon design.

**Implication 2: ARM gets full Armv9 royalty.** Cortex-X925 + A725 are ARM-designed reference cores under ARM's standard IP license — NOT custom cores under an architectural license (like Apple, Qualcomm-Nuvia path). Royalty rate is the FULL Armv9 ~2× v8 rate per `companies/ARM/thesis.md` Leg 1, applied at PC laptop volume. NVDA paid ARM the same way Mediatek or Samsung pays for Cortex IP — predictable royalty stream from FY27 onwards.

**Implication 3: NOT competing with Apple M-series.** 45–80W package is gaming/workstation/creator PC territory (Intel H/HX + AMD HX + RTX discrete GPU laptop). Apple M4 Pro/Max max out at ~40W. Different markets. The right competitive frame is: N1X displaces "Intel HX + NVDA RTX 5070 mobile discrete" combos, NOT MacBook Pro.

**Implication 4: AI compute leapfrog at PC tier.** ~1 PFLOP FP4 vs Qualcomm Snapdragon X Elite (~45 TOPS INT8) vs Apple M4 (~38 TOPS) = 2 orders of magnitude difference. N1X is a separate device category — runs full-fledged 70B-class models locally. Validates the May 30 evening brief ArXiv "Rotary GPU enables 200B+ MoE under limited VRAM" signal at consumer hardware.

---

## Part 3: Short-term consequences (3-6 months)

### Order-by-order cascade

**1st order (P>80%):**
- Q3-Q4 2026 OEM retail availability across Dell XPS, Lenovo, Asus ProArt, Surface, MSI
- ARM royalty stream begins at PC OEM volume (FY27 H2 onwards by ARM fiscal calendar)
- HYNIX/Micron/Samsung LPDDR5X 8,533 MT/s demand step-up at premium PC tier — TBD volume but additive
- Premium PC MLCC density step-up (MURATA / TDK / Yageo) — multi-rail power delivery + NPU + GPU subsystems
- NVDA captures laptop GPU SAM previously won by AMD Radeon mobile + NVDA's OWN discrete RTX 5070 mobile SKU (cannibalization at the high-end laptop GPU tier; net positive ASP capture)

**2nd order (P~60%):**
- App compatibility = primary execution risk — Windows-on-ARM has a multi-year track record of weak app coverage. Microsoft + NVDA need to ship Prism / x86 emulation + native ARM ports in volume to make N1X commercially relevant beyond AI creator workloads
- Pricing tier emerges = ~$2,500-3,500 laptop tier per PCWorld headline framing ("the bill that comes with it") — limits TAM to creator + AI dev + gaming-prosumer segments initially
- Qualcomm Snapdragon X compresses to ≤30W ultrabook tier (the segment N1X is not contesting)
- Intel + AMD respond with price cuts on H-series CPU + integrated NPU SKUs through Q4 2026

**3rd order (P~40%):**
- Microsoft Agent 365 (GA May 1, 2026 per `companies/DDOG/thesis.md` CORRECTION) becomes the default agent runtime on N1X laptops = Microsoft-ecosystem agent stickiness compounds (validates Inference Entry #5)
- DDOG observability for locally-running AI agents on N1X becomes a category gap (TBD whether DDOG ships AI-agent endpoint observability primitives)
- 70B-class local models displace ~5-15% of cloud inference token volume for creator/dev workloads = marginal headwind to hyperscaler token-flow at the long tail (NOT a thesis break)

### Bypass-route check (Critical Rule #9)

If N1X execution slips (app compatibility, thermal/throttling issues, OEM pricing missteps):
- **Bypass within ARM IP ecosystem**: Qualcomm Snapdragon X / Apple M-series / Mediatek capture the AI PC tier they were going to capture anyway — ARM benefits at IP layer regardless
- **Bypass outside ARM**: Intel Lunar Lake / AMD Strix Halo at premium x86 tier — competitive but each has its own NPU+iGPU pitch
- **Non-consensus beneficiary if N1X slips**: HYNIX/Micron LPDDR5X demand mostly unchanged (Snapdragon X / Apple / Intel Lunar Lake also use LPDDR5X); MURATA MLCC density also unchanged. The "AI PC" thesis at the memory/passives layer is resilient to which silicon wins.

---

## Part 4: Long-term consequences (12-36 months)

### 1st order (P>80%)
- ARM PC royalty stream becomes a material new revenue leg by FY28 — adds to the 5-leg ARM narrative (mobile + datacenter Neoverse + AGI CPU + edge + AI PC) per `companies/ARM/thesis.md`
- N1/N1X iterations (N2/N2X on Rubin next gen) become a recurring NVDA product cadence in the PC market — first time NVDA is a PC platform vendor not just a discrete GPU vendor
- HYNIX/Micron/Samsung LPDDR5X-to-LPDDR6 transition gets pulled forward — premium PC tier becomes early adopter of next-gen DRAM standards (was previously only mobile + servers)

### 2nd order (P~60%)
- **Token-flow softening at margin**: 70B-class local inference shifts 5-15% of "personal" inference tokens (chat, code completion, image gen) from cloud to edge. Hyperscaler token revenue growth slows at the tail but not at the agent/enterprise core (where Entry #4 software resilience thesis sits)
- **Apple competitive response**: Apple M5/M6 series likely adds dedicated AI accelerators competing with N1X's NPU-class capability — but Apple stays in ≤40W tier; segment separation persists
- **PC OEM rebalance**: Dell + Lenovo + HP move from "Intel + AMD + Qualcomm" 3-vendor sourcing to "Intel + AMD + Qualcomm + NVDA" 4-vendor sourcing — Intel x86 PC CPU share compresses further (consistent with already-documented Xeon-displacement signal)
- **NVDA discrete laptop GPU TAM compresses** at the high end (N1X integrated GPU = RTX 5070 class) but per-unit ASP captured shifts UP (NVDA captures CPU + GPU + platform vs just GPU)

### 3rd order (P~40%)
- **App ecosystem split**: Windows-on-ARM gets a serious second wind if N1X volume crosses 5-10M units/yr by 2028 → developers prioritize native ARM ports → app coverage gap closes → ARM PC share compounds
- **Edge AI runtime becomes a category**: 1 PFLOP at the edge = inference workloads previously requiring cloud GPU now ship to local — creates a new layer between "device-edge tinyML" and "cloud DC inference" that needs its own observability + governance tooling (DDOG opportunity if executed)
- **NVDA-on-ARM stack vertical integration tightens**: CUDA-on-ARM for laptops establishes the developer beachhead for AGI CPU adoption in datacenter; PC dev environment becomes a marketing funnel for AGI CPU enterprise sales

### 4th order (P~20%)
- **Intel survival pressure**: PC CPU revenue declining + foundry losing → Intel restructures or splits foundry by 2028
- **AGI CPU adoption accelerates** because devs already familiar with CUDA-on-ARM stack from N1X laptops carry stack preference into enterprise

### Bypass-route check (long-term)
- If RISC-V crosses 35% server penetration (currently 25% per `companies/ARM/thesis.md` falsifier #4) AND extends to PC/edge, the entire ARM AI PC compounding story compresses long-term — but RISC-V at PC tier is 5+ years out; not a near-term breaker
- Apple in-house path (M-series ecosystem) is the bypass at ultrabook tier — already discounted in thesis

---

## Part 5: Cross-portfolio cascade impact (per Critical Rule #10)

| Ticker | Held % | Direction | Cascade |
|---|---|---|---|
| **ARM** | 11.36% | STRONG REINFORCE | Cortex-X925 + A725 = full Armv9 royalty stream at PC volume; N1X = GB10 derivative = zero new silicon risk; 5-leg narrative anchored with concrete shipping product |
| **HYNIX** | 12.43% | REINFORCE (modest, incremental) | 128GB LPDDR5X @ 8,533 MT/s per N1X laptop = premium PC tier LPDDR5X demand; HYNIX/Micron/Samsung tri-vendor share roughly stable; additive volume not core thesis driver |
| **MURATA** | 13.06% | REINFORCE (modest) | Premium PC MLCC density step-up — multi-rail power delivery + NPU subsystem + GPU subsystem in single package = higher MLCC content per unit vs commodity laptop |
| **DDOG** | 6.64% | NEUTRAL (latent positive) | Local AI inference at PC creates new observability category (AI-agent endpoint observability); no DDOG product announcement to confirm — WATCH; Microsoft Agent 365 ecosystem advantage on N1X laptops compounds Microsoft-stack competition |
| **NVDA** (private exposure per portfolio) | n/a | POSITIVE | First serious PC platform entry; cannibalizes own discrete laptop GPU at high-end but captures CPU + platform ASP that was Intel/AMD's |
| **MDB** (pending Monday €6,000) | n/a | NEUTRAL | Local AI inference does not displace cloud vector DB at enterprise tier; thesis unaffected |
| **NOW** (pending Monday €4,500) | n/a | NEUTRAL | Workflow agent layer unaffected by laptop silicon shift |
| **TE** | 6.87% | NEUTRAL | Power infra thesis unchanged; PC tier is a small fraction of grid demand |
| **STM** (held) | per holdings | NEUTRAL | Auto + industrial + IMU/MEMS thesis unaffected |

---

## Part 6: Position implication (per Critical Rule #11)

**Position implication:** NO IMMEDIATE SIZING TRIGGER. ARM at 11.36% remains HOLD per existing AGI CPU deep dive Position implication (`companies/ARM/thesis.md`) — SIZE UP to Core tier (12-13%) STILL GATED on (a) Computex June 1-5 confirms royalty-detail + design-win count, (b) Q2/Q3 FY27 earnings quantify AGI CPU revenue + blended margin trajectory, (c) FTC antitrust probe direction clarifies. N1X spec confirmation pre-Computex IS the highest-quality pre-event read; if Computex keynote confirms ARM royalty-rate framing + ships volume forecast, that's the trigger for SIZE UP consideration post-keynote.

Computex 2026 brief 2026-06-06 per `meta/todo.md` is the next scheduled checkpoint.

---

## Cross-references

- `companies/ARM/thesis.md` — Cortex-X925 + A725 royalty stream cascade added
- `companies/HYNIX/thesis.md` — Premium PC LPDDR5X demand cascade added
- `companies/MURATA/thesis.md` — Premium PC MLCC density cascade added
- `companies/DDOG/thesis.md` — Local AI inference observability watch added
- `companies/NVDA/timeline.md` — N1X spec confirmation event added
- `signals/cross-source-log/2026-05-31-morning-brief.md` — Dell XPS N1X ship signal that triggered this dissection
- `signals/cross-source-log/2026-05-30-nvda-msft-arm-coordinated-ai-pc-tease.md` — prior tease that this dissection resolves
- `meta/todo.md` — Computex 2026-06-06 brief is the next checkpoint event
