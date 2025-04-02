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
    
    // Display results
    const resultDiv = document.getElementById('result');
    resultDiv.className = `result ${statusClass}`;
    resultDiv.style.display = 'block';
    
    document.getElementById('result-text').innerHTML = `
        <strong>Birth Weight:</strong> ${formatWeight(birthGrams, birthUnit)}<br>
        <strong>Current Weight:</strong> ${formatWeight(currentGrams, birthUnit)}<br>
        <strong>Weight Change:</strong> ${currentGrams > birthGrams ? '+' : '-'}${formatWeight(Math.abs(lossGrams), birthUnit)}<br>
        <strong>Percentage Change:</strong> ${currentGrams > birthGrams ? '+' : '-'}${percentLoss.toFixed(1)}%<br>
        <strong>Status:</strong> ${status}
    `;
    
    document.getElementById('recommendation').innerHTML = `<strong>Recommendation:</strong> ${recommendation}`;
}

// Add event listener when page loads
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('calculate-btn').addEventListener('click', calculateWeightLoss);
});