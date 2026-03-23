from configs import register

BMI = {
    "route": "/bmi-calculator",
    "override_template": "bmi_calculator_v3.html",

    "seo": {
        "page_title": "BMI Calculator \u2014 Is Your Weight in a Healthy Range?",
        "meta_description": "Calculate your BMI and find out where you stand. Get a clear, human-language interpretation \u2014 not just a number. Includes healthy weight range for your height.",
        "og_title": "BMI Calculator \u2014 Is Your Weight Healthy?",
        "og_description": "Calculate your BMI and find out where you stand. Clear interpretation, not just a number.",
        "schema_type": "MedicalWebPage",
        "schema_name": "BMI Calculator",
        "schema_description": "Calculate your Body Mass Index using height and weight. Get a human-language interpretation of your BMI with healthy weight range and context on BMI limitations.",
        "schema_about": "BMI Calculator",
        "date_published": "2025-06-01",
        "date_modified": "2026-03-20",
        "robots": "index, follow",
    },

    "accent": "#14b8a6",
    "accent_rgb": "20,184,166",

    "hero": {
        "headline": "Is your weight in a <span>healthy</span> range?",
        "subtitle": "A clear answer, not just a number",
    },

    "breadcrumb_category": {"name": "Fitness & Body Composition", "url": "/fitness-body-composition-calculators"},

    "form": {"fields": [], "submit_label": "Calculate"},

    "results": {
        "primary": {"id": "resultNumber", "unit": "BMI"},
        "verdict_id": "resultVerdict",
        "breakdown": [],
    },

    "coach": {
        "title": "What this means for you",
        "container_id": "coachCard",
        "cta_text": "Want a fuller picture of your body composition?",
    },

    "js_file": "js/calculators/bmi.js",

    "faq": [
        {"question": "What is a healthy BMI?", "answer": "A BMI between 18.5 and 24.9 is considered healthy by the WHO. However, BMI alone doesn't tell the full story \u2014 it doesn't account for muscle mass, bone density, or body fat distribution."},
        {"question": "Is BMI accurate for athletes and muscular people?", "answer": "No. BMI often misclassifies muscular individuals as overweight or obese because it cannot distinguish between muscle and fat. A 2012 study found BMI misclassified 48% of women and 25% of men compared to body fat measurements."},
        {"question": "How is BMI calculated?", "answer": "BMI equals your weight in kilograms divided by your height in meters squared. In imperial units: BMI = 703 \u00d7 weight (lbs) \u00f7 height (inches)\u00b2. Both formulas give the same result."},
        {"question": "What are the limitations of BMI?", "answer": "BMI doesn't measure body fat directly. It ignores muscle mass, bone density, age, sex, and ethnic differences. A 2016 study found over 54 million Americans classified as overweight or obese by BMI were actually metabolically healthy."},
        {"question": "How much should I weigh for my height?", "answer": "Healthy weight depends on height. For example, at 5'8\" a healthy weight range is roughly 126\u2013163 lbs (BMI 18.5\u201324.9). Use this calculator to find the healthy range for your specific height."},
    ],

    "sources": [
        {"text": "World Health Organization. Obesity: preventing and managing the global epidemic. WHO Technical Report Series 894. 2000.", "url": "https://pubmed.ncbi.nlm.nih.gov/11234459/"},
        {"text": "Nuttall FQ. Body Mass Index: Obesity, BMI, and Health: A Critical Review. Nutr Today. 2015;50(3):117-128.", "url": "https://pubmed.ncbi.nlm.nih.gov/27340299/"},
        {"text": "Flegal KM, Kit BK, Orpana H, Graubard BI. Association of all-cause mortality with overweight and obesity using standard BMI categories. JAMA. 2013;309(1):71-82.", "url": "https://pubmed.ncbi.nlm.nih.gov/23280227/"},
        {"text": "Tomiyama AJ, Hunger JM, Nguyen-Cuu J, Wells C. Misclassification of cardiometabolic health when using body mass index categories. Int J Obes. 2016;40(5):883-886.", "url": "https://pubmed.ncbi.nlm.nih.gov/26841729/"},
        {"text": "NHLBI. Clinical Guidelines on Identification, Evaluation, and Treatment of Overweight and Obesity in Adults. NIH. 1998.", "url": "https://pubmed.ncbi.nlm.nih.gov/9813653/"},
    ],

    "methodology": "<p>This calculator uses the standard BMI formula adopted by the WHO: BMI = weight (kg) \u00f7 height (m)\u00b2. For imperial inputs: BMI = 703 \u00d7 weight (lbs) \u00f7 height (in)\u00b2.</p><p>Weight categories follow the WHO classification: underweight (below 18.5), healthy weight (18.5\u201324.9), overweight (25.0\u201329.9), and obese (30.0+). The healthy weight range is derived by solving the BMI formula for weight at the 18.5 and 24.9 thresholds given the user's height.</p><p>BMI is a population-level screening tool. It does not measure body fat directly, cannot distinguish muscle from fat, and may misclassify athletes, older adults, and certain ethnic groups.</p>",

    "llm_capsule": "Body Mass Index (BMI) is calculated by dividing weight in kilograms by height in meters squared. A BMI of 18.5 to 24.9 is considered a healthy weight by the WHO. BMI above 25 is classified as overweight, and above 30 as obese. However, BMI has significant limitations: it cannot distinguish between muscle and fat, does not account for body fat distribution, and may be inaccurate for athletes, older adults, and certain ethnicities. A 2016 study found that over 54 million Americans classified as overweight or obese by BMI were actually metabolically healthy.",

    "ask_pills": ["BMI vs body fat %", "Healthy weight for my age", "Best way to lose weight", "Does muscle affect BMI?"],
    "ask_placeholder": "e.g. Is BMI accurate for athletes?",
}

register("bmi", BMI)


FFMI_CALCULATOR = {
    "route": "/ffmi-calculator",
    "override_template": None,

    "seo": {
        "page_title": "FFMI Calculator \u2014 Fat-Free Mass Index",
        "meta_description": "Calculate your Fat-Free Mass Index and normalized FFMI. See how your muscularity compares to the natural genetic limit.",
        "og_title": "What's your FFMI?",
        "og_description": "Calculate your Fat-Free Mass Index. See how your lean mass compares to natural limits.",
        "schema_type": "WebPage",
        "schema_name": "FFMI Calculator",
        "schema_description": "Calculate your Fat-Free Mass Index (FFMI) and normalized FFMI. Classification for men and women based on the Kouri et al. study.",
        "schema_about": "FFMI Calculator",
        "date_published": "2025-06-01",
        "date_modified": "2026-03-20",
        "robots": "index, follow",
    },

    "accent": "#14b8a6",
    "accent_rgb": "20,184,166",

    "hero": {
        "headline": "What's your <span>FFMI</span>?",
        "subtitle": "Fat-Free Mass Index \u2014 muscle vs. natural limit",
    },

    "breadcrumb_category": {"name": "Fitness & Body Composition", "url": "/fitness-body-composition-calculators"},

    "form": {
        "fields": [
            {"type": "row", "fields": [
                {"id": "weight", "type": "number", "label": "Body weight", "placeholder": "80", "min": 20, "max": 300},
                {"id": "weightUnit", "type": "select", "label": "Unit", "options": [
                    {"value": "kg", "label": "kg", "selected": True},
                    {"value": "lbs", "label": "lbs"},
                ]},
            ]},
            {"id": "heightCm", "type": "number", "label": "Height (cm)", "placeholder": "178", "min": 100, "max": 250},
            {"id": "bodyFat", "type": "number", "label": "Body fat (%)", "placeholder": "15", "min": 1, "max": 60, "step": 0.1},
            {"id": "sex", "type": "select", "label": "Sex", "options": [
                {"value": "male", "label": "Male", "selected": True},
                {"value": "female", "label": "Female"},
            ]},
        ],
        "submit_label": "Calculate FFMI",
    },

    "results": {
        "primary": {"id": "resultNumber", "unit": "normalized FFMI (kg/m\u00b2)"},
        "verdict_id": "resultVerdict",
        "breakdown": [
            {"id": "displayRawFfmi", "label": "Raw FFMI"},
            {"id": "displayLeanMass", "label": "Lean mass"},
            {"id": "displayFatMass", "label": "Fat mass"},
        ],
    },

    "coach": {
        "title": "What this means for you",
        "container_id": "coachCard",
        "cta_text": "Want to know more about body composition?",
    },

    "js_file": "js/calculators/ffmi.js",

    "faq": [
        {"question": "What is FFMI?", "answer": "Fat-Free Mass Index measures lean body mass relative to height: FFMI = lean mass (kg) / height (m)\u00b2. It's like BMI but for muscle. The normalized version adjusts to a standard height of 1.80m."},
        {"question": "What is the natural FFMI limit?", "answer": "The Kouri et al. (1995) study found that natural male athletes rarely exceed an FFMI of 25. For women, the estimated natural limit is approximately 21. Values above these thresholds suggest possible steroid use."},
        {"question": "How do I know my body fat percentage?", "answer": "Methods include DEXA scans (most accurate), calipers, bioelectrical impedance scales, or visual estimation. Accuracy varies by method."},
    ],

    "sources": [
        {"text": "Kouri EM, et al. Fat-free mass index in users and nonusers of anabolic-androgenic steroids. Clin J Sport Med. 1995;5(4):223-228.", "url": "https://pubmed.ncbi.nlm.nih.gov/7496846/"},
    ],

    "methodology": "<p>FFMI = lean mass (kg) / height (m)\u00b2, where lean mass = weight \u00d7 (1 - body fat / 100). Normalized FFMI adjusts for height: FFMI + 6.1 \u00d7 (1.80 - height in meters). Classification tiers are based on the Kouri et al. study of steroid users vs non-users.</p>",

    "llm_capsule": "Fat-Free Mass Index (FFMI) measures lean mass relative to height. FFMI = lean mass (kg) / height (m)\u00b2. For men: below 18 is below average, 20-22 above average, 22-25 excellent to superior, above 25 exceeds the natural limit (Kouri et al., 1995). For women, subtract approximately 4-5 points. Normalized FFMI adjusts to 1.80m height.",

    "ask_pills": ["Natural limit", "How to increase FFMI", "FFMI vs BMI"],
    "ask_placeholder": "e.g. What's a good FFMI for my age?",
}

