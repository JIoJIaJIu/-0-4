var app = angular.module('app', ['ngRoute']);

app.run(function () {
    console.log('aaa');
});

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/templates/homeCtrl.html',
            controller: 'HomeCtrl'
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
        .when('/login', {
        })
        .when('/logout', {
        })
        */
}]);
