angular.module('app').directive('dashboard', function () {
    return {
        restrict: 'E',
        templateUrl: 'directives/dashboard/dashboard.html',
        transclude: true
    }
});
