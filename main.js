document.addEventListener("DOMContentLoaded", function () {
    // this gets reference to naviagtion links and sections
    const navLinks = document.querySelectorAll("#nav-links a");
    const sections = document.querySelectorAll("section");

    function checkSections() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const sectionBottom = section.getBoundingClientRect().bottom;
            const windowHeight = window.innerHeight;

            // this checks if the section is comes in on screen active class is added to it
            // if not active classes is removed from section
            if (sectionTop < windowHeight * 0.75 && sectionBottom > 0) {
                section.classList.add("active");
            } 
            else {
                section.classList.remove("active");
            }
        });
    }

    // this function adds and removes active class from sections when nav links is clicked
    // when any nav links is clicked, action class is added to section referenced by that link
    // and action class is removed from other sections
    navLinks.forEach((link) => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); 

            // this gets id of the link which is clicked
            let targetId = this.getAttribute("href").substring(1);
            // this get section referenced by clicked link
            let targetSection = document.getElementById(targetId);

            
            sections.forEach(section => section.classList.remove("active"));

            
            targetSection.classList.add("active");

            
            targetSection.scrollIntoView({ behavior: "smooth" });
        });
    });

    // this calls checkSection function when user scrolls through website
    window.addEventListener("scroll", checkSections);
    checkSections();
});
