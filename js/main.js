const url = 'http://markusskov.tech/wp-json/wc/store/products';

async function getProducts() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const result = data;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
getProducts();
