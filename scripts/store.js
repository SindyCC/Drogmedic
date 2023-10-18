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
        <div class="add-to-cart-button">comprar</div>
      </div>
    </div>
  `;
});


document.querySelector('.js-products-grid').innerHTML = productsHTML;


// 3) MAKE IT INTERACTIVE

console.log('Hello World');