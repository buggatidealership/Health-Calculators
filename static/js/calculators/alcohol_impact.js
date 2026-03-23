// Alcohol Impact Calculator — factory-compatible
(function() {
    var btn = document.getElementById('calcBtn');
    if (btn) btn.addEventListener('click', calculate);

    function calculate() {
        var drinksEl = document.getElementById('drinks');
        var genderEl = document.getElementById('gender');
        var weightEl = document.getElementById('weight');
        var ageEl = document.getElementById('age');
        if (!drinksEl || !genderEl || !weightEl || !ageEl) return;

        var drinks = parseFloat(drinksEl.value);
        var gender = genderEl.value;
        var weight = parseFloat(weightEl.value);
        var age = parseFloat(ageEl.value);
        if (isNaN(drinks) || drinks < 0 || isNaN(weight) || weight < 30 || isNaN(age)) return;

        var GUIDELINES = gender === 'male' ? 14 : 7;
        var baseImpact = drinks * 0.4;
        var excessImpact = Math.max(drinks - GUIDELINES, 0) * 1.2;
        var totalImpact = (baseImpact + excessImpact) * (70 / weight);
        totalImpact *= gender === 'female' ? 1.4 : 1;
        var years = Math.floor(totalImpact / 12);
        var months = Math.round(totalImpact % 12);
        var resultText = years > 0 ? years + ' year' + (years > 1 ? 's' : '') + ' ' + months + ' month' + (months !== 1 ? 's' : '') : months + ' month' + (months !== 1 ? 's' : '');
        var alcoholCals = Math.round(drinks * 150);
        var riskLevel = totalImpact > 12 ? 'High' : totalImpact > 6 ? 'Moderate' : 'Low';

        var rn = document.getElementById('resultNumber');
        if (rn) rn.textContent = resultText;

        var rv = document.getElementById('resultVerdict');
        if (rv) rv.textContent = 'estimated lifespan impact at current drinking level';

        var el;
        el = document.getElementById('weeklyDrinks');
        if (el) el.textContent = drinks + ' drinks/week';
        el = document.getElementById('guideline');
        if (el) el.textContent = GUIDELINES + ' drinks/week (' + gender + ')';
        el = document.getElementById('overGuideline');
        if (el) { el.textContent = Math.max(0, drinks - GUIDELINES) + ' over'; el.style.color = drinks > GUIDELINES ? 'var(--bad)' : 'var(--good)'; }
        el = document.getElementById('alcoholCals');
        if (el) el.textContent = alcoholCals + ' kcal/week';

        // Coach
        var coach = document.getElementById('coachCard');
        if (coach) {
            coach.innerHTML = '<div class="coach-text">You drink <span class="hl">' + drinks + ' standard drinks</span> per week.<br>That is <span class="hl">' + alcoholCals + ' empty calories</span> weekly (<span class="hl">' + Math.round(alcoholCals * 52) + '/year</span>).' +
                (drinks > GUIDELINES ? '<br>You are <span class="hl">' + Math.round(drinks - GUIDELINES) + ' drinks over</span> the guideline.' : '') +
                '<div class="coach-rule">Risk level: ' + riskLevel + '</div>' +
                '<div class="coach-advice">' + (drinks <= GUIDELINES ? '<em>You are within guidelines.</em> Even so, recent research suggests any alcohol carries some risk.' : '<em>Reducing by ' + Math.round(drinks - GUIDELINES) + ' drinks/week</em> would bring you within guidelines.<br><em>Each drink avoided</em> saves ~150 calories and reduces liver burden.') + '</div></div>';
        }

        var shareText = 'Alcohol impact: ' + drinks + ' drinks/week\nRisk level: ' + riskLevel + '\n' + alcoholCals + ' cal/week from alcohol (' + Math.round(alcoholCals * 52) + '/year)\n\nTry it: healthcalculators.xyz/alcohol-impact-calculator';
        if (typeof updateShareButtons === 'function') updateShareButtons(shareText);

        if (typeof factoryReveal === 'function') factoryReveal();

        if (typeof hcTrackEvent === 'function') hcTrackEvent('calculator_complete', { calculator_name: 'Alcohol Impact Calculator', page_path: '/alcohol-impact-calculator' });
    }
})();
