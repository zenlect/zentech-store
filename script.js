
const products = [
  { id: 1, name: "Running Shoes", price: 59.99 },
  { id: 2, name: "Casual T-Shirt", price: 19.99 },
  { id: 3, name: "Wrist Watch", price: 99.99 },
  { id: 4, name: "Luxury Perfume", price: 49.99 }
];

if (document.getElementById("product-list")) {
  const container = document.getElementById("product-list");
  products.forEach(p => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `<h3>${p.name}</h3><p>Price: $${p.price}</p><button onclick="addToCart(${p.id})">Add to Cart</button>`;
    container.appendChild(div);
  });
}

function addToCart(productId) {
  let cart = JSON.parse(localStorage.getItem("cart") || "[]");
  cart.push(productId);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart!");
}

if (document.getElementById("cart")) {
  const cartIds = JSON.parse(localStorage.getItem("cart") || "[]");
  const cartContainer = document.getElementById("cart");
  if (cartIds.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty.</p>";
  } else {
    const items = cartIds.map(id => products.find(p => p.id === id));
    let total = 0;
    cartContainer.innerHTML = items.map(item => {
      total += item.price;
      return `<div class="product"><h3>${item.name}</h3><p>$${item.price}</p></div>`;
    }).join("") + `<hr><h3>Total: $${total.toFixed(2)}</h3>`;
  }
}
