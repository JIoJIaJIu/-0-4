angular.module('app').controller('Role', [
    '$scope',
    '$log',
    'RoleSrv',
function ($scope, $log, RoleSrv) {
    $log.debug('Role controller');
    RoleSrv.list().then(function (roles) {
        $scope.roles = roles;
    });
}]);
