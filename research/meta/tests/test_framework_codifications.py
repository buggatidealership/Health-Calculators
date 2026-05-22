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

import sys
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parents[3]
METHODOLOGY = REPO_ROOT / "research" / "meta" / "methodology.md"
BIASES = REPO_ROOT / "research" / "meta" / "biases-watchlist.md"
RIGAKU = REPO_ROOT / "research" / "companies" / "RIGAKU" / "thesis.md"


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

    return result.report()


if __name__ == "__main__":
    sys.exit(main())
