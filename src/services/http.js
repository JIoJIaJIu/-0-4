angular.module('app').factory('HttpSrv', [
    '$http',
    '$q',
function ($http, $q) {
    var URLS = {
        'projects': '/data/project.json',
        'roles': '/data/role.json'
    };

    return {
        get: function (type) {
            var url = URLS[type];
            var d = $q.defer();

            $http.get(url)
                .then(function (response) {
                    d.resolve(response.data);
                }, function () {
                    d.reject();
                });

            return d.promise;
        }
    }
}]);
