// Adult Height Predictor Calculator — calculation logic
(function() {
    function cmToFt(cm) {
        var i = cm / 2.54;
        var f = Math.floor(i / 12);
        var r = Math.round(i % 12 * 10) / 10;
        return f + "'" + r + '"';
    }

    function getPerc(g, a, h) {
        if (g === 'male') {
            if (a < 10) { if (h < 115) return .1; if (h < 125) return .25; if (h < 135) return .5; if (h < 145) return .75; return .9; }
            else { if (h < 140) return .1; if (h < 150) return .25; if (h < 160) return .5; if (h < 170) return .75; return .9; }
        } else {
            if (a < 10) { if (h < 110) return .1; if (h < 120) return .25; if (h < 130) return .5; if (h < 140) return .75; return .9; }
            else { if (h < 135) return .1; if (h < 145) return .25; if (h < 155) return .5; if (h < 165) return .75; return .9; }
        }
    }

    function proj(g, a, h, p) {
        var rg = g === 'male' ? (18 - a) * (2.5 + (1 - p) * 1.5) : (16 - a) * (2.0 + (1 - p) * 1.5);
        return h + rg;
    }

    document.getElementById('calcBtn').addEventListener('click', function() {
        var g = document.getElementById('childGender').value;
        var a = parseFloat(document.getElementById('childAge').value);
        var ch = parseFloat(document.getElementById('childHeight').value);
        var mh = parseFloat(document.getElementById('motherHeight').value);
        var fh = parseFloat(document.getElementById('fatherHeight').value);
        if (isNaN(ch) || isNaN(mh) || isNaN(fh)) return;

        var mpH = g === 'male' ? (mh + fh) / 2 + 6.5 : (mh + fh) / 2 - 6.5;
        var predicted;
        if (a < 4) {
            predicted = mpH;
        } else {
            var p = getPerc(g, a, ch);
            predicted = 0.6 * mpH + 0.4 * proj(g, a, ch, p);
            if (g === 'male' && a > 12) predicted *= 1.02;
            else if (g === 'female' && a > 10) predicted *= 1.01;
        }
        var low = predicted - 5, high = predicted + 5;

        document.getElementById('resultNumber').textContent = cmToFt(predicted);
        document.getElementById('resultVerdict').textContent = Math.round(predicted) + ' cm (' + cmToFt(low) + ' - ' + cmToFt(high) + ')';
        document.getElementById('heightRange').textContent = Math.round(low) + ' - ' + Math.round(high) + ' cm';
        document.getElementById('midParental').textContent = Math.round(mpH) + ' cm (' + cmToFt(mpH) + ')';
        document.getElementById('growthRemaining').textContent = Math.round(predicted - ch) + ' cm to go';

        document.getElementById('coachCard').innerHTML = '<div class="coach-text">At age <span class="hl">' + a + '</span>, current height <span class="hl">' + ch + ' cm</span>.<br>Predicted adult height: <span class="hl">' + cmToFt(predicted) + ' (' + Math.round(predicted) + ' cm)</span>.' +
            '<div class="coach-rule">' + Math.round(predicted - ch) + ' cm of growth remaining</div>' +
            '<div class="coach-advice"><em>Genetics (mid-parental):</em> ' + Math.round(mpH) + ' cm<br><em>Growth trajectory:</em> ' + (a >= 4 ? 'factored in' : 'too young to factor') + '<br><em>Accuracy:</em> +/- 5 cm for most children</div></div>';

        var shareText = 'Predicted adult height: ' + cmToFt(predicted) + ' (' + Math.round(predicted) + ' cm)\nRange: ' + cmToFt(low) + ' - ' + cmToFt(high) + '\nAge ' + a + ', currently ' + ch + ' cm\n\nTry it: healthcalculators.xyz/adult-height-predictor-calculator';
        updateShareButtons(shareText);

        document.querySelectorAll('.hidden-section').forEach(function(el) { el.classList.remove('hidden-section'); });
        document.getElementById('result-section').scrollIntoView({ behavior: 'smooth' });
    });
})();
