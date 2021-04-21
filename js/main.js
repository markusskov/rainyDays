const url = 'https://api.markusskov.tech/wp-json/wc/store/products';

// Targeting divs
const productHeader = document.querySelector('.jacket__header');
const productPrice = document.querySelector('.pricetag');
const productDescription = document.querySelector('jacket__info');
const container = document.getElementById('products');

async function getProducts() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const result = data;
    console.log(result);

    for (let i = 0; i < result.length; i++) {
      container.innerHTML += `
      <div class="cards">
        <div class="card">
        <img class="jacket__img" src="${result[i].images[0].thumbnail}">
            <h3 class="jacket__header">${result[i].name}</h3>
            <p class="pricetag">${result[i].prices.price},-</p>
            <p class="jacket__info">${result[i].short_description}</p>
            <a class="btn__shop">BUY NOW</a>
        </div>
      </div>
      `;
    }
  } catch (error) {
    console.log(error);
  }
}
getProducts();
