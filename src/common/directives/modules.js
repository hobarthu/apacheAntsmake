define(['app/common/services/util/antscache-service'], function(){
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

    directives.directive("imageCanvas", ['antsCache', function(antsCache) {
        return {
            restrict: 'EAC',
            replace: true,
            scope: {
                canvasId: "@",
                imgUrl: "@",
                width: "@",
                height: "@"
            },
            template: '<canvas></canvas>',
            link: function(scope, ele, attr) {
                console.log("antsCache", antsCache);
                ele[0].id = attr.canvasId;
                var canvas = new fabric.Canvas(attr.canvasId);
                canvas.setWidth(attr.width);
                canvas.setHeight(attr.height);
                fabric.Image.fromURL(attr.imgUrl, function(oImg) {
//                     var group = new fabric.Group([oImg]);
//                    canvas.add(group);
//                    canvas.setActiveObject(group);
//                    canvas.centerObject(group);
                    canvas.add(oImg);
                    canvas.centerObject(oImg);
                    canvas.renderAll();
                    antsCache.setImageCanvas(canvas);
                });
            }
        };
    }]);
});