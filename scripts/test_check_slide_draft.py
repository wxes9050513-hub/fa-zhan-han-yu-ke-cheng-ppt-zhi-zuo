"""Run: python3 -m unittest discover -s scripts -p 'test_*.py'"""
import unittest
from check_slide_draft import check, check_output
from pathlib import Path
import tempfile

HEADER = '| 堂次 | 頁碼 | 檔名 | 頁型 | 畫面主標 | 投影片畫面文字 |\n|---|---|---|---|---|---|\n'

def row(n, backtick=True):
    name = f'slide-{n:02d}.html'
    if backtick:
        name = f'`{name}`'
    return f'| 第 1 堂 | {n} | {name} | Vocab | 词 | 例句 |\n'

class DraftCheck(unittest.TestCase):
    def test_existing_table_variants_and_non_slide_tables(self):
        for tick in (True, False):
            result = check(HEADER + row(1, tick) + row(2, tick) + '\n| 圖片 | slide-80.html |\n')
            self.assertEqual(result['slideCount'], 2)
            self.assertEqual(result['errors'], [])

    def test_duplicate_filename_cannot_pass(self):
        self.assertTrue(any('duplicate' in x for x in check(HEADER + row(1) + row(1))['errors']))

    def test_gap_and_stale_total_cannot_pass(self):
        result = check('| 投影片總數 | 54 |\n\n' + HEADER + row(1) + row(3) + '\n{{current}}/54\n| 頁碼齊全 1-56 | [x] |')
        self.assertTrue(any('ordered row' in x for x in result['errors']))
        self.assertEqual(sum('stated total' in x for x in result['errors']), 3)

    def test_filename_and_empty_content(self):
        self.assertTrue(check(HEADER + row(1).replace('slide-01', '../slide-01'))['errors'])
        self.assertTrue(check(HEADER + row(1).replace('例句', ''))['errors'])

    def test_literal_pipe_and_unsupported_input(self):
        self.assertEqual(check(HEADER + row(1).replace('例句', r'A\|B'))['errors'], [])
        self.assertTrue(check(HEADER + row(1).replace('例句', 'A|B'))['errors'])
        self.assertTrue(check('# No slide table')['errors'])

    def test_inserted_decimal_rows_are_counted_but_blocked(self):
        result = check(HEADER + row(1) + row(2).replace("| 2 |", "| 1.1 |"))
        self.assertEqual(result["slideCount"], 2)
        self.assertTrue(result["errors"])

    def test_missing_and_stale_output_files(self):
        with tempfile.TemporaryDirectory(dir=Path(__file__).resolve().parent) as directory:
            folder = Path(directory)
            (folder / 'slide-01.html').write_text('')
            (folder / 'slide-03.html').write_text('')
            (folder / 'index.html').write_text('')
            errors = check_output(check(HEADER + row(1) + row(2)), folder)
            self.assertEqual(errors, ['output missing: slide-02.html', 'output stale/unexpected: slide-03.html'])
            self.assertEqual(check_output(check(HEADER + row(1) + row(2) + row(3)), folder), ['output missing: slide-02.html'])

    def test_textbook_page_range_is_not_slide_count(self):
        self.assertEqual(check(HEADER + row(1) + '\n課本 P13-57')['errors'], [])

if __name__ == '__main__':
    unittest.main()
