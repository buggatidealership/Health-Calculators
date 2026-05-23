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

    return result.report()


if __name__ == "__main__":
    sys.exit(main())
