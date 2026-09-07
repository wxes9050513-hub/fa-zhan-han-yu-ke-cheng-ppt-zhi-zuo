# KỸ NĂNG NÓI 2 - L2 HTML_PPT 製作稿

## 基本資料

| 欄位 | 內容 |
|---|---|
| 來源稿 | `KỸ NĂNG NÓI 2-L2課堂PPT教師審核稿.md` |
| 狀態 | 教師審核通過後製作版 |
| 課程 | Kỹ năng Nói 2 |
| 課次 | L2 |
| 課名 | 晚上早点儿睡 |
| 課本頁碼 | p.13-p.24 |
| HTML 輸出路徑 | `ai-teaching-material-system-main/output/kn2/lesson-02/` |
| 檔名規則 | `slide-XX.html` |
| 投影片總數 | 57 |
| 版型參考 | Original Course；KN4 成品只參考 HTML 外殼、頁型版式、互動與工具列；不套用 KN4 課程架構。 |

## 全局 HTML 製作規則

- 投影片固定 960 x 540。
- 每頁上方固定頁型 Banner；建議字標：生詞 `词`、語法 `法`、練習 `练`、功能句 `句`、任務 `任`。
- 每頁左下角來源文字用 `Sách giáo khoa P{{page}}` 或 `Sách giáo khoa P{{start}}~P{{end}}`。
- 每頁右下角頁碼用 `KN2 L2 · {{current}}/57`。
- 說明、題型、任務規則使用越南語；中文生詞、例句、句型、課本題目使用簡體中文。
- 預習回收與生詞頁用翻牌；練習答案點擊後以紅字帶入空格。
- 生詞閃卡背面只放兩行越南語資訊：越南語詞性在上、越南語翻譯在下；不顯示 `Loại từ`、`Nghĩa` 等欄位標籤。詞性使用青綠色 `#5AACAC`，翻譯使用深藍色 `#1A3A5A`，兩行水平、垂直置中，上下間距約 `6px`。
- 超綱詞需做 inline 標記：漢字上方拼音，漢字下方 `（越南語）`。
- 圖片內文字、字母、數字、標籤或字幕依教師指定與圖片需求表為準，未指定時不主動加入可讀文字。
- 最後一頁 QR Code 尚無實際連結時只保留空框，不顯示 `Link` 待補文字，不放假連結。

## 每頁製作表

