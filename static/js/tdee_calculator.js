// Unit toggle functionality
function toggleUnit(form, unit) {
  var metricBtn = document.getElementById('metric-btn');
  var imperialBtn = document.getElementById('imperial-btn');
  var metricFields = document.querySelectorAll('.metric-inputs');
  var imperialFields = document.querySelectorAll('.imperial-inputs');

  if (unit === 'metric') {
    metricBtn.classList.add('active');
    imperialBtn.classList.remove('active');
    metricFields.forEach(function(el) { el.classList.remove('hidden'); });
    imperialFields.forEach(function(el) { el.classList.add('hidden'); });
  } else {
    imperialBtn.classList.add('active');
    metricBtn.classList.remove('active');
    imperialFields.forEach(function(el) { el.classList.remove('hidden'); });
    metricFields.forEach(function(el) { el.classList.add('hidden'); });
  }
  autoRecalc();
}

// Sex pill toggle
function setSex(value) {
  document.getElementById('gender').value = value;
  document.querySelectorAll('.sex-btn').forEach(function(btn) {
    btn.classList.toggle('active', btn.getAttribute('data-value') === value);
  });
  autoRecalc();
}

// Activity card selector
function setActivity(el) {
  document.querySelectorAll('.activity-card').forEach(function(c) { c.classList.remove('active'); });
  el.classList.add('active');
  document.getElementById('activity').value = el.getAttribute('data-value');
  autoRecalc();
}

// Auto-recalculate after first calculation
var _tdeeCalculated = false;
function autoRecalc() {
  if (_tdeeCalculated) {
    calculateTDEE(true);
  }
}

function calculateTDEE(silent) {
    var age = parseInt(document.getElementById('age').value);
    var gender = document.getElementById('gender').value;
    var activity = parseFloat(document.getElementById('activity').value);
    var isMetric = document.getElementById('metric-btn').classList.contains('active');

    var weight, height;

    if (isMetric) {
        weight = parseFloat(document.getElementById('weight_kg').value);
        height = parseFloat(document.getElementById('height_cm').value);
    } else {
        weight = parseFloat(document.getElementById('weight_lb').value) * 0.453592;
        var feet = parseFloat(document.getElementById('height_ft').value);
        var inches = parseFloat(document.getElementById('height_in').value) || 0;
        height = (feet * 12 + inches) * 2.54;
    }

    if (!age || !weight || !height || isNaN(weight) || isNaN(height)) {
        if (!silent) alert('Please fill all required fields with valid numbers.');
        return;
    }

    if (age < 15 || age > 100) {
        if (!silent) alert('Please enter an age between 15 and 100.');
        return;
    }

    _tdeeCalculated = true;

    // Mifflin-St Jeor Equation
    var bmr;
    if (gender === 'male') {
        bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
    } else {
        bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161;
    }

    var tdee = Math.round(bmr * activity);
    var bmrRounded = Math.round(bmr);

    // Calorie targets
    var minCalories = gender === 'female' ? 1200 : 1500;
    var lossModerate = Math.max(tdee - 500, minCalories);
    var gainLean = tdee + 250;

    // Macros (30/40/30 split at maintenance)
    var proteinCal = tdee * 0.30;
    var carbsCal = tdee * 0.40;
    var fatCal = tdee * 0.30;
    var proteinG = Math.round(proteinCal / 4);
    var carbsG = Math.round(carbsCal / 4);
    var fatG = Math.round(fatCal / 9);

    // Activity level labels
    var activityLabels = {
        '1.2': 'Sedentary',
        '1.375': 'Lightly Active',
        '1.55': 'Moderately Active',
        '1.725': 'Very Active',
        '1.9': 'Extra Active'
    };

    // Populate results
    document.getElementById('tdee-display').textContent = tdee.toLocaleString();
    document.getElementById('bmr-display').textContent = bmrRounded.toLocaleString() + ' kcal/day';
    document.getElementById('multiplier-display').textContent = '×' + activity + ' (' + (activityLabels[String(activity)] || '') + ')';

    document.getElementById('loss-moderate').textContent = lossModerate.toLocaleString() + ' kcal';
    document.getElementById('maintain').textContent = tdee.toLocaleString() + ' kcal';
    document.getElementById('gain-lean').textContent = gainLean.toLocaleString() + ' kcal';

    document.getElementById('macro-protein').textContent = proteinG + 'g';
    document.getElementById('macro-carbs').textContent = carbsG + 'g';
    document.getElementById('macro-fat').textContent = fatG + 'g';

    // Show results
    var resultsEl = document.getElementById('results');
    var wasHidden = resultsEl.classList.contains('hidden');
    resultsEl.classList.remove('hidden');
    if (wasHidden) {
        resultsEl.classList.remove('results-reveal');
        void resultsEl.offsetWidth;
        resultsEl.classList.add('results-reveal');
    }
    if (!silent) {
        resultsEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    // Content loop: contextual next steps
    var userData = collectUserData();
    showNextSteps('tdee', userData, { tdee: tdee.toLocaleString() });
}

// Wire up auto-recalc on input change
document.addEventListener('DOMContentLoaded', function() {
    var inputs = document.querySelectorAll('#age, #weight_kg, #height_cm, #weight_lb, #height_ft, #height_in');
    inputs.forEach(function(input) {
        input.addEventListener('input', autoRecalc);
    });
});
