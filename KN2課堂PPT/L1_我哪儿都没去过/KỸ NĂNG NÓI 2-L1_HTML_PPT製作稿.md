# KỸ NĂNG NÓI 2 - L1 HTML_PPT 製作稿

## 基本資料

| 欄位 | 內容 |
|---|---|
| 來源稿 | `KỸ NĂNG NÓI 2-L1課堂PPT教師審核稿.md` |
| 狀態 | 教師審核通過後製作版 |
| 課程 | Kỹ năng Nói 2 |
| 課次 | L1 |
| 課名 | 我哪儿都没去过 |
| 課本頁碼 | p.1-p.12 |
| HTML 輸出路徑 | `ai-teaching-material-system-main/output/kn2/lesson-01/` |
| 檔名規則 | `slide-XX.html` |
| 投影片總數 | 50 |
| 版型參考 | KN4 成品只參考 HTML 外殼、頁型版式、互動與工具列；不套用 KN4 課程架構。 |

## 全局 HTML 製作規則

- 投影片固定 960 x 540。
- 每頁上方固定頁型 Banner；建議字標：生詞 `词`、語法 `法`、練習 `练`、功能句 `句`、任務 `任`。
- 每頁左下角來源文字用 `Sách giáo khoa P{{page}}` 或 `Sách giáo khoa P{{start}}~P{{end}}`。
- 每頁右下角頁碼用 `KN2 L1 · {{current}}/50`。
- 說明、題型、任務規則使用越南語；中文生詞、例句、句型、課本題目使用簡體中文。
- 預習回收與生詞頁用翻牌；練習答案點擊後以紅字帶入空格。
- 生詞閃卡背面只放兩行越南語資訊：越南語詞性在上、越南語翻譯在下；不顯示 `Loại từ`、`Nghĩa` 等欄位標籤。詞性使用青綠色 `#5AACAC`，翻譯使用深藍色 `#1A3A5A`，兩行水平、垂直置中，上下間距約 `6px`。
- 超綱詞需做 inline 標記：漢字上方拼音，漢字下方 `（越南語）`。
- 圖片內文字、字母、數字、標籤或字幕依教師指定與圖片需求表為準，未指定時不主動加入可讀文字。

## 每頁製作表

