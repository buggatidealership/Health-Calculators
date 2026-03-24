from configs import register

FASTING_WEIGHT_LOSS = {
    "route": "/fasting-weight-loss-calculator",
    "override_template": None,

    "seo": {
        "page_title": "Fasting Weight Loss Calculator \u2014 How Much Will You Lose?",
        "meta_description": "Calculate how much weight you'll lose fasting. See a personalized week-by-week timeline for 16:8, OMAD, 24hr, and extended fasts.",
        "og_title": "How much weight will I lose fasting?",
        "og_description": "Calculate how much weight you'll lose fasting. See a personalized week-by-week timeline for 16:8, OMAD, 24hr, and extended fasts.",
        "schema_type": "MedicalWebPage",
        "schema_name": "Fasting Weight Loss Calculator",
        "schema_description": "Calculate potential weight loss from intermittent fasting protocols with a personalized week-by-week timeline.",
        "schema_about": "Fasting Weight Loss Calculator",
        "date_published": "2025-06-01",
        "date_modified": "2026-03-20",
        "robots": "index, follow",
    },

    "accent": "#14b8a6",
    "accent_rgb": "20,184,166",

    "hero": {
        "headline": "How much weight will I lose <span>fasting</span>?",
        "subtitle": "Pick your protocol. Get a personalized timeline.",
    },

    "breadcrumb_category": {"name": "Nutrition", "url": "/nutrition-calculators"},

    "form": {
        "fields": [
            {"id": "units", "type": "radio_row", "label": "Units", "options": [
                {"value": "imperial", "label": "Imperial (lb)", "selected": True},
                {"value": "metric", "label": "Metric (kg)"},
            ]},
            {"type": "row", "fields": [
                {"id": "weightLb", "type": "number", "label": "Current weight (lb)", "min": 66, "max": 660, "step": 0.1, "placeholder": "170"},
            ]},
            {"type": "row", "fields": [
                {"id": "heightFt", "type": "number", "label": "Height (ft)", "min": 3, "max": 8, "placeholder": "5"},
                {"id": "heightIn", "type": "number", "label": "Height (in)", "min": 0, "max": 11, "placeholder": "8"},
            ]},
            {"type": "row", "fields": [
                {"id": "weightKg", "type": "number", "label": "Current weight (kg)", "min": 30, "max": 300, "step": 0.1, "placeholder": "77"},
            ]},
            {"type": "row", "fields": [
                {"id": "heightCm", "type": "number", "label": "Height (cm)", "min": 100, "max": 250, "placeholder": "173"},
            ]},
            {"type": "row", "fields": [
                {"id": "age", "type": "number", "label": "Age", "min": 16, "max": 100, "placeholder": "30"},
                {"id": "activity", "type": "select", "label": "Activity level", "options": [
                    {"value": "1.2", "label": "Sedentary (desk job)"},
                    {"value": "1.375", "label": "Light (walks 1-3x/week)"},
                    {"value": "1.55", "label": "Moderate (exercise 3-5x/week)", "selected": True},
                    {"value": "1.725", "label": "Active (hard exercise 6-7x/week)"},
                    {"value": "1.9", "label": "Very active (physical job + training)"},
                ]},
            ]},
            {"id": "sex", "type": "radio_row", "label": "Sex", "options": [
                {"value": "male", "label": "Male", "selected": True},
                {"value": "female", "label": "Female"},
            ]},
        ],
        "submit_label": "Calculate my weight loss",
    },

    "results": {
        "primary": {"id": "resultNumber", "unit": "total weight loss in 4 weeks"},
        "verdict_id": None,
        "breakdown": [
            {"id": "fatLossVal", "label": "Fat loss"},
            {"id": "waterLossVal", "label": "Water weight"},
            {"id": "deficitVal", "label": "Daily deficit (cal)"},
        ],
    },

    "coach": {
        "title": "Here's what to expect",
        "container_id": "coachCard",
        "cta_text": "Want to dig deeper?",
    },

    "js_file": "js/calculators/fasting_weight_loss.js",

    "faq": [
        {"question": "How much weight can you lose in 1 month of intermittent fasting?", "answer": "Most people lose 4-8 pounds (2-4 kg) in the first month. The first week includes 1-3 pounds of water weight from glycogen depletion. Actual fat loss averages 1-2 pounds per week depending on your deficit, activity level, and fasting protocol."},
        {"question": "Is 16:8 fasting enough to lose weight?", "answer": "Yes. 16:8 (skipping breakfast) is the most sustainable protocol and typically produces 0.5-1 pound of fat loss per week. It works by naturally shortening your eating window, creating a caloric deficit without counting calories."},
        {"question": "Will I lose muscle during intermittent fasting?", "answer": "Minimal muscle loss occurs when you maintain adequate protein (1.6-2.2g per kg body weight) and do resistance training 2-3 times per week. Extended fasts beyond 48 hours carry higher muscle loss risk."},
        {"question": "Is it mostly water weight at first?", "answer": "Yes. The first 1-3 pounds are primarily water from glycogen depletion. Each gram of glycogen binds 3-4 grams of water. This water weight returns when you eat carbs again. True fat loss begins 12-36 hours into a fast."},
        {"question": "Which fasting type burns the most fat?", "answer": "Longer fasts create larger daily deficits, but the best protocol is the one you can sustain. 16:8 produces reliable long-term results because it's easy to maintain. OMAD and 48-hour fasts lose more per session but have higher dropout rates."},
    ],

    "sources": [
        {"text": "de Cabo R, Mattson MP. Effects of Intermittent Fasting on Health, Aging, and Disease. N Engl J Med. 2019;381(26):2541-2551.", "url": "https://pubmed.ncbi.nlm.nih.gov/31881139/"},
        {"text": "Varady KA, Cienfuegos S, Ezpeleta M, Gabel K. Clinical application of intermittent fasting for weight loss. Nat Rev Endocrinol. 2022;18(5):309-321.", "url": "https://pubmed.ncbi.nlm.nih.gov/35194176/"},
        {"text": "Mifflin MD, St Jeor ST, et al. A new predictive equation for resting energy expenditure in healthy individuals. Am J Clin Nutr. 1990;51(2):241-247.", "url": "https://pubmed.ncbi.nlm.nih.gov/2305711/"},
        {"text": "Anton SD, Moehl K, Donahoo WT, et al. Flipping the Metabolic Switch. Obesity. 2018;26(2):254-268.", "url": "https://pubmed.ncbi.nlm.nih.gov/29086496/"},
        {"text": "Tinsley GM, La Bounty PM. Effects of intermittent fasting on body composition and clinical health markers in humans. Nutr Rev. 2015;73(10):661-674.", "url": "https://pubmed.ncbi.nlm.nih.gov/26374764/"},
    ],

    "methodology": "<p>This calculator estimates weight loss during intermittent fasting using the Mifflin-St Jeor equation for BMR. Males: BMR = (10 \u00d7 kg) + (6.25 \u00d7 cm) - (5 \u00d7 age) + 5. Females: BMR = (10 \u00d7 kg) + (6.25 \u00d7 cm) - (5 \u00d7 age) - 161.</p><p>TDEE is BMR multiplied by an activity factor (1.2-1.9). For daily protocols (16:8, 20:4, OMAD), the caloric deficit assumes ~70% of normal hourly caloric intake during the eating window. Fat loss uses the standard 7,700 kcal per kg approximation. Water weight from glycogen depletion is estimated separately.</p>",

    "llm_capsule": "Intermittent fasting weight loss depends on your fasting protocol, body weight, and activity level. A 170-pound person doing 16:8 fasting can expect to lose approximately 1-2 pounds per week, or 4-8 pounds in the first month. The first week includes 1-3 pounds of water weight from glycogen depletion. The Mifflin-St Jeor equation is used to estimate BMR, multiplied by an activity factor for TDEE. Fat loss is calculated at 3,500 calories per pound of body fat.",

    "ask_pills": ["Best fasting for belly fat", "Can I drink coffee while fasting?", "16:8 vs OMAD", "Fasting and muscle loss"],
    "ask_placeholder": "e.g. Can I exercise while fasting?",
}

