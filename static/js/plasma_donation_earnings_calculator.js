// Plasma donation compensation data
const compensationRates = {
    baseRates: {
        newDonor: {
            firstMonthBonus: 200, // Additional bonus for first month
            perDonation: { min: 40, max: 60 },
            note: "New donors typically earn higher rates for their first 8-10 donations"
        },
        regularDonor: {
            perDonation: { min: 20, max: 50 },
            note: "Regular rates vary by location and donor weight"
        }
    },
    stateModifiers: {
        "CA": { modifier: 1.3, note: "Highest paying state" },
        "NY": { modifier: 1.25, note: "High metro area demand" },
        "TX": { modifier: 1.2, note: "Competitive markets" },
        "FL": { modifier: 1.15, note: "Many donation centers" },
        "IL": { modifier: 1.1, note: "Chicago area premiums" },
        "PA": { modifier: 1.05, note: "Slightly above average" },
        "ND": { modifier: 0.85, note: "Lower cost of living" },
        "SD": { modifier: 0.85, note: "Fewer centers" },
        "WY": { modifier: 0.9, note: "Limited competition" }
    },
    weightBonus: {
        threshold: 175,
        amountPerDonation: 10,
        note: "Donors over 175 lbs may earn $10 more per donation"
    },
    frequencyModifiers: {
        "1": { desc: "once weekly", multiplier: 1 },
        "2": { desc: "twice weekly (max)", multiplier: 2 },
        "3": { desc: "1-2 times monthly", multiplier: 0.5 }
    }
};

function calculate() {
    // Get form values
    const age = parseInt(document.getElementById('age').value);
    const weight = parseInt(document.getElementById('weight').value);
    const healthStatus = document.getElementById('health-status').value;
    const isNewDonor = document.getElementById('new-donor').value === 'yes';
    const frequency = document.getElementById('frequency').value;
    const state = document.getElementById('state').value;
    
    // Validate all fields
    if (!age || !weight || !healthStatus || !frequency || !state || document.getElementById('new-donor').value === '') {
        alert('Please fill out all fields.');
        return;
    }
    
    // Check eligibility
    let eligible = true;
    let reasons = [];
    
    if (age < 18 || age > 75) {
        eligible = false;
        reasons.push("You must be between 18-75 years old to donate plasma.");
    }
    
    if (weight < 110) {
        eligible = false;
        reasons.push("You must weigh at least 110 lbs to donate plasma.");
    }
    
    if (healthStatus === 'yes') {
        reasons.push("Note: Some health conditions may require additional screening.");
    }
    
    // Display results
    const resultsDiv = document.getElementById('results');
    resultsDiv.style.display = 'block';
    resultsDiv.className = eligible ? 'eligible' : 'ineligible';
    
    document.getElementById('eligibility-result').innerHTML = eligible 
        ? '<p class="highlight">✅ You appear to be eligible to donate plasma!</p>'
        : '<p class="highlight">⚠️ You may not be eligible to donate plasma at this time.</p>';
    
    if (reasons.length > 0) {
        document.getElementById('reasons-list').innerHTML = 
            '<h3>Important Notes:</h3><ul>' + 
            reasons.map(reason => `<li>${reason}</li>`).join('') + 
            '</ul>';
    } else {
        document.getElementById('reasons-list').innerHTML = '';
    }
    
    // Calculate and display earnings if eligible
    if (eligible) {
        const earnings = calculateEarnings(state, isNewDonor, weight, frequency);
        displayEarnings(earnings);
        document.getElementById('earnings-details').style.display = 'block';
        document.getElementById('ineligible-cta').style.display = 'none';
    } else {
        document.getElementById('earnings-details').style.display = 'none';
        document.getElementById('ineligible-cta').style.display = 'block';
    }
}

