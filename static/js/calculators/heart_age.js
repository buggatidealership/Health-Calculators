// Heart Age Calculator — factory-compatible
(function() {

function calcHeart() {
    var ageEl = document.getElementById('age');
    var sexEl = document.getElementById('sex');
    var sbpEl = document.getElementById('sbp');
    var cholEl = document.getElementById('chol');
    var hdlEl = document.getElementById('hdl');
    var smokingEl = document.getElementById('smoking');
    var diabetesEl = document.getElementById('diabetes');
    var bpMedEl = document.getElementById('bpMed');
    var exerciseEl = document.getElementById('exerciseReg');
    var wtEl = document.getElementById('weightLbs');
    var htEl = document.getElementById('heightIn');
    if (!ageEl || !sexEl || !sbpEl || !cholEl || !hdlEl || !smokingEl || !diabetesEl || !bpMedEl || !exerciseEl || !wtEl || !htEl) return;

    var age = parseInt(ageEl.value);
    var sex = sexEl.value;
    var sbp = parseFloat(sbpEl.value) || 120;
    var chol = parseFloat(cholEl.value) || 200;
    var hdl = parseFloat(hdlEl.value) || 50;
    var smoker = smokingEl.value === 'yes';
    var diabetes = diabetesEl.value === 'yes';
    var bpMed = bpMedEl.value === 'yes';
    var exercise = exerciseEl.value === 'yes';
    var wt = parseFloat(wtEl.value);
    var ht = parseFloat(htEl.value);

    if (!age || !wt || !ht) { alert('Please fill all fields.'); return; }
    var bmi = (wt / (ht * ht)) * 703;

    var heartAge = age;
    if (smoker) heartAge += 8;
    if (sbp > 140) heartAge += 5; else if (sbp >= 120) heartAge += 2;
    if (bpMed) heartAge += 1;
    if (chol > 240) heartAge += 3; else if (chol >= 200) heartAge += 1;
    if (hdl < 40) heartAge += 3; else if (hdl < 60) heartAge += 1; else heartAge -= 1;
    if (diabetes) heartAge += 6;
    if (bmi > 30) heartAge += 3; else if (bmi >= 25) heartAge += 1;
    if (exercise) heartAge -= 2;
    heartAge = Math.max(heartAge, age - 5);
    heartAge = Math.max(heartAge, 18);

    var diff = heartAge - age;
    var bmiCat = bmi < 18.5 ? 'Underweight' : bmi < 25 ? 'Normal' : bmi < 30 ? 'Overweight' : 'Obese';

    // 10-year risk estimate
    var baseRisk = sex === 'male' ? (age<35?2:age<45?5:age<55?10:age<65?18:25) : (age<35?1:age<45?2:age<55?5:age<65?10:18);
    var mult = 1.0;
    if (smoker) mult *= 1.6;
    if (sbp > 140) mult *= 1.5; else if (sbp >= 120) mult *= 1.15;
    if (chol > 240) mult *= 1.4; else if (chol >= 200) mult *= 1.1;
    if (hdl < 40) mult *= 1.4; else if (hdl >= 60) mult *= 0.85;
    if (diabetes) mult *= 1.8;
    if (bmi > 30) mult *= 1.3;
    if (exercise) mult *= 0.75;
    var risk = Math.min(95, Math.max(1, baseRisk * mult));

    var rn = document.getElementById('resultNumber');
    if (rn) {
        rn.textContent = Math.round(heartAge);
        rn.className = 'result-number ' + (diff <= 0 ? 'glow-good' : diff <= 5 ? 'glow-caution' : 'glow-bad');
    }
    var rv = document.getElementById('resultVerdict');
    if (rv) {
        rv.textContent = diff > 0 ? 'Your heart is ' + diff + ' years older than you' : diff < 0 ? 'Your heart is ' + Math.abs(diff) + ' years younger!' : 'Your heart age matches your actual age';
        rv.style.color = diff <= 0 ? 'var(--good)' : diff <= 5 ? 'var(--caution)' : 'var(--bad)';
    }
    var dDiff = document.getElementById('dDiff');
    if (dDiff) dDiff.textContent = (diff >= 0 ? '+' : '') + diff;
    var dRisk = document.getElementById('dRisk');
    if (dRisk) dRisk.textContent = risk.toFixed(1) + '%';
    var dBmi = document.getElementById('dBmi');
    if (dBmi) dBmi.textContent = bmi.toFixed(1) + ' (' + bmiCat + ')';

    var tips = [];
    if (smoker) tips.push('Quit smoking -- can reduce heart age by up to 8 years');
    if (sbp >= 120) tips.push('Lower blood pressure below 120 mmHg');
    if (diabetes) tips.push('Manage diabetes aggressively -- A1C below 7%');
    if (chol >= 200) tips.push('Improve cholesterol through diet and exercise');
    if (bmi >= 25) tips.push('Lose weight -- even 5-10% makes a difference');
    if (!exercise) tips.push('Start with 150+ minutes of moderate exercise per week');
    if (!tips.length) tips.push('Your heart health is excellent -- maintain these habits!');

    var cc = document.getElementById('coachCard');
    if (cc) cc.innerHTML = '<div class="coach-text">Heart age: <span class="hl">' + Math.round(heartAge) + '</span> vs actual age: <span class="hl">' + age + '</span><div class="coach-rule">' + (diff > 0 ? '+' + diff + ' years -- your heart is aging faster' : diff < 0 ? Math.abs(diff) + ' years younger -- great job!' : 'Right on target') + '</div><div class="coach-advice"><em>10-year CVD risk:</em> ' + risk.toFixed(1) + '%<br><em>Top actions:</em><br>' + tips.map(function(t){return '&bull; ' + t;}).join('<br>') + '</div></div>';

    if (typeof updateShareButtons === "function") updateShareButtons('My heart age: ' + Math.round(heartAge) + ' (actual age: ' + age + ')\n10-year CVD risk: ' + risk.toFixed(1) + '%\n\nCheck yours: healthcalculators.xyz/heart-age-calculator');
    if (typeof factoryReveal === 'function') factoryReveal();
    if (typeof hcTrackEvent === 'function') hcTrackEvent('calculator_complete', {calculator_name: 'Heart Age Calculator', page_path: '/heart-age-calculator'});
}

// Share buttons
function updateShareButtons(shareText) {
    window._shareText = shareText;
    var row = document.getElementById('shareRow');
    if (row) row.style.display = 'flex';
    var wa = document.getElementById('shareWhatsApp');
    if (wa) wa.href = 'https://wa.me/?text=' + encodeURIComponent(shareText);
    var tw = document.getElementById('shareTwitter');
    if (tw) tw.href = 'https://x.com/intent/tweet?text=' + encodeURIComponent(shareText);
    var tg = document.getElementById('shareTelegram');
    if (tg) tg.href = 'https://t.me/share/url?url=' + encodeURIComponent('https://healthcalculators.xyz') + '&text=' + encodeURIComponent(shareText);
}

// Copy button
var copyBtn = document.getElementById('copyBtn');
if (copyBtn) {
    copyBtn.addEventListener('click', function() {
        if (!window._shareText) return;
        navigator.clipboard.writeText(window._shareText).then(function() {
            copyBtn.textContent = 'Copied!';
            setTimeout(function() { copyBtn.textContent = 'Copy'; }, 2000);
        }).catch(function() {});
    });
}

// Bind calcBtn
var calcBtn = document.getElementById('calcBtn');
if (calcBtn) calcBtn.addEventListener('click', calcHeart);

})();
