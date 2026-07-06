# Subagent C — Incumbent-Successor Architecture Pattern: DDOG + NOW
**Date:** 2026-06-22
**Workflow:** VERIFICATION (Critical Rule #16 subagent fan-out)
**Tokens:** ~50-70k scope
**Trigger:** HYNIX + KIOXIA PM cross-ref identified "incumbent-investing-in-successor-architecture" pattern; user requested software-cohort adaptation scan for DDOG + NOW

---

## TL;DR

DDOG shows a WEAK-TO-STRONG pattern: internal R&D is genuinely pivoting toward agentic-native observability (DASH 2026 Bits AI + autonomous remediation) but no dedicated external Ventures vehicle and no bet-the-other-side M&A. NOW shows a STRONG pattern: Traceloop acquisition (open-source LLM observability), RaptorDB (agentic-data-layer rebuild), AI Agent Studio, and Action Fabric MCP Server all constitute structural bets on the architecture that could bypass traditional form-based workflow platforms — executed INSIDE the current platform, not externally. Neither name has an explicit external VC fund betting on their own disruption; the software-cohort analog is internal platform reconstruction rather than venture capital stakes.

---

## Software-Cohort Pattern Adaptation

The HYNIX/KIOXIA pattern is: an incumbent makes a financial or R&D commitment in/on a technology that would cannibalize its core product if that technology matures. In hardware this is visible as venture stakes or internal research divisions. The software-cohort equivalent (per task brief) maps as:

| Hardware analog | Software analog |
|---|---|
| VC investment in disruptor startup | M&A of agentic-native startups / Ventures participation |
| Internal R&D division on successor architecture | Internal platform rebuild (separate from legacy product cadence) |
| Pilot production of successor technology | Engineering blog + conference announcements of next-gen platform |
| Cross-licensing / joint-development | Acqui-hires of AI-native talent |

For a pattern verdict, "STRONG" requires named evidence of at least two of the above analog categories specifically targeting a successor architecture (not just AI feature bolt-on to existing product).

---

## SECTION 1: DDOG — Incumbent-Successor Architecture Scan

### 1A. What could disrupt DDOG's traditional observability stack (10-15yr horizon)?

Four plausible successor architectures in order of conviction:

1. **AI-native observability built from scratch for agentic workloads** — not APM-extension but purpose-built agent telemetry (prompt-in / tool-call / output tracing as first-class primitives, not instrumented-as-logs). Startups: Langfuse, Arize Phoenix, Helicone, Braintrust. This is the highest-conviction successor risk. *(my model)*

2. **Hyperscaler-native observability scaling AI-native features** — AWS CloudWatch Container Insights for AI, Azure Monitor AI Insights, GCP Cloud Monitoring. The "one throat to choke" bundling argument. *(my model)*

3. **Agent self-monitoring eliminating external observer** — if agents can introspect and report their own behavior reliably, the external observer layer collapses. Long-horizon risk (10-15yr), lowest near-term probability. *(my model)*

4. **Open-source Grafana/OpenTelemetry community capturing share** — already a present-day competitive dynamic; structural share attrition rather than disruption event. *(my model)*

### 1B. Evidence of DDOG investing in / building successor architecture

#### M&A / Acquisitions (T1 sources)

| Acquisition | Date | What it adds | Successor-architecture relevance |
|---|---|---|---|
| **Quickwit** | January 9, 2025 | Open-source cloud-native log search engine; Apache 2.0 licensed | MEDIUM — open-source-native log management capability; addresses data-residency/regulatory constraints that would otherwise route to Grafana self-host alternatives. Defensive move vs OSS bypass. [Datadog blog T1](https://www.datadoghq.com/blog/datadog-acquires-quickwit/) |
| **Metaplane** | April 23, 2025 | AI-powered data observability (column-level lineage, ML-powered monitoring for data quality across the data stack) | MEDIUM — expands from infra-APM into data-pipeline observability; agentic AI requires data quality assurance upstream of agent actions. [Datadog T1](https://investors.datadoghq.com/news-releases/news-release-details/datadog-brings-observability-data-teams-acquiring-metaplane/); deal terms undisclosed; Metaplane raised $22.2M prior. |
| **Eppo** | May 5, 2025 | Feature-flagging + experimentation platform (~$220M per [Statsig T2](https://www.statsig.com/blog/datadog-acquires-eppo)); brings LLM Experiments + A/B testing for AI outputs natively | HIGH — feature flagging + LLM experimentation is specifically agentic-AI-native functionality (not legacy APM bolt-on). AI teams use experimentation to validate LLM output quality before full rollout. Direct predecessor to agentic-observability pipeline. [TechCrunch T2](https://techcrunch.com/2025/05/05/datadog-acquires-eppo-a-feature-flagging-and-experimentation-platform/) |

**Assessment of M&A pipeline:** All three 2025 acquisitions extend the observability surface toward agentic-AI-native use cases. No acquisition targets a company that would displace DDOG's core APM product — these are additive, not cannibalizing bets. This is "APM-extension" M&A rather than "bet on the disruption" M&A. Classification: WEAK pattern (AI investment but not specifically betting on agentic-native successor architecture that displaces legacy product).

#### Ventures Vehicle

**NOT FOUND:** No evidence of a dedicated "Datadog Ventures" external VC fund making investments in agentic-native observability startups that would compete with DDOG's core product. DDOG's open-source strategy (vector.dev acquisition 2021, Quickwit 2025, OpenTelemetry founding contributor) is a distribution/moat defense posture, not a disruption-bet posture.

#### Internal R&D — DASH Engineering Blog Signals

**DASH 2025 (June 2025):** Agentic AI monitoring capabilities launched — AI Agent Monitoring (maps agent decision paths: inputs, tool invocations, calls to other agents, outputs); LLM Experiments; AI Agents Console. Per [APMdigest T2](https://www.apmdigest.com/datadog-introduces-new-capabilities-monitor-agentic-ai). Framing: purpose-built for monitoring AI agents including decision path visualization, latency spikes, infinite agent loops.

**DASH 2026 (June 9, 2026):** 100+ capabilities launched. Key signals per [SiliconAngle T2](https://siliconangle.com/2026/06/09/datadog-launches-100-features-dash-push-autonomous-ai-ops/) + [GlobeNewswire T1](https://www.globenewswire.com/news-release/2026/06/09/3309012/0/en/Datadog-Launches-100-Capabilities-to-Help-Customers-Drive-Autonomy-and-Manage-Growing-AI-and-Security-Complexity.html):

- **Bits AI expanded to fully autonomous operations** — Bits Detection, Agent Evals, Infrastructure, Code, Release, Data Analysis, Testing, Chat. "Capable of truly autonomous operations, becoming a reliable teammate that operates across every stage of the production lifecycle and development loop."
- **Autonomous remediation:** Bits AI automatically detects, investigates, and remediates issues by scanning infrastructure around the clock — "the whole process can happen autonomously using strong, pre-defined guardrails."
- **Bits Agent Builder:** Teams build custom AI agents INSIDE Datadog to automate remediation, generate reports, enforce standards.
- **Agent Console:** Centralized monitoring for AI agents AND agentic developer tools including Claude Code, Cursor, GitHub Copilot.
- **AI Guard:** Prompt injection and agent poisoning detection.

**CEO framing (Olivier Pomel, DASH 2026):** "The companies that win on AI won't just build better models, they'll build operational control around them." Per [GlobeNewswire T1].

**Engineering blog — Open Source Hub:** DDOG maintains [opensource.datadoghq.com](https://opensource.datadoghq.com/) as a dedicated page; vector.dev (acquired 2021) is the open-source telemetry agent; OpenTelemetry founding contributor since CNCF formation 2019. Per [Datadog T1](https://opensource.datadoghq.com/projects/opentelemetry/).

**Assessment of internal R&D:** DASH 2025-2026 progression shows a genuine platform pivot from "APM + monitoring" to "autonomous AI ops." Bits AI being described as a "reliable teammate" operating autonomously across the production lifecycle is NOT legacy APM language. DDOG is building an agentic layer ON TOP of observability infrastructure that begins to resemble what a purpose-built agentic-observability platform would look like. However, the architecture is still observability-first, agentic-second. Langfuse/Arize (OSS-native, agent-prompt-first) remain differentiated at the startup layer.

**Classification:** Internal R&D signal is MEDIUM-HIGH (genuine agentic pivot); M&A is WEAK (APM-extension, not disruption-betting); Ventures vehicle ABSENT.

### 1C. DDOG Pattern Verdict

**WEAK pattern present** — general AI investment and meaningful internal agentic pivot (DASH 2025-2026 Bits AI), but:

1. No external Ventures fund betting on agentic-native observability startups that would compete with DDOG core
2. All M&A is additive (Quickwit/Metaplane/Eppo all extend DDOG's surface, none cannibalize it)
3. Open-source strategy is defensive moat (vector.dev, OpenTelemetry) not disruptive bet
4. DASH 2026 Bits AI is the closest to a successor-architecture pivot — building an autonomous-ops agent on top of observability data — but framed as product evolution, not separate platform

**Boundary condition:** If DASH 2026's Bits AI agent becomes the primary product and observability infrastructure becomes the substrate (inverted hierarchy), that would retroactively upgrade this to STRONG. Current evidence does not yet support that reading.

**Source quality summary:** T1 = DDOG IR T1 (GlobeNewswire press release), Datadog blog T1, SEC 8-K T1. T2 = TechCrunch, SiliconAngle, APMdigest. All within 30 days or from primary source with disclosure date verified.

---

## SECTION 2: NOW — Incumbent-Successor Architecture Scan

### 2A. What could disrupt NOW's traditional workflow stack (10-15yr horizon)?

Four plausible successor architectures:

1. **Agentic-native workflow platforms** — agents execute workflows directly without human-mediated form-based flows; no ITSM ticket-creation layer needed; pure intent → action without workflow routing. LangChain, AutoGen, CrewAI, and enterprise derivatives. *(my model)*

2. **Hyperscaler-native workflow tools** — Microsoft Copilot Studio, Google Workspace AI workflow, AWS Bedrock Agents capturing workflow-automation budget before NOW can expand. Highest near-term competitive threat. *(my model)*

3. **Voice/conversational interfaces** — natural-language-first replaces form-based workflow submission; the workflow layer becomes implicit, not explicit. *(my model)*

4. **Open-source agentic frameworks** — LangChain/AutoGen/CrewAI enterprise adoption bypassing commercial workflow platforms. Longer-horizon. *(my model)*

### 2B. Evidence of NOW investing in / building successor architecture

#### M&A / Acquisitions (T1/T2 sources)

| Acquisition | Close Date | What it adds | Successor-architecture relevance |
|---|---|---|---|
| **Moveworks** | December 15, 2025 | Enterprise AI search + front-end AI assistant; grew 5× YoY Q1 FY26; "EmployeeWorks" rebranded | HIGH — Moveworks is an AI-native enterprise search + assistant platform that could theoretically displace traditional form-based ITSM ticket submission with conversational interfaces. NOW acquired a front-end AI-native competitor at the human-interface layer. [ServiceNow Newsroom T1](https://newsroom.servicenow.com/press-releases/details/2026/ServiceNow-launches-Autonomous-Workforce-that-thinks-and-acts-adds-Moveworks-to-the-ServiceNow-AI-Platform/default.aspx) |
| **Veza** | March 2, 2026 (closed) | Identity security for AI agents; access graph for non-human actors | HIGH — non-human identity management is a native architectural primitive for agentic-native platforms, not a retrofit from human-centric IAM. Veza secures the agent-to-system trust layer. Per [NOW SEC 8-K FY2026 T1](https://www.sec.gov/Archives/edgar/data/0001373715/000137371526000054/erq1fy26.htm) |
| **Traceloop** | March 3, 2026 (closed) | OpenLLMetry (open-source LLM observability via OpenTelemetry); runtime LLM call tracing embedded into AI Control Tower | HIGH — Traceloop is an agentic-AI-native observability primitive (OpenTelemetry for LLMs). NOW acquired an open-source company whose core product is the instrumentation layer for the very platform type that could displace NOW's form-based workflows. "Conversations with ServiceNow started around OpenLLMetry, and they saw what the open-source community had built." Per [Calcalist T2](https://www.calcalistech.com/ctechnews/article/sjghwiqf11e); deal ~$60-80M. [Traceloop blog T1](https://traceloop.com/blog/traceloop-is-joining-servicenow) |
| **Pyramid Analytics** | H1 2026 | Analytics platform | LOW — analytics extension, not successor-architecture bet |
| **Armis** | April 20, 2026 (closed) | Security — real-time asset discovery + cyber exposure management | MEDIUM — security infrastructure for agentic AI deployments; completes the AI Control Tower stack. Per [NOW 8-K T1](https://www.sec.gov/Archives/edgar/data/0001373715/000137371526000054/erq1fy26.htm); deal $7.75B per [Calcalist T2 via SEC context]. |

**Assessment of M&A pipeline:** Unlike DDOG, NOW's 2025-2026 M&A stack (Moveworks + Veza + Traceloop) constitutes acquisition of components native to a SUCCESSOR architecture (AI-first search, non-human identity, LLM telemetry). Moveworks specifically was a front-end AI-native interface competitor; its acquisition is structurally similar to HYNIX investing in FeMFET — buying the technology that could displace your interface layer. STRONG pattern in M&A dimension.

#### ServiceNow Ventures (External VC)

**$1 billion committed to ServiceNow Ventures by 2026** — per [ServiceNow Newsroom T1](https://www.servicenow.com/company/media/press-room/one-billion-ventures-investment.html). Prior $300M deployed across 45 companies; latest investment was Novaworks (March 23, 2026); 83 total investments as of mid-2026 per [CBInsights / Crunchbase T2].

Portfolio companies per web search include: **Plutus** (Agentic AI for insurance sector — ServiceNow Ventures T1 announcement September 2025), **Island** (enterprise browser, Series D April 2024), **Snyk** (developer security, ~$7.4B valuation), **Harness** (software delivery automation, ~$3.5B), **Deepgram** (voice AI), **BigID** (data/AI security), **Hyro** (conversational AI automation).

**Pattern in Ventures portfolio:** Deepgram (voice AI = natural-language interface that could replace form-based workflow submission), Hyro (conversational AI = same pattern), Plutus (agentic AI for insurance workflows = NOW's core enterprise workflow territory). These investments constitute serviceable evidence of NOW's Ventures arm investing in startups whose technology could displace NOW's form-based workflow paradigm. Conversational/voice interfaces are the most credible near-term disruptor of ITSM ticket-based workflows; NOW Ventures invested in Deepgram (voice) and Hyro (conversational). Pattern present.

**Source quality:** ServiceNow Newsroom T1 for Ventures announcement; CBInsights/Crunchbase T2 for portfolio count and names; individual company press releases T1/T2 for specific investment confirmations.

#### Internal R&D — Platform Reconstruction

**RaptorDB Pro** (Knowledge 2026, May 2026): Per [ServiceNow Newsroom T1](https://newsroom.servicenow.com/press-releases/details/2026/ServiceNow-launches-the-real-time-data-foundation-that-puts-autonomous-AI-to-work-across-the-enterprise/default.aspx) — real-time data foundation specifically rebuilt for agentic AI workloads. "Live Perform, Live Connect, Live Archive" — same database handling both operational and analytical workloads simultaneously. Architectural rationale: "agents operating on stale data make bad decisions." RaptorDB is a database rebuild from scratch inside the Now Platform, explicitly motivated by agentic-AI architectural requirements, not human-workflow requirements. This is the clearest internal-R&D signal of platform reconstruction for a successor architecture.

**AI Agent Studio** (Knowledge 2025-2026): Per [CloudWars T2](https://cloudwars.com/cloud-wars-minute/servicenow-agentic-ai-ai-agent-studio-force-multiplying-ecosystem/) — visual builder for enterprise AI agents operating inside NOW's platform. The framing is that agents define missions, tools, and hard limits — precisely the agentic-native workflow paradigm rather than the form-based workflow paradigm.

**Action Fabric + MCP Server** (May 2026): Per [ServiceNow Newsroom T1](https://newsroom.servicenow.com/press-releases/details/2026/ServiceNow-opens-its-full-system-of-action-to-every-AI-Agent-in-the-enterprise/default.aspx) — NOW opens its full system of action to ANY AI agent via Model Context Protocol Server, included in every Now Assist + AI Native SKU. Framing: "we don't care who builds the agents; every enterprise agent should run through NOW to execute governed work." This is a platform-layer restructuring: moving from "humans submit tickets to NOW" to "agents submit actions to NOW."

**Platform redesign direction (Diginomica T2):** "ServiceNow is laying out a platform redesign built around how AI agents work rather than how human users work. Rather than layering AI on top as a billable extra, ServiceNow is baking it into the base, with a new tiered model spanning AI assistance, agentic automation, and fully autonomous operations." Per [Diginomica T2 via search].

**Classification of internal R&D:** HIGH — RaptorDB is a ground-up database rebuild specifically for agentic architecture; AI Agent Studio + Action Fabric are successor-paradigm product launches (agent-first, not human-first) WITHIN the current platform. This is the software-equivalent of an incumbent launching a separate production line for a successor technology while maintaining the legacy line.

### 2C. NOW Pattern Verdict

**STRONG pattern present** — NOW exhibits the incumbent-investing-in-successor-architecture pattern across three independent dimensions:

1. **M&A:** Moveworks (AI-native front-end that could bypass ITSM forms), Traceloop (open-source LLM observability for the agentic platform type that competes with NOW), Veza (non-human identity = native agentic primitive). All three are acquisitions of companies native to the architecture that would displace NOW's current form-based platform.

2. **Ventures:** $1B committed; portfolio includes Deepgram (voice AI), Hyro (conversational AI), Plutus (agentic AI for enterprise vertical) — all candidates to build the conversational/agentic interfaces that bypass form-based ITSM workflow submission.

3. **Internal R&D:** RaptorDB Pro (database rebuilt for agentic architecture), AI Agent Studio (agent-first workflow builder), Action Fabric/MCP Server (agent headless access to NOW's action surface). Platform redesign explicitly framed as "built around how AI agents work rather than how human users work" per Diginomica T2.

The structural analog to HYNIX/KIOXIA is: NOW is simultaneously (a) monetizing its legacy form-based workflow platform at $15.7B/yr subscription run-rate, and (b) building the agentic-native successor architecture (agent-first, headless, MCP-accessible) that would make those workflows obsolete if fully adopted. The Traceloop acquisition is the sharpest expression: NOW bought an open-source LLM observability company specifically to ENABLE the agent runtime that could displace NOW's traditional ITSM product.

---

## SECTION 3: Pattern Verdict Table

| Dimension | DDOG | NOW |
|---|---|---|
| M&A of agentic-native startups | WEAK (APM-extension; Eppo closest to agentic-native) | STRONG (Moveworks = AI-native front-end; Traceloop = LLM observability for agentic platforms; Veza = non-human identity) |
| External Ventures vehicle betting on disruptors | ABSENT (no "Datadog Ventures" external fund found) | PRESENT (ServiceNow Ventures $1B; portfolio includes Deepgram/Hyro/Plutus — voice/conversational/agentic verticals that could bypass form-based workflows) |
| Internal R&D on agentic-native successor platform | MEDIUM-HIGH (DASH 2026 Bits AI = autonomous ops agent; Agent Console; AI Guard; genuine agentic pivot) | STRONG (RaptorDB rebuilt for agentic architecture; AI Agent Studio; Action Fabric/MCP Server; platform redesign "for how agents work, not how humans work") |
| Acqui-hire / engineering talent for AI-native | MEDIUM (Eppo team brings experimentation/feature-flag native talent) | HIGH (Moveworks, Traceloop, Veza engineering teams = AI-native staff inflow) |
| **Overall pattern verdict** | **WEAK pattern present** | **STRONG pattern present** |

---

## SECTION 4: Thesis Implications

### DDOG Thesis Implication

DDOG's WEAK pattern is actually POSITIVE for the thesis as currently framed. A DDOG that was aggressively investing in disruptive startups would signal management's own conviction that the core product is at risk. Instead, DDOG is:

1. **Defending the open-source flank** (Quickwit, OpenTelemetry stewardship) — correct strategic response to Grafana/Langfuse bypass routes
2. **Extending the observability surface into adjacent layers** (Metaplane = data observability; Eppo = AI experimentation) — rational TAM expansion
3. **Building agentic autonomy ON TOP of observability** (DASH 2026 Bits AI) — monetizes the existing telemetry moat via agentic layer

**What DDOG is NOT doing:** betting on or acquiring the open-source LLM observability stacks (Langfuse, Arize Phoenix, Helicone, Braintrust) that represent the clearest successor-architecture risk to its LLM Observability module. This is the absence that matters: DDOG does not appear to believe its LLM Observability module is at existential risk from OSS-native alternatives, or if it does, it is not hedging the risk via M&A/investment.

**Thesis implication for DDOG (bifurcation-WINNER framing):** Pattern-absence is consistent with bifurcation-WINNER positioning. DDOG is extending a winning platform rather than hedging against disruption. The key open risk is whether Langfuse (ClickHouse-owned as of January 2026) or Arize Phoenix commoditize the LLM Observability module before DDOG can bundle it deeply enough into the enterprise APM moat. HOLD thesis unchanged; pattern analysis does not introduce new falsifiers or upgrade action beyond existing PM-ROTATION-EMPIRICAL call.

**Position implication:** 🟢 HOLD — no change — pattern verification consistent with bifurcation-WINNER framing; absent Ventures vehicle and APM-extension M&A are positive signals for platform durability, not warning flags. User holds 26sh @ $203.37 BEP, +10.07% lifetime.

### NOW Thesis Implication

NOW's STRONG pattern is the most significant finding of this subagent. The analysis reveals that NOW is executing a MORE AGGRESSIVE successor-architecture hedge than any other name analyzed in this research harness (including HYNIX and KIOXIA which were the pattern originators).

**Key insight:** Traceloop acquisition (March 2026) is specifically the acquisition of an open-source LLM observability framework that enables the agentic-native runtime that could displace NOW's traditional ITSM product. This is structurally identical to KIOXIA running internal FeFET R&D at its Frontier Tech R&D Institute — the incumbent funding the research that would displace it. NOW is doing this via M&A of open-source technologies, not just internal R&D.

**Does this soften the TRIM-CANDIDATE framing from PM-ROTATION-EMPIRICAL?**

Answer: **PARTIALLY YES, at the structural level, NOT at the near-term valuation level.**

1. **The structural hedge is real** — NOW is not asleep to the successor-architecture risk. RaptorDB rebuild + Moveworks + Traceloop + Action Fabric constitute a serious multi-vector hedge against agentic-native disruption. This is harder to short on structural grounds than a pure-incumbent doing nothing.

2. **The near-term bifurcation-loser dynamic is unchanged** — the Q1 -14-17% stock reaction, -33-38% YTD, "AI not in organic guide" = near-term sentiment damage is not healed by successor-architecture investments. The market is pricing NOW on near-term organic growth trajectory, not 5-10yr disruption hedging.

3. **Timing mismatch** — the successor-architecture investments (RaptorDB, Traceloop, Action Fabric) are 12-24 month bets. The TRIM-CANDIDATE framing is based on 6-18 month cohort-relative lag dynamics. These operate at different time horizons.

4. **TRIM-CANDIDATE logic adjustment**: the STRONG pattern modestly reduces the EXIT conviction (permanent share loss from agentic-native disruptors) but does NOT reduce the TRIM conviction (near-term cohort-relative underperformance vs AI-hardware positions). The appropriate framing: NOW has a better long-run platform architecture transition in motion than the Q1 print implied, which makes FULL EXIT less defensible but PARTIAL TRIM (25%) still the modal correct action per PM-ROTATION-EMPIRICAL.

**Position implication:** 🟡 TRIM-CANDIDATE 25% (UNCHANGED from PM-ROTATION-EMPIRICAL; pattern finding modestly reduces EXIT conviction but does not change TRIM modal recommendation) — structural successor-architecture hedge is genuine (reduces 10-15yr disruption risk) but does not resolve the 6-18mo bifurcation-loser pricing dynamic; user holds 54sh @ $94.30 BEP / +1.7% lifetime / 2.3% Degiro; low tax friction supports TRIM execution if user discretion leans toward reallocation toward AI-hardware cluster.

---

## Material Yield Class

**MEDIUM-HIGH yield** — the key findings that are genuinely additive to existing thesis files:

1. **NOW STRONG pattern is new harness knowledge** — the Traceloop acquisition's origin story ("conversations started around OpenLLMetry") and the RaptorDB architectural rebuild rationale were not previously in the NOW thesis at this level of analysis. These are T1/T2 sourced facts that upgrade the structural hedging picture.

2. **DDOG pattern-absence is load-bearing** — the absence of a Ventures vehicle and the APM-extension classification of M&A is analytically meaningful (consistent with bifurcation-WINNER framing; not alarming).

3. **DASH 2026 Bits AI was not previously in DDOG thesis** — the June 9, 2026 100+ feature launch (Bits AI autonomous remediation + Agent Builder + Agent Console + AI Guard) is new material that should cascade to DDOG thesis as a pattern-consistent reinforcement signal.

---

## NOT-FOUND Items (anti-fabrication transparency)

| Item searched | Result |
|---|---|
| Dedicated "Datadog Ventures" external VC fund | NOT FOUND — no evidence of external fund; DDOG invests via acquisitions, not CVC |
| DDOG acquisition of Langfuse/Arize/Helicone/Braintrust (OSS observability competitors) | NOT FOUND — these remain independent; Langfuse acquired by ClickHouse January 2026 per prior harness entry |
| DDOG "Code Red" or "Krypton-Tek" acquisitions (mentioned in task brief) | NOT FOUND — these names did not appear in any SEC filing or press release in scope |
| ServiceNow Ventures portfolio company specifically targeting ITSM successor architecture | PARTIAL — Deepgram (voice) + Hyro (conversational) are closest analogs; no startup explicitly targeting ITSM replacement found in public portfolio disclosures |
| NOW acquisition of a pure-agentic-workflow startup (AutoGen/CrewAI class) | NOT FOUND — Moveworks is the closest analog (AI-native enterprise search, not workflow automation per se) |

---

## Sources

**T1 (Primary receipts, IR/press releases with disclosure dates):**
- [Datadog acquires Quickwit — Datadog blog T1, Jan 9 2025](https://www.datadoghq.com/blog/datadog-acquires-quickwit/)
- [Datadog acquires Metaplane — Datadog IR T1, Apr 23 2025](https://investors.datadoghq.com/news-releases/news-release-details/datadog-brings-observability-data-teams-acquiring-metaplane/)
- [Datadog acquires Eppo — Datadog IR T1, May 5 2025](https://investors.datadoghq.com/news-releases/news-release-details/datadog-acquires-eppo-expand-its-ai-product-analytics)
- [Datadog DASH 2026 100+ features — GlobeNewswire T1, Jun 9 2026](https://www.globenewswire.com/news-release/2026/06/09/3309012/0/en/Datadog-Launches-100-Capabilities-to-Help-Customers-Drive-Autonomy-and-Manage-Growing-AI-and-Security-Complexity.html)
- [Datadog Open Source Hub — vector.dev, OpenTelemetry T1](https://opensource.datadoghq.com/projects/opentelemetry/)
- [ServiceNow $1B Ventures commitment — NOW Newsroom T1](https://www.servicenow.com/company/media/press-room/one-billion-ventures-investment.html)
- [ServiceNow AI Control Tower — NOW Newsroom T1, Knowledge 2026](https://newsroom.servicenow.com/press-releases/details/2026/ServiceNow-expands-AI-Control-Tower-to-discover-observe-govern-secure-and-measure-AI-deployed-across-any-system-in-the-enterprise/default.aspx)
- [ServiceNow Action Fabric MCP Server — NOW Newsroom T1, May 2026](https://newsroom.servicenow.com/press-releases/details/2026/ServiceNow-opens-its-full-system-of-action-to-every-AI-Agent-in-the-enterprise/default.aspx)
- [ServiceNow RaptorDB Pro — NOW Newsroom T1, Knowledge 2026](https://newsroom.servicenow.com/press-releases/details/2026/ServiceNow-launches-the-real-time-data-foundation-that-puts-autonomous-AI-to-work-across-the-enterprise/default.aspx)
- [Traceloop joins ServiceNow — Traceloop blog T1, Mar 2026](https://traceloop.com/blog/traceloop-is-joining-servicenow)
- [ServiceNow Autonomous Workforce + Moveworks — NOW Newsroom T1, Q1 FY26](https://newsroom.servicenow.com/press-releases/details/2026/ServiceNow-launches-Autonomous-Workforce-that-thinks-and-acts-adds-Moveworks-to-the-ServiceNow-AI-Platform/default.aspx)
- [NOW Q1 FY26 8-K — SEC T1](https://www.sec.gov/Archives/edgar/data/0001373715/000137371526000054/erq1fy26.htm)

**T2 (Secondary — trade press, analyst reports):**
- [Eppo acquisition ~$220M — Statsig T2](https://www.statsig.com/blog/datadog-acquires-eppo)
- [Eppo acquisition — TechCrunch T2](https://techcrunch.com/2025/05/05/datadog-acquires-eppo-a-feature-flagging-and-experimentation-platform/)
- [Metaplane acquisition — TechCrunch T2](https://techcrunch.com/2025/04/23/datadog-acquires-ai-powered-observability-startup-metaplane/)
- [Datadog DASH 2026 autonomous AI ops — SiliconAngle T2](https://siliconangle.com/2026/06/09/datadog-launches-100-features-dash-push-autonomous-ai-ops/)
- [Traceloop acquisition ~$60-80M — Calcalist T2](https://www.calcalistech.com/ctechnews/article/sjghwiqf11e)
- [ServiceNow AI Agent Studio — Cloud Wars T2](https://cloudwars.com/cloud-wars-minute/servicenow-agentic-ai-ai-agent-studio-force-multiplying-ecosystem/)
- [ServiceNow platform redesign for agents — Diginomica T2](https://diginomica.com/servicenow-ends-ai-add-era-and-defines-its-new-platform-approach)
- [ServiceNow Ventures portfolio — CBInsights T2](https://www.cbinsights.com/investor/servicenow-ventures)
- [ServiceNow Knowledge 2026 agentic governance — Efficiently Connected T2](https://www.efficientlyconnected.com/servicenow-knowledge-2026-agentic-ai-governance/)
- [RaptorDB Knowledge 2026 architecture — ServiceNow Community T2](https://www.servicenow.com/community/architect-articles/servicenow-knowledge-2026-architecting-the-agentic-bank-with/ta-p/3508196)
- [DASH 2025 agentic AI monitoring — APMdigest T2](https://www.apmdigest.com/datadog-introduces-new-capabilities-monitor-agentic-ai)
