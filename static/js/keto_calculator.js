// Unit toggle functionality (matches site-wide pattern)
function toggleUnit(form, unit) {
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

// Keto approach macro ratios
var KETO_APPROACHES = {
    'standard':      { fat: 0.75, protein: 0.20, carbs: 0.05, label: 'Standard Keto (75/20/5)' },
    'modified':      { fat: 0.65, protein: 0.25, carbs: 0.10, label: 'Modified Keto (65/25/10)' },
    'high-protein':  { fat: 0.60, protein: 0.35, carbs: 0.05, label: 'High-Protein Keto (60/35/5)' }
};

function calculateKeto() {
    var age = parseInt(document.getElementById('age').value);
    var gender = document.getElementById('gender').value;
    var activityMultiplier = parseFloat(document.getElementById('activity').value);
    var goal = document.getElementById('goal').value;
    var ketoType = document.getElementById('keto-type').value;
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

    // Validation
    if (!age || !weight || !height || isNaN(weight) || isNaN(height)) {
        alert('Please fill all required fields with valid numbers.');
        return;
    }

    if (age < 15 || age > 100) {
        alert('Please enter an age between 15 and 100.');
        return;
    }

    // Step 1: Mifflin-St Jeor BMR
    var bmr;
    if (gender === 'male') {
        bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
    } else {
        bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161;
    }

    // Step 2: TDEE
    var tdee = bmr * activityMultiplier;

    // Step 3: Goal adjustment
    var targetCalories;
    var goalLabel;
    if (goal === 'lose') {
        targetCalories = Math.round(tdee * 0.80); // 20% deficit
        goalLabel = '-20% (weight loss)';
    } else if (goal === 'gain') {
        targetCalories = Math.round(tdee * 1.10); // 10% surplus
        goalLabel = '+10% (weight gain)';
    } else {
        targetCalories = Math.round(tdee);
        goalLabel = 'None (maintenance)';
    }

    // Enforce minimum safe calories
    var minCalories = gender === 'female' ? 1200 : 1500;
    if (targetCalories < minCalories) {
        targetCalories = minCalories;
    }

    // Step 4: Apply keto macro ratios
    var approach = KETO_APPROACHES[ketoType];

    var fatCal = targetCalories * approach.fat;
    var proteinCal = targetCalories * approach.protein;
    var carbsCal = targetCalories * approach.carbs;

    var fatGrams = Math.round(fatCal / 9);
    var proteinGrams = Math.round(proteinCal / 4);
    var carbsGrams = Math.round(carbsCal / 4);

    // Populate results
    document.getElementById('keto-calories-display').textContent = targetCalories.toLocaleString();
    document.getElementById('keto-type-label').textContent = approach.label;

    document.getElementById('bmr-display').textContent = Math.round(bmr).toLocaleString() + ' kcal/day';
    document.getElementById('tdee-display').textContent = Math.round(tdee).toLocaleString() + ' kcal/day';
    document.getElementById('goal-display').textContent = goalLabel;

    // Net carb limit callout
    document.getElementById('net-carb-limit').textContent = carbsGrams + 'g';

    // Macro cards
    document.getElementById('fat-pct').textContent = Math.round(approach.fat * 100) + '% of calories';
    document.getElementById('fat-grams').textContent = fatGrams + 'g';
    document.getElementById('fat-cal').textContent = Math.round(fatCal) + ' cal';

    document.getElementById('protein-pct').textContent = Math.round(approach.protein * 100) + '% of calories';
    document.getElementById('protein-grams').textContent = proteinGrams + 'g';
    document.getElementById('protein-cal').textContent = Math.round(proteinCal) + ' cal';

    document.getElementById('carb-pct').textContent = Math.round(approach.carbs * 100) + '% of calories';
    document.getElementById('carb-grams').textContent = carbsGrams + 'g';
    document.getElementById('carb-cal').textContent = Math.round(carbsCal) + ' cal';

    // Meal timing suggestion based on goal
    var mealTimingEl = document.getElementById('meal-timing');
    if (goal === 'lose') {
        mealTimingEl.textContent = 'For weight loss on keto, consider 2 meals per day with an intermittent fasting window (16:8 or 18:6). Higher fat intake naturally suppresses appetite, making fewer meals comfortable. Prioritize protein at each meal (' + Math.round(proteinGrams / 2) + 'g per meal) and distribute fats evenly.';
    } else if (goal === 'gain') {
        mealTimingEl.textContent = 'For muscle gain on keto, eat 3-4 meals spread across the day to maximize protein synthesis. Aim for ' + Math.round(proteinGrams / 3) + '-' + Math.round(proteinGrams / 2) + 'g protein per meal, and consider adding a protein-rich snack before bed. Time higher-fat meals around non-training periods.';
    } else {
        mealTimingEl.textContent = 'For maintenance on keto, 2-3 meals per day works well for most people. Many keto dieters find that higher fat intake naturally reduces appetite, making intermittent fasting (16:8) a comfortable pairing. Prioritize protein at each meal to support muscle maintenance.';
    }

    // Show results with animation
    var resultsEl = document.getElementById('results');
    resultsEl.classList.remove('hidden');
    resultsEl.classList.remove('results-reveal');
    void resultsEl.offsetWidth;
    resultsEl.classList.add('results-reveal');
    resultsEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    // Content loop: contextual next steps
    if (typeof showNextSteps === 'function') {
        var userData = collectUserData();
        showNextSteps('keto', userData, { calories: targetCalories.toLocaleString() });
    }
}
