// Unit toggle for BRI calculator
function toggleBRIUnit(unit) {
  var metricBtn = document.getElementById('metric-btn');
  var imperialBtn = document.getElementById('imperial-btn');
  var metricFields = document.querySelector('.metric-inputs');
  var imperialFields = document.querySelector('.imperial-inputs');
  var metricWeight = document.querySelector('.metric-weight-input');
  var imperialWeight = document.querySelector('.imperial-weight-input');

  if (unit === 'metric') {
    metricBtn.classList.add('active');
    imperialBtn.classList.remove('active');
    metricFields.classList.remove('hidden');
    imperialFields.classList.add('hidden');
    if (metricWeight) metricWeight.classList.remove('hidden');
    if (imperialWeight) imperialWeight.classList.add('hidden');
  } else {
    imperialBtn.classList.add('active');
    metricBtn.classList.remove('active');
    imperialFields.classList.remove('hidden');
    metricFields.classList.add('hidden');
    if (imperialWeight) imperialWeight.classList.remove('hidden');
    if (metricWeight) metricWeight.classList.add('hidden');
  }
}

function calculateBRI() {
  var isMetric = document.getElementById('metric-btn').classList.contains('active');

  var heightM, waistM, weightKg;

  if (isMetric) {
    var heightCm = parseFloat(document.getElementById('height_cm').value);
    var waistCm = parseFloat(document.getElementById('waist_cm').value);
    if (!heightCm || !waistCm || isNaN(heightCm) || isNaN(waistCm)) {
      alert('Please enter both height and waist circumference.');
      return;
    }
    heightM = heightCm / 100;
    waistM = waistCm / 100;

    var wkg = parseFloat(document.getElementById('weight_kg').value);
    if (wkg && !isNaN(wkg) && wkg > 0) {
      weightKg = wkg;
    }
  } else {
    var feet = parseFloat(document.getElementById('height_ft').value);
    var inches = parseFloat(document.getElementById('height_in').value) || 0;
    var waistIn = parseFloat(document.getElementById('waist_in').value);
    if (!feet || !waistIn || isNaN(feet) || isNaN(waistIn)) {
      alert('Please enter both height and waist circumference.');
      return;
    }
    var totalInches = (feet * 12) + inches;
    heightM = totalInches * 0.0254;
    waistM = waistIn * 0.0254;

    var wlb = parseFloat(document.getElementById('weight_lb').value);
    if (wlb && !isNaN(wlb) && wlb > 0) {
      weightKg = wlb * 0.453592;
    }
  }

  var age = parseFloat(document.getElementById('age').value);
  var sex = document.getElementById('sex').value;

  if (!age || isNaN(age)) {
    alert('Please enter your age.');
    return;
  }

  if (heightM <= 0 || waistM <= 0) {
    alert('Please enter valid height and waist measurements.');
    return;
  }

  // BRI formula: 364.2 - 365.5 * sqrt(1 - ((WC/(2*pi))^2 / (0.5*H)^2))
  var pi = Math.PI;
  var wcRadius = waistM / (2 * pi); // semi-minor axis estimate
  var halfHeight = 0.5 * heightM;   // semi-major axis
  var eccentricityTerm = (wcRadius * wcRadius) / (halfHeight * halfHeight);

  // Guard: eccentricityTerm must be < 1 for sqrt to be valid
  if (eccentricityTerm >= 1) {
    alert('The waist circumference is too large relative to your height for a valid BRI calculation. Please check your measurements.');
    return;
  }

  var bri = 364.2 - 365.5 * Math.sqrt(1 - eccentricityTerm);
  var briRounded = Math.round(bri * 100) / 100;

  // Determine category and color
  var category, color, rowId, riskLevel, adiposityLevel;
  if (bri < 3.41) {
    category = 'Lean / Healthy';
    color = '#16a34a';
    rowId = 'row-lean';
    riskLevel = 'Low';
    adiposityLevel = 'Low central adiposity';
  } else if (bri < 4.45) {
    category = 'Overweight';
    color = '#d97706';
    rowId = 'row-overweight';
    riskLevel = 'Moderate';
    adiposityLevel = 'Moderate central adiposity';
  } else if (bri < 5.73) {
    category = 'Obese';
    color = '#ef4444';
    rowId = 'row-obese';
    riskLevel = 'High';
    adiposityLevel = 'High central adiposity';
  } else {
    category = 'High Risk';
    color = '#dc2626';
    rowId = 'row-high-risk';
    riskLevel = 'Very High';
    adiposityLevel = 'Very high central adiposity';
  }

  // Populate primary result
  var briDisplay = document.getElementById('bri-display');
  briDisplay.textContent = briRounded;
  briDisplay.style.color = color;

  var categoryLabel = document.getElementById('bri-category-label');
  categoryLabel.textContent = category;
  categoryLabel.style.color = color;

  // Position the gauge marker
  // Gauge spans BRI 1 to 10
  var gaugeMin = 1;
  var gaugeMax = 10;
  var clampedBri = Math.max(gaugeMin, Math.min(gaugeMax, bri));
  var percentage = ((clampedBri - gaugeMin) / (gaugeMax - gaugeMin)) * 100;
  var marker = document.getElementById('bri-marker');
  marker.style.left = percentage + '%';
  marker.style.color = color;

  // Highlight active category row
  var rows = ['row-lean', 'row-overweight', 'row-obese', 'row-high-risk'];
  rows.forEach(function(id) {
    var row = document.getElementById(id);
    if (id === rowId) {
      row.style.backgroundColor = color + '18';
      row.style.fontWeight = '600';
    } else {
      row.style.backgroundColor = '';
      row.style.fontWeight = '';
    }
  });

  // Risk interpretation
  document.getElementById('risk-level-display').textContent = riskLevel;
  document.getElementById('risk-level-display').style.color = color;
  document.getElementById('adiposity-display').textContent = adiposityLevel;
  document.getElementById('adiposity-display').style.color = color;

  // Age-adjusted context
  var ageContext = '';
  if (age < 40) {
    if (bri < 3.41) {
      ageContext = 'Excellent for your age group. Maintain current activity level.';
    } else if (bri < 4.45) {
      ageContext = 'Slightly elevated for adults under 40. Focus on reducing waist circumference.';
    } else {
      ageContext = 'Elevated for your age group. Central adiposity at this age increases long-term disease risk.';
    }
  } else if (age < 60) {
    if (bri < 3.41) {
      ageContext = 'Very good for ages 40-59. Lower than average for this age group.';
    } else if (bri < 4.45) {
      ageContext = 'Typical range for ages 40-59. Modest reduction in waist circumference is beneficial.';
    } else {
      ageContext = 'Above average for your age group. Waist reduction is strongly recommended.';
    }
  } else {
    if (bri < 3.41) {
      ageContext = 'Excellent for age 60+. Well below average for this age group.';
    } else if (bri < 5.0) {
      ageContext = 'Within common range for age 60+. Moderate BRI at this age is typical.';
    } else {
      ageContext = 'Elevated for any age. Discuss cardiovascular risk with your healthcare provider.';
    }
  }
  document.getElementById('age-context-display').textContent = ageContext;

  // BMI comparison (only if weight provided)
  var bmiSection = document.getElementById('bmi-comparison');
  if (weightKg && weightKg > 0) {
    var bmi = weightKg / (heightM * heightM);
    var bmiRounded = Math.round(bmi * 10) / 10;

    // BMI category
    var bmiCategory;
    if (bmi < 18.5) bmiCategory = 'Underweight';
    else if (bmi < 25) bmiCategory = 'Normal';
    else if (bmi < 30) bmiCategory = 'Overweight';
    else bmiCategory = 'Obese';

    // BRI risk level vs BMI risk level comparison
    var briRiskNum = bri < 3.41 ? 1 : bri < 4.45 ? 2 : bri < 5.73 ? 3 : 4;
    var bmiRiskNum = bmi < 18.5 ? 1 : bmi < 25 ? 1 : bmi < 30 ? 2 : 3;

    var comparisonText;
    if (briRiskNum > bmiRiskNum) {
      comparisonText = 'Your BRI of ' + briRounded + ' suggests higher risk than your BMI of ' + bmiRounded + ' (' + bmiCategory + ') would indicate. BRI is detecting central fat that BMI misses.';
    } else if (briRiskNum < bmiRiskNum) {
      comparisonText = 'Your BRI of ' + briRounded + ' suggests lower risk than your BMI of ' + bmiRounded + ' (' + bmiCategory + ') would indicate. Your body fat distribution is healthier than your weight alone suggests.';
    } else {
      comparisonText = 'Your BRI of ' + briRounded + ' and BMI of ' + bmiRounded + ' (' + bmiCategory + ') indicate a similar risk level. Both metrics agree on your health category.';
    }

    document.getElementById('bri-compare-display').textContent = briRounded + ' (' + category + ')';
    document.getElementById('bri-compare-display').style.color = color;
    document.getElementById('bmi-compare-display').textContent = bmiRounded + ' (' + bmiCategory + ')';
    document.getElementById('comparison-text').textContent = comparisonText;

    bmiSection.classList.remove('hidden');
  } else {
    bmiSection.classList.add('hidden');
  }

  // Show results with reveal animation
  var resultsEl = document.getElementById('results');
  resultsEl.classList.remove('hidden');
  resultsEl.classList.remove('results-reveal');
  void resultsEl.offsetWidth;
  resultsEl.classList.add('results-reveal');
  resultsEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

  // Content loop: contextual next steps
  var userData = collectUserData();
  // Add waist data for cross-linking
  if (isMetric) {
    userData.waist_cm = document.getElementById('waist_cm').value;
  } else {
    userData.waist_cm = (parseFloat(document.getElementById('waist_in').value) * 2.54).toFixed(1);
  }
  userData.gender = sex;
  showNextSteps('body-roundness-index', userData, { bri: briRounded.toString(), category: category });
}
