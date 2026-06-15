# Nebius (NBIS) — Tracking Variables (Lead-Indicator Stack)

**Created:** 2026-06-15 PM2 (per user methodology pushback on lag-vs-lead variables)
**Source:** 8-subagent fan-out verification (`signals/cross-source-log/2026-06-15-pm-nebius-2subagent-verification-eu-sovereign-bypass-thesis.md` + 6 follow-on Opus subagents verifying URLs / accessibility / lead-times)
**Convention:** **LEAD indicators first** (act before consensus); LAG indicators second (confirmation only). Per Principle #38 candidate (Lead-Lag Variable Framework). Tier per Principle #37.

---

## Verified working LEAD indicator stack (ranked by signal-to-noise + accessibility)

| # | Source | URL | Access | Native-lang | Gate # | Est. lead-time (verified) | Notes |
|---|---|---|---|---|---|---|---|
| 1 | **TED.europa.eu API** | `api.ted.europa.eu` (REST, no key); docs at `developer.ted.europa.eu` | FREE | Multi (EU langs) | 1 | 30-90 days ahead of contract award | STRONGEST LEAD. CPV codes 48820000 (servers), 72000000 (IT services), 30213300 (workstations) + keywords "intelligence artificielle" / "GPU" / "souverain" / "Künstliche Intelligenz" filterable. Historical proof: GENCI Jean Zay H100 Eviden contract visible on TED months before March 2024 press announcement |
| 2 | **BOAMP.fr API** | `boamp-datadila.opendatasoft.com/explore/dataset/boamp/api/` | FREE | French only | 1 | Twice-daily updates | French sub-EU-threshold sovereign-AI tenders that DON'T appear on TED. DINUM, CEA, GENCI procurement appears here first |
| 2b | **ANAC OCDS open data API (Italy)** | `dati.anticorruzione.it/opendata/ocds_en` | FREE (Swagger API, monthly refresh) | Italian | 1 | 30-60 days ahead | 70M Italian public contracts ≥€40k. Use INSTEAD of `acquistinretepa.it` for sovereign-AI tender monitoring at Italian ministry layer |
| 3 | **LobbyFacts.eu API + Nebius datacard** | datacard at `lobbyfacts.eu/datacard/nebius-group-nv?rid=943249493707-95`; free REST API at `api.lobbyfacts.eu/docs/api` | FREE | English | 2, 4 | Semi-annual updates | Tracks Nebius EU lobbying disclosures + meetings with EU officials. Increasing engagement = LEAD on EU policy positioning |
| 4 | **EuroHPC JU newsroom** | `eurohpc-ju.europa.eu/newsroom_en` (scrape-able; no RSS confirmed) | FREE | English | 4 | Event-driven; precedes vendor disclosure | Governance Board decisions on AI Gigafactory program published here BEFORE any press cycle. Historical analog: LUMI (Finland) hosting decision was ~5 months before vendor contract; Leonardo (Italy) ~16 months |
| 5 | **Sentinel-2 satellite imagery** | `dataspace.copernicus.eu` — OData + OpenSearch API | FREE-WITH-REG | English | 1, 3 | 6-18 months ahead of operational | 10m resolution, 5-day revisit. Construction at Béthune (240 MW Bridgestone brownfield) + Lappeenranta (310 MW Pajarila) sites detectable: concrete pours, cooling tower install, substation construction. Combine with Géoportail Urbanisme for permit baseline |
| 6 | **SEC EDGAR Form 4 Atom feed (CIK 1513845)** | `sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001513845&type=4&output=atom` | FREE | English | 3 | LEAD on cluster buys (1-3 months); LAG on isolated sells | **Cluster open-market purchases by ≥3 insiders in same quarter** = high-conviction LEAD. Isolated sales = noise. Current NBIS Form 4 activity: Boaz Tal / Marc Boroditsky / Danila Shtan / Elena Bunina filings 2026 — verify cluster vs scheduled vesting via 10b5-1 plans |
| 7 | **Nebius status page Atom feed** | `status.nebius.com/history.rss` (Atlassian Statuspage standard pattern) | FREE | English | 3 | Real-time | Outages signal capacity-utilization stress. **2026-06-03 eu-north1 IPv4 exhaustion incident** = useful precedent of demand outrunning provisioning. Atlassian regional breakdown via `status.nebius.com/uptime` |
| 8 | **Géoportail Urbanisme France API** | `geoportail-urbanisme.gouv.fr/api/swagger.yaml` + Sitadel/PermisAPI (1.2M permits) | FREE | French | 1, 3 | 12-24 months ahead of operational | Béthune building permits + zoning data. Combine with municipal Lappeenranta page at `lappeenranta.fi/en/decision-making-and-administration/pajarila-data-center` for Finland-side. **Note:** Germany has NO unified national permit API (16 state portals fragmented) |
| 9 | **Cloudflare Radar API** | `developers.cloudflare.com/radar/` (free REST, no key for basic) | FREE (CC BY-NC 4.0) | English | 3 | Real-time | Macro internet-traffic signals; NOT company-specific unless Nebius is Cloudflare customer for zone-level data. Strongest free macro web-traffic proxy |
| 10 | **NBIS conference attendance + NVDA partnership** | `nebius.com/events`; NVIDIA GTC programming | FREE | English | 1-3 month LEAD on partnership announcements | NVDA $2B Nebius investment (March 11 2026) was telegraphed at GTC 2026 (March 18) via Jensen public endorsement + co-sponsorship. Pattern: conference sponsorship → press announcement weeks later |
| 11 | **Altindex LinkedIn employee tracking** | `altindex.com/ticker/nbis/employees-linkedin` | FREE aggregator | English | 3 | 3-6 months ahead of revenue inflection | **Caveat:** NBIS does NOT use Greenhouse / Lever / Workday — proprietary ATS. Must aggregate via LinkedIn / Indeed / ZipRecruiter. Altindex provides free LinkedIn time-series proxy |
| 12 | **National Grid ESO Connection Queue** | `data.nationalgrideso.com` | FREE | English | 1 (UK only) | 6-18 months ahead of site online (UK-specific) | ONLY public TSO in Europe with named-applicant queue. UK proof case = Nebius £1.7B June 8. NEW UK datacenter applicants visible here would precede next sovereign deal announcement |
| 13 | **Bundesregierung RSS** | `bundeskanzler.de/bk-de/service/rss-feed` | FREE | German only | 1, 2 | LAG (press release = post-decision) but useful confirmation | German cabinet AI-infra announcements |
| 14 | **Élysée RSS** | `elysee.fr/les-flux-rss` (confirmed) | FREE | French (EN section) | 1 | LAG | French presidential AI-infra announcements |
| 15 | **CORDIS public JSON endpoint** | `cordis.europa.eu/search/en?format=json` | FREE-WITH-REG | English | 4 | Months ahead of formal calls | EU Horizon Europe + Digital Europe stakeholder consultations. Note: AI Gigafactory call runs via EuroHPC (not Horizon Europe) so weaker signal than EuroHPC newsroom directly |

