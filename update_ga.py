with open('templates/head_seo.html', 'r') as file:
    content = file.read()

# Replace the Google Analytics script
updated_content = content.replace(
    """<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-7FHX7T4MP9"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-7FHX7T4MP9');
</script>""", 
    """<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-RF6DT2FG4W"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-RF6DT2FG4W');
</script>""")

with open('templates/head_seo.html', 'w') as file:
    file.write(updated_content)

print("Google Analytics ID updated successfully")
