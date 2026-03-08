// Body Fat Calculator — U.S. Navy Method (Hodgdon-Beckett)
// All formula calculations use centimeters internally.

var bodyFatUnitSystem = 'imperial';

document.addEventListener('DOMContentLoaded', function() {
    setBodyFatUnit('imperial');
    toggleHipField();
});

function setBodyFatUnit(unit) {
    bodyFatUnitSystem = unit;

    document.getElementById('metric-btn').classList.remove('active');
    document.getElementById('imperial-btn').classList.remove('active');

    if (unit === 'metric') {
        document.getElementById('metric-btn').classList.add('active');
        document.querySelectorAll('.metric-field').forEach(function(el) {
            el.style.display = 'block';
        });
        document.querySelectorAll('.imperial-field').forEach(function(el) {
            el.style.display = 'none';
        });
    } else {
        document.getElementById('imperial-btn').classList.add('active');
        document.querySelectorAll('.imperial-field').forEach(function(el) {
            el.style.display = 'block';
        });
        document.querySelectorAll('.metric-field').forEach(function(el) {
            el.style.display = 'none';
        });
    }
    // Re-apply hip visibility
    toggleHipField();
}

function toggleHipField() {
    var gender = document.getElementById('gender').value;
    var hipFields = document.querySelectorAll('.hip-field');
    hipFields.forEach(function(el) {
        if (gender === 'female') {
            // Only show the hip field matching the current unit system
            if (bodyFatUnitSystem === 'imperial' && el.classList.contains('imperial-field')) {
                el.style.display = 'block';
            } else if (bodyFatUnitSystem === 'metric' && el.classList.contains('metric-field')) {
                el.style.display = 'block';
            } else {
                el.style.display = 'none';
            }
        } else {
            el.style.display = 'none';
        }
    });
}

function calculateBodyFat() {
    var gender = document.getElementById('gender').value;
    var age = parseInt(document.getElementById('age').value);

    // Gather measurements in cm
    var heightCm, neckCm, waistCm, hipCm, weightKg;

    if (bodyFatUnitSystem === 'imperial') {
        var ft = parseFloat(document.getElementById('height_ft').value) || 0;
        var inches = parseFloat(document.getElementById('height_in').value) || 0;
        heightCm = (ft * 12 + inches) * 2.54;
        neckCm = (parseFloat(document.getElementById('neck_in').value) || 0) * 2.54;
        waistCm = (parseFloat(document.getElementById('waist_in').value) || 0) * 2.54;
        hipCm = (parseFloat(document.getElementById('hip_in').value) || 0) * 2.54;
        var lbs = parseFloat(document.getElementById('weight_lb').value) || 0;
        weightKg = lbs > 0 ? lbs * 0.453592 : 0;
    } else {
        heightCm = parseFloat(document.getElementById('height_cm').value) || 0;
        neckCm = parseFloat(document.getElementById('neck_cm').value) || 0;
        waistCm = parseFloat(document.getElementById('waist_cm').value) || 0;
        hipCm = parseFloat(document.getElementById('hip_cm').value) || 0;
        weightKg = parseFloat(document.getElementById('weight_kg').value) || 0;
    }

    // Validate
    if (isNaN(age) || age < 15 || age > 100) {
        alert('Please enter a valid age between 15 and 100.');
        return;
    }
    if (heightCm <= 0) {
        alert('Please enter a valid height.');
        return;
    }
    if (neckCm <= 0) {
        alert('Please enter a valid neck circumference.');
        return;
    }
    if (waistCm <= 0) {
        alert('Please enter a valid waist circumference.');
        return;
    }
    if (gender === 'female' && hipCm <= 0) {
        alert('Please enter a valid hip circumference.');
        return;
    }
    if (neckCm >= waistCm) {
        alert('Neck measurement must be smaller than waist measurement. Please check your inputs.');
        return;
    }

    // U.S. Navy Method (Hodgdon-Beckett) — all measurements in cm
    var bf;
    if (gender === 'male') {
        bf = 86.010 * Math.log10(waistCm - neckCm) - 70.041 * Math.log10(heightCm) + 36.76;
    } else {
        bf = 163.205 * Math.log10(waistCm + hipCm - neckCm) - 97.684 * Math.log10(heightCm) + 36.76;
    }

    if (isNaN(bf) || !isFinite(bf)) {
        alert('Calculation error. Please check that your measurements are reasonable.');
        return;
    }

    bf = Math.max(bf, 0);
    bf = Math.round(bf * 10) / 10;

    // Determine ACE category
    var category = getACECategory(bf, gender);

    // Display results
    var resultsEl = document.getElementById('results');
    resultsEl.classList.remove('hidden');

    document.getElementById('bf-display').textContent = bf + '%';
    document.getElementById('bf-display').style.color = category.color;
    document.getElementById('bf-category').innerHTML = '<span style="color:' + category.color + '; font-weight:600;">' + category.name + '</span>';

    // Position gauge marker
    positionGaugeMarker(bf, gender);

    // Highlight ACE table row
    highlightACERow(category.id);

    // Lean / fat mass if weight provided
    var massBreakdown = document.getElementById('mass-breakdown');
    if (weightKg > 0) {
        var fatMassKg = weightKg * (bf / 100);
        var leanMassKg = weightKg - fatMassKg;
        var fatMassLbs = fatMassKg / 0.453592;
        var leanMassLbs = leanMassKg / 0.453592;

        if (bodyFatUnitSystem === 'imperial') {
            document.getElementById('fat-mass-display').textContent = fatMassLbs.toFixed(1) + ' lbs (' + fatMassKg.toFixed(1) + ' kg)';
            document.getElementById('lean-mass-display').textContent = leanMassLbs.toFixed(1) + ' lbs (' + leanMassKg.toFixed(1) + ' kg)';
        } else {
            document.getElementById('fat-mass-display').textContent = fatMassKg.toFixed(1) + ' kg (' + fatMassLbs.toFixed(1) + ' lbs)';
            document.getElementById('lean-mass-display').textContent = leanMassKg.toFixed(1) + ' kg (' + leanMassLbs.toFixed(1) + ' lbs)';
        }
        massBreakdown.style.display = 'block';
    } else {
        massBreakdown.style.display = 'none';
    }

    // Scroll to results
    resultsEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    // Content loops
    if (typeof showNextSteps === 'function' && typeof collectUserData === 'function') {
        showNextSteps('body-fat', collectUserData());
    }
}

