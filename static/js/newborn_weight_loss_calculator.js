function convertToGrams(weight, unit) {
    if (unit === "kg") {
        return weight * 1000;
    } else if (unit === "lb") {
        return weight * 453.592;
    }
    return weight;
}

function formatWeight(grams, unit) {
    if (unit === "kg") {
        return (grams / 1000).toFixed(3) + " kg";
    } else {
        // Convert to pounds and ounces
        const totalOz = grams / 28.3495;
        const lbs = Math.floor(totalOz / 16);
        const oz = Math.round(totalOz % 16);
        return lbs > 0 ? `${lbs} lb ${oz} oz` : `${oz} oz`;
    }
}

function calculateWeightLoss() {
    // Get and validate inputs
    const birthWeight = parseFloat(document.getElementById('birth-weight').value);
    const birthUnit = document.getElementById('birth-weight-unit').value;
    const currentWeight = parseFloat(document.getElementById('current-weight').value);
    const currentUnit = document.getElementById('current-weight-unit').value;
    const age = parseInt(document.getElementById('age').value);
    const feedingMethod = document.getElementById('feeding-method').value;
    
    if (isNaN(birthWeight) || isNaN(currentWeight) || isNaN(age) || age < 0 || age > 14) {
        alert("Please enter valid weights and age (0-14 days)");
        return;
    }
    
    // Convert to grams for calculation
    const birthGrams = convertToGrams(birthWeight, birthUnit);
    const currentGrams = convertToGrams(currentWeight, currentUnit);
    
    // Calculate loss
    const lossGrams = birthGrams - currentGrams;
    const percentLoss = (lossGrams / birthGrams) * 100;
    
    // Determine status (based on evidence-based thresholds)
    let status, statusClass, recommendation;
    
    if (currentGrams > birthGrams) {
        status = "Weight gain (above birth weight)";
        statusClass = "normal";
        recommendation = "Your baby has surpassed their birth weight, which is excellent. Continue current feeding practices.";
    }
    else if (percentLoss <= 7) {
        status = "Normal weight loss";
        statusClass = "normal";
        recommendation = "This is within the expected range. Monitor feedings and diaper output.";
    }
    else if (percentLoss <= 10) {
        status = "Moderate weight loss - Monitor closely";
        statusClass = "warning";
        if (age <= 3) {
            recommendation = "This is at the upper limit of normal for early days. Ensure 8-12 feedings per day.";
            if (feedingMethod === 'breast') {
                recommendation += " Consider lactation consultation if loss continues.";
            }
        } else {
            recommendation = "Baby should be regaining by now. Please consult your pediatrician.";
        }
    }
    else {
        status = "Excessive weight loss - Seek medical advice";
        statusClass = "alert";
        recommendation = "This degree of weight loss requires evaluation. Contact your pediatrician today.";
    }
    
    // Special cases
    if (age >= 4 && percentLoss > 7) {
        status = "Not regaining weight - Needs evaluation";
        statusClass = "alert";
        recommendation = "By day 4, babies should stop losing weight. Please consult your pediatrician immediately.";
    }
    
    if (age === 0 && percentLoss > 5) {
        status = "Unusual day-1 loss - Verify weights";
        statusClass = "warning";
        recommendation = "First-day losses are typically minimal. Verify weights and feeding.";
    }
    
    // Map old statusClass to new status levels
    let statusLevel, statusColor, statusIcon;
    if (statusClass === 'normal') {
        statusLevel = 'status-good';
        statusColor = '#16a34a';
        statusIcon = '\u2705';
    } else if (statusClass === 'warning') {
        statusLevel = 'status-warning';
        statusColor = '#d97706';
        statusIcon = '\u26A0\uFE0F';
    } else {
        statusLevel = 'status-danger';
        statusColor = '#dc2626';
        statusIcon = '\uD83D\uDEA8';
    }

    // Display results
    const resultDiv = document.getElementById('result');
    resultDiv.style.display = 'block';

    // Hero section
    const sign = currentGrams > birthGrams ? '+' : '-';
    document.getElementById('pct-change').textContent = sign + percentLoss.toFixed(1) + '%';
    document.getElementById('weight-change-detail').textContent = currentGrams > birthGrams
        ? 'Gained ' + formatWeight(Math.abs(lossGrams), birthUnit) + ' above birth weight'
        : 'Lost ' + formatWeight(Math.abs(lossGrams), birthUnit) + ' from birth weight';

    const heroEl = document.getElementById('result-hero');
    heroEl.style.borderColor = statusColor;

    // Content loop
    if (typeof showNextSteps === 'function') showNextSteps('newborn-weight', collectUserData(), null, 'result');

    // Status banner
    const weightStatusEl = document.getElementById('weight-status');
    weightStatusEl.className = 'result-status ' + statusLevel;
    document.getElementById('status-icon').textContent = statusIcon;
    document.getElementById('status-text').textContent = status;

    // Gauge
    const pctLoss = currentGrams > birthGrams ? 0 : percentLoss;
    const gaugeWidth = Math.min(pctLoss / 12 * 100, 100);
    const gaugeFill = document.getElementById('gauge-fill');
    gaugeFill.style.width = gaugeWidth + '%';
    if (pctLoss <= 5) {
        gaugeFill.style.background = '#16a34a';
    } else if (pctLoss <= 7) {
        gaugeFill.style.background = '#fde68a';
    } else if (pctLoss <= 10) {
        gaugeFill.style.background = '#d97706';
    } else {
        gaugeFill.style.background = '#dc2626';
    }

    // Info cards
    document.getElementById('birth-wt-display').textContent = formatWeight(birthGrams, birthUnit);
    document.getElementById('current-wt-display').textContent = formatWeight(currentGrams, currentUnit);
    document.getElementById('age-display').textContent = age + (age === 1 ? ' day' : ' days');

    // Age note
    let ageNote;
    if (age <= 3) {
        ageNote = 'Day ' + age + ' \u2014 expected loss phase';
    } else if (age <= 5) {
        ageNote = 'Day ' + age + ' \u2014 should stabilize';
    } else if (age <= 10) {
        ageNote = 'Day ' + age + ' \u2014 should be gaining';
    } else {
        ageNote = 'Day ' + age + ' \u2014 approaching birth weight';
    }
    document.getElementById('age-note').textContent = ageNote;

    // Assessment details
    const feedingLabels = { breast: 'Exclusively Breastfed', formula: 'Exclusively Formula Fed', mixed: 'Mixed Feeding' };
    document.getElementById('feeding-display').textContent = feedingLabels[feedingMethod] || feedingMethod;

    const expectedRanges = { breast: '5\u201310%', formula: '5\u20137%', mixed: '5\u20138%' };
    document.getElementById('expected-range').textContent = expectedRanges[feedingMethod] || '5\u201310%';

    // Weight to regain
    if (currentGrams < birthGrams) {
        document.getElementById('weight-to-regain').textContent = formatWeight(lossGrams, birthUnit);
    } else {
        document.getElementById('weight-to-regain').textContent = 'None \u2014 at or above birth weight';
    }

    // Recommendation
    document.getElementById('recommendation').textContent = recommendation;
}

// Add event listener when page loads
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('calculate-btn').addEventListener('click', calculateWeightLoss);
});