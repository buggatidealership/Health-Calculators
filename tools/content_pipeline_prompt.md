# Automated Content Pipeline — Cron Prompt

You are executing an automated content pipeline for healthcalculators.xyz. This runs on a schedule with NO human in the loop. Quality over quantity.

## PHASE 1: RESEARCH (find the best calculator topic to build)

### Step 1A: Get existing calculators (avoid duplicates)
```bash
python3 -c "
import sys; sys.path.insert(0, '/root/healthcalculators-full')
from app import app
routes = sorted([r.rule for r in app.url_map.iter_rules() if 'GET' in r.methods and not r.rule.startswith('/static')])
for r in routes: print(r)
"
```

### Step 1B: Generate 10 candidate calculator ideas
Use WebSearch to find trending health/fitness/wellness calculator ideas. Focus on:
- Niche tools nobody else builds (proven pattern: ozempic-pen-click, vitamin-d-conversion)
- Health, fitness, nutrition, cosmetic, fertility, medication topics
- Tools where users NEED interactivity (not just information)

Search queries to try:
- "[topic] calculator" site:reddit.com (what people are asking for)
- health calculator ideas 2026
- trending health tools

### Step 1C: Score candidates with Keywords Everywhere API
For each candidate keyword, check volume and competition:
```bash
python3 << 'PYEOF'
import urllib.request, json

API_KEY = "241b4edadc670bd9c6b3"
keywords = ["candidate keyword 1", "candidate keyword 2", ...]  # Replace with actual candidates

data = json.dumps({"country": "us", "currency": "USD", "dataSource": "gkp", "kw": keywords}).encode()
req = urllib.request.Request(
    "https://api.keywordseverywhere.com/v1/get_keyword_data",
    data=data,
    headers={"Authorization": "Bearer " + API_KEY, "Content-Type": "application/json"}
)
resp = urllib.request.urlopen(req, timeout=30)
result = json.loads(resp.read())
for kw in result.get("data", []):
    print(f"  {kw['vol']:>8} vol  {kw['competition']:.2f} comp  {kw['keyword']}")
PYEOF
```

### Step 1D: SERP check for top 2-3 candidates
Use WebSearch to check who currently ranks for the keyword. Prefer keywords where:
- No major institutions (MDCalc, Mayo Clinic, WebMD) dominate
- Indie sites or small tools rank on page 1
- The existing results are thin/low-quality

### Step 1E: Pick the winner
Select ONE calculator topic that has:
1. Search volume > 100/month (ideally > 500)
2. Competition < 0.15 (PPC proxy)
3. Indie-friendly SERP (no institutional lock)
4. Not already built on the site
5. Requires genuine interactivity (not just a lookup table)

Also pick a companion resource guide topic tied to the same theme.

## PHASE 2: BUILD THE CALCULATOR

### Quality Standards
- Every calculator must be medically/scientifically accurate with cited sources
- Formula must come from a reputable source (NIH, WHO, peer-reviewed study, established medical formula)
- Include answer capsules for LLM discoverability
- Include FAQ section (5+ questions)
- Include methodology explanation
- Cross-link to 3-5 related existing calculators

### Step 2A: Create the JavaScript file
Write to `/root/healthcalculators-full/static/js/{calculator_name}.js`

Pattern:
```javascript
document.addEventListener('DOMContentLoaded', function() {
  // Get DOM elements
  // Add calculate button listener
  // Validate inputs
  // Run calculation with proper formula
  // Display results
  // Call celebratePulse() for animation
});
```

### Step 2B: Create the Jinja2 template
Write to `/root/healthcalculators-full/templates/{calculator_name}.html`

Must include:
- `{% include 'head_seo.html' %}` with proper meta tags
- `{% include 'header.html' %}`
- `{% include 'components/article-meta.html' %}`
- Calculator form with proper input validation
- Results section with `id="results-section"` and `class="hidden"`
- Ad units: top, middle, in-article, bottom positions
- Answer capsule after first h2 (for LLM citation)
- Methodology section with formula explanation
- FAQ section with FAQPage-ready structure
- Sources section with real citations
- `{% include 'components/medical-disclaimer.html' %}` (if health-related)
- `{% include 'components/share-card.html' %}`
- `{% include 'components/related-links.html' %}`
- `{% include 'footer.html' %}`
- Script includes: the calculator JS, result-animations.js, content-loops.js, sidebar-toc.js

