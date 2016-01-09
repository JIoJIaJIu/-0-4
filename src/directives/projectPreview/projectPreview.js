angular.module('app').directive('projectPreview', function () {
    return {
        restrict: 'E',
        templateUrl: 'directives/projectPreview/projectPreview.html',
        transclude: true,
        scope: {
            model: '=ngModel'
        }
    }
});