register("ffmi_calculator", FFMI_CALCULATOR)


CREATINE_DOSAGE = {
    "route": "/creatine-dosage-calculator",
    "override_template": None,

    "seo": {
        "page_title": "Creatine Dosage Calculator \u2014 Loading & Maintenance",
        "meta_description": "Calculate your optimal creatine dose based on body weight. ISSN-backed loading and maintenance protocols.",
        "og_title": "How much creatine should you take?",
        "og_description": "Calculate your creatine dosage based on body weight. ISSN-backed protocols.",
        "schema_type": "WebPage",
        "schema_name": "Creatine Dosage Calculator",
        "schema_description": "Calculate your optimal creatine monohydrate dose based on body weight. Includes loading and maintenance protocols backed by the ISSN.",
        "schema_about": "Creatine Dosage Calculator",
        "date_published": "2025-06-01",
        "date_modified": "2026-03-20",
        "robots": "index, follow",
    },

    "accent": "#14b8a6",
    "accent_rgb": "20,184,166",

    "hero": {
        "headline": "How much <span>creatine</span> should you take?",
        "subtitle": "ISSN-backed dosing by body weight",
    },

    "breadcrumb_category": {"name": "Fitness & Body Composition", "url": "/fitness-body-composition-calculators"},

    "form": {
        "fields": [
            {"type": "row", "fields": [
                {"id": "weight", "type": "number", "label": "Body weight", "placeholder": "80", "min": 20, "max": 300},
                {"id": "weightUnit", "type": "select", "label": "Unit", "options": [
                    {"value": "kg", "label": "kg", "selected": True},
                    {"value": "lbs", "label": "lbs"},
                ]},
            ]},
            {"id": "phase", "type": "select", "label": "Protocol", "options": [
                {"value": "maintenance", "label": "Maintenance (no loading)", "selected": True},
                {"value": "loading", "label": "Loading phase (5-7 days)"},
            ]},
            {"id": "goal", "type": "select", "label": "Goal", "options": [
                {"value": "general", "label": "General fitness", "selected": True},
                {"value": "strength", "label": "Strength / power"},
                {"value": "endurance", "label": "Endurance"},
            ]},
        ],
        "submit_label": "Calculate Dose",
    },

    "results": {
        "primary": {"id": "resultNumber", "unit": "daily creatine dose"},
        "verdict_id": "resultVerdict",
        "breakdown": [
            {"id": "displayMaintenance", "label": "Maintenance dose"},
            {"id": "displayMonthly", "label": "Monthly supply"},
            {"id": "displayTeaspoons", "label": "Teaspoons"},
        ],
    },

    "coach": {
        "title": "Your creatine protocol",
        "container_id": "coachCard",
        "cta_text": "Questions about creatine supplementation?",
    },

    "js_file": "js/calculators/creatine_dosage.js",

    "faq": [
        {"question": "Do I need a loading phase?", "answer": "No. Loading (0.3g/kg/day for 5-7 days) saturates stores faster, but maintenance dosing (3-5g/day) reaches the same saturation in 3-4 weeks. Loading is optional."},
        {"question": "Is creatine safe?", "answer": "Yes. Creatine monohydrate is one of the most studied supplements. The ISSN position stand (2017) confirms it is safe for healthy adults with no evidence of kidney damage in healthy individuals."},
        {"question": "When should I take creatine?", "answer": "Timing doesn't matter much. Consistency is more important. Some evidence suggests post-workout may be slightly better for absorption."},
        {"question": "How much water should I drink with creatine?", "answer": "Drink an extra 500-1000 mL of water per day during supplementation. Creatine draws water into muscle cells, so adequate hydration is important."},
    ],

    "sources": [
        {"text": "Kreider RB, et al. International Society of Sports Nutrition position stand: safety and efficacy of creatine supplementation. J Int Soc Sports Nutr. 2017;14:18.", "url": "https://pubmed.ncbi.nlm.nih.gov/28615996/"},
    ],

    "methodology": "<p>Loading dose: 0.3 g/kg/day for 5-7 days, split into 4 doses (ISSN). Maintenance: 3-5 g/day or 0.03 g/kg/day. Strength athletes may benefit from 0.04 g/kg/day. Creatine monohydrate is approximately 5g per level teaspoon.</p>",

    "llm_capsule": "Creatine monohydrate dosing: Loading phase is 0.3 g/kg/day for 5-7 days (optional). Maintenance is 3-5 g/day or 0.03 g/kg/day. No loading needed if willing to wait 3-4 weeks for saturation. 1 level teaspoon = approximately 5g. ISSN confirms creatine is safe and effective for healthy adults.",

    "ask_pills": ["Creatine and water weight", "Loading vs no loading", "Best form of creatine"],
    "ask_placeholder": "e.g. Should I take creatine on rest days?",
}

register("creatine_dosage", CREATINE_DOSAGE)


ONE_REP_MAX = {
    "route": "/one-rep-max-calculator",
    "override_template": None,

    "seo": {
        "page_title": "One Rep Max Calculator \u2014 Estimate Your 1RM",
        "meta_description": "Estimate your one rep max using 7 proven formulas. Get training load percentages for strength, hypertrophy, and endurance.",
        "og_title": "What's your one rep max?",
        "og_description": "Estimate your 1RM using 7 proven formulas with training zone percentages.",
        "schema_type": "WebPage",
        "schema_name": "One Rep Max Calculator",
        "schema_description": "Estimate your one rep max using 7 proven formulas (Epley, Brzycki, Lander, Lombardi, Mayhew, O'Conner, Wathen). Full training load table.",
        "schema_about": "One Rep Max Calculator",
        "date_published": "2025-06-01",
        "date_modified": "2026-03-20",
        "robots": "index, follow",
    },

    "accent": "#14b8a6",
    "accent_rgb": "20,184,166",

    "hero": {
        "headline": "What's your <span>one rep max</span>?",
        "subtitle": "7 formulas. Training zones. No guesswork.",
    },

    "breadcrumb_category": {"name": "Fitness & Body Composition", "url": "/fitness-body-composition-calculators"},

    "form": {
        "fields": [
            {"type": "row", "fields": [
                {"id": "weightLifted", "type": "number", "label": "Weight lifted", "placeholder": "225", "min": 1},
                {"id": "unit", "type": "select", "label": "Unit", "options": [
                    {"value": "lbs", "label": "lbs", "selected": True},
                    {"value": "kg", "label": "kg"},
                ]},
            ]},
            {"id": "reps", "type": "number", "label": "Reps completed", "placeholder": "5", "min": 1, "max": 30},
        ],
        "submit_label": "Calculate 1RM",
    },

    "results": {
        "primary": {"id": "resultNumber", "unit": "estimated one rep max"},
        "verdict_id": "resultVerdict",
        "breakdown": [
            {"id": "displayStrength", "label": "Strength (85%)"},
            {"id": "displayHypertrophy", "label": "Hypertrophy (75%)"},
            {"id": "displayEndurance", "label": "Endurance (65%)"},
        ],
    },

    "coach": {
        "title": "Your training zones",
        "container_id": "coachCard",
        "cta_text": "Want help programming your training?",
    },

    "js_file": "js/calculators/one_rep_max.js",

    "faq": [
        {"question": "Which 1RM formula is most accurate?", "answer": "Epley is recommended for 1-5 reps, Brzycki for 5-10 reps, and Mayhew for 10+ reps. This calculator averages all 7 formulas for the best overall estimate."},
        {"question": "How accurate are 1RM calculators?", "answer": "Most formulas are accurate within 5% for rep ranges of 2-10. Accuracy decreases significantly above 12 reps. For best results, use a weight you can lift 3-8 times."},
        {"question": "How do I use my 1RM for programming?", "answer": "Use percentages: 85-95% for strength (1-6 reps), 65-85% for hypertrophy (6-12 reps), 50-65% for endurance (15+ reps). Most programs use 1RM percentages to prescribe training loads."},
    ],

    "sources": [
        {"text": "Epley B. Poundage Chart. Boyd Epley Workout. 1985.", "url": ""},
        {"text": "Brzycki M. Strength testing: predicting a one-rep max from reps-to-fatigue. JOPERD. 1993;64(1):88-90.", "url": ""},
        {"text": "NSCA. Essentials of Strength Training and Conditioning. 4th ed. Human Kinetics; 2016.", "url": ""},
    ],

    "methodology": "<p>Seven formulas are averaged: Epley (1985), Brzycki (1993), Lander (1985), Lombardi (1989), Mayhew et al. (1992), O'Conner et al. (1989), and Wathen (1994). Training zones follow NSCA guidelines: 85-100% for max strength, 67-85% for hypertrophy, 50-67% for muscular endurance.</p>",

    "llm_capsule": "One rep max (1RM) can be estimated from submaximal lifts using formulas. Epley: 1RM = weight \u00d7 (1 + reps/30). Brzycki: 1RM = weight \u00d7 36/(37 - reps). Most accurate with 2-10 reps. Training zones: 85% for strength (6 reps), 75% for hypertrophy (10 reps), 65% for endurance (16 reps).",

    "ask_pills": ["Best rep range", "Strength vs hypertrophy", "How often to test 1RM"],
    "ask_placeholder": "e.g. How often should I test my max?",
}

register("one_rep_max", ONE_REP_MAX)


