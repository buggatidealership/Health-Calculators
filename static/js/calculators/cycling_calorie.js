// Cycling Calorie Calculator — factory-compatible
(function() {
    var MET_VALUES = {
        'leisure_10': 4.0, 'light_12': 6.8, 'moderate_14': 8.0, 'vigorous_16': 10.0,
        'racing_18': 12.0, 'racing_20': 15.8, 'mountain': 8.5, 'bmx': 8.5,
        'stationary_light': 3.5, 'stationary_moderate': 6.8, 'stationary_vigorous': 8.8,
        'stationary_very_vigorous': 11.0, 'spin_class': 8.5, 'commute': 6.0
    };

    var btn = document.getElementById('calcBtn');
    if (btn) btn.addEventListener('click', calculate);

    function calculate() {
        var weightEl = document.getElementById('weight');
        var weightUnitEl = document.getElementById('weightUnit');
        var durationEl = document.getElementById('duration');
        var typeEl = document.getElementById('cyclingType');
        if (!weightEl || !durationEl || !typeEl) return;

        var weight = parseFloat(weightEl.value);
        var duration = parseFloat(durationEl.value);
        var cyclingType = typeEl.value;
        if (isNaN(weight) || weight <= 0 || isNaN(duration) || duration <= 0) return;

        var weightUnit = weightUnitEl ? weightUnitEl.value : 'lbs';
        var weightKg = weightUnit === 'lbs' ? weight * 0.453592 : weight;
        var met = MET_VALUES[cyclingType] || 6.8;
        var calories = Math.round(met * weightKg * (duration / 60));
        var calPerMin = (calories / duration).toFixed(1);
        var calPerHour = Math.round(calories / (duration / 60));
        var fatGrams = Math.round(calories / 7.7);
        var typeName = typeEl.options[typeEl.selectedIndex].text;

        var rn = document.getElementById('resultNumber');
        if (rn) rn.textContent = calories;

        var rv = document.getElementById('resultVerdict');
        if (rv) rv.textContent = calories + ' calories in ' + duration + ' minutes';

        var el;
        el = document.getElementById('calPerMin');
        if (el) el.textContent = calPerMin + ' cal/min';
        el = document.getElementById('calPerHour');
        if (el) el.textContent = calPerHour + ' cal/hr';
        el = document.getElementById('fatBurned');
        if (el) el.textContent = fatGrams + 'g';
        el = document.getElementById('metVal');
        if (el) el.textContent = met.toFixed(1);

        // Coach
        var coach = document.getElementById('coachCard');
        if (coach) {
            coach.innerHTML = '<div class="coach-text"><span class="hl">' + typeName + '</span> for <span class="hl">' + duration + ' minutes</span> burns <span class="hl">' + calories + ' calories</span>.<br>That is <span class="hl">' + calPerMin + ' cal/min</span> or <span class="hl">' + calPerHour + ' cal/hr</span>.' +
                '<div class="coach-rule">MET ' + met.toFixed(1) + '</div>' +
                '<div class="coach-advice"><em>Cycling is excellent low-impact cardio.</em><br>Increasing intensity by one level adds roughly 30-50% more calorie burn.</div></div>';
        }

        var shareText = typeName + ': ' + calories + ' cal in ' + duration + ' min\n' + calPerHour + ' cal/hr (MET ' + met.toFixed(1) + ')\n\nTry it: healthcalculators.xyz/cycling-calorie-calculator';
        if (typeof updateShareButtons === 'function') updateShareButtons(shareText);

        if (typeof factoryReveal === 'function') factoryReveal();

        if (typeof hcTrackEvent === 'function') hcTrackEvent('calculator_complete', { calculator_name: 'Cycling Calorie Calculator', page_path: '/cycling-calorie-calculator' });
    }
})();
