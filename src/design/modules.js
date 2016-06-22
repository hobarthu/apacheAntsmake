define(["app/design/designCtrl", "app/design/designDetailCtrl"], function(designCtrl, designDetailCtrl) {
    var design = angular.module('design', []);
    design.controller('designCtrl', designCtrl);
    design.controller('designDetailCtrl', designDetailCtrl);
});