| 堂次 | 頁碼 | 檔名 | 頁型 | 畫面主標 | 投影片畫面文字 | 互動／動畫／素材 | 教師備註 |
|---|---:|---|---|---|---|---|---|
| 第 1 堂 | 1 | `slide-01.html` | 封面 | 我哪儿都没去过 | `我哪儿都没去过`<br>`KN2 - Bài 1` | 右側放新地方生活情境圖片；左文右圖；標題儘量單行呈現；來源 `Sách giáo khoa P1~P12` | 2 分鐘；不放總時長。 |
| 第 1 堂 | 2 | `slide-02.html` | 暖身活動 | 说说你的习惯。 | Banner `Khởi động`<br>題目：`说说你的习惯。`<br>`Mẫu câu`：`我（不）习惯……，因为……。`<br>`Từ gợi ý`：生活習慣組 `早睡早起、熬夜、吃早餐、天气（夏天、冬天）、每天运动、睡前滑手机、每天学习、打扫房间、吃零食`；原因感受組 `累、懒惰、睡不着、热、冷、下雨、脏、干净、乱、忙、快乐、难过` | 兩組提示詞用不同顏色；所有提示詞都做超綱生詞標記：漢字上方拼音、下方越南語；來源 `Sách giáo khoa P1~P12` | 5 分鐘；學生短答即可。 |
| 第 1 堂 | 3 | `slide-03.html` | 預習回收 | 友美知道铃木来北京吗？ | Banner `Ôn phần chuẩn bị`<br>`课文：P1~P2《我哪儿都没去过》`<br>正面：`友美知道铃木来北京吗？`<br>背面：`友美不知道铃木来北京。` | 問題卡翻牌；來源 `Sách giáo khoa P1~P2` | 背面只放完整句，不放「答案」標籤。 |
| 第 1 堂 | 4 | `slide-04.html` | 預習回收 | 友美认识铃木的妹妹吗？ | Banner `Ôn phần chuẩn bị`<br>`课文：P1~P2《我哪儿都没去过》`<br>正面：`友美认识铃木的妹妹吗？`<br>背面：`友美认识铃木的妹妹。` | 問題卡翻牌；來源 `Sách giáo khoa P1~P2` | 2 分鐘。 |
| 第 1 堂 | 5 | `slide-05.html` | 預習回收 | 铃木来北京做什么？ | 只放題目與背面答案，不放 `Từ gợi ý`、`Mẫu câu`。 | 問題卡翻牌；來源 `Sách giáo khoa P1~P2` | 依教師指定刪提示區。 |
| 第 1 堂 | 6 | `slide-06.html` | 預習回收 | 友美去过什么地方？ | 只放題目與背面答案，不放 `Từ gợi ý`、`Mẫu câu`。 | 問題卡翻牌；來源 `Sách giáo khoa P1~P2` | 依教師指定刪提示區。 |
| 第 1 堂 | 7 | `slide-07.html` | 生詞講解 | 对了 | 左卡：`duì le 对了`；右側 `Cách dùng`：`Dùng để chuyển chủ đề.`；`Mẫu câu`：`我昨天和小美去看电影。对了，那部你推荐的电影很好看。` | 左卡翻牌；`对了` 黃底紅字；`电影`、`推荐` 超綱標記。 | `推荐` 為 KN2 第 19 課詞，L1 需超綱標記；越南語用 `gợi ý`；刪除 `参加` 生詞頁。 |
| 第 1 堂 | 8 | `slide-08.html` | 生詞講解 | 培训 | 左卡：`péi xùn 培训`；例句兩句：`学校想培训一位新的汉语老师。`、`铃木来北京参加汉语培训。` | 左卡翻牌；`培训` 黃底紅字。 | 一句動詞，一句名詞。 |
| 第 1 堂 | 9 | `slide-09.html` | 生詞講解 | 申请 | 例句：`申请学校的奖学金难吗？` | `奖学金` 超綱標記。 |  |
| 第 1 堂 | 10 | `slide-10.html` | 生詞講解 | 联系 | 例句：`你多久没和妈妈联系了？` | `联系` 黃底紅字。 | 與 `见面` 拆開。 |
| 第 1 堂 | 11 | `slide-11.html` | 生詞講解 | 见面 | 左卡：`jiàn miàn 见面`，漢字下方加紫色 `Động từ ly hợp`；例句：`你昨天和谁见面了？`、`我想去北京见他一面。` | 左卡翻牌；`和`、`见面`、`见`、`面` 黃底紅字。 | 離合詞閃卡正面可加越南語提示。 |
| 第 1 堂 | 12 | `slide-12.html` | 生詞講解 | 习惯 | 例句：`你习惯每天读书吗？`、`你有什么坏习惯？` | `读书` 超綱標記；詞性補 `danh từ`。 | 與 `生活` 拆開。 |
| 第 1 堂 | 13 | `slide-13.html` | 生詞講解 | 生活 | 例句兩句：`妹妹在西安生活。`、`她已经习惯西安的生活了。` | `生活` 黃底紅字。 | 一句動詞，一句名詞。 |
| 第 1 堂 | 14 | `slide-14.html` | 生詞講解 | 后来 | 左卡：`hòu lái 后来`；右側兩張對話卡：`Diễn biến sự việc`、`Thay đổi quyết định`；對話一：`A：你昨天去看医生了吗？ B：去了。 A：后来怎么样？ B：医生说没事，多休息就好了。`；對話二：`A：你不是要买苹果手机吗？ B：对，可是后来我买小米手机。 A：为什么？ B：因为比较便宜。` | 左卡翻牌；`后来` 黃底紅字；`医生`、`休息`、`苹果`、`小米`、`比较`、`便宜` 超綱標記；P14 使用較小對話字級。 | 刪除 `导游` 生詞頁；若版面溢出再拆為兩頁。 |
| 第 1 堂 | 15 | `slide-15.html` | 生詞講解 | 带 | 例句：`你可以带爷爷去医院看病吗？` | `带` 黃底紅字；`爷爷`、`医院`、`看病` 超綱標記。 |  |
| 第 1 堂 | 16 | `slide-16.html` | 生詞講解 | 让 | 左卡：`ràng 让`；右側 `Mẫu câu`：`老师让我们好好儿学习。` | 左卡翻牌；`让` 黃底紅字。 | 新增生詞頁。 |
| 第 1 堂 | 17 | `slide-17.html` | 語法講解 | 好 + Adj. | 例句：`天啊！今天好忙。`、`今天的天气好热。` | 來源 `Sách giáo khoa P5`。 |  |
| 第 1 堂 | 18 | `slide-18.html` | 語法練習 | 好 + Adj. | 看圖片與 `Từ gợi ý` 造句：河粉、咖啡、手機遊戲、酒店四題。 | 四格圖片；答案點擊紅字顯示。 |  |
| 第 1 堂 | 19 | `slide-19.html` | 語法講解 | 才刚／刚 | `VD1`：`我刚听说他要买房子，他好有钱啊！`；`VD2`：`我才刚学了半年中文。` | `刚`、`才刚` 黃底紅字；`房子`、`有钱` 超綱標記。 |  |
| 第 1 堂 | 20 | `slide-20.html` | 語法練習 | 才刚／刚 + V | 3 題完成對話。 | 答案點擊紅字顯示。 |  |
| 第 2 堂 | 21 | `slide-21.html` | 預習回收 | 铃木的妹妹现在怎么样？ | 只放題目與背面答案，不放 `Từ gợi ý`、`Mẫu câu`。 | 來源 `Sách giáo khoa P3~P4`。 |  |
| 第 2 堂 | 22 | `slide-22.html` | 預習回收 | 友美和铃木有什么打算？ | 只放題目與背面答案，不放 `Từ gợi ý`、`Mẫu câu`。 | 來源 `Sách giáo khoa P3~P4`。 |  |
| 第 2 堂 | 23 | `slide-23.html` | 預習回收 | 铃木现在要做什么？ | 只放題目與背面答案，不放 `Từ gợi ý`、`Mẫu câu`。 | 來源 `Sách giáo khoa P3~P4`。 |  |
| 第 2 堂 | 24 | `slide-24.html` | 預習回收 | 铃木对这里熟悉吗？ | 只放題目與背面答案，不放 `Từ gợi ý`、`Mẫu câu`；`对……熟悉` 特殊標色。 | 來源 `Sách giáo khoa P3~P4`。 |  |
| 第 2 堂 | 25 | `slide-25.html` | 生詞講解 | 陪 | `Cấu trúc`：`陪＋人＋（V.）`；例句：`我陪你去超市。`、`周末，你可以来我家陪我吗？` | 第一例句為根據句型造出的完整句。 |  |
| 第 2 堂 | 26 | `slide-26.html` | 生詞講解 | 充电器／充电 | 例句與 Type-C／Lightning／USB 圖。 | `类型` 超綱標記。 |  |
| 第 2 堂 | 27 | `slide-27.html` | 生詞講解 | 电池 | AB 對話與電池中越對照表。 | `遥控器` 越南語 `điều khiến`。 |  |
| 第 2 堂 | 28 | `slide-28.html` | 生詞講解 | 熟悉 | 例句：`你对学校附近熟悉吗？` | `对`、`熟悉` 生詞標注；`附近` 超綱。 |  |
| 第 2 堂 | 29 | `slide-29.html` | 生詞講解 | 转 | 字卡只放 `转 zhuàn`；例句：`你带新老师去转转吧！熟悉一下学校环境。` | 例句中的 `转转` 加拼音；`转` 拼音四聲。 |  |
| 第 2 堂 | 30 | `slide-30.html` | 語法講解 | Từ nghi vấn + 都 | `Cách dùng`：`Cấu trúc này dùng để chỉ "tất cả".`；例組與越南語翻譯整理成一行。 | 只有越南語翻譯點擊彈入，中文例組不彈入。 |  |
| 第 2 堂 | 31 | `slide-31.html` | 語法例句 | Từ nghi vấn + 都 | 5 句例句：`每次去商场，我什么都想买。`、`谁都可以参加唱歌比赛。`、`夏天时，去哪儿都很热。`、`他什么时候都很忙。`、`我怎么做都做不出那么好吃的河粉。` | 每句目標結構黃底紅字。 |  |
| 第 2 堂 | 32 | `slide-32.html` | 語法練習 | Từ nghi vấn + 都 | 5 題完成句子；第一題 `你________都可以给我打电话。` | `挑食` 超綱標記。 |  |
| 第 2 堂 | 33 | `slide-33.html` | 語法講解 | 好好儿 | 例句：`你们都还是大学生，要好好儿学习。`、`明天是周末，我只想在家好好儿休息。` | `好好儿` 黃底紅字。 |  |
| 第 2 堂 | 34 | `slide-34.html` | 語法練習 | 好好儿 + V | `Từ gợi ý`：`学习、准备、玩儿玩儿、转转`。 | 不放 `好好儿`。 |  |
| 第 2 堂 | 35 | `slide-35.html` | 語法講解 | 要是……的话，…… | 刪 `如果`，只保留 `要是`；例句由上到下：完整句、省略 `的话`、省略 `要是`。 | `要是`／`的话` 黃底紅字。 |  |
| 第 2 堂 | 36 | `slide-36.html` | 語法練習 | 要是……的话，…… | 3 題完成句子；第二題答案 `我想再问一个问题`，第三題答案 `我们就去别家店`。 | 答案點擊紅字顯示。 |  |
| 第 3 堂 | 37 | `slide-37.html` | 語法講解 | 得 | 例句：`周末，我得参加哥哥的婚礼。`、`作业得自己做，不可以看别人的。` | `得` 黃底紅字。 |  |
| 第 3 堂 | 38 | `slide-38.html` | 語法練習 | 得 + V | 三題：考試準備、七點出門、國內旅遊。 | 答案點擊紅字顯示。 |  |
| 第 3 堂 | 39 | `slide-39.html` | 功能句學習 | 打招呼、问候 | 左功能右例句版型，5 句；第五句用課本 AB 對話句型。 | 來源 `Sách giáo khoa P4`。 |  |
| 第 3 堂 | 40 | `slide-40.html` | 功能句練習 | 打招呼、问候 | 一套約 5 句對話填空，人物為 `铃木`、`老张`，第四句答案 `习惯北京的生活了吗？`，下一句 `我已经习惯北京的生活了。` | 答案點擊紅字顯示。 |  |
| 第 3 堂 | 41 | `slide-41.html` | 功能句學習 | 吃惊、意外 | 單獨一頁；例句一 `真没想到` 標紅。 | 來源 `Sách giáo khoa P4`。 |  |
| 第 3 堂 | 42 | `slide-42.html` | 功能句練習 | 吃惊、意外 | 2 題完成對話，A/B 換行；第一題 B 句為 `真的吗？他不是去西安了吗？`，第二題 B 句為 `我也没想到会在这里见到你。` | 答案點擊紅字顯示。 |  |
| 第 3 堂 | 43 | `slide-43.html` | 功能句學習 | 请求、要求 | 單獨一頁。 | 來源 `Sách giáo khoa P4`。 |  |
| 第 3 堂 | 44 | `slide-44.html` | 功能句練習 | 请求、要求 | 4 題根據情況造句，改用不同語境，第二題為考試情境：`明天要考试了，你得好好儿准备。` | 答案點擊紅字顯示；句子放大並調整排版。 |  |
| 第 3 堂 | 45 | `slide-45.html` | 口語任務說明 | Đóng vai | 任務條列與 QR Code 留白。 | 來源 `Sách giáo khoa P9`。 |  |
| 第 3 堂 | 46 | `slide-46.html` | 口語任務情境 | 口語任務情境 | 四張情境卡；越南語提醒 `Luyện và ghi âm cả bốn tình huống.` | 頁面不放額外中文標題。 | 不限定 4-6 句。 |
| 第 3 堂 | 47 | `slide-47.html` | MỞ RỘNG | 联系 | 左上越南語指令 `Dùng từ/cụm từ gợi ý để mở rộng cách nói.`；練習詞放左上；練習詞標題不用紅色；下方補充 `没／不／跟／和／过／了／一下／联系联系`，右側答案點擊顯示；`联系联系` 答案：`毕业以后，我们还要常常联系联系。（你到北京以后，记得跟我联系联系。）`。 | 來源 `Sách giáo khoa P10~P11`；不放拼音、翻譯、課本示例區；不做角色扮演答案詞庫。 | 時間不足可跳過。 |
| 第 3 堂 | 48 | `slide-48.html` | MỞ RỘNG | 睡觉 | 左上越南語指令＋練習詞；練習詞標題不用紅色；下方補充 `没／不／过／了／一会儿／睡个觉`，右側答案點擊顯示。 | 來源 `Sách giáo khoa P10~P11`；不放拼音、翻譯、課本示例區。 | 時間不足可跳過。 |
| 第 3 堂 | 49 | `slide-49.html` | MỞ RỘNG | 散步 | 左上越南語指令＋練習詞；練習詞標題不用紅色；下方補充 `没／不／跟／和／过／了／一次／几次／一会儿／散散步`，右側答案點擊顯示；`和` 答案：`我常常和妈妈一起去公园散步。`；`了` 答案：`我刚去散步了。` | 來源 `Sách giáo khoa P10~P11`；不放拼音、翻譯、課本示例區。 | 時間不足可跳過。 |
| 第 3 堂 | 50 | `slide-50.html` | 收尾與作業 | 下课 | 頁內標題 `下课`；兩個區塊：`Bài tập về nhà KN2 - L1`、`Chuẩn bị bài tiếp theo KN2 - L2`；不用 `Bài tập về nhà` 作大標題；兩個字卡標籤不同標色；各自預留 QR Code 空框，學生頁不顯示 Link 待補文字。 | 來源 `Sách giáo khoa P1~P12`。 | 待教師提供 Formative URL 後產生 QR Code。 |

