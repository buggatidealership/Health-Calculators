/**
 * Sleep Calculator
 * Calculates optimal bedtimes and wake-up times based on 90-minute sleep cycles.
 */

var SLEEP_CYCLE_MINUTES = 90;

// NSF recommended sleep durations by age group (hours)
var NSF_RECOMMENDATIONS = {
  newborn:   { label: 'Newborn (0-3 months)',      min: 14, max: 17 },
  infant:    { label: 'Infant (4-11 months)',       min: 12, max: 15 },
  toddler:   { label: 'Toddler (1-2 years)',       min: 11, max: 14 },
  preschool: { label: 'Preschool (3-5 years)',      min: 10, max: 13 },
  school:    { label: 'School Age (6-13 years)',     min: 9,  max: 11 },
  teen:      { label: 'Teen (14-17 years)',          min: 8,  max: 10 },
  adult:     { label: 'Adult (18-64 years)',         min: 7,  max: 9  },
  older:     { label: 'Older Adult (65+ years)',     min: 7,  max: 8  }
};

function getAgeGroup(age) {
  if (age < 1) return 'newborn';
  if (age < 2) return 'infant';
  if (age < 3) return 'toddler';
  if (age < 6) return 'preschool';
  if (age < 14) return 'school';
  if (age < 18) return 'teen';
  if (age < 65) return 'adult';
  return 'older';
}

function formatTime12(date) {
  var h = date.getHours();
  var m = date.getMinutes();
  var ampm = h >= 12 ? 'PM' : 'AM';
  h = h % 12;
  if (h === 0) h = 12;
  var mStr = m < 10 ? '0' + m : '' + m;
  return h + ':' + mStr + ' ' + ampm;
}

function getCycleColor(cycles) {
  if (cycles >= 5) return 'green';
  if (cycles === 4) return 'yellow';
  return 'red';
}

function getCycleLabel(cycles) {
  if (cycles >= 5) return 'Optimal';
  if (cycles === 4) return 'Acceptable';
  return 'Too little';
}

function setMode(mode) {
  var wakeTab = document.getElementById('tab-wake');
  var bedTab = document.getElementById('tab-bed');
  var wakeInput = document.getElementById('wake-input');
  var bedInput = document.getElementById('bed-input');

  if (mode === 'wake') {
    wakeTab.classList.add('active');
    bedTab.classList.remove('active');
    wakeInput.classList.remove('hidden');
    bedInput.classList.add('hidden');
  } else {
    bedTab.classList.add('active');
    wakeTab.classList.remove('active');
    bedInput.classList.remove('hidden');
    wakeInput.classList.add('hidden');
  }
  autoRecalc();
}

// Fall asleep pill toggle
function setFallAsleep(el) {
  document.querySelectorAll('.fall-asleep-btn').forEach(function(btn) {
    btn.classList.toggle('active', btn === el);
  });
  document.getElementById('fall-asleep').value = el.getAttribute('data-value');
  autoRecalc();
}

// Auto-recalculate after first calculation
var _sleepCalculated = false;
function autoRecalc() {
  if (_sleepCalculated) {
    calculateSleep(true);
  }
}

