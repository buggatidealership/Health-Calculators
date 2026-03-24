// GLP-1 Cost Calculator — factory-compatible
(function() {

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

// --- Comparison toggle via factory radio_row ---
var compareRow = document.querySelector('[data-group="compare-toggle"]');
if (compareRow) {
    compareRow.querySelectorAll('.unit-btn').forEach(function(btn) {
        btn.addEventListener('click', function() {
            compareRow.querySelectorAll('.unit-btn').forEach(function(b) { b.classList.remove('active'); });
            this.classList.add('active');
            showingComparison = this.dataset.value === 'yes';
            toggleComparisonFields();
        });
    });
}

function toggleComparisonFields() {
    var altMedEl = document.getElementById('alt-medication-type');
    var altCostEl = document.getElementById('alt-monthly-cost');

    if (showingComparison) {
        if (altMedEl) altMedEl.closest('.form-group').style.display = '';
        if (altCostEl) altCostEl.closest('.form-group').style.display = '';
    } else {
        if (altMedEl) altMedEl.closest('.form-group').style.display = 'none';
        if (altCostEl) altCostEl.closest('.form-group').style.display = 'none';
    }
}

// Hide comparison fields on init
toggleComparisonFields();

// --- Update cost hints when medication type changes ---
var medSelect = document.getElementById('medication-type');
var altMedSelect = document.getElementById('alt-medication-type');

if (medSelect) {
    medSelect.addEventListener('change', function() {
        var hintEl = medSelect.closest('.form-group');
        if (hintEl) {
            var small = hintEl.querySelector('small');
            if (small && COST_RANGES[medSelect.value]) {
                small.textContent = COST_RANGES[medSelect.value].hint;
            }
        }
    });
}

if (altMedSelect) {
    altMedSelect.addEventListener('change', function() {
        var hintEl = altMedSelect.closest('.form-group');
        if (hintEl) {
            var small = hintEl.querySelector('small');
            if (small && COST_RANGES[altMedSelect.value]) {
                small.textContent = COST_RANGES[altMedSelect.value].hint;
            }
        }
    });
}

function formatCurrency(amount) {
    if (amount >= 1000) {
        return '$' + amount.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
    }
    return '$' + amount.toFixed(2);
}

// --- Calculate ---
var calcBtn = document.getElementById('calcBtn');
if (calcBtn) calcBtn.addEventListener('click', calculateGLP1Cost);

function calculateGLP1Cost() {
    var medTypeEl = document.getElementById('medication-type');
    var insuranceEl = document.getElementById('insurance-status');
    var monthlyCostEl = document.getElementById('monthly-cost');
    var durationEl = document.getElementById('treatment-duration');

    var medType = medTypeEl ? medTypeEl.value : '';
    var insuranceStatus = insuranceEl ? insuranceEl.value : '';
    var monthlyCost = monthlyCostEl ? parseFloat(monthlyCostEl.value) : NaN;
    var duration = durationEl ? parseInt(durationEl.value) : 12;

    if (isNaN(monthlyCost) || monthlyCost < 0) return;
    if (isNaN(duration) || duration < 1) return;

    var totalCost = monthlyCost * duration;
    var annualCost = monthlyCost * 12;
    var dailyCost = monthlyCost / 30.44;

    // Set primary result
    var resultNumberEl = document.getElementById('resultNumber');
    if (resultNumberEl) resultNumberEl.textContent = formatCurrency(totalCost);
    var resultVerdictEl = document.getElementById('resultVerdict');
    if (resultVerdictEl) resultVerdictEl.textContent = 'over ' + duration + ' month' + (duration !== 1 ? 's' : '') + ' of treatment';

    // Breakdown values
    var monthlyDisplayEl = document.getElementById('monthly-display');
    var annualDisplayEl = document.getElementById('annual-display');
    var dailyDisplayEl = document.getElementById('daily-display');
    var medTypeDisplayEl = document.getElementById('med-type-display');
    var coverageDisplayEl = document.getElementById('coverage-display');

    if (monthlyDisplayEl) monthlyDisplayEl.textContent = formatCurrency(monthlyCost);
    if (annualDisplayEl) annualDisplayEl.textContent = formatCurrency(annualCost);
    if (dailyDisplayEl) dailyDisplayEl.textContent = formatCurrency(dailyCost);
    if (medTypeDisplayEl) medTypeDisplayEl.textContent = COST_RANGES[medType] ? COST_RANGES[medType].label : medType;
    if (coverageDisplayEl) coverageDisplayEl.textContent = INSURANCE_LABELS[insuranceStatus] || insuranceStatus;

    // Handle comparison
    var compResults = document.getElementById('comparison-results');
    if (showingComparison && compResults) {
        var altMedTypeEl = document.getElementById('alt-medication-type');
        var altCostEl = document.getElementById('alt-monthly-cost');
        var altMedType = altMedTypeEl ? altMedTypeEl.value : '';
        var altMonthlyCost = altCostEl ? parseFloat(altCostEl.value) : NaN;

        if (isNaN(altMonthlyCost) || altMonthlyCost < 0) return;

        var altTotalCost = altMonthlyCost * duration;
        var monthlySavings = monthlyCost - altMonthlyCost;
        var totalSavings = totalCost - altTotalCost;
        var annualSavings = monthlySavings * 12;
        var pctDiff = monthlyCost > 0 ? ((monthlySavings / monthlyCost) * 100) : 0;

        compResults.classList.remove('hidden');

        var primaryMedLabel = document.getElementById('primary-med-label');
        var altMedLabel = document.getElementById('alt-med-label');
        var primaryTotal = document.getElementById('primary-total');
        var altTotal = document.getElementById('alt-total');
        var savingsPeriod = document.getElementById('savings-period');
        var savingsDisplay = document.getElementById('savings-display');
        var monthlySavingsDisplay = document.getElementById('monthly-savings-display');
        var annualSavingsDisplay = document.getElementById('annual-savings-display');
        var pctSavingsDisplay = document.getElementById('pct-savings-display');

        if (primaryMedLabel) primaryMedLabel.textContent = COST_RANGES[medType] ? COST_RANGES[medType].label : medType;
        if (altMedLabel) altMedLabel.textContent = COST_RANGES[altMedType] ? COST_RANGES[altMedType].label : altMedType;
        if (primaryTotal) primaryTotal.textContent = formatCurrency(totalCost);
        if (altTotal) altTotal.textContent = formatCurrency(altTotalCost);
        if (savingsPeriod) savingsPeriod.textContent = 'Over ' + duration + ' month' + (duration !== 1 ? 's' : '');
        if (savingsDisplay) savingsDisplay.textContent = (totalSavings >= 0 ? '' : '-') + formatCurrency(Math.abs(totalSavings));
        if (monthlySavingsDisplay) monthlySavingsDisplay.textContent = (monthlySavings >= 0 ? '' : '-') + formatCurrency(Math.abs(monthlySavings)) + '/mo';
        if (annualSavingsDisplay) annualSavingsDisplay.textContent = (annualSavings >= 0 ? '' : '-') + formatCurrency(Math.abs(annualSavings)) + '/yr';
        if (pctSavingsDisplay) pctSavingsDisplay.textContent = (pctDiff >= 0 ? '' : '+') + Math.abs(pctDiff).toFixed(1) + '% ' + (pctDiff >= 0 ? 'less' : 'more');
    } else if (compResults) {
        compResults.classList.add('hidden');
    }

    // Build projection table
    buildProjectionTable(monthlyCost, duration, showingComparison ? parseFloat((document.getElementById('alt-monthly-cost') || {}).value) : null);

    // Reveal results via factory
    if (typeof factoryReveal === 'function') { factoryReveal(); }

    if (typeof showNextSteps === 'function') {
        showNextSteps('glp1-cost', {});
    }
}

function buildProjectionTable(monthlyCost, duration, altMonthlyCost) {
    var thead = document.querySelector('#projection-table thead tr');
    var tbody = document.getElementById('projection-body');
    if (!tbody || !thead) return;

    tbody.innerHTML = '';

    if (altMonthlyCost !== null && !isNaN(altMonthlyCost)) {
        thead.innerHTML = '<th>Month</th><th>Primary Monthly</th><th>Primary Cumulative</th><th>Alt Monthly</th><th>Alt Cumulative</th>';
    } else {
        thead.innerHTML = '<th>Month</th><th>Monthly Cost</th><th>Cumulative Total</th>';
    }

    var milestones = [];
    for (var m = 1; m <= duration; m++) {
        if (m <= 3 || m === 6 || m === 9 || m === 12 || m === 18 || m === 24 || m === 36 || m === 48 || m === 60 || m === duration) {
            if (milestones.indexOf(m) === -1) {
                milestones.push(m);
            }
        }
    }

    for (var i = 0; i < milestones.length; i++) {
        var month = milestones[i];
        var cumulative = monthlyCost * month;
        var row = document.createElement('tr');
        row.style.borderBottom = '1px solid rgba(255,255,255,0.06)';

        if (altMonthlyCost !== null && !isNaN(altMonthlyCost)) {
            var altCumulative = altMonthlyCost * month;
            row.innerHTML = '<td style="font-weight:500;">Month ' + month + '</td>' +
                '<td style="text-align:center;">' + formatCurrency(monthlyCost) + '</td>' +
                '<td style="text-align:center;">' + formatCurrency(cumulative) + '</td>' +
                '<td style="text-align:center;">' + formatCurrency(altMonthlyCost) + '</td>' +
                '<td style="text-align:center;color:var(--accent);">' + formatCurrency(altCumulative) + '</td>';
        } else {
            row.innerHTML = '<td style="font-weight:500;">Month ' + month + '</td>' +
                '<td style="text-align:center;">' + formatCurrency(monthlyCost) + '</td>' +
                '<td style="text-align:center;color:var(--accent);">' + formatCurrency(cumulative) + '</td>';
        }

        tbody.appendChild(row);
    }
}

})();
