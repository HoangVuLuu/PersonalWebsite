document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.getElementById("menuIcon");
    const menu = document.getElementById("menu");

    // Show menu on hover
    menuIcon.addEventListener("mouseenter", () => {
        menu.style.display = "block";
    });

    // Hide menu when moving the mouse away
    menu.addEventListener("mouseleave", () => {
        menu.style.display = "none";
    });
});
