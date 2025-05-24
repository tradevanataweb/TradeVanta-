// Modal toggle
const authBtn = document.getElementById('authBtn');
const authModal = document.getElementById('authModal');
const closeBtn = document.querySelector('.close');
const showLogin = document.getElementById('showLogin');
const showSignup = document.getElementById('showSignup');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');

authBtn.onclick = () => authModal.classList.remove('hidden');
closeBtn.onclick = () => authModal.classList.add('hidden');
showLogin.onclick = () => {
  signupForm.classList.add('hidden');
  loginForm.classList.remove('hidden');
};
showSignup.onclick = () => {
  loginForm.classList.add('hidden');
  signupForm.classList.remove('hidden');
};

// Fetch live crypto prices (example using CoinGecko)
async function fetchPrices() {
  const res = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,tether&vs_currencies=usd");
  const data = await res.json();
  document.getElementById('btcPrice').textContent = `BTC: $${data.bitcoin.usd}`;
  document.getElementById('ethPrice').textContent = `ETH: $${data.ethereum.usd}`;
  document.getElementById('usdtPrice').textContent = `USDT: $${data.tether.usd}`;
}
fetchPrices();
setInterval(fetchPrices, 30000); // refresh every 30s
