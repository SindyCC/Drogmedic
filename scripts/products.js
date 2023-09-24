// 1) SAVE THE DATA
const products = [{
  image:  'img/products_images/advil.jpg',
  name: 'Advil',
  price: 33350
}, {
  image: 'img/products_images/apronax.jpg',
  name: 'Apronax',
  price: 15950
}, {
  image: 'img/products_images/aspirina.jpg',
  name: 'Aspirina',
  price: 79950
}, {
  image: 'img/products_images/digestar_jalea.jpg',
  name: 'Digestar Jalea',
  price: 60450
}, {
  image: 'img/products_images/isodine.jpg',
  name: 'Isodine solución',
  price: 12200
}, {
  image: 'img/products_images/mareol.jpg',
  name: 'Mareol',
  price: 50000
}, {
  image: 'img/products_images/medicasp.jpg',
  name: 'Medicasp',
  price: 31400
}, {
  image: 'img/products_images/tirosina.jpg',
  name: 'Tirosina',
  price: 28320
}, {
  image: 'img/products_images/trimebutina.jpg',
  name: 'Trimebutina',
  price: 26900
}, {
  image: 'img/products_images/vitamina_c_tq.jpg',
  name: 'Vitamina C TQ',
  price: 44950
}, {
  image: 'img/products_images/xraydol.jpg',
  name: 'Xray Dol',
  price: 18480
}];

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

console.log(productsHTML);

document.querySelector('.js-products-grid').innerHTML = productsHTML;


// 3) MAKE IT INTERACTIVE

console.log('Hello World');