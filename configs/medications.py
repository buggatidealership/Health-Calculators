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
    "override_template": None,

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
        "robots": "index, follow",
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
    "override_template": None,

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
        "robots": "index, follow",
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
    "override_template": None,

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
        "robots": "index, follow",
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