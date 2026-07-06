# HBF (High Bandwidth Flash) Trajectory Monitor — standing tracker

**Created:** 2026-06-28
**Owner thesis:** `companies/SNDK/thesis.md` (KEEP-PREFERRED) + `companies/KIOXIA/thesis.md` (TRIM-CANDIDATE)
**Origin:** `signals/cross-source-log/2026-06-28-sndk-vs-kioxia-structural-moat-headtohead-trim-decision-ensemble.md` — HBF is the single open hinge in the SNDK-keep / KIOXIA-trim verdict (3/3 Opus 4.8 ensemble, ~71%). All 3 agents independently flagged HBF-roadmap slippage as the one falsifier that flips the call.

**Why this file exists:** the trim decision rests on HBF becoming an adopted AI-inference memory tier WITH SanDisk inside the winning standard. That is a 2027 roadmap, not a shipped fact. This monitor converts "watch HBF" into specific, dated, searchable checkpoints so the probability updates on evidence, not vibes.

---

## Macro anchor (research-verified 2026-06-28, T1/T2 prior subagents)

HBF = TSV-stacked NAND in HBM form factor, targeting ~HBM bandwidth at 8–16× capacity / similar cost. SanDisk + SK Hynix launched an OCP standardization workstream Feb 25 2026 ([SanDisk PR](https://www.sandisk.com/company/newsroom/press-releases/2026/2026-02-25-sandisk-and-sk-hynix-begin-global-standardization-of-next-generation-memory-solution-high-bandwidth-flash)). Samples targeted H2-2026; first AI inference systems early-2027. NVIDIA ICMS/Rubin already standardized *NVMe-SSD* KV-cache offload; HBF is the proposed tier *above* SSD, *below* HBM. Kioxia has a parallel HBF prototype (5TB/64GB/s) + GP/CM9/LC9 product but is OUTSIDE the OCP alliance (proprietary track).

---

## Trajectory hypotheses (my model, 2026-06-28)

| # | Hypothesis | P | Verdict effect |
|---|---|---|---|
| H1 | HBF becomes a real adopted tier AND SanDisk's standard wins | ~45% | keep-SNDK → ~85% |
| H2 | HBF ships but the standard FRAGMENTS (Kioxia proprietary + Samsung own-track + OCP/JEDEC split) | ~35% | no standard-setter moat → revert to valuation → KIOXIA |
| H3 | HBF STALLS / substitutes win (HBM4E capacity + CXL pooling + "NVMe is good enough") | ~20% | both = commodity NAND → valuation governs → KIOXIA |

Update these weights at each checkpoint below.

---

## The three gates (HBF-as-moat needs ALL three; any one failing collapses it)

### GATE 1 — STANDARD: does one spec win, and is SanDisk inside it?
| Search target | Validates H1 (P↑) | Invalidates → H2 (P↓) |
|---|---|---|
| OCP Global Summit (~Oct 2026) proceedings + workstream docs | Ratified/published HBF spec; new signatories (esp. Micron, a hyperscaler, NVIDIA) | Spec slips; stays a 2-member MOU |
| JEDEC standards/press pages | JEDEC adopts the OCP HBF spec (single standard) | JEDEC opens a competing HBF/CXL-flash track |
| Samsung memory roadmap / IR + Korean press (삼성 HBF) | Samsung JOINS SanDisk's standard | Samsung announces its OWN HBF — biggest fragmentation signal |
| Kioxia IR (JP: キオクシア HBF 標準化) | Kioxia joins the OCP alliance | Kioxia formalizes proprietary HBF outside it |

### GATE 2 — SILICON: does it work at spec / yield / cost / on schedule?
| Search target (venue) | Validates (P↑) | Invalidates (P↓) |
|---|---|---|
| Flash Memory Summit / FMS (~Aug 2026) + Hot Chips (~Aug 2026) | HBF parts demoed at/near target bandwidth; credible yield commentary | No silicon shown; "research prototype" hedging |
| ISSCC (Feb 2027) / VLSI / IEDM technical papers | Write-endurance + latency + thermal-in-HBM-form-factor solved | Papers expose endurance/latency/thermal wall for NAND in a memory role |
| SanDisk + SK Hynix earnings calls (Q-by-Q) | Samples shipped ON SCHEDULE H2-2026; named eval customers | **Sample slip past H2-2026 — THE explicit reversal trigger** |
| Teardown/trade press (Tom's Hardware, ServeTheHome, Blocks&Files, TechInsights) | Independent confirmation of 8–16× capacity / cost claim at volume | "8–16× at similar cost" fails; HBF priced near HBM |

### GATE 3 — DEMAND: does the AI stack pull HBF as a *distinct* tier?
| Search target | Validates (P↑) | Invalidates → H3 (P↓) |
|---|---|---|
| NVIDIA GTC keynotes + NVIDIA technical blogs | NVIDIA names HBF (not just NVMe SSD) as a memory tier in Rubin-successor reference arch | Roadmap keeps KV-cache on NVMe SSD / HBM only — HBF skipped |
| Hyperscaler engineering blogs (Meta/Google/MS/AWS) + OCP | Production KV-cache / embedding / weight offload to HBF | Stays on NVMe; or moves to CXL-attached DRAM |
| CXL Consortium + HBM4/HBM4E roadmaps (the substitutes) | HBM capacity stalls + CXL latency too high → HBF fills the gap | HBM4E capacity jumps OR CXL pooling matures → HBF niche shrinks |
| Academic / SemiAnalysis memory-hierarchy analysis | Independent modeling shows an HBF-shaped gap in the memory wall | Modeling shows the gap closes via HBM/CXL without a new tier |

**Highest-information single event:** NVIDIA explicitly designing HBF into a reference platform → would move H1 from ~45% toward ~70% in one keynote (my model).

---

## Catalyst calendar (wired to todo.md [CAL] items)

| ~Date | Event | Gate | What it reads |
|---|---|---|---|
| ~Aug 2026 | FMS + Hot Chips | Gate 2 | first hard sample/yield signal |
| ~late-Jul/early-Aug 2026 | SanDisk Q4 FY26 call + SK Hynix Q2-26 call | Gate 2 | sample-shipment-on-schedule confirmation (reversal-trigger checkpoint) |
| ~Oct 2026 | OCP Global Summit | Gate 1 | spec status + signatories (watch Samsung fork) |
| ~late-Oct 2026 | SanDisk Q1 FY27 + SK Hynix Q3-26 calls | Gate 2 | HBF revenue/eval-customer commentary |
| Feb 2027 | ISSCC 2027 | Gate 2 | endurance/latency/thermal durability papers |
| ~Mar 2027 | NVIDIA GTC 2027 | Gate 3 | reference-architecture HBF inclusion (highest-info event) |
| early 2027 | "first AI inference systems with HBF" milestone | ALL | go/no-go on the whole thesis |

---

## Decision linkage

- **Cheapest early-warnings (watch first):** (a) SanDisk Q-call sample confirmation (Gate 2), (b) any Samsung-own-HBF announcement (Gate 1). Either fires before the slower demand gate resolves.
- **Reversal trigger (flips trim-KIOXIA → reconsider):** HBF samples slip materially past H2-2026 OR the standard fragments through 2027. If fired, KIOXIA's ~3× cheaper valuation + 60%-capacity-anchor + SK-Hynix-21%-ownership make it the better hold.
- **Confirmation trigger (strengthens keep-SNDK to ~85%):** OCP spec ratified with a new major signatory (Micron/hyperscaler/NVIDIA) AND samples ship on schedule.

## Update log
- 2026-06-28 — file created; H1 45% / H2 35% / H3 20%; no checkpoint resolved yet. Next read: FMS/Hot Chips + SanDisk Q4 FY26 call (~Aug 2026).
