const form = document.getElementById("loginForm");
const error = document.getElementById("error");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const identification = document
    .getElementById("username")
    .value
    .trim();

  const accessKey = document
    .getElementById("password")
    .value
    .trim();

  const EMPLOYEE_ID = "VantageEmployee";
  const ACCESS_KEY = "Ydqwdjhkhursurmhfw";

  if (identification === EMPLOYEE_ID && accessKey === ACCESS_KEY) {
    error.innerText = "ACCESS ACKNOWLEDGED";
    setTimeout(() => {
      window.location.href = "authorized.html";
    }, 1200);
  } else if (identification === EMPLOYEE_ID) {
    error.innerText = "DESIGNATION CONFIRMED. KEY UNRECOGNIZED.";
  } else {
    error.innerText = "ENTRY LOGGED.";
  }
});
