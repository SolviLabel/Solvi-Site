// public/script.js
document.getElementById('login-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const formData = new FormData(this);
  const username = formData.get('username');
  const password = formData.get('password');

  fetch('/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        window.location.href = '/home.html';
      } else {
        alert('Invalid username or password');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('An error occurred during login.');
    });
});