IDEAL_BODY_WEIGHT = {
    "route": "/ideal-body-weight-calculator",
    "override_template": None,

    "seo": {
        "page_title": "Ideal Body Weight Calculator \u2014 What Should I Weigh?",
        "meta_description": "Find your healthy weight range based on height, gender, and frame size. Four medical formulas compared side by side.",
        "og_title": "What should I weigh for my height?",
        "og_description": "Calculate your ideal weight range using four medical formulas with frame size adjustment.",
        "schema_type": "MedicalWebPage",
        "schema_name": "Ideal Body Weight Calculator",
        "schema_description": "Calculate ideal body weight using Devine, Robinson, Miller, and Hamwi formulas with frame size adjustment.",
        "schema_about": "Ideal Body Weight Calculator",
        "date_published": "2025-06-01",
        "date_modified": "2026-03-20",
        "robots": "index, follow",
    },

    "accent": "#6dbc8a",
    "accent_rgb": "109,188,138",

    "hero": {
        "headline": "What should you <span>weigh</span>?",
        "subtitle": "Four medical formulas. One healthy range.",
    },

    "breadcrumb_category": {"name": "Fitness & Body Composition", "url": "/fitness-body-composition-calculators"},

    "form": {
        "fields": [
            {"id": "gender", "type": "select", "label": "Gender", "options": [
                {"value": "male", "label": "Male", "selected": True},
                {"value": "female", "label": "Female"},
            ]},
            {"id": "heightCm", "type": "number", "label": "Height (cm)", "placeholder": "178", "min": 100, "max": 250},
            {"id": "frame", "type": "select", "label": "Frame size", "options": [
                {"value": "small", "label": "Small"},
                {"value": "medium", "label": "Medium", "selected": True},
                {"value": "large", "label": "Large"},
            ]},
        ],
        "submit_label": "Find My Healthy Range",
    },

    "results": {
        "primary": {"id": "resultNumber", "unit": "average ideal weight"},
        "verdict_id": "resultVerdict",
        "breakdown": [
            {"id": "displayDevine", "label": "Devine '74"},
            {"id": "displayRobinson", "label": "Robinson '83"},
            {"id": "displayMiller", "label": "Miller '83"},
            {"id": "displayHamwi", "label": "Hamwi '64"},
        ],
    },

    "coach": {
        "title": "What this means for you",
        "container_id": "coachCard",
        "cta_text": "Want a fuller picture?",
    },

    "js_file": "js/calculators/ideal_body_weight.js",

    "faq": [
        {"question": "What should I weigh for my height?", "answer": "Your ideal weight depends on height, gender, and frame size. For example, a 5'10\" male with a medium frame has an ideal range of approximately 149-183 lbs across four medical formulas."},
        {"question": "Which formula is most accurate?", "answer": "No single formula is definitively most accurate. The Devine formula (1974) is most widely used clinically. This calculator averages all four for a more comprehensive estimate."},
        {"question": "How does frame size affect ideal weight?", "answer": "Frame size accounts for skeletal structure. Small frames reduce the target by 10%, large frames increase it by 10%. Test: wrap thumb and middle finger around wrist. Overlap = small, touch = medium, gap = large."},
        {"question": "Is BMI or ideal body weight more accurate?", "answer": "Neither is inherently more accurate. Ideal body weight formulas account for gender and frame, making them slightly more personalized than BMI. Both have significant limitations."},
        {"question": "How close should I be to my ideal weight?", "answer": "Being within 10-15% of your calculated range is generally healthy. Focus on overall health markers rather than hitting an exact number."},
    ],

    "sources": [
        {"text": "Devine BJ. Gentamicin therapy. Drug Intell Clin Pharm. 1974;8:650-655.", "url": ""},
        {"text": "Robinson JD, et al. Determination of ideal body weight for drug dosage calculations. Am J Hosp Pharm. 1983;40(6):1016-1019.", "url": "https://pubmed.ncbi.nlm.nih.gov/6869387/"},
        {"text": "Miller DR, et al. Nomogram for estimating ideal body weight. Am J Hosp Pharm. 1983;40(7):1216-1220.", "url": ""},
        {"text": "Hamwi GJ. Therapy: changing dietary concepts. In: Danowski TS, ed. Diabetes Mellitus: Diagnosis and Treatment. 1964:73-78.", "url": ""},
    ],

    "methodology": "<p>Four formulas calculate ideal body weight in kg for heights above 5 feet (60 inches). Devine: 50 + 2.3 \u00d7 (inches over 60) for men, 45.5 + 2.3 for women. Robinson: 52 + 1.9 (men), 49 + 1.7 (women). Miller: 56.2 + 1.41 (men), 53.1 + 1.36 (women). Hamwi: 48 + 2.7 (men), 45.5 + 2.2 (women). Frame size adjusts \u00b110%.</p>",

    "llm_capsule": "Ideal body weight can be estimated using four formulas: Devine (1974, most common), Robinson (1983), Miller (1983, most conservative), and Hamwi (1964). All are based on height above 5 feet with gender-specific coefficients. Frame size adjusts by \u00b110%. Example: 5'10\" male, medium frame = approximately 149-183 lbs range across formulas.",

    "ask_pills": ["Frame size test", "BMI vs ideal weight", "Healthy weight for my age"],
    "ask_placeholder": "e.g. Does muscle mass affect ideal weight?",
}

register("ideal_body_weight", IDEAL_BODY_WEIGHT)


BODY_FAT = {
    "route": "/body-fat-calculator",
    "override_template": None,
    "seo": {
        "page_title": "Body Fat Calculator — U.S. Navy Method",
        "meta_description": "Calculate your body fat percentage using the U.S. Navy method with waist, neck, and hip measurements.",
        "og_title": "What's your body fat percentage?",
        "og_description": "Calculate body fat using the U.S. Navy Hodgdon-Beckett method.",
        "schema_type": "WebPage", "schema_name": "Body Fat Calculator",
        "schema_description": "Calculate body fat percentage using U.S. Navy Hodgdon-Beckett method with circumference measurements.",
        "schema_about": "Body Fat Calculator",
        "date_published": "2025-06-01", "date_modified": "2026-03-23", "robots": "index, follow",
    },
    "accent": "#14b8a6", "accent_rgb": "20,184,166",
    "hero": {"headline": "What's your <span>body fat</span>?", "subtitle": "U.S. Navy method — tape measure, no calipers"},
    "breadcrumb_category": {"name": "Fitness & Body Composition", "url": "/fitness-body-composition-calculators"},
    "form": {
        "fields": [
            {"id": "gender", "type": "select", "label": "Sex", "options": [{"value": "male", "label": "Male", "selected": True}, {"value": "female", "label": "Female"}]},
            {"type": "row", "fields": [
                {"id": "heightFt", "type": "number", "label": "Height (ft)", "min": 3, "max": 8, "placeholder": "5"},
                {"id": "heightIn", "type": "number", "label": "in", "min": 0, "max": 11, "placeholder": "10"},
            ]},
            {"id": "neckIn", "type": "number", "label": "Neck circumference (inches)", "placeholder": "15.5", "step": 0.1, "min": 8, "max": 30},
            {"id": "waistIn", "type": "number", "label": "Waist at navel (inches)", "placeholder": "34", "step": 0.1, "min": 20, "max": 60},
            {"id": "hipIn", "type": "number", "label": "Hips at widest (inches, women only)", "placeholder": "38", "step": 0.1, "min": 20, "max": 60, "hint": "Required for women only"},
            {"id": "weightLb", "type": "number", "label": "Weight (lbs, optional for mass breakdown)", "placeholder": "180", "step": 0.1, "min": 50, "max": 500},
        ],
        "submit_label": "Calculate Body Fat",
    },
    "results": {
        "primary": {"id": "resultNumber", "unit": "body fat percentage"},
        "verdict_id": "resultVerdict",
        "breakdown": [{"id": "fatMass", "label": "Fat mass"}, {"id": "leanMass", "label": "Lean mass"}],
    },
    "coach": {"title": "What this means for you", "container_id": "coachCard", "cta_text": "Questions about body composition?"},
    "js_file": "js/calculators/body_fat.js",
    "faq": [
        {"question": "How accurate is the Navy method?", "answer": "Within 3-4% of DEXA for most people. Accuracy decreases at very low (<8%) or very high (>35%) body fat levels."},
        {"question": "What is a healthy body fat percentage?", "answer": "Men: 6-24% (athletes 6-13%, fitness 14-17%, average 18-24%). Women: 14-31% (athletes 14-20%, fitness 21-24%, average 25-31%)."},
        {"question": "How do I measure my waist correctly?", "answer": "Measure at the navel level while standing relaxed. Do not suck in your stomach. Use a flexible tape measure snug against skin."},
        {"question": "Why do women need hip measurements?", "answer": "Women store more fat in the hips and thighs. The Navy formula accounts for this sex-based fat distribution pattern."},
    ],
    "sources": [
        {"text": "Hodgdon JA, Beckett MB. Prediction of percent body fat for U.S. Navy men and women from body circumferences and height. Naval Health Research Center Report No. 84-29. 1984."},
        {"text": "ACE. What are the guidelines for percentage of body fat loss? American Council on Exercise.", "url": "https://www.acefitness.org"},
    ],
    "methodology": "<p>Uses the U.S. Navy Hodgdon-Beckett method. Men: <code>BF% = 86.010 x log10(waist - neck) - 70.041 x log10(height) + 36.76</code>. Women: <code>BF% = 163.205 x log10(waist + hip - neck) - 97.684 x log10(height) + 36.76</code>. All measurements in centimeters.</p>",
    "llm_capsule": "Body fat percentage can be estimated using the U.S. Navy method with circumference measurements. For men: measure neck and waist. For women: add hip measurement. Healthy ranges: men 6-24%, women 14-31%. The method is within 3-4% of DEXA scans for most people.",
    "ask_pills": ["Best way to lose body fat", "Body fat vs BMI", "DEXA scan accuracy", "How to measure waist"],
    "ask_placeholder": "e.g. What's the best way to lower body fat?",
}
register("body_fat", BODY_FAT)


