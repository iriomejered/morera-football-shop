function listenForValidation() {
  const PERSONAL_DATA_FORM = document.getElementById("personal-data-form");
  PERSONAL_DATA_FORM.addEventListener("submit", validatePersonalDataForm);
}

function validatePersonalDataForm(e) {

  const NAME = e.target.name.value;
  const SURNAME_1 = e.target["surname-1"].value;
  const SURNAME_2 = e.target["surname-2"].value;
  const EMAIL = e.target.email.value;

  let valid = true;

  if (!NAME) {
    document.getElementById("form-name").style.visibility = "visible";
    valid = false;
  } else document.getElementById("form-name").style.visibility = "hidden";

  if (!SURNAME_1) {
    document.getElementById("form-surname-1").style.visibility = "visible";
    valid = false;
  } else document.getElementById("form-surname-1").style.visibility = "hidden";

  if (!SURNAME_2) {
    document.getElementById("form-surname-2").style.visibility = "visible";
    valid = false;
  } else document.getElementById("form-surname-2").style.visibility = "hidden";

  if (!EMAIL) {
    document.getElementById("form-email").style.visibility = "visible";
    valid = false;
  } else if (!validateEmail(EMAIL)) {
    document.getElementById("form-email").style.visibility = "visible";
    document.getElementById("form-email").innerText = "Email inválido";
    valid = false;
  } else {
    document.getElementById("form-email").style.visibility = "hidden";
    document.getElementById("form-email").innerText = "";
  }

  if (!valid) {
    e.preventDefault();
  } else {
    saveData(NAME, SURNAME_1, SURNAME_2, EMAIL);
  }
}

function validateEmail(email) {
  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return EMAIL_REGEX.test(email);
}

function saveData(name, surname_1, surname_2, email) {
  localStorage.setItem("name", name);
  localStorage.setItem("surname-1", surname_1);
  localStorage.setItem("surname-2", surname_2);
  localStorage.setItem("email", email);
}

listenForValidation();
