// Ozempic Face Risk Calculator — factory-compatible
(function() {
    var currentUnits = 'metric';

    // Unit toggle via factory radio_row
    var unitRow = document.querySelector('[data-group="units"]');
    if (unitRow) {
        unitRow.querySelectorAll('.unit-btn').forEach(function(btn) {
            btn.addEventListener('click', function() {
                unitRow.querySelectorAll('.unit-btn').forEach(function(b) { b.classList.remove('active'); });
                this.classList.add('active');
                currentUnits = this.dataset.value;
                toggleUnitFields();
            });
        });
    }

    function toggleUnitFields() {
        var weightKgEl = document.getElementById('weight-kg');
        var weightLbEl = document.getElementById('weight-lb');
        var heightCmEl = document.getElementById('height-cm');
        var heightFtEl = document.getElementById('height-ft');

        if (currentUnits === 'metric') {
            if (weightKgEl) weightKgEl.closest('.form-group').style.display = '';
            if (weightLbEl) weightLbEl.closest('.form-group').style.display = 'none';
            if (heightCmEl) heightCmEl.closest('.form-group').style.display = '';
            if (heightFtEl) heightFtEl.closest('.form-row').style.display = 'none';
        } else {
            if (weightKgEl) weightKgEl.closest('.form-group').style.display = 'none';
            if (weightLbEl) weightLbEl.closest('.form-group').style.display = '';
            if (heightCmEl) heightCmEl.closest('.form-group').style.display = 'none';
            if (heightFtEl) heightFtEl.closest('.form-row').style.display = '';
        }
    }

    toggleUnitFields();

    function getWeightKg() {
        if (currentUnits === 'metric') {
            var el = document.getElementById('weight-kg');
            return el ? parseFloat(el.value) : NaN;
        } else {
            var el = document.getElementById('weight-lb');
            var lb = el ? parseFloat(el.value) : NaN;
            return lb ? lb / 2.20462 : NaN;
        }
    }

    function getHeightM() {
        if (currentUnits === 'metric') {
            var el = document.getElementById('height-cm');
            var cm = el ? parseFloat(el.value) : NaN;
            return cm ? cm / 100 : NaN;
        } else {
            var ftEl = document.getElementById('height-ft');
            var inEl = document.getElementById('height-in');
            var ft = ftEl ? parseFloat(ftEl.value) || 0 : 0;
            var inches = inEl ? parseFloat(inEl.value) || 0 : 0;
            return (ft * 12 + inches) * 0.0254;
        }
    }

    var btn = document.getElementById('calcBtn');
    if (btn) btn.addEventListener('click', function() {
        var ageEl = document.getElementById('age');
        var targetLossEl = document.getElementById('target-loss');
        var timelineEl = document.getElementById('timeline');
        var facialFatEl = document.getElementById('facial-fat');
        var smokingEl = document.getElementById('smoking');
        var weightFluxEl = document.getElementById('weight-flux');

        if (!ageEl || !targetLossEl || !timelineEl || !facialFatEl || !smokingEl || !weightFluxEl) return;

        var age = parseInt(ageEl.value);
        var weightKg = getWeightKg();
        var heightM = getHeightM();
        var targetLossPct = parseInt(targetLossEl.value);
        var timelineMonths = parseInt(timelineEl.value);
        var facialFat = facialFatEl.value;
        var smoking = smokingEl.value;
        var weightFlux = weightFluxEl.value;

        // Validation
        if (!age || age < 18 || age > 100) { alert('Please enter a valid age (18-100).'); return; }
        if (!weightKg || weightKg < 30) { alert('Please enter a valid weight.'); return; }
        if (!heightM || heightM < 1.0) { alert('Please enter a valid height.'); return; }

        var bmi = weightKg / (heightM * heightM);

        // 1. Age risk (0-30 points)
        var ageRisk = 0, ageLabel = '';
        if (age < 30) { ageRisk = 5; ageLabel = 'Low'; }
        else if (age < 40) { ageRisk = 12; ageLabel = 'Moderate'; }
        else if (age < 50) { ageRisk = 22; ageLabel = 'Elevated'; }
        else { ageRisk = 30; ageLabel = 'High'; }

        // 2. Weight loss speed risk (0-30 points)
        var totalWeeks = timelineMonths * 4.33;
        var weeklyLossPct = targetLossPct / totalWeeks;
        var speedRisk = 0, speedLabel = '';
        if (weeklyLossPct > 1.0) { speedRisk = 30; speedLabel = 'Very Fast (>' + weeklyLossPct.toFixed(2) + '%/week)'; }
        else if (weeklyLossPct > 0.5) { speedRisk = 18; speedLabel = 'Fast (' + weeklyLossPct.toFixed(2) + '%/week)'; }
        else if (weeklyLossPct > 0.25) { speedRisk = 8; speedLabel = 'Moderate (' + weeklyLossPct.toFixed(2) + '%/week)'; }
        else { speedRisk = 3; speedLabel = 'Gradual (' + weeklyLossPct.toFixed(2) + '%/week)'; }

        // 3. BMI modifier (0-15 points)
        var bmiRisk = 0, bmiLabel = '';
        if (bmi >= 40) { bmiRisk = 15; bmiLabel = 'BMI ' + bmi.toFixed(1) + ' \u2014 significant facial fat reserves'; }
        else if (bmi >= 35) { bmiRisk = 12; bmiLabel = 'BMI ' + bmi.toFixed(1) + ' \u2014 above-average facial fat'; }
        else if (bmi >= 30) { bmiRisk = 8; bmiLabel = 'BMI ' + bmi.toFixed(1) + ' \u2014 moderate facial fat'; }
        else if (bmi >= 25) { bmiRisk = 5; bmiLabel = 'BMI ' + bmi.toFixed(1) + ' \u2014 some facial padding'; }
        else { bmiRisk = 3; bmiLabel = 'BMI ' + bmi.toFixed(1) + ' \u2014 limited facial fat buffer'; }

        // 4. Facial fat baseline (0-10 points)
        var facialRisk = 0, facialLabel = '';
        switch (facialFat) {
            case 'minimal': facialRisk = 10; facialLabel = 'Minimal \u2014 very little buffer before hollowing'; break;
            case 'average': facialRisk = 6; facialLabel = 'Average \u2014 moderate buffer'; break;
            case 'above': facialRisk = 3; facialLabel = 'Above Average \u2014 good cushion'; break;
            case 'full': facialRisk = 1; facialLabel = 'Full/Round \u2014 substantial buffer'; break;
        }

        // 5. Smoking modifier (0-8 points)
        var smokingRisk = 0, smokingLabel = '';
        if (smoking === 'yes') { smokingRisk = 8; smokingLabel = 'Smoker \u2014 accelerated collagen breakdown'; }
        else { smokingRisk = 0; smokingLabel = 'Non-smoker'; }

        // 6. Weight fluctuation history (0-7 points)
        var fluxRisk = 0, fluxLabel = '';
        if (weightFlux === 'yes') { fluxRisk = 7; fluxLabel = 'History of fluctuations \u2014 reduced skin elasticity'; }
        else { fluxRisk = 0; fluxLabel = 'Stable weight history'; }

        // Total score (0-100)
        var totalScore = ageRisk + speedRisk + bmiRisk + facialRisk + smokingRisk + fluxRisk;
        totalScore = Math.min(100, Math.max(0, totalScore));

        // Risk category
        var riskCategory = '', riskColor = '';
        if (totalScore <= 25) { riskCategory = 'Low'; riskColor = '#16a34a'; }
        else if (totalScore <= 50) { riskCategory = 'Moderate'; riskColor = '#d97706'; }
        else if (totalScore <= 75) { riskCategory = 'High'; riskColor = '#dc2626'; }
        else { riskCategory = 'Very High'; riskColor = '#991b1b'; }

        // Render results
        var resultNum = document.getElementById('resultNumber');
        var resultVerdict = document.getElementById('resultVerdict');
        if (resultNum) resultNum.textContent = totalScore + '/100';
        if (resultVerdict) {
            resultVerdict.textContent = riskCategory + ' Risk';
            resultVerdict.style.color = riskColor;
        }

        // Breakdown cards
        var dAge = document.getElementById('dAge');
        var dBmi = document.getElementById('dBmi');
        var dLoss = document.getElementById('dLoss');
        var dRate = document.getElementById('dRate');
        if (dAge) dAge.textContent = age + ' years';
        if (dBmi) dBmi.textContent = bmi.toFixed(1);
        if (dLoss) dLoss.textContent = targetLossPct + '% in ' + timelineMonths + ' mo';
        if (dRate) dRate.textContent = weeklyLossPct.toFixed(2) + '%/wk';

        // Coach card — risk factor breakdown + recommendations
        var coachCard = document.getElementById('coachCard');
        if (coachCard) {
            var factors = [
                { label: 'Age (' + age + ')', score: ageRisk, max: 30, detail: ageLabel },
                { label: 'Weight Loss Speed', score: speedRisk, max: 30, detail: speedLabel },
                { label: 'BMI Impact', score: bmiRisk, max: 15, detail: bmiLabel },
                { label: 'Facial Fat Baseline', score: facialRisk, max: 10, detail: facialLabel },
                { label: 'Smoking', score: smokingRisk, max: 8, detail: smokingLabel },
                { label: 'Weight Fluctuation', score: fluxRisk, max: 7, detail: fluxLabel }
            ];

            var html = '<div class="coach-text">';
            html += '<span class="hl">' + totalScore + '/100</span> ' + riskCategory + ' Risk';
            html += '<div class="coach-rule">Risk Factor Breakdown</div>';

            factors.forEach(function(f) {
                var pct = Math.round((f.score / f.max) * 100);
                var barColor = pct <= 33 ? '#16a34a' : (pct <= 66 ? '#d97706' : '#dc2626');
                html += '<div style="margin-bottom:12px;">';
                html += '<div style="display:flex;justify-content:space-between;font-size:0.88rem;margin-bottom:3px;">';
                html += '<span style="font-weight:600;">' + f.label + '</span>';
                html += '<span style="color:#6b7280;">' + f.score + '/' + f.max + '</span></div>';
                html += '<div style="height:6px;background:#e5e7eb;border-radius:3px;overflow:hidden;">';
                html += '<div style="height:100%;width:' + pct + '%;background:' + barColor + ';border-radius:3px;"></div></div>';
                html += '<div style="font-size:0.78rem;color:#6b7280;margin-top:2px;">' + f.detail + '</div>';
                html += '</div>';
            });

            // Recommendations
            html += '<div class="coach-rule">Personalized Recommendations</div>';
            if (weeklyLossPct > 0.5) {
                html += '<div class="coach-advice">Slow your rate of weight loss. Aim for less than 0.5% body weight per week.</div>';
            }
            if (age >= 40) {
                html += '<div class="coach-advice">Prioritize collagen-supporting skincare (retinoids, vitamin C serums).</div>';
            }
            html += '<div class="coach-advice">Facial exercises: 30 min daily can improve cheek fullness (Northwestern, 2018).</div>';
            if (totalScore > 50) {
                html += '<div class="coach-advice">Consider preventive dermal fillers. Consult a board-certified dermatologist.</div>';
            }
            html += '<div class="coach-advice">Maintain protein intake of 1.2-1.6g/kg daily. Use SPF 30+ daily.</div>';
            html += '</div>';

            coachCard.innerHTML = html;
        }

        var shareText = 'My Ozempic Face Risk Score: ' + totalScore + '/100 (' + riskCategory + ' Risk)\n\nCalculate yours: healthcalculators.xyz/ozempic-face-calculator';
        if (typeof updateShareButtons === 'function') updateShareButtons(shareText);

        if (typeof factoryReveal === 'function') factoryReveal();

        if (typeof hcTrackEvent === 'function') hcTrackEvent('calculator_complete', {calculator_name: 'Ozempic Face Risk Calculator', page_path: '/ozempic-face-calculator'});
    });
})();
