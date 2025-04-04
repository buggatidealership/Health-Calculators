function calculate() {
    // Clear previous results
    document.getElementById('output').innerHTML = '';

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

    // Build results
    const results = `
        <h3>At Retirement:</h3>
        <p>Total Savings: <strong>$${format(futureSavings)}</strong></p>
       
        <div class="spending-breakdown">
            <h4>Safe Withdrawal Amounts (4% Rule):</h4>
            <p>Yearly: $${format(annualSpending)}</p>
            <p>Monthly: $${format(monthlySpending)}</p>
            <p>Weekly: $${format(weeklySpending)}</p>
            <p>Daily: $${format(dailySpending)}</p>
        </div>

        <div class="note">
            <p>Adjusted for 3% inflation:<br>
            <strong>$${format(realAnnualSpending)}</strong> annual spending power in today's dollars</p>
        </div>
    `;

    document.getElementById('output').innerHTML = results;
    document.getElementById('results').style.display = 'block';
}
