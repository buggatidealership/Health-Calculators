# Jensen Huang Computex 2026 Keynote — INGEST + Cross-Portfolio Cascade

**Date logged:** 2026-06-01
**Event:** Jensen Huang NVIDIA Computex 2026 keynote, Taipei Music Center, 11am Taipei = 11pm ET Sunday May 31
**Source:** Multiple T2 verified post-keynote reports
**Source validity:** T2 multi-source (SiliconANGLE, Tom's Hardware, NVIDIA GeForce blog T1, CNBC, Korea Herald, Notebookcheck)
**WORKFLOW:** INGEST + TRACE (separate from `2026-05-31-evening-brief.md` per user-clarified workflow)

---

## Verified facts extracted from keynote

### Vera Rubin platform — full production announced

Per [SiliconANGLE T2](https://siliconangle.com/2026/06/01/nvidia-ramps-production-vera-rubin-foundation-next-generation-ai-factories/) + [Korea Herald T2](https://www.koreaherald.com/article/10761132):

| Spec | Value | Implication |
|---|---|---|
| Production status | **Full production NOW** | Mass production H2 2026 |
| Architecture | Vera CPU + Rubin GPU on MGX rack-scale | 3rd gen MGX |
| Performance vs Blackwell | **3.5× training**, **5× inference** | Material step-function |
| PCIe | **PCIe Gen6 at 1.4 TB/s bandwidth** | First MGX rack with Gen6 |
| Memory | **1.2 TB/s LPDDR5X ECC** | Korean memory confirmed |
| Supply chain partners | **350+ partners across 30 countries** | Massive supplier breadth |
| Server OEMs | **Dell, HPE, SuperMicro, Lenovo** | HPE explicitly named |

### RTX Spark Superchip — N1X consumer brand confirmed

Per [Tom's Hardware T2](https://www.tomshardware.com/laptops/nvidia-unveils-rtx-spark-superchip-at-computex-2026-new-platform-promises-to-turn-windows-into-an-agentic-ai-os-with-arm-cpu-blackwell-gpu-and-128gb-unified-memory) + [NVIDIA GeForce blog T1](https://www.nvidia.com/en-us/geforce/news/computex-2026-nvidia-geforce-rtx-announcements/) + [Notebookcheck T2](https://www.notebookcheck.net/Nvidia-N1X-officially-confirmed-to-arrive-as-the-RTX-Spark.1312010.0.html) + [CNBC T2](https://www.cnbc.com/2026/05/31/nvidias-new-chip-to-power-fresh-line-of-windows-laptops-by-dell-hp.html):

| Spec | Value |
|---|---|
| Brand name | RTX Spark (N1X = internal/leaked codename; RTX Spark = official consumer brand) |
| CPU | Up to 20 ARM cores |
| GPU | Blackwell, 6144 CUDA cores |
| Memory | 128GB LPDDR5X unified |
| Memory bandwidth | Up to 300 GB/s |
| CPU↔GPU interconnect | NVLink C2C |
| CPU design | **Custom-designed by MediaTek** (ARM-licensed) |
| Context handling | 120B-parameter models + 1M token context |
| OEM partners (confirmed) | **Dell, HP, Lenovo, Microsoft Surface, Asus, MSI** + Acer, GIGABYTE follow |
| Timeline | Fall 2026 availability; broader early 2027 |
| Positioning | "Agentic AI OS" — Windows as agentic platform |

### Spec discrepancy resolution

May 31 evening brief said "16-channel DDR5 enabling >500GB/s memory bandwidth" — that was inaccurate. Official Computex spec: **128GB LPDDR5X at 300 GB/s** (not DDR5; not >500GB/s). Yesterday's [N1X dissection T2](https://www.tomshardware.com/laptops/nvidia-unveils-rtx-spark-superchip-at-computex-2026-new-platform-promises-to-turn-windows-into-an-agentic-ai-os-with-arm-cpu-blackwell-gpu-and-128gb-unified-memory) framework (LPDDR5X) is confirmed correct.

---

## N-th order cascade (per workflow #2 TRACE)

### Trigger: Vera Rubin in full production + 350+ supply chain partners + RTX Spark formal launch

**1st order (P>80%) — direct silicon supply chain:**
- **HYNIX (held 12.43%)**: 1.2 TB/s LPDDR5X ECC per Vera Rubin rack confirmed; Korean memory explicitly named per [Korea Herald T2](https://www.koreaherald.com/article/10761132). HBM4 demand timing (H2 2026 Vera Rubin mass production) aligns with HYNIX's 70% HBM share for Vera Rubin per existing thesis. Stage 4 priced-to-perfection holds; this is confirmation not new info.
- **ARM (held 11.36%)**: 5-leg narrative fully validated — Vera CPU + RTX Spark CPU both ARM-licensed (Vera via NVDA direct license; RTX Spark via MediaTek subcontracted design). Royalty stream materializes at both datacenter Vera tier AND PC RTX Spark tier. The N1X→RTX Spark consumer brand confirms PC OEM channel intact.
- **ALAB (held 6.51%)**: **PCIe Gen6 at 1.4 TB/s bandwidth** is the headline interconnect spec — direct demand for ALAB Aries Gen6 retimers + Scorpio scale-up fabric. **Material 1st-order beneficiary.** Combined with N1X PC-tier PCIe Gen5 + datacenter Vera Rubin Gen6 = dual-vector ALAB demand.
- **NVDA (private exposure)**: Vera Rubin full production confirmed; next-gen platform timeline intact; OEM channel (Dell + HPE + Supermicro + Lenovo) all named.

**2nd order (P~60%) — adjacent infrastructure:**
- **MURATA (held 13.06%)**: 350+ supply chain partners across 30 countries = massive MLCC content density across the Vera Rubin cohort. Premium passive component demand at every Vera Rubin server build.
- **Substrate cohort** (IBIDEN, SEMCO, AT&S, Unimicron, Kinsus): each Vera Rubin rack requires advanced ABF substrate; 350+ partners = pro-rata demand step-up.
- **Test equipment (Advantest, Teradyne — watchlist)**: Vera Rubin = new silicon validation cycle; SoC test demand at frontier-tier accelerator. Reinforces watchlist deep-dive case.
- **Thermal solutions (Auras — watchlist)**: rack-scale Vera Rubin = liquid cooling / vapor chamber demand at scale.
- **MediaTek (non-portfolio, Taiwan TSE)**: confirmed as N1X custom CPU designer. ARM-licensed customer; not investable per existing investability filter (Taiwan TSE accessible but no held position).

**3rd order (P~40%) — workflow / agentic implications:**
- RTX Spark positioned as "agentic AI OS" running 120B-parameter local models with 1M-token context. This validates the **edge AI proliferation thesis** (now 9+ data point cluster: Apple Siri + Liquid AI + StepFun + IBM Granite + Meta pendant + Gemini Spark + NVDA N1/N1X/RTX Spark + Stepfun 3.7 + PrismML Bonsai).
- **DDOG (held 6.64%)**: latent — if 120B-parameter local models running on consumer hardware become mainstream, **endpoint observability** for local agent fleets emerges as net-new category. Per yesterday's 4-layer enterprise AI cost stack analysis (`signals/cross-source-log/2026-05-31-evening-brief.md`), DDOG is contested at this tier vs NOW (Traceloop) + MSFT Agent 365. No DDOG product confirmation; watch.

**4th order (P~20%) — speculative tail:**
- 350+ supply chain partners across 30 countries = geographic decentralization of AI infrastructure cohort. Sovereign AI implications reinforced (SoftBank French DC + UAE G42 + Saudi HUMAIN + Korea Samsung).
- If RTX Spark consumer adoption crosses 5-10M units/yr by 2028, Apple competitive response (M5/M6 acceleration) intensifies — multi-year drag on premium PC market dynamics that may not be in current portfolio sizing.

---

## Cross-portfolio cascade impact (per Critical Rule #10)

| Ticker | Held % | Computex signal | Cascade direction |
|---|---|---|---|
| **ARM** | 11.36% | Vera CPU + RTX Spark CPU both ARM-licensed; 5-leg narrative validated | REINFORCED — but Stage 4 priced; NO ADD |
| **HYNIX** | 12.43% | 1.2 TB/s LPDDR5X ECC per Vera Rubin + Korean memory named | REINFORCED — Stage 4 priced; NO ADD |
| **ALAB** | 6.51% | PCIe Gen6 at 1.4 TB/s in Vera Rubin = direct retimer/fabric demand | STRONGLY REINFORCED — dual-vector (datacenter Gen6 + PC tier Gen5); SIZE UP candidate strengthens per user 2026-05-29 flag |
| **MURATA** | 13.06% | 350+ supply chain partners; passive content density across Vera Rubin cohort | REINFORCED weakly — incremental |
| **DDOG** | 6.64% | RTX Spark positioned as agentic AI OS at 120B-param + 1M-context | LATENT — endpoint observability category if mainstreams; no product confirmation |
| **NVDA (private)** | n/a | Vera Rubin full production + OEM channel intact | POSITIVE |
| **HPE** | not held | **Explicitly named as Vera Rubin server OEM** | Material for HPE Q2 FY26 GRADE — adds to POST-PREDICTION CONTEXT (FY26 outlook commentary should reference Vera Rubin) |
| **Watchlist names (STX/WDC/PSTG/SNPS/CDNS/Advantest/Teradyne/AIP)** | n/a | 350+ supply chain partners = breadth confirmation | Watchlist conviction reinforced; no sizing change |

---

## HPE Q2 FY26 GRADE — POST-PREDICTION CONTEXT (added 2026-06-01 morning)

**HPE explicitly named** as Vera Rubin server OEM at Jensen keynote 2026-06-01 alongside Dell, SuperMicro, Lenovo per [SiliconANGLE T2](https://siliconangle.com/2026/06/01/nvidia-ramps-production-vera-rubin-foundation-next-generation-ai-factories/).

**Implication for HPE Q2 FY26 GRADE Target 5 (FY26 outlook commentary)**: if HPE references Vera Rubin in their FY26 outlook tonight, that's catalyzed by Computex 2026-06-01 keynote, NOT by my 2026-05-29 prediction logic. The prediction stays LOCKED; Vera Rubin commentary in HPE's print becomes POST-PREDICTION CONTEXT for the cohort framework validation at Target 5 specifically.

This is appended to the HPE GRADE template (`predictions/2026-06-01-HPE-Q2FY26-GRADE.md`) so tonight's scoring attributes correctly.

---

## Position implication (per Critical Rule #11)

**Position implication:** NO IMMEDIATE SIZING TRIGGER. Computex confirms structural theses for held positions (ARM + HYNIX + ALAB + MURATA + DDOG latent). The TOP cascade beneficiary is **ALAB** (PCIe Gen6 1.4 TB/s in Vera Rubin = direct retimer demand at frontier-tier accelerator); SIZE UP candidate case strengthens but pending architecture detail verification on AWS RNG (per existing thesis flag). The HPE explicit-OEM-naming adds POST-PREDICTION CONTEXT to tonight's HPE Q2 FY26 GRADE scoring. Monday execution plan unchanged (MDB €6,000 + DDOG €5,000 + NOW €4,500 = €15,500 total per `portfolio/changes.md`).

---

## Methodology notes

**Principle #36 (AI-native operating frame) application**: Computex keynote happened ~12 hours ago; INGEST + cascade + cross-portfolio analysis completed in <15 min wall-clock via parallel WebSearch. Would have been "2-4 hours" in prior human-analyst frame.

**Reasoning-tagging discipline applied**: every probability claim in N-th order cascade carries explicit P>X% / P~Y% marker (per `~/.claude/reasoning-tagging-hook.py` codified 2026-05-31).

**Spec discrepancy resolution**: yesterday's flagged "DDR5 16-channel" framing from May 31 evening brief was inaccurate; today's verified Computex spec = LPDDR5X 300 GB/s. Consistent with yesterday's N1X dissection (`2026-05-31-nvda-n1x-n1-laptop-chip-dissection.md`). No thesis impact.

---

## Cross-references

- `signals/cross-source-log/2026-05-31-nvda-n1x-n1-laptop-chip-dissection.md` — yesterday's N1X dissection; RTX Spark consumer brand now confirmed
- `signals/cross-source-log/2026-05-31-nvda-n1x-unbiased-money-flow-analysis.md` — unbiased flow-of-funds; cascade beneficiaries verified
- `signals/cross-source-log/2026-05-31-soc-building-block-layer-analysis.md` — SNPS/CDNS/Advantest/Teradyne/AIP candidates; Computex confirms breadth
- `signals/cross-source-log/2026-05-31-evening-brief.md` — May 31 evening brief; corrects DDR5 spec discrepancy
- `predictions/2026-06-01-HPE-Q2FY26-GRADE.md` — HPE GRADE template; POST-PREDICTION CONTEXT added
- `companies/ARM/thesis.md` — 5-leg narrative + Vera CPU + RTX Spark validated
- `companies/HYNIX/thesis.md` — 1.2 TB/s LPDDR5X ECC + Korean memory named
- `companies/ALAB/thesis.md` — PCIe Gen6 1.4 TB/s in Vera Rubin = STRONGLY REINFORCED
- `companies/MURATA/thesis.md` — 350+ supply chain partners reinforces MLCC density
- `companies/DDOG/thesis.md` — RTX Spark agentic AI OS positioning = latent endpoint observability category
- `meta/todo.md` — Computex post-event brief 2026-06-06 may include follow-on announcements; this artifact captures keynote-day INGEST
