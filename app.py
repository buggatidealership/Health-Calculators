import os
import logging
from flask import Flask, render_template, send_from_directory, redirect, Response, request

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
        "calculators": ["/tdee-calculator", "/ideal-body-weight-calculator", "/caloric-intake-macronutrient-calculator", "/body-fat-calculator"],
        "guides": ["/resources/army-body-fat-calculator-guide"]
    },
    "/body-fat-calculator": {
        "calculators": ["/bmi-calculator", "/ideal-body-weight-calculator", "/tdee-calculator", "/protein-intake-calculator", "/army-body-fat-calculator"],
        "guides": []
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
        "calculators": ["/ivf-due-date-calculator", "/menopause-calculator", "/lifespan-longevity-calculator", "/newborn-weight-loss-calculator"],
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
        "calculators": ["/glp1-comparison-calculator", "/ozempic-weight-loss-calculator", "/fasting-weight-loss-calculator", "/tdee-calculator"],
        "guides": ["/resources/ozempic-weight-loss-calculator-guide", "/resources/semaglutide-vs-ozempic-guide"]
    },
    "/ozempic-weight-loss-calculator": {
        "calculators": ["/wegovy-weight-loss-calculator", "/glp1-comparison-calculator", "/zepbound-weight-loss-calculator", "/ozempic-pen-click-calculator", "/ozempic-face-calculator", "/mounjaro-weight-loss-calculator", "/fasting-weight-loss-calculator", "/tdee-calculator", "/ideal-body-weight-calculator"],
        "guides": ["/resources/ozempic-weight-loss-calculator-guide", "/resources/semaglutide-vs-ozempic-guide"]
    },
    "/wegovy-weight-loss-calculator": {
        "calculators": ["/ozempic-weight-loss-calculator", "/glp1-comparison-calculator", "/zepbound-weight-loss-calculator", "/mounjaro-weight-loss-calculator", "/ozempic-face-calculator", "/bmi-calculator", "/tdee-calculator"],
        "guides": ["/resources/ozempic-weight-loss-calculator-guide", "/resources/semaglutide-vs-ozempic-guide"]
    },
    "/mounjaro-weight-loss-calculator": {
        "calculators": ["/zepbound-weight-loss-calculator", "/glp1-comparison-calculator", "/ozempic-weight-loss-calculator", "/wegovy-weight-loss-calculator", "/ozempic-face-calculator", "/bmi-calculator", "/tdee-calculator", "/caloric-intake-macronutrient-calculator"],
        "guides": []
    },
    "/zepbound-weight-loss-calculator": {
        "calculators": ["/glp1-comparison-calculator", "/mounjaro-weight-loss-calculator", "/ozempic-weight-loss-calculator", "/wegovy-weight-loss-calculator", "/ozempic-face-calculator", "/bmi-calculator", "/body-fat-calculator"],
        "guides": []
    },
    "/glp1-comparison-calculator": {
        "calculators": ["/ozempic-weight-loss-calculator", "/wegovy-weight-loss-calculator", "/mounjaro-weight-loss-calculator", "/zepbound-weight-loss-calculator", "/ozempic-face-calculator", "/ozempic-pen-click-calculator", "/tdee-calculator"],
        "guides": ["/resources/ozempic-weight-loss-calculator-guide", "/resources/semaglutide-vs-ozempic-guide"]
    },
    "/ozempic-face-calculator": {
        "calculators": ["/glp1-comparison-calculator", "/ozempic-weight-loss-calculator", "/wegovy-weight-loss-calculator", "/mounjaro-weight-loss-calculator", "/bmi-calculator", "/body-fat-calculator"],
        "guides": ["/resources/ozempic-weight-loss-calculator-guide", "/resources/semaglutide-vs-ozempic-guide"]
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
        "calculators": ["/retirement-savings-calculator", "/tdee-calculator", "/alcohol-impact-calculator", "/lipid-panel-goals-calculator", "/menopause-calculator"],
        "guides": []
    },
    "/fasting-weight-loss-calculator": {
        "calculators": ["/tdee-calculator", "/caloric-intake-macronutrient-calculator", "/ozempic-weight-loss-calculator", "/carb-cycling-calculator"],
        "guides": ["/resources/fasting-weight-loss-chart", "/resources/how-to-start-carb-cycling"]
    },
    "/bmi-calculator": {
        "calculators": ["/tdee-calculator", "/ideal-body-weight-calculator", "/caloric-intake-macronutrient-calculator", "/army-body-fat-calculator", "/body-roundness-index-calculator", "/menopause-calculator"],
        "guides": []
    },
    "/body-roundness-index-calculator": {
        "calculators": ["/bmi-calculator", "/body-fat-calculator", "/ideal-body-weight-calculator", "/army-body-fat-calculator"],
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
    "/sleep-calculator": {
        "calculators": ["/tdee-calculator", "/bmi-calculator", "/calories-burned-calculator", "/menopause-calculator"],
        "guides": []
    },
    "/menopause-calculator": {
        "calculators": ["/female-fertility-calculator", "/bmi-calculator", "/sleep-calculator", "/lifespan-longevity-calculator"],
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
        "title": "Menopause Age Calculator",
        "url": "/menopause-calculator",
        "summary": "Predict perimenopause and menopause onset based on family history, lifestyle, and research data.",
        "icon": "🌡️",
        "cta": "Predict Menopause Age",
        "color": "pink",
        "category": "fertility",
        "popular": False
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
        "title": "Wegovy Weight Loss Calculator",
        "url": "/wegovy-weight-loss-calculator",
        "summary": "Project your expected weight loss on Wegovy (semaglutide 2.4mg) based on STEP clinical trial data. Supports injectable and oral pill forms.",
        "icon": "💊",
        "cta": "Project Weight Loss",
        "color": "purple",
        "category": "medications",
        "popular": False
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
        "title": "Zepbound Weight Loss Calculator",
        "url": "/zepbound-weight-loss-calculator",
        "summary": "Project your expected weight loss on Zepbound (tirzepatide) based on SURMOUNT clinical trial data. Personalized timeline by dose, starting weight, and treatment duration.",
        "icon": "💊",
        "cta": "Project Weight Loss",
        "color": "blue",
        "category": "medications",
        "popular": False
    },
    {
        "title": "GLP-1 Comparison Calculator",
        "url": "/glp1-comparison-calculator",
        "summary": "Compare projected weight loss on Ozempic, Mounjaro, and Zepbound side by side. Based on STEP and SURMOUNT clinical trial data.",
        "icon": "📊",
        "cta": "Compare Medications",
        "color": "teal",
        "category": "medications",
        "popular": False
    },
    {
        "title": "Ozempic Face Risk Calculator",
        "url": "/ozempic-face-calculator",
        "summary": "Estimate your risk of facial volume loss from GLP-1 weight loss medications based on age, BMI, rate of weight loss, and other clinical factors.",
        "icon": "😮",
        "cta": "Assess Risk",
        "color": "teal",
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
    },
    {
        "title": "Body Fat Calculator",
        "url": "/body-fat-calculator",
        "summary": "Calculate your body fat percentage using the U.S. Navy method. Simple neck, waist, and hip measurements give accurate body composition estimates.",
        "icon": "📐",
        "cta": "Calculate Body Fat",
        "color": "blue",
        "category": "fitness",
        "popular": False
    },
    {
        "title": "Body Roundness Index (BRI)",
        "url": "/body-roundness-index-calculator",
        "summary": "Calculate your Body Roundness Index using waist circumference and height. BRI measures central adiposity and predicts health risk more accurately than BMI.",
        "icon": "📏",
        "cta": "Calculate BRI",
        "color": "green",
        "category": "fitness",
        "popular": False
    },
    {
        "title": "Sleep Calculator",
        "url": "/sleep-calculator",
        "summary": "Calculate the best time to go to bed or wake up based on 90-minute sleep cycles. Time your sleep to complete full cycles and wake up refreshed.",
        "icon": "🌙",
        "cta": "Calculate Sleep Times",
        "color": "purple",
        "category": "health",
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

# ===== CATEGORY HUB PAGES =====
category_hub_data = {
    "nutrition": {
        "url": "/nutrition-calculators",
        "title": "Nutrition & Diet Calculators",
        "description": "Evidence-based tools to calculate your caloric needs, optimize macronutrient ratios, and make informed dietary decisions. Built on peer-reviewed formulas from sports nutrition and clinical research.",
        "content": """
        <div class="hub-content-section">
          <h2>How to Use Nutrition Calculators Effectively</h2>
          <p>Nutrition calculators translate complex metabolic science into personalized numbers you can act on. Rather than following generic diet advice, these tools account for your unique body composition, activity level, and goals.</p>
          <h3>Start With Your TDEE</h3>
          <p>Your Total Daily Energy Expenditure is the foundation of any nutrition plan. It tells you how many calories your body burns each day, including exercise. From there, you can create a caloric deficit for fat loss, a surplus for muscle gain, or eat at maintenance.</p>
          <h3>Then Dial In Macros</h3>
          <p>Calories matter, but where those calories come from matters too. Protein intake drives muscle protein synthesis and satiety. Carb cycling can optimize performance around training. Our calculators use formulas validated against metabolic ward studies to give you precise targets.</p>
          <h3>Common Mistakes to Avoid</h3>
          <ul>
            <li>Setting calories too low — aggressive deficits (over 500 cal/day) increase muscle loss and metabolic adaptation</li>
            <li>Ignoring protein — most people undershoot. Aim for 0.7-1g per pound of bodyweight when in a deficit</li>
            <li>Not recalculating — your TDEE changes as your weight changes. Recalculate every 10-15 lbs</li>
          </ul>
        </div>
        """
    },
    "medications": {
        "url": "/weight-loss-medication-calculators",
        "title": "Weight Loss Medication Calculators",
        "description": "Project your expected weight loss on GLP-1 medications like Ozempic, Mounjaro, Wegovy, and Zepbound. All projections based on published clinical trial data from STEP and SURMOUNT studies.",
        "content": """
        <div class="hub-content-section">
          <h2>Understanding GLP-1 Weight Loss Projections</h2>
          <p>GLP-1 receptor agonists represent a breakthrough in obesity treatment, with clinical trials showing 15-25% total body weight loss depending on the medication and dose. Our calculators model these outcomes using data from the largest published trials.</p>
          <h3>How These Calculators Work</h3>
          <p>Each calculator uses a logarithmic weight loss curve fitted to trial-reported outcomes at specific time points. This captures the real pattern of GLP-1 weight loss: rapid initial loss that gradually plateaus over 12-18 months. Your projection accounts for starting weight, dose, and treatment duration.</p>
          <h3>Key Differences Between Medications</h3>
          <ul>
            <li><strong>Ozempic (semaglutide 1mg)</strong> — Originally approved for type 2 diabetes. Average weight loss ~12-15% over 68 weeks in STEP trials</li>
            <li><strong>Wegovy (semaglutide 2.4mg)</strong> — Higher-dose semaglutide specifically for obesity. ~15-17% weight loss in STEP trials</li>
            <li><strong>Mounjaro/Zepbound (tirzepatide)</strong> — Dual GIP/GLP-1 agonist. ~20-25% weight loss in SURMOUNT trials, the most effective option to date</li>
          </ul>
          <h3>Important Caveats</h3>
          <p>Individual results vary significantly from trial averages. Factors like diet, exercise, starting BMI, and genetics all influence outcomes. These projections are estimates based on population-level data, not guarantees. Always work with your prescribing physician to set realistic expectations.</p>
        </div>
        """
    },
    "fitness": {
        "url": "/fitness-body-composition-calculators",
        "title": "Fitness & Body Composition Calculators",
        "description": "Measure and track your body composition with evidence-based calculators for BMI, body fat percentage, ideal weight, and more. Based on formulas validated against DEXA and clinical measurements.",
        "content": """
        <div class="hub-content-section">
          <h2>Beyond the Scale: Measuring What Matters</h2>
          <p>Bodyweight alone tells an incomplete story. Two people at the same weight can have vastly different body compositions — and very different health risk profiles. These calculators help you understand <em>what</em> your body is made of, not just how much it weighs.</p>
          <h3>Which Calculator Should You Start With?</h3>
          <ul>
            <li><strong>BMI Calculator</strong> — Quick screening tool using just height and weight. Good starting point but has known limitations for athletes and muscular individuals</li>
            <li><strong>Body Fat Calculator</strong> — Uses the U.S. Navy circumference method for a more accurate picture of body composition. Requires a tape measure</li>
            <li><strong>Body Roundness Index</strong> — Newer metric that captures central adiposity (belly fat) specifically, which is the strongest predictor of metabolic disease risk</li>
            <li><strong>Ideal Body Weight</strong> — Compares multiple evidence-based formulas (Devine, Robinson, Miller, Hamwi) to give you a realistic target range</li>
          </ul>
          <h3>Tracking Progress Over Time</h3>
          <p>Body composition changes slowly. Measure under consistent conditions (same time of day, same hydration state) and track trends over weeks, not daily fluctuations. A 1-2% change in body fat percentage per month is excellent progress.</p>
        </div>
        """
    },
    "cosmetic": {
        "url": "/cosmetic-procedure-calculators",
        "title": "Cosmetic & Aesthetic Procedure Calculators",
        "description": "Estimate costs, dosages, and expected outcomes for popular cosmetic procedures including breast augmentation, Botox, lip fillers, and liposuction. Informed decision-making backed by clinical data.",
        "content": """
        <div class="hub-content-section">
          <h2>Making Informed Cosmetic Decisions</h2>
          <p>Cosmetic procedures are significant investments in both cost and recovery time. These calculators help you set realistic expectations for outcomes and budget before your consultation.</p>
          <h3>Cost Factors That Matter</h3>
          <p>Procedure costs vary dramatically based on geographic region, surgeon experience, facility type, and technique. Our calculators account for these variables to give you a realistic range rather than a misleading average. Board-certified surgeons in major metros typically charge 30-50% more than average — but complication rates are also significantly lower.</p>
          <h3>Important Notes</h3>
          <ul>
            <li>These calculators provide estimates only — get multiple consultations for accurate quotes</li>
            <li>The cheapest option is rarely the safest. Factor in surgeon credentials and facility accreditation</li>
            <li>Budget for follow-up appointments, compression garments, and potential revisions</li>
          </ul>
        </div>
        """
    },
    "fertility": {
        "url": "/pregnancy-fertility-calculators",
        "title": "Pregnancy & Fertility Calculators",
        "description": "Track fertility windows, predict due dates, monitor newborn development, and plan for reproductive health milestones. Tools designed for every stage from conception through postpartum.",
        "content": """
        <div class="hub-content-section">
          <h2>Tools for Every Reproductive Stage</h2>
          <p>From tracking ovulation to monitoring your newborn's growth, these calculators support data-driven decisions throughout your reproductive journey.</p>
          <h3>Trying to Conceive</h3>
          <p>The <strong>Female Fertility Calculator</strong> helps identify your most fertile days based on cycle length and ovulation patterns. For those undergoing assisted reproduction, our <strong>IVF Due Date Calculator</strong> accounts for the specific timing of fresh and frozen embryo transfers — which differs from natural conception dating by up to 2 weeks.</p>
          <h3>During Pregnancy</h3>
          <p>Accurate due date calculation matters for prenatal care scheduling, genetic screening windows, and delivery planning. Our calculators use the standard Naegele's rule adjusted for individual cycle length.</p>
          <h3>After Birth</h3>
          <p>The <strong>Newborn Weight Loss Calculator</strong> helps you assess whether your baby's initial weight loss is within normal clinical guidelines (up to 7-10% in the first few days is expected) or warrants medical attention.</p>
        </div>
        """
    },
    "health": {
        "url": "/health-longevity-calculators",
        "title": "Health & Longevity Calculators",
        "description": "Assess your health risks, optimize supplementation, and estimate life expectancy with calculators based on epidemiological research and clinical guidelines from WHO, CDC, and peer-reviewed studies.",
        "content": """
        <div class="hub-content-section">
          <h2>Data-Driven Health Assessment</h2>
          <p>These calculators translate population-level health research into personalized insights. They don't replace medical testing — but they can help you understand risk factors and have more informed conversations with your healthcare provider.</p>
          <h3>Longevity & Risk Assessment</h3>
          <p>The <strong>Lifespan Calculator</strong> uses actuarial data adjusted for lifestyle factors (exercise, diet, sleep, smoking, alcohol) to estimate life expectancy. It's not a crystal ball, but it highlights which modifiable factors have the biggest impact on your projected healthspan.</p>
          <h3>Supplementation</h3>
          <p>Vitamin D deficiency affects an estimated 1 billion people worldwide. Our <strong>Vitamin D Calculator</strong> estimates your ideal daily intake based on sun exposure, skin tone, latitude, and BMI — factors that dramatically affect your body's ability to synthesize vitamin D naturally.</p>
          <h3>Sleep Optimization</h3>
          <p>The <strong>Sleep Calculator</strong> uses 90-minute sleep cycle science to find optimal bedtimes and wake times. Waking mid-cycle causes grogginess regardless of total sleep duration — timing matters as much as quantity.</p>
        </div>
        """
    },
    "financial": {
        "url": "/financial-health-calculators",
        "title": "Financial & Health Earnings Calculators",
        "description": "Calculate earnings from plasma donation and plan retirement savings. Practical financial tools at the intersection of health and personal finance.",
        "content": """
        <div class="hub-content-section">
          <h2>Health-Adjacent Financial Planning</h2>
          <p>Financial health and physical health are deeply connected. These tools help you make informed decisions about health-related income opportunities and long-term financial planning.</p>
          <h3>Plasma Donation</h3>
          <p>Plasma donation centers pay $50-$75+ per donation, with new donors often earning bonuses up to $1,000 in their first month. Our calculator estimates annual earnings based on your eligible donation frequency, weight (which affects plasma volume collected), and local center rates.</p>
        </div>
        """
    }
}

# Add URL to categories for hub linking
category_urls = {cat["id"]: category_hub_data[cat["id"]]["url"] for cat in categories if cat["id"] in category_hub_data}

@app.route('/nutrition-calculators')
@app.route('/weight-loss-medication-calculators')
@app.route('/fitness-body-composition-calculators')
@app.route('/cosmetic-procedure-calculators')
@app.route('/pregnancy-fertility-calculators')
@app.route('/health-longevity-calculators')
@app.route('/financial-health-calculators')
def category_hub():
    path = request.path.lstrip('/')
    # Find the matching category
    hub = None
    cat_id = None
    for cid, data in category_hub_data.items():
        if data["url"].lstrip('/') == path:
            hub = data
            cat_id = cid
            break
    if not hub:
        return "Not found", 404

    cat_info = next((c for c in categories if c["id"] == cat_id), None)
    hub_cards = [c for c in cards if c.get("category") == cat_id]
    other_cats = [
        {"icon": c["icon"], "label": c["label"], "url": category_hub_data[c["id"]]["url"]}
        for c in categories if c["id"] != cat_id and c["id"] in category_hub_data
    ]

    return render_template(
        'category_hub.html',
        page_title=f"{hub['title']} | HealthCalculators.xyz",
        meta_description=hub["description"],
        meta_keywords=f"{cat_info['label']}, health calculators, {cat_id} tools",
        og_title=hub["title"],
        og_description=hub["description"],
        og_url=hub["url"],
        schema_name=hub["title"],
        schema_description=hub["description"],
        schema_url=hub["url"],
        canonical_url=hub["url"],
        breadcrumb_title=hub["title"],
        hub_icon=cat_info["icon"],
        hub_title=hub["title"],
        hub_description=hub["description"],
        hub_cards=hub_cards,
        hub_content=hub["content"],
        other_categories=other_cats,
        is_homepage=False
    )

# ===== COMPARISON PAGES =====
@app.route('/bmi-vs-body-fat')
def comparison_bmi_vs_body_fat():
    return render_template(
        'comparison_bmi_vs_body_fat.html',
        is_homepage=False,
        page_title="BMI vs Body Fat Percentage: Which Metric Should You Use? | HealthCalculators.xyz",
        meta_description="Compare BMI and body fat percentage side by side. Learn when to use each metric, healthy ranges for both, limitations, and why using both gives you the most accurate picture.",
        meta_keywords="BMI vs body fat, body fat percentage vs BMI, BMI accuracy, body composition metrics",
        og_title="BMI vs Body Fat Percentage: Which Metric Should You Use?",
        og_description="Data-driven comparison of BMI and body fat percentage — when to use each, healthy ranges, and limitations.",
        og_url="/bmi-vs-body-fat",
        schema_name="BMI vs Body Fat Percentage Comparison",
        schema_description="Compare BMI and body fat percentage: accuracy, healthy ranges, limitations, and when to use each body composition metric.",
        schema_url="/bmi-vs-body-fat",
        canonical_url="/bmi-vs-body-fat",
        breadcrumb_title="BMI vs Body Fat"
    )

@app.route('/tdee-vs-bmr')
def comparison_tdee_vs_bmr():
    return render_template(
        'comparison_tdee_vs_bmr.html',
        is_homepage=False,
        page_title="TDEE vs BMR: What's the Difference? | HealthCalculators.xyz",
        meta_description="Understand the difference between TDEE and BMR. Learn how each is calculated, sample values by age and gender, and which to use for weight loss calorie targets.",
        meta_keywords="TDEE vs BMR, BMR vs TDEE, basal metabolic rate, total daily energy expenditure, calorie calculator",
        og_title="TDEE vs BMR: What's the Difference?",
        og_description="BMR is calories at rest. TDEE is total daily burn. Learn the difference, see sample values, and find which to use for dieting.",
        og_url="/tdee-vs-bmr",
        schema_name="TDEE vs BMR Comparison",
        schema_description="Compare Total Daily Energy Expenditure (TDEE) and Basal Metabolic Rate (BMR): formulas, sample values, and which to use for calorie targets.",
        schema_url="/tdee-vs-bmr",
        canonical_url="/tdee-vs-bmr",
        breadcrumb_title="TDEE vs BMR"
    )

@app.route('/ozempic-vs-mounjaro')
def comparison_ozempic_vs_mounjaro():
    return render_template(
        'comparison_ozempic_vs_mounjaro.html',
        is_homepage=False,
        page_title="Ozempic vs Mounjaro: Weight Loss, Cost, Side Effects Compared | HealthCalculators.xyz",
        meta_description="Compare Ozempic and Mounjaro head-to-head: clinical trial weight loss data (14.9% vs 22.5%), dosing schedules, side effect rates, cost, and which medication may be right for you.",
        meta_keywords="Ozempic vs Mounjaro, semaglutide vs tirzepatide, GLP-1 comparison, weight loss medication comparison",
        og_title="Ozempic vs Mounjaro: Complete Comparison",
        og_description="Clinical trial data shows Mounjaro produces 22.5% weight loss vs Ozempic's 14.9%. Full comparison of cost, side effects, and dosing.",
        og_url="/ozempic-vs-mounjaro",
        schema_name="Ozempic vs Mounjaro Weight Loss Comparison",
        schema_description="Data-driven comparison of Ozempic (semaglutide) and Mounjaro (tirzepatide): weight loss results, mechanism, dosing, side effects, and cost.",
        schema_url="/ozempic-vs-mounjaro",
        canonical_url="/ozempic-vs-mounjaro",
        breadcrumb_title="Ozempic vs Mounjaro"
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

@app.route('/sleep-calculator')
def sleep_calculator():
    schema_name = "Sleep Calculator"
    schema_description = "Calculate the best time to go to bed or wake up based on 90-minute sleep cycles. Wake up feeling refreshed by timing your sleep to complete full cycles."
    schema_url = "/sleep-calculator"
    return render_template(
        'sleep_calculator.html',
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

@app.route('/body-roundness-index-calculator')
def body_roundness_index_calculator():
    schema_name = "Body Roundness Index (BRI) Calculator"
    schema_description = "Calculate your Body Roundness Index using waist circumference and height. BRI measures central adiposity and predicts health risk more accurately than BMI alone."
    schema_url = "/body-roundness-index-calculator"
    return render_template(
        'bri_calculator.html',
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

@app.route('/wegovy-weight-loss-calculator')
def wegovy_weight_loss_calculator():
    schema_name = "Wegovy Weight Loss Calculator"
    schema_description = "Project your expected weight loss on Wegovy (semaglutide 2.4mg) based on STEP clinical trial data. Personalized by starting weight, form (injectable or oral), and treatment duration."
    schema_url = "/wegovy-weight-loss-calculator"
    return render_template(
        'wegovy_weight_loss_calculator.html',
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

@app.route('/zepbound-weight-loss-calculator')
def zepbound_weight_loss_calculator():
    schema_name = "Zepbound Weight Loss Calculator"
    schema_description = "Project your expected weight loss on Zepbound (tirzepatide) based on SURMOUNT clinical trial data. Personalized timeline by dose, starting weight, and treatment duration."
    schema_url = "/zepbound-weight-loss-calculator"
    return render_template(
        'zepbound_weight_loss_calculator.html',
        is_homepage=False,
        schema_name=schema_name,
        schema_description=schema_description,
        schema_url=schema_url
    )

@app.route('/glp1-comparison-calculator')
def glp1_comparison_calculator():
    schema_name = "GLP-1 Comparison Calculator"
    schema_description = "Compare projected weight loss on Ozempic (semaglutide), Mounjaro (tirzepatide), and Zepbound (tirzepatide) side by side. Based on STEP-1 and SURMOUNT-1 clinical trial data."
    schema_url = "/glp1-comparison-calculator"
    return render_template(
        'glp1_comparison_calculator.html',
        is_homepage=False,
        schema_name=schema_name,
        schema_description=schema_description,
        schema_url=schema_url
    )

@app.route('/ozempic-face-calculator')
def ozempic_face_calculator():
    schema_name = "Ozempic Face Risk Calculator"
    schema_description = "Estimate your risk of facial volume loss from GLP-1 weight loss medications like Ozempic and Wegovy. Based on clinical data on age, BMI, and rate of weight loss."
    schema_url = "/ozempic-face-calculator"
    return render_template(
        'ozempic_face_calculator.html',
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
        "color": "purple",
        "category": "health"
    },
    {
        "title": "Plasma Donation for College Students: Veins, Gains & Study Time",
        "url": "/resources/plasma-donation-college-guide",
        "summary": "Can plasma donation affect your workouts, focus, or schedule as a student? Learn how to manage it safely without hurting your gains or grades.",
        "icon": "🩸",
        "cta": "Read Guide",
        "color": "blue",
        "category": "health"
    },
    {
        "title": "Plasma Donation Screening: What to Expect at Your First Visit",
        "url": "/resources/plasma-donation-screening-guide",
        "summary": "Learn what happens during the initial plasma donation screening. Covers ID check, health questions, physical exam, and tips to prepare.",
        "icon": "🩸",
        "cta": "Read Guide",
        "color": "red",
        "category": "health"
    },
    {
        "title": "Plasma Donation Tips for First-Timers: What to Know Before You Go",
        "url": "/resources/plasma-donation-tips-first-time",
        "summary": "Donating plasma for the first time? Learn exactly what to eat, drink, and wear — plus what to bring and how to feel better after.",
        "icon": "🩸",
        "cta": "Read Guide",
        "color": "pink",
        "category": "health"
    },
    {
        "title": "How to Prevent Hair Loss: Science-Based Prevention & Treatment",
        "url": "/resources/how-to-prevent-hair-loss",
        "summary": "Learn how to prevent hair loss with simple lifestyle changes, supplements, and treatments. Evidence-based strategies for both men and women.",
        "icon": "💆",
        "cta": "Read Guide",
        "color": "blue",
        "category": "cosmetic"
    },
    {
        "title": "Antidepressants and Body Fat: Understanding the Connection",
        "url": "/resources/antidepressants-and-body-fat",
        "summary": "Do antidepressants cause body fat gain? Learn which medications have the strongest effect, why it happens, and how to track changes over time.",
        "icon": "💊",
        "cta": "Read Guide",
        "color": "blue",
        "category": "medications"
    },
    {
        "title": "Do Breast Implants Cause Weight Gain? The Science-Based Answer",
        "url": "/resources/do-breast-implants-cause-weight-gain",
        "summary": "Learn whether breast implants cause weight gain based on scientific evidence. Understand implant weight, fluid retention, and lifestyle factors.",
        "icon": "⚖️",
        "cta": "Read Guide",
        "color": "pink",
        "category": "cosmetic"
    },
    {
        "title": "Who Should Not Get Breast Implants? Medical & Aesthetic Guidelines",
        "url": "/resources/who-should-not-get-breast-implants",
        "summary": "Discover who should avoid breast implants due to health risks, psychological readiness, or FDA restrictions. Based on ASPS and surgeon guidance.",
        "icon": "🚫",
        "cta": "Read Guide",
        "color": "pink",
        "category": "cosmetic"
    },
    {
        "title": "Can a Mammogram Pop Breast Implants? Risks & Safety Explained",
        "url": "/resources/can-a-mammogram-pop-breast-implants",
        "summary": "Learn whether mammograms can damage breast implants, how to protect your implants during imaging, and what to expect from screening.",
        "icon": "🏥",
        "cta": "Read Guide",
        "color": "pink",
        "category": "cosmetic"
    },
    {
        "title": "How Alcohol Is Absorbed and Eliminated: The Science Behind BAC Levels",
        "url": "/resources/how-alcohol-affects-your-bac",
        "summary": "Understand how alcohol is absorbed and processed by the body. Learn how weight, gender, and time affect your BAC.",
        "icon": "🍷",
        "cta": "Read Guide",
        "color": "blue",
        "category": "health"
    },
    {
        "title": "How to Use the IVF Due Date Calculator (Day 3, Day 5, and FET)",
        "url": "/resources/ivf-due-date-calculator-guide",
        "summary": "Calculate your IVF pregnancy due date based on your specific transfer type (Day 3, Day 5, or FET). Includes detailed timeline.",
        "icon": "👶",
        "cta": "Read Guide",
        "color": "pink",
        "category": "fertility"
    },
    {
        "title": "How to Use the Chipotle Nutrition Calculator (Macros, Calories & Meal Hacks)",
        "url": "/resources/chipotle-nutrition-guide",
        "summary": "Track your Chipotle meal macros. Learn how to reduce calories, sugar, and carbs with our calculator-based guide.",
        "icon": "🌯",
        "cta": "Read Guide",
        "color": "green",
        "category": "nutrition"
    },
    {
        "title": "How to Customize Your Starbucks Drink (Macros, Calories & Sugar Explained)",
        "url": "/resources/starbucks-nutrition-guide",
        "summary": "Decode your Starbucks drink nutrition. Learn how to adjust calories, macros, and sugar with our calculator-backed customization guide.",
        "icon": "☕",
        "cta": "Read Guide",
        "color": "green",
        "category": "nutrition"
    },
    {
        "title": "How to Use the Army Body Fat Calculator (Tape Test Explained)",
        "url": "/resources/army-body-fat-calculator-guide",
        "summary": "Learn how the Army tape test works, how to measure body fat for military compliance, and understand the accuracy compared to other methods.",
        "icon": "📏",
        "cta": "Read Guide",
        "color": "blue",
        "category": "fitness"
    },
    {
        "title": "How to Start Carb Cycling for Fat Loss",
        "url": "/resources/how-to-start-carb-cycling",
        "summary": "Learn how to use carb cycling for weight loss and performance. Backed by research with sample plans and macro breakdowns.",
        "icon": "🍽️",
        "cta": "Read Guide",
        "color": "orange",
        "category": "nutrition"
    },
    {
        "title": "Fertility After 35: What to Know About Your Chances",
        "url": "/resources/fertility-after-35",
        "summary": "Age-related fertility facts, egg reserve decline, and how to assess your chance of pregnancy after age 35.",
        "icon": "🌿",
        "cta": "Read Guide",
        "color": "pink",
        "category": "fertility"
    },
    {
        "title": "Semaglutide vs Ozempic: What's the Difference?",
        "url": "/resources/semaglutide-vs-ozempic-guide",
        "summary": "Understand how semaglutide and Ozempic compare by dosage, brand, cost, side effects, and weight loss. Learn how they relate — and how they differ.",
        "icon": "💊",
        "cta": "Read Guide",
        "color": "purple",
        "category": "medications"
    },
    {
        "title": "Ozempic Weight Loss Calculator Guide",
        "url": "/resources/ozempic-weight-loss-calculator-guide",
        "summary": "Evidence-based guide to semaglutide weight loss: dosage protocols, timelines, and expected outcomes from clinical trials.",
        "icon": "💊",
        "cta": "Read Guide",
        "color": "purple",
        "category": "medications"
    },
    {
        "title": "Are Height Predictors Accurate?",
        "url": "/resources/are-height-predictors-accurate",
        "summary": "How accurate are height prediction methods? Compare scientific evidence for Khamis-Roche, mid-parental formula, and bone age prediction.",
        "icon": "📏",
        "cta": "Read Article",
        "color": "green",
        "category": "health"
    },
    {
        "title": "Breast Implant Size Guide",
        "url": "/resources/breast-implant-size-guide",
        "summary": "View implant size charts, band-to-cup estimates, and visual comparisons for A to D cups.",
        "icon": "💗",
        "cta": "View Guide",
        "color": "pink",
        "category": "cosmetic"
    },
    {
        "title": "How Many CCs is a C Cup?",
        "url": "/resources/how-many-ccs-is-a-c-cup",
        "summary": "Convert implant volume (in cc) to a C cup using surgeon-backed sizing rules. Includes chart + calculator.",
        "icon": "💗",
        "cta": "View Guide",
        "color": "pink",
        "category": "cosmetic"
    },
    {
        "title": "Fasting Weight Loss Chart: What to Expect Week by Week",
        "url": "/resources/fasting-weight-loss-chart",
        "summary": "Visual breakdown of fat loss trends from intermittent fasting protocols backed by clinical data.",
        "icon": "⏱️",
        "cta": "View Chart",
        "color": "green",
        "category": "nutrition"
    },
    {
        "title": "Botox Dosage Guide",
        "url": "/resources/botox-dosage-guide",
        "summary": "Clinical reference for Botox units by area, dosing ranges, and cost analysis. Based on FDA data and peer-reviewed research.",
        "icon": "💉",
        "cta": "View Guide",
        "color": "teal",
        "category": "cosmetic"
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

@app.route('/menopause-calculator')
def menopause_calculator():
    schema_name = "Menopause Age Calculator"
    schema_description = "Predict when you may enter perimenopause and menopause based on family history, lifestyle factors, and medical research. Evidence-based tool."
    schema_url = "/menopause-calculator"
    return render_template(
        'menopause_calculator.html',
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

@app.route('/body-fat-calculator')
def body_fat_calculator():
    schema_name = "Body Fat Percentage Calculator"
    schema_description = "Calculate your body fat percentage using the U.S. Navy method. Simple measurements of neck, waist, and hip circumference give accurate body composition estimates."
    schema_url = "/body-fat-calculator"
    return render_template(
        'body_fat_calculator.html',
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

@app.route('/editorial-policy')
def editorial_policy():
    return render_template(
        'editorial_policy.html',
        is_homepage=False,
        breadcrumb_title='Editorial Policy',
        schema_name="Editorial Policy – HealthCalculators.xyz",
        schema_description="Editorial policy for HealthCalculators.xyz — our standards for evidence-based health calculators, source requirements, review process, and corrections policy.",
        schema_url="/editorial-policy"
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

# ===== DEMOGRAPHIC CALCULATOR PAGES =====
demographic_pages = {
    'tdee-calculator-for-women': {
        'url': '/tdee-calculator-for-women',
        'page_title': 'TDEE Calculator for Women — Daily Calorie Needs by Age & Activity | HealthCalculators.xyz',
        'og_title': 'TDEE Calculator for Women — Daily Calorie Needs',
        'meta_description': 'Calculate your Total Daily Energy Expenditure as a woman. See how age, menstrual cycle, menopause, and activity level affect your calorie needs with gender-specific data.',
        'meta_keywords': 'TDEE calculator for women, female calorie calculator, women daily calories, TDEE women over 40, menopause calorie needs',
        'h1': 'TDEE Calculator for Women',
        'demographic': 'Women',
        'icon': '🔥',
        'read_time': '6',
        'calculator_url': '/tdee-calculator',
        'prefill_params': '?gender=female&age=35&weight_lb=140&height_ft=5&height_in=4&activity=1.55',
        'cta_title': 'Calculate Your TDEE',
        'cta_description': 'Pre-filled for a 35-year-old moderately active woman (5\'4", 140 lbs). Adjust to match your details.',
        'cta_button_text': 'Open TDEE Calculator →',
        'cta_note': 'Calculator opens with your values pre-filled. Adjust and recalculate.',
        'overview': '''
            <h2>Understanding TDEE for Women</h2>
            <p>Women's Total Daily Energy Expenditure differs from men's due to hormonal fluctuations, body composition differences, and life stages like pregnancy and menopause. On average, women burn 1,600–2,400 calories per day, compared to 2,000–3,000 for men.</p>
            <p>Key factors that make women's TDEE unique:</p>
            <ul>
                <li><strong>Menstrual cycle:</strong> BMR increases 5–10% during the luteal phase (days 15–28), adding 100–300 extra calories burned per day</li>
                <li><strong>Menopause:</strong> BMR decreases approximately 50–100 calories/day after menopause due to declining estrogen</li>
                <li><strong>Body composition:</strong> Women carry 6–11% more essential body fat than men, which lowers resting metabolic rate</li>
                <li><strong>Pregnancy/lactation:</strong> Calorie needs increase by 340–500 calories/day in later pregnancy and during breastfeeding</li>
            </ul>
        ''',
        'table_title': 'Average TDEE for Women by Age & Activity Level',
        'table_html': '''
            <div class="data-table-scroll">
            <table class="data-table">
                <thead>
                    <tr><th>Age</th><th>Sedentary</th><th>Light Activity</th><th>Moderate</th><th>Very Active</th></tr>
                </thead>
                <tbody>
                    <tr><td>18–25</td><td>1,800</td><td>2,000</td><td class="td-accent">2,200</td><td>2,500</td></tr>
                    <tr><td>26–35</td><td>1,750</td><td>1,950</td><td class="td-accent">2,150</td><td>2,400</td></tr>
                    <tr><td>36–45</td><td>1,700</td><td>1,900</td><td class="td-accent">2,100</td><td>2,350</td></tr>
                    <tr><td>46–55</td><td>1,600</td><td>1,800</td><td class="td-accent">2,000</td><td>2,250</td></tr>
                    <tr><td>56–65</td><td>1,550</td><td>1,750</td><td class="td-accent">1,950</td><td>2,150</td></tr>
                    <tr><td>65+</td><td>1,500</td><td>1,700</td><td class="td-accent">1,850</td><td>2,050</td></tr>
                </tbody>
            </table>
            </div>
        ''',
        'table_source': 'Based on Mifflin-St Jeor equation for a 5\'4" (163 cm) woman at 140 lbs (63.5 kg). Individual results vary.',
        'considerations': '''
            <h3>Menstrual Cycle & TDEE</h3>
            <p>Your TDEE naturally fluctuates throughout your menstrual cycle. During the <strong>luteal phase</strong> (after ovulation, before your period), your body temperature rises and BMR increases by 5–10%. This means you may genuinely need 100–300 more calories on these days. Many women report increased hunger during this phase — it's physiological, not a lack of willpower.</p>
            <h3>Perimenopause & Menopause</h3>
            <p>Starting in your late 30s to early 40s, declining estrogen levels lead to gradual decreases in muscle mass and increases in body fat. This can reduce your TDEE by 200–300 calories per day compared to your 20s. Resistance training becomes especially important during this transition to preserve metabolically active muscle tissue.</p>
            <h3>Weight Loss Considerations</h3>
            <p>Women should avoid aggressive calorie deficits below 1,200 calories/day, as this can disrupt menstrual cycles (hypothalamic amenorrhea), impair thyroid function, and accelerate bone density loss. A moderate deficit of 300–500 calories below TDEE is safer and more sustainable for most women.</p>
        ''',
        'faqs': [
            {'q': 'How many calories should a woman eat per day?', 'a': 'The average adult woman needs 1,600–2,400 calories per day depending on age, height, weight, and activity level. Sedentary women need fewer calories (around 1,600–1,800), while very active women may need 2,200–2,500+. Use a TDEE calculator for a personalized estimate.'},
            {'q': 'Does your period affect calorie burn?', 'a': 'Yes. During the luteal phase (roughly days 15–28 of your cycle), your basal metabolic rate increases by about 5–10%, meaning you burn an extra 100–300 calories per day. This is why many women experience increased hunger before their period.'},
            {'q': 'How does menopause affect TDEE?', 'a': 'Menopause typically reduces TDEE by 200–300 calories per day. This is caused by declining estrogen levels which lead to decreased muscle mass and increased fat storage. Resistance training and adequate protein intake (at least 1.0 g/kg) can help counteract this metabolic slowdown.'},
            {'q': 'Should women eat differently than men for weight loss?', 'a': 'Women generally need smaller calorie deficits than men and should avoid going below 1,200 calories/day. Women also benefit from higher protein intake during weight loss to preserve lean mass, and should adjust intake around menstrual cycle phases for better adherence and results.'}
        ],
        'sources': [
            'Mifflin MD, et al. "A new predictive equation for resting energy expenditure in healthy individuals." American Journal of Clinical Nutrition, 1990.',
            'Webb P. "24-hour energy expenditure and the menstrual cycle." American Journal of Clinical Nutrition, 1986.',
            'Lovejoy JC, et al. "Increased visceral fat and decreased energy expenditure during the menopausal transition." International Journal of Obesity, 2008.',
            'U.S. Department of Agriculture. Dietary Guidelines for Americans, 2020–2025.'
        ],
        'breadcrumbs': [
            {'name': 'Nutrition Calculators', 'url': '/nutrition-calculators'},
            {'name': 'TDEE Calculator for Women', 'url': '/tdee-calculator-for-women'}
        ]
    },
    'tdee-calculator-for-weight-loss': {
        'url': '/tdee-calculator-for-weight-loss',
        'page_title': 'TDEE Calculator for Weight Loss — How to Create a Calorie Deficit | HealthCalculators.xyz',
        'og_title': 'TDEE Calculator for Weight Loss',
        'meta_description': 'Use your TDEE to create the right calorie deficit for sustainable weight loss. See how deficit size affects fat loss speed, muscle retention, and metabolic adaptation.',
        'meta_keywords': 'TDEE calculator weight loss, calorie deficit calculator, how many calories to lose weight, TDEE for fat loss, weight loss calorie calculator',
        'h1': 'TDEE Calculator for Weight Loss',
        'demographic': 'Weight Loss',
        'icon': '📉',
        'read_time': '7',
        'calculator_url': '/tdee-calculator',
        'prefill_params': '?age=35&weight_lb=180&height_ft=5&height_in=7&activity=1.375',
        'cta_title': 'Calculate Your TDEE',
        'cta_description': 'Find your maintenance calories, then subtract 500 for steady weight loss of ~1 lb per week.',
        'cta_button_text': 'Calculate My TDEE →',
        'cta_note': 'Your TDEE minus 500 = your weight loss calorie target.',
        'overview': '''
            <h2>How TDEE Drives Weight Loss</h2>
            <p>Weight loss fundamentally comes down to one equation: <strong>eat fewer calories than your TDEE</strong>. Your Total Daily Energy Expenditure is the total number of calories your body burns each day. To lose weight, you need to create a calorie deficit — the gap between what you eat and what you burn.</p>
            <p>The size of your deficit determines your rate of loss:</p>
            <ul>
                <li><strong>250 cal/day deficit:</strong> ~0.5 lbs/week loss — minimal muscle loss, easy to sustain</li>
                <li><strong>500 cal/day deficit:</strong> ~1 lb/week loss — the standard recommendation for most people</li>
                <li><strong>750 cal/day deficit:</strong> ~1.5 lbs/week — aggressive but sustainable for those with more weight to lose</li>
                <li><strong>1,000 cal/day deficit:</strong> ~2 lbs/week — maximum safe rate, risk of muscle loss increases significantly</li>
            </ul>
            <p>The 500-calorie deficit rule is based on the principle that 1 pound of fat equals approximately 3,500 calories. However, actual weight loss is non-linear because your body adapts through metabolic adaptation, changes in NEAT (non-exercise activity thermogenesis), and water weight fluctuations.</p>
        ''',
        'table_title': 'Calorie Deficit Guide: TDEE to Weight Loss Timeline',
        'table_html': '''
            <div class="data-table-scroll">
            <table class="data-table">
                <thead>
                    <tr><th>Your TDEE</th><th>Moderate Deficit<br>(−500)</th><th>Aggressive Deficit<br>(−750)</th><th>Time to Lose 20 lbs<br>(moderate)</th><th>Time to Lose 20 lbs<br>(aggressive)</th></tr>
                </thead>
                <tbody>
                    <tr><td>1,800</td><td class="td-accent">1,300</td><td class="td-warning">1,050*</td><td>40 weeks</td><td>27 weeks</td></tr>
                    <tr><td>2,000</td><td class="td-accent">1,500</td><td>1,250</td><td>40 weeks</td><td>27 weeks</td></tr>
                    <tr><td>2,200</td><td class="td-accent">1,700</td><td>1,450</td><td>40 weeks</td><td>27 weeks</td></tr>
                    <tr><td>2,500</td><td class="td-accent">2,000</td><td>1,750</td><td>40 weeks</td><td>27 weeks</td></tr>
                    <tr><td>2,800</td><td class="td-accent">2,300</td><td>2,050</td><td>40 weeks</td><td>27 weeks</td></tr>
                    <tr><td>3,000</td><td class="td-accent">2,500</td><td>2,250</td><td>40 weeks</td><td>27 weeks</td></tr>
                </tbody>
            </table>
            </div>
            <p class="source-note">*Below 1,200 calories is generally not recommended without medical supervision.</p>
        ''',
        'table_source': 'Based on the 3,500 cal/lb approximation. Actual results vary due to metabolic adaptation.',
        'considerations': '''
            <h3>Metabolic Adaptation</h3>
            <p>As you lose weight, your TDEE decreases for two reasons: you weigh less (smaller body burns fewer calories) and your body actively reduces energy expenditure in response to the deficit. Research shows this "adaptive thermogenesis" can reduce your TDEE by an additional 5–15% beyond what weight loss alone would predict. This is why progress stalls — you need to recalculate your TDEE every 10–15 lbs lost.</p>
            <h3>Protein During a Deficit</h3>
            <p>When eating below your TDEE, protein intake becomes critical. Without adequate protein (1.6–2.2 g/kg of body weight), up to 25% of weight lost can come from muscle instead of fat. Higher protein intake preserves muscle, keeps you fuller, and has a higher thermic effect of food (your body burns more calories digesting protein than carbs or fat).</p>
            <h3>When to Adjust Your Deficit</h3>
            <p>If your weight loss stalls for more than 2–3 weeks, recalculate your TDEE at your new weight. Alternatively, increase activity rather than cutting calories further — adding 30 minutes of walking burns approximately 150 calories and is easier to sustain than eating less.</p>
        ''',
        'faqs': [
            {'q': 'How many calories should I eat to lose weight?', 'a': 'Subtract 500 from your TDEE for a moderate deficit that produces about 1 pound of fat loss per week. For example, if your TDEE is 2,200 calories, aim for 1,700 calories per day. Never go below 1,200 calories (women) or 1,500 calories (men) without medical supervision.'},
            {'q': 'Why am I not losing weight even in a calorie deficit?', 'a': 'The most common reasons are: inaccurate calorie tracking (most people underestimate intake by 20–50%), overestimating exercise calories burned, metabolic adaptation reducing your TDEE below what you calculated, water retention masking fat loss, or your deficit being too small. Recalculate your TDEE and track food more precisely for 2 weeks.'},
            {'q': 'How fast is it safe to lose weight?', 'a': 'Most health organizations recommend 1–2 pounds per week as a safe rate of weight loss. Losing faster than this increases risk of muscle loss, gallstones, nutritional deficiencies, and metabolic adaptation. People with more weight to lose (BMI 35+) may safely lose 2–3 lbs/week initially.'},
            {'q': 'Should I eat back exercise calories?', 'a': 'Generally, no — or eat back only half. Exercise calorie estimates (from watches, machines, apps) are notoriously inaccurate, often overestimating by 30–50%. If your TDEE already accounts for your activity level, those exercise calories are already included. Only add calories back if you do significantly more exercise than your selected activity level.'}
        ],
        'sources': [
            'Hall KD, et al. "Quantification of the effect of energy imbalance on bodyweight." The Lancet, 2011.',
            'Trexler ET, et al. "Metabolic adaptation to weight loss." Journal of the International Society of Sports Nutrition, 2014.',
            'Helms ER, et al. "A systematic review of dietary protein during caloric restriction." International Journal of Sport Nutrition and Exercise Metabolism, 2014.',
            'U.S. Department of Agriculture. Dietary Guidelines for Americans, 2020–2025.'
        ],
        'breadcrumbs': [
            {'name': 'Nutrition Calculators', 'url': '/nutrition-calculators'},
            {'name': 'TDEE Calculator for Weight Loss', 'url': '/tdee-calculator-for-weight-loss'}
        ]
    },
    'bmi-calculator-for-women': {
        'url': '/bmi-calculator-for-women',
        'page_title': 'BMI Calculator for Women — Healthy Ranges, Limitations & What Your BMI Means | HealthCalculators.xyz',
        'og_title': 'BMI Calculator for Women',
        'meta_description': 'Calculate your BMI as a woman and understand what it means. See healthy BMI ranges for women by age, why BMI may be inaccurate during pregnancy or menopause, and better alternatives.',
        'meta_keywords': 'BMI calculator for women, female BMI chart, healthy BMI women, BMI ranges women, normal BMI for women',
        'h1': 'BMI Calculator for Women',
        'demographic': 'Women',
        'icon': '📊',
        'read_time': '5',
        'calculator_url': '/bmi-calculator',
        'prefill_params': '?weight_lb=140&height_ft=5&height_in=4',
        'cta_title': 'Calculate Your BMI',
        'cta_description': 'Enter your height and weight to find your BMI category. Pre-filled for 5\'4", 140 lbs.',
        'cta_button_text': 'Open BMI Calculator →',
        'cta_note': None,
        'overview': '''
            <h2>Understanding BMI for Women</h2>
            <p>BMI (Body Mass Index) uses the same formula for men and women: weight (kg) ÷ height (m²). However, the same BMI number can mean different things for women compared to men because women naturally carry more body fat.</p>
            <p>At a BMI of 25, a woman typically has 30–35% body fat while a man has 20–25%. This means the WHO BMI categories may underestimate health risks for women at the lower end and overestimate them at the higher end.</p>
            <p>Important considerations for women:</p>
            <ul>
                <li><strong>Body fat distribution:</strong> Women tend to store fat in the hips and thighs (pear shape), which carries lower cardiovascular risk than abdominal fat (apple shape)</li>
                <li><strong>Age-related changes:</strong> BMI accuracy decreases after menopause as body composition shifts toward more fat and less muscle</li>
                <li><strong>Pregnancy:</strong> BMI should be calculated using pre-pregnancy weight. Pregnancy weight gain is expected and healthy</li>
                <li><strong>Athletes:</strong> Muscular women may have a "overweight" BMI despite having healthy body fat levels</li>
            </ul>
        ''',
        'table_title': 'BMI Reference Chart for Women (Height vs. Weight)',
        'table_html': '''
            <div class="data-table-scroll">
            <table class="data-table">
                <thead>
                    <tr><th>Height</th><th>Underweight<br>(&lt;18.5)</th><th>Normal<br>(18.5–24.9)</th><th>Overweight<br>(25–29.9)</th><th>Obese<br>(30+)</th></tr>
                </thead>
                <tbody>
                    <tr><td>5'0"</td><td class="td-warning">&lt;95 lbs</td><td class="td-good">95–127 lbs</td><td class="td-warning">128–153 lbs</td><td class="td-danger">154+ lbs</td></tr>
                    <tr><td>5'2"</td><td class="td-warning">&lt;101 lbs</td><td class="td-good">101–136 lbs</td><td class="td-warning">137–163 lbs</td><td class="td-danger">164+ lbs</td></tr>
                    <tr><td>5'4"</td><td class="td-warning">&lt;108 lbs</td><td class="td-good">108–145 lbs</td><td class="td-warning">146–174 lbs</td><td class="td-danger">175+ lbs</td></tr>
                    <tr><td>5'6"</td><td class="td-warning">&lt;115 lbs</td><td class="td-good">115–154 lbs</td><td class="td-warning">155–185 lbs</td><td class="td-danger">186+ lbs</td></tr>
                    <tr><td>5'8"</td><td class="td-warning">&lt;122 lbs</td><td class="td-good">122–163 lbs</td><td class="td-warning">164–196 lbs</td><td class="td-danger">197+ lbs</td></tr>
                    <tr><td>5'10"</td><td class="td-warning">&lt;129 lbs</td><td class="td-good">129–173 lbs</td><td class="td-warning">174–207 lbs</td><td class="td-danger">208+ lbs</td></tr>
                </tbody>
            </table>
            </div>
        ''',
        'table_source': 'Based on WHO BMI categories. These ranges apply equally to men and women.',
        'considerations': '''
            <h3>BMI During Pregnancy</h3>
            <p>Your pre-pregnancy BMI determines recommended weight gain during pregnancy. The Institute of Medicine guidelines suggest: underweight (BMI &lt;18.5) gain 28–40 lbs, normal weight (18.5–24.9) gain 25–35 lbs, overweight (25–29.9) gain 15–25 lbs, and obese (30+) gain 11–20 lbs. Do not try to lose weight during pregnancy.</p>
            <h3>BMI After Menopause</h3>
            <p>After menopause, body composition shifts even if weight stays the same — women lose muscle and gain visceral (abdominal) fat. Some researchers argue the "healthy" BMI range for postmenopausal women should be 23–30 rather than 18.5–24.9, as slightly higher BMI is associated with lower mortality in older women. A body fat percentage or waist circumference measurement may be more informative.</p>
            <h3>Better Alternatives to BMI for Women</h3>
            <p>Consider supplementing BMI with waist circumference (healthy &lt;35 inches for women), waist-to-hip ratio (healthy &lt;0.85), or body fat percentage (healthy 21–33% depending on age). Our <a href="/body-roundness-index-calculator">Body Roundness Index (BRI) calculator</a> accounts for body shape and may give you a more accurate health risk assessment.</p>
        ''',
        'faqs': [
            {'q': 'What is a healthy BMI for a woman?', 'a': 'The World Health Organization classifies a BMI of 18.5–24.9 as healthy weight for both men and women. For women specifically, the average BMI in the U.S. is 29.6. However, BMI does not account for body fat distribution, muscle mass, or age. A "healthy" BMI doesn\'t guarantee good health, and a slightly elevated BMI doesn\'t necessarily mean poor health.'},
            {'q': 'Is BMI accurate for women?', 'a': 'BMI is less accurate for women in several situations: during pregnancy, after menopause (when body composition changes), for athletes with significant muscle mass, and for very short women (under 5\'0") where BMI tends to overestimate fat. Body fat percentage or waist-to-hip ratio may provide a more accurate health risk assessment for women.'},
            {'q': 'Does BMI change with age in women?', 'a': 'BMI itself doesn\'t change with age for the same height and weight — the formula is the same. However, what a given BMI means health-wise does change. After menopause, women tend to gain visceral fat even without weight gain, making a previously "healthy" BMI potentially misleading. Some researchers recommend a higher healthy BMI range (23–28) for women over 65.'},
            {'q': 'Why is my BMI high even though I look thin?', 'a': 'This is uncommon for women but can happen if you have dense bones or significant muscle mass from strength training. The opposite — looking thin but having a high body fat percentage ("skinny fat") — is more common in women and would show as a normal BMI. If concerned, measure your body fat percentage for a more accurate assessment.'}
        ],
        'sources': [
            'World Health Organization. "Body mass index - BMI." WHO Regional Office for Europe.',
            'Institute of Medicine. "Weight Gain During Pregnancy: Reexamining the Guidelines." National Academies Press, 2009.',
            'Winter JE, et al. "BMI and all-cause mortality in older adults: a meta-analysis." American Journal of Clinical Nutrition, 2014.',
            'Flegal KM, et al. "Association of all-cause mortality with overweight and obesity using standard body mass index categories." JAMA, 2013.'
        ],
        'breadcrumbs': [
            {'name': 'Fitness & Body Calculators', 'url': '/fitness-body-composition-calculators'},
            {'name': 'BMI Calculator for Women', 'url': '/bmi-calculator-for-women'}
        ]
    },
    'protein-calculator-for-women': {
        'url': '/protein-calculator-for-women',
        'page_title': 'Protein Calculator for Women — Daily Protein Needs by Goal & Life Stage | HealthCalculators.xyz',
        'og_title': 'Protein Calculator for Women',
        'meta_description': 'Calculate your daily protein needs as a woman. See recommendations for weight loss, muscle building, pregnancy, menopause, and aging with evidence-based intake ranges.',
        'meta_keywords': 'protein calculator for women, how much protein women need, daily protein intake women, protein for weight loss women, protein pregnancy',
        'h1': 'Protein Calculator for Women',
        'demographic': 'Women',
        'icon': '🥩',
        'read_time': '6',
        'calculator_url': '/protein-intake-calculator',
        'prefill_params': '?gender=female&age=35&weight_lb=140&goal=maintain',
        'cta_title': 'Calculate Your Protein Needs',
        'cta_description': 'Get a personalized daily protein recommendation based on your weight, age, and goals.',
        'cta_button_text': 'Open Protein Calculator →',
        'cta_note': None,
        'overview': '''
            <h2>Why Protein Matters More for Women Than Most Think</h2>
            <p>Women consistently under-consume protein. Research shows the average American woman gets only 66 grams of protein per day — well below the optimal range of 90–130 grams for most active women. This shortfall affects muscle maintenance, bone health, satiety, and metabolic rate.</p>
            <p>Protein needs vary significantly by life stage:</p>
            <ul>
                <li><strong>General health:</strong> 0.8–1.0 g/kg body weight (the minimum RDA)</li>
                <li><strong>Weight loss:</strong> 1.2–1.6 g/kg — higher protein preserves muscle during a calorie deficit</li>
                <li><strong>Muscle building:</strong> 1.6–2.2 g/kg — supports muscle protein synthesis from resistance training</li>
                <li><strong>Pregnancy:</strong> 1.1–1.5 g/kg — increased needs for fetal development, especially in the 2nd and 3rd trimesters</li>
                <li><strong>Over 50:</strong> 1.0–1.2 g/kg — higher needs to offset age-related muscle loss (sarcopenia)</li>
            </ul>
        ''',
        'table_title': 'Daily Protein Needs for Women by Body Weight & Goal',
        'table_html': '''
            <div class="data-table-scroll">
            <table class="data-table">
                <thead>
                    <tr><th>Body Weight</th><th>Minimum<br>(0.8 g/kg)</th><th>Weight Loss<br>(1.4 g/kg)</th><th>Muscle Building<br>(1.8 g/kg)</th><th>Pregnancy<br>(1.2 g/kg)</th></tr>
                </thead>
                <tbody>
                    <tr><td>120 lbs (54 kg)</td><td>44 g</td><td class="td-accent">76 g</td><td class="td-accent">98 g</td><td>65 g</td></tr>
                    <tr><td>135 lbs (61 kg)</td><td>49 g</td><td class="td-accent">86 g</td><td class="td-accent">110 g</td><td>74 g</td></tr>
                    <tr><td>150 lbs (68 kg)</td><td>54 g</td><td class="td-accent">95 g</td><td class="td-accent">123 g</td><td>82 g</td></tr>
                    <tr><td>165 lbs (75 kg)</td><td>60 g</td><td class="td-accent">105 g</td><td class="td-accent">135 g</td><td>90 g</td></tr>
                    <tr><td>180 lbs (82 kg)</td><td>65 g</td><td class="td-accent">114 g</td><td class="td-accent">147 g</td><td>98 g</td></tr>
                    <tr><td>200 lbs (91 kg)</td><td>73 g</td><td class="td-accent">127 g</td><td class="td-accent">163 g</td><td>109 g</td></tr>
                </tbody>
            </table>
            </div>
        ''',
        'table_source': 'Based on ISSN and ACSM position statements on protein intake. Pregnancy values from ACOG guidelines.',
        'considerations': '''
            <h3>Protein & Weight Loss for Women</h3>
            <p>Higher protein intake during weight loss is critical for women. A 2016 study found that women eating 1.4 g/kg protein while in a calorie deficit lost 40% more fat and gained lean mass compared to women eating 0.8 g/kg. Protein also increases satiety, reducing hunger and making it easier to maintain a deficit.</p>
            <h3>Protein During Pregnancy</h3>
            <p>Protein needs increase during pregnancy, especially in the second and third trimesters. The ACOG recommends at least 71 grams per day, but more recent research suggests 1.2 g/kg may be optimal. Focus on complete protein sources (eggs, dairy, meat, fish, soy) and distribute intake across meals.</p>
            <h3>Protein After Menopause</h3>
            <p>Women over 50 experience accelerated muscle loss (sarcopenia). Adequate protein intake (1.0–1.2 g/kg) combined with resistance training can significantly slow this process. Distribute protein evenly across 3–4 meals (25–30 g per meal) for optimal muscle protein synthesis, as the "muscle-full effect" becomes less efficient with age.</p>
        ''',
        'faqs': [
            {'q': 'How much protein does a woman need per day?', 'a': 'The minimum recommended intake is 0.8 g per kg of body weight (about 46 grams for a 130-lb woman). However, most nutrition experts now recommend 1.0–1.6 g/kg for optimal health, weight management, and muscle maintenance. Active women and those over 50 should aim for the higher end.'},
            {'q': 'Can women eat too much protein?', 'a': 'For healthy women with normal kidney function, protein intakes up to 2.2 g/kg are safe and well-studied. There is no evidence that high protein diets damage healthy kidneys. However, extremely high intakes (over 3.0 g/kg) have no additional benefit and may displace other important nutrients from your diet.'},
            {'q': 'Does protein help women lose belly fat?', 'a': 'Higher protein intake is associated with less abdominal fat in observational studies. Protein helps weight loss by increasing satiety, preserving muscle mass (which keeps metabolism higher), and having a higher thermic effect. However, you still need a calorie deficit to lose fat — protein makes the deficit more effective, not unnecessary.'},
            {'q': 'What are the best protein sources for women?', 'a': 'Prioritize complete proteins: eggs, Greek yogurt, chicken breast, fish, lean beef, cottage cheese, tofu, and tempeh. Plant-based options like lentils, chickpeas, and quinoa are good but lower in essential amino acids. If using protein powder, whey and casein are most studied; pea protein is the best plant-based option.'}
        ],
        'sources': [
            'Longland TM, et al. "Higher compared with lower dietary protein during an energy deficit combined with intense exercise promotes greater lean mass gain." American Journal of Clinical Nutrition, 2016.',
            'Phillips SM, et al. "Protein requirements and supplementation in strength sports." Nutrition, 2004.',
            'ACOG Committee Opinion No. 650. "Physical Activity and Exercise During Pregnancy." Obstetrics & Gynecology, 2015.',
            'Baum JI, et al. "Protein Consumption and the Elderly: What Is the Optimal Level of Intake?" Nutrients, 2016.'
        ],
        'breadcrumbs': [
            {'name': 'Nutrition Calculators', 'url': '/nutrition-calculators'},
            {'name': 'Protein Calculator for Women', 'url': '/protein-calculator-for-women'}
        ]
    },
    'protein-calculator-for-athletes': {
        'url': '/protein-calculator-for-athletes',
        'page_title': 'Protein Calculator for Athletes — Optimize Intake for Performance & Recovery | HealthCalculators.xyz',
        'og_title': 'Protein Calculator for Athletes',
        'meta_description': 'Calculate optimal protein intake for athletic performance. Evidence-based recommendations for endurance, strength, and team sport athletes with timing and distribution guidance.',
        'meta_keywords': 'protein calculator athletes, athlete protein intake, protein for muscle building, sports nutrition protein, how much protein athletes need',
        'h1': 'Protein Calculator for Athletes',
        'demographic': 'Athletes',
        'icon': '🏋️',
        'read_time': '6',
        'calculator_url': '/protein-intake-calculator',
        'prefill_params': '?gender=male&age=28&weight_lb=180&goal=muscle',
        'cta_title': 'Calculate Your Protein Needs',
        'cta_description': 'Get a personalized recommendation based on your sport type, body weight, and training goals.',
        'cta_button_text': 'Open Protein Calculator →',
        'cta_note': None,
        'overview': '''
            <h2>Protein for Athletic Performance</h2>
            <p>Athletes need significantly more protein than sedentary individuals. The International Society of Sports Nutrition (ISSN) recommends <strong>1.4–2.0 g/kg body weight per day</strong> for most athletes — nearly double the general RDA of 0.8 g/kg.</p>
            <p>Optimal intake depends on your sport type:</p>
            <ul>
                <li><strong>Strength/power athletes:</strong> 1.6–2.2 g/kg — supports muscle protein synthesis and recovery from resistance training</li>
                <li><strong>Endurance athletes:</strong> 1.2–1.6 g/kg — repairs muscle damage from prolonged aerobic exercise</li>
                <li><strong>Team sport athletes:</strong> 1.4–1.8 g/kg — balances demands of mixed endurance and power output</li>
                <li><strong>During a cut:</strong> 2.0–2.4 g/kg — higher protein prevents muscle loss during calorie restriction</li>
            </ul>
        ''',
        'table_title': 'Daily Protein Needs by Sport Type & Body Weight',
        'table_html': '''
            <div class="data-table-scroll">
            <table class="data-table">
                <thead>
                    <tr><th>Body Weight</th><th>Endurance<br>(1.4 g/kg)</th><th>Team Sports<br>(1.6 g/kg)</th><th>Strength<br>(1.8 g/kg)</th><th>Cutting<br>(2.2 g/kg)</th></tr>
                </thead>
                <tbody>
                    <tr><td>130 lbs (59 kg)</td><td>83 g</td><td>94 g</td><td class="td-accent">106 g</td><td class="td-accent">130 g</td></tr>
                    <tr><td>150 lbs (68 kg)</td><td>95 g</td><td>109 g</td><td class="td-accent">123 g</td><td class="td-accent">150 g</td></tr>
                    <tr><td>170 lbs (77 kg)</td><td>108 g</td><td>123 g</td><td class="td-accent">139 g</td><td class="td-accent">170 g</td></tr>
                    <tr><td>190 lbs (86 kg)</td><td>121 g</td><td>138 g</td><td class="td-accent">155 g</td><td class="td-accent">190 g</td></tr>
                    <tr><td>210 lbs (95 kg)</td><td>134 g</td><td>153 g</td><td class="td-accent">172 g</td><td class="td-accent">210 g</td></tr>
                    <tr><td>230 lbs (104 kg)</td><td>146 g</td><td>167 g</td><td class="td-accent">188 g</td><td class="td-accent">230 g</td></tr>
                </tbody>
            </table>
            </div>
        ''',
        'table_source': 'Based on ISSN and ACSM position statements on protein and athletic performance.',
        'considerations': '''
            <h3>Protein Timing for Athletes</h3>
            <p>The "anabolic window" is real but wider than the 30-minute myth. Research shows consuming 20–40 g of protein within 2 hours of training optimizes muscle protein synthesis. For maximum benefit, distribute protein evenly across 4–5 meals (0.4–0.55 g/kg per meal) rather than loading it into one or two meals.</p>
            <h3>Protein During a Cut</h3>
            <p>Athletes cutting weight need the highest protein intake — 2.0–2.4 g/kg. A landmark study by Longland et al. showed that athletes eating 2.4 g/kg during a 40% calorie deficit actually gained lean mass while losing fat, compared to muscle loss in the 1.2 g/kg group. The higher protein group lost 4.8 kg of fat vs. 3.5 kg.</p>
            <h3>Protein Quality</h3>
            <p>Not all protein sources are equal for athletes. Leucine content is the primary driver of muscle protein synthesis. Whey protein has the highest leucine content (~11%), followed by animal proteins (~8–9%), and plant proteins (~6–7%). Athletes using plant-based protein should aim for the higher end of intake ranges and combine sources.</p>
        ''',
        'faqs': [
            {'q': 'How much protein do athletes need per day?', 'a': 'Most athletes need 1.4–2.0 g of protein per kg of body weight per day, according to the ISSN. Strength athletes should aim for the higher end (1.6–2.2 g/kg), while endurance athletes can target 1.2–1.6 g/kg. During weight cutting phases, intake should increase to 2.0–2.4 g/kg to preserve muscle.'},
            {'q': 'Is there a limit to how much protein your body can use?', 'a': 'Per-meal, research suggests 0.4–0.55 g/kg body weight (roughly 30–50 g for most athletes) optimally stimulates muscle protein synthesis. More protein in a single meal is still digested and used for other functions, but the muscle-building stimulus plateaus. This is why spreading protein across 4–5 meals is more effective than eating it all at once.'},
            {'q': 'Do endurance athletes need as much protein as strength athletes?', 'a': 'Endurance athletes need slightly less (1.2–1.6 g/kg vs. 1.6–2.2 g/kg) but more than most realize. Prolonged endurance exercise damages muscle fibers and can use amino acids for fuel (up to 5–10% of total energy). Ultra-endurance athletes (marathon, Ironman) may need up to 1.8 g/kg during heavy training blocks.'},
            {'q': 'Is whey protein better than plant protein for athletes?', 'a': 'Whey protein has superior leucine content and digestibility, making it marginally better for muscle protein synthesis per gram. However, plant protein (especially pea, rice, and soy blends) can match whey\'s effects when consumed in slightly higher amounts (+10–20%). The key is total daily protein intake, not the source.'}
        ],
        'sources': [
            'Jäger R, et al. "International Society of Sports Nutrition Position Stand: protein and exercise." Journal of the International Society of Sports Nutrition, 2017.',
            'Longland TM, et al. "Higher compared with lower dietary protein during an energy deficit combined with intense exercise." AJCN, 2016.',
            'Morton RW, et al. "A systematic review, meta-analysis and meta-regression of the effect of protein supplementation." British Journal of Sports Medicine, 2018.',
            'Thomas DT, et al. "Position of the Academy of Nutrition and Dietetics: Nutrition and Athletic Performance." JAND, 2016.'
        ],
        'breadcrumbs': [
            {'name': 'Nutrition Calculators', 'url': '/nutrition-calculators'},
            {'name': 'Protein Calculator for Athletes', 'url': '/protein-calculator-for-athletes'}
        ]
    },
    'bmi-calculator-for-teens': {
        'url': '/bmi-calculator-for-teens',
        'page_title': 'BMI Calculator for Teens — Percentile Charts by Age & Gender | HealthCalculators.xyz',
        'og_title': 'BMI Calculator for Teens',
        'meta_description': 'Calculate BMI for teenagers (13-19) using age and gender-specific percentile charts. Understand what your teen\'s BMI percentile means for their growth and health.',
        'meta_keywords': 'BMI calculator teens, teen BMI percentile, BMI for teenagers, adolescent BMI chart, healthy BMI teenager',
        'h1': 'BMI Calculator for Teens',
        'demographic': 'Teens (Ages 13–19)',
        'icon': '📊',
        'read_time': '5',
        'calculator_url': '/bmi-calculator',
        'prefill_params': '?weight_lb=130&height_ft=5&height_in=5',
        'cta_title': 'Calculate BMI',
        'cta_description': 'Enter height and weight to get a BMI value. For teens, interpretation requires age-specific percentile charts (see below).',
        'cta_button_text': 'Open BMI Calculator →',
        'cta_note': 'Note: Adult BMI categories don\'t apply to teens. Use the percentile chart below to interpret results.',
        'overview': '''
            <h2>BMI for Teenagers Is Different</h2>
            <p>Unlike adults, teen BMI is interpreted using <strong>age and gender-specific percentile charts</strong>. A BMI of 23 might be perfectly healthy for a 17-year-old boy but could indicate overweight for a 13-year-old girl. This is because teens are still growing, and healthy body fat levels change with age and puberty.</p>
            <p>Teen BMI percentile categories:</p>
            <ul>
                <li><strong>Underweight:</strong> Below the 5th percentile</li>
                <li><strong>Healthy weight:</strong> 5th to 84th percentile</li>
                <li><strong>Overweight:</strong> 85th to 94th percentile</li>
                <li><strong>Obese:</strong> 95th percentile or above</li>
            </ul>
            <p>These percentiles are based on CDC growth charts from 2000. A teen at the 60th percentile has a higher BMI than 60% of teens of the same age and gender.</p>
        ''',
        'table_title': '50th Percentile BMI by Age & Gender (Typical/Median)',
        'table_html': '''
            <div class="data-table-scroll">
            <table class="data-table">
                <thead>
                    <tr><th>Age</th><th>Girls (50th %ile)</th><th>Boys (50th %ile)</th><th>Girls (85th %ile)<br>Overweight threshold</th><th>Boys (85th %ile)<br>Overweight threshold</th></tr>
                </thead>
                <tbody>
                    <tr><td>13</td><td class="td-good">18.7</td><td class="td-good">18.5</td><td class="td-warning">22.6</td><td class="td-warning">21.8</td></tr>
                    <tr><td>14</td><td class="td-good">19.4</td><td class="td-good">19.2</td><td class="td-warning">23.3</td><td class="td-warning">22.6</td></tr>
                    <tr><td>15</td><td class="td-good">20.0</td><td class="td-good">19.9</td><td class="td-warning">24.0</td><td class="td-warning">23.4</td></tr>
                    <tr><td>16</td><td class="td-good">20.6</td><td class="td-good">20.5</td><td class="td-warning">24.6</td><td class="td-warning">24.2</td></tr>
                    <tr><td>17</td><td class="td-good">21.1</td><td class="td-good">21.2</td><td class="td-warning">25.2</td><td class="td-warning">24.9</td></tr>
                    <tr><td>18</td><td class="td-good">21.5</td><td class="td-good">21.7</td><td class="td-warning">25.7</td><td class="td-warning">25.6</td></tr>
                    <tr><td>19</td><td class="td-good">22.0</td><td class="td-good">22.3</td><td class="td-warning">26.1</td><td class="td-warning">26.3</td></tr>
                </tbody>
            </table>
            </div>
        ''',
        'table_source': 'Data from CDC Growth Charts (2000). 50th percentile = median; 85th percentile = overweight threshold.',
        'considerations': '''
            <h3>Why Adult BMI Categories Don\'t Work for Teens</h3>
            <p>Adult BMI uses fixed categories (underweight &lt;18.5, normal 18.5–24.9, etc.). For teens, these don't apply because body composition changes rapidly during puberty. A 13-year-old boy with a BMI of 21 is at the 75th percentile, while an 18-year-old with the same BMI is at the 50th percentile. Percentile-based interpretation accounts for these developmental differences.</p>
            <h3>Puberty & BMI</h3>
            <p>During puberty, it's normal for BMI to increase. Girls typically gain body fat before their growth spurt, and boys gain lean muscle mass. A temporary increase in BMI percentile during ages 11–14 doesn't necessarily indicate a health problem — it often reflects normal pubertal development. Trends over time are more meaningful than single measurements.</p>
            <h3>When to Be Concerned</h3>
            <p>Speak with a pediatrician if your teen's BMI percentile has jumped dramatically (crossing two or more percentile lines), is consistently above the 95th percentile, or is below the 5th percentile. However, BMI alone should never be used to restrict a teenager's food intake or prescribe a "diet." Teens need adequate nutrition for growth and development.</p>
        ''',
        'faqs': [
            {'q': 'What is a normal BMI for a teenager?', 'a': 'For teens, "normal" is defined as the 5th to 84th percentile for their age and gender, not by a single number. For example, a normal BMI for a 15-year-old girl ranges from about 16.0 to 24.0, while for a 15-year-old boy it\'s about 15.5 to 23.4. Use CDC growth charts to find the exact percentile.'},
            {'q': 'Is BMI accurate for teenagers?', 'a': 'BMI is a reasonable screening tool for teens when using age/gender-specific percentiles, but it has the same limitation as for adults — it doesn\'t distinguish between muscle and fat. Athletic teens, especially those in sports like football or gymnastics, may have elevated BMI from muscle mass rather than excess fat.'},
            {'q': 'Should a teenager try to lower their BMI?', 'a': 'Teens should never diet to lower BMI without medical guidance. Restrictive eating during adolescence can impair growth, delay puberty, weaken bones, and increase risk of eating disorders. If a teen\'s BMI is in the overweight or obese range, a pediatrician may recommend lifestyle changes focused on more physical activity and healthier food choices rather than calorie restriction.'},
            {'q': 'How often should I check my teen\'s BMI?', 'a': 'The American Academy of Pediatrics recommends BMI screening at annual well-child visits. Tracking BMI percentile over time (rather than focusing on single measurements) gives a better picture of growth trajectory. Most electronic health records automatically plot BMI-for-age at each visit.'}
        ],
        'sources': [
            'CDC. "About Child & Teen BMI." Centers for Disease Control and Prevention, 2024.',
            'Barlow SE. "Expert Committee Recommendations on the Assessment, Prevention, and Treatment of Child and Adolescent Overweight and Obesity." Pediatrics, 2007.',
            'Kuczmarski RJ, et al. "2000 CDC Growth Charts for the United States." National Center for Health Statistics, 2002.',
            'Styne DM, et al. "Pediatric Obesity — Assessment, Treatment, and Prevention." Endocrine Society Clinical Practice Guideline, 2017.'
        ],
        'breadcrumbs': [
            {'name': 'Fitness & Body Calculators', 'url': '/fitness-body-composition-calculators'},
            {'name': 'BMI Calculator for Teens', 'url': '/bmi-calculator-for-teens'}
        ]
    },
    'macro-calculator-for-weight-loss': {
        'url': '/macro-calculator-for-weight-loss',
        'page_title': 'Macro Calculator for Weight Loss — Optimal Protein, Carb & Fat Ratios | HealthCalculators.xyz',
        'og_title': 'Macro Calculator for Weight Loss',
        'meta_description': 'Calculate the ideal macronutrient ratio for weight loss. See how to split protein, carbs, and fat for maximum fat loss while preserving muscle mass.',
        'meta_keywords': 'macro calculator weight loss, macros for fat loss, weight loss macros, protein carbs fat ratio, cutting macros',
        'h1': 'Macro Calculator for Weight Loss',
        'demographic': 'Weight Loss',
        'icon': '🥗',
        'read_time': '6',
        'calculator_url': '/caloric-intake-macronutrient-calculator',
        'prefill_params': '?age=35&weight_lb=180&height_ft=5&height_in=7&activity=1.375&goal=lose',
        'cta_title': 'Calculate Your Macros',
        'cta_description': 'Get personalized macro targets based on your TDEE and weight loss goal.',
        'cta_button_text': 'Open Macro Calculator →',
        'cta_note': None,
        'overview': '''
            <h2>Macros Matter More Than Calories Alone</h2>
            <p>Two people eating 1,800 calories per day can have vastly different results depending on their macro split. Someone eating 40% protein / 30% carbs / 30% fat will lose more fat and preserve more muscle than someone eating 15% protein / 55% carbs / 30% fat — even at the same calorie level.</p>
            <p>Evidence-based macro ratios for weight loss:</p>
            <ul>
                <li><strong>High protein approach (recommended):</strong> 40% protein / 30% carbs / 30% fat — maximizes muscle retention and satiety</li>
                <li><strong>Moderate approach:</strong> 30% protein / 40% carbs / 30% fat — easier to sustain, good for active people</li>
                <li><strong>Low-carb approach:</strong> 35% protein / 25% carbs / 40% fat — may help with insulin resistance and hunger control</li>
                <li><strong>Ketogenic:</strong> 25% protein / 5% carbs / 70% fat — extreme carb restriction, not necessary for most people</li>
            </ul>
            <p>The most important macro for weight loss is protein. Hitting your protein target matters more than the exact carb-to-fat ratio.</p>
        ''',
        'table_title': 'Macro Targets by Calorie Level (40/30/30 Split)',
        'table_html': '''
            <div class="data-table-scroll">
            <table class="data-table">
                <thead>
                    <tr><th>Daily Calories</th><th>Protein (40%)</th><th>Carbs (30%)</th><th>Fat (30%)</th><th>Protein (g)</th><th>Carbs (g)</th><th>Fat (g)</th></tr>
                </thead>
                <tbody>
                    <tr><td>1,400</td><td>560 cal</td><td>420 cal</td><td>420 cal</td><td class="td-accent">140 g</td><td>105 g</td><td>47 g</td></tr>
                    <tr><td>1,600</td><td>640 cal</td><td>480 cal</td><td>480 cal</td><td class="td-accent">160 g</td><td>120 g</td><td>53 g</td></tr>
                    <tr><td>1,800</td><td>720 cal</td><td>540 cal</td><td>540 cal</td><td class="td-accent">180 g</td><td>135 g</td><td>60 g</td></tr>
                    <tr><td>2,000</td><td>800 cal</td><td>600 cal</td><td>600 cal</td><td class="td-accent">200 g</td><td>150 g</td><td>67 g</td></tr>
                    <tr><td>2,200</td><td>880 cal</td><td>660 cal</td><td>660 cal</td><td class="td-accent">220 g</td><td>165 g</td><td>73 g</td></tr>
                    <tr><td>2,500</td><td>1000 cal</td><td>750 cal</td><td>750 cal</td><td class="td-accent">250 g</td><td>188 g</td><td>83 g</td></tr>
                </tbody>
            </table>
            </div>
        ''',
        'table_source': 'Protein: 4 cal/g, Carbs: 4 cal/g, Fat: 9 cal/g. 40/30/30 is optimal for muscle preservation during weight loss.',
        'considerations': '''
            <h3>Why Protein Is the Priority Macro</h3>
            <p>During a calorie deficit, your body breaks down both fat and muscle for energy. High protein intake (1.6–2.2 g/kg) sends a signal to preserve muscle. It also has the highest thermic effect — your body burns 20–30% of protein calories just digesting it, compared to 5–10% for carbs and 0–3% for fat. This means 200 calories of protein effectively becomes only 140–160 usable calories.</p>
            <h3>Carbs vs. Fat: Which to Cut?</h3>
            <p>Once protein is set, the carb-to-fat ratio is less important for fat loss. Research shows similar weight loss results with low-carb vs. low-fat diets when calories and protein are matched. Choose based on preference and sustainability: if you love bread and fruit, cut fat; if you prefer cheese and avocado, cut carbs. Adherence matters more than the ratio.</p>
            <h3>Tracking Tips</h3>
            <p>Focus on hitting your protein target (within 10 grams) and staying within total calories. Let carbs and fat fill the remaining calories flexibly. Strict macro tracking isn't necessary long-term — most people get good results by just tracking protein and total calories.</p>
        ''',
        'faqs': [
            {'q': 'What is the best macro ratio for weight loss?', 'a': 'A 40% protein / 30% carbs / 30% fat split is well-supported by research for weight loss. The high protein preserves muscle, keeps you full, and has a higher thermic effect. However, the exact carb-to-fat ratio matters less than total calories and protein intake. Pick whichever ratio you can sustain.'},
            {'q': 'Should I count macros or calories for weight loss?', 'a': 'Counting total calories ensures you\'re in a deficit. Tracking macros (especially protein) ensures the weight you lose comes from fat, not muscle. Ideally, do both. At minimum, track total calories and protein grams. Let carbs and fat fill the rest naturally.'},
            {'q': 'How do I hit my protein target without too many calories?', 'a': 'Choose lean protein sources: chicken breast (31g protein, 165 cal per serving), Greek yogurt (17g protein, 100 cal), egg whites (11g protein, 50 cal), whey protein powder (25g protein, 120 cal), shrimp (24g protein, 120 cal). These provide maximum protein per calorie.'},
            {'q': 'Do macros matter if I\'m in a calorie deficit?', 'a': 'Yes. In a deficit without enough protein, up to 25% of weight lost comes from muscle. With adequate protein (1.6+ g/kg), nearly all weight loss comes from fat. Macro composition also affects hunger levels, energy, workout performance, and long-term sustainability.'}
        ],
        'sources': [
            'Helms ER, et al. "A systematic review of dietary protein during caloric restriction in resistance trained lean athletes." IJSNEM, 2014.',
            'Hall KD, et al. "Calorie for Calorie, Dietary Fat Restriction Results in More Body Fat Loss than Carbohydrate Restriction." Cell Metabolism, 2015.',
            'Westerterp-Plantenga MS, et al. "Dietary protein — its role in satiety, energetics, weight loss and health." British Journal of Nutrition, 2012.',
            'Aragon AA, et al. "International Society of Sports Nutrition Position Stand: diets and body composition." JISSN, 2017.'
        ],
        'breadcrumbs': [
            {'name': 'Nutrition Calculators', 'url': '/nutrition-calculators'},
            {'name': 'Macro Calculator for Weight Loss', 'url': '/macro-calculator-for-weight-loss'}
        ]
    },
    'calorie-calculator-for-weight-loss': {
        'url': '/calorie-calculator-for-weight-loss',
        'page_title': 'Calorie Calculator for Weight Loss — How Many Calories to Eat to Lose Weight | HealthCalculators.xyz',
        'og_title': 'Calorie Calculator for Weight Loss',
        'meta_description': 'Calculate exactly how many calories you should eat to lose weight. See your TDEE-based calorie target for safe, sustainable fat loss at 1-2 lbs per week.',
        'meta_keywords': 'calorie calculator weight loss, how many calories to lose weight, weight loss calorie calculator, calorie deficit calculator, calories to lose 1 pound',
        'h1': 'Calorie Calculator for Weight Loss',
        'demographic': 'Weight Loss',
        'icon': '⚖️',
        'read_time': '5',
        'calculator_url': '/tdee-calculator',
        'prefill_params': '?age=35&weight_lb=180&height_ft=5&height_in=8&activity=1.375',
        'cta_title': 'Calculate Your Calorie Target',
        'cta_description': 'Find your TDEE (maintenance calories), then see your deficit target for weight loss.',
        'cta_button_text': 'Open Calorie Calculator →',
        'cta_note': 'Your TDEE minus 500 calories = lose ~1 lb/week.',
        'overview': '''
            <h2>How to Calculate Calories for Weight Loss</h2>
            <p>To lose weight, you need to eat fewer calories than your body burns. This gap is called a <strong>calorie deficit</strong>. The steps are simple:</p>
            <ol>
                <li><strong>Calculate your TDEE</strong> — the total calories your body burns each day (including exercise)</li>
                <li><strong>Subtract 500 calories</strong> — creates a deficit that produces ~1 lb of fat loss per week</li>
                <li><strong>Track and adjust</strong> — if you're not losing after 2–3 weeks, reduce by another 100–200 calories</li>
            </ol>
            <p>The key rule: <strong>never eat fewer than 1,200 calories (women) or 1,500 calories (men)</strong> without medical supervision. Going too low risks nutrient deficiencies, muscle loss, metabolic damage, and is unsustainable.</p>
        ''',
        'table_title': 'Calorie Targets for Weight Loss (by TDEE)',
        'table_html': '''
            <div class="data-table-scroll">
            <table class="data-table">
                <thead>
                    <tr><th>Your TDEE<br>(Maintenance)</th><th>Slow Loss<br>(−250 cal/day)<br>0.5 lb/week</th><th>Moderate<br>(−500 cal/day)<br>1 lb/week</th><th>Fast<br>(−750 cal/day)<br>1.5 lb/week</th></tr>
                </thead>
                <tbody>
                    <tr><td>1,800</td><td>1,550</td><td class="td-accent">1,300</td><td class="td-warning">1,050*</td></tr>
                    <tr><td>2,000</td><td>1,750</td><td class="td-accent">1,500</td><td>1,250</td></tr>
                    <tr><td>2,200</td><td>1,950</td><td class="td-accent">1,700</td><td>1,450</td></tr>
                    <tr><td>2,500</td><td>2,250</td><td class="td-accent">2,000</td><td>1,750</td></tr>
                    <tr><td>2,800</td><td>2,550</td><td class="td-accent">2,300</td><td>2,050</td></tr>
                    <tr><td>3,200</td><td>2,950</td><td class="td-accent">2,700</td><td>2,450</td></tr>
                </tbody>
            </table>
            </div>
            <p class="source-note">*Below 1,200 calories is not recommended without medical supervision.</p>
        ''',
        'table_source': 'Based on the energy balance principle: 3,500 calorie deficit ≈ 1 lb fat loss.',
        'considerations': '''
            <h3>Why 500 Calories Is the Sweet Spot</h3>
            <p>A 500-calorie daily deficit translates to about 3,500 calories per week — roughly equivalent to 1 pound of fat. This rate of loss is considered safe, sustainable, and minimizes muscle loss. Larger deficits (1,000+ calories) can work short-term but often lead to metabolic adaptation, increased hunger hormones, and eventual rebound weight gain.</p>
            <h3>Why the Scale Lies</h3>
            <p>Weight fluctuates 1–5 lbs daily from water retention, food volume, sodium intake, and hormonal changes. This means you can be losing fat while the scale stays flat or even goes up. Track your weekly average weight (weigh daily, calculate the 7-day average) rather than focusing on any single day's number.</p>
            <h3>When to Recalculate</h3>
            <p>Recalculate your TDEE and calorie target every 10–15 lbs of weight loss. As you weigh less, your body burns fewer calories — a person at 180 lbs burns more calories than the same person at 160 lbs. If you don't adjust, your deficit shrinks and weight loss stalls.</p>
        ''',
        'faqs': [
            {'q': 'How many calories should I eat to lose weight?', 'a': 'Subtract 500 from your TDEE (Total Daily Energy Expenditure) for a moderate deficit producing ~1 lb of weight loss per week. For example, if your TDEE is 2,200, eat 1,700 calories per day. Use our TDEE calculator to find your personalized number. Never go below 1,200 (women) or 1,500 (men) without medical supervision.'},
            {'q': 'Is 1,200 calories enough to lose weight?', 'a': '1,200 calories is the minimum recommended intake for women and should only be used if your TDEE is around 1,700 or less. For many people, 1,200 is too restrictive — it\'s hard to get adequate nutrition, increases hunger hormones, and often leads to metabolic slowdown and binge eating. A smaller deficit at a higher calorie level is usually more effective long-term.'},
            {'q': 'How long does it take to lose 20 pounds?', 'a': 'At a 500-calorie daily deficit (1 lb/week), it takes about 20 weeks (5 months) to lose 20 pounds. At a 750-calorie deficit (1.5 lbs/week), it takes about 13 weeks. However, actual results are non-linear — you may lose faster initially (water weight) and slower later (metabolic adaptation).'},
            {'q': 'Do I need to count calories to lose weight?', 'a': 'Not necessarily. Calorie counting is the most precise method, but alternatives include portion control (using hand-size guides), intermittent fasting (eating in a time window), or focusing on food quality (whole foods naturally create a mild deficit). However, if you\'ve tried other methods without success, calorie counting for 2–4 weeks can reveal hidden overconsumption.'}
        ],
        'sources': [
            'Hall KD, et al. "Quantification of the effect of energy imbalance on bodyweight." The Lancet, 2011.',
            'Lichtman SW, et al. "Discrepancy between self-reported and actual caloric intake and exercise in obese subjects." NEJM, 1992.',
            'U.S. Department of Agriculture. Dietary Guidelines for Americans, 2020–2025.',
            'Trexler ET, et al. "Metabolic adaptation to weight loss." JISSN, 2014.'
        ],
        'breadcrumbs': [
            {'name': 'Nutrition Calculators', 'url': '/nutrition-calculators'},
            {'name': 'Calorie Calculator for Weight Loss', 'url': '/calorie-calculator-for-weight-loss'}
        ]
    }
}

@app.route('/tdee-calculator-for-women')
@app.route('/tdee-calculator-for-weight-loss')
@app.route('/bmi-calculator-for-women')
@app.route('/protein-calculator-for-women')
@app.route('/protein-calculator-for-athletes')
@app.route('/bmi-calculator-for-teens')
@app.route('/macro-calculator-for-weight-loss')
@app.route('/calorie-calculator-for-weight-loss')
def demographic_calculator():
    path = request.path.lstrip('/')
    page = demographic_pages.get(path)
    if not page:
        return "Not found", 404
    return render_template(
        'demographic_calculator.html',
        demo=page,
        is_homepage=False,
        page_title=page['page_title'],
        meta_description=page['meta_description'],
        meta_keywords=page['meta_keywords'],
        og_title=page['og_title'],
        og_description=page['meta_description'],
        og_url=page['url'],
        canonical_url=page['url']
    )


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
