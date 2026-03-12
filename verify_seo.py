#!/usr/bin/env python3
"""
SEO & Structured Data Verification Script
Validates all sitemap URLs for schema markup, canonical tags, and SEO consistency.
"""

import json
import re
import sys
from collections import defaultdict

# Add the app directory to path
sys.path.insert(0, '/root/healthcalculators-full')

from app import app

# Noindex URLs from app.py sitemap_xml()
NOINDEX_URLS = {
    '/cholesterol-ratio-calculator',
    '/antidepressant-weight-gain-calculator',
    '/bac-calculator',
    '/hcg-doubling-time-calculator',
    '/gestational-age-calculator',
    '/hcg-injection-dosage-calculator',
    '/glycemic-index-calculator',
    '/formula-feeding-calculator',
    '/breastfeeding-calorie-calculator',
    '/waist-to-hip-ratio-calculator',
    '/newborn-weight-loss-calculator',
    '/female-fertility-calculator',
    '/menopause-calculator',
    '/pregnancy-weight-gain-calculator',
    '/semaglutide-reconstitution-calculator',
    '/ozempic-weight-loss-calculator',
    '/wegovy-weight-loss-calculator',
    '/oral-wegovy-weight-loss-calculator',
    '/mounjaro-weight-loss-calculator',
    '/zepbound-weight-loss-calculator',
    '/cagrisema-weight-loss-calculator',
    '/glp1-comparison-calculator',
    '/glp1-cost-calculator',
    '/ozempic-face-calculator',
    '/lifespan-longevity-calculator',
    '/heart-age-calculator',
    '/a1c-calculator',
    '/diabetes-risk-calculator',
    '/resources/breastfeeding-nutrition-guide',
    '/resources/antidepressants-and-body-fat',
    '/resources/who-should-not-get-breast-implants',
    '/resources/how-alcohol-affects-your-bac',
    '/resources/ivf-due-date-calculator-guide',
    '/resources/fertility-after-35',
    '/resources/semaglutide-vs-ozempic-guide',
    '/resources/glp1-side-effects-comparison',
    '/resources/ozempic-weight-loss-calculator-guide',
    '/resources/botox-dosage-guide',
    '/resources/glp1-weight-loss-comparison',
    '/resources/vitamin-d-levels-chart',
}

# Alternate routes that should canonical to primary
ALTERNATE_ROUTES = {
    '/a1c-blood-sugar-calculator': '/a1c-calculator',
    '/peptide-reconstitution-calculator': '/semaglutide-reconstitution-calculator',
    '/hcg-calculator': '/hcg-doubling-time-calculator',
}

# Alternate routes for noindexed pages — these inherit noindex from their primary
NOINDEX_ALTERNATES = {
    '/a1c-blood-sugar-calculator',
    '/peptide-reconstitution-calculator',
    '/hcg-calculator',
}

PRIMARY_SCHEMA_TYPES = {'WebPage', 'MedicalWebPage', 'Article', 'WebSite'}


def extract_schema_blocks(html):
    """Extract all JSON-LD schema blocks from HTML."""
    blocks = []
    pattern = r'<script[^>]*type=["\']application/ld\+json["\'][^>]*>(.*?)</script>'
    for match in re.finditer(pattern, html, re.DOTALL):
        try:
            data = json.loads(match.group(1))
            blocks.append(data)
        except json.JSONDecodeError:
            blocks.append({'_parse_error': True, '_raw': match.group(1)[:200]})
    return blocks


