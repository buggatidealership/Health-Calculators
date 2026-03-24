// Fiber Intake Calculator — factory-compatible
(function() {
var calculateBtn = document.getElementById('calcBtn');
var ageInput = document.getElementById('age');
var sexSelect = document.getElementById('sex');
var caloriesInput = document.getElementById('calories');

if (calculateBtn) {
  calculateBtn.addEventListener('click', calculate);
}

// Also calculate on Enter key
[ageInput, caloriesInput].forEach(function(el) {
  if (el) {
    el.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') calculate();
    });
  }
});

function calculate() {
  var age = parseInt(ageInput ? ageInput.value : 0, 10);
  var sex = sexSelect ? sexSelect.value : 'male';
  var calories = parseInt(caloriesInput ? caloriesInput.value : 0, 10);

  // Validation
  if (!age || age < 1 || age > 120) return;

  // Calculate DRI-based recommendation (Institute of Medicine, 2005)
  var dri = getDRI(age, sex);

  // Calculate calorie-based recommendation (14g per 1,000 kcal — IOM standard)
  var calorieBased = null;
  if (calories && calories >= 500 && calories <= 8000) {
    calorieBased = Math.round((calories / 1000) * 14);
  }

  // Display results
  displayResults(age, sex, dri, calorieBased, calories);

  if (typeof factoryReveal === 'function') { factoryReveal(); }

  if (typeof celebratePulse === 'function') {
    celebratePulse(document.querySelector('.result-number'));
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
  // Primary result
  var resultNum = document.getElementById('resultNumber');
  if (resultNum) resultNum.textContent = dri + 'g';

  // Verdict
  var verdict = document.getElementById('resultVerdict');
  if (verdict) {
    var avgIntake = 16;
    verdict.textContent = 'Your IOM target of ' + dri + 'g/day is ' +
      (Math.round(dri / avgIntake * 10) / 10) + '\u00d7 the average American intake (~16g).';
  }

  // Breakdown cards
  var driVal = document.getElementById('driVal');
  if (driVal) driVal.textContent = dri + 'g';

  var calorieBasedVal = document.getElementById('calorieBasedVal');
  if (calorieBasedVal) calorieBasedVal.textContent = calorieBased ? calorieBased + 'g' : '--';

  var soluble = Math.round(dri * 0.25);
  var insoluble = dri - soluble;

  var solubleVal = document.getElementById('solubleVal');
  if (solubleVal) solubleVal.textContent = soluble + 'g';

  var insolubleVal = document.getElementById('insolubleVal');
  if (insolubleVal) insolubleVal.textContent = insoluble + 'g';

  // Status message
  var statusEl = document.getElementById('fiberStatus');
  if (statusEl) {
    var avgIntake2 = 16;
    statusEl.innerHTML = 'Most Americans get only <strong>~16g/day</strong> \u2014 your target of <strong>' + dri + 'g</strong> is ' +
      (Math.round(dri / avgIntake2 * 10) / 10) + '\u00d7 higher. You\u2019re in good hands knowing your number.';
    statusEl.style.display = 'block';
    statusEl.style.background = 'rgba(132,204,22,0.06)';
    statusEl.style.border = '1px solid rgba(132,204,22,0.15)';
  }

  // Context note
  var contextEl = document.getElementById('contextNote');
  if (contextEl) {
    var ageGroup = getAgeGroup(age, sex);
    contextEl.textContent = 'For ' + ageGroup + ', the IOM recommends ' + dri + 'g of total dietary fiber per day.';
    contextEl.style.display = 'block';
  }

  // Progress bar
  var barWrap = document.getElementById('fiberBarWrap');
  var barFill = document.getElementById('fiberBarFill');
  if (barWrap && barFill) {
    barWrap.style.display = 'block';
    var pct = Math.min(100, Math.round((dri / 50) * 100));
    barFill.style.width = pct + '%';
  }

  // Calorie note
  var calorieNote = document.getElementById('calorieNote');
  if (calorieNote && calorieBased && calories) {
    calorieNote.style.display = 'block';
    if (calorieBased !== dri) {
      var diff = calorieBased - dri;
      calorieNote.textContent = diff > 0
        ? 'Your calorie-based target (' + calorieBased + 'g) is ' + diff + 'g higher than the DRI \u2014 use the higher number for personalized guidance.'
        : 'Your calorie-based target (' + calorieBased + 'g) is ' + Math.abs(diff) + 'g lower than the DRI. Use the DRI of ' + dri + 'g as your minimum.';
    } else {
      calorieNote.textContent = 'Both methods agree \u2014 ' + dri + 'g/day is your fiber target.';
    }
  } else if (calorieNote) {
    calorieNote.style.display = 'none';
  }

  // Food table
  populateFoodTable(dri);
}

function getAgeGroup(age, sex) {
  var sexLabel = sex === 'male' ? 'men' : 'women';
  if (age >= 1 && age <= 3) return 'toddlers (ages 1\u20133)';
  if (age >= 4 && age <= 8) return 'children ages 4\u20138';
  if (sex === 'male') {
    if (age >= 9 && age <= 13) return 'boys ages 9\u201313';
    if (age >= 14 && age <= 50) return sexLabel + ' ages 14\u201350';
    return sexLabel + ' age 51+';
  } else {
    if (age >= 9 && age <= 13) return 'girls ages 9\u201313';
    if (age >= 14 && age <= 18) return sexLabel + ' ages 14\u201318';
    if (age >= 19 && age <= 50) return sexLabel + ' ages 19\u201350';
    return sexLabel + ' age 51+';
  }
}

function populateFoodTable(target) {
  var foods = [
    { name: 'Lentils (cooked, 1 cup)', fiber: 15.6 },
    { name: 'Black beans (cooked, 1 cup)', fiber: 15.0 },
    { name: 'Split peas (cooked, 1 cup)', fiber: 16.3 },
    { name: 'Avocado (1 medium)', fiber: 9.2 },
    { name: 'Oatmeal (cooked, 1 cup)', fiber: 4.0 },
    { name: 'Chia seeds (1 tbsp)', fiber: 4.1 },
    { name: 'Almonds (1 oz, ~23 nuts)', fiber: 3.5 },
    { name: 'Broccoli (cooked, 1 cup)', fiber: 5.1 },
    { name: 'Pear (1 medium, with skin)', fiber: 5.5 },
    { name: 'Apple (1 medium, with skin)', fiber: 4.4 },
    { name: 'Whole wheat bread (1 slice)', fiber: 1.9 },
    { name: 'Brown rice (cooked, 1 cup)', fiber: 3.5 }
  ];

  var tbody = document.getElementById('foodTbody');
  var wrap = document.getElementById('foodTableWrap');
  if (!tbody) return;

  tbody.innerHTML = '';
  var runningTotal = 0;
  foods.forEach(function(food) {
    if (runningTotal >= target * 1.5) return;
    runningTotal += food.fiber;
    var pct = Math.min(100, Math.round((food.fiber / target) * 100));
    var tr = document.createElement('tr');
    tr.innerHTML =
      '<td style="padding:8px 12px;border-bottom:1px solid rgba(255,255,255,0.06);">' + food.name + '</td>' +
      '<td style="padding:8px 12px;border-bottom:1px solid rgba(255,255,255,0.06);font-weight:600;">' + food.fiber + 'g</td>' +
      '<td style="padding:8px 12px;border-bottom:1px solid rgba(255,255,255,0.06);">' + pct + '% of target</td>';
    tbody.appendChild(tr);
  });

  if (wrap) wrap.style.display = 'block';
}
})();
