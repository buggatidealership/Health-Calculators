# Morning Feed Prompt Templates — per-market scan specifications

**Created:** 2026-06-26 (Workflow #10 MORNING-FEED-SCAN codification)
**Model mandate:** Opus 4.8 ONLY (per user 2026-06-26 directive — no Sonnet/Haiku downgrade; investments depend on quality)
**Review cycle:** first-week review 2026-07-03; prompt-optimization based on signal/noise observed

---

## ⚠️ TWO-LEG ARCHITECTURE (added 2026-06-27 — user anti-confirmation-bias directive)

**User directive 2026-06-27 verbatim:** *"it feels like you only do searches based on the existing portfolio companies… I would suggest that we do a more broader sweep of news articles, as in headlines, to identify potential new trends that do not root yourself in the bias of existing companies."*

**The flaw caught:** the original Workflow #10 scans (now "Leg A") are 100% portfolio-anchored — every task keys off a held name. That makes the scan structurally capable only of CONFIRMING/UPDATING existing theses, never DISCOVERING. This is Failure Mode #5 (confirmation bias) baked into the scan design, and it directly contradicts the harness's #1 job (*"forecast the NEXT bottleneck before consensus; find positions ahead of consensus"*).

**The fix:** every `good morning [region]` trigger now fires TWO subagents IN PARALLEL (both Opus 4.8):

| Leg | Mandate | Keys off | Output target |
|---|---|---|---|
| **Leg A — ANCHORED** | cohort prices, held-name news, falsifier checks, TC pattern-matches | held tickers | `companies/{TICKER}/thesis.md` cascades |
| **Leg B — DISCOVERY** | broad company-AGNOSTIC theme sweep; what's NEW/moving/surprising; names we do NOT own | themes/sectors, NEVER held tickers | `watchlist/candidates.md` + `sector/themes.md` flags |

**Synthesis step (mandatory after both legs return):** explicitly compare Leg B against Leg A — *"what did the unanchored sweep surface that the portfolio-anchored scan would have missed?"* That delta is the anti-confirmation alpha. Leg B findings NEVER route to held-name theses; new names → `watchlist/candidates.md` with the causal chain that surfaced them; new themes → flag for `sector/themes.md` + BOTTLENECK-FORECAST.

**Cost note:** two-leg doubles subagent count per scan (~140-240k tokens/scan vs ~80-120k). Per user 2026-06-26 cost directive (don't save costs where detrimental to quality), the discovery leg is the actual alpha source and is retained at full Opus 4.8. First-week review 2026-07-03 audits Leg B yield specifically.

---

## Common header (used in all 4 scans)

```
B59 v2 / Critical Rule #16 / Workflow #10 MORNING-FEED-SCAN

DATE CONTEXT (per Principle #40 codified 2026-06-26 — MANDATORY confirm in output):
- Today: [YYYY-MM-DD] ([day-of-week])
- Scan window: [Pre-Korea / Pre-Japan / Pre-Europe / Pre-US]
- Scan triggered at: [HH:MM CET]
- Target market open: [HH:MM CET]
- Confirm in output: "Today date acknowledged: YYYY-MM-DD (day). Scan window: [X]. Target market open in [N] minutes."

INPUT-DATA-TIER (per Principle #39 codified 2026-06-26 — MANDATORY classification per item):
- Tag each surfaced item: T0-MARK / T1-TRADE / T2-DERIVED / T3-TRANSIENT
- Do NOT back-solve narratives from T3 marks alone

L29 HARD-DATA DISCIPLINE: extract numerical facts + factual statements ONLY at this layer
(no sell-side opinion aggregation; no analysis; that comes later if Tier 2 deep verification fires)

L30 SUPERCYCLE MAGNITUDE FLOOR: when a Stage 3-4 cohort name reports a category-event,
floor the H1 magnitude band at +25-50% T+72h per B45 supercycle regime priors
(not pre-supercycle L14 +12-22% band)

PRINCIPLE #41 COHORT-DECOUPLING DIAGNOSTIC: for any held-position event, compare event-day
move vs ≥2 cohort peers in same segment; surface idiosyncratic-vs-systemic verdict in TL;DR
```

---

## Scan 1: Pre-Korea (01:30 CET daily)

```
[Common header — Pre-Korea / 01:30 CET / Korea opens 02:00 CET]

SCOPE:
- Held cohort focus: HYNIX 22.3% L3 Core EXCEPTION (HY9H Frankfurt GDR + 000660.KS Korean primary)
- Adjacent cohort: Samsung Electronics 005930.KS (HBM peer)
- Macro context: KOSPI overnight US move + Korean Won FX

SOURCES (priority order per `meta/morning-feed-sources.md` Pre-Korea section):
1. SK Hynix IR + Samsung Semiconductor newsroom (T1)
2. DART filings overnight (T1)
3. Etnews + Newspim + Hankyung + The Elec (T2 native Korean)
4. KED Global + Reuters Korea + Bloomberg Korea (T2 English)

MULTILINGUAL PRIORITY: Korean-language sources MANDATORY per Principle #36;
English-mirror used only when Korean source unavailable

OUTPUT STRUCTURE (L29 hard-data layer):
1. Top headlines (5-10 items) — extract numerical facts + factual statements per item
2. T1/T2/T3 source-tier label per item
3. Cohort-decoupling diagnostic if any held-position event (per Principle #41)
4. Forward catalyst calendar update (if pre-registered grades/events occur)
5. Pattern-match flags: any same-segment same-direction signal that would promote
   TC-1 N=20+, TC-12 N=4+, TC-13 N=8+, PC-14, or any TC candidate
6. Tier 2 trigger check: if any item meets >5% overnight move OR direct-named held event
   OR TC N+1 candidate OR forward-catalyst pre-registration event → flag for deep-verification

WRITE ARTIFACT: `signals/cross-source-log/[YYYY-MM-DD]-morning-feed-pre-korea-scan.md`

PROMPT-OPTIMIZATION LOG (for first-week review 2026-07-03):
- What searches were executed (queries + sources)
- What time spent per source
- What items surfaced vs missed (cross-check against user's Twitter shares same day)
- Signal/noise ratio: ratio of cohort-material items to total surfaced
- Cost: actual subagent tokens used vs budget ~80-120k target
```

---

## Scan 2: Pre-Japan (01:45 CET daily — staggered 15min from Pre-Korea)

```
[Common header — Pre-Japan / 01:45 CET / Japan opens 02:00 CET]

SCOPE:
- Held cohort focus: MURATA 15.7% Core (MUR1 / 6981.T), KIOXIA 14.0% Core (separate broker
  / 285A.T), SUMCO 9.5% (S3X / 3436.T)
- Adjacent cohort: Shin-Etsu Chemical (4063.T), Advantest (6857.T), TDK (6762.T), Ibiden (4062.T)
- Macro context: Nikkei overnight US move + JPY FX

SOURCES (priority order per `meta/morning-feed-sources.md` Pre-Japan section):
1. MURATA IR + KIOXIA IR + SUMCO IR + Shin-Etsu IR + Advantest IR (T1)
2. TDnet TSE overnight filings (T1)
3. Nikkei xTECH + ITmedia + EE Times Japan + MONOist + Reuters Japan (T2 native Japanese)
4. Nikkei Asia + Bloomberg Japan + The Japan Times (T2 English)

MULTILINGUAL PRIORITY: Japanese-language sources MANDATORY per Principle #36

OUTPUT STRUCTURE: same as Pre-Korea (5-10 items + tiers + decoupling + catalyst + patterns + Tier 2 triggers)

WRITE ARTIFACT: `signals/cross-source-log/[YYYY-MM-DD]-morning-feed-pre-japan-scan.md`
```

---

## Scan 3: Pre-Europe (08:30 CET daily)

```
[Common header — Pre-Europe / 08:30 CET / Frankfurt opens 09:00 CET]

SCOPE:
- Held cohort focus: HY9H Frankfurt + MUR1 Frankfurt + S3X Frankfurt + Asia EOD synthesis
- Adjacent: European AI-infra names (ASML, BESI), Taiwanese AI-supply-chain EOD (TrendForce
  digest)
- Macro context: Asia day session EOD wrap + overnight US after-hours move

SOURCES (priority per `meta/morning-feed-sources.md` Pre-Europe section):
1. SEC EDGAR overnight + DART overnight + TDnet overnight (T1 cross-listed filings)
2. Boerse Frankfurt opening calls (T1)
3. TrendForce + DigiTimes TW + Commercial Times TW + UDN + Liberty Times (T2 Taiwanese EOD)
4. Reuters Europe + Bloomberg Europe + FT Tech (T2 English)

MULTILINGUAL PRIORITY: Traditional Chinese (Taiwan EOD synthesis) + German (Frankfurt
opening calls) per Principle #36

OUTPUT STRUCTURE: same as prior scans + Asia EOD synthesis section

WRITE ARTIFACT: `signals/cross-source-log/[YYYY-MM-DD]-morning-feed-pre-europe-scan.md`
```

---

## Scan 4: Pre-US (15:00 CET daily)

```
[Common header — Pre-US / 15:00 CET / NYSE opens 15:30 CET]

SCOPE:
- Held cohort focus: SNDK 13.1% CORE + NBIS 9.8% Active + MRVL 8.0% Active + US semi/AI
  cohort pre-market
- Adjacent: NVDA + AMD + AVGO + ARM + INTC + watchlist (ETN/VRT/GEV/CEG/VST/TLN + 5 H1
  candidates MITSUI/CAMT/MOD/FORM/POWL)
- Macro context: US pre-market + Europe day session in progress + overnight Asia wrap

SOURCES (priority per `meta/morning-feed-sources.md` Pre-US section):
1. SEC EDGAR US filings (T1)
2. NVDA / AMD / AVGO IR pages (T1)
3. SemiAnalysis + The Information + Stratechery (T2 US specialist)
4. Bloomberg Tech US + Reuters Tech US + Tom's Hardware + DataCenter Dynamics + Wccftech (T2)
5. Hyperscaler newsrooms (CoreWeave/OpenAI/Anthropic/xAI)

OUTPUT STRUCTURE: same as prior scans + Europe day session in-progress wrap

WRITE ARTIFACT: `signals/cross-source-log/[YYYY-MM-DD]-morning-feed-pre-us-scan.md`
```

---

## LEG B — DISCOVERY scan (UNANCHORED, company-agnostic) — added 2026-06-27

**Fires in PARALLEL with the matching Leg A scan on every `good morning [region]` trigger.** One Leg B subagent per region (Korea+Japan / EU / US).

```
B-LEG DISCOVERY SCAN / Workflow #10 / Critical Rule #16 / Opus 4.8

EXECUTE WEB SEARCHES NOW. DO NOT RETURN ANALYSIS WITHOUT EXECUTING ACTUAL SEARCHES.

=== CRITICAL FRAMING — READ TWICE ===
FORGET THE PORTFOLIO EXISTS. Do NOT search for, prioritize, or filter by ANY
specific company. You are a generalist AI/tech-sector analyst sweeping [REGION]
headlines from the STRICTLY PAST 24 HOURS to find what is NEW, MOVING, or
SURPRISING — especially things NOT yet on the consensus radar. Your job is
DISCOVERY, not confirmation. A signal we own nothing in is the POINT, not noise.
=== END FRAMING ===

DATE CONTEXT (Principle #40): Today [YYYY-MM-DD] ([day]). Window: STRICTLY past 24h
from trigger. Cite publication date per item; reject >24h unless flagged historical-context.

MULTILINGUAL (Principle #36): sweep [REGION]-native trade press headlines in parallel
with English (Korean/Japanese for Asia; German/French for EU; English for US).

SWEEP THESE THEME DOMAINS (by theme/sector, NEVER by held-company name):
- AI compute / semiconductors — new architectures, new entrants, capacity, breakthroughs
- Memory / storage — new tech, new players, pricing, form-factors
- Advanced packaging / substrates / materials
- Power / cooling / datacenter infrastructure / grid
- Networking / optical / interconnect / silicon photonics
- AI software / agents / foundation models / inference economics
- Robotics / embodied AI / edge AI
- Sovereign AI / regulatory / export-control / chip geopolitics
- AI funding rounds / M&A / IPOs / new listings (private + public)
- Adjacent surprises — quantum, photonics, novel materials, energy, new supply chains

MANDATORY OUTPUTS:
1. TOP 10-15 HEADLINES ranked by NOVELTY × MAGNITUDE (newest + biggest first).
   Per item: 1-line summary | source + T1/T2/T3 tier | in-window date | why it is NOVEL.
2. NEW NAMES — every company (ticker or private) NOT a household AI name that is
   moving / raising / launching / being acquired this window. 1-line "why on radar" each.
3. NEW THEME / NEXT-BOTTLENECK candidates — emerging trends that could become an
   investable theme OR the next binding constraint (the harness's #1 job). Name the
   mechanism, not just the headline.
4. THE ABSENCE QUESTION (mandatory, answer explicitly): "What is the market talking
   about MOST this window that a memory/semiconductor portfolio would have ZERO
   exposure to?" — this is the deliberate blind-spot probe.
5. ANOMALY FLAG: biggest single-day sector mover (ANY name) that is NOT a mega-cap
   and NOT an obvious story — the kind of thing that precedes a theme.

ANTI-CONFIRMATION DISCIPLINE (enforced):
- Do NOT route any finding to a held-name thesis. This leg only feeds watchlist + themes.
- Do NOT drop a signal because "we don't own it." That filter is the bias we are removing.
- A signal that CONTRADICTS the existing portfolio thesis is HIGH VALUE — flag it loudly.
- PENALIZE restatements of known narratives (memory shortage, HBM demand, AI capex) UNLESS
  there is a genuinely new data point inside the headline.

WRITE ARTIFACT: signals/cross-source-log/[YYYY-MM-DD]-morning-feed-[region]-DISCOVERY.md
ROUTE on return (handled by main loop, NOT the subagent):
  - new names → watchlist/candidates.md (with surfacing causal chain + date)
  - new themes / next-bottleneck candidates → flag for sector/themes.md + sector/bottlenecks.md review
  - genuine cross-segment convergence → signal-density check per Critical Rule #14
  - NOTHING routes to held-name thesis.md from Leg B
```

**Leg B → Leg A synthesis (main-loop step after both return):** state explicitly the delta —
*"Leg B surfaced [X] that Leg A (portfolio-anchored) structurally could not have."* If Leg B
surfaces a name/theme that threatens a held thesis, that is a CONTRADICTION signal → fire a
Tier 2 verification subagent on it (it earns the cost more than a confirmation would).

**Leg B anti-decorative falsifier (first-week review 2026-07-03):** if 5 consecutive Leg B
scans surface ZERO new names AND ZERO new themes (only restatements of held-cohort
narratives), then either (a) the theme-sweep prompt is too narrow, or (b) the region genuinely
has low novel-signal density that window → tighten or merge. If Leg B routinely surfaces
candidates that later promote to theses or watchlist P1-P2, it is earning its cost — keep at
full Opus 4.8.

---

## Tier 2 trigger logic (fires deep verification only when criteria met)

For any item surfaced by any of the 4 scans that meets ANY of these criteria:
- Direct-named held-cohort event (HYNIX/MURATA/KIOXIA/SNDK/NBIS/SUMCO/MRVL specifically)
- >5% overnight move on any held position OR cohort peer (B45-regime-adjusted threshold)
- TC cluster N+1 candidate (would promote TC-1/TC-12/TC-13/PC-14)
- Cohort-decoupling diagnostic trigger (peer ±5% vs held name = idiosyncratic signal candidate)
- Forward-catalyst pre-registration event (earnings/CPI/inclusion grade firing window)
- Bloomberg/Reuters T1 quote from CEO/CFO of held name
- SEC F-1 / 8-K / 10-Q filing from held name

→ FIRE deep verification subagent (Opus 4.8, full Workflow #1 INGEST + cascade per Critical Rule #10)
→ Cost: ~80-120k tokens per deep fire
→ Estimated frequency: 1-3 deep fires per week given current signal density

---

## Output template — daily scan artifact format

```markdown
# YYYY-MM-DD Morning Feed Scan — [Pre-Korea/Pre-Japan/Pre-Europe/Pre-US]

**Triggered:** HH:MM CET
**Target market open:** HH:MM CET (in N minutes)
**Today date acknowledged:** YYYY-MM-DD (day-of-week)
**Scope:** [held cohort + adjacent + macro context]

## Top headlines (5-10 items)

| # | Item summary | Source | Tier | Date | Cohort impact | Tier 2 trigger? |
|---|---|---|---|---|---|---|

## Cohort-decoupling diagnostic (if any held-position event)

[Per Principle #41 codified 2026-06-26]

## TC cluster pattern-match flags

[Which TC N+1 candidates surfaced; which not]

## Forward catalyst calendar update

[Any pre-registered grades/events occurring within next 24h]

## Tier 2 deep-verification triggers

[List items meeting criteria + rationale + estimated cost]

## Prompt-optimization log (first-week phase only)

- Queries executed: [list]
- Sources accessed: [list with timing]
- Items missed (cross-check user Twitter shares same day): [list at end-of-day]
- Signal/noise ratio: X cohort-material items / Y total surfaced = Z%
- Actual cost: N tokens vs budget ~80-120k target
```

---

## Anti-decorative discipline (per Critical Rule #11 detectability framework)

If 5+ consecutive daily scans produce ZERO Tier 2 trigger fires → review at first-week
audit 2026-07-03 for either:
- Source-list expansion (catching more signal-density)
- Trigger criteria tightening (too high threshold)
- OR retire Workflow #10 if signal-density at autonomous-scan layer truly low

If signal-density at scan-layer is materially lower than user's Twitter-track (confirmed
via missed-items audit), retire Workflow #10 and reallocate budget to other harness
work.

---

## First-week review (todo item 2026-07-03)

After 5 trading days (Mon 2026-06-30 → Fri 2026-07-04), audit:
1. **What worked:** which sources surfaced highest signal/noise; which prompts caught
   patterns user's Twitter missed
2. **What didn't:** which sources noise-dominated; which prompts produced false-positive
   Tier 2 triggers
3. **Convergence rate:** % of scan items also surfaced by user same-day = independent-
   verification ratio (per 2026-06-26 design rationale)
4. **Cost vs benefit:** actual ~2M/week token cost vs material cascade events caught
5. **Prompt optimization:** refined templates per surfaced gaps + signal/noise learnings
6. **Source-list curation:** add/remove sources per actual signal quality
7. **Tier 2 trigger calibration:** adjust 5% threshold + held-cohort criteria per
   observed false-positive/negative rates

---

## REVISION 2026-06-26 PM — POST-CLOSE TIMING + EXPLICIT 24H WINDOW

**User directive 2026-06-26 PM:** post-close firing for all 3 scans + strict past-24h window.

### Revised firing times

| Scan | Old time | **NEW time** | Rationale |
|---|---|---|---|
| Korea + Japan | 01:30/01:45 CET (pre-open) | **09:00 CET** (post-close) | KRX+TSE closed 08:30 CET; full session captured |
| EU | 08:30 CET (pre-open) | **18:00 CET** (post-close) | Frankfurt closed 17:30 CET; full session captured |
| US | 15:00 CET (pre-open) | **22:00 CET** (live close) | NYSE closes 22:00 CET; full session captured |

### MANDATORY addition to every Workflow #10 scan prompt

```
TIME WINDOW (per Principle #42 candidate codified 2026-06-26 PM):
- STRICTLY PAST 24 HOURS from current trigger time
- Cite publication date for every item (must fall within 24h window)
- Items older than 24h = REJECT unless explicitly flagged as "historical context for
  current-window event"
- Forward-catalyst calendar may reference next 24-72h (forward-looking exempt)
- Multi-day pattern emergence = defer to weekly synthesis (Workflow #10-W Saturday)
```

### MANDATORY addition to source-list per scan

```
DIRECT PRIMARY-FILING FETCH (per first-week-review gap caught 2026-06-26):
- Pre-Korea: WebFetch dart.fss.or.kr for SK Hynix / Samsung Electronics 24h filings
- Pre-Japan: WebFetch tdnet-search.appspot.com for MURATA / KIOXIA / SUMCO / Shin-Etsu /
  Advantest 24h disclosures
- Pre-EU: SEC EDGAR overnight + DART overnight + TDnet overnight
- Pre-US: SEC EDGAR US intraday + cohort 8-K filings
```

### MANDATORY trigger-date vs system-date reconciliation

```
TRIGGER-DATE vs SYSTEM-DATE RECONCILIATION (per Principle #40 codified 2026-06-26):
- If trigger prompt references YYYY-MM-DD differently from system date, ACKNOWLEDGE
  discrepancy + USE SYSTEM DATE as authoritative
- Confirm in output: "Trigger label said [X]; system date is [Y]; treating as [Y]."
```

**These three additions** (time window + direct primary fetch + date reconciliation) **should be applied at next scan iteration** — fix the 3 prompt-optimization gaps caught in today's first fire.
