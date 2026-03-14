#!/usr/bin/env python3
"""Send email notification for content pipeline runs.

Usage:
  python3 tools/notify.py "Subject line" "Body text"

Requires GMAIL_APP_PASSWORD env var (or falls back to hardcoded for local runs).
"""

import os
import smtplib
import sys
from email.mime.text import MIMEText

SENDER = "contact@healthcalculators.xyz"
RECIPIENT = "alistairjdb@gmail.com"
SMTP_HOST = "smtp.gmail.com"
SMTP_PORT = 587


def send_email(subject, body):
    password = os.environ.get("GMAIL_APP_PASSWORD", "buwh oeal rtvu hpuj")

    msg = MIMEText(body)
    msg["Subject"] = subject
    msg["From"] = SENDER
    msg["To"] = RECIPIENT

    try:
        with smtplib.SMTP(SMTP_HOST, SMTP_PORT) as server:
            server.starttls()
            server.login(SENDER, password)
            server.send_message(msg)
        print(f"Email sent to {RECIPIENT}: {subject}")
    except Exception as e:
        print(f"Email failed: {e}")


if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: python3 tools/notify.py 'Subject' 'Body'")
        sys.exit(1)
    send_email(sys.argv[1], sys.argv[2])
