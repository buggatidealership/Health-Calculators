// Antidepressant Weight Gain Calculator — factory-compatible
(function() {
  // Medication data
  var medicationData = {
    mirtazapine: { name: "Mirtazapine (Remeron)", avgGain: 2.5, riskLevel: "High", bodyFatFactor: 0.7 },
    paroxetine: { name: "Paroxetine (Paxil)", avgGain: 1.7, riskLevel: "High", bodyFatFactor: 0.65 },
    amitriptyline: { name: "Amitriptyline (Elavil)", avgGain: 1.8, riskLevel: "High", bodyFatFactor: 0.68 },
    citalopram: { name: "Citalopram (Celexa)", avgGain: 1.1, riskLevel: "Moderate", bodyFatFactor: 0.60 },
    sertraline: { name: "Sertraline (Zoloft)", avgGain: 1.0, riskLevel: "Moderate", bodyFatFactor: 0.58 },
    escitalopram: { name: "Escitalopram (Lexapro)", avgGain: 0.9, riskLevel: "Moderate", bodyFatFactor: 0.55 },
    duloxetine: { name: "Duloxetine (Cymbalta)", avgGain: 0.9, riskLevel: "Moderate", bodyFatFactor: 0.52 },
    venlafaxine: { name: "Venlafaxine (Effexor)", avgGain: 0.5, riskLevel: "Low", bodyFatFactor: 0.45 },
    fluoxetine: { name: "Fluoxetine (Prozac)", avgGain: 0.8, riskLevel: "Low-Moderate", bodyFatFactor: 0.50 },
    bupropion: { name: "Bupropion (Wellbutrin)", avgGain: -0.4, riskLevel: "Minimal/Weight Loss", bodyFatFactor: 0.25 },
    vilazodone: { name: "Vilazodone (Viibryd)", avgGain: 0.2, riskLevel: "Low", bodyFatFactor: 0.40 },
    vortioxetine: { name: "Vortioxetine (Trintellix)", avgGain: 0.3, riskLevel: "Low", bodyFatFactor: 0.42 }
  };

  // Duration factors
  var durationFactors = {
    "1": 0.5,
    "3": 0.8,
    "6": 1.0,
    "12": 1.2,
    "24": 1.4
  };

  // Add medications to select dropdown
  var medicationSelect = document.getElementById('medication');
  if (medicationSelect) {
    var defaultOpt = document.createElement('option');
    defaultOpt.value = '';
    defaultOpt.textContent = 'Select medication...';
    medicationSelect.appendChild(defaultOpt);
    Object.keys(medicationData).forEach(function(key) {
      var option = document.createElement('option');
      option.value = key;
      option.textContent = medicationData[key].name;
      medicationSelect.appendChild(option);
    });
  }

  // Calculate button event
  var calcBtn = document.getElementById('calcBtn');
  if (calcBtn) {
    calcBtn.addEventListener('click', function() {
      var weightInput = document.getElementById('weight');
      var weightUnitEl = document.getElementById('weightUnit');
      var durationEl = document.getElementById('duration');
      var weight = weightInput ? parseFloat(weightInput.value) : NaN;
      var medication = medicationSelect ? medicationSelect.value : '';
      var duration = durationEl ? durationEl.value : '';

      if (isNaN(weight) || !medication || !duration) {
        return;
      }

      // Convert to kg if needed
      var weightUnit = weightUnitEl ? weightUnitEl.value : 'kg';
      var isMetric = (weightUnit === 'kg');
      var baseWeight = isMetric ? weight : weight * 0.453592;
      var unit = isMetric ? 'kg' : 'lbs';

      // Get values
      var med = medicationData[medication];
      var durationFactor = durationFactors[duration];

      // Calculate weight change
      var changeInKg = (baseWeight * med.avgGain / 100) * durationFactor;
      var changeInUnit = isMetric ? changeInKg : changeInKg * 2.20462;
      var bodyFatIncrease = med.bodyFatFactor * durationFactor;

      // Update results
      var resultNumber = document.getElementById('resultNumber');
      var resultVerdict = document.getElementById('resultVerdict');
      var weightGainEl = document.getElementById('weightGain');
      var bodyFatGainEl = document.getElementById('bodyFatGain');
      var riskLevelEl = document.getElementById('riskLevel');

      if (resultNumber) resultNumber.textContent = changeInUnit.toFixed(1) + ' ' + unit;
      if (resultVerdict) resultVerdict.textContent = med.riskLevel + ' risk';
      if (weightGainEl) weightGainEl.textContent = changeInUnit.toFixed(1) + ' ' + unit;
      if (bodyFatGainEl) bodyFatGainEl.textContent = bodyFatIncrease.toFixed(1) + '%';
      if (riskLevelEl) riskLevelEl.textContent = med.riskLevel;

      // Show results
      if (typeof factoryReveal === 'function') factoryReveal();

      // Scroll to results
      var resultsDiv = document.getElementById('results');
      if (resultsDiv) resultsDiv.scrollIntoView({ behavior: 'smooth' });

      if (typeof showNextSteps === 'function') showNextSteps('antidepressant', collectUserData());
    });
  }
})();
