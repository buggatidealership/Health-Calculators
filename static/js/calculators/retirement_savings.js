// Retirement Savings Calculator — calculation logic
(function() {
    var fmt = function(n) { return n.toLocaleString('en-US', {maximumFractionDigits: 0}); };

    document.getElementById('calcBtn').addEventListener('click', function() {
        var age = parseInt(document.getElementById('age').value);
        var ra = parseInt(document.getElementById('retireAge').value);
        var sav = parseFloat(document.getElementById('savings').value);
        var mo = parseFloat(document.getElementById('monthly').value);
        if (!age || !ra || ra <= age || isNaN(sav) || isNaN(mo)) return;

        var r = 0.07, inf = 0.03, wr = 0.04, yrs = ra - age;
        var future = sav * Math.pow(1 + r, yrs) + (mo * 12) * ((Math.pow(1 + r, yrs) - 1) / r);
        var annual = future * wr, monthly = annual / 12;
        var totalContrib = sav + mo * 12 * yrs, growth = future - totalContrib;
        var realAnnual = annual / Math.pow(1 + inf, yrs);

        // Update results
        document.getElementById('resultNumber').textContent = '$' + fmt(future);
        document.getElementById('resultVerdict').textContent = '$' + fmt(monthly) + '/month in retirement (4% rule)';
        document.getElementById('yearsGrowth').textContent = yrs + ' years';
        document.getElementById('annualSpend').textContent = '$' + fmt(annual);
        document.getElementById('monthlySpend').textContent = '$' + fmt(monthly);
        document.getElementById('totalContrib').textContent = '$' + fmt(totalContrib);
        document.getElementById('investGrowth').textContent = '$' + fmt(growth);

        // Coach narrative
        document.getElementById('coachCard').innerHTML =
            '<div class="coach-text">Starting at age <span class="hl">' + age + '</span>, retiring at <span class="hl">' + ra + '</span>.<br>' +
            yrs + ' years of compound growth at 7%.<br>You\'ll have <span class="hl">$' + fmt(future) + '</span>.' +
            '<div class="coach-rule">The 4% rule gives you $' + fmt(monthly) + '/month</div>' +
            '<div class="coach-advice">In today\'s dollars (3% inflation adjusted): <em>$' + fmt(realAnnual) + '/year</em>.<br>' +
            'Your contributions: <em>$' + fmt(mo * 12 * yrs) + '</em>. Investment growth did the rest: <em>$' + fmt(growth) + '</em>.</div></div>';

        // Share
        var shareText = 'Retirement projection:\n$' + fmt(future) + ' by age ' + ra +
            '\n= $' + fmt(monthly) + '/month (4% rule)\n\n$' + fmt(mo) + '/month x ' + yrs +
            ' years at 7%\n\nTry it: healthcalculators.xyz/retirement-savings-calculator';
        updateShareButtons(shareText);

        // Reveal hidden sections
        document.querySelectorAll('.hidden-section').forEach(function(el) { el.classList.remove('hidden-section'); });
        document.getElementById('result-section').scrollIntoView({behavior: 'smooth'});
    });
})();
