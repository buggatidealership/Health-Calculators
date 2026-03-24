// Vitamin D Intake Calculator — factory JS (IIFE, null-safe, factoryReveal)
(function() {
    var selectedSun = 'moderate';
    var selectedTarget = 40;

    // Expose selection handlers for inline onclick
    window._vitD = {
        selectSun: function(el) {
            document.querySelectorAll('.sun-card').forEach(function(c) { c.classList.remove('selected'); });
            el.classList.add('selected');
            selectedSun = el.dataset.sun;
        },
        selectTarget: function(el) {
            document.querySelectorAll('.target-card').forEach(function(c) { c.classList.remove('selected'); });
            el.classList.add('selected');
            selectedTarget = parseInt(el.dataset.target);
        }
    };

    var calcBtn = document.getElementById('calcBtn');
    if (calcBtn) calcBtn.addEventListener('click', calculate);

    function calculate() {
        var ageEl = document.getElementById('inputAge');
        var weightEl = document.getElementById('inputWeight');
        var unitEl = document.getElementById('weightUnit');
        var levelEl = document.getElementById('inputLevel');
        if (!ageEl || !weightEl || !unitEl) return;

        var age = parseInt(ageEl.value);
        var weightVal = parseFloat(weightEl.value);
        var weightUnit = unitEl.value;
        var levelInput = levelEl ? levelEl.value : '';
        var currentLevel = levelInput ? parseFloat(levelInput) : null;

        if (isNaN(age) || age < 0 || age > 120) { alert('Please enter a valid age (0-120).'); return; }
        if (isNaN(weightVal) || weightVal <= 0) { alert('Please enter a valid weight.'); return; }

        // Convert weight to kg
        var weightKg = weightUnit === 'lbs' ? weightVal * 0.4536 : weightVal;
        var bmi = weightKg / Math.pow(1.7, 2); // rough estimate with avg height

        // Base recommendation by age (IOM RDA)
        var baseIU;
        var upperLimit;
        if (age < 1) {
            baseIU = 400;
            upperLimit = 1000;
        } else if (age <= 8) {
            baseIU = 600;
            upperLimit = 2500;
        } else if (age <= 70) {
            baseIU = 600;
            upperLimit = 4000;
        } else {
            baseIU = 800;
            upperLimit = 4000;
        }

        // Sun exposure adjustment
        var sunAdj = 0;
        if (selectedSun === 'low') sunAdj = 400;
        else if (selectedSun === 'moderate') sunAdj = 0;
        else if (selectedSun === 'high') sunAdj = -400;

        // BMI adjustment (obesity increases needs)
        var bmiAdj = 0;
        if (bmi > 30) bmiAdj = 400;
        else if (bmi > 25) bmiAdj = 200;

        // Age adjustment for older adults (skin produces less)
        var ageAdj = 0;
        if (age >= 65) ageAdj = 400;

        // Level-based calculation
        var levelAdj = 0;
        var levelCategory = 'unknown';
        var retestWeeks = 12;
        if (currentLevel !== null) {
            if (currentLevel < 20) {
                levelCategory = 'deficient';
                levelAdj = (selectedTarget - currentLevel) * 100;
                retestWeeks = 8;
            } else if (currentLevel < 30) {
                levelCategory = 'insufficient';
                levelAdj = (selectedTarget - currentLevel) * 100;
                retestWeeks = 12;
            } else if (currentLevel >= 30 && currentLevel < selectedTarget) {
                levelCategory = 'sufficient';
                levelAdj = (selectedTarget - currentLevel) * 100;
                retestWeeks = 12;
            } else if (currentLevel >= selectedTarget && currentLevel <= 80) {
                levelCategory = 'optimal';
                levelAdj = 0;
                retestWeeks = 24;
            } else if (currentLevel > 80) {
                levelCategory = 'high';
                levelAdj = -600;
                retestWeeks = 8;
            }
        } else {
            // No level known: use moderate supplementation assumption
            levelAdj = 600;
        }

        var totalIU = baseIU + sunAdj + bmiAdj + ageAdj + levelAdj;

        // Clamp
        totalIU = Math.max(400, Math.min(totalIU, upperLimit));
        // Round to nearest 100
        totalIU = Math.round(totalIU / 100) * 100;

        var mcg = (totalIU * 0.025).toFixed(1);

        // Determine verdict
        var verdictText = '';
        var verdictColor = 'var(--accent)';
        var resultClass = 'glow-good';

        if (currentLevel !== null) {
            if (levelCategory === 'deficient') {
                verdictText = 'Your level is deficient. Prioritize supplementation.';
                verdictColor = 'var(--bad, #ef4444)';
                resultClass = 'glow-bad';
            } else if (levelCategory === 'insufficient') {
                verdictText = 'Your level is low. A boost will help.';
                verdictColor = 'var(--caution, #f59e0b)';
                resultClass = 'glow-caution';
            } else if (levelCategory === 'sufficient') {
                verdictText = 'You\'re sufficient but have room to optimize.';
            } else if (levelCategory === 'optimal') {
                verdictText = 'You\'re in a great range. Maintain it.';
            } else if (levelCategory === 'high') {
                verdictText = 'Your level is high. Consider reducing intake.';
                verdictColor = 'var(--caution, #f59e0b)';
                resultClass = 'glow-caution';
            }
        } else {
            verdictText = 'Recommended maintenance dose for your profile';
        }

        // Display result (null-safe)
        var resultNum = document.getElementById('resultNumber');
        if (resultNum) {
            resultNum.textContent = totalIU.toLocaleString();
            resultNum.className = 'result-number ' + resultClass;
        }
        var verdict = document.getElementById('resultVerdict');
        if (verdict) {
            verdict.textContent = verdictText;
            verdict.style.color = verdictColor;
        }

        // Details (null-safe)
        var detailMcg = document.getElementById('detailMcg');
        if (detailMcg) detailMcg.textContent = mcg + ' mcg';

        var detailUpper = document.getElementById('detailUpperLimit');
        if (detailUpper) detailUpper.textContent = upperLimit.toLocaleString() + ' IU';

        var detailLevel = document.getElementById('detailCurrentLevel');
        if (detailLevel) detailLevel.textContent = currentLevel !== null ? currentLevel + ' ng/mL' : 'Not provided';

        var detailRetest = document.getElementById('detailRetest');
        if (detailRetest) detailRetest.textContent = retestWeeks + ' weeks';

        // Level bar
        var levelBarContainer = document.getElementById('levelBarContainer');
        if (levelBarContainer) {
            if (currentLevel !== null) {
                levelBarContainer.style.display = 'block';
                var maxLevel = 100;
                var pct = Math.min(currentLevel / maxLevel * 100, 100);
                var marker = document.getElementById('levelMarker');
                if (marker) marker.style.left = pct + '%';
            } else {
                levelBarContainer.style.display = 'none';
            }
        }

        // Coach card (null-safe)
        var coachCard = document.getElementById('coachCard');
        if (coachCard) {
            var coachHTML = '<div class="coach-text">';
            if (currentLevel !== null) {
                coachHTML += 'Your level is <span class="hl">' + currentLevel + ' ng/mL</span>.<br>';
                coachHTML += 'You\'re aiming for <span class="hl">' + selectedTarget + ' ng/mL</span>.<br>';
                if (currentLevel < selectedTarget) {
                    var deficit = selectedTarget - currentLevel;
                    coachHTML += 'That\'s a <span class="hl">' + deficit + ' ng/mL</span> gap to close.';
                } else {
                    coachHTML += 'You\'re already <span class="hl">at or above</span> your target.';
                }
            } else {
                coachHTML += 'No blood level entered <span class="dim">&mdash; this is a general estimate.</span><br>';
                coachHTML += 'For a precise dose, <span class="hl">get a 25(OH)D blood test</span>.';
            }
            coachHTML += '</div>';
            coachHTML += '<div class="coach-rule">The rule: most adults need 600-2,000 IU daily.</div>';
            coachHTML += '<div class="coach-advice">';
            coachHTML += 'Take <em>' + totalIU.toLocaleString() + ' IU of D3</em> daily with a fat-containing meal.<br>';
            coachHTML += 'Pair with <em>vitamin K2</em> and <em>magnesium</em> for best absorption.<br>';
            coachHTML += 'Retest your blood level in <em>' + retestWeeks + ' weeks</em>.';
            coachHTML += '</div>';
            coachCard.innerHTML = coachHTML;
        }

        // Share text
        var shareText;
        if (currentLevel !== null) {
            shareText = 'My vitamin D level: ' + currentLevel + ' ng/mL\nTarget: ' + selectedTarget + ' ng/mL\nRecommended dose: ' + totalIU.toLocaleString() + ' IU/day\n\nCalculator: healthcalculators.xyz/vitamin-d-intake-calculator';
        } else {
            shareText = 'My recommended vitamin D dose: ' + totalIU.toLocaleString() + ' IU/day\n\nMost adults need 600-2,000 IU. Get your blood tested to personalize.\n\nCalculator: healthcalculators.xyz/vitamin-d-intake-calculator';
        }
        if (typeof updateShareButtons === 'function') {
            updateShareButtons(shareText);
        }

        // Factory reveal (staggered animation + unhide sections)
        if (typeof factoryReveal === 'function') {
            factoryReveal();
        }

        // Track
        if (typeof hcTrackEvent === 'function') {
            hcTrackEvent('calculator_complete', {
                calculator_name: 'Vitamin D Intake Calculator',
                page_path: '/vitamin-d-intake-calculator'
            });
        }
    }
})();
