define(['app/common/services/modules'], function() {
    function resourceFactory($resource) {
        var resourceFactory = {
            create: function(url, paramDefaults, customizedActions) {
                var actions = angular.extend({}, customizedActions, {
                    update: {
                        method: "PUT"
                    }
                });
                return $resource(url, paramDefaults, actions);
            }
        };
        return resourceFactory;
    }

    resourceFactory.$inject = ['$resource'];

    angular.module('services').factory('resourceFactory', resourceFactory);

    return resourceFactory;
});
