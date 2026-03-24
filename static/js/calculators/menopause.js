// Menopause Age Calculator — factory-compatible
// Based on SWAN study, Gold EB et al. 2001, Torgerson DJ et al. 1997
(function() {
    'use strict';

    var ETHNICITY_AVERAGES = {
        white: 51.5, black: 49.5, hispanic: 51.4, asian: 51.1, other: 51.0, '': 51.0
    };
    var FAMILY_CORRELATION = 0.5;
    var SMOKING_ADJUST = { never: 0, former: -0.75, current: -1.5 };
    var BMI_ADJUST = { underweight: -1.0, normal: 0, overweight: 0.3, obese: 0.8 };
    var MENARCHE_BASELINE = 12.5;
    var MENARCHE_COEFFICIENT = -0.15;
    var PREGNANCY_ADJUST = { '0': 0, '1': 0.2, '2': 0.4, '3': 0.5 };
    var CONTRACEPTIVE_ADJUST = { no: 0, yes: 0.3 };
    var RANGE_WIDTH = 2;

    var SEVERITY = [
        { max: 2, label: 'Minimal', css: 'minimal' },
        { max: 4, label: 'Mild', css: 'mild' },
        { max: 7, label: 'Moderate', css: 'moderate' },
        { max: 10, label: 'Significant', css: 'significant' }
    ];

    var SYMPTOM_NAMES = {
        'hot-flashes': 'Hot flashes / night sweats',
        'irregular-periods': 'Irregular periods',
        'sleep': 'Sleep disturbances',
        'mood': 'Mood changes / anxiety',
        'vaginal-dryness': 'Vaginal dryness',
        'libido': 'Decreased libido',
        'brain-fog': 'Brain fog / memory issues',
        'joint-pain': 'Joint pain',
        'weight': 'Weight changes',
        'palpitations': 'Heart palpitations'
    };

    function $(id) { var el = document.getElementById(id); return el; }

    function predict(inputs) {
        var baseline = ETHNICITY_AVERAGES[inputs.ethnicity] || 51.0;
        var familyAge = null;
        if (inputs.motherAge !== null) {
            familyAge = inputs.motherAge;
            if (inputs.sisterAge !== null) familyAge = (inputs.motherAge + inputs.sisterAge) / 2;
        } else if (inputs.sisterAge !== null) {
            familyAge = inputs.sisterAge;
        }
        var estimate = familyAge !== null
            ? baseline * (1 - FAMILY_CORRELATION) + familyAge * FAMILY_CORRELATION
            : baseline;
        estimate += SMOKING_ADJUST[inputs.smoking] || 0;
        estimate += BMI_ADJUST[inputs.bmi] || 0;
        if (inputs.menarcheAge !== null) {
            estimate += (MENARCHE_BASELINE - inputs.menarcheAge) * MENARCHE_COEFFICIENT;
        }
        estimate += PREGNANCY_ADJUST[inputs.pregnancies] || 0;
        estimate += CONTRACEPTIVE_ADJUST[inputs.contraceptive] || 0;
        estimate = Math.round(estimate * 10) / 10;
        if (estimate < 40) estimate = 40;
        if (estimate > 58) estimate = 58;
        return {
            rangeLow: Math.round(estimate - RANGE_WIDTH),
            rangeHigh: Math.round(estimate + RANGE_WIDTH),
            mostLikely: Math.round(estimate),
            estimate: estimate
        };
    }

    function assessStage(currentAge, menoAge) {
        var y = menoAge - currentAge;
        if (y > 8) return { stage: 'Pre-menopause', css: 'stage-pre', desc: 'You are likely still in your reproductive years with regular cycles.', key: 'pre' };
        if (y > 3) return { stage: 'Early Perimenopause', css: 'stage-early-peri', desc: 'You may begin noticing subtle cycle changes and occasional symptoms.', key: 'early-peri' };
        if (y > 0) return { stage: 'Late Perimenopause', css: 'stage-late-peri', desc: 'Symptoms often intensify. Periods become very irregular with longer gaps.', key: 'late-peri' };
        if (y > -2) return { stage: 'Menopause Transition', css: 'stage-meno', desc: 'You are around the typical age for your final menstrual period.', key: 'meno' };
        return { stage: 'Post-menopause', css: 'stage-post', desc: 'You have likely passed menopause. Focus on long-term health maintenance.', key: 'post' };
    }

    function scoreSeverity(count) {
        for (var i = 0; i < SEVERITY.length; i++) {
            if (count <= SEVERITY[i].max) return SEVERITY[i];
        }
        return SEVERITY[SEVERITY.length - 1];
    }

    function buildRiskFactors(inputs) {
        var risks = [];
        if (inputs.smoking === 'current') risks.push('Current smoking is associated with reaching menopause 1-2 years earlier.');
        else if (inputs.smoking === 'former') risks.push('Former smoking may shift menopause timing by about 0.5-1 year earlier.');
        if (inputs.bmi === 'underweight') risks.push('Underweight BMI is associated with earlier menopause due to lower estrogen from adipose tissue.');
        if (inputs.motherAge !== null && inputs.motherAge < 46) risks.push('Your mother reached menopause before 46, a strong predictor of earlier menopause.');
        if (inputs.menarcheAge !== null && inputs.menarcheAge >= 15) risks.push('Late menarche (age ' + inputs.menarcheAge + ') has a weak association with slightly earlier menopause.');
        return risks;
    }

    function getRecommendations(key) {
        var recs = {
            'pre': ['Establish regular exercise including weight-bearing activities', 'Ensure adequate calcium (1,000 mg/day) and vitamin D (600-800 IU/day)', 'Track your menstrual cycles to establish baseline', 'If you smoke, quitting may delay menopause by 1-2 years'],
            'early-peri': ['Continue or start regular exercise for mood, sleep, and weight', 'Practice good sleep hygiene: consistent bedtime, cool bedroom', 'Consider stress management techniques', 'Discuss contraception with your doctor — pregnancy is still possible', 'Increase calcium to 1,200 mg/day'],
            'late-peri': ['Talk to your doctor about symptom management including hormone therapy', 'For hot flashes: layers, cool environment, identify triggers', 'Vaginal moisturizers can help with dryness', 'Regular weight-bearing exercise is critical for bone preservation', 'Consider a DEXA bone density scan'],
            'meno': ['Discuss hormone therapy if symptoms are bothersome — most effective within 10 years of menopause', 'Get a baseline DEXA bone density scan', 'Monitor cardiovascular risk factors', 'Vaginal estrogen is safe for urogenital symptoms'],
            'post': ['Continue regular screenings: mammogram, bone density, cardiovascular', 'Weight-bearing exercise and balance training prevent fractures', 'Adequate protein supports muscle and bone health', 'Review medications annually with your doctor']
        };
        return recs[key] || [];
    }

    function renderTimeline(container, currentAge, pred) {
        if (!container) return;
        var menoAge = pred.mostLikely;
        var periStart = menoAge - 7;
        var earlyPeriEnd = menoAge - 3;
        var postStart = menoAge + 1;
        var tMin = 35, tMax = 60, tRange = tMax - tMin;
        function pct(a) { return Math.max(0, Math.min(100, ((a - tMin) / tRange) * 100)); }
        var prePct = pct(periStart);
        var earlyPct = pct(earlyPeriEnd) - prePct;
        var latePct = pct(menoAge) - pct(earlyPeriEnd);
        var menoPct = pct(postStart) - pct(menoAge);
        var postPct = 100 - pct(postStart);
        var h = '<div style="font-size:0.8rem;color:var(--text-dim);margin-bottom:4px;">Estimated menopause transition timeline</div>';
        h += '<div style="display:flex;height:32px;border-radius:8px;overflow:hidden;font-size:0.65rem;color:#fff;font-weight:600;">';
        h += '<div style="width:' + prePct + '%;background:#16a34a;display:flex;align-items:center;justify-content:center;">Pre</div>';
        h += '<div style="width:' + earlyPct + '%;background:#d97706;display:flex;align-items:center;justify-content:center;">Early</div>';
        h += '<div style="width:' + latePct + '%;background:#ea580c;display:flex;align-items:center;justify-content:center;">Late</div>';
        h += '<div style="width:' + menoPct + '%;background:#dc2626;display:flex;align-items:center;justify-content:center;">Meno</div>';
        h += '<div style="width:' + postPct + '%;background:#6366f1;display:flex;align-items:center;justify-content:center;">Post</div>';
        h += '</div>';
        var mp = pct(currentAge);
        if (mp >= 0 && mp <= 100) {
            h += '<div style="position:relative;height:20px;"><div style="position:absolute;left:' + mp + '%;transform:translateX(-50%);font-size:0.7rem;color:var(--accent);font-weight:700;">You (' + currentAge + ')</div></div>';
        }
        h += '<div style="display:flex;justify-content:space-between;font-size:0.7rem;color:var(--text-muted);margin-top:2px;"><span>' + tMin + '</span><span>' + tMax + '</span></div>';
        container.innerHTML = h;
    }

    var btn = $('calcBtn');
    if (btn) btn.addEventListener('click', calculate);

    function calculate() {
        var currentAge = parseInt(($('currentAge') || {}).value);
        if (isNaN(currentAge) || currentAge < 25 || currentAge > 65) return;

        // Mother/sister ages: just parse — blank means unknown/NA
        var motherAge = null;
        var mv = parseInt(($('motherAge') || {}).value);
        if (!isNaN(mv) && mv >= 30 && mv <= 65) motherAge = mv;

        var sisterAge = null;
        var sv = parseInt(($('sisterAge') || {}).value);
        if (!isNaN(sv) && sv >= 30 && sv <= 65) sisterAge = sv;

        var ethnicity = ($('ethnicity') || {}).value || '';
        var smokingRow = document.querySelector('[data-group="smokingStatus"]');
        var smoking = 'never';
        if (smokingRow) {
            var activeBtn = smokingRow.querySelector('.unit-btn.active');
            if (activeBtn) smoking = activeBtn.getAttribute('data-value') || 'never';
        }

        var bmi = ($('bmiCategory') || {}).value || 'normal';

        var menarcheAge = parseInt(($('menarcheAge') || {}).value);
        if (isNaN(menarcheAge) || menarcheAge < 8 || menarcheAge > 18) menarcheAge = null;

        var pregnancies = ($('pregnancies') || {}).value || '0';
        var contraceptive = ($('contraceptiveUse') || {}).value || 'no';

        var inputs = {
            currentAge: currentAge,
            ethnicity: ethnicity,
            motherAge: motherAge,
            sisterAge: sisterAge,
            smoking: smoking,
            bmi: bmi,
            menarcheAge: menarcheAge,
            pregnancies: pregnancies,
            contraceptive: contraceptive
        };

        var pred = predict(inputs);
        var stage = assessStage(currentAge, pred.mostLikely);

        // Symptoms
        var checked = [];
        var boxes = document.querySelectorAll('.check-grid input[type="checkbox"]:checked');
        boxes.forEach(function(cb) { if (cb.value !== 'mother-unknown' && cb.value !== 'sister-na') checked.push(cb.value); });

        // Primary result
        var rn = $('resultNumber');
        if (rn) rn.textContent = pred.rangeLow + '-' + pred.rangeHigh;

        var rv = $('resultVerdict');
        if (rv) {
            rv.textContent = stage.stage + ' — Most likely around age ' + pred.mostLikely;
            rv.style.color = 'var(--accent)';
        }

        // Breakdown cards
        var stageEl = $('stageVal');
        if (stageEl) stageEl.textContent = stage.stage;
        var descEl = $('stageDesc');
        if (descEl) descEl.textContent = stage.desc;
        var rangeEl = $('rangeVal');
        if (rangeEl) rangeEl.textContent = pred.rangeLow + ' - ' + pred.rangeHigh;

        // Timeline
        renderTimeline($('timelineBox'), currentAge, pred);

        // Symptom section
        var symptomBox = $('symptomBox');
        if (symptomBox) {
            if (checked.length > 0) {
                var sev = scoreSeverity(checked.length);
                var pctFill = (checked.length / 10) * 100;
                var sevColor = sev.css === 'significant' ? 'var(--bad)' : sev.css === 'moderate' ? '#ea580c' : sev.css === 'mild' ? 'var(--caution)' : 'var(--good)';
                var h = '<div style="font-size:0.85rem;color:' + sevColor + ';font-weight:700;margin-bottom:0.5rem;">' + sev.label + ' (' + checked.length + '/10 symptoms)</div>';
                h += '<div style="height:6px;background:rgba(255,255,255,0.06);border-radius:3px;overflow:hidden;margin-bottom:0.8rem;"><div style="height:100%;width:' + pctFill + '%;background:' + sevColor + ';border-radius:3px;transition:width 0.5s;"></div></div>';
                var tags = '';
                checked.forEach(function(v) { tags += '<span style="display:inline-block;padding:0.25rem 0.6rem;margin:0.2rem;background:rgba(var(--accent-rgb),0.08);border:1px solid rgba(var(--accent-rgb),0.15);border-radius:8px;font-size:0.78rem;color:var(--text-dim);">' + (SYMPTOM_NAMES[v] || v) + '</span>'; });
                h += tags;
                symptomBox.innerHTML = h;
                symptomBox.style.display = '';
            } else {
                symptomBox.style.display = 'none';
            }
        }

        // Risk factors
        var riskBox = $('riskBox');
        if (riskBox) {
            var risks = buildRiskFactors(inputs);
            if (risks.length > 0) {
                var rh = '';
                risks.forEach(function(r) { rh += '<div style="padding:0.5rem 0;font-size:0.85rem;color:var(--text-dim);border-bottom:1px solid rgba(var(--accent-rgb),0.06);">&#9888; ' + r + '</div>'; });
                riskBox.innerHTML = rh;
                riskBox.style.display = '';
            } else {
                riskBox.style.display = 'none';
            }
        }

        // Recommendations
        var recsBox = $('recsBox');
        if (recsBox) {
            var recs = getRecommendations(stage.key);
            if (recs.length > 0) {
                var recHtml = '';
                recs.forEach(function(r) { recHtml += '<div style="padding:0.4rem 0;font-size:0.85rem;color:var(--text-dim);">&bull; ' + r + '</div>'; });
                recsBox.innerHTML = recHtml;
                recsBox.style.display = '';
            }
        }

        // Coach card
        var coach = $('coachCard');
        if (coach) {
            var ch = '<p>' + stage.desc + '</p>';
            if (checked.length >= 5) {
                ch += '<p style="margin-top:1rem;color:var(--bad);font-weight:600;">Your symptom load is significant. We recommend speaking with a healthcare provider about management options.</p>';
            }
            coach.innerHTML = ch;
        }

        if (typeof factoryReveal === 'function') factoryReveal();
    }
})();
