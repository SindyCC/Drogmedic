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

document.querySelectorAll('.js-add-to-cart-button')
  .forEach((button) => {
    button.addEventListener('click', () => {
      const productId = button.dataset.productId;

      let matchingItem;

      cart.forEach((item) => {
        if (productId === item.productId) {
          matchingItem = item;
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

      let cartQuantity = 0;

      cart.forEach((item) => {
        cartQuantity += item.quantity;
      });

      document.querySelector('.js-cart-count').innerHTML = cartQuantity;
    });
  });