---

## PAID lead-indicators (worth budget if available)

| Source | URL | Cost | Why worth it |
|---|---|---|---|
| Politico Pro Tech | `politicopro.com` | ~$25-50k/yr institutional | Pre-publishes draft EU compromise text + Coreper read-outs before official release. Highest LEAD on EU regulatory cycle |
| SemiAnalysis | `newsletter.semianalysis.com` | $500-$5k/yr range tiers | Has moved NVDA stock with pre-earnings channel checks. June 2026 NVDA-specific report NVDA publicly rebutted = signal both directions |
| Unusual Whales | `unusualwhales.com/stock/NBIS` | ~$50/mo | 1-10 day LEAD on informed institutional options flow. NBIS active options: 656,710 total OI, whale sentiment 44% bull / 46% bear, elevated short squeeze OI |
| Bloomberg Intelligence | terminal | ~$25k/yr | CIO survey aggregation; pre-earnings analyst convergence; macro factor exposure |
| Revealera | `revealera.com` | institutional | 45M+ job postings back to 2023; 4,000+ companies tracked |
| TD Cowen / Bernstein CIO surveys | secondary excerpts on Investing.com / CIO Dive (free) | PAID primary; free excerpts | Quarterly enterprise spending intent surveys |

---

## LAG indicators (confirmation only; do not chase)

