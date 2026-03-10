document.addEventListener('DOMContentLoaded', function() {
  var weightInput = document.getElementById('weight-lifted');
  var repsInput = document.getElementById('reps');
  var unitSelect = document.getElementById('unit');
  var exerciseSelect = document.getElementById('exercise');
  var calculateBtn = document.getElementById('calculate-btn');
  var resultsSection = document.getElementById('results-section');

  // 1RM Formulas
  // Sources: Epley 1985, Brzycki 1993, Lander 1985, Lombardi 1989,
  // Mayhew et al. 1992, O'Conner et al. 1989, Wathen 1994
  var formulas = {
    'Epley':    function(w, r) { return r === 1 ? w : w * (1 + r / 30); },
    'Brzycki':  function(w, r) { return r === 1 ? w : w * (36 / (37 - r)); },
    'Lander':   function(w, r) { return r === 1 ? w : (100 * w) / (101.3 - 2.67123 * r); },
    'Lombardi': function(w, r) { return r === 1 ? w : w * Math.pow(r, 0.10); },
    'Mayhew':   function(w, r) { return r === 1 ? w : (100 * w) / (52.2 + 41.9 * Math.exp(-0.055 * r)); },
    'OConner':  function(w, r) { return r === 1 ? w : w * (1 + r / 40); },
    'Wathen':   function(w, r) { return r === 1 ? w : (100 * w) / (48.8 + 53.8 * Math.exp(-0.075 * r)); }
  };

  var formulaCitations = {
    'Epley':    'Epley B. (1985). Poundage Chart. Boyd Epley Workout.',
    'Brzycki':  'Brzycki M. (1993). JOPERD, 64(1), 88-90.',
    'Lander':   'Lander J. (1985). NSCA Journal, 6(6), 60-61.',
    'Lombardi': 'Lombardi V.P. (1989). Beginning Weight Training.',
    'Mayhew':   'Mayhew J.L. et al. (1992). J Sports Med Phys Fitness, 32(4), 328-334.',
    'OConner':  "O'Conner B. et al. (1989). Weight Training Today.",
    'Wathen':   'Wathen D. (1994). In Essentials of Strength Training and Conditioning (NSCA).'
  };

  // NSCA training load chart
  var trainingZones = [
    { pct: 100, reps: '1',     zone: 'Max Strength' },
    { pct: 95,  reps: '2',     zone: 'Strength' },
    { pct: 93,  reps: '3',     zone: 'Strength' },
    { pct: 90,  reps: '4',     zone: 'Strength' },
    { pct: 87,  reps: '5',     zone: 'Strength' },
    { pct: 85,  reps: '6',     zone: 'Strength' },
    { pct: 83,  reps: '7',     zone: 'Strength/Hypertrophy' },
    { pct: 80,  reps: '8',     zone: 'Hypertrophy' },
    { pct: 77,  reps: '9',     zone: 'Hypertrophy' },
    { pct: 75,  reps: '10',    zone: 'Hypertrophy' },
    { pct: 70,  reps: '12',    zone: 'Hypertrophy' },
    { pct: 67,  reps: '15',    zone: 'Endurance' },
    { pct: 65,  reps: '16-18', zone: 'Endurance' },
    { pct: 60,  reps: '20+',   zone: 'Endurance' }
  ];

  calculateBtn.addEventListener('click', calculate);

  // Allow Enter key
  [weightInput, repsInput].forEach(function(el) {
    el.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') calculate();
    });
  });

  function calculate() {
    var weight = parseFloat(weightInput.value);
    var reps = parseInt(repsInput.value, 10);
    var unit = unitSelect.value;
    var exercise = exerciseSelect.value;

    if (isNaN(weight) || weight <= 0) {
      alert('Please enter the weight you lifted.');
      return;
    }
    if (isNaN(reps) || reps < 1 || reps > 30) {
      alert('Please enter a number of reps between 1 and 30.');
      return;
    }

    var unitLabel = unit === 'kg' ? 'kg' : 'lbs';

    // Calculate all formulas
    var results = {};
    var sum = 0;
    var count = 0;
    var formulaNames = Object.keys(formulas);

    formulaNames.forEach(function(name) {
      var val = formulas[name](weight, reps);
      if (isFinite(val) && val > 0) {
        results[name] = val;
        sum += val;
        count++;
      }
    });

    var average = sum / count;

    // Determine best formula recommendation based on rep range
    var recommended;
    if (reps <= 5) {
      recommended = 'Epley';
    } else if (reps <= 10) {
      recommended = 'Brzycki';
    } else {
      recommended = 'Mayhew';
    }

    // Display main result
    var heroEl = document.getElementById('orm-result');
    heroEl.textContent = roundWeight(average, unit);
    document.getElementById('orm-unit').textContent = unitLabel;

    // Show exercise name
    var exerciseName = exerciseSelect.options[exerciseSelect.selectedIndex].text;
    document.getElementById('orm-exercise').textContent = exerciseName;

    // Rep range accuracy warning
    var warningEl = document.getElementById('accuracy-warning');
    if (reps > 12) {
      warningEl.textContent = 'Estimates above 12 reps are less accurate. For best results, test with a weight you can lift 2-10 times.';
      warningEl.classList.remove('hidden');
    } else if (reps > 10) {
      warningEl.textContent = 'Accuracy is moderate at this rep range. For best results, use a weight you can lift 2-8 times.';
      warningEl.classList.remove('hidden');
    } else {
      warningEl.classList.add('hidden');
    }

    // Formula comparison table
    var tbody = document.getElementById('formula-tbody');
    tbody.innerHTML = '';
    formulaNames.forEach(function(name) {
      if (!results[name]) return;
      var val = results[name];
      var displayName = name === 'OConner' ? "O'Conner" : name;
      var isRec = name === recommended;
      var row = document.createElement('tr');
      if (isRec) row.style.background = 'var(--color-muted, #f5f3f0)';
      row.innerHTML =
        '<td style="padding: 8px 12px; border-bottom: 1px solid #f0f0f0; font-weight:' + (isRec ? '700' : '400') + ';">' +
          displayName + (isRec ? ' <span style="font-size:0.75rem;color:var(--color-accent,#0a7e8c);">★ Recommended</span>' : '') +
        '</td>' +
        '<td style="padding: 8px 12px; border-bottom: 1px solid #f0f0f0; text-align:right; font-weight:600;">' +
          roundWeight(val, unit) + ' ' + unitLabel +
        '</td>' +
        '<td style="padding: 8px 12px; border-bottom: 1px solid #f0f0f0; text-align:right; color: var(--color-text-tertiary);">' +
          ((val - average) >= 0 ? '+' : '') + roundWeight(val - average, unit) +
        '</td>';
      tbody.appendChild(row);
    });

    // Average row
    var avgRow = document.createElement('tr');
    avgRow.style.borderTop = '2px solid #333';
    avgRow.style.fontWeight = '700';
    avgRow.innerHTML =
      '<td style="padding: 10px 12px;">Average (All Formulas)</td>' +
      '<td style="padding: 10px 12px; text-align:right;">' + roundWeight(average, unit) + ' ' + unitLabel + '</td>' +
      '<td style="padding: 10px 12px; text-align:right;">—</td>';
    tbody.appendChild(avgRow);

    // Training load table
    var loadTbody = document.getElementById('training-tbody');
    loadTbody.innerHTML = '';
    trainingZones.forEach(function(z) {
      var loadWeight = average * z.pct / 100;
      var zoneClass = '';
      if (z.pct >= 85) zoneClass = 'color: var(--color-danger, #c03030); font-weight: 600;';
      else if (z.pct >= 67) zoneClass = 'color: var(--color-warning, #c27a0e); font-weight: 600;';
      else zoneClass = 'color: var(--color-good, #1a8a4a); font-weight: 600;';

      var row = document.createElement('tr');
      row.innerHTML =
        '<td style="padding: 7px 12px; border-bottom: 1px solid #f0f0f0;">' + z.pct + '%</td>' +
        '<td style="padding: 7px 12px; border-bottom: 1px solid #f0f0f0; font-weight: 600;">' + roundWeight(loadWeight, unit) + ' ' + unitLabel + '</td>' +
        '<td style="padding: 7px 12px; border-bottom: 1px solid #f0f0f0; text-align: center;">' + z.reps + '</td>' +
        '<td style="padding: 7px 12px; border-bottom: 1px solid #f0f0f0;' + zoneClass + '">' + z.zone + '</td>';
      loadTbody.appendChild(row);
    });

    // Summary boxes
    document.getElementById('comp-1rm').textContent = roundWeight(average, unit) + ' ' + unitLabel;
    document.getElementById('comp-exercise').textContent = exerciseName;
    document.getElementById('comp-input').textContent = weight + ' ' + unitLabel + ' × ' + reps + ' reps';

    // Strength zone summary
    var strengthWeight = roundWeight(average * 0.85, unit);
    var hypertrophyWeight = roundWeight(average * 0.75, unit);
    var enduranceWeight = roundWeight(average * 0.65, unit);
    document.getElementById('zone-strength').textContent = strengthWeight + ' ' + unitLabel + ' (85%) — 6 reps';
    document.getElementById('zone-hypertrophy').textContent = hypertrophyWeight + ' ' + unitLabel + ' (75%) — 10 reps';
    document.getElementById('zone-endurance').textContent = enduranceWeight + ' ' + unitLabel + ' (65%) — 16 reps';

    // Show results
    resultsSection.classList.remove('hidden');
    resultsSection.classList.add('results-reveal');
    resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // Animate hero number
    if (typeof animateValue === 'function') {
      animateValue(heroEl, 0, Math.round(average), 600);
    }

    // Trigger content loops
    if (typeof showNextSteps === 'function') {
      showNextSteps('one-rep-max', {
        weight_kg: unit === 'kg' ? weight : Math.round(weight / 2.205),
        age: null,
        gender: null
      });
    }
  }

  function roundWeight(val, unit) {
    if (unit === 'kg') return Math.round(val * 10) / 10;
    return Math.round(val);
  }

  // Toggle formula info
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
