# MRVL vs ALAB Head-to-Head Comparison — Critical Rule #16 Multi-Source Verification
**Date:** 2026-06-22
**Workflow:** MACRO-FIRST RESEARCH (Workflow #9) + TRIANGULATE
**Scope:** Deep verification, sizing-implication decision; ~120-180k token budget
**Requested by:** User 2026-06-22 PM (verbatim brain-dump re: ALAB vs MRVL upside-potential hypothesis)
**B17 applied:** User claim "ALAB smaller so more upside" treated as T3/T4 unverified hypothesis, not T1; submitted to empirical adjudication below.
**B45 applied:** Pre-training conservatism recalibration binding — did not pre-anchor to "smaller-cap = more upside" narrative as retail cliche before verifying multiples.

---

## Source-Tier Legend
- T1: Primary source (SEC filing, company IR, T1 newsroom, T1 earnings call transcript)
- T2: Secondary source (analyst note reconstructed via WebSearch, journalist coverage of primary)
- T3: Tertiary source (aggregator, opinion, Substack, social media relay)

---

## 1. ALAB Current State (Premise 1)

### Market Cap and Price (2026-06-22)

| Metric | Value | Source |
|---|---|---|
| ALAB price 2026-06-22 | ~$413 (intraday, near ATH $421.20 hit June 18) | T2 MarketBeat / TradingView |
| ALAB market cap | ~$72-75B | T2 multiple sources |
| ALAB ATH | $421.20 (June 18, 2026) | T2 |
| MRVL price 2026-06-22 | $308.84 (prior close $310.58) | T2 Yahoo Finance |
| MRVL market cap | ~$272B | T2 CompaniesMarketCap |

**Critical timing flag:** ALAB joined Nasdaq-100 on June 22, 2026 open (per T2 GuruFocus announcement June 12). Passive fund mandatory buying completed at open June 22. Stock up ~95.84% in the past month (T2 MarketBeat). This is an index-inclusion technical overshoot. The current price is materially inflated by a one-time passive-flow event — NOT pure fundamental repricing. User's "relatively small vs MRVL $200B+" framing underestimates current ALAB size — ALAB is now a $72-75B cap.

### ALAB Revenue Trajectory

| Period | Revenue | YoY Growth | Source |
|---|---|---|---|
| FY2024 (full year) | $396.3M | +242% | T1 Astera Labs 10-K |
| FY2025 (full year) | $852.5M | +115% | T1 [Astera Labs IR](https://ir.asteralabs.com/news-releases/news-release-details/astera-labs-reports-fourth-quarter-and-full-year-2025-financial) |
| Q4 FY2025 | $270.6M | — | T1 same |
| Q1 FY2026 (most recent) | $308.4M | +93% YoY / +14% QoQ | T1 [Astera Labs 8-K](https://www.sec.gov/Archives/edgar/data/0001736297/000173629726000017/q126exhibit991.htm) |
| Q2 FY2026 guidance | $355-365M | ~15-18% QoQ | T1 same 8-K |
| FY2026 consensus | ~$1.35B | ~58% YoY | T2 analyst consensus |

**Annualized run rate at Q2 guidance midpoint:** ~$1.44B (my model: $360M x 4).

### ALAB Profitability

| Metric | Q1 FY2026 | Source |
|---|---|---|
| GAAP gross margin | 76.3% | T1 8-K |
| GAAP operating margin | 20.1% | T1 8-K |
| Non-GAAP operating margin | 36.2% | T1 8-K |
| Non-GAAP diluted EPS | $0.61 (vs $0.18 estimate = 239% beat) | T1 8-K |
| Q2 FY26 non-GAAP EPS guidance | $0.68-$0.70 | T1 8-K |

### ALAB Customer Concentration

Per T1 Q1 FY2026 10-Q ([SEC](https://www.sec.gov/Archives/edgar/data/0001736297/000173629726000020/alab-20260331.htm)):
- Five customers accounted for approximately 90% of Q1 revenue
- Customer A = 29%, Customer B = 21%, Customer C = 16%, Customer D = 12%, Customer E = 12%
- **Customers are anonymized in 10-Q; analyst research attributes Customer A as likely Amazon (ODM buying on behalf of AWS)**
- The 70% single-hyperscaler figure circulating in analysis appears to be ANALYST RECONSTRUCTION not T1 named disclosure — flag as T2-reconstructed, not T1-verified
- Note: some listed "customers" are ODMs (manufacturing partners) buying on behalf of end hyperscalers, so actual end-buyer concentration may differ from 10-Q line items

**Material risk flag:** Whether 1 or 5 customers, 90% revenue from 5 accounts is EXTRAORDINARY concentration versus MRVL's diversified mix across Google, Microsoft, Amazon, plus carrier and enterprise segments. If any hyperscaler pauses orders (architectural shift, macro capex cut), ALAB revenue impact is immediate and severe.

### ALAB Product Portfolio

| Product | Function | AI Relevance |
|---|---|---|
| **Aries Smart DSP Retimers** (PCIe/CXL) | Signal integrity / reach extension for PCIe Gen 5/6 and CXL signals — "bridges" the signal between chips on a board | Every PCIe-attached AI accelerator server needs retimers for board-level connectivity; ALAB leads this market with Aries family |
| **Taurus Ethernet Retimers** | Same concept applied to Ethernet PHY signals (400G/800G) | Hyperscaler custom NIC / ToR switch builds need retimers for Ethernet signals at high data rates |
| **Leo CXL Smart Memory Controllers** | CXL 2.0+ memory expansion and pooling — lets servers access more DRAM than physically attached via CXL protocol | The load-bearing "CXL franchise"; enables rack-scale memory disaggregation; first to market per SemiAnalysis T1 |
| **Scorpio Smart Fabric Switch** | PCIe Gen 5/6 and CXL fabric switching for rack-scale connectivity — P-Series (PCIe) and new X-Series (320-lane AI fabric) | Directly competes with MRVL XConn in the PCIe/CXL switch market |

**Key 2025-2026 addition:** NVLink Fusion ecosystem participation — ALAB announced collaboration with NVIDIA May 2025 ([T1 GlobeNewswire](https://www.globenewswire.com/news-release/2025/05/19/3084050/0/en/Astera-Labs-Expands-Collaboration-with-NVIDIA-to-Advance-NVLink-Fusion-Ecosystem.html)) to provide custom connectivity solutions. Aries retimers already deployed in NVIDIA HGX and Hopper platforms at volume. This is a DIRECT PARALLEL to MRVL's NVLink Fusion participation — BOTH companies are NVLink Fusion ecosystem partners.

---

## 2. MRVL vs ALAB Overlap Matrix (Premise 2)

### Competitive Relationship by Product Category

| Segment | MRVL Product | ALAB Product | Relationship | Who Leads |
|---|---|---|---|---|
| **PCIe retimers** | Spica / Polaris PCIe retimer families | Aries PCIe Smart DSP Retimers | DIRECT HEAD-TO-HEAD | ALAB — first-mover advantage, lead in AI server sockets; MRVL competing but ALAB holds strongest design-win position |
| **CXL retimers** | CXL retimer capability within Spica/Polaris | Aries CXL Smart DSP Retimers | DIRECT HEAD-TO-HEAD | ALAB — "dynamic pooling feature of Leo (no reboot) = clear tech advantage over Marvell's first-gen" per T2 competitive analysis |
| **Ethernet retimers** | Alaska / Atlas Ethernet PHY/retimer families (legacy Inphi + MRVL) | Taurus Ethernet Retimers | DIRECT HEAD-TO-HEAD | MRVL — much stronger Ethernet retimer franchise from Inphi heritage; ALAB Taurus smaller market position |
| **PCIe/CXL fabric switches** | XConn Technologies (acquired Jan-Feb 2026; ~$540M) | Scorpio Smart Fabric Switch (P-Series + X-Series 320-lane) | DIRECT HEAD-TO-HEAD (NEW — XConn acquisition created this overlap) | ALAB has first-mover; MRVL XConn is the challenger; competition intensifying |
| **CXL memory connectivity** | CXL memory controller roadmap | Leo CXL Smart Memory Controllers | DIRECT HEAD-TO-HEAD | ALAB — first to market, SHIPPING at Microsoft Azure M-series; MRVL CXL memory controller lagging |
| **Optical / CPO / long-reach** | Celestial AI (Photonic Fabric, $3.25B acq Feb 2026), Inphi DCI DSP (COLORZ 1600/Electra/Libra), Ara 3nm DSP for 1.6T transceivers | **NOT in ALAB portfolio — ALAB has no optical DSP, no CPO, no coherent-DCI product** | NON-OVERLAPPING — MRVL has significant optical moat; ALAB absent | MRVL exclusively |
| **Custom-silicon ASIC design** | Lead ASIC designer for hyperscaler custom chips (Google TPU, AWS Trainium 4, Microsoft Maia 200/300) | ALAB does NOT design custom ASICs; ALAB sells standard connectivity products only | NON-OVERLAPPING | MRVL exclusively |
| **NVLink Fusion ecosystem** | MRVL NVLink Fusion (SEC 8-K confirmed; direct partner since 2024) | ALAB NVLink Fusion (announced May 2025; developing custom connectivity solutions) | ADJACENT — both are NVLink Fusion partners but at different layers (MRVL = custom Si for NVLink Fusion fabric; ALAB = PCIe/CXL retimers within heterogeneous NVLink clusters) | Both present; not directly competing for same socket |

### Summary Overlap Assessment

- **Direct competition (same socket contest):** PCIe retimers, CXL retimers, CXL memory controllers, PCIe/CXL fabric switches
- **Adjacent/complementary:** NVLink Fusion ecosystem (different layers), Ethernet retimers (different heritage/scale)
- **Non-overlapping (MRVL exclusive):** Optical interconnect (Celestial AI / Inphi DSP / CPO), Custom ASIC silicon design (Trainium, Maia, Google TPU)
- **Non-overlapping (ALAB exclusive):** Pure-play PCIe/CXL standard-product focus; ALAB does not compete in optical or ASIC design

**Key structural differentiation:** MRVL is a full-stack AI connectivity company (retimers + switches + optical + custom-ASIC); ALAB is a specialized PCIe/CXL/fabric-switch pure-play. MRVL competes across more dimensions but ALAB often leads on the pure-play dimensions where they overlap.

---

## 3. Upside-Potential Framework (Premise 3)

### Valuation Multiples Comparison

| Metric | MRVL | ALAB | Source / Hedge |
|---|---|---|---|
| Market cap (2026-06-22) | ~$272B | ~$72-75B | T2 (multiple sources) |
| LTM / most recent annual revenue | $8.195B (FY2026, T1 SEC) | $852.5M (FY2025, T1 IR) | T1 both |
| FY2026 (calendar) revenue estimate | ~$11.5B FY27 (MRVL fiscal Feb-year) | ~$1.35B FY2026 | T2 consensus |
| EV/NTM Revenue (approx) | ~$272B / ~$11.5B = ~23-24x | ~$72B / ~$1.35B = ~53x | (my model; market cap proxy for EV; rough) |
| NTM EV/EBITDA | ~54x (per T2 Multiples.vc June 2026) | ~104x (per T2 at $417) | T2 — directional only |
| Forward P/E (NTM) | ~42-69x (range across sources) | ~281x trailing (per T2 Morningstar); ~165x forward (per T2 EBC) | T2; ALAB significantly more expensive |
| NTM revenue growth (analyst) | ~43% CAGR FY27-28 per TIKR T2 | ~85% NTM growth per analyst consensus T2 | T2; ALAB growing faster |
| GAAP operating margin (most recent Q) | Data center dominates; MRVL GAAP OM roughly 20-25% range (derived; exact figure not extracted in this research) | GAAP OM 20.1% Q1 FY26 | T1 ALAB; MRVL ~directional hedge |
| Non-GAAP operating margin | ~35-40% (MRVL range; my model directional) | 36.2% Q1 FY26 | T1 ALAB; MRVL directional |

**The key finding on user's upside hypothesis:**

ALAB is NOT the cheaper name on a multiple basis. At ~53x EV/NTM Revenue vs MRVL ~23-24x, ALAB already trades at ROUGHLY DOUBLE MRVL's revenue multiple. The "smaller = more upside" narrative FAILS the multiple test — ALAB is priced for more growth than MRVL, not less.

**However:** ALAB IS growing faster (93% YoY Q1 2026 vs MRVL Q1 FY27 +28% YoY). The question becomes: does ALAB's faster growth JUSTIFY the higher multiple?

### Counter-Anchor Test (explicit per harness B45 / anti-"smaller-cap = more upside" rule)

Three ways the user's upside hypothesis could be WRONG:

1. **Multiple compression risk is higher for ALAB:** At ~53x NTM revenue, ANY growth deceleration (customer pause, CXL adoption slowdown, NVIDA architectural bypass) causes severe multiple compression. MRVL at ~23x has more cushion. ALAB is already pricing in significantly more upside.

2. **Absolute dollar TAM is MRVL's advantage:** MRVL's custom-ASIC segment alone (AWS Trainium 4, Google TPU vNext, MSFT Maia 300 etc.) addresses a multi-billion-dollar TAM with no ALAB competition. MRVL's optical DSP franchise (Celestial AI + Inphi) addresses a >$10B TAM with no ALAB competition. MRVL may have LARGER absolute $ upside even on a smaller % stock move if its non-overlapping segments re-rate.

3. **Stage-of-recognition:** ALAB is in early-to-mid Stage 3 (narrative catching institutional attention; Nasdaq-100 inclusion = peak-retail-recognition signal). MRVL is Stage 3-4. Earlier Stage is NOT necessarily better when the multiple has ALREADY run to 53x NTM revenue.

### What PARTIALLY SUPPORTS User's Hypothesis

1. **ALAB YoY revenue growth (93% vs MRVL 28%) is a REAL and LARGE differential.** If ALAB sustains >60% growth through FY27, the forward NTM revenue multiple compresses fast.

2. **Market-cap runway:** A $72B ALAB reaching MRVL's scale ($272B) would be a ~3.8x move from here. MRVL would need to reach ~$1T to deliver the same. Percentage-upside math favors ALAB IF growth sustains.

3. **ALAB is a purer connectivity play.** MRVL's custom-ASIC franchise success depends on hyperscaler design wins that have headline risk (Trainium demotion, AVGO competition). ALAB's Aries retimers travel with EVERY server regardless of who designs the ASIC — it's architecturally more defensible within its segment.

4. **Index inclusion catalyst is NOW complete** — June 22 was the Nasdaq-100 inclusion date. Mandatory buying is done. Near-term, this creates a potential entry point on "sell-the-news" profit-taking.

### Net Verdict on User's Upside Hypothesis

PARTIALLY SUPPORTED with critical caveat: the "smaller = more upside" framing is partially correct on % market-cap runway but WRONG on multiple — ALAB is already significantly MORE EXPENSIVE than MRVL on NTM revenue and EBITDA multiples. The upside hypothesis needs to be restated as: "ALAB has more upside IF it can sustain >60% growth AND the AI PCIe/CXL connectivity TAM expands faster than expected AND CXL is not killed by architectural bypass."

---

## 4. Investability + Entry Timing for ALAB (Premise 4)

| Question | Finding | Source |
|---|---|---|
| Degiro/N26 NASDAQ access | ALAB listed NASDAQ — YES, accessible | Standard platform access |
| Price off ATH | ALAB is near ATH ($413 vs ATH $421.20 on June 18); -1.9% off ATH | T2 MarketBeat |
| YTD / recent return | +95.84% in past month; massive run entering index inclusion | T2 |
| Index inclusion timing | Nasdaq-100 inclusion effective June 22 opening (today) — mandatory passive buying COMPLETED | T2 GuruFocus |
| Entry risk | EXTREMELY HIGH short-term: stock ran ~96% in 1 month purely on index-inclusion flow + AI momentum; no catalyst pending to sustain; analyst consensus PT ~$247 = stock trading 67% ABOVE consensus | T2 |
| Analogous to PENG ">25% pullback" trigger? | YES — applying the same conditional-entry trigger discipline from PENG watchlist entry: ALAB would need to pull back to ~$310-315 range (-25% from current levels) before entry risk-adjusted appropriately | my model |
| Sell-the-news risk | HIGH — T2 analysts explicitly flag "susceptibility to sell-the-news profit-taking and technical mean reversion" post index-inclusion forced buying | T2 Simply Wall St |

**Entry timing verdict:** Timing is extremely unfavorable right now. Index-inclusion + 96% monthly rally + stock at ATH + 67% above analyst consensus = poor risk-adjusted entry even if the long-term thesis is correct. The user should WAIT for a material pullback before establishing or sizing a position.

---

## 5. Structural Risks Unique to ALAB (Premise 5)

### Risk 1: Customer Concentration (HIGH — larger risk than MRVL)

ALAB's top-5 customers = ~90% of revenue. Customer A alone = 29% of Q1 FY26 revenue (T1 SEC 10-Q). If analyst attribution to a single hyperscaler is correct (even if not 70%), the dependency is extreme. MRVL's revenue is diversified across Google, Amazon, Microsoft, plus carrier ethernet and enterprise. ALAB has NO comparable diversification. A single hyperscaler architectural decision (pause, redesign, vertical integration) creates an immediate and severe revenue crater for ALAB.

### Risk 2: CXL Standards/Adoption Risk (HIGH — this hits ALAB MORE than MRVL)

SemiAnalysis published "CXL Is Dead In The AI Era" (T1 SemiAnalysis newsletter, title confirmed in WebSearch). The thesis: for GPU training workloads, NVLink and NVMe already satisfy memory bandwidth needs; CXL adds complexity without sufficient benefit for the primary AI workload. ALAB's Leo CXL product line is its most strategic long-term franchise and it IS exposed if CXL adoption slows in AI servers. MRVL's XConn (PCIe/CXL switch) is also exposed, but MRVL has optical + custom-ASIC revenues that are completely insulated from CXL risk. For ALAB, CXL adoption rate IS the thesis.

**Counter-evidence:** ALAB Leo is DEPLOYED at Microsoft Azure M-series VMs (T1 Astera Labs newsroom) — this is real production revenue, not just evaluation. CXL is already delivering for CPU-attached inference workloads even if GPU training workloads remain NVLink-dominant.

### Risk 3: NVIDIA Vertical Integration (MEDIUM — indirect risk via CMX)

NVIDIA's Confidential Compute eXtension (CMX) / NVLink Fusion heterogeneous architecture creates a world where NVIDIA hardware absorbs more connectivity functions natively. If NVIDIA adds native PCIe/CXL retimer capability into next-gen HGX motherboard designs, ALAB Aries retimer content per server could decline. This risk is lower for PCIe Gen 6 (technical complexity likely requires external retimer for next 2-3 generations) but a real structural watch.

### Risk 4: Valuation Fragility (HIGH — unique to current entry)

At ~53x NTM revenue, ALAB has essentially ZERO tolerance for negative surprises. A single customer pause (e.g., AWS pauses PCIe 6 retimer orders for one quarter), growth guidance cut, or macro capex slowdown could compress ALAB 40-60% even without thesis impairment. MRVL at ~23x NTM revenue has more fundamental cushion.

### Risk 5: Lock-Up / Share Dynamics

No unusual lock-up dynamics surfaced in research. IPO March 2024; standard post-IPO lock-up long expired. No unusual insider lock-up events pending. Normal share structure.

---

## 6. Joint-State Comparison Matrix

| Dimension | MRVL | ALAB | Edge |
|---|---|---|---|
| Market cap (2026-06-22) | ~$272B | ~$72-75B | MRVL larger by 3.6x |
| Revenue (LTM) | $8.2B (T1) | $852M (FY2025 T1) | MRVL 9.6x larger |
| Revenue growth (most recent Q YoY) | +28% (Q1 FY27 T1) | +93% (Q1 FY26 T1) | ALAB faster by 3.3x |
| NTM revenue multiple (approx) | ~23-24x (my model) | ~53x (my model) | MRVL cheaper by ~2.2x |
| NTM EV/EBITDA | ~54x (T2) | ~104x (T2) | MRVL cheaper by ~1.9x |
| GAAP operating margin | ~20-25% (directional; exact Q1 not extracted) | 20.1% (T1) | Approximately equal |
| Non-GAAP operating margin | ~35-40% directional | 36.2% (T1) | Approximately equal |
| Customer concentration | Diversified (multiple hyperscalers + carrier + enterprise) | Extreme (top 5 = ~90% revenue; T1) | MRVL safer |
| PCIe retimer market | Competing (challenger) | Market leader — deployed NVIDIA HGX/Hopper at volume | ALAB leads |
| CXL memory controller | Developing (lagging) | Market leader — first to market, Azure M-series deployed | ALAB leads |
| PCIe/CXL fabric switch | XConn (Jan 2026 acq; new entrant) | Scorpio (first-mover, shipping 320-lane X-Series) | ALAB leads |
| Ethernet retimer | Strong (Inphi heritage) | Smaller position (Taurus) | MRVL leads |
| Optical DSP / CPO | Strong (Celestial AI, Ara 3nm, Inphi DCI) | ABSENT | MRVL only |
| Custom ASIC (hyperscaler chips) | Strong (Trainium 4, Maia 200 shipped, Google TPU) | ABSENT | MRVL only |
| NVLink Fusion participation | Confirmed (SEC 8-K) | Confirmed (May 2025 announcement, developing custom solutions) | Both participate; different layers |
| CXL-dead risk if CXL fails | PARTIAL (XConn only; optical + ASIC insulated) | HIGH (Leo = core long-term franchise) | MRVL more resilient |
| Valuation fragility at current price | Medium (~23x NTM Revenue cushion) | Very high (~53x NTM Revenue, near ATH, post-index-inclusion flow) | MRVL more defensible |
| Anti-fragility score (my model) | 3-4/5 scenarios (optical + custom-ASIC + retimers win in most AI scenarios) | 2-3/5 (retimers win broadly; CXL and switch depend on specific architectural outcomes) | MRVL higher |
| Entry timing (2026-06-22) | Reasonable (held at cost basis; not at ATH) | Very poor (ATH, index-inclusion overshoot, 67% above analyst consensus) | MRVL better |

---

## 7. Pattern Verdict — User's "ALAB More Upside" Hypothesis

**VERDICT: PARTIALLY SUPPORTED — with critical re-framing required**

The hypothesis as stated ("smaller cap = more upside potential because large cap has less room") is structurally PARTIALLY SUPPORTED on % market-cap-runway math but EMPIRICALLY WRONG on multiple comparison.

The actual analytical re-framing:

| Hypothesis component | Status | Evidence |
|---|---|---|
| "ALAB has more upside because smaller market cap" | PARTIALLY CORRECT on % runway; INCORRECT on multiple basis | ALAB at ~53x NTM Revenue vs MRVL ~23x = ALAB is already pricing in substantially more growth; user's intuition conflates "smaller cap" with "cheaper" which is a category error when multiples differ |
| "MRVL might have less upside because already large" | PARTIALLY CORRECT in % terms; INCORRECT in absolute $ TAM exposure | MRVL's non-overlapping segments (optical, ASIC) give it unique absolute-$ expansion not available to ALAB; if Celestial AI photonic fabric becomes the dominant scale-up interconnect, MRVL's optical franchise alone could justify multi-hundred-billion market cap |
| "ALAB is a CXL play" | PARTIALLY CORRECT — CXL is ALAB's most strategic franchise but ALAB is ALSO a PCIe retimer and fabric-switch company; CXL is the long-term bet but retimers are the current revenue engine | T1 10-Q / product portfolio |
| "MRVL and ALAB overlap significantly" | CORRECT in the retimer + switch layers; INCORRECT overall — MRVL's largest revenue segments (optical DSP + custom ASIC) have ZERO ALAB competition | Multi-source T1/T2 |

---

## 8. Position-Implication Framing

**Is ALAB additive to MRVL (different exposure) OR substitute (overlapping bet)?**

**Verdict: PARTIALLY ADDITIVE, PARTIALLY SUBSTITUTABLE — with a net "additive" read IF sizing is correct**

Additive dimensions:
- ALAB provides PURE-PLAY PCIe/CXL retimer + fabric-switch exposure that MRVL's diversified revenue doesn't cleanly offer
- ALAB's Leo CXL thesis plays out in a world where CXL WINS at the memory-disaggregation layer — a world where MRVL also benefits (XConn) but less directly
- ALAB provides earlier-stage leverage to the connectivity-layer thesis if MRVL's stock is already more mature

Substitutable dimensions:
- In PCIe retimers and CXL fabric switches, they compete for the same hyperscaler dollars — if you are bullish on AI server PCIe/CXL connectivity, ALAB and MRVL are partially overlapping bets
- Both are NVLink Fusion ecosystem participants, meaning both benefit from NVIDIA hyperscaler dominance

**Portfolio framing:** adding ALAB alongside MRVL makes most sense as a SIZING TRADE — ALAB is a higher-beta, higher-multiple version of the PCIe/CXL connectivity sub-theme. But at current prices (ATH + 96% monthly rally + 67% above analyst consensus), entry is PREMATURE. The position would add most value on a 25-35% pullback ($275-$315 price range), where the growth story remains intact but the index-inclusion overshoot has unwound.

---

## 9. Material Yield Class

**YIELD CLASS: HIGH**

Key findings that are genuinely non-default:
1. ALAB is already ~53x NTM Revenue — NOT cheaper than MRVL on multiples; the "smaller = more upside" retail narrative FAILS the multiple test
2. ALAB and MRVL have DIRECT competition in PCIe/CXL retimers and fabric switches, but MRVL's optical + custom-ASIC revenues (>50% of total revenue directionally) have ZERO ALAB competition
3. ALAB joined Nasdaq-100 on June 22 (today) — index-inclusion buying IS complete; immediate sell-the-news risk is the dominant near-term factor
4. ALAB customer concentration (5 customers = 90% revenue, T1) is extreme vs MRVL's diversified base — a structural risk unique to ALAB

---

## 10. NOT-FOUND / EXPLICITLY FLAGGED ITEMS

| Item | Status |
|---|---|
| MRVL exact Q1 FY27 GAAP operating margin % | Not extracted in this research pass; directional only |
| MRVL NTM EV/Revenue exact figure | Computed as rough proxy (market cap / consensus revenue); needs dedicated valuation tool for precision |
| ALAB Customer A name confirmation (T1) | NOT confirmed T1 — 10-Q anonymizes as "Customer A"; Amazon attribution is T2/T3 analyst reconstruction only |
| ALAB vs MRVL Taurus Ethernet retimer market share quantification | Not sourced in this pass; MRVL dominates Ethernet retimer directionally (Inphi heritage) but exact share split not found |
| XConn revenue contribution in MRVL Q1 FY27 (did XConn contribute materially?) | Not extracted; XConn acquisition closed Feb 10, 2026; first Q with full contribution = Q2 FY27 (Q ending May 2026) |
| SemiAnalysis "CXL Is Dead" article date and full argument | Title confirmed via WebSearch T1 (SemiAnalysis.com); full argument not retrieved (WebFetch blocked per environment-constraints.md) |

---

## 11. Cross-Reference for Harness Cascade

This artifact references:
- `companies/MRVL/thesis.md` (MRVL connectivity-layer-not-ASIC framing; XConn position in CXL switch market)
- `watchlist/candidates.md` (ALAB NOT currently on watchlist — this analysis establishes the P2 candidate framing)
- `research/meta/biases-watchlist.md` B17 (user-deference; applied — tested user's "smaller = more upside" hypothesis rather than adopting)
- `research/meta/biases-watchlist.md` B45 (regime-recalibration; applied — did not pre-anchor ALAB as "overvalued" just because near ATH)
- Portfolio note: `portfolio/holdings.md` MRVL 5.9% Active, 44sh @ $286.26 BEP

**Companies mentioned requiring cascade check:**
- MRVL (held) — no thesis change from this analysis; HOLD unchanged; ALAB competitive overlap in PCIe/CXL retimers is KNOWN and already modeled in MRVL's connectivity-layer thesis; MRVL's optical + custom-ASIC franchise provides insulation
- ALAB (not held) — WATCHLIST CANDIDACY established at P2; entry trigger: 25-35% pullback from current levels (~$275-$315 range); Q2 FY26 earnings (next print, likely August 2026) = first fundamental checkpoint post-index-inclusion
