"""
Pulse — Telegram health companion bot powered by Claude Haiku.

Handles incoming Telegram messages, routes them through Claude with
health calculator tools, stores conversations in SQLite.
"""

import os
import json
import math
import time
import sqlite3
import threading
import logging
import requests as http_requests

logger = logging.getLogger(__name__)

# ---------------------------------------------------------------------------
# Configuration
# ---------------------------------------------------------------------------

ANTHROPIC_API_KEY = os.environ.get('ANTHROPIC_API_KEY', '')
TELEGRAM_BOT_TOKEN = os.environ.get('TELEGRAM_BOT_TOKEN', '')
ANTHROPIC_API_URL = 'https://api.anthropic.com/v1/messages'
TELEGRAM_API_BASE = f'https://api.telegram.org/bot{TELEGRAM_BOT_TOKEN}'
CLAUDE_MODEL = 'claude-haiku-4-5-20251001'

# Rate limiting: max messages per user per minute
RATE_LIMIT = 10
_rate_store = {}  # {user_id: [timestamp, ...]}
_rate_lock = threading.Lock()

# ---------------------------------------------------------------------------
# Database — conversation storage
# ---------------------------------------------------------------------------

DB_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'data')
DB_PATH = os.path.join(DB_DIR, 'pulse_conversations.db')


def _ensure_db():
    """Create the conversations table if it doesn't exist."""
    os.makedirs(DB_DIR, exist_ok=True)
    conn = sqlite3.connect(DB_PATH)
    conn.execute('''
        CREATE TABLE IF NOT EXISTS pulse_conversations (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            telegram_user_id TEXT,
            user_message TEXT,
            bot_response TEXT,
            tools_used TEXT,
            source_page TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    ''')
    conn.execute('CREATE INDEX IF NOT EXISTS idx_pulse_user ON pulse_conversations(telegram_user_id)')
    conn.execute('CREATE INDEX IF NOT EXISTS idx_pulse_created ON pulse_conversations(created_at)')
    conn.commit()
    conn.close()


def _store_conversation(user_id, user_message, bot_response, tools_used=None, source_page=None):
    """Store a conversation pair in SQLite."""
    try:
        conn = sqlite3.connect(DB_PATH)
        conn.execute(
            'INSERT INTO pulse_conversations (telegram_user_id, user_message, bot_response, tools_used, source_page) '
            'VALUES (?, ?, ?, ?, ?)',
            (str(user_id), user_message, bot_response,
             json.dumps(tools_used) if tools_used else None,
             source_page)
        )
        conn.commit()
        conn.close()
    except Exception as e:
        logger.error(f"Failed to store conversation: {e}")


# Initialize DB on import
_ensure_db()

# ---------------------------------------------------------------------------
# Rate limiting
# ---------------------------------------------------------------------------


def _check_rate_limit(user_id):
    """Returns True if the user is within rate limits, False if exceeded."""
    now = time.time()
    uid = str(user_id)
    with _rate_lock:
        if uid not in _rate_store:
            _rate_store[uid] = []
        # Remove timestamps older than 60 seconds
        _rate_store[uid] = [t for t in _rate_store[uid] if now - t < 60]
        if len(_rate_store[uid]) >= RATE_LIMIT:
            return False
        _rate_store[uid].append(now)
        return True


# ---------------------------------------------------------------------------
# Telegram helpers
# ---------------------------------------------------------------------------


def send_telegram_message(chat_id, text, parse_mode='Markdown'):
    """Send a message to a Telegram chat."""
    if not TELEGRAM_BOT_TOKEN:
        logger.error("TELEGRAM_BOT_TOKEN not set")
        return
    url = f'{TELEGRAM_API_BASE}/sendMessage'
    payload = {
        'chat_id': chat_id,
        'text': text,
    }
    if parse_mode:
        payload['parse_mode'] = parse_mode
    try:
        resp = http_requests.post(url, json=payload, timeout=10)
        if resp.status_code != 200:
            # Retry without parse_mode if Markdown fails
            if parse_mode:
                payload.pop('parse_mode', None)
                http_requests.post(url, json=payload, timeout=10)
            else:
                logger.error(f"Telegram send failed: {resp.status_code} {resp.text}")
    except Exception as e:
        logger.error(f"Telegram send error: {e}")


def send_telegram_chat_action(chat_id, action='typing'):
    """Show typing indicator."""
    if not TELEGRAM_BOT_TOKEN:
        return
    url = f'{TELEGRAM_API_BASE}/sendChatAction'
    try:
        http_requests.post(url, json={'chat_id': chat_id, 'action': action}, timeout=5)
    except Exception:
        pass


