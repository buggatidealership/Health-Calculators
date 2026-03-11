#!/usr/bin/env python3
"""Manage GitHub repository secrets via API.

Usage:
  python3 tools/github_secrets.py set SECRET_NAME "secret_value"
  python3 tools/github_secrets.py list
  python3 tools/github_secrets.py delete SECRET_NAME
"""

import base64
import json
import sys
import urllib.request

from nacl import encoding, public  # pip install pynacl

REPO = "buggatidealership/Health-Calculators"
PAT = os.environ.get("GH_PAT", "")
API = f"https://api.github.com/repos/{REPO}/actions/secrets"
HEADERS = {
    "Authorization": f"token {PAT}",
    "Accept": "application/vnd.github+json",
    "Content-Type": "application/json",
}


def _request(url, method="GET", data=None):
    req = urllib.request.Request(url, headers=HEADERS, method=method)
    if data:
        req.data = json.dumps(data).encode()
    try:
        resp = urllib.request.urlopen(req, timeout=30)
        body = resp.read().decode()
        return resp.status, json.loads(body) if body else {}
    except urllib.error.HTTPError as e:
        body = e.read().decode()
        return e.code, json.loads(body) if body else {}


def _get_public_key():
    status, data = _request(f"{API}/public-key")
    return data["key_id"], data["key"]


def _encrypt(public_key_b64, secret_value):
    public_key = public.PublicKey(
        public_key_b64.encode("utf-8"), encoding.Base64Encoder
    )
    sealed_box = public.SealedBox(public_key)
    encrypted = sealed_box.encrypt(secret_value.encode("utf-8"))
    return base64.b64encode(encrypted).decode("utf-8")


def set_secret(name, value):
    key_id, pub_key = _get_public_key()
    encrypted = _encrypt(pub_key, value)
    status, resp = _request(
        f"{API}/{name}",
        method="PUT",
        data={"encrypted_value": encrypted, "key_id": key_id},
    )
    if status in (201, 204):
        print(f"Secret '{name}' set successfully.")
    else:
        print(f"Failed to set '{name}': HTTP {status} — {resp}")


def list_secrets():
    status, data = _request(API)
    for s in data.get("secrets", []):
        print(f"  {s['name']} (updated: {s['updated_at'][:10]})")


def delete_secret(name):
    status, _ = _request(f"{API}/{name}", method="DELETE")
    if status == 204:
        print(f"Secret '{name}' deleted.")
    else:
        print(f"Failed to delete '{name}': HTTP {status}")


if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python3 tools/github_secrets.py [set|list|delete] ...")
        sys.exit(1)

    cmd = sys.argv[1]
    if cmd == "list":
        list_secrets()
    elif cmd == "set" and len(sys.argv) == 4:
        set_secret(sys.argv[2], sys.argv[3])
    elif cmd == "delete" and len(sys.argv) == 3:
        delete_secret(sys.argv[2])
    else:
        print("Usage:")
        print('  python3 tools/github_secrets.py set SECRET_NAME "value"')
        print("  python3 tools/github_secrets.py list")
        print("  python3 tools/github_secrets.py delete SECRET_NAME")
