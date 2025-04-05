// Global variables
let unit = 'metric';
let drinkCount = 1;

// Drink type presets
const drinkPresets = {
    beer: { alcoholPercentage: 5, defaultVolume: 330, defaultUnit: 'ml' },
    wine: { alcoholPercentage: 12, defaultVolume: 150, defaultUnit: 'ml' },
    spirits: { alcoholPercentage: 40, defaultVolume: 44, defaultUnit: 'ml' },
    cocktail: { alcoholPercentage: 15, defaultVolume: 200, defaultUnit: 'ml' },
    custom: { alcoholPercentage: 5, defaultVolume: 100, defaultUnit: 'ml' }
};

// Set unit system (metric or imperial)
function setUnit(unitSystem) {
    unit = unitSystem;
    
    // Update UI
    if (unitSystem === 'metric') {
        document.getElementById('metric-btn').classList.add('active');
        document.getElementById('imperial-btn').classList.remove('active');
        
        document.querySelectorAll('.metric-field').forEach(field => {
            field.style.display = 'block';
        });
        
        document.querySelectorAll('.imperial-field').forEach(field => {
            field.style.display = 'none';
        });
    } else {
        document.getElementById('metric-btn').classList.remove('active');
        document.getElementById('imperial-btn').classList.add('active');
        
        document.querySelectorAll('.metric-field').forEach(field => {
            field.style.display = 'none';
        });
        
        document.querySelectorAll('.imperial-field').forEach(field => {
            field.style.display = 'block';
        });
    }
}

