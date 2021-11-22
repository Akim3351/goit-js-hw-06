const submitForm = document.querySelector(".login-form");
const emailInput = document.querySelector("input[name = email]");
const passwordInput = document.querySelector("input[name = password]");

submitForm.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    if (emailInput.value === "" || passwordInput.value === "") {
        alert("Все поля должны быть заполнены!!");
        return;
    }

    const loginData = {
        email: emailInput.value,
        password: passwordInput.value,
    };

    console.table(loginData);
    submitForm.reset();
}

