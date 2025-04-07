with open('templates/resources/starbucks_nutrition_guide.html', 'r') as file:
    content = file.read()

content = content.replace('og_title="Starbucks Nutrition Calculator Guide | Calories & Macros"', 
                           'og_title="Starbucks Drink Nutrition Guide | Calories, Sugar, and Custom Macros"')
                           
content = content.replace('page_title="Starbucks Nutrition Calculator Guide | Calories & Macros"', 
                           'page_title="Starbucks Drink Nutrition Guide | Calories, Sugar, and Custom Macros"')

with open('templates/resources/starbucks_nutrition_guide.html', 'w') as file:
    file.write(content)
