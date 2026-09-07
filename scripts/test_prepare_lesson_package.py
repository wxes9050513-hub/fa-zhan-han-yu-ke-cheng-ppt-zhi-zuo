import tempfile
import unittest
from pathlib import Path
from prepare_lesson_package import prepare


class LessonSourceTests(unittest.TestCase):
    def test_page_mapping_and_unreviewed_source(self):
        with tempfile.TemporaryDirectory() as directory:
            path = Path(directory) / '教材.txt'
            path.write_text('第一页内容\f第二页内容', encoding='utf-8')
            package = prepare(path, '教材測試', 'KN2', ['13', '14'])
            pages = package['sources'][0]['pages']
            self.assertEqual([p['number'] for p in pages], ['13', '14'])
            self.assertTrue(all(p['reviewedText'] is None for p in pages))
            self.assertEqual(package['items'], [])
            self.assertEqual(len(package['sources'][0]['sha256']), 64)
            with self.assertRaises(ValueError):
                prepare(path, '錯誤映射', 'KN2', ['13'])

    def test_empty_extraction_cannot_become_read_material(self):
        with tempfile.TemporaryDirectory() as directory:
            path = Path(directory) / '空白.txt'
            path.write_text('   ', encoding='utf-8')
            with self.assertRaisesRegex(ValueError, 'OCR'):
                prepare(path, '空白教材', 'KN2', ['1'])


if __name__ == '__main__':
    unittest.main()
