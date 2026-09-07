#!/usr/bin/env python3
"""Extract source pages into a reviewable local lesson database; never approve OCR."""
import argparse
import hashlib
import json
from pathlib import Path
import shutil
import subprocess
import uuid


def extract_pages(path, pdf_start=1, pdf_end=None):
    path = Path(path).resolve(strict=True)
    if not path.is_file():
        raise ValueError('教材來源必須是檔案。')
    if path.suffix.lower() == '.pdf':
        if not shutil.which('pdftotext'):
            raise ValueError('PDF 抽取需要 pdftotext（Poppler）；也可先轉為逐頁文字再匯入。')
        command = ['pdftotext', '-layout', '-enc', 'UTF-8', '-f', str(pdf_start)]
        if pdf_end is not None:
            command += ['-l', str(pdf_end)]
        result = subprocess.run(command + [str(path), '-'], capture_output=True, check=True)
        raw = result.stdout.decode('utf-8')
    elif path.suffix.lower() in ('.txt', '.md'):
        raw = path.read_text(encoding='utf-8-sig')
    else:
        raise ValueError('僅支援 PDF、TXT 或 Markdown 教材。')
    pages = raw.split('\f')
    if pages and not pages[-1].strip():
        pages.pop()
    if not pages or any(not p.strip() for p in pages):
        raise ValueError('有頁面沒有可抽取文字；請先 OCR 並對照原頁，不能把掃描空白當成讀取完成。')
    return [p.strip() for p in pages]


def vocabulary_rows(root, course):
    rows = []
    for level in range(1, int(course[-1]) + 1):
        for path in (root / '單字、語法資料庫').glob(f'* {level}-*.md'):
            for line in path.read_text(encoding='utf-8').splitlines():
                cells = [s.strip() for s in line.strip().strip('|').split('|')]
                if not line.startswith('|') or len(cells) < 4 or cells[0] in ('詞語', '漢字', '生詞', '單字') or set(cells[0]) <= set('-: '):
                    continue
                rows.append({'word': cells[0], 'pinyin': cells[1], 'meaning': cells[-1], 'source': path.name})
    return rows


def prepare(path, title, course, labels, pdf_start=1, pdf_end=None):
    path = Path(path).resolve(strict=True)
    pages = extract_pages(path, pdf_start, pdf_end)
    if len(labels) != len(pages) or len(set(labels)) != len(labels) or any(not n.strip() for n in labels):
        raise ValueError(f'抽取 {len(pages)} 頁，請提供相同數量且不重複的課本印刷頁碼。')
    return {'schemaVersion': 1, 'id': str(uuid.uuid4()), 'title': title, 'course': course,
            'sources': [{'id': str(uuid.uuid4()), 'name': path.name,
                         'sha256': hashlib.sha256(path.read_bytes()).hexdigest(),
                         'pages': [{'number': label, 'text': value, 'reviewedText': None,
                                    'pdfPage': pdf_start + index if path.suffix.lower() == '.pdf' else None}
                                   for index, (label, value) in enumerate(zip(labels, pages))]}],
            'vocabulary': vocabulary_rows(Path(__file__).resolve().parents[1], course), 'items': []}


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('source', type=Path)
    parser.add_argument('--title', required=True)
    parser.add_argument('--course', choices=['KN2', 'KN4'], required=True)
    parser.add_argument('--page-labels', required=True, help='原課本印刷頁碼，依抽取順序用逗號分隔；不由 PDF 頁序推測。')
    parser.add_argument('--pdf-start', type=int, default=1)
    parser.add_argument('--pdf-end', type=int)
    parser.add_argument('--output', type=Path, required=True)
    args = parser.parse_args()
    try:
        if args.pdf_start < 1 or (args.pdf_end is not None and args.pdf_end < args.pdf_start):
            raise ValueError('PDF 頁面範圍不正確。')
        package = prepare(args.source, args.title, args.course, [x.strip() for x in args.page_labels.split(',')], args.pdf_start, args.pdf_end)
        target = args.output.resolve()
        if target == args.source.resolve() or target.exists():
            raise ValueError('輸出檔已存在或與來源相同；請使用新的檔名以保留舊版。')
        target.parent.mkdir(parents=True, exist_ok=True)
        with target.open('x', encoding='utf-8') as handle:
            json.dump(package, handle, ensure_ascii=False, indent=2)
        print(f'已保存 {len(package["sources"][0]["pages"])} 頁原文；尚未核對、尚未生成課程。請在教材資料庫整理內容。')
    except (ValueError, OSError, subprocess.CalledProcessError) as exc:
        parser.exit(1, str(exc) + '\n')


if __name__ == '__main__':
    main()
