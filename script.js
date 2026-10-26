// =====================================
// 1. MOBILE NAVIGATION
// =====================================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {

    const isOpen = navMenu.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation"
    );

    menuToggle.textContent = isOpen ? "×" : "☰";

});


// =====================================
// 2. CLOSE MENU AFTER CLICKING A LINK
// =====================================

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("open");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.setAttribute("aria-label", "Open navigation");

        menuToggle.textContent = "☰";

    });

});


// =====================================
// 3. HIGHLIGHT ACTIVE NAVIGATION LINK
// =====================================

const sections = document.querySelectorAll("main section[id]");

const sectionObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                navLinks.forEach((link) => {

                    link.classList.toggle(
                        "active",
                        link.getAttribute("href") ===
                        `#${entry.target.id}`
                    );

                });

            }

        });

    },
    {
        rootMargin: "-35% 0px -55% 0px"
    }
);

sections.forEach((section) => {
    sectionObserver.observe(section);
});


// =====================================
// 4. AUTOMATIC FOOTER YEAR
// =====================================

document.getElementById("year").textContent =
    new Date().getFullYear();


// =====================================
// 5. SCROLL REVEAL ANIMATION
// =====================================

const revealItems = document.querySelectorAll(
    ".about-card, .project-card, .skill-pill"
);

revealItems.forEach((item) => {

    item.style.opacity = "0";

    item.style.transform = "translateY(14px)";

    item.style.transition =
        "opacity 0.55s ease, transform 0.55s ease";

});

const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform = "translateY(0)";

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);

revealItems.forEach((item) => {
    revealObserver.observe(item);
});