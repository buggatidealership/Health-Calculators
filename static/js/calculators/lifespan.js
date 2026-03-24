// Lifespan Calculator — factory-compatible
(function() {
    var btn = document.getElementById('calcBtn');
    if (btn) btn.addEventListener('click', calculate);

    function calculate() {
        var ageEl = document.getElementById('age');
        var genderEl = document.getElementById('gender');
        var bmiEl = document.getElementById('bmi');
        var exerciseEl = document.getElementById('exercise');
        var smokingEl = document.getElementById('smoking');
        var dietEl = document.getElementById('diet');
        var sleepEl = document.getElementById('sleep');
        var stressEl = document.getElementById('stress');
        var socialEl = document.getElementById('social');

        var age = ageEl ? parseInt(ageEl.value) : NaN;
        var gender = genderEl ? genderEl.value : 'female';
        var bmi = bmiEl ? parseFloat(bmiEl.value) : NaN;
        var exercise = exerciseEl ? parseInt(exerciseEl.value) : 0;
        var smoking = smokingEl ? parseInt(smokingEl.value) : 0;
        var diet = dietEl ? parseInt(dietEl.value) : 0;
        var sleep = sleepEl ? parseFloat(sleepEl.value) : 7;
        var stress = stressEl ? parseInt(stressEl.value) : 0;
        var social = socialEl ? parseInt(socialEl.value) : 0;

        if (!age || !bmi) { alert('Please fill all fields.'); return; }

        var base = gender === 'female' ? 74 : 70;
        var bmiE = bmi < 18.5 ? -3 * (18.5 - bmi) : bmi > 25 ? -0.5 * (bmi - 25) : 1;
        var exE = Math.min(exercise / 50, 5);
        var sleepE = sleep < 6 ? -5 + sleep : sleep > 9 ? -2 * (sleep - 9) : 1;

        var total = base + bmiE + exE + diet + sleepE + stress + smoking + social;
        total = Math.max(50, Math.min(120, total));
        var avg = gender === 'female' ? 79 : 74;
        var diff = Math.round(total) - avg;
        var remain = Math.round(total) - age;
        var score = bmiE + exE + diet + sleepE + stress + smoking + social;

        var numEl = document.getElementById('resultNumber');
        if (numEl) numEl.textContent = Math.round(total);

        var verdictEl = document.getElementById('resultVerdict');
        if (verdictEl) {
            verdictEl.textContent = diff >= 0 ? diff + ' years above average' : Math.abs(diff) + ' years below average';
            verdictEl.style.color = diff >= 0 ? 'var(--good)' : 'var(--bad)';
        }

        var dDiffEl = document.getElementById('dDiff');
        if (dDiffEl) dDiffEl.textContent = (diff >= 0 ? '+' : '') + diff;
        var dRemainEl = document.getElementById('dRemain');
        if (dRemainEl) dRemainEl.textContent = remain > 0 ? remain : 0;
        var dScoreEl = document.getElementById('dScore');
        if (dScoreEl) dScoreEl.textContent = (score >= 0 ? '+' : '') + score.toFixed(1);

        // Coach tips
        var tips = [];
        if (smoking < 0) tips.push('Quit smoking -- the single most impactful change');
        if (exercise < 150) tips.push('Increase to 150+ minutes of exercise per week');
        if (bmi > 25) tips.push('Reduce BMI to the healthy range (18.5-24.9)');
        if (sleep < 6 || sleep > 9) tips.push('Aim for 7-9 hours of sleep');
        if (social < 2) tips.push('Strengthen social connections');
        if (!tips.length) tips.push('You are doing great -- maintain these habits!');

        var coachEl = document.getElementById('coachCard');
        if (coachEl) {
            coachEl.innerHTML = '<div class="coach-text">Estimated lifespan: <span class="hl">' + Math.round(total) + ' years</span><br>' +
                'Average for ' + gender + ': <span class="hl">' + avg + ' years</span>' +
                '<div class="coach-rule">' + (diff >= 0 ? '+' : '') + diff + ' years vs average</div>' +
                '<div class="coach-advice"><em>Top recommendations:</em><br>' +
                tips.map(function(t) { return '&bull; ' + t; }).join('<br>') +
                '</div></div>';
        }

        // Share
        var shareText = 'My estimated lifespan: ' + Math.round(total) + ' years (' + (diff >= 0 ? '+' : '') + diff + ' vs average)\n\nCheck yours: healthcalculators.xyz/lifespan-longevity-calculator';
        if (typeof updateShareButtons === 'function') updateShareButtons(shareText);

        if (typeof factoryReveal === 'function') factoryReveal();

        if (typeof hcTrackEvent === 'function') hcTrackEvent('calculator_complete', {calculator_name: 'Lifespan Calculator', page_path: '/lifespan-longevity-calculator'});
    }
})();
