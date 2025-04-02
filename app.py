import os
import logging
from flask import Flask, render_template, send_from_directory

# Configure logging
logging.basicConfig(level=logging.DEBUG)

# Create Flask app
app = Flask(__name__)
app.secret_key = os.environ.get("SESSION_SECRET", "default_secret_key")

cards = [
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
        "title": "How to Use the Ozempic Weight Loss Calculator",
        "url": "/resources/how-to-use-the-ozempic-weight-loss-calculator",
        "summary": "A step-by-step guide on interpreting Ozempic calculator results, setting expectations, and tracking progress.",
        "icon": "📘",
        "cta": "Read Guide",
        "color": "blue"
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
        "title": "How Much Water Do You Need on Creatine?",
        "url": "/resources/creatine-hydration-guide",
        "summary": "Learn how creatine increases hydration needs and how to adjust your intake to optimize results.",
        "icon": "💧",
        "cta": "Hydrate Smarter",
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

@app.route('/sitemap.xml')
def sitemap():
    return send_from_directory('static/public', 'sitemap.xml')

@app.route('/ads.txt')
def ads_txt():
    return send_from_directory('static/public', 'ads.txt')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
