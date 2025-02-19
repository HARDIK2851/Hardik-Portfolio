document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("#nav-links a");
    const sections = document.querySelectorAll("section");

    function checkSections() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const sectionBottom = section.getBoundingClientRect().bottom;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight * 0.75 && sectionBottom > 0) {
                section.classList.add("active");
            } 
            else {
                section.classList.remove("active");
            }
        });
    }

    navLinks.forEach((link) => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); 

            let targetId = this.getAttribute("href").substring(1);
            let targetSection = document.getElementById(targetId);

            
            sections.forEach(section => section.classList.remove("active"));

            
            targetSection.classList.add("active");

            
            targetSection.scrollIntoView({ behavior: "smooth" });
        });
    });

    window.addEventListener("scroll", checkSections);
    checkSections();
});
