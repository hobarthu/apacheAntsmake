define(['app/common/services/resource/resource-factory'], function() {
    function resourceCommonService($q, resourceFactory) {
        var resourceCommon = {};
        var defaultRequestErrorMessage = "请求失败.";

        resourceCommon.validEntityForCreate = function(entity, requiredProps) {
            var validEntity = {};
            requiredProps.forEach(function(elem) {
                validEntity[elem] = entity[elem];
            });
            return validEntity;
        };

        resourceCommon.validEntityForUpdate = function(entity, requiredProps) {
            var validEntity = {};
            requiredProps.forEach(function(elem) {
                if (entity[elem] != undefined && entity[elem] != null) {
                    validEntity[elem] = entity[elem];
                }
            });
            return validEntity;
        };

        resourceCommon.getEntityList = function(url, params, errorMessage) {
            var delay = $q.defer();
            resourceFactory.create(url).query(params, function(res) {
                delay.resolve(res);
            }, function(res) {
                console.log(res);
                delay.reject((res.data && res.data.message) || errorMessage || defaultRequestErrorMessage);
            });
            return delay.promise;
        };

        resourceCommon.getEntity = function(url, params, errorMessage) {
            var delay = $q.defer();
            resourceFactory.create(url).get(params, function(res) {
                delay.resolve(res);
            }, function(res) {
                console.log(res);
                delay.reject((res.data && res.data.message) || errorMessage || defaultRequestErrorMessage);
            });
            return delay.promise;
        };

        resourceCommon.createEntity = function(url, params, body, errorMessage) {
            var delay = $q.defer();
            resourceFactory.create(url).save(params, body, function(res) {
                delay.resolve(res);
            }, function(res) {
                console.log(res);
                delay.reject((res.data && res.data.message) || errorMessage || defaultRequestErrorMessage);
            });
            return delay.promise;
        };

        resourceCommon.updateEntity = function(url, params, body, errorMessage) {
            var delay = $q.defer();
            resourceFactory.create(url).update(params, body, function(res) {
                delay.resolve(res);
            }, function(res) {
                console.log(res);
                delay.reject((res.data && res.data.message) || errorMessage || defaultRequestErrorMessage);
            });
            return delay.promise;
        };

        resourceCommon.deleteEntity = function(url, params, errorMessage) {
            var delay = $q.defer();
            resourceFactory.create(url).delete(params, function(res) {
                delay.resolve(res);
            }, function(res) {
                console.log(res);
                delay.reject((res.data && res.data.message) || errorMessage || defaultRequestErrorMessage);
            });
            return delay.promise;
        };

        return resourceCommon;
    }

    resourceCommonService.$inject = ['$q', 'resourceFactory'];

    angular.module('services').factory('resourceCommonService', resourceCommonService);

    return resourceCommonService;
});
