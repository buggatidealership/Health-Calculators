/**
 * Menopause Age & Symptom Calculator
 *
 * Prediction model based on published research:
 * - SWAN study (Study of Women's Health Across the Nation)
 * - ACOG Practice Bulletin No. 141
 * - Gold EB et al., Am J Epidemiol 2001
 * - Torgerson DJ et al., Eur J Obstet Gynecol 1997
 */
(function () {
  'use strict';

  // ---------- CONSTANTS ----------

  // Ethnicity-specific average menopause ages (SWAN study)
  var ETHNICITY_AVERAGES = {
    white: 51.5,
    black: 49.5,
    hispanic: 51.4,
    asian: 51.1,
    other: 51.0,
    '': 51.0 // default US average
  };

  // Family history correlation weight (~0.5 per Torgerson et al.)
  var FAMILY_CORRELATION = 0.5;

  // Smoking adjustments (Gold et al., 2001; Sun et al., 2012 meta-analysis)
  var SMOKING_ADJUST = {
    never: 0,
    former: -0.75,
    current: -1.5
  };

  // BMI adjustments
  var BMI_ADJUST = {
    underweight: -1.0,
    normal: 0,
    overweight: 0.3,
    obese: 0.8
  };

  // Menarche adjustment: earlier first period correlates weakly with later menopause
  // Baseline menarche age = 12.5
  var MENARCHE_BASELINE = 12.5;
  var MENARCHE_COEFFICIENT = -0.15; // years per year earlier (weak effect)

  // Pregnancy adjustment
  var PREGNANCY_ADJUST = {
    '0': 0,
    '1': 0.2,
    '2': 0.4,
    '3': 0.5
  };

  // Contraceptive use adjustment
  var CONTRACEPTIVE_ADJUST = { no: 0, yes: 0.3 };

  // Range width (plus/minus)
  var RANGE_WIDTH = 2;

  // Symptom severity thresholds
  var SEVERITY = [
    { max: 2, label: 'Minimal', cssClass: 'minimal' },
    { max: 4, label: 'Mild', cssClass: 'mild' },
    { max: 7, label: 'Moderate', cssClass: 'moderate' },
    { max: 10, label: 'Significant', cssClass: 'significant' }
  ];

  // Symptom display names
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

  // ---------- DOM HELPERS ----------

  function $(id) { return document.getElementById(id); }
  function hide(el) { if (el) el.classList.add('hidden'); }
  function show(el) { if (el) el.classList.remove('hidden'); }

  // ---------- PREDICTION ENGINE ----------

  function predict(inputs) {
    // 1. Start with ethnicity baseline
    var baseline = ETHNICITY_AVERAGES[inputs.ethnicity] || 51.0;

    // 2. Family history adjustment
    var familyAge = null;
    if (inputs.motherAge !== null) {
      familyAge = inputs.motherAge;
      if (inputs.sisterAge !== null) {
        familyAge = (inputs.motherAge + inputs.sisterAge) / 2;
      }
    } else if (inputs.sisterAge !== null) {
      familyAge = inputs.sisterAge;
    }

    var estimate;
    if (familyAge !== null) {
      // Weighted blend: baseline * (1 - corr) + familyAge * corr
      estimate = baseline * (1 - FAMILY_CORRELATION) + familyAge * FAMILY_CORRELATION;
    } else {
      estimate = baseline;
    }

    // 3. Smoking adjustment
    estimate += SMOKING_ADJUST[inputs.smoking] || 0;

    // 4. BMI adjustment
    estimate += BMI_ADJUST[inputs.bmi] || 0;

    // 5. Menarche adjustment (if provided)
    if (inputs.menarcheAge !== null) {
      var mDiff = MENARCHE_BASELINE - inputs.menarcheAge;
      estimate += mDiff * MENARCHE_COEFFICIENT;
    }

    // 6. Pregnancy adjustment
    estimate += PREGNANCY_ADJUST[inputs.pregnancies] || 0;

    // 7. Contraceptive adjustment
    estimate += CONTRACEPTIVE_ADJUST[inputs.contraceptive] || 0;

    // Round to 1 decimal
    estimate = Math.round(estimate * 10) / 10;

    // Clamp to reasonable range
    if (estimate < 40) estimate = 40;
    if (estimate > 58) estimate = 58;

    var rangeLow = Math.round(estimate - RANGE_WIDTH);
    var rangeHigh = Math.round(estimate + RANGE_WIDTH);
    var mostLikely = Math.round(estimate);

    return {
      rangeLow: rangeLow,
      rangeHigh: rangeHigh,
      mostLikely: mostLikely,
      estimate: estimate
    };
  }

  function assessStage(currentAge, menopauseAge) {
    var yearsUntil = menopauseAge - currentAge;

    if (yearsUntil > 8) {
      return {
        stage: 'Pre-menopause',
        cssClass: 'stage-pre',
        description: 'You are likely still in your reproductive years with regular cycles.',
        key: 'pre'
      };
    } else if (yearsUntil > 3) {
      return {
        stage: 'Early Perimenopause',
        cssClass: 'stage-early-peri',
        description: 'You may begin noticing subtle cycle changes and occasional symptoms.',
        key: 'early-peri'
      };
    } else if (yearsUntil > 0) {
      return {
        stage: 'Late Perimenopause',
        cssClass: 'stage-late-peri',
        description: 'Symptoms often intensify. Periods become very irregular with longer gaps.',
        key: 'late-peri'
      };
    } else if (yearsUntil > -2) {
      return {
        stage: 'Menopause Transition',
        cssClass: 'stage-meno',
        description: 'You are around the typical age for your final menstrual period.',
        key: 'meno'
      };
    } else {
      return {
        stage: 'Post-menopause',
        cssClass: 'stage-post',
        description: 'You have likely passed menopause. Focus on long-term health maintenance.',
        key: 'post'
      };
    }
  }

  function scoreSeverity(count) {
    for (var i = 0; i < SEVERITY.length; i++) {
      if (count <= SEVERITY[i].max) return SEVERITY[i];
    }
    return SEVERITY[SEVERITY.length - 1];
  }

  // ---------- RISK FACTORS ----------

  function buildRiskFactors(inputs) {
    var risks = [];
    if (inputs.smoking === 'current') {
      risks.push('Current smoking is associated with reaching menopause 1-2 years earlier. Quitting can slow ovarian aging.');
    } else if (inputs.smoking === 'former') {
      risks.push('Former smoking may shift menopause timing by about 0.5-1 year earlier.');
    }
    if (inputs.bmi === 'underweight') {
      risks.push('Underweight BMI (under 18.5) is associated with earlier menopause due to lower estrogen production from adipose tissue.');
    }
    if (inputs.motherAge !== null && inputs.motherAge < 46) {
      risks.push('Your mother reached menopause before age 46, which is a strong predictor of earlier menopause for you.');
    }
    if (inputs.menarcheAge !== null && inputs.menarcheAge >= 15) {
      risks.push('Late menarche (first period at age ' + inputs.menarcheAge + ') has a weak association with slightly earlier menopause.');
    }
    return risks;
  }

  // ---------- WHAT TO EXPECT ----------

  function getExpectContent(stageKey) {
    var content = {
      'pre': '<ul>' +
        '<li>Regular menstrual cycles with predictable timing</li>' +
        '<li>Stable hormone levels (estrogen and progesterone)</li>' +
        '<li>This is a good time to establish bone health habits: weight-bearing exercise, adequate calcium (1000mg/day) and vitamin D</li>' +
        '<li>Annual gynecological exams remain important</li>' +
        '</ul>',
      'early-peri': '<ul>' +
        '<li>Cycles may start varying by 7+ days from your usual pattern</li>' +
        '<li>Occasional hot flashes, especially at night</li>' +
        '<li>Sleep may become less restful</li>' +
        '<li>Some women notice mood changes or increased anxiety</li>' +
        '<li>Fertility declines but pregnancy is still possible — contraception is still needed if not desired</li>' +
        '<li>Consider tracking your cycles to monitor changes</li>' +
        '</ul>',
      'late-peri': '<ul>' +
        '<li>Periods become very irregular with gaps of 60+ days</li>' +
        '<li>Hot flashes and night sweats often increase in frequency</li>' +
        '<li>Vaginal dryness may become noticeable</li>' +
        '<li>Sleep disruption may worsen</li>' +
        '<li>Brain fog and memory lapses are common and usually temporary</li>' +
        '<li>This is the most symptomatic phase for many women — treatments are available</li>' +
        '</ul>',
      'meno': '<ul>' +
        '<li>Your final menstrual period likely occurred recently or is imminent</li>' +
        '<li>Menopause is confirmed after 12 consecutive months without a period</li>' +
        '<li>Symptoms may persist but often begin improving within 1-2 years</li>' +
        '<li>Bone density begins declining more rapidly — discuss screening with your doctor</li>' +
        '<li>Cardiovascular risk factors may change — monitor blood pressure and cholesterol</li>' +
        '</ul>',
      'post': '<ul>' +
        '<li>Many symptoms gradually improve, though some women experience hot flashes for years</li>' +
        '<li>Vaginal dryness may persist or worsen — effective treatments are available</li>' +
        '<li>Bone density monitoring becomes important (DEXA scan recommended)</li>' +
        '<li>Heart health awareness: cardiovascular disease risk increases after menopause</li>' +
        '<li>Continue regular health screenings including mammograms and bone density tests</li>' +
        '</ul>'
    };
    return content[stageKey] || '';
  }

  // ---------- WHEN TO SEE A DOCTOR ----------

  function getDoctorContent(stageKey, symptomCount) {
    var html = '<ul>';
    html += '<li>Symptoms before age 40 (may indicate premature ovarian insufficiency)</li>';
    html += '<li>Very heavy menstrual bleeding or bleeding after menopause</li>';
    html += '<li>Severe mood changes, depression, or anxiety that affect daily life</li>';
    html += '<li>Symptoms that significantly disrupt sleep, work, or relationships</li>';
    html += '<li>Any vaginal bleeding after 12+ months without a period</li>';

    if (symptomCount >= 5) {
      html += '<li><strong>Based on your symptom score, consider scheduling an appointment to discuss symptom management options including hormone therapy (HT), non-hormonal medications, and lifestyle modifications.</strong></li>';
    }

    html += '</ul>';

    if (stageKey === 'late-peri' || stageKey === 'meno') {
      html += '<p style="font-size:14px;color:#555;">At your estimated stage, this is a good time to discuss menopause management with your healthcare provider, even if symptoms are mild. Early intervention often produces better outcomes.</p>';
    }

    return html;
  }

  // ---------- RECOMMENDATIONS ----------

  function getRecommendations(stageKey) {
    var recs = {
      'pre': [
        'Establish a regular exercise routine including weight-bearing activities for bone health',
        'Ensure adequate calcium intake (1,000 mg/day) and vitamin D (600-800 IU/day)',
        'Track your menstrual cycles to establish your baseline pattern',
        'Maintain a healthy weight — both underweight and obesity affect menopause timing',
        'If you smoke, quitting now may delay menopause onset by 1-2 years'
      ],
      'early-peri': [
        'Continue or start regular exercise — it helps manage mood, sleep, and weight during the transition',
        'Keep tracking your cycles to monitor changes in pattern and flow',
        'Practice good sleep hygiene: consistent bedtime, cool bedroom, limited screen time',
        'Consider stress management techniques (meditation, yoga) for mood stability',
        'Discuss contraception with your doctor — pregnancy is still possible',
        'Increase calcium to 1,200 mg/day as recommended by ACOG'
      ],
      'late-peri': [
        'Talk to your doctor about symptom management options including hormone therapy',
        'For hot flashes: dress in layers, keep your environment cool, identify triggers',
        'Vaginal moisturizers and lubricants can help with dryness',
        'Regular weight-bearing exercise is critical for bone preservation',
        'Cognitive symptoms (brain fog) are usually temporary — stay mentally active',
        'Consider a DEXA bone density scan baseline if you have risk factors'
      ],
      'meno': [
        'Discuss hormone therapy (HT) with your doctor if symptoms are bothersome — it is most effective when started within 10 years of menopause',
        'Get a baseline DEXA bone density scan',
        'Monitor cardiovascular risk factors: blood pressure, cholesterol, blood sugar',
        'Maintain regular exercise (150 min/week moderate activity recommended)',
        'Vaginal estrogen is safe and effective for urogenital symptoms even for women who cannot take systemic HT',
        'Stay social and mentally active to support cognitive health'
      ],
      'post': [
        'Continue regular health screenings: mammogram, bone density, cardiovascular risk assessment',
        'Weight-bearing exercise and balance training help prevent fractures',
        'Adequate protein intake supports muscle and bone health',
        'Vaginal estrogen remains an option for persistent urogenital symptoms',
        'Stay connected socially — relationships support mental health in this stage',
        'Review medications annually with your doctor as needs change after menopause'
      ]
    };
    return recs[stageKey] || [];
  }

  // ---------- TIMELINE VISUALIZATION ----------

  function renderTimeline(container, currentAge, prediction) {
    var menoAge = prediction.mostLikely;
    var periStart = menoAge - 7; // average perimenopause duration ~7 years
    var earlyPeriEnd = menoAge - 3;
    var postStart = menoAge + 1;

    // Timeline spans from age 35 to 60
    var tMin = 35;
    var tMax = 60;
    var tRange = tMax - tMin;

    function pct(age) {
      var p = ((age - tMin) / tRange) * 100;
      return Math.max(0, Math.min(100, p));
    }

    var prePct = pct(periStart);
    var earlyPct = pct(earlyPeriEnd) - prePct;
    var latePct = pct(menoAge) - pct(earlyPeriEnd);
    var menoPct = pct(postStart) - pct(menoAge);
    var postPct = 100 - pct(postStart);

    var html = '';
    html += '<div style="font-size:13px;color:#555;margin-bottom:4px;">Your estimated menopause transition timeline</div>';
    html += '<div class="timeline-bar" style="position:relative;">';
    html += '<div class="timeline-segment pre" style="width:' + prePct + '%;" title="Pre-menopause">Pre</div>';
    html += '<div class="timeline-segment early-peri" style="width:' + earlyPct + '%;" title="Early Perimenopause">Early Peri</div>';
    html += '<div class="timeline-segment late-peri" style="width:' + latePct + '%;" title="Late Perimenopause">Late Peri</div>';
    html += '<div class="timeline-segment meno" style="width:' + menoPct + '%;" title="Menopause">Meno</div>';
    html += '<div class="timeline-segment post" style="width:' + postPct + '%;" title="Post-menopause">Post</div>';

    // Current age marker
    var markerPos = pct(currentAge);
    if (markerPos >= 0 && markerPos <= 100) {
      html += '<div class="timeline-marker" style="left:' + markerPos + '%;" data-label="You (' + currentAge + ')"></div>';
    }

    html += '</div>'; // end timeline-bar

    html += '<div class="timeline-labels">';
    html += '<span>' + tMin + '</span>';
    html += '<span>' + Math.round((tMin + tMax) / 2) + '</span>';
    html += '<span>' + tMax + '</span>';
    html += '</div>';

    html += '<div class="timeline-legend">';
    html += '<span class="legend-item"><span class="legend-dot" style="background:#16a34a;"></span> Pre-menopause</span>';
    html += '<span class="legend-item"><span class="legend-dot" style="background:#d97706;"></span> Early Perimenopause</span>';
    html += '<span class="legend-item"><span class="legend-dot" style="background:#ea580c;"></span> Late Perimenopause</span>';
    html += '<span class="legend-item"><span class="legend-dot" style="background:#dc2626;"></span> Menopause</span>';
    html += '<span class="legend-item"><span class="legend-dot" style="background:#6366f1;"></span> Post-menopause</span>';
    html += '</div>';

    container.innerHTML = html;
  }

  // ---------- SYMPTOM DISPLAY ----------

  function renderSymptoms(checked) {
    var section = $('symptomResults');
    var scoreEl = $('symptomScore');
    var breakdownEl = $('symptomBreakdown');

    if (checked.length === 0) {
      hide(section);
      return;
    }

    show(section);

    var severity = scoreSeverity(checked.length);
    var pctFill = (checked.length / 10) * 100;

    scoreEl.innerHTML =
      '<span class="symptom-label text-' + severity.cssClass + '">' + severity.label + ' (' + checked.length + '/10 symptoms)</span>' +
      '<div class="symptom-score-bar"><div class="symptom-score-fill severity-' + severity.cssClass + '" style="width:' + pctFill + '%;"></div></div>';

    if (severity.cssClass === 'significant') {
      scoreEl.innerHTML += '<p style="color:#dc2626;font-weight:600;font-size:14px;">Your symptom load is significant. We strongly recommend speaking with a healthcare provider about symptom management options.</p>';
    } else if (severity.cssClass === 'moderate') {
      scoreEl.innerHTML += '<p style="color:#ea580c;font-size:14px;">Moderate symptom load. Consider discussing these with your doctor, especially if they affect your quality of life.</p>';
    }

    var tags = '';
    checked.forEach(function (val) {
      tags += '<span class="symptom-tag">' + (SYMPTOM_NAMES[val] || val) + '</span>';
    });
    breakdownEl.innerHTML = '<div class="symptom-list">' + tags + '</div>';
  }

  // ---------- MAIN CALCULATE ----------

  function calculate() {
    // Clear errors
    $('ageError').textContent = '';
    $('motherError').textContent = '';
    hide($('results'));

    // Gather inputs
    var currentAge = parseInt($('currentAge').value);
    if (isNaN(currentAge) || currentAge < 25 || currentAge > 65) {
      $('ageError').textContent = 'Please enter an age between 25 and 65';
      return;
    }

    var motherUnknown = $('motherUnknown').checked;
    var motherAge = null;
    if (!motherUnknown) {
      var mVal = parseInt($('motherAge').value);
      if (!isNaN(mVal) && mVal >= 30 && mVal <= 65) {
        motherAge = mVal;
      }
      // not required — will use baseline if missing
    }

    var sisterNA = $('sisterNA').checked;
    var sisterAge = null;
    if (!sisterNA) {
      var sVal = parseInt($('sisterAge').value);
      if (!isNaN(sVal) && sVal >= 30 && sVal <= 65) {
        sisterAge = sVal;
      }
    }

    var inputs = {
      currentAge: currentAge,
      ethnicity: $('ethnicity').value,
      motherAge: motherAge,
      sisterAge: sisterAge,
      smoking: $('smokingStatus').value,
      bmi: $('bmiCategory').value,
      menarcheAge: parseInt($('menarcheAge').value) || null,
      pregnancies: $('pregnancies').value,
      contraceptive: $('contraceptiveUse').value
    };

    // Validate menarche if provided
    if (inputs.menarcheAge !== null && (inputs.menarcheAge < 8 || inputs.menarcheAge > 18)) {
      inputs.menarcheAge = null;
    }

    // Run prediction
    var prediction = predict(inputs);
    var stage = assessStage(currentAge, prediction.mostLikely);

    // Symptoms
    var checkedSymptoms = [];
    var boxes = document.querySelectorAll('input[name="symptom"]:checked');
    boxes.forEach(function (cb) { checkedSymptoms.push(cb.value); });

    // -- RENDER RESULTS --

    // Age range
    $('ageRange').textContent = prediction.rangeLow + ' – ' + prediction.rangeHigh;
    $('mostLikely').textContent = 'Most likely around age ' + prediction.mostLikely;

    // Stage badge
    $('currentStage').textContent = stage.stage;
    $('currentStage').className = 'stage-badge ' + stage.cssClass;
    $('stageDescription').textContent = stage.description;

    // Timeline
    renderTimeline($('timelineContainer'), currentAge, prediction);

    // Symptoms
    renderSymptoms(checkedSymptoms);

    // Risk factors
    var risks = buildRiskFactors(inputs);
    if (risks.length > 0) {
      show($('riskFactors'));
      var riskHtml = '';
      risks.forEach(function (r) {
        riskHtml += '<div class="risk-item"><span class="risk-icon">&#9888;</span><span>' + r + '</span></div>';
      });
      $('riskList').innerHTML = riskHtml;
    } else {
      hide($('riskFactors'));
    }

    // What to expect
    $('expectContent').innerHTML = getExpectContent(stage.key);

    // When to see a doctor
    $('doctorContent').innerHTML = getDoctorContent(stage.key, checkedSymptoms.length);

    // Recommendations
    var recs = getRecommendations(stage.key);
    var recsHtml = '';
    recs.forEach(function (r) {
      recsHtml += '<div class="rec-item">' + r + '</div>';
    });
    $('recsContent').innerHTML = recsHtml;

    // Show results
    show($('results'));
    $('results').scrollIntoView({ behavior: 'smooth' });

    // Content loops
    if (typeof showNextSteps === 'function') {
      showNextSteps('menopause', collectUserData());
    }
  }

  // ---------- EVENT LISTENERS ----------

  document.addEventListener('DOMContentLoaded', function () {
    $('calculateBtn').addEventListener('click', calculate);

    // Toggle mother age input when "Don't know" is checked
    $('motherUnknown').addEventListener('change', function () {
      $('motherAge').disabled = this.checked;
      if (this.checked) $('motherAge').value = '';
    });

    // Toggle sister age input when "N/A" is checked
    $('sisterNA').addEventListener('change', function () {
      $('sisterAge').disabled = this.checked;
      if (this.checked) $('sisterAge').value = '';
    });
  });
})();
