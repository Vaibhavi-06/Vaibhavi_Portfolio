// Simple animation on scroll
window.addEventListener("scroll", () => {
    document.querySelectorAll(".project-card").forEach(card => {
        card.style.opacity = "1";
    });
});
