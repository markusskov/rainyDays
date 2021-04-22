const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get('id');
console.log(id);

// Targeting Divs
const productHeader = document.querySelector('.jackets-shop__header');
const shortProductDescription = document.querySelector('.jackets-shop__text');
const productImage = document.querySelector('.jacket-img');
const price = document.querySelector('.pricetag');
const longProductDescription = document.querySelector(
  '.jacket-info__description'
);

const url = 'https://api.markusskov.tech/wp-json/wc/store/products/' + id;

async function singleProduct() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const result = data;
    console.log(result);
    // Editing the DOM
    productHeader.innerHTML = `${result.name}`;
    shortProductDescription.innerHTML = `${result.short_description}`;
    productImage.innerHTML = `<img src="${result.images[0].src}">`;
    price.innerHTML = `${result.prices.price}$`;
    longProductDescription.innerHTML = `${result.description}`;
  } catch (error) {
    console.log(error);
  }
}
singleProduct();
