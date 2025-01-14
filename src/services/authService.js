class AuthService {
    constructor() {
        this.apiUrl = 'https://your-api-url.com'; // Replace with your actual API URL
    }

    async authenticateUser(credentials) {
        try {
            const response = await fetch(`${this.apiUrl}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials),
            });
            return await response.json();
        } catch (error) {
            console.error('Error authenticating user:', error);
            throw error;
        }
    }

    async registerUser(userData) {
        try {
            const response = await fetch(`${this.apiUrl}/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });
            return await response.json();
        } catch (error) {
            console.error('Error registering user:', error);
            throw error;
        }
    }
}

export default AuthService;