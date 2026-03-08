// Unit toggle for water intake calculator
function toggleWaterUnit(unit) {
  var metricBtn = document.getElementById('metric-btn');
  var imperialBtn = document.getElementById('imperial-btn');
  var metricFields = document.querySelector('.metric-inputs');
  var imperialFields = document.querySelector('.imperial-inputs');

  if (unit === 'metric') {
    metricBtn.classList.add('active');
    imperialBtn.classList.remove('active');
    metricFields.classList.remove('hidden');
    imperialFields.classList.add('hidden');
  } else {
    imperialBtn.classList.add('active');
    metricBtn.classList.remove('active');
    imperialFields.classList.remove('hidden');
    metricFields.classList.add('hidden');
  }
}

// Show/hide pregnancy field based on gender
function togglePregnancyField() {
  var gender = document.getElementById('gender').value;
  var pregnancyGroup = document.getElementById('pregnancy-group');
  if (gender === 'female') {
    pregnancyGroup.classList.remove('hidden');
  } else {
    pregnancyGroup.classList.add('hidden');
    document.getElementById('pregnancy').value = 'no';
  }
}

function calculateWaterIntake() {
  var age = parseInt(document.getElementById('age').value);
  var gender = document.getElementById('gender').value;
  var activity = document.getElementById('activity').value;
  var climate = document.getElementById('climate').value;
  var caffeine = document.getElementById('caffeine').value;
  var pregnancy = document.getElementById('pregnancy').value;
  var isMetric = document.getElementById('metric-btn').classList.contains('active');

  // Get weight in kg
  var weightKg;
  if (isMetric) {
    weightKg = parseFloat(document.getElementById('weight_kg').value);
  } else {
    weightKg = parseFloat(document.getElementById('weight_lb').value) * 0.453592;
  }

  // Validation
  if (!age || !weightKg || isNaN(weightKg)) {
    alert('Please fill all required fields with valid numbers.');
    return;
  }
  if (age < 15 || age > 100) {
    alert('Please enter an age between 15 and 100.');
    return;
  }
  if (weightKg < 30 || weightKg > 300) {
    alert('Please enter a valid weight.');
    return;
  }

  // Base: 35 ml per kg body weight (IOM baseline)
  var baseMl = 35 * weightKg;

  // Activity multipliers
  var activityMultipliers = {
    'sedentary': 1.0,
    'lightly': 1.1,
    'moderately': 1.2,
    'very': 1.4,
    'extremely': 1.6
  };
  var activityMult = activityMultipliers[activity] || 1.0;

  // Climate multipliers
  var climateMultipliers = {
    'temperate': 1.0,
    'hot_humid': 1.2,
    'hot_dry': 1.3,
    'cold': 1.1
  };
  var climateMult = climateMultipliers[climate] || 1.0;

  // Apply activity and climate multipliers
  var adjustedMl = baseMl * activityMult * climateMult;

  // Caffeine offset: add 150ml per 2 caffeinated drinks
  var caffeineOffset = 0;
  if (caffeine === '1-2') {
    caffeineOffset = 150;
  } else if (caffeine === '3-4') {
    caffeineOffset = 300;
  } else if (caffeine === '5+') {
    caffeineOffset = 450;
  }
  adjustedMl += caffeineOffset;

  // Pregnancy/breastfeeding adjustment
  var pregnancyOffset = 0;
  if (gender === 'female') {
    if (pregnancy === 'pregnant') {
      pregnancyOffset = 300;
    } else if (pregnancy === 'breastfeeding') {
      pregnancyOffset = 700;
    }
  }
  adjustedMl += pregnancyOffset;

  // Age adjustment: 65+ reduce by 10%
  if (age >= 65) {
    adjustedMl *= 0.9;
  }

  // Convert to liters and oz
  var totalLiters = adjustedMl / 1000;
  var totalOz = adjustedMl * 0.033814;
  var glasses = totalOz / 8; // 8 oz glasses

  // Hourly intake (assume 16 waking hours)
  var hourlyMl = adjustedMl / 16;
  var hourlyOz = totalOz / 16;

  // Hydration schedule (split: 30% morning, 25% midday, 25% afternoon, 20% evening)
  var morningMl = adjustedMl * 0.30;
  var middayMl = adjustedMl * 0.25;
  var afternoonMl = adjustedMl * 0.25;
  var eveningMl = adjustedMl * 0.20;

  // Populate results
  document.getElementById('water-display').textContent = totalLiters.toFixed(1);
  document.getElementById('water-oz-display').textContent = Math.round(totalOz) + ' oz/day';
  document.getElementById('glasses-display').textContent = Math.round(glasses) + ' glasses';
  document.getElementById('hourly-display').textContent = Math.round(hourlyMl) + ' ml (~' + Math.round(hourlyOz) + ' oz)';

  // Schedule
  document.getElementById('schedule-morning').textContent = Math.round(morningMl) + ' ml (' + Math.round(morningMl * 0.033814) + ' oz)';
  document.getElementById('schedule-midday').textContent = Math.round(middayMl) + ' ml (' + Math.round(middayMl * 0.033814) + ' oz)';
  document.getElementById('schedule-afternoon').textContent = Math.round(afternoonMl) + ' ml (' + Math.round(afternoonMl * 0.033814) + ' oz)';
  document.getElementById('schedule-evening').textContent = Math.round(eveningMl) + ' ml (' + Math.round(eveningMl * 0.033814) + ' oz)';

  // Adjustment factors display
  var activityLabels = {
    'sedentary': 'Sedentary',
    'lightly': 'Lightly Active',
    'moderately': 'Moderately Active',
    'very': 'Very Active',
    'extremely': 'Extremely Active'
  };
  var climateLabels = {
    'temperate': 'Temperate',
    'hot_humid': 'Hot & Humid',
    'hot_dry': 'Hot & Dry',
    'cold': 'Cold'
  };

  document.getElementById('adj-activity').textContent = activityMult.toFixed(1) + 'x (' + (activityLabels[activity] || '') + ')';
  document.getElementById('adj-climate').textContent = climateMult.toFixed(1) + 'x (' + (climateLabels[climate] || '') + ')';

  // Build "other" adjustments description
  var otherParts = [];
  if (caffeineOffset > 0) {
    otherParts.push('+' + caffeineOffset + ' ml caffeine');
  }
  if (pregnancyOffset > 0) {
    otherParts.push('+' + pregnancyOffset + ' ml ' + pregnancy);
  }
  if (age >= 65) {
    otherParts.push('-10% age 65+');
  }
  document.getElementById('adj-other').textContent = otherParts.length > 0 ? otherParts.join(', ') : 'None';

  // Show results
  var resultsEl = document.getElementById('results');
  resultsEl.classList.remove('hidden');
  resultsEl.classList.remove('results-reveal');
  void resultsEl.offsetWidth;
  resultsEl.classList.add('results-reveal');
  resultsEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

  // Content loop: contextual next steps
  var userData = collectUserData();
  showNextSteps('water-intake', userData);
}
