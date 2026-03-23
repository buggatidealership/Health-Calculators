// Caloric Macro Calculator — factory-compatible
(function() {
var splits = {balanced:{p:0.30,c:0.40,f:0.30}, lowcarb:{p:0.40,c:0.20,f:0.40}, highcarb:{p:0.25,c:0.55,f:0.20}, keto:{p:0.25,c:0.05,f:0.70}};

function calcMacros() {
    var gender = document.getElementById('gender').value;
    var age = parseFloat(document.getElementById('age').value);
    var weight = parseFloat(document.getElementById('weightKg').value);
    var height = parseFloat(document.getElementById('heightCm').value);
    var activity = parseFloat(document.getElementById('activity').value);
    var goal = parseFloat(document.getElementById('goal').value);
    var diet = document.getElementById('diet').value;

    if (!weight || !height || !age) { return; }

    var bmr = gender === 'male' ? (10*weight)+(6.25*height)-(5*age)+5 : (10*weight)+(6.25*height)-(5*age)-161;
    var tdee = bmr * activity;
    var calories = Math.round(tdee + goal);
    var s = splits[diet] || splits.balanced;
    var proteinG = Math.round((calories * s.p) / 4);
    var carbsG = Math.round((calories * s.c) / 4);
    var fatG = Math.round((calories * s.f) / 9);

    document.getElementById('resultNumber').textContent = calories;
    document.getElementById('dProtein').textContent = proteinG + 'g (' + Math.round(s.p*100) + '%)';
    document.getElementById('dCarbs').textContent = carbsG + 'g (' + Math.round(s.c*100) + '%)';
    document.getElementById('dFat').textContent = fatG + 'g (' + Math.round(s.f*100) + '%)';

    var goalLabel = goal < 0 ? 'deficit' : goal > 0 ? 'surplus' : 'maintenance';
    document.getElementById('coachCard').innerHTML = '<div class="coach-text">Your TDEE: <span class="hl">' + Math.round(tdee) + '</span> kcal/day<br>Target (' + goalLabel + '): <span class="hl">' + calories + '</span> kcal/day<div class="coach-rule">' + proteinG + 'g protein | ' + carbsG + 'g carbs | ' + fatG + 'g fat</div><div class="coach-advice"><em>Protein per kg:</em> ' + (proteinG / weight).toFixed(1) + ' g/kg (ISSN recommends 1.4-2.0)<br><em>Diet type:</em> ' + diet + '<br><em>Adjust every:</em> 4-6 weeks or after 5+ lb change</div></div>';

    if (typeof updateShareButtons === "function") updateShareButtons('My daily nutrition targets:\n' + calories + ' kcal | ' + proteinG + 'g protein | ' + carbsG + 'g carbs | ' + fatG + 'g fat\n\nCalculate yours: healthcalculators.xyz/caloric-intake-macronutrient-calculator');
    if (typeof factoryReveal === 'function') factoryReveal();
    if (typeof hcTrackEvent === 'function') hcTrackEvent('calculator_complete', {calculator_name: 'Caloric Intake & Macronutrient Calculator', page_path: '/caloric-intake-macronutrient-calculator'});
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
if (calcBtn) calcBtn.addEventListener('click', calcMacros);
})();
