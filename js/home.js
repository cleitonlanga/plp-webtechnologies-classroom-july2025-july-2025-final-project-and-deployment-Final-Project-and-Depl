// ===== MENU RESPONSIVO =====
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// ===== PRODUTOS =====
const products = [
  {
    name: "iPhone 14 Pro",
    price: 95000,
    img: "https://images.unsplash.com/photo-1661961110863-76b9e98ec663?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Gaming Laptop",
    price: 120000,
    img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Wireless Headphones",
    price: 8500,
    img: "https://images.unsplash.com/photo-1580894732930-7c4b1a4d5d53?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Mechanical Keyboard",
    price: 4500,
    img: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=400&q=80",
  },
];

const featuredProducts = document.getElementById("featured-products");

products.forEach((p, index) => {
  const card = document.createElement("div");
  card.classList.add("product-card");
  card.innerHTML = `
    <img src="${p.img}" alt="${p.name}">
    <h3>${p.name}</h3>
    <p>${p.price} MT</p>
    <button data-index="${index}">Add to Cart</button>
  `;
  featuredProducts.appendChild(card);
});

// ===== CARRINHO =====
const cart = [];
const cartIcon = document.querySelector(".cart-icon");
const cartModal = document.getElementById("cart-modal");
const closeBtn = cartModal.querySelector(".close");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const cartCount = document.querySelector(".cart-count");

cartIcon.addEventListener("click", () => {
  cartModal.style.display = "flex";
});
closeBtn.addEventListener("click", () => {
  cartModal.style.display = "none";
});
window.addEventListener("click", (e) => {
  if (e.target === cartModal) {
    cartModal.style.display = "none";
  }
});

featuredProducts.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    const index = e.target.getAttribute("data-index");
    cart.push(products[index]);
    updateCart();
  }
});

function updateCart() {
  cartItems.innerHTML = "";
  let total = 0;
  cart.forEach((item) => {
    const div = document.createElement("div");
    div.textContent = `${item.name} - ${item.price} MT`;
    cartItems.appendChild(div);
    total += item.price;
  });
  cartTotal.textContent = `${total} MT`;
  cartCount.textContent = cart.length;
}

// ===== NEWSLETTER =====
const newsletterForm = document.querySelector(".newsletter-form");
newsletterForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you for subscribing!");
  newsletterForm.reset();
});
