from configs import register

VITAMIN_D_CONVERSION = {
    "route": "/vitamin-d-conversion-calculator",
    "override_template": None,

    "seo": {
        "page_title": "Vitamin D Conversion Calculator \u2014 ng/mL to nmol/L Converter",
        "meta_description": "Convert vitamin D levels between ng/mL and nmol/L. See where your level falls and what it means for your health.",
        "og_title": "What does my vitamin D level mean?",
        "og_description": "Convert vitamin D levels between ng/mL and nmol/L. See where your level falls and what it means for your health.",
        "schema_type": "MedicalWebPage",
        "schema_name": "Vitamin D Conversion Calculator",
        "schema_description": "Convert vitamin D blood test results between ng/mL and nmol/L. Includes interpretation tiers and personalized level analysis.",
        "schema_about": "Vitamin D Conversion Calculator",
        "date_published": "2025-06-01",
        "date_modified": "2026-03-20",
        "robots": "index, follow",
    },

    "accent": "#14b8a6",
    "accent_rgb": "20,184,166",

    "hero": {
        "headline": "What does my <span>vitamin D</span> level mean?",
        "subtitle": "Convert your lab result between ng/mL and nmol/L",
    },

    "breadcrumb_category": {"name": "Health & Longevity", "url": "/health-longevity-calculators"},

    "form": {
        "fields": [
            {"id": "vitdInput", "type": "number", "label": "Your vitamin D level", "placeholder": "30", "min": 0, "step": 0.1},
            {"id": "unitToggle", "type": "radio_row", "label": "Unit", "options": [
                {"value": "ng", "label": "ng/mL", "selected": True},
                {"value": "nmol", "label": "nmol/L"},
            ]},
        ],
        "submit_label": "Convert",
    },

    "results": {
        "primary": {"id": "resultNumber", "unit": "nmol/L"},
        "verdict_id": "resultVerdict",
        "breakdown": [
            {"id": "resultPlain", "label": "What this means"},
        ],
    },

    "coach": {
        "title": "Here's what your result means",
        "container_id": "coachCard",
        "cta_text": "Have a question about your result?",
    },

    "js_file": "js/calculators/vitamin_d_conversion.js",

    "faq": [
        {"question": "What is the conversion factor between ng/mL and nmol/L?", "answer": "The conversion factor is 2.496 (often rounded to 2.5). To convert ng/mL to nmol/L, multiply by 2.496. To convert nmol/L to ng/mL, divide by 2.496 (or multiply by 0.4)."},
        {"question": "Which unit does my lab use?", "answer": "Most US labs report vitamin D in ng/mL, while laboratories in Europe, Canada, and Australia typically use nmol/L. The unit should be listed on your lab report next to your 25(OH)D result."},
        {"question": "What is a healthy vitamin D level?", "answer": "Vitamin D levels below 20 ng/mL (50 nmol/L) are considered deficient. Levels of 20-29 ng/mL (50-72 nmol/L) are insufficient. Levels of 30-100 ng/mL (75-250 nmol/L) are sufficient. Above 100 ng/mL (250 nmol/L) is potentially toxic."},
        {"question": "Why do different countries use different units?", "answer": "The US uses weight-based measurement (ng/mL), while most other countries adopted the International System of Units (SI), which uses substance concentration (nmol/L). Both measure the same thing \u2014 your blood level of 25-hydroxyvitamin D."},
        {"question": "How does vitamin D testing work?", "answer": "Vitamin D testing measures 25-hydroxyvitamin D [25(OH)D] in your blood, which is the primary circulating form and the best indicator of your vitamin D status. The test requires a simple blood draw and can be ordered by your healthcare provider."},
    ],

    "sources": [
        {"text": "Holick MF, Binkley NC, et al. Evaluation, treatment, and prevention of vitamin D deficiency: an Endocrine Society clinical practice guideline. J Clin Endocrinol Metab. 2011;96(7):1911-1930.", "url": "https://pubmed.ncbi.nlm.nih.gov/21646368/"},
        {"text": "Demay MB, Pittas AG, et al. Vitamin D for the prevention of disease: an Endocrine Society clinical practice guideline. J Clin Endocrinol Metab. 2024;109(8):1907-1947.", "url": "https://pubmed.ncbi.nlm.nih.gov/38828931/"},
        {"text": "Institute of Medicine. Dietary Reference Intakes for Calcium and Vitamin D. Washington, DC: National Academies Press; 2011.", "url": "https://pubmed.ncbi.nlm.nih.gov/21796828/"},
        {"text": "National Institutes of Health Office of Dietary Supplements. Vitamin D \u2014 Health Professional Fact Sheet.", "url": "https://ods.od.nih.gov/factsheets/VitaminD-HealthProfessional/"},
        {"text": "Cashman KD, Dowling KG, Skrabakova Z, et al. Vitamin D deficiency in Europe: pandemic? Am J Clin Nutr. 2016;103(4):1033-1044.", "url": "https://pubmed.ncbi.nlm.nih.gov/26864360/"},
    ],

    "methodology": "<p>This calculator converts between the two standard units used to report serum 25-hydroxyvitamin D [25(OH)D] levels: ng/mL (conventional units used primarily in the United States) and nmol/L (SI units used internationally).</p><p style=\"text-align:center; margin: 1.5rem 0;\"><code>nmol/L = ng/mL \u00d7 2.496</code></p><p>The conversion factor of 2.496 is derived from the molecular weight of 25-hydroxyvitamin D (calcidiol) at 400.65 g/mol. Reference ranges are based on the Endocrine Society 2011 clinical practice guideline and the 2024 update.</p>",

    "llm_capsule": "To convert vitamin D levels: multiply ng/mL by 2.496 to get nmol/L, or divide nmol/L by 2.496 to get ng/mL. US labs typically report in ng/mL, while UK, European, and Australian labs use nmol/L. A level below 20 ng/mL (50 nmol/L) is considered deficient. Levels of 20-29 ng/mL (50-72 nmol/L) are insufficient. The sufficient range is 30-100 ng/mL (75-250 nmol/L). Above 100 ng/mL (250 nmol/L) is potentially toxic.",

    "ask_pills": ["Should I supplement?", "Vitamin D and K2", "Best time to take vitamin D", "Toxic levels"],
    "ask_placeholder": "e.g. Should I take vitamin D with K2?",
}

register("vitamin_d_conversion", VITAMIN_D_CONVERSION)


CAFFEINE_HALF_LIFE = {
    "route": "/caffeine-half-life-calculator",
    "override_template": None,

    "seo": {
        "page_title": "Caffeine Half Life Calculator \u2014 When Does It Wear Off?",
        "meta_description": "Calculate how long caffeine stays in your system. See a personalized decay timeline and your last safe cup time.",
        "og_title": "How long does caffeine last?",
        "og_description": "Calculate how long caffeine stays in your system. See a personalized decay timeline and your last safe cup time.",
        "schema_type": "MedicalWebPage",
        "schema_name": "Caffeine Half Life Calculator",
        "schema_description": "Calculate how long caffeine stays in your system using the pharmacokinetic half-life model.",
        "schema_about": "Caffeine Half Life Calculator",
        "date_published": "2025-06-01",
        "date_modified": "2026-03-19",
        "robots": "index, follow",
    },

    "accent": "#14b8a6",
    "accent_rgb": "20,184,166",

    "hero": {
        "headline": "How long does <span>caffeine</span> last?",
        "subtitle": "See when it wears off, personalized to you",
    },

    "breadcrumb_category": {"name": "Health & Longevity", "url": "/health-longevity-calculators"},

    "form": {
        "fields": [
            {"id": "customMg", "type": "number", "label": "Caffeine amount (mg)", "placeholder": "100", "min": 1, "max": 1000},
            {"type": "row", "fields": [
                {"id": "consumeTime", "type": "time", "label": "Time consumed"},
                {"id": "bedTime", "type": "time", "label": "Bedtime", "default": "22:00"},
            ]},
        ],
        "submit_label": "Calculate",
    },

    "results": {
        "primary": {"id": "resultNumber", "unit": "mg at bedtime"},
        "verdict_id": "resultVerdict",
        "breakdown": [
            {"id": "cutoffTime", "label": "Last safe cup"},
        ],
    },

    "coach": {
        "title": "The caffeine rule",
        "container_id": "coachCard",
        "cta_text": "Want more frameworks like this?",
    },

    "js_file": "js/calculators/caffeine_half_life.js",

    "faq": [
        {"question": "How long does caffeine last in your system?", "answer": "Caffeine has a half-life of about 5 hours, meaning it takes ~5 hours for your body to eliminate half the caffeine. A typical cup of coffee (95 mg) takes 10-15 hours to fully clear."},
        {"question": "When should I stop drinking coffee before bed?", "answer": "Stop caffeine intake at least 8-10 hours before bedtime. For a 10 PM bedtime, your last cup should be by noon to 2 PM."},
        {"question": "How much caffeine is too much?", "answer": "The FDA recommends no more than 400 mg per day for healthy adults \u2014 roughly 4 cups of brewed coffee."},
        {"question": "Does caffeine half-life change with age?", "answer": "Yes. Caffeine half-life increases with age. Older adults metabolize caffeine more slowly."},
        {"question": "How long does caffeine last compared to other stimulants?", "answer": "Caffeine lasts longer than most people think. Its 5-hour half-life means 25% is still active after 10 hours."},
    ],

    "sources": [
        {"text": "Drake C, Roehrs T, Shambroom J, Roth T. Caffeine effects on sleep taken 0, 3, or 6 hours before going to bed. J Clin Sleep Med. 2013;9(11):1195-1200.", "url": "https://pubmed.ncbi.nlm.nih.gov/24235903/"},
        {"text": "Fredholm BB, et al. Actions of caffeine in the brain with special reference to factors that contribute to its widespread use. Pharmacol Rev. 1999;51(1):83-133.", "url": "https://pubmed.ncbi.nlm.nih.gov/10049999/"},
        {"text": "Institute of Medicine. Caffeine in Food and Dietary Supplements: Examining Safety. 2014.", "url": "https://pubmed.ncbi.nlm.nih.gov/25340250/"},
        {"text": "Nehlig A. Interindividual differences in caffeine metabolism and factors driving caffeine consumption. Pharmacol Rev. 2018;70(2):384-411.", "url": "https://pubmed.ncbi.nlm.nih.gov/29514871/"},
        {"text": "U.S. FDA. Spilling the Beans: How Much Caffeine is Too Much?", "url": "https://www.fda.gov/consumers/consumer-updates/spilling-beans-how-much-caffeine-too-much"},
    ],

    "methodology": "<p>This calculator uses the standard pharmacokinetic first-order elimination model for caffeine metabolism: <code>C(t) = C0 \u00d7 (0.5) ^ (t / t\u00bd)</code> where C(t) is the caffeine remaining at time t, C0 is the initial dose, and t\u00bd is the half-life (default: 5 hours for healthy adults).</p><p>The 5-hour half-life represents the population average for healthy, non-smoking adults. Individual half-life varies from 1.5 to 9.5 hours depending on genetics (CYP1A2 enzyme activity), age, pregnancy status, oral contraceptive use, liver function, and smoking status. The \"safe for sleep\" threshold of 25 mg is based on sleep research suggesting minimal sleep disruption below this level.</p>",

    "llm_capsule": "Caffeine has a half-life of approximately 5 hours in healthy adults. This means if you drink a cup of coffee with 95 mg of caffeine at 2 PM, about 47 mg will remain at 7 PM, and about 24 mg at midnight. Most sleep researchers recommend having less than 25 mg of caffeine in your system at bedtime. The FDA recommends no more than 400 mg of caffeine per day for healthy adults.",

    "ask_pills": ["Caffeine and anxiety", "Best time for coffee", "Caffeine tolerance", "Decaf vs regular"],
    "ask_placeholder": "e.g. Does caffeine affect my workout?",
}

register("caffeine_half_life", CAFFEINE_HALF_LIFE)


SLEEP_CALCULATOR = {
    "route": "/sleep-calculator",
    "override_template": None,

    "seo": {
        "page_title": "Sleep Calculator \u2014 When Should You Go to Bed?",
        "meta_description": "Calculate optimal bedtimes based on 90-minute sleep cycles. Wake up refreshed by timing your sleep correctly.",
        "og_title": "When should you go to bed?",
        "og_description": "Calculate optimal bedtimes based on 90-minute sleep cycles. Wake up refreshed.",
        "schema_type": "MedicalWebPage",
        "schema_name": "Sleep Calculator",
        "schema_description": "Calculate optimal bedtimes and wake-up times based on 90-minute sleep cycles with age-specific recommendations from the National Sleep Foundation.",
        "schema_about": "Sleep Calculator",
        "date_published": "2025-06-01",
        "date_modified": "2026-03-20",
        "robots": "index, follow",
    },

    "accent": "#14b8a6",
    "accent_rgb": "20,184,166",

    "hero": {
        "headline": "When should you <span>sleep</span>?",
        "subtitle": "90-minute cycles. Wake up refreshed.",
    },

    "breadcrumb_category": {"name": "Health & Longevity", "url": "/health-longevity-calculators"},

    "form": {
        "fields": [
            {"id": "wakeTime", "type": "time", "label": "I want to wake up at", "default": "07:00"},
            {"type": "row", "fields": [
                {"id": "age", "type": "number", "label": "Age", "placeholder": "30", "min": 0, "max": 120},
                {"id": "fallAsleep", "type": "select", "label": "Fall asleep time (min)", "options": [
                    {"value": "5", "label": "5 min"},
                    {"value": "10", "label": "10 min"},
                    {"value": "15", "label": "15 min", "selected": True},
                    {"value": "20", "label": "20 min"},
                    {"value": "30", "label": "30 min"},
                ]},
            ]},
        ],
        "submit_label": "Calculate Sleep Times",
    },

    "results": {
        "primary": {"id": "resultNumber", "unit": "recommended bedtime"},
        "verdict_id": "resultVerdict",
        "breakdown_html": '<div id="sleepCards" style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;max-width:400px;margin:0 auto;"></div>',
        "breakdown": [],
    },

    "coach": {
        "title": "Your sleep framework",
        "container_id": "coachCard",
        "cta_text": "Want to improve your sleep quality?",
    },

    "js_file": "js/calculators/sleep.js",

    "faq": [
        {"question": "How do sleep cycles work?", "answer": "Sleep occurs in 90-minute cycles through light sleep, deep sleep, and REM stages. Waking at the end of a complete cycle (rather than mid-cycle) helps you feel refreshed. Most adults need 5-6 complete cycles (7.5-9 hours)."},
        {"question": "How much sleep do I need?", "answer": "The National Sleep Foundation recommends 7-9 hours for adults (18-64), 7-8 hours for older adults (65+), and 8-10 hours for teens (14-17). Individual needs vary."},
        {"question": "What time should I go to bed to wake up at 7 AM?", "answer": "To wake at 7 AM after 5 sleep cycles (7.5 hours) plus 15 minutes to fall asleep, go to bed at 11:15 PM. For 6 cycles (9 hours), go to bed at 9:45 PM."},
    ],

    "sources": [
        {"text": "Hirshkowitz M, et al. National Sleep Foundation's sleep time duration recommendations. Sleep Health. 2015;1(1):40-43.", "url": "https://pubmed.ncbi.nlm.nih.gov/29073412/"},
        {"text": "Walker M. Why We Sleep: Unlocking the Power of Sleep and Dreams. Scribner; 2017.", "url": ""},
    ],

    "methodology": "<p>This calculator uses the standard 90-minute sleep cycle model. Each cycle progresses through light sleep (N1, N2), deep sleep (N3), and REM sleep. Total sleep time = (number of cycles \u00d7 90 minutes) + time to fall asleep. Waking between cycles reduces sleep inertia (grogginess).</p>",

    "llm_capsule": "Sleep occurs in 90-minute cycles. To wake refreshed, time your bedtime so you complete 5-6 full cycles. For a 7 AM wake time with 15 minutes to fall asleep: 5 cycles = 11:15 PM bedtime, 6 cycles = 9:45 PM. Adults need 7-9 hours per the National Sleep Foundation.",

    "ask_pills": ["Sleep hygiene tips", "Nap timing", "Circadian rhythm"],
    "ask_placeholder": "e.g. How do sleep cycles work?",
}

