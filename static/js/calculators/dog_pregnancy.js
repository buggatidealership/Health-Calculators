// Dog Pregnancy Due-Date Calculator — factory-compatible
(function () {
    var btn = document.getElementById('calcBtn');
    if (!btn) return;

    btn.addEventListener('click', function () {
        var matingEl = document.getElementById('matingDate');
        var breedEl = document.getElementById('breedSize');
        if (!matingEl || !breedEl) return;

        var md = new Date(matingEl.value);
        if (!md.getTime()) { alert('Please enter mating date'); return; }

        var bs = breedEl.value;
        var adj = { small: 62, medium: 63, large: 64, giant: 65 };
        var gl = adj[bs];

        // Ovulation estimated 2 days after mating
        var ovDate = new Date(md);
        ovDate.setDate(ovDate.getDate() + 2);

        var dueDate = new Date(ovDate);
        dueDate.setDate(dueDate.getDate() + gl);

        var earlyDate = new Date(ovDate);
        earlyDate.setDate(earlyDate.getDate() + 61);

        var lateDate = new Date(ovDate);
        lateDate.setDate(lateDate.getDate() + 65);

        var today = new Date();
        var curDay = Math.floor((today - ovDate) / (1000 * 60 * 60 * 24));
        var daysRem = Math.floor((dueDate - today) / (1000 * 60 * 60 * 24));

        // Primary result
        var numEl = document.getElementById('resultNumber');
        if (numEl) numEl.textContent = dueDate.toDateString();

        var verdictEl = document.getElementById('resultVerdict');
        if (verdictEl) verdictEl.textContent = daysRem > 0
            ? daysRem + ' days to go'
            : daysRem === 0 ? 'Due today!' : Math.abs(daysRem) + ' days past due';

        // Breakdown
        var rangeEl = document.getElementById('dateRange');
        if (rangeEl) rangeEl.textContent = earlyDate.toDateString() + ' - ' + lateDate.toDateString();

        var dayEl = document.getElementById('currentDay');
        if (dayEl) dayEl.textContent = curDay > 0 ? 'Day ' + curDay + ' of ~' + gl : 'Not yet started';

        var remEl = document.getElementById('daysRemaining');
        if (remEl) remEl.textContent = daysRem > 0
            ? daysRem + ' days'
            : daysRem === 0 ? 'Due today!' : Math.abs(daysRem) + ' days overdue';

        // Coach card
        var coachEl = document.getElementById('coachCard');
        if (coachEl) {
            var stage, advice;
            if (curDay < 21) {
                stage = 'Early pregnancy (organogenesis)';
                advice = '<em>Day 25-28:</em> Vet ultrasound can confirm pregnancy.<br><em>Avoid:</em> medications, stress, and rough play.';
            } else if (curDay < 45) {
                stage = 'Mid pregnancy (rapid development)';
                advice = '<em>Day 45:</em> X-ray can count puppies.<br><em>Increase food</em> by 25-50% gradually.';
            } else {
                stage = 'Late pregnancy (prepare for whelping)';
                advice = '<em>Take rectal temperature</em> twice daily.<br><em>Prepare whelping box</em> in a quiet area.<br><em>Drop below 99F = labor within 24 hours.</em>';
            }
            coachEl.innerHTML =
                '<div class="coach-text">Mating date: <span class="hl">' + md.toDateString() + '</span><br>' +
                'Breed size: <span class="hl">' + bs + '</span><br>' +
                'Expected due date: <span class="hl">' + dueDate.toDateString() + '</span>' +
                '<div class="coach-rule">' + stage + '</div>' +
                '<div class="coach-advice">' + advice + '</div></div>';
        }

        // Share
        var shareText = 'My dog is due: ' + dueDate.toDateString() + '\nDay ' + curDay + ' of pregnancy\n' + daysRem + ' days remaining\n\nTry it: healthcalculators.xyz/dog-pregnancy-due-date-calculator';
        var shareRow = document.getElementById('shareRow');
        if (shareRow) shareRow.style.display = 'flex';
        var waEl = document.getElementById('shareWhatsApp');
        if (waEl) waEl.href = 'https://wa.me/?text=' + encodeURIComponent(shareText);
        var twEl = document.getElementById('shareTwitter');
        if (twEl) twEl.href = 'https://x.com/intent/tweet?text=' + encodeURIComponent(shareText);
        window._shareText = shareText;

        // Reveal results via factory
        if (typeof factoryReveal === 'function') factoryReveal();

        // Analytics
        if (typeof hcTrackEvent === 'function') {
            hcTrackEvent('calculator_complete', {
                calculator_name: 'Dog Pregnancy Calculator',
                page_path: '/dog-pregnancy-due-date-calculator'
            });
        }
    });

    // Copy button
    var copyBtn = document.getElementById('copyBtn');
    if (copyBtn) {
        copyBtn.addEventListener('click', function () {
            if (!window._shareText) return;
            navigator.clipboard.writeText(window._shareText).then(function () {
                copyBtn.classList.add('copied');
                copyBtn.textContent = 'Copied!';
                setTimeout(function () {
                    copyBtn.classList.remove('copied');
                    copyBtn.textContent = 'Copy';
                }, 2000);
            });
        });
    }
})();
