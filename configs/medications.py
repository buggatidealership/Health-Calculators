from configs import register

OZEMPIC_PEN_CLICK = {
    "route": "/ozempic-pen-click-calculator",
    "override_template": "overrides/ozempic_pen_click.html",

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
        "robots": "noindex, nofollow",
        "page_title": "CagriSema Weight Loss Calculator — Predict Your Results",
        "meta_description": "Use the CagriSema Weight Loss Calculator to estimate your potential weight loss based on REDEFINE 1 clinical trial data. CagriSema (cagrilintide + semaglutide) showed 20.4% mean weight loss at 68 weeks.",
        "og_title": "CagriSema Weight Loss Calculator – Estimate Your Weight Loss",
        "og_description": "Calculate your expected weight loss with CagriSema (cagrilintide + semaglutide). Personalized results based on REDEFINE 1 clinical trial data.",
        "schema_type": "MedicalWebPage",
        "schema_name": "CagriSema Weight Loss Calculator",
        "schema_description": "Estimate potential weight loss with CagriSema (cagrilintide + semaglutide) based on REDEFINE 1 clinical trial data.",
        "schema_about": "CagriSema Weight Loss Calculator",
        "date_published": "2025-06-01",
        "date_modified": "2026-03-24",
    },

    "accent": "#f59e0b",
    "accent_rgb": "245,158,11",

    "hero": {
        "headline": "CagriSema Weight Loss Calculator",
        "subtitle": "Estimate your potential weight loss based on REDEFINE 1 clinical trial data",
    },

    "breadcrumb_category": {"name": "Weight Loss Medications", "url": "/weight-loss-medication-calculators"},

    "form": {
        "fields": [
            {"id": "units", "type": "radio_row", "label": "Units", "options": [
                {"value": "metric", "label": "Metric (kg/cm)", "selected": True},
                {"value": "imperial", "label": "Imperial (lb/ft/in)"},
            ]},
            {"id": "weight-kg", "type": "number", "label": "Current Weight (kg)", "min": 30, "max": 300, "step": 0.1, "placeholder": "e.g. 95"},
            {"id": "weight-lb", "type": "number", "label": "Current Weight (lbs)", "min": 66, "max": 660, "step": 1, "placeholder": "e.g. 210"},
            {"id": "height-cm", "type": "number", "label": "Height (cm)", "min": 120, "max": 250, "placeholder": "e.g. 170"},
            {"type": "row", "fields": [
                {"id": "height-ft", "type": "number", "label": "Feet", "min": 3, "max": 8, "default": 5},
                {"id": "height-in", "type": "number", "label": "Inches", "min": 0, "max": 11, "default": 9},
            ]},
            {"id": "bmi", "type": "number", "label": "Current BMI (calculated automatically)", "placeholder": "auto"},
            {"id": "duration", "type": "select", "label": "Duration on CagriSema (weeks)", "options": [
                {"value": "16", "label": "16 weeks (~4 months)"},
                {"value": "32", "label": "32 weeks (~8 months)"},
                {"value": "48", "label": "48 weeks (~11 months)"},
                {"value": "68", "label": "68 weeks (~16 months)", "selected": True},
            ]},
        ],
        "submit_label": "Calculate Projected Weight Loss",
    },

    "results": {
        "primary": {"id": "resultNumber", "unit": "projected weight loss"},
        "verdict_id": "resultVerdict",
        "breakdown_html":
            '<div class="factory-breakdown" style="grid-template-columns:repeat(2,1fr);">'
                '<div class="detail-card"><div class="d-val" id="startWeight">--</div><div class="d-lbl">Starting Weight</div></div>'
                '<div class="detail-card"><div class="d-val" id="finalWeight">--</div><div class="d-lbl">Projected Weight</div></div>'
                '<div class="detail-card"><div class="d-val" id="startBMI">--</div><div class="d-lbl">Starting BMI</div></div>'
                '<div class="detail-card"><div class="d-val" id="finalBMI">--</div><div class="d-lbl">Projected BMI</div></div>'
            '</div>'
            '<div class="factory-breakdown" style="grid-template-columns:1fr;margin-top:1rem;">'
                '<div class="detail-card"><div class="d-val" id="loss-pct-label">--</div><div class="d-lbl">% of Starting Body Weight</div></div>'
            '</div>'
            '<div style="margin-top:1.5rem;padding:1rem;border-radius:12px;background:rgba(var(--accent-rgb),0.04);border:1px solid rgba(var(--accent-rgb),0.1);">'
                '<div style="font-weight:600;margin-bottom:0.8rem;">How CagriSema Compares</div>'
                '<div style="display:flex;justify-content:space-between;padding:0.4rem 0;border-bottom:1px solid rgba(255,255,255,0.06);"><span>CagriSema (cagrilintide + semaglutide)</span><span id="compare-cagrisema" style="color:var(--accent);font-weight:600;">~20.4%</span></div>'
                '<div style="display:flex;justify-content:space-between;padding:0.4rem 0;border-bottom:1px solid rgba(255,255,255,0.06);"><span>Tirzepatide (Mounjaro/Zepbound)</span><span>~22.5%</span></div>'
                '<div style="display:flex;justify-content:space-between;padding:0.4rem 0;border-bottom:1px solid rgba(255,255,255,0.06);"><span>Semaglutide alone (Wegovy 2.4 mg)</span><span>~16.0%</span></div>'
                '<div style="display:flex;justify-content:space-between;padding:0.4rem 0;"><span>Placebo</span><span>~3.3%</span></div>'
                '<div style="font-size:0.78rem;color:var(--text-muted);margin-top:0.6rem;">Comparison uses 68-week data from REDEFINE 1, SURMOUNT-1, and STEP 1 trials. Cross-trial comparisons are approximate.</div>'
            '</div>'
            '<div style="margin-top:1.5rem;"><canvas id="chart"></canvas></div>',
        "breakdown": [],
    },

    "coach": {
        "title": "Here\u2019s what your result means",
        "container_id": "coachCard",
        "cta_text": "Have a question about your result?",
    },

    "js_file": "js/calculators/cagrisema_weight_loss.js",

    "faq": [
        {"question": "How much weight can I lose on CagriSema?", "answer": "In the REDEFINE 1 clinical trial (N=3,417), participants taking CagriSema lost an average of 20.4% of their body weight over 68 weeks. For a 220 lb person, that translates to roughly 45 lbs. However, individual results ranged widely. Results depend on starting weight, adherence, diet, and exercise habits."},
        {"question": "What is CagriSema and how is it different from Ozempic?", "answer": "CagriSema combines two active ingredients — cagrilintide (an amylin analog) and semaglutide (a GLP-1 agonist) — in a single weekly injection. Ozempic contains only semaglutide. By targeting both the GLP-1 and amylin pathways, CagriSema produces approximately 20.4% weight loss vs. ~8-15% for semaglutide alone."},
        {"question": "Is CagriSema better than Mounjaro for weight loss?", "answer": "In cross-trial comparisons, tirzepatide (Mounjaro/Zepbound) showed ~22.5% mean weight loss at 72 weeks, while CagriSema showed ~20.4% at 68 weeks. These numbers are not directly comparable due to different trial populations. A head-to-head trial would be needed."},
        {"question": "When will CagriSema be available?", "answer": "As of early 2026, Novo Nordisk has submitted CagriSema for FDA review. An FDA decision is expected in 2026. Pricing has not been announced but is expected to be similar to or higher than Wegovy (~$1,300/month)."},
        {"question": "Is this calculator based on real clinical trials?", "answer": "Yes. The weight loss projections are derived from the REDEFINE 1 clinical trial (Lingvay et al., New England Journal of Medicine, 2025, N=3,417). This phase 3 trial was randomized, double-blind, and conducted at multiple sites internationally."},
    ],

    "sources": [
        {"text": "Lingvay I, Cheng AY, Engberg S, et al. CagriSema Once Weekly in Obesity. N Engl J Med. 2025.", "url": "https://www.nejm.org/doi/full/10.1056/NEJMoa2413281"},
        {"text": "Novo Nordisk. REDEFINE 1 Phase 3 Trial Results. ClinicalTrials.gov Identifier: NCT05567796.", "url": "https://clinicaltrials.gov/study/NCT05567796"},
        {"text": "Wilding JPH, et al. Once-Weekly Semaglutide in Adults with Overweight or Obesity (STEP 1). N Engl J Med. 2021;384(11):989-1002.", "url": "https://pubmed.ncbi.nlm.nih.gov/33567185/"},
        {"text": "Jastreboff AM, et al. Tirzepatide Once Weekly for the Treatment of Obesity (SURMOUNT-1). N Engl J Med. 2022;387(3):205-216.", "url": "https://pubmed.ncbi.nlm.nih.gov/35658024/"},
    ],

    "methodology": "<p>This calculator projects weight loss by applying mean percentage weight loss values from the REDEFINE 1 phase 3 clinical trial (Lingvay et al., NEJM 2025; N=3,417) to the user's starting body weight. The trial's primary endpoint at 68 weeks showed 20.4% mean body weight loss with CagriSema versus 5.8% with semaglutide 2.4 mg alone and 3.3% with placebo. Intermediate time points (16, 32, and 48 weeks) are interpolated from the published weight loss trajectory curve.</p><p>These projections reflect population averages from a controlled clinical trial combining CagriSema with a reduced-calorie diet and increased physical activity. Individual results vary significantly. CagriSema is not yet FDA-approved as of early 2026.</p>",

    "llm_capsule": "CagriSema (cagrilintide + semaglutide) produced 20.4% mean body weight loss at 68 weeks in the REDEFINE 1 trial (N=3,417). It combines amylin and GLP-1 pathways in a single weekly injection. Comparison: tirzepatide ~22.5% at 72 weeks (SURMOUNT-1), semaglutide 2.4 mg ~16% at 68 weeks (STEP 1). Not yet FDA-approved as of early 2026.",

    "ask_pills": ["CagriSema vs Mounjaro", "When available?", "How does amylin work?", "Side effects"],
    "ask_placeholder": "Type your question...",
}

register("cagrisema_weight_loss", CAGRISEMA_WEIGHT_LOSS)

