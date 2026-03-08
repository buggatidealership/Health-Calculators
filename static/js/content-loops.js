/**
 * Content Loop System — Data-Carrying Cross-Links
 *
 * Generates contextual "next step" suggestions after calculator results,
 * with user data encoded as URL parameters for pre-filling the next calculator.
 *
 * Usage: call showNextSteps(calculatorId, userData) after displaying results.
 *   calculatorId: string key matching CALCULATOR_GRAPH below
 *   userData: object with keys like {weight_kg, height_cm, age, gender, ...}
 */

var CALCULATOR_GRAPH = {
  'bmi': {
    links: [
      { url: '/tdee-calculator', title: 'TDEE Calculator', icon: '🔥', reason: 'Calculate your daily calorie needs', params: ['weight_kg','height_cm','age','gender'] },
      { url: '/protein-intake-calculator', title: 'Protein Calculator', icon: '🥩', reason: 'Find your optimal protein intake', params: ['weight_kg','age','gender'] },
      { url: '/ideal-body-weight-calculator', title: 'Ideal Body Weight', icon: '⚖️', reason: 'Find your target weight for a healthy BMI', params: ['height_cm','gender'] },
      { url: '/army-body-fat-calculator', title: 'Army Body Fat', icon: '⭐', reason: 'Check Army tape test standards', params: ['height_cm','gender','age'] },
      { url: '/body-fat-calculator', title: 'Body Fat Calculator', icon: '📐', reason: 'BMI doesn\'t measure fat — this does', params: ['height_cm','gender','age'] },
      { url: '/fasting-weight-loss-calculator', title: 'Fasting Weight Loss', icon: '⏱️', reason: 'Plan your path to a healthier BMI', params: ['weight_kg','height_cm','age','gender'] }
    ]
  },
  'tdee': {
    links: [
      { url: '/bmi-calculator', title: 'BMI Calculator', icon: '📊', reason: 'Check your BMI category', params: ['weight_kg','height_cm'] },
      { url: '/calories-burned-calculator', title: 'Calories Burned', icon: '🏃', reason: 'See how many calories your workouts burn', params: ['weight_kg'] },
      { url: '/protein-intake-calculator', title: 'Protein Calculator', icon: '🥩', reason: 'Calculate your optimal daily protein intake', params: ['weight_kg','age','gender'] },
      { url: '/carb-cycling-calculator', title: 'Carb Cycling Calculator', icon: '🔄', reason: 'Optimize your {tdee} kcal with carb cycling', params: ['weight_kg','height_cm','age','gender','activity'] },
      { url: '/fasting-weight-loss-calculator', title: 'Fasting Weight Loss', icon: '⏱️', reason: 'See how fasting affects your {tdee} kcal budget', params: ['weight_kg','height_cm','age','gender'] },
      { url: '/ideal-body-weight-calculator', title: 'Ideal Body Weight', icon: '⚖️', reason: 'Find your target weight based on your frame', params: ['height_cm','gender'] }
    ]
  },
  'carb-cycling': {
    links: [
      { url: '/tdee-calculator', title: 'TDEE Calculator', icon: '🔥', reason: 'Recalculate your base calorie needs', params: ['weight_kg','height_cm','age','gender','activity'] },
      { url: '/fasting-weight-loss-calculator', title: 'Fasting Weight Loss', icon: '⏱️', reason: 'Combine carb cycling with intermittent fasting', params: ['weight_kg','height_cm','age','gender'] },
      { url: '/caloric-macronutrient-calculator', title: 'Macro Calculator', icon: '🥗', reason: 'Fine-tune your macro split', params: ['weight_kg','height_cm','age','gender'] }
    ]
  },
  'fasting': {
    links: [
      { url: '/tdee-calculator', title: 'TDEE Calculator', icon: '🔥', reason: 'Know your daily calorie needs first', params: ['weight_kg','height_cm','age','gender'] },
      { url: '/ideal-body-weight-calculator', title: 'Ideal Body Weight', icon: '⚖️', reason: 'Set your fasting target weight', params: ['height_cm','gender'] },
      { url: '/carb-cycling-calculator', title: 'Carb Cycling Calculator', icon: '🔄', reason: 'Pair fasting with carb cycling', params: ['weight_kg','height_cm','age','gender'] },
      { url: '/creatine-water-calculator', title: 'Hydration Calculator', icon: '💧', reason: 'Stay hydrated during fasting', params: ['weight_kg'] }
    ]
  },
  'ideal-body-weight': {
    links: [
      { url: '/bmi-calculator', title: 'BMI Calculator', icon: '📊', reason: 'Check your current BMI category', params: ['weight_kg','height_cm'] },
      { url: '/tdee-calculator', title: 'TDEE Calculator', icon: '🔥', reason: 'Calculate calories for your ideal weight', params: ['height_cm','gender','age'] },
      { url: '/army-body-fat-calculator', title: 'Body Fat Calculator', icon: '📐', reason: 'Estimate your current body composition', params: ['height_cm','gender','age'] },
      { url: '/plasma-donation-earnings-calculator', title: 'Plasma Donation', icon: '🩸', reason: 'Check if you meet weight requirements', params: ['weight_kg','height_cm'] }
    ]
  },
  'caloric-macro': {
    links: [
      { url: '/tdee-calculator', title: 'TDEE Calculator', icon: '🔥', reason: 'Refine your calorie baseline', params: ['weight_kg','height_cm','age','gender','activity'] },
      { url: '/protein-intake-calculator', title: 'Protein Calculator', icon: '🥩', reason: 'Dial in your protein target', params: ['weight_kg','age','gender'] },
      { url: '/carb-cycling-calculator', title: 'Carb Cycling', icon: '🔄', reason: 'Cycle your macros for better results', params: ['weight_kg','height_cm','age','gender'] },
      { url: '/chipotle-nutrition-calculator', title: 'Chipotle Nutrition', icon: '🌯', reason: 'Build a meal that fits your macros' }
    ]
  },
  'army-body-fat': {
    links: [
      { url: '/tdee-calculator', title: 'TDEE Calculator', icon: '🔥', reason: 'Calculate calories for your body composition', params: ['height_cm','gender','age'] },
      { url: '/ideal-body-weight-calculator', title: 'Ideal Body Weight', icon: '⚖️', reason: 'Find your target weight', params: ['height_cm','gender'] },
      { url: '/body-fat-calculator', title: 'Navy Body Fat Calculator', icon: '📐', reason: 'Compare with Navy method estimate', params: ['height_cm','gender','age'] },
      { url: '/liposuction-weight-loss-calculator', title: 'Liposuction Calculator', icon: '💉', reason: 'Estimate fat removal results', params: ['weight_kg','height_cm','gender'] }
    ]
  },
  'body-fat': {
    links: [
      { url: '/bmi-calculator', title: 'BMI Calculator', icon: '📊', reason: 'Check your BMI category', params: ['weight_kg','height_cm'] },
      { url: '/ideal-body-weight-calculator', title: 'Ideal Body Weight', icon: '⚖️', reason: 'Find your target weight', params: ['height_cm','gender'] },
      { url: '/tdee-calculator', title: 'TDEE Calculator', icon: '🔥', reason: 'Calculate daily calorie needs', params: ['weight_kg','height_cm','age','gender'] },
      { url: '/protein-intake-calculator', title: 'Protein Calculator', icon: '🥩', reason: 'Optimize protein for body recomposition', params: ['weight_kg','age','gender'] },
      { url: '/army-body-fat-calculator', title: 'Army Body Fat Calculator', icon: '⭐', reason: 'Check Army tape test standards', params: ['height_cm','gender','age'] }
    ]
  },
  'ozempic': {
    links: [
      { url: '/mounjaro-weight-loss-calculator', title: 'Mounjaro Calculator', icon: '💊', reason: 'Compare with tirzepatide projections', params: ['weight_kg','height_cm','age','gender'] },
      { url: '/ozempic-pen-click-calculator', title: 'Pen Click Calculator', icon: '💉', reason: 'Calculate your exact pen clicks', params: [] },
      { url: '/tdee-calculator', title: 'TDEE Calculator', icon: '🔥', reason: 'Optimize calories alongside Ozempic', params: ['weight_kg','height_cm','age','gender'] },
      { url: '/fasting-weight-loss-calculator', title: 'Fasting Weight Loss', icon: '⏱️', reason: 'Combine Ozempic with fasting', params: ['weight_kg','height_cm','age','gender'] },
      { url: '/antidepressant-weight-gain-calculator', title: 'Antidepressant Weight', icon: '💊', reason: 'Check medication weight interactions', params: ['weight_kg','height_cm','age','gender'] }
    ]
  },
  'ozempic-pen': {
    links: [
      { url: '/ozempic-weight-loss-calculator', title: 'Ozempic Weight Loss', icon: '📉', reason: 'Project your weight loss timeline', params: ['weight_kg','height_cm','age','gender'] },
      { url: '/tdee-calculator', title: 'TDEE Calculator', icon: '🔥', reason: 'Set your calorie target with Ozempic', params: ['weight_kg','height_cm','age','gender'] }
    ]
  },
  'mounjaro': {
    links: [
      { url: '/ozempic-weight-loss-calculator', title: 'Ozempic Calculator', icon: '📉', reason: 'Compare with semaglutide projections', params: ['weight_kg','height_cm','age','gender'] },
      { url: '/bmi-calculator', title: 'BMI Calculator', icon: '📊', reason: 'Check your current BMI category', params: ['weight_kg','height_cm'] },
      { url: '/tdee-calculator', title: 'TDEE Calculator', icon: '🔥', reason: 'Optimize calories alongside Mounjaro', params: ['weight_kg','height_cm','age','gender'] },
      { url: '/caloric-intake-macronutrient-calculator', title: 'Macro Calculator', icon: '🥗', reason: 'Plan your nutrition while on Mounjaro', params: ['weight_kg','height_cm','age','gender'] },
      { url: '/ideal-body-weight-calculator', title: 'Ideal Body Weight', icon: '⚖️', reason: 'Find your target weight', params: ['height_cm','gender'] }
    ]
  },
  'antidepressant': {
    links: [
      { url: '/tdee-calculator', title: 'TDEE Calculator', icon: '🔥', reason: 'Manage calories during medication', params: ['weight_kg','height_cm','age','gender'] },
      { url: '/ozempic-weight-loss-calculator', title: 'Ozempic Weight Loss', icon: '📉', reason: 'Explore weight loss medication options', params: ['weight_kg','height_cm','age','gender'] },
      { url: '/ideal-body-weight-calculator', title: 'Ideal Body Weight', icon: '⚖️', reason: 'Set a healthy weight target', params: ['height_cm','gender'] }
    ]
  },
  'breast-implant-size': {
    links: [
      { url: '/cc-to-bra-size-calculator', title: 'CC to Bra Size', icon: '📏', reason: 'Convert your CCs to bra size', params: [] },
      { url: '/breast-implant-cost-calculator', title: 'Implant Cost', icon: '💰', reason: 'Estimate total procedure cost', params: [] },
      { url: '/breast-implant-calculator', title: 'Implant Comparison', icon: '🔬', reason: 'Compare implant types and profiles', params: [] }
    ]
  },
  'cc-to-bra': {
    links: [
      { url: '/breast-implant-size-calculator', title: 'Implant Size Calculator', icon: '📐', reason: 'Find your ideal implant size', params: [] },
      { url: '/breast-implant-cost-calculator', title: 'Implant Cost', icon: '💰', reason: 'Estimate total procedure cost', params: [] },
      { url: '/breast-implant-calculator', title: 'Implant Comparison', icon: '🔬', reason: 'Compare types and profiles', params: [] }
    ]
  },
  'breast-implant-cost': {
    links: [
      { url: '/breast-implant-size-calculator', title: 'Implant Size Calculator', icon: '📐', reason: 'Determine your ideal size', params: [] },
      { url: '/cc-to-bra-size-calculator', title: 'CC to Bra Size', icon: '📏', reason: 'Convert CCs to cup size', params: [] },
      { url: '/botox-calculator', title: 'Botox Cost', icon: '💉', reason: 'Plan additional procedures', params: [] }
    ]
  },
  'breast-implant': {
    links: [
      { url: '/breast-implant-size-calculator', title: 'Implant Size Calculator', icon: '📐', reason: 'Fine-tune your size choice', params: [] },
      { url: '/breast-implant-cost-calculator', title: 'Implant Cost', icon: '💰', reason: 'Estimate your total cost', params: [] },
      { url: '/cc-to-bra-size-calculator', title: 'CC to Bra Size', icon: '📏', reason: 'Convert CCs to bra size', params: [] }
    ]
  },
  'botox': {
    links: [
      { url: '/lip-filler-cost-calculator', title: 'Lip Filler Cost', icon: '💋', reason: 'Estimate lip filler pricing', params: [] },
      { url: '/breast-implant-cost-calculator', title: 'Implant Cost', icon: '💰', reason: 'Plan additional procedures', params: [] },
      { url: '/liposuction-weight-loss-calculator', title: 'Liposuction', icon: '📐', reason: 'Explore body contouring', params: [] }
    ]
  },
  'lip-filler': {
    links: [
      { url: '/botox-calculator', title: 'Botox Calculator', icon: '💉', reason: 'Estimate Botox costs', params: [] },
      { url: '/breast-implant-cost-calculator', title: 'Implant Cost', icon: '💰', reason: 'Plan additional procedures', params: [] }
    ]
  },
  'liposuction': {
    links: [
      { url: '/ideal-body-weight-calculator', title: 'Ideal Body Weight', icon: '⚖️', reason: 'Set your post-procedure target', params: ['height_cm','gender'] },
      { url: '/tdee-calculator', title: 'TDEE Calculator', icon: '🔥', reason: 'Maintain results with proper calories', params: ['weight_kg','height_cm','age','gender'] },
      { url: '/army-body-fat-calculator', title: 'Body Fat Calculator', icon: '📐', reason: 'Estimate your body composition', params: ['height_cm','gender'] }
    ]
  },
  'fertility': {
    links: [
      { url: '/ivf-due-date-calculator', title: 'IVF Due Date', icon: '📅', reason: 'Calculate your IVF due date', params: [] },
      { url: '/child-growth-calculator', title: 'Child Growth', icon: '📏', reason: 'Track growth percentiles', params: [] },
      { url: '/newborn-weight-loss-calculator', title: 'Newborn Weight', icon: '👶', reason: 'Monitor newborn weight changes', params: [] },
      { url: '/dog-pregnancy-due-date-calculator', title: 'Dog Pregnancy', icon: '🐕', reason: 'Expecting puppies? Track that too', params: [] }
    ]
  },
  'ivf-due-date': {
    links: [
      { url: '/female-fertility-calculator', title: 'Fertility Calculator', icon: '🌸', reason: 'Assess fertility factors', params: ['age'] },
      { url: '/newborn-weight-loss-calculator', title: 'Newborn Weight', icon: '👶', reason: 'Prepare for newborn care', params: [] },
      { url: '/child-growth-calculator', title: 'Child Growth', icon: '📏', reason: 'Track growth after birth', params: [] }
    ]
  },
  'newborn-weight': {
    links: [
      { url: '/child-growth-calculator', title: 'Child Growth', icon: '📏', reason: 'Track ongoing growth percentiles', params: [] },
      { url: '/female-fertility-calculator', title: 'Fertility Calculator', icon: '🌸', reason: 'Plan your next pregnancy', params: [] }
    ]
  },
  'child-growth': {
    links: [
      { url: '/adult-height-predictor-calculator', title: 'Height Predictor', icon: '📐', reason: 'Predict adult height', params: [] },
      { url: '/newborn-weight-loss-calculator', title: 'Newborn Weight', icon: '👶', reason: 'Check newborn weight loss', params: [] }
    ]
  },
  'adult-height': {
    links: [
      { url: '/child-growth-calculator', title: 'Child Growth', icon: '📏', reason: 'Track growth percentiles', params: [] },
      { url: '/ideal-body-weight-calculator', title: 'Ideal Body Weight', icon: '⚖️', reason: 'Find ideal weight for predicted height', params: ['height_cm','gender'] }
    ]
  },
  'bac': {
    links: [
      { url: '/alcohol-impact-calculator', title: 'Alcohol Impact', icon: '🍷', reason: 'See long-term health effects', params: ['weight_kg','gender','age'] },
      { url: '/lifespan-calculator', title: 'Lifespan Calculator', icon: '🧬', reason: 'Check alcohol\'s effect on longevity', params: ['age','gender'] },
      { url: '/tdee-calculator', title: 'TDEE Calculator', icon: '🔥', reason: 'Count alcohol calories in your budget', params: ['weight_kg','height_cm','age','gender'] }
    ]
  },
  'alcohol-impact': {
    links: [
      { url: '/bac-calculator', title: 'BAC Calculator', icon: '🍺', reason: 'Check your blood alcohol level', params: ['weight_kg','gender'] },
      { url: '/lifespan-calculator', title: 'Lifespan Calculator', icon: '🧬', reason: 'See impact on your longevity', params: ['age','gender'] },
      { url: '/lipid-panel-goals-calculator', title: 'Lipid Panel', icon: '❤️', reason: 'Check cardiovascular health markers', params: ['age','gender'] },
      { url: '/retirement-savings-calculator', title: 'Retirement Savings', icon: '💰', reason: 'Plan finances for a healthier future', params: ['age'] }
    ]
  },
  'lifespan': {
    links: [
      { url: '/lipid-panel-goals-calculator', title: 'Lipid Panel Goals', icon: '❤️', reason: 'Optimize your cardiovascular health', params: ['age','gender'] },
      { url: '/vitamin-d-intake-calculator', title: 'Vitamin D Intake', icon: '☀️', reason: 'Ensure adequate vitamin D levels', params: ['age','gender','weight_kg'] },
      { url: '/alcohol-impact-calculator', title: 'Alcohol Impact', icon: '🍷', reason: 'Check alcohol\'s effect on longevity', params: ['age','gender'] },
      { url: '/baldness-risk-calculator', title: 'Baldness Risk', icon: '👨‍🦲', reason: 'Assess genetic hair loss factors', params: ['age','gender'] },
      { url: '/retirement-savings-calculator', title: 'Retirement Savings', icon: '💰', reason: 'Plan finances for your projected lifespan', params: ['age'] }
    ]
  },
  'lipid-panel': {
    links: [
      { url: '/lifespan-calculator', title: 'Lifespan Calculator', icon: '🧬', reason: 'See how lipids affect longevity', params: ['age','gender'] },
      { url: '/tdee-calculator', title: 'TDEE Calculator', icon: '🔥', reason: 'Manage calories for heart health', params: ['weight_kg','height_cm','age','gender'] },
      { url: '/vitamin-d-intake-calculator', title: 'Vitamin D Intake', icon: '☀️', reason: 'Check your vitamin D needs', params: ['age','gender','weight_kg'] },
      { url: '/baldness-risk-calculator', title: 'Baldness Risk', icon: '👨‍🦲', reason: 'DHT and cholesterol share pathways', params: ['age','gender'] }
    ]
  },
  'vitamin-d-intake': {
    links: [
      { url: '/vitamin-d-conversion-calculator', title: 'Vitamin D Units', icon: '🔄', reason: 'Convert between IU, mcg, and nmol/L', params: [] },
      { url: '/lifespan-calculator', title: 'Lifespan Calculator', icon: '🧬', reason: 'See vitamin D\'s effect on longevity', params: ['age','gender'] },
      { url: '/lipid-panel-goals-calculator', title: 'Lipid Panel Goals', icon: '❤️', reason: 'Check your heart health markers', params: ['age','gender'] }
    ]
  },
  'vitamin-d-conversion': {
    links: [
      { url: '/vitamin-d-intake-calculator', title: 'Vitamin D Intake', icon: '☀️', reason: 'Find your optimal daily intake', params: ['age','gender','weight_kg'] },
      { url: '/lifespan-calculator', title: 'Lifespan Calculator', icon: '🧬', reason: 'See vitamin D\'s longevity benefits', params: ['age','gender'] }
    ]
  },
  'baldness': {
    links: [
      { url: '/lifespan-calculator', title: 'Lifespan Calculator', icon: '🧬', reason: 'Explore genetic health factors', params: ['age','gender'] },
      { url: '/lipid-panel-goals-calculator', title: 'Lipid Panel Goals', icon: '❤️', reason: 'Check related health markers', params: ['age','gender'] }
    ]
  },
  'dog-pregnancy': {
    links: [
      { url: '/child-growth-calculator', title: 'Child Growth', icon: '📏', reason: 'Track child growth percentiles', params: [] },
      { url: '/newborn-weight-loss-calculator', title: 'Newborn Weight', icon: '👶', reason: 'Monitor newborn weight', params: [] }
    ]
  },
  'plasma-donation': {
    links: [
      { url: '/ideal-body-weight-calculator', title: 'Ideal Body Weight', icon: '⚖️', reason: 'Check weight requirements for donation', params: ['height_cm','gender'] },
      { url: '/creatine-water-calculator', title: 'Hydration Calculator', icon: '💧', reason: 'Stay hydrated for donation', params: ['weight_kg'] }
    ]
  },
  'creatine': {
    links: [
      { url: '/tdee-calculator', title: 'TDEE Calculator', icon: '🔥', reason: 'Optimize calories with creatine', params: ['weight_kg','height_cm','age','gender'] },
      { url: '/carb-cycling-calculator', title: 'Carb Cycling', icon: '🔄', reason: 'Pair creatine with carb cycling', params: ['weight_kg','height_cm','age','gender'] },
      { url: '/ideal-body-weight-calculator', title: 'Ideal Body Weight', icon: '⚖️', reason: 'Set your muscle-building target', params: ['height_cm','gender'] }
    ]
  },
  'starbucks': {
    links: [
      { url: '/tdee-calculator', title: 'TDEE Calculator', icon: '🔥', reason: 'Fit your drink into your calorie budget', params: [] },
      { url: '/chipotle-nutrition-calculator', title: 'Chipotle Nutrition', icon: '🌯', reason: 'Build a healthy lunch too', params: [] },
      { url: '/caloric-macronutrient-calculator', title: 'Macro Calculator', icon: '🥗', reason: 'Track your daily macros', params: [] },
      { url: '/bac-calculator', title: 'BAC Calculator', icon: '🍺', reason: 'Tracking drinks too? Check your BAC', params: [] }
    ]
  },
  'chipotle': {
    links: [
      { url: '/tdee-calculator', title: 'TDEE Calculator', icon: '🔥', reason: 'Fit your meal into your calorie budget', params: [] },
      { url: '/starbucks-nutrition-calculator', title: 'Starbucks Nutrition', icon: '☕', reason: 'Check your drink calories too', params: [] },
      { url: '/caloric-macronutrient-calculator', title: 'Macro Calculator', icon: '🥗', reason: 'Track your daily macros', params: [] }
    ]
  },
  'retirement': {
    links: [
      { url: '/lifespan-calculator', title: 'Lifespan Calculator', icon: '🧬', reason: 'Estimate how long your savings need to last', params: ['age','gender'] }
    ]
  },
  'protein-intake': {
    links: [
      { url: '/tdee-calculator', title: 'TDEE Calculator', icon: '🔥', reason: 'Calculate your daily calorie needs', params: ['weight_kg','height_cm','age','gender'] },
      { url: '/caloric-intake-macronutrient-calculator', title: 'Macro Calculator', icon: '🥗', reason: 'Get your full macronutrient breakdown', params: ['weight_kg','height_cm','age','gender'] },
      { url: '/water-intake-calculator', title: 'Water Intake Calculator', icon: '💧', reason: 'Calculate your optimal daily hydration', params: ['weight_kg','age','gender'] },
      { url: '/bmi-calculator', title: 'BMI Calculator', icon: '📊', reason: 'Check your BMI category', params: ['weight_kg','height_cm'] },
      { url: '/ideal-body-weight-calculator', title: 'Ideal Body Weight', icon: '⚖️', reason: 'Find your target weight', params: ['height_cm','gender'] }
    ]
  },
  'water-intake': {
    links: [
      { url: '/protein-intake-calculator', title: 'Protein Calculator', icon: '🥩', reason: 'Calculate your optimal protein intake', params: ['weight_kg','age','gender'] },
      { url: '/tdee-calculator', title: 'TDEE Calculator', icon: '🔥', reason: 'Calculate your daily calorie needs', params: ['weight_kg','height_cm','age','gender'] },
      { url: '/caloric-intake-macronutrient-calculator', title: 'Macro Calculator', icon: '🥗', reason: 'Get your full macronutrient breakdown', params: ['weight_kg','height_cm','age','gender'] },
      { url: '/bmi-calculator', title: 'BMI Calculator', icon: '📊', reason: 'Check your BMI category', params: ['weight_kg','height_cm'] }
    ]
  },
  'calories-burned': {
    links: [
      { url: '/tdee-calculator', title: 'TDEE Calculator', icon: '🔥', reason: 'Calculate your total daily calorie needs', params: ['weight_kg','height_cm','age','gender'] },
      { url: '/protein-intake-calculator', title: 'Protein Calculator', icon: '🥩', reason: 'Fuel your workouts with optimal protein', params: ['weight_kg','age','gender'] },
      { url: '/bmi-calculator', title: 'BMI Calculator', icon: '📊', reason: 'Check your BMI category', params: ['weight_kg','height_cm'] },
      { url: '/caloric-intake-macronutrient-calculator', title: 'Macro Calculator', icon: '🥗', reason: 'Plan your post-workout nutrition', params: ['weight_kg','height_cm','age','gender'] }
    ]
  }
};

