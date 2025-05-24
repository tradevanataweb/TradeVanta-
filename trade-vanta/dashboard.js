// Simulated user data (you will replace this with real data from Firebase or DB)
const user = {
  username: localStorage.getItem('username') || 'User',
  balance: localStorage.getItem('balance') || '1500.00',
  bonus: localStorage.getItem('bonus') || '25.00',
};

// Display user data
document.getElementById('usernameDisplay').textContent = `Welcome, ${user.username}`;
document.getElementById('balanceDisplay').textContent = `$${user.balance}`;
document.getElementById('bonusDisplay').textContent = `$${user.bonus}`;

// Logout
document.getElementById('logoutBtn').onclick = () => {
  localStorage.clear();
  window.location.href = 'index.html';
};