// Add a new drink to the list
function addDrink(type) {
    const preset = drinkPresets[type];
    const drinksContainer = document.getElementById('drinks-container');
    const index = drinkCount;
    
    const drinkHtml = `
        <div id="drink-${index}" class="drink-item" style="background-color: #f8f9fa; padding: 15px; border-radius: 8px; margin-top: 15px; position: relative;">
            <button type="button" class="remove-drink-btn" style="position: absolute; top: 10px; right: 10px; background: none; border: none; color: #dc3545; font-weight: bold;" onclick="removeDrink(${index})">✕</button>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                <div>
                    <label for="drink-type-${index}">Drink Type</label>
                    <select id="drink-type-${index}" class="drink-type" onchange="updateDrinkType(${index})">
                        <option value="beer" ${type === 'beer' ? 'selected' : ''}>Beer</option>
                        <option value="wine" ${type === 'wine' ? 'selected' : ''}>Wine</option>
                        <option value="spirits" ${type === 'spirits' ? 'selected' : ''}>Spirits/Shot</option>
                        <option value="cocktail" ${type === 'cocktail' ? 'selected' : ''}>Cocktail</option>
                        <option value="custom" ${type === 'custom' ? 'selected' : ''}>Custom</option>
                    </select>
                </div>
                
                <div>
                    <label for="alcohol-percent-${index}">Alcohol %</label>
                    <div style="display: flex; align-items: center;">
                        <input type="number" id="alcohol-percent-${index}" class="alcohol-percent" min="0" max="100" step="0.1" value="${preset.alcoholPercentage}">
                        <span style="margin-left: 5px;">%</span>
                    </div>
                </div>
                
                <div class="metric-field" style="grid-column: span 2;">
                    <label for="volume-${index}">Volume</label>
                    <div style="display: flex; gap: 10px; align-items: center;">
                        <input type="number" id="volume-${index}" class="volume" min="0" max="2000" value="${preset.defaultVolume}">
                        <select id="volume-unit-${index}" class="volume-unit">
                            <option value="ml" ${preset.defaultUnit === 'ml' ? 'selected' : ''}>ml</option>
                            <option value="oz" ${preset.defaultUnit === 'oz' ? 'selected' : ''}>oz</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    drinksContainer.insertAdjacentHTML('beforeend', drinkHtml);
    drinkCount++;
}

// Remove a drink from the list
function removeDrink(index) {
    const drinkElement = document.getElementById(`drink-${index}`);
    if (drinkElement && document.querySelectorAll('.drink-item').length > 1) {
        drinkElement.remove();
    } else {
        alert('You must have at least one drink in the calculator.');
    }
}

// Update drink type preset values
function updateDrinkType(index) {
    const type = document.getElementById(`drink-type-${index}`).value;
    const preset = drinkPresets[type];
    
    if (type !== 'custom') {
        document.getElementById(`alcohol-percent-${index}`).value = preset.alcoholPercentage;
        document.getElementById(`volume-${index}`).value = preset.defaultVolume;
        document.getElementById(`volume-unit-${index}`).value = preset.defaultUnit;
    }
}

// Calculate BAC
function calculateBAC() {
    try {
        console.log("Starting BAC calculation");
        
        // Get gender
        const genderElement = document.getElementById('gender');
        if (!genderElement) {
            console.error("Gender element not found");
            return;
        }
        const gender = genderElement.value;
        console.log("Gender:", gender);
        
        // Get weight
        let weightInKg;
        if (unit === 'metric') {
            const weightKgElement = document.getElementById('weight-kg');
            if (!weightKgElement) {
                console.error("Weight-kg element not found");
                return;
            }
            weightInKg = parseFloat(weightKgElement.value);
        } else {
            const weightLbElement = document.getElementById('weight-lb');
            if (!weightLbElement) {
                console.error("Weight-lb element not found");
                return;
            }
            const weightInLb = parseFloat(weightLbElement.value);
            weightInKg = weightInLb * 0.453592; // Convert lb to kg
        }
        console.log("Weight in kg:", weightInKg);
        
        // Get time elapsed
        const timeElapsedElement = document.getElementById('time-elapsed');
        if (!timeElapsedElement) {
            console.error("Time-elapsed element not found");
            return;
        }
        const timeSinceDrinking = parseFloat(timeElapsedElement.value);
        console.log("Time since drinking:", timeSinceDrinking);
        
        // Calculate total alcohol consumed in grams
        let totalAlcoholGrams = 0;
        
        const drinkItems = document.querySelectorAll('.drink-item');
        console.log("Found drink items:", drinkItems.length);
        
        drinkItems.forEach((drink) => {
            try {
                if (!drink.id) {
                    console.error("Drink item has no ID");
                    return;
                }
                
                const drinkIndex = drink.id.split('-')[1]; // Extract index from ID
                console.log("Processing drink with index:", drinkIndex);
                
                // Get values for this drink
                const alcoholPercentElement = document.getElementById(`alcohol-percent-${drinkIndex}`);
                const volumeElement = document.getElementById(`volume-${drinkIndex}`);
                const volumeUnitElement = document.getElementById(`volume-unit-${drinkIndex}`);
                
                if (!alcoholPercentElement) {
                    console.error(`Alcohol percent element not found for index ${drinkIndex}`);
                    return;
                }
                if (!volumeElement) {
                    console.error(`Volume element not found for index ${drinkIndex}`);
                    return;
                }
                if (!volumeUnitElement) {
                    console.error(`Volume unit element not found for index ${drinkIndex}`);
                    return;
                }
                
                const alcoholPercentage = parseFloat(alcoholPercentElement.value);
                const volume = parseFloat(volumeElement.value);
                const volumeUnit = volumeUnitElement.value;
                console.log(`Drink ${drinkIndex}: ${volume}${volumeUnit} at ${alcoholPercentage}%`);
                
                // Convert volume to ml if in oz
                const volumeInMl = volumeUnit === 'oz' ? volume * 29.5735 : volume;
                
                // Calculate alcohol content in ml (percentage/100 * volume)
                const alcoholVolumeInMl = (alcoholPercentage / 100) * volumeInMl;
                
                // Convert alcohol volume to grams (density of alcohol is ~0.789 g/ml)
                const alcoholInGrams = alcoholVolumeInMl * 0.789;
                
                totalAlcoholGrams += alcoholInGrams;
            } catch (drinkError) {
                console.error("Error processing drink:", drinkError);
            }
        });
        
        console.log("Total alcohol in grams:", totalAlcoholGrams);
        
        // Widmark formula variables
        const r = gender === 'male' ? 0.68 : 0.55; // Distribution ratio
        const metabolismRate = 0.015; // Average metabolism rate per hour
        
        // Calculate BAC using Widmark formula: BAC = (alcohol in grams / (weight in kg * r)) / 10 - (metabolism rate * hours)
        let bac = (totalAlcoholGrams / (weightInKg * r)) / 10 - (metabolismRate * timeSinceDrinking);
        
        // BAC can't be negative
        bac = Math.max(0, bac);
        
        // Round to 3 decimal places
        bac = Math.round(bac * 1000) / 1000;
        
        console.log("Calculated BAC:", bac);
        
        // Display results
        displayResults(bac);
    } catch (error) {
        console.error("Error calculating BAC:", error);
    }
}

// Display the results
function displayResults(bac) {
    try {
        console.log("Displaying results for BAC:", bac);
        
        // Format BAC to always show 3 decimal places
        const formattedBAC = bac.toFixed(3);
        
        // Show results section
        const resultsElement = document.getElementById('results');
        if (!resultsElement) {
            console.error("Results element not found");
            return;
        }
        resultsElement.style.display = 'block';
        
        // Update BAC result
        const bacResultElement = document.getElementById('bac-result');
        if (!bacResultElement) {
            console.error("BAC result element not found");
            return;
        }
        bacResultElement.textContent = formattedBAC + '%';
        
        // Determine impairment level
        let impairmentLevel;
        let cardColor;
        let borderColor;
        let textColor;
        
        if (bac === 0) {
            impairmentLevel = 'No alcohol in system';
            cardColor = '#f8f9fa';
            borderColor = '#ced4da';
            textColor = '#212529';
        } else if (bac < 0.03) {
            impairmentLevel = 'Minimal impairment - mild relaxation, slight mood elevation';
            cardColor = '#e6f9ff';
            borderColor = '#80d8ff';
            textColor = '#29b6f6';
        } else if (bac < 0.06) {
            impairmentLevel = 'Mild impairment - relaxation, mild euphoria, decreased inhibition';
            cardColor = '#daf7ff';
            borderColor = '#00b0ff';
            textColor = '#0288d1';
        } else if (bac < 0.08) {
            impairmentLevel = 'Moderate impairment - reduced coordination, impaired judgment';
            cardColor = '#c9f7ff';
            borderColor = '#0091ea';
            textColor = '#0277bd';
        } else if (bac < 0.15) {
            impairmentLevel = 'Significant impairment - LEGALLY INTOXICATED in most states, slurred speech, poor balance';
            cardColor = '#ffeded';
            borderColor = '#ff5252';
            textColor = '#d32f2f';
        } else if (bac < 0.25) {
            impairmentLevel = 'Severe impairment - nausea, vomiting, blackout risk';
            cardColor = '#ffe6e6';
            borderColor = '#ff1744';
            textColor = '#c62828';
        } else if (bac < 0.35) {
            impairmentLevel = 'Life-threatening - loss of consciousness, risk of coma';
            cardColor = '#ffcccc';
            borderColor = '#d50000';
            textColor = '#b71c1c';
        } else {
            impairmentLevel = 'Potentially fatal - respiratory arrest, death possible';
            cardColor = '#ffd1d1';
            borderColor = '#b71c1c';
            textColor = '#7f0000';
        }
        
        // Update impairment level
        const impairmentLevelElement = document.getElementById('impairment-level');
        if (!impairmentLevelElement) {
            console.error("Impairment level element not found");
            return;
        }
        impairmentLevelElement.textContent = impairmentLevel;
        
        // Update card styling
        const impairmentCard = document.getElementById('impairment-card');
        if (!impairmentCard) {
            console.error("Impairment card element not found");
            return;
        }
        impairmentCard.style.backgroundColor = cardColor;
        impairmentCard.style.borderTop = `4px solid ${borderColor}`;
        impairmentLevelElement.style.color = textColor;
        
        // Show/hide legal warning
        const legalWarning = document.getElementById('legal-warning');
        if (!legalWarning) {
            console.error("Legal warning element not found");
            return;
        }
        if (bac >= 0.08) {
            legalWarning.style.display = 'block';
        } else {
            legalWarning.style.display = 'none';
        }
        
        // Calculate time to sober
        const hoursToSober = bac / 0.015;
        const hoursToLegal = (bac - 0.08) / 0.015;
        
        // Format time strings
        const soberTimeFormatted = formatTime(hoursToSober);
        const legalTimeFormatted = bac > 0.08 ? formatTime(hoursToLegal) : '0 hours';
        
        // Update time displays
        const soberTimeElement = document.getElementById('sober-time');
        const legalTimeElement = document.getElementById('legal-time');
        
        if (!soberTimeElement) {
            console.error("Sober time element not found");
            return;
        }
        if (!legalTimeElement) {
            console.error("Legal time element not found");
            return;
        }
        
        soberTimeElement.textContent = soberTimeFormatted;
        legalTimeElement.textContent = legalTimeFormatted;
        
        console.log("Results displayed successfully");
    } catch (error) {
        console.error("Error displaying results:", error);
    }
}

// Format time in hours and minutes
function formatTime(hours) {
    if (hours <= 0) return '0 hours';
    
    const fullHours = Math.floor(hours);
    const minutes = Math.round((hours - fullHours) * 60);
    
    if (minutes === 0) {
        return fullHours === 1 ? '1 hour' : `${fullHours} hours`;
    } else if (fullHours === 0) {
        return `${minutes} minutes`;
    } else {
        const hourText = fullHours === 1 ? 'hour' : 'hours';
        return `${fullHours} ${hourText} ${minutes} minutes`;
    }
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Set default unit
    setUnit('metric');
});
