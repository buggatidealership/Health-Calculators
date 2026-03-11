#!/usr/bin/env python3
"""
Reddit API tool for HealthCalculators.xyz growth campaign.
Uses Reddit's OAuth API with a registered script app.

Setup:
1. Go to reddit.com/prefs/apps (logged in)
2. Click "create another app..."
3. Name: healthcalc-tool, Type: script, Redirect: http://localhost:8080
4. Copy client_id (under app name) and secret
5. Set them below or pass as arguments

Usage:
  python3 tools/reddit_api.py search "r/Ozempic" "how much weight"
  python3 tools/reddit_api.py hot "r/loseit" 10
  python3 tools/reddit_api.py comments <post_id>
  python3 tools/reddit_api.py find-opportunities
"""

import sys
import json
import urllib.request
import urllib.parse
import base64

# ===== CONFIGURATION =====
CLIENT_ID = ""       # Fill after creating Reddit app
CLIENT_SECRET = ""   # Fill after creating Reddit app
USERNAME = "IllustriousCover1050"
PASSWORD = "xyw1rjp.TZC1hcz_utg"
USER_AGENT = "HealthCalcResearch/1.0 (by /u/IllustriousCover1050)"

# Calculator URLs mapped to relevant topics
CALCULATOR_MAP = {
    "ozempic weight loss": "https://healthcalculators.xyz/ozempic-weight-loss-calculator",
    "ozempic dosage": "https://healthcalculators.xyz/ozempic-dosage-calculator",
    "ozempic face": "https://healthcalculators.xyz/ozempic-face-calculator",
    "mounjaro weight loss": "https://healthcalculators.xyz/mounjaro-weight-loss-calculator",
    "wegovy weight loss": "https://healthcalculators.xyz/wegovy-weight-loss-calculator",
    "tdee": "https://healthcalculators.xyz/tdee-calculator",
    "body fat": "https://healthcalculators.xyz/body-fat-calculator",
    "macro": "https://healthcalculators.xyz/macro-calculator",
    "calorie": "https://healthcalculators.xyz/calorie-calculator",
    "bmi": "https://healthcalculators.xyz/bmi-calculator",
    "protein": "https://healthcalculators.xyz/protein-intake-calculator",
    "calories burned": "https://healthcalculators.xyz/calories-burned-calculator",
    "cagrisema": "https://healthcalculators.xyz/cagrisema-weight-loss-calculator",
}

# Subreddits to search with their relevant calculators
OPPORTUNITIES = [
    {"sub": "Ozempic", "queries": ["how much weight", "dosage schedule", "what to expect", "ozempic face", "starting ozempic"], "calcs": ["ozempic weight loss", "ozempic dosage", "ozempic face"]},
    {"sub": "Mounjaro", "queries": ["weight loss", "what to expect", "starting mounjaro", "first month"], "calcs": ["mounjaro weight loss"]},
    {"sub": "Semaglutide", "queries": ["weight loss", "dosage", "results"], "calcs": ["ozempic weight loss", "wegovy weight loss"]},
    {"sub": "loseit", "queries": ["TDEE calculator", "how many calories", "macro calculator", "body fat", "calorie deficit"], "calcs": ["tdee", "macro", "calorie", "body fat"]},
    {"sub": "fitness", "queries": ["body fat calculator", "calories burned", "TDEE", "protein intake"], "calcs": ["body fat", "calories burned", "tdee", "protein"]},
    {"sub": "1500isplenty", "queries": ["calorie calculator", "macro", "TDEE"], "calcs": ["calorie", "macro", "tdee"]},
    {"sub": "PetiteFitness", "queries": ["TDEE", "calorie calculator", "how many calories"], "calcs": ["tdee", "calorie"]},
    {"sub": "GLP1_Drugs", "queries": ["weight loss calculator", "ozempic", "mounjaro", "cagrisema"], "calcs": ["ozempic weight loss", "mounjaro weight loss", "cagrisema"]},
]


def get_token():
    """Get OAuth access token using password grant."""
    if not CLIENT_ID or not CLIENT_SECRET:
        print("ERROR: Set CLIENT_ID and CLIENT_SECRET first.")
        print("Go to reddit.com/prefs/apps to create a script app.")
        sys.exit(1)

    auth = base64.b64encode(f"{CLIENT_ID}:{CLIENT_SECRET}".encode()).decode()
    data = urllib.parse.urlencode({
        "grant_type": "password",
        "username": USERNAME,
        "password": PASSWORD,
    }).encode()

    req = urllib.request.Request(
        "https://www.reddit.com/api/v1/access_token",
        data=data,
        headers={
            "Authorization": f"Basic {auth}",
            "User-Agent": USER_AGENT,
            "Content-Type": "application/x-www-form-urlencoded",
        },
    )
    resp = urllib.request.urlopen(req, timeout=15)
    result = json.loads(resp.read())
    if "access_token" in result:
        return result["access_token"]
    else:
        print(f"Auth failed: {result}")
        sys.exit(1)


def api_get(token, endpoint, params=None):
    """Make authenticated GET request to Reddit API."""
    url = f"https://oauth.reddit.com{endpoint}"
    if params:
        url += "?" + urllib.parse.urlencode(params)
    req = urllib.request.Request(
        url,
        headers={
            "Authorization": f"Bearer {token}",
            "User-Agent": USER_AGENT,
        },
    )
    resp = urllib.request.urlopen(req, timeout=15)
    return json.loads(resp.read())


