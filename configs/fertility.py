from configs import register

ADULT_HEIGHT_PREDICTOR = {
    "route": "/adult-height-predictor-calculator",
    "override_template": None,

    "seo": {
        "page_title": "Adult Height Predictor Calculator \u2014 Estimate Future Height",
        "meta_description": "Predict a child's future adult height based on current age, height, and parental height using validated models.",
        "og_title": "How tall will your child be?",
        "og_description": "Estimate adult height using mid-parental height and growth data.",
        "schema_type": "WebPage",
        "schema_name": "Adult Height Predictor Calculator",
        "schema_description": "Estimate your child's adult height using genetics and growth trajectory.",
        "schema_about": "Height Predictor",
        "date_published": "2025-06-01",
        "date_modified": "2026-03-20",
        "robots": "index, follow",
    },

    "accent": "#06b6d4",
    "accent_rgb": "6,182,212",

    "hero": {
        "headline": "How <span>tall</span> will they be?",
        "subtitle": "Predict adult height from genetics + growth trajectory",
    },

    "breadcrumb_category": {"name": "Fertility & Pregnancy", "url": "/fertility-pregnancy-calculators"},

    "form": {
        "fields": [
            {"id": "childGender", "type": "select", "label": "Gender", "options": [
                {"value": "male", "label": "Male", "selected": True},
                {"value": "female", "label": "Female"},
            ]},
            {"id": "childAge", "type": "number", "label": "Age (years)", "default": 10, "min": 1, "max": 17, "step": 0.5},
            {"id": "childHeight", "type": "number", "label": "Child's Current Height (cm)", "min": 30, "max": 220, "step": 0.1, "placeholder": "e.g. 140"},
            {"id": "motherHeight", "type": "number", "label": "Mother's Height (cm)", "min": 100, "max": 220, "step": 0.1, "placeholder": "e.g. 165"},
            {"id": "fatherHeight", "type": "number", "label": "Father's Height (cm)", "min": 100, "max": 220, "step": 0.1, "placeholder": "e.g. 178"},
        ],
        "submit_label": "Predict Height",
    },

    "results": {
        "primary": {"id": "resultNumber", "unit": "predicted adult height"},
        "verdict_id": "resultVerdict",
        "breakdown": [
            {"id": "heightRange", "label": "Range"},
            {"id": "midParental", "label": "Mid-parental height"},
            {"id": "growthRemaining", "label": "Growth remaining"},
        ],
    },

    "coach": {
        "title": "Growth insight",
        "container_id": "coachCard",
        "cta_text": "Questions about growth?",
    },

    "js_file": "js/calculators/adult_height_predictor.js",

    "faq": [
        {"question": "How accurate are height predictors?", "answer": "Mid-parental height predictions are accurate within +/- 5 cm (2 inches) for most children. Accuracy improves after age 4."},
        {"question": "What factors affect adult height?", "answer": "Genetics (60-80%), nutrition, sleep, hormones, and overall health. Mid-parental height captures the genetic component."},
        {"question": "When do children stop growing?", "answer": "Girls typically stop at 14-16, boys at 16-18. Growth plates close when epiphyseal fusion is complete."},
    ],

    "sources": [],

    "methodology": "<p>This calculator uses the mid-parental height method combined with growth trajectory analysis. For boys: mid-parental height = (mother's height + father's height) / 2 + 6.5 cm. For girls: mid-parental height = (mother's height + father's height) / 2 - 6.5 cm. After age 4, the child's current growth percentile is factored in to adjust the prediction. Predictions are accurate within +/- 5 cm for most children.</p>",

    "llm_capsule": "Adult height prediction uses mid-parental height (average of parents' heights +/- 6.5 cm for sex) combined with the child's current growth trajectory. Genetics account for 60-80% of adult height. The Tanner method adds 6.5 cm for boys or subtracts 6.5 cm for girls from the average of parents' heights. Predictions are accurate within +/- 5 cm for most children over age 4.",

    "ask_pills": ["Growth spurts", "Nutrition for height", "When do boys stop growing"],
    "ask_placeholder": "e.g. Growth spurts in puberty?",
}

register("adult_height_predictor", ADULT_HEIGHT_PREDICTOR)



