import { products } from "./products.js";

let cartSummaryHTML = '';

console.log('Cart script');

export const cart = [

{
  productId: '1-first-product',
  quantity: 1
}, {
  productId: '2-second-product', 
  quantity: 1
} 
];

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
    <div class="single-article">
      <img class="product-img" src="${matchingProduct.image}" alt="">
      <div>
        <h2>${matchingProduct.name}</h2>
        <p>Precio: $${matchingProduct.price}</p>
        <p>Subtotal: $${matchingProduct.price}</p>
        <div class="quantity-selector">
          <p>Cantidad: ${cartItem.quantity}</p>
          <input type="number" placeholder="1">
          <div>
            <div>Editar</div>
            <div>Eliminar</div>
          </div>
        </div>
      </div>
    </div>
  `;
});

// Necesito agregar estilos a los botones editar y eliminar, esto es para practicar Delete, que ya entiendo como es pero lo quiero practicar, tengo que ponerle clase de js-eliminar (por ejemplo) al botón, después agregarle un data atribute con el product-id para que lo identifique el que yo elimine, después, hacer loop en el cart sin agregar el eliminado. El tiempo en el video es menor a 1:13:00

document.querySelector('.js-articles-container').innerHTML = cartSummaryHTML;