// Sleep Calculator — calculation logic
(function() {
    function fmt12(d) {
        var h = d.getHours(), m = d.getMinutes(), ap = h >= 12 ? 'PM' : 'AM';
        h = h % 12; if (h === 0) h = 12;
        return h + ':' + (m < 10 ? '0' : '') + m + ' ' + ap;
    }

    var btn = document.getElementById('calcBtn');
    if (btn) btn.addEventListener('click', function() {
        var wakeEl = document.getElementById('wakeTime');
        var ageEl = document.getElementById('age');
        var faEl = document.getElementById('fallAsleep');
        if (!wakeEl || !ageEl || !faEl) return;

        var wt = wakeEl.value;
        var age = parseInt(ageEl.value) || 30;
        var fa = parseInt(faEl.value);
        if (!wt) return;

        var parts = wt.split(':');
        var h = parseInt(parts[0]), m = parseInt(parts[1]);
        var base = new Date(); base.setHours(h, m, 0, 0);

        var results = [];
        for (var c = 6; c >= 3; c--) {
            var totalMin = (c * 90) + fa;
            var bed = new Date(base.getTime() - totalMin * 60000);
            var hrs = (c * 90) / 60;
            var color = c >= 5 ? '#22c55e' : c === 4 ? '#f59e0b' : '#ef4444';
            var label = c >= 5 ? 'Optimal' : c === 4 ? 'Acceptable' : 'Too short';
            results.push({ time: bed, cycles: c, hours: hrs, color: color, label: label });
        }

        // Build sleep cards into breakdown area
        var cards = document.getElementById('sleepCards');
        if (cards) {
            cards.innerHTML = '';
            for (var i = 0; i < results.length; i++) {
                var r = results[i];
                var badge = r.cycles === 5 ? '<div style="position:absolute;top:-8px;right:8px;background:var(--accent);color:#fff;font-size:0.65rem;padding:2px 8px;border-radius:8px;font-weight:700;">RECOMMENDED</div>' : '';
                var card = document.createElement('div');
                card.style.cssText = 'position:relative;border:1px solid ' + r.color + '30;background:' + r.color + '08;border-radius:14px;padding:1.2rem;text-align:center;';
                card.innerHTML = '<div style="font-size:1.4rem;font-weight:700;color:var(--text);">' + fmt12(r.time) + '</div><div style="font-size:0.82rem;color:var(--text-dim);margin:4px 0;">' + r.cycles + ' cycles / ' + r.hours + 'h</div><div style="display:inline-block;padding:2px 10px;border-radius:10px;font-size:0.75rem;font-weight:600;background:' + r.color + ';color:#fff;">' + r.label + '</div>' + badge;
                cards.appendChild(card);
            }
        }

        var rn = document.getElementById('resultNumber');
        if (rn) rn.textContent = fmt12(results[1].time);

        var rv = document.getElementById('resultVerdict');
        var recHrs = age < 14 ? '8-10' : age < 18 ? '8-10' : age < 65 ? '7-9' : '7-8';
        if (rv) rv.textContent = 'Recommended for your age: ' + recHrs + ' hours';

        var coach = document.getElementById('coachCard');
        if (coach) coach.innerHTML = '<div class="coach-text">To wake up at <span class="hl">' + fmt12(base) + '</span>, go to bed at <span class="hl">' + fmt12(results[1].time) + '</span>.<div class="coach-rule">5 complete cycles. No alarm-in-deep-sleep.</div><div class="coach-advice">Keep your bedroom at <em>60-67\u00b0F</em>. Avoid screens <em>30 min before bed</em>. Same time every day, including weekends.</div></div>';

        var shareText = 'To wake at ' + fmt12(base) + ', go to bed at ' + fmt12(results[1].time) + '\n5 sleep cycles = 7.5 hours\n\nTry it: healthcalculators.xyz/sleep-calculator';
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
