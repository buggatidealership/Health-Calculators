/**
 * Meal Planner JS
 * Generates personalized meal plan suggestions based on macronutrient targets
 */

// Food database with nutritional information
const foodDatabase = {
  // Protein-rich foods
  proteins: [
    { name: "Chicken Breast", category: "Lean Meat", protein: 31, carbs: 0, fat: 3.6, info: "Skinless, boneless", unit: "g", portion: 100 },
    { name: "Salmon", category: "Fatty Fish", protein: 25, carbs: 0, fat: 13, info: "Wild-caught fillet", unit: "g", portion: 100 },
    { name: "Greek Yogurt", category: "Dairy", protein: 10, carbs: 4, fat: 0.4, info: "Plain, non-fat", unit: "g", portion: 100 },
    { name: "Eggs", category: "Poultry", protein: 6, carbs: 0.6, fat: 5, info: "Whole, large", unit: "egg", portion: 1 },
    { name: "Tofu", category: "Plant Protein", protein: 8, carbs: 2, fat: 4, info: "Firm", unit: "g", portion: 100 },
    { name: "Lean Beef", category: "Red Meat", protein: 26, carbs: 0, fat: 15, info: "90% lean ground", unit: "g", portion: 100 },
    { name: "Turkey Breast", category: "Lean Meat", protein: 29, carbs: 0, fat: 1, info: "Without skin", unit: "g", portion: 100 },
    { name: "Cottage Cheese", category: "Dairy", protein: 11, carbs: 3.4, fat: 4.3, info: "2% fat", unit: "g", portion: 100 },
    { name: "Whey Protein", category: "Supplement", protein: 24, carbs: 2, fat: 1, info: "Isolate", unit: "scoop", portion: 1 },
    { name: "Tuna", category: "Lean Fish", protein: 30, carbs: 0, fat: 1, info: "Canned in water", unit: "g", portion: 100 },
    { name: "Lentils", category: "Legume", protein: 9, carbs: 20, fat: 0.4, info: "Cooked", unit: "g", portion: 100 },
    { name: "Shrimp", category: "Seafood", protein: 24, carbs: 0, fat: 1.7, info: "Cooked", unit: "g", portion: 100 },
    { name: "Tempeh", category: "Plant Protein", protein: 19, carbs: 9, fat: 11, info: "Fermented soy", unit: "g", portion: 100 }
  ],
  
  // Carbohydrate-rich foods
  carbs: [
    { name: "Brown Rice", category: "Whole Grain", protein: 2.6, carbs: 23, fat: 0.9, info: "Cooked", unit: "g", portion: 100 },
    { name: "Sweet Potato", category: "Starchy Vegetable", protein: 1.6, carbs: 20, fat: 0.1, info: "Baked", unit: "g", portion: 100 },
    { name: "Quinoa", category: "Pseudo Grain", protein: 4.4, carbs: 21, fat: 1.9, info: "Cooked", unit: "g", portion: 100 },
    { name: "Oatmeal", category: "Whole Grain", protein: 2.4, carbs: 12, fat: 1.4, info: "Steel cut, cooked", unit: "g", portion: 100 },
    { name: "Banana", category: "Fruit", protein: 1.1, carbs: 23, fat: 0.3, info: "Medium size", unit: "banana", portion: 1 },
    { name: "Whole Grain Bread", category: "Grain", protein: 4, carbs: 15, fat: 1, info: "Per slice", unit: "slice", portion: 1 },
    { name: "Pasta", category: "Grain", protein: 5, carbs: 25, fat: 1, info: "Whole wheat, cooked", unit: "g", portion: 100 },
    { name: "Black Beans", category: "Legume", protein: 8.9, carbs: 24, fat: 0.5, info: "Cooked", unit: "g", portion: 100 },
    { name: "Blueberries", category: "Fruit", protein: 0.7, carbs: 14, fat: 0.3, info: "Fresh", unit: "g", portion: 100 },
    { name: "Potatoes", category: "Starchy Vegetable", protein: 2, carbs: 17, fat: 0.1, info: "Boiled", unit: "g", portion: 100 },
    { name: "Chickpeas", category: "Legume", protein: 8.9, carbs: 27, fat: 2.6, info: "Cooked", unit: "g", portion: 100 },
    { name: "Apple", category: "Fruit", protein: 0.3, carbs: 14, fat: 0.2, info: "Medium with skin", unit: "apple", portion: 1 },
    { name: "Corn", category: "Starchy Vegetable", protein: 3.2, carbs: 19, fat: 1.4, info: "Cooked", unit: "g", portion: 100 }
  ],
  
  // Fat-rich foods
  fats: [
    { name: "Avocado", category: "Fruit", protein: 2, carbs: 9, fat: 15, info: "Half medium", unit: "avocado", portion: 0.5 },
    { name: "Olive Oil", category: "Oil", protein: 0, carbs: 0, fat: 14, info: "Extra virgin", unit: "tbsp", portion: 1 },
    { name: "Almonds", category: "Nuts", protein: 6, carbs: 6, fat: 14, info: "Whole, raw", unit: "g", portion: 28 },
    { name: "Chia Seeds", category: "Seeds", protein: 4.7, carbs: 8.3, fat: 9, info: "Whole", unit: "tbsp", portion: 1 },
    { name: "Peanut Butter", category: "Nut Butter", protein: 4, carbs: 3, fat: 8, info: "Natural, no sugar added", unit: "tbsp", portion: 1 },
    { name: "Coconut Oil", category: "Oil", protein: 0, carbs: 0, fat: 14, info: "Virgin", unit: "tbsp", portion: 1 },
    { name: "Walnuts", category: "Nuts", protein: 4.3, carbs: 3.9, fat: 18.5, info: "Halves", unit: "g", portion: 30 },
    { name: "Flaxseeds", category: "Seeds", protein: 1.9, carbs: 3, fat: 4.3, info: "Ground", unit: "tbsp", portion: 1 },
    { name: "Cheese", category: "Dairy", protein: 7, carbs: 0.4, fat: 9, info: "Cheddar", unit: "g", portion: 28 },
    { name: "Dark Chocolate", category: "Treat", protein: 1.5, carbs: 13, fat: 12, info: "70% cocoa", unit: "g", portion: 28 },
    { name: "Macadamia Nuts", category: "Nuts", protein: 2.2, carbs: 3.9, fat: 21.5, info: "Raw", unit: "g", portion: 28 },
    { name: "Hemp Seeds", category: "Seeds", protein: 9.5, carbs: 2.6, fat: 14, info: "Hulled", unit: "tbsp", portion: 1 },
    { name: "Coconut Milk", category: "Dairy Alternative", protein: 2, carbs: 2, fat: 24, info: "Full fat, canned", unit: "g", portion: 100 }
  ],
  
  // Vegetables (low carb)
  vegetables: [
    { name: "Broccoli", category: "Cruciferous", protein: 2.8, carbs: 7, fat: 0.4, info: "Cooked", unit: "g", portion: 100 },
    { name: "Spinach", category: "Leafy Green", protein: 2.9, carbs: 3.6, fat: 0.4, info: "Raw", unit: "g", portion: 100 },
    { name: "Bell Peppers", category: "Nightshade", protein: 1, carbs: 6, fat: 0.3, info: "Raw, sliced", unit: "g", portion: 100 },
    { name: "Cauliflower", category: "Cruciferous", protein: 1.9, carbs: 5, fat: 0.3, info: "Raw", unit: "g", portion: 100 },
    { name: "Zucchini", category: "Summer Squash", protein: 1.2, carbs: 3.1, fat: 0.3, info: "Raw", unit: "g", portion: 100 },
    { name: "Kale", category: "Leafy Green", protein: 2.9, carbs: 8.8, fat: 0.9, info: "Raw, chopped", unit: "g", portion: 100 },
    { name: "Cucumber", category: "Gourd", protein: 0.7, carbs: 3.6, fat: 0.1, info: "With skin", unit: "g", portion: 100 },
    { name: "Tomatoes", category: "Fruit/Vegetable", protein: 0.9, carbs: 3.9, fat: 0.2, info: "Raw", unit: "g", portion: 100 },
    { name: "Asparagus", category: "Stem Vegetable", protein: 2.2, carbs: 3.9, fat: 0.1, info: "Cooked", unit: "g", portion: 100 },
    { name: "Mushrooms", category: "Fungi", protein: 3.1, carbs: 3.3, fat: 0.3, info: "White, raw", unit: "g", portion: 100 }
  ]
};