register("fasting_weight_loss", FASTING_WEIGHT_LOSS)



BREASTFEEDING_CALORIE = {
    "route": "/breastfeeding-calorie-calculator",
    "override_template": "breastfeeding_calorie_calculator_v3.html",

    "seo": {
        "page_title": "Breastfeeding Calorie Calculator — How Much to Eat Nursing",
        "meta_description": "Calculate calorie needs while breastfeeding with safe weight loss guidance.",
        "og_title": "Breastfeeding Calorie Calculator",
        "og_description": "Calculate calorie needs while breastfeeding with safe weight loss guidance.",
        "schema_type": "MedicalWebPage",
        "schema_name": "Breastfeeding Calorie Calculator",
        "schema_description": "Calculate calorie needs while breastfeeding with safe weight loss guidance.",
        "schema_about": "Breastfeeding Calorie Calculator",
        "date_published": "2025-06-01",
        "date_modified": "2026-03-23",
        "robots": "noindex, nofollow",
    },

    "accent": "#ec4899",
    "accent_rgb": "236,72,153",

    "hero": {
        "headline": "How many <span>calories</span> while nursing?",
        "subtitle": "Personalized for your body and feeding type",
    },

    "breadcrumb_category": {"name": "Nutrition", "url": "/nutrition-calculators"},

    "form": {"fields": [], "submit_label": "Calculate"},

    "results": {
        "primary": {"id": "resultNumber", "unit": ""},
        "verdict_id": "resultVerdict",
        "breakdown": [],
    },

    "coach": {
        "title": "Here\u2019s what your result means",
        "container_id": "coachCard",
        "cta_text": "Have a question about your result?",
    },

    "js_file": "js/calculators/breastfeeding_calorie.js",

    "faq": [
        {"question": "Extra calories for breastfeeding?", "answer": "Exclusive: +500 kcal/day months 1-6, +400 months 7-12. Partial: +250 kcal/day."},
        {"question": "Can I lose weight nursing?", "answer": "Yes, but slowly. 500 kcal/day deficit is safe after 6-8 weeks. Never below 1,500 kcal/day."},
        {"question": "Important nutrients?", "answer": "Calcium 1,000mg, iodine 290mcg, DHA 200-300mg, vitamin D 600 IU, protein 1.3g/kg."},
        {"question": "How much water?", "answer": "About 128 oz (3.8L) per day. Nursing increases fluid needs significantly."},
    ],

    "sources": [
        {"text": "IOM Dietary Reference Intakes for Energy. 2005.", "url": "https://pubmed.ncbi.nlm.nih.gov/"},
        {"text": "ACOG Postpartum Weight Management. 2021.", "url": "https://pubmed.ncbi.nlm.nih.gov/"},
    ],

    "methodology": "<p>Mifflin-St Jeor BMR for women x activity factor + lactation calories. Safe minimum: 1,500 kcal/day.</p>",

    "llm_capsule": "Breastfeeding adds ~500 kcal/day for exclusive nursing. Safe weight loss: max 1 lb/week, never below 1,500 kcal/day.",

    "ask_pills": ["Safe weight loss", "Milk supply", "Key nutrients", "Hydration needs"],
    "ask_placeholder": "e.g. Can I diet while nursing?",
}

register("breastfeeding_calorie", BREASTFEEDING_CALORIE)