function getACECategory(bf, gender) {
    if (gender === 'male') {
        if (bf < 6) return { name: 'Essential Fat', color: '#0891b2', id: 'essential' };
        if (bf <= 13) return { name: 'Athletes', color: '#16a34a', id: 'athletes' };
        if (bf <= 17) return { name: 'Fitness', color: '#22c55e', id: 'fitness' };
        if (bf <= 24) return { name: 'Average', color: '#d97706', id: 'average' };
        return { name: 'Obese', color: '#dc2626', id: 'obese' };
    } else {
        if (bf < 14) return { name: 'Essential Fat', color: '#0891b2', id: 'essential' };
        if (bf <= 20) return { name: 'Athletes', color: '#16a34a', id: 'athletes' };
        if (bf <= 24) return { name: 'Fitness', color: '#22c55e', id: 'fitness' };
        if (bf <= 31) return { name: 'Average', color: '#d97706', id: 'average' };
        return { name: 'Obese', color: '#dc2626', id: 'obese' };
    }
}

function positionGaugeMarker(bf, gender) {
    // Map body fat to gauge position (0-100%)
    // Gauge spans from 0% BF to ~45% BF
    var maxBf = gender === 'male' ? 40 : 50;
    var pct = Math.min(Math.max(bf / maxBf * 100, 0), 100);
    var marker = document.getElementById('bf-marker');
    marker.style.left = 'calc(' + pct + '% - 2px)';
}

function highlightACERow(categoryId) {
    // Reset all rows
    var rows = ['essential', 'athletes', 'fitness', 'average', 'obese'];
    rows.forEach(function(id) {
        var row = document.getElementById('ace-' + id);
        if (row) {
            row.style.backgroundColor = '';
            row.style.fontWeight = '';
        }
    });
    // Highlight active
    var active = document.getElementById('ace-' + categoryId);
    if (active) {
        active.style.backgroundColor = '#fffbeb';
        active.style.fontWeight = '600';
    }
}
