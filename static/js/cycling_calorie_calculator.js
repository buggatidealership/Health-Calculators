document.addEventListener('DOMContentLoaded', function () {

  /**
   * Cycling Calorie Calculator
   *
   * Formula: MET-based calorie estimation from the Compendium of Physical
   * Activities (Ainsworth et al., 2011, Medicine & Science in Sports & Exercise).
   *
   * Calories (kcal) = MET × weight_kg × duration_hours
   *
   * MET values (selected from the 2011 Compendium, code 01):
   *   Road cycling < 10 mph, leisure       → 4.0
   *   Road cycling 10–11.9 mph, easy       → 6.8
   *   Road cycling 12–13.9 mph, moderate   → 8.0
   *   Road cycling 14–15.9 mph, vigorous   → 10.0
   *   Road cycling 16–19 mph, racing       → 12.0
   *   Road cycling ≥ 20 mph, very fast     → 15.8
   *   Mountain biking, general             → 8.5
   *   Stationary bike, light effort        → 3.5
   *   Stationary bike, moderate effort     → 5.5
   *   Stationary bike, vigorous effort     → 8.5
   *
   * Fat burned (g) ≈ calories × fat_fraction / 9.44
   *   Fat fraction varies by exercise intensity (MET):
   *   MET < 4:   ~60% fat (light intensity, primarily fat-burning zone)
   *   MET 4–6:   ~50% fat (moderate intensity)
   *   MET 6–9:   ~40% fat (vigorous intensity, more carb utilization)
   *   MET ≥ 9:   ~25% fat (high intensity, predominantly carbohydrate fuel)
   *   (Based on RER data from Achten & Jeukendrup, 2004)
   */

  // ── MET table ─────────────────────────────────────────────────────────────
  var CYCLING_TYPES = {
    'road-leisure':   { met: 4.0,  label: 'Road cycling — leisurely (<10 mph)' },
    'road-easy':      { met: 6.8,  label: 'Road cycling — easy (10–11.9 mph)' },
    'road-moderate':  { met: 8.0,  label: 'Road cycling — moderate (12–13.9 mph)' },
    'road-vigorous':  { met: 10.0, label: 'Road cycling — vigorous (14–15.9 mph)' },
    'road-racing':    { met: 12.0, label: 'Road cycling — racing (16–19 mph)' },
    'road-very-fast': { met: 15.8, label: 'Road cycling — very fast (≥20 mph)' },
    'mountain':       { met: 8.5,  label: 'Mountain biking — general' },
    'stationary-light':    { met: 3.5, label: 'Stationary bike — light effort' },
    'stationary-moderate': { met: 5.5, label: 'Stationary bike — moderate effort' },
    'stationary-vigorous': { met: 8.5, label: 'Stationary bike — vigorous effort' }
  };

  // ── DOM Elements ──────────────────────────────────────────────────────────
  var weightEl       = document.getElementById('weight');
  var weightUnitEl   = document.getElementById('weight-unit');
  var cyclingTypeEl  = document.getElementById('cycling-type');
  var durationEl     = document.getElementById('duration');
  var calcBtn        = document.getElementById('calculate-btn');
  var errorEl        = document.getElementById('calc-error');
  var resultsSection = document.getElementById('results-section');

  var resultCaloriesEl  = document.getElementById('result-calories');
  var resultCalPerMinEl = document.getElementById('result-cal-per-min');
  var resultFatEl       = document.getElementById('result-fat');
  var resultMETEl       = document.getElementById('result-met');
  var resultTypeEl      = document.getElementById('result-type');
  var resultHourEl      = document.getElementById('result-per-hour');

  var displayWeightEl   = document.getElementById('display-weight');
  var displayTypeEl     = document.getElementById('display-type');
  var displayDurEl      = document.getElementById('display-duration');

  var compTableBody     = document.getElementById('comparison-table-body');

  // ── Enter key support ─────────────────────────────────────────────────────
  [weightEl, durationEl].forEach(function (el) {
    if (el) el.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') calculate();
    });
  });

  // ── Calculate button ──────────────────────────────────────────────────────
  if (calcBtn) {
    calcBtn.addEventListener('click', function () { calculate(); });
  }

  // ── Utility helpers ───────────────────────────────────────────────────────
  function showError(msg) {
    if (errorEl) {
      errorEl.textContent = msg;
      errorEl.classList.remove('hidden');
    }
    if (resultsSection) resultsSection.classList.add('hidden');
  }

  function clearError() {
    if (errorEl) {
      errorEl.textContent = '';
      errorEl.classList.add('hidden');
    }
  }

  /**
   * Fat oxidation fraction at a given MET.
   * Based on Achten & Jeukendrup (2004) fat oxidation vs. exercise intensity data.
   */
  function fatFraction(met) {
    if (met < 4)   return 0.60;
    if (met < 6)   return 0.50;
    if (met < 9)   return 0.40;
    return 0.25;
  }

  /**
   * Calculate calories from MET
   * @param {number} met
   * @param {number} weightKg
   * @param {number} durationMin
   * @returns {number} kcal
   */
  function calcCalories(met, weightKg, durationMin) {
    return met * weightKg * (durationMin / 60);
  }

  // ── Main calculation ───────────────────────────────────────────────────────
  function calculate() {
    clearError();

    // Parse weight
    var weight     = parseFloat(weightEl ? weightEl.value : '');
    var weightUnit = weightUnitEl ? weightUnitEl.value : 'lbs';
    if (isNaN(weight) || weight <= 0) {
      return showError('Please enter your body weight.');
    }
    var weightKg = (weightUnit === 'lbs') ? weight / 2.20462 : weight;
    if (weightKg < 20 || weightKg > 300) {
      return showError('Please enter a realistic body weight (44–661 lbs / 20–300 kg).');
    }

    // Parse cycling type
    var typeKey = cyclingTypeEl ? cyclingTypeEl.value : 'road-moderate';
    var typeData = CYCLING_TYPES[typeKey];
    if (!typeData) {
      return showError('Please select a cycling type.');
    }
    var met = typeData.met;

    // Parse duration
    var duration = parseFloat(durationEl ? durationEl.value : '');
    if (isNaN(duration) || duration <= 0) {
      return showError('Please enter workout duration in minutes.');
    }
    if (duration > 600) {
      return showError('Duration seems too long. Please enter minutes (max 600 min = 10 hours).');
    }

    // ── Core calculation ───────────────────────────────────────────────────
    var calories   = calcCalories(met, weightKg, duration);
    var calPerMin  = calories / duration;
    var calPerHour = calPerMin * 60;
    var ff         = fatFraction(met);
    var fatGrams   = (calories * ff) / 9.44;

    // ── Display results ────────────────────────────────────────────────────
    if (resultCaloriesEl)  resultCaloriesEl.textContent  = Math.round(calories);
    if (resultCalPerMinEl) resultCalPerMinEl.textContent = calPerMin.toFixed(1);
    if (resultFatEl)       resultFatEl.textContent       = fatGrams.toFixed(1) + ' g';
    if (resultMETEl)       resultMETEl.textContent       = met.toFixed(1);
    if (resultTypeEl)      resultTypeEl.textContent      = typeData.label;
    if (resultHourEl)      resultHourEl.textContent      = Math.round(calPerHour);

    if (displayWeightEl) displayWeightEl.textContent = weightUnit === 'lbs'
      ? weight + ' lbs (' + weightKg.toFixed(1) + ' kg)'
      : weight + ' kg';
    if (displayTypeEl) displayTypeEl.textContent = typeData.label;
    if (displayDurEl)  displayDurEl.textContent   = duration + ' min';

    // ── Intensity comparison table ─────────────────────────────────────────
    if (compTableBody) {
      var rows = '';
      Object.keys(CYCLING_TYPES).forEach(function (key) {
        var t      = CYCLING_TYPES[key];
        var cal    = calcCalories(t.met, weightKg, duration);
        var isActive = (key === typeKey);
        rows += '<tr' + (isActive ? ' style="background:var(--color-accent-light,#e0f2fe);font-weight:600;"' : '') + '>' +
          '<td style="padding:7px 10px;border-bottom:1px solid #f0f0f0;">' + t.label + '</td>' +
          '<td style="padding:7px 10px;border-bottom:1px solid #f0f0f0;">' + t.met.toFixed(1) + '</td>' +
          '<td style="padding:7px 10px;border-bottom:1px solid #f0f0f0;font-weight:' + (isActive ? '700' : '400') + ';">' +
            Math.round(cal) + ' kcal</td>' +
          '</tr>';
      });
      compTableBody.innerHTML = rows;
    }

    // ── Show results ───────────────────────────────────────────────────────
    if (resultsSection) {
      resultsSection.classList.remove('hidden');
    }

    // ── Animate ────────────────────────────────────────────────────────────
    if (typeof celebratePulse === 'function') {
      celebratePulse('results-section');
    }

    // ── Cross-links ────────────────────────────────────────────────────────
    if (typeof showNextSteps === 'function') {
      showNextSteps(
        'cycling-calories',
        { weight_kg: Math.round(weightKg) },
        { calories: Math.round(calories) },
        'results-section'
      );
    }
  }

});
