// Menu hambúrguer
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  hamburger.classList.toggle("open");
});

// Modal do carrinho
const cartIcon = document.querySelector(".cart-icon");
const cartModal = document.getElementById("cart-modal");
const closeModal = document.querySelector(".close");

cartIcon.addEventListener("click", () => {
  cartModal.style.display = "block";
});

closeModal.addEventListener("click", () => {
  cartModal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === cartModal) {
    cartModal.style.display = "none";
  }
});
