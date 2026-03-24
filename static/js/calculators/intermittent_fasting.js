// Intermittent Fasting Calculator — calculation logic
(function() {
    function fmt(mins) {
        var m = ((mins % 1440) + 1440) % 1440;
        var h = Math.floor(m / 60);
        var min = m % 60;
        var ap = h >= 12 ? 'PM' : 'AM';
        h = h % 12;
        if (h === 0) h = 12;
        return h + ':' + (min < 10 ? '0' : '') + min + ' ' + ap;
    }

    var btn = document.getElementById('calcBtn');
    if (!btn) return;

    btn.addEventListener('click', function() {
        var wakeEl = document.getElementById('wakeTime');
        var bedEl = document.getElementById('bedTime');
        var protoEl = document.getElementById('protocol');
        if (!wakeEl || !bedEl || !protoEl) return;

        var wt = wakeEl.value;
        var bt = bedEl.value;
        var proto = protoEl.value;
        if (!wt || !bt) return;

        var wParts = wt.split(':').map(Number);
        var bParts = bt.split(':').map(Number);
        var wakeMins = wParts[0] * 60 + wParts[1];
        var bedMins = bParts[0] * 60 + bParts[1];
        if (bedMins <= wakeMins) bedMins += 1440;

        var protoParts = proto.split(':').map(Number);
        var fastH = protoParts[0];
        var eatH = protoParts[1];
        var eatStart = wakeMins + (fastH - 8) * 60;
        if (eatStart < wakeMins + 60) eatStart = wakeMins + 60;
        var eatEnd = eatStart + eatH * 60;
        if (eatEnd > bedMins - 30) {
            eatEnd = bedMins - 30;
            eatStart = eatEnd - eatH * 60;
        }

        var resultNumber = document.getElementById('resultNumber');
        var resultVerdict = document.getElementById('resultVerdict');
        var fastHoursEl = document.getElementById('fastHours');
        var firstMealEl = document.getElementById('firstMeal');
        var lastMealEl = document.getElementById('lastMeal');
        var coachCard = document.getElementById('coachCard');

        if (resultNumber) resultNumber.textContent = fmt(eatStart) + ' \u2013 ' + fmt(eatEnd);
        if (resultVerdict) resultVerdict.textContent = proto + ' intermittent fasting';
        if (fastHoursEl) fastHoursEl.textContent = fastH + ' hours';
        if (firstMealEl) firstMealEl.textContent = fmt(eatStart);
        if (lastMealEl) lastMealEl.textContent = fmt(eatEnd);

        if (coachCard) {
            coachCard.innerHTML = '<div class="coach-text">Your eating window: <span class="hl">' +
                fmt(eatStart) + '</span> to <span class="hl">' + fmt(eatEnd) +
                '</span>.<div class="coach-rule">' + eatH + ' hours to eat. ' + fastH +
                ' hours to fast.</div><div class="coach-advice">During fasting: <em>water, black coffee, tea</em> only. Break your fast with <em>protein + healthy fats</em> for stable energy.</div></div>';
        }

        var shareText = 'My IF schedule (' + proto + '):\nEat: ' + fmt(eatStart) + ' - ' + fmt(eatEnd) +
            '\nFast: ' + fastH + ' hours\n\nBuild yours: healthcalculators.xyz/intermittent-fasting-calculator';
        updateShareButtons(shareText);

        if (typeof factoryReveal === 'function') {
            factoryReveal();
        } else {
            document.querySelectorAll('.hidden-section').forEach(function(el) { el.classList.remove('hidden-section'); });
        }
        var resultSection = document.getElementById('result-section');
        if (resultSection) resultSection.scrollIntoView({ behavior: 'smooth' });
    });
})();