| 堂次 | 頁碼 | 檔名 | 頁型 | 畫面主標 | 投影片畫面文字 | 互動／動畫／素材 | 教師備註 |
|---|---:|---|---|---|---|---|---|
| 第 1 堂 | 1 | `slide-01.html` | 封面 | 晚上早点儿睡 | `晚上早点儿睡`<br>`KN2 - Bài 2` | 右側放作息情境封面圖；左文右圖；標題儘量單行呈現；來源 `Sách giáo khoa P13~P24` | 2 分鐘；不放總時長。 |
| 第 1 堂 | 2 | `slide-02.html` | 暖身活動 | 看图说故事。 | Banner `Khởi động`<br>題目：`看图说故事。`<br>越南語指令：`Nhìn 4 bức tranh từ trái sang phải và kể một câu chuyện ngắn.`<br>`Từ gợi ý`：`看电影`、`睡觉`、`起床`、`集合`、`迟到` | 四張圖由左到右排列：晚上看電影、睡得太晚、早上起不來、集合遲到；提示詞若未學做超綱標記；來源 `Sách giáo khoa P13~P24` | 5 分鐘；學生用 2-3 句短句說故事即可。 |
| 第 1 堂 | 3 | `slide-03.html` | 預習回收 | 杰森想问汉娜什么问题？ | Banner `Ôn phần chuẩn bị`<br>`课文：P13~P14《入乡随俗》`<br>正面：`杰森想问汉娜什么问题？`<br>背面：`杰森想问汉娜为什么早上七点集合。` | 問題卡翻牌；來源 `Sách giáo khoa P13~P14` | 背面只放完整句，不放「答案」標籤。 |
| 第 1 堂 | 4 | `slide-04.html` | 預習回收 | 杰森为什么觉得八点上课太早？ | `课文：P13~P14《入乡随俗》`<br>正面：`杰森为什么觉得八点上课太早？`<br>背面：`因为他早上特别不想起床。` | 問題卡翻牌；來源 `Sách giáo khoa P13~P14` | 2 分鐘。 |
| 第 1 堂 | 5 | `slide-05.html` | 預習回收 | 汉娜给杰森什么建议？ | `课文：P13~P14《入乡随俗》`<br>正面：`汉娜给杰森什么建议？`<br>背面：`汉娜建议杰森晚上早点儿睡。` | 問題卡翻牌；來源 `Sách giáo khoa P13~P14` | 不放 `Từ gợi ý`、`Mẫu câu`。 |
| 第 1 堂 | 6 | `slide-06.html` | 預習回收 | “入乡随俗”是什么意思？ | `课文：P13~P14《入乡随俗》`<br>正面：`“入乡随俗”是什么意思？`<br>背面：`意思是，到什么地方，就要遵守那儿的风俗习惯。` | 問題卡翻牌；來源 `Sách giáo khoa P13~P14` | 答案可分兩行，但不可壓到底部。 |
| 第 1 堂 | 7 | `slide-07.html` | 生詞講解 | 问题 | 左卡正面：`wèn tí 问题`；背面：`danh từ`、`vấn đề, câu hỏi`<br>`Mẫu câu`：`我想问一个问题，可以吗？`、`这辆摩托车有问题，别骑。` | 左卡翻牌；`问题` 黃底紅字；`辆`、`摩托车`、`骑` 超綱標記；可放問題／壞車 icon | 第二句依教師指定保留。 |
| 第 1 堂 | 8 | `slide-08.html` | 生詞講解 | 运动会 | 左卡正面：`yùn dòng huì 运动会`；背面：`danh từ`、`hội thao`<br>`Mẫu câu`：`你们学校什么时候开运动会？` | 左卡翻牌；`运动会` 黃底紅字；`开运动会` 可同色弱標 | 2 分鐘。 |
| 第 1 堂 | 9 | `slide-09.html` | 生詞講解 | 通知 | 左卡正面：`tōng zhī 通知`；背面：`động từ / danh từ`、`thông báo`<br>`Mẫu câu`：`老师通知大家明天早上八点上课。`、`这是学校的通知。` | 左卡翻牌；`通知` 黃底紅字；`大家` 視情況超綱標記 | 動詞／名詞各一例。 |
| 第 1 堂 | 10 | `slide-10.html` | 生詞講解 | 集合 | 左卡正面：`jí hé 集合`；背面：`động từ`、`tập hợp`<br>`Mẫu câu`：`大家问导游明天早上几点集合。` | 左卡翻牌；`集合` 黃底紅字；`导游` 可視學生狀況超綱標記 | 例句避免使用未教的 `通知`。 |
| 第 1 堂 | 11 | `slide-11.html` | 生詞講解 | 建议 | 左卡正面：`jiàn yì 建议`；背面：`động từ / danh từ`、`đề nghị, lời khuyên`<br>`Hội thoại`：`A：我每天都觉得好累，你有什么好建议吗？`<br>`B：我建议你每天晚上早一点儿睡。` | 左卡翻牌；兩個 `建议` 黃底紅字 | AB 需換行清楚。 |
| 第 1 堂 | 12 | `slide-12.html` | 生詞講解 | 入乡随俗 | 左卡正面：`rù xiāng suí sú 入乡随俗`；背面：`thành ngữ`、`nhập gia tùy tục`<br>`Mẫu câu`：`到别的国家旅游时，要入乡随俗，尊重当地的文化。` | 左卡翻牌；`入乡随俗` 黃底紅字；`别的`、`国家`、`旅游`、`尊重`、`当地`、`文化` 超綱標記 | 例句長，右側字級需控。 |
| 第 1 堂 | 13 | `slide-13.html` | 生詞講解 | 意思／成语 | 左卡正面：`yì si 意思`、`chéng yǔ 成语`；背面：`danh từ`、`ý nghĩa / thành ngữ`<br>`Hội thoại`：`A：“入乡随俗”是什么意思？`<br>`B：“入乡随俗”是汉语的一个成语，意思是到了新的地方，要尊重当地的文化。` | 左卡翻牌；`意思`、`成语` 黃底紅字；`尊重`、`当地`、`文化` 超綱標記 | 合併頁；若 HTML 太擠可調小對話字級。 |
| 第 1 堂 | 14 | `slide-14.html` | 生詞講解 | 遵守／风俗 | 左卡正面：`zūn shǒu 遵守`、`fēng sú 风俗`；背面：`động từ / danh từ`、`tuân thủ / phong tục`<br>`Mẫu câu`：`到什么地方，就要遵守那儿的风俗习惯。` | 左卡翻牌；`遵守`、`风俗` 黃底紅字 | 同組講解，服務 `入乡随俗`。 |
| 第 1 堂 | 15 | `slide-15.html` | 生詞講解 | 有用 | 左卡正面：`yǒu yòng 有用`；背面：`tính từ`、`có ích`<br>`Mẫu câu`：`这个生词很有用，我得记住。` | 左卡翻牌；`有用` 黃底紅字；`记住` 可弱標 | 後續 MỞ RỘNG 再練 `没用`。 |
| 第 1 堂 | 16 | `slide-16.html` | 語法講解 | （一）点儿 | Banner `Ngữ pháp / Mẫu câu`<br>`Cấu trúc 1`：`Adj. + （一）点儿`，例：`明天你早一点儿来。`<br>`Cấu trúc 2`：`（一）点儿 + N`，例：`我想喝一点儿水。`<br>`Cấu trúc 3`：`有一点儿 + Adj.`，例：`我今天有一点儿累。`<br>`Cách dùng`：`Dùng để nói mức độ hoặc số lượng ít hơn / nhẹ hơn.` | 三組結構卡；`一点儿`、`有一点儿` 黃底紅字；來源 `Sách giáo khoa P17` | 每組一個例句。 |
| 第 1 堂 | 17 | `slide-17.html` | 語法練習 | （一）点儿 | 文字說明：`Hoàn thành câu theo cấu trúc/ngữ pháp vừa học.`<br>1. `这个字太小了，请写________。` 答：`大一点儿`<br>2. `我________渴，我想________水。` 答：`有一点`、`喝一点`；`渴` 超綱標記<br>3. `工作了九个小时，我________。（累）` 答：`有一点`<br>4. `这件衣服太贵了，可以________吗？` 答：`便宜一点` | 答案點擊紅字帶入空格；來源 `Sách giáo khoa P17` | 一種題型，4 題；頁內不放 `Cách làm`。 |
| 第 1 堂 | 18 | `slide-18.html` | 語法講解 | 记住 | `Cấu trúc`：`记住 + N / câu`<br>`Cách dùng`：`Dùng khi muốn nói “ghi nhớ, học thuộc, lưu vào trí nhớ”.`<br>`VD1`：`这个生词很重要，你记住了吗？`<br>`VD2`：`他总是记不住我的名字。` | `记住`、`记不住` 黃底紅字；來源 `Sách giáo khoa P17` | 3 分鐘。 |
| 第 1 堂 | 19 | `slide-19.html` | 語法補充 | 记住 vs 记得 | Banner `Phân biệt`<br>左卡 `记住`：`Nhấn mạnh việc ghi vào trí nhớ.`<br>`一个生词要复习八次才能记住。`<br>右卡 `记得`：`Nhấn mạnh còn nhớ hoặc nhớ phải làm.`<br>`1. 我记得他住在胡志明市，不是河内。`<br>`2. 离开教室时，记得关灯。` | 左右對比卡；目標詞用不同標色；`复习`、`八次`、`胡志明市`、`河内`、`离开`、`关灯` 超綱標記；來源 `Sách giáo khoa P17` | `记得` 作辨析補充，不新增生詞頁。 |
| 第 1 堂 | 20 | `slide-20.html` | 語法練習 | 记住 / 记得 | 文字說明只顯示：`Đặt câu theo tình huống và cấu trúc/ngữ pháp vừa học.`，不加 `Cách làm` 或語法名稱標籤<br>1. `Ngữ pháp khó quá, bạn muốn nói bạn không nhớ nổi.` 答：`这个语法太难了，我记不住。`（答案底線換行）<br>2. `Bạn muốn nhắc bạn ngày mai đi học nhớ mang sách giáo khoa tiếng Trung.` 答：`明天上课，记得带中文课本。`<br>3. `Bạn nói bạn đã học thuộc câu này.` 答：`我已经记住这个句子了。` | 越南語情境字級較小；答案點擊顯示；`课本` 超綱標記 | 第一題改練 `记不住`；第二題練 `记得`；第三題練 `记住`。 |
| 第 2 堂 | 21 | `slide-21.html` | 預習回收 | 杰森为什么来晚了？ | `课文：P15《看电影》`<br>正面：`杰森为什么来晚了？`<br>背面：`因为他昨天晚上看电影，快两点才睡。` | 問題卡翻牌；來源 `Sách giáo khoa P15` | 2 分鐘。 |
| 第 2 堂 | 22 | `slide-22.html` | 預習回收 | 杰森看了什么电影？ | `课文：P15《看电影》`<br>正面：`杰森看了什么电影？`<br>背面：`他看了一部中国电影。` | 問題卡翻牌；來源 `Sách giáo khoa P15` | 2 分鐘。 |
| 第 2 堂 | 23 | `slide-23.html` | 預習回收 | 杰森怎么看中国电影？ | `课文：P15《看电影》`<br>正面：`杰森怎么看中国电影？`<br>背面：`他一边听，一边看字幕。` | 問題卡翻牌；來源 `Sách giáo khoa P15` | 2 分鐘。 |
| 第 2 堂 | 24 | `slide-24.html` | 預習回收 | 汉娜下次想做什么？ | `课文：P15《看电影》`<br>正面：`汉娜下次想做什么？`<br>背面：`汉娜下次也想和杰森一起看好电影。` | 問題卡翻牌；來源 `Sách giáo khoa P15` | 2 分鐘。 |
| 第 2 堂 | 25 | `slide-25.html` | 生詞講解 | 告诉 | 左卡正面：`gào su 告诉`；背面：`động từ`、`nói cho ai biết`<br>`Mẫu câu`：`老师告诉我们明天七点集合。`、`让我告诉你一个好消息。` | 左卡翻牌；`告诉` 黃底紅字；`好消息` 視情況超綱標記 | 作生詞，不另做語法頁。 |
| 第 2 堂 | 26 | `slide-26.html` | 生詞講解 | 吸引 | 左卡正面：`xī yǐn 吸引`；背面：`động từ`、`thu hút`<br>`Mẫu câu`：`什么样的电影会吸引你去看？` | 左卡翻牌；`吸引` 黃底紅字；`什么样的` 超綱標記 | 與 `吸引人` 拆頁。 |
| 第 2 堂 | 27 | `slide-27.html` | 生詞講解 | 吸引人 | 左卡正面：`xī yǐn rén 吸引人`；背面：`tính từ`、`hấp dẫn`<br>`Mẫu câu`：`你觉得抖音上什么样的短视频特别吸引人？` | 左卡翻牌；`吸引人` 黃底紅字；`抖音` 超綱越南語只放 `TikTok`；`什么样的`、`短视频` 超綱標記 | 例句依教師指定。 |
| 第 2 堂 | 28 | `slide-28.html` | 生詞講解 | 懂 | 左卡正面：`dǒng 懂`；背面：`động từ`、`hiểu`<br>`Hội thoại 1`：`A：这个语法你听懂了吗？ B：我没听懂，你再说一遍。`<br>`Hội thoại 2`：`A：你听得懂那个外国人说什么吗？ B：听不懂，我不会英文。` | 左卡翻牌；標示 `懂`、`没听懂`、`听不懂`；`外国人` 做超綱標注；刪除 `Bổ sung` 補充卡 | 兩個例句皆依教師指定。 |
| 第 2 堂 | 29 | `slide-29.html` | 生詞講解 | 字幕 | 左卡正面：`zì mù 字幕`；背面：`danh từ`、`phụ đề`<br>`Mẫu câu`：`这部中国电影有越南语字幕吗？` | 左卡翻牌；`字幕` 黃底紅字；`部`、`越南语` 視情況超綱標記；可放簡潔電影字幕示意圖 | 2 分鐘。 |
| 第 2 堂 | 30 | `slide-30.html` | 生詞講解 | 叫 | 左卡正面：`jiào 叫`；背面：`động từ`、`gọi, rủ`、`Cách dùng: rủ / gọi ai cùng làm gì`<br>`Mẫu câu`：`下次有好电影，别忘了叫我一起看。` | 左卡翻牌；`Cách dùng` 放入生詞卡背面；右側只保留例句；`叫` 黃底紅字 | 說明此處不是「名字叫」。 |
| 第 2 堂 | 31 | `slide-31.html` | 生詞講解 | 熬夜 | 左卡正面：`áo yè 熬夜`；背面：`động từ`、`thức khuya`<br>`Mẫu câu`：`你昨天晚上熬夜了吗？` | 左卡翻牌；`熬夜` 黃底紅字 | 放在 `叫` 後。 |
| 第 2 堂 | 32 | `slide-32.html` | 生詞講解 | 偶尔 | 左卡正面：`ǒu ěr 偶尔`；背面：`phó từ`、`thỉnh thoảng`<br>`Mẫu câu`：`哪些事情，你会偶尔做？` | 左卡翻牌；只有 `偶尔` 黃底紅字 | 後接 `Từ nghi vấn + 都`。 |
| 第 2 堂 | 33 | `slide-33.html` | 語法講解 | Từ nghi vấn + 都 | `Cách dùng`：`Cấu trúc này dùng để chỉ "tất cả".`，置左<br>`Cấu trúc`：`什么都……`、`谁都……`、`哪儿都……`、`什么时候都……`、`怎么V都……` | 只有越南語翻譯點擊彈入；中文例組固定顯示 | 放在 `熬夜`、`偶尔` 生詞頁後。 |
| 第 2 堂 | 34 | `slide-34.html` | 語法練習 | Từ nghi vấn + 都 | 文字說明只顯示：`Dùng cấu trúc vừa học để trả lời câu hỏi dưới đây.`，不加 `Cách làm` 或 `Từ nghi vấn + 都` 標籤<br>每題做成翻牌閃卡，由上到下一行一題：正面 A 問句、背面 B 答案，B 行從新行開始。<br>1. 正：`A：我什么时候可以给你打电话？` 背：`B：你什么时候都可以给我打电话。`<br>2. 正：`A：谁可以参加唱歌比赛？` 背：`B：谁都可以参加唱歌比赛。`<br>3. 正：`A：你今天早饭想吃什么？` 背：`B：我吃什么都可以。`<br>4. 正：`A：周末，你想去哪儿玩？` 背：`B：我去哪儿玩都可以。`<br>5. 正：`A：中文的听、说、读、写，你觉得哪一个最难？` 背：`B：我觉得写汉字最难，我怎么学都学不会。` | 背面答案中的 `什么时候都`、`谁都`、`吃什么都`、`去哪儿玩都`、`怎么学都` 黃底紅字；單頁與主簡報頁皆可直接點擊該題卡翻面，再點同一卡翻回 | 回答問句練習，題數對應 5 組疑問詞。 |
| 第 2 堂 | 35 | `slide-35.html` | 語言補充 | 中文频率副词排序 | Banner `Bổ sung`<br>橫向頻率階梯，由高到低：`总是`、`常常`、`经常`、`有时候`、`偶尔`、`很少`、`从不`<br>下方頻率小標改為百分比：`100%`、`75%`、`50%`、`25%`、`0%` | 以長條或階梯呈現；除 `偶尔` 外，其他若超綱加標記 | 原頁順延。 |
| 第 2 堂 | 36 | `slide-36.html` | 語法講解 | 都 + 时间 / 数量 + 了 | `Cấu trúc`：`都 + 时间 / 数量 + 了`<br>`Cách dùng`：`Dùng để nhấn mạnh “đã”, thường nói khi thời gian đã muộn hoặc số lượng đã nhiều hơn dự kiến.`<br>`VD1`：`都12点了，该睡觉了。`<br>`VD2`：`他都30岁了，还没有工作。` | `都……了` 黃底紅字；例句採 PDF 課本 P17 原例句；來源 `Sách giáo khoa P17` | 原頁順延。 |
| 第 2 堂 | 37 | `slide-37.html` | 語法練習 | 都 + 时间 / 数量 + 了 | 文字說明：`Hoàn thành hội thoại.`<br>1. `A：明天不是要考试了吗？你怎么不去复习？`<br>`B：________，我想休息一下。` 答：`我都复习三个小时了`<br>2. `A：________，为什么还不起床？`<br>`B：我昨天熬夜了，让我多睡一下。` 答：`都十点了`<br>3. `A：你一个人出国旅游，不紧张吗？`<br>`B：________。` 答：`我都一个人出国旅游过三次了，不紧张` | A/B 換行；答案點擊紅字顯示；頁內不放 `Cách làm` 或額外語法說明 | 依相似原則重寫，避免直接套換 P36 例句。 |
| 第 2 堂 | 38 | `slide-38.html` | 語法講解 | 挺……的 | `Cấu trúc`：`挺 + Adj. + 的`<br>`Cách dùng`：`Dùng để nói “khá / khá là”, giọng nhẹ hơn “很”.`<br>`VD1`：`这个电影挺不错的。`<br>`VD2`：`这个成语挺有用的。` | `挺`、`的` 黃底紅字 | 後接圖片閃卡練習。 |
| 第 2 堂 | 39 | `slide-39.html` | 語法練習 | 挺……的 | 文字說明：`Nhìn tranh và dùng cấu trúc vừa học để nói câu.`<br>四張圖片閃卡，正面圖片、背面答案：<br>1. `八点上课挺早的。`<br>2. `这杯咖啡挺好喝的。`<br>3. `这个手机游戏挺好玩的。`<br>4. `这个房间挺干净的。` | 2x2 或橫向四卡；答案中的 `挺`、`的` 黃底紅字；可點擊翻面，再點回來 | 練習題避免與 P38 例句及課本課文高度相似。 |
| 第 3 堂 | 40 | `slide-40.html` | 語法講解 | 别 + V／别 + V + 了 | `Cấu trúc 1`：`别 + V`<br>`Cách dùng`：`Dùng để khuyên/ngăn một hành động chưa xảy ra hoặc không nên làm.`<br>`VD1`：`那块蛋糕不好吃，别买。`<br>`Cấu trúc 2`：`别 + V + 了`<br>`Cách dùng`：`Dùng để yêu cầu dừng một hành động đang làm hoặc đã đến lúc nên dừng.`<br>`VD2`：`都十二点了，别看电视了，去睡觉。` | 兩張結構卡；`别`、`别……了` 黃底紅字；`蛋糕` 視情況超綱標記；來源 `Sách giáo khoa P17` | 使用情境說明用越南語。 |
| 第 3 堂 | 41 | `slide-41.html` | 語法練習 | 情境造句：别 + V／别 + V + 了（一） | 題型：`Đọc tình huống, tự chọn cách nói phù hợp để khuyên/ngăn.`<br>1. 情境：`Bạn của bạn đang nói chuyện trong giờ học. Bạn muốn bạn ấy dừng lại.` 答：`老师在上课，别说话了。`<br>2. 情境：`Chiếc xe máy này có vấn đề. Bạn khuyên bạn của mình không nên đi xe đó.` 答：`别骑这辆摩托车。` | 答案點擊紅字帶入；答案底線固定長度且可略偏長；目標語法以黃底紅字標示 | G4 情境造句；學生需依情境判斷用 `别 + V` 或 `别 + V + 了`；因版面超出拆成兩頁。 |
| 第 3 堂 | 42 | `slide-42.html` | 語法練習 | 情境造句：别 + V／别 + V + 了（二） | 題型同 P41，題號延續上一頁為 3、4。<br>3. 情境：`Em trai bạn đã chơi game rất lâu. Bạn muốn em ấy dừng lại.` 答：`别玩游戏了，你玩很久了。`<br>4. 情境：`Trời mưa rất to. Bạn khuyên bạn của mình không nên ra ngoài.` 答：`外面在下大雨，别出去。` | 答案點擊紅字帶入；答案底線固定長度且可略偏長；目標語法以黃底紅字標示 | G4 情境造句；延續 P41。 |
| 第 3 堂 | 43 | `slide-43.html` | 功能句學習 | 不满意 | Banner `Câu chức năng`<br>左卡 `Chức năng`：`Không hài lòng`<br>右卡保留 `Ví dụ`，下方放功能句：`太早了。`、`太贵了。`、`你怎么才来？都七点一刻了。`、`昨天不是告诉你了吗？要早点儿睡觉。`<br>`Tình huống` 僅作備註：`Dùng khi muốn thể hiện không hài lòng hoặc nhắc nhở.`，閃卡正面不放 `Dùng khi...`。 | 功能句固定顯示；來源 `Sách giáo khoa P16` | 4 句。 |
| 第 3 堂 | 44 | `slide-44.html` | 功能句練習 | 不满意 | 文字說明：`Hoàn thành hội thoại theo mẫu câu vừa học.`<br>1. `A：周末，我们去爬山吧！ B：________，现在是夏天，还是去商场吧！` 答：`太热了`<br>2. `A：________，你________不去睡觉？！ B：我看完这部电影就去睡觉。` 答：`都十二点了`／`怎么`<br>3. `A：你________又忘了带课本，昨天________提醒你了________？ B：对不起。` 答：`怎么`／`不是`／`吗` | A/B 換行；答案點擊紅字顯示；答案重點標紅需對齊 P43；來源 `Sách giáo khoa P16` | 功能句練習需使用 P43 已學句型創造不同情境，不直接回填 P43 原句；頁內不放 `Cách làm`。 |
| 第 3 堂 | 45 | `slide-45.html` | 功能句學習 | 建议 | 左卡 `Chức năng`：`Đưa ra lời khuyên`<br>右卡保留 `Ví dụ`，下方放功能句：`我建议你晚上早点儿睡。`、`我看你呀，还是入乡随俗吧！`、`我看你还是先打个电话问问吧！`<br>`Tình huống` 僅作備註：`Dùng khi muốn khuyên người khác làm một việc phù hợp hơn.`，閃卡正面不放 `Dùng khi...`。 | 功能句固定顯示；來源 `Sách giáo khoa P16` | 3 句；`我建议你`、`我看你呀`、`我看你`、`还是`、`吧！` 標紅。 |
| 第 3 堂 | 46 | `slide-46.html` | 功能句練習 | 建议 | 文字說明：`Hoàn thành hội thoại theo mẫu câu vừa học.`<br>1. `A：我总是记不住新生词。`<br>`B：________。（复习）` 答：`我建议你每天复习一次。`<br>2. `A：我不太懂中国人的文化习俗。`<br>`B：________。（问）` 答：`我看你还是多问问中国朋友吧！`<br>3. `A：HSK4 的书太难了，我看不懂。`<br>`B：________。（学 HSK3）` 答：`我看你还是先学 HSK3 吧！` | 答案點擊紅字顯示；`复习` 超綱標記；來源 `Sách giáo khoa P16` | 3 題對齊 3 句；用新情境練 P45 句型，不直接回填原句；頁內不放 `Cách làm`。 |
| 第 3 堂 | 47 | `slide-47.html` | 功能句學習 | Giải thích | 左卡 `Chức năng`：`Giải thích`<br>右卡 `MẪU CÂU`：`“入乡随俗”是汉语的一个成语。`、`“入乡随俗”的意思是……` | 功能句固定顯示；來源 `Sách giáo khoa P16` | KN2 功能名稱用越南語；一頁一個 chức năng；`是`、`的意思是` 標紅。 |
| 第 3 堂 | 48 | `slide-48.html` | 功能句練習 | Giải thích | 文字說明：`Hoàn thành hội thoại.`<br>1. `A：“入乡随俗”是什么？ B：________。` 答：`“入乡随俗”是汉语的一个成语。`<br>2. `A：“入乡随俗”的意思是什么？ B：________。` 答：`“入乡随俗”的意思是，到什么地方，就要遵守那儿的风俗习惯。` | 答案點擊紅字顯示；來源 `Sách giáo khoa P16` | 只練 `Giải thích`，不混 `Đánh giá`。 |
| 第 3 堂 | 49 | `slide-49.html` | 功能句學習 | Đánh giá | 左卡 `Chức năng`：`Đánh giá`<br>右卡 `MẪU CÂU`：`我觉得早睡早起也不错。`、`那个电影挺不错的。`、`你这件衣服挺好看的。` | 功能句固定顯示；來源 `Sách giáo khoa P16` | KN2 功能名稱用越南語；一頁一個 chức năng；`也不错`、`挺`、`的` 標紅。 |
| 第 3 堂 | 50 | `slide-50.html` | 功能句練習 | Đánh giá（一） | 文字說明：`Hoàn thành hội thoại theo mẫu câu vừa học.`<br>1. `A：你觉得这间日本餐厅好吃吗？`<br>`B：好吃，就是有一点儿贵。`<br>`A：那间中国餐厅呢？`<br>`B：________。` 答：`那间中国餐厅也不错，东西也很便宜。` | 答案點擊紅字顯示；來源 `Sách giáo khoa P16` | 只練 `Đánh giá`，不混 `Giải thích`；因版面超出，依規則拆成兩頁。 |
| 第 3 堂 | 51 | `slide-51.html` | 功能句練習 | Đánh giá（二） | 文字說明：`Hoàn thành hội thoại theo mẫu câu vừa học.`<br>2. `A：这家酒店怎么样？`<br>`B：________。` 答：`这家酒店挺不错的，房间又大又干净。`<br>3. `A：小美的新手机怎么样？`<br>`B：________。` 答：`小美的新手机挺好看的。` | 答案點擊紅字顯示；來源 `Sách giáo khoa P16` | 題號延續 P50；用新情境練 P49 句型，不直接回填原句。 |
| 第 3 堂 | 52 | `slide-52.html` | 口語任務說明 | Đóng vai | 標題 `Đóng vai` 使用綠色，後方註明 `P21, 6-2 课堂展示`；越南語任務條列：`Làm việc theo cặp.`、`Chọn ít nhất 1 tình huống ở trang sau.`、`Tạo hội thoại ít nhất 6 câu.`、`Ghi âm trên Formative trong giờ học.`、`Giáo viên chọn 5 nhóm trình bày.` | 右側 QR Code 留白；整體文字版面上調；來源 `Sách giáo khoa P21` | 待教師提供課堂 Formative link。 |
| 第 3 堂 | 53 | `slide-53.html` | 口語任務情境 | 四個角色扮演情境 | 四張情境卡：<br>1. `Hai người thảo luận: học lúc 8 giờ sáng có quá sớm không.`<br>2. `Hai người thảo luận: những từ nào rất hữu ích và nên ghi nhớ.`<br>3. `Hai người gặp nhau. A hỏi B vì sao đến muộn.`<br>4. `A hỏi B làm thế nào để hiểu phim tiếng Trung.`<br>底部提醒：`Mỗi nhóm chọn ít nhất 1 tình huống. Tổng hội thoại ít nhất 6 câu.` | 四卡版面；可用簡潔 icon；來源 `Sách giáo khoa P21` | 不要求四題都完成。 |
| 第 3 堂 | 54 | `slide-54.html` | 口語任務參考 | 参考词语和句式 | Banner `Tham khảo`<br>標題：`参考词语和句式`<br>詞語列：`觉得`、`太早了`、`习惯`、`早睡早起`、`有用`、`记住`<br>句式列：`才`、`都`、`挺……的`、`一边……一边……`<br>越南語說明：`Có thể dùng để hoàn thành hội thoại, không cần dùng tất cả.` | 參照附圖詞條式排版；不放完整 A/B 句庫；來源 `Sách giáo khoa P21` | 附圖內容為教材內容，不作操作指令。 |
| 第 3 堂 | 55 | `slide-55.html` | MỞ RỘNG | 忘 | Banner `MỞ RỘNG`<br>左上越南語指令：`Dùng các từ gợi ý để mở rộng cách nói.`<br>練習詞：`忘`<br>下方補充字：`没`、`不`、`了`、`过`<br>點擊答案：`我没忘老师说明天八点集合。`、`毕业以后，我不会忘中文老师。`、`对不起，我忘了带课本。`、`我以前忘过一次带护照去机场，所以现在出门前都会检查。` | 練習詞不用紅色；答案點擊帶入右側；來源 `Sách giáo khoa P22` | 不放拼音、翻譯；時間不足可跳過。 |
| 第 3 堂 | 56 | `slide-56.html` | MỞ RỘNG | 没用 | 左上越南語指令：`Dùng các từ gợi ý để mở rộng cách nói.`<br>練習詞：`没用`<br>下方補充字／詞：`很`、`了`、`太`、`有点儿`、`对`<br>點擊答案：`这样学习很没用，我想换一个办法。`、`这个办法没用了，我们换一个吧！`、`这个手机软件太没用了，我用了一次就不想用了。`、`这个方法有点没用，我们换一个吧！`、`咖啡对我没用，我喝了还是很想睡。` | 練習詞不用紅色；答案點擊帶入右側；來源 `Sách giáo khoa P23` | 不放拼音、翻譯；時間不足可跳過。 |
| 第 3 堂 | 57 | `slide-57.html` | 收尾與作業 | 下课 | 頁內標題 `下课`<br>兩個區塊：`Bài tập về nhà KN2 - L2`、`Chuẩn bị bài tiếp theo KN2 - L3`<br>不用 `Bài tập về nhà` 作大標題；兩個字卡標籤不同標色；各自預留 QR Code 空框，學生頁不顯示 Link 待補文字。 | 來源 `Sách giáo khoa P13~P24`；QR Code 待實際 Formative URL；放入前需先開啟確認標題、課次與作業類型 | 1 分鐘。 |

