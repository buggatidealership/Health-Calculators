#!/usr/bin/env python3
"""
Setup script for the Pulse Telegram bot.

Usage:
    TELEGRAM_BOT_TOKEN="your-token" python3 tools/setup_telegram_bot.py

This script sets the webhook URL so Telegram forwards messages
to the Flask app's /webhook/telegram endpoint.

HOW TO CREATE THE BOT:
1. Open Telegram and search for @BotFather
2. Send /newbot
3. Choose a name (e.g., "Pulse Health")
4. Choose a username (must end in 'bot', e.g., "PulseHealthBot")
5. BotFather will give you a token — set it as TELEGRAM_BOT_TOKEN env var
6. Run this script to register the webhook
7. Add TELEGRAM_BOT_TOKEN to Render environment variables
"""

import os
import sys
import requests

BOT_TOKEN = os.environ.get('TELEGRAM_BOT_TOKEN', '')
WEBHOOK_URL = 'https://healthcalculators.xyz/webhook/telegram'


def main():
    if not BOT_TOKEN:
        print("ERROR: TELEGRAM_BOT_TOKEN environment variable not set.")
        print()
        print("To create a bot:")
        print("1. Open Telegram, search for @BotFather")
        print("2. Send /newbot and follow the prompts")
        print("3. Copy the token BotFather gives you")
        print("4. Run: TELEGRAM_BOT_TOKEN='your-token' python3 tools/setup_telegram_bot.py")
        sys.exit(1)

    base = f'https://api.telegram.org/bot{BOT_TOKEN}'

    # Get bot info
    print("Checking bot identity...")
    resp = requests.get(f'{base}/getMe', timeout=10)
    if resp.status_code != 200:
        print(f"ERROR: Invalid bot token. Status {resp.status_code}")
        sys.exit(1)

    bot_info = resp.json().get('result', {})
    print(f"Bot: @{bot_info.get('username')} ({bot_info.get('first_name')})")

    # Set webhook
    print(f"\nSetting webhook to: {WEBHOOK_URL}")
    resp = requests.post(f'{base}/setWebhook', json={
        'url': WEBHOOK_URL,
        'allowed_updates': ['message'],  # Only receive message updates
    }, timeout=10)

    result = resp.json()
    if result.get('ok'):
        print("Webhook set successfully.")
    else:
        print(f"ERROR: {result.get('description', 'Unknown error')}")
        sys.exit(1)

    # Verify webhook
    print("\nVerifying webhook...")
    resp = requests.get(f'{base}/getWebhookInfo', timeout=10)
    info = resp.json().get('result', {})
    print(f"  URL: {info.get('url')}")
    print(f"  Pending updates: {info.get('pending_update_count', 0)}")
    if info.get('last_error_message'):
        print(f"  Last error: {info['last_error_message']}")

    print("\nDone! Your bot is ready to receive messages.")
    print(f"Open Telegram and search for @{bot_info.get('username')} to test.")


if __name__ == '__main__':
    main()
