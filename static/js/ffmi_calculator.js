document.addEventListener('DOMContentLoaded', function() {
  var weightInput = document.getElementById('weight');
  var weightUnitSelect = document.getElementById('weight-unit');
  var heightFtInput = document.getElementById('height-ft');
  var heightInInput = document.getElementById('height-in');
  var heightCmInput = document.getElementById('height-cm');
  var heightSystem = document.getElementById('height-system');
  var bodyFatInput = document.getElementById('body-fat');
  var sexSelect = document.getElementById('sex');
  var calculateBtn = document.getElementById('calculate-btn');
  var resultsSection = document.getElementById('results-section');

  var imperialHeight = document.getElementById('imperial-height');
  var metricHeight = document.getElementById('metric-height');
  heightSystem.addEventListener('change', function() {
    if (heightSystem.value === 'imperial') {
      imperialHeight.classList.remove('hidden');
      metricHeight.classList.add('hidden');
    } else {
      imperialHeight.classList.add('hidden');
      metricHeight.classList.remove('hidden');
    }
  });

  function classifyMale(ffmi) {
    if (ffmi < 17) return { label: 'Below Average', color: '#c27a0e', desc: 'Below average muscle mass for a man. Consistent with untrained or underweight individuals.' };
    if (ffmi < 18) return { label: 'Below Average', color: '#c27a0e', desc: 'Below average lean mass. Room for significant muscle growth with proper training and nutrition.' };
    if (ffmi < 20) return { label: 'Average', color: '#555', desc: 'Average range for the general male population. Typical of men with some recreational activity.' };
    if (ffmi < 22) return { label: 'Above Average', color: '#1a8a4a', desc: 'Above average muscularity. Consistent with regular resistance training (1-3 years).' };
    if (ffmi < 23) return { label: 'Excellent', color: '#1a8a4a', desc: 'Excellent muscularity. Consistent with dedicated resistance training (3-5+ years).' };
    if (ffmi < 25) return { label: 'Superior', color: '#0a7e8c', desc: 'Superior muscularity, approaching the commonly cited natural genetic limit (~25). Consistent with years of dedicated training, optimized nutrition, and favorable genetics.' };
    if (ffmi < 27) return { label: 'Suspicious', color: '#c03030', desc: 'Above the commonly cited natural limit of ~25 (Kouri et al., 1995). While rare genetic outliers exist, values in this range raise the possibility of anabolic steroid use.' };
    return { label: 'Very Likely Enhanced', color: '#c03030', desc: 'Well above the natural limit observed in pre-steroid-era athletes. Values this high are almost exclusively seen in individuals using anabolic steroids or other performance-enhancing drugs.' };
  }

  function classifyFemale(ffmi) {
    if (ffmi < 13) return { label: 'Below Average', color: '#c27a0e', desc: 'Below average muscle mass for a woman. May indicate underweight or very low muscle mass.' };
    if (ffmi < 14) return { label: 'Below Average', color: '#c27a0e', desc: 'Below average lean mass. Room for significant muscle growth with proper training.' };
    if (ffmi < 17) return { label: 'Average', color: '#555', desc: 'Average range for the general female population. Typical of women with some physical activity.' };
    if (ffmi < 18) return { label: 'Above Average', color: '#1a8a4a', desc: 'Above average muscularity for a woman. Consistent with regular resistance training.' };
    if (ffmi < 19) return { label: 'Excellent', color: '#1a8a4a', desc: 'Excellent muscularity. Consistent with dedicated resistance training over several years.' };
    if (ffmi < 21) return { label: 'Superior', color: '#0a7e8c', desc: 'Superior muscularity, approaching the estimated natural limit for women. Reflects years of dedicated training with favorable genetics.' };
    if (ffmi < 23) return { label: 'Suspicious', color: '#c03030', desc: 'Above the estimated natural limit for women (~21). While less studied than men, this range raises the possibility of performance-enhancing drug use.' };
    return { label: 'Very Likely Enhanced', color: '#c03030', desc: 'Well above the estimated natural female limit. Values this high are extremely rare without pharmacological assistance.' };
  }

  calculateBtn.addEventListener('click', function() {
    var weight = parseFloat(weightInput.value);
    var isLbs = weightUnitSelect.value === 'lbs';
    var bodyFat = parseFloat(bodyFatInput.value);
    var sex = sexSelect.value;

    if (isNaN(weight) || weight <= 0) { alert('Please enter your body weight.'); return; }
    if (isNaN(bodyFat) || bodyFat < 1 || bodyFat > 60) { alert('Please enter a valid body fat percentage (1-60%).'); return; }

    var heightM;
    if (heightSystem.value === 'imperial') {
      var ft = parseFloat(heightFtInput.value) || 0;
      var inches = parseFloat(heightInInput.value) || 0;
      heightM = (ft * 12 + inches) * 0.0254;
    } else {
      heightM = (parseFloat(heightCmInput.value) || 0) / 100;
    }
    if (isNaN(heightM) || heightM <= 0) { alert('Please enter your height.'); return; }

    var weightKg = isLbs ? weight * 0.4536 : weight;
    var weightLbs = isLbs ? weight : weight * 2.2046;

    // Calculations
    var fatFreeMassKg = weightKg * (1 - bodyFat / 100);
    var fatFreeMassLbs = fatFreeMassKg * 2.2046;
    var ffmi = fatFreeMassKg / (heightM * heightM);
    var normalizedFfmi = ffmi + 6.1 * (1.8 - heightM);
    var fatMassKg = weightKg - fatFreeMassKg;

    var classification = sex === 'male' ? classifyMale(normalizedFfmi) : classifyFemale(normalizedFfmi);

    // Show results
    resultsSection.classList.remove('hidden');

    var heroEl = document.getElementById('ffmi-result');
    heroEl.textContent = normalizedFfmi.toFixed(1);
    if (typeof animateCountUp === 'function') {
      animateCountUp(heroEl, 0, normalizedFfmi, 1, '');
    }

    document.getElementById('ffmi-label').textContent = 'Normalized FFMI \u2014 ' + classification.label;

    // Status
    var statusEl = document.getElementById('ffmi-status');
    var iconEl = document.getElementById('ffmi-icon');
    var descEl = document.getElementById('ffmi-description');

    if (classification.label === 'Below Average' || classification.label === 'Average') {
      statusEl.className = 'result-status status-warning';
      iconEl.textContent = '\u26A0';
    } else if (classification.label === 'Suspicious' || classification.label === 'Very Likely Enhanced') {
      statusEl.className = 'result-status status-danger';
      iconEl.textContent = '\u26A0';
    } else {
      statusEl.className = 'result-status status-good';
      iconEl.textContent = '\u2713';
    }
    descEl.textContent = classification.desc;

    // Comparison boxes
    document.getElementById('comp-ffmi').textContent = normalizedFfmi.toFixed(1);
    document.getElementById('comp-ffmi').style.color = classification.color;
    document.getElementById('comp-lean').textContent = fatFreeMassKg.toFixed(1) + ' kg';
    document.getElementById('comp-class').textContent = classification.label;
    document.getElementById('comp-class').style.color = classification.color;

    // Breakdown
    document.getElementById('display-ffmi-raw').textContent = ffmi.toFixed(2) + ' kg/m\u00B2';
    document.getElementById('display-ffmi-norm').textContent = normalizedFfmi.toFixed(2) + ' kg/m\u00B2 (adjusted to 1.80m)';
    document.getElementById('display-lean-kg').textContent = fatFreeMassKg.toFixed(1) + ' kg (' + fatFreeMassLbs.toFixed(1) + ' lbs)';
    document.getElementById('display-fat-kg').textContent = fatMassKg.toFixed(1) + ' kg (' + (fatMassKg * 2.2046).toFixed(1) + ' lbs)';
    document.getElementById('display-bf').textContent = bodyFat + '%';
    document.getElementById('display-classification').textContent = classification.label;
    document.getElementById('display-classification').style.color = classification.color;

    // Gauge
    var naturalLimit = sex === 'male' ? 25 : 21;
    var gaugeMax = sex === 'male' ? 30 : 25;
    var gaugePct = Math.min(normalizedFfmi / gaugeMax * 100, 100);
    var limitPct = naturalLimit / gaugeMax * 100;
    document.getElementById('ffmi-gauge-fill').style.width = gaugePct + '%';
    document.getElementById('ffmi-gauge-fill').style.background = classification.color;
    document.getElementById('ffmi-gauge-label').textContent = normalizedFfmi.toFixed(1) + ' / ' + gaugeMax;
    document.getElementById('ffmi-limit-marker').style.left = limitPct + '%';
    document.getElementById('ffmi-limit-label').textContent = 'Natural limit ~' + naturalLimit;

    // Classification table
    var tbody = document.getElementById('class-tbody');
    tbody.innerHTML = '';
    var tiers = sex === 'male' ? [
      { range: '< 17', label: 'Below Average' },
      { range: '17 \u2013 18', label: 'Below Average' },
      { range: '18 \u2013 20', label: 'Average' },
      { range: '20 \u2013 22', label: 'Above Average' },
      { range: '22 \u2013 23', label: 'Excellent' },
      { range: '23 \u2013 25', label: 'Superior' },
      { range: '25 \u2013 27', label: 'Suspicious' },
      { range: '> 27', label: 'Very Likely Enhanced' }
    ] : [
      { range: '< 13', label: 'Below Average' },
      { range: '13 \u2013 14', label: 'Below Average' },
      { range: '14 \u2013 17', label: 'Average' },
      { range: '17 \u2013 18', label: 'Above Average' },
      { range: '18 \u2013 19', label: 'Excellent' },
      { range: '19 \u2013 21', label: 'Superior' },
      { range: '21 \u2013 23', label: 'Suspicious' },
      { range: '> 23', label: 'Very Likely Enhanced' }
    ];

    for (var i = 0; i < tiers.length; i++) {
      var t = tiers[i];
      var tr = document.createElement('tr');
      var isCurrent = t.label === classification.label;
      if (isCurrent && !tr._marked) {
        tr.style.background = '#f0f9ff';
        tr.style.fontWeight = '600';
        tr._marked = true;
      }
      tr.innerHTML =
        '<td style="padding:6px 10px;border-bottom:1px solid #f0f0f0;">' + t.range + '</td>' +
        '<td style="padding:6px 10px;border-bottom:1px solid #f0f0f0;">' + t.label + (isCurrent ? ' \u2190' : '') + '</td>';
      tbody.appendChild(tr);
    }

    resultsSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    if (typeof celebratePulse === 'function') {
      celebratePulse(document.getElementById('result-hero'));
    }
    if (typeof showNextSteps === 'function') {
      showNextSteps('ffmi', { weight_kg: weightKg, height_cm: heightM * 100, gender: sex });
    }
  });
});
