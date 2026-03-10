document.addEventListener('DOMContentLoaded', function() {
  var weightInput = document.getElementById('weight');
  var weightUnitSelect = document.getElementById('weight-unit');
  var heightFtInput = document.getElementById('height-ft');
  var heightInInput = document.getElementById('height-in');
  var heightCmInput = document.getElementById('height-cm');
  var heightSystem = document.getElementById('height-system');
  var ageInput = document.getElementById('age');
  var sexSelect = document.getElementById('sex');
  var activitySelect = document.getElementById('activity');
  var surplusSelect = document.getElementById('surplus');
  var calculateBtn = document.getElementById('calculate-btn');
  var resultsSection = document.getElementById('results-section');

  // Toggle height system
  var imperialHeight = document.getElementById('imperial-height');
  var metricHeight = document.getElementById('metric-height');
  heightSystem.addEventListener('change', function() {
    if (heightSystem.value === 'imperial') {
      imperialHeight.classList.remove('hidden');
      metricHeight.classList.add('hidden');
    } else {
      imperialHeight.classList.add('hidden');
      metricHeight.classList.remove('hidden');
    }
  });

  calculateBtn.addEventListener('click', function() {
    var weight = parseFloat(weightInput.value);
    var isLbs = weightUnitSelect.value === 'lbs';
    var age = parseInt(ageInput.value);
    var sex = sexSelect.value;
    var activity = parseFloat(activitySelect.value);
    var surplusType = surplusSelect.value;

    if (isNaN(weight) || weight <= 0) {
      alert('Please enter your body weight.');
      return;
    }
    if (isNaN(age) || age <= 0 || age > 120) {
      alert('Please enter a valid age.');
      return;
    }

    var heightCm;
    if (heightSystem.value === 'imperial') {
      var ft = parseFloat(heightFtInput.value) || 0;
      var inches = parseFloat(heightInInput.value) || 0;
      heightCm = (ft * 12 + inches) * 2.54;
    } else {
      heightCm = parseFloat(heightCmInput.value);
    }

    if (isNaN(heightCm) || heightCm <= 0) {
      alert('Please enter your height.');
      return;
    }

    var weightKg = isLbs ? weight * 0.4536 : weight;
    var weightLbs = isLbs ? weight : weight * 2.2046;

    // Mifflin-St Jeor BMR
    var bmr;
    if (sex === 'male') {
      bmr = 10 * weightKg + 6.25 * heightCm - 5 * age + 5;
    } else {
      bmr = 10 * weightKg + 6.25 * heightCm - 5 * age - 161;
    }

    // TDEE
    var tdee = bmr * activity;

    // Surplus amounts
    var surplusCalories, surplusLabel;
    if (surplusType === 'lean') {
      // Lean bulk: 200-300 cal surplus (~0.25 lb/week gain)
      surplusCalories = 250;
      surplusLabel = 'Lean Bulk (+250 cal)';
    } else if (surplusType === 'moderate') {
      // Standard bulk: 300-500 cal surplus (~0.5 lb/week gain)
      surplusCalories = 400;
      surplusLabel = 'Moderate Bulk (+400 cal)';
    } else {
      // Aggressive bulk: 500-1000 cal surplus (~0.75-1 lb/week gain)
      surplusCalories = 700;
      surplusLabel = 'Aggressive Bulk (+700 cal)';
    }

    var bulkingCalories = Math.round(tdee + surplusCalories);

    // Macros (balanced muscle-building split)
    // Protein: 1g/lb bodyweight (well-established for muscle gain)
    // Fat: 25% of total calories
    // Carbs: remainder
    var proteinG = Math.round(weightLbs * 1.0);
    var fatCal = bulkingCalories * 0.25;
    var fatG = Math.round(fatCal / 9);
    var proteinCal = proteinG * 4;
    var carbCal = bulkingCalories - proteinCal - fatCal;
    var carbG = Math.round(carbCal / 4);

    // Weekly weight gain estimate
    // 3500 cal ~ 1 lb of body mass (mix of muscle + fat)
    var weeklyGainLbs = surplusCalories * 7 / 3500;
    var weeklyGainKg = weeklyGainLbs * 0.4536;
    var monthlyGainLbs = weeklyGainLbs * 4.33;
    var monthlyGainKg = weeklyGainKg * 4.33;

    // Show results
    resultsSection.classList.remove('hidden');

    var heroEl = document.getElementById('bulk-result');
    var labelEl = document.getElementById('bulk-label');
    heroEl.textContent = bulkingCalories.toLocaleString() + ' cal';
    labelEl.textContent = surplusLabel;

    if (typeof animateCountUp === 'function') {
      animateCountUp(heroEl, 0, bulkingCalories, 0, ' cal');
    }

    // Status
    var statusEl = document.getElementById('bulk-status');
    var iconEl = document.getElementById('bulk-icon');
    var descEl = document.getElementById('bulk-description');
    statusEl.className = 'result-status status-good';
    iconEl.textContent = '✓';
    descEl.textContent = 'Eat ' + bulkingCalories.toLocaleString() + ' calories per day to gain approximately ' + weeklyGainLbs.toFixed(2) + ' lbs (' + weeklyGainKg.toFixed(2) + ' kg) per week. This is your TDEE of ' + Math.round(tdee).toLocaleString() + ' + ' + surplusCalories + ' calorie surplus.';

    // Breakdown
    document.getElementById('display-bmr').textContent = Math.round(bmr).toLocaleString() + ' cal/day';
    document.getElementById('display-tdee').textContent = Math.round(tdee).toLocaleString() + ' cal/day';
    document.getElementById('display-surplus').textContent = '+' + surplusCalories + ' cal/day (' + surplusLabel.split('(')[0].trim() + ')';
    document.getElementById('display-total').textContent = bulkingCalories.toLocaleString() + ' cal/day';
    document.getElementById('display-weekly-gain').textContent = weeklyGainLbs.toFixed(2) + ' lbs (' + weeklyGainKg.toFixed(2) + ' kg) per week';
    document.getElementById('display-monthly-gain').textContent = monthlyGainLbs.toFixed(1) + ' lbs (' + monthlyGainKg.toFixed(1) + ' kg) per month';

    // Macros
    document.getElementById('display-protein').textContent = proteinG + 'g (' + Math.round(proteinCal) + ' cal, ' + Math.round(proteinCal / bulkingCalories * 100) + '%)';
    document.getElementById('display-carbs').textContent = carbG + 'g (' + Math.round(carbCal) + ' cal, ' + Math.round(carbCal / bulkingCalories * 100) + '%)';
    document.getElementById('display-fat').textContent = fatG + 'g (' + Math.round(fatCal) + ' cal, ' + Math.round(fatCal / bulkingCalories * 100) + '%)';

    // Comparison boxes
    document.getElementById('comp-maintain').textContent = Math.round(tdee).toLocaleString();
    document.getElementById('comp-bulk').textContent = bulkingCalories.toLocaleString();
    document.getElementById('comp-surplus').textContent = '+' + surplusCalories;

    // Surplus comparison table
    var tbody = document.getElementById('surplus-tbody');
    tbody.innerHTML = '';
    var plans = [
      { name: 'Lean Bulk', surplus: 250, desc: 'Minimal fat gain, slower muscle gain' },
      { name: 'Moderate Bulk', surplus: 400, desc: 'Balanced muscle gain and fat gain' },
      { name: 'Aggressive Bulk', surplus: 700, desc: 'Fastest muscle gain, more fat gain' }
    ];

    for (var i = 0; i < plans.length; i++) {
      var p = plans[i];
      var tr = document.createElement('tr');
      var isCurrent = p.surplus === surplusCalories;
      if (isCurrent) {
        tr.style.background = '#f0f9ff';
        tr.style.fontWeight = '600';
      }
      var totalCal = Math.round(tdee + p.surplus);
      var wkGain = (p.surplus * 7 / 3500).toFixed(2);

      tr.innerHTML =
        '<td style="padding: 6px 10px; border-bottom: 1px solid #f0f0f0;">' + p.name + (isCurrent ? ' ←' : '') + '</td>' +
        '<td style="padding: 6px 10px; border-bottom: 1px solid #f0f0f0;">+' + p.surplus + '</td>' +
        '<td style="padding: 6px 10px; border-bottom: 1px solid #f0f0f0;">' + totalCal.toLocaleString() + '</td>' +
        '<td style="padding: 6px 10px; border-bottom: 1px solid #f0f0f0;">' + wkGain + ' lbs/wk</td>' +
        '<td style="padding: 6px 10px; border-bottom: 1px solid #f0f0f0; color: var(--color-text-tertiary); font-size: 0.85rem;">' + p.desc + '</td>';

      tbody.appendChild(tr);
    }

    resultsSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    if (typeof celebratePulse === 'function') {
      celebratePulse(document.getElementById('result-hero'));
    }

    if (typeof showNextSteps === 'function') {
      showNextSteps('bulking-calories', { weight_kg: weightKg, height_cm: heightCm, age: age, gender: sex });
    }
  });
});