### Step 2C: Add Flask route to app.py
Add at the end of the calculator routes section:
```python
@app.route('/your-calculator-url')
def your_calculator_function():
    schema_name = "Your Calculator Title"
    schema_description = "Description for SEO"
    schema_url = "/your-calculator-url"
    return render_template('your_calculator.html',
        is_homepage=False,
        schema_name=schema_name,
        schema_description=schema_description,
        schema_url=schema_url,
        schema_type='WebPage',  # or 'MedicalWebPage'
        breadcrumb_category='Category Name',
        date_modified='2026-03-11'
    )
```

### Step 2D: Add card entry to app.py
Add to the `cards` array (around line 300):
```python
{"title": "...", "url": "/...", "summary": "...", "icon": "...", "cta": "Calculate Now", "color": "blue", "category": "health", "popular": False}
```

### Step 2E: Add to content-loops.js
Add a node with 3-5 cross-links to existing calculators.

### Step 2F: Add to sitemap.xml
Add entry to `/root/healthcalculators-full/static/public/sitemap.xml`

### Step 2G: Verify the build
```bash
python3 -c "
import sys; sys.path.insert(0, '/root/healthcalculators-full')
from app import app
client = app.test_client()
resp = client.get('/your-calculator-url')
print(f'Status: {resp.status_code}')
assert resp.status_code == 200, 'CALCULATOR BUILD FAILED'
print('Calculator OK')
"
```

## PHASE 3: BUILD COMPANION RESOURCE GUIDE

Create a comprehensive resource guide tied to the calculator's topic. This is optimized for ChatGPT/LLM referral traffic.

### Quality Standards for Guides
- 1,000-2,000 words of substantive, well-researched content
- Definitive language ("X is...", "X refers to...") for LLM citation
- Answer capsules after h2 headings
- Real citations to medical/scientific sources
- Cross-link to the new calculator AND 3-5 existing related pages
- Include data tables, comparison charts, or visual reference where appropriate

### Steps
- Create template at `/root/healthcalculators-full/templates/resources/{guide_name}.html`
- Add Flask route in app.py
- Add to articles array in app.py
- Add to sitemap.xml
- Verify with test client (200 status)

## PHASE 4: PUBLISH

### Step 4A: Git commit and push
```bash
cd /root/healthcalculators-full
git -c user.name="Claude" -c user.email="noreply@anthropic.com" add -A
git -c user.name="Claude" -c user.email="noreply@anthropic.com" commit -m "Add [calculator name] calculator + [guide name] resource guide

Automated content pipeline: Keywords Everywhere vol=[X], comp=[Y]
SERP analysis: [brief note on competition]

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>"
git push
```

### Step 4B: Submit to Google Indexing API
```bash
python3 << 'PYEOF'
import sys; sys.path.insert(0, '/root/healthcalculators-full')
from google.oauth2 import service_account
from googleapiclient.discovery import build
import time

creds = service_account.Credentials.from_service_account_file(
    '/root/.config/gcloud/healthcalc-sa-key.json',
    scopes=['https://www.googleapis.com/auth/indexing']
)
indexing = build('indexing', 'v3', credentials=creds)

urls = [
    'https://healthcalculators.xyz/NEW-CALCULATOR-URL',
    'https://healthcalculators.xyz/resources/NEW-GUIDE-URL',
]
for url in urls:
    try:
        result = indexing.urlNotifications().publish(body={'url': url, 'type': 'URL_UPDATED'}).execute()
        print(f'Google Indexing API OK: {url}')
    except Exception as e:
        print(f'Google Indexing API ERR: {url} — {str(e)[:100]}')
    time.sleep(0.5)
PYEOF
```

### Step 4C: Submit to Bing IndexNow
```bash
cd /root/healthcalculators-full && python3 tools/indexnow_submit.py
```

## PHASE 5: LOG OUTPUT

Write a summary to the pipeline log:
```bash
echo "$(date -u +%Y-%m-%dT%H:%M:%SZ) | CALC: /new-calculator-url (vol=X, comp=Y) | GUIDE: /resources/new-guide-url | STATUS: success" >> /root/healthcalculators-full/tools/pipeline_log.txt
```

Also output a clear summary of what was built, for the marketing agent to consume.

## CRITICAL RULES
1. **Quality over quantity.** If you can't find a good topic or can't build something high-quality, skip this run and log why. Do NOT build garbage.
2. **Verify everything.** Test client must return 200. JS must have proper validation. Formulas must be sourced.
3. **No duplicates.** Check existing routes before building.
4. **Real sources.** Every calculator needs citations to actual medical/scientific sources. No made-up references.
5. **Match existing quality.** Look at `/root/healthcalculators-full/templates/caffeine_half_life_calculator.html` as a quality reference.