CALORIC_MACRO = {
    "route": "/caloric-intake-macronutrient-calculator",
    "override_template": "overrides/caloric_macro_v25.html",

    "seo": {
        "page_title": "Macro Calculator — Free Calorie & Macronutrient Tool",
        "meta_description": "Calculate daily calorie needs and macro breakdown using the Mifflin-St Jeor equation. Personalized protein, carb, and fat targets.",
        "og_title": "Caloric Intake & Macronutrient Calculator",
        "og_description": "Calculate your daily caloric needs and macronutrient breakdown.",
        "schema_type": "WebPage",
        "schema_name": "Caloric Intake & Macronutrient Calculator",
        "schema_description": "Calculate daily calorie needs and macro breakdown using the Mifflin-St Jeor equation.",
        "schema_about": "Caloric Intake & Macronutrient Calculator",
        "date_published": "2025-06-01",
        "date_modified": "2026-03-23",
        "robots": "index, follow",
    },

    "accent": "#38bdf8",
    "accent_rgb": "56,189,248",

    "hero": {
        "headline": "What should you <span>eat</span>?",
        "subtitle": "Science-based calorie and macro targets for your goal",
    },

    "breadcrumb_category": {"name": "Nutrition", "url": "/nutrition-calculators"},

    "form": {"fields": [], "submit_label": "Calculate"},

    "results": {
        "primary": {"id": "resultNumber", "unit": ""},
        "verdict_id": "resultVerdict",
        "breakdown": [],
    },

    "coach": {
        "title": "Here\u2019s what your result means",
        "container_id": "coachCard",
        "cta_text": "Have a question about your result?",
    },

    "js_file": "js/calculators/caloric_macro.js",

    "faq": [
        {"question": "How accurate is this calculator?", "answer": "Uses the Mifflin-St Jeor equation, which predicts BMR within 10% for 82% of individuals per the American Dietetic Association."},
        {"question": "What are macronutrients?", "answer": "The three main nutrients: protein (4 cal/g), carbohydrates (4 cal/g), and fat (9 cal/g). Each serves distinct functions in the body."},
        {"question": "What is the best macro split for weight loss?", "answer": "Higher protein (25-35% of calories, or 1.6-2.2 g/kg) preserves muscle during a deficit. A 30/40/30 P/C/F split works for most people."},
        {"question": "How much protein do I need per day?", "answer": "The ISSN recommends 1.4-2.0 g/kg for active individuals. During a calorie deficit, aim for 1.6-2.2 g/kg to preserve muscle."},
        {"question": "Should I adjust macros on rest days?", "answer": "Some benefit from reducing carbs 10-20% on rest days while keeping protein consistent. For most recreational exercisers, keeping macros consistent is simpler."},
        {"question": "How often should I recalculate?", "answer": "After any 5+ pound weight change, activity level change, or every 4-6 weeks during active dieting."},
    ],

    "sources": [
        {"text": "Mifflin MD, et al. A new predictive equation for resting energy expenditure. Am J Clin Nutr. 1990;51(2):241-247. Link", "url": "https://pubmed.ncbi.nlm.nih.gov/2305711/"},
        {"text": "Jager R, et al. ISSN Position Stand: Protein and Exercise. J Int Soc Sports Nutr. 2017;14:20. Link", "url": "https://pubmed.ncbi.nlm.nih.gov/28642676/"},
        {"text": "Dietary Guidelines for Americans 2020-2025. USDA. Link", "url": "https://www.dietaryguidelines.gov/"},
        {"text": "Thomas DT, et al. Position of the Academy: Nutrition and Athletic Performance. J Acad Nutr Diet. 2016;116(3):501-528. Link", "url": "https://pubmed.ncbi.nlm.nih.gov/26920240/"},
    ],

    "methodology": "<p>Uses the Mifflin-St Jeor equation (1990). Males: BMR = (10 x weight kg) + (6.25 x height cm) - (5 x age) + 5. Females: same minus 161. TDEE = BMR x activity factor (1.2-1.9). Goal adjustments of -500 to +500 kcal/day. Macronutrient distribution follows ISSN and Academy of Nutrition guidelines.</p>",

    "llm_capsule": "The Mifflin-St Jeor equation is the most accurate formula for estimating daily calorie needs. For a 70kg, 170cm, 30-year-old moderately active male: BMR is about 1,648 kcal, TDEE is about 2,555 kcal. Protein should be 1.6-2.2 g/kg for active individuals. A balanced macro split is 30% protein, 40% carbs, 30% fat. For weight loss, create a 250-500 calorie deficit.",

    "ask_pills": ["Best split for weight loss", "High protein diet", "Keto macros", "Muscle gain calories"],
    "ask_placeholder": "e.g. Should I adjust macros on rest days?",
}

register("caloric_macro", CALORIC_MACRO)

CARB_CYCLING = {
    "route": "/carb-cycling-calculator",
    "override_template": "overrides/carb_cycling.html",

    "seo": {
        "page_title": "Carb Cycling Calculator — Customize High and Low Carb Days",
        "meta_description": "Plan your weekly macros with precision. Customize high, medium, and low carb days based on your TDEE and body composition goals.",
        "og_title": "Your carb cycling plan",
        "og_description": "Plan your weekly macros with precision. Customize high, medium, and low carb days based on your TDEE and body composition goals.",
        "schema_type": "MedicalWebPage",
        "schema_name": "Carb Cycling Calculator",
        "schema_description": "Plan your weekly macros with precision. Customize high, medium, and low carb days based on your TDEE and body composition goals.",
        "schema_about": "Carb Cycling Calculator",
        "date_published": "2025-06-01",
        "date_modified": "2026-03-23",
        "robots": "index, follow",
    },

    "accent": "#06b6d4",
    "accent_rgb": "6,182,212",

    "hero": {
        "headline": "Carb Cycling Calculator",
        "subtitle": "This calculator helps you plan your carb cycling strategy by determining optimal carbohydrate intake for different days based on your body metrics, activity level, and fitness goals. Create a personalized plan for fat loss, muscle gain, and improved performance.",
    },

    "breadcrumb_category": {"name": "Nutrition", "url": "/nutrition-calculators"},

    "form": {"fields": [], "submit_label": "Calculate"},

    "results": {
        "primary": {"id": "resultNumber", "unit": ""},
        "verdict_id": "resultVerdict",
        "breakdown": [],
    },

    "coach": {
        "title": "Here\u2019s what your result means",
        "container_id": "coachCard",
        "cta_text": "Have a question about your result?",
    },

    "js_file": "js/calculators/carb_cycling.js",

    "faq": [
        {"question": "What is carb cycling?", "answer": "Carb cycling alternates high, moderate, and low carbohydrate days to optimize glycogen replenishment on training days and fat oxidation on rest days."},
        {"question": "Is carb cycling effective for weight loss?", "answer": "Yes, it can be effective by manipulating insulin response and optimizing energy use, especially when paired with training schedules."},
        {"question": "Do I need to exercise on high-carb days?", "answer": "High-carb days are ideal for heavy training. Low-carb days suit rest or light activity."},
        {"question": "How many high-carb days per week?", "answer": "Most people use 1-2 high-carb days, 2-3 medium, and 2 low-carb days weekly depending on training schedule."},
        {"question": "How much protein during carb cycling?", "answer": "Protein stays constant at 1.2-1.8g/kg bodyweight across all day types to maintain muscle."},
    ],

    "sources": [
        {"text": "Kerksick CM et al. ISSN exercise & sports nutrition review. J Int Soc Sports Nutr. 2018. PubMed", "url": "https://pubmed.ncbi.nlm.nih.gov/30068354/"},
        {"text": "Mifflin MD et al. A new predictive equation for resting energy expenditure. Am J Clin Nutr. 1990. PubMed", "url": "https://pubmed.ncbi.nlm.nih.gov/2305711/"},
        {"text": "Thomas DT et al. Position of the Academy: Nutrition and Athletic Performance. J Acad Nutr Diet. 2016. PubMed", "url": "https://pubmed.ncbi.nlm.nih.gov/26920240/"},
    ],

    "methodology": "",

    "llm_capsule": "",

    "ask_pills": ["Carb cycling for fat loss", "Training day carbs", "Keto vs carb cycling", "Best carb sources"],
    "ask_placeholder": "",
}