/**
 * Show contextual next-step suggestions in the results area.
 * @param {string} calculatorId - Key in CALCULATOR_GRAPH
 * @param {object} userData - User's input data {weight_kg, height_cm, age, gender, ...}
 * @param {object} resultData - Calculator-specific result data for dynamic reason text
 * @param {string} containerId - ID of element to append suggestions to (default: 'results')
 */
function showNextSteps(calculatorId, userData, resultData, containerId) {
  var config = CALCULATOR_GRAPH[calculatorId];
  if (!config || !config.links || !config.links.length) return;

  var container = document.getElementById(containerId || 'results');
  if (!container) return;

  // Remove existing next-steps if recalculating
  var existing = container.querySelector('.next-steps');
  if (existing) existing.remove();

  var wrapper = document.createElement('div');
  wrapper.className = 'next-steps';
  wrapper.innerHTML = '<p class="next-steps-title">What to Calculate Next</p>';

  // Show up to 3 suggestions
  var links = config.links.slice(0, 3);
  links.forEach(function(link) {
    var a = document.createElement('a');

    // Build URL with data params
    var url = link.url;
    if (link.params && link.params.length && userData) {
      var queryParts = [];
      link.params.forEach(function(param) {
        if (userData[param] !== undefined && userData[param] !== null && userData[param] !== '') {
          queryParts.push(encodeURIComponent(param) + '=' + encodeURIComponent(userData[param]));
        }
      });
      if (queryParts.length) {
        url += '?' + queryParts.join('&');
      }
    }

    a.href = url;
    a.className = 'next-step-card';
    // GA4 event tracking for content loop clicks
    a.addEventListener('click', function() {
      if (typeof gtag === 'function') {
        gtag('event', 'content_loop_click', {
          'source_calculator': calculatorId,
          'destination': link.url,
          'event_category': 'engagement'
        });
      }
    });

    // Replace {placeholders} in reason text with result data
    var reason = link.reason;
    if (resultData) {
      Object.keys(resultData).forEach(function(key) {
        reason = reason.replace('{' + key + '}', resultData[key]);
      });
    }
    // Remove any unreplaced placeholders
    reason = reason.replace(/\{[^}]+\}/g, '');

    a.innerHTML =
      '<span class="next-step-icon">' + link.icon + '</span>' +
      '<span class="next-step-content">' +
        '<span class="next-step-name">' + link.title + '</span>' +
        '<span class="next-step-reason">' + reason + '</span>' +
      '</span>' +
      '<span class="next-step-arrow">&rarr;</span>';

    wrapper.appendChild(a);
  });

  container.appendChild(wrapper);

  // Add share button after next steps
  addShareButton(container, userData);
}

