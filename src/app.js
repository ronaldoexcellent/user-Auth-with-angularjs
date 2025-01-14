angular.module('userAuthApp', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/login', {
            templateUrl: 'views/login.html',
            controller: 'AuthController'
        })
        .when('/register', {
            templateUrl: 'views/register.html',
            controller: 'AuthController'
        })
        .when('/dashboard', {
            templateUrl: 'views/dashboard.html',
            controller: 'AuthController'
        })
        .otherwise({
            redirectTo: '/login'
        });
}]);