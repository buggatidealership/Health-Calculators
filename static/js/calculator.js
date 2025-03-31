function toggleUnits(unitSystem) {
    const metricBtn = document.getElementById('metric-btn');
    const imperialBtn = document.getElementById('imperial-btn');
   
    if (unitSystem === 'metric') {
        metricBtn.classList.add('active');
        imperialBtn.classList.remove('active');
        document.getElementById('metric-weight').style.display = 'block';
        document.getElementById('imperial-weight').style.display = 'none';
        document.getElementById('metric-height').style.display = 'block';
        document.getElementById('imperial-height').style.display = 'none';
    } else {
        metricBtn.classList.remove('active');
        imperialBtn.classList.add('active');
        document.getElementById('metric-weight').style.display = 'none';
        document.getElementById('imperial-weight').style.display = 'block';
        document.getElementById('metric-height').style.display = 'none';
        document.getElementById('imperial-height').style.display = 'block';
    }
}

function calculate() {
    // Get input values
    const gender = document.getElementById('gender').value;
    const age = parseFloat(document.getElementById('age').value);
    const activity = parseFloat(document.getElementById('activity').value);
    const goal = parseFloat(document.getElementById('goal').value);
    const dietType = document.getElementById('diet-type').value;
   
    // Validate inputs
    if (isNaN(age) || age < 18 || age > 100) {
        alert("Please enter a valid age between 18 and 100");
        return;
    }

    // Get weight and height based on selected units
    let weight, height;
    if (document.getElementById('metric-btn').classList.contains('active')) {
        // Metric units
        weight = parseFloat(document.getElementById('weight-kg').value);
        height = parseFloat(document.getElementById('height-cm').value);

        // Validate metric inputs
        if (isNaN(weight) || weight < 40 || weight > 200) {
            alert("Please enter a valid weight between 40 and 200 kg");
            return;
        }
        if (isNaN(height) || height < 140 || height > 220) {
            alert("Please enter a valid height between 140 and 220 cm");
            return;
        }
    } else {
        // Imperial units
        const weightLbs = parseFloat(document.getElementById('weight-lbs').value);
        const feet = parseFloat(document.getElementById('height-ft').value);
        const inches = parseFloat(document.getElementById('height-in').value);

        // Validate imperial inputs
        if (isNaN(weightLbs) || weightLbs < 90 || weightLbs > 440) {
            alert("Please enter a valid weight between 90 and 440 lbs");
            return;
        }
        if (isNaN(feet) || feet < 4 || feet > 7) {
            alert("Please enter a valid height (feet) between 4 and 7");
            return;
        }
        if (isNaN(inches) || inches < 0 || inches > 11) {
            alert("Please enter a valid height (inches) between 0 and 11");
            return;
        }

        // Convert to metric for calculations
        weight = weightLbs / 2.20462; // lbs to kg
        height = (feet * 12 + inches) * 2.54; // ft/in to cm
    }
   
    // Calculate BMR using Mifflin-St Jeor Equation
    let bmr;
    if (gender === 'male') {
        bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
    } else {
        bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161;
    }
   
    // Calculate TDEE (Total Daily Energy Expenditure)
    const tdee = bmr * activity;
   
    // Adjust for goal
    const calories = Math.round(tdee + goal);
   
    // Set macronutrient ratios based on diet type
    let proteinRatio, carbRatio, fatRatio;
   
    switch(dietType) {
        case 'low-carb':
            proteinRatio = 0.30;
            carbRatio = 0.25;
            fatRatio = 0.45;
            break;
        case 'high-carb':
            proteinRatio = 0.25;
            carbRatio = 0.55;
            fatRatio = 0.20;
            break;
        case 'keto':
            proteinRatio = 0.20;
            carbRatio = 0.05;
            fatRatio = 0.75;
            break;
        default: // balanced
            proteinRatio = 0.30;
            carbRatio = 0.40;
            fatRatio = 0.30;
    }
   
    // Calculate grams for each macronutrient
    // Protein and carbs: 4 calories per gram
    // Fat: 9 calories per gram
    const proteinGrams = Math.round((calories * proteinRatio) / 4);
    const carbGrams = Math.round((calories * carbRatio) / 4);
    const fatGrams = Math.round((calories * fatRatio) / 9);
    
    // Calculate percentages
    const proteinCalories = proteinGrams * 4;
    const carbCalories = carbGrams * 4;
    const fatCalories = fatGrams * 9;
    
    const proteinPercent = Math.round((proteinCalories / calories) * 100);
    const carbPercent = Math.round((carbCalories / calories) * 100);
    const fatPercent = Math.round((fatCalories / calories) * 100);
    
    // Update the DOM with results
    document.getElementById('calories').textContent = calories;
    document.getElementById('protein-grams').textContent = proteinGrams + 'g';
    document.getElementById('carbs-grams').textContent = carbGrams + 'g';
    document.getElementById('fat-grams').textContent = fatGrams + 'g';
    
    document.getElementById('protein-percent').textContent = proteinPercent + '%';
    document.getElementById('carbs-percent').textContent = carbPercent + '%';
    document.getElementById('fat-percent').textContent = fatPercent + '%';
    
    // Show results
    document.getElementById('results').style.display = 'block';
    
    // Scroll to results
    document.getElementById('results').scrollIntoView({ behavior: 'smooth' });
}

// Add event listeners for input validation
document.addEventListener('DOMContentLoaded', function() {
    // Age validation
    document.getElementById('age').addEventListener('input', function() {
        if (this.value < 18) this.value = 18;
        if (this.value > 100) this.value = 100;
    });
    
    // Metric weight validation
    document.getElementById('weight-kg').addEventListener('input', function() {
        if (this.value < 40) this.value = 40;
        if (this.value > 200) this.value = 200;
    });
    
    // Imperial weight validation
    document.getElementById('weight-lbs').addEventListener('input', function() {
        if (this.value < 90) this.value = 90;
        if (this.value > 440) this.value = 440;
    });
    
    // Metric height validation
    document.getElementById('height-cm').addEventListener('input', function() {
        if (this.value < 140) this.value = 140;
        if (this.value > 220) this.value = 220;
    });
    
    // Imperial height validation (feet)
    document.getElementById('height-ft').addEventListener('input', function() {
        if (this.value < 4) this.value = 4;
        if (this.value > 7) this.value = 7;
    });
    
    // Imperial height validation (inches)
    document.getElementById('height-in').addEventListener('input', function() {
        if (this.value < 0) this.value = 0;
        if (this.value > 11) this.value = 11;
    });
    
    // Add Enter key support
    document.querySelectorAll('input, select').forEach(function(element) {
        element.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                calculate();
            }
        });
    });
});
