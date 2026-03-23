// CagriSema Weight Loss Calculator — factory-compatible
(function() {
// Unit toggle functionality
const metricBtn = document.getElementById('metricBtn');
const imperialBtn = document.getElementById('imperialBtn');
const weightMetric = document.getElementById('weight-metric');
const weightImperial = document.getElementById('weight-imperial');
const heightMetric = document.getElementById('height-metric');
const heightImperial = document.getElementById('height-imperial');

let currentUnits = 'metric';

document.getElementById("metricBtn").addEventListener("click", () => {
    currentUnits = 'metric';
    document.getElementById("metricBtn").classList.add("active");
    document.getElementById("imperialBtn").classList.remove("active");
    weightMetric.classList.remove('hidden');
    weightImperial.classList.add('hidden');
    heightMetric.classList.remove('hidden');
    heightImperial.classList.add('hidden');
    calculateBMI();
});

document.getElementById("imperialBtn").addEventListener("click", () => {
    currentUnits = 'imperial';
    document.getElementById("imperialBtn").classList.add("active");
    document.getElementById("metricBtn").classList.remove("active");
    weightImperial.classList.remove('hidden');
    weightMetric.classList.add('hidden');
    heightImperial.classList.remove('hidden');
    heightMetric.classList.add('hidden');
    calculateBMI();
});

// Calculate BMI when weight or height changes
document.getElementById('weight-kg').addEventListener('input', calculateBMI);
document.getElementById('weight-lb').addEventListener('input', calculateBMI);
document.getElementById('height-cm').addEventListener('input', calculateBMI);
document.getElementById('height-ft').addEventListener('input', calculateBMI);
document.getElementById('height-in').addEventListener('input', calculateBMI);

function calculateBMI() {
    let weightKg, heightM;

    if (currentUnits === 'metric') {
        weightKg = parseFloat(document.getElementById('weight-kg').value);
        const heightCm = parseFloat(document.getElementById('height-cm').value);
        heightM = heightCm / 100;
    } else {
        const weightLb = parseFloat(document.getElementById('weight-lb').value);
        weightKg = weightLb / 2.20462;

        const heightFt = parseFloat(document.getElementById('height-ft').value);
        const heightIn = parseFloat(document.getElementById('height-in').value);
        heightM = (heightFt * 12 + heightIn) * 0.0254;
    }

    if (weightKg && heightM) {
        const bmi = (weightKg / (heightM * heightM)).toFixed(1);
        document.getElementById('bmi').value = bmi;
    }
}

// Calculate button functionality
document.getElementById('calcBtn').addEventListener('click', calculate);

function calculate() {
    let weightKg, heightM;

    // Get weight in kg regardless of input units
    if (currentUnits === 'metric') {
        weightKg = parseFloat(document.getElementById('weight-kg').value);
        const heightCm = parseFloat(document.getElementById('height-cm').value);
        heightM = heightCm / 100;
    } else {
        const weightLb = parseFloat(document.getElementById('weight-lb').value);
        weightKg = weightLb / 2.20462;

        const heightFt = parseFloat(document.getElementById('height-ft').value);
        const heightIn = parseFloat(document.getElementById('height-in').value);
        heightM = (heightFt * 12 + heightIn) * 0.0254;
    }

    const duration = parseInt(document.getElementById('duration').value);

    if (!weightKg || !heightM) {
        return;
    }

    // Calculate BMI
    const bmi = (weightKg / (heightM * heightM)).toFixed(1);

    // CagriSema weight loss percentages from REDEFINE 1 trial
    // 68 weeks: 20.4%, interpolated trajectory for shorter durations
    const milestones = {
        16: 0.08,   // ~8% at 16 weeks (dose escalation phase)
        32: 0.14,   // ~14% at 32 weeks
        48: 0.18,   // ~18% at 48 weeks
        68: 0.204   // 20.4% at 68 weeks (REDEFINE 1 primary endpoint)
    };

    let weightLossPercent = milestones[duration] || 0.204;

    const weightLossKg = (weightKg * weightLossPercent).toFixed(1);
    const finalWeightKg = (weightKg - weightLossKg).toFixed(1);
    const finalBMI = (finalWeightKg / (heightM * heightM)).toFixed(1);

    // Display results in the appropriate units
    if (currentUnits === 'metric') {
        document.getElementById('startWeight').textContent = weightKg + ' kg';
        document.getElementById('weightLoss').textContent = weightLossKg + ' kg';
        document.getElementById('finalWeight').textContent = finalWeightKg + ' kg';
    } else {
        const weightLb = (weightKg * 2.20462).toFixed(1);
        const weightLossLb = (weightLossKg * 2.20462).toFixed(1);
        const finalWeightLb = (finalWeightKg * 2.20462).toFixed(1);

        document.getElementById('startWeight').textContent = weightLb + ' lbs';
        document.getElementById('weightLoss').textContent = weightLossLb + ' lbs';
        document.getElementById('finalWeight').textContent = finalWeightLb + ' lbs';
    }

    document.getElementById('startBMI').textContent = bmi;
    document.getElementById('finalBMI').textContent = finalBMI;

    // Populate new result elements
    document.getElementById('loss-pct-label').textContent = (weightLossPercent * 100).toFixed(1) + '% of starting body weight';

    const durationSelect = document.getElementById('duration');
    document.getElementById('duration-display').textContent = durationSelect.options[durationSelect.selectedIndex].text;

    // Update the comparison highlight for user's selected duration
    document.getElementById('compare-cagrisema').textContent = '~' + (weightLossPercent * 100).toFixed(1) + '%';

    // Show result div
    if (typeof factoryReveal === 'function') { factoryReveal(); };
    showNextSteps('cagrisema', collectUserData());

    // Create chart with timeline milestones
    createChart(weightKg, duration, currentUnits);
}

function createChart(startWeightKg, duration, units) {
    const ctx = document.getElementById('chart').getContext('2d');

    // Clear previous chart if it exists
    if (window.weightChart) {
        window.weightChart.destroy();
    }

    // CagriSema trajectory milestones from REDEFINE 1
    const allMilestones = [
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

    // Filter milestones up to the selected duration
    const milestones = allMilestones.filter(m => m.week <= duration);

    const labels = milestones.map(m => m.week + ' weeks');
    const data = milestones.map(m => {
        const currentWeightKg = startWeightKg * (1 - m.pct);
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
                borderColor: 'var(--color-accent)',
                backgroundColor: 'rgba(214, 51, 132, 0.1)',
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: false,
                    min: Math.floor((units === 'metric' ? startWeightKg * 0.75 : startWeightKg * 0.75 * 2.20462))
                }
            }
        }
    });
}
})();
