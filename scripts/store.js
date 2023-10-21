import { cart, addToCart } from './cart.js';
import { products } from './products.js';

let productsHTML = '';

// 2) GENERATE THE HTML
products.forEach((product) => {
  productsHTML += `
    <div class="product-container">
      <img class="product-img" src="${product.image}" alt="">
      <div class="product-details">
        <div class="product-name">${product.name}</div>
        <div class="product-price">$${product.price}</div>
        <div class="product-icons">
          <img src="img/icons/heart-svgrepo-com.svg" alt="">
          <img src="img/icons/magnifying-glass-svgrepo-com.svg" alt="">
        </div>
        <div class="add-to-cart-button js-add-to-cart-button"
        data-product-id="${product.id}">comprar</div>
      </div>
    </div>
  `;
});

document.querySelector('.js-products-grid').innerHTML = productsHTML;

// 3) MAKE IT INTERACTIVE

function updateCartQuantity() {
  let cartQuantity = 0;

  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });

  document.querySelector('.js-cart-count').innerHTML = cartQuantity;
}

document.querySelectorAll('.js-add-to-cart-button')
  .forEach((button) => {
    button.addEventListener('click', () => {
      const productId = button.dataset.productId;
      addToCart(productId);
      updateCartQuantity();
    });
  });