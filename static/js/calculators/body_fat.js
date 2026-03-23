// Body Fat Calculator — factory-compatible (U.S. Navy Method)
(function() {
    var btn = document.getElementById('calcBtn');
    if (btn) btn.addEventListener('click', calculate);

    function getACECategory(bf, gender) {
        if (gender === 'male') {
            if (bf < 6) return { name: 'Essential Fat', color: 'var(--accent)' };
            if (bf <= 13) return { name: 'Athletes', color: 'var(--good)' };
            if (bf <= 17) return { name: 'Fitness', color: 'var(--good)' };
            if (bf <= 24) return { name: 'Average', color: 'var(--caution)' };
            return { name: 'Obese', color: 'var(--bad)' };
        } else {
            if (bf < 14) return { name: 'Essential Fat', color: 'var(--accent)' };
            if (bf <= 20) return { name: 'Athletes', color: 'var(--good)' };
            if (bf <= 24) return { name: 'Fitness', color: 'var(--good)' };
            if (bf <= 31) return { name: 'Average', color: 'var(--caution)' };
            return { name: 'Obese', color: 'var(--bad)' };
        }
    }

    function calculate() {
        var genderEl = document.getElementById('gender');
        var waistEl = document.getElementById('waistIn');
        var neckEl = document.getElementById('neckIn');
        var heightFtEl = document.getElementById('heightFt');
        var heightInEl = document.getElementById('heightIn');
        var hipEl = document.getElementById('hipIn');
        var weightEl = document.getElementById('weightLb');
        if (!genderEl || !waistEl || !neckEl || !heightFtEl) return;

        var gender = genderEl.value;
        var waistIn = parseFloat(waistEl.value) || 0;
        var neckIn = parseFloat(neckEl.value) || 0;
        var ft = parseFloat(heightFtEl.value) || 0;
        var inc = parseFloat(heightInEl ? heightInEl.value : '0') || 0;
        var hipIn = hipEl ? parseFloat(hipEl.value) || 0 : 0;
        var weightLb = weightEl ? parseFloat(weightEl.value) || 0 : 0;

        var heightCm = (ft * 12 + inc) * 2.54;
        var waistCm = waistIn * 2.54;
        var neckCm = neckIn * 2.54;
        var hipCm = hipIn * 2.54;
        var weightKg = weightLb * 0.453592;

        if (heightCm <= 0 || neckCm <= 0 || waistCm <= 0) return;
        if (neckCm >= waistCm) return;
        if (gender === 'female' && hipCm <= 0) return;

        var bf;
        if (gender === 'male') {
            bf = 86.010 * Math.log10(waistCm - neckCm) - 70.041 * Math.log10(heightCm) + 36.76;
        } else {
            bf = 163.205 * Math.log10(waistCm + hipCm - neckCm) - 97.684 * Math.log10(heightCm) + 36.76;
        }

        if (isNaN(bf) || !isFinite(bf)) return;
        bf = Math.max(bf, 0);
        bf = Math.round(bf * 10) / 10;

        var category = getACECategory(bf, gender);

        var rn = document.getElementById('resultNumber');
        if (rn) rn.textContent = bf + '%';

        var rv = document.getElementById('resultVerdict');
        if (rv) { rv.textContent = category.name + ' range'; rv.style.color = category.color; }

        var el;
        if (weightKg > 0) {
            var fatMass = weightKg * (bf / 100);
            var leanMass = weightKg - fatMass;
            el = document.getElementById('fatMass');
            if (el) el.textContent = Math.round(fatMass / 0.453592) + ' lbs (' + fatMass.toFixed(1) + ' kg)';
            el = document.getElementById('leanMass');
            if (el) el.textContent = Math.round(leanMass / 0.453592) + ' lbs (' + leanMass.toFixed(1) + ' kg)';
        }

        // Coach
        var coach = document.getElementById('coachCard');
        if (coach) {
            coach.innerHTML = '<div class="coach-text">Your body fat is <span class="hl">' + bf + '%</span> (' + category.name + ').' +
                (weightKg > 0 ? '<br>Fat mass: <span class="hl">' + Math.round(weightKg * bf / 100 / 0.453592) + ' lbs</span> | Lean mass: <span class="hl">' + Math.round(weightKg * (1 - bf/100) / 0.453592) + ' lbs</span>' : '') +
                '<div class="coach-rule">U.S. Navy Method (Hodgdon-Beckett)</div>' +
                '<div class="coach-advice">' +
                (bf > 24 && gender === 'male' || bf > 31 && gender === 'female' ? '<em>Focus on a caloric deficit</em> of 500 cal/day for ~1 lb/week fat loss.<br>Resistance training preserves lean mass during a cut.' :
                 '<em>You are in a healthy range.</em> Maintain with consistent training and nutrition.') +
                '</div></div>';
        }

        var shareText = 'Body fat: ' + bf + '% (' + category.name + ')\nMethod: U.S. Navy (Hodgdon-Beckett)\n\nCheck yours: healthcalculators.xyz/body-fat-calculator';
        if (typeof updateShareButtons === 'function') updateShareButtons(shareText);

        if (typeof factoryReveal === 'function') factoryReveal();

        if (typeof hcTrackEvent === 'function') hcTrackEvent('calculator_complete', { calculator_name: 'Body Fat Calculator', page_path: '/body-fat-calculator' });
    }
})();
