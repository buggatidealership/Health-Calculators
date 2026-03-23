// Botox Dosage & Cost Calculator — calculation logic
(function() {
    var txData = {
        glabella: {light: 20, standard: 25, advanced: 30, male: 1.25, bilateral: false},
        forehead: {light: 10, standard: 15, advanced: 20, male: 1.3, bilateral: false},
        crowfeet: {light: 10, standard: 12, advanced: 15, male: 1.25, bilateral: true},
        bunny: {light: 4, standard: 5, advanced: 6, male: 1.2, bilateral: false},
        lipflip: {light: 3, standard: 4, advanced: 5, male: 1, bilateral: false},
        chin: {light: 5, standard: 6, advanced: 8, male: 1.2, bilateral: false},
        jaw: {light: 20, standard: 25, advanced: 30, male: 1.4, bilateral: true},
        neck: {light: 12, standard: 15, advanced: 18, male: 1.3, bilateral: false}
    };
    var pricing = {derm: 15, medspa: 12, nurse: 13};

    window.calcBotox = function() {
        var gender = document.getElementById('gender').value;
        var intensity = document.getElementById('intensity').value;
        var provider = document.getElementById('provider').value;
        var areas = [];
        document.querySelectorAll('.check-grid input:checked').forEach(function(cb) { areas.push(cb.value); });
        if (!areas.length) { alert('Select at least one treatment area.'); return; }

        var totalUnits = 0;
        var breakdown = [];
        areas.forEach(function(area) {
            var d = txData[area];
            if (!d) return;
            var units = d[intensity];
            if (gender === 'male') units *= d.male;
            if (d.bilateral) units *= 2;
            units = Math.round(units);
            totalUnits += units;
            breakdown.push(area + ': ' + units + ' units');
        });

        var costPerUnit = pricing[provider] || 13;
        var totalCost = totalUnits * costPerUnit;

        document.getElementById('resultNumber').textContent = totalUnits;
        document.getElementById('dUnits').textContent = totalUnits;
        document.getElementById('dCost').textContent = '$' + totalCost;

        document.getElementById('coachCard').innerHTML = '<div class="coach-text"><span class="hl">' + totalUnits + ' units</span> across ' + areas.length + ' area' + (areas.length > 1 ? 's' : '') + ':<br><br>' + breakdown.join('<br>') + '<div class="coach-rule">$' + totalCost + ' estimated total</div><div class="coach-advice"><em>Duration:</em> Results typically last 3-4 months.<br><em>Cost per unit:</em> $' + costPerUnit + ' (' + provider + ')</div></div>';

        var shareText = 'My Botox estimate: ' + totalUnits + ' units ($' + totalCost + ') for ' + areas.join(', ') + '\n\nCalculate yours: healthcalculators.xyz/botox-dosage-calculator';
        updateShareButtons(shareText);

        document.querySelectorAll('.hidden-section').forEach(function(el) { el.classList.remove('hidden-section'); });
        document.getElementById('result-section').scrollIntoView({ behavior: 'smooth' });

        if (typeof hcTrackEvent === 'function') hcTrackEvent('calculator_complete', {calculator_name: 'Botox Dosage Calculator', page_path: '/botox-dosage-calculator'});
    };
})();