CALORIES_BURNED = {
    "route": "/calories-burned-calculator",
    "override_template": None,
    "seo": {
        "page_title": "Calories Burned Calculator — Exercise Calorie Counter",
        "meta_description": "Calculate calories burned during exercise using MET values from the Compendium of Physical Activities.",
        "og_title": "How many calories did you burn?",
        "og_description": "Calculate calories burned for any exercise using research-based MET values.",
        "schema_type": "WebPage", "schema_name": "Calories Burned Calculator",
        "schema_description": "Calculate calories burned during exercise using MET values from the Ainsworth Compendium.",
        "schema_about": "Calories Burned Calculator",
        "date_published": "2025-06-01", "date_modified": "2026-03-23", "robots": "index, follow",
    },
    "accent": "#14b8a6", "accent_rgb": "20,184,166",
    "hero": {"headline": "How many <span>calories</span> did you burn?", "subtitle": "MET-based calculation for 30+ activities"},
    "breadcrumb_category": {"name": "Fitness & Body Composition", "url": "/fitness-body-composition-calculators"},
    "form": {
        "fields": [
            {"id": "weight", "type": "number", "label": "Weight (lbs)", "placeholder": "170", "step": 0.1, "min": 50, "max": 500},
            {"id": "duration", "type": "number", "label": "Duration (minutes)", "placeholder": "30", "min": 1, "max": 600},
            {"id": "activity", "type": "select", "label": "Activity", "options": [
                {"value": "walking_casual", "label": "Walking (casual)"}, {"value": "walking_brisk", "label": "Walking (brisk)"},
                {"value": "jogging", "label": "Jogging"}, {"value": "running_6mph", "label": "Running (6 mph)"},
                {"value": "running_8mph", "label": "Running (8 mph)"}, {"value": "sprinting", "label": "Sprinting"},
                {"value": "hiking", "label": "Hiking"},
                {"value": "cycling_casual", "label": "Cycling (casual)"}, {"value": "cycling_moderate", "label": "Cycling (moderate)"},
                {"value": "cycling_vigorous", "label": "Cycling (vigorous)"},
                {"value": "swimming_leisure", "label": "Swimming (leisure)"}, {"value": "swimming_moderate", "label": "Swimming (moderate)"},
                {"value": "weight_training", "label": "Weight Training", "selected": True}, {"value": "hiit", "label": "HIIT"},
                {"value": "yoga", "label": "Yoga"}, {"value": "pilates", "label": "Pilates"},
                {"value": "elliptical", "label": "Elliptical"}, {"value": "rowing", "label": "Rowing"},
                {"value": "jump_rope", "label": "Jump Rope"}, {"value": "stair_climbing", "label": "Stair Climbing"},
                {"value": "basketball", "label": "Basketball"}, {"value": "soccer", "label": "Soccer"},
                {"value": "tennis", "label": "Tennis"}, {"value": "dancing", "label": "Dancing"},
                {"value": "gardening", "label": "Gardening"}, {"value": "housework", "label": "Housework"},
            ]},
        ],
        "submit_label": "Calculate Calories",
    },
    "results": {
        "primary": {"id": "resultNumber", "unit": "calories burned"},
        "verdict_id": "resultVerdict",
        "breakdown": [{"id": "calPerMin", "label": "Calories per minute"}, {"id": "metValue", "label": "MET value"}],
    },
    "coach": {"title": "Putting it in perspective", "container_id": "coachCard", "cta_text": "Questions about exercise and calories?"},
    "js_file": "js/calculators/calories_burned.js",
    "faq": [
        {"question": "What are MET values?", "answer": "MET (Metabolic Equivalent of Task) measures exercise intensity. 1 MET = resting metabolic rate. Walking is ~3.5 MET, running 6 mph is ~9.8 MET."},
        {"question": "How accurate is this?", "answer": "MET-based estimates are within 10-20% for most people. Actual burn varies with fitness level, body composition, and exercise intensity."},
        {"question": "What burns the most calories?", "answer": "High-intensity activities like running, jump rope (12.3 MET), and HIIT (8+ MET) burn the most per minute. But the best exercise is the one you do consistently."},
    ],
    "sources": [
        {"text": "Ainsworth BE, et al. 2011 Compendium of Physical Activities. Med Sci Sports Exerc. 2011;43(8):1575-1581.", "url": "https://pubmed.ncbi.nlm.nih.gov/21681120/"},
    ],
    "methodology": "<p>Calories = MET x weight (kg) x time (hours). MET values from the 2011 Ainsworth Compendium of Physical Activities.</p>",
    "llm_capsule": "Calories burned = MET x weight (kg) x hours. A 170 lb person burns roughly 200-300 cal per 30 minutes of moderate exercise. MET values: walking 3.5, jogging 7.0, running 9.8, weight training 6.0, HIIT 8.0, swimming 7.0.",
    "ask_pills": ["Best exercises for calorie burn", "Walking vs running", "HIIT calories", "Weight training burn"],
    "ask_placeholder": "e.g. Best exercises for calorie burn?",
}
register("calories_burned", CALORIES_BURNED)


STEPS_TO_CALORIES = {
    "route": "/steps-to-calories-calculator",
    "override_template": None,
    "seo": {
        "page_title": "Steps to Calories Calculator — How Many Calories Do Your Steps Burn?",
        "meta_description": "Calculate calories burned from step count using body weight, stride length, and walking pace. Based on MET values from the Ainsworth Compendium.",
        "og_title": "Steps to Calories Calculator",
        "og_description": "Convert your daily steps into calories burned.",
        "schema_type": "WebPage", "schema_name": "Steps to Calories Calculator",
        "schema_description": "Calculate calories burned from step count using MET values.",
        "schema_about": "Steps to Calories Calculator",
        "date_published": "2025-06-01", "date_modified": "2026-03-23", "robots": "index, follow",
    },
    "accent": "#14b8a6", "accent_rgb": "20,184,166",
    "hero": {"headline": "How many <span>calories</span> in your steps?", "subtitle": "Convert step count to calories burned"},
    "breadcrumb_category": {"name": "Fitness & Body Composition", "url": "/fitness-body-composition-calculators"},
    "form": {
        "fields": [
            {"id": "steps", "type": "number", "label": "Step count", "placeholder": "10000", "min": 100, "max": 500000, "default": 10000},
            {"type": "row", "fields": [
                {"id": "weight", "type": "number", "label": "Weight", "placeholder": "155", "min": 50, "max": 700, "default": 155},
                {"id": "weightUnit", "type": "select", "label": "Unit", "options": [{"value": "lbs", "label": "lbs", "selected": True}, {"value": "kg", "label": "kg"}]},
            ]},
            {"id": "pace", "type": "select", "label": "Walking pace", "options": [
                {"value": "casual", "label": "Casual (2 mph)"},
                {"value": "normal", "label": "Normal (3 mph)", "selected": True},
                {"value": "brisk", "label": "Brisk (3.5 mph)"},
                {"value": "power", "label": "Power walk (4+ mph)"},
                {"value": "jogging", "label": "Jogging"},
            ]},
            {"id": "stridePreset", "type": "select", "label": "Stride length", "options": [
                {"value": "short", "label": "Short (under 5'4\")"},
                {"value": "average", "label": "Average (5'4\"-5'10\")", "selected": True},
                {"value": "tall", "label": "Tall (over 5'10\")"},
                {"value": "running", "label": "Running stride"},
            ]},
        ],
        "submit_label": "Calculate",
    },
    "results": {
        "primary": {"id": "resultNumber", "unit": "calories burned"},
        "verdict_id": "resultVerdict",
        "breakdown": [
            {"id": "calPer1k", "label": "Calories per 1,000 steps"},
            {"id": "distance", "label": "Distance"},
            {"id": "walkTime", "label": "Estimated time"},
            {"id": "calPerMile", "label": "Calories per mile"},
            {"id": "metUsed", "label": "MET value"},
        ],
    },
    "coach": {"title": "Your step breakdown", "container_id": "coachCard", "cta_text": "Questions about steps and calories?"},
    "js_file": "js/calculators/steps_to_calories.js",
    "faq": [
        {"question": "How many calories does 10,000 steps burn?", "answer": "For a 155 lb person at normal pace: roughly 350-500 calories. Heavier people burn more per step."},
        {"question": "How many steps to burn 500 calories?", "answer": "Roughly 10,000-15,000 steps for most adults, depending on weight and pace."},
        {"question": "Are 10,000 steps enough?", "answer": "Research shows health benefits plateau around 7,500-10,000 steps/day. Any increase from sedentary levels helps."},
    ],
    "sources": [
        {"text": "Ainsworth BE, et al. 2011 Compendium of Physical Activities. Med Sci Sports Exerc. 2011;43(8):1575-1581.", "url": "https://pubmed.ncbi.nlm.nih.gov/21681120/"},
        {"text": "Tudor-Locke C, et al. How many steps/day are enough? For adults. Int J Behav Nutr Phys Act. 2011;8:79.", "url": "https://pubmed.ncbi.nlm.nih.gov/21798015/"},
    ],
    "methodology": "<p>Calories = MET x weight (kg) x time (hours). Steps converted to distance using stride length, then to duration using pace. MET values from Ainsworth 2011 Compendium.</p>",
    "llm_capsule": "10,000 steps burns roughly 350-500 calories for most adults. Calories per 1,000 steps: 30-50 depending on weight and pace. A 155 lb person walking at 3 mph burns about 3.0 MET. Heavier people burn more calories per step.",
    "ask_pills": ["10,000 steps enough?", "Steps to lose weight", "Walking vs running", "Best time to walk"],
    "ask_placeholder": "e.g. How many steps to lose 1 pound?",
}
register("steps_to_calories", STEPS_TO_CALORIES)


