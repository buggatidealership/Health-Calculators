// Carb Cycling Calculator — factory-compatible
(function() {
// Global variables
let unitSystem = 'metric';

// Initialize event listeners
// DOMContentLoaded removed
{
    // Show/hide training days selector based on cycle type
    const cycleTypeSelect = document.getElementById('cycle-type');
    cycleTypeSelect.addEventListener('change', function() {
        const trainingDaysContainer = document.getElementById('training-days-container');
        if (this.value === 'training') {
            trainingDaysContainer.style.display = 'block';
        } else {
            trainingDaysContainer.style.display = 'none';
        }
    });
});

// Toggle between metric and imperial units
function setUnit(unit) {
    unitSystem = unit;
    
    // Update button styling
    document.getElementById('metric-btn').classList.remove('active');
    document.getElementById('imperial-btn').classList.remove('active');
    
    if (unit === 'metric') {
        document.getElementById('metric-btn').classList.add('active');
        document.querySelectorAll('.metric-field').forEach(field => {
            field.style.display = 'block';
        });
        document.querySelectorAll('.imperial-field').forEach(field => {
            field.style.display = 'none';
        });
    } else {
        document.getElementById('imperial-btn').classList.add('active');
        document.querySelectorAll('.metric-field').forEach(field => {
            field.style.display = 'none';
        });
        document.querySelectorAll('.imperial-field').forEach(field => {
            field.style.display = 'block';
        });
    }
}

// Main calculation function
function calculate() {
    // Get input values
    const gender = document.getElementById('gender').value;
    const age = parseInt(document.getElementById('age').value);
    const activityLevel = document.getElementById('activity-level').value;
    const goal = document.getElementById('goal').value;
    const cycleType = document.getElementById('cycle-type').value;
    
    // Get weight in kg
    let weightKg;
    if (unitSystem === 'metric') {
        weightKg = parseFloat(document.getElementById('weight-kg').value);
    } else {
        const weightLb = parseFloat(document.getElementById('weight-lb').value);
        weightKg = weightLb / 2.20462;
    }
    
    // Get height in cm
    let heightCm;
    if (unitSystem === 'metric') {
        heightCm = parseFloat(document.getElementById('height-cm').value);
    } else {
        const heightFt = parseInt(document.getElementById('height-ft').value);
        const heightIn = parseInt(document.getElementById('height-in').value);
        heightCm = (heightFt * 30.48) + (heightIn * 2.54);
    }
    
    // Calculate BMR using Mifflin-St Jeor Equation
    let bmr;
    if (gender === 'male') {
        bmr = (10 * weightKg) + (6.25 * heightCm) - (5 * age) + 5;
    } else {
        bmr = (10 * weightKg) + (6.25 * heightCm) - (5 * age) - 161;
    }
    
    // Apply activity multiplier to get TDEE
    let tdee;
    switch(activityLevel) {
        case 'sedentary':
            tdee = bmr * 1.2;
            break;
        case 'light':
            tdee = bmr * 1.375;
            break;
        case 'moderate':
            tdee = bmr * 1.55;
            break;
        case 'active':
            tdee = bmr * 1.725;
            break;
        case 'very-active':
            tdee = bmr * 1.9;
            break;
        default:
            tdee = bmr * 1.55;
    }
    
    // Adjust TDEE based on goal
    let adjustedTDEE;
    switch(goal) {
        case 'lose':
            adjustedTDEE = tdee * 0.85; // 15% deficit
            break;
        case 'gain':
            adjustedTDEE = tdee * 1.1; // 10% surplus
            break;
        default:
            adjustedTDEE = tdee;
    }
    
    // Round to nearest 50 calories
    adjustedTDEE = Math.round(adjustedTDEE / 50) * 50;
    
    // Calculate protein needs (g/kg of bodyweight)
    let proteinMultiplier;
    switch(activityLevel) {
        case 'sedentary':
        case 'light':
            proteinMultiplier = 1.2;
            break;
        case 'moderate':
            proteinMultiplier = 1.5;
            break;
        case 'active':
        case 'very-active':
            proteinMultiplier = 1.8;
            break;
        default:
            proteinMultiplier = 1.5;
    }
    
    if (goal === 'gain') {
        // Slightly higher protein for muscle gain
        proteinMultiplier += 0.2;
    }
    
    const proteinGrams = Math.round(weightKg * proteinMultiplier);
    const proteinCalories = proteinGrams * 4;
    
    // Calculate remaining calories for carbs and fats
    const remainingCalories = adjustedTDEE - proteinCalories;
    
    // Create result object
    const results = {
        dailyCalories: Math.round(adjustedTDEE),
        protein: {
            grams: proteinGrams,
            calories: proteinCalories
        },
        days: {}
    };
    
    // Calculate macros for different days based on cycle type
    if (cycleType === 'three-day' || cycleType === 'weekly') {
        // High carb day: 60% carbs, 40% fat from remaining calories
        const highCarbCals = Math.round(remainingCalories * 0.6);
        const highFatCals = Math.round(remainingCalories * 0.4);
        const highCarbGrams = Math.round(highCarbCals / 4);
        const highFatGrams = Math.round(highFatCals / 9);
        
        // Moderate carb day: 40% carbs, 60% fat
        const modCarbCals = Math.round(remainingCalories * 0.4);
        const modFatCals = Math.round(remainingCalories * 0.6);
        const modCarbGrams = Math.round(modCarbCals / 4);
        const modFatGrams = Math.round(modFatCals / 9);
        
        // Low carb day: 20% carbs, 80% fat
        const lowCarbCals = Math.round(remainingCalories * 0.2);
        const lowFatCals = Math.round(remainingCalories * 0.8);
        const lowCarbGrams = Math.round(lowCarbCals / 4);
        const lowFatGrams = Math.round(lowFatCals / 9);
        
        results.days.high = {
            totalCalories: Math.round(proteinCalories + highCarbCals + highFatCals),
            carbs: {
                grams: highCarbGrams,
                calories: highCarbCals
            },
            fat: {
                grams: highFatGrams,
                calories: highFatCals
            }
        };
        
        results.days.moderate = {
            totalCalories: Math.round(proteinCalories + modCarbCals + modFatCals),
            carbs: {
                grams: modCarbGrams,
                calories: modCarbCals
            },
            fat: {
                grams: modFatGrams,
                calories: modFatCals
            }
        };
        
        results.days.low = {
            totalCalories: Math.round(proteinCalories + lowCarbCals + lowFatCals),
            carbs: {
                grams: lowCarbGrams,
                calories: lowCarbCals
            },
            fat: {
                grams: lowFatGrams,
                calories: lowFatCals
            }
        };
        
        // For weekly cycle, add very low carb day
        if (cycleType === 'weekly') {
            // Very low carb day: 5% carbs, 95% fat
            const veryLowCarbCals = Math.round(remainingCalories * 0.05);
            const veryLowFatCals = Math.round(remainingCalories * 0.95);
            const veryLowCarbGrams = Math.round(veryLowCarbCals / 4);
            const veryLowFatGrams = Math.round(veryLowFatCals / 9);
            
            results.days.veryLow = {
                totalCalories: Math.round(proteinCalories + veryLowCarbCals + veryLowFatCals),
                carbs: {
                    grams: veryLowCarbGrams,
                    calories: veryLowCarbCals
                },
                fat: {
                    grams: veryLowFatGrams,
                    calories: veryLowFatCals
                }
            };
        }
    } else if (cycleType === 'training') {
        // Training day: 50% carbs, 50% fat
        const trainingCarbCals = Math.round(remainingCalories * 0.5);
        const trainingFatCals = Math.round(remainingCalories * 0.5);
        const trainingCarbGrams = Math.round(trainingCarbCals / 4);
        const trainingFatGrams = Math.round(trainingFatCals / 9);
        
        // Rest day: 15% carbs, 85% fat
        const restCarbCals = Math.round(remainingCalories * 0.15);
        const restFatCals = Math.round(remainingCalories * 0.85);
        const restCarbGrams = Math.round(restCarbCals / 4);
        const restFatGrams = Math.round(restFatCals / 9);
        
        results.days.trainingDays = {
            totalCalories: Math.round(proteinCalories + trainingCarbCals + trainingFatCals),
            carbs: {
                grams: trainingCarbGrams,
                calories: trainingCarbCals
            },
            fat: {
                grams: trainingFatGrams,
                calories: trainingFatCals
            }
        };
        
        results.days.restDays = {
            totalCalories: Math.round(proteinCalories + restCarbCals + restFatCals),
            carbs: {
                grams: restCarbGrams,
                calories: restCarbCals
            },
            fat: {
                grams: restFatGrams,
                calories: restFatCals
            }
        };
    }
    
    // Update the UI with results
    displayResults(results, cycleType);
}

// Display the results in the UI
function displayResults(results, cycleType) {
    // Show results container
    if (typeof factoryReveal === 'function') { factoryReveal(); };
    
    // Update daily baseline values
    document.getElementById('daily-calories').textContent = results.dailyCalories;
    document.getElementById('protein-grams').textContent = `${results.protein.grams}g (${results.protein.calories} calories)`;
    
    // Hide all cycle type result containers first
    document.getElementById('three-day-results').style.display = 'none';
    document.getElementById('weekly-results').style.display = 'none';
    document.getElementById('training-results').style.display = 'none';
    document.getElementById('weekly-schedule-container').style.display = 'none';
    
    // Update specific cycle type results
    if (cycleType === 'three-day') {
        document.getElementById('three-day-results').style.display = 'grid';
        
        // Update high carb day values
        document.getElementById('high-calories').textContent = results.days.high.totalCalories;
        document.getElementById('high-carbs').textContent = `${results.days.high.carbs.grams}g (${results.days.high.carbs.calories} cal)`;
        document.getElementById('high-protein').textContent = `${results.protein.grams}g (${results.protein.calories} cal)`;
        document.getElementById('high-fat').textContent = `${results.days.high.fat.grams}g (${results.days.high.fat.calories} cal)`;
        
        // Update moderate carb day values
        document.getElementById('moderate-calories').textContent = results.days.moderate.totalCalories;
        document.getElementById('moderate-carbs').textContent = `${results.days.moderate.carbs.grams}g (${results.days.moderate.carbs.calories} cal)`;
        document.getElementById('moderate-protein').textContent = `${results.protein.grams}g (${results.protein.calories} cal)`;
        document.getElementById('moderate-fat').textContent = `${results.days.moderate.fat.grams}g (${results.days.moderate.fat.calories} cal)`;
        
        // Update low carb day values
        document.getElementById('low-calories').textContent = results.days.low.totalCalories;
        document.getElementById('low-carbs').textContent = `${results.days.low.carbs.grams}g (${results.days.low.carbs.calories} cal)`;
        document.getElementById('low-protein').textContent = `${results.protein.grams}g (${results.protein.calories} cal)`;
        document.getElementById('low-fat').textContent = `${results.days.low.fat.grams}g (${results.days.low.fat.calories} cal)`;
        
        // Display 3-day cycle schedule
        document.getElementById('weekly-schedule-container').style.display = 'block';
        const scheduleHTML = `
            <div class="schedule-day"><span class="day">Day 1:</span> <span class="day-type high">High Carb</span></div>
            <div class="schedule-day"><span class="day">Day 2:</span> <span class="day-type moderate">Moderate Carb</span></div>
            <div class="schedule-day"><span class="day">Day 3:</span> <span class="day-type low">Low Carb</span></div>
            <div class="schedule-day"><span class="day">Day 4:</span> <span class="day-type high">High Carb</span></div>
            <div class="schedule-day"><span class="day">Day 5:</span> <span class="day-type moderate">Moderate Carb</span></div>
            <div class="schedule-day"><span class="day">Day 6:</span> <span class="day-type low">Low Carb</span></div>
            <div class="schedule-day"><span class="day">Day 7:</span> <span class="day-type high">High Carb</span></div>
        `;
        document.getElementById('weekly-schedule').innerHTML = scheduleHTML;
        
    } else if (cycleType === 'weekly') {
        document.getElementById('three-day-results').style.display = 'grid';
        document.getElementById('weekly-results').style.display = 'grid';
        
        // Update high, moderate, and low carb day values (same as 3-day cycle)
        document.getElementById('high-calories').textContent = results.days.high.totalCalories;
        document.getElementById('high-carbs').textContent = `${results.days.high.carbs.grams}g (${results.days.high.carbs.calories} cal)`;
        document.getElementById('high-protein').textContent = `${results.protein.grams}g (${results.protein.calories} cal)`;
        document.getElementById('high-fat').textContent = `${results.days.high.fat.grams}g (${results.days.high.fat.calories} cal)`;
        
        document.getElementById('moderate-calories').textContent = results.days.moderate.totalCalories;
        document.getElementById('moderate-carbs').textContent = `${results.days.moderate.carbs.grams}g (${results.days.moderate.carbs.calories} cal)`;
        document.getElementById('moderate-protein').textContent = `${results.protein.grams}g (${results.protein.calories} cal)`;
        document.getElementById('moderate-fat').textContent = `${results.days.moderate.fat.grams}g (${results.days.moderate.fat.calories} cal)`;
        
        document.getElementById('low-calories').textContent = results.days.low.totalCalories;
        document.getElementById('low-carbs').textContent = `${results.days.low.carbs.grams}g (${results.days.low.carbs.calories} cal)`;
        document.getElementById('low-protein').textContent = `${results.protein.grams}g (${results.protein.calories} cal)`;
        document.getElementById('low-fat').textContent = `${results.days.low.fat.grams}g (${results.days.low.fat.calories} cal)`;
        
        // Update very low carb day values
        document.getElementById('very-low-calories').textContent = results.days.veryLow.totalCalories;
        document.getElementById('very-low-carbs').textContent = `${results.days.veryLow.carbs.grams}g (${results.days.veryLow.carbs.calories} cal)`;
        document.getElementById('very-low-protein').textContent = `${results.protein.grams}g (${results.protein.calories} cal)`;
        document.getElementById('very-low-fat').textContent = `${results.days.veryLow.fat.grams}g (${results.days.veryLow.fat.calories} cal)`;
        
        // Display weekly schedule
        document.getElementById('weekly-schedule-container').style.display = 'block';
        const scheduleHTML = `
            <div class="schedule-day"><span class="day">Monday:</span> <span class="day-type high">High Carb</span></div>
            <div class="schedule-day"><span class="day">Tuesday:</span> <span class="day-type moderate">Moderate Carb</span></div>
            <div class="schedule-day"><span class="day">Wednesday:</span> <span class="day-type low">Low Carb</span></div>
            <div class="schedule-day"><span class="day">Thursday:</span> <span class="day-type moderate">Moderate Carb</span></div>
            <div class="schedule-day"><span class="day">Friday:</span> <span class="day-type high">High Carb</span></div>
            <div class="schedule-day"><span class="day">Saturday:</span> <span class="day-type very-low">Very Low Carb</span></div>
            <div class="schedule-day"><span class="day">Sunday:</span> <span class="day-type low">Low Carb</span></div>
        `;
        document.getElementById('weekly-schedule').innerHTML = scheduleHTML;
        
    } else if (cycleType === 'training') {
        document.getElementById('training-results').style.display = 'grid';
        
        // Update training day values
        document.getElementById('training-calories').textContent = results.days.trainingDays.totalCalories;
        document.getElementById('training-carbs').textContent = `${results.days.trainingDays.carbs.grams}g (${results.days.trainingDays.carbs.calories} cal)`;
        document.getElementById('training-protein').textContent = `${results.protein.grams}g (${results.protein.calories} cal)`;
        document.getElementById('training-fat').textContent = `${results.days.trainingDays.fat.grams}g (${results.days.trainingDays.fat.calories} cal)`;
        
        // Update rest day values
        document.getElementById('rest-calories').textContent = results.days.restDays.totalCalories;
        document.getElementById('rest-carbs').textContent = `${results.days.restDays.carbs.grams}g (${results.days.restDays.carbs.calories} cal)`;
        document.getElementById('rest-protein').textContent = `${results.protein.grams}g (${results.protein.calories} cal)`;
        document.getElementById('rest-fat').textContent = `${results.days.restDays.fat.grams}g (${results.days.restDays.fat.calories} cal)`;
        
        // Display training-based schedule
        document.getElementById('weekly-schedule-container').style.display = 'block';
        
        // Check which days are training days
        const trainingDays = {
            monday: document.getElementById('train-mon').checked,
            tuesday: document.getElementById('train-tue').checked,
            wednesday: document.getElementById('train-wed').checked,
            thursday: document.getElementById('train-thu').checked,
            friday: document.getElementById('train-fri').checked,
            saturday: document.getElementById('train-sat').checked,
            sunday: document.getElementById('train-sun').checked
        };
        
        const scheduleHTML = `
            <div class="schedule-day"><span class="day">Monday:</span> <span class="day-type ${trainingDays.monday ? 'training' : 'rest'}">${trainingDays.monday ? 'Training Day' : 'Rest Day'}</span></div>
            <div class="schedule-day"><span class="day">Tuesday:</span> <span class="day-type ${trainingDays.tuesday ? 'training' : 'rest'}">${trainingDays.tuesday ? 'Training Day' : 'Rest Day'}</span></div>
            <div class="schedule-day"><span class="day">Wednesday:</span> <span class="day-type ${trainingDays.wednesday ? 'training' : 'rest'}">${trainingDays.wednesday ? 'Training Day' : 'Rest Day'}</span></div>
            <div class="schedule-day"><span class="day">Thursday:</span> <span class="day-type ${trainingDays.thursday ? 'training' : 'rest'}">${trainingDays.thursday ? 'Training Day' : 'Rest Day'}</span></div>
            <div class="schedule-day"><span class="day">Friday:</span> <span class="day-type ${trainingDays.friday ? 'training' : 'rest'}">${trainingDays.friday ? 'Training Day' : 'Rest Day'}</span></div>
            <div class="schedule-day"><span class="day">Saturday:</span> <span class="day-type ${trainingDays.saturday ? 'training' : 'rest'}">${trainingDays.saturday ? 'Training Day' : 'Rest Day'}</span></div>
            <div class="schedule-day"><span class="day">Sunday:</span> <span class="day-type ${trainingDays.sunday ? 'training' : 'rest'}">${trainingDays.sunday ? 'Training Day' : 'Rest Day'}</span></div>
        `;
        document.getElementById('weekly-schedule').innerHTML = scheduleHTML;
    }
    
    // Scroll to results
    document.getElementById('results').scrollIntoView({ behavior: 'smooth' });

    // Content loop
    if (typeof showNextSteps === 'function') showNextSteps('carb-cycling', collectUserData());
}
})();