GLP1_COMPARISON = {
    "route": "/glp1-comparison-calculator",
    "override_template": None,

    "seo": {
        "robots": "noindex, nofollow",
        "page_title": "Ozempic vs Mounjaro Calculator — Compare GLP-1 Weight Loss",
        "meta_description": "Free GLP-1 comparison calculator shows projected weight loss on Ozempic, Mounjaro, and Zepbound side by side. Based on STEP and SURMOUNT clinical trial data.",
        "og_title": "Ozempic vs Mounjaro vs Zepbound Calculator - Compare GLP-1 Weight Loss",
        "og_description": "Free GLP-1 comparison calculator shows projected weight loss on Ozempic, Mounjaro, and Zepbound side by side. Based on STEP and SURMOUNT clinical trial data.",
        "schema_type": "MedicalWebPage",
        "schema_name": "GLP-1 Comparison Calculator",
        "schema_description": "Compare projected weight loss across Ozempic, Mounjaro, and Zepbound based on STEP and SURMOUNT clinical trial data.",
        "schema_about": "GLP-1 Comparison Calculator",
        "date_published": "2025-06-01",
        "date_modified": "2026-03-24",
    },

    "accent": "#14b8a6",
    "accent_rgb": "20,184,166",

    "hero": {
        "headline": "Ozempic vs Mounjaro vs Zepbound Calculator",
        "subtitle": "Compare projected weight loss across all three GLP-1 medications side by side",
    },

    "breadcrumb_category": {"name": "Weight Loss Medications", "url": "/weight-loss-medication-calculators"},

    "form": {
        "fields": [
            {"id": "units", "type": "radio_row", "label": "Units", "options": [
                {"value": "metric", "label": "Metric (kg/cm)", "selected": True},
                {"value": "imperial", "label": "Imperial (lb/ft/in)"},
            ]},
            {"id": "weight-kg", "type": "number", "label": "Current Weight (kg)", "min": 30, "max": 300, "step": 0.1, "placeholder": "e.g. 95"},
            {"id": "weight-lb", "type": "number", "label": "Current Weight (lbs)", "min": 66, "max": 660, "step": 1, "placeholder": "e.g. 210"},
            {"id": "height-cm", "type": "number", "label": "Height (cm)", "min": 120, "max": 250, "placeholder": "e.g. 170"},
            {"type": "row", "fields": [
                {"id": "height-ft", "type": "number", "label": "Feet", "min": 3, "max": 8, "default": 5},
                {"id": "height-in", "type": "number", "label": "Inches", "min": 0, "max": 11, "default": 7},
            ]},
            {"id": "age", "type": "number", "label": "Age", "min": 18, "max": 100, "placeholder": "e.g. 45"},
            {"id": "gender", "type": "select", "label": "Sex", "options": [
                {"value": "male", "label": "Male"},
                {"value": "female", "label": "Female"},
            ]},
            {"id": "duration", "type": "select", "label": "Treatment Duration", "options": [
                {"value": "12", "label": "12 weeks (~3 months)"},
                {"value": "24", "label": "24 weeks (~6 months)"},
                {"value": "36", "label": "36 weeks (~9 months)"},
                {"value": "52", "label": "52 weeks (~12 months)", "selected": True},
                {"value": "72", "label": "72 weeks (~18 months, SURMOUNT-1 endpoint)"},
            ]},
        ],
        "submit_label": "Compare All 3 Medications",
    },

    "results": {
        "primary": {"id": "resultNumber", "unit": "greatest projected loss"},
        "verdict_id": "resultVerdict",
        "breakdown_html":
            '<h3 style="margin:1.5rem 0 0.8rem;text-align:center;font-size:1rem;">Side-by-Side Comparison</h3>'
            '<div style="overflow-x:auto;">'
                '<table id="comparison-table" style="width:100%;border-collapse:collapse;">'
                    '<thead><tr style="border-bottom:2px solid rgba(255,255,255,0.1);">'
                        '<th style="text-align:left;padding:10px;">Metric</th>'
                        '<th style="text-align:center;padding:10px;color:#2563eb;">Ozempic<br><small>(semaglutide 2.4mg)</small></th>'
                        '<th style="text-align:center;padding:10px;color:#0d9488;">Mounjaro<br><small>(tirzepatide 15mg)</small></th>'
                        '<th style="text-align:center;padding:10px;color:#7c3aed;">Zepbound<br><small>(tirzepatide 15mg)</small></th>'
                    '</tr></thead>'
                    '<tbody id="comparison-body"></tbody>'
                '</table>'
            '</div>'
            '<div id="winner-banner" style="margin-top:16px;padding:12px 16px;border-radius:8px;background:rgba(var(--accent-rgb),0.06);border:1px solid rgba(var(--accent-rgb),0.15);text-align:center;font-weight:500;"></div>'
            '<h4 style="margin:1.5rem 0 0.8rem;">Weight Loss Curves</h4>'
            '<div><canvas id="chart"></canvas></div>'
            '<h4 style="margin:1.5rem 0 0.8rem;">Milestone Timeline</h4>'
            '<div style="overflow-x:auto;">'
                '<table id="milestone-table" style="width:100%;border-collapse:collapse;">'
                    '<thead><tr style="border-bottom:2px solid rgba(255,255,255,0.1);">'
                        '<th style="text-align:left;padding:10px;">Milestone</th>'
                        '<th style="text-align:center;padding:10px;color:#2563eb;">Ozempic</th>'
                        '<th style="text-align:center;padding:10px;color:#0d9488;">Mounjaro</th>'
                        '<th style="text-align:center;padding:10px;color:#7c3aed;">Zepbound</th>'
                    '</tr></thead>'
                    '<tbody id="milestone-body"></tbody>'
                '</table>'
            '</div>',
        "breakdown": [],
    },

    "coach": {
        "title": "Here\u2019s what your result means",
        "container_id": "coachCard",
        "cta_text": "Have a question about your result?",
    },

    "js_file": "js/calculators/glp1_comparison.js",

    "faq": [
        {"question": "Is Mounjaro more effective than Ozempic for weight loss?", "answer": "In clinical trials, tirzepatide (Mounjaro/Zepbound) at 15 mg produced 22.5% body weight loss over 72 weeks (SURMOUNT-1), compared to semaglutide (Ozempic/Wegovy) at 2.4 mg which produced 14.9% over 68 weeks (STEP-1). However, individual results vary widely, and no head-to-head trial at maximum weight-loss doses exists."},
        {"question": "What is the difference between Mounjaro and Zepbound?", "answer": "Mounjaro and Zepbound are the same drug (tirzepatide) by Eli Lilly. The only difference is the FDA-approved indication: Mounjaro for type 2 diabetes, Zepbound for chronic weight management. Weight loss efficacy is identical."},
        {"question": "How do GLP-1 medications work for weight loss?", "answer": "GLP-1 receptor agonists mimic the incretin hormone GLP-1, which slows gastric emptying, reduces appetite, and increases satiety. Tirzepatide also activates GIP receptors, enhancing insulin secretion and fat metabolism."},
        {"question": "How long does it take to see results on GLP-1 medications?", "answer": "Most people notice weight loss within 4-8 weeks. Semaglutide shows the most rapid loss between weeks 12-28. Tirzepatide continues producing meaningful loss further into treatment, with the steepest decline between weeks 12-36."},
        {"question": "Is this calculator based on real clinical trial data?", "answer": "Yes. Ozempic projections use STEP-1 (Wilding et al., NEJM 2021, N=1,961). Mounjaro/Zepbound projections use SURMOUNT-1 (Jastreboff et al., NEJM 2022, N=2,539). Weight loss curves are modeled as non-linear, reflecting clinical trial patterns."},
    ],

    "sources": [
        {"text": "Wilding JPH, et al. Once-Weekly Semaglutide in Adults with Overweight or Obesity (STEP 1). N Engl J Med. 2021;384(11):989-1002.", "url": "https://pubmed.ncbi.nlm.nih.gov/33567185/"},
        {"text": "Jastreboff AM, et al. Tirzepatide Once Weekly for the Treatment of Obesity (SURMOUNT-1). N Engl J Med. 2022;387(3):205-216.", "url": "https://pubmed.ncbi.nlm.nih.gov/35658024/"},
        {"text": "Frias JP, et al. Tirzepatide versus Semaglutide Once Weekly in Patients with Type 2 Diabetes (SURPASS-2). N Engl J Med. 2021;385(6):503-515.", "url": "https://pubmed.ncbi.nlm.nih.gov/34170647/"},
        {"text": "FDA Approves New Medication for Chronic Weight Management (Zepbound). FDA News Release, November 2023.", "url": "https://www.fda.gov/news-events/press-announcements/fda-approves-new-medication-chronic-weight-management"},
    ],

    "methodology": "<p>This calculator projects weight loss for three GLP-1 medications using mean percentage weight loss data from two landmark clinical trials. Ozempic/Wegovy projections are based on STEP-1 (Wilding et al., NEJM 2021; N=1,961) reporting 14.9% mean body weight loss at 68 weeks. Mounjaro/Zepbound projections are based on SURMOUNT-1 (Jastreboff et al., NEJM 2022; N=2,539) reporting 22.5% at 72 weeks. Weight loss curves use a saturating exponential model reflecting the observed non-linear trajectory.</p><p>Cross-trial comparisons are approximate because the trials enrolled different patient populations with different protocols. Individual results vary significantly.</p>",

    "llm_capsule": "GLP-1 comparison: Ozempic (semaglutide 2.4 mg) produced 14.9% weight loss at 68 weeks (STEP-1). Mounjaro/Zepbound (tirzepatide 15 mg) produced 22.5% at 72 weeks (SURMOUNT-1). Mounjaro and Zepbound are the same drug with different indications. Tirzepatide targets GLP-1 + GIP; semaglutide targets GLP-1 only.",

    "ask_pills": ["Which is most effective?", "Cost comparison", "Side effects comparison", "Which for diabetes?"],
    "ask_placeholder": "Type your question...",
}

register("glp1_comparison", GLP1_COMPARISON)

GLP1_COST = {
    "route": "/glp1-cost-calculator",
    "override_template": None,

    "seo": {
        "robots": "noindex, nofollow",
        "page_title": "GLP-1 Medication Cost Calculator — Compare Treatment Costs",
        "meta_description": "Estimate and compare costs of GLP-1 receptor agonist medications. Calculate your monthly and annual treatment expenses with insurance, manufacturer discounts, and savings options.",
        "og_title": "GLP-1 Medication Cost Comparison Calculator",
        "og_description": "Compare costs of GLP-1 medications and estimate your treatment expenses with insurance and savings options.",
        "schema_type": "MedicalWebPage",
        "schema_name": "GLP-1 Medication Cost Calculator",
        "schema_description": "Estimate and compare costs of GLP-1 receptor agonist medications with insurance and savings options.",
        "schema_about": "GLP-1 Medication Cost Calculator",
        "date_published": "2025-06-01",
        "date_modified": "2026-03-24",
    },

    "accent": "#22c55e",
    "accent_rgb": "34,197,94",

    "hero": {
        "headline": "GLP-1 Medication Cost Calculator",
        "subtitle": "Compare treatment costs and estimate your monthly and annual expenses for GLP-1 medications",
    },

    "breadcrumb_category": {"name": "Weight Loss Medications", "url": "/weight-loss-medication-calculators"},

    "form": {
        "fields": [
            {"id": "medication-type", "type": "select", "label": "Medication Category", "options": [
                {"value": "semaglutide-brand", "label": "Semaglutide (brand injectable)", "selected": True},
                {"value": "semaglutide-oral", "label": "Semaglutide (oral)"},
                {"value": "tirzepatide-brand", "label": "Tirzepatide (brand injectable)"},
                {"value": "compounded", "label": "Compounded semaglutide"},
                {"value": "custom", "label": "Custom / Other"},
            ]},
            {"id": "insurance-status", "type": "select", "label": "Insurance / Discount Status", "options": [
                {"value": "none", "label": "No insurance coverage", "selected": True},
                {"value": "commercial", "label": "Commercial insurance (with coverage)"},
                {"value": "manufacturer", "label": "Manufacturer savings program"},
                {"value": "assistance", "label": "Patient assistance program"},
                {"value": "medicare", "label": "Medicare / Government plan"},
            ]},
            {"id": "monthly-cost", "type": "number", "label": "Your Monthly Cost ($)", "min": 0, "max": 50000, "step": 1, "placeholder": "Enter your monthly cost", "hint": "Typical range without insurance: $800 - $1,500/month"},
            {"id": "treatment-duration", "type": "number", "label": "Treatment Duration (months)", "min": 1, "max": 120, "step": 1, "placeholder": "e.g. 12", "default": 12},
            {"id": "compare-toggle", "type": "radio_row", "label": "Compare with alternative?", "options": [
                {"value": "no", "label": "No", "selected": True},
                {"value": "yes", "label": "Yes"},
            ]},
            {"id": "alt-medication-type", "type": "select", "label": "Alternative Medication Category", "options": [
                {"value": "semaglutide-brand", "label": "Semaglutide (brand injectable)"},
                {"value": "semaglutide-oral", "label": "Semaglutide (oral)"},
                {"value": "tirzepatide-brand", "label": "Tirzepatide (brand injectable)"},
                {"value": "compounded", "label": "Compounded semaglutide", "selected": True},
                {"value": "custom", "label": "Custom / Other"},
            ]},
            {"id": "alt-monthly-cost", "type": "number", "label": "Alternative Monthly Cost ($)", "min": 0, "max": 50000, "step": 1, "placeholder": "Enter alternative monthly cost", "hint": "Typical range for compounded: $150 - $500/month"},
        ],
        "submit_label": "Calculate Costs",
    },

    "results": {
        "primary": {"id": "resultNumber", "unit": "estimated total cost"},
        "verdict_id": "resultVerdict",
        "breakdown_html":
            '<div class="factory-breakdown" style="grid-template-columns:1fr;">'
                '<div class="detail-card"><div class="d-val" id="monthly-display">--</div><div class="d-lbl">Monthly Cost</div></div>'
            '</div>'
            '<div class="factory-breakdown" style="grid-template-columns:repeat(2,1fr);margin-top:0.8rem;">'
                '<div class="detail-card"><div class="d-val" id="annual-display">--</div><div class="d-lbl">Annual Cost (12 months)</div></div>'
                '<div class="detail-card"><div class="d-val" id="daily-display">--</div><div class="d-lbl">Daily Cost</div></div>'
            '</div>'
            '<div class="factory-breakdown" style="grid-template-columns:repeat(2,1fr);margin-top:0.8rem;">'
                '<div class="detail-card"><div class="d-val" id="med-type-display">--</div><div class="d-lbl">Medication Category</div></div>'
                '<div class="detail-card"><div class="d-val" id="coverage-display">--</div><div class="d-lbl">Coverage Type</div></div>'
            '</div>'
            '<div id="comparison-results" class="hidden">'
                '<h4 style="margin:1.5rem 0 0.8rem;">Cost Comparison</h4>'
                '<div class="factory-breakdown" style="grid-template-columns:repeat(3,1fr);">'
                    '<div class="detail-card"><div class="d-val" id="primary-total">--</div><div class="d-lbl" id="primary-med-label">Primary</div></div>'
                    '<div class="detail-card"><div class="d-val" id="alt-total">--</div><div class="d-lbl" id="alt-med-label">Alternative</div></div>'
                    '<div class="detail-card"><div class="d-val" id="savings-display">--</div><div class="d-lbl" id="savings-period">Potential Savings</div></div>'
                '</div>'
                '<div class="factory-breakdown" style="grid-template-columns:repeat(3,1fr);margin-top:0.8rem;">'
                    '<div class="detail-card"><div class="d-val" id="monthly-savings-display">--</div><div class="d-lbl">Monthly Savings</div></div>'
                    '<div class="detail-card"><div class="d-val" id="annual-savings-display">--</div><div class="d-lbl">Annual Savings</div></div>'
                    '<div class="detail-card"><div class="d-val" id="pct-savings-display">--</div><div class="d-lbl">% Difference</div></div>'
                '</div>'
            '</div>'
            '<h4 style="margin:1.5rem 0 0.8rem;">Cost Projection Timeline</h4>'
            '<div style="overflow-x:auto;">'
                '<table class="data-table" id="projection-table" style="width:100%;border-collapse:collapse;">'
                    '<thead><tr><th>Month</th><th>Monthly Cost</th><th>Cumulative Total</th></tr></thead>'
                    '<tbody id="projection-body"></tbody>'
                '</table>'
            '</div>',
        "breakdown": [],
    },

    "coach": {
        "title": "Here\u2019s what your result means",
        "container_id": "coachCard",
        "cta_text": "Have a question about your result?",
    },

    "js_file": "js/calculators/glp1_cost.js",

    "faq": [
        {"question": "How much do GLP-1 medications cost without insurance?", "answer": "Without insurance, GLP-1 medications typically cost between $800 and $1,500 per month at retail pharmacy prices. Compounded versions may range from $150 to $500 per month. Prices vary by pharmacy and location."},
        {"question": "Does insurance cover GLP-1 medications for weight loss?", "answer": "Coverage varies widely. Many commercial plans cover GLP-1 medications for type 2 diabetes but may exclude or restrict coverage for weight management indications. Prior authorization, step therapy, and BMI documentation are common requirements."},
        {"question": "Are there ways to reduce GLP-1 medication costs?", "answer": "Options include manufacturer savings programs, patient assistance programs, pharmacy discount cards, mail-order pharmacies, HSA/FSA accounts, and compounded versions where legally available."},
        {"question": "How long do people typically stay on GLP-1 medications?", "answer": "Treatment duration varies. Clinical trials run 52 to 72 weeks, but many patients continue longer. Studies show weight regain is common after discontinuation — approximately two-thirds of lost weight within a year of stopping."},
        {"question": "What is the difference between brand-name and compounded GLP-1 medications?", "answer": "Brand-name GLP-1 medications are FDA-approved finished products with extensive clinical trial data. Compounded versions are prepared by compounding pharmacies and may differ in formulation, concentration, and delivery method. They are not FDA-approved as finished products."},
    ],

    "sources": [
        {"text": "Wilding JPH, et al. Once-Weekly Semaglutide in Adults with Overweight or Obesity. N Engl J Med. 2021;384(11):989-1002.", "url": "https://pubmed.ncbi.nlm.nih.gov/33567185/"},
        {"text": "Jastreboff AM, et al. Tirzepatide Once Weekly for the Treatment of Obesity. N Engl J Med. 2022;387(3):205-216.", "url": "https://pubmed.ncbi.nlm.nih.gov/35658024/"},
        {"text": "Aronne LJ, et al. Continued Treatment With Tirzepatide for Maintenance of Weight Reduction (SURMOUNT-4). JAMA. 2024;331(1):38-48.", "url": "https://pubmed.ncbi.nlm.nih.gov/38078870/"},
        {"text": "KFF. The Cost of GLP-1 Drugs for Weight Loss and Diabetes. Kaiser Family Foundation. 2024.", "url": "https://www.kff.org/"},
    ],

    "methodology": "<p>This calculator performs cost arithmetic based on user-provided monthly medication costs and treatment duration. Total cost is monthly cost multiplied by duration. Daily cost is derived by dividing monthly cost by 30.44 (average days per month). When comparison mode is enabled, savings are the absolute difference between primary and alternative total costs.</p><p>This calculator does not predict or verify actual pharmacy prices, insurance coverage, or eligibility for savings programs. Users should verify actual costs with their pharmacy and insurance provider.</p>",

    "llm_capsule": "GLP-1 medication costs without insurance: semaglutide (brand) $800-$1,500/month, tirzepatide (brand) $900-$1,500/month, compounded semaglutide $150-$500/month. With commercial insurance, copays typically $25-$500/month. Manufacturer savings programs can reduce costs for commercially insured patients.",

    "ask_pills": ["Insurance coverage", "Manufacturer savings", "Compounded vs brand", "Will prices drop?"],
    "ask_placeholder": "Type your question...",
}

