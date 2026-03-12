// Subway Nutrition Calculator
// Data sourced from Subway's official nutrition guide (2024)

const subwayData = {
    sizes: [
        { name: '6"', multiplier: 1, label: '6-inch' },
        { name: 'Footlong', multiplier: 2, label: 'Footlong (12-inch)' }
    ],
    breads: [
        { name: '9-Grain Wheat', calories: 210, protein: 7, carbs: 39, fat: 3, fiber: 3, sodium: 350 },
        { name: 'Italian White', calories: 200, protein: 7, carbs: 38, fat: 2.5, fiber: 1, sodium: 300 },
        { name: 'Italian Herbs & Cheese', calories: 250, protein: 9, carbs: 39, fat: 6, fiber: 2, sodium: 490 },
        { name: 'Hearty Multigrain', calories: 210, protein: 8, carbs: 40, fat: 3, fiber: 4, sodium: 330 },
        { name: 'Flatbread', calories: 220, protein: 7, carbs: 38, fat: 5, fiber: 2, sodium: 400 },
        { name: 'Wrap', calories: 300, protein: 9, carbs: 51, fat: 8, fiber: 3, sodium: 570 }
    ],
    proteins: [
        { name: 'Oven Roasted Turkey', calories: 60, protein: 10, carbs: 2, fat: 1, fiber: 0, sodium: 420 },
        { name: 'Black Forest Ham', calories: 60, protein: 9, carbs: 3, fat: 1.5, fiber: 0, sodium: 480 },
        { name: 'Rotisserie Chicken', calories: 100, protein: 17, carbs: 3, fat: 2, fiber: 0, sodium: 380 },
        { name: 'Chicken Teriyaki', calories: 110, protein: 18, carbs: 9, fat: 2, fiber: 0, sodium: 610 },
        { name: 'Steak', calories: 130, protein: 19, carbs: 4, fat: 4, fiber: 0, sodium: 430 },
        { name: 'Subway Club (turkey, ham, roast beef)', calories: 100, protein: 13, carbs: 3, fat: 2, fiber: 0, sodium: 500 },
        { name: 'Tuna (with mayo)', calories: 200, protein: 9, carbs: 1, fat: 17, fiber: 0, sodium: 310 },
        { name: 'Cold Cut Combo', calories: 100, protein: 9, carbs: 2, fat: 5, fiber: 0, sodium: 600 },
        { name: 'Italian B.M.T.', calories: 150, protein: 10, carbs: 3, fat: 11, fiber: 0, sodium: 680 },
        { name: 'Spicy Italian', calories: 190, protein: 11, carbs: 2, fat: 16, fiber: 0, sodium: 760 },
        { name: 'Meatball Marinara', calories: 240, protein: 13, carbs: 26, fat: 10, fiber: 2, sodium: 640 },
        { name: 'Veggie Delite (no meat)', calories: 0, protein: 0, carbs: 0, fat: 0, fiber: 0, sodium: 0 }
    ],
    cheeses: [
        { name: 'None', calories: 0, protein: 0, carbs: 0, fat: 0, sodium: 0 },
        { name: 'American', calories: 40, protein: 2, carbs: 1, fat: 3, sodium: 200 },
        { name: 'Provolone', calories: 50, protein: 4, carbs: 0, fat: 4, sodium: 115 },
        { name: 'Pepper Jack', calories: 50, protein: 3, carbs: 0, fat: 4, sodium: 135 },
        { name: 'Swiss', calories: 50, protein: 4, carbs: 0, fat: 4, sodium: 30 },
        { name: 'Cheddar', calories: 50, protein: 3, carbs: 0, fat: 4, sodium: 90 },
        { name: 'Shredded Mozzarella', calories: 45, protein: 4, carbs: 0, fat: 3.5, sodium: 85 }
    ],
    veggies: [
        { name: 'Lettuce', calories: 5, protein: 0, carbs: 1, fat: 0, sodium: 0 },
        { name: 'Tomato', calories: 10, protein: 0, carbs: 2, fat: 0, sodium: 5 },
        { name: 'Cucumber', calories: 5, protein: 0, carbs: 1, fat: 0, sodium: 0 },
        { name: 'Green Bell Pepper', calories: 5, protein: 0, carbs: 1, fat: 0, sodium: 0 },
        { name: 'Red Onion', calories: 10, protein: 0, carbs: 2, fat: 0, sodium: 0 },
        { name: 'Spinach', calories: 5, protein: 0, carbs: 0, fat: 0, sodium: 5 },
        { name: 'Pickles', calories: 5, protein: 0, carbs: 1, fat: 0, sodium: 115 },
        { name: 'Jalapeños', calories: 5, protein: 0, carbs: 1, fat: 0, sodium: 200 },
        { name: 'Black Olives', calories: 15, protein: 0, carbs: 1, fat: 1.5, sodium: 115 },
        { name: 'Banana Peppers', calories: 5, protein: 0, carbs: 1, fat: 0, sodium: 180 },
        { name: 'Avocado', calories: 60, protein: 1, carbs: 3, fat: 5, sodium: 70 }
    ],
    sauces: [
        { name: 'Mayonnaise', calories: 110, protein: 0, carbs: 0, fat: 12, sodium: 80 },
        { name: 'Light Mayonnaise', calories: 50, protein: 0, carbs: 1, fat: 5, sodium: 100 },
        { name: 'Ranch', calories: 110, protein: 0, carbs: 2, fat: 11, sodium: 200 },
        { name: 'Chipotle Southwest', calories: 100, protein: 0, carbs: 3, fat: 10, sodium: 210 },
        { name: 'Sweet Onion', calories: 40, protein: 0, carbs: 9, fat: 0, sodium: 65 },
        { name: 'Honey Mustard', calories: 30, protein: 0, carbs: 7, fat: 0, sodium: 125 },
        { name: 'Yellow Mustard', calories: 5, protein: 0, carbs: 0, fat: 0, sodium: 55 },
        { name: 'Olive Oil', calories: 45, protein: 0, carbs: 0, fat: 5, sodium: 0 },
        { name: 'Red Wine Vinegar', calories: 0, protein: 0, carbs: 0, fat: 0, sodium: 0 },
        { name: 'Sriracha', calories: 15, protein: 0, carbs: 3, fat: 0, sodium: 200 }
    ],
    extras: [
        { name: 'Bacon (2 strips)', calories: 45, protein: 3, carbs: 0, fat: 3.5, sodium: 190 },
        { name: 'Extra Cheese', calories: 50, protein: 3, carbs: 0, fat: 4, sodium: 120 }
    ]
};

