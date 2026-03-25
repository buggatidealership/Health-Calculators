"""
Post a tweet with video to Twitter/X via OAuth 1.0a.
Video upload uses chunked media upload (v1.1 API).
Tweet creation uses v2 API.
"""
import os
import sys
import time
import json
import math
import mimetypes
from requests_oauthlib import OAuth1Session

# OAuth 1.0a credentials
CONSUMER_KEY = "oAk1uuGTIFR8dAhH4MxCMyzT2"
CONSUMER_SECRET = "k24zI9NaklfUITB9XIa0UFVDLYChJOIaHr77QdnCww4HVNLHVZ"
ACCESS_TOKEN = "1909700343082172416-Py9NPaJ1jfENoV1buhDFFTYBfRN4fE"
ACCESS_SECRET = "1U1Fe9AZOVwxJ85uoRevqTrBjB8mDsZa9oU6ALfNub4x5"

oauth = OAuth1Session(
    CONSUMER_KEY,
    client_secret=CONSUMER_SECRET,
    resource_owner_key=ACCESS_TOKEN,
    resource_owner_secret=ACCESS_SECRET,
)

MEDIA_UPLOAD_URL = "https://upload.twitter.com/1.1/media/upload.json"
TWEET_URL = "https://api.x.com/2/tweets"

def upload_video(file_path):
    """Chunked media upload for video files."""
    file_size = os.path.getsize(file_path)
    mime_type = mimetypes.guess_type(file_path)[0] or "video/mp4"

    print(f"Uploading {file_path} ({file_size/1024/1024:.1f} MB, {mime_type})")

    # INIT
    init_data = {
        "command": "INIT",
        "total_bytes": file_size,
        "media_type": mime_type,
        "media_category": "tweet_video",
    }
    resp = oauth.post(MEDIA_UPLOAD_URL, data=init_data)
    if resp.status_code != 202:
        print(f"INIT failed: {resp.status_code} {resp.text}")
        sys.exit(1)
    media_id = resp.json()["media_id_string"]
    print(f"INIT OK, media_id: {media_id}")

    # APPEND (chunked, 4MB chunks) — use multipart file upload
    chunk_size = 4 * 1024 * 1024
    with open(file_path, "rb") as f:
        segment = 0
        bytes_sent = 0
        while True:
            chunk = f.read(chunk_size)
            if not chunk:
                break
            resp = oauth.post(
                MEDIA_UPLOAD_URL,
                data={"command": "APPEND", "media_id": media_id, "segment_index": segment},
                files={"media": ("video.mp4", chunk, mime_type)},
            )
            if resp.status_code not in (200, 204):
                print(f"APPEND segment {segment} failed: {resp.status_code} {resp.text}")
                sys.exit(1)
            bytes_sent += len(chunk)
            segment += 1
            print(f"APPEND segment {segment} OK ({bytes_sent}/{file_size} bytes)")

    # FINALIZE
    resp = oauth.post(MEDIA_UPLOAD_URL, data={"command": "FINALIZE", "media_id": media_id})
    if resp.status_code not in (200, 201):
        print(f"FINALIZE failed: {resp.status_code} {resp.text}")
        sys.exit(1)

    result = resp.json()
    print(f"FINALIZE OK")

    # Check processing status
    if "processing_info" in result:
        state = result["processing_info"]["state"]
        while state in ("pending", "in_progress"):
            wait = result["processing_info"].get("check_after_secs", 5)
            print(f"Processing... waiting {wait}s (state: {state})")
            time.sleep(wait)
            resp = oauth.get(MEDIA_UPLOAD_URL, params={"command": "STATUS", "media_id": media_id})
            result = resp.json()
            state = result.get("processing_info", {}).get("state", "succeeded")

        if state == "failed":
            error = result.get("processing_info", {}).get("error", {})
            print(f"Processing FAILED: {error}")
            sys.exit(1)

    print(f"Video ready: media_id={media_id}")
    return media_id


def tag_urls(text, campaign="organic", medium="social", content=None):
    """Auto-append UTM params to any healthcalculators.xyz URL in the text."""
    import re
    def add_utms(match):
        url = match.group(0)
        sep = "&" if "?" in url else "?"
        utms = f"{sep}utm_source=twitter&utm_medium={medium}&utm_campaign={campaign}"
        if content:
            utms += f"&utm_content={content}"
        return url + utms
    return re.sub(r'healthcalculators\.xyz/[^\s]+', add_utms, text)


def post_tweet(text, media_id=None, reply_to=None):
    """Post a tweet via v2 API. Auto-tags healthcalculators.xyz URLs with UTMs."""
    text = tag_urls(text)
    payload = {"text": text}
    if media_id:
        payload["media"] = {"media_ids": [media_id]}
    if reply_to:
        payload["reply"] = {"in_reply_to_tweet_id": reply_to}

    resp = oauth.post(TWEET_URL, json=payload)
    if resp.status_code != 201:
        print(f"Tweet failed: {resp.status_code} {resp.text}")
        sys.exit(1)

    data = resp.json()["data"]
    tweet_id = data["id"]
    print(f"Tweet posted: https://x.com/GetHealthC/status/{tweet_id}")
    return tweet_id


if __name__ == "__main__":
    import argparse
    parser = argparse.ArgumentParser(description="Post tweet with optional video")
    parser.add_argument("--text", required=True, help="Tweet text")
    parser.add_argument("--video", help="Path to video file")
    parser.add_argument("--reply-to", help="Tweet ID to reply to")
    parser.add_argument("--reply-text", help="Self-reply text (posted after main tweet)")
    args = parser.parse_args()

    media_id = None
    if args.video:
        media_id = upload_video(args.video)

    tweet_id = post_tweet(args.text, media_id=media_id, reply_to=args.reply_to)

    if args.reply_text:
        post_tweet(args.reply_text, reply_to=tweet_id)
