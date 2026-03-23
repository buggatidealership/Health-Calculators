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
        "submit_label": "",
    },

    "results": {
        "primary": {"id": "resultNumber", "unit": "nmol/L"},
        "verdict_id": "resultVerdict",
        "breakdown": [
            {"id": "resultEquals", "label": "Equivalent"},
            {"id": "resultPlain", "label": "Interpretation"},
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
    "override_template": "caffeine_half_life_v3.html",

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

    "form": {"fields": [], "submit_label": ""},

    "results": {
        "primary": {"id": "resultNumber", "unit": "mg at bedtime"},
        "verdict_id": "resultVerdict",
        "breakdown": [],
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
