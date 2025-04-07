import os
import logging
from flask import Flask, render_template, send_from_directory, redirect

# Configure logging
logging.basicConfig(level=logging.DEBUG)

# Create Flask app
app = Flask(__name__)
app.secret_key = os.environ.get("SESSION_SECRET", "default_secret_key")

cards = [
    {
        "title": "Army Body Fat Calculator",
        "url": "/army-body-fat-calculator",
        "summary": "Estimate your body fat percentage using the U.S. Army tape test method. Based on gender, age, height, neck, and waist measurements.",
        "icon": "⭐",
        "cta": "Calculate Body Fat",
        "color": "blue"
    },
    {
        "title": "Chipotle Nutrition Calculator",
        "url": "/chipotle-nutrition-calculator",
        "summary": "Build your Chipotle order and see real-time nutrition facts: calories, protein, carbs, fat, and fiber. Includes all protein, toppings, and sides.",
        "icon": "🌯",
        "cta": "Calculate Nutrition",
        "color": "green"
    },
    {
        "title": "Starbucks Nutrition Calculator",
        "url": "/starbucks-nutrition-calculator",
        "summary": "Customize any Starbucks drink and instantly see calories, protein, carbs, fat, and sugar. Includes milk swaps, size changes, syrups, and toppings.",
        "icon": "☕",
        "cta": "Calculate Nutrition",
        "color": "green"
    },
    {
        "title": "BAC Calculator",
        "url": "/bac-calculator",
        "summary": "Estimate your blood alcohol content based on drinks consumed, weight, gender, and time. Understand impairment levels and time to sobriety.",
        "icon": "🍷",
        "cta": "Calculate BAC",
        "color": "purple"
    },
    {
        "title": "Carb Cycling Calculator",
        "url": "/carb-cycling-calculator",
        "summary": "Customize your high, low, and medium carb days based on your TDEE and body composition goals with our carb cycling calculator.",
        "icon": "🍽️",
        "cta": "Create Carb Cycle",
        "color": "orange"
    },
    {
        "title": "IVF Due Date Calculator",
        "url": "/ivf-due-date-calculator",
        "summary": "Accurately predict your baby's due date after IVF treatment with our specialized calculator for both fresh and frozen embryo transfers.",
        "icon": "👶",
        "cta": "Calculate Due Date",
        "color": "pink"
    },
    {
        "title": "Retirement Savings Calculator",
        "url": "/retirement-savings-calculator",
        "summary": "Estimate how much you'll have saved for retirement and your safe withdrawal rate based on current savings and contributions.",
        "icon": "💰",
        "cta": "Plan Your Retirement",
        "color": "green"
    },
    {
        "title": "TDEE Calculator",
        "url": "/tdee-calculator",
        "summary": "Estimate your Total Daily Energy Expenditure to determine maintenance calories and create effective weight management plans.",
        "icon": "🔥",
        "cta": "Calculate TDEE",
        "color": "orange"
    },
    {
        "title": "Ideal Body Weight Calculator",
        "url": "/ideal-body-weight-calculator",
        "summary": "Calculate your ideal body weight range based on height, gender, and frame size using multiple evidence-based formulas.",
        "icon": "⚖️",
        "cta": "Calculate Weight",
        "color": "blue"
    },
    {
        "title": "Alcohol Impact Calculator",
        "url": "/alcohol-impact-calculator",
        "summary": "Estimate how alcohol affects your sleep quality, next-day productivity, liver health, and hydration.",
        "icon": "🍷",
        "cta": "Calculate Impact",
        "color": "red"
    },
    {
        "title": "Baldness Risk Calculator",
        "url": "/baldness-risk-calculator",
        "summary": "Estimate your risk of going bald based on family history, age, lifestyle, and health factors.",
        "icon": "👨‍🦲",
        "cta": "Predict Hair Loss",
        "color": "purple"
    },
    {
        "title": "Newborn Weight Loss Calculator",
        "url": "/newborn-weight-loss-calculator",
        "summary": "Track and assess weight loss in newborns during the first days after birth based on clinical guidelines.",
        "icon": "👶",
        "cta": "Calculate Weight Loss",
        "color": "blue"
    },
    {
        "title": "Dog Pregnancy Due-Date Calculator",
        "url": "/dog-pregnancy-due-date-calculator",
        "summary": "Estimate your dog's whelping date based on breeding date with this veterinary-backed calculator.",
        "icon": "🐕",
        "cta": "Calculate Due Date",
        "color": "teal"
    },
    {
        "title": "CC to Bra Size Calculator",
        "url": "/cc-to-bra-size-calculator",
        "summary": "Convert breast implant volume (CCs) to estimated bra cup size with this plastic surgery calculator.",
        "icon": "📏",
        "cta": "Calculate Cup Size",
        "color": "purple"
    },
    {
        "title": "Liposuction Weight Loss Calculator",
        "url": "/liposuction-weight-loss-calculator",
        "summary": "Calculate how much fat and weight you might lose with liposuction, and what it may cost.",
        "icon": "🩺",
        "cta": "Estimate Results",
        "color": "teal"
    },
    {
        "title": "Lip Filler Cost Calculator",
        "url": "/lip-filler-cost-calculator",
        "summary": "Estimate the cost of lip fillers based on volume, brand, and injector type for your procedure.",
        "icon": "💋",
        "cta": "Calculate Cost",
        "color": "pink"
    },
    {
        "title": "Adult Height Predictor Calculator",
        "url": "/adult-height-predictor-calculator",
        "summary": "Predict a child's future adult height based on their age, current height, gender, and parental heights.",
        "icon": "📏",
        "cta": "Predict Height",
        "color": "green"
    },
    {
        "title": "Child Growth Calculator", 
        "url": "/child-growth-calculator",
        "summary": "Track your child's height, weight, and BMI percentile with age-based charts.",
        "icon": "📏",
        "cta": "Track Growth",
        "color": "green"
    },
    {
        "title": "Female Fertility Calculator",
        "url": "/female-fertility-calculator",
        "summary": "Predict your most fertile days and ovulation window based on your menstrual cycle.",
        "icon": "🌸",
        "cta": "Find Fertile Days",
        "color": "pink"
    },
    {
        "title": "Breast Implant Calculator",
        "url": "/breast-implant-calculator",
        "summary": "Find your ideal implant size based on your measurements and goals.",
        "icon": "💗",
        "cta": "Calculate Implant Size",
        "color": "purple"
    },
    {
        "title": "Ozempic Weight Loss Calculator",
        "url": "/ozempic-weight-loss-calculator",
        "summary": "Estimate your fat loss and BMI reduction while taking semaglutide (Ozempic/Wegovy).",
        "icon": "💊",
        "cta": "Estimate Fat Loss",
        "color": "blue"
    },
    {
        "title": "Botox Dosage Calculator",
        "url": "/botox-dosage-calculator",
        "summary": "Determine the appropriate Botox units for different treatment areas.",
        "icon": "💉",
        "cta": "Calculate Botox Units",
        "color": "teal"
    },
    {
        "title": "Creatine Hydration Calculator",
        "url": "/creatine-water-calculator",
        "summary": "Calculate optimal water intake when using creatine supplements.",
        "icon": "💧",
        "cta": "Calculate Hydration",
        "color": "yellow"
    },
    {
        "title": "Vitamin D Intake Calculator",
        "url": "/vitamin-d-intake-calculator",
        "summary": "Determine your ideal vitamin D supplementation based on lifestyle factors.",
        "icon": "☀️",
        "cta": "Calculate Intake",
        "color": "red"
    },
    {
        "title": "Lifespan Calculator",
        "url": "/lifespan-longevity-calculator",
        "summary": "Estimate your life expectancy based on health and lifestyle factors.",
        "icon": "❤️",
        "cta": "Check Your Lifespan",
        "color": "green"
    },
    {
        "title": "Fasting Weight Loss Calculator",
        "url": "/fasting-weight-loss-calculator",
        "summary": "Calculate potential weight loss from intermittent fasting protocols.",
        "icon": "⏱️",
        "cta": "Calculate Weight Loss",
        "color": "orange"
    },
    {
        "title": "Caloric & Macronutrient Calculator",
        "url": "/caloric-intake-macronutrient-calculator",
        "summary": "Calculate your daily caloric needs and optimal macronutrient ratios.",
        "icon": "🍎",
        "cta": "Calculate Your Calories",
        "color": "blue"
    }
]