# ---------------------------------------------------------------------------
# Calculator tool implementations
# ---------------------------------------------------------------------------


def calculate_tdee(age, sex, height_cm, weight_kg, activity_level):
    """Calculate Total Daily Energy Expenditure using Mifflin-St Jeor equation."""
    if sex.lower() in ('male', 'm'):
        bmr = 10 * weight_kg + 6.25 * height_cm - 5 * age + 5
    else:
        bmr = 10 * weight_kg + 6.25 * height_cm - 5 * age - 161

    multipliers = {
        'sedentary': 1.2,
        'lightly_active': 1.375,
        'moderately_active': 1.55,
        'very_active': 1.725,
        'extremely_active': 1.9,
    }
    # Normalize activity level
    level = activity_level.lower().replace(' ', '_').replace('-', '_')
    multiplier = multipliers.get(level, 1.55)  # default to moderate

    tdee = round(bmr * multiplier)
    return {
        'bmr': round(bmr),
        'tdee': tdee,
        'activity_multiplier': multiplier,
        'equation': 'Mifflin-St Jeor',
        'deficit_500': tdee - 500,
        'surplus_500': tdee + 500,
    }


def calculate_bmi(height_cm, weight_kg):
    """Calculate BMI and return category."""
    height_m = height_cm / 100
    bmi = round(weight_kg / (height_m ** 2), 1)

    if bmi < 18.5:
        category = 'Underweight'
    elif bmi < 25:
        category = 'Normal weight'
    elif bmi < 30:
        category = 'Overweight'
    else:
        category = 'Obese'

    return {
        'bmi': bmi,
        'category': category,
        'healthy_range': '18.5 - 24.9',
    }


def calculate_caffeine(mg, hours_elapsed):
    """Calculate remaining caffeine after elapsed time. Half-life = 5 hours."""
    half_life = 5.0
    remaining = mg * (0.5 ** (hours_elapsed / half_life))
    return {
        'initial_mg': mg,
        'hours_elapsed': hours_elapsed,
        'remaining_mg': round(remaining, 1),
        'percent_remaining': round((remaining / mg) * 100, 1) if mg > 0 else 0,
        'half_life_hours': half_life,
    }


def calculate_body_fat(sex, waist_cm, neck_cm, height_cm, hip_cm=None):
    """Estimate body fat percentage using the U.S. Navy method."""
    if sex.lower() in ('male', 'm'):
        if waist_cm <= neck_cm:
            return {'error': 'Waist must be larger than neck for male calculation.'}
        bf = 495 / (1.0324 - 0.19077 * math.log10(waist_cm - neck_cm) + 0.15456 * math.log10(height_cm)) - 450
    else:
        if hip_cm is None:
            return {'error': 'Hip measurement is required for female body fat calculation.'}
        if (waist_cm + hip_cm) <= neck_cm:
            return {'error': 'Waist + hip must be larger than neck for female calculation.'}
        bf = 495 / (1.29579 - 0.35004 * math.log10(waist_cm + hip_cm - neck_cm) + 0.22100 * math.log10(height_cm)) - 450

    bf = round(max(bf, 2.0), 1)  # floor at 2%

    # Category
    if sex.lower() in ('male', 'm'):
        if bf < 6:
            cat = 'Essential fat'
        elif bf < 14:
            cat = 'Athletic'
        elif bf < 18:
            cat = 'Fitness'
        elif bf < 25:
            cat = 'Average'
        else:
            cat = 'Above average'
    else:
        if bf < 14:
            cat = 'Essential fat'
        elif bf < 21:
            cat = 'Athletic'
        elif bf < 25:
            cat = 'Fitness'
        elif bf < 32:
            cat = 'Average'
        else:
            cat = 'Above average'

    return {
        'body_fat_percent': bf,
        'category': cat,
        'method': 'U.S. Navy',
    }