/**
 * Generate meal plan suggestions based on macronutrient targets
 * @param {number} proteinGrams - Daily protein target in grams
 * @param {number} carbGrams - Daily carbohydrate target in grams
 * @param {number} fatGrams - Daily fat target in grams
 * @param {string} dietType - Diet preference (balanced, low-carb, high-carb, keto)
 * @returns {Object} - Meal plan suggestions
 */
function generateMealPlan(proteinGrams, carbGrams, fatGrams, dietType) {
  // Define meal distribution based on diet type
  let mealDistribution;
  
  switch(dietType) {
    case 'low-carb':
      mealDistribution = {
        breakfast: { protein: 0.25, carbs: 0.15, fat: 0.25 },
        lunch: { protein: 0.35, carbs: 0.40, fat: 0.30 },
        dinner: { protein: 0.30, carbs: 0.35, fat: 0.30 },
        snack: { protein: 0.10, carbs: 0.10, fat: 0.15 }
      };
      break;
    case 'high-carb':
      mealDistribution = {
        breakfast: { protein: 0.20, carbs: 0.30, fat: 0.20 },
        lunch: { protein: 0.35, carbs: 0.25, fat: 0.30 },
        dinner: { protein: 0.35, carbs: 0.25, fat: 0.35 },
        snack: { protein: 0.10, carbs: 0.20, fat: 0.15 }
      };
      break;
    case 'keto':
      mealDistribution = {
        breakfast: { protein: 0.25, carbs: 0.30, fat: 0.30 },
        lunch: { protein: 0.40, carbs: 0.35, fat: 0.30 },
        dinner: { protein: 0.30, carbs: 0.35, fat: 0.30 },
        snack: { protein: 0.05, carbs: 0.00, fat: 0.10 }
      };
      break;
    default: // balanced
      mealDistribution = {
        breakfast: { protein: 0.25, carbs: 0.25, fat: 0.25 },
        lunch: { protein: 0.30, carbs: 0.35, fat: 0.30 },
        dinner: { protein: 0.35, carbs: 0.30, fat: 0.35 },
        snack: { protein: 0.10, carbs: 0.10, fat: 0.10 }
      };
  }
  
  // Generate meal plan
  const mealPlan = {
    breakfast: generateMealSuggestions('breakfast', {
      protein: Math.round(proteinGrams * mealDistribution.breakfast.protein),
      carbs: Math.round(carbGrams * mealDistribution.breakfast.carbs),
      fat: Math.round(fatGrams * mealDistribution.breakfast.fat)
    }, dietType),
    
    lunch: generateMealSuggestions('lunch', {
      protein: Math.round(proteinGrams * mealDistribution.lunch.protein),
      carbs: Math.round(carbGrams * mealDistribution.lunch.carbs),
      fat: Math.round(fatGrams * mealDistribution.lunch.fat)
    }, dietType),
    
    dinner: generateMealSuggestions('dinner', {
      protein: Math.round(proteinGrams * mealDistribution.dinner.protein),
      carbs: Math.round(carbGrams * mealDistribution.dinner.carbs),
      fat: Math.round(fatGrams * mealDistribution.dinner.fat)
    }, dietType),
    
    snack: generateMealSuggestions('snack', {
      protein: Math.round(proteinGrams * mealDistribution.snack.protein),
      carbs: Math.round(carbGrams * mealDistribution.snack.carbs),
      fat: Math.round(fatGrams * mealDistribution.snack.fat)
    }, dietType)
  };
  
  return mealPlan;
}

