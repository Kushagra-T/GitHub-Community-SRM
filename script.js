document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email && password) {
        alert('Login successful!'); // Placeholder for real authentication logic
    } else {
        alert('Please fill in all fields.');
    }
});