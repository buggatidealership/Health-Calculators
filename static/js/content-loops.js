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
      { url: '/ozempic-face-calculator', title: 'Ozempic Face Risk', icon: '😮', reason: 'On a GLP-1 medication? Your BMI affects how much facial fat you could lose', params: ['weight_kg','height_cm','age'] },
      { url: '/protein-intake-calculator', title: 'Protein Calculator', icon: '🥩', reason: 'Most people eat 40% less protein than they need — are you one of them?', params: ['weight_kg','age','gender'] },
      { url: '/ideal-body-weight-calculator', title: 'Ideal Body Weight', icon: '⚖️', reason: 'Your "ideal" weight depends on 3 factors most people overlook', params: ['height_cm','gender'] },
      { url: '/army-body-fat-calculator', title: 'Army Body Fat', icon: '⭐', reason: 'The military uses a different standard than BMI — would you pass?', params: ['height_cm','gender','age'] },
      { url: '/body-fat-calculator', title: 'Body Fat Calculator', icon: '📐', reason: '30% of "healthy" BMIs hide unhealthy body fat levels', params: ['height_cm','gender','age'] },
      { url: '/bmi-vs-body-fat', title: 'BMI vs Body Fat %', icon: '📋', reason: 'BMI missed the mark? See which metric actually predicts your health risk', params: [] },
      { url: '/fasting-weight-loss-calculator', title: 'Fasting Weight Loss', icon: '⏱️', reason: '16:8 fasting burns fat without cutting calories — see your timeline', params: ['weight_kg','height_cm','age','gender'] },
      { url: '/menopause-calculator', title: 'Menopause Calculator', icon: '🌡️', reason: 'Low BMI can trigger menopause up to 1 year earlier — check your timeline', params: ['age'] }
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
      { url: '/sleep-calculator', title: 'Sleep Calculator', icon: '🌙', reason: 'Poor sleep raises hunger hormones by 28% — are you getting enough?', params: ['age'] }
    ]
  },
  'carb-cycling': {
    links: [
      { url: '/tdee-calculator', title: 'TDEE Calculator', icon: '🔥', reason: 'Your carb cycle only works if your TDEE baseline is accurate', params: ['weight_kg','height_cm','age','gender','activity'] },
      { url: '/fasting-weight-loss-calculator', title: 'Fasting Weight Loss', icon: '⏱️', reason: 'Stacking fasting with carb cycling doubled fat loss in one study', params: ['weight_kg','height_cm','age','gender'] },
      { url: '/caloric-macronutrient-calculator', title: 'Macro Calculator', icon: '🥗', reason: 'Your fat-to-protein ratio matters more than total calories', params: ['weight_kg','height_cm','age','gender'] }
    ]
  },
  'fasting': {
    links: [
      { url: '/tdee-calculator', title: 'TDEE Calculator', icon: '🔥', reason: 'Fasting without knowing your TDEE? You might be undereating', params: ['weight_kg','height_cm','age','gender'] },
      { url: '/ideal-body-weight-calculator', title: 'Ideal Body Weight', icon: '⚖️', reason: 'How far are you from your ideal weight? The answer sets your timeline', params: ['height_cm','gender'] },
      { url: '/carb-cycling-calculator', title: 'Carb Cycling Calculator', icon: '🔄', reason: 'High-carb days on workout days can boost fasting results by 20%', params: ['weight_kg','height_cm','age','gender'] },
      { url: '/creatine-water-calculator', title: 'Hydration Calculator', icon: '💧', reason: 'Dehydration during fasting drops metabolism — find your water target', params: ['weight_kg'] }
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
      { url: '/ozempic-face-calculator', title: 'Ozempic Face Risk', icon: '😮', reason: 'Your body fat % affects where you lose fat first — face or body?', params: ['weight_kg','height_cm','age'] },
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
  'ozempic': {
    links: [
      { url: '/wegovy-weight-loss-calculator', title: 'Wegovy Calculator', icon: '💊', reason: 'Wegovy is the same drug at a higher dose (2.4 mg) — see your projection with full weight-loss approval', params: ['weight_kg','height_cm','age','gender'] },
      { url: '/glp1-comparison-calculator', title: 'GLP-1 Comparison', icon: '📊', reason: 'See how your projected loss compares across all 3 GLP-1 medications', params: ['weight_kg','height_cm','age','gender'] },
      { url: '/ozempic-face-calculator', title: 'Ozempic Face Risk', icon: '😮', reason: 'Rapid weight loss ages the face — find out if you\'re at risk before it happens', params: ['weight_kg','height_cm','age'] },
      { url: '/mounjaro-weight-loss-calculator', title: 'Mounjaro Calculator', icon: '💊', reason: 'Mounjaro users lost 22.5% of body weight in trials — see your projection', params: ['weight_kg','height_cm','age','gender'] },
      { url: '/cagrisema-weight-loss-calculator', title: 'CagriSema Calculator', icon: '💊', reason: 'CagriSema combines semaglutide + cagrilintide for 20.4% weight loss — the newest option', params: ['weight_kg','height_cm'] },
      { url: '/ozempic-pen-click-calculator', title: 'Pen Click Calculator', icon: '💉', reason: 'Wrong pen clicks waste medication worth $50+ per dose', params: [] },
      { url: '/tdee-calculator', title: 'TDEE Calculator', icon: '🔥', reason: 'Ozempic cuts appetite but not your calorie floor — know the number', params: ['weight_kg','height_cm','age','gender'] },
      { url: '/fasting-weight-loss-calculator', title: 'Fasting Weight Loss', icon: '⏱️', reason: 'Some doctors pair Ozempic with fasting — see how the math changes', params: ['weight_kg','height_cm','age','gender'] },
      { url: '/antidepressant-weight-gain-calculator', title: 'Antidepressant Weight', icon: '💊', reason: 'Some antidepressants add 7+ lbs — could that be offsetting your results?', params: ['weight_kg','height_cm','age','gender'] },
      { url: '/ozempic-vs-mounjaro', title: 'Ozempic vs Mounjaro', icon: '📋', reason: 'Mounjaro produced 22.5% weight loss vs Ozempic\'s 14.9% — see the full comparison', params: [] }
    ]
  },
  'wegovy': {
    links: [
      { url: '/oral-wegovy-weight-loss-calculator', title: 'Oral Wegovy Calculator', icon: '\ud83d\udc8a', reason: 'The FDA-approved Wegovy pill (25mg daily) avoids needles — see your oral projection', params: ['weight_kg','height_cm'] },
      { url: '/ozempic-weight-loss-calculator', title: 'Ozempic Calculator', icon: '\ud83d\udcc9', reason: 'Same drug, lower dose — see how Ozempic\'s projection compares at 1.0 mg', params: ['weight_kg','height_cm','age','gender'] },
      { url: '/glp1-comparison-calculator', title: 'GLP-1 Comparison', icon: '\ud83d\udcca', reason: 'See how your projected loss compares across all GLP-1 medications', params: ['weight_kg','height_cm','age','gender'] },
      { url: '/ozempic-face-calculator', title: 'Ozempic Face Risk', icon: '\ud83d\ude2e', reason: 'Wegovy causes the most weight loss of any semaglutide dose — your face risk may be higher', params: ['weight_kg','height_cm','age'] },
      { url: '/mounjaro-weight-loss-calculator', title: 'Mounjaro Calculator', icon: '\ud83d\udc8a', reason: 'Mounjaro users lost 22.5% body weight vs Wegovy\'s 14.9% — see your projection', params: ['weight_kg','height_cm','age','gender'] },
      { url: '/zepbound-weight-loss-calculator', title: 'Zepbound Calculator', icon: '\ud83d\udc8a', reason: 'Zepbound hits two receptors vs Wegovy\'s one — does that change your outcome?', params: ['weight_kg','height_cm','age','gender'] },
      { url: '/tdee-calculator', title: 'TDEE Calculator', icon: '\ud83d\udd25', reason: 'Wegovy cuts appetite but not your calorie floor — know the number', params: ['weight_kg','height_cm','age','gender'] },
      { url: '/bmi-calculator', title: 'BMI Calculator', icon: '\ud83d\udcca', reason: 'Track your BMI category shift as you lose weight on Wegovy', params: ['weight_kg','height_cm'] }
    ]
  },
  'oral-wegovy': {
    links: [
      { url: '/wegovy-weight-loss-calculator', title: 'Injectable Wegovy Calculator', icon: '\ud83d\udc89', reason: 'Injectable Wegovy achieved ~15% loss vs oral\'s ~14% — see the difference for your weight', params: ['weight_kg','height_cm'] },
      { url: '/ozempic-weight-loss-calculator', title: 'Ozempic Calculator', icon: '\ud83d\udcc9', reason: 'Same drug, lower dose — see how Ozempic\'s projection compares at 1.0 mg', params: ['weight_kg','height_cm','age','gender'] },
      { url: '/glp1-comparison-calculator', title: 'GLP-1 Comparison', icon: '\ud83d\udcca', reason: 'See how your projected loss compares across all GLP-1 medications', params: ['weight_kg','height_cm','age','gender'] },
      { url: '/mounjaro-weight-loss-calculator', title: 'Mounjaro Calculator', icon: '\ud83d\udc8a', reason: 'Mounjaro users lost 22.5% body weight — see your tirzepatide projection', params: ['weight_kg','height_cm','age','gender'] },
      { url: '/ozempic-face-calculator', title: 'Ozempic Face Risk', icon: '\ud83d\ude2e', reason: 'Rapid weight loss on GLP-1 drugs can age the face — check your risk', params: ['weight_kg','height_cm','age'] },
      { url: '/bmi-calculator', title: 'BMI Calculator', icon: '\ud83d\udcca', reason: 'Track your BMI category shift as you lose weight on oral Wegovy', params: ['weight_kg','height_cm'] },
      { url: '/tdee-calculator', title: 'TDEE Calculator', icon: '\ud83d\udd25', reason: 'Oral Wegovy cuts appetite but not your calorie floor — know the number', params: ['weight_kg','height_cm','age','gender'] }
    ]
  },
  'ozempic-face': {
    links: [
      { url: '/glp1-comparison-calculator', title: 'GLP-1 Comparison', icon: '📊', reason: 'See how your projected loss compares across all 3 GLP-1 medications', params: ['weight_kg','height_cm','age','gender'] },
      { url: '/ozempic-weight-loss-calculator', title: 'Ozempic Weight Loss', icon: '📉', reason: 'See how much weight you can expect to lose — then weigh the tradeoff', params: ['weight_kg','height_cm','age','gender'] },
      { url: '/wegovy-weight-loss-calculator', title: 'Wegovy Calculator', icon: '💊', reason: 'Wegovy is semaglutide at the full weight-loss dose — check your projection', params: ['weight_kg','height_cm','age','gender'] },
      { url: '/mounjaro-weight-loss-calculator', title: 'Mounjaro Calculator', icon: '💊', reason: 'Mounjaro causes faster weight loss than Ozempic — does that change your face risk?', params: ['weight_kg','height_cm','age','gender'] },
      { url: '/bmi-calculator', title: 'BMI Calculator', icon: '📊', reason: 'Your BMI determines how much facial fat you have to lose — check yours', params: ['weight_kg','height_cm'] },
      { url: '/body-fat-calculator', title: 'Body Fat Calculator', icon: '📐', reason: 'Body fat % predicts where you lose fat first — face or body', params: ['height_cm','gender','age'] }
    ]
  },
  'ozempic-pen': {
    links: [
      { url: '/glp1-comparison-calculator', title: 'GLP-1 Comparison', icon: '📊', reason: 'See how your projected loss compares across all 3 GLP-1 medications', params: ['weight_kg','height_cm','age','gender'] },
      { url: '/ozempic-weight-loss-calculator', title: 'Ozempic Weight Loss', icon: '📉', reason: 'The average Ozempic user loses 15% body weight — where do you land?', params: ['weight_kg','height_cm','age','gender'] },
      { url: '/tdee-calculator', title: 'TDEE Calculator', icon: '🔥', reason: 'Eating below your calorie floor on Ozempic causes muscle loss — find it', params: ['weight_kg','height_cm','age','gender'] }
    ]
  },
  'mounjaro': {
    links: [
      { url: '/zepbound-weight-loss-calculator', title: 'Zepbound Calculator', icon: '💊', reason: 'Same drug, different label — Zepbound is tirzepatide approved for weight loss, not diabetes', params: ['weight_kg','height_cm','age','gender'] },
      { url: '/glp1-comparison-calculator', title: 'GLP-1 Comparison', icon: '📊', reason: 'See how your projected loss compares across all 3 GLP-1 medications', params: ['weight_kg','height_cm','age','gender'] },
      { url: '/ozempic-face-calculator', title: 'Ozempic Face Risk', icon: '😮', reason: 'Mounjaro causes faster loss than Ozempic — your face risk may be higher', params: ['weight_kg','height_cm','age'] },
      { url: '/ozempic-weight-loss-calculator', title: 'Ozempic Calculator', icon: '📉', reason: 'Ozempic averages 15% loss vs Mounjaro\'s 22.5% — see your comparison', params: ['weight_kg','height_cm','age','gender'] },
      { url: '/wegovy-weight-loss-calculator', title: 'Wegovy Calculator', icon: '💊', reason: 'Wegovy is semaglutide at the weight-loss dose — compare your projection', params: ['weight_kg','height_cm','age','gender'] },
      { url: '/bmi-calculator', title: 'BMI Calculator', icon: '📊', reason: 'Most Mounjaro users drop 2+ BMI categories — where will you land?', params: ['weight_kg','height_cm'] },
      { url: '/tdee-calculator', title: 'TDEE Calculator', icon: '🔥', reason: 'Your calorie needs drop as you lose weight — stay ahead of the plateau', params: ['weight_kg','height_cm','age','gender'] },
      { url: '/caloric-intake-macronutrient-calculator', title: 'Macro Calculator', icon: '🥗', reason: 'GLP-1 drugs slash appetite — but the wrong macros cost you muscle', params: ['weight_kg','height_cm','age','gender'] },
      { url: '/ideal-body-weight-calculator', title: 'Ideal Body Weight', icon: '⚖️', reason: 'When should you stop losing? Your frame determines the answer', params: ['height_cm','gender'] },
      { url: '/ozempic-vs-mounjaro', title: 'Ozempic vs Mounjaro', icon: '📋', reason: 'Side effects, cost, weight loss data — the full comparison in one page', params: [] }
    ]
  },
  'zepbound': {
    links: [
      { url: '/glp1-comparison-calculator', title: 'GLP-1 Comparison', icon: '📊', reason: 'See how your projected loss compares across all 3 GLP-1 medications', params: ['weight_kg','height_cm','age','gender'] },
      { url: '/mounjaro-weight-loss-calculator', title: 'Mounjaro Calculator', icon: '💊', reason: 'Mounjaro is the same drug prescribed for diabetes — see how the projection differs', params: ['weight_kg','height_cm','age','gender'] },
      { url: '/ozempic-weight-loss-calculator', title: 'Ozempic Calculator', icon: '📉', reason: 'Ozempic targets GLP-1 only — Zepbound hits two receptors and loses 50% more weight', params: ['weight_kg','height_cm','age','gender'] },
      { url: '/wegovy-weight-loss-calculator', title: 'Wegovy Calculator', icon: '💊', reason: 'Wegovy is semaglutide approved for weight loss — compare your dual-agonist projection', params: ['weight_kg','height_cm','age','gender'] },
      { url: '/ozempic-face-calculator', title: 'Ozempic Face Risk', icon: '😮', reason: 'Zepbound causes the fastest weight loss of any GLP-1 — your face risk may be higher', params: ['weight_kg','height_cm','age'] },
      { url: '/bmi-calculator', title: 'BMI Calculator', icon: '📊', reason: 'Most tirzepatide users drop 2+ BMI categories — where will you land?', params: ['weight_kg','height_cm'] },
      { url: '/body-fat-calculator', title: 'Body Fat Calculator', icon: '📐', reason: 'GLP-1 drugs can reduce lean mass too — track your body fat, not just weight', params: ['height_cm','gender','age'] },
      { url: '/tdee-calculator', title: 'TDEE Calculator', icon: '🔥', reason: 'Your calorie needs drop as you lose weight — stay ahead of the plateau', params: ['weight_kg','height_cm','age','gender'] }
    ]
  },
  'cagrisema': {
    links: [
      { url: '/glp1-comparison-calculator', title: 'GLP-1 Comparison', icon: '📊', reason: 'See how CagriSema stacks up against Ozempic, Wegovy, and Mounjaro side by side', params: ['weight_kg','height_cm','age','gender'] },
      { url: '/ozempic-weight-loss-calculator', title: 'Ozempic Calculator', icon: '📉', reason: 'CagriSema contains semaglutide — see what semaglutide alone would do', params: ['weight_kg','height_cm','age','gender'] },
      { url: '/mounjaro-weight-loss-calculator', title: 'Mounjaro Calculator', icon: '💊', reason: 'Mounjaro hit 22.5% weight loss via GLP-1+GIP — compare to CagriSema\'s GLP-1+amylin', params: ['weight_kg','height_cm','age','gender'] },
      { url: '/wegovy-weight-loss-calculator', title: 'Wegovy Calculator', icon: '💊', reason: 'Wegovy is semaglutide 2.4 mg alone — CagriSema adds cagrilintide on top', params: ['weight_kg','height_cm','age','gender'] },
      { url: '/zepbound-weight-loss-calculator', title: 'Zepbound Calculator', icon: '💊', reason: 'Zepbound is tirzepatide for weight loss — the closest competitor to CagriSema', params: ['weight_kg','height_cm','age','gender'] },
      { url: '/ozempic-face-calculator', title: 'Ozempic Face Risk', icon: '😮', reason: '20%+ weight loss can cause significant facial volume loss — check your risk', params: ['weight_kg','height_cm','age'] },
      { url: '/tdee-calculator', title: 'TDEE Calculator', icon: '🔥', reason: 'Your calorie needs drop as you lose weight — stay ahead of the plateau', params: ['weight_kg','height_cm','age','gender'] },
      { url: '/ideal-body-weight-calculator', title: 'Ideal Body Weight', icon: '⚖️', reason: 'CagriSema could bring you close to your ideal weight — find out what that is', params: ['height_cm','gender'] }
    ]
  },
  'glp1-comparison': {
    links: [
      { url: '/ozempic-weight-loss-calculator', title: 'Ozempic Calculator', icon: '📉', reason: 'Get a detailed Ozempic projection with dose-specific data and weekly timeline', params: ['weight_kg','height_cm','age','gender'] },
      { url: '/wegovy-weight-loss-calculator', title: 'Wegovy Calculator', icon: '💊', reason: 'Wegovy is semaglutide at the full 2.4 mg weight-loss dose — injectable or oral pill', params: ['weight_kg','height_cm','age','gender'] },
      { url: '/mounjaro-weight-loss-calculator', title: 'Mounjaro Calculator', icon: '💊', reason: 'Get a detailed Mounjaro projection with dose escalation and lifestyle factors', params: ['weight_kg','height_cm','age','gender'] },
      { url: '/ozempic-face-calculator', title: 'Ozempic Face Risk', icon: '😮', reason: 'Fast weight loss on GLP-1 drugs can age the face — check your risk', params: ['weight_kg','height_cm','age'] },
      { url: '/tdee-calculator', title: 'TDEE Calculator', icon: '🔥', reason: 'Your calorie needs drop as you lose weight — stay ahead of the plateau', params: ['weight_kg','height_cm','age','gender'] },
      { url: '/ozempic-pen-click-calculator', title: 'Pen Click Calculator', icon: '💉', reason: 'Wrong pen clicks waste medication worth $50+ per dose', params: [] }
    ]
  },
  'antidepressant': {
    links: [
      { url: '/tdee-calculator', title: 'TDEE Calculator', icon: '🔥', reason: 'Medication weight gain is partly metabolic — your true calorie need may differ', params: ['weight_kg','height_cm','age','gender'] },
      { url: '/ozempic-weight-loss-calculator', title: 'Ozempic Weight Loss', icon: '📉', reason: 'Ozempic is now prescribed alongside antidepressants — see your projection', params: ['weight_kg','height_cm','age','gender'] },
      { url: '/ideal-body-weight-calculator', title: 'Ideal Body Weight', icon: '⚖️', reason: 'A realistic target weight accounts for medication — is yours accurate?', params: ['height_cm','gender'] }
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
      { url: '/botox-calculator', title: 'Botox Cost', icon: '💉', reason: 'Bundling procedures saves 15-20% on average — see your Botox estimate', params: [] }
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
      { url: '/botox-calculator', title: 'Botox Calculator', icon: '💉', reason: '68% of filler patients also get Botox — see what yours would cost', params: [] },
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
  'fertility': {
    links: [
      { url: '/menopause-calculator', title: 'Menopause Calculator', icon: '🌡️', reason: 'Fertility and menopause are linked — knowing your timeline helps you plan', params: ['age'] },
      { url: '/ivf-due-date-calculator', title: 'IVF Due Date', icon: '📅', reason: 'IVF due dates differ from natural conception dates — find yours', params: [] },
      { url: '/child-growth-calculator', title: 'Child Growth', icon: '📏', reason: 'Is your child in the 50th percentile? That might not mean what you think', params: [] },
      { url: '/newborn-weight-loss-calculator', title: 'Newborn Weight', icon: '👶', reason: 'Newborns lose up to 10% of birth weight — is yours on track?', params: [] },
      { url: '/dog-pregnancy-due-date-calculator', title: 'Dog Pregnancy', icon: '🐕', reason: 'Dog pregnancies last only 63 days — is your pup on schedule?', params: [] }
    ]
  },
  'ivf-due-date': {
    links: [
      { url: '/female-fertility-calculator', title: 'Fertility Calculator', icon: '🌸', reason: 'Fertility drops 50% between age 30 and 40 — where do you stand?', params: ['age'] },
      { url: '/newborn-weight-loss-calculator', title: 'Newborn Weight', icon: '👶', reason: 'All newborns lose weight after birth — know when to worry and when not to', params: [] },
      { url: '/child-growth-calculator', title: 'Child Growth', icon: '📏', reason: 'IVF babies follow different early growth curves — track yours', params: [] }
    ]
  },
  'newborn-weight': {
    links: [
      { url: '/child-growth-calculator', title: 'Child Growth', icon: '📏', reason: 'Birth weight predicts growth trajectory — see your child\'s percentile', params: [] },
      { url: '/female-fertility-calculator', title: 'Fertility Calculator', icon: '🌸', reason: 'Spacing pregnancies 18+ months apart improves outcomes — check your window', params: [] }
    ]
  },
  'child-growth': {
    links: [
      { url: '/adult-height-predictor-calculator', title: 'Height Predictor', icon: '📐', reason: 'A child\'s current percentile doesn\'t predict adult height — this formula does', params: [] },
      { url: '/newborn-weight-loss-calculator', title: 'Newborn Weight', icon: '👶', reason: 'Up to 10% weight loss is normal for newborns — was yours in range?', params: [] }
    ]
  },
  'adult-height': {
    links: [
      { url: '/child-growth-calculator', title: 'Child Growth', icon: '📏', reason: 'Growth spurts happen at specific ages — is your child on the curve?', params: [] },
      { url: '/ideal-body-weight-calculator', title: 'Ideal Body Weight', icon: '⚖️', reason: 'Every inch of height shifts ideal weight by 5-10 lbs — see the target', params: ['height_cm','gender'] }
    ]
  },
  'bac': {
    links: [
      { url: '/alcohol-impact-calculator', title: 'Alcohol Impact', icon: '🍷', reason: '2 drinks/day raises disease risk by 20% — see your personal impact', params: ['weight_kg','gender','age'] },
      { url: '/lifespan-calculator', title: 'Lifespan Calculator', icon: '🧬', reason: 'Each drink pattern maps to a different lifespan estimate — find yours', params: ['age','gender'] },
      { url: '/tdee-calculator', title: 'TDEE Calculator', icon: '🔥', reason: 'A beer has 150+ invisible calories — see what that does to your budget', params: ['weight_kg','height_cm','age','gender'] }
    ]
  },
  'alcohol-impact': {
    links: [
      { url: '/bac-calculator', title: 'BAC Calculator', icon: '🍺', reason: 'Your weight and gender change BAC more than the number of drinks', params: ['weight_kg','gender'] },
      { url: '/lifespan-calculator', title: 'Lifespan Calculator', icon: '🧬', reason: 'Moderate drinking adds years in some studies, costs them in others — see yours', params: ['age','gender'] },
      { url: '/lipid-panel-goals-calculator', title: 'Lipid Panel', icon: '❤️', reason: 'Alcohol raises HDL but also triglycerides — is the tradeoff worth it?', params: ['age','gender'] },
      { url: '/retirement-savings-calculator', title: 'Retirement Savings', icon: '💰', reason: 'Living longer means needing more savings — does your plan match?', params: ['age'] }
    ]
  },
  'lifespan': {
    links: [
      { url: '/lipid-panel-goals-calculator', title: 'Lipid Panel Goals', icon: '❤️', reason: 'Heart disease is the #1 killer — your lipid numbers reveal your risk', params: ['age','gender'] },
      { url: '/vitamin-d-intake-calculator', title: 'Vitamin D Intake', icon: '☀️', reason: '42% of Americans are vitamin D deficient — it cuts lifespan silently', params: ['age','gender','weight_kg'] },
      { url: '/alcohol-impact-calculator', title: 'Alcohol Impact', icon: '🍷', reason: 'Even "moderate" drinking affects lifespan differently than you\'d expect', params: ['age','gender'] },
      { url: '/baldness-risk-calculator', title: 'Baldness Risk', icon: '👨‍🦲', reason: 'Early baldness correlates with heart risk — it\'s not just cosmetic', params: ['age','gender'] },
      { url: '/retirement-savings-calculator', title: 'Retirement Savings', icon: '💰', reason: 'Your projected lifespan determines how much savings you actually need', params: ['age'] },
      { url: '/menopause-calculator', title: 'Menopause Calculator', icon: '🌡️', reason: 'Earlier menopause is linked to shorter lifespan — predict your menopause age', params: ['age'] }
    ]
  },
  'lipid-panel': {
    links: [
      { url: '/lifespan-calculator', title: 'Lifespan Calculator', icon: '🧬', reason: 'Optimal LDL adds up to 10 years of life expectancy — check your estimate', params: ['age','gender'] },
      { url: '/tdee-calculator', title: 'TDEE Calculator', icon: '🔥', reason: 'Losing just 5% body weight can drop LDL by 10% — find your calorie target', params: ['weight_kg','height_cm','age','gender'] },
      { url: '/vitamin-d-intake-calculator', title: 'Vitamin D Intake', icon: '☀️', reason: 'Low vitamin D is linked to worse lipid profiles — are you getting enough?', params: ['age','gender','weight_kg'] },
      { url: '/baldness-risk-calculator', title: 'Baldness Risk', icon: '👨‍🦲', reason: 'DHT and cholesterol share metabolic pathways — your risk may be connected', params: ['age','gender'] }
    ]
  },
  'vitamin-d-intake': {
    links: [
      { url: '/vitamin-d-conversion-calculator', title: 'Vitamin D Units', icon: '🔄', reason: 'Your lab uses nmol/L but your supplement says IU — they\'re not the same', params: [] },
      { url: '/lifespan-calculator', title: 'Lifespan Calculator', icon: '🧬', reason: 'Optimal vitamin D levels correlate with 7+ years longer lifespan', params: ['age','gender'] },
      { url: '/lipid-panel-goals-calculator', title: 'Lipid Panel Goals', icon: '❤️', reason: 'Vitamin D deficiency worsens cholesterol — check your heart markers', params: ['age','gender'] }
    ]
  },
  'a1c': {
    links: [
      { url: '/tdee-calculator', title: 'TDEE Calculator', icon: '🔥', reason: 'Losing 5-7% body weight can drop A1C by 0.5% — find your calorie target', params: ['weight_kg','height_cm','age','gender'] },
      { url: '/lifespan-calculator', title: 'Lifespan Calculator', icon: '🧬', reason: 'Each 1% rise in A1C increases mortality risk by 20-30% — see your estimate', params: ['age','gender'] },
      { url: '/bmi-calculator', title: 'BMI Calculator', icon: '📊', reason: 'BMI above 25 doubles type 2 diabetes risk — check where you stand', params: ['weight_kg','height_cm','age','gender'] }
    ]
  },
  'vitamin-d-conversion': {
    links: [
      { url: '/vitamin-d-intake-calculator', title: 'Vitamin D Intake', icon: '☀️', reason: 'Most people take the wrong dose — your weight and age change the number', params: ['age','gender','weight_kg'] },
      { url: '/lifespan-calculator', title: 'Lifespan Calculator', icon: '🧬', reason: 'Vitamin D levels above 40 ng/mL link to significantly longer lifespan', params: ['age','gender'] }
    ]
  },
  'baldness': {
    links: [
      { url: '/lifespan-calculator', title: 'Lifespan Calculator', icon: '🧬', reason: 'Early hair loss shares genetic markers with longevity — see your estimate', params: ['age','gender'] },
      { url: '/lipid-panel-goals-calculator', title: 'Lipid Panel Goals', icon: '❤️', reason: 'Men with vertex baldness have 36% higher heart disease risk — check yours', params: ['age','gender'] }
    ]
  },
  'dog-pregnancy': {
    links: [
      { url: '/child-growth-calculator', title: 'Child Growth', icon: '📏', reason: 'Growing kids at home too? See if they\'re hitting their percentiles', params: [] },
      { url: '/newborn-weight-loss-calculator', title: 'Newborn Weight', icon: '👶', reason: 'Human newborns lose 5-10% of birth weight — know what\'s normal', params: [] }
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
  'starbucks': {
    links: [
      { url: '/tdee-calculator', title: 'TDEE Calculator', icon: '🔥', reason: 'A Frappuccino can be 25% of your daily calories — do you know your limit?', params: [] },
      { url: '/chipotle-nutrition-calculator', title: 'Chipotle Nutrition', icon: '🌯', reason: 'Your Chipotle order could be 500 or 1,200 cal — the difference is 3 choices', params: [] },
      { url: '/caloric-macronutrient-calculator', title: 'Macro Calculator', icon: '🥗', reason: 'That latte has almost no protein — see what your daily macros need', params: [] },
      { url: '/bac-calculator', title: 'BAC Calculator', icon: '🍺', reason: 'Coffee masks alcohol effects but doesn\'t lower BAC — know your real level', params: [] }
    ]
  },
  'chipotle': {
    links: [
      { url: '/tdee-calculator', title: 'TDEE Calculator', icon: '🔥', reason: 'A burrito can eat 50%+ of your daily calories — find your actual budget', params: [] },
      { url: '/starbucks-nutrition-calculator', title: 'Starbucks Nutrition', icon: '☕', reason: 'Your afternoon Starbucks might have more calories than your Chipotle bowl', params: [] },
      { url: '/caloric-macronutrient-calculator', title: 'Macro Calculator', icon: '🥗', reason: 'Chipotle is high-protein but the carb/fat ratio varies wildly by order', params: [] }
    ]
  },
  'retirement': {
    links: [
      { url: '/lifespan-calculator', title: 'Lifespan Calculator', icon: '🧬', reason: 'Most people underestimate their lifespan by 5+ years — can your savings cover it?', params: ['age','gender'] }
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
      { url: '/menopause-calculator', title: 'Menopause Calculator', icon: '🌡️', reason: 'Sleep disruption is one of the earliest signs of perimenopause — check your timeline', params: ['age'] }
    ]
  },
  'menopause': {
    links: [
      { url: '/female-fertility-calculator', title: 'Fertility Calculator', icon: '🌸', reason: 'Fertility declines years before menopause — see where you stand in the transition', params: ['age'] },
      { url: '/bmi-calculator', title: 'BMI Calculator', icon: '📊', reason: 'Your BMI affects menopause timing and symptom severity — check yours', params: [] },
      { url: '/sleep-calculator', title: 'Sleep Calculator', icon: '🌙', reason: 'Night sweats and insomnia disrupt sleep cycles — optimize your sleep timing', params: ['age'] },
      { url: '/lifespan-calculator', title: 'Lifespan Calculator', icon: '🧬', reason: 'Menopause age correlates with longevity — earlier menopause links to shorter lifespan', params: ['age','gender'] }
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
