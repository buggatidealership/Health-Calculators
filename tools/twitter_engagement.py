"""
Check engagement metrics for @GetHealthC tweets.
Pulls recent tweets with public metrics, ranks by performance.
"""
import requests
import json
from datetime import datetime, timezone

BEARER = "AAAAAAAAAAAAAAAAAAAAAGkb8QEAAAAAxSnlvGZ5m0yI3IwW%2BkGjpf%2BamBY%3DsBbZa0mYmKkUq8gs3pYNcsVgiIlk29SqYXoZW9IhvaqQc7j67C"
USER_ID = "1909700343082172416"  # @GetHealthC

headers = {"Authorization": f"Bearer {BEARER}"}

def get_tweets(max_results=20):
    params = {
        "max_results": max_results,
        "tweet.fields": "public_metrics,created_at,text,attachments",
        "media.fields": "type,duration_ms",
        "expansions": "attachments.media_keys",
    }
    resp = requests.get(
        f"https://api.x.com/2/users/{USER_ID}/tweets",
        headers=headers,
        params=params,
    )
    if resp.status_code != 200:
        print(f"Error: {resp.status_code} {resp.text[:200]}")
        return []

    data = resp.json()
    tweets = data.get("data", [])

    # Check which tweets have media
    media_map = {}
    for m in data.get("includes", {}).get("media", []):
        media_map[m["media_key"]] = m.get("type", "unknown")

    for t in tweets:
        media_keys = t.get("attachments", {}).get("media_keys", [])
        t["_has_video"] = any(media_map.get(k) == "video" for k in media_keys)
        t["_type"] = "video" if t["_has_video"] else "text"

        m = t.get("public_metrics", {})
        t["_likes"] = m.get("like_count", 0)
        t["_replies"] = m.get("reply_count", 0)
        t["_retweets"] = m.get("retweet_count", 0)
        t["_impressions"] = m.get("impression_count", 0)
        t["_bookmarks"] = m.get("bookmark_count", 0)

        # Engagement score (replies weighted heavily)
        t["_score"] = t["_likes"] + t["_replies"] * 5 + t["_retweets"] * 3 + t["_bookmarks"] * 3

        # Engagement rate (if impressions available)
        if t["_impressions"] > 0:
            t["_eng_rate"] = (t["_likes"] + t["_replies"] + t["_retweets"]) / t["_impressions"] * 100
        else:
            t["_eng_rate"] = 0

        # Age
        created = datetime.fromisoformat(t["created_at"].replace("Z", "+00:00"))
        age_h = (datetime.now(timezone.utc) - created).total_seconds() / 3600
        t["_age_h"] = age_h

    return tweets


def print_report(tweets):
    if not tweets:
        print("No tweets found.")
        return

    print("=" * 70)
    print(f"@GetHealthC ENGAGEMENT REPORT — {len(tweets)} tweets")
    print("=" * 70)

    # Sort by score
    ranked = sorted(tweets, key=lambda x: x["_score"], reverse=True)

    print("\n--- RANKED BY ENGAGEMENT ---\n")
    for i, t in enumerate(ranked):
        age = f"{t['_age_h']:.0f}h ago"
        typ = f"[{'VIDEO' if t['_has_video'] else 'TEXT'}]"
        eng = f"score={t['_score']}"
        metrics = f"{t['_likes']}L {t['_replies']}R {t['_retweets']}RT {t['_bookmarks']}BM"
        imp = f"{t['_impressions']}imp" if t['_impressions'] > 0 else "no imp data"
        rate = f"{t['_eng_rate']:.1f}%" if t['_eng_rate'] > 0 else ""

        print(f"  #{i+1} {typ} {age} | {metrics} | {imp} {rate} | {eng}")
        print(f"      {t['text'][:120]}")
        print(f"      https://x.com/GetHealthC/status/{t['id']}")
        print()

    # Summary stats
    video_tweets = [t for t in tweets if t["_has_video"]]
    text_tweets = [t for t in tweets if not t["_has_video"]]

    print("\n--- CONTENT TYPE COMPARISON ---\n")
    for label, group in [("VIDEO", video_tweets), ("TEXT", text_tweets)]:
        if not group:
            continue
        avg_likes = sum(t["_likes"] for t in group) / len(group)
        avg_replies = sum(t["_replies"] for t in group) / len(group)
        avg_score = sum(t["_score"] for t in group) / len(group)
        total_imp = sum(t["_impressions"] for t in group)
        print(f"  {label} ({len(group)} tweets):")
        print(f"    Avg likes: {avg_likes:.1f} | Avg replies: {avg_replies:.1f} | Avg score: {avg_score:.1f}")
        print(f"    Total impressions: {total_imp}")
        print()

    # Engagement rate ranking (if impressions available)
    with_imp = [t for t in tweets if t["_impressions"] > 0]
    if with_imp:
        print("\n--- ENGAGEMENT RATE (best converting) ---\n")
        by_rate = sorted(with_imp, key=lambda x: x["_eng_rate"], reverse=True)
        for t in by_rate[:5]:
            typ = "VIDEO" if t["_has_video"] else "TEXT"
            print(f"  {t['_eng_rate']:.1f}% [{typ}] {t['_likes']}L {t['_replies']}R | {t['_impressions']}imp")
            print(f"      {t['text'][:100]}")
            print()


def print_json(tweets):
    """Machine-readable output for hook consumption."""
    import sys
    out = []
    for t in tweets:
        out.append({
            "id": t["id"],
            "text": t["text"][:200],
            "type": t["_type"],
            "likes": t["_likes"],
            "replies": t["_replies"],
            "retweets": t["_retweets"],
            "impressions": t["_impressions"],
            "bookmarks": t["_bookmarks"],
            "score": t["_score"],
            "age_h": round(t["_age_h"], 1),
        })
    json.dump(out, sys.stdout, indent=2)


if __name__ == "__main__":
    import sys
    tweets = get_tweets(20)
    if "--json" in sys.argv:
        print_json(tweets)
    else:
        print_report(tweets)
