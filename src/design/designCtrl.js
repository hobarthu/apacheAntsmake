define([], function() {
    var designCtrl = function($scope) {
        $scope.canvas = {
            customizedText: ""
        };

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
            var canvas = document.getElementById('design_rect_canvas');
            var ctx = canvas.getContext('2d');
            ctx.strokeRect(101, 101, 240, 300);
        };

        $scope.clearRect = function() {
            var canvas = document.getElementById('design_rect_canvas');
            var ctx = canvas.getContext('2d');
            ctx.clearRect(100, 100, 242, 302);
        };

        $scope.drawText = function() {
            var canvas = document.getElementById('design_text_canvas');
            var ctx = canvas.getContext('2d');
            ctx.font = "Bold 48px Arial";
            ctx.textAlign = "left";
            ctx.fillText($scope.canvas.customizedText, 100, 250);
        };

    };
    designCtrl.$inject = ['$scope'];
    return designCtrl;
});