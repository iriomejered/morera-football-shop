function showData() {
  const NAME = localStorage.getItem("name");
  document.getElementById("name").innerHTML = NAME;

  const SURNAME_1 = localStorage.getItem("surname-1");
  document.getElementById("surname-1").innerHTML = SURNAME_1;

  const SURNAME_2 = localStorage.getItem("surname-2");
  document.getElementById("surname-2").innerHTML = SURNAME_2;

  const EMAIL = localStorage.getItem("email");
  document.getElementById("email").innerHTML = EMAIL;
}

showData();