var app = angular.module('app', ['ngRoute']);

app.run(function () {
    console.log('aaa');
});

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/templates/pages/home.html',
            controller: 'Home'
        })
        .when('/audit', {
            templateUrl: '/templates/pages/audit.html',
            controller: 'Home'
        })
        .when('/roles', {
            templateUrl: '/templates/pages/roles.html',
            controller: 'Home'
        })
        .when('/help', {
            templateUrl: '/templates/pages/help.html'
        })
        .when('/login', {
            templateUrl: '/templates/pages/login.html',
            controller: 'Home'
        })
        /*
        .when('/project/:id', {
            templateUrl: '',
            controller: ''
        })

        /*
        .when('/project/:id/paq/:paq', {
        })
        .when('/project/:id/paq/:paq/edit', {
        })
        .when('/logout', {
        })
        */
}]);
