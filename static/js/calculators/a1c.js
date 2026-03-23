// A1C Calculator — calculation logic
(function() {
    var btn = document.getElementById('calcBtn');
    if (btn) btn.addEventListener('click', function() {
        var modeEl = document.getElementById('conversionMode');
        var a1cEl = document.getElementById('a1cInput');
        var bsEl = document.getElementById('bsInput');
        var bsUnitEl = document.getElementById('bsUnit');
        if (!modeEl || !a1cEl || !bsEl) return;

        var a1c, eag_mgdl, eag_mmol;

        if (modeEl.value === 'a1c-to-bs') {
            a1c = parseFloat(a1cEl.value);
            if (isNaN(a1c) || a1c < 4.0 || a1c > 15.0) return;
            eag_mgdl = 28.7 * a1c - 46.7;
            eag_mmol = eag_mgdl / 18.0;
        } else {
            var bsValue = parseFloat(bsEl.value);
            if (isNaN(bsValue) || bsValue <= 0) return;
            if (bsUnitEl && bsUnitEl.value === 'mmol') {
                eag_mmol = bsValue; eag_mgdl = bsValue * 18.0;
            } else {
                eag_mgdl = bsValue; eag_mmol = bsValue / 18.0;
            }
            a1c = (eag_mgdl + 46.7) / 28.7;
        }

        a1c = Math.round(a1c * 10) / 10;
        eag_mgdl = Math.round(eag_mgdl);
        eag_mmol = Math.round(eag_mmol * 10) / 10;

        var rn = document.getElementById('resultNumber');
        if (rn) {
            if (modeEl.value === 'a1c-to-bs') {
                rn.textContent = eag_mgdl + ' mg/dL';
            } else {
                rn.textContent = a1c + '%';
            }
        }

        var verdict, verdictText;
        if (a1c < 5.7) { verdict = 'Normal'; verdictText = 'Normal \u2014 healthy blood sugar control'; }
        else if (a1c < 6.5) { verdict = 'Prediabetes'; verdictText = 'Prediabetes range \u2014 lifestyle changes can help'; }
        else { verdict = 'Diabetes'; verdictText = 'Diabetes range \u2014 consult your healthcare provider'; }

        var rv = document.getElementById('resultVerdict');
        if (rv) rv.textContent = verdictText;

        var dA1c = document.getElementById('displayA1c');
        if (dA1c) dA1c.textContent = a1c + '%';

        var dMgdl = document.getElementById('displayMgdl');
        if (dMgdl) dMgdl.textContent = eag_mgdl + ' mg/dL';

        var dMmol = document.getElementById('displayMmol');
        if (dMmol) dMmol.textContent = eag_mmol + ' mmol/L';

        // Coach
        var coach = document.getElementById('coachCard');
        if (coach) {
            var coachHTML;
            if (a1c < 5.7) {
                coachHTML = '<div class="coach-text">Your A1C of <span class="hl">' + a1c + '%</span> is in the <span class="hl">normal range</span>.<br>Average blood sugar: <span class="hl">' + eag_mgdl + ' mg/dL</span>.<div class="coach-rule">Keep doing what you\'re doing.</div><div class="coach-advice">Retest every <em>1-3 years</em> if no risk factors.</div></div>';
            } else if (a1c < 6.5) {
                coachHTML = '<div class="coach-text">Your A1C of <span class="hl">' + a1c + '%</span> is in the <span class="hl">prediabetes range</span>.<br>Average blood sugar: <span class="hl">' + eag_mgdl + ' mg/dL</span>.<div class="coach-rule">This is reversible.</div><div class="coach-advice">The DPP trial showed <em>5-7% weight loss + 150 min/week exercise</em> reduces diabetes risk by 58%. Retest in <em>3 months</em>.</div></div>';
            } else {
                coachHTML = '<div class="coach-text">Your A1C of <span class="hl">' + a1c + '%</span> is in the <span class="hl">diabetes range</span>.<br>Average blood sugar: <span class="hl">' + eag_mgdl + ' mg/dL</span>.<div class="coach-rule">Talk to your doctor about next steps.</div><div class="coach-advice">ADA target for most adults with diabetes is <em>below 7.0%</em>. Lifestyle + medication can lower A1C by <em>1-2% in 3 months</em>.</div></div>';
            }
            coach.innerHTML = coachHTML;
        }

        var shareText = 'A1C: ' + a1c + '% = ' + eag_mgdl + ' mg/dL average blood sugar.\n' + verdictText + '\n\nCheck yours: healthcalculators.xyz/a1c-calculator';
        if (typeof updateShareButtons === 'function') updateShareButtons(shareText);

        if (typeof factoryReveal === 'function') {
            factoryReveal();
        } else {
            document.querySelectorAll('.hidden-section').forEach(function(el) { el.classList.remove('hidden-section'); });
            var rs = document.getElementById('result-section');
            if (rs) rs.scrollIntoView({ behavior: 'smooth' });
        }
    });

    // Toggle input groups based on conversion mode
    var modeEl = document.getElementById('conversionMode');
    if (modeEl) {
        modeEl.addEventListener('change', function() {
            var a1cGroup = document.getElementById('a1cGroup');
            var bsGroup = document.getElementById('bsGroup');
            if (this.value === 'a1c-to-bs') {
                if (a1cGroup) a1cGroup.style.display = '';
                if (bsGroup) bsGroup.style.display = 'none';
            } else {
                if (a1cGroup) a1cGroup.style.display = 'none';
                if (bsGroup) bsGroup.style.display = '';
            }
        });
    }
})();