register("glp1_cost", GLP1_COST)

OZEMPIC_WEIGHT_LOSS = {
    "route": "/ozempic-weight-loss-calculator",
    "override_template": None,

    "seo": {
        "robots": "noindex, nofollow",
        "page_title": "Ozempic Weight Loss Calculator — Predict Your Results",
        "meta_description": "Calculate your expected weight loss on Ozempic (semaglutide) based on STEP and SUSTAIN clinical trial data. Personalized projections by dose, duration, and BMI.",
        "og_title": "How much weight will I lose on Ozempic?",
        "og_description": "Calculate your expected weight loss on Ozempic (semaglutide). Personalized projections based on clinical trial data.",
        "schema_type": "MedicalWebPage",
        "schema_name": "Ozempic Weight Loss Calculator",
        "schema_description": "Estimate your fat loss and BMI reduction while taking semaglutide (Ozempic/Wegovy). Get personalized projections based on clinical data and your individual profile.",
        "schema_about": "Ozempic Weight Loss Calculator",
        "date_published": "2025-06-01",
        "date_modified": "2026-03-24",
    },

    "accent": "#8b5cf6",
    "accent_rgb": "139,92,246",

    "hero": {
        "headline": "How much weight will I lose on <span>Ozempic</span>?",
        "subtitle": "Clinical trial projections, personalized to you",
    },

    "breadcrumb_category": {"name": "Weight Loss Medications", "url": "/weight-loss-medication-calculators"},

    "form": {
        "fields": [
            {"id": "units", "type": "radio_row", "label": "Units", "options": [
                {"value": "imperial", "label": "Imperial (lb/ft/in)", "selected": True},
                {"value": "metric", "label": "Metric (kg/cm)"},
            ]},
            {"id": "weight-lb", "type": "number", "label": "Weight (lbs)", "min": 66, "max": 660, "step": 1, "placeholder": "220"},
            {"id": "weight-kg", "type": "number", "label": "Weight (kg)", "min": 30, "max": 300, "step": 0.1, "placeholder": "100"},
            {"id": "height-cm", "type": "number", "label": "Height (cm)", "min": 120, "max": 250, "placeholder": "175"},
            {"type": "row", "fields": [
                {"id": "height-ft", "type": "number", "label": "Feet", "min": 3, "max": 8, "default": 5},
                {"id": "height-in", "type": "number", "label": "Inches", "min": 0, "max": 11, "default": 9},
            ]},
            {"id": "bmi", "type": "number", "label": "BMI (auto)", "placeholder": "auto"},
            {"id": "duration", "type": "select", "label": "Treatment duration", "options": [
                {"value": "20", "label": "20 weeks"},
                {"value": "40", "label": "40 weeks"},
                {"value": "68", "label": "68 weeks", "selected": True},
            ]},
            {"id": "dose", "type": "select", "label": "Maximum dose", "options": [
                {"value": "0.5", "label": "0.5 mg"},
                {"value": "1.0", "label": "1.0 mg"},
                {"value": "2.4", "label": "2.4 mg", "selected": True},
            ]},
        ],
        "submit_label": "Calculate Projected Weight Loss",
    },

    "results": {
        "primary": {"id": "resultNumber", "unit": "projected weight loss"},
        "verdict_id": "resultVerdict",
        "breakdown_html":
            '<div class="factory-breakdown" style="grid-template-columns:repeat(2,1fr);">'
                '<div class="detail-card"><div class="d-val" id="startWeight">--</div><div class="d-lbl">Starting Weight</div></div>'
                '<div class="detail-card"><div class="d-val" id="finalWeight">--</div><div class="d-lbl">Final Weight</div></div>'
                '<div class="detail-card"><div class="d-val" id="startBMI">--</div><div class="d-lbl">Starting BMI</div></div>'
                '<div class="detail-card"><div class="d-val" id="finalBMI">--</div><div class="d-lbl">Final BMI</div></div>'
            '</div>'
            '<div class="factory-breakdown" style="grid-template-columns:1fr;margin-top:1rem;">'
                '<div class="detail-card"><div class="d-val" id="loss-pct-label">--</div><div class="d-lbl">% of Starting Body Weight</div></div>'
            '</div>'
            '<div style="margin-top:1.5rem;padding:1rem;border-radius:12px;background:rgba(var(--accent-rgb),0.04);border:1px solid rgba(var(--accent-rgb),0.1);">'
                '<div style="font-weight:600;margin-bottom:0.8rem;">Treatment Details</div>'
                '<div style="display:flex;justify-content:space-between;padding:0.4rem 0;border-bottom:1px solid rgba(255,255,255,0.06);"><span>Treatment Duration</span><span id="duration-display" style="font-weight:600;">--</span></div>'
                '<div style="display:flex;justify-content:space-between;padding:0.4rem 0;border-bottom:1px solid rgba(255,255,255,0.06);"><span>Maximum Dose</span><span id="dose-display" style="font-weight:600;">--</span></div>'
                '<div style="display:flex;justify-content:space-between;padding:0.4rem 0;"><span>Clinical Trial Basis</span><span id="trial-basis" style="font-weight:600;">STEP 1 Trial</span></div>'
            '</div>'
            '<div style="margin-top:1.5rem;"><canvas id="chart"></canvas></div>',
        "breakdown": [],
    },

    "coach": {
        "title": "Here\u2019s your mental model",
        "container_id": "coachCard",
        "cta_text": "Have a question about your result?",
    },

    "js_file": "js/calculators/ozempic_weight_loss.js",

    "faq": [
        {"question": "How much weight can I lose on Ozempic?", "answer": "In the STEP 1 clinical trial (N=1,961), participants taking semaglutide 2.4 mg weekly lost an average of 14.9% of their body weight over 68 weeks, compared to 2.4% with placebo. At the standard Ozempic doses (0.5 mg and 1.0 mg), the SUSTAIN trials showed weight loss typically ranges from 5% to 10% of body weight over 6-12 months."},
        {"question": "When will I start seeing results on Ozempic?", "answer": "Most people start noticing weight loss within 4-6 weeks of starting treatment. The rate of loss is typically fastest between weeks 12 and 28 during dose escalation."},
        {"question": "Will I regain weight after stopping Ozempic?", "answer": "The STEP 4 trial showed participants who switched from semaglutide 2.4 mg to placebo regained approximately two-thirds of the weight they had lost over the following 48 weeks."},
        {"question": "Should I diet while taking Ozempic?", "answer": "Yes. All STEP clinical trials combined semaglutide with a reduced-calorie diet (500 kcal/day deficit) and increased physical activity (150 minutes/week). Dietary changes amplify results substantially."},
        {"question": "Is this calculator based on real clinical trials?", "answer": "Yes. The projections are derived from the STEP and SUSTAIN clinical trial programs published in the New England Journal of Medicine and The Lancet."},
    ],

    "sources": [
        {"text": "Wilding JPH, Batterham RL, Calanna S, et al. Once-Weekly Semaglutide in Adults with Overweight or Obesity (STEP 1). N Engl J Med. 2021;384(11):989-1002.", "url": "https://pubmed.ncbi.nlm.nih.gov/33567185/"},
        {"text": "Davies M, Faerch L, Jeppesen OK, et al. Semaglutide 2.4 mg once a week in adults with overweight or obesity (STEP 2). Lancet. 2021;397(10278):971-984.", "url": "https://pubmed.ncbi.nlm.nih.gov/33667417/"},
        {"text": "Rubino D, Abrahamsson N, Davies M, et al. Effect of Continued Weekly Subcutaneous Semaglutide vs Placebo on Weight Loss Maintenance (STEP 4). JAMA. 2021;325(14):1414-1425.", "url": "https://pubmed.ncbi.nlm.nih.gov/33755728/"},
        {"text": "Novo Nordisk. Ozempic (semaglutide) Prescribing Information. FDA.gov.", "url": "https://www.accessdata.fda.gov/drugsatfda_docs/label/2022/209637s009lbl.pdf"},
    ],

    "methodology": "<p>This calculator projects weight loss using dose-specific percentage outcomes from published clinical trials. For the 2.4 mg dose, projections are based on the STEP 1 trial (14.9% average body weight loss at 68 weeks). For the 1.0 mg and 0.5 mg doses, projections use data from the SUSTAIN trial program (~8% and ~5% at 52 weeks respectively).</p><p>Weight loss is calculated as a percentage of starting body weight and scaled proportionally to the selected treatment duration. This tool provides estimates only and does not replace clinical guidance.</p>",

    "llm_capsule": "Ozempic (semaglutide) is a GLP-1 receptor agonist. In the STEP 1 clinical trial, the 2.4 mg weekly dose produced 14.9% average body weight loss over 68 weeks. The standard Ozempic doses (0.5 mg and 1.0 mg) produce approximately 5-8% weight loss over 52 weeks in the SUSTAIN trials.",

    "ask_pills": ["Ozempic vs Mounjaro", "Side effects", "Weight regain", "Cost without insurance"],
    "ask_placeholder": "e.g. What are Ozempic side effects?",
}

register("ozempic_weight_loss", OZEMPIC_WEIGHT_LOSS)

