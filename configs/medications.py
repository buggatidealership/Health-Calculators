from configs import register

OZEMPIC_PEN_CLICK = {
    "route": "/ozempic-pen-click-calculator",
    "override_template": "ozempic_pen_click_v3.html",

    "seo": {
        "page_title": "Ozempic Pen Click Calculator \u2014 Proper Dosing & Scheduling",
        "meta_description": "Calculate exact Ozempic pen clicks for your dose. Safety alerts, injection scheduling, and remaining doses in your pen.",
        "og_title": "How many clicks for my Ozempic dose?",
        "og_description": "Calculate exact Ozempic pen clicks for your dose. Safety alerts, injection scheduling, and remaining doses in your pen.",
        "schema_type": "MedicalWebPage",
        "schema_name": "Ozempic Pen Click Calculator",
        "schema_description": "Calculate accurate Ozempic (semaglutide) dosing, check safety alerts, and track injection schedules.",
        "schema_about": "Ozempic Pen Click Calculator",
        "date_published": "2025-06-01",
        "date_modified": "2026-03-20",
        "robots": "index, follow",
    },

    "accent": "#14b8a6",
    "accent_rgb": "20,184,166",

    "hero": {
        "headline": "How many clicks for my <span>Ozempic</span> dose?",
        "subtitle": "Tap your pen color",
    },

    "breadcrumb_category": {"name": "Weight Loss Medications", "url": "/weight-loss-medication-calculators"},

    "form": {"fields": [], "submit_label": "Calculate"},

    "results": {
        "primary": {"id": "resultNumber", "unit": "clicks for your dose"},
        "verdict_id": "resultVerdict",
        "breakdown": [],
    },

    "coach": {
        "title": "Here's your rule of thumb",
        "container_id": "coachCard",
        "cta_text": "Have more dosing questions?",
    },

    "js_file": "js/calculators/ozempic_pen_click.js",

    "faq": [
        {"question": "How many clicks do I need for my Ozempic dose?", "answer": "The number of clicks depends on your pen strength and prescribed dose. Blue Pen (0.25-0.5mg): 1 click = 0.25mg, 2 clicks = 0.5mg. Gray Pen (1-2mg): 2 clicks = 1mg, 3 clicks = 1.5mg, 4 clicks = 2mg. Green Pen (2-4mg): 2 clicks = 2mg, 3 clicks = 3mg, 4 clicks = 4mg."},
        {"question": "What should I do if I miss an Ozempic dose?", "answer": "If it has been 5 days or less since the missed dose, take it as soon as possible. If more than 5 days have passed, skip the missed dose and take your next dose on the regularly scheduled day. Never take two doses within 48 hours of each other."},
        {"question": "How long will my Ozempic pen last?", "answer": "It depends on your dose and pen strength. Blue Pen at 0.25mg weekly lasts about 8 weeks, at 0.5mg about 4 weeks. Gray Pen at 1mg weekly lasts about 4 weeks, at 2mg about 2 weeks. Green Pen at 2mg weekly lasts about 4 weeks, at 4mg about 2 weeks."},
        {"question": "Why do dosing errors occur with Ozempic?", "answer": "Common causes include using the wrong pen strength for your prescribed dose, incomplete clicks that don't fully deliver the intended dose, miscounting clicks, attempting non-standard doses that require partial clicks, and not maintaining the pen properly."},
        {"question": "Can I use any Ozempic pen for my dose?", "answer": "No. Each Ozempic pen is designed for specific dose ranges. The Blue pen is for doses up to 0.5mg, the Gray pen for doses up to 2mg, and the Green pen for doses up to 4mg. Using the wrong pen can lead to significant under or overdosing."},
    ],

    "sources": [
        {"text": "Novo Nordisk. Ozempic (semaglutide) injection prescribing information. FDA.gov. Revised 2024.", "url": "https://www.accessdata.fda.gov/drugsatfda_docs/label/2022/209637s009lbl.pdf"},
        {"text": "Wilding JPH, Batterham RL, et al. Once-weekly semaglutide in adults with overweight or obesity (STEP 1). N Engl J Med. 2021;384(11):989-1002.", "url": "https://pubmed.ncbi.nlm.nih.gov/33567185/"},
        {"text": "Davies MJ, Bergenstal R, Bode B, et al. Efficacy of liraglutide for weight loss among patients with type 2 diabetes. JAMA. 2015;314(7):687-699.", "url": "https://pubmed.ncbi.nlm.nih.gov/26284720/"},
        {"text": "Novo Nordisk. Ozempic (semaglutide) Pen Instructions for Use.", "url": "https://www.ozempic.com/how-to-take/pen-instructions.html"},
        {"text": "Marso SP, Bain SC, Consoli A, et al. Semaglutide and cardiovascular outcomes in patients with type 2 diabetes (SUSTAIN-6). N Engl J Med. 2016;375(19):1834-1844.", "url": "https://pubmed.ncbi.nlm.nih.gov/27633186/"},
    ],

    "methodology": "<p>This calculator determines pen click counts based on the dose-per-click specifications described in the FDA-approved Ozempic (semaglutide) prescribing information by Novo Nordisk. The three pen strengths have fixed click-to-dose ratios: the Blue pen (0.25-0.5 mg) delivers 0.25 mg per click, the Gray pen (1-2 mg) delivers 0.5 mg per click, and the Green pen (2-4 mg) delivers 1 mg per click.</p><p>The calculator divides the prescribed dose by the pen's dose-per-click value to determine click count, and flags non-integer results as potential dosing errors. Injection scheduling follows the standard once-weekly (every 7 days) administration interval, with missed-dose guidance based on the 5-day rule from the prescribing information.</p>",

    "llm_capsule": "Ozempic (semaglutide) pens are color-coded by dose range. The Blue pen (0.25-0.5 mg) delivers 0.25 mg per click, so 0.25 mg = 1 click and 0.5 mg = 2 clicks. The Gray pen (1-2 mg) delivers 0.5 mg per click, so 1 mg = 2 clicks, 1.5 mg = 3 clicks, and 2 mg = 4 clicks. The Green pen (2-4 mg) delivers 1 mg per click, so 2 mg = 2 clicks, 3 mg = 3 clicks, and 4 mg = 4 clicks. Ozempic is injected once weekly, with at least 2 days between injections if the day needs to change.",

    "ask_pills": ["Ozempic side effects", "Switching pen colors", "Missed dose rules", "Storage instructions"],
    "ask_placeholder": "e.g. What happens if I miss a dose?",
}

