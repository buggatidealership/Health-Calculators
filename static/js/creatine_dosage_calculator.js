document.addEventListener('DOMContentLoaded', function() {
  var weightInput = document.getElementById('weight');
  var weightUnitSelect = document.getElementById('weight-unit');
  var goalSelect = document.getElementById('goal');
  var phaseSelect = document.getElementById('phase');
  var calculateBtn = document.getElementById('calculate-btn');
  var resultsSection = document.getElementById('results-section');

  calculateBtn.addEventListener('click', function() {
    var weight = parseFloat(weightInput.value);
    var isLbs = weightUnitSelect.value === 'lbs';
    var goal = goalSelect.value;
    var phase = phaseSelect.value;

    if (isNaN(weight) || weight <= 0) {
      alert('Please enter your body weight.');
      return;
    }

    var weightKg = isLbs ? weight * 0.4536 : weight;
    var weightLbs = isLbs ? weight : weight * 2.2046;

    // ISSN recommended doses:
    // Loading: 0.3 g/kg/day for 5-7 days (split into 4 doses)
    // Maintenance: 3-5 g/day (or 0.03 g/kg/day)
    // No loading (standard): 3-5 g/day

    var loadingDailyG, maintenanceDailyG, loadingPerDose, loadingDays;
    var maintenanceLabel, loadingLabel;

    if (phase === 'loading') {
      // Loading phase: 0.3 g/kg/day for 5-7 days
      loadingDailyG = weightKg * 0.3;
      loadingPerDose = loadingDailyG / 4;
      loadingDays = 5;
      maintenanceDailyG = Math.max(3, weightKg * 0.03);
      // Cap at reasonable amounts
      if (loadingDailyG > 30) loadingDailyG = 30;
      loadingPerDose = loadingDailyG / 4;
    } else {
      // Maintenance only (no loading)
      loadingDailyG = 0;
      maintenanceDailyG = Math.max(3, weightKg * 0.03);
    }

    // Adjust for goal
    if (goal === 'strength') {
      // Slightly higher end for strength/power athletes
      maintenanceDailyG = Math.max(5, weightKg * 0.04);
    } else if (goal === 'endurance') {
      // Lower end for endurance athletes
      maintenanceDailyG = Math.max(3, weightKg * 0.03);
    }

    // Cap maintenance at 10g (ISSN max reasonable)
    maintenanceDailyG = Math.min(maintenanceDailyG, 10);

    // Teaspoon conversion: ~5g per level teaspoon of creatine monohydrate
    var maintenanceTsp = maintenanceDailyG / 5;

    // Show results
    resultsSection.classList.remove('hidden');

    var heroEl = document.getElementById('dose-result');
    var labelEl = document.getElementById('dose-label');

    if (phase === 'loading') {
      heroEl.textContent = Math.round(loadingDailyG) + 'g/day';
      labelEl.textContent = 'Loading Phase (' + loadingDays + ' days)';
    } else {
      heroEl.textContent = Math.round(maintenanceDailyG) + 'g/day';
      labelEl.textContent = 'Daily Maintenance Dose';
    }

    if (typeof animateCountUp === 'function') {
      var displayVal = phase === 'loading' ? Math.round(loadingDailyG) : Math.round(maintenanceDailyG);
      animateCountUp(heroEl, 0, displayVal, 0, 'g/day');
    }

    // Status
    var statusEl = document.getElementById('dose-status');
    var iconEl = document.getElementById('dose-icon');
    var descEl = document.getElementById('dose-description');
    statusEl.className = 'result-status status-good';
    iconEl.textContent = '✓';

    if (phase === 'loading') {
      descEl.textContent = 'Take ' + loadingPerDose.toFixed(1) + 'g four times per day for ' + loadingDays + ' days, then switch to ' + Math.round(maintenanceDailyG) + 'g/day for maintenance. Loading saturates muscle creatine stores faster.';
    } else {
      descEl.textContent = 'Take ' + Math.round(maintenanceDailyG) + 'g per day (~' + maintenanceTsp.toFixed(1) + ' teaspoons of creatine monohydrate). Muscle creatine stores will be fully saturated within 3-4 weeks.';
    }

    // Breakdown
    if (phase === 'loading') {
      document.getElementById('row-loading').classList.remove('hidden');
      document.getElementById('row-loading-split').classList.remove('hidden');
      document.getElementById('row-loading-days').classList.remove('hidden');
      document.getElementById('display-loading').textContent = Math.round(loadingDailyG) + 'g/day (' + (loadingDailyG / weightKg).toFixed(2) + ' g/kg)';
      document.getElementById('display-loading-split').textContent = loadingPerDose.toFixed(1) + 'g × 4 doses per day';
      document.getElementById('display-loading-days').textContent = loadingDays + '-7 days';
    } else {
      document.getElementById('row-loading').classList.add('hidden');
      document.getElementById('row-loading-split').classList.add('hidden');
      document.getElementById('row-loading-days').classList.add('hidden');
    }

    document.getElementById('display-maintenance').textContent = Math.round(maintenanceDailyG) + 'g/day (' + (maintenanceDailyG / weightKg).toFixed(2) + ' g/kg)';
    document.getElementById('display-tsp').textContent = maintenanceTsp.toFixed(1) + ' level teaspoons';
    document.getElementById('display-water').textContent = Math.round(maintenanceDailyG * 100) + ' mL extra water recommended per ' + Math.round(maintenanceDailyG) + 'g';

    // Monthly supply calculation
    var monthlyG = maintenanceDailyG * 30;
    if (phase === 'loading') {
      monthlyG = (loadingDailyG * loadingDays) + (maintenanceDailyG * 25);
    }
    document.getElementById('display-monthly').textContent = Math.round(monthlyG) + 'g (~' + Math.round(monthlyG / 1000 * 100) / 100 + ' containers of 1kg)';

    // Comparison boxes
    document.getElementById('comp-weight').textContent = isLbs ? Math.round(weightLbs) + ' lbs' : Math.round(weightKg) + ' kg';
    document.getElementById('comp-daily').textContent = Math.round(maintenanceDailyG) + 'g';
    document.getElementById('comp-monthly').textContent = Math.round(monthlyG) + 'g';

    resultsSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    if (typeof celebratePulse === 'function') {
      celebratePulse(document.getElementById('result-hero'));
    }

    if (typeof showNextSteps === 'function') {
      showNextSteps('creatine-dosage', { weight_kg: weightKg, age: 0, gender: '' });
    }
  });
});
