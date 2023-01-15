'use strict';

document.querySelector('button').addEventListener('click', () => {
  const li = document.createElement('li');
  const text = document.querySelector('input');
  const color = document.querySelector('select');
  const fontWeight = document.querySelectorAll('input[name="font-weight"]');

  let selectedFontWeight;

  console.log(fontWeight);
  fontWeight.forEach(type => {
    if (type.checked === true) {
      selectedFontWeight = type.value;
    }
  });

  li.textContent = `${text.value} / ${color.value} / ${color.selectedIndex}`;
  li.style.fontWeight = selectedFontWeight;
  document.querySelector('ul').appendChild(li);

  text.value = '';
  text.focus();
})

document.getElementById('top').addEventListener('click',() => {
  location.href = "index.html";
})