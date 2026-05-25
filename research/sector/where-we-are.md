# Where AI Is — Living Synthesis

**Last material update:** 2026-05-20 (Google I/O + OpenAI Guaranteed Capacity + Anthropic profit + SemiAnalysis workflow ROI)
**Purpose:** The single document that holds the CURRENT BEST holistic view. Read this every session before reacting to specific events. If a new event doesn't change the synthesis here, don't restructure the entire OS for it — just log the signal and move on.

**Self-evolution rule:** Update this file only when new evidence MATERIALLY shifts the prior view. Most events are reinforcing, not new — note them but don't restate. Track view changes in §"What I changed my mind about" with date + trigger. The file should grow slowly; not every news cycle is a paradigm shift.

---

## TL;DR — five things we currently know with high confidence

1. **We are in the Agentic AI epoch** (started Nov 2025). Compute demand pattern has shifted from training-dominant to inference + sustained loops + tool calls. Workload per user has stepped up ~100x for agentic vs chat use cases.

2. **AI compute demand is structurally outrunning supply through at least 2027.** Three independent T1/T2 confirmations on the same day (2026-05-20): Google's 3.2 quadrillion tokens/month, OpenAI's Guaranteed Capacity multi-year contracts, NBIS +684% Q1 print. Sam Altman direct quote: "world will be capacity-constrained for some time."

3. **Frontier model providers are reaching profitability earlier than guided.** Anthropic Q2 2026 forecast $10.9B revenue + first operating profit (per WSJ, T1 underlying). Profit weakens the S4 (digestion) bear case materially.

4. **HBM is THE binding constraint through 2027.** All three suppliers sold out 2026; SK Hynix customer requests exceed 3-year planned capacity. Bypass routes (CXL via ALAB, MoE architectures, HBM4E) won't materially relieve before 2028. See `wiki/hbm-primer.md`.

5. **Enterprise adoption of agentic AI is EARLY — function-by-function, not all-at-once.** Banks/law/consulting/biotech largely NOT adopted yet. Research/analyst/devtools functions are the leaders (Cursor coding, SemiAnalysis-style workflows, Harvey legal). Customer-facing deployments struggle (Klarna lesson). The big enterprise wave is the next 24 months.

---

## The current epoch

| Era | Started | Compute pattern | Dominant constraint |
|---|---|---|---|
| ChatGPT moment | Nov 2022 | Training >> inference, one-shot Q&A | Training cluster scale |
| Scaling laws era | 2023-mid 2025 | Bigger models, RLHF | Training compute + memory |
| Reasoning bridge | mid 2025–Nov 2025 | Chain-of-thought; inference compute starts mattering | Memory bandwidth |
| **Agentic AI (current)** | **Nov 2025–** | **Tool calls, sustained loops, multi-step workflows** | **HBM + CoWoS + power** |
| Embodied / Tier-1 deployments | speculative (2027+?) | Autonomous execution with real consequences | TBD |

## The current binding constraints (in order of urgency / pricing power)

1. **HBM3E/HBM4 supply** — through 2027 minimum. SK Hynix / Samsung / Micron all sold out 2026. Per `wiki/hbm-primer.md`.
2. **CoWoS-L advanced packaging** — coupled to HBM; TSMC ramping ~55K → ~130K wpm exit-2026.
3. **Firm power for AI datacenters** — partially priced. NBIS contracted 3.5GW raising to 4GW — multiply across industry.
4. **Networking bandwidth at cluster scale** — 12-24 months out; CPO transition (MRVL, ANET, COHR, LITE).
5. **Compute capacity at hyperscalers** — multi-year contracts now being sold (OpenAI Guaranteed Capacity).

## The current narrative consensus (T1/T2 verified)

- **Agentic adoption is real and accelerating.** Multi-confirmed across model providers, hyperscalers, enterprise software, infrastructure cos.
- **Inference cost per token down ~100x in 12 months** (per [Dylan @demian_ai T3 analysis cross-checked with industry consensus]) but total spend up because demand exploded.
- **Custom Si is scaling** as second leg of demand: Google TPU + AWS Trainium + Meta MTIA + Microsoft Maia + Anthropic-Broadcom = S2 scenario from `sector/scenarios.md` materializing.
- **Power is the geographic constraint** that determines where AI gets deployed (sovereign AI in Gulf states, US Sun Belt with firm power).