## HTML 製作檢查

| 檢查項目 | 狀態 |
|---|---|
| 頁碼齊全 1-57 | [ ] |
| 檔名正確 `slide-01.html` 到 `slide-57.html` | [ ] |
| 說明文字為越南語 | [x] |
| 中文內容為簡體中文 | [x] |
| 需要或建議使用的圖片、icon、答案動畫、點擊提示已標明 | [x] |
| 教師備註未放進學生畫面 | [x] |
| 語法／句型講解已優先依課本「大声读一读」設計 | [x] |
| 每個語法／句型講解頁都有句型說明 | [x] |
| 語法／句型講解頁的情境說明、用法說明使用越南語 | [x] |
| 語法練習已使用三種固定題型之一：情境造句、完成句子、完成對話 | [x] |
| 同一語法練習頁以一種題型為主，未混用兩種以上題型 | [x] |
| 語法練習題目未直接重複或高度相似於前一頁例句 | [x] |
| 語法練習每組 3-5 題；若版面超出可拆頁 | [x] |
| 功能句練習題數儘量等同該功能項目的目標句數 | [x] |
| 多功能項目的功能句學習頁已分組呈現 | [x] |
| 詞語擴展任務若加入，已放主任務後作 `MỞ RỘNG`，一頁一詞，只練課本指定目標詞 | [x] |
| 與「大声读一读」重複的生詞未另做生詞頁 | [x] |
| 未設生詞小練習頁 | [x] |
| 超綱生詞交叉檢查已完成，結果已寫入教師審核稿 | [x] |
| 保留的超綱詞已標明需做上方拼音、下方 `（越南語）` 標記 | [x] |
| HTML presenter 可開啟 | [ ] HTML 製作後測試 |
| 下方工具列、螢光筆、刪除物件、圖形工具、Present 模式與單頁 PDF 匯出已測試 | [ ] HTML 製作後測試 |
| 左側縮圖側欄可點選切換頁面 | [ ] HTML 製作後測試 |
| 每頁上方頁型 Banner、頁型 icon、右下頁碼已套用 | [ ] HTML 製作後測試 |
| 每頁左下角來源文字使用 `Sách giáo khoa P{{page}}` 或 `Sách giáo khoa P{{start}}~P{{end}}` | [x] |
| 生詞、語法、練習、功能句、口語任務代表頁已對照 KN4 版型檢查 | [ ] HTML 製作後測試 |

