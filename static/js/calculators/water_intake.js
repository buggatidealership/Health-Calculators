// Water Intake Calculator — calculation logic
(function() {
    var btn = document.getElementById('calcBtn');
    if (!btn) return;

    btn.addEventListener('click', function() {
        var weightEl = document.getElementById('weight');
        var ageEl = document.getElementById('age');
        var activityEl = document.getElementById('activity');
        var climateEl = document.getElementById('climate');
        if (!weightEl || !ageEl || !activityEl || !climateEl) return;

        var weight = parseFloat(weightEl.value);
        var age = parseInt(ageEl.value);
        var actMult = parseFloat(activityEl.value);
        var climMult = parseFloat(climateEl.value);
        if (!weight || !age) return;

        var weightKg = weight * 0.453592;
        var ml = 35 * weightKg * actMult * climMult;
        if (age >= 65) ml *= 0.9;
        var liters = (ml / 1000).toFixed(1);
        var oz = Math.round(ml * 0.033814);
        var glasses = Math.round(oz / 8);
        var hourly = Math.round(ml / 16);

        var resultNumber = document.getElementById('resultNumber');
        var resultVerdict = document.getElementById('resultVerdict');
        var ozDisplay = document.getElementById('ozDisplay');
        var glassDisplay = document.getElementById('glassDisplay');
        var hourlyDisplay = document.getElementById('hourlyDisplay');
        var coachCard = document.getElementById('coachCard');

        if (resultNumber) resultNumber.textContent = liters;
        if (resultVerdict) resultVerdict.textContent = liters + ' liters per day';
        if (ozDisplay) ozDisplay.textContent = oz + ' oz';
        if (glassDisplay) glassDisplay.textContent = glasses + ' glasses';
        if (hourlyDisplay) hourlyDisplay.textContent = hourly + ' ml';

        if (coachCard) {
            coachCard.innerHTML = '<div class="coach-text">You need about <span class="hl">' + liters +
                ' liters</span> (<span class="hl">' + oz +
                ' oz</span>) of water daily.<div class="coach-rule">' + glasses +
                ' glasses spread across your day.</div><div class="coach-advice">Start with <em>2 glasses when you wake up</em>. Keep a bottle visible. <em>Pale straw-colored urine</em> = well hydrated.</div></div>';
        }

        var shareText = 'My daily water target: ' + liters + 'L (' + oz + ' oz)\n' + glasses +
            ' glasses/day\n\nCalculate yours: healthcalculators.xyz/water-intake-calculator';
        updateShareButtons(shareText);

        if (typeof factoryReveal === 'function') {
            factoryReveal();
        } else {
            document.querySelectorAll('.hidden-section').forEach(function(el) { el.classList.remove('hidden-section'); });
        }
        var resultSection = document.getElementById('result-section');
        if (resultSection) resultSection.scrollIntoView({ behavior: 'smooth' });
    });
})();
