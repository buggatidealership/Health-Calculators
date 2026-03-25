"""
Check the Twitter → Calculator funnel in GA4.
Tracks: Twitter visits, calculator completions, and which pages convert.
"""
from google.oauth2 import service_account
from google.analytics.data_v1beta import BetaAnalyticsDataClient
from google.analytics.data_v1beta.types import RunReportRequest, DateRange, Metric, Dimension

PROPERTY = "properties/484625784"
creds = service_account.Credentials.from_service_account_file(
    "/root/.config/gcloud/healthcalc-sa-key.json",
    scopes=["https://www.googleapis.com/auth/analytics.readonly"]
)
client = BetaAnalyticsDataClient(credentials=creds)

def run(dimensions, metrics, filter_dim=None, filter_val=None, limit=20, days="7daysAgo"):
    req = RunReportRequest(
        property=PROPERTY,
        date_ranges=[DateRange(start_date=days, end_date="today")],
        dimensions=[Dimension(name=d) for d in dimensions],
        metrics=[Metric(name=m) for m in metrics],
        order_bys=[{"metric": {"metric_name": metrics[0]}, "desc": True}],
        limit=limit,
    )
    if filter_dim and filter_val:
        req.dimension_filter = {
            "filter": {
                "field_name": filter_dim,
                "string_filter": {"value": filter_val, "match_type": "EXACT" if "%" not in filter_val else "CONTAINS"},
            }
        }
    return client.run_report(req)

print("=" * 60)
print("FUNNEL CHECK — Twitter → Calculator Completion")
print("=" * 60)

# 1. Twitter traffic
print("\n--- TWITTER TRAFFIC (last 7 days) ---\n")
resp = run(["sessionSource", "pagePath"], ["sessions"], "sessionSource", "twitter")
if resp.rows:
    for row in resp.rows:
        print(f"  {row.metric_values[0].value:>4} sessions  {row.dimension_values[1].value}")
else:
    # Also check for t.co referrer
    resp2 = run(["sessionSource"], ["sessions"], "sessionSource", "t.co")
    if resp2.rows:
        for row in resp2.rows:
            print(f"  {row.metric_values[0].value:>4} sessions from t.co")
    else:
        print("  0 sessions attributed to Twitter")
        print("  (bare URLs register as 'direct' — UTM tags will fix this)")

# 2. All traffic sources
print("\n--- ALL TRAFFIC SOURCES ---\n")
resp = run(["sessionSource"], ["sessions"])
for row in resp.rows:
    print(f"  {row.metric_values[0].value:>4} sessions  {row.dimension_values[0].value}")

# 3. Calculator completions by page
print("\n--- CALCULATOR COMPLETIONS ---\n")
resp = run(["pagePath"], ["eventCount"], "eventName", "calculator_complete")
total = 0
for row in resp.rows:
    count = int(row.metric_values[0].value)
    total += count
    print(f"  {count:>4}x  {row.dimension_values[0].value}")
print(f"\n  Total completions: {total}")

# 4. UTM campaign breakdown (if any tagged traffic exists)
print("\n--- UTM CAMPAIGNS ---\n")
resp = run(["sessionCampaignName"], ["sessions"])
for row in resp.rows:
    campaign = row.dimension_values[0].value
    if campaign and campaign != "(not set)":
        print(f"  {row.metric_values[0].value:>4} sessions  campaign={campaign}")
if not any(r.dimension_values[0].value not in ("(not set)", "") for r in resp.rows):
    print("  No UTM-tagged campaigns yet")

# 5. Top pages by engagement
print("\n--- TOP PAGES (by sessions) ---\n")
resp = run(["pagePath"], ["sessions", "eventCount"], limit=10)
for row in resp.rows:
    path = row.dimension_values[0].value
    sessions = row.metric_values[0].value
    events = row.metric_values[1].value
    print(f"  {sessions:>4} sessions  {events:>4} events  {path}")
