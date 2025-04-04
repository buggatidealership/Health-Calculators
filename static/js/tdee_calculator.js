// Unit toggle functionality
document.querySelectorAll('input[name="units"]').forEach(radio => {
    radio.addEventListener('change', function() {
        const isMetric = this.value === 'metric';
        document.querySelector('.metric-inputs').classList.toggle('hidden', !isMetric);
        document.querySelector('.imperial-inputs').classList.toggle('hidden', isMetric);
    });
});

function calculateTDEE() {
    // Get common values
    const age = parseInt(document.getElementById('age').value);
    const gender = document.getElementById('gender').value;
    const activity = parseFloat(document.getElementById('activity').value);
    const isMetric = document.querySelector('input[name="units"]:checked').value === 'metric';

    // Get weight and height based on units
    let weight, height;
   
    if (isMetric) {
        weight = parseFloat(document.getElementById('weight_kg').value);
        height = parseFloat(document.getElementById('height_cm').value);
    } else {
        // Convert pounds to kg
        weight = parseFloat(document.getElementById('weight_lb').value) * 0.453592;
        // Convert feet/inches to cm
        const feet = parseFloat(document.getElementById('height_ft').value);
        const inches = parseFloat(document.getElementById('height_in').value) || 0;
        height = (feet * 12 + inches) * 2.54;
    }

    // Validate inputs
    if (!age || !weight || !height || isNaN(weight) || isNaN(height)) {
        alert('Please fill all required fields with valid numbers');
        return;
    }

    // Calculate BMR using Mifflin-St Jeor Equation
    let bmr;
    if (gender === 'male') {
        bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
    } else {
        bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161;
    }

    // Calculate TDEE and results
    const tdee = Math.round(bmr * activity);
   
    // Ensure minimum safe calories
    const minCalories = gender === 'female' ? 1200 : 1500;
    const loss1 = Math.max(tdee - 250, minCalories);
    const loss2 = Math.max(tdee - 500, minCalories);
    const loss3 = Math.max(tdee - 1000, minCalories);

    // Display results
    document.getElementById('tdee').textContent = `${tdee} kcal/day`;
    document.getElementById('loss1').textContent = `${loss1} kcal/day`;
    document.getElementById('loss2').textContent = `${loss2} kcal/day`;
    document.getElementById('loss3').textContent = `${loss3} kcal/day`;
    document.getElementById('results').style.display = 'block'; 
    
    // Scroll to results
    document.getElementById('results').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}
