define(["app/sample/directives", "app/sample/sample-ctrl"], function(directives, sampleCtrl) {
    var sample = angular.module('sample', []);
    sample.controller('sampleCtrl', sampleCtrl);
    sample.directive('sampleDisplay', directives.sampleDisplay);
});
