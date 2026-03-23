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

IVF_DUE_DATE = {
    "route": "/ivf-due-date-calculator",
    "override_template": "ivf_due_date_v3.html",

    "seo": {
        "page_title": "IVF Due Date Calculator — FET & Transfer Timeline",
        "meta_description": "Calculate your IVF due date by transfer type. Enter your transfer date for Day 3, Day 5, or FET to see due date, gestational age, trimester dates, and milestones.",
        "og_title": "When is your IVF baby due?",
        "og_description": "Calculate your IVF due date by transfer type. Enter your transfer date for due date, gestational age, and key milestones.",
        "schema_type": "MedicalWebPage",
        "schema_name": "IVF Due Date Calculator",
        "schema_description": "Calculate your estimated due date after IVF embryo transfer. Supports Day 3, Day 5, Day 6, fresh and frozen (FET) transfers.",
        "schema_about": "IVF Due Date Calculator",
        "date_published": "2025-06-01",
        "date_modified": "2026-03-20",
        "robots": "index, follow",
    },

    "accent": "#14b8a6",
    "accent_rgb": "20,184,166",

    "hero": {
        "headline": "When is your <span>IVF baby</span> due?",
        "subtitle": "Select your transfer type",
    },

    "breadcrumb_category": {"name": "Pregnancy & Fertility", "url": "/pregnancy-fertility-calculators"},

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
        {"question": "How is an IVF due date calculated?", "answer": "An IVF due date is calculated from the embryo transfer date rather than the last menstrual period. For a Day 5 blastocyst transfer, add 261 days to the transfer date. For a Day 3 embryo transfer, add 263 days. This follows ACOG Committee Opinion No. 700."},
        {"question": "Is an IVF due date more accurate than a natural conception due date?", "answer": "Yes. IVF due dates are among the most accurate because the exact date of fertilization or transfer is known, eliminating uncertainty from irregular cycles or ovulation timing. Studies show IVF dating matches ultrasound dating within 1-3 days."},
        {"question": "Does frozen vs fresh transfer change the due date?", "answer": "No. Whether the embryo was frozen (FET) or fresh does not change the due date calculation. The formula depends on the embryo's age at transfer (Day 3, Day 5, or Day 6), not whether it was previously frozen."},
        {"question": "When is the first ultrasound after IVF transfer?", "answer": "The first ultrasound after IVF is typically scheduled at 6-8 weeks gestational age. For a Day 5 transfer, this is approximately 3-5 weeks after transfer day."},
        {"question": "How do I calculate gestational age after IVF?", "answer": "Gestational age after IVF is calculated by adding the embryo's age at transfer plus 14 days (to convert to LMP-equivalent dating) to the number of days since transfer. For example, 10 days after a Day 5 transfer: 10 + 5 + 14 = 29 days = 4 weeks 1 day gestational age."},
    ],

    "sources": [],
    "methodology": "",
    "llm_capsule": "",
    "ask_pills": [],
    "ask_placeholder": "",
}

register("ivf_due_date", IVF_DUE_DATE)