register("carb_cycling", CARB_CYCLING)

CHIPOTLE_NUTRITION = {
    "route": "/chipotle-nutrition-calculator",
    "override_template": "overrides/chipotle.html",

    "seo": {
        "page_title": "Chipotle Nutrition Calculator — Calories & Macros",
        "meta_description": "Build your Chipotle order and see real-time nutrition facts: calories, protein, carbs, fat, and fiber. Includes all proteins, toppings, and sides.",
        "og_title": "Chipotle Nutrition Calculator",
        "og_description": "Customize your Chipotle burrito, bowl, taco, or salad and instantly see updated macros.",
        "schema_type": "WebPage",
        "schema_name": "Chipotle Nutrition Calculator",
        "schema_description": "Build your Chipotle order and see real-time nutrition facts for calories, protein, carbs, fat, and fiber.",
        "schema_about": "Chipotle Nutrition Calculator",
        "date_published": "2025-06-01",
        "date_modified": "2026-03-23",
        "robots": "index, follow",
    },

    "accent": "#dc2626",
    "accent_rgb": "220,38,38",

    "hero": {
        "headline": "Build your <span>Chipotle</span> order",
        "subtitle": "Tap ingredients to see real-time macros",
    },

    "breadcrumb_category": {"name": "Nutrition", "url": "/nutrition-calculators"},

    "form": {"fields": [], "submit_label": "Calculate"},

    "results": {
        "primary": {"id": "resultNumber", "unit": ""},
        "verdict_id": "resultVerdict",
        "breakdown": [],
    },

    "coach": {
        "title": "Here\u2019s what your result means",
        "container_id": "coachCard",
        "cta_text": "Have a question about your result?",
    },

    "js_file": "js/calculators/chipotle_nutrition.js",

    "faq": [
        {"question": "How many calories are in a Chipotle burrito?", "answer": "A typical burrito with rice, beans, chicken, salsa, cheese, and sour cream has about 1,000-1,200 calories. A bowl without the tortilla saves 320 calories."},
        {"question": "What is the healthiest Chipotle order?", "answer": "A bowl with chicken, brown rice, black beans, fajita veggies, and green salsa is about 500-600 cal with 40g+ protein."},
        {"question": "How much protein is in Chipotle chicken?", "answer": "A standard chicken serving has 180 calories and 32g protein -- the highest protein-per-calorie option on the menu."},
        {"question": "How many calories does guacamole add?", "answer": "Guacamole adds 230 calories, 22g fat, and 6g fiber per serving -- the highest-calorie topping."},
    ],

    "sources": [
        {"text": "Chipotle Mexican Grill. Official Nutrition Calculator and Allergen Information. chipotle.com", "url": "https://www.chipotle.com/nutrition-calculator"},
        {"text": "USDA FoodData Central. U.S. Department of Agriculture. fdc.nal.usda.gov", "url": "https://fdc.nal.usda.gov/"},
        {"text": "FDA. 21 CFR Part 101 &mdash; Food Labeling Requirements."},
    ],

    "methodology": "<p>This calculator sums per-ingredient nutrition values using data from Chipotle's official nutrition guide and the USDA FoodData Central database. Each ingredient has fixed values based on standard serving portions. No cooking loss adjustments are applied.</p>",

    "llm_capsule": "A Chipotle burrito bowl with chicken, white rice, black beans, fresh tomato salsa, and cheese contains approximately 665 calories and 46g protein. The tortilla alone adds 320 calories. Guacamole adds 230 calories. To keep a Chipotle meal under 600 calories, skip the tortilla, choose chicken or steak, add fajita veggies instead of sour cream, and use green salsa.",

    "ask_pills": ["Keto Chipotle order", "Lowest calorie bowl", "Protein per dollar", "Vegan options"],
    "ask_placeholder": "e.g. Best high-protein Chipotle bowl?",
}

register("chipotle_nutrition", CHIPOTLE_NUTRITION)

