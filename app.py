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
        "title": "Breast Implant Calculator",
        "url": "/breast-implant-calculator",
        "summary": "Find your ideal implant size based on your measurements and goals.",
        "icon": "💗",
        "cta": "Calculate Implant Size",
        "color": "pink"
    },
    {
        "title": "Ozempic Weight Loss Calculator",
        "url": "/ozempic-weight-loss-calculator",
        "summary": "Estimate your fat loss and BMI reduction while taking semaglutide (Ozempic/Wegovy).",
        "icon": "💊",
        "cta": "Estimate Fat Loss",
        "color": "purple"
    },
    {
        "title": "Botox Dosage Calculator",
        "url": "/botox-dosage-calculator",
        "summary": "Determine the appropriate Botox units for different treatment areas.",
        "icon": "💉",
        "cta": "Calculate Botox Units",
        "color": "blue"
    },
    {
        "title": "Creatine Hydration Calculator",
        "url": "/creatine-water-calculator",
        "summary": "Calculate optimal water intake when using creatine supplements.",
        "icon": "💧",
        "cta": "Calculate Hydration",
        "color": "teal"
    },
    {
        "title": "Vitamin D Intake Calculator",
        "url": "/vitamin-d-intake-calculator",
        "summary": "Determine your ideal vitamin D supplementation based on lifestyle factors.",
        "icon": "☀️",
        "cta": "Calculate Intake",
        "color": "yellow"
    },
    {
        "title": "Lifespan Calculator",
        "url": "/lifespan-longevity-calculator",
        "summary": "Estimate your life expectancy based on health and lifestyle factors.",
        "icon": "❤️",
        "cta": "Check Your Lifespan",
        "color": "red"
    },
    {
        "title": "Fasting Weight Loss Calculator",
        "url": "/fasting-weight-loss-calculator",
        "summary": "Calculate potential weight loss from intermittent fasting protocols.",
        "icon": "⏱️",
        "cta": "Calculate Weight Loss",
        "color": "green"
    },
    {
        "title": "Caloric & Macronutrient Calculator",
        "url": "/caloric-intake-macronutrient-calculator",
        "summary": "Calculate your daily caloric needs and optimal macronutrient ratios.",
        "icon": "🍎",
        "cta": "Calculate Your Calories",
        "color": "orange"
    }
]

@app.route('/')
def home():
    return render_template('home.html', is_homepage=True, cards=cards)

@app.route('/caloric-intake-macronutrient-calculator')
def calculator():
    return render_template('index.html', is_homepage=False)

@app.route('/botox-dosage-calculator')
def botox_calculator():
    return render_template('botox_calculator.html', is_homepage=False)

@app.route('/lifespan-longevity-calculator')
def lifespan_calculator():
    return render_template('lifespan_calculator.html', is_homepage=False)

@app.route('/creatine-water-calculator')
def creatine_water_calculator():
    return render_template('creatine_water_calculator.html', is_homepage=False)

@app.route('/breast-implant-calculator')
def breast_implant_calculator():
    return render_template('breast_implant_calculator.html', is_homepage=False)

@app.route('/vitamin-d-intake-calculator')
def vitamin_d_intake_calculator():
    return render_template('vitamin_d_intake_calculator.html', is_homepage=False)

@app.route('/fasting-weight-loss-calculator')
def fasting_weight_loss_calculator():
    return render_template('fasting_weight_loss_calculator.html', is_homepage=False)

@app.route('/ozempic-weight-loss-calculator')
def ozempic_weight_loss_calculator():
    return render_template('ozempic_weight_loss_calculator.html', is_homepage=False)

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
    return render_template('resources.html', is_homepage=False, articles=articles)

@app.route('/resources/how-to-use-the-ozempic-weight-loss-calculator')
def ozempic_article():
    return render_template('ozempic_weight_loss_article.html', is_homepage=False)

@app.route('/sitemap.xml')
def sitemap():
    return send_from_directory('static/public', 'sitemap.xml')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
