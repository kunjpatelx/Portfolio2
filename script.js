console.log("Portfolio loaded - Luxe Edition.");

// Simple fade-in animation for hero content
document.addEventListener("DOMContentLoaded", () => {
    const heroContent = document.querySelector(".hero-content");
    heroContent.style.opacity = "0"; // Start hidden
    setTimeout(() => {
        heroContent.style.transition = "opacity 1.5s ease-in-out";
        heroContent.style.opacity = "1"; // Fade in
    }, 100); // Small delay for effect
});