| Source | URL | What | Why LAG |
|---|---|---|---|
| Nebius IR press releases | `nebius.com/newsroom` | Deal announcements, earnings | Post-event |
| Nebius earnings | quarterly via BusinessWire + SEC 6-K | Revenue + capacity update | 45 days post-quarter; market reacts immediately |
| Sell-side price targets | MarketBeat / TipRanks / StockAnalysis (free); Visible Alpha (paid) | Consensus PT | React to news, do not predict |
| FINRA biweekly short interest | `finra.org` | NBIS short ~17-19% of float | Reflects positioning already taken (LEAD only when combined with borrow rate spikes) |
| FINRA ATS dark pool (quarterly) | `finra.org` | Venue-level aggregate | 3-month publication lag |
| 13F filings | SEC EDGAR + WhaleWisdom / 13f.info (free) | Institutional positions | 45-day stale at publication |
| Stocktwits + Reddit sentiment | `stocktwits.com/symbol/NBIS` | Mentions + score | CONTRARIAN at extremes; documented stale-recycle risk per B40.1 |
| Politico Europe + Euractiv free tier | `politico.eu` / `euractiv.com` | EU policy moves | Reactive to actual decisions |

---

## Gate-by-gate corrected reframings

### Gate 1 — Named sovereign deal ex-UK

**Original framing:** "Watch for any named additional sovereign deal."
**Reframe:** Watch the LEAD-INDICATOR STACK:
- TED API daily query (CPV 48820000 + 72000000 + AI keywords + country filter FR/DE/IT/NL/FI)
- BOAMP API for French sub-threshold ministry tenders (DINUM/CEA/GENCI)
- National Grid ESO connection queue for UK follow-on
- Sentinel-2 + Géoportail Urbanisme for construction signals at Nebius-adjacent sites in target countries
- Bundesregierung + Élysée RSS for cabinet-level AI infra mentions

**Lead-time corrected:** 1-2 months fast-track (Isambard-AI style 5 weeks); 3-6 months bilateral (G42-Microsoft style); 24-48 months for regulated sovereign cloud (Bleu France 32 months). Distribution is bimodal — track WHICH bucket a signal falls into.

### Gate 2 — CADA Level 3 classification

**Original framing:** "CADA Level 3 binary fork late 2026."
**Reframe:** **This is STRUCTURALLY YEARS OUT, not binary 2026.** CADA only adopted by EC June 3 2026; EUCS precedent = 6 years with no adoption. Reframe to:
- LobbyFacts.eu Nebius datacard for EU engagement signal
- Euractiv free tier for EUCS/CADA legislative movement
- EC Coreper public register for working-party agenda items
- ENISA email subscription (RSS discontinued) for formal EUCS scheme publications
- Nebius EU compliance hiring trail (CCO / EU AI Act team) via LinkedIn

**Lead-time corrected:** 24+ months minimum from current Commission proposal to delegated act. Track legislative trajectory, NOT binary outcome.

### Gate 3 — Q2 2026 earnings EU-mix expansion + 2.5 GW EMEA capacity