## 圖片需求表

原始生成圖存放：

```text
KN2課堂PPT/L1_我哪儿都没去过/素材整理/generated/raw/
```

裁切後單張圖存放：

```text
KN2課堂PPT/L1_我哪儿都没去过/素材整理/generated/cropped/
```

HTML 使用圖存放：

```text
ai-teaching-material-system-main/output/kn2/lesson-02/slides/assets/generated/
```

| 頁碼 | 檔名 | 頁型 | 用途 | 視覺內容 | 生成方式 | 建議比例 | 放置位置 | QA 注意 |
|---:|---|---|---|---|---|---|---|---|
| P1 | `slide-01-cover.png` | 封面 | 封面情境圖 | 年輕學生晚上準備睡覺，桌上有書與關掉的手機，窗外夜色，氣氛安靜。 | 單張圖 | 橫式 16:9 或 3:2 | 封面右側圖框 | 未指定文字；手機 UI、書名或標籤不主動加入可讀文字。 |
| P2 | `slide-02-warmup-story-movie.png` | 暖身 | 四格故事圖 1 | 晚上，一位學生躺在房間床上看電影。 | Contact sheet A v2 | 橫式 | 四格第 1 格 | 未指定文字；螢幕不主動加入字幕或 UI。 |
| P2 | `slide-02-warmup-story-yawn-1am.png` | 暖身 | 四格故事圖 2 | 接續第一張圖，這位學生看電影看到凌晨 1:00，打了一個哈欠；旁邊鬧鐘或床頭櫃時鐘顯示 `1:00 A.M.`。 | Contact sheet A v2 | 橫式 | 四格第 2 格 | 教師指定可出現 `1:00 A.M.`，其餘位置不主動加入可讀文字。 |
| P2 | `slide-02-warmup-story-overslept-alarm.png` | 暖身 | 四格故事圖 3 | 早上學生睡過頭，拿起鬧鐘發現遲到了，表情緊張。 | Contact sheet A v2 | 橫式 | 四格第 3 格 | 未指定文字；鬧鐘可表現遲到但不主動加入其他可讀文字。 |
| P2 | `slide-02-warmup-story-late-gathering.png` | 暖身 | 四格故事圖 4 | 學生匆忙、一臉抱歉地跑向集合地點，旁邊同學已經在等，表情不耐煩。 | Contact sheet A v2 | 橫式 | 四格第 4 格 | 未指定文字；場景不主動加入校名或告示牌文字。 |
| P39 | `slide-39-picture-flashcard-clock-8am.png` | 圖片閃卡練習 | 替換目前 inline SVG 圖 1 | 教室或校園早晨情境，畫面中有明顯時鐘，時間是早上八點。 | Contact sheet B v2 | 橫式 | 圖片閃卡第 1 格 | 教師指定時鐘需清楚顯示 8:00 或 8 A.M.。 |
| P39 | `slide-39-picture-flashcard-cafe-phin.png` | 圖片閃卡練習 | 替換目前 inline SVG 圖 2 | 一杯越南冰滴式咖啡（cafe phin），旁邊不要有其他早餐或食物。 | Contact sheet B v2 | 橫式 | 圖片閃卡第 2 格 | 未指定文字；杯子與桌面不主動加入 logo 或可讀文字。 |
| P39 | `slide-39-picture-flashcard-phone-game.png` | 圖片閃卡練習 | 替換目前 inline SVG 圖 3 | 學生拿著手機玩遊戲，表情開心；手機畫面只有抽象圖形。 | 現有圖保留 | 橫式 | 圖片閃卡第 3 格 | 未指定文字；手機畫面不主動加入 UI 或 logo。 |
| P39 | `slide-39-picture-flashcard-clean-sparkling-room.png` | 圖片閃卡練習 | 替換目前 inline SVG 圖 4 | 一間乾淨整齊的房間，床鋪、桌子和地板都很整潔；畫面要有閃閃發亮的感覺。 | Contact sheet B v2 | 橫式 | 圖片閃卡第 4 格 | 未指定文字；牆面、書本、海報、物品不主動加入可讀文字。 |
| P8 | `slide-08-vocab-sports-meet.png` | Từ vựng | 生詞頁補圖 | 校園運動會情境：學生在操場跑步，旁邊同學加油。 | Contact sheet C | 橫式 | 右側例句下方 | 已檢查右側空間足夠；不得有校名、跑道數字、旗幟文字。 |
| P10 | `slide-10-vocab-guide-gather-7am.png` | Từ vựng | 生詞頁補圖 | 導遊拿著旗子，在酒店門口跟團員們說明天早上七點集合；導遊頭上對話泡泡框顯示 `7A.M.`。 | Contact sheet C v2 | 橫式 | 右側例句下方 | 已檢查右側空間足夠；教師指定對話泡泡可出現 `7A.M.`。 |
| P29 | `slide-29-vocab-vietnamese-subtitles.png` | Từ vựng | 生詞頁補圖 | 學生看電影，螢幕下方有越南語字幕條。 | Contact sheet D v2 | 橫式 | 右側例句下方 | 已檢查右側空間足夠；教師指定螢幕下方可出現越南語字幕條。 |
| P31 | `slide-31-vocab-stay-up-late.png` | Từ vựng | 生詞頁補圖 | 學生深夜還在書桌前讀書或用電腦，表情疲累，房間燈亮。 | Contact sheet C | 橫式 | 右側例句下方 | 已檢查右側空間足夠；不得有鐘面數字、螢幕文字、書本文字。 |

