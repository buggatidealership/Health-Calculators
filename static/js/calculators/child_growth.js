// Child Growth Calculator — factory-compatible
(function() {
let useMetric = true;
document.getElementById('metricBtn').addEventListener('click', () => { useMetric=true; document.getElementById('metricBtn').classList.add('active'); document.getElementById('imperialBtn').classList.remove('active'); document.getElementById('metricInputs').style.display='block'; document.getElementById('imperialInputs').style.display='none'; });
document.getElementById('imperialBtn').addEventListener('click', () => { useMetric=false; document.getElementById('imperialBtn').classList.add('active'); document.getElementById('metricBtn').classList.remove('active'); document.getElementById('metricInputs').style.display='none'; document.getElementById('imperialInputs').style.display='block'; });

document.getElementById('calcBtn').addEventListener('click', calculate);

function calculate() {
    const ageY = parseInt(document.getElementById('ageYears').value) || 0;
    const ageM = parseInt(document.getElementById('ageMonths').value) || 0;
    const totalMonths = ageY * 12 + ageM;
    let heightCm, weightKg;
    if (useMetric) {
        heightCm = parseFloat(document.getElementById('heightCm').value);
        weightKg = parseFloat(document.getElementById('weightKg').value);
    } else {
        const ft = parseFloat(document.getElementById('heightFt').value) || 0;
        const inch = parseFloat(document.getElementById('heightIn').value) || 0;
        heightCm = (ft * 12 + inch) * 2.54;
        weightKg = parseFloat(document.getElementById('weightLbs').value) * 0.453592;
    }
    if (!totalMonths || !heightCm || !weightKg) { return; }

    // Simplified percentile estimates (same logic as original)
    const hPct = Math.min(99, Math.max(1, Math.round(50 + (heightCm - (80 + totalMonths * 0.5)))));
    const wPct = Math.min(99, Math.max(1, Math.round(50 + (weightKg - (10 + totalMonths * 0.1)) * 2)));
    const bmi = weightKg / Math.pow(heightCm / 100, 2);
    const bPct = Math.min(99, Math.max(1, Math.round(50 + (bmi - 16) * 3)));

    var se = document.getElementById('staticExample'); if (se) se.style.display = 'none';

    document.getElementById('rHeight').textContent = hPct + 'th';
    document.getElementById('rWeight').textContent = wPct + 'th';
    document.getElementById('rBmi').textContent = bPct + 'th';
    document.getElementById('heightBar').style.width = hPct + '%';
    document.getElementById('weightBar').style.width = wPct + '%';
    document.getElementById('bmiBar').style.width = bPct + '%';

    function pctColor(p) { return p < 5 || p > 95 ? 'var(--bad)' : p < 10 || p > 90 ? 'var(--caution)' : 'var(--accent)'; }
    document.getElementById('rHeight').style.color = pctColor(hPct);
    document.getElementById('rWeight').style.color = pctColor(wPct);
    document.getElementById('rBmi').style.color = pctColor(bPct);
    document.getElementById('heightBar').style.background = pctColor(hPct);
    document.getElementById('weightBar').style.background = pctColor(wPct);
    document.getElementById('bmiBar').style.background = pctColor(bPct);

    function pctLabel(p, type) {
        if (p < 5) return type + ' is below the 5th percentile';
        if (p < 25) return type + ' is below average but within normal range';
        if (p < 75) return type + ' is in the average range';
        if (p < 95) return type + ' is above average';
        return type + ' is above the 95th percentile';
    }
    document.getElementById('heightNote').textContent = pctLabel(hPct, 'Height');
    document.getElementById('weightNote').textContent = pctLabel(wPct, 'Weight');
    document.getElementById('bmiNote').textContent = pctLabel(bPct, 'BMI');

    // Status card
    const sc = document.getElementById('statusCard');
    const allOk = hPct >= 5 && hPct <= 95 && wPct >= 5 && wPct <= 95 && bPct >= 5 && bPct <= 95;
    const anyConcern = hPct < 3 || hPct > 97 || wPct < 3 || wPct > 97 || bPct < 3 || bPct > 97;
    if (anyConcern) {
        sc.className = 'status-card concern visible';
        document.getElementById('statusText').innerHTML = 'One or more measurements are outside typical ranges. This may be completely normal for your child, but it is worth discussing with your pediatrician at the next visit. <em>A single measurement never tells the whole story.</em>';
    } else if (!allOk) {
        sc.className = 'status-card caution visible';
        document.getElementById('statusText').innerHTML = 'Measurements are slightly outside the average range. This is often normal and reflects natural variation. Track over time and mention it at your next well-child visit.';
    } else {
        sc.className = 'status-card good visible';
        document.getElementById('statusText').innerHTML = 'All measurements are within the typical range. Your child appears to be growing well. Continue regular check-ups and healthy habits.';
    }

    const gender = document.getElementById('gender').value === 'male' ? 'boy' : 'girl';
    document.getElementById('coachCard').innerHTML = '<div class="coach-text">' +
        'Your <span class="hl">' + ageY + '-year-old ' + gender + '</span> is at the <span class="hl">' + hPct + 'th percentile</span> for height and <span class="hl">' + wPct + 'th</span> for weight.<br>' +
        '<div class="coach-rule">The trend matters more than the number.</div>' +
        '<div class="coach-advice">' +
        'A child who is consistently at the 25th percentile is growing perfectly well.<br>' +
        '<em>Track this over multiple visits.</em> If they stay on their curve, they are doing great.' +
        '</div></div>';

    const shareText = 'Child growth insight:\n\nThe trend matters more than the percentile number.\n\nA child consistently at the 25th percentile is perfectly healthy.\nWhat to watch: crossing 2+ major percentile lines.\n\nCheck yours: healthcalculators.xyz/child-growth-calculator';
    document.getElementById('shareRow').style.display = 'flex';
    document.getElementById('shareWhatsApp').href = 'https://wa.me/?text=' + encodeURIComponent(shareText);
    document.getElementById('shareTwitter').href = 'https://x.com/intent/tweet?text=' + encodeURIComponent(shareText);
    window._shareText = shareText;

    if (typeof factoryReveal === 'function') { factoryReveal(); }
    if (typeof hcTrackEvent === 'function') hcTrackEvent('calculator_complete', { calculator_name: 'Child Growth Calculator', page_path: '/child-growth-calculator' });
}

document.getElementById('copyBtn').addEventListener('click', function() { if (!window._shareText) return; navigator.clipboard.writeText(window._shareText).then(() => { this.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Copied!'; this.classList.add('copied'); setTimeout(() => { this.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy'; this.classList.remove('copied'); }, 2000); }).catch(() => {}); });
document.getElementById('askBtn').addEventListener('click', function() { const q=document.getElementById('askInput').value.trim(); if(!q) return; document.querySelector('.ask-input-wrap').style.display='none'; document.querySelector('.ask-pills').style.display='none'; document.getElementById('askThanks').style.display='block'; });
document.querySelectorAll('.ask-pill').forEach(p => { p.addEventListener('click', function() { document.getElementById('askInput').value = this.textContent; }); });
// Intersection observer handled by factory template
// FAQ accordion handled by factory template }); });

// Reveal results
if (typeof factoryReveal === 'function') { factoryReveal(); }
})();
