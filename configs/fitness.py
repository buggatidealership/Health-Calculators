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
