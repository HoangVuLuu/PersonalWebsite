document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("themeToggle");
    const body = document.body;
    const menuIcon = document.getElementById("menuIcon"); // Select the burger icon

    // Check for saved theme preference
    if (localStorage.getItem("theme") === "light") {
        body.classList.add("light-mode");
        themeToggle.textContent = "☀️"; // Change icon to sun
        menuIcon.style.color = "#000"; // Make burger icon black in light mode
    }

    // Toggle theme on button click
    themeToggle.addEventListener("click", () => {
        body.classList.toggle("light-mode");

        if (body.classList.contains("light-mode")) {
            localStorage.setItem("theme", "light");
            themeToggle.textContent = "☀️"; // Sun for light mode
            menuIcon.style.color = "#000"; // Burger icon turns black
        } else {
            localStorage.setItem("theme", "dark");
            themeToggle.textContent = "🌙"; // Moon for dark mode
            menuIcon.style.color = "#fff"; // Burger icon turns white
        }
    });
});
