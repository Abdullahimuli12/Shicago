const submitBtn = document.getElementById('submitBtn');
const emailError = document.getElementById('emailError');
const passError = document.getElementById('passError');

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if (validateEmail() && validatePassword()) {
        alert("Form Submitted Successfully");
    }
});


function validateEmail() {
    let email = document.getElementById('email').value;

    if (email.length == 0) {
        emailError.innerHTML = "Email is required";
        emailError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }

    if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        emailError.innerHTML = "Enter Valid Email";
        emailError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }
    emailError.innerHTML = "";
    emailError.previousElementSibling.classList.add('fa-check');
    return true;
}

function validatePassword() {
    let password = document.getElementById('password').value;

    if (password.length == 0) {
        passError.innerHTML = "Password is required";
        passError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }

    passError.innerHTML = "";
    passError.previousElementSibling.classList.add('fa-check');
    return true;
}

// Make a validateConfirmPassword function to validate it
