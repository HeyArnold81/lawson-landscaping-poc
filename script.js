const form = document.getElementById("quote-form");

if (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        alert(
            "Thanks. This is currently a website concept, so the enquiry form is not yet connected."
        );
    });
}


const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

if (menuToggle && mobileMenu) {

    function closeMenu() {
        menuToggle.classList.remove("is-open");
        mobileMenu.classList.remove("is-open");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute(
            "aria-label",
            "Open navigation menu"
        );

        document.body.classList.remove("menu-open");
    }


    menuToggle.addEventListener("click", function () {

        const isOpen =
            mobileMenu.classList.toggle("is-open");

        menuToggle.classList.toggle(
            "is-open",
            isOpen
        );

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen
        );

        menuToggle.setAttribute(
            "aria-label",
            isOpen
                ? "Close navigation menu"
                : "Open navigation menu"
        );

        document.body.classList.toggle(
            "menu-open",
            isOpen
        );

    });


    const mobileLinks =
        mobileMenu.querySelectorAll("a");

    mobileLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            closeMenu
        );

    });


    document.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Escape") {
                closeMenu();
            }

        }
    );

}