/**
 * Ozempic Face Risk Calculator
 *
 * Calculates risk of facial volume loss (colloquially "Ozempic face")
 * based on age, weight loss speed, BMI, facial fat baseline, smoking,
 * and weight fluctuation history.
 *
 * Risk score: 0-100 mapped to Low (0-25), Moderate (26-50), High (51-75), Very High (76-100).
 */

document.addEventListener('DOMContentLoaded', function() {
    // Unit toggle
    var metricBtn = document.getElementById('metricBtn');
    var imperialBtn = document.getElementById('imperialBtn');
    var weightMetric = document.getElementById('weight-metric');
    var weightImperial = document.getElementById('weight-imperial');
    var heightMetric = document.getElementById('height-metric');
    var heightImperial = document.getElementById('height-imperial');
    var currentUnits = 'metric';

    metricBtn.addEventListener('click', function() {
        currentUnits = 'metric';
        metricBtn.classList.add('active');
        imperialBtn.classList.remove('active');
        weightMetric.classList.remove('hidden');
        weightImperial.classList.add('hidden');
        heightMetric.classList.remove('hidden');
        heightImperial.classList.add('hidden');
    });

    imperialBtn.addEventListener('click', function() {
        currentUnits = 'imperial';
        imperialBtn.classList.add('active');
        metricBtn.classList.remove('active');
        weightImperial.classList.remove('hidden');
        weightMetric.classList.add('hidden');
        heightImperial.classList.remove('hidden');
        heightMetric.classList.add('hidden');
    });

    // Slider value display
    var slider = document.getElementById('target-loss');
    var sliderValue = document.getElementById('slider-value');
    if (slider && sliderValue) {
        slider.addEventListener('input', function() {
            sliderValue.textContent = slider.value + '%';
        });
    }

    // Calculate button
    document.getElementById('calculate-btn').addEventListener('click', calculate);

    function getWeightKg() {
        if (currentUnits === 'metric') {
            return parseFloat(document.getElementById('weight-kg').value);
        } else {
            var lb = parseFloat(document.getElementById('weight-lb').value);
            return lb ? lb / 2.20462 : NaN;
        }
    }

    function getHeightM() {
        if (currentUnits === 'metric') {
            var cm = parseFloat(document.getElementById('height-cm').value);
            return cm ? cm / 100 : NaN;
        } else {
            var ft = parseFloat(document.getElementById('height-ft').value) || 0;
            var inches = parseFloat(document.getElementById('height-in').value) || 0;
            return (ft * 12 + inches) * 0.0254;
        }
    }

    function calculate() {
        var age = parseInt(document.getElementById('age').value);
        var weightKg = getWeightKg();
        var heightM = getHeightM();
        var targetLossPct = parseInt(document.getElementById('target-loss').value);
        var timelineMonths = parseInt(document.getElementById('timeline').value);
        var facialFat = document.getElementById('facial-fat').value;
        var smoking = document.getElementById('smoking').value;
        var weightFlux = document.getElementById('weight-flux').value;

        // Validation
        if (!age || age < 18 || age > 100) {
            alert('Please enter a valid age (18-100).');
            return;
        }
        if (!weightKg || weightKg < 30) {
            alert('Please enter a valid weight.');
            return;
        }
        if (!heightM || heightM < 1.0) {
            alert('Please enter a valid height.');
            return;
        }

        var bmi = weightKg / (heightM * heightM);

        // --- Risk factor calculations ---

        // 1. Age risk (0-30 points)
        var ageRisk = 0;
        var ageLabel = '';
        if (age < 30) {
            ageRisk = 5;
            ageLabel = 'Low';
        } else if (age < 40) {
            ageRisk = 12;
            ageLabel = 'Moderate';
        } else if (age < 50) {
            ageRisk = 22;
            ageLabel = 'Elevated';
        } else {
            ageRisk = 30;
            ageLabel = 'High';
        }

        // 2. Weight loss speed risk (0-30 points)
        // Calculate weekly loss rate as % of body weight
        var totalWeeks = timelineMonths * 4.33;
        var weeklyLossPct = targetLossPct / totalWeeks;
        var speedRisk = 0;
        var speedLabel = '';
        if (weeklyLossPct > 1.0) {
            speedRisk = 30;
            speedLabel = 'Very Fast (>' + weeklyLossPct.toFixed(2) + '%/week)';
        } else if (weeklyLossPct > 0.5) {
            speedRisk = 18;
            speedLabel = 'Fast (' + weeklyLossPct.toFixed(2) + '%/week)';
        } else if (weeklyLossPct > 0.25) {
            speedRisk = 8;
            speedLabel = 'Moderate (' + weeklyLossPct.toFixed(2) + '%/week)';
        } else {
            speedRisk = 3;
            speedLabel = 'Gradual (' + weeklyLossPct.toFixed(2) + '%/week)';
        }

        // 3. BMI modifier (0-15 points)
        // Higher starting BMI = more facial fat to lose
        var bmiRisk = 0;
        var bmiLabel = '';
        if (bmi >= 40) {
            bmiRisk = 15;
            bmiLabel = 'BMI ' + bmi.toFixed(1) + ' — significant facial fat reserves';
        } else if (bmi >= 35) {
            bmiRisk = 12;
            bmiLabel = 'BMI ' + bmi.toFixed(1) + ' — above-average facial fat';
        } else if (bmi >= 30) {
            bmiRisk = 8;
            bmiLabel = 'BMI ' + bmi.toFixed(1) + ' — moderate facial fat';
        } else if (bmi >= 25) {
            bmiRisk = 5;
            bmiLabel = 'BMI ' + bmi.toFixed(1) + ' — some facial padding';
        } else {
            bmiRisk = 3;
            bmiLabel = 'BMI ' + bmi.toFixed(1) + ' — limited facial fat buffer';
        }

        // 4. Facial fat baseline (0-10 points)
        var facialRisk = 0;
        var facialLabel = '';
        switch (facialFat) {
            case 'minimal':
                facialRisk = 10;
                facialLabel = 'Minimal — very little buffer before hollowing';
                break;
            case 'average':
                facialRisk = 6;
                facialLabel = 'Average — moderate buffer';
                break;
            case 'above':
                facialRisk = 3;
                facialLabel = 'Above Average — good cushion';
                break;
            case 'full':
                facialRisk = 1;
                facialLabel = 'Full/Round — substantial buffer';
                break;
        }

        // 5. Smoking modifier (0-8 points)
        var smokingRisk = 0;
        var smokingLabel = '';
        if (smoking === 'yes') {
            smokingRisk = 8;
            smokingLabel = 'Smoker — accelerated collagen breakdown';
        } else {
            smokingRisk = 0;
            smokingLabel = 'Non-smoker';
        }

        // 6. Weight fluctuation history (0-7 points)
        var fluxRisk = 0;
        var fluxLabel = '';
        if (weightFlux === 'yes') {
            fluxRisk = 7;
            fluxLabel = 'History of fluctuations — reduced skin elasticity';
        } else {
            fluxRisk = 0;
            fluxLabel = 'Stable weight history';
        }

        // Total score (0-100)
        var totalScore = ageRisk + speedRisk + bmiRisk + facialRisk + smokingRisk + fluxRisk;
        totalScore = Math.min(100, Math.max(0, totalScore));

        // Risk category
        var riskCategory = '';
        var riskColor = '';
        if (totalScore <= 25) {
            riskCategory = 'Low';
            riskColor = '#16a34a';
        } else if (totalScore <= 50) {
            riskCategory = 'Moderate';
            riskColor = '#d97706';
        } else if (totalScore <= 75) {
            riskCategory = 'High';
            riskColor = '#dc2626';
        } else {
            riskCategory = 'Very High';
            riskColor = '#991b1b';
        }

        // --- Render results ---
        displayResults({
            totalScore: totalScore,
            riskCategory: riskCategory,
            riskColor: riskColor,
            age: age,
            bmi: bmi,
            targetLossPct: targetLossPct,
            timelineMonths: timelineMonths,
            weeklyLossPct: weeklyLossPct,
            factors: [
                { label: 'Age (' + age + ')', score: ageRisk, max: 30, detail: ageLabel },
                { label: 'Weight Loss Speed', score: speedRisk, max: 30, detail: speedLabel },
                { label: 'BMI Impact', score: bmiRisk, max: 15, detail: bmiLabel },
                { label: 'Facial Fat Baseline', score: facialRisk, max: 10, detail: facialLabel },
                { label: 'Smoking', score: smokingRisk, max: 8, detail: smokingLabel },
                { label: 'Weight Fluctuation History', score: fluxRisk, max: 7, detail: fluxLabel }
            ]
        });

        // Show results section
        document.getElementById('result').classList.remove('hidden');

        // Scroll to results
        document.getElementById('result').scrollIntoView({ behavior: 'smooth', block: 'start' });

        // Content loops
        if (typeof showNextSteps === 'function' && typeof collectUserData === 'function') {
            showNextSteps('ozempic-face', collectUserData(), null, 'result');
        }
    }

    function displayResults(data) {
        // Hero score
        document.getElementById('risk-score').textContent = data.totalScore;
        document.getElementById('risk-label').textContent = data.riskCategory + ' Risk';
        document.getElementById('risk-label').style.color = data.riskColor;

        // Gauge
        drawGauge(data.totalScore, data.riskColor);

        // Summary cards
        document.getElementById('card-age').textContent = data.age + ' years';
        document.getElementById('card-bmi').textContent = data.bmi.toFixed(1);
        document.getElementById('card-loss').textContent = data.targetLossPct + '% in ' + data.timelineMonths + ' mo';
        document.getElementById('card-rate').textContent = data.weeklyLossPct.toFixed(2) + '%/wk';

        // Risk factors breakdown
        var breakdownContainer = document.getElementById('risk-breakdown');
        breakdownContainer.innerHTML = '';

        data.factors.forEach(function(factor) {
            var pct = Math.round((factor.score / factor.max) * 100);
            var barColor = pct <= 33 ? '#16a34a' : (pct <= 66 ? '#d97706' : '#dc2626');

            var row = document.createElement('div');
            row.className = 'risk-factor-row';
            row.innerHTML =
                '<div class="risk-factor-header">' +
                    '<span class="risk-factor-label">' + factor.label + '</span>' +
                    '<span class="risk-factor-score">' + factor.score + '/' + factor.max + '</span>' +
                '</div>' +
                '<div class="risk-factor-bar-bg">' +
                    '<div class="risk-factor-bar" style="width: ' + pct + '%; background-color: ' + barColor + ';"></div>' +
                '</div>' +
                '<div class="risk-factor-detail">' + factor.detail + '</div>';
            breakdownContainer.appendChild(row);
        });

        // Recommendations
        displayRecommendations(data);
    }

    function drawGauge(score, color) {
        var canvas = document.getElementById('gauge-canvas');
        if (!canvas) return;
        var ctx = canvas.getContext('2d');
        var w = canvas.width = 280;
        var h = canvas.height = 160;
        var cx = w / 2;
        var cy = h - 10;
        var radius = 110;

        ctx.clearRect(0, 0, w, h);

        // Background arc
        ctx.beginPath();
        ctx.arc(cx, cy, radius, Math.PI, 0, false);
        ctx.lineWidth = 24;
        ctx.strokeStyle = '#e5e7eb';
        ctx.lineCap = 'round';
        ctx.stroke();

        // Colored segments
        var segments = [
            { start: 0, end: 0.25, color: '#16a34a' },
            { start: 0.25, end: 0.5, color: '#d97706' },
            { start: 0.5, end: 0.75, color: '#dc2626' },
            { start: 0.75, end: 1.0, color: '#991b1b' }
        ];

        segments.forEach(function(seg) {
            ctx.beginPath();
            ctx.arc(cx, cy, radius, Math.PI + (seg.start * Math.PI), Math.PI + (seg.end * Math.PI), false);
            ctx.lineWidth = 24;
            ctx.strokeStyle = seg.color;
            ctx.lineCap = 'butt';
            ctx.stroke();
        });

        // Round end caps
        ctx.beginPath();
        ctx.arc(cx, cy, radius, Math.PI, Math.PI + 0.01, false);
        ctx.lineWidth = 24;
        ctx.strokeStyle = '#16a34a';
        ctx.lineCap = 'round';
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(cx, cy, radius, 2 * Math.PI - 0.01, 2 * Math.PI, false);
        ctx.lineWidth = 24;
        ctx.strokeStyle = '#991b1b';
        ctx.lineCap = 'round';
        ctx.stroke();

        // Needle
        var needleAngle = Math.PI + (score / 100) * Math.PI;
        var needleLen = radius - 20;
        var nx = cx + needleLen * Math.cos(needleAngle);
        var ny = cy + needleLen * Math.sin(needleAngle);

        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(nx, ny);
        ctx.lineWidth = 3;
        ctx.strokeStyle = '#1f2937';
        ctx.lineCap = 'round';
        ctx.stroke();

        // Center dot
        ctx.beginPath();
        ctx.arc(cx, cy, 6, 0, 2 * Math.PI);
        ctx.fillStyle = '#1f2937';
        ctx.fill();

        // Labels
        ctx.font = '11px system-ui, sans-serif';
        ctx.fillStyle = '#6b7280';
        ctx.textAlign = 'center';
        ctx.fillText('Low', cx - radius + 20, cy + 20);
        ctx.fillText('Moderate', cx - 35, cy - radius + 40);
        ctx.fillText('High', cx + 35, cy - radius + 40);
        ctx.fillText('Very High', cx + radius - 20, cy + 20);
    }

    function displayRecommendations(data) {
        var recsContainer = document.getElementById('recommendations');
        var recs = [];

        if (data.weeklyLossPct > 0.5) {
            recs.push({
                icon: '🐢',
                title: 'Slow Your Rate of Weight Loss',
                text: 'Aim for less than 0.5% body weight per week. Rapid weight loss is the single strongest predictor of facial volume loss. Discuss dose titration timing with your prescriber.'
            });
        }

        if (data.age >= 40) {
            recs.push({
                icon: '🧴',
                title: 'Prioritize Collagen-Supporting Skincare',
                text: 'Use retinoids (tretinoin or retinol) and vitamin C serums. After age 40, collagen production drops ~1% per year. Topical retinoids are the most evidence-backed way to stimulate collagen synthesis.'
            });
        }

        recs.push({
            icon: '💪',
            title: 'Facial Muscle Exercises',
            text: 'Research from Northwestern University (2018) showed that 30 minutes of facial exercises daily over 20 weeks improved upper and lower cheek fullness. Exercises like cheek lifts and happy face sculpting can partially compensate for fat loss.'
        });

        if (data.totalScore > 50) {
            recs.push({
                icon: '💉',
                title: 'Consider Preventive Dermal Fillers',
                text: 'Hyaluronic acid fillers (Juvederm Voluma, Restylane Lyft) can restore lost midface volume. Consult a board-certified dermatologist or plastic surgeon. Treatment typically costs $600-$1,200 per syringe and lasts 12-18 months.'
            });
        }

        recs.push({
            icon: '🥩',
            title: 'Maintain Adequate Protein Intake',
            text: 'Consume at least 1.2-1.6g protein per kg of body weight daily. Adequate protein preserves lean mass including facial musculature during weight loss, reducing the gaunt appearance.'
        });

        recs.push({
            icon: '☀️',
            title: 'Rigorous Sun Protection',
            text: 'UV exposure degrades collagen and elastin. Use SPF 30+ daily. Sun damage compounds age-related volume loss, making facial changes from weight loss more pronounced.'
        });

        recsContainer.innerHTML = '';
        recs.forEach(function(rec) {
            var card = document.createElement('div');
            card.className = 'rec-card';
            card.innerHTML =
                '<div class="rec-icon">' + rec.icon + '</div>' +
                '<div class="rec-content">' +
                    '<div class="rec-title">' + rec.title + '</div>' +
                    '<div class="rec-text">' + rec.text + '</div>' +
                '</div>';
            recsContainer.appendChild(card);
        });
    }
});