register("ozempic_pen_click", OZEMPIC_PEN_CLICK)



CAGRISEMA_WEIGHT_LOSS = {
    "route": "/cagrisema-weight-loss-calculator",
    "override_template": "cagrisema_weight_loss_calculator.html",

    "seo": {
        "page_title": "CagriSema Weight Loss Calculator — Predict Your Results",
        "meta_description": "Use the CagriSema Weight Loss Calculator to estimate your potential weight loss based on REDEFINE 1 clinical trial data. CagriSema (cagrilintide + semaglutide) showed 20.4% mean weight loss at 68 weeks.",
        "og_title": "CagriSema Weight Loss Calculator – Estimate Your Weight Loss",
        "og_description": "Calculate your expected weight loss with CagriSema (cagrilintide + semaglutide). Personalized results based on REDEFINE 1 clinical trial data.",
        "schema_type": "MedicalWebPage",
        "schema_name": "",
        "schema_description": "",
        "schema_about": "",
        "date_published": "2025-06-01",
        "date_modified": "2026-03-23",
        "robots": "noindex, nofollow",
    },

    "accent": "#f59e0b",
    "accent_rgb": "245,158,11",

    "hero": {
        "headline": "CagriSema Weight Loss Calculator",
        "subtitle": "",
    },

    "breadcrumb_category": {"name": "Weight Loss Medications", "url": "/weight-loss-medication-calculators"},

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

    "js_file": "js/calculators/cagrisema_weight_loss.js",

    "faq": [],

    "sources": [],

    "methodology": "",

    "llm_capsule": "",

    "ask_pills": ["CagriSema vs Mounjaro", "When available?", "How does amylin work?", "Side effects"],
    "ask_placeholder": "Type your question...",
}

register("cagrisema_weight_loss", CAGRISEMA_WEIGHT_LOSS)

