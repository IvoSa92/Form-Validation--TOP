// DOM ELEMENTS:

const submitButton = document.querySelector("#submit-btn");
const inputs = document.querySelectorAll(".input");
const emailInput = document.querySelector("#email-input");
const countryInput = document.querySelector("#country-input");
const zipInput = document.querySelector("#zip-input");
const passwordInput = document.querySelector("#password-input");
const passwordConfInput = document.querySelector("#password-conf-input");

emailInput.addEventListener("blur", checkMailInput);
countryInput.addEventListener("blur", checkCountryInput);

function checkMailInput(e) {
  let input = e.target;
  if (input.value.includes("@") && input.value.length > 5) {
    console.log("text");
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
}

function checkCountryInput(e) {
  let input = e.target;
  if (input.value.match(/^[A-Za-z-]+$/)) {
    console.log("valid");
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
}
