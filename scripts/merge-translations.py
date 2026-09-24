"""Merges new English strings into src/locale/messages.en.xlf.

Run `ng extract-i18n` first, so src/locale/messages.xlf lists every string.
Then write the English for the new ids in a JSON file and run, from the
project root:
    python scripts/merge-translations.py new-strings.json

Every English target already in messages.en.xlf is kept as it is, so hand
edits survive. In the JSON, {name} stands for the source's <x id="name" .../>
placeholder (an interpolation or a tag), which is copied verbatim.

Fails, writing nothing, when an extracted id has no English, or when a
translation drops or invents a placeholder: a lost placeholder silently
removes a price or a name from the English page.
"""

import json
import re
import sys

SOURCE = 'src/locale/messages.xlf'
TARGET = 'src/locale/messages.en.xlf'

src = open(SOURCE, encoding='utf-8').read()
old = open(TARGET, encoding='utf-8').read()
new = json.load(open(sys.argv[1], encoding='utf-8')) if len(sys.argv) > 1 else {}

existing = {
    match.group(1): match.group(2)
    for match in re.finditer(r'<trans-unit id="([^"]+)"[^>]*>.*?<target>(.*?)</target>', old, re.S)
}

missing = []


def with_placeholders(unit_id: str, template: str, source: str) -> str:
    placeholders = {name: element for element, name in re.findall(r'(<x id="([^"]+)"[^>]*/>)', source)}
    used = set(re.findall(r'\{(\w+)\}', template))
    if used != set(placeholders):
        sys.exit(f'{unit_id}: uses placeholders {sorted(used)}, the source has {sorted(placeholders)}')
    return re.sub(r'\{(\w+)\}', lambda match: placeholders[match.group(1)], template)


def add_target(match: re.Match) -> str:
    unit_id, source = match.group(2), match.group(3)

    if unit_id in existing:
        target = existing[unit_id]
    elif unit_id in new:
        target = with_placeholders(unit_id, new[unit_id], source)
    else:
        missing.append(unit_id)
        target = source

    return f'{match.group(1)}\n        <target>{target}</target>'


out = re.sub(r'(<trans-unit id="([^"]+)"[^>]*>\s*<source>(.*?)</source>)', add_target, src, flags=re.S)
out = out.replace('<file source-language="es-MX"', '<file source-language="es-MX" target-language="en"', 1)

if missing:
    sys.exit(f'No English for: {missing}')

open(TARGET, 'w', encoding='utf-8').write(out)
print(f'kept {len(existing)}, total {out.count("<target>")}')
