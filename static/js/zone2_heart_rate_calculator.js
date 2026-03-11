document.addEventListener('DOMContentLoaded', function () {
  var methodSelect = document.getElementById('method');
  var karvonenFields = document.getElementById('karvonen-fields');
  var maffetoneFields = document.getElementById('maffetone-fields');
  var calculateBtn = document.getElementById('calculate-btn');

  // Show/hide method-specific fields
  function updateMethodFields() {
    var method = methodSelect ? methodSelect.value : 'percent';
    if (karvonenFields) karvonenFields.classList.toggle('hidden', method !== 'karvonen');
    if (maffetoneFields) maffetoneFields.classList.toggle('hidden', method !== 'maffetone');
  }

  if (methodSelect) {
    methodSelect.addEventListener('change', updateMethodFields);
    updateMethodFields();
  }

  if (calculateBtn) {
    calculateBtn.addEventListener('click', calculate);
  }

  function calculate() {
    var ageEl = document.getElementById('age');
    var methodEl = document.getElementById('method');
    var maxHrEl = document.getElementById('max-hr');
    var restingHrEl = document.getElementById('resting-hr');
    var mafAdjEl = document.getElementById('maf-adjustment');

    var age = parseFloat(ageEl ? ageEl.value : '');
    var method = methodEl ? methodEl.value : 'percent';

    // Validate age
    if (!age || age < 10 || age > 100) {
      showError('Please enter a valid age between 10 and 100.');
      return;
    }

    var maxHr, zone2Low, zone2High, allZones, methodNote;

    // Determine max HR
    var customMaxHr = maxHrEl ? parseFloat(maxHrEl.value) : NaN;
    if (customMaxHr && customMaxHr >= 100 && customMaxHr <= 230) {
      maxHr = customMaxHr;
    } else {
      // Tanaka formula (more accurate than 220-age): 208 - (0.7 × age)
      maxHr = Math.round(208 - (0.7 * age));
    }

    if (method === 'karvonen') {
      var restingHr = restingHrEl ? parseFloat(restingHrEl.value) : NaN;
      if (!restingHr || restingHr < 30 || restingHr > 120) {
        showError('Please enter a valid resting heart rate between 30 and 120 bpm.');
        return;
      }
      // Karvonen: Zone 2 = 60-70% HRR + Resting HR
      var hrr = maxHr - restingHr;
      zone2Low = Math.round(hrr * 0.60 + restingHr);
      zone2High = Math.round(hrr * 0.70 + restingHr);
      allZones = [
        { name: 'Zone 1 — Active Recovery', pct: '50–60% HRR', low: Math.round(hrr * 0.50 + restingHr), high: Math.round(hrr * 0.60 + restingHr), desc: 'Very light. Warm-up and cool-down.' },
        { name: 'Zone 2 — Aerobic Base', pct: '60–70% HRR', low: zone2Low, high: zone2High, desc: 'The fat-burning, mitochondria-building zone.', highlight: true },
        { name: 'Zone 3 — Tempo', pct: '70–80% HRR', low: Math.round(hrr * 0.70 + restingHr), high: Math.round(hrr * 0.80 + restingHr), desc: 'Moderate effort. Conversation becomes difficult.' },
        { name: 'Zone 4 — Lactate Threshold', pct: '80–90% HRR', low: Math.round(hrr * 0.80 + restingHr), high: Math.round(hrr * 0.90 + restingHr), desc: 'Hard effort. Race pace for shorter events.' },
        { name: 'Zone 5 — VO₂ Max', pct: '90–100% HRR', low: Math.round(hrr * 0.90 + restingHr), high: maxHr, desc: 'Maximum sprint. Not sustainable for long.' }
      ];
      methodNote = 'Karvonen formula (Heart Rate Reserve). More precise than % Max HR for fit individuals. HRR = ' + maxHr + ' − ' + restingHr + ' = ' + hrr + ' bpm.';
    } else if (method === 'maffetone') {
      var mafAdj = mafAdjEl ? parseInt(mafAdjEl.value) : 0;
      var mafHr = 180 - age + mafAdj;
      // MAF method defines a single upper limit; Zone 2 = MAF-10 to MAF
      zone2Low = mafHr - 10;
      zone2High = mafHr;
      allZones = [
        { name: 'MAF Lower Limit', pct: 'MAF − 10', low: mafHr - 20, high: mafHr - 10, desc: 'Easy warm-up and recovery.' },
        { name: 'MAF Aerobic Zone', pct: 'MAF range', low: mafHr - 10, high: mafHr, desc: 'Maximum aerobic function (Maffetone Zone 2).', highlight: true },
        { name: 'Aerobic–Anaerobic Crossover', pct: 'MAF + 10', low: mafHr, high: mafHr + 10, desc: 'Starts burning more sugar than fat.' },
        { name: 'Anaerobic', pct: 'MAF + 10+', low: mafHr + 10, high: maxHr, desc: 'High intensity. Use sparingly (10–20% of training).' }
      ];
      methodNote = 'Maffetone MAF Method. Your MAF heart rate = 180 − ' + age + (mafAdj >= 0 ? ' + ' + mafAdj : ' − ' + Math.abs(mafAdj)) + ' = ' + mafHr + ' bpm. Train below this ceiling to build maximum aerobic base.';
    } else {
      // Default: % of Max HR
      zone2Low = Math.round(maxHr * 0.60);
      zone2High = Math.round(maxHr * 0.70);
      allZones = [
        { name: 'Zone 1 — Active Recovery', pct: '50–60%', low: Math.round(maxHr * 0.50), high: Math.round(maxHr * 0.60), desc: 'Very light. Warm-up, cool-down, recovery walks.' },
        { name: 'Zone 2 — Aerobic Base', pct: '60–70%', low: zone2Low, high: zone2High, desc: 'The fat-burning, mitochondria-building zone.', highlight: true },
        { name: 'Zone 3 — Tempo', pct: '70–80%', low: Math.round(maxHr * 0.70), high: Math.round(maxHr * 0.80), desc: 'Moderate effort. Slightly breathless but manageable.' },
        { name: 'Zone 4 — Lactate Threshold', pct: '80–90%', low: Math.round(maxHr * 0.80), high: Math.round(maxHr * 0.90), desc: 'Hard effort. Race pace for 5K–10K.' },
        { name: 'Zone 5 — VO₂ Max', pct: '90–100%', low: Math.round(maxHr * 0.90), high: maxHr, desc: 'All-out sprint. Brief, very intense intervals.' }
      ];
      methodNote = 'Percentage of Maximum Heart Rate method. Estimated Max HR uses the Tanaka formula: 208 − (0.7 × age) = ' + maxHr + ' bpm (more accurate than 220 − age for adults over 40).';
    }

    // Calculate talk test interpretation
    var avgZone2 = Math.round((zone2Low + zone2High) / 2);
    var talkTestDesc = 'At ' + zone2Low + '–' + zone2High + ' bpm, you should be able to hold a full conversation — speaking in complete sentences — but feel a noticeable effort. If you\'re gasping, you\'re too high. If you could sing, you\'re too low.';

    // Render results
    var resultsEl = document.getElementById('results-section');
    if (resultsEl) resultsEl.classList.remove('hidden');

    // Set hero
    var heroEl = document.getElementById('zone2-result');
    if (heroEl) heroEl.textContent = zone2Low + '–' + zone2High + ' bpm';

    var heroLabelEl = document.getElementById('result-label');
    if (heroLabelEl) heroLabelEl.textContent = 'Your Zone 2 Heart Rate';

    // Max HR display
    var maxHrDisplayEl = document.getElementById('display-max-hr');
    if (maxHrDisplayEl) maxHrDisplayEl.textContent = maxHr + ' bpm' + (customMaxHr && customMaxHr >= 100 ? ' (entered)' : ' (estimated)');

    // Method note
    var methodNoteEl = document.getElementById('method-note');
    if (methodNoteEl) methodNoteEl.textContent = methodNote;

    // Talk test
    var talkTestEl = document.getElementById('talk-test');
    if (talkTestEl) talkTestEl.textContent = talkTestDesc;

    // Build zones table
    var tbodyEl = document.getElementById('zones-tbody');
    if (tbodyEl) {
      tbodyEl.innerHTML = '';
      allZones.forEach(function (z) {
        var row = document.createElement('tr');
        if (z.highlight) {
          row.style.background = 'rgba(59, 130, 246, 0.08)';
          row.style.fontWeight = '600';
        }
        row.innerHTML =
          '<td style="padding:10px 12px; border-bottom:1px solid #f0f0f0;">' + (z.highlight ? '★ ' : '') + z.name + '</td>' +
          '<td style="padding:10px 12px; border-bottom:1px solid #f0f0f0; text-align:center;">' + z.pct + '</td>' +
          '<td style="padding:10px 12px; border-bottom:1px solid #f0f0f0; text-align:center; font-weight:600;">' + z.low + '–' + z.high + ' bpm</td>' +
          '<td style="padding:10px 12px; border-bottom:1px solid #f0f0f0; font-size:0.88rem; color:#666;">' + z.desc + '</td>';
        tbodyEl.appendChild(row);
      });
    }

    // Weekly target
    var weeklyEl = document.getElementById('weekly-target');
    if (weeklyEl) {
      weeklyEl.textContent = 'Research from Dr. Inigo San Millán recommends 3–4 hours of Zone 2 per week (in sessions of 45–90 minutes) to meaningfully increase mitochondrial density and metabolic flexibility.';
    }

    if (typeof celebratePulse === 'function') celebratePulse();

    // Scroll to results
    resultsEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  function showError(msg) {
    var errEl = document.getElementById('error-message');
    if (errEl) {
      errEl.textContent = msg;
      errEl.classList.remove('hidden');
      setTimeout(function () { errEl.classList.add('hidden'); }, 4000);
    } else {
      alert(msg);
    }
  }
});
