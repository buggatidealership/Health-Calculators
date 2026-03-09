/**
 * Oral Wegovy Weight Loss Calculator
 *
 * Projects weight loss based on OASIS 1 clinical trial data for oral semaglutide 25mg.
 * Uses piecewise linear interpolation of trial timepoints to model realistic weight loss trajectory.
 *
 * Trajectory from OASIS 1:
 *   ~5% at 12 weeks, ~9% at 24 weeks, ~12% at 36 weeks, ~13% at 52 weeks, ~14% at 68 weeks
 */

document.addEventListener('DOMContentLoaded', function() {
    // Unit toggle
    var metricBtn = document.getElementById('metricBtn');
    var imperialBtn = document.getElementById('imperialBtn');
    var weightMetric = document.getElementById('weight-metric');
    var weightImperial = document.getElementById('weight-imperial');
    var heightMetric = document.getElementById('height-metric');
    var heightImperial = document.getElementById('height-imperial');

    var currentUnits = 'metric';

    metricBtn.addEventListener('click', function() {
        currentUnits = 'metric';
        metricBtn.classList.add('active');
        imperialBtn.classList.remove('active');
        weightMetric.classList.remove('hidden');
        weightImperial.classList.add('hidden');
        heightMetric.classList.remove('hidden');
        heightImperial.classList.add('hidden');
        calculateBMI();
    });

    imperialBtn.addEventListener('click', function() {
        currentUnits = 'imperial';
        imperialBtn.classList.add('active');
        metricBtn.classList.remove('active');
        weightImperial.classList.remove('hidden');
        weightMetric.classList.add('hidden');
        heightImperial.classList.remove('hidden');
        heightMetric.classList.add('hidden');
        calculateBMI();
    });

    // BMI auto-calculation on input change
    document.getElementById('weight-kg').addEventListener('input', calculateBMI);
    document.getElementById('weight-lb').addEventListener('input', calculateBMI);
    document.getElementById('height-cm').addEventListener('input', calculateBMI);
    document.getElementById('height-ft').addEventListener('input', calculateBMI);
    document.getElementById('height-in').addEventListener('input', calculateBMI);

    function getWeightAndHeight() {
        var weightKg, heightM;
        if (currentUnits === 'metric') {
            weightKg = parseFloat(document.getElementById('weight-kg').value);
            var heightCm = parseFloat(document.getElementById('height-cm').value);
            heightM = heightCm / 100;
        } else {
            var weightLb = parseFloat(document.getElementById('weight-lb').value);
            weightKg = weightLb / 2.20462;
            var heightFt = parseFloat(document.getElementById('height-ft').value);
            var heightIn = parseFloat(document.getElementById('height-in').value);
            heightM = (heightFt * 12 + heightIn) * 0.0254;
        }
        return { weightKg: weightKg, heightM: heightM };
    }

    function calculateBMI() {
        var vals = getWeightAndHeight();
        if (vals.weightKg && vals.heightM) {
            var bmi = (vals.weightKg / (vals.heightM * vals.heightM)).toFixed(1);
            document.getElementById('bmi').value = bmi;
        }
    }

    /**
     * Piecewise linear interpolation of OASIS 1 trial timepoints.
     * Returns the weight loss percentage (as a decimal, e.g. 0.14 for 14%) at a given week.
     */
    function getWeightLossPercent(weeks) {
        // OASIS 1 trial data points: [week, loss_fraction]
        var dataPoints = [
            [0, 0],
            [12, 0.05],
            [24, 0.09],
            [36, 0.12],
            [52, 0.13],
            [68, 0.14]
        ];

        // Clamp to range
        if (weeks <= 0) return 0;
        if (weeks >= 68) return 0.14;

        // Find the two surrounding data points and interpolate
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

    // Main calculation
    document.getElementById('calculate-btn').addEventListener('click', calculate);

    function calculate() {
        var vals = getWeightAndHeight();
        var weightKg = vals.weightKg;
        var heightM = vals.heightM;

        if (!weightKg || !heightM) {
            alert('Please enter your weight and height.');
            return;
        }

        var duration = parseInt(document.getElementById('duration').value);

        // BMI
        var bmi = (weightKg / (heightM * heightM)).toFixed(1);

        // Weight loss projection from OASIS 1 trial data
        var weightLossPercent = getWeightLossPercent(duration);

        var weightLossKg = (weightKg * weightLossPercent).toFixed(1);
        var finalWeightKg = (weightKg - weightLossKg).toFixed(1);
        var finalBMI = (finalWeightKg / (heightM * heightM)).toFixed(1);

        // Display results
        if (currentUnits === 'metric') {
            document.getElementById('startWeight').textContent = weightKg.toFixed(1) + ' kg';
            document.getElementById('weightLoss').textContent = weightLossKg + ' kg';
            document.getElementById('finalWeight').textContent = finalWeightKg + ' kg';
        } else {
            var startLb = (weightKg * 2.20462).toFixed(1);
            var lossLb = (weightLossKg * 2.20462).toFixed(1);
            var finalLb = (finalWeightKg * 2.20462).toFixed(1);
            document.getElementById('startWeight').textContent = startLb + ' lbs';
            document.getElementById('weightLoss').textContent = lossLb + ' lbs';
            document.getElementById('finalWeight').textContent = finalLb + ' lbs';
        }

        document.getElementById('startBMI').textContent = bmi;
        document.getElementById('finalBMI').textContent = finalBMI;
        document.getElementById('loss-pct-label').textContent = (weightLossPercent * 100).toFixed(1) + '% of starting body weight';

        // Treatment details
        var durationSelect = document.getElementById('duration');
        document.getElementById('duration-display').textContent = durationSelect.options[durationSelect.selectedIndex].text;

        // Show results
        document.getElementById('result').classList.remove('hidden');

        // Content loops integration
        if (typeof showNextSteps === 'function' && typeof collectUserData === 'function') {
            showNextSteps('oral-wegovy', collectUserData());
        }

        // Build chart
        createChart(weightKg, parseFloat(finalWeightKg), duration, currentUnits, weightLossPercent);
    }

    function createChart(startWeightKg, finalWeightKg, duration, units, totalLossPercent) {
        var ctx = document.getElementById('chart').getContext('2d');

        if (window.weightChart) {
            window.weightChart.destroy();
        }

        // Generate data points using piecewise interpolation matching the calculation
        var labels = [];
        var data = [];
        var steps = 8;

        for (var i = 0; i <= steps; i++) {
            var weeks = Math.round((i / steps) * duration);
            labels.push(weeks + ' wk');

            var lossPct = getWeightLossPercent(weeks);
            var currentWeightKg = startWeightKg * (1 - lossPct);

            if (units === 'imperial') {
                data.push((currentWeightKg * 2.20462).toFixed(1));
            } else {
                data.push(currentWeightKg.toFixed(1));
            }
        }

        var unitLabel = units === 'metric' ? 'kg' : 'lbs';
        var yMin = parseFloat(data[data.length - 1]) - 5;

        window.weightChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Projected Weight (' + unitLabel + ')',
                    data: data,
                    borderColor: 'var(--color-accent)',
                    backgroundColor: 'rgba(214, 51, 132, 0.1)',
                    fill: true,
                    tension: 0.4,
                    pointRadius: 4,
                    pointBackgroundColor: 'var(--color-accent)'
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: { display: true, position: 'top' },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return context.parsed.y + ' ' + unitLabel;
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        min: Math.floor(yMin),
                        title: { display: true, text: 'Weight (' + unitLabel + ')' }
                    },
                    x: {
                        title: { display: true, text: 'Treatment Duration' }
                    }
                }
            }
        });
    }
});
