// Oral Wegovy Weight Loss Calculator — factory-compatible
// OASIS 1 trial: ~5% (12wk), ~9% (24wk), ~12% (36wk), ~13% (52wk), ~14% (68wk)
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

// Piecewise linear interpolation of OASIS 1 trial data
function getWeightLossPercent(weeks) {
    var dataPoints = [
        [0, 0],
        [12, 0.05],
        [24, 0.09],
        [36, 0.12],
        [52, 0.13],
        [68, 0.14]
    ];
    if (weeks <= 0) return 0;
    if (weeks >= 68) return 0.14;
    for (var i = 1; i < dataPoints.length; i++) {
        if (weeks <= dataPoints[i][0]) {
            var w0 = dataPoints[i - 1][0];
            var l0 = dataPoints[i - 1][1];
            var w1 = dataPoints[i][0];
            var l1 = dataPoints[i][1];
            var t = (weeks - w0) / (w1 - w0);
            return l0 + t * (l1 - l0);
        }
    }
    return 0.14;
}

var calcBtn = document.getElementById('calcBtn');
if (calcBtn) calcBtn.addEventListener('click', calculate);

function calculate() {
    var weightKg = getWeightKg();
    var heightM = getHeightM();

    if (!weightKg || !heightM || heightM <= 0) return;

    var durationEl = document.getElementById('duration');
    var duration = durationEl ? parseInt(durationEl.value) : 68;

    var bmi = (weightKg / (heightM * heightM)).toFixed(1);
    var weightLossPercent = getWeightLossPercent(duration);
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

    // Reveal results via factory
    if (typeof factoryReveal === 'function') factoryReveal();

    if (typeof showNextSteps === 'function' && typeof collectUserData === 'function') {
        showNextSteps('oral-wegovy', collectUserData());
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

    for (var i = 0; i <= steps; i++) {
        var weeks = Math.round((i / steps) * duration);
        labels.push(weeks + ' wk');
        var lossPct = getWeightLossPercent(weeks);
        var currentWeightKg = startWeightKg * (1 - lossPct);
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
