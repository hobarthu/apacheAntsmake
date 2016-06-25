define(['app/common/services/util/antscache-service'], function() {
    var designCtrl = function($scope, antsCache) {
        $scope.canvas = {
            customizedText: ""
        };

        var rect = new fabric.Rect({
            stroke: "white",
            strokeWidth: 10,
            fill: 'transparent',
            width: 200,
            height: 300
        });
        var text = new fabric.Text($scope.canvas.customizedText, {
            fontFamily: 'Arial',
            fontSize: 48,
            fontWeight: 'bold'
        });

        $scope.pages = [
            {order: 1, name: "设计", id: "design"},
            {order: 2, name: "选择商品", id: "chooseProduct"},
            {order: 3, name: "添加描述", id: "addDescription"}
        ];
        $scope.currentPage = $scope.pages[0];

        $scope.changePage = function(order) {
            $scope.currentPage = _.find($scope.pages, {order: order});
        };

        $scope.drawRect = function() {
            console.log(antsCache.getImageCanvas());
            var canvas = antsCache.getImageCanvas();
            if (canvas) {
                canvas.add(rect);
                canvas.centerObject(rect);
                canvas.renderAll();
            }
        };

        $scope.clearRect = function() {
            console.log("remove");
            var canvas = antsCache.getImageCanvas();
            if (canvas) {
                canvas.remove(rect);
            }
        };

        $scope.drawText = function() {
            console.log("aa");
            var canvas = antsCache.getImageCanvas();
            if (canvas) {
                console.log($scope.canvas.customizedText);
                text.set({text: $scope.canvas.customizedText});
                canvas.add(text);
                canvas.centerObject(text);
                canvas.renderAll();
            }
        };

        (function() {
//            var canvas = new fabric.Canvas('c');
//            fabric.Image.fromURL('imgs/demo-shirt.png', function(oImg) {
//                console.log("oImg", oImg);
//                oImg.scale(0.5).setFlipX(true);
//                canvas.add(oImg);
//            });
        })();

    };
    designCtrl.$inject = ['$scope', 'antsCache'];
    return designCtrl;
});