## HTML 製作檢查

| 檢查項目 | 狀態 |
|---|---|
| 頁碼齊全 1-50 | [x] |
| 檔名正確 `slide-01.html` 到 `slide-50.html` | [x] |
| 說明文字為越南語 | [x] |
| 中文內容為簡體中文 | [x] |
| 需要或建議使用的圖片、icon、答案動畫、點擊提示已標明 | [x] |
| 教師備註未放進學生畫面 | [x] |
| 語法／句型講解已優先依課本「大声读一读」設計 | [x] |
| 每個語法／句型講解頁都有句型說明 | [x] |
| 語法／句型講解頁的情境說明、用法說明使用越南語 | [x] |
| 語法練習已使用三種固定題型之一：情境造句、完成句子、完成對話 | [x] |
| 語法練習每頁 3-5 題 | [x] |
| 功能句練習題數儘量等同該功能項目的目標句數 | [x] |
| 詞語擴展任務若加入，放主任務後作 `MỞ RỘNG`，一頁一詞，只練課本指定目標詞 | [x] |
| 與「大声读一读」重複的生詞未另做生詞頁 | [x] |
| 未設生詞小練習頁 | [x] |
| 超綱生詞交叉檢查已完成，結果已寫入教師審核稿 | [x] |
| 保留的超綱詞已標明需做上方拼音、下方 `（越南語）` 標記 | [x] |
| HTML presenter 可開啟 | [x] |
| 下方工具列、螢光筆、刪除物件、圖形工具、Present 模式與單頁 PDF 匯出已測試 | [x] |
| 左側縮圖側欄可點選切換頁面 | [x] |
| 每頁上方頁型 Banner、頁型 icon、右下頁碼已套用 | [x] |
| 每頁左下角來源文字使用 `Sách giáo khoa P{{page}}` 或 `Sách giáo khoa P{{start}}~P{{end}}` | [x] |
| 生詞、語法、練習、功能句、口語任務代表頁已對照 KN4 版型檢查 | [x] |

