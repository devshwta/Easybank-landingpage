const hamburger = document.querySelector(".nav-icon");
const nav = document.querySelector(".nav-item");
const heroSection = document.querySelector(".hero-section");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
  hamburger.classList.toggle("active");
  heroSection.classList.toggle("blur");
});

AOS.init();