GLP1_COMPARISON = {
    "route": "/glp1-comparison-calculator",
    "override_template": "glp1_comparison_calculator.html",

    "seo": {
        "page_title": "Ozempic vs Mounjaro Calculator — Compare GLP-1 Weight Loss",
        "meta_description": "Free GLP-1 comparison calculator shows projected weight loss on Ozempic, Mounjaro, and Zepbound side by side. Based on STEP and SURMOUNT clinical trial data.",
        "og_title": "Ozempic vs Mounjaro vs Zepbound Calculator - Compare GLP-1 Weight Loss",
        "og_description": "Free GLP-1 comparison calculator shows projected weight loss on Ozempic, Mounjaro, and Zepbound side by side. Based on STEP and SURMOUNT clinical trial data.",
        "schema_type": "MedicalWebPage",
        "schema_name": "",
        "schema_description": "",
        "schema_about": "",
        "date_published": "2025-06-01",
        "date_modified": "2026-03-23",
        "robots": "noindex, nofollow",
    },

    "accent": "#14b8a6",
    "accent_rgb": "20,184,166",

    "hero": {
        "headline": "Ozempic vs Mounjaro vs Zepbound Calculator",
        "subtitle": "Compare projected weight loss across all three GLP-1 medications side by side. Enter your details once and see how Ozempic, Mounjaro, and Zepbound stack up based on clinical trial data.",
    },

    "breadcrumb_category": {"name": "Weight Loss Medications", "url": "/weight-loss-medication-calculators"},

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

    "js_file": "js/calculators/glp1_comparison.js",

    "faq": [],

    "sources": [],

    "methodology": "",

    "llm_capsule": "",

    "ask_pills": ["Which is most effective?", "Cost comparison", "Side effects comparison", "Which for diabetes?"],
    "ask_placeholder": "Type your question...",
}

register("glp1_comparison", GLP1_COMPARISON)

GLP1_COST = {
    "route": "/glp1-cost-calculator",
    "override_template": "glp1_cost_calculator.html",

    "seo": {
        "page_title": "GLP-1 Medication Cost Calculator — Compare Treatment Costs",
        "meta_description": "Estimate and compare costs of GLP-1 receptor agonist medications. Calculate your monthly and annual treatment expenses with insurance, manufacturer discounts, and savings options.",
        "og_title": "GLP-1 Medication Cost Comparison Calculator",
        "og_description": "Compare costs of GLP-1 medications and estimate your treatment expenses with insurance and savings options.",
        "schema_type": "MedicalWebPage",
        "schema_name": "",
        "schema_description": "",
        "schema_about": "",
        "date_published": "2025-06-01",
        "date_modified": "2026-03-23",
        "robots": "noindex, nofollow",
    },

    "accent": "#22c55e",
    "accent_rgb": "34,197,94",

    "hero": {
        "headline": "GLP-1 Medication Cost Calculator",
        "subtitle": "Compare treatment costs and estimate your monthly and annual expenses for GLP-1 medications.",
    },

    "breadcrumb_category": {"name": "Weight Loss Medications", "url": "/weight-loss-medication-calculators"},

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

    "js_file": "js/calculators/glp1_cost.js",

    "faq": [],

    "sources": [],

    "methodology": "",

    "llm_capsule": "",

    "ask_pills": ["Insurance coverage", "Manufacturer savings", "Compounded vs brand", "Will prices drop?"],
    "ask_placeholder": "Type your question...",
}

register("glp1_cost", GLP1_COST)

