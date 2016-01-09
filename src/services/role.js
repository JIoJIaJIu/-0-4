angular.module('app').factory('RoleSrv', [
    'HttpSrv',
function (HttpSrv) {
    return {
        list: function () {
            return HttpSrv.get('roles');
        }
    }
}]);