@app.route('/')
def home():
    schema_name = "Longevity Calculator - Health & Wellness Calculators"
    schema_description = "Explore our collection of science-based health calculators for nutrition, longevity, fitness, and wellness. Get personalized insights to optimize your health."
    schema_url = "/"
    return render_template(
        'home.html', 
        is_homepage=True, 
        cards=cards,
        schema_name=schema_name,
        schema_description=schema_description,
        schema_url=schema_url
    )

@app.route('/tdee-calculator')
def tdee_calculator():
    schema_name = "TDEE Calculator"
    schema_description = "Estimate your Total Daily Energy Expenditure (TDEE) using age, weight, height, gender, and activity level. Calculate how many calories you burn daily."
    schema_url = "/tdee-calculator"
    return render_template(
        'tdee_calculator.html', 
        is_homepage=False,
        schema_name=schema_name,
        schema_description=schema_description,
        schema_url=schema_url
    )

@app.route('/caloric-intake-macronutrient-calculator')
def caloric_macronutrient_calculator():
    schema_name = "Caloric Intake & Macronutrient Calculator"
    schema_description = "Calculate your daily caloric needs and macronutrient breakdown with our free, science-based calculator. Personalize for weight loss, maintenance, or muscle gain."
    schema_url = "/caloric-intake-macronutrient-calculator"
    return render_template(
        'caloric_macronutrient_calculator.html', 
        is_homepage=False,
        schema_name=schema_name,
        schema_description=schema_description,
        schema_url=schema_url
    )

