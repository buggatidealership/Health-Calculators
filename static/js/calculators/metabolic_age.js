// Metabolic Age Calculator — factory-compatible
(function() {
    var refBMR = {
        male:   { 20:1800, 25:1780, 30:1750, 35:1720, 40:1680, 45:1650, 50:1620, 55:1580, 60:1550, 65:1510, 70:1470 },
        female: { 20:1450, 25:1430, 30:1410, 35:1385, 40:1360, 45:1335, 50:1310, 55:1280, 60:1255, 65:1225, 70:1200 }
    };

    function interpolateMetabolicAge(bmr, sex) {
        var table = refBMR[sex];
        var ages = Object.keys(table).map(Number).sort(function(a,b){ return a-b; });
        if (bmr >= table[ages[0]]) {
            var slope = (table[ages[1]] - table[ages[0]]) / (ages[1] - ages[0]);
            return Math.max(15, Math.round((ages[0] + (table[ages[0]] - bmr) / (-slope)) * 10) / 10);
        }
        if (bmr <= table[ages[ages.length-1]]) {
            var li = ages.length-1;
            var s2 = (table[ages[li]] - table[ages[li-1]]) / (ages[li] - ages[li-1]);
            return Math.min(90, Math.round((ages[li] + (bmr - table[ages[li]]) / s2) * 10) / 10);
        }
        for (var i = 0; i < ages.length-1; i++) {
            if (bmr <= table[ages[i]] && bmr >= table[ages[i+1]]) {
                var f = (table[ages[i]] - bmr) / (table[ages[i]] - table[ages[i+1]]);
                return Math.round((ages[i] + f * (ages[i+1] - ages[i])) * 10) / 10;
            }
        }
        return 50;
    }

    function getExpectedBMR(age, sex) {
        var table = refBMR[sex];
        var ages = Object.keys(table).map(Number).sort(function(a,b){return a-b;});
        if (age <= ages[0]) return table[ages[0]];
        if (age >= ages[ages.length-1]) return table[ages[ages.length-1]];
        for (var i = 0; i < ages.length-1; i++) {
            if (age >= ages[i] && age <= ages[i+1]) {
                var f = (age - ages[i]) / (ages[i+1] - ages[i]);
                return Math.round(table[ages[i]] + f * (table[ages[i+1]] - table[ages[i]]));
            }
        }
        return table[ages[0]];
    }

    var btn = document.getElementById('calcBtn');
    if (btn) btn.addEventListener('click', calculate);

    function calculate() {
        var ageEl = document.getElementById('age');
        var sexEl = document.getElementById('sex');
        var weightEl = document.getElementById('weight');
        var wuEl = document.getElementById('weightUnit');
        var ftEl = document.getElementById('feet');
        var inEl = document.getElementById('inches');
        var bfEl = document.getElementById('bodyfat');
        if (!ageEl || !sexEl || !weightEl) return;

        var age = parseInt(ageEl.value);
        var sex = sexEl.value;
        var w = parseFloat(weightEl.value);
        if (isNaN(age) || age < 18 || age > 80 || isNaN(w)) return;

        var wu = wuEl ? wuEl.value : 'lbs';
        var weightKg = wu === 'lbs' ? w * 0.453592 : w;
        var ft = parseInt(ftEl ? ftEl.value : '5') || 5;
        var inc = parseInt(inEl ? inEl.value : '0') || 0;
        var heightCm = (ft * 12 + inc) * 2.54;

        var bmr, formulaUsed;
        var bfInput = bfEl ? bfEl.value : '';
        if (bfInput && !isNaN(parseFloat(bfInput))) {
            var bf = parseFloat(bfInput);
            var leanMass = weightKg * (1 - bf / 100);
            bmr = 370 + 21.6 * leanMass;
            formulaUsed = 'Katch-McArdle';
        } else {
            bmr = sex === 'male' ? 10 * weightKg + 6.25 * heightCm - 5 * age + 5 : 10 * weightKg + 6.25 * heightCm - 5 * age - 161;
            formulaUsed = 'Mifflin-St Jeor';
        }
        bmr = Math.round(bmr);

        var metAge = Math.round(interpolateMetabolicAge(bmr, sex));
        var expectedBmr = getExpectedBMR(age, sex);
        var diff = age - metAge;

        var rn = document.getElementById('resultNumber');
        if (rn) rn.textContent = metAge;

        var rv = document.getElementById('resultVerdict');
        if (rv) {
            if (diff > 0) { rv.textContent = 'Your metabolism is ' + diff + ' years younger'; rv.style.color = 'var(--good)'; }
            else if (diff < 0) { rv.textContent = 'Your metabolism is ' + Math.abs(diff) + ' years older'; rv.style.color = 'var(--bad)'; }
            else { rv.textContent = 'Your metabolic age matches your actual age'; rv.style.color = 'var(--accent)'; }
        }

        var el;
        el = document.getElementById('bmrVal');
        if (el) el.textContent = bmr.toLocaleString() + ' kcal/day';
        el = document.getElementById('expectedBmr');
        if (el) el.textContent = expectedBmr.toLocaleString() + ' kcal/day';
        el = document.getElementById('ageDiff');
        if (el) {
            if (diff > 0) { el.textContent = diff + ' years younger'; el.style.color = 'var(--good)'; }
            else if (diff < 0) { el.textContent = Math.abs(diff) + ' years older'; el.style.color = 'var(--bad)'; }
            else { el.textContent = 'Matches your age'; }
        }

        // Coach
        var coach = document.getElementById('coachCard');
        if (coach) {
            coach.innerHTML = '<div class="coach-text">You are <span class="hl">' + age + ' years old</span>.<br>Your metabolism runs like someone who is <span class="hl">' + metAge + '</span>.<br>BMR: <span class="hl">' + bmr.toLocaleString() + ' kcal/day</span> vs expected <span class="hl">' + expectedBmr.toLocaleString() + '</span>. (' + formulaUsed + ')' +
                '<div class="coach-rule">' + (diff > 0 ? diff + ' years younger' : diff < 0 ? Math.abs(diff) + ' years older' : 'Right on track') + '</div>' +
                '<div class="coach-advice">' + (diff < 0 ? '<em>Build lean muscle</em> through resistance training 2-4x/week.<br><em>Eat 0.7-1g protein per pound</em> of body weight.<br><em>Sleep 7-9 hours</em> per night.' : '<em>Keep doing what you are doing.</em><br>Your metabolism is performing well for your age.') + '</div></div>';
        }

        var shareText = 'My metabolic age: ' + metAge + ' (actual age: ' + age + ')\nBMR: ' + bmr + ' kcal/day\n' + (diff > 0 ? diff + ' years younger!' : diff < 0 ? Math.abs(diff) + ' years older' : 'Right on track') + '\n\nTry it: healthcalculators.xyz/metabolic-age-calculator';
        if (typeof updateShareButtons === 'function') updateShareButtons(shareText);

        if (typeof factoryReveal === 'function') factoryReveal();

        if (typeof hcTrackEvent === 'function') hcTrackEvent('calculator_complete', { calculator_name: 'Metabolic Age Calculator', page_path: '/metabolic-age-calculator' });
    }
})();
