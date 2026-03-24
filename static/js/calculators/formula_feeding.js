// Formula Feeding Calculator — factory-compatible
(function() {
var ageValueInput = document.getElementById('age-value');
var ageUnitSelect = document.getElementById('age-unit');
var weightLbsInput = document.getElementById('weight-lbs');
var weightOzInput = document.getElementById('weight-oz');
var weightKgInput = document.getElementById('weight-kg');
var weightGInput = document.getElementById('weight-g');
var weightSystem = document.getElementById('weight-system');
var calculateBtn = document.getElementById('calcBtn');

// Imperial/metric field visibility — factory renders all fields flat,
// JS manages which row is visible via closest .form-row parent
function getRow(el) { return el ? el.closest('.form-row') || el.closest('.form-group') : null; }
var imperialRow = getRow(weightLbsInput);
var metricRow = getRow(weightKgInput);

function toggleWeightSystem() {
  if (!weightSystem) return;
  var isImperial = weightSystem.value === 'imperial';
  if (imperialRow) imperialRow.style.display = isImperial ? '' : 'none';
  if (metricRow) metricRow.style.display = isImperial ? 'none' : '';
}

if (weightSystem) {
  weightSystem.addEventListener('change', toggleWeightSystem);
  toggleWeightSystem(); // set initial state — metric row hidden
}

if (calculateBtn) {
  calculateBtn.addEventListener('click', function() {
    var ageVal = parseFloat(ageValueInput ? ageValueInput.value : '');
    var ageUnit = ageUnitSelect ? ageUnitSelect.value : 'weeks';

    if (isNaN(ageVal) || ageVal < 0) return;

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
    if (ageMonths > 12) return;

    // Get weight in kg
    var weightKg;
    if (!weightSystem || weightSystem.value === 'imperial') {
      var lbs = parseFloat(weightLbsInput ? weightLbsInput.value : '') || 0;
      var oz = parseFloat(weightOzInput ? weightOzInput.value : '') || 0;
      var totalLbs = lbs + oz / 16;
      if (totalLbs <= 0) return;
      weightKg = totalLbs * 0.4536;
    } else {
      var kg = parseFloat(weightKgInput ? weightKgInput.value : '') || 0;
      var g = parseFloat(weightGInput ? weightGInput.value : '') || 0;
      weightKg = kg + g / 1000;
      if (weightKg <= 0) return;
    }

    var weightLbs = weightKg / 0.4536;

    // Determine ml/kg/day rate based on age
    var mlPerKgPerDay, ageBracket, feedingsPerDay, feedingInterval;

    if (ageWeeks < 0.57) {
      mlPerKgPerDay = 45; ageBracket = 'First few days';
      feedingsPerDay = 10; feedingInterval = '2\u20133 hours';
    } else if (ageWeeks < 2) {
      mlPerKgPerDay = 150; ageBracket = '0\u20132 weeks';
      feedingsPerDay = 10; feedingInterval = '2\u20133 hours';
    } else if (ageWeeks < 4.33) {
      mlPerKgPerDay = 150; ageBracket = '2 weeks \u2013 1 month';
      feedingsPerDay = 8; feedingInterval = '2\u20133 hours';
    } else if (ageMonths < 2) {
      mlPerKgPerDay = 150; ageBracket = '1\u20132 months';
      feedingsPerDay = 7; feedingInterval = '3\u20134 hours';
    } else if (ageMonths < 4) {
      mlPerKgPerDay = 150; ageBracket = '2\u20134 months';
      feedingsPerDay = 6; feedingInterval = '3\u20134 hours';
    } else if (ageMonths < 6) {
      mlPerKgPerDay = 120; ageBracket = '4\u20136 months';
      feedingsPerDay = 5; feedingInterval = '3\u20134 hours';
    } else if (ageMonths < 9) {
      mlPerKgPerDay = 100; ageBracket = '6\u20139 months';
      feedingsPerDay = 4; feedingInterval = '4\u20135 hours';
    } else {
      mlPerKgPerDay = 75; ageBracket = '9\u201312 months';
      feedingsPerDay = 3; feedingInterval = '4\u20135 hours';
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

    var ozPerFeeding = totalOzPerDay / feedingsPerDay;
    var mlPerFeeding = totalMlPerDay / feedingsPerDay;

    // Primary result
    var resultNum = document.getElementById('resultNumber');
    if (resultNum) resultNum.textContent = Math.round(totalOzPerDay) + ' oz';

    // Verdict
    var verdict = document.getElementById('resultVerdict');
    if (verdict) {
      if (capped) {
        verdict.textContent = 'Capped at 32 oz/day (AAP max). Talk to your pediatrician about starting solids.';
      } else if (ageWeeks < 0.57) {
        verdict.textContent = 'Newborns have tiny stomachs. Feed on demand \u2014 amounts increase rapidly over the first week.';
      } else {
        verdict.textContent = '~' + ozPerFeeding.toFixed(1) + ' oz per feeding, ' + feedingsPerDay + 'x/day, every ' + feedingInterval;
      }
    }

    // Comparison cards
    var compDaily = document.getElementById('comp-daily');
    if (compDaily) compDaily.textContent = Math.round(totalOzPerDay) + ' oz';
    var compFeeding = document.getElementById('comp-feeding');
    if (compFeeding) compFeeding.textContent = ozPerFeeding.toFixed(1) + ' oz';
    var compFeedings = document.getElementById('comp-feedings');
    if (compFeedings) compFeedings.textContent = feedingsPerDay;

    // Breakdown rows
    var breakdownContainer = document.getElementById('breakdown-rows');
    if (breakdownContainer) {
      var rows = [
        ['Daily Total', Math.round(totalOzPerDay) + ' oz (' + Math.round(totalMlPerDay) + ' ml)'],
        ['Per Feeding', ozPerFeeding.toFixed(1) + ' oz (' + Math.round(mlPerFeeding) + ' ml)'],
        ['Feedings Per Day', feedingsPerDay + ' feedings per day'],
        ['Feeding Interval', 'Every ' + feedingInterval],
        ['Age Bracket', ageBracket],
        ['Calculation Rate', mlPerKgPerDay + ' ml/kg/day' + (capped ? ' (capped at 32 oz/day)' : '')],
        ['Baby\'s Weight', weightLbs.toFixed(1) + ' lbs (' + weightKg.toFixed(2) + ' kg)']
      ];
      breakdownContainer.innerHTML = rows.map(function(r) {
        return '<div style="display:flex;justify-content:space-between;padding:0.5rem 0;border-bottom:1px solid rgba(var(--accent-rgb),0.06);">'
          + '<span style="color:var(--text-dim);font-size:0.9rem;">' + r[0] + '</span>'
          + '<span style="color:var(--text);font-size:0.9rem;font-weight:500;">' + r[1] + '</span>'
          + '</div>';
      }).join('');
    }

    // Solids note
    var solidsNote = document.getElementById('solids-note');
    if (solidsNote) {
      solidsNote.style.display = ageMonths >= 4 ? '' : 'none';
    }

    // Feeding schedule table
    var tbody = document.getElementById('schedule-tbody');
    if (tbody) {
      var brackets = [
        { age: '0\u20132 weeks', ozFeed: '1\u20132', feeds: '8\u201312', totalOz: '8\u201324', interval: 'Every 2\u20133 hrs' },
        { age: '2 wks \u2013 1 mo', ozFeed: '2\u20134', feeds: '7\u20138', totalOz: '16\u201332', interval: 'Every 2\u20133 hrs' },
        { age: '1\u20132 months', ozFeed: '3\u20134', feeds: '6\u20138', totalOz: '18\u201332', interval: 'Every 3\u20134 hrs' },
        { age: '2\u20134 months', ozFeed: '4\u20135', feeds: '5\u20136', totalOz: '20\u201332', interval: 'Every 3\u20134 hrs' },
        { age: '4\u20136 months', ozFeed: '4\u20136', feeds: '5\u20136', totalOz: '24\u201332', interval: 'Every 3\u20134 hrs' },
        { age: '6\u20139 months', ozFeed: '6\u20138', feeds: '4\u20135', totalOz: '24\u201332', interval: 'Every 4\u20135 hrs' },
        { age: '9\u201312 months', ozFeed: '6\u20138', feeds: '3\u20134', totalOz: '24\u201332', interval: 'Every 4\u20135 hrs' }
      ];
      tbody.innerHTML = '';
      for (var i = 0; i < brackets.length; i++) {
        var b = brackets[i];
        var tr = document.createElement('tr');
        var isCurrent = b.age === ageBracket ||
          (ageBracket === '2 weeks \u2013 1 month' && b.age === '2 wks \u2013 1 mo') ||
          (ageBracket === 'First few days' && b.age === '0\u20132 weeks') ||
          (ageBracket === '0\u20132 weeks' && b.age === '0\u20132 weeks');
        if (isCurrent) {
          tr.style.background = 'rgba(var(--accent-rgb), 0.08)';
          tr.style.fontWeight = '600';
        }
        var cellStyle = 'padding:6px 10px;border-bottom:1px solid rgba(var(--accent-rgb),0.06);color:var(--text-dim);font-size:0.85rem;';
        tr.innerHTML =
          '<td style="' + cellStyle + '">' + b.age + (isCurrent ? ' \u2190' : '') + '</td>' +
          '<td style="' + cellStyle + '">' + b.ozFeed + ' oz</td>' +
          '<td style="' + cellStyle + '">' + b.feeds + '</td>' +
          '<td style="' + cellStyle + '">' + b.totalOz + ' oz</td>' +
          '<td style="' + cellStyle + '">' + b.interval + '</td>';
        tbody.appendChild(tr);
      }
    }

    // Coach card
    var coachCard = document.getElementById('coachCard');
    if (coachCard) {
      var coachHtml = '<p>';
      if (capped) {
        coachHtml += 'Based on weight alone, your baby would need more than <span class="hl">32 oz/day</span>. '
          + 'The AAP recommends a maximum of 32 oz (960 ml) per day.</p>'
          + '<p class="coach-rule">Talk to your pediatrician about starting solids.</p>'
          + '<div class="coach-advice"><em>At this weight, your baby may be ready for solid foods alongside formula.</em></div>';
      } else if (ageWeeks < 0.57) {
        coachHtml += 'In the first few days, your newborn\'s stomach is <span class="hl">tiny</span> \u2014 '
          + 'about the size of a cherry. Feed on demand with small amounts.</p>'
          + '<p class="coach-rule">0.5\u20131 oz per feeding is normal for newborns.</p>'
          + '<div class="coach-advice"><em>Amounts increase rapidly over the first week as your baby\'s stomach grows.</em></div>';
      } else {
        coachHtml += 'Your baby needs approximately <span class="hl">' + Math.round(totalOzPerDay) + ' oz (' + Math.round(totalMlPerDay) + ' ml)</span> '
          + 'of formula per day, split into <span class="hl">' + feedingsPerDay + ' feedings</span>.</p>'
          + '<p class="coach-rule">~' + ozPerFeeding.toFixed(1) + ' oz every ' + feedingInterval + '</p>'
          + '<div class="coach-advice"><em>Always follow your baby\'s hunger and fullness cues \u2014 these amounts are guidelines, not strict rules.</em></div>';
      }
      coachCard.innerHTML = coachHtml;
    }

    // Share text
    if (typeof updateShareButtons === 'function') {
      updateShareButtons('My baby needs ~' + Math.round(totalOzPerDay) + ' oz of formula per day (' + ozPerFeeding.toFixed(1) + ' oz per feeding, ' + feedingsPerDay + 'x/day). Calculate yours: https://healthcalculators.xyz/formula-feeding-calculator');
    }

    // Factory reveal
    if (typeof factoryReveal === 'function') { factoryReveal(); }
  });
}
})();
