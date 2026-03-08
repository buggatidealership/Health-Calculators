document.addEventListener('DOMContentLoaded', function() {
    // Get the input elements
    const ngInput = document.getElementById('ng-input');
    const nmolInput = document.getElementById('nmol-input');
    const resultsSection = document.getElementById('results-section');
    const conversionResult = document.getElementById('conversion-result');
    const conversionDirection = document.getElementById('conversion-direction');
    const inputValueDisplay = document.getElementById('input-value-display');
    const outputValueDisplay = document.getElementById('output-value-display');
    const inputUnitLabel = document.getElementById('input-unit-label');
    const outputUnitLabel = document.getElementById('output-unit-label');
    const levelStatus = document.getElementById('level-status');
    const levelIcon = document.getElementById('level-icon');
    const levelDescription = document.getElementById('level-description');
    const resultHero = document.getElementById('result-hero');
    const gaugeMarker = document.getElementById('gauge-marker');
    const toggleInfoBtn = document.getElementById('toggle-info-btn');
    const infoPanel = document.getElementById('info-panel');
    const toggleIcon = document.querySelector('.toggle-icon');

    // Set event listeners for input changes
    ngInput.addEventListener('input', handleNgInputChange);
    nmolInput.addEventListener('input', handleNmolInputChange);

    // Toggle info panel
    toggleInfoBtn.addEventListener('click', function() {
        infoPanel.classList.toggle('hidden');
        toggleIcon.classList.toggle('rotated');
    });

    // Handle ng/mL input change
    function handleNgInputChange() {
        if (ngInput.value === '') {
            nmolInput.value = '';
            hideResults();
            return;
        }

        const ngValue = parseFloat(ngInput.value);
        if (isNaN(ngValue)) {
            nmolInput.value = '';
            hideResults();
            return;
        }

        // Convert ng/mL to nmol/L (multiplying by 2.496)
        const nmolValue = (ngValue * 2.496).toFixed(1);
        nmolInput.value = nmolValue;

        // Show results
        showResults(ngValue, nmolValue, 'ng/mL');
    }

    // Handle nmol/L input change
    function handleNmolInputChange() {
        if (nmolInput.value === '') {
            ngInput.value = '';
            hideResults();
            return;
        }

        const nmolValue = parseFloat(nmolInput.value);
        if (isNaN(nmolValue)) {
            ngInput.value = '';
            hideResults();
            return;
        }

        // Convert nmol/L to ng/mL (dividing by 2.496)
        const ngValue = (nmolValue / 2.496).toFixed(1);
        ngInput.value = ngValue;

        // Show results
        showResults(ngValue, nmolValue, 'nmol/L');
    }

    // Show conversion results
    function showResults(ngValue, nmolValue, inputUnit) {
        resultsSection.classList.remove('hidden');
        // Content loop
        if (typeof showNextSteps === 'function') showNextSteps('vitamin-d-conversion', collectUserData());

        const ngNum = parseFloat(ngValue);
        const nmolNum = parseFloat(nmolValue);

        if (inputUnit === 'ng/mL') {
            conversionResult.textContent = nmolValue + ' nmol/L';
            conversionDirection.textContent = ngValue + ' ng/mL converted to nmol/L';
            inputUnitLabel.textContent = 'ng/mL';
            outputUnitLabel.textContent = 'nmol/L';
            inputValueDisplay.textContent = ngValue;
            outputValueDisplay.textContent = nmolValue;
        } else {
            conversionResult.textContent = ngValue + ' ng/mL';
            conversionDirection.textContent = nmolValue + ' nmol/L converted to ng/mL';
            inputUnitLabel.textContent = 'nmol/L';
            outputUnitLabel.textContent = 'ng/mL';
            inputValueDisplay.textContent = nmolValue;
            outputValueDisplay.textContent = ngValue;
        }

        // Update vitamin D status and gauge
        updateVitaminDStatus(ngNum);
        updateGauge(ngNum);
    }

    // Hide results section
    function hideResults() {
        resultsSection.classList.add('hidden');
    }

    // Update gauge marker position based on ng/mL value (0-100 maps to 0-100%)
    function updateGauge(ngValue) {
        var pct = Math.max(0, Math.min(100, ngValue));
        gaugeMarker.style.left = pct + '%';
    }

    // Update vitamin D status description
    function updateVitaminDStatus(ngValue) {
        var status = '';
        var description = '';
        var statusClass = '';
        var icon = '';
        var heroColor = '';

        if (ngValue < 12) {
            status = 'Deficient';
            description = 'Vitamin D levels below 12 ng/mL (30 nmol/L) are considered deficient and may lead to bone diseases like rickets in children or osteomalacia in adults.';
            statusClass = 'status-danger';
            icon = '\u26A0\uFE0F';
            heroColor = '#f44336';
        } else if (ngValue < 20) {
            status = 'Deficient';
            description = 'Vitamin D levels below 20 ng/mL (50 nmol/L) are considered deficient by most health authorities and may require supplementation.';
            statusClass = 'status-danger';
            icon = '\u26A0\uFE0F';
            heroColor = '#f44336';
        } else if (ngValue < 30) {
            status = 'Insufficient';
            description = 'Vitamin D levels between 20-30 ng/mL (50-75 nmol/L) are considered insufficient. Many experts recommend bringing levels above 30 ng/mL.';
            statusClass = 'status-warning';
            icon = '\u2139\uFE0F';
            heroColor = '#ff9800';
        } else if (ngValue <= 50) {
            status = 'Sufficient';
            description = 'Vitamin D levels between 30-50 ng/mL (75-125 nmol/L) are generally considered optimal for bone and overall health.';
            statusClass = 'status-good';
            icon = '\u2705';
            heroColor = '#4caf50';
        } else if (ngValue <= 80) {
            status = 'High';
            description = 'Vitamin D levels between 50-80 ng/mL (125-200 nmol/L) are considered high. Monitor with your healthcare provider.';
            statusClass = 'status-warning';
            icon = '\u2139\uFE0F';
            heroColor = '#ff9800';
        } else if (ngValue <= 100) {
            status = 'High';
            description = 'Vitamin D levels between 80-100 ng/mL (200-250 nmol/L) are considered high but not typically toxic.';
            statusClass = 'status-warning';
            icon = '\u2139\uFE0F';
            heroColor = '#ff9800';
        } else {
            status = 'Potentially Toxic';
            description = 'Vitamin D levels above 100 ng/mL (250 nmol/L) may lead to toxicity with symptoms including hypercalcemia, weakness, nausea, and kidney problems.';
            statusClass = 'status-danger';
            icon = '\u26A0\uFE0F';
            heroColor = '#f44336';
        }

        levelDescription.innerHTML = '<strong>' + status + ':</strong> ' + description;
        levelStatus.className = 'result-status ' + statusClass;
        levelIcon.textContent = icon;
        resultHero.style.borderColor = heroColor;
    }

    // Initialize FAQ accordion functionality
    const faqItems = document.querySelectorAll('.faq-item h3');

    faqItems.forEach(item => {
        item.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const isActive = answer.style.display === 'block';

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