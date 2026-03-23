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
