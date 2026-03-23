// Carb Cycling Calculator — factory-compatible
(function() {
var unitSystem = 'metric';

// Show/hide training days based on cycle type
var cycleTypeEl = document.getElementById('cycle-type');
if (cycleTypeEl) {
    cycleTypeEl.addEventListener('change', function() {
        var container = document.getElementById('training-days-container');
        if (container) container.style.display = this.value === 'training' ? 'block' : 'none';
    });
}

window.ccSetUnit = function(unit) {
    unitSystem = unit;
    var metricBtn = document.getElementById('metric-btn');
    var imperialBtn = document.getElementById('imperial-btn');
    if (metricBtn) metricBtn.classList.toggle('active', unit === 'metric');
    if (imperialBtn) imperialBtn.classList.toggle('active', unit === 'imperial');
    document.querySelectorAll('.metric-field').forEach(function(f) { f.style.display = unit === 'metric' ? 'block' : 'none'; });
    document.querySelectorAll('.imperial-field').forEach(function(f) { f.style.display = unit === 'imperial' ? 'block' : 'none'; });
};

window.ccCalculate = function() {
    var gender = document.getElementById('gender').value;
    var age = parseInt(document.getElementById('age').value);
    var activityLevel = document.getElementById('activity-level').value;
    var goal = document.getElementById('goal').value;
    var cycleType = document.getElementById('cycle-type').value;

    var weightKg;
    if (unitSystem === 'metric') {
        weightKg = parseFloat(document.getElementById('weight-kg').value);
    } else {
        weightKg = parseFloat(document.getElementById('weight-lb').value) / 2.20462;
    }

    var heightCm;
    if (unitSystem === 'metric') {
        heightCm = parseFloat(document.getElementById('height-cm').value);
    } else {
        heightCm = (parseInt(document.getElementById('height-ft').value) * 30.48) + (parseInt(document.getElementById('height-in').value) * 2.54);
    }

    // Mifflin-St Jeor
    var bmr = gender === 'male'
        ? (10 * weightKg) + (6.25 * heightCm) - (5 * age) + 5
        : (10 * weightKg) + (6.25 * heightCm) - (5 * age) - 161;

    var actMult = { sedentary: 1.2, light: 1.375, moderate: 1.55, active: 1.725, 'very-active': 1.9 };
    var tdee = bmr * (actMult[activityLevel] || 1.55);

    var goalMult = { lose: 0.85, maintain: 1.0, gain: 1.1 };
    var adjustedTDEE = Math.round((tdee * (goalMult[goal] || 1.0)) / 50) * 50;

    var protMult = { sedentary: 1.2, light: 1.2, moderate: 1.5, active: 1.8, 'very-active': 1.8 };
    var pm = protMult[activityLevel] || 1.5;
    if (goal === 'gain') pm += 0.2;
    var proteinGrams = Math.round(weightKg * pm);
    var proteinCalories = proteinGrams * 4;
    var remaining = adjustedTDEE - proteinCalories;

    function macros(carbPct) {
        var carbCal = Math.round(remaining * carbPct);
        var fatCal = Math.round(remaining * (1 - carbPct));
        return {
            totalCalories: Math.round(proteinCalories + carbCal + fatCal),
            carbGrams: Math.round(carbCal / 4), carbCal: carbCal,
            fatGrams: Math.round(fatCal / 9), fatCal: fatCal
        };
    }

    var high = macros(0.6), mod = macros(0.4), low = macros(0.2), veryLow = macros(0.05);
    var training = macros(0.5), rest = macros(0.15);

    // Show results
    var resultsEl = document.getElementById('cc-results');
    if (resultsEl) resultsEl.style.display = 'block';

    var el;
    el = document.getElementById('daily-calories'); if (el) el.textContent = adjustedTDEE;
    el = document.getElementById('protein-grams'); if (el) el.textContent = 'Protein: ' + proteinGrams + 'g (' + proteinCalories + ' cal)';

    // Hide all
    ['three-day-results', 'weekly-results', 'training-results', 'weekly-schedule-container'].forEach(function(id) {
        var e = document.getElementById(id); if (e) e.style.display = 'none';
    });

    function setDay(prefix, d) {
        el = document.getElementById(prefix + '-calories'); if (el) el.textContent = d.totalCalories;
        el = document.getElementById(prefix + '-carbs'); if (el) el.textContent = d.carbGrams + 'g (' + d.carbCal + ' cal)';
        el = document.getElementById(prefix + '-protein'); if (el) el.textContent = proteinGrams + 'g (' + proteinCalories + ' cal)';
        el = document.getElementById(prefix + '-fat'); if (el) el.textContent = d.fatGrams + 'g (' + d.fatCal + ' cal)';
    }

    var scheduleEl = document.getElementById('weekly-schedule');

    if (cycleType === 'three-day' || cycleType === 'weekly') {
        var tdEl = document.getElementById('three-day-results'); if (tdEl) tdEl.style.display = 'grid';
        setDay('high', high); setDay('moderate', mod); setDay('low', low);

        if (cycleType === 'weekly') {
            var wEl = document.getElementById('weekly-results'); if (wEl) wEl.style.display = 'grid';
            setDay('very-low', veryLow);
            var sc = document.getElementById('weekly-schedule-container'); if (sc) sc.style.display = 'block';
            if (scheduleEl) scheduleEl.innerHTML =
                '<div class="schedule-day"><span class="day">Monday:</span> High Carb</div>' +
                '<div class="schedule-day"><span class="day">Tuesday:</span> Moderate Carb</div>' +
                '<div class="schedule-day"><span class="day">Wednesday:</span> Low Carb</div>' +
                '<div class="schedule-day"><span class="day">Thursday:</span> Moderate Carb</div>' +
                '<div class="schedule-day"><span class="day">Friday:</span> High Carb</div>' +
                '<div class="schedule-day"><span class="day">Saturday:</span> Very Low Carb</div>' +
                '<div class="schedule-day"><span class="day">Sunday:</span> Low Carb</div>';
        } else {
            var sc2 = document.getElementById('weekly-schedule-container'); if (sc2) sc2.style.display = 'block';
            if (scheduleEl) scheduleEl.innerHTML =
                '<div class="schedule-day"><span class="day">Day 1:</span> High Carb</div>' +
                '<div class="schedule-day"><span class="day">Day 2:</span> Moderate Carb</div>' +
                '<div class="schedule-day"><span class="day">Day 3:</span> Low Carb</div>' +
                '<div class="schedule-day"><span class="day">Day 4:</span> High Carb</div>' +
                '<div class="schedule-day"><span class="day">Day 5:</span> Moderate Carb</div>' +
                '<div class="schedule-day"><span class="day">Day 6:</span> Low Carb</div>' +
                '<div class="schedule-day"><span class="day">Day 7:</span> High Carb</div>';
        }
    } else if (cycleType === 'training') {
        var trEl = document.getElementById('training-results'); if (trEl) trEl.style.display = 'grid';
        setDay('training', training); setDay('rest', rest);
        var sc3 = document.getElementById('weekly-schedule-container'); if (sc3) sc3.style.display = 'block';
        var days = ['mon','tue','wed','thu','fri','sat','sun'];
        var dayNames = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
        var html = '';
        days.forEach(function(d, i) {
            var cb = document.getElementById('train-' + d);
            var isTraining = cb ? cb.checked : false;
            html += '<div class="schedule-day"><span class="day">' + dayNames[i] + ':</span> ' + (isTraining ? 'Training Day' : 'Rest Day') + '</div>';
        });
        if (scheduleEl) scheduleEl.innerHTML = html;
    }

    // Coach card
    var coachCard = document.getElementById('coachCard');
    if (coachCard) {
        coachCard.innerHTML = '<div class="coach-text">' +
            'Your daily target is <span class="hl">' + adjustedTDEE + ' calories</span> with <span class="hl">' + proteinGrams + 'g protein</span> held constant.' +
            '<div class="coach-rule">High carb days: ' + high.carbGrams + 'g carbs | Low carb days: ' + low.carbGrams + 'g carbs</div>' +
            '<div class="coach-advice">' +
                '<em>Tip:</em> Schedule high-carb days on your hardest training sessions for optimal glycogen.<br>' +
                (goal === 'lose' ? '<em>Deficit:</em> Your calories are set 15% below maintenance for steady fat loss.' : '') +
            '</div></div>';
    }

    if (typeof factoryReveal === 'function') factoryReveal();
};
})();