OZEMPIC_WEIGHT_LOSS = {
    "route": "/ozempic-weight-loss-calculator",
    "override_template": "ozempic_weight_loss_calculator_v25.html",

    "seo": {
        "page_title": "Ozempic Weight Loss Calculator — Predict Your Results",
        "meta_description": "Calculate your expected weight loss on Ozempic (semaglutide) based on STEP and SUSTAIN clinical trial data. Personalized projections by dose, duration, and BMI.",
        "og_title": "How much weight will I lose on Ozempic?",
        "og_description": "Calculate your expected weight loss on Ozempic (semaglutide). Personalized projections based on clinical trial data.",
        "schema_type": "MedicalWebPage",
        "schema_name": "Ozempic Weight Loss Calculator",
        "schema_description": "Estimate your fat loss and BMI reduction while taking semaglutide (Ozempic/Wegovy). Get personalized projections based on clinical data and your individual profile.",
        "schema_about": "Ozempic Weight Loss Calculator",
        "date_published": "2025-06-01",
        "date_modified": "2026-03-20",
        "robots": "noindex, nofollow",
    },

    "accent": "#14b8a6",
    "accent_rgb": "20,184,166",

    "hero": {
        "headline": "How much weight will I lose on <span>Ozempic</span>?",
        "subtitle": "Clinical trial projections, personalized to you",
    },

    "breadcrumb_category": {"name": "Weight Loss Medications", "url": "/weight-loss-medication-calculators"},

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
        {"question": "How much weight can I lose on Ozempic?", "answer": "In the STEP 1 clinical trial (N=1,961), participants taking semaglutide 2.4 mg weekly lost an average of 14.9% of their body weight over 68 weeks, compared to 2.4% with placebo. At the standard Ozempic doses (0.5 mg and 1.0 mg), the SUSTAIN trials showed weight loss typically ranges from 5% to 10% of body weight over 6-12 months."},
        {"question": "When will I start seeing results on Ozempic?", "answer": "Most people start noticing weight loss within 4-6 weeks of starting treatment. The rate of loss is typically fastest between weeks 12 and 28 during dose escalation."},
        {"question": "Will I regain weight after stopping Ozempic?", "answer": "The STEP 4 trial showed participants who switched from semaglutide 2.4 mg to placebo regained approximately two-thirds of the weight they had lost over the following 48 weeks."},
        {"question": "Should I diet while taking Ozempic?", "answer": "Yes. All STEP clinical trials combined semaglutide with a reduced-calorie diet (500 kcal/day deficit) and increased physical activity (150 minutes/week). Dietary changes amplify results substantially."},
        {"question": "Is this calculator based on real clinical trials?", "answer": "Yes. The projections are derived from the STEP and SUSTAIN clinical trial programs published in the New England Journal of Medicine and The Lancet."},
    ],

    "sources": [],
    "methodology": "",
    "llm_capsule": "",
    "ask_pills": [],
    "ask_placeholder": "",
}

register("ozempic_weight_loss", OZEMPIC_WEIGHT_LOSS)

WEGOVY_WEIGHT_LOSS = {
    "route": "/wegovy-weight-loss-calculator",
    "override_template": "wegovy_weight_loss_calculator_v25.html",

    "seo": {
        "page_title": "Wegovy Weight Loss Calculator — Results Estimator",
        "meta_description": "Free Wegovy weight loss calculator projects your expected weight loss based on STEP clinical trial data. Personalized by starting weight, dose, and treatment duration.",
        "og_title": "Wegovy Weight Loss Calculator – Semaglutide 2.4mg Projection Tool",
        "og_description": "Calculate your expected weight loss with Wegovy (semaglutide 2.4mg). Personalized results based on STEP trial data, dose, and treatment duration.",
        "schema_type": "MedicalWebPage",
        "schema_name": "Wegovy Weight Loss Calculator",
        "schema_description": "Free Wegovy weight loss calculator projects your expected weight loss based on STEP clinical trial data. Personalized by starting weight, dose, and treatment duration.",
        "schema_about": "Wegovy Weight Loss Calculator",
        "date_published": "2025-06-01",
        "date_modified": "2026-03-20",
        "robots": "noindex, nofollow",
    },

    "accent": "#14b8a6",
    "accent_rgb": "20,184,166",

    "hero": {
        "headline": "Wegovy Weight Loss Calculator",
        "subtitle": "Free Wegovy weight loss calculator projects your expected weight loss based on S",
    },

    "breadcrumb_category": {"name": "Weight Loss Medications", "url": "/weight-loss-medication-calculators"},

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

    "faq": [],

    "sources": [],
    "methodology": "",
    "llm_capsule": "",
    "ask_pills": [],
    "ask_placeholder": "",
}

register("wegovy_weight_loss", WEGOVY_WEIGHT_LOSS)

