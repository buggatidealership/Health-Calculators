#!/usr/bin/env python3
"""Smoke test: verify ALL routes return HTTP 200.

Run BEFORE pushing to catch broken pages.
Exit code 0 = all pass, exit code 1 = failures found (do NOT push).

Usage:
  python3 tools/smoke_test.py
"""

import sys
import os

# Ensure app can be imported from repo root
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from app import app


def run_smoke_test():
    client = app.test_client()
    routes = sorted(
        r.rule
        for r in app.url_map.iter_rules()
        if "GET" in r.methods
        and not r.rule.startswith("/static")
        and "<" not in r.rule  # skip parameterized routes
    )

    passed = 0
    failed = []

    for route in routes:
        try:
            resp = client.get(route)
            if resp.status_code in (200, 301, 302, 308):
                passed += 1
            else:
                failed.append(f"{route} → {resp.status_code}")
        except Exception as e:
            failed.append(f"{route} → ERROR: {str(e)[:80]}")

    print(f"Smoke test: {passed} passed, {len(failed)} failed, {len(routes)} total")

    if failed:
        print("\nFAILED ROUTES:")
        for f in failed:
            print(f"  {f}")
        print("\nABORT: Do not push. Fix the above routes first.")
        sys.exit(1)
    else:
        print("ALL ROUTES OK — safe to push.")
        sys.exit(0)


if __name__ == "__main__":
    run_smoke_test()
