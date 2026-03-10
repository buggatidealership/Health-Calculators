document.addEventListener('DOMContentLoaded', function() {
  var ageInput = document.getElementById('age');
  var sexSelect = document.getElementById('sex');
  var activitySelect = document.getElementById('activity');
  var exerciseInput = document.getElementById('exercise-minutes');
  var climateSelect = document.getElementById('climate');
  var dietSelect = document.getElementById('diet');
  var conditionSelect = document.getElementById('condition');
  var calculateBtn = document.getElementById('calculate-btn');
  var resultsSection = document.getElementById('results-section');

  // Baseline AI/RDA by age+sex: [sodium, potassium, magnesium, calcium]
  function getBaseline(age, sex, condition) {
    var sodium, potassium, magnesium, calcium;

    if (age < 14) {
      sodium = 1200; potassium = 2300; magnesium = 240; calcium = 1300;
    } else if (age < 19) {
      sodium = 1500; potassium = sex === 'male' ? 3000 : 2300;
      magnesium = sex === 'male' ? 410 : 360; calcium = 1300;
    } else if (age < 31) {
      sodium = 1500; potassium = sex === 'male' ? 3400 : 2600;
      magnesium = sex === 'male' ? 400 : 310; calcium = 1000;
    } else if (age < 51) {
      sodium = 1500; potassium = sex === 'male' ? 3400 : 2600;
      magnesium = sex === 'male' ? 420 : 320; calcium = 1000;
    } else if (age < 71) {
      sodium = 1300; potassium = sex === 'male' ? 3400 : 2600;
      magnesium = sex === 'male' ? 420 : 320; calcium = sex === 'male' ? 1000 : 1200;
    } else {
      sodium = 1200; potassium = sex === 'male' ? 3400 : 2600;
      magnesium = sex === 'male' ? 420 : 320; calcium = 1200;
    }

    if (condition === 'pregnant') {
      potassium = 2900; magnesium = 360; calcium = 1000;
    } else if (condition === 'lactating') {
      potassium = 2800; magnesium = 320; calcium = 1000;
    }

    return { sodium: sodium, potassium: potassium, magnesium: magnesium, calcium: calcium };
  }

  // Sweat rates by activity (L/hr)
  var sweatRates = {
    sedentary: 0,
    light: 0.5,
    moderate: 0.8,
    intense: 1.2,
    endurance: 1.8
  };

  // Sweat electrolyte content (mg per liter)
  var sweatContent = { sodium: 920, potassium: 200, magnesium: 5, calcium: 30 };

  // Climate multipliers
  var climateMultiplier = { temperate: 1.0, warm: 1.25, hot: 1.5 };

  calculateBtn.addEventListener('click', function() {
    var age = parseInt(ageInput.value);
    var sex = sexSelect.value;
    var activity = activitySelect.value;
    var exerciseMin = parseFloat(exerciseInput.value) || 0;
    var climate = climateSelect.value;
    var diet = dietSelect.value;
    var condition = conditionSelect.value;

    if (isNaN(age) || age < 9 || age > 120) { alert('Please enter a valid age (9-120).'); return; }

    var baseline = getBaseline(age, sex, condition);

    // Exercise sweat loss
    var sweatRate = sweatRates[activity];
    var exerciseHrs = exerciseMin / 60;
    var sweatLoss = sweatRate * exerciseHrs * climateMultiplier[climate];

    var exerciseExtra = {
      sodium: Math.round(sweatLoss * sweatContent.sodium),
      potassium: Math.round(sweatLoss * sweatContent.potassium),
      magnesium: Math.round(sweatLoss * sweatContent.magnesium),
      calcium: Math.round(sweatLoss * sweatContent.calcium)
    };

    // Diet adjustments
    var dietAdj = { sodium: 0, potassium: 0, magnesium: 0, calcium: 0 };
    var dietNote = '';
    if (diet === 'keto') {
      dietAdj.sodium = Math.round(baseline.sodium * 1.5);
      dietAdj.potassium = Math.round(baseline.potassium * 0.3);
      dietAdj.magnesium = Math.round(baseline.magnesium * 0.2);
      dietNote = 'Keto/low-carb diets increase sodium excretion due to lower insulin levels. Elevated targets help prevent "keto flu" symptoms.';
    } else if (diet === 'fasting') {
      dietAdj.sodium = Math.round(baseline.sodium * 0.5);
      dietAdj.potassium = Math.round(baseline.potassium * 0.2);
      dietAdj.magnesium = Math.round(baseline.magnesium * 0.3);
      dietNote = 'Fasting depletes electrolytes through increased urination and lack of food intake. Supplementation is often necessary during extended fasts.';
    } else if (diet === 'vegan') {
      dietAdj.calcium = 200;
      dietNote = 'Vegan diets may be lower in calcium if not including fortified foods. Magnesium is typically adequate from plant sources.';
    }

    // Totals
    var total = {
      sodium: baseline.sodium + exerciseExtra.sodium + dietAdj.sodium,
      potassium: baseline.potassium + exerciseExtra.potassium + dietAdj.potassium,
      magnesium: baseline.magnesium + exerciseExtra.magnesium + dietAdj.magnesium,
      calcium: baseline.calcium + exerciseExtra.calcium + dietAdj.calcium
    };

    // Upper limits
    var UL = { sodium: 2300, potassium: null, magnesium: null, calcium: age > 50 ? 2000 : 2500 };

    // Show results
    resultsSection.classList.remove('hidden');

    // Status
    var statusEl = document.getElementById('elec-status');
    var iconEl = document.getElementById('elec-icon');
    var descEl = document.getElementById('elec-description');

    var warnings = [];
    if (total.sodium > 5000) warnings.push('Very high sodium target (' + total.sodium.toLocaleString() + ' mg). This is appropriate for heavy exercise in heat or strict keto, but consult your doctor if you have hypertension.');
    if (exerciseExtra.sodium > 1000) warnings.push('Significant sweat losses estimated. Consider an electrolyte drink during exercise.');

    if (warnings.length > 0) {
      statusEl.className = 'result-status status-warning';
      iconEl.textContent = '\u26A0';
      descEl.textContent = warnings.join(' ');
    } else {
      statusEl.className = 'result-status status-good';
      iconEl.textContent = '\u2713';
      descEl.textContent = 'Your personalized daily electrolyte targets are shown below. These include your baseline needs' + (exerciseExtra.sodium > 0 ? ', exercise sweat losses' : '') + (dietAdj.sodium > 0 ? ', and diet adjustments' : '') + '.';
    }

    // Comparison boxes
    document.getElementById('comp-sodium').textContent = total.sodium.toLocaleString() + ' mg';
    document.getElementById('comp-potassium').textContent = total.potassium.toLocaleString() + ' mg';
    document.getElementById('comp-magnesium').textContent = total.magnesium.toLocaleString() + ' mg';

    // Electrolyte cards
    var elecs = [
      { key: 'sodium', name: 'Sodium', total: total.sodium, base: baseline.sodium, exercise: exerciseExtra.sodium, diet: dietAdj.sodium, ul: UL.sodium, unit: 'mg' },
      { key: 'potassium', name: 'Potassium', total: total.potassium, base: baseline.potassium, exercise: exerciseExtra.potassium, diet: dietAdj.potassium, ul: UL.potassium, unit: 'mg' },
      { key: 'magnesium', name: 'Magnesium', total: total.magnesium, base: baseline.magnesium, exercise: exerciseExtra.magnesium, diet: dietAdj.magnesium, ul: UL.magnesium, unit: 'mg' },
      { key: 'calcium', name: 'Calcium', total: total.calcium, base: baseline.calcium, exercise: exerciseExtra.calcium, diet: dietAdj.calcium, ul: UL.calcium, unit: 'mg' }
    ];

    var breakdownEl = document.getElementById('elec-breakdown');
    breakdownEl.innerHTML = '';

    for (var i = 0; i < elecs.length; i++) {
      var e = elecs[i];
      var parts = ['Baseline: ' + e.base.toLocaleString() + ' mg'];
      if (e.exercise > 0) parts.push('Exercise: +' + e.exercise.toLocaleString() + ' mg');
      if (e.diet > 0) parts.push('Diet adj: +' + e.diet.toLocaleString() + ' mg');

      var ulNote = '';
      if (e.ul && e.total > e.ul && diet === 'standard') {
        ulNote = ' <span style="color:#c27a0e;font-size:0.82rem;">(exceeds standard UL of ' + e.ul.toLocaleString() + ' mg)</span>';
      }

      var div = document.createElement('div');
      div.className = 'result-breakdown';
      div.innerHTML =
        '<div class="result-breakdown-title" style="display:flex;justify-content:space-between;align-items:center;">' +
          '<span>' + e.name + '</span>' +
          '<span style="font-weight:700;font-size:1.1rem;color:var(--color-accent,#0a7e8c);">' + e.total.toLocaleString() + ' mg/day' + ulNote + '</span>' +
        '</div>' +
        '<div style="font-size:0.85rem;color:var(--color-text-tertiary);padding:8px 16px;">' + parts.join(' &middot; ') + '</div>';
      breakdownEl.appendChild(div);
    }

    // Ratio
    var ratio = total.sodium / total.potassium;
    document.getElementById('display-ratio').textContent = '1 : ' + (1 / ratio).toFixed(1);
    var ratioStatus = document.getElementById('ratio-status');
    if (ratio > 1) {
      ratioStatus.textContent = 'Your sodium exceeds potassium. The ideal ratio is approximately 1:1.5 to 1:2 (sodium:potassium). Consider increasing potassium-rich foods.';
      ratioStatus.style.color = '#c27a0e';
    } else {
      ratioStatus.textContent = 'Good balance. Your potassium intake meets or exceeds sodium, which is associated with lower cardiovascular risk.';
      ratioStatus.style.color = '#1a8a4a';
    }

    // Diet note
    var dietNoteEl = document.getElementById('diet-note');
    if (dietNote) {
      dietNoteEl.textContent = dietNote;
      dietNoteEl.parentElement.classList.remove('hidden');
    } else {
      dietNoteEl.parentElement.classList.add('hidden');
    }

    resultsSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    if (typeof celebratePulse === 'function') {
      celebratePulse(document.getElementById('result-hero'));
    }
    if (typeof showNextSteps === 'function') {
      showNextSteps('electrolyte', { age: age, gender: sex });
    }
  });
});