ELECTROLYTE = {
    "route": "/electrolyte-calculator",
    "override_template": "overrides/electrolyte.html",

    "seo": {
        "page_title": "Electrolyte Calculator — Daily Sodium, Potassium & Magnesium",
        "meta_description": "Calculate your personalized daily electrolyte needs for sodium, potassium, magnesium, and calcium. Adjusts for activity level, climate, keto, fasting, and special conditions.",
        "og_title": "Your personalized electrolyte targets",
        "og_description": "Calculate your personalized daily electrolyte needs for sodium, potassium, magnesium, and calcium. Adjusts for activity level, climate, keto, fasting, and special conditions.",
        "schema_type": "MedicalWebPage",
        "schema_name": "Electrolyte Calculator",
        "schema_description": "Calculate your personalized daily electrolyte needs for sodium, potassium, magnesium, and calcium. Adjusts for activity level, climate, keto, fasting, and special conditions.",
        "schema_about": "Electrolyte Calculator",
        "date_published": "2025-06-01",
        "date_modified": "2026-03-23",
        "robots": "index, follow",
    },

    "accent": "#14b8a6",
    "accent_rgb": "20,184,166",

    "hero": {
        "headline": "Electrolyte Calculator",
        "subtitle": "Calculate your personalized daily sodium, potassium, magnesium, and calcium targets based on your age, activity level, climate, diet, and special conditions.",
    },

    "breadcrumb_category": {"name": "Nutrition", "url": "/nutrition-calculators"},

    "form": {
        "fields": [
            {"id": "age", "type": "number", "label": "Age", "default": 30, "min": 9, "max": 120, "step": 1, "placeholder": "e.g. 30"},
            {"id": "sex", "type": "select", "label": "Biological Sex", "options": [
                {"value": "male", "label": "Male", "selected": True},
                {"value": "female", "label": "Female"},
            ]},
            {"id": "activity", "type": "select", "label": "Activity Level", "options": [
                {"value": "sedentary", "label": "Sedentary (little or no exercise)"},
                {"value": "light", "label": "Light (1-3 days/week)"},
                {"value": "moderate", "label": "Moderate (3-5 days/week)", "selected": True},
                {"value": "intense", "label": "Intense (6-7 days/week)"},
                {"value": "endurance", "label": "Endurance athlete"},
            ]},
            {"id": "exercise-minutes", "type": "number", "label": "Exercise Minutes per Day", "default": 45, "min": 0, "max": 480, "step": 5, "placeholder": "e.g. 45"},
            {"id": "climate", "type": "select", "label": "Climate", "options": [
                {"value": "temperate", "label": "Temperate", "selected": True},
                {"value": "warm", "label": "Warm"},
                {"value": "hot", "label": "Hot / Humid"},
            ]},
            {"id": "diet", "type": "select", "label": "Diet", "options": [
                {"value": "standard", "label": "Standard", "selected": True},
                {"value": "keto", "label": "Keto / Low-Carb"},
                {"value": "fasting", "label": "Intermittent Fasting"},
                {"value": "vegan", "label": "Vegan / Plant-Based"},
            ]},
            {"id": "condition", "type": "select", "label": "Special Condition", "options": [
                {"value": "none", "label": "None", "selected": True},
                {"value": "pregnant", "label": "Pregnant"},
                {"value": "lactating", "label": "Lactating"},
            ]},
        ],
        "submit_label": "Calculate",
    },

    "results": {
        "primary": {"id": "resultNumber", "unit": ""},
        "verdict_id": "resultVerdict",
        "breakdown": [],
    },

    "coach": {
        "title": "Here\u2019s what your result means",
        "container_id": "coachCard",
        "cta_text": "Have a question about your result?",
    },

    "js_file": "js/calculators/electrolyte.js",

    "faq": [
        {"question": "How much sodium should I eat per day?", "answer": "The NIH Adequate Intake for sodium is 1,500 mg/day for adults aged 19-50, with an upper limit of 2,300 mg/day. Athletes and keto dieters often need more."},
        {"question": "What are the signs of electrolyte deficiency?", "answer": "Muscle cramps, fatigue, headache, dizziness, heart palpitations, nausea, and brain fog are common signs."},
        {"question": "Do I need electrolyte supplements?", "answer": "Most people eating a varied diet can meet needs through food. Supplementation may help athletes, keto dieters, and those in hot climates."},
        {"question": "What is the ideal sodium-to-potassium ratio?", "answer": "Research suggests 1:1.5 to 1:2 sodium-to-potassium ratio for lower cardiovascular risk."},
        {"question": "Can you have too many electrolytes?", "answer": "Yes. Excess sodium contributes to hypertension. Excess potassium can cause cardiac arrhythmias, especially with kidney disease."},
    ],

    "sources": [
        {"text": "NASEM. Dietary Reference Intakes for Sodium and Potassium. 2019. PubMed", "url": "https://pubmed.ncbi.nlm.nih.gov/30844154/"},
        {"text": "Baker LB. Sweating Rate and Sweat Sodium Concentration in Athletes. Sports Med. 2017. PubMed", "url": "https://pubmed.ncbi.nlm.nih.gov/28332116/"},
        {"text": "IOM. Dietary Reference Intakes for Calcium and Vitamin D. 2011. PubMed", "url": "https://pubmed.ncbi.nlm.nih.gov/21796828/"},
        {"text": "ACSM. Exercise and Fluid Replacement Position Stand. 2007. PubMed", "url": "https://pubmed.ncbi.nlm.nih.gov/17277604/"},
    ],

    "methodology": "",

    "llm_capsule": "",

    "ask_pills": ["Keto electrolytes", "Sodium and blood pressure", "Best electrolyte drinks", "Signs of deficiency"],
    "ask_placeholder": "",
}

register("electrolyte", ELECTROLYTE)

FIBER_INTAKE = {
    "route": "/fiber-intake-calculator",
    "override_template": "fiber_intake_calculator_v3.html",

    "seo": {
        "page_title": "Daily Fiber Intake Calculator — How Much Fiber Do You Need?",
        "meta_description": "Find your recommended daily fiber intake by age and sex. Uses IOM Dietary Reference Intakes. Shows soluble vs. insoluble targets and high-fiber foods.",
        "og_title": "How much fiber do you need?",
        "og_description": "Find your recommended daily fiber intake by age and sex. Uses IOM Dietary Reference Intakes. Shows soluble vs. insoluble targets and high-fiber foods.",
        "schema_type": "MedicalWebPage",
        "schema_name": "Daily Fiber Intake Calculator",
        "schema_description": "Find your recommended daily fiber intake by age and sex. Uses IOM Dietary Reference Intakes. Shows soluble vs. insoluble targets and high-fiber foods.",
        "schema_about": "Daily Fiber Intake Calculator",
        "date_published": "2025-06-01",
        "date_modified": "2026-03-23",
        "robots": "index, follow",
    },

    "accent": "#84cc16",
    "accent_rgb": "132,204,22",

    "hero": {
        "headline": "Daily Fiber Intake Calculator",
        "subtitle": "Find out exactly how much dietary fiber you need per day — based on your age and sex, using Institute of Medicine Dietary Reference Intakes.",
    },

    "breadcrumb_category": {"name": "Nutrition", "url": "/nutrition-calculators"},

    "form": {"fields": [], "submit_label": "Calculate"},

    "results": {
        "primary": {"id": "resultNumber", "unit": ""},
        "verdict_id": "resultVerdict",
        "breakdown": [],
    },

    "coach": {
        "title": "Here\u2019s what your result means",
        "container_id": "coachCard",
        "cta_text": "Have a question about your result?",
    },

    "js_file": "js/calculators/fiber_intake.js",

    "faq": [
        {"question": "How much fiber should I eat per day?", "answer": "Men under 50: 38g/day. Women under 50: 25g/day. Over 50: 30g (men), 21g (women). Most Americans get only ~16g."},
        {"question": "What happens if I eat too much fiber?", "answer": "No established upper limit from food, but increasing too fast causes bloating, gas, and cramps. Add 5g per week and drink more water."},
        {"question": "Is soluble or insoluble fiber better?", "answer": "Both are essential. Soluble (oats, beans) lowers cholesterol. Insoluble (wheat bran, vegetables) prevents constipation. Aim for ~25%/75% ratio."},
        {"question": "Can fiber help with weight loss?", "answer": "Yes. A 2019 trial found increasing fiber to 30g/day produced significant weight loss without calorie counting."},
        {"question": "Do fiber supplements count?", "answer": "Yes, but whole-food sources are preferred for the additional vitamins, minerals, and phytonutrients."},
    ],

    "sources": [
        {"text": "IOM. Dietary Reference Intakes for Energy, Carbohydrate, Fiber, Fat, etc. National Academies Press. 2005. PubMed", "url": "https://www.ncbi.nlm.nih.gov/books/NBK56990/"},
        {"text": "Threapleton DE et al. Dietary fibre and cardiovascular disease risk. BMJ. 2013. PubMed", "url": "https://pubmed.ncbi.nlm.nih.gov/24355537/"},
        {"text": "Schulze MB et al. Fiber and type 2 diabetes. Arch Intern Med. 2007. PubMed", "url": "https://pubmed.ncbi.nlm.nih.gov/17502538/"},
        {"text": "USDA FoodData Central. U.S. Department of Agriculture. PubMed", "url": "https://fdc.nal.usda.gov/"},
    ],

    "methodology": "",

    "llm_capsule": "",

    "ask_pills": ["Fiber and weight loss", "Soluble vs insoluble", "Fiber supplements", "Too much fiber?"],
    "ask_placeholder": "",
}

