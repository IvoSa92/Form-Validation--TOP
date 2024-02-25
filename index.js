// DOM ELEMENTS:

const submitButton = document.querySelector("#submit-btn");
const form = document.querySelector("form");
const inputs = document.querySelectorAll(".input");
const emailInput = document.querySelector("#email-input");
const countryInput = document.querySelector("#country-input");
const zipInput = document.querySelector("#zip-input");
const passwordInput = document.querySelector("#password-input");
const passwordConfInput = document.querySelector("#password-conf-input");
const validIcons = document.querySelectorAll(".valid_");
const invalidIcons = document.querySelectorAll(".invalid_");
const passwordSection = document.querySelector(".password-section");

// password functions
const allCheckingFunctions = [
  checkMailInput,
  checkCountryInput,
  checkZipInput,
  checkPassword,
  checkConfPassword,
];

// event listeners for the inputs with the checking functions
emailInput.addEventListener("blur", checkMailInput);
countryInput.addEventListener("blur", checkCountryInput);
zipInput.addEventListener("blur", checkZipInput);
passwordInput.addEventListener("blur", passwordCheckingFunctions);
passwordConfInput.addEventListener("blur", passwordCheckingFunctions);
form.addEventListener("submit", submitForm);

//functions for the input checks
function checkMailInput() {
  if (emailInput.value.includes("@") && emailInput.value.length > 5) {
    emailInput.classList.remove("invalid");
    emailInput.classList.add("valid");
    validIcons[0].classList.add("active");
    invalidIcons[0].classList.remove("active");
    return true;
  } else {
    emailInput.classList.remove("valid");
    emailInput.classList.add("invalid");
    validIcons[0].classList.remove("active");
    invalidIcons[0].classList.add("active");

    return false;
  }
}

function checkCountryInput() {
  if (countryInput.value.match(/^[A-Za-z-]+$/)) {
    countryInput.classList.remove("invalid");
    countryInput.classList.add("valid");
    validIcons[1].classList.add("active");
    invalidIcons[1].classList.remove("active");

    return true;
  } else {
    countryInput.classList.remove("valid");
    countryInput.classList.add("invalid");
    validIcons[1].classList.remove("active");
    invalidIcons[1].classList.add("active");

    return false;
  }
}

function checkZipInput() {
  if (zipInput.value.length > 3) {
    zipInput.classList.remove("invalid");
    zipInput.classList.add("valid");
    validIcons[2].classList.add("active");
    invalidIcons[2].classList.remove("active");

    return true;
  } else {
    zipInput.classList.remove("valid");
    zipInput.classList.add("invalid");
    validIcons[2].classList.remove("active");
    invalidIcons[2].classList.add("active");

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
    validIcons[3].classList.add("active");
    invalidIcons[3].classList.remove("active");

    return true;
  } else {
    passwordInput.classList.remove("valid");
    passwordInput.classList.add("invalid");
    validIcons[3].classList.remove("active");
    invalidIcons[3].classList.add("active");

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
    validIcons[4].classList.add("active");
    invalidIcons[4].classList.remove("active");

    return true;
  } else {
    passwordConfInput.classList.remove("valid");
    passwordConfInput.classList.add("invalid");
    validIcons[4].classList.remove("active");
    invalidIcons[4].classList.add("active");

    return false;
  }
}

function checkPwSimilarity() {
  let confirmed = false;
  if (
    passwordInput.value === passwordConfInput.value &&
    passwordInput.value != "" &&
    passwordConfInput.value != "" &&
    !confirmed
  ) {
    passwordSection.classList.add("password-confirmed");
    confirmed = true;
  } else if (passwordConfInput.value != passwordInput.value) {
    passwordSection.classList.remove("password-confirmed");
    confirmed = false;
  }
}

function passwordCheckingFunctions() {
  checkConfPassword();
  checkPassword();
  checkPwSimilarity();
  if (allCheckingFunctions.every((condition) => condition())) {
    submitButton.classList.toggle("submit-active");
  }
}

function submitForm(e) {
  e.preventDefault();

  if (allCheckingFunctions.every((condition) => condition())) {
    console.log("all true alter");
  } else {
    console.log("you fucked up");
  }
}

//submitButton.classList.toggle("submit-active");
