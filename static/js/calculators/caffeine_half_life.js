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
        { emoji: '\ud83c\udfcb\ufe0f', name: 'Pre-workout', mg: 200 }
    ];
    var selectedName = '';
    var HALF_LIFE = 5;

    // Set consumeTime to current time
    var now = new Date();
    var hh = String(now.getHours()).padStart(2, '0');
    var mm = String(now.getMinutes()).padStart(2, '0');
    var consumeTimeEl = document.getElementById('consumeTime');
    if (consumeTimeEl) consumeTimeEl.value = hh + ':' + mm;

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
        var factoryForm = document.querySelector('.factory-form');
        if (!factoryForm) return;

        var gridWrap = document.createElement('div');
        gridWrap.id = 'sourceGrid';
        gridWrap.style.cssText = 'display:grid;grid-template-columns:repeat(4,1fr);gap:0.5rem;max-width:520px;width:100%;margin-bottom:1.5rem;';
        factoryForm.parentNode.insertBefore(gridWrap, factoryForm);

        SOURCES.forEach(function(s) {
            var card = document.createElement('div');
            card.className = 'source-card';
            card.style.cssText = 'background:rgba(20,184,166,0.05);border:1px solid rgba(20,184,166,0.1);border-radius:12px;padding:0.8rem 0.4rem;text-align:center;cursor:pointer;transition:all 0.2s;';
            card.innerHTML = '<span style="font-size:1.4rem;display:block;margin-bottom:0.3rem;">' + s.emoji + '</span><span style="font-size:0.75rem;font-weight:600;display:block;">' + s.name + '</span><span style="font-size:0.65rem;color:var(--text-dim);margin-top:2px;display:block;">' + s.mg + ' mg</span>';
            card.onclick = function() {
                document.querySelectorAll('.source-card').forEach(function(c) { c.classList.remove('selected'); c.style.borderColor = 'rgba(20,184,166,0.1)'; c.style.background = 'rgba(20,184,166,0.05)'; });
                card.classList.add('selected');
                card.style.borderColor = 'var(--accent)';
                card.style.background = 'rgba(20,184,166,0.12)';
                selectedName = s.name;
                var mgInput = document.getElementById('customMg');
                if (mgInput) mgInput.value = s.mg;
                if (factoryForm) {
                    setTimeout(function() { factoryForm.scrollIntoView({ behavior: 'smooth' }); }, 350);
                }
            };
            gridWrap.appendChild(card);
        });
    }

    buildSourceGrid();

    document.getElementById('calcBtn').addEventListener('click', calculate);

    function calculate() {
        var selectedMg = parseInt(document.getElementById('customMg').value) || 0;
        if (!selectedMg) return;
        if (!selectedName) selectedName = 'caffeine';

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
            'Finish last ' + selectedMg + ' mg by this time for < 25 mg at bed';

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

        // Hour-by-hour decay — create container dynamically if needed
        var resultSection = document.getElementById('result-section');
        var decayToggle = document.getElementById('decayToggle');
        var decayDiv = document.getElementById('decayDetail');
        if (!decayToggle && resultSection) {
            var factoryResult = resultSection.querySelector('.factory-result');
            if (factoryResult) {
                decayToggle = document.createElement('button');
                decayToggle.id = 'decayToggle';
                decayToggle.textContent = 'Show hour-by-hour breakdown';
                decayToggle.style.cssText = 'background:rgba(20,184,166,0.08);border:1px solid rgba(20,184,166,0.15);color:var(--text);padding:0.6rem 1.4rem;border-radius:10px;cursor:pointer;font-size:0.85rem;margin-top:1.5rem;';
                factoryResult.appendChild(decayToggle);

                decayDiv = document.createElement('div');
                decayDiv.id = 'decayDetail';
                decayDiv.style.cssText = 'max-width:600px;width:100%;margin-top:1rem;display:none;';
                factoryResult.appendChild(decayDiv);

                decayToggle.addEventListener('click', function() {
                    var isVisible = decayDiv.style.display !== 'none';
                    decayDiv.style.display = isVisible ? 'none' : 'block';
                    this.textContent = isVisible ? 'Show hour-by-hour breakdown' : 'Hide hour-by-hour breakdown';
                });
            }
        }

        if (decayDiv) {
            decayDiv.innerHTML = '';
            for (var h = 0; h <= Math.min(Math.ceil(hoursTobed) + 2, 24); h++) {
                var mg = caffeineAt(selectedMg, h);
                var pct = (mg / selectedMg) * 100;
                var c = getColor(mg);
                var isBed = h === Math.round(hoursTobed);
                decayDiv.innerHTML += '<div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:0.3rem;' + (isBed ? 'background:rgba(20,184,166,0.06);border-radius:4px;padding:2px 4px;' : '') + '">' +
                    '<span style="min-width:5rem;font-size:0.75rem;color:var(--text-dim);">' + minutesToTime(consumeMin + h * 60) + (isBed ? ' \ud83d\udecf\ufe0f' : '') + '</span>' +
                    '<div style="flex:1;height:5px;background:rgba(20,184,166,0.1);border-radius:3px;overflow:hidden;"><div style="height:100%;width:' + pct + '%;background:' + c.css + ';border-radius:3px;"></div></div>' +
                    '<span style="min-width:3rem;text-align:right;font-size:0.75rem;font-weight:600;">' + Math.round(mg) + ' mg</span></div>';
            }
        }

        if (typeof factoryReveal === 'function') {
            factoryReveal();
        } else {
            document.querySelectorAll('.hidden-section').forEach(function(el) { el.classList.remove('hidden-section'); });
        }
        document.getElementById('result-section').scrollIntoView({ behavior: 'smooth' });

        if (typeof hcTrackEvent === 'function') {
            hcTrackEvent('calculator_complete', { calculator_name: 'Caffeine Half Life Calculator', page_path: '/caffeine-half-life-calculator' });
        }
    }
})();