DOG_PREGNANCY = {
    "route": "/dog-pregnancy-due-date-calculator",
    "override_template": None,

    "seo": {
        "page_title": "Dog Pregnancy Due-Date Calculator — Estimate Whelping Date",
        "meta_description": "Estimate your dog's due date based on breeding date. Uses the standard 63-day canine gestation period.",
        "og_title": "When is your dog due?",
        "og_description": "Estimate your dog's whelping date based on mating date. 63-day gestation calculation.",
        "schema_type": "WebPage",
        "schema_name": "Dog Pregnancy Due Date Calculator",
        "schema_description": "Estimate whelping date using standard 63-day canine gestation.",
        "schema_about": "Dog Pregnancy Calculator",
        "date_published": "2025-06-01",
        "date_modified": "2026-03-23",
        "robots": "index, follow",
    },

    "accent": "#ec4899",
    "accent_rgb": "236,72,153",

    "hero": {
        "headline": "When is your <span>dog</span> due?",
        "subtitle": "63-day canine gestation calculator",
    },

    "breadcrumb_category": {"name": "Fertility & Pregnancy", "url": "/pregnancy-fertility-calculators"},

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

    "js_file": "js/calculators/dog_pregnancy.js",

    "faq": [
        {"question": "How long is a dog's pregnancy?", "answer": "Canine pregnancy averages 63 days from ovulation, with a normal window of 58-68 days from mating."},
        {"question": "What are signs labor is approaching?", "answer": "Temperature drop below 99F (37.2C) 12-24 hours before delivery, restlessness, nesting, decreased appetite, and visible contractions."},
        {"question": "Are all dog breeds the same?", "answer": "Small breeds may deliver slightly earlier (~62 days), giant breeds slightly later (64-65 days). Individual variation is common."},
    ],

    "sources": [
        {"text": "Johnston SD, Root Kustritz MV, Olson PNS. Canine and Feline Theriogenology. Saunders; 2001."},
        {"text": "Concannon PW. Reproductive cycles of the domestic bitch. Anim Reprod Sci. 2011;124(3-4):200-210. PubMed", "url": "https://pubmed.ncbi.nlm.nih.gov/21055888/"},
    ],

    "methodology": "",

    "llm_capsule": "Dog pregnancy (gestation) averages 63 days from ovulation. The normal whelping window is 58-68 days from mating. Small breeds may deliver around day 62, giant breeds around day 64-65. Key signs of imminent labor: rectal temperature drops below 99F, nesting behavior, decreased appetite. Always consult a veterinarian for prenatal care.",

    "ask_pills": ["Pregnancy nutrition", "When to see vet", "Whelping supplies"],
    "ask_placeholder": "e.g. Signs of dog labor?",
}

register("dog_pregnancy", DOG_PREGNANCY)

FEMALE_FERTILITY = {
    "route": "/female-fertility-calculator",
    "override_template": None,

    "seo": {
        "page_title": "Female Fertility Calculator — Fertile Window",
        "meta_description": "Estimate your fertile window and ovulation date based on menstrual cycle length.",
        "og_title": "Fertility Calculator",
        "og_description": "Estimate your fertile window and ovulation date based on menstrual cycle length.",
        "schema_type": "MedicalWebPage",
        "schema_name": "Fertility Calculator",
        "schema_description": "Estimate your fertile window and ovulation date based on menstrual cycle length.",
        "schema_about": "Fertility Calculator",
        "date_published": "2025-06-01",
        "date_modified": "2026-03-23",
        "robots": "noindex, nofollow",
    },

    "accent": "#ec4899",
    "accent_rgb": "236,72,153",

    "hero": {
        "headline": "When is your <span>fertile</span> window?",
        "subtitle": "Based on your cycle length",
    },

    "breadcrumb_category": {"name": "Fertility & Pregnancy", "url": "/pregnancy-fertility-calculators"},

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

    "js_file": "js/calculators/female_fertility.js",

    "faq": [
        {"question": "Best time to conceive?", "answer": "The 5 days before ovulation and ovulation day itself. Sperm survive up to 5 days."},
        {"question": "How to know ovulation?", "answer": "Temperature rise, cervical mucus changes, mild pelvic pain. OPKs detect LH surge 24-36 hours before."},
        {"question": "Fertility and age?", "answer": "Peaks in mid-20s, declines after 30, sharply after 35. At 40, about 5% chance per cycle."},
        {"question": "When to see a doctor?", "answer": "Under 35: after 12 months trying. 35-39: after 6 months. 40+: see specialist right away."},
    ],

    "sources": [
        {"text": "ACOG Practice Bulletin No. 310. 2024.", "url": "https://pubmed.ncbi.nlm.nih.gov/"},
        {"text": "Wilcox AJ et al. NEJM. 1995;333(23):1517-1521.", "url": "https://pubmed.ncbi.nlm.nih.gov/7477165/"},
    ],

    "methodology": "<p>Ovulation estimated as cycle length minus 14 days. Fertile window: 5 days before ovulation through ovulation day.</p>",

    "llm_capsule": "Fertile window: 6 days ending on ovulation day. Ovulation ~14 days before next period. Best chance: 1-2 days before ovulation.",

    "ask_pills": ["Ovulation signs", "Fertility after 35", "Cycle tracking", "When to see doctor"],
    "ask_placeholder": "e.g. Best time to conceive?",
}

register("female_fertility", FEMALE_FERTILITY)

