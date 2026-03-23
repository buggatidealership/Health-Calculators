// Creatine Dosage Calculator — calculation logic
(function() {
    var btn = document.getElementById('calcBtn');
    if (btn) btn.addEventListener('click', function() {
        var weightEl = document.getElementById('weight');
        var weightUnitEl = document.getElementById('weightUnit');
        var phaseEl = document.getElementById('phase');
        var goalEl = document.getElementById('goal');
        if (!weightEl || !phaseEl) return;

        var weight = parseFloat(weightEl.value);
        if (isNaN(weight) || weight <= 0) return;

        var weightKg = (weightUnitEl && weightUnitEl.value === 'lbs') ? weight * 0.4536 : weight;
        var phase = phaseEl.value;
        var goal = goalEl ? goalEl.value : 'general';

        var maintenanceDailyG = Math.max(3, weightKg * 0.03);
        var loadingDailyG = 0, loadingPerDose = 0;

        if (goal === 'strength') maintenanceDailyG = Math.max(5, weightKg * 0.04);
        maintenanceDailyG = Math.min(maintenanceDailyG, 10);

        if (phase === 'loading') {
            loadingDailyG = Math.min(weightKg * 0.3, 30);
            loadingPerDose = loadingDailyG / 4;
        }

        var maintenanceTsp = maintenanceDailyG / 5;
        var monthlyG = phase === 'loading' ? (loadingDailyG * 5) + (maintenanceDailyG * 25) : maintenanceDailyG * 30;

        var rn = document.getElementById('resultNumber');
        if (rn) {
            if (phase === 'loading') {
                rn.textContent = Math.round(loadingDailyG) + 'g/day';
            } else {
                rn.textContent = Math.round(maintenanceDailyG) + 'g/day';
            }
        }

        var rv = document.getElementById('resultVerdict');
        if (rv) {
            if (phase === 'loading') {
                rv.textContent = 'Loading phase: ' + loadingPerDose.toFixed(1) + 'g x 4 doses/day for 5 days, then ' + Math.round(maintenanceDailyG) + 'g/day';
            } else {
                rv.textContent = 'Daily maintenance dose (\u2248' + maintenanceTsp.toFixed(1) + ' teaspoons)';
            }
        }

        var dMaint = document.getElementById('displayMaintenance');
        if (dMaint) dMaint.textContent = Math.round(maintenanceDailyG) + 'g/day';

        var dMonthly = document.getElementById('displayMonthly');
        if (dMonthly) dMonthly.textContent = Math.round(monthlyG) + 'g';

        var dTsp = document.getElementById('displayTeaspoons');
        if (dTsp) dTsp.textContent = maintenanceTsp.toFixed(1) + ' tsp';

        var coach = document.getElementById('coachCard');
        if (coach) {
            var coachHTML;
            if (phase === 'loading') {
                coachHTML = '<div class="coach-text">Loading: <span class="hl">' + loadingPerDose.toFixed(1) + 'g four times per day</span> for 5 days.<br>Then switch to <span class="hl">' + Math.round(maintenanceDailyG) + 'g/day</span> maintenance.<div class="coach-rule">Loading saturates muscle creatine stores faster.</div><div class="coach-advice">Drink <em>' + Math.round(maintenanceDailyG * 100) + ' mL extra water</em> per day. Monthly supply: <em>' + Math.round(monthlyG) + 'g</em>.</div></div>';
            } else {
                coachHTML = '<div class="coach-text">Take <span class="hl">' + Math.round(maintenanceDailyG) + 'g per day</span> of creatine monohydrate.<div class="coach-rule">No loading needed — stores saturate in 3-4 weeks.</div><div class="coach-advice">\u2248<em>' + maintenanceTsp.toFixed(1) + ' teaspoons</em>. Monthly supply: <em>' + Math.round(monthlyG) + 'g</em>.</div></div>';
            }
            coach.innerHTML = coachHTML;
        }

        var shareText = 'Creatine dose: ' + Math.round(maintenanceDailyG) + 'g/day maintenance\nMonthly: ' + Math.round(monthlyG) + 'g\n\nTry it: healthcalculators.xyz/creatine-dosage-calculator';
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
