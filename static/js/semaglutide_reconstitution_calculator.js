document.addEventListener('DOMContentLoaded', function() {
  var peptideMgInput = document.getElementById('peptide-mg');
  var waterMlInput = document.getElementById('water-ml');
  var doseMgInput = document.getElementById('dose-mg');
  var syringeSelect = document.getElementById('syringe-type');
  var calculateBtn = document.getElementById('calculate-btn');
  var resultsSection = document.getElementById('results-section');

  // Common vial presets
  var vialSelect = document.getElementById('vial-preset');
  var presets = {
    'custom': { mg: '', water: '' },
    'sema-2': { mg: 2, water: '' },
    'sema-3': { mg: 3, water: '' },
    'sema-5': { mg: 5, water: '' },
    'sema-10': { mg: 10, water: '' },
    'tirz-5': { mg: 5, water: '' },
    'tirz-10': { mg: 10, water: '' },
    'tirz-15': { mg: 15, water: '' },
    'tirz-30': { mg: 30, water: '' }
  };

  vialSelect.addEventListener('change', function() {
    var p = presets[vialSelect.value];
    if (p && p.mg) {
      peptideMgInput.value = p.mg;
    }
    if (p && p.water) {
      waterMlInput.value = p.water;
    }
  });

  calculateBtn.addEventListener('click', function() {
    var peptideMg = parseFloat(peptideMgInput.value);
    var waterMl = parseFloat(waterMlInput.value);
    var doseMg = parseFloat(doseMgInput.value);
    var syringeUnits = parseInt(syringeSelect.value);

    if (isNaN(peptideMg) || peptideMg <= 0) {
      alert('Please enter the amount of peptide in the vial (mg).');
      return;
    }
    if (isNaN(waterMl) || waterMl <= 0) {
      alert('Please enter the amount of bacteriostatic water (mL).');
      return;
    }
    if (isNaN(doseMg) || doseMg <= 0) {
      alert('Please enter your desired dose (mg).');
      return;
    }
    if (doseMg > peptideMg) {
      alert('Your dose cannot exceed the total peptide in the vial (' + peptideMg + ' mg).');
      return;
    }

    // Core calculation
    // Concentration = peptide mg / water mL = mg per mL
    var concentration = peptideMg / waterMl;

    // Volume to inject = dose mg / concentration = mL
    var injectMl = doseMg / concentration;

    // Convert to insulin syringe units (1 mL = 100 units for U-100)
    var injectUnits = injectMl * 100;

    // Number of doses per vial
    var dosesPerVial = Math.floor(peptideMg / doseMg);

    // Syringe tick marks
    var ticksPerUnit = syringeUnits === 100 ? 1 : (syringeUnits === 50 ? 1 : 0.5);
    var nearestTick = Math.round(injectUnits / ticksPerUnit) * ticksPerUnit;

    // Show results
    resultsSection.classList.remove('hidden');

    // Primary result
    var heroEl = document.getElementById('inject-result');
    heroEl.textContent = injectUnits.toFixed(1) + ' units';
    document.getElementById('inject-label').textContent = 'Draw to ' + injectUnits.toFixed(1) + ' units on a ' + syringeUnits + '-unit syringe';

    if (typeof animateCountUp === 'function') {
      animateCountUp(heroEl, 0, injectUnits, 1, ' units');
    }

    // Status
    var statusEl = document.getElementById('recon-status');
    var iconEl = document.getElementById('recon-icon');
    var descEl = document.getElementById('recon-description');

    if (injectUnits > syringeUnits) {
      statusEl.className = 'result-status status-danger';
      iconEl.textContent = '⚠';
      descEl.textContent = 'Volume exceeds your syringe capacity (' + syringeUnits + ' units). Add more bacteriostatic water to increase dilution, or use a larger syringe.';
    } else if (injectUnits < 5) {
      statusEl.className = 'result-status status-warning';
      iconEl.textContent = '⚠';
      descEl.textContent = 'Very small volume — difficult to measure accurately. Consider adding more bacteriostatic water for easier dosing.';
    } else {
      statusEl.className = 'result-status status-good';
      iconEl.textContent = '✓';
      descEl.textContent = 'Draw ' + injectUnits.toFixed(1) + ' units (' + injectMl.toFixed(3) + ' mL) for your ' + doseMg + ' mg dose. This is ' + (dosesPerVial === 1 ? 'the only dose' : '1 of ' + dosesPerVial + ' doses') + ' from this vial.';
    }

    // Gauge (syringe visualization: 0-100 units)
    var gaugePos = Math.min(injectUnits / syringeUnits, 1) * 100;
    document.getElementById('gauge-marker').style.left = gaugePos + '%';
    document.getElementById('gauge-label-max').textContent = syringeUnits + ' units';

    // Breakdown
    document.getElementById('display-concentration').textContent = concentration.toFixed(2) + ' mg/mL';
    document.getElementById('display-inject-ml').textContent = injectMl.toFixed(3) + ' mL';
    document.getElementById('display-inject-units').textContent = injectUnits.toFixed(1) + ' units';
    document.getElementById('display-doses').textContent = dosesPerVial + ' doses per vial';
    document.getElementById('display-nearest-tick').textContent = nearestTick.toFixed(1) + ' units (nearest syringe marking)';

    // Comparison boxes
    document.getElementById('comp-vial').textContent = peptideMg + ' mg';
    document.getElementById('comp-water').textContent = waterMl + ' mL';
    document.getElementById('comp-conc').textContent = concentration.toFixed(2) + ' mg/mL';

    // Dose schedule table
    var tbody = document.getElementById('dose-tbody');
    tbody.innerHTML = '';

    // Standard semaglutide titration schedule
    var semaSchedule = [
      { week: '1-4', dose: 0.25, label: 'Starting dose' },
      { week: '5-8', dose: 0.5, label: 'Titration' },
      { week: '9-12', dose: 1.0, label: 'Titration' },
      { week: '13-16', dose: 1.7, label: 'Titration' },
      { week: '17+', dose: 2.4, label: 'Maintenance' }
    ];

    for (var i = 0; i < semaSchedule.length; i++) {
      var s = semaSchedule[i];
      var vol = s.dose / concentration;
      var units = vol * 100;
      var doseCount = Math.floor(peptideMg / s.dose);
      var tr = document.createElement('tr');
      var isCurrentDose = (Math.abs(s.dose - doseMg) < 0.01);
      if (isCurrentDose) tr.style.background = '#f0f9ff';

      tr.innerHTML =
        '<td style="padding: 6px 10px; border-bottom: 1px solid #f0f0f0;">' + s.week + '</td>' +
        '<td style="padding: 6px 10px; border-bottom: 1px solid #f0f0f0; font-weight: 600;">' + s.dose + ' mg</td>' +
        '<td style="padding: 6px 10px; border-bottom: 1px solid #f0f0f0;">' + units.toFixed(1) + ' units</td>' +
        '<td style="padding: 6px 10px; border-bottom: 1px solid #f0f0f0;">' + vol.toFixed(3) + ' mL</td>' +
        '<td style="padding: 6px 10px; border-bottom: 1px solid #f0f0f0;">' + doseCount + '</td>' +
        '<td style="padding: 6px 10px; border-bottom: 1px solid #f0f0f0; color: var(--color-text-tertiary);">' + s.label + '</td>';

      tbody.appendChild(tr);
    }

    // Scroll to results
    resultsSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    if (typeof celebratePulse === 'function' && injectUnits <= syringeUnits && injectUnits >= 5) {
      celebratePulse(document.getElementById('result-hero'));
    }

    if (typeof showNextSteps === 'function') {
      showNextSteps('semaglutide-reconstitution', {});
    }
  });
});
