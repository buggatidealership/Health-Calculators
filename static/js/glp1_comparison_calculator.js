/**
 * GLP-1 Comparison Calculator
 *
 * Compares projected weight loss across Ozempic (semaglutide 2.4 mg),
 * Mounjaro (tirzepatide 15 mg), and Zepbound (tirzepatide 15 mg).
 *
 * Clinical data sources:
 *   Ozempic/Wegovy: STEP-1 (Wilding et al., NEJM 2021) — 14.9% at 68 weeks
 *   Mounjaro/Zepbound: SURMOUNT-1 (Jastreboff et al., NEJM 2022) — 22.5% at 72 weeks
 *
 * Weight loss is non-linear. Semaglutide plateaus earlier (~40 weeks);
 * tirzepatide continues declining longer (~52+ weeks).
 */

document.addEventListener('DOMContentLoaded', function () {
    var currentUnits = 'metric';

    // --- Medication profiles ---
    var MEDS = {
        ozempic: {
            name: 'Ozempic',
            fullName: 'Ozempic (semaglutide 2.4 mg)',
            color: '#2563eb',
            bgColor: 'rgba(37, 99, 235, 0.1)',
            maxLossPct: 0.149,      // 14.9% STEP-1
            trialWeeks: 68,         // STEP-1 duration
            plateauWeek: 40,        // rapid loss slows around week 40
            // Non-linear curve parameters: log model with early plateau
            // k controls how front-loaded the loss is (higher = earlier plateau)
            k: 0.07
        },
        mounjaro: {
            name: 'Mounjaro',
            fullName: 'Mounjaro (tirzepatide 15 mg)',
            color: '#0d9488',
            bgColor: 'rgba(13, 148, 136, 0.1)',
            maxLossPct: 0.225,      // 22.5% SURMOUNT-1
            trialWeeks: 72,         // SURMOUNT-1 duration
            plateauWeek: 52,        // continues declining longer
            k: 0.055
        },
        zepbound: {
            name: 'Zepbound',
            fullName: 'Zepbound (tirzepatide 15 mg)',
            color: '#7c3aed',
            bgColor: 'rgba(124, 58, 237, 0.1)',
            maxLossPct: 0.225,      // Same as Mounjaro (same drug)
            trialWeeks: 72,
            plateauWeek: 52,
            k: 0.055
        }
    };

    /**
     * Non-linear weight loss curve.
     * Uses a saturating exponential: fraction = (1 - exp(-k * week)) / (1 - exp(-k * trialWeeks))
     * This produces rapid early loss that gradually flattens — matching clinical trial curves.
     *
     * For weeks beyond the trial endpoint, we allow modest extrapolation capped at 105%.
     */
    function lossFraction(week, med) {
        if (week <= 0) return 0;
        var denom = 1 - Math.exp(-med.k * med.trialWeeks);
        if (denom === 0) return 0;
        var frac = (1 - Math.exp(-med.k * week)) / denom;
        // Cap extrapolation beyond trial duration at 105%
        return Math.min(frac, 1.05);
    }

    /**
     * Calculate total weight loss % at a given week for a medication.
     */
    function weightLossPctAtWeek(week, med) {
        return med.maxLossPct * lossFraction(week, med);
    }

    /**
     * Find the week at which a given % body weight loss is reached.
     * Returns null if the medication cannot reach that % within reasonable time.
     */
    function weeksToReachPct(targetPct, med) {
        // Max achievable is ~105% of maxLossPct
        if (targetPct > med.maxLossPct * 1.05) return null;
        // Binary search
        var lo = 0, hi = 150, mid;
        for (var i = 0; i < 50; i++) {
            mid = (lo + hi) / 2;
            var pct = weightLossPctAtWeek(mid, med);
            if (pct < targetPct) {
                lo = mid;
            } else {
                hi = mid;
            }
        }
        return Math.round(mid);
    }

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

    // --- Helpers ---
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

    function formatWeightShort(kg) {
        if (currentUnits === 'imperial') {
            return (kg * 2.20462).toFixed(1);
        }
        return kg.toFixed(1);
    }

    // --- Calculate ---
    document.getElementById('calculate-btn').addEventListener('click', calculate);

    function calculate() {
        var weightKg = getWeightKg();
        var heightM = getHeightM();
        var age = parseInt(document.getElementById('age').value);
        var durationWeeks = parseInt(document.getElementById('duration').value);

        if (!weightKg || weightKg <= 0 || !heightM || heightM <= 0) {
            alert('Please enter your weight and height.');
            return;
        }
        if (!age || age < 18) {
            alert('Please enter a valid age (18+).');
            return;
        }

        var startBMI = weightKg / (heightM * heightM);

        // Calculate results for each medication
        var results = {};
        var medKeys = ['ozempic', 'mounjaro', 'zepbound'];
        var maxLoss = 0;
        var winner = '';

        medKeys.forEach(function (key) {
            var med = MEDS[key];
            var lossPct = weightLossPctAtWeek(durationWeeks, med);
            var lossKg = weightKg * lossPct;
            var finalKg = weightKg - lossKg;
            var finalBMI = finalKg / (heightM * heightM);

            var weeksTo5 = weeksToReachPct(0.05, med);
            var weeksTo10 = weeksToReachPct(0.10, med);
            var weeksTo15 = weeksToReachPct(0.15, med);

            results[key] = {
                lossPct: lossPct,
                lossKg: lossKg,
                finalKg: finalKg,
                finalBMI: finalBMI,
                weeksTo5: weeksTo5,
                weeksTo10: weeksTo10,
                weeksTo15: weeksTo15
            };

            if (lossKg > maxLoss) {
                maxLoss = lossKg;
                winner = key;
            }
        });

        // --- Build comparison table ---
        var tbody = document.getElementById('comparison-body');
        tbody.innerHTML = '';

        var rows = [
            {
                label: 'Projected Weight Loss',
                getValue: function (r, key) {
                    return formatWeight(r.lossKg) + ' (' + (r.lossPct * 100).toFixed(1) + '%)';
                },
                highlight: 'max',
                field: 'lossKg'
            },
            {
                label: 'Projected Final Weight',
                getValue: function (r) { return formatWeight(r.finalKg); },
                highlight: 'min',
                field: 'finalKg'
            },
            {
                label: 'Final BMI',
                getValue: function (r) { return r.finalBMI.toFixed(1); },
                highlight: 'min',
                field: 'finalBMI'
            },
            {
                label: 'Time to 5% Loss',
                getValue: function (r) { return r.weeksTo5 !== null ? r.weeksTo5 + ' weeks' : 'N/A'; },
                highlight: 'min',
                field: 'weeksTo5'
            },
            {
                label: 'Time to 10% Loss',
                getValue: function (r) { return r.weeksTo10 !== null ? r.weeksTo10 + ' weeks' : 'N/A'; },
                highlight: 'min',
                field: 'weeksTo10'
            },
            {
                label: 'Time to 15% Loss',
                getValue: function (r) { return r.weeksTo15 !== null ? r.weeksTo15 + ' weeks' : 'N/A'; },
                highlight: 'min',
                field: 'weeksTo15'
            }
        ];

        rows.forEach(function (row) {
            var tr = document.createElement('tr');
            tr.style.borderBottom = '1px solid #eee';

            // Find the best value for highlighting
            var bestVal = null;
            medKeys.forEach(function (key) {
                var val = results[key][row.field];
                if (val === null) return;
                if (bestVal === null) { bestVal = val; return; }
                if (row.highlight === 'max' && val > bestVal) bestVal = val;
                if (row.highlight === 'min' && val < bestVal) bestVal = val;
            });

            var html = '<td style="padding: 10px; font-weight: 500;">' + row.label + '</td>';
            medKeys.forEach(function (key) {
                var val = results[key][row.field];
                var cellVal = row.getValue(results[key], key);
                var isBest = val !== null && val === bestVal;
                var style = 'text-align: center; padding: 10px;';
                if (isBest) {
                    style += ' font-weight: 700; background: #f0fdf4;';
                }
                html += '<td style="' + style + '">' + cellVal + (isBest ? ' &#9733;' : '') + '</td>';
            });

            tr.innerHTML = html;
            tbody.appendChild(tr);
        });

        // Winner banner
        var winnerBanner = document.getElementById('winner-banner');
        var winnerMed = MEDS[winner];
        winnerBanner.innerHTML = '<strong>' + winnerMed.name + '</strong> shows the greatest projected weight loss: <strong>' +
            formatWeight(results[winner].lossKg) + '</strong> (' + (results[winner].lossPct * 100).toFixed(1) + '%) over ' + durationWeeks + ' weeks.';
        winnerBanner.style.borderColor = winnerMed.color;

        // --- Build milestone table ---
        var milestoneTbody = document.getElementById('milestone-body');
        milestoneTbody.innerHTML = '';

        var milestones = [
            { label: 'Reach 5% weight loss', field: 'weeksTo5' },
            { label: 'Reach 10% weight loss', field: 'weeksTo10' },
            { label: 'Reach 15% weight loss', field: 'weeksTo15' }
        ];

        milestones.forEach(function (m) {
            var tr = document.createElement('tr');
            tr.style.borderBottom = '1px solid #eee';

            // Find fastest (min weeks)
            var minWeeks = null;
            medKeys.forEach(function (key) {
                var val = results[key][m.field];
                if (val !== null && (minWeeks === null || val < minWeeks)) minWeeks = val;
            });

            var html = '<td style="padding: 10px; font-weight: 500;">' + m.label + '</td>';
            medKeys.forEach(function (key) {
                var val = results[key][m.field];
                var display = val !== null ? val + ' weeks' : 'Not reached';
                var isBest = val !== null && val === minWeeks;
                var style = 'text-align: center; padding: 10px;';
                if (isBest) {
                    style += ' font-weight: 700; background: #f0fdf4;';
                }
                if (val === null) {
                    style += ' color: #999;';
                }
                html += '<td style="' + style + '">' + display + '</td>';
            });

            tr.innerHTML = html;
            milestoneTbody.appendChild(tr);
        });

        // Show results
        document.getElementById('results').classList.remove('hidden');

        // --- Chart ---
        createChart(weightKg, durationWeeks, results);

        // Content loops
        if (typeof showNextSteps === 'function' && typeof collectUserData === 'function') {
            showNextSteps('glp1-comparison', collectUserData());
        }
    }

    function createChart(weightKg, durationWeeks, results) {
        var ctx = document.getElementById('chart').getContext('2d');
        if (window.glp1Chart) {
            window.glp1Chart.destroy();
        }

        var unitLabel = currentUnits === 'imperial' ? 'lbs' : 'kg';

        // Generate weekly data points (every 2 weeks for cleaner chart)
        var labels = [];
        var datasets = {};
        var medKeys = ['ozempic', 'mounjaro', 'zepbound'];

        medKeys.forEach(function (key) {
            datasets[key] = [];
        });

        var step = durationWeeks <= 24 ? 2 : 4;
        for (var w = 0; w <= durationWeeks; w += step) {
            labels.push('Wk ' + w);
            medKeys.forEach(function (key) {
                var med = MEDS[key];
                var lossPct = weightLossPctAtWeek(w, med);
                var currentWeight = weightKg * (1 - lossPct);
                if (currentUnits === 'imperial') {
                    datasets[key].push((currentWeight * 2.20462).toFixed(1));
                } else {
                    datasets[key].push(currentWeight.toFixed(1));
                }
            });
        }

        // Ensure the final week is included
        if ((durationWeeks % step) !== 0) {
            labels.push('Wk ' + durationWeeks);
            medKeys.forEach(function (key) {
                var med = MEDS[key];
                var lossPct = weightLossPctAtWeek(durationWeeks, med);
                var currentWeight = weightKg * (1 - lossPct);
                if (currentUnits === 'imperial') {
                    datasets[key].push((currentWeight * 2.20462).toFixed(1));
                } else {
                    datasets[key].push(currentWeight.toFixed(1));
                }
            });
        }

        window.glp1Chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: medKeys.map(function (key) {
                    var med = MEDS[key];
                    return {
                        label: med.name + ' (' + unitLabel + ')',
                        data: datasets[key],
                        borderColor: med.color,
                        backgroundColor: med.bgColor,
                        fill: false,
                        tension: 0.4,
                        pointBackgroundColor: med.color,
                        pointRadius: 3,
                        borderWidth: 2.5
                    };
                })
            },
            options: {
                responsive: true,
                interaction: {
                    mode: 'index',
                    intersect: false
                },
                plugins: {
                    legend: {
                        display: true,
                        position: 'top',
                        labels: {
                            usePointStyle: true,
                            padding: 16
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function (context) {
                                return context.dataset.label + ': ' + context.parsed.y + ' ' + unitLabel;
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        title: { display: true, text: 'Weight (' + unitLabel + ')' }
                    },
                    x: {
                        title: { display: true, text: 'Week' }
                    }
                }
            }
        });
    }
});