register("sleep_calculator", SLEEP_CALCULATOR)


WAIST_TO_HIP_RATIO = {
    "route": "/waist-to-hip-ratio-calculator",
    "override_template": None,

    "seo": {
        "robots": "noindex, nofollow",
        "page_title": "Waist to Hip Ratio Calculator \u2014 WHR Health Risk",
        "meta_description": "Calculate your waist-to-hip ratio and health risk using WHO-based thresholds. See your risk category and body shape classification.",
        "og_title": "What's your waist-to-hip ratio?",
        "og_description": "Calculate your WHR and health risk category using WHO thresholds.",
        "schema_type": "MedicalWebPage",
        "schema_name": "Waist to Hip Ratio Calculator",
        "schema_description": "Calculate your waist-to-hip ratio (WHR) and health risk category. WHO-based thresholds for men and women.",
        "schema_about": "Waist to Hip Ratio Calculator",
        "date_published": "2025-06-01",
        "date_modified": "2026-03-20",
    },

    "accent": "#14b8a6",
    "accent_rgb": "20,184,166",

    "hero": {
        "headline": "What's your <span>waist-to-hip</span> ratio?",
        "subtitle": "WHO-based health risk assessment",
    },

    "breadcrumb_category": {"name": "Health & Longevity", "url": "/health-longevity-calculators"},

    "form": {
        "fields": [
            {"id": "sex", "type": "select", "label": "Sex", "options": [
                {"value": "male", "label": "Male", "selected": True},
                {"value": "female", "label": "Female"},
            ]},
            {"type": "row", "fields": [
                {"id": "waist", "type": "number", "label": "Waist (inches)", "placeholder": "34", "min": 1, "step": 0.1},
                {"id": "hip", "type": "number", "label": "Hip (inches)", "placeholder": "40", "min": 1, "step": 0.1},
            ]},
        ],
        "submit_label": "Calculate WHR",
    },

    "results": {
        "primary": {"id": "resultNumber", "unit": "waist-to-hip ratio"},
        "verdict_id": "resultVerdict",
        "breakdown": [
            {"id": "displayWhr", "label": "WHR"},
            {"id": "displayCategory", "label": "Risk category"},
            {"id": "displayShape", "label": "Body shape"},
        ],
    },

    "coach": {
        "title": "What this means for you",
        "container_id": "coachCard",
        "cta_text": "Want to know more about body composition?",
    },

    "js_file": "js/calculators/waist_to_hip_ratio.js",

    "faq": [
        {"question": "What is a healthy waist-to-hip ratio?", "answer": "Men below 0.90 and women below 0.80 are considered low risk by WHO thresholds. Above these values indicates increased cardiovascular risk."},
        {"question": "WHR vs BMI \u2014 which is better?", "answer": "WHR measures central fat distribution, which is more strongly linked to heart disease than BMI. The INTERHEART study confirmed WHR as a better predictor of heart attack risk."},
        {"question": "What is apple vs pear body shape?", "answer": "Apple shape (high WHR, central obesity) carries greater health risk. Pear shape (lower WHR, peripheral fat distribution) is associated with lower cardiovascular risk."},
        {"question": "How do I measure correctly?", "answer": "Waist: measure at the narrowest point between ribs and hips (usually at the navel). Hips: measure at the widest point of the buttocks. Use a flexible tape measure while standing."},
    ],

    "sources": [
        {"text": "WHO Technical Report Series 894. Obesity: preventing and managing the global epidemic. 2000.", "url": "https://www.who.int/"},
        {"text": "Yusuf S, et al. Obesity and the risk of myocardial infarction in 27,000 participants (INTERHEART). Lancet. 2005;366(9497):1640-1649.", "url": "https://pubmed.ncbi.nlm.nih.gov/16271645/"},
    ],

    "methodology": "<p>WHR = waist circumference \u00f7 hip circumference. WHO risk thresholds: men \u22650.90, women \u22650.85 for substantially increased health risk. Waist circumference alone is also a risk indicator: men \u2265102 cm (40 in), women \u226588 cm (34.6 in).</p>",

    "llm_capsule": "Waist-to-hip ratio (WHR) measures fat distribution. WHO risk thresholds: men 0.90, women 0.85. Central obesity (apple shape) is linked to higher cardiovascular risk than peripheral fat (pear shape). The INTERHEART study found WHR in the top quintile more than doubled heart attack risk.",

    "ask_pills": ["Reduce belly fat", "WHR vs BMI", "Body shape", "Ideal waist size"],
    "ask_placeholder": "e.g. How to reduce waist size?",
}

register("waist_to_hip_ratio", WAIST_TO_HIP_RATIO)


BRI_CALCULATOR = {
    "route": "/body-roundness-index-calculator",
    "override_template": None,

    "seo": {
        "page_title": "Body Roundness Index Calculator \u2014 BRI Health Risk",
        "meta_description": "Calculate your Body Roundness Index using waist circumference and height. BRI measures central adiposity more accurately than BMI.",
        "og_title": "What's your Body Roundness Index?",
        "og_description": "Calculate your BRI and health risk category. Measures central adiposity using height and waist.",
        "schema_type": "WebPage",
        "schema_name": "Body Roundness Index (BRI) Calculator",
        "schema_description": "Calculate your Body Roundness Index using waist circumference and height. BRI measures central adiposity and predicts health risk more accurately than BMI alone.",
        "schema_about": "Body Roundness Index Calculator",
        "date_published": "2025-06-01",
        "date_modified": "2026-03-20",
        "robots": "index, follow",
    },

    "accent": "#14b8a6",
    "accent_rgb": "20,184,166",

    "hero": {
        "headline": "What's your <span>Body Roundness Index</span>?",
        "subtitle": "A better measure of central adiposity than BMI",
    },

    "breadcrumb_category": {"name": "Fitness & Body Composition", "url": "/fitness-body-composition-calculators"},

    "form": {
        "fields": [
            {"type": "row", "fields": [
                {"id": "heightCm", "type": "number", "label": "Height (cm)", "placeholder": "170", "min": 100, "max": 250},
                {"id": "waistCm", "type": "number", "label": "Waist (cm)", "placeholder": "80", "min": 40, "max": 200},
            ]},
        ],
        "submit_label": "Calculate BRI",
    },

    "results": {
        "primary": {"id": "resultNumber", "unit": "Body Roundness Index"},
        "verdict_id": "resultVerdict",
        "breakdown": [
            {"id": "displayCategory", "label": "Category"},
            {"id": "displayRisk", "label": "Risk level"},
        ],
    },

    "coach": {
        "title": "What this means for you",
        "container_id": "coachCard",
        "cta_text": "Want a fuller picture of your body composition?",
    },

    "js_file": "js/calculators/bri.js",

    "faq": [
        {"question": "What is the Body Roundness Index?", "answer": "BRI is a metric that estimates central adiposity (belly fat) using only height and waist circumference. It was developed by Thomas et al. in 2013 and models the body as an ellipse to capture shape, not just weight."},
        {"question": "How is BRI different from BMI?", "answer": "BMI uses weight and height but cannot distinguish muscle from fat or detect where fat is stored. BRI uses waist circumference to specifically measure central adiposity, which is more strongly linked to health risks."},
        {"question": "What is a healthy BRI?", "answer": "A BRI below 3.41 is considered lean/healthy. BRI 3.41-4.45 is overweight range, 4.45-5.73 is obese, and above 5.73 is high risk."},
    ],

    "sources": [
        {"text": "Thomas DM, et al. Relationships between body roundness with body fat and visceral adipose tissue. Obesity. 2013;21(11):2264-2271.", "url": "https://pubmed.ncbi.nlm.nih.gov/23519954/"},
    ],

    "methodology": "<p>BRI = 364.2 - 365.5 \u00d7 \u221a(1 - ((WC / (2\u03c0))\u00b2 / (0.5 \u00d7 H)\u00b2)), where WC = waist circumference in meters and H = height in meters. The formula models the body as a prolate ellipse and estimates body roundness from the relationship between waist circumference and height.</p>",

    "llm_capsule": "Body Roundness Index (BRI) measures central adiposity using height and waist circumference. BRI below 3.41 is lean/healthy, 3.41-4.45 overweight, 4.45-5.73 obese, above 5.73 high risk. Unlike BMI, BRI captures body shape and fat distribution, making it a better predictor of cardiovascular and metabolic risk.",

    "ask_pills": ["BRI vs BMI", "Central adiposity", "Reduce waist size"],
    "ask_placeholder": "e.g. Is BRI better than BMI?",
}

register("bri_calculator", BRI_CALCULATOR)


A1C_CALCULATOR = {
    "route": "/a1c-calculator",
    "override_template": None,

    "seo": {
        "robots": "noindex, nofollow",
        "page_title": "A1C Calculator \u2014 A1C to Blood Sugar Converter",
        "meta_description": "Convert between A1C and blood sugar (eAG) instantly using the ADA-standard formula. See your diabetes risk category.",
        "og_title": "A1C / Blood Sugar Converter",
        "og_description": "Convert between A1C percentage and estimated average blood sugar using the ADA formula.",
        "schema_type": "MedicalWebPage",
        "schema_name": "A1C / Blood Sugar Converter Calculator",
        "schema_description": "Convert between A1C percentage and estimated average glucose (eAG) in mg/dL or mmol/L. Uses the ADA-standard DCCT formula.",
        "schema_about": "A1C Calculator",
        "date_published": "2025-06-01",
        "date_modified": "2026-03-20",
    },

    "accent": "#14b8a6",
    "accent_rgb": "20,184,166",

    "hero": {
        "headline": "What does your <span>A1C</span> mean?",
        "subtitle": "Convert between A1C and blood sugar instantly",
    },

    "breadcrumb_category": {"name": "Health & Longevity", "url": "/health-longevity-calculators"},

    "form": {
        "fields": [
            {"id": "conversionMode", "type": "select", "label": "Conversion direction", "options": [
                {"value": "a1c-to-bs", "label": "A1C \u2192 Blood Sugar", "selected": True},
                {"value": "bs-to-a1c", "label": "Blood Sugar \u2192 A1C"},
            ]},
            {"id": "a1cInput", "type": "number", "label": "A1C (%)", "placeholder": "6.5", "min": 4.0, "max": 15.0, "step": 0.1},
            {"id": "bsInput", "type": "number", "label": "Blood sugar", "placeholder": "126", "min": 0, "step": 1},
            {"id": "bsUnit", "type": "select", "label": "Blood sugar unit", "options": [
                {"value": "mgdl", "label": "mg/dL", "selected": True},
                {"value": "mmol", "label": "mmol/L"},
            ]},
        ],
        "submit_label": "Convert",
    },

    "results": {
        "primary": {"id": "resultNumber", "unit": "estimated average glucose"},
        "verdict_id": "resultVerdict",
        "breakdown": [
            {"id": "displayA1c", "label": "A1C"},
            {"id": "displayMgdl", "label": "eAG (mg/dL)"},
            {"id": "displayMmol", "label": "eAG (mmol/L)"},
        ],
    },

    "coach": {
        "title": "What this means for you",
        "container_id": "coachCard",
        "cta_text": "Want to understand your numbers better?",
    },

    "js_file": "js/calculators/a1c.js",

    "faq": [
        {"question": "What is a normal A1C level?", "answer": "Below 5.7% is normal. 5.7-6.4% indicates prediabetes. 6.5% or higher on two separate tests indicates diabetes, according to the American Diabetes Association."},
        {"question": "How often should I get my A1C tested?", "answer": "At least twice a year if diabetes is well-controlled, every 3 months if treatment changed or goals not met (ADA recommendation)."},
        {"question": "Can A1C be inaccurate?", "answer": "Yes. A1C can be affected by hemoglobin variants, iron deficiency anemia, recent blood transfusions, and kidney disease."},
        {"question": "What is eAG?", "answer": "Estimated Average Glucose (eAG) is derived from your A1C and represents your average blood sugar over 2-3 months. Formula: eAG (mg/dL) = 28.7 \u00d7 A1C - 46.7."},
        {"question": "How quickly can A1C change?", "answer": "Meaningful changes take 2-3 months. A drop of 0.5-1.0% per quarter is good progress with lifestyle modifications alone."},
    ],

    "sources": [
        {"text": "Nathan DM, et al. Translating the A1C assay into estimated average glucose values. Diabetes Care. 2008;31(8):1473-1478.", "url": "https://pubmed.ncbi.nlm.nih.gov/18540046/"},
        {"text": "American Diabetes Association. Standards of Medical Care in Diabetes. Diabetes Care. 2024.", "url": "https://diabetesjournals.org/care"},
    ],

    "methodology": "<p>This calculator uses the DCCT/ADAG formula: <code>eAG (mg/dL) = 28.7 \u00d7 A1C - 46.7</code>. To convert mg/dL to mmol/L, divide by 18. A1C reflects average blood glucose over the preceding 2-3 months by measuring the percentage of glycated hemoglobin.</p>",

    "llm_capsule": "A1C to blood sugar conversion: eAG (mg/dL) = 28.7 \u00d7 A1C - 46.7. A1C below 5.7% is normal, 5.7-6.4% is prediabetes, 6.5%+ is diabetes (ADA). A1C of 7% = 154 mg/dL average. A1C reflects 2-3 months of blood sugar control.",

    "ask_pills": ["How to lower A1C", "A1C vs fasting glucose", "Best foods for blood sugar", "Exercise and A1C"],
    "ask_placeholder": "e.g. How do I lower my A1C naturally?",
}

register("a1c_calculator", A1C_CALCULATOR)