## 圖片需求表

原始生成圖存放：

```text
ai-teaching-material-system-main/source-assets/kn2/lesson-01/generated/raw/
```

裁切後單張圖存放：

```text
ai-teaching-material-system-main/source-assets/kn2/lesson-01/generated/cropped/
```

HTML 使用圖存放：

```text
ai-teaching-material-system-main/output/kn2/lesson-01/slides/assets/generated/
```

| 頁碼 | 檔名 | 頁型 | 用途 | 視覺內容 | 生成方式 | 建議比例 | 放置位置 | QA 注意 |
|---:|---|---|---|---|---|---|---|---|
| P1 | `slide-01-cover.png` | 封面 | 取代 `slide-01-cover.svg` | 兩位年輕學生帶行李初到新城市，遠處有校園建築、街道與生活感；人物表情自然友善。 | 單張圖 | 橫式 16:9 或 3:2 | 封面右側圖框 | 不得有招牌、路牌、地圖字、數字；可用裁切放大減少空白。 |
| P18 | `slide-17-pho.png` | 圖片造句 | 取代 `practice-pho.svg` | 一碗熱河粉放在桌上，旁邊有湯匙、香草、簡潔餐桌背景。 | Contact sheet A | 橫式 | 四格圖片第 1 格 | 碗、桌面不可有字；食物需清楚好吃。 |
| P18 | `slide-17-coffee.png` | 圖片造句 | 取代 `practice-coffee.svg` | 一杯熱咖啡放在小桌上，杯身純色無圖案，冒少量熱氣。 | Contact sheet A | 橫式 | 四格圖片第 2 格 | 杯子不可有 logo、字母或數字。 |
| P18 | `slide-17-phone-game.png` | 圖片造句 | 取代 `practice-phone-game.svg` | 一隻手拿手機玩遊戲，螢幕只有抽象彩色形狀，表現好玩。 | Contact sheet A | 橫式 | 四格圖片第 3 格 | 未指定文字；手機畫面保持乾淨，不主動加入 UI 或標籤。 |
| P18 | `slide-17-hotel.png` | 圖片造句 | 取代 `practice-hotel.svg` | 乾淨舒適的酒店房間一角，有床、床頭燈與窗戶。 | Contact sheet A | 橫式 | 四格圖片第 4 格 | 不要旅館招牌、房號、任何文字。 |
| P26 | `slide-25-type-c.png` | Từ vựng | 取代 `type-c.svg` | 一個橢圓形手機充電接頭與短線材，造型對應 USB-C。 | Contact sheet A | 橫式或方形 | 接頭卡第 1 張；caption 由 HTML 排版 | 未指定文字；圖片內不主動加入 `Type-C` 或符號。 |
| P26 | `slide-25-lightning.png` | Từ vựng | 取代 `lightning.svg` | 一個細窄手機充電接頭與短線材，造型對應 Lightning。 | Contact sheet A | 橫式或方形 | 接頭卡第 2 張；caption 由 HTML 排版 | 未指定文字；圖片內不主動加入 `Lightning` 或符號。 |
| P26 | `slide-25-usb.png` | Từ vựng | 取代 `usb.svg` | 一個矩形 USB-A 接頭與短線材，金屬端清楚但無標誌。 | Contact sheet A | 橫式或方形 | 接頭卡第 3 張；caption 由 HTML 排版 | 未指定文字；圖片內不主動加入 `USB` 或符號。 |
| P10 | `slide-10-contact.png` | Từ vựng | 新增圖片 | 一位年輕學生用手機和媽媽聯絡，手機畫面空白，表情溫和。 | Contact sheet B | 橫式或方形 | 生詞頁右側例句下方 | 未指定文字；手機畫面、衣服、背景不主動加入標誌。 |
| P11 | `slide-11-meeting.png` | Từ vựng | 新增圖片 | 兩位年輕人在校園或街角見面打招呼，表情自然友善。 | Contact sheet B | 橫式或方形 | 生詞頁右側例句下方 | 未指定文字；背景招牌不主動加入可讀文字。 |
| P21 | `slide-20-new-life.png` | 預習回收 | 新增圖片 | 一位年輕學生在新城市或校園生活，拿書或背包，感覺已經適應。 | Contact sheet B | 橫式 | 翻牌卡下方 | 不要校名、地名、路牌文字。 |
| P22 | `slide-21-plan-trip.png` | 預習回收 | 新增圖片 | 兩位年輕學生坐在桌邊討論旅行或去另一個城市的計畫，桌上只有空白地圖與筆。 | Contact sheet B | 橫式 | 翻牌卡下方 | 未指定文字；地圖與紙張不主動加入路線名或數字。 |
| P23 | `slide-22-shopping.png` | 預習回收 | 新增圖片 | 年輕學生在乾淨超市或生活用品店買東西，手拿購物籃。 | Contact sheet B | 橫式 | 翻牌卡下方 | 未指定文字；貨架、包裝、價格牌不主動加入可讀文字或數字。 |
| P24 | `slide-23-unfamiliar.png` | 預習回收 | 新增圖片 | 一位年輕學生在陌生校園或街區看空白地圖，神情有點困惑。 | Contact sheet B | 橫式 | 翻牌卡下方 | 未指定文字；地圖、路牌、建築不主動加入可讀文字。 |
| P25 | `slide-24-accompany.png` | Từ vựng | 新增圖片 | 一位朋友陪另一位朋友去超市或一起走在路上，互動自然。 | Contact sheet B | 橫式或方形 | 生詞頁右側例句下方 | 未指定文字；商店招牌與包裝不主動加入可讀文字。 |
| P40 | `slide-39-greeting.png` | 功能句練習 | 新增圖片 | 兩位久沒見面的年輕人在街上或校園偶遇並開心打招呼。 | Contact sheet B | 橫式 | 對話練習上方 | 未指定文字；背景不主動加入可讀文字或標誌。 |

