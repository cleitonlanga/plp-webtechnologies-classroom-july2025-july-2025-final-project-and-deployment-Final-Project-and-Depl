// =======================
// Mobile Menu
// =======================
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

if (hamburger) {
  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
}

// =======================
// Cart Modal
// =======================
const cartModal = document.getElementById("cart-modal");
const cartIcon = document.querySelector(".cart-icon");
const closeModal = document.querySelector(".close");

if (cartIcon) {
  cartIcon.addEventListener("click", () => {
    cartModal.style.display = "block";
  });
}

if (closeModal) {
  closeModal.addEventListener("click", () => {
    cartModal.style.display = "none";
  });
}

window.addEventListener("click", (e) => {
  if (e.target == cartModal) {
    cartModal.style.display = "none";
  }
});

// =======================
// FAQ Accordion
// =======================
const faqs = document.querySelectorAll(".faq-item");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});
