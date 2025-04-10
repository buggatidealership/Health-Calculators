document.addEventListener('DOMContentLoaded', function() {
    // Get the input elements
    const ngInput = document.getElementById('ng-input');
    const nmolInput = document.getElementById('nmol-input');
    const resultsSection = document.getElementById('results-section');
    const conversionResult = document.getElementById('conversion-result');
    const levelDescription = document.getElementById('level-description');
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

        // Convert ng/mL to nmol/L (multiplying by 2.5)
        const nmolValue = (ngValue * 2.5).toFixed(1);
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

        // Convert nmol/L to ng/mL (dividing by 2.5 or multiplying by 0.4)
        const ngValue = (nmolValue * 0.4).toFixed(1);
        ngInput.value = ngValue;
        
        // Show results
        showResults(ngValue, nmolValue, 'nmol/L');
    }

    // Show conversion results
    function showResults(ngValue, nmolValue, inputUnit) {
        resultsSection.classList.remove('hidden');
        
        if (inputUnit === 'ng/mL') {
            conversionResult.textContent = `${ngValue} ng/mL = ${nmolValue} nmol/L`;
        } else {
            conversionResult.textContent = `${nmolValue} nmol/L = ${ngValue} ng/mL`;
        }
        
        // Set vitamin D level status based on ng/mL value
        updateVitaminDStatus(parseFloat(ngValue));
    }

    // Hide results section
    function hideResults() {
        resultsSection.classList.add('hidden');
    }

    // Update vitamin D status description
    function updateVitaminDStatus(ngValue) {
        let status = '';
        let description = '';
        
        if (ngValue < 12) {
            status = 'Deficient';
            description = 'Vitamin D levels below 12 ng/mL (30 nmol/L) are considered deficient and may lead to bone diseases like rickets in children or osteomalacia in adults.';
        } else if (ngValue < 20) {
            status = 'Deficient';
            description = 'Vitamin D levels below 20 ng/mL (50 nmol/L) are considered deficient by most health authorities and may require supplementation.';
        } else if (ngValue < 30) {
            status = 'Insufficient';
            description = 'Vitamin D levels between 20-30 ng/mL (50-75 nmol/L) are considered insufficient. Many experts recommend bringing levels above 30 ng/mL.';
        } else if (ngValue <= 50) {
            status = 'Sufficient';
            description = 'Vitamin D levels between 30-50 ng/mL (75-125 nmol/L) are generally considered optimal for bone and overall health.';
        } else if (ngValue <= 100) {
            status = 'High';
            description = 'Vitamin D levels between 50-100 ng/mL (125-250 nmol/L) are considered high but not typically toxic.';
        } else {
            status = 'Potentially Toxic';
            description = 'Vitamin D levels above 100 ng/mL (250 nmol/L) may lead to toxicity with symptoms including hypercalcemia, weakness, nausea, and kidney problems.';
        }
        
        levelDescription.innerHTML = `<strong>${status}:</strong> ${description}`;
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