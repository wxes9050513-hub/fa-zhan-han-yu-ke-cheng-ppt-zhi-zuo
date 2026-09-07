#!/usr/bin/env node
'use strict';
const fs=require('node:fs'),path=require('node:path');
const M=require('../editor/model.js'),W=require('../editor/workflow.js');
// Rebuild from the reviewed database, optionally carrying a previously edited deck.
const [input,output,previous]=process.argv.slice(2);
try {
  if(!input||!output)throw Error('用法：node scripts/build_course.cjs lesson.lesson.json output.slides.json [previous.slides.json]');
  const target=path.resolve(output);
  if(fs.existsSync(target))throw Error('輸出已存在，請使用新的檔名，保留上一版。');
  const pkg=W.validatePackage(JSON.parse(fs.readFileSync(path.resolve(input),'utf8')));
  const deck=previous?W.migrate(M.validate(JSON.parse(fs.readFileSync(path.resolve(previous),'utf8')))):W.newCourse();
  if(previous&&deck.lessonPackage.id!==pkg.id)throw Error('舊版投影片與教材包不是同一課，不能套用版面。');
  deck.lessonPackage=pkg;W.generate(deck);
  const issues=W.releaseIssues(deck);if(issues.length)throw Error(issues.map(x=>x.message).join('\n'));
  fs.mkdirSync(path.dirname(target),{recursive:true});fs.writeFileSync(target,JSON.stringify(deck,null,2),{flag:'wx'});
  console.log('已生成 '+deck.slides.length+' 頁可編輯投影片。正式匯出前，瀏覽器會再檢查正反面文字是否放得下。');
}catch(error){console.error(error.message);process.exitCode=1;}