@app.route('/botox-dosage-calculator')
def botox_calculator():
    schema_name = "Botox Dosage Calculator"
    schema_description = "Determine the appropriate Botox units for different treatment areas with our free calculator. Get personalized dosage estimates based on treatment intensity."
    schema_url = "/botox-dosage-calculator"
    return render_template(
        'botox_calculator.html', 
        is_homepage=False,
        schema_name=schema_name,
        schema_description=schema_description,
        schema_url=schema_url
    )

@app.route('/lifespan-longevity-calculator')
def lifespan_calculator():
    schema_name = "Lifespan Calculator"
    schema_description = "Estimate your life expectancy based on health and lifestyle factors with our evidence-based longevity calculator. Get personalized insights into how your habits affect your lifespan."
    schema_url = "/lifespan-longevity-calculator"
    return render_template(
        'lifespan_calculator.html', 
        is_homepage=False,
        schema_name=schema_name,
        schema_description=schema_description,
        schema_url=schema_url
    )

@app.route('/creatine-water-calculator')
def creatine_water_calculator():
    schema_name = "Creatine Hydration Calculator"
    schema_description = "Calculate optimal water intake when using creatine supplements. Get personalized hydration recommendations based on your weight, activity level, and creatine dosage."
    schema_url = "/creatine-water-calculator"
    return render_template(
        'creatine_water_calculator.html', 
        is_homepage=False,
        schema_name=schema_name,
        schema_description=schema_description,
        schema_url=schema_url
    )

@app.route('/breast-implant-calculator')
def breast_implant_calculator():
    schema_name = "Breast Implant Calculator"
    schema_description = "Find your ideal implant size based on your measurements and goals. Get personalized recommendations for breast implant volume, projection, and diameter."
    schema_url = "/breast-implant-calculator"
    return render_template(
        'breast_implant_calculator.html', 
        is_homepage=False,
        schema_name=schema_name,
        schema_description=schema_description,
        schema_url=schema_url
    )

@app.route('/vitamin-d-intake-calculator')
def vitamin_d_intake_calculator():
    schema_name = "Vitamin D Intake Calculator"
    schema_description = "Determine your ideal vitamin D supplementation based on lifestyle factors. Get personalized recommendations for optimal vitamin D intake based on sun exposure, diet, and other factors."
    schema_url = "/vitamin-d-intake-calculator"
    return render_template(
        'vitamin_d_intake_calculator.html', 
        is_homepage=False,
        schema_name=schema_name,
        schema_description=schema_description,
        schema_url=schema_url
    )

