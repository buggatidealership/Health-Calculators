document.addEventListener('DOMContentLoaded', function () {

  // ── MET values for walking from Ainsworth et al. 2011 Compendium of Physical Activities ──
  // Code 17151 (walking, 2.0 mph) = 2.5, Code 17160 (2.5 mph) = 3.0,
  // Code 17170 (3.0 mph) = 3.5, Code 17180 (3.5 mph) = 4.3,
  // Code 17190 (4.0 mph) = 5.0, Code 17200 (4.5 mph) = 6.3
  var PACE_MET_TABLE = [
    { label: 'Slow (< 2 mph)',           mph: 1.8,  met: 2.0,  stepsPerMin: 75  },
    { label: 'Leisurely (2.0 mph)',       mph: 2.0,  met: 2.5,  stepsPerMin: 85  },
    { label: 'Moderate (2.5 mph)',        mph: 2.5,  met: 3.0,  stepsPerMin: 100 },
    { label: 'Brisk (3.0 mph)',           mph: 3.0,  met: 3.5,  stepsPerMin: 115 },
    { label: 'Fast (3.5 mph)',            mph: 3.5,  met: 4.3,  stepsPerMin: 130 },
    { label: 'Very fast (4.0 mph)',       mph: 4.0,  met: 5.0,  stepsPerMin: 145 },
    { label: 'Power walking (4.5+ mph)', mph: 4.5,  met: 6.3,  stepsPerMin: 160 },
  ];

  // Average stride lengths from ACSM and published gait research
  // Stride = 2 steps; step length ≈ height × factor
  var STRIDE_PRESETS = {
    'short':   { label: 'Short (under 5\'4")',  ft: 2.1 },
    'medium':  { label: 'Medium (5\'4"–5\'9")',  ft: 2.4 },
    'tall':    { label: 'Tall (5\'10"–6\'1")',   ft: 2.7 },
    'xl':      { label: 'Very tall (6\'2"+)',    ft: 3.0 },
    'custom':  { label: 'Custom',               ft: null },
  };

  // ── DOM elements ──
  var stepsEl         = document.getElementById('steps');
  var weightEl        = document.getElementById('weight');
  var weightUnitEl    = document.getElementById('weight-unit');
  var stridePresetEl  = document.getElementById('stride-preset');
  var customStrideRow = document.getElementById('custom-stride-row');
  var customStrideEl  = document.getElementById('custom-stride');
  var customStrideUnitEl = document.getElementById('custom-stride-unit');
  var paceEl          = document.getElementById('pace');
  var calcBtn         = document.getElementById('calculate-btn');
  var resultsSection  = document.getElementById('results-section');
  var errorEl         = document.getElementById('calc-error');

  var resultCaloriesEl      = document.getElementById('result-calories');
  var resultCalPer1kEl      = document.getElementById('result-cal-per-1k');
  var resultCalPerMileEl    = document.getElementById('result-cal-per-mile');
  var resultDistanceMiEl    = document.getElementById('result-distance-mi');
  var resultDistanceKmEl    = document.getElementById('result-distance-km');
  var resultTimeEl          = document.getElementById('result-time');
  var resultSpeedEl         = document.getElementById('result-speed');
  var displayStepsEl        = document.getElementById('display-steps');
  var displayWeightEl       = document.getElementById('display-weight');
  var displayPaceEl         = document.getElementById('display-pace');
  var displayStrideEl       = document.getElementById('display-stride');
  var displayMETEl          = document.getElementById('display-met');

  // ── Stride preset toggle ──
  stridePresetEl.addEventListener('change', function () {
    if (this.value === 'custom') {
      customStrideRow.classList.remove('hidden');
    } else {
      customStrideRow.classList.add('hidden');
    }
  });

  // ── Populate pace select from table ──
  PACE_MET_TABLE.forEach(function (row, i) {
    var opt = document.createElement('option');
    opt.value = i;
    opt.textContent = row.label;
    if (row.label.indexOf('Brisk') !== -1) opt.selected = true;
    paceEl.appendChild(opt);
  });

  // ── Main calculation ──
  calcBtn.addEventListener('click', function () {
    calculate();
  });

  // Enter key support
  [stepsEl, weightEl, customStrideEl].forEach(function (el) {
    if (el) el.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') calculate();
    });
  });

  function showError(msg) {
    errorEl.textContent = msg;
    errorEl.classList.remove('hidden');
    resultsSection.classList.add('hidden');
  }

  function clearError() {
    errorEl.textContent = '';
    errorEl.classList.add('hidden');
  }

  function calculate() {
    clearError();

    // ── Parse inputs ──
    var steps = parseFloat(stepsEl.value);
    var weight = parseFloat(weightEl.value);
    var weightUnit = weightUnitEl.value;
    var paceIdx = parseInt(paceEl.value, 10);

    if (isNaN(steps) || steps <= 0) {
      return showError('Please enter a valid number of steps (e.g. 10000).');
    }
    if (steps > 500000) {
      return showError('Steps value seems too high. Please enter a realistic daily step count.');
    }
    if (isNaN(weight) || weight <= 0) {
      return showError('Please enter your body weight.');
    }
    if (isNaN(paceIdx) || paceIdx < 0 || paceIdx >= PACE_MET_TABLE.length) {
      return showError('Please select a walking pace.');
    }

    // Convert weight to kg
    var weightKg = (weightUnit === 'lbs') ? weight / 2.20462 : weight;
    if (weightKg < 20 || weightKg > 300) {
      return showError('Please enter a realistic body weight (45–661 lbs / 20–300 kg).');
    }

    // ── Get stride length in feet ──
    var stridePreset = stridePresetEl.value;
    var strideFt;
    if (stridePreset === 'custom') {
      strideFt = parseFloat(customStrideEl.value);
      var strideUnit = customStrideUnitEl.value;
      if (isNaN(strideFt) || strideFt <= 0) {
        return showError('Please enter a valid custom step length.');
      }
      // Convert to feet if needed
      if (strideUnit === 'inches') strideFt = strideFt / 12;
      else if (strideUnit === 'cm') strideFt = strideFt / 30.48;
      if (strideFt < 0.5 || strideFt > 6) {
        return showError('Step length seems unrealistic. Typical range is 1.5–3.5 ft (18–42 inches).');
      }
    } else {
      strideFt = STRIDE_PRESETS[stridePreset].ft;
    }

    // ── Core calculations ──
    var paceRow = PACE_MET_TABLE[paceIdx];
    var met = paceRow.met;
    var speedMph = paceRow.mph;

    // Distance: steps × step_length_ft / 5280 ft per mile
    var distanceMiles = (steps * strideFt) / 5280;
    var distanceKm = distanceMiles * 1.60934;

    // Time: distance / speed
    var timeHours = distanceMiles / speedMph;
    var timeMinutes = timeHours * 60;

    // Calories: MET × weight(kg) × time(hours)
    // This gives kcal (food calories)
    var calories = met * weightKg * timeHours;

    // Per-step and per-mile metrics
    var calPer1000Steps = (calories / steps) * 1000;
    var calPerMile = distanceMiles > 0 ? calories / distanceMiles : 0;

    // ── Format time ──
    var timeFormatted;
    if (timeMinutes < 60) {
      timeFormatted = Math.round(timeMinutes) + ' min';
    } else {
      var hrs = Math.floor(timeMinutes / 60);
      var mins = Math.round(timeMinutes % 60);
      timeFormatted = hrs + 'h ' + (mins > 0 ? mins + 'm' : '');
    }

    // ── Display results ──
    resultCaloriesEl.textContent = Math.round(calories);
    resultCalPer1kEl.textContent = calPer1000Steps.toFixed(1);
    resultCalPerMileEl.textContent = Math.round(calPerMile);
    resultDistanceMiEl.textContent = distanceMiles.toFixed(2) + ' mi';
    resultDistanceKmEl.textContent = distanceKm.toFixed(2) + ' km';
    resultTimeEl.textContent = timeFormatted;
    resultSpeedEl.textContent = speedMph.toFixed(1) + ' mph';

    displayStepsEl.textContent = Math.round(steps).toLocaleString() + ' steps';
    displayWeightEl.textContent = (weightUnit === 'lbs')
      ? weight + ' lbs (' + weightKg.toFixed(1) + ' kg)'
      : weight + ' kg';
    displayPaceEl.textContent = paceRow.label;
    displayStrideEl.textContent = strideFt.toFixed(2) + ' ft (' + (strideFt * 30.48).toFixed(0) + ' cm)';
    displayMETEl.textContent = met.toFixed(1);

    resultsSection.classList.remove('hidden');

    // ── Animate results ──
    if (typeof celebratePulse === 'function') {
      celebratePulse('results-section');
    }

    // ── Cross-links ──
    if (typeof showNextSteps === 'function') {
      showNextSteps('steps-to-calories', { weight_kg: Math.round(weightKg) }, { calories: Math.round(calories) }, 'results-section');
    }
  }

});