/**
 * Helper to collect common form data.
 * Call this in your calculate function to get userData object.
 */
function collectUserData() {
  var data = {};
  var fields = {
    'age': 'age',
    'gender': 'gender',
    'sex': 'gender',
    'weight_kg': 'weight_kg',
    'weight_lb': 'weight_lb',
    'height_cm': 'height_cm',
    'height_ft': 'height_ft',
    'height_in': 'height_in',
    'activity': 'activity'
  };
  Object.keys(fields).forEach(function(id) {
    var el = document.getElementById(id);
    if (el && el.value) {
      data[fields[id]] = el.value;
    }
  });

  // Convert imperial to metric if needed for cross-linking
  if (data.weight_lb && !data.weight_kg) {
    data.weight_kg = (parseFloat(data.weight_lb) * 0.453592).toFixed(1);
  }
  if (data.height_ft && !data.height_cm) {
    var ft = parseFloat(data.height_ft) || 0;
    var inches = parseFloat(data.height_in) || 0;
    data.height_cm = ((ft * 12 + inches) * 2.54).toFixed(1);
  }
  return data;
}

/**
 * Add share button to results area.
 * Generates a shareable URL with user data pre-filled.
 */
function addShareButton(container, userData) {
  // Remove existing share buttons if recalculating
  var existing = container.querySelector('.share-results');
  if (existing) existing.remove();

  var shareDiv = document.createElement('div');
  shareDiv.className = 'share-results';

  // Build share URL with user data
  var shareUrl = window.location.origin + window.location.pathname;
  if (userData) {
    var queryParts = [];
    Object.keys(userData).forEach(function(key) {
      if (userData[key]) {
        queryParts.push(encodeURIComponent(key) + '=' + encodeURIComponent(userData[key]));
      }
    });
    if (queryParts.length) {
      shareUrl += '?' + queryParts.join('&');
    }
  }

  // Copy link button
  var copyBtn = document.createElement('button');
  copyBtn.type = 'button';
  copyBtn.className = 'share-btn';
  copyBtn.innerHTML = '&#128279; Copy Link';
  copyBtn.addEventListener('click', function() {
    // GA4 event tracking
    if (typeof gtag === 'function') {
      gtag('event', 'share_results', {
        'method': 'copy_link',
        'calculator': window.location.pathname,
        'event_category': 'engagement'
      });
    }
    if (navigator.clipboard) {
      navigator.clipboard.writeText(shareUrl).then(function() {
        copyBtn.innerHTML = '&#10003; Copied!';
        copyBtn.classList.add('copied');
        setTimeout(function() {
          copyBtn.innerHTML = '&#128279; Copy Link';
          copyBtn.classList.remove('copied');
        }, 2000);
      });
    } else {
      // Fallback for non-HTTPS
      var input = document.createElement('input');
      input.value = shareUrl;
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
      copyBtn.innerHTML = '&#10003; Copied!';
      copyBtn.classList.add('copied');
      setTimeout(function() {
        copyBtn.innerHTML = '&#128279; Copy Link';
        copyBtn.classList.remove('copied');
      }, 2000);
    }
  });
  shareDiv.appendChild(copyBtn);

  container.appendChild(shareDiv);

  // Save calculation to localStorage for return visit hook
  saveLastCalculation(userData);
}

