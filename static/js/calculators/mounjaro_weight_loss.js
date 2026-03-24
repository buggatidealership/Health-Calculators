// Mounjaro Weight Loss Calculator — factory-compatible
// SURMOUNT-1 trial: 15% (5mg), 19.5% (10mg), 22.5% (15mg) at 72 weeks
(function() {
var currentUnits = 'metric';

// Dose-dependent weight loss at 72 weeks (SURMOUNT-1)
var DOSE_LOSS_72W = {
    '2.5': 0.06,
    '5':   0.15,
    '7.5': 0.173,
    '10':  0.195,
    '12.5': 0.21,
    '15':  0.225
};

var ACTIVITY_MOD = {
    'sedentary': 0.85,
    'light': 0.95,
    'moderate': 1.0,
    'very': 1.10
};

var DIET_MOD = {
    'poor': 0.70,
    'moderate': 0.85,
    'good': 1.0,
    'excellent': 1.15
};

function cumulativeFraction(monthIndex, totalMonths) {
    var refMonths = 18;
    var effectiveT = Math.min(monthIndex, totalMonths);
    if (effectiveT <= 0) return 0;
    if (totalMonths <= 0) return 0;
    var fraction = Math.log(1 + effectiveT) / Math.log(1 + refMonths);
    var maxFraction = Math.log(1 + totalMonths) / Math.log(1 + refMonths);
    if (maxFraction > 0) fraction = fraction / maxFraction;
    return Math.min(fraction, 1.0);
}

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

// Make BMI readonly
var bmiField = document.getElementById('bmi');
if (bmiField) bmiField.readOnly = true;

// BMI auto-calc on input
['weight-kg', 'weight-lb', 'height-cm', 'height-ft', 'height-in'].forEach(function(id) {
    var el = document.getElementById(id);
    if (el) el.addEventListener('input', calculateBMI);
});

function getWeightKg() {
    if (currentUnits === 'metric') {
        return parseFloat((document.getElementById('weight-kg') || {}).value);
    }
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
        var bmi = (weightKg / (heightM * heightM)).toFixed(1);
        var bmiEl = document.getElementById('bmi');
        if (bmiEl) bmiEl.value = bmi;
    }
}

function formatWeight(kg) {
    if (currentUnits === 'imperial') return (kg * 2.20462).toFixed(1) + ' lbs';
    return kg.toFixed(1) + ' kg';
}

// Calculate button
var calcBtn = document.getElementById('calcBtn');
if (calcBtn) calcBtn.addEventListener('click', calculate);

function calculate() {
    var weightKg = getWeightKg();
    var heightM = getHeightM();
    var ageEl = document.getElementById('age');
    var age = ageEl ? parseInt(ageEl.value) : 0;

    if (!weightKg || weightKg <= 0 || !heightM || heightM <= 0) return;
    if (ageEl && (!age || age < 18)) return;

    var doseEl = document.getElementById('dose');
    var dose = doseEl ? doseEl.value : '5';
    var durationEl = document.getElementById('duration');
    var durationMonths = durationEl ? parseInt(durationEl.value) : 12;
    var activityEl = document.getElementById('activity');
    var activity = activityEl ? activityEl.value : 'moderate';
    var dietEl = document.getElementById('diet');
    var diet = dietEl ? dietEl.value : 'good';

    var bmi = (weightKg / (heightM * heightM)).toFixed(1);

    var baseLoss72w = DOSE_LOSS_72W[dose] || 0.15;
    var durationFraction = Math.log(1 + durationMonths) / Math.log(1 + 18);
    var scaledLoss = baseLoss72w * Math.min(durationFraction, 1.05);

    var actMod = ACTIVITY_MOD[activity] || 1.0;
    var dietMod = DIET_MOD[diet] || 1.0;
    var adjustedLoss = scaledLoss * actMod * dietMod;

    var lossLow = adjustedLoss * 0.85;
    var lossHigh = adjustedLoss * 1.15;
    var weightLossKgMid = weightKg * adjustedLoss;
    var finalWeightKg = weightKg - weightLossKgMid;
    var startBMI = weightKg / (heightM * heightM);
    var finalBMI = finalWeightKg / (heightM * heightM);

    var totalWeeks = durationMonths * 4.345;
    var weeklyRateKg = weightLossKgMid / totalWeeks;
    var lifestyleOnlyPct = 0.04 * Math.min(durationFraction, 1.0) * dietMod * actMod;
    var lifestyleOnlyKg = weightKg * lifestyleOnlyPct;

    // Display
    var el;
    el = document.getElementById('resultNumber');
    if (el) el.textContent = formatWeight(weightLossKgMid * 0.85) + ' \u2013 ' + formatWeight(weightLossKgMid * 1.15);

    el = document.getElementById('resultVerdict');
    if (el) el.textContent = (lossLow * 100).toFixed(1) + '% \u2013 ' + (lossHigh * 100).toFixed(1) + '% of starting body weight';

    el = document.getElementById('startWeight');
    if (el) el.textContent = formatWeight(weightKg);
    el = document.getElementById('finalWeight');
    if (el) el.textContent = formatWeight(finalWeightKg);
    el = document.getElementById('startBMI');
    if (el) el.textContent = startBMI.toFixed(1);
    el = document.getElementById('finalBMI');
    if (el) el.textContent = finalBMI.toFixed(1);
    el = document.getElementById('loss-pct-label');
    if (el) el.textContent = (adjustedLoss * 100).toFixed(1) + '%';
    el = document.getElementById('weeklyRate');
    if (el) el.textContent = formatWeight(weeklyRateKg) + '/week';

    el = document.getElementById('dose-display');
    if (el && doseEl) el.textContent = doseEl.options[doseEl.selectedIndex].text;
    el = document.getElementById('duration-display');
    if (el && durationEl) el.textContent = durationEl.options[durationEl.selectedIndex].text;
    el = document.getElementById('activity-modifier');
    if (el) el.textContent = (actMod >= 1 ? '+' : '') + ((actMod - 1) * 100).toFixed(0) + '%';
    el = document.getElementById('diet-modifier');
    if (el) el.textContent = (dietMod >= 1 ? '+' : '') + ((dietMod - 1) * 100).toFixed(0) + '%';
    el = document.getElementById('withMedLoss');
    if (el) el.textContent = formatWeight(weightLossKgMid) + ' (' + (adjustedLoss * 100).toFixed(1) + '%)';
    el = document.getElementById('withoutMedLoss');
    if (el) el.textContent = formatWeight(lifestyleOnlyKg) + ' (' + (lifestyleOnlyPct * 100).toFixed(1) + '%)';

    // Reveal results via factory
    if (typeof factoryReveal === 'function') factoryReveal();

    if (typeof showNextSteps === 'function' && typeof collectUserData === 'function') {
        showNextSteps('mounjaro', collectUserData());
    }

    // Chart
    ensureChartJs(function() {
        var labels = ['Start'];
        var chartData = [parseFloat(currentUnits === 'imperial' ? (weightKg * 2.20462).toFixed(1) : weightKg.toFixed(1))];
        for (var m = 1; m <= durationMonths; m++) {
            var frac = cumulativeFraction(m, durationMonths);
            var projWeight = weightKg - weightLossKgMid * frac;
            labels.push('M' + m);
            chartData.push(parseFloat(currentUnits === 'imperial' ? (projWeight * 2.20462).toFixed(1) : projWeight.toFixed(1)));
        }
        createChart(labels, chartData);
    });
}

function ensureChartJs(cb) {
    if (typeof Chart !== 'undefined') return cb();
    var s = document.createElement('script');
    s.src = 'https://cdn.jsdelivr.net/npm/chart.js';
    s.onload = cb;
    document.head.appendChild(s);
}

function createChart(labels, data) {
    var canvas = document.getElementById('chart');
    if (!canvas) return;
    var ctx = canvas.getContext('2d');
    if (window.weightChart) window.weightChart.destroy();

    var unitLabel = currentUnits === 'imperial' ? 'lbs' : 'kg';
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
                pointBackgroundColor: 'var(--accent)',
                pointRadius: 4
            }]
        },
        options: {
            responsive: true,
            plugins: { legend: { display: true, position: 'top' } },
            scales: {
                y: { beginAtZero: false, title: { display: true, text: 'Weight (' + unitLabel + ')' } },
                x: { title: { display: true, text: 'Month' } }
            }
        }
    });
}
})();