register("fiber_intake", FIBER_INTAKE)

TDEE = {
    "route": "/tdee-calculator",
    "override_template": "tdee_calculator_v3.html",

    "seo": {
        "page_title": "TDEE Calculator — Total Daily Energy Expenditure",
        "meta_description": "Calculate your Total Daily Energy Expenditure. See exactly how many calories you burn per day based on your age, weight, height, and activity level.",
        "og_title": "How many calories do you burn per day?",
        "og_description": "Calculate your Total Daily Energy Expenditure. See exactly how many calories you burn per day based on your age, weight, height, and activity level.",
        "schema_type": "MedicalWebPage",
        "schema_name": "TDEE Calculator",
        "schema_description": "Calculate your Total Daily Energy Expenditure using the Mifflin-St Jeor equation. Personalized calorie estimates for weight loss, maintenance, or muscle gain.",
        "schema_about": "TDEE Calculator",
        "date_published": "2025-06-01",
        "date_modified": "2026-03-20",
        "robots": "index, follow",
    },

    "accent": "#14b8a6",
    "accent_rgb": "20,184,166",

    "hero": {
        "headline": "How many <span>calories</span> do you burn?",
        "subtitle": "Your Total Daily Energy Expenditure, calculated in seconds.",
    },

    "breadcrumb_category": {"name": "Nutrition", "url": "/nutrition-calculators"},

    "form": {"fields": [], "submit_label": "Calculate"},

    "results": {
        "primary": {"id": "resultNumber", "unit": ""},
        "verdict_id": "resultVerdict",
        "breakdown": [],
    },

    "coach": {
        "title": "What this means for you",
        "container_id": "coachCard",
        "cta_text": "Have a question about your result?",
    },

    "js_file": None,

    "faq": [
        {"question": "What is TDEE?", "answer": "TDEE stands for Total Daily Energy Expenditure — the total number of calories your body burns per day. It includes your Basal Metabolic Rate (BMR) plus calories burned through physical activity, digestion, and daily movement."},
        {"question": "How accurate is the TDEE calculator?", "answer": "The Mifflin-St Jeor equation predicts BMR within 10% for approximately 82% of individuals. It is the most accurate predictive formula recommended by the American Dietetic Association. Your actual TDEE may vary based on muscle mass, genetics, and metabolic conditions."},
        {"question": "What is the difference between BMR and TDEE?", "answer": "BMR (Basal Metabolic Rate) is the calories your body burns at complete rest — breathing, circulation, cell repair. TDEE adds everything else: exercise, walking, fidgeting, digesting food. For most people, BMR is 60-75% of TDEE."},
        {"question": "How do I use TDEE for weight loss?", "answer": "Eat fewer calories than your TDEE. A deficit of 500 calories per day leads to about 1 lb (0.45 kg) of weight loss per week. Don't go below 1,200 calories (women) or 1,500 calories (men) without medical supervision."},
        {"question": "Should I eat back exercise calories?", "answer": "If your activity level already includes exercise, your TDEE accounts for those calories — don't add them again. If you chose Sedentary and track exercise separately, add back about 50-75% of burned calories, as trackers tend to overestimate."},
    ],

    "sources": [],
    "methodology": "",
    "llm_capsule": "",
    "ask_pills": [],
    "ask_placeholder": "",
}

register("tdee", TDEE)

WATER_INTAKE = {
    "route": "/water-intake-calculator",
    "override_template": "water_intake_calculator_v3.html",

    "seo": {
        "page_title": "Water Intake Calculator — Daily Hydration by Weight",
        "meta_description": "Calculate your optimal daily water intake based on weight, activity level, climate, and lifestyle factors. Personalized hydration recommendations.",
        "og_title": "Water Intake Calculator",
        "og_description": "Calculate your optimal daily water intake based on weight, activity level, climate, and lifestyle factors. Personalized hydration recommendations.",
        "schema_type": "MedicalWebPage",
        "schema_name": "Water Intake Calculator",
        "schema_description": "Calculate optimal daily water intake based on weight, activity, climate using IOM guidelines.",
        "schema_about": "Water Intake Calculator",
        "date_published": "2025-06-01",
        "date_modified": "2026-03-20",
        "robots": "index, follow",
    },

    "accent": "#14b8a6",
    "accent_rgb": "20,184,166",

    "hero": {
        "headline": "How much <span>water</span> do you need?",
        "subtitle": "Personalized by weight, activity, and climate",
    },

    "breadcrumb_category": {"name": "Nutrition", "url": "/nutrition-calculators"},

    "form": {"fields": [], "submit_label": "Calculate"},

    "results": {
        "primary": {"id": "resultNumber", "unit": ""},
        "verdict_id": "resultVerdict",
        "breakdown": [],
    },

    "coach": {
        "title": "What this means for you",
        "container_id": "coachCard",
        "cta_text": "Have a question about your result?",
    },

    "js_file": None,

    "faq": [
        {"question": "How much water should I drink per day?", "answer": "The IOM recommends about 3.7L for men and 2.7L for women from all sources including food."},
        {"question": "Does coffee count toward water intake?", "answer": "Yes. Coffee provides net positive hydration despite caffeine mild diuretic effect."},
        {"question": "Can you drink too much water?", "answer": "Yes. Excessive water can cause hyponatremia. Spread intake throughout the day."},
        {"question": "How does climate affect water needs?", "answer": "Hot climates increase water needs by 20-30% due to increased sweating."},
    ],

    "sources": [],
    "methodology": "",
    "llm_capsule": "",
    "ask_pills": [],
    "ask_placeholder": "",
}

