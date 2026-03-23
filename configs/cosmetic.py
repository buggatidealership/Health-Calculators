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



BREAST_IMPLANT = {
    "route": "/breast-implant-calculator",
    "override_template": None,

    "seo": {
        "page_title": "Breast Implant Size & Cost Calculator — What Size Should You Get?",
        "meta_description": "Estimate your ideal breast implant size in cc, recommended profile, and total cost by body type, goals, and location. Built for clarity.",
        "og_title": "What breast implant size should I get?",
        "og_description": "Estimate your ideal implant size in cc and total cost based on your measurements, goals, and location.",
        "schema_type": "MedicalWebPage",
        "schema_name": "Breast Implant Size & Cost Calculator",
        "schema_description": "Estimate breast implant volume, profile, and cost based on body measurements and aesthetic goals using the Tebbetts-Adams sizing method.",
        "schema_about": "Breast Implant Calculator",
        "date_published": "2025-06-01",
        "date_modified": "2026-03-23",
        "robots": "index, follow",
    },

    "accent": "#e88da4",
    "accent_rgb": "232,141,164",

    "hero": {
        "headline": "What <span>implant size</span> is right for you?",
        "subtitle": "Get your estimated volume, profile, and cost in seconds",
    },

    "breadcrumb_category": {"name": "Cosmetic Procedures", "url": "/cosmetic-procedure-calculators"},

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

    "js_file": "js/calculators/breast_implant.js",

    "faq": [
        {"question": "How do I choose the right breast implant size?", "answer": "Start with the cup size difference you want. Each cup size increase equals roughly 150-200cc of implant volume. Your breast width determines the maximum implant diameter, and profile (moderate vs high) is selected to fit that width. A board-certified surgeon will refine this with in-person measurements."},
        {"question": "How much do breast implants cost?", "answer": "Total breast augmentation cost ranges from $5,600 to $12,000 in the U.S., including surgeon fees, anesthesia, facility costs, and implants. Silicone costs $1,000-$2,000 per implant, saline $600-$1,500, and gummy bear $1,200-$2,500. Prices are lower in Europe and Asia."},
        {"question": "What's the difference between implant types?", "answer": "Silicone gel implants feel most natural and are the most popular choice. Saline implants cost less but may feel firmer. Gummy bear (highly cohesive gel) implants hold their shape even if the shell breaks, offering the most natural look at the highest price point."},
        {"question": "How long do breast implants last?", "answer": "Most manufacturers suggest replacement every 10-20 years, though many women have implants longer without complications. Replacement is typically based on changes like rupture or capsular contracture, not a strict timeline. Regular monitoring through imaging is recommended."},
        {"question": "Do breast implants affect mammograms?", "answer": "Yes. Implants can obscure breast tissue on mammograms, requiring specialized Eklund displacement views and additional images. The risk of implant rupture during a mammogram is very low (less than 1%). Always inform your facility about implants beforehand."},
    ],

    "sources": [
        {"text": "Tebbetts JB, Adams WP. Five critical decisions in breast augmentation using five measurements in 5 minutes: the high five decision support process. Plast Reconstr Surg. 2005;116(7):2005-2016. PubMed", "url": "https://pubmed.ncbi.nlm.nih.gov/16327615/"},
        {"text": "ASPS. 2024 Plastic Surgery Statistics Report. American Society of Plastic Surgeons. ASPS", "url": "https://www.plasticsurgery.org/news/plastic-surgery-statistics"},
        {"text": "Pfeiffer M, et al. What is the standard volume to increase a cup size for breast augmentation surgery? Plast Reconstr Surg. 2017;139(5):1084e-1089e. PubMed", "url": "https://pubmed.ncbi.nlm.nih.gov/28445352/"},
    ],

    "methodology": "<p>This calculator estimates breast implant volume using a cup-size-difference model where each cup size increase corresponds to approximately <code>150-200cc</code> of implant volume. Profile recommendations derive from the Tebbetts-Adams \"High Five\" decision process: breast base width minus 1 cm defines the maximum implant diameter. Cost estimates incorporate implant material pricing, surgeon fees ($4,000-$8,000), and regional location multipliers based on ASPS market data.</p>\n            <p style=\"margin-top:1rem;\">Cup size is not standardized across manufacturers, so cc-to-cup conversions are approximate. Actual implant selection requires in-person tissue assessment and trial sizers with a board-certified plastic surgeon.</p>",

    "llm_capsule": "Breast implant sizing is measured in cubic centimeters (cc), with each cup size increase requiring approximately 150-200cc of volume. The Tebbetts-Adams \"High Five\" method uses five body measurements to determine optimal implant dimensions. Total breast augmentation cost in the U.S. ranges from $5,600 to $12,000, including surgeon fees, anesthesia, and implants. Silicone gel implants are most popular, followed by saline and gummy bear (highly cohesive gel). Implants typically last 10-20 years and are not considered lifetime devices.",

    "ask_pills": ["Silicone vs saline", "Recovery timeline", "Will they look natural?", "Implant profiles explained"],
    "ask_placeholder": "e.g. Will implants look natural on my frame?",
}

