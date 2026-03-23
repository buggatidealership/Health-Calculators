// Gestational Age Calculator — factory-compatible
(function() {
var methodSelect = document.getElementById('method');
var lmpGroup = document.getElementById('lmp-group');
var ultrasoundGroup = document.getElementById('ultrasound-group');
var ivfGroup = document.getElementById('ivf-group');
var lmpInput = document.getElementById('lmp-date');
var usDateInput = document.getElementById('us-date');
var usWeeksInput = document.getElementById('us-weeks');
var usDaysInput = document.getElementById('us-days');
var ivfDateInput = document.getElementById('ivf-date');
var ivfTypeSelect = document.getElementById('ivf-type');
var calculateBtn = document.getElementById('calcBtn');
var resultsSection = document.getElementById('results-section');

// Set default LMP date to ~8 weeks ago
var defaultLmp = new Date();
defaultLmp.setDate(defaultLmp.getDate() - 56);
lmpInput.value = formatDateInput(defaultLmp);

// Set default ultrasound date to today
usDateInput.value = formatDateInput(new Date());

// Set default IVF date to ~5 weeks ago
var defaultIvf = new Date();
defaultIvf.setDate(defaultIvf.getDate() - 35);
ivfDateInput.value = formatDateInput(defaultIvf);

methodSelect.addEventListener('change', function() {
  lmpGroup.classList.add('hidden');
  ultrasoundGroup.classList.add('hidden');
  ivfGroup.classList.add('hidden');
  if (methodSelect.value === 'lmp') lmpGroup.classList.remove('hidden');
  else if (methodSelect.value === 'ultrasound') ultrasoundGroup.classList.remove('hidden');
  else if (methodSelect.value === 'ivf') ivfGroup.classList.remove('hidden');
});

calculateBtn.addEventListener('click', function() {
  var today = new Date();
  today.setHours(0, 0, 0, 0);
  var gestStartDate; // The "LMP equivalent" date

  if (methodSelect.value === 'lmp') {
    if (!lmpInput.value) {
      return;
    }
    gestStartDate = parseLocalDate(lmpInput.value);
  } else if (methodSelect.value === 'ultrasound') {
    if (!usDateInput.value) {
      return;
    }
    var usWeeks = parseInt(usWeeksInput.value) || 0;
    var usDays = parseInt(usDaysInput.value) || 0;
    if (usWeeks === 0 && usDays === 0) {
      return;
    }
    var usDate = parseLocalDate(usDateInput.value);
    var totalDaysAtUs = usWeeks * 7 + usDays;
    gestStartDate = new Date(usDate);
    gestStartDate.setDate(gestStartDate.getDate() - totalDaysAtUs);
  } else if (methodSelect.value === 'ivf') {
    if (!ivfDateInput.value) {
      return;
    }
    var ivfDate = parseLocalDate(ivfDateInput.value);
    var ivfType = parseInt(ivfTypeSelect.value); // 3 or 5
    // IVF: gestational age = transfer date + (14 - embryo age) days before = LMP equivalent
    // Day 3 embryo: LMP equivalent = transfer date - 17 days (14 + 3)
    // Day 5 embryo: LMP equivalent = transfer date - 19 days (14 + 5)
    var daysToSubtract = 14 + ivfType;
    gestStartDate = new Date(ivfDate);
    gestStartDate.setDate(gestStartDate.getDate() - daysToSubtract);
  }

  // Calculate gestational age
  var diffMs = today.getTime() - gestStartDate.getTime();
  var totalDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (totalDays < 0) {
    return;
  }
  if (totalDays > 301) { // ~43 weeks
    return;
  }

  var weeks = Math.floor(totalDays / 7);
  var days = totalDays % 7;

  // Due date (EDD): LMP + 280 days (Naegele's rule)
  var edd = new Date(gestStartDate);
  edd.setDate(edd.getDate() + 280);
  var daysRemaining = Math.floor((edd.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

  // Fetal age (conceptional age) = gestational age - 14 days
  var fetalDays = Math.max(0, totalDays - 14);
  var fetalWeeks = Math.floor(fetalDays / 7);
  var fetalDaysRem = fetalDays % 7;

  // Trimester
  var trimester, trimesterLabel;
  if (weeks < 13) {
    trimester = 1;
    trimesterLabel = 'First Trimester (weeks 1-12)';
  } else if (weeks < 27) {
    trimester = 2;
    trimesterLabel = 'Second Trimester (weeks 13-26)';
  } else {
    trimester = 3;
    trimesterLabel = 'Third Trimester (weeks 27-40)';
  }

  // ACOG term classification (2013)
  var termClass;
  if (weeks < 37) termClass = 'Preterm';
  else if (weeks < 39) termClass = 'Early Term (37w0d-38w6d)';
  else if (weeks < 41) termClass = 'Full Term (39w0d-40w6d)';
  else if (weeks < 42) termClass = 'Late Term (41w0d-41w6d)';
  else termClass = 'Post Term (≥42w0d)';

  // Progress percentage
  var progressPct = Math.min((totalDays / 280) * 100, 100);

  // Current milestone
  var milestone = getMilestone(weeks);

  // Show results
  resultsSection.classList.remove('hidden');

  var heroEl = document.getElementById('ga-result');
  var labelEl = document.getElementById('ga-label');
  heroEl.textContent = weeks + 'w ' + days + 'd';
  labelEl.textContent = trimesterLabel;

  if (typeof animateCountUp === 'function') {
    animateCountUp(heroEl, 0, weeks, 0, 'w ' + days + 'd');
  }

  // Status
  var statusEl = document.getElementById('ga-status');
  var iconEl = document.getElementById('ga-icon');
  var descEl = document.getElementById('ga-description');

  if (daysRemaining > 0) {
    statusEl.className = 'result-status status-good';
    iconEl.textContent = '✓';
    descEl.textContent = 'You are ' + weeks + ' weeks and ' + days + ' days pregnant. Your estimated due date is ' + formatDateDisplay(edd) + ' (' + daysRemaining + ' days from now). ' + milestone;
  } else {
    statusEl.className = 'result-status status-warning';
    iconEl.textContent = '⚠';
    descEl.textContent = 'You are ' + weeks + ' weeks and ' + days + ' days, which is ' + Math.abs(daysRemaining) + ' days past your estimated due date of ' + formatDateDisplay(edd) + '. Discuss delivery timing with your provider.';
  }

  // Progress gauge
  document.getElementById('gauge-marker').style.left = progressPct + '%';
  document.getElementById('progress-pct').textContent = Math.round(progressPct) + '%';

  // Breakdown
  document.getElementById('display-ga').textContent = weeks + ' weeks, ' + days + ' days (' + totalDays + ' days total)';
  document.getElementById('display-fetal-age').textContent = fetalWeeks + ' weeks, ' + fetalDaysRem + ' days';
  document.getElementById('display-edd').textContent = formatDateDisplay(edd);
  document.getElementById('display-remaining').textContent = daysRemaining > 0 ? daysRemaining + ' days (' + Math.round(daysRemaining / 7 * 10) / 10 + ' weeks)' : 'Past due by ' + Math.abs(daysRemaining) + ' days';
  document.getElementById('display-trimester').textContent = trimesterLabel;
  document.getElementById('display-term-class').textContent = termClass;
  document.getElementById('display-progress').textContent = Math.round(progressPct) + '% complete';

  // Comparison boxes
  document.getElementById('comp-ga').textContent = weeks + 'w ' + days + 'd';
  document.getElementById('comp-edd').textContent = formatDateShort(edd);
  document.getElementById('comp-trimester').textContent = 'Trimester ' + trimester;

  // Milestone timeline
  buildTimeline(weeks);

  resultsSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

  if (typeof celebratePulse === 'function') {
    celebratePulse(document.getElementById('result-hero'));
  }

  if (typeof showNextSteps === 'function') {
    showNextSteps('gestational-age', { age: 0, gender: 'female' });
  }
});

function parseLocalDate(str) {
  var parts = str.split('-');
  return new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2]));
}

function formatDateInput(d) {
  var y = d.getFullYear();
  var m = ('0' + (d.getMonth() + 1)).slice(-2);
  var day = ('0' + d.getDate()).slice(-2);
  return y + '-' + m + '-' + day;
}

function formatDateDisplay(d) {
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return months[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear();
}

function formatDateShort(d) {
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return months[d.getMonth()] + ' ' + d.getDate();
}

function getMilestone(weeks) {
  if (weeks < 4) return 'Implantation is occurring around this time.';
  if (weeks < 6) return 'The heart begins to beat around week 5-6.';
  if (weeks < 8) return 'Major organs are forming. Arms and legs are developing.';
  if (weeks < 10) return 'All major organs have begun to form. The embryonic period is ending.';
  if (weeks < 12) return 'The fetus can make movements. External genitalia begin to differentiate.';
  if (weeks < 14) return 'First trimester screening window. Risk of miscarriage drops significantly.';
  if (weeks < 16) return 'The fetus can hear sounds. Fingerprints are forming.';
  if (weeks < 18) return 'You may begin to feel fetal movements (quickening).';
  if (weeks < 20) return 'Anatomy scan (20-week ultrasound) is typically done around this time.';
  if (weeks < 24) return 'The fetus is developing sleep-wake cycles. Viability threshold is approaching.';
  if (weeks < 28) return 'The lungs are developing surfactant. Viability increases significantly after 24 weeks.';
  if (weeks < 32) return 'Rapid brain development. The fetus can open eyes and respond to light.';
  if (weeks < 36) return 'The fetus is gaining weight rapidly. Lungs are maturing.';
  if (weeks < 37) return 'Almost term. The fetus is practicing breathing movements.';
  if (weeks < 39) return 'Early term. The brain and lungs continue to mature through week 39.';
  if (weeks < 41) return 'Full term. The fetus is ready for birth.';
  return 'Past the due date. Your provider will discuss delivery options.';
}

function buildTimeline(currentWeek) {
  var tbody = document.getElementById('milestone-tbody');
  tbody.innerHTML = '';

  var milestones = [
    { week: 4, label: 'Implantation complete' },
    { week: 6, label: 'Heartbeat detectable' },
    { week: 8, label: 'Major organs forming' },
    { week: 12, label: 'End of first trimester' },
    { week: 16, label: 'Sex may be visible on ultrasound' },
    { week: 20, label: 'Anatomy scan (mid-pregnancy ultrasound)' },
    { week: 24, label: 'Viability threshold' },
    { week: 28, label: 'Third trimester begins' },
    { week: 32, label: 'Rapid brain development' },
    { week: 37, label: 'Early term' },
    { week: 39, label: 'Full term' },
    { week: 40, label: 'Estimated due date' }
  ];

  for (var i = 0; i < milestones.length; i++) {
    var m = milestones[i];
    var tr = document.createElement('tr');
    var isPast = currentWeek >= m.week;
    var isCurrent = currentWeek >= m.week && (i === milestones.length - 1 || currentWeek < milestones[i + 1].week);

    if (isCurrent) {
      tr.style.background = '#f0f9ff';
      tr.style.fontWeight = '600';
    }

    var statusIcon = isPast ? '✓' : '○';
    var statusColor = isPast ? '#1a8a4a' : '#999';

    tr.innerHTML =
      '<td style="padding: 6px 10px; border-bottom: 1px solid #f0f0f0; color: ' + statusColor + ';">' + statusIcon + '</td>' +
      '<td style="padding: 6px 10px; border-bottom: 1px solid #f0f0f0; font-weight: 600;">Week ' + m.week + '</td>' +
      '<td style="padding: 6px 10px; border-bottom: 1px solid #f0f0f0;">' + m.label + '</td>';

    tbody.appendChild(tr);
  }
}

// Reveal results
if (typeof factoryReveal === 'function') { factoryReveal(); }
})();
