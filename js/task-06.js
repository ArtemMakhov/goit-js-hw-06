const textInput = document.querySelector('#validation-input');


textInput.addEventListener('blur', () => {
    
    const valueTextInput = textInput.value.length;
    const inputDataLength = Number(textInput.dataset.length);
  
    if (valueTextInput === inputDataLength) {
        textInput.classList.add('valid');
        textInput.classList.remove('invalid');
    } else {
        textInput.classList.add('invalid');
        textInput.classList.remove('valid');
    }
  
});