ORAL_WEGOVY_WEIGHT_LOSS = {
    "route": "/oral-wegovy-weight-loss-calculator",
    "override_template": "oral_wegovy_weight_loss_calculator_v25.html",

    "seo": {
        "page_title": "Oral Wegovy Weight Loss Calculator — Semaglutide 25mg",
        "meta_description": "Free Oral Wegovy (oral semaglutide 25mg) weight loss calculator. Project your expected weight loss based on OASIS 1 clinical trial data. Personalized by starting weight, height, and treatment duration.",
        "og_title": "Oral Wegovy Weight Loss Calculator – Oral Semaglutide 25mg Projection Tool",
        "og_description": "Calculate your expected weight loss with oral Wegovy (semaglutide 25mg pill). Personalized results based on OASIS 1 trial data, dosing schedule, and treatment duration.",
        "schema_type": "MedicalWebPage",
        "schema_name": "Oral Wegovy Weight Loss Calculator",
        "schema_description": "Free Oral Wegovy (oral semaglutide 25mg) weight loss calculator. Project your expected weight loss based on OASIS 1 clinical trial data. Personalized by starting weight, height, and treatment duration.",
        "schema_about": "Oral Wegovy Weight Loss Calculator",
        "date_published": "2025-06-01",
        "date_modified": "2026-03-20",
        "robots": "noindex, nofollow",
    },

    "accent": "#14b8a6",
    "accent_rgb": "20,184,166",

    "hero": {
        "headline": "Oral Wegovy Weight Loss Calculator",
        "subtitle": "Free Oral Wegovy (oral semaglutide 25mg) weight loss calculator. Project your ex",
    },

    "breadcrumb_category": {"name": "Weight Loss Medications", "url": "/weight-loss-medication-calculators"},

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

    "faq": [],

    "sources": [],
    "methodology": "",
    "llm_capsule": "",
    "ask_pills": [],
    "ask_placeholder": "",
}

register("oral_wegovy_weight_loss", ORAL_WEGOVY_WEIGHT_LOSS)

MOUNJARO_WEIGHT_LOSS = {
    "route": "/mounjaro-weight-loss-calculator",
    "override_template": "mounjaro_weight_loss_calculator_v25.html",

    "seo": {
        "page_title": "Mounjaro Weight Loss Calculator — Results Estimator",
        "meta_description": "Estimate your potential weight loss on Mounjaro (tirzepatide) based on dose, duration, and lifestyle factors. Projections based on SURMOUNT clinical trial data.",
        "og_title": "Mounjaro Weight Loss Calculator – Tirzepatide Results Estimator",
        "og_description": "Estimate your potential weight loss on Mounjaro (tirzepatide) based on dose, duration, and lifestyle factors. Projections based on SURMOUNT clinical trial data.",
        "schema_type": "MedicalWebPage",
        "schema_name": "Mounjaro Weight Loss Calculator",
        "schema_description": "Estimate your potential weight loss on Mounjaro (tirzepatide) based on dose, duration, and lifestyle factors. Projections based on SURMOUNT clinical trial data.",
        "schema_about": "Mounjaro Weight Loss Calculator",
        "date_published": "2025-06-01",
        "date_modified": "2026-03-20",
        "robots": "noindex, nofollow",
    },

    "accent": "#14b8a6",
    "accent_rgb": "20,184,166",

    "hero": {
        "headline": "Mounjaro Weight Loss Calculator",
        "subtitle": "Estimate your potential weight loss on Mounjaro (tirzepatide) based on dose, dur",
    },

    "breadcrumb_category": {"name": "Weight Loss Medications", "url": "/weight-loss-medication-calculators"},

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

    "faq": [],

    "sources": [],
    "methodology": "",
    "llm_capsule": "",
    "ask_pills": [],
    "ask_placeholder": "",
}

register("mounjaro_weight_loss", MOUNJARO_WEIGHT_LOSS)

