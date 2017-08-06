angular.module('nunuAPP')
.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("app");
    $stateProvider
        .state('app', {
            url: "/app",
            templateUrl: "app/views/template.html",
            controller: 'App'
        })
        .state('login', {
            url: "/login",
            templateUrl: 'app/views/auth/login.html',
            controller: 'AuthController',
        })

    .state('app.dashboard', {
        url: "/dashboard",
        templateUrl: 'app/views/dashboard.html',
        controller: 'DashboardController',
    })

});