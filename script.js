const passBox = document.querySelector("#pass");
const passConfirmBox = document.querySelector("#pass_confirm");
const passMessage = document.querySelector("#pass-message");
const submitButton = document.querySelector('.submit-btn');

function checkPasswords() {
    console.log("hello");
    if (passBox.value === passConfirmBox.value) {
        passMessage.textContent = "";
    } else {
        passMessage.textContent = "* Passwords do not match";
    }
}

document.querySelector("form").addEventListener('submit', function(event) {
    if (passBox.value !== passConfirmBox.value) {
        event.preventDefault();
        alert("Passwords do not match. Please try again.");
    }
});

passBox.addEventListener('input', checkPasswords);
passConfirmBox.addEventListener('input', checkPasswords);
