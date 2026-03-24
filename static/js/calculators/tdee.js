// TDEE Calculator — factory-compatible
(function() {
    var currentUnit = 'imperial';
    var currentSex = 'male';
    var currentActivity = 1.55;
    var calculated = false;

    // Unit toggle
    var imperialBtn = document.getElementById('imperial-btn');
    var metricBtn = document.getElementById('metric-btn');

    function toggleUnit(unit) {
        currentUnit = unit;
        if (imperialBtn) imperialBtn.classList.toggle('active', unit === 'imperial');
        if (metricBtn) metricBtn.classList.toggle('active', unit === 'metric');
        var imperialFields = document.querySelectorAll('.tdee-imperial-field');
        var metricFields = document.querySelectorAll('.tdee-metric-field');
        imperialFields.forEach(function(el) { el.classList.toggle('tdee-hidden', unit === 'metric'); });
        metricFields.forEach(function(el) { el.classList.toggle('tdee-hidden', unit === 'imperial'); });
        autoRecalc();
    }

    if (imperialBtn) imperialBtn.addEventListener('click', function() { toggleUnit('imperial'); });
    if (metricBtn) metricBtn.addEventListener('click', function() { toggleUnit('metric'); });

    // Sex toggle
    var sexBtns = document.querySelectorAll('.tdee-sex-btn');
    sexBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            currentSex = btn.getAttribute('data-value');
            sexBtns.forEach(function(b) {
                b.classList.toggle('active', b.getAttribute('data-value') === currentSex);
            });
            autoRecalc();
        });
    });

    // Activity cards
    var activityCards = document.querySelectorAll('.tdee-activity-card');
    activityCards.forEach(function(card) {
        card.addEventListener('click', function() {
            activityCards.forEach(function(c) { c.classList.remove('active'); });
            card.classList.add('active');
            currentActivity = parseFloat(card.getAttribute('data-value'));
            autoRecalc();
        });
    });

    // Auto-recalc
    function autoRecalc() {
        if (calculated) calculate(true);
    }

    // Input listeners for auto-recalc
    var inputIds = ['age', 'weight_kg', 'height_cm', 'weight_lb', 'height_ft', 'height_in'];
    inputIds.forEach(function(id) {
        var el = document.getElementById(id);
        if (el) el.addEventListener('input', autoRecalc);
    });

    function calculate(silent) {
        var ageEl = document.getElementById('age');
        var age = ageEl ? parseInt(ageEl.value) : NaN;
        var weight, height;

        if (currentUnit === 'metric') {
            var wkgEl = document.getElementById('weight_kg');
            var hcmEl = document.getElementById('height_cm');
            weight = wkgEl ? parseFloat(wkgEl.value) : NaN;
            height = hcmEl ? parseFloat(hcmEl.value) : NaN;
        } else {
            var wlbEl = document.getElementById('weight_lb');
            var hftEl = document.getElementById('height_ft');
            var hinEl = document.getElementById('height_in');
            var lbs = wlbEl ? parseFloat(wlbEl.value) : NaN;
            weight = lbs * 0.453592;
            var feet = hftEl ? parseFloat(hftEl.value) : NaN;
            var inches = hinEl ? parseFloat(hinEl.value) || 0 : 0;
            height = (feet * 12 + inches) * 2.54;
        }

        if (!age || !weight || !height || isNaN(weight) || isNaN(height)) {
            if (!silent) {
                var btn = document.getElementById('calcBtn');
                if (btn) {
                    btn.style.background = 'rgba(239,68,68,0.3)';
                    setTimeout(function() { btn.style.background = ''; }, 600);
                }
            }
            return;
        }
        if (age < 15 || age > 100) {
            return;
        }

        calculated = true;

        // Mifflin-St Jeor
        var bmr;
        if (currentSex === 'male') {
            bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
        } else {
            bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161;
        }

        var tdee = Math.round(bmr * currentActivity);
        var bmrRounded = Math.round(bmr);

        // Calorie targets
        var minCalories = currentSex === 'female' ? 1200 : 1500;
        var loss = Math.max(tdee - 500, minCalories);
        var gain = tdee + 300;

        // Macros (30/40/30 at maintenance)
        var proteinG = Math.round((tdee * 0.30) / 4);
        var carbsG = Math.round((tdee * 0.40) / 4);
        var fatG = Math.round((tdee * 0.30) / 9);

        // BMR percentage of TDEE
        var bmrPct = Math.round((bmr / tdee) * 100);

        // Populate results (null-safe)
        var resultNum = document.getElementById('resultNumber');
        if (resultNum) resultNum.textContent = tdee.toLocaleString();

        var bmrNum = document.getElementById('bmrNumber');
        if (bmrNum) bmrNum.textContent = bmrRounded.toLocaleString();

        var bmrPctEl = document.getElementById('bmrPct');
        if (bmrPctEl) bmrPctEl.textContent = bmrPct;

        var goalLossEl = document.getElementById('goalLoss');
        if (goalLossEl) goalLossEl.textContent = loss.toLocaleString();

        var goalMaintainEl = document.getElementById('goalMaintain');
        if (goalMaintainEl) goalMaintainEl.textContent = tdee.toLocaleString();

        var goalGainEl = document.getElementById('goalGain');
        if (goalGainEl) goalGainEl.textContent = gain.toLocaleString();

        var macroProteinEl = document.getElementById('macroProtein');
        if (macroProteinEl) macroProteinEl.textContent = proteinG + 'g';

        var macroCarbsEl = document.getElementById('macroCarbs');
        if (macroCarbsEl) macroCarbsEl.textContent = carbsG + 'g';

        var macroFatEl = document.getElementById('macroFat');
        if (macroFatEl) macroFatEl.textContent = fatG + 'g';

        // Verdict
        var verdictEl = document.getElementById('resultVerdict');
        if (verdictEl) verdictEl.textContent = 'Your Total Daily Energy Expenditure';

        // Activity labels
        var activityLabels = {
            '1.2': 'sedentary',
            '1.375': 'lightly active',
            '1.55': 'moderately active',
            '1.725': 'very active',
            '1.9': 'extra active'
        };
        var actLabel = activityLabels[String(currentActivity)] || '';

        // Coach card
        var coachCard = document.getElementById('coachCard');
        if (coachCard) {
            coachCard.innerHTML =
                '<div class="coach-text">' +
                    'Your body burns <span class="hl">' + bmrRounded.toLocaleString() + ' calories</span> just to stay alive &mdash; breathing, pumping blood, keeping you warm.' +
                    '<br>That\'s your rent.' +
                    '<div class="coach-rule">TDEE is rent + utilities.</div>' +
                    'Add in your <span class="hl">' + actLabel + '</span> lifestyle, and the total bill is <span class="hl">' + tdee.toLocaleString() + ' calories/day</span>.' +
                    '<div class="coach-advice">' +
                        'To lose weight: eat <em>' + loss.toLocaleString() + ' calories</em> &mdash; that\'s a 500 cal deficit, roughly <em>1 lb/week</em>.<br>' +
                        'To gain muscle: eat <em>' + gain.toLocaleString() + ' calories</em> &mdash; a lean surplus that minimizes fat gain.<br><br>' +
                        '<span class="dim" style="color:var(--text-dim,#94a3b8);">This is your starting point, not gospel. Track your weight for 2 weeks. If it\'s not moving, adjust by 200 calories.</span>' +
                    '</div>' +
                '</div>';
        }

        // Share text
        var shareText = 'Your body burns ' + bmrRounded.toLocaleString() + ' calories just existing.\n\n' +
            'BMR (rent): ' + bmrRounded.toLocaleString() + '\n' +
            'TDEE (total bill): ' + tdee.toLocaleString() + '\n\n' +
            'Weight loss: ' + loss.toLocaleString() + ' cal/day\n' +
            'Lean bulk: ' + gain.toLocaleString() + ' cal/day\n\n' +
            'Try it: healthcalculators.xyz/tdee-calculator';

        if (typeof updateShareButtons === 'function') updateShareButtons(shareText);

        // Hide static example
        var staticEx = document.getElementById('staticExample');
        if (staticEx) staticEx.style.display = 'none';

        // Hide seo-example too
        var seoEx = document.getElementById('seo-example');
        if (seoEx) seoEx.style.display = 'none';

        // Factory reveal
        if (typeof factoryReveal === 'function') factoryReveal();

        // Track calculator completion
        if (typeof hcTrackEvent === 'function') {
            hcTrackEvent('calculator_complete', {
                calculator_name: 'TDEE Calculator',
                page_path: '/tdee-calculator'
            });
        }
    }

    // Calculate button
    var calcBtn = document.getElementById('calcBtn');
    if (calcBtn) calcBtn.addEventListener('click', function() { calculate(false); });
})();
