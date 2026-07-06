# Medical AI Evaluation Framework — Phase 1 codification

**Created:** 2026-06-10
**Purpose:** First-principles evaluation framework for the AI × biotech/medical intersection. Built from scratch because the semi/robotics toolkit (BOM math, capacity gates, wafer supply) does NOT transfer — the binding constraints in medicine are different in kind.
**Status:** Framework artifact. Phase 2 subagent discovery pending; Phase 3 pattern extraction will TEST the priors in §5 against the discovered cohort.
**Author bias to declare:** prior to any data, my read is that "AI in medicine" is structurally HARDER to win in than "AI in software" because of regulatory, reimbursement, and liability friction layered on top of distribution. The wiki/agentic-ai-enterprise.md 88% pilot failure rate is a FLOOR for medicine, not a ceiling.

---

## §1 — Why the semi toolkit doesn't transfer

| Semi/robotics framework gate | Medical equivalent (different in kind) |
|---|---|
| BOM count per board × board volume × ASP | Procedure volume × reimbursement code × payer mix × per-procedure margin |
| Capacity gate (wafers, CoWoS, HBM) | Regulatory clearance pipeline + clinical evidence pipeline |
| Bypass-route on Chinese substitution | Bypass-route on **foundation-model commoditization + EHR-vendor absorption + big-pharma in-house build** |
| Native-language search for Chinese parity | Native-language search for **国家药监局 NMPA + PMDA filings + reimbursement (CMS / 国家医保局 / 中医协会)** |

The four NEW binding constraints in medical AI:

1. **Regulatory gate** — FDA 510(k)/De Novo/PMA, EMA CE-MDR, NMPA (China), PMDA (Japan). Class II vs Class III risk; count + recency.
2. **Reimbursement gate** — CPT/HCPCS codes, NTAP add-ons, MS-DRG, country-specific (CMS proposed/final rules; private payer coverage). **No reimbursement code = no revenue at scale**, regardless of clinical utility. The 2023 Heartflow Category I CPT code (75580) is the canonical example of this gate clearing.
3. **Clinical evidence gate** — peer-reviewed **prospective** outcome studies in JAMA/NEJM/Lancet/Nature Medicine; not retrospective single-site; ideally multi-site RCT.
4. **Distribution gate** — Epic/Cerner-Oracle/Veeva integration depth; hospital network coverage; sales motion to CMO/CIO/CFO (each persona buys differently).

**A "proven execution" name must clear ≥3 of 4 gates.** Most "AI biotech" names clear 0-1 (Recursion has IND filings = regulatory *progress* but no approval, no reimbursement, no clinical proof yet).

---

## §2 — Value-chain decomposition (8 layers)

