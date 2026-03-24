// Semaglutide Reconstitution Calculator — factory-compatible
(function() {
    var presets = {
        'custom': { mg: '', water: '' },
        'sema-2': { mg: 2, water: '' },
        'sema-3': { mg: 3, water: '' },
        'sema-5': { mg: 5, water: '' },
        'sema-10': { mg: 10, water: '' },
        'tirz-5': { mg: 5, water: '' },
        'tirz-10': { mg: 10, water: '' },
        'tirz-15': { mg: 15, water: '' },
        'tirz-30': { mg: 30, water: '' }
    };

    var vialSelect = document.getElementById('vial-preset');
    var peptideMgInput = document.getElementById('peptide-mg');
    var waterMlInput = document.getElementById('water-ml');

    if (vialSelect && peptideMgInput) {
        vialSelect.addEventListener('change', function() {
            var p = presets[vialSelect.value];
            if (p && p.mg) peptideMgInput.value = p.mg;
            if (p && p.water && waterMlInput) waterMlInput.value = p.water;
        });
    }

    var btn = document.getElementById('calcBtn');
    if (btn) btn.addEventListener('click', function() {
        var peptideMgEl = document.getElementById('peptide-mg');
        var waterMlEl = document.getElementById('water-ml');
        var doseMgEl = document.getElementById('dose-mg');
        var syringeEl = document.getElementById('syringe-type');

        if (!peptideMgEl || !waterMlEl || !doseMgEl || !syringeEl) return;

        var peptideMg = parseFloat(peptideMgEl.value);
        var waterMl = parseFloat(waterMlEl.value);
        var doseMg = parseFloat(doseMgEl.value);
        var syringeUnits = parseInt(syringeEl.value);

        if (isNaN(peptideMg) || peptideMg <= 0) { alert('Please enter the amount of peptide in the vial (mg).'); return; }
        if (isNaN(waterMl) || waterMl <= 0) { alert('Please enter the amount of bacteriostatic water (mL).'); return; }
        if (isNaN(doseMg) || doseMg <= 0) { alert('Please enter your desired dose (mg).'); return; }
        if (doseMg > peptideMg) { alert('Your dose cannot exceed the total peptide in the vial (' + peptideMg + ' mg).'); return; }

        // Core calculation
        var concentration = peptideMg / waterMl;
        var injectMl = doseMg / concentration;
        var injectUnits = injectMl * 100;
        var dosesPerVial = Math.floor(peptideMg / doseMg);

        // Syringe tick marks
        var ticksPerUnit = syringeUnits === 100 ? 1 : (syringeUnits === 50 ? 1 : 0.5);
        var nearestTick = Math.round(injectUnits / ticksPerUnit) * ticksPerUnit;

        // Render results
        var resultNum = document.getElementById('resultNumber');
        var resultVerdict = document.getElementById('resultVerdict');
        if (resultNum) resultNum.textContent = injectUnits.toFixed(1);
        if (resultVerdict) {
            if (injectUnits > syringeUnits) {
                resultVerdict.textContent = 'Volume exceeds syringe capacity. Add more water or use a larger syringe.';
                resultVerdict.style.color = '#dc2626';
            } else if (injectUnits < 5) {
                resultVerdict.textContent = 'Very small volume \u2014 consider adding more water for easier dosing.';
                resultVerdict.style.color = '#d97706';
            } else {
                resultVerdict.textContent = 'Draw to ' + injectUnits.toFixed(1) + ' units on a ' + syringeUnits + '-unit syringe';
                resultVerdict.style.color = '';
            }
        }

        // Breakdown cards
        var dConc = document.getElementById('dConcentration');
        var dVolume = document.getElementById('dVolume');
        var dTick = document.getElementById('dTick');
        var dDoses = document.getElementById('dDoses');
        if (dConc) dConc.textContent = concentration.toFixed(2) + ' mg/mL';
        if (dVolume) dVolume.textContent = injectMl.toFixed(3) + ' mL';
        if (dTick) dTick.textContent = nearestTick.toFixed(1) + ' units';
        if (dDoses) dDoses.textContent = dosesPerVial + ' doses';

        // Coach card — titration schedule
        var coachCard = document.getElementById('coachCard');
        if (coachCard) {
            var semaSchedule = [
                { week: '1-4', dose: 0.25, label: 'Starting dose' },
                { week: '5-8', dose: 0.5, label: 'Titration' },
                { week: '9-12', dose: 1.0, label: 'Titration' },
                { week: '13-16', dose: 1.7, label: 'Titration' },
                { week: '17+', dose: 2.4, label: 'Maintenance' }
            ];

            var html = '<div class="coach-text">';
            html += '<span class="hl">' + injectUnits.toFixed(1) + ' units</span> for your ' + doseMg + ' mg dose';
            html += '<div class="coach-rule">Reconstitution Summary</div>';
            html += '<div class="coach-advice">' + peptideMg + ' mg peptide + ' + waterMl + ' mL BAC water = ' + concentration.toFixed(2) + ' mg/mL</div>';
            html += '<div class="coach-advice">' + dosesPerVial + ' dose' + (dosesPerVial !== 1 ? 's' : '') + ' per vial at ' + doseMg + ' mg each</div>';

            html += '<div class="coach-rule">Semaglutide Titration Schedule</div>';
            html += '<table style="width:100%;font-size:0.85rem;border-collapse:collapse;">';
            html += '<tr style="border-bottom:1px solid rgba(255,255,255,0.1);"><th style="text-align:left;padding:4px 6px;">Weeks</th><th style="text-align:left;padding:4px 6px;">Dose</th><th style="text-align:left;padding:4px 6px;">Units</th><th style="text-align:left;padding:4px 6px;">Doses/Vial</th></tr>';

            for (var i = 0; i < semaSchedule.length; i++) {
                var s = semaSchedule[i];
                var vol = s.dose / concentration;
                var units = vol * 100;
                var dc = Math.floor(peptideMg / s.dose);
                var isCurrent = (Math.abs(s.dose - doseMg) < 0.01);
                html += '<tr style="' + (isCurrent ? 'background:rgba(var(--accent-rgb),0.1);font-weight:600;' : '') + 'border-bottom:1px solid rgba(255,255,255,0.06);">';
                html += '<td style="padding:4px 6px;">' + s.week + '</td>';
                html += '<td style="padding:4px 6px;">' + s.dose + ' mg</td>';
                html += '<td style="padding:4px 6px;">' + units.toFixed(1) + '</td>';
                html += '<td style="padding:4px 6px;">' + dc + '</td></tr>';
            }
            html += '</table>';
            html += '</div>';

            coachCard.innerHTML = html;
        }

        var shareText = 'Semaglutide dosing: ' + injectUnits.toFixed(1) + ' units (' + doseMg + ' mg from ' + peptideMg + ' mg/' + waterMl + ' mL)\n\nCalculate yours: healthcalculators.xyz/semaglutide-reconstitution-calculator';
        if (typeof updateShareButtons === 'function') updateShareButtons(shareText);

        if (typeof factoryReveal === 'function') factoryReveal();

        if (typeof hcTrackEvent === 'function') hcTrackEvent('calculator_complete', {calculator_name: 'Semaglutide Reconstitution Calculator', page_path: '/semaglutide-reconstitution-calculator'});
    });
})();
