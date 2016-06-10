define(['app/common/services/modules'], function(){
    function storageService($cookies){
        var service = {};
        service.put = function(key, value) {
            var transformedStr = JSON.stringify(value);
            try {
                $cookies.put(key, transformedStr, { path: "/" });
            } catch (e) {}
        };
        service.get = function(key) {
            var value = null;
            try {
                var transformedStr = $cookies.get(key);
                if (transformedStr) {
                    try {
                        value = JSON.parse(transformedStr);
                    } catch (e) {
                        $cookies.remove(key);
                    }

                }
            } catch (e) {}
            return value;
        };
        service.remove = function(key) {
            try {
                $cookies.remove(key, { path: "/" });
            } catch (e) {}
        };
        return service;
    }

    storageService.$inject = ['$cookies'];

    angular.module('services').factory('storageService', storageService);

    return storageService;
});
