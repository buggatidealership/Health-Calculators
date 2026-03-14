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
      { url: '/body-roundness-index-calculator', title: 'Body Roundness Index', icon: '📏', reason: 'BRI catches health risks that BMI misses — see your score', params: ['height_cm','age','gender'] },
      { url: '/tdee-calculator', title: 'TDEE Calculator', icon: '🔥', reason: 'Your BMI shows where you are — not how many calories it takes to change it', params: ['weight_kg','height_cm','age','gender'] },
      { url: '/protein-intake-calculator', title: 'Protein Calculator', icon: '🥩', reason: 'Most people eat 40% less protein than they need — are you one of them?', params: ['weight_kg','age','gender'] },
      { url: '/ideal-body-weight-calculator', title: 'Ideal Body Weight', icon: '⚖️', reason: 'Your "ideal" weight depends on 3 factors most people overlook', params: ['height_cm','gender'] },
      { url: '/army-body-fat-calculator', title: 'Army Body Fat', icon: '⭐', reason: 'The military uses a different standard than BMI — would you pass?', params: ['height_cm','gender','age'] },
      { url: '/body-fat-calculator', title: 'Body Fat Calculator', icon: '📐', reason: '30% of "healthy" BMIs hide unhealthy body fat levels', params: ['height_cm','gender','age'] },
      { url: '/bmi-vs-body-fat', title: 'BMI vs Body Fat %', icon: '📋', reason: 'BMI missed the mark? See which metric actually predicts your health risk', params: [] },
      { url: '/fasting-weight-loss-calculator', title: 'Fasting Weight Loss', icon: '⏱️', reason: '16:8 fasting burns fat without cutting calories — see your timeline', params: ['weight_kg','height_cm','age','gender'] },
      { url: '/metabolic-age-calculator', title: 'Metabolic Age', icon: '🧬', reason: 'Two people with the same BMI can have metabolic ages 10 years apart', params: ['weight_kg','height_cm','age','gender'] }
    ]
  },
  'tdee': {
    links: [
      { url: '/bmi-calculator', title: 'BMI Calculator', icon: '📊', reason: 'Your TDEE changes with your BMI — do you know your category?', params: ['weight_kg','height_cm'] },
      { url: '/tdee-vs-bmr', title: 'TDEE vs BMR Explained', icon: '📋', reason: 'Most people confuse these two numbers — the difference changes your entire diet plan', params: [] },
      { url: '/calories-burned-calculator', title: 'Calories Burned', icon: '🏃', reason: 'A 30-min run burns fewer calories than most people think', params: ['weight_kg'] },
      { url: '/protein-intake-calculator', title: 'Protein Calculator', icon: '🥩', reason: 'Without enough protein, up to 25% of weight loss comes from muscle', params: ['weight_kg','age','gender'] },
      { url: '/carb-cycling-calculator', title: 'Carb Cycling Calculator', icon: '🔄', reason: 'Cycling carbs around your {tdee} kcal can accelerate fat loss', params: ['weight_kg','height_cm','age','gender','activity'] },
      { url: '/fasting-weight-loss-calculator', title: 'Fasting Weight Loss', icon: '⏱️', reason: 'Fasting changes when you burn your {tdee} kcal — see the difference', params: ['weight_kg','height_cm','age','gender'] },
      { url: '/ideal-body-weight-calculator', title: 'Ideal Body Weight', icon: '⚖️', reason: 'Your frame size shifts your ideal weight by up to 15 lbs', params: ['height_cm','gender'] },
      { url: '/sleep-calculator', title: 'Sleep Calculator', icon: '🌙', reason: 'Poor sleep raises hunger hormones by 28% — are you getting enough?', params: ['age'] },
      { url: '/metabolic-age-calculator', title: 'Metabolic Age', icon: '🧬', reason: 'Your TDEE starts with BMR — is your metabolism aging faster than you?', params: ['weight_kg','height_cm','age','gender'] }
    ]
  },
  'carb-cycling': {
    links: [
      { url: '/tdee-calculator', title: 'TDEE Calculator', icon: '🔥', reason: 'Your carb cycle only works if your TDEE baseline is accurate', params: ['weight_kg','height_cm','age','gender','activity'] },
      { url: '/fasting-weight-loss-calculator', title: 'Fasting Weight Loss', icon: '⏱️', reason: 'Stacking fasting with carb cycling doubled fat loss in one study', params: ['weight_kg','height_cm','age','gender'] },
      { url: '/caloric-intake-macronutrient-calculator', title: 'Macro Calculator', icon: '🥗', reason: 'Your fat-to-protein ratio matters more than total calories', params: ['weight_kg','height_cm','age','gender'] },
      { url: '/keto-calculator', title: 'Keto Calculator', icon: '🥑', reason: 'Keto is the ultimate low-carb day — see your exact macros for ketosis', params: ['weight_kg','height_cm','age','gender'] }
    ]
  },
  'keto': {
    links: [
      { url: '/caloric-intake-macronutrient-calculator', title: 'Macro Calculator', icon: '🥗', reason: 'Compare your keto macros to a standard balanced split — the protein gap may surprise you', params: ['weight_kg','height_cm','age','gender'] },
      { url: '/tdee-calculator', title: 'TDEE Calculator', icon: '🔥', reason: 'Your keto deficit only works if your TDEE baseline is accurate', params: ['weight_kg','height_cm','age','gender','activity'] },
      { url: '/carb-cycling-calculator', title: 'Carb Cycling', icon: '🔄', reason: 'Cycling between keto and higher-carb days can break weight loss plateaus', params: ['weight_kg','height_cm','age','gender'] },
      { url: '/protein-intake-calculator', title: 'Protein Calculator', icon: '🥩', reason: 'Too little protein on keto costs muscle — find your minimum threshold', params: ['weight_kg','age','gender'] },
      { url: '/fasting-weight-loss-calculator', title: 'Fasting Weight Loss', icon: '⏱️', reason: 'Keto + intermittent fasting accelerates ketone production — see your timeline', params: ['weight_kg','height_cm','age','gender'] }
    ]
  },
  'fasting': {
    links: [
      { url: '/intermittent-fasting-calculator', title: 'IF Schedule Planner', icon: '🕐', reason: 'Know your weight loss — now plan exactly when to eat and fast each day', params: [] },
      { url: '/tdee-calculator', title: 'TDEE Calculator', icon: '🔥', reason: 'Fasting without knowing your TDEE? You might be undereating', params: ['weight_kg','height_cm','age','gender'] },
      { url: '/ideal-body-weight-calculator', title: 'Ideal Body Weight', icon: '⚖️', reason: 'How far are you from your ideal weight? The answer sets your timeline', params: ['height_cm','gender'] },
      { url: '/carb-cycling-calculator', title: 'Carb Cycling Calculator', icon: '🔄', reason: 'High-carb days on workout days can boost fasting results by 20%', params: ['weight_kg','height_cm','age','gender'] },
      { url: '/creatine-water-calculator', title: 'Hydration Calculator', icon: '💧', reason: 'Dehydration during fasting drops metabolism — find your water target', params: ['weight_kg'] }
    ]
  },
  'if-schedule': {
    links: [
      { url: '/fasting-weight-loss-calculator', title: 'Fasting Weight Loss', icon: '⏱️', reason: 'Now that you have your schedule — see how much fat you could lose', params: ['weight_kg','height_cm','age','gender'] },
      { url: '/tdee-calculator', title: 'TDEE Calculator', icon: '🔥', reason: 'Your fasting deficit depends on your TDEE — is yours accurate?', params: ['weight_kg','height_cm','age','gender'] },
      { url: '/carb-cycling-calculator', title: 'Carb Cycling Calculator', icon: '🔄', reason: 'Stack carb cycling with IF for faster results', params: ['weight_kg','height_cm','age','gender'] },
      { url: '/caloric-intake-macronutrient-calculator', title: 'Macro Calculator', icon: '🥗', reason: 'With a shorter eating window, hitting your macros matters more', params: ['weight_kg','height_cm','age','gender'] }
    ]
  },
  'ideal-body-weight': {
    links: [
      { url: '/body-roundness-index-calculator', title: 'Body Roundness Index', icon: '📏', reason: 'BRI measures body shape, not weight — it reveals risks that ideal weight calculations miss', params: ['height_cm','age','gender'] },
      { url: '/bmi-calculator', title: 'BMI Calculator', icon: '📊', reason: 'How far is your current BMI from where your ideal weight lands?', params: ['weight_kg','height_cm'] },
      { url: '/tdee-calculator', title: 'TDEE Calculator', icon: '🔥', reason: 'Reaching your ideal weight takes a specific calorie number — find it', params: ['height_cm','gender','age'] },
      { url: '/army-body-fat-calculator', title: 'Body Fat Calculator', icon: '📐', reason: 'Two people at the same weight can have 10%+ different body fat', params: ['height_cm','gender','age'] },
      { url: '/plasma-donation-earnings-calculator', title: 'Plasma Donation', icon: '🩸', reason: 'You could earn $500+/month donating plasma — do you qualify?', params: ['weight_kg','height_cm'] }
    ]
  },
  'caloric-macro': {
    links: [
      { url: '/tdee-calculator', title: 'TDEE Calculator', icon: '🔥', reason: 'Your macros mean nothing if your calorie baseline is off — is it?', params: ['weight_kg','height_cm','age','gender','activity'] },
      { url: '/protein-intake-calculator', title: 'Protein Calculator', icon: '🥩', reason: 'The 0.8g/kg protein RDA is a minimum, not optimal — find yours', params: ['weight_kg','age','gender'] },
      { url: '/carb-cycling-calculator', title: 'Carb Cycling', icon: '🔄', reason: 'Same weekly macros, different daily splits — the results surprised researchers', params: ['weight_kg','height_cm','age','gender'] },
      { url: '/keto-calculator', title: 'Keto Calculator', icon: '🥑', reason: 'Keto flips your macros — 75% fat changes everything about meal planning', params: ['weight_kg','height_cm','age','gender'] },
      { url: '/chipotle-nutrition-calculator', title: 'Chipotle Nutrition', icon: '🌯', reason: 'A Chipotle bowl can hit your macros perfectly — or blow them by 800 cal' }
    ]
  },
  'army-body-fat': {
    links: [
      { url: '/body-roundness-index-calculator', title: 'Body Roundness Index', icon: '📏', reason: 'BRI uses your waist measurement differently than the tape test — compare results', params: ['height_cm','age','gender'] },
      { url: '/tdee-calculator', title: 'TDEE Calculator', icon: '🔥', reason: 'Your body fat % determines your actual calorie burn — it\'s not what you\'d guess', params: ['height_cm','gender','age'] },
      { url: '/ideal-body-weight-calculator', title: 'Ideal Body Weight', icon: '⚖️', reason: 'Muscle weighs more than fat — your ideal weight might be higher than you think', params: ['height_cm','gender'] },
      { url: '/body-fat-calculator', title: 'Navy Body Fat Calculator', icon: '📐', reason: 'Army and Navy methods can differ by 3-5% — which is more accurate for you?', params: ['height_cm','gender','age'] },
      { url: '/liposuction-weight-loss-calculator', title: 'Liposuction Calculator', icon: '💉', reason: 'Lipo removes 1-11 lbs of fat per area — see your projected result', params: ['weight_kg','height_cm','gender'] }
    ]
  },
  'body-fat': {
    links: [
      { url: '/body-roundness-index-calculator', title: 'Body Roundness Index', icon: '📏', reason: 'BRI catches health risks that body fat % and BMI both miss — see your score', params: ['height_cm','age','gender'] },
      { url: '/bmi-calculator', title: 'BMI Calculator', icon: '📊', reason: 'Your body fat and BMI often tell different stories — see yours', params: ['weight_kg','height_cm'] },
      { url: '/ideal-body-weight-calculator', title: 'Ideal Body Weight', icon: '⚖️', reason: 'At your body fat %, your ideal weight is probably not what you expect', params: ['height_cm','gender'] },
      { url: '/tdee-calculator', title: 'TDEE Calculator', icon: '🔥', reason: 'Muscle burns 3x more calories than fat — your TDEE reflects that', params: ['weight_kg','height_cm','age','gender'] },
      { url: '/protein-intake-calculator', title: 'Protein Calculator', icon: '🥩', reason: 'Recomposition requires a specific protein threshold — are you hitting it?', params: ['weight_kg','age','gender'] },
      { url: '/army-body-fat-calculator', title: 'Army Body Fat Calculator', icon: '⭐', reason: 'The Army tape test gives a different number — would you pass?', params: ['height_cm','gender','age'] }
    ]
  },
  'body-roundness-index': {
    links: [
      { url: '/bmi-calculator', title: 'BMI Calculator', icon: '📊', reason: 'See how your BMI compares to your BRI — they often disagree', params: ['weight_kg','height_cm'] },
      { url: '/body-fat-calculator', title: 'Body Fat Calculator', icon: '📐', reason: 'Your BRI estimates shape — body fat % tells you the composition behind it', params: ['height_cm','gender','age'] },
      { url: '/ideal-body-weight-calculator', title: 'Ideal Body Weight', icon: '⚖️', reason: 'Your BRI ignores weight entirely — find out what your ideal weight actually is', params: ['height_cm','gender'] },
      { url: '/army-body-fat-calculator', title: 'Army Body Fat', icon: '⭐', reason: 'The Army tape test also uses your waist — would you pass their standard?', params: ['height_cm','gender','age'] },
      { url: '/tdee-calculator', title: 'TDEE Calculator', icon: '🔥', reason: 'Reducing your BRI requires a calorie target — find yours', params: ['weight_kg','height_cm','age','gender'] }
    ]
  },
  'ozempic-pen': {
    links: [
      { url: '/tdee-calculator', title: 'TDEE Calculator', icon: '🔥', reason: 'Eating below your calorie floor on Ozempic causes muscle loss — find it', params: ['weight_kg','height_cm','age','gender'] }
    ]
  },
  'breast-implant-size': {
    links: [
      { url: '/cc-to-bra-size-calculator', title: 'CC to Bra Size', icon: '📏', reason: '300cc doesn\'t always mean the same cup size — your frame changes it', params: [] },
      { url: '/breast-implant-cost-calculator', title: 'Implant Cost', icon: '💰', reason: 'Total cost varies by $3,000+ depending on type and surgeon — get your estimate', params: [] },
      { url: '/breast-implant-calculator', title: 'Implant Comparison', icon: '🔬', reason: 'Silicone vs saline, round vs teardrop — each profile looks different on you', params: [] }
    ]
  },
  'cc-to-bra': {
    links: [
      { url: '/breast-implant-size-calculator', title: 'Implant Size Calculator', icon: '📐', reason: 'Your chest width and tissue affect the result more than CCs alone', params: [] },
      { url: '/breast-implant-cost-calculator', title: 'Implant Cost', icon: '💰', reason: 'The price gap between silicone and saline is bigger than you\'d think', params: [] },
      { url: '/breast-implant-calculator', title: 'Implant Comparison', icon: '🔬', reason: 'High vs low profile changes your look completely at the same CC', params: [] }
    ]
  },
  'breast-implant-cost': {
    links: [
      { url: '/breast-implant-size-calculator', title: 'Implant Size Calculator', icon: '📐', reason: 'Size affects cost — but the "right" size depends on 4 body measurements', params: [] },
      { url: '/cc-to-bra-size-calculator', title: 'CC to Bra Size', icon: '📏', reason: 'The same CCs produce different cup sizes on different frames', params: [] },
      { url: '/botox-dosage-calculator', title: 'Botox Cost', icon: '💉', reason: 'Bundling procedures saves 15-20% on average — see your Botox estimate', params: [] }
    ]
  },
  'breast-implant': {
    links: [
      { url: '/breast-implant-size-calculator', title: 'Implant Size Calculator', icon: '📐', reason: 'Most patients wish they\'d gone slightly larger — find your number first', params: [] },
      { url: '/breast-implant-cost-calculator', title: 'Implant Cost', icon: '💰', reason: 'Costs range from $5,000 to $12,000+ — see where your choice falls', params: [] },
      { url: '/cc-to-bra-size-calculator', title: 'CC to Bra Size', icon: '📏', reason: '350cc is a C cup on one frame and a D on another — check yours', params: [] }
    ]
  },
  'botox': {
    links: [
      { url: '/lip-filler-cost-calculator', title: 'Lip Filler Cost', icon: '💋', reason: 'Lip filler costs $500-$2,000 per session — your price depends on volume', params: [] },
      { url: '/breast-implant-cost-calculator', title: 'Implant Cost', icon: '💰', reason: 'Bundling Botox with other procedures often saves 15-20%', params: [] },
      { url: '/liposuction-weight-loss-calculator', title: 'Liposuction', icon: '📐', reason: 'Lipo removes fat Botox can\'t touch — see your projected result', params: [] }
    ]
  },
  'lip-filler': {
    links: [
      { url: '/botox-dosage-calculator', title: 'Botox Calculator', icon: '💉', reason: '68% of filler patients also get Botox — see what yours would cost', params: [] },
      { url: '/breast-implant-cost-calculator', title: 'Implant Cost', icon: '💰', reason: 'Combining procedures in one visit cuts total cost significantly', params: [] }
    ]
  },
  'liposuction': {
    links: [
      { url: '/ideal-body-weight-calculator', title: 'Ideal Body Weight', icon: '⚖️', reason: 'Post-lipo weight isn\'t the same as ideal weight — find the difference', params: ['height_cm','gender'] },
      { url: '/tdee-calculator', title: 'TDEE Calculator', icon: '🔥', reason: 'Lipo results reverse without the right calorie target — know yours', params: ['weight_kg','height_cm','age','gender'] },
      { url: '/army-body-fat-calculator', title: 'Body Fat Calculator', icon: '📐', reason: 'Lipo changes your body fat % — see where you\'d land after', params: ['height_cm','gender'] }
    ]
  },
  'creatine-dosage': {
    links: [
      { url: '/creatine-water-calculator', title: 'Creatine Water Calculator', icon: '💧', reason: 'Creatine pulls water into muscle cells — calculate your extra hydration needs', params: ['weight_kg'] },
      { url: '/protein-intake-calculator', title: 'Protein Calculator', icon: '🥩', reason: 'Creatine and protein work together — are you hitting your daily target?', params: ['weight_kg','age','gender'] },
      { url: '/tdee-calculator', title: 'TDEE Calculator', icon: '🔥', reason: 'Creatine fuels performance but calories drive results — know your daily burn', params: ['weight_kg','height_cm','age','gender'] }
    ]
  },
  'caffeine-half-life': {
    links: [
      { url: '/sleep-calculator', title: 'Sleep Calculator', icon: '😴', reason: 'Caffeine disrupts sleep quality even when you don\'t notice — optimize your sleep cycles', params: [] },
      { url: '/tdee-calculator', title: 'TDEE Calculator', icon: '🔥', reason: 'Caffeine boosts metabolism by 3-11% — see your total daily calorie burn', params: ['weight_kg','height_cm','age','gender'] },
    ]
  },
  'ivf-due-date': {
    links: [
      { url: '/child-growth-calculator', title: 'Child Growth', icon: '📏', reason: 'IVF babies follow different early growth curves — track yours', params: [] }
    ]
  },
  'child-growth': {
    links: [
      { url: '/adult-height-predictor-calculator', title: 'Height Predictor', icon: '📐', reason: 'A child\'s current percentile doesn\'t predict adult height — this formula does', params: [] },
    ]
  },
  'adult-height': {
    links: [
      { url: '/child-growth-calculator', title: 'Child Growth', icon: '📏', reason: 'Growth spurts happen at specific ages — is your child on the curve?', params: [] },
      { url: '/ideal-body-weight-calculator', title: 'Ideal Body Weight', icon: '⚖️', reason: 'Every inch of height shifts ideal weight by 5-10 lbs — see the target', params: ['height_cm','gender'] }
    ]
  },
  'alcohol-impact': {
    links: [
      { url: '/lipid-panel-goals-calculator', title: 'Lipid Panel', icon: '❤️', reason: 'Alcohol raises HDL but also triglycerides — is the tradeoff worth it?', params: ['age','gender'] },
      { url: '/retirement-savings-calculator', title: 'Retirement Savings', icon: '💰', reason: 'Living longer means needing more savings — does your plan match?', params: ['age'] }
    ]
  },
  'lipid-panel': {
    links: [
      { url: '/tdee-calculator', title: 'TDEE Calculator', icon: '🔥', reason: 'Losing just 5% body weight can drop LDL by 10% — find your calorie target', params: ['weight_kg','height_cm','age','gender'] },
      { url: '/vitamin-d-intake-calculator', title: 'Vitamin D Intake', icon: '☀️', reason: 'Low vitamin D is linked to worse lipid profiles — are you getting enough?', params: ['age','gender','weight_kg'] },
      { url: '/baldness-risk-calculator', title: 'Baldness Risk', icon: '👨‍🦲', reason: 'DHT and cholesterol share metabolic pathways — your risk may be connected', params: ['age','gender'] }
    ]
  },
  'vitamin-d-intake': {
    links: [
      { url: '/vitamin-d-conversion-calculator', title: 'Vitamin D Units', icon: '🔄', reason: 'Your lab uses nmol/L but your supplement says IU — they\'re not the same', params: [] },
      { url: '/lipid-panel-goals-calculator', title: 'Lipid Panel Goals', icon: '❤️', reason: 'Vitamin D deficiency worsens cholesterol — check your heart markers', params: ['age','gender'] }
    ]
  },
  'vitamin-d-conversion': {
    links: [
      { url: '/vitamin-d-intake-calculator', title: 'Vitamin D Intake', icon: '☀️', reason: 'Most people take the wrong dose — your weight and age change the number', params: ['age','gender','weight_kg'] },
    ]
  },
  'baldness': {
    links: [
      { url: '/lipid-panel-goals-calculator', title: 'Lipid Panel Goals', icon: '❤️', reason: 'Men with vertex baldness have 36% higher heart disease risk — check yours', params: ['age','gender'] }
    ]
  },
  'dog-pregnancy': {
    links: [
      { url: '/child-growth-calculator', title: 'Child Growth', icon: '📏', reason: 'Growing kids at home too? See if they\'re hitting their percentiles', params: [] },
    ]
  },
  'plasma-donation': {
    links: [
      { url: '/ideal-body-weight-calculator', title: 'Ideal Body Weight', icon: '⚖️', reason: 'You must weigh at least 110 lbs to donate — where does your ideal fall?', params: ['height_cm','gender'] },
      { url: '/creatine-water-calculator', title: 'Hydration Calculator', icon: '💧', reason: 'Dehydration before donating causes 30% of deferrals — check your intake', params: ['weight_kg'] }
    ]
  },
  'creatine': {
    links: [
      { url: '/tdee-calculator', title: 'TDEE Calculator', icon: '🔥', reason: 'Creatine boosts performance but not without enough calories — find your floor', params: ['weight_kg','height_cm','age','gender'] },
      { url: '/carb-cycling-calculator', title: 'Carb Cycling', icon: '🔄', reason: 'Creatine absorbs better with carbs — timing your cycling matters', params: ['weight_kg','height_cm','age','gender'] },
      { url: '/ideal-body-weight-calculator', title: 'Ideal Body Weight', icon: '⚖️', reason: 'Creatine adds 2-5 lbs of water weight — your real target is different', params: ['height_cm','gender'] }
    ]
  },
  'ffmi': {
    links: [
      { url: '/body-fat-calculator', title: 'Body Fat Calculator', icon: '📐', reason: 'FFMI requires body fat percentage — estimate yours if you don\'t know it', params: ['height_cm','gender','age'] },
      { url: '/one-rep-max-calculator', title: '1RM Calculator', icon: '🏋️', reason: 'Strength relative to FFMI matters — calculate your training loads', params: [] },
      { url: '/protein-intake-calculator', title: 'Protein Calculator', icon: '🥩', reason: 'Maximizing FFMI requires 1.6-2.2g protein per kg — are you hitting it?', params: ['weight_kg','age','gender'] },
      { url: '/bulking-calorie-calculator', title: 'Bulking Calories', icon: '🍽️', reason: 'Building lean mass requires a calorie surplus — find your target', params: ['weight_kg','height_cm','age','gender'] },
      { url: '/bmi-calculator', title: 'BMI Calculator', icon: '⚖️', reason: 'BMI ignores muscle mass — FFMI is the better metric, but compare both', params: ['weight_kg','height_cm'] }
    ]
  },
  'fiber': {
    links: [
      { url: '/macro-calculator', title: 'Macro Calculator', icon: '🥗', reason: 'Fiber is a carbohydrate — see how it fits your complete macro target', params: ['weight_kg','height_cm','age','gender'] },
      { url: '/tdee-calculator', title: 'TDEE Calculator', icon: '🔥', reason: 'Your fiber target scales with calories — use your TDEE to get the precise number', params: ['weight_kg','height_cm','age','gender'] },
      { url: '/water-intake-calculator', title: 'Water Intake Calculator', icon: '💧', reason: 'Higher fiber intake requires more water — find your daily hydration target', params: ['weight_kg'] },
      { url: '/electrolyte-calculator', title: 'Electrolyte Calculator', icon: '⚡', reason: 'A plant-rich, high-fiber diet changes your sodium and potassium balance', params: ['weight_kg','height_cm','age','gender'] },
      { url: '/glycemic-index-calculator', title: 'Glycemic Index Calculator', icon: '📊', reason: 'High-fiber foods typically have a lower glycemic impact — check your favorite foods', params: [] }
    ]
  },
  'electrolyte': {
    links: [
      { url: '/tdee-calculator', title: 'TDEE Calculator', icon: '🔥', reason: 'Your calorie needs and electrolyte needs both scale with activity level', params: ['weight_kg','height_cm','age','gender'] },
      { url: '/creatine-dosage-calculator', title: 'Creatine Calculator', icon: '💪', reason: 'Creatine increases water retention — your electrolyte balance matters more', params: ['weight_kg'] },
      { url: '/caloric-intake-macronutrient-calculator', title: 'Macro Calculator', icon: '🥗', reason: 'Your carb intake directly affects electrolyte excretion — check your macros', params: ['weight_kg','height_cm','age','gender'] },
      { url: '/vitamin-d-intake-calculator', title: 'Vitamin D Calculator', icon: '☀️', reason: 'Vitamin D aids calcium absorption — are you getting enough?', params: [] }
    ]
  },
  'bulking-calories': {
    links: [
      { url: '/protein-intake-calculator', title: 'Protein Calculator', icon: '🥩', reason: 'Your bulk needs 1g protein per lb bodyweight — are you hitting that target?', params: ['weight_kg','age','gender'] },
      { url: '/one-rep-max-calculator', title: '1RM Calculator', icon: '🏋️', reason: 'A surplus without progressive overload just adds fat — find your training loads', params: [] },
      { url: '/tdee-calculator', title: 'TDEE Calculator', icon: '🔥', reason: 'Your bulking calories are built on your TDEE — double-check that number', params: ['weight_kg','height_cm','age','gender'] },
      { url: '/creatine-dosage-calculator', title: 'Creatine Calculator', icon: '💪', reason: 'Creatine adds 5-10% strength and 2-5 lbs water weight during a bulk', params: ['weight_kg'] },
      { url: '/body-fat-calculator', title: 'Body Fat Calculator', icon: '📐', reason: 'Start bulking above 15% body fat and more calories go to fat than muscle', params: ['height_cm','gender','age'] },
      { url: '/caloric-intake-macronutrient-calculator', title: 'Macro Calculator', icon: '🥗', reason: 'Fine-tune your carb and fat split for training performance', params: ['weight_kg','height_cm','age','gender'] }
    ]
  },
  'one-rep-max': {
    links: [
      { url: '/training-volume-calculator', title: 'Training Volume', icon: '📊', reason: 'Knowing your 1RM means nothing without the right number of sets — find your volume', params: [] },
      { url: '/tdee-calculator', title: 'TDEE Calculator', icon: '🔥', reason: 'Building strength requires a calorie surplus — find out how much you need', params: ['weight_kg','height_cm','age','gender'] },
      { url: '/protein-intake-calculator', title: 'Protein Calculator', icon: '🥩', reason: 'Strength gains plateau without 1.6-2.2g protein per kg — are you hitting it?', params: ['weight_kg','age','gender'] },
      { url: '/creatine-dosage-calculator', title: 'Creatine Calculator', icon: '💪', reason: 'Creatine adds 5-10% to your 1RM in 4 weeks — calculate your dose', params: ['weight_kg'] },
      { url: '/caloric-intake-macronutrient-calculator', title: 'Macro Calculator', icon: '🥗', reason: 'Your macro ratio determines whether strength gains come with fat or without it', params: ['weight_kg','height_cm','age','gender'] },
      { url: '/body-fat-calculator', title: 'Body Fat Calculator', icon: '📐', reason: 'Strength-to-bodyweight ratio matters more than absolute strength for most goals', params: ['height_cm','gender','age'] },
    ]
  },
  'training-volume': {
    links: [
      { url: '/one-rep-max-calculator', title: '1RM Calculator', icon: '🏋️', reason: 'Volume only works if intensity is right — calculate your training loads', params: [] },
      { url: '/protein-intake-calculator', title: 'Protein Calculator', icon: '🥩', reason: 'High training volume without adequate protein is wasted work — check your target', params: ['weight_kg','age','gender'] },
      { url: '/tdee-calculator', title: 'TDEE Calculator', icon: '🔥', reason: 'More sets burn more calories — make sure you are eating enough to recover', params: ['weight_kg','height_cm','age','gender'] },
      { url: '/caloric-intake-macronutrient-calculator', title: 'Macro Calculator', icon: '🥗', reason: 'Your carb-to-protein ratio determines how well you recover between sessions', params: ['weight_kg','height_cm','age','gender'] },
      { url: '/sleep-calculator', title: 'Sleep Calculator', icon: '🌙', reason: 'Sleep under 7 hours cuts your muscle protein synthesis by 18%', params: ['age'] },
    ]
  },
  'vo2-max': {
    links: [
      { url: '/tdee-calculator', title: 'TDEE Calculator', icon: '🔥', reason: 'Higher VO2 max means you burn more calories during exercise — find your daily target', params: ['weight_kg','height_cm','age','gender'] },
      { url: '/one-rep-max-calculator', title: '1RM Calculator', icon: '🏋️', reason: 'Strength training boosts VO2 max by up to 8% — find your training loads', params: [] },
      { url: '/body-fat-calculator', title: 'Body Fat Calculator', icon: '📐', reason: 'Every 5% body fat drop improves VO2 max by ~2.5 ml/kg/min', params: ['height_cm','gender','age'] },
      { url: '/calories-burned-calculator', title: 'Calories Burned', icon: '🏃', reason: 'Your VO2 max determines how many calories you actually burn per workout', params: ['weight_kg'] },
      { url: '/metabolic-age-calculator', title: 'Metabolic Age', icon: '🧬', reason: 'VO2 max is the strongest predictor of biological age — see your metabolic age too', params: ['weight_kg','height_cm','age','gender'] },
      { url: '/sleep-calculator', title: 'Sleep Calculator', icon: '🌙', reason: 'Poor sleep drops VO2 max by up to 11% — are you recovering enough?', params: ['age'] }
    ]
  },
  'starbucks': {
    links: [
      { url: '/tdee-calculator', title: 'TDEE Calculator', icon: '🔥', reason: 'A Frappuccino can be 25% of your daily calories — do you know your limit?', params: [] },
      { url: '/chipotle-nutrition-calculator', title: 'Chipotle Nutrition', icon: '🌯', reason: 'Your Chipotle order could be 500 or 1,200 cal — the difference is 3 choices', params: [] },
      { url: '/caloric-intake-macronutrient-calculator', title: 'Macro Calculator', icon: '🥗', reason: 'That latte has almost no protein — see what your daily macros need', params: [] },
    ]
  },
  'chipotle': {
    links: [
      { url: '/tdee-calculator', title: 'TDEE Calculator', icon: '🔥', reason: 'A burrito can eat 50%+ of your daily calories — find your actual budget', params: [] },
      { url: '/starbucks-nutrition-calculator', title: 'Starbucks Nutrition', icon: '☕', reason: 'Your afternoon Starbucks might have more calories than your Chipotle bowl', params: [] },
      { url: '/subway-calorie-calculator', title: 'Subway Nutrition', icon: '🥖', reason: 'Subway seems lighter — but a footlong with mayo tops 900 cal', params: [] },
      { url: '/caloric-intake-macronutrient-calculator', title: 'Macro Calculator', icon: '🥗', reason: 'Chipotle is high-protein but the carb/fat ratio varies wildly by order', params: [] }
    ]
  },
  'subway': {
    links: [
      { url: '/tdee-calculator', title: 'TDEE Calculator', icon: '🔥', reason: 'Know your daily calorie budget before you order', params: [] },
      { url: '/chipotle-nutrition-calculator', title: 'Chipotle Nutrition', icon: '🌯', reason: 'Compare your Subway order to a Chipotle bowl calorie for calorie', params: [] },
      { url: '/starbucks-nutrition-calculator', title: 'Starbucks Nutrition', icon: '☕', reason: 'Your afternoon Frappuccino might match your entire sandwich in calories', params: [] },
      { url: '/caloric-intake-macronutrient-calculator', title: 'Macro Calculator', icon: '🥗', reason: 'Turkey on wheat is lean — but are you hitting your protein target?', params: [] },
      { url: '/protein-intake-calculator', title: 'Protein Calculator', icon: '💪', reason: 'Rotisserie chicken subs pack 24g protein — see how that fits your daily goal', params: [] }
    ]
  },
  'retirement': {
    links: [
    ]
  },
  'protein-intake': {
    links: [
      { url: '/tdee-calculator', title: 'TDEE Calculator', icon: '🔥', reason: 'Protein needs depend on your calorie deficit — eating blind wastes effort', params: ['weight_kg','height_cm','age','gender'] },
      { url: '/caloric-intake-macronutrient-calculator', title: 'Macro Calculator', icon: '🥗', reason: 'Protein is only 1 of 3 macros — the other 2 determine your results too', params: ['weight_kg','height_cm','age','gender'] },
      { url: '/water-intake-calculator', title: 'Water Intake Calculator', icon: '💧', reason: 'High-protein diets need 30%+ more water — are you drinking enough?', params: ['weight_kg','age','gender'] },
      { url: '/bmi-calculator', title: 'BMI Calculator', icon: '📊', reason: 'Your BMI category changes your optimal protein range by 20-40g', params: ['weight_kg','height_cm'] },
      { url: '/ideal-body-weight-calculator', title: 'Ideal Body Weight', icon: '⚖️', reason: 'Protein targets should be based on ideal weight, not current weight', params: ['height_cm','gender'] }
    ]
  },
  'water-intake': {
    links: [
      { url: '/protein-intake-calculator', title: 'Protein Calculator', icon: '🥩', reason: 'High protein requires more water — but most people don\'t adjust their protein either', params: ['weight_kg','age','gender'] },
      { url: '/tdee-calculator', title: 'TDEE Calculator', icon: '🔥', reason: 'Even mild dehydration drops your metabolism 3% — pair water with your calorie plan', params: ['weight_kg','height_cm','age','gender'] },
      { url: '/caloric-intake-macronutrient-calculator', title: 'Macro Calculator', icon: '🥗', reason: 'Water retention changes with your carb intake — get your full macro picture', params: ['weight_kg','height_cm','age','gender'] },
      { url: '/bmi-calculator', title: 'BMI Calculator', icon: '📊', reason: 'Water weight can shift your BMI by a full point — find your true number', params: ['weight_kg','height_cm'] }
    ]
  },
  'calories-burned': {
    links: [
      { url: '/tdee-calculator', title: 'TDEE Calculator', icon: '🔥', reason: 'Exercise is only 15-30% of your total burn — do you know the rest?', params: ['weight_kg','height_cm','age','gender'] },
      { url: '/protein-intake-calculator', title: 'Protein Calculator', icon: '🥩', reason: 'Eating protein within 2 hours post-workout boosts recovery by 25%', params: ['weight_kg','age','gender'] },
      { url: '/bmi-calculator', title: 'BMI Calculator', icon: '📊', reason: 'Heavier people burn more calories per workout — check your BMI context', params: ['weight_kg','height_cm'] },
      { url: '/caloric-intake-macronutrient-calculator', title: 'Macro Calculator', icon: '🥗', reason: 'What you eat after a workout matters more than the workout itself', params: ['weight_kg','height_cm','age','gender'] }
    ]
  },
  'sleep': {
    links: [
      { url: '/tdee-calculator', title: 'TDEE Calculator', icon: '🔥', reason: 'Sleeping under 7 hours changes your calorie burn — see the real number', params: ['age'] },
      { url: '/calories-burned-calculator', title: 'Calories Burned', icon: '🏃', reason: 'Exercise improves sleep quality, but timing matters — check your burn', params: [] },
      { url: '/bmi-calculator', title: 'BMI Calculator', icon: '📊', reason: 'Poor sleepers are 55% more likely to be obese — where\'s your BMI?', params: [] },
    ]
  },
  'metabolic-age': {
    links: [
      { url: '/tdee-calculator', title: 'TDEE Calculator', icon: '🔥', reason: 'Your metabolic age sets the baseline — TDEE shows your total daily burn', params: ['weight_kg','height_cm','age','gender','activity'] },
      { url: '/bmi-calculator', title: 'BMI Calculator', icon: '📊', reason: 'BMI and metabolic age tell different stories — see how yours compare', params: ['weight_kg','height_cm'] },
      { url: '/body-fat-calculator', title: 'Body Fat Calculator', icon: '📐', reason: 'Body fat % drives metabolic age more than weight alone — measure yours', params: ['height_cm','gender','age'] },
      { url: '/protein-intake-calculator', title: 'Protein Calculator', icon: '🥩', reason: 'Building muscle lowers metabolic age — are you eating enough protein?', params: ['weight_kg','age','gender'] },
      { url: '/calories-burned-calculator', title: 'Calories Burned', icon: '🏃', reason: 'Exercise boosts metabolism for hours after — see your actual burn', params: ['weight_kg'] },
    ]
  },
  'zone2-heart-rate': {
    links: [
      { url: '/vo2-max-calculator', title: 'VO₂ Max Calculator', icon: '🫁', reason: 'Zone 2 training is the primary driver of VO₂ max — estimate your current level', params: ['age','gender'] },
      { url: '/running-calorie-calculator', title: 'Running Calorie Calculator', icon: '🏃', reason: 'See exactly how many calories your Zone 2 runs burn by distance and pace', params: ['weight_kg'] },
      { url: '/tdee-calculator', title: 'TDEE Calculator', icon: '🔥', reason: 'Pair your Zone 2 training with accurate calorie targets for best results', params: ['weight_kg','height_cm','age','gender'] },
    ]
  },
  'running-calories': {
    links: [
      { url: '/tdee-calculator', title: 'TDEE Calculator', icon: '🔥', reason: 'Running is only part of your total burn — know your full daily calorie target', params: ['weight_kg','height_cm','age','gender'] },
      { url: '/zone2-heart-rate-calculator', title: 'Zone 2 Heart Rate', icon: '❤️', reason: 'Running in Zone 2 maximizes fat oxidation — find your ideal training pace', params: ['age','gender'] },
      { url: '/protein-intake-calculator', title: 'Protein Calculator', icon: '🥩', reason: 'Running breaks down muscle — eat enough protein to rebuild stronger', params: ['weight_kg','age','gender'] },
      { url: '/calories-burned-calculator', title: 'Calories Burned', icon: '🔥', reason: 'Compare running to cycling, swimming, and 30+ other activities', params: ['weight_kg'] },
      { url: '/water-intake-calculator', title: 'Water Intake Calculator', icon: '💧', reason: 'Runners lose 1–2 liters of sweat per hour — are you hydrating enough?', params: ['weight_kg'] },
    ]
  },
  'running-pace': {
    links: [
      { url: '/running-calorie-calculator', title: 'Running Calorie Calculator', icon: '🏃', reason: 'See how many calories your run burns at your current pace', params: ['weight_kg'] },
      { url: '/zone2-heart-rate-calculator', title: 'Zone 2 Heart Rate Calculator', icon: '❤️', reason: 'Find the heart rate zone that matches your easy training pace', params: ['age','gender'] },
      { url: '/vo2-max-calculator', title: 'VO₂ Max Calculator', icon: '🫁', reason: 'Estimate your aerobic capacity — the engine behind your race pace', params: ['age','gender'] },
      { url: '/calories-burned-calculator', title: 'Calories Burned Calculator', icon: '🔥', reason: 'Compare calorie burn across different activities and intensities', params: ['weight_kg'] },
      { url: '/water-intake-calculator', title: 'Water Intake Calculator', icon: '💧', reason: 'Pace affects sweat rate — calculate your hydration needs for training', params: ['weight_kg'] },
    ]
  },
  'steps-to-calories': {
    links: [
      { url: '/calories-burned-calculator', title: 'Calories Burned Calculator', icon: '🔥', reason: 'Compare walking calorie burn to cycling, swimming, and 100+ other activities', params: ['weight_kg'] },
      { url: '/running-calorie-calculator', title: 'Running Calorie Calculator', icon: '🏃', reason: 'See how much more you burn by running the same distance', params: ['weight_kg'] },
      { url: '/tdee-calculator', title: 'TDEE Calculator', icon: '⚡', reason: 'See how your daily steps fit into your total calorie budget for weight loss', params: ['weight_kg'] },
      { url: '/water-intake-calculator', title: 'Water Intake Calculator', icon: '💧', reason: 'Walking increases sweat loss — make sure you are hydrating enough', params: ['weight_kg'] },
      { url: '/zone2-heart-rate-calculator', title: 'Zone 2 Heart Rate Calculator', icon: '❤️', reason: 'Brisk walking often falls in Zone 2 — the fat-burning sweet spot', params: ['age','gender'] },
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
  wrapper.innerHTML = '<p class="next-steps-title">What Should You Do Next?</p>';

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
      if (typeof hcTrackEvent === 'function') {
        hcTrackEvent('content_loop_click', {
          'source_calculator': calculatorId,
          'destination': link.url,
          'event_category': 'engagement'
        });
      } else if (typeof gtag === 'function') {
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
    if (typeof hcTrackEvent === 'function') {
      hcTrackEvent('share_results', {
        'method': 'copy_link',
        'calculator': window.location.pathname,
        'event_category': 'engagement'
      });
    } else if (typeof gtag === 'function') {
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
    if (typeof hcTrackEvent === 'function') {
      hcTrackEvent('return_visit_prompt', {
        'previous_calculator': entry.page,
        'event_category': 'engagement'
      });
    } else if (typeof gtag === 'function') {
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
