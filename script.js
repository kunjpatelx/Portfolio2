console.log("Portfolio loaded - Luxe Edition.");

function toggleDetails(button) {
    const details = button.previousElementSibling;
    details.classList.toggle("hidden");
    button.textContent = details.classList.contains("hidden") ? "More Details" : "Hide Details";
}

document.addEventListener("DOMContentLoaded", () => {
    const heroContent = document.querySelector(".hero-content");
    heroContent.style.opacity = "0";
    setTimeout(() => {
        heroContent.style.transition = "opacity 1.5s ease-in-out";
        heroContent.style.opacity = "1";
    }, 100);
});
