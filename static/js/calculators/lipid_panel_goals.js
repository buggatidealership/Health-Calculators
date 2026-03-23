// Lipid Panel Goals Calculator — factory-compatible
(function() {
    var RANGES = {
        tc: [
            { max: 200, label: 'Desirable', cls: 'good' },
            { max: 239, label: 'Borderline High', cls: 'caution' },
            { max: Infinity, label: 'High', cls: 'bad' }
        ],
        ldl: [
            { max: 100, label: 'Optimal', cls: 'good' },
            { max: 129, label: 'Near Optimal', cls: 'good' },
            { max: 159, label: 'Borderline High', cls: 'caution' },
            { max: 189, label: 'High', cls: 'bad' },
            { max: Infinity, label: 'Very High', cls: 'bad' }
        ],
        hdl_male: [
            { min: 60, label: 'Optimal', cls: 'good' },
            { min: 40, label: 'Good', cls: 'good' },
            { min: 0, label: 'Low', cls: 'bad' }
        ],
        hdl_female: [
            { min: 60, label: 'Optimal', cls: 'good' },
            { min: 50, label: 'Good', cls: 'good' },
            { min: 0, label: 'Low', cls: 'bad' }
        ],
        tg: [
            { max: 150, label: 'Normal', cls: 'good' },
            { max: 199, label: 'Borderline High', cls: 'caution' },
            { max: 499, label: 'High', cls: 'bad' },
            { max: Infinity, label: 'Very High', cls: 'bad' }
        ],
        nonHdl: [
            { max: 130, label: 'Optimal', cls: 'good' },
            { max: 159, label: 'Above Optimal', cls: 'caution' },
            { max: Infinity, label: 'High', cls: 'bad' }
        ]
    };

    function classify(value, ranges) {
        if (ranges[0].hasOwnProperty('max')) {
            for (var i = 0; i < ranges.length; i++) {
                if (value < ranges[i].max || ranges[i].max === Infinity) return ranges[i];
            }
            return ranges[ranges.length - 1];
        } else {
            for (var j = 0; j < ranges.length; j++) {
                if (value >= ranges[j].min) return ranges[j];
            }
            return ranges[ranges.length - 1];
        }
    }

    function getColorVar(cls) {
        if (cls === 'good') return 'var(--good)';
        if (cls === 'caution') return 'var(--caution)';
        return 'var(--bad)';
    }

    var gender = 'male';
    var genderRow = document.querySelector('[data-group="genderToggle"]');
    if (genderRow) {
        genderRow.addEventListener('toggle-selected', function(e) {
            var active = genderRow.querySelector('.unit-btn.active');
            if (active) gender = active.dataset.value;
        });
    }

    var btn = document.getElementById('calcBtn');
    if (btn) btn.addEventListener('click', calculate);

    function calculate() {
        var tcEl = document.getElementById('inputTC');
        var ldlEl = document.getElementById('inputLDL');
        var hdlEl = document.getElementById('inputHDL');
        var tgEl = document.getElementById('inputTG');
        if (!tcEl || !ldlEl || !hdlEl || !tgEl) return;

        var tc = parseInt(tcEl.value) || 0;
        var ldl = parseInt(ldlEl.value) || 0;
        var hdl = parseInt(hdlEl.value) || 0;
        var tg = parseInt(tgEl.value) || 0;
        if (!tc || !ldl || !hdl || !tg) return;

        var nonHdl = tc - hdl;
        var ratio = hdl > 0 ? tc / hdl : 0;

        var tcResult = classify(tc, RANGES.tc);
        var ldlResult = classify(ldl, RANGES.ldl);
        var hdlRanges = gender === 'female' ? RANGES.hdl_female : RANGES.hdl_male;
        var hdlResult = classify(hdl, hdlRanges);
        var tgResult = classify(tg, RANGES.tg);
        var nonHdlResult = classify(nonHdl, RANGES.nonHdl);

        var optimalCount = 0;
        if (tcResult.cls === 'good') optimalCount++;
        if (ldlResult.cls === 'good') optimalCount++;
        if (hdlResult.cls === 'good') optimalCount++;
        if (tgResult.cls === 'good') optimalCount++;

        var overallLabels = ['Needs Attention', 'Needs Work', 'Getting There', 'Almost There', 'All Clear'];

        var rn = document.getElementById('resultNumber');
        if (rn) rn.textContent = optimalCount + '/4';

        var rv = document.getElementById('resultVerdict');
        if (rv) {
            rv.textContent = overallLabels[optimalCount] + ' markers in range';
            rv.style.color = optimalCount >= 3 ? 'var(--good)' : optimalCount >= 2 ? 'var(--caution)' : 'var(--bad)';
        }

        var el;
        el = document.getElementById('tcStatus');
        if (el) el.textContent = tc + ' mg/dL — ' + tcResult.label;
        el = document.getElementById('ldlStatus');
        if (el) el.textContent = ldl + ' mg/dL — ' + ldlResult.label;
        el = document.getElementById('hdlStatus');
        if (el) el.textContent = hdl + ' mg/dL — ' + hdlResult.label;
        el = document.getElementById('tgStatus');
        if (el) el.textContent = tg + ' mg/dL — ' + tgResult.label;

        // Coach
        var coach = document.getElementById('coachCard');
        if (coach) {
            var concerns = [];
            if (ldlResult.cls !== 'good') concerns.push('LDL at ' + ldl);
            if (hdlResult.cls !== 'good') concerns.push('HDL at ' + hdl);
            if (tgResult.cls !== 'good') concerns.push('Triglycerides at ' + tg);
            if (tcResult.cls !== 'good') concerns.push('Total cholesterol at ' + tc);

            if (optimalCount === 4) {
                coach.innerHTML = '<div class="coach-text">All four markers are in range.<br>TC: <span class="hl">' + tc + '</span>, LDL: <span class="hl">' + ldl + '</span>, HDL: <span class="hl">' + hdl + '</span>, TG: <span class="hl">' + tg + '</span>.<div class="coach-rule">Keep doing what you are doing.</div><div class="coach-advice">Retest in <em>4-6 years</em> unless risk factors change.</div></div>';
            } else {
                coach.innerHTML = '<div class="coach-text">' + optimalCount + ' of 4 markers in range.<br>Areas to watch: <span class="hl">' + concerns.join(', ') + '</span>.<br>Non-HDL: <span class="hl">' + nonHdl + ' mg/dL</span> (' + nonHdlResult.label + ').<div class="coach-rule">' + (optimalCount <= 2 ? 'Bring this panel to your doctor' : 'One or two numbers to focus on') + '</div><div class="coach-advice"><em>Exercise raises HDL</em>, reducing saturated fat lowers LDL, limiting sugar lowers triglycerides.<br>Retest in <em>3-6 months</em>.</div></div>';
            }
        }

        var shareText = 'Lipid Panel: ' + optimalCount + '/4 markers in range\nTC: ' + tc + ' (' + tcResult.label + ')\nLDL: ' + ldl + ' (' + ldlResult.label + ')\nHDL: ' + hdl + ' (' + hdlResult.label + ')\nTG: ' + tg + ' (' + tgResult.label + ')\n\nCheck yours: healthcalculators.xyz/lipid-panel-goals-calculator';
        if (typeof updateShareButtons === 'function') updateShareButtons(shareText);

        if (typeof factoryReveal === 'function') factoryReveal();

        if (typeof hcTrackEvent === 'function') hcTrackEvent('calculator_complete', { calculator_name: 'Lipid Panel Goals Calculator', page_path: '/lipid-panel-goals-calculator' });
    }
})();
