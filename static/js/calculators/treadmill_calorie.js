// Treadmill Calorie Calculator — factory-compatible (ACSM metabolic equation)
(function() {
    var btn = document.getElementById('calcBtn');
    if (btn) btn.addEventListener('click', calculate);

    // Update incline label
    var inclineEl = document.getElementById('incline');
    if (inclineEl) {
        inclineEl.addEventListener('input', function() {
            var lbl = document.getElementById('inclineLabel');
            if (lbl) lbl.textContent = this.value + '%';
        });
    }

    function calculate() {
        var weightEl = document.getElementById('weight');
        var weightUnitEl = document.getElementById('weightUnit');
        var speedEl = document.getElementById('speed');
        var speedUnitEl = document.getElementById('speedUnit');
        var incEl = document.getElementById('incline');
        var durEl = document.getElementById('duration');
        if (!weightEl || !speedEl || !durEl) return;

        var weight = parseFloat(weightEl.value);
        var speed = parseFloat(speedEl.value);
        var incline = incEl ? parseFloat(incEl.value) : 0;
        var duration = parseFloat(durEl.value);
        if (isNaN(weight) || weight <= 0 || isNaN(speed) || speed <= 0 || isNaN(duration) || duration <= 0) return;

        var weightUnit = weightUnitEl ? weightUnitEl.value : 'lbs';
        var speedUnit = speedUnitEl ? speedUnitEl.value : 'mph';
        var weightKg = weightUnit === 'lbs' ? weight * 0.453592 : weight;
        var speedMph = speedUnit === 'kmh' ? speed / 1.60934 : speed;
        var speedMpm = speedMph * 26.8224; // meters per minute
        var grade = incline / 100;

        // ACSM metabolic equation
        var vo2;
        var isWalking = speedMph < 4.0;
        if (isWalking) {
            vo2 = 3.5 + (0.1 * speedMpm) + (1.8 * speedMpm * grade);
        } else {
            vo2 = 3.5 + (0.2 * speedMpm) + (0.9 * speedMpm * grade);
        }

        var met = vo2 / 3.5;
        var calories = Math.round(met * weightKg * (duration / 60));
        var calPerMin = (calories / duration).toFixed(1);
        var fatBurned = (calories / 7700 * 1000).toFixed(0); // grams

        var rn = document.getElementById('resultNumber');
        if (rn) rn.textContent = calories;

        var rv = document.getElementById('resultVerdict');
        if (rv) rv.textContent = calories + ' calories in ' + duration + ' minutes';

        var el;
        el = document.getElementById('actType');
        if (el) el.textContent = isWalking ? 'Walking' : 'Running';
        el = document.getElementById('calPerMin');
        if (el) el.textContent = calPerMin + ' cal/min';
        el = document.getElementById('fatBurned');
        if (el) el.textContent = fatBurned + 'g';
        el = document.getElementById('metVal');
        if (el) el.textContent = met.toFixed(1);
        el = document.getElementById('vo2Val');
        if (el) el.textContent = vo2.toFixed(1);

        // Coach
        var coach = document.getElementById('coachCard');
        if (coach) {
            coach.innerHTML = '<div class="coach-text"><span class="hl">' + speedMph.toFixed(1) + ' mph</span> at <span class="hl">' + incline + '% incline</span> for <span class="hl">' + duration + ' min</span> = <span class="hl">' + calories + ' calories</span>.<br>' +
                (isWalking ? 'Walking' : 'Running') + ' at <span class="hl">' + calPerMin + ' cal/min</span>.' +
                '<div class="coach-rule">ACSM metabolic equation</div>' +
                '<div class="coach-advice">' +
                (incline < 3 ? '<em>Adding 5% incline</em> increases calorie burn by ~40% at walking speeds.' : '<em>Great incline work.</em> Incline walking at 3+ mph is one of the most efficient cardio strategies.') +
                '</div></div>';
        }

        var shareText = 'Treadmill: ' + calories + ' cal in ' + duration + ' min\n' + speedMph.toFixed(1) + ' mph at ' + incline + '% incline\n' + calPerMin + ' cal/min (MET ' + met.toFixed(1) + ')\n\nTry it: healthcalculators.xyz/treadmill-calorie-calculator';
        if (typeof updateShareButtons === 'function') updateShareButtons(shareText);

        if (typeof factoryReveal === 'function') factoryReveal();

        if (typeof hcTrackEvent === 'function') hcTrackEvent('calculator_complete', { calculator_name: 'Treadmill Calorie Calculator', page_path: '/treadmill-calorie-calculator' });
    }
})();
