// Army Body Fat Calculator — factory-compatible
(function() {
// Global variables
let unitSystem = 'imperial';

// Initialize event listeners
// DOMContentLoaded removed
{
    // Set default unit system
    setUnit('imperial');
    
    // Set up calculation button handler
    document.getElementById('calcBtn').addEventListener('click', calculate);
});

// Toggle between metric and imperial units
function setUnit(unit) {
    unitSystem = unit;
    
    // Update button styling
    document.getElementById('metric-btn').classList.remove('active');
    document.getElementById('imperial-btn').classList.remove('active');
    
    if (unit === 'metric') {
        document.getElementById('metric-btn').classList.add('active');
        document.getElementById('imperial-btn').classList.remove('active');
        document.querySelectorAll('.metric-field').forEach(field => {
            field.style.display = 'block';
        });
        document.querySelectorAll('.imperial-field').forEach(field => {
            field.style.display = 'none';
        });
    } else {
        document.getElementById('imperial-btn').classList.add('active');
        document.getElementById('metric-btn').classList.remove('active');
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
    
    let heightInInches, neckInInches, waistInInches, hipInInches = 0;
    
    // Process based on unit system
    if (unitSystem === 'imperial') {
        const heightFeet = parseInt(document.getElementById('height-feet').value) || 0;
        const heightInch = parseInt(document.getElementById('height-inches').value) || 0;
        heightInInches = (heightFeet * 12) + heightInch;
        neckInInches = parseFloat(document.getElementById('neck-inches').value) || 0;
        waistInInches = parseFloat(document.getElementById('waist-inches').value) || 0;
        if (gender === 'female') {
            hipInInches = parseFloat(document.getElementById('hip-inches').value) || 0;
        }
    } else {
        // Convert from metric to imperial
        heightInInches = (parseFloat(document.getElementById('height-cm').value) || 0) / 2.54;
        neckInInches = (parseFloat(document.getElementById('neck-cm').value) || 0) / 2.54;
        waistInInches = (parseFloat(document.getElementById('waist-cm').value) || 0) / 2.54;
        if (gender === 'female') {
            hipInInches = (parseFloat(document.getElementById('hip-cm').value) || 0) / 2.54;
        }
    }
    
    // Validate inputs
    if (!validateInputs(gender, age, heightInInches, neckInInches, waistInInches, hipInInches)) {
        return;
    }
    
    // Calculate body fat percentage
    let bodyFatPercentage;
    
    if (gender === 'male') {
        // Men: % body fat = 163.205 × log10(waist - neck) - 97.684 × log10(height) - 78.387
        bodyFatPercentage = 163.205 * Math.log10(waistInInches - neckInInches) - 97.684 * Math.log10(heightInInches) - 78.387;
    } else {
        // Women: % body fat = 163.205 × log10(waist + hip - neck) - 97.684 × log10(height) - 104.912
        bodyFatPercentage = 163.205 * Math.log10(waistInInches + hipInInches - neckInInches) - 97.684 * Math.log10(heightInInches) - 104.912;
    }
    
    // Handle calculation errors
    if (isNaN(bodyFatPercentage) || !isFinite(bodyFatPercentage)) {
        if (typeof factoryReveal === 'function') { factoryReveal(); };
        document.getElementById('body-fat-percentage').textContent = "Error";
        document.getElementById('army-compliance').textContent = "Please check your measurements. Ensure neck measurement is smaller than waist measurement.";
        return;
    }
    
    // Ensure body fat can't be negative
    bodyFatPercentage = Math.max(bodyFatPercentage, 0);
    
    // Round to one decimal place
    bodyFatPercentage = Math.round(bodyFatPercentage * 10) / 10;
    
    // Display results
    displayResults(bodyFatPercentage, gender, age);
}

// Validate user inputs
function validateInputs(gender, age, height, neck, waist, hip) {
    if (age < 17 || age > 100) {
        return false;
    }
    
    if (height <= 0) {
        return false;
    }
    
    if (neck <= 0) {
        return false;
    }
    
    if (waist <= 0) {
        return false;
    }
    
    if (gender === 'female' && hip <= 0) {
        return false;
    }
    
    if (neck >= waist) {
        return false;
    }
    
    return true;
}

// Display calculated results
function displayResults(bodyFat, gender, age) {
    document.getElementById('results').style.display = 'block';
    document.getElementById('body-fat-percentage').textContent = bodyFat + "%";
    
    // Determine compliance status based on Army standards
    const standards = {
        'male': {
            '17-20': 20,
            '21-27': 22,
            '28-39': 24,
            '40+': 26
        },
        'female': {
            '17-20': 30,
            '21-27': 32,
            '28-39': 34,
            '40+': 36
        }
    };
    
    let ageGroup;
    if (age <= 20) ageGroup = '17-20';
    else if (age <= 27) ageGroup = '21-27';
    else if (age <= 39) ageGroup = '28-39';
    else ageGroup = '40+';
    
    const maxAllowed = standards[gender][ageGroup];
    
    if (bodyFat <= maxAllowed) {
        document.getElementById('army-compliance').innerHTML = 
            `<span style="color: #4caf50;">✅ PASS:</span> You are within the Army standard for your age group (${ageGroup}): ${maxAllowed}%`;
    } else {
        document.getElementById('army-compliance').innerHTML = 
            `<span style="color: #d32f2f;">❌ FAIL:</span> You exceed the maximum allowed body fat for your age group (${ageGroup}): ${maxAllowed}%`;
    }
}
})();
