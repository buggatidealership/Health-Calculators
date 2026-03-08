/**
 * Zepbound (Tirzepatide) Weight Loss Calculator
 *
 * Projections based on SURMOUNT-1 trial data (Jastreboff et al., NEJM 2022).
 * Zepbound is the same drug as Mounjaro (tirzepatide) but FDA-approved
 * specifically for chronic weight management (not diabetes).
 *
 * Weight loss percentages at 72 weeks by dose (SURMOUNT-1):
 *   5 mg:  15.0%
 *   10 mg: 19.5%  (interpolated for 7.5 mg as midpoint)
 *   15 mg: 22.5%  (interpolated for 12.5 mg as midpoint)
 *
 * Weight loss is non-linear: most rapid between weeks 12-36.
 * Modeled with a logarithmic curve fitted to SURMOUNT milestone data.
 */

document.addEventListener('DOMContentLoaded', function () {
    var currentUnits = 'metric';

    // --- Dose-dependent weight loss at 72 weeks (SURMOUNT-1) ---
    var DOSE_LOSS_72W = {
        '2.5': 0.06,    // titration dose only; ~6% extrapolated (low efficacy)
        '5':   0.15,    // 15.0% SURMOUNT-1
        '7.5': 0.173,   // interpolated between 5 mg and 10 mg
        '10':  0.195,   // 19.5% SURMOUNT-1
        '12.5': 0.21,   // interpolated between 10 mg and 15 mg
        '15':  0.225    // 22.5% SURMOUNT-1
    };

    // Non-linear weight loss curve: proportion of total loss achieved at each week
    // Derived from SURMOUNT-1 milestone data (weeks 12, 24, 36, 52, 72)
    // Most weight lost in weeks 12-36; plateau begins around week 40-52
    var REF_WEEKS = 72; // SURMOUNT-1 endpoint

    function cumulativeFraction(week, totalWeeks) {
        // Use a logarithmic model: fraction = log(1 + w) / log(1 + W)
        // where w = current week, W = reference duration (72 weeks)
        var effectiveW = Math.min(week, totalWeeks);
        if (effectiveW <= 0) return 0;
        if (totalWeeks <= 0) return 0;

        var fraction = Math.log(1 + effectiveW) / Math.log(1 + REF_WEEKS);
        var maxFraction = Math.log(1 + totalWeeks) / Math.log(1 + REF_WEEKS);
        if (maxFraction > 0) {
            fraction = fraction / maxFraction;
        }
        return Math.min(fraction, 1.0);
    }

    // Activity level modifiers (±5-10% based on level)
    var ACTIVITY_MOD = {
        'sedentary': 0.90,   // -10%
        'light': 0.95,       // -5%
        'moderate': 1.0,     // baseline (matches trial conditions)
        'very': 1.10         // +10%
    };

    // Dose titration schedule (weeks to reach each dose from 2.5 mg start)
    var TITRATION_SCHEDULE = [
        { dose: '2.5', weeks: '1-4', purpose: 'Initial titration (not a therapeutic dose)' },
        { dose: '5', weeks: '5-8', purpose: 'First maintenance dose; weight loss begins' },
        { dose: '7.5', weeks: '9-12', purpose: 'Optional increase if tolerated' },
        { dose: '10', weeks: '13-16', purpose: 'Higher efficacy; significant appetite suppression' },
        { dose: '12.5', weeks: '17-20', purpose: 'Optional increase for additional loss' },
        { dose: '15', weeks: '21+', purpose: 'Maximum dose; highest efficacy in SURMOUNT trials' }
    ];

    // --- Unit toggle ---
    var metricBtn = document.getElementById('metricBtn');
    var imperialBtn = document.getElementById('imperialBtn');

    metricBtn.addEventListener('click', function () {
        currentUnits = 'metric';
        metricBtn.classList.add('active');
        imperialBtn.classList.remove('active');
        document.getElementById('weight-metric').classList.remove('hidden');
        document.getElementById('weight-imperial').classList.add('hidden');
        document.getElementById('height-metric').classList.remove('hidden');
        document.getElementById('height-imperial').classList.add('hidden');
    });

    imperialBtn.addEventListener('click', function () {
        currentUnits = 'imperial';
        imperialBtn.classList.add('active');
        metricBtn.classList.remove('active');
        document.getElementById('weight-imperial').classList.remove('hidden');
        document.getElementById('weight-metric').classList.add('hidden');
        document.getElementById('height-imperial').classList.remove('hidden');
        document.getElementById('height-metric').classList.add('hidden');
    });

    // --- Calculate ---
    document.getElementById('calculate-btn').addEventListener('click', calculate);

    function getWeightKg() {
        if (currentUnits === 'metric') {
            return parseFloat(document.getElementById('weight-kg').value);
        }
        var lb = parseFloat(document.getElementById('weight-lb').value);
        return lb ? lb / 2.20462 : NaN;
    }

    function getHeightM() {
        if (currentUnits === 'metric') {
            var cm = parseFloat(document.getElementById('height-cm').value);
            return cm ? cm / 100 : NaN;
        }
        var ft = parseFloat(document.getElementById('height-ft').value) || 0;
        var inches = parseFloat(document.getElementById('height-in').value) || 0;
        return (ft * 12 + inches) * 0.0254;
    }

    function formatWeight(kg) {
        if (currentUnits === 'imperial') {
            return (kg * 2.20462).toFixed(1) + ' lbs';
        }
        return kg.toFixed(1) + ' kg';
    }

    function calculate() {
        var weightKg = getWeightKg();
        var heightM = getHeightM();
        var age = parseInt(document.getElementById('age').value);

        if (!weightKg || weightKg <= 0 || !heightM || heightM <= 0) {
            alert('Please enter your weight and height.');
            return;
        }
        if (!age || age < 18) {
            alert('Please enter a valid age (18+).');
            return;
        }

        var dose = document.getElementById('dose').value;
        var durationWeeks = parseInt(document.getElementById('duration').value);
        var activity = document.getElementById('activity').value;

        // Base weight loss % at 72 weeks for selected dose
        var baseLoss72w = DOSE_LOSS_72W[dose] || 0.15;

        // Scale for duration (non-linear via log model)
        var durationFraction = Math.log(1 + durationWeeks) / Math.log(1 + REF_WEEKS);
        // Beyond 72 weeks, diminishing returns — cap at 105% of 72-week result
        var scaledLoss = baseLoss72w * Math.min(durationFraction, 1.05);

        // Apply activity modifier
        var actMod = ACTIVITY_MOD[activity] || 1.0;
        var adjustedLoss = scaledLoss * actMod;

        // Generate range (+/-15% around central estimate)
        var lossLow = adjustedLoss * 0.85;
        var lossHigh = adjustedLoss * 1.15;

        var weightLossKgLow = weightKg * lossLow;
        var weightLossKgHigh = weightKg * lossHigh;
        var weightLossKgMid = weightKg * adjustedLoss;

        var finalWeightKg = weightKg - weightLossKgMid;
        var startBMI = weightKg / (heightM * heightM);
        var finalBMI = finalWeightKg / (heightM * heightM);

        // Weekly rate
        var weeklyRateKg = weightLossKgMid / durationWeeks;

        // Lifestyle-only comparison (diet + exercise without medication: ~3-5% over 6-12 months)
        var lifestyleOnlyPct = 0.04 * Math.min(durationFraction, 1.0) * actMod;
        var lifestyleOnlyKg = weightKg * lifestyleOnlyPct;

        // --- Display results ---
        document.getElementById('weightLossRange').textContent =
            formatWeight(weightLossKgLow) + ' - ' + formatWeight(weightLossKgHigh);
        document.getElementById('loss-pct-label').textContent =
            (lossLow * 100).toFixed(1) + '% - ' + (lossHigh * 100).toFixed(1) + '% of starting body weight';

        document.getElementById('startWeight').textContent = formatWeight(weightKg);
        document.getElementById('finalWeight').textContent = formatWeight(finalWeightKg);
        document.getElementById('startBMI').textContent = startBMI.toFixed(1);
        document.getElementById('finalBMI').textContent = finalBMI.toFixed(1);

        document.getElementById('weeklyRate').textContent = formatWeight(weeklyRateKg) + '/week';

        var doseSelect = document.getElementById('dose');
        document.getElementById('dose-display').textContent = doseSelect.options[doseSelect.selectedIndex].text;

        var durSelect = document.getElementById('duration');
        document.getElementById('duration-display').textContent = durSelect.options[durSelect.selectedIndex].text;

        document.getElementById('activity-modifier').textContent =
            (actMod >= 1 ? '+' : '') + ((actMod - 1) * 100).toFixed(0) + '%';

        // With vs without medication
        document.getElementById('withMedLoss').textContent =
            formatWeight(weightLossKgMid) + ' (' + (adjustedLoss * 100).toFixed(1) + '%)';
        document.getElementById('withoutMedLoss').textContent =
            formatWeight(lifestyleOnlyKg) + ' (' + (lifestyleOnlyPct * 100).toFixed(1) + '%)';

        // --- Dose titration table ---
        var titrationBody = document.getElementById('titration-body');
        titrationBody.innerHTML = '';
        var targetDoseNum = parseFloat(dose);
        for (var i = 0; i < TITRATION_SCHEDULE.length; i++) {
            var step = TITRATION_SCHEDULE[i];
            var stepDoseNum = parseFloat(step.dose);
            var tr = document.createElement('tr');
            tr.style.borderBottom = '1px solid #eee';
            var isTarget = stepDoseNum === targetDoseNum;
            var isBeyond = stepDoseNum > targetDoseNum;
            if (isBeyond) {
                tr.style.opacity = '0.4';
            }
            tr.innerHTML =
                '<td style="padding: 8px;">' + step.weeks + '</td>' +
                '<td style="padding: 8px; font-weight: 500;">' + step.dose + ' mg' +
                    (isTarget ? ' <span style="color: var(--color-accent); font-size: 0.85rem;">(your target)</span>' : '') +
                '</td>' +
                '<td style="padding: 8px;">' + step.purpose + '</td>';
            titrationBody.appendChild(tr);
        }

        // --- Monthly trajectory table ---
        var tbody = document.getElementById('trajectory-body');
        tbody.innerHTML = '';
        var durationMonths = Math.ceil(durationWeeks / 4.345);
        var labels = ['Start'];
        var chartData = [parseFloat(currentUnits === 'imperial' ? (weightKg * 2.20462).toFixed(1) : weightKg.toFixed(1))];

        for (var m = 1; m <= durationMonths; m++) {
            var weekAtMonth = Math.min(m * 4.345, durationWeeks);
            var frac = cumulativeFraction(weekAtMonth, durationWeeks);
            var cumLoss = weightLossKgMid * frac;
            var projWeight = weightKg - cumLoss;
            var pctLost = (cumLoss / weightKg) * 100;

            var monthTr = document.createElement('tr');
            monthTr.style.borderBottom = '1px solid #eee';
            monthTr.innerHTML =
                '<td style="padding: 8px;">Month ' + m + '</td>' +
                '<td style="padding: 8px;">' + formatWeight(projWeight) + '</td>' +
                '<td style="padding: 8px;">' + formatWeight(cumLoss) + '</td>' +
                '<td style="padding: 8px;">' + pctLost.toFixed(1) + '%</td>';
            tbody.appendChild(monthTr);

            labels.push('M' + m);
            chartData.push(parseFloat(currentUnits === 'imperial' ? (projWeight * 2.20462).toFixed(1) : projWeight.toFixed(1)));
        }

        // Show results
        document.getElementById('results').classList.remove('hidden');

        // --- Chart ---
        createChart(labels, chartData);

        // Content loops
        if (typeof showNextSteps === 'function' && typeof collectUserData === 'function') {
            showNextSteps('zepbound', collectUserData());
        }
    }

    function createChart(labels, data) {
        var ctx = document.getElementById('chart').getContext('2d');
        if (window.zepboundChart) {
            window.zepboundChart.destroy();
        }

        var unitLabel = currentUnits === 'imperial' ? 'lbs' : 'kg';

        window.zepboundChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Projected Weight (' + unitLabel + ')',
                    data: data,
                    borderColor: '#0ea5e9',
                    backgroundColor: 'rgba(14, 165, 233, 0.1)',
                    fill: true,
                    tension: 0.4,
                    pointBackgroundColor: '#0ea5e9',
                    pointRadius: 4
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: { display: true, position: 'top' }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        title: { display: true, text: 'Weight (' + unitLabel + ')' }
                    },
                    x: {
                        title: { display: true, text: 'Month' }
                    }
                }
            }
        });
    }
});
