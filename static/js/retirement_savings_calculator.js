function calculate() {
    // Get values
    const age = parseInt(document.getElementById('age').value);
    const retireAge = parseInt(document.getElementById('retireAge').value);
    const savings = parseFloat(document.getElementById('savings').value);
    const monthly = parseFloat(document.getElementById('contribution').value);

    // Validate inputs
    if (!age || !retireAge || !savings || !monthly || retireAge <= age) {
        alert("Please fill all fields correctly");
        return;
    }

    // Constants
    const annualReturn = 0.07; // 7% annual return
    const inflation = 0.03; // 3% inflation
    const withdrawalRate = 0.04; // 4% rule

    // Calculations
    const years = retireAge - age;
    const futureSavings = savings * Math.pow(1 + annualReturn, years) +
                       (monthly * 12) * ((Math.pow(1 + annualReturn, years) - 1)/annualReturn);

    // Spending breakdown
    const annualSpending = futureSavings * withdrawalRate;
    const monthlySpending = annualSpending / 12;
    const weeklySpending = annualSpending / 52;
    const dailySpending = annualSpending / 365;

    // Inflation adjustment
    const inflationFactor = Math.pow(1 + inflation, years);
    const realAnnualSpending = annualSpending / inflationFactor;

    // Formatting
    const format = num => num.toLocaleString('en-US', {
        maximumFractionDigits: 0,
        style: 'decimal'
    });

    // Populate results
    document.getElementById('total-savings').textContent = "$" + format(futureSavings);
    document.getElementById('years-to-retire').textContent = years + " years of compounding growth";
    document.getElementById('annual-spending').textContent = "$" + format(annualSpending);
    document.getElementById('monthly-spending').textContent = "$" + format(monthlySpending);
    document.getElementById('weekly-spending').textContent = "$" + format(weeklySpending);
    document.getElementById('daily-spending').textContent = "$" + format(dailySpending);
    document.getElementById('detail-years').textContent = years + " years";
    document.getElementById('detail-current').textContent = "$" + format(savings);
    document.getElementById('detail-contributions').textContent = "$" + format(monthly * 12 * years);
    document.getElementById('detail-growth').textContent = "$" + format(futureSavings - savings - (monthly * 12 * years));
    document.getElementById('real-annual').textContent = "$" + format(realAnnualSpending) + "/year";

    document.getElementById('results').style.display = 'block';

    // Scroll to results
    document.getElementById('results').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}
