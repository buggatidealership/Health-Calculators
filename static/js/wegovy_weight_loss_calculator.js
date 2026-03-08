/**
 * Wegovy Weight Loss Calculator
 *
 * Projects weight loss based on STEP clinical trial data for semaglutide 2.4mg.
 * Supports injectable (2.4mg weekly) and oral (50mg daily) forms.
 * Uses non-linear logarithmic curve to model realistic weight loss trajectory.
 */

document.addEventListener('DOMContentLoaded', function() {
    // Unit toggle
    const metricBtn = document.getElementById('metricBtn');
    const imperialBtn = document.getElementById('imperialBtn');
    const weightMetric = document.getElementById('weight-metric');
    const weightImperial = document.getElementById('weight-imperial');
    const heightMetric = document.getElementById('height-metric');
    const heightImperial = document.getElementById('height-imperial');

    let currentUnits = 'metric';

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

    // Toggle titration display based on form type
    document.getElementById('form-type').addEventListener('change', function() {
        var formType = this.value;
        var injectable = document.getElementById('titration-schedule');
        var oral = document.getElementById('titration-oral');
        var title = document.getElementById('titration-title');
        if (formType === 'oral') {
            injectable.style.display = 'none';
            oral.style.display = 'block';
            title.textContent = 'Wegovy Dose Titration Schedule (Oral Pill)';
        } else {
            injectable.style.display = 'block';
            oral.style.display = 'none';
            title.textContent = 'Wegovy Dose Titration Schedule (Injectable)';
        }
    });

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

        var age = parseInt(document.getElementById('age').value);
        if (!age || age < 18) {
            alert('Please enter a valid age (18+).');
            return;
        }

        var sex = document.getElementById('sex').value;
        var formType = document.getElementById('form-type').value;
        var duration = parseInt(document.getElementById('duration').value);
        var activity = document.getElementById('activity').value;

        // BMI
        var bmi = (weightKg / (heightM * heightM)).toFixed(1);

        // ---- Weight loss projection ----
        // Base: STEP 1 trial — 14.9% at 68 weeks for injectable 2.4mg
        // OASIS trial — ~15% at 68 weeks for oral 50mg
        var basePercent68;
        var trialBasis;

        if (formType === 'injectable') {
            basePercent68 = 0.149; // 14.9%
            trialBasis = 'STEP 1 Trial (injectable 2.4 mg)';
        } else {
            basePercent68 = 0.150; // ~15% oral
            trialBasis = 'OASIS Trial (oral 50 mg)';
        }

        // Scale by duration using logarithmic curve (non-linear)
        // Model: loss(t) = basePercent68 * ln(1+t) / ln(1+68)
        // This gives faster early loss that plateaus, matching clinical trajectory
        var lossAtDuration = basePercent68 * Math.log(1 + duration) / Math.log(1 + 68);

        // Cap at reasonable maximum (no more than 25% body weight)
        lossAtDuration = Math.min(0.25, lossAtDuration);

        // Activity level adjustment (modest: +/- 10% of base)
        // STEP trials required 150 min/week moderate activity = "moderate" baseline
        var activityMultiplier = 1.0;
        switch (activity) {
            case 'sedentary':   activityMultiplier = 0.90; break;
            case 'light':       activityMultiplier = 0.95; break;
            case 'moderate':    activityMultiplier = 1.00; break;
            case 'active':      activityMultiplier = 1.05; break;
            case 'very-active': activityMultiplier = 1.10; break;
        }

        var weightLossPercent = lossAtDuration * activityMultiplier;
        // Final cap
        weightLossPercent = Math.min(0.25, weightLossPercent);

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

        var formSelect = document.getElementById('form-type');
        document.getElementById('form-display').textContent = formSelect.options[formSelect.selectedIndex].text;

        var activitySelect = document.getElementById('activity');
        document.getElementById('activity-display').textContent = activitySelect.options[activitySelect.selectedIndex].text;

        document.getElementById('trial-basis').textContent = trialBasis;

        // Toggle titration displays
        var injectable = document.getElementById('titration-schedule');
        var oral = document.getElementById('titration-oral');
        var titrationTitle = document.getElementById('titration-title');
        if (formType === 'oral') {
            injectable.style.display = 'none';
            oral.style.display = 'block';
            titrationTitle.textContent = 'Wegovy Dose Titration Schedule (Oral Pill)';
        } else {
            injectable.style.display = 'block';
            oral.style.display = 'none';
            titrationTitle.textContent = 'Wegovy Dose Titration Schedule (Injectable)';
        }

        // Show results
        document.getElementById('result').classList.remove('hidden');
        showNextSteps('wegovy', collectUserData());

        // Build chart
        createChart(weightKg, parseFloat(finalWeightKg), duration, currentUnits, weightLossPercent);
    }

    function createChart(startWeightKg, finalWeightKg, duration, units, totalLossPercent) {
        var ctx = document.getElementById('chart').getContext('2d');

        if (window.weightChart) {
            window.weightChart.destroy();
        }

        // Generate data points using the same logarithmic curve
        var labels = [];
        var data = [];
        var steps = 8;
        var totalLossKg = startWeightKg - finalWeightKg;
        var logDenom = Math.log(1 + duration);

        for (var i = 0; i <= steps; i++) {
            var weeks = Math.round((i / steps) * duration);
            labels.push(weeks + ' wk');

            // Logarithmic progression matching the calculation
            var progress = Math.log(1 + weeks) / logDenom;
            var currentWeightKg = startWeightKg - totalLossKg * progress;

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
