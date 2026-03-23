// Fasting Weight Loss Calculator — calculation logic
(function() {
    var FASTING_TYPES = [
        { emoji: '\u2600\ufe0f', name: 'Skip breakfast', detail: '16:8 fasting', hours: 16 },
        { emoji: '\ud83c\udf1f', name: 'Late lunch only', detail: '20:4 fasting', hours: 20 },
        { emoji: '\ud83c\udf7d\ufe0f', name: 'One meal a day', detail: 'OMAD', hours: 23 },
        { emoji: '\ud83d\udcc5', name: 'Full day fast', detail: '24 hours', hours: 24 },
        { emoji: '\ud83d\udcc6', name: 'Two-day fast', detail: '48 hours', hours: 48 },
        { emoji: '\u26a1', name: 'Extended fast', detail: '72+ hours', hours: 72 }
    ];

    var selectedFasting = null;
    var selectedSex = 'male';

    document.addEventListener('DOMContentLoaded', function() {
        // Build fasting grid before the factory form
        var factoryForm = document.querySelector('.factory-form');
        if (factoryForm) {
            var gridWrap = document.createElement('div');
            gridWrap.id = 'fastingGrid';
            gridWrap.className = 'fasting-grid fade-in';
            gridWrap.style.cssText = 'display:grid;grid-template-columns:repeat(3,1fr);gap:0.6rem;max-width:520px;width:100%;margin-bottom:2rem;';
            factoryForm.parentNode.insertBefore(gridWrap, factoryForm);
            buildFastingGrid();

            // Hide metric inputs initially
            var weightKg = document.getElementById('weightKg');
            var heightCm = document.getElementById('heightCm');
            if (weightKg) weightKg.closest('.form-row').style.display = 'none';
            if (heightCm) heightCm.closest('.form-row').style.display = 'none';
        }

        // Unit toggle via factory radio_row
        var unitRow = document.querySelector('[data-group="units"]');
        if (unitRow) {
            unitRow.querySelectorAll('.unit-btn').forEach(function(btn) {
                btn.addEventListener('click', function() {
                    unitRow.querySelectorAll('.unit-btn').forEach(function(b) { b.classList.remove('active'); });
                    this.classList.add('active');
                    var isImperial = this.dataset.value === 'imperial';
                    var weightLb = document.getElementById('weightLb');
                    var heightFt = document.getElementById('heightFt');
                    var weightKg = document.getElementById('weightKg');
                    var heightCm = document.getElementById('heightCm');
                    if (weightLb) weightLb.closest('.form-row').style.display = isImperial ? '' : 'none';
                    if (heightFt) heightFt.closest('.form-row').style.display = isImperial ? '' : 'none';
                    if (weightKg) weightKg.closest('.form-row').style.display = isImperial ? 'none' : '';
                    if (heightCm) heightCm.closest('.form-row').style.display = isImperial ? 'none' : '';
                });
            });
        }

        // Sex toggle via factory radio_row
        var sexRow = document.querySelector('[data-group="sex"]');
        if (sexRow) {
            sexRow.querySelectorAll('.unit-btn').forEach(function(btn) {
                btn.addEventListener('click', function() {
                    sexRow.querySelectorAll('.unit-btn').forEach(function(b) { b.classList.remove('active'); });
                    this.classList.add('active');
                    selectedSex = this.dataset.value;
                });
            });
        }

        // Calculate
        document.getElementById('calcBtn').addEventListener('click', calculate);
    });

    function buildFastingGrid() {
        var grid = document.getElementById('fastingGrid');
        if (!grid) return;
        FASTING_TYPES.forEach(function(f) {
            var card = document.createElement('div');
            card.className = 'fasting-card';
            card.style.cssText = 'background:rgba(20,184,166,0.05);border:1px solid rgba(20,184,166,0.1);border-radius:14px;padding:1rem 0.6rem;text-align:center;cursor:pointer;transition:all 0.2s;';
            card.innerHTML = '<span style="font-size:1.5rem;display:block;margin-bottom:0.3rem;">' + f.emoji + '</span><span style="font-size:0.78rem;font-weight:600;display:block;">' + f.name + '</span><span style="font-size:0.65rem;color:var(--text-dim);margin-top:2px;display:block;">' + f.detail + '</span>';
            card.onclick = function() {
                document.querySelectorAll('.fasting-card').forEach(function(c) { c.classList.remove('selected'); c.style.borderColor = 'rgba(20,184,166,0.1)'; c.style.background = 'rgba(20,184,166,0.05)'; });
                card.classList.add('selected');
                card.style.borderColor = 'var(--accent)';
                card.style.background = 'rgba(20,184,166,0.12)';
                selectedFasting = f;
                var form = document.querySelector('.factory-form');
                if (form) {
                    setTimeout(function() { form.scrollIntoView({ behavior: 'smooth' }); }, 350);
                }
            };
            grid.appendChild(card);
        });
    }

    function getSelectedUnit() {
        var unitRow = document.querySelector('[data-group="units"]');
        if (!unitRow) return 'imperial';
        var active = unitRow.querySelector('.unit-btn.active');
        return active ? active.dataset.value : 'imperial';
    }

    function calculate() {
        if (!selectedFasting) {
            document.getElementById('hero-section').scrollIntoView({ behavior: 'smooth' });
            return;
        }

        var isImperial = getSelectedUnit() === 'imperial';
        var weight, height;

        if (isImperial) {
            weight = parseFloat(document.getElementById('weightLb').value) * 0.453592;
            var ft = parseFloat(document.getElementById('heightFt').value) || 0;
            var inches = parseFloat(document.getElementById('heightIn').value) || 0;
            height = (ft * 12 + inches) * 2.54;
        } else {
            weight = parseFloat(document.getElementById('weightKg').value);
            height = parseFloat(document.getElementById('heightCm').value);
        }

        var age = parseInt(document.getElementById('age').value);
        var activity = parseFloat(document.getElementById('activity').value);
        var fastingHours = selectedFasting.hours;

        if (isNaN(weight) || isNaN(height) || isNaN(age) || weight <= 0 || height <= 0 || age <= 0) return;

        // BMR (Mifflin-St Jeor)
        var bmr;
        if (selectedSex === 'male') {
            bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
        } else {
            bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161;
        }

        var tdee = bmr * activity;

        // Calculate daily caloric deficit
        var dailyDeficit;
        if (fastingHours <= 24) {
            var eatingHours = 24 - fastingHours;
            var hourlyCalories = tdee / 24;
            var intake = hourlyCalories * eatingHours * 0.7;
            dailyDeficit = tdee - intake;
        } else {
            dailyDeficit = tdee;
        }

        // 8-week projection
        var weeks = 8;
        var weeklyFatLossKg = [];
        var cumulativeFatLossKg = 0;
        var currentWeight = weight;

        for (var w = 0; w < weeks; w++) {
            var weekDeficit;
            if (fastingHours <= 24) {
                weekDeficit = dailyDeficit * 7;
            } else {
                var daysPerFast = fastingHours / 24;
                weekDeficit = tdee * daysPerFast;
            }
            var adaptationFactor = Math.pow(0.9875, w);
            weekDeficit *= adaptationFactor;
            var weekFatKg = weekDeficit / 7700;
            cumulativeFatLossKg += weekFatKg;
            weeklyFatLossKg.push(cumulativeFatLossKg);
            currentWeight -= weekFatKg;
        }

        // Water weight
        var waterKg;
        if (fastingHours <= 24) { waterKg = 0.5 * (fastingHours / 24); }
        else if (fastingHours <= 72) { waterKg = 0.5 + (0.3 * ((fastingHours - 24) / 48)); }
        else { waterKg = 0.8; }

        var fourWeekFatKg = weeklyFatLossKg[3];
        var fourWeekTotalKg = fourWeekFatKg + waterKg;

        // Display results
        var unit = isImperial ? 'lbs' : 'kg';
        var toDisplay = isImperial ? function(v) { return (v / 0.453592).toFixed(1); } : function(v) { return v.toFixed(1); };

        document.getElementById('resultNumber').textContent = toDisplay(fourWeekTotalKg);

        // Update the result unit text
        var resultUnitEl = document.querySelector('.factory-result .result-unit');
        if (resultUnitEl) resultUnitEl.textContent = unit + ' total weight loss in 4 weeks';

        document.getElementById('fatLossVal').textContent = toDisplay(fourWeekFatKg) + ' ' + unit;
        document.getElementById('waterLossVal').textContent = toDisplay(waterKg) + ' ' + unit;
        document.getElementById('deficitVal').textContent = Math.round(dailyDeficit);

        // Build timeline (insert after breakdown)
        var breakdown = document.querySelector('.factory-breakdown');
        var timelineWrap = document.getElementById('timelineWrap');
        if (!timelineWrap && breakdown) {
            timelineWrap = document.createElement('div');
            timelineWrap.id = 'timelineWrap';
            timelineWrap.style.cssText = 'max-width:600px;width:100%;margin-top:2rem;';
            breakdown.parentNode.insertBefore(timelineWrap, breakdown.nextSibling);
            var timelineNote = document.createElement('p');
            timelineNote.id = 'timelineNote';
            timelineNote.style.cssText = 'font-size:0.75rem;color:var(--text-muted);text-align:center;margin-top:0.8rem;max-width:600px;';
            timelineWrap.parentNode.insertBefore(timelineNote, timelineWrap.nextSibling);
        }
        if (timelineWrap) {
            timelineWrap.innerHTML = '';
            var maxLoss = weeklyFatLossKg[weeks - 1] + waterKg;
            for (var w = 0; w < weeks; w++) {
                var totalAtWeek = weeklyFatLossKg[w] + waterKg;
                var pct = (totalAtWeek / maxLoss) * 100;
                var row = document.createElement('div');
                row.style.cssText = 'display:flex;align-items:center;gap:0.6rem;margin-bottom:0.4rem;';
                row.innerHTML = '<span style="min-width:3.5rem;font-size:0.78rem;color:var(--text-dim);">Week ' + (w + 1) + '</span>' +
                    '<div style="flex:1;height:6px;background:rgba(20,184,166,0.1);border-radius:3px;overflow:hidden;"><div style="height:100%;background:var(--accent);border-radius:3px;width:0%;transition:width 0.6s cubic-bezier(0.4,0,0.2,1);"></div></div>' +
                    '<span style="min-width:4rem;text-align:right;font-size:0.78rem;font-weight:600;">' + toDisplay(totalAtWeek) + ' ' + unit + '</span>';
                timelineWrap.appendChild(row);
                (function(row, pct, delay) {
                    setTimeout(function() { row.querySelector('div div').style.width = pct + '%'; }, delay);
                })(row, pct, 100 + w * 80);
            }
        }
        var timelineNoteEl = document.getElementById('timelineNote');
        if (timelineNoteEl) {
            timelineNoteEl.textContent = 'Projection assumes consistent ' + selectedFasting.detail + ' with ' + (activity === 1.2 ? 'sedentary' : activity <= 1.375 ? 'light' : activity <= 1.55 ? 'moderate' : 'high') + ' activity. Includes metabolic adaptation.';
        }

        // Coach card
        var weeklyFatUnit = toDisplay(weeklyFatLossKg[0]);
        var monthFat = toDisplay(fourWeekFatKg);
        var coachCard = document.getElementById('coachCard');
        coachCard.innerHTML =
            '<div class="coach-text">' +
            'You chose <span class="hl">' + selectedFasting.name.toLowerCase() + '</span>.<br>' +
            'Your body burns <span class="hl">' + Math.round(tdee) + '</span> calories per day.<br>' +
            selectedFasting.detail + ' creates a <span class="hl">' + Math.round(dailyDeficit) + ' cal</span> daily deficit.' +
            '<div class="coach-rule">Week 1: fast drop (mostly water).<br>Weeks 2-4: steady fat loss.</div>' +
            '<div class="coach-advice">' +
            'The scale will move fast at first &mdash; that\'s water, not fat.<br>' +
            '<em>Real fat loss is ' + weeklyFatUnit + ' ' + unit + '/week.</em><br>' +
            'After 4 weeks, expect <em>' + monthFat + ' ' + unit + '</em> of actual body fat gone.' + (selectedFasting.hours >= 48 ? '<br><br>Extended fasts carry higher risks. Consult a doctor first.' : '') +
            '</div></div>';

        // Share text
        var shareText = 'I calculated my fasting weight loss:\n\n' + selectedFasting.detail + ' for 4 weeks:\n' + toDisplay(fourWeekTotalKg) + ' ' + unit + ' total (' + toDisplay(fourWeekFatKg) + ' ' + unit + ' fat + ' + toDisplay(waterKg) + ' ' + unit + ' water)\n\nDaily deficit: ' + Math.round(dailyDeficit) + ' calories\n\nTry it: healthcalculators.xyz/fasting-weight-loss-calculator';
        updateShareButtons(shareText);

        // Show sections
        if (typeof factoryReveal === 'function') {
            factoryReveal();
        } else {
            document.querySelectorAll('.hidden-section').forEach(function(el) { el.classList.remove('hidden-section'); });
        }
        document.getElementById('result-section').scrollIntoView({ behavior: 'smooth' });

        if (typeof hcTrackEvent === 'function') {
            hcTrackEvent('calculator_complete', { calculator_name: 'Fasting Weight Loss Calculator', page_path: '/fasting-weight-loss-calculator' });
        }
    }
})();
