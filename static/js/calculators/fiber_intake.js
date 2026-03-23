// Fiber Intake Calculator — factory-compatible
(function() {
var calculateBtn = document.getElementById('calcBtn');
var resultsSection = document.getElementById('results-section');

// Set defaults
var ageInput = document.getElementById('age');
var sexSelect = document.getElementById('sex');
var caloriesInput = document.getElementById('calories');

if (calculateBtn) {
  calculateBtn.addEventListener('click', calculate);
}

// Also calculate on Enter key
[ageInput, caloriesInput].forEach(function (el) {
  if (el) {
    el.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') calculate();
    });
  }
});

function calculate() {
  var age = parseInt(ageInput ? ageInput.value : 0, 10);
  var sex = sexSelect ? sexSelect.value : 'male';
  var calories = parseInt(caloriesInput ? caloriesInput.value : 0, 10);

  // Validation
  clearErrors();
  var hasError = false;

  if (!age || age < 1 || age > 120) {
    showError('age-error', 'Please enter a valid age (1–120).');
    hasError = true;
  }

  if (hasError) return;

  // Calculate DRI-based recommendation (Institute of Medicine, 2005)
  var dri = getDRI(age, sex);

  // Calculate calorie-based recommendation (14g per 1,000 kcal — IOM standard)
  var calorieBased = null;
  if (calories && calories >= 500 && calories <= 8000) {
    calorieBased = Math.round((calories / 1000) * 14);
  } else if (calories && (calories < 500 || calories > 8000)) {
    showError('calories-error', 'Please enter a realistic daily calorie intake (500–8000 kcal).');
  }

  // Display results
  displayResults(age, sex, dri, calorieBased, calories);

  if (typeof celebratePulse === 'function') {
    celebratePulse(document.getElementById('result-hero'));
  }

  if (typeof showNextSteps === 'function') {
    showNextSteps('fiber', { age: age, gender: sex });
  }
}

/**
 * Get DRI fiber recommendation based on age and sex.
 * Source: Institute of Medicine. Dietary Reference Intakes for Energy,
 * Carbohydrate, Fiber, Fat, Fatty Acids, Cholesterol, Protein, and Amino Acids.
 * National Academies Press, 2005.
 */
function getDRI(age, sex) {
  // Children
  if (age >= 1 && age <= 3) return 19;
  if (age >= 4 && age <= 8) return 25;

  if (sex === 'male') {
    if (age >= 9 && age <= 13) return 31;
    if (age >= 14 && age <= 50) return 38;
    if (age >= 51) return 30;
  } else {
    // female
    if (age >= 9 && age <= 13) return 26;
    if (age >= 14 && age <= 18) return 26;
    if (age >= 19 && age <= 50) return 25;
    if (age >= 51) return 21;
  }
  return 25; // fallback
}

