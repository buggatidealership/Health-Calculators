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
        "robots": "noindex, nofollow",
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
        "robots": "noindex, nofollow",
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
        "robots": "index, follow",
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
    "override_template": "antidepressant_weight_gain_calculator_v3.html",

    "seo": {
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
        "robots": "noindex, nofollow",
    },

    "accent": "#8b5cf6",
    "accent_rgb": "139,92,246",

    "hero": {
        "headline": "Will your <span>medication</span> affect weight?",
        "subtitle": "Clinical research-based estimates",
    },

    "breadcrumb_category": {"name": "Health & Longevity", "url": "/health-longevity-calculators"},

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
    "override_template": "child_growth_calculator_v3.html",

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
        "date_modified": "2026-03-23",
        "robots": "index, follow",
    },

    "accent": "#5ba8d4",
    "accent_rgb": "91,168,212",

    "hero": {
        "headline": "Is your child <span>growing well</span>?",
        "subtitle": "Check height, weight, and BMI percentiles by age",
    },

    "breadcrumb_category": {"name": "Health & Longevity", "url": "/health-longevity-calculators"},

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
    "override_template": "lifespan_v25.html",

    "seo": {
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
        "robots": "noindex, nofollow",
    },

    "accent": "#14b8a6",
    "accent_rgb": "20,184,166",

    "hero": {
        "headline": "How long will you <span>live</span>?",
        "subtitle": "Based on research from the Framingham Heart Study and WHO data",
    },

    "breadcrumb_category": {"name": "Health & Longevity", "url": "/health-longevity-calculators"},

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
        {"question": "How accurate is this lifespan calculator?", "answer": "This provides statistical estimates based on population-level research, not individual predictions. Consider results as general guidelines."},
        {"question": "Can I really add years by changing habits?", "answer": "Yes. The big four behaviors -- not smoking, healthy weight, exercise, and good diet -- are associated with 11-14 years of increased life expectancy."},
        {"question": "Why does social connection affect lifespan?", "answer": "Meta-analyses show social isolation has mortality risk comparable to smoking 15 cigarettes daily, exceeding risks of obesity and inactivity."},
        {"question": "How much can genetics determine lifespan?", "answer": "Twin studies suggest 20-30% of lifespan variation is genetic. Lifestyle remains more influential for most people."},
    ],

    "sources": [],
    "methodology": "",
    "llm_capsule": "",
    "ask_pills": [],
    "ask_placeholder": "",
}

register("lifespan", LIFESPAN)

VITAMIN_D_INTAKE = {
    "route": "/vitamin-d-intake-calculator",
    "override_template": "vitamin_d_intake_v3.html",

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
        {"question": "How much vitamin D should I take daily?", "answer": "Most adults need 600-2000 IU of vitamin D daily. The NIH recommends 600 IU for ages 1-70 and 800 IU for 71+. Many clinicians recommend 1000-2000 IU for general supplementation, especially for those with limited sun exposure."},
        {"question": "What is a good vitamin D blood level?", "answer": "A blood level of 30-50 ng/mL (75-125 nmol/L) is considered sufficient by most medical organizations. Below 20 ng/mL is deficient, 20-29 is insufficient. Some health optimization experts target 40-60 ng/mL."},
        {"question": "Can you take too much vitamin D?", "answer": "Yes. The safe upper limit is 4,000 IU per day for adults according to the Institute of Medicine. Toxicity can occur above 10,000 IU daily over extended periods, causing high blood calcium, nausea, and kidney problems."},
        {"question": "Should I take vitamin D2 or D3?", "answer": "Vitamin D3 (cholecalciferol) is generally preferred. Research shows D3 is 2-3 times more effective than D2 at raising blood levels. D3 is the same form your skin produces naturally."},
        {"question": "Does skin color affect vitamin D needs?", "answer": "Yes. Melanin in darker skin acts as a natural sunscreen, reducing vitamin D production from sunlight. People with darker skin may need 3-5 times more sun exposure to produce the same amount of vitamin D."},
    ],

    "sources": [],
    "methodology": "",
    "llm_capsule": "",
    "ask_pills": [],
    "ask_placeholder": "",
}

register("vitamin_d_intake", VITAMIN_D_INTAKE)

