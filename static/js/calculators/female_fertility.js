// Female Fertility Calculator — factory-compatible
(function() {

            document.getElementById('calcBtn').addEventListener('click', function() {
                // Clear previous errors and results
                document.getElementById('dateError').textContent = '';
                document.getElementById('cycleError').textContent = '';
                document.getElementById('lutealError').textContent = '';
                document.getElementById('results').classList.add('hidden');
               
                // Get input values
                const lastPeriodInput = document.getElementById('lastPeriod').value;
                const cycleLength = parseInt(document.getElementById('cycleLength').value);
                let lutealPhase = parseInt(document.getElementById('lutealPhase').value);
               
                // Validate inputs
                if (!lastPeriodInput) {
                    document.getElementById('dateError').textContent = 'Please enter your last period date';
                    return;
                }
               
                const lastPeriod = new Date(lastPeriodInput);
                if (isNaN(lastPeriod.getTime())) {
                    document.getElementById('dateError').textContent = 'Please enter a valid date';
                    return;
                }
               
                if (isNaN(cycleLength) || cycleLength < 20 || cycleLength > 45) {
                    document.getElementById('cycleError').textContent = 'Please enter a cycle length between 20 and 45 days';
                    return;
                }
               
                if (isNaN(lutealPhase)) {
                    lutealPhase = 14; // default value
                } else if (lutealPhase < 10 || lutealPhase > 16) {
                    document.getElementById('lutealError').textContent = 'Luteal phase should be between 10-16 days';
                    return;
                }
               
                // Calculate ovulation day (cycle length - luteal phase)
                const ovulationDayInCycle = cycleLength - lutealPhase;
               
                // Calculate ovulation date (last period + ovulation day in cycle)
                const ovulationDate = new Date(lastPeriod);
                ovulationDate.setDate(ovulationDate.getDate() + ovulationDayInCycle);
               
                // Calculate fertile window (5 days before ovulation to ovulation day)
                const fertileStart = new Date(ovulationDate);
                fertileStart.setDate(fertileStart.getDate() - 5);
               
                // Calculate peak fertility days (2 days before ovulation to ovulation day)
                const peakStart = new Date(ovulationDate);
                peakStart.setDate(peakStart.getDate() - 2);
               
                // Format dates for display
                document.getElementById('fertileDays').textContent =
                    formatDate(fertileStart) + ' to ' + formatDate(ovulationDate);
               
                document.getElementById('peakDays').textContent =
                    formatDate(peakStart) + ' to ' + formatDate(ovulationDate);
               
                document.getElementById('ovulationDay').textContent = formatDate(ovulationDate);
               
                // Create cycle visualization
                const cycleVis = document.getElementById('cycleVisualization');
                cycleVis.innerHTML = '<p>Your cycle days:</p>';
               
                for (let i = 1; i <= cycleLength; i++) {
                    const dayElement = document.createElement('span');
                    dayElement.className = 'cycle-day';
                    dayElement.textContent = i;
                   
                    // Mark fertile days
                    if (i >= (ovulationDayInCycle - 5) && i <= ovulationDayInCycle) {
                        dayElement.classList.add('fertile-day');
                    }
                   
                    // Mark peak fertility days
                    if (i >= (ovulationDayInCycle - 2) && i <= ovulationDayInCycle) {
                        dayElement.classList.add('peak-fertility');
                    }
                   
                    // Mark ovulation day
                    if (i === ovulationDayInCycle) {
                        dayElement.classList.add('ovulation-day');
                    }
                   
                    cycleVis.appendChild(dayElement);
                }
               
                // Show results
                document.getElementById('results').classList.remove('hidden');
               
                // Scroll to results
                document.getElementById('results').scrollIntoView({ behavior: 'smooth' });
    if (typeof showNextSteps === 'function') showNextSteps('fertility', collectUserData());
            });
        // Helper function to format dates consistently
        function formatDate(date) {
            const options = { weekday: 'short', month: 'short', day: 'numeric' };
            return date.toLocaleDateString('en-US', options);
        }

// Reveal results
if (typeof factoryReveal === 'function') { factoryReveal(); }
})();
