(function (root) {
  'use strict';
  const M = root.SlideModel || require('./model.js');
  const copy = M.clone;
  const TYPES = ['cover', 'content', 'vocabulary', 'grammar', 'exercise', 'task'];
  const EXERCISES = ['completion', 'substitution', 'question-answer', 'dialogue', 'speaking', 'matching', 'multiple-choice', 'vocabulary-drill'];
  const LAYOUT = ['x', 'y', 'w', 'h', 'fontSize', 'color', 'background', 'align', 'bold', 'locked', 'lineHeight'];
  const CONTENT = ['id', 'type', 'role', 'text', 'backText', 'src', 'annotations'];
  const pick = (value, keys) => Object.fromEntries(keys.filter(k => value[k] !== undefined).map(k => [k, copy(value[k])]));
  const contentBlocks = blocks => blocks.map(b=>pick({...b,annotations:b.annotations||[]},CONTENT)).sort((a,b)=>a.id.localeCompare(b.id));
  const text = value => typeof value === 'string' && value.trim().length > 0;
  const block = (role, type = 'text', value = '') => ({id:M.id(), role, type, text:value, backText:'', annotations:[]});

  function newPackage(title = '未命名課程', course = 'KN2') {
    return {schemaVersion:1, id:M.id(), title, course, sources:[], vocabulary:[], items:[]};
  }
  function newCourse() {
    const d = M.blank(); d.lessonPackage = newPackage();
    d.workflow = {generated:false, projection:'', generatedContent:''}; d.layoutOverrides = {};
    return d;
  }
  function newItem(type = 'exercise') {
    if (!TYPES.includes(type)) throw Error('不支援的課程頁型。');
    const i = {id:M.id(), type, title:'新內容', origin:'supplement', sourceId:'', pages:[], objective:'', exerciseType:'completion', exception:'', notes:'', review:null, blocks:[block('title', 'text', '新內容')]};
    if (type === 'grammar') i.blocks.push(block('explanation'));
    else if (type !== 'cover' && type !== 'vocabulary') i.blocks.push(block('instruction'));
    if (type === 'vocabulary') i.blocks.push(block('pinyin'));
    i.blocks.push(block('body', ['vocabulary', 'exercise', 'task'].includes(type) ? (type === 'vocabulary' ? 'flashcard' : 'reveal') : 'text'));
    if (type === 'vocabulary') i.blocks.push(block('examples'));
    return i;
  }
  function source(name, pages) {
    return {id:M.id(), name, pages:pages.map(p => ({number:String(p.number), text:p.text, reviewedText:null}))};
  }
  function validatePackage(input) {
    if (!input || input.schemaVersion !== 1 || !Array.isArray(input.items) || !Array.isArray(input.sources)) throw Error('教材包格式不正確。');
    const p = copy(input), ids = new Set();
    const id = v => {if (typeof v !== 'string' || !/^[-a-zA-Z0-9_]{1,100}$/.test(v) || ids.has(v)) throw Error('教材包有重複或不正確的 ID。'); ids.add(v);};
    id(p.id);
    if (!text(p.title) || p.title.length > 500 || !['KN2','KN4'].includes(p.course) || p.items.length > 500 || p.sources.length > 100) throw Error('請填入課名、KN2／KN4；每課最多 500 項內容。');
    for (const s of p.sources) {
      id(s.id); if (!text(s.name) || !Array.isArray(s.pages) || !s.pages.length || s.pages.length > 2000) throw Error('教材來源必須含名稱與頁面文字。');
      const numbers = new Set();
      for (const page of s.pages) {
        if (!text(page.number) || numbers.has(page.number) || typeof page.text!=='string' || page.text.length > 200000) throw Error('教材頁碼重複、文字格式錯誤或單頁過長。');
        numbers.add(page.number);
        if (page.reviewedText != null && typeof page.reviewedText !== 'string') throw Error('教材核對紀錄格式不正確。');
      }
    }
    if (p.vocabulary === undefined) p.vocabulary = [];
    if (!Array.isArray(p.vocabulary) || p.vocabulary.length > 20000 || p.vocabulary.some(v => !v || !text(v.word))) throw Error('詞彙資料庫格式不正確。');
    for (const i of p.items) {
      id(i.id);
      if (!TYPES.includes(i.type) || !['textbook','supplement','legacy'].includes(i.origin) || !Array.isArray(i.pages) || i.pages.some(n => typeof n !== 'string') || !Array.isArray(i.blocks) || i.blocks.length > 200) throw Error('課程項目的頁型、来源或內容格式不正確。');
      for (const k of ['title','sourceId','objective','exerciseType','exception','notes']) if (typeof i[k] !== 'string') throw Error('課程項目缺少 '+k+'。');
      for (const b of i.blocks) {
        id(b.id);
        if (!['title','instruction','explanation','pinyin','body','examples','extra'].includes(b.role)) throw Error('不支援的內容欄位。');
        M.validate({version:1,id:M.id(),title:'check',slides:[{id:M.id(),title:'check',source:'',notes:'',elements:[M.element(b.type,{...b,x:27,y:100,w:906,h:300,fontSize:30})]}]});
      }
    }
    return p;
  }
  function evidence(p, i) {
    const s = p.sources.find(s => s.id === i.sourceId);
    return s ? {name:s.name, pages:i.pages.map(n => {const page=s.pages.find(p=>p.number===n); return page ? {number:n,text:page.text,checked:page.reviewedText===page.text} : {number:n,missing:true};})} : null;
  }
  function itemFingerprint(p, i) {
    return JSON.stringify({course:p.course,type:i.type,title:i.title,origin:i.origin,objective:i.objective,exerciseType:i.exerciseType,exception:i.exception,blocks:contentBlocks(i.blocks),source:evidence(p,i)});
  }
  function isReviewed(p,i) {return !!i.review && i.review.fingerprint === itemFingerprint(p,i);}
  function issues(p, includeReview = true) {
    const out = [], add = (i, message) => out.push({itemId:i?.id || '', message:(i ? i.title+'：' : '')+message});
    if (!p.sources.length) add(null,'先讀取教材，保存原教材頁碼與文字。');
    if (!p.items.length) add(null,'先將教材整理成課程內容。');
    for (const i of p.items) {
      const e = evidence(p,i), get = role => i.blocks.find(b=>b.role===role);
      if (!e || !i.pages.length || e.pages.some(pg=>pg.missing)) add(i,'缺少可追溯的教材來源與頁碼；補充練習也需連結教學依據。');
      else if (e.pages.some(pg=>!pg.checked||!text(pg.text))) add(i,'引用的教材文字尚未與原頁核對。');
      if (i.origin === 'legacy') add(i,'舊稿仍待整理，請指定題型與教材／教師補充來源。');
      if (!text(i.title) || !text(get('title')?.text)) add(i,'缺少頁面標題。');
      if (!text(i.objective)) add(i,'缺少本頁學習目標。');
      if (!text(get('body')?.text)) add(i,'缺少題幹或正文。');
      if (['content','exercise','task'].includes(i.type) && !text(get('instruction')?.text)) add(i,'缺少學生可直接執行的越南語說明。');
      if (i.type === 'grammar' && !text(get('explanation')?.text)) add(i,'缺少越南語語法說明。');
      if (['exercise','task'].includes(i.type)) {
        if (!EXERCISES.includes(i.exerciseType)) add(i,'請選擇已定義的練習題型。');
        if (!text(get('body')?.backText)) add(i,'缺少完整句答案或參考作答。');
        if (get('body')?.type !== 'reveal') add(i,'練習答案須放在可揭示的背面，不可與題幹同時顯示。');
        if (p.course==='KN2' && i.exerciseType==='vocabulary-drill' && !text(i.exception)) add(i,'KN2 不另設生詞小練習；教師指定例外須記錄理由。');
      }
      if (i.type === 'vocabulary') {
        if (!text(get('pinyin')?.text) || !text(get('examples')?.text)) add(i,'生詞頁缺少拼音或例句。');
        if (get('body')?.type !== 'flashcard' || (get('body')?.backText || '').split('\n').filter(text).length !== 2) add(i,'生詞卡背面須為兩行：越南語詞性、越南語翻譯。');
      }
      for (const b of i.blocks) {
        if (b.type==='image' && !text(b.text)) add(i,'圖片缺少內容說明。');
        for (const a of b.annotations || []) if (!text(a.word)||!text(a.pinyin)||!text(a.vi)||!(b.text+'\n'+b.backText).includes(a.word)) add(i,'超綱標注須含正文中的詞、拼音及越南語釋義。');
      }
      if (includeReview && !isReviewed(p,i)) add(i,'內容／答案／語言與超綱詞尚未核對，或修改後需要重新核對。');
    }
    return out;
  }
  function approve(p, itemId, confirmed) {
    const i=p.items.find(i=>i.id===itemId); if (!i) throw Error('找不到課程項目。');
    const failed=issues(p,false).filter(x=>x.itemId===itemId);
    if(failed.length) throw Error(failed.map(x=>x.message).join('\n'));
    if (!confirmed) throw Error('請先核對教材、答案、越南語說明、簡體中文與超綱詞。');
    i.review={fingerprint:itemFingerprint(p,i),checkedAt:new Date().toISOString()};
  }
  function projection(d) {return JSON.stringify(d.slides);}
  function contentSnapshot(p) {return JSON.stringify({title:p.title,course:p.course,items:p.items.map(i=>[i.id,itemFingerprint(p,i)])});}
  function migrate(d) {
    if (d.lessonPackage) {d.lessonPackage=validatePackage(d.lessonPackage);d.layoutOverrides ||= {};d.workflow ||= {generated:false,projection:'',generatedContent:''};return d;}
    const p=newPackage(d.title);d.lessonPackage=p;d.layoutOverrides={};
    for(const s of d.slides){const i=newItem('content');i.id=s.id;i.title=s.title;i.origin='legacy';i.notes=s.notes;i.blocks=s.elements.map((e,n)=>({...pick(e,CONTENT),role:e.role||(n===0?'title':n===1?'body':'extra'),annotations:copy(e.annotations||[])}));s.elements.forEach((e,n)=>e.role=i.blocks[n].role);p.items.push(i);}
    d.workflow={generated:true,projection:projection(d),generatedContent:'',legacy:true};
    captureLayout(d);return d;
  }
  function captureLayout(d) {
    for(const s of d.slides) d.layoutOverrides[s.id]={background:s.background,order:s.elements.map(e=>e.id),elements:Object.fromEntries(s.elements.map(e=>[e.id,pick(e,LAYOUT)]))};
  }
  function reconcile(d) {
    if (!d.lessonPackage) migrate(d);
    if (!d.workflow.generated || projection(d)===d.workflow.projection) return;
    const p=d.lessonPackage, old=new Map(p.items.map(i=>[i.id,i]));
    p.items=d.slides.map(s=>{
      let i=old.get(s.id);
      if(!i){i=newItem('content');i.id=s.id;i.origin='supplement';}
      const blocks=s.elements.map(e=>({...pick(e,CONTENT),role:e.role||'extra',annotations:copy(e.annotations||[])}));
      if(JSON.stringify(contentBlocks(blocks))!==JSON.stringify(contentBlocks(i.blocks))||s.title!==i.title){i.review=null;i.teacherEdited=true;}
      i.title=s.title;i.notes=s.notes;i.blocks=blocks;return i;
    });
    captureLayout(d);d.workflow.projection=projection(d);
  }
  function applyStackedLayout(d, slideId) {
    const s=d.slides.find(s=>s.id===slideId),i=d.lessonPackage.items.find(i=>i.id===slideId);
    if(!s||!i||!contentMatches(d))throw Error('請先從教材資料庫生成目前內容。');
    const boxes={title:{x:27,y:25,w:906,h:80},instruction:{x:27,y:112,w:906,h:85},explanation:{x:27,y:112,w:906,h:85},body:{x:27,y:205,w:906,h:270}};
    if(i.type==='vocabulary')Object.assign(boxes,{pinyin:{x:27,y:110,w:906,h:55},body:{x:27,y:175,w:906,h:135},examples:{x:27,y:320,w:906,h:165}});
    for(const e of s.elements)if(boxes[e.role])Object.assign(e,boxes[e.role]);
    reconcile(d);return d;
  }
  function template(i) {
    const s={id:i.id,title:i.title,source:'',notes:i.notes,background:'#f8f7f3',elements:[]};
    for(const b of i.blocks){
      let box={x:27,y:205,w:906,h:270,fontSize:29.33,lineHeight:44};
      if(b.role==='title') box={x:27,y:25,w:906,h:80,fontSize:36,lineHeight:48,bold:true};
      if(['instruction','explanation'].includes(b.role)) box={x:27,y:112,w:906,h:85,fontSize:24,lineHeight:32};
      if(i.type==='cover'&&b.role==='body') box={x:70,y:195,w:820,h:270,fontSize:32,lineHeight:46,align:'center'};
      if(i.type==='vocabulary'){
        if(b.role==='pinyin')box={x:27,y:128,w:350,h:60,fontSize:25,lineHeight:36,align:'center'};
        if(b.role==='body')box={x:27,y:195,w:350,h:260,fontSize:32,lineHeight:44,align:'center'};
        if(b.role==='examples')box={x:387,y:128,w:546,h:350,fontSize:29.33,lineHeight:44};
      }
      if(b.annotations?.length)box.lineHeight=64;
      s.elements.push(M.element(b.type,{...copy(b),...box}));
    }
    return s;
  }
  function generate(d) {
    migrate(d);const p=validatePackage(d.lessonPackage), failed=issues(p);
    if(failed.length)throw Error(failed.map(x=>x.message).join('\n'));
    const next=p.items.map(i=>{
      const s=template(i),src=p.sources.find(s=>s.id===i.sourceId),over=d.layoutOverrides[i.id];
      s.source='Sách giáo khoa '+src.name+' · P'+i.pages.join(', ')+(i.origin==='supplement'?' · Bài tập bổ sung':'');
      if(over){s.background=over.background||s.background;for(const e of s.elements)Object.assign(e,pick(over.elements?.[e.id]||{},LAYOUT));s.elements.sort((a,b)=>{const order=Array.isArray(over.order)?over.order:[];return (order.includes(a.id)?order.indexOf(a.id):9999)-(order.includes(b.id)?order.indexOf(b.id):9999);});}
      return s;
    });
    const validated=M.validate({...d,slides:next});d.lessonPackage=p;d.title=p.title;d.slides=validated.slides;
    d.workflow={generated:true,projection:projection(d),generatedContent:contentSnapshot(p)};return d;
  }
  function contentMatches(d) {
    const canonical=d.lessonPackage.items.map(i=>({id:i.id,title:i.title,blocks:i.blocks.map(b=>pick(b,CONTENT))}));
    const rendered=d.slides.map(s=>({id:s.id,title:s.title,blocks:s.elements.map(b=>pick({...b,annotations:b.annotations||[]},CONTENT))}));
    for(const row of canonical)row.blocks.sort((a,b)=>a.id.localeCompare(b.id));for(const row of rendered)row.blocks.sort((a,b)=>a.id.localeCompare(b.id));
    return JSON.stringify(canonical)===JSON.stringify(rendered);
  }
  function releaseIssues(d) {
    migrate(d);reconcile(d);const out=issues(d.lessonPackage);
    if(!d.workflow.generated)out.push({itemId:'',message:'請先由教材資料庫生成投影片。'});
    if(d.workflow.generatedContent!==contentSnapshot(d.lessonPackage))out.push({itemId:'',message:'教材內容已變更；請核對後重新生成，會保留手動版面。'});
    if(!contentMatches(d))out.push({itemId:'',message:'投影片與教材資料庫內容不一致，請重新生成。'});
    for(const s of d.slides)for(const e of s.elements){
      if(e.x<27||e.x+e.w>933||e.y<20||e.y+e.h>495)out.push({itemId:s.id,message:s.title+'：物件超出內容安全區，請移回或拆頁。'});
      if(e.role==='body'&&e.type!=='image'&&e.fontSize<24)out.push({itemId:s.id,message:s.title+'：正文過小，請放大或拆頁。'});
    }
    return out;
  }
  function studentView(d) {
    return {title:d.title,slides:d.slides.map(s=>({id:s.id,title:s.title,background:s.background,source:s.source,elements:s.elements.map(e=>pick(e,[...CONTENT,...LAYOUT]))}))};
  }
  root.CourseWorkflow={newPackage,newCourse,newItem,source,validatePackage,itemFingerprint,isReviewed,issues,approve,migrate,reconcile,generate,releaseIssues,contentMatches,contentSnapshot,studentView,applyStackedLayout,TYPES,EXERCISES};
  if(typeof module!=='undefined')module.exports=root.CourseWorkflow;
})(globalThis);
