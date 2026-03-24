// Liposuction Weight Loss Calculator — factory-compatible
(function() {

function calcLipo() {
    var weightEl = document.getElementById('weight');
    var heightEl = document.getElementById('height');
    var genderEl = document.getElementById('gender');
    var locationEl = document.getElementById('location');
    if (!weightEl || !heightEl || !genderEl || !locationEl) return;

    var weight = parseFloat(weightEl.value);
    var height = parseFloat(heightEl.value);
    var gender = genderEl.value;
    var location = locationEl.value;
    var areas = [];
    document.querySelectorAll('.check-grid input:checked').forEach(function(cb) { areas.push(cb.value); });
    if (!weight || !height || !areas.length) { alert('Please fill all fields and select areas.'); return; }

    var bmi = (weight / (height * height)) * 703;
    var bmiCat = bmi < 18.5 ? 'Underweight' : bmi < 25 ? 'Normal' : bmi < 30 ? 'Overweight' : 'Obese';
    var fatL = bmi < 25 ? Math.min(1 + areas.length * 0.5, 3) : bmi < 30 ? Math.min(2 + areas.length * 0.6, 4) : Math.min(3 + areas.length * 0.4, 5);
    var fatLbs = fatL * 0.9 * 2.2;
    var newWeight = (weight - fatLbs).toFixed(1);

    var costPerArea = {us:2500, uk:2000, eu:1800, asia:1500}[location] || 2000;
    if (gender === 'male') costPerArea *= 1.1;
    var totalCost = Math.round(areas.length * costPerArea * (areas.length >= 5 ? 0.9 : 1));

    var rn = document.getElementById('resultNumber');
    if (rn) rn.textContent = fatL.toFixed(1);
    var dBmi = document.getElementById('dBmi');
    if (dBmi) dBmi.textContent = bmi.toFixed(1) + ' (' + bmiCat + ')';
    var dWeight = document.getElementById('dWeight');
    if (dWeight) dWeight.textContent = newWeight + ' lbs';
    var dCost = document.getElementById('dCost');
    if (dCost) dCost.textContent = '$' + totalCost.toLocaleString();

    var cc = document.getElementById('coachCard');
    if (cc) cc.innerHTML = '<div class="coach-text">Based on your BMI of <span class="hl">' + bmi.toFixed(1) + '</span> (' + bmiCat + ') and <span class="hl">' + areas.length + ' area' + (areas.length>1?'s':'') + '</span>:<div class="coach-rule">' + fatL.toFixed(1) + ' liters (~' + fatLbs.toFixed(1) + ' lbs) of fat</div><div class="coach-advice"><em>New weight:</em> ~' + newWeight + ' lbs<br><em>Est. cost:</em> $' + totalCost.toLocaleString() + '<br><em>Note:</em> Liposuction is body contouring, not a weight loss solution.</div></div>';

    if (typeof updateShareButtons === "function") updateShareButtons('Liposuction estimate: ' + fatL.toFixed(1) + 'L fat removal (~' + fatLbs.toFixed(0) + ' lbs), $' + totalCost.toLocaleString() + '\n\nCalculate yours: healthcalculators.xyz/liposuction-weight-loss-calculator');
    if (typeof factoryReveal === 'function') factoryReveal();
    if (typeof hcTrackEvent === 'function') hcTrackEvent('calculator_complete', {calculator_name: 'Liposuction Weight Loss Calculator', page_path: '/liposuction-weight-loss-calculator'});
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
if (calcBtn) calcBtn.addEventListener('click', calcLipo);

})();
