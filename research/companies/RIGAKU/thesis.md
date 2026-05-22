# Rigaku Holdings (268A.T) — Thesis (Compact)

**Last updated:** 2026-05-21
**Tier:** Watchlist (niche metrology play; smaller TAM than other candidates)
**Position target:** 1–2% if entered (user holds 0%)
**Anti-fragility:** 2.5/5 — wins modestly in S1, S2; less leverage than equipment plays
**Foundation:** `research/wiki/hbm-primer.md` (advanced packaging), `research/wiki/custom-silicon-primer.md`

## TL;DR

Rigaku Holdings is a Japanese X-ray analytical solutions company specializing in **semiconductor process control + metrology**. Recently strategic-allied with **Onto Innovation (NYSE: ONTO) via 27% equity investment** per [BusinessWire](https://www.businesswire.com/news/home/20260420467739/en/Rigaku-Enters-Strategic-Alliance-with-Onto-Innovation-through-27-Equity-Investment). Combined offering: Onto's AI Diffract software + Rigaku's CD-SAXS platforms. **Target SAM ~$1B by 2030 for advanced AI semiconductor metrology** per [Financial Content](https://www.financialcontent.com/article/bizwire-2026-5-12-rigaku-accelerates-next-generation-semiconductor-metrology-development-leveraging-world-class-research-infrastructure).

3-year imec partnership for 3D device metrology + ultrathin film detection + non-destructive inspection per same.

## Where Rigaku sits in the AI stack

Metrology + inspection equipment for advanced semiconductor manufacturing. Adjacent to (but distinct from) Camtek (CAMT — advanced packaging inspection per `research/companies/CAMT/thesis.md`) and Onto Innovation (process control / inspection).

The thesis is: as chip complexity scales (HBM4 16-Hi stacks, advanced packaging, 2nm logic), in-line X-ray metrology becomes mandatory. Rigaku's CD-SAXS technology can measure 3D structures at the nm scale non-destructively — needed for next-gen packaging and HBM stacks.

## Anti-fragility (per `research/sector/scenarios.md`)

| Scenario | Result |
|---|---|
| S1 NVDA dominant | MILD WIN — more chips = more inspection |
| S2 Custom Si fragments | MILD WIN — same |
| S3 Power binds | NEUTRAL |
| S4 Digestion | LOSS — equipment cycle |
| S5 Regulatory | NEUTRAL — Japanese |

**Anti-fragility: 2.5/5**

## Position recommendation

1-2% entry candidate. **Lower priority than AIXTRON.** Reasoning:
- SAM ~$1B by 2030 is smaller than AIXTRON's €560M+ current revenue base
- More indirect AI exposure (metrology vs deposition)
- Recent Tokyo IPO; less liquid + less covered by US analysts
- Pair-trade with Onto Innovation (which they own 27% of) is interesting but complex

**Could substitute for CAMT (~2-3%)** if user prefers a different metrology angle, but CAMT has more direct AI packaging revenue exposure today.

## Blind spots

1. Recent Tokyo IPO — limited operating history as public co
2. Currency exposure (JPY)
3. The 27% Onto investment structure (is it dilutive to Rigaku? Voting rights?)
4. Specific quarterly revenue trajectory not pulled
5. Competition from KLA, Applied Materials in metrology
6. Customer concentration in Japanese vs global market
7. Liquidity of TYO listing for international investors

**Most important blind spot:** the actual customer concentration + revenue trajectory of Rigaku's semiconductor metrology vs scientific instruments segments.

## Cross-references
- `research/wiki/hbm-primer.md` — HBM4 16-Hi stacks need advanced metrology
- `research/companies/CAMT/thesis.md` — adjacent (packaging inspection)

## Deep dive (added 2026-05-22, full framework + corrections to existing thesis)

Triggered by user request 2026-05-22 to apply full framework. Cross-vertical surfaces **material corrections to existing thesis** that was guilty of surface-analyst-style framing.

### Critical corrections

**1. Q1 FY26 is a DECLINE quarter, not growth.** Per [BigGo Q1 FY26 results](https://finance.biggo.com/news/jpx_tdnet_140120260513527936) + [Q1 FY26 presentation PDF](https://ircms.irstreet.com/contents/data_file.php?template=1978&brand=&folder_contents=51578&src_data=486716&filename=pdf_file.pdf):
- Revenue ¥17,933M (**-13.0% YoY**)
- Operating profit ¥630M (**-77.8% YoY**)
- Net profit ¥329M (**-82.8% YoY**)

Corroborated by [Simply Wall St headline](https://simplywall.st/stocks/jp/tech/tse-268a/rigaku-holdings-shares/news/rigaku-holdings-q1-2026-margin-compression-tests-bullish-gro): "Q1 2026 Margin Compression Tests Bullish Growth Narrative."

Semiconductor process control instruments segment "trending above expectations" + parts/service +13.2% — but OTHER segments are dragging total company performance materially below the bullish narrative.

**2. TAM correction.** Existing thesis cited "Target SAM ~$1B by 2030." The actual partnership-specific target is **$300M by 2030** per the Onto alliance announcement (cross-vertical research 2026-05-22). The $1B figure may reflect broader semiconductor metrology SAM but the $300M is the partnership-specific value-add. Materially smaller than existing thesis implied.

**3. Onto deal details (more specific than existing thesis):**
- Onto Innovation purchasing 27% stake for **~$710M** (funded partly by $500M bridge loan)
- Closing expected **H2 2026**
- Implied Rigaku total valuation ~$2.63B at deal terms

### Moat duration vs binding constraint duration (per SMTC framework)

**Moat duration (Rigaku's competitive position): 18-30 months at current portfolio**

| Asset | Moat duration |
|---|---|
| CD-SAXS technology niche | 18-30 months (KLA + optical alternatives closing) |
| Onto alliance + AI Diffract integration | 24-36 months (post-H2 2026 close) |
| imec partnership for 3D metrology | 24-36 months (research-to-commercialization gap) |

**Binding constraint duration: 5+ years** (HBM4 + advanced packaging + 2nm logic metrology demand)

**The asymmetry: moat (18-30 months) MUCH shorter than external constraint (5+ years).** Same pattern as SMTC but **more extreme** — Rigaku needs continuous innovation + Onto integration execution to extend moat. Without that execution, competitors close gap before constraint expires.

### Architecture-choice dependent (similar to SMTC pattern)

- **Chip-architecture agnostic (YES):** HBM metrology needed regardless of who buys (NVDA Rubin, AVGO custom Si, AMD MI, ARM AGI CPU)
- **Architecture-choice dependent (PARTIAL):** Rigaku wins if X-ray metrology is chosen for specific applications; loses if optical metrology dominates. **Onto alliance HEDGES this risk** by combining X-ray + optical, but execution depends on joint product roadmap landing H2 2027+.

### D1-D5 scoring (post-correction)

- **D1 Structural relevance: MEDIUM-LOW** — metrology structurally needed but Layer 2 not Layer 0; multiple alternatives
- **D2 Chokepoint severity: LOW** — not chokepoint themselves; Layer 2 indirect beneficiary
- **D2.5 Proximity to bottleneck:** Layer 1 at CD-SAXS niche; Layer 2 at broader metrology; **NOT Layer 0 at anything** — meaningfully lower bottleneck-proximity than ALAB/ARM/SMTC
- **D3 Competitive position: TIER-2 NICHE** — KLA dominant; Onto alliance materially strengthens but recent IPO; limited public-company operating history
- **D4 Mismodeling + rerating arc: ANCHOR signal with operating DECLINE** — Onto deal is anchor; Q1 FY26 -13%/-78%/-83% CONTRADICTS bull thesis in current data
- **D5 Independent view:** existing thesis was guilty of surface-analyst framing; corrected reframe is materially less bullish

### Comparison to other Portfolio B candidates

| Candidate | Quality tier | Key strength | Key weakness |
|---|---|---|---|
| **ALAB** | Tier 1 | Layer 0 multi-bottleneck + 76% GAAP GM | 70%+ customer concentration |
| **SMTC** | Tier 1 | Multi-hyperscaler LPO + 1.6T ACC NOW + reasonable valuation | Architecture-choice + 24-30mo moat |
| **ARM** | Tier 1 | Multi-vector + 50% hyperscaler share + UK/Japan diversifier | 132x P/E + RISC-V threat + SoftBank overhang |
| **Rigaku** | **Tier 3** | Onto alliance + Japan diversifier + CD-SAXS niche | **Operating decline ACTIVE + smaller TAM + Tier-2 niche + more speculative** |

### Updated falsifier hierarchy

1. **CRITICAL: Q2-Q3 FY26 revenue trajectory continues declining (current -13% YoY persists)** — would mean bull thesis is not materializing in operating data
2. **CRITICAL: Onto deal closing delayed past H2 2026** — moat-extension thesis breaks
3. **HIGH: CD-SAXS adoption stalls at HBM4 customers** — KLA + Onto AI Diffract dominates instead
4. **HIGH: Joint Onto-Rigaku product roadmap slips past 2027** — extends no-revenue gap
5. **MEDIUM: Scientific instruments segment continues drag**
6. **MEDIUM: $300M partnership target proves too aspirational**

### Portfolio A/B category — REVISED

**Primary: Portfolio B (Asymmetric Upside satellite) but Tier 3 quality**
- 1-2% sizing range per existing thesis (cross-vertical confirms this is appropriate, possibly even high)
- HIGHER speculative element than ALAB, ARM, SMTC
- Operating decline ACTIVE = current data contradicts bull thesis
- Better characterized as **speculative recovery play with Onto-alliance anchor** rather than asymmetric AI beneficiary

### Cross-portfolio implications

- **Japan diversifier** — adds geographic diversification alongside Murata (held)
- Adjacent to CAMT (candidate) — different metrology angle; CAMT has more direct AI packaging revenue today
- Adjacent to AIXTRON (candidate) — different equipment layer; AIXTRON has stronger near-term traction
- Adjacent to HYNIX (held) — HBM4 metrology customer (indirect)
- **TSE listing = less liquid for international investors** — execution friction

### Net read — REVISED

**Rigaku is a Tier 3 Portfolio B candidate** based on full-framework analysis. Less attractive than ALAB, ARM, or SMTC by D2.5 proximity + D4 mismodeling + operating-data dimensions.

**The bull case requires:** (a) Q2-Q3 FY26 operating reversal AND (b) Onto deal closing H2 2026 on schedule AND (c) joint product roadmap landing H2 2027+ AND (d) CD-SAXS adoption at HBM4 customers.

**The bear case is the current operating data:** -13% revenue, -78% OP, -83% net profit Q1 FY26.

**Per principle #14 (push back on prior framings):** my existing Rigaku thesis was the same surface-analyst-style framing user has been correcting throughout the session. The corrected framing is materially less bullish than the existing compact thesis suggested. **Existing thesis 1-2% sizing target may even be too high** given the current operating decline; the Onto-alliance bull case requires multiple things to materialize and the moat-to-constraint asymmetry is more extreme than SMTC.

**Recommendation if entering: 1% maximum** (lower than existing 1-2% range) until Q2-Q3 FY26 operating data confirms reversal. Otherwise wait.

Per principle #18, formal sizing decision deferred to Phase 4.