NEWBORN_WEIGHT_LOSS = {
    "route": "/newborn-weight-loss-calculator",
    "override_template": "newborn_weight_loss_calculator_v3.html",

    "seo": {
        "page_title": "Newborn Weight Loss Calculator — Is My Baby Losing Too Much?",
        "meta_description": "Check if your newborn's weight loss is normal. Enter birth weight and current weight to see if it's within the safe range. Based on AAP guidelines.",
        "og_title": "Is my baby losing too much weight?",
        "og_description": "Check if your newborn's weight loss is normal based on AAP guidelines. Immediate, clear results with next steps.",
        "schema_type": "MedicalWebPage",
        "schema_name": "Newborn Weight Loss Calculator",
        "schema_description": "Assess newborn weight loss as a percentage of birth weight and compare against AAP clinical thresholds.",
        "schema_about": "Newborn Weight Loss Calculator",
        "date_published": "2025-06-01",
        "date_modified": "2026-03-20",
        "robots": "noindex, nofollow",
    },

    "accent": "#14b8a6",
    "accent_rgb": "20,184,166",

    "hero": {
        "headline": "Is your baby's <span>weight loss</span> normal?",
        "subtitle": "All newborns lose weight in the first days. Let's check if yours is within the safe range.",
    },

    "breadcrumb_category": {"name": "Pregnancy & Fertility", "url": "/pregnancy-fertility-calculators"},

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
        {"question": "How much weight loss is normal for a newborn?", "answer": "Most newborns lose 5-7% of birth weight in the first 3 days. Breastfed babies may lose up to 10%. This is normal and caused by fluid shifts and limited initial feeding. Birth weight is typically regained by days 10-14."},
        {"question": "When should I worry about my newborn's weight loss?", "answer": "Contact your pediatrician if: weight loss exceeds 10% of birth weight, baby hasn't started gaining by day 5, or birth weight isn't regained by day 14. Also watch for fewer than 6 wet diapers per day after day 4."},
        {"question": "When do newborns regain their birth weight?", "answer": "Most newborns regain birth weight by 10-14 days of age. Weight loss typically stops and reversal begins by day 3-5. Formula-fed babies tend to regain slightly faster than exclusively breastfed babies."},
        {"question": "What causes newborn weight loss?", "answer": "Normal causes include: fluid shifts (babies are born with extra fluid), limited colostrum volume before mature milk comes in (day 2-5), and meconium passage. C-section babies may lose more due to extra IV fluids during delivery."},
        {"question": "Is weight loss different for breastfed vs formula-fed babies?", "answer": "Yes. Breastfed babies typically lose slightly more weight (7-10%) because mature milk takes 2-5 days to come in. Formula-fed babies usually lose 5-7%. Both patterns are normal. The NEWT tool provides feeding-specific reference curves."},
    ],

    "sources": [],
    "methodology": "",
    "llm_capsule": "",
    "ask_pills": [],
    "ask_placeholder": "",
}

register("newborn_weight_loss", NEWBORN_WEIGHT_LOSS)

HCG_DOUBLING = {
    "route": "/hcg-doubling-time-calculator",
    "override_template": "hcg_doubling_calculator_v3.html",

    "seo": {
        "page_title": "hCG Doubling Time Calculator — Are Your Levels Normal?",
        "meta_description": "Calculate hCG doubling time from two blood tests. See if levels are rising normally for early pregnancy.",
        "og_title": "hCG Doubling Time Calculator",
        "og_description": "Calculate hCG doubling time from two blood tests. See if levels are rising normally for early pregnancy.",
        "schema_type": "MedicalWebPage",
        "schema_name": "hCG Doubling Time Calculator",
        "schema_description": "Calculate hCG doubling time from two blood tests. See if levels are rising normally for early pregnancy.",
        "schema_about": "hCG Doubling Time Calculator",
        "date_published": "2025-06-01",
        "date_modified": "2026-03-20",
        "robots": "noindex, nofollow",
    },

    "accent": "#14b8a6",
    "accent_rgb": "20,184,166",

    "hero": {
        "headline": "Is your <span>hCG</span> rising normally?",
        "subtitle": "Calculate hCG doubling time from two blood tests. See if levels are rising norma",
    },

    "breadcrumb_category": {"name": "Pregnancy & Fertility", "url": "/pregnancy-fertility-calculators"},

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
        {"question": "How fast should hCG double?", "answer": "Below 1,200: every 48-72 hours. 1,200-6,000: every 72-96 hours. Above 6,000: rate naturally slows."},
        {"question": "Normal hCG at 4 weeks?", "answer": "Typically 5-426 mIU/mL. Wide range due to variable implantation timing."},
        {"question": "Can hCG predict twins?", "answer": "Twins may have 30-50% higher hCG by week 6, but ultrasound is definitive."},
        {"question": "What does declining hCG mean?", "answer": "In early pregnancy: usually miscarriage or ectopic. After week 11: normal decline from peak."},
    ],

    "sources": [],
    "methodology": "",
    "llm_capsule": "",
    "ask_pills": [],
    "ask_placeholder": "",
}

register("hcg_doubling", HCG_DOUBLING)

