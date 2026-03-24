// Glycemic Index Calculator — factory-compatible
// GI values from International Tables (Atkinson 2021) and University of Sydney database
(function() {
    'use strict';

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
        // GRAINS
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
        // CEREALS
        { name: "Corn Flakes", gi: 81, servingSize: "1 cup (30g)", carbsPerServing: 26, category: "cereals" },
        { name: "Rice Krispies", gi: 82, servingSize: "1 cup (30g)", carbsPerServing: 26, category: "cereals" },
        { name: "Cheerios", gi: 74, servingSize: "1 cup (30g)", carbsPerServing: 20, category: "cereals" },
        { name: "All-Bran", gi: 42, servingSize: "\u00bd cup (30g)", carbsPerServing: 21, category: "cereals" },
        { name: "Muesli (natural)", gi: 49, servingSize: "\u00bd cup (30g)", carbsPerServing: 20, category: "cereals" },
        { name: "Special K", gi: 56, servingSize: "1 cup (31g)", carbsPerServing: 22, category: "cereals" },
        { name: "Granola", gi: 55, servingSize: "\u00bd cup (30g)", carbsPerServing: 19, category: "cereals" },
        // SNACKS
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

    var selectedFood = null;
    var activeCategory = 'all';
    var mealItems = [];

    function $(id) { return document.getElementById(id); }

    function getGiLabel(gi) { return gi <= 55 ? 'Low' : gi <= 69 ? 'Medium' : 'High'; }
    function getGlLabel(gl) { return gl <= 10 ? 'Low' : gl <= 19 ? 'Medium' : 'High'; }
    function getBadgeColor(label) {
        if (label === 'Low' || label === 'low') return '#1a8a4a';
        if (label === 'Medium' || label === 'medium') return '#c27a0e';
        return '#c03030';
    }

    function renderFoodList(query, category) {
        var foodList = $('food-list');
        if (!foodList) return;
        foodList.innerHTML = '';
        var filtered = GI_FOODS.filter(function(f) {
            var matchCat = category === 'all' || f.category === category;
            var matchSearch = !query || f.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
            return matchCat && matchSearch;
        });
        if (filtered.length === 0) {
            foodList.innerHTML = '<div style="padding:16px;color:var(--text-muted);text-align:center;">No foods found.</div>';
            return;
        }
        for (var i = 0; i < filtered.length; i++) {
            var f = filtered[i];
            var giLabel = getGiLabel(f.gi);
            var badgeColor = getBadgeColor(giLabel);
            var div = document.createElement('div');
            div.className = 'food-item' + (selectedFood && selectedFood.name === f.name ? ' food-item-selected' : '');
            div.style.cssText = 'padding:10px 14px;cursor:pointer;border-bottom:1px solid rgba(var(--accent-rgb),0.06);transition:background 0.15s;';
            div.innerHTML =
                '<div style="display:flex;justify-content:space-between;align-items:center;">' +
                    '<div><strong style="font-size:0.95rem;color:var(--text);">' + f.name + '</strong>' +
                    '<div style="font-size:0.82rem;color:var(--text-muted);">' + f.servingSize + ' \u00b7 ' + f.carbsPerServing + 'g carbs</div></div>' +
                    '<div style="display:flex;align-items:center;gap:8px;">' +
                        '<span style="font-weight:700;font-size:1.1rem;color:var(--text);">' + f.gi + '</span>' +
                        '<span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75rem;font-weight:600;color:#fff;background:' + badgeColor + ';">' + giLabel + '</span>' +
                    '</div></div>';
            div.addEventListener('click', (function(food) {
                return function() { selectFood(food); };
            })(f));
            foodList.appendChild(div);
        }
    }

    function selectFood(food) {
        selectedFood = food;
        var servingsEl = $('servings');
        if (servingsEl) servingsEl.value = '1';
        calculateResult();
        var searchEl = $('food-search');
        renderFoodList(searchEl ? searchEl.value : '', activeCategory);
    }

    function calculateResult() {
        if (!selectedFood) return;
        var servings = parseFloat(($('servings') || {}).value) || 1;
        var gi = selectedFood.gi;
        var carbs = selectedFood.carbsPerServing * servings;
        var gl = (gi * carbs) / 100;
        var giLabel = getGiLabel(gi);
        var glLabel = getGlLabel(gl);

        // Primary result
        var rn = $('resultNumber');
        if (rn) rn.textContent = gi;

        var rv = $('resultVerdict');
        if (rv) {
            rv.textContent = selectedFood.name + ' \u2014 GI: ' + giLabel + ', GL: ' + gl.toFixed(1) + ' (' + glLabel + ')';
            rv.style.color = getBadgeColor(giLabel);
        }

        // Breakdown cards
        var giVal = $('giVal');
        if (giVal) giVal.textContent = gi + ' (' + giLabel + ')';
        var glVal = $('glVal');
        if (glVal) glVal.textContent = gl.toFixed(1) + ' (' + glLabel + ')';
        var carbsVal = $('carbsVal');
        if (carbsVal) carbsVal.textContent = Math.round(carbs) + 'g';

        // Detail section
        var detailBox = $('giDetailBox');
        if (detailBox) {
            var statusColor = getBadgeColor(giLabel);
            var desc = '';
            if (giLabel === 'Low') desc = selectedFood.name + ' has a low GI (' + gi + '), causing a slower, gradual rise in blood sugar.';
            else if (giLabel === 'Medium') desc = selectedFood.name + ' has a medium GI (' + gi + '), causing a moderate blood sugar rise. Pair with protein or fat.';
            else desc = selectedFood.name + ' has a high GI (' + gi + '), causing a rapid blood sugar spike. Limit portions or pair with low-GI foods.';

            var h = '<div style="padding:0.3rem 0;font-size:0.85rem;color:' + statusColor + ';font-weight:600;margin-bottom:0.5rem;">' + desc + '</div>';
            h += '<div style="display:flex;justify-content:space-between;font-size:0.82rem;color:var(--text-dim);padding:0.3rem 0;border-bottom:1px solid rgba(var(--accent-rgb),0.06);"><span>Food</span><span style="color:var(--text);">' + selectedFood.name + '</span></div>';
            h += '<div style="display:flex;justify-content:space-between;font-size:0.82rem;color:var(--text-dim);padding:0.3rem 0;border-bottom:1px solid rgba(var(--accent-rgb),0.06);"><span>Serving</span><span style="color:var(--text);">' + selectedFood.servingSize + ' \u00d7 ' + servings + '</span></div>';
            h += '<div style="display:flex;justify-content:space-between;font-size:0.82rem;color:var(--text-dim);padding:0.3rem 0;border-bottom:1px solid rgba(var(--accent-rgb),0.06);"><span>GL Formula</span><span style="color:var(--text);">(' + gi + ' \u00d7 ' + Math.round(carbs) + 'g) \u00f7 100 = ' + gl.toFixed(1) + '</span></div>';
            detailBox.innerHTML = h;
            detailBox.style.display = '';
        }

        // Coach
        var coach = $('coachCard');
        if (coach) {
            var ch = '<p>' + selectedFood.name + ' has a glycemic index of <span class="hl">' + gi + '</span> (' + giLabel + ') and a glycemic load of <span class="hl">' + gl.toFixed(1) + '</span> per ' + servings + ' serving' + (servings !== 1 ? 's' : '') + '.</p>';
            if (giLabel === 'High') ch += '<p style="margin-top:0.8rem;">Consider pairing with low-GI foods, protein, or healthy fats to reduce the overall glycemic impact of your meal.</p>';
            coach.innerHTML = ch;
        }

        if (typeof factoryReveal === 'function') factoryReveal();
    }

    function addToMeal() {
        if (!selectedFood) return;
        var servings = parseFloat(($('servings') || {}).value) || 1;
        var carbs = selectedFood.carbsPerServing * servings;
        var gl = (selectedFood.gi * carbs) / 100;
        mealItems.push({ name: selectedFood.name, gi: selectedFood.gi, carbs: carbs, gl: gl, servings: servings });
        renderMeal();
    }

    function removeMealItem(index) {
        mealItems.splice(index, 1);
        renderMeal();
    }

    function renderMeal() {
        var mealBox = $('mealBox');
        if (!mealBox) return;
        if (mealItems.length === 0) { mealBox.style.display = 'none'; return; }
        mealBox.style.display = '';
        var totalGl = 0, totalCarbs = 0;
        var rows = '';
        for (var i = 0; i < mealItems.length; i++) {
            var it = mealItems[i];
            totalGl += it.gl;
            totalCarbs += it.carbs;
            rows += '<tr><td style="padding:6px 10px;border-bottom:1px solid rgba(var(--accent-rgb),0.06);color:var(--text-dim);font-size:0.85rem;">' + it.name + '</td>';
            rows += '<td style="padding:6px 10px;border-bottom:1px solid rgba(var(--accent-rgb),0.06);color:var(--text-dim);font-size:0.85rem;">' + it.gi + '</td>';
            rows += '<td style="padding:6px 10px;border-bottom:1px solid rgba(var(--accent-rgb),0.06);color:var(--text-dim);font-size:0.85rem;">' + Math.round(it.carbs) + 'g</td>';
            rows += '<td style="padding:6px 10px;border-bottom:1px solid rgba(var(--accent-rgb),0.06);color:var(--text-dim);font-size:0.85rem;">' + it.gl.toFixed(1) + '</td>';
            rows += '<td style="padding:6px 10px;border-bottom:1px solid rgba(var(--accent-rgb),0.06);"><button type="button" data-remove="' + i + '" style="background:none;border:none;color:var(--bad);cursor:pointer;font-size:0.85rem;">\u2715</button></td></tr>';
        }
        var glLabel = getGlLabel(totalGl);
        var h = '<div style="font-size:0.9rem;font-weight:700;color:var(--text);margin-bottom:0.8rem;display:flex;justify-content:space-between;align-items:center;">Meal Builder <button type="button" id="clearMealBtn2" style="background:none;border:1px solid rgba(var(--accent-rgb),0.15);border-radius:6px;padding:3px 10px;font-size:0.78rem;cursor:pointer;color:var(--text-dim);">Clear All</button></div>';
        h += '<div style="overflow-x:auto;"><table style="width:100%;border-collapse:collapse;font-size:0.85rem;"><thead><tr style="background:rgba(var(--accent-rgb),0.04);"><th style="padding:6px 10px;text-align:left;color:var(--text);font-size:0.8rem;">Food</th><th style="padding:6px 10px;text-align:left;color:var(--text);font-size:0.8rem;">GI</th><th style="padding:6px 10px;text-align:left;color:var(--text);font-size:0.8rem;">Carbs</th><th style="padding:6px 10px;text-align:left;color:var(--text);font-size:0.8rem;">GL</th><th style="padding:6px 10px;font-size:0.8rem;"></th></tr></thead>';
        h += '<tbody>' + rows + '</tbody>';
        h += '<tfoot><tr style="font-weight:700;border-top:2px solid rgba(var(--accent-rgb),0.1);"><td style="padding:8px 10px;color:var(--text);font-size:0.85rem;">Total (' + mealItems.length + ' items)</td><td style="padding:8px 10px;">--</td><td style="padding:8px 10px;color:var(--text);font-size:0.85rem;">' + Math.round(totalCarbs) + 'g</td><td style="padding:8px 10px;color:' + getBadgeColor(glLabel) + ';font-size:0.85rem;">' + totalGl.toFixed(1) + ' (' + glLabel + ')</td><td></td></tr></tfoot></table></div>';
        h += '<p style="font-size:0.78rem;color:var(--text-muted);margin-top:0.5rem;">Meal GL: under 10 = low, 11-19 = medium, 20+ = high.</p>';
        mealBox.innerHTML = h;

        // Re-attach remove handlers
        var removeBtns = mealBox.querySelectorAll('[data-remove]');
        for (var j = 0; j < removeBtns.length; j++) {
            removeBtns[j].addEventListener('click', (function(idx) {
                return function() { removeMealItem(idx); };
            })(parseInt(removeBtns[j].getAttribute('data-remove'))));
        }
        var clearBtn = $('clearMealBtn2');
        if (clearBtn) clearBtn.addEventListener('click', function() { mealItems = []; renderMeal(); });
    }

    // Event bindings
    var searchInput = $('food-search');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            renderFoodList(this.value, activeCategory);
        });
    }

    var categoryBtns = document.querySelectorAll('.gi-category-btn');
    for (var i = 0; i < categoryBtns.length; i++) {
        categoryBtns[i].addEventListener('click', function() {
            for (var j = 0; j < categoryBtns.length; j++) categoryBtns[j].classList.remove('active');
            this.classList.add('active');
            activeCategory = this.getAttribute('data-category');
            renderFoodList(searchInput ? searchInput.value : '', activeCategory);
        });
    }

    var servingsInput = $('servings');
    if (servingsInput) {
        servingsInput.addEventListener('change', function() {
            if (selectedFood) calculateResult();
        });
    }

    var addMealBtn = $('addToMealBtn');
    if (addMealBtn) addMealBtn.addEventListener('click', addToMeal);

    var infoBtn = $('toggleInfoBtn');
    if (infoBtn) {
        infoBtn.addEventListener('click', function() {
            var panel = $('infoPanel');
            if (panel) panel.classList.toggle('hidden');
        });
    }

    // Initial render
    renderFoodList('', 'all');
})();