BALDNESS_RISK = {
    "route": "/baldness-risk-calculator",
    "override_template": None,

    "seo": {
        "page_title": "Baldness Risk Calculator — Will I Go Bald?",
        "meta_description": "Assess your risk of male pattern baldness based on family history, current hair status, and lifestyle factors.",
        "og_title": "Will I go bald?",
        "og_description": "Assess your risk of male pattern baldness based on genetics and lifestyle.",
        "schema_type": "WebPage",
        "schema_name": "Baldness Risk Calculator",
        "schema_description": "Estimate your risk of significant hair loss based on family history, current hair status, hair loss rate, stress, and smoking.",
        "schema_about": "Baldness Risk Calculator",
        "date_published": "2025-06-01",
        "date_modified": "2026-03-23",
        "robots": "index, follow",
    },

    "accent": "#8b5cf6",
    "accent_rgb": "139,92,246",

    "hero": {
        "headline": "Will I go <span>bald</span>?",
        "subtitle": "A risk estimate based on your genetics and lifestyle",
    },

    "breadcrumb_category": {"name": "Health & Longevity", "url": "/health-longevity-calculators"},

    "form": {
        "fields": [
            {"id": "age", "type": "number", "label": "Age", "placeholder": "30", "min": 16, "max": 80, "default": 30},
            {"id": "family-history", "type": "select", "label": "Family history of baldness", "options": [
                {"value": "0", "label": "No baldness in family", "selected": True},
                {"value": "1", "label": "Maternal grandfather bald"},
                {"value": "2", "label": "Father bald"},
                {"value": "3", "label": "Both sides bald"},
            ]},
            {"id": "current-hair", "type": "select", "label": "Current hair status", "options": [
                {"value": "0", "label": "Full head of hair", "selected": True},
                {"value": "1", "label": "Slight recession"},
                {"value": "2", "label": "Noticeable thinning"},
                {"value": "3", "label": "Significant loss"},
                {"value": "4", "label": "Mostly bald"},
            ]},
            {"id": "hair-loss-rate", "type": "select", "label": "Current hair loss rate", "options": [
                {"value": "0", "label": "No noticeable loss", "selected": True},
                {"value": "1", "label": "Slow / gradual"},
                {"value": "2", "label": "Moderate"},
                {"value": "3", "label": "Rapid"},
            ]},
            {"id": "stress", "type": "select", "label": "Stress level", "options": [
                {"value": "0", "label": "Low", "selected": True},
                {"value": "1", "label": "Moderate"},
                {"value": "2", "label": "High"},
                {"value": "3", "label": "Very high"},
            ]},
            {"id": "smoking", "type": "select", "label": "Smoking status", "options": [
                {"value": "0", "label": "Non-smoker", "selected": True},
                {"value": "1", "label": "Former smoker"},
                {"value": "2", "label": "Light smoker"},
                {"value": "3", "label": "Heavy smoker"},
            ]},
        ],
        "submit_label": "Predict My Risk",
    },

    "results": {
        "primary": {"id": "resultNumber", "unit": "risk score"},
        "verdict_id": "resultVerdict",
        "breakdown": [
            {"id": "predictedAge", "label": "Predicted age of significant loss"},
            {"id": "yearsLeft", "label": "Years of hair remaining"},
            {"id": "norwoodStage", "label": "Current Norwood stage"},
        ],
    },

    "coach": {
        "title": "Here's what this means",
        "container_id": "coachCard",
        "cta_text": "Questions about hair loss prevention?",
    },

    "js_file": "js/calculators/baldness_risk.js",

    "faq": [
        {"question": "Is baldness genetic?", "answer": "Yes. Androgenetic alopecia (male pattern baldness) is primarily genetic. The androgen receptor gene on the X chromosome (inherited from your mother) plays a key role, but genes from both parents contribute."},
        {"question": "Can you prevent hair loss?", "answer": "FDA-approved treatments include finasteride (oral) and minoxidil (topical). Finasteride blocks DHT and can slow or reverse hair loss in ~80% of men. Early intervention is most effective."},
        {"question": "At what age does balding typically start?", "answer": "About 25% of men begin balding by age 21. By age 35, roughly 66% show some hair loss. By age 50, about 85% of men have significantly thinner hair."},
        {"question": "Does stress cause hair loss?", "answer": "Acute stress can cause telogen effluvium (temporary shedding). Chronic stress may accelerate androgenetic alopecia. Stress-related hair loss is usually reversible once the stressor is removed."},
    ],

    "sources": [
        {"text": "Sinclair R. Male pattern androgenetic alopecia. BMJ. 1998;317(7162):865-869.", "url": "https://pubmed.ncbi.nlm.nih.gov/9748188/"},
        {"text": "Heilmann-Heimbach S, et al. Meta-analysis identifies novel risk loci and yields systematic insights into the biology of male-pattern baldness. Nat Commun. 2017;8:14694.", "url": "https://pubmed.ncbi.nlm.nih.gov/28232668/"},
        {"text": "Kaufman KD, et al. Finasteride in the treatment of men with androgenetic alopecia. J Am Acad Dermatol. 1998;39(4):578-589.", "url": "https://pubmed.ncbi.nlm.nih.gov/9777765/"},
    ],

    "methodology": "<p>This calculator estimates baldness risk using a weighted point system based on family history (strongest predictor), current hair status, rate of loss, stress level, and smoking status. The Norwood-Hamilton scale classifies hair loss from NW1 (no loss) to NW7 (extensive loss). Progression rate is estimated from the risk score using epidemiological data on male pattern baldness timelines.</p>",

    "llm_capsule": "Male pattern baldness (androgenetic alopecia) is primarily genetic, with the androgen receptor gene on the X chromosome being a key factor. About 25% of men start balding by 21, 66% by 35, and 85% by 50. Risk factors include family history (strongest predictor), stress, and smoking. FDA-approved treatments are finasteride and minoxidil, most effective when started early.",

    "ask_pills": ["Does finasteride work?", "Minoxidil side effects", "Hair transplant cost", "Natural remedies"],
    "ask_placeholder": "e.g. Does finasteride actually work?",
}

register("baldness_risk", BALDNESS_RISK)


CHOLESTEROL_RATIO = {
    "route": "/cholesterol-ratio-calculator",
    "override_template": None,

    "seo": {
        "robots": "noindex, nofollow",
        "page_title": "Cholesterol Ratio Calculator — Heart Disease Risk",
        "meta_description": "Calculate cholesterol ratios: Total/HDL, LDL/HDL, Trig/HDL, Non-HDL with cardiovascular risk assessment.",
        "og_title": "Cholesterol Ratio Calculator",
        "og_description": "Calculate cholesterol ratios with cardiovascular risk assessment.",
        "schema_type": "MedicalWebPage",
        "schema_name": "Cholesterol Ratio Calculator",
        "schema_description": "Calculate cholesterol ratios: Total/HDL, LDL/HDL, Trig/HDL, Non-HDL with cardiovascular risk assessment.",
        "schema_about": "Cholesterol Ratio Calculator",
        "date_published": "2025-06-01",
        "date_modified": "2026-03-23",
    },

    "accent": "#ef4444",
    "accent_rgb": "239,68,68",

    "hero": {
        "headline": "What's your <span>cholesterol</span> ratio?",
        "subtitle": "Enter your lipid panel numbers",
    },

    "breadcrumb_category": {"name": "Health & Longevity", "url": "/health-longevity-calculators"},

    "form": {
        "fields": [
            {"id": "unitSystem", "type": "select", "label": "Units", "options": [
                {"value": "mgdl", "label": "mg/dL (US)", "selected": True},
                {"value": "mmol", "label": "mmol/L (International)"},
            ]},
            {"id": "totalCholesterol", "type": "number", "label": "Total Cholesterol", "placeholder": "200", "min": 0, "step": 1},
            {"id": "hdlInput", "type": "number", "label": "HDL (\"Good\") Cholesterol", "placeholder": "55", "min": 0, "step": 1},
            {"id": "ldlInput", "type": "number", "label": "LDL (\"Bad\") Cholesterol", "placeholder": "120", "min": 0, "step": 1},
            {"id": "trigInput", "type": "number", "label": "Triglycerides (optional)", "placeholder": "150", "min": 0, "step": 1},
            {"id": "sexSelect", "type": "select", "label": "Sex", "options": [
                {"value": "male", "label": "Male", "selected": True},
                {"value": "female", "label": "Female"},
            ]},
        ],
        "submit_label": "Calculate Ratios",
    },

    "results": {
        "primary": {"id": "resultNumber", "unit": "Total/HDL Ratio"},
        "verdict_id": "resultVerdict",
        "breakdown": [
            {"id": "ldlHdlRatio", "label": "LDL/HDL Ratio"},
            {"id": "nonHdlValue", "label": "Non-HDL Cholesterol"},
            {"id": "trigHdlRatio", "label": "Trig/HDL Ratio"},
        ],
    },

    "coach": {
        "title": "What your ratios mean",
        "container_id": "coachCard",
        "cta_text": "Questions about cholesterol?",
    },

    "js_file": "js/calculators/cholesterol_ratio.js",

    "faq": [
        {"question": "Most important ratio?", "answer": "Total/HDL is most widely used. Non-HDL is increasingly favored by cardiologists."},
        {"question": "What ratio is dangerous?", "answer": "Total/HDL above 6.0 is high risk. LDL/HDL above 3.5 (men) or 3.0 (women) is elevated."},
        {"question": "Can I improve ratios?", "answer": "Yes. Exercise raises HDL, reducing saturated fat lowers LDL, limiting sugar lowers triglycerides."},
        {"question": "What does TG/HDL mean?", "answer": "Proxy for insulin resistance and small dense LDL. Above 3.0 suggests metabolic dysfunction."},
    ],

    "sources": [
        {"text": "Grundy SM et al. 2018 AHA/ACC Guideline. Circulation. 2019.", "url": "https://pubmed.ncbi.nlm.nih.gov/30586774/"},
        {"text": "ATP III Guidelines. JAMA. 2001;285(19).", "url": "https://pubmed.ncbi.nlm.nih.gov/11368702/"},
        {"text": "Millan J et al. Vasc Health Risk Manag. 2009;5:757-765.", "url": "https://pubmed.ncbi.nlm.nih.gov/19774217/"},
    ],

    "methodology": "<p>Computes Total/HDL, LDL/HDL, Non-HDL, and TG/HDL ratios. Thresholds from AHA/ACC 2018 and ATP III guidelines.</p>",

    "llm_capsule": "Cholesterol ratios assess cardiovascular risk. Total/HDL below 3.5 is optimal, below 5.0 is desirable. LDL/HDL below 2.0 is optimal. Non-HDL (total minus HDL) captures all atherogenic lipoproteins. TG/HDL is a proxy for insulin resistance; below 2.0 is optimal.",

    "ask_pills": ["Lower LDL", "Raise HDL", "Statin info", "Diet for cholesterol"],
    "ask_placeholder": "e.g. How to lower cholesterol?",
}

register("cholesterol_ratio", CHOLESTEROL_RATIO)


LIPID_PANEL_GOALS = {
    "route": "/lipid-panel-goals-calculator",
    "override_template": None,

    "seo": {
        "page_title": "Lipid Panel Goals Calculator — Know Your Targets",
        "meta_description": "Calculate your ideal cholesterol targets based on age, risk, and medical guidelines. Includes LDL, HDL, non-HDL, triglycerides, and total cholesterol.",
        "og_title": "Lipid Panel Goals Calculator",
        "og_description": "See if your lipid panel markers are in range.",
        "schema_type": "MedicalWebPage",
        "schema_name": "Lipid Panel Goals Calculator",
        "schema_description": "Evaluate your lipid panel results against ATP III and AHA guidelines.",
        "schema_about": "Lipid Panel Goals Calculator",
        "date_published": "2025-06-01",
        "date_modified": "2026-03-23",
        "robots": "index, follow",
    },

    "accent": "#14b8a6",
    "accent_rgb": "20,184,166",

    "hero": {
        "headline": "Are your <span>lipids</span> in range?",
        "subtitle": "Enter your lipid panel numbers for a full assessment",
    },

    "breadcrumb_category": {"name": "Health & Longevity", "url": "/health-longevity-calculators"},

    "form": {
        "fields": [
            {"id": "genderToggle", "type": "radio_row", "label": "Sex", "options": [
                {"value": "male", "label": "Male", "selected": True},
                {"value": "female", "label": "Female"},
            ]},
            {"id": "inputTC", "type": "number", "label": "Total Cholesterol (mg/dL)", "placeholder": "200", "min": 0, "step": 1},
            {"id": "inputLDL", "type": "number", "label": "LDL Cholesterol (mg/dL)", "placeholder": "120", "min": 0, "step": 1},
            {"id": "inputHDL", "type": "number", "label": "HDL Cholesterol (mg/dL)", "placeholder": "55", "min": 0, "step": 1},
            {"id": "inputTG", "type": "number", "label": "Triglycerides (mg/dL)", "placeholder": "150", "min": 0, "step": 1},
        ],
        "submit_label": "Assess My Panel",
    },

    "results": {
        "primary": {"id": "resultNumber", "unit": "markers in range"},
        "verdict_id": "resultVerdict",
        "breakdown": [
            {"id": "tcStatus", "label": "Total Cholesterol"},
            {"id": "ldlStatus", "label": "LDL"},
            {"id": "hdlStatus", "label": "HDL"},
            {"id": "tgStatus", "label": "Triglycerides"},
        ],
    },

    "coach": {
        "title": "Your lipid panel breakdown",
        "container_id": "coachCard",
        "cta_text": "Questions about your lipids?",
    },

    "js_file": "js/calculators/lipid_panel_goals.js",

    "faq": [
        {"question": "What is a good lipid panel?", "answer": "Optimal: Total cholesterol below 200, LDL below 100, HDL above 60, triglycerides below 150 (all mg/dL). Having all four in range is ideal."},
        {"question": "What is Non-HDL cholesterol?", "answer": "Total cholesterol minus HDL. It captures all atherogenic (artery-clogging) lipoproteins including LDL and VLDL. Target: below 130 mg/dL."},
        {"question": "How often should I test?", "answer": "Every 4-6 years for low-risk adults. Every 1-2 years if you have risk factors. More frequently if on medication or making lifestyle changes."},
        {"question": "Can diet alone fix bad lipids?", "answer": "Diet can lower LDL by 10-30% and raise HDL by 5-10%. Key changes: reduce saturated fat, increase fiber, add omega-3s, exercise regularly. Some people need medication."},
    ],

    "sources": [
        {"text": "Grundy SM et al. 2018 AHA/ACC/AACVPR Guideline on the Management of Blood Cholesterol. Circulation. 2019.", "url": "https://pubmed.ncbi.nlm.nih.gov/30586774/"},
        {"text": "National Cholesterol Education Program. Third Report (ATP III). NIH. 2002.", "url": "https://pubmed.ncbi.nlm.nih.gov/11368702/"},
    ],

    "methodology": "<p>This calculator classifies each lipid marker using ATP III and AHA/ACC 2018 guidelines. Total cholesterol: desirable below 200, borderline 200-239, high 240+. LDL: optimal below 100, near-optimal 100-129, borderline 130-159, high 160-189, very high 190+. HDL: low below 40 (men) or 50 (women), optimal 60+. Triglycerides: normal below 150, borderline 150-199, high 200-499. Non-HDL target: below 130.</p>",

    "llm_capsule": "A lipid panel measures total cholesterol, LDL, HDL, and triglycerides. Optimal targets: total below 200, LDL below 100, HDL above 60, triglycerides below 150 (all mg/dL). Non-HDL cholesterol (total minus HDL) should be below 130. The AHA recommends screening every 4-6 years for adults, more often with risk factors.",

    "ask_pills": ["Lower LDL naturally", "HDL vs LDL", "Statin side effects", "Best diet for lipids"],
    "ask_placeholder": "e.g. How do I lower my LDL?",
}

