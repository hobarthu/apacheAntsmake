define(['app/common/services/modules'], function(){
    function cacheService(){
        var imageCanvas = {};

        return {
            setImageCanvas: function(canvas) {
                imageCanvas = canvas;
            },
            getImageCanvas: function() {
                return imageCanvas;
            }
        };
    }

    cacheService.$inject = [];

    angular.module('services').factory('antsCache', cacheService);

    return cacheService;
});
