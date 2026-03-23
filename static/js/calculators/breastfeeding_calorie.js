// Breastfeeding Calorie Calculator — factory-compatible
(function() {
var unitSystem = document.getElementById('unit-system');
var imperialInputs = document.getElementById('imperial-inputs');
var metricInputs = document.getElementById('metric-inputs');
var calculateBtn = document.getElementById('calcBtn');
var resultsSection = document.getElementById('results-section');

// Unit toggle
if (unitSystem) {
  unitSystem.addEventListener('change', function() {
    if (unitSystem.value === 'imperial') {
      imperialInputs.classList.remove('hidden');
      metricInputs.classList.add('hidden');
    } else {
      imperialInputs.classList.add('hidden');
      metricInputs.classList.remove('hidden');
    }
  });
}

calculateBtn.addEventListener('click', function() {
  var age = parseFloat(document.getElementById('age').value);
  var activityLevel = parseFloat(document.getElementById('activity-level').value);
  var monthsPostpartum = parseInt(document.getElementById('months-postpartum').value);
  var bfType = document.getElementById('bf-type').value;
  var goal = document.getElementById('goal').value;

  // Validate age
  if (isNaN(age) || age < 15 || age > 65) {
    return;
  }

  // Get weight and height in metric
  var weightKg, heightCm;
  if (unitSystem && unitSystem.value === 'metric') {
    weightKg = parseFloat(document.getElementById('weight-kg').value);
    heightCm = parseFloat(document.getElementById('height-cm').value);
    if (isNaN(weightKg) || weightKg < 30 || weightKg > 250) {
      /* validation error */.');
      return;
    }
    if (isNaN(heightCm) || heightCm < 100 || heightCm > 230) {
      /* validation error */.');
      return;
    }
  } else {
    var heightFt = parseFloat(document.getElementById('height-ft').value) || 0;
    var heightIn = parseFloat(document.getElementById('height-in').value) || 0;
    var weightLbs = parseFloat(document.getElementById('weight-lbs').value);
    if (isNaN(weightLbs) || weightLbs < 66 || weightLbs > 550) {
      /* validation error */.');
      return;
    }
    if (heightFt < 3 || heightFt > 7) {
      return;
    }
    weightKg = weightLbs * 0.453592;
    heightCm = (heightFt * 12 + heightIn) * 2.54;
  }

  // Mifflin-St Jeor BMR for women
  // BMR = (10 × weight kg) + (6.25 × height cm) − (5 × age) − 161
  var bmr = (10 * weightKg) + (6.25 * heightCm) - (5 * age) - 161;

  // TDEE = BMR × activity factor
  var tdee = bmr * activityLevel;

  // Lactation calorie addition (based on IOM/NAM Dietary Reference Intakes)
  // Exclusive breastfeeding: +500 kcal/day (months 1–6), +400 kcal/day (months 7–12)
  // Partial/combo feeding: +250 kcal/day
  var lactationAdd;
  var lactationLabel;
  if (bfType === 'exclusive') {
    if (monthsPostpartum <= 6) {
      lactationAdd = 500;
      lactationLabel = 'Exclusive breastfeeding, months 1–6 (+500 kcal)';
    } else {
      lactationAdd = 400;
      lactationLabel = 'Exclusive breastfeeding, months 7–12 (+400 kcal)';
    }
  } else if (bfType === 'partial') {
    lactationAdd = 250;
    lactationLabel = 'Partial/combo breastfeeding (+250 kcal)';
  } else {
    // pumping_only
    if (monthsPostpartum <= 6) {
      lactationAdd = 500;
      lactationLabel = 'Exclusive pumping, months 1–6 (+500 kcal)';
    } else {
      lactationAdd = 400;
      lactationLabel = 'Exclusive pumping, months 7–12 (+400 kcal)';
    }
  }

  var totalCalories = Math.round(tdee + lactationAdd);

  // Goal adjustments
  var goalAdjustment = 0;
  var goalLabel = '';
  var recommendedCalories;
  var safeMinimum = 1500; // AAP/ACOG minimum for breastfeeding women

  if (goal === 'lose') {
    goalAdjustment = -500;
    goalLabel = 'Weight loss deficit (−500 kcal/day)';
    recommendedCalories = Math.max(totalCalories + goalAdjustment, safeMinimum);
  } else if (goal === 'gain') {
    goalAdjustment = 300;
    goalLabel = 'Weight gain surplus (+300 kcal/day)';
    recommendedCalories = totalCalories + goalAdjustment;
  } else {
    goalAdjustment = 0;
    goalLabel = 'Maintain current weight';
    recommendedCalories = totalCalories;
  }

  var isCappedAtMinimum = (goal === 'lose' && totalCalories - 500 < safeMinimum);

  // Display results
  resultsSection.classList.remove('hidden');

  var heroEl = document.getElementById('calorie-result');
  heroEl.textContent = recommendedCalories.toLocaleString();
  if (typeof animateCountUp === 'function') {
    animateCountUp(heroEl, 0, recommendedCalories, 0, '');
  }

  document.getElementById('calorie-label').textContent = 'calories per day';

  // Status message
  var statusEl = document.getElementById('calorie-status');
  var iconEl = document.getElementById('calorie-icon');
  var descEl = document.getElementById('calorie-description');

  if (isCappedAtMinimum) {
    statusEl.className = 'result-status status-warning';
    iconEl.textContent = '⚠';
    descEl.textContent = 'Your calculated intake after the weight loss deficit fell below ' + safeMinimum + ' kcal/day. We\'ve adjusted to the safe minimum for breastfeeding. Eating too little can reduce your milk supply and leave you depleted. Consult your doctor before cutting calories further.';
  } else if (goal === 'lose') {
    statusEl.className = 'result-status status-good';
    iconEl.textContent = '✓';
    descEl.textContent = 'A 500 kcal/day deficit supports ~0.5 kg (1 lb) of weight loss per week. This is generally considered safe for breastfeeding after the first 6–8 weeks postpartum, as long as intake stays above 1,500 kcal/day.';
  } else {
    statusEl.className = 'result-status status-good';
    iconEl.textContent = '✓';
    descEl.textContent = 'Eating ' + recommendedCalories.toLocaleString() + ' kcal/day supports both your energy needs and adequate milk production. Focus on nutrient-dense whole foods to meet your micronutrient needs.';
  }

  // Macro recommendations (based on IOM DRI)
  var proteinG = Math.round(weightKg * 1.3); // ~1.3 g/kg for breastfeeding (higher than baseline 0.8)
  var proteinCal = proteinG * 4;
  var fatCal = Math.round(recommendedCalories * 0.30);
  var fatG = Math.round(fatCal / 9);
  var carbCal = recommendedCalories - proteinCal - fatCal;
  var carbG = Math.round(carbCal / 4);

  // Breakdown table
  document.getElementById('display-bmr').textContent = Math.round(bmr).toLocaleString() + ' kcal';
  document.getElementById('display-tdee').textContent = Math.round(tdee).toLocaleString() + ' kcal';
  document.getElementById('display-lactation').textContent = '+' + lactationAdd + ' kcal (' + lactationLabel + ')';
  document.getElementById('display-goal').textContent = goalAdjustment === 0 ? 'No adjustment (' + goalLabel + ')' : (goalAdjustment > 0 ? '+' : '') + goalAdjustment + ' kcal (' + goalLabel + ')';
  document.getElementById('display-total').textContent = recommendedCalories.toLocaleString() + ' kcal/day';

  // Macros
  document.getElementById('display-protein').textContent = proteinG + ' g/day (' + proteinCal + ' kcal)';
  document.getElementById('display-fat').textContent = fatG + ' g/day (' + fatCal + ' kcal)';
  document.getElementById('display-carbs').textContent = carbG + ' g/day (' + carbCal + ' kcal)';

  // Key nutrients table
  document.getElementById('display-calcium').textContent = '1,000 mg/day (dairy, leafy greens, fortified foods)';
  document.getElementById('display-iodine').textContent = '290 mcg/day (seafood, dairy, iodized salt)';
  document.getElementById('display-iron').textContent = '9 mg/day (lean meat, legumes, fortified cereals)';
  document.getElementById('display-dha').textContent = '200–300 mg/day (fatty fish 2x/week or supplement)';
  document.getElementById('display-folate').textContent = '500 mcg DFE/day (leafy greens, legumes, fortified grains)';
  document.getElementById('display-vitd').textContent = '600 IU/day (sunlight, fortified dairy, supplement)';
  document.getElementById('display-water').textContent = '~128 oz (3.8 L) / 16 cups per day';

  // Safe minimum note
  var minNote = document.getElementById('minimum-note');
  if (goal === 'lose') {
    minNote.classList.remove('hidden');
    document.getElementById('minimum-value').textContent = safeMinimum.toLocaleString();
  } else {
    minNote.classList.add('hidden');
  }

  resultsSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

  if (typeof celebratePulse === 'function') {
    celebratePulse(document.getElementById('result-hero'));
  }

  if (typeof showNextSteps === 'function') {
    showNextSteps('breastfeeding-calorie', {});
  }
});

// Reveal results
if (typeof factoryReveal === 'function') { factoryReveal(); }
})();