不生成：P7、P12 生詞頁右側空間不足，暫不補圖；P52 Formative QR Code、P57 的 L2 回家作業與 L3 課前預習 QR Code 目前只留白，待實際 Formative 連結後再製作。

## 圖片生成 Prompt

### Prompt 1：P1 封面單張圖

```text
Create one educational textbook-style illustration for a Chinese speaking class slide.

Subject:
A young adult student at night, getting ready to go to bed early. The room is calm and tidy. There are books on the desk, a blank phone turned face down, a soft bedside lamp, and a quiet night window. The mood should feel healthy, calm, and suitable for the lesson "go to bed early at night".

Style:
Soft educational textbook line-art, thin grey-blue outlines, muted pastel fills, white or very pale grey background, gentle flat shading, subtle low-contrast shadows, clean uncluttered composition, natural human proportions.

Composition:
Horizontal composition for the right side of a 16:9 classroom slide. Keep the student and bedroom context centered, with enough background for cropping. Avoid large empty areas.

Important:
Do not add readable text unless specifically requested. No readable book titles, no phone UI, no posters with text, and no labels anywhere.
```

### Prompt 2：Contact sheet A v2，P2 暖身四格故事

```text
Create one 2 by 2 contact sheet image for a Chinese speaking class slide deck.
This prompt contains exactly 4 images. Each cell is a separate textbook-style illustration.

Style:
Soft educational textbook line-art, thin grey-blue outlines, muted pastel fills, white or very pale grey background, gentle flat shading, subtle low-contrast shadows, clean uncluttered composition, natural human proportions.

Use exactly this row-major order, one subject per cell:

1. At night, a young adult student lies on a bed in their bedroom and watches a movie on a laptop or tablet.
2. Continuation of image 1: the same student is still watching the movie at 1:00 in the morning and yawns. Put a small bedside clock or alarm clock on the nightstand clearly showing exactly "1:00 A.M.".
3. In the morning, the student has overslept, grabs the alarm clock, realizes they are late, and looks nervous.
4. The student rushes apologetically toward a gathering place. Several classmates are already waiting there and look impatient.

Important:
Keep every cell visually separate with narrow white gutters.
Only cell 2 should include the exact clock text "1:00 A.M.". Do not add any other readable text, Chinese characters, labels, captions, signs, logos, UI text, subtitles, or watermarks.
```

