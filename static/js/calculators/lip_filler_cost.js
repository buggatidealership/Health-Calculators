// Lip Filler Cost Calculator — calculation logic
(function() {
    var BASE_PRICE = 684;

    var btn = document.getElementById('calcBtn');
    if (btn) btn.addEventListener('click', function() {
        var locEl = document.getElementById('location');
        var provEl = document.getElementById('provider');
        var prodEl = document.getElementById('product');
        var syrEl = document.getElementById('syringes');
        var touchEl = document.getElementById('touchups');
        if (!locEl || !provEl || !prodEl || !syrEl || !touchEl) return;

        var locFactor = parseFloat(locEl.value);
        var provFactor = parseFloat(provEl.value);
        var prodFactor = parseFloat(prodEl.value);
        var syringes = parseFloat(syrEl.value);
        var touchupFactor = parseFloat(touchEl.value);

        var perSyringe = Math.round(BASE_PRICE * locFactor * provFactor * prodFactor);
        var baseCost = perSyringe * syringes;
        var touchupCost = Math.round(baseCost * touchupFactor);
        var totalCost = baseCost + touchupCost;
        var annualLow = Math.round(totalCost * 1.5);
        var annualHigh = Math.round(totalCost * 2.4);

        var rn = document.getElementById('resultNumber');
        if (rn) rn.textContent = '$' + totalCost.toLocaleString();

        var rv = document.getElementById('resultVerdict');
        if (rv) rv.textContent = '$' + perSyringe + ' per syringe \u00d7 ' + syringes;

        var dPerSyr = document.getElementById('displayPerSyringe');
        if (dPerSyr) dPerSyr.textContent = '$' + perSyringe;

        var dTouch = document.getElementById('displayTouchup');
        if (dTouch) dTouch.textContent = touchupCost > 0 ? '$' + touchupCost : '$0';

        var dAnnual = document.getElementById('displayAnnual');
        if (dAnnual) dAnnual.textContent = '$' + annualLow.toLocaleString() + '-$' + annualHigh.toLocaleString();

        var coach = document.getElementById('coachCard');
        if (coach) coach.innerHTML = '<div class="coach-text">You selected <span class="hl">' + syringes + ' syringe' + (syringes !== 1 ? 's' : '') + '</span> at <span class="hl">$' + perSyringe + '/syringe</span>.<div class="coach-rule">The rule: one syringe costs ~$700. Most lips need one.</div><div class="coach-advice">Your adjusted price accounts for location and provider tier.<br>Budget <em>$' + annualLow.toLocaleString() + '-$' + annualHigh.toLocaleString() + '/year</em> if you plan to maintain results.</div></div>';

        var shareText = 'Lip filler estimate: $' + totalCost + ' per session\nAnnual: $' + annualLow + '-$' + annualHigh + '\n\nTry it: healthcalculators.xyz/lip-filler-cost-calculator';
        if (typeof updateShareButtons === 'function') updateShareButtons(shareText);

        if (typeof factoryReveal === 'function') {
            factoryReveal();
        } else {
            document.querySelectorAll('.hidden-section').forEach(function(el) { el.classList.remove('hidden-section'); });
            var rs = document.getElementById('result-section');
            if (rs) rs.scrollIntoView({ behavior: 'smooth' });
        }
    });
})();
