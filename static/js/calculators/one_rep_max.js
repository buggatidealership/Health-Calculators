// One Rep Max Calculator — calculation logic
(function() {
    var formulas = {
        'Epley':    function(w, r) { return r === 1 ? w : w * (1 + r / 30); },
        'Brzycki':  function(w, r) { return r === 1 ? w : w * (36 / (37 - r)); },
        'Lander':   function(w, r) { return r === 1 ? w : (100 * w) / (101.3 - 2.67123 * r); },
        'Lombardi': function(w, r) { return r === 1 ? w : w * Math.pow(r, 0.10); },
        'Mayhew':   function(w, r) { return r === 1 ? w : (100 * w) / (52.2 + 41.9 * Math.exp(-0.055 * r)); },
        'OConner':  function(w, r) { return r === 1 ? w : w * (1 + r / 40); },
        'Wathen':   function(w, r) { return r === 1 ? w : (100 * w) / (48.8 + 53.8 * Math.exp(-0.075 * r)); }
    };

    function roundWeight(val, unit) {
        if (unit === 'kg') return Math.round(val * 10) / 10;
        return Math.round(val);
    }

    var btn = document.getElementById('calcBtn');
    if (btn) btn.addEventListener('click', function() {
        var weightEl = document.getElementById('weightLifted');
        var repsEl = document.getElementById('reps');
        var unitEl = document.getElementById('unit');
        if (!weightEl || !repsEl) return;

        var weight = parseFloat(weightEl.value);
        var reps = parseInt(repsEl.value, 10);
        if (isNaN(weight) || weight <= 0 || isNaN(reps) || reps < 1 || reps > 30) return;

        var unit = unitEl ? unitEl.value : 'lbs';
        var unitLabel = unit === 'kg' ? 'kg' : 'lbs';

        var sum = 0, count = 0;
        var formulaNames = Object.keys(formulas);
        for (var i = 0; i < formulaNames.length; i++) {
            var val = formulas[formulaNames[i]](weight, reps);
            if (isFinite(val) && val > 0) { sum += val; count++; }
        }
        var average = sum / count;

        var rn = document.getElementById('resultNumber');
        if (rn) rn.textContent = roundWeight(average, unit) + ' ' + unitLabel;

        var rv = document.getElementById('resultVerdict');
        if (rv) rv.textContent = 'Estimated 1RM (average of 7 formulas)';

        var dStr = document.getElementById('displayStrength');
        if (dStr) dStr.textContent = roundWeight(average * 0.85, unit) + ' ' + unitLabel;

        var dHyp = document.getElementById('displayHypertrophy');
        if (dHyp) dHyp.textContent = roundWeight(average * 0.75, unit) + ' ' + unitLabel;

        var dEnd = document.getElementById('displayEndurance');
        if (dEnd) dEnd.textContent = roundWeight(average * 0.65, unit) + ' ' + unitLabel;

        var coach = document.getElementById('coachCard');
        if (coach) coach.innerHTML = '<div class="coach-text">Your estimated 1RM is <span class="hl">' + roundWeight(average, unit) + ' ' + unitLabel + '</span> based on ' + weight + ' ' + unitLabel + ' x ' + reps + ' reps.<div class="coach-rule">Use percentages of your 1RM to program training.</div><div class="coach-advice">Strength: <em>' + roundWeight(average * 0.85, unit) + ' ' + unitLabel + ' (85%)</em> x 6 reps<br>Hypertrophy: <em>' + roundWeight(average * 0.75, unit) + ' ' + unitLabel + ' (75%)</em> x 10 reps<br>Endurance: <em>' + roundWeight(average * 0.65, unit) + ' ' + unitLabel + ' (65%)</em> x 16 reps</div></div>';

        var shareText = 'Estimated 1RM: ' + roundWeight(average, unit) + ' ' + unitLabel + '\nBased on ' + weight + ' ' + unitLabel + ' x ' + reps + ' reps\n\nTry it: healthcalculators.xyz/one-rep-max-calculator';
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
