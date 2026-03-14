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
  document.querySelectorAll('#activity-cards .activity-card').forEach(function(c) { c.classList.remove('active'); });
  el.classList.add('active');
  document.getElementById('activity').value = el.getAttribute('data-value');
  autoRecalc();
}

// Goal card selector
function setGoal(el) {
  document.querySelectorAll('#goal-cards .goal-card').forEach(function(c) { c.classList.remove('active'); });
  el.classList.add('active');
  document.getElementById('goal').value = el.getAttribute('data-value');
  autoRecalc();
}

// Body type toggle
function setBodyType(el) {
  document.querySelectorAll('.bodytype-btn').forEach(function(btn) {
    btn.classList.toggle('active', btn === el);
  });
  document.getElementById('body_type').value = el.getAttribute('data-value');
  autoRecalc();
}

// Auto-recalculate after first calculation
var _proteinCalculated = false;
function autoRecalc() {
  if (_proteinCalculated) {
    calculateProtein(true);
  }
}

function calculateProtein(silent) {
    var age = parseInt(document.getElementById('age').value);
    var gender = document.getElementById('gender').value;
    var activity = document.getElementById('activity').value;
    var goal = document.getElementById('goal').value;
    var bodyType = document.getElementById('body_type').value;
    var isMetric = document.getElementById('metric-btn').classList.contains('active');

    var weightKg;

    if (isMetric) {
        weightKg = parseFloat(document.getElementById('weight_kg').value);
    } else {
        var weightLb = parseFloat(document.getElementById('weight_lb').value);
        weightKg = weightLb * 0.453592;
    }

    // Validate inputs
    if (!weightKg || weightKg <= 0 || !age || age < 1 || age > 120) {
        if (!silent) alert('Please enter valid values for all fields.');
        return;
    }

    _proteinCalculated = true;

    // Determine effective weight for calculation
    // For overweight body type, use an adjusted body weight estimate (lean mass approximation)
    var effectiveWeight = weightKg;
    if (bodyType === 'overweight') {
        // Adjusted body weight: use ~75% of total weight as proxy for lean-adjusted target
        effectiveWeight = weightKg * 0.75;
    }

    // Base protein per kg by activity level (g/kg)
    var proteinPerKg;
    switch (activity) {
        case 'sedentary':
            proteinPerKg = 0.8;
            break;
        case 'lightly_active':
            proteinPerKg = 1.1;
            break;
        case 'moderately_active':
            proteinPerKg = 1.3;
            break;
        case 'very_active':
            proteinPerKg = 1.6;
            break;
        case 'extremely_active':
            proteinPerKg = 2.0;
            break;
        default:
            proteinPerKg = 0.8;
    }

    // Goal adjustment multipliers
    switch (goal) {
        case 'build_muscle':
            proteinPerKg *= 1.20;
            break;
        case 'lose_fat':
            proteinPerKg *= 1.15;
            break;
        case 'maintain':
        case 'general_health':
        default:
            // no adjustment
            break;
    }

    // Age adjustment: older adults (>65) benefit from slightly higher protein
    if (age >= 65) {
        proteinPerKg = Math.max(proteinPerKg, 1.0);
        proteinPerKg *= 1.1;
    }

    // Calculate total daily protein
    var totalProtein = Math.round(effectiveWeight * proteinPerKg);

    // Per meal breakdown
    var perMeal3 = Math.round(totalProtein / 3);
    var perMeal4 = Math.round(totalProtein / 4);

    // Protein per kg of actual body weight (for display)
    var displayPerKg = (totalProtein / weightKg).toFixed(1);

    // Display results
    document.getElementById('protein-total').textContent = totalProtein + 'g';
    document.getElementById('protein-per-kg').textContent = displayPerKg + ' g/kg';
    document.getElementById('protein-per-lb').textContent = (totalProtein / (weightKg / 0.453592)).toFixed(1) + ' g/lb';
    document.getElementById('protein-3-meals').textContent = perMeal3 + 'g per meal';
    document.getElementById('protein-4-meals').textContent = perMeal4 + 'g per meal';

    // Update progress gauge
    var gaugePercentage = Math.min((proteinPerKg / 2.5) * 100, 100);
    document.getElementById('protein-gauge-fill').style.width = gaugePercentage + '%';

    var rangeLabel;
    if (proteinPerKg <= 1.0) {
        rangeLabel = 'Baseline (RDA)';
    } else if (proteinPerKg <= 1.4) {
        rangeLabel = 'Moderate';
    } else if (proteinPerKg <= 1.8) {
        rangeLabel = 'Active / Athletic';
    } else {
        rangeLabel = 'High Performance';
    }
    document.getElementById('protein-range-label').textContent = rangeLabel;

    // Goal context text
    var goalText;
    switch (goal) {
        case 'build_muscle':
            goalText = 'Your protein target is elevated to support muscle protein synthesis. Distribute evenly across meals for optimal absorption.';
            break;
        case 'lose_fat':
            goalText = 'Higher protein during fat loss helps preserve lean muscle mass and increases satiety. Aim to hit this target daily.';
            break;
        case 'maintain':
            goalText = 'This intake supports muscle maintenance at your current activity level. Consistent daily intake is key.';
            break;
        case 'general_health':
        default:
            goalText = 'This meets recommended guidelines for general health and daily function. A balanced diet should cover this easily.';
    }
    document.getElementById('protein-goal-context').textContent = goalText;

    if (bodyType === 'overweight') {
        document.getElementById('protein-bodytype-note').classList.remove('hidden');
    } else {
        document.getElementById('protein-bodytype-note').classList.add('hidden');
    }

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

    // Content loops integration
    showNextSteps('protein-intake', collectUserData());
}

// Wire up auto-recalc on input change
document.addEventListener('DOMContentLoaded', function() {
    var inputs = document.querySelectorAll('#age, #weight_kg, #weight_lb');
    inputs.forEach(function(input) {
        input.addEventListener('input', autoRecalc);
    });
});
