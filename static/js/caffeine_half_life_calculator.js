document.addEventListener('DOMContentLoaded', function() {
  var caffeineInput = document.getElementById('caffeine-mg');
  var sourceSelect = document.getElementById('caffeine-source');
  var timeInput = document.getElementById('time-consumed');
  var halfLifeInput = document.getElementById('half-life');
  var targetTimeInput = document.getElementById('target-time');
  var calculateBtn = document.getElementById('calculate-btn');
  var resultsSection = document.getElementById('results-section');

  // Preset caffeine amounts by source
  var presets = {
    'custom': 0,
    'coffee-8': 95,
    'coffee-12': 142,
    'coffee-16': 190,
    'espresso-single': 63,
    'espresso-double': 126,
    'cold-brew-12': 200,
    'tea-black': 47,
    'tea-green': 28,
    'energy-drink': 160,
    'energy-drink-large': 300,
    'soda-12': 34,
    'pre-workout': 200,
    'caffeine-pill': 200,
    'decaf': 5
  };

  // Update caffeine amount when source changes
  sourceSelect.addEventListener('change', function() {
    var val = presets[sourceSelect.value];
    if (val > 0) {
      caffeineInput.value = val;
    } else {
      caffeineInput.value = '';
      caffeineInput.focus();
    }
  });

  // Set default time to now
  var now = new Date();
  var hh = String(now.getHours()).padStart(2, '0');
  var mm = String(now.getMinutes()).padStart(2, '0');
  timeInput.value = hh + ':' + mm;

  // Default target time: 10 PM (bedtime)
  targetTimeInput.value = '22:00';

  calculateBtn.addEventListener('click', function() {
    var mgInitial = parseFloat(caffeineInput.value);
    var halfLife = parseFloat(halfLifeInput.value);
    var consumedTime = timeInput.value;
    var targetTime = targetTimeInput.value;

    if (isNaN(mgInitial) || mgInitial <= 0) {
      alert('Please enter the amount of caffeine in mg.');
      return;
    }
    if (isNaN(halfLife) || halfLife <= 0) {
      alert('Please enter a valid half-life.');
      return;
    }
    if (!consumedTime) {
      alert('Please enter the time you consumed caffeine.');
      return;
    }

    // Calculate decay at various timepoints
    // Formula: remaining = initial * (0.5 ^ (elapsed / halfLife))
    var decayPoints = [];
    for (var h = 0; h <= 24; h++) {
      var remaining = mgInitial * Math.pow(0.5, h / halfLife);
      decayPoints.push({ hours: h, mg: remaining });
    }

    // Calculate remaining at target time (e.g., bedtime)
    var targetHoursElapsed = null;
    var remainingAtTarget = null;
    if (targetTime) {
      var consumedParts = consumedTime.split(':');
      var targetParts = targetTime.split(':');
      var consumedMinutes = parseInt(consumedParts[0]) * 60 + parseInt(consumedParts[1]);
      var targetMinutes = parseInt(targetParts[0]) * 60 + parseInt(targetParts[1]);
      targetHoursElapsed = (targetMinutes - consumedMinutes) / 60;
      if (targetHoursElapsed < 0) targetHoursElapsed += 24; // next day
      remainingAtTarget = mgInitial * Math.pow(0.5, targetHoursElapsed / halfLife);
    }

    // Time to reach key thresholds
    // ~50mg: mild effects threshold
    // ~25mg: minimal effects
    // ~10mg: essentially caffeine-free
    var timeTo50 = mgInitial > 50 ? halfLife * Math.log(mgInitial / 50) / Math.LN2 : 0;
    var timeTo25 = mgInitial > 25 ? halfLife * Math.log(mgInitial / 25) / Math.LN2 : 0;
    var timeTo10 = mgInitial > 10 ? halfLife * Math.log(mgInitial / 10) / Math.LN2 : 0;

    // Show results
    resultsSection.classList.remove('hidden');

    // Primary result: remaining at target time
    var heroEl = document.getElementById('remaining-result');
    var labelEl = document.getElementById('remaining-label');

    if (remainingAtTarget !== null) {
      heroEl.textContent = Math.round(remainingAtTarget) + ' mg';
      labelEl.textContent = 'Caffeine remaining at ' + formatTime(targetTime);

      if (typeof animateCountUp === 'function') {
        animateCountUp(heroEl, 0, Math.round(remainingAtTarget), 0, ' mg');
      }
    } else {
      heroEl.textContent = Math.round(mgInitial) + ' mg';
      labelEl.textContent = 'Starting caffeine dose';
    }

    // Status
    var statusEl = document.getElementById('caffeine-status');
    var iconEl = document.getElementById('caffeine-icon');
    var descEl = document.getElementById('caffeine-description');

    if (remainingAtTarget !== null) {
      var cat = getCaffeineCategory(remainingAtTarget);
      statusEl.className = 'result-status status-' + cat.statusClass;
      iconEl.textContent = cat.icon;
      descEl.textContent = cat.text;
    }

    // Gauge (0-200mg scale)
    if (remainingAtTarget !== null) {
      var gaugePos = Math.min(Math.max(remainingAtTarget / 200, 0), 1) * 100;
      document.getElementById('gauge-marker').style.left = gaugePos + '%';
    }

    // Breakdown
    document.getElementById('display-initial').textContent = Math.round(mgInitial) + ' mg';
    document.getElementById('display-half-life').textContent = halfLife + ' hours';

    if (remainingAtTarget !== null) {
      document.getElementById('display-at-target').textContent = Math.round(remainingAtTarget) + ' mg (' + Math.round((remainingAtTarget / mgInitial) * 100) + '% remaining)';
      document.getElementById('display-elapsed').textContent = targetHoursElapsed.toFixed(1) + ' hours until ' + formatTime(targetTime);
      document.getElementById('row-target').classList.remove('hidden');
      document.getElementById('row-elapsed').classList.remove('hidden');
    }

    // Time to thresholds
    if (timeTo50 > 0) {
      document.getElementById('display-to-50').textContent = formatDuration(timeTo50) + ' (' + formatTimeFromNow(consumedTime, timeTo50) + ')';
      document.getElementById('row-to-50').classList.remove('hidden');
    } else {
      document.getElementById('row-to-50').classList.add('hidden');
    }

    if (timeTo25 > 0) {
      document.getElementById('display-to-25').textContent = formatDuration(timeTo25) + ' (' + formatTimeFromNow(consumedTime, timeTo25) + ')';
      document.getElementById('row-to-25').classList.remove('hidden');
    } else {
      document.getElementById('row-to-25').classList.add('hidden');
    }

    // Decay timeline table
    var tbody = document.getElementById('decay-tbody');
    tbody.innerHTML = '';
    var intervals = [0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24];
    for (var i = 0; i < intervals.length; i++) {
      var h = intervals[i];
      var mg = mgInitial * Math.pow(0.5, h / halfLife);
      if (mg < 1 && h > 0) break;
      var tr = document.createElement('tr');
      var pct = (mg / mgInitial) * 100;

      var timeStr = formatTimeFromNow(consumedTime, h);
      var isTarget = (remainingAtTarget !== null && Math.abs(h - targetHoursElapsed) < 0.5);

      tr.innerHTML =
        '<td style="padding: 6px 10px; border-bottom: 1px solid #f0f0f0;">' + h + 'h</td>' +
        '<td style="padding: 6px 10px; border-bottom: 1px solid #f0f0f0;">' + timeStr + '</td>' +
        '<td style="padding: 6px 10px; border-bottom: 1px solid #f0f0f0; font-weight: 600;">' + Math.round(mg) + ' mg</td>' +
        '<td style="padding: 6px 10px; border-bottom: 1px solid #f0f0f0;">' + Math.round(pct) + '%</td>' +
        '<td style="padding: 6px 10px; border-bottom: 1px solid #f0f0f0;"><div style="background: #e5e7eb; border-radius: 4px; height: 8px; width: 100%; overflow: hidden;"><div style="background: ' + getBarColor(mg) + '; height: 100%; width: ' + pct + '%; border-radius: 4px; transition: width 0.3s;"></div></div></td>';

      if (isTarget) {
        tr.style.background = '#f0f9ff';
      }
      tbody.appendChild(tr);
    }

    // Scroll to results
    resultsSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    // Celebration if caffeine will be low at bedtime
    if (typeof celebratePulse === 'function' && remainingAtTarget !== null && remainingAtTarget < 50) {
      celebratePulse(document.getElementById('result-hero'));
    }

    // Content loops
    if (typeof showNextSteps === 'function') {
      showNextSteps('caffeine-half-life', {});
    }
  });

  function getCaffeineCategory(mg) {
    if (mg < 25) {
      return { statusClass: 'good', icon: '✓', text: 'Minimal caffeine remaining — unlikely to affect your sleep. Most people can sleep well with under 25 mg of caffeine in their system.' };
    } else if (mg < 50) {
      return { statusClass: 'good', icon: '✓', text: 'Low caffeine remaining — should not significantly affect sleep for most people, though caffeine-sensitive individuals may notice mild effects.' };
    } else if (mg < 100) {
      return { statusClass: 'warning', icon: '⚠', text: 'Moderate caffeine remaining — equivalent to about half a cup of coffee. May delay sleep onset by 20-40 minutes for some people.' };
    } else {
      return { statusClass: 'danger', icon: '⚠', text: 'High caffeine remaining — likely to disrupt sleep quality and delay sleep onset. Consider moving your caffeine intake earlier or reducing the dose.' };
    }
  }

  function getBarColor(mg) {
    if (mg < 25) return '#4caf50';
    if (mg < 50) return '#8bc34a';
    if (mg < 100) return '#ff9800';
    return '#f44336';
  }

  function formatTime(timeStr) {
    var parts = timeStr.split(':');
    var h = parseInt(parts[0]);
    var m = parts[1];
    var ampm = h >= 12 ? 'PM' : 'AM';
    var h12 = h % 12 || 12;
    return h12 + ':' + m + ' ' + ampm;
  }

  function formatTimeFromNow(startTime, hoursLater) {
    var parts = startTime.split(':');
    var totalMinutes = parseInt(parts[0]) * 60 + parseInt(parts[1]) + Math.round(hoursLater * 60);
    totalMinutes = ((totalMinutes % 1440) + 1440) % 1440; // wrap around 24h
    var h = Math.floor(totalMinutes / 60);
    var m = String(totalMinutes % 60).padStart(2, '0');
    var ampm = h >= 12 ? 'PM' : 'AM';
    var h12 = h % 12 || 12;
    return h12 + ':' + m + ' ' + ampm;
  }

  function formatDuration(hours) {
    var h = Math.floor(hours);
    var m = Math.round((hours - h) * 60);
    if (m === 60) { h++; m = 0; }
    return h + 'h ' + m + 'm';
  }
});
