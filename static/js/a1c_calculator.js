document.addEventListener('DOMContentLoaded', function() {
    var conversionMode = document.getElementById('conversion-mode');
    var a1cInputGroup = document.getElementById('a1c-input-group');
    var bsInputGroup = document.getElementById('bs-input-group');
    var a1cInput = document.getElementById('a1c-input');
    var bsInput = document.getElementById('bs-input');
    var bsUnit = document.getElementById('bs-unit');
    var calculateBtn = document.getElementById('calculate-btn');
    var resultsSection = document.getElementById('results-section');
    var conversionResult = document.getElementById('conversion-result');
    var conversionLabel = document.getElementById('conversion-label');
    var displayA1c = document.getElementById('display-a1c');
    var displayMgdl = document.getElementById('display-mgdl');
    var displayMmol = document.getElementById('display-mmol');
    var riskStatus = document.getElementById('risk-status');
    var riskIcon = document.getElementById('risk-icon');
    var riskDescription = document.getElementById('risk-description');
    var resultHero = document.getElementById('result-hero');
    var gaugeMarker = document.getElementById('gauge-marker');
    var toggleInfoBtn = document.getElementById('toggle-info-btn');
    var infoPanel = document.getElementById('info-panel');
    var toggleIcon = document.querySelector('.toggle-icon');

    // Toggle conversion mode
    conversionMode.addEventListener('change', function() {
        if (conversionMode.value === 'a1c-to-bs') {
            a1cInputGroup.classList.remove('hidden');
            bsInputGroup.classList.add('hidden');
            bsInput.value = '';
        } else {
            a1cInputGroup.classList.add('hidden');
            bsInputGroup.classList.remove('hidden');
            a1cInput.value = '';
        }
        resultsSection.classList.add('hidden');
    });

    // Toggle info panel
    toggleInfoBtn.addEventListener('click', function() {
        infoPanel.classList.toggle('hidden');
        toggleIcon.classList.toggle('rotated');
    });

    // Calculate on button click
    calculateBtn.addEventListener('click', calculate);

    // Also calculate on Enter key
    a1cInput.addEventListener('keydown', function(e) { if (e.key === 'Enter') calculate(); });
    bsInput.addEventListener('keydown', function(e) { if (e.key === 'Enter') calculate(); });

    function calculate() {
        var a1c, eag_mgdl, eag_mmol;

        if (conversionMode.value === 'a1c-to-bs') {
            a1c = parseFloat(a1cInput.value);
            if (isNaN(a1c) || a1c < 4.0 || a1c > 15.0) {
                alert('Please enter an A1C value between 4.0 and 15.0%.');
                return;
            }
            // ADA formula: eAG (mg/dL) = 28.7 * A1C - 46.7
            eag_mgdl = 28.7 * a1c - 46.7;
            eag_mmol = eag_mgdl / 18.0;
        } else {
            var bsValue = parseFloat(bsInput.value);
            if (isNaN(bsValue) || bsValue <= 0) {
                alert('Please enter a valid blood sugar value.');
                return;
            }
            if (bsUnit.value === 'mmol') {
                eag_mmol = bsValue;
                eag_mgdl = bsValue * 18.0;
            } else {
                eag_mgdl = bsValue;
                eag_mmol = bsValue / 18.0;
            }
            // Reverse formula: A1C = (eAG + 46.7) / 28.7
            a1c = (eag_mgdl + 46.7) / 28.7;
        }

        // Round for display
        a1c = Math.round(a1c * 10) / 10;
        eag_mgdl = Math.round(eag_mgdl);
        eag_mmol = Math.round(eag_mmol * 10) / 10;

        showResults(a1c, eag_mgdl, eag_mmol);
    }

    function showResults(a1c, eag_mgdl, eag_mmol) {
        resultsSection.classList.remove('hidden');

        // Content loop
        if (typeof showNextSteps === 'function') {
            showNextSteps('a1c', {});
        }

        // Set hero display based on conversion direction
        if (conversionMode.value === 'a1c-to-bs') {
            conversionResult.textContent = eag_mgdl + ' mg/dL';
            conversionLabel.textContent = 'Estimated Average Glucose for A1C ' + a1c + '%';
        } else {
            conversionResult.textContent = a1c + '%';
            conversionLabel.textContent = 'Estimated A1C for blood sugar ' + eag_mgdl + ' mg/dL';
        }

        // Comparison boxes
        displayA1c.textContent = a1c + '%';
        displayMgdl.textContent = eag_mgdl + ' mg/dL';
        displayMmol.textContent = eag_mmol + ' mmol/L';

        // Risk categorization
        updateRiskStatus(a1c);
        updateGauge(a1c);
    }

    function updateRiskStatus(a1c) {
        var category, description, statusClass, icon, heroColor;

        if (a1c < 5.7) {
            category = 'Normal';
            description = 'Your A1C of ' + a1c + '% is in the normal range. This indicates healthy blood sugar control over the past 2-3 months.';
            statusClass = 'status-good';
            icon = '\u2705';
            heroColor = '#16a34a';
        } else if (a1c < 6.5) {
            category = 'Prediabetes';
            description = 'Your A1C of ' + a1c + '% falls in the prediabetes range (5.7-6.4%). This means your blood sugar is higher than normal but not yet in the diabetic range. Lifestyle changes can prevent progression to type 2 diabetes.';
            statusClass = 'status-warning';
            icon = '\u26A0\uFE0F';
            heroColor = '#d97706';
        } else {
            category = 'Diabetes';
            description = 'Your A1C of ' + a1c + '% is at or above 6.5%, which meets the ADA diagnostic threshold for diabetes. Consult with your healthcare provider about treatment options and blood sugar management strategies.';
            statusClass = 'status-danger';
            icon = '\u26A0\uFE0F';
            heroColor = '#dc2626';
        }

        riskDescription.innerHTML = '<strong>' + category + ':</strong> ' + description;
        riskStatus.className = 'result-status ' + statusClass;
        riskIcon.textContent = icon;
        resultHero.style.borderColor = heroColor;
    }

    function updateGauge(a1c) {
        // Map A1C 4.0-12.0 to gauge 0-100%
        // Normal < 5.7 = 0-47%, Prediabetes 5.7-6.4 = 47-58%, Diabetes >= 6.5 = 58-100%
        var pct;
        if (a1c < 5.7) {
            // 4.0 to 5.7 maps to 0% to 47%
            pct = ((a1c - 4.0) / (5.7 - 4.0)) * 47;
        } else if (a1c < 6.5) {
            // 5.7 to 6.5 maps to 47% to 58%
            pct = 47 + ((a1c - 5.7) / (6.5 - 5.7)) * 11;
        } else {
            // 6.5 to 12.0 maps to 58% to 100%
            pct = 58 + ((a1c - 6.5) / (12.0 - 6.5)) * 42;
        }
        pct = Math.max(0, Math.min(100, pct));
        gaugeMarker.style.left = pct + '%';
    }

    // FAQ accordion
    var faqItems = document.querySelectorAll('.faq-item h3');
    faqItems.forEach(function(item) {
        item.addEventListener('click', function() {
            var answer = this.nextElementSibling;
            var isActive = answer.style.display === 'block';
            if (isActive) {
                answer.style.display = 'none';
                this.classList.remove('active');
            } else {
                answer.style.display = 'block';
                this.classList.add('active');
            }
        });
    });
});