define(['app/common/services/modules'], function(){
    function cacheService(){
        var headerActiveTab = {};

        var service = {
            setHeaderActiveTab: function(tab) {
                headerActiveTab = tab;
            },
            getHeaderActiveTab: function() {
                return headerActiveTab;
            }
        };

        return service;
    }

    cacheService.$inject = [];

    angular.module('services').factory('antsCache', cacheService);

    return cacheService;
});