**Original framing:** "EU customer mix expansion + 2.5 GW year-end capacity confirmation."
**Reframe:** **EU-mix is UNOBSERVABLE from public filings.** Nebius reports by business unit (Core AI Cloud / TripleTen / Avride), NOT by geography. **2.5 GW EMEA end-2026 is SPECULATIVE** — confirmed near-term sites = ~625 MW (310 Lappeenranta + 240 Béthune + 75 Mäntsälä). Reframe to LEAD stack:
- TED + BOAMP API for EU customer wins ahead of disclosure
- NBIS status page outages as utilization stress signal
- SEC EDGAR Form 4 cluster buys (1-3 months lead)
- Altindex LinkedIn employee growth in EU geographies
- Géoportail Urbanisme + Lappeenranta city page for construction progress
- Sentinel-2 monthly site monitoring
- SemiAnalysis NVDA channel checks (paid) for Vera Rubin allocation share
- Conference attendance pattern at NVIDIA GTC EU / KubeCon EU

**Lead-time:** capacity construction-permit-to-operational = 12-24 months (NOT 6-18 months). Pre-construction permits visible 12 months ahead of ramp.

### Gate 4 — EU InvestAI 5-Gigafactory call names Nebius

**Original framing:** "EU InvestAI call summer 2026 names Nebius = immediate upgrade trigger."
**Reframe:** **Gate condition NOT triggered yet.** EuroHPC formal call has not launched as of June 15 2026; 76 EoIs received but no shortlist; expected late 2026 / H1 2027 realistic. Lead-indicator stack:
- EuroHPC JU newsroom (scrape; LEAD on governance decisions)
- CORDIS for stakeholder consultations
- LobbyFacts.eu for Nebius EU engagement intensity
- Politico Pro Tech (paid; pre-trilogue text leaks)
- Member-state cabinet announcements via Bundesregierung + Élysée RSS (national pre-qualification signals)
- AION consortium monitoring via Scaleway press (Orange IR confirmed primary source; AION has no dedicated website)
- Sentinel-2 + Géoportail Urbanisme + Lappeenranta city page for site construction progress

**Lead-time:** EoI close June 20 2025 → expected shortlist late 2026 → vendor contracts H1 2027 per LUMI/Leonardo historical analogs.

---

## What I would actually monitor daily (5-source minimum stack)

1. **TED.europa.eu API** — daily query for new sovereign-AI procurement notices (LEAD 30-90 days)
2. **SEC EDGAR Form 4 Atom feed** for CIK 1513845 — real-time insider transactions (LEAD on cluster buys)
3. **NBIS status page** — Atom feed (real-time utilization signal)
4. **EuroHPC JU newsroom** — weekly scrape (event-driven LEAD on Gigafactory decisions)
5. **LobbyFacts.eu Nebius datacard** — monthly check (semi-annual updates but cumulative trail)

Plus event-driven:
- BOAMP for French ministry tenders (twice-daily updates)
- Bundesregierung / Élysée RSS for cabinet-level AI infra mentions
- Sentinel-2 monthly imagery for Béthune + Lappeenranta + Mäntsälä construction
- Unusual Whales NBIS options flow (paid $50/mo) — 1-10 day LEAD on institutional positioning
- NBIS conference attendance pattern around NVIDIA GTC EU + KubeCon EU + Web Summit

## Convex hull / lateral check

What world-state would make the lead-indicators useless?
- **EU-wide procurement framework shift to private-government negotiations** (bypassing TED public tender process) — would happen if sovereign-AI is reclassified as national-security, which is the direction US is moving with Anthropic 90-min shutdown precedent
- **Nebius pivots away from public-EU sovereign tier to private NVDA-stack hosting only** — would make TED + LobbyFacts signals irrelevant
- **CADA Level 3 framework abandoned by Commission** under member-state pushback — would collapse Gate 2 entirely (treat as binary risk, not just delay)

