define([], function() {
    var designCtrl = function($scope) {
        $scope.pages = [
            {order: 1, name: "设计", id: "design"},
            {order: 2, name: "选择商品", id: "chooseProduct"},
            {order: 3, name: "添加描述", id: "addDescription"}
        ];
        $scope.currentPage = $scope.pages[0];

        $scope.changePage = function(order) {
            $scope.currentPage = _.find($scope.pages, {order: order});
        };
    };
    designCtrl.$inject = ['$scope'];
    return designCtrl;
});