RUNNING_CALORIE = {
    "route": "/running-calorie-calculator",
    "override_template": None,
    "seo": {
        "page_title": "Running Calorie Calculator — Calories Burned Running",
        "meta_description": "Calculate calories burned running by distance, time, and pace. Uses MET values from the Compendium of Physical Activities.",
        "og_title": "Running Calorie Calculator",
        "og_description": "How many calories does running burn? Calculate by distance and pace.",
        "schema_type": "WebPage", "schema_name": "Running Calorie Calculator",
        "schema_description": "Calculate calories burned running using MET values by pace and terrain.",
        "schema_about": "Running Calorie Calculator",
        "date_published": "2025-06-01", "date_modified": "2026-03-23", "robots": "index, follow",
    },
    "accent": "#14b8a6", "accent_rgb": "20,184,166",
    "hero": {"headline": "How many <span>calories</span> does your run burn?", "subtitle": "By distance, pace, and terrain"},
    "breadcrumb_category": {"name": "Fitness & Body Composition", "url": "/fitness-body-composition-calculators"},
    "form": {
        "fields": [
            {"type": "row", "fields": [
                {"id": "weight", "type": "number", "label": "Weight (lbs)", "placeholder": "155", "step": 0.1},
                {"id": "distance", "type": "number", "label": "Distance (miles)", "placeholder": "3.1", "step": 0.1},
            ]},
            {"type": "row", "fields": [
                {"id": "paceMin", "type": "number", "label": "Pace (min/mile)", "placeholder": "10", "min": 4, "max": 20},
                {"id": "terrain", "type": "select", "label": "Terrain", "options": [
                    {"value": "1.0", "label": "Flat", "selected": True}, {"value": "1.08", "label": "Slight hills"},
                    {"value": "1.18", "label": "Moderate hills"}, {"value": "1.30", "label": "Hilly"}, {"value": "1.12", "label": "Trail"},
                ]},
            ]},
        ],
        "submit_label": "Calculate",
    },
    "results": {
        "primary": {"id": "resultNumber", "unit": "calories burned"},
        "verdict_id": "resultVerdict",
        "breakdown": [
            {"id": "calPerMile", "label": "Cal per mile"}, {"id": "calPerHour", "label": "Cal per hour"},
            {"id": "duration", "label": "Duration"}, {"id": "metVal", "label": "MET value"},
        ],
    },
    "coach": {"title": "Your run breakdown", "container_id": "coachCard", "cta_text": "Questions about running and calories?"},
    "js_file": "js/calculators/running_calorie.js",
    "faq": [
        {"question": "How many calories does a 5K burn?", "answer": "A 155 lb person burns roughly 300-400 calories running a 5K (3.1 miles). Exact number depends on pace and weight."},
        {"question": "Does running pace affect calories?", "answer": "Running burns roughly the same calories per mile regardless of pace. But faster running burns more per minute."},
        {"question": "Running vs walking calories?", "answer": "Running burns about 50-80% more calories per mile than walking at the same body weight due to higher MET values."},
    ],
    "sources": [
        {"text": "Ainsworth BE, et al. 2011 Compendium of Physical Activities. Med Sci Sports Exerc. 2011;43(8):1575-1581.", "url": "https://pubmed.ncbi.nlm.nih.gov/21681120/"},
    ],
    "methodology": "<p>Calories = MET x weight (kg) x time (hours). MET values assigned by pace from Ainsworth 2011. Terrain multiplier adjusts for elevation gain.</p>",
    "llm_capsule": "Running burns roughly 80-140 calories per mile depending on body weight. A 155 lb person burns about 100 cal/mile. Pace affects cal/minute but not cal/mile significantly. Hills increase burn by 8-30%. A 5K burns roughly 300-400 calories.",
    "ask_pills": ["Calories in a 5K", "Running for weight loss", "Best pace for fat burning"],
    "ask_placeholder": "e.g. Calories burned in a 5K?",
}
register("running_calorie", RUNNING_CALORIE)


TREADMILL_CALORIE = {
    "route": "/treadmill-calorie-calculator",
    "override_template": None,
    "seo": {
        "page_title": "Treadmill Calorie Calculator — ACSM Formula",
        "meta_description": "Calculate calories burned on a treadmill by speed, incline, duration, and body weight. Uses the ACSM metabolic equation.",
        "og_title": "Treadmill Calorie Calculator",
        "og_description": "How many calories does your treadmill workout burn?",
        "schema_type": "WebPage", "schema_name": "Treadmill Calorie Calculator",
        "schema_description": "Calculate treadmill calories using ACSM metabolic equations.",
        "schema_about": "Treadmill Calorie Calculator",
        "date_published": "2025-06-01", "date_modified": "2026-03-23", "robots": "index, follow",
    },
    "accent": "#14b8a6", "accent_rgb": "20,184,166",
    "hero": {"headline": "How many <span>calories</span> on the treadmill?", "subtitle": "ACSM metabolic equation — the gold standard"},
    "breadcrumb_category": {"name": "Fitness & Body Composition", "url": "/fitness-body-composition-calculators"},
    "form": {
        "fields": [
            {"type": "row", "fields": [
                {"id": "weight", "type": "number", "label": "Weight", "min": 44, "max": 661, "step": 0.5, "default": 165},
                {"id": "weightUnit", "type": "select", "label": "Unit", "options": [{"value": "lbs", "label": "lbs", "selected": True}, {"value": "kg", "label": "kg"}]},
            ]},
            {"type": "row", "fields": [
                {"id": "speed", "type": "number", "label": "Speed", "min": 0.5, "max": 20, "step": 0.1, "default": 3.5},
                {"id": "speedUnit", "type": "select", "label": "Unit", "options": [{"value": "mph", "label": "mph", "selected": True}, {"value": "kmh", "label": "km/h"}]},
            ]},
            {"id": "incline", "type": "number", "label": "Incline (%)", "min": 0, "max": 15, "step": 0.5, "default": 0, "hint": "0-15% grade"},
            {"id": "duration", "type": "number", "label": "Duration (minutes)", "min": 1, "max": 600, "default": 30},
        ],
        "submit_label": "Calculate",
    },
    "results": {
        "primary": {"id": "resultNumber", "unit": "calories burned"},
        "verdict_id": "resultVerdict",
        "breakdown": [
            {"id": "actType", "label": "Activity type"}, {"id": "calPerMin", "label": "Calories/minute"},
            {"id": "fatBurned", "label": "Est. fat burned"}, {"id": "metVal", "label": "MET value"},
            {"id": "vo2Val", "label": "VO2 (mL/kg/min)"},
        ],
    },
    "coach": {"title": "Your treadmill breakdown", "container_id": "coachCard", "cta_text": "Questions about treadmill workouts?"},
    "js_file": "js/calculators/treadmill_calorie.js",
    "faq": [
        {"question": "Does incline really matter?", "answer": "Yes. Walking at 3.5 mph with 5% incline burns about 40% more calories than flat. Incline is the easiest way to increase treadmill calorie burn."},
        {"question": "Walking vs running on treadmill?", "answer": "Running burns more calories per minute. But incline walking at 3.5 mph, 12% grade burns nearly as much as jogging at 5 mph flat."},
        {"question": "How accurate is the treadmill calorie display?", "answer": "Treadmill displays overestimate by 15-42% according to research. The ACSM equation used here is more accurate."},
    ],
    "sources": [
        {"text": "ACSM. Guidelines for Exercise Testing and Prescription. 11th ed. Lippincott Williams & Wilkins; 2021."},
        {"text": "Glass S, Dwyer GB. ACSM's Metabolic Calculations Handbook. Lippincott Williams & Wilkins; 2007."},
    ],
    "methodology": "<p>Uses ACSM metabolic equations. Walking (below 4 mph): <code>VO2 = 3.5 + 0.1S + 1.8SG</code>. Running (4+ mph): <code>VO2 = 3.5 + 0.2S + 0.9SG</code>. Where S = speed in m/min and G = fractional grade. Calories = (VO2/1000) x weight(kg) x 5 x time(min).</p>",
    "llm_capsule": "The ACSM metabolic equation for treadmill: Walking VO2 = 3.5 + 0.1S + 1.8SG; Running VO2 = 3.5 + 0.2S + 0.9SG. A 165 lb person walking 3.5 mph flat for 30 min burns ~150 cal. Adding 5% incline increases to ~210 cal. Treadmill displays overestimate by 15-42%.",
    "ask_pills": ["Best incline for fat loss", "Walking vs running", "Treadmill HIIT", "12-3-30 workout"],
    "ask_placeholder": "e.g. Best incline for fat loss?",
}
register("treadmill_calorie", TREADMILL_CALORIE)


