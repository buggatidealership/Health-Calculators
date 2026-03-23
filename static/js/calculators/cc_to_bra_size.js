// CC to Bra Size Calculator — calculation logic
(function() {
    var btn = document.getElementById('calcBtn');
    if (btn) btn.addEventListener('click', function() {
        var ccEl = document.getElementById('cc');
        var bandEl = document.getElementById('band');
        var cupEl = document.getElementById('currentCup');
        if (!ccEl || !bandEl || !cupEl) return;

        var cc = parseFloat(ccEl.value);
        var bandSize = bandEl.value;
        var currentCup = cupEl.value;

        if (isNaN(cc) || cc < 100 || cc > 1000 || !bandSize) return;

        var cupSizes = ['AA', 'A', 'B', 'C', 'D', 'DD', 'DDD', 'G', 'H', 'I', 'J'];
        var currentIndex = cupSizes.indexOf(currentCup);
        if (currentIndex === -1) currentIndex = 2;

        var cupIncrease = Math.round((cc / 175) * 2) / 2;
        var newIndex = Math.min(currentIndex + cupIncrease, cupSizes.length - 1);

        var fullCups = Math.floor(newIndex);
        var remainder = newIndex - fullCups;

        var newCupSize;
        if (remainder < 0.25) {
            newCupSize = cupSizes[fullCups];
        } else if (remainder < 0.75) {
            if (cupSizes[fullCups] === 'DD' || cupSizes[fullCups] === 'DDD') {
                newCupSize = cupSizes[Math.min(fullCups + 1, cupSizes.length - 1)];
            } else {
                newCupSize = cupSizes[fullCups] + '\u00BD';
            }
        } else {
            newCupSize = cupSizes[Math.min(fullCups + 1, cupSizes.length - 1)];
        }

        var bandNum = parseInt(bandSize);
        var ccPerCup;
        if (bandNum <= 30) ccPerCup = 150;
        else if (bandNum <= 32) ccPerCup = 160;
        else if (bandNum <= 34) ccPerCup = 175;
        else if (bandNum <= 36) ccPerCup = 185;
        else if (bandNum <= 38) ccPerCup = 195;
        else ccPerCup = 200;

        var rn = document.getElementById('resultNumber');
        if (rn) rn.textContent = bandSize + newCupSize;

        var rv = document.getElementById('resultVerdict');
        if (rv) rv.textContent = bandSize + currentCup + ' \u2192 ' + bandSize + newCupSize + ' with ' + cc + ' cc';

        var dVol = document.getElementById('displayVolume');
        if (dVol) dVol.textContent = cc + ' cc';

        var dIncrease = document.getElementById('displayIncrease');
        if (dIncrease) dIncrease.textContent = '+' + cupIncrease.toFixed(1) + ' cups';

        var dCcPerCup = document.getElementById('displayCcPerCup');
        if (dCcPerCup) dCcPerCup.textContent = '~' + ccPerCup + ' cc/cup';

        var coach = document.getElementById('coachCard');
        if (coach) coach.innerHTML = '<div class="coach-text">With <span class="hl">' + cc + ' cc</span> implants on a <span class="hl">' + bandSize + '</span> band:<br>Current <span class="hl">' + bandSize + currentCup + '</span> \u2192 Estimated <span class="hl">' + bandSize + newCupSize + '</span>.<div class="coach-rule">Approximately ' + ccPerCup + ' cc per cup size for your band.</div><div class="coach-advice">Cup size increase: <em>+' + cupIncrease.toFixed(1) + ' cups</em>. Smaller frames need less volume per cup size increase.</div></div>';

        var shareText = bandSize + currentCup + ' + ' + cc + 'cc = ' + bandSize + newCupSize + '\n\nTry it: healthcalculators.xyz/cc-to-bra-size-calculator';
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
