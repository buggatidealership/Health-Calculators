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
