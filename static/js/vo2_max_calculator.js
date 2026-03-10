document.addEventListener('DOMContentLoaded', function() {
  var methodSelect = document.getElementById('test-method');
  var calculateBtn = document.getElementById('calculate-btn');
  var resultsSection = document.getElementById('results-section');
  var methodPanels = document.querySelectorAll('.method-panel');

  // Show/hide method-specific inputs
  methodSelect.addEventListener('change', function() {
    methodPanels.forEach(function(p) { p.classList.add('hidden'); });
    var panel = document.getElementById('panel-' + methodSelect.value);
    if (panel) panel.classList.remove('hidden');
  });
  // Trigger on load
  methodSelect.dispatchEvent(new Event('change'));

  calculateBtn.addEventListener('click', calculate);

  // Classification tables (Cooper Institute, revised 1997)
  // [Very Poor, Poor, Below Avg, Average, Above Avg, Good, Excellent] thresholds (lower bound)
  var maleTable = {
    '18-25': [0, 30, 37, 42, 47, 52, 60],
    '26-35': [0, 30, 35, 40, 43, 49, 56],
    '36-45': [0, 26, 31, 35, 39, 43, 51],
    '46-55': [0, 25, 29, 32, 36, 39, 45],
    '56-65': [0, 22, 26, 30, 32, 36, 41],
    '66+':   [0, 20, 22, 26, 29, 33, 37]
  };
  var femaleTable = {
    '18-25': [0, 28, 33, 38, 42, 47, 56],
    '26-35': [0, 26, 31, 35, 39, 45, 52],
    '36-45': [0, 22, 27, 31, 34, 38, 45],
    '46-55': [0, 20, 25, 28, 31, 34, 40],
    '56-65': [0, 18, 22, 25, 28, 32, 37],
    '66+':   [0, 17, 19, 22, 25, 28, 32]
  };
  var labels = ['Very Poor', 'Poor', 'Below Average', 'Average', 'Above Average', 'Good', 'Excellent'];
  var labelColors = ['#c03030', '#c03030', '#c27a0e', '#c27a0e', '#1a8a4a', '#1a8a4a', '#0a7e8c'];

  function getAgeGroup(age) {
    if (age <= 25) return '18-25';
    if (age <= 35) return '26-35';
    if (age <= 45) return '36-45';
    if (age <= 55) return '46-55';
    if (age <= 65) return '56-65';
    return '66+';
  }

  function classify(vo2, age, sex) {
    var table = sex === 'male' ? maleTable : femaleTable;
    var group = getAgeGroup(age);
    var thresholds = table[group];
    for (var i = thresholds.length - 1; i >= 0; i--) {
      if (vo2 >= thresholds[i]) return { label: labels[i], color: labelColors[i], index: i };
    }
    return { label: labels[0], color: labelColors[0], index: 0 };
  }

  // Estimate "fitness age" — find the age group where this VO2 is "Average"
  function fitnessAge(vo2, sex) {
    var table = sex === 'male' ? maleTable : femaleTable;
    var groups = ['18-25', '26-35', '36-45', '46-55', '56-65', '66+'];
    var midpoints = [21, 30, 40, 50, 60, 70];
    // Find which age group this VO2 would be "Average" in (index 3)
    for (var i = 0; i < groups.length; i++) {
      if (vo2 >= table[groups[i]][3]) {
        return midpoints[i];
      }
    }
    return midpoints[midpoints.length - 1] + 5; // Above 70
  }

  function calculate() {
    var method = methodSelect.value;
    var vo2 = null;
    var age = null;
    var sex = null;

    switch (method) {
      case 'cooper':
        var dist = parseFloat(document.getElementById('cooper-distance').value);
        var distUnit = document.getElementById('cooper-unit').value;
        age = parseInt(document.getElementById('cooper-age').value, 10);
        sex = document.getElementById('cooper-sex').value;
        if (isNaN(dist) || dist <= 0) { alert('Please enter the distance you ran.'); return; }
        if (isNaN(age) || age < 15 || age > 100) { alert('Please enter your age (15-100).'); return; }
        var distM = distUnit === 'miles' ? dist * 1609.34 : (distUnit === 'km' ? dist * 1000 : dist);
        // Cooper (1968): VO2max = (d - 504.9) / 44.73
        vo2 = (distM - 504.9) / 44.73;
        break;

      case 'mile-run':
        var mins = parseInt(document.getElementById('run-minutes').value, 10);
        var secs = parseInt(document.getElementById('run-seconds').value, 10) || 0;
        age = parseInt(document.getElementById('run-age').value, 10);
        sex = document.getElementById('run-sex').value;
        if (isNaN(mins) || mins < 0) { alert('Please enter your run time.'); return; }
        if (isNaN(age) || age < 15 || age > 100) { alert('Please enter your age.'); return; }
        var totalMin = mins + secs / 60;
        if (totalMin <= 0) { alert('Please enter a valid time.'); return; }
        // George et al.: VO2max = 483 / time_min + 3.5
        vo2 = 483 / totalMin + 3.5;
        break;

      case 'rockport':
        var walkMin = parseInt(document.getElementById('walk-minutes').value, 10);
        var walkSec = parseInt(document.getElementById('walk-seconds').value, 10) || 0;
        var walkWeight = parseFloat(document.getElementById('walk-weight').value);
        var walkWeightUnit = document.getElementById('walk-weight-unit').value;
        var walkHR = parseInt(document.getElementById('walk-hr').value, 10);
        age = parseInt(document.getElementById('walk-age').value, 10);
        sex = document.getElementById('walk-sex').value;
        if (isNaN(walkMin) || walkMin < 0) { alert('Please enter your walk time.'); return; }
        if (isNaN(walkWeight) || walkWeight <= 0) { alert('Please enter your weight.'); return; }
        if (isNaN(walkHR) || walkHR < 40 || walkHR > 220) { alert('Please enter your heart rate (40-220).'); return; }
        if (isNaN(age) || age < 15 || age > 100) { alert('Please enter your age.'); return; }
        var walkTime = walkMin + walkSec / 60;
        var weightLbs = walkWeightUnit === 'kg' ? walkWeight * 2.205 : walkWeight;
        var genderVal = sex === 'male' ? 1 : 0;
        // Kline et al. (1987)
        vo2 = 132.853 - (0.0769 * weightLbs) - (0.3877 * age) + (6.315 * genderVal) - (3.2649 * walkTime) - (0.1565 * walkHR);
        break;

      case 'step':
        var stepHR = parseInt(document.getElementById('step-hr').value, 10);
        age = parseInt(document.getElementById('step-age').value, 10);
        sex = document.getElementById('step-sex').value;
        if (isNaN(stepHR) || stepHR < 40 || stepHR > 220) { alert('Please enter your recovery heart rate (40-220).'); return; }
        if (isNaN(age) || age < 15 || age > 100) { alert('Please enter your age.'); return; }
        // McArdle (Queens College Step Test)
        vo2 = sex === 'male' ? 111.33 - (0.42 * stepHR) : 65.81 - (0.1847 * stepHR);
        break;

      case 'hr-ratio':
        var hrMax = document.getElementById('hr-max').value;
        var hrRest = parseInt(document.getElementById('hr-rest').value, 10);
        age = parseInt(document.getElementById('hr-age').value, 10);
        sex = document.getElementById('hr-sex').value;
        if (isNaN(age) || age < 15 || age > 100) { alert('Please enter your age.'); return; }
        if (isNaN(hrRest) || hrRest < 30 || hrRest > 120) { alert('Please enter your resting heart rate (30-120).'); return; }
        var maxHR;
        if (hrMax === '' || isNaN(parseInt(hrMax, 10))) {
          // Tanaka formula: HRmax = 208 - 0.7 * age
          maxHR = 208 - 0.7 * age;
        } else {
          maxHR = parseInt(hrMax, 10);
        }
        // Uth et al. (2004)
        vo2 = 15.3 * (maxHR / hrRest);
        break;

      case 'non-exercise':
        age = parseInt(document.getElementById('ne-age').value, 10);
        sex = document.getElementById('ne-sex').value;
        var neWeight = parseFloat(document.getElementById('ne-weight').value);
        var neWeightUnit = document.getElementById('ne-weight-unit').value;
        var neHeight = parseFloat(document.getElementById('ne-height').value);
        var neHeightUnit = document.getElementById('ne-height-unit').value;
        var par = parseInt(document.getElementById('ne-par').value, 10);
        if (isNaN(age) || age < 15 || age > 100) { alert('Please enter your age.'); return; }
        if (isNaN(neWeight) || neWeight <= 0) { alert('Please enter your weight.'); return; }
        if (isNaN(neHeight) || neHeight <= 0) { alert('Please enter your height.'); return; }
        // Calculate BMI
        var heightM = neHeightUnit === 'in' ? neHeight * 0.0254 : neHeight / 100;
        var weightKg = neWeightUnit === 'lbs' ? neWeight / 2.205 : neWeight;
        var bmi = weightKg / (heightM * heightM);
        var gVal = sex === 'male' ? 1 : 0;
        // Jackson et al. (1990) BMI version
        vo2 = 56.363 + 1.921 * par - 0.381 * age - 0.754 * bmi + 10.987 * gVal;
        break;
    }

    if (vo2 === null || isNaN(vo2)) {
      alert('Could not calculate. Please check your inputs.');
      return;
    }

    // Clamp to reasonable range
    vo2 = Math.max(10, Math.min(100, vo2));

    // Get classification
    if (!age) age = 30;
    if (!sex) sex = 'male';
    var classification = classify(vo2, age, sex);
    var fitAge = fitnessAge(vo2, sex);

    // Display results
    document.getElementById('vo2-result').textContent = vo2.toFixed(1);
    document.getElementById('vo2-category').textContent = classification.label;
    document.getElementById('vo2-category').style.color = classification.color;

    var statusEl = document.getElementById('vo2-status');
    statusEl.className = 'result-status';
    if (classification.index >= 5) statusEl.classList.add('status-good');
    else if (classification.index >= 3) statusEl.classList.add('status-warning');
    else statusEl.classList.add('status-danger');
    document.getElementById('vo2-status-text').textContent = getStatusMessage(classification.label, vo2);

    // Summary boxes
    document.getElementById('comp-vo2').textContent = vo2.toFixed(1) + ' ml/kg/min';
    document.getElementById('comp-category').textContent = classification.label;
    document.getElementById('comp-category').style.color = classification.color;
    document.getElementById('comp-fitness-age').textContent = fitAge < 75 ? '~' + fitAge + ' years' : '70+';

    // Breakdown
    document.getElementById('display-vo2').textContent = vo2.toFixed(1) + ' ml/kg/min';
    document.getElementById('display-category').textContent = classification.label;
    document.getElementById('display-category').style.color = classification.color;
    document.getElementById('display-fitness-age').textContent = fitAge < 75 ? '~' + fitAge : '70+';
    document.getElementById('display-method').textContent = getMethodName(method);

    // MET equivalent
    var mets = vo2 / 3.5;
    document.getElementById('display-mets').textContent = mets.toFixed(1) + ' METs';

    // Classification table highlight
    buildClassTable(age, sex, vo2);

    resultsSection.classList.remove('hidden');
    resultsSection.classList.add('results-reveal');
    resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });

    if (typeof animateValue === 'function') {
      animateValue(document.getElementById('vo2-result'), 0, Math.round(vo2), 600);
    }

    if (typeof showNextSteps === 'function') {
      var weightKgForLoop = null;
      if (method === 'non-exercise') {
        var w = parseFloat(document.getElementById('ne-weight').value);
        var u = document.getElementById('ne-weight-unit').value;
        weightKgForLoop = u === 'lbs' ? Math.round(w / 2.205) : Math.round(w);
      }
      showNextSteps('vo2-max', {
        weight_kg: weightKgForLoop,
        age: age,
        gender: sex
      });
    }
  }

  function getMethodName(method) {
    var names = {
      'cooper': 'Cooper 12-Minute Run',
      'mile-run': '1.5-Mile Run',
      'rockport': 'Rockport Walking Test',
      'step': 'Queens College Step Test',
      'hr-ratio': 'Heart Rate Ratio (Uth)',
      'non-exercise': 'Non-Exercise Estimate (Jackson)'
    };
    return names[method] || method;
  }

  function getStatusMessage(label, vo2) {
    if (label === 'Excellent' || label === 'Good') return 'Your cardiovascular fitness is ' + label.toLowerCase() + ' for your age and sex. Higher VO2 max is associated with lower all-cause mortality risk.';
    if (label === 'Above Average' || label === 'Average') return 'Your fitness is ' + label.toLowerCase() + '. Increasing VO2 max by even 3.5 ml/kg/min (1 MET) is associated with a 13-15% reduction in mortality risk.';
    return 'Your fitness is ' + label.toLowerCase() + ' for your age group. Research shows that moving from low to moderate fitness reduces all-cause mortality by up to 50%.';
  }

  function buildClassTable(age, sex, vo2) {
    var table = sex === 'male' ? maleTable : femaleTable;
    var group = getAgeGroup(age);
    var thresholds = table[group];
    var tbody = document.getElementById('class-tbody');
    tbody.innerHTML = '';
    for (var i = 0; i < labels.length; i++) {
      var upper = i < labels.length - 1 ? thresholds[i + 1] - 0.1 : '+';
      var range = thresholds[i] + (upper === '+' ? '+' : ' – ' + upper.toFixed(1));
      var isYou = false;
      if (i === labels.length - 1) {
        isYou = vo2 >= thresholds[i];
      } else {
        isYou = vo2 >= thresholds[i] && vo2 < thresholds[i + 1];
      }
      var row = document.createElement('tr');
      if (isYou) row.style.background = 'var(--color-muted, #f5f3f0)';
      row.innerHTML =
        '<td style="padding: 7px 12px; border-bottom: 1px solid #f0f0f0; font-weight: 600; color:' + labelColors[i] + ';">' + labels[i] + (isYou ? ' <span style="font-size:0.75rem;color:var(--color-accent,#0a7e8c);">◀ You</span>' : '') + '</td>' +
        '<td style="padding: 7px 12px; border-bottom: 1px solid #f0f0f0;">' + range + '</td>';
      tbody.appendChild(row);
    }
  }

  // Toggle
  var toggleBtn = document.getElementById('toggle-info-btn');
  var infoPanel = document.getElementById('info-panel');
  if (toggleBtn && infoPanel) {
    toggleBtn.addEventListener('click', function() {
      infoPanel.classList.toggle('hidden');
      var icon = toggleBtn.querySelector('.toggle-icon');
      if (icon) icon.style.transform = infoPanel.classList.contains('hidden') ? '' : 'rotate(180deg)';
    });
  }
});
