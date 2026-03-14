document.addEventListener('DOMContentLoaded', function () {

  /**
   * Treadmill Calorie Calculator
   *
   * Formula: ACSM Metabolic Equations (ACSM's Guidelines for Exercise Testing
   * and Prescription, 11th Ed., 2022)
   *
   * Walking (speed 50–100 m/min ≈ 1.9–3.7 mph):
   *   VO2 (mL/kg/min) = 0.1 × S + 1.8 × S × G + 3.5
   *
   * Running (speed > 134 m/min ≈ > 5.0 mph):
   *   VO2 (mL/kg/min) = 0.2 × S + 0.9 × S × G + 3.5
   *
   * Jogging zone (3.7–5.0 mph): we interpolate linearly to avoid a step jump.
   *
   * Where S = speed in m/min, G = fractional grade (e.g. 0.10 for 10%)
   *
   * Calories (kcal) = VO2 × weight_kg × duration_min / 200
   *   (derived from: VO2 mL/kg/min × kg = mL O2/min;
   *    × duration = mL O2 total; ÷ 1000 = L O2;
   *    × 5 kcal/L O2 ≈ kcal; combined: ÷ 200)
   *
   * MET = VO2 / 3.5
   *
   * Fat burned (g) ≈ calories × 0.83 / 9.44
   *   (fat oxidation fraction ~0.83 at moderate aerobic intensity;
   *    9.44 kcal/g fat — Frayn, 1983)
   */

  // ── DOM Elements ────────────────────────────────────────────────────────────
  var weightEl         = document.getElementById('weight');
  var weightUnitEl     = document.getElementById('weight-unit');
  var speedEl          = document.getElementById('speed');
  var speedUnitEl      = document.getElementById('speed-unit');
  var inclineEl        = document.getElementById('incline');
  var inclineValEl     = document.getElementById('incline-display');
  var durationEl       = document.getElementById('duration');
  var calcBtn          = document.getElementById('calculate-btn');
  var errorEl          = document.getElementById('calc-error');
  var resultsSection   = document.getElementById('results-section');

  var resultCaloriesEl = document.getElementById('result-calories');
  var resultCalPerMinEl= document.getElementById('result-cal-per-min');
  var resultFatEl      = document.getElementById('result-fat');
  var resultMETEl      = document.getElementById('result-met');
  var resultVo2El      = document.getElementById('result-vo2');
  var resultTypeEl     = document.getElementById('result-type');

  var displayWeightEl  = document.getElementById('display-weight');
  var displaySpeedEl   = document.getElementById('display-speed');
  var displayInclineEl = document.getElementById('display-incline');
  var displayDurEl     = document.getElementById('display-duration');
  var displayFormEl    = document.getElementById('display-formula');

  var inclineTableBody = document.getElementById('incline-table-body');
  var flatBonusEl      = document.getElementById('flat-bonus');

  // ── Sync incline slider ↔ number ─────────────────────────────────────────
  if (inclineEl && inclineValEl) {
    inclineEl.addEventListener('input', function () {
      inclineValEl.value = parseFloat(this.value).toFixed(1);
    });
    inclineValEl.addEventListener('input', function () {
      var v = parseFloat(this.value);
      if (!isNaN(v) && v >= 0 && v <= 40) {
        inclineEl.value = v;
      }
    });
  }

  // ── Speed unit label toggle ──────────────────────────────────────────────
  var speedLabelEl = document.getElementById('speed-label');
  if (speedUnitEl && speedLabelEl) {
    speedUnitEl.addEventListener('change', function () {
      speedLabelEl.textContent = this.value === 'mph' ? 'mph' : 'km/h';
    });
  }

  // ── Enter key support ────────────────────────────────────────────────────
  [weightEl, speedEl, durationEl, inclineValEl].forEach(function (el) {
    if (el) el.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') calculate();
    });
  });

  // ── Calculate button ─────────────────────────────────────────────────────
  if (calcBtn) {
    calcBtn.addEventListener('click', function () {
      calculate();
    });
  }

  // ── Utility helpers ──────────────────────────────────────────────────────
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
   * ACSM VO2 for treadmill exercise (mL/kg/min)
   * @param {number} speedMPerMin - treadmill belt speed in m/min
   * @param {number} grade        - fractional grade (0.05 = 5%)
   * @returns {number} VO2 in mL/kg/min
   */
  function calcVO2(speedMPerMin, grade) {
    var WALK_MAX  = 100;   // ~3.7 mph upper bound for ACSM walk eq
    var RUN_MIN   = 134;   // ~5.0 mph lower bound for ACSM run eq
    var vo2Walk   = 0.1 * speedMPerMin + 1.8 * speedMPerMin * grade + 3.5;
    var vo2Run    = 0.2 * speedMPerMin + 0.9 * speedMPerMin * grade + 3.5;

    if (speedMPerMin <= WALK_MAX) {
      return vo2Walk;
    } else if (speedMPerMin >= RUN_MIN) {
      return vo2Run;
    } else {
      // Linear interpolation in the jogging transition zone
      var t = (speedMPerMin - WALK_MAX) / (RUN_MIN - WALK_MAX);
      return vo2Walk + t * (vo2Run - vo2Walk);
    }
  }

  /**
   * Calories burned (kcal)
   * @param {number} vo2         - mL/kg/min
   * @param {number} weightKg
   * @param {number} durationMin
   * @returns {number} kcal
   */
  function calcCalories(vo2, weightKg, durationMin) {
    return vo2 * weightKg * durationMin / 200;
  }

  // ── Main calculation ──────────────────────────────────────────────────────
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

    // Parse speed
    var speed     = parseFloat(speedEl ? speedEl.value : '');
    var speedUnit = speedUnitEl ? speedUnitEl.value : 'mph';
    if (isNaN(speed) || speed <= 0) {
      return showError('Please enter treadmill speed.');
    }
    var speedMph = (speedUnit === 'kmh') ? speed / 1.60934 : speed;
    if (speedMph < 0.5 || speedMph > 20) {
      return showError('Speed seems outside realistic range (0.5–20 mph / 0.8–32 km/h).');
    }
    var speedMPerMin = speedMph * 26.8224;  // 1 mph = 26.8224 m/min

    // Parse incline
    var incline = parseFloat(inclineEl ? inclineEl.value : '0');
    if (isNaN(incline) || incline < 0 || incline > 40) {
      return showError('Incline must be between 0% and 40%.');
    }
    var grade = incline / 100;

    // Parse duration
    var duration = parseFloat(durationEl ? durationEl.value : '');
    if (isNaN(duration) || duration <= 0) {
      return showError('Please enter workout duration in minutes.');
    }
    if (duration > 600) {
      return showError('Duration seems too long. Please enter minutes (max 600 min = 10 hours).');
    }

    // ── Core calculation ──────────────────────────────────────────────────
    var vo2 = calcVO2(speedMPerMin, grade);
    var calories = calcCalories(vo2, weightKg, duration);
    var met = vo2 / 3.5;
    var calPerMin = calories / duration;

    // Fat burned: ~0.83 of calories at moderate aerobic intensity
    // At MET 3–6 (moderate intensity) fat oxidation ≈ 0.5–0.6 g/min
    // We use the RER-derived estimate: fat (g) ≈ cal × fat_fraction / 9.44
    var fatFraction;
    if (met < 4)        fatFraction = 0.60;   // low intensity: more fat
    else if (met < 7)   fatFraction = 0.50;   // moderate: mixed
    else if (met < 10)  fatFraction = 0.35;   // high intensity: more carbs
    else                fatFraction = 0.20;   // very high: mostly carbs
    var fatGrams = (calories * fatFraction) / 9.44;

    // Activity type label
    var activityType;
    if (speedMph < 3.0)       activityType = 'Walking (slow)';
    else if (speedMph < 4.0)  activityType = 'Walking (brisk)';
    else if (speedMph < 5.0)  activityType = 'Power walking / jogging';
    else if (speedMph < 6.5)  activityType = 'Jogging';
    else if (speedMph < 8.5)  activityType = 'Running';
    else                      activityType = 'Fast running / sprinting';

    var formulaNote;
    if (speedMph <= 3.7) {
      formulaNote = 'ACSM Walking Equation';
    } else if (speedMph >= 5.0) {
      formulaNote = 'ACSM Running Equation';
    } else {
      formulaNote = 'ACSM Blended Equation (walk/run transition)';
    }

    // ── Display results ───────────────────────────────────────────────────
    if (resultCaloriesEl) resultCaloriesEl.textContent = Math.round(calories);
    if (resultCalPerMinEl) resultCalPerMinEl.textContent = calPerMin.toFixed(1);
    if (resultFatEl) resultFatEl.textContent = fatGrams.toFixed(1) + ' g';
    if (resultMETEl) resultMETEl.textContent = met.toFixed(1);
    if (resultVo2El) resultVo2El.textContent = vo2.toFixed(1) + ' mL/kg/min';
    if (resultTypeEl) resultTypeEl.textContent = activityType;

    var speedDisplay = speedUnit === 'kmh'
      ? speed.toFixed(1) + ' km/h (' + speedMph.toFixed(1) + ' mph)'
      : speed.toFixed(1) + ' mph';

    if (displayWeightEl) displayWeightEl.textContent = weightUnit === 'lbs'
      ? weight + ' lbs (' + weightKg.toFixed(1) + ' kg)'
      : weight + ' kg';
    if (displaySpeedEl)   displaySpeedEl.textContent  = speedDisplay;
    if (displayInclineEl) displayInclineEl.textContent = incline.toFixed(1) + '%';
    if (displayDurEl)     displayDurEl.textContent     = duration + ' min';
    if (displayFormEl)    displayFormEl.textContent    = formulaNote;

    // ── Incline comparison table ──────────────────────────────────────────
    if (inclineTableBody) {
      var inclinePoints = [0, 1, 2, 3, 5, 7, 10, 12, 15];
      var flatCals = calcCalories(calcVO2(speedMPerMin, 0), weightKg, duration);
      var rows = '';
      inclinePoints.forEach(function (pct) {
        var g    = pct / 100;
        var v2   = calcVO2(speedMPerMin, g);
        var cal  = calcCalories(v2, weightKg, duration);
        var diff = cal - flatCals;
        var isActive = Math.abs(pct - incline) < 0.5;
        rows += '<tr' + (isActive ? ' style="background:var(--color-accent-light,#e0f2fe);font-weight:600;"' : '') + '>' +
          '<td style="padding:7px 10px;border-bottom:1px solid #f0f0f0;">' + pct + '%</td>' +
          '<td style="padding:7px 10px;border-bottom:1px solid #f0f0f0;font-weight:600;">' + Math.round(cal) + ' kcal</td>' +
          '<td style="padding:7px 10px;border-bottom:1px solid #f0f0f0;color:' + (diff > 0 ? '#16a34a' : '#64748b') + ';">' +
            (diff >= 0 ? '+' : '') + Math.round(diff) + ' kcal</td>' +
          '</tr>';
      });
      inclineTableBody.innerHTML = rows;
    }

    // Flat vs current incline bonus
    if (flatBonusEl) {
      var flatCalVal  = calcCalories(calcVO2(speedMPerMin, 0), weightKg, duration);
      var bonusCal    = calories - flatCalVal;
      if (incline > 0) {
        flatBonusEl.textContent = 'At ' + incline + '% incline you burn ' +
          Math.round(bonusCal) + ' extra kcal (+' +
          Math.round((bonusCal / flatCalVal) * 100) + '%) compared to flat.';
        flatBonusEl.style.display = 'block';
      } else {
        flatBonusEl.textContent = 'Add incline to see how much extra you could burn.';
        flatBonusEl.style.display = 'block';
      }
    }

    // ── Show results ──────────────────────────────────────────────────────
    if (resultsSection) {
      resultsSection.classList.remove('hidden');
    }

    // ── Animate ──────────────────────────────────────────────────────────
    if (typeof celebratePulse === 'function') {
      celebratePulse('results-section');
    }

    // ── Cross-links ───────────────────────────────────────────────────────
    if (typeof showNextSteps === 'function') {
      showNextSteps(
        'treadmill-calories',
        { weight_kg: Math.round(weightKg) },
        { calories: Math.round(calories) },
        'results-section'
      );
    }
  }

});
