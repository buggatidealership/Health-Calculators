document.addEventListener('DOMContentLoaded', function () {

  // ── MET values from Ainsworth et al. 2011 Compendium of Physical Activities ──
  // Key = pace in min/mile (string), value = MET
  var MET_BY_PACE_MIN_MILE = [
    { maxPace: 20,  met: 3.5  },  // very slow jog / walk-run
    { maxPace: 16,  met: 6.0  },  // ~3.7 mph
    { maxPace: 13,  met: 7.0  },  // jogging
    { maxPace: 12,  met: 8.3  },  // ~5 mph
    { maxPace: 11,  met: 9.0  },  // ~5.5 mph
    { maxPace: 10,  met: 9.8  },  // ~6 mph
    { maxPace: 9,   met: 10.5 },  // ~6.5 mph
    { maxPace: 8.5, met: 11.0 },  // ~7 mph
    { maxPace: 8,   met: 11.5 },  // ~7.5 mph
    { maxPace: 7.5, met: 11.8 },  // ~8 mph
    { maxPace: 7,   met: 12.3 },  // ~8.5 mph
    { maxPace: 6.5, met: 12.8 },  // ~9 mph
    { maxPace: 6,   met: 14.5 },  // ~10 mph
    { maxPace: 5.5, met: 16.0 },  // ~11 mph
    { maxPace: 5,   met: 17.5 },  // ~12 mph
    { maxPace: 4,   met: 19.0 },  // ~15 mph
    { maxPace: 0,   met: 23.0 },  // sprint
  ];

  // Terrain multipliers (based on ACSM grade equations)
  var TERRAIN_MULTIPLIERS = {
    flat:     1.00,
    slight:   1.08,  // ~2% grade
    moderate: 1.18,  // ~5% grade
    hilly:    1.30,  // ~8% grade
    trail:    1.12,  // uneven terrain +12%
  };

  // ── DOM refs ──
  var weightEl      = document.getElementById('weight');
  var weightUnitEl  = document.getElementById('weight-unit');
  var distanceEl    = document.getElementById('distance');
  var distanceUnitEl = document.getElementById('distance-unit');
  var timeEl        = document.getElementById('time-minutes');
  var paceMinEl     = document.getElementById('pace-min');
  var paceSecEl     = document.getElementById('pace-sec');
  var terrainEl     = document.getElementById('terrain');
  var calcModeEls   = document.querySelectorAll('input[name="calc-mode"]');
  var calcBtn       = document.getElementById('calculate-btn');
  var resultsSection = document.getElementById('results-section');
  var errorEl       = document.getElementById('calc-error');

  var resultCaloriesEl     = document.getElementById('result-calories');
  var resultCalPerMileEl   = document.getElementById('result-cal-per-mile');
  var resultCalPerHourEl   = document.getElementById('result-cal-per-hour');
  var resultNetCalEl       = document.getElementById('result-net-calories');
  var resultDurationEl     = document.getElementById('result-duration');
  var resultDistanceEl     = document.getElementById('result-distance');
  var resultPaceEl         = document.getElementById('result-pace');
  var resultMetEl          = document.getElementById('result-met');

  // Mode rows
  var rowTime  = document.getElementById('row-time');
  var rowPace  = document.getElementById('row-pace');

  function getMode() {
    var checked = document.querySelector('input[name="calc-mode"]:checked');
    return checked ? checked.value : 'distance-time';
  }

  function updateModeUI() {
    var mode = getMode();
    if (mode === 'distance-time') {
      rowTime.classList.remove('hidden');
      rowPace.classList.add('hidden');
    } else if (mode === 'distance-pace') {
      rowTime.classList.add('hidden');
      rowPace.classList.remove('hidden');
    }
  }

  calcModeEls.forEach(function (el) {
    el.addEventListener('change', updateModeUI);
  });
  updateModeUI();

  // ── Sync pace ↔ time ──
  function paceToDecimalMins(minStr, secStr) {
    var m = parseFloat(minStr) || 0;
    var s = parseFloat(secStr) || 0;
    return m + s / 60;
  }

  function getMET(paceMinPerMile) {
    for (var i = 0; i < MET_BY_PACE_MIN_MILE.length; i++) {
      if (paceMinPerMile >= MET_BY_PACE_MIN_MILE[i].maxPace) {
        // interpolate with next entry if available
        if (i > 0) {
          var upper = MET_BY_PACE_MIN_MILE[i - 1];
          var lower = MET_BY_PACE_MIN_MILE[i];
          var t = (paceMinPerMile - lower.maxPace) / (upper.maxPace - lower.maxPace);
          return lower.met + t * (upper.met - lower.met);
        }
        return MET_BY_PACE_MIN_MILE[i].met;
      }
    }
    return MET_BY_PACE_MIN_MILE[MET_BY_PACE_MIN_MILE.length - 1].met;
  }

  function showError(msg) {
    errorEl.textContent = msg;
    errorEl.classList.remove('hidden');
  }

  function clearError() {
    errorEl.textContent = '';
    errorEl.classList.add('hidden');
  }

  function formatPace(minPerMile) {
    var mins = Math.floor(minPerMile);
    var secs = Math.round((minPerMile - mins) * 60);
    if (secs === 60) { mins += 1; secs = 0; }
    return mins + ':' + (secs < 10 ? '0' : '') + secs;
  }

  calcBtn.addEventListener('click', function () {
    clearError();

    var weight = parseFloat(weightEl.value);
    var weightUnit = weightUnitEl.value;
    var distance = parseFloat(distanceEl.value);
    var distUnit = distanceUnitEl.value;
    var terrain = terrainEl.value;
    var mode = getMode();

    // Validate weight
    if (!weight || weight <= 0 || weight > 700) {
      showError('Please enter a valid weight (1–700 lbs or 1–315 kg).');
      return;
    }
    if (!distance || distance <= 0 || distance > 200) {
      showError('Please enter a valid distance (up to 200 miles / 322 km).');
      return;
    }

    // Convert weight to kg
    var weightKg = (weightUnit === 'lbs') ? weight / 2.2046 : weight;

    // Convert distance to miles
    var distMiles = (distUnit === 'km') ? distance / 1.60934 : distance;

    var durationMins, paceMinPerMile;

    if (mode === 'distance-time') {
      durationMins = parseFloat(timeEl.value);
      if (!durationMins || durationMins <= 0 || durationMins > 1440) {
        showError('Please enter a valid time (1–1440 minutes).');
        return;
      }
      paceMinPerMile = durationMins / distMiles;
    } else {
      // distance-pace mode
      var pm = parseFloat(paceMinEl.value);
      var ps = parseFloat(paceSecEl.value) || 0;
      if (!pm || pm <= 0 || pm > 30) {
        showError('Please enter a valid pace (minutes per mile/km).');
        return;
      }
      if (ps < 0 || ps >= 60) {
        showError('Seconds must be between 0 and 59.');
        return;
      }
      var paceDecimal = pm + ps / 60;
      // If pace is in min/km, convert to min/mile
      paceMinPerMile = (distUnit === 'km') ? paceDecimal * 1.60934 : paceDecimal;
      durationMins = paceMinPerMile * distMiles;
    }

    var durationHours = durationMins / 60;

    // Validate pace is reasonable
    if (paceMinPerMile < 3.5) {
      showError('Pace seems too fast (under 3:30/mile). Please check your inputs.');
      return;
    }
    if (paceMinPerMile > 30) {
      showError('Pace seems too slow (over 30 min/mile). Please check your inputs.');
      return;
    }

    // Get MET for this pace
    var baseMET = getMET(paceMinPerMile);

    // Apply terrain multiplier
    var terrainMult = TERRAIN_MULTIPLIERS[terrain] || 1.0;
    var adjustedMET = baseMET * terrainMult;

    // Gross calories = MET × weight_kg × hours
    var grossCalories = adjustedMET * weightKg * durationHours;

    // Net calories = gross - resting calories during that time (MET 1.0 = resting)
    var restingCalories = 1.0 * weightKg * durationHours;
    var netCalories = grossCalories - restingCalories;

    // Calories per mile and per hour
    var calPerMile = grossCalories / distMiles;
    var calPerHour = grossCalories / durationHours;

    // Display results
    resultCaloriesEl.textContent     = Math.round(grossCalories).toLocaleString() + ' kcal';
    resultNetCalEl.textContent       = Math.round(netCalories).toLocaleString() + ' kcal';
    resultCalPerMileEl.textContent   = Math.round(calPerMile) + ' kcal/mile';
    resultCalPerHourEl.textContent   = Math.round(calPerHour) + ' kcal/hr';
    resultDurationEl.textContent     = Math.floor(durationMins) + ' min ' + Math.round((durationMins % 1) * 60) + ' sec';
    resultDistanceEl.textContent     = distMiles.toFixed(2) + ' miles';
    resultPaceEl.textContent         = formatPace(paceMinPerMile) + ' /mile';
    resultMetEl.textContent          = adjustedMET.toFixed(1);

    // Update burn bar fill
    var barFill = document.getElementById('burn-bar-fill');
    var barLabel = document.getElementById('burn-bar-label');
    if (barFill && barLabel) {
      // Reference: 500 kcal = 100%
      var pct = Math.min(Math.round((grossCalories / 800) * 100), 100);
      barFill.style.width = pct + '%';
      barLabel.textContent = Math.round(grossCalories) + ' kcal burned';
    }

    resultsSection.classList.remove('hidden');

    // Scroll to results
    resultsSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    // Animate
    if (typeof celebratePulse === 'function') {
      celebratePulse(resultCaloriesEl);
    }

    // Content loops
    if (typeof showNextSteps === 'function') {
      showNextSteps('running-calories', {
        weight_kg: Math.round(weightKg),
        age: '',
        gender: ''
      }, {}, 'results-section');
    }

    // Save for return visit
    if (typeof saveLastCalc === 'function') {
      saveLastCalc({ weight: weight, weight_unit: weightUnit, distance: distance, dist_unit: distUnit });
    }
  });

  // ── Preset run buttons ──
  document.querySelectorAll('[data-preset]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var preset = btn.dataset.preset;
      distanceUnitEl.value = 'miles';
      // Set distance-pace mode
      document.querySelector('input[name="calc-mode"][value="distance-pace"]').checked = true;
      updateModeUI();

      var presets = {
        '5k':        { dist: '3.1',  paceMin: '10', paceSec: '0'  },
        '10k':       { dist: '6.2',  paceMin: '10', paceSec: '0'  },
        'half':      { dist: '13.1', paceMin: '10', paceSec: '0'  },
        'marathon':  { dist: '26.2', paceMin: '10', paceSec: '0'  },
        '30min':     { dist: '3',    paceMin: '10', paceSec: '0'  },
      };

      var p = presets[preset];
      if (p) {
        distanceEl.value = p.dist;
        paceMinEl.value  = p.paceMin;
        paceSecEl.value  = p.paceSec;
      }
    });
  });
});
