import os
import logging
from flask import Flask, render_template, send_from_directory, redirect, Response

# Configure logging
logging.basicConfig(level=logging.DEBUG)

# Create Flask app
app = Flask(__name__)
app.secret_key = os.environ.get("SESSION_SECRET", "default_secret_key")

# Cross-linking map: each calculator URL -> related calculators + guides
# Used by the related_links component template
cross_links = {
    "/plasma-donation-earnings-calculator": {
        "calculators": ["/lipid-panel-goals-calculator", "/retirement-savings-calculator"],
        "guides": ["/resources/plasma-vs-platelet-donation", "/resources/plasma-donation-tips-first-time"]
    },
    "/lipid-panel-goals-calculator": {
        "calculators": ["/tdee-calculator", "/plasma-donation-earnings-calculator", "/lifespan-longevity-calculator"],
        "guides": []
    },
    "/antidepressant-weight-gain-calculator": {
        "calculators": ["/tdee-calculator", "/ideal-body-weight-calculator", "/fasting-weight-loss-calculator"],
        "guides": ["/resources/antidepressants-and-body-fat"]
    },
    "/breast-implant-calculator": {
        "calculators": ["/breast-implant-size-calculator", "/breast-implant-cost-calculator", "/cc-to-bra-size-calculator"],
        "guides": ["/resources/breast-implant-size-guide", "/resources/who-should-not-get-breast-implants"]
    },
    "/breast-implant-size-calculator": {
        "calculators": ["/breast-implant-calculator", "/cc-to-bra-size-calculator", "/breast-implant-cost-calculator"],
        "guides": ["/resources/breast-implant-size-guide", "/resources/how-many-ccs-is-a-c-cup"]
    },
    "/breast-implant-cost-calculator": {
        "calculators": ["/breast-implant-calculator", "/breast-implant-size-calculator", "/lip-filler-cost-calculator"],
        "guides": ["/resources/do-breast-implants-cause-weight-gain", "/resources/who-should-not-get-breast-implants"]
    },
    "/cc-to-bra-size-calculator": {
        "calculators": ["/breast-implant-size-calculator", "/breast-implant-calculator", "/breast-implant-cost-calculator"],
        "guides": ["/resources/how-many-ccs-is-a-c-cup", "/resources/breast-implant-size-guide"]
    },
    "/army-body-fat-calculator": {
        "calculators": ["/tdee-calculator", "/ideal-body-weight-calculator", "/caloric-intake-macronutrient-calculator"],
        "guides": ["/resources/army-body-fat-calculator-guide"]
    },
    "/chipotle-nutrition-calculator": {
        "calculators": ["/starbucks-nutrition-calculator", "/caloric-intake-macronutrient-calculator", "/tdee-calculator"],
        "guides": ["/resources/chipotle-nutrition-guide"]
    },
    "/starbucks-nutrition-calculator": {
        "calculators": ["/chipotle-nutrition-calculator", "/caloric-intake-macronutrient-calculator", "/tdee-calculator"],
        "guides": ["/resources/starbucks-nutrition-guide"]
    },
    "/bac-calculator": {
        "calculators": ["/alcohol-impact-calculator", "/ideal-body-weight-calculator", "/lifespan-longevity-calculator"],
        "guides": ["/resources/how-alcohol-affects-your-bac"]
    },
    "/alcohol-impact-calculator": {
        "calculators": ["/bac-calculator", "/lifespan-longevity-calculator", "/tdee-calculator"],
        "guides": ["/resources/how-alcohol-affects-your-bac"]
    },
    "/carb-cycling-calculator": {
        "calculators": ["/tdee-calculator", "/caloric-intake-macronutrient-calculator", "/fasting-weight-loss-calculator"],
        "guides": ["/resources/how-to-start-carb-cycling"]
    },
    "/ivf-due-date-calculator": {
        "calculators": ["/female-fertility-calculator", "/newborn-weight-loss-calculator", "/dog-pregnancy-due-date-calculator"],
        "guides": ["/resources/ivf-due-date-calculator-guide", "/resources/fertility-after-35"]
    },
    "/female-fertility-calculator": {
        "calculators": ["/ivf-due-date-calculator", "/lifespan-longevity-calculator", "/newborn-weight-loss-calculator"],
        "guides": ["/resources/fertility-after-35", "/resources/ivf-due-date-calculator-guide"]
    },
    "/retirement-savings-calculator": {
        "calculators": ["/lifespan-longevity-calculator", "/plasma-donation-earnings-calculator"],
        "guides": []
    },
    "/tdee-calculator": {
        "calculators": ["/caloric-intake-macronutrient-calculator", "/ideal-body-weight-calculator", "/carb-cycling-calculator", "/fasting-weight-loss-calculator", "/calories-burned-calculator"],
        "guides": ["/resources/how-to-start-carb-cycling"]
    },
    "/ideal-body-weight-calculator": {
        "calculators": ["/tdee-calculator", "/caloric-intake-macronutrient-calculator", "/army-body-fat-calculator", "/fasting-weight-loss-calculator"],
        "guides": ["/resources/fasting-weight-loss-chart"]
    },
    "/caloric-intake-macronutrient-calculator": {
        "calculators": ["/tdee-calculator", "/carb-cycling-calculator", "/ideal-body-weight-calculator", "/fasting-weight-loss-calculator"],
        "guides": ["/resources/how-to-start-carb-cycling"]
    },
    "/baldness-risk-calculator": {
        "calculators": ["/lifespan-longevity-calculator", "/antidepressant-weight-gain-calculator"],
        "guides": ["/resources/how-to-prevent-hair-loss"]
    },
    "/newborn-weight-loss-calculator": {
        "calculators": ["/child-growth-calculator", "/adult-height-predictor-calculator", "/ivf-due-date-calculator"],
        "guides": ["/resources/are-height-predictors-accurate"]
    },
    "/child-growth-calculator": {
        "calculators": ["/adult-height-predictor-calculator", "/newborn-weight-loss-calculator", "/ideal-body-weight-calculator"],
        "guides": ["/resources/are-height-predictors-accurate"]
    },
    "/adult-height-predictor-calculator": {
        "calculators": ["/child-growth-calculator", "/newborn-weight-loss-calculator", "/ideal-body-weight-calculator"],
        "guides": ["/resources/are-height-predictors-accurate"]
    },
    "/dog-pregnancy-due-date-calculator": {
        "calculators": ["/ivf-due-date-calculator", "/female-fertility-calculator"],
        "guides": []
    },
    "/liposuction-weight-loss-calculator": {
        "calculators": ["/ideal-body-weight-calculator", "/tdee-calculator", "/lip-filler-cost-calculator", "/breast-implant-cost-calculator"],
        "guides": ["/resources/fasting-weight-loss-chart"]
    },
    "/lip-filler-cost-calculator": {
        "calculators": ["/botox-dosage-calculator", "/breast-implant-cost-calculator", "/liposuction-weight-loss-calculator"],
        "guides": ["/resources/botox-dosage-guide"]
    },
    "/ozempic-pen-click-calculator": {
        "calculators": ["/ozempic-weight-loss-calculator", "/fasting-weight-loss-calculator", "/tdee-calculator"],
        "guides": ["/resources/ozempic-weight-loss-calculator-guide", "/resources/semaglutide-vs-ozempic-guide"]
    },
    "/ozempic-weight-loss-calculator": {
        "calculators": ["/ozempic-pen-click-calculator", "/mounjaro-weight-loss-calculator", "/fasting-weight-loss-calculator", "/tdee-calculator", "/ideal-body-weight-calculator"],
        "guides": ["/resources/ozempic-weight-loss-calculator-guide", "/resources/semaglutide-vs-ozempic-guide"]
    },
    "/mounjaro-weight-loss-calculator": {
        "calculators": ["/ozempic-weight-loss-calculator", "/bmi-calculator", "/tdee-calculator", "/caloric-intake-macronutrient-calculator"],
        "guides": []
    },
    "/botox-dosage-calculator": {
        "calculators": ["/lip-filler-cost-calculator", "/breast-implant-cost-calculator", "/liposuction-weight-loss-calculator"],
        "guides": ["/resources/botox-dosage-guide"]
    },
    "/creatine-water-calculator": {
        "calculators": ["/tdee-calculator", "/vitamin-d-intake-calculator", "/ideal-body-weight-calculator"],
        "guides": []
    },
    "/vitamin-d-intake-calculator": {
        "calculators": ["/vitamin-d-conversion-calculator", "/creatine-water-calculator", "/lifespan-longevity-calculator"],
        "guides": []
    },
    "/vitamin-d-conversion-calculator": {
        "calculators": ["/vitamin-d-intake-calculator", "/creatine-water-calculator"],
        "guides": []
    },
    "/lifespan-longevity-calculator": {
        "calculators": ["/retirement-savings-calculator", "/tdee-calculator", "/alcohol-impact-calculator", "/lipid-panel-goals-calculator"],
        "guides": []
    },
    "/fasting-weight-loss-calculator": {
        "calculators": ["/tdee-calculator", "/caloric-intake-macronutrient-calculator", "/ozempic-weight-loss-calculator", "/carb-cycling-calculator"],
        "guides": ["/resources/fasting-weight-loss-chart", "/resources/how-to-start-carb-cycling"]
    },
    "/bmi-calculator": {
        "calculators": ["/tdee-calculator", "/ideal-body-weight-calculator", "/caloric-intake-macronutrient-calculator", "/army-body-fat-calculator"],
        "guides": []
    },
    "/protein-intake-calculator": {
        "calculators": ["/tdee-calculator", "/caloric-intake-macronutrient-calculator", "/bmi-calculator", "/ideal-body-weight-calculator"],
        "guides": []
    },
    "/water-intake-calculator": {
        "calculators": ["/protein-intake-calculator", "/tdee-calculator", "/caloric-intake-macronutrient-calculator", "/bmi-calculator"],
        "guides": []
    },
    "/calories-burned-calculator": {
        "calculators": ["/tdee-calculator", "/protein-intake-calculator", "/bmi-calculator", "/caloric-intake-macronutrient-calculator"],
        "guides": []
    },
}