@app.route('/ivf-due-date-calculator')
def ivf_due_date_calculator():
    schema_name = "IVF Due Date Calculator"
    schema_description = "Estimate your baby's due date using IVF transfer or retrieval date. Supports 3-day, 5-day transfers, FET, and egg retrieval inputs."
    schema_url = "/ivf-due-date-calculator"
    return render_template(
        'ivf_due_date_calculator.html',
        is_homepage=False,
        schema_name=schema_name,
        schema_description=schema_description,
        schema_url=schema_url
    )

@app.route('/carb-cycling-calculator')
def carb_cycling_calculator():
    schema_name = "Carb Cycling Calculator"
    schema_description = "Customize your high, low, and medium carb days based on your TDEE and body composition goals with our carb cycling calculator."
    schema_url = "/carb-cycling-calculator"
    return render_template(
        'carb_cycling_calculator.html',
        is_homepage=False,
        schema_name=schema_name,
        schema_description=schema_description,
        schema_url=schema_url
    )

@app.route('/retirement-savings-calculator')
def retirement_savings_calculator():
    schema_name = "Retirement Savings Calculator"
    schema_description = "Estimate how much you'll need to retire comfortably. Calculate your target retirement savings based on age, income, expected expenses, and investment growth."
    schema_url = "/retirement-savings-calculator"
    return render_template(
        'retirement_savings_calculator.html',
        is_homepage=False,
        schema_name=schema_name,
        schema_description=schema_description,
        schema_url=schema_url
    )

@app.route('/ideal-body-weight-calculator')
def ideal_body_weight_calculator():
    schema_name = "Ideal Body Weight Calculator"
    schema_description = "Calculate your ideal body weight based on height, gender, and frame size using evidence-based formulas like Devine, Robinson, and Miller."
    schema_url = "/ideal-body-weight-calculator"
    return render_template(
        'ideal_body_weight_calculator.html',
        is_homepage=False,
        schema_name=schema_name,
        schema_description=schema_description,
        schema_url=schema_url
    )

@app.route('/fasting-weight-loss-calculator')
def fasting_weight_loss_calculator():
    schema_name = "Fasting Weight Loss Calculator"
    schema_description = "Calculate potential weight loss from intermittent fasting protocols. Get personalized estimates for fat loss based on your fasting schedule, body composition, and activity level."
    schema_url = "/fasting-weight-loss-calculator"
    return render_template(
        'fasting_weight_loss_calculator.html', 
        is_homepage=False,
        schema_name=schema_name,
        schema_description=schema_description,
        schema_url=schema_url
    )

@app.route('/ozempic-weight-loss-calculator')
def ozempic_weight_loss_calculator():
    schema_name = "Ozempic Weight Loss Calculator"
    schema_description = "Estimate your fat loss and BMI reduction while taking semaglutide (Ozempic/Wegovy). Get personalized projections based on clinical data and your individual profile."
    schema_url = "/ozempic-weight-loss-calculator"
    return render_template(
        'ozempic_weight_loss_calculator.html', 
        is_homepage=False,
        schema_name=schema_name,
        schema_description=schema_description,
        schema_url=schema_url
    )

