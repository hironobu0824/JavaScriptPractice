'use strict';

document.getElementById('time').textContent = new Date();

document.getElementById('quizButton').onclick = function() {
  location.href = "quiz.html";
}

document.getElementById('memo').onclick = function() {
  location.href = "memo.html";
}

document.querySelector('#dubbleClickButton').addEventListener('dblclick', () => {
  document.querySelector('#dubbleClickNotice').textContent = "ダブルクリックしました。（シングルクリックで取り消せます）"
})

document.querySelector('#dubbleClickButton').addEventListener('click', () => {
  document.querySelector('#dubbleClickNotice').textContent = ""
})

document.addEventListener('mousemove', e => {
  document.querySelector('#clientXY').textContent = `x座標:${e.clientX},y座標:${e.clientY}`
});
document.addEventListener('keydown', e => {
  document.querySelector('#pressKey').textContent = `あなたが押したキー:${e.key}`
});

const text = document.querySelector('textarea');
text.addEventListener('focus', () => {
  console.log('focus');
});
text.addEventListener('blur', () => {
  console.log('blur');
});
text.addEventListener('input', () => {
  document.querySelector('#textCount').textContent = `${text.value.length}文字`;
});

document.querySelector('form').addEventListener('submit', e => {
  e.preventDefault();
  
})