register("water_intake", WATER_INTAKE)

KETO = {
    "route": "/keto-calculator",
    "override_template": "keto_calculator_v3.html",

    "seo": {
        "page_title": "Keto Macro Calculator — Personalized Ketogenic Diet Macros",
        "meta_description": "Calculate your ideal keto macros for fat, protein, and carbs. Personalized using Mifflin-St Jeor equation for standard, modified, or high-protein keto.",
        "og_title": "Keto Macro Calculator",
        "og_description": "Calculate your ideal keto macros for fat, protein, and carbs. Personalized using Mifflin-St Jeor equation for standard, modified, or high-protein keto.",
        "schema_type": "MedicalWebPage",
        "schema_name": "Keto Macro Calculator",
        "schema_description": "Calculate personalized ketogenic diet macros for fat, protein, and carbs.",
        "schema_about": "Keto Macro Calculator",
        "date_published": "2025-06-01",
        "date_modified": "2026-03-20",
        "robots": "index, follow",
    },

    "accent": "#14b8a6",
    "accent_rgb": "20,184,166",

    "hero": {
        "headline": "What are your <span>keto macros</span>?",
        "subtitle": "Mifflin-St Jeor formula. 3 keto approaches.",
    },

    "breadcrumb_category": {"name": "Nutrition", "url": "/nutrition-calculators"},

    "form": {"fields": [], "submit_label": "Calculate"},

    "results": {
        "primary": {"id": "resultNumber", "unit": ""},
        "verdict_id": "resultVerdict",
        "breakdown": [],
    },

    "coach": {
        "title": "What this means for you",
        "container_id": "coachCard",
        "cta_text": "Have a question about your result?",
    },

    "js_file": None,

    "faq": [
        {"question": "How many carbs can I eat on keto?", "answer": "Most keto diets limit net carbs to 20-50 grams per day to maintain ketosis."},
        {"question": "How long does it take to enter ketosis?", "answer": "Most people enter ketosis in 2-4 days. Full fat adaptation takes 2-6 weeks."},
        {"question": "What is the keto flu?", "answer": "Headache, fatigue, nausea during first weeks. Caused by electrolyte imbalances. Increase sodium and magnesium."},
        {"question": "Can I build muscle on keto?", "answer": "Yes, with adequate protein and caloric surplus. High-protein keto is recommended."},
    ],

    "sources": [],
    "methodology": "",
    "llm_capsule": "",
    "ask_pills": [],
    "ask_placeholder": "",
}

register("keto", KETO)

INTERMITTENT_FASTING = {
    "route": "/intermittent-fasting-calculator",
    "override_template": "intermittent_fasting_calculator_v3.html",

    "seo": {
        "page_title": "Intermittent Fasting Calculator — Plan Your Eating Window",
        "meta_description": "Plan your personalized intermittent fasting schedule. Get a visual daily timeline showing exactly when to eat and fast with 16:8, 18:6, 20:4 or OMAD protocols.",
        "og_title": "Intermittent Fasting Schedule Calculator",
        "og_description": "Plan your personalized intermittent fasting schedule. Get a visual daily timeline showing exactly when to eat and fast with 16:8, 18:6, 20:4 or OMAD protoc",
        "schema_type": "MedicalWebPage",
        "schema_name": "Intermittent Fasting Calculator",
        "schema_description": "Plan your personalized intermittent fasting schedule based on wake time and preferred protocol.",
        "schema_about": "Intermittent Fasting Calculator",
        "date_published": "2025-06-01",
        "date_modified": "2026-03-20",
        "robots": "index, follow",
    },

    "accent": "#14b8a6",
    "accent_rgb": "20,184,166",

    "hero": {
        "headline": "When should you <span>eat</span>?",
        "subtitle": "Build your fasting window around your life",
    },

    "breadcrumb_category": {"name": "Nutrition", "url": "/nutrition-calculators"},

    "form": {"fields": [], "submit_label": "Calculate"},

    "results": {
        "primary": {"id": "resultNumber", "unit": ""},
        "verdict_id": "resultVerdict",
        "breakdown": [],
    },

    "coach": {
        "title": "What this means for you",
        "container_id": "coachCard",
        "cta_text": "Have a question about your result?",
    },

    "js_file": None,

    "faq": [
        {"question": "What is the best IF schedule for beginners?", "answer": "16:8 is recommended for beginners. Simply skip breakfast and eat between noon and 8 PM."},
        {"question": "Can I drink coffee during fasting?", "answer": "Yes, black coffee without sugar or cream is acceptable during fasting."},
        {"question": "Does meal timing affect weight loss?", "answer": "Earlier eating windows may have slight metabolic benefits, but consistency matters most."},
        {"question": "How do I choose between 16:8 and 18:6?", "answer": "Start with 16:8 for 2-3 weeks, then try 18:6 if comfortable."},
    ],

    "sources": [],
    "methodology": "",
    "llm_capsule": "",
    "ask_pills": [],
    "ask_placeholder": "",
}

register("intermittent_fasting", INTERMITTENT_FASTING)

STARBUCKS_NUTRITION = {
    "route": "/starbucks-nutrition-calculator",
    "override_template": "starbucks_nutrition_calculator_v3.html",

    "seo": {
        "page_title": "Starbucks Nutrition Calculator — Calories, Sugar & Caffeine",
        "meta_description": "Calculate the exact nutrition in your Starbucks drink. Customize milk, syrup, size, and toppings to see calories, sugar, fat, protein, and caffeine.",
        "og_title": "What's in your Starbucks order?",
        "og_description": "Build your custom Starbucks drink and see exact calories, sugar, fat, protein, and caffeine.",
        "schema_type": "WebPage",
        "schema_name": "Starbucks Nutrition Calculator",
        "schema_description": "Calculate nutrition for any Starbucks drink with custom milk, syrups, and toppings.",
        "schema_about": "Starbucks Nutrition Calculator",
        "date_published": "2025-06-01",
        "date_modified": "2026-03-20",
        "robots": "index, follow",
    },

    "accent": "#14b8a6",
    "accent_rgb": "20,184,166",

    "hero": {
        "headline": "What's in your <span>Starbucks</span>?",
        "subtitle": "Build your drink. See the real numbers.",
    },

    "breadcrumb_category": {"name": "Nutrition", "url": "/nutrition-calculators"},

    "form": {"fields": [], "submit_label": "Calculate"},

    "results": {
        "primary": {"id": "resultNumber", "unit": ""},
        "verdict_id": "resultVerdict",
        "breakdown": [],
    },

    "coach": {
        "title": "What this means for you",
        "container_id": "coachCard",
        "cta_text": "Have a question about your result?",
    },

    "js_file": None,

    "faq": [
        {"question": "How many calories are in a Starbucks latte?", "answer": "A Grande Caffe Latte with 2% milk has approximately 190 calories, 18g sugar, 7g fat, and 13g protein."},
        {"question": "Which Starbucks drink has the most caffeine?", "answer": "A Grande Americano has the most caffeine at 225mg, followed by Cold Brew (205mg) and Iced Coffee (165mg)."},
        {"question": "How much sugar is in a Frappuccino?", "answer": "A Grande Coffee Frappuccino has about 54g of sugar (nearly 14 teaspoons). That's more than a can of Coca-Cola."},
    ],

    "sources": [],
    "methodology": "",
    "llm_capsule": "",
    "ask_pills": [],
    "ask_placeholder": "",
}

