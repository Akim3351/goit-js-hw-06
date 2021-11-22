const input = document.getElementById("validation-input");
const DATALENGTH = input.getAttribute("data-length");
input.addEventListener('input', inputValidationCheck);

function inputValidationCheck() {
    

    if (input.value.length == DATALENGTH) {
        input.classList.add('valid');
        input.classList.remove('invalid');
        return;
    }
        input.classList.add('invalid');
        input.classList.remove('valid');

};