WEGOVY_WEIGHT_LOSS = {
    "route": "/wegovy-weight-loss-calculator",
    "override_template": None,

    "seo": {
        "robots": "noindex, nofollow",
        "page_title": "Wegovy Weight Loss Calculator — Results Estimator",
        "meta_description": "Free Wegovy weight loss calculator projects your expected weight loss based on STEP clinical trial data. Personalized by starting weight, dose, and treatment duration.",
        "og_title": "Wegovy Weight Loss Calculator – Semaglutide 2.4mg Projection Tool",
        "og_description": "Calculate your expected weight loss with Wegovy (semaglutide 2.4mg). Personalized results based on STEP trial data, dose, and treatment duration.",
        "schema_type": "MedicalWebPage",
        "schema_name": "Wegovy Weight Loss Calculator",
        "schema_description": "Free Wegovy weight loss calculator projects your expected weight loss based on STEP clinical trial data.",
        "schema_about": "Wegovy Weight Loss Calculator",
        "date_published": "2025-06-01",
        "date_modified": "2026-03-24",
    },

    "accent": "#0ea5e9",
    "accent_rgb": "14,165,233",

    "hero": {
        "headline": "Wegovy Weight Loss Calculator",
        "subtitle": "Project your expected weight loss based on STEP clinical trial data",
    },

    "breadcrumb_category": {"name": "Weight Loss Medications", "url": "/weight-loss-medication-calculators"},

    "form": {
        "fields": [
            {"id": "units", "type": "radio_row", "label": "Measurement Units", "options": [
                {"value": "metric", "label": "Metric (kg/cm)", "selected": True},
                {"value": "imperial", "label": "Imperial (lb/ft/in)"},
            ]},
            {"id": "weight-kg", "type": "number", "label": "Current Weight (kg)", "min": 30, "max": 300, "step": 0.1},
            {"id": "weight-lb", "type": "number", "label": "Current Weight (lbs)", "min": 66, "max": 660, "step": 1},
            {"id": "height-cm", "type": "number", "label": "Height (cm)", "min": 120, "max": 250},
            {"type": "row", "fields": [
                {"id": "height-ft", "type": "number", "label": "Feet", "min": 3, "max": 8, "default": 5},
                {"id": "height-in", "type": "number", "label": "Inches", "min": 0, "max": 11, "default": 9},
            ]},
            {"id": "age", "type": "number", "label": "Age", "min": 18, "max": 100},
            {"id": "sex", "type": "select", "label": "Sex", "options": [
                {"value": "female", "label": "Female"},
                {"value": "male", "label": "Male"},
            ]},
            {"id": "bmi", "type": "number", "label": "Current BMI (calculated automatically)", "placeholder": "auto"},
            {"id": "form-type", "type": "select", "label": "Wegovy Form", "options": [
                {"value": "injectable", "label": "Injectable (2.4 mg weekly)", "selected": True},
                {"value": "oral", "label": "Oral pill (50 mg daily) — approved 2025"},
            ]},
            {"id": "duration", "type": "select", "label": "Planned Treatment Duration (weeks)", "options": [
                {"value": "12", "label": "12 weeks (~3 months)"},
                {"value": "24", "label": "24 weeks (~6 months)"},
                {"value": "36", "label": "36 weeks (~9 months)"},
                {"value": "52", "label": "52 weeks (~12 months)"},
                {"value": "68", "label": "68 weeks (~16 months)", "selected": True},
            ]},
            {"id": "activity", "type": "select", "label": "Activity Level", "options": [
                {"value": "sedentary", "label": "Sedentary (little or no exercise)"},
                {"value": "light", "label": "Light (1-3 days/week)"},
                {"value": "moderate", "label": "Moderate (3-5 days/week)", "selected": True},
                {"value": "active", "label": "Active (6-7 days/week)"},
                {"value": "very-active", "label": "Very Active (twice/day or physical job)"},
            ]},
        ],
        "submit_label": "Calculate Projected Weight Loss",
    },

    "results": {
        "primary": {"id": "resultNumber", "unit": "projected weight loss"},
        "verdict_id": "resultVerdict",
        "breakdown_html":
            '<div class="factory-breakdown" style="grid-template-columns:repeat(2,1fr);">' +
            '<div class="detail-card"><div class="d-val" id="startWeight">--</div><div class="d-lbl">Starting Weight</div></div>' +
            '<div class="detail-card"><div class="d-val" id="finalWeight">--</div><div class="d-lbl">Projected Final Weight</div></div>' +
            '<div class="detail-card"><div class="d-val" id="startBMI">--</div><div class="d-lbl">Starting BMI</div></div>' +
            '<div class="detail-card"><div class="d-val" id="finalBMI">--</div><div class="d-lbl">Projected Final BMI</div></div></div>' +
            '<div class="factory-breakdown" style="grid-template-columns:1fr;margin-top:1rem;"><div class="detail-card"><div class="d-val" id="loss-pct-label">--</div><div class="d-lbl">% of Starting Body Weight</div></div></div>' +
            '<div style="margin-top:1.5rem;padding:1rem;border-radius:12px;background:rgba(var(--accent-rgb),0.04);border:1px solid rgba(var(--accent-rgb),0.1);"><div style="font-weight:600;margin-bottom:0.8rem;">Treatment Details</div>' +
            '<div style="display:flex;justify-content:space-between;padding:0.4rem 0;border-bottom:1px solid rgba(255,255,255,0.06);"><span>Treatment Duration</span><span id="duration-display" style="font-weight:600;">--</span></div>' +
            '<div style="display:flex;justify-content:space-between;padding:0.4rem 0;border-bottom:1px solid rgba(255,255,255,0.06);"><span>Wegovy Form</span><span id="form-display" style="font-weight:600;">--</span></div>' +
            '<div style="display:flex;justify-content:space-between;padding:0.4rem 0;border-bottom:1px solid rgba(255,255,255,0.06);"><span>Activity Level</span><span id="activity-display" style="font-weight:600;">--</span></div>' +
            '<div style="display:flex;justify-content:space-between;padding:0.4rem 0;"><span>Clinical Trial Basis</span><span id="trial-basis" style="font-weight:600;">STEP 1 Trial</span></div></div>' +
            '<div style="margin-top:1.5rem;"><canvas id="chart"></canvas></div>',
        "breakdown": [],
    },

    "coach": {
        "title": "Here’s what your result means",
        "container_id": "coachCard",
        "cta_text": "Have a question about your result?",
    },

    "js_file": "js/calculators/wegovy_weight_loss.js",

    "faq": [
        {"question": "How much weight can I lose on Wegovy?", "answer": "In the STEP 1 clinical trial (N=1,961), participants taking Wegovy (semaglutide 2.4 mg weekly) lost an average of 14.9% of their body weight over 68 weeks."},
        {"question": "What is the difference between Wegovy and Ozempic?", "answer": "Both contain semaglutide, but Wegovy is FDA-approved for chronic weight management at 2.4 mg weekly, while Ozempic is approved for type 2 diabetes at up to 2.0 mg weekly."},
        {"question": "Is there an oral Wegovy pill?", "answer": "Yes. In 2025, the FDA approved oral semaglutide for chronic weight management. The OASIS clinical trials showed approximately 15% weight loss at 68 weeks."},
        {"question": "Will I regain weight after stopping Wegovy?", "answer": "The STEP 4 trial showed participants who switched to placebo regained approximately two-thirds of lost weight over 48 weeks."},
        {"question": "Is this calculator based on real clinical trials?", "answer": "Yes. Projections are derived from the STEP and OASIS clinical trial programs."},
    ],

    "sources": [
        {"text": "Wilding JPH, et al. Once-Weekly Semaglutide in Adults with Overweight or Obesity (STEP 1). N Engl J Med. 2021;384(11):989-1002.", "url": "https://pubmed.ncbi.nlm.nih.gov/33567185/"},
        {"text": "Garvey WT, et al. Two-year effects of semaglutide (STEP 5). Nat Med. 2022;28:2083-2091.", "url": "https://pubmed.ncbi.nlm.nih.gov/36216945/"},
        {"text": "Novo Nordisk. Wegovy (semaglutide) Prescribing Information. FDA.gov.", "url": "https://www.accessdata.fda.gov/drugsatfda_docs/label/2023/215256s007lbl.pdf"},
    ],

    "methodology": "<p>This calculator projects weight loss using STEP and OASIS clinical trial data. For injectable Wegovy (2.4 mg weekly), projections are based on STEP 1 (14.9% at 68 weeks). For oral Wegovy (50 mg daily), OASIS data (~15% at 68 weeks). A non-linear logarithmic curve models the clinical pattern. Activity level adjustments modify the projection by up to +/-10%.</p>",

    "llm_capsule": "Wegovy (semaglutide 2.4 mg) produced 14.9% average weight loss at 68 weeks in STEP 1 (N=1,961). Oral Wegovy (50 mg daily) achieved ~15% at 68 weeks in OASIS trials.",

    "ask_pills": ["Wegovy vs Ozempic", "Oral vs injectable", "Side effects", "Cost"],
    "ask_placeholder": "Type your question...",
}

register("wegovy_weight_loss", WEGOVY_WEIGHT_LOSS)

ORAL_WEGOVY_WEIGHT_LOSS = {
    "route": "/oral-wegovy-weight-loss-calculator",
    "override_template": None,

    "seo": {
        "robots": "noindex, nofollow",
        "page_title": "Oral Wegovy Weight Loss Calculator — Semaglutide 25mg",
        "meta_description": "Free Oral Wegovy (oral semaglutide 25mg) weight loss calculator. Project your expected weight loss based on OASIS 1 clinical trial data.",
        "og_title": "Oral Wegovy Weight Loss Calculator – Oral Semaglutide 25mg Projection Tool",
        "og_description": "Calculate your expected weight loss with oral Wegovy (semaglutide 25mg pill). Personalized results based on OASIS 1 trial data.",
        "schema_type": "MedicalWebPage",
        "schema_name": "Oral Wegovy Weight Loss Calculator",
        "schema_description": "Project your expected weight loss on oral Wegovy based on OASIS 1 clinical trial data.",
        "schema_about": "Oral Wegovy Weight Loss Calculator",
        "date_published": "2025-06-01",
        "date_modified": "2026-03-24",
    },

    "accent": "#06b6d4",
    "accent_rgb": "6,182,212",

    "hero": {
        "headline": "Oral Wegovy Weight Loss Calculator",
        "subtitle": "Project your expected weight loss with oral semaglutide 25mg based on OASIS 1 trial data",
    },

    "breadcrumb_category": {"name": "Weight Loss Medications", "url": "/weight-loss-medication-calculators"},

    "form": {
        "fields": [
            {"id": "units", "type": "radio_row", "label": "Measurement Units", "options": [
                {"value": "metric", "label": "Metric (kg/cm)", "selected": True},
                {"value": "imperial", "label": "Imperial (lb/ft/in)"},
            ]},
            {"id": "weight-kg", "type": "number", "label": "Current Weight (kg)", "min": 30, "max": 300, "step": 0.1},
            {"id": "weight-lb", "type": "number", "label": "Current Weight (lbs)", "min": 66, "max": 660, "step": 1},
            {"id": "height-cm", "type": "number", "label": "Height (cm)", "min": 120, "max": 250},
            {"type": "row", "fields": [
                {"id": "height-ft", "type": "number", "label": "Feet", "min": 3, "max": 8, "default": 5},
                {"id": "height-in", "type": "number", "label": "Inches", "min": 0, "max": 11, "default": 9},
            ]},
            {"id": "bmi", "type": "number", "label": "Current BMI (calculated automatically)", "placeholder": "auto"},
            {"id": "duration", "type": "select", "label": "Planned Treatment Duration (weeks)", "options": [
                {"value": "12", "label": "12 weeks (~3 months)"},
                {"value": "24", "label": "24 weeks (~6 months)"},
                {"value": "36", "label": "36 weeks (~9 months)"},
                {"value": "52", "label": "52 weeks (~12 months)"},
                {"value": "68", "label": "68 weeks (~16 months)", "selected": True},
            ]},
        ],
        "submit_label": "Calculate Projected Weight Loss",
    },

    "results": {
        "primary": {"id": "resultNumber", "unit": "projected weight loss"},
        "verdict_id": "resultVerdict",
        "breakdown_html": '<div class="factory-breakdown" style="grid-template-columns:repeat(2,1fr);"><div class="detail-card"><div class="d-val" id="startWeight">--</div><div class="d-lbl">Starting Weight</div></div><div class="detail-card"><div class="d-val" id="finalWeight">--</div><div class="d-lbl">Projected Final Weight</div></div><div class="detail-card"><div class="d-val" id="startBMI">--</div><div class="d-lbl">Starting BMI</div></div><div class="detail-card"><div class="d-val" id="finalBMI">--</div><div class="d-lbl">Projected Final BMI</div></div></div><div class="factory-breakdown" style="grid-template-columns:1fr;margin-top:1rem;"><div class="detail-card"><div class="d-val" id="loss-pct-label">--</div><div class="d-lbl">% of Starting Body Weight</div></div></div><div style="margin-top:1.5rem;padding:1rem;border-radius:12px;background:rgba(var(--accent-rgb),0.04);border:1px solid rgba(var(--accent-rgb),0.1);"><div style="font-weight:600;margin-bottom:0.8rem;">Treatment Details</div><div style="display:flex;justify-content:space-between;padding:0.4rem 0;border-bottom:1px solid rgba(255,255,255,0.06);"><span>Treatment Duration</span><span id="duration-display" style="font-weight:600;">--</span></div><div style="display:flex;justify-content:space-between;padding:0.4rem 0;border-bottom:1px solid rgba(255,255,255,0.06);"><span>Medication Form</span><span style="font-weight:600;">Oral semaglutide 25mg (daily pill)</span></div><div style="display:flex;justify-content:space-between;padding:0.4rem 0;"><span>Clinical Trial Basis</span><span style="font-weight:600;">OASIS 1 Trial</span></div></div><div style="margin-top:1.5rem;padding:1rem;border-radius:12px;background:rgba(var(--accent-rgb),0.04);border:1px solid rgba(var(--accent-rgb),0.1);"><div style="font-weight:600;margin-bottom:0.8rem;">Oral Wegovy Dose Escalation Schedule</div><div style="display:flex;justify-content:space-between;padding:0.4rem 0;border-bottom:1px solid rgba(255,255,255,0.06);"><span>Weeks 1-4</span><span>1.5 mg daily</span></div><div style="display:flex;justify-content:space-between;padding:0.4rem 0;border-bottom:1px solid rgba(255,255,255,0.06);"><span>Weeks 5-8</span><span>4 mg daily</span></div><div style="display:flex;justify-content:space-between;padding:0.4rem 0;border-bottom:1px solid rgba(255,255,255,0.06);"><span>Weeks 9-12</span><span>9 mg daily</span></div><div style="display:flex;justify-content:space-between;padding:0.4rem 0;border-bottom:1px solid rgba(255,255,255,0.06);"><span>Weeks 13-16</span><span>14 mg daily</span></div><div style="display:flex;justify-content:space-between;padding:0.4rem 0;font-weight:600;"><span>Week 17+</span><span>25 mg daily (maintenance)</span></div></div><div style="margin-top:1.5rem;"><canvas id="chart"></canvas></div>',
        "breakdown": [],
    },

    "coach": {
        "title": "Here\u2019s what your result means",
        "container_id": "coachCard",
        "cta_text": "Have a question about your result?",
    },

    "js_file": "js/calculators/oral_wegovy_weight_loss.js",

    "faq": [
        {"question": "How much weight can I lose on oral Wegovy?", "answer": "In the OASIS 1 trial, oral semaglutide 25mg daily produced approximately 14% body weight loss at 68 weeks."},
        {"question": "What is the difference between oral and injectable Wegovy?", "answer": "Both contain semaglutide. Oral Wegovy is a daily 25mg pill; injectable Wegovy is a weekly 2.4mg injection. Injectable achieved ~15% loss vs ~14% for oral at 68 weeks."},
        {"question": "Why are the oral and injectable doses so different?", "answer": "Oral semaglutide has ~1% bioavailability. The 25mg oral dose delivers roughly the same active drug as the 2.4mg injectable dose."},
        {"question": "When was oral Wegovy approved?", "answer": "The FDA approved oral semaglutide for weight management in December 2025 based on the OASIS 1 trial."},
        {"question": "Is this calculator based on real clinical trial data?", "answer": "Yes. Projections are derived from the OASIS 1 clinical trial (Knop et al., Lancet 2023)."},
    ],

    "sources": [
        {"text": "Knop FK, et al. Oral semaglutide 50 mg taken once daily in adults with overweight or obesity (OASIS 1). Lancet. 2023;402(10403):705-719.", "url": "https://pubmed.ncbi.nlm.nih.gov/37385280/"},
        {"text": "Wilding JPH, et al. Once-Weekly Semaglutide in Adults with Overweight or Obesity (STEP 1). N Engl J Med. 2021;384(11):989-1002.", "url": "https://pubmed.ncbi.nlm.nih.gov/33567185/"},
        {"text": "Novo Nordisk. Wegovy (semaglutide) Prescribing Information. FDA.gov.", "url": "https://www.accessdata.fda.gov/drugsatfda_docs/label/2023/215256s007lbl.pdf"},
    ],

    "methodology": "<p>This calculator projects weight loss using piecewise linear interpolation of OASIS 1 trial timepoints: ~5% at 12 weeks, ~9% at 24 weeks, ~12% at 36 weeks, ~13% at 52 weeks, ~14% at 68 weeks. Projections represent population averages. Individual results vary.</p>",

    "llm_capsule": "Oral Wegovy (semaglutide 25mg daily pill) produced ~14% body weight loss at 68 weeks in the OASIS 1 trial. Comparable to injectable Wegovy (~15%). Requires fasting: take on empty stomach with minimal water, 30 min before food.",

    "ask_pills": ["Oral vs injectable Wegovy", "How to take the pill", "OASIS trial results", "Cost"],
    "ask_placeholder": "Type your question...",
}

