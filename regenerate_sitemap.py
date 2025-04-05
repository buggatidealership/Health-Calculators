from datetime import datetime
import sys
import os

# Create a path to the app file
app_path = os.path.join(os.getcwd(), 'app.py')

# Get the cards and articles from app.py
sys.path.append(os.getcwd())
from app import cards, articles

# Template for sitemap (without any indentation before the XML declaration)
sitemap_template = """<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://healthcalculators.xyz/</loc>
    <priority>1.0</priority>
    <changefreq>weekly</changefreq>
  </url>
{entries}
</urlset>"""

# Combine routes from cards and articles
live_routes = cards + articles
entry_lines = []

for route in live_routes:
    url = f"https://healthcalculators.xyz{route['url']}"
    
    # Set up priority based on route type
    priority = "0.9" if route['url'].startswith("/") and not route['url'].startswith("/resources/") else "0.7"
    
    entry = f"  <url>\n    <loc>{url}</loc>"
    
    # Add lastmod for all entries with today's date
    lastmod = datetime.now().strftime("%Y-%m-%d")
    entry += f"\n    <lastmod>{lastmod}</lastmod>"
    
    entry += f"\n    <priority>{priority}</priority>\n    <changefreq>monthly</changefreq>\n  </url>"
    entry_lines.append(entry)

# Add resources page
resources_entry = """  <url>
    <loc>https://healthcalculators.xyz/resources</loc>
    <lastmod>{lastmod}</lastmod>
    <priority>0.6</priority>
    <changefreq>monthly</changefreq>
  </url>""".format(lastmod=datetime.now().strftime("%Y-%m-%d"))

entry_lines.append(resources_entry)

# Generate the full sitemap
sitemap_output = sitemap_template.replace("{entries}", "\n".join(entry_lines))

# Save to static/public/sitemap.xml
sitemap_path = os.path.join(os.getcwd(), 'static', 'public', 'sitemap.xml')
# Make sure we write without BOM
with open(sitemap_path, "wb") as f:
    f.write(sitemap_output.encode('utf-8'))

print("✅ sitemap.xml regenerated cleanly without deprecated slugs.")
