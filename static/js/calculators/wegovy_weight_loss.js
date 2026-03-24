// Wegovy Weight Loss Calculator — factory-compatible
// STEP 1: 14.9% at 68 weeks (injectable 2.4mg), OASIS: ~15% (oral 50mg)
(function() {
var currentUnits = 'metric';

// Unit toggle via factory radio_row
var unitRow = document.querySelector('[data-group="units"]');
if (unitRow) {
    unitRow.querySelectorAll('.unit-btn').forEach(function(btn) {
        btn.addEventListener('click', function() {
            unitRow.querySelectorAll('.unit-btn').forEach(function(b) { b.classList.remove('active'); });
            this.classList.add('active');
            currentUnits = this.dataset.value;
            toggleUnitFields();
            calculateBMI();
        });
    });
}

function toggleUnitFields() {
    var weightKgEl = document.getElementById('weight-kg');
    var weightLbEl = document.getElementById('weight-lb');
    var heightCmEl = document.getElementById('height-cm');
    var heightFtEl = document.getElementById('height-ft');

    if (currentUnits === 'metric') {
        if (weightKgEl) weightKgEl.closest('.form-group').style.display = '';
        if (weightLbEl) weightLbEl.closest('.form-group').style.display = 'none';
        if (heightCmEl) heightCmEl.closest('.form-group').style.display = '';
        if (heightFtEl) heightFtEl.closest('.form-row').style.display = 'none';
    } else {
        if (weightKgEl) weightKgEl.closest('.form-group').style.display = 'none';
        if (weightLbEl) weightLbEl.closest('.form-group').style.display = '';
        if (heightCmEl) heightCmEl.closest('.form-group').style.display = 'none';
        if (heightFtEl) heightFtEl.closest('.form-row').style.display = '';
    }
}

toggleUnitFields();

var bmiField = document.getElementById('bmi');
if (bmiField) bmiField.readOnly = true;

['weight-kg', 'weight-lb', 'height-cm', 'height-ft', 'height-in'].forEach(function(id) {
    var el = document.getElementById(id);
    if (el) el.addEventListener('input', calculateBMI);
});

function getWeightKg() {
    if (currentUnits === 'metric') return parseFloat((document.getElementById('weight-kg') || {}).value);
    var lb = parseFloat((document.getElementById('weight-lb') || {}).value);
    return lb ? lb / 2.20462 : NaN;
}

function getHeightM() {
    if (currentUnits === 'metric') {
        var cm = parseFloat((document.getElementById('height-cm') || {}).value);
        return cm ? cm / 100 : NaN;
    }
    var ft = parseFloat((document.getElementById('height-ft') || {}).value) || 0;
    var inches = parseFloat((document.getElementById('height-in') || {}).value) || 0;
    return (ft * 12 + inches) * 0.0254;
}

function calculateBMI() {
    var weightKg = getWeightKg();
    var heightM = getHeightM();
    if (weightKg && heightM && heightM > 0) {
        var bmiEl = document.getElementById('bmi');
        if (bmiEl) bmiEl.value = (weightKg / (heightM * heightM)).toFixed(1);
    }
}

function formatWeight(kg) {
    if (currentUnits === 'imperial') return (kg * 2.20462).toFixed(1) + ' lbs';
    return kg.toFixed(1) + ' kg';
}

// Toggle titration display based on form type
var formTypeEl = document.getElementById('form-type');
if (formTypeEl) {
    formTypeEl.addEventListener('change', function() {
        var injectable = document.getElementById('titration-schedule');
        var oral = document.getElementById('titration-oral');
        var title = document.getElementById('titration-title');
        if (this.value === 'oral') {
            if (injectable) injectable.style.display = 'none';
            if (oral) oral.style.display = 'block';
            if (title) title.textContent = 'Wegovy Dose Titration Schedule (Oral Pill)';
        } else {
            if (injectable) injectable.style.display = 'block';
            if (oral) oral.style.display = 'none';
            if (title) title.textContent = 'Wegovy Dose Titration Schedule (Injectable)';
        }
    });
}

var calcBtn = document.getElementById('calcBtn');
if (calcBtn) calcBtn.addEventListener('click', calculate);

function calculate() {
    var weightKg = getWeightKg();
    var heightM = getHeightM();

    if (!weightKg || !heightM || heightM <= 0) return;

    var ageEl = document.getElementById('age');
    var age = ageEl ? parseInt(ageEl.value) : 0;
    if (ageEl && (!age || age < 18)) return;

    var sexEl = document.getElementById('sex');
    var formTypeSelect = document.getElementById('form-type');
    var formType = formTypeSelect ? formTypeSelect.value : 'injectable';
    var durationEl = document.getElementById('duration');
    var duration = durationEl ? parseInt(durationEl.value) : 68;
    var activityEl = document.getElementById('activity');
    var activity = activityEl ? activityEl.value : 'moderate';

    var bmi = (weightKg / (heightM * heightM)).toFixed(1);

    // Base percent from clinical trials
    var basePercent68;
    var trialBasis;
    if (formType === 'injectable') {
        basePercent68 = 0.149;
        trialBasis = 'STEP 1 Trial (injectable 2.4 mg)';
    } else {
        basePercent68 = 0.150;
        trialBasis = 'OASIS Trial (oral 50 mg)';
    }

    // Logarithmic curve
    var lossAtDuration = basePercent68 * Math.log(1 + duration) / Math.log(1 + 68);
    lossAtDuration = Math.min(0.25, lossAtDuration);

    var activityMultiplier = 1.0;
    switch (activity) {
        case 'sedentary':   activityMultiplier = 0.90; break;
        case 'light':       activityMultiplier = 0.95; break;
        case 'moderate':    activityMultiplier = 1.00; break;
        case 'active':      activityMultiplier = 1.05; break;
        case 'very-active': activityMultiplier = 1.10; break;
    }

    var weightLossPercent = Math.min(0.25, lossAtDuration * activityMultiplier);
    var weightLossKg = weightKg * weightLossPercent;
    var finalWeightKg = weightKg - weightLossKg;
    var finalBMI = (finalWeightKg / (heightM * heightM)).toFixed(1);

    // Display
    var el;
    el = document.getElementById('resultNumber');
    if (el) el.textContent = formatWeight(weightLossKg);

    el = document.getElementById('resultVerdict');
    if (el) el.textContent = (weightLossPercent * 100).toFixed(1) + '% of starting body weight';

    el = document.getElementById('startWeight');
    if (el) el.textContent = formatWeight(weightKg);
    el = document.getElementById('finalWeight');
    if (el) el.textContent = formatWeight(finalWeightKg);
    el = document.getElementById('startBMI');
    if (el) el.textContent = bmi;
    el = document.getElementById('finalBMI');
    if (el) el.textContent = finalBMI;
    el = document.getElementById('loss-pct-label');
    if (el) el.textContent = (weightLossPercent * 100).toFixed(1) + '% of starting body weight';
    el = document.getElementById('duration-display');
    if (el && durationEl) el.textContent = durationEl.options[durationEl.selectedIndex].text;
    el = document.getElementById('form-display');
    if (el && formTypeSelect) el.textContent = formTypeSelect.options[formTypeSelect.selectedIndex].text;
    el = document.getElementById('activity-display');
    if (el && activityEl) el.textContent = activityEl.options[activityEl.selectedIndex].text;
    el = document.getElementById('trial-basis');
    if (el) el.textContent = trialBasis;

    // Toggle titration
    var injectable = document.getElementById('titration-schedule');
    var oral = document.getElementById('titration-oral');
    var titrationTitle = document.getElementById('titration-title');
    if (formType === 'oral') {
        if (injectable) injectable.style.display = 'none';
        if (oral) oral.style.display = 'block';
        if (titrationTitle) titrationTitle.textContent = 'Wegovy Dose Titration Schedule (Oral Pill)';
    } else {
        if (injectable) injectable.style.display = 'block';
        if (oral) oral.style.display = 'none';
        if (titrationTitle) titrationTitle.textContent = 'Wegovy Dose Titration Schedule (Injectable)';
    }

    // Reveal results via factory
    if (typeof factoryReveal === 'function') factoryReveal();

    if (typeof showNextSteps === 'function' && typeof collectUserData === 'function') {
        showNextSteps('wegovy', collectUserData());
    }

    // Chart
    ensureChartJs(function() { createChart(weightKg, finalWeightKg, duration, weightLossPercent); });
}

function ensureChartJs(cb) {
    if (typeof Chart !== 'undefined') return cb();
    var s = document.createElement('script');
    s.src = 'https://cdn.jsdelivr.net/npm/chart.js';
    s.onload = cb;
    document.head.appendChild(s);
}

function createChart(startWeightKg, finalWeightKg, duration, totalLossPercent) {
    var canvas = document.getElementById('chart');
    if (!canvas) return;
    var ctx = canvas.getContext('2d');
    if (window.weightChart) window.weightChart.destroy();

    var labels = [];
    var data = [];
    var steps = 8;
    var totalLossKg = startWeightKg - finalWeightKg;
    var logDenom = Math.log(1 + duration);

    for (var i = 0; i <= steps; i++) {
        var weeks = Math.round((i / steps) * duration);
        labels.push(weeks + ' wk');
        var progress = Math.log(1 + weeks) / logDenom;
        var currentWeightKg = startWeightKg - totalLossKg * progress;
        if (currentUnits === 'imperial') {
            data.push((currentWeightKg * 2.20462).toFixed(1));
        } else {
            data.push(currentWeightKg.toFixed(1));
        }
    }

    var unitLabel = currentUnits === 'metric' ? 'kg' : 'lbs';
    window.weightChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Projected Weight (' + unitLabel + ')',
                data: data,
                borderColor: 'var(--accent)',
                backgroundColor: 'rgba(var(--accent-rgb), 0.1)',
                fill: true,
                tension: 0.4,
                pointRadius: 4,
                pointBackgroundColor: 'var(--accent)'
            }]
        },
        options: {
            responsive: true,
            plugins: { legend: { display: true, position: 'top' } },
            scales: {
                y: {
                    beginAtZero: false,
                    min: Math.floor(parseFloat(data[data.length - 1]) - 5),
                    title: { display: true, text: 'Weight (' + unitLabel + ')' }
                },
                x: { title: { display: true, text: 'Treatment Duration' } }
            }
        }
    });
}
})();
