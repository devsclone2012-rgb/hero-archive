const form = document.getElementById("loginForm");
const error = document.getElementById("error");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user === "VANTAGE" && pass === "1973") {
    window.location.href = "authorized.html";
  } else {
    error.style.display = "block";
  }
});
