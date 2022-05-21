const textInput = document.querySelector('#validation-input');

const inputDataLength = textInput.dataset.length;


textInput.addEventListener('blur', () =>
    inputDataLength <= textInput.value.length
        ? textInput.classList.add('valid')
        : textInput.classList.add('invalid')
);

textInput.addEventListener('blur', () =>
    inputDataLength <= textInput.value.length
        ? textInput.classList.remove('invalid')
        : textInput.classList.remove('valid')
);


