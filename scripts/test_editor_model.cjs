const assert=require('node:assert/strict');
const M=require('../editor/model.js');
const d=M.blank();assert.deepEqual(M.validate(d),d);
let b=M.clone(d);b.slides[0].elements.push(M.clone(b.slides[0].elements[0]));assert.throws(()=>M.validate(b),/ID/);
for(const bad of [NaN,Infinity,-1,961]){b=M.clone(d);b.slides[0].elements[0].x=bad;assert.throws(()=>M.validate(b));}
b=M.clone(d);b.slides[0].elements.push(M.element('image',{src:'javascript:alert(1)'}));assert.throws(()=>M.validate(b),/圖片/);
b=M.clone(d);b.slides[0].elements[0].text='<script>alert(1)</script>';assert.equal(M.validate(b).slides[0].elements[0].text,b.slides[0].elements[0].text);
b=M.clone(d);b.version=2;assert.throws(()=>M.validate(b));
b=M.clone(d);b.slides=[];assert.throws(()=>M.validate(b));
const original=M.clone(d);d.slides[0].elements[0].x=70;const reopened=M.validate(JSON.parse(JSON.stringify(d)));assert.equal(reopened.slides[0].elements[0].x,70);assert.equal(reopened.slides[0].elements[0].id,original.slides[0].elements[0].id);
b=M.clone(d);b.slides[0].id='bad]selector';assert.throws(()=>M.validate(b),/ID/);
b=M.clone(d);b.slides[0].elements[0].fontSize='30';assert.throws(()=>M.validate(b));
b=M.clone(d);b.slides[0].elements[0].type='iframe';assert.throws(()=>M.validate(b));
console.log('Editor source model checks passed');
