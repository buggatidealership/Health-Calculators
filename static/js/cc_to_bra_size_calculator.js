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
    
    // Band-adjusted cc per cup size (smaller frames need less volume per cup)
    const bandNum = parseInt(bandSize);
    let ccPerCup;
    if (bandNum <= 30) ccPerCup = 150;
    else if (bandNum <= 32) ccPerCup = 160;
    else if (bandNum <= 34) ccPerCup = 175;
    else if (bandNum <= 36) ccPerCup = 185;
    else if (bandNum <= 38) ccPerCup = 195;
    else ccPerCup = 200;

    // Populate comparison display
    document.getElementById('current-size-display').textContent = bandSize + currentCup;
    document.getElementById('new-size-display').textContent = bandSize + newCupSize;

    // Populate result cards
    document.getElementById('volume-added').textContent = cc + ' cc';
    document.getElementById('cup-increase').textContent = '+' + cupIncrease.toFixed(1) + ' cups';
    document.getElementById('cc-per-cup').textContent = '~' + ccPerCup;

    document.getElementById('result').style.display = 'block';
}