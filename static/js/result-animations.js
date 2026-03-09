/**
 * Result Animations — micro-interactions for calculator results
 * Increases time-on-page and perceived quality (AdSense RPM lever).
 *
 * Features:
 *   1. Number count-up on .result-hero-number / .tdee-number
 *   2. Results section smooth reveal
 *   3. Calculate button loading state
 *   4. Healthy-range pulse celebration
 */
(function () {
  'use strict';

  /* ---- helpers ---- */
  function parseDisplayNumber(text) {
    // Handle formats: "2,450", "24.5", "$1,200", "2,450 cal", "155 lbs"
    var cleaned = text.replace(/[^0-9.\-]/g, '');
    var num = parseFloat(cleaned);
    return isNaN(num) ? null : num;
  }

  function formatLike(template, value) {
    // Reproduce the original format: commas, decimals, prefix/suffix
    var prefix = '';
    var suffix = '';
    var match = template.match(/^([^0-9\-]*)([\d,.\-]+)(.*)$/);
    if (match) {
      prefix = match[1];
      suffix = match[3];
    }
    var originalNum = match ? match[2] : template;
    var decimals = 0;
    var dotIdx = originalNum.indexOf('.');
    if (dotIdx !== -1) decimals = originalNum.length - dotIdx - 1;
    var hasCommas = originalNum.indexOf(',') !== -1;
    var formatted = value.toFixed(decimals);
    if (hasCommas) {
      var parts = formatted.split('.');
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      formatted = parts.join('.');
    }
    return prefix + formatted + suffix;
  }

  /* ---- 1. Number count-up ---- */
  function countUp(el) {
    var final = el.textContent.trim();
    var target = parseDisplayNumber(final);
    if (target === null || target === 0) return;
    if (el.dataset.counted === 'true') return;
    el.dataset.counted = 'true';

    var duration = 700; // ms
    var fps = 40;
    var steps = Math.round(duration / (1000 / fps));
    var step = 0;

    // Ease-out cubic
    function ease(t) { return 1 - Math.pow(1 - t, 3); }

    var interval = setInterval(function () {
      step++;
      var progress = ease(step / steps);
      var current = target * progress;
      el.textContent = formatLike(final, current);
      if (step >= steps) {
        clearInterval(interval);
        el.textContent = final; // restore exact original
      }
    }, 1000 / fps);
  }

  /* ---- 2. Results reveal ---- */
  function revealResults(container) {
    if (!container || container.classList.contains('results-reveal')) return;
    container.classList.add('results-reveal');
  }

  /* ---- 3. Button loading state ---- */
  function wrapButton(btn) {
    if (btn.dataset.wrapped === 'true') return;
    btn.dataset.wrapped = 'true';
    var originalText = btn.textContent.trim();

    btn.addEventListener('click', function () {
      btn.classList.add('btn-loading');
      btn.disabled = true;
      btn.textContent = 'Calculating…';

      // Restore after results appear or timeout
      setTimeout(function () {
        btn.classList.remove('btn-loading');
        btn.disabled = false;
        btn.textContent = originalText;
      }, 1200);
    });
  }

  /* ---- 4. Healthy-range celebration ---- */
  function checkCelebration(container) {
    // Look for status indicators: green colors, "Normal", "Healthy", "Optimal"
    var text = container.textContent || '';
    var isHealthy = /\b(normal|healthy|optimal|good|excellent)\b/i.test(text);
    // Also check for green-colored elements
    var greenEls = container.querySelectorAll('[style*="16a34a"], [style*="green"], .text-good');
    if (isHealthy || greenEls.length > 0) {
      var hero = container.querySelector('.result-hero, .tdee-primary-result');
      if (hero && !hero.classList.contains('celebrate-pulse')) {
        hero.classList.add('celebrate-pulse');
      }
    }
  }

  /* ---- orchestrator ---- */
  function animateResults() {
    var resultsEl = document.getElementById('results') || document.getElementById('result');
    if (!resultsEl) return;

    // Count-up on hero numbers
    var heroes = resultsEl.querySelectorAll('.result-hero-number, .tdee-number');
    heroes.forEach(function (el) {
      var val = el.textContent.trim();
      if (val && val !== '—' && val !== '--' && val !== '0') {
        countUp(el);
      }
    });

    // Reveal animation
    revealResults(resultsEl);

    // Celebration check (slight delay so DOM is settled)
    setTimeout(function () { checkCelebration(resultsEl); }, 800);
  }

  /* ---- init: watch for results appearing ---- */
  function init() {
    // Wrap calculate buttons
    var buttons = document.querySelectorAll('.calculate-btn, .btn-pink');
    buttons.forEach(wrapButton);

    // Observe results container
    var resultsEl = document.getElementById('results') || document.getElementById('result');
    if (!resultsEl) return;

    var observer = new MutationObserver(function () {
      var visible = resultsEl.offsetHeight > 0 &&
        !resultsEl.classList.contains('hidden') &&
        resultsEl.style.display !== 'none';
      if (visible) {
        // Small delay to let calculator JS finish writing DOM
        setTimeout(animateResults, 100);
      }
    });
    observer.observe(resultsEl, {
      attributes: true,
      attributeFilter: ['style', 'class'],
      childList: true
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
