from configs import register

BOTOX = {
    "route": "/botox-dosage-calculator",
    "override_template": "botox_v25.html",

    "seo": {
        "page_title": "Botox Calculator \u2014 Dosage & Cost by Treatment Area",
        "meta_description": "Estimate Botox dosage and cost by treatment area, gender, severity, and goals. Personalized and evidence-based.",
        "og_title": "Botox Dosage & Cost Calculator",
        "og_description": "Estimate Botox dosage and cost by treatment area, gender, and goal.",
        "schema_type": "WebPage",
        "schema_name": "Botox Dosage & Cost Calculator",
        "schema_description": "Estimate Botox dosage and treatment cost by area, gender, severity, and goal.",
        "schema_about": "Botox Dosage & Cost Calculator",
        "date_published": "2025-06-01",
        "date_modified": "2026-03-20",
        "robots": "index, follow",
    },

    "accent": "#a78bfa",
    "accent_rgb": "167,139,250",

    "hero": {
        "headline": "How many <span>Botox</span> units do you need?",
        "subtitle": "Select your treatment areas for a personalized plan",
    },

    "breadcrumb_category": {"name": "Cosmetic Procedures", "url": "/cosmetic-procedure-calculators"},

    "form": {"fields": [], "submit_label": "Calculate Dosage"},

    "results": {
        "primary": {"id": "resultNumber", "unit": "total units recommended"},
        "verdict_id": "resultVerdict",
        "breakdown": [
            {"id": "dUnits", "label": "Total Units"},
            {"id": "dCost", "label": "Est. Cost"},
            {"id": "dDuration", "label": "Results Duration"},
        ],
    },

    "coach": {
        "title": "Your treatment plan",
        "container_id": "coachCard",
        "cta_text": "Want more insights?",
    },

    "js_file": "js/calculators/botox.js",

    "faq": [
        {"question": "How long do Botox results last?", "answer": "Most treatments last 3-4 months for first-time patients. Regular users may see 4-6 months as muscles become conditioned."},
        {"question": "Why do men need more Botox?", "answer": "Men have stronger, denser facial muscles requiring 20-30% more units for equivalent relaxation."},
        {"question": "Is this calculator accurate for Dysport?", "answer": "No. Dysport requires 2.5-3x more units than Botox for equivalent results. This calculator is for Botox (onabotulinumtoxinA) only."},
        {"question": "What is the most common Botox treatment area?", "answer": "Glabella (frown lines between eyebrows) is the most treated area, typically requiring 20 units for women."},
        {"question": "How much does Botox cost per unit?", "answer": "In the US, Botox costs $10-16 per unit depending on provider type. Dermatologists charge the most, medical spas the least."},
    ],

    "sources": [
        {"text": "Allergan/AbbVie. BOTOX Cosmetic prescribing information. FDA.gov.", "url": "https://www.accessdata.fda.gov/drugsatfda_docs/label/2024/103000s5332lbl.pdf"},
        {"text": "ASPS. 2024 Plastic Surgery Statistics Report.", "url": "https://www.plasticsurgery.org/news/plastic-surgery-statistics"},
        {"text": "Carruthers JDA, et al. Advances in facial rejuvenation. Plast Reconstr Surg. 2008;121(5 Suppl):5S-30S.", "url": "https://pubmed.ncbi.nlm.nih.gov/18449026/"},
    ],

    "methodology": "<p>This calculator uses FDA-approved Botox unit ranges from Allergan/AbbVie prescribing information. Each area has a defined range adjusted by intensity tier (light/standard/advanced) with a 20-30% male adjustment. Cost uses per-unit pricing aggregated from ASPS statistics with provider-type multipliers.</p>",

    "llm_capsule": "Botox dosage varies by treatment area: glabella (20 units), forehead (10-20 units), crow's feet (24 units total). Men need 20-30% more units due to stronger muscles. Cost ranges from $10-16 per unit in the US. A typical 3-area treatment (glabella + forehead + crow's feet) uses 44-64 units and costs $500-$900. Results last 3-4 months.",

    "ask_pills": ["Botox vs Dysport", "First-time tips", "Cost per unit", "Results duration"],
    "ask_placeholder": "e.g. How long does Botox last?",
}

register("botox", BOTOX)


