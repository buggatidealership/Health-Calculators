/**
 * GLP-1 Medication Cost Comparison Calculator
 * Estimates and compares treatment costs based on user-entered monthly costs.
 */

// Typical cost ranges for hint text (informational only)
var COST_RANGES = {
  'semaglutide-brand': { label: 'Semaglutide (brand injectable)', low: 800, high: 1500, hint: 'Typical range without insurance: $800 - $1,500/month' },
  'semaglutide-oral': { label: 'Semaglutide (oral)', low: 800, high: 1400, hint: 'Typical range without insurance: $800 - $1,400/month' },
  'tirzepatide-brand': { label: 'Tirzepatide (brand injectable)', low: 900, high: 1500, hint: 'Typical range without insurance: $900 - $1,500/month' },
  'compounded': { label: 'Compounded semaglutide', low: 150, high: 500, hint: 'Typical range: $150 - $500/month (not FDA-approved finished products)' },
  'custom': { label: 'Custom / Other', low: 0, high: 0, hint: 'Enter your actual monthly cost' }
};

var INSURANCE_LABELS = {
  'none': 'No insurance coverage',
  'commercial': 'Commercial insurance',
  'manufacturer': 'Manufacturer savings program',
  'assistance': 'Patient assistance program',
  'medicare': 'Medicare / Government plan'
};

var showingComparison = false;

/**
 * Toggle comparison mode
 */
function toggleCompare(show) {
  showingComparison = show;
  var inputs = document.getElementById('comparison-inputs');
  var noBtn = document.getElementById('compare-no-btn');
  var yesBtn = document.getElementById('compare-yes-btn');

  if (show) {
    inputs.classList.remove('hidden');
    yesBtn.classList.add('active');
    noBtn.classList.remove('active');
    updateAltHint();
  } else {
    inputs.classList.add('hidden');
    noBtn.classList.add('active');
    yesBtn.classList.remove('active');
  }
}

/**
 * Update cost hint text when medication type changes
 */
function updateHint() {
  var medType = document.getElementById('medication-type').value;
  var hintEl = document.getElementById('cost-hint');
  if (COST_RANGES[medType]) {
    hintEl.textContent = COST_RANGES[medType].hint;
  }
}

function updateAltHint() {
  var medType = document.getElementById('alt-medication-type').value;
  var hintEl = document.getElementById('alt-cost-hint');
  if (COST_RANGES[medType]) {
    hintEl.textContent = COST_RANGES[medType].hint;
  }
}

// Attach change listeners
document.addEventListener('DOMContentLoaded', function() {
  var medSelect = document.getElementById('medication-type');
  var altMedSelect = document.getElementById('alt-medication-type');
  if (medSelect) medSelect.addEventListener('change', updateHint);
  if (altMedSelect) altMedSelect.addEventListener('change', updateAltHint);
});

/**
 * Format number as currency
 */
function formatCurrency(amount) {
  if (amount >= 1000) {
    return '$' + amount.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
  }
  return '$' + amount.toFixed(2);
}

/**
 * Main calculation function
 */