register("oral_wegovy_weight_loss", ORAL_WEGOVY_WEIGHT_LOSS)

MOUNJARO_WEIGHT_LOSS = {
    "route": "/mounjaro-weight-loss-calculator",
    "override_template": None,

    "seo": {
        "robots": "noindex, nofollow",
        "page_title": "Mounjaro Weight Loss Calculator \u2014 Results Estimator",
        "meta_description": "Estimate your potential weight loss on Mounjaro (tirzepatide) based on dose, duration, and lifestyle factors. Projections based on SURMOUNT clinical trial data.",
        "og_title": "Mounjaro Weight Loss Calculator \u2013 Tirzepatide Results Estimator",
        "og_description": "Estimate your potential weight loss on Mounjaro (tirzepatide) based on dose, duration, and lifestyle factors.",
        "schema_type": "MedicalWebPage",
        "schema_name": "Mounjaro Weight Loss Calculator",
        "schema_description": "Estimate your potential weight loss on Mounjaro (tirzepatide) based on SURMOUNT clinical trial data.",
        "schema_about": "Mounjaro Weight Loss Calculator",
        "date_published": "2025-06-01",
        "date_modified": "2026-03-24",
    },

    "accent": "#7c3aed",
    "accent_rgb": "124,58,237",

    "hero": {
        "headline": "Mounjaro Weight Loss Calculator",
        "subtitle": "Estimate your potential weight loss on Mounjaro (tirzepatide) based on SURMOUNT clinical trial data",
    },

    "breadcrumb_category": {"name": "Weight Loss Medications", "url": "/weight-loss-medication-calculators"},

    "form": {
        "fields": [
            {"id": "units", "type": "radio_row", "label": "Units", "options": [
                {"value": "metric", "label": "Metric (kg/cm)", "selected": True},
                {"value": "imperial", "label": "Imperial (lb/ft/in)"},
            ]},
            {"id": "weight-kg", "type": "number", "label": "Current Weight (kg)", "min": 30, "max": 300, "step": 0.1, "placeholder": "e.g. 95"},
            {"id": "weight-lb", "type": "number", "label": "Current Weight (lbs)", "min": 66, "max": 660, "step": 1, "placeholder": "e.g. 210"},
            {"id": "height-cm", "type": "number", "label": "Height (cm)", "min": 120, "max": 250, "placeholder": "e.g. 170"},
            {"type": "row", "fields": [
                {"id": "height-ft", "type": "number", "label": "Feet", "min": 3, "max": 8, "default": 5},
                {"id": "height-in", "type": "number", "label": "Inches", "min": 0, "max": 11, "default": 7},
            ]},
            {"id": "bmi", "type": "number", "label": "Current BMI (calculated automatically)", "placeholder": "auto"},
            {"id": "age", "type": "number", "label": "Age", "min": 18, "max": 100, "placeholder": "e.g. 45"},
            {"id": "dose", "type": "select", "label": "Starting Dose", "options": [
                {"value": "2.5", "label": "2.5 mg (initial titration dose)"},
                {"value": "5", "label": "5 mg (first maintenance dose)", "selected": True},
                {"value": "7.5", "label": "7.5 mg"},
                {"value": "10", "label": "10 mg"},
                {"value": "12.5", "label": "12.5 mg"},
                {"value": "15", "label": "15 mg (maximum dose)"},
            ]},
            {"id": "duration", "type": "select", "label": "Duration on Medication", "options": [
                {"value": "3", "label": "3 months"},
                {"value": "6", "label": "6 months"},
                {"value": "9", "label": "9 months"},
                {"value": "12", "label": "12 months", "selected": True},
                {"value": "18", "label": "18 months (~72 weeks, SURMOUNT-1 endpoint)"},
                {"value": "24", "label": "24 months"},
            ]},
            {"id": "activity", "type": "select", "label": "Activity Level", "options": [
                {"value": "sedentary", "label": "Sedentary (little or no exercise)"},
                {"value": "light", "label": "Lightly Active (exercise 1-3 days/week)"},
                {"value": "moderate", "label": "Moderately Active (exercise 3-5 days/week)", "selected": True},
                {"value": "very", "label": "Very Active (exercise 6-7 days/week)"},
            ]},
            {"id": "diet", "type": "select", "label": "Diet Adherence", "options": [
                {"value": "poor", "label": "Poor (no dietary changes)"},
                {"value": "moderate", "label": "Moderate (some dietary improvements)"},
                {"value": "good", "label": "Good (consistent calorie-controlled diet)", "selected": True},
                {"value": "excellent", "label": "Excellent (strict adherence to nutrition plan)"},
            ]},
        ],
        "submit_label": "Calculate Projected Weight Loss",
    },

    "results": {
        "primary": {"id": "resultNumber", "unit": "projected weight loss range"},
        "verdict_id": "resultVerdict",
        "breakdown_html": '<div class="factory-breakdown" style="grid-template-columns:repeat(2,1fr);"><div class="detail-card"><div class="d-val" id="startWeight">--</div><div class="d-lbl">Starting Weight</div></div><div class="detail-card"><div class="d-val" id="finalWeight">--</div><div class="d-lbl">Projected Weight</div></div><div class="detail-card"><div class="d-val" id="startBMI">--</div><div class="d-lbl">Starting BMI</div></div><div class="detail-card"><div class="d-val" id="finalBMI">--</div><div class="d-lbl">Projected BMI</div></div></div><div class="factory-breakdown" style="grid-template-columns:1fr;margin-top:1rem;"><div class="detail-card"><div class="d-val" id="loss-pct-label">--</div><div class="d-lbl">% of Starting Body Weight</div></div></div><div style="margin-top:1.5rem;padding:1rem;border-radius:12px;background:rgba(var(--accent-rgb),0.04);border:1px solid rgba(var(--accent-rgb),0.1);"><div style="font-weight:600;margin-bottom:0.8rem;">Treatment Summary</div><div style="display:flex;justify-content:space-between;padding:0.4rem 0;border-bottom:1px solid rgba(255,255,255,0.06);"><span>Weekly Weight Loss Rate</span><span id="weeklyRate" style="font-weight:600;">--</span></div><div style="display:flex;justify-content:space-between;padding:0.4rem 0;border-bottom:1px solid rgba(255,255,255,0.06);"><span>Starting Dose</span><span id="dose-display" style="font-weight:600;">--</span></div><div style="display:flex;justify-content:space-between;padding:0.4rem 0;border-bottom:1px solid rgba(255,255,255,0.06);"><span>Treatment Duration</span><span id="duration-display" style="font-weight:600;">--</span></div><div style="display:flex;justify-content:space-between;padding:0.4rem 0;border-bottom:1px solid rgba(255,255,255,0.06);"><span>Activity Modifier</span><span id="activity-modifier" style="font-weight:600;">--</span></div><div style="display:flex;justify-content:space-between;padding:0.4rem 0;border-bottom:1px solid rgba(255,255,255,0.06);"><span>Diet Modifier</span><span id="diet-modifier" style="font-weight:600;">--</span></div><div style="display:flex;justify-content:space-between;padding:0.4rem 0;"><span>Clinical Trial Basis</span><span style="font-weight:600;">SURMOUNT-1</span></div></div><div style="margin-top:1.5rem;padding:1rem;border-radius:12px;background:rgba(var(--accent-rgb),0.04);border:1px solid rgba(var(--accent-rgb),0.1);"><div style="font-weight:600;margin-bottom:0.8rem;">With Medication vs. Without</div><div style="display:flex;justify-content:space-between;padding:0.4rem 0;border-bottom:1px solid rgba(255,255,255,0.06);"><span>With Mounjaro</span><span id="withMedLoss" style="color:var(--accent);font-weight:600;">--</span></div><div style="display:flex;justify-content:space-between;padding:0.4rem 0;"><span>Lifestyle Only</span><span id="withoutMedLoss" style="font-weight:600;">--</span></div></div><div style="margin-top:1.5rem;"><canvas id="chart"></canvas></div>',
        "breakdown": [],
    },

    "coach": {
        "title": "Here\u2019s what your result means",
        "container_id": "coachCard",
        "cta_text": "Have a question about your result?",
    },

    "js_file": "js/calculators/mounjaro_weight_loss.js",

    "faq": [
        {"question": "How much weight can I lose on Mounjaro?", "answer": "In SURMOUNT-1 (N=2,539), the 15 mg dose produced 22.5% average weight loss at 72 weeks. The 10 mg dose: 19.5%, 5 mg dose: 15%."},
        {"question": "How does Mounjaro compare to Ozempic?", "answer": "Mounjaro targets both GIP and GLP-1 receptors. Maximum dose produced 22.5% loss vs semaglutide's 14.9% at its highest weight-loss dose."},
        {"question": "What is the Mounjaro dosing schedule?", "answer": "Starts at 2.5 mg weekly, increases by 2.5 mg every 4 weeks up to 15 mg maximum based on tolerability."},
        {"question": "When will I start losing weight?", "answer": "Most notice weight loss within 4-8 weeks. Most rapid loss occurs between weeks 12-36 during dose escalation."},
        {"question": "Will I regain weight after stopping?", "answer": "SURMOUNT-4 showed participants who switched to placebo regained ~50% of lost weight over 52 weeks."},
        {"question": "Is this based on real clinical trials?", "answer": "Yes. Projections are from the SURMOUNT clinical trial program (Jastreboff et al., NEJM 2022, N=2,539)."},
    ],

    "sources": [
        {"text": "Jastreboff AM, et al. Tirzepatide Once Weekly for the Treatment of Obesity. N Engl J Med. 2022;387(3):205-216. (SURMOUNT-1)", "url": "https://pubmed.ncbi.nlm.nih.gov/35658024/"},
        {"text": "Garvey WT, et al. Tirzepatide for obesity in people with type 2 diabetes (SURMOUNT-2). Lancet. 2023.", "url": "https://pubmed.ncbi.nlm.nih.gov/37385275/"},
        {"text": "Aronne LJ, et al. Continued Treatment With Tirzepatide (SURMOUNT-4). JAMA. 2024.", "url": "https://pubmed.ncbi.nlm.nih.gov/38078870/"},
        {"text": "Eli Lilly. Mounjaro (tirzepatide) Prescribing Information. FDA.gov.", "url": "https://www.accessdata.fda.gov/drugsatfda_docs/label/2022/215866s000lbl.pdf"},
    ],

    "methodology": "<p>This calculator projects weight loss using dose-specific outcomes from SURMOUNT-1 (Jastreboff et al., NEJM 2022, N=2,539). Base weight loss: 15% (5mg), 19.5% (10mg), 22.5% (15mg) at 72 weeks. Scaled non-linearly for duration and adjusted for activity/diet.</p>",

    "llm_capsule": "Mounjaro (tirzepatide) is a dual GIP/GLP-1 agonist. SURMOUNT-1: 15mg = 22.5%, 10mg = 19.5%, 5mg = 15% weight loss at 72 weeks. Starts 2.5mg weekly, escalates every 4 weeks.",

    "ask_pills": ["Mounjaro vs Ozempic", "Tirzepatide mechanism", "Side effects", "Dosing schedule"],
    "ask_placeholder": "Type your question...",
}

