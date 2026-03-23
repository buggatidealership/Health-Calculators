// Plasma Donation Earnings Calculator — calculation logic
(function() {
    var RATES = {
        base: { new: { min: 50, max: 75 }, returning: { min: 30, max: 55 } },
        newBonus: 25,
        weightBonus: { light: 0, medium: 0, heavy: 10 },
        regionMod: { high: 1.25, 'mid-high': 1.1, mid: 1.0, 'mid-low': 0.9, low: 0.85 },
        avgTime: { new: 150, returning: 75 }
    };

    var selections = { donor: null, frequency: '2', weight: null };

    // Card/button selection logic (factory radio_row: unit-row[data-group] > unit-btn[data-value])
    document.querySelectorAll('[data-group]').forEach(function(row) {
        var group = row.dataset.group;
        row.querySelectorAll('.unit-btn').forEach(function(btn) {
            btn.addEventListener('click', function() {
                var value = this.dataset.value;
                row.querySelectorAll('.unit-btn').forEach(function(b) { b.classList.remove('active'); });
                this.classList.add('active');
                selections[group] = value;
            });
        });
    });

    selections.frequency = '2';

    document.getElementById('calcBtn').addEventListener('click', calculate);

    function calculate() {
        var donor = selections.donor;
        var freq = parseFloat(selections.frequency);
        var weight = selections.weight;
        var region = document.getElementById('stateSelect').value;
        var travelCost = parseFloat(document.getElementById('travelCost').value) || 0;

        if (!donor || !weight || !region) {
            if (!donor) { var dr = document.querySelector('[data-group="donor"]'); if (dr) dr.style.borderColor = 'rgba(239,68,68,0.5)'; setTimeout(function() { if (dr) dr.style.borderColor = ''; }, 1500); }
            if (!weight) { var wr = document.querySelector('[data-group="weight"]'); if (wr) wr.style.borderColor = 'rgba(239,68,68,0.5)'; setTimeout(function() { if (wr) wr.style.borderColor = ''; }, 1500); }
            if (!region) { var s = document.getElementById('stateSelect'); s.style.borderColor = 'rgba(239,68,68,0.5)'; setTimeout(function() { s.style.borderColor = ''; }, 1500); }
            return;
        }

        var staticEx = document.getElementById('staticExample');
        if (staticEx) staticEx.style.display = 'none';

        var isNew = donor === 'new';
        var base = isNew ? RATES.base.new : RATES.base.returning;
        var regionMod = RATES.regionMod[region] || 1;
        var wBonus = RATES.weightBonus[weight] || 0;
        var nBonus = isNew ? RATES.newBonus : 0;

        var minPerVisit = Math.round((base.min + wBonus + nBonus) * regionMod);
        var maxPerVisit = Math.round((base.max + wBonus + nBonus) * regionMod);
        var avgPerVisit = Math.round((minPerVisit + maxPerVisit) / 2);

        var netPerVisit = avgPerVisit - travelCost;
        var weeklyDonations = freq;
        var monthlyDonations = freq * 4.33;
        var yearlyDonations = freq * 52;

        var monthlyMin = Math.round(minPerVisit * monthlyDonations - travelCost * monthlyDonations);
        var monthlyMax = Math.round(maxPerVisit * monthlyDonations - travelCost * monthlyDonations);
        var monthlyAvg = Math.round((monthlyMin + monthlyMax) / 2);

        var weeklyMin = Math.round(minPerVisit * weeklyDonations - travelCost * weeklyDonations);
        var weeklyMax = Math.round(maxPerVisit * weeklyDonations - travelCost * weeklyDonations);

        var yearlyMin = Math.round(minPerVisit * yearlyDonations - travelCost * yearlyDonations);
        var yearlyMax = Math.round(maxPerVisit * yearlyDonations - travelCost * yearlyDonations);

        var visitTime = isNew ? RATES.avgTime.new : RATES.avgTime.returning;
        var hourlyRate = Math.round((netPerVisit / visitTime) * 60);

        document.getElementById('resultNumber').textContent = '$' + monthlyMin + '-$' + monthlyMax;
        var resultLabel = document.getElementById('resultLabel') || document.getElementById('resultVerdict');
        if (resultLabel) resultLabel.textContent = travelCost > 0 ? 'After travel costs' : 'Before travel costs';

        var el;
        el = document.getElementById('perVisit'); if (el) el.textContent = '$' + minPerVisit + '-$' + maxPerVisit;
        el = document.getElementById('perVisitNote'); if (el) el.textContent = travelCost > 0 ? 'Net: $' + (minPerVisit - travelCost) + '-$' + (maxPerVisit - travelCost) : '';

        el = document.getElementById('weekly'); if (el) el.textContent = '$' + weeklyMin + '-$' + weeklyMax;
        el = document.getElementById('weeklyNote'); if (el) el.textContent = weeklyDonations + 'x per week';

        el = document.getElementById('yearly'); if (el) el.textContent = '$' + yearlyMin.toLocaleString() + '-$' + yearlyMax.toLocaleString();
        el = document.getElementById('yearlyNote'); if (el) el.textContent = Math.round(yearlyDonations) + ' donations';

        el = document.getElementById('hourlyRate'); if (el) el.textContent = '$' + hourlyRate + '/hr';
        el = document.getElementById('hourlyNote'); if (el) el.textContent = isNew
            ? 'Based on ~2.5 hour first visit. Return visits average ~75 min, increasing your effective rate.'
            : 'Based on average 75-minute return visit including check-in and recovery.';

        // Coach card
        var freqLabel = freq >= 2 ? 'twice a week' : freq >= 1 ? 'once a week' : '1-2 times a month';
        var monthLabel = monthlyAvg >= 600 ? "That's solid side income" : monthlyAvg >= 350 ? "That covers a car payment or groceries" : "Every bit adds up";

        var coachCard = document.getElementById('coachCard');
        if (coachCard) coachCard.innerHTML =
            '<div class="coach-text">' +
            'Donating <span class="teal">' + freqLabel + '</span> as a <span class="teal">' + (isNew ? 'new' : 'returning') + ' donor</span>,<br>' +
            'you\'re looking at <span class="hl">$' + monthlyMin + '-$' + monthlyMax + '/month</span>.' +
            '<div class="coach-rule">' + monthLabel + '.</div>' +
            '<div class="coach-advice">' +
            '<em>Maximize your earnings:</em><br>' +
            (isNew ? 'Complete all 8 initial donations to capture the full new-donor bonus.<br>' : '') +
            'Drink 8-12 glasses of water the day before &mdash; <em>faster flow = faster visits</em>.<br>' +
            (weight === 'heavy' ? 'Your weight qualifies you for higher-volume collection &mdash; that is extra money every visit.<br>' : '') +
            (travelCost > 0 ? 'Travel costs you <em>$' + Math.round(travelCost * monthlyDonations) + '/month</em>. Carpooling or biking saves that.' : 'Track your travel costs to know your true net earnings.') +
            '</div></div>';

        // Share text
        var shareText = 'I calculated my plasma donation earnings:\n\n' + freqLabel + ': $' + monthlyMin + '-$' + monthlyMax + '/month\nEffective rate: $' + hourlyRate + '/hr\n\nTry it: healthcalculators.xyz/plasma-donation-earnings-calculator';
        updateShareButtons(shareText);

        // Show sections
        document.querySelectorAll('.hidden-section').forEach(function(el) { el.classList.remove('hidden-section'); });
        if (typeof factoryReveal === 'function') factoryReveal();
        else document.getElementById('result-section').scrollIntoView({ behavior: 'smooth' });

        if (typeof hcTrackEvent === 'function') {
            hcTrackEvent('calculator_complete', { calculator_name: 'Plasma Donation Earnings Calculator', page_path: '/plasma-donation-earnings-calculator' });
        }
    }
})();