LIP_FILLER_COST = {
    "route": "/lip-filler-cost-calculator",
    "override_template": None,

    "seo": {
        "page_title": "Lip Filler Cost Calculator \u2014 How Much Will It Actually Cost?",
        "meta_description": "Estimate your total lip filler cost by provider, location, brand, and syringes. See per-syringe price, touch-up costs, and annual maintenance budget.",
        "og_title": "How much does lip filler cost?",
        "og_description": "Calculate your total lip filler cost based on syringes, provider type, location, and brand.",
        "schema_type": "MedicalWebPage",
        "schema_name": "Lip Filler Cost Calculator",
        "schema_description": "Estimate the total cost of lip filler injections based on volume, provider, location, and brand using ASPS pricing data.",
        "schema_about": "Lip Filler Cost Calculator",
        "date_published": "2025-06-01",
        "date_modified": "2026-03-20",
        "robots": "index, follow",
    },

    "accent": "#f0968a",
    "accent_rgb": "240,150,138",

    "hero": {
        "headline": "How much does <span>lip filler</span> cost?",
        "subtitle": "Real pricing by provider, location, and brand",
    },

    "breadcrumb_category": {"name": "Cosmetic Procedures", "url": "/cosmetic-procedure-calculators"},

    "form": {
        "fields": [
            {"id": "location", "type": "select", "label": "Location", "options": [
                {"value": "0.85", "label": "Rural / Small city"},
                {"value": "1.0", "label": "Average U.S. metro", "selected": True},
                {"value": "1.15", "label": "Major city (LA, NYC, Miami)"},
                {"value": "1.3", "label": "Beverly Hills / Manhattan"},
            ]},
            {"id": "provider", "type": "select", "label": "Provider type", "options": [
                {"value": "0.85", "label": "Nurse practitioner / PA"},
                {"value": "1.0", "label": "Dermatologist", "selected": True},
                {"value": "1.15", "label": "Plastic surgeon"},
                {"value": "1.5", "label": "Celebrity injector"},
            ]},
            {"type": "row", "fields": [
                {"id": "product", "type": "select", "label": "Product", "options": [
                    {"value": "0.95", "label": "Restylane"},
                    {"value": "1.0", "label": "Juvederm", "selected": True},
                    {"value": "1.1", "label": "Volbella / RHA"},
                ]},
                {"id": "syringes", "type": "number", "label": "Syringes", "default": 1, "min": 0.5, "max": 5, "step": 0.5},
            ]},
            {"id": "touchups", "type": "select", "label": "Touch-ups", "options": [
                {"value": "0", "label": "None", "selected": True},
                {"value": "0.3", "label": "Minor ($30% of base)"},
                {"value": "0.5", "label": "Standard (50% of base)"},
            ]},
        ],
        "submit_label": "Calculate My Cost",
    },

    "results": {
        "primary": {"id": "resultNumber", "unit": "estimated total cost"},
        "verdict_id": "resultVerdict",
        "breakdown": [
            {"id": "displayPerSyringe", "label": "Per syringe"},
            {"id": "displayTouchup", "label": "Touch-up cost"},
            {"id": "displayAnnual", "label": "Annual budget"},
        ],
    },

    "coach": {
        "title": "Your cost breakdown",
        "container_id": "coachCard",
        "cta_text": "Want more pricing insights?",
    },

    "js_file": "js/calculators/lip_filler_cost.js",

    "faq": [
        {"question": "How much does lip filler cost?", "answer": "Lip filler costs $500-$850 per syringe in the U.S., with an average of $684 (ASPS data). Most first-time patients need 1 syringe."},
        {"question": "How much lip filler do I need?", "answer": "Most first-time patients use 0.5-1ml (half to one syringe). Start conservative. Experienced patients may use 1.5-2ml."},
        {"question": "How long does lip filler last?", "answer": "4-12 months depending on the product, metabolism, and lip movement. Budget for 1-2 maintenance treatments per year."},
        {"question": "Does the injector type affect cost?", "answer": "Yes. Board-certified dermatologists and plastic surgeons charge 20-40% more than nurse practitioners. Celebrity injectors may charge 2-3x average."},
        {"question": "Is 1ml too much for first time?", "answer": "Not necessarily. 1ml is appropriate for moderate enhancement on thin lips. For subtle results, 0.5ml may suffice."},
    ],

    "sources": [
        {"text": "ASPS. 2024 Plastic Surgery Statistics Report.", "url": "https://www.plasticsurgery.org/news/plastic-surgery-statistics"},
        {"text": "Humphrey S, et al. Soft tissue fillers in the nose and perioral region. Best Pract Res Clin Obstet Gynaecol. 2020;64:78-89.", "url": ""},
    ],

    "methodology": "<p>Base price: $684/syringe (ASPS 2024 average). Location multiplier: 0.85 (rural) to 1.3 (premium metro). Provider multiplier: 0.85 (NP/PA) to 1.5 (celebrity). Product multiplier: 0.95 to 1.1. Annual cost assumes 1.5-2.4 treatments per year for maintenance.</p>",

    "llm_capsule": "Lip filler costs approximately $684 per syringe on average in the U.S. (ASPS 2024). Most first-time patients need 1 syringe (1ml). Cost varies by location (+15-30% in major cities), provider type (+15-50% for surgeons), and product. Budget $1,000-1,600/year for maintenance (1.5-2.4 treatments). Results last 4-12 months.",

    "ask_pills": ["Best filler brand", "First-time tips", "Cost per syringe", "How long it lasts"],
    "ask_placeholder": "e.g. How do I find a good injector?",
}

