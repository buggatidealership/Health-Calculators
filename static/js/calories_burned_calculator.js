// MET values from the Compendium of Physical Activities (Ainsworth et al., 2011)
var MET_VALUES = {
    // Running
    'jogging': 7.0,
    'running_6mph': 9.8,
    'running_8mph': 11.8,
    'sprinting': 23.0,
    // Walking
    'walking_casual': 2.5,
    'walking_brisk': 3.5,
    'hiking': 6.0,
    // Cycling
    'cycling_casual': 4.0,
    'cycling_moderate': 6.8,
    'cycling_vigorous': 10.0,
    // Swimming
    'swimming_leisure': 6.0,
    'swimming_moderate': 7.0,
    'swimming_vigorous': 9.8,
    // Sports
    'basketball': 6.5,
    'soccer': 7.0,
    'tennis': 7.3,
    'golf': 3.5,
    'volleyball': 4.0,
    'baseball': 5.0,
    // Gym
    'weight_training': 6.0,
    'hiit': 8.0,
    'yoga': 3.0,
    'pilates': 3.0,
    'elliptical': 5.0,
    'rowing': 7.0,
    'jump_rope': 12.3,
    'stair_climbing': 9.0,
    // Daily Activities
    'housework': 3.3,
    'gardening': 3.8,
    'cooking': 2.0,
    'sitting': 1.3,
    'standing': 1.8,
    'dancing': 5.5
};

// Food equivalents (approximate calories per serving)
var FOOD_EQUIVALENTS = [
    { name: 'slices of pizza', cal: 285, icon: 'pizza' },
    { name: 'cans of beer', cal: 150, icon: 'beer' },
    { name: 'chocolate chip cookies', cal: 78, icon: 'cookie' },
    { name: 'bananas', cal: 105, icon: 'banana' },
    { name: 'eggs', cal: 78, icon: 'egg' },
    { name: 'tablespoons of peanut butter', cal: 94, icon: 'peanut butter' }
];

// Common foods for "how long to burn" table
var BURN_OFF_FOODS = [
    { name: 'Slice of pizza', cal: 285 },
    { name: 'Cheeseburger', cal: 354 },
    { name: 'Can of soda (12 oz)', cal: 140 },
    { name: 'Chocolate bar', cal: 235 },
    { name: 'Donut', cal: 253 },
    { name: 'Glass of wine (5 oz)', cal: 125 },
    { name: 'Bowl of ice cream', cal: 267 },
    { name: 'Large fries', cal: 490 }
];

// Intensity modifier multipliers
var INTENSITY_MODIFIERS = {
    'light': 0.85,
    'moderate': 1.0,
    'vigorous': 1.15
};

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

// Intensity pill toggle
function setIntensity(el) {
    document.querySelectorAll('.intensity-btn').forEach(function(btn) {
        btn.classList.toggle('active', btn === el);
    });
    document.getElementById('intensity').value = el.getAttribute('data-value');
    autoRecalc();
}

// Auto-recalculate after first calculation
var _calsCalculated = false;
function autoRecalc() {
    if (_calsCalculated) {
        calculateCaloriesBurned(true);
    }
}

function calculateCaloriesBurned(silent) {
    var isMetric = document.getElementById('metric-btn').classList.contains('active');
    var weightKg;

    if (isMetric) {
        weightKg = parseFloat(document.getElementById('weight_kg').value);
    } else {
        var weightLb = parseFloat(document.getElementById('weight_lb').value);
        if (!weightLb || isNaN(weightLb)) {
            if (!silent) alert('Please enter your weight.');
            return;
        }
        weightKg = weightLb * 0.453592;
    }

    if (!weightKg || isNaN(weightKg) || weightKg <= 0) {
        if (!silent) alert('Please enter a valid weight.');
        return;
    }

    var activity = document.getElementById('activity').value;
    var duration = parseFloat(document.getElementById('duration').value);
    var intensity = document.getElementById('intensity').value;

    if (!activity) {
        if (!silent) alert('Please select an activity.');
        return;
    }

    if (!duration || isNaN(duration) || duration <= 0) {
        if (!silent) alert('Please enter a valid duration in minutes.');
        return;
    }

    _calsCalculated = true;

    // Get base MET value
    var baseMet = MET_VALUES[activity];
    if (!baseMet) {
        if (!silent) alert('Activity not found.');
        return;
    }

    // Apply intensity modifier
    var modifier = INTENSITY_MODIFIERS[intensity] || 1.0;
    var adjustedMet = baseMet * modifier;

    // Formula: Calories = MET x weight(kg) x duration(hours)
    var durationHours = duration / 60;
    var totalCalories = adjustedMet * weightKg * durationHours;
    var caloriesPerMinute = totalCalories / duration;

    // Display results
    document.getElementById('total-calories').textContent = Math.round(totalCalories).toLocaleString();
    document.getElementById('calories-per-minute').textContent = caloriesPerMinute.toFixed(1);
    document.getElementById('met-value-used').textContent = adjustedMet.toFixed(1);
    document.getElementById('met-base-value').textContent = baseMet.toFixed(1);
    document.getElementById('intensity-label').textContent = intensity.charAt(0).toUpperCase() + intensity.slice(1) + ' (' + (modifier * 100).toFixed(0) + '%)';

    // Food equivalents
    var equivHtml = '';
    for (var i = 0; i < FOOD_EQUIVALENTS.length; i++) {
        var food = FOOD_EQUIVALENTS[i];
        var equiv = totalCalories / food.cal;
        if (equiv >= 0.1) {
            equivHtml += '<div class="food-equiv-item">';
            equivHtml += '<span class="food-equiv-value">' + equiv.toFixed(1) + '</span> ';
            equivHtml += '<span class="food-equiv-name">' + food.name + '</span>';
            equivHtml += '</div>';
        }
    }
    document.getElementById('food-equivalents').innerHTML = equivHtml;

    // How long to burn off common foods table
    var burnHtml = '';
    for (var j = 0; j < BURN_OFF_FOODS.length; j++) {
        var item = BURN_OFF_FOODS[j];
        var minutesToBurn = item.cal / caloriesPerMinute;
        burnHtml += '<tr>';
        burnHtml += '<td>' + item.name + '</td>';
        burnHtml += '<td>' + item.cal + ' kcal</td>';
        burnHtml += '<td>' + Math.round(minutesToBurn) + ' min</td>';
        burnHtml += '</tr>';
    }
    document.getElementById('burn-off-tbody').innerHTML = burnHtml;

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
    userData.weight_kg = weightKg.toFixed(1);
    showNextSteps('calories-burned', userData, { calories: Math.round(totalCalories).toLocaleString() });
}

// Wire up auto-recalc on input change
document.addEventListener('DOMContentLoaded', function() {
    var inputs = document.querySelectorAll('#weight_kg, #weight_lb, #duration, #activity');
    inputs.forEach(function(input) {
        input.addEventListener(input.tagName === 'SELECT' ? 'change' : 'input', autoRecalc);
    });
});
