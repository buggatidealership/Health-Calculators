// Global variables
let unitSystem = 'metric';

// Toggle between metric and imperial units
function setUnit(unit) {
    unitSystem = unit;

    document.getElementById('metric-btn').classList.remove('active');
    document.getElementById('imperial-btn').classList.remove('active');

    if (unit === 'metric') {
        document.getElementById('metric-btn').classList.add('active');
        document.querySelectorAll('.metric-field').forEach(function(field) {
            field.style.display = 'block';
        });
        document.querySelectorAll('.imperial-field').forEach(function(field) {
            field.style.display = 'none';
        });
    } else {
        document.getElementById('imperial-btn').classList.add('active');
        document.querySelectorAll('.metric-field').forEach(function(field) {
            field.style.display = 'none';
        });
        document.querySelectorAll('.imperial-field').forEach(function(field) {
            field.style.display = 'block';
        });
    }
}

// Keto approach macro ratios
var KETO_APPROACHES = {
    'standard':      { fat: 0.75, protein: 0.20, carbs: 0.05, label: 'Standard Keto (75/20/5)' },
    'modified':      { fat: 0.65, protein: 0.25, carbs: 0.10, label: 'Modified Keto (65/25/10)' },
    'high-protein':  { fat: 0.60, protein: 0.35, carbs: 0.05, label: 'High-Protein Keto (60/35/5)' }
};

// Main calculation function
function calculate() {
    // Get input values
    var gender = document.getElementById('gender').value;
    var age = parseInt(document.getElementById('age').value);
    var activityMultiplier = parseFloat(document.getElementById('activity-level').value);
    var goalAdjustment = parseInt(document.getElementById('goal').value);
    var ketoApproach = document.getElementById('keto-approach').value;

    // Validate age
    if (isNaN(age) || age < 18 || age > 100) {
        alert('Please enter a valid age between 18 and 100.');
        return;
    }

    // Get weight in kg
    var weightKg;
    if (unitSystem === 'metric') {
        weightKg = parseFloat(document.getElementById('weight-kg').value);
        if (isNaN(weightKg) || weightKg < 40 || weightKg > 200) {
            alert('Please enter a valid weight between 40 and 200 kg.');
            return;
        }
    } else {
        var weightLb = parseFloat(document.getElementById('weight-lb').value);
        if (isNaN(weightLb) || weightLb < 88 || weightLb > 440) {
            alert('Please enter a valid weight between 88 and 440 lbs.');
            return;
        }
        weightKg = weightLb / 2.20462;
    }

    // Get height in cm
    var heightCm;
    if (unitSystem === 'metric') {
        heightCm = parseFloat(document.getElementById('height-cm').value);
        if (isNaN(heightCm) || heightCm < 130 || heightCm > 220) {
            alert('Please enter a valid height between 130 and 220 cm.');
            return;
        }
    } else {
        var heightFt = parseInt(document.getElementById('height-ft').value);
        var heightIn = parseInt(document.getElementById('height-in').value);
        if (isNaN(heightFt) || isNaN(heightIn)) {
            alert('Please enter valid height values.');
            return;
        }
        heightCm = (heightFt * 30.48) + (heightIn * 2.54);
    }

    // Calculate BMR using Mifflin-St Jeor Equation
    var bmr;
    if (gender === 'male') {
        bmr = (10 * weightKg) + (6.25 * heightCm) - (5 * age) + 5;
    } else {
        bmr = (10 * weightKg) + (6.25 * heightCm) - (5 * age) - 161;
    }

    // Calculate TDEE
    var tdee = bmr * activityMultiplier;

    // Apply goal adjustment
    var targetCalories = Math.round(tdee + goalAdjustment);

    // Ensure minimum safe calorie floor
    var minCalories = gender === 'male' ? 1200 : 1000;
    if (targetCalories < minCalories) {
        targetCalories = minCalories;
    }

    // Get macro ratios for selected keto approach
    var approach = KETO_APPROACHES[ketoApproach];

    // Calculate macros in calories
    var fatCal = targetCalories * approach.fat;
    var proteinCal = targetCalories * approach.protein;
    var carbsCal = targetCalories * approach.carbs;

    // Convert to grams
    var fatGrams = Math.round(fatCal / 9);
    var proteinGrams = Math.round(proteinCal / 4);
    var carbsGrams = Math.round(carbsCal / 4);

    // Display results
    var resultsEl = document.getElementById('results');
    resultsEl.style.display = 'block';

    // Hero calories
    document.getElementById('hero-calories').textContent = targetCalories.toLocaleString();

    // Net carb limit
    document.getElementById('net-carb-limit').textContent = carbsGrams + 'g';

    // Fat
    document.getElementById('fat-grams').textContent = fatGrams + 'g';
    document.getElementById('fat-calories').textContent = Math.round(fatCal) + ' cal';
    document.getElementById('fat-percent').textContent = Math.round(approach.fat * 100) + '%';
    document.getElementById('fat-bar').style.width = (approach.fat * 100) + '%';

    // Protein
    document.getElementById('protein-grams').textContent = proteinGrams + 'g';
    document.getElementById('protein-calories').textContent = Math.round(proteinCal) + ' cal';
    document.getElementById('protein-percent').textContent = Math.round(approach.protein * 100) + '%';
    document.getElementById('protein-bar').style.width = (approach.protein * 100) + '%';

    // Carbs
    document.getElementById('carbs-grams').textContent = carbsGrams + 'g';
    document.getElementById('carbs-calories').textContent = Math.round(carbsCal) + ' cal';
    document.getElementById('carbs-percent').textContent = Math.round(approach.carbs * 100) + '%';
    document.getElementById('carbs-bar').style.width = (approach.carbs * 100) + '%';

    // Breakdown
    document.getElementById('bmr-value').textContent = Math.round(bmr).toLocaleString();
    document.getElementById('tdee-value').textContent = Math.round(tdee).toLocaleString();

    var goalText = goalAdjustment === 0 ? 'None (maintenance)' :
                   (goalAdjustment > 0 ? '+' + goalAdjustment : goalAdjustment) + ' kcal';
    document.getElementById('goal-adjustment').textContent = goalText;
    document.getElementById('approach-label').textContent = approach.label;

    // Meal timing suggestion based on goal
    var mealTimingEl = document.getElementById('meal-timing');
    if (goalAdjustment < 0) {
        mealTimingEl.textContent = 'For weight loss on keto, consider 2 meals per day with an intermittent fasting window (16:8 or 18:6). Higher fat intake naturally suppresses appetite, making fewer meals comfortable. Prioritize protein at each meal (' + Math.round(proteinGrams / 2) + 'g per meal) and distribute fats evenly.';
    } else if (goalAdjustment > 0) {
        mealTimingEl.textContent = 'For muscle gain on keto, eat 3-4 meals spread across the day to maximize protein synthesis. Aim for ' + Math.round(proteinGrams / 3) + '-' + Math.round(proteinGrams / 2) + 'g protein per meal, and consider adding a protein-rich snack before bed. Time higher-fat meals around non-training periods.';
    } else {
        mealTimingEl.textContent = 'For maintenance on keto, 2-3 meals per day works well for most people. Many keto dieters find that higher fat intake naturally reduces appetite, making intermittent fasting (16:8) a comfortable pairing. Prioritize protein at each meal to support muscle maintenance.';
    }

    // Scroll to results
    resultsEl.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // Trigger content loops if available
    if (typeof showNextSteps === 'function') {
        showNextSteps('keto', {
            weight_kg: weightKg,
            height_cm: heightCm,
            age: age,
            gender: gender,
            activity: activityMultiplier
        });
    }
}