function calculateEarnings(state, isNewDonor, weight, frequency) {
    // Get base rates
    const donorType = isNewDonor ? 'newDonor' : 'regularDonor';
    let baseRate = compensationRates.baseRates[donorType].perDonation;
    
    // Apply state modifier
    const stateMod = compensationRates.stateModifiers[state] || { modifier: 1 };
    let minRate = baseRate.min * stateMod.modifier;
    let maxRate = baseRate.max * stateMod.modifier;
    
    // Apply weight bonus
    let weightBonus = 0;
    if (weight > compensationRates.weightBonus.threshold) {
        weightBonus = compensationRates.weightBonus.amountPerDonation;
        minRate += weightBonus;
        maxRate += weightBonus;
    }
    
    // Apply new donor bonus (first month only)
    let newDonorBonus = 0;
    if (isNewDonor) {
        newDonorBonus = compensationRates.baseRates.newDonor.firstMonthBonus / 8; // Spread over 8 donations
        minRate += newDonorBonus;
        maxRate += newDonorBonus;
    }
    
    // Calculate frequency
    const freq = compensationRates.frequencyModifiers[frequency];
    const weeklyDonations = freq.multiplier;
    const monthlyDonations = weeklyDonations * 4.33; // Average weeks per month
    const annualDonations = weeklyDonations * 52;
    
    return {
        perDonation: {
            min: Math.round(minRate),
            max: Math.round(maxRate),
            base: Math.round(baseRate.min * stateMod.modifier),
            weightBonus: weight > compensationRates.weightBonus.threshold ? weightBonus : 0,
            newDonorBonus: isNewDonor ? Math.round(newDonorBonus) : 0
        },
        weekly: {
            min: Math.round(minRate * weeklyDonations),
            max: Math.round(maxRate * weeklyDonations)
        },
        monthly: {
            min: Math.round(minRate * monthlyDonations),
            max: Math.round(maxRate * monthlyDonations)
        },
        annual: {
            min: Math.round(minRate * annualDonations),
            max: Math.round(maxRate * annualDonations)
        },
        frequency: freq.desc,
        stateModifier: stateMod.modifier,
        isNewDonor,
        weightOverThreshold: weight > compensationRates.weightBonus.threshold
    };
}

function displayEarnings(earnings) {
    // Per donation
    document.getElementById('per-donation').textContent = 
        `$${earnings.perDonation.min}-$${earnings.perDonation.max}`;
    
    let perDonationNote = `Base rate: $${earnings.perDonation.base}`;
    if (earnings.perDonation.weightBonus > 0) {
        perDonationNote += ` + $${earnings.perDonation.weightBonus} weight bonus`;
    }
    if (earnings.perDonation.newDonorBonus > 0) {
        perDonationNote += ` + $${earnings.perDonation.newDonorBonus} new donor bonus`;
    }
    document.getElementById('per-donation-note').textContent = perDonationNote;
    
    // Weekly
    document.getElementById('weekly').textContent = 
        `$${earnings.weekly.min}-$${earnings.weekly.max}`;
    document.getElementById('weekly-note').textContent = 
        `Based on ${earnings.frequency} donations`;
    
    // Monthly
    document.getElementById('monthly').textContent = 
        `$${earnings.monthly.min}-$${earnings.monthly.max}`;
    document.getElementById('monthly-note').textContent = 
        `Average of ${Math.round(earnings.monthly.min / earnings.perDonation.min)} donations per month`;
    
    // Annual
    document.getElementById('annual').textContent = 
        `$${earnings.annual.min}-$${earnings.annual.max}`;
    document.getElementById('annual-note').innerHTML = 
        `Based on consistent donations throughout the year`;
    
    // Calculation details
    let detailsHtml = `
        <div class="detail-row">
            <span class="detail-label">Donation Frequency:</span>
            <span>${earnings.frequency}</span>
        </div>
        <div class="detail-row">
            <span class="detail-label">State Rate Modifier:</span>
            <span>${earnings.stateModifier}x</span>
        </div>`;
    
    if (earnings.isNewDonor) {
        detailsHtml += `
        <div class="detail-row">
            <span class="detail-label">New Donor Bonus:</span>
            <span>$${compensationRates.baseRates.newDonor.firstMonthBonus} first month bonus <span class="bonus-badge">limited time</span></span>
        </div>`;
    }
    
    if (earnings.weightOverThreshold) {
        detailsHtml += `
        <div class="detail-row">
            <span class="detail-label">Weight Bonus:</span>
            <span>$${compensationRates.weightBonus.amountPerDonation} extra per donation <span class="bonus-badge">175+ lbs</span></span>
        </div>`;
    }
    
    document.getElementById('calculation-details').innerHTML = detailsHtml;
    
    // Update CTA button content if needed
    if (earnings.isNewDonor) {
        const firstDonationBonus = Math.min(113, earnings.perDonation.max * 2);
        const ctaButton = document.getElementById('main-cta');
        if (ctaButton) {
            ctaButton.innerHTML = `Get $${firstDonationBonus} Bonus for First Donation →`;
        }
    }
}

// Initialize event listeners when the document is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Set up calculate button event listener
    const calculateBtn = document.getElementById('calculate-btn');
    if (calculateBtn) {
        calculateBtn.addEventListener('click', calculate);
    }
});