### Contact sheet A 裁切對應

| 順序 | 裁切後檔名 | 對應頁碼 |
|---:|---|---:|
| 1 | `slide-02-warmup-story-movie.png` | P2 |
| 2 | `slide-02-warmup-story-yawn-1am.png` | P2 |
| 3 | `slide-02-warmup-story-overslept-alarm.png` | P2 |
| 4 | `slide-02-warmup-story-late-gathering.png` | P2 |

### Prompt 3：Contact sheet B v2，P39 圖片閃卡

```text
Create one 1 by 3 contact sheet image for a Chinese speaking class slide deck.
This prompt contains exactly 3 images. Each cell is a separate textbook-style illustration.

Style:
Soft educational textbook line-art, thin grey-blue outlines, muted pastel fills, white or very pale grey background, gentle flat shading, subtle low-contrast shadows, clean uncluttered composition, natural human proportions.

Use exactly this row-major order, one subject per cell:

1. A morning classroom scene with a student and teacher. Put a large, obvious wall clock in the image, and the clock must clearly show 8:00 in the morning.
2. One glass of Vietnamese iced drip coffee with a cafe phin filter. No breakfast, no food, and no other drinks beside it.
3. A clean and tidy bedroom or small hotel room, with a neatly made bed, organized desk, clean floor, and a subtle sparkling-clean feeling.

Important:
Keep every cell visually separate with narrow white gutters.
The clock in cell 1 may show 8:00. Do not add any other readable text, Chinese characters, labels, captions, signs, logos, UI text, subtitles, or watermarks.
```