function calculateSleep(silent) {
  var wakeTab = document.getElementById('tab-wake');
  var mode = wakeTab.classList.contains('active') ? 'wake' : 'bed';

  var ageEl = document.getElementById('age');
  var fallAsleepEl = document.getElementById('fall-asleep');

  var age = parseInt(ageEl.value);
  var fallAsleepMin = parseInt(fallAsleepEl.value);

  if (isNaN(age) || age < 0 || age > 120) {
    if (!silent) alert('Please enter a valid age.');
    return;
  }

  var timeValue;
  if (mode === 'wake') {
    timeValue = document.getElementById('wake-time').value;
    if (!timeValue) { if (!silent) alert('Please enter a wake-up time.'); return; }
  } else {
    timeValue = document.getElementById('bed-time').value;
    if (!timeValue) { if (!silent) alert('Please enter a bedtime.'); return; }
  }

  _sleepCalculated = true;

  var parts = timeValue.split(':');
  var hours = parseInt(parts[0]);
  var minutes = parseInt(parts[1]);

  var results = [];
  var baseDate = new Date();
  baseDate.setSeconds(0, 0);

  if (mode === 'wake') {
    // Calculate bedtimes: wakeTime - (cycles x 90) - fallAsleep
    baseDate.setHours(hours, minutes);
    for (var c = 6; c >= 3; c--) {
      var totalMin = (c * SLEEP_CYCLE_MINUTES) + fallAsleepMin;
      var bedtime = new Date(baseDate.getTime() - totalMin * 60000);
      var sleepHours = (c * SLEEP_CYCLE_MINUTES) / 60;
      results.push({
        time: bedtime,
        cycles: c,
        sleepHours: sleepHours,
        color: getCycleColor(c),
        label: getCycleLabel(c)
      });
    }
  } else {
    // Calculate wake times: bedTime + fallAsleep + (cycles x 90)
    baseDate.setHours(hours, minutes);
    for (var c = 6; c >= 3; c--) {
      var totalMin = fallAsleepMin + (c * SLEEP_CYCLE_MINUTES);
      var wakeTime = new Date(baseDate.getTime() + totalMin * 60000);
      var sleepHours = (c * SLEEP_CYCLE_MINUTES) / 60;
      results.push({
        time: wakeTime,
        cycles: c,
        sleepHours: sleepHours,
        color: getCycleColor(c),
        label: getCycleLabel(c)
      });
    }
  }

  // Show results
  var resultsDiv = document.getElementById('results');
  var wasHidden = resultsDiv.classList.contains('hidden');
  resultsDiv.classList.remove('hidden');
  if (wasHidden) {
    resultsDiv.classList.remove('results-reveal');
    void resultsDiv.offsetWidth;
    resultsDiv.classList.add('results-reveal');
  }
  if (!silent) {
    resultsDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  var headerEl = document.getElementById('results-header');
  headerEl.textContent = mode === 'wake'
    ? 'Recommended bedtimes to wake up at ' + formatTime12(baseDate)
    : 'Recommended wake-up times if you go to bed at ' + formatTime12(baseDate);

  var grid = document.getElementById('results-grid');
  grid.innerHTML = '';

  results.forEach(function(r) {
    var card = document.createElement('div');
    card.className = 'sleep-result-card sleep-' + r.color;
    if (r.cycles === 5 || r.cycles === 6) {
      card.classList.add('sleep-recommended');
    }

    var badge = '';
    if (r.cycles === 5) badge = '<span class="sleep-badge">Recommended</span>';
    if (r.cycles === 6) badge = '<span class="sleep-badge">Best</span>';

    card.innerHTML =
      badge +
      '<div class="sleep-time">' + formatTime12(r.time) + '</div>' +
      '<div class="sleep-detail">' + r.cycles + ' cycles &middot; ' + r.sleepHours + 'h sleep</div>' +
      '<div class="sleep-label sleep-label-' + r.color + '">' + r.label + '</div>';

    grid.appendChild(card);
  });

  // Age-based recommendation
  var ageGroup = getAgeGroup(age);
  var rec = NSF_RECOMMENDATIONS[ageGroup];
  var recEl = document.getElementById('age-recommendation');
  recEl.innerHTML = '<strong>For your age group (' + rec.label + '):</strong> The National Sleep Foundation recommends <strong>' + rec.min + ' to ' + rec.max + ' hours</strong> of sleep per night.';

  // Show next steps
  showNextSteps('sleep', collectUserData());
}

// Initialize and wire up auto-recalc
document.addEventListener('DOMContentLoaded', function() {
  // Set default wake time to 7:00 AM
  var wakeTime = document.getElementById('wake-time');
  if (wakeTime && !wakeTime.value) wakeTime.value = '07:00';
  // Set default bed time to 22:00
  var bedTime = document.getElementById('bed-time');
  if (bedTime && !bedTime.value) bedTime.value = '22:00';

  // Auto-recalc on input change
  var inputs = document.querySelectorAll('#wake-time, #bed-time, #age');
  inputs.forEach(function(input) {
    input.addEventListener('input', autoRecalc);
  });
});
