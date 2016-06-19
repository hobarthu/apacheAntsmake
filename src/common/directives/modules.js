define([], function(){
	var directives = angular.module('directives', []);
    directives.directive("antsPlaceholder", function() {
        return {
            restrict: 'AC',
            scope: {},
            link: function(scope, ele, attr) {
                ele[0].placeholder = attr.antsPlaceholder;

                ele[0].onfocus = function() {
                    this.placeholder = '';
                };

                ele[0].onblur = function() {
                    this.placeholder = attr.antsPlaceholder;
                };
            }
        };
    });
});