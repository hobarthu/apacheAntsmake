define(["app/sample/directives", "app/sample/sample-ctrl", "app/sample/sampleDetailCtrl"], function(directives, sampleCtrl, sampleDetailCtrl) {
    var sample = angular.module('sample', []);
    sample.controller('sampleCtrl', sampleCtrl);
    sample.controller('sampleDetailCtrl', sampleDetailCtrl);
    sample.directive('sampleDisplay', directives.sampleDisplay);
});
