const jwt = require('jsonwebtoken');

module.exports = async function (context, req) {
    context.log('Login Function triggered.');

    // Get username and password from the request body
    const { username, password } = req.body;

    // Validate email format
    if (!isValidEmail(username)) {
        context.res = {
            status: 400,
            body: "Invalid email format"
        };
        return;
    }

    // Validate username and password (add your authentication logic here)
    const isAuthenticated = validateCredentials(username, password);

    if (!isAuthenticated) {
        context.res = {
            status: 401,
            body: "Invalid credentials"
        };
        return;
    }

    // Generate JWT token
    const jwtToken = generateJwtToken(username);

    // Return JWT token
    context.res = {
        status: 200,
        body: { token: jwtToken }
    };
};

function isValidEmail(email) {
    // Basic email validation using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validateCredentials(username, password) {
    // Implement your authentication logic here
    // For simplicity, assume any non-empty username and password are valid
    return username && password;
}

function generateJwtToken(username) {
    // Replace 'your-secret-key' with your actual secret key
    const secretKey = 'your-secret-key';

    // Define JWT payload
    const payload = {
        sub: username,
        // Add additional claims if needed
    };

    // Generate JWT token
    const jwtToken = jwt.sign(payload, secretKey, { expiresIn: '1h' });

    return jwtToken;
}
