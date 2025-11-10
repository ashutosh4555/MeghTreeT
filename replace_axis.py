import os
import re

def replace_in_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as file:
        content = file.read()
    new_content = re.sub(r'MeghTree Technologies', 'MeghTree Techonologies', content, flags=re.IGNORECASE)
    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as file:
            file.write(new_content)
        print(f"Replaced in {filepath}")

def main():
    for root, dirs, files in os.walk('.'):
        for file in files:
            if file.endswith(('.html', '.txt', '.js')):
                filepath = os.path.join(root, file)
                replace_in_file(filepath)

if __name__ == "__main__":
    main()
