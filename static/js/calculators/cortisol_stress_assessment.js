// Cortisol & Stress Assessment Calculator — factory-compatible
(function() {
    var btn = document.getElementById('calcBtn');
    if (btn) btn.addEventListener('click', calculate);

    function calculate() {
        // --- Section 1: Stress Perception (PSS-10 adapted) ---
        var pss1El = document.getElementById('pss1');
        var pss2El = document.getElementById('pss2');
        var pss3El = document.getElementById('pss3');
        var pss4El = document.getElementById('pss4');
        var pss5El = document.getElementById('pss5');
        if (!pss1El || !pss2El || !pss3El || !pss4El || !pss5El) return;

        // Items 1-3: direct score, Items 4-5: reverse score (4 - value)
        var pss1 = parseInt(pss1El.value);
        var pss2 = parseInt(pss2El.value);
        var pss3 = parseInt(pss3El.value);
        var pss4 = 4 - parseInt(pss4El.value); // reverse
        var pss5 = 4 - parseInt(pss5El.value); // reverse
        var pssRaw = pss1 + pss2 + pss3 + pss4 + pss5; // 0-20
        var stressScore = (pssRaw / 20) * 35; // normalized to 0-35

        // --- Section 2: Lifestyle Factors ---
        var sleepHoursEl = document.getElementById('sleepHours');
        var sleepQualityEl = document.getElementById('sleepQuality');
        var caffeineMgEl = document.getElementById('caffeineMg');
        var caffeineCutoffEl = document.getElementById('caffeineCutoff');
        var exerciseHoursEl = document.getElementById('exerciseHours');
        var exerciseIntensityEl = document.getElementById('exerciseIntensity');
        var alcoholDrinksEl = document.getElementById('alcoholDrinks');
        var mealRegularityEl = document.getElementById('mealRegularity');
        if (!sleepHoursEl || !sleepQualityEl || !caffeineMgEl || !caffeineCutoffEl ||
            !exerciseHoursEl || !exerciseIntensityEl || !alcoholDrinksEl || !mealRegularityEl) return;

        var sleepH = parseFloat(sleepHoursEl.value) || 7;
        var sleepQ = parseInt(sleepQualityEl.value);
        var caffMg = parseFloat(caffeineMgEl.value) || 0;
        var caffCutoff = parseInt(caffeineCutoffEl.value);
        var exHours = parseFloat(exerciseHoursEl.value) || 0;
        var exIntensity = parseInt(exerciseIntensityEl.value);
        var alcohol = parseFloat(alcoholDrinksEl.value) || 0;
        var mealIrreg = parseInt(mealRegularityEl.value);

        // Individual lifestyle factor scores
        var factors = {};

        // Sleep hours: 7-9=0, 6-7 or 9-10=2, 5-6 or 10+=4, <5=6
        if (sleepH >= 7 && sleepH <= 9) factors.sleepDuration = 0;
        else if ((sleepH >= 6 && sleepH < 7) || (sleepH > 9 && sleepH <= 10)) factors.sleepDuration = 2;
        else if ((sleepH >= 5 && sleepH < 6) || sleepH > 10) factors.sleepDuration = 4;
        else factors.sleepDuration = 6; // <5

        // Sleep quality: direct value (0-4) scaled to 0-6
        factors.sleepQuality = (sleepQ / 4) * 6;

        // Caffeine amount: 0-100=0, 100-200=1, 200-400=3, 400-600=5, 600+=7
        if (caffMg <= 100) factors.caffeine = 0;
        else if (caffMg <= 200) factors.caffeine = 1;
        else if (caffMg <= 400) factors.caffeine = 3;
        else if (caffMg <= 600) factors.caffeine = 5;
        else factors.caffeine = 7;

        // Caffeine timing: direct value (0-4) scaled to 0-5
        factors.caffeineTiming = (caffCutoff / 4) * 5;

        // Exercise: combine hours * intensity factor
        var intensityFactors = [0.3, 0.6, 1.0, 1.5]; // Light, Moderate, Intense, Very Intense
        var exProduct = exHours * intensityFactors[exIntensity];
        if (exProduct > 10) factors.exercise = 6; // overtraining risk
        else if (exProduct >= 6) factors.exercise = 3;
        else if (exProduct >= 3) factors.exercise = 0; // healthy
        else factors.exercise = (exHours < 1) ? 2 : 1; // under-exercise / minimal

        // Alcohol: 0-3=0, 4-7=2, 8-14=4, 15+=6
        if (alcohol <= 3) factors.alcohol = 0;
        else if (alcohol <= 7) factors.alcohol = 2;
        else if (alcohol <= 14) factors.alcohol = 4;
        else factors.alcohol = 6;

        // Meal irregularity: direct value (0-4) scaled to 0-4
        factors.mealIrregularity = mealIrreg;

        var lifestyleRaw = factors.sleepDuration + factors.sleepQuality + factors.caffeine +
                           factors.caffeineTiming + factors.exercise + factors.alcohol + factors.mealIrregularity;
        var lifestyleScore = Math.min(lifestyleRaw, 40); // cap at 40

        // --- Section 3: Symptom Check ---
        var checkedSymptoms = document.querySelectorAll('.check-grid input[type="checkbox"]:checked');
        var symptomCount = checkedSymptoms.length;
        var symptomScore = symptomCount * 2.5; // 0-25

        // --- Composite Score ---
        var composite = Math.round(stressScore + lifestyleScore + symptomScore);
        composite = Math.min(composite, 100);

        // --- Pattern Classification ---
        var classification, verdictColor;
        if (composite <= 25) {
            classification = 'Resilient';
            verdictColor = 'var(--good, #22c55e)';
        } else if (composite <= 45) {
            classification = 'Balanced with Risk Factors';
            verdictColor = 'var(--caution, #eab308)';
        } else if (composite <= 65) {
            classification = 'Elevated Cortisol Risk';
            verdictColor = 'var(--accent)';
        } else if (composite <= 85) {
            classification = 'High Cortisol Risk';
            verdictColor = 'var(--bad, #ef4444)';
        } else {
            classification = 'Burnout Risk';
            verdictColor = 'var(--bad, #ef4444)';
        }

        // --- Display Results ---
        var rn = document.getElementById('resultNumber');
        if (rn) rn.textContent = composite;

        var rv = document.getElementById('resultVerdict');
        if (rv) {
            rv.textContent = classification;
            rv.style.color = verdictColor;
        }

        var sp = document.getElementById('stressPerceptionScore');
        if (sp) sp.textContent = Math.round(stressScore) + ' / 35';

        var ls = document.getElementById('lifestyleLoadScore');
        if (ls) ls.textContent = Math.round(lifestyleScore) + ' / 40';

        var ss = document.getElementById('symptomSignalScore');
        if (ss) ss.textContent = Math.round(symptomScore) + ' / 25';

        // --- Top Contributors ---
        var drivers = [];
        // Dimension-level contributors
        var dimensions = [
            {name: 'Stress Perception', score: stressScore, max: 35},
            {name: 'Lifestyle Load', score: lifestyleScore, max: 40},
            {name: 'Symptom Signals', score: symptomScore, max: 25}
        ];
        dimensions.sort(function(a, b) { return (b.score / b.max) - (a.score / a.max); });
        var topDimension = dimensions[0].name;

        // Lifestyle-level detail drivers
        var lifestyleDrivers = [
            {name: 'Sleep duration', score: factors.sleepDuration, max: 6},
            {name: 'Sleep quality', score: factors.sleepQuality, max: 6},
            {name: 'Caffeine intake', score: factors.caffeine, max: 7},
            {name: 'Caffeine timing', score: factors.caffeineTiming, max: 5},
            {name: 'Exercise balance', score: factors.exercise, max: 6},
            {name: 'Alcohol', score: factors.alcohol, max: 6},
            {name: 'Meal irregularity', score: factors.mealIrregularity, max: 4}
        ];
        lifestyleDrivers.sort(function(a, b) { return (b.score / b.max) - (a.score / a.max); });

        // Build top 2-3 specific factors
        var topFactors = [];
        for (var i = 0; i < lifestyleDrivers.length && topFactors.length < 3; i++) {
            if (lifestyleDrivers[i].score > 0) {
                topFactors.push(lifestyleDrivers[i].name);
            }
        }
        if (stressScore / 35 > 0.5) drivers.push('High perceived stress');
        for (var j = 0; j < topFactors.length; j++) drivers.push(topFactors[j]);
        if (symptomScore / 25 > 0.4) drivers.push(symptomCount + ' cortisol-related symptoms');

        // Limit to top 3
        drivers = drivers.slice(0, 3);

        var driversEl = document.getElementById('cortisolDrivers');
        if (driversEl && drivers.length > 0) {
            driversEl.style.display = 'block';
            var driverHtml = '<div style="font-size:0.85rem;color:var(--text-dim,#94a3b8);text-transform:uppercase;letter-spacing:0.04em;margin-bottom:0.8rem;font-weight:600;">Your top cortisol drivers</div>';
            for (var d = 0; d < drivers.length; d++) {
                driverHtml += '<div style="display:flex;align-items:center;gap:0.6rem;padding:0.5rem 0;' + (d < drivers.length - 1 ? 'border-bottom:1px solid rgba(232,155,62,0.08);' : '') + '">' +
                    '<span style="color:var(--accent);font-weight:700;font-size:1.1rem;">' + (d + 1) + '.</span>' +
                    '<span style="color:var(--text,#e2e8f0);font-size:0.95rem;">' + drivers[d] + '</span></div>';
            }
            driversEl.innerHTML = driverHtml;
        }

        // --- Coach Card ---
        var coachRecommendations = [];
        // Personalized recommendations based on top contributors
        if (factors.caffeine >= 3 || factors.caffeineTiming >= 2.5) {
            coachRecommendations.push('<em>Caffeine reset:</em> Try stopping caffeine 8+ hours before bed. Even reducing by 1 cup can lower cortisol response by 14%.');
        }
        if (factors.sleepDuration >= 2 || factors.sleepQuality >= 3) {
            coachRecommendations.push('<em>Sleep anchor:</em> Set a fixed wake time 7 days a week. Consistent sleep timing resets your cortisol awakening response within 2-3 weeks.');
        }
        if (factors.exercise >= 3) {
            coachRecommendations.push('<em>Exercise modulation:</em> Dial back to moderate intensity. Overtraining elevates cortisol — more is not always better. Zone 2 training is ideal for cortisol management.');
        }
        if (factors.exercise >= 1 && exHours < 2) {
            coachRecommendations.push('<em>Move more:</em> Even 20 minutes of brisk walking lowers cortisol. Aim for 150 minutes of moderate activity per week.');
        }
        if (factors.alcohol >= 2) {
            coachRecommendations.push('<em>Alcohol awareness:</em> Alcohol disrupts cortisol rhythm even at moderate doses. Try cutting back by 2-3 drinks per week.');
        }
        if (stressScore / 35 > 0.5) {
            coachRecommendations.push('<em>Stress practice:</em> 10 minutes of daily meditation reduces salivary cortisol by 15-25%. Box breathing (4-4-4-4) works in acute moments.');
        }
        if (factors.mealIrregularity >= 2) {
            coachRecommendations.push('<em>Meal timing:</em> Skipping meals spikes cortisol. Eat within 1 hour of waking and avoid gaps longer than 5 hours.');
        }
        // Limit to top 3 recommendations
        coachRecommendations = coachRecommendations.slice(0, 3);
        if (coachRecommendations.length === 0) {
            coachRecommendations.push('<em>Keep it up.</em> Your lifestyle factors are well-managed. Focus on consistency.');
        }

        var cc = document.getElementById('coachCard');
        if (cc) {
            var coachHtml = '<div class="coach-text">' +
                'Your cortisol stress score is <span class="hl">' + composite + '/100</span> — <span class="hl">' + classification + '</span>.' +
                '<div class="coach-rule">' +
                (topDimension === 'Stress Perception' ? 'Your biggest driver is perceived stress — your mind is doing most of the heavy lifting here.' :
                 topDimension === 'Lifestyle Load' ? 'Your biggest driver is lifestyle — concrete changes can bring this down.' :
                 'Your symptom count suggests your body is already responding to chronic stress.') +
                '</div>' +
                '<div class="coach-advice">' + coachRecommendations.join('<br>') + '</div>';

            // When to test recommendation
            if (composite > 60) {
                coachHtml += '<div style="margin-top:1.2rem;padding-top:1rem;border-top:1px solid rgba(232,155,62,0.1);font-size:0.9rem;color:var(--accent);">' +
                    '<strong>Consider testing:</strong> With a score above 60, a 4-point salivary cortisol test can map your diurnal curve and confirm whether your cortisol rhythm is disrupted.' +
                    '</div>';
            }

            coachHtml += '</div>';
            cc.innerHTML = coachHtml;
        }

        // Mental model section in the extra coach area
        var extraEl = document.getElementById('cortisolCoachExtra');
        if (extraEl) {
            extraEl.style.display = 'block';
            extraEl.innerHTML = '<div style="font-size:0.85rem;color:var(--text-dim,#94a3b8);text-transform:uppercase;letter-spacing:0.04em;margin-bottom:0.8rem;font-weight:600;">Why this matters</div>' +
                '<p style="font-size:0.92rem;line-height:1.7;color:var(--text-dim,#94a3b8);margin:0;">' +
                'Cortisol is not the enemy — it is your body\'s alarm system. The problem is not cortisol itself, it is when the alarm never turns off. ' +
                'Chronic elevation rewires your energy, sleep, weight, and immunity. This assessment identifies which of <em style="color:var(--text,#e2e8f0);font-style:normal;font-weight:500;">your</em> specific habits are keeping the alarm ringing.</p>';
        }

        // --- Share ---
        var shareText = 'My cortisol stress score is ' + composite + '/100 \u2014 ' + classification + '. What\'s yours?\n\nhealthcalculators.xyz/cortisol-stress-assessment';
        if (typeof updateShareButtons === 'function') updateShareButtons(shareText);

        // --- Reveal ---
        if (typeof factoryReveal === 'function') factoryReveal();

        // --- Analytics ---
        if (typeof hcTrackEvent === 'function') hcTrackEvent('calculator_complete', {calculator_name: 'Cortisol Stress Assessment', page_path: '/cortisol-stress-assessment'});
    }
})();
