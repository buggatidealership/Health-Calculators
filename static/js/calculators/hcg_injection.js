// HCG Injection Dosage Calculator — factory-compatible
(function() {

var vialStrengthInput = document.getElementById('vial-strength');
var customVialGroup = document.getElementById('custom-vial-group');
var customVialInput = document.getElementById('custom-vial');
var waterVolumeInput = document.getElementById('water-volume');
var customWaterGroup = document.getElementById('custom-water-group');
var customWaterInput = document.getElementById('custom-water');
var doseInput = document.getElementById('desired-dose');
var calculateBtn = document.getElementById('calculate-btn');
var resultsSection = document.getElementById('results-section');

if (!calculateBtn || !vialStrengthInput || !doseInput) return;

vialStrengthInput.addEventListener('change', function() {
    if (!customVialGroup) return;
    if (vialStrengthInput.value === 'custom') {
        customVialGroup.classList.remove('hidden');
    } else {
        customVialGroup.classList.add('hidden');
    }
});

if (waterVolumeInput) waterVolumeInput.addEventListener('change', function() {
    if (!customWaterGroup) return;
    if (waterVolumeInput.value === 'custom') {
        customWaterGroup.classList.remove('hidden');
    } else {
        customWaterGroup.classList.add('hidden');
    }
});

calculateBtn.addEventListener('click', function() {
    var vialIU;
    if (vialStrengthInput.value === 'custom') {
        vialIU = parseFloat(customVialInput ? customVialInput.value : '');
    } else {
        vialIU = parseFloat(vialStrengthInput.value);
    }

    var waterMl;
    if (waterVolumeInput && waterVolumeInput.value === 'custom') {
        waterMl = parseFloat(customWaterInput ? customWaterInput.value : '');
    } else {
        waterMl = parseFloat(waterVolumeInput ? waterVolumeInput.value : '');
    }

    var desiredDose = parseFloat(doseInput.value);

    if (isNaN(vialIU) || vialIU <= 0) { alert('Please enter a valid vial strength.'); return; }
    if (isNaN(waterMl) || waterMl <= 0) { alert('Please enter a valid water volume.'); return; }
    if (isNaN(desiredDose) || desiredDose <= 0) { alert('Please enter your prescribed dose.'); return; }
    if (desiredDose > vialIU) { alert('Desired dose cannot exceed vial strength.'); return; }

    // Calculations
    var concentration = vialIU / waterMl;
    var injectionMl = desiredDose / concentration;
    var syringeUnits = injectionMl * 100;
    var dosesPerVial = Math.floor(vialIU / desiredDose);
    var wastedIU = vialIU - (dosesPerVial * desiredDose);

    // Show results
    if (resultsSection) resultsSection.classList.remove('hidden');

    var heroEl = document.getElementById('dose-result');
    if (heroEl) {
        heroEl.textContent = injectionMl.toFixed(2) + ' mL';
        if (typeof animateCountUp === 'function') {
            animateCountUp(heroEl, 0, injectionMl * 100, 0, '', function(el, val) {
                el.textContent = (val / 100).toFixed(2) + ' mL';
            });
        }
    }

    var doseLabel = document.getElementById('dose-label');
    if (doseLabel) doseLabel.textContent = desiredDose.toLocaleString() + ' IU per injection';

    // Status
    var statusEl = document.getElementById('dose-status');
    var iconEl = document.getElementById('dose-icon');
    var descEl = document.getElementById('dose-description');

    if (injectionMl < 0.05) {
        if (statusEl) statusEl.className = 'result-status status-warning';
        if (iconEl) iconEl.textContent = '\u26A0';
        if (descEl) descEl.textContent = 'Warning: This injection volume (' + injectionMl.toFixed(3) + ' mL = ' + syringeUnits.toFixed(1) + ' units) is very small and difficult to measure accurately. Consider using more bacteriostatic water to increase the volume per dose. For example, adding ' + (waterMl * 2) + ' mL instead of ' + waterMl + ' mL would double the injection volume.';
    } else {
        if (statusEl) statusEl.className = 'result-status status-good';
        if (iconEl) iconEl.textContent = '\u2713';
        if (descEl) descEl.textContent = 'Draw ' + injectionMl.toFixed(2) + ' mL (' + syringeUnits.toFixed(1) + ' units on a U-100 insulin syringe) for each ' + desiredDose.toLocaleString() + ' IU injection. This vial provides ' + dosesPerVial + ' doses at this amount.';
    }

    // Comparison boxes
    var compVolume = document.getElementById('comp-volume');
    var compUnits = document.getElementById('comp-units');
    var compDoses = document.getElementById('comp-doses');
    if (compVolume) compVolume.textContent = injectionMl.toFixed(2) + ' mL';
    if (compUnits) compUnits.textContent = syringeUnits.toFixed(1) + ' units';
    if (compDoses) compDoses.textContent = dosesPerVial;

    // Breakdown
    var displayConc = document.getElementById('display-concentration');
    var displayInjMl = document.getElementById('display-injection-ml');
    var displaySyringeUnits = document.getElementById('display-syringe-units');
    var displayDoses = document.getElementById('display-doses');
    var displayWaste = document.getElementById('display-waste');
    var displayVial = document.getElementById('display-vial');

    if (displayConc) displayConc.textContent = concentration.toLocaleString() + ' IU/mL';
    if (displayInjMl) displayInjMl.textContent = injectionMl.toFixed(3) + ' mL';
    if (displaySyringeUnits) displaySyringeUnits.textContent = syringeUnits.toFixed(1) + ' units (U-100 insulin syringe)';
    if (displayDoses) displayDoses.textContent = dosesPerVial + ' doses per vial';
    if (displayWaste) displayWaste.textContent = wastedIU > 0 ? wastedIU.toLocaleString() + ' IU remaining (not enough for a full dose)' : 'None \u2014 vial divides evenly';
    if (displayVial) displayVial.textContent = vialIU.toLocaleString() + ' IU vial + ' + waterMl + ' mL bacteriostatic water';

    // Quick reference table
    var tbody = document.getElementById('ref-tbody');
    if (tbody) {
        tbody.innerHTML = '';
        var commonDoses = [125, 250, 500, 1000, 1500, 2000, 5000, 10000];
        var relevantDoses = commonDoses.filter(function(d) { return d <= vialIU; });

        for (var i = 0; i < relevantDoses.length; i++) {
            var d = relevantDoses[i];
            var vol = d / concentration;
            var units = vol * 100;
            var tr = document.createElement('tr');
            var isCurrent = d === desiredDose;
            if (isCurrent) {
                tr.style.background = '#f0f9ff';
                tr.style.fontWeight = '600';
            }
            tr.innerHTML =
                '<td style="padding:6px 10px;border-bottom:1px solid #f0f0f0;">' + d.toLocaleString() + ' IU' + (isCurrent ? ' \u2190' : '') + '</td>' +
                '<td style="padding:6px 10px;border-bottom:1px solid #f0f0f0;">' + vol.toFixed(3) + ' mL</td>' +
                '<td style="padding:6px 10px;border-bottom:1px solid #f0f0f0;">' + units.toFixed(1) + ' units</td>' +
                '<td style="padding:6px 10px;border-bottom:1px solid #f0f0f0;">' + Math.floor(vialIU / d) + '</td>';
            tbody.appendChild(tr);
        }
    }

    if (resultsSection) resultsSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    if (typeof celebratePulse === 'function') {
        var resultHero = document.getElementById('result-hero');
        if (resultHero) celebratePulse(resultHero);
    }
    if (typeof showNextSteps === 'function') {
        showNextSteps('hcg-injection', {});
    }

    if (typeof factoryReveal === 'function') factoryReveal();
});

})();
