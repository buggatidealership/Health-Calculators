// Vitamin D Conversion Calculator — calculation logic
(function() {
    var CONVERSION_FACTOR = 2.496;
    var currentUnit = 'ng'; // 'ng' or 'nmol'

    // Tier definitions (in ng/mL)
    var TIERS = [
        { name: 'Deficient', key: 'deficient', maxNg: 20, color: '#ef4444', cls: 'glow-bad', tierCls: 'tier-deficient',
          plain: 'This level is below the deficiency threshold. Most guidelines recommend discussing supplementation with your healthcare provider.',
          interpretation: 'Vitamin D deficiency is associated with bone loss, muscle weakness, and immune dysfunction. The Endocrine Society recommends supplementation to reach at least 30 ng/mL.' },
        { name: 'Insufficient', key: 'insufficient', maxNg: 30, color: '#f59e0b', cls: 'glow-caution', tierCls: 'tier-insufficient',
          plain: 'Your level is below the sufficient range but above frank deficiency. Many practitioners recommend a modest supplement to bring this up.',
          interpretation: 'The 20\u201329 ng/mL range is considered insufficient by the Endocrine Society. You are not deficient, but your stores may not be optimal for bone health and immune function.' },
        { name: 'Sufficient', key: 'sufficient', maxNg: 100, color: '#14b8a6', cls: 'glow-good', tierCls: 'tier-sufficient',
          plain: 'Your level is in the sufficient range. No supplementation changes are typically needed at this level.',
          interpretation: 'This is the target range recommended by the Endocrine Society (30\u2013100 ng/mL). Some researchers consider 40\u201360 ng/mL optimal, but there is no consensus above 30.' },
        { name: 'Potentially Toxic', key: 'toxic', maxNg: Infinity, color: '#ef4444', cls: 'glow-bad', tierCls: 'tier-toxic',
          plain: 'This level is above the safe upper range. Vitamin D toxicity can cause hypercalcemia. Consult your healthcare provider.',
          interpretation: 'Levels above 100 ng/mL (250 nmol/L) carry risk of toxicity, including hypercalcemia, nausea, and kidney damage. This is almost always from supplementation, not sun exposure.' }
    ];

    function getTier(ngValue) {
        for (var i = 0; i < TIERS.length; i++) {
            if (ngValue < TIERS[i].maxNg) return TIERS[i];
        }
        return TIERS[TIERS.length - 1];
    }

    function convert(value, fromUnit) {
        if (fromUnit === 'ng') {
            return { ng: value, nmol: value * CONVERSION_FACTOR };
        } else {
            return { ng: value / CONVERSION_FACTOR, nmol: value };
        }
    }

    function formatNum(n) {
        return n < 10 ? n.toFixed(1) : Math.round(n);
    }

    // Unit toggle (factory radio_row: data-group="unitToggle", data-value="ng"/"nmol")
    var unitRow = document.querySelector('[data-group="unitToggle"]');
    if (unitRow) {
        unitRow.querySelectorAll('.unit-btn').forEach(function(btn) {
            btn.addEventListener('click', function() {
                currentUnit = this.dataset.value;
                unitRow.querySelectorAll('.unit-btn').forEach(function(b) { b.classList.remove('active'); });
                this.classList.add('active');
                runCalculation();
            });
        });
    }

    // Calculate on button click
    var calcBtn = document.getElementById('calcBtn');
    if (calcBtn) {
        calcBtn.addEventListener('click', runCalculation);
    }

    function runCalculation() {
        var rawValue = parseFloat(document.getElementById('vitdInput').value);
        if (!rawValue || rawValue <= 0) {
            document.getElementById('result-section').classList.add('hidden-section');
            document.getElementById('coach-section').classList.add('hidden-section');
            var sr = document.getElementById('shareRow');
            if (sr) sr.style.display = 'none';
            return;
        }

        // Hide static example
        var staticEx = document.getElementById('staticExample');
        if (staticEx) staticEx.style.display = 'none';

        var vals = convert(rawValue, currentUnit);
        var ng = vals.ng, nmol = vals.nmol;
        var tier = getTier(ng);

        // Determine which value to show big (the converted one)
        var showNmol = (currentUnit === 'ng');
        var bigValue = showNmol ? nmol : ng;
        var bigUnit = showNmol ? 'nmol/L' : 'ng/mL';

        // Result section
        document.getElementById('resultNumber').textContent = formatNum(bigValue);
        document.getElementById('resultNumber').className = 'result-number ' + tier.cls;
        var unitEl = document.querySelector('.factory-result .result-unit') || document.getElementById('resultUnit');
        if (unitEl) unitEl.textContent = bigUnit;
        var equalsEl = document.getElementById('resultEquals');
        if (equalsEl) equalsEl.innerHTML =
            '<span class="val">' + formatNum(ng) + ' ng/mL</span> = <span class="val">' + formatNum(nmol) + ' nmol/L</span>';

        var tierEl = document.getElementById('resultTier');
        if (tierEl) {
            tierEl.textContent = tier.name;
            tierEl.className = 'result-tier ' + tier.tierCls;
        }
        var verdictEl = document.getElementById('resultVerdict');
        if (verdictEl) {
            verdictEl.textContent = tier.name;
            verdictEl.className = 'result-verdict ' + tier.tierCls;
        }

        var plainEl = document.getElementById('resultPlain');
        if (plainEl) plainEl.textContent = tier.plain;

        // Highlight active tier in reference table
        document.querySelectorAll('#refTable tbody tr').forEach(function(row) {
            if (row.dataset.tier === tier.key) {
                row.classList.add('active-tier');
            } else {
                row.classList.remove('active-tier');
            }
        });

        // Coach interpretation
        var coachInterp = document.getElementById('coachInterpretation');
        var coachCard = document.getElementById('coachCard');
        var interpHtml = '<p>Your level of <em>' + formatNum(ng) + ' ng/mL</em> (' + formatNum(nmol) + ' nmol/L) puts you in the <em>' + tier.name.toLowerCase() + '</em> range. ' + tier.interpretation + '</p>';
        if (coachInterp) {
            coachInterp.innerHTML = interpHtml;
        } else if (coachCard) {
            coachCard.innerHTML = interpHtml;
        }

        // Share text
        var shareText = 'My vitamin D level: ' + formatNum(ng) + ' ng/mL (' + formatNum(nmol) + ' nmol/L) \u2014 ' + tier.name + '.\n\nThe rule: multiply ng/mL by 2.5 to get nmol/L.\n\nCheck yours: healthcalculators.xyz/vitamin-d-conversion-calculator';
        updateShareButtons(shareText);

        // Reveal results
        if (typeof factoryReveal === 'function') {
            if (!window._hasScrolledToResult) {
                window._hasScrolledToResult = true;
                factoryReveal();
            } else {
                // Already revealed, just update classes
                document.querySelectorAll('.factory-result .result-number, .factory-result .result-unit, .factory-result .result-verdict').forEach(function(el) { el.classList.add('revealed'); });
                document.querySelectorAll('.factory-breakdown .detail-card').forEach(function(el) { el.classList.add('revealed'); });
            }
        } else {
            document.querySelectorAll('.hidden-section').forEach(function(el) { el.classList.remove('hidden-section'); });
        }

        // Track calculator completion
        if (typeof hcTrackEvent === 'function') {
            hcTrackEvent('calculator_complete', {
                calculator_name: 'Vitamin D Conversion Calculator',
                page_path: '/vitamin-d-conversion-calculator'
            });
        }
    }
})();
