// Caffeine Half Life Calculator — calculation logic
(function() {
    var SOURCES = [
        { emoji: '\u2615', name: 'Coffee', mg: 95 },
        { emoji: '\u2615', name: 'Tall coffee', mg: 142 },
        { emoji: '\u2615', name: 'Espresso', mg: 63 },
        { emoji: '\ud83e\uddf3', name: 'Cold brew', mg: 200 },
        { emoji: '\u26a1', name: 'Energy drink', mg: 160 },
        { emoji: '\u26a1', name: 'Bang / Reign', mg: 300 },
        { emoji: '\ud83c\udf75', name: 'Black tea', mg: 47 },
        { emoji: '\ud83c\udf75', name: 'Green tea', mg: 28 },
        { emoji: '\ud83d\udc8a', name: 'Caffeine pill', mg: 200 },
        { emoji: '\ud83e\udd64', name: 'Cola', mg: 34 },
        { emoji: '\ud83c\udfcb\ufe0f', name: 'Pre-workout', mg: 200 },
        { emoji: '\u270f\ufe0f', name: 'Custom', mg: 0 }
    ];
    var selectedMg = 0;
    var selectedName = '';
    var HALF_LIFE = 5;

    var now = new Date();
    var hh = String(now.getHours()).padStart(2, '0');
    var mm = String(now.getMinutes()).padStart(2, '0');
    document.getElementById('consumeTime').value = hh + ':' + mm;

    function timeToMinutes(t) {
        var parts = t.split(':').map(Number);
        return parts[0] * 60 + parts[1];
    }
    function minutesToTime(m) {
        m = Math.round(m);
        while (m < 0) m += 1440;
        m = m % 1440;
        var h = Math.floor(m / 60);
        var min = m % 60;
        return (h % 12 || 12) + ':' + String(min).padStart(2, '0') + ' ' + (h >= 12 ? 'PM' : 'AM');
    }
    function caffeineAt(initial, hours) {
        return initial * Math.pow(0.5, hours / HALF_LIFE);
    }
    function getColor(mg) {
        if (mg < 25) return { css: 'var(--good)', cls: 'glow-good', label: 'good' };
        if (mg <= 50) return { css: 'var(--caution)', cls: 'glow-caution', label: 'caution' };
        return { css: 'var(--bad)', cls: 'glow-bad', label: 'bad' };
    }

    function buildSourceGrid() {
        var grid = document.getElementById('sourceGrid');
        SOURCES.forEach(function(s) {
            var card = document.createElement('div');
            card.className = 'source-card';
            card.innerHTML = '<span class="emoji">' + s.emoji + '</span><span class="name">' + s.name + '</span>' + (s.mg ? '<span class="mg">' + s.mg + ' mg</span>' : '<span class="mg">Enter mg</span>');
            card.onclick = function() {
                document.querySelectorAll('.source-card').forEach(function(c) { c.classList.remove('selected'); });
                card.classList.add('selected');
                selectedName = s.name;
                var cw = document.getElementById('customWrap');
                if (s.mg === 0) {
                    cw.classList.add('show');
                    selectedMg = parseInt(document.getElementById('customMg').value) || 100;
                    selectedName = 'caffeine';
                } else {
                    cw.classList.remove('show');
                    selectedMg = s.mg;
                }
                setTimeout(function() {
                    document.getElementById('time-section').scrollIntoView({ behavior: 'smooth' });
                }, 350);
            };
            grid.appendChild(card);
        });
    }

    var customMgEl = document.getElementById('customMg');
    if (customMgEl) {
        customMgEl.addEventListener('input', function() { selectedMg = parseInt(this.value) || 0; });
    }

    document.getElementById('calcBtn').addEventListener('click', calculate);

    function calculate() {
        if (document.getElementById('customWrap').classList.contains('show')) {
            selectedMg = parseInt(document.getElementById('customMg').value) || 0;
        }
        if (!selectedMg) return;

        var staticEx = document.getElementById('staticExample');
        if (staticEx) staticEx.style.display = 'none';

        var consumeMin = timeToMinutes(document.getElementById('consumeTime').value);
        var bedMin = timeToMinutes(document.getElementById('bedTime').value);
        if (bedMin <= consumeMin) bedMin += 1440;
        var hoursTobed = (bedMin - consumeMin) / 60;
        var remaining = caffeineAt(selectedMg, hoursTobed);
        var info = getColor(remaining);

        document.getElementById('resultNumber').textContent = Math.round(remaining);
        document.getElementById('resultNumber').className = 'result-number ' + info.cls;
        var verdict = document.getElementById('resultVerdict');
        if (info.label === 'good') {
            verdict.textContent = "You're in the clear for sleep";
            verdict.style.color = 'var(--good)';
        } else if (info.label === 'caution') {
            verdict.textContent = 'Borderline \u2014 may affect light sleepers';
            verdict.style.color = 'var(--caution)';
        } else {
            verdict.textContent = 'This will likely disrupt your sleep';
            verdict.style.color = 'var(--bad)';
        }

        var hoursNeeded = HALF_LIFE * Math.log2(selectedMg / 25);
        var cutoffMin = bedMin - hoursNeeded * 60;
        document.getElementById('cutoffTime').textContent = minutesToTime(cutoffMin);
        document.getElementById('cutoffNote').textContent =
            'To have less than 25 mg at bedtime, finish your last ' + selectedMg + ' mg serving by this time.';

        var consumeTimeStr = minutesToTime(consumeMin);
        var halfTime = minutesToTime(consumeMin + 300);
        var clearTime = minutesToTime(consumeMin + 600);
        var halfCount = Math.ceil(Math.log2(selectedMg / 25));
        var bedTimeStr = minutesToTime(bedMin);

        var coachCard = document.getElementById('coachCard');
        coachCard.innerHTML =
            '<div class="coach-text">' +
            'You had <span class="hl">' + selectedName.toLowerCase() + '</span> at <span class="hl">' + consumeTimeStr + '</span>.<br>' +
            'By <span class="hl">' + halfTime + '</span>, half was gone.<br>' +
            'By <span class="hl">' + clearTime + '</span>, you\'re in the clear.' +
            '<div class="coach-rule">The rule: every 5 hours, half.</div>' +
            '<div class="coach-advice">' +
            'Next time you\'re thinking about that last cup &mdash;<br>' +
            '<em>count forward ' + halfCount + ' half-lives from now.</em><br>' +
            'If that\'s past ' + bedTimeStr + ', skip it.' +
            '</div></div>';

        var shareText = 'Every 5 hours, your caffeine drops by half.\n\n' + selectedMg + 'mg at ' + consumeTimeStr + ':\n' + halfTime + ' \u2192 ' + Math.round(selectedMg / 2) + 'mg\n' + clearTime + ' \u2192 ' + Math.round(selectedMg / 4) + 'mg\n\nLast safe cup: ' + minutesToTime(bedMin - halfCount * 300) + '\n\nTry it: healthcalculators.xyz/caffeine-half-life-calculator';
        updateShareButtons(shareText);

        // Hour-by-hour decay
        var decayDiv = document.getElementById('decayDetail');
        decayDiv.innerHTML = '';
        for (var h = 0; h <= Math.min(Math.ceil(hoursTobed) + 2, 24); h++) {
            var mg = caffeineAt(selectedMg, h);
            var pct = (mg / selectedMg) * 100;
            var c = getColor(mg);
            var isBed = h === Math.round(hoursTobed);
            decayDiv.innerHTML += '<div class="bar-row"' + (isBed ? ' style="background:rgba(20,184,166,0.06);border-radius:4px;padding:2px 4px;"' : '') + '>' +
                '<span class="bar-time">' + minutesToTime(consumeMin + h * 60) + (isBed ? ' \ud83d\udecf\ufe0f' : '') + '</span>' +
                '<div class="bar-track"><div class="bar-fill" style="width:' + pct + '%;background:' + c.css + ';"></div></div>' +
                '<span class="bar-val">' + Math.round(mg) + ' mg</span></div>';
        }

        document.querySelectorAll('.hidden-section').forEach(function(el) { el.classList.remove('hidden-section'); });
        document.getElementById('result-section').scrollIntoView({ behavior: 'smooth' });

        if (typeof hcTrackEvent === 'function') {
            hcTrackEvent('calculator_complete', { calculator_name: 'Caffeine Half Life Calculator', page_path: '/caffeine-half-life-calculator' });
        }
    }

    document.getElementById('decayToggle').addEventListener('click', function() {
        var detail = document.getElementById('decayDetail');
        detail.classList.toggle('show');
        this.textContent = detail.classList.contains('show') ? 'Hide hour-by-hour breakdown' : 'Show hour-by-hour breakdown';
    });

    buildSourceGrid();
})();
