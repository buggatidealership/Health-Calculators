// BMI Calculator — factory-compatible calculation logic
// No DOMContentLoaded (factory loads at page bottom, event already fired)
// Uses factoryReveal() for result animation
// Null-safe on all getElementById calls
(function() {
    var isMetric = false;

    // Unit toggle
    var imperialBtn = document.getElementById('imperialBtn');
    var metricBtn = document.getElementById('metricBtn');
    var imperialInputs = document.getElementById('imperialInputs');
    var metricInputs = document.getElementById('metricInputs');

    if (imperialBtn) imperialBtn.addEventListener('click', function() {
        isMetric = false;
        if (imperialBtn) imperialBtn.classList.add('active');
        if (metricBtn) metricBtn.classList.remove('active');
        if (imperialInputs) imperialInputs.classList.remove('hidden');
        if (metricInputs) metricInputs.classList.add('hidden');
    });
    if (metricBtn) metricBtn.addEventListener('click', function() {
        isMetric = true;
        if (metricBtn) metricBtn.classList.add('active');
        if (imperialBtn) imperialBtn.classList.remove('active');
        if (metricInputs) metricInputs.classList.remove('hidden');
        if (imperialInputs) imperialInputs.classList.add('hidden');
    });

    // Calculate button
    var calcBtn = document.getElementById('calcBtn');
    if (calcBtn) calcBtn.addEventListener('click', calculate);

    function calculate() {
        var weightKg, heightM;

        if (isMetric) {
            var weightKgEl = document.getElementById('weightKg');
            var heightCmEl = document.getElementById('heightCm');
            if (!weightKgEl || !heightCmEl) return;
            weightKg = parseFloat(weightKgEl.value);
            var heightCm = parseFloat(heightCmEl.value);
            if (!weightKg || !heightCm || isNaN(weightKg) || isNaN(heightCm)) return;
            heightM = heightCm / 100;
        } else {
            var weightLbEl = document.getElementById('weightLb');
            var heightFtEl = document.getElementById('heightFt');
            var heightInEl = document.getElementById('heightIn');
            if (!weightLbEl || !heightFtEl) return;
            var weightLb = parseFloat(weightLbEl.value);
            var feet = parseFloat(heightFtEl.value);
            var inches = heightInEl ? (parseFloat(heightInEl.value) || 0) : 0;
            if (!weightLb || !feet || isNaN(weightLb) || isNaN(feet)) return;
            weightKg = weightLb * 0.453592;
            heightM = (feet * 12 + inches) * 0.0254;
        }

        if (heightM <= 0) return;

        // Hide static example
        var staticEx = document.getElementById('staticExample');
        if (staticEx) staticEx.style.display = 'none';

        var bmi = weightKg / (heightM * heightM);
        var bmiRounded = Math.round(bmi * 10) / 10;

        // Category + color + verdict
        var category, color, glowClass, verdict;
        if (bmi < 18.5) {
            category = 'Underweight'; color = 'var(--blue,#60a5fa)'; glowClass = 'glow-blue';
            verdict = 'Your BMI is ' + bmiRounded + ' \u2014 below the healthy range. This may indicate you\'re not getting enough nutrition. A conversation with your doctor can help determine if anything needs attention.';
        } else if (bmi < 25) {
            category = 'Healthy weight'; color = 'var(--accent)'; glowClass = 'glow-good';
            if (bmi < 20) verdict = 'Your BMI is ' + bmiRounded + ' \u2014 in the healthy range, on the lighter end. You\'re doing fine.';
            else if (bmi < 23) verdict = 'Your BMI is ' + bmiRounded + ' \u2014 right in the sweet spot of the healthy range. This is associated with the lowest health risk.';
            else verdict = 'Your BMI is ' + bmiRounded + ' \u2014 in the healthy range. You\'re in good shape by this measure.';
        } else if (bmi < 30) {
            category = 'Overweight'; color = 'var(--caution,#f59e0b)'; glowClass = 'glow-caution';
            if (bmi < 27) verdict = 'Your BMI is ' + bmiRounded + ' \u2014 slightly above the healthy range. For many people, especially those who exercise regularly, this is nothing to worry about. BMI can\'t tell the difference between muscle and fat.';
            else verdict = 'Your BMI is ' + bmiRounded + ' \u2014 above the healthy range. This is one data point, not a diagnosis. If you\'re concerned, waist circumference and body fat percentage give a fuller picture.';
        } else {
            category = 'Above healthy range'; color = 'var(--warn,#f97316)'; glowClass = 'glow-warn';
            verdict = 'Your BMI is ' + bmiRounded + ' \u2014 above the healthy range. BMI is a screening tool, not the full picture. It doesn\'t account for muscle, bone density, or body composition. Consider talking with a healthcare provider about what\'s right for you.';
        }

        // Display result
        var resultNum = document.getElementById('resultNumber');
        if (resultNum) {
            resultNum.textContent = bmiRounded;
            resultNum.className = 'result-number ' + glowClass;
            resultNum.style.color = color;
        }

        var verdictEl = document.getElementById('resultVerdict');
        if (verdictEl) {
            verdictEl.textContent = verdict;
            verdictEl.style.color = 'var(--text-dim,#94a3b8)';
        }

        // Gauge marker position (15-40 range)
        var gaugeMin = 15, gaugeMax = 40;
        var clamped = Math.max(gaugeMin, Math.min(gaugeMax, bmi));
        var pct = ((clamped - gaugeMin) / (gaugeMax - gaugeMin)) * 100;
        var marker = document.getElementById('gaugeMarker');
        if (marker) {
            marker.style.left = pct + '%';
            marker.style.color = color;
        }

        // Healthy weight range
        var healthyMinKg = 18.5 * heightM * heightM;
        var healthyMaxKg = 24.9 * heightM * heightM;
        var rangeText, noteText;

        if (isMetric) {
            rangeText = healthyMinKg.toFixed(1) + ' \u2013 ' + healthyMaxKg.toFixed(1) + ' kg';
        } else {
            rangeText = Math.round(healthyMinKg / 0.453592) + ' \u2013 ' + Math.round(healthyMaxKg / 0.453592) + ' lbs';
        }

        if (bmi < 18.5) {
            var diff = isMetric ? (healthyMinKg - weightKg).toFixed(1) + ' kg' : Math.round((healthyMinKg - weightKg) / 0.453592) + ' lbs';
            noteText = 'You\'d need to gain about ' + diff + ' to reach the healthy range.';
        } else if (bmi >= 25) {
            var diff = isMetric ? (weightKg - healthyMaxKg).toFixed(1) + ' kg' : Math.round((weightKg - healthyMaxKg) / 0.453592) + ' lbs';
            noteText = 'The healthy range starts about ' + diff + ' lower \u2014 but remember, BMI doesn\'t measure what that weight is made of.';
        } else {
            noteText = 'You\u2019re within this range. Nice.';
        }

        var rangeValue = document.getElementById('rangeValue');
        if (rangeValue) rangeValue.textContent = rangeText;
        var rangeNote = document.getElementById('rangeNote');
        if (rangeNote) rangeNote.textContent = noteText;

        // Coach card
        var age = 30;
        var ageEl = document.getElementById('age');
        if (ageEl) age = parseInt(ageEl.value) || 30;
        var sex = 'male';
        var sexEl = document.getElementById('sex');
        if (sexEl) sex = sexEl.value;

        var coachHTML = '<div class="coach-text">';

        if (bmi >= 18.5 && bmi < 25) {
            coachHTML += 'Your BMI of <span class="hl">' + bmiRounded + '</span> is in the healthy range.<br><span class="dim">For ' + (sex === 'female' ? 'women' : 'men') + (age >= 65 ? ' over 65' : '') + ', this is associated with the lowest risk of weight-related health problems.</span>';
            coachHTML += '<div class="coach-rule">BMI is a screening tool, not a diagnosis.<br>It tells you where to look, not what\'s wrong.</div>';
            coachHTML += '<div class="coach-advice">If you want a fuller picture of your health, consider getting your <em>body fat percentage</em> measured (via DEXA scan or calipers) and checking your <em>waist circumference</em> &mdash; these tell you what BMI can\'t.</div>';
        } else if (bmi < 18.5) {
            coachHTML += 'Your BMI of <span class="hl">' + bmiRounded + '</span> suggests you may be underweight.<br><span class="dim">This could indicate nutritional deficiency, high metabolism, or an underlying condition.</span>';
            coachHTML += '<div class="coach-rule">BMI is a screening tool, not a diagnosis.<br>It tells you where to look, not what\'s wrong.</div>';
            coachHTML += '<div class="coach-advice">Consider talking with a healthcare provider. They can check whether your weight is appropriate for <em>your body</em>, not just a formula.' + (age >= 65 ? ' For adults over 65, slightly higher BMI values (23\u201327) are often associated with better outcomes.' : '') + '</div>';
        } else {
            coachHTML += 'Your BMI of <span class="hl">' + bmiRounded + '</span> is above the healthy range.<br><span class="dim">But here\'s what the number doesn\'t tell you: whether that weight is muscle, bone, or fat. And where you carry weight matters more than how much.</span>';
            coachHTML += '<div class="coach-rule">BMI is a screening tool, not a diagnosis.<br>It tells you where to look, not what\'s wrong.</div>';
            coachHTML += '<div class="coach-advice">Two better numbers to know: your <em>waist circumference</em> (risk increases above ' + (sex === 'female' ? '35 inches / 88 cm for women' : '40 inches / 102 cm for men') + ') and your <em>body fat percentage</em>. These give you the full picture that BMI misses.' + (age >= 65 ? ' Note: for adults over 65, slightly higher BMI (23\u201327) is actually associated with better outcomes.' : '') + '</div>';
        }

        coachHTML += '</div>';
        var coachCard = document.getElementById('coachCard');
        if (coachCard) coachCard.innerHTML = coachHTML;

        // Share text (privacy-conscious for high BMI)
        var shareText;
        if (bmi >= 30) {
            shareText = 'BMI is a screening tool, not a diagnosis.\n\nIt can\'t tell the difference between muscle and fat. Over 54 million Americans classified "overweight" by BMI are actually metabolically healthy.\n\nKnow your waist circumference and body fat % for the full picture.\n\nCheck yours: healthcalculators.xyz/bmi-calculator';
        } else {
            shareText = 'My BMI is ' + bmiRounded + ' \u2014 ' + category.toLowerCase() + '.\n\nHealthy weight range for my height: ' + rangeText + '\n\nWhat\'s yours? healthcalculators.xyz/bmi-calculator';
        }
        if (typeof updateShareButtons === 'function') updateShareButtons(shareText);

        // Use factoryReveal for staggered animation
        if (typeof factoryReveal === 'function') {
            factoryReveal();
        } else {
            document.querySelectorAll('.hidden-section').forEach(function(el) { el.classList.remove('hidden-section'); });
            var rs = document.getElementById('result-section');
            if (rs) rs.scrollIntoView({ behavior: 'smooth' });
        }

        // Track calculator completion
        if (typeof hcTrackEvent === 'function') {
            hcTrackEvent('calculator_complete', { calculator_name: 'BMI Calculator', page_path: '/bmi-calculator' });
        }
    }
})();