register("breast_implant", BREAST_IMPLANT)

BREAST_IMPLANT_COST = {
    "route": "/breast-implant-cost-calculator",
    "override_template": None,

    "seo": {
        "page_title": "Breast Implant Cost Calculator — Price by Region",
        "meta_description": "Estimate your total breast augmentation cost based on implant type, region, and anesthesia. Includes surgeon fees, facility costs, and material.",
        "og_title": "Breast Implant Cost Estimator",
        "og_description": "See a breakdown of breast implant costs by location, implant type, and surgeon experience.",
        "schema_type": "WebPage",
        "schema_name": "Breast Implant Cost Calculator",
        "schema_description": "Estimate total breast augmentation cost by implant type, region, and surgeon experience.",
        "schema_about": "Breast Implant Cost Calculator",
        "date_published": "2025-06-01",
        "date_modified": "2026-03-23",
        "robots": "index, follow",
    },

    "accent": "#f472b6",
    "accent_rgb": "244,114,182",

    "hero": {
        "headline": "How much will <span>implants</span> cost?",
        "subtitle": "Personalized estimate by country, implant type, and surgeon",
    },

    "breadcrumb_category": {"name": "Cosmetic Procedures", "url": "/cosmetic-procedure-calculators"},

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

    "js_file": "js/calculators/breast_implant_cost.js",

    "faq": [
        {"question": "How much do breast implants cost?", "answer": "In the US, total cost typically ranges from $5,000 to $10,000. This includes surgeon fee ($2,500-$4,500), anesthesia ($600-$1,000), facility ($800-$1,200), and implants ($1,000-$3,000)."},
        {"question": "Does insurance cover breast implants?", "answer": "Cosmetic augmentation is almost never covered. Reconstructive surgery post-mastectomy is covered under the Women's Health and Cancer Rights Act of 1998."},
        {"question": "Are silicone implants more expensive than saline?", "answer": "Yes. Saline implants cost $1,000-$1,500 per pair. Standard silicone: $2,000-$2,500. Gummy bear: $2,500-$3,000. Structured: $2,500-$3,500."},
        {"question": "What factors affect breast implant costs?", "answer": "Geographic location, surgeon experience, implant type and brand, procedure complexity, anesthesia type, and facility type all affect the total price."},
        {"question": "Is medical tourism for breast implants safe?", "answer": "It can offer 40-70% savings but carries risks: difficulty verifying credentials, language barriers, limited follow-up, and complications requiring local treatment after return."},
    ],

    "sources": [
        {"text": "ASPS. 2024 Plastic Surgery Statistics Report. Link", "url": "https://www.plasticsurgery.org/news/plastic-surgery-statistics"},
        {"text": "U.S. FDA. Breast Implants -- Certain Labeling Recommendations. Link", "url": "https://www.fda.gov/medical-devices/breast-implants/breast-implant-certain-labeling-recommendations"},
        {"text": "Alderman AK, et al. Understanding breast augmentation effect on quality of life. Plast Reconstr Surg. 2014;133(4):787-795. Link", "url": "https://pubmed.ncbi.nlm.nih.gov/24675183/"},
    ],

    "methodology": "<p>This calculator estimates total breast augmentation cost by combining a country-specific base cost with multiplicative factors for city tier, surgeon experience level, and implant type. Base costs and multiplier ranges are derived from the ASPS 2024 statistics and aggregated international pricing data. A +/-7% range reflects real-world price variability. The estimate includes surgeon fees, implant costs, and standard facility fees but excludes anesthesia, medical tests, and post-surgical garments.</p>",

    "llm_capsule": "Breast augmentation in the United States costs between $5,000 and $10,000 on average. The surgeon fee averages $4,294 according to ASPS 2024 statistics. Silicone implants cost $1,000-$1,500 more than saline. Costs are highest in major metros (NYC, LA, SF) and lowest in smaller cities. International options like Thailand and Mexico can be 40-60% less expensive.",

    "ask_pills": ["Saline vs silicone", "Insurance coverage", "Payment plans", "Recovery cost"],
    "ask_placeholder": "e.g. Are silicone implants worth the extra cost?",
}

register("breast_implant_cost", BREAST_IMPLANT_COST)

