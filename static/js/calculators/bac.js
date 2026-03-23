// BAC Calculator — factory-compatible (simplified Widmark formula)
(function() {
    var btn = document.getElementById('calcBtn');
    if (btn) btn.addEventListener('click', calculate);

    function formatTime(hours) {
        if (hours <= 0) return '0 hours';
        var fullHours = Math.floor(hours);
        var minutes = Math.round((hours - fullHours) * 60);
        if (minutes === 0) return fullHours + ' hour' + (fullHours !== 1 ? 's' : '');
        if (fullHours === 0) return minutes + ' minutes';
        return fullHours + ' hour' + (fullHours !== 1 ? 's' : '') + ' ' + minutes + ' min';
    }

    function calculate() {
        var genderEl = document.getElementById('gender');
        var weightEl = document.getElementById('weight');
        var drinksEl = document.getElementById('numDrinks');
        var timeEl = document.getElementById('timeElapsed');
        if (!genderEl || !weightEl || !drinksEl || !timeEl) return;

        var gender = genderEl.value;
        var weightLbs = parseFloat(weightEl.value);
        var numDrinks = parseFloat(drinksEl.value);
        var timeElapsed = parseFloat(timeEl.value);
        if (isNaN(weightLbs) || weightLbs <= 0 || isNaN(numDrinks) || numDrinks < 0) return;

        var weightKg = weightLbs * 0.453592;
        var alcoholGrams = numDrinks * 14; // 1 standard drink = 14g alcohol
        var r = gender === 'male' ? 0.68 : 0.55;
        var metabolismRate = 0.015;
        var bac = (alcoholGrams / (weightKg * r)) / 10 - (metabolismRate * (timeElapsed || 0));
        bac = Math.max(0, bac);
        bac = Math.round(bac * 1000) / 1000;

        var impairment, impColor;
        if (bac === 0) { impairment = 'No alcohol in system'; impColor = 'var(--text-dim)'; }
        else if (bac < 0.03) { impairment = 'Minimal impairment'; impColor = 'var(--good)'; }
        else if (bac < 0.06) { impairment = 'Mild impairment — relaxation, decreased inhibition'; impColor = 'var(--good)'; }
        else if (bac < 0.08) { impairment = 'Moderate impairment — reduced coordination'; impColor = 'var(--caution)'; }
        else if (bac < 0.15) { impairment = 'Legally intoxicated — do not drive'; impColor = 'var(--bad)'; }
        else { impairment = 'Severe impairment — seek medical attention if needed'; impColor = 'var(--bad)'; }

        var hoursToSober = bac / 0.015;
        var hoursToLegal = bac > 0.08 ? (bac - 0.08) / 0.015 : 0;

        var rn = document.getElementById('resultNumber');
        if (rn) rn.textContent = bac.toFixed(3) + '%';

        var rv = document.getElementById('resultVerdict');
        if (rv) { rv.textContent = impairment; rv.style.color = impColor; }

        var el;
        el = document.getElementById('soberTime');
        if (el) el.textContent = formatTime(hoursToSober);
        el = document.getElementById('legalTime');
        if (el) el.textContent = bac > 0.08 ? formatTime(hoursToLegal) : 'Already below';
        el = document.getElementById('stdDrinks');
        if (el) el.textContent = numDrinks + ' standard drinks';

        // Coach
        var coach = document.getElementById('coachCard');
        if (coach) {
            coach.innerHTML = '<div class="coach-text">BAC: <span class="hl">' + bac.toFixed(3) + '%</span> after <span class="hl">' + numDrinks + ' drinks</span> and <span class="hl">' + (timeElapsed || 0) + ' hours</span>.' +
                '<div class="coach-rule">' + impairment + '</div>' +
                '<div class="coach-advice">' +
                (bac >= 0.08 ? '<em>Do NOT drive.</em> You are above the legal limit.<br>Time to sober: <em>' + formatTime(hoursToSober) + '</em>.' :
                 bac > 0 ? '<em>Your body eliminates ~0.015% BAC per hour.</em><br>Time to 0.00%: <em>' + formatTime(hoursToSober) + '</em>.' :
                 '<em>No alcohol detected</em> at current inputs.') +
                '</div></div>';
        }

        var shareText = 'BAC: ' + bac.toFixed(3) + '% after ' + numDrinks + ' drinks\n' + impairment + '\nTime to sober: ' + formatTime(hoursToSober) + '\n\nCheck yours: healthcalculators.xyz/bac-calculator';
        if (typeof updateShareButtons === 'function') updateShareButtons(shareText);

        if (typeof factoryReveal === 'function') factoryReveal();

        if (typeof hcTrackEvent === 'function') hcTrackEvent('calculator_complete', { calculator_name: 'BAC Calculator', page_path: '/bac-calculator' });
    }
})();
