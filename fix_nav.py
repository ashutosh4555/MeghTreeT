import re

for file in ['index.html', 'faq.html']:
    with open(file, 'r') as f:
        content = f.read()

    new_nav = '''          <ul>
            <li><a href="index.html" class="active">Home</a></li>
            <li><a href="index.html#framework">Framework</a></li>
            <li><a href="index.html#ai">AI FinOps</a></li>
            <li><a href="faq.html">FAQ</a></li>
            <li><a href="index.html#scorecard" class="btn-nav-cta">Get Assessment</a></li>
          </ul>'''

    content = re.sub(
        r'<ul>\s*<li><a href="#hero".*?</ul>',
        new_nav,
        content,
        flags=re.DOTALL
    )

    # In faq.html, the main menu active state is different, but for now we just link back
    if file == 'faq.html':
        content = content.replace('class="active">Home', '>Home')
        content = content.replace('faq.html">FAQ', 'faq.html" class="active">FAQ')

    with open(file, 'w') as f:
        f.write(content)
