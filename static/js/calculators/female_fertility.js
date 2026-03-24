// Female Fertility Calculator — factory-compatible
(function() {
    var btn = document.getElementById('calcBtn');
    if (!btn) return;

    btn.addEventListener('click', function() {
        // Get input values
        var lastPeriodEl = document.getElementById('lastPeriod');
        var cycleLengthEl = document.getElementById('cycleLength');
        var lutealPhaseEl = document.getElementById('lutealPhase');

        if (!lastPeriodEl || !cycleLengthEl || !lutealPhaseEl) return;

        var lastPeriodInput = lastPeriodEl.value;
        var cycleLength = parseInt(cycleLengthEl.value);
        var lutealPhase = parseInt(lutealPhaseEl.value);

        // Validate inputs
        if (!lastPeriodInput) return;

        var lastPeriod = new Date(lastPeriodInput + 'T00:00:00');
        if (isNaN(lastPeriod.getTime())) return;

        if (isNaN(cycleLength) || cycleLength < 20 || cycleLength > 45) return;

        if (isNaN(lutealPhase)) {
            lutealPhase = 14;
        } else if (lutealPhase < 10 || lutealPhase > 16) {
            return;
        }

        // Calculate ovulation day (cycle length - luteal phase)
        var ovulationDayInCycle = cycleLength - lutealPhase;

        // Calculate ovulation date (last period + ovulation day in cycle)
        var ovulationDate = new Date(lastPeriod);
        ovulationDate.setDate(ovulationDate.getDate() + ovulationDayInCycle);

        // Calculate fertile window (5 days before ovulation to ovulation day)
        var fertileStart = new Date(ovulationDate);
        fertileStart.setDate(fertileStart.getDate() - 5);

        // Calculate peak fertility days (2 days before ovulation to ovulation day)
        var peakStart = new Date(ovulationDate);
        peakStart.setDate(peakStart.getDate() - 2);

        // Populate factory result elements
        var resultNumber = document.getElementById('resultNumber');
        if (resultNumber) resultNumber.textContent = formatDate(ovulationDate);

        var resultVerdict = document.getElementById('resultVerdict');
        if (resultVerdict) {
            var daysUntil = Math.round((ovulationDate - new Date()) / (1000 * 60 * 60 * 24));
            if (daysUntil > 0) {
                resultVerdict.textContent = daysUntil + ' days until estimated ovulation';
            } else if (daysUntil === 0) {
                resultVerdict.textContent = 'Estimated ovulation is today';
            } else {
                resultVerdict.textContent = 'Estimated ovulation was ' + Math.abs(daysUntil) + ' days ago';
            }
        }

        // Populate breakdown cards
        var fertileDays = document.getElementById('fertileDays');
        if (fertileDays) fertileDays.textContent = formatDateShort(fertileStart) + ' – ' + formatDateShort(ovulationDate);

        var peakDays = document.getElementById('peakDays');
        if (peakDays) peakDays.textContent = formatDateShort(peakStart) + ' – ' + formatDateShort(ovulationDate);

        var ovulationDay = document.getElementById('ovulationDay');
        if (ovulationDay) ovulationDay.textContent = formatDate(ovulationDate);

        // Coach card
        var coachCard = document.getElementById('coachCard');
        if (coachCard) {
            coachCard.innerHTML =
                '<p>Your estimated <span class="hl">fertile window</span> is <span class="hl">' +
                formatDate(fertileStart) + '</span> through <span class="hl">' + formatDate(ovulationDate) + '</span> — that\'s 6 days total.</p>' +
                '<div class="coach-rule">Best odds: 1–2 days before ovulation</div>' +
                '<div class="coach-advice">' +
                '<p>The egg lives only <em>12–24 hours</em> after release, but sperm survive up to <em>5 days</em>. ' +
                'That\'s why the days <em>before</em> ovulation matter most.</p>' +
                '<p>This estimate assumes a <em>' + lutealPhase + '-day luteal phase</em>. ' +
                'If your cycles vary, track basal body temperature or use OPKs to confirm timing.</p>' +
                '</div>';
        }

        // Reveal results via factory
        if (typeof factoryReveal === 'function') factoryReveal();
        if (typeof showNextSteps === 'function') showNextSteps('fertility', collectUserData());
    });

    function formatDate(date) {
        var options = { weekday: 'short', month: 'short', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    }

    function formatDateShort(date) {
        var options = { month: 'short', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    }
})();
