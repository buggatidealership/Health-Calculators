// Creatine Water Calculator — factory-compatible
(function() {
    var btn = document.getElementById('calcBtn');
    if (btn) btn.addEventListener('click', function() {
        var genderEl = document.getElementById('gender');
        var weightEl = document.getElementById('weight');
        var weightUnitEl = document.getElementById('weightUnit');
        var intensityEl = document.getElementById('intensity');
        var dosageEl = document.getElementById('dosage');
        var phaseEl = document.getElementById('phase');
        if (!weightEl || !genderEl || !intensityEl || !dosageEl || !phaseEl) return;

        var weight = parseFloat(weightEl.value);
        if (isNaN(weight) || weight <= 0) return;

        var weightKg = (weightUnitEl && weightUnitEl.value === 'lbs') ? weight / 2.20462 : weight;
        if (weightKg < 30 || weightKg > 200) return;

        var gender = genderEl.value;
        var intensity = intensityEl.value;
        var dosage = parseInt(dosageEl.value);
        var phase = phaseEl.value;

        // Base water: 35 mL/kg for male, 30 mL/kg for female
        var mlPerKg = gender === 'male' ? 35 : 30;
        var baseWater = weightKg * mlPerKg;

        // Activity multiplier
        var activityMultiplier = 1;
        if (intensity === 'moderate') activityMultiplier = 1.1;
        else if (intensity === 'high') activityMultiplier = 1.2;
        else if (intensity === 'extreme') activityMultiplier = 1.4;

        var adjustedBaseWater = baseWater * activityMultiplier;

        // Creatine adjustment
        var creatineAdjustment = phase === 'loading' ? dosage * 50 : dosage * 30;

        var totalWater = adjustedBaseWater + creatineAdjustment;
        var totalWaterLiters = Math.round(totalWater / 100) / 10;
        var totalWaterOunces = Math.round(totalWaterLiters * 33.814);
        var baseWaterLiters = Math.round(adjustedBaseWater / 100) / 10;
        var difference = Math.round((totalWaterLiters - baseWaterLiters) * 10) / 10;

        // Primary result
        var rn = document.getElementById('resultNumber');
        if (rn) rn.textContent = totalWaterLiters + ' L/day';

        var rv = document.getElementById('resultVerdict');
        if (rv) rv.textContent = totalWaterOunces + ' oz — ' + difference + ' L more than without creatine';

        // Breakdown
        var dBase = document.getElementById('displayBaseWater');
        if (dBase) dBase.textContent = baseWaterLiters + ' L';

        var dCreatine = document.getElementById('displayCreatineExtra');
        if (dCreatine) dCreatine.textContent = '+' + (creatineAdjustment / 1000).toFixed(1) + ' L';

        var dOunces = document.getElementById('displayOunces');
        if (dOunces) dOunces.textContent = totalWaterOunces + ' oz';

        // Coach card
        var coach = document.getElementById('coachCard');
        if (coach) {
            var doseAdvice = phase === 'loading'
                ? 'During loading (first 5\u20137 days), take ' + dosage + 'g/day split into 2\u20134 doses.'
                : 'During maintenance, take ' + dosage + 'g/day of creatine monohydrate.';
            var tips = '<div class="coach-text">' +
                'Drink <span class="hl">' + totalWaterLiters + ' L per day</span> (' + totalWaterOunces + ' oz).' +
                '<div class="coach-rule">' + doseAdvice + '</div>' +
                '<div class="coach-advice">' +
                'Spread intake throughout the day. Take creatine with at least 240 mL (8 oz) of water. Monitor urine color \u2014 aim for pale yellow.' +
                '</div></div>';
            coach.innerHTML = tips;
        }

        // Share
        var shareText = 'Creatine hydration: ' + totalWaterLiters + ' L/day (' + totalWaterOunces + ' oz)\n' + difference + ' L extra for creatine\n\nTry it: healthcalculators.xyz/creatine-water-calculator';
        if (typeof updateShareButtons === 'function') updateShareButtons(shareText);

        if (typeof factoryReveal === 'function') {
            factoryReveal();
        } else {
            document.querySelectorAll('.hidden-section').forEach(function(el) { el.classList.remove('hidden-section'); });
            var rs = document.getElementById('result-section');
            if (rs) rs.scrollIntoView({ behavior: 'smooth' });
        }
    });
})();
