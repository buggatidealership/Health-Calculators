// Unit toggle functionality
function toggleUnit(form, unit) {
  var metricBtn = document.getElementById('metric-btn');
  var imperialBtn = document.getElementById('imperial-btn');
  var metricFields = document.querySelector('.metric-inputs');
  var imperialFields = document.querySelector('.imperial-inputs');

  if (unit === 'metric') {
    metricBtn.classList.add('active');
    imperialBtn.classList.remove('active');
    metricFields.classList.remove('hidden');
    imperialFields.classList.add('hidden');
  } else {
    imperialBtn.classList.add('active');
    metricBtn.classList.remove('active');
    imperialFields.classList.remove('hidden');
    metricFields.classList.add('hidden');
  }
}

function calculateBMI() {
    var isMetric = document.getElementById('metric-btn').classList.contains('active');

    var weightKg, heightM;

    if (isMetric) {
        weightKg = parseFloat(document.getElementById('weight_kg').value);
        var heightCm = parseFloat(document.getElementById('height_cm').value);
        if (!weightKg || !heightCm || isNaN(weightKg) || isNaN(heightCm)) {
            alert('Please fill all required fields with valid numbers.');
            return;
        }
        heightM = heightCm / 100;
    } else {
        var weightLb = parseFloat(document.getElementById('weight_lb').value);
        var feet = parseFloat(document.getElementById('height_ft').value);
        var inches = parseFloat(document.getElementById('height_in').value) || 0;
        if (!weightLb || !feet || isNaN(weightLb) || isNaN(feet)) {
            alert('Please fill all required fields with valid numbers.');
            return;
        }
        weightKg = weightLb * 0.453592;
        var totalInches = (feet * 12) + inches;
        heightM = totalInches * 0.0254;
    }

    if (heightM <= 0) {
        alert('Please enter a valid height.');
        return;
    }

    // BMI formula: weight(kg) / height(m)^2
    var bmi = weightKg / (heightM * heightM);
    var bmiRounded = Math.round(bmi * 10) / 10;

    // Determine category and color
    var category, color, rowId;
    if (bmi < 18.5) {
        category = 'Underweight';
        color = '#3498db';
        rowId = 'row-underweight';
    } else if (bmi < 25) {
        category = 'Normal weight';
        color = '#2ecc71';
        rowId = 'row-normal';
    } else if (bmi < 30) {
        category = 'Overweight';
        color = '#f39c12';
        rowId = 'row-overweight';
    } else {
        category = 'Obese';
        color = '#e74c3c';
        rowId = 'row-obese';
    }

    // Populate primary result
    var bmiDisplay = document.getElementById('bmi-display');
    bmiDisplay.textContent = bmiRounded;
    bmiDisplay.style.color = color;

    var categoryLabel = document.getElementById('bmi-category-label');
    categoryLabel.textContent = category;
    categoryLabel.style.color = color;

    // Position the gauge marker
    // Gauge spans BMI 15 to 40
    var gaugeMin = 15;
    var gaugeMax = 40;
    var clampedBmi = Math.max(gaugeMin, Math.min(gaugeMax, bmi));
    var percentage = ((clampedBmi - gaugeMin) / (gaugeMax - gaugeMin)) * 100;
    var marker = document.getElementById('bmi-marker');
    marker.style.left = percentage + '%';
    marker.style.color = color;

    // Highlight active category row
    var rows = ['row-underweight', 'row-normal', 'row-overweight', 'row-obese'];
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

    // Calculate healthy weight range for the user's height
    var healthyMin = 18.5 * heightM * heightM;
    var healthyMax = 24.9 * heightM * heightM;

    if (isMetric) {
        document.getElementById('healthy-range-display').textContent =
            healthyMin.toFixed(1) + ' – ' + healthyMax.toFixed(1) + ' kg';
    } else {
        var healthyMinLb = healthyMin / 0.453592;
        var healthyMaxLb = healthyMax / 0.453592;
        document.getElementById('healthy-range-display').textContent =
            Math.round(healthyMinLb) + ' – ' + Math.round(healthyMaxLb) + ' lbs';
    }

    // Weight difference to reach normal BMI
    var weightDiffEl = document.getElementById('weight-diff-display');
    if (bmi < 18.5) {
        var needToGain = healthyMin - weightKg;
        if (isMetric) {
            weightDiffEl.textContent = 'Gain ' + needToGain.toFixed(1) + ' kg';
        } else {
            weightDiffEl.textContent = 'Gain ' + Math.round(needToGain / 0.453592) + ' lbs';
        }
        weightDiffEl.style.color = '#3498db';
    } else if (bmi >= 25) {
        var needToLose = weightKg - healthyMax;
        if (isMetric) {
            weightDiffEl.textContent = 'Lose ' + needToLose.toFixed(1) + ' kg';
        } else {
            weightDiffEl.textContent = 'Lose ' + Math.round(needToLose / 0.453592) + ' lbs';
        }
        weightDiffEl.style.color = '#e74c3c';
    } else {
        weightDiffEl.textContent = 'You are in the healthy range';
        weightDiffEl.style.color = '#2ecc71';
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
    showNextSteps('bmi', userData, { bmi: bmiRounded.toString(), category: category });
}
