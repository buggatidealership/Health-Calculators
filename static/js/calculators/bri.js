// Body Roundness Index Calculator — calculation logic
(function() {
    var btn = document.getElementById('calcBtn');
    if (btn) btn.addEventListener('click', function() {
        var heightEl = document.getElementById('heightCm');
        var waistEl = document.getElementById('waistCm');
        if (!heightEl || !waistEl) return;

        var heightCm = parseFloat(heightEl.value);
        var waistCm = parseFloat(waistEl.value);
        if (isNaN(heightCm) || heightCm <= 0 || isNaN(waistCm) || waistCm <= 0) return;

        var heightM = heightCm / 100;
        var waistM = waistCm / 100;

        var pi = Math.PI;
        var wcRadius = waistM / (2 * pi);
        var halfHeight = 0.5 * heightM;
        var eccentricityTerm = (wcRadius * wcRadius) / (halfHeight * halfHeight);
        if (eccentricityTerm >= 1) return;

        var bri = 364.2 - 365.5 * Math.sqrt(1 - eccentricityTerm);
        var briRounded = Math.round(bri * 100) / 100;

        var category, riskLevel;
        if (bri < 3.41) { category = 'Lean / Healthy'; riskLevel = 'Low'; }
        else if (bri < 4.45) { category = 'Overweight'; riskLevel = 'Moderate'; }
        else if (bri < 5.73) { category = 'Obese'; riskLevel = 'High'; }
        else { category = 'High Risk'; riskLevel = 'Very High'; }

        var rn = document.getElementById('resultNumber');
        if (rn) rn.textContent = briRounded;

        var rv = document.getElementById('resultVerdict');
        if (rv) rv.textContent = category + ' — ' + riskLevel + ' risk';

        var dCat = document.getElementById('displayCategory');
        if (dCat) dCat.textContent = category;

        var dRisk = document.getElementById('displayRisk');
        if (dRisk) dRisk.textContent = riskLevel;

        var coach = document.getElementById('coachCard');
        if (coach) coach.innerHTML = '<div class="coach-text">Your BRI is <span class="hl">' + briRounded + '</span> — <span class="hl">' + category + '</span>.<div class="coach-rule">BRI measures central adiposity using height and waist circumference.</div><div class="coach-advice">Risk level: <em>' + riskLevel + '</em>. BRI captures body shape, which BMI misses. Lean/healthy BRI is below 3.41.</div></div>';

        var shareText = 'Body Roundness Index: ' + briRounded + ' (' + category + ')\nRisk: ' + riskLevel + '\n\nTry it: healthcalculators.xyz/body-roundness-index-calculator';
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