不生成：P45 Formative QR Code、P50 的 L1 回家作業與 L2 課前預習 QR Code 目前只留白，待實際 Formative 連結後再製作。

## 圖片生成 Prompt

### Prompt 1：P1 封面單張圖

```text
Create one educational textbook-style illustration for a Chinese speaking class slide.

Subject:
Two young adult students arriving in a new city for study. They stand near a clean campus entrance and a calm city street, carrying simple luggage or backpacks. The mood is friendly, fresh, and slightly curious, showing the feeling of beginning life in a new place.

Style:
Soft textbook line-art, thin grey-blue outlines, muted pastel fills, white or very pale grey background, gentle flat shading, subtle low-contrast shadows, clean uncluttered composition, natural human proportions.

Composition:
Horizontal composition for the right side of a 16:9 classroom slide. Keep the main people and city/campus context centered, with enough background for cropping. Avoid large empty areas.

Important:
Do not add readable text, letters, numerals, Chinese characters, labels, captions, signs, or watermarks unless they are explicitly specified in the image request table. Keep building signs, luggage tags, street signs, maps, phone screens, and clothing visually clean when no text is specified.
```

### Prompt 2：Contact sheet A，P18/P26 素材

```text
Create one 4 by 2 contact sheet image for a Chinese speaking class slide deck.
This prompt contains exactly 7 images. Each cell is a separate textbook-style illustration.

Style:
Soft educational textbook line-art, thin grey-blue outlines, muted pastel fills, white or very pale grey background, gentle flat shading, subtle low-contrast shadows, clean uncluttered composition, natural human proportions when people appear.

Use exactly this row-major order, one subject per cell:

1. A warm bowl of Vietnamese pho on a clean table, with spoon, herbs, and simple dining background.
2. A cup of hot coffee on a small table, plain cup, gentle steam, cozy but uncluttered.
3. A hand holding a smartphone playing a game; the screen shows only abstract colorful shapes and no readable interface.
4. A clean comfortable hotel room corner with a bed, bedside lamp, and window.
5. A USB-C style oval phone charging connector with a short cable, shown clearly as a physical object.
6. A slim Lightning style phone charging connector with a short cable, shown clearly as a physical object.
7. A rectangular USB-A connector with a short cable, metal end visible, shown clearly as a physical object.

Important:
Keep every cell visually separate with narrow white gutters.
Do not add readable text, letters, numerals, Chinese characters, labels, captions, signs, logos, UI text, or watermarks unless they are explicitly specified in the image request table. Keep object surfaces, phone screens, cups, clothing, flags, buildings, doors, cables, and connectors visually clean when no text is specified.
```

