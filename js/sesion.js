document.addEventListener("DOMContentLoaded", function () {
    const passwordField = document.getElementById("passwordField");
    const togglePassword = document.querySelector(".toggle-password");
  
    togglePassword.addEventListener("click", function () {
      const type = passwordField.getAttribute("type") === "password" ? "text" : "password";
      passwordField.setAttribute("type", type);
  
      // Cambia el texto del icono
      togglePassword.classList.toggle("password-shown");
    });
  });