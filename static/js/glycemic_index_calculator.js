document.addEventListener('DOMContentLoaded', function() {
  var GI_FOODS = [
    // FRUITS
    { name: "Apple", gi: 36, servingSize: "1 medium (120g)", carbsPerServing: 15, category: "fruits" },
    { name: "Banana (ripe)", gi: 51, servingSize: "1 medium (118g)", carbsPerServing: 24, category: "fruits" },
    { name: "Orange", gi: 43, servingSize: "1 medium (131g)", carbsPerServing: 11, category: "fruits" },
    { name: "Grapes", gi: 46, servingSize: "1 cup (120g)", carbsPerServing: 17, category: "fruits" },
    { name: "Watermelon", gi: 76, servingSize: "1 cup (152g)", carbsPerServing: 11, category: "fruits" },
    { name: "Pineapple", gi: 59, servingSize: "1 cup (165g)", carbsPerServing: 19, category: "fruits" },
    { name: "Mango", gi: 51, servingSize: "1 cup (165g)", carbsPerServing: 25, category: "fruits" },
    { name: "Strawberries", gi: 40, servingSize: "1 cup (152g)", carbsPerServing: 9, category: "fruits" },
    { name: "Blueberries", gi: 53, servingSize: "1 cup (148g)", carbsPerServing: 17, category: "fruits" },
    { name: "Cherries", gi: 22, servingSize: "1 cup (138g)", carbsPerServing: 19, category: "fruits" },
    { name: "Peach", gi: 42, servingSize: "1 medium (150g)", carbsPerServing: 13, category: "fruits" },
    { name: "Pear", gi: 38, servingSize: "1 medium (178g)", carbsPerServing: 11, category: "fruits" },
    { name: "Grapefruit", gi: 25, servingSize: "\u00bd medium (128g)", carbsPerServing: 11, category: "fruits" },
    { name: "Kiwi", gi: 50, servingSize: "1 medium (76g)", carbsPerServing: 10, category: "fruits" },
    { name: "Dates (dried)", gi: 42, servingSize: "2 oz (57g)", carbsPerServing: 40, category: "fruits" },
    { name: "Raisins", gi: 64, servingSize: "\u00bc cup (40g)", carbsPerServing: 32, category: "fruits" },
    { name: "Cantaloupe", gi: 65, servingSize: "1 cup (177g)", carbsPerServing: 14, category: "fruits" },
    { name: "Papaya", gi: 56, servingSize: "1 cup (145g)", carbsPerServing: 14, category: "fruits" },

    // VEGETABLES
    { name: "Carrots (boiled)", gi: 39, servingSize: "\u00bd cup (78g)", carbsPerServing: 4, category: "vegetables" },
    { name: "Sweet potato (boiled)", gi: 44, servingSize: "1 medium (150g)", carbsPerServing: 24, category: "vegetables" },
    { name: "Potato (baked)", gi: 85, servingSize: "1 medium (173g)", carbsPerServing: 30, category: "vegetables" },
    { name: "Potato (boiled)", gi: 78, servingSize: "1 medium (150g)", carbsPerServing: 30, category: "vegetables" },
    { name: "Potato (mashed)", gi: 87, servingSize: "1 cup (210g)", carbsPerServing: 32, category: "vegetables" },
    { name: "Corn on the cob", gi: 48, servingSize: "1 medium ear (90g)", carbsPerServing: 17, category: "vegetables" },
    { name: "Green peas", gi: 48, servingSize: "\u00bd cup (80g)", carbsPerServing: 7, category: "vegetables" },
    { name: "Pumpkin", gi: 64, servingSize: "\u00bd cup (116g)", carbsPerServing: 6, category: "vegetables" },
    { name: "Beets (boiled)", gi: 64, servingSize: "\u00bd cup (85g)", carbsPerServing: 8, category: "vegetables" },
    { name: "Parsnip (boiled)", gi: 52, servingSize: "\u00bd cup (78g)", carbsPerServing: 10, category: "vegetables" },
    { name: "Butternut squash", gi: 51, servingSize: "\u00bd cup (102g)", carbsPerServing: 8, category: "vegetables" },
    { name: "French fries", gi: 75, servingSize: "1 medium (117g)", carbsPerServing: 29, category: "vegetables" },

    // GRAINS & BREAD
    { name: "White bread", gi: 75, servingSize: "1 slice (30g)", carbsPerServing: 14, category: "grains" },
    { name: "Whole wheat bread", gi: 69, servingSize: "1 slice (30g)", carbsPerServing: 13, category: "grains" },
    { name: "Pumpernickel bread", gi: 41, servingSize: "1 slice (30g)", carbsPerServing: 12, category: "grains" },
    { name: "Sourdough bread", gi: 54, servingSize: "1 slice (30g)", carbsPerServing: 14, category: "grains" },
    { name: "Rye bread", gi: 50, servingSize: "1 slice (30g)", carbsPerServing: 12, category: "grains" },
    { name: "Pita bread (white)", gi: 57, servingSize: "1 small (30g)", carbsPerServing: 17, category: "grains" },
    { name: "Bagel (white)", gi: 72, servingSize: "1 medium (70g)", carbsPerServing: 35, category: "grains" },
    { name: "French baguette", gi: 95, servingSize: "1 piece (30g)", carbsPerServing: 15, category: "grains" },
    { name: "White rice (boiled)", gi: 73, servingSize: "1 cup (186g)", carbsPerServing: 53, category: "grains" },
    { name: "Brown rice", gi: 50, servingSize: "1 cup (195g)", carbsPerServing: 42, category: "grains" },
    { name: "Basmati rice", gi: 58, servingSize: "1 cup (186g)", carbsPerServing: 50, category: "grains" },
    { name: "Jasmine rice", gi: 89, servingSize: "1 cup (186g)", carbsPerServing: 52, category: "grains" },
    { name: "Spaghetti (white, al dente)", gi: 46, servingSize: "1 cup (140g)", carbsPerServing: 44, category: "grains" },
    { name: "Spaghetti (whole wheat)", gi: 42, servingSize: "1 cup (140g)", carbsPerServing: 37, category: "grains" },
    { name: "Quinoa", gi: 53, servingSize: "1 cup (185g)", carbsPerServing: 34, category: "grains" },
    { name: "Rolled oats (porridge)", gi: 55, servingSize: "1 cup cooked (234g)", carbsPerServing: 22, category: "grains" },
    { name: "Instant oatmeal", gi: 79, servingSize: "1 packet (28g)", carbsPerServing: 19, category: "grains" },
    { name: "Couscous", gi: 65, servingSize: "1 cup (157g)", carbsPerServing: 36, category: "grains" },
    { name: "Corn tortilla", gi: 52, servingSize: "1 medium (30g)", carbsPerServing: 12, category: "grains" },
    { name: "Barley (pearled, boiled)", gi: 28, servingSize: "1 cup (157g)", carbsPerServing: 38, category: "grains" },

    // DAIRY
    { name: "Whole milk", gi: 27, servingSize: "1 cup (244ml)", carbsPerServing: 12, category: "dairy" },
    { name: "Skim milk", gi: 32, servingSize: "1 cup (245ml)", carbsPerServing: 13, category: "dairy" },
    { name: "Greek yogurt (plain)", gi: 12, servingSize: "1 cup (245g)", carbsPerServing: 9, category: "dairy" },
    { name: "Plain yogurt", gi: 36, servingSize: "1 cup (245g)", carbsPerServing: 12, category: "dairy" },
    { name: "Ice cream (regular)", gi: 51, servingSize: "\u00bd cup (66g)", carbsPerServing: 16, category: "dairy" },
    { name: "Soy milk", gi: 34, servingSize: "1 cup (243ml)", carbsPerServing: 12, category: "dairy" },
    { name: "Oat milk", gi: 69, servingSize: "1 cup (240ml)", carbsPerServing: 16, category: "dairy" },
    { name: "Rice milk", gi: 86, servingSize: "1 cup (240ml)", carbsPerServing: 22, category: "dairy" },

    // LEGUMES
    { name: "Lentils (boiled)", gi: 29, servingSize: "1 cup (198g)", carbsPerServing: 24, category: "legumes" },
    { name: "Chickpeas (boiled)", gi: 28, servingSize: "1 cup (164g)", carbsPerServing: 30, category: "legumes" },
    { name: "Kidney beans (boiled)", gi: 24, servingSize: "1 cup (177g)", carbsPerServing: 29, category: "legumes" },
    { name: "Black beans (boiled)", gi: 30, servingSize: "1 cup (172g)", carbsPerServing: 27, category: "legumes" },
    { name: "Baked beans (canned)", gi: 48, servingSize: "1 cup (254g)", carbsPerServing: 36, category: "legumes" },
    { name: "Soybeans (boiled)", gi: 16, servingSize: "1 cup (172g)", carbsPerServing: 12, category: "legumes" },
    { name: "Hummus", gi: 6, servingSize: "2 Tbsp (30g)", carbsPerServing: 4, category: "legumes" },
    { name: "Split peas (boiled)", gi: 32, servingSize: "1 cup (196g)", carbsPerServing: 27, category: "legumes" },
    { name: "Navy beans (boiled)", gi: 31, servingSize: "1 cup (182g)", carbsPerServing: 28, category: "legumes" },

    // BREAKFAST CEREALS
    { name: "Corn Flakes", gi: 81, servingSize: "1 cup (30g)", carbsPerServing: 26, category: "cereals" },
    { name: "Rice Krispies", gi: 82, servingSize: "1 cup (30g)", carbsPerServing: 26, category: "cereals" },
    { name: "Cheerios", gi: 74, servingSize: "1 cup (30g)", carbsPerServing: 20, category: "cereals" },
    { name: "All-Bran", gi: 42, servingSize: "\u00bd cup (30g)", carbsPerServing: 21, category: "cereals" },
    { name: "Muesli (natural)", gi: 49, servingSize: "\u00bd cup (30g)", carbsPerServing: 20, category: "cereals" },
    { name: "Special K", gi: 56, servingSize: "1 cup (31g)", carbsPerServing: 22, category: "cereals" },
    { name: "Granola", gi: 55, servingSize: "\u00bd cup (30g)", carbsPerServing: 19, category: "cereals" },

    // SNACKS & SWEETS
    { name: "Dark chocolate (70%+)", gi: 23, servingSize: "1 oz (28g)", carbsPerServing: 13, category: "snacks" },
    { name: "Milk chocolate", gi: 43, servingSize: "1 oz (28g)", carbsPerServing: 17, category: "snacks" },
    { name: "Popcorn (plain)", gi: 65, servingSize: "3 cups (24g)", carbsPerServing: 15, category: "snacks" },
    { name: "Potato chips", gi: 56, servingSize: "1 oz (28g)", carbsPerServing: 15, category: "snacks" },
    { name: "Pretzels", gi: 83, servingSize: "1 oz (28g)", carbsPerServing: 22, category: "snacks" },
    { name: "Rice cakes", gi: 82, servingSize: "2 cakes (18g)", carbsPerServing: 14, category: "snacks" },
    { name: "Doughnut", gi: 76, servingSize: "1 medium (47g)", carbsPerServing: 23, category: "snacks" },
    { name: "Honey", gi: 61, servingSize: "1 Tbsp (21g)", carbsPerServing: 17, category: "snacks" },
    { name: "Table sugar (sucrose)", gi: 65, servingSize: "2 tsp (8g)", carbsPerServing: 8, category: "snacks" },
    { name: "Maple syrup", gi: 54, servingSize: "1 Tbsp (20g)", carbsPerServing: 14, category: "snacks" },
    { name: "Crackers (water/soda)", gi: 74, servingSize: "4 crackers (25g)", carbsPerServing: 17, category: "snacks" },

    // BEVERAGES
    { name: "Orange juice", gi: 50, servingSize: "1 cup (248ml)", carbsPerServing: 26, category: "beverages" },
    { name: "Apple juice", gi: 41, servingSize: "1 cup (248ml)", carbsPerServing: 28, category: "beverages" },
    { name: "Coca-Cola", gi: 63, servingSize: "1 can (355ml)", carbsPerServing: 39, category: "beverages" },
    { name: "Gatorade", gi: 78, servingSize: "1 bottle (591ml)", carbsPerServing: 36, category: "beverages" },
    { name: "Cranberry juice cocktail", gi: 52, servingSize: "1 cup (253ml)", carbsPerServing: 34, category: "beverages" },
    { name: "Tomato juice", gi: 38, servingSize: "1 cup (243ml)", carbsPerServing: 9, category: "beverages" },
    { name: "Grapefruit juice", gi: 48, servingSize: "1 cup (247ml)", carbsPerServing: 22, category: "beverages" }
  ];

  var CATEGORIES = {
    all: 'All Foods',
    fruits: 'Fruits',
    vegetables: 'Vegetables',
    grains: 'Grains & Bread',
    dairy: 'Dairy & Milk',
    legumes: 'Legumes',
    cereals: 'Breakfast Cereals',
    snacks: 'Snacks & Sweets',
    beverages: 'Beverages'
  };

  var searchInput = document.getElementById('food-search');
  var categoryBtns = document.querySelectorAll('.category-btn');
  var foodList = document.getElementById('food-list');
  var servingsInput = document.getElementById('servings');
  var resultsSection = document.getElementById('results-section');
  var mealSection = document.getElementById('meal-section');
  var mealTbody = document.getElementById('meal-tbody');
  var mealTotalGl = document.getElementById('meal-total-gl');
  var mealTotalCarbs = document.getElementById('meal-total-carbs');
  var mealTotalItems = document.getElementById('meal-total-items');
  var clearMealBtn = document.getElementById('clear-meal-btn');

  var selectedFood = null;
  var activeCategory = 'all';
  var mealItems = [];

  function getGiClass(gi) {
    if (gi <= 55) return 'low';
    if (gi <= 69) return 'medium';
    return 'high';
  }

  function getGlClass(gl) {
    if (gl <= 10) return 'low';
    if (gl <= 19) return 'medium';
    return 'high';
  }

  function getGiLabel(gi) {
    if (gi <= 55) return 'Low';
    if (gi <= 69) return 'Medium';
    return 'High';
  }

  function getGlLabel(gl) {
    if (gl <= 10) return 'Low';
    if (gl <= 19) return 'Medium';
    return 'High';
  }

  function getBadgeColor(level) {
    if (level === 'Low' || level === 'low') return '#1a8a4a';
    if (level === 'Medium' || level === 'medium') return '#c27a0e';
    return '#c03030';
  }

  function renderFoodList(query, category) {
    foodList.innerHTML = '';
    var filtered = GI_FOODS.filter(function(f) {
      var matchCat = category === 'all' || f.category === category;
      var matchSearch = !query || f.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
      return matchCat && matchSearch;
    });

    if (filtered.length === 0) {
      foodList.innerHTML = '<div style="padding:16px;color:var(--color-text-tertiary);text-align:center;">No foods found. Try a different search or category.</div>';
      return;
    }

    for (var i = 0; i < filtered.length; i++) {
      var f = filtered[i];
      var giClass = getGiClass(f.gi);
      var giLabel = getGiLabel(f.gi);
      var badgeColor = getBadgeColor(giLabel);
      var div = document.createElement('div');
      div.className = 'food-item' + (selectedFood && selectedFood.name === f.name ? ' food-item-selected' : '');
      div.setAttribute('data-index', GI_FOODS.indexOf(f));
      div.innerHTML =
        '<div style="display:flex;justify-content:space-between;align-items:center;">' +
          '<div>' +
            '<strong style="font-size:0.95rem;">' + f.name + '</strong>' +
            '<div style="font-size:0.82rem;color:var(--color-text-tertiary);">' + f.servingSize + ' &middot; ' + f.carbsPerServing + 'g carbs</div>' +
          '</div>' +
          '<div style="display:flex;align-items:center;gap:8px;">' +
            '<span style="font-weight:700;font-size:1.1rem;">' + f.gi + '</span>' +
            '<span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75rem;font-weight:600;color:#fff;background:' + badgeColor + ';">' + giLabel + '</span>' +
          '</div>' +
        '</div>';
      div.addEventListener('click', (function(food) {
        return function() { selectFood(food); };
      })(f));
      foodList.appendChild(div);
    }
  }

  function selectFood(food) {
    selectedFood = food;
    servingsInput.value = '1';
    calculateResult();
    renderFoodList(searchInput.value, activeCategory);
  }

  function calculateResult() {
    if (!selectedFood) return;

    var servings = parseFloat(servingsInput.value) || 1;
    var gi = selectedFood.gi;
    var carbs = selectedFood.carbsPerServing * servings;
    var gl = (gi * carbs) / 100;

    resultsSection.classList.remove('hidden');

    var heroEl = document.getElementById('gi-result');
    heroEl.textContent = gi;
    if (typeof animateCountUp === 'function') {
      animateCountUp(heroEl, 0, gi, 0, '');
    }

    var giLabel = getGiLabel(gi);
    var glLabel = getGlLabel(gl);
    document.getElementById('gi-label').textContent = 'Glycemic Index \u2014 ' + giLabel;

    // Status
    var statusEl = document.getElementById('gi-status');
    var iconEl = document.getElementById('gi-icon');
    var descEl = document.getElementById('gi-description');

    if (giLabel === 'Low') {
      statusEl.className = 'result-status status-good';
      iconEl.textContent = '\u2713';
      descEl.textContent = selectedFood.name + ' has a low glycemic index (' + gi + '), meaning it causes a slower, more gradual rise in blood sugar. Glycemic load for ' + servings + ' serving' + (servings !== 1 ? 's' : '') + ': ' + gl.toFixed(1) + ' (' + glLabel + ').';
    } else if (giLabel === 'Medium') {
      statusEl.className = 'result-status status-warning';
      iconEl.textContent = '\u26A0';
      descEl.textContent = selectedFood.name + ' has a medium glycemic index (' + gi + '), causing a moderate blood sugar rise. Glycemic load for ' + servings + ' serving' + (servings !== 1 ? 's' : '') + ': ' + gl.toFixed(1) + ' (' + glLabel + '). Pair with protein or fat to slow absorption.';
    } else {
      statusEl.className = 'result-status status-danger';
      iconEl.textContent = '\u26A0';
      descEl.textContent = selectedFood.name + ' has a high glycemic index (' + gi + '), causing a rapid blood sugar spike. Glycemic load for ' + servings + ' serving' + (servings !== 1 ? 's' : '') + ': ' + gl.toFixed(1) + ' (' + glLabel + '). Limit portions or pair with low-GI foods.';
    }

    // Comparison boxes
    document.getElementById('comp-gi').textContent = gi;
    document.getElementById('comp-gi').style.color = getBadgeColor(giLabel);
    document.getElementById('comp-gl').textContent = gl.toFixed(1);
    document.getElementById('comp-gl').style.color = getBadgeColor(glLabel);
    document.getElementById('comp-carbs').textContent = Math.round(carbs) + 'g';

    // Breakdown
    document.getElementById('display-food').textContent = selectedFood.name;
    document.getElementById('display-gi-val').textContent = gi + ' (' + giLabel + ')';
    document.getElementById('display-gl-val').textContent = gl.toFixed(1) + ' (' + glLabel + ')';
    document.getElementById('display-serving').textContent = selectedFood.servingSize + ' \u00d7 ' + servings;
    document.getElementById('display-carbs-val').textContent = Math.round(carbs) + 'g available carbohydrates';
    document.getElementById('display-formula').textContent = '(' + gi + ' \u00d7 ' + Math.round(carbs) + 'g) \u00f7 100 = ' + gl.toFixed(1);

    // GI gauge bar
    var gaugeBar = document.getElementById('gi-gauge-fill');
    var gaugeLabel = document.getElementById('gi-gauge-label');
    var pct = Math.min(gi / 100 * 100, 100);
    gaugeBar.style.width = pct + '%';
    gaugeBar.style.background = getBadgeColor(giLabel);
    gaugeLabel.textContent = gi + ' / 100';

    if (typeof celebratePulse === 'function') {
      celebratePulse(document.getElementById('result-hero'));
    }

    if (typeof showNextSteps === 'function') {
      showNextSteps('glycemic-index', {});
    }
  }

  function addToMeal() {
    if (!selectedFood) return;
    var servings = parseFloat(servingsInput.value) || 1;
    var carbs = selectedFood.carbsPerServing * servings;
    var gl = (selectedFood.gi * carbs) / 100;

    mealItems.push({
      name: selectedFood.name,
      gi: selectedFood.gi,
      carbs: carbs,
      gl: gl,
      servings: servings,
      servingSize: selectedFood.servingSize
    });

    renderMeal();
  }

  function removeMealItem(index) {
    mealItems.splice(index, 1);
    renderMeal();
  }

  function renderMeal() {
    if (mealItems.length === 0) {
      mealSection.classList.add('hidden');
      return;
    }

    mealSection.classList.remove('hidden');
    mealTbody.innerHTML = '';

    var totalGl = 0;
    var totalCarbs = 0;

    for (var i = 0; i < mealItems.length; i++) {
      var item = mealItems[i];
      totalGl += item.gl;
      totalCarbs += item.carbs;

      var tr = document.createElement('tr');
      tr.innerHTML =
        '<td style="padding:6px 10px;border-bottom:1px solid #f0f0f0;">' + item.name + '</td>' +
        '<td style="padding:6px 10px;border-bottom:1px solid #f0f0f0;">' + item.gi + '</td>' +
        '<td style="padding:6px 10px;border-bottom:1px solid #f0f0f0;">' + Math.round(item.carbs) + 'g</td>' +
        '<td style="padding:6px 10px;border-bottom:1px solid #f0f0f0;">' + item.gl.toFixed(1) + '</td>' +
        '<td style="padding:6px 10px;border-bottom:1px solid #f0f0f0;"><button type="button" style="background:none;border:none;color:#c03030;cursor:pointer;font-size:0.85rem;padding:2px 6px;" data-remove="' + i + '">\u2715</button></td>';
      mealTbody.appendChild(tr);
    }

    // Attach remove handlers
    var removeBtns = mealTbody.querySelectorAll('[data-remove]');
    for (var j = 0; j < removeBtns.length; j++) {
      removeBtns[j].addEventListener('click', (function(idx) {
        return function() { removeMealItem(idx); };
      })(parseInt(removeBtns[j].getAttribute('data-remove'))));
    }

    var glLabel = getGlLabel(totalGl);
    mealTotalGl.textContent = totalGl.toFixed(1) + ' (' + glLabel + ')';
    mealTotalGl.style.color = getBadgeColor(glLabel);
    mealTotalCarbs.textContent = Math.round(totalCarbs) + 'g';
    mealTotalItems.textContent = mealItems.length;
  }

  // Event listeners
  searchInput.addEventListener('input', function() {
    renderFoodList(searchInput.value, activeCategory);
  });

  for (var i = 0; i < categoryBtns.length; i++) {
    categoryBtns[i].addEventListener('click', function() {
      for (var j = 0; j < categoryBtns.length; j++) {
        categoryBtns[j].classList.remove('category-btn-active');
      }
      this.classList.add('category-btn-active');
      activeCategory = this.getAttribute('data-category');
      renderFoodList(searchInput.value, activeCategory);
    });
  }

  servingsInput.addEventListener('change', function() {
    if (selectedFood) calculateResult();
  });

  document.getElementById('add-to-meal-btn').addEventListener('click', addToMeal);

  clearMealBtn.addEventListener('click', function() {
    mealItems = [];
    renderMeal();
  });

  // Initial render
  renderFoodList('', 'all');
});