### Contact sheet A 裁切對應

| 順序 | 裁切後檔名 | 對應頁碼 |
|---:|---|---:|
| 1 | `slide-17-pho.png` | P18 |
| 2 | `slide-17-coffee.png` | P18 |
| 3 | `slide-17-phone-game.png` | P18 |
| 4 | `slide-17-hotel.png` | P18 |
| 5 | `slide-25-type-c.png` | P26 |
| 6 | `slide-25-lightning.png` | P26 |
| 7 | `slide-25-usb.png` | P26 |

### Prompt 3：Contact sheet B，P10/P11/P21/P22/P23/P24/P25/P40 素材

```text
Create one 4 by 2 contact sheet image for a Chinese speaking class slide deck.
This prompt contains exactly 8 images. Each cell is a separate textbook-style illustration.

Style:
Soft educational textbook line-art, thin grey-blue outlines, muted pastel fills, white or very pale grey background, gentle flat shading, subtle low-contrast shadows, clean uncluttered composition, natural human proportions when people appear.

Use exactly this row-major order, one subject per cell:

1. A young adult student using a smartphone to contact their mother, warm and natural expression, blank phone screen.
2. Two young adults meeting and greeting each other on a campus path or clean street corner, friendly expressions.
3. A young adult student living comfortably in a new city or campus, carrying books or a backpack, looking adapted and calm.
4. Two young adult students sitting at a table discussing a travel plan to another city, with a completely blank map and a pen on the table.
5. A young adult student shopping in a clean supermarket or daily-goods store, holding a shopping basket.
6. A young adult student in an unfamiliar campus or street area, looking slightly confused while looking at a completely blank map.
7. One friend accompanying another friend to a supermarket or walking together outside, natural friendly interaction.
8. Two young adults unexpectedly meeting after a long time on a campus path or clean street, happily greeting each other.

Important:
Keep every cell visually separate with narrow white gutters.
Do not add readable text, letters, numerals, Chinese characters, labels, captions, signs, logos, UI text, or watermarks unless they are explicitly specified in the image request table. Keep phone screens, maps, papers, product packages, price tags, clothing, buildings, shops, and street signs visually clean when no text is specified.
```