| Layer | What AI replaces/compresses | Scarce complementary asset | Bypass-route risk | Proven-execution density |
|---|---|---|---|---|
| **L1 Drug discovery** (target ID, molecule gen, hit-to-lead) | Hypothesis generation, structure prediction, virtual screening | Proprietary screening data + wet-lab capacity + IP from confirmed targets | **HIGH** — AlphaFold 3 + open foundation models commoditize structure prediction; surviving moat is wet-lab + clinical execution | LOW — no AI-discovered drug fully approved yet (T1 FDA databases); Insilico/Recursion/Schrödinger have Phase I/II candidates only |
| **L2 Preclinical** (ADMET, tox, animal models) | In-silico screening reducing animal studies | FDA regulatory acceptance of non-animal methods (NAMs) | MODERATE — FDA Modernization Act 2.0 (2022) permits NAMs but adoption slow | LOW — limited disclosure of cost-per-candidate deltas |
| **L3 Clinical trials** (patient recruit, site selection, protocol design, monitoring) | EHR mining for patient matching, decentralized monitoring, synthetic control arms | Site relationships + sponsor trust + regulatory acceptance of synthetic controls | MODERATE — CRO incumbents (IQVIA, Medpace, ICON) absorb AI as feature; pure-plays (Tempus, Veeva, Medable) fight for budget | MODERATE — IQVIA AI offerings + Tempus clinical trial revenue disclosed |
| **L4 Manufacturing** (process opt, batch release, QC, supply) | Process variance prediction, in-line QC | FDA-validated processes (changes require regulatory amendment) | HIGH — CDMOs add AI as feature without ceding margin | LOW — limited disclosure |
| **L5 Diagnostics** (imaging, pathology, multi-omics, point-of-care) | Radiologist reads, pathology screening, cardiac/derm/ophthal screening | **FDA 510(k)/PMA + CPT reimbursement code + hospital PACS/RIS distribution** | MODERATE — foundation models commoditize algorithm; **what protects is the 3-gate stack (FDA + code + distribution)** | **HIGHEST** — 1000+ FDA-cleared AI medical devices as of 2024 (FDA AI/ML-enabled medical devices list, T1) |
| **L6 Clinical decision support** (sepsis predict, DDI, treatment protocols) | Clinician cognitive workload | EHR integration (Epic 38%+ US market T2; Oracle Cerner ~25%) + clinical workflow placement | **VERY HIGH** — Epic + Oracle embed AI as native feature, killing standalone CDS startups; Epic's own sepsis model criticized in [JAMA Internal Medicine 2021](https://jamanetwork.com/journals/jamainternalmedicine/article-abstract/2781307) for poor real-world performance | LOW — most disclosed deployments mixed outcomes |
| **L7 Care delivery** (ambient documentation, virtual triage, robotic surgery) | Scribes, triage nurses, some surgical precision | Provider workflow integration + malpractice liability framework + (for robotic surgery) installed base | HIGH at ambient docs (rapid commoditization MSFT-Nuance DAX, Abridge, Suki, Augmedix); LOW at robotic surgery (ISRG installed base = real moat, but it's HARDWARE+SERVICE moat with AI overlay — label accordingly) | MODERATE — ambient docs has revenue disclosure (HIMS, AUGX, Doximity); robotic surgery has long-track-record T1 |
| **L8 Admin/billing/RCM** (prior auth, coding, denial mgmt, revenue cycle) | Medical coders, prior-auth letter drafting, denial appeals | Payer relationships + code library + EHR integration | MODERATE — Epic + payers integrate AI directly but specialized RCM workflow remains complex | MODERATE — Waystar (WAY), R1 RCM (RCM-now-private post-LBO Aug 2024), Doximity AI features |

---

## §3 — Bypass routes that compress medical-AI moats (the structural risks)

**B1: Foundation-model commoditization.** GPT-5/Claude Fable/Gemini + open imaging foundation models (Stanford CheXpert, NVIDIA MONAI, Google Med-PaLM 2, Microsoft BiomedCLIP) commoditize the *algorithm* layer. Surviving moat = proprietary data + regulatory clearance + reimbursement code + distribution.

**B2: EHR-vendor absorption.** Epic, Oracle Cerner, Meditech embed AI as native feature. Kills standalone clinical-decision-support startups whose only moat was integration friction.

**B3: Big-pharma in-house build.** Pfizer, Roche, Novartis, AstraZeneca build internal AI teams + acquire data assets (Roche/Flatiron $1.9B 2018 paradigm). Kills standalone drug-discovery platforms unless they own *proprietary biology/data the pharma can't replicate*.

**B4: Hyperscaler vertical entry.** Google Cloud Healthcare API + Microsoft Cloud for Healthcare + AWS HealthLake + NVIDIA BioNeMo. Compresses health-IT infrastructure margins; partially absorbed by foundation-model commoditization.

**B5: Government payer fee compression.** CMS proposes lower reimbursement on AI procedures once volume scales (the standard "we'll pay for innovation, then cut the rate" cycle). Late-cycle medical AI margin compression risk.

---

## §4 — Named LOSERS (bypass-route casualties — NOT investable shorts, but mechanism awareness)

| Loser cohort | What gets compressed | Tickers (named, not just hinted) |
|---|---|---|
| Radiologist staffing firms | AI screening reads commoditize first-pass | Radiology Partners (private), vRad (private subsidiary of Mednax/Pediatrix MD), RadNet RDNT (mitigated: owns AI subsidiary DeepHealth) |
| Mid-tier CROs at protocol-design + patient-matching tier | Synthetic control arms + EHR-mined patient pools | ICLR (ICON plc), SYNH (Syneos — taken private 2023), Charles River CRL (early-stage discovery CRO) |
| Medical scribe firms | Ambient documentation kills scribes | ScribeAmerica (private), HealthChannels (private) |
| Lower-end medical coders | Autonomous coding compresses | Outsourcing firms (Cognizant CTSH healthcare segment, R1 RCM private) |
| Discovery-tier CROs at lead optimization | In-silico replaces some bench chemistry | WuXi WX 2359.HK, Charles River CRL |
| Standalone clinical-decision-support startups | Epic/Cerner native AI features | Most private; few public exposures |
| PBMs (long-tail, 3rd-order, P~25% my model) | Personalized AI pharmacy compresses formulary middlemen | CVS Caremark (within CVS), CI (Cigna/Express Scripts), ESRX-related |

---

## §5 — Pattern hypothesis to TEST (NOT assume) in Phase 2

**My prior — three properties the winners are predicted to share:**
1. **Own proprietary longitudinal data** the foundation models can't replicate (e.g., Tempus genomic+clinical; Heartflow CT-derived FFR registry; Veeva CRM data spine)
2. **Sit at the regulatory or reimbursement chokepoint** — FDA-cleared device + CPT code OR EHR-integrated workflow placement
3. **Sell into existing budget lines** — replacing scribe spend, replacing CRO spend, replacing radiologist FTE — NOT creating a new budget category requiring CFO sign-off

**Counter-prior to test:** if many winners DON'T match all three, the pattern is more about category-specific economics than a generalizable signature — and the framework needs revision.

**Test design:** Phase 2 subagents return per-name (a) proprietary-data check, (b) gate-stack score (FDA + reimbursement + clinical evidence + distribution), (c) budget-line check (replace existing line vs new budget). If ≥70% of net-positive cases match all three priors, framework holds. If <50% match, framework needs structural revision.

---

## §6 — Investability filter (final-layer gate before any name goes to thesis)

Standard harness gate per CLAUDE.md investability filter:
- **US-listed** (NYSE/NASDAQ): direct via Degiro ✓
- **EU-listed** (LSE / Euronext / Xetra): direct via Degiro ✓
- **Japan (TSE Prime)**: direct or pink-sheet ADR ✓
- **KRX (Korea)**: REFERENCE ARTIFACT only — not accessible per 2026-05-28 investability filter
- **China A-share (Shanghai/Shenzhen)**: REFERENCE ARTIFACT only — Degiro doesn't route; HK-listed proxies acceptable (e.g., United Imaging-related, WuXi via 2359.HK)
- **HK-listed**: needs broker-specific confirmation (HK Stock Connect via Degiro uncertain)

Valuation-stage filter:
- Cash-burning pre-revenue AI biotech (Recursion, AbCellera, Absci) → watchlist only, NOT entry candidates until revenue + clinical milestone clears
- Profitable AI-adjacent medtech (GEHC, Veeva, IQVIA) → standard valuation discipline; entry only at structural-inflection or post-falsifier-clear
- Fresh IPO names (Tempus 2024, Heartflow 2024) → 6-12 month earnings-track record required before entry per harness IPO discipline

---

## §7 — Phase 2 subagent fan-out (6 parallel agents)

1. **Drug discovery + preclinical** (L1+L2 combined) — Recursion RXRX, Schrödinger SDGR, Alphabet/Isomorphic, AbCellera ABCL, Absci ABSI, Insilico Medicine (private), BenevolentAI BAI.L, Relay Therapeutics RLAY
2. **Clinical trials + manufacturing** (L3+L4 combined) — IQVIA IQV, ICON ICLR, Medpace MEDP, Veeva VEEV, Tempus AI TEM, Medable (private), Phesi (private)
3. **Diagnostics — imaging/pathology/POC** (L5 — highest density) — GE Healthcare GEHC, Philips PHG, Siemens Healthineers SHL.DE, Heartflow HTFL, RadNet RDNT (+DeepHealth), iCAD ICAD, Butterfly Network BFLY, Tempus AI TEM (genomics overlap), Veracyte VCYT, Exact Sciences EXAS, Natera NTRA, Guardant GH
4. **Clinical decision support + EHR-integrated software** (L6) — Veeva VEEV, Doximity DOCS, Phreesia PHR, Oracle ORCL (Cerner segment), MSFT (Nuance segment); Epic is private — reference artifact
5. **Ambient documentation + care delivery + scribes/virtual** (L7 ex-robotic-surgery) — HIMS Hims & Hers, Augmedix AUGX, Doximity DOCS (overlap), Teladoc TDOC; plus call-out on ISRG (label hardware-moat-not-AI-execution); plus Insulet PODD (algorithmic insulin delivery — borderline)
6. **Native-language Chinese + Japanese medical AI** (mandatory non-Western pocket) — 联影医疗 United Imaging Healthcare 688271.SH, 推想科技 Infervision (private), 迈瑞医疗 Mindray 300760.SZ, Fujifilm Holdings 4901.T (AI imaging segment), Olympus 7733.T (AI endoscopy CADe), Siemens Healthineers China JV, 阿里健康 Alibaba Health 0241.HK, 平安好医生 PA Good Doctor 1833.HK

**Plus 7th subagent: revenue cycle / admin (L8)** — Waystar WAY, R1 RCM (private), Doximity DOCS (overlap), Definitive Healthcare DH, Health Catalyst HCAT, Phreesia PHR (overlap)

Per-subagent output requirement:
- Per-company gate-stack score (FDA + reimbursement + clinical evidence + distribution) — 0-4 binary
- Per-company proprietary-data check
- Per-company budget-line check (existing line vs new budget)
- Per-company bypass-route verdict (foundation-model / EHR / pharma in-house / hyperscaler / payer-fee)
- T1/T2/T3 source tier on every numerical claim; native-language sources mandatory for non-Western names
- Explicit `LABEL: AI-adjacent distribution moat` for ISRG-style names (do NOT count as AI-execution proof)
- Investability per §6
- **Quality bar:** at least one T1 disclosure (FDA database hit, peer-reviewed outcome study, reimbursement code grant, audited revenue disclosure) per "net-positive execution" claim. Vendor case studies are T3 floor; do not promote.

## §8 — Falsifiers for the framework itself

1. If Phase 2 surfaces fewer than ~5 names that clear ≥3 of 4 gates → cohort too thin to support a sector pivot → revert focus to existing AI-infra theses
2. If foundation-model commoditization timeline (B1) accelerates so the algorithm moat collapses within 12 months for >50% of surfaced names → most surfaced names become casualties, not beneficiaries
3. If the "proprietary longitudinal data" prior (§5) fails to discriminate winners from losers → framework needs structural revision (probably toward "distribution + regulatory access" as the single dominant moat)
4. If valuation across the cohort is already at Stage 4 narrative pricing (P/E >50, P/S >15 average) → consensus has rotated, scouting premise is wrong → wait for cooldown

## §9 — Cross-references
- `research/wiki/agentic-ai-enterprise.md` — 88% pilot failure rate floor that medical AI will not beat
- `research/sector/themes.md` — candidate T10 if cohort qualifies (medical AI execution pocket)
- `research/meta/methodology.md` — Critical Rule #9 bypass-route + Rule #12 temporal-freshness applied throughout
- `research/meta/biases-watchlist.md` — robotics-localization-blindspot lessons transferred to medical-AI form (substitute "Chinese parity" with "foundation-model commoditization" + "EHR-vendor absorption")

---

## §10 — POST-PHASE-2 REFINEMENTS (added 2026-06-10 PM)

After running 7 parallel Fable-5 subagents across all 8 value-chain layers + non-Western pocket, the framework needs three structural refinements documented here. Per `signals/cross-source-log/2026-06-10-medical-ai-phase3-synthesis-3-GREEN-2-AMBER.md` for full data.

### §10.1 — TWO distinct GREEN-pattern archetypes (the biggest insight)

The §5 priors surface two structurally different cohorts that the original framework conflated:

- **Type A — Clean AI-Execution:** AI is the load-bearing moat; gate-stack clears via reimbursement-coded AI output; bypass-route resistance comes from AI-specific moat (physics, registry, cross-payer data). **Cohort: HTFL, WAY, Olympus (within EndoBRAIN segment).**
- **Type B — Existing-Archetype + AI Overlay:** Pre-existing moat (hardware install base, assay+CLIA, distribution network, EHR-vendor lock) carries the weight; AI is feature or operational improvement. **Cohort: ISRG, PODD, GE/SHL/PHG, RDNT, Guardant/Exact/Natera/Veracyte, DOCS, Fujifilm, Canon, United Imaging, IQVIA, Tempus, Veeva.**

Type B names are not bad — many are excellent businesses — but they should be evaluated with the EXISTING archetype framework (distribution moat, device moat, network moat), NOT through the medical-AI lens. The AI overlay is sentiment, not the investment thesis. **Type A is where the genuine medical-AI alpha lives.**

### §10.2 — Layer-conditional gate applicability

The 4-gate filter applies cleanly to L5 (cleanest fit, both GREEN names came from L5 + L5-adjacent). It applies UNEVENLY elsewhere:

- L1+L2: cleanly applicable; (a) regulatory is binding
- L3+L4: partial; (b) reimbursement N/A for services
- **L5: cleanest fit — all 4 gates apply**
- L6: 2 gates STRUCTURALLY IMPOSSIBLE (regulatory + reimbursement N/A for unregulated CDS software) — framework gate-stack CANNOT exist here
- L7: 2 of 4 N/A
- L8: 2 of 4 N/A

**Recommended layer-specific gate substitutions for L6/L7/L8:** substitute (a) → "EHR-vendor displacement immunity" + (b) → "labor-replacement budget anchor"; measure (c) as quantitative cost-savings disclosure. This recovers comparability across layers.

### §10.3 — Sharpening §5 prior #1

The original "proprietary longitudinal data" prior PARTIALLY FAILED the discrimination test — it surfaced both AI-winners (HTFL CFD+registry, WAY cross-payer claims, United Imaging Chinese-patient imaging) AND non-AI winners (Guardant blood assay, ISRG surgical kinematics, GE/SHL/PHG distribution data). Refined version:

> **"Proprietary data that the AI-specific algorithm depends on AND that the algorithm's output is reimbursed-against."**

This sharpens the Type-A vs Type-B distinction at the prior level.

### §10.4 — The single cleanest AI-execution chokepoint metric

**National-payer reimbursement code ownership for AI-specific output** is the single metric that most reliably separates Type-A execution from Type-B overlay across all 8 layers and both Western + Japan/Korea geographies.

Canonical clears:
- **HTFL CPT 75580** (US Category I, CMS +7% 2024)
- **Olympus 厚労省 +60点 (¥600)** add-on K721 polypectomy (Japan 2024-06)
- **Viz.ai LVO NTAP** (US first AI-specific NTAP, ~$1,040 cap — private reference)

This is the framework's most actionable single screening criterion for new candidates.

### §10.5 — Verified casualties (loser-list confirmation in real time)

Framework §4 losers list is confirming via M&A and delisting, not just margin compression:
- **AUGX delisted Oct 2024** — acquired by Commure $139M; public ambient-docs pure-play extinct
- **MDRX delisted April 2024** — OTC, can't file 10-Q
- **BAI delisted March 2025**
- **Exscientia merged into RXRX Nov 2024**
- **iCAD absorbed by RadNet 2024**
- **Olive AI shut Oct 2023** — $902M burned from $4B peak
- **HCAT divesting Vitalware $147M June 2026** — exiting RCM

The bypass-route mechanism is validating faster in M&A than the framework predicted.

### §10.6 — Sector pivot verdict

Framework §8 falsifier #1 ("<5 names clear ≥3 gates"): BORDERLINE CLEARED at ~3 GREEN + 2 strong AMBER = ~5 actionable names. The pocket EXISTS but is THIN — not deep like memory or robotics-bottleneck. Phase 4 deep-dive workstream is the next workstream (per-name thesis depth on HTFL + WAY + Olympus) IF user wants to continue building this pocket.

### §10.7 — Workflow lesson (codification candidate)

Three cohort-spec names were stale at launch (AUGX, MDRX, BAI all delisted). **Pre-launch cohort specs should include a temporal-freshness pre-check** — any name in a watchlist should be re-checked for going-concern status before deploying compute on it. Codification candidate for 2026-06-24 monthly audit.
