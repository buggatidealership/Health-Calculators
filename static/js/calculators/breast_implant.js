// Breast Implant Calculator — factory-compatible
(function() {
const cupSizes = { "AA": 0, "A": 1, "B": 2, "C": 3, "D": 4, "DD/E": 5, "DDD/F": 6, "G": 7 };

var calcBtn = document.getElementById('calcBtn');
if (calcBtn) calcBtn.addEventListener('click', calculate);

function calculate() {
    const currentCup = document.getElementById('currentCup').value;
    const goalCup = document.getElementById('goalCup').value;
    const breastWidth = parseFloat(document.getElementById('breastWidth').value);
    const implantType = document.getElementById('implantType').value;
    const location = document.getElementById('location').value;

    const cupDiff = cupSizes[goalCup] - cupSizes[currentCup];
    if (cupDiff <= 0) { return; }

    const volumeMin = cupDiff * 150;
    const volumeMax = cupDiff * 200;
    const maxImplantWidth = breastWidth - 1;

    let profile = 'Moderate';
    if (maxImplantWidth < 11) profile = 'Moderate or Low';
    if (maxImplantWidth >= 13) profile = 'High';

    let costPerMin, costPerMax;
    switch (implantType) {
        case 'silicone': costPerMin = 1000; costPerMax = 2000; break;
        case 'saline': costPerMin = 600; costPerMax = 1500; break;
        case 'gummy': costPerMin = 1200; costPerMax = 2500; break;
    }

    let locMult = 1;
    if (location === 'europe') locMult = 0.7;
    if (location === 'asia') locMult = 0.5;

    const surgMin = 4000 * locMult;
    const surgMax = 8000 * locMult;
    const totalMin = Math.round((costPerMin * 2 + surgMin) / 100) * 100;
    const totalMax = Math.round((costPerMax * 2 + surgMax) / 100) * 100;
    const fmt = n => n.toLocaleString('en-US');

    // Hide static
    var se = document.getElementById('staticExample');
    if (se) se.style.display = 'none';

    // Result section
    var elVolume = document.getElementById('resultVolume');
    if (elVolume) elVolume.textContent = volumeMin + '-' + volumeMax;
    var elProfile = document.getElementById('resultProfile');
    if (elProfile) elProfile.textContent = profile + ' profile (max width: ' + maxImplantWidth + 'cm)';

    const typeLabels = { silicone: 'Silicone', saline: 'Saline', gummy: 'Gummy Bear' };
    var elRType = document.getElementById('rType');
    if (elRType) elRType.textContent = typeLabels[implantType];
    var elRTypeNote = document.getElementById('rTypeNote');
    if (elRTypeNote) elRTypeNote.textContent = '$' + fmt(costPerMin) + '-$' + fmt(costPerMax) + '/each';
    var elRCost = document.getElementById('rCost');
    if (elRCost) elRCost.textContent = '$' + fmt(totalMin) + '-$' + fmt(totalMax);
    var elRCostNote = document.getElementById('rCostNote');
    if (elRCostNote) elRCostNote.textContent = location.toUpperCase() + ' total';
    var elRProfile = document.getElementById('rProfile');
    if (elRProfile) elRProfile.textContent = profile;
    var elRProfileNote = document.getElementById('rProfileNote');
    if (elRProfileNote) elRProfileNote.textContent = 'max ' + maxImplantWidth + 'cm width';

    // Coach card
    var coachCard = document.getElementById('coachCard');
    if (coachCard) {
        coachCard.innerHTML = '<div class="coach-text">' +
            'You want to go from <span class="hl">' + currentCup + '</span> to <span class="hl">' + goalCup + '</span>.<br>' +
            'That\'s <span class="hl">' + cupDiff + ' cup size' + (cupDiff > 1 ? 's' : '') + '</span> of change.<br>' +
            '<div class="coach-rule">The rule: ~175cc per cup size.</div>' +
            '<div class="coach-advice">' +
            'Bring this number (<em>' + volumeMin + '-' + volumeMax + 'cc</em>) to your consultation.<br>' +
            'Your surgeon will refine it based on your tissue, but now you have <em>the starting point</em>.' +
            '</div></div>';
    }

    // Share
    const shareText = 'Breast implant sizing rule of thumb:\n\n~175cc = 1 cup size increase\n\n' +
        currentCup + ' to ' + goalCup + ' = ' + volumeMin + '-' + volumeMax + 'cc\n' +
        'Profile: ' + profile + '\n' +
        'Est. cost: $' + fmt(totalMin) + '-$' + fmt(totalMax) + '\n\n' +
        'Try it: healthcalculators.xyz/breast-implant-calculator';

    var shareRow = document.getElementById('shareRow');
    if (shareRow) shareRow.style.display = 'flex';
    var shareWA = document.getElementById('shareWhatsApp');
    if (shareWA) shareWA.href = 'https://wa.me/?text=' + encodeURIComponent(shareText);
    var shareTW = document.getElementById('shareTwitter');
    if (shareTW) shareTW.href = 'https://x.com/intent/tweet?text=' + encodeURIComponent(shareText);
    window._shareText = shareText;

    // Reveal results via factory
    if (typeof factoryReveal === 'function') { factoryReveal(); }

    if (typeof hcTrackEvent === 'function') {
        hcTrackEvent('calculator_complete', { calculator_name: 'Breast Implant Calculator', page_path: '/breast-implant-calculator' });
    }
}

var copyBtn = document.getElementById('copyBtn');
if (copyBtn) {
    copyBtn.addEventListener('click', function() {
        if (!window._shareText) return;
        navigator.clipboard.writeText(window._shareText).then(() => {
            this.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Copied!';
            this.classList.add('copied');
            setTimeout(() => {
                this.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy';
                this.classList.remove('copied');
            }, 2000);
        }).catch(() => {});
    });
}

var askBtn = document.getElementById('askBtn');
if (askBtn) {
    askBtn.addEventListener('click', function() {
        var q = document.getElementById('askInput');
        if (!q || !q.value.trim()) return;
        var wrap = document.querySelector('.ask-input-wrap');
        if (wrap) wrap.style.display = 'none';
        var pills = document.querySelector('.ask-pills');
        if (pills) pills.style.display = 'none';
        var thanks = document.getElementById('askThanks');
        if (thanks) thanks.style.display = 'block';
    });
}

document.querySelectorAll('.ask-pill').forEach(function(pill) {
    pill.addEventListener('click', function() {
        var input = document.getElementById('askInput');
        if (input) input.value = this.textContent;
    });
});

// Intersection observer handled by factory template
// FAQ accordion handled by factory template
})();