articles = [
    {
        "title": "How to Use the Chipotle Nutrition Calculator (Macros, Calories & Meal Hacks)",
        "url": "/resources/chipotle-nutrition-guide",
        "summary": "Track your Chipotle meal macros. Learn how to reduce calories, sugar, and carbs with our calculator-based guide.",
        "icon": "🌯",
        "cta": "Read Guide",
        "color": "green"
    },
    {
        "title": "How to Customize Your Starbucks Drink (Macros, Calories & Sugar Explained)",
        "url": "/resources/starbucks-nutrition-guide",
        "summary": "Decode your Starbucks drink nutrition. Learn how to adjust calories, macros, and sugar with our calculator-backed customization guide.",
        "icon": "☕",
        "cta": "Read Guide",
        "color": "green"
    },
    {
        "title": "How to Use the Army Body Fat Calculator (Tape Test Explained)",
        "url": "/resources/army-body-fat-calculator-guide",
        "summary": "Learn how the Army tape test works, how to measure body fat for military compliance, and understand the accuracy compared to other methods.",
        "icon": "📏",
        "cta": "Read Guide",
        "color": "blue"
    },
    {
        "title": "How to Start Carb Cycling for Fat Loss",
        "url": "/resources/how-to-start-carb-cycling",
        "summary": "Learn how to use carb cycling for weight loss and performance. Backed by research with sample plans and macro breakdowns.",
        "icon": "🍽️",
        "cta": "Read Guide",
        "color": "orange"
    },
    {
        "title": "Fertility After 35: What to Know About Your Chances",
        "url": "/resources/fertility-after-35",
        "summary": "Age-related fertility facts, egg reserve decline, and how to assess your chance of pregnancy after age 35.",
        "icon": "🌿",
        "cta": "Read Guide",
        "color": "pink"
    },
    {
        "title": "Ozempic Weight Loss Calculator Guide",
        "url": "/resources/ozempic-weight-loss-calculator-guide",
        "summary": "Evidence-based guide to semaglutide weight loss: dosage protocols, timelines, and expected outcomes from clinical trials.",
        "icon": "💊",
        "cta": "Read Guide",
        "color": "purple"
    },
    {
        "title": "Are Height Predictors Accurate?",
        "url": "/resources/are-height-predictors-accurate",
        "summary": "How accurate are height prediction methods? Compare scientific evidence for Khamis-Roche, mid-parental formula, and bone age prediction.",
        "icon": "📏",
        "cta": "Read Article",
        "color": "green"
    },
    {
        "title": "Breast Implant Size Guide",
        "url": "/resources/breast-implant-size-guide",
        "summary": "View implant size charts, band-to-cup estimates, and visual comparisons for A to D cups.",
        "icon": "💗",
        "cta": "View Guide",
        "color": "pink"
    },
    {
        "title": "How Many CCs is a C Cup?",
        "url": "/resources/how-many-ccs-is-a-c-cup",
        "summary": "Convert implant volume (in cc) to a C cup using surgeon-backed sizing rules. Includes chart + calculator.",
        "icon": "💗",
        "cta": "View Guide",
        "color": "pink"
    },
    {
        "title": "Fasting Weight Loss Chart: What to Expect Week by Week",
        "url": "/resources/fasting-weight-loss-chart",
        "summary": "Visual breakdown of fat loss trends from intermittent fasting protocols backed by clinical data.",
        "icon": "⏱️",
        "cta": "View Chart",
        "color": "green"
    },
    {
        "title": "Botox Dosage Guide",
        "url": "/resources/botox-dosage-guide",
        "summary": "Clinical reference for Botox units by area, dosing ranges, and cost analysis. Based on FDA data and peer-reviewed research.",
        "icon": "💉",
        "cta": "View Guide",
        "color": "teal"
    }
]

@app.route('/resources')
def resources():
    schema_name = "Health & Wellness Resources"
    schema_description = "Evidence-based articles, guides and tools to help you take action on your health goals. Access our collection of free resources on nutrition, fitness, and longevity."
    schema_url = "/resources"
    return render_template(
        'resources.html', 
        is_homepage=False, 
        articles=articles,
        schema_name=schema_name,
        schema_description=schema_description,
        schema_url=schema_url
    )

@app.route('/resources/fasting-weight-loss-chart')
def fasting_weight_loss_chart():
    return render_template(
        'resources/fasting_weight_loss_chart.html',
        is_homepage=False,
        schema_name="Fasting Weight Loss Chart: What to Expect Week by Week",
        schema_description="Visual chart showing expected weight loss per week on intermittent fasting plans. Backed by clinical studies.",
        schema_url="/resources/fasting-weight-loss-chart"
    )

@app.route('/resources/how-many-ccs-is-a-c-cup')
def how_many_ccs_is_a_c_cup():
    return render_template(
        'resources/how_many_ccs_is_a_c_cup.html',
        is_homepage=False,
        schema_name="How Many CCs is a C Cup? Surgeon-Backed Guide",
        schema_description="Convert implant volume (in cc) to a C cup using surgeon-backed sizing rules. Includes charts and conversion guides.",
        schema_url="/resources/how-many-ccs-is-a-c-cup"
    )

