// Gestational Age Calculator — factory-compatible
(function() {
var methodSelect = document.getElementById('method');
var lmpInput = document.getElementById('lmp-date');
var usDateInput = document.getElementById('us-date');
var usWeeksInput = document.getElementById('us-weeks');
var usDaysInput = document.getElementById('us-days');
var ivfDateInput = document.getElementById('ivf-date');
var ivfTypeSelect = document.getElementById('ivf-type');
var calculateBtn = document.getElementById('calcBtn');

if (!methodSelect || !calculateBtn) return;

// --- Form group visibility ---
// Each field is wrapped in .form-group or .form-row by the factory.
// We find the closest wrapper for each field and hide/show it.
function getFieldGroup(el) {
  if (!el) return null;
  return el.closest('.form-row') || el.closest('.form-group');
}

var lmpGroup = getFieldGroup(lmpInput);
var usDateGroup = getFieldGroup(usDateInput);
// us-weeks and us-days are inside a .form-row together
var usRowGroup = getFieldGroup(usWeeksInput);
var ivfDateGroup = getFieldGroup(ivfDateInput);
var ivfTypeGroup = getFieldGroup(ivfTypeSelect);

function showGroup(g) { if (g) g.style.display = ''; }
function hideGroup(g) { if (g) g.style.display = 'none'; }

function updateVisibility() {
  var val = methodSelect.value;
  // Hide all conditional groups
  hideGroup(lmpGroup);
  hideGroup(usDateGroup);
  hideGroup(usRowGroup);
  hideGroup(ivfDateGroup);
  hideGroup(ivfTypeGroup);
  // Show relevant group
  if (val === 'lmp') {
    showGroup(lmpGroup);
  } else if (val === 'ultrasound') {
    showGroup(usDateGroup);
    showGroup(usRowGroup);
  } else if (val === 'ivf') {
    showGroup(ivfDateGroup);
    showGroup(ivfTypeGroup);
  }
}

// Initial visibility
updateVisibility();

// Set default dates
var defaultLmp = new Date();
defaultLmp.setDate(defaultLmp.getDate() - 56);
if (lmpInput) lmpInput.value = formatDateInput(defaultLmp);
if (usDateInput) usDateInput.value = formatDateInput(new Date());
var defaultIvf = new Date();
defaultIvf.setDate(defaultIvf.getDate() - 35);
if (ivfDateInput) ivfDateInput.value = formatDateInput(defaultIvf);

methodSelect.addEventListener('change', updateVisibility);

calculateBtn.addEventListener('click', function() {
  var today = new Date();
  today.setHours(0, 0, 0, 0);
  var gestStartDate;

  if (methodSelect.value === 'lmp') {
    if (!lmpInput || !lmpInput.value) return;
    gestStartDate = parseLocalDate(lmpInput.value);
  } else if (methodSelect.value === 'ultrasound') {
    if (!usDateInput || !usDateInput.value) return;
    var usWeeks = parseInt(usWeeksInput ? usWeeksInput.value : '0') || 0;
    var usDays = parseInt(usDaysInput ? usDaysInput.value : '0') || 0;
    if (usWeeks === 0 && usDays === 0) return;
    var usDate = parseLocalDate(usDateInput.value);
    var totalDaysAtUs = usWeeks * 7 + usDays;
    gestStartDate = new Date(usDate);
    gestStartDate.setDate(gestStartDate.getDate() - totalDaysAtUs);
  } else if (methodSelect.value === 'ivf') {
    if (!ivfDateInput || !ivfDateInput.value) return;
    var ivfDate = parseLocalDate(ivfDateInput.value);
    var ivfType = parseInt(ivfTypeSelect ? ivfTypeSelect.value : '5');
    var daysToSubtract = 14 + ivfType;
    gestStartDate = new Date(ivfDate);
    gestStartDate.setDate(gestStartDate.getDate() - daysToSubtract);
  }

  if (!gestStartDate) return;

  var diffMs = today.getTime() - gestStartDate.getTime();
  var totalDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (totalDays < 0 || totalDays > 301) return;

  var weeks = Math.floor(totalDays / 7);
  var days = totalDays % 7;

  // Due date (Naegele's rule)
  var edd = new Date(gestStartDate);
  edd.setDate(edd.getDate() + 280);
  var daysRemaining = Math.floor((edd.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

  // Fetal age
  var fetalDays = Math.max(0, totalDays - 14);
  var fetalWeeks = Math.floor(fetalDays / 7);
  var fetalDaysRem = fetalDays % 7;

  // Trimester
  var trimesterLabel;
  if (weeks < 13) {
    trimesterLabel = 'First Trimester';
  } else if (weeks < 27) {
    trimesterLabel = 'Second Trimester';
  } else {
    trimesterLabel = 'Third Trimester';
  }

  // ACOG term classification
  var termClass;
  if (weeks < 37) termClass = 'Preterm';
  else if (weeks < 39) termClass = 'Early Term';
  else if (weeks < 41) termClass = 'Full Term';
  else if (weeks < 42) termClass = 'Late Term';
  else termClass = 'Post Term';

  var progressPct = Math.min((totalDays / 280) * 100, 100);
  var milestone = getMilestone(weeks);

  // --- Populate factory primary result ---
  var resultNumber = document.getElementById('resultNumber');
  if (resultNumber) resultNumber.textContent = weeks + 'w ' + days + 'd';

  var resultVerdict = document.getElementById('resultVerdict');
  if (resultVerdict) {
    if (daysRemaining > 0) {
      resultVerdict.textContent = trimesterLabel + ' — Due ' + formatDateDisplay(edd);
    } else {
      resultVerdict.textContent = 'Past due by ' + Math.abs(daysRemaining) + ' days';
    }
  }

  // --- Status box ---
  var statusEl = document.getElementById('ga-status');
  var iconEl = document.getElementById('ga-icon');
  var descEl = document.getElementById('ga-description');
  if (statusEl) statusEl.style.display = '';
  if (iconEl && descEl) {
    if (daysRemaining > 0) {
      iconEl.textContent = '\u2713 ';
      descEl.textContent = 'You are ' + weeks + ' weeks and ' + days + ' days pregnant. Your estimated due date is ' + formatDateDisplay(edd) + ' (' + daysRemaining + ' days from now). ' + milestone;
    } else {
      iconEl.textContent = '\u26A0 ';
      descEl.textContent = 'You are ' + weeks + ' weeks and ' + days + ' days, which is ' + Math.abs(daysRemaining) + ' days past your estimated due date of ' + formatDateDisplay(edd) + '. Discuss delivery timing with your provider.';
    }
  }

  // --- Progress gauge ---
  var progressSection = document.getElementById('ga-progress');
  if (progressSection) progressSection.style.display = '';
  var gaugeMarker = document.getElementById('gauge-marker');
  if (gaugeMarker) gaugeMarker.style.left = progressPct + '%';
  var progressPctEl = document.getElementById('progress-pct');
  if (progressPctEl) progressPctEl.textContent = Math.round(progressPct) + '%';

  // --- Breakdown detail cards ---
  var gaEl = document.getElementById('display-ga');
  if (gaEl) gaEl.textContent = weeks + 'w ' + days + 'd';
  var fetalEl = document.getElementById('display-fetal-age');
  if (fetalEl) fetalEl.textContent = fetalWeeks + 'w ' + fetalDaysRem + 'd';
  var eddEl = document.getElementById('display-edd');
  if (eddEl) eddEl.textContent = formatDateShort(edd);
  var remainEl = document.getElementById('display-remaining');
  if (remainEl) remainEl.textContent = daysRemaining > 0 ? daysRemaining + 'd' : 'Past due';
  var trimEl = document.getElementById('display-trimester');
  if (trimEl) trimEl.textContent = trimesterLabel;
  var termEl = document.getElementById('display-term-class');
  if (termEl) termEl.textContent = termClass;

  // --- Milestone timeline ---
  var milestoneSection = document.getElementById('milestone-section');
  if (milestoneSection) milestoneSection.style.display = '';
  buildTimeline(weeks);

  // --- Coach card ---
  var coachCard = document.getElementById('coachCard');
  if (coachCard) {
    coachCard.innerHTML =
      '<p>At <span class="hl">' + weeks + ' weeks and ' + days + ' days</span>, you are in your <span class="hl">' + trimesterLabel.toLowerCase() + '</span>.</p>' +
      '<p class="coach-rule">' + milestone + '</p>' +
      '<div class="coach-advice">' +
        '<p>Your estimated due date is <em>' + formatDateDisplay(edd) + '</em>' +
        (daysRemaining > 0 ? ' (' + daysRemaining + ' days from now).' : '.') +
        ' ACOG classifies this as <em>' + termClass + '</em>.</p>' +
      '</div>';
  }

  // --- Share text ---
  if (typeof updateShareButtons === 'function') {
    updateShareButtons('I\'m ' + weeks + 'w ' + days + 'd pregnant! Due ' + formatDateShort(edd) + '. Calculated at healthcalculators.xyz/gestational-age-calculator');
  }

  // Factory reveal
  if (typeof factoryReveal === 'function') { factoryReveal(); }
});

// --- Helpers ---
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
  if (!tbody) return;
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
      tr.style.background = 'rgba(236,72,153,0.1)';
      tr.style.fontWeight = '600';
    }

    var statusIcon = isPast ? '\u2713' : '\u25CB';
    var statusColor = isPast ? 'var(--accent,#ec4899)' : 'var(--text-muted,#64748b)';

    tr.innerHTML =
      '<td style="padding:6px 10px;border-bottom:1px solid rgba(236,72,153,0.08);color:' + statusColor + ';">' + statusIcon + '</td>' +
      '<td style="padding:6px 10px;border-bottom:1px solid rgba(236,72,153,0.08);font-weight:600;color:var(--text,#e2e8f0);">Week ' + m.week + '</td>' +
      '<td style="padding:6px 10px;border-bottom:1px solid rgba(236,72,153,0.08);color:var(--text-dim,#94a3b8);">' + m.label + '</td>';

    tbody.appendChild(tr);
  }
}
})();