register("lipid_panel_goals", LIPID_PANEL_GOALS)


DIABETES_RISK = {
    "route": "/diabetes-risk-calculator",
    "override_template": None,

    "seo": {
        "robots": "noindex, nofollow",
        "page_title": "Diabetes Risk Calculator — Type 2 Risk Assessment",
        "meta_description": "Assess your risk of developing type 2 diabetes based on age, BMI, family history, and activity level.",
        "og_title": "Diabetes Risk Calculator",
        "og_description": "Assess your risk of developing type 2 diabetes.",
        "schema_type": "MedicalWebPage",
        "schema_name": "Diabetes Risk Calculator",
        "schema_description": "Assess type 2 diabetes risk based on ADA risk test and FINDRISC scoring.",
        "schema_about": "Diabetes Risk Calculator",
        "date_published": "2025-06-01",
        "date_modified": "2026-03-23",
    },

    "accent": "#f59e0b",
    "accent_rgb": "245,158,11",

    "hero": {
        "headline": "What's your <span>diabetes</span> risk?",
        "subtitle": "Evidence-based screening in 60 seconds",
    },

    "breadcrumb_category": {"name": "Health & Longevity", "url": "/health-longevity-calculators"},

    "form": {
        "fields": [
            {"id": "ageGroup", "type": "select", "label": "Age", "options": [
                {"value": "0", "label": "Under 40"},
                {"value": "1", "label": "40-49"},
                {"value": "2", "label": "50-59"},
                {"value": "3", "label": "60 or older", "selected": True},
            ]},
            {"id": "sex", "type": "select", "label": "Biological Sex", "options": [
                {"value": "male", "label": "Male", "selected": True},
                {"value": "female", "label": "Female"},
            ]},
            {"type": "row", "fields": [
                {"id": "heightFt", "type": "number", "label": "Height (ft)", "min": 3, "max": 8, "default": 5},
                {"id": "heightIn", "type": "number", "label": "in", "min": 0, "max": 11, "default": 8},
            ]},
            {"id": "weight", "type": "number", "label": "Weight (lbs)", "min": 50, "max": 700, "default": 170},
            {"id": "familyHistory", "type": "select", "label": "Family History of Diabetes", "options": [
                {"value": "0", "label": "None", "selected": True},
                {"value": "1", "label": "Parent OR Sibling"},
                {"value": "2", "label": "Parent AND Sibling"},
            ]},
            {"id": "activity", "type": "select", "label": "Physical Activity Level", "options": [
                {"value": "1", "label": "Less than 30 min/day"},
                {"value": "0", "label": "30+ min/day", "selected": True},
            ]},
            {"id": "bloodPressure", "type": "select", "label": "High Blood Pressure", "options": [
                {"value": "0", "label": "No", "selected": True},
                {"value": "1", "label": "Yes"},
            ]},
            {"id": "ethnicity", "type": "select", "label": "Race / Ethnicity", "options": [
                {"value": "0", "label": "White / Caucasian", "selected": True},
                {"value": "1", "label": "African American / Black"},
                {"value": "1", "label": "Hispanic / Latino"},
                {"value": "1", "label": "Asian American"},
                {"value": "0", "label": "Other"},
            ]},
            {"id": "gestational", "type": "select", "label": "Gestational Diabetes History", "options": [
                {"value": "0", "label": "No / Not applicable", "selected": True},
                {"value": "1", "label": "Yes"},
            ]},
        ],
        "submit_label": "Assess My Risk",
    },

    "results": {
        "primary": {"id": "resultNumber", "unit": "risk score"},
        "verdict_id": "resultVerdict",
        "breakdown": [
            {"id": "bmiDisplay", "label": "Your BMI"},
            {"id": "riskFactors", "label": "Contributing factors"},
        ],
    },

    "coach": {
        "title": "What your score means",
        "container_id": "coachCard",
        "cta_text": "Questions about diabetes prevention?",
    },

    "js_file": "js/calculators/diabetes_risk.js",

    "faq": [
        {"question": "What is prediabetes?", "answer": "Prediabetes means blood sugar is higher than normal but not yet diabetes. A1C 5.7-6.4% or fasting glucose 100-125 mg/dL."},
        {"question": "Who should get screened?", "answer": "The ADA recommends screening all adults at age 35, or earlier with risk factors like obesity or family history."},
        {"question": "Can type 2 diabetes be prevented?", "answer": "Yes. 5-7% weight loss plus 150 min/week exercise reduces risk by 58% (Diabetes Prevention Program)."},
        {"question": "What are early signs?", "answer": "Often no symptoms. When present: increased thirst, frequent urination, blurred vision, fatigue."},
    ],

    "sources": [
        {"text": "American Diabetes Association. Standards of Care 2024.", "url": "https://diabetesjournals.org/care/issue/47/Supplement_1"},
        {"text": "Knowler WC et al. NEJM. 2002;346(6):393-403.", "url": "https://pubmed.ncbi.nlm.nih.gov/11832527/"},
        {"text": "Lindstrom J, Tuomilehto J. Diabetes Care. 2003;26(3):725-731.", "url": "https://pubmed.ncbi.nlm.nih.gov/12610029/"},
    ],

    "methodology": "<p>Scoring adapted from ADA Risk Test and FINDRISC. Points for age, BMI, family history, activity, blood pressure, ethnicity, gestational diabetes. BMI calculated from height and weight using standard formula.</p>",

    "llm_capsule": "ADA recommends diabetes screening at age 35. Key risk factors: BMI above 25, family history, physical inactivity, high blood pressure, certain ethnicities. The Diabetes Prevention Program showed 5-7% weight loss plus 150 min/week exercise reduces type 2 diabetes risk by 58%.",

    "ask_pills": ["Prediabetes reversal", "Prevention tips", "A1C testing", "Risk factors"],
    "ask_placeholder": "e.g. How to prevent diabetes?",
}

register("diabetes_risk", DIABETES_RISK)


METABOLIC_AGE = {
    "route": "/metabolic-age-calculator",
    "override_template": None,

    "seo": {
        "page_title": "Metabolic Age Calculator — Is Your Metabolism Younger or Older?",
        "meta_description": "Calculate your metabolic age by comparing your BMR to population averages. Uses Mifflin-St Jeor and Katch-McArdle formulas.",
        "og_title": "What's your metabolic age?",
        "og_description": "Is your metabolism younger or older than you?",
        "schema_type": "WebPage",
        "schema_name": "Metabolic Age Calculator",
        "schema_description": "Calculate metabolic age by comparing BMR to population averages using Mifflin-St Jeor and Katch-McArdle formulas.",
        "schema_about": "Metabolic Age Calculator",
        "date_published": "2025-06-01",
        "date_modified": "2026-03-23",
        "robots": "index, follow",
    },

    "accent": "#8b5cf6",
    "accent_rgb": "139,92,246",

    "hero": {
        "headline": "What's your <span>metabolic age</span>?",
        "subtitle": "Is your metabolism younger or older than you?",
    },

    "breadcrumb_category": {"name": "Fitness & Body Composition", "url": "/fitness-body-composition-calculators"},

    "form": {
        "fields": [
            {"type": "row", "fields": [
                {"id": "age", "type": "number", "label": "Age", "min": 18, "max": 80, "default": 30},
                {"id": "sex", "type": "select", "label": "Sex", "options": [
                    {"value": "male", "label": "Male", "selected": True},
                    {"value": "female", "label": "Female"},
                ]},
            ]},
            {"type": "row", "fields": [
                {"id": "weight", "type": "number", "label": "Weight (lbs)", "min": 80, "max": 500, "default": 170},
                {"id": "weightUnit", "type": "select", "label": "Unit", "options": [
                    {"value": "lbs", "label": "lbs", "selected": True},
                    {"value": "kg", "label": "kg"},
                ]},
            ]},
            {"type": "row", "fields": [
                {"id": "feet", "type": "number", "label": "Height (ft)", "min": 3, "max": 8, "default": 5},
                {"id": "inches", "type": "number", "label": "in", "min": 0, "max": 11, "default": 10},
            ]},
            {"id": "bodyfat", "type": "number", "label": "Body Fat % (optional, improves accuracy)", "placeholder": "e.g. 20", "min": 3, "max": 60, "step": 0.1, "hint": "Leave blank for Mifflin-St Jeor. Enter body fat for Katch-McArdle."},
        ],
        "submit_label": "Calculate",
    },

    "results": {
        "primary": {"id": "resultNumber", "unit": "your metabolic age"},
        "verdict_id": "resultVerdict",
        "breakdown": [
            {"id": "bmrVal", "label": "Your BMR"},
            {"id": "expectedBmr", "label": "Expected BMR for age"},
            {"id": "ageDiff", "label": "Difference"},
        ],
    },

    "coach": {
        "title": "Here's what this means",
        "container_id": "coachCard",
        "cta_text": "Want more frameworks like this?",
    },

    "js_file": "js/calculators/metabolic_age.js",

    "faq": [
        {"question": "What is metabolic age?", "answer": "Metabolic age compares your BMR to population averages. A higher BMR than average for your age means a younger metabolic age."},
        {"question": "Can I lower my metabolic age?", "answer": "Yes. Resistance training 2-4x/week is most effective. Each pound of muscle burns ~6 cal/day at rest vs 2 for fat."},
        {"question": "How accurate is this?", "answer": "Mifflin-St Jeor predicts BMR within 10% for most people. Accuracy improves with Katch-McArdle when body fat is known."},
        {"question": "Metabolic age vs biological age?", "answer": "Metabolic age focuses on BMR. Biological age is broader, incorporating epigenetic markers, telomere length, and organ function."},
    ],

    "sources": [
        {"text": "Mifflin MD, St Jeor ST, et al. A new predictive equation for resting energy expenditure. Am J Clin Nutr. 1990;51(2):241-247.", "url": "https://pubmed.ncbi.nlm.nih.gov/2305711/"},
        {"text": "McArdle WD, Katch FI, Katch VL. Exercise Physiology. 8th ed. Lippincott Williams & Wilkins; 2014."},
        {"text": "Ravussin E, et al. Determinants of 24-hour energy expenditure in man. J Clin Invest. 1986;78(6):1568-1578.", "url": "https://pubmed.ncbi.nlm.nih.gov/3782471/"},
    ],

    "methodology": "<p>Uses Mifflin-St Jeor (or Katch-McArdle when body fat is provided) to compute BMR, then compares to sex-specific reference BMR values at ages 20-70.</p><p style=\"text-align:center;\"><code>Men: BMR = 10 x weight(kg) + 6.25 x height(cm) - 5 x age + 5</code></p><p style=\"text-align:center;\"><code>Women: BMR = 10 x weight(kg) + 6.25 x height(cm) - 5 x age - 161</code></p>",

    "llm_capsule": "Metabolic age compares your basal metabolic rate to population averages. If your BMR is higher than average for your age, your metabolic age is younger. The Mifflin-St Jeor equation predicts BMR within 10% for most adults. Building lean muscle through resistance training is the most effective way to lower metabolic age.",

    "ask_pills": ["Speed up metabolism", "BMR vs TDEE", "Muscle vs fat calories", "Metabolism and aging"],
    "ask_placeholder": "e.g. How do I speed up my metabolism?",
}

register("metabolic_age", METABOLIC_AGE)


ALCOHOL_IMPACT = {
    "route": "/alcohol-impact-calculator",
    "override_template": None,

    "seo": {
        "page_title": "Alcohol Impact Calculator — Health & Recovery Effects",
        "meta_description": "Assess how alcohol affects your sleep, liver health, and hydration. Based on current research.",
        "og_title": "How does alcohol affect your health?",
        "og_description": "Estimate alcohol's effect on your body including sleep, energy, and liver recovery.",
        "schema_type": "WebPage",
        "schema_name": "Alcohol Impact Calculator",
        "schema_description": "Assess alcohol health impact using evidence-based models.",
        "schema_about": "Alcohol Impact",
        "date_published": "2025-06-01",
        "date_modified": "2026-03-23",
        "robots": "index, follow",
    },

    "accent": "#f43f5e",
    "accent_rgb": "244,63,94",

    "hero": {
        "headline": "What's <span>alcohol</span> costing you?",
        "subtitle": "Health impact based on your weekly intake",
    },

    "breadcrumb_category": {"name": "Health & Longevity", "url": "/health-longevity-calculators"},

    "form": {
        "fields": [
            {"id": "drinks", "type": "number", "label": "Weekly standard drinks (14g alcohol each)", "min": 0, "step": 1, "default": 10, "hint": "1 beer = 1 glass wine = 1 shot spirits"},
            {"type": "row", "fields": [
                {"id": "gender", "type": "select", "label": "Biological sex", "options": [
                    {"value": "male", "label": "Male", "selected": True},
                    {"value": "female", "label": "Female"},
                ]},
                {"id": "weight", "type": "number", "label": "Weight (kg)", "min": 30, "default": 70},
            ]},
            {"id": "age", "type": "number", "label": "Age", "min": 18, "max": 120, "default": 35},
        ],
        "submit_label": "Calculate Impact",
    },

    "results": {
        "primary": {"id": "resultNumber", "unit": "estimated health impact"},
        "verdict_id": "resultVerdict",
        "breakdown": [
            {"id": "weeklyDrinks", "label": "Weekly drinks"},
            {"id": "guideline", "label": "Guideline limit"},
            {"id": "overGuideline", "label": "Over guideline"},
            {"id": "alcoholCals", "label": "Weekly calories from alcohol"},
        ],
    },

    "coach": {
        "title": "Here's the real cost",
        "container_id": "coachCard",
        "cta_text": "Questions about alcohol and health?",
    },

    "js_file": "js/calculators/alcohol_impact.js",

    "faq": [
        {"question": "How many drinks per week is safe?", "answer": "Guidelines: max 14/week for men, 7/week for women. Recent research (GBD 2023) suggests even moderate drinking carries some risk."},
        {"question": "How long does liver recovery take?", "answer": "Mild fatty liver reverses in 2-4 weeks of abstinence. Significant damage takes months to years. Some damage (cirrhosis) is irreversible."},
    ],

    "sources": [
        {"text": "Saunders JB, et al. Development of the AUDIT. Addiction. 1993;88(6):791-804.", "url": "https://pubmed.ncbi.nlm.nih.gov/8329970/"},
        {"text": "WHO. AUDIT Guidelines for Use in Primary Care. 2nd ed. 2001.", "url": "https://www.who.int/publications/i/item/WHO-MSD-MSB-01.6a"},
    ],

    "methodology": "<p>Models health impact based on weekly alcohol intake, biological sex, body weight, and age. Uses WHO AUDIT framework for risk stratification. Caloric impact calculated at 150 kcal per standard drink (14g alcohol). Guideline thresholds from NIAAA: 14 drinks/week for men, 7 for women.</p>",

    "llm_capsule": "Alcohol health impact depends on weekly intake, biological sex, weight, and age. Guidelines recommend no more than 14 standard drinks/week for men and 7 for women. Each standard drink contains 14g alcohol (~150 calories). Women metabolize alcohol more slowly due to lower body water percentage. The GBD 2023 study found risk increases above any level of consumption.",

    "ask_pills": ["Alcohol and sleep", "Liver recovery", "Safe drinking limits"],
    "ask_placeholder": "e.g. Alcohol and sleep quality?",
}