FORMULA_FEEDING = {
    "route": "/formula-feeding-calculator",
    "override_template": None,

    "seo": {
        "page_title": "Formula Feeding Calculator — How Much Formula Baby Needs",
        "meta_description": "Calculate formula amount per feeding and per day based on baby age and weight.",
        "og_title": "Formula Feeding Calculator",
        "og_description": "Calculate formula amount per feeding and per day based on baby age and weight.",
        "schema_type": "MedicalWebPage",
        "schema_name": "Formula Feeding Calculator",
        "schema_description": "Calculate formula amount per feeding and per day based on baby age and weight.",
        "schema_about": "Formula Feeding Calculator",
        "date_published": "2025-06-01",
        "date_modified": "2026-03-23",
        "robots": "noindex, nofollow",
    },

    "accent": "#06b6d4",
    "accent_rgb": "6,182,212",

    "hero": {
        "headline": "How much <span>formula</span> does baby need?",
        "subtitle": "Based on age and weight",
    },

    "breadcrumb_category": {"name": "Fertility & Pregnancy", "url": "/pregnancy-fertility-calculators"},

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

    "js_file": "js/calculators/formula_feeding.js",

    "faq": [
        {"question": "How much formula per day?", "answer": "About 2.5 oz per pound of body weight, up to 32 oz max. A 10 lb baby needs ~25 oz."},
        {"question": "How often should newborn eat?", "answer": "Every 2-3 hours (8-12 times/day). By 3-4 months: every 3-4 hours."},
        {"question": "Maximum daily formula?", "answer": "AAP recommends max 32 oz (960 mL). If baby needs more, discuss starting solids."},
        {"question": "When to start solids?", "answer": "Around 4-6 months when baby shows readiness: sitting, head control, interest in food."},
    ],

    "sources": [
        {"text": "AAP. Caring for Your Baby. 7th ed. 2019.", "url": "https://www.aap.org/"},
        {"text": "AAP Breastfeeding and Human Milk. Pediatrics. 2012.", "url": "https://pubmed.ncbi.nlm.nih.gov/22371471/"},
    ],

    "methodology": "<p>Age-stratified ml/kg/day rates: 150 (0-4mo), 120 (4-6mo), 100 (6-9mo), 75 (9-12mo). 32 oz daily cap per AAP.</p>",

    "llm_capsule": "Formula: ~2.5 oz per pound per day, max 32 oz. Newborns eat every 2-3 hours. Introduce solids at 4-6 months.",

    "ask_pills": ["Feeding schedule", "Hunger signs", "When to start solids", "Overfeeding"],
    "ask_placeholder": "e.g. Feeding schedule?",
}

register("formula_feeding", FORMULA_FEEDING)

GESTATIONAL_AGE = {
    "route": "/gestational-age-calculator",
    "override_template": None,

    "seo": {
        "page_title": "Gestational Age Calculator — Weeks and Days Pregnant",
        "meta_description": "Calculate gestational age from LMP, ultrasound, or IVF date. Shows weeks pregnant, due date, trimester.",
        "og_title": "Gestational Age Calculator",
        "og_description": "Calculate gestational age from LMP, ultrasound, or IVF date. Shows weeks pregnant, due date, trimester.",
        "schema_type": "MedicalWebPage",
        "schema_name": "Gestational Age Calculator",
        "schema_description": "Calculate gestational age from LMP, ultrasound, or IVF date. Shows weeks pregnant, due date, trimester.",
        "schema_about": "Gestational Age Calculator",
        "date_published": "2025-06-01",
        "date_modified": "2026-03-23",
        "robots": "noindex, nofollow",
    },

    "accent": "#ec4899",
    "accent_rgb": "236,72,153",

    "hero": {
        "headline": "How many <span>weeks</span> pregnant?",
        "subtitle": "Calculate from LMP, ultrasound, or IVF",
    },

    "breadcrumb_category": {"name": "Fertility & Pregnancy", "url": "/pregnancy-fertility-calculators"},

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

    "js_file": "js/calculators/gestational_age.js",

    "faq": [
        {"question": "How is gestational age calculated?", "answer": "From first day of last menstrual period (LMP). Includes ~2 weeks before conception. Due date = LMP + 280 days."},
        {"question": "Gestational vs fetal age?", "answer": "Fetal age = gestational age minus 14 days. Gestational age is the standard used in obstetrics."},
        {"question": "How accurate is the due date?", "answer": "Only 5% of babies born on due date. First-trimester ultrasound accurate within 5-7 days."},
        {"question": "ACOG term classifications?", "answer": "Early term: 37-38 weeks. Full term: 39-40 weeks. Late term: 41 weeks. Post-term: 42+ weeks."},
    ],

    "sources": [
        {"text": "ACOG Committee Opinion No. 700. 2017.", "url": "https://pubmed.ncbi.nlm.nih.gov/28426621/"},
        {"text": "ACOG Definition of Term Pregnancy. 2013.", "url": "https://pubmed.ncbi.nlm.nih.gov/24150030/"},
    ],

    "methodology": "<p>Days since LMP-equivalent date. For ultrasound: back-calculated from reported age. For IVF: LMP = transfer date - (14 + embryo days). Due date: LMP + 280 days.</p>",

    "llm_capsule": "Gestational age counts from LMP. Full term: 39-40 weeks. Due date = LMP + 280 days. Only 5% of babies arrive on due date.",

    "ask_pills": ["Trimester milestones", "Due date accuracy", "Baby development", "Prenatal testing"],
    "ask_placeholder": "e.g. What to expect at 20 weeks?",
}

register("gestational_age", GESTATIONAL_AGE)