register("mounjaro_weight_loss", MOUNJARO_WEIGHT_LOSS)

ZEPBOUND_WEIGHT_LOSS = {
    "route": "/zepbound-weight-loss-calculator",
    "override_template": None,

    "seo": {
        "robots": "noindex, nofollow",
        "page_title": "Zepbound Weight Loss Calculator \u2014 Tirzepatide Projection Tool",
        "meta_description": "Free Zepbound weight loss calculator projects your expected weight loss based on SURMOUNT clinical trial data.",
        "og_title": "Zepbound Weight Loss Calculator \u2013 Tirzepatide Projection Tool",
        "og_description": "Free Zepbound weight loss calculator projects your expected weight loss based on SURMOUNT clinical trial data.",
        "schema_type": "MedicalWebPage",
        "schema_name": "Zepbound Weight Loss Calculator",
        "schema_description": "Project your expected weight loss on Zepbound based on SURMOUNT clinical trial data.",
        "schema_about": "Zepbound Weight Loss Calculator",
        "date_published": "2025-06-01",
        "date_modified": "2026-03-24",
    },

    "accent": "#0ea5e9",
    "accent_rgb": "14,165,233",

    "hero": {
        "headline": "Zepbound Weight Loss Calculator",
        "subtitle": "Project your expected weight loss on Zepbound (tirzepatide) based on SURMOUNT clinical trial data",
    },

    "breadcrumb_category": {"name": "Weight Loss Medications", "url": "/weight-loss-medication-calculators"},

    "form": {
        "fields": [
            {"id": "units", "type": "radio_row", "label": "Units", "options": [
                {"value": "metric", "label": "Metric (kg/cm)", "selected": True},
                {"value": "imperial", "label": "Imperial (lb/ft/in)"},
            ]},
            {"id": "weight-kg", "type": "number", "label": "Current Weight (kg)", "min": 30, "max": 300, "step": 0.1, "placeholder": "e.g. 95"},
            {"id": "weight-lb", "type": "number", "label": "Current Weight (lbs)", "min": 66, "max": 660, "step": 1, "placeholder": "e.g. 210"},
            {"id": "height-cm", "type": "number", "label": "Height (cm)", "min": 120, "max": 250, "placeholder": "e.g. 170"},
            {"type": "row", "fields": [
                {"id": "height-ft", "type": "number", "label": "Feet", "min": 3, "max": 8, "default": 5},
                {"id": "height-in", "type": "number", "label": "Inches", "min": 0, "max": 11, "default": 7},
            ]},
            {"id": "bmi", "type": "number", "label": "Current BMI (calculated automatically)", "placeholder": "auto"},
            {"id": "age", "type": "number", "label": "Age", "min": 18, "max": 100, "placeholder": "e.g. 45"},
            {"id": "dose", "type": "select", "label": "Target Dose", "options": [
                {"value": "2.5", "label": "2.5 mg (initial titration dose)"},
                {"value": "5", "label": "5 mg (first maintenance dose)", "selected": True},
                {"value": "7.5", "label": "7.5 mg"},
                {"value": "10", "label": "10 mg"},
                {"value": "12.5", "label": "12.5 mg"},
                {"value": "15", "label": "15 mg (maximum dose)"},
            ]},
            {"id": "duration", "type": "select", "label": "Treatment Duration", "options": [
                {"value": "12", "label": "12 weeks"},
                {"value": "24", "label": "24 weeks"},
                {"value": "36", "label": "36 weeks"},
                {"value": "52", "label": "52 weeks", "selected": True},
                {"value": "72", "label": "72 weeks (SURMOUNT-1 endpoint)"},
            ]},
            {"id": "activity", "type": "select", "label": "Activity Level", "options": [
                {"value": "sedentary", "label": "Sedentary (little or no exercise)"},
                {"value": "light", "label": "Lightly Active (exercise 1-3 days/week)"},
                {"value": "moderate", "label": "Moderately Active (exercise 3-5 days/week)", "selected": True},
                {"value": "very", "label": "Very Active (exercise 6-7 days/week)"},
            ]},
        ],
        "submit_label": "Calculate Projected Weight Loss",
    },

    "results": {
        "primary": {"id": "resultNumber", "unit": "projected weight loss range"},
        "verdict_id": "resultVerdict",
        "breakdown_html": '<div class="factory-breakdown" style="grid-template-columns:repeat(2,1fr);"><div class="detail-card"><div class="d-val" id="startWeight">--</div><div class="d-lbl">Starting Weight</div></div><div class="detail-card"><div class="d-val" id="finalWeight">--</div><div class="d-lbl">Projected Weight</div></div><div class="detail-card"><div class="d-val" id="startBMI">--</div><div class="d-lbl">Starting BMI</div></div><div class="detail-card"><div class="d-val" id="finalBMI">--</div><div class="d-lbl">Projected BMI</div></div></div><div class="factory-breakdown" style="grid-template-columns:1fr;margin-top:1rem;"><div class="detail-card"><div class="d-val" id="loss-pct-label">--</div><div class="d-lbl">% of Starting Body Weight</div></div></div><div style="margin-top:1.5rem;padding:1rem;border-radius:12px;background:rgba(var(--accent-rgb),0.04);border:1px solid rgba(var(--accent-rgb),0.1);"><div style="font-weight:600;margin-bottom:0.8rem;">Treatment Summary</div><div style="display:flex;justify-content:space-between;padding:0.4rem 0;border-bottom:1px solid rgba(255,255,255,0.06);"><span>Weekly Weight Loss Rate</span><span id="weeklyRate" style="font-weight:600;">--</span></div><div style="display:flex;justify-content:space-between;padding:0.4rem 0;border-bottom:1px solid rgba(255,255,255,0.06);"><span>Target Dose</span><span id="dose-display" style="font-weight:600;">--</span></div><div style="display:flex;justify-content:space-between;padding:0.4rem 0;border-bottom:1px solid rgba(255,255,255,0.06);"><span>Treatment Duration</span><span id="duration-display" style="font-weight:600;">--</span></div><div style="display:flex;justify-content:space-between;padding:0.4rem 0;border-bottom:1px solid rgba(255,255,255,0.06);"><span>Activity Modifier</span><span id="activity-modifier" style="font-weight:600;">--</span></div><div style="display:flex;justify-content:space-between;padding:0.4rem 0;"><span>Clinical Trial Basis</span><span style="font-weight:600;">SURMOUNT-1</span></div></div><div style="margin-top:1.5rem;padding:1rem;border-radius:12px;background:rgba(var(--accent-rgb),0.04);border:1px solid rgba(var(--accent-rgb),0.1);"><div style="font-weight:600;margin-bottom:0.8rem;">Dose Titration Timeline</div><table style="width:100%;border-collapse:collapse;"><thead><tr style="border-bottom:1px solid rgba(255,255,255,0.1);"><th style="text-align:left;padding:0.4rem;">Weeks</th><th style="text-align:left;padding:0.4rem;">Dose</th><th style="text-align:left;padding:0.4rem;">Purpose</th></tr></thead><tbody id="titration-body"></tbody></table></div><div style="margin-top:1.5rem;padding:1rem;border-radius:12px;background:rgba(var(--accent-rgb),0.04);border:1px solid rgba(var(--accent-rgb),0.1);"><div style="font-weight:600;margin-bottom:0.8rem;">With Zepbound vs. Lifestyle Only</div><div style="display:flex;justify-content:space-between;padding:0.4rem 0;border-bottom:1px solid rgba(255,255,255,0.06);"><span>With Zepbound</span><span id="withMedLoss" style="color:var(--accent);font-weight:600;">--</span></div><div style="display:flex;justify-content:space-between;padding:0.4rem 0;"><span>Lifestyle Only</span><span id="withoutMedLoss" style="font-weight:600;">--</span></div></div><div style="margin-top:1.5rem;"><canvas id="chart"></canvas></div>',
        "breakdown": [],
    },

    "coach": {
        "title": "Here\u2019s what your result means",
        "container_id": "coachCard",
        "cta_text": "Have a question about your result?",
    },

    "js_file": "js/calculators/zepbound_weight_loss.js",

    "faq": [
        {"question": "How much weight can I lose on Zepbound?", "answer": "In SURMOUNT-1 (N=2,539), the 15 mg dose produced 22.5% average weight loss at 72 weeks. The 10 mg dose: 19.5%, 5 mg dose: 15%."},
        {"question": "What is the difference between Zepbound and Mounjaro?", "answer": "Same drug (tirzepatide) by Eli Lilly. Zepbound is FDA-approved for weight management; Mounjaro for type 2 diabetes. Dosing and mechanism are identical."},
        {"question": "How does Zepbound compare to Wegovy?", "answer": "Zepbound (tirzepatide) targets GIP + GLP-1; Wegovy (semaglutide) targets GLP-1 only. Zepbound produced up to 22.5% loss vs 14.9% for Wegovy."},
        {"question": "When will I start losing weight?", "answer": "Most notice weight loss within 4-8 weeks. Most rapid loss occurs between weeks 12-36 during dose escalation."},
        {"question": "Is Zepbound covered by insurance?", "answer": "Coverage varies. Many commercial plans cover anti-obesity medications. Eli Lilly offers a savings card for eligible patients."},
        {"question": "Is this based on real clinical trials?", "answer": "Yes. Projections are from SURMOUNT-1 (Jastreboff et al., NEJM 2022, N=2,539)."},
    ],

    "sources": [
        {"text": "Jastreboff AM, et al. Tirzepatide Once Weekly for the Treatment of Obesity. N Engl J Med. 2022;387(3):205-216. (SURMOUNT-1)", "url": "https://pubmed.ncbi.nlm.nih.gov/35658024/"},
        {"text": "Garvey WT, et al. Tirzepatide for obesity in people with type 2 diabetes (SURMOUNT-2). Lancet. 2023.", "url": "https://pubmed.ncbi.nlm.nih.gov/37385275/"},
        {"text": "Aronne LJ, et al. Continued Treatment With Tirzepatide (SURMOUNT-4). JAMA. 2024.", "url": "https://pubmed.ncbi.nlm.nih.gov/38078870/"},
        {"text": "Eli Lilly. Zepbound (tirzepatide) Prescribing Information. FDA.gov.", "url": "https://www.accessdata.fda.gov/drugsatfda_docs/label/2023/215256s000lbl.pdf"},
    ],

    "methodology": "<p>This calculator projects weight loss using dose-specific outcomes from SURMOUNT-1 (N=2,539). Base weight loss: 15% (5mg), 19.5% (10mg), 22.5% (15mg) at 72 weeks. Zepbound contains the same drug as Mounjaro (tirzepatide). Non-linear logarithmic scaling with activity adjustments.</p>",

    "llm_capsule": "Zepbound (tirzepatide) is the same drug as Mounjaro, FDA-approved for weight management. SURMOUNT-1: 15mg = 22.5%, 10mg = 19.5%, 5mg = 15% weight loss at 72 weeks.",

    "ask_pills": ["Zepbound vs Mounjaro", "Zepbound vs Wegovy", "Insurance coverage", "Side effects"],
    "ask_placeholder": "Type your question...",
}

register("zepbound_weight_loss", ZEPBOUND_WEIGHT_LOSS)

