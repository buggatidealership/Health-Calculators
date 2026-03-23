// Antidepressant Weight Gain Calculator — factory-compatible
(function() {
// Medication data
  const medicationData = {
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
  const durationFactors = {
    "1": 0.5,
    "3": 0.8,
    "6": 1.0,
    "12": 1.2,
    "24": 1.4
  };
  
  // Add medications to select dropdown
  const medicationSelect = document.getElementById('medication');
  Object.keys(medicationData).forEach(key => {
    const option = document.createElement('option');
    option.value = key;
    option.textContent = medicationData[key].name;
    medicationSelect.appendChild(option);
  });
  
  // Toggle unit system
  const kgRadio = document.getElementById('kg');
  const lbRadio = document.getElementById('lb');
  const weightInput = document.getElementById('weight');
  
  function setUnit(unitSystem) {
    if (unitSystem === 'metric') {
      kgRadio.checked = true;
      lbRadio.checked = false;
      document.querySelectorAll('.unit-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-unit') === 'metric') {
          btn.classList.add('active');
        }
      });
    } else {
      kgRadio.checked = false;
      lbRadio.checked = true;
      document.querySelectorAll('.unit-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-unit') === 'imperial') {
          btn.classList.add('active');
        }
      });
    }
  }
  
  document.querySelectorAll('.unit-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      setUnit(this.getAttribute('data-unit'));
    });
  });
  
  // Calculate button event
  document.getElementById('calcBtn').addEventListener('click', function() {
    const weight = parseFloat(weightInput.value);
    const medication = medicationSelect.value;
    const duration = document.getElementById('duration').value;
    const resultsDiv = document.getElementById('results');
    
    if (isNaN(weight) || !medication || !duration) {
      return;
    }
    
    // Convert to kg if needed
    const isMetric = kgRadio.checked;
    const baseWeight = isMetric ? weight : weight * 0.453592;
    const unit = isMetric ? 'kg' : 'lbs';
    
    // Get values
    const med = medicationData[medication];
    const durationFactor = durationFactors[duration];
    
    // Calculate weight change
    const changeInKg = (baseWeight * med.avgGain / 100) * durationFactor;
    const changeInUnit = isMetric ? changeInKg : changeInKg * 2.20462;
    const newWeight = weight + changeInUnit;
    const bodyFatIncrease = med.bodyFatFactor * durationFactor;
    
    // Update results
    document.getElementById('weightGain').textContent = changeInUnit.toFixed(1) + ' ' + unit;
    document.getElementById('bodyFatGain').textContent = bodyFatIncrease.toFixed(1) + '%';
    document.getElementById('riskLevel').textContent = med.riskLevel;
    
    // Color-code risk level
    const riskElement = document.getElementById('riskLevel');
    riskElement.className = '';
    if (med.riskLevel === "High") {
      riskElement.classList.add('high-risk');
    } else if (med.riskLevel.includes("Moderate")) {
      riskElement.classList.add('moderate-risk');
    } else if (med.riskLevel === "Low") {
      riskElement.classList.add('low-risk');
    } else {
      riskElement.classList.add('minimal-risk');
    }
    
    // Show results
    if (typeof factoryReveal === 'function') { factoryReveal(); };
    
    // Scroll to results
    resultsDiv.scrollIntoView({ behavior: 'smooth' });
if (typeof showNextSteps === 'function') showNextSteps('antidepressant', collectUserData());
  });
})();
