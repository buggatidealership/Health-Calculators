// Waist to Hip Ratio Calculator — calculation logic
(function() {
    var btn = document.getElementById('calcBtn');
    if (btn) btn.addEventListener('click', function() {
        var sexEl = document.getElementById('sex');
        var waistEl = document.getElementById('waist');
        var hipEl = document.getElementById('hip');
        if (!sexEl || !waistEl || !hipEl) return;

        var sex = sexEl.value;
        var waist = parseFloat(waistEl.value);
        var hip = parseFloat(hipEl.value);

        if (isNaN(waist) || waist <= 0 || isNaN(hip) || hip <= 0) return;

        var whr = waist / hip;

        // WHO risk categories
        var category, verdict;
        if (sex === 'male') {
            if (whr < 0.90) { category = 'Low Risk'; verdict = 'Below the WHO threshold for men (<0.90). Healthy fat distribution.'; }
            else if (whr < 0.95) { category = 'Moderate Risk'; verdict = 'At or above 0.90 — WHO threshold for substantially increased health risk in men.'; }
            else if (whr < 1.00) { category = 'High Risk'; verdict = 'Significant central obesity. INTERHEART study links this to doubled heart attack risk.'; }
            else { category = 'Very High Risk'; verdict = 'Well above WHO risk threshold. Strongly associated with type 2 diabetes and cardiovascular disease.'; }
        } else {
            if (whr < 0.80) { category = 'Low Risk'; verdict = 'Below the WHO threshold for women (<0.80). Healthy fat distribution.'; }
            else if (whr < 0.85) { category = 'Moderate Risk'; verdict = 'Approaching the WHO threshold of 0.85 for substantially increased health risk in women.'; }
            else if (whr < 0.90) { category = 'High Risk'; verdict = 'Exceeds the WHO threshold of 0.85 for women. Central fat linked to higher cardiovascular risk.'; }
            else { category = 'Very High Risk'; verdict = 'Well above WHO risk threshold for women. Consult a healthcare provider.'; }
        }

        // Body shape
        var bodyShape;
        if (sex === 'male') {
            bodyShape = whr < 0.90 ? 'Balanced / rectangular' : 'Apple-shaped (central)';
        } else {
            bodyShape = whr < 0.75 ? 'Pear-shaped' : whr < 0.80 ? 'Balanced' : 'Apple-shaped (central)';
        }

        var rn = document.getElementById('resultNumber');
        if (rn) rn.textContent = whr.toFixed(2);

        var rv = document.getElementById('resultVerdict');
        if (rv) rv.textContent = verdict;

        var dWhr = document.getElementById('displayWhr');
        if (dWhr) dWhr.textContent = whr.toFixed(3);

        var dCat = document.getElementById('displayCategory');
        if (dCat) dCat.textContent = category;

        var dShape = document.getElementById('displayShape');
        if (dShape) dShape.textContent = bodyShape;

        var coach = document.getElementById('coachCard');
        if (coach) coach.innerHTML = '<div class="coach-text">Your waist-to-hip ratio is <span class="hl">' + whr.toFixed(2) + '</span> — <span class="hl">' + category + '</span>.<div class="coach-rule">WHO threshold: ' + (sex === 'male' ? '0.90 for men' : '0.85 for women') + '</div><div class="coach-advice">Body shape: <em>' + bodyShape + '</em>. WHR captures central fat distribution, a stronger predictor of cardiovascular events than BMI alone.</div></div>';

        var shareText = 'Waist-to-Hip Ratio: ' + whr.toFixed(2) + ' (' + category + ')\nBody shape: ' + bodyShape + '\n\nTry it: healthcalculators.xyz/waist-to-hip-ratio-calculator';
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
