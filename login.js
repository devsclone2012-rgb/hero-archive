function login() {
    const id = document.getElementById("identification").value;
    const key = document.getElementById("accessKey").value;
    const log = document.getElementById("log");

    if (id === "VantageEmployee" && key === "Ydqwdjhkhursurmhfw") {
        log.style.color = "#6aff6a";
        log.textContent = "ACCESS APPROVED — ENTRY LOGGED";

        sessionStorage.setItem("vantage_access", "granted");

        setTimeout(() => {
            window.location.href = "approved.html";
        }, 1200);
    } else {
        log.style.color = "#ff4a4a";
        log.textContent = "ACCESS DENIED — ENTRY LOGGED";
    }
}