def search_subreddit(token, subreddit, query, sort="new", time="month", limit=10):
    """Search a subreddit for posts matching query."""
    data = api_get(token, f"/r/{subreddit}/search", {
        "q": query,
        "restrict_sr": "on",
        "sort": sort,
        "t": time,
        "limit": limit,
    })
    posts = []
    for child in data.get("data", {}).get("children", []):
        d = child["data"]
        posts.append({
            "title": d["title"],
            "url": f"https://reddit.com{d['permalink']}",
            "score": d["score"],
            "comments": d["num_comments"],
            "created": d["created_utc"],
            "selftext": d.get("selftext", "")[:200],
            "id": d["id"],
        })
    return posts


def get_hot(token, subreddit, limit=10):
    """Get hot posts from a subreddit."""
    data = api_get(token, f"/r/{subreddit}/hot", {"limit": limit})
    posts = []
    for child in data.get("data", {}).get("children", []):
        d = child["data"]
        if d.get("stickied"):
            continue
        posts.append({
            "title": d["title"],
            "url": f"https://reddit.com{d['permalink']}",
            "score": d["score"],
            "comments": d["num_comments"],
            "id": d["id"],
        })
    return posts


def get_comments(token, post_id, subreddit=None):
    """Get comments on a post."""
    # Try to get the post info first
    endpoint = f"/comments/{post_id}"
    data = api_get(token, endpoint, {"limit": 20, "depth": 1})

    if not isinstance(data, list) or len(data) < 2:
        return []

    comments = []
    for child in data[1].get("data", {}).get("children", []):
        if child["kind"] != "t1":
            continue
        d = child["data"]
        comments.append({
            "author": d.get("author", "[deleted]"),
            "body": d.get("body", "")[:300],
            "score": d.get("score", 0),
            "id": d["id"],
        })
    return comments


def find_opportunities(token):
    """Find high-opportunity threads across all target subreddits."""
    print("=" * 70)
    print("REDDIT OPPORTUNITY FINDER — HealthCalculators.xyz")
    print("=" * 70)

    all_opportunities = []

    for opp in OPPORTUNITIES:
        sub = opp["sub"]
        print(f"\n--- r/{sub} ---")

        for query in opp["queries"]:
            try:
                posts = search_subreddit(token, sub, query, sort="new", time="week", limit=5)
                for post in posts:
                    # Score opportunity: recent + comments (engagement) + relevant
                    score = post["comments"] * 2 + post["score"]
                    calc_links = [CALCULATOR_MAP[c] for c in opp["calcs"] if c in CALCULATOR_MAP]
                    all_opportunities.append({
                        "sub": sub,
                        "query": query,
                        "title": post["title"],
                        "url": post["url"],
                        "comments": post["comments"],
                        "post_score": post["score"],
                        "opp_score": score,
                        "relevant_calcs": calc_links,
                        "selftext": post["selftext"],
                    })
            except Exception as e:
                print(f"  Error searching '{query}': {e}")

    # Sort by opportunity score (engagement potential)
    all_opportunities.sort(key=lambda x: x["opp_score"], reverse=True)

    # Deduplicate by URL
    seen = set()
    unique = []
    for opp in all_opportunities:
        if opp["url"] not in seen:
            seen.add(opp["url"])
            unique.append(opp)

    print(f"\n{'=' * 70}")
    print(f"TOP OPPORTUNITIES ({len(unique)} unique threads found)")
    print(f"{'=' * 70}\n")

    for i, opp in enumerate(unique[:20], 1):
        print(f"{i}. [{opp['sub']}] {opp['title']}")
        print(f"   URL: {opp['url']}")
        print(f"   Score: {opp['post_score']} | Comments: {opp['comments']} | Opportunity: {opp['opp_score']}")
        print(f"   Preview: {opp['selftext'][:100]}...")
        print(f"   Relevant calc: {opp['relevant_calcs'][0] if opp['relevant_calcs'] else 'N/A'}")
        print()

    return unique[:20]


def main():
    if len(sys.argv) < 2:
        print(__doc__)
        sys.exit(0)

    cmd = sys.argv[1]
    token = get_token()

    if cmd == "search":
        sub = sys.argv[2].replace("r/", "")
        query = sys.argv[3]
        posts = search_subreddit(token, sub, query)
        for i, p in enumerate(posts, 1):
            print(f"{i}. {p['title']}")
            print(f"   {p['url']}")
            print(f"   Score: {p['score']} | Comments: {p['comments']}")
            print()

    elif cmd == "hot":
        sub = sys.argv[2].replace("r/", "")
        limit = int(sys.argv[3]) if len(sys.argv) > 3 else 10
        posts = get_hot(token, sub, limit)
        for i, p in enumerate(posts, 1):
            print(f"{i}. {p['title']}")
            print(f"   {p['url']}")
            print(f"   Score: {p['score']} | Comments: {p['comments']}")
            print()

    elif cmd == "comments":
        post_id = sys.argv[2]
        comments = get_comments(token, post_id)
        for c in comments:
            print(f"[{c['score']}] u/{c['author']}:")
            print(f"  {c['body']}")
            print()

    elif cmd == "find-opportunities":
        find_opportunities(token)

    else:
        print(f"Unknown command: {cmd}")
        print(__doc__)


if __name__ == "__main__":
    main()
