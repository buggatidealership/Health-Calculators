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
  'tdee': {
    links: [
      { url: '/carb-cycling-calculator', title: 'Carb Cycling Calculator', icon: '🔄', reason: 'Optimize your {tdee} kcal with carb cycling', params: ['weight_kg','height_cm','age','gender','activity'] },
      { url: '/fasting-weight-loss-calculator', title: 'Fasting Weight Loss', icon: '⏱️', reason: 'See how fasting affects your {tdee} kcal budget', params: ['weight_kg','height_cm','age','gender'] },
      { url: '/ideal-body-weight-calculator', title: 'Ideal Body Weight', icon: '⚖️', reason: 'Find your target weight based on your frame', params: ['height_cm','gender'] },
      { url: '/caloric-macronutrient-calculator', title: 'Macro Calculator', icon: '🥗', reason: 'Get detailed macros for your {tdee} kcal goal', params: ['weight_kg','height_cm','age','gender','activity'] }
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
      { url: '/carb-cycling-calculator', title: 'Carb Cycling Calculator', icon: '🔄', reason: 'Pair fasting with carb cycling', params: ['weight_kg','height_cm','age','gender'] }
    ]
  },
  'ideal-body-weight': {
    links: [
      { url: '/tdee-calculator', title: 'TDEE Calculator', icon: '🔥', reason: 'Calculate calories for your ideal weight', params: ['height_cm','gender','age'] },
      { url: '/army-body-fat-calculator', title: 'Body Fat Calculator', icon: '📐', reason: 'Estimate your current body composition', params: ['height_cm','gender','age'] },
      { url: '/fasting-weight-loss-calculator', title: 'Fasting Weight Loss', icon: '⏱️', reason: 'Plan your path to your ideal weight', params: ['weight_kg','height_cm','age','gender'] }
    ]
  },
  'caloric-macro': {
    links: [
      { url: '/tdee-calculator', title: 'TDEE Calculator', icon: '🔥', reason: 'Refine your calorie baseline', params: ['weight_kg','height_cm','age','gender','activity'] },
      { url: '/carb-cycling-calculator', title: 'Carb Cycling', icon: '🔄', reason: 'Cycle your macros for better results', params: ['weight_kg','height_cm','age','gender'] },
      { url: '/chipotle-nutrition-calculator', title: 'Chipotle Nutrition', icon: '🌯', reason: 'Build a meal that fits your macros' }
    ]
  },
  'army-body-fat': {
    links: [
      { url: '/tdee-calculator', title: 'TDEE Calculator', icon: '🔥', reason: 'Calculate calories for your body composition', params: ['height_cm','gender','age'] },
      { url: '/ideal-body-weight-calculator', title: 'Ideal Body Weight', icon: '⚖️', reason: 'Find your target weight', params: ['height_cm','gender'] },
      { url: '/liposuction-weight-loss-calculator', title: 'Liposuction Calculator', icon: '💉', reason: 'Estimate fat removal results', params: ['weight_kg','height_cm','gender'] }
    ]
  },
  'ozempic': {
    links: [
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
      { url: '/newborn-weight-loss-calculator', title: 'Newborn Weight', icon: '👶', reason: 'Monitor newborn weight changes', params: [] }
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
      { url: '/lipid-panel-goals-calculator', title: 'Lipid Panel', icon: '❤️', reason: 'Check cardiovascular health markers', params: ['age','gender'] }
    ]
  },
  'lifespan': {
    links: [
      { url: '/lipid-panel-goals-calculator', title: 'Lipid Panel Goals', icon: '❤️', reason: 'Optimize your cardiovascular health', params: ['age','gender'] },
      { url: '/vitamin-d-intake-calculator', title: 'Vitamin D Intake', icon: '☀️', reason: 'Ensure adequate vitamin D levels', params: ['age','gender','weight_kg'] },
      { url: '/alcohol-impact-calculator', title: 'Alcohol Impact', icon: '🍷', reason: 'Check alcohol\'s effect on longevity', params: ['age','gender'] }
    ]
  },
  'lipid-panel': {
    links: [
      { url: '/lifespan-calculator', title: 'Lifespan Calculator', icon: '🧬', reason: 'See how lipids affect longevity', params: ['age','gender'] },
      { url: '/tdee-calculator', title: 'TDEE Calculator', icon: '🔥', reason: 'Manage calories for heart health', params: ['weight_kg','height_cm','age','gender'] },
      { url: '/vitamin-d-intake-calculator', title: 'Vitamin D Intake', icon: '☀️', reason: 'Check your vitamin D needs', params: ['age','gender','weight_kg'] }
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
      { url: '/caloric-macronutrient-calculator', title: 'Macro Calculator', icon: '🥗', reason: 'Track your daily macros', params: [] }
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