# Build a title lookup from cards and articles arrays (populated after they are defined)
_title_lookup = {}

cards = [
    {
        "title": "Plasma Donation Earnings Calculator",
        "url": "/plasma-donation-earnings-calculator",
        "summary": "Estimate how much you can earn donating plasma based on your weight, location, and donation frequency. Includes new donor bonuses.",
        "icon": "🩸",
        "cta": "Calculate Earnings",
        "color": "red",
        "category": "financial",
        "popular": False
    },
    {
        "title": "Lipid Panel Goals Calculator",
        "url": "/lipid-panel-goals-calculator",
        "summary": "Calculate your ideal cholesterol targets based on age, risk, and medical guidelines for LDL, HDL, triglycerides, and non-HDL.",
        "icon": "❤️",
        "cta": "Get Targets",
        "color": "red",
        "category": "health",
        "popular": False
    },
    {
        "title": "Antidepressant Weight Gain Calculator",
        "url": "/antidepressant-weight-gain-calculator",
        "summary": "Estimate potential weight and body fat gain from antidepressants based on medication type, dose, and treatment duration.",
        "icon": "💊",
        "cta": "Calculate Impact",
        "color": "blue",
        "category": "medications",
        "popular": False
    },
    {
        "title": "Breast Implant Cost Calculator",
        "url": "/breast-implant-cost-calculator",
        "summary": "Estimate your total breast augmentation cost based on implant type, region, and surgeon experience. Compare different countries and implant options.",
        "icon": "💰",
        "cta": "Calculate Cost",
        "color": "pink",
        "category": "cosmetic",
        "popular": True
    },
    {
        "title": "Breast Implant Size Calculator",
        "url": "/breast-implant-size-calculator",
        "summary": "Estimate ideal implant volume based on your band size, goal cup size, and breast width. Includes implant profile and cost estimate by region.",
        "icon": "💗",
        "cta": "Calculate Implant Size",
        "color": "pink",
        "category": "cosmetic",
        "popular": False
    },
    {
        "title": "Army Body Fat Calculator",
        "url": "/army-body-fat-calculator",
        "summary": "Estimate your body fat percentage using the U.S. Army tape test method. Based on gender, age, height, neck, and waist measurements.",
        "icon": "⭐",
        "cta": "Calculate Body Fat",
        "color": "blue",
        "category": "fitness",
        "popular": False
    },
    {
        "title": "Chipotle Nutrition Calculator",
        "url": "/chipotle-nutrition-calculator",
        "summary": "Build your Chipotle order and see real-time nutrition facts: calories, protein, carbs, fat, and fiber. Includes all protein, toppings, and sides.",
        "icon": "🌯",
        "cta": "Calculate Nutrition",
        "color": "green",
        "category": "nutrition",
        "popular": True
    },
    {
        "title": "Starbucks Nutrition Calculator",
        "url": "/starbucks-nutrition-calculator",
        "summary": "Customize any Starbucks drink and instantly see calories, protein, carbs, fat, and sugar. Includes milk swaps, size changes, syrups, and toppings.",
        "icon": "☕",
        "cta": "Calculate Nutrition",
        "color": "green",
        "category": "nutrition",
        "popular": True
    },
    {
        "title": "BAC Calculator",
        "url": "/bac-calculator",
        "summary": "Estimate your blood alcohol content based on drinks consumed, weight, gender, and time. Understand impairment levels and time to sobriety.",
        "icon": "🍷",
        "cta": "Calculate BAC",
        "color": "purple",
        "category": "health",
        "popular": True
    },
    {
        "title": "Carb Cycling Calculator",
        "url": "/carb-cycling-calculator",
        "summary": "Customize your high, low, and medium carb days based on your TDEE and body composition goals with our carb cycling calculator.",
        "icon": "🍽️",
        "cta": "Create Carb Cycle",
        "color": "orange",
        "category": "nutrition",
        "popular": False
    },
    {
        "title": "IVF Due Date Calculator",
        "url": "/ivf-due-date-calculator",
        "summary": "Accurately predict your baby's due date after IVF treatment with our specialized calculator for both fresh and frozen embryo transfers.",
        "icon": "👶",
        "cta": "Calculate Due Date",
        "color": "pink",
        "category": "fertility",
        "popular": True
    },
    {
        "title": "Retirement Savings Calculator",
        "url": "/retirement-savings-calculator",
        "summary": "Estimate how much you'll have saved for retirement and your safe withdrawal rate based on current savings and contributions.",
        "icon": "💰",
        "cta": "Plan Your Retirement",
        "color": "green",
        "category": "financial",
        "popular": False
    },
    {
        "title": "TDEE Calculator",
        "url": "/tdee-calculator",
        "summary": "Estimate your Total Daily Energy Expenditure to determine maintenance calories and create effective weight management plans.",
        "icon": "🔥",
        "cta": "Calculate TDEE",
        "color": "orange",
        "category": "nutrition",
        "popular": True
    },
    {
        "title": "Ideal Body Weight Calculator",
        "url": "/ideal-body-weight-calculator",
        "summary": "Calculate your ideal body weight range based on height, gender, and frame size using multiple evidence-based formulas.",
        "icon": "⚖️",
        "cta": "Calculate Weight",
        "color": "blue",
        "category": "fitness",
        "popular": False
    },
    {
        "title": "Alcohol Impact Calculator",
        "url": "/alcohol-impact-calculator",
        "summary": "Estimate how alcohol affects your sleep quality, next-day productivity, liver health, and hydration.",
        "icon": "🍷",
        "cta": "Calculate Impact",
        "color": "red",
        "category": "health",
        "popular": False
    },
    {
        "title": "Baldness Risk Calculator",
        "url": "/baldness-risk-calculator",
        "summary": "Estimate your risk of going bald based on family history, age, lifestyle, and health factors.",
        "icon": "👨‍🦲",
        "cta": "Predict Hair Loss",
        "color": "purple",
        "category": "health",
        "popular": True
    },
    {
        "title": "Newborn Weight Loss Calculator",
        "url": "/newborn-weight-loss-calculator",
        "summary": "Track and assess weight loss in newborns during the first days after birth based on clinical guidelines.",
        "icon": "👶",
        "cta": "Calculate Weight Loss",
        "color": "blue",
        "category": "fertility",
        "popular": False
    },
    {
        "title": "Dog Pregnancy Due-Date Calculator",
        "url": "/dog-pregnancy-due-date-calculator",
        "summary": "Estimate your dog's whelping date based on breeding date with this veterinary-backed calculator.",
        "icon": "🐕",
        "cta": "Calculate Due Date",
        "color": "teal",
        "category": "health",
        "popular": False
    },
    {
        "title": "CC to Bra Size Calculator",
        "url": "/cc-to-bra-size-calculator",
        "summary": "Convert breast implant volume (CCs) to estimated bra cup size with this plastic surgery calculator.",
        "icon": "📏",
        "cta": "Calculate Cup Size",
        "color": "purple",
        "category": "cosmetic",
        "popular": False
    },
    {
        "title": "Liposuction Weight Loss Calculator",
        "url": "/liposuction-weight-loss-calculator",
        "summary": "Calculate how much fat and weight you might lose with liposuction, and what it may cost.",
        "icon": "🩺",
        "cta": "Estimate Results",
        "color": "teal",
        "category": "cosmetic",
        "popular": False
    },
    {
        "title": "Lip Filler Cost Calculator",
        "url": "/lip-filler-cost-calculator",
        "summary": "Estimate the cost of lip fillers based on volume, brand, and injector type for your procedure.",
        "icon": "💋",
        "cta": "Calculate Cost",
        "color": "pink",
        "category": "cosmetic",
        "popular": False
    },
    {
        "title": "Adult Height Predictor Calculator",
        "url": "/adult-height-predictor-calculator",
        "summary": "Predict a child's future adult height based on their age, current height, gender, and parental heights.",
        "icon": "📏",
        "cta": "Predict Height",
        "color": "green",
        "category": "health",
        "popular": False
    },
    {
        "title": "Child Growth Calculator",
        "url": "/child-growth-calculator",
        "summary": "Track your child's height, weight, and BMI percentile with age-based charts.",
        "icon": "📏",
        "cta": "Track Growth",
        "color": "green",
        "category": "health",
        "popular": False
    },
    {
        "title": "Female Fertility Calculator",
        "url": "/female-fertility-calculator",
        "summary": "Predict your most fertile days and ovulation window based on your menstrual cycle.",
        "icon": "🌸",
        "cta": "Find Fertile Days",
        "color": "pink",
        "category": "fertility",
        "popular": True
    },
    {
        "title": "Breast Implant Calculator",
        "url": "/breast-implant-calculator",
        "summary": "Find your ideal implant size based on your measurements and goals.",
        "icon": "💗",
        "cta": "Calculate Implant Size",
        "color": "purple",
        "category": "cosmetic",
        "popular": False
    },
    {
        "title": "Ozempic Pen Click Calculator",
        "url": "/ozempic-pen-click-calculator",
        "summary": "Calculate accurate Ozempic (semaglutide) dosing, check safety alerts, and track injection schedules with our comprehensive tool.",
        "icon": "💉",
        "cta": "Check Dosing",
        "color": "blue",
        "category": "medications",
        "popular": False
    },
    {
        "title": "Ozempic Weight Loss Calculator",
        "url": "/ozempic-weight-loss-calculator",
        "summary": "Estimate your fat loss and BMI reduction while taking semaglutide (Ozempic/Wegovy).",
        "icon": "💊",
        "cta": "Estimate Fat Loss",
        "color": "blue",
        "category": "medications",
        "popular": True
    },
    {
        "title": "Mounjaro Weight Loss Calculator",
        "url": "/mounjaro-weight-loss-calculator",
        "summary": "Estimate your potential weight loss on Mounjaro (tirzepatide) based on SURMOUNT clinical trial data, dose, and lifestyle factors.",
        "icon": "💊",
        "cta": "Estimate Weight Loss",
        "color": "purple",
        "category": "medications",
        "popular": False
    },
    {
        "title": "Botox Dosage Calculator",
        "url": "/botox-dosage-calculator",
        "summary": "Determine the appropriate Botox units for different treatment areas.",
        "icon": "💉",
        "cta": "Calculate Botox Units",
        "color": "teal",
        "category": "cosmetic",
        "popular": False
    },
    {
        "title": "Creatine Hydration Calculator",
        "url": "/creatine-water-calculator",
        "summary": "Calculate optimal water intake when using creatine supplements.",
        "icon": "💧",
        "cta": "Calculate Hydration",
        "color": "yellow",
        "category": "fitness",
        "popular": False
    },
    {
        "title": "Vitamin D Intake Calculator",
        "url": "/vitamin-d-intake-calculator",
        "summary": "Determine your ideal vitamin D supplementation based on lifestyle factors.",
        "icon": "☀️",
        "cta": "Calculate Intake",
        "color": "red",
        "category": "health",
        "popular": False
    },
    {
        "title": "Vitamin D Conversion Calculator",
        "url": "/vitamin-d-conversion-calculator",
        "summary": "Convert vitamin D levels between ng/mL and nmol/L. Helpful for interpreting lab results and international guidelines.",
        "icon": "🔄",
        "cta": "Convert Units",
        "color": "yellow",
        "category": "health",
        "popular": False
    },
    {
        "title": "Lifespan Calculator",
        "url": "/lifespan-longevity-calculator",
        "summary": "Estimate your life expectancy based on health and lifestyle factors.",
        "icon": "❤️",
        "cta": "Check Your Lifespan",
        "color": "green",
        "category": "health",
        "popular": True
    },
    {
        "title": "Fasting Weight Loss Calculator",
        "url": "/fasting-weight-loss-calculator",
        "summary": "Calculate potential weight loss from intermittent fasting protocols.",
        "icon": "⏱️",
        "cta": "Calculate Weight Loss",
        "color": "orange",
        "category": "nutrition",
        "popular": False
    },
    {
        "title": "Caloric & Macronutrient Calculator",
        "url": "/caloric-intake-macronutrient-calculator",
        "summary": "Calculate your daily caloric needs and optimal macronutrient ratios.",
        "icon": "🍎",
        "cta": "Calculate Your Calories",
        "color": "blue",
        "category": "nutrition",
        "popular": False
    },
    {
        "title": "BMI Calculator",
        "url": "/bmi-calculator",
        "summary": "Calculate your Body Mass Index and see your weight category based on WHO guidelines. Includes healthy weight range for your height.",
        "icon": "📊",
        "cta": "Calculate BMI",
        "color": "green",
        "category": "fitness",
        "popular": True
    },
    {
        "title": "Protein Intake Calculator",
        "url": "/protein-intake-calculator",
        "summary": "Calculate your optimal daily protein intake based on weight, activity level, and fitness goals. Science-backed recommendations for muscle building, weight loss, and general health.",
        "icon": "🥩",
        "cta": "Calculate Protein Needs",
        "color": "red",
        "category": "nutrition",
        "popular": False
    },
    {
        "title": "Water Intake Calculator",
        "url": "/water-intake-calculator",
        "summary": "Calculate your optimal daily water intake based on weight, activity level, climate, and lifestyle factors. Personalized hydration recommendations backed by IOM guidelines.",
        "icon": "💧",
        "cta": "Calculate Water Needs",
        "color": "blue",
        "category": "nutrition",
        "popular": False
    },
    {
        "title": "Calories Burned Calculator",
        "url": "/calories-burned-calculator",
        "summary": "Calculate calories burned during exercise and daily activities using MET values from the Compendium of Physical Activities for 30+ exercises.",
        "icon": "🔥",
        "cta": "Calculate Calories Burned",
        "color": "orange",
        "category": "fitness",
        "popular": False
    }
]

