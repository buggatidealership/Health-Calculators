// Breast Implant Cost Calculator — factory-compatible
(function() {
var costBases = {us:6500, uk:5500, canada:8500, australia:10000, brazil:4000, mexico:4500, korea:7000, thailand:4000};
var cityMult = {major:1.3, mid:1.0, small:0.85};
var surgeonMult = {top:1.4, board:1.0, less:0.8};
var typeMult = {saline:0.9, silicone:1.0, gummy:1.2, structured:1.25, anatomical:1.15};
var symbols = {us:'$', uk:'\u00a3', canada:'CA$', australia:'A$', brazil:'$', mexico:'$', korea:'$', thailand:'$'};

function calcCost() {
    var country = document.getElementById('country').value;
    var city = document.getElementById('city-tier').value;
    var type = document.getElementById('implant-type').value;
    var surgeon = document.getElementById('surgeon-tier').value;
    if (!country || !city || !type || !surgeon) { return; }

    var base = costBases[country] || 6500;
    var cost = base * (cityMult[city]||1) * (surgeonMult[surgeon]||1) * (typeMult[type]||1);
    var low = Math.round(cost * 0.93 / 100) * 100;
    var high = Math.round(cost * 1.07 / 100) * 100;
    var sym = symbols[country] || '$';

    document.getElementById('resultNumber').textContent = sym + low.toLocaleString() + ' - ' + sym + high.toLocaleString();
    document.getElementById('resultNumber').style.fontSize = 'clamp(2rem, 6vw, 4rem)';
    document.getElementById('resultUnit').textContent = 'estimated total cost range';
    document.getElementById('dCountry').textContent = country.toUpperCase();
    document.getElementById('dType').textContent = type;
    document.getElementById('dSurgeon').textContent = surgeon;

    document.getElementById('coachCard').innerHTML = '<div class="coach-text">For a <span class="hl">' + type + '</span> implant procedure in <span class="hl">' + country.toUpperCase() + '</span> with a <span class="hl">' + surgeon + '</span> surgeon:<div class="coach-rule">' + sym + low.toLocaleString() + ' - ' + sym + high.toLocaleString() + '</div><div class="coach-advice"><em>This includes:</em> surgeon fee, implant cost, and facility fees.<br><em>Not included:</em> anesthesia (10-15% extra), medical tests, garments, medications.</div></div>';

    if (typeof updateShareButtons === "function") updateShareButtons('Breast implant cost estimate: ' + sym + low.toLocaleString() + '-' + sym + high.toLocaleString() + ' for ' + type + ' in ' + country.toUpperCase() + '\n\nGet yours: healthcalculators.xyz/breast-implant-cost-calculator');
    if (typeof factoryReveal === 'function') factoryReveal();
    if (typeof hcTrackEvent === 'function') hcTrackEvent('calculator_complete', {calculator_name: 'Breast Implant Cost Calculator', page_path: '/breast-implant-cost-calculator'});
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
if (calcBtn) calcBtn.addEventListener('click', calcCost);

// Also auto-calculate on any select change
['country', 'city-tier', 'implant-type', 'surgeon-tier'].forEach(function(id) {
    var el = document.getElementById(id);
    if (el) el.addEventListener('change', calcCost);
});
})();
