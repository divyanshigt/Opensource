console.log("Welcome to OpenSource Hub!");

const darkModeToggle = document.getElementById("darkModeToggle");
const themeIcon = document.getElementById("themeIcon");
const themeText = document.getElementById("themeText");

darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeIcon.textContent = "☀️";
        themeText.textContent = "Light";
    } else {
        themeIcon.textContent = "🌙";
        themeText.textContent = "Dark";
    }
});