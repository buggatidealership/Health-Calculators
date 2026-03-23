// Ozempic Pen Click Calculator — calculation logic
(function() {
    // Pen specifications based on official Ozempic documentation
    var penSpecs = {
        "0.25-0.5": {
            clicks: 4,
            dosesPerClick: 0.25,
            maxDose: 2,
            penColor: "Blue",
            recommendedDoses: [0.25, 0.5],
            emoji: "\u{1F499}"
        },
        "1-2": {
            clicks: 4,
            dosesPerClick: 0.5,
            maxDose: 4,
            penColor: "Gray",
            recommendedDoses: [1, 1.5, 2],
            emoji: "\u{1FA76}"
        },
        "2-4": {
            clicks: 4,
            dosesPerClick: 1,
            maxDose: 8,
            penColor: "Green",
            recommendedDoses: [2, 3, 4],
            emoji: "\u{1F49A}"
        }
    };

    var selectedPen = null;
    var selectedDose = null;

    // Set today's date as default for last injection
    var today = new Date();
    var formatted = today.toISOString().split('T')[0];
    document.getElementById('lastInjDate').value = formatted;

    window.selectPen = function(el, penKey) {
        document.querySelectorAll('.pen-card').forEach(function(c) { c.classList.remove('selected'); });
        el.classList.add('selected');
        selectedPen = penKey;
        selectedDose = null;

        // Build dose cards
        var spec = penSpecs[penKey];
        var grid = document.getElementById('doseGrid');
        grid.innerHTML = '';
        spec.recommendedDoses.forEach(function(dose) {
            var card = document.createElement('div');
            card.className = 'dose-card';
            card.textContent = dose + ' mg';
            card.onclick = function() {
                document.querySelectorAll('.dose-card').forEach(function(c) { c.classList.remove('selected'); });
                this.classList.add('selected');
                selectedDose = dose;
            };
            grid.appendChild(card);
        });

        // Show dose section
        document.getElementById('dose-section').classList.remove('hidden-section');

        // Hide static example
        var staticEx = document.getElementById('staticExample');
        if (staticEx) staticEx.style.display = 'none';

        setTimeout(function() {
            document.getElementById('dose-section').scrollIntoView({ behavior: 'smooth' });
        }, 350);
    };

    document.getElementById('calcBtn').addEventListener('click', calculate);

    function calculate() {
        if (!selectedPen || !selectedDose) {
            alert('Please select a pen color and dose first.');
            return;
        }

        var weeksAtDose = parseInt(document.getElementById('weeksInput').value) || 0;
        var lastInjDate = document.getElementById('lastInjDate').value;

        if (!lastInjDate) {
            alert('Please enter your last injection date.');
            return;
        }

        var spec = penSpecs[selectedPen];

        // Calculate clicks
        var clicks = calculateClicks(selectedPen, selectedDose);
        var clicksRounded = Math.round(clicks);

        // Display result
        var resultEl = document.getElementById('resultNumber');
        resultEl.textContent = clicksRounded;

        // Color coding based on click validity
        var verdict = document.getElementById('resultVerdict');
        if (clicks % 1 === 0) {
            resultEl.className = 'result-number glow-good';
            verdict.textContent = 'Standard dose \u2014 clean click count';
            verdict.style.color = 'var(--good)';
        } else {
            resultEl.className = 'result-number glow-caution';
            verdict.textContent = 'Non-standard \u2014 fractional clicks may cause errors';
            verdict.style.color = 'var(--caution)';
        }

        // Next injection date
        var nextDate = calculateNextInjectionDate(lastInjDate);
        document.getElementById('nextInjDate').textContent = nextDate;

        // Days since last injection
        var daysSince = calculateDaysSinceLastInjection(lastInjDate);
        var daysSinceEl = document.getElementById('daysSince');
        daysSinceEl.textContent = daysSince + ' days';
        if (daysSince < 6) {
            daysSinceEl.style.color = 'var(--caution)';
        } else if (daysSince > 10) {
            daysSinceEl.style.color = 'var(--bad)';
        } else {
            daysSinceEl.style.color = 'var(--good)';
        }

        // Remaining doses
        var remaining = calculateRemainingDoses(selectedPen, selectedDose);
        document.getElementById('remainingDoses').textContent = remaining + ' doses';

        // Refill date
        var refillDate = new Date(lastInjDate);
        refillDate.setDate(refillDate.getDate() + remaining * 7);
        document.getElementById('refillDate').textContent = refillDate.toLocaleDateString();

        // Safety warnings
        var warnings = checkDosingSafety(selectedPen, selectedDose, daysSince, clicks);
        var alertEl = document.getElementById('safetyAlert');
        var warningsList = document.getElementById('safetyWarnings');
        if (warnings.length > 0) {
            alertEl.classList.remove('hidden-section');
            warningsList.innerHTML = '';
            warnings.forEach(function(w) {
                var li = document.createElement('li');
                li.textContent = w;
                warningsList.appendChild(li);
            });
        } else {
            alertEl.classList.add('hidden-section');
        }

        // Build coach card
        var coachCard = document.getElementById('coachCard');
        var penColor = spec.penColor;
        coachCard.innerHTML =
            '<div class="coach-text">' +
            'You\'re on the <span class="hl">' + penColor + ' pen</span> at <span class="hl">' + selectedDose + ' mg</span>.<br>' +
            'That\'s <span class="hl">' + clicksRounded + ' click' + (clicksRounded !== 1 ? 's' : '') + '</span>, once a week.<br>' +
            'Your pen has <span class="hl">' + remaining + ' doses</span> left &mdash; you\'ll need a refill around <span class="hl">' + refillDate.toLocaleDateString() + '</span>.' +
            '<div class="coach-advice">' +
            '<em>The rule: match your pen color to your dose range.</em><br>' +
            'Blue for starting. Gray for mid. Green for high.<br>' +
            (clicks % 1 !== 0 ? '<span style="color:var(--caution);">Your dose doesn\'t divide evenly into clicks &mdash; talk to your doctor.</span>' : 'Your dose divides evenly. You\'re on a standard regimen.') +
            '</div></div>';

        // Build share text
        var shareText = 'Ozempic ' + penColor + ' pen: ' + selectedDose + ' mg = ' + clicksRounded + ' click' + (clicksRounded !== 1 ? 's' : '') + '\n\nThe rule:\nBlue = 0.25 mg/click\nGray = 0.5 mg/click\nGreen = 1 mg/click\n\nYour pen color tells you everything.\n\nTry it: healthcalculators.xyz/ozempic-pen-click-calculator';
        updateShareButtons(shareText);

        // Show result and coach sections
        document.querySelectorAll('.hidden-section').forEach(function(el) {
            if (el.id === 'safetyAlert' && warnings.length === 0) return;
            el.classList.remove('hidden-section');
        });
        document.getElementById('result-section').scrollIntoView({ behavior: 'smooth' });

        // Track calculator completion
        if (typeof hcTrackEvent === 'function') {
            hcTrackEvent('calculator_complete', {
                calculator_name: 'Ozempic Pen Click Calculator',
                page_path: '/ozempic-pen-click-calculator'
            });
        }
    }

    // Helper functions
    function calculateClicks(penStrength, dose) {
        var spec = penSpecs[penStrength];
        return dose / spec.dosesPerClick;
    }

    function calculateRemainingDoses(penStrength, dose) {
        var spec = penSpecs[penStrength];
        var totalClicksInPen = spec.clicks * (spec.maxDose / spec.dosesPerClick);
        var clicksUsedPerDose = calculateClicks(penStrength, dose);
        return Math.floor(totalClicksInPen / clicksUsedPerDose);
    }

    function calculateNextInjectionDate(lastInjectionDate) {
        var date = new Date(lastInjectionDate);
        date.setDate(date.getDate() + 7);
        return date.toLocaleDateString();
    }

    function calculateDaysSinceLastInjection(lastInjectionDate) {
        var today = new Date();
        var lastInjection = new Date(lastInjectionDate);
        var diffTime = today - lastInjection;
        return Math.floor(diffTime / (1000 * 60 * 60 * 24));
    }

    function isNonStandardDose(penStrength, dose) {
        var spec = penSpecs[penStrength];
        return spec.recommendedDoses.indexOf(dose) === -1;
    }

    function checkDosingSafety(penStrength, dose, daysSince, clicks) {
        var warnings = [];
        if (daysSince < 6) {
            warnings.push('It\'s only been ' + daysSince + ' days since your last injection. Ozempic is typically taken once weekly (every 7 days).');
        } else if (daysSince > 10) {
            warnings.push('It\'s been ' + daysSince + ' days since your last injection. Taking doses too far apart may affect medication effectiveness.');
        }
        if (isNonStandardDose(penStrength, dose)) {
            warnings.push('The dose of ' + dose + 'mg is not a standard dose for the ' + penSpecs[penStrength].penColor + ' pen. This increases risk of dosing errors.');
        }
        if (clicks % 1 !== 0) {
            warnings.push('Your dose requires ' + clicks + ' clicks, which is not a whole number. This may lead to inaccurate dosing.');
        }
        return warnings;
    }
})();
