(function(root){
'use strict';
const id=()=>globalThis.crypto?.randomUUID?.()||('id-'+Date.now().toString(36)+'-'+Math.random().toString(36).slice(2));
const clone=x=>JSON.parse(JSON.stringify(x));
const color=v=>/^#[0-9a-f]{6}$/i.test(v)?v:'#17324d';
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
function element(type='text',extra={}){return {id:id(),type,x:80,y:150,w:500,h:100,text:'新增文字',backText:'答案',fontSize:30,color:'#17324d',background:'#ffffff',align:'left',bold:false,locked:false,...extra};}
function slide(title='新投影片'){return {id:id(),title,background:'#f8f7f3',source:'',notes:'',elements:[element('text',{x:40,y:32,w:880,h:85,text:title,fontSize:36,bold:true})]};}
function blank(){return {version:1,id:id(),title:'未命名課程',slides:[slide()]};}
function validate(raw){
 if(!raw||raw.version!==1||!Array.isArray(raw.slides)||!raw.slides.length||raw.slides.length>500)throw Error('課程格式不正確，或投影片超過 500 頁。');
 const d=clone(raw),ids=new Set();
 const unique=v=>{if(typeof v!=='string'||!/^[-a-zA-Z0-9_]{1,100}$/.test(v)||ids.has(v))throw Error('課程內有重複或遺失的物件 ID。');ids.add(v);};
 unique(d.id);if(typeof d.title!=='string'||d.title.length>500)throw Error('課程名稱不正確。');
 for(const s of d.slides){unique(s.id);if(typeof s.title!=='string'||typeof s.notes!=='string'||!Array.isArray(s.elements)||s.elements.length>200)throw Error('投影片資料不完整。');s.background=color(s.background);s.source=String(s.source||'').slice(0,1000);
 for(const e of s.elements){unique(e.id);if(!['text','image','shape','flashcard','reveal'].includes(e.type))throw Error('不支援這種物件。');
 for(const k of ['x','y','w','h','fontSize'])if(typeof e[k]!=='number'||!Number.isFinite(e[k]))throw Error('物件位置或字級不正確。');
 if(e.w<20||e.h<20||e.w>960||e.h>540||e.x<0||e.y<0||e.x+e.w>960.1||e.y+e.h>540.1||e.fontSize<8||e.fontSize>150)throw Error('物件超出畫布，或尺寸不正確。');
 for(const k of ['text','backText'])if(typeof e[k]!=='string'||e[k].length>50000)throw Error('文字資料不正確。');
 e.color=color(e.color);e.background=color(e.background);e.align=['left','center','right'].includes(e.align)?e.align:'left';e.bold=!!e.bold;e.locked=!!e.locked;
 if(e.lineHeight!==undefined&&(typeof e.lineHeight!=='number'||!Number.isFinite(e.lineHeight)||e.lineHeight<12||e.lineHeight>200))throw Error('行高格式不正確。');
 if(e.annotations!==undefined&&(!Array.isArray(e.annotations)||e.annotations.length>100||e.annotations.some(a=>!a||['word','pinyin','vi'].some(k=>typeof a[k]!=='string'||a[k].length>300))))throw Error('超綱標注格式不正確。');
 if(e.type==='image'&&(!/^data:image\/(png|jpeg|webp|gif);base64,[A-Za-z0-9+/=\s]+$/.test(e.src||'')||e.src.length>14000000))throw Error('圖片請使用 PNG、JPG、WebP 或 GIF，且不超過 10 MB。');
 }}if(d.lessonPackage&&root.CourseWorkflow)d.lessonPackage=root.CourseWorkflow.validatePackage(d.lessonPackage);return d;
}
function renderElement(e,interactive=false){const n=document.createElement(interactive&&['flashcard','reveal'].includes(e.type)?'button':'div');n.className='slide-element type-'+e.type;n.dataset.id=e.id;
 Object.assign(n.style,{left:e.x+'px',top:e.y+'px',width:e.w+'px',height:e.h+'px',fontSize:e.fontSize+'px',fontWeight:e.bold?'700':'400',color:e.color,background:e.type==='text'?'transparent':e.background,textAlign:e.align});
 if(e.lineHeight)n.style.lineHeight=e.lineHeight+'px';
 if(e.type==='image'){const img=document.createElement('img');img.src=e.src;img.alt=e.text||'教材圖片';img.draggable=false;n.append(img);}
 else{const t=document.createElement('div');t.className='element-text';
 const renderText=value=>{t.replaceChildren();const annotations=(e.annotations||[]).filter(a=>a.word).sort((a,b)=>b.word.length-a.word.length);let rest=value;while(rest){let found=null,pos=rest.length;for(const a of annotations){const at=rest.indexOf(a.word);if(at>=0&&at<pos){pos=at;found=a;}}if(!found){t.append(document.createTextNode(rest));break;}t.append(document.createTextNode(rest.slice(0,pos)));const ruby=document.createElement('span');ruby.className='word-annotation';for(const [cls,value] of [['pinyin',found.pinyin],['hanzi',found.word],['meaning',found.vi]]){const span=document.createElement('span');span.className=cls;span.textContent=value;ruby.append(span);}t.append(ruby);rest=rest.slice(pos+found.word.length);}};
 renderText(e.text);if(e.type==='flashcard')t.style.justifyContent=({left:'flex-start',center:'center',right:'flex-end'})[e.align];n.append(t);
 if(interactive&&['flashcard','reveal'].includes(e.type)){n.setAttribute('aria-label',e.type==='flashcard'?'Lật thẻ: '+e.text:'Hiện đáp án: '+e.text);n.onclick=()=>{const back=n.classList.toggle('flipped');renderText(back?e.backText:e.text);n.setAttribute('aria-pressed',String(back));};}}
 return n;
}
function paint(s,target,interactive=false){target.replaceChildren();target.style.background=s.background;for(const e of s.elements)target.append(renderElement(e,interactive));if(s.source){const f=document.createElement('div');f.className='source';f.textContent=s.source;target.append(f);}}
const slideCSS='*{box-sizing:border-box}.slide-canvas{position:relative;width:960px;height:540px;overflow:hidden;font-family:"Noto Sans SC","PingFang SC","Microsoft YaHei",sans-serif}.slide-element{position:absolute;padding:10px;border:0;line-height:1.45;white-space:pre-wrap;overflow:hidden;font-family:inherit}.element-text{width:100%;height:100%;overflow:hidden}.type-image{padding:0;background:transparent!important}.type-image img{width:100%;height:100%;object-fit:contain}.type-shape,.type-flashcard,.type-reveal{border-radius:12px}.type-flashcard,.type-reveal{box-shadow:0 2px 8px #17324d12}.type-flashcard .element-text{display:flex;align-items:center;justify-content:center}.source{position:absolute;bottom:10px;left:27px;font-size:11px;color:#626975}button.slide-element{cursor:pointer}button.slide-element:focus-visible{outline:3px solid #368c89;outline-offset:-3px}';
root.SlideModel={id,clone,clamp,element,slide,blank,validate,renderElement,paint,slideCSS:slideCSS+'.word-annotation{display:inline-grid;grid-template-rows:14px 1em 14px;vertical-align:middle;line-height:1;text-align:center}.word-annotation .pinyin,.word-annotation .meaning{font-size:9.33px;line-height:14px;white-space:nowrap}.word-annotation .pinyin{color:#745397}.word-annotation .meaning{color:#317f79}.source{max-width:906px;white-space:nowrap;overflow:hidden}'};
if(typeof module!=='undefined')module.exports=root.SlideModel;
})(globalThis);
