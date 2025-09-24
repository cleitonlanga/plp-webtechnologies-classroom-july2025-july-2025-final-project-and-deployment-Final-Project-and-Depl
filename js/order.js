// ======== NAVBAR MOBILE TOGGLE ========
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

if (hamburger) {
  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
}

// ======== CART MODAL ========
const cartModal = document.getElementById("cart-modal");
const cartIcon = document.querySelector(".cart-icon");
const closeBtn = document.querySelector(".close");

if (cartIcon) {
  cartIcon.addEventListener("click", () => {
    cartModal.style.display = "block";
  });
}

if (closeBtn) {
  closeBtn.addEventListener("click", () => {
    cartModal.style.display = "none";
  });
}

window.addEventListener("click", (e) => {
  if (e.target === cartModal) {
    cartModal.style.display = "none";
  }
});

// ======== ORDER TRACKING DEMO ========
const trackingForm = document.querySelector(".tracking-form");
if (trackingForm) {
  trackingForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Tracking order... (demo only)");
  });
}
// ======== FOOTER SUBSCRIPTION ========