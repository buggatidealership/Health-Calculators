// Newborn Weight Loss Calculator — factory-compatible
(function() {

function toGrams(w, u) { return u === 'kg' ? w * 1000 : w * 453.592; }
function fmtWeight(g, u) {
    if (u === 'kg') return (g / 1000).toFixed(3) + ' kg';
    var oz = g / 28.3495;
    var lb = Math.floor(oz / 16);
    var rem = Math.round(oz % 16);
    return lb > 0 ? lb + ' lb ' + rem + ' oz' : rem + ' oz';
}

var calcBtn = document.getElementById('calcBtn');
if (calcBtn) calcBtn.addEventListener('click', calculate);

function calculate() {
    var bwEl = document.getElementById('birthWeight');
    var buEl = document.getElementById('birthUnit');
    var cwEl = document.getElementById('currentWeight');
    var cuEl = document.getElementById('currentUnit');
    var ageEl = document.getElementById('age');
    var feedEl = document.getElementById('feedingMethod');

    if (!bwEl || !buEl || !cwEl || !cuEl || !ageEl || !feedEl) return;

    var bw = parseFloat(bwEl.value);
    var bu = buEl.value;
    var cw = parseFloat(cwEl.value);
    var cu = cuEl.value;
    var age = parseInt(ageEl.value);
    var feeding = feedEl.value;

    if (isNaN(bw) || isNaN(cw) || isNaN(age) || age < 0 || age > 14) {
        alert('Please enter valid weights and age (0-14 days).');
        return;
    }

    var birthG = toGrams(bw, bu);
    var currentG = toGrams(cw, cu);
    var lossG = birthG - currentG;
    var pctLoss = (lossG / birthG) * 100;

    // Set primary result
    var sign = currentG > birthG ? '+' : '-';
    var resultNumber = document.getElementById('resultNumber');
    if (resultNumber) resultNumber.textContent = sign + Math.abs(pctLoss).toFixed(1) + '%';

    var resultVerdict = document.getElementById('resultVerdict');

    // Determine status
    var status, statusClass, recommendation;
    if (currentG > birthG) {
        status = 'Above birth weight';
        statusClass = 'good';
        recommendation = 'Your baby has surpassed birth weight. This is excellent. Continue current feeding practices.';
    } else if (pctLoss <= 7) {
        status = 'Normal weight loss';
        statusClass = 'good';
        recommendation = 'This is within the expected range. Continue feeding 8-12 times per day and monitoring diaper output.';
    } else if (pctLoss <= 10) {
        statusClass = 'caution';
        if (age <= 3) {
            status = 'At the upper limit of normal';
            recommendation = 'This is borderline for early days. Ensure 8-12 feedings per day.' + (feeding === 'breast' ? ' Consider seeing a lactation consultant.' : '');
        } else {
            status = 'Monitor closely';
            recommendation = 'Baby should be regaining by now. Please consult your pediatrician soon.';
        }
    } else {
        status = 'Seek medical advice today';
        statusClass = 'concern';
        recommendation = 'This level of weight loss needs evaluation. Contact your pediatrician today.';
    }

    if (age >= 4 && pctLoss > 7 && currentG < birthG) {
        status = 'Not regaining — needs evaluation';
        statusClass = 'concern';
        recommendation = 'By day 4-5, babies should stop losing weight. Please consult your pediatrician.';
    }

    if (resultVerdict) resultVerdict.textContent = status;

    // Status banner
    var sb = document.getElementById('statusBanner');
    if (sb) {
        sb.className = 'status-banner ' + statusClass;
        sb.textContent = status;
        sb.style.display = 'block';
    }

    // Gauge
    var gw = Math.min((currentG >= birthG ? 0 : pctLoss) / 12 * 100, 100);
    var gf = document.getElementById('gaugeFill');
    if (gf) {
        gf.style.width = gw + '%';
        if (pctLoss <= 5 || currentG >= birthG) gf.style.background = 'var(--good, #14b8a6)';
        else if (pctLoss <= 7) gf.style.background = '#fde68a';
        else if (pctLoss <= 10) gf.style.background = 'var(--caution, #f59e0b)';
        else gf.style.background = 'var(--bad, #ef4444)';
    }

    // Info cards
    var rBirth = document.getElementById('rBirth');
    var rCurrent = document.getElementById('rCurrent');
    var rAge = document.getElementById('rAge');
    var rAgeNote = document.getElementById('rAgeNote');
    if (rBirth) rBirth.textContent = fmtWeight(birthG, bu);
    if (rCurrent) rCurrent.textContent = fmtWeight(currentG, cu);
    if (rAge) rAge.textContent = age + (age === 1 ? ' day' : ' days');
    if (rAgeNote) {
        var ageNote = age <= 3 ? 'Expected loss phase' : age <= 5 ? 'Should stabilize' : age <= 10 ? 'Should be gaining' : 'Approaching birth weight';
        rAgeNote.textContent = ageNote;
    }

    // Coach card
    var feedLabels = { breast: 'breastfed', formula: 'formula-fed', mixed: 'mixed-fed' };
    var expectedRange = { breast: '7-10%', formula: '5-7%', mixed: '5-8%' };
    var coachCard = document.getElementById('coachCard');
    if (coachCard) {
        coachCard.innerHTML = '<div class="coach-text">' +
            'Your <span class="hl">' + feedLabels[feeding] + '</span> baby is <span class="hl">' + age + ' day' + (age !== 1 ? 's' : '') + '</span> old.<br>' +
            'Expected loss range: <span class="hl">' + expectedRange[feeding] + '</span>. Your baby: <span class="hl">' + Math.abs(pctLoss).toFixed(1) + '%</span>.<br>' +
            '<div class="coach-rule" style="font-family:var(--font-display);font-size:1.5rem;color:var(--accent);margin:1.5rem 0;">All newborns lose weight. Up to 7% is normal.</div>' +
            '<div class="coach-advice" style="margin-top:1.5rem;padding-top:1.5rem;border-top:1px solid rgba(var(--accent-rgb),0.1);font-size:1.05rem;line-height:1.9;color:var(--text-dim);">' + recommendation + '</div></div>';
    }

    // Share
    var shareText = 'Newborn weight loss rule of thumb:\n\nAll babies lose weight after birth.\nUp to 7% in first 3 days = normal\nBirth weight back by day 10-14\n\nWhen to call the doctor: >10% loss\n\nCheck yours: healthcalculators.xyz/newborn-weight-loss-calculator';
    if (typeof updateShareButtons === 'function') {
        updateShareButtons(shareText);
    }

    if (typeof factoryReveal === 'function') factoryReveal();
    if (typeof hcTrackEvent === 'function') hcTrackEvent('calculator_complete', { calculator_name: 'Newborn Weight Loss Calculator', page_path: '/newborn-weight-loss-calculator' });
}

})();