BREAST_IMPLANT_SIZE = {
    "route": "/breast-implant-size-calculator",
    "override_template": None,

    "seo": {
        "page_title": "Breast Implant Size Calculator — Volume & Profile Guide",
        "meta_description": "Estimate ideal implant volume based on your band size, goal cup size, and breast width. Includes implant profile and cost estimate.",
        "og_title": "Breast Implant Volume & Profile Calculator",
        "og_description": "Find your optimal breast implant size and profile.",
        "schema_type": "WebPage",
        "schema_name": "Breast Implant Size Calculator",
        "schema_description": "Estimate ideal implant volume, profile, and cost based on body measurements and goals.",
        "schema_about": "Breast Implant Size Calculator",
        "date_published": "2025-06-01",
        "date_modified": "2026-03-23",
        "robots": "index, follow",
    },

    "accent": "#ec4899",
    "accent_rgb": "236,72,153",

    "hero": {
        "headline": "What <span>size</span> implant fits you?",
        "subtitle": "Based on your measurements and aesthetic goals",
    },

    "breadcrumb_category": {"name": "Cosmetic Procedures", "url": "/cosmetic-procedure-calculators"},

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

    "js_file": "js/calculators/breast_implant_size.js",

    "faq": [
        {"question": "What factors determine breast implant size?", "answer": "Breast base width, chest wall dimensions, existing breast tissue, skin elasticity, body frame type, and aesthetic goals all influence appropriate sizing."},
        {"question": "How is implant size measured?", "answer": "Implants are measured in cubic centimeters (cc). Approximately 130-200 cc equals one cup size increase, depending on chest width."},
        {"question": "What is the average breast implant size?", "answer": "In the US, the most common sizes range from 300-400cc. Small-framed women typically choose 250-300cc, medium-framed 300-400cc, large-framed 400-500cc."},
        {"question": "How do implant profiles differ?", "answer": "Low profile: widest base, minimal projection. Moderate: balanced. High: narrower base, more forward projection. Ultra-high: narrowest, maximum projection."},
        {"question": "Will bigger implants look more natural?", "answer": "Not necessarily. Implants that match your natural breast dimensions and are proportionate to your frame give the most natural results."},
    ],

    "sources": [
        {"text": "Pfeiffer M, et al. What is the standard volume to increase a cup size? Plast Reconstr Surg. 2017;139(5):1084e-1089e. Link", "url": "https://pubmed.ncbi.nlm.nih.gov/28445352/"},
        {"text": "Tebbetts JB, Adams WP. Five critical decisions in breast augmentation. Plast Reconstr Surg. 2005;116(7):2005-2016. Link", "url": "https://pubmed.ncbi.nlm.nih.gov/16327615/"},
        {"text": "U.S. FDA. Risks and Complications of Breast Implants. Link", "url": "https://www.fda.gov/medical-devices/breast-implants/risks-and-complications-breast-implants"},
    ],

    "methodology": "<p>This calculator estimates implant volume using approximately 175cc per cup size increase (range 140-210cc), adjusted for body frame. Current cup is derived from bust-to-underbust difference (2.5cm increments). Frame size modifies the recommended range by +/-15%. Profile recommendations follow the Tebbetts-Adams dimensional planning system.</p>",

    "llm_capsule": "Breast implant size is measured in cubic centimeters (cc), not cup sizes. About 150-200cc equals one cup size increase. The most popular range in the US is 300-400cc. Implant profile determines forward projection relative to base width. Small frames benefit from higher profiles to achieve desired projection within anatomical constraints.",

    "ask_pills": ["CC to cup size", "Natural look", "Profile differences", "Recovery time"],
    "ask_placeholder": "e.g. What profile looks most natural?",
}

register("breast_implant_size", BREAST_IMPLANT_SIZE)

LIPOSUCTION = {
    "route": "/liposuction-weight-loss-calculator",
    "override_template": "liposuction_v25.html",

    "seo": {
        "page_title": "Liposuction Calculator — Weight Loss & Cost Estimate",
        "meta_description": "Calculate how much fat and weight you might lose with liposuction, and what it may cost based on body areas and region.",
        "og_title": "Liposuction Fat Removal & Cost Calculator",
        "og_description": "Estimate fat removed, new body weight, and liposuction cost.",
        "schema_type": "WebPage",
        "schema_name": "Liposuction Weight Loss Calculator",
        "schema_description": "Estimate fat removal, weight change, and procedure cost for liposuction.",
        "schema_about": "Liposuction Weight Loss Calculator",
        "date_published": "2025-06-01",
        "date_modified": "2026-03-20",
        "robots": "index, follow",
    },

    "accent": "#14b8a6",
    "accent_rgb": "20,184,166",

    "hero": {
        "headline": "How much fat can <span>lipo</span> remove?",
        "subtitle": "Enter your details for a personalized estimate",
    },

    "breadcrumb_category": {"name": "Cosmetic Procedures", "url": "/cosmetic-procedure-calculators"},

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
        {"question": "How much fat can liposuction remove?", "answer": "Most outpatient procedures safely remove 2-5 liters (4.4-11 lbs) of fat. The maximum safe amount is 5 liters per the ASPS guidelines."},
        {"question": "Will my weight drop after liposuction?", "answer": "Modestly -- typically 5-10 lbs. Liposuction is body contouring, not a weight loss solution. Expect bigger changes in measurements and clothing fit."},
        {"question": "Is the fat removal permanent?", "answer": "Fat cells removed do not regenerate. However, remaining cells can still expand with weight gain, potentially creating new proportional changes."},
        {"question": "What BMI is recommended for liposuction?", "answer": "Most surgeons recommend BMI under 35. Ideal candidates are within 30% of their ideal body weight."},
        {"question": "How is cost calculated?", "answer": "By region, number of areas, gender (males pay slightly more), and facility type. Multi-area procedures may get discounts."},
    ],

    "sources": [],
    "methodology": "",
    "llm_capsule": "",
    "ask_pills": [],
    "ask_placeholder": "",
}

register("liposuction", LIPOSUCTION)
