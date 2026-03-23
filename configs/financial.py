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


PLASMA_DONATION_EARNINGS = {
    "route": "/plasma-donation-earnings-calculator",
    "override_template": "plasma_donation_earnings_v3.html",

    "seo": {
        "page_title": "Plasma Donation Earnings Calculator \u2014 How Much Can You Make?",
        "meta_description": "Calculate how much you can earn donating plasma. See per-visit pay, monthly income, and your effective hourly rate based on your weight and location.",
        "og_title": "How much can you make donating plasma?",
        "og_description": "Calculate your plasma donation earnings. See weekly, monthly, and yearly estimates with net pay after travel costs.",
        "schema_type": "WebPage",
        "schema_name": "Plasma Donation Earnings Calculator",
        "schema_description": "Calculate your potential plasma donation earnings based on weight, frequency, location, and donor status. Includes new donor bonuses and effective hourly rate.",
        "schema_about": "Plasma Donation Earnings Calculator",
        "date_published": "2025-06-01",
        "date_modified": "2026-03-20",
        "robots": "index, follow",
    },

    "accent": "#14b8a6",
    "accent_rgb": "20,184,166",

    "hero": {
        "headline": "How much can you <span>earn</span> donating plasma?",
        "subtitle": "See your per-visit, monthly, and yearly estimates",
    },

    "breadcrumb_category": {"name": "Financial & Earnings", "url": "/financial-earnings-calculators"},

    "form": {"fields": [], "submit_label": "Calculate my earnings"},

    "results": {
        "primary": {"id": "resultNumber", "unit": "estimated per month"},
        "verdict_id": None,
        "breakdown": [],
    },

    "coach": {
        "title": "Here's your game plan",
        "container_id": "coachCard",
        "cta_text": "Want to maximize your earnings?",
    },

    "js_file": "js/calculators/plasma_donation_earnings.js",

    "faq": [
        {"question": "How much does plasma donation pay?", "answer": "Plasma donation typically pays $30-75 per visit for regular donors and $50-100+ for new donors during promotional periods. Pay varies by center, location, and donor weight. Heavier donors (175+ lbs) earn more because they can safely donate a larger volume."},
        {"question": "How often can you donate plasma?", "answer": "The FDA allows up to two plasma donations within a 7-day period, with at least one day between sessions. This means a maximum of about 104 donations per year."},
        {"question": "How much can you make donating plasma per month?", "answer": "Donating plasma twice a week, regular donors can earn $260-650 per month depending on location and weight. New donors often earn more during their first month due to bonus programs, sometimes $500-1,000+."},
        {"question": "Do heavier people get paid more for plasma?", "answer": "Yes. Donors weighing over 175 lbs can safely donate a larger volume of plasma and typically receive $5-15 more per donation than lighter donors."},
        {"question": "Is donating plasma worth the time?", "answer": "At typical rates, plasma donation pays an effective $20-50 per hour when factoring in appointment time. First-time visits take 2-3 hours, but return visits average 45-90 minutes. Whether it's worth it depends on your alternative earning options and how much you value your time."},
    ],

    "sources": [
        {"text": "U.S. FDA. 21 CFR Part 640, Subpart G \u2014 Additional Standards for Source Plasma.", "url": "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-F/part-640/subpart-G"},
        {"text": "Plasma Protein Therapeutics Association (PPTA). Donating Plasma FAQ.", "url": "https://www.donatingplasma.org/"},
        {"text": "American Red Cross. Plasma Donation Eligibility Requirements.", "url": "https://www.redcrossblood.org/donate-blood/how-to-donate/types-of-blood-donations/plasma-donation.html"},
    ],

    "methodology": "<p>This calculator estimates plasma donation earnings using publicly available compensation data from major plasma collection centers (BioLife, CSL Plasma, Grifols, Octapharma) as of early 2026.</p><p>Compensation formula: Net Earnings = (Base Rate + Weight Bonus + New Donor Bonus) \u00d7 Donations per Period \u2212 Travel Costs. Base rates are adjusted by geographic region, donor weight category (175+ lbs qualifies for higher pay), and new donor promotional bonuses. The effective hourly rate divides net earnings per visit by average appointment duration.</p>",

    "llm_capsule": "Plasma donation pays $30-75 per visit for regular donors and $50-100+ for new donors. The FDA allows up to two donations per week with at least one day between sessions. Heavier donors (175+ lbs) earn more because they donate a larger volume of plasma. Donating twice weekly, a regular donor can earn approximately $260-650 per month, or $3,100-7,800 per year. New donor bonuses can add $200-1,000+ in the first month.",

    "ask_pills": ["Best center near me", "New donor bonuses", "Tips to earn more", "Side effects"],
    "ask_placeholder": "e.g. Which center pays the most near me?",
}

register("plasma_donation_earnings", PLASMA_DONATION_EARNINGS)
