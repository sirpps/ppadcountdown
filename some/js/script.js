function identify() {
    // Periksa apakah tema tersimpan di localStorage
    let theme = localStorage.getItem("theme");

    if (theme === "dark") {
        setDark(true);
        document.getElementById("switch").checked = true;
    } else if (theme === "light") {
        setDark(false);
    } else {
        // Default ke mode gelap jika tidak ada entri di localStorage
        setDark(true);
        document.getElementById("switch").checked = true;
    }
}

function setDark(Dark) {
    if (Dark) {
        document.body.setAttribute("id", "dark");
        localStorage.setItem("theme", "dark");
    } else {
        document.body.setAttribute("id", "light");
        localStorage.setItem("theme", "light"); // Simpan tema 'light'
    }
}

function toggleCheck() {
    if (document.getElementById("switch").checked) {
        setDark(true);
    } else {
        setDark(false);
    }
}
