// Running Calorie Calculator — factory-compatible
(function() {
    var btn = document.getElementById('calcBtn');
    if (btn) btn.addEventListener('click', calculate);

    function paceToMET(paceMin) {
        if (paceMin <= 6) return 14.5;
        if (paceMin <= 7) return 11.8;
        if (paceMin <= 8) return 10.5;
        if (paceMin <= 9) return 9.8;
        if (paceMin <= 10) return 8.3;
        if (paceMin <= 11) return 7.5;
        if (paceMin <= 12) return 7.0;
        return 6.0;
    }

    function calculate() {
        var weightEl = document.getElementById('weight');
        var distanceEl = document.getElementById('distance');
        var paceEl = document.getElementById('paceMin');
        var terrainEl = document.getElementById('terrain');
        if (!weightEl || !distanceEl || !paceEl) return;

        var weightLbs = parseFloat(weightEl.value);
        var distance = parseFloat(distanceEl.value);
        var paceMin = parseFloat(paceEl.value);
        if (isNaN(weightLbs) || weightLbs <= 0 || isNaN(distance) || distance <= 0 || isNaN(paceMin) || paceMin <= 0) return;

        var terrainMult = terrainEl ? parseFloat(terrainEl.value) : 1.0;
        var weightKg = weightLbs * 0.453592;
        var met = paceToMET(paceMin) * terrainMult;
        var durationMin = distance * paceMin;
        var durationHrs = durationMin / 60;
        var calories = Math.round(met * weightKg * durationHrs);
        var calPerMile = Math.round(calories / distance);
        var calPerHour = Math.round(calories / durationHrs);
        var hours = Math.floor(durationMin / 60);
        var mins = Math.round(durationMin % 60);
        var durationStr = hours > 0 ? hours + 'h ' + mins + 'm' : mins + ' min';

        var rn = document.getElementById('resultNumber');
        if (rn) rn.textContent = calories;

        var rv = document.getElementById('resultVerdict');
        if (rv) rv.textContent = calories + ' calories over ' + distance + ' miles';

        var el;
        el = document.getElementById('calPerMile');
        if (el) el.textContent = calPerMile + ' cal';
        el = document.getElementById('calPerHour');
        if (el) el.textContent = calPerHour + ' cal';
        el = document.getElementById('duration');
        if (el) el.textContent = durationStr;
        el = document.getElementById('metVal');
        if (el) el.textContent = met.toFixed(1);

        // Coach
        var coach = document.getElementById('coachCard');
        if (coach) {
            coach.innerHTML = '<div class="coach-text"><span class="hl">' + distance + ' miles</span> at <span class="hl">' + paceMin + ' min/mile</span> burns <span class="hl">' + calories + ' calories</span>.<br>Duration: <span class="hl">' + durationStr + '</span>.' +
                '<div class="coach-rule">' + calPerMile + ' calories per mile</div>' +
                '<div class="coach-advice"><em>Running burns roughly 100 cal/mile</em> for a 155 lb person.<br>Your rate: <em>' + calPerMile + ' cal/mile</em> at ' + weightLbs + ' lbs.</div></div>';
        }

        var shareText = 'Running: ' + distance + ' mi at ' + paceMin + ' min/mile\n' + calories + ' cal (' + calPerMile + ' cal/mile)\nDuration: ' + durationStr + '\n\nTry it: healthcalculators.xyz/running-calorie-calculator';
        if (typeof updateShareButtons === 'function') updateShareButtons(shareText);

        if (typeof factoryReveal === 'function') factoryReveal();

        if (typeof hcTrackEvent === 'function') hcTrackEvent('calculator_complete', { calculator_name: 'Running Calorie Calculator', page_path: '/running-calorie-calculator' });
    }
})();
