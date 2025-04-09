// Initialize event listeners
document.addEventListener('DOMContentLoaded', function() {
    const calculateBtn = document.getElementById('calculate-btn');
    if (calculateBtn) {
        calculateBtn.addEventListener('click', calculate);
    }
});

// Main calculation function
function calculate() {
    // Get input values
    const bandSize = parseInt(document.getElementById('bandSize').value);
    const currentCup = document.getElementById('currentCup').value;
    const goalCup = document.getElementById('goalCup').value;
    const breastWidth = parseFloat(document.getElementById('breastWidth').value);
    const implantType = document.getElementById('implantType').value;
    const location = document.getElementById('location').value;
    
    // Validate inputs
    if (!validateInputs(bandSize, currentCup, goalCup, breastWidth, implantType, location)) {
        return;
    }
    
    // Calculate implant volume based on cup size difference and breast width
    const volumeResult = calculateImplantVolume(currentCup, goalCup, breastWidth);
    
    // Determine profile recommendation based on breast width and volume
    const profileResult = determineProfile(breastWidth, volumeResult);
    
    // Calculate cost range based on implant type and location
    const costResult = calculateCostRange(implantType, location);
    
    // Display results
    displayResults(volumeResult, profileResult, costResult);
}

// Validate user inputs
function validateInputs(bandSize, currentCup, goalCup, breastWidth, implantType, location) {
    if (isNaN(bandSize) || bandSize < 28 || bandSize > 44) {
        alert('Please enter a valid band size between 28 and 44.');
        return false;
    }
    
    if (isNaN(breastWidth) || breastWidth < 10 || breastWidth > 20) {
        alert('Please enter a valid breast width between 10 and 20 cm.');
        return false;
    }
    
    const cupSizes = ['AA', 'A', 'B', 'C', 'D', 'DD/E', 'DDD/F', 'G'];
    const currentCupIndex = cupSizes.indexOf(currentCup);
    const goalCupIndex = cupSizes.indexOf(goalCup);
    
    if (goalCupIndex <= currentCupIndex) {
        alert('Goal cup size should be larger than current cup size.');
        return false;
    }
    
    return true;
}

// Calculate implant volume based on cup difference and breast width
function calculateImplantVolume(currentCup, goalCup, breastWidth) {
    const cupSizes = ['AA', 'A', 'B', 'C', 'D', 'DD/E', 'DDD/F', 'G'];
    const currentCupIndex = cupSizes.indexOf(currentCup);
    const goalCupIndex = cupSizes.indexOf(goalCup);
    const cupDifference = goalCupIndex - currentCupIndex;
    
    // Base volume per cup increase (varies by breast width)
    let baseVolumePerCup;
    if (breastWidth < 12) {
        baseVolumePerCup = 130; // Narrower chest needs less volume per cup size
    } else if (breastWidth < 14) {
        baseVolumePerCup = 150; // Average width
    } else if (breastWidth < 16) {
        baseVolumePerCup = 180; // Wider chest needs more volume
    } else {
        baseVolumePerCup = 200; // Very wide chest
    }
    
    // Calculate volume range
    const minVolume = Math.round((baseVolumePerCup * cupDifference) * 0.9);
    const maxVolume = Math.round((baseVolumePerCup * cupDifference) * 1.1);
    
    return {
        min: minVolume,
        max: maxVolume
    };
}

// Determine recommended profile based on breast width and volume
function determineProfile(breastWidth, volume) {
    const avgVolume = (volume.min + volume.max) / 2;
    let profile;
    
    // Narrow breast width with higher volume = higher profile needed
    if (breastWidth < 12) {
        if (avgVolume < 200) profile = "Low to Moderate";
        else if (avgVolume < 300) profile = "Moderate";
        else if (avgVolume < 400) profile = "Moderate Plus";
        else profile = "High";
    } 
    // Average breast width
    else if (breastWidth < 14) {
        if (avgVolume < 250) profile = "Low to Moderate";
        else if (avgVolume < 350) profile = "Moderate";
        else if (avgVolume < 450) profile = "Moderate Plus";
        else profile = "High";
    }
    // Wide breast width
    else {
        if (avgVolume < 300) profile = "Low";
        else if (avgVolume < 400) profile = "Low to Moderate";
        else if (avgVolume < 500) profile = "Moderate";
        else profile = "Moderate Plus to High";
    }
    
    return profile;
}

// Calculate cost range based on implant type and location
function calculateCostRange(implantType, location) {
    let baseCost;
    
    // Set base cost ranges by implant type
    switch (implantType) {
        case 'saline':
            baseCost = { min: 3500, max: 6000 };
            break;
        case 'silicone':
            baseCost = { min: 4500, max: 7000 };
            break;
        case 'gummy':
            baseCost = { min: 5500, max: 8000 };
            break;
        default:
            baseCost = { min: 4500, max: 7000 };
    }
    
    // Adjust for location
    let multiplier = 1.0;
    let currency = '$';
    
    switch (location) {
        case 'usa':
            multiplier = 1.0;
            currency = '$';
            break;
        case 'europe':
            multiplier = 0.9; // Slightly cheaper in Europe
            currency = '€';
            break;
        case 'asia':
            multiplier = 0.7; // More affordable in many Asian countries
            currency = '$';
            break;
        default:
            multiplier = 1.0;
            currency = '$';
    }
    
    const minCost = Math.round(baseCost.min * multiplier);
    const maxCost = Math.round(baseCost.max * multiplier);
    
    return {
        min: minCost,
        max: maxCost,
        currency: currency
    };
}

// Display the calculated results
function displayResults(volumeResult, profileResult, costResult) {
    // Update the DOM with results
    document.getElementById('volumeResult').textContent = `${volumeResult.min} - ${volumeResult.max} cc`;
    document.getElementById('profileResult').textContent = profileResult;
    document.getElementById('costResult').textContent = `${costResult.currency}${costResult.min.toLocaleString()} - ${costResult.currency}${costResult.max.toLocaleString()}`;
    
    // Show results section
    document.getElementById('results').style.display = 'block';
    
    // Scroll to results
    document.getElementById('results').scrollIntoView({ behavior: 'smooth' });
}