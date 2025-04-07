with open('templates/bac_calculator.html', 'r') as file:
    content = file.read()

replace_this = """    <section id="how-to-use">
        <div class="info">
            <h2>How This BAC Calculator Works</h2>"""

replace_with = """    <div class="highlight" style="margin-top: 40px; background-color: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid #d63384;">
        <h3 style="color: #333; margin-top: 0;">📘 Related Guide</h3>
        <p>
            Want to understand how BAC changes by drink, weight, gender, and time?
            <a href="/resources/bac-calculator-guide" class="pink-link">
                Read the full BAC Calculator Guide →
            </a>
        </p>
    </div>

    <section id="how-to-use">
        <div class="info">
            <h2>How This BAC Calculator Works</h2>"""

new_content = content.replace(replace_this, replace_with)

with open('templates/bac_calculator.html', 'w') as file:
    file.write(new_content)
