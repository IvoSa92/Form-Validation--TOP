// DOM ELEMENTS:

const submitButton = document.querySelector("#submit-btn");
const form = document.querySelector("form");
const inputs = document.querySelectorAll(".input");
const emailInput = document.querySelector("#email-input");
const countryInput = document.querySelector("#country-input");
const zipInput = document.querySelector("#zip-input");
const passwordInput = document.querySelector("#password-input");
const passwordConfInput = document.querySelector("#password-conf-input");

// event listeners for the inputs with the checking functions
emailInput.addEventListener("blur", checkMailInput);
countryInput.addEventListener("blur", checkCountryInput);
zipInput.addEventListener("blur", checkZipInput);
passwordInput.addEventListener("blur", checkPassword);
passwordConfInput.addEventListener("blur", passwordCheckingFunctions);
form.addEventListener("submit", submitForm);

//functions for the input checks
function checkMailInput() {
  if (emailInput.value.includes("@") && emailInput.value.length > 5) {
    emailInput.classList.remove("invalid");
    emailInput.classList.add("valid");
    return true;
  } else {
    emailInput.classList.remove("valid");
    emailInput.classList.add("invalid");
    console.log("mail false");

    return false;
  }
}

function checkCountryInput() {
  if (countryInput.value.match(/^[A-Za-z-]+$/)) {
    countryInput.classList.remove("invalid");
    countryInput.classList.add("valid");
    return true;
  } else {
    countryInput.classList.remove("valid");
    countryInput.classList.add("invalid");
    console.log("country false");

    return false;
  }
}

function checkZipInput() {
  if (zipInput.value.length > 3) {
    zipInput.classList.remove("invalid");
    zipInput.classList.add("valid");
    return true;
  } else {
    zipInput.classList.remove("valid");
    zipInput.classList.add("invalid");
    console.log("zip false");

    return false;
  }
}

function checkPassword() {
  let hasNumber = /[A-Z]/.test(passwordInput.value);
  let hasPunctuation = /\d/.test(passwordInput.value);
  let hasUpperCase = /[!@#$%^&*(),.?":{}|<>]/.test(passwordInput.value);

  if (
    hasNumber &&
    hasPunctuation &&
    hasUpperCase &&
    passwordInput.value.length > 5
  ) {
    passwordInput.classList.remove("invalid");
    passwordInput.classList.add("valid");
    return true;
  } else {
    passwordInput.classList.remove("valid");
    passwordInput.classList.add("invalid");
    console.log("pw false");
    return false;
  }
}

function checkConfPassword() {
  let hasNumber = /[A-Z]/.test(passwordConfInput.value);
  let hasPunctuation = /\d/.test(passwordConfInput.value);
  let hasUpperCase = /[!@#$%^&*(),.?":{}|<>]/.test(passwordConfInput.value);

  if (
    hasNumber &&
    hasPunctuation &&
    hasUpperCase &&
    passwordConfInput.value.length > 5
  ) {
    passwordConfInput.classList.remove("invalid");
    passwordConfInput.classList.add("valid");
    return true;
  } else {
    passwordConfInput.classList.remove("valid");
    passwordConfInput.classList.add("invalid");
    console.log("pw conf false");
    return false;
  }
}

function checkPwSimilarity() {
  if (passwordInput.value === passwordConfInput.value) {
    console.log("passwörter sind gleich ");
  }
}

function passwordCheckingFunctions() {
  checkConfPassword();
  checkPassword();
  checkPwSimilarity();
}

function submitForm(e) {
  e.preventDefault();
  const allCheckingFunctions = [
    checkMailInput,
    checkCountryInput,
    checkZipInput,
    checkPassword,
    checkConfPassword,
  ];

  if (allCheckingFunctions.every((condition) => condition())) {
    console.log("all true alter");
  } else {
    console.log("you fucked up");
  }
}
