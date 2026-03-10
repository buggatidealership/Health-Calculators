document.addEventListener('DOMContentLoaded', function() {
  var waistInput = document.getElementById('waist');
  var hipInput = document.getElementById('hip');
  var unitSelect = document.getElementById('unit');
  var sexSelect = document.getElementById('sex');
  var calculateBtn = document.getElementById('calculate-btn');
  var resultsSection = document.getElementById('results-section');

  calculateBtn.addEventListener('click', function() {
    var waist = parseFloat(waistInput.value);
    var hip = parseFloat(hipInput.value);
    var unit = unitSelect.value;
    var sex = sexSelect.value;

    if (isNaN(waist) || waist <= 0) {
      alert('Please enter your waist circumference.');
      return;
    }
    if (isNaN(hip) || hip <= 0) {
      alert('Please enter your hip circumference.');
      return;
    }
    if (waist > hip * 1.5) {
      alert('Please check your measurements — waist should not be much larger than hips.');
      return;
    }

    // Convert to cm for internal use
    var waistCm = unit === 'in' ? waist * 2.54 : waist;
    var hipCm = unit === 'in' ? hip * 2.54 : hip;
    var waistIn = unit === 'in' ? waist : waist / 2.54;
    var hipIn = unit === 'in' ? hip : hip / 2.54;

    // Core calculation
    var whr = waistCm / hipCm;

    // WHO risk categories by sex
    // Source: WHO Technical Report Series 894 (2000), Yusuf et al. Lancet 2005 (INTERHEART)
    var category, statusClass, riskDesc;

    if (sex === 'male') {
      if (whr < 0.90) {
        category = 'Low Risk';
        statusClass = 'status-good';
        riskDesc = 'Your waist-to-hip ratio is below the WHO threshold for increased cardiovascular risk in men (<0.90). This indicates a healthier fat distribution pattern.';
      } else if (whr < 0.95) {
        category = 'Moderate Risk';
        statusClass = 'status-warning';
        riskDesc = 'Your WHR is at or above 0.90 — the WHO threshold for substantially increased health risk in men. This suggests central (abdominal) fat accumulation, which is linked to higher cardiovascular and metabolic risk.';
      } else if (whr < 1.00) {
        category = 'High Risk';
        statusClass = 'status-danger';
        riskDesc = 'Your WHR of ' + whr.toFixed(2) + ' indicates significant central obesity. The INTERHEART study found that WHR in the top quintile more than doubled heart attack risk compared to the lowest quintile.';
      } else {
        category = 'Very High Risk';
        statusClass = 'status-danger';
        riskDesc = 'Your WHR of ' + whr.toFixed(2) + ' is well above the WHO risk threshold. Central obesity at this level is strongly associated with type 2 diabetes, cardiovascular disease, and increased mortality. Consider discussing with a healthcare provider.';
      }
    } else {
      if (whr < 0.80) {
        category = 'Low Risk';
        statusClass = 'status-good';
        riskDesc = 'Your waist-to-hip ratio is below the WHO threshold for increased cardiovascular risk in women (<0.80). This indicates a healthier fat distribution pattern.';
      } else if (whr < 0.85) {
        category = 'Moderate Risk';
        statusClass = 'status-warning';
        riskDesc = 'Your WHR is between 0.80 and 0.85. You are approaching the WHO threshold for substantially increased health risk in women (0.85). Monitor your waist circumference over time.';
      } else if (whr < 0.90) {
        category = 'High Risk';
        statusClass = 'status-danger';
        riskDesc = 'Your WHR of ' + whr.toFixed(2) + ' exceeds the WHO threshold of 0.85 for substantially increased health risk in women. This pattern of central fat distribution is linked to higher cardiovascular and metabolic risk.';
      } else {
        category = 'Very High Risk';
        statusClass = 'status-danger';
        riskDesc = 'Your WHR of ' + whr.toFixed(2) + ' is well above the WHO risk threshold for women. Central obesity at this level is strongly associated with type 2 diabetes, cardiovascular disease, and increased mortality. Consider discussing with a healthcare provider.';
      }
    }

    // Waist circumference risk (standalone, NHLBI/AHA guidelines)
    var waistRisk;
    if (sex === 'male') {
      if (waistCm < 94) {
        waistRisk = 'Normal (&lt;94 cm / 37 in)';
      } else if (waistCm < 102) {
        waistRisk = 'Increased risk (94-102 cm / 37-40 in)';
      } else {
        waistRisk = 'Substantially increased risk (&ge;102 cm / 40 in)';
      }
    } else {
      if (waistCm < 80) {
        waistRisk = 'Normal (&lt;80 cm / 31.5 in)';
      } else if (waistCm < 88) {
        waistRisk = 'Increased risk (80-88 cm / 31.5-34.6 in)';
      } else {
        waistRisk = 'Substantially increased risk (&ge;88 cm / 34.6 in)';
      }
    }

    // Body shape classification
    var bodyShape;
    if (sex === 'male') {
      if (whr < 0.90) bodyShape = 'Balanced / rectangular';
      else bodyShape = 'Apple-shaped (central)';
    } else {
      if (whr < 0.75) bodyShape = 'Pear-shaped (peripheral)';
      else if (whr < 0.80) bodyShape = 'Balanced';
      else bodyShape = 'Apple-shaped (central)';
    }

    // Show results
    resultsSection.classList.remove('hidden');

    var heroEl = document.getElementById('whr-result');
    var labelEl = document.getElementById('whr-label');
    heroEl.textContent = whr.toFixed(2);
    labelEl.textContent = category;

    if (typeof animateCountUp === 'function') {
      animateCountUp(heroEl, 0, whr, 2, '');
    }

    // Status
    var statusEl = document.getElementById('whr-status');
    var iconEl = document.getElementById('whr-icon');
    var descEl = document.getElementById('whr-description');
    statusEl.className = 'result-status ' + statusClass;
    iconEl.textContent = statusClass === 'status-good' ? '✓' : '⚠';
    descEl.textContent = riskDesc;

    // Gauge
    // Map WHR to 0-100% position on gauge
    // Gauge range: 0.60 to 1.10
    var gaugeMin = 0.60;
    var gaugeMax = 1.10;
    var gaugePos = Math.min(Math.max((whr - gaugeMin) / (gaugeMax - gaugeMin), 0), 1) * 100;
    document.getElementById('gauge-marker').style.left = gaugePos + '%';

    // WHO threshold marker
    var threshold = sex === 'male' ? 0.90 : 0.80;
    var thresholdPos = ((threshold - gaugeMin) / (gaugeMax - gaugeMin)) * 100;
    document.getElementById('gauge-threshold').style.left = thresholdPos + '%';
    document.getElementById('gauge-threshold-label').textContent = 'WHO: ' + threshold.toFixed(2);
    document.getElementById('gauge-threshold-label').style.left = thresholdPos + '%';

    // Breakdown
    document.getElementById('display-whr').textContent = whr.toFixed(3);
    document.getElementById('display-waist').textContent = waistCm.toFixed(1) + ' cm (' + waistIn.toFixed(1) + ' in)';
    document.getElementById('display-hip').textContent = hipCm.toFixed(1) + ' cm (' + hipIn.toFixed(1) + ' in)';
    document.getElementById('display-category').textContent = category;
    document.getElementById('display-who-threshold').textContent = (sex === 'male' ? '0.90 (men)' : '0.85 (women)');
    document.getElementById('display-waist-risk').innerHTML = waistRisk;
    document.getElementById('display-body-shape').textContent = bodyShape;

    // Comparison boxes
    document.getElementById('comp-whr').textContent = whr.toFixed(2);
    document.getElementById('comp-category').textContent = category;
    document.getElementById('comp-shape').textContent = bodyShape;

    resultsSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    if (typeof celebratePulse === 'function' && (statusClass === 'status-good')) {
      celebratePulse(document.getElementById('result-hero'));
    }

    if (typeof showNextSteps === 'function') {
      showNextSteps('waist-to-hip-ratio', { weight_kg: 0, height_cm: 0, age: 0, gender: sex });
    }
  });
});