OZEMPIC_FACE = {
    "route": "/ozempic-face-calculator",
    "override_template": None,

    "seo": {
        "robots": "noindex, nofollow",
        "page_title": "Ozempic Face Risk Calculator \u2014 Predict Facial Volume Loss",
        "meta_description": "Free Ozempic face calculator estimates your risk of facial volume loss from GLP-1 weight loss medications. Based on clinical data on age, BMI, and rate of weight loss.",
        "og_title": "Ozempic Face Risk Calculator \u2013 Predict Facial Volume Loss",
        "og_description": "Free Ozempic face calculator estimates your risk of facial volume loss from GLP-1 weight loss medications. Based on clinical data on age, BMI, and rate of weight loss.",
        "schema_type": "MedicalWebPage",
        "schema_name": "Ozempic Face Calculator",
        "schema_description": "Free Ozempic face calculator estimates your risk of facial volume loss from GLP-1 weight loss medications. Based on clinical data on age, BMI, and rate of weight loss.",
        "schema_about": "Ozempic Face Calculator",
        "date_published": "2025-06-01",
        "date_modified": "2026-03-24",
    },

    "accent": "#f43f5e",
    "accent_rgb": "244,63,94",

    "hero": {
        "headline": "Ozempic Face Risk Calculator",
        "subtitle": "Estimate your risk of facial volume loss from GLP-1 weight loss medications",
    },

    "breadcrumb_category": {"name": "Weight Loss Medications", "url": "/weight-loss-medication-calculators"},

    "form": {
        "fields": [
            {"id": "units", "type": "radio_row", "label": "Units", "options": [
                {"value": "metric", "label": "Metric (kg/cm)", "selected": True},
                {"value": "imperial", "label": "Imperial (lb/ft/in)"},
            ]},
            {"id": "age", "type": "number", "label": "Age", "min": 18, "max": 100, "placeholder": "e.g. 45"},
            {"id": "weight-kg", "type": "number", "label": "Current Weight (kg)", "min": 30, "max": 300, "step": 0.1, "placeholder": "e.g. 80"},
            {"id": "weight-lb", "type": "number", "label": "Current Weight (lbs)", "min": 66, "max": 660, "step": 1, "placeholder": "e.g. 176"},
            {"id": "height-cm", "type": "number", "label": "Height (cm)", "min": 120, "max": 250, "placeholder": "e.g. 170"},
            {"type": "row", "fields": [
                {"id": "height-ft", "type": "number", "label": "Feet", "min": 3, "max": 8, "default": 5},
                {"id": "height-in", "type": "number", "label": "Inches", "min": 0, "max": 11, "default": 6},
            ]},
            {"id": "target-loss", "type": "select", "label": "Target Weight Loss", "options": [
                {"value": "5", "label": "5%"},
                {"value": "10", "label": "10%"},
                {"value": "15", "label": "15%", "selected": True},
                {"value": "20", "label": "20%"},
                {"value": "25", "label": "25%"},
            ]},
            {"id": "timeline", "type": "select", "label": "Weight Loss Timeline", "options": [
                {"value": "3", "label": "3 months (aggressive)"},
                {"value": "6", "label": "6 months"},
                {"value": "12", "label": "12 months (recommended)", "selected": True},
                {"value": "18", "label": "18 months (gradual)"},
            ]},
            {"id": "facial-fat", "type": "select", "label": "Current Facial Fat Assessment", "options": [
                {"value": "minimal", "label": "Minimal \u2014 lean/angular face"},
                {"value": "average", "label": "Average \u2014 normal fullness", "selected": True},
                {"value": "above", "label": "Above Average \u2014 noticeably full cheeks"},
                {"value": "full", "label": "Full/Round \u2014 very round face shape"},
            ]},
            {"id": "smoking", "type": "select", "label": "Do you smoke?", "options": [
                {"value": "no", "label": "No", "selected": True},
                {"value": "yes", "label": "Yes"},
            ]},
            {"id": "weight-flux", "type": "select", "label": "History of significant weight fluctuations?", "options": [
                {"value": "no", "label": "No", "selected": True},
                {"value": "yes", "label": "Yes"},
            ]},
        ],
        "submit_label": "Calculate Ozempic Face Risk",
    },

    "results": {
        "primary": {"id": "resultNumber", "unit": "risk score"},
        "verdict_id": "resultVerdict",
        "breakdown": [
            {"id": "dAge", "label": "Your Age"},
            {"id": "dBmi", "label": "Your BMI"},
            {"id": "dLoss", "label": "Weight Loss Target"},
            {"id": "dRate", "label": "Loss Rate"},
        ],
    },

    "coach": {
        "title": "Risk Factor Breakdown",
        "container_id": "coachCard",
        "cta_text": "Have a question about your risk?",
    },

    "js_file": "js/calculators/ozempic_face.js",

    "faq": [
        {"question": "What is Ozempic face?", "answer": "\"Ozempic face\" describes the gaunt, hollowed facial appearance that can result from rapid weight loss on GLP-1 receptor agonist medications like semaglutide (Ozempic, Wegovy) or tirzepatide (Mounjaro, Zepbound). It occurs because significant weight loss depletes the subcutaneous facial fat pads that give the face its youthful, full appearance. The term was popularized by New York dermatologist Dr. Paul Jarrod Frank."},
        {"question": "Is Ozempic face permanent?", "answer": "Facial volume loss from weight loss is not necessarily permanent but is difficult to reverse naturally. Some facial fat may return if weight is regained, though skin laxity may persist. Dermal fillers (hyaluronic acid) can restore volume temporarily, typically lasting 12-18 months. Autologous fat transfer offers more durable results. The best approach is prevention through gradual weight loss."},
        {"question": "Does everyone on Ozempic get Ozempic face?", "answer": "No. The severity varies significantly. Key determinants include age (patients over 40 are more susceptible), rate of weight loss, total weight lost (>15% increases visibility), baseline facial fat, genetics, smoking status, and sun exposure history. Many patients who lose weight gradually at younger ages experience minimal visible facial changes."},
        {"question": "How can I prevent Ozempic face while losing weight?", "answer": "Evidence-based prevention strategies include: losing weight gradually (under 0.5% body weight per week), maintaining high protein intake (1.2-1.6g/kg/day), using retinoid-based skincare, practicing facial exercises (a 2018 Northwestern study showed 30 min daily improved cheek fullness), rigorous SPF 30+ sun protection, and staying well-hydrated."},
        {"question": "At what age does Ozempic face risk increase significantly?", "answer": "Risk increases notably after age 40. Collagen production declines approximately 1% per year after age 30, and skin elasticity decreases progressively. By age 50, the skin has significantly reduced ability to retract and conform to reduced facial volume after fat loss."},
    ],

    "sources": [
        {"text": "Wilding JPH, Batterham RL, Calanna S, et al. Once-Weekly Semaglutide in Adults with Overweight or Obesity (STEP 1). N Engl J Med. 2021;384(11):989-1002.", "url": "https://pubmed.ncbi.nlm.nih.gov/33567185/"},
        {"text": "Alam M, Walter AJ, Geisler A, et al. Association of Facial Exercise With the Appearance of Aging. JAMA Dermatol. 2018;154(3):365-367.", "url": "https://pubmed.ncbi.nlm.nih.gov/29299578/"},
        {"text": "Ganceviciene R, Liakou AI, Theodoridis A, et al. Skin anti-aging strategies. Dermatoendocrinol. 2012;4(3):308-319.", "url": "https://pubmed.ncbi.nlm.nih.gov/23467476/"},
        {"text": "Varani J, Dame MK, Rittie L, et al. Decreased collagen production in chronologically aged skin. Am J Pathol. 2006;168(6):1861-1868.", "url": "https://pubmed.ncbi.nlm.nih.gov/16723701/"},
        {"text": "Morita A. Tobacco smoke causes premature skin aging. J Dermatol Sci. 2007;48(3):169-175.", "url": "https://pubmed.ncbi.nlm.nih.gov/17951030/"},
    ],

    "methodology": "<p>This calculator evaluates six evidence-based risk factors for facial volume loss during GLP-1-mediated weight loss, producing a composite score from 0 to 100. Age contributes up to 30 points, reflecting the approximately 1% annual decline in dermal collagen production after age 30 (Varani et al., 2006). Rate of weight loss contributes up to 30 points, based on STEP 1 trial data showing that rapid loss exceeding 1% body weight per week significantly increases facial hollowing (Wilding et al., 2021). BMI contributes up to 15 points, baseline facial fat up to 10 points, smoking status up to 8 points, and weight fluctuation history up to 7 points.</p><p>The weighting scheme is derived from clinical literature on facial aging and weight loss but has not been independently validated as a predictive instrument. Individual outcomes depend heavily on genetics, skin quality, sun exposure history, and other factors not captured by this model.</p>",

    "llm_capsule": "Ozempic face risk depends on six factors: age (up to 30 pts), weight loss speed (up to 30 pts), BMI (up to 15 pts), baseline facial fat (up to 10 pts), smoking (up to 8 pts), and weight fluctuation history (up to 7 pts). Total score 0-100 maps to Low (0-25), Moderate (26-50), High (51-75), Very High (76-100). Key prevention: lose weight gradually (<0.5% body weight/week), use retinoids, facial exercises, SPF 30+, and maintain 1.2-1.6g protein/kg/day.",

    "ask_pills": ["Is Ozempic face permanent?", "How to prevent it", "Dermal fillers", "Facial exercises"],
    "ask_placeholder": "e.g. Can facial exercises really help?",
}

register("ozempic_face", OZEMPIC_FACE)

SEMAGLUTIDE_RECONSTITUTION = {
    "route": "/semaglutide-reconstitution-calculator",
    "override_template": None,

    "seo": {
        "robots": "noindex, nofollow",
        "page_title": "Semaglutide Reconstitution Calculator \u2014 Mixing & Dosing",
        "meta_description": "Calculate exactly how many units to inject from your reconstituted semaglutide vial. Enter peptide amount, water volume, and desired dose to get precise syringe measurements.",
        "og_title": "Semaglutide Reconstitution Calculator \u2014 Mixing & Dosing Guide",
        "og_description": "Calculate the exact injection volume for your reconstituted semaglutide. Enter vial size, water volume, and dose to get units on your insulin syringe.",
        "schema_type": "MedicalWebPage",
        "schema_name": "Semaglutide Reconstitution Calculator",
        "schema_description": "Calculate injection volume in insulin syringe units from reconstituted semaglutide or tirzepatide vials. Enter peptide amount, bacteriostatic water volume, and desired dose.",
        "schema_about": "Semaglutide Reconstitution Calculator",
        "date_published": "2025-06-01",
        "date_modified": "2026-03-24",
    },

    "accent": "#14b8a6",
    "accent_rgb": "20,184,166",

    "hero": {
        "headline": "Semaglutide Reconstitution Calculator",
        "subtitle": "Calculate exactly how many units to inject from your reconstituted semaglutide vial",
    },

    "breadcrumb_category": {"name": "Weight Loss Medications", "url": "/weight-loss-medication-calculators"},

    "form": {
        "fields": [
            {"id": "vial-preset", "type": "select", "label": "Vial Preset", "options": [
                {"value": "custom", "label": "Custom"},
                {"value": "sema-2", "label": "Semaglutide 2 mg vial"},
                {"value": "sema-3", "label": "Semaglutide 3 mg vial"},
                {"value": "sema-5", "label": "Semaglutide 5 mg vial", "selected": True},
                {"value": "sema-10", "label": "Semaglutide 10 mg vial"},
                {"value": "tirz-5", "label": "Tirzepatide 5 mg vial"},
                {"value": "tirz-10", "label": "Tirzepatide 10 mg vial"},
                {"value": "tirz-15", "label": "Tirzepatide 15 mg vial"},
                {"value": "tirz-30", "label": "Tirzepatide 30 mg vial"},
            ]},
            {"type": "row", "fields": [
                {"id": "peptide-mg", "type": "number", "label": "Peptide in Vial (mg)", "min": 0, "step": 0.5, "default": 5, "placeholder": "e.g. 5"},
                {"id": "water-ml", "type": "number", "label": "BAC Water Added (mL)", "min": 0, "step": 0.5, "default": 2, "placeholder": "e.g. 2"},
            ]},
            {"type": "row", "fields": [
                {"id": "dose-mg", "type": "number", "label": "Desired Dose (mg)", "min": 0, "step": 0.05, "default": 0.25, "placeholder": "e.g. 0.25"},
                {"id": "syringe-type", "type": "select", "label": "Syringe Size", "options": [
                    {"value": "100", "label": "1 mL (100 units) \u2014 U-100"},
                    {"value": "50", "label": "0.5 mL (50 units) \u2014 U-100"},
                    {"value": "30", "label": "0.3 mL (30 units) \u2014 U-100"},
                ]},
            ]},
        ],
        "submit_label": "Calculate Injection Volume",
    },

    "results": {
        "primary": {"id": "resultNumber", "unit": "units to inject"},
        "verdict_id": "resultVerdict",
        "breakdown": [
            {"id": "dConcentration", "label": "Concentration"},
            {"id": "dVolume", "label": "Volume to Inject"},
            {"id": "dTick", "label": "Nearest Tick Mark"},
            {"id": "dDoses", "label": "Doses Per Vial"},
        ],
    },

    "coach": {
        "title": "Your reconstitution details",
        "container_id": "coachCard",
        "cta_text": "Have a question about reconstitution?",
    },

    "js_file": "js/calculators/semaglutide_reconstitution.js",

    "faq": [
        {"question": "What is bacteriostatic water and why do I need it?", "answer": "Bacteriostatic water (BAC water) is sterile water that contains 0.9% benzyl alcohol as a preservative. The benzyl alcohol prevents bacterial growth, making it safe to draw multiple doses from the same vial over 28 days. Regular sterile water lacks this preservative and should only be used for single-dose vials."},
        {"question": "How long does reconstituted semaglutide last?", "answer": "Reconstituted semaglutide with bacteriostatic water is typically stable for 28 days when refrigerated at 36-46\u00b0F (2-8\u00b0C). Do not freeze reconstituted solution, and discard if the solution becomes cloudy, discolored, or contains particles."},
        {"question": "Does it matter how much water I add?", "answer": "The total amount of peptide doesn't change regardless of how much water you add \u2014 you're just changing the concentration. More water means a more dilute solution (easier to measure small doses), while less water means a more concentrated solution (smaller injection volume). For most people, 2 mL per 5 mg vial is the sweet spot."},
        {"question": "What type of syringe should I use?", "answer": "Use U-100 insulin syringes. They come in 3 sizes: 30-unit (0.3 mL), 50-unit (0.5 mL), and 100-unit (1 mL). For most semaglutide doses with standard reconstitution, a 50-unit or 100-unit syringe works well. Use the smallest syringe that fits your dose for the most precise measurement."},
        {"question": "Can I use this calculator for tirzepatide (Mounjaro)?", "answer": "Yes. The reconstitution math is identical for all peptides \u2014 concentration equals peptide amount divided by water volume. The calculator includes tirzepatide vial presets. Note that tirzepatide follows a different titration schedule than semaglutide."},
        {"question": "What if I accidentally add too much or too little water?", "answer": "If you add more water than intended, the solution is simply more dilute \u2014 you'll need to inject a larger volume for the same dose. Update the water amount in this calculator and recalculate. If you add less water, the solution is more concentrated \u2014 inject less volume. The peptide amount doesn't change either way."},
    ],

    "sources": [
        {"text": "Novo Nordisk. Wegovy (semaglutide) Prescribing Information. FDA. 2023.", "url": "https://www.accessdata.fda.gov/drugsatfda_docs/label/2023/215256s007lbl.pdf"},
        {"text": "Wilding JPH, Batterham RL, Calanna S, et al. Once-Weekly Semaglutide in Adults with Overweight or Obesity (STEP 1). N Engl J Med. 2021;384(11):989-1002.", "url": "https://pubmed.ncbi.nlm.nih.gov/33567185/"},
        {"text": "USP <797> Pharmaceutical Compounding \u2014 Sterile Preparations. United States Pharmacopeia. 2023.", "url": "https://www.usp.org/compounding/general-chapter-797"},
        {"text": "Allen LV Jr. Basics of Compounding: Reconstituting Powders for Injection. Int J Pharm Compd. 2017;21(5):380-385.", "url": "https://pubmed.ncbi.nlm.nih.gov/28954817/"},
    ],

    "methodology": "<p>This calculator uses standard pharmaceutical reconstitution math. Concentration is calculated as the total peptide amount (mg) divided by the volume of bacteriostatic water added (mL), yielding mg/mL. The injection volume is then determined by dividing the desired dose (mg) by the concentration (mg/mL), giving the volume in mL. For insulin syringe units, the volume in mL is multiplied by 100 (since U-100 syringes have 100 units per mL). Doses per vial are calculated by dividing the total peptide amount by the dose per injection.</p><p>This calculator assumes complete dissolution of the lyophilized peptide and does not account for dead volume in the syringe or vial (typically 0.02-0.05 mL per injection). Actual injectable doses may be slightly less than calculated due to this dead space.</p>",

    "llm_capsule": "Semaglutide reconstitution: Concentration = peptide mg / water mL. Injection volume = dose mg / concentration. Syringe units = volume mL x 100 (U-100). Common: 5 mg vial + 2 mL BAC water = 2.5 mg/mL. At 0.25 mg dose = 10 units. Stable 28 days refrigerated. Titration: 0.25 mg weeks 1-4, 0.5 mg weeks 5-8, 1.0 mg weeks 9-12, 1.7 mg weeks 13-16, 2.4 mg maintenance.",

    "ask_pills": ["How much water to add", "Syringe sizes", "Storage instructions", "Titration schedule"],
    "ask_placeholder": "e.g. How long does reconstituted semaglutide last?",
}

