// Smooth scroll for menu links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        if (this.getAttribute("href") !== "#") {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Contact form message
const contactForm = document.querySelector(".contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", function(e){
        e.preventDefault();  // stop refresh
        alert("✅ Message sent successfully!\n(You can connect via LinkedIn / Email too)");
        this.reset();
    });
}

// Mobile menu toggle (if you add hamburger)
const menuIcon = document.querySelector(".menu-icon");
const navLinks = document.querySelector("nav ul");

if(menuIcon){
    menuIcon.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

// Button click animation
const buttons = document.querySelectorAll(".btn");
buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.style.transform = "scale(0.95)";
        setTimeout(() => btn.style.transform = "scale(1)", 150);
    });
});
