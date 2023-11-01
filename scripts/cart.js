import { products } from "./products.js";

let cartSummaryHTML = '';

console.log('Cart script');

export const cart = [{
  productId: '1-first-product',
  quantity: 1
}, {
  productId: '2-second-product', 
  quantity: 1
}];

export function addToCart(productId) {
  let matchingItem;

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  if (matchingItem) {
    matchingItem.quantity ++;
  } else {
    cart.push({
      productId: productId,
      quantity: 1
    });
  }
}

cart.forEach((cartItem) => {
  const productId = cartItem.productId;

  let matchingProduct;

  products.forEach((product) => {
    if (product.id === productId) {
      matchingProduct = product;
    }
  });

  cartSummaryHTML += `
    <div class="articles-container js-articles-container">
      <img class="product-img" src="${matchingProduct.image}" alt="">
      <div>
        <h2>${matchingProduct.name}</h2>
        <p>Precio: $${matchingProduct.price}</p>
        <div class="quantity-selector">
          <p>Cantidad: ${cartItem.quantity}</p>
          <input type="number" placeholder="1">
        </div>
        <p>Subtotal: $${matchingProduct.price}</p>
      </div>
    </div>
  `;
});

document.querySelector('.js-purchase-details').innerHTML = cartSummaryHTML;

/*
const cartDetails = 
`
  <div class="purchase-details">

    

    <div class="summary js-summary-container">
      <h2>Resumen de la compra</h2>
      <div class="summary-grid">
        <div class="concept">
          <p>1 producto:</p>
          <p>Domicilio:</p>
          <p>Total:</p>
        </div>
        <div class="concept-amount">
          <p>$359.000</p>
          <p>$0</p>
          <p>$359.000</p>
        </div>
      </div>
    </div>    
  </div>
`

*/

// Primero organizar el Layout del cart