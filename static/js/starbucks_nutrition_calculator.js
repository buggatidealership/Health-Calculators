// Starbucks Nutrition Calculator

// Global variables
let currentUnit = 'metric';

// Base drink options (using Grande size as the baseline)
const baseOptions = {
    "caffe-latte": { name: "Caffè Latte", calories: 190, sugar: 18, fat: 7, protein: 13, caffeine: 150 },
    "cappuccino": { name: "Cappuccino", calories: 140, sugar: 10, fat: 5, protein: 9, caffeine: 150 },
    "caffe-mocha": { name: "Caffè Mocha", calories: 360, sugar: 35, fat: 15, protein: 13, caffeine: 175 },
    "caramel-macchiato": { name: "Caramel Macchiato", calories: 250, sugar: 33, fat: 7, protein: 10, caffeine: 150 },
    "cold-brew": { name: "Cold Brew", calories: 5, sugar: 0, fat: 0, protein: 0, caffeine: 205 },
    "iced-coffee": { name: "Iced Coffee", calories: 5, sugar: 0, fat: 0, protein: 0, caffeine: 165 },
    "flat-white": { name: "Flat White", calories: 220, sugar: 17, fat: 11, protein: 12, caffeine: 130 },
    "frappuccino": { name: "Frappuccino (Coffee)", calories: 380, sugar: 54, fat: 16, protein: 5, caffeine: 95 },
    "americano": { name: "Americano", calories: 15, sugar: 0, fat: 0, protein: 1, caffeine: 225 },
    "chai-tea-latte": { name: "Chai Tea Latte", calories: 240, sugar: 42, fat: 4.5, protein: 8, caffeine: 95 },
    "green-tea-latte": { name: "Green Tea Latte", calories: 240, sugar: 33, fat: 7, protein: 9, caffeine: 80 }
};

// Milk options (adjustments to apply to the base drink)
const milkOptions = {
    "2-percent": { name: "2% Milk (Default)", calories: 0, sugar: 0, fat: 0, protein: 0 },
    "whole": { name: "Whole Milk", calories: 30, sugar: 0, fat: 3, protein: 0 },
    "nonfat": { name: "Nonfat Milk", calories: -20, sugar: 0, fat: -3, protein: 0 },
    "almond": { name: "Almond Milk", calories: -30, sugar: -5, fat: -4, protein: -3 },
    "oat": { name: "Oat Milk", calories: 40, sugar: 4, fat: 3, protein: -2 },
    "coconut": { name: "Coconut Milk", calories: -10, sugar: -3, fat: 3, protein: -3 },
    "soy": { name: "Soy Milk", calories: 10, sugar: 2, fat: 0, protein: 2 }
};

// Size options (multipliers to apply to the base drink)
const sizeOptions = {
    "tall": { name: "Tall (12 oz)", factor: 0.75 },
    "grande": { name: "Grande (16 oz)", factor: 1.0 },
    "venti": { name: "Venti (20 oz)", factor: 1.25 },
    "trenta": { name: "Trenta (30 oz - Cold Only)", factor: 1.75 }
};

// Syrup options (values to add per pump)
const syrupOptions = {
    "classic-syrup": { name: "Classic Syrup", calories: 20, sugar: 5, fat: 0, protein: 0, caffeine: 0 },
    "vanilla-syrup": { name: "Vanilla Syrup", calories: 20, sugar: 5, fat: 0, protein: 0, caffeine: 0 },
    "caramel-syrup": { name: "Caramel Syrup", calories: 20, sugar: 5, fat: 0, protein: 0, caffeine: 0 },
    "hazelnut-syrup": { name: "Hazelnut Syrup", calories: 20, sugar: 5, fat: 0, protein: 0, caffeine: 0 },
    "cinnamon-dolce": { name: "Cinnamon Dolce Syrup", calories: 20, sugar: 5, fat: 0, protein: 0, caffeine: 0 },
    "sugar-free-vanilla": { name: "Sugar Free Vanilla", calories: 0, sugar: 0, fat: 0, protein: 0, caffeine: 0 },
    "mocha-sauce": { name: "Mocha Sauce", calories: 25, sugar: 3, fat: 1, protein: 0, caffeine: 5 },
    "white-chocolate": { name: "White Chocolate Mocha", calories: 60, sugar: 8, fat: 3, protein: 1, caffeine: 0 }
};

// Topping options (values to add per serving)
const toppingOptions = {
    "whipped-cream": { name: "Whipped Cream", calories: 80, sugar: 2, fat: 8, protein: 0, caffeine: 0 },
    "caramel-drizzle": { name: "Caramel Drizzle", calories: 15, sugar: 2, fat: 0, protein: 0, caffeine: 0 },
    "chocolate-drizzle": { name: "Chocolate Drizzle", calories: 15, sugar: 2, fat: 1, protein: 0, caffeine: 0 },
    "cinnamon-powder": { name: "Cinnamon Powder", calories: 0, sugar: 0, fat: 0, protein: 0, caffeine: 0 },
    "cocoa-powder": { name: "Cocoa Powder", calories: 5, sugar: 0, fat: 0, protein: 0, caffeine: 0 },
    "vanilla-bean-powder": { name: "Vanilla Bean Powder", calories: 10, sugar: 2, fat: 0, protein: 0, caffeine: 0 }
};

