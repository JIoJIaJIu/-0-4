angular.module('app').controller('Home', [
    '$scope',
    '$location',
    '$log',
    'ProjectSrv',
function ($scope, $location, $log, ProjectSrv) {
    ProjectSrv.list().then(function (projects) {
        $scope.projects = projects;
    });

    $scope.showProject = function (id) {
        $log.info('show project', id);
        var url = "/project/" + id;
        $location.path(url);
    }
}]);
