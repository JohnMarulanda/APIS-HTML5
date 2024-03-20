function getProductInfo() {
  // Obtener la información del producto utilizando Microdata
  let productName = document.querySelector('[itemprop="name"]').textContent;
  let productBrand = document.querySelector('[itemprop="brand"]').textContent;
  let productDescription = document.querySelector('[itemprop="description"]').textContent;
  let productPrice = document.querySelector('[itemprop="price"]').textContent;
  let priceCurrency = document.querySelector('[itemprop="priceCurrency"]').getAttribute('content');

  // Mostrar la información del producto en la consola
  console.log('Nombre del Producto:', productName);
  console.log('Marca:', productBrand);
  console.log('Descripción:', productDescription);
  console.log('Precio:', priceCurrency + productPrice);
}