/**
 * Generate meal suggestions for a specific meal type
 * @param {string} mealType - Type of meal (breakfast, lunch, dinner, snack)
 * @param {Object} targets - Macro targets for this meal
 * @param {string} dietType - Diet preference
 * @returns {Object} - Meal suggestions with food items
 */
function generateMealSuggestions(mealType, targets, dietType) {
  const meal = {
    type: mealType,
    targets: targets,
    foods: []
  };
  
  // Select foods based on meal type and diet preference
  let proteinOptions, carbOptions, fatOptions, vegOptions;
  
  // Filter options based on diet type
  if (dietType === 'keto') {
    proteinOptions = foodDatabase.proteins.filter(food => food.carbs < 3);
    carbOptions = foodDatabase.carbs.filter(food => food.carbs < 10);
    fatOptions = foodDatabase.fats;
    vegOptions = foodDatabase.vegetables.filter(food => food.carbs < 5);
  } else if (dietType === 'low-carb') {
    proteinOptions = foodDatabase.proteins;
    carbOptions = foodDatabase.carbs.filter(food => food.carbs < 20);
    fatOptions = foodDatabase.fats;
    vegOptions = foodDatabase.vegetables;
  } else {
    proteinOptions = foodDatabase.proteins;
    carbOptions = foodDatabase.carbs;
    fatOptions = foodDatabase.fats;
    vegOptions = foodDatabase.vegetables;
  }
  
  // Select protein source
  const protein = selectRandomFood(proteinOptions);
  if (protein) {
    const portionMultiplier = calculatePortion(protein, targets.protein, 'protein');
    meal.foods.push({
      ...protein,
      portionMultiplier: portionMultiplier,
      actualPortion: Math.round(protein.portion * portionMultiplier * 10) / 10,
      macros: {
        protein: Math.round(protein.protein * portionMultiplier),
        carbs: Math.round(protein.carbs * portionMultiplier),
        fat: Math.round(protein.fat * portionMultiplier)
      }
    });
  }
  
  // Select carb source if not keto
  if (dietType !== 'keto' || targets.carbs > 5) {
    const carb = selectRandomFood(carbOptions);
    if (carb) {
      const portionMultiplier = calculatePortion(carb, targets.carbs, 'carbs');
      meal.foods.push({
        ...carb,
        portionMultiplier: portionMultiplier,
        actualPortion: Math.round(carb.portion * portionMultiplier * 10) / 10,
        macros: {
          protein: Math.round(carb.protein * portionMultiplier),
          carbs: Math.round(carb.carbs * portionMultiplier),
          fat: Math.round(carb.fat * portionMultiplier)
        }
      });
    }
  }
  
  // Select fat source
  const fat = selectRandomFood(fatOptions);
  if (fat) {
    const portionMultiplier = calculatePortion(fat, targets.fat, 'fat');
    meal.foods.push({
      ...fat,
      portionMultiplier: portionMultiplier,
      actualPortion: Math.round(fat.portion * portionMultiplier * 10) / 10,
      macros: {
        protein: Math.round(fat.protein * portionMultiplier),
        carbs: Math.round(fat.carbs * portionMultiplier),
        fat: Math.round(fat.fat * portionMultiplier)
      }
    });
  }
  
  // Add vegetable for lunch and dinner
  if (mealType === 'lunch' || mealType === 'dinner') {
    const veg = selectRandomFood(vegOptions);
    if (veg) {
      // Fixed veggie portion (approximately 1 cup)
      const portionMultiplier = 1.5;
      meal.foods.push({
        ...veg,
        portionMultiplier: portionMultiplier,
        actualPortion: Math.round(veg.portion * portionMultiplier * 10) / 10,
        macros: {
          protein: Math.round(veg.protein * portionMultiplier),
          carbs: Math.round(veg.carbs * portionMultiplier),
          fat: Math.round(veg.fat * portionMultiplier)
        }
      });
    }
  }
  
  return meal;
}

