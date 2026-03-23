// Calories Burned Calculator — factory-compatible
(function() {
    var MET_VALUES = {
        'jogging': 7.0, 'running_6mph': 9.8, 'running_8mph': 11.8, 'sprinting': 23.0,
        'walking_casual': 2.5, 'walking_brisk': 3.5, 'hiking': 6.0,
        'cycling_casual': 4.0, 'cycling_moderate': 6.8, 'cycling_vigorous': 10.0,
        'swimming_leisure': 6.0, 'swimming_moderate': 7.0, 'swimming_vigorous': 9.8,
        'basketball': 6.5, 'soccer': 7.0, 'tennis': 7.3, 'golf': 3.5, 'volleyball': 4.0, 'baseball': 5.0,
        'weight_training': 6.0, 'hiit': 8.0, 'yoga': 3.0, 'pilates': 3.0, 'elliptical': 5.0,
        'rowing': 7.0, 'jump_rope': 12.3, 'stair_climbing': 9.0,
        'housework': 3.3, 'gardening': 3.8, 'cooking': 2.0, 'sitting': 1.3, 'standing': 1.8, 'dancing': 5.5
    };

    var btn = document.getElementById('calcBtn');
    if (btn) btn.addEventListener('click', calculate);

    function calculate() {
        var weightEl = document.getElementById('weight');
        var durationEl = document.getElementById('duration');
        var activityEl = document.getElementById('activity');
        if (!weightEl || !durationEl || !activityEl) return;

        var weightLbs = parseFloat(weightEl.value);
        var duration = parseFloat(durationEl.value);
        var activity = activityEl.value;
        if (isNaN(weightLbs) || weightLbs <= 0 || isNaN(duration) || duration <= 0) return;

        var met = MET_VALUES[activity] || 5.0;
        var weightKg = weightLbs * 0.453592;
        var calories = Math.round(met * weightKg * (duration / 60));
        var calPerMin = (calories / duration).toFixed(1);

        var rn = document.getElementById('resultNumber');
        if (rn) rn.textContent = calories;

        var rv = document.getElementById('resultVerdict');
        if (rv) rv.textContent = calories + ' calories in ' + duration + ' minutes';

        var el;
        el = document.getElementById('calPerMin');
        if (el) el.textContent = calPerMin + ' cal/min';
        el = document.getElementById('metValue');
        if (el) el.textContent = met.toFixed(1) + ' MET';

        var activityName = activityEl.options[activityEl.selectedIndex].text;

        // Coach
        var coach = document.getElementById('coachCard');
        if (coach) {
            coach.innerHTML = '<div class="coach-text"><span class="hl">' + activityName + '</span> for <span class="hl">' + duration + ' minutes</span> burns <span class="hl">' + calories + ' calories</span>.<br>That is <span class="hl">' + calPerMin + ' cal/min</span> at your weight.' +
                '<div class="coach-rule">MET value: ' + met.toFixed(1) + '</div>' +
                '<div class="coach-advice"><em>To burn 1 pound of fat</em>, you need ~3,500 calories of deficit.<br>At this rate, that is about <em>' + Math.round(3500 / (calories / duration) / 60) + ' hours</em> of ' + activityName.toLowerCase() + '.</div></div>';
        }

        var shareText = activityName + ': ' + calories + ' cal in ' + duration + ' min\n' + calPerMin + ' cal/min (MET ' + met.toFixed(1) + ')\n\nTry it: healthcalculators.xyz/calories-burned-calculator';
        if (typeof updateShareButtons === 'function') updateShareButtons(shareText);

        if (typeof factoryReveal === 'function') factoryReveal();

        if (typeof hcTrackEvent === 'function') hcTrackEvent('calculator_complete', { calculator_name: 'Calories Burned Calculator', page_path: '/calories-burned-calculator' });
    }
})();
