const form = document.getElementById("loginForm");
const error = document.getElementById("error");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const id = document.getElementById("username").value.trim().toUpperCase();
  const key = document.getElementById("password").value.trim();

  // SINGLE EMPLOYEE IDENTIFICATION
  const EMPLOYEE_ID = "VantageEmployee";

  // H.E.R.O ACCESS KEYS (FORMAT-BASED)
  const HERO_KEYS = [
    "Ydqwdjhkhursurmhfw"
  ];

  if (id === EMPLOYEE_ID && HERO_KEYS.includes(key)) {
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