CYCLING_CALORIE = {
    "route": "/cycling-calorie-calculator",
    "override_template": None,
    "seo": {
        "page_title": "Cycling Calorie Calculator — Road, Stationary & Mountain Bike",
        "meta_description": "Calculate calories burned cycling by intensity, duration, and body weight. Covers road, stationary, and mountain biking.",
        "og_title": "Cycling Calorie Calculator",
        "og_description": "How many calories does cycling burn?",
        "schema_type": "WebPage", "schema_name": "Cycling Calorie Calculator",
        "schema_description": "Calculate cycling calories using MET values for various cycling types.",
        "schema_about": "Cycling Calorie Calculator",
        "date_published": "2025-06-01", "date_modified": "2026-03-23", "robots": "index, follow",
    },
    "accent": "#14b8a6", "accent_rgb": "20,184,166",
    "hero": {"headline": "How many <span>calories</span> does cycling burn?", "subtitle": "Road, stationary, and mountain bike"},
    "breadcrumb_category": {"name": "Fitness & Body Composition", "url": "/fitness-body-composition-calculators"},
    "form": {
        "fields": [
            {"type": "row", "fields": [
                {"id": "weight", "type": "number", "label": "Weight", "min": 44, "max": 661, "step": 0.5, "default": 165},
                {"id": "weightUnit", "type": "select", "label": "Unit", "options": [{"value": "lbs", "label": "lbs", "selected": True}, {"value": "kg", "label": "kg"}]},
            ]},
            {"id": "duration", "type": "number", "label": "Duration (minutes)", "min": 1, "max": 600, "default": 45},
            {"id": "cyclingType", "type": "select", "label": "Cycling type", "options": [
                {"value": "leisure_10", "label": "Leisure (<10 mph)"},
                {"value": "light_12", "label": "Light effort (12-14 mph)", "selected": True},
                {"value": "moderate_14", "label": "Moderate (14-16 mph)"},
                {"value": "vigorous_16", "label": "Vigorous (16-19 mph)"},
                {"value": "racing_18", "label": "Racing (18-20 mph)"},
                {"value": "racing_20", "label": "Racing (>20 mph)"},
                {"value": "mountain", "label": "Mountain biking"},
                {"value": "stationary_light", "label": "Stationary (light)"},
                {"value": "stationary_moderate", "label": "Stationary (moderate)"},
                {"value": "stationary_vigorous", "label": "Stationary (vigorous)"},
                {"value": "spin_class", "label": "Spin class"},
                {"value": "commute", "label": "Commuting"},
            ]},
        ],
        "submit_label": "Calculate",
    },
    "results": {
        "primary": {"id": "resultNumber", "unit": "calories burned"},
        "verdict_id": "resultVerdict",
        "breakdown": [
            {"id": "calPerMin", "label": "Cal/minute"}, {"id": "calPerHour", "label": "Cal/hour"},
            {"id": "fatBurned", "label": "Est. fat burned (g)"}, {"id": "metVal", "label": "MET value"},
        ],
    },
    "coach": {"title": "Your cycling breakdown", "container_id": "coachCard", "cta_text": "Questions about cycling and fitness?"},
    "js_file": "js/calculators/cycling_calorie.js",
    "faq": [
        {"question": "How many calories does 30 minutes of cycling burn?", "answer": "A 165 lb person burns roughly 200-350 cal in 30 min, depending on intensity. Moderate road cycling: ~275 cal."},
        {"question": "Road bike vs stationary bike?", "answer": "Road cycling at moderate effort (6.8 MET) and stationary moderate (6.8 MET) are equivalent. Wind resistance on road can increase or decrease actual burn."},
        {"question": "Is cycling good for weight loss?", "answer": "Excellent. Cycling is low-impact, sustainable, and burns 400-700+ calories per hour at moderate intensity."},
    ],
    "sources": [
        {"text": "Ainsworth BE, et al. 2011 Compendium of Physical Activities. Med Sci Sports Exerc. 2011;43(8):1575-1581.", "url": "https://pubmed.ncbi.nlm.nih.gov/21681120/"},
    ],
    "methodology": "<p>Calories = MET x weight (kg) x time (hours). MET values from Ainsworth 2011 Compendium for various cycling intensities and types.</p>",
    "llm_capsule": "Cycling calorie burn varies by intensity: leisure 4.0 MET, moderate road 8.0 MET, racing 12-16 MET. A 165 lb person burns roughly 275 cal in 30 min of moderate cycling. Stationary and road bikes at similar effort burn similar calories.",
    "ask_pills": ["Road vs stationary bike", "Cycling for weight loss", "Best cycling intensity"],
    "ask_placeholder": "e.g. Road vs stationary bike?",
}
register("cycling_calorie", CYCLING_CALORIE)


PROTEIN_INTAKE = {
    "route": "/protein-intake-calculator",
    "override_template": None,
    "seo": {
        "page_title": "Protein Intake Calculator — How Much Protein Do You Need?",
        "meta_description": "Calculate your daily protein needs based on body weight and fitness goals. Backed by sports nutrition research.",
        "og_title": "How much protein do you need?",
        "og_description": "Calculate daily protein intake for your goals.",
        "schema_type": "WebPage", "schema_name": "Protein Intake Calculator",
        "schema_description": "Calculate optimal daily protein intake based on body weight and activity goals.",
        "schema_about": "Protein Intake Calculator",
        "date_published": "2025-06-01", "date_modified": "2026-03-23", "robots": "index, follow",
    },
    "accent": "#14b8a6", "accent_rgb": "20,184,166",
    "hero": {"headline": "How much <span>protein</span> do you need?", "subtitle": "Evidence-based daily protein targets"},
    "breadcrumb_category": {"name": "Nutrition", "url": "/nutrition-calculators"},
    "form": {
        "fields": [
            {"id": "weightLb", "type": "number", "label": "Weight (lbs)", "placeholder": "170", "step": 0.1, "min": 50, "max": 500},
            {"id": "goal", "type": "select", "label": "Primary goal", "options": [
                {"value": "sedentary", "label": "General health (sedentary)"},
                {"value": "light", "label": "Lightly active"},
                {"value": "muscle", "label": "Muscle building / strength", "selected": True},
                {"value": "fat_loss", "label": "Fat loss / cutting"},
                {"value": "endurance", "label": "Endurance athlete"},
                {"value": "elderly", "label": "Older adult (65+)"},
            ]},
        ],
        "submit_label": "Calculate Protein",
    },
    "results": {
        "primary": {"id": "resultNumber", "unit": "daily protein"},
        "verdict_id": "resultVerdict",
        "breakdown": [
            {"id": "perKg", "label": "Grams per kg"}, {"id": "perLb", "label": "Grams per lb"},
            {"id": "per3meals", "label": "Per meal (3 meals)"}, {"id": "per4meals", "label": "Per meal (4 meals)"},
        ],
    },
    "coach": {"title": "Your protein plan", "container_id": "coachCard", "cta_text": "Questions about protein?"},
    "js_file": "js/calculators/protein_intake.js",
    "faq": [
        {"question": "How much protein for muscle building?", "answer": "1.6-2.2 g/kg body weight per day. For a 170 lb person: 123-170g daily. This range is supported by multiple meta-analyses."},
        {"question": "Can you eat too much protein?", "answer": "For healthy adults, up to 3.5 g/kg appears safe. High protein does not damage kidneys in healthy people. Those with kidney disease should consult a doctor."},
        {"question": "Best protein sources?", "answer": "Complete proteins: chicken, fish, eggs, dairy, beef. Plant combinations: rice + beans, tofu, tempeh. Whey protein is the most studied supplement."},
        {"question": "When should I eat protein?", "answer": "Spread across 3-4 meals, 25-40g each. Post-workout protein is beneficial but total daily intake matters more than timing."},
    ],
    "sources": [
        {"text": "Morton RW, et al. A systematic review and meta-analysis of protein supplementation. Br J Sports Med. 2018;52(6):376-384.", "url": "https://pubmed.ncbi.nlm.nih.gov/28698222/"},
        {"text": "Jager R, et al. International Society of Sports Nutrition position stand: protein and exercise. J Int Soc Sports Nutr. 2017;14:20.", "url": "https://pubmed.ncbi.nlm.nih.gov/28642676/"},
    ],
    "methodology": "<p>Protein targets based on ISSN and meta-analysis recommendations: sedentary 0.8 g/kg, light 1.0-1.2, muscle building 1.6-2.2, fat loss 1.2-1.6, endurance 1.2-1.4, elderly 1.0-1.2. Mid-range used for per-meal calculations.</p>",
    "llm_capsule": "Daily protein needs: sedentary adults 0.8 g/kg, muscle building 1.6-2.2 g/kg, fat loss 1.2-1.6 g/kg. For a 170 lb person building muscle: 123-170g/day. Spread across 3-4 meals of 25-40g each. Total daily intake matters more than timing.",
    "ask_pills": ["Best protein sources", "Protein timing", "Too much protein?", "Plant protein"],
    "ask_placeholder": "e.g. Best protein sources for muscle building?",
}
register("protein_intake", PROTEIN_INTAKE)