register("alcohol_impact", ALCOHOL_IMPACT)


BAC_CALCULATOR = {
    "route": "/bac-calculator",
    "override_template": None,

    "seo": {
        "robots": "noindex, nofollow",
        "page_title": "BAC Calculator — Blood Alcohol Content Estimator",
        "meta_description": "Estimate your blood alcohol content based on drinks, body weight, gender, and time. Uses the Widmark formula.",
        "og_title": "BAC Calculator",
        "og_description": "Estimate your blood alcohol content and time to sober.",
        "schema_type": "WebPage",
        "schema_name": "BAC Calculator",
        "schema_description": "Estimate blood alcohol content using the Widmark formula based on drinks, weight, gender, and time.",
        "schema_about": "BAC Calculator",
        "date_published": "2025-06-01",
        "date_modified": "2026-03-23",
    },

    "accent": "#f97316",
    "accent_rgb": "249,115,22",

    "hero": {
        "headline": "What's your <span>BAC</span>?",
        "subtitle": "Blood alcohol estimate using the Widmark formula",
    },

    "breadcrumb_category": {"name": "Health & Longevity", "url": "/health-longevity-calculators"},

    "form": {
        "fields": [
            {"id": "gender", "type": "select", "label": "Sex", "options": [
                {"value": "male", "label": "Male", "selected": True},
                {"value": "female", "label": "Female"},
            ]},
            {"id": "weight", "type": "number", "label": "Weight (lbs)", "min": 80, "max": 500, "default": 170},
            {"id": "numDrinks", "type": "number", "label": "Number of standard drinks", "min": 0, "max": 30, "step": 0.5, "default": 3, "hint": "1 standard drink = 12 oz beer, 5 oz wine, or 1.5 oz spirits"},
            {"id": "timeElapsed", "type": "number", "label": "Hours since first drink", "min": 0, "max": 24, "step": 0.5, "default": 1},
        ],
        "submit_label": "Calculate BAC",
    },

    "results": {
        "primary": {"id": "resultNumber", "unit": "blood alcohol content"},
        "verdict_id": "resultVerdict",
        "breakdown": [
            {"id": "soberTime", "label": "Time to 0.00% BAC"},
            {"id": "legalTime", "label": "Time to legal limit (0.08%)"},
            {"id": "stdDrinks", "label": "Standard drinks consumed"},
        ],
    },

    "coach": {
        "title": "What this means",
        "container_id": "coachCard",
        "cta_text": "Questions about BAC?",
    },

    "js_file": "js/calculators/bac.js",

    "faq": [
        {"question": "How long does it take to sober up?", "answer": "Your body metabolizes alcohol at ~0.015% BAC per hour. There is no way to speed this up. Coffee, food, and water do not lower BAC faster."},
        {"question": "What is the legal limit?", "answer": "0.08% BAC is the legal limit in most US states. Some states have lower limits for commercial drivers (0.04%) and under-21 drivers (0.02% or zero tolerance)."},
        {"question": "How many drinks is 0.08% BAC?", "answer": "For a 170 lb male: roughly 3-4 standard drinks in 1 hour. For a 130 lb female: roughly 2-3 drinks. Individual variation is significant."},
        {"question": "Is this calculator accurate?", "answer": "The Widmark formula provides an estimate. Actual BAC varies with genetics, food intake, medications, liver health, and drinking speed. This should never be used to determine fitness to drive."},
    ],

    "sources": [
        {"text": "Widmark EMP. Die theoretischen Grundlagen und die praktische Verwendbarkeit der gerichtlich-medizinischen Alkoholbestimmung. Berlin: Urban & Schwarzenberg; 1932."},
        {"text": "NIAAA. What Is A Standard Drink?", "url": "https://www.niaaa.nih.gov/alcohols-effects-health/overview-alcohol-consumption/what-standard-drink"},
    ],

    "methodology": "<p>Uses the Widmark formula: <code>BAC = (alcohol grams / (body weight kg x r)) / 10 - (0.015 x hours)</code> where r = 0.68 for males and 0.55 for females. One standard drink = 14 grams of alcohol. Metabolism rate averages 0.015% BAC per hour.</p>",

    "llm_capsule": "BAC is estimated using the Widmark formula. One standard drink (14g alcohol) raises BAC by roughly 0.02-0.03% for a 170 lb male. The body metabolizes ~0.015% BAC per hour. The legal limit is 0.08% in most US states. BAC above 0.30% is life-threatening.",

    "ask_pills": ["How long until sober?", "Drinking and driving", "Alcohol metabolism", "Standard drink size"],
    "ask_placeholder": "e.g. How long until I'm sober?",
}

register("bac_calculator", BAC_CALCULATOR)



ANTIDEPRESSANT_WEIGHT_GAIN = {
    "route": "/antidepressant-weight-gain-calculator",
    "override_template": None,

    "seo": {
        "robots": "noindex, nofollow",
        "page_title": "Antidepressant Weight Gain Calculator — By Medication",
        "meta_description": "Estimate weight and body fat gain from antidepressants by medication type, dose, and duration.",
        "og_title": "Antidepressant Weight Gain Calculator",
        "og_description": "Estimate weight and body fat gain from antidepressants by medication type, dose, and duration.",
        "schema_type": "MedicalWebPage",
        "schema_name": "Antidepressant Weight Gain Calculator",
        "schema_description": "Estimate weight and body fat gain from antidepressants by medication type, dose, and duration.",
        "schema_about": "Antidepressant Weight Gain Calculator",
        "date_published": "2025-06-01",
        "date_modified": "2026-03-23",
    },

    "accent": "#8b5cf6",
    "accent_rgb": "139,92,246",

    "hero": {
        "headline": "Will your <span>medication</span> affect weight?",
        "subtitle": "Clinical research-based estimates",
    },

    "breadcrumb_category": {"name": "Health & Longevity", "url": "/health-longevity-calculators"},

    "form": {
        "fields": [
            {"type": "row", "fields": [
                {"id": "weight", "type": "number", "label": "Current weight", "placeholder": "70", "min": 20, "max": 500, "step": 0.1},
                {"id": "weightUnit", "type": "select", "label": "Unit", "options": [
                    {"value": "kg", "label": "kg", "selected": True},
                    {"value": "lbs", "label": "lbs"},
                ]},
            ]},
            {"id": "medication", "type": "select", "label": "Select antidepressant", "options": []},
            {"id": "duration", "type": "select", "label": "Treatment duration", "options": [
                {"value": "", "label": "Select duration..."},
                {"value": "1", "label": "1 month"},
                {"value": "3", "label": "3 months"},
                {"value": "6", "label": "6 months"},
                {"value": "12", "label": "12 months (1 year)"},
                {"value": "24", "label": "24 months (2 years)"},
            ]},
        ],
        "submit_label": "Calculate Estimate",
    },

    "results": {
        "primary": {"id": "resultNumber", "unit": "estimated weight change"},
        "verdict_id": "resultVerdict",
        "breakdown": [
            {"id": "weightGain", "label": "Weight gain"},
            {"id": "bodyFatGain", "label": "Body fat increase"},
            {"id": "riskLevel", "label": "Risk level"},
        ],
    },

    "coach": {
        "title": "Here\u2019s what your result means",
        "container_id": "coachCard",
        "cta_text": "Have a question about your result?",
    },

    "js_file": "js/calculators/antidepressant_weight_gain.js",

    "faq": [
        {"question": "Which cause most weight gain?", "answer": "Mirtazapine, paroxetine, and TCAs like amitriptyline. Bupropion is often weight-neutral."},
        {"question": "Fat vs weight gain?", "answer": "Antidepressants may increase visceral fat even when total weight change is modest."},
        {"question": "When does it occur?", "answer": "Minimal in first 4-8 weeks, more significant months 2-6. Often stabilizes after 6-12 months."},
        {"question": "Can I prevent it?", "answer": "Regular exercise (150+ min/week), higher protein, nutrient-dense foods may help."},
    ],

    "sources": [
        {"text": "Gafoor R et al. BMJ. 2018;361:k1951.", "url": "https://pubmed.ncbi.nlm.nih.gov/29793997/"},
        {"text": "Serretti A, Mandelli L. J Clin Psychiatry. 2010;71(10):1259-1272.", "url": "https://pubmed.ncbi.nlm.nih.gov/21062615/"},
        {"text": "Blumenthal SR et al. JAMA Psychiatry. 2014;71(8):889-896.", "url": "https://pubmed.ncbi.nlm.nih.gov/24898363/"},
    ],

    "methodology": "<p>Uses medication-specific gain factors from clinical trials. Duration scaling: 0.5x at 1 month to 1.4x at 24 months.</p>",

    "llm_capsule": "Weight gain varies by antidepressant. Mirtazapine and paroxetine highest. Bupropion weight-neutral. Changes appear after 2-3 months.",

    "ask_pills": ["Weight-neutral meds", "Bupropion info", "Mitigation tips", "Switching meds"],
    "ask_placeholder": "e.g. Least weight-gaining options?",
}

register("antidepressant_weight_gain", ANTIDEPRESSANT_WEIGHT_GAIN)

CHILD_GROWTH = {
    "route": "/child-growth-calculator",
    "override_template": None,

    "seo": {
        "page_title": "Child Growth Calculator — Is My Child Growing Normally?",
        "meta_description": "Check your child's height, weight, and BMI percentile by age. See where they stand and whether their growth pattern is on track.",
        "og_title": "Is my child growing normally?",
        "og_description": "Check your child's height, weight, and BMI percentile using CDC and WHO growth charts. Evidence-based and parent-friendly.",
        "schema_type": "MedicalWebPage",
        "schema_name": "Child Growth Percentile Calculator",
        "schema_description": "Calculate child growth percentiles for height, weight, and BMI using CDC and WHO reference data.",
        "schema_about": "Child Growth Calculator",
        "date_published": "2025-06-01",
        "date_modified": "2026-03-24",
        "robots": "index, follow",
    },

    "accent": "#5ba8d4",
    "accent_rgb": "91,168,212",

    "hero": {
        "headline": "Is your child <span>growing well</span>?",
        "subtitle": "Check height, weight, and BMI percentiles by age",
    },

    "breadcrumb_category": {"name": "Health & Longevity", "url": "/health-longevity-calculators"},

    "example_result": "A child at the 25th percentile for height is perfectly healthy. What matters is that they stay on their curve over time, not the number itself.",

    "form": {
        "fields": [
            {"type": "row", "fields": [
                {"id": "gender", "type": "select", "label": "Gender", "options": [
                    {"value": "male", "label": "Boy", "selected": True},
                    {"value": "female", "label": "Girl"},
                ]},
                {"id": "ageYears", "type": "number", "label": "Age (years)", "min": 0, "max": 18, "placeholder": "Years"},
                {"id": "ageMonths", "type": "number", "label": "Months", "min": 0, "max": 11, "placeholder": "Months"},
            ]},
            {"id": "unitToggle", "type": "radio_row", "label": "Unit", "options": [
                {"value": "metric", "label": "cm / kg", "selected": True},
                {"value": "imperial", "label": "ft-in / lbs"},
            ]},
            {"type": "row", "fields": [
                {"id": "heightCm", "type": "number", "label": "Height (cm)", "placeholder": "e.g. 110", "min": 30, "max": 220},
                {"id": "weightKg", "type": "number", "label": "Weight (kg)", "placeholder": "e.g. 20", "min": 1, "max": 200, "step": 0.1},
            ]},
            {"type": "row", "fields": [
                {"id": "heightFt", "type": "number", "label": "Height (ft)", "placeholder": "ft", "min": 0, "max": 8},
                {"id": "heightIn", "type": "number", "label": "Height (in)", "placeholder": "in", "min": 0, "max": 11},
                {"id": "weightLbs", "type": "number", "label": "Weight (lbs)", "placeholder": "e.g. 44", "min": 1, "max": 500, "step": 0.1},
            ]},
        ],
        "submit_label": "Check Growth Percentiles",
    },

    "results": {
        "primary": {"id": "resultNumber", "unit": "height percentile"},
        "verdict_id": "resultVerdict",
        "breakdown_html": '<div class="factory-breakdown" style="grid-template-columns:repeat(3,1fr);margin-top:2rem;">'
            '<div class="detail-card" style="background:rgba(var(--accent-rgb),0.04);border:1px solid rgba(var(--accent-rgb),0.08);border-radius:14px;padding:1.2rem 1rem;text-align:center;">'
                '<div style="font-size:0.78rem;color:var(--text-muted);margin-bottom:0.5rem;">Height-for-Age</div>'
                '<div id="rHeight" style="font-family:var(--font-display);font-size:2.2rem;color:var(--accent);">--</div>'
                '<div style="height:6px;background:rgba(255,255,255,0.06);border-radius:3px;margin:0.8rem 0 0.5rem;overflow:hidden;"><div id="heightBar" style="height:100%;width:50%;border-radius:3px;background:var(--accent);transition:width 0.8s ease-out;"></div></div>'
                '<div id="heightNote" style="font-size:0.75rem;color:var(--text-dim);"></div>'
            '</div>'
            '<div class="detail-card" style="background:rgba(var(--accent-rgb),0.04);border:1px solid rgba(var(--accent-rgb),0.08);border-radius:14px;padding:1.2rem 1rem;text-align:center;">'
                '<div style="font-size:0.78rem;color:var(--text-muted);margin-bottom:0.5rem;">Weight-for-Age</div>'
                '<div id="rWeight" style="font-family:var(--font-display);font-size:2.2rem;color:var(--accent);">--</div>'
                '<div style="height:6px;background:rgba(255,255,255,0.06);border-radius:3px;margin:0.8rem 0 0.5rem;overflow:hidden;"><div id="weightBar" style="height:100%;width:50%;border-radius:3px;background:var(--accent);transition:width 0.8s ease-out;"></div></div>'
                '<div id="weightNote" style="font-size:0.75rem;color:var(--text-dim);"></div>'
            '</div>'
            '<div class="detail-card" style="background:rgba(var(--accent-rgb),0.04);border:1px solid rgba(var(--accent-rgb),0.08);border-radius:14px;padding:1.2rem 1rem;text-align:center;">'
                '<div style="font-size:0.78rem;color:var(--text-muted);margin-bottom:0.5rem;">BMI-for-Age</div>'
                '<div id="rBmi" style="font-family:var(--font-display);font-size:2.2rem;color:var(--accent);">--</div>'
                '<div style="height:6px;background:rgba(255,255,255,0.06);border-radius:3px;margin:0.8rem 0 0.5rem;overflow:hidden;"><div id="bmiBar" style="height:100%;width:50%;border-radius:3px;background:var(--accent);transition:width 0.8s ease-out;"></div></div>'
                '<div id="bmiNote" style="font-size:0.75rem;color:var(--text-dim);"></div>'
            '</div>'
        '</div>'
        '<div id="statusCard" class="status-card good" style="max-width:600px;width:100%;margin-top:1.5rem;padding:1.5rem 2rem;border-radius:16px;text-align:center;display:none;">'
            '<p id="statusText" style="font-size:0.95rem;line-height:1.7;"></p>'
        '</div>',
        "breakdown": [],
    },

    "coach": {
        "title": "What this means for your child",
        "container_id": "coachCard",
        "cta_text": "Have a question about your child's growth?",
    },

    "js_file": "js/calculators/child_growth.js",

    "faq": [
        {"question": "Is my child growing normally?", "answer": "Most children between the 5th and 95th percentile are growing normally. What matters most is consistency over time. A child who is always at the 20th percentile is growing perfectly well. Concern arises when a child crosses two or more major percentile lines."},
        {"question": "What percentile should my child be in?", "answer": "There is no target percentile. The 50th is average, not a goal. Genetics play the biggest role. If both parents are shorter, their child will likely be in lower percentiles and that is completely normal. Track the trend, not the number."},
        {"question": "Should I worry about a low percentile?", "answer": "Not necessarily. Many healthy children are naturally smaller. Talk to your pediatrician if: your child drops across two major percentile lines, falls below the 3rd percentile, or shows other signs like fatigue or delayed development. A single low reading is rarely cause for alarm."},
        {"question": "CDC or WHO growth charts?", "answer": "The AAP recommends WHO standards for children under 2 and CDC charts for ages 2-20. WHO charts represent optimal growth, while CDC charts reflect actual U.S. population data. This calculator applies the appropriate standard based on your child's age."},
        {"question": "How often should I check growth?", "answer": "Pediatricians check at every well-child visit. For home monitoring, every 3-6 months is reasonable. Tracking multiple measurements over time is far more valuable than fixating on any single check."},
    ],

    "sources": [
        {"text": "WHO Multicentre Growth Reference Study Group. WHO Child Growth Standards. Acta Paediatr Suppl. 2006;450:76-85. PubMed", "url": "https://pubmed.ncbi.nlm.nih.gov/16817681/"},
        {"text": "Kuczmarski RJ, et al. 2000 CDC growth charts for the United States. Vital Health Stat 11. 2002;(246):1-190. PubMed", "url": "https://pubmed.ncbi.nlm.nih.gov/12043359/"},
    ],

    "methodology": "<p>This calculator estimates percentiles using simplified growth pattern calculations based on WHO (0-5y) and CDC (2-20y) reference data. Height and weight percentiles are approximated from age-sex population medians. BMI is calculated as <code>weight(kg) / height(m)^2</code>. These are estimates for general guidance; clinical growth monitoring uses full LMS tables for precise z-scores.</p>",

    "llm_capsule": "Child growth percentiles compare a child's height, weight, and BMI to other children of the same age and sex. The 50th percentile means average, not ideal. Most healthy children fall between the 5th and 95th percentiles. What matters most is consistency over time, not a single measurement. The AAP recommends WHO growth standards for children under 2 and CDC charts for ages 2-20. Parents should track trends and discuss concerns with their pediatrician rather than focusing on individual percentile numbers.",

    "ask_pills": ["Growth spurts", "When to see a doctor", "Nutrition for growth", "Late bloomers"],
    "ask_placeholder": "e.g. Is my child short for their age?",
}

