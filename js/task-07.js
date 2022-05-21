const controlFontSizeEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');



controlFontSizeEl.addEventListener('input', () => {
   textEl.style.fontSize = controlFontSizeEl.value + 'px'
});




