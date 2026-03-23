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
        buildFastingGrid();

        // Sex cards
        document.querySelectorAll('.sex-card').forEach(function(card) {
            card.addEventListener('click', function() {
                document.querySelectorAll('.sex-card').forEach(function(c) { c.classList.remove('selected'); });
                this.classList.add('selected');
                selectedSex = this.dataset.sex;
            });
        });

        // Unit toggle
        document.getElementById('imperialBtn').addEventListener('click', function() {
            this.classList.add('active');
            document.getElementById('metricBtn').classList.remove('active');
            document.getElementById('imperialInputs').style.display = 'block';
            document.getElementById('metricInputs').style.display = 'none';
        });
        document.getElementById('metricBtn').addEventListener('click', function() {
            this.classList.add('active');
            document.getElementById('imperialBtn').classList.remove('active');
            document.getElementById('metricInputs').style.display = 'block';
            document.getElementById('imperialInputs').style.display = 'none';
        });

        // Calculate
        document.getElementById('calcBtn').addEventListener('click', calculate);
    });

    function buildFastingGrid() {
        var grid = document.getElementById('fastingGrid');
        FASTING_TYPES.forEach(function(f) {
            var card = document.createElement('div');
            card.className = 'fasting-card';
            card.innerHTML = '<span class="emoji">' + f.emoji + '</span><span class="name">' + f.name + '</span><span class="detail">' + f.detail + '</span>';
            card.onclick = function() {
                document.querySelectorAll('.fasting-card').forEach(function(c) { c.classList.remove('selected'); });
                card.classList.add('selected');
                selectedFasting = f;
                setTimeout(function() {
                    document.getElementById('inputs-section').scrollIntoView({ behavior: 'smooth' });
                }, 350);
            };
            grid.appendChild(card);
        });
    }

    function calculate() {
        if (!selectedFasting) {
            document.getElementById('hero-section').scrollIntoView({ behavior: 'smooth' });
            return;
        }

        var isImperial = document.getElementById('imperialBtn').classList.contains('active');
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

        // Hide static example
        var staticEx = document.getElementById('staticExample');
        if (staticEx) staticEx.style.display = 'none';

        // Display results
        var unit = isImperial ? 'lbs' : 'kg';
        var toDisplay = isImperial ? function(v) { return (v / 0.453592).toFixed(1); } : function(v) { return v.toFixed(1); };

        document.getElementById('resultNumber').textContent = toDisplay(fourWeekTotalKg);
        document.getElementById('resultUnit').textContent = unit + ' total weight loss in 4 weeks';
        document.getElementById('resultContext').textContent =
            'With ' + selectedFasting.name.toLowerCase() + ' (' + selectedFasting.detail + '), based on your BMR of ' + Math.round(bmr) + ' cal/day';

        document.getElementById('fatLossVal').textContent = toDisplay(fourWeekFatKg) + ' ' + unit;
        document.getElementById('waterLossVal').textContent = toDisplay(waterKg) + ' ' + unit;
        document.getElementById('deficitVal').textContent = Math.round(dailyDeficit);

        // Build timeline
        var timelineWrap = document.getElementById('timelineWrap');
        timelineWrap.innerHTML = '';
        var maxLoss = weeklyFatLossKg[weeks - 1] + waterKg;

        for (var w = 0; w < weeks; w++) {
            var totalAtWeek = weeklyFatLossKg[w] + waterKg;
            var pct = (totalAtWeek / maxLoss) * 100;
            var row = document.createElement('div');
            row.className = 'timeline-row';
            row.innerHTML = '<span class="timeline-week">Week ' + (w + 1) + '</span>' +
                '<div class="timeline-bar-track"><div class="timeline-bar-fill" style="width:0%;"></div></div>' +
                '<span class="timeline-val">' + toDisplay(totalAtWeek) + ' ' + unit + '</span>';
            timelineWrap.appendChild(row);
            (function(row, pct, delay) {
                setTimeout(function() { row.querySelector('.timeline-bar-fill').style.width = pct + '%'; }, delay);
            })(row, pct, 100 + w * 80);
        }

        document.getElementById('timelineNote').textContent =
            'Projection assumes consistent ' + selectedFasting.detail + ' with ' + (activity === 1.2 ? 'sedentary' : activity <= 1.375 ? 'light' : activity <= 1.55 ? 'moderate' : 'high') + ' activity. Includes metabolic adaptation.';

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
        document.querySelectorAll('.hidden-section').forEach(function(el) { el.classList.remove('hidden-section'); });
        document.getElementById('result-section').scrollIntoView({ behavior: 'smooth' });

        if (typeof hcTrackEvent === 'function') {
            hcTrackEvent('calculator_complete', { calculator_name: 'Fasting Weight Loss Calculator', page_path: '/fasting-weight-loss-calculator' });
        }
    }
})();