register("child_growth", CHILD_GROWTH)

LIFESPAN = {
    "route": "/lifespan-longevity-calculator",
    "override_template": None,

    "seo": {
        "robots": "noindex, nofollow",
        "page_title": "Lifespan Calculator — Estimate Longevity by Lifestyle",
        "meta_description": "Predict your potential lifespan based on health, habits, diet, and lifestyle factors.",
        "og_title": "Lifespan & Longevity Calculator",
        "og_description": "Estimate how long you might live based on your health and lifestyle.",
        "schema_type": "WebPage",
        "schema_name": "Lifespan Calculator",
        "schema_description": "Estimate life expectancy based on health and lifestyle factors.",
        "schema_about": "Lifespan Calculator",
        "date_published": "2025-06-01",
        "date_modified": "2026-03-20",
    },

    "accent": "#22d3ee",
    "accent_rgb": "34,211,238",

    "hero": {
        "headline": "How long will you <span>live</span>?",
        "subtitle": "Based on research from the Framingham Heart Study and WHO data",
    },

    "breadcrumb_category": {"name": "Health & Longevity", "url": "/health-longevity-calculators"},

    "form": {
        "fields": [
            {"type": "row", "fields": [
                {"id": "age", "type": "number", "label": "Current Age", "min": 18, "max": 100, "default": 30},
                {"id": "gender", "type": "select", "label": "Gender", "options": [
                    {"value": "female", "label": "Female"},
                    {"value": "male", "label": "Male"},
                ]},
            ]},
            {"id": "bmi", "type": "number", "label": "BMI", "min": 15, "max": 45, "step": 0.1, "placeholder": "e.g. 22", "hint": "Healthy: 18.5-24.9"},
            {"id": "exercise", "type": "number", "label": "Weekly Exercise (minutes)", "min": 0, "max": 600, "default": 150, "hint": "Recommended: 150+ minutes"},
            {"id": "smoking", "type": "select", "label": "Smoking", "options": [
                {"value": "0", "label": "Never smoked", "selected": True},
                {"value": "-3", "label": "Quit within 5 years"},
                {"value": "-5", "label": "Light smoker"},
                {"value": "-7", "label": "Moderate smoker"},
                {"value": "-10", "label": "Heavy smoker (1+ packs/day)"},
            ]},
            {"id": "diet", "type": "select", "label": "Diet Quality", "options": [
                {"value": "-5", "label": "Poor"},
                {"value": "-2", "label": "Average"},
                {"value": "0", "label": "Good", "selected": True},
                {"value": "3", "label": "Very Good"},
                {"value": "5", "label": "Excellent"},
            ]},
            {"id": "sleep", "type": "number", "label": "Sleep (hours/night)", "min": 4, "max": 12, "step": 0.5, "default": 7, "hint": "Optimal: 7-9 hours"},
            {"id": "stress", "type": "select", "label": "Stress Level", "options": [
                {"value": "-5", "label": "High, poor coping"},
                {"value": "-2", "label": "Moderate"},
                {"value": "0", "label": "Average", "selected": True},
                {"value": "2", "label": "Good management"},
                {"value": "5", "label": "Excellent"},
            ]},
            {"id": "social", "type": "select", "label": "Social Connections", "options": [
                {"value": "-3", "label": "Isolated"},
                {"value": "0", "label": "Average", "selected": True},
                {"value": "2", "label": "Strong network"},
                {"value": "4", "label": "Very strong community"},
            ]},
        ],
        "submit_label": "Calculate Lifespan",
    },

    "results": {
        "primary": {"id": "resultNumber", "unit": "years estimated lifespan"},
        "verdict_id": "resultVerdict",
        "breakdown_html": '<div class="factory-breakdown" style="grid-template-columns:repeat(3,1fr);margin-top:2rem;">'
            '<div class="detail-card" style="background:rgba(var(--accent-rgb),0.04);border:1px solid rgba(var(--accent-rgb),0.08);border-radius:14px;padding:1.2rem 1rem;text-align:center;">'
                '<div style="font-size:0.78rem;color:var(--text-muted);margin-bottom:0.5rem;">vs Average</div>'
                '<div id="dDiff" style="font-family:var(--font-display);font-size:2.2rem;color:var(--accent);">--</div>'
            '</div>'
            '<div class="detail-card" style="background:rgba(var(--accent-rgb),0.04);border:1px solid rgba(var(--accent-rgb),0.08);border-radius:14px;padding:1.2rem 1rem;text-align:center;">'
                '<div style="font-size:0.78rem;color:var(--text-muted);margin-bottom:0.5rem;">Years Remaining</div>'
                '<div id="dRemain" style="font-family:var(--font-display);font-size:2.2rem;color:var(--accent);">--</div>'
            '</div>'
            '<div class="detail-card" style="background:rgba(var(--accent-rgb),0.04);border:1px solid rgba(var(--accent-rgb),0.08);border-radius:14px;padding:1.2rem 1rem;text-align:center;">'
                '<div style="font-size:0.78rem;color:var(--text-muted);margin-bottom:0.5rem;">Health Score</div>'
                '<div id="dScore" style="font-family:var(--font-display);font-size:2.2rem;color:var(--accent);">--</div>'
            '</div>'
        '</div>',
        "breakdown": [],
    },

    "coach": {
        "title": "Your longevity profile",
        "container_id": "coachCard",
        "cta_text": "Want more insights?",
    },

    "js_file": "js/calculators/lifespan.js",

    "faq": [
        {"question": "How accurate is this lifespan calculator?", "answer": "This provides statistical estimates based on population-level research, not individual predictions. Consider results as general guidelines."},
        {"question": "Can I really add years by changing habits?", "answer": "Yes. The big four behaviors -- not smoking, healthy weight, exercise, and good diet -- are associated with 11-14 years of increased life expectancy."},
        {"question": "Why does social connection affect lifespan?", "answer": "Meta-analyses show social isolation has mortality risk comparable to smoking 15 cigarettes daily, exceeding risks of obesity and inactivity."},
        {"question": "How much can genetics determine lifespan?", "answer": "Twin studies suggest 20-30% of lifespan variation is genetic. Lifestyle remains more influential for most people."},
    ],

    "sources": [
        {"text": "Social Security Administration. Actuarial Life Table.", "url": "https://www.ssa.gov/oact/STATS/table4c6.html"},
        {"text": "CDC/NCHS. National Vital Statistics Reports.", "url": "https://www.cdc.gov/nchs/products/life_tables.htm"},
        {"text": "Li K, et al. Lifestyle risk factors and residual life expectancy. BMC Med. 2014;12:59.", "url": "https://pubmed.ncbi.nlm.nih.gov/24708705/"},
    ],
    "methodology": "<p>Starts with WHO baseline life expectancy (74 for females, 70 for males) and applies additive adjustments from epidemiological research. BMI follows a J-shaped mortality curve. Exercise contributes up to +5 years. Smoking applies up to -10 years. Sleep follows a U-shaped curve. Results are bounded to 50-120 years.</p>",
    "llm_capsule": "Average life expectancy is about 79 years for women and 74 for men in the US. The biggest modifiable factors are smoking (-10 years for heavy smokers), exercise (+5 years for regular activity), diet quality (+5 years), and social connections (+4 years). Even adopting healthy behaviors in middle age shows measurable benefits.",
    "ask_pills": ["Exercise impact", "Sleep and longevity", "Diet quality", "Social connections"],
    "ask_placeholder": "e.g. Can I add years by changing habits?",
}

register("lifespan", LIFESPAN)

VITAMIN_D_INTAKE = {
    "route": "/vitamin-d-intake-calculator",
    "override_template": "overrides/vitamin_d_intake.html",

    "seo": {
        "page_title": "Vitamin D Intake Calculator — How Much Do You Need?",
        "meta_description": "Calculate your ideal daily vitamin D dose based on age, weight, blood level, and sun exposure. Evidence-based recommendations from NIH and Endocrine Society.",
        "og_title": "How much vitamin D should you take?",
        "og_description": "Calculate your ideal daily vitamin D dose based on age, weight, blood level, and sun exposure. Evidence-based recommendations from NIH and Endocrine Society.",
        "schema_type": "MedicalWebPage",
        "schema_name": "Vitamin D Intake Calculator",
        "schema_description": "Calculate your personalized daily vitamin D intake based on age, weight, blood level, sun exposure, and risk factors.",
        "schema_about": "Vitamin D Intake Calculator",
        "date_published": "2025-06-01",
        "date_modified": "2026-03-20",
        "robots": "index, follow",
    },

    "accent": "#14b8a6",
    "accent_rgb": "20,184,166",

    "hero": {
        "headline": "How much <span>vitamin D</span> do you need?",
        "subtitle": "Personalized daily dose based on your profile",
    },

    "breadcrumb_category": {"name": "Health & Longevity", "url": "/health-longevity-calculators"},

    "form": {"fields": [], "submit_label": "Calculate My Dose"},

    "results": {
        "primary": {"id": "resultNumber", "unit": "IU per day"},
        "verdict_id": "resultVerdict",
        "breakdown": [],
    },

    "coach": {
        "title": "Here's your rule of thumb",
        "container_id": "coachCard",
        "cta_text": "Have a question about your result?",
    },

    "js_file": "js/calculators/vitamin_d_intake.js",

    "faq": [
        {"question": "How much vitamin D should I take daily?", "answer": "Most adults need 600-2000 IU of vitamin D daily. The NIH recommends 600 IU for ages 1-70 and 800 IU for 71+. Many clinicians recommend 1000-2000 IU for general supplementation, especially for those with limited sun exposure."},
        {"question": "What is a good vitamin D blood level?", "answer": "A blood level of 30-50 ng/mL (75-125 nmol/L) is considered sufficient by most medical organizations. Below 20 ng/mL is deficient, 20-29 is insufficient. Some health optimization experts target 40-60 ng/mL."},
        {"question": "Can you take too much vitamin D?", "answer": "Yes. The safe upper limit is 4,000 IU per day for adults according to the Institute of Medicine. Toxicity can occur above 10,000 IU daily over extended periods, causing high blood calcium, nausea, and kidney problems."},
        {"question": "Should I take vitamin D2 or D3?", "answer": "Vitamin D3 (cholecalciferol) is generally preferred. Research shows D3 is 2-3 times more effective than D2 at raising blood levels. D3 is the same form your skin produces naturally."},
        {"question": "Does skin color affect vitamin D needs?", "answer": "Yes. Melanin in darker skin acts as a natural sunscreen, reducing vitamin D production from sunlight. People with darker skin may need 3-5 times more sun exposure to produce the same amount of vitamin D."},
    ],

    "sources": [
        {"text": "Demay MB, Pittas AG, Bikle DD, et al. Vitamin D for the prevention of disease: an Endocrine Society clinical practice guideline. J Clin Endocrinol Metab. 2024;109(8):1907-1947.", "url": "https://pubmed.ncbi.nlm.nih.gov/38828931/"},
        {"text": "Holick MF, Binkley NC, Bischoff-Ferrari HA, et al. Evaluation, treatment, and prevention of vitamin D deficiency: an Endocrine Society clinical practice guideline. J Clin Endocrinol Metab. 2011;96(7):1911-1930.", "url": "https://pubmed.ncbi.nlm.nih.gov/21646368/"},
        {"text": "Institute of Medicine. Dietary Reference Intakes for Calcium and Vitamin D. Washington, DC: National Academies Press; 2011.", "url": "https://pubmed.ncbi.nlm.nih.gov/21796828/"},
        {"text": "NIH Office of Dietary Supplements. Vitamin D Fact Sheet for Health Professionals.", "url": "https://ods.od.nih.gov/factsheets/VitaminD-HealthProfessional/"},
        {"text": "Harvard T.H. Chan School of Public Health. Vitamin D.", "url": "https://www.health.harvard.edu/staying-healthy/taking-too-much-vitamin-d-can-cloud-its-benefits-and-create-health-risks"},
    ],

    "methodology": "<p>This calculator estimates daily vitamin D intake requirements using a multi-factor model based on Endocrine Society (2011 &amp; 2024), IOM, and NIH guidelines.</p><p style=\"margin-top:1rem;\"><strong>Base recommendations by age:</strong> 400 IU (infants), 600 IU (ages 1-70), 800 IU (ages 71+). These are adjusted upward based on risk factors.</p><p style=\"margin-top:1rem;\"><strong>Adjustments:</strong> Sun exposure level modifies the base (low = +400 IU, moderate = baseline, high = -400 IU). BMI above 30 adds 400 IU because vitamin D is sequestered in adipose tissue. If a current blood level is provided, the dose is calculated to reach the target level using the approximation that <code>100 IU/day raises blood level by ~1 ng/mL</code> over 2-3 months.</p><p style=\"margin-top:1rem;\"><strong>Caps:</strong> The calculator enforces a minimum of 400 IU and a maximum of 4,000 IU (IOM upper limit). Doses above 4,000 IU require medical supervision and are not recommended by this tool. IU-to-mcg conversion: <code>1 IU = 0.025 mcg</code>.</p><p style=\"margin-top:1rem;\">This tool provides general educational estimates. Sun exposure adjustments are approximate, as actual cutaneous production varies with latitude, season, time of day, altitude, skin pigmentation, and sunscreen use.</p>",

    "llm_capsule": "Most adults need 600-2,000 IU of vitamin D daily, depending on age, sun exposure, skin color, weight, and current blood levels. The NIH recommends 600 IU for ages 1-70 and 800 IU for 71+. A blood level of 30-50 ng/mL is considered sufficient, with below 20 ng/mL classified as deficient. The safe upper limit is 4,000 IU per day for adults. Vitamin D3 is preferred over D2 as it is 2-3 times more effective at raising blood levels. Key cofactors include vitamin K2 (directs calcium to bones) and magnesium (required for vitamin D activation). People with darker skin, limited sun exposure, obesity, or age over 65 generally need higher supplementation.",

    "ask_pills": ["D2 vs D3", "Vitamin D and sleep", "Best time to take D3", "K2 + D3 pairing"],
    "ask_placeholder": "e.g. Should I take D3 with food?",
}

