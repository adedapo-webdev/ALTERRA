// =================================
// ALTERRA - ABOUT PAGE
// =================================


// MOBILE NAVIGATION

const menuToggle = document.getElementById("menu-toggle");
const navigation = document.getElementById("navigation");

if (menuToggle && navigation) {

    menuToggle.addEventListener("click", () => {

        navigation.classList.toggle("show");

        menuToggle.setAttribute(
            "aria-expanded",
            navigation.classList.contains("show")
        );

    });

    document.querySelectorAll(".nav-link").forEach(link => {

        link.addEventListener("click", () => {

            navigation.classList.remove("show");

            menuToggle.setAttribute("aria-expanded", "false");

        });

    });

}


// COPYRIGHT YEAR

document.querySelectorAll(".current-year").forEach(element => {

    element.textContent = new Date().getFullYear();

});