register("semaglutide_reconstitution", SEMAGLUTIDE_RECONSTITUTION)

PEPTIDE_RECONSTITUTION = {
    "route": "/peptide-reconstitution-calculator",
    "override_template": None,

    "seo": {
        "robots": "noindex, nofollow",
        "page_title": "Peptide Reconstitution Calculator \u2014 Mixing & Dosing",
        "meta_description": "Calculate exactly how many units to inject from your reconstituted peptide vial. Enter peptide amount, water volume, and desired dose to get precise syringe measurements.",
        "og_title": "Peptide Reconstitution Calculator \u2014 Mixing & Dosing Guide",
        "og_description": "Calculate the exact injection volume for your reconstituted peptide. Enter vial size, water volume, and dose to get units on your insulin syringe.",
        "schema_type": "MedicalWebPage",
        "schema_name": "Peptide Reconstitution Calculator",
        "schema_description": "Calculate injection volume in insulin syringe units from reconstituted peptide vials. Enter peptide amount, bacteriostatic water volume, and desired dose.",
        "schema_about": "Peptide Reconstitution Calculator",
        "date_published": "2025-06-01",
        "date_modified": "2026-03-24",
    },

    "accent": "#14b8a6",
    "accent_rgb": "20,184,166",

    "hero": {
        "headline": "Peptide Reconstitution Calculator",
        "subtitle": "Calculate exactly how many units to inject from your reconstituted peptide vial",
    },

    "breadcrumb_category": {"name": "Weight Loss Medications", "url": "/weight-loss-medication-calculators"},

    "form": {
        "fields": [
            {"id": "vial-preset", "type": "select", "label": "Vial Preset", "options": [
                {"value": "custom", "label": "Custom"},
                {"value": "sema-2", "label": "Semaglutide 2 mg vial"},
                {"value": "sema-3", "label": "Semaglutide 3 mg vial"},
                {"value": "sema-5", "label": "Semaglutide 5 mg vial", "selected": True},
                {"value": "sema-10", "label": "Semaglutide 10 mg vial"},
                {"value": "tirz-5", "label": "Tirzepatide 5 mg vial"},
                {"value": "tirz-10", "label": "Tirzepatide 10 mg vial"},
                {"value": "tirz-15", "label": "Tirzepatide 15 mg vial"},
                {"value": "tirz-30", "label": "Tirzepatide 30 mg vial"},
            ]},
            {"type": "row", "fields": [
                {"id": "peptide-mg", "type": "number", "label": "Peptide in Vial (mg)", "min": 0, "step": 0.5, "default": 5, "placeholder": "e.g. 5"},
                {"id": "water-ml", "type": "number", "label": "BAC Water Added (mL)", "min": 0, "step": 0.5, "default": 2, "placeholder": "e.g. 2"},
            ]},
            {"type": "row", "fields": [
                {"id": "dose-mg", "type": "number", "label": "Desired Dose (mg)", "min": 0, "step": 0.05, "default": 0.25, "placeholder": "e.g. 0.25"},
                {"id": "syringe-type", "type": "select", "label": "Syringe Size", "options": [
                    {"value": "100", "label": "1 mL (100 units) \u2014 U-100"},
                    {"value": "50", "label": "0.5 mL (50 units) \u2014 U-100"},
                    {"value": "30", "label": "0.3 mL (30 units) \u2014 U-100"},
                ]},
            ]},
        ],
        "submit_label": "Calculate Injection Volume",
    },

    "results": {
        "primary": {"id": "resultNumber", "unit": "units to inject"},
        "verdict_id": "resultVerdict",
        "breakdown": [
            {"id": "dConcentration", "label": "Concentration"},
            {"id": "dVolume", "label": "Volume to Inject"},
            {"id": "dTick", "label": "Nearest Tick Mark"},
            {"id": "dDoses", "label": "Doses Per Vial"},
        ],
    },

    "coach": {
        "title": "Your reconstitution details",
        "container_id": "coachCard",
        "cta_text": "Have a question about reconstitution?",
    },

    "js_file": "js/calculators/peptide_reconstitution.js",

    "faq": [
        {"question": "What is bacteriostatic water and why do I need it?", "answer": "Bacteriostatic water (BAC water) is sterile water that contains 0.9% benzyl alcohol as a preservative. The benzyl alcohol prevents bacterial growth, making it safe to draw multiple doses from the same vial over 28 days. Regular sterile water lacks this preservative and should only be used for single-dose vials."},
        {"question": "How long does reconstituted peptide last?", "answer": "Reconstituted peptides with bacteriostatic water are typically stable for 28 days when refrigerated at 36-46\u00b0F (2-8\u00b0C). Do not freeze reconstituted solution, and discard if the solution becomes cloudy, discolored, or contains particles."},
        {"question": "Does it matter how much water I add?", "answer": "The total amount of peptide doesn't change regardless of how much water you add \u2014 you're just changing the concentration. More water means a more dilute solution (easier to measure small doses), while less water means a more concentrated solution (smaller injection volume). For most people, 2 mL per 5 mg vial is the sweet spot."},
        {"question": "What type of syringe should I use?", "answer": "Use U-100 insulin syringes. They come in 3 sizes: 30-unit (0.3 mL), 50-unit (0.5 mL), and 100-unit (1 mL). Use the smallest syringe that fits your dose for the most precise measurement. All U-100 syringes measure 100 units per mL."},
        {"question": "Can I use this calculator for tirzepatide?", "answer": "Yes. The reconstitution math is identical for all peptides \u2014 concentration equals peptide amount divided by water volume. The calculator includes tirzepatide vial presets."},
    ],

    "sources": [
        {"text": "Novo Nordisk. Wegovy (semaglutide) Prescribing Information. FDA. 2023.", "url": "https://www.accessdata.fda.gov/drugsatfda_docs/label/2023/215256s007lbl.pdf"},
        {"text": "USP <797> Pharmaceutical Compounding \u2014 Sterile Preparations. United States Pharmacopeia. 2023.", "url": "https://www.usp.org/compounding/general-chapter-797"},
        {"text": "Allen LV Jr. Basics of Compounding: Reconstituting Powders for Injection. Int J Pharm Compd. 2017;21(5):380-385.", "url": "https://pubmed.ncbi.nlm.nih.gov/28954817/"},
    ],

    "methodology": "<p>This calculator uses standard pharmaceutical reconstitution math. Concentration is calculated as the total peptide amount (mg) divided by the volume of bacteriostatic water added (mL), yielding mg/mL. The injection volume is then determined by dividing the desired dose (mg) by the concentration (mg/mL), giving the volume in mL. For insulin syringe units, the volume in mL is multiplied by 100 (since U-100 syringes have 100 units per mL).</p><p>This calculator assumes complete dissolution of the lyophilized peptide and does not account for dead volume in the syringe or vial (typically 0.02-0.05 mL per injection).</p>",

    "llm_capsule": "Peptide reconstitution: Concentration = peptide mg / water mL. Injection volume = dose mg / concentration. Syringe units = volume mL x 100 (U-100). Common: 5 mg vial + 2 mL BAC water = 2.5 mg/mL. At 0.25 mg dose = 10 units. Stable 28 days refrigerated.",

    "ask_pills": ["How much water to add", "Syringe sizes", "Storage instructions", "Titration schedule"],
    "ask_placeholder": "e.g. How long does reconstituted peptide last?",
}

register("peptide_reconstitution", PEPTIDE_RECONSTITUTION)

HCG_INJECTION = {
    "route": "/hcg-injection-dosage-calculator",
    "override_template": None,

    "seo": {
        "robots": "noindex, nofollow",
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
    },

    "accent": "#06b6d4",
    "accent_rgb": "6,182,212",

    "hero": {
        "headline": "How much <span>HCG</span> to inject?",
        "subtitle": "Calculate your exact injection volume",
    },

    "breadcrumb_category": {"name": "Weight Loss Medications", "url": "/weight-loss-medication-calculators"},

    "form": {
        "fields": [
            {"id": "vial-strength", "type": "select", "label": "Vial Strength (IU)", "options": [
                {"value": "1500", "label": "1,500 IU"},
                {"value": "2000", "label": "2,000 IU"},
                {"value": "5000", "label": "5,000 IU", "selected": True},
                {"value": "10000", "label": "10,000 IU"},
                {"value": "custom", "label": "Custom"},
            ]},
            {"id": "custom-vial", "type": "number", "label": "Custom Vial Strength (IU)", "placeholder": "e.g. 6000", "min": 1, "step": 1},
            {"id": "water-volume", "type": "select", "label": "Bacteriostatic Water (mL)", "options": [
                {"value": "1", "label": "1 mL"},
                {"value": "2", "label": "2 mL", "selected": True},
                {"value": "3", "label": "3 mL"},
                {"value": "5", "label": "5 mL"},
                {"value": "custom", "label": "Custom"},
            ]},
            {"id": "custom-water", "type": "number", "label": "Custom Water Volume (mL)", "placeholder": "e.g. 2.5", "min": 0.1, "step": 0.1},
            {"id": "desired-dose", "type": "number", "label": "Desired Dose (IU)", "placeholder": "e.g. 250", "min": 1, "step": 1, "hint": "Enter the dose prescribed by your doctor in International Units (IU)."},
        ],
        "submit_label": "Calculate Injection Volume",
    },

    "results": {
        "primary": {"id": "dose-result", "unit": "Injection Volume"},
        "verdict_id": "dose-description",
        "breakdown": [
            {"id": "comp-volume", "label": "Injection Volume"},
            {"id": "comp-units", "label": "Syringe Units"},
            {"id": "comp-doses", "label": "Doses per Vial"},
        ],
    },

    "coach": {
        "title": "What this means for you",
        "container_id": "coachCard",
        "cta_text": "Have a question about your result?",
    },

    "js_file": "js/calculators/hcg_injection.js",

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
