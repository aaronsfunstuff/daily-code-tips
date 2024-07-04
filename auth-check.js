// Check if the user is authenticated
if (localStorage.getItem('isAuthenticated') !== 'true') {
    // Redirect to the login page if not authenticated
    window.location.href = 'login.html';
}