### Contact sheet B 裁切對應

| 順序 | 裁切後檔名 | 對應頁碼 |
|---:|---|---:|
| 1 | `slide-39-picture-flashcard-clock-8am.png` | P39 |
| 2 | `slide-39-picture-flashcard-cafe-phin.png` | P39 |
| 3 | `slide-39-picture-flashcard-clean-sparkling-room.png` | P39 |

### Prompt 4：Contact sheet C v2，P10 集合

```text
Create one educational textbook-style illustration for a Chinese speaking class slide.

Style:
Soft educational textbook line-art, thin grey-blue outlines, muted pastel fills, white or very pale grey background, gentle flat shading, subtle low-contrast shadows, clean uncluttered composition, natural human proportions.

Subject:
A tour guide holds a small flag outside a hotel entrance and explains the meeting time to a group of tourists. Put one speech bubble above the tour guide with exactly "7A.M." inside it.

Composition:
Horizontal image for a vocabulary slide, with the guide and tourists clearly visible. Keep the hotel entrance simple and uncluttered.

Important:
Only the speech bubble should contain the exact text "7A.M.". Do not add any other readable text, Chinese characters, labels, captions, signs, logos, UI text, subtitles, or watermarks.
```

### Prompt 5：Contact sheet D v2，P29 字幕

