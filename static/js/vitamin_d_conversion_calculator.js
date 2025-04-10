document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const inputValue = document.getElementById('inputValue');
    const ngBtn = document.getElementById('ngBtn');
    const nmolBtn = document.getElementById('nmolBtn');
    const conversionOutput = document.getElementById('conversionOutput');
    
    // Set event listeners
    inputValue.addEventListener('input', calculateConversion);
    ngBtn.addEventListener('click', function() {
        setActiveUnit('ng');
        calculateConversion();
    });
    nmolBtn.addEventListener('click', function() {
        setActiveUnit('nmol');
        calculateConversion();
    });
    
    // Initialize with default active unit
    let activeUnit = 'ng'; // Default to ng/mL
    
    // Function to set active unit
    function setActiveUnit(unit) {
        activeUnit = unit;
        
        // Update UI to show active unit
        if (unit === 'ng') {
            ngBtn.classList.add('active');
            nmolBtn.classList.remove('active');
        } else {
            ngBtn.classList.remove('active');
            nmolBtn.classList.add('active');
        }
    }
    
    // Function to calculate conversion
    function calculateConversion() {
        // Get input value
        const value = parseFloat(inputValue.value);
        
        // Check if input is valid
        if (isNaN(value)) {
            conversionOutput.textContent = "Please enter a valid number";
            return;
        }
        
        let result;
        let resultUnit;
        
        // Convert based on active unit
        if (activeUnit === 'ng') {
            // Convert ng/mL to nmol/L (multiply by 2.5)
            result = (value * 2.5).toFixed(1);
            resultUnit = 'nmol/L';
        } else {
            // Convert nmol/L to ng/mL (multiply by 0.4)
            result = (value * 0.4).toFixed(1);
            resultUnit = 'ng/mL';
        }
        
        // Display result
        conversionOutput.textContent = `${result} ${resultUnit}`;
    }
});