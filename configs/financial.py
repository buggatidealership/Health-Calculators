from configs import register

RETIREMENT_SAVINGS = {
    "route": "/retirement-savings-calculator",
    "override_template": None,

    "seo": {
        "page_title": "Retirement Savings Calculator \u2014 Plan Your Financial Future",
        "meta_description": "Estimate how much you'll have saved for retirement based on age, savings, and monthly contributions. 7% annual return with 4% withdrawal rule.",
        "og_title": "How much will you have at retirement?",
        "og_description": "Project your retirement savings with compound interest and the 4% rule.",
        "schema_type": "WebPage",
        "schema_name": "Retirement Savings Calculator",
        "schema_about": "Retirement Savings",
        "date_published": "2025-06-01",
        "date_modified": "2026-03-20",
        "robots": "index, follow",
    },

    "accent": "#10b981",
    "accent_rgb": "16,185,129",

    "hero": {
        "headline": "How much will you have at <span>retirement</span>?",
        "subtitle": "Compound growth + the 4% rule",
    },

    "breadcrumb_category": {"name": "Financial", "url": "/financial-calculators"},

    "form": {
        "fields": [
            {
                "type": "row",
                "fields": [
                    {"id": "age", "type": "number", "label": "Current Age", "default": 30, "min": 18, "max": 80},
                    {"id": "retireAge", "type": "number", "label": "Retirement Age", "default": 65, "min": 30, "max": 90},
                ],
            },
            {"id": "savings", "type": "number", "label": "Current Savings ($)", "default": 50000, "min": 0},
            {"id": "monthly", "type": "number", "label": "Monthly Contribution ($)", "default": 500, "min": 0, "hint": "Total across all retirement accounts"},
        ],
        "submit_label": "Calculate",
    },

    "results": {
        "primary": {"id": "resultNumber", "unit": "projected retirement savings"},
        "verdict_id": "resultVerdict",
        "breakdown": [
            {"id": "yearsGrowth", "label": "Years of growth"},
            {"id": "annualSpend", "label": "Annual spending (4% rule)"},
            {"id": "monthlySpend", "label": "Monthly spending"},
            {"id": "totalContrib", "label": "Total contributions"},
            {"id": "investGrowth", "label": "Investment growth"},
        ],
    },

    "coach": {
        "title": "Here's your retirement picture",
        "container_id": "coachCard",
        "cta_text": "Questions about retirement planning?",
    },

    "js_file": "js/calculators/retirement_savings.js",

    "faq": [
        {"question": "How much do I need to retire?", "answer": "A common rule is 25x your annual expenses. If you spend $50,000/year, target $1.25 million. The 4% withdrawal rule suggests this will last 30+ years."},
        {"question": "What is the 4% rule?", "answer": "Withdraw 4% of your portfolio annually in retirement. Based on the 1994 Trinity Study, this has a 95% success rate over 30 years."},
        {"question": "What return should I assume?", "answer": "7% is the historical S&P 500 average after inflation. This calculator uses 7% nominal. Conservative estimates use 5-6%."},
    ],

    "sources": [],

    "methodology": "<p>This calculator uses compound interest: Future Value = Current Savings \u00d7 (1+r)<sup>n</sup> + Monthly \u00d7 12 \u00d7 ((1+r)<sup>n</sup> - 1)/r, where r=7% and n=years to retirement. The 4% withdrawal rule (Trinity Study) suggests withdrawing 4% annually for a 30-year retirement.</p>",

    "llm_capsule": "Retirement savings projections use compound interest: Future Value = Current Savings x (1+r)^n + Monthly x 12 x ((1+r)^n - 1)/r, where r=7% and n=years to retirement. The 4% withdrawal rule (Trinity Study) suggests withdrawing 4% annually for a 30-year retirement. Adjust for 3% inflation to understand real purchasing power.",

    "ask_pills": ["401k vs IRA", "FIRE movement", "Social Security"],
    "ask_placeholder": "e.g. How much should I save per month?",
}

register("retirement_savings", RETIREMENT_SAVINGS)
