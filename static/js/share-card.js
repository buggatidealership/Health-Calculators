/**
 * Share Card System v2 — Generates dark, bold, shareable result cards.
 * Optimized for Twitter/X native image posting (1200x675, 16:9).
 *
 * Design: Dark background, hero number, percentile context, subtle branding.
 * Inspired by Spotify Wrapped card format — one insight, one visual statement.
 *
 * Options:
 *   calculatorName: string — display name
 *   resultLabel: string — e.g. "Your TDEE"
 *   resultValue: string — e.g. "2,340"
 *   resultUnit: string — e.g. "kcal/day" (shown smaller beside value)
 *   resultCategory: string — e.g. "Moderately Active"
 *   categoryColor: string — hex color for semantic meaning
 *   context: string — e.g. "Higher than 65% of adults your age" (optional)
 *   details: array of {label, value} — key input details
 *   url: string — page URL for sharing (without protocol)
 *   sensitive: boolean — if true, share text omits actual result value
 *   containerId: string — optional, defaults to 'share-card-output'
 */

(function() {
  'use strict';

  // Card dimensions — Twitter-optimized 16:9
  var CARD_W = 1200;
  var CARD_H = 675;

  // Brand colors
  var BG_DARK = '#1b1b32';
  var BG_GRADIENT_END = '#0f2027';
  var ACCENT = '#0e7a7e';
  var TEXT_WHITE = '#ffffff';
  var TEXT_MUTED = 'rgba(255,255,255,0.5)';
  var TEXT_LIGHT = 'rgba(255,255,255,0.75)';
  var FONT = 'DM Sans, system-ui, -apple-system, sans-serif';

  // Semantic colors (bright on dark)
  var COLORS = {
    accent: '#2dd4bf',   // teal-bright
    good: '#4ade80',     // green-bright
    warning: '#fbbf24',  // amber-bright
    danger: '#f87171'    // red-bright
  };

  /**
   * Map a category color from the page's light-mode palette to a bright-on-dark variant.
   */
  function brightColor(hex) {
    if (!hex) return COLORS.accent;
    hex = hex.toLowerCase();
    if (hex.indexOf('16a34a') > -1 || hex.indexOf('1a8a4a') > -1 || hex.indexOf('green') > -1) return COLORS.good;
    if (hex.indexOf('d97706') > -1 || hex.indexOf('c27a0e') > -1 || hex.indexOf('orange') > -1 || hex.indexOf('amber') > -1) return COLORS.warning;
    if (hex.indexOf('dc2626') > -1 || hex.indexOf('c03030') > -1 || hex.indexOf('red') > -1) return COLORS.danger;
    return COLORS.accent;
  }

  /**
   * Draw rounded rectangle.
   */
  function roundRect(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.quadraticCurveTo(x + w, y, x + w, y + r);
    ctx.lineTo(x + w, y + h - r);
    ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    ctx.lineTo(x + r, y + h);
    ctx.quadraticCurveTo(x, y + h, x, y + h - r);
    ctx.lineTo(x, y + r);
    ctx.quadraticCurveTo(x, y, x + r, y);
    ctx.closePath();
  }

  /**
   * Draw the share card on canvas.
   */
  function drawCard(canvas, opts) {
    var ctx = canvas.getContext('2d');
    canvas.width = CARD_W;
    canvas.height = CARD_H;

    var color = brightColor(opts.categoryColor);

    // -- Background: dark gradient --
    var grad = ctx.createLinearGradient(0, 0, CARD_W, CARD_H);
    grad.addColorStop(0, BG_DARK);
    grad.addColorStop(1, BG_GRADIENT_END);
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, CARD_W, CARD_H);

    // -- Subtle grid texture --
    ctx.strokeStyle = 'rgba(255,255,255,0.03)';
    ctx.lineWidth = 1;
    for (var gx = 0; gx < CARD_W; gx += 60) {
      ctx.beginPath(); ctx.moveTo(gx, 0); ctx.lineTo(gx, CARD_H); ctx.stroke();
    }
    for (var gy = 0; gy < CARD_H; gy += 60) {
      ctx.beginPath(); ctx.moveTo(0, gy); ctx.lineTo(CARD_W, gy); ctx.stroke();
    }

    // -- Accent glow (top-right) --
    var glow = ctx.createRadialGradient(CARD_W * 0.8, CARD_H * 0.15, 0, CARD_W * 0.8, CARD_H * 0.15, 350);
    glow.addColorStop(0, color.replace(')', ',0.12)').replace('rgb', 'rgba'));
    glow.addColorStop(1, 'transparent');
    ctx.fillStyle = glow;
    ctx.fillRect(0, 0, CARD_W, CARD_H);

    // -- Top: Calculator name (small, muted) --
    ctx.textAlign = 'left';
    ctx.textBaseline = 'top';
    ctx.font = '600 20px ' + FONT;
    ctx.fillStyle = TEXT_MUTED;
    ctx.fillText(opts.calculatorName.toUpperCase(), 64, 48);

    // -- Heartbeat accent line under name --
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.globalAlpha = 0.4;
    ctx.beginPath();
    ctx.moveTo(64, 80);
    ctx.lineTo(114, 80);
    ctx.lineTo(122, 70);
    ctx.lineTo(130, 88);
    ctx.lineTo(138, 74);
    ctx.lineTo(144, 80);
    ctx.lineTo(200, 80);
    ctx.stroke();
    ctx.globalAlpha = 1;

    // -- Result label (above the number) --
    ctx.textAlign = 'left';
    ctx.font = '400 26px ' + FONT;
    ctx.fillStyle = TEXT_LIGHT;
    var labelY = 120;
    ctx.fillText(opts.resultLabel, 64, labelY);

    // -- Hero number --
    ctx.font = '800 96px ' + FONT;
    ctx.fillStyle = TEXT_WHITE;
    var numY = labelY + 50;
    var numText = opts.resultValue;
    ctx.fillText(numText, 64, numY);

    // -- Unit (smaller, beside or below number) --
    if (opts.resultUnit) {
      var numWidth = ctx.measureText(numText).width;
      ctx.font = '400 32px ' + FONT;
      ctx.fillStyle = TEXT_MUTED;
      ctx.fillText(opts.resultUnit, 64 + numWidth + 16, numY + 68);
    }

    // -- Category badge --
    if (opts.resultCategory) {
      var badgeY = numY + (opts.resultUnit ? 108 : 90);
      var badgeText = opts.resultCategory;

      ctx.font = '600 22px ' + FONT;
      var badgeWidth = ctx.measureText(badgeText).width;
      var badgePadH = 20;
      var badgePadV = 10;

      // Badge background — always use globalAlpha for consistency
      ctx.globalAlpha = 0.15;
      ctx.fillStyle = color;
      roundRect(ctx, 64, badgeY - badgePadV, badgeWidth + badgePadH * 2, 36, 8);
      ctx.fill();
      ctx.globalAlpha = 1;

      // Badge text
      ctx.fillStyle = color;
      ctx.textBaseline = 'middle';
      ctx.fillText(badgeText, 64 + badgePadH, badgeY + 8);
      ctx.textBaseline = 'top';
    }

    // -- Context line (percentile/comparison) --
    if (opts.context) {
      var ctxY = CARD_H - 140;
      ctx.font = '400 22px ' + FONT;
      ctx.fillStyle = TEXT_LIGHT;
      ctx.fillText(opts.context, 64, ctxY);
    }

    // -- Details chips (bottom-left) --
    if (opts.details && opts.details.length > 0) {
      var chipY = CARD_H - 90;
      var chipX = 64;
      ctx.font = '500 18px ' + FONT;

      for (var i = 0; i < Math.min(opts.details.length, 4); i++) {
        var chipText = opts.details[i].label + ': ' + opts.details[i].value;
        var cw = ctx.measureText(chipText).width + 24;

        // Chip background
        ctx.fillStyle = 'rgba(255,255,255,0.08)';
        roundRect(ctx, chipX, chipY, cw, 32, 6);
        ctx.fill();

        // Chip text
        ctx.fillStyle = TEXT_LIGHT;
        ctx.textBaseline = 'middle';
        ctx.fillText(chipText, chipX + 12, chipY + 16);
        ctx.textBaseline = 'top';

        chipX += cw + 10;
      }
    }

    // -- Branding (bottom-right, subtle) --
    ctx.textAlign = 'right';
    ctx.textBaseline = 'bottom';

    // "Powered by Pulse" text
    ctx.font = '500 18px ' + FONT;
    ctx.fillStyle = TEXT_MUTED;
    ctx.fillText('Powered by Pulse', CARD_W - 64, CARD_H - 56);

    // Site URL
    ctx.font = '400 16px ' + FONT;
    ctx.fillStyle = 'rgba(255,255,255,0.3)';
    ctx.fillText('healthcalculators.xyz', CARD_W - 64, CARD_H - 32);

    // -- Top accent line --
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, CARD_W, 4);
  }

  /**
   * Build conversational share text optimized for engagement.
   */
  function buildShareText(opts, platform) {
    var url = 'https://' + (opts.url || 'healthcalculators.xyz');
    var via = ' via @GetHealthC';

    if (opts.sensitive) {
      if (platform === 'twitter') {
        return 'I just used the ' + opts.calculatorName + ' \u2014 check yours' + via;
      }
      return 'I just used the ' + opts.calculatorName + ' \u2014 check yours: ' + url;
    }

    // Conversational format for Twitter (hook-first, no calculator name in text)
    if (platform === 'twitter') {
      var hook = 'My ' + opts.resultLabel.replace(/^Your\s*/i, '').toLowerCase() +
        ' is ' + opts.resultValue;
      if (opts.resultUnit) hook += ' ' + opts.resultUnit;
      hook += '. What\u2019s yours?' + via;
      return hook;
    }

    // Other platforms: include URL
    var result = opts.calculatorName + ': ' + opts.resultLabel + ' is ' +
      opts.resultValue + (opts.resultUnit ? ' ' + opts.resultUnit : '') +
      (opts.resultCategory ? ' (' + opts.resultCategory + ')' : '') + '.';
    return result + ' Check yours: ' + url;
  }

  /**
   * Track share event with GA4 via consent queue.
   */
  function trackShare(method, calculatorName) {
    if (typeof hcTrackEvent === 'function') {
      hcTrackEvent('share', {
        method: method,
        content_type: 'calculator_result',
        content_id: calculatorName
      });
    } else if (typeof gtag === 'function') {
      gtag('event', 'share', {
        method: method,
        content_type: 'calculator_result',
        content_id: calculatorName
      });
    }
  }

  /**
   * Create share buttons.
   */
  function createShareButtons(container, canvas, opts) {
    var btnWrap = document.createElement('div');
    btnWrap.className = 'share-card-buttons';

    var url = 'https://' + (opts.url || 'healthcalculators.xyz');
    var text = buildShareText(opts);
    var encodedText = encodeURIComponent(text);
    var encodedUrl = encodeURIComponent(url);

    var buttons = [
      {
        label: 'Download',
        icon: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M8 2v8m0 0l-3-3m3 3l3-3M2 12v1a1 1 0 001 1h10a1 1 0 001-1v-1"/></svg>',
        cls: 'share-btn-download',
        action: function() {
          var link = document.createElement('a');
          link.download = opts.calculatorName.toLowerCase().replace(/\s+/g, '-') + '-result.png';
          link.href = canvas.toDataURL('image/png');
          link.click();
          trackShare('download_image', opts.calculatorName);
        }
      },
      {
        label: 'Copy Link',
        icon: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6.5 9.5l3-3M5.5 7L4 8.5a2.12 2.12 0 003 3L8.5 10M10.5 9l1.5-1.5a2.12 2.12 0 00-3-3L7.5 6"/></svg>',
        cls: 'share-btn-copy',
        action: function(btn) {
          var copyUrl = url;
          if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(copyUrl).then(function() {
              showCopied(btn);
            });
          } else {
            var ta = document.createElement('textarea');
            ta.value = copyUrl;
            ta.style.position = 'fixed';
            ta.style.opacity = '0';
            document.body.appendChild(ta);
            ta.select();
            document.execCommand('copy');
            document.body.removeChild(ta);
            showCopied(btn);
          }
          trackShare('copy_link', opts.calculatorName);
        }
      },
      {
        label: 'Post on X',
        icon: '<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M9.52 6.775L15.48 0h-1.41L8.895 5.882 4.764 0H0l6.247 9.09L0 16h1.41l5.463-6.352L11.236 16H16L9.52 6.775zm-1.934 2.248l-.633-.906L1.92 1.04h2.17l4.065 5.816.633.906 5.284 7.558h-2.17L7.586 9.023z"/></svg>',
        cls: 'share-btn-twitter',
        action: function() {
          var twitterText = encodeURIComponent(buildShareText(opts, 'twitter'));
          window.open('https://twitter.com/intent/tweet?text=' + twitterText, '_blank', 'width=550,height=420');
          trackShare('twitter', opts.calculatorName);
        }
      },
      {
        label: 'WhatsApp',
        icon: '<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M13.6 2.3A7.9 7.9 0 008 0C3.6 0 .1 3.5.1 7.9a7.8 7.8 0 001.1 4L0 16l4.2-1.1a7.9 7.9 0 003.8 1A7.9 7.9 0 0016 7.9a7.9 7.9 0 00-2.4-5.6zM8 14.5a6.5 6.5 0 01-3.3-.9l-.2-.1-2.5.7.7-2.4-.2-.3A6.5 6.5 0 018 1.4a6.5 6.5 0 010 13.1zm3.6-4.9c-.2-.1-1.2-.6-1.3-.7-.2-.1-.3-.1-.4.1s-.5.7-.6.8-.2.1-.4 0a5 5 0 01-1.5-1 5.6 5.6 0 01-1-1.3c-.1-.2 0-.3.1-.4l.3-.3.2-.3v-.3l-.7-1.6c-.2-.4-.4-.4-.5-.4h-.4a.8.8 0 00-.6.3 2.4 2.4 0 00-.7 1.8 4.2 4.2 0 00.9 2.2 9.6 9.6 0 003.6 3.2 11 11 0 001.2.4 2.9 2.9 0 001.3.1 2.2 2.2 0 001.4-1 1.7 1.7 0 00.1-1l-.4-.2z"/></svg>',
        cls: 'share-btn-whatsapp',
        action: function() {
          window.open('https://wa.me/?text=' + encodedText, '_blank');
          trackShare('whatsapp', opts.calculatorName);
        }
      },
      {
        label: 'Facebook',
        icon: '<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M16 8a8 8 0 10-9.25 7.9v-5.59H4.72V8h2.03V6.24c0-2 1.2-3.11 3.02-3.11.88 0 1.79.16 1.79.16v1.97h-1a1.16 1.16 0 00-1.3 1.25V8h2.22l-.36 2.31h-1.87v5.6A8 8 0 0016 8z"/></svg>',
        cls: 'share-btn-facebook',
        action: function() {
          window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodedUrl, '_blank', 'width=550,height=420');
          trackShare('facebook', opts.calculatorName);
        }
      }
    ];

    buttons.forEach(function(def) {
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'share-card-btn ' + def.cls;
      btn.innerHTML = def.icon + '<span>' + def.label + '</span>';
      btn.addEventListener('click', function() { def.action(btn); });
      btnWrap.appendChild(btn);
    });

    container.appendChild(btnWrap);
  }

  function showCopied(btn) {
    btn.classList.add('share-card-btn-copied');
    var span = btn.querySelector('span');
    var original = span.textContent;
    span.textContent = 'Copied!';
    setTimeout(function() {
      btn.classList.remove('share-card-btn-copied');
      span.textContent = original;
    }, 2000);
  }

  /**
   * Main entry point.
   */
  function generateShareCard(opts) {
    var containerId = opts.containerId || 'share-card-output';
    var container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';

    var title = document.createElement('div');
    title.className = 'share-card-title';
    title.textContent = 'Share Your Results';
    container.appendChild(title);

    var canvasWrap = document.createElement('div');
    canvasWrap.className = 'share-card-canvas-wrap';
    var canvas = document.createElement('canvas');
    canvasWrap.appendChild(canvas);
    container.appendChild(canvasWrap);

    drawCard(canvas, opts);
    createShareButtons(container, canvas, opts);

    container.style.display = 'block';
    container.classList.remove('hidden');
  }

  /**
   * Auto-detect calculator results and generate share card.
   */
  function autoShareCard() {
    var container = document.getElementById('share-card-output');
    if (!container) return;

    var heroNum = document.querySelector('.result-hero-number') || document.querySelector('.tdee-number');
    var heroLabel = document.querySelector('.result-hero-label') || document.querySelector('.tdee-sublabel');
    var heroSub = document.querySelector('.result-hero-sublabel') || document.querySelector('.tdee-label');

    if (!heroNum) return;

    var value = heroNum.textContent.trim();
    if (!value || value === '\u2014' || value === '--' || value === '0') return;

    var h1 = document.querySelector('h1');
    var calcName = h1 ? h1.textContent.trim().replace(/\s*Calculator\s*$/i, ' Calculator') : 'Calculator';

    // Detect category color from the primary result element, not the whole results container
    var catColor = ACCENT;
    var heroStyle = heroNum.style;
    if (heroStyle.color) catColor = heroStyle.color;
    // Check the category label element for semantic color
    var catLabel = heroSub || heroLabel;
    if (catLabel) {
      var catStyle = window.getComputedStyle(catLabel);
      var catColorVal = catStyle.color;
      // Parse rgb to detect semantic colors
      if (catColorVal) {
        var rgbMatch = catColorVal.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
        if (rgbMatch) {
          var r = parseInt(rgbMatch[1]), g = parseInt(rgbMatch[2]), b = parseInt(rgbMatch[3]);
          if (g > 100 && r < 80 && b < 100) catColor = '#16a34a'; // green
          else if (r > 150 && g > 80 && b < 50) catColor = '#d97706'; // amber/orange
          else if (r > 150 && g < 80 && b < 80) catColor = '#dc2626'; // red
        }
      }
    }
    // Fallback: check primary result container only (not gauge/table children)
    var primaryResult = document.querySelector('.tdee-primary-result, .result-hero');
    if (primaryResult && catColor === ACCENT) {
      var goodEl = primaryResult.querySelector('.good, .text-good, [style*="16a34a"]');
      if (goodEl) catColor = '#16a34a';
      var warnEl = primaryResult.querySelector('.warning, .text-warning, [style*="d97706"]');
      if (warnEl) catColor = '#d97706';
      var dangerEl = primaryResult.querySelector('.danger, .text-danger, [style*="dc2626"]');
      if (dangerEl) catColor = '#dc2626';
    }

    var label = heroLabel ? heroLabel.textContent.trim() : 'Your Result';
    var category = heroSub ? heroSub.textContent.trim() : '';

    // Try to extract unit from the result value or label
    var unit = '';
    var cleanValue = value;
    var unitMatch = value.match(/^([\d,\.]+)\s*(.+)$/);
    if (unitMatch) {
      cleanValue = unitMatch[1];
      unit = unitMatch[2];
    }

    // Detect sensitive calculators
    var sensitive = /risk|fertility|menopause|bac|alcohol/i.test(calcName);

    generateShareCard({
      calculatorName: calcName,
      resultLabel: label,
      resultValue: cleanValue,
      resultUnit: unit,
      resultCategory: category || '',
      categoryColor: catColor,
      context: '',
      details: [],
      url: 'healthcalculators.xyz' + window.location.pathname,
      sensitive: sensitive
    });
  }

  window.generateShareCard = generateShareCard;
  window.autoShareCard = autoShareCard;
})();