/**
 * Format meal type for display
 * @param {string} mealType 
 * @returns {string} - Formatted meal type 
 */
function formatMealType(mealType) {
  return mealType.charAt(0).toUpperCase() + mealType.slice(1);
}

/**
 * Select a random food from the options
 * @param {Object} options - Food options to choose from
 * @returns {Object|null} - Selected food or null if no options
 */
function selectRandomFood(options) {
  if (!options || options.length === 0) {
    return null;
  }
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

/**
 * Calculate appropriate food portion based on target macros
 * @param {Object} food - Food object with macro information
 * @param {number} targetGrams - Target grams for primary macro
 * @param {string} macroType - Type of macro to focus on (protein, carbs, fat)
 * @returns {number|null} - Portion multiplier or null if food is null
 */
function calculatePortion(food, targetGrams, macroType) {
  if (!food) return null;
  
  // Get content of primary macro in food
  const macroContent = food[macroType];
  
  if (macroContent <= 0) {
    return 1; // Default portion if no macro content
  }
  
  // Calculate multiplier based on target
  // Aiming for about 70-90% of target from this food to leave room for other foods
  const targetRatio = Math.random() * 0.2 + 0.7; // Between 0.7 and 0.9
  let multiplier = (targetGrams * targetRatio) / macroContent;
  
  // Cap multiplier for reasonable portions
  // For example, we don't want to suggest eating 5 chicken breasts
  const maxMultipliers = {
    protein: 3,
    carbs: 3,
    fat: 3
  };
  
  if (multiplier > maxMultipliers[macroType]) {
    multiplier = maxMultipliers[macroType];
  }
  
  // Round to 1 decimal place for cleaner numbers
  return Math.round(multiplier * 10) / 10;
}

/**
 * Render meal plan suggestions to the DOM
 * @param {Object} mealPlan - Generated meal plan
 */
function renderMealPlan(mealPlan) {
  const container = document.getElementById('meal-plan-suggestions');
  if (!container) return;
  
  // Clear previous content
  container.innerHTML = '';
  
  // Add heading and intro
  const heading = document.createElement('h2');
  heading.textContent = 'Your Personalized Meal Plan';
  container.appendChild(heading);
  
  const intro = document.createElement('p');
  intro.textContent = 'Based on your calculated macronutrient targets, here are personalized meal suggestions to help you meet your goals.';
  container.appendChild(intro);
  
  // Create meal cards
  for (const [mealType, meal] of Object.entries(mealPlan)) {
    const mealCard = document.createElement('div');
    mealCard.className = 'meal-card';
    
    // Meal header
    const mealHeader = document.createElement('h3');
    mealHeader.className = 'meal-header';
    mealHeader.textContent = formatMealType(mealType);
    mealCard.appendChild(mealHeader);
    
    // Macro targets
    const macroTargets = document.createElement('div');
    macroTargets.className = 'macro-targets';
    
    const proteinTarget = document.createElement('span');
    proteinTarget.className = 'macro-target';
    proteinTarget.textContent = `Protein: ${meal.targets.protein}g`;
    macroTargets.appendChild(proteinTarget);
    
    const carbTarget = document.createElement('span');
    carbTarget.className = 'macro-target';
    carbTarget.textContent = `Carbs: ${meal.targets.carbs}g`;
    macroTargets.appendChild(carbTarget);
    
    const fatTarget = document.createElement('span');
    fatTarget.className = 'macro-target';
    fatTarget.textContent = `Fat: ${meal.targets.fat}g`;
    macroTargets.appendChild(fatTarget);
    
    mealCard.appendChild(macroTargets);
    
    // Food list
    const foodList = document.createElement('ul');
    foodList.className = 'food-list';
    
    meal.foods.forEach(food => {
      const foodItem = document.createElement('li');
      foodItem.className = 'food-item';
      
      const foodName = document.createElement('span');
      foodName.className = 'food-name';
      foodName.textContent = food.name;
      foodItem.appendChild(foodName);
      
      const foodDetails = document.createElement('div');
      foodDetails.className = 'food-details';
      
      const foodCategory = document.createElement('span');
      foodCategory.className = 'food-category';
      foodCategory.textContent = food.category;
      foodDetails.appendChild(foodCategory);
      
      const foodPortion = document.createElement('span');
      foodPortion.className = 'food-portion';
      foodPortion.textContent = `${food.actualPortion} ${food.unit}`;
      foodDetails.appendChild(foodPortion);
      
      const foodMacros = document.createElement('span');
      foodMacros.textContent = `P: ${food.macros.protein}g | C: ${food.macros.carbs}g | F: ${food.macros.fat}g`;
      foodDetails.appendChild(foodMacros);
      
      foodItem.appendChild(foodDetails);
      
      if (food.info) {
        const foodInfo = document.createElement('span');
        foodInfo.className = 'food-info';
        foodInfo.textContent = food.info;
        foodItem.appendChild(foodInfo);
      }
      
      foodList.appendChild(foodItem);
    });
    
    mealCard.appendChild(foodList);
    container.appendChild(mealCard);
  }
  
  // Add regenerate button
  const buttonContainer = document.createElement('div');
  buttonContainer.style.textAlign = 'center';
  buttonContainer.style.marginTop = '20px';
  
  const regenerateButton = document.createElement('button');
  regenerateButton.textContent = 'Generate New Suggestions';
  regenerateButton.className = 'regenerate-button';
  regenerateButton.onclick = function() {
    const dietType = document.getElementById('diet-type').value;
    const proteinGrams = parseInt(document.getElementById('protein-grams').textContent);
    const carbsGrams = parseInt(document.getElementById('carbs-grams').textContent);
    const fatGrams = parseInt(document.getElementById('fat-grams').textContent);
    
    const mealPlan = generateMealPlan(proteinGrams, carbsGrams, fatGrams, dietType);
    renderMealPlan(mealPlan);
    
    // Scroll to meal plan
    document.getElementById('meal-plan').scrollIntoView({ behavior: 'smooth' });
  };
  
  buttonContainer.appendChild(regenerateButton);
  container.appendChild(buttonContainer);
  
  // Add disclaimer
  const disclaimer = document.createElement('div');
  disclaimer.className = 'meal-plan-disclaimer';
  disclaimer.innerHTML = '<strong>Note:</strong> These meal suggestions are generated based on general nutritional information and your calculated macronutrient targets. Actual nutritional content may vary. For personalized meal planning and dietary advice, consult with a registered dietitian.';
  container.appendChild(disclaimer);
}