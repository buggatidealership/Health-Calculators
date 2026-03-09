#!/usr/bin/env python3
"""
Submit all sitemap URLs to Bing via IndexNow protocol.

IndexNow instantly notifies search engines about URL changes.
Supported by: Bing, Yandex, Seznam, Naver.

Usage:
  python3 tools/indexnow_submit.py           # Submit all sitemap URLs
  python3 tools/indexnow_submit.py --dry-run  # Preview without submitting
"""

import json
import sys
import xml.etree.ElementTree as ET
import urllib.request

INDEXNOW_KEY = "8d67938f8032429ab9b1991f43c6526b"
HOST = "healthcalculators.xyz"
SITEMAP_PATH = "static/public/sitemap.xml"
ENDPOINT = "https://api.indexnow.org/indexnow"


def get_urls_from_sitemap():
    """Parse sitemap.xml and return all URLs."""
    tree = ET.parse(SITEMAP_PATH)
    root = tree.getroot()
    ns = {"sm": "http://www.sitemaps.org/schemas/sitemap/0.9"}
    urls = []
    for url_elem in root.findall("sm:url", ns):
        loc = url_elem.find("sm:loc", ns)
        if loc is not None and loc.text:
            urls.append(loc.text.strip())
    return urls


def submit_urls(urls, dry_run=False):
    """Submit URLs to IndexNow API in batch."""
    payload = {
        "host": HOST,
        "key": INDEXNOW_KEY,
        "keyLocation": f"https://{HOST}/{INDEXNOW_KEY}.txt",
        "urlList": urls,
    }

    if dry_run:
        print(f"DRY RUN — would submit {len(urls)} URLs to IndexNow:")
        for u in urls[:10]:
            print(f"  {u}")
        if len(urls) > 10:
            print(f"  ... and {len(urls) - 10} more")
        print(f"\nPayload preview:\n{json.dumps(payload, indent=2)[:500]}")
        return

    data = json.dumps(payload).encode("utf-8")
    req = urllib.request.Request(
        ENDPOINT,
        data=data,
        headers={
            "Content-Type": "application/json; charset=utf-8",
        },
        method="POST",
    )

    try:
        resp = urllib.request.urlopen(req, timeout=30)
        status = resp.status
        body = resp.read().decode("utf-8", errors="replace")
        print(f"IndexNow response: HTTP {status}")
        if body:
            print(f"Body: {body}")
        if status in (200, 202):
            print(f"SUCCESS: {len(urls)} URLs submitted to IndexNow.")
            print("Bing, Yandex, Seznam, and Naver will be notified.")
        else:
            print(f"Unexpected status {status}. URLs may not have been accepted.")
    except urllib.error.HTTPError as e:
        body = e.read().decode("utf-8", errors="replace")
        print(f"ERROR: HTTP {e.code} — {e.reason}")
        print(f"Body: {body}")
        if e.code == 422:
            print("Key validation failed. Ensure the key file is deployed at:")
            print(f"  https://{HOST}/{INDEXNOW_KEY}.txt")
    except Exception as e:
        print(f"ERROR: {e}")


def main():
    dry_run = "--dry-run" in sys.argv

    urls = get_urls_from_sitemap()
    print(f"Found {len(urls)} URLs in sitemap.")

    if not urls:
        print("No URLs found. Check sitemap path.")
        sys.exit(1)

    # IndexNow batch limit is 10,000 URLs per request
    submit_urls(urls, dry_run=dry_run)


if __name__ == "__main__":
    main()
