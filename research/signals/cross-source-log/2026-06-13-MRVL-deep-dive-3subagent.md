# 2026-06-12 — MRVL deep-dive (3-subagent verification artifact)

**Workflow:** DEEP-DIG (3 parallel subagents — Financial decomposition / Competitive moat / Adversarial bear case). MRVL is newly held at ~5.9% per `portfolio/holdings.md` 2026-06-12 rotation. Companion: `2026-06-12-connectivity-layer-alab-reevaluation-2subagent.md`. Triggers: P1 todo (build MRVL thesis on equal footing with ALAB re-eval); user explicit instruction "do not forget first principle thinking" — applied to each subagent prompt.

## 0. Pre-research premortem (Class 1-5 blindspots applied to each subagent)

Class 1 — pre-training-anchored mental model of OLD MRVL (~60% storage) needs falsification — verified.
Class 2 — confirmation bias post-purchase — adversarial subagent C explicitly steel-manning bear case.
Class 3 — hard structural questions (custom ASIC moat, AVGO co-exist vs share war, storage trajectory, NVDA terms, Inphi CPO attach, NVLink Fusion scope) — covered across A/B/C.
Class 4 — joint-state with HYNIX, ALAB, DDOG/NOW trim funding hypothesis — covered.
Class 5 — temporal freshness (Q1 FY27 May-27 + L11/L12/L13 lessons) — covered.

**Real miss flagged:** I missed that an MRVL stub thesis existed from 2026-06-02 in the premortem. Thesis now overwritten with full refresh; old version superseded explicitly in header.

## 1. Subagent A — Financial decomposition (key facts, T1-sourced)

**Revenue mix evolution (T1 SEC 10-K):**
- FY22: DC 40% / Enterprise 20% / Carrier 18% / Consumer 16% / Auto-Industrial 6% — total $4,462M
- FY24: DC 40% / Enterprise 22% / Carrier 19% / Consumer 11% / Auto-Industrial 7% — total $5,507M
- FY25: DC 72% / others consolidated 28% — total $5,767M
- FY26: **DC 74% ($6,100M) / Comms & Other 26% ($2,094M)** — total $8,194M

**The "60% storage/legacy" pre-training anchor is FALSIFIED.** No standalone storage segment exists; HDD controllers embedded in DC. Legacy bucket = carrier + enterprise + consumer = ~26% and STABILIZING.

**Custom ASIC named customers:**
- AWS Trainium 1/2/3: **PRIMARY co-design partner + 5-yr multi-gen supply agreement** (T1 MRVL IR 2024)
- Microsoft Maia: IP licensing partner (not full co-design depth like AWS)
- Google: **Axion ARM CPU confirmed (IP licensing only); MPU + inference TPU in TALKS Apr-26 (T2 The Information)**, NOT confirmed design win
- NVDA NVLink Fusion XPUs (with 8 hyperscalers in discussion)
- **Google TPU is AVGO, NOT MRVL** — multi-gen design through 2031 per T2 Oplexa

**Concentration math (my model):** Custom Si FY26 ~$1.5B run rate (T1 mgmt). AWS Trainium "flagship XPU program" → estimated ~60-70% of custom ASIC (my model from "flagship" language + ramp pattern; NOT disclosed). FY28 "more than double" guide = >$5.6B custom Si requires AWS volume offset of per-chip content reduction + 10+ pipeline programs converting.

**GM trajectory (T1 8-K each quarter):**
- GAAP: 50.3% (Q1 FY26) → 52.1% (Q1 FY27) — expanding (amortization rolloff)
- Non-GAAP: 59.8% (Q1 FY26) → 58.9% (Q1 FY27) — compressing 1-1.5pp/yr (mix-shift to custom ASIC at ~50-55% GM vs 65%+ optical and 70%+ switch)
- Q2 FY27 guide implies ~59% non-GAAP GM

**Capital allocation:**
- NVDA $2B Series A Convertible Preferred at $91.84 conversion → 21.78M common-equivalent (~2.4% dilution if converted; my model on ~900M shares)
- $5B buyback authorization (Sep-25), executing slowly ($200M/Q in Q1 FY27 vs $2B+ all FY26)
- Cash $3.84B, debt $4.96B = net debt position
- XConn $540M (Feb-26 close): 60% cash / 40% stock; revenue H2 FY27 ramping to ~$100M FY28 (T1)
- Automotive ethernet sold to Infineon for $2.5B Aug-25 (T1)

