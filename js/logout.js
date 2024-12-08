const AUTH_BUTTON = document.getElementById("auth-button");

// Check if the user is registered
function isUserRegistered() {
  return localStorage.getItem("name") !== null;
}

// Update the button depending if the user is registered or not
function updateAuthButton() {
  if (isUserRegistered()) {
    AUTH_BUTTON.textContent = "Cerrar sesión";
    AUTH_BUTTON.href = "#";
    AUTH_BUTTON.addEventListener("click", logoutUser);
  } else {
    AUTH_BUTTON.textContent = "Registrarse";
    AUTH_BUTTON.href = "register.html";
    AUTH_BUTTON.removeEventListener("click", logoutUser);
  }
}

// Log out
function logoutUser(e) {
  e.preventDefault();
  localStorage.removeItem("name");
  localStorage.removeItem("surname1");
  localStorage.removeItem("surname2");
  localStorage.removeItem("email");
  localStorage.removeItem("COMMENTS");
  updateAuthButton();
}

// Start the button
updateAuthButton();
