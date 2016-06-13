define([], function() {
    var sampleDisplay = function($state) {
        return {
            templateUrl: 'src/sample/sample-display.html',
            restrict: 'EA',
            scope: {
                sampleInfo: "="
            },
            link: function(scope, ele, attr) {
                scope.getSample = function(cloth) {
                    $state.go('sampleDetail', {sampleId: cloth.id})
                };
            }
        };
    };
    sampleDisplay.$inject = ["$state"];

    return {
        sampleDisplay: sampleDisplay
    };
});
