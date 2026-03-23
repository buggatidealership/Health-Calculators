// Diabetes Risk Calculator — factory-compatible
(function() {
    var btn = document.getElementById('calcBtn');
    if (btn) btn.addEventListener('click', calculate);

    // Toggle BMI input method
    var bmiMethodEl = document.getElementById('bmiMethod');
    if (bmiMethodEl) {
        bmiMethodEl.addEventListener('change', function() {
            var directGroup = document.getElementById('bmiDirectGroup');
            var calcGroup = document.getElementById('bmiCalcGroup');
            if (this.value === 'direct') {
                if (directGroup) directGroup.style.display = '';
                if (calcGroup) calcGroup.style.display = 'none';
            } else {
                if (directGroup) directGroup.style.display = 'none';
                if (calcGroup) calcGroup.style.display = '';
            }
        });
    }

    // Toggle a1c/glucose inputs
    var a1cKnownEl = document.getElementById('a1cKnown');
    if (a1cKnownEl) {
        a1cKnownEl.addEventListener('change', function() {
            var a1cG = document.getElementById('a1cInputGroup');
            var glucG = document.getElementById('glucoseInputGroup');
            if (a1cG) a1cG.style.display = this.value === 'a1c' ? '' : 'none';
            if (glucG) glucG.style.display = this.value === 'glucose' ? '' : 'none';
        });
    }

    function calculate() {
        var ageScore = parseInt((document.getElementById('ageGroup') || {}).value) || 0;
        var sex = (document.getElementById('sex') || {}).value || 'male';
        var familyScore = parseInt((document.getElementById('familyHistory') || {}).value) || 0;
        var activityScore = parseInt((document.getElementById('activity') || {}).value) || 0;
        var bpScore = parseInt((document.getElementById('bloodPressure') || {}).value) || 0;
        var ethScore = parseInt((document.getElementById('ethnicity') || {}).value) || 0;
        var gestScore = parseInt((document.getElementById('gestational') || {}).value) || 0;

        // Calculate BMI
        var bmi;
        var bmiMethodEl2 = document.getElementById('bmiMethod');
        if (bmiMethodEl2 && bmiMethodEl2.value === 'direct') {
            bmi = parseFloat((document.getElementById('bmiDirect') || {}).value) || 0;
        } else {
            var weightEl = document.getElementById('weight');
            var ftEl = document.getElementById('heightFt');
            var inEl = document.getElementById('heightIn');
            if (!weightEl) return;
            var w = parseFloat(weightEl.value) || 0;
            var ft = parseInt(ftEl ? ftEl.value : '5') || 5;
            var inc = parseInt(inEl ? inEl.value : '0') || 0;
            var totalIn = ft * 12 + inc;
            if (totalIn <= 0 || w <= 0) return;
            bmi = (w / (totalIn * totalIn)) * 703;
        }

        // BMI score
        var bmiScore = 0;
        if (bmi >= 25 && bmi < 30) bmiScore = 1;
        else if (bmi >= 30 && bmi < 35) bmiScore = 2;
        else if (bmi >= 35) bmiScore = 3;

        var totalScore = ageScore + bmiScore + familyScore + activityScore + bpScore + ethScore + gestScore;
        totalScore = Math.min(totalScore, 15);

        var riskLevel, riskColor;
        if (totalScore <= 3) { riskLevel = 'Low Risk'; riskColor = 'var(--good)'; }
        else if (totalScore <= 6) { riskLevel = 'Moderate Risk'; riskColor = 'var(--caution)'; }
        else if (totalScore <= 10) { riskLevel = 'High Risk'; riskColor = 'var(--bad)'; }
        else { riskLevel = 'Very High Risk'; riskColor = 'var(--bad)'; }

        var rn = document.getElementById('resultNumber');
        if (rn) rn.textContent = totalScore + '/15';

        var rv = document.getElementById('resultVerdict');
        if (rv) { rv.textContent = riskLevel; rv.style.color = riskColor; }

        var el;
        el = document.getElementById('bmiDisplay');
        if (el) el.textContent = bmi.toFixed(1);

        el = document.getElementById('riskFactors');
        if (el) {
            var factors = [];
            if (ageScore > 0) factors.push('Age');
            if (bmiScore > 0) factors.push('BMI (' + bmi.toFixed(1) + ')');
            if (familyScore > 0) factors.push('Family history');
            if (activityScore > 0) factors.push('Low activity');
            if (bpScore > 0) factors.push('Blood pressure');
            if (ethScore > 0) factors.push('Ethnicity');
            if (gestScore > 0) factors.push('Gestational diabetes');
            el.textContent = factors.length > 0 ? factors.join(', ') : 'None identified';
        }

        // Coach
        var coach = document.getElementById('coachCard');
        if (coach) {
            coach.innerHTML = '<div class="coach-text">Your diabetes risk score is <span class="hl">' + totalScore + ' out of 15</span>.<br>' +
                'BMI: <span class="hl">' + bmi.toFixed(1) + '</span>.' +
                '<div class="coach-rule">' + riskLevel + '</div>' +
                '<div class="coach-advice">' +
                (totalScore <= 3 ? '<em>Low risk.</em> Maintain a healthy weight and stay active.<br>Screen every 3 years after age 35.' :
                 totalScore <= 6 ? '<em>Moderate risk.</em> The DPP trial showed 5-7% weight loss + 150 min/week exercise reduces risk by 58%.<br>Consider A1C screening.' :
                 '<em>High risk.</em> Get laboratory testing (A1C, fasting glucose).<br><em>Lifestyle changes</em> can still make a significant difference. Talk to your doctor.') +
                '</div></div>';
        }

        var shareText = 'Diabetes Risk Score: ' + totalScore + '/15 (' + riskLevel + ')\nBMI: ' + bmi.toFixed(1) + '\n\nCheck yours: healthcalculators.xyz/diabetes-risk-calculator';
        if (typeof updateShareButtons === 'function') updateShareButtons(shareText);

        if (typeof factoryReveal === 'function') factoryReveal();

        if (typeof hcTrackEvent === 'function') hcTrackEvent('calculator_complete', { calculator_name: 'Diabetes Risk Calculator', page_path: '/diabetes-risk-calculator' });
    }
})();
