// Breast Implant Size Calculator — factory-compatible
(function() {
var cupSizes = ['AA','A','B','C','D','DD/E','F','G','H','I'];
function calcSize() {
    var chest = parseFloat(document.getElementById('chest').value);
    var bust = parseFloat(document.getElementById('bust').value);
    var frame = document.getElementById('frame').value;
    var cups = parseInt(document.getElementById('cups').value);
    if (!chest || !bust || !frame || isNaN(cups)) { return; }

    var diff = bust - chest;
    var currentIdx = Math.max(0, Math.min(Math.floor(diff / 2.5), cupSizes.length-1));
    var currentCup = cupSizes[currentIdx];

    var ccPerCup = 175;
    var frameFactor = frame === 'small' ? 0.85 : frame === 'large' ? 1.15 : 1.0;
    var minCC = Math.round(ccPerCup * cups * 0.8 * frameFactor / 25) * 25;
    var maxCC = Math.round(ccPerCup * cups * 1.2 * frameFactor / 25) * 25;
    minCC = Math.max(minCC, 150);

    var profile = 'Moderate';
    if (frame === 'small' && cups >= 3) profile = 'High';
    else if (frame === 'large' && cups <= 2) profile = 'Low to Moderate';
    else if (cups >= 4) profile = 'High';

    var projIdx = Math.min(currentIdx + cups, cupSizes.length - 1);

    document.getElementById('resultNumber').textContent = minCC + ' - ' + maxCC;
    document.getElementById('resultNumber').style.fontSize = 'clamp(3rem, 10vw, 6rem)';
    document.getElementById('resultUnit').textContent = 'cc recommended implant range';
    document.getElementById('dCurrent').textContent = currentCup;
    document.getElementById('dProfile').textContent = profile;
    document.getElementById('dProjected').textContent = cupSizes[projIdx];

    document.getElementById('coachCard').innerHTML = '<div class="coach-text">You are currently a <span class="hl">' + currentCup + '</span> cup.<br>To gain <span class="hl">' + cups + ' cup size' + (cups>1?'s':'') + '</span>, you need:<div class="coach-rule">' + minCC + ' - ' + maxCC + ' cc</div><div class="coach-advice"><em>Profile:</em> ' + profile + ' is recommended for your frame.<br><em>Projected result:</em> ' + cupSizes[projIdx] + ' cup.</div></div>';

    if (typeof updateShareButtons === "function") updateShareButtons('Breast implant calculator: ' + minCC + '-' + maxCC + 'cc for ' + cups + ' cup size increase (' + profile + ' profile)\n\nTry it: healthcalculators.xyz/breast-implant-size-calculator');
    if (typeof factoryReveal === 'function') factoryReveal();
    if (typeof hcTrackEvent === 'function') hcTrackEvent('calculator_complete', {calculator_name: 'Breast Implant Size Calculator', page_path: '/breast-implant-size-calculator'});
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
if (calcBtn) calcBtn.addEventListener('click', calcSize);

// Also auto-calculate on change
['chest', 'bust', 'frame', 'cups'].forEach(function(id) {
    var el = document.getElementById(id);
    if (el) el.addEventListener('change', calcSize);
});
})();
