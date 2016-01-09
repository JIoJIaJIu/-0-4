angular.module('app').factory('ProjectSrv', [
    '$q',
    'HttpSrv',
function ($q, HttpSrv) {
    return {
        list: function () {
            var d = $q.defer();

            //TODO:
            HttpSrv.get('projects').then(function (projects) {
                HttpSrv.get('roles').then(function (roles) {
                    projects = _.map(projects, function (project) {
                        project.author = _.find(roles, {'id': project.createdBy}) || {};
                        return project;
                    });

                    d.resolve(projects);
                }, function () {
                    d.reject();
                });
            }, function () {
                d.reject();
            });

            return d.promise;
        },

        get: function () {
        }
    }
}]);
