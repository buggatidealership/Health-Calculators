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