// Calculator state
const subwayState = {
    size: 1, // multiplier (1 = 6", 2 = footlong)
    selectedBread: null,
    selectedProtein: null,
    selectedCheese: null,
    selectedVeggies: [],
    selectedSauces: [],
    selectedExtras: []
};

function initSubwayCalculator() {
    renderSizeButtons();
    renderSingleSelect('bread-options', subwayData.breads, 'bread');
    renderSingleSelect('protein-options', subwayData.proteins, 'protein');
    renderSingleSelect('cheese-options', subwayData.cheeses, 'cheese');
    renderMultiSelect('veggie-options', subwayData.veggies, 'veggie');
    renderMultiSelect('sauce-options', subwayData.sauces, 'sauce');
    renderMultiSelect('extra-options', subwayData.extras, 'extra');
    updateDisplay();
}

function renderSizeButtons() {
    const container = document.getElementById('size-options');
    if (!container) return;
    subwayData.sizes.forEach(size => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'ingredient-button' + (size.multiplier === 1 ? ' selected' : '');
        btn.setAttribute('data-multiplier', size.multiplier);
        btn.innerHTML = `<span>${size.name}</span><span class="ingredient-calories">${size.label}</span>`;
        btn.addEventListener('click', () => {
            document.querySelectorAll('#size-options .ingredient-button').forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
            subwayState.size = size.multiplier;
            updateDisplay();
        });
        container.appendChild(btn);
    });
    subwayState.size = 1;
}