HCG_CALCULATOR = {
    "route": "/hcg-calculator",
    "override_template": "hcg_doubling_calculator_v3.html",

    "seo": {
        "page_title": "hCG Doubling Time Calculator — Are Your Levels Normal?",
        "meta_description": "Calculate hCG doubling time from two blood tests. See if levels are rising normally for early pregnancy.",
        "og_title": "hCG Doubling Time Calculator",
        "og_description": "Calculate hCG doubling time from two blood tests. See if levels are rising normally for early pregnancy.",
        "schema_type": "MedicalWebPage",
        "schema_name": "hCG Doubling Time Calculator",
        "schema_description": "Calculate hCG doubling time from two blood tests. See if levels are rising normally for early pregnancy.",
        "schema_about": "hCG Doubling Time Calculator",
        "date_published": "2025-06-01",
        "date_modified": "2026-03-20",
        "robots": "noindex, nofollow",
    },

    "accent": "#14b8a6",
    "accent_rgb": "20,184,166",

    "hero": {
        "headline": "Is your <span>hCG</span> rising normally?",
        "subtitle": "Calculate hCG doubling time from two blood tests. See if levels are rising norma",
    },

    "breadcrumb_category": {"name": "Pregnancy & Fertility", "url": "/pregnancy-fertility-calculators"},

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
        {"question": "How fast should hCG double?", "answer": "Below 1,200: every 48-72 hours. 1,200-6,000: every 72-96 hours. Above 6,000: rate naturally slows."},
        {"question": "Normal hCG at 4 weeks?", "answer": "Typically 5-426 mIU/mL. Wide range due to variable implantation timing."},
        {"question": "Can hCG predict twins?", "answer": "Twins may have 30-50% higher hCG by week 6, but ultrasound is definitive."},
        {"question": "What does declining hCG mean?", "answer": "In early pregnancy: usually miscarriage or ectopic. After week 11: normal decline from peak."},
    ],

    "sources": [],
    "methodology": "",
    "llm_capsule": "",
    "ask_pills": [],
    "ask_placeholder": "",
}

register("hcg_calculator", HCG_CALCULATOR)

PREGNANCY_WEIGHT_GAIN = {
    "route": "/pregnancy-weight-gain-calculator",
    "override_template": "pregnancy_weight_gain_calculator_v3.html",

    "seo": {
        "page_title": "Pregnancy Weight Gain Calculator — IOM Guidelines",
        "meta_description": "Calculate recommended pregnancy weight gain based on pre-pregnancy BMI using IOM 2009 guidelines.",
        "og_title": "Pregnancy Weight Gain Calculator",
        "og_description": "Calculate recommended pregnancy weight gain based on pre-pregnancy BMI using IOM 2009 guidelines.",
        "schema_type": "MedicalWebPage",
        "schema_name": "Pregnancy Weight Gain Calculator",
        "schema_description": "Calculate recommended pregnancy weight gain based on pre-pregnancy BMI using IOM 2009 guidelines.",
        "schema_about": "Pregnancy Weight Gain Calculator",
        "date_published": "2025-06-01",
        "date_modified": "2026-03-20",
        "robots": "noindex, nofollow",
    },

    "accent": "#14b8a6",
    "accent_rgb": "20,184,166",

    "hero": {
        "headline": "How much weight to <span>gain</span>?",
        "subtitle": "Calculate recommended pregnancy weight gain based on pre-pregnancy BMI using IOM",
    },

    "breadcrumb_category": {"name": "Pregnancy & Fertility", "url": "/pregnancy-fertility-calculators"},

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
        {"question": "How much weight gain?", "answer": "IOM 2009: Underweight 28-40 lbs, Normal 25-35 lbs, Overweight 15-25 lbs, Obese 11-20 lbs."},
        {"question": "When does most gain occur?", "answer": "Most in 2nd and 3rd trimesters. First trimester: 1-4.5 lbs total."},
        {"question": "Is excess gain dangerous?", "answer": "Increases risk of gestational diabetes, preeclampsia, cesarean delivery, and postpartum weight retention."},
        {"question": "Twin pregnancy weight gain?", "answer": "Normal weight: 37-54 lbs. Overweight: 31-50 lbs. Obese: 25-42 lbs."},
    ],

    "sources": [],
    "methodology": "",
    "llm_capsule": "",
    "ask_pills": [],
    "ask_placeholder": "",
}

register("pregnancy_weight_gain", PREGNANCY_WEIGHT_GAIN)
