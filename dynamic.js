// ==========================================================================
// 1. DARK MODE TOGGLE (Works on all pages & remembers choice)
// ==========================================================================
const darkModeBtn = document.getElementById('dark-mode-toggle');

if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
  if (darkModeBtn) darkModeBtn.textContent = '☀️';
}

if (darkModeBtn) {
  darkModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark');
      darkModeBtn.textContent = '☀️';
    } else {
      localStorage.setItem('theme', 'light');
      darkModeBtn.textContent = '🌙';
    }
  });
}

// ==========================================================================
// 2. DYNAMIC PRODUCT LOADING (buy_screen.html)
// ==========================================================================
const params = new URLSearchParams(window.location.search);
const flowerName = params.get('name');
const flowerPriceStr = params.get('price');
const flowerImg = params.get('img');

const buyNameEl = document.getElementById('buy-name');
const buyPriceEl = document.getElementById('buy-price');
const buyImgEl = document.getElementById('buy-img');

let unitPrice = 1900;

if (flowerName && buyNameEl) {
  buyNameEl.textContent = flowerName;
}

if (flowerImg && buyImgEl) {
  buyImgEl.src = flowerImg;
}

if (flowerPriceStr && buyPriceEl) {
  buyPriceEl.textContent = flowerPriceStr;
  const parsed = parseFloat(flowerPriceStr.replace(',', '.'));
  if (!isNaN(parsed)) {
    unitPrice = parsed;
  }
}

// ==========================================================================
// 3. LIVE QUANTITY & PRICE CALCULATOR (buy_screen.html)
// ==========================================================================
const qtyButtons = document.querySelectorAll('.qty-btn');
const qtyCountEl = document.querySelector('.qty-count');

if (qtyButtons.length === 2 && qtyCountEl && buyPriceEl) {
  const decreaseBtn = qtyButtons[0];
  const increaseBtn = qtyButtons[1];
  let quantity = 1;

  function updateTotal() {
    qtyCountEl.textContent = quantity;
    const total = (unitPrice * quantity).toFixed(2).replace('.', ',');
    buyPriceEl.textContent = `${total} TL`;
  }

  increaseBtn.addEventListener('click', () => {
    quantity++;
    updateTotal();
  });

  decreaseBtn.addEventListener('click', () => {
    if (quantity > 1) {
      quantity--;
      updateTotal();
    }
  });
}