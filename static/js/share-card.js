/**
 * Share Card System — Generates visual, shareable result cards from calculator output.
 *
 * Usage: call generateShareCard(options) after displaying calculator results.
 *
 * Options:
 *   calculatorName: string — display name of the calculator
 *   resultLabel: string — e.g. "Your BMI"
 *   resultValue: string — e.g. "24.3"
 *   resultCategory: string — e.g. "Healthy Weight"
 *   categoryColor: string — hex color for the category
 *   details: array of {label, value} — key input details shown on card
 *   url: string — page URL for sharing (without protocol)
 *   sensitive: boolean — if true, share text omits the actual result value
 *   containerId: string — optional, defaults to 'share-card-output'
 */

(function() {
  'use strict';

  var CARD_WIDTH = 600;
  var CARD_HEIGHT = 315;
  var ACCENT = '#0a7e8c';
  var FONT_FAMILY = 'DM Sans, system-ui, -apple-system, sans-serif';

  /**
   * Draw the share card on a canvas element.
   */
  function drawCard(canvas, opts) {
    var ctx = canvas.getContext('2d');
    canvas.width = CARD_WIDTH;
    canvas.height = CARD_HEIGHT;

    // White background
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, CARD_WIDTH, CARD_HEIGHT);

    // Header bar
    ctx.fillStyle = ACCENT;
    ctx.fillRect(0, 0, CARD_WIDTH, 56);

    // Calculator name in header
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 18px ' + FONT_FAMILY;
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';
    ctx.fillText(opts.calculatorName, 24, 28);

    // Site branding in header (right side)
    ctx.font = '13px ' + FONT_FAMILY;
    ctx.textAlign = 'right';
    ctx.fillStyle = 'rgba(255,255,255,0.85)';
    ctx.fillText('healthcalculators.xyz', CARD_WIDTH - 24, 28);

    // Result label
    ctx.textAlign = 'center';
    ctx.fillStyle = '#64748b';
    ctx.font = '15px ' + FONT_FAMILY;
    ctx.fillText(opts.resultLabel, CARD_WIDTH / 2, 90);

    // Large result value
    ctx.fillStyle = opts.categoryColor || ACCENT;
    ctx.font = 'bold 52px ' + FONT_FAMILY;
    ctx.fillText(opts.resultValue, CARD_WIDTH / 2, 145);

    // Category with color indicator
    var catText = opts.resultCategory;
    var catMetrics = ctx.measureText(catText);

    // Draw category dot
    ctx.fillStyle = opts.categoryColor || ACCENT;
    var dotX = (CARD_WIDTH / 2) - (catMetrics.width / 2) - 14;
    ctx.beginPath();
    ctx.arc(dotX, 177, 6, 0, 2 * Math.PI);
    ctx.fill();

    // Category text
    ctx.font = '600 16px ' + FONT_FAMILY;
    ctx.fillStyle = '#1e293b';
    ctx.textAlign = 'center';
    ctx.fillText(catText, CARD_WIDTH / 2 + 2, 182);

    // Details row
    if (opts.details && opts.details.length > 0) {
      var detailY = 218;
      var totalDetails = opts.details.length;
      var spacing = CARD_WIDTH / (totalDetails + 1);

      ctx.font = '12px ' + FONT_FAMILY;
      ctx.fillStyle = '#94a3b8';

      for (var i = 0; i < totalDetails; i++) {
        var dx = spacing * (i + 1);
        ctx.textAlign = 'center';
        ctx.font = '12px ' + FONT_FAMILY;
        ctx.fillStyle = '#94a3b8';
        ctx.fillText(opts.details[i].label, dx, detailY);

        ctx.font = '600 14px ' + FONT_FAMILY;
        ctx.fillStyle = '#334155';
        ctx.fillText(opts.details[i].value, dx, detailY + 18);
      }
    }

    // Separator line
    ctx.strokeStyle = '#e2e8f0';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(24, 256);
    ctx.lineTo(CARD_WIDTH - 24, 256);
    ctx.stroke();

    // Bottom: CTA text
    ctx.textAlign = 'center';
    ctx.font = '600 14px ' + FONT_FAMILY;
    ctx.fillStyle = ACCENT;
    ctx.fillText('Try it yourself \u2192 ' + (opts.url || 'healthcalculators.xyz'), CARD_WIDTH / 2, 280);

    // Bottom border accent
    ctx.fillStyle = ACCENT;
    ctx.fillRect(0, CARD_HEIGHT - 4, CARD_WIDTH, 4);
  }

  /**
   * Build share text. If sensitive, omit the actual value.
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
    var result = opts.calculatorName + ': My ' + opts.resultLabel.replace(/^Your\s*/i, '') +
      ' is ' + opts.resultValue + ' (' + opts.resultCategory + ').';
    if (platform === 'twitter') {
      return result + ' Check yours' + via;
    }
    return result + ' Check yours: ' + url;
  }

  /**
   * Track share event with GA4 if available.
   */
  function trackShare(method, calculatorName) {
    if (typeof gtag === 'function') {
      gtag('event', 'share', {
        method: method,
        content_type: 'calculator_result',
        content_id: calculatorName
      });
    }
  }

  /**
   * Create share buttons HTML and attach event listeners.
   */
  function createShareButtons(container, canvas, opts) {
    var btnWrap = document.createElement('div');
    btnWrap.className = 'share-card-buttons';

    var url = 'https://' + (opts.url || 'healthcalculators.xyz');
    var text = buildShareText(opts);
    var encodedText = encodeURIComponent(text);
    var encodedUrl = encodeURIComponent(url);

    // Button definitions
    var buttons = [
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
            // Fallback
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
        label: 'Twitter',
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
      },
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
   * Main entry point. Generates the share card and buttons.
   */
  function generateShareCard(opts) {
    var containerId = opts.containerId || 'share-card-output';
    var container = document.getElementById(containerId);
    if (!container) return;

    // Clear previous content
    container.innerHTML = '';

    // Create title
    var title = document.createElement('div');
    title.className = 'share-card-title';
    title.textContent = 'Share Your Results';
    container.appendChild(title);

    // Create canvas wrapper (for responsive scaling)
    var canvasWrap = document.createElement('div');
    canvasWrap.className = 'share-card-canvas-wrap';
    var canvas = document.createElement('canvas');
    canvasWrap.appendChild(canvas);
    container.appendChild(canvasWrap);

    // Draw the card
    drawCard(canvas, opts);

    // Create share buttons
    createShareButtons(container, canvas, opts);

    // Show the container
    container.style.display = 'block';
    container.classList.remove('hidden');
  }

  /**
   * Auto-detect calculator results and generate share card.
   * Looks for .result-hero-number / .tdee-number patterns.
   */
  function autoShareCard() {
    var container = document.getElementById('share-card-output');
    if (!container) return;

    // Find the hero result element (two common patterns)
    var heroNum = document.querySelector('.result-hero-number') || document.querySelector('.tdee-number');
    var heroLabel = document.querySelector('.result-hero-label') || document.querySelector('.tdee-sublabel');
    var heroSub = document.querySelector('.result-hero-sublabel') || document.querySelector('.tdee-label');

    if (!heroNum) return;

    var value = heroNum.textContent.trim();
    // Skip placeholder values
    if (!value || value === '—' || value === '--' || value === '0') return;

    // Get calculator name from page title or h1
    var h1 = document.querySelector('h1');
    var calcName = h1 ? h1.textContent.trim().replace(/\s*Calculator\s*$/i, ' Calculator') : 'Calculator';

    // Determine category color from result styling
    var catColor = ACCENT;
    var heroStyle = heroNum.style;
    if (heroStyle.color) catColor = heroStyle.color;
    // Check for semantic color classes on result container
    var resultsEl = document.getElementById('results') || document.getElementById('result');
    if (resultsEl) {
      var colorEl = resultsEl.querySelector('.good, .text-good, [style*="16a34a"], [style*="green"]');
      if (colorEl) catColor = '#16a34a';
      var warnEl = resultsEl.querySelector('.warning, .text-warning, [style*="d97706"], [style*="orange"]');
      if (warnEl) catColor = '#d97706';
      var dangerEl = resultsEl.querySelector('.danger, .text-danger, [style*="dc2626"], [style*="red"]');
      if (dangerEl) catColor = '#dc2626';
    }

    var label = heroLabel ? heroLabel.textContent.trim() : 'Your Result';
    var category = heroSub ? heroSub.textContent.trim() : '';

    // Determine if sensitive (health risk scores, fertility, etc.)
    var sensitive = /risk|fertility|menopause|bac|alcohol/i.test(calcName);

    generateShareCard({
      calculatorName: calcName,
      resultLabel: label,
      resultValue: value,
      resultCategory: category || label,
      categoryColor: catColor,
      details: [],
      url: 'healthcalculators.xyz' + window.location.pathname,
      sensitive: sensitive
    });
  }

  // Expose globally
  window.generateShareCard = generateShareCard;
  window.autoShareCard = autoShareCard;
})();
