// Ideal Body Weight Calculator — calculation logic
(function() {
    var btn = document.getElementById('calcBtn');
    if (btn) btn.addEventListener('click', function() {
        var genderEl = document.getElementById('gender');
        var heightCmEl = document.getElementById('heightCm');
        var frameEl = document.getElementById('frame');
        if (!genderEl || !heightCmEl) return;

        var gender = genderEl.value;
        var heightCm = parseFloat(heightCmEl.value);
        if (isNaN(heightCm) || heightCm < 100 || heightCm > 250) return;

        var heightIn = heightCm / 2.54;
        var frame = frameEl ? frameEl.value : 'medium';

        var devine, robinson, miller, hamwi;
        if (gender === 'male') {
            devine = 50 + 2.3 * (heightIn - 60);
            robinson = 52 + 1.9 * (heightIn - 60);
            miller = 56.2 + 1.41 * (heightIn - 60);
            hamwi = 48 + 2.7 * (heightIn - 60);
        } else {
            devine = 45.5 + 2.3 * (heightIn - 60);
            robinson = 49 + 1.7 * (heightIn - 60);
            miller = 53.1 + 1.36 * (heightIn - 60);
            hamwi = 45.5 + 2.2 * (heightIn - 60);
        }

        var frameAdj = 1.0;
        if (frame === 'small') frameAdj = 0.9;
        if (frame === 'large') frameAdj = 1.1;

        devine *= frameAdj; robinson *= frameAdj; miller *= frameAdj; hamwi *= frameAdj;
        var avg = (devine + robinson + miller + hamwi) / 4;
        var lo = avg * 0.9, hi = avg * 1.1;

        var fmt = function(kg) { return Math.round(kg) + ' kg (' + Math.round(kg * 2.20462) + ' lbs)'; };

        var rn = document.getElementById('resultNumber');
        if (rn) rn.textContent = Math.round(avg) + ' kg';

        var rv = document.getElementById('resultVerdict');
        if (rv) rv.textContent = 'Healthy range: ' + fmt(lo) + ' to ' + fmt(hi);

        var dDevine = document.getElementById('displayDevine');
        if (dDevine) dDevine.textContent = fmt(devine);

        var dRobinson = document.getElementById('displayRobinson');
        if (dRobinson) dRobinson.textContent = fmt(robinson);

        var dMiller = document.getElementById('displayMiller');
        if (dMiller) dMiller.textContent = fmt(miller);

        var dHamwi = document.getElementById('displayHamwi');
        if (dHamwi) dHamwi.textContent = fmt(hamwi);

        var coach = document.getElementById('coachCard');
        if (coach) coach.innerHTML = '<div class="coach-text">At <span class="hl">' + heightCm + ' cm</span>, four medical formulas agree:<br>your range is <span class="hl">' + fmt(lo) + ' to ' + fmt(hi) + '</span>.<div class="coach-rule">Your ideal weight is a range, not a number.</div><div class="coach-advice">Devine: <em>' + fmt(devine) + '</em> (most used clinically)<br>Robinson: <em>' + fmt(robinson) + '</em><br>Miller: <em>' + fmt(miller) + '</em> (most conservative)<br>Hamwi: <em>' + fmt(hamwi) + '</em></div></div>';

        var shareText = 'Ideal body weight at ' + heightCm + ' cm:\nRange: ' + fmt(lo) + ' - ' + fmt(hi) + '\n\nTry it: healthcalculators.xyz/ideal-body-weight-calculator';
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
