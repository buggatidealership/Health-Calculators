"""
Lightweight request logging middleware for Flask.
Logs requests to SQLite — no IPs stored for privacy.
"""

import os
import sqlite3
import threading
import time
from flask import request, g

DB_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'data')
DB_PATH = os.path.join(DB_DIR, 'request_log.db')

BATCH_SIZE = 10
FLUSH_INTERVAL = 30  # seconds

_buffer = []
_buffer_lock = threading.Lock()
_last_flush = time.time()


def _ensure_db():
    """Create data directory and table if they don't exist."""
    os.makedirs(DB_DIR, exist_ok=True)
    conn = sqlite3.connect(DB_PATH)
    conn.execute('''
        CREATE TABLE IF NOT EXISTS requests (
            id INTEGER PRIMARY KEY,
            timestamp TEXT,
            path TEXT,
            referrer TEXT,
            user_agent TEXT,
            status_code INTEGER,
            response_time_ms REAL
        )
    ''')
    conn.execute('CREATE INDEX IF NOT EXISTS idx_requests_timestamp ON requests(timestamp)')
    conn.execute('CREATE INDEX IF NOT EXISTS idx_requests_path ON requests(path)')
    conn.commit()
    conn.close()


def _flush_buffer():
    """Write buffered entries to SQLite."""
    global _last_flush
    with _buffer_lock:
        if not _buffer:
            return
        entries = list(_buffer)
        _buffer.clear()
        _last_flush = time.time()

    conn = sqlite3.connect(DB_PATH)
    conn.executemany(
        'INSERT INTO requests (timestamp, path, referrer, user_agent, status_code, response_time_ms) '
        'VALUES (?, ?, ?, ?, ?, ?)',
        entries
    )
    conn.commit()
    conn.close()


def _maybe_flush():
    """Flush if batch size reached or interval elapsed."""
    with _buffer_lock:
        should_flush = (
            len(_buffer) >= BATCH_SIZE or
            (time.time() - _last_flush) >= FLUSH_INTERVAL
        )
    if should_flush:
        _flush_buffer()


def init_request_logger(app):
    """Initialize request logging on a Flask app."""
    _ensure_db()

    @app.before_request
    def _log_start():
        if request.path.startswith('/static/'):
            return
        g._request_start = time.time()

    @app.after_request
    def _log_end(response):
        if request.path.startswith('/static/'):
            return response

        start = getattr(g, '_request_start', None)
        elapsed_ms = (time.time() - start) * 1000 if start else 0.0

        entry = (
            time.strftime('%Y-%m-%d %H:%M:%S', time.gmtime()),
            request.path,
            request.referrer or '',
            request.user_agent.string if request.user_agent else '',
            response.status_code,
            round(elapsed_ms, 2),
        )

        with _buffer_lock:
            _buffer.append(entry)

        _maybe_flush()
        return response

    import atexit
    atexit.register(_flush_buffer)


def get_page_stats(days=7):
    """Return top pages by hit count over the last N days.

    Returns a list of dicts: [{'path': '/', 'hits': 123, 'avg_ms': 45.2}, ...]
    """
    if not os.path.exists(DB_PATH):
        return []

    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    rows = conn.execute('''
        SELECT path,
               COUNT(*) as hits,
               ROUND(AVG(response_time_ms), 2) as avg_ms
        FROM requests
        WHERE timestamp >= datetime('now', ? || ' days')
        GROUP BY path
        ORDER BY hits DESC
        LIMIT 50
    ''', (str(-days),)).fetchall()
    conn.close()
    return [dict(r) for r in rows]
