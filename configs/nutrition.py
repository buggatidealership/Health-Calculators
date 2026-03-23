from configs import register

FASTING_WEIGHT_LOSS = {
    "route": "/fasting-weight-loss-calculator",
    "override_template": "fasting_weight_loss_v3.html",

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

    "form": {"fields": [], "submit_label": "Calculate"},

    "results": {
        "primary": {"id": "resultNumber", "unit": "total weight loss in 4 weeks"},
        "verdict_id": None,
        "breakdown": [],
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