function displayResults(age, sex, dri, calorieBased, calories) {
  resultsSection.classList.remove('hidden');

  // Hero result
  document.getElementById('result-fiber-dri').textContent = dri + 'g';
  var repeatEl = document.getElementById('result-fiber-dri-repeat');
  if (repeatEl) repeatEl.textContent = dri + 'g';

  // Status interpretation
  var statusEl = document.getElementById('fiber-status');
  var avgIntake = 16; // Average American fiber intake is ~16g/day (CDC)
  var pctOfAvg = Math.round((dri / avgIntake) * 100);
  statusEl.innerHTML = 'Most Americans get only <strong>~16g/day</strong> — your target of <strong>' + dri + 'g</strong> is ' +
    Math.round(dri / avgIntake * 10) / 10 + '× higher. You\'re in good hands knowing your number.';

  // Calorie-based result
  var calorieRow = document.getElementById('calorie-based-row');
  var calorieVal = document.getElementById('result-calorie-based');
  if (calorieBased && calories) {
    calorieRow.classList.remove('hidden');
    calorieVal.textContent = calorieBased + 'g';
    // Show which is higher and note
    var noteEl = document.getElementById('calorie-note');
    if (calorieBased !== dri) {
      var diff = calorieBased - dri;
      noteEl.textContent = diff > 0
        ? 'Your calorie-based target (' + calorieBased + 'g) is ' + diff + 'g higher than the DRI — use the higher number for personalized guidance.'
        : 'Your calorie-based target (' + calorieBased + 'g) is ' + Math.abs(diff) + 'g lower than the DRI. Use the DRI of ' + dri + 'g as your minimum.';
    } else {
      noteEl.textContent = 'Both methods agree — ' + dri + 'g/day is your fiber target.';
    }
  } else {
    calorieRow.classList.add('hidden');
  }

  // Breakdown
  var soluble = Math.round(dri * 0.25);
  var insoluble = dri - soluble;
  document.getElementById('result-soluble').textContent = soluble + 'g';
  document.getElementById('result-insoluble').textContent = insoluble + 'g';

  // Progress bar fill (using DRI vs typical 16g/day scale, capped at 50g)
  var barFill = Math.min(100, Math.round((dri / 50) * 100));
  var bar = document.getElementById('fiber-bar-fill');
  if (bar) {
    bar.style.width = barFill + '%';
  }

  // Recommended foods to reach target
  populateFoodTable(dri);

  // Age/sex context note
  var contextEl = document.getElementById('context-note');
  if (contextEl) {
    var ageGroup = getAgeGroup(age, sex);
    contextEl.textContent = 'For ' + ageGroup + ', the IOM recommends ' + dri + 'g of total dietary fiber per day.';
  }

  // Scroll to results
  resultsSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function getAgeGroup(age, sex) {
  var sexLabel = sex === 'male' ? 'men' : 'women';
  if (age >= 1 && age <= 3) return 'toddlers (ages 1–3)';
  if (age >= 4 && age <= 8) return 'children ages 4–8';
  if (sex === 'male') {
    if (age >= 9 && age <= 13) return 'boys ages 9–13';
    if (age >= 14 && age <= 50) return sexLabel + ' ages 14–50';
    return sexLabel + ' age 51+';
  } else {
    if (age >= 9 && age <= 13) return 'girls ages 9–13';
    if (age >= 14 && age <= 18) return sexLabel + ' ages 14–18';
    if (age >= 19 && age <= 50) return sexLabel + ' ages 19–50';
    return sexLabel + ' age 51+';
  }
}

function populateFoodTable(target) {
  var foods = [
    { name: 'Lentils (cooked, 1 cup)', fiber: 15.6, per: '1 cup' },
    { name: 'Black beans (cooked, 1 cup)', fiber: 15.0, per: '1 cup' },
    { name: 'Split peas (cooked, 1 cup)', fiber: 16.3, per: '1 cup' },
    { name: 'Avocado (1 medium)', fiber: 9.2, per: '1 medium' },
    { name: 'Oatmeal (cooked, 1 cup)', fiber: 4.0, per: '1 cup' },
    { name: 'Chia seeds (1 tbsp)', fiber: 4.1, per: '1 tbsp' },
    { name: 'Almonds (1 oz, ~23 nuts)', fiber: 3.5, per: '1 oz' },
    { name: 'Broccoli (cooked, 1 cup)', fiber: 5.1, per: '1 cup' },
    { name: 'Pear (1 medium, with skin)', fiber: 5.5, per: '1 medium' },
    { name: 'Apple (1 medium, with skin)', fiber: 4.4, per: '1 medium' },
    { name: 'Whole wheat bread (1 slice)', fiber: 1.9, per: '1 slice' },
    { name: 'Brown rice (cooked, 1 cup)', fiber: 3.5, per: '1 cup' }
  ];

  var tbody = document.getElementById('food-tbody');
  if (!tbody) return;
  tbody.innerHTML = '';

  var runningTotal = 0;
  foods.forEach(function (food) {
    if (runningTotal >= target * 1.5) return; // show enough to exceed target
    runningTotal += food.fiber;
    var pct = Math.min(100, Math.round((food.fiber / target) * 100));
    var tr = document.createElement('tr');
    tr.innerHTML =
      '<td style="padding: 8px 12px; border-bottom: 1px solid #f0f0f0;">' + food.name + '</td>' +
      '<td style="padding: 8px 12px; border-bottom: 1px solid #f0f0f0; font-weight: 600;">' + food.fiber + 'g</td>' +
      '<td style="padding: 8px 12px; border-bottom: 1px solid #f0f0f0;">' + pct + '% of target</td>';
    tbody.appendChild(tr);
  });
}

function showError(id, msg) {
  var el = document.getElementById(id);
  if (el) {
    el.textContent = msg;
    el.style.display = 'block';
  }
}

function clearErrors() {
  ['age-error', 'calories-error'].forEach(function (id) {
    var el = document.getElementById(id);
    if (el) {
      el.textContent = '';
      el.style.display = 'none';
    }
  });
}

// Reveal results
if (typeof factoryReveal === 'function') { factoryReveal(); }
})();
