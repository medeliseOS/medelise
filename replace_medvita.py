import os
import re

directory = '/Users/mi/Desktop/MEDVITA HEALTH SOLUTIONS WORK/medelise/src'

replacements = {
    r'\bMedvita\b': 'Medelise',
    r'\bmedvita\b': 'medelise',
    r'\bMEDVITA\b': 'MEDELISE'
}

count = 0
for root, dirs, files in os.walk(directory):
    for file in files:
        if file.endswith(('.tsx', '.ts', '.css', '.md')):
            filepath = os.path.join(root, file)
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            new_content = content
            for pattern, replacement in replacements.items():
                new_content = re.sub(pattern, replacement, new_content)
                
            if new_content != content:
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                count += 1
                print(f"Updated {filepath}")

print(f"Total files updated: {count}")