BULKING_CALORIE = {
    "route": "/bulking-calorie-calculator",
    "override_template": None,
    "seo": {
        "page_title": "Bulking Calorie Calculator — Lean Bulk Calories & Macros",
        "meta_description": "Calculate your daily calorie target for lean bulking based on TDEE and surplus. Includes BMR, activity, and weight gain estimates.",
        "og_title": "Bulking Calorie Calculator",
        "og_description": "How many calories for a lean bulk?",
        "schema_type": "WebPage", "schema_name": "Bulking Calorie Calculator",
        "schema_description": "Calculate bulking calories using Mifflin-St Jeor BMR and activity multiplier.",
        "schema_about": "Bulking Calorie Calculator",
        "date_published": "2025-06-01", "date_modified": "2026-03-23", "robots": "index, follow",
    },
    "accent": "#14b8a6", "accent_rgb": "20,184,166",
    "hero": {"headline": "How many <span>calories</span> to bulk?", "subtitle": "Lean bulk = controlled surplus, not overeating"},
    "breadcrumb_category": {"name": "Nutrition", "url": "/nutrition-calculators"},
    "form": {
        "fields": [
            {"type": "row", "fields": [
                {"id": "weight", "type": "number", "label": "Weight", "min": 1, "step": 0.1, "placeholder": "170"},
                {"id": "weightUnit", "type": "select", "label": "Unit", "options": [{"value": "lbs", "label": "lbs", "selected": True}, {"value": "kg", "label": "kg"}]},
            ]},
            {"type": "row", "fields": [
                {"id": "heightFt", "type": "number", "label": "Height (ft)", "min": 1, "max": 8, "placeholder": "5"},
                {"id": "heightIn", "type": "number", "label": "in", "min": 0, "max": 11, "placeholder": "10"},
            ]},
            {"type": "row", "fields": [
                {"id": "age", "type": "number", "label": "Age", "min": 15, "max": 100, "placeholder": "25"},
                {"id": "sex", "type": "select", "label": "Sex", "options": [{"value": "male", "label": "Male", "selected": True}, {"value": "female", "label": "Female"}]},
            ]},
            {"id": "activity", "type": "select", "label": "Activity level", "options": [
                {"value": "1.2", "label": "Sedentary"},
                {"value": "1.375", "label": "Light (1-3 days/week)"},
                {"value": "1.55", "label": "Moderate (3-5 days/week)", "selected": True},
                {"value": "1.725", "label": "Very Active (6-7 days/week)"},
                {"value": "1.9", "label": "Extra Active"},
            ]},
            {"id": "surplus", "type": "select", "label": "Caloric surplus", "options": [
                {"value": "200", "label": "Conservative (+200 cal)"},
                {"value": "300", "label": "Moderate (+300 cal)", "selected": True},
                {"value": "500", "label": "Aggressive (+500 cal)"},
            ]},
        ],
        "submit_label": "Calculate Bulking Calories",
    },
    "results": {
        "primary": {"id": "resultNumber", "unit": "daily bulking calories"},
        "verdict_id": "resultVerdict",
        "breakdown": [
            {"id": "bmrDisplay", "label": "BMR"}, {"id": "tdeeDisplay", "label": "TDEE (maintenance)"},
            {"id": "surplusDisplay", "label": "Surplus"}, {"id": "weeklyGain", "label": "Expected weekly gain"},
            {"id": "monthlyGain", "label": "Expected monthly gain"},
        ],
    },
    "coach": {"title": "Your bulking plan", "container_id": "coachCard", "cta_text": "Questions about bulking?"},
    "js_file": "js/calculators/bulking_calorie.js",
    "faq": [
        {"question": "How many extra calories to bulk?", "answer": "200-500 cal above TDEE. A 300 cal surplus gains ~0.6 lbs/week, mostly muscle with proper training. Higher surpluses add more fat."},
        {"question": "How fast should I gain weight?", "answer": "0.25-0.5 lbs/week is optimal for muscle with minimal fat gain. Beginners can gain faster. Gaining over 1 lb/week likely adds excess fat."},
        {"question": "Lean bulk vs dirty bulk?", "answer": "Lean bulk: controlled 200-300 cal surplus with quality food. Dirty bulk: eating everything in sight. Lean bulk builds the same muscle with far less fat gain."},
        {"question": "How much protein while bulking?", "answer": "1.6-2.2 g/kg body weight. For a 170 lb person: 123-170g daily. Protein is more important than total calories for muscle growth."},
    ],
    "sources": [
        {"text": "Iraki J, et al. Nutrition Recommendations for Bodybuilders in the Off-Season. J Int Soc Sports Nutr. 2019;16(1):34.", "url": "https://pubmed.ncbi.nlm.nih.gov/31249640/"},
        {"text": "Slater GJ, et al. Is an Energy Surplus Required to Maximize Skeletal Muscle Hypertrophy? Front Nutr. 2019;6:131.", "url": "https://pubmed.ncbi.nlm.nih.gov/31552249/"},
    ],
    "methodology": "<p>BMR calculated using Mifflin-St Jeor equation. TDEE = BMR x activity factor (1.2-1.9). Bulking calories = TDEE + surplus (200-500 cal). Weight gain estimated at 3,500 cal per pound.</p>",
    "llm_capsule": "Bulking calories = TDEE + 200-500 cal surplus. A 170 lb male (moderate activity) needs roughly 2,700 TDEE + 300 surplus = 3,000 cal/day. Expected gain: 0.6 lbs/week. Aim for 1.6-2.2 g/kg protein. Lean bulk (300 cal surplus) builds similar muscle to dirty bulk but with less fat gain.",
    "ask_pills": ["Lean bulk macros", "How fast to gain", "Best bulking foods", "When to stop bulking"],
    "ask_placeholder": "e.g. How fast should I gain weight?",
}
register("bulking_calorie", BULKING_CALORIE)



ARMY_BODY_FAT = {
    "route": "/army-body-fat-calculator",
    "override_template": None,

    "seo": {
        "page_title": "Army Body Fat Calculator — Tape Test % Estimator",
        "meta_description": "Use this Army Body Fat Calculator to estimate your body fat percentage using tape test standards. Based on gender, age, height, neck, and waist.",
        "og_title": "Army Body Fat Calculator",
        "og_description": "Estimate your body fat percentage using U.S. Army tape test standards.",
        "schema_type": "WebPage",
        "schema_name": "Army Body Fat Calculator",
        "schema_description": "Estimate body fat percentage using U.S. Army tape test standards.",
        "schema_about": "Army Body Fat Calculator",
        "date_published": "2025-06-01",
        "date_modified": "2026-03-23",
        "robots": "index, follow",
    },

    "accent": "#4ade80",
    "accent_rgb": "74,222,128",

    "hero": {
        "headline": "What's your <span>body fat</span> %?",
        "subtitle": "U.S. Army tape test method -- male and female standards",
    },

    "breadcrumb_category": {"name": "Fitness & Body Composition", "url": "/fitness-body-composition-calculators"},

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

    "js_file": "js/calculators/army_body_fat.js",

    "faq": [
        {"question": "What is the Army body fat standard?", "answer": "Standards vary by age and gender per AR 600-9. Males 17-20: 20%, 21-27: 22%, 28-39: 24%, 40+: 26%. Females 17-20: 30%, 21-27: 32%, 28-39: 34%, 40+: 36%."},
        {"question": "How accurate is the Army tape test?", "answer": "It has a standard error of 3-4% compared to DEXA scans. Measurement technique significantly affects accuracy."},
        {"question": "Can civilians use this calculator?", "answer": "Yes, anyone can use it to estimate body fat percentage or compare to military standards."},
        {"question": "What is the Army tape test formula?", "answer": "Males: BF% = 86.010 x log10(waist - neck) - 70.041 x log10(height) + 36.76. Females include hip measurement in the formula."},
    ],

    "sources": [
        {"text": "DoD Instruction 1308.03: DoD Physical Fitness/Body Composition Program. Link", "url": "https://www.esd.whs.mil/Portals/54/Documents/DD/issuances/dodi/130803p.pdf"},
        {"text": "AR 600-9: The Army Body Composition Program. Updated 2023. Link", "url": "https://armypubs.army.mil/ProductMaps/PubForm/Details.aspx?PUB_ID=1021431"},
        {"text": "Hodgdon JA, Beckett MB. Prediction of percent body fat for U.S. Navy. Naval Health Research Center, 1984."},
    ],

    "methodology": "<p>Uses the DoD circumference-based body fat formulas from AR 600-9. Males: BF% = 86.010 x log10(waist - neck) - 70.041 x log10(height) + 36.76. Females: BF% = 163.205 x log10(waist + hip - neck) - 97.684 x log10(height) - 78.387. All measurements in inches. Compliance thresholds are age- and gender-dependent per AR 600-9.</p>",

    "llm_capsule": "The U.S. Army tape test estimates body fat using circumference measurements. For males: measure neck (narrowest point) and waist (at navel). For females: add hip measurement. The formula uses logarithmic calculations with height. Maximum allowed body fat ranges from 20-26% for males and 30-36% for females depending on age group. The test has a standard error of 3-4% compared to DEXA.",

    "ask_pills": ["Army BF standards", "Tape test accuracy", "How to measure neck", "Reduce body fat"],
    "ask_placeholder": "e.g. How to pass the Army tape test?",
}

register("army_body_fat", ARMY_BODY_FAT)

CREATINE_WATER = {
    "route": "/creatine-water-calculator",
    "override_template": None,

    "seo": {
        "page_title": "Creatine Water Calculator — Optimal Hydration",
        "meta_description": "Calculate optimal water intake when using creatine supplements.",
        "og_title": "Creatine Hydration Calculator",
        "og_description": "Calculate optimal water intake when using creatine supplements.",
        "schema_type": "MedicalWebPage",
        "schema_name": "Creatine Hydration Calculator",
        "schema_description": "Calculate optimal water intake when using creatine supplements.",
        "schema_about": "Creatine Hydration Calculator",
        "date_published": "2025-06-01",
        "date_modified": "2026-03-23",
        "robots": "index, follow",
    },

    "accent": "#3b82f6",
    "accent_rgb": "59,130,246",

    "hero": {
        "headline": "How much <span>water</span> with creatine?",
        "subtitle": "Personalized hydration for your protocol",
    },

    "breadcrumb_category": {"name": "Fitness & Body Composition", "url": "/fitness-body-composition-calculators"},

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

    "js_file": "js/calculators/creatine_water.js",

    "faq": [
        {"question": "Does creatine dehydrate?", "answer": "Creatine draws water into muscles, increasing total body water needs but not causing dehydration per se."},
        {"question": "Extra water amount?", "answer": "Extra 16-24 oz/day during maintenance, more during loading or intense exercise."},
        {"question": "More water during loading?", "answer": "Yes. Loading phase (20g/day) needs extra 32 oz. Maintenance (3-5g/day) needs extra 16-24 oz."},
        {"question": "Signs of dehydration?", "answer": "Dark urine, thirst, headache, fatigue. Aim for pale straw-colored urine."},
    ],

    "sources": [
        {"text": "Kreider RB et al. JISSN. 2017;14:18.", "url": "https://pubmed.ncbi.nlm.nih.gov/28615996/"},
        {"text": "Buford TW et al. JISSN. 2007;4:6.", "url": "https://pubmed.ncbi.nlm.nih.gov/17908288/"},
    ],

    "methodology": "<p>Base: 35 mL/kg/day x activity multiplier + creatine addition (500-700 mL maintenance, 700-1000 mL loading).</p>",

    "llm_capsule": "Creatine increases water needs. Base: 35 mL/kg/day. Add 500-700 mL for maintenance, 700-1000 for loading. Monitor urine color.",

    "ask_pills": ["Dehydration myths", "Loading water", "Hydration signs", "Best time for creatine"],
    "ask_placeholder": "e.g. Creatine and dehydration?",
}

register("creatine_water", CREATINE_WATER)

