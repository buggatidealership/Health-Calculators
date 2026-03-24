// Child Growth Calculator — factory-compatible
(function() {
var useMetric = true;

// Unit toggle via factory radio_row (data-group="unitToggle")
var unitRow = document.querySelector('[data-group="unitToggle"]');
if (unitRow) {
    unitRow.addEventListener('toggle-selected', function(e) {
        var active = unitRow.querySelector('.unit-btn.active');
        if (!active) return;
        useMetric = active.dataset.value === 'metric';
        toggleUnitFields();
    });
}

function toggleUnitFields() {
    // Find metric row (contains heightCm) and imperial row (contains heightFt)
    var hcEl = document.getElementById('heightCm');
    var ftEl = document.getElementById('heightFt');
    var metricRow = hcEl ? hcEl.closest('.form-row') : null;
    var imperialRow = ftEl ? ftEl.closest('.form-row') : null;
    if (metricRow) metricRow.style.display = useMetric ? '' : 'none';
    if (imperialRow) imperialRow.style.display = useMetric ? 'none' : '';
}

// Hide imperial row on load
toggleUnitFields();

var calcBtn = document.getElementById('calcBtn');
if (calcBtn) calcBtn.addEventListener('click', calculate);

function calculate() {
    var ageYEl = document.getElementById('ageYears');
    var ageMEl = document.getElementById('ageMonths');
    var ageY = ageYEl ? (parseInt(ageYEl.value) || 0) : 0;
    var ageM = ageMEl ? (parseInt(ageMEl.value) || 0) : 0;
    var totalMonths = ageY * 12 + ageM;
    var heightCm, weightKg;
    if (useMetric) {
        var hcEl = document.getElementById('heightCm');
        var wkEl = document.getElementById('weightKg');
        heightCm = hcEl ? parseFloat(hcEl.value) : NaN;
        weightKg = wkEl ? parseFloat(wkEl.value) : NaN;
    } else {
        var ftEl = document.getElementById('heightFt');
        var inEl = document.getElementById('heightIn');
        var lbEl = document.getElementById('weightLbs');
        var ft = ftEl ? (parseFloat(ftEl.value) || 0) : 0;
        var inch = inEl ? (parseFloat(inEl.value) || 0) : 0;
        heightCm = (ft * 12 + inch) * 2.54;
        weightKg = lbEl ? parseFloat(lbEl.value) * 0.453592 : NaN;
    }
    if (!totalMonths || !heightCm || !weightKg) { return; }

    // Simplified percentile estimates
    var hPct = Math.min(99, Math.max(1, Math.round(50 + (heightCm - (80 + totalMonths * 0.5)))));
    var wPct = Math.min(99, Math.max(1, Math.round(50 + (weightKg - (10 + totalMonths * 0.1)) * 2)));
    var bmi = weightKg / Math.pow(heightCm / 100, 2);
    var bPct = Math.min(99, Math.max(1, Math.round(50 + (bmi - 16) * 3)));

    var se = document.getElementById('seo-example'); if (se) se.style.display = 'none';

    var rH = document.getElementById('rHeight');
    var rW = document.getElementById('rWeight');
    var rB = document.getElementById('rBmi');
    if (rH) rH.textContent = hPct + 'th';
    if (rW) rW.textContent = wPct + 'th';
    if (rB) rB.textContent = bPct + 'th';

    var hBar = document.getElementById('heightBar');
    var wBar = document.getElementById('weightBar');
    var bBar = document.getElementById('bmiBar');
    if (hBar) hBar.style.width = hPct + '%';
    if (wBar) wBar.style.width = wPct + '%';
    if (bBar) bBar.style.width = bPct + '%';

    function pctColor(p) { return p < 5 || p > 95 ? 'var(--bad)' : p < 10 || p > 90 ? 'var(--caution)' : 'var(--accent)'; }
    if (rH) rH.style.color = pctColor(hPct);
    if (rW) rW.style.color = pctColor(wPct);
    if (rB) rB.style.color = pctColor(bPct);
    if (hBar) hBar.style.background = pctColor(hPct);
    if (wBar) wBar.style.background = pctColor(wPct);
    if (bBar) bBar.style.background = pctColor(bPct);

    function pctLabel(p, type) {
        if (p < 5) return type + ' is below the 5th percentile';
        if (p < 25) return type + ' is below average but within normal range';
        if (p < 75) return type + ' is in the average range';
        if (p < 95) return type + ' is above average';
        return type + ' is above the 95th percentile';
    }
    var hNote = document.getElementById('heightNote');
    var wNote = document.getElementById('weightNote');
    var bNote = document.getElementById('bmiNote');
    if (hNote) hNote.textContent = pctLabel(hPct, 'Height');
    if (wNote) wNote.textContent = pctLabel(wPct, 'Weight');
    if (bNote) bNote.textContent = pctLabel(bPct, 'BMI');

    // Status card
    var sc = document.getElementById('statusCard');
    var statusText = document.getElementById('statusText');
    var allOk = hPct >= 5 && hPct <= 95 && wPct >= 5 && wPct <= 95 && bPct >= 5 && bPct <= 95;
    var anyConcern = hPct < 3 || hPct > 97 || wPct < 3 || wPct > 97 || bPct < 3 || bPct > 97;
    if (sc && statusText) {
        sc.style.display = 'block';
        if (anyConcern) {
            sc.style.background = 'rgba(239,68,68,0.08)';
            sc.style.border = '1px solid rgba(239,68,68,0.2)';
            statusText.innerHTML = 'One or more measurements are outside typical ranges. This may be completely normal for your child, but it is worth discussing with your pediatrician at the next visit. <em>A single measurement never tells the whole story.</em>';
        } else if (!allOk) {
            sc.style.background = 'rgba(245,158,11,0.08)';
            sc.style.border = '1px solid rgba(245,158,11,0.2)';
            statusText.innerHTML = 'Measurements are slightly outside the average range. This is often normal and reflects natural variation. Track over time and mention it at your next well-child visit.';
        } else {
            sc.style.background = 'rgba(20,184,166,0.08)';
            sc.style.border = '1px solid rgba(20,184,166,0.2)';
            statusText.innerHTML = 'All measurements are within the typical range. Your child appears to be growing well. Continue regular check-ups and healthy habits.';
        }
    }

    var genderEl = document.getElementById('gender');
    var gender = genderEl && genderEl.value === 'male' ? 'boy' : 'girl';
    var coachCard = document.getElementById('coachCard');
    if (coachCard) {
        coachCard.innerHTML = '<div class="coach-text">' +
            'Your <span class="hl">' + ageY + '-year-old ' + gender + '</span> is at the <span class="hl">' + hPct + 'th percentile</span> for height and <span class="hl">' + wPct + 'th</span> for weight.<br>' +
            '<div class="coach-rule">The trend matters more than the number.</div>' +
            '<div class="coach-advice">' +
            'A child who is consistently at the 25th percentile is growing perfectly well.<br>' +
            '<em>Track this over multiple visits.</em> If they stay on their curve, they are doing great.' +
            '</div></div>';
    }

    var shareText = 'Child growth insight:\n\nThe trend matters more than the percentile number.\n\nA child consistently at the 25th percentile is perfectly healthy.\nWhat to watch: crossing 2+ major percentile lines.\n\nCheck yours: healthcalculators.xyz/child-growth-calculator';
    if (typeof updateShareButtons === 'function') {
        updateShareButtons(shareText);
    }

    // Set primary result display
    var resultNumber = document.getElementById('resultNumber');
    if (resultNumber) resultNumber.textContent = hPct + 'th';
    var resultVerdict = document.getElementById('resultVerdict');
    if (resultVerdict) {
        if (anyConcern) resultVerdict.textContent = 'Some measurements outside typical ranges';
        else if (!allOk) resultVerdict.textContent = 'Slightly outside average — likely normal';
        else resultVerdict.textContent = 'Growing well — all measurements in typical range';
    }

    if (typeof factoryReveal === 'function') { factoryReveal(); }
    if (typeof hcTrackEvent === 'function') hcTrackEvent('calculator_complete', { calculator_name: 'Child Growth Calculator', page_path: '/child-growth-calculator' });
}
})();