@app.route('/resources/how-to-start-carb-cycling')
def how_to_start_carb_cycling():
    return render_template(
        'resources/how_to_start_carb_cycling.html',
        is_homepage=False,
        schema_name="How to Start Carb Cycling for Fat Loss | Science-Backed Guide",
        schema_description="Learn how to use carb cycling for weight loss and performance. Backed by research with sample plans and macro breakdowns.",
        schema_url="/resources/how-to-start-carb-cycling"
    )

@app.route('/resources/botox-dosage-guide')
def botox_dosage_guide():
    return render_template(
        'resources/botox_dosage_guide.html',
        is_homepage=False,
        schema_name="Botox Dosage Guide - Evidence-Based Units by Treatment Area",
        schema_description="Comprehensive guide to standard Botox dosages by treatment area, backed by clinical studies. Includes cost analysis and duration expectations.",
        schema_url="/resources/botox-dosage-guide"
    )

@app.route('/female-fertility-calculator')
def female_fertility_calculator():
    schema_name = "Fertility Calculator"
    schema_description = "Estimate your fertile window and ovulation date based on your menstrual cycle length, designed to help with natural conception planning."
    schema_url = "/female-fertility-calculator"
    return render_template(
        'female_fertility_calculator.html', 
        is_homepage=False,
        schema_name=schema_name,
        schema_description=schema_description,
        schema_url=schema_url
    )

@app.route('/child-growth-calculator')
def child_growth_calculator():
    schema_name = "Child Growth Calculator"
    schema_description = "Track your child's height, weight, and BMI percentile using CDC or WHO charts. Personalized and evidence-based."
    schema_url = "/child-growth-calculator"
    return render_template(
        'child_growth_calculator.html', 
        is_homepage=False,
        schema_name=schema_name,
        schema_description=schema_description,
        schema_url=schema_url
    )

@app.route('/liposuction-weight-loss-calculator')
def liposuction_weight_loss_calculator():
    schema_name = "Liposuction Weight Loss Calculator"
    schema_description = "Calculate how much fat and weight you might lose with liposuction, and what it may cost based on body areas and region."
    schema_url = "/liposuction-weight-loss-calculator"
    return render_template(
        'liposuction_weight_loss_calculator.html', 
        is_homepage=False,
        schema_name=schema_name,
        schema_description=schema_description,
        schema_url=schema_url
    )

@app.route('/lip-filler-cost-calculator')
def lip_filler_cost_calculator():
    schema_name = "Lip Filler Cost Calculator"
    schema_description = "Estimate the cost of lip filler injections based on desired volume, brand, and injector type. Personalized and aesthetic-focused."
    schema_url = "/lip-filler-cost-calculator"
    return render_template(
        'lip_filler_cost_calculator.html', 
        is_homepage=False,
        schema_name=schema_name,
        schema_description=schema_description,
        schema_url=schema_url
    )

@app.route('/adult-height-predictor-calculator')
def adult_height_predictor_calculator():
    schema_name = "Adult Height Predictor Calculator"
    schema_description = "Predict a child's future adult height based on their age, current height, gender, and parental height using validated models like mid-parental height and Khamis-Roche."
    schema_url = "/adult-height-predictor-calculator"
    return render_template(
        'adult_height_predictor_calculator.html', 
        is_homepage=False,
        schema_name=schema_name,
        schema_description=schema_description,
        schema_url=schema_url
    )

@app.route('/cc-to-bra-size-calculator')
def cc_to_bra_size_calculator():
    schema_name = "CC to Bra Size Calculator"
    schema_description = "Convert breast implant volume (in CCs) to estimated bra cup size. Based on plastic surgery implant-to-size charts."
    schema_url = "/cc-to-bra-size-calculator"
    return render_template(
        'cc_to_bra_size_calculator.html', 
        is_homepage=False,
        schema_name=schema_name,
        schema_description=schema_description,
        schema_url=schema_url
    )