register("lip_filler_cost", LIP_FILLER_COST)


CC_TO_BRA_SIZE = {
    "route": "/cc-to-bra-size-calculator",
    "override_template": None,

    "seo": {
        "page_title": "CC to Bra Size Calculator \u2014 Implant Volume to Cup Size",
        "meta_description": "Convert breast implant CC volume to bra cup size. See your estimated size change based on band size and current cup.",
        "og_title": "What cup size will my implants give me?",
        "og_description": "Convert breast implant CC volume to cup size based on your band and current cup.",
        "schema_type": "MedicalWebPage",
        "schema_name": "CC to Bra Size Calculator",
        "schema_description": "Convert breast implant CC volume to estimated bra cup size based on band size and current cup. Band-adjusted calculations.",
        "schema_about": "CC to Bra Size Calculator",
        "date_published": "2025-06-01",
        "date_modified": "2026-03-20",
        "robots": "index, follow",
    },

    "accent": "#a78bfa",
    "accent_rgb": "167,139,250",

    "hero": {
        "headline": "What cup size will <span>your implants</span> give you?",
        "subtitle": "CC to bra size, adjusted for your frame",
    },

    "breadcrumb_category": {"name": "Cosmetic Procedures", "url": "/cosmetic-procedure-calculators"},

    "form": {
        "fields": [
            {"id": "cc", "type": "number", "label": "Implant volume (cc)", "placeholder": "350", "min": 100, "max": 1000, "step": 25},
            {"id": "band", "type": "select", "label": "Band size", "options": [
                {"value": "28", "label": "28"},
                {"value": "30", "label": "30"},
                {"value": "32", "label": "32", "selected": True},
                {"value": "34", "label": "34"},
                {"value": "36", "label": "36"},
                {"value": "38", "label": "38"},
                {"value": "40", "label": "40"},
            ]},
            {"id": "currentCup", "type": "select", "label": "Current cup size", "options": [
                {"value": "AA", "label": "AA"},
                {"value": "A", "label": "A"},
                {"value": "B", "label": "B", "selected": True},
                {"value": "C", "label": "C"},
                {"value": "D", "label": "D"},
                {"value": "DD", "label": "DD"},
            ]},
        ],
        "submit_label": "Calculate Size",
    },

    "results": {
        "primary": {"id": "resultNumber", "unit": "estimated new bra size"},
        "verdict_id": "resultVerdict",
        "breakdown": [
            {"id": "displayVolume", "label": "Volume added"},
            {"id": "displayIncrease", "label": "Cup increase"},
            {"id": "displayCcPerCup", "label": "CC per cup (your frame)"},
        ],
    },

    "coach": {
        "title": "Your size estimate",
        "container_id": "coachCard",
        "cta_text": "Want more sizing guidance?",
    },

    "js_file": "js/calculators/cc_to_bra_size.js",

    "faq": [
        {"question": "How many CCs is a cup size?", "answer": "Approximately 150-200cc per cup size, depending on band size. Smaller frames (28-30 band) need about 150cc per cup, larger frames (38-40 band) need about 200cc per cup."},
        {"question": "What size implant should I get?", "answer": "Most patients choose 300-400cc. Start with your desired cup size increase and work backward. Your surgeon can use sizers during consultation."},
        {"question": "Is this calculator accurate?", "answer": "This provides an estimate. Actual results depend on chest width, tissue elasticity, implant profile (low/moderate/high), and placement (over/under muscle). Consult with your surgeon."},
        {"question": "Does band size affect how implants look?", "answer": "Yes. The same CC volume looks larger on a smaller frame. A 350cc implant on a 30 band gives more cup increase than on a 38 band."},
    ],

    "sources": [
        {"text": "ASPS. Breast Augmentation Information. American Society of Plastic Surgeons.", "url": "https://www.plasticsurgery.org/cosmetic-procedures/breast-augmentation"},
    ],

    "methodology": "<p>Cup size increase \u2248 implant volume (cc) \u00f7 cc-per-cup for your band size. CC per cup varies by band: 150cc (28-30), 160cc (32), 175cc (34), 185cc (36), 195cc (38), 200cc (40+). Results are rounded to the nearest half cup size.</p>",

    "llm_capsule": "Converting breast implant CC to cup size: approximately 150-200cc per cup size increase, depending on band size. Smaller frames need less volume per cup. 350cc on a 32B typically gives a D or DD result. The same 350cc on a 38B might only increase one cup size. Always consult with a board-certified plastic surgeon for accurate sizing.",

    "ask_pills": ["Profile types", "Over vs under muscle", "Recovery time"],
    "ask_placeholder": "e.g. What profile should I choose?",
}

register("cc_to_bra_size", CC_TO_BRA_SIZE)