categories = [
    {"id": "nutrition", "label": "Nutrition & Diet", "icon": "🍎"},
    {"id": "medications", "label": "Weight Loss Medications", "icon": "💊"},
    {"id": "fitness", "label": "Fitness & Body Composition", "icon": "💪"},
    {"id": "cosmetic", "label": "Cosmetic & Aesthetic", "icon": "✨"},
    {"id": "fertility", "label": "Pregnancy & Fertility", "icon": "👶"},
    {"id": "health", "label": "Health & Longevity", "icon": "❤️"},
    {"id": "financial", "label": "Financial & Earnings", "icon": "💰"},
]

@app.route('/')
def home():
    schema_name = "Longevity Calculator - Health & Wellness Calculators"
    schema_description = "Explore our collection of science-based health calculators for nutrition, longevity, fitness, and wellness. Get personalized insights to optimize your health."
    schema_url = "/"
    popular_cards = [c for c in cards if c.get("popular")]
    return render_template(
        'home.html',
        is_homepage=True,
        cards=cards,
        popular_cards=popular_cards,
        categories=categories,
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

@app.route('/calories-burned-calculator')
def calories_burned_calculator():
    schema_name = "Calories Burned Calculator"
    schema_description = "Calculate calories burned during exercise and daily activities using MET values from the Compendium of Physical Activities for 30+ exercises including running, walking, cycling, and swimming."
    schema_url = "/calories-burned-calculator"
    return render_template(
        'calories_burned_calculator.html',
        is_homepage=False,
        schema_name=schema_name,
        schema_description=schema_description,
        schema_url=schema_url
    )

@app.route('/bmi-calculator')
def bmi_calculator():
    schema_name = "BMI Calculator"
    schema_description = "Calculate your Body Mass Index (BMI) using weight and height. Determine your weight category based on WHO guidelines and find your healthy weight range."
    schema_url = "/bmi-calculator"
    return render_template(
        'bmi_calculator.html',
        is_homepage=False,
        schema_name=schema_name,
        schema_description=schema_description,
        schema_url=schema_url
    )

@app.route('/protein-intake-calculator')
def protein_intake_calculator():
    schema_name = "Protein Intake Calculator"
    schema_description = "Calculate your optimal daily protein intake based on weight, activity level, and fitness goals. Science-backed recommendations for muscle building, weight loss, and general health."
    schema_url = "/protein-intake-calculator"
    return render_template(
        'protein_intake_calculator.html',
        is_homepage=False,
        schema_name=schema_name,
        schema_description=schema_description,
        schema_url=schema_url
    )

@app.route('/water-intake-calculator')
def water_intake_calculator():
    schema_name = "Water Intake Calculator"
    schema_description = "Calculate your optimal daily water intake based on weight, activity level, climate, and lifestyle factors. Personalized hydration recommendations backed by IOM guidelines."
    schema_url = "/water-intake-calculator"
    return render_template(
        'water_intake_calculator.html',
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
    
@app.route('/breast-implant-size-calculator')
def breast_implant_size_calculator():
    schema_name = "Breast Implant Size Calculator"
    schema_description = "Estimate ideal implant volume based on your band size, goal cup size, and breast width. Includes implant profile and cost estimate by region."
    schema_url = "/breast-implant-size-calculator"
    return render_template(
        'breast_implant_size_calculator.html', 
        is_homepage=False,
        schema_name=schema_name,
        schema_description=schema_description,
        schema_url=schema_url
    )
    
@app.route('/breast-implant-cost-calculator')
def breast_implant_cost_calculator():
    schema_name = "Breast Implant Cost Calculator"
    schema_description = "Estimate your total breast augmentation cost based on implant type, region, and anesthesia. Includes surgeon fees, facility costs, and material."
    schema_url = "/breast-implant-cost-calculator"
    return render_template(
        'breast_implant_cost_calculator.html', 
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

@app.route('/vitamin-d-conversion-calculator')
def vitamin_d_conversion_calculator():
    schema_name = "Vitamin D Conversion Calculator"
    schema_description = "Convert vitamin D levels between ng/mL and nmol/L instantly. A simple tool to help interpret lab results, supplement labels, and international medical guidelines."
    schema_url = "/vitamin-d-conversion-calculator"
    return render_template(
        'vitamin_d_conversion_calculator.html', 
        is_homepage=False,
        schema_name=schema_name,
        schema_description=schema_description,
        schema_url=schema_url
    )

@app.route('/ivf-due-date-calculator')
def ivf_due_date_calculator():
    schema_name = "FET Due Date Calculator"
    schema_description = "Use this FET due date calculator to estimate pregnancy timeline by day 3, day 5, or frozen embryo transfer. Includes trimester and appointment estimates."
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

@app.route('/ozempic-pen-click-calculator')
def ozempic_pen_click_calculator():
    schema_name = "Ozempic Pen Click Calculator"
    schema_description = "Calculate accurate Ozempic (semaglutide) dosing, check safety alerts, and track injection schedules with our comprehensive tool."
    schema_url = "/ozempic-pen-click-calculator"
    return render_template(
        'ozempic_pen_click_calculator.html', 
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

@app.route('/mounjaro-weight-loss-calculator')
def mounjaro_weight_loss_calculator():
    schema_name = "Mounjaro Weight Loss Calculator"
    schema_description = "Estimate your potential weight loss on Mounjaro (tirzepatide) based on dose, duration, and lifestyle factors. Projections based on SURMOUNT clinical trial data."
    schema_url = "/mounjaro-weight-loss-calculator"
    return render_template(
        'mounjaro_weight_loss_calculator.html',
        is_homepage=False,
        schema_name=schema_name,
        schema_description=schema_description,
        schema_url=schema_url
    )

articles = [
    {
        "title": "Plasma vs Platelet Donation: Which Makes a Bigger Impact?",
        "url": "/resources/plasma-vs-platelet-donation",
        "summary": "Not sure whether to donate plasma or platelets? This guide compares collection volume, donation frequency, and community need.",
        "icon": "🩸",
        "cta": "Read Guide",
        "color": "purple"
    },
    {
        "title": "Plasma Donation for College Students: Veins, Gains & Study Time",
        "url": "/resources/plasma-donation-college-guide",
        "summary": "Can plasma donation affect your workouts, focus, or schedule as a student? Learn how to manage it safely without hurting your gains or grades.",
        "icon": "🩸",
        "cta": "Read Guide",
        "color": "blue"
    },
    {
        "title": "Plasma Donation Screening: What to Expect at Your First Visit",
        "url": "/resources/plasma-donation-screening-guide",
        "summary": "Learn what happens during the initial plasma donation screening. Covers ID check, health questions, physical exam, and tips to prepare.",
        "icon": "🩸",
        "cta": "Read Guide",
        "color": "red"
    },
    {
        "title": "Plasma Donation Tips for First-Timers: What to Know Before You Go",
        "url": "/resources/plasma-donation-tips-first-time",
        "summary": "Donating plasma for the first time? Learn exactly what to eat, drink, and wear — plus what to bring and how to feel better after.",
        "icon": "🩸",
        "cta": "Read Guide",
        "color": "pink"
    },
    {
        "title": "How to Prevent Hair Loss: Science-Based Prevention & Treatment",
        "url": "/resources/how-to-prevent-hair-loss",
        "summary": "Learn how to prevent hair loss with simple lifestyle changes, supplements, and treatments. Evidence-based strategies for both men and women.",
        "icon": "💆",
        "cta": "Read Guide",
        "color": "blue"
    },
    {
        "title": "Antidepressants and Body Fat: Understanding the Connection",
        "url": "/resources/antidepressants-and-body-fat",
        "summary": "Do antidepressants cause body fat gain? Learn which medications have the strongest effect, why it happens, and how to track changes over time.",
        "icon": "💊",
        "cta": "Read Guide",
        "color": "blue"
    },
    {
        "title": "Do Breast Implants Cause Weight Gain? The Science-Based Answer",
        "url": "/resources/do-breast-implants-cause-weight-gain",
        "summary": "Learn whether breast implants cause weight gain based on scientific evidence. Understand implant weight, fluid retention, and lifestyle factors.",
        "icon": "⚖️",
        "cta": "Read Guide",
        "color": "pink"
    },
    {
        "title": "Who Should Not Get Breast Implants? Medical & Aesthetic Guidelines",
        "url": "/resources/who-should-not-get-breast-implants",
        "summary": "Discover who should avoid breast implants due to health risks, psychological readiness, or FDA restrictions. Based on ASPS and surgeon guidance.",
        "icon": "🚫",
        "cta": "Read Guide",
        "color": "pink"
    },
    {
        "title": "Can a Mammogram Pop Breast Implants? Risks & Safety Explained",
        "url": "/resources/can-a-mammogram-pop-breast-implants",
        "summary": "Learn whether mammograms can damage breast implants, how to protect your implants during imaging, and what to expect from screening.",
        "icon": "🏥",
        "cta": "Read Guide",
        "color": "pink"
    },
    {
        "title": "How Alcohol Is Absorbed and Eliminated: The Science Behind BAC Levels",
        "url": "/resources/how-alcohol-affects-your-bac",
        "summary": "Understand how alcohol is absorbed and processed by the body. Learn how weight, gender, and time affect your BAC.",
        "icon": "🍷",
        "cta": "Read Guide",
        "color": "blue"
    },
    {
        "title": "How to Use the IVF Due Date Calculator (Day 3, Day 5, and FET)",
        "url": "/resources/ivf-due-date-calculator-guide",
        "summary": "Calculate your IVF pregnancy due date based on your specific transfer type (Day 3, Day 5, or FET). Includes detailed timeline.",
        "icon": "👶",
        "cta": "Read Guide",
        "color": "pink"
    },
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
        "title": "Semaglutide vs Ozempic: What's the Difference?",
        "url": "/resources/semaglutide-vs-ozempic-guide",
        "summary": "Understand how semaglutide and Ozempic compare by dosage, brand, cost, side effects, and weight loss. Learn how they relate — and how they differ.",
        "icon": "💊",
        "cta": "Read Guide",
        "color": "purple"
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

# Build title lookup for cross-linking component
for card in cards:
    _title_lookup[card['url']] = card['title']
for article in articles:
    _title_lookup[article['url']] = article['title']

@app.context_processor
def inject_cross_links():
    """Make cross-linking data available to all templates."""
    from flask import request
    path = request.path
    links = cross_links.get(path, {'calculators': [], 'guides': []})

    related_calcs = [{'url': url, 'title': _title_lookup.get(url, url)} for url in links.get('calculators', [])]
    related_guides = [{'url': url, 'title': _title_lookup.get(url, url)} for url in links.get('guides', [])]

    # Breadcrumb title from card/article titles (proper casing)
    breadcrumb_title = _title_lookup.get(path, '')
    # Strip " Calculator" suffix for cleaner breadcrumbs
    if breadcrumb_title.endswith(' Calculator'):
        breadcrumb_title = breadcrumb_title[:-len(' Calculator')]

    return {
        'related_calculators': related_calcs,
        'related_guides': related_guides,
        'cards': cards,
        'breadcrumb_title': breadcrumb_title
    }

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

@app.route('/resources/how-to-prevent-hair-loss')
def how_to_prevent_hair_loss():
    return render_template(
        'resources/how_to_prevent_hair_loss.html',
        is_homepage=False,
        schema_name="How to Prevent Hair Loss: Science-Based Prevention & Treatment",
        schema_description="Learn how to prevent hair loss with simple lifestyle changes, supplements, and treatments. Evidence-based strategies for both men and women.",
        schema_url="/resources/how-to-prevent-hair-loss"
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

@app.route('/antidepressant-weight-gain-calculator')
def antidepressant_weight_gain_calculator():
    schema_name = "Antidepressant Weight Gain Calculator"
    schema_description = "Estimate your potential body fat gain from antidepressants like SSRIs, SNRIs, TCAs, and atypicals. Personalized results by dose, duration, and drug class."
    schema_url = "/antidepressant-weight-gain-calculator"
    return render_template(
        'antidepressant_weight_gain_calculator.html',
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

@app.route('/resources/ivf-due-date-calculator-guide')
def ivf_due_date_calculator_guide():
    return render_template(
        'resources/ivf_due_date_calculator_guide.html',
        is_homepage=False,
        schema_name="IVF Due Date Calculator Guide | Day 3, Day 5, and FET",
        schema_description="Calculate your IVF pregnancy due date based on your specific transfer type. Understand the differences between Day 3, Day 5, and FET transfers.",
        schema_url="/resources/ivf-due-date-calculator-guide"
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

@app.route('/resources/how-alcohol-affects-your-bac')
def alcohol_absorption_bac_guide():
    return render_template(
        'resources/alcohol_absorption_bac_guide.html',
        is_homepage=False,
        schema_name="How Alcohol Affects Your BAC | Absorption, Elimination, and Time",
        schema_description="Understand how alcohol is absorbed and processed by the body. Learn how weight, gender, and time affect your BAC.",
        schema_url="/resources/how-alcohol-affects-your-bac"
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

@app.route('/resources/antidepressants-and-body-fat')
def antidepressants_and_body_fat():
    return render_template(
        'resources/antidepressants_and_body_fat.html',
        is_homepage=False,
        schema_name="Antidepressants and Body Fat | SSRI Weight Gain Guide",
        schema_description="Do antidepressants cause body fat gain? Learn which meds have the strongest effect, why it happens, and how to track changes over time.",
        schema_url="/resources/antidepressants-and-body-fat"
    )

@app.route('/resources/can-a-mammogram-pop-breast-implants')
def mammogram_breast_implants_guide():
    return render_template(
        'resources/can_a_mammogram_pop_breast_implants.html',
        is_homepage=False,
        schema_name="Can a Mammogram Pop Breast Implants? Risks & Safety Explained",
        schema_description="Learn whether mammograms can damage breast implants, how to protect your implants during imaging, and what to expect from screening.",
        schema_url="/resources/can-a-mammogram-pop-breast-implants"
    )

@app.route('/resources/do-breast-implants-cause-weight-gain')
def breast_implants_weight_gain_guide():
    return render_template(
        'resources/do_breast_implants_cause_weight_gain.html',
        is_homepage=False,
        schema_name="Do Breast Implants Cause Weight Gain? The Science-Based Answer",
        schema_description="Learn whether breast implants cause weight gain based on scientific evidence. Understand implant weight, fluid retention, and lifestyle factors after breast augmentation.",
        schema_url="/resources/do-breast-implants-cause-weight-gain"
    )

@app.route("/resources/who-should-not-get-breast-implants")
def who_should_not_get_breast_implants():
    return render_template("resources/who_should_not_get_breast_implants.html",
        schema_url="/resources/who-should-not-get-breast-implants",
        canonical_url="/resources/who-should-not-get-breast-implants",
        page_title="Who Should Not Get Breast Implants? Medical & Aesthetic Guidelines",
        meta_description="Discover who should avoid breast implants due to health risks, psychological readiness, or FDA restrictions. Based on ASPS and surgeon guidance.",
        og_title="Who Should Not Get Breast Implants?",
        og_description="Explore medical and lifestyle reasons for implant disqualification. Includes autoimmune risks, age limits, mental health factors, and candidacy FAQs.",
        og_image="who-should-not-get-breast-implants-og.jpg",
        schema_name="Who Should Not Get Breast Implants? Guide",
        schema_description="A clinical and aesthetic guide to who may be disqualified from breast augmentation surgery. Based on FDA and plastic surgery society guidelines."
    )

@app.route("/resources/semaglutide-vs-ozempic-guide")
def semaglutide_vs_ozempic_guide():
    return render_template(
        "resources/semaglutide_vs_ozempic_guide.html",
        is_homepage=False,
        schema_name="Semaglutide vs Ozempic Comparison Guide",
        schema_description="Explore how semaglutide and Ozempic compare in terms of chemical structure, dosage, brand naming, weight loss, and cost. Based on clinical trials and prescribing data.",
        schema_url="/resources/semaglutide-vs-ozempic-guide"
    )

@app.route("/resources/plasma-donation-screening-guide")
def plasma_donation_screening_guide():
    return render_template("resources/plasma_donation_screening_guide.html",
        schema_url="/resources/plasma-donation-screening-guide",
        canonical_url="/resources/plasma-donation-screening-guide",
        page_title="Plasma Donation Screening: What to Expect at Your First Visit",
        meta_description="Learn what happens during the initial plasma donation screening. Covers ID check, health questions, physical exam, and tips to prepare.",
        og_title="Plasma Donation Screening Process Explained",
        og_description="Your first plasma donation visit includes a basic health exam, ID check, and questionnaire. Here's how to prepare and what to expect.",
        og_image="plasma-donation-screening-guide-og.jpg",
        schema_name="Plasma Donation Screening Guide",
        schema_description="Step-by-step overview of the initial physical screening process for new plasma donors. Includes ID requirements, health exam checklist, and FAQs."
    )

@app.route("/resources/plasma-donation-college-guide")
def plasma_donation_college_guide():
    return render_template("resources/plasma_donation_college_guide.html",
        schema_url="/resources/plasma-donation-college-guide",
        canonical_url="/resources/plasma-donation-college-guide",
        page_title="Plasma Donation for College Students: Veins, Gains & Study Time",
        meta_description="Can plasma donation affect your workouts, focus, or schedule as a student? Learn how to manage it safely without hurting your gains or grades.",
        og_title="Plasma Donation for Students: Side Effects, Schedule & Recovery",
        og_description="How to donate plasma as a broke college student without wrecking your sleep, workouts, or exam prep. Includes hydration tips and recovery guide.",
        og_image="plasma-donation-college-guide-og.jpg",
        schema_name="Plasma Donation for Students Guide",
        schema_description="Straightforward advice for students donating plasma. Learn how it affects your veins, workout recovery, study routine, and how to donate safely."
    )

@app.route("/resources/plasma-vs-platelet-donation")
def plasma_vs_platelet_donation():
    return render_template("resources/plasma_vs_platelet_donation.html",
        schema_url="/resources/plasma-vs-platelet-donation",
        canonical_url="/resources/plasma-vs-platelet-donation",
        page_title="Plasma vs Platelet Donation: Which Makes a Bigger Impact?",
        meta_description="Not sure whether to donate plasma or platelets? This guide compares collection volume, donation frequency, and community need.",
        og_title="Plasma or Platelets: Which Should You Donate?",
        og_description="We compare plasma and platelet donation in terms of volume, impact, and frequency — based on Red Cross donation guidelines and donor experience.",
        og_image="plasma-vs-platelet-donation-og.jpg",
        schema_name="Plasma vs Platelet Donation Comparison Guide",
        schema_description="Should you donate plasma or platelets? This guide compares donation volume, frequency, and which one helps more based on real data and Red Cross guidelines."
    )

@app.route("/resources/plasma-donation-tips-first-time")
def plasma_donation_tips_first_time():
    return render_template("resources/plasma_donation_tips_first_time.html",
        schema_url="/resources/plasma-donation-tips-first-time",
        canonical_url="/resources/plasma-donation-tips-first-time",
        page_title="Plasma Donation Tips for First-Timers: What to Know Before You Go",
        meta_description="Donating plasma for the first time? Learn exactly what to eat, drink, and wear — plus what to bring and how to feel better after.",
        og_title="First-Time Plasma Donation Guide",
        og_description="New to plasma donation? Here's how to prep the night before and day-of to stay safe, avoid dizziness, and make the process smooth.",
        og_image="plasma-donation-tips-first-time-og.jpg",
        schema_name="First-Time Plasma Donation Preparation Guide",
        schema_description="Checklist for your first plasma donation: meals, hydration, what to bring, what to wear, how to feel after, and safety tips."
    )

@app.route('/plasma-donation-earnings-calculator')
def plasma_donation_earnings_calculator():
    schema_name = "Plasma Donation Earnings Calculator"
    schema_description = "Calculate your potential plasma donation earnings based on weight, frequency, location, and donor status. Includes new donor bonuses and eligibility check."
    schema_url = "/plasma-donation-earnings-calculator"
    return render_template(
        'plasma_donation_earnings_calculator.html', 
        is_homepage=False,
        schema_name=schema_name,
        schema_description=schema_description,
        schema_url=schema_url
    )

@app.route('/lipid-panel-goals-calculator')
def lipid_panel_goals_calculator():
    schema_name = "Lipid Panel Goals Calculator"
    schema_description = "Calculate your ideal cholesterol targets based on age, risk, and medical guidelines. Includes LDL, HDL, non-HDL, triglycerides, and total cholesterol."
    schema_url = "/lipid-panel-goals-calculator"
    return render_template(
        'lipid_panel_goals_calculator.html',
        is_homepage=False,
        schema_name=schema_name,
        schema_description=schema_description,
        schema_url=schema_url
    )

@app.route('/about')
def about():
    return render_template(
        'about.html',
        is_homepage=False,
        schema_name="About HealthCalculators.xyz",
        schema_description="Learn about HealthCalculators.xyz — our mission, methodology, and the evidence-based approach behind every health calculator.",
        schema_url="/about"
    )

@app.route('/privacy')
def privacy():
    return render_template(
        'privacy.html',
        is_homepage=False,
        schema_name="Privacy Policy",
        schema_description="How HealthCalculators.xyz collects, uses, and protects your data.",
        schema_url="/privacy"
    )

@app.route('/terms')
def terms():
    return render_template(
        'terms.html',
        is_homepage=False,
        schema_name="Terms of Service",
        schema_description="Terms and conditions for using HealthCalculators.xyz.",
        schema_url="/terms"
    )

@app.route('/sitemap.xml')
def sitemap_xml():
    """Auto-generate sitemap from registered routes."""
    from datetime import date
    today = date.today().isoformat()

    # Collect all public page URLs
    pages = []

    # Homepage
    pages.append({'loc': '/', 'priority': '1.0', 'changefreq': 'weekly'})

    # Calculator pages (from cards array)
    for card in cards:
        pages.append({'loc': card['url'], 'priority': '0.8', 'changefreq': 'monthly', 'lastmod': today})

    # Resource listing page
    pages.append({'loc': '/resources', 'priority': '0.7', 'changefreq': 'weekly'})

    # Resource guide pages (from articles array)
    for article in articles:
        pages.append({'loc': article['url'], 'priority': '0.7', 'changefreq': 'monthly', 'lastmod': today})

    # Static pages
    for path in ['/about', '/privacy', '/terms']:
        pages.append({'loc': path, 'priority': '0.3', 'changefreq': 'yearly'})

    xml = '<?xml version="1.0" encoding="UTF-8"?>\n'
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
    for page in pages:
        xml += '  <url>\n'
        xml += f'    <loc>https://healthcalculators.xyz{page["loc"]}</loc>\n'
        if 'lastmod' in page:
            xml += f'    <lastmod>{page["lastmod"]}</lastmod>\n'
        xml += f'    <priority>{page["priority"]}</priority>\n'
        xml += f'    <changefreq>{page["changefreq"]}</changefreq>\n'
        xml += '  </url>\n'
    xml += '</urlset>'

    return Response(xml, mimetype='application/xml', headers={
        'Cache-Control': 'no-store, no-cache, must-revalidate, max-age=0',
        'Pragma': 'no-cache',
        'Expires': '0'
    })

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