MENOPAUSE = {
    "route": "/menopause-calculator",
    "override_template": "menopause_calculator_v3.html",

    "seo": {
        "page_title": "Menopause Calculator — Predict When It May Start",
        "meta_description": "Predict perimenopause and menopause age based on family history and lifestyle factors.",
        "og_title": "Menopause Age Calculator",
        "og_description": "Predict perimenopause and menopause age based on family history and lifestyle factors.",
        "schema_type": "MedicalWebPage",
        "schema_name": "Menopause Age Calculator",
        "schema_description": "Predict perimenopause and menopause age based on family history and lifestyle factors.",
        "schema_about": "Menopause Age Calculator",
        "date_published": "2025-06-01",
        "date_modified": "2026-03-20",
        "robots": "noindex, nofollow",
    },

    "accent": "#14b8a6",
    "accent_rgb": "20,184,166",

    "hero": {
        "headline": "When will <span>menopause</span> start?",
        "subtitle": "Predict perimenopause and menopause age based on family history and lifestyle fa",
    },

    "breadcrumb_category": {"name": "Health & Longevity", "url": "/health-longevity-calculators"},

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
        {"question": "Average menopause age?", "answer": "US average: 51 years. Normal range: 45-55. Before 40 is premature ovarian insufficiency."},
        {"question": "What is perimenopause?", "answer": "The transition period lasting 4-8 years before menopause. Symptoms: irregular periods, hot flashes, sleep issues."},
        {"question": "Family history predict it?", "answer": "Yes. Mother/sister menopause age is the strongest predictor (correlation ~0.5)."},
        {"question": "Does smoking affect timing?", "answer": "Current smokers reach menopause 1-2 years earlier. Former smokers: about 0.5-1 year earlier."},
    ],

    "sources": [],
    "methodology": "",
    "llm_capsule": "",
    "ask_pills": [],
    "ask_placeholder": "",
}

register("menopause", MENOPAUSE)

HEART_AGE = {
    "route": "/heart-age-calculator",
    "override_template": "heart_age_v25.html",

    "seo": {
        "page_title": "Heart Age Calculator — Cardiovascular Age Estimator",
        "meta_description": "Calculate your heart age based on cardiovascular risk factors from the Framingham Heart Study.",
        "og_title": "Heart Age Calculator -- Is Your Heart Older Than You?",
        "og_description": "Find your heart true age based on blood pressure, cholesterol, BMI, and lifestyle.",
        "schema_type": "WebPage",
        "schema_name": "Heart Age Calculator",
        "schema_description": "Calculate heart age based on Framingham Heart Study risk factors.",
        "schema_about": "Heart Age Calculator",
        "date_published": "2025-06-01",
        "date_modified": "2026-03-20",
        "robots": "noindex, nofollow",
    },

    "accent": "#14b8a6",
    "accent_rgb": "20,184,166",

    "hero": {
        "headline": "Is your heart <span>older</span> than you?",
        "subtitle": "Based on the Framingham Heart Study risk model",
    },

    "breadcrumb_category": {"name": "Health & Longevity", "url": "/health-longevity-calculators"},

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
        {"question": "What is heart age?", "answer": "Heart age expresses cardiovascular risk as an equivalent age. If your heart age is 55 but you are 45, your risk factors match a healthy 55-year-old."},
        {"question": "How accurate is this calculator?", "answer": "This is a simplified estimate based on major Framingham risk factors. Clinical tools include additional variables. Consider results approximate guidance."},
        {"question": "Can I lower my heart age?", "answer": "Yes. Quitting smoking can reduce heart age by up to 8 years. Lowering blood pressure, improving cholesterol, and exercising each reduce it by several years."},
        {"question": "Why is HDL measured separately?", "answer": "HDL (\"good\") cholesterol protects against heart disease. High total cholesterol with very high HDL may be lower risk than lower total with very low HDL."},
        {"question": "What is 10-year CVD risk?", "answer": "The probability of having a cardiovascular event (heart attack, stroke) in the next 10 years, based on your risk factor profile."},
    ],

    "sources": [],
    "methodology": "",
    "llm_capsule": "",
    "ask_pills": [],
    "ask_placeholder": "",
}

register("heart_age", HEART_AGE)
