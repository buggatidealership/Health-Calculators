function calculateBaldness() {
    // Get values from form
    const currentAge = parseInt(document.getElementById('age').value);
    const familyHistory = parseInt(document.getElementById('family-history').value);
    const currentHair = parseInt(document.getElementById('current-hair').value);
    const hairLossRate = parseInt(document.getElementById('hair-loss-rate').value);
    const stress = parseInt(document.getElementById('stress').value);
    const smoking = parseInt(document.getElementById('smoking').value);
    
    // Validate age
    if (currentAge < 16 || currentAge > 80 || isNaN(currentAge)) {
        alert("Please enter a valid age between 16 and 80");
        return;
    }
    
    // Calculate base risk score (0-100)
    let riskScore = 0;
    riskScore += familyHistory * 25;  // Up to 75
    riskScore += currentHair * 10;    // Up to 40
    riskScore += hairLossRate * 5;    // Up to 15
    riskScore += stress * 3;          // Up to 9
    riskScore += smoking * 4;         // Up to 12
    
    // Cap at 100
    riskScore = Math.min(riskScore, 100);
    
    // Calculate progression rate (years per Norwood stage)
    let progressionRate;
    if (riskScore < 30) {
        progressionRate = 10 + Math.random() * 10; // 10-20 years per stage
    } else if (riskScore < 60) {
        progressionRate = 5 + Math.random() * 5;   // 5-10 years per stage
    } else {
        progressionRate = 2 + Math.random() * 3;   // 2-5 years per stage
    }
    
    // Adjust for current hair status
    const stagesRemaining = 7 - currentHair;
    const yearsToSignificantBalding = stagesRemaining * progressionRate;
    const predictedAge = Math.round(currentAge + yearsToSignificantBalding);
    
    // Determine risk level
    let riskLevel, message, resultClass;
    
    if (riskScore <= 30) {
        riskLevel = "Low";
        message = `Based on your profile, you're unlikely to develop significant balding until late in life (if at all). Your hair is predicted to remain stable for many years.`;
        resultClass = "risk-low";
    } else if (riskScore <= 60) {
        riskLevel = "Moderate";
        message = `Your profile suggests moderate risk of balding. With your current trajectory, you may develop noticeable balding around age ${predictedAge}. Preventive measures could slow this progression.`;
        resultClass = "risk-moderate";
    } else {
        riskLevel = "High";
        message = `Your risk factors indicate a high likelihood of significant balding. Based on current progression, you may reach advanced balding (Norwood 5-7) by age ${predictedAge}. Consider consulting a dermatologist about treatment options.`;
        resultClass = "risk-high";
    }
    
    // Display result
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h3>Your Baldness Prediction</h3>
        <div class="progress-container">
            <div class="progress-bar" style="width: ${riskScore}%">${riskScore}% Risk Score</div>
        </div>
        <p><strong>Risk Level:</strong> ${riskLevel}</p>
        <p><strong>Predicted Age for Significant Balding:</strong> ${predictedAge}</p>
        <p><strong>Details:</strong> ${message}</p>
        <p><strong>Note:</strong> This prediction is based on statistical averages and your current progression rate. Lifestyle changes or medical treatments could alter this timeline.</p>
    `;
    resultDiv.className = "result " + resultClass;
    resultDiv.style.display = "block";
}

// Add event listener when page loads
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('calculate-btn').addEventListener('click', calculateBaldness);
});