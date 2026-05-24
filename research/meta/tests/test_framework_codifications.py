#!/usr/bin/env python3
"""
Binary test for framework codifications added during 2026-05-22 session.

Verifies that the structural fixes to the AI-sector investing OS actually
landed in the repo as expected:

  1. methodology.md  → principles #20 (segment-decomposition) + #21 (Time-to-X)
                       including the ~80% directional-accuracy refinement
  2. biases-watchlist → B18 (operating-decline anchoring) + B19 (industry-norm-
                        claim anchoring) including the framing/point-prediction
                        distinction
  3. RIGAKU/thesis.md → TTQ scoring section + refined "directional estimate"
                        framing + Tier 2/3 + 1-2% sizing + cross-refs to #20/#21

Exit code:
  0 → all assertions passed
  1 → at least one assertion failed

Usage:
  python3 research/meta/tests/test_framework_codifications.py
"""

import json
import os
import subprocess
import sys
import tempfile
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parents[3]
METHODOLOGY = REPO_ROOT / "research" / "meta" / "methodology.md"
BIASES = REPO_ROOT / "research" / "meta" / "biases-watchlist.md"
RIGAKU = REPO_ROOT / "research" / "companies" / "RIGAKU" / "thesis.md"
BOTTLENECK_MAP = REPO_ROOT / "research" / "portfolio" / "bottleneck-map.md"
COMPANIES_DIR = REPO_ROOT / "research" / "companies"
CLAUDE_MD = REPO_ROOT / "research" / "CLAUDE.md"
SEGMENT_HOOK = REPO_ROOT / "research" / "meta" / "hooks" / "segment-trajectory-hook.py"
NTHORDER_HOOK = REPO_ROOT / "research" / "meta" / "hooks" / "nth-order-cascade-hook.py"
BYPASS_HOOK = REPO_ROOT / "research" / "meta" / "hooks" / "bypass-route-hook.py"
BOTTOMSUP_HOOK = REPO_ROOT / "research" / "meta" / "hooks" / "bottoms-up-hook.py"
ANTIFRAG_HOOK = REPO_ROOT / "research" / "meta" / "hooks" / "antifragility-mn-hook.py"
HOOKS_SETTINGS = REPO_ROOT / "research" / "meta" / "hooks" / "settings.json"

BOTTLENECK_MAP_TICKERS = [
    "HYNIX",
    "MURATA",
    "NOW",
    "GLW",
    "SNDK",
    "TE",
    "DDOG",
    "STM",
    "TSEM",
    "AXTI",
    "ARM",
    "SMTC",
    "RIGAKU",
    "PURR",
]


class TestResult:
    def __init__(self):
        self.passed = []
        self.failed = []

    def check(self, name: str, condition: bool, detail: str = ""):
        if condition:
            self.passed.append(name)
            print(f"  PASS  {name}")
        else:
            self.failed.append((name, detail))
            print(f"  FAIL  {name}" + (f"  ({detail})" if detail else ""))

    def report(self) -> int:
        total = len(self.passed) + len(self.failed)
        print()
        print(f"Result: {len(self.passed)}/{total} passed")
        if self.failed:
            print("Failures:")
            for name, detail in self.failed:
                print(f"  - {name}: {detail}" if detail else f"  - {name}")
            return 1
        return 0


def load(path: Path) -> str:
    if not path.exists():
        print(f"  FATAL file missing: {path}")
        sys.exit(1)
    return path.read_text(encoding="utf-8")


def contains_all(text: str, needles: list[str]) -> bool:
    return all(n in text for n in needles)


def main() -> int:
    result = TestResult()

    methodology = load(METHODOLOGY)
    biases = load(BIASES)
    rigaku = load(RIGAKU)

    # ------------------------------------------------------------------
    # methodology.md
    # ------------------------------------------------------------------
    print("methodology.md")

    result.check(
        "principle #20 — Segment-decomposition discipline exists",
        "20. **Segment-decomposition discipline" in methodology,
    )
    result.check(
        "principle #20 — mandatory discipline list (Decompose revenue by segment FIRST)",
        "Decompose revenue by segment FIRST" in methodology,
    )
    result.check(
        "principle #20 — substitution rate concept present",
        "substitution rate" in methodology.lower(),
    )
    result.check(
        "principle #20 — references B18 (operating-decline anchoring)",
        "B18" in methodology and "operating-decline anchoring" in methodology.lower(),
    )

    result.check(
        "principle #21 — Time-to-X signals as primary analytical dimension exists",
        "21. **Time-to-X signals as primary analytical dimension"
        in methodology,
    )
    result.check(
        "principle #21 — sub-discipline A (verify industry-norm claims)",
        "A. **Verify industry-norm claims" in methodology,
    )
    result.check(
        "principle #21 — sub-discipline B (score Time-to-X explicitly)",
        "B. **Score Time-to-X explicitly" in methodology,
    )
    result.check(
        "principle #21 — sub-discipline C (framework signals override numerical)",
        "C. **Recognize when framework signals" in methodology,
    )
    result.check(
        "principle #21 — TTQ/TTP/TTD family enumerated",
        contains_all(
            methodology,
            [
                "Time-to-Qualification",
                "Time-to-Production",
                "Time-to-Deployment",
                "Time-to-Power",
            ],
        ),
    )
    result.check(
        "principle #21 — >30% faster = HIGH-MAGNITUDE scoring rule",
        ">30% faster" in methodology and "HIGH-MAGNITUDE" in methodology,
    )
    result.check(
        "principle #21 — BE-vs-gas-turbine analogy preserved",
        "Bloom Energy" in methodology or "BE's numbers look bad" in methodology,
    )

    # The 2026-05-22 ~80% refinement
    result.check(
        "principle #21 — ~80% directional-accuracy refinement present",
        "~80% accuracy band" in methodology
        or "80% directional" in methodology.lower(),
    )
    result.check(
        "principle #21 — FRAMING vs POINT-PREDICTION distinction",
        "Framing/baseline use" in methodology
        and "Point-prediction use" in methodology,
    )
    result.check(
        "principle #21 — sanity-check rule (signal robust at 30% lower norm)",
        "30% lower" in methodology and "HIGH-MAGNITUDE" in methodology,
    )
    result.check(
        "principle #21 — user refinement quote 2026-05-22 captured",
        "eighty percent of that twelve to twenty four month" in methodology
        or "eighty percent correct" in methodology,
    )

    # ------------------------------------------------------------------
    # biases-watchlist.md
    # ------------------------------------------------------------------
    print()
    print("biases-watchlist.md")

    result.check(
        "B18 — Operating-decline anchoring entry exists",
        "B18" in biases
        and "operating-decline anchoring" in biases.lower(),
    )
    result.check(
        "B19 — Industry-norm-claim anchoring entry exists",
        "B19 — Industry-norm-claim anchoring without verification" in biases,
    )
    result.check(
        "B19 — references principle #21",
        "principle #21" in biases,
    )
    result.check(
        "B19 — ~80% directional-accuracy refinement present",
        "~80% accuracy band" in biases
        or "80% directional" in biases.lower(),
    )
    result.check(
        "B19 — FRAMING vs POINT-PREDICTION distinction",
        "FRAMING/BASELINE use" in biases
        and "POINT-PREDICTION use" in biases,
    )
    result.check(
        "B19 — sanity-check rule preserved",
        "30% lower" in biases,
    )
    result.check(
        "B19 — BE-vs-gas-turbine analogy preserved",
        "Bloom Energy" in biases or "BE's numbers look bad" in biases,
    )

    # ------------------------------------------------------------------
    # RIGAKU/thesis.md
    # ------------------------------------------------------------------
    print()
    print("companies/RIGAKU/thesis.md")

    result.check(
        "Rigaku — TTQ formal scoring section added",
        "Time-to-Qualification (TTQ) signal formally scored" in rigaku
        or "Formal Time-to-Qualification (TTQ) signal scoring" in rigaku,
    )
    result.check(
        "Rigaku — refined 'directional estimate' framing (no longer 'totally unverified')",
        "directional estimate" in rigaku
        and "~80% accuracy band" in rigaku,
    )
    result.check(
        "Rigaku — over-correction acknowledgement present",
        "over-correction" in rigaku.lower(),
    )
    result.check(
        "Rigaku — Tier 2/3 boundary classification",
        "Tier 2/3 boundary" in rigaku,
    )
    result.check(
        "Rigaku — 1-2% sizing range",
        "1-2%" in rigaku,
    )
    result.check(
        "Rigaku — cross-references principle #20 (segment-decomposition)",
        "principle #20" in rigaku
        or "Segment-decomposition" in rigaku,
    )
    result.check(
        "Rigaku — cross-references principle #21 (Time-to-X)",
        "principle #21" in rigaku
        or "Time-to-X signals as primary analytical dimension" in rigaku,
    )
    result.check(
        "Rigaku — references B18 and/or B19",
        "B18" in rigaku or "B19" in rigaku,
    )
    result.check(
        "Rigaku — conclusion still holds at ±20-30% norm imprecision (sanity-check applied)",
        "conclusion is robust" in rigaku
        or "robust to ±20-30%" in rigaku
        or ("HIGH-MAGNITUDE" in rigaku and "30% lower" in rigaku),
    )

    # ------------------------------------------------------------------
    # bottleneck-map.md (synthesis artifact added 2026-05-22)
    # ------------------------------------------------------------------
    print()
    print("portfolio/bottleneck-map.md")

    if not BOTTLENECK_MAP.exists():
        result.check("bottleneck-map.md exists", False, str(BOTTLENECK_MAP))
    else:
        bm = BOTTLENECK_MAP.read_text(encoding="utf-8")
        result.check("bottleneck-map.md exists", True)
        result.check(
            "bottleneck-map — layer definitions table present",
            "Layer definitions" in bm
            and "AT the binding constraint" in bm,
        )
        result.check(
            "bottleneck-map — held positions table present",
            "## Held positions" in bm,
        )
        result.check(
            "bottleneck-map — active candidates table present",
            "## Active candidates" in bm,
        )
        result.check(
            "bottleneck-map — references sector/bottlenecks.md",
            "sector/bottlenecks.md" in bm,
        )
        result.check(
            "bottleneck-map — all 14 tickers present in artifact",
            all(t in bm for t in BOTTLENECK_MAP_TICKERS),
            ", ".join(t for t in BOTTLENECK_MAP_TICKERS if t not in bm) or "",
        )
        result.check(
            "bottleneck-map — sweet-spot analysis section",
            "Sweet-spot names" in bm or "sweet-spot" in bm.lower(),
        )

    # ------------------------------------------------------------------
    # Cascade enforcement: every ticker in the bottleneck map MUST have
    # a back-reference in its thesis.md (per Critical Rule #10)
    # ------------------------------------------------------------------
    print()
    print("bottleneck-map cascade (Critical Rule #10)")

    BACKREF_MARKER = "Cross-reference — Bottleneck map (added 2026-05-22)"
    for ticker in BOTTLENECK_MAP_TICKERS:
        thesis = COMPANIES_DIR / ticker / "thesis.md"
        if not thesis.exists():
            result.check(
                f"{ticker} — thesis.md exists",
                False,
                str(thesis),
            )
            continue
        content = thesis.read_text(encoding="utf-8")
        result.check(
            f"{ticker} — back-references bottleneck-map.md",
            BACKREF_MARKER in content
            and "portfolio/bottleneck-map.md" in content,
        )

    # ------------------------------------------------------------------
    # Principle #22 + B20 + segment-trajectory-hook (added 2026-05-23)
    # ------------------------------------------------------------------
    print()
    print("methodology.md — principle #22")

    result.check(
        "principle #22 — Model segment trajectory exists",
        "22. **Model segment trajectory, not snapshot" in methodology,
    )
    result.check(
        "principle #22 — mandatory discipline list present",
        "State current segment split" in methodology
        and "Project segment trajectory at 12-24" in methodology,
    )
    result.check(
        "principle #22 — Nippon Chemical user pushback quote captured",
        "the task is not to identify the split today" in methodology
        or "but it is to model what it can become" in methodology,
    )
    result.check(
        "principle #22 — hook enforcement referenced",
        "segment-trajectory-hook.py" in methodology,
    )
    result.check(
        "principle #22 — hooks-as-enforcement meta-lesson captured",
        "instructions will not always work" in methodology
        or "guaranteed work because it forces you" in methodology,
    )
    result.check(
        "principle #22 — references B20",
        "B20" in methodology,
    )
    result.check(
        "principle #22 — Nippon calibration example present",
        "Nippon Chemical Industrial" in methodology
        and "Calibration example (Nippon" in methodology,
    )

    print()
    print("biases-watchlist.md — B20")

    result.check(
        "B20 — Current-segment-% snapshot anchoring entry exists",
        "B20 — Current-segment-% snapshot anchoring" in biases,
    )
    result.check(
        "B20 — references principle #22",
        "principle #22" in biases,
    )
    result.check(
        "B20 — Nippon Chemical example present",
        "Nippon Chemical" in biases,
    )
    result.check(
        "B20 — hook enforcement documented",
        "segment-trajectory-hook.py" in biases,
    )
    result.check(
        "B20 — segment-too-small-NEVER-sufficient rule present",
        "NEVER a sufficient dismissal reason" in biases
        or "is NEVER a sufficient dismissal" in biases,
    )

    print()
    print("segment-trajectory-hook.py — source mirror exists + valid")

    result.check(
        "hook source mirror exists",
        SEGMENT_HOOK.exists(),
    )
    if SEGMENT_HOOK.exists():
        hook_content = SEGMENT_HOOK.read_text(encoding="utf-8")
        result.check(
            "hook — TRIGGER_PATTERNS defined",
            "TRIGGER_PATTERNS" in hook_content,
        )
        result.check(
            "hook — EXEMPTION_PATTERNS defined",
            "EXEMPTION_PATTERNS" in hook_content,
        )
        result.check(
            "hook — exit code 2 on anti-pattern",
            "sys.exit(2)" in hook_content,
        )
        result.check(
            "hook — repo-scope guard present",
            "in_scope" in hook_content,
        )

    print()
    print("hooks/settings.json — segment-trajectory hook registered")

    if HOOKS_SETTINGS.exists():
        settings = HOOKS_SETTINGS.read_text(encoding="utf-8")
        result.check(
            "settings.json — segment-trajectory-hook registered as Stop hook",
            "segment-trajectory-hook.py" in settings,
        )

    print()
    print("CLAUDE.md — hook documented in Enforcement hooks section")

    if CLAUDE_MD.exists():
        claude_md = CLAUDE_MD.read_text(encoding="utf-8")
        result.check(
            "CLAUDE.md — segment-trajectory-hook documented",
            "segment-trajectory-hook.py" in claude_md
            and "principle #22" in claude_md,
        )

    # ------------------------------------------------------------------
    # Hook execution test — actually invoke the hook with positive and
    # negative fixtures to prove the binary has teeth
    # ------------------------------------------------------------------
    print()
    print("segment-trajectory-hook — execution test (positive + negative + neutral)")

    def run_hook(transcript_content: str) -> int:
        with tempfile.NamedTemporaryFile(
            mode="w", suffix=".jsonl", delete=False
        ) as f:
            f.write(transcript_content)
            transcript_path = f.name
        try:
            payload = json.dumps({"transcript_path": transcript_path})
            r = subprocess.run(
                ["python3", str(SEGMENT_HOOK)],
                input=payload,
                capture_output=True,
                text=True,
                cwd=str(REPO_ROOT),
                timeout=10,
            )
            return r.returncode
        finally:
            os.unlink(transcript_path)

    BAD_FIXTURE = (
        '{"role":"user","content":"analyze foo"}\n'
        '{"role":"assistant","content":"Functional Products is only 10-15% of '
        'revenue, AI-adjacent revenue is too small to drive the thesis. Tier 3. '
        'Skip."}\n'
    )
    GOOD_FIXTURE = (
        '{"role":"user","content":"analyze foo"}\n'
        '{"role":"assistant","content":"Functional Products is only 10-15% of '
        'revenue today, but if Functional Products grows at 12-15% CAGR over '
        '24-36 months while inorganic base declines, SOTP framing surfaces '
        'material re-rating via substitution rate. Tier 2/3 boundary."}\n'
    )
    NEUTRAL_FIXTURE = (
        '{"role":"user","content":"hello"}\n'
        '{"role":"assistant","content":"Hello, how can I help you today?"}\n'
    )

    if SEGMENT_HOOK.exists():
        bad_exit = run_hook(BAD_FIXTURE)
        good_exit = run_hook(GOOD_FIXTURE)
        neutral_exit = run_hook(NEUTRAL_FIXTURE)

        result.check(
            "hook execution — BAD fixture (anti-pattern, no forward modeling) exits 2",
            bad_exit == 2,
            f"got exit {bad_exit}, expected 2",
        )
        result.check(
            "hook execution — GOOD fixture (anti-pattern + forward modeling) exits 0",
            good_exit == 0,
            f"got exit {good_exit}, expected 0",
        )
        result.check(
            "hook execution — NEUTRAL fixture exits 0",
            neutral_exit == 0,
            f"got exit {neutral_exit}, expected 0",
        )

    # ==================================================================
    # 2026-05-23: four new Stop hooks elevating instruction-only rules
    # to deterministic enforcement.
    # ==================================================================

    def run_hook_at(hook_path: Path, transcript_content: str) -> int:
        with tempfile.NamedTemporaryFile(
            mode="w", suffix=".jsonl", delete=False
        ) as f:
            f.write(transcript_content)
            transcript_path = f.name
        try:
            payload = json.dumps({"transcript_path": transcript_path})
            r = subprocess.run(
                ["python3", str(hook_path)],
                input=payload,
                capture_output=True,
                text=True,
                cwd=str(REPO_ROOT),
                timeout=10,
            )
            return r.returncode
        finally:
            os.unlink(transcript_path)

    def fixture(content: str) -> str:
        return (
            '{"role":"user","content":"x"}\n'
            + '{"role":"assistant","content":'
            + json.dumps(content)
            + "}\n"
        )

    # ------------------------------------------------------------------
    # Hook structure tests for the four new hooks
    # ------------------------------------------------------------------
    for hook_name, hook_path in [
        ("nth-order-cascade-hook", NTHORDER_HOOK),
        ("bypass-route-hook", BYPASS_HOOK),
        ("bottoms-up-hook", BOTTOMSUP_HOOK),
        ("antifragility-mn-hook", ANTIFRAG_HOOK),
    ]:
        print()
        print(f"{hook_name}.py — structure")
        result.check(
            f"{hook_name} — source mirror exists",
            hook_path.exists(),
        )
        if hook_path.exists():
            content = hook_path.read_text(encoding="utf-8")
            result.check(
                f"{hook_name} — EXEMPTION_PATTERNS defined",
                "EXEMPTION_PATTERNS" in content,
            )
            result.check(
                f"{hook_name} — sys.exit(2) on anti-pattern",
                "sys.exit(2)" in content,
            )
            result.check(
                f"{hook_name} — in_scope guard present",
                "in_scope" in content,
            )

    # ------------------------------------------------------------------
    # settings.json registration
    # ------------------------------------------------------------------
    print()
    print("hooks/settings.json — four new hooks registered")
    if HOOKS_SETTINGS.exists():
        settings = HOOKS_SETTINGS.read_text(encoding="utf-8")
        for hook_name in [
            "nth-order-cascade-hook.py",
            "bypass-route-hook.py",
            "bottoms-up-hook.py",
            "antifragility-mn-hook.py",
        ]:
            result.check(
                f"settings.json — {hook_name} registered as Stop hook",
                hook_name in settings,
            )

    # ------------------------------------------------------------------
    # CLAUDE.md documentation
    # ------------------------------------------------------------------
    print()
    print("CLAUDE.md — four new hooks documented")
    if CLAUDE_MD.exists():
        cm = CLAUDE_MD.read_text(encoding="utf-8")
        result.check(
            "CLAUDE.md — nth-order-cascade-hook documented + cites principle #2",
            "nth-order-cascade-hook.py" in cm and "principle #2" in cm,
        )
        result.check(
            "CLAUDE.md — bypass-route-hook documented + cites principle #9",
            "bypass-route-hook.py" in cm and "principle #9" in cm,
        )
        result.check(
            "CLAUDE.md — bottoms-up-hook documented + cites principle #1",
            "bottoms-up-hook.py" in cm and "principle #1" in cm,
        )
        result.check(
            "CLAUDE.md — antifragility-mn-hook documented + cites principle #5",
            "antifragility-mn-hook.py" in cm and "principle #5" in cm,
        )

    # ------------------------------------------------------------------
    # methodology.md hook-enforcement annotations
    # ------------------------------------------------------------------
    print()
    print("methodology.md — hook-enforcement notes on principles #1, #2, #5, #9")
    result.check(
        "methodology #1 — bottoms-up-hook.py referenced",
        "bottoms-up-hook.py" in methodology,
    )
    result.check(
        "methodology #2 — nth-order-cascade-hook.py referenced",
        "nth-order-cascade-hook.py" in methodology,
    )
    result.check(
        "methodology #5 — antifragility-mn-hook.py referenced",
        "antifragility-mn-hook.py" in methodology,
    )
    result.check(
        "methodology #9 — bypass-route-hook.py referenced",
        "bypass-route-hook.py" in methodology,
    )

    # ------------------------------------------------------------------
    # biases-watchlist.md — B21-B24
    # ------------------------------------------------------------------
    print()
    print("biases-watchlist.md — B21-B24 entries")
    for bnum, label in [
        ("B21", "First-order anchoring"),
        ("B22", "Consensus-solution anchoring"),
        ("B23", "Sell-side aggregation drift"),
        ("B24", "Tier-without-M/N"),
    ]:
        result.check(
            f"{bnum} — entry exists with label '{label}'",
            f"{bnum} —" in biases and label in biases,
        )

    # ------------------------------------------------------------------
    # Execution tests — BAD / GOOD / NEUTRAL for each new hook
    # ------------------------------------------------------------------
    print()
    print("nth-order-cascade-hook — execution test")
    nth_bad = run_hook_at(
        NTHORDER_HOOK,
        fixture(
            "NVDA gets a Tier 1 thesis bump because the export-control news "
            "drives substitution toward domestic suppliers."
        ),
    )
    nth_good = run_hook_at(
        NTHORDER_HOOK,
        fixture(
            "NVDA gets a Tier 1 thesis bump because the export-control news "
            "drives substitution toward domestic suppliers. 2nd order: this "
            "triggers a knock-on capex reallocation at the foundries."
        ),
    )
    nth_neutral = run_hook_at(
        NTHORDER_HOOK,
        fixture("Hello, how can I help you today?"),
    )
    result.check(
        "nth-order — BAD fixture (causal+anchor, no N-th markers) exits 2",
        nth_bad == 2,
        f"got {nth_bad}",
    )
    result.check(
        "nth-order — GOOD fixture (with 2nd-order marker) exits 0",
        nth_good == 0,
        f"got {nth_good}",
    )
    result.check(
        "nth-order — NEUTRAL fixture exits 0",
        nth_neutral == 0,
        f"got {nth_neutral}",
    )

    print()
    print("bypass-route-hook — execution test")
    byp_bad = run_hook_at(
        BYPASS_HOOK,
        fixture(
            "The supply pinch is a binding constraint, the standard suppliers "
            "are the consensus solution."
        ),
    )
    byp_good = run_hook_at(
        BYPASS_HOOK,
        fixture(
            "The supply pinch is a binding constraint. Bypass route: "
            "downstream players re-qualify alternative topologies via TTQ "
            "acceleration."
        ),
    )
    byp_neutral = run_hook_at(
        BYPASS_HOOK,
        fixture("The weather is nice today."),
    )
    result.check(
        "bypass-route — BAD fixture (constraint, no bypass) exits 2",
        byp_bad == 2,
        f"got {byp_bad}",
    )
    result.check(
        "bypass-route — GOOD fixture (constraint + bypass) exits 0",
        byp_good == 0,
        f"got {byp_good}",
    )
    result.check(
        "bypass-route — NEUTRAL fixture exits 0",
        byp_neutral == 0,
        f"got {byp_neutral}",
    )

    print()
    print("bottoms-up-hook — execution test")
    btu_bad = run_hook_at(
        BOTTOMSUP_HOOK,
        fixture(
            "I forecast revenue will reach $200B in DC sales by FY28 based on "
            "Street consensus aggregation."
        ),
    )
    btu_good = run_hook_at(
        BOTTOMSUP_HOOK,
        fixture(
            "I forecast revenue will reach $200B in DC sales by FY28. Built "
            "from supply: 2 million units per board ASP math validates floor."
        ),
    )
    btu_neutral = run_hook_at(
        BOTTOMSUP_HOOK,
        fixture("Just chatting, no analysis here."),
    )
    result.check(
        "bottoms-up — BAD fixture (forecast, no bottoms-up) exits 2",
        btu_bad == 2,
        f"got {btu_bad}",
    )
    result.check(
        "bottoms-up — GOOD fixture (forecast + bottoms-up math) exits 0",
        btu_good == 0,
        f"got {btu_good}",
    )
    result.check(
        "bottoms-up — NEUTRAL fixture exits 0",
        btu_neutral == 0,
        f"got {btu_neutral}",
    )

    print()
    print("antifragility-mn-hook — execution test")
    af_bad = run_hook_at(
        ANTIFRAG_HOOK,
        fixture(
            "Tier: Core. Position target: 10%. P(bull case): 65%. "
            "P(bear case): 15%. Bull return +40%."
        ),
    )
    af_good = run_hook_at(
        ANTIFRAG_HOOK,
        fixture(
            "Tier: Core. Position target: 10%. P(bull case): 65%. "
            "P(bear case): 15%. Anti-fragility: 4/5 scenarios."
        ),
    )
    af_neutral = run_hook_at(
        ANTIFRAG_HOOK,
        fixture("Just a tier mention without conviction block."),
    )
    result.check(
        "antifragility — BAD fixture (full thesis, no M/N) exits 2",
        af_bad == 2,
        f"got {af_bad}",
    )
    result.check(
        "antifragility — GOOD fixture (full thesis + M/N) exits 0",
        af_good == 0,
        f"got {af_good}",
    )
    result.check(
        "antifragility — NEUTRAL fixture (no thesis block) exits 0",
        af_neutral == 0,
        f"got {af_neutral}",
    )

    # ==================================================================
    # 2026-05-24: principle #23 (claim-level verification) + #6 refinement
    # + B25 + fluidity layer + harness-observations section.
    # ==================================================================
    print()
    print("methodology.md — principle #23 (claim-level verification)")
    result.check(
        "principle #23 — exists with label 'Claim-level verification'",
        "23. **Claim-level verification via orthogonal data"
        in methodology,
    )
    result.check(
        "principle #23 — TrendForce HBF user correction quote captured",
        "TrendForce" in methodology
        and "HBF" in methodology
        and "high-IOPS NAND" in methodology,
    )
    result.check(
        "principle #23 — operational definition of 'orthogonal' present",
        "different data-generation processes" in methodology
        or "different data-generation process" in methodology,
    )
    result.check(
        "principle #23 — mandatory discipline list (5 steps) present",
        "first-order assertion" in methodology
        and "orthogonal corroboration" in methodology
        and "single-source hypothesis" in methodology,
    )
    result.check(
        "principle #23 — retroactive HBF application worked example present",
        "Kioxia/SanDisk roadmap" in methodology
        or "GIDS architecture" in methodology,
    )
    result.check(
        "principle #23 — fluidity footer (codified/last_review/falsified_by/re-eval)",
        "codified: 2026-05-24" in methodology
        and "last_review: 2026-05-24" in methodology
        and "falsified_by:" in methodology
        and "re-evaluation trigger:" in methodology,
    )
    result.check(
        "principle #23 — references B25",
        "B25" in methodology,
    )

    print()
    print("methodology.md — principle #6 refinement (orthogonal triangulation)")
    result.check(
        "principle #6 — refined to require ORTHOGONAL sources",
        "Triangulate weak signals — via ORTHOGONAL sources" in methodology,
    )
    result.check(
        "principle #6 — redundant vs orthogonal distinction explained",
        "redundant" in methodology
        and "different data-generation processes" in methodology,
    )
    result.check(
        "principle #6 — cross-references principle #23",
        "principle #23" in methodology,
    )

    print()
    print("methodology.md — Principle metadata & fluidity section")
    result.check(
        "fluidity section — exists",
        "## Principle metadata & fluidity" in methodology,
    )
    result.check(
        "fluidity section — user 2026-05-24 framing quoted",
        "first principles also have expiration dates"
        in methodology,
    )
    result.check(
        "fluidity section — operating procedure documented",
        "harness-observations log" in methodology
        and "auto-queues for re-review" in methodology,
    )
    result.check(
        "fluidity section — all 23 principles in metadata table",
        all(
            f"| {n} |" in methodology
            for n in range(1, 24)
        ),
    )
    result.check(
        "fluidity section — status definitions present (active/under_review/refined/falsified)",
        "active" in methodology
        and "under_review" in methodology
        and "refined" in methodology
        and "falsified" in methodology,
    )

    print()
    print("biases-watchlist.md — B25 (source-tracking-over-claim-verification)")
    result.check(
        "B25 — entry exists",
        "B25 — Source-tracking-over-claim-verification" in biases,
    )
    result.check(
        "B25 — TrendForce HBF origin documented",
        "TrendForce" in biases and "HBF" in biases,
    )
    result.check(
        "B25 — trusted-source false confidence pattern captured",
        "Trusted-source false confidence" in biases
        or "trusted-source false confidence" in biases,
    )
    result.check(
        "B25 — untrusted-source false rejection pattern captured",
        "Untrusted-source false rejection" in biases
        or "untrusted-source false rejection" in biases,
    )
    result.check(
        "B25 — retroactive HBF application present",
        "GTC" in biases or "GIDS architecture" in biases,
    )
    result.check(
        "B25 — references principle #23",
        "principle #23" in biases,
    )

    print()
    print("where-we-are.md — Harness observations section")
    where_we_are = (REPO_ROOT / "research" / "sector" / "where-we-are.md").read_text(
        encoding="utf-8"
    )
    result.check(
        "where-we-are.md — Harness observations section exists",
        "## Harness observations" in where_we_are,
    )
    result.check(
        "where-we-are.md — operating rule documented",
        "single-line entry" in where_we_are
        and "principle #N" in where_we_are,
    )
    result.check(
        "where-we-are.md — auto-queue rule (3+ flags / 30 days)",
        "3+ times within 30 days" in where_we_are
        or "flagged 3+ times" in where_we_are,
    )
    result.check(
        "where-we-are.md — initial log entries for #23, #6, fluidity present",
        "principle #23 (new)" in where_we_are
        and "principle #6 (refined)" in where_we_are
        and "fluidity layer (new)" in where_we_are,
    )

    print()
    print("todo.md — P3 audit cycle replaced with claim-verification framing")
    todo = (REPO_ROOT / "research" / "meta" / "todo.md").read_text(
        encoding="utf-8"
    )
    result.check(
        "todo.md — old 'Source-reliability monthly audit cycle' replaced",
        "Source-reliability monthly audit cycle" not in todo,
    )
    result.check(
        "todo.md — new 'Claim-verification audit cycle' present",
        "Claim-verification audit cycle" in todo,
    )
    result.check(
        "todo.md — new entry references principle #23 + B25",
        "principle #23" in todo and "B25" in todo,
    )

    # ------------------------------------------------------------------
    # T1-T4 verification walkthroughs (documented as structural assertions
    # against the codified principle text — the walkthrough lives in the
    # methodology + biases files as worked examples; the test confirms
    # those worked examples were actually included.)
    # ------------------------------------------------------------------
    print()
    print("T1-T4 verification walkthroughs in codified text")
    result.check(
        "T1 (replay-falsification) — HBF orthogonal-check walkthrough in methodology",
        "Retroactive application to TrendForce HBF" in methodology
        and "NONE corroborated HBF positioning" in methodology,
    )
    result.check(
        "T2 (non-regression) — Nippon phosphine example still passes "
        "(orthogonal sources visible in principle #22)",
        "product page" in methodology
        and "Valuates" in methodology
        and "TDK JV" in methodology,
    )
    result.check(
        "T3 (over-firing guard) — falsified_by condition includes "
        "high false-positive rate trigger",
        ">30% of claims" in methodology
        or "high false-positive rate" in methodology,
    )
    result.check(
        "T4 (meta-fluidity) — re-evaluation trigger present in #23",
        "re-evaluation trigger" in methodology,
    )

    # ==================================================================
    # 2026-05-24 (later same day): principle #24 (recursive bottoms-up
    # worldview discovery) + B26 (pre-training-as-primary-source bias).
    # ==================================================================
    print()
    print("methodology.md — principle #24 (recursive bottoms-up worldview discovery)")
    result.check(
        "principle #24 — exists with label 'Recursive bottoms-up worldview'",
        "24. **Recursive bottoms-up worldview discovery via verified data"
        in methodology,
    )
    result.check(
        "principle #24 — user 2026-05-24 quote captured ('just what everybody else gets')",
        "just what everybody else gets" in methodology,
    )
    result.check(
        "principle #24 — L1-L4 recursive discovery procedure documented",
        "L1" in methodology
        and "L2" in methodology
        and "L3" in methodology
        and "L4" in methodology
        and "direct (industry reports)" in methodology
        and "alternative (" in methodology
        and "indirect (supplier" in methodology
        and "adjacent (" in methodology,
    )
    result.check(
        "principle #24 — distinction from #1 / #13 / #17 / #23 documented",
        "Principle #1" in methodology
        and "Principle #13" in methodology
        and "Principle #17" in methodology
        and "Principle #23" in methodology,
    )
    result.check(
        "principle #24 — mandatory discipline (7 steps) present",
        "Pre-training informs WHERE to look" in methodology
        or "informs *where to look*" in methodology,
    )
    result.check(
        "principle #24 — retroactive robotics-primer Phase 1 application present",
        "robotics-primer.md Phase 1" in methodology
        and "HYPOTHESIS WORLDVIEW" in methodology,
    )
    result.check(
        "principle #24 — fluidity footer present (codified/last_review/falsified_by/re-eval)",
        "codified: 2026-05-24" in methodology
        and "falsified_by: if verified-at-each-layer" in methodology,
    )
    result.check(
        "principle #24 — references B26",
        "B26" in methodology,
    )

    print()
    print("methodology.md — fluidity table has row 24")
    result.check(
        "fluidity table — row 24 present (Recursive bottoms-up worldview discovery)",
        "| 24 | Recursive bottoms-up worldview discovery"
        in methodology,
    )
    result.check(
        "fluidity table — row 24 has new-status marker",
        "active (new)" in methodology
        and methodology.count("active (new)") >= 2,  # #23 + #24
    )

    print()
    print("biases-watchlist.md — B26 (pre-training-as-primary-source)")
    result.check(
        "B26 — entry exists with label",
        "B26 — Pre-training-as-primary-source" in biases,
    )
    result.check(
        "B26 — distinction from B25 documented",
        "Distinction from B25" in biases
        or "distinct from B25" in biases.lower(),
    )
    result.check(
        "B26 — robotics-primer Phase 1 manifestation captured",
        "robotics-primer.md Phase 1" in biases
        and "HDS" in biases,
    )
    result.check(
        "B26 — references principle #24",
        "principle #24" in biases,
    )
    result.check(
        "B26 — manifestation calls out queued primers risk",
        "hyperscaler-capex-primer" in biases
        and "geopolitical-ai-primer" in biases
        and "model-economics-primer" in biases,
    )

    print()
    print("where-we-are.md — harness observation entry for principle #24")
    where_we_are = (REPO_ROOT / "research" / "sector" / "where-we-are.md").read_text(
        encoding="utf-8"
    )
    result.check(
        "where-we-are.md — principle #24 codification entry present",
        "principle #24 (new)" in where_we_are
        and "recursive bottoms-up worldview" in where_we_are.lower(),
    )
    result.check(
        "where-we-are.md — B26 entry present",
        "B26 (new)" in where_we_are,
    )
    result.check(
        "where-we-are.md — queued primer constraint flagged",
        "wiki primer queue" in where_we_are
        and "principle #24 discipline" in where_we_are,
    )

    return result.report()


if __name__ == "__main__":
    sys.exit(main())
