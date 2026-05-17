import re

with open('index.html', 'r') as f:
    content = f.read()

# For faq.html:
# 1. Keep everything from <html> to <main class="main">
# 2. Extract the <section id="faq" ...> ... </section>
# 3. Keep everything from </main> to the end
match_head = re.search(r'(?s)(.*?<main class="main">)', content)
match_faq = re.search(r'(?s)(<!-- Answer Engine / FAQ Section -->.*?</section>)', content)
match_foot = re.search(r'(?s)(</main>.*)', content)

if match_head and match_faq and match_foot:
    faq_content = match_head.group(1) + '\n' + match_faq.group(1) + '\n' + match_foot.group(1)
    # Update title and meta description in faq.html
    faq_content = re.sub(
        r'<title>.*?</title>',
        '<title>FinOps & Cloud Cost FAQ | Meghtree Technologies</title>',
        faq_content,
        flags=re.DOTALL
    )
    # Remove Service schema from faq.html (optional but good practice)
    faq_content = re.sub(
        r'<script type="application/ld\+json">\s*{\s*"@context": "https://schema.org",\s*"@type": "Service".*?</script>',
        '',
        faq_content,
        flags=re.DOTALL
    )
    with open('faq.html', 'w') as f:
        f.write(faq_content)

# For index.html:
# 1. Remove FAQPage schema
new_idx = re.sub(
    r'<script type="application/ld\+json">\s*{\s*"@context": "https://schema.org",\s*"@type": "FAQPage".*?</script>',
    '',
    content,
    flags=re.DOTALL
)
# 2. Remove the FAQ section HTML
new_idx = re.sub(
    r'(?s)<!-- Answer Engine / FAQ Section -->.*?</section>',
    '',
    new_idx
)

with open('index.html', 'w') as f:
    f.write(new_idx)

print("Done")
