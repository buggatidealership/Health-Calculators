// Keto Macro Calculator — calculation logic
(function() {
    var btn = document.getElementById('calcBtn');
    if (!btn) return;

    btn.addEventListener('click', function() {
        var genderEl = document.getElementById('gender');
        var ageEl = document.getElementById('age');
        var weightEl = document.getElementById('weight');
        var heightFtEl = document.getElementById('heightFt');
        var heightInEl = document.getElementById('heightIn');
        var activityEl = document.getElementById('activity');
        var goalEl = document.getElementById('goal');
        var ketoTypeEl = document.getElementById('ketoType');
        if (!genderEl || !ageEl || !weightEl || !heightFtEl || !activityEl || !goalEl || !ketoTypeEl) return;

        var gender = genderEl.value;
        var age = parseInt(ageEl.value);
        var weightLb = parseFloat(weightEl.value);
        var ft = parseFloat(heightFtEl.value) || 0;
        var inches = heightInEl ? (parseFloat(heightInEl.value) || 0) : 0;
        var actMult = parseFloat(activityEl.value);
        var goalMult = parseFloat(goalEl.value);
        var macros = ketoTypeEl.value.split(',').map(Number);
        var fatPct = macros[0];
        var protPct = macros[1];
        var carbPct = macros[2];

        if (!age || !weightLb || !ft) return;

        var weightKg = weightLb * 0.453592;
        var heightCm = (ft * 12 + inches) * 2.54;
        var bmr = gender === 'male'
            ? (10 * weightKg) + (6.25 * heightCm) - (5 * age) + 5
            : (10 * weightKg) + (6.25 * heightCm) - (5 * age) - 161;
        var tdee = bmr * actMult;
        var cal = Math.round(tdee * goalMult);
        var minCal = gender === 'female' ? 1200 : 1500;
        if (cal < minCal) cal = minCal;

        var fatG = Math.round((cal * fatPct / 100) / 9);
        var protG = Math.round((cal * protPct / 100) / 4);
        var carbG = Math.round((cal * carbPct / 100) / 4);

        var resultNumber = document.getElementById('resultNumber');
        var resultVerdict = document.getElementById('resultVerdict');
        var bmrDisplay = document.getElementById('bmrDisplay');
        var tdeeDisplay = document.getElementById('tdeeDisplay');
        var macroCards = document.getElementById('macroCards');
        var coachCard = document.getElementById('coachCard');

        if (resultNumber) resultNumber.textContent = cal.toLocaleString();
        if (resultVerdict) resultVerdict.textContent = 'calories per day on keto';
        if (bmrDisplay) bmrDisplay.textContent = Math.round(bmr) + ' kcal';
        if (tdeeDisplay) tdeeDisplay.textContent = Math.round(tdee) + ' kcal';

        if (macroCards) {
            macroCards.innerHTML =
                '<div style="background:rgba(245,158,11,0.08);border:1px solid rgba(245,158,11,0.2);border-radius:14px;padding:1rem;text-align:center;">' +
                '<div style="font-size:0.75rem;color:var(--text-muted);">Fat (' + fatPct + '%)</div>' +
                '<div style="font-size:1.5rem;font-weight:700;color:#f59e0b;">' + fatG + 'g</div></div>' +
                '<div style="background:rgba(34,197,94,0.08);border:1px solid rgba(34,197,94,0.2);border-radius:14px;padding:1rem;text-align:center;">' +
                '<div style="font-size:0.75rem;color:var(--text-muted);">Protein (' + protPct + '%)</div>' +
                '<div style="font-size:1.5rem;font-weight:700;color:#22c55e;">' + protG + 'g</div></div>' +
                '<div style="background:rgba(59,130,246,0.08);border:1px solid rgba(59,130,246,0.2);border-radius:14px;padding:1rem;text-align:center;">' +
                '<div style="font-size:0.75rem;color:var(--text-muted);">Carbs (' + carbPct + '%)</div>' +
                '<div style="font-size:1.5rem;font-weight:700;color:#3b82f6;">' + carbG + 'g</div></div>';
        }

        if (coachCard) {
            coachCard.innerHTML = '<div class="coach-text">Your keto target: <span class="hl">' + cal +
                ' calories</span>.<div class="coach-rule">' + carbG +
                'g net carbs is your ceiling.</div><div class="coach-advice"><em>' + fatG +
                'g fat</em> is your fuel. <em>' + protG +
                'g protein</em> is your target. Fat is the lever for hunger; protein and carbs are fixed targets.</div></div>';
        }

        var shareText = 'My keto macros:\nFat: ' + fatG + 'g | Protein: ' + protG + 'g | Carbs: ' + carbG +
            'g\n' + cal + ' cal/day\n\nCalculate yours: healthcalculators.xyz/keto-calculator';
        updateShareButtons(shareText);

        if (typeof factoryReveal === 'function') {
            factoryReveal();
        } else {
            document.querySelectorAll('.hidden-section').forEach(function(el) { el.classList.remove('hidden-section'); });
        }
        var resultSection = document.getElementById('result-section');
        if (resultSection) resultSection.scrollIntoView({ behavior: 'smooth' });
    });
})();