### Contact sheet B 裁切對應

| 順序 | 裁切後檔名 | 對應頁碼 |
|---:|---|---:|
| 1 | `slide-10-contact.png` | P10 |
| 2 | `slide-11-meeting.png` | P11 |
| 3 | `slide-20-new-life.png` | P21 |
| 4 | `slide-21-plan-trip.png` | P22 |
| 5 | `slide-22-shopping.png` | P23 |
| 6 | `slide-23-unfamiliar.png` | P24 |
| 7 | `slide-24-accompany.png` | P25 |
| 8 | `slide-39-greeting.png` | P40 |

## 圖片生成與嵌入結果

| 項目 | 結果 |
|---|---|
| ChatGPT 生圖 | [x] 已完成，使用 Chrome `Shihsiang` profile 的 ChatGPT Pro。 |
| 原始圖 | [x] `p01-cover-raw.png`、`batch-a-contact-sheet-raw.png`、`batch-b-contact-sheet-raw.png` 已存入 `source-assets/kn2/lesson-01/generated/raw/`。 |
| 裁切圖 | [x] 16 個 PNG 已存入 `source-assets/kn2/lesson-01/generated/cropped/`；`slide-14-guide.png` 已不再使用。 |
| HTML 使用圖 | [x] 16 個 PNG 已複製到 `output/kn2/lesson-01/slides/assets/generated/`。 |
| SVG 替換／圖片新增 | [x] P1、P18、P26 已改用 PNG；P10、P11、P21、P22、P23、P24、P25、P40 已新增 PNG。 |
| 載入檢查 | [x] 已用 Chrome 檢查 P1、P10、P11、P18、P21、P22、P23、P24、P25、P26、P40，所有 PNG 正常載入。 |
| QA 備註 | 已重切 Contact sheet A/B：人物圖保留完整、不裁頭；P18 河粉／咖啡／手機遊戲／酒店改用乾淨格線 16:9 裁切，縮圖已放大。PPT 圖框使用 contain 顯示。 |