# Tool definitions for Claude API
CALCULATOR_TOOLS = [
    {
        'name': 'calculate_tdee',
        'description': 'Calculate Total Daily Energy Expenditure (TDEE) — the number of calories a person burns per day based on their stats and activity level. Use when someone asks about calorie needs, weight loss/gain calories, or maintenance calories.',
        'input_schema': {
            'type': 'object',
            'properties': {
                'age': {'type': 'integer', 'description': 'Age in years'},
                'sex': {'type': 'string', 'enum': ['male', 'female'], 'description': 'Biological sex'},
                'height_cm': {'type': 'number', 'description': 'Height in centimeters'},
                'weight_kg': {'type': 'number', 'description': 'Weight in kilograms'},
                'activity_level': {
                    'type': 'string',
                    'enum': ['sedentary', 'lightly_active', 'moderately_active', 'very_active', 'extremely_active'],
                    'description': 'Activity level: sedentary (desk job), lightly_active (1-3 days/week exercise), moderately_active (3-5 days/week), very_active (6-7 days/week), extremely_active (athlete/physical job)'
                },
            },
            'required': ['age', 'sex', 'height_cm', 'weight_kg', 'activity_level'],
        },
    },
    {
        'name': 'calculate_bmi',
        'description': 'Calculate Body Mass Index (BMI) from height and weight. Use when someone asks about their BMI, weight status, or whether their weight is healthy.',
        'input_schema': {
            'type': 'object',
            'properties': {
                'height_cm': {'type': 'number', 'description': 'Height in centimeters'},
                'weight_kg': {'type': 'number', 'description': 'Weight in kilograms'},
            },
            'required': ['height_cm', 'weight_kg'],
        },
    },
    {
        'name': 'calculate_caffeine',
        'description': 'Calculate how much caffeine remains in the body after a given number of hours. Uses a 5-hour half-life. Use when someone asks about caffeine metabolism, how long caffeine lasts, or whether they should have coffee before bed.',
        'input_schema': {
            'type': 'object',
            'properties': {
                'mg': {'type': 'number', 'description': 'Initial caffeine amount in milligrams (e.g., 95 for a cup of coffee)'},
                'hours_elapsed': {'type': 'number', 'description': 'Hours since caffeine was consumed'},
            },
            'required': ['mg', 'hours_elapsed'],
        },
    },
    {
        'name': 'calculate_body_fat',
        'description': 'Estimate body fat percentage using the U.S. Navy method. Requires waist, neck, and height measurements (and hip for females). Use when someone asks about body fat percentage.',
        'input_schema': {
            'type': 'object',
            'properties': {
                'sex': {'type': 'string', 'enum': ['male', 'female'], 'description': 'Biological sex'},
                'waist_cm': {'type': 'number', 'description': 'Waist circumference in centimeters (at navel for males, narrowest point for females)'},
                'neck_cm': {'type': 'number', 'description': 'Neck circumference in centimeters'},
                'height_cm': {'type': 'number', 'description': 'Height in centimeters'},
                'hip_cm': {'type': 'number', 'description': 'Hip circumference in centimeters (required for females, optional for males)'},
            },
            'required': ['sex', 'waist_cm', 'neck_cm', 'height_cm'],
        },
    },
]

# Map tool names to functions
TOOL_FUNCTIONS = {
    'calculate_tdee': calculate_tdee,
    'calculate_bmi': calculate_bmi,
    'calculate_caffeine': calculate_caffeine,
    'calculate_body_fat': calculate_body_fat,
}

# ---------------------------------------------------------------------------
# System prompt
# ---------------------------------------------------------------------------

SYSTEM_PROMPT = """You are Pulse, a health companion. You help people understand their health numbers.

Rules:
- Use tool framing: "Your TDEE is 2,450 calories" not "You should eat 2,450 calories"
- Never diagnose, prescribe, or give medical advice
- When a calculation would help, use the available tools
- Be warm, precise, and direct
- If you don't know something, say so
- Keep responses concise — this is a chat, not an essay
- When someone gives measurements in imperial (pounds, feet/inches), convert to metric before using tools. 1 lb = 0.4536 kg, 1 inch = 2.54 cm, 1 foot = 30.48 cm.
- Format responses for Telegram (use Markdown sparingly — bold with *asterisks* for key numbers)

You have access to health calculators for TDEE, BMI, caffeine half-life, and body fat percentage."""

# ---------------------------------------------------------------------------
# Claude API integration
# ---------------------------------------------------------------------------


def _call_claude(messages, tools=None):
    """Call the Anthropic Messages API. Returns the full response dict."""
    if not ANTHROPIC_API_KEY:
        return None

    headers = {
        'x-api-key': ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
        'content-type': 'application/json',
    }
    payload = {
        'model': CLAUDE_MODEL,
        'max_tokens': 1024,
        'system': SYSTEM_PROMPT,
        'messages': messages,
    }
    if tools:
        payload['tools'] = tools

    try:
        resp = http_requests.post(ANTHROPIC_API_URL, headers=headers, json=payload, timeout=30)
        if resp.status_code == 200:
            return resp.json()
        else:
            logger.error(f"Claude API error: {resp.status_code} {resp.text[:500]}")
            return None
    except Exception as e:
        logger.error(f"Claude API request failed: {e}")
        return None


