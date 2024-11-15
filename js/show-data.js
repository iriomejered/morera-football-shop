function showData(){
  const NAME = localStorage.getItem("name");
  document.getElementById("name").innerHTML = NAME;

  const SURNAME = localStorage.getItem("surname");
  document.getElementById("surname").innerHTML = SURNAME;

  const EMAIL = localStorage.getItem("email");
  document.getElementById("email").innerHTML = EMAIL;
}

showData();