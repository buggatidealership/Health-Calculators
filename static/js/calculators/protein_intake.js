// Protein Intake Calculator — factory-compatible
(function() {
    var GOALS = {
        'sedentary': { min: 0.8, max: 1.0, label: 'Sedentary / General Health' },
        'light': { min: 1.0, max: 1.2, label: 'Lightly Active' },
        'muscle': { min: 1.6, max: 2.2, label: 'Muscle Building' },
        'fat_loss': { min: 1.2, max: 1.6, label: 'Fat Loss / Cutting' },
        'endurance': { min: 1.2, max: 1.4, label: 'Endurance Athlete' },
        'elderly': { min: 1.0, max: 1.2, label: 'Older Adult (65+)' }
    };

    var selectedGoal = 'muscle';

    // Handle activity card selection if present
    var cards = document.querySelectorAll('[data-goal]');
    cards.forEach(function(card) {
        card.addEventListener('click', function() {
            cards.forEach(function(c) { c.classList.remove('active'); });
            this.classList.add('active');
            selectedGoal = this.dataset.goal;
        });
    });

    var btn = document.getElementById('calcBtn');
    if (btn) btn.addEventListener('click', calculate);

    function calculate() {
        var weightEl = document.getElementById('weightLb');
        var goalEl = document.getElementById('goal');
        if (!weightEl) {
            weightEl = document.getElementById('weight');
        }
        if (!weightEl) return;

        var weightLbs = parseFloat(weightEl.value);
        if (isNaN(weightLbs) || weightLbs <= 0) return;

        var goal = goalEl ? goalEl.value : selectedGoal;
        var range = GOALS[goal] || GOALS['muscle'];
        var weightKg = weightLbs * 0.453592;
        var minG = Math.round(range.min * weightKg);
        var maxG = Math.round(range.max * weightKg);
        var midG = Math.round((minG + maxG) / 2);

        var rn = document.getElementById('resultNumber');
        if (rn) rn.textContent = minG + '-' + maxG + 'g';

        var rv = document.getElementById('resultVerdict');
        if (rv) rv.textContent = 'daily protein for ' + range.label.toLowerCase();

        var el;
        el = document.getElementById('perKg');
        if (el) el.textContent = range.min.toFixed(1) + '-' + range.max.toFixed(1) + ' g/kg';
        el = document.getElementById('perLb');
        if (el) el.textContent = (range.min * 0.453592).toFixed(2) + '-' + (range.max * 0.453592).toFixed(2) + ' g/lb';
        el = document.getElementById('per3meals');
        if (el) el.textContent = Math.round(midG / 3) + 'g';
        el = document.getElementById('per4meals');
        if (el) el.textContent = Math.round(midG / 4) + 'g';

        // Coach
        var coach = document.getElementById('coachCard');
        if (coach) {
            coach.innerHTML = '<div class="coach-text">At <span class="hl">' + weightLbs + ' lbs</span> (' + weightKg.toFixed(0) + ' kg), you need <span class="hl">' + minG + '-' + maxG + 'g protein/day</span>.<br>That is <span class="hl">' + Math.round(midG / 3) + 'g per meal</span> across 3 meals.' +
                '<div class="coach-rule">' + range.min.toFixed(1) + '-' + range.max.toFixed(1) + ' g/kg body weight</div>' +
                '<div class="coach-advice"><em>Spread protein across 3-4 meals</em> for optimal muscle protein synthesis.<br>Each meal should contain at least <em>25-40g protein</em>.</div></div>';
        }

        var shareText = 'Daily protein: ' + minG + '-' + maxG + 'g (' + range.label + ')\n' + Math.round(midG / 3) + 'g per meal (3 meals)\n\nTry it: healthcalculators.xyz/protein-intake-calculator';
        if (typeof updateShareButtons === 'function') updateShareButtons(shareText);

        if (typeof factoryReveal === 'function') factoryReveal();

        if (typeof hcTrackEvent === 'function') hcTrackEvent('calculator_complete', { calculator_name: 'Protein Intake Calculator', page_path: '/protein-intake-calculator' });
    }
})();
