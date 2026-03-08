// Botox Dosage & Cost Calculator

// Treatment Data (Units)
const treatmentData = {
    glabella: {
        light: 20, standard: 25, advanced: 30,
        maleMultiplier: 1.25,
        description: "Frown lines between eyebrows"
    },
    forehead: {
        light: 10, standard: 15, advanced: 20,
        maleMultiplier: 1.3,
        description: "Horizontal forehead lines"
    },
    crowfeet: {
        light: 10, standard: 12, advanced: 15,
        maleMultiplier: 1.25,
        description: "Lines at outer eye corners (per side)",
        isBilateral: true
    },
    bunny: {
        light: 4, standard: 5, advanced: 6,
        maleMultiplier: 1.2,
        description: "Nasal scrunch lines"
    },
    lipflip: {
        light: 3, standard: 4, advanced: 5,
        maleMultiplier: 1,
        description: "Upper lip flip"
    },
    dimpler: {
        light: 5, standard: 6, advanced: 8,
        maleMultiplier: 1.2,
        description: "Chin dimpling"
    },
    jaw: {
        light: 20, standard: 25, advanced: 30,
        maleMultiplier: 1.4,
        description: "Masseter reduction (per side)",
        isBilateral: true
    },
    neck: {
        light: 12, standard: 15, advanced: 18,
        maleMultiplier: 1.3,
        description: "Platysmal bands (per band)"
    }
};

// Pricing Data (Per Unit Cost in USD)
const pricingData = {
    us: { dermatologist: 15, medspa: 12, nurse: 13 },
    uk: { dermatologist: 10, medspa: 8, nurse: 9 },
    canada: { dermatologist: 12, medspa: 10, nurse: 11 },
    australia: { dermatologist: 14, medspa: 11, nurse: 12 },
    europe: { dermatologist: 11, medspa: 9, nurse: 10 },
    uae: { dermatologist: 16, medspa: 13, nurse: 14 }
};

// Currency Conversion Rates (to USD)
const currencyRates = {
    uk: 0.80,   // GBP to USD
    canada: 0.75, // CAD to USD
    australia: 0.65, // AUD to USD
    europe: 0.90,   // EUR to USD
    uae: 0.27      // AED to USD
};

// Currency Symbols
const currencySymbols = {
    us: "$",
    uk: "£",
    canada: "CA$",
    australia: "AU$",
    europe: "€",
    uae: "AED "
};

// Select Intensity Level
function selectIntensity(element) {
    document.querySelectorAll('.intensity-option').forEach(opt => {
        opt.classList.remove('active');
    });
    element.classList.add('active');
    const radio = element.querySelector('input');
    radio.checked = true;
}

// Main Calculation Function
function calculateBotox() {
    const country = document.getElementById('country').value;
    const gender = document.getElementById('gender').value;
    const intensity = document.querySelector('input[name="intensity"]:checked').value;
    const providerType = document.getElementById('provider-type').value;
    
    // Get selected treatment areas
    const selectedAreas = [];
    document.querySelectorAll('.treatment-areas input[type="checkbox"]:checked').forEach(checkbox => {
        selectedAreas.push(checkbox.id);
    });
    
    if (selectedAreas.length === 0) {
        alert("Please select at least one treatment area");
        return;
    }
    
    // Calculate dosage for each area
    let totalUnits = 0;
    let dosageResultsHTML = '';
    
    selectedAreas.forEach(area => {
        const data = treatmentData[area];
        let units = data[intensity]; // Light, Standard, or Advanced
        
        // Adjust for male patients
        if (gender === 'male') {
            units *= data.maleMultiplier;
        }
        
        // Double for bilateral treatments
        if (data.isBilateral) {
            units *= 2;
        }
        
        units = Math.round(units);
        totalUnits += units;
        
        dosageResultsHTML += `
            <div class="result-item">
                <span class="result-label">${capitalizeFirstLetter(area)}:</span>
                <span>${units} units (${data.description})</span>
            </div>
        `;
    });
    
    // Calculate cost (convert to local currency if needed)
    const costPerUnitUSD = pricingData[country][providerType];
    const currencyRate = (country === 'us') ? 1 : currencyRates[country];
    const costPerUnitLocal = costPerUnitUSD / currencyRate;
    const totalCostLocal = totalUnits * costPerUnitLocal;
    
    // Display results
    document.getElementById('dosage-results').innerHTML = dosageResultsHTML;
    document.getElementById('total-units').textContent = totalUnits;
    document.getElementById('cost-per-unit').textContent = `${currencySymbols[country]}${costPerUnitLocal.toFixed(2)}`;
    document.getElementById('total-cost').textContent = `${currencySymbols[country]}${totalCostLocal.toFixed(2)}`;
    
    // Show result div
    document.getElementById('result').style.display = 'block';

    // Content loop
    if (typeof showNextSteps === 'function') showNextSteps('botox', collectUserData(), null, 'result');
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Initialize intensity options on page load
document.addEventListener('DOMContentLoaded', function() {
    // Set the first intensity option as active by default
    const firstOption = document.querySelector('.intensity-option');
    if (firstOption) {
        firstOption.classList.add('active');
    }
});