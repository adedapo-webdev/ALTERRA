// ALTERRA - PROPERTY DETAILS
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


// PROPERTY ENQUIRY FORM

const enquiryForm =
    document.getElementById("property-enquiry-form");

if (enquiryForm) {

    enquiryForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name =
            document.getElementById("buyer-name").value.trim();

        const email =
            document.getElementById("buyer-email").value.trim();

        const phone =
            document.getElementById("buyer-phone").value.trim();

        const message =
            document.getElementById("buyer-message").value.trim();

        if (!name || !email || !phone || !message) {

            alert("Please complete all required fields.");

            return;

        }

        alert(
            "Thank you, " + name +
            ". Your enquiry form is ready. We will connect it to ALTERRA's enquiry system before launch."
        );

    });

}