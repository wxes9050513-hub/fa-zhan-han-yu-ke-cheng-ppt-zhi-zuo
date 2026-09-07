#!/usr/bin/env python3
"""Read-only structural checks for the repository's existing slide Markdown tables.

Exit 0: structure passed; 1: draft errors; 2: invalid input. No rendering or
semantic claims. JSON is evidence, not a renderer manifest or approval.
"""
import argparse
import hashlib
import json
from pathlib import Path
import re
import sys

REQUIRED = {'頁碼', '檔名', '頁型', '畫面主標', '投影片畫面文字'}


def cells(line):
    # Markdown table pipes must be escaped, including those inside code spans.
    return [s.strip().strip('`') for s in re.split(r'(?<!\\)\|', line.strip())[1:-1]]


def check(text):
    errors, warnings, slides = [], [], []
    header = None
    for line_no, line in enumerate(text.splitlines(), 1):
        if not line.lstrip().startswith('|'):
            header = None
            continue
        row = cells(line)
        if REQUIRED.issubset(row):
            header = row
            continue
        if not header or all(re.fullmatch(r':?-+:?', c) for c in row):
            continue
        if len(row) != len(header):
            errors.append(f'line {line_no}: {len(row)} cells; expected {len(header)} (escape literal pipes)')
            continue
        data = dict(zip(header, row))
        index = int(data['頁碼']) if data['頁碼'].isdigit() else None
        if index is None:
            errors.append(f'line {line_no}: page number must be an integer; found {data["頁碼"]!r}')
        filename = data['檔名']
        expected = f'slide-{index:02d}.html' if index is not None else None
        if expected is not None and filename != expected:
            errors.append(f'line {line_no}: filename {filename!r}; expected {expected}')
        for key in ('頁型', '畫面主標', '投影片畫面文字'):
            if not data[key]:
                errors.append(f'line {line_no}: empty {key}')
        slides.append({'deckIndex': index, 'fileName': filename,
                       'title': data['畫面主標'], 'sourceLine': line_no})
    if not slides:
        errors.append('no supported production table found; expected columns: ' + ', '.join(sorted(REQUIRED)))
    count = len(slides)
    seen = set()
    filenames = set()
    for expected, slide in enumerate(slides, 1):
        index = slide['deckIndex']
        if index is not None and index in seen:
            errors.append(f"line {slide['sourceLine']}: duplicate page {index} / output filename collision")
        if slide['fileName'] in filenames:
            errors.append(f"line {slide['sourceLine']}: duplicate filename {slide['fileName']}")
        filenames.add(slide['fileName'])
        seen.add(index)
        if index != expected:
            errors.append(f"line {slide['sourceLine']}: ordered row {expected} uses page {index}")
    # Deliberately narrow patterns: textbook page ranges are not deck totals.
    claims = [r'投影片總數\s*\|\s*(\d+)', r'\{\{current\}\}/(\d+)',
              r'頁碼齊全\s*1\s*[-~～至]\s*(\d+)',
              r'檔名正確[^\n]*?到\s*`?slide-(\d+)\.html',
              r'已重建\s*(\d+)\s*張']
    for pattern in claims:
        for match in re.finditer(pattern, text):
            if int(match[1]) != count:
                n = text.count('\n', 0, match.start()) + 1
                errors.append(f'line {n}: stated total {match[1]}; actual production rows {count}')
    if re.search(r'\[x\]|已完成|已重建', text):
        warnings.append('Existing completion/QA claims were not verified against rendered output.')
    if '待教師確認' in text or '待確認' in text:
        warnings.append('Draft contains pending confirmation; structural success does not approve content.')
    return {'scope': 'draft structure only', 'sha256': hashlib.sha256(text.encode()).hexdigest(),
            'slideCount': count, 'errors': errors, 'warnings': warnings, 'slides': slides}


def check_output(result, directory):
    """Validate numbered output inventory only; never execute generated content."""
    directory = directory.resolve(strict=True)
    if not directory.is_dir():
        raise ValueError('--slides-dir must be a directory')
    expected = {slide['fileName'] for slide in result['slides']}
    actual = {p.name for p in directory.glob('slide-*.html') if p.is_file()}
    return ([f'output missing: {name}' for name in sorted(expected - actual)] +
            [f'output stale/unexpected: {name}' for name in sorted(actual - expected)])


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('draft', type=Path)
    parser.add_argument('--slides-dir', type=Path, help='also check actual slide-*.html file inventory')
    parser.add_argument('--json', action='store_true', help='print evidence JSON to stdout')
    args = parser.parse_args()
    try:
        path = args.draft.expanduser().resolve(strict=True)
        if not path.is_file() or path.suffix.lower() != '.md':
            raise ValueError('provide a Markdown draft file')
        result = check(path.read_text(encoding='utf-8'))
        if args.slides_dir is not None:
            result['errors'].extend(check_output(result, args.slides_dir))
            result['scope'] = 'draft structure and numbered output file inventory only'
    except (OSError, UnicodeError, ValueError) as exc:
        print(f'INPUT ERROR: {exc}', file=sys.stderr)
        return 2
    result['draft'] = str(path)
    if args.json:
        print(json.dumps(result, ensure_ascii=False, indent=2))
    else:
        print(f"{'FAIL' if result['errors'] else 'PASS'} draft structure: {result['slideCount']} rows — {path.name}")
        for message in result['errors']:
            print('ERROR:', message)
        for message in result['warnings']:
            print('NOTE:', message)
        print('Not checked: textbook accuracy, approval, layout, assets, interaction, PDF.')
    return 1 if result['errors'] else 0


if __name__ == '__main__':
    sys.exit(main())
