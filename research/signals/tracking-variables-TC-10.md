# TC-10 — Model-layer sovereignty + export control — Lead-Lag tracking variables

**Created:** 2026-06-15 PM6 (Principle #38 second application; first was `companies/NBIS/tracking-variables.md` 2026-06-15 PM2)
**Convention:** Per `meta/methodology.md` Principle #38 candidate — every tracking variable tagged LEAD (acts BEFORE market-moving event) or LAG (confirms AFTER). LEAD requires deliberate alt-data sourcing because LAG sources surface naturally from research-verified channels.
**Source cluster:** `signals/triangulation.md` TC-10 (N=9; H_a Amazon-incidental 35% / H_b regulatory-machinery 35% / H_c coordinated-intent 8% / H_d security-incident root 40% per 2026-06-15 AM cascade)

## Why this framework matters for TC-10 specifically

TC-10 is **regulatory + sovereign-AI** — fundamentally event-driven and partially back-channel-opaque (executive orders bypass public notice-and-comment; cabinet decisions made before formal signaling; Anthropic 90-min Fable 5 + Mythos 5 shutdown June 13 happened with no public lead). This means LAG indicators dominate by design. The framework's value is partly DISCOVERING this — LEAD-sparse clusters require different monitoring approach than company-level clusters (NBIS has rich TED/BOAMP/EuroHPC LEAD; TC-10 mostly LAG).

## LEAD indicator stack (ranked by signal-to-noise)

| # | LEAD indicator | Source | Cadence | Est. lead-time | Sub-mechanism informed | Tier |
|---|---|---|---|---|---|---|
| 1 | **Politico Pro Tech / EU Trade leaks** | politicopro.com (PAID ~$25-50k/yr institutional) | event-driven | days-weeks ahead of formal Coreper decisions | H_b regulatory-machinery | 🟡 paid-gate |
| 2 | **LobbyFacts.eu engagement intensity** (Anthropic + OpenAI + Google datacards) | api.lobbyfacts.eu (FREE REST API) | semi-annual filings, cumulative trail | months ahead of regulatory positioning | H_b + H_c | 🟢 free |
| 3 | **BIS public notice-and-comment periods** | federalregister.gov BIS rulemaking dockets | 60-90 day public-comment windows | 2-4 months ahead of final export rules | H_b federal-export | 🟢 free |
| 4 | **TED EU procurement notices for sovereign-AI** | api.ted.europa.eu (FREE REST, no key) | continuous; CPV-filterable | 30-90 days ahead of contract awards | H_b bypass-route at EU institutional tier | 🟢 free |
| 5 | **National fiscal AI line items** (France PLF / Germany Bundeshaushalt / UK Spring Budget / India Union Budget) | gov fiscal documents (PDFs; manual search) | annual + supplemental | 3-12 months ahead of procurement | H_b national-government bypass-route | 🟢 free |
| 6 | **US state AG coalition formation patterns** | individual state AG press feeds (NY / CA / TX / FL leads typically) | event-driven | weeks-months ahead of multistate filing | H_b regulatory-machinery | 🟢 free |
| 7 | **Korean / Japanese / Indian native-press AI policy leaks** | ETNews / Nikkei / Economic Times native-language | event-driven | 1-2 weeks ahead of English coverage | H_a non-US sovereign-AI; H_d security-incident sub-mechanism in non-US jurisdictions | 🟢 free |
| 8 | **White House readouts of frontier-lab CEO meetings** | whitehouse.gov press feeds + Politico Playbook | event-driven | days-weeks ahead of formal action | H_b regulatory-machinery + H_a Amazon-trigger pattern | 🟢 free |
| 9 | **Frontier-lab Form 4 insider activity** (Anthropic / OpenAI when listed; currently private) | SEC EDGAR when applicable | real-time on filing | 2 business days post-transaction | H_b internal-knowledge signal of regulatory preparedness | 🟢 free (post-IPO only) |
| 10 | **Amazon / Microsoft / Google partnership-disclosure trail** with Anthropic | SEC 10-Q + 10-K + 8-K filings | quarterly + event-driven | 45-day filing lag → LAG mostly; some 8-K events have ~LEAD value | H_a Amazon-incidental trigger | 🟡 mostly LAG |
| 11 | **EuroHPC JU governance announcements** (sovereign-AI Gigafactory shortlist progression) | eurohpc-ju.europa.eu/newsroom_en | event-driven irregular | 3-6 months ahead of vendor contracts | H_b EU-Commission tier bypass-route | 🟢 free |
| 12 | **EU Council Coreper public register agenda items** | consilium.europa.eu/en/documents/public-register | event-driven; 2-6 week publication delay | semi-LAG | H_b regulatory-machinery | 🟢 free |

## LAG indicator stack (confirmation only; do not chase)

| Source | What | Why LAG | Sub-mechanism |
|---|---|---|---|
| White House export-control announcements | Executive orders, BIS final rules | Publication = market-moving event itself | H_b |
| State AG subpoena filings | Multistate AG actions filed | Filing date = public; reactions immediate | H_b |
| Model vendor shutdown announcements | Anthropic 90-min precedent style events | Sub-day operational impact = pure LAG | PC-13 mechanism |
| EU sovereign-AI tender awards | Winners announced (e.g., OVH / Scaleway €180M tender April 2026) | Awards = the gate event | H_b bypass-route confirmation |
| Hyperscaler enterprise customer renewals/losses | 10-Q / 10-K disclosures | 45-day filing lag; market reacts on print | H_a downstream impact |
| Anthropic / OpenAI public statements | Press releases, blog posts (e.g., NVDA-Doosan blog 2026-06-07) | Publication = news; alpha captured | various |
| Trade press reactions (Reuters / Bloomberg / WSJ) | Articles on regulatory events | Reaction to LAG events | various |

## PAID lead-indicators worth budget if available

| Source | Cost | Why worth it for TC-10 |
|---|---|---|
| Politico Pro Tech | ~$25-50k/yr | Pre-publishes draft EU compromise text + Coreper read-outs; highest LEAD on EU regulatory cycle |
| Eurasia Group / Beacon Policy Advisors | institutional | Geopolitical-risk modeling on export controls + sovereign-AI policy |
| Goldman / JPM Washington research desks | institutional (via brokerage) | US regulatory-action forecasting |

## Cross-cluster informants (signals that PRECEDE TC-10 events at adjacent cluster level)

- **NBIS sovereign deal announcements** (national-government tier proof cases like UK £1.7B June 8) → LEAD signal that bypass-route demand is materializing; precedes formal TC-10 H_b reweight
- **EU CADA legislative trajectory** (multi-year via ENISA + Coreper + LobbyFacts) → LEAD on Level 3 classification binary fork (NBIS thesis gate 2)
- **TC-4 acute-phase events** (model vendor 90-min shutdowns) → IMMEDIATELY trigger TC-10 H_d security-incident sub-mechanism reweight
- **PC-13 N=2 promotion** (next government 90-min shutdown of any AI vendor) → cluster-state change for TC-10 H_d (40% → 50%+ if pattern repeats)

## Convex-hull / lateral check (Critical Rule #9 + Principle #38 mandatory)

**What world-state would make LEAD indicators USELESS for TC-10?**
- Sovereign-AI regulation moves to back-channel (executive orders bypass public notice-and-comment) → TED + BIS notice-and-comment + national fiscal AI line items all become less informative
- Cabinet decisions made without prior signaling (matches Anthropic 90-min precedent — happened with no public LEAD)
- Trade-press leaks dry up (Politico Pro / Euractiv lose access to working-group sources)
- **In all 3 above scenarios, LEAD-indicator framework degrades; rely on LAG-confirmation + nimble post-event positioning**

**What world-state would fire ALL TC-10 sub-mechanisms simultaneously (positive convex tail)?**
- Another PC-13-style 90-min shutdown event at OpenAI/Google/Meta → H_d → 50%+ + H_b cascade → 50%+ + H_a if same Amazon-incidental trigger pattern
- EU passes CADA Level 3 with EU-ownership-only personnel restrictions → bypass-route demand goes IMMEDIATE-procurement-mode → NBIS / OVH / Scaleway / Capgemini cluster simultaneously rerate
- Chinese government emergency-order on Western-AI access (reverse pattern) → PC-13 N=2 in different jurisdiction + cascade to global sovereign-AI capex shock

**What would FALSIFY the TC-10 thesis (de-promote from ACTIVE cluster)?**
- 90 days pass with zero new H_b regulatory-machinery instances (current N=9 momentum stops)
- US Commerce reverses Anthropic 90-min order (reverses H_d security-incident root)
- EU CADA framework formally abandoned by Commission under member-state pushback
- Sovereign-AI capex commitments at national-government tier stall (UK NBIS £1.7B becomes only instance with no N+1 within 6 months)

## Framework validation against B47 (pre-training lead-time conservatism)

Per Principle #38 application discipline: lead-times above are MY-MODEL estimates and likely subject to B47 systematic error (pre-training OVERSTATES fast-track government action; UNDERSTATES regulated EU processes). Historical case calibration needed before treating lead-times as actionable:

| Lead indicator | Claimed lead-time | Historical case to calibrate against |
|---|---|---|
| Politico Pro leaks → formal Coreper decision | days-weeks | Need to back-test against past EU AI Act / DSA / CRA decisions |
| LobbyFacts engagement intensity → regulatory outcome | months | Need to back-test against past tech-policy outcomes |
| BIS notice-and-comment → final rule | 2-4 months | TYPICALLY ACCURATE — well-documented administrative law cycle |
| TED procurement → contract award | 30-90 days | VERIFIED in NBIS framework via Jean Zay H100 historical case |
| National fiscal AI line items → procurement | 3-12 months | Bimodal — fast-track 1-2 months (Isambard-AI) vs regulated 24-48 months (Bleu France) per NBIS B47 calibration |
| State AG coalition → multistate filing | weeks-months | UNVERIFIED — would need to back-test against Big Tobacco / opioid / Facebook coalition patterns |

Action: lead-times above flagged as 🟡 my-model pending historical case calibration; B47 N+1 application opportunity if confirmed.

## 5-source minimum daily stack for TC-10 monitoring

1. **TED.europa.eu API** — daily query for new sovereign-AI procurement notices (CPV 72000000 + AI keywords + country filter EU)
2. **LobbyFacts.eu** — weekly check on Anthropic / OpenAI / Google EU lobbying disclosure changes
3. **EuroHPC JU newsroom** — weekly scrape for governance / Gigafactory selection announcements
4. **Federal Register BIS dockets** — weekly check for AI / semiconductor export-control rulemaking activity
5. **Native-Korean / Japanese / Indian AI policy press** — weekly scan for sovereign-AI policy leaks at non-US tier

Plus event-driven:
- White House press readouts of frontier-lab CEO meetings
- Anthropic / OpenAI / Google EU sovereignty commitments
- NBIS national-government deal flow (UK proof case; watch Germany / France / Italy / Nordics / India / Korea)
- PC-13 N=2 watch (any government 90-min shutdown of any AI vendor)

## Cross-references

- `meta/methodology.md` Principle #38 candidate — Lead-Lag Variable Framework
- `companies/NBIS/tracking-variables.md` — first application (N=1)
- `signals/triangulation.md` TC-10 — cluster state being monitored
- `meta/cross-domain-pattern-register.md` PC-13 — Government 90-min shutdown precedent (N=2 watch interlocked with TC-10 H_d)
- `signals/cross-source-log/2026-06-15-evening-brief-2026-06-14-cascade-tc10-tc4-eu-sovereignty-b40-verifications.md` — TC-10 H_d sub-mechanism origin
- `signals/cross-source-log/2026-06-15-am-morning-brief-verification-cascade.md` — TC-10 N=8→N=9 (42-state AG OpenAI + Anthropic DC delegation)
