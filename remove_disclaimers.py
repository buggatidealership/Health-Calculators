with open('templates/resources/chipotle_nutrition_guide.html', 'r') as file:
    content = file.read()

# Replace the footer section, keeping only the Last Updated part
new_content = content.replace("""    <footer style="margin-top: 60px; padding-top: 20px; border-top: 1px solid #eee;">
        <p style="color: #666; font-size: 14px;"><strong>Nutritional Disclaimer:</strong> This guide is for informational and educational purposes only. It is not intended as nutritional advice or to replace consultation with a qualified dietitian or healthcare professional.</p>
        
        <p style="color: #666; font-size: 14px;"><strong>Brand Disclaimer:</strong> This guide is not affiliated with or endorsed by Chipotle Mexican Grill. For official Chipotle nutritional information, refer to Chipotle's official website.</p>
        
        <p style="color: #666; font-size: 14px;"><strong>Last Updated:</strong> April 6, 2025</p>
    </footer>""", """    <footer style="margin-top: 60px; padding-top: 20px; border-top: 1px solid #eee;">
        <p style="color: #666; font-size: 14px;"><strong>Last Updated:</strong> April 6, 2025</p>
    </footer>""")

with open('templates/resources/chipotle_nutrition_guide.html', 'w') as file:
    file.write(new_content)

print("Disclaimers removed from Chipotle Nutrition Guide.")
