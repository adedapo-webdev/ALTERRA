// =================================
// ALTERRA ESTATES & REALTY
// Main JavaScript
// =================================


// MOBILE NAVIGATION

const menuToggle = document.getElementById("menu-toggle");
const navigation = document.getElementById("navigation");

menuToggle.addEventListener("click", () => {

    navigation.classList.toggle("show");

    const isOpen = navigation.classList.contains("show");

    menuToggle.setAttribute("aria-expanded", isOpen);

});


// CLOSE MOBILE MENU AFTER CLICKING A LINK

document.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", () => {

        navigation.classList.remove("show");

        menuToggle.setAttribute("aria-expanded", "false");

    });

});


// AUTOMATIC COPYRIGHT YEAR

document.getElementById("year").textContent =
    new Date().getFullYear();


// PROPERTY SEARCH

const propertySearch = document.getElementById("property-search");

propertySearch.addEventListener("submit", function (event) {

    event.preventDefault();

    const purpose =
        document.getElementById("property-purpose").value;

    const type =
        document.getElementById("property-type").value;

    const location =
        document.getElementById("property-location").value;

    const propertyCards =
        document.querySelectorAll(".property-card");

    let visibleProperties = 0;

    propertyCards.forEach(card => {

        const cardPurpose = card.dataset.purpose;
        const cardType = card.dataset.type;
        const cardLocation = card.dataset.location;

        const matchesPurpose =
            purpose === "all" || purpose === cardPurpose;

        const matchesType =
            type === "all" || type === cardType;

        const matchesLocation =
            location === "all" || location === cardLocation;

        if (
            matchesPurpose &&
            matchesType &&
            matchesLocation
        ) {

            card.style.display = "block";

            visibleProperties++;

        } else {

            card.style.display = "none";

        }

    });


    // SHOW SEARCH RESULTS

    const propertySection =
        document.getElementById("properties");

    let resultMessage =
        document.getElementById("search-result-message");

    if (!resultMessage) {

        resultMessage = document.createElement("p");

        resultMessage.id = "search-result-message";

        resultMessage.className = "search-result-message";

        document.querySelector(".property-grid")
            .before(resultMessage);

    }

    if (visibleProperties > 0) {

        resultMessage.textContent =
            visibleProperties +
            (visibleProperties === 1
                ? " property found."
                : " properties found.");

    } else {

        resultMessage.textContent =
            "No matching properties in our current demonstration listings. Please contact us for assistance.";

    }

    propertySection.scrollIntoView({
        behavior: "smooth"
    });

});


// CONTACT ENQUIRY FORM

const contactForm =
    document.getElementById("contact-form");


// Add ALTERRA's official WhatsApp number here later.
// Use country code without + or spaces.

const ALTERRA_WHATSAPP_NUMBER = "";


contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const interest =
        document.getElementById("interest").value;

    const message =
        document.getElementById("message").value.trim();


    if (
        !name ||
        !email ||
        !interest ||
        !message
    ) {

        alert("Please complete all required fields.");

        return;

    }


    const enquiryMessage =

        "Hello ALTERRA Estates & Realty,\n\n" +

        "I would like to make a property enquiry.\n\n" +

        "Name: " + name + "\n" +

        "Email: " + email + "\n" +

        "Enquiry: " + interest + "\n\n" +

        "Details: " + message;


    if (!ALTERRA_WHATSAPP_NUMBER) {

        alert(
            "Thank you for your enquiry, " +
            name +
            ". The enquiry form is ready. ALTERRA's official WhatsApp number will need to be added before messages can be sent."
        );

        return;

    }


    const whatsappURL =

        "https://wa.me/" +

        ALTERRA_WHATSAPP_NUMBER +

        "?text=" +

        encodeURIComponent(enquiryMessage);


    window.open(whatsappURL, "_blank");

})