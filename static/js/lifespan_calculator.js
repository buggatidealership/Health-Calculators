// Style the calculate button with hover effect
const calculateBtn = document.getElementById('calculate-btn');
calculateBtn.addEventListener('mouseover', function() {
    this.style.backgroundColor = '#be2d73'; // Darker pink on hover
});
calculateBtn.addEventListener('mouseout', function() {
    this.style.backgroundColor = '#d63384'; // Back to original pink
});

// Update range values in real-time
document.getElementById('bmi').addEventListener('input', function() {
    document.getElementById('bmi-value').textContent = this.value;
});

document.getElementById('exercise').addEventListener('input', function() {
    document.getElementById('exercise-value').textContent = this.value;
});

document.getElementById('sleep').addEventListener('input', function() {
    document.getElementById('sleep-value').textContent = this.value;
});

// Calculate button click handler
document.getElementById('calculate-btn').addEventListener('click', calculateLongevity);

function calculateLongevity() {
    // Get values from form
    const currentAge = parseInt(document.getElementById('age').value);
    const gender = document.getElementById('gender').value;
    const parentalAge = parseInt(document.getElementById('parental-age').value);
    const bmi = parseFloat(document.getElementById('bmi').value);
    const exercise = parseInt(document.getElementById('exercise').value);
    const diet = parseInt(document.getElementById('diet').value);
    const sleep = parseFloat(document.getElementById('sleep').value);
    const stress = parseInt(document.getElementById('stress').value);
    const smoking = parseInt(document.getElementById('smoking').value);
    const alcohol = parseInt(document.getElementById('alcohol').value);
    const education = parseInt(document.getElementById('education').value);
    const social = parseInt(document.getElementById('social').value);
    
    // Base lifespan based on gender (from WHO global averages)
    let baseLifespan = gender === 'female' ? 74 : 70;
    
    // Adjust for parental longevity (genetics)
    baseLifespan += parentalAge;
    
    // Adjust for BMI (J-shaped curve - both underweight and overweight reduce lifespan)
    let bmiEffect = 0;
    if (bmi < 18.5) {
        bmiEffect = -3 * (18.5 - bmi);
    } else if (bmi > 25) {
        bmiEffect = -0.5 * (bmi - 25);
    } else {
        bmiEffect = 1; // bonus for being in ideal range
    }
    baseLifespan += bmiEffect;
    
    // Adjust for exercise (linear benefit up to a point)
    let exerciseEffect = Math.min(exercise / 50, 5); // max +5 years for 250+ minutes
    baseLifespan += exerciseEffect;
    
    // Adjust for diet
    baseLifespan += diet;
    
    // Adjust for sleep (U-shaped curve)
    let sleepEffect = 0;
    if (sleep < 6) {
        sleepEffect = -5 + sleep; // -5 at 4 hours, -1 at 5 hours
    } else if (sleep > 9) {
        sleepEffect = -2 * (sleep - 9); // -2 at 10 hours
    } else {
        sleepEffect = 1; // bonus for being in ideal range
    }
    baseLifespan += sleepEffect;
    
    // Adjust for stress
    baseLifespan += stress;
    
    // Adjust for smoking
    baseLifespan += smoking;
    
    // Adjust for alcohol
    baseLifespan += alcohol;
    
    // Adjust for education
    baseLifespan += education;
    
    // Adjust for social connections
    baseLifespan += social;
    
    // Ensure lifespan is within reasonable bounds
    baseLifespan = Math.max(baseLifespan, 50);
    baseLifespan = Math.min(baseLifespan, 120);
    
    // Calculate difference from average
    const averageLifespan = gender === 'female' ? 79 : 74;
    const difference = baseLifespan - averageLifespan;
    
    // Display results
    document.getElementById('lifespan').textContent = Math.round(baseLifespan);
    document.getElementById('average-lifespan').textContent = averageLifespan;
    document.getElementById('difference').textContent = difference >= 0 ? `+${Math.round(difference)}` : Math.round(difference);
    
    // Show key factors
    const factorsEl = document.getElementById('factors');
    factorsEl.innerHTML = '';
    
    const factors = [
        { name: 'Genetics (parental longevity)', value: parentalAge },
        { name: 'Body weight (BMI)', value: bmiEffect },
        { name: 'Physical activity', value: exerciseEffect },
        { name: 'Diet quality', value: diet },
        { name: 'Sleep quality', value: sleepEffect },
        { name: 'Stress management', value: stress },
        { name: 'Smoking status', value: smoking },
        { name: 'Alcohol consumption', value: alcohol },
        { name: 'Education level', value: education },
        { name: 'Social connections', value: social }
    ];
    
    factors.forEach(factor => {
        if (factor.value !== 0) {
            const factorEl = document.createElement('div');
            factorEl.className = 'factor';
            
            const nameEl = document.createElement('span');
            nameEl.className = 'factor-name';
            nameEl.textContent = factor.name + ': ';
            factorEl.appendChild(nameEl);
            
            const valueEl = document.createElement('span');
            valueEl.className = factor.value > 0 ? 'positive' : 'negative';
            valueEl.textContent = (factor.value > 0 ? '+' : '') + factor.value.toFixed(1) + ' years';
            factorEl.appendChild(valueEl);
            
            factorsEl.appendChild(factorEl);
        }
    });
    
    // Generate recommendations
    const recommendationsEl = document.getElementById('recommendations');
    recommendationsEl.innerHTML = '';
    
    const recommendations = [];
    
    if (bmi < 18.5) {
        recommendations.push('Consider gaining weight to reach a healthier BMI range (18.5-24.9)');
    } else if (bmi > 25) {
        recommendations.push('Losing weight could add years to your life - aim for gradual weight loss');
    }
    
    if (exercise < 150) {
        recommendations.push('Increase physical activity to at least 150 minutes of moderate exercise per week');
    } else if (exercise < 300) {
        recommendations.push('Consider increasing to 300 minutes of exercise per week for additional benefits');
    }
    
    if (diet < 3) {
        recommendations.push('Improve diet quality by eating more whole foods, vegetables, and plant-based proteins');
    }
    
    if (sleep < 6 || sleep > 9) {
        recommendations.push('Aim for 7-9 hours of sleep per night for optimal health');
    }
    
    if (stress < 2) {
        recommendations.push('Develop stress management techniques like meditation, yoga, or mindfulness');
    }
    
    if (smoking < 0) {
        recommendations.push('Quitting smoking is the single most important thing you can do to extend your life');
    }
    
    if (alcohol < 0) {
        recommendations.push('Reduce alcohol consumption to moderate levels (1 drink/day or less)');
    }
    
    if (social < 2) {
        recommendations.push('Strengthen social connections - join clubs, volunteer, or nurture relationships');
    }
    
    if (recommendations.length === 0) {
        recommendations.push("You're doing great! Maintain these healthy habits.");
    }
    
    recommendations.forEach(rec => {
        const li = document.createElement('li');
        li.textContent = rec;
        recommendationsEl.appendChild(li);
    });
    
    // Show results
    document.getElementById('result').style.display = 'block';
}