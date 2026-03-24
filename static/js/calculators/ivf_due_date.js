// IVF Due Date Calculator — factory-compatible
(function() {

var selectedType = '';
var selectedDay = 5; // default
var calcBtn = document.getElementById('calcBtn');

if (!calcBtn) return;

window.selectTransfer = function(el, type) {
    document.querySelectorAll('.transfer-card').forEach(function(c) { c.classList.remove('selected'); });
    el.classList.add('selected');
    selectedType = type;

    // Update date label
    var label = document.getElementById('dateLabel');
    if (label) {
        if (type === 'retrieval') {
            label.textContent = 'Egg retrieval date';
        } else if (type === 'frozen') {
            label.textContent = 'Frozen embryo transfer date';
        } else {
            label.textContent = 'Fresh embryo transfer date';
        }
    }

    // Show input section
    var inputSection = document.getElementById('input-section');
    if (inputSection) {
        inputSection.classList.remove('hidden-section');
        setTimeout(function() {
            inputSection.scrollIntoView({ behavior: 'smooth' });
            document.querySelectorAll('.fade-in').forEach(function(el) {
                if (typeof observer !== 'undefined') observer.observe(el);
            });
        }, 150);
    }
};

window.selectEmbryoDay = function(el, day) {
    document.querySelectorAll('.embryo-day-card').forEach(function(c) { c.classList.remove('selected'); });
    el.classList.add('selected');
    selectedDay = day;
};

function formatDateLong(date) {
    return date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
}
function formatDateShort(date) {
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}
function formatDateRange(d1, d2) {
    return formatDateShort(d1) + ' \u2013 ' + formatDateShort(d2);
}

function calculate() {
    var dateInputEl = document.getElementById('transferDate');
    var dateInput = dateInputEl ? dateInputEl.value : '';
    if (!dateInput) { alert('Please select a date.'); return; }
    if (!selectedType) { alert('Please select a transfer type above.'); return; }

    // Hide static example
    var staticEx = document.getElementById('staticExample');
    if (staticEx) staticEx.style.display = 'none';

    // Parse date (add T12:00 to avoid timezone issues)
    var inputDate = new Date(dateInput + 'T12:00:00');
    var today = new Date();
    today.setHours(12, 0, 0, 0);

    // Calculate due date
    var dueDate = new Date(inputDate);
    var retrievalEquiv = new Date(inputDate);

    if (selectedType === 'retrieval') {
        var addDaysRetrieval = { 3: 266, 5: 264, 6: 263 };
        dueDate.setDate(dueDate.getDate() + addDaysRetrieval[selectedDay]);
        retrievalEquiv = new Date(inputDate);
    } else {
        var addDaysTransfer = { 3: 263, 5: 261, 6: 260 };
        dueDate.setDate(dueDate.getDate() + addDaysTransfer[selectedDay]);
        retrievalEquiv = new Date(inputDate);
        retrievalEquiv.setDate(retrievalEquiv.getDate() - selectedDay);
    }

    // Calculate gestational age
    var gaDays;
    var daysSinceInput = Math.floor((today - inputDate) / (1000 * 60 * 60 * 24));

    if (selectedType === 'retrieval') {
        gaDays = daysSinceInput + 14;
    } else {
        gaDays = daysSinceInput + selectedDay + 14;
    }

    var gaWeeks = Math.floor(gaDays / 7);
    var gaRemainder = gaDays % 7;

    // Determine trimester
    var trimesterText = '';
    var trimesterColor = '';
    if (gaDays < 0) {
        trimesterText = 'Not yet started';
        trimesterColor = 'var(--text-muted)';
    } else if (gaWeeks < 14) {
        trimesterText = 'First Trimester';
        trimesterColor = 'var(--hope)';
    } else if (gaWeeks < 28) {
        trimesterText = 'Second Trimester';
        trimesterColor = 'var(--teal)';
    } else {
        trimesterText = 'Third Trimester';
        trimesterColor = 'var(--good)';
    }

    // Display results
    var resultDueDate = document.getElementById('resultDueDate');
    if (resultDueDate) resultDueDate.textContent = formatDateLong(dueDate);

    var gaEl = document.getElementById('resultGA');
    if (gaEl) {
        if (gaDays >= 0) {
            gaEl.textContent = gaWeeks + ' weeks, ' + gaRemainder + ' days';
        } else {
            gaEl.textContent = 'Transfer date is in the future';
        }
    }

    var trimEl = document.getElementById('resultTrimester');
    if (trimEl) {
        trimEl.textContent = trimesterText;
        trimEl.style.color = trimesterColor;
    }

    // Calculate LMP equivalent for milestone dating
    var lmpEquiv = new Date(retrievalEquiv);
    lmpEquiv.setDate(lmpEquiv.getDate() - 14);

    // Milestones
    var milestones = [
        { name: 'First Ultrasound', week: 6, weekEnd: 8, desc: 'Heartbeat confirmation' },
        { name: 'End of First Trimester', week: 13, weekEnd: 13, desc: 'Lower miscarriage risk' },
        { name: 'NIPT Window', week: 10, weekEnd: 14, desc: 'Genetic screening' },
        { name: 'Anatomy Scan', week: 18, weekEnd: 22, desc: 'Detailed ultrasound' },
        { name: 'Viability Milestone', week: 24, weekEnd: 24, desc: '24 weeks' },
        { name: 'Third Trimester', week: 28, weekEnd: 28, desc: 'Final stretch' },
        { name: 'Full Term', week: 37, weekEnd: 37, desc: 'Safe for delivery' },
        { name: 'Due Date', week: 40, weekEnd: 40, desc: 'Estimated arrival' }
    ];

    var timelineEl = document.getElementById('milestoneTimeline');
    if (timelineEl) {
        timelineEl.innerHTML = '';
        for (var mi = 0; mi < milestones.length; mi++) {
            var m = milestones[mi];
            var startDate = new Date(lmpEquiv);
            startDate.setDate(startDate.getDate() + m.week * 7);
            var endDate = m.weekEnd !== m.week ? new Date(lmpEquiv) : null;
            if (endDate) endDate.setDate(endDate.getDate() + m.weekEnd * 7);

            var milestoneDays = Math.floor((startDate - today) / (1000 * 60 * 60 * 24));
            var dotClass = 'upcoming';
            if (milestoneDays < -7) dotClass = 'passed';
            else if (milestoneDays <= 7) dotClass = 'current';

            var dateStr = endDate ? formatDateRange(startDate, endDate) : formatDateShort(startDate);
            var weekStr = m.weekEnd !== m.week ? 'Weeks ' + m.week + '\u2013' + m.weekEnd : 'Week ' + m.week;

            timelineEl.innerHTML +=
                '<div class="milestone-item">' +
                    '<div class="milestone-dot ' + dotClass + '"></div>' +
                    '<div class="milestone-info">' +
                        '<div class="milestone-name">' + m.name + '</div>' +
                        '<div class="milestone-date">' + dateStr + '</div>' +
                        '<div class="milestone-week">' + weekStr + ' \u00B7 ' + m.desc + '</div>' +
                    '</div>' +
                '</div>';
        }
    }

    // Coach card
    var daysUntilDue = Math.floor((dueDate - today) / (1000 * 60 * 60 * 24));
    var weeksUntilDue = Math.floor(daysUntilDue / 7);
    var transferTypeLabel = selectedType === 'retrieval' ? 'egg retrieval' : (selectedType === 'frozen' ? 'frozen embryo transfer' : 'fresh transfer');

    var coachCard = document.getElementById('coachCard');
    if (coachCard) {
        var coachHTML = '<div class="coach-text">';

        if (daysUntilDue > 0) {
            coachHTML += 'Your <span class="hl">Day ' + selectedDay + ' ' + transferTypeLabel + '</span> on <span class="hl">' + formatDateShort(inputDate) + '</span> gives you a due date of <span class="hl">' + formatDateShort(dueDate) + '</span>.<br>';
            coachHTML += 'That\'s <span class="teal">' + weeksUntilDue + ' weeks</span> from now.<br>';
            coachHTML += 'You\'re currently at <span class="hl">' + gaWeeks + 'w' + gaRemainder + 'd</span> \u2014 ' + trimesterText.toLowerCase() + '.';
        } else {
            coachHTML += 'Your due date of <span class="hl">' + formatDateShort(dueDate) + '</span> has passed.<br>';
            coachHTML += 'Based on your <span class="hl">Day ' + selectedDay + ' ' + transferTypeLabel + '</span> on <span class="hl">' + formatDateShort(inputDate) + '</span>.';
        }

        coachHTML += '<div class="coach-rule">The rule: transfer day + ' + (266 - selectedDay) + ' days.</div>';
        coachHTML += '<div class="coach-note">';
        coachHTML += 'IVF dates are the most precise in obstetrics \u2014 your clinic knew the exact moment of transfer. ';
        coachHTML += '<em>Only about 5% of babies arrive on their exact due date</em>, but your estimate is as accurate as it gets.';
        coachHTML += '</div></div>';

        coachCard.innerHTML = coachHTML;
    }

    // Share text
    var shareText = 'Our IVF due date: ' + formatDateShort(dueDate) + '\n\nDay ' + selectedDay + ' ' + transferTypeLabel + ' on ' + formatDateShort(inputDate) + '\nCurrently: ' + gaWeeks + ' weeks, ' + gaRemainder + ' days\n' + trimesterText + '\n\nCalculate yours: healthcalculators.xyz/ivf-due-date-calculator';

    var shareRow = document.getElementById('shareRow');
    if (shareRow) shareRow.style.display = 'flex';

    var shareWhatsApp = document.getElementById('shareWhatsApp');
    if (shareWhatsApp) shareWhatsApp.href = 'https://wa.me/?text=' + encodeURIComponent(shareText);

    var shareTwitter = document.getElementById('shareTwitter');
    if (shareTwitter) shareTwitter.href = 'https://x.com/intent/tweet?text=' + encodeURIComponent(shareText);

    var shareTelegram = document.getElementById('shareTelegram');
    if (shareTelegram) shareTelegram.href = 'https://t.me/share/url?url=' + encodeURIComponent('https://healthcalculators.xyz/ivf-due-date-calculator') + '&text=' + encodeURIComponent(shareText);

    window._shareText = shareText;

    // Show sections
    document.querySelectorAll('.hidden-section').forEach(function(el) { el.classList.remove('hidden-section'); });
    var resultSection = document.getElementById('result-section');
    if (resultSection) resultSection.scrollIntoView({ behavior: 'smooth' });
    setTimeout(function() {
        document.querySelectorAll('.fade-in').forEach(function(el) {
            if (typeof observer !== 'undefined') observer.observe(el);
        });
    }, 100);

    // Track
    if (typeof hcTrackEvent === 'function') {
        hcTrackEvent('calculator_complete', {
            calculator_name: 'IVF Due Date Calculator',
            page_path: '/ivf-due-date-calculator'
        });
    }

    if (typeof factoryReveal === 'function') factoryReveal();
}

calcBtn.addEventListener('click', calculate);

// Copy button
var copyBtn = document.getElementById('copyBtn');
if (copyBtn) {
    copyBtn.addEventListener('click', function() {
        if (!window._shareText) return;
        var btn = this;
        navigator.clipboard.writeText(window._shareText).then(function() {
            btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Copied!';
            btn.classList.add('copied');
            setTimeout(function() {
                btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy';
                btn.classList.remove('copied');
            }, 2000);
        }).catch(function() {});
    });
}

// FAQ accordion
document.querySelectorAll('.faq-question').forEach(function(btn) {
    btn.addEventListener('click', function() {
        var item = this.closest('.faq-item');
        if (item) {
            item.classList.toggle('faq-open');
            this.setAttribute('aria-expanded', item.classList.contains('faq-open'));
        }
    });
});

// Ask Pulse
var askBtn = document.getElementById('askBtn');
if (askBtn) {
    askBtn.addEventListener('click', function() {
        var askInput = document.getElementById('askInput');
        var q = askInput ? askInput.value.trim() : '';
        if (!q) return;
        var wrap = document.querySelector('.ask-input-wrap');
        var pills = document.querySelector('.ask-pills');
        var thanks = document.getElementById('askThanks');
        if (wrap) wrap.style.display = 'none';
        if (pills) pills.style.display = 'none';
        if (thanks) thanks.style.display = 'block';
    });
}
document.querySelectorAll('.ask-pill').forEach(function(pill) {
    pill.addEventListener('click', function() {
        var askInput = document.getElementById('askInput');
        if (askInput) askInput.value = this.textContent;
    });
});

// Intersection observer for fade-in
var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, { threshold: 0.15 });

document.querySelectorAll('.fade-in').forEach(function(el) { observer.observe(el); });

})();
