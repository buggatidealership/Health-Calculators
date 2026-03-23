// Bulking Calorie Calculator — factory-compatible
(function() {
    var btn = document.getElementById('calcBtn');
    if (btn) btn.addEventListener('click', calculate);

    function calculate() {
        var weightEl = document.getElementById('weight');
        var weightUnitEl = document.getElementById('weightUnit');
        var heightFtEl = document.getElementById('heightFt');
        var heightInEl = document.getElementById('heightIn');
        var ageEl = document.getElementById('age');
        var sexEl = document.getElementById('sex');
        var activityEl = document.getElementById('activity');
        var surplusEl = document.getElementById('surplus');
        if (!weightEl || !ageEl || !sexEl || !activityEl) return;

        var weight = parseFloat(weightEl.value);
        var age = parseInt(ageEl.value);
        var sex = sexEl.value;
        if (isNaN(weight) || weight <= 0 || isNaN(age) || age < 15) return;

        var weightUnit = weightUnitEl ? weightUnitEl.value : 'lbs';
        var weightKg = weightUnit === 'lbs' ? weight * 0.453592 : weight;
        var weightLbs = weightUnit === 'lbs' ? weight : weight / 0.453592;

        var ft = parseFloat(heightFtEl ? heightFtEl.value : '5') || 5;
        var inc = parseFloat(heightInEl ? heightInEl.value : '10') || 0;
        var heightCm = (ft * 12 + inc) * 2.54;

        // Mifflin-St Jeor BMR
        var bmr;
        if (sex === 'male') {
            bmr = 10 * weightKg + 6.25 * heightCm - 5 * age + 5;
        } else {
            bmr = 10 * weightKg + 6.25 * heightCm - 5 * age - 161;
        }

        var activityFactor = parseFloat(activityEl.value) || 1.55;
        var tdee = Math.round(bmr * activityFactor);

        var surplusCal = surplusEl ? parseInt(surplusEl.value) || 300 : 300;
        var bulkCal = tdee + surplusCal;

        var weeklyGainLbs = (surplusCal * 7 / 3500).toFixed(2);
        var monthlyGainLbs = (surplusCal * 30 / 3500).toFixed(1);

        var rn = document.getElementById('resultNumber');
        if (rn) rn.textContent = bulkCal;

        var rv = document.getElementById('resultVerdict');
        if (rv) rv.textContent = 'daily calories for lean bulking';

        var el;
        el = document.getElementById('bmrDisplay');
        if (el) el.textContent = Math.round(bmr) + ' kcal';
        el = document.getElementById('tdeeDisplay');
        if (el) el.textContent = tdee + ' kcal';
        el = document.getElementById('surplusDisplay');
        if (el) el.textContent = '+' + surplusCal + ' kcal';
        el = document.getElementById('weeklyGain');
        if (el) el.textContent = weeklyGainLbs + ' lbs/week';
        el = document.getElementById('monthlyGain');
        if (el) el.textContent = monthlyGainLbs + ' lbs/month';

        // Coach
        var coach = document.getElementById('coachCard');
        if (coach) {
            coach.innerHTML = '<div class="coach-text">Maintenance: <span class="hl">' + tdee + ' kcal/day</span>.<br>Bulking target: <span class="hl">' + bulkCal + ' kcal/day</span> (+' + surplusCal + ' surplus).<br>Expected gain: <span class="hl">' + weeklyGainLbs + ' lbs/week</span>.' +
                '<div class="coach-rule">Lean bulk = controlled surplus</div>' +
                '<div class="coach-advice"><em>Aim for 0.25-0.5 lbs/week</em> to minimize fat gain.<br><em>Hit 1g protein per pound</em> (' + Math.round(weightLbs) + 'g) to maximize muscle growth.<br>If gaining faster than 0.5 lbs/week, reduce surplus.</div></div>';
        }

        var shareText = 'Bulking calories: ' + bulkCal + ' kcal/day\nTDEE: ' + tdee + ' + ' + surplusCal + ' surplus\nExpected: ' + weeklyGainLbs + ' lbs/week\n\nTry it: healthcalculators.xyz/bulking-calorie-calculator';
        if (typeof updateShareButtons === 'function') updateShareButtons(shareText);

        if (typeof factoryReveal === 'function') factoryReveal();

        if (typeof hcTrackEvent === 'function') hcTrackEvent('calculator_complete', { calculator_name: 'Bulking Calorie Calculator', page_path: '/bulking-calorie-calculator' });
    }
})();
