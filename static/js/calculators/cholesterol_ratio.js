// Cholesterol Ratio Calculator — factory-compatible
(function() {
    var CHOL_FACTOR = 38.67;
    var TRIG_FACTOR = 88.57;

    var btn = document.getElementById('calcBtn');
    if (btn) btn.addEventListener('click', calculate);

    function getTcHdlCategory(ratio) {
        if (ratio < 3.5) return { label: 'Optimal', color: 'var(--good)' };
        if (ratio < 5.0) return { label: 'Desirable', color: 'var(--good)' };
        if (ratio < 6.0) return { label: 'Borderline High', color: 'var(--caution)' };
        return { label: 'High Risk', color: 'var(--bad)' };
    }

    function calculate() {
        var unitEl = document.getElementById('unitSystem');
        var tcEl = document.getElementById('totalCholesterol');
        var hdlEl = document.getElementById('hdlInput');
        var ldlEl = document.getElementById('ldlInput');
        var trigEl = document.getElementById('trigInput');
        var genderEl = document.getElementById('sexSelect');
        if (!tcEl || !hdlEl || !ldlEl) return;

        var tc = parseFloat(tcEl.value);
        var hdl = parseFloat(hdlEl.value);
        var ldl = parseFloat(ldlEl.value);
        var trig = parseFloat(trigEl ? trigEl.value : '');
        var isMMOL = unitEl && unitEl.value === 'mmol';

        if (isNaN(tc) || isNaN(hdl) || isNaN(ldl) || hdl <= 0) return;

        var tcMgdl = isMMOL ? tc * CHOL_FACTOR : tc;
        var hdlMgdl = isMMOL ? hdl * CHOL_FACTOR : hdl;
        var ldlMgdl = isMMOL ? ldl * CHOL_FACTOR : ldl;
        var trigMgdl = !isNaN(trig) ? (isMMOL ? trig * TRIG_FACTOR : trig) : null;

        var tcHdlRatio = tcMgdl / hdlMgdl;
        var ldlHdlRatio = ldlMgdl / hdlMgdl;
        var nonHdl = tcMgdl - hdlMgdl;
        var trigHdlRatio = trigMgdl !== null ? trigMgdl / hdlMgdl : null;

        var cat = getTcHdlCategory(tcHdlRatio);

        var rn = document.getElementById('resultNumber');
        if (rn) rn.textContent = tcHdlRatio.toFixed(1);

        var rv = document.getElementById('resultVerdict');
        if (rv) {
            rv.textContent = 'Total/HDL ratio: ' + cat.label;
            rv.style.color = cat.color;
        }

        var el;
        el = document.getElementById('ldlHdlRatio');
        if (el) el.textContent = ldlHdlRatio.toFixed(2);

        el = document.getElementById('nonHdlValue');
        if (el) el.textContent = Math.round(nonHdl) + ' mg/dL';

        el = document.getElementById('trigHdlRatio');
        if (el) el.textContent = trigHdlRatio !== null ? trigHdlRatio.toFixed(2) : 'N/A';

        // Coach
        var coach = document.getElementById('coachCard');
        if (coach) {
            coach.innerHTML = '<div class="coach-text">Your Total/HDL ratio is <span class="hl">' + tcHdlRatio.toFixed(1) + '</span> (' + cat.label + ').<br>' +
                'LDL/HDL ratio: <span class="hl">' + ldlHdlRatio.toFixed(2) + '</span>.<br>' +
                'Non-HDL cholesterol: <span class="hl">' + Math.round(nonHdl) + ' mg/dL</span>.' +
                (trigHdlRatio !== null ? '<br>Trig/HDL ratio: <span class="hl">' + trigHdlRatio.toFixed(2) + '</span>.' : '') +
                '<div class="coach-rule">' + (tcHdlRatio < 3.5 ? 'Excellent lipid profile' : tcHdlRatio < 5.0 ? 'Within guidelines' : 'Discuss with your doctor') + '</div>' +
                '<div class="coach-advice">' + (tcHdlRatio < 5.0 ? '<em>Keep doing what you are doing.</em><br>Exercise, fiber, and healthy fats maintain good ratios.' : '<em>Focus on raising HDL</em> (exercise, omega-3s) and <em>lowering LDL</em> (less saturated fat, more fiber).<br>Retest in 3-6 months.') + '</div></div>';
        }

        var shareText = 'Cholesterol Ratios:\nTotal/HDL: ' + tcHdlRatio.toFixed(1) + ' (' + cat.label + ')\nLDL/HDL: ' + ldlHdlRatio.toFixed(2) + '\nNon-HDL: ' + Math.round(nonHdl) + ' mg/dL\n\nCheck yours: healthcalculators.xyz/cholesterol-ratio-calculator';
        if (typeof updateShareButtons === 'function') updateShareButtons(shareText);

        if (typeof factoryReveal === 'function') factoryReveal();

        if (typeof hcTrackEvent === 'function') hcTrackEvent('calculator_complete', { calculator_name: 'Cholesterol Ratio Calculator', page_path: '/cholesterol-ratio-calculator' });
    }
})();