// Toggle between measurement units
function setUnit(unitSystem) {
    currentUnit = unitSystem;
    
    // Update UI
    if (unitSystem === 'metric') {
        document.getElementById('metric-btn').classList.add('active');
        document.getElementById('imperial-btn').classList.remove('active');
    } else {
        document.getElementById('metric-btn').classList.remove('active');
        document.getElementById('imperial-btn').classList.add('active');
    }
}

// Get selected syrups
function getSelectedSyrups() {
    const selectedSyrups = [];
    
    for (const syrupId in syrupOptions) {
        const checkbox = document.getElementById(syrupId);
        if (checkbox && checkbox.checked) {
            selectedSyrups.push(syrupOptions[syrupId]);
        }
    }
    
    return selectedSyrups;
}

// Get selected toppings
function getSelectedToppings() {
    const selectedToppings = [];
    
    for (const toppingId in toppingOptions) {
        const checkbox = document.getElementById(toppingId);
        if (checkbox && checkbox.checked) {
            selectedToppings.push(toppingOptions[toppingId]);
        }
    }
    
    return selectedToppings;
}

// Generate drink summary
function generateDrinkSummary(baseDrink, milkType, size, selectedSyrups, selectedToppings, extraPumps) {
    let summary = `${size.name} ${baseDrink.name} with ${milkType.name}`;
    
    if (selectedSyrups.length > 0) {
        const syrupNames = selectedSyrups.map(syrup => syrup.name);
        summary += `, ${syrupNames.join(', ')}`;
    }
    
    if (extraPumps > 0) {
        summary += `, +${extraPumps} extra pump${extraPumps !== 1 ? 's' : ''}`;
    }
    
    if (selectedToppings.length > 0) {
        const toppingNames = selectedToppings.map(topping => topping.name);
        summary += `, topped with ${toppingNames.join(', ')}`;
    }
    
    return summary;
}

// Calculate nutrition based on selections
function calculate() {
    console.log("Calculating nutrition facts...");
    
    // Get selected values
    const baseDrinkId = document.getElementById('base-drink').value;
    const milkTypeId = document.getElementById('milk-type').value;
    const sizeId = document.getElementById('size').value;
    const extraPumps = parseInt(document.getElementById('extra-pumps').value) || 0;
    
    const baseDrink = baseOptions[baseDrinkId];
    const milkType = milkOptions[milkTypeId];
    const size = sizeOptions[sizeId];
    const selectedSyrups = getSelectedSyrups();
    const selectedToppings = getSelectedToppings();
    
    // Start with base drink values
    let totalCalories = baseDrink.calories;
    let totalSugar = baseDrink.sugar;
    let totalFat = baseDrink.fat;
    let totalProtein = baseDrink.protein;
    let totalCaffeine = baseDrink.caffeine;
    
    // Add milk adjustments
    totalCalories += milkType.calories;
    totalSugar += milkType.sugar;
    totalFat += milkType.fat;
    totalProtein += milkType.protein;
    
    // Add syrups
    selectedSyrups.forEach(syrup => {
        totalCalories += syrup.calories;
        totalSugar += syrup.sugar;
        totalFat += syrup.fat;
        totalProtein += syrup.protein;
        totalCaffeine += syrup.caffeine;
    });
    
    // Add extra syrup pumps
    totalCalories += extraPumps * 20;
    totalSugar += extraPumps * 5;
    
    // Add toppings
    selectedToppings.forEach(topping => {
        totalCalories += topping.calories;
        totalSugar += topping.sugar;
        totalFat += topping.fat;
        totalProtein += topping.protein;
        totalCaffeine += topping.caffeine;
    });
    
    // Adjust for size
    totalCalories = Math.round(totalCalories * size.factor);
    totalSugar = Math.round(totalSugar * size.factor);
    totalFat = Math.round(totalFat * size.factor * 10) / 10;
    totalProtein = Math.round(totalProtein * size.factor * 10) / 10;
    totalCaffeine = Math.round(totalCaffeine * size.factor);
    
    // Format and display the results
    document.getElementById('calories').textContent = totalCalories;
    document.getElementById('sugar').textContent = totalSugar;
    document.getElementById('fat').textContent = totalFat;
    document.getElementById('protein').textContent = totalProtein;
    document.getElementById('caffeine').textContent = totalCaffeine;
    
    // Generate and display drink summary
    const summary = generateDrinkSummary(baseDrink, milkType, size, selectedSyrups, selectedToppings, extraPumps);
    document.getElementById('drink-summary').textContent = summary;
    
    // Show results
    document.getElementById('results').style.display = 'block';

    // Scroll to results
    document.getElementById('results').scrollIntoView({ behavior: 'smooth' });

    // Content loop
    if (typeof showNextSteps === 'function') showNextSteps('starbucks', collectUserData());
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Set default unit to metric
    setUnit('metric');
    
    // Add event listener to calculate button
    document.getElementById('calculate-btn').addEventListener('click', calculate);
});