ZEPBOUND_WEIGHT_LOSS = {
    "route": "/zepbound-weight-loss-calculator",
    "override_template": "zepbound_weight_loss_calculator_v25.html",

    "seo": {
        "page_title": "Zepbound Weight Loss Calculator — Tirzepatide Projection Tool",
        "meta_description": "Free Zepbound weight loss calculator projects your expected weight loss based on SURMOUNT clinical trial data. Personalized timeline by dose, starting weight, and treatment duration.",
        "og_title": "Zepbound Weight Loss Calculator – Tirzepatide Projection Tool",
        "og_description": "Free Zepbound weight loss calculator projects your expected weight loss based on SURMOUNT clinical trial data. Personalized timeline by dose, starting weight, and treatment duration.",
        "schema_type": "MedicalWebPage",
        "schema_name": "Zepbound Weight Loss Calculator",
        "schema_description": "Free Zepbound weight loss calculator projects your expected weight loss based on SURMOUNT clinical trial data. Personalized timeline by dose, starting weight, and treatment duration.",
        "schema_about": "Zepbound Weight Loss Calculator",
        "date_published": "2025-06-01",
        "date_modified": "2026-03-20",
        "robots": "noindex, nofollow",
    },

    "accent": "#14b8a6",
    "accent_rgb": "20,184,166",

    "hero": {
        "headline": "Zepbound Weight Loss Calculator",
        "subtitle": "Free Zepbound weight loss calculator projects your expected weight loss based on",
    },

    "breadcrumb_category": {"name": "Weight Loss Medications", "url": "/weight-loss-medication-calculators"},

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

    "faq": [],

    "sources": [],
    "methodology": "",
    "llm_capsule": "",
    "ask_pills": [],
    "ask_placeholder": "",
}

register("zepbound_weight_loss", ZEPBOUND_WEIGHT_LOSS)

OZEMPIC_FACE = {
    "route": "/ozempic-face-calculator",
    "override_template": "ozempic_face_calculator_v25.html",

    "seo": {
        "page_title": "Ozempic Face Risk Calculator — Predict Facial Volume Loss",
        "meta_description": "Free Ozempic face calculator estimates your risk of facial volume loss from GLP-1 weight loss medications. Based on clinical data on age, BMI, and rate of weight loss.",
        "og_title": "Ozempic Face Risk Calculator – Predict Facial Volume Loss",
        "og_description": "Free Ozempic face calculator estimates your risk of facial volume loss from GLP-1 weight loss medications. Based on clinical data on age, BMI, and rate of weight loss.",
        "schema_type": "MedicalWebPage",
        "schema_name": "Ozempic Face Calculator",
        "schema_description": "Free Ozempic face calculator estimates your risk of facial volume loss from GLP-1 weight loss medications. Based on clinical data on age, BMI, and rate of weight loss.",
        "schema_about": "Ozempic Face Calculator",
        "date_published": "2025-06-01",
        "date_modified": "2026-03-20",
        "robots": "noindex, nofollow",
    },

    "accent": "#14b8a6",
    "accent_rgb": "20,184,166",

    "hero": {
        "headline": "Ozempic Face Risk Calculator",
        "subtitle": "Free Ozempic face calculator estimates your risk of facial volume loss from GLP-",
    },

    "breadcrumb_category": {"name": "Weight Loss Medications", "url": "/weight-loss-medication-calculators"},

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

    "faq": [],

    "sources": [],
    "methodology": "",
    "llm_capsule": "",
    "ask_pills": [],
    "ask_placeholder": "",
}

register("ozempic_face", OZEMPIC_FACE)

SEMAGLUTIDE_RECONSTITUTION = {
    "route": "/semaglutide-reconstitution-calculator",
    "override_template": "semaglutide_reconstitution_calculator_v25.html",

    "seo": {
        "page_title": "Semaglutide Reconstitution Calculator — Mixing & Dosing",
        "meta_description": "Calculate exactly how many units to inject from your reconstituted semaglutide vial. Enter peptide amount, water volume, and desired dose to get precise syringe measurements.",
        "og_title": "Semaglutide Reconstitution Calculator — Mixing & Dosing Guide",
        "og_description": "Calculate the exact injection volume for your reconstituted semaglutide. Enter vial size, water volume, and dose to get units on your insulin syringe.",
        "schema_type": "MedicalWebPage",
        "schema_name": "Semaglutide Reconstitution Calculator",
        "schema_description": "Calculate injection volume in insulin syringe units from reconstituted semaglutide or tirzepatide vials. Enter peptide amount, bacteriostatic water volume, and desired dose.",
        "schema_about": "Semaglutide Reconstitution Calculator",
        "date_published": "2025-06-01",
        "date_modified": "2026-03-20",
        "robots": "noindex, nofollow",
    },

    "accent": "#14b8a6",
    "accent_rgb": "20,184,166",

    "hero": {
        "headline": "Semaglutide Reconstitution Calculator",
        "subtitle": "Calculate exactly how many units to inject from your reconstituted semaglutide v",
    },

    "breadcrumb_category": {"name": "Weight Loss Medications", "url": "/weight-loss-medication-calculators"},

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

    "faq": [],

    "sources": [],
    "methodology": "",
    "llm_capsule": "",
    "ask_pills": [],
    "ask_placeholder": "",
}

