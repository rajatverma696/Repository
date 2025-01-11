const form = document.getElementById("registrationForm");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");

const usernameError = document.getElementById("usernameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", (event) => {
    let isValid = true;

    usernameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    successMessage.classList.add("hidden");

    
    if (username.value.trim() === "") {
        usernameError.textContent = "Username is required.";
        isValid = false;
    } else if (username.value.length < 3) {
        usernameError.textContent = "Username must be at least 3 characters.";
        isValid = false;
    }

    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.trim() === "") {
        emailError.textContent = "Email is required.";
        isValid = false;
    } else if (!emailPattern.test(email.value)) {
        emailError.textContent = "Enter a valid email address.";
        isValid = false;
    }

   
    if (password.value.trim() === "") {
        passwordError.textContent = "Password is required.";
        isValid = false;
    } else if (password.value.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters.";
        isValid = false;
    }

    
    if (!isValid) {
        event.preventDefault();
    } else {
        
        event.preventDefault(); 
        successMessage.classList.remove("hidden");
        form.reset();
    }
});
