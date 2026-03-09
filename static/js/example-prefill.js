/**
 * Example Pre-fill System
 *
 * Pre-fills calculator forms with example values and auto-calculates
 * to show instant results on page load. Adds a dismissible banner
 * above results indicating it's an example.
 *
 * Usage: call prefillExample(config) after the calculator JS loads.
 *   config.fields: object mapping field IDs to values
 *   config.calculateFn: function to call (e.g. calculateBMI)
 *   config.resultsId: ID of results container (default: 'results')
 *   config.unit: 'metric' or 'imperial' (default: 'imperial')
 *   config.selects: object mapping select IDs to values (for dropdowns)
 */
function prefillExample(config) {
  // Don't pre-fill if URL has params (user came with data from another calculator)
  if (window.location.search && window.location.search.length > 1) return;

  // Don't pre-fill if user has already interacted (return visit with localStorage)
  var pageKey = 'hc_used_' + window.location.pathname;
  if (sessionStorage.getItem(pageKey)) return;

  // Set unit system
  if (config.unit === 'metric') {
    var metricBtn = document.getElementById('metric-btn') || document.getElementById('metricBtn');
    if (metricBtn && !metricBtn.classList.contains('active')) metricBtn.click();
  } else {
    var imperialBtn = document.getElementById('imperial-btn') || document.getElementById('imperialBtn');
    if (imperialBtn && !imperialBtn.classList.contains('active')) imperialBtn.click();
  }

  // Fill text/number inputs
  if (config.fields) {
    Object.keys(config.fields).forEach(function(id) {
      var el = document.getElementById(id);
      if (el) el.value = config.fields[id];
    });
  }

  // Set select dropdowns
  if (config.selects) {
    Object.keys(config.selects).forEach(function(id) {
      var el = document.getElementById(id);
      if (el) {
        el.value = config.selects[id];
        el.dispatchEvent(new Event('change'));
      }
    });
  }

  // Small delay to let any reactive UI update, then calculate
  setTimeout(function() {
    if (typeof config.calculateFn === 'function') {
      config.calculateFn();
    }

    // Add example banner above results
    setTimeout(function() {
      var resultsEl = document.getElementById(config.resultsId || 'results');
      if (resultsEl && resultsEl.offsetHeight > 0) {
        // Check if banner already exists
        if (document.getElementById('example-banner')) return;

        var banner = document.createElement('div');
        banner.id = 'example-banner';
        banner.style.cssText = 'display:flex;align-items:center;justify-content:space-between;gap:12px;padding:12px 16px;background:#eef9fa;border:1px solid #b8e8ed;border-radius:10px;margin-bottom:16px;font-size:0.9rem;color:#4a4a68;animation:revealResults 0.3s ease-out;';
        banner.innerHTML = '<span><strong style="color:#0a7e8c">Example result</strong> — enter your own details above, then recalculate.</span>' +
          '<button onclick="this.parentElement.remove();sessionStorage.setItem(\'' + pageKey + '\',\'1\')" style="background:none;border:none;color:#8e8ea0;font-size:1.2rem;cursor:pointer;padding:0 4px;width:auto;box-shadow:none;transform:none;filter:none">&times;</button>';
        resultsEl.parentNode.insertBefore(banner, resultsEl);

        // Mark session after user's FIRST manual interaction (not our programmatic click)
        var calcBtn = document.getElementById('calculate-btn');
        if (calcBtn) {
          // Use a flag to skip the programmatic click
          var isFirstManualClick = false;
          setTimeout(function() { isFirstManualClick = true; }, 200);
          calcBtn.addEventListener('click', function() {
            if (!isFirstManualClick) return;
            sessionStorage.setItem(pageKey, '1');
            var b = document.getElementById('example-banner');
            if (b) b.remove();
          }, { once: true });
        }
      }
    }, 100);
  }, 50);
}