def validate_page(url, html, is_noindex=False):
    """Validate a single page's SEO elements. Returns list of issues."""
    issues = []

    # 1. Title tag
    title_match = re.search(r'<title>(.*?)</title>', html, re.DOTALL)
    if not title_match or not title_match.group(1).strip():
        issues.append('MISSING or empty <title> tag')

    # 2. Meta description
    desc_match = re.search(r'<meta\s+name=["\']description["\']\s+content=["\']([^"\']*)["\']', html)
    if not desc_match or not desc_match.group(1).strip():
        issues.append('MISSING or empty meta description')

    # 3. Canonical URL
    canonical_matches = re.findall(r'<link\s+rel=["\']canonical["\']\s+href=["\']([^"\']*)["\']', html)
    if len(canonical_matches) == 0:
        issues.append('MISSING canonical link tag')
    elif len(canonical_matches) > 1:
        issues.append(f'DUPLICATE canonical tags: {canonical_matches}')
    else:
        canonical = canonical_matches[0]
        expected_canonical = f'https://healthcalculators.xyz{url}'
        # Check alternate routes
        if url in ALTERNATE_ROUTES:
            expected_canonical = f'https://healthcalculators.xyz{ALTERNATE_ROUTES[url]}'
        if canonical != expected_canonical and not canonical.endswith(url):
            # Some pages might have different canonical, just warn
            issues.append(f'CANONICAL mismatch: got {canonical}, page is {url}')

    # 4. Robots meta
    robots_match = re.search(r'<meta\s+name=["\']robots["\']\s+content=["\']([^"\']*)["\']', html)
    if robots_match:
        robots_content = robots_match.group(1)
        if is_noindex and 'noindex' not in robots_content:
            issues.append(f'Should be noindex but robots meta is: {robots_content}')
        elif not is_noindex and 'noindex' in robots_content:
            issues.append(f'Should be indexed but robots meta is: {robots_content}')

    # 5. Schema blocks
    schemas = extract_schema_blocks(html)

    # Check for parse errors
    for s in schemas:
        if s.get('_parse_error'):
            issues.append(f'JSON-LD parse error: {s.get("_raw", "unknown")}')

    # Count primary schema types
    primary_count = 0
    primary_types = []
    breadcrumb_count = 0
    faq_count = 0
    software_app_count = 0

    for s in schemas:
        schema_type = s.get('@type', '')
        if schema_type in PRIMARY_SCHEMA_TYPES:
            primary_count += 1
            primary_types.append(schema_type)
        elif schema_type == 'BreadcrumbList':
            breadcrumb_count += 1
            # Validate breadcrumb items have names
            items = s.get('itemListElement', [])
            for item in items:
                if not item.get('name'):
                    issues.append(f'BreadcrumbList item at position {item.get("position")} has empty name')
        elif schema_type == 'FAQPage':
            faq_count += 1
            entities = s.get('mainEntity', [])
            if not entities:
                issues.append('FAQPage schema has no mainEntity questions')
            for q in entities:
                if not q.get('name'):
                    issues.append('FAQPage question has empty name')
                answer = q.get('acceptedAnswer', {})
                if not answer.get('text'):
                    issues.append(f'FAQPage question "{q.get("name", "?")}" has empty answer')
        elif schema_type == 'SoftwareApplication':
            software_app_count += 1
            if not s.get('aggregateRating') and not s.get('review'):
                issues.append('SoftwareApplication without aggregateRating or review (dead weight)')

    if primary_count > 1:
        issues.append(f'DUPLICATE primary schema: {primary_types} ({primary_count} blocks)')
    elif primary_count == 0 and url != '/':
        # Homepage might use WebSite
        pass

    if breadcrumb_count > 1:
        issues.append(f'DUPLICATE BreadcrumbList ({breadcrumb_count} blocks)')
    elif breadcrumb_count == 0 and url != '/':
        issues.append('MISSING BreadcrumbList schema')

    return issues


def get_all_urls():
    """Get all URLs from the sitemap + noindex URLs for testing."""
    urls = set()
    with app.test_client() as client:
        resp = client.get('/sitemap.xml')
        if resp.status_code == 200:
            sitemap = resp.data.decode('utf-8')
            for match in re.finditer(r'<loc>https://healthcalculators\.xyz([^<]+)</loc>', sitemap):
                urls.add(match.group(1))

    # Also test noindex URLs
    for url in NOINDEX_URLS:
        urls.add(url)

    # Add alternate routes
    for url in ALTERNATE_ROUTES:
        urls.add(url)

    return sorted(urls)


def main():
    print("=" * 70)
    print("SEO & Structured Data Verification")
    print("=" * 70)

    urls = get_all_urls()
    print(f"\nTesting {len(urls)} URLs...\n")

    all_issues = {}
    error_count = 0
    pass_count = 0

    with app.test_client() as client:
        for url in urls:
            resp = client.get(url)
            if resp.status_code != 200:
                if resp.status_code in (301, 302):
                    # Redirects are OK
                    continue
                all_issues[url] = [f'HTTP {resp.status_code}']
                error_count += 1
                continue

            html = resp.data.decode('utf-8')
            is_noindex = url in NOINDEX_URLS or url in NOINDEX_ALTERNATES
            issues = validate_page(url, html, is_noindex)

            if issues:
                all_issues[url] = issues
                error_count += len(issues)
            else:
                pass_count += 1

    # Report
    print(f"\n{'=' * 70}")
    print(f"RESULTS: {pass_count} pages clean, {len(all_issues)} pages with issues, {error_count} total issues")
    print(f"{'=' * 70}\n")

    if all_issues:
        # Group by issue type
        issue_summary = defaultdict(int)
        for url, issues in sorted(all_issues.items()):
            print(f"\n  {url}:")
            for issue in issues:
                print(f"    - {issue}")
                # Extract issue type (first word before colon or space)
                issue_type = issue.split(':')[0].split('(')[0].strip()
                issue_summary[issue_type] += 1

        print(f"\n{'=' * 70}")
        print("ISSUE SUMMARY:")
        for issue_type, count in sorted(issue_summary.items(), key=lambda x: -x[1]):
            print(f"  {count:3d}x  {issue_type}")
    else:
        print("All pages passed validation!")

    return 1 if all_issues else 0


if __name__ == '__main__':
    sys.exit(main())