```text
Create one educational textbook-style illustration for a Chinese speaking class slide.

Subject:
A young adult student is watching a movie on a laptop or TV. At the bottom of the movie screen, show a Vietnamese subtitle strip with short readable Vietnamese subtitle text. The subtitle strip should clearly communicate "Vietnamese subtitles".

Style:
Soft educational textbook line-art, thin grey-blue outlines, muted pastel fills, white or very pale grey background, gentle flat shading, subtle low-contrast shadows, clean uncluttered composition, natural human proportions.

Composition:
Horizontal image for a vocabulary slide. The student and screen should be clear, and the Vietnamese subtitle strip should be visible but not too large.

Important:
The only readable text should be the Vietnamese subtitle text on the subtitle strip. Do not add Chinese characters, labels, captions, signs, logos, UI text outside the subtitle strip, or watermarks.
```

### 生詞頁補圖裁切對應

| 順序 | 裁切後檔名 | 對應頁碼 |
|---:|---|---:|
| 1 | `slide-10-vocab-guide-gather-7am.png` | P10 |
| 2 | `slide-29-vocab-vietnamese-subtitles.png` | P29 |

## 圖片生成與裁切結果

| 項目 | 狀態 | 檔案 |
|---|---|---|
| ChatGPT 帳號／設定檔檢查 | 已確認 Chrome 網頁版 ChatGPT 顯示 `Shih Siang Yan`、`Pro` | |
| P1 封面圖 | 已生成並存入 raw／cropped | `slide-01-cover.png` |
| Contact sheet A v2，P2 暖身四格 | 已重新生成、下載並裁切 | raw：`contact-sheet-a-slide-02-warmup-story-v2-raw.png`；cropped：`slide-02-warmup-story-movie.png`、`slide-02-warmup-story-yawn-1am.png`、`slide-02-warmup-story-overslept-alarm.png`、`slide-02-warmup-story-late-gathering.png` |
| Contact sheet B v2，P39 圖片閃卡 | 已重新生成 1、2、4；第 3 張手機遊戲保留現有圖 | raw：`contact-sheet-b-slide-39-picture-flashcards-v2-raw.png`；cropped：`slide-39-picture-flashcard-clock-8am.png`、`slide-39-picture-flashcard-cafe-phin.png`、`slide-39-picture-flashcard-clean-sparkling-room.png`；保留：`slide-39-picture-flashcard-phone-game.png` |
| P10 集合補圖 | 已重新生成、下載並裁切 | raw：`slide-10-vocab-guide-gather-7am-raw.png`；cropped：`slide-10-vocab-guide-gather-7am.png` |
| P29 字幕補圖 | 已重新生成、下載並裁切 | raw：`slide-29-vocab-vietnamese-subtitles-raw.png`；cropped：`slide-29-vocab-vietnamese-subtitles.png` |
| 舊圖整理 | 已將被取代的舊素材移入 archive | `KN2課堂PPT/L1_我哪儿都没去过/素材整理/generated/archive/replaced-20260901-175936/` |
| QA 預覽圖 | 已建立供教師檢查 | `KN2課堂PPT/L1_我哪儿都没去过/素材整理/generated/qa-preview-cropped-v2.png` |
| PPT 嵌入 | 已將裁切後素材嵌入 L2 HTML PPT | P1、P2、P8、P10、P29、P31、P39 |
