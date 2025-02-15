document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");

    menuToggle.addEventListener("click", function() {
        // Cambiar la visibilidad del menú
        menu.style.display = menu.style.display === "block" ? "none" : "block";
    });
});
