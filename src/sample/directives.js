define([], function() {
    var sampleDisplay = function() {
        return {
            templateUrl: 'src/sample/sample-display.html',
            restrict: 'EA',
            scope: {
                sampleInfo: "="
            },
            link: function(scope, ele, attr) {
                console.log("aaa");
            }
        };
    };

    return {
        sampleDisplay: sampleDisplay
    };
});
