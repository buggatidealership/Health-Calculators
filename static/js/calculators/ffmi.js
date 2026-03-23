// FFMI Calculator — calculation logic
(function() {
    var btn = document.getElementById('calcBtn');
    if (btn) btn.addEventListener('click', function() {
        var weightEl = document.getElementById('weight');
        var weightUnitEl = document.getElementById('weightUnit');
        var heightCmEl = document.getElementById('heightCm');
        var bodyFatEl = document.getElementById('bodyFat');
        var sexEl = document.getElementById('sex');
        if (!weightEl || !heightCmEl || !bodyFatEl || !sexEl) return;

        var weight = parseFloat(weightEl.value);
        var bodyFat = parseFloat(bodyFatEl.value);
        var heightCm = parseFloat(heightCmEl.value);
        var sex = sexEl.value;

        if (isNaN(weight) || weight <= 0 || isNaN(bodyFat) || bodyFat < 1 || bodyFat > 60 || isNaN(heightCm) || heightCm <= 0) return;

        var weightKg = (weightUnitEl && weightUnitEl.value === 'lbs') ? weight * 0.4536 : weight;
        var heightM = heightCm / 100;

        var fatFreeMassKg = weightKg * (1 - bodyFat / 100);
        var ffmi = fatFreeMassKg / (heightM * heightM);
        var normalizedFfmi = ffmi + 6.1 * (1.8 - heightM);
        var fatMassKg = weightKg - fatFreeMassKg;

        // Classification
        var label;
        if (sex === 'male') {
            if (normalizedFfmi < 18) label = 'Below Average';
            else if (normalizedFfmi < 20) label = 'Average';
            else if (normalizedFfmi < 22) label = 'Above Average';
            else if (normalizedFfmi < 23) label = 'Excellent';
            else if (normalizedFfmi < 25) label = 'Superior';
            else if (normalizedFfmi < 27) label = 'Suspicious';
            else label = 'Very Likely Enhanced';
        } else {
            if (normalizedFfmi < 14) label = 'Below Average';
            else if (normalizedFfmi < 17) label = 'Average';
            else if (normalizedFfmi < 18) label = 'Above Average';
            else if (normalizedFfmi < 19) label = 'Excellent';
            else if (normalizedFfmi < 21) label = 'Superior';
            else if (normalizedFfmi < 23) label = 'Suspicious';
            else label = 'Very Likely Enhanced';
        }

        var rn = document.getElementById('resultNumber');
        if (rn) rn.textContent = normalizedFfmi.toFixed(1);

        var rv = document.getElementById('resultVerdict');
        if (rv) rv.textContent = 'Normalized FFMI \u2014 ' + label;

        var dRaw = document.getElementById('displayRawFfmi');
        if (dRaw) dRaw.textContent = ffmi.toFixed(2) + ' kg/m\u00B2';

        var dLean = document.getElementById('displayLeanMass');
        if (dLean) dLean.textContent = fatFreeMassKg.toFixed(1) + ' kg';

        var dFat = document.getElementById('displayFatMass');
        if (dFat) dFat.textContent = fatMassKg.toFixed(1) + ' kg';

        var coach = document.getElementById('coachCard');
        if (coach) coach.innerHTML = '<div class="coach-text">Your normalized FFMI is <span class="hl">' + normalizedFfmi.toFixed(1) + '</span> \u2014 <span class="hl">' + label + '</span>.<div class="coach-rule">Natural limit is ~' + (sex === 'male' ? '25' : '21') + ' FFMI</div><div class="coach-advice">Lean mass: <em>' + fatFreeMassKg.toFixed(1) + ' kg</em>. Fat mass: <em>' + fatMassKg.toFixed(1) + ' kg</em>. Body fat: <em>' + bodyFat + '%</em>.</div></div>';

        var shareText = 'FFMI: ' + normalizedFfmi.toFixed(1) + ' (normalized) \u2014 ' + label + '\nLean mass: ' + fatFreeMassKg.toFixed(1) + ' kg\n\nTry it: healthcalculators.xyz/ffmi-calculator';
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