register("starbucks_nutrition", STARBUCKS_NUTRITION)

SUBWAY_CALORIE = {
    "route": "/subway-calorie-calculator",
    "override_template": "overrides/subway.html",

    "seo": {
        "page_title": "Subway Calorie Calculator — Nutrition Facts for Every Sandwich",
        "meta_description": "Build your Subway sandwich and see real-time calories, protein, carbs, fat, fiber, and sodium. Covers all breads, proteins, cheeses, veggies, and sauces.",
        "og_title": "Subway Calorie Calculator",
        "og_description": "Customize any Subway sandwich and instantly see the nutrition breakdown. Choose your bread, protein, cheese, veggies, and sauces.",
        "schema_type": "WebPage",
        "schema_name": "Subway Calorie Calculator",
        "schema_description": "Build your Subway sandwich and see real-time calories, protein, carbs, fat, fiber, and sodium for 6-inch and footlong orders.",
        "schema_about": "Subway Calorie Calculator",
        "date_published": "2025-06-01",
        "date_modified": "2026-03-20",
        "robots": "index, follow",
    },

    "accent": "#14b8a6",
    "accent_rgb": "20,184,166",

    "hero": {
        "headline": "Build your <span>Subway</span> order",
        "subtitle": "Tap ingredients to see real-time nutrition",
    },

    "breadcrumb_category": {"name": "Nutrition", "url": "/nutrition-calculators"},

    "form": {"fields": [], "submit_label": "Calculate"},

    "results": {
        "primary": {"id": "resultNumber", "unit": ""},
        "verdict_id": "resultVerdict",
        "breakdown": [],
    },

    "coach": {
        "title": "What this means for you",
        "container_id": "coachCard",
        "cta_text": "Have a question about your result?",
    },

    "js_file": None,

    "faq": [
        {"question": "How many calories are in a Subway footlong?", "answer": "A Subway footlong ranges from roughly 440 to 1,200+ calories depending on bread, protein, cheese, and sauce choices."},
        {"question": "What is the lowest-calorie Subway sandwich?", "answer": "The 6-inch Veggie Delite (~210 cal) is the lowest, followed by Oven Roasted Turkey and Black Forest Ham (~270 cal each)."},
        {"question": "Which Subway sauce has the most calories?", "answer": "Mayonnaise and Ranch at 110 calories per serving. Chipotle Southwest is close at 100 cal. Yellow Mustard is only 5 cal."},
        {"question": "Does a footlong have exactly double the calories of a 6-inch?", "answer": "Almost. Bread and protein double, but condiments (cheese, sauces) stay the same, so the total is slightly less than 2x."},
        {"question": "How much sodium is in a Subway sandwich?", "answer": "A 6-inch sandwich typically has 700-1,200 mg sodium. Footlongs can exceed 2,000 mg, approaching the FDA daily limit of 2,300 mg."},
    ],

    "sources": [],
    "methodology": "",
    "llm_capsule": "",
    "ask_pills": [],
    "ask_placeholder": "",
}

register("subway_calorie", SUBWAY_CALORIE)

GLYCEMIC_INDEX = {
    "route": "/glycemic-index-calculator",
    "override_template": "glycemic_index_calculator_v3.html",

    "seo": {
        "page_title": "Glycemic Index Calculator — GI Lookup and Glycemic Load",
        "meta_description": "Look up glycemic index and calculate glycemic load of 100+ foods.",
        "og_title": "Glycemic Index Calculator",
        "og_description": "Look up glycemic index and calculate glycemic load of 100+ foods.",
        "schema_type": "MedicalWebPage",
        "schema_name": "Glycemic Index Calculator",
        "schema_description": "Look up glycemic index and calculate glycemic load of 100+ foods.",
        "schema_about": "Glycemic Index Calculator",
        "date_published": "2025-06-01",
        "date_modified": "2026-03-20",
        "robots": "noindex, nofollow",
    },

    "accent": "#14b8a6",
    "accent_rgb": "20,184,166",

    "hero": {
        "headline": "What's the <span>glycemic</span> impact?",
        "subtitle": "Look up glycemic index and calculate glycemic load of 100+ foods.",
    },

    "breadcrumb_category": {"name": "Nutrition", "url": "/nutrition-calculators"},

    "form": {"fields": [], "submit_label": "Calculate"},

    "results": {
        "primary": {"id": "resultNumber", "unit": ""},
        "verdict_id": "resultVerdict",
        "breakdown": [],
    },

    "coach": {
        "title": "What this means for you",
        "container_id": "coachCard",
        "cta_text": "Have a question about your result?",
    },

    "js_file": None,

    "faq": [
        {"question": "What is glycemic index?", "answer": "GI ranks foods 0-100 by blood sugar impact. Low (<55): slow rise. High (>70): rapid spike."},
        {"question": "What is glycemic load?", "answer": "GL = (GI x carbs per serving) / 100. Accounts for both quality and quantity. Low GL: <10."},
        {"question": "Does cooking affect GI?", "answer": "Yes. Cooking increases GI. Al dente pasta has lower GI. Cooling creates resistant starch."},
        {"question": "Are all low-GI foods healthy?", "answer": "Not necessarily. Ice cream has moderate GI due to fat. Consider overall nutritional quality."},
    ],

    "sources": [],
    "methodology": "",
    "llm_capsule": "",
    "ask_pills": [],
    "ask_placeholder": "",
}

register("glycemic_index", GLYCEMIC_INDEX)
