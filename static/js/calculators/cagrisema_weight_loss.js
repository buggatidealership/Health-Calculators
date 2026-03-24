// CagriSema Weight Loss Calculator — factory-compatible
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

// Hide imperial fields on init
toggleUnitFields();

// Make BMI field readonly
var bmiField = document.getElementById('bmi');
if (bmiField) bmiField.readOnly = true;

// Calculate BMI on input
var weightKgInput = document.getElementById('weight-kg');
var weightLbInput = document.getElementById('weight-lb');
var heightCmInput = document.getElementById('height-cm');
var heightFtInput = document.getElementById('height-ft');
var heightInInput = document.getElementById('height-in');

if (weightKgInput) weightKgInput.addEventListener('input', calculateBMI);
if (weightLbInput) weightLbInput.addEventListener('input', calculateBMI);
if (heightCmInput) heightCmInput.addEventListener('input', calculateBMI);
if (heightFtInput) heightFtInput.addEventListener('input', calculateBMI);
if (heightInInput) heightInInput.addEventListener('input', calculateBMI);

function calculateBMI() {
    var weightKg, heightM;

    if (currentUnits === 'metric') {
        weightKg = parseFloat((document.getElementById('weight-kg') || {}).value);
        var heightCm = parseFloat((document.getElementById('height-cm') || {}).value);
        heightM = heightCm / 100;
    } else {
        var weightLb = parseFloat((document.getElementById('weight-lb') || {}).value);
        weightKg = weightLb / 2.20462;
        var heightFt = parseFloat((document.getElementById('height-ft') || {}).value);
        var heightIn = parseFloat((document.getElementById('height-in') || {}).value);
        heightM = (heightFt * 12 + heightIn) * 0.0254;
    }

    if (weightKg && heightM) {
        var bmi = (weightKg / (heightM * heightM)).toFixed(1);
        var bmiEl = document.getElementById('bmi');
        if (bmiEl) bmiEl.value = bmi;
    }
}

// Calculate button
var calcBtn = document.getElementById('calcBtn');
if (calcBtn) calcBtn.addEventListener('click', calculate);

function calculate() {
    var weightKg, heightM;

    if (currentUnits === 'metric') {
        weightKg = parseFloat((document.getElementById('weight-kg') || {}).value);
        var heightCm = parseFloat((document.getElementById('height-cm') || {}).value);
        heightM = heightCm / 100;
    } else {
        var weightLb = parseFloat((document.getElementById('weight-lb') || {}).value);
        weightKg = weightLb / 2.20462;
        var heightFt = parseFloat((document.getElementById('height-ft') || {}).value);
        var heightIn = parseFloat((document.getElementById('height-in') || {}).value);
        heightM = (heightFt * 12 + heightIn) * 0.0254;
    }

    var durationEl = document.getElementById('duration');
    var duration = durationEl ? parseInt(durationEl.value) : 68;

    if (!weightKg || !heightM) {
        return;
    }

    var bmi = (weightKg / (heightM * heightM)).toFixed(1);

    // CagriSema weight loss percentages from REDEFINE 1 trial
    var milestones = {
        16: 0.08,
        32: 0.14,
        48: 0.18,
        68: 0.204
    };

    var weightLossPercent = milestones[duration] || 0.204;

    var weightLossKg = (weightKg * weightLossPercent).toFixed(1);
    var finalWeightKg = (weightKg - weightLossKg).toFixed(1);
    var finalBMI = (finalWeightKg / (heightM * heightM)).toFixed(1);

    // Display results
    var resultNumberEl = document.getElementById('resultNumber');
    var startWeightEl = document.getElementById('startWeight');
    var finalWeightEl = document.getElementById('finalWeight');
    var startBMIEl = document.getElementById('startBMI');
    var finalBMIEl = document.getElementById('finalBMI');
    var lossPctEl = document.getElementById('loss-pct-label');
    var compareCagrisemaEl = document.getElementById('compare-cagrisema');

    if (currentUnits === 'metric') {
        if (resultNumberEl) resultNumberEl.textContent = weightLossKg + ' kg';
        if (startWeightEl) startWeightEl.textContent = weightKg + ' kg';
        if (finalWeightEl) finalWeightEl.textContent = finalWeightKg + ' kg';
    } else {
        var weightLb2 = (weightKg * 2.20462).toFixed(1);
        var weightLossLb = (weightLossKg * 2.20462).toFixed(1);
        var finalWeightLb = (finalWeightKg * 2.20462).toFixed(1);
        if (resultNumberEl) resultNumberEl.textContent = weightLossLb + ' lbs';
        if (startWeightEl) startWeightEl.textContent = weightLb2 + ' lbs';
        if (finalWeightEl) finalWeightEl.textContent = finalWeightLb + ' lbs';
    }

    if (startBMIEl) startBMIEl.textContent = bmi;
    if (finalBMIEl) finalBMIEl.textContent = finalBMI;
    if (lossPctEl) lossPctEl.textContent = (weightLossPercent * 100).toFixed(1) + '%';
    if (compareCagrisemaEl) compareCagrisemaEl.textContent = '~' + (weightLossPercent * 100).toFixed(1) + '%';

    // Reveal results via factory
    if (typeof factoryReveal === 'function') { factoryReveal(); }

    if (typeof showNextSteps === 'function' && typeof collectUserData === 'function') {
        showNextSteps('cagrisema', collectUserData());
    }

    // Create chart (load Chart.js if needed)
    ensureChartJs(function() { createChart(weightKg, duration, currentUnits); });
}

function ensureChartJs(cb) {
    if (typeof Chart !== 'undefined') return cb();
    var s = document.createElement('script');
    s.src = 'https://cdn.jsdelivr.net/npm/chart.js';
    s.onload = cb;
    document.head.appendChild(s);
}

function createChart(startWeightKg, duration, units) {
    var canvas = document.getElementById('chart');
    if (!canvas) return;
    var ctx = canvas.getContext('2d');

    if (window.weightChart) {
        window.weightChart.destroy();
    }

    var allMilestones = [
        { week: 0, pct: 0 },
        { week: 4, pct: 0.02 },
        { week: 8, pct: 0.045 },
        { week: 16, pct: 0.08 },
        { week: 24, pct: 0.11 },
        { week: 32, pct: 0.14 },
        { week: 40, pct: 0.16 },
        { week: 48, pct: 0.18 },
        { week: 56, pct: 0.192 },
        { week: 68, pct: 0.204 }
    ];

    var milestones = allMilestones.filter(function(m) { return m.week <= duration; });

    var labels = milestones.map(function(m) { return m.week + ' weeks'; });
    var data = milestones.map(function(m) {
        var currentWeightKg = startWeightKg * (1 - m.pct);
        if (units === 'imperial') {
            return (currentWeightKg * 2.20462).toFixed(1);
        }
        return currentWeightKg.toFixed(1);
    });

    window.weightChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Projected Weight (' + (units === 'metric' ? 'kg' : 'lbs') + ')',
                data: data,
                borderColor: 'var(--accent)',
                backgroundColor: 'rgba(var(--accent-rgb), 0.1)',
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: false,
                    min: Math.floor(units === 'metric' ? startWeightKg * 0.75 : startWeightKg * 0.75 * 2.20462)
                }
            }
        }
    });
}
})();