What would make all 4 gates FIRE simultaneously (positive convex)?
- Anthropic-style 90-min precedent fires N=2 at another vendor → enterprise customer panic → emergency sovereign-AI procurement → multiple national governments fast-track NBIS within 1 quarter → CADA Commission acts under crisis-pressure → EuroHPC reshuffles Gigafactory selection criteria to favor neutral providers

Both convex tail outcomes are P~10-15% (my model). Base case is gradual gate-by-gate close over 12-24 months.

## NDX Inclusion Mechanics — LAG indicator context (added 2026-06-15 PM3)

Per `signals/cross-source-log/2026-06-15-pm3-ndx-inclusion-mechanics-primer-nbis-application.md` (3-subagent verification with T1 Nasdaq sources):

**NDX inclusion is a LAG event** — once announced June 12, the alpha was captured immediately. Mandatory passive flow ~$1.06-1.54 billion (using float-adjusted weight 0.18-0.22% × $587-700B AUM range) concentrates in June 19 close + June 22 open auctions. NBIS daily $-volume $3.81-4.4B means flow = 0.4-0.5 days of average volume — VERY ABSORBABLE, not liquidity-constrained.

**Cumulative pre-effective gain already captured: ~+15-20%** (June 12 AH +6-13% + June 15 pre-market +8.9%). Residual mechanical squeeze into June 19-22 = ~3-5% (model estimate, B45 routine range — NOT extreme).

**Ongoing structural flow: ~$100-200M/year** from QQQ + QQQM (model estimate) — small per-day but compounds; serves as structural floor.

**Academic post-inclusion pattern: -7% cumulative over 50 days** ([EUR thesis T2](https://thesis.eur.nl/pub/33763/MA-Thesis-Robert-Kaptein.pdf)); SHARPER for high-momentum prior runs (NBIS profile matches APP / PLTR). QQQ's 8% daily AUM turnover means trader-side rotation accelerates the reversal vs pure-passive model.

**Pre-inclusion NBIS institutional ownership only 21.9%** vs typical 70-85% for $58B NDX names — inclusion mechanically forces institutional UP; structurally positive for long-term price-discovery durability but means pre-inclusion AH spike was largely retail-front-running not institutional accumulation.

**5 co-adds cluster $55-63B** (ALAB $63B / CRWV $55B / NBIS $58.5B / RKLB $59B / TER $63B) — NBIS doesn't get disproportionate passive flow share; co-add cohort splits demand 5 ways.

**QQQ structural change: converted UIT → open-end ETF Dec 22, 2025**; expense ratio 0.20% → 0.18%; unlocked securities lending.

**Key NDX-mechanics LEAD indicators** (the post-inclusion path that DOES have signal):
- **Co-add CRWV / ALAB / RKLB / TER post-inclusion price action** = real-time A/B test of NBIS path; track via Yahoo Finance / Bloomberg June 22 onward
- **QQQ daily net flows** post-June 22 — if QQQ outflows accelerate, NBIS gets less ongoing passive bid; track via [ETFdb.com/etf/QQQ](https://etfdb.com/etf/QQQ/) flow data
- **NBIS short interest reports** (FINRA biweekly) — index-add typically triggers hedger-side short interest UP; track for unusual divergence
- **NBIS Form 4 cluster pattern** post-June 22 — insiders selling INTO inclusion bid = warning; insiders holding = supportive

## Cross-references

- `companies/NBIS/thesis.md` — 2026-06-15 PM2 back-reference linking to this file
- `signals/cross-source-log/2026-06-15-pm-nebius-2subagent-verification-eu-sovereign-bypass-thesis.md` — original 2-subagent verification (June 22 inclusion + EU sovereign-AI bypass reframing)
- `signals/cross-source-log/2026-06-15-pm3-ndx-inclusion-mechanics-primer-nbis-application.md` — NDX-inclusion mechanics primer (this section's source)
- `meta/methodology.md` Principle #38 candidate — Lead-Lag Variable Framework (generalizes this discipline to all tracking variables across harness)
