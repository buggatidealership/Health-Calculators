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
        "robots": "index, follow",
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
        "robots": "index, follow",
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
