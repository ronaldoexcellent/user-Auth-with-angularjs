class AuthController {
    constructor($scope, AuthService) {
        this.$scope = $scope;
        this.AuthService = AuthService;
        this.user = {
            username: '',
            password: ''
        };
    }

    login() {
        this.AuthService.authenticateUser(this.user)
            .then(response => {
                if (response.success) {
                    // Redirect to dashboard or show success message
                    window.location.href = 'views/dashboard.html';
                } else {
                    // Handle login error
                    this.$scope.errorMessage = response.message;
                }
            });
    }

    register() {
        this.AuthService.registerUser(this.user)
            .then(response => {
                if (response.success) {
                    // Redirect to login or show success message
                    window.location.href = 'views/login.html';
                } else {
                    // Handle registration error
                    this.$scope.errorMessage = response.message;
                }
            });
    }
}

angular.module('userAuthApp').controller('AuthController', AuthController);