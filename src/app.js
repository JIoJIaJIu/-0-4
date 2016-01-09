var app = angular.module('app', ['ngRoute']);

app.run(function () {
});

app.config(['$routeProvider', function ($routeProvider, $httpBackend) {

    $routeProvider
        .when('/', {
            templateUrl: '/templates/pages/home.html',
            controller: 'Home'
        })
        .when('/project/:id', {
            templateUrl: '/templates/pages/project.html',
            controller: 'Project'
        })
        .when('/audit', {
            templateUrl: '/templates/pages/audit.html',
            controller: 'Home'
        })
        .when('/roles', {
            templateUrl: '/templates/pages/roles.html',
            controller: 'Role'
        })
        .when('/help', {
            templateUrl: '/templates/pages/help.html'
        })
        .when('/login', {
            templateUrl: '/templates/pages/login.html',
            controller: 'Home'
        })
}]);
