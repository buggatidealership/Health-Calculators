// Steps to Calories Calculator — factory-compatible
(function() {
    var PACE_METS = { 'casual': 2.5, 'normal': 3.0, 'brisk': 3.5, 'power': 4.3, 'jogging': 7.0 };
    var STRIDE_PRESETS = { 'short': 2.2, 'average': 2.5, 'tall': 2.8, 'running': 3.5 };

    var btn = document.getElementById('calcBtn');
    if (btn) btn.addEventListener('click', calculate);

    function calculate() {
        var stepsEl = document.getElementById('steps');
        var weightEl = document.getElementById('weight');
        var weightUnitEl = document.getElementById('weightUnit');
        var paceEl = document.getElementById('pace');
        var strideEl = document.getElementById('stridePreset');
        if (!stepsEl || !weightEl) return;

        var steps = parseInt(stepsEl.value) || 0;
        var weight = parseFloat(weightEl.value) || 0;
        if (steps <= 0 || weight <= 0) return;

        var weightUnit = weightUnitEl ? weightUnitEl.value : 'lbs';
        var weightKg = weightUnit === 'lbs' ? weight * 0.453592 : weight;
        var weightLbs = weightUnit === 'lbs' ? weight : weight / 0.453592;

        var pace = paceEl ? paceEl.value : 'normal';
        var met = PACE_METS[pace] || 3.0;

        var strideFt = strideEl ? (STRIDE_PRESETS[strideEl.value] || 2.5) : 2.5;
        var distanceMiles = (steps * strideFt) / 5280;
        var distanceKm = distanceMiles * 1.60934;

        var stepsPerMin = pace === 'jogging' ? 160 : pace === 'power' ? 135 : pace === 'brisk' ? 120 : pace === 'normal' ? 110 : 95;
        var durationMin = steps / stepsPerMin;

        var calories = Math.round(met * weightKg * (durationMin / 60));
        var calPer1k = Math.round(calories / (steps / 1000));
        var calPerMile = distanceMiles > 0 ? Math.round(calories / distanceMiles) : 0;

        var hours = Math.floor(durationMin / 60);
        var mins = Math.round(durationMin % 60);
        var walkTimeStr = hours > 0 ? hours + 'h ' + mins + 'm' : mins + ' min';

        var rn = document.getElementById('resultNumber');
        if (rn) rn.textContent = calories;

        var rv = document.getElementById('resultVerdict');
        if (rv) rv.textContent = steps.toLocaleString() + ' steps = ' + calories + ' calories';

        var el;
        el = document.getElementById('calPer1k');
        if (el) el.textContent = calPer1k + ' cal';
        el = document.getElementById('distance');
        if (el) el.textContent = distanceMiles.toFixed(1) + ' mi (' + distanceKm.toFixed(1) + ' km)';
        el = document.getElementById('walkTime');
        if (el) el.textContent = walkTimeStr;
        el = document.getElementById('calPerMile');
        if (el) el.textContent = calPerMile + ' cal';
        el = document.getElementById('metUsed');
        if (el) el.textContent = met.toFixed(1);

        // Coach
        var coach = document.getElementById('coachCard');
        if (coach) {
            coach.innerHTML = '<div class="coach-text"><span class="hl">' + steps.toLocaleString() + ' steps</span> = <span class="hl">' + distanceMiles.toFixed(1) + ' miles</span> in <span class="hl">' + walkTimeStr + '</span>.<br>You burned <span class="hl">' + calories + ' calories</span> (<span class="hl">' + calPer1k + ' per 1,000 steps</span>).' +
                '<div class="coach-rule">' + calPerMile + ' calories per mile</div>' +
                '<div class="coach-advice"><em>10,000 steps/day</em> is a solid target for general health.<br>At your pace and weight, that is roughly <em>' + Math.round(calPer1k * 10) + ' calories/day</em>.</div></div>';
        }

        var shareText = steps.toLocaleString() + ' steps = ' + calories + ' cal\n' + distanceMiles.toFixed(1) + ' mi in ' + walkTimeStr + '\n' + calPer1k + ' cal per 1,000 steps\n\nTry it: healthcalculators.xyz/steps-to-calories-calculator';
        if (typeof updateShareButtons === 'function') updateShareButtons(shareText);

        if (typeof factoryReveal === 'function') factoryReveal();

        if (typeof hcTrackEvent === 'function') hcTrackEvent('calculator_complete', { calculator_name: 'Steps to Calories Calculator', page_path: '/steps-to-calories-calculator' });
    }
})();
