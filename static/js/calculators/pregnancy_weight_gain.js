// Pregnancy Weight Gain Calculator — factory-compatible
(function() {

// IOM 2009 guidelines
var IOM = {
    single: {
        underweight:  { range: [28, 40], weeklyLb: 1.12, firstTri: 4.5 },
        normal:       { range: [25, 35], weeklyLb: 0.93, firstTri: 3.5 },
        overweight:   { range: [15, 25], weeklyLb: 0.62, firstTri: 2.0 },
        obese:        { range: [11, 20], weeklyLb: 0.49, firstTri: 2.0 }
    },
    twins: {
        underweight:  { range: [50, 62], weeklyLb: 1.50, firstTri: 4.5 },
        normal:       { range: [37, 54], weeklyLb: 1.34, firstTri: 4.5 },
        overweight:   { range: [31, 50], weeklyLb: 1.12, firstTri: 3.0 },
        obese:        { range: [25, 42], weeklyLb: 0.93, firstTri: 3.0 }
    }
};

function bmiCategory(bmi) {
    if (bmi < 18.5) return 'underweight';
    if (bmi < 25) return 'normal';
    if (bmi < 30) return 'overweight';
    return 'obese';
}

function bmiCategoryLabel(cat) {
    return { underweight: 'Underweight', normal: 'Normal weight', overweight: 'Overweight', obese: 'Obese' }[cat] || cat;
}

var useImperial = true;

// Unit toggle via factory radio_row
var unitRow = document.querySelector('[data-group="unitToggle"]');
if (unitRow) {
    unitRow.addEventListener('click', function(e) {
        var btn = e.target.closest('.unit-btn');
        if (!btn) return;
        unitRow.querySelectorAll('.unit-btn').forEach(function(b) { b.classList.remove('active'); });
        btn.classList.add('active');
        useImperial = btn.dataset.value === 'imperial';
        toggleUnitFields();
    });
}

function toggleUnitFields() {
    // Imperial fields row (contains weightLbs)
    var wLb = document.getElementById('weightLbs');
    var hFt = document.getElementById('heightFt');
    var wKg = document.getElementById('weightKg');
    var hCm = document.getElementById('heightCm');
    var cwLb = document.getElementById('currentWeightLbs');
    var cwKg = document.getElementById('currentWeightKg');

    var impRow1 = wLb ? wLb.closest('.form-row') : null;
    var impRow2 = hFt ? hFt.closest('.form-row') : null;
    var metRow1 = wKg ? wKg.closest('.form-row') : null;
    var metRow2 = hCm ? hCm.closest('.form-row') : null;
    var cwImpRow = cwLb ? cwLb.closest('.form-group') : null;
    var cwMetRow = cwKg ? cwKg.closest('.form-group') : null;

    if (impRow1) impRow1.style.display = useImperial ? '' : 'none';
    if (impRow2) impRow2.style.display = useImperial ? '' : 'none';
    if (metRow1) metRow1.style.display = useImperial ? 'none' : '';
    if (metRow2) metRow2.style.display = useImperial ? 'none' : '';
    if (cwImpRow) cwImpRow.style.display = useImperial ? '' : 'none';
    if (cwMetRow) cwMetRow.style.display = useImperial ? 'none' : '';
}

// Hide metric fields on load
toggleUnitFields();

// Populate gestational week dropdown
var gestWeek = document.getElementById('gestWeek');
if (gestWeek && gestWeek.options.length <= 1) {
    for (var w = 1; w <= 42; w++) {
        var opt = document.createElement('option');
        opt.value = w;
        opt.textContent = 'Week ' + w;
        gestWeek.appendChild(opt);
    }
}

var calcBtn = document.getElementById('calcBtn');
if (calcBtn) calcBtn.addEventListener('click', calculate);

function calculate() {
    var weightKg, heightM;

    if (useImperial) {
        var wLbEl = document.getElementById('weightLbs');
        var hFtEl = document.getElementById('heightFt');
        var hInEl = document.getElementById('heightIn');
        var wLb = wLbEl ? parseFloat(wLbEl.value) : NaN;
        var hFt = hFtEl ? parseFloat(hFtEl.value) || 0 : 0;
        var hIn = hInEl ? parseFloat(hInEl.value) || 0 : 0;
        weightKg = wLb * 0.453592;
        heightM = (hFt * 12 + hIn) * 0.0254;
    } else {
        var wKgEl = document.getElementById('weightKg');
        var hCmEl = document.getElementById('heightCm');
        weightKg = wKgEl ? parseFloat(wKgEl.value) : NaN;
        var hCm = hCmEl ? parseFloat(hCmEl.value) : NaN;
        heightM = hCm / 100;
    }

    var gwEl = document.getElementById('gestWeek');
    var nbEl = document.getElementById('numBabies');
    var week = gwEl ? parseInt(gwEl.value) : NaN;
    var numBabies = nbEl ? parseInt(nbEl.value) : 1;

    if (isNaN(weightKg) || isNaN(heightM) || heightM <= 0 || isNaN(week)) {
        alert('Please fill in all required fields.');
        return;
    }

    var bmi = weightKg / (heightM * heightM);
    var cat = bmiCategory(bmi);
    var table = numBabies >= 2 ? IOM.twins : IOM.single;
    var rec = table[cat];

    var totalLow = rec.range[0];
    var totalHigh = rec.range[1];

    // Expected gain at current week
    var expectedLow, expectedHigh;
    if (week <= 13) {
        // First trimester: linear ramp to firstTri total
        expectedLow = (rec.firstTri / 13) * week * 0.8;
        expectedHigh = (rec.firstTri / 13) * week * 1.2;
    } else {
        var weeksAfterFirst = week - 13;
        var remainLow = totalLow - rec.firstTri;
        var remainHigh = totalHigh - rec.firstTri;
        var weeklyLow = remainLow / 27;
        var weeklyHigh = remainHigh / 27;
        expectedLow = rec.firstTri * 0.8 + weeklyLow * weeksAfterFirst;
        expectedHigh = rec.firstTri * 1.2 + weeklyHigh * weeksAfterFirst;
    }

    var isLbs = useImperial;
    var unitLabel = isLbs ? 'lbs' : 'kg';
    var toDisplay = isLbs ? 1 : 0.453592;

    var dispTotalLow = isLbs ? totalLow : (totalLow * 0.453592);
    var dispTotalHigh = isLbs ? totalHigh : (totalHigh * 0.453592);
    var dispExpLow = isLbs ? expectedLow : (expectedLow * 0.453592);
    var dispExpHigh = isLbs ? expectedHigh : (expectedHigh * 0.453592);

    // Primary result
    var resultNumber = document.getElementById('resultNumber');
    if (resultNumber) resultNumber.textContent = Math.round(dispTotalLow) + '–' + Math.round(dispTotalHigh) + ' ' + unitLabel;

    var resultVerdict = document.getElementById('resultVerdict');
    if (resultVerdict) resultVerdict.textContent = bmiCategoryLabel(cat) + ' BMI — ' + (numBabies >= 2 ? 'Twin' : 'Singleton') + ' pregnancy';

    // Breakdown cards
    var bmiValue = document.getElementById('bmiValue');
    var bmiCat = document.getElementById('bmiCategory');
    if (bmiValue) bmiValue.textContent = bmi.toFixed(1);
    if (bmiCat) bmiCat.textContent = bmiCategoryLabel(cat);

    var weekLabel = document.getElementById('currentWeekLabel');
    if (weekLabel) weekLabel.textContent = week;

    var expectedGain = document.getElementById('expectedGain');
    var expectedGainDetail = document.getElementById('expectedGainDetail');
    if (expectedGain) expectedGain.textContent = Math.round(dispExpLow) + '–' + Math.round(dispExpHigh) + ' ' + unitLabel;
    if (expectedGainDetail) expectedGainDetail.textContent = 'Expected gain by week ' + week;

    // Current weight tracking (optional)
    var actualGain = null;
    if (useImperial) {
        var cwLbEl = document.getElementById('currentWeightLbs');
        var cwLb = cwLbEl ? parseFloat(cwLbEl.value) : NaN;
        if (!isNaN(cwLb)) {
            var wLbEl2 = document.getElementById('weightLbs');
            var preLb = wLbEl2 ? parseFloat(wLbEl2.value) : NaN;
            if (!isNaN(preLb)) actualGain = cwLb - preLb;
        }
    } else {
        var cwKgEl = document.getElementById('currentWeightKg');
        var cwKg = cwKgEl ? parseFloat(cwKgEl.value) : NaN;
        if (!isNaN(cwKg)) {
            var wKgEl2 = document.getElementById('weightKg');
            var preKg = wKgEl2 ? parseFloat(wKgEl2.value) : NaN;
            if (!isNaN(preKg)) actualGain = cwKg - preKg;
        }
    }

    var remainingGain = document.getElementById('remainingGain');
    var remainingGainDetail = document.getElementById('remainingGainDetail');
    var statusValue = document.getElementById('statusValue');
    var statusDetail = document.getElementById('statusDetail');

    if (actualGain !== null) {
        var dispActual = isLbs ? actualGain : actualGain;
        var remainLowDisp = dispTotalLow - dispActual;
        var remainHighDisp = dispTotalHigh - dispActual;
        if (remainingGain) remainingGain.textContent = Math.max(0, Math.round(remainLowDisp)) + '–' + Math.max(0, Math.round(remainHighDisp)) + ' ' + unitLabel;
        if (remainingGainDetail) remainingGainDetail.textContent = 'Remaining for weeks ' + week + '-40';

        // Status
        if (statusValue && statusDetail) {
            if (dispActual < dispExpLow * 0.8) {
                statusValue.textContent = 'Below target';
                statusDetail.textContent = 'Talk to your provider about nutrition.';
            } else if (dispActual > dispExpHigh * 1.2) {
                statusValue.textContent = 'Above target';
                statusDetail.textContent = 'Discuss with your provider.';
            } else {
                statusValue.textContent = 'On track';
                statusDetail.textContent = 'Your weight gain is within the expected range.';
            }
        }
    } else {
        if (remainingGain) remainingGain.textContent = '--';
        if (remainingGainDetail) remainingGainDetail.textContent = 'Enter current weight to track';
        if (statusValue) statusValue.textContent = '--';
        if (statusDetail) statusDetail.textContent = 'Enter current weight to see status';
    }

    // Week-by-week timeline
    var tbody = document.getElementById('timelineBody');
    if (tbody) {
        tbody.innerHTML = '';
        for (var wk = 4; wk <= 40; wk += 4) {
            var row = document.createElement('tr');
            var eLow, eHigh;
            if (wk <= 13) {
                eLow = ((rec.firstTri / 13) * wk * 0.8);
                eHigh = ((rec.firstTri / 13) * wk * 1.2);
            } else {
                var wkAfter = wk - 13;
                var rL = totalLow - rec.firstTri;
                var rH = totalHigh - rec.firstTri;
                eLow = rec.firstTri * 0.8 + (rL / 27) * wkAfter;
                eHigh = rec.firstTri * 1.2 + (rH / 27) * wkAfter;
            }
            var dL = isLbs ? eLow : (eLow * 0.453592);
            var dH = isLbs ? eHigh : (eHigh * 0.453592);
            var yourGainStr = '--';
            if (actualGain !== null && wk === Math.round(week / 4) * 4) {
                yourGainStr = (actualGain >= 0 ? '+' : '') + actualGain.toFixed(1) + ' ' + unitLabel;
            }
            row.innerHTML = '<td>' + wk + '</td><td>' + dL.toFixed(1) + ' ' + unitLabel + '</td><td>' + dH.toFixed(1) + ' ' + unitLabel + '</td><td>' + yourGainStr + '</td>';
            tbody.appendChild(row);
        }
    }

    // Coach card
    var coachCard = document.getElementById('coachCard');
    if (coachCard) {
        var coachText = 'Your pre-pregnancy BMI is <span class="hl">' + bmi.toFixed(1) + '</span> (' + bmiCategoryLabel(cat) + ').<br>' +
            'IOM recommends <span class="hl">' + Math.round(dispTotalLow) + '–' + Math.round(dispTotalHigh) + ' ' + unitLabel + '</span> total gain';
        if (numBabies >= 2) coachText += ' for a twin pregnancy';
        coachText += '.<br>';
        if (actualGain !== null) {
            coachText += 'At week ' + week + ', you have gained <span class="hl">' + actualGain.toFixed(1) + ' ' + unitLabel + '</span>.';
        }
        coachCard.innerHTML = '<div class="coach-text">' + coachText +
            '<div class="coach-rule" style="font-family:var(--font-display);font-size:1.5rem;color:var(--accent);margin:1.5rem 0;">Steady gain matters more than the exact number.</div>' +
            '<div class="coach-advice" style="margin-top:1.5rem;padding-top:1.5rem;border-top:1px solid rgba(var(--accent-rgb),0.1);font-size:1.05rem;line-height:1.9;color:var(--text-dim);">' +
            'Every pregnancy is unique. These are population-level guidelines. Discuss your individual plan with your healthcare provider.' +
            '</div></div>';
    }

    // Share
    var shareText = 'Pregnancy weight gain by pre-pregnancy BMI (IOM 2009):\n\nUnderweight: 28-40 lbs\nNormal: 25-35 lbs\nOverweight: 15-25 lbs\nObese: 11-20 lbs\n\nCheck yours: healthcalculators.xyz/pregnancy-weight-gain-calculator';
    if (typeof updateShareButtons === 'function') {
        updateShareButtons(shareText);
    }

    if (typeof factoryReveal === 'function') factoryReveal();
    if (typeof hcTrackEvent === 'function') hcTrackEvent('calculator_complete', { calculator_name: 'Pregnancy Weight Gain Calculator', page_path: '/pregnancy-weight-gain-calculator' });
}

})();