register("semaglutide_reconstitution", SEMAGLUTIDE_RECONSTITUTION)

PEPTIDE_RECONSTITUTION = {
    "route": "/peptide-reconstitution-calculator",
    "override_template": "semaglutide_reconstitution_calculator_v25.html",

    "seo": {
        "page_title": "Semaglutide Reconstitution Calculator — Mixing & Dosing",
        "meta_description": "Calculate exactly how many units to inject from your reconstituted semaglutide vial. Enter peptide amount, water volume, and desired dose to get precise syringe measurements.",
        "og_title": "Semaglutide Reconstitution Calculator — Mixing & Dosing Guide",
        "og_description": "Calculate the exact injection volume for your reconstituted semaglutide. Enter vial size, water volume, and dose to get units on your insulin syringe.",
        "schema_type": "MedicalWebPage",
        "schema_name": "Semaglutide Reconstitution Calculator",
        "schema_description": "Calculate injection volume in insulin syringe units from reconstituted semaglutide or tirzepatide vials. Enter peptide amount, bacteriostatic water volume, and desired dose.",
        "schema_about": "Semaglutide Reconstitution Calculator",
        "date_published": "2025-06-01",
        "date_modified": "2026-03-20",
        "robots": "noindex, nofollow",
    },

    "accent": "#14b8a6",
    "accent_rgb": "20,184,166",

    "hero": {
        "headline": "Semaglutide Reconstitution Calculator",
        "subtitle": "Calculate exactly how many units to inject from your reconstituted semaglutide v",
    },

    "breadcrumb_category": {"name": "Weight Loss Medications", "url": "/weight-loss-medication-calculators"},

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

    "faq": [],

    "sources": [],
    "methodology": "",
    "llm_capsule": "",
    "ask_pills": [],
    "ask_placeholder": "",
}

register("peptide_reconstitution", PEPTIDE_RECONSTITUTION)

HCG_INJECTION = {
    "route": "/hcg-injection-dosage-calculator",
    "override_template": "hcg_injection_calculator_v3.html",

    "seo": {
        "page_title": "HCG Injection Dosage Calculator",
        "meta_description": "Calculate HCG injection volume from vial strength and bacteriostatic water volume.",
        "og_title": "HCG Injection Dosage Calculator",
        "og_description": "Calculate HCG injection volume from vial strength and bacteriostatic water volume.",
        "schema_type": "MedicalWebPage",
        "schema_name": "HCG Injection Dosage Calculator",
        "schema_description": "Calculate HCG injection volume from vial strength and bacteriostatic water volume.",
        "schema_about": "HCG Injection Dosage Calculator",
        "date_published": "2025-06-01",
        "date_modified": "2026-03-20",
        "robots": "noindex, nofollow",
    },

    "accent": "#14b8a6",
    "accent_rgb": "20,184,166",

    "hero": {
        "headline": "How much <span>HCG</span> to inject?",
        "subtitle": "Calculate HCG injection volume from vial strength and bacteriostatic water volum",
    },

    "breadcrumb_category": {"name": "Weight Loss Medications", "url": "/weight-loss-medication-calculators"},

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
        {"question": "How to calculate dose?", "answer": "Concentration = vial IU / water mL. Injection volume = prescribed dose / concentration."},
        {"question": "What syringe to use?", "answer": "Most HCG injections use U-100 insulin syringes. 1 mL = 100 units."},
        {"question": "How long does mixed HCG last?", "answer": "Refrigerated with bacteriostatic water: typically 30 days. Check product labeling."},
        {"question": "Bacteriostatic vs sterile water?", "answer": "Bacteriostatic water for multi-dose vials (has preservative). Sterile water for single-dose only."},
    ],

    "sources": [],
    "methodology": "",
    "llm_capsule": "",
    "ask_pills": [],
    "ask_placeholder": "",
}

register("hcg_injection", HCG_INJECTION)