@app.route('/dog-pregnancy-due-date-calculator')
def dog_pregnancy_due_date_calculator():
    schema_name = "Dog Pregnancy Due-Date Calculator"
    schema_description = "Estimate your dog's due date based on mating date. Based on average canine pregnancy length (63 days) with breed-specific adjustments."
    schema_url = "/dog-pregnancy-due-date-calculator"
    return render_template(
        'dog_pregnancy_due_date_calculator.html', 
        is_homepage=False,
        schema_name=schema_name,
        schema_description=schema_description,
        schema_url=schema_url
    )

@app.route('/newborn-weight-loss-calculator')
def newborn_weight_loss_calculator():
    schema_name = "Newborn Weight Loss Calculator"
    schema_description = "Track and estimate newborn weight loss in the first days after birth. Know when weight loss is normal and when to take action."
    schema_url = "/newborn-weight-loss-calculator"
    return render_template(
        'newborn_weight_loss_calculator.html', 
        is_homepage=False,
        schema_name=schema_name,
        schema_description=schema_description,
        schema_url=schema_url
    )

@app.route('/baldness-risk-calculator')
def baldness_risk_calculator():
    schema_name = "Baldness Risk Calculator"
    schema_description = "Estimate your risk of going bald based on family history, age, lifestyle, and health. Backed by clinical studies."
    schema_url = "/baldness-risk-calculator"
    return render_template(
        'baldness_risk_calculator.html', 
        is_homepage=False,
        schema_name=schema_name,
        schema_description=schema_description,
        schema_url=schema_url
    )

@app.route('/bac-calculator')
def bac_calculator():
    schema_name = "BAC Calculator"
    schema_description = "Use this BAC calculator to estimate your blood alcohol content based on number of drinks, body weight, gender, and time."
    schema_url = "/bac-calculator"
    return render_template(
        'bac_calculator.html', 
        is_homepage=False,
        schema_name=schema_name,
        schema_description=schema_description,
        schema_url=schema_url
    )

@app.route('/chipotle-nutrition-calculator')
def chipotle_nutrition_calculator():
    schema_name = "Chipotle Nutrition Calculator"
    schema_description = "Build your Chipotle order and see real-time nutrition facts: calories, protein, carbs, fat, and fiber. Includes all protein, toppings, and sides."
    schema_url = "/chipotle-nutrition-calculator"
    return render_template(
        'chipotle_nutrition_calculator.html', 
        is_homepage=False,
        schema_name=schema_name,
        schema_description=schema_description,
        schema_url=schema_url
    )

@app.route('/starbucks-nutrition-calculator')
def starbucks_nutrition_calculator():
    schema_name = "Starbucks Nutrition Calculator"
    schema_description = "Customize any Starbucks drink and instantly see calories, protein, carbs, fat, and sugar. Includes milk swaps, size changes, syrups, and seasonal items."
    schema_url = "/starbucks-nutrition-calculator"
    return render_template(
        'starbucks_nutrition_calculator.html', 
        is_homepage=False,
        schema_name=schema_name,
        schema_description=schema_description,
        schema_url=schema_url
    )

@app.route('/army-body-fat-calculator')
def army_body_fat_calculator():
    schema_name = "Army Body Fat Calculator"
    schema_description = "Estimate your body fat percentage using U.S. Army tape test standards. Based on gender, age, height, neck, and waist measurements."
    schema_url = "/army-body-fat-calculator"
    return render_template(
        'army_body_fat_calculator.html',
        is_homepage=False,
        schema_name=schema_name,
        schema_description=schema_description,
        schema_url=schema_url
    )

@app.route('/alcohol-impact-calculator')
def alcohol_impact_calculator():
    schema_name = "Alcohol Impact Calculator"
    schema_description = "Estimate how alcohol affects your sleep quality, next-day productivity, liver health, and hydration. Based on current research."
    schema_url = "/alcohol-impact-calculator"
    return render_template(
        'alcohol_impact_calculator.html', 
        is_homepage=False,
        schema_name=schema_name,
        schema_description=schema_description,
        schema_url=schema_url
    )

@app.route('/sitemap.xml')
def sitemap():
    response = send_from_directory(
        'static/public',
        'sitemap.xml',
        mimetype='application/xml'
    )
    response.headers['Cache-Control'] = 'no-store, no-cache, must-revalidate, max-age=0'
    response.headers['Pragma'] = 'no-cache'
    response.headers['Expires'] = '0'
    return response

