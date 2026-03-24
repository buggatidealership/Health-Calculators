// Starbucks Nutrition Calculator — factory-compatible
(function() {
    var D = {
        "caffe-latte": {n: "Caffe Latte", c: 190, s: 18, f: 7, p: 13, cf: 150},
        "cappuccino": {n: "Cappuccino", c: 140, s: 10, f: 5, p: 9, cf: 150},
        "caffe-mocha": {n: "Caffe Mocha", c: 360, s: 35, f: 15, p: 13, cf: 175},
        "caramel-macchiato": {n: "Caramel Macchiato", c: 250, s: 33, f: 7, p: 10, cf: 150},
        "cold-brew": {n: "Cold Brew", c: 5, s: 0, f: 0, p: 0, cf: 205},
        "iced-coffee": {n: "Iced Coffee", c: 5, s: 0, f: 0, p: 0, cf: 165},
        "flat-white": {n: "Flat White", c: 220, s: 17, f: 11, p: 12, cf: 130},
        "frappuccino": {n: "Frappuccino", c: 380, s: 54, f: 16, p: 5, cf: 95},
        "americano": {n: "Americano", c: 15, s: 0, f: 0, p: 1, cf: 225},
        "chai-tea-latte": {n: "Chai Tea Latte", c: 240, s: 42, f: 4.5, p: 8, cf: 95},
        "green-tea-latte": {n: "Green Tea Latte", c: 240, s: 33, f: 7, p: 9, cf: 80}
    };
    var ML = {
        "2-percent": {c: 0, s: 0, f: 0, p: 0},
        "whole": {c: 30, s: 0, f: 3, p: 0},
        "nonfat": {c: -20, s: 0, f: -3, p: 0},
        "almond": {c: -30, s: -5, f: -4, p: -3},
        "oat": {c: 40, s: 4, f: 3, p: -2},
        "coconut": {c: -10, s: -3, f: 3, p: -3},
        "soy": {c: 10, s: 2, f: 0, p: 2}
    };
    var SZ = {tall: 0.75, grande: 1, venti: 1.25};
    var ADD = {
        "whipped-cream": {c: 80, s: 2, f: 8, p: 0, cf: 0},
        "vanilla-syrup": {c: 20, s: 5, f: 0, p: 0, cf: 0},
        "caramel-syrup": {c: 20, s: 5, f: 0, p: 0, cf: 0},
        "mocha-sauce": {c: 25, s: 3, f: 1, p: 0, cf: 5}
    };

    var btn = document.getElementById('calcBtn');
    if (btn) btn.addEventListener('click', calculate);

    function calculate() {
        var drinkEl = document.getElementById('drink');
        var milkEl = document.getElementById('milk');
        var sizeEl = document.getElementById('size');
        if (!drinkEl || !milkEl || !sizeEl) return;

        var dk = D[drinkEl.value];
        var mk = ML[milkEl.value];
        var sz = SZ[sizeEl.value];
        if (!dk || !mk || !sz) return;

        var cal = dk.c + mk.c;
        var sug = dk.s + mk.s;
        var fat = dk.f + mk.f;
        var pro = dk.p + mk.p;
        var caf = dk.cf;

        for (var id in ADD) {
            var el = document.getElementById('check-' + id);
            if (el && el.checked) {
                cal += ADD[id].c;
                sug += ADD[id].s;
                fat += ADD[id].f;
                pro += ADD[id].p;
                caf += ADD[id].cf;
            }
        }

        cal = Math.round(cal * sz);
        sug = Math.round(sug * sz);
        fat = Math.round(fat * sz * 10) / 10;
        pro = Math.round(pro * sz * 10) / 10;
        caf = Math.round(caf * sz);

        var numEl = document.getElementById('resultNumber');
        if (numEl) numEl.textContent = cal;

        var verdictEl = document.getElementById('resultVerdict');
        if (verdictEl) verdictEl.textContent = sizeEl.selectedOptions[0].text + ' ' + dk.n;

        var sugarEl = document.getElementById('rSugar');
        if (sugarEl) sugarEl.textContent = sug + 'g (' + Math.round(sug / 4) + ' tsp)';
        var fatEl = document.getElementById('rFat');
        if (fatEl) fatEl.textContent = fat + 'g';
        var proEl = document.getElementById('rProtein');
        if (proEl) proEl.textContent = pro + 'g';
        var cafEl = document.getElementById('rCaffeine');
        if (cafEl) cafEl.textContent = caf + 'mg';

        // Coach
        var sugarTsp = Math.round(sug / 4);
        var coachEl = document.getElementById('coachCard');
        if (coachEl) {
            coachEl.innerHTML = '<div class="coach-text">Your <span class="hl">' + dk.n + '</span> has <span class="hl">' + cal + ' calories</span>.<br>' +
                'That\'s <span class="hl">' + sug + 'g of sugar</span> (' + sugarTsp + ' teaspoons).' +
                '<div class="coach-rule">' + caf + 'mg caffeine</div>' +
                '<div class="coach-advice">' +
                (cal > 300 ? '<em>To cut calories:</em> switch to nonfat milk (-20 cal), skip whipped cream (-80 cal), or try sugar-free syrup.' : '<em>Relatively light.</em> This drink is under 300 calories.') +
                '<br>' + (sug > 25 ? '<em>Sugar alert:</em> this drink has more sugar than a Snickers bar (27g).' : '') +
                '</div></div>';
        }

        // Share
        var shareText = 'My Starbucks order: ' + dk.n + '\n' + cal + ' cal | ' + sug + 'g sugar | ' + caf + 'mg caffeine\n\nTry it: healthcalculators.xyz/starbucks-nutrition-calculator';
        if (typeof updateShareButtons === 'function') updateShareButtons(shareText);

        if (typeof factoryReveal === 'function') factoryReveal();

        if (typeof hcTrackEvent === 'function') hcTrackEvent('calculator_complete', {calculator_name: 'Starbucks Nutrition Calculator', page_path: '/starbucks-nutrition-calculator'});
    }
})();
