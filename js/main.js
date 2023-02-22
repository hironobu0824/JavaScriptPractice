'use strict';

const dayname = ['日','月','火','水','木','金','土'];

setDate();

function setDate() {
  document.getElementById('time').textContent = dateFormat(new Date());
  setTimeout(setDate,1000);
}

function dateFormat(date) {
  return date.getFullYear().toString() + '年' + (date.getMonth()+1).toString() + '月' + date.getDate().toString() + '日(' + dayname[date.getDay().toString()] + ')' + date.getHours().toString() + '時' + date.getMinutes().toString() + '分' + date.getSeconds().toString() + '秒';
}

document.querySelector('#dubbleClickButton').addEventListener('dblclick', () => {
  window.alert("ダブルクリックしました。");
})

// document.querySelector('#dubbleClickButton').addEventListener('click', () => {
//   window.alert("シングルクリックしました。");
// })

document.addEventListener('mousemove', e => {
  document.querySelector('#clientXY').textContent = `x座標:${e.clientX},y座標:${e.clientY}`
});
document.addEventListener('keydown', e => {
  document.querySelector('#pressKey').textContent = `あなたが押したキー:${e.key}`
});

const text = document.querySelector('textarea');
text.addEventListener('focus', () => {
  document.getElementById('text-area').classList.replace('non-focus-textarea','focus-textarea');
});
text.addEventListener('blur', () => {
  document.getElementById('text-area').classList.replace('focus-textarea','non-focus-textarea');
});
text.addEventListener('input', () => {
  document.querySelector('#textCount').textContent = `${text.value.length}文字`;
});

document.querySelector('form').addEventListener('submit', e => {
  e.preventDefault();
  
})