@app.route('/ads.txt')
def ads_txt():
    return send_from_directory('static/public', 'ads.txt')

@app.route('/robots.txt')
def robots_txt():
    return send_from_directory('static/public', 'robots.txt')

@app.route('/resources/how-to-use-the-ozempic-weight-loss-calculator')
def redirect_ozempic_article():
    return redirect('/ozempic-weight-loss-calculator', code=301)

@app.route('/resources/creatine-hydration-guide')
def redirect_creatine_article():
    return redirect('/creatine-water-calculator', code=301)

@app.route('/resources/breast-implant-size-guide')
def breast_implant_size_guide():
    return render_template(
        'resources/breast_implant_size_guide.html',
        is_homepage=False,
        schema_name="Breast Implant Size Guide",
        schema_description="The most complete breast implant size guide online. Learn how many CCs equal a cup size, compare profiles, view size charts, and use our calculator.",
        schema_url="/resources/breast-implant-size-guide"
    )

@app.route('/resources/breast-implant-sizing-guide')
def redirect_old_breast_sizing():
    return redirect('/resources/breast-implant-size-guide', code=301)

@app.route('/resources/are-height-predictors-accurate')
def are_height_predictors_accurate():
    return render_template(
        'resources/are_height_predictors_accurate.html',
        is_homepage=False,
        schema_name="Are Height Predictors Accurate? What Science Says",
        schema_description="How accurate are child and adult height predictors? Explore the science behind growth charts, genetics, and predictive formulas.",
        schema_url="/resources/are-height-predictors-accurate"
    )

@app.route('/resources/ozempic-weight-loss-calculator-guide')
def ozempic_weight_loss_calculator_guide():
    return render_template(
        'resources/ozempic_weight_loss_calculator_guide.html',
        is_homepage=False,
        schema_name="Ozempic Weight Loss Calculator Guide: Timeline & Expected Results",
        schema_description="Comprehensive guide to Ozempic (semaglutide) for weight loss: dosage protocols, expected outcomes, timeline comparisons, and clinical insights based on STEP trials.",
        schema_url="/resources/ozempic-weight-loss-calculator-guide"
    )

@app.route('/resources/starbucks-nutrition-guide')
def starbucks_nutrition_guide():
    return render_template(
        'resources/starbucks_nutrition_guide.html',
        is_homepage=False,
        schema_name="Starbucks Nutrition Calculator Guide | Calories & Macros",
        schema_description="Decode your Starbucks drink nutrition. Learn how to adjust calories, macros, and sugar with our calculator-backed customization guide.",
        schema_url="/resources/starbucks-nutrition-guide"
    )

@app.route('/resources/army-body-fat-calculator-guide')
def army_body_fat_calculator_guide():
    return render_template(
        'resources/army_body_fat_calculator_guide.html',
        is_homepage=False,
        schema_name="Army Body Fat Calculator Guide | Tape Test Formula & Accuracy",
        schema_description="Learn how the Army tape test works, how to measure body fat for compliance, and use our calculator for fast results.",
        schema_url="/resources/army-body-fat-calculator-guide"
    )

@app.route('/resources/fertility-after-35')
def fertility_after_35():
    return render_template(
        'resources/fertility_after_35.html',
        is_homepage=False,
        schema_name="Fertility After 35: What to Know About Your Chances",
        schema_description="Evidence-based guide to fertility after age 35: age-related egg quality decline, success rates for natural conception, IVF outcomes, and pregnancy risks.",
        schema_url="/resources/fertility-after-35"
    )

@app.route('/resources/chipotle-nutrition-guide')
def chipotle_nutrition_guide():
    return render_template(
        'resources/chipotle_nutrition_guide.html',
        is_homepage=False,
        schema_name="Chipotle Nutrition Calculator Guide | Calories, Macros & Meal Hacks",
        schema_description="Track your Chipotle meal macros. Learn how to reduce calories, sugar, and carbs with our calculator-based guide.",
        schema_url="/resources/chipotle-nutrition-guide"
    )

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
