var QUESTIONS =
      [{
        questionCode: 'ul\n{ \nMaRGin: 10px;\n}',
        questionDesc: 'CSS中的属性是大小写敏感的吗？',
        questionConfig: 'hascode',
        questionType: 'css',
        questionChoice: [
          {
            value: 'false',
            content: '是'},
          {
            value: 'true',
            content: '否'}]
      },
       {
         questionCode: '',
         questionDesc: 'margin-top与margin-bottom对行内元素有效吗？',
         questionConfig: 'nocode',
         questionType: 'css',
         questionChoice: [
           {
             value: 'false',
             content: '有用'},
           {
             value: 'true',
             content: '没用'}]
       },
      {
         questionCode: '',
         questionDesc: 'window.onload与document.onload是否一样？',
         questionConfig: 'nocode',
         questionType: 'javascript',
         questionChoice: [
           {
             value: 'false',
             content: '一样'},
           {
             value: 'true',
             content: '不一样'}]
       }];
module.exports = QUESTIONS;