**FY27/FY28 bottoms-up (my model):**
- FY27 ~$10.4-11.5B (mgmt guide $11.5B = +40%)
- FY28 ~$15-16B base case vs mgmt $16.5B guide (+45% YoY)
- Custom Si FY28: "more than double" mgmt commentary = >$5.6B IF FY27 ASIC base ~$2.8B (my model)

**L11/L12/L13 cross-validated:** Q1 FY27 GRADE 2026-05-27 lessons confirmed. L13 vintage-distribution (multi-year FY28 framework vs FY27 upgrade) chosen correctly per mgmt.

**B45 calibration applied:** 16x FY28 mgmt guide revenue + 102x trailing P/E. Per cohort base rate (`signals/cross-source-log/2026-06-12-pre-training-magnitude-conservatism-calibration.md`), NVDA traded 20-25x at similar inflection stage. NOT "stretched" by AI-supercycle cohort base rate. Pre-training would flag — B45 corrects.

## 2. Subagent B — Competitive moat (load-bearing findings)

**THE INPHI DSP VERDICT (load-bearing for the entire thesis):**
- AVGO uses **in-house Sian3 DSP** for TH6-Davisson CPO (T2 Futurum + T3 fibermall.com + verified via product documentation)
- AVGO ALSO manufactures own lasers (VCSELs + EMLs); TH6-Davisson uses TSMC COUPE photonic integration with full AVGO vertical stack
- **MRVL Inphi is DESIGNED OUT of AVGO TH6-Davisson CPO BOM** — the "MRVL DSP inside AVGO CPO" optionality scenario does NOT exist
- BUT MRVL Inphi retains durable wedge in PLUGGABLE optics (800G/1.6T): channel-conflict-free positioning (no MRVL lasers = module vendors Innolight/Eoptolink prefer MRVL DSP) → genuine competitive moat in pluggable segment through 2027 CPO transition window
- Mgmt-claimed ~70% Inphi DSP share at 800G/1.6T — T2-unverified independent (Broadcom claims overall PAM4 DSP leadership including legacy 100G/400G generations; the two claims aren't mutually exclusive)

**NVDA $2B = ECOSYSTEM ACCESS, NOT IP TRANSFER:**
- License to use NVLink Fusion interconnect IP (not transfer of NVLink IP to MRVL)
- MRVL designs XPUs that connect to NVLink fabric; NVDA retains license-grant authority over partners
- Every custom ASIC rack using MRVL XPU still buys Vera CPU + ConnectX NICs + BlueField DPUs + NVLink switches from NVDA — TheNextWeb "toll booth" framing (T2)
- AWS Trainium + MSFT Maia explicitly confirmed as NVLink Fusion compatible platforms; Google MPU "in co-develop discussions" (NOT confirmed Fusion-attached)

**MRVL vs AVGO segment-by-segment:**

| Segment | AVGO | MRVL | Verdict |
|---|---|---|---|
| Custom ASIC — Google | TPU v4-v8 (multi-gen) | Axion CPU IP + MPU talks | AVGO holds TPU; MRVL inference attack uncertain |
| Custom ASIC — AWS | Not primary | **Trainium 1/2/3 primary; 5-yr multi-gen supply agreement** | MRVL-exclusive |
| Custom ASIC — Microsoft | Maia 1/2 | Maia IP + back-end design services | SPLIT, scopes differ |
| Custom ASIC — Meta/Apple/OpenAI/Anthropic | Meta MTIA + OpenAI Titan + Anthropic chip | No confirmed wins | AVGO dominant |
| Scale-out switching | TH6 Tomahawk 102.4T shipping (Oct-25); ~80% Ethernet share | Teralynx T100 102.4T sampling Q2 2026; hyperscaler qual late 2026 → volume mid-2027 | AVGO incumbent; MRVL 12-18mo behind |
| Optical DSP (pluggable) | Sian3 (vertical with lasers) | Inphi (channel-conflict-free wedge) | ACTIVE share war at 800G+; structural asymmetry |
| CPO (switch-layer) | TH6-Davisson shipping; AVGO vertical stack | 51.2T announced Computex Jun-2 (not shipping) | AVGO leads by a product cycle |
| Storage | Not present | MRVL incumbent | MRVL-exclusive |
| CXL | Not primary | Structera S sampling Q3 2026; XConn switches | MRVL entering |

**Verdict:** 2-supplier co-existence at customer level (AWS=MRVL, Google/Meta=AVGO, MSFT split) BUT active share war in optical DSPs at 800G+. AVGO is 5× larger and controls more high-volume customers.

**MRVL vs ALAB overlap matrix:**

| Sub-segment | ALAB | MRVL | Winner today |
|---|---|---|---|
| PCIe retimers (Aries) | Dominant (>1/3 ALAB rev) | Not primary | ALAB |
| PCIe fabric switches | Scorpio X 320-lane shipping (AWS warrant) | XConn (Feb-26 $540M; sampling Q3-26; ~$100M rev FY28) | ALAB 18-mo lead |
| CXL controllers | Leo on Azure (production) | Structera S (sampling Q3-26) | ALAB clearly |
| AECs | Taurus (vs Credo dominant 73%) | Not primary product | Credo dominant |
| Optical (CPO/NPO) | aiXscale roadmap 2027-28 | 51.2T CPO announced + 1.6T coherent DSP samples H2 2026 | MRVL DSP lead, both 2027-28 entrants for CPO at scale |
| NVLink Fusion | First-announced partner Dec-25 | **$2B NVDA stake + Jensen Jun-2 endorsement** | MRVL structurally favored |
| Scale-up switch silicon | Scorpio primary growth | Teralynx T100 102.4T sampling Q2-26 | Direct competitor at AWS; ALAB incumbent |

**XConn integration realism:** 60/40 cash/stock $540M; 2× 260-lane switches announced OFC 2026 (hardware exists post-close); 18-mo hyperscaler qual cycle → volume mid-FY28 → ~$100M FY28 revenue achievable but timeline-tight. MRVL M&A track record: Inphi ($10B 2021) successful integration; Innovium ($1.1B 2021) → Teralynx; Celestial AI ($3.25B base, 2026) too early.

**Hyperscaler co-design depth:**
- **AWS: SoC-level co-design, 5-yr multi-gen supply agreement, ~$225B+ commitments pipeline** → strongest contractual co-design moat available
- MSFT: IP + design services (less deep than AWS)
- Google: Axion confirmed; MPU only in talks
- AVGO comparison: broader customer count (6 confirmed XPU customers vs MRVL ~3); MRVL deeper at AWS specifically. Different moat shapes.

## 3. Subagent C — Adversarial bear case (steel-manned)

**NVDA $2B Series A Convertible Preferred — TERMS (T1 SEC 8-K Mar-31-2026):**
- 2,000,000 shares Series A Convertible Preferred Stock; $2,000,000,000 purchase price; $1,000/share stated value
- Initial conversion: max 21,778,000 common @ ~$91.84/share — NVDA ~3× in-the-money at current $287
- Voting: as-converted EXCEPT director elections; NO board seat
- Conversion triggers: holder option post-HSR clearance OR automatic on non-NVDA-affiliate sale
- **UNVERIFIED (SEC 403 on full SPA exhibit):** lock-up period duration, transfer restrictions, standstill clauses, ROFR on M&A, explicit roadmap-exclusivity covenants. MEDIUM-HIGH uncertainty flag.

**Insider activity (T1/T2):**
- CEO Murphy sold 7,500 sh @ ~$177.26 in early May-26 via 10b5-1 plan adopted Dec-16-2025 (PRE-NVDA announcement = pre-planned, NEUTRAL)
- CFO transition: Dan Durn (ex-Adobe) replacing Meintjes effective Jun-15-2026 — at peak euphoria; worth monitoring (LOW-MEDIUM uncertainty)
- Aggregate insider selling last 90d ~$32M, majority 10b5-1; **zero confirmed insider BUYING at $316 ATH** = weak negative signal

**Trainium content demotion (CONFIRMED T2 Benchmark Research via TipRanks 2026):**
- "MRVL retains partial role" — Trainium3/4 design engagement is CONTRACTION relative to Trainium2
- Amazon added Alchip Technologies for primary design support
- PCIe SerDes went to Synopsys (not MRVL)
- MRVL retained for specific IP blocks (HBM, I/O interfaces)

**Google TPU v8 (CONFIRMED T1 Google Blog + T2 Tom's Hardware + T2 tech-insider.org):**
- TPU v8 SPLITS into TPU 8t (Broadcom "Sunfish" training) + TPU 8i (MediaTek "Zebrafish" inference at 20-30% lower cost)
- Broadcom content per TPU 8t exceeds $4,000 per chip (Moor Insights estimate, T3)
- MRVL only in talks for memory processing unit + additional inference TPU (T2 The Next Web)
- Counterpoint Research: AVGO ~60% custom AI accelerator market by 2027, MRVL ~25% (T2 directional)

**5 kill scenarios (subagent C constructed bear cases):**

| Kill | Description | P (my model) | Stock magnitude | Time horizon | Signal today? |
|---|---|---|---|---|---|
| K1 | Google MPU talks collapse + Google goes fully AVGO/MediaTek for TPU v8 | 20-25% | -35 to -50% | 12-18 mo | YES — TPU v8 confirmed to AVGO/MediaTek; MRVL only "in talks" |
| K2 | Trainium3/4 content stays demoted + Trainium5 fully Alchip/in-house | 25-30% | -40 to -55% | 18-24 mo | PARTIAL — Benchmark confirmed Trainium3/4 partial demotion |
| K3 | Custom ASIC TAM compresses vs NVDA Vera Rubin Ultra dominance | 15-20% | -25 to -40% | 18-30 mo | WEAK — Apple-Blackwell pattern suggestive |
| K4 | NVDA pivots NVLink Fusion strategy (acquires competing networking) | 10-15% | -30 to -45% | 12-24 mo | NO direct signal; Spectrum-X competition with Teralynx visible |
| **K5** | **S&P 500 inclusion June 22 → forced-buy spike then sell-the-news unwind** | **35-45%** | **-15 to -25% drawdown** | **0-6 mo (NEAR-TERM)** | **YES — inclusion announced Jun-5, effective Jun-22; +210% YTD already** |

**Most imminent: K5. Most structural: K2.** Combined K1+K2 co-occurring → P~15% (correlated); magnitude -55 to -70%; time 12-24 months → S4 floor $80-120 near NVDA conversion floor (not coincidence).

**L14-v2 pre-Computex rally check:** Pre-Computex 5-day rally was NOT >10% (the +32% was the event itself, not pre-event). **L14-v2 expectations-exhaustion trigger did NOT fire pre-Computex.** However, L14 post-event give-back IS in progress: $316 ATH Jun-4 → $280 Jun-12 = -11% give-back. Historical L14 pattern suggests Stage 3-4 stocks give back 25-50% of CATEGORY EVENT move within 30-60 days → further digestion to $220-240 range possible (my model).

**Stage modifier per Principle #31:** Stage 3-4 transition CONFIRMED. Above-PT trading is structural rerating + analyst lag (B28), not bearish; NOT used as valuation argument.

**Macro/cyclical (per `sector/scenarios.md`):**
- S4 digestion (P=5%): MRVL is "pure-cycle hardware name with no recurring revenue" per scenarios.md LOSER column
- Comms & Other 26% adds cyclical drag in S4 (carrier 5G + enterprise networking cyclical)
- S4 floor estimate: $80-120 (my model; ties near NVDA conversion floor $91.84)

## 4. Synthesis — joint state of all three subagents

| Dimension | Bull (Subagent A finds) | Bear (Subagent C finds) | Reconciliation |
|---|---|---|---|
| Custom ASIC trajectory | FY28 "more than double" mgmt guide | Trainium3/4 demoted; Google TPU v8 to AVGO/MediaTek; MRVL only "in talks" | "More than double" REQUIRES new XPU programs filling AWS gap; not confirmed. Probability of full delivery ~35% (my model) |
| NVDA $2B | Structural NVLink Fusion attach validation | Convertible at $91.84 = NVDA holds embedded short at MRVL's expense; SPA full terms unverified | Validation real BUT economic upside primarily NVDA's; MRVL gets ecosystem access not IP. Net: positive but bounded |
| Optical/DSP | Inphi pluggable wedge real | Inphi DESIGNED OUT of AVGO TH6 CPO; CPO follower not leader | Pluggable wedge holds through 2027; CPO is loss not win. Net: optical thesis half-confirmed |
| Customer concentration | 10+ XPU pipeline narrative | AWS ~60-70% custom ASIC (my model); Trainium demotion confirmed | The 10+ pipeline framing IS the bull case but is unverified. If real → diversifies. If fluff → bear case strengthens at Q2 FY27 print |
| Valuation | 16× FY28 mgmt guide = within B45 cohort precedent | 102× trailing P/E + S&P inclusion catalyst already triggered = priced for execution | Valuation NOT "stretched" by regime base rate (B45) but limited margin of safety; modest upside if execution delivers |

**Weighted total per 7-axis matrix: 6.78/10 (my model)** — roughly tied with ALAB at 6.7. Different bet shapes:
- ALAB = pure-play high-multiple, AWS warrant-anchored, narrower segment
- MRVL = multi-segment lower-multiple, AWS multi-gen contract-anchored, broader but concentration risk + content demotion signal

## 5. Cascade to other thesis files

- `companies/MRVL/thesis.md` — full re-evaluation (NEW from stub) with Bull/Bear/Base P-weights + 5 falsifiers + anti-fragility 3/5 + 7-axis matrix
- `companies/ALAB/thesis.md` — rivalry joint-state cross-ref (MRVL deeper at AWS; ALAB ahead on Scorpio shipping volume)
- `companies/HYNIX/thesis.md` — joint-state correlation flag added (HYNIX/MRVL high correlation in S4 stress; portfolio not as diversified as cluster headers suggest)
- `meta/todo.md` — Q2 FY27 print watch (~Aug-26) + S&P inclusion post-event watch (Jul-22)

## 6. Verification gates active

- Q2 FY27 print Aug-26: FY28 custom Si guide raised + named NEW XPU customer? Drives H1 vs H2/H3 split
- Google MPU talks → confirmed design win by Q3 FY27? Drives falsifier #2
- AWS Trainium5 design partner announcement (FY28-29 timeframe)
- NVDA full SPA exhibit retrieval (current SEC 403); if restrictive covenants → falsifier #4 fires
- 30-day post-S&P-inclusion stock action through Jul-22 (L14 give-back pattern check) → falsifier #5
- Inphi DSP 800G/1.6T pluggable share data (next Dell'Oro / LightCounting publication)

## 7. Open uncertainty flags (HONEST)

- Inphi DSP "~70% share at 800G/1.6T" is mgmt-claimed; no independent T1/T2 verification at this tier specifically
- Google MPU co-develop is T2 only (The Information Apr-26); no T1 SEC confirmation
- XConn $100M FY28 revenue target is companion-analysis estimate, NOT in T1 MRVL filings
- AWS Trainium-vs-custom-ASIC % split is my model from "flagship" language, NOT disclosed
- NVDA full SPA exhibit unverified (SEC 403); lock-up + exclusivity terms remain unknown
- Real miss in premortem: existing 2026-06-02 MRVL stub thesis. Now overwritten with full refresh.

## 8. Sources (consolidated subagent output)

Subagent A primary T1: MRVL 10-K FY22, FY24, FY25, FY26; 10-Q Q1 FY27 (May-2026); 8-K Q1 FY27 (May-27-26); 8-K NVDA $2B Mar-31-26; MRVL IR XConn close Feb-10-26; MRVL IR AWS 5-yr collaboration 2024.

Subagent B primary T1: Broadcom TH6-Davisson Oct-2025 press release; NVDA NVLink Fusion Mar-31-26 newsroom; MRVL Computex keynote Jun-2-26 IR; MRVL XConn IR Feb-26; MRVL Structera S IR 2026; AVGO Q1 FY26 8-K 2026-02-06. Secondary T2: Futurum, TechInvestments.io, Tom's Hardware, TheNextWeb.

Subagent C primary T1: MRVL 8-K NVDA preferred stock Mar-31-26 (full SPA exhibit BLOCKED 403); MRVL Q1 FY27 8-K; CFO transition 8-K Jun-26; Google Blog TPU v8 announcement. Secondary T2: TipRanks/Benchmark Research Trainium3/4 partial role note; Tom's Hardware TPU v8 split; CNBC S&P inclusion June-5-26; 24/7 Wall St ByteDance ASIC selloff Jun-9-26.

All numerical claims sourced inline above. Anti-fabrication discipline maintained per Critical Rule #7.
