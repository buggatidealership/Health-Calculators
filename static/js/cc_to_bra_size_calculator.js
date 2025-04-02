// Calculate button click handler
document.getElementById('calculate-btn').addEventListener('click', calculate);

function calculate() {
    // Get input values
    const cc = parseFloat(document.getElementById('cc').value);
    const bandSize = document.getElementById('band').value;
    const currentCup = document.getElementById('current-cup').value;
    
    // Validate inputs
    if (isNaN(cc) || cc < 100 || cc > 1000) {
        alert("Please enter a valid CC volume between 100 and 1000");
        return;
    }
    
    if (!bandSize) {
        alert("Please select your current band size");
        return;
    }
    
    // Calculate cup size increase based on research
    // Based on studies showing approximately 150-200cc per cup size increase
    const cupSizes = ["AA", "A", "B", "C", "D", "DD", "DDD", "G", "H", "I", "J"];
    
    // Find current cup index
    let currentIndex = cupSizes.indexOf(currentCup);
    if (currentIndex === -1) currentIndex = 2; // default to B
    
    // Calculate cup size increase (approximately 175cc per cup)
    const cupIncrease = Math.round((cc / 175) * 2) / 2; // rounds to nearest 0.5
    
    // Calculate new cup index
    let newIndex = currentIndex + cupIncrease;
    newIndex = Math.min(newIndex, cupSizes.length - 1); // don't exceed array bounds
    
    // Get full and half sizes
    const fullCups = Math.floor(newIndex);
    const remainder = newIndex - fullCups;
    
    let newCupSize;
    if (remainder < 0.25) {
        newCupSize = cupSizes[fullCups];
    } else if (remainder < 0.75) {
        newCupSize = cupSizes[fullCups] + "½";
        // For sizes where half sizes aren't standard, round up
        if (cupSizes[fullCups] === "DD" || cupSizes[fullCups] === "DDD") {
            newCupSize = cupSizes[fullCups + 1];
        }
    } else {
        newCupSize = cupSizes[fullCups + 1];
    }
    
    // Display result
    document.getElementById('size-result').textContent =
        `Estimated new bra size: ${bandSize}${newCupSize}`;
    
    // Additional volume info
    document.getElementById('volume-info').innerHTML = `
        <p>${cc}cc is approximately a ${cupIncrease.toFixed(1)} cup size increase from your current size.</p>
        <p><em>Note: This is an estimate. Actual results may vary based on your anatomy.</em></p>
    `;
    
    document.getElementById('result').style.display = 'block';
}