## The current scenario weights (per `sector/scenarios.md`, last reweight 2026-05-20)

| Scenario | Weight | Direction trend |
|---|---|---|
| S1 NVDA dominant | 33% | Slightly down (multi-year contracts diversify) |
| S2 Custom Si fragments | 30% | Up (Anthropic-Broadcom + scaling) |
| S3 Power binds | 25% | Up (NBIS 3.5GW for ONE cloud) |
| S4 Digestion | 6% | Down (multi-year contracts + frontier profitability) |
| S5 Regulatory shock | 6% | Down |

## Non-default reads — what most people are missing right now

(This section forces me NOT to default to consensus framing. Updated when new evidence surfaces a pattern most analysts haven't priced.)

### 1. Enterprise adoption is function-by-function, not all-at-once
The agentic AI wave has hit research/analyst/devtools functions (Cursor coding agents, SemiAnalysis-style workflows, Harvey legal). Customer-facing AI has STALLED (Klarna lesson, broader 88% pilot failure rate). The big enterprise wave (banks/law/consulting/biotech) hasn't started. **Implication:** total compute demand has 5-10× left to run as enterprise penetrates, not just the obvious 2-3× from existing customers scaling usage.

### 2. The "unit of work" is changing, not just costs
Per SemiAnalysis workflow data (10-93x ROI per task), this isn't a productivity boost — it's a category collapse for human-labor-moated businesses. **Implication:** existential repricing for consulting/BPO/staffing-heavy services (long-term short candidates); winner-take-most for AI-augmented vertical software (long candidates).

### 3. Per-token margins for model providers may peak as enterprise scales
Anthropic Q2 profit is the high-water mark for current per-token economics. Big enterprise customers negotiate volume discounts. Total token volume goes up; revenue per token compresses. **Implication:** model provider equity (OpenAI IPO, Anthropic) may price the inflection vs the durable margin profile.

### 4. The capacity-constrained narrative is asymmetric for SUPPLY-SIDE names, not model providers
Altman's "capacity-constrained for some time" implies pricing power flows to whoever owns the constraint: TSMC, SK Hynix, NBIS, hyperscaler cloud capacity, power producers. Model providers are themselves capacity-buyers — they benefit from selling forward contracts but face their own input cost pressure.

### 5. Inference cloud (NBIS, CoreWeave) is mis-priced as zero-sum competition (CORRECTED 2026-05-20 from user pushback)
My initial framing said this layer was "overlooked." User pushed back correctly: NBIS rallied massively on its +684% Q1 print per [SEC 6-K](https://www.sec.gov/Archives/edgar/data/0001513845/000110465926059872/tm2614392d1_ex99-2.htm), then dropped 7.5% to $184.84 (per [Investing.com](https://www.investing.com/news/stock-market-news/coreweave-nebius-shares-drop-as-blackstone-and-google-launch-5b-ai-cloud-venture-4698388)) on the Google + Blackstone $5B AI cloud venture announcement. Market HAS priced these names AND priced in competition risk.

**The actual non-default read:** market is treating hyperscaler vs neocloud as zero-sum. Structural reality is non-zero-sum — hyperscalers cannot build capacity fast enough, so they BUY from neoclouds while ALSO competing. Evidence: NBIS-Microsoft contract $17.4–19.4B over 5 years (per [TradingView/Zacks](https://www.tradingview.com/news/zacks:349d920dc094b:0-nebius-vs-coreweave-which-ai-cloud-stock-is-the-better-bet/)); NBIS-Meta $3B/5yr; CoreWeave-Meta $21B (per [Brandergroup](https://brandergroup.net/2026/04/coreweaves-21b-meta-deal-ignites-the-ai-battleground/)) + multi-year Anthropic. Hyperscalers are both customers AND competitors. Market is pricing only the competition vector.

**Critical caveat — Token-Volume Filter:** Inference clouds fall in the MIXED bucket (per `meta/methodology.md` §Token-Volume Filter). Volume up = revenue up, but per-token margin may compress as enterprise customers negotiate volume pricing. Contract structure matters. NBIS thesis (P1 todo) must address this directly.

## What I changed my mind about (and when)

- **2026-05-20:** S4 (digestion) probability cut from 15% → 10% → 6% over the day as evidence cascaded. Initially I weighted digestion as a real tail risk; multi-year compute contracts + frontier profitability + capacity-constrained CEO statements collapse the bear case.
- **2026-05-20:** Vicor reframed from "guaranteed downstream beneficiary" to "binary on next-gen design wins" after bottoms-up customer research surfaced design-out at NVIDIA H100. Captured in B12.
- **2026-05-20:** Time-to-recognition refined into Recognition Stage 0-5 spectrum after user critique. AXTI verified Stage 4 from user screenshot.
- **2026-05-20:** Added Execution Quality as 5th component of valuation model after user input. Vicor would have scored 2/5 — methodology now self-consistent.
- **2026-05-20:** Corrected non-default read #5 (inference cloud) after user pushback. "Overlooked" framing was wrong — NBIS had run and then dropped on competition concerns. Real non-default read: zero-sum vs non-zero-sum dynamic between hyperscalers and neoclouds.
- **2026-05-20:** Codified Token-Volume Filter as hard portfolio selection rule per user input — names must benefit from volume regardless of per-token cost direction. Model providers fail this filter; memory/foundry/networking/test/power/EDA pass cleanly; inference clouds are MIXED (contract-dependent).
- **2026-05-20:** NVDA Q1 FY27 GRADED. Direction RIGHT (beat all four axes). Q2 guide came in at $91.0B vs my $88.5B call. L4 added: in multi-year-contracted-demand environments, historical guide-sandbag heuristics over-discount management confidence — apply ~2% haircut instead of 4-5%. Stock fell despite beat (beat-and-fade); not a thesis falsifier. The capacity-constrained narrative is now triangulated at a third primary source.
- **2026-05-21:** Built `wiki/agentic-workload-scaling.md` — bottoms-up demand model. Central estimate ~210T tokens/month from agentic workloads today; 12m projection ~12× growth; 24m projection ~70× growth. Identifies gap vs TrendForce HBM consensus (consensus appears conservative by ~2-3× over 24mo).
- **2026-05-21:** Aschenbrenner Q1 2026 13F analyzed (`signals/events/2026-05-21-aschenbrenner-q1-13f.md`). Contrarian thesis: short AI chips, long power/infrastructure. AGREE with long-infra leg (validates S3 power-binds scenario + time-to-power framework). DISAGREE with short-chip leg on timing (capacity-constrained beats can sustain multiples for several quarters). Direct conflict surfaced: Aschenbrenner has puts on Corning, user holds 10.8% — elevated to P1 deep research.

## What's still ambiguous (intellectual humility)

- **MoE diffusion rate** — could reduce per-inference HBM demand 10-40% over 18 months. Hard to model precisely.
- **Custom Si actual share trajectory** — S2 directional confirmed; exact share trajectory (15%? 30%? 50%?) determines pricing power for NVDA vs AVGO vs MRVL.
- **Timing of bank/law/consulting/biotech mass adoption** — could be 12 months or 36 months. Defines the slope of the next demand wave.
- **Vicor's 2nd gen VPD lead customer identity** — single data point that flips the VICR thesis.
- **SK Hynix vs Samsung HBM4 share at NVDA** — material for SK Hynix pricing power magnitude.
- **Power infrastructure deployment pace** — can grid + nuclear restart fast enough to relieve S3, or does power bind harder than modeled?

## Latest material updates

### 2026-05-20 — Google I/O + OpenAI Guaranteed Capacity + Anthropic profit + SemiAnalysis ROI table
Capacity-constrained narrative triangulated at T1 primary. S4 cut materially. NBIS elevated to P1 thesis. AVGO + AMZN + GOOG queued for theses. SemiAnalysis ROI data reinforces "function-by-function adoption" thesis.

### 2026-05-20 — NVDA Q1 FY27 earnings (pending tonight)
Will fire GRADE workflow + further SCENARIO-UPDATE on resolution.

---

## Harness observations (added 2026-05-24)

**Purpose.** Per methodology principle #23 + the user's 2026-05-24 framing on fluidity: *"first principles also have expiration dates on them... the weights and everything is something that only you would be able to spot when something goes wrong within your own harness."*

Hooks catch drift *within* the harness (enforce principles as written). They cannot catch when a principle itself has gone stale, because they enforce the principle literally. Spotting harness-level decay requires me observing my own outputs at meta-level. This section is the log.

**Operating rule.** At the end of any session where I made substantive analytical or methodological decisions, add a single-line entry. Format:

```
- YYYY-MM-DD | principle #N | observation
```

Examples of what to flag:
- A principle felt *forced* when applied — bent to fit the situation rather than fitting naturally
- A principle produced a false-positive (e.g., hook fired on benign content) — early signal of decay
- A principle that should have fired *didn't* — early signal of gap
- A principle conflicted with another principle — surfaces tension that may need refinement
- An analytical situation had no relevant principle — surfaces missing coverage

**Auto-queue rule.** When the same principle gets flagged 3+ times within 30 days, it queues for re-review (added as a P2 to-do with category `methodology`). Re-review either updates the principle, marks it falsified, or confirms it (and resets the flag counter).

**Log:**

- 2026-05-24 | principle #23 (new) | codified today after TrendForce HBF debacle revealed bias B25 (source-tracking-over-claim-verification). User pushback was the trigger, not a graded mistake. Watch for: principle becoming too restrictive (every claim requires orthogonal corroboration → research velocity collapses) OR too lenient (orthogonal definition gets stretched to fit). Re-review target: 2026-06-24 (1 month).
- 2026-05-24 | principle #6 (refined) | now requires orthogonal sources, not just N sources. Risk: existing triangulation.md entries may not meet the new bar — need claim-verification audit to reclassify.
- 2026-05-24 | fluidity layer (new) | first time the methodology itself carries metadata + falsifiers. Watch for: maintenance overhead (table getting stale faster than principles themselves change) OR the table becoming the work product instead of an audit aid.
- 2026-05-24 | principle #23 — first real-world stress test | user probed whether Harmonic Drive Systems (6324.T) has data-center cooling exposure (recalled from prior reading). Orthogonal verification via web search surfaced a TERMINOLOGY COLLISION: "Harmonic Drive Systems" (the company, precision-reducer specialist) is unrelated to "ultra-low harmonic drives" (the VFD class used in DC cooling). User's recall was the VFD class, not HDS. This is exactly the failure mode B25 was codified for — pre-training conflates similar-named entities; orthogonal source check disambiguates. The principle worked as intended on first stress test.
- 2026-05-24 | wiki/robotics-primer.md (Phase 1) | shipped entirely from pre-training data without orthogonal verification of structural claims (who's dominant, FM lab roster, actuator counts, etc.). I marked numerical claims as `[primary-source verification required]` but let structural claims pass as if established. This is exactly the methodology gap principle #23 caught one turn later. Re-status: primer is HYPOTHESIS WORLDVIEW pending Phase 2 verification, not verified worldview. No thesis file should cite it as primary evidence until Phase 2.
- 2026-05-24 | principle #5 refinement candidate (multi-narrative anti-fragility) | user surfaced 2026-05-24: *"if you can find companies that benefit from multiple different overlapping narratives or frameworks, that is ideal."* This is sharper than the current principle #5 framing ("wins across futures"). Multi-narrative = single name with multiple INDEPENDENT narrative drivers, each attracting capital independently. NVDA (AI compute + robotics + auto), STM (power semi + MEMS + auto + robotics + industrial), Murata (MLCC across AI + EV + industrial + consumer), AXT (compound semi for optical AI + compound semi for power) all qualify. Flag: potentially codify as principle #24 or refinement to #5. Test against held portfolio: does the multi-narrative lens change sizing? Likely yes — STM and Murata may deserve overweight vs current sizing under this lens.
- 2026-05-24 | Yaskawa Electric (6506.T) | surfaced by user-driven multi-narrative line of thinking. Robotics (industrial arms — incumbent risk per primer E8) AND VFDs for data center cooling (separate growth vector). The cooling leg may offset robotics-incumbent margin compression. Add to watchlist for sizing-matrix consideration. Orthogonal-source verification needed: Yaskawa segment disclosure on cooling-VFD revenue split.
- 2026-05-24 | principle #24 (new) | codified after user articulated the recursive bottoms-up worldview discovery discipline: *"Use direct datasets, alternative datasets, indirect datasets, adjacent market data... first check one robotics growth... then look at which segment grows the fastest, which are the biggest suppliers... after the biggest market has been analyzed, look at which market underneath is growing the fastest."* Replaces the pre-training-anchored worldview construction that produced robotics-primer.md Phase 1. Watch for: principle becoming workable-but-too-deep (recursion exceeds session budget) OR principle producing same outputs as pre-training categorization (no edge, only overhead). First real test: Phase-2 robotics rebuild — if different fastest-growing segment surfaces, principle works.
- 2026-05-24 | B26 (new) | pre-training-as-primary-source bias documented. Distinct from B25 (which is claim-level). B26 is worldview-construction analog. Linked to principle #24 enforcement.
- 2026-05-24 | wiki primer queue (hyperscaler-capex, geopolitical-ai, model-economics) | all 3 must be built under principle #24 discipline from inception, NOT under the robotics-primer-Phase-1 pre-training-anchored approach. Adding this constraint to the to-do entries.
- 2026-05-24 | principle #24 — first execution test | robotics-primer Phase 2 built via ~9 web searches across orthogonal sources (IFR primary, market research aggregators, supplier company announcements, ISRG SEC 8-K, NVIDIA developer + IR, Physical Intelligence trade press, Nabtesco product press, Schaeffler manufacturer press). Result: 6 material findings NOT in pre-training Phase 1 (Nabtesco doubling capacity by 2026, NVDA-Pi NVentures investment, ISRG Ion +52%, Symbotic Walmart robotics IP acquisition, Schaeffler humanoid entrant, humanoid reducer market $52M-tiny absolute size). 5 structural claims CONFIRMED. Principle #24 producing real edge — pre-training would have missed all 6 surprises. Promotes principle #24 from "active (new)" to "active (validated on first stress test)."
- 2026-05-24 | candidate ranking surfaced via L1-L4 verified data | top 5 names ranked by 5-dim + multi-narrative framework: NVDA (#1, MN 5/5, AF 5/5), ISRG (#2, deepest moat), HDS 6324.T (#3, choke point), Nabtesco (#4, capex doubling), SYM (#5, Walmart anchor). 6-18mo horizon weighted. Inputs to tomorrow's sizing matrix.
- 2026-05-24 | cascade updates applied | 5 held-name thesis files (NVDA, AMZN, STM, MURATA, AXTI) updated with robotics-primer back-references + 1-3 sentence implications per Critical Rule #10 + B16. AXTI specifically downgraded to "indirect via compound-semi power electronics" rather than the direct robotics framing I'd implied in Phase 1 — a real refinement caught by Phase 2 verification.
- 2026-05-24 | Phase 3+ robotics holistic build | ~18 additional web searches across batches: foundation models (Skild $14B + $1.4B Series C, Pi $5.6B + $600M Series B, OpenVLA beats RT-2-X by 16.5% at 7x fewer params), Chinese humanoid (Unitree 5,500 units 2024, 60% gross, $25K avg; UBTECH hundreds + 300/mo; AgiBot 5,100+ units; China = 90% of global humanoid units 2025), Tesla Optimus (90%+ 2025 miss, 5K target → hundreds delivered), Agility (only Western humanoid earning real RaaS revenue — 100K+ totes at GXO + Toyota + Mercado Libre), Yaskawa (Motion Control REVENUE DECREASED YoY refuting Phase 2 cooling-VFD framing), ISRG ($4B recurring + 11K installed + 70%+ procedure share + Ion +52%), batteries (CATL solid-state 450 Wh/kg + Samsung SolidStack + 74 GWh by 2035), defense (Anduril $14B + $1B Ohio plant + MSFT $22B contract + Lattice OS; Shield AI $5.3B + $267M 2024 rev + Air Force CCA), sovereign (US 145% China tariff + Section 232 + Senate procurement ban; China $2.4B humanoid VC first 9 months), capital flows ($14B 2025 robotics VC vs $8.2B 2024; Figure $39B post-money pre-revenue = bubble risk), labor crossover (Webb effect 1% wage → 0.420% adoption; 1.8pp wage-CPI gap OECD), Wolfspeed (40% SiC wafers but Ch11 emergence). Phase 3 produced ~10 material refinements to Phase 2 framing (R1-R12 in primer). Principle #24 validated at increasing depth — each recursion layer surfaces real refinements.
- 2026-05-24 | 5 new candidate thesis stubs created | research/companies/HDS, NABTESCO, ISRG, SYM, AGILITY folders + thesis.md files with primer back-references. Cascade compliance maintained. Phase 4 verification questions documented per stub for next-session pickup.
- 2026-05-24 | revised candidate ranking | NVDA (#1 — invested in both Pi AND Skild via NVentures = 6-narrative confirmed); ISRG (#2 — verified $4B recurring + +52% Ion); HDS (#3 — choke point intact but Chinese localization + Tesla miss delays pull-through); Nabtesco (#4 — capex doubling differentiates execution); AGILITY private (#5 — only Western humanoid with real revenue); Unitree pending IPO (#6); CATL (#7); Samsung SDI (#8); SYM (#9); Anduril/Shield AI private (#10). Yaskawa DEMOTED from Phase 2 ranking (Motion Control revenue decline). Schaeffler + Mitsubishi Electric removed from active watchlist.
- 2026-05-24 | salience-bias caught | User probed: "is Nabtesco-over-HDS purely based on HDS not announcing capex?" Honest answer: yes, largely. I anchored on the vivid recent data point (Nabtesco capex doubling) without doing rigorous head-to-head. Counter-argument: HDS silence on capex can be read as supply discipline maintaining premium pricing, NOT as weak confidence. The capacity-constrained-supplier thesis I'm bullish on actually argues AGAINST building more capacity. Rigorous head-to-head dimension count: HDS wins 4-5 dimensions (market share concentration 60% vs 35%; pure-play exposure; stronger dual-narrative via semi cap-equip; pricing-power preservation). Nabtesco wins 1-2 (capex execution signal; downside floor via diversified parent). REVISED first-pick: HDS, OR pair them with HDS:Nabtesco ≈ 60:35 weighting proportional to market share. Bias pattern: salience bias — vivid recent data point (capex announcement) overweighted vs structural metrics (market share, pure-play, dual-narrative depth). Watch for this in sizing matrix tomorrow: never pick A over B based on one vivid data point without checking whether the same point is symmetric in interpretation.
- 2026-05-25 | Physical AI scoping gap | User asked for Jensen's sovereign AI + physical AI definitions. Verified via orthogonal web sources. **Physical AI per Jensen = AI with a body, perceives/reasons/learns from environment, three-computer framework (train + deploy + digital twin).** Domains: robotics + AVs + digital twins + industrial automation (Siemens partnership) + AI-RAN + edge devices (PCs/consoles/workstations). My robotics-primer.md covers ~50-60% of Physical AI surface. **GAPS surfaced**: autonomous vehicles (Mobileye, Tesla FSD, Waymo, LIDAR layer), industrial automation enterprise stack (Siemens, Rockwell, Schneider above VFDs), AI-RAN (Ericsson, Nokia, NVDA Aerial), enterprise digital twin platforms (Bentley, Ansys, Dassault). Implications for held names: Murata + STM + GLW + TSEM all touch MULTIPLE Physical AI domains beyond what my robotics framing captured — multi-narrative scores should be revised upward. Sovereign AI: $30B FY26 NVDA revenue (+200% YoY), 14% of total, 40 countries, $50T GDP coverage. Existing planned `geopolitical-ai-primer` should be re-scoped to `sovereign-ai-primer`.
- 2026-05-25 | NVDA Q1 FY27 stock-reaction P2 closed | User framing: numerical grade is correctness signal; stock movement is macro-positioning noise outside this OS's scope. Closed the P2 to-do by user-fiat. Numerical grade HIT direction on all 5 axes; biggest miss UNDERCALLED Q2 guide by $2.5B (lesson L4 already in lessons.md).
- 2026-05-25 | Physical AI primer Phase 1+2 built | User instruction: "build the physical AI primer... mainly do research where you can see Physical AI being deployed the fastest... finding a company that provides to every single subsegment within the physical AI narrative would be an interesting find." Built via ~15 web searches across 5 batches. Universal cross-sub-domain suppliers identified: **Sony Semiconductor (6758.T) 43-64% global CIS market share = strongest single-name answer to user's vision-supplier question; 5/6 sub-domains**. Other universal-supplier names: Murata (40% MLCC + auto 30% revenue — VALIDATES user's intuition with hard data), STM (NXP MEMS acquisition Feb 2026 closing for ~$950M — material new positive), NVDA (6/6 universal champion), TE Connectivity + Amphenol (connectors), Bentley Systems (digital twin). Verified Physical AI growth ranking: industrial robots within Physical AI 56.7% CAGR (fastest); healthcare 39.4%; total 32-47%; AVs 25% CAGR ($203B largest absolute pool). Sony candidate stub created. Murata + STM thesis files cascade-updated with multi-narrative upgrade. Methodology fluidity table principle #24 status updated to "active (validated)" — robotics Phase 2+3 + Physical AI Phase 1+2 both produced material refinements vs pre-training.
- 2026-05-25 | Google I/O 2026 + Cloud Next 2026 event ingested | User instruction: search latest Google I/O + analyze agentic/inference/multi-tool impact on companies. Verified via ~5 web searches. Two layers stack: (1) I/O 2026 May 19-20 — Gemini 3.5 Flash + Antigravity 2.0 (multi-agent orchestration as DEFAULT UX) + Managed Agents API + Project Mariner/Astra. (2) Cloud Next April 2026 — TPU 8t Sunfish (Broadcom-designed training, TSMC 2nm late 2027) + TPU 8i Zebrafish (MediaTek-designed inference, TSMC 2nm late 2027) bifurcation. Anthropic 3.5GW anchor for both. Ironwood TCO $0.18/M tokens vs Blackwell B200 $0.31/M = 42% TCO advantage (SemiAnalysis verified). Google $175-185B 2026 capex nearly doubles 2025. Custom ASICs 44.6% CAGR; inference now 2/3 of AI compute. **Validates Patel custom-Si thesis with hard data.** Cascade applied to 9 held thesis files (HYNIX strongest 1st-order winner, NOW + DDOG + GLW + AXTI also 1st-order strengthened, MURATA + TE 2nd-order indirect, AMZN mixed via Anthropic multi-cloud, NVDA inference competitive pressure verified). AVGO (P1 candidate) clearest single-name custom-Si winner via TPU 8t Sunfish design win.
- 2026-05-25 | Portfolio rebalance executed by user | Per holdings.md screenshot 2026-05-25: cash deployed ~€21,800 (51,673 → 29,867). Portfolio value €82,544 → €110,396. Total P/L +€15,396 → +€21,441. Executed actions: (1) Murata 12.4% → 16.77% (+€8.2K) — EXECUTED Physical AI multi-narrative overweight ✓; (2) DDOG 6.8% → 10.38% (+€5.4K) — EXECUTED agentic observability overweight ✓; (3) SMTC NEW 6.09% (+€6.7K) — user independent thesis layer, entered above prior 2-3% candidate target (now upgraded to HELD); (4) Hyperliquid 5.7% → 8.24% (+€3.3K) — off-AI-thesis add; (5) T1 Energy 7.1% → 4.82% (-€570 trim). NOT executed: STM modest overweight (5.51% slightly down from 6.6%) — open question for user; ISRG/HDS/Nabtesco/Sony/AVGO candidates remain on watchlist with ~€29,867 cash dry powder. Discipline observation: user actions partially aligned with recommendations + added independent layer (SMTC). Two recommendation-execution gaps: (a) STM not increased despite multi-narrative 6/5 score; (b) Hyperliquid added despite off-AI-thesis flag (user's call — not a framework miss). The portfolio is now structurally well-positioned for the Physical AI + agentic + Google TPU bifurcation cascades verified this session.
- 2026-05-25 | Planned trades announced (pending US market open 2026-05-26) | User announced: **€10,000 NEW position HDS (Harmonic Drive Systems)** + **€5,000 additional add to STM**. Combined €15,000 deployment (~half of ~€29,867 cash). Post-trade portfolio ~€125K; HDS would be ~roughly 8% (above my 3-5% suggested range — user higher conviction on actuator choke-point thesis); STM would move from 5.51% → ~roughly 9% (closing the previously-flagged execution gap, lands in my recommended 8-10% range). Both trades execute against verified framework recommendations: HDS = first-pick per 2026-05-24 salience-bias catch (rigorous head-to-head favored HDS over Nabtesco on market share + dual-narrative + pricing-power preservation); STM = Physical AI multi-narrative 6+/5 recommendation. Cash post-execution ~€14,867 remaining. Discipline observation: this is the cleanest framework-aligned execution sequence yet — both trades trace directly to specific OS recommendations (not user independent layer like SMTC was).
- 2026-05-25 | Principle #25 codified + B27 + ARM thesis cascaded | User corrected after ARM AGI CPU research surfaced specific findings (136 Neoverse V3 cores TSMC 3nm + Meta lead customer + OpenAI/Cerebras/Cloudflare launch partners + Stargate ARM role + Q-by-Q $1B+ 3 consecutive quarters + $2B unfilled orders capacity-constrained framing) that were discussed in chat but NOT cascaded to `companies/ARM/thesis.md`. User pushback: research findings about a company with existing thesis file MUST be added to that thesis file. Codified as principle #25 "Research findings cascade to existing thesis files" with full fluidity footer + falsifier (overhead vs signal) + re-evaluation trigger (monthly or 5 cascade events). B27 documents the bias as the canonical-capture gap distinct from B16 (synthesis cascade gap operates artifact→thesis; B27 operates research→thesis). ARM thesis updated 2026-05-25 with all five categories of new findings + inline citations. Hook enforcement deferred (standard pattern from B25/B26 — wait for 3+ drift events before building mechanical detection).
- 2026-05-25 | Test-time compute scaling event analyzed | User instruction: map agentic AI flows across enterprise + coder + consumer + verify OpenAI math claim + extrapolate demand. Verified via 3 web searches across orthogonal sources. Three layers stack: (1) OpenAI Erdős unit distance conjecture solved May 20, 2026 by internal general-purpose reasoning model — independently verified by mathematicians who had publicly criticized prior debunked OpenAI claims; (2) FrontierMath benchmark — 350 problems (290 private + 60 public/expansion); top models now solving 40% of postdoc-level problems (up from <2% initial); (3) Test-time compute scaling REPLACING training-scale as dominant LLM-improvement vector — o1, o3, DeepSeek R1 win by thinking longer at inference; SWE-Bench Verified Claude-4.5-Opus 70.9% → 77.6% via test-time scaling. Per-segment compute pattern explicitly mapped: chat (low burst), agentic coder (medium iterative), agentic enterprise (high sustained), deep reasoning (massive sustained — 1M-10M+ thinking tokens per problem). N-th order cascade: 1st order HBM/HYNIX strongest, 2nd order optical interconnect compound (GLW/AXTI/TSEM/SMTC), 3rd order useful-AI enterprise inflection (NOW/DDOG), 4th order compute-as-utility framing crystallizes. Cascade applied per Critical Rule #10 + principle #25 to 10 held thesis files (HYNIX, NOW, DDOG, GLW, AXTI, MURATA, SNDK, STM, TSEM, SMTC). New signals/events file created: `signals/events/2026-05-25-test-time-compute-scaling.md`. Hyperliquid unaffected (off-AI thesis). The "useful AI" user-articulated inflection is structurally crystallizing via test-time compute scaling regime.

---

## How this file is maintained

- **Read at session start** (per Session Start Protocol in `CLAUDE.md`)
- **Updated when synthesis shifts** — not on every event. If event reinforces existing synthesis, log signal + move on.
- **Track view changes** in "What I changed my mind about" with date + trigger event
- **Force the non-default read** — every major event should produce at least one "what most analysts are missing" entry in §Non-default reads
- **Cross-reference** all assertions to source files (`wiki/`, `sector/`, `signals/`)

The file is the closest thing the OS has to a "memory palace" — themed rooms (constraints, narratives, scenarios, non-default reads, mind-changes, ambiguity) rather than chronology. Future me reads this first.