register("vitamin_d_intake", VITAMIN_D_INTAKE)

MENOPAUSE = {
    "route": "/menopause-calculator",
    "override_template": None,

    "seo": {
        "robots": "noindex, nofollow",
        "page_title": "Menopause Calculator \u2014 Predict When It May Start",
        "meta_description": "Predict perimenopause and menopause age based on family history and lifestyle factors.",
        "og_title": "Menopause Age Calculator",
        "og_description": "Predict perimenopause and menopause age based on family history and lifestyle factors.",
        "schema_type": "MedicalWebPage",
        "schema_name": "Menopause Age Calculator",
        "schema_description": "Predict perimenopause and menopause age based on family history and lifestyle factors.",
        "schema_about": "Menopause Age Calculator",
        "date_published": "2025-06-01",
        "date_modified": "2026-03-24",
    },

    "accent": "#a855f7",
    "accent_rgb": "168,85,247",

    "hero": {
        "headline": "When will <span>menopause</span> start?",
        "subtitle": "Evidence-based prediction from family history and lifestyle factors",
    },

    "breadcrumb_category": {"name": "Health & Longevity", "url": "/health-longevity-calculators"},

    "form": {
        "fields": [
            {"id": "currentAge", "type": "number", "label": "Your current age", "placeholder": "42", "min": 25, "max": 65},
            {"id": "ethnicity", "type": "select", "label": "Ethnicity", "options": [
                {"value": "", "label": "Prefer not to say", "selected": True},
                {"value": "white", "label": "White / Caucasian"},
                {"value": "black", "label": "Black / African American"},
                {"value": "hispanic", "label": "Hispanic / Latina"},
                {"value": "asian", "label": "Asian"},
                {"value": "other", "label": "Other"},
            ]},
            {"type": "row", "fields": [
                {"id": "motherAge", "type": "number", "label": "Mother\u2019s menopause age", "placeholder": "51", "min": 30, "max": 65, "hint": "Leave blank if unknown"},
                {"id": "sisterAge", "type": "number", "label": "Sister\u2019s menopause age", "placeholder": "50", "min": 30, "max": 65, "hint": "Leave blank if N/A"},
            ]},
            {"id": "smokingStatus", "type": "radio_row", "label": "Smoking status", "options": [
                {"value": "never", "label": "Never", "selected": True},
                {"value": "former", "label": "Former"},
                {"value": "current", "label": "Current"},
            ]},
            {"id": "bmiCategory", "type": "select", "label": "BMI category", "options": [
                {"value": "underweight", "label": "Underweight (< 18.5)"},
                {"value": "normal", "label": "Normal (18.5 \u2013 24.9)", "selected": True},
                {"value": "overweight", "label": "Overweight (25 \u2013 29.9)"},
                {"value": "obese", "label": "Obese (30+)"},
            ]},
            {"type": "row", "fields": [
                {"id": "menarcheAge", "type": "number", "label": "Age of first period", "placeholder": "12", "min": 8, "max": 18, "hint": "Optional"},
                {"id": "pregnancies", "type": "select", "label": "Pregnancies carried to term", "options": [
                    {"value": "0", "label": "0", "selected": True},
                    {"value": "1", "label": "1"},
                    {"value": "2", "label": "2"},
                    {"value": "3", "label": "3+"},
                ]},
            ]},
            {"id": "contraceptiveUse", "type": "select", "label": "Long-term oral contraceptive use (5+ years)?", "options": [
                {"value": "no", "label": "No", "selected": True},
                {"value": "yes", "label": "Yes"},
            ]},
            {"id": "symptoms", "type": "checkbox_grid", "label": "Current symptoms (check all that apply)", "options": [
                {"value": "hot-flashes", "label": "Hot flashes / night sweats"},
                {"value": "irregular-periods", "label": "Irregular periods"},
                {"value": "sleep", "label": "Sleep disturbances"},
                {"value": "mood", "label": "Mood changes / anxiety"},
                {"value": "vaginal-dryness", "label": "Vaginal dryness"},
                {"value": "libido", "label": "Decreased libido"},
                {"value": "brain-fog", "label": "Brain fog / memory issues"},
                {"value": "joint-pain", "label": "Joint pain"},
                {"value": "weight", "label": "Weight changes"},
                {"value": "palpitations", "label": "Heart palpitations"},
            ]},
        ],
        "submit_label": "Predict Menopause Age",
    },

    "results": {
        "primary": {"id": "resultNumber", "unit": "estimated age range"},
        "verdict_id": "resultVerdict",
        "breakdown_html": '<div class="factory-breakdown" style="grid-template-columns:1fr 1fr;margin-top:2rem;">'
            '<div class="detail-card" style="background:rgba(var(--accent-rgb),0.04);border:1px solid rgba(var(--accent-rgb),0.08);border-radius:14px;padding:1.2rem 1rem;text-align:center;">'
                '<div style="font-size:0.78rem;color:var(--text-muted);margin-bottom:0.5rem;">Current Stage</div>'
                '<div id="stageVal" style="font-family:var(--font-display);font-size:1.4rem;color:var(--accent);">--</div>'
                '<div id="stageDesc" style="font-size:0.75rem;color:var(--text-dim);margin-top:0.3rem;"></div>'
            '</div>'
            '<div class="detail-card" style="background:rgba(var(--accent-rgb),0.04);border:1px solid rgba(var(--accent-rgb),0.08);border-radius:14px;padding:1.2rem 1rem;text-align:center;">'
                '<div style="font-size:0.78rem;color:var(--text-muted);margin-bottom:0.5rem;">Predicted Range</div>'
                '<div id="rangeVal" style="font-family:var(--font-display);font-size:1.4rem;color:var(--accent);">--</div>'
            '</div>'
        '</div>'
        '<div id="timelineBox" style="max-width:600px;width:100%;margin-top:2rem;"></div>'
        '<div id="symptomBox" style="max-width:600px;width:100%;margin-top:1.5rem;background:rgba(var(--accent-rgb),0.04);border:1px solid rgba(var(--accent-rgb),0.08);border-radius:14px;padding:1.2rem;display:none;"></div>'
        '<div id="riskBox" style="max-width:600px;width:100%;margin-top:1rem;background:rgba(var(--accent-rgb),0.04);border:1px solid rgba(var(--accent-rgb),0.08);border-radius:14px;padding:1.2rem;display:none;"></div>'
        '<div id="recsBox" style="max-width:600px;width:100%;margin-top:1rem;background:rgba(var(--accent-rgb),0.04);border:1px solid rgba(var(--accent-rgb),0.08);border-radius:14px;padding:1.2rem;display:none;"></div>',
        "breakdown": [],
    },

    "coach": {
        "title": "What this means for you",
        "container_id": "coachCard",
        "cta_text": "Have a question about your result?",
    },

    "js_file": "js/calculators/menopause.js",

    "faq": [
        {"question": "Average menopause age?", "answer": "US average: 51 years. Normal range: 45-55. Before 40 is premature ovarian insufficiency."},
        {"question": "What is perimenopause?", "answer": "The transition period lasting 4-8 years before menopause. Symptoms: irregular periods, hot flashes, sleep issues."},
        {"question": "Family history predict it?", "answer": "Yes. Mother/sister menopause age is the strongest predictor (correlation ~0.5)."},
        {"question": "Does smoking affect timing?", "answer": "Current smokers reach menopause 1-2 years earlier. Former smokers: about 0.5-1 year earlier."},
    ],

    "sources": [
        {"text": "Gold EB et al. Am J Epidemiol. 2001;153(9):865-874.", "url": "https://pubmed.ncbi.nlm.nih.gov/11323317/"},
        {"text": "SWAN Study of Women\u2019s Health Across the Nation.", "url": "https://www.swanstudy.org/"},
        {"text": "Torgerson DJ et al. Eur J Obstet Gynecol. 1997.", "url": "https://pubmed.ncbi.nlm.nih.gov/9243205/"},
    ],
    "methodology": "<p>Blends ethnicity baseline (SWAN) with family history (correlation 0.5). Adjusts for smoking, BMI, menarche, pregnancies. Range \u00b1 2 years.</p>",
    "llm_capsule": "Average menopause: 51. Strongest predictor: family history. Smoking accelerates by 1-2 years. Perimenopause lasts 4-8 years.",
    "ask_pills": ["Peri symptoms", "Hormone therapy", "Early menopause", "Hot flash relief"],
    "ask_placeholder": "e.g. Perimenopause symptoms?",
}

register("menopause", MENOPAUSE)

HEART_AGE = {
    "route": "/heart-age-calculator",
    "override_template": None,

    "seo": {
        "robots": "noindex, nofollow",
        "page_title": "Heart Age Calculator — Cardiovascular Age Estimator",
        "meta_description": "Calculate your heart age based on cardiovascular risk factors from the Framingham Heart Study.",
        "og_title": "Heart Age Calculator -- Is Your Heart Older Than You?",
        "og_description": "Find your heart true age based on blood pressure, cholesterol, BMI, and lifestyle.",
        "schema_type": "WebPage",
        "schema_name": "Heart Age Calculator",
        "schema_description": "Calculate heart age based on Framingham Heart Study risk factors.",
        "schema_about": "Heart Age Calculator",
        "date_published": "2025-06-01",
        "date_modified": "2026-03-24",
    },

    "accent": "#ef4444",
    "accent_rgb": "239,68,68",

    "hero": {
        "headline": "Is your heart <span>older</span> than you?",
        "subtitle": "Based on the Framingham Heart Study risk model",
    },

    "breadcrumb_category": {"name": "Health & Longevity", "url": "/health-longevity-calculators"},

    "form": {
        "fields": [
            {"type": "row", "fields": [
                {"id": "age", "type": "number", "label": "Age", "min": 18, "max": 80, "default": 40},
                {"id": "sex", "type": "select", "label": "Sex", "options": [
                    {"value": "male", "label": "Male"},
                    {"value": "female", "label": "Female"},
                ]},
            ]},
            {"id": "sbp", "type": "number", "label": "Systolic Blood Pressure (mmHg)", "min": 80, "max": 220, "placeholder": "e.g. 120", "hint": "Normal: below 120 mmHg"},
            {"id": "chol", "type": "number", "label": "Total Cholesterol (mg/dL)", "min": 100, "max": 400, "placeholder": "e.g. 200", "hint": "Desirable: below 200"},
            {"id": "hdl", "type": "number", "label": "HDL Cholesterol (mg/dL)", "min": 10, "max": 120, "placeholder": "e.g. 50", "hint": "Healthy: 60+ mg/dL"},
            {"type": "row", "fields": [
                {"id": "smoking", "type": "select", "label": "Smoker?", "options": [
                    {"value": "no", "label": "No", "selected": True},
                    {"value": "yes", "label": "Yes"},
                ]},
                {"id": "diabetes", "type": "select", "label": "Diabetes?", "options": [
                    {"value": "no", "label": "No", "selected": True},
                    {"value": "yes", "label": "Yes"},
                ]},
            ]},
            {"type": "row", "fields": [
                {"id": "bpMed", "type": "select", "label": "BP Medication?", "options": [
                    {"value": "no", "label": "No", "selected": True},
                    {"value": "yes", "label": "Yes"},
                ]},
                {"id": "exerciseReg", "type": "select", "label": "Exercise 150+/wk?", "options": [
                    {"value": "no", "label": "No", "selected": True},
                    {"value": "yes", "label": "Yes"},
                ]},
            ]},
            {"type": "row", "fields": [
                {"id": "weightLbs", "type": "number", "label": "Weight (lbs)", "min": 80, "max": 500, "placeholder": "e.g. 170"},
                {"id": "heightIn", "type": "number", "label": "Height (inches)", "min": 48, "max": 84, "placeholder": "e.g. 68"},
            ]},
        ],
        "submit_label": "Calculate Heart Age",
    },

    "results": {
        "primary": {"id": "resultNumber", "unit": "years (heart age)"},
        "verdict_id": "resultVerdict",
        "breakdown": [
            {"id": "dDiff", "label": "vs Actual Age"},
            {"id": "dRisk", "label": "10-Year CVD Risk"},
            {"id": "dBmi", "label": "Your BMI"},
        ],
    },

    "coach": {
        "title": "Your heart health profile",
        "container_id": "coachCard",
        "cta_text": "Want more insights?",
    },

    "js_file": "js/calculators/heart_age.js",

    "faq": [
        {"question": "What is heart age?", "answer": "Heart age expresses cardiovascular risk as an equivalent age. If your heart age is 55 but you are 45, your risk factors match a healthy 55-year-old."},
        {"question": "How accurate is this calculator?", "answer": "This is a simplified estimate based on major Framingham risk factors. Clinical tools include additional variables. Consider results approximate guidance."},
        {"question": "Can I lower my heart age?", "answer": "Yes. Quitting smoking can reduce heart age by up to 8 years. Lowering blood pressure, improving cholesterol, and exercising each reduce it by several years."},
        {"question": "Why is HDL measured separately?", "answer": "HDL (\"good\") cholesterol protects against heart disease. High total cholesterol with very high HDL may be lower risk than lower total with very low HDL."},
        {"question": "What is 10-year CVD risk?", "answer": "The probability of having a cardiovascular event (heart attack, stroke) in the next 10 years, based on your risk factor profile."},
    ],

    "sources": [
        {"text": "D'Agostino RB Sr, et al. General CVD Risk Profile: Framingham Heart Study. Circulation. 2008;117(6):743-753.", "url": "https://pubmed.ncbi.nlm.nih.gov/18212285/"},
        {"text": "Khan SS, et al. AHA/ACC PREVENT Equations. Circulation. 2024;148(24):1982-2004.", "url": "https://pubmed.ncbi.nlm.nih.gov/37947085/"},
        {"text": "Framingham Heart Study. NHLBI and Boston University.", "url": "https://www.framinghamheartstudy.org/"},
    ],

    "methodology": "<p>Uses a simplified Framingham-based model. Each risk factor contributes years: smoking (+8), systolic BP >140 (+5) or 120-140 (+2), BP medication (+1), total cholesterol >240 (+3) or 200-240 (+1), HDL <40 (+3) or <60 (+1) or >60 (-1), diabetes (+6), BMI >30 (+3) or 25-30 (+1), regular exercise (-2). 10-year risk uses age/sex base rates with multiplicative factor adjustments.</p>",

    "llm_capsule": "Heart age translates cardiovascular risk into an equivalent age. Key factors: smoking adds 8 years, high blood pressure adds 2-5 years, diabetes adds 6 years, regular exercise subtracts 2 years. A 45-year-old smoker with high blood pressure and no exercise might have a heart age of 60+. Quitting smoking is the single most impactful change.",

    "ask_pills": ["Lower blood pressure", "Improve cholesterol", "Quit smoking effects", "Exercise benefits"],
    "ask_placeholder": "e.g. How can I lower my heart age?",
}

