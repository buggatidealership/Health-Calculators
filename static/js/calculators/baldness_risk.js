// Baldness Risk Calculator — factory-compatible
(function() {
    var btn = document.getElementById('calcBtn');
    if (btn) btn.addEventListener('click', calculate);

    function calculate() {
        var ageEl = document.getElementById('age');
        var familyEl = document.getElementById('family-history');
        var currentEl = document.getElementById('current-hair');
        var rateEl = document.getElementById('hair-loss-rate');
        var stressEl = document.getElementById('stress');
        var smokingEl = document.getElementById('smoking');
        if (!ageEl || !familyEl || !currentEl || !rateEl || !stressEl || !smokingEl) return;

        var currentAge = parseInt(ageEl.value);
        var familyHistory = parseInt(familyEl.value);
        var currentHair = parseInt(currentEl.value);
        var hairLossRate = parseInt(rateEl.value);
        var stress = parseInt(stressEl.value);
        var smoking = parseInt(smokingEl.value);

        if (isNaN(currentAge) || currentAge < 16 || currentAge > 80) return;

        var riskScore = 0;
        riskScore += familyHistory * 25;
        riskScore += currentHair * 10;
        riskScore += hairLossRate * 5;
        riskScore += stress * 3;
        riskScore += smoking * 4;
        riskScore = Math.min(riskScore, 100);

        var progressionRate;
        if (riskScore < 30) progressionRate = 15;
        else if (riskScore < 60) progressionRate = 7.5;
        else progressionRate = 3.5;

        var stagesRemaining = 7 - currentHair;
        var yearsToBalding = stagesRemaining * progressionRate;
        var predictedAge = Math.round(currentAge + yearsToBalding);
        var yearsLeft = predictedAge - currentAge;

        var riskLevel, verdict;
        if (riskScore <= 30) {
            riskLevel = 'Low';
            verdict = 'Low risk — your hair is likely stable for years';
        } else if (riskScore <= 60) {
            riskLevel = 'Moderate';
            verdict = 'Moderate risk — preventive measures could help';
        } else {
            riskLevel = 'High';
            verdict = 'High risk — consider consulting a dermatologist';
        }

        var norwoodLabels = {0: 'NW1', 1: 'NW2', 2: 'NW3', 3: 'NW4', 4: 'NW5+'};

        var rn = document.getElementById('resultNumber');
        if (rn) rn.textContent = riskScore + '%';

        var rv = document.getElementById('resultVerdict');
        if (rv) {
            rv.textContent = verdict;
            rv.style.color = riskScore <= 30 ? 'var(--good)' : riskScore <= 60 ? 'var(--caution)' : 'var(--bad)';
        }

        var pa = document.getElementById('predictedAge');
        if (pa) pa.textContent = predictedAge > 85 ? '85+' : predictedAge;

        var yl = document.getElementById('yearsLeft');
        if (yl) yl.textContent = yearsLeft > 25 ? '25+ years' : yearsLeft + ' years';

        var ns = document.getElementById('norwoodStage');
        if (ns) ns.textContent = norwoodLabels[currentHair] || '--';

        // Coach
        var coach = document.getElementById('coachCard');
        if (coach) {
            coach.innerHTML = '<div class="coach-text">You are <span class="hl">' + currentAge + ' years old</span> with a risk score of <span class="hl">' + riskScore + '/100</span>.<br>' +
                'Current stage: <span class="hl">' + (norwoodLabels[currentHair] || 'Unknown') + '</span>.<br>' +
                'Predicted significant hair loss around age <span class="hl">' + (predictedAge > 85 ? '85+' : predictedAge) + '</span>.' +
                '<div class="coach-rule">Risk level: ' + riskLevel + '</div>' +
                '<div class="coach-advice">' + (riskScore > 60 ? '<em>Finasteride + minoxidil</em> is the most evidence-backed combination for slowing hair loss.<br>See a dermatologist for personalized treatment.' : riskScore > 30 ? '<em>Monitor your hairline</em> every 6 months.<br>Minoxidil can help maintain what you have.' : '<em>No urgent action needed.</em><br>Revisit if you notice changes.') + '</div></div>';
        }

        var shareText = 'Baldness risk: ' + riskScore + '/100 (' + riskLevel + ')\nCurrent: ' + (norwoodLabels[currentHair] || '--') + '\nPredicted hair loss age: ' + (predictedAge > 85 ? '85+' : predictedAge) + '\n\nCheck yours: healthcalculators.xyz/baldness-risk-calculator';
        if (typeof updateShareButtons === 'function') updateShareButtons(shareText);

        if (typeof factoryReveal === 'function') factoryReveal();

        if (typeof hcTrackEvent === 'function') hcTrackEvent('calculator_complete', { calculator_name: 'Baldness Risk Calculator', page_path: '/baldness-risk-calculator' });
    }
})();
