import os
import logging
from flask import Flask, render_template, send_from_directory

# Configure logging
logging.basicConfig(level=logging.DEBUG)

# Create Flask app
app = Flask(__name__)
app.secret_key = os.environ.get("SESSION_SECRET", "default_secret_key")

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/caloric-intake-macronutrient-calculator')
def calculator():
    return render_template('index.html')

@app.route('/botox-dosage-calculator')
def botox_calculator():
    return render_template('botox_calculator.html')

@app.route('/lifespan-longevity-calculator')
def lifespan_calculator():
    return render_template('lifespan_calculator.html')

@app.route('/creatine-water-calculator')
def creatine_water_calculator():
    return render_template('creatine_water_calculator.html')

@app.route('/sitemap.xml')
def sitemap():
    return send_from_directory('static/public', 'sitemap.xml')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
