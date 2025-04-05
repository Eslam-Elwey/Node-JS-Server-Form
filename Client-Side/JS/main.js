// #regionElemnts

const userNameInputElement = document.querySelector(".userName");
const emailInputElement = document.querySelector(".email");
const phoneNoInputElement = document.querySelector(".phone");
const addressInputElement = document.querySelector(".address");
const myForm = document.querySelector(".my-form");
const submitButton = document.querySelector(".sub-button");

// #endregion

// #region Regex

const userNameRegex = /^[a-zA-z _]{8,20}$/;
const emailRegex = /^[a-zA-z0-9._]{3,}@[a-zA-Z]{3,}.com$/;
const phoneRegex = /^(011|012|010|015)[0-9]{8}$/;
const addressRegex = /^[a-zA-z0-9 ._#]{3,}$/;

// #endregion

//#region setting from Session storage

let namecheckResult = sessionStorage.getItem("namecheckResult");
let phonecheckResult = sessionStorage.getItem("phonecheckResult");
let addrsscheckResult = sessionStorage.getItem("addrsscheckResult");
let emailcheckResult = sessionStorage.getItem("emailcheckResult");

userNameInputElement.value = sessionStorage.getItem("userName");
emailInputElement.value = sessionStorage.getItem("Email");
phoneNoInputElement.value = sessionStorage.getItem("phoneNumber");
addressInputElement.value = sessionStorage.getItem("address");

//#endregion

//#region userName Ckeck
userNameInputElement.addEventListener("input", function () {
  let inputVal = userNameInputElement.value;

  let checkRes = userNameRegex.test(inputVal);
  sessionStorage.setItem("userName", inputVal);
  if (checkRes) {
    userNameInputElement.classList.add("is-valid");
    userNameInputElement.classList.remove("is-invalid");
    namecheckResult = true;
  } else {
    userNameInputElement.classList.add("is-invalid");
    userNameInputElement.classList.remove("is-valid");
    namecheckResult = false;
  }

  sessionStorage.setItem("namecheckResult", namecheckResult);
});

userNameInputElement.addEventListener("blur", function () {
  userNameInputElement.classList.remove("is-invalid");
  userNameInputElement.classList.remove("is-valid");
  if (userNameInputElement.value.length === 0) {
    namecheckResult = false;
  }
});

userNameInputElement.addEventListener("keyup", function (e) {
  if (e.code === "Backspace") {
    if (userNameInputElement.value.length === 0) {
      namecheckResult = false;
    }
  }
});

userNameInputElement.addEventListener("focus", function () {
  let inputVal = userNameInputElement.value;

  let checkRes = userNameRegex.test(inputVal);
  if (checkRes) {
    userNameInputElement.classList.add("is-valid");
    userNameInputElement.classList.remove("is-invalid");
    namecheckResult = true;
  } else {
    userNameInputElement.classList.add("is-invalid");
    userNameInputElement.classList.remove("is-valid");
    namecheckResult = false;
  }
});

// #endregion

//#region email Ckeck
emailInputElement.addEventListener("input", function () {
  let inputVal = emailInputElement.value;

  sessionStorage.setItem("Email", inputVal);
  let checkRes = emailRegex.test(inputVal);
  if (checkRes) {
    emailInputElement.classList.add("is-valid");
    emailInputElement.classList.remove("is-invalid");
    emailcheckResult = true;
  } else {
    emailInputElement.classList.add("is-invalid");
    emailInputElement.classList.remove("is-valid");
    emailcheckResult = false;
  }
  sessionStorage.setItem("emailcheckResult", emailcheckResult);
});

emailInputElement.addEventListener("blur", function () {
  emailInputElement.classList.remove("is-invalid");
  emailInputElement.classList.remove("is-valid");
  if (emailInputElement.value.length === 0) {
    emailcheckResult = false;
  }
});

emailInputElement.addEventListener("keyup", function (e) {
  if (e.code === "Backspace") {
    if (emailInputElement.value.length === 0) {
      emailcheckResult = false;
    }
  }
});

emailInputElement.addEventListener("focus", function () {
  let inputVal = emailInputElement.value;

  let checkRes = emailRegex.test(inputVal);
  if (checkRes) {
    emailInputElement.classList.add("is-valid");
    emailInputElement.classList.remove("is-invalid");
    emailcheckResult = true;
  } else {
    emailInputElement.classList.add("is-invalid");
    emailInputElement.classList.remove("is-valid");
    emailcheckResult = false;
  }
});

// #endregion

//#region Phone Ckeck
phoneNoInputElement.addEventListener("input", function () {
  let inputVal = phoneNoInputElement.value;

  sessionStorage.setItem("phoneNumber", inputVal);
  let checkRes = phoneRegex.test(inputVal);
  if (checkRes) {
    phoneNoInputElement.classList.add("is-valid");
    phoneNoInputElement.classList.remove("is-invalid");
    phonecheckResult = true;
  } else {
    phoneNoInputElement.classList.add("is-invalid");
    phoneNoInputElement.classList.remove("is-valid");
    phonecheckResult = false;
  }
  sessionStorage.setItem("phonecheckResult", phonecheckResult);
});

phoneNoInputElement.addEventListener("blur", function () {
  phoneNoInputElement.classList.remove("is-invalid");
  phoneNoInputElement.classList.remove("is-valid");
  if (phoneNoInputElement.value.length === 0) {
    phonecheckResult = false;
  }
});

phoneNoInputElement.addEventListener("focus", function () {
  let inputVal = phoneNoInputElement.value;

  let checkRes = phoneRegex.test(inputVal);
  if (checkRes) {
    phoneNoInputElement.classList.add("is-valid");
    phoneNoInputElement.classList.remove("is-invalid");
    phonecheckResult = true;
  } else {
    phoneNoInputElement.classList.add("is-invalid");
    phoneNoInputElement.classList.remove("is-valid");
    phonecheckResult = false;
  }
});

phoneNoInputElement.addEventListener("keyup", function (e) {
  if (e.code === "Backspace") {
    if (phoneNoInputElement.value.length === 0) {
      phonecheckResult = false;
    }
  }
});

// #endregion

//#region Address Ckeck
addressInputElement.addEventListener("input", function () {
  let inputVal = addressInputElement.value;

  sessionStorage.setItem("address", inputVal);
  let checkRes = addressRegex.test(inputVal);
  if (checkRes) {
    addressInputElement.classList.add("is-valid");
    addressInputElement.classList.remove("is-invalid");
    addrsscheckResult = true;
  } else {
    addressInputElement.classList.add("is-invalid");
    addressInputElement.classList.remove("is-valid");
    addrsscheckResult = false;
  }

  sessionStorage.setItem("addrsscheckResult", addrsscheckResult);
});

addressInputElement.addEventListener("blur", function () {
  if (addressInputElement.value.length === 0) {
    addrsscheckResult = false;
  }
  addressInputElement.classList.remove("is-invalid");
  addressInputElement.classList.remove("is-valid");
});

addressInputElement.addEventListener("keyup", function (e) {
  if (e.code === "Backspace") {
    if (addressInputElement.value.length === 0) {
      addrsscheckResult = false;
    }
  }
});

addressInputElement.addEventListener("focus", function () {
  let inputVal = addressInputElement.value;

  let checkRes = addressRegex.test(inputVal);
  if (checkRes) {
    addressInputElement.classList.add("is-valid");
    addressInputElement.classList.remove("is-invalid");
    addrsscheckResult = true;
  } else {
    addressInputElement.classList.add("is-invalid");
    addressInputElement.classList.remove("is-valid");
    addrsscheckResult = false;
  }
});

// #endregion

//#region button click
submitButton.addEventListener("click", function () {
  if (
    namecheckResult &&
    phonecheckResult &&
    addrsscheckResult &&
    emailcheckResult
  ) {
    myForm.setAttribute("action", "./welcome.html");
  } else {
    ShowCauseOfError();
    myForm.setAttribute("action", "./form.html");
  }
});

// #endregion

// #region handle Cause of Error in Form
function ShowCauseOfError() {
  if (!namecheckResult) {
    alert(
      "User Name Field Must consist of characters and Spaces And Underscores"
    );
  } else if (!emailcheckResult) {
    alert(
      "email should follow this format 'name@dom.com' domainName At least 3 Chars"
    );
  } else if (!phonecheckResult) {
    alert(
      "Phone should Consists of 11 numbers only and start with either(011,012,010,015)"
    );
  } else if (!addrsscheckResult) {
    alert("Address should Consist of 3 letters at least");
  }
}
//#endregion