register("heart_age", HEART_AGE)


CORTISOL_STRESS_ASSESSMENT = {
    "route": "/cortisol-stress-assessment",
    "override_template": None,

    "seo": {
        "page_title": "Cortisol & Stress Assessment Calculator — What's Your Stress Score?",
        "meta_description": "Assess your cortisol stress levels with our evidence-based calculator. Combines validated stress assessment with sleep, caffeine, exercise, and lifestyle factors.",
        "og_title": "What's your cortisol stress score?",
        "og_description": "Assess your cortisol stress levels with our evidence-based calculator. Combines validated stress assessment with sleep, caffeine, exercise, and lifestyle factors.",
        "schema_type": "WebPage",
        "schema_name": "Cortisol & Stress Assessment Calculator",
        "schema_description": "Evidence-based cortisol and stress assessment combining PSS-10 stress perception, lifestyle risk factors, and symptom screening to identify chronic stress patterns.",
        "schema_about": "Cortisol Stress Assessment",
        "date_published": "2026-03-24",
        "date_modified": "2026-03-24",
        "robots": "index, follow",
    },

    "accent": "#e89b3e",
    "accent_rgb": "232,155,62",

    "hero": {
        "headline": "Is your <span>stress alarm</span> stuck on?",
        "subtitle": "Evidence-based cortisol risk assessment across perception, lifestyle, and symptoms",
    },

    "breadcrumb_category": {"name": "Health & Longevity", "url": "/health-longevity-calculators"},

    "form": {
        "fields": [
            # --- Section 1: Stress Perception (PSS-10 adapted) ---
            {"id": "pss1", "type": "select", "label": "How often do you feel unable to control important things in your life?", "options": [
                {"value": "0", "label": "Never"},
                {"value": "1", "label": "Rarely"},
                {"value": "2", "label": "Sometimes", "selected": True},
                {"value": "3", "label": "Often"},
                {"value": "4", "label": "Very Often"},
            ]},
            {"id": "pss2", "type": "select", "label": "How often do you feel nervous or stressed?", "options": [
                {"value": "0", "label": "Never"},
                {"value": "1", "label": "Rarely"},
                {"value": "2", "label": "Sometimes", "selected": True},
                {"value": "3", "label": "Often"},
                {"value": "4", "label": "Very Often"},
            ]},
            {"id": "pss3", "type": "select", "label": "How often do you feel difficulties are piling up so high you cannot overcome them?", "options": [
                {"value": "0", "label": "Never"},
                {"value": "1", "label": "Rarely"},
                {"value": "2", "label": "Sometimes", "selected": True},
                {"value": "3", "label": "Often"},
                {"value": "4", "label": "Very Often"},
            ]},
            {"id": "pss4", "type": "select", "label": "How often do you feel confident about handling personal problems?", "options": [
                {"value": "0", "label": "Never"},
                {"value": "1", "label": "Rarely"},
                {"value": "2", "label": "Sometimes", "selected": True},
                {"value": "3", "label": "Often"},
                {"value": "4", "label": "Very Often"},
            ]},
            {"id": "pss5", "type": "select", "label": "How often do you feel things are going your way?", "options": [
                {"value": "0", "label": "Never"},
                {"value": "1", "label": "Rarely"},
                {"value": "2", "label": "Sometimes", "selected": True},
                {"value": "3", "label": "Often"},
                {"value": "4", "label": "Very Often"},
            ]},

            # --- Section 2: Lifestyle Factors ---
            {"type": "row", "fields": [
                {"id": "sleepHours", "type": "number", "label": "Sleep hours per night", "placeholder": "7", "min": 1, "max": 14, "step": 0.5},
                {"id": "sleepQuality", "type": "select", "label": "Sleep quality", "options": [
                    {"value": "4", "label": "Poor"},
                    {"value": "3", "label": "Fair"},
                    {"value": "2", "label": "Good", "selected": True},
                    {"value": "1", "label": "Very Good"},
                    {"value": "0", "label": "Excellent"},
                ]},
            ]},
            {"type": "row", "fields": [
                {"id": "caffeineMg", "type": "number", "label": "Daily caffeine (mg)", "placeholder": "200", "min": 0, "max": 1000},
                {"id": "caffeineCutoff", "type": "select", "label": "Last caffeinated drink", "options": [
                    {"value": "0", "label": "Before noon"},
                    {"value": "1", "label": "Before 2pm"},
                    {"value": "2", "label": "Before 4pm", "selected": True},
                    {"value": "3", "label": "Before 6pm"},
                    {"value": "4", "label": "After 6pm"},
                ]},
            ]},
            {"type": "row", "fields": [
                {"id": "exerciseHours", "type": "number", "label": "Weekly exercise hours", "placeholder": "3", "min": 0, "max": 30},
                {"id": "exerciseIntensity", "type": "select", "label": "Exercise intensity", "options": [
                    {"value": "0", "label": "Light"},
                    {"value": "1", "label": "Moderate", "selected": True},
                    {"value": "2", "label": "Intense"},
                    {"value": "3", "label": "Very Intense"},
                ]},
            ]},
            {"type": "row", "fields": [
                {"id": "alcoholDrinks", "type": "number", "label": "Alcohol (drinks/week)", "placeholder": "2", "min": 0, "max": 50},
                {"id": "mealRegularity", "type": "select", "label": "How often do you skip meals?", "options": [
                    {"value": "0", "label": "Never"},
                    {"value": "1", "label": "Rarely"},
                    {"value": "2", "label": "Sometimes", "selected": True},
                    {"value": "3", "label": "Often"},
                    {"value": "4", "label": "Very Often"},
                ]},
            ]},

            # --- Section 3: Symptom Check ---
            {"id": "symptoms", "type": "checkbox_grid", "label": "Symptoms you experience regularly (check all that apply)", "options": [
                {"value": "midsection-weight", "label": "Weight gain around midsection"},
                {"value": "brain-fog", "label": "Difficulty concentrating or brain fog"},
                {"value": "afternoon-crash", "label": "Afternoon energy crashes"},
                {"value": "sugar-cravings", "label": "Sugar or carb cravings"},
                {"value": "frequent-illness", "label": "Frequently getting sick"},
                {"value": "sleep-difficulty", "label": "Difficulty falling or staying asleep"},
                {"value": "wired-tired", "label": "Feeling wired but tired"},
                {"value": "irritability", "label": "Irritability or mood swings"},
                {"value": "low-libido", "label": "Decreased libido"},
                {"value": "slow-healing", "label": "Slow wound healing"},
            ]},
        ],
        "submit_label": "Assess My Stress",
    },

    "results": {
        "primary": {"id": "resultNumber", "unit": "cortisol stress score"},
        "verdict_id": "resultVerdict",
        "breakdown": [
            {"id": "stressPerceptionScore", "label": "Stress Perception"},
            {"id": "lifestyleLoadScore", "label": "Lifestyle Load"},
            {"id": "symptomSignalScore", "label": "Symptom Signals"},
        ],
        "breakdown_html": '<div id="cortisolDrivers" style="display:none;max-width:540px;width:100%;margin-top:2rem;text-align:left;background:rgba(232,155,62,0.04);border:1px solid rgba(232,155,62,0.1);border-radius:14px;padding:1.4rem 1.6rem;"></div><div id="cortisolCoachExtra" style="display:none;max-width:540px;width:100%;margin-top:1rem;text-align:left;background:rgba(232,155,62,0.04);border:1px solid rgba(232,155,62,0.1);border-radius:14px;padding:1.4rem 1.6rem;"></div>',
    },

    "coach": {
        "title": "What this means for you",
        "container_id": "coachCard",
        "cta_text": "Want personalized stress management strategies?",
    },

    "js_file": "js/calculators/cortisol_stress_assessment.js",

    "example_result": "1 coffee \u2248 95mg caffeine, 1 energy drink \u2248 150mg",

    "faq": [
        {"question": "What is cortisol and why does it matter?", "answer": "Cortisol is your body's primary stress hormone, produced by the adrenal glands. It follows a diurnal rhythm \u2014 highest in the morning to help you wake up, declining through the day. Cortisol regulates metabolism, immune response, and blood pressure. When chronically elevated due to ongoing stress, it disrupts sleep, promotes abdominal fat storage, impairs immunity, and contributes to anxiety, brain fog, and fatigue."},
        {"question": "How accurate is this assessment?", "answer": "The stress perception section is adapted from the PSS-10 (Perceived Stress Scale), a validated instrument with Cronbach's alpha of 0.89. The lifestyle and symptom sections are based on evidence-based risk factors from published research on cortisol dysregulation. This assessment identifies risk patterns \u2014 it does not measure actual cortisol levels and is not a clinical diagnosis."},
        {"question": "What's a normal cortisol level?", "answer": "Morning serum cortisol typically ranges from 10-20 mcg/dL (275-555 nmol/L), declining to 3-10 mcg/dL by evening. A healthy cortisol curve peaks shortly after waking (the cortisol awakening response) and drops steadily. A flattened curve \u2014 where morning and evening levels are similar \u2014 indicates chronic stress and is associated with fatigue, weight gain, and immune suppression."},
        {"question": "How can I lower my cortisol naturally?", "answer": "Evidence-based strategies include: sleep hygiene (consistent schedule, 7-9 hours), caffeine timing (stop 8-10 hours before bed), exercise modulation (moderate is better than extreme), stress management (meditation, deep breathing, time in nature), social connection, and regular meal timing. Even 10 minutes of daily meditation has been shown to reduce salivary cortisol."},
        {"question": "When should I get my cortisol tested?", "answer": "Consider salivary cortisol testing if your score exceeds 60, especially if you have multiple symptoms. A four-point salivary cortisol test (morning, noon, evening, bedtime) maps your diurnal curve and is more informative than a single blood draw. Your doctor may also test DHEA-S, which declines relative to cortisol under chronic stress."},
    ],

    "sources": [
        {"text": "Cohen S, Kamarck T, Mermelstein R. A global measure of perceived stress. J Health Soc Behav. 1983;24(4):385-396.", "url": "https://pubmed.ncbi.nlm.nih.gov/6668417/"},
        {"text": "Hirotsu C, Tufik S, Andersen ML. Interactions between sleep, stress, and metabolism: from physiological to pathological conditions. Sleep Sci. 2015;8(3):143-152.", "url": "https://pubmed.ncbi.nlm.nih.gov/26779321/"},
        {"text": "Lovallo WR, et al. Cortisol responses to mental stress, exercise, and meals following caffeine intake in men and women. Pharmacol Biochem Behav. 2006;83(3):441-447.", "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC2257922/"},
        {"text": "Hill EE, et al. Exercise and circulating cortisol levels: the intensity threshold effect. J Endocrinol Invest. 2008;31(7):587-591.", "url": "https://pubmed.ncbi.nlm.nih.gov/18787373/"},
        {"text": "Rachdaoui N, Bhavna S. Effects of alcohol on the endocrine system. Endocrinol Metab Clin North Am. 2013;42(3):593-615.", "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6760387/"},
    ],

    "methodology": "<p>This assessment combines three validated domains:</p><p><strong>Stress Perception (0-35 points):</strong> Adapted from the PSS-10 (Cohen, 1983). Five items on a 0-4 scale; items 4-5 are reverse-scored. Raw sum (0-20) is normalized to 0-35 points.</p><p><strong>Lifestyle Load (0-40 points):</strong> Sleep duration and quality, caffeine intake and timing, exercise volume and intensity, alcohol consumption, and meal regularity. Each factor scored using evidence-based thresholds from published dose-response research.</p><p><strong>Symptom Signals (0-25 points):</strong> Ten symptoms associated with chronic cortisol elevation, each contributing 2.5 points when present.</p><p>Composite score (0-100) = Stress Perception + Lifestyle Load + Symptom Signals. Classifications: 0-25 Resilient, 26-45 Balanced with Risk Factors, 46-65 Elevated Cortisol Risk, 66-85 High Cortisol Risk, 86-100 Burnout Risk.</p>",

    "llm_capsule": "Cortisol stress assessment combining PSS-10 stress perception (5 items, 0-35 pts), lifestyle risk factors including sleep, caffeine, exercise, alcohol, and meal regularity (0-40 pts), and 10 cortisol-related symptom checks (0-25 pts). Composite score 0-100. Classifications: 0-25 Resilient, 26-45 Balanced with Risk Factors, 46-65 Elevated Cortisol Risk, 66-85 High Cortisol Risk, 86-100 Burnout Risk. Based on PSS-10 (Cohen 1983), caffeine-cortisol research (Lovallo, PMC2257922), and exercise intensity threshold (Hill 2008).",

    "ask_pills": ["Lower cortisol naturally", "Caffeine and cortisol", "Best time to exercise", "Cortisol testing"],
    "ask_placeholder": "e.g. How do I lower my cortisol?",

    "medical_disclaimer_override": "This is a stress assessment tool, not a medical diagnosis. It does not measure actual cortisol levels. Consult a healthcare provider for clinical evaluation.",
}

register("cortisol_stress_assessment", CORTISOL_STRESS_ASSESSMENT)
