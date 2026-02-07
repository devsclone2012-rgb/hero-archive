const form = document.getElementById("loginForm");
const error = document.getElementById("error");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const id = document.getElementById("username").value.trim();
  const key = document.getElementById("password").value.trim();

  // SINGLE EMPLOYEE IDENTIFICATION
  const EMPLOYEE_ID = "VantageEmployee";

  // ACCESS KEY
  const ACCESS_KEY = "Ydqwdjhkhursurmhfw";

  if (id === EMPLOYEE_ID && key === ACCESS_KEY) {
    error.style.display = "block";
    error.innerText = "ACCESS ACKNOWLEDGED";

    setTimeout(() => {
      window.location.href = "authorized.html";
    }, 1200);

  } else if (id === EMPLOYEE_ID) {
    error.style.display = "block";
    error.innerText = "DESIGNATION CONFIRMED. KEY FORMAT UNRECOGNIZED.";

  } else {
    error.style.display = "block";
    error.innerText = "ENTRY LOGGED.";
  }
});
