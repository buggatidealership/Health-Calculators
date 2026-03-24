// GLP-1 Comparison Calculator — factory-compatible
(function() {
var currentUnits = 'metric';

// --- Medication profiles ---
var MEDS = {
    ozempic: {
        name: 'Ozempic',
        fullName: 'Ozempic (semaglutide 2.4 mg)',
        color: '#2563eb',
        bgColor: 'rgba(37, 99, 235, 0.1)',
        maxLossPct: 0.149,
        trialWeeks: 68,
        plateauWeek: 40,
        k: 0.07
    },
    mounjaro: {
        name: 'Mounjaro',
        fullName: 'Mounjaro (tirzepatide 15 mg)',
        color: '#0d9488',
        bgColor: 'rgba(13, 148, 136, 0.1)',
        maxLossPct: 0.225,
        trialWeeks: 72,
        plateauWeek: 52,
        k: 0.055
    },
    zepbound: {
        name: 'Zepbound',
        fullName: 'Zepbound (tirzepatide 15 mg)',
        color: '#7c3aed',
        bgColor: 'rgba(124, 58, 237, 0.1)',
        maxLossPct: 0.225,
        trialWeeks: 72,
        plateauWeek: 52,
        k: 0.055
    }
};

function lossFraction(week, med) {
    if (week <= 0) return 0;
    var denom = 1 - Math.exp(-med.k * med.trialWeeks);
    if (denom === 0) return 0;
    var frac = (1 - Math.exp(-med.k * week)) / denom;
    return Math.min(frac, 1.05);
}

function weightLossPctAtWeek(week, med) {
    return med.maxLossPct * lossFraction(week, med);
}

function weeksToReachPct(targetPct, med) {
    if (targetPct > med.maxLossPct * 1.05) return null;
    var lo = 0, hi = 150, mid;
    for (var i = 0; i < 50; i++) {
        mid = (lo + hi) / 2;
        var pct = weightLossPctAtWeek(mid, med);
        if (pct < targetPct) { lo = mid; } else { hi = mid; }
    }
    return Math.round(mid);
}

// --- Unit toggle via factory radio_row ---
var unitRow = document.querySelector('[data-group="units"]');
if (unitRow) {
    unitRow.querySelectorAll('.unit-btn').forEach(function(btn) {
        btn.addEventListener('click', function() {
            unitRow.querySelectorAll('.unit-btn').forEach(function(b) { b.classList.remove('active'); });
            this.classList.add('active');
            currentUnits = this.dataset.value;
            toggleUnitFields();
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

// --- Helpers ---
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

function formatWeight(kg) {
    if (currentUnits === 'imperial') {
        return (kg * 2.20462).toFixed(1) + ' lbs';
    }
    return kg.toFixed(1) + ' kg';
}

// --- Calculate ---
var calcBtn = document.getElementById('calcBtn');
if (calcBtn) calcBtn.addEventListener('click', calculate);

function calculate() {
    var weightKg = getWeightKg();
    var heightM = getHeightM();
    var ageEl = document.getElementById('age');
    var age = ageEl ? parseInt(ageEl.value) : 0;
    var durationEl = document.getElementById('duration');
    var durationWeeks = durationEl ? parseInt(durationEl.value) : 52;

    if (!weightKg || weightKg <= 0 || !heightM || heightM <= 0) {
        return;
    }
    if (!age || age < 18) {
        return;
    }

    var medKeys = ['ozempic', 'mounjaro', 'zepbound'];
    var results = {};
    var maxLoss = 0;
    var winner = '';

    medKeys.forEach(function(key) {
        var med = MEDS[key];
        var lossPct = weightLossPctAtWeek(durationWeeks, med);
        var lossKg = weightKg * lossPct;
        var finalKg = weightKg - lossKg;
        var finalBMI = finalKg / (heightM * heightM);

        results[key] = {
            lossPct: lossPct,
            lossKg: lossKg,
            finalKg: finalKg,
            finalBMI: finalBMI,
            weeksTo5: weeksToReachPct(0.05, med),
            weeksTo10: weeksToReachPct(0.10, med),
            weeksTo15: weeksToReachPct(0.15, med)
        };

        if (lossKg > maxLoss) {
            maxLoss = lossKg;
            winner = key;
        }
    });

    // Set primary result
    var resultNumberEl = document.getElementById('resultNumber');
    if (resultNumberEl) {
        resultNumberEl.textContent = formatWeight(results[winner].lossKg);
    }
    var resultVerdictEl = document.getElementById('resultVerdict');
    if (resultVerdictEl) {
        resultVerdictEl.textContent = MEDS[winner].name + ' shows the greatest projected loss at ' + durationWeeks + ' weeks';
    }

    // --- Build comparison table ---
    var tbody = document.getElementById('comparison-body');
    if (tbody) {
        tbody.innerHTML = '';

        var rows = [
            { label: 'Projected Weight Loss', getValue: function(r) { return formatWeight(r.lossKg) + ' (' + (r.lossPct * 100).toFixed(1) + '%)'; }, highlight: 'max', field: 'lossKg' },
            { label: 'Projected Final Weight', getValue: function(r) { return formatWeight(r.finalKg); }, highlight: 'min', field: 'finalKg' },
            { label: 'Final BMI', getValue: function(r) { return r.finalBMI.toFixed(1); }, highlight: 'min', field: 'finalBMI' },
            { label: 'Time to 5% Loss', getValue: function(r) { return r.weeksTo5 !== null ? r.weeksTo5 + ' weeks' : 'N/A'; }, highlight: 'min', field: 'weeksTo5' },
            { label: 'Time to 10% Loss', getValue: function(r) { return r.weeksTo10 !== null ? r.weeksTo10 + ' weeks' : 'N/A'; }, highlight: 'min', field: 'weeksTo10' },
            { label: 'Time to 15% Loss', getValue: function(r) { return r.weeksTo15 !== null ? r.weeksTo15 + ' weeks' : 'N/A'; }, highlight: 'min', field: 'weeksTo15' }
        ];

        rows.forEach(function(row) {
            var tr = document.createElement('tr');
            tr.style.borderBottom = '1px solid rgba(255,255,255,0.06)';

            var bestVal = null;
            medKeys.forEach(function(key) {
                var val = results[key][row.field];
                if (val === null) return;
                if (bestVal === null) { bestVal = val; return; }
                if (row.highlight === 'max' && val > bestVal) bestVal = val;
                if (row.highlight === 'min' && val < bestVal) bestVal = val;
            });

            var html = '<td style="padding:10px;font-weight:500;">' + row.label + '</td>';
            medKeys.forEach(function(key) {
                var val = results[key][row.field];
                var cellVal = row.getValue(results[key]);
                var isBest = val !== null && val === bestVal;
                var style = 'text-align:center;padding:10px;';
                if (isBest) style += 'font-weight:700;background:rgba(var(--accent-rgb),0.06);';
                html += '<td style="' + style + '">' + cellVal + (isBest ? ' &#9733;' : '') + '</td>';
            });

            tr.innerHTML = html;
            tbody.appendChild(tr);
        });
    }

    // Winner banner
    var winnerBanner = document.getElementById('winner-banner');
    if (winnerBanner) {
        var winnerMed = MEDS[winner];
        winnerBanner.innerHTML = '<strong>' + winnerMed.name + '</strong> shows the greatest projected weight loss: <strong>' +
            formatWeight(results[winner].lossKg) + '</strong> (' + (results[winner].lossPct * 100).toFixed(1) + '%) over ' + durationWeeks + ' weeks.';
        winnerBanner.style.borderColor = winnerMed.color;
    }

    // --- Build milestone table ---
    var milestoneTbody = document.getElementById('milestone-body');
    if (milestoneTbody) {
        milestoneTbody.innerHTML = '';

        var milestones = [
            { label: 'Reach 5% weight loss', field: 'weeksTo5' },
            { label: 'Reach 10% weight loss', field: 'weeksTo10' },
            { label: 'Reach 15% weight loss', field: 'weeksTo15' }
        ];

        milestones.forEach(function(m) {
            var tr = document.createElement('tr');
            tr.style.borderBottom = '1px solid rgba(255,255,255,0.06)';

            var minWeeks = null;
            medKeys.forEach(function(key) {
                var val = results[key][m.field];
                if (val !== null && (minWeeks === null || val < minWeeks)) minWeeks = val;
            });

            var html = '<td style="padding:10px;font-weight:500;">' + m.label + '</td>';
            medKeys.forEach(function(key) {
                var val = results[key][m.field];
                var display = val !== null ? val + ' weeks' : 'Not reached';
                var isBest = val !== null && val === minWeeks;
                var style = 'text-align:center;padding:10px;';
                if (isBest) style += 'font-weight:700;background:rgba(var(--accent-rgb),0.06);';
                if (val === null) style += 'color:var(--text-muted);';
                html += '<td style="' + style + '">' + display + '</td>';
            });

            tr.innerHTML = html;
            milestoneTbody.appendChild(tr);
        });
    }

    // Reveal results via factory
    if (typeof factoryReveal === 'function') { factoryReveal(); }

    // Chart (load Chart.js if needed)
    ensureChartJs(function() { createChart(weightKg, durationWeeks); });

    if (typeof showNextSteps === 'function' && typeof collectUserData === 'function') {
        showNextSteps('glp1-comparison', collectUserData());
    }
}

function ensureChartJs(cb) {
    if (typeof Chart !== 'undefined') return cb();
    var s = document.createElement('script');
    s.src = 'https://cdn.jsdelivr.net/npm/chart.js';
    s.onload = cb;
    document.head.appendChild(s);
}

function createChart(weightKg, durationWeeks) {
    var canvas = document.getElementById('chart');
    if (!canvas) return;
    var ctx = canvas.getContext('2d');

    if (window.glp1Chart) {
        window.glp1Chart.destroy();
    }

    var unitLabel = currentUnits === 'imperial' ? 'lbs' : 'kg';
    var medKeys = ['ozempic', 'mounjaro', 'zepbound'];

    var labels = [];
    var datasets = {};
    medKeys.forEach(function(key) { datasets[key] = []; });

    var step = durationWeeks <= 24 ? 2 : 4;
    for (var w = 0; w <= durationWeeks; w += step) {
        labels.push('Wk ' + w);
        medKeys.forEach(function(key) {
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

    if ((durationWeeks % step) !== 0) {
        labels.push('Wk ' + durationWeeks);
        medKeys.forEach(function(key) {
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
            datasets: medKeys.map(function(key) {
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
            interaction: { mode: 'index', intersect: false },
            plugins: {
                legend: { display: true, position: 'top', labels: { usePointStyle: true, padding: 16 } },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.dataset.label + ': ' + context.parsed.y + ' ' + unitLabel;
                        }
                    }
                }
            },
            scales: {
                y: { beginAtZero: false, title: { display: true, text: 'Weight (' + unitLabel + ')' } },
                x: { title: { display: true, text: 'Week' } }
            }
        }
    });
}
})();
