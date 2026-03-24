// Ozempic Weight Loss Calculator — factory-compatible
// STEP 1: 14.9% at 68 weeks (2.4mg), SUSTAIN: ~8% (1mg), ~5% (0.5mg)
(function() {
var currentUnits = 'imperial'; // Ozempic template defaults to imperial

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

// Duration pill-toggle support
var durationBtns = document.querySelectorAll('.duration-btn');
durationBtns.forEach(function(b) {
    b.addEventListener('click', function() {
        durationBtns.forEach(function(x) { x.classList.remove('active'); });
        this.classList.add('active');
        var durationSelect = document.getElementById('duration');
        if (durationSelect) durationSelect.value = this.getAttribute('data-value');
    });
});

// Dose pill-toggle support
var doseBtns = document.querySelectorAll('.dose-btn');
doseBtns.forEach(function(b) {
    b.addEventListener('click', function() {
        doseBtns.forEach(function(x) { x.classList.remove('active'); });
        this.classList.add('active');
        var doseSelect = document.getElementById('dose');
        if (doseSelect) doseSelect.value = this.getAttribute('data-value');
    });
});

var calcBtn = document.getElementById('calcBtn');
if (calcBtn) calcBtn.addEventListener('click', calculate);

function calculate() {
    var weightKg = getWeightKg();
    var heightM = getHeightM();

    if (!weightKg || !heightM || heightM <= 0) return;

    var durationEl = document.getElementById('duration');
    var duration = durationEl ? parseInt(durationEl.value) : 68;
    var doseEl = document.getElementById('dose');
    var dose = doseEl ? parseFloat(doseEl.value) : 2.4;

    var bmi = (weightKg / (heightM * heightM)).toFixed(1);

    var weightLossPercent;
    if (dose === 2.4) {
        weightLossPercent = Math.min(0.25, 0.149 * (duration / 68));
    } else if (dose === 1.0) {
        weightLossPercent = Math.min(0.12, 0.08 * (duration / 52));
    } else {
        weightLossPercent = Math.min(0.08, 0.05 * (duration / 52));
    }

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
    el = document.getElementById('dose-display');
    if (el && doseEl) el.textContent = doseEl.options[doseEl.selectedIndex].text;
    el = document.getElementById('trial-basis');
    if (el) el.textContent = dose === 2.4 ? 'STEP 1 Trial' : 'SUSTAIN Trials';

    // Reveal results via factory
    if (typeof factoryReveal === 'function') factoryReveal();

    if (typeof showNextSteps === 'function' && typeof collectUserData === 'function') {
        showNextSteps('ozempic', collectUserData());
    }

    // Chart
    ensureChartJs(function() { createChart(weightKg, finalWeightKg, duration); });
}

function ensureChartJs(cb) {
    if (typeof Chart !== 'undefined') return cb();
    var s = document.createElement('script');
    s.src = 'https://cdn.jsdelivr.net/npm/chart.js';
    s.onload = cb;
    document.head.appendChild(s);
}

function createChart(startWeightKg, finalWeightKg, duration) {
    var canvas = document.getElementById('chart');
    if (!canvas) return;
    var ctx = canvas.getContext('2d');
    if (window.weightChart) window.weightChart.destroy();

    var labels = [];
    var data = [];
    var steps = 5;
    var stepWeeks = duration / steps;

    for (var i = 0; i <= steps; i++) {
        var weeks = i * stepWeeks;
        labels.push(weeks.toFixed(0) + ' wk');
        var progress = i / steps;
        var currentWeightKg = startWeightKg - (startWeightKg - finalWeightKg) * progress;
        if (currentUnits === 'imperial') {
            data.push((currentWeightKg * 2.20462).toFixed(1));
        } else {
            data.push(currentWeightKg.toFixed(1));
        }
    }

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
            plugins: { legend: { labels: { color: '#94a3b8' } } },
            scales: {
                y: {
                    beginAtZero: false,
                    min: Math.floor(parseFloat(data[data.length - 1]) - 5),
                    ticks: { color: '#64748b' },
                    grid: { color: 'rgba(var(--accent-rgb),0.06)' }
                },
                x: {
                    ticks: { color: '#64748b' },
                    grid: { color: 'rgba(var(--accent-rgb),0.06)' }
                }
            }
        }
    });
}
})();
