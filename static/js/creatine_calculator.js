// Global variables to track current unit system
let currentUnitSystem = 'metric';

// Toggle between metric and imperial units
function toggleUnits(unitSystem) {
    if (unitSystem === currentUnitSystem) return;
    
    currentUnitSystem = unitSystem;
    
    // Update UI to reflect selected unit system
    if (unitSystem === 'metric') {
        document.getElementById('metric-btn').classList.add('active');
        document.getElementById('imperial-btn').classList.remove('active');
        document.getElementById('weight-unit').textContent = 'kg';
    } else {
        document.getElementById('metric-btn').classList.remove('active');
        document.getElementById('imperial-btn').classList.add('active');
        document.getElementById('weight-unit').textContent = 'lbs';
    }
    
    // Clear any previous results
    document.getElementById('result').style.display = 'none';
    
    // Convert input fields if they already have values
    const weightInput = document.getElementById('weight');
    if (weightInput.value) {
        if (unitSystem === 'metric' && weightInput.value) {
            // Convert lbs to kg
            weightInput.value = Math.round(parseFloat(weightInput.value) * 0.453592 * 10) / 10;
        } else if (unitSystem === 'imperial' && weightInput.value) {
            // Convert kg to lbs
            weightInput.value = Math.round(parseFloat(weightInput.value) / 0.453592);
        }
    }
}

// Calculate water intake based on form inputs
function calculateWater() {
    // Get form values
    const gender = document.getElementById('gender').value;
    const weightInput = parseFloat(document.getElementById('weight').value);
    const phase = document.getElementById('phase').value;
    const activity = document.getElementById('activity').value;
    
    // Validate weight input
    if (isNaN(weightInput) || weightInput <= 0) {
        alert('Please enter a valid weight.');
        return;
    }
    
    // Convert weight to kg if imperial units are selected
    let weightKg = weightInput;
    if (currentUnitSystem === 'imperial') {
        weightKg = weightInput * 0.453592;
    }
    
    // Calculate base water needs (30-35 mL per kg of body weight)
    let baseWater = weightKg * 35;
    
    // Apply gender adjustment (women typically need slightly less water per kg)
    if (gender === 'female') {
        baseWater = weightKg * 30;
    }
    
    // Adjust for activity level
    let activityMultiplier = 1.0;
    if (activity === 'high') {
        activityMultiplier = 1.2;
    } else if (activity === 'extreme') {
        activityMultiplier = 1.4;
    }
    
    // Calculate base hydration with activity adjustment
    let adjustedBaseWater = baseWater * activityMultiplier;
    
    // Add creatine-specific water needs
    let creatineWater = 0;
    let creatineDose = '';
    
    if (phase === 'loading') {
        creatineWater = 1000; // Extra 1000mL during loading phase
        creatineDose = '20g per day (divided into 4 doses of 5g each)';
    } else {
        creatineWater = 500; // Extra 500mL during maintenance phase
        creatineDose = '3-5g per day';
    }
    
    // Calculate total water needs
    const totalWaterML = adjustedBaseWater + creatineWater;
    const totalWaterLiters = Math.round(totalWaterML / 100) / 10;
    const totalWaterOunces = Math.round(totalWaterML * 0.033814 * 10) / 10;
    const baseWaterLiters = Math.round(adjustedBaseWater / 100) / 10;
    
    // Display results
    document.getElementById('water-liters').textContent = totalWaterLiters + ' liters';
    document.getElementById('water-ounces').textContent = '(' + totalWaterOunces + ' fl oz)';
    document.getElementById('base-water').textContent = baseWaterLiters + ' liters';
    document.getElementById('extra-water').textContent = creatineWater + ' ml';
    document.getElementById('creatine-dose').textContent = creatineDose;
    
    // Generate hydration tips
    const tipsList = document.getElementById('tips-list');
    tipsList.innerHTML = ''; // Clear previous tips
    
    // Common hydration tips
    const tips = [
        'Spread your water intake evenly throughout the day',
        'Monitor urine color - aim for pale yellow (like lemonade)',
        'Keep a water bottle with you at all times',
        'Drink 16-20 oz (500-600ml) of water 2-3 hours before training'
    ];
    
    // Phase-specific tips
    if (phase === 'loading') {
        tips.push('During the loading phase, take creatine with meals to improve absorption');
        tips.push('If you experience digestive discomfort, split your water intake into smaller, more frequent amounts');
    } else {
        tips.push('Take your maintenance dose consistently at the same time each day');
        tips.push('Consider taking creatine post-workout with a protein/carb shake');
    }
    
    // Add tips to the list
    tips.forEach(tip => {
        const li = document.createElement('li');
        li.textContent = tip;
        tipsList.appendChild(li);
    });
    
    // Show results section
    document.getElementById('result').style.display = 'block';
}