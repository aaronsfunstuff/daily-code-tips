// Define a hardcoded username and password for simplicity
const validUsername = 'admin';
const validPassword = 'password123';

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === validUsername && password === validPassword) {
        // Save the authentication state in localStorage
        localStorage.setItem('isAuthenticated', 'true');
        // Redirect to the admin page
        window.location.href = 'admin.html';
    } else {
        document.getElementById('errorMsg').textContent = 'Invalid username or password';
    }
});
