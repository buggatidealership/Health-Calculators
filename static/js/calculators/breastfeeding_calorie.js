// Breastfeeding Calorie Calculator — factory-compatible
(function() {

function init() {
    // Hide metric inputs initially
    var weightKg = document.getElementById('weightKg');
    var heightCm = document.getElementById('heightCm');
    if (weightKg) weightKg.closest('.form-row').style.display = 'none';
    if (heightCm) heightCm.closest('.form-row').style.display = 'none';

    // Unit toggle via factory radio_row
    var unitRow = document.querySelector('[data-group="units"]');
    if (unitRow) {
        unitRow.querySelectorAll('.unit-btn').forEach(function(btn) {
            btn.addEventListener('click', function() {
                unitRow.querySelectorAll('.unit-btn').forEach(function(b) { b.classList.remove('active'); });
                this.classList.add('active');
                var isImperial = this.dataset.value === 'imperial';
                var wLb = document.getElementById('weightLb');
                var hFt = document.getElementById('heightFt');
                var wKg = document.getElementById('weightKg');
                var hCm = document.getElementById('heightCm');
                if (wLb) wLb.closest('.form-row').style.display = isImperial ? '' : 'none';
                if (hFt) hFt.closest('.form-row').style.display = isImperial ? '' : 'none';
                if (wKg) wKg.closest('.form-row').style.display = isImperial ? 'none' : '';
                if (hCm) hCm.closest('.form-row').style.display = isImperial ? 'none' : '';
            });
        });
    }

    // Calculate button
    var calcBtn = document.getElementById('calcBtn');
    if (!calcBtn) return;

    calcBtn.addEventListener('click', function() {
        var age = parseFloat(document.getElementById('age')?.value);
        var activityLevel = parseFloat(document.getElementById('activityLevel')?.value);
        var monthsPostpartum = parseInt(document.getElementById('monthsPostpartum')?.value);
        var bfType = document.getElementById('bfType')?.value;
        var goal = document.getElementById('goal')?.value;

        // Validate age
        if (isNaN(age) || age < 15 || age > 65) return;

        // Determine unit system from radio_row
        var activeUnit = unitRow ? unitRow.querySelector('.unit-btn.active') : null;
        var isMetric = activeUnit && activeUnit.dataset.value === 'metric';

        // Get weight and height in metric
        var weightKgVal, heightCmVal;
        if (isMetric) {
            weightKgVal = parseFloat(document.getElementById('weightKg')?.value);
            heightCmVal = parseFloat(document.getElementById('heightCm')?.value);
            if (isNaN(weightKgVal) || weightKgVal < 30 || weightKgVal > 250) return;
            if (isNaN(heightCmVal) || heightCmVal < 100 || heightCmVal > 230) return;
        } else {
            var heightFt = parseFloat(document.getElementById('heightFt')?.value) || 0;
            var heightIn = parseFloat(document.getElementById('heightIn')?.value) || 0;
            var weightLbs = parseFloat(document.getElementById('weightLb')?.value);
            if (isNaN(weightLbs) || weightLbs < 66 || weightLbs > 550) return;
            if (heightFt < 3 || heightFt > 7) return;
            weightKgVal = weightLbs * 0.453592;
            heightCmVal = (heightFt * 12 + heightIn) * 2.54;
        }

        // Mifflin-St Jeor BMR for women
        var bmr = (10 * weightKgVal) + (6.25 * heightCmVal) - (5 * age) - 161;

        // TDEE = BMR x activity factor
        var tdee = bmr * activityLevel;

        // Lactation calorie addition
        var lactationAdd, lactationLabel;
        if (bfType === 'exclusive') {
            if (monthsPostpartum <= 6) {
                lactationAdd = 500;
                lactationLabel = 'Exclusive breastfeeding, months 1\u20136 (+500 kcal)';
            } else {
                lactationAdd = 400;
                lactationLabel = 'Exclusive breastfeeding, months 7\u201312 (+400 kcal)';
            }
        } else if (bfType === 'partial') {
            lactationAdd = 250;
            lactationLabel = 'Partial/combo breastfeeding (+250 kcal)';
        } else {
            if (monthsPostpartum <= 6) {
                lactationAdd = 500;
                lactationLabel = 'Exclusive pumping, months 1\u20136 (+500 kcal)';
            } else {
                lactationAdd = 400;
                lactationLabel = 'Exclusive pumping, months 7\u201312 (+400 kcal)';
            }
        }

        var totalCalories = Math.round(tdee + lactationAdd);

        // Goal adjustments
        var goalAdjustment = 0;
        var goalLabel = '';
        var recommendedCalories;
        var safeMinimum = 1500;

        if (goal === 'lose') {
            goalAdjustment = -500;
            goalLabel = 'Weight loss deficit (\u2212500 kcal/day)';
            recommendedCalories = Math.max(totalCalories + goalAdjustment, safeMinimum);
        } else if (goal === 'gain') {
            goalAdjustment = 300;
            goalLabel = 'Weight gain surplus (+300 kcal/day)';
            recommendedCalories = totalCalories + goalAdjustment;
        } else {
            goalAdjustment = 0;
            goalLabel = 'Maintain current weight';
            recommendedCalories = totalCalories;
        }

        var isCappedAtMinimum = (goal === 'lose' && totalCalories - 500 < safeMinimum);

        // Primary result
        var heroEl = document.getElementById('resultNumber');
        if (heroEl) {
            heroEl.textContent = recommendedCalories.toLocaleString();
            if (typeof animateCountUp === 'function') {
                animateCountUp(heroEl, 0, recommendedCalories, 0, '');
            }
        }

        // Verdict
        var verdictEl = document.getElementById('resultVerdict');
        if (verdictEl) {
            if (isCappedAtMinimum) {
                verdictEl.textContent = 'Adjusted to safe minimum (' + safeMinimum + ' kcal/day) for breastfeeding';
            } else if (goal === 'lose') {
                verdictEl.textContent = '500 kcal/day deficit \u2014 ~1 lb/week, safe after 6\u20138 weeks postpartum';
            } else {
                verdictEl.textContent = recommendedCalories.toLocaleString() + ' kcal/day supports your energy and milk production';
            }
        }

        // Breakdown cards
        var el;
        el = document.getElementById('bmrVal');
        if (el) el.textContent = Math.round(bmr).toLocaleString() + ' kcal';

        el = document.getElementById('tdeeVal');
        if (el) el.textContent = Math.round(tdee).toLocaleString() + ' kcal';

        el = document.getElementById('lactationVal');
        if (el) el.textContent = '+' + lactationAdd + ' kcal';

        el = document.getElementById('goalVal');
        if (el) el.textContent = goalAdjustment === 0 ? '\u2014' : (goalAdjustment > 0 ? '+' : '') + goalAdjustment + ' kcal';

        // Macros
        var proteinG = Math.round(weightKgVal * 1.3);
        var proteinCal = proteinG * 4;
        var fatCal = Math.round(recommendedCalories * 0.30);
        var fatG = Math.round(fatCal / 9);
        var carbCal = recommendedCalories - proteinCal - fatCal;
        var carbG = Math.round(carbCal / 4);

        el = document.getElementById('proteinVal');
        if (el) el.textContent = proteinG + 'g (' + proteinCal + ' kcal)';

        el = document.getElementById('fatVal');
        if (el) el.textContent = fatG + 'g (' + fatCal + ' kcal)';

        el = document.getElementById('carbsVal');
        if (el) el.textContent = carbG + 'g (' + carbCal + ' kcal)';

        // Key nutrients
        el = document.getElementById('calciumVal');
        if (el) el.textContent = '1,000 mg/day';

        el = document.getElementById('iodineVal');
        if (el) el.textContent = '290 mcg/day';

        el = document.getElementById('ironVal');
        if (el) el.textContent = '9 mg/day';

        el = document.getElementById('dhaVal');
        if (el) el.textContent = '200\u2013300 mg/day';

        el = document.getElementById('folateVal');
        if (el) el.textContent = '500 mcg DFE/day';

        el = document.getElementById('vitdVal');
        if (el) el.textContent = '600 IU/day';

        el = document.getElementById('waterVal');
        if (el) el.textContent = '~128 oz (3.8 L)';

        // Safe minimum note
        var minNote = document.getElementById('minimumNote');
        if (minNote) {
            minNote.style.display = isCappedAtMinimum ? '' : 'none';
        }

        // Reveal results via factory
        if (typeof factoryReveal === 'function') { factoryReveal(); }

        if (typeof celebratePulse === 'function') {
            var heroWrap = document.getElementById('resultNumber');
            if (heroWrap) celebratePulse(heroWrap);
        }

        if (typeof showNextSteps === 'function') {
            showNextSteps('breastfeeding-calorie', {});
        }
    });
}

init();
})();