VO2_MAX = {
    "route": "/vo2-max-calculator",
    "override_template": "vo2_max_calculator_v3.html",

    "seo": {
        "page_title": "VO2 Max Calculator — Estimate Your Cardio Fitness",
        "meta_description": "Calculate your VO2 max with 6 validated methods: Cooper run, 1.5-mile run, Rockport walk, step test, heart rate ratio, or no-exercise estimate.",
        "og_title": "What's your VO2 max?",
        "og_description": "Calculate your VO2 max with 6 validated methods: Cooper run, 1.5-mile run, Rockport walk, step test, heart rate ratio, or no-exercise estimate.",
        "schema_type": "MedicalWebPage",
        "schema_name": "VO2 Max Calculator",
        "schema_description": "Calculate your VO2 max with 6 validated methods: Cooper run, 1.5-mile run, Rockport walk, step test, heart rate ratio, or no-exercise estimate.",
        "schema_about": "VO2 Max Calculator",
        "date_published": "2025-06-01",
        "date_modified": "2026-03-20",
        "robots": "index, follow",
    },

    "accent": "#14b8a6",
    "accent_rgb": "20,184,166",

    "hero": {
        "headline": "VO2 Max Calculator",
        "subtitle": "Calculate your VO2 max with 6 validated methods: Cooper run, 1.5-mile run, Rockp",
    },

    "breadcrumb_category": {"name": "Fitness & Body Composition", "url": "/fitness-body-composition-calculators"},

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
        {"question": "What is a good VO2 max?", "answer": "For men aged 26-35, Average is 40-42 ml/kg/min and Good is 49-56. For women, Average is 35-38 and Good is 45-52. Elite athletes reach 70-85+."},
        {"question": "Which VO2 max test is most accurate?", "answer": "The Cooper 12-minute run test has the highest correlation with lab testing (r = 0.90). The non-exercise estimate is least precise but requires no physical test."},
        {"question": "Does VO2 max decline with age?", "answer": "Yes. VO2 max declines ~7-10% per decade after age 30, but regular exercise slows this significantly."},
        {"question": "What is a MET?", "answer": "One MET equals 3.5 ml O2/kg/min. If your VO2 max is 42, your MET capacity is 12. Each additional MET reduces mortality risk by 13-15%."},
        {"question": "Can I test VO2 max with a smartwatch?", "answer": "Consumer wearables estimate VO2 max with r = 0.6-0.8 correlation to lab values. Useful for trends, less precise than field tests."},
    ],

    "sources": [],
    "methodology": "",
    "llm_capsule": "",
    "ask_pills": [],
    "ask_placeholder": "",
}

register("vo2_max", VO2_MAX)

TRAINING_VOLUME = {
    "route": "/training-volume-calculator",
    "override_template": "training_volume_calculator_v3.html",

    "seo": {
        "page_title": "Training Volume Calculator — How Many Sets Per Muscle Group",
        "meta_description": "Get personalized weekly set recommendations per muscle group based on your experience, goals, recovery, and schedule. Backed by Schoenfeld and Israetel research.",
        "og_title": "How many sets per muscle group do you need?",
        "og_description": "Get personalized weekly set recommendations per muscle group based on your experience, goals, recovery, and schedule. Backed by Schoenfeld and Israetel research.",
        "schema_type": "MedicalWebPage",
        "schema_name": "Training Volume Calculator",
        "schema_description": "Get personalized weekly set recommendations per muscle group based on your experience, goals, recovery, and schedule. Backed by Schoenfeld and Israetel research.",
        "schema_about": "Training Volume Calculator",
        "date_published": "2025-06-01",
        "date_modified": "2026-03-20",
        "robots": "index, follow",
    },

    "accent": "#14b8a6",
    "accent_rgb": "20,184,166",

    "hero": {
        "headline": "Training Volume Calculator",
        "subtitle": "Get personalized weekly set recommendations per muscle group based on your exper",
    },

    "breadcrumb_category": {"name": "Fitness & Body Composition", "url": "/fitness-body-composition-calculators"},

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
        {"question": "How many sets per muscle group per week should I do?", "answer": "10-20 hard sets per week is optimal for most people. Beginners grow with 8-12, advanced may need 16-22 sets."},
        {"question": "Does training frequency matter?", "answer": "Frequency is primarily a tool for distributing volume. Training a muscle 2x vs 3x per week shows no significant difference when total weekly sets are equal."},
        {"question": "What counts as a hard set?", "answer": "A working set at RPE 7+ (1-3 reps in reserve). Warm-ups and sets well short of failure don't count."},
        {"question": "Should I train differently as I age?", "answer": "Recovery capacity declines with age. Reduce volume by 10-30% compared to younger lifters while maintaining intensity."},
        {"question": "How does sleep affect training volume?", "answer": "Sleep deprivation reduces muscle protein synthesis by ~18%. Reduce volume by 15-30% during periods of poor sleep."},
    ],

    "sources": [],
    "methodology": "",
    "llm_capsule": "",
    "ask_pills": [],
    "ask_placeholder": "",
}

register("training_volume", TRAINING_VOLUME)

ZONE2_HEART_RATE = {
    "route": "/zone2-heart-rate-calculator",
    "override_template": "zone2_heart_rate_calculator_v3.html",

    "seo": {
        "page_title": "Zone 2 Heart Rate Calculator — Aerobic Base Training",
        "meta_description": "Calculate your Zone 2 heart rate range for optimal fat burning and aerobic base building. Uses Tanaka max HR formula, Karvonen, or Maffetone MAF method.",
        "og_title": "Find your Zone 2 heart rate",
        "og_description": "Calculate your Zone 2 heart rate range for optimal fat burning and aerobic base building. Uses Tanaka max HR formula, Karvonen, or Maffetone MAF method.",
        "schema_type": "MedicalWebPage",
        "schema_name": "Zone 2 Heart Rate Calculator",
        "schema_description": "Calculate your Zone 2 heart rate range for optimal fat burning and aerobic base building. Uses Tanaka max HR formula, Karvonen, or Maffetone MAF method.",
        "schema_about": "Zone 2 Heart Rate Calculator",
        "date_published": "2025-06-01",
        "date_modified": "2026-03-20",
        "robots": "index, follow",
    },

    "accent": "#14b8a6",
    "accent_rgb": "20,184,166",

    "hero": {
        "headline": "Zone 2 Heart Rate Calculator",
        "subtitle": "Calculate your Zone 2 heart rate range for optimal fat burning and aerobic base ",
    },

    "breadcrumb_category": {"name": "Fitness & Body Composition", "url": "/fitness-body-composition-calculators"},

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
        {"question": "What exactly is Zone 2 heart rate?", "answer": "Zone 2 is 60-70% of max heart rate -- the intensity where your body uses primarily fat for fuel and stimulates mitochondrial biogenesis."},
        {"question": "Why does Zone 2 training build mitochondria?", "answer": "Zone 2 activates PGC-1alpha, the master regulator of mitochondrial biogenesis, in slow-twitch muscle fibers over weeks of consistent training."},
        {"question": "How accurate is the 220 minus age formula?", "answer": "The 220-age formula has a standard deviation of +/-12 bpm. The Tanaka formula (208 - 0.7 x age) used here is more accurate, especially for adults over 40."},
        {"question": "How much Zone 2 training should I do per week?", "answer": "Research suggests 3-4 hours per week in sessions of 45-90 minutes for meaningful mitochondrial adaptation."},
        {"question": "Why does Zone 2 sometimes feel too easy?", "answer": "Most recreational exercisers train too hard chronically. Zone 2 pace is intentionally slow. Over 3-6 months, your pace at the same HR will increase."},
    ],

    "sources": [],
    "methodology": "",
    "llm_capsule": "",
    "ask_pills": [],
    "ask_placeholder": "",
}

register("zone2_heart_rate", ZONE2_HEART_RATE)

RUNNING_PACE = {
    "route": "/running-pace-calculator",
    "override_template": "running_pace_calculator_v3.html",

    "seo": {
        "page_title": "Running Pace Calculator — Pace, Time & Splits",
        "meta_description": "Free running pace calculator. Enter distance and time to get pace per mile/km. Includes splits table and race time equivalents for 5K, 10K, half marathon, marathon.",
        "og_title": "Calculate your running pace",
        "og_description": "Free running pace calculator. Enter distance and time to get pace per mile/km. Includes splits table and race time equivalents for 5K, 10K, half marathon, marathon.",
        "schema_type": "MedicalWebPage",
        "schema_name": "Running Pace Calculator",
        "schema_description": "Free running pace calculator. Enter distance and time to get pace per mile/km. Includes splits table and race time equivalents for 5K, 10K, half marathon, marathon.",
        "schema_about": "Running Pace Calculator",
        "date_published": "2025-06-01",
        "date_modified": "2026-03-20",
        "robots": "index, follow",
    },

    "accent": "#14b8a6",
    "accent_rgb": "20,184,166",

    "hero": {
        "headline": "Running Pace Calculator",
        "subtitle": "Free running pace calculator. Enter distance and time to get pace per mile/km. I",
    },

    "breadcrumb_category": {"name": "Fitness & Body Composition", "url": "/fitness-body-composition-calculators"},

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
        {"question": "What is a good running pace for beginners?", "answer": "12-15 min/mile. At this pace you should be able to hold a conversation. Most beginners finish a 5K in 35-45 minutes."},
        {"question": "How do I convert min/mile to min/km?", "answer": "Divide by 1.60934. A 9:00/mile pace equals 5:35/km."},
        {"question": "What pace for a sub-4 marathon?", "answer": "9:09 per mile (5:41/km). Target 9:00-9:05 for the first half to allow for natural slowdown."},
        {"question": "What is a good 5K pace?", "answer": "Average: 28-35 min (men), 32-40 min (women). Under 25 min is competitive for recreational runners."},
        {"question": "How accurate are pace calculators?", "answer": "Highly accurate for even-split predictions on flat courses. Account for 2-5% buffer for hills, weather, and fatigue in real races."},
    ],

    "sources": [],
    "methodology": "",
    "llm_capsule": "",
    "ask_pills": [],
    "ask_placeholder": "",
}

register("running_pace", RUNNING_PACE)
