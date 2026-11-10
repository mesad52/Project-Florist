const params = new URLSearchParams(window.location.search);

const flowerName = params.get('name');
const flowerPrice = params.get('price');
const flowerImg = params.get('img');

if (flowerName) {
  document.getElementById('buy-name').textContent = flowerName;
}

if (flowerPrice) {
  document.getElementById('buy-price').textContent = flowerPrice;
}

if (flowerImg) {
  document.getElementById('buy-img').src = flowerImg;
}