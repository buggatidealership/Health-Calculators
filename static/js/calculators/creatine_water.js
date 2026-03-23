// Creatine Water Calculator — factory-compatible
(function() {
// Global variables to track units
        let currentUnit = 'kg';
        
        // Toggle between kg and lbs
        function toggleUnits(unit) {
            if (unit === currentUnit) return;
            
            const weightInput = document.getElementById('weight');
            const kgToggle = document.getElementById('kg-toggle');
            const lbsToggle = document.getElementById('lbs-toggle');
            
            // Convert the weight value
            if (unit === 'kg' && currentUnit === 'lbs') {
                // Convert lbs to kg
                weightInput.value = Math.round((parseFloat(weightInput.value) / 2.20462) * 10) / 10;
            } else if (unit === 'lbs' && currentUnit === 'kg') {
                // Convert kg to lbs
                weightInput.value = Math.round((parseFloat(weightInput.value) * 2.20462) * 10) / 10;
            }
            
            // Update active button styling
            if (unit === 'kg') {
                kgToggle.className = 'unit-btn unit-active';
                lbsToggle.className = 'unit-btn';
            } else {
                kgToggle.className = 'unit-btn';
                lbsToggle.className = 'unit-btn unit-active';
            }
            
            // Update current unit
            currentUnit = unit;
        }
        
        // Calculate button click handler
        document.getElementById('calcBtn').addEventListener('click', calculateWaterNeeds);
        
        function calculateWaterNeeds() {
            // Get input values
            const gender = document.getElementById('gender').value;
            let weight = parseFloat(document.getElementById('weight').value);
            const intensity = document.getElementById('intensity').value;
            const dosage = parseInt(document.getElementById('dosage').value);
            const phase = document.getElementById('phase').value;
            
            // Convert lbs to kg if needed
            if (currentUnit === 'lbs') {
                weight = weight / 2.20462;
            }
            
            // Validate weight
            if (isNaN(weight) || weight < 30 || weight > 200) {
                /* validation error */');
                return;
            }
            
            // Calculate base water needs (30-35 mL per kg of body weight)
            // Use 30 for females, 35 for males
            const mlPerKg = gender === 'male' ? 35 : 30;
            let baseWater = weight * mlPerKg;
            
            // Adjust for activity level
            let activityMultiplier = 1;
            if (intensity === 'moderate') {
                activityMultiplier = 1.1;
            } else if (intensity === 'high') {
                activityMultiplier = 1.2;
            } else if (intensity === 'extreme') {
                activityMultiplier = 1.4;
            }
            
            // Calculate base water needs adjusted for activity
            let adjustedBaseWater = baseWater * activityMultiplier;
            
            // Add creatine adjustment based on dosage and phase
            let creatineAdjustment = 0;
            
            if (phase === 'loading') {
                // In loading phase, add more water based on dosage
                creatineAdjustment = dosage * 50; // 50ml per gram of creatine
            } else {
                // In maintenance phase, add a standard amount
                creatineAdjustment = dosage * 30; // 30ml per gram of creatine
            }
            
            // Calculate total water needs
            let totalWater = adjustedBaseWater + creatineAdjustment;
            
            // Convert to liters and ounces
            const totalWaterLiters = Math.round(totalWater / 100) / 10;
            const totalWaterOunces = Math.round(totalWaterLiters * 33.814);
            const baseWaterLiters = Math.round(adjustedBaseWater / 100) / 10;
            
            // Display results
            document.getElementById('waterResult').innerHTML = `<strong>${totalWaterLiters} liters per day</strong> (${totalWaterOunces} oz)`;
            
            // Generate comparison text
            const difference = Math.round((totalWaterLiters - baseWaterLiters) * 10) / 10;
            document.getElementById('comparisonResult').textContent = `${difference} liters more`;
            
            // Update creatine dose recommendation
            if (phase === 'loading') {
                document.getElementById('creatineDose').innerHTML = `During the loading phase (first 5-7 days), take ${dosage}g of creatine monohydrate daily (consider dividing into 2-4 doses throughout the day).`;
            } else {
                document.getElementById('creatineDose').innerHTML = `During the maintenance phase, take ${dosage}g of creatine monohydrate daily.`;
            }
            
            // Generate hydration tips
            let hydrationTips = [
                'Spread your water intake evenly throughout the day',
                'Monitor urine color - aim for pale yellow',
                `Take your creatine dose with at least 8 oz (240ml) of water`,
                'Maintain consistent hydration to maximize muscle gains',
            ];
            
            // Add specific tips based on inputs
            if (intensity === 'high' || intensity === 'extreme') {
                hydrationTips.push('Drink an additional 16-20 oz (500-600ml) of water during each hour of intense exercise');
            }
            
            if (dosage >= 10) {
                hydrationTips.push('With higher creatine doses, consider drinking water consistently throughout the day rather than all at once');
            }
            
            if (phase === 'loading') {
                hydrationTips.push('During loading phase, timing isn\'t critical, but taking with meals may improve absorption');
            }
            
            // Display tips
            const tipsHTML = hydrationTips.map(tip => `<li>${tip}</li>`).join('');
            document.getElementById('hydrationTips').innerHTML = tipsHTML;
            
            // Show results
            document.getElementById('result').style.display = 'block';
    if (typeof showNextSteps === 'function') showNextSteps('creatine', collectUserData());
        }

// Reveal results
if (typeof factoryReveal === 'function') { factoryReveal(); }
})();