function renderSingleSelect(containerId, items, category) {
    const container = document.getElementById(containerId);
    if (!container) return;
    items.forEach((item, idx) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'ingredient-button';
        btn.setAttribute('data-index', idx);
        btn.innerHTML = `<span>${item.name}</span><span class="ingredient-calories">${item.calories} cal</span>`;
        btn.addEventListener('click', () => {
            container.querySelectorAll('.ingredient-button').forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
            if (category === 'bread') subwayState.selectedBread = item;
            else if (category === 'protein') subwayState.selectedProtein = item;
            else if (category === 'cheese') subwayState.selectedCheese = item;
            updateDisplay();
        });
        container.appendChild(btn);
    });
}

function renderMultiSelect(containerId, items, category) {
    const container = document.getElementById(containerId);
    if (!container) return;
    items.forEach((item, idx) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'ingredient-button';
        btn.setAttribute('data-index', idx);
        btn.innerHTML = `<span>${item.name}</span><span class="ingredient-calories">${item.calories} cal</span>`;
        btn.addEventListener('click', () => {
            btn.classList.toggle('selected');
            let arr;
            if (category === 'veggie') arr = subwayState.selectedVeggies;
            else if (category === 'sauce') arr = subwayState.selectedSauces;
            else if (category === 'extra') arr = subwayState.selectedExtras;
            const pos = arr.indexOf(item);
            if (pos === -1) arr.push(item);
            else arr.splice(pos, 1);
            updateDisplay();
        });
        container.appendChild(btn);
    });
}

function calcTotals() {
    const m = subwayState.size; // size multiplier
    let totals = { calories: 0, protein: 0, carbs: 0, fat: 0, fiber: 0, sodium: 0 };

    // Bread and protein scale with size; cheese, veggies, sauces, extras do NOT scale (condiments stay same)
    const addScaled = (item) => {
        if (!item) return;
        totals.calories += item.calories * m;
        totals.protein += item.protein * m;
        totals.carbs += item.carbs * m;
        totals.fat += item.fat * m;
        totals.fiber += (item.fiber || 0) * m;
        totals.sodium += (item.sodium || 0) * m;
    };
    const addFixed = (item) => {
        if (!item) return;
        totals.calories += item.calories;
        totals.protein += item.protein;
        totals.carbs += item.carbs;
        totals.fat += item.fat;
        totals.fiber += (item.fiber || 0);
        totals.sodium += (item.sodium || 0);
    };

    addScaled(subwayState.selectedBread);
    addScaled(subwayState.selectedProtein);
    addFixed(subwayState.selectedCheese);
    subwayState.selectedVeggies.forEach(addFixed);
    subwayState.selectedSauces.forEach(addFixed);
    subwayState.selectedExtras.forEach(addFixed);

    return totals;
}

function updateDisplay() {
    const totals = calcTotals();
    const fields = ['calories', 'protein', 'carbs', 'fat', 'fiber', 'sodium'];
    const units = { calories: ' kcal', protein: 'g', carbs: 'g', fat: 'g', fiber: 'g', sodium: 'mg' };

    fields.forEach(f => {
        const el = document.getElementById('total-' + f);
        if (el) el.textContent = Math.round(totals[f]) + (f === 'calories' ? '' : units[f]);
    });

    // Show results panel once at least bread or protein is selected
    const panel = document.getElementById('results-panel');
    if (panel) {
        const hasSelection = subwayState.selectedBread || subwayState.selectedProtein;
        panel.style.display = hasSelection ? 'block' : 'none';
        if (hasSelection) {
            const detailFields = ['calories', 'protein', 'carbs', 'fat', 'fiber', 'sodium'];
            detailFields.forEach(f => {
                const el = document.getElementById('result-' + f);
                if (el) el.textContent = Math.round(totals[f]) + units[f];
            });
        }
    }

    // Content loop hook
    if (typeof showNextSteps === 'function') showNextSteps('subway', {});
}

document.addEventListener('DOMContentLoaded', initSubwayCalculator);