/**
 * Save the user's last calculation for return visit prompts.
 */
function saveLastCalculation(userData) {
  try {
    var entry = {
      page: window.location.pathname,
      data: userData,
      timestamp: Date.now()
    };
    localStorage.setItem('hc_last_calc', JSON.stringify(entry));
  } catch(e) {}
}

/**
 * Show return visit prompt if the user has a previous calculation.
 * Call this on DOMContentLoaded.
 */
function checkReturnVisit() {
  try {
    var raw = localStorage.getItem('hc_last_calc');
    if (!raw) return;
    var entry = JSON.parse(raw);
    // Only show if last calc was on a different page and within 30 days
    if (entry.page === window.location.pathname) return;
    if (Date.now() - entry.timestamp > 30 * 24 * 60 * 60 * 1000) return;

    // Find the calculator name from the graph
    var calcName = '';
    var calcId = '';
    Object.keys(CALCULATOR_GRAPH).forEach(function(id) {
      var links = CALCULATOR_GRAPH[id].links;
      links.forEach(function(link) {
        if (link.url === entry.page) {
          calcName = link.title;
          calcId = id;
        }
      });
    });

    // Build the return URL with saved data
    var returnUrl = entry.page;
    if (entry.data) {
      var parts = [];
      Object.keys(entry.data).forEach(function(k) {
        if (entry.data[k]) parts.push(k + '=' + encodeURIComponent(entry.data[k]));
      });
      if (parts.length) returnUrl += '?' + parts.join('&');
    }

    // Only show if we found a name for the calculator
    if (!calcName) return;

    // Create a subtle banner below the header
    var banner = document.createElement('div');
    banner.className = 'return-visit-banner';
    banner.innerHTML =
      '<span>Welcome back! Continue with your <a href="' + returnUrl + '">' + calcName + '</a> results.</span>' +
      '<button type="button" class="return-visit-close" aria-label="Dismiss">&times;</button>';

    var headerEl = document.querySelector('.calculator-container');
    if (headerEl) {
      headerEl.insertBefore(banner, headerEl.firstChild);
    }

    banner.querySelector('.return-visit-close').addEventListener('click', function() {
      banner.remove();
    });

    // GA4 tracking
    if (typeof gtag === 'function') {
      gtag('event', 'return_visit_prompt', {
        'previous_calculator': entry.page,
        'event_category': 'engagement'
      });
    }
  } catch(e) {}
}

// Auto-initialize return visit check
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', checkReturnVisit);
} else {
  checkReturnVisit();
}