function calculateGLP1Cost() {
  // Get inputs
  var medType = document.getElementById('medication-type').value;
  var insuranceStatus = document.getElementById('insurance-status').value;
  var monthlyCost = parseFloat(document.getElementById('monthly-cost').value);
  var duration = parseInt(document.getElementById('treatment-duration').value);

  // Validate
  if (isNaN(monthlyCost) || monthlyCost < 0) {
    alert('Please enter a valid monthly cost.');
    return;
  }
  if (isNaN(duration) || duration < 1) {
    alert('Please enter a valid treatment duration (at least 1 month).');
    return;
  }

  // Calculate primary costs
  var totalCost = monthlyCost * duration;
  var annualCost = monthlyCost * 12;
  var dailyCost = monthlyCost / 30.44; // Average days per month

  // Display results
  var resultsEl = document.getElementById('results');
  resultsEl.classList.remove('hidden');

  document.getElementById('total-cost-display').textContent = formatCurrency(totalCost);
  document.getElementById('duration-label').textContent = 'over ' + duration + ' month' + (duration !== 1 ? 's' : '') + ' of treatment';
  document.getElementById('monthly-display').textContent = formatCurrency(monthlyCost);
  document.getElementById('annual-display').textContent = formatCurrency(annualCost);
  document.getElementById('daily-display').textContent = formatCurrency(dailyCost);
  document.getElementById('med-type-display').textContent = COST_RANGES[medType] ? COST_RANGES[medType].label : medType;
  document.getElementById('coverage-display').textContent = INSURANCE_LABELS[insuranceStatus] || insuranceStatus;

  // Handle comparison
  var compResults = document.getElementById('comparison-results');
  if (showingComparison) {
    var altMedType = document.getElementById('alt-medication-type').value;
    var altMonthlyCost = parseFloat(document.getElementById('alt-monthly-cost').value);

    if (isNaN(altMonthlyCost) || altMonthlyCost < 0) {
      alert('Please enter a valid alternative monthly cost.');
      return;
    }

    var altTotalCost = altMonthlyCost * duration;
    var monthlySavings = monthlyCost - altMonthlyCost;
    var totalSavings = totalCost - altTotalCost;
    var annualSavings = monthlySavings * 12;
    var pctDiff = monthlyCost > 0 ? ((monthlySavings / monthlyCost) * 100) : 0;

    compResults.classList.remove('hidden');

    document.getElementById('primary-med-label').textContent = COST_RANGES[medType] ? COST_RANGES[medType].label : medType;
    document.getElementById('alt-med-label').textContent = COST_RANGES[altMedType] ? COST_RANGES[altMedType].label : altMedType;
    document.getElementById('primary-total').textContent = formatCurrency(totalCost);
    document.getElementById('alt-total').textContent = formatCurrency(altTotalCost);
    document.getElementById('savings-period').textContent = 'Over ' + duration + ' month' + (duration !== 1 ? 's' : '');
    document.getElementById('savings-display').textContent = (totalSavings >= 0 ? '' : '-') + formatCurrency(Math.abs(totalSavings));
    document.getElementById('monthly-savings-display').textContent = (monthlySavings >= 0 ? '' : '-') + formatCurrency(Math.abs(monthlySavings)) + '/mo';
    document.getElementById('annual-savings-display').textContent = (annualSavings >= 0 ? '' : '-') + formatCurrency(Math.abs(annualSavings)) + '/yr';
    document.getElementById('pct-savings-display').textContent = (pctDiff >= 0 ? '' : '+') + Math.abs(pctDiff).toFixed(1) + '% ' + (pctDiff >= 0 ? 'less' : 'more');
  } else {
    compResults.classList.add('hidden');
  }

  // Build projection table
  buildProjectionTable(monthlyCost, duration, showingComparison ? parseFloat(document.getElementById('alt-monthly-cost').value) : null);

  // Scroll to results
  resultsEl.scrollIntoView({ behavior: 'smooth', block: 'start' });

  // Show next steps if available
  if (typeof showNextSteps === 'function') {
    showNextSteps('glp1-cost', {});
  }
}

/**
 * Build the cost projection timeline table
 */
function buildProjectionTable(monthlyCost, duration, altMonthlyCost) {
  var thead = document.querySelector('#projection-table thead tr');
  var tbody = document.getElementById('projection-body');
  tbody.innerHTML = '';

  // Update header if comparing
  if (altMonthlyCost !== null && !isNaN(altMonthlyCost)) {
    thead.innerHTML = '<th>Month</th><th>Primary Monthly</th><th>Primary Cumulative</th><th>Alternative Monthly</th><th>Alternative Cumulative</th>';
  } else {
    thead.innerHTML = '<th>Month</th><th>Monthly Cost</th><th>Cumulative Total</th>';
  }

  // Show key milestone months
  var milestones = [];
  for (var m = 1; m <= duration; m++) {
    if (m <= 3 || m === 6 || m === 9 || m === 12 || m === 18 || m === 24 || m === 36 || m === 48 || m === 60 || m === duration) {
      if (m <= duration && milestones.indexOf(m) === -1) {
        milestones.push(m);
      }
    }
  }

  for (var i = 0; i < milestones.length; i++) {
    var month = milestones[i];
    var cumulative = monthlyCost * month;
    var row = document.createElement('tr');

    if (altMonthlyCost !== null && !isNaN(altMonthlyCost)) {
      var altCumulative = altMonthlyCost * month;
      row.innerHTML = '<td class="td-bold">Month ' + month + '</td>' +
        '<td>' + formatCurrency(monthlyCost) + '</td>' +
        '<td>' + formatCurrency(cumulative) + '</td>' +
        '<td>' + formatCurrency(altMonthlyCost) + '</td>' +
        '<td class="td-accent">' + formatCurrency(altCumulative) + '</td>';
    } else {
      row.innerHTML = '<td class="td-bold">Month ' + month + '</td>' +
        '<td>' + formatCurrency(monthlyCost) + '</td>' +
        '<td class="td-accent">' + formatCurrency(cumulative) + '</td>';
    }

    tbody.appendChild(row);
  }
}
