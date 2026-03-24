// hCG Calculator (alias for hCG Doubling Time) — factory-compatible
(function() {

var hcg1Input = document.getElementById('hcg1');
var hcg2Input = document.getElementById('hcg2');
var date1Input = document.getElementById('date1');
var time1Input = document.getElementById('time1');
var date2Input = document.getElementById('date2');
var time2Input = document.getElementById('time2');
var calculateBtn = document.getElementById('calculate-btn');
var resultsSection = document.getElementById('results-section');

if (!calculateBtn || !hcg1Input || !hcg2Input) return;

// Set default dates to today and 2 days ago
var now = new Date();
var twoDaysAgo = new Date(now);
twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);

if (date2Input) date2Input.value = formatDate(now);
if (date1Input) date1Input.value = formatDate(twoDaysAgo);
if (time1Input) time1Input.value = '08:00';
if (time2Input) time2Input.value = '08:00';

function formatDate(d) {
    var y = d.getFullYear();
    var m = String(d.getMonth() + 1).padStart(2, '0');
    var day = String(d.getDate()).padStart(2, '0');
    return y + '-' + m + '-' + day;
}

calculateBtn.addEventListener('click', function() {
    var hcg1 = parseFloat(hcg1Input.value);
    var hcg2 = parseFloat(hcg2Input.value);
    var d1 = date1Input ? date1Input.value : '';
    var d2 = date2Input ? date2Input.value : '';
    var t1 = (time1Input && time1Input.value) || '08:00';
    var t2 = (time2Input && time2Input.value) || '08:00';

    // Validate
    if (isNaN(hcg1) || isNaN(hcg2)) {
        alert('Please enter both hCG values.');
        return;
    }
    if (hcg1 <= 0 || hcg2 <= 0) {
        alert('hCG values must be greater than zero.');
        return;
    }
    if (!d1 || !d2) {
        alert('Please enter both test dates.');
        return;
    }

    // Calculate hours between tests
    var dt1 = new Date(d1 + 'T' + t1);
    var dt2 = new Date(d2 + 'T' + t2);
    var diffMs = dt2 - dt1;
    var diffHours = diffMs / (1000 * 60 * 60);

    if (diffHours <= 0) {
        alert('The second test must be after the first test.');
        return;
    }

    // Calculate doubling time (hours)
    var ratio = hcg2 / hcg1;
    var doublingTimeHours;
    var isRising = hcg2 > hcg1;
    var isDeclining = hcg2 < hcg1;

    if (ratio === 1) {
        doublingTimeHours = Infinity;
    } else {
        doublingTimeHours = (diffHours * Math.LN2) / Math.log(ratio);
    }

    // Calculate percentage change
    var pctChange = ((hcg2 - hcg1) / hcg1) * 100;

    // Two-day (48h) increase percentage
    var twoDayPct;
    if (isRising) {
        twoDayPct = (Math.pow(ratio, 48 / diffHours) - 1) * 100;
    } else {
        twoDayPct = pctChange * (48 / diffHours);
    }

    // Show results
    if (resultsSection) resultsSection.classList.remove('hidden');

    // Primary result
    var heroEl = document.getElementById('doubling-time-result');
    var statusEl = document.getElementById('hcg-status');
    var iconEl = document.getElementById('hcg-icon');
    var descEl = document.getElementById('hcg-description');

    if (isDeclining) {
        if (heroEl) heroEl.textContent = 'Declining';
        var doublingLabel = document.getElementById('doubling-label');
        if (doublingLabel) doublingLabel.textContent = 'hCG is decreasing';
        if (statusEl) statusEl.className = 'result-status status-danger';
        if (iconEl) iconEl.textContent = '\u26A0';
        if (descEl) descEl.textContent = 'hCG levels are falling \u2014 this may indicate a non-viable pregnancy, miscarriage, or ectopic pregnancy. Contact your healthcare provider.';
    } else if (!isFinite(doublingTimeHours) || doublingTimeHours <= 0) {
        if (heroEl) heroEl.textContent = 'N/A';
        var doublingLabel2 = document.getElementById('doubling-label');
        if (doublingLabel2) doublingLabel2.textContent = 'Unable to calculate';
        if (statusEl) statusEl.className = 'result-status status-warning';
        if (iconEl) iconEl.textContent = '\u26A0';
        if (descEl) descEl.textContent = 'hCG levels are unchanged or the values entered may be incorrect.';
    } else {
        var displayHours = Math.round(doublingTimeHours);
        if (heroEl) heroEl.textContent = displayHours + ' hrs';
        var doublingLabel3 = document.getElementById('doubling-label');
        if (doublingLabel3) doublingLabel3.textContent = 'hCG Doubling Time';

        if (typeof animateCountUp === 'function' && heroEl) {
            animateCountUp(heroEl, 0, displayHours, 0, ' hrs');
        }

        var category = getDoublingCategory(doublingTimeHours, hcg1);
        if (statusEl) statusEl.className = 'result-status status-' + category.statusClass;
        if (iconEl) iconEl.textContent = category.icon;
        if (descEl) descEl.textContent = category.text;
    }

    // Gauge marker (scale: 24h=0%, 120h=100%)
    var gaugeMarker = document.getElementById('gauge-marker');
    var gaugeSection = document.getElementById('gauge-section');
    if (isRising && isFinite(doublingTimeHours) && doublingTimeHours > 0) {
        var gaugePos = Math.min(Math.max((doublingTimeHours - 24) / 96, 0), 1) * 100;
        if (gaugeMarker) gaugeMarker.style.left = gaugePos + '%';
        if (gaugeSection) gaugeSection.classList.remove('hidden');
    } else {
        if (gaugeSection) gaugeSection.classList.add('hidden');
    }

    // Breakdown values
    var displayHcg1 = document.getElementById('display-hcg1');
    var displayHcg2 = document.getElementById('display-hcg2');
    var displayChange = document.getElementById('display-change');
    var displayHoursEl = document.getElementById('display-hours');
    var display48h = document.getElementById('display-48h');
    var row48h = document.getElementById('row-48h');
    var displayDoublingDetail = document.getElementById('display-doubling-detail');
    var rowDoubling = document.getElementById('row-doubling');

    if (displayHcg1) displayHcg1.textContent = formatNumber(hcg1) + ' mIU/mL';
    if (displayHcg2) displayHcg2.textContent = formatNumber(hcg2) + ' mIU/mL';
    if (displayChange) {
        displayChange.textContent = (pctChange >= 0 ? '+' : '') + pctChange.toFixed(1) + '%';
        displayChange.style.color = isDeclining ? '#dc2626' : '#16a34a';
    }
    if (displayHoursEl) displayHoursEl.textContent = diffHours.toFixed(1) + ' hours (' + (diffHours / 24).toFixed(1) + ' days)';

    if (isRising && isFinite(twoDayPct)) {
        if (display48h) display48h.textContent = '+' + twoDayPct.toFixed(1) + '% per 48 hours';
        if (row48h) row48h.classList.remove('hidden');
    } else {
        if (row48h) row48h.classList.add('hidden');
    }

    if (isRising && isFinite(doublingTimeHours) && doublingTimeHours > 0) {
        if (displayDoublingDetail) displayDoublingDetail.textContent = doublingTimeHours.toFixed(1) + ' hours (' + (doublingTimeHours / 24).toFixed(1) + ' days)';
        if (rowDoubling) rowDoubling.classList.remove('hidden');
    } else {
        if (rowDoubling) rowDoubling.classList.add('hidden');
    }

    // Comparison boxes
    var compHcg1 = document.getElementById('comp-hcg1');
    var compHcg2 = document.getElementById('comp-hcg2');
    var compDiff = document.getElementById('comp-diff');
    if (compHcg1) compHcg1.textContent = formatNumber(hcg1);
    if (compHcg2) compHcg2.textContent = formatNumber(hcg2);
    if (compDiff) compDiff.textContent = (pctChange >= 0 ? '+' : '') + pctChange.toFixed(1) + '%';

    // Scroll to results
    if (resultsSection) resultsSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    // Celebration for normal results
    if (typeof celebratePulse === 'function' && isRising && doublingTimeHours >= 24 && doublingTimeHours <= 72) {
        var resultHero = document.getElementById('result-hero');
        if (resultHero) celebratePulse(resultHero);
    }

    // Content loops
    if (typeof showNextSteps === 'function') {
        showNextSteps('hcg-calculator', {});
    }

    if (typeof factoryReveal === 'function') factoryReveal();
});

function getDoublingCategory(hours, hcg1Level) {
    if (hcg1Level < 1200) {
        if (hours <= 72) {
            return { statusClass: 'good', icon: '\u2713', text: 'Normal doubling time \u2014 at hCG levels below 1,200 mIU/mL, doubling every 48-72 hours is expected in a healthy early pregnancy.' };
        } else if (hours <= 96) {
            return { statusClass: 'warning', icon: '\u26A0', text: 'Slower than typical \u2014 at this hCG level, doubling usually takes 48-72 hours. A slower rise may still be normal but warrants follow-up with your doctor.' };
        } else {
            return { statusClass: 'danger', icon: '\u26A0', text: 'Significantly slower than expected \u2014 at hCG below 1,200, doubling times over 96 hours may indicate ectopic pregnancy or non-viable pregnancy. Consult your healthcare provider.' };
        }
    } else if (hcg1Level < 6000) {
        if (hours <= 96) {
            return { statusClass: 'good', icon: '\u2713', text: 'Normal doubling time \u2014 at hCG levels between 1,200-6,000 mIU/mL, the rise naturally slows. Doubling every 72-96 hours is expected.' };
        } else if (hours <= 120) {
            return { statusClass: 'warning', icon: '\u26A0', text: 'Slightly slower than typical for this hCG range. May still be normal, but discuss with your healthcare provider.' };
        } else {
            return { statusClass: 'danger', icon: '\u26A0', text: 'Slower than expected for this hCG range. Consult your healthcare provider for further evaluation.' };
        }
    } else {
        if (hours <= 120) {
            return { statusClass: 'good', icon: '\u2713', text: 'Normal for this hCG level \u2014 above 6,000 mIU/mL, hCG rises more slowly and eventually plateaus around weeks 8-11. Doubling time over 96 hours is expected.' };
        } else {
            return { statusClass: 'warning', icon: '\u26A0', text: 'At hCG levels above 6,000, the rise naturally slows significantly. Your doctor will evaluate the full clinical picture including ultrasound findings.' };
        }
    }
}

function formatNumber(n) {
    if (n >= 1000) {
        return n.toLocaleString('en-US', { maximumFractionDigits: 0 });
    }
    return n % 1 === 0 ? String(n) : n.toFixed(1);
}

})();
