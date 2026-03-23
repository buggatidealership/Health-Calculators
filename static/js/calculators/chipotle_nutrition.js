// Chipotle Nutrition Calculator — factory-compatible
(function() {
// Chipotle Nutrition Calculator

// Nutritional data for Chipotle ingredients
const nutritionData = {
    bases: [
        { name: "White Rice", calories: 210, protein: 4, carbs: 40, fat: 4, fiber: 1 },
        { name: "Brown Rice", calories: 210, protein: 4, carbs: 39, fat: 6, fiber: 2 },
        { name: "Cauliflower Rice", calories: 40, protein: 3, carbs: 7, fat: 1, fiber: 3 },
        { name: "Black Beans", calories: 130, protein: 8, carbs: 22, fat: 1, fiber: 7 },
        { name: "Pinto Beans", calories: 130, protein: 8, carbs: 21, fat: 1.5, fiber: 8 },
        { name: "Lettuce", calories: 5, protein: 0, carbs: 1, fat: 0, fiber: 1 }
    ],
    proteins: [
        { name: "Chicken", calories: 180, protein: 32, carbs: 0, fat: 7, fiber: 0 },
        { name: "Steak", calories: 150, protein: 21, carbs: 1, fat: 6, fiber: 0 },
        { name: "Barbacoa", calories: 170, protein: 24, carbs: 2, fat: 7, fiber: 1 },
        { name: "Carnitas", calories: 210, protein: 23, carbs: 0, fat: 12, fiber: 0 },
        { name: "Sofritas", calories: 150, protein: 8, carbs: 9, fat: 10, fiber: 3 },
        { name: "None", calories: 0, protein: 0, carbs: 0, fat: 0, fiber: 0 }
    ],
    toppings: [
        { name: "Fajita Veggies", calories: 20, protein: 1, carbs: 5, fat: 0, fiber: 1 },
        { name: "Queso Blanco", calories: 120, protein: 5, carbs: 2, fat: 9, fiber: 0 },
        { name: "Fresh Tomato Salsa", calories: 25, protein: 0, carbs: 4, fat: 0, fiber: 1 },
        { name: "Roasted Chili-Corn Salsa", calories: 80, protein: 3, carbs: 16, fat: 1.5, fiber: 3 },
        { name: "Tomatillo Green-Chili Salsa", calories: 15, protein: 0, carbs: 4, fat: 0, fiber: 1 },
        { name: "Tomatillo Red-Chili Salsa", calories: 30, protein: 0, carbs: 4, fat: 1, fiber: 1 },
        { name: "Sour Cream", calories: 110, protein: 2, carbs: 2, fat: 9, fiber: 0 },
        { name: "Cheese", calories: 110, protein: 6, carbs: 1, fat: 9, fiber: 0 },
        { name: "Guacamole", calories: 230, protein: 2, carbs: 8, fat: 22, fiber: 6 }
    ],
    extras: [
        { name: "Tortilla (Burrito)", calories: 320, protein: 8, carbs: 50, fat: 10, fiber: 3 },
        { name: "Tortilla (Taco)", calories: 90, protein: 2, carbs: 13, fat: 3, fiber: 1 },
        { name: "Chips", calories: 540, protein: 8, carbs: 73, fat: 25, fiber: 8 },
        { name: "Chips & Guacamole", calories: 770, protein: 10, carbs: 81, fat: 47, fiber: 14 },
        { name: "Chips & Queso", calories: 660, protein: 13, carbs: 75, fat: 34, fiber: 8 }
    ]
};

// State for selected ingredients
const state = {
    selectedBases: [],
    selectedProtein: "None",
    selectedToppings: [],
    selectedExtras: [],
    totalNutrition: {
        calories: 0,
        protein: 0,
        carbs: 0,
        fat: 0,
        fiber: 0
    },
    units: 'metric' // Default unit system
};

// Set the unit system (metric/imperial)
function setUnit(unit) {
    state.units = unit;
    
    if (unit === 'metric') {
        document.getElementById('metric-btn').classList.add('active');
        document.getElementById('imperial-btn').classList.remove('active');
    } else {
        document.getElementById('metric-btn').classList.remove('active');
        document.getElementById('imperial-btn').classList.add('active');
    }
    
    // Update display with new units
    updateNutritionDisplay();
}

// Initialize the UI
function initializeUI() {
    // Render base options
    renderIngredients('bases', nutritionData.bases, toggleBase);
    
    // Render protein options
    renderIngredients('proteins', nutritionData.proteins, selectProtein);
    
    // Render topping options
    renderIngredients('toppings', nutritionData.toppings, toggleTopping);
    
    // Render extras options
    renderIngredients('extras', nutritionData.extras, toggleExtra);
}

// Render ingredient buttons
function renderIngredients(categoryId, ingredients, clickHandler) {
    const container = document.getElementById(categoryId);
    if (!container) return;
    
    ingredients.forEach(ingredient => {
        const button = document.createElement('button');
        button.className = 'ingredient-button';
        button.setAttribute('data-name', ingredient.name);
        
        const nameSpan = document.createElement('span');
        nameSpan.textContent = ingredient.name;
        
        const caloriesSpan = document.createElement('span');
        caloriesSpan.className = 'ingredient-calories';
        caloriesSpan.textContent = `${ingredient.calories} cal`;
        
        button.appendChild(nameSpan);
        button.appendChild(caloriesSpan);
        button.addEventListener('click', () => clickHandler(ingredient.name, button));
        
        container.appendChild(button);
    });
}

// Toggle base selection
function toggleBase(name, button) {
    const index = state.selectedBases.indexOf(name);
    
    if (index === -1) {
        state.selectedBases.push(name);
        button.classList.add('selected');
    } else {
        state.selectedBases.splice(index, 1);
        button.classList.remove('selected');
    }
    
    calculateNutrition();
}

// Select protein (only one at a time)
function selectProtein(name, button) {
    // Deselect previous protein
    if (state.selectedProtein !== "None") {
        const prevButton = document.querySelector(`#proteins button[data-name="${state.selectedProtein}"]`);
        if (prevButton) {
            prevButton.classList.remove('selected');
        }
    }
    
    state.selectedProtein = name;
    button.classList.add('selected');
    calculateNutrition();
}

// Toggle topping selection
function toggleTopping(name, button) {
    const index = state.selectedToppings.indexOf(name);
    
    if (index === -1) {
        state.selectedToppings.push(name);
        button.classList.add('selected');
    } else {
        state.selectedToppings.splice(index, 1);
        button.classList.remove('selected');
    }
    
    calculateNutrition();
}

// Toggle extra selection
function toggleExtra(name, button) {
    const index = state.selectedExtras.indexOf(name);
    
    if (index === -1) {
        state.selectedExtras.push(name);
        button.classList.add('selected');
    } else {
        state.selectedExtras.splice(index, 1);
        button.classList.remove('selected');
    }
    
    calculateNutrition();
}

// Calculate nutrition totals when selections change
function calculateNutrition() {
    let totals = { calories: 0, protein: 0, carbs: 0, fat: 0, fiber: 0 };
    
    // Add base nutrition
    state.selectedBases.forEach(base => {
        const baseData = nutritionData.bases.find(item => item.name === base);
        if (baseData) {
            totals.calories += baseData.calories;
            totals.protein += baseData.protein;
            totals.carbs += baseData.carbs;
            totals.fat += baseData.fat;
            totals.fiber += baseData.fiber;
        }
    });
    
    // Add protein nutrition
    const proteinData = nutritionData.proteins.find(item => item.name === state.selectedProtein);
    if (proteinData) {
        totals.calories += proteinData.calories;
        totals.protein += proteinData.protein;
        totals.carbs += proteinData.carbs;
        totals.fat += proteinData.fat;
        totals.fiber += proteinData.fiber;
    }
    
    // Add toppings nutrition
    state.selectedToppings.forEach(topping => {
        const toppingData = nutritionData.toppings.find(item => item.name === topping);
        if (toppingData) {
            totals.calories += toppingData.calories;
            totals.protein += toppingData.protein;
            totals.carbs += toppingData.carbs;
            totals.fat += toppingData.fat;
            totals.fiber += toppingData.fiber;
        }
    });
    
    // Add extras nutrition
    state.selectedExtras.forEach(extra => {
        const extraData = nutritionData.extras.find(item => item.name === extra);
        if (extraData) {
            totals.calories += extraData.calories;
            totals.protein += extraData.protein;
            totals.carbs += extraData.carbs;
            totals.fat += extraData.fat;
            totals.fiber += extraData.fiber;
        }
    });
    
    // Update state
    state.totalNutrition = totals;
    
    // Update UI
    updateNutritionDisplay();
    
    // Also update the results section
    updateResultsSection();
}

// Update nutrition display
function updateNutritionDisplay() {
    const totalElements = {
        calories: document.getElementById('total-calories'),
        protein: document.getElementById('total-protein'),
        carbs: document.getElementById('total-carbs'),
        fat: document.getElementById('total-fat'),
        fiber: document.getElementById('total-fiber')
    };
    
    if (!totalElements.calories) return;
    
    totalElements.calories.textContent = state.totalNutrition.calories;
    
    if (state.units === 'imperial') {
        // Convert grams to ounces
        const ozConvert = 0.035274;
        totalElements.protein.textContent = `${(state.totalNutrition.protein * ozConvert).toFixed(1)}oz`;
        totalElements.carbs.textContent = `${(state.totalNutrition.carbs * ozConvert).toFixed(1)}oz`;
        totalElements.fat.textContent = `${(state.totalNutrition.fat * ozConvert).toFixed(1)}oz`;
        totalElements.fiber.textContent = `${(state.totalNutrition.fiber * ozConvert).toFixed(1)}oz`;
    } else {
        totalElements.protein.textContent = `${state.totalNutrition.protein}g`;
        totalElements.carbs.textContent = `${state.totalNutrition.carbs}g`;
        totalElements.fat.textContent = `${state.totalNutrition.fat}g`;
        totalElements.fiber.textContent = `${state.totalNutrition.fiber}g`;
    }
}

// Update results section
function updateResultsSection() {
    const resultsSection = document.getElementById('results');
    if (!resultsSection) return;
    
    // Make results visible
    if (typeof factoryReveal === 'function') { factoryReveal(); };
    
    // Update each result field
    document.getElementById('calories').textContent = `${state.totalNutrition.calories} kcal`;
    
    if (state.units === 'imperial') {
        // Convert grams to ounces
        const ozConvert = 0.035274;
        document.getElementById('protein').textContent = `${(state.totalNutrition.protein * ozConvert).toFixed(1)} oz`;
        document.getElementById('carbs').textContent = `${(state.totalNutrition.carbs * ozConvert).toFixed(1)} oz`;
        document.getElementById('fat').textContent = `${(state.totalNutrition.fat * ozConvert).toFixed(1)} oz`;
        document.getElementById('fiber').textContent = `${(state.totalNutrition.fiber * ozConvert).toFixed(1)} oz`;
    } else {
        document.getElementById('protein').textContent = `${state.totalNutrition.protein} g`;
        document.getElementById('carbs').textContent = `${state.totalNutrition.carbs} g`;
        document.getElementById('fat').textContent = `${state.totalNutrition.fat} g`;
        document.getElementById('fiber').textContent = `${state.totalNutrition.fiber} g`;
    }
}

// Initialize the calculator on page load
// DOMContentLoaded removed
{
    initializeUI();
    calculateNutrition();
});

// Bind calcBtn to show results
var calcBtn = document.getElementById('calcBtn');
if (calcBtn) calcBtn.addEventListener('click', function() {
    calculateNutrition();
    if (typeof factoryReveal === 'function') { factoryReveal(); }
});
})();