def _execute_tool(name, input_args):
    """Execute a calculator tool and return the result."""
    func = TOOL_FUNCTIONS.get(name)
    if not func:
        return {'error': f'Unknown tool: {name}'}
    try:
        return func(**input_args)
    except Exception as e:
        return {'error': str(e)}


def get_pulse_response(user_message):
    """
    Send a user message through Claude with calculator tools.
    Handles the tool_use loop: Claude may request tools, we execute them
    and send results back.

    Returns (response_text, tools_used_list).
    """
    messages = [{'role': 'user', 'content': user_message}]
    tools_used = []

    # Up to 3 rounds of tool use
    for _ in range(3):
        result = _call_claude(messages, tools=CALCULATOR_TOOLS)
        if not result:
            return ("I'm having trouble connecting right now. Please try again in a moment.", [])

        stop_reason = result.get('stop_reason', '')
        content_blocks = result.get('content', [])

        if stop_reason == 'tool_use':
            # Process tool calls
            tool_results = []
            for block in content_blocks:
                if block.get('type') == 'tool_use':
                    tool_name = block['name']
                    tool_input = block['input']
                    tool_id = block['id']
                    tools_used.append(tool_name)
                    tool_result = _execute_tool(tool_name, tool_input)
                    tool_results.append({
                        'type': 'tool_result',
                        'tool_use_id': tool_id,
                        'content': json.dumps(tool_result),
                    })

            # Add assistant message (with tool_use blocks) and tool results
            messages.append({'role': 'assistant', 'content': content_blocks})
            messages.append({'role': 'user', 'content': tool_results})
        else:
            # Extract text from response
            text_parts = []
            for block in content_blocks:
                if block.get('type') == 'text':
                    text_parts.append(block['text'])
            response_text = '\n'.join(text_parts) if text_parts else "I couldn't generate a response. Please try again."
            return (response_text, tools_used)

    # If we exhausted tool rounds, extract whatever text we have
    return ("I ran into an issue processing your request. Please try a simpler question.", tools_used)


# ---------------------------------------------------------------------------
# Main handler — called from Flask webhook
# ---------------------------------------------------------------------------


def handle_telegram_update(update_data):
    """
    Process an incoming Telegram update. Runs in a background thread
    so the webhook can return 200 immediately.
    """
    message = update_data.get('message')
    if not message:
        return

    chat_id = message.get('chat', {}).get('id')
    user_id = message.get('from', {}).get('id')
    text = message.get('text', '').strip()

    if not chat_id or not text:
        return

    # Handle /start command
    if text == '/start':
        welcome = (
            "Hey! I'm *Pulse*, your health companion.\n\n"
            "Ask me anything about health numbers — calories, BMI, caffeine, body fat, and more.\n\n"
            "Try:\n"
            "- \"How many calories do I burn per day? I'm 30, male, 180cm, 80kg, moderately active\"\n"
            "- \"What's my BMI? 175cm, 70kg\"\n"
            "- \"I had 200mg of caffeine 4 hours ago. How much is left?\"\n"
            "- \"What is a healthy body fat percentage?\"\n\n"
            "I have calculators built in, so I can crunch the numbers for you."
        )
        send_telegram_message(chat_id, welcome)
        _store_conversation(user_id, '/start', welcome)
        return

    # Handle /help command
    if text == '/help':
        help_text = (
            "*What I can do:*\n\n"
            "- Calculate your *TDEE* (daily calorie needs)\n"
            "- Calculate your *BMI*\n"
            "- Track *caffeine* remaining in your system\n"
            "- Estimate *body fat* percentage\n"
            "- Answer general health questions\n\n"
            "Just ask naturally — I'll figure out the rest.\n\n"
            "Powered by healthcalculators.xyz"
        )
        send_telegram_message(chat_id, help_text)
        _store_conversation(user_id, '/help', help_text)
        return

    # Rate limit check
    if not _check_rate_limit(user_id):
        send_telegram_message(
            chat_id,
            "You're sending messages too fast. Please wait a moment and try again.",
            parse_mode=None
        )
        return

    # Show typing indicator
    send_telegram_chat_action(chat_id)

    # Get response from Claude
    response_text, tools_used = get_pulse_response(text)

    # Send response
    send_telegram_message(chat_id, response_text)

    # Store conversation
    _store_conversation(user_id, text, response_text, tools_used=tools_used if tools_used else None)
