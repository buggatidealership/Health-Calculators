document.addEventListener('DOMContentLoaded', function() {
  var ageValueInput = document.getElementById('age-value');
  var ageUnitSelect = document.getElementById('age-unit');
  var weightLbsInput = document.getElementById('weight-lbs');
  var weightOzInput = document.getElementById('weight-oz');
  var weightKgInput = document.getElementById('weight-kg');
  var weightGInput = document.getElementById('weight-g');
  var weightSystem = document.getElementById('weight-system');
  var imperialWeight = document.getElementById('imperial-weight');
  var metricWeight = document.getElementById('metric-weight');
  var calculateBtn = document.getElementById('calculate-btn');
  var resultsSection = document.getElementById('results-section');

  weightSystem.addEventListener('change', function() {
    if (weightSystem.value === 'imperial') {
      imperialWeight.classList.remove('hidden');
      metricWeight.classList.add('hidden');
    } else {
      imperialWeight.classList.add('hidden');
      metricWeight.classList.remove('hidden');
    }
  });

  calculateBtn.addEventListener('click', function() {
    var ageVal = parseFloat(ageValueInput.value);
    var ageUnit = ageUnitSelect.value;

    if (isNaN(ageVal) || ageVal < 0) {
      alert('Please enter your baby\'s age.');
      return;
    }

    // Convert age to weeks for internal calculation
    var ageWeeks;
    if (ageUnit === 'days') {
      ageWeeks = ageVal / 7;
    } else if (ageUnit === 'weeks') {
      ageWeeks = ageVal;
    } else {
      ageWeeks = ageVal * 4.33;
    }

    var ageMonths = ageWeeks / 4.33;

    if (ageMonths > 12) {
      alert('This calculator is designed for babies 0–12 months. After 12 months, most babies transition to whole milk.');
      return;
    }

    // Get weight in kg
    var weightKg;
    if (weightSystem.value === 'imperial') {
      var lbs = parseFloat(weightLbsInput.value) || 0;
      var oz = parseFloat(weightOzInput.value) || 0;
      var totalLbs = lbs + oz / 16;
      if (totalLbs <= 0) {
        alert('Please enter your baby\'s weight.');
        return;
      }
      weightKg = totalLbs * 0.4536;
    } else {
      var kg = parseFloat(weightKgInput.value) || 0;
      var g = parseFloat(weightGInput.value) || 0;
      weightKg = kg + g / 1000;
      if (weightKg <= 0) {
        alert('Please enter your baby\'s weight.');
        return;
      }
    }

    var weightLbs = weightKg / 0.4536;

    // Determine ml/kg/day rate based on age
    var mlPerKgPerDay;
    var ageBracket;
    var feedingsPerDay;
    var feedingInterval;

    if (ageWeeks < 0.57) {
      // Days 1-4
      mlPerKgPerDay = 45;
      ageBracket = 'First few days';
      feedingsPerDay = 10;
      feedingInterval = '2–3 hours';
    } else if (ageWeeks < 2) {
      // Days 4-14
      mlPerKgPerDay = 150;
      ageBracket = '0–2 weeks';
      feedingsPerDay = 10;
      feedingInterval = '2–3 hours';
    } else if (ageWeeks < 4.33) {
      // 2 weeks to 1 month
      mlPerKgPerDay = 150;
      ageBracket = '2 weeks – 1 month';
      feedingsPerDay = 8;
      feedingInterval = '2–3 hours';
    } else if (ageMonths < 2) {
      mlPerKgPerDay = 150;
      ageBracket = '1–2 months';
      feedingsPerDay = 7;
      feedingInterval = '3–4 hours';
    } else if (ageMonths < 4) {
      mlPerKgPerDay = 150;
      ageBracket = '2–4 months';
      feedingsPerDay = 6;
      feedingInterval = '3–4 hours';
    } else if (ageMonths < 6) {
      mlPerKgPerDay = 120;
      ageBracket = '4–6 months';
      feedingsPerDay = 5;
      feedingInterval = '3–4 hours';
    } else if (ageMonths < 9) {
      mlPerKgPerDay = 100;
      ageBracket = '6–9 months';
      feedingsPerDay = 4;
      feedingInterval = '4–5 hours';
    } else {
      mlPerKgPerDay = 75;
      ageBracket = '9–12 months';
      feedingsPerDay = 3;
      feedingInterval = '4–5 hours';
    }

    // Calculate total daily amount
    var totalMlPerDay = mlPerKgPerDay * weightKg;
    var totalOzPerDay = totalMlPerDay / 29.5735;

    // Apply 32 oz (960 ml) daily cap
    var capped = false;
    if (totalOzPerDay > 32) {
      totalOzPerDay = 32;
      totalMlPerDay = 960;
      capped = true;
    }

    // Per feeding
    var ozPerFeeding = totalOzPerDay / feedingsPerDay;
    var mlPerFeeding = totalMlPerDay / feedingsPerDay;

    // Show results
    resultsSection.classList.remove('hidden');

    var heroEl = document.getElementById('formula-result');
    heroEl.textContent = Math.round(totalOzPerDay) + ' oz';

    if (typeof animateCountUp === 'function') {
      animateCountUp(heroEl, 0, Math.round(totalOzPerDay), 0, ' oz');
    }

    document.getElementById('formula-label').textContent = 'per day (' + Math.round(totalMlPerDay) + ' ml)';

    // Status
    var statusEl = document.getElementById('formula-status');
    var iconEl = document.getElementById('formula-icon');
    var descEl = document.getElementById('formula-description');

    if (capped) {
      statusEl.className = 'result-status status-warning';
      iconEl.textContent = '⚠';
      descEl.textContent = 'Based on weight alone, your baby would need more than 32 oz/day. The AAP recommends a maximum of 32 oz (960 ml) per day. Talk to your pediatrician — your baby may be ready for solid foods.';
    } else if (ageWeeks < 0.57) {
      statusEl.className = 'result-status status-warning';
      iconEl.textContent = 'ℹ';
      descEl.textContent = 'Newborns in the first few days have very small stomachs. Feed on demand — amounts increase rapidly over the first week. Colostrum or small formula amounts (0.5–1 oz per feeding) are normal.';
    } else {
      statusEl.className = 'result-status status-good';
      iconEl.textContent = '✓';
      descEl.textContent = 'Feed approximately ' + ozPerFeeding.toFixed(1) + ' oz (' + Math.round(mlPerFeeding) + ' ml) per feeding, ' + feedingsPerDay + ' times per day, every ' + feedingInterval + '. Always follow your baby\'s hunger and fullness cues.';
    }

    // Comparison boxes
    document.getElementById('comp-daily').textContent = Math.round(totalOzPerDay) + ' oz';
    document.getElementById('comp-feeding').textContent = ozPerFeeding.toFixed(1) + ' oz';
    document.getElementById('comp-feedings').textContent = feedingsPerDay;

    // Breakdown
    document.getElementById('display-daily-oz').textContent = Math.round(totalOzPerDay) + ' oz (' + Math.round(totalMlPerDay) + ' ml)';
    document.getElementById('display-per-feeding').textContent = ozPerFeeding.toFixed(1) + ' oz (' + Math.round(mlPerFeeding) + ' ml)';
    document.getElementById('display-feedings').textContent = feedingsPerDay + ' feedings per day';
    document.getElementById('display-interval').textContent = 'Every ' + feedingInterval;
    document.getElementById('display-age-bracket').textContent = ageBracket;
    document.getElementById('display-rate').textContent = mlPerKgPerDay + ' ml/kg/day' + (capped ? ' (capped at 32 oz/day)' : '');

    // Weight display
    var weightDisplay = weightLbs.toFixed(1) + ' lbs (' + weightKg.toFixed(2) + ' kg)';
    document.getElementById('display-weight').textContent = weightDisplay;

    // Feeding schedule table
    var tbody = document.getElementById('schedule-tbody');
    tbody.innerHTML = '';
    var brackets = [
      { age: '0–2 weeks', ozFeed: '1–2', feeds: '8–12', totalOz: '8–24', interval: 'Every 2–3 hrs' },
      { age: '2 wks – 1 mo', ozFeed: '2–4', feeds: '7–8', totalOz: '16–32', interval: 'Every 2–3 hrs' },
      { age: '1–2 months', ozFeed: '3–4', feeds: '6–8', totalOz: '18–32', interval: 'Every 3–4 hrs' },
      { age: '2–4 months', ozFeed: '4–5', feeds: '5–6', totalOz: '20–32', interval: 'Every 3–4 hrs' },
      { age: '4–6 months', ozFeed: '4–6', feeds: '5–6', totalOz: '24–32', interval: 'Every 3–4 hrs' },
      { age: '6–9 months', ozFeed: '6–8', feeds: '4–5', totalOz: '24–32', interval: 'Every 4–5 hrs' },
      { age: '9–12 months', ozFeed: '6–8', feeds: '3–4', totalOz: '24–32', interval: 'Every 4–5 hrs' }
    ];

    for (var i = 0; i < brackets.length; i++) {
      var b = brackets[i];
      var tr = document.createElement('tr');
      var isCurrent = b.age === ageBracket ||
        (ageBracket === '2 weeks – 1 month' && b.age === '2 wks – 1 mo') ||
        (ageBracket === 'First few days' && b.age === '0–2 weeks') ||
        (ageBracket === '0–2 weeks' && b.age === '0–2 weeks');
      if (isCurrent) {
        tr.style.background = '#f0f9ff';
        tr.style.fontWeight = '600';
      }
      tr.innerHTML =
        '<td style="padding:6px 10px;border-bottom:1px solid #f0f0f0;">' + b.age + (isCurrent ? ' ←' : '') + '</td>' +
        '<td style="padding:6px 10px;border-bottom:1px solid #f0f0f0;">' + b.ozFeed + ' oz</td>' +
        '<td style="padding:6px 10px;border-bottom:1px solid #f0f0f0;">' + b.feeds + '</td>' +
        '<td style="padding:6px 10px;border-bottom:1px solid #f0f0f0;">' + b.totalOz + ' oz</td>' +
        '<td style="padding:6px 10px;border-bottom:1px solid #f0f0f0;color:var(--color-text-tertiary);font-size:0.85rem;">' + b.interval + '</td>';
      tbody.appendChild(tr);
    }

    // Solids note
    var solidsNote = document.getElementById('solids-note');
    if (ageMonths >= 4) {
      solidsNote.classList.remove('hidden');
    } else {
      solidsNote.classList.add('hidden');
    }

    resultsSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    if (typeof celebratePulse === 'function') {
      celebratePulse(document.getElementById('result-hero'));
    }

    if (typeof showNextSteps === 'function') {
      showNextSteps('formula-feeding', {});
    }
  });
});
