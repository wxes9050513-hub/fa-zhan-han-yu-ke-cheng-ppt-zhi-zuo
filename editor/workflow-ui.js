'use strict';
const W = CourseWorkflow;
let contentId = null;
const lesson = () => deck.lessonPackage;
const content = () => lesson().items.find(i=>i.id===contentId);
const roleBlock = (i, role) => i.blocks.find(b=>b.role===role);
function editLesson(fn) { const before=JSON.stringify(deck);fn();record(before);CourseUI.render(); }
function courseList() {
  const list=$('content-list');list.replaceChildren();
  lesson().items.forEach((i,n)=>{const b=document.createElement('button');b.textContent=(n+1)+'. '+i.title+' · '+(W.isReviewed(lesson(),i)?'已核對':'待核對');b.classList.toggle('current',i.id===contentId);b.onclick=()=>{contentId=i.id;courseList();contentForm();};list.append(b);});
}
function sourceList() {
  const list=$('source-pages');list.replaceChildren();
  for(const s of lesson().sources)for(const pg of s.pages){
    const box=document.createElement('details'),label=document.createElement('summary');label.textContent=s.name+' · P'+pg.number+(pg.reviewedText===pg.text?' · 已核對':' · 待核對');
    const raw=document.createElement('textarea');raw.value=pg.text;raw.rows=6;raw.setAttribute('aria-label',s.name+' 第 '+pg.number+' 頁原文');
    raw.oninput=()=>editLesson(()=>{pg.text=raw.value;pg.reviewedText=null;label.textContent=s.name+' · P'+pg.number+' · 修改後待核對';});
    const b=document.createElement('button');b.textContent='已對照原頁，確認文字與頁碼';b.onclick=()=>{if(!pg.text.trim())return notify('教材頁不能是空白文字。');editLesson(()=>pg.reviewedText=pg.text);sourceList();courseList();contentForm();};
    box.append(label,raw,b);list.append(box);
  }
}
function setRole(i,role,value) {
  let b=roleBlock(i,role);
  if(!b){b={id:M.id(),type:'text',role,text:'',backText:'',annotations:[]};i.blocks.push(b);}
  b.text=value;
}
function contentForm() {
  const i=content();$('content-fields').hidden=!i;$('content-empty').hidden=!!i;if(!i)return;
  for(const [id,key] of [['content-title','title'],['content-type','type'],['content-origin','origin'],['content-objective','objective'],['content-exercise','exerciseType'],['content-exception','exception']])$(id).value=i[key];
  $('content-pages').value=i.pages.join(', ');
  const options=$('content-source');options.replaceChildren();const empty=document.createElement('option');empty.value='';empty.textContent='選擇已讀取的教材';options.append(empty);for(const s of lesson().sources){const o=document.createElement('option');o.value=s.id;o.textContent=s.name;options.append(o);}options.value=i.sourceId;
  for(const role of ['instruction','explanation','pinyin','body','examples'])$('content-'+role).value=roleBlock(i,role)?.text||'';
  $('content-answer').value=roleBlock(i,'body')?.backText||'';
  $('content-annotations').value=(roleBlock(i,'body')?.annotations||[]).map(a=>[a.word,a.pinyin,a.vi].join(' | ')).join('\n');
  $('instruction-field').hidden=!['content','exercise','task'].includes(i.type);$('explanation-field').hidden=i.type!=='grammar';$('pinyin-field').hidden=i.type!=='vocabulary';$('examples-field').hidden=i.type!=='vocabulary';$('answer-field').hidden=!['vocabulary','exercise','task'].includes(i.type);
  $('review-confirm').checked=false;reviewStatus();
  const extra=$('extra-blocks');extra.replaceChildren();for(const b of i.blocks.filter(b=>b.role==='extra')){const label=document.createElement('label');label.textContent='其他物件內容';const t=document.createElement('textarea');t.value=b.text;t.oninput=()=>editLesson(()=>{b.text=t.value;i.review=null;});label.append(t);extra.append(label);}
}
function reviewStatus() {const i=content();if(i)$('content-review-status').textContent=W.isReviewed(lesson(),i)?'本項已核對；再次改動內容或原教材會失效。':'本項待核對；版面微調不會清除內容核對紀錄。';}
function showIssues(messages) {const box=$('course-issues');box.replaceChildren();for(const message of messages.slice(0,30)){const p=document.createElement('p');p.textContent=message.message||message;box.append(p);}if(messages.length>30){const p=document.createElement('p');p.textContent='另有 '+(messages.length-30)+' 項；完成前面的項目後再檢查。';box.append(p);}}
function openMaterials() {W.migrate(deck);$('course-level').value=lesson().course;sourceList();if(!content())contentId=lesson().items[0]?.id||null;courseList();contentForm();if(!$('materials-dialog').open)$('materials-dialog').showModal();}
function addContent(type) {
  editLesson(()=>{const i=W.newItem(type);if(lesson().sources.length===1){i.sourceId=lesson().sources[0].id;if(lesson().sources[0].pages.length===1)i.pages=[lesson().sources[0].pages[0].number];}lesson().items.push(i);contentId=i.id;});openMaterials();
}
function generateCourse() {
  try {document.activeElement?.blur();const failed=W.issues(W.validatePackage(lesson()));if(failed.length){openMaterials();showIssues(failed);return;}
    change(()=>{W.generate(deck);page=0;selected=null;});$('materials-dialog').close();notify('已從教材資料庫生成；可直接放映，或按需要微調版面。');
  } catch(e) {openMaterials();showIssues([e.message]);}
}
function overflowIssues() {
  const failures=[],host=document.createElement('div');host.style.cssText='position:fixed;left:-20000px;top:0;width:960px;visibility:hidden';document.body.append(host);
  try{for(const s of deck.slides){const stage=document.createElement('div');stage.className='slide-canvas';host.replaceChildren(stage);M.paint(s,stage,true);
    for(const n of stage.querySelectorAll('.slide-element')){const check=()=>{const t=n.querySelector('.element-text');return t&&(t.scrollHeight>t.clientHeight+2||t.scrollWidth>t.clientWidth+2);};let bad=check();if(n.tagName==='BUTTON'){n.click();bad=check()||bad;}if(bad)failures.push({itemId:s.id,message:s.title+'：文字正面或背面放不下，請放大文字框或拆成多頁。'});}
  }}finally{host.remove();}return failures;
}
window.CourseUI = {
  render() {
    if(!deck.lessonPackage)W.migrate(deck);
    const p=lesson(),count=p.items.filter(i=>W.isReviewed(p,i)).length,generated=!!deck.workflow.generated,editable=generated&&W.contentMatches(deck);
    $('workflow-status').textContent=generated?'已生成 · 內容核對 '+count+' / '+p.items.length+' · 手動微調為選用':'先讀教材 · 內容核對 '+count+' / '+p.items.length+' · 核對後生成 PPT';
    if(generated&&!editable)$('workflow-status').textContent='教材內容已修改 · 請核對並重新生成，再繼續版面微調';
    document.body.classList.toggle('before-generation',!editable);$('stage').inert=!editable;document.querySelector('.inspector').inert=!editable;$('source').disabled=true;$('source').title='請在教材資料庫設定來源與原頁碼';
    for(const b of document.querySelectorAll('.toolbar [data-add],#add-image,#copy-slide,#delete-slide,#slide-up,#slide-down,#stacked-layout'))b.disabled=!editable||(b.id==='delete-slide'&&deck.slides.length===1)||(b.id==='slide-up'&&page===0)||(b.id==='slide-down'&&page===deck.slides.length-1);
    reviewStatus();
  },
  allowRelease() {
    try{W.reconcile(deck);const failed=W.releaseIssues(deck);if(!failed.length)failed.push(...overflowIssues());if(failed.length){openMaterials();showIssues(failed);return false;}return true;}
    catch(e){openMaterials();showIssues([e.message]);return false;}
  },open:openMaterials
};
$('materials').onclick=openMaterials;$('close-materials').onclick=()=>$('materials-dialog').close();$('generate').onclick=generateCourse;$('generate-from-dialog').onclick=generateCourse;
$('check-course').onclick=()=>{if(CourseUI.allowRelease())notify('來源、內容版本與正反面版面檢查通過。課堂語意仍以教師核對為準。');};
$('new').onclick=()=>{if(confirm('建立新的教材包？請先下載目前課程備份。'))switchDeck(W.newCourse()).then(openMaterials);};
$('add-slide').onclick=()=>addContent('exercise');$('new-content').onclick=()=>addContent('content');$('new-exercise').onclick=()=>addContent('exercise');
$('course-level').onchange=()=>{editLesson(()=>lesson().course=$('course-level').value);courseList();contentForm();};
for(const [id,key] of [['content-title','title'],['content-origin','origin'],['content-objective','objective'],['content-exercise','exerciseType'],['content-exception','exception'],['content-source','sourceId']])$(id).oninput=()=>{const i=content();if(!i)return;editLesson(()=>{i[key]=$(id).value;if(key==='title')setRole(i,'title',i.title);i.review=null;});$('review-confirm').checked=false;};
$('content-pages').oninput=()=>{if(content())editLesson(()=>{content().pages=$('content-pages').value.split(/[,，]/).map(s=>s.trim()).filter(Boolean);content().review=null;});$('review-confirm').checked=false;};
for(const role of ['instruction','explanation','pinyin','body','examples'])$('content-'+role).oninput=()=>{if(content())editLesson(()=>{setRole(content(),role,$('content-'+role).value);content().review=null;});$('review-confirm').checked=false;};
$('content-answer').oninput=()=>{if(content())editLesson(()=>{let b=roleBlock(content(),'body');if(!b){setRole(content(),'body','');b=roleBlock(content(),'body');}b.backText=$('content-answer').value;content().review=null;});$('review-confirm').checked=false;};
$('content-annotations').oninput=()=>{if(content())editLesson(()=>{const b=roleBlock(content(),'body');if(!b)return;b.annotations=$('content-annotations').value.split('\n').filter(s=>s.trim()).map(s=>{const [word='',pinyin='',vi='']=s.split('|').map(x=>x.trim());return {word,pinyin,vi};});content().review=null;});$('review-confirm').checked=false;};
$('content-type').onchange=()=>{const i=content();if(!i)return;editLesson(()=>{i.type=$('content-type').value;for(const b of W.newItem(i.type).blocks)if(!roleBlock(i,b.role))i.blocks.push(b);roleBlock(i,'body').type=i.type==='vocabulary'?'flashcard':['exercise','task'].includes(i.type)?'reveal':'text';i.review=null;});contentForm();};
$('approve-content').onclick=()=>{try{editLesson(()=>W.approve(lesson(),contentId,$('review-confirm').checked));courseList();reviewStatus();showIssues([]);}catch(e){showIssues([e.message]);}};
for(const [id,delta] of [['content-up',-1],['content-down',1]])$(id).onclick=()=>{const index=lesson().items.findIndex(i=>i.id===contentId);if(index+delta<0||index+delta>=lesson().items.length)return;editLesson(()=>{const i=lesson().items.splice(index,1)[0];lesson().items.splice(index+delta,0,i);});courseList();};
$('delete-content').onclick=()=>{if(!content()||!confirm('刪除這項內容？可使用復原還原。'))return;editLesson(()=>lesson().items=lesson().items.filter(i=>i.id!==contentId));contentId=lesson().items[0]?.id||null;courseList();contentForm();};
$('add-material-page').onclick=()=>{const name=$('material-name').value.trim(),number=$('material-page').value.trim(),value=$('material-text').value;if(!name||!number||!value.trim())return notify('請填教材名稱、原頁碼與本頁文字。');const s=lesson().sources.find(s=>s.name===name);if(s?.pages.some(p=>p.number===number))return notify('這個來源已有同頁碼，請在下方原頁修改，避免覆蓋。');editLesson(()=>{if(s)s.pages.push({number,text:value,reviewedText:null});else lesson().sources.push(W.source(name,[{number,text:value}]));});$('material-text').value='';sourceList();contentForm();};
$('import-material').onclick=()=>$('material-file').click();
$('material-file').onchange=async ev=>{const f=ev.target.files[0];ev.target.value='';if(!f)return;const deckId=deck.id;try{if(f.size>50000000)throw Error('教材包需小於 50 MB。');const raw=await f.text();if(deck.id!==deckId)throw Error('課程已切換，請重新選擇教材。');if(f.name.endsWith('.json')){const p=W.validatePackage(JSON.parse(raw));const d=W.newCourse();d.lessonPackage=p;d.title=p.title;await switchDeck(d);openMaterials();}else{$('material-name').value=f.name;$('material-text').value=raw;notify('已讀取文字，請填入原教材頁碼後保存。多頁教材請依頁碼分開保存。');}}catch(e){notify(e.message);}};
$('download-package').onclick=()=>{document.activeElement?.blur();try{W.reconcile(deck);download(JSON.stringify(W.validatePackage(lesson()),null,2),filename('.lesson.json'),'application/json');}catch(e){notify(e.message);}};
$('vocabulary-query').oninput=()=>{const q=$('vocabulary-query').value.trim(),results=$('vocabulary-results');results.replaceChildren();const rows=(lesson().vocabulary||[]).filter(v=>q&&v.word.includes(q)).slice(0,30);for(const v of rows){const p=document.createElement('p');p.textContent=[v.word,v.pinyin,v.meaning,v.source].filter(Boolean).join(' · ');results.append(p);}if(!rows.length)results.textContent=q?'教材包中的詞表沒有符合項目；請對照原教材核對超綱詞。':'';};
document.querySelector('header').after($('workflow-bar'));

$('stacked-layout').onclick=()=>{try{change(()=>W.applyStackedLayout(deck,slide().id));notify('已改為上下版面，可復原；請檢查長文字並按需要拆頁。');}catch(e